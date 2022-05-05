import { SubmitFeedBackUseCase } from "./submit-feedback-usecase";
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();
describe("SubmitFeedback Usecase", () => {
  it("should be able to submit a feedback", async () => {
    const sut = new SubmitFeedBackUseCase(
      { create: createFeedbackSpy },
      { sendMail: sendMailSpy }
    );
    await expect(
      sut.execute({
        type: "BUG",
        comment: "any_comment",
        screenshot: "any_Screenshot.png",
      })
    ).resolves.not.toThrow();
    expect(sendMailSpy).toHaveBeenCalled();
    expect(createFeedbackSpy).toHaveBeenCalled();
  });
});
