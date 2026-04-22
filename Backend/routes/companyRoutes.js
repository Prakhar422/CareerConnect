import express from "express"
import { changeJobApplicationStatus, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, jobVisibility, loginCompany, postJob, registerCompany } from "../controllers/companyControler.js"
import upload from "../config/multer.js"
import { protectCompany } from "../middleware/authMiddleware.js"

const router = express.Router()

//Register company Done
router.post('/register',upload.single('image'), registerCompany)

//Company login Done
router.post('/login', loginCompany)

//Get company data Done
router.get('/company',protectCompany, getCompanyData)

//Post job Done
router.post('/post-job',protectCompany, postJob)

//Get applicants data of company
router.get('/applicants',protectCompany, getCompanyJobApplicants)

//Get company job list Done
router.get('/list-jobs',protectCompany, getCompanyPostedJobs)

//Change application status
router.post('/change-status',protectCompany, changeJobApplicationStatus)

//Change application visibility Done
router.post('/change-visibility',protectCompany, jobVisibility)

export default router;