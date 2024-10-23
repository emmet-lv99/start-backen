const { MongoClient } = require("mongodb")

const uri =
  "mongodb+srv://dachan:qkqhxod1!23@cluster0.pf9h8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/"

module.exports = function (callback) {
  return MongoClient.connect(uri, callback)
}
