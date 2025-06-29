const mongoose =require('mongoose');


// Define the User schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true //fixed
    },
    age: {
        type: Number,
        required: true
    },
    email:{
        type:String
    },
    mobile: {
        type:String
    },
    address: {
        type: String,
        required: true
    },
    aadharCardNumber: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ['voter','admin'], //only access voter or admin
        default: 'voter'   //by default only voter login
    },
    isVoted: {
        type:Boolean,
        default:false
    }
});



// Create the user
const User= mongoose.model('User', userSchema); 
module.exports =User;  //export