import { htmlTemplate } from "./htmlTemplate"

export const proofOfPayment = (path,firstName,lastName) => {
    const body = `
    <h1 style="color:black;font-size:2rem;margin:2rem 1rem 1rem;">Hello Admin!</h1>    
    <p style="color:black;font-size:1rem;margin:1rem;">Here is the Link to a proof of payment from ${firstName} ${lastName}</p>
    <p><a style="font-size:1rem;margin:1rem 1rem;" href=${path}>Proof of Payment</a></p>
    `
    return htmlTemplate(body);
}