import { Schema, model } from "mongoose";
import {pick} from 'lodash'

const HouseholdSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    residents:[{
        _id:{
            ref: 'residents',
            type: Schema.Types.ObjectId
        },
        firstName:{
            type:String
        },
        lastName:{
            type:String
        },
        address:{
            type:String
        },
        age:{
            type:Number
        },
        monthsResided:{
            type:Number
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
    }],
    ayudaStatus:{
        type:String,
        required:true,
    },
    claimedStatus: {
        type:String,
        required:true,
    },
    criteria:[],
    householdContact:{
        type:String,
    },
    householdAddress:{
        type:String,
    },
},{timestamps:true})

const Household = model('household', HouseholdSchema)  


export default Household