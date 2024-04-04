var express = require('express');
var router = express.Router();

const problemController = require("../controllers/problemController")

router.get('/', function(req, res, next) {
  console.log(process.env.PORT)
  res.send("Hello World");
});

router.get('/problems', problemController.get_all_problems);
router.put('/problems', problemController.add_problem);

router.get('/problems/:problemId', problemController.get_problem);

module.exports = router;
