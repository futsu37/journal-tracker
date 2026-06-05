import "./JournalViewing.css"
export function JournalViewing({data, setData,journalIdx, setJournalIdx,journalName,toggleRedacting}) {

  function addJournal() {
    const newData = [...data,
    {
      journalName: "New Journal " + data.length,
      content: {}
    }
    ]
    setData(newData);
  }

  function changeJournal(amount) {
    setJournalIdx(journalIdx + amount);
  }
  const disabled = 0 == journalIdx;

  return (
    <>
      <button disabled={disabled} className='journal-selector-button' onClick={() => changeJournal(-1)}>&#60;</button>

      <p className="journal-name cursor-pointer" onClick={toggleRedacting}>{journalName.trim() === '' ? "-" : journalName} </p>

      {data.length - 1 > journalIdx ?
        <button className="journal-selector-button" onClick={() => changeJournal(1)}>&#62;</button>
        :
        <>
          <button disabled={true} className="journal-selector-button" onClick={() => changeJournal(1)}>&#62;</button>
          <button className="journal-selector-button" onClick={addJournal}>+</button>
        </>
      }
    </>
  );
}