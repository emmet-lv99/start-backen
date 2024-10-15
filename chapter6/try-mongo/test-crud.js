const MongoClient = require("mongodb").MongoClient
const uri =
  "mongodb+srv://dachan:qkqhxod1!23@cluster0.pf9h8.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(uri)

async function main() {
  try {
    await client.connect()
    console.log("MongoDB 접속 성공")

    const collection = client.db("test").collection("person")

    await collection.insertOne({ name: "Andy", age: 30 })
    console.log("문서 추가 완료")

    const documents = await collection.find({ name: "Andy" }).toArray()
    console.log("찾은 문서", documents)

    await collection.updateOne({ name: "Andy" }, { $set: { age: 31 } })
    console.log("문서 업데이트")

    const updateDocuments = await collection.find({ name: "Andy" }).toArray()
    console.log("갱신된 문서", updateDocuments)

    await collection.deleteOne({ name: "Andy" })
    console.log("문서 삭제")

    await client.close()
  } catch (e) {
    console.log(e)
  }
}

main()
