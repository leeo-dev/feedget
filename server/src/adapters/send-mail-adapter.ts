export type SendMailData = {
  subject: string;
  body: string;
};
export interface SendMailAdapter {
  sendMail: (sendMailData: SendMailData) => Promise<void>;
}
