const express = require("express")
const ctrl = require("./controller")
require("dotenv").config()
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const massive = require("massive")

massive(CONNECTION_STRING).then(dbInstance => {
    app.set("db", dbInstance)
    console.log(`Database is running`)
})

const app = express()
app.use(express.json())

app.get("/api/houses", ctrl.getAllHouses)
app.post("/api/addhouse", ctrl.addHouse)
app.delete("/api/delete/:id", ctrl.delete)

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT}`)
})
