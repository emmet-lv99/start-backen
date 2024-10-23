const { MongoClient } = require("mongodb")

const uri = "mongodb+srv://dachan:<db_password>@cluster0.pf9h8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/board"

module.exports = function (callback) {
  return MongoClient.connect(uri, callback)
}
