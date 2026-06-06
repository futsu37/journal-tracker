import { useEffect, useState } from "react";
import "./ConfirmationWindow.css"
import truncate from "../../../utils/truncate";
export function ConfirmationWindow({ data, setData, journalIdx, setJournalIdx, setRedacting, setJournalName,toggleConfirmationWindow }) {
  const [inputText, setInputText] = useState();
  const [confirmed, setConfirmed] = useState(false);
  const confirmationText = "ON THE MEAT BONE";
  function handleInput(e) {
    setInputText(e.target.value);
  }
  function deleteJournal() {
    let newData = [...data];
    if (newData.length <= 1)
      newData = [
        {
          journalName: "New Journal",
          content: {}
        }];
    else
      newData.splice(journalIdx, 1);

    setData(newData);
    setJournalIdx(0);
    setRedacting(false);
    setJournalName(data[journalIdx].journalName);
  }
  useEffect(() => {
    if(inputText === confirmationText) {
      setConfirmed(true);
    }
    else
      setConfirmed(false);
  },[inputText])
  return (
    <div className="confirmation-window-container">
      <div className="confirmation-panel">
        <p className="confirmation-text">Are you sure you want to PERMANENTLY DELETE this journal "<span className="red">
          {truncate(data[journalIdx].journalName, 40)}
          </span>"?</p>
        <p className="confirmation-description">Type "{confirmationText}" to confirm</p>
        <input className="confirmation-input" placeholder="Type here" type="text" onChange={handleInput} />
        <div>
          <button className="confirmation-button" onClick={toggleConfirmationWindow}>BACK</button>
          <button disabled={!confirmed} className="confirmation-button" onClick={() => {deleteJournal(); toggleConfirmationWindow();}}>Delete</button>
        </div>
      </div>
    </div>
  );
}