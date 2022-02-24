import CertificateOfIndigency from './../models/CertificateOfIndigency';
import SlugGenerator from './../functions/slug-generator';
import CertificateOfResidency from './../models/CertificateOfResidency';
import Cedula from './../models/Cedula'
import BarangayClearance from '../models/BarangayClearance'
import BusinessClearance from '../models/BusinessClearance';
import IdApplication from '../models/IdApplication';
import Equipment from '../models/Equipment';
import VaccinationData from '../models/VaccinationData';
import Supply from '../models/Supplies';
import {ACCOUNT_VALIDATOR_EMAIL, DOMAIN} from '../constants'
import { User } from '../models';
import AyudaProgram from '../models/AyudaProgram';
import sendSms from '../functions/sms-sender';
import { proofOfPayment as proof } from './../templates/emails/proofOfPayment';
import { htmlTemplate } from '../templates/emails/htmlTemplate'
import sendMail from '../functions/email-sender'
import dateFormat from './../functions/date-format';
import Household from '../models/Household';
import ResidentModel from '../models/Resident';
import Resident from '../models/Resident';

export const createCertificateOfIndigency = async (req,res) => {
    try {
        let {body} = req
        let id = req.user._id

        let docu = await CertificateOfIndigency.find({author:id})
        if(docu){
            let existing = false
            docu.forEach((d) => {
                if(d.status !== "claimed" && d.status !== "rejected"){
                    existing = true
                }
            })
            if(existing) {
                return res.status(201).json({
                    success:false,
                    message:"An Application for this document/certificate has already been submitted."
                })
            }
            
        }

        let coi = new CertificateOfIndigency({
            author: req.user._id,
            status: "pending",
            dateSubmitted: body.date,
            ...body
        })
        await coi.save()
        return res.status(201).json({
            success:true,
            message:"Certificate of Indigency Created"
        })
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Creating the Certificate of Indigency Failed."
        })
    }
}

export const createCertificateOfResidency = async (req,res) => {
    try {
        let {body} = req
        let id = req.user._id

        let docu = await CertificateOfResidency.find({author:id})
        if(docu){
            let existing = false
            docu.forEach((d) => {
                if(d.status !== "claimed" && d.status !== "rejected"){
                    existing = true
                }
            })
            if(existing) {
                return res.status(201).json({
                    success:false,
                    message:"An Application for this document/certificate has already been submitted."
                })
            }
            
        }

        let cor = new CertificateOfResidency({
            author: req.user._id,
            status: "pending",
            dateSubmitted: body.date,
            ...body
        })
        await cor.save()
        return res.status(201).json({
            success:true,
            message:"Certificate of Residency Created"
        })
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Creating the Certificate of Residency Failed."
        })
    }
}

export const createCedula = async (req,res) => {
    try {
        let {body} = req
        let id = req.user._id

        let docu = await Cedula.find({author:id})
        if(docu){
            let existing = false
            docu.forEach((d) => {
                if(d.status !== "claimed" && d.status !== "rejected"){
                    existing = true
                }
            })
            if(existing) {
                return res.status(201).json({
                    success:false,
                    message:"An Application for this document/certificate has already been submitted."
                })
            }
            
        }

        let ced = new Cedula({
            author: req.user._id,
            status: "pending",
            dateSubmitted: body.date,
            ...body
        })
        await ced.save()
        return res.status(201).json({
            success:true,
            message:"Cedula Created"
        })
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Creating the Cedula Failed."
        })
    }
}

export const createBarangayClearance = async(req,res) => {
    try {
        let {body} = req
        let id = req.user._id

        let docu = await BarangayClearance.find({author:id})
        if(docu){
            let existing = false
            docu.forEach((d) => {
                if(d.status !== "claimed" && d.status !== "rejected"){
                    existing = true
                }
            })
            if(existing) {
                return res.status(201).json({
                    success:false,
                    message:"An Application for this document/certificate has already been submitted."
                })
            }
            
        }

        let bc = new BarangayClearance({
            author: req.user._id,
            status: "pending",
            dateSubmitted: body.date,
            ...body
        })
        await bc.save()
        return res.status(201).json({
            success:true,
            message:"Barangay Clearance Created"
        })
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Creating the Barangay Clearance Failed."
        })
    }
}

