import { StyleButtons } from "./StyleButtons/StyleButtons";
import { TextSpecificInput } from "./TextSpecificInput/TextSpecificInput";
import { TextColorInput } from "./ColorInputs/TextColorInput";
import { TextBackgroundColorInput } from "./ColorInputs/TextBackgroundColorInput";
export function StyleInputsPanel({ formattingInfo,setFormattingInfo, editor }) {
  return (
    <div className="journal-inputs">
      <div className="style-inputs-container">
        <StyleButtons formattingInfo={formattingInfo} editor={editor} />
      </div>
      <div className="style-inputs-container">
        <TextSpecificInput editor={editor} />
      </div>
      <div className="style-inputs-container">
        <TextColorInput formattingInfo={formattingInfo} setFormattingInfo={setFormattingInfo} editor={editor} />
      </div>
      <div className="style-inputs-container no-border">
        <TextBackgroundColorInput formattingInfo={formattingInfo} setFormattingInfo={setFormattingInfo} editor={editor} />
      </div>
    </div >
  );
}