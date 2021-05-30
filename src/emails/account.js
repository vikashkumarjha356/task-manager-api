const sgMail = require('@sendgrid/mail');
const sendgridAPIKey = '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';

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'vikashkumarjha356@gmail.com',
        subject: 'Thanks for joining in !',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'vikashkumarjha356@gmail.com',
        subject: 'Sorry to see you go !',
        text: `Good bye, ${name}. I hope to see you back.`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail

}