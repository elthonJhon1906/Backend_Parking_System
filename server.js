const express = require('express');
const ultrasonic1Routes = require('./src/routes/ultrasonic1.js');
const ultrasonic2Routes = require('./src/routes/ultrasonic2.js');
const ultrasonic3Routes = require('./src/routes/ultrasonic3.js');
const ultrasonic4Routes = require('./src/routes/ultrasonic4.js');
const ultrasonic5Routes = require('./src/routes/ultrasonic5.js');
const ultrasonic6Routes = require('./src/routes/ultrasonic6.js');
const mq2Routes = require('./src/routes/mq2.js');
const flame_sensorRoutes = require('./src/routes/flame_sensor.js');
const authRoutes = require('./src/routes/authRoutes.js');
const transactionRoutes = require('./src/routes/transactions.js');
const rfidRoutes = require('./src/routes/rfid_routes.js');
// const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
require('dotenv').config();

// app.use('/users', userRoutes);

app.use('/api/ultrasonic1', ultrasonic1Routes);
app.use('/api/ultrasonic2', ultrasonic2Routes);
app.use('/api/ultrasonic3', ultrasonic3Routes);
app.use('/api/ultrasonic4', ultrasonic4Routes);
app.use('/api/ultrasonic5', ultrasonic5Routes);
app.use('/api/ultrasonic6', ultrasonic6Routes);
app.use('/api/mq2', mq2Routes);
app.use('/api/flame_sensor', flame_sensorRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/transaction', transactionRoutes);
app.use('/api/', rfidRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

