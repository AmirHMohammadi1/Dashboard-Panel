const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('./middleware/rateLimit');
const path = require('path');
const logger = require('morgan');
const dotenv = require('dotenv')
dotenv.config()
// const indexRouter = require('./routes/index');
const Router = require('./routes/index');

const app = express();

// اتصال به دیتابیس
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/nuxio-dashboard')
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('MongoDB connection error:', err));

const uri = process.env.MONGODB_URI;

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  } finally {
    
  }
}
run().catch(console.dir);



// میدلورهای امنیتی
app.use(helmet());
// app.use(cors({
//   origin: process.env.ALLOWED_ORIGINS || 'http://localhost:3000',
//   credentials: true
// }));
app.use(cors());
app.use(rateLimit);
app.use(express.json({ limit: '10kb' }));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use(Router);

// میدلور مدیریت خطاها
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'خطای سرور' 
  });
});

// route پیش‌فرض
app.get('/', (req, res) => {
  res.json({ message: 'Auth API is running' });
});

module.exports = app;
