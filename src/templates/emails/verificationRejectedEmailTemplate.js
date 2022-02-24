import { htmlTemplate } from './htmlTemplate'


export const verificationRejectedEmailTemplate = (name) => {

    const body = `
            <h1 style="color:black;font-size:2rem;margin:2rem 1rem 1rem;">Hello ${name}!</h1>
            <p style="color:black;font-size:1rem;margin:1rem;">We are sorry to tell you that your account registration has not been verified due to the following reasons:</p>
            <uls style="margin:1rem 1rem 2rem">
                <li style="color:black;font-size:1rem;margin:1rem;">Expired ID</li>
                <li style="color:black;font-size:1rem;margin:1rem;">Unclear ID Photo</li>
                <li style="color:black;font-size:1rem;margin:1rem;">Home address does not belong to barangay Teniente Tiago</li>
            </ul>
            <p style="color:black;font-size:1rem;margin:1rem 1rem 3rem;">Note: If your existing valid ID is addressed to a place outside Teniente Tiago but a resident of barangay Teniente Tiago, you can proceed to barangay for registration assistance.</p>
            <p style="color:black;font-size:1rem;margin:1rem 1rem 3rem;">If you want to register again, click on the link below</p>
            <a class="btn" href="https://www.orlytenientetiago.com/"
            style="color:white;font-size:1rem;margin:2rem 1rem;">
            Register Again</a>
        `
    return htmlTemplate(body);
}