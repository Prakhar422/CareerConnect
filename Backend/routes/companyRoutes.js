import express from "express"
import { changeJobApplicationStatus, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, jobVisibility, loginCompany, postJob, registerCompany } from "../controllers/companyControler.js"

const router = express.Router()

//Register company
router.post('/register', registerCompany)

//Company login
router.post('/login', loginCompany)

//Get company data
router.get('/company', getCompanyData)

//Post job
router.post('/post-job', postJob)

//Get applicants data of company
router.get('/applicants', getCompanyJobApplicants)

//Get company job list
router.get('/list-jobs', getCompanyPostedJobs)

//Change application status
router.post('/change-status', changeJobApplicationStatus)

//Change application visibility
router.post('/change-visibility', jobVisibility)

export default router;