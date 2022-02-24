import {Router} from "express"
import {createCertificateOfIndigencyValidations,createCertificateOfResidencyValidations,
    createBarangayClearanceValidations,createBusinessClearanceValidations,createCedulaValidations} from '../validators/services-validators'
import {userAuth} from "../middlewares/auth-guard"
import uploader from "../middlewares/uploader"
import Validator from '../middlewares/validator-middleware'
import {createCertificateOfIndigency,createCertificateOfResidency,createCedula,
    createBarangayClearance,createBusinessClearance,createIdApplication,addEquipment,
    getAllUserApplication,getAllEquipment,updateVaccinationData,deleteEquipment,
    getVaccinationData,getAllUsers, addSupply,updateSupply,getSupplies,deleteSupply,
    getAyudaData,createAyuda,getAyudaPrograms,deleteAyudaProgram,getRecipients,getAllApplications,
    updateIndigency,updateResidency,updateCedula,updateBarangayClearance,updateBusinessClearance,updateIdApplication,
    uploadProof,getSupply, getAllApplicationsSale,setRecipientStatus, createResident, updateResident, deleteResident, getAllResidents, createHousehold, getQualifiedHousehold, getResidentById, getHouseholdById, updateAyudaProgram,getUnverified, getProgramById} from '../controllers/userServices'
import {body} from 'express-validator'
import { authPage } from "../middlewares/authorization-middleware"



const router = Router()

/** 
 * @description To create a new Certificate of Indigency
 * @api /services/api/create-certificate-of-indigency
 * @access Private
 * @type POST
*/
router.post('/api/create-certificate-of-indigency',
createCertificateOfIndigencyValidations,
Validator,
userAuth,
authPage(["user"]),
createCertificateOfIndigency
)

/** 
 * @description To create a new Certificate of Residency
 * @api /services/api/create-certificate-of-residency
 * @access Private
 * @type POST
*/
router.post('/api/create-certificate-of-residency',
createCertificateOfResidencyValidations,
Validator,
userAuth,
authPage(["user"]),
createCertificateOfResidency
)

/** 
 * @description To create a new Cedula
 * @api /services/api/create-cedula
 * @access Private
 * @type POST
*/
router.post('/api/create-cedula',
createCedulaValidations,
Validator,
userAuth,
authPage(["user"]),
createCedula
)

/** 
 * @description To create a new Barangay Clearance
 * @api /services/api/create-barangay-clearance
 * @access Private
 * @type POST
*/
router.post('/api/create-barangay-clearance',
createBarangayClearanceValidations,
Validator,
userAuth,
authPage(["user"]),
createBarangayClearance
)

/** 
 * @description To create a new Business Clearance
 * @api /services/api/create-business-clearance
 * @access Private
 * @type POST
*/
router.post('/api/create-business-clearance',
createBusinessClearanceValidations,
Validator,
userAuth,
authPage(["user"]),
createBusinessClearance
)

/** 
 * @description To create a new Business Clearance
 * @api /services/api/create-business-clearance
 * @access Private
 * @type POST
*/
router.post('/api/create-id-application',
userAuth,
authPage(["user"]),
uploader.fields([{name: 'picture', maxCount: 1}, {name: 'signature',maxCount: 1}]),
createIdApplication
)

/** 
 * @description To create a new Equipment
 * @api /services/api/add-equipment
 * @access Private
 * @type POST
*/
router.post('/api/add-equipment',
userAuth,
authPage(["admin"]),
addEquipment
)

/** 
 * @description To get all equipments
 * @api /services/api/get-all-equipment
 * @access Public
 * @type Get
*/
router.get('/api/get-all-equipment',
getAllEquipment
)

/** 
 * @description To delete an equipment
 * @api /services/api/delete-equipment/:itemName
 * @access Private
 * @type DELETE
*/
router.delete('/api/delete-equipment/:itemName',
userAuth,
authPage(["admin"]),
deleteEquipment
)

