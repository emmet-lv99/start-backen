// const http = require("http")
const url = require("url")
const express = require("express")
const app = express()
const port = 3000

app.get("/", (_, res) => {
  res.set("Content-type", "text/html; charset=utf-8")
  res.end("HOME")
})

app.get("/user", user)

app.get("/feed", feed)

app.listen(port, () => {
  console.log("라우터를 만들어보자!")
})

function user(req, res) {
  const userInfo = url.parse(req.url, true).query
  res.end(`[user] name : ${userInfo.name}, age: ${userInfo.age}`)
}

function feed(_, res) {
  res.set({ "Content-type": "text/html; charset:utf-8" })
  res.end(`<ul>
    <li>picture1</li>
    <li>picture2</li>
    <li>picture3</li>
    <li>picture4</li>
    </ul>`)
}
