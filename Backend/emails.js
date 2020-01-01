const sgMail = require('@sendgrid/mail');

// const sendGridAPIKey = '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';
// const sendGridAPIKey = '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'

// sgMail.setApiKey(sendGridAPIKey);
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


const sendUniqueId = (email, id) => {
    sgMail.send({
        to: email,
        from: 'rajilateeflanre@gmail.com',
        subject: 'UNIQUE PIN',
        text: `Use the unique pin to access the form data: ${id}`,
        // html: 
    })  
}

module.exports = {
    sendUniqueId
}