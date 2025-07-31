const express = require("express")
const userModel = require("../models/user.model")
const router = express.Router()

router.get("/",function (req, res) {
    res.send("home page")
})

router.get("/about",function (req, res) {
    res.send("about page")
})
router.post("/register",async function (req, res) {
   const { username , email , password } = req.body
    console.log(username);
    console.log(email);
    console.log(password);
    
    if(!username){
        return res.json({message : "username is required"})
    }

    if(!email){
        return res.json({message : "email is required"})
    }
    if(!password){
        return res.json({message : "password is required"})
    }

    let user = await userModel.findOne({ email: email });
    console.log(user);
    
    if(user){
        return res.json({message : "email is already exist"})
    }



    // const user = new userModel({
    //     username,
    //     email,
    //     password
    // })

    // console.log(user);
    
    // await user.save()


    user = await userModel.create({
        username,
        email,
        password
    })

    

    res.json({message : "register successfully" , user })

})



module.exports = router