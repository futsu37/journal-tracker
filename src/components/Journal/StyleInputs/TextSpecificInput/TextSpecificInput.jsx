import { TextAlignSelect } from "./TextAlignSelect";
import { FontSizeSelect } from "./FontSizeSelect";
export function TextSpecificInput({editor}) 
{
  return (
    <>
      <TextAlignSelect editor={editor} />
      <FontSizeSelect editor={editor} />
    </>
  );
}