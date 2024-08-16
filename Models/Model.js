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
    status:{
        type:Boolean,
        default:true
    },
    role:{
         type:String
    },
    teams:{
        type:String
    }
})

const Edunova = mongoose.model('Edunova',edunova);

export default Edunova;