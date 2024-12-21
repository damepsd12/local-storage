// controllers/dashboard.js
const User = require('../models/user'); // Assurez-vous d'importer votre modèle utilisateur

// Récupérer les informations de l'utilisateur
const getUserInfo = async (req, res) => {
    try {
        const userId = req.user.id; 
        const user = await User.findById(userId);
        
        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la récupération des informations utilisateur" });
    }
};

// Déconnexion
const logout = (req, res) => {
    req.logout(); 
    res.json({ message: "Déconnexion réussie" });
};

module.exports = { getUserInfo, logout }; 