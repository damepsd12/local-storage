const bcrypt = require('bcrypt');
const { isEmail } = require('validator');
const User = require('../models/user');
const saltRounds = 10;

// Fonction de validation des données
const validateSignUpData = async (name, lastName,sex, birthDay, birthMonth, birthYear, email, password, ConfirmPassword ) => {
    if (!name || !lastName|| ! sex|| !birthDay|| !birthMonth || !birthYear|| !email || !password || ! ConfirmPassword ) {
        throw new Error('All fields (name, email, password) are required');
    }
    if (name.trim().length === 0) {
        throw new Error('Please enter a name');
    }
    if (!isEmail(email)) {
        throw new Error('Please enter a valid email');
    }
    if (password.trim().length < 6) {
        throw new Error('Minimum password length is 6 characters');
    }

    const existingUser = await User.findOne({ email }).exec();
    if (existingUser) {
        throw new Error('Email already registered');
    }
    if(password != ConfirmPassword){
        throw new Error('Les mot de passe ne sont pas identique');
    }
};

// Contrôleur principal pour l'inscription
const signUpHandler = async (req, res) => {
    const {name, email, lastName, sex, birthDay, birthMonth, birthYear,  password, ConfirmPassword } = req.body;

    try {
        await validateSignUpData(name,lastName, sex, birthDay, birthMonth, birthYear, email, password, ConfirmPassword);
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const user = await User.create({
            name: name,
            lastName:lastName,
            sex: sex,
            birthDay: birthDay,
            birthMonth: birthMonth,
            birthYear: birthYear,
            email,
            password: hashedPassword,
            ConfirmPassword: hashedPassword
        });

        res.status(201).json({
            message: 'Account created successfully',
            user: { _id: user._id, name: user.name, lastName: user.lastName,
                    sex: user.sex, birthDay: user.birthDay, birthMonth: user.birthMonth,
                     birthYear: user.birthYear, email: user.email, ConfirmPassword: user.ConfirmPassword },
        });
    } catch (error) {
        console.error('Signup error:', error.message);
        res.status(400).json({ message: error.message });
    }
};

module.exports = signUpHandler;
