
const nodemailer = require("nodemailer");


sendEmail = (name) => {

// Nodemailer middleware
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
});

// Configure mailer options
let mailOptions = {
    from: "jeffpgreco@gmail.com",
    to: "madalynr.cowan@cms.k12.nc.us",
    subject: `A message from Ms. Cowan's Escape Rooms`,
    text: `
   
    message: ${name} has completed The Boy Who Harnessed the Wind Escape Room!`
};

// Send mail
transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
        console.log("Error friend", err);
    } else {
        console.log("Have future!");
    }
});

}

module.exports = sendEmail;