import { Schema, model } from "mongoose";
import {pick} from 'lodash'


const BusinessClearanceSchema = new Schema({
    name:{
        type:String,
        required:true,
        default: "Business Clearance"
    },
    fullName:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    businessType:{
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

// UserSchema.methods.getInfo = function (){
//     return pick(this, ["_id", "fullname","address", "issuedFor", "dateSubmitted", "status", "validId"])
// }

const BusinessClearance = model('businessClearance', BusinessClearanceSchema)

export default BusinessClearance