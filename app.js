if (!process.env.NODE_ENV) {
  require("dotenv").config()
}
const express = require("express")
const cors = require("cors")
const Controller = require("./controller")
const { User } = require("./models")

const port = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/", (req, res) => res.send("APP JALAN"))
app.post("/gsign", Controller.gsign)
app.get("/events", Controller.readEvent)
app.get("/schools/:slug", Controller.readSchoolSlug)

async function authentication(req, res, next) {
  try {
    if (!req.headers.access_token) throw { status: 401, message: "Unauthorized" }
    let payload = require("jsonwebtoken").verify(req.headers.access_token, process.env.SECRET)
    if (!payload.id) throw { status: 401, message: "Unauthorized" }
    let data = await User.findByPk(payload.id)
    if (!data) throw { status: 401, message: "Unauthorized" }
    req.user = {
      id: data.id,
      email: data.email,
      username: data.username
    }
    next()
  } catch (error) {
    if (error.status && error.status == 401) {
      res.status(error.status).json({
        message: error.message
      })
    } else {
      res.status(500).json({
        message: "Internal server error"
      })
    }
  }
}


app.post("/rates", authentication, Controller.createSchoolRate)
app.get("/rates/:email", authentication, Controller.readMySchoolRate)


app.listen(port, () => {
  console.log("http://localhost:" + port);
})