let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
mongoose.connect("localhost:27017/StressCheck");
let Schema = mongoose.Schema;

let blogSchema = new Schema(
  {
    moodNum: String
  },
  { collection: "StressCount" }
);
let StressChecker = mongoose.model("MoodInfo", blogSchema);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" })
});

router.post("/setMoodNum", function (req, res, next) {
  console.log(req.body)
  var data = new StressChecker(req.body)
  data.save()
  res.end()
});

router.post("/getMoodNum", function (req, res, next) {
  StressChecker.find().then(function (docs) {
    let theDoc = docs[docs.length-1]
     console.log("/getMoodNum: " + theDoc)
     // theDoc = JSON.stringify(theDoc)
    res.status(200).json(theDoc)
  });
});

module.exports = router;
