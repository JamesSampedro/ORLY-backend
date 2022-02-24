import { Schema, model } from "mongoose";
import {pick} from 'lodash'


const EquipmentSchema = new Schema({
    itemName:{
        type:String,
        required:true,
    },

},{timestamps:true})


const Equipment = model('equipment', EquipmentSchema)

export default Equipment