export const createBusinessClearance = async(req,res) => {
    try {
        let {body} = req
        let id = req.user._id

        let docu = await BusinessClearance.find({author:id})
        if(docu){
            let existing = false
            docu.forEach((d) => {
                if(d.status !== "claimed" && d.status !== "rejected"){
                    existing = true
                }
            })
            if(existing) {
                return res.status(201).json({
                    success:false,
                    message:"An Application for this document/certificate has already been submitted."
                })
            }
            
        }

        let bsc = new BusinessClearance({
            author: req.user._id,
            status: "pending",
            dateSubmitted: body.date,
            ...body
        })

        await bsc.save()
        return res.status(201).json({
            success:true,
            message:"Business Clearance Created"
        })
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Creating the Business Clearance Failed."
        })
    }
}

export const createIdApplication = async(req,res) => {
    try {
        let {files,body} = req
        const picture = files.picture[0]
        const signature = files.signature[0]
        
        let picturePath = DOMAIN + picture.filename
        let signaturePath = DOMAIN + signature.filename

        let id = req.user._id

        let docu = await IdApplication.find({author:id})
        if(docu){
            let existing = false
            docu.forEach((d) => {
                if(d.status !== "claimed" && d.status !== "rejected"){
                    existing = true
                }
            })
            if(existing) {
                return res.status(201).json({
                    success:false,
                    message:"An Application for this document/certificate has already been submitted."
                })
            }
            
        }

        let ida = new IdApplication({
            author: req.user._id,
            status: "pending",
            dateSubmitted:body.date,
            picture:picturePath,
            signature:signaturePath,
            ...body
        })

        await ida.save()
        return res.status(201).json({
            picture,
            signature,
            success:true,
            message:"ID Application Created"
        })
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Creating the ID Application Failed."
        })
    }
}

export const addEquipment = async (req,res) => {
    try {
        const {itemName} = req.body
        let item = await Equipment.findOne({itemName})

        if(item){
            return res.status(400).json({
                success: false,
                message: "Item Already Exists"
            })
        }

        let equipment = new Equipment({
            itemName
        })

        await equipment.save()

        return res.status(201).json({
            success:true,
            message:"User's Document Applications Found"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something Went Wrong!"
        })
    }
}

export const getAllEquipment = async (req,res) => {
    try {
        const equipments = await Equipment.find({})
        return res.status(200).json({
            equipments,
            success:true,
            message:"Equipments Found"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something Went Wrong!"
        })
    }
}

export const deleteEquipment = async(req,res) => {
    try {
        const {params} = req
        let item = await Equipment.findOne({itemName: params.itemName})
        if(!item){
            return res.status(400).json({
                success: false,
                message: "Equipment does not exist"
            })
        }

        await Equipment.findOneAndDelete({itemName: params.itemName})
        const equipments = await Equipment.find({})
        return res.status(200).json({
            equipments,
            success:true,
            message:"Equipment Deleted"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something Went Wrong!"
        })
    }
}

export const getAllUserApplication = async (req,res) => {
    try {
        let applications = []    
        const coi = await CertificateOfIndigency.find({author: req.user._id})
        applications = applications.concat(coi)
        const cor = await CertificateOfResidency.find({author: req.user._id})
        applications = applications.concat(cor)
        const ced = await Cedula.find({author: req.user._id})
        applications = applications.concat(ced)
        const bc = await BarangayClearance.find({author: req.user._id})
        applications = applications.concat(bc)
        const bs = await BusinessClearance.find({author: req.user._id})
        applications = applications.concat(bs)
        const ida = await IdApplication.find({author: req.user._id})
        applications = applications.concat(ida)
        
        return res.status(201).json({
            applications: applications,
            success:true,
            message:"User's Document Applications Found"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something Went Wrong!"
        })
    }
}

export const updateVaccinationData = async (req,res) => {
    try {
        const {body} = req
        console.log(body)
        let vaccination = await VaccinationData.findOneAndUpdate({},{
            ...body
        },
        {new: true})

        return res.status(201).json({
            success:true,
            message:"Vaccination Data Updated"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something Went Wrong!"
        })
    }
}

