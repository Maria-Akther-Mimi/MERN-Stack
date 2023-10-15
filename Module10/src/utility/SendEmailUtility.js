const nodemailer = require('nodemailer');

const SendEmailUtility= async (EmailTo, EmailText, EmailSubject) => {

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 25,
        secure: false,
        auth: {
            user: "mariamimi2247@gmail.com",
            pass: 'n,22476464'
        },tls: {
            rejectUnauthorized: false
        },
    });


    let mailOptions = {
        from: 'Task Manager MERN <mariamimi2247@gmail.com>',
        to: EmailTo,
        subject: EmailSubject,
        text: EmailText
    };

    return  await transporter.sendMail(mailOptions)

}
module.exports=SendEmailUtility