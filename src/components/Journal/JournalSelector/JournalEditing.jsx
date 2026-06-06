import { useEffect, useState } from "react";
import "./JournalEditing.css"
import { ConfirmationWindow } from "./ConfirmationWindow";
export function JournalEditing({ data, setData,
  journalIdx, setJournalIdx,
  setRedacting,
  journalName, setJournalName,
  toggleRedacting }) {

  const maxLength = 50;
  const [confirmationWindow, setConfirmationWindow] = useState(false);
  function handleChange(e) {
    setJournalName(e.target.value);
  }
  function toggleConfirmationWindow() {
    setConfirmationWindow(!confirmationWindow);
  }
  function saveName() {
    const newData = [...data]
    newData[journalIdx].journalName = journalName;
    setData(newData);
  }

  const [isLowerResolution, setIsLowerResolution] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsLowerResolution(window.innerWidth <= 768);
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  return (
    <>
      <div className="editing-container">
        <p className="editing-notation">Characters left: {maxLength - journalName.length}</p>
        <input className="editing-input" maxLength={maxLength} onChange={handleChange} value={journalName}></input>
      </div>
      {isLowerResolution ?
        <div>
          <button className="journal-selector-button" onClick={toggleConfirmationWindow}>Delete</button>
          <button className="journal-selector-button" onClick={() => { toggleRedacting(); saveName() }}>Save</button>
        </div>
        :
        <>
          <button className="journal-selector-button" onClick={() => { toggleRedacting(); saveName() }}>Save</button>
          <button className="journal-selector-button" onClick={toggleConfirmationWindow}>Delete</button>
        </>
      }
      {confirmationWindow ? <ConfirmationWindow data={data} setData={setData}
        journalIdx={journalIdx} setJournalIdx={setJournalIdx}
        setRedacting={setRedacting} setJournalName={setJournalName}
        toggleConfirmationWindow={toggleConfirmationWindow} /> : <></>}
    </>
  );
}