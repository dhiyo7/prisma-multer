const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./public/book_image");
  },
  filename : (req, file, callback) => {
      console.log(file);
      const nameFormat = `${Date.now()} - ${file.fieldname}${path.extname(
          file.originalname
      )}`;

      callback(null, nameFormat);
  }
});

const upload = multer({
    storage : storage,
    limits : 1024
});

const singleUpload = (req, res, next) => {
    const uploadSingle = upload.single("book_image");
    uploadSingle(req, res , (err) => {
        if(err){
            res.status(500).send({
                msg : "Multer Error",
                error : err
            })
        }else{
            next();
        }
    })
}

module.exports = singleUpload