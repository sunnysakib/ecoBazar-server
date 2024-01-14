const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: {
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
      min: [0, "Quantity must be positive"],
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
    image: {
      type: String,
      required: [true, "Product image must be required"],
    },
    description: {
      type: String,
    },
    category_id: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Category must be required"],
    },
    tag: [String],
    discount: Number,
    status: {
      type: String,
      required: [true, "Status must be required"],
      enum: {
        values: ["in-stock", "out-of-stock", "discontinued"],
        massage: "status can't be `{value}`",
      },
    },
    available_stocks: {
      type: Number,
      required: [true, "Product Stock Requied"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
