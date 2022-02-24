import { htmlTemplate } from './htmlTemplate'


export const resetPasswordSuccessfulEmailTemplate = (name) => {

    const body = `
            <h1 style="color:black;font-size:2rem;margin:2rem 1rem 1rem;">Hello ${name}</h1>
            <p style="color:black;font-size:1rem;margin:1rem;">Congratulations! Your password reset has been successful</p>
            <p style="color:black;font-size:1rem;margin:1rem 1rem 3rem;">Click the link to sign in using your new password</p>
            <a class="btn" href="https://www.orlytenientetiago.com/"
            style="color:white;font-size:1rem;margin:2rem 1rem;">
            Home Page</a>
        `
    return htmlTemplate(body);
}
