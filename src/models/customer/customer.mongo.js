const mongoose = require('mongoose');

const {Schema} = mongoose;

const customerSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    address: String,
    phone: String,
})

module.exports = mongoose.model('Customer', orderSchema);