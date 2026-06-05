import './JournalButton.css'
import './italic.css'
export function ItalicButton({formattingInfo, editor }) {
  function handleClick(e) {
    editor.chain().focus().toggleItalic().run();
    e.currentTarget.classList.toggle('active-input');
  }
  const activeStyle = formattingInfo.isItalic ? 'active-input' : '';
  return (
    <button title="Italic(Ctrl + I)" className= {`journal-button italic ${activeStyle}`}
      onClick={(e) => handleClick(e)}>
      I
    </button>
  );
}