/** 
 * @description To update a vaccination data
 * @api /services/api/update-vaccination-data
 * @access Private
 * @type PUT
*/
router.put('/api/update-vaccination-data',
userAuth,
authPage(["admin"]),
updateVaccinationData
)



/** 
 * @description To get all the application
 * @api /services/api/get-user-applications
 * @access Private
 * @type GET
*/

router.get('/api/get-user-applications',
userAuth,
authPage(["user"]),
getAllUserApplication
)

/** 
 * @description To get vaccination data
 * @api /services/api/vaccination-data
 * @access Public
 * @type GET
*/

router.get('/api/vaccination-data',
getVaccinationData
)

/** 
 * @description To get all users
 * @api /services/api/get-all-users
 * @access Public
 * @type GET
*/

router.get('/api/get-all-users',
userAuth,
authPage(["admin"]),
getAllUsers
)

/** 
 * @description To add supply
 * @api /services/api/add-supply
 * @access Private
 * @type POST
*/

router.post('/api/add-supply',
userAuth,
authPage(["admin"]),
addSupply
)

/** 
 * @description To get all supplies
 * @api /services/api/get-supplies
 * @access Private
 * @type GET
*/

router.get('/api/get-supplies',
userAuth,
authPage(["admin"]),
getSupplies
)

/** 
 * @description To get supply by ID
 * @api /services/api/get-supply:id
 * @access Private
 * @type GET
*/

router.get('/api/get-supply/:id',
userAuth,
authPage(["admin"]),
getSupply
)

/** 
 * @description To update supply
 * @api /services/api/update-supply
 * @access Private
 * @type PUT
*/

router.put('/api/update-supply/:id',
userAuth,
authPage(["admin"]),
updateSupply
)

/** 
 * @description To delete an equipment
 * @api /services/api/delete-equipment/:itemName
 * @access Private
 * @type DELETE
*/
router.delete('/api/delete-supply/:id',
userAuth,
authPage(["admin"]),
deleteSupply
)

/** 
 * @description To get ayuda data
 * @api /services/api/ayuda-data
 * @access Private
 * @type GET
*/
router.get('/api/ayuda-data',
userAuth,
authPage(["admin"]),
getAyudaData
)


/** 
 * @description To create ayuda program
 * @api /services/api/create-ayuda
 * @access Private
 * @type POST
*/
router.post('/api/create-ayuda',
userAuth,
authPage(["admin"]),
createAyuda
)

/** 
 * @description To get ayuda program
 * @api /services/api/get-ayuda-program
 * @access Private
 * @type GET
*/
router.get('/api/get-ayuda-program',
userAuth,
authPage(["admin","user"]),
getAyudaPrograms
)

/** 
 * @description To delete ayuda program
 * @api /services/api/delete-ayuda-program/:id
 * @access Private
 * @type DELETE
*/
router.delete('/api/delete-ayuda-program/:id',
userAuth,
authPage(["admin"]),
deleteAyudaProgram
)

/** 
 * @description To delete ayuda program
 * @api /services/api/get-recipients/:id
 * @access Private
 * @type GET
*/
router.get('/api/get-recipients/:id',
userAuth,
authPage(["admin","user"]),
getRecipients
)

/** 
 * @description To get all applications
 * @api /services/api/get-all-applications
 * @access Private
 * @type GET
*/
router.get('/api/get-all-applications',
userAuth,
authPage(["admin"]),
getAllApplications
)

/** 
 * @description To get update application
 * @api /services/api/update-application
 * @access Private
 * @type PUT
*/
router.put('/api/update-indigency/:id',
userAuth,
authPage(["admin"]),
updateIndigency
)


/** 
 * @description To get update application
 * @api /services/api/update-application
 * @access Private
 * @type PUT
*/
router.put('/api/update-residency/:id',
userAuth,
authPage(["admin"]),
updateResidency
)

/** 
 * @description To get update application
 * @api /services/api/update-application
 * @access Private
 * @type PUT
*/
router.put('/api/update-cedula/:id',
userAuth,
authPage(["admin"]),
updateCedula
)

