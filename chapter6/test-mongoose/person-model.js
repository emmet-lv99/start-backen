var mongoose = require("mongoose")
var Schema = mongoose.Schema

const personSchema = new Schema({
  name: String,
  age: Number,
  email: { type: String, require: true },
})

module.exports = mongoose.model("Person", personSchema)
