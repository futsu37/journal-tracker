import { useEffect, useState } from "react";
import "./JournalSelector.css"
import { JournalEditing } from "./JournalEditing";
import { JournalViewing } from "./JournalViewing";
import { SelectOptions } from "./SelectOptions";
export function JournalSelector({ data, setData, journalIdx, setJournalIdx }) {
  const [redacting, setRedacting] = useState(false)
  const [journalName, setJournalName] = useState(data[journalIdx].journalName)
  function toggleRedacting() {
    setRedacting(!redacting);
  }
  useEffect(() => {
    setJournalName(data[journalIdx].journalName); // it works. tough idk why react underlines like it's an error
  }, [journalIdx, data])
  return (
    <div className="journal-selector-container">
      {redacting
        ? <JournalEditing data={data} setData={setData}
        journalIdx={journalIdx} setJournalIdx={setJournalIdx} setRedacting={setRedacting}
        journalName={journalName} setJournalName={setJournalName} toggleRedacting={toggleRedacting} />
        : <>
          <JournalViewing data={data} setData={setData}
            journalIdx={journalIdx} setJournalIdx={setJournalIdx}
            journalName={journalName} toggleRedacting={toggleRedacting} />
        </>
      }
      <SelectOptions data={data} journalIdx={journalIdx} setJournalIdx={setJournalIdx}/>
    </div>
  );
}