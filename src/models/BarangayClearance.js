import { Schema, model } from "mongoose";
import {pick} from 'lodash'


const BarangayClearanceSchema = new Schema({
    name:{
        type:String,
        required:true,
        default: "Barangay Clearance"
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
    proofOfPayment: {
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

// UserSchema.methods.getInfo = function (){
//     return pick(this, ["_id", "fullname","address", "issuedFor", "dateSubmitted", "status", "validId"])
// }

const BarangayClearance = model('barangayClearance', BarangayClearanceSchema)

export default BarangayClearance