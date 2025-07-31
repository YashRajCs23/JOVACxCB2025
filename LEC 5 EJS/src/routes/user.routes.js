const express = require("express");
const userModel = require("../model/user.model");
const mongoose = require("mongoose");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });
const imagekit = require("../config/cloudinary")
const router = express.Router();

// /register

router.get("/", async (req, res) => {
  const users = await userModel.find();
  console.log(users);

  res.render("home", { title: "home page", users });
});

router.get("/register", (req, res) => {
  res.render("register", { title: "register page" });
});

router.post("/register", upload.single("image"), async (req, res) => {
  try {
    const { name, email } = req.body;
    const file = req.file;

    if (!file) return res.status(400).send("Image file missing.");

    // Upload to ImageKit
    const result = await imagekit.upload({
      file: file.buffer,               // buffer from multer
      fileName: file.originalname,     // original file name
      isPublished : true,
      isPrivateFile : false
    });

    console.log("ImageKit Upload:", result);

    const user = await userModel.create({
      name,
      email,
      picture: result.url,             // save image URL
    });

    res.redirect("/register-successful");
  } catch (err) {
    console.error("ImageKit Upload Error:", err);
    res.status(500).send("Upload failed");
  }
});

router.get("/register-successful", (req, res) => {
  res.render("registered", { title: "successful" });
});

router.patch("/update/:id", async (req, res) => {
  let userId = req.params.id;
  let { name } = req.query;
  console.log(userId);

  if (!userId) {
    return res.json({ message: "user id is required" });
  }

  // false ----> ! ----> true
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.json({ message: "Invalid user id" });
  }

  if (!name) {
    return res.json({ message: "name is required" });
  }

  let user = await userModel.findById(userId);
  // null ----> falsy value

  if (!user) {
    return res.json({ message: "user not found" });
  }

  await userModel.findByIdAndUpdate({ _id: userId }, { name: name });
  console.log(user);

  res.json({ message: "user update successful" });
});

router.delete("/delete/:id", async (req, res) => {
  let userId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.json({ message: "Invalid user id" });
  }

  let user = await userModel.findById(userId);
  // null ----> falsy value

  if (!user) {
    return res.json({ message: "user not found" });
  }

  const userData = await userModel.findByIdAndDelete(userId);

  res.json({ message: "user data deleted successfully...", userData });
});

module.exports = router;
