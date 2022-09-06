const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
    const body = JSON.parse(req.body);
    const message = `
    Name:${body.name}\r\n
    Email:${body.email}\r\n
    Message:${body.message}
    `;
    const data = {
        to: 'hello@smartaudiotechnologies.com',
        from: 'hello@smartaudiotechnologies.com',
        subject: 'New Message from Smart Audio Technologies Website',
        text: message,
        html: message.replace(/\r\n/g, '<br>')
    }
    mail.send(data);
    res.status(200).json({status: 'OK'});
}