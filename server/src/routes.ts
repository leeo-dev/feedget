import { PrismaFeedBackRepository } from "./repositories/prisma/prisma-feedback-repository";
import { SubmitFeedBackUseCase } from "./usecases/submit-feedback-usecase";
import { Router } from "express";
import { NodeMailerAdapter } from "./nodemailer/node-mailer-adapter";
const feedbackRoute = Router();

feedbackRoute.post("/feedbacks", async (request, response) => {
  const { type, comment, screenshot } = request.body;

  const prismaFeedBackRepository = new PrismaFeedBackRepository();
  const nodeMailerAdapter = new NodeMailerAdapter();
  //prettier-ignore
  const submitFeedBackUseCase = new SubmitFeedBackUseCase(prismaFeedBackRepository, nodeMailerAdapter)
  await submitFeedBackUseCase.execute({
    type,
    comment,
    screenshot,
  });
  response.status(201).send();
});

export { feedbackRoute };
