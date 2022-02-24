import {Router} from 'express'
import { sendContactUs } from './../controllers/guests';

const router = Router()

/** 
 * @description To send a contact us email
 * @api /users/api/contact-us
 * @access Public
 * @type POST
*/

router.post('/api/contact-us',sendContactUs)

export default router