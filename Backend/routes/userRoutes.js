import express from "express"
import { applyForJob, getUserData, getUserJobApplications, updateUserResume } from "../controllers/userController.js"
import upload from "../config/multer.js"

const router = express.Router()

//Get user data Done
router.get('/user', getUserData)

//Apply for job Done
router.post('/apply', applyForJob)

//Get applied jobs data
router.get('/applications', getUserJobApplications)

//Update user profile(Resume)
router.post('/update-resume', upload.single('resume'), updateUserResume)

export default router;