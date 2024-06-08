const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const swaggerDocs = require('./swaggerDoc/swagger');
const auth = require('./middleware/auth');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/auth', authRoutes);

// Swagger Documentation
swaggerDocs(app);

// Example of a protected route
app.get('/api/protected', auth, (req, res) => {
  res.send('This is a protected route');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
