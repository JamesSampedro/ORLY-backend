import { htmlTemplate } from "./htmlTemplate"

export const contactUsEmailTemplate = (senderEmail,name,message) => {
    const body = `
    <h1 style="color:black;font-size:2rem;margin:2rem 1rem 1rem;">Hello Admin!</h1>    
    <p style="color:black;font-size:1rem;margin:1rem;">Here is an Email Sent By : ${name}</p>
    <p style="color:black;font-size:1rem;margin:1rem 1rem 1rem;">${message}</p>
    <p style="color:black;font-size:1rem;margin:1rem 1rem 1rem;">You can respond using this email: ${senderEmail}</p>
    `
    return htmlTemplate(body);
}