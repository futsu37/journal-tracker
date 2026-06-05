import './JournalButton.css'
import './strike.css'
export function StrikeButton({ formattingInfo, editor }) {
  function handleClick(e) {
    editor.chain().focus().toggleStrike().run();

    e.currentTarget.classList.toggle('active-input');
  }
  const activeStyle = formattingInfo.isStrike ? 'active-input' : '';
  return (
    <button title="Strike" className={`journal-button strike ${activeStyle}`}
      onClick={(e) => handleClick(e)}>
      S
    </button>
  );
}