import {check} from 'express-validator'

const fullName = check('fullName', "Name is required").not().isEmpty()
const address = check('address', "Address is required").not().isEmpty()
const issuedFor = check('issuedFor', "Issued For is required").not().isEmpty()
const dateSubmitted = check('dateSubmitted', "dateSubmitted is required").not().isEmpty()
const status = check('status', "Status is required").not().isEmpty()
const livingSince = check('livingSince', "Living Since is required").not().isEmpty()
const gender = check('gender', "Gender is required").not().isEmpty()
const birthday = check('birthday', "Birthday is required").not().isEmpty()
const birthplace = check('birthplace', "Birthplace is required").not().isEmpty()
const height = check('height', "Height is required").not().isEmpty()
const weight = check('weight', "Weight is required").not().isEmpty()
const maritalStatus = check('maritalStatus', "Marital Status is required").not().isEmpty()
const occupation = check('occupation', "Occupation is required").not().isEmpty()
const citizenship = check('citizenship',"Citizenship is required").not().isEmpty()
const businessType = check('businessType',"Citizenship is required").not().isEmpty()
const itemName = check('itemName',"Item Name is required").not().isEmpty()


export const createCertificateOfIndigencyValidations = [fullName,address,issuedFor]
export const createCertificateOfResidencyValidations = [fullName,address,livingSince]
export const createCedulaValidations = [fullName,address,gender,birthday,birthplace,height,weight,maritalStatus,occupation,citizenship]
export const createBarangayClearanceValidations = [fullName,address,issuedFor]
export const createBusinessClearanceValidations = [fullName,address,businessType]