export const getVaccinationData = async(req,res) => {
    try {
        let vaccinationData = await VaccinationData.findOne({})
        return res.status(201).json({
            vaccinationData,
            success:true,
            message:"Vaccination Data Updated"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something Went Wrong!"
        })
    }
}

export const getAllUsers = async(req,res) => {
    try {
        const users = []
        const usersRaw = await User.find({role:'user'})
        usersRaw.map((user) => {
            return users.push(user.getAllUser())
        })
        return res.status(201).json({
            users,
            success:true,
            message:"All Users Found"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something Went Wrong!"
        })
    }
}

export const addSupply = async(req,res) => {
    try {
        const {body} = req
        const {itemName} = body

        let item = await Supply.findOne({itemName})

        if(item){
            return res.status(400).json({
                success: false,
                message: "Item Already Exists"
            })
        }

        let supply = new Supply(body)

        await supply.save()

        return res.status(201).json({
            success:true,
            message:"Supply has been added"
        })
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Something Went Wrong!"
        })
    }
}

export const getSupplies = async(req,res) => {
    try {
        const supplies = await Supply.find({})
        return res.status(201).json({
            supplies,
            success:true,
            message:"All Supplies Found"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something Went Wrong!"
        })
    }
}

export const getSupply = async(req,res) => {
    try {
        const {params} = req
        let supply = await Supply.findOne({_id:params.id})
        if(!supply){
            return res.status(400).json({
                success: false,
                message: "Item does not exist"
            })
        }else{
            return res.status(200).json({
                supply,
                success:true,
                message:"Item Found"
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something Went Wrong!"
        })
    }
}

export const updateSupply = async(req,res) => {
    try {
        const {params,body} = req
        let supply = await Supply.findOne({_id:params.id})
        if(!supply){
            return res.status(400).json({
                success: false,
                message: "Item does not exist"
            })
        }
        supply = await Supply.findOneAndUpdate({_id:params.id},body,
        {new:true})
        const supplies = await Supply.find({})
        
        return res.status(200).json({
            supplies,
            success:true,
            message:"Supply Updated"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something Went Wrong!"
        })
    }
}

export const deleteSupply = async(req,res) => {
    try {
        const {params} = req
        let supply = await Supply.findOne({_id: params.id})
        if(!supply){
            return res.status(400).json({
                success: false,
                message: "Item does not exist"
            })
        }

        await Supply.findOneAndDelete({_id: params.id})
        const supplies = await Supply.find({})
        return res.status(200).json({
            supplies,
            success:true,
            message:"Supply Deleted"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something Went Wrong!"
        })
    }
}

export const getAyudaData = async(req,res) => {
    try {
        const supplies = await Supply.find({})
        let userQuantity = 0
        const usersRaw = await User.find({role:'user'})
        usersRaw.map((e) => {
            return userQuantity++
        })

        return res.status(201).json({
            supplies,
            userQuantity,
            success:true,
            message:"All Supplies Found"
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Item does not exist"
        })
    }
}

export const createAyuda = async(req,res) => {
    try {
        const {body} = req
        let criteria = body.criteria
        let searchCriteria = []
        let supplies = body.supplies
        let ayuda = new AyudaProgram({
            programName: body.programName,
            facilitator: body.facilitator,
            sponsor: body.sponsor,
            unit: body.unit,
            criteria: [...criteria]
        })
        
        criteria.forEach(element => {
            if(element.name){
                if (!searchCriteria.includes(element.name)) {
                    searchCriteria.push(element.name);
                }
            }
        });

        let households
        if(searchCriteria.length === 0){
            households = await Household.find()
        }else {
            households = await Household.find({criteria: {$in: searchCriteria}})
        }

        supplies.forEach(element => {
            let householdLength = households.length
            let perHousehold = (element.amount / householdLength) | 0
            let total = perHousehold * householdLength
            let left = element.amount - total

            return ayuda.supplies.push({
                _id:element._id,
                name:element.name,
                amount:element.amount,
                unit:element.unit,
                perHousehold:perHousehold,
                left:left,
                total:total,
            })
        });
        
        households.map(async(e) => {
            let qualified = []
            e.residents.forEach(element => {
                if(element.monthsResided > 3){
                    qualified.push(true)
                }
            });

            if(qualified.includes(true)) {
                //sendSms(e.householdContact,"You have been selected to be part of our ayuda program. Please check your Orly account for details")  
                return ayuda.households.push({
                    _id:e._id,
                    name:e.name,
                    residents:e.residents,
                    ayudaStatus:true,
                    claimedStatus:false,
                    criteria:e.criteria,
                    householdContact:e.householdContact,
                    householdAddress:e.householdAddress
                })
            }
        })

        let valid = true
        ayuda.supplies.forEach(e => {
            if(e.perHousehold === '0'){
                valid = false
            }
        })

        //Check if the program exist
        let program = await AyudaProgram.findOne({programName: ayuda.programName})
        
        if(program){
            return res.status(400).json({
                success: false,
                message: "Program name already exists. Please try another name."
            })
        }

        if(ayuda.households.length === 0){
            return res.status(400).json({
                success:false,
                message:"No households are qualified. Please check the criteria."
            })
        }else {
            if(valid){
                await ayuda.save()
                return res.status(201).json({
                    program: ayuda,
                    success:true,
                    message:"Ayuda Program Created"
                })
            }else{
                return res.status(400).json({
                    success:false,
                    message:"Supplies not enough for distribution. Please check the supplies."
                })
            } 
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something Went Wrong!"
        })
    }
}

