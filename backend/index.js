const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/loginuser');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json());



// Logging middleware placed after route handling middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(cors());
// Error handling middleware

app.use('/api/login', router);

mongoose.connect('mongodb://localhost:27017/mine', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
