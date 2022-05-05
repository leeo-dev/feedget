import { SendMailAdapter } from "./../adapters/send-mail-adapter";
import { PrismaFeedBackRepository } from "./../repositories/prisma/prisma-feedback-repository";
interface SubmitFeedBackUseCaseData {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedBackUseCase {
  //prettier-ignore
  constructor(private readonly prismaFeedBackRepository: PrismaFeedBackRepository ,
    private readonly sendEmailAdapter: SendMailAdapter) {}
  //prettier-ignore
  async execute({ type, comment, screenshot }: SubmitFeedBackUseCaseData) {
    await this.prismaFeedBackRepository.create({ type, comment, screenshot })
    const body: string = [
      "<div style='font-family: sans-serif; font-size: 16px; color: #222'>",
      `<p>tipo do feedback ${type}</p>`,
      `<p>comentário ${comment}</p>`,
    ].join("\n")
    await this.sendEmailAdapter.sendMail({
      subject: 'New Feedback',
      body
    })
  }
}
