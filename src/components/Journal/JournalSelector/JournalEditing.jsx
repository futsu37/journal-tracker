import { useState } from "react";
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

  return (
    <>
      <button className="journal-selector-button" onClick={toggleConfirmationWindow}>Delete Journal</button>
      <div className="editing-container">
        <p className="editing-notation">Characters left: {maxLength - journalName.length}</p>
        <input className="editing-input" maxLength={maxLength} onChange={handleChange} value={journalName}></input>
      </div>
      <button className="journal-selector-button" onClick={() => { toggleRedacting(); saveName() }}>Save</button>
      {confirmationWindow ? <ConfirmationWindow data={data} setData={setData}
        journalIdx={journalIdx} setJournalIdx={setJournalIdx}
        setRedacting={setRedacting} setJournalName={setJournalName} 
        toggleConfirmationWindow={toggleConfirmationWindow}/> : <></>}
    </>
  );
}