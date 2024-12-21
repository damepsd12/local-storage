const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

module.exports = async (req, res) => {
    
    const { email, password } = req.body;

    try {
        // Vérification des champs obligatoires
        if (!email || !password) {
            
            return res.status(400).json({ message: "L'email et le mot de passe sont obligatoires" });
        }

        console.log(`Demande de connexion reçue par e-mail: ${email}`);

        // Recherche de l'utilisateur dans la base de données
        const dbUser = await User.findOne({ email }).exec();
        if (!dbUser) {
            console.error(`Utilisateur non trouvé pour l'e-mail: ${email}`);
            return res.status(400).json({ message: "Utilisateur non trouvé" });
        }


        // Vérification du mot de passe
        const match = await bcrypt.compare(password, dbUser.password);
        if (!match) {
            console.error(`Tentative de mot de passe invalide : ${email}`);
            return res.status(400).json({ message: "Mot de passe invalide" });
        }


        // Création du token JWT
        const token = jwt.sign(
            { _id: dbUser._id, name: dbUser.name, email: dbUser.email },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        console.log(`Jeton JWT généré pour l'utilisateur: ${email}`);

        // Envoi de la réponse avec le token
        res.status(200).json({
            message: "Connexion réussie. Vous êtes redirigé vers le dashbord.",
            token,
            user: {
                id: dbUser._id,
                name: dbUser.name,
                email: dbUser.email,
            },
        });

        console.log(`Connexion réussie pour l'utilisateur: ${email}`);
    } catch (error) {
        console.error("Erreur de connexion:", error.message);
        res.status(500).json({ message: "Erreur interne du serveur" });
    }
};
