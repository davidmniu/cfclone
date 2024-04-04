const mongoose = require("mongoose")

const Schema = mongoose.Schema

const ProblemSchema = new Schema({
    _id: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
}, {
    toJSON: { virtuals: true }
});

ProblemSchema.virtual("url").get(function() {
    return `problems/${this._id}`;
});

module.exports = mongoose.model("Problem", ProblemSchema)