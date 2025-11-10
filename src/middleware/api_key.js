const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const VALID_API_KEY = process.env.API_KEY;

const authenticateApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  
  if (!apiKey || !VALID_API_KEY.includes(apiKey)) {
    return res.status(403).json({ message: 'Forbidden: Invalid or missing API Key' });
  }
  next();
};

module.exports = authenticateApiKey;