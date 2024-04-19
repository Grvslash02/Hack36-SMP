const express=require('express');
const userController=require('./../controllers/usercontroller');
const authController=require('./../controllers/authController');
const mentorRouter= express.Router();

mentorRouter.post('/signup',authController.signup);
mentorRouter.post('/login',authController.login);
mentorRouter.post('/forgotPassword',authController.forgotPassword);
mentorRouter.patch('/resetPassword/:token',authController.resetPassword );

// mentorRouter.route('/')
//     .get(userController.getAllUsers)
//     .post(userController.addNewUser)


mentorRouter.route('/:id?')
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser)

module.exports=userRouter;

