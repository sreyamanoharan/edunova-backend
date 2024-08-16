import mongoose from 'mongoose';

const edunova= new mongoose.Schema({
    name:{
        type: String
    },
    profilePicture:{
        type:String
    },
    email:{
        type:String
    },
    status: {
        type: String,
        enum: ['active', 'inactive'], 
        default: 'active'
      },
    role:{
         type:String
    },
    teams: [{ type: String }]
})

const Edunova = mongoose.model('Edunova',edunova);

export default Edunova;