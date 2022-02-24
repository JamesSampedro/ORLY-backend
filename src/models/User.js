import { Schema, model } from "mongoose";
import {compare, hash} from 'bcryptjs'
import {sign} from 'jsonwebtoken'
import {SECRET} from '../constants'
import {randomBytes} from 'crypto'
import {pick} from 'lodash'

const UserSchema = new Schema({
    firstName:{
        type: String,
        // required: true
    },
    middleName:{
        type: String,
        // required: true
    },
    lastName:{
        type: String,
        // required: true
    },
    address:{
        type: String,
        // required: true
    },
    birthday:{
        type: String,
        // required: true
    },
    age:{
        type: Number
    },
    maritalStatus:{
        type: String,
        // required: true
    },
    phoneNumber:{
        type: Number,
        // required: true
    },
    gender:{
        type: String,
        // required: true
    },
    occupation:{
        type: String,
        // required: true
    },
    category:{
        type: String,
        // required: true
    },
    householdNumber:{
        type: String,
        // required: true
    },
    monthsResided:{
        type: String,
        // required: true
    },
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    validId: {
        type:String,
        // required: true
    },
    role: {
        type: String,
        required: true
    },
    verified:{
        type: Boolean,
        default: false
    },
    verificationCode:{
        type:String,
        required: false
    },
    resetPasswordToken:{
        type: String,
        required: false
    },
    resetPasswordExpiresIn:{
        type: Date,
        required: false
    }
}, {timestamps: true})

UserSchema.pre('save', async function (next) {
    let user = this
    if(!user.isModified("password")) return next()
    user.password = await hash(user.password, 10)
    next()
})

UserSchema.methods.comparePassword = async function (password) {

    return await compare(password, this.password)
}

UserSchema.methods.generateJWT = async function () {
    let payload = {
        username: this.username,
        email: this.email,
        id: this._id
    }
    return await sign(payload, SECRET, {expiresIn: "1 day"})
}

UserSchema.methods.generatePasswordReset = function () {
    this.resetPasswordExpiresIn = Date.now() + 3600000;
    this.resetPasswordToken = randomBytes(20).toString("hex")
}

UserSchema.methods.getUserInfo = function (){
    return pick(this, ["_id","username","email","firstName","role","lastName"])
}

UserSchema.methods.getAllUser = function(){
    return pick(this, ["_id","email","firstName","lastName"])
}

const User = model('users', UserSchema)
export default User

