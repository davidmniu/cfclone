var express = require('express');
var router = express.Router();

const solutionController = require("../controllers/solutionController")

router.get('/users/:userId/solutions/:solutionId', solutionController.get_solution);
router.post('/users/:userId/solutions/:solutionId/submit', solutionController.run_solution);

module.exports = router;
