import nodemailer from 'nodemailer'

class arpmailer {

    async sendMail(mail: string, password: string) {
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
            to: mail,
            subject: 'Recuperação de Senha',
            html: '<b>Senha Atual: </b>' + password + '<div style="display: flex; font-family: Arial, Helvetica, sans-serif;"><div style="margin: 20px 10px 10px 10px;"><img style="border-right: 1px solid black; padding: 10px; height: 100px;" src="https://i.ibb.co/3yQPynT/Logo.png"/></div><div style="margin: 20px 10px 10px 10px;"><br /><b>Equipe ArpDevs</b> - Suporte<br /><br /><a href="https://wa.me/5577998627414" target="_blank" rel="noopener noreferrer">(77) 99862-7414 - WhatsApp</a><br /><br /> dev@arpdevs.com.br</div></div>'
        })

        return info
    }

}

export default new arpmailer()
