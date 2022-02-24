import { Schema, model } from "mongoose";
import {pick} from 'lodash'


const AyudaProgramSchema = new Schema({
    programName:{
        type:String,
        required:true,
    },
    facilitator:{
        type:String,
        required:true
    },
    sponsor:{
        type:String,
        required:true
    },
    supplies:[{
        name:String,
        amount:Number,
        unit: String,
        distributed: String,
        left: String,
        perHousehold: String,
        total: String
    }],
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
    }],
    households:[{
        _id:{
            ref: 'households',
            type: Schema.Types.ObjectId
        },
        name:{
            type:String
        },
        residents:[{
            _id:{
                type: Schema.Types.ObjectId
            },
            firstName:{
                type:String
            },
            lastName:{
                type:String
            },
            address:{
                type:String,
                required:true,
            },
            age:{
                type:Number,
                required:true,
            },monthsResided:{
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
            type:String
        },
        householdAddress:{
            type:String
        }
    }],
    criteria:[
        {name:String}
    ]
},{timestamps:true})

const AyudaProgram = model('ayudaProgram', AyudaProgramSchema)

export default AyudaProgram