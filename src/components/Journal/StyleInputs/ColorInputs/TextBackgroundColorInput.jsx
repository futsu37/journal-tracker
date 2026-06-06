import { useEffect, useState } from "react";

export function TextBackgroundColorInput({ formattingInfo, editor }) {
  function handleClick() {
    editor.chain().focus().toggleHighlight({
            color: 'transparent'
    }).run();
  }
  const [isLowerResolution, setIsLowerResolution] = useState(window.innerWidth <= 1280);
  useEffect(() => {
    const handleResize = () => {
      setIsLowerResolution(window.innerWidth <= 1280);
    }

    window.addEventListener('resize',handleResize)
    return () => {
      window.removeEventListener('resize',handleResize);
    }
  },[])
  return (
    <div className="color-input-container">
      <p className="label">{isLowerResolution ? "Font BG Color" :"Font Background Color"}</p>
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