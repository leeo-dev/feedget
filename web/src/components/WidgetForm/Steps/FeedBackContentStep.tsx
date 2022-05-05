import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedBackType, feedBackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../screenshot-button";

interface FeedBackContentStepProps {
  feedBackType: FeedBackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

//prettier-ignore
export function FeedBackContentStep({feedBackType, onFeedbackRestartRequested, onFeedbackSent}: FeedBackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState<string>('')

  const feedBackTypeInfo = feedBackTypes[feedBackType]
  function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault()
    console.log({
      screenshot,
      comment
    })
    onFeedbackSent()
  }
  return (
    <>
      <header>
        <button onClick={onFeedbackRestartRequested} type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100">
          <ArrowLeft weight="bold" className="w-4 h-4"/>
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img src={feedBackTypeInfo.image.source} alt={feedBackTypeInfo.image.alt} className="w-6 h-6" />
          {feedBackTypeInfo.title}
          </span>
        <CloseButton />
      </header>
      <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
        <textarea className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-x-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
        placeholder="conte com detalhes o que está acontecendo!"
        onChange={(event) => setComment(event.target.value)}
        />
        <footer className="flex gap-2 mt-2">
            <ScreenshotButton 
              screenshot={screenshot!}
              onScreenshotTook={setScreenshot}
            />
            <button 
            type="submit" 
            disabled={comment.length === 0 }
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500">
              Enviar Feedback
            </button>
        </footer>
      </form>
    </>
  );
}
