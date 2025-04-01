const express = require('express');
const mongoose = require('mongoose');
const swaggerDocs = require('./swagger');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Database Connection
mongoose.connect('mongodb://localhost:27017/userapi', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Database connection error:', err));

// Register Routes
app.use('/api', userRoutes);

// Serve Swagger Docs
swaggerDocs(app);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