export const getAyudaPrograms = async(req,res) => {
    try {
        const ayuda = await AyudaProgram.find({})
        return res.status(200).json({
            ayuda,
            success:true,
            message:"Ayuda Programs Found"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong!"
        })
    }
}

export const deleteAyudaProgram = async(req,res) => {
    try {
        const {params} = req
        let program = await AyudaProgram.findOne({_id: params.id})
        if(!program){
            return res.status(400).json({
                success: false,
                message: "Program does not exist"
            })
        }

        await AyudaProgram.findOneAndDelete({_id: params.id})
        const ayuda = await AyudaProgram.find({})
        return res.status(200).json({
            ayuda,
            success:true,
            message:"Supply Deleted"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong!"
        })
    }
}

export const getRecipients = async(req,res) => {
    try {
        const {params} = req
        const program = await AyudaProgram.findById(params.id)
        if(!program){
            return res.status(400).json({
                success: false,
                message: "Program does not exist"
            })
        }

        let recipients = program.residents
        
        return res.status(200).json({
            recipients,
            success:true,
            message:"Recipient List Found"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong!"
        })
    }
}

export const getAllApplications = async(req,res)=> {
    try {
        let applications = []
        const coi = await CertificateOfIndigency.find({})
        applications = applications.concat(coi)
        const cor = await CertificateOfResidency.find({})
        applications = applications.concat(cor)
        const ced = await Cedula.find({})
        applications = applications.concat(ced)
        const bc = await BarangayClearance.find({})
        applications = applications.concat(bc)
        const bs = await BusinessClearance.find({})
        applications = applications.concat(bs)
        const ida = await IdApplication.find({})
        applications = applications.concat(ida)

        return res.status(201).json({
            applications: applications,
            success:true,
            message:"All Document Applications Found"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something Went Wrong!"
        })
    }
}


export const updateIndigency = async(req,res) => {
    try {
        const {params,body} = req
        let app = await CertificateOfIndigency.findOne({_id:params.id})
        let user = await User.findById(app.author)
        if(!app){
            return res.status(400).json({
                success: false,
                message: "Item does not exist"
            })
        }

        let date_ob = new Date()
        let today = dateFormat(date_ob)
        
        app = await CertificateOfIndigency.findOneAndUpdate({_id:params.id},{
            status:body.status,
            statusChangeDate:today,
            rejectReason: body.reason,
        })

        if(body.status === "forRelease"){
            sendSms(user.phoneNumber,'Your document application is ready for pickup')
        }

        let applications = []
        const coi = await CertificateOfIndigency.find({})
        applications = applications.concat(coi)
        const cor = await CertificateOfResidency.find({})
        applications = applications.concat(cor)
        const ced = await Cedula.find({})
        applications = applications.concat(ced)
        const bc = await BarangayClearance.find({})
        applications = applications.concat(bc)
        const bs = await BusinessClearance.find({})
        applications = applications.concat(bs)
        const ida = await IdApplication.find({})
        applications = applications.concat(ida)

        return res.status(200).json({
            applications,
            success:true,
            message:"Supply Updated"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something Went Wrong!"
        })
    }
}

