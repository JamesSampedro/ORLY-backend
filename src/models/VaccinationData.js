import { Schema, model } from "mongoose";
import {pick} from 'lodash'


const VaccinationDataSchema = new Schema({
    firstDose:{
        type:Number,
        required:true,
    },
    secondDose:{
        type:Number,
        required:true,
    },
    residents:{
        type:Number,
        required:true,
    },
    month:{
        type:String,
        required:true,
    },
    year:{
        type:String,
        required:true,
    }

},{timestamps:true})


const VaccinationData = model('vaccinationData', VaccinationDataSchema)

export default VaccinationData