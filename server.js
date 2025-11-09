const express = require('express');
const ultrasonic1Routes = require('./src/routes/ultrasonic1.js');
const ultrasonic2Routes = require('./src/routes/ultrasonic2.js');
const ultrasonic3Routes = require('./src/routes/ultrasonic3.js');
const ultrasonic4Routes = require('./src/routes/ultrasonic4.js');
const ultrasonic5Routes = require('./src/routes/ultrasonic5.js');
const ultrasonic6Routes = require('./src/routes/ultrasonic6.js');
const mq2Routes = require('./src/routes/mq2.js');

// const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
require('dotenv').config();

// app.use('/users', userRoutes);

app.use('/ultrasonic1', ultrasonic1Routes);
app.use('/ultrasonic2', ultrasonic2Routes);
app.use('/ultrasonic3', ultrasonic3Routes);
app.use('/ultrasonic4', ultrasonic4Routes);
app.use('/ultrasonic5', ultrasonic5Routes);
app.use('/ultrasonic6', ultrasonic6Routes);
app.use('/mq2', mq2Routes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

