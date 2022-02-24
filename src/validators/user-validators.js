import { body, check, validationResult } from 'express-validator';

const firstName = body('firstName', "First Name is required.").not().isEmpty()
const lastName = body('lastName', "Last Name is required.").not().isEmpty()
const username = body('username', "Username is required.").not().isEmpty()
const email = body('email', "Please provide a valid email address").isEmail()
const password = body(
    'password', 
    "Password is required of minimum length of 6")
    .isLength({
        min:6,
    })




export const RegisterValidations = []
export const AuthenticateValidations = [username, password]
export const ResetPassword = [email]