/** 
 * @description To get update application
 * @api /services/api/update-application
 * @access Private
 * @type PUT
*/
router.put('/api/update-barangay-clearance/:id',
userAuth,
authPage(["admin"]),
updateBarangayClearance
)

/** 
 * @description To get update application
 * @api /services/api/update-application
 * @access Private
 * @type PUT
*/
router.put('/api/update-business-clearance/:id',
userAuth,
authPage(["admin"]),
updateBusinessClearance
)

/** 
 * @description To get update application
 * @api /services/api/update-application
 * @access Private
 * @type PUT
*/
router.put('/api/update-id/:id',
userAuth,
authPage(["admin"]),
updateIdApplication
)

/** 
 * @description To post proof of payment
 * @api /services/api/proof-payment/
 * @access Private
 * @type PUT
*/
router.put('/api/proof-payment/:id',
userAuth,
authPage(["user"]),
uploader.single('proof'),
uploadProof
)

/** 
 * @description To get all applications sale
 * @api /services/api/get-all-sales
 * @access Private
 * @type GET
*/
router.get('/api/get-all-sales',
userAuth,
authPage(["admin"]),
getAllApplicationsSale
)

/** 
 * @description To change recipient's status
 * @api /services/api/set-recipient-status/:id
 * @access Private
 * @type GET
*/
router.put('/api/set-recipient-status/:id',
userAuth,
authPage(["admin"]),
setRecipientStatus
)

/** 
 * @description To create resident
 * @api /services/api/create-resident
 * @access Private
 * @type POST
*/
router.post('/api/create-resident',
userAuth,
authPage(["admin"]),
createResident
)

/** 
 * @description To get unverified users
 * @api /services/api/get-unverified
 * @access Private
 * @type GET
*/
router.get('/api/get-unverified',
userAuth,
authPage(["admin"]),
getUnverified
)



/** 
 * @description To update resident
 * @api /services/api/update-resident/:id
 * @access Private
 * @type PUT
*/
router.put('/api/update-resident/:id',
userAuth,
authPage(["admin"]),
updateResident
)

/** 
 * @description To delete resident
 * @api /services/api/delete-resident/:id
 * @access Private
 * @type DELETE
*/
router.delete('/api/delete-resident/:id',
userAuth,
authPage(["admin"]),
deleteResident
)

/** 
 * @description To delete resident
 * @api /services/api/get-all-residents
 * @access Private
 * @type GET
*/
router.get('/api/get-all-residents',
userAuth,
authPage(["admin"]),
getAllResidents
)

/** 
 * @description To generate household
 * @api /services/api/generate-household
 * @access Private
 * @type GET
*/
router.get('/api/generate-household',
userAuth,
authPage(["admin"]),
createHousehold
)

/** 
 * @description To qualified household
 * @api /services/api/get-qualified-household
 * @access Private
 * @type POST
*/
router.post('/api/get-qualified-household',
userAuth,
authPage(["admin"]),
getQualifiedHousehold
)

/** 
 * @description To get resident by ID
 * @api /services/api/get-resident:id
 * @access Private
 * @type GET
*/

router.get('/api/get-resident/:id',
userAuth,
authPage(["admin"]),
getResidentById
)

/** 
 * @description To get ayuda program
 * @api /services/api/get-ayuda-program-guest
 * @access Public
 * @type GET
*/
router.get('/api/get-ayuda-program-guest',
getAyudaPrograms
)

/** 
 * @description To get household by ID
 * @api /services/api/get-household:id
 * @access Private
 * @type GET
*/

router.get('/api/get-household/:id',
getHouseholdById
)

/** 
 * @description To qualified ayuda program
 * @api /services/api/update-ayuda-program
 * @access Private
 * @type POST
*/
router.post('/api/update-ayuda-program',
userAuth,
authPage(["admin"]),
updateAyudaProgram
)



/** 
 * @description To get program by ID
 * @api /services/api/get-program:id
 * @access Private
 * @type GET
*/

router.get('/api/get-program/:id',
getProgramById
)
export default router