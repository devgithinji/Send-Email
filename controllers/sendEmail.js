const nodemailer = require('nodemailer')

const sendEmail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'sim4ptz3ehjvb5l4@ethereal.email',
            pass: 'btv1HzNa3Q5V1d9fys'
        }
    });

    let info = await transporter.sendMail({
        from: '"Dennis Githinji" <wakahiad@gmail.com>',
        to: 'bar@example.com',
        subject: 'Hello',
        html: '<h2>Sending Emails with node js</h2>'
    })

    res.json(info);
}

module.exports = sendEmail;