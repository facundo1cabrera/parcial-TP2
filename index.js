import express from 'express'
import studentsRouter from './routes/studentsRoute.js';

const PORT = 8080
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/", studentsRouter);

app.listen(PORT, () => console.log(`Server listening on ${PORT}`))
app.on("Error", (error)=> console.log(`Server error: ${error}`))