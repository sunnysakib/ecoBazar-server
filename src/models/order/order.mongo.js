const mongoose = require("mongoose");

const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    customer_id: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
    },
    Product_ids: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    // quantity: Number,
    total_amount: Number,
    status: {
      type: String,
      enum: {
        values: ["Received", "On the way", "Processing", "Delivered"],
      },
    },
    payment_method: {
      type: String,
      enum: {
        values: ["Bikash", "Nogod", "Cash on Delivery", "card"],
      },
    },
    payment_status: {
      type: String,
      values: ["pending", "successfull"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
