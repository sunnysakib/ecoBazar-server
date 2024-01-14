const mongoose  = require('mongoose');
const {Schema}= mongoose;

const userSchema = new Schema({
    username: {
        type: 'string',
        required: [true, " username must be required"],
        unique: [true, " username must be unique"],
    },
    email: {
        type: 'string',
        required: [true, " email must be required"],
        unique: [true, " email must be unique"],
        password: {
            type: 'string',
        },
        role:{
            type: 'string',
            required: [true, " role must be required"],
            enum: {
                values: ["admin", "editor", "user"],
            }
        }
    }
})

module.exports = mongoose.model('User', userSchema);