export const updateResidency = async(req,res) => {
    try {
        const {params,body} = req
        console.log(params.id)
        let app = await CertificateOfResidency.findOne({_id:params.id})
        let user = await User.findById(app.author)
        if(!app){
            return res.status(400).json({
                success: false,
                message: "Item does not exist"
            })
        }

        let date_ob = new Date()
        let today = dateFormat(date_ob)
        
        app = await CertificateOfResidency.findOneAndUpdate({_id:params.id},{
            status:body.status,
            statusChangeDate:today,
            rejectReason: body.reason,
        })

        if(body.status === "forRelease"){
            sendSms(user.phoneNumber,'Your document application is ready for pickup')
        }

        let applications = []
        const coi = await CertificateOfIndigency.find({})
        applications = applications.concat(coi)
        const cor = await CertificateOfResidency.find({})
        applications = applications.concat(cor)
        const ced = await Cedula.find({})
        applications = applications.concat(ced)
        const bc = await BarangayClearance.find({})
        applications = applications.concat(bc)
        const bs = await BusinessClearance.find({})
        applications = applications.concat(bs)
        const ida = await IdApplication.find({})
        applications = applications.concat(ida)

        return res.status(200).json({
            applications,
            success:true,
            message:"Supply Updated"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something Went Wrong!"
        })
    }
}

export const updateCedula = async(req,res) => {
    try {
        const {params,body} = req
        let app = await Cedula.findOne({_id:params.id})
        let user = await User.findById(app.author)
        if(!app){
            return res.status(400).json({
                success: false,
                message: "Item does not exist"
            })
        }

        let date_ob = new Date()
        let today = dateFormat(date_ob)
        
        app = await Cedula.findOneAndUpdate({_id:params.id},{
            status:body.status,
            statusChangeDate:today,
            rejectReason: body.reason,
        })

        if(body.status === "forRelease"){
            sendSms(user.phoneNumber,'Your document application is ready for pickup')
        }

        let applications = []
        const coi = await CertificateOfIndigency.find({})
        applications = applications.concat(coi)
        const cor = await CertificateOfResidency.find({})
        applications = applications.concat(cor)
        const ced = await Cedula.find({})
        applications = applications.concat(ced)
        const bc = await BarangayClearance.find({})
        applications = applications.concat(bc)
        const bs = await BusinessClearance.find({})
        applications = applications.concat(bs)
        const ida = await IdApplication.find({})
        applications = applications.concat(ida)

        return res.status(200).json({
            applications,
            success:true,
            message:"Supply Updated"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something Went Wrong!"
        })
    }
}

export const updateBarangayClearance = async(req,res) => {
    try {
        const {params,body} = req
        let app = await BarangayClearance.findOne({_id:params.id})
        let user = await User.findById(app.author)
        if(!app){
            return res.status(400).json({
                success: false,
                message: "Item does not exist"
            })
        }

        let date_ob = new Date()
        let today = dateFormat(date_ob)
        
        app = await BarangayClearance.findOneAndUpdate({_id:params.id},{
            status:body.status,
            statusChangeDate:today,
            rejectReason: body.reason,
        })

        if(body.status === "forRelease"){
            sendSms(user.phoneNumber,'Your document application is ready for pickup')
        }

        let applications = []
        const coi = await CertificateOfIndigency.find({})
        applications = applications.concat(coi)
        const cor = await CertificateOfResidency.find({})
        applications = applications.concat(cor)
        const ced = await Cedula.find({})
        applications = applications.concat(ced)
        const bc = await BarangayClearance.find({})
        applications = applications.concat(bc)
        const bs = await BusinessClearance.find({})
        applications = applications.concat(bs)
        const ida = await IdApplication.find({})
        applications = applications.concat(ida)

        return res.status(200).json({
            applications,
            success:true,
            message:"Supply Updated"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something Went Wrong!"
        })
    }
}

