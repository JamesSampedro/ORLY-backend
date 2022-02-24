import { htmlTemplate } from './htmlTemplate'


export const verifyUserAccountEmailTemplate = (domain,user,path) => {
    const body = `
            <h1 style="color:black;font-size:2rem;margin:2rem 1rem 1rem;">Hello Admin!</h1>
            <p style="color:black;font-size:1rem;margin:1rem 1rem;">Please click the following link to verify this person's account</p>
            <p style="color:black;font-size:1rem;margin:1rem;">Name: ${user.firstName} ${user.lastName}</p>
            <p style="color:black;font-size:1rem;margin:1rem;">Address: ${user.address}</p>
            <p style="color:black;font-size:1rem;margin:1rem 1rem;">Birthday: ${user.birthday}</p>
            <p><a style="font-size:1rem;margin:1rem 1rem;" href=${path}>Valid ID</a></p>
            <a class="btn btn-confirm" href="${domain}users/verify-now/${user.verificationCode}"
            style="color:white;font-size:1rem;margin:2rem 1rem;">Verify Now</a>
            <a class="btn btn-reject" href="${domain}users/verify-reject/${user.verificationCode}"
            style="color:white;font-size:1rem;margin:2rem 1rem;">Reject Registration</a> 
            
        `
    return htmlTemplate(body);
}