import { Schema, model } from "mongoose";
import {pick} from 'lodash'


const TotalSalesSchema = new Schema({
    saleList:[{
        name:String,
        amount:Number,
    }],
    
},{timestamps:true})


const TotalSales = model('totalSales', TotalSalesSchema)

export default TotalSales