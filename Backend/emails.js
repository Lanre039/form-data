const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);


const sendUniqueId = (email, id) => {
    sgMail.send({
        to: email,
        from: 'rajilateeflanre@gmail.com',
        subject: 'UNIQUE PIN',
        text: `Use the unique pin to access the form data: ${id}`,
         
    })  
}

module.exports = {
    sendUniqueId
}