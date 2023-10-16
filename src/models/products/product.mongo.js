const mongoose = require('mongoose');
const {Schema} = mongoose;
const productSchema = new Schema({
  product_name: {
    type: String,
    required: [true, "Name must be required"],
    unique: [true, "Name must be unique"],
    minLength: [3, "Name must be at least 3 characters"],
    maxLength: [50, "Name must be at between 50 characters"],
    trim: true,
  },
  quantity: {
    type: Number,
    required: [true, "Quantity must be required"],
    min: 0,
  },
  unit: {
    type: String,
    required: [true, "Unit must be required"],
    enum: {
      values: ["kg", "gm", "pcs", "bundle", "each", "ltr", "ml"],
      massage: "unit can't be `{value}`",
    },
  },
  price: {
    type: Number,
    required: [true, "Price must be required"],
    min: [0, "Price must be positive"],
    validate: {
      validator: (v) => {
        if (Number.isInteger(v)) return true;
        else return false;
      },
    },
    massage: "price must be integer value",
  },
  product_image: {
    type: String,
    required: [true, "Product image must be required"],
  },
  description: {
    type: String,
    required: [true, "Description must be required"],
  },
  category: {
    type: String,
    required: [true, "Category must be required"],
  },
  tag: [String],
  badge: String,
  dis_badge: String,
  dis_price: Number,
  product_type: [String],
  status: {
    type: String,
    enum: {
      values: ["in-stock", "out-of-stock", "discontinued"],
      massage: "status can't be `{value}`",
    },
  },
 
}, {
    timestamps: true,
});


module.exports = mongoose.model('Product', productSchema);
