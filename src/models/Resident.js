import { Schema, model } from "mongoose";
import {pick} from 'lodash'

const ResidentSchema = new Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    monthsResided:{
        type:Number,
        required:true
    },
    incomeRange:{
        type:String 
    },
    category:{
        type:String
    },
    mobile:{
        type:String,
    },
    householdNumber:{
        type:Number
    },
},{timestamps:true})

const Resident = model('resident', ResidentSchema)  


export default Resident