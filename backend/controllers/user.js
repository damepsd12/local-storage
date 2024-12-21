// server/controllers/user.js
const User = require("../models/user");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.status(401).json({ auth: false, message: "No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_LOGIN_TOKEN);
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(404).json({ auth: false, message: "User not found" });
        }

        return res.status(200).json({ auth: true, user });
    } catch (error) {
        return res.status(401).json({ auth: false, message: "Invalid token", error: error.message });
    }
}; 