import { Schema, model } from "mongoose";
import {pick} from 'lodash'


const CertificateOfIndigencySchema = new Schema({
    name:{
        type:String,
        required:true,
        default: "Certificate Of Indigency"
    },
    fullName:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    issuedFor:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    dateSubmitted:{
        type: String,
    },
    status:{
        type:String,
        required:true
    },
    rejectReason:{
        type:String
    },
    statusChangeDate:{
        type:String
    },
    author:{
        type: Schema.Types.ObjectId
    }

},{timestamps:true})

// UserSchema.methods.getInfo = function (){
//     return pick(this, ["_id", "fullname","address", "issuedFor", "dateSubmitted", "status", "validId"])
// }

const CertificateOfIndigency = model('certificateOfIndigency', CertificateOfIndigencySchema)

export default CertificateOfIndigency