const Solution = require("../models/solution")
const asyncHandler = require("express-async-handler");
const solutionQueue = require("./solutionQueue");

exports.get_solution = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented");
});

exports.update_solution = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented");
});

exports.run_solution = asyncHandler(async (req, res, next) => {
    // do validation later
    const solution = new Solution({
        problem: req.body.problem,
        code: req.body.code,
    })
});