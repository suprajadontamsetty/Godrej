import express from "express";
import { registerController,loginController,testController, forgotPasswordController ,currentuserController} from "../controllers/authController.js";
import { isAdmin, requireSignin } from "../middlewares/authMiddleware.js";
//router abject
const router=express.Router();

//routing

//REGISTER || METHOD POST
router.post('/register',registerController);

//login || method post
router.post('/login',loginController);

//test routes

router.get('/test', requireSignin, isAdmin,testController);

// forgot password
router.post('/forgot-password',forgotPasswordController)

//getUser
router.get('/users/:id',currentuserController)

export default router;