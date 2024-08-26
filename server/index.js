const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const authRoutes = require('./routes/auth.js');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);


const PORT = process.env.PORT || 3001;
mongoose.connect(process.env.MONGO_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => {
        console.log("Connected to DB")
        console.log(`Server listening on port ${PORT}`);
    });
}).catch((err) => {
    console.log(`${err} did not connect to DB`);
})

