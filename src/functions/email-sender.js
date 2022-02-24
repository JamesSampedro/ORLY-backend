import sgMail from '@sendgrid/mail'
import {SENDGRID_API, HOST_EMAIL} from '../constants'

sgMail.setApiKey(SENDGRID_API)

const sendMail = async (email,subject,text,html,attachments = []) =>{
    try{
        const msg = {
            to: email, 
            from: HOST_EMAIL, 
            subject,
            text,
            html,
            attachments,
          }
          await sgMail.send(msg)
          console.log("MAIL_SENT");
    }catch(error){
        console.log("ERROR_MAILING", error.message)
    }finally{
        return
    }
}

export default sendMail