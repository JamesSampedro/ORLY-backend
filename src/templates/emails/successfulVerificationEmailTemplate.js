import { htmlTemplate } from "./htmlTemplate"

export const successfulVerificationEmailTemplate = (name,link) => {
    let body = `
        <h1 style="color:black;font-size:2rem;margin:2rem 1rem 1rem;">Hello ${name}</h1>
        <p style="color:black;font-size:1rem;margin:1rem;">Congratulations! Your account has been successfully verified.</p>
        <p style="color:black;font-size:1rem;margin:1rem 1rem 3rem;">Click the link to start using our services. Thank you!</p>
        <a href="https://www.orlytenientetiago.com/" class="btn"
        style="color:white;font-size:1rem;margin:2rem 1rem;">
        Home Page</a>
        `
    return htmlTemplate(body)
    
}