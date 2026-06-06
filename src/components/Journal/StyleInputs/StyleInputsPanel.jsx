import { StyleButtons } from "./StyleButtons/StyleButtons";
import { TextSpecificInput } from "./TextSpecificInput/TextSpecificInput";
import { TextColorInput } from "./ColorInputs/TextColorInput";
import { TextBackgroundColorInput } from "./ColorInputs/TextBackgroundColorInput";
import "./StyleInputsPanel.css"
export function StyleInputsPanel({ formattingInfo,setFormattingInfo, editor }) {
  return (
    <div className="journal-inputs">
      <div className="style-inputs-container style-button-grid">
        <StyleButtons formattingInfo={formattingInfo} editor={editor} />
      </div>
      <div className="style-inputs-container style-text-grid">
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