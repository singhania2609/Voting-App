const mongoose =require('mongoose');


// Define the candidate schema
const candidateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true //fixed
    },
    party: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    votes: [    //to recode of voter which person votes with timing
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',   //reference from user
                required: true
            },
            votedAt: {
                type: Date,
                default: Data.now()
            }
        }
    ],
    voteCount: {
        type:Number,
        default:0
    }
});



// Create the user
const Candidate= mongoose.model('Candidates',candidateSchema); 
module.exports =Candidate;  //export