const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  // cloud_name: "dtjrdz9oq",
  // api_key: "689511183569294",
  // api_secret: "ntC4n7aienS7OTot2kLzN1fTA2M",
  cloud_name: "dykoodzii",
  api_key: "456491375924611",
  api_secret: "7_jhYdh3FAUqxFBhe_6-g4nLX0c",
  
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