export const updateBusinessClearance = async(req,res) => {
    try {
        const {params,body} = req
        let app = await BusinessClearance.findOne({_id:params.id})
        let user = await User.findById(app.author)
        if(!app){
            return res.status(400).json({
                success: false,
                message: "Item does not exist"
            })
        }

        let date_ob = new Date()
        let today = dateFormat(date_ob)
        
        app = await BusinessClearance.findOneAndUpdate({_id:params.id},{
            status:body.status,
            statusChangeDate:today,
            rejectReason: body.reason,
        })

        if(body.status === "forRelease"){
            sendSms(user.phoneNumber,'Your document application is ready for pickup')
        }

        let applications = []
        const coi = await CertificateOfIndigency.find({})
        applications = applications.concat(coi)
        const cor = await CertificateOfResidency.find({})
        applications = applications.concat(cor)
        const ced = await Cedula.find({})
        applications = applications.concat(ced)
        const bc = await BarangayClearance.find({})
        applications = applications.concat(bc)
        const bs = await BusinessClearance.find({})
        applications = applications.concat(bs)
        const ida = await IdApplication.find({})
        applications = applications.concat(ida)

        return res.status(200).json({
            applications,
            success:true,
            message:"Supply Updated"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something Went Wrong!"
        })
    }
}

export const updateIdApplication = async(req,res) => {
    try {
        const {params,body} = req
        let app = await IdApplication.findOne({_id:params.id})
        let user = await User.findById(app.author)
        if(!app){
            return res.status(400).json({
                success: false,
                message: "Item does not exist"
            })
        }

        let date_ob = new Date()
        let today = dateFormat(date_ob)
        
        app = await IdApplication.findOneAndUpdate({_id:params.id},{
            status:body.status,
            statusChangeDate:today,
            rejectReason: body.reason,
        })
        
        if(body.status === "forRelease"){
            sendSms(user.phoneNumber,'Your document application is ready for pickup')
        }

        let applications = []
        const coi = await CertificateOfIndigency.find({})
        applications = applications.concat(coi)
        const cor = await CertificateOfResidency.find({})
        applications = applications.concat(cor)
        const ced = await Cedula.find({})
        applications = applications.concat(ced)
        const bc = await BarangayClearance.find({})
        applications = applications.concat(bc)
        const bs = await BusinessClearance.find({})
        applications = applications.concat(bs)
        const ida = await IdApplication.find({})
        applications = applications.concat(ida)

        return res.status(200).json({
            applications,
            success:true,
            message:"Supply Updated"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something Went Wrong!"
        })
    }
}

export const uploadProof = async(req,res) => {
    try {
        let{body,file,params} = req
        const {id} = params
        const user = await User.findById(req.user._id)
        //const pathToProof = DOMAIN + file.path.split('uploads\\')[1]
	    const pathToProof = DOMAIN + file.filename
        
        const html = proof(pathToProof,user.firstName,user.lastName);
        await sendMail(ACCOUNT_VALIDATOR_EMAIL,"Proof of Payment","Please check this proof of payment",html)

        if(body.name === "Cedula"){
            await Cedula.findByIdAndUpdate(id,{
                proofOfPayment: pathToProof
            })    
        }else if(body.name === "Barangay Clearance"){
            await BarangayClearance.findByIdAndUpdate(id,{
                proofOfPayment: pathToProof
            })    
        }else if(body.name === "Business Clearance"){
            await BusinessClearance.findByIdAndUpdate(id,{
                proofOfPayment: pathToProof
            }) 
        }else if(body.name === "ID Application"){
            await IdApplication.findByIdAndUpdate(id,{
                proofOfPayment: pathToProof
            }) 
        }
        return res.status(201).json({
            success: true,
            message: "Hurray! Your Account is created, please wait for verification"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message: "An error occurred"
        })
    }
}

