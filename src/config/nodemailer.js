const nodemailer = require('nodemailer')

async function main(email, token) {

    let transporter = nodemailer.createTransport({
        host: 'smtp.umbler.com',
        port: 587 ,
        secure: false,
        auth: {
            user: 'dev@arpdevs.com.br',
            pass: 'ffba79bfb45!'
        }
    })

    let info = await transporter.sendMail({
        from: '"ArpDevs Suporte" <dev@arpdevs.com.br>',
        to: email,
        subject: 'Recuperação de Senha',
        html: '<b>Token de Redefinição de Senha: </b>' + token + '<div style="display: flex; font-family: Arial, Helvetica, sans-serif;"><div style="margin: 20px 10px 10px 10px;"><img style="border-right: 1px solid black; padding: 10px; height: 100px;" src="https://i.ibb.co/3yQPynT/Logo.png"/></div><div style="margin: 20px 10px 10px 10px;"><br /><b>Equipe ArpDevs</b> - Suporte<br /><br /><a href="https://wa.me/5577998627414" target="_blank" rel="noopener noreferrer">(77) 99862-7414 - WhatsApp</a><br /><br /> dev@arpdevs.com.br</div></div>'
    })

    return info
}

exports.main = main