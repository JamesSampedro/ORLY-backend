import { htmlTemplate } from './htmlTemplate'


export const resetPasswordEmailTemplate = (domain,name,passwordResetCode) => {

    const body = `
            <h1 style="color:black;font-size:2rem;margin:2rem 1rem 1rem;">Hello ${name}!</h1>
            <p style="color:black;font-size:1rem;margin:1rem;">Please click the following link to reset your password</p>
            <p style="color:black;font-size:1rem;margin:1rem 1rem 3rem;">If you did not request a password reset, please ignore this email</p>
            <a class="btn" href="${domain}users/reset-password-now/${passwordResetCode}"
            style="color:white;font-size:1rem;margin:2rem 1rem;">
            Reset Password</a>
        `
    return htmlTemplate(body);
}
