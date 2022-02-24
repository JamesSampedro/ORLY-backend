import { Schema, model } from "mongoose";
import {pick} from 'lodash'


const IdApplicationSchema = new Schema({
    name:{
        type:String,
        required:true,
        default: "ID Application"
    },
    lastName:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    middleName:{
        type:String,
        required:true
    },
    designation:{
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
    sss:{
        type:String,
    },
    birthday:{
        type: String,
        required:true
    },
    contactNumber:{
        type:String,
        required:true
    },
    emergencyContact:{
        type:String,
        required:true
    },
    picture: {
        type:String,
        required:true
    },
    signature: {
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true,
        default: "100.00"
    },
    dateSubmitted:{
        type: String,
    },
    status:{
        type:String,
        required:true,
    },
    prrofOfPayment: {
        type:String,
    },
    statusChangeDate:{
        type:String
    },
    rejectReason:{
        type:String
    },
    author:{
        type: Schema.Types.ObjectId
    }

},{timestamps:true})



const IdApplication= model('idApplication', IdApplicationSchema)

export default IdApplication