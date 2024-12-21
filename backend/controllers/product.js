const ProductModel = require('../models/product');

exports.addProduct = async (req, res) => {
    const { name, nameGroup, description, dosage, price, currency, stock} = req.body;

    try {
        if (!name || !nameGroup || !description || !dosage || price <= 0 || !currency || !stock) {
            return res.status(400).json({
                message: "Champs obligatoires manquants",
                missingFields: {
                    name: !name,
                    nameGroup: !nameGroup,
                    description: !description,
                    dosage: !dosage,
                    price: !price || price <= 0,
                    currency: !currency,
                    stock: !stock,
                }
            });
        }

        const newProduct = new ProductModel({
            name,
            nameGroup,
            description,
            dosage,
            price,
            currency: currency || 'FCFA',
            stock,
        });

        const savedProduct = await newProduct.save();

        res.status(201).json({
            message: "Médicament ajouté avec succès",
            product: savedProduct
        });
        
    } catch (error) {
        console.error("Erreur lors de l'ajout du médicament:", error);
        res.status(500).json({ 
            message: "Erreur interne du serveur", 
            error: error.message 
        });
    }
};

exports.getAllProducts = async (req, res) => {
    // const userId = req.user.id;
    // if (!req.user) {
    //     return res.status(401).json({ message: 'Unauthorized' });
    // }
    
    try {
        const products = await ProductModel.find().sort({ createdAt: -1 });
        res.status(200).json({ products });
        // const products = await ProductModel.find({ userId }).sort({ createdAt: -1 });
        // res.status(200).json({ products });
    } catch (error) {
        console.error("Erreur lors de la récupération des produits:", error);
        res.status(500).json({ 
            message: "Erreur interne du serveur", 
            error: error.message 
        });
    }
};

