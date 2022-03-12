import nodemailer from "nodemailer";

class arpmailer {
  async sendMail(mail: string, password: string) {
    try {

      let transporter = nodemailer.createTransport({
        host: process.env.MAILER_HOST,
        port: Number(process.env.MAILER_PORT),
        secure: true,
        auth: {
          user: process.env.MAILER_USER,
          pass: process.env.MAILER_PASS,
        },
      });

      let info = await transporter.sendMail({
        from: '"PhPort Suporte" <support@phport.xyz>',
        to: mail,
        subject: "Recuperação de Senha",
        html:
          `<b>Senha Atual: </b>${password}<div style="display: flex; font-family: Arial, Helvetica, sans-serif;"><div style="margin: 20px 10px 10px 10px;"><img style="border-right: 1px solid black; padding: 10px; height: 100px;" src="https://res.cloudinary.com/arpdevs-tecnologia/image/upload/v1647044046/arpdevs/institutional/Logo_crfmz6.png"/></div><div style="margin: 20px 10px 10px 10px;"><br /><b>Equipe ArpDevs</b> - Suporte<br /><br /><a href="https://wa.me/5577998627414" target="_blank" rel="noopener noreferrer">(77) 99862-7414 - WhatsApp</a><br /><br /> ${process.env.MAILER_USER}</div></div>`,
      });

      console.log(info);

      return info;
    } catch (error) {
      console.error(error);
    }
  }
}

export default new arpmailer();
