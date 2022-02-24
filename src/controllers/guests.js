import {ACCOUNT_VALIDATOR_EMAIL} from '../constants'
import sendMail from '../functions/email-sender'
import { contactUsEmailTemplate } from '../templates/emails'

export const sendContactUs = async (req,res) => {
    try {
        let {fullName,email,message} = req.body
        const html = contactUsEmailTemplate(email,fullName,message)
        await sendMail(ACCOUNT_VALIDATOR_EMAIL,"Contact Us Message","Someone sent an email through our website",html,[])

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