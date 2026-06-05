import { BoldButton } from "./BoldButton";
import { ItalicButton } from "./ItalicButton";
import { UnderlineButton } from "./UnderlineButton";
import { StrikeButton } from "./StrikeButton";

export function StyleButtons({formattingInfo, editor}) {
  return (
    <>
      <BoldButton formattingInfo={formattingInfo} editor={editor} />
      <ItalicButton formattingInfo={formattingInfo} editor={editor} />
      <UnderlineButton formattingInfo={formattingInfo} editor={editor} />
      <StrikeButton formattingInfo={formattingInfo} editor={editor} />
    </>
  );
}