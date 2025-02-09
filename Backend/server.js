const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const events = require('./routes/events');
const { connectDB } = require('./utils/db');
const auth = require('./routes/auth');
const workshop = require('./routes/workshop');
const user = require('./routes/user');

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8000;

// app.use(cors())
app.use(cors({
    origin: ['https://www.invictusdtu.in', 'https://invictusdtu.in', 'http://localhost:3000'], // Allow specific origins
    methods: ['GET', 'POST'], // Allow only specific HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
    credentials: true
  }));

app.use(express.json())
// app.use(express.urlencoded({ extended: false }))

app.use("/api/user", user)
app.use("/api/auth", auth)
app.use("/api/events", events)
app.use("/api/workshop", workshop)

app.get('/', (req, res) => {
    res.send("Hello World")
})


connectDB().then(() => {
    app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))
}).catch((err) => {
    console.log("Error connecting to MongoDB \n", err);
})