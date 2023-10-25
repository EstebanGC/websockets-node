import express from "express"
import logger from "morgan"

const port = process.env.PORT ?? 3000

const app = express()

app.use(logger('dev'))

app.get('/', (req, res) => [
    res.send("<h1>Hello from Chat App")
])

app.listen(port, () => {
    console.log('Server running on port ${port}')
})