import "./TextSpecificInput.css"
export function TextAlignSelect({ editor }) {
  return (
    <div className="dropdown-input-container">
      <p className="label">Text Align</p>
      <select
        onChange={(e) => {
    editor.chain().focus().setTextAlign(e.target.value).run()
  }}
  value={
    editor.isActive({ textAlign: 'center' })
      ? 'center'
      : editor.isActive({ textAlign: 'right' })
      ? 'right'
      : editor.isActive({ textAlign: 'justify' })
      ? 'justify'
      : 'left'
  }
      >
        <option value="left">Left</option>
        <option value="right">Right</option>
        <option value="center">Center</option>
        <option value="justify">Justify</option>
      </select>
    </div>

  );
}