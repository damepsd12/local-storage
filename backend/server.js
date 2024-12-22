const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express")
require("dotenv").config();
const productRoutes = require('./routes/productRoutes')

const userRoutes = require('./routes/authRoutes');
// const userRoutes = require('./routes/authRoutes');

const app = express();

// Middleware pour permettre la gestion des CORS et analyser le corps des requêtes JSON
app.use(cors());
app.use(express.json());

// Connectez MongoDB Atlas
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

app.use(cors({
    origin:'http://localhost:3000'
}));

// Utilisation des routes d'authentification
app.use('/api/users', userRoutes);
// app.use("/api", authRoutes);
app.use('/api', productRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server listening at port: ${PORT}`);

});