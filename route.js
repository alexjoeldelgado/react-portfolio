// require("dotenv").config();
// var nodemailer = require('nodemailer');
// const express = require("express")
// const router = express.Router();

// router.post("/api/messages", (req, res, next) => {
//     const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//         user: `${process.env.MAILEMAIL}`,
//         pass: `${process.env.MAILPASSWORD}`
//     }
//     });

//     const mailOptions = {
//     from: `${req.body.email}`,
//     to: `${process.env.MAILEMAIL}`,
//     subject: `Contact Form Submission from ${req.body.name}`,
//     text: 
//     `
//     Name: ${req.body.name}
//     Email: ${req.body.email}  
//     Message: ${req.body.message}
//     ` 
//     };
        
//     transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
//     });
//     res.send(req.body);
// });

// module.exports = router;