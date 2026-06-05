import "./TextSpecificInput.css"
export function FontSizeSelect({ editor }) {

  
  return (
    <div className="dropdown-input-container">
      <p className="label">Font Size:</p>
      <select
        onChange={(e) => {
          editor
            .chain()
            .focus()
            .setMark('textStyle', { fontSize: e.target.value })
            .run()
        }}
        value={
          editor.getAttributes('textStyle')?.fontSize || '16px'
        }
      >
        <option value="12px">12px</option>
        <option value="14px">14px</option>
        <option value="16px">16px</option>
        <option value="20px">20px</option>
        <option value="24px">24px</option>
        <option value="28px">28px</option>
        <option value="32px">32px</option>
        <option value="36px">36px</option>
      </select>
    </div>

  );
}