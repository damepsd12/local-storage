const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  nameGroup: { type: String },
  description: { type: String },
  dosage: { type: Number },
  price: { type: Number, required: true },
  currency: { type: String, default: 'FCFA' },
  stock: { type: Number},
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
