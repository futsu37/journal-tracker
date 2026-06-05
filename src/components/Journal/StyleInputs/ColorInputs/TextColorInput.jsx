import "./ColorInputs.css"
export function TextColorInput({ formattingInfo, editor }) {
    function handleClick() {
    editor.chain().focus().setColor('#000000').run();
  }
  return (
    <div className="color-input-container">
      <p className="label">Font Color</p>
      <input className="color-input"
        type="color"
        value={formattingInfo.color ? formattingInfo.color : '#000000'}
        onInput={(e) => {
          editor.chain().focus().setColor(e.target.value).run()
        }}
      />
          <button className="reset-button"
      onClick={() => {handleClick()}}
      >R</button>
    </div>

  );
}