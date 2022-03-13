import nodemailer from "nodemailer";
import { Usuario } from "../models/mct/usuario.model";
import path from 'path'
import fs from 'fs'

var recoverFile = path.join(__dirname, '../assets/html/recover.html')
var recoverHtml = fs.readFileSync(recoverFile, 'utf-8')

class arpmailer {
  async sendMail(data: string, usuario: Usuario) {
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
        from: `"PhPort Suporte" <${process.env.MAILER_USER}>`,
        to: usuario.usuario_email,
        subject: `Recuperação de Senha - ${usuario.usuario_email}`,
        html: this.buildEmail(usuario, data)
      });

      return info;
    } catch (error) {
      return undefined
    }
  }

  private buildEmail(usuario: Usuario, data: string): string {
    let recoverString = recoverHtml.toString()

    recoverString = recoverString.replace('{{user}}', usuario.usuario_nome)
    recoverString = recoverString.replace('{{link}}', `${process.env.CURRENT_HOST}/recover/${data}`)
    recoverString = recoverString.replace('{{sender}}', process.env.MAILER_USER)
    return recoverString
  }
}

export default new arpmailer();
