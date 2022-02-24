import { Schema, model } from "mongoose";
import {pick} from 'lodash'


const CedulaSchema = new Schema({
    name:{
        type:String,
        required:true,
        default: "Cedula"
    },
    fullName:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    tin:{
        type:String,
    },
    birthday:{
        type: String,
        required:true
    },
    birthplace:{
        type: String,
        required:true
    },
    height:{
        type: Number,
        required:true
    },
    weight:{
        type: Number,
        required:true
    },
    maritalStatus:{
        type: String,
        required:true
    },
    occupation:{
        type:String,
        required: true
    },
    citizenship:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true,
        default: "20.00"
    },
    dateSubmitted:{
        type: String,
    },
    status:{
        type:String,
        required:true,
    },
    statusChangeDate:{
        type:String
    },
    rejectReason:{
        type:String
    },
    proofOfPayment: {
        type:String,
    },
    author:{
        type: Schema.Types.ObjectId
    }

},{timestamps:true})



const Cedula= model('cedula', CedulaSchema)

export default Cedula