export const getAllApplicationsSale = async(req,res)=> {
    try {
        let sales = []
        let cedula = []
        let brgyClearance = []
        let bussClearance = []
        let idApplication = []
        let total = 0

        const ced = await Cedula.findOne({}, {name:1, price:1, _id:0})
        const cedCount = await Cedula.find({"status":{$in:["forProcessing", "forRelease", "claimed"]}}).count()
        const bc = await BarangayClearance.findOne({}, {name:1, price:1, _id:0})
        const bcCount = await BarangayClearance.find({"status":{$in:["forProcessing", "forRelease", "claimed"]}}).count()
        const bs = await BusinessClearance.findOne({}, {name:1, price:1, _id:0})
        const bsCount = await BusinessClearance.find({"status":{$in:["forProcessing", "forRelease", "claimed"]}}).count()
        const ida = await IdApplication.findOne({}, {name:1, price:1, _id:0})
        const idaCount = await IdApplication.find({"status":{$in:["forProcessing", "forRelease", "claimed"]}}).count()

        if(ced !== null){
            total = parseInt(ced.price) * cedCount
            cedula = cedula.concat({name: ced.name, numberOfApplication:cedCount, price: ced.price, sales:total})
            sales = sales.concat(cedula)
        }
        
        if(bc !== null){
            total = parseInt(bc.price) * bcCount
            brgyClearance = brgyClearance.concat({name: bc.name, numberOfApplication:bcCount, price: bc.price, sales:total})
            sales = sales.concat(brgyClearance)
        }

        if(bs !== null){
            total = parseInt(bs.price) * bsCount
            bussClearance = bussClearance.concat({name: bs.name, numberOfApplication:bsCount, price: bs.price, sales:total})
            sales = sales.concat(bussClearance)
        }

        if(ida !== null){
            total = parseInt(ida.price) * idaCount
            idApplication = idApplication.concat({name: ida.name, numberOfApplication:idaCount, price: ida.price, sales:total})
            sales = sales.concat(idApplication)
        }

        return res.status(200).json({
            sales: sales,
            success:true,
            message:"All Document Applications Sales Found"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something Went Wrong!"
        })
    }
}

export const setRecipientStatus = async(req,res) => {
    try {
        let{body,params} = req
        const {id} = params
        const program = await AyudaProgram.findById(id)
        
        program.residents.map((e) => {
            if (body.id === e.id){
                return e.status = body.status
            }
        })
        
        await program.save()

        return res.status(200).json({
            success: true,
            message: "Hurray! The status has been changed, please wait for verification"
        })
    } catch (error) {
        
    }
}

//RESIDENTS
export const createResident = async(req,res) => {
    try {
        const {body} = req

        let resident = new Resident({
            firstName: body.firstName,
            lastName: body.lastName,
            address: body.address,
            age: body.age,
            householdNumber: body.householdNumber,
            monthsResided: body.monthsResided,
            incomeRange: body.incomeRange,
            category: body.category,
            mobile: body.mobile,
        })

        let residentCheck = await Resident.findOne({
            firstName: resident.firstName,
            lastName: resident.lastName
        })
        
        if(residentCheck){
            return res.status(400).json({
                success: false,
                message: "Resident already exists. Please try another."
            })
        }

        await resident.save()

        return res.status(201).json({
            success:true,
            message:"Resident Created"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something Went Wrong!"
        })
    }
}

export const updateResident = async(req,res) => {
    try {
        const {body} = req
        const residentId = req.params.id

        let resident = await Resident.findByIdAndUpdate(
            residentId,
            body
        )

        let updatedResident = await Resident.findById(residentId)

        return res.status(200).json({
            resident:updatedResident,
            success:true,
            message:"Resident updated."
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"Resident not updated."
        })
    }
}

export const deleteResident = async(req,res) => {
    try {
        const {params} = req
        let resident = await Resident.findOne({_id: params.id})
        if(!resident){
            return res.status(400).json({
                success: false,
                message: "Resident does not exist"
            })
        }

        await Resident.findOneAndDelete({_id: params.id})

        return res.status(200).json({
            resident,
            success:true,
            message:"Resident Deleted"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong!"
        })
    }
}

export const getUnverified = async(req,res) => {
    try {
        const users = await User.find({verified: false})
        return res.status(200).json({
            users: users,
            success: true,
            message: "Unverified Users has been collected and sent"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong!"
        })
    }
}

export const getAllResidents = async(req,res) => {
    try {
        let residents = await Resident.find()

        return res.status(200).json({
            residents,
            success:true,
            message:"All Residents Found"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong!"
        })
    }
}

//HOUSEHOLDS
export const createHousehold = async(req,res) => {
    try {
        const {body} = req
        await Household.remove()

        let residentAddress = await Resident.aggregate([
            {
                $group: {
                    _id: "$address",
                    count: { $sum: 1 }
                }
            },
            {
                $match: {
                    count: { $gt: 1 }
                }
            }
        ])

        let residents = await Resident.distinct("address")

        residents.forEach(async e => {
            // console.log(e)
            getResidents(e)
        })
        
        return res.status(200).json({
            success:true,
            message:"Household updated."
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something Went Wrong!"
        })
    }
}

async function getResidents(e){
    let residents = await Resident.find({address: e})
    let residentIds = []    

    residents.forEach(e => {
        residentIds.push(e._id)
    })
    
    let checkResindentExists = await Household.find({"residents._id": {$in: residentIds}})
    
    residentIds = []
    let householdName = residents[0].firstName+" "+residents[0].lastName+"'s Household"
    let householdContact = residents[0].mobile
    let householdAddress = residents[0].address
    let category = []
    residents.forEach(element => {
        if(element.householdNumber > 3){
            if (!category.includes("household")) {
                category.push("household");
            }
        }
        if(element.category){
            if (!category.includes(element.category)) {
                category.push(element.category);
            }
        }
        if(element.incomeRange){
            if (!category.includes(element.incomeRange)) {
                category.push(element.incomeRange);
            }
        }
    });
    
    if(checkResindentExists.length === 0) {
        let household = new Household({
            name: householdName,
            residents: residents,
            ayudaStatus: false,
            claimedStatus: false,
            householdContact: householdContact,
            householdAddress: householdAddress,
            criteria: category
        })

        await household.save()
    }
}

export const getQualifiedHousehold = async(req,res) => {
    try {
        const {body} = req
        let criteria = body.criteria
        let searchCriteria = []
        
        criteria.forEach(element => {
            if(element.name){
                if (!searchCriteria.includes(element.name)) {
                    searchCriteria.push(element.name);
                }
            }
        });

        let households
        if(searchCriteria.length === 0){
            households = await Household.find({},{"name":1, "_id":0})
        }else {
            households = await Household.find({criteria: {$in: searchCriteria}},{"name":1, "_id":0})
        }

        return res.status(200).json({
            households,
            success:true,
            message:"All qualified Households found."
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong!"
        })
    }
}

export const getResidentById = async(req,res) => {
    try {
        const {params} = req
        let resident = await Resident.findOne({_id:params.id})
        if(!resident){
            return res.status(400).json({
                success: false,
                message: "Item does not exist"
            })
        }else{
            return res.status(200).json({
                resident,
                success:true,
                message:"Item Found"
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something Went Wrong!"
        })
    }
}

export const getHouseholdById = async(req,res) => {
    try {
        const {params} = req
        let household = await Household.findOne({name:params.id})
        if(!household){
            return res.status(400).json({
                success: false,
                message: "Household does not exist"
            })
        }else{
            return res.status(200).json({
                household,
                success:true,
                message:"Household Found"
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something Went Wrong!"
        })
    }
}

export const updateAyudaProgram = async(req,res) => {
    try {
        const {body} = req

        if(body.status==="Unclaimed"){
            let programUpdate = await AyudaProgram.updateOne(
                {_id:body._id},
                { $set: { "households.$[elem].claimedStatus" : true } },
                { arrayFilters: [ { "elem.name":body.name } ] }    
            )
        }else {
            let programUpdate = await AyudaProgram.updateOne(
                {_id:body._id},
                { $set: { "households.$[elem].claimedStatus" : false } },
                { arrayFilters: [ { "elem.name":body.name } ] }    
            )
        }
        

        let updatedAyudaProgram = await AyudaProgram.find()

        return res.status(200).json({
            ayuda:updatedAyudaProgram,
            success:true,
            message:"Ayuda Program updated."
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"Ayuda Program not updated."
        })
    }
}

export const getProgramById = async(req,res) => {
    try {
        const {params} = req
        let program = await AyudaProgram.findOne({programName:params.id})
        if(!program){
            return res.status(400).json({
                success: false,
                message: "Program does not exist"
            })
        }else{
            return res.status(200).json({
                program,
                success:true,
                message:"Program Found"
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something Went Wrong!"
        })
    }
}
