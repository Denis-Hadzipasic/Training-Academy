const {Schema, model} = require("mongoose")

const classActivitySchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    duration: { type: Number, required: true },
    location: { type: String, required: true },
    department: [{ type: String, required: true }],
    capacity: {type: Number, required: true},
    type: {type: Schema.Types.ObjectId, ref: "ClassType" },
    registeredUsers: [{ type: Schema.Types.ObjectId, ref: "User" }]
})

const ClassActivity = model("ClassActivitie", classActivitySchema)

module.exports = ClassActivity