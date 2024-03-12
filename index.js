require("dotenv/config")
require("./db.js")

const express = require("express")
const app = express()
const PORT = process.env.PORT

app.use(express.json())


app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(PORT, () => {
    console.log(`Website listening on http://localhost:${PORT}`)
})
