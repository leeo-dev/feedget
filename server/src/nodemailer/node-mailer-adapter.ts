import nodemailer from "nodemailer";
import { SendMailAdapter, SendMailData } from "./../adapters/send-mail-adapter";
export class NodeMailerAdapter implements SendMailAdapter {
  async sendMail({ body, subject }: SendMailData): Promise<void> {
    const transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "f3bc9a4befc0f6",
        pass: "ad2a6311574878",
      },
    });
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Leonardo Albuquerque <leeodesign@hotmail.com>",
      subject,
      html: body,
    });
  }
}
