import express from "express"
import env from "dotenv"
import morgan from "morgan"

const app = express()
app.use(morgan("combined"))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`)
})


