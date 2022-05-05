import { useState } from "react";
import bugImageURL from "../../img/bug.svg";
import ideaImageURL from "../../img/idea.svg";
import thoughtImageURL from "../../img/thought.svg";
import { FeedBackTypeStep } from "./Steps/FeedBackTypeStep";
import { FeedBackContentStep } from "./Steps/FeedBackContentStep";
import { FeedBackSuccessStep } from "./Steps/FeedBackSuccessStep";

export const feedBackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageURL,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageURL,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outros",
    image: {
      source: thoughtImageURL,
      alt: "Imagem de um balão de pensamento",
    },
  },
};

export type FeedBackType = keyof typeof feedBackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedBackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);
  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedBackSuccessStep
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedBackTypeStep onFeedBackTypeChanged={setFeedbackType} />
          ) : (
            <FeedBackContentStep
              feedBackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}
      <footer className="text-xs ">
        Feito com amor pela{" "}
        <a className="underline underline-offset-2" href="#">
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
