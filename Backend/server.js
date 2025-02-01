const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const events = require('./routes/events');
const { connectDB } = require('./utils/db');

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8000;

app.use(cors())
// app.use(cors({
//     origin: ['https://example.com', 'https://another-allowed.com'],
//     methods: ['GET', 'POST'], // Allow only specific HTTP methods
//     allowedHeaders: ['Content-Type', 'Authorization'] // Allow specific headers
//   }));

app.use("/api/events", events)


connectDB().then(() => {
    app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))
}).catch((err) => {
    console.log("Error connecting to MongoDB \n", err);
})