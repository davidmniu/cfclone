const Problem = require("../models/problem")
const asyncHandler = require("express-async-handler")
const fs = require('node:fs');

exports.get_all_problems = asyncHandler(async (req, res, next) => {
    const problems = await Problem.find({}).exec();
    console.log(problems);
    res.send(JSON.stringify(problems));
});

exports.add_problem = asyncHandler(async (req, res, next) => {
    const problem = new Problem({
        title: req.body.title,
        description: req.body.description,
    });

    const problemExists = await Problem.findOne({ title: req.body.title }).exec();

    if (problemExists) {
        res.send("Problem title taken");
    } else {
        const numProblems = await Problem.countDocuments({}).exec();
        console.log(numProblems)
        problem._id = numProblems+1;
        console.log(problem)
        await problem.save();
        res.send("Problem saved");
    }
});

exports.get_problem = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented");
});