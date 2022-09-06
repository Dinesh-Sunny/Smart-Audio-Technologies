import Sparkpost from "sparkpost";

async function emailHandler(req, res){
    const client = new Sparkpost(process.env.SPARKPOST_EMAIL);
    const data = JSON.parse(req.body);
    const {email, message } = data;

    client.transmissions.send({
        content: {
            from: "hello@smartaudiotechnologies.com",
            subject: "Message from SmartAudioTechnologies Contact Form",
            html: `<html><body><p>${message}</p></body></html>`
        },
        recipients: [{address: email}]
    }).then( () => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application-json");
        res.end(JSON.stringify({error: null}))
    }).catch( () => {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application-json");
        res.end(JSON.stringify({error: "error sending email, please contact +44 (0) 7517 897999"}))
    })
}

export default emailHandler;