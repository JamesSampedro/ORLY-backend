import {Router} from "express"
import {AuthenticateValidations, RegisterValidations, ResetPassword} from '../validators/user-validators'
import {userAuth} from "../middlewares/auth-guard"
import uploader from "../middlewares/uploader"
import Validator from '../middlewares/validator-middleware'
import {register,verification,login,userProfile,resetPassword,resetPasswordForm,resetPasswordSuccess,
testMail,rejectVerification,updateUserProfile} from '../controllers/users'
import {body} from 'express-validator'
import { authPage } from "../middlewares/authorization-middleware"
const router = Router()

/** 
 * @description To create a new User Account
 * @api /users/api/register
 * @access Public
 * @type POST
*/

router.post('/api/register',RegisterValidations,Validator, uploader.single('validId'), register)

/** 
 * @description To verify a new user's account through email
 * @api /users/verify-now/:verificationCode
 * @access Public <Only Via Email>
 * @type Get
*/

router.get('/api/verify-now/:verificationCode', verification)

/** 
 * @description To reject the users account verification request
 * @api /users/verify-reject/:verificationCode
 * @access Public <Only Via Email>
 * @type Delete
*/

router.get('/api/verify-reject/:verificationCode',rejectVerification)

/** 
 * @description To authenticate user and get auth token
 * @api /users/api/authenticate
 * @access Public
 * @type POST
*/

router.post('/api/authenticate', AuthenticateValidations, Validator, login)

/** 
 * @description to get the authenticated user's profile
 * @api /users/api/authenticate
 * @access Private  
 * @type Get
*/

router.get('/api/authenticate', userAuth,authPage(["user"]) ,userProfile)

/** 
 * @description to initiate the password reset process
 * @api /users/reset-password
 * @access Public
 * @type Put
*/


router.put('/api/authenticate', userAuth, authPage(["user"]), updateUserProfile)

router.put('/api/reset-password',ResetPassword,Validator,resetPassword)

/** 
 * @description rendering reset password form
 * @api /users/reset-password-now/:resetPasswordToken
 * @access Restricted via Email
 * @type GET
*/

router.get('/reset-password-now/:resetPasswordToken', resetPasswordForm)

/** 
 * @description to change the password
 * @api /users/api/reset-password-now
 * @access Restricted via Email
 * @type POST
*/

router.post('/api/reset-password-now',resetPasswordSuccess)

router.post('/api/test-mail', testMail)

export default router

