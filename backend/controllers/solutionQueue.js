const Bull = require('bull')
const Problem = require("../models/problem")

const solutionQueue = new Bull();

solutionQueue.process(async (req) => {
    const problemId = req.body.problemId;
    const problem = await Problem.findOne({ _id: problemId });
    const len = problem.testCases.length;
    
});

module.exports = solutionQueue;