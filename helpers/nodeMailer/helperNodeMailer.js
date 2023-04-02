const nodemailer = require("nodemailer");
//require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: 'smtp.mail.yahoo.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.TRANSPORTER_USERNAME,
        pass: process.env.TRANSPORTER_PWD,
    }
});
module.exports = transporter;
