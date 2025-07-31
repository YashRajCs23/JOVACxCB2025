const ImageKit = require("imagekit");

const imagekit = new ImageKit({
  publicKey: "public_M0PAK4NmC1d2995cVHB6hjiBgaE=",
  privateKey:"private_KT7FkfaTOTLNy6lVG+V7iKE2ba4=",
  urlEndpoint: "https://ik.imagekit.io/ls436o8px", // like https://ik.imagekit.io/your_id
});

module.exports = imagekit;