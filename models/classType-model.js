const { Schema, model } = require("mongoose");

const classTypeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  duration: { type: Number, required: true },
  location: { type: String, required: true },
  department: [{ type: String, required: true }],
  capacity: {type: Number, required: true}
});

const ClassType = model("ClassType", classTypeSchema);

module.exports = ClassType;
