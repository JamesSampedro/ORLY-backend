import { Schema, model } from "mongoose";
import {pick} from 'lodash'


const SupplySchema = new Schema({
    itemName:{
        type:String,
        required:true,
    },
    unit:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },

},{timestamps:true})


const Supply = model('supply', SupplySchema)

export default Supply