import { TextAlignSelect } from "./TextAlignSelect";
import { FontSizeSelect } from "./FontSizeSelect";
import { useEffect, useState } from "react";
export function TextSpecificInput({ editor }) {
  const [isLowerResolution, setIsLowerResolution] = useState(window.innerWidth <= 1024);
  useEffect(() => {
    const handleResize = () => {
      setIsLowerResolution(window.innerWidth <= 1024);
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])
  return (
    isLowerResolution ?
      <div>
        <TextAlignSelect editor={editor} />
        <FontSizeSelect editor={editor} />
      </div>
      :
    <>
      <TextAlignSelect editor={editor} />
      <FontSizeSelect editor={editor} />
    </>
    
  );
}