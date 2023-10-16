const express = require("express");
const multer = require("multer");
// const upload = multer({ dest: 'data/' })
const bodyParser = require("body-parser");

const app = express();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "data/");
  },
  filename: function (req, file, cb) {
    const timestamp = Date.now();
    const filename = timestamp + "_" + file.originalname;
    cb(null, filename);
  },
});
const upload = multer({ storage: storage });

app.post("/bkimage", upload.single("myFile"), function (req, res, next) {
  console.log(req.file.filename);
  res.send("ok");
});

app.listen(3000);
