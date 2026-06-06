import { useEffect, useState } from "react";
import "./JournalViewing.css"
import { truncate } from "../../../utils/truncate";
export function JournalViewing({ data, setData, journalName, toggleRedacting }) {
  function addJournal() {
    const newData = [...data,
    {
      journalName: "New Journal " + data.length,
      content: {}
    }
    ]
    setData(newData);
  }
    
    const [isLowerResolution, setIsLowerResolution] = useState(window.innerWidth <= 436);
    useEffect(() => {
      const handleResize = () => {
        setIsLowerResolution(window.innerWidth <= 436);
      }
  
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize);
      }
    }, [])
    isLowerResolution
  return (
    <>
      <p className="journal-name cursor-pointer" onClick={toggleRedacting}>{journalName.trim() === '' ? "-" : isLowerResolution ? truncate(journalName,30) : journalName} </p>

      <button className="journal-selector-button" onClick={addJournal}>+</button>
      
    </>
  );
}