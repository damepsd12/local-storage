const jwt = require("jsonwebtoken");

module.exports = (req, res) => {
    const { token } = req.body;

    // Vérifiez si un token est présent
    if (!token) {
        return res.status(401).json({
            auth: false,
            message: "No token found in the request",
        });
    }

    try {
        // Vérifiez et décodez le token
        const decoded = jwt.verify(token, process.env.JWT_LOGIN_TOKEN);

        return res.status(200).json({
            auth: true,
            data: decoded,
        });
    } catch (error) {
        // Gestion des erreurs liées au token
        return res.status(401).json({
            auth: false,
            message: "Invalid token",
            error: error.message,
        });
    }
};

