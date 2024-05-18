import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private email: string;
  private password: string;
  constructor(private configService: ConfigService) {
    this.email = configService.get('EMAIL_USERNAME');
    this.password = configService.get('EMAIL_PASSWORD');
  }
  async sendConfirmationEmail(email: string, confirmationCode: string) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.ru', // сервер SMTP для Mail.ru
      port: 465, // порт для SSL
      secure: true,
      auth: {
        user: this.email,
        pass: this.password,
      },
    });

    const htmlTemplate = `
    <meta name="unsub" content="mailto:chat.info@inbox.ru">
    <meta name="unsub-post" content="Подтверждения почты">
    <meta name="X-Mailer" content="My Mailer">
    <div style="width: 100%; background-color: #1a1a1a; color: #ffa500; padding: 20px; text-align: center;">
    <h2 style="color: #ffa500;">Доброго времени суток!</h2>
    <p style="color: #ffa500;">Уважаемый(ая) ${email}</p>
    <p style="color: #ffa500;">Ваш код подтверждения: <b>${confirmationCode}</b></p>
    <p style="color: #ffa500;">Вы также можете подтвердить почту вручную или кликнув во ссылке:</p>
    <a href="http://filin-hub.online:3000/user/confirm?mail=true&key=${confirmationCode}" style="display: inline-block; padding: 10px 20px; background-color: #ffa500; color: #1a1a1a; text-decoration: none; font-weight: bold; border-radius: 5px;">Клик для подтверждения</a>
    <p style="color: #ffa500;">Спасибо за регистрацию!</p>
    </div>
  `;

    const mailOptions = {
      from: 'Your App <chat.info@inbox.ru>',
      to: email,
      subject: 'Confirm your email',
      html: htmlTemplate,
    };

    const result = await transporter.sendMail(mailOptions);
    return result;
  }
}
