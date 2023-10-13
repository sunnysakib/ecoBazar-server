const mongoose = require('mongoose');
const {Schema} = mongoose;

const categorySchema = new Schema({
    name: {
        type: String,
        required: [true, "category name must be required"],
        minLength: [3, "category name must be between 3 and 50 characters"],
        maxLength: [50, "category name must be between 255 characters"],
        unique: [true, "category name must be unique"],
        trim: true,
        category_image: {
            type: String,
            required: [true, "category image must be required"],
        }
    }
})

module.exports = mongoose.model("Category", categorySchema);
