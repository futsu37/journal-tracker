import './JournalButton.css'
import './underline.css'
export function UnderlineButton({ formattingInfo, editor }) {
  function handleClick(e) {
    editor.chain().focus().toggleUnderline().run();

    e.currentTarget.classList.toggle('active-input');
  }
  const activeStyle = formattingInfo.isUnderline ? 'active-input' : '';
  return (
    <button title='Underline(Ctrl + U)' className={`journal-button underline ${activeStyle}`}
      onClick={(e) => handleClick(e)}>
      U
    </button>
  );
}