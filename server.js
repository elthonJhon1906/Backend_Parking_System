const express = require('express');
const ultrasonic1Routes = require('./src/routes/ultrasonic1.js')
// const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
require('dotenv').config();

// app.use('/users', userRoutes);

app.use('/ultrasonic1', ultrasonic1Routes);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

