
export function TextBackgroundColorInput({ formattingInfo, editor }) {
  function handleClick() {
    editor.chain().focus().toggleHighlight({
            color: 'transparent'
    }).run();
  }

  return (
    <div className="color-input-container">
      <p className="label">Font Background Color</p>
      <input className="color-input"
        type="color"
        value={!(formattingInfo.backgroundColor === undefined || formattingInfo.backgroundColor === "transparent") ? formattingInfo.backgroundColor : '#FFFFFF'}
        onInput={(e) => {
          editor.chain().focus().toggleHighlight({
            color: e.target.value,
          }).run()
        }}
      />
      <button className="reset-button"
      onClick={() => {handleClick()}}
      >R</button>
    </div>

  );
}