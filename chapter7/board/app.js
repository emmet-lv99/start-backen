//controller 역할

const express = require("express")
const handlebars = require("express-handlebars")
const app = express()

const mongodbConnection = require("./configs/monghdb-connection")

app.engine("handlebars", handlebars.engine())
app.set("view engine", "handlebars")
app.set("views", __dirname + "/views")

app.get("/", (req, res) => {
  res.render("home", { title: "테스트 게시판", message: "만나서 반갑습니다!" })
})

app.get("/write", (req, res) => {
  res.render("write", { title: "테스트 게시판" })
})

app.get("/detail/:id", async (req, res) => {
  res.render("detail", { title: "테스트 게시판" })
})

app.listen(3000, async () => {
  console.log("Server started")
  const mongoClient = await mongodbConnection()
  collection = mongoClient.db().cellection("post")
  console.log("MongoDB connected")
})
