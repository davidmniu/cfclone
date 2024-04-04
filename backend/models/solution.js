const mongoose = require("mongoose")

const Schema = mongoose.Schema

const SolutionSchema = new Schema({
    problem: { type: Schema.Types.ObjectId, ref: "Problem", required: true },
    code: { type: String, required: true },
    status: { type: Boolean, required: true },
});