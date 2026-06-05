import './JournalButton.css'
export function BoldButton({formattingInfo ,editor }) {
  function handleClick(e) {
  editor.chain().focus().toggleBold().run(); 
    
    e.currentTarget.classList.toggle('active-input');
  }
  const activeStyle = formattingInfo.isBold ? 'active-input' : '';
  return (
    <button title="Bold(Ctrl + B)" className= {`journal-button ${activeStyle}`}
      onClick={(e) => handleClick(e)}>
      B
    </button>
  );
}