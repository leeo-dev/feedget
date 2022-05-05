import { prisma } from "../../prisma";
import {
  FeedbacksRepository,
  FeedBackCreateData,
} from "../feedbacks-repository";

export class PrismaFeedBackRepository implements FeedbacksRepository {
  //prettier-ignore
  async create({type, comment, screenshot}: FeedBackCreateData): Promise<void> {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
