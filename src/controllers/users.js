import {join} from 'path'
import {User} from '../models'
import {DOMAIN,ACCOUNT_VALIDATOR_EMAIL} from '../constants'
import sendMail from '../functions/email-sender'
import {randomBytes} from 'crypto'
import { htmlTemplate } from '../templates/emails/htmlTemplate'
import { successfulVerificationEmailTemplate,verifyUserAccountEmailTemplate,resetPasswordEmailTemplate,
verificationRejectedEmailTemplate,resetPasswordSuccessfulEmailTemplate } from '../templates/emails'


const fs = require("fs")

export const testMail = async (req,res) => {
    try {
        const css = fs.readFileSync(join(__dirname,'../templates/emails/verifyUserAccount/style.css'))
        let {email} = req.body
        const html = htmlTemplate("");
        await sendMail(email,"Account Verification Request","Please verify this account",html,[])
        return res.status(201).json({
            success: true,
            message: "Email is Working"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message: "Email Not Sent"
        })
    }
}

export const register = async (req,res) => {
    try {
        let{body, file} = req
        let { username, email} = body
        //Check if the username is taken or not
        let user = await User.findOne({username})
        if(user){
            return res.status(400).json({
                success: false,
                message: "Username is already taken"
            })
        }
        //Check if the user exist with that email
        user = await User.findOne({email})
        if(user){
            return res.status(400).json({
                success: false,
                message: "Email is already registered. Did you forget the password? Try resetting it"
            })
        }

        let pathToValidId = ""
        if(file){
            //pathToValidId = DOMAIN + file.path.split('uploads\\')[1]
            pathToValidId = DOMAIN + file.filename
        }
        
        user = new User({
            ...body,
            verificationCode: randomBytes(20).toString("hex"),
            validId: pathToValidId,
            role: "user"
        }) 
        
        await user.save()

        const html = verifyUserAccountEmailTemplate(DOMAIN,user,user.validId);
        await sendMail(ACCOUNT_VALIDATOR_EMAIL,"Account Verification Request","Please verify this account",html)
        return res.status(201).json({
            success: true,
            message: "Hurray! Your Account is created, please wait for verification"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message: "An error occurred"
        })
    }
}

export const verification = async(req,res) =>{
    try {
        let {verificationCode} = req.params
        let user = await User.findOne({verificationCode})
        if(!user){
            return res.status(401).json({
                success: false,
                message: "Unauthorized access. Invalid Verification Code"
            })
        }
        user.verified = true
        user.verificationCode = undefined
        await user.save()

        const html = successfulVerificationEmailTemplate(user.firstName,"http://localhost:3000/")
 
        await sendMail(user.email,"Verified Account","Your account has been verified by our Admin",html,[])
        return res.status(201).json({
            success: true,
            message: "Account has been verified"
        })
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized access. Invalid Verification Code"
        })
    }
}

export const rejectVerification = async(req,res) => {
    try{
        let {verificationCode} = req.params
        let user = await User.findOne({verificationCode})
        if(!user){
            return res.status(401).json({
                success: false,
                message: "Unauthorized access. Invalid Verification Code"
            })
        }
        
        const html = verificationRejectedEmailTemplate(user.firstName);
        await sendMail(user.email,"Account Verification Rejected","Your verification request has been denied",html,[])

        await User.deleteOne({verificationCode: verificationCode})

        return res.status(201).json({
            success: true,
            message: "Account registration has been rejected"
        })
    } catch(error){
        return res.status(401).json({
            success: false,
            message: "Unauthorized access. Invalid Verification Code"
        })
    }
}

export const login = async (req,res)=>{
    try {
        let {username, password} = req.body
        let user = await User.findOne({username})
        if(!user){
            return res.status(404).json({
                success: false,
                message: "Username not found"
            })
        }

        if(!(await user.comparePassword(password))){
            return res.status(401).json({
                success: false,
                message: "Incorrect password"
            })
        }
        let token = await user.generateJWT()
        return res.status(200).json({
            success: true,
            user: user.getUserInfo(),
            token: `Bearer ${token}`,
            message: "Hurray! You are now logged in"
        })
    } catch (error) {   
        return res.status(500).json({
            success:false,
            message: "An error occurred"
        })
    }
}

export const userProfile = async(req,res) => {
      try {
        let user = await User.findById(req.user._id)
        return res.status(200).json({
            user:user,
            success:true,
            message:"Successful"
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"Unsuccessful"
        })
    }

    
}

export const updateUserProfile = async(req,res) => {
    try {
        
        const {body} = req
        let user = await User.findById(req.user._id)

        if(body.password){
            if(!await user.comparePassword(body.password)){
                return res.status(401).json({
                    success:false,
                    message: "Wrong Password"
                })
            }else{
                user.password = body.newPassword
                await user.save()
            }

        }

        const{password,newPassword, ...info} = body
        
        user = await User.findByIdAndUpdate(req.user._id,{
            ...info,
        })

        return res.status(200).json({
            user:user,
            success:true,
            message:"Successful"
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"Unsuccessful"
        })
    }
}

export const resetPassword = async(req,res)=>{
    try {
        let {email} = req.body
        let user = await User.findOne({email})
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User with the email is not found"
            })
        }
        user.generatePasswordReset()
        await user.save()

        const html = resetPasswordEmailTemplate(DOMAIN,user.firstName,user.resetPasswordToken)
        
        //Send email to the user with the verification link
        await sendMail(user.email,"Reset Password","Click the link to complete resetting your password",html,[])

        return res.status(200).json({
            success: true,
            message: "Password reset link is sent to your email"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message: "An error occurred"
        })
    }
}

export const resetPasswordForm = async (req,res)=>{
    try {
        let {resetPasswordToken} = req.params
        let user = await User.findOne({
            resetPasswordToken,
            resetPasswordExpiresIn:{$gt: Date.now()},
        })
        if(!user){
            return res.status(401).json({
                success:false,
                message: "Password reset token is invalid or expired"
            })
        }
        return res.sendFile(join(__dirname, "../templates/password-reset.html"))
    } catch (error) {
        return res.sendFile(join(__dirname, '../templates/error.html'))
    }
}

export const resetPasswordSuccess = async(req,res)=>{
    try {
        let {resetPasswordToken, password} = req.body
        let user = await User.findOne({
            resetPasswordToken,
            resetPasswordExpiresIn:{$gt: Date.now()},
        })
        if(!user){
            return res.status(401).json({
                success:false,
                message: "Password reset token is invalid or expired"
            })
        }
        user.password = password
        user.resetPasswordToken = undefined
        user.resetPasswordExpiresIn = undefined
        await user.save()

        const html = resetPasswordSuccessfulEmailTemplate(user.firstName)
        await sendMail(user.email,"Reset Password Successful","Password has been changed",html)

        return res.status(200).json({
            success: true,
            message: "Password reset link is sent to your email"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
}
