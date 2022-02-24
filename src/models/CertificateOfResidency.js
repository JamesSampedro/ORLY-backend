import { Schema, model } from "mongoose";
import {pick} from 'lodash'


const CertificateOfResidencySchema = new Schema({
    name:{
        type:String,
        required:true,
        default: "Certificate Of Residency"
    },
    fullName:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    livingSince:{
        type:Number,
        required:true
    },
    price:{
        type:String,
        required:true,
        default: "00.00"
    },
    dateSubmitted:{
        type: String,
    },
    statusChangeDate:{
        type:String
    },
    status:{
        type:String,
        required:true
    },
    rejectReason:{
        type:String
    },
    author:{
        type: Schema.Types.ObjectId
    }

},{timestamps:true})



const CertificateOfResidency= model('certificateOfResidency', CertificateOfResidencySchema)

export default CertificateOfResidency