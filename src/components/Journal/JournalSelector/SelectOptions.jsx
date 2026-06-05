import "./SelectOptions.css"
export function SelectOptions({data, journalIdx ,setJournalIdx}) {
  const journals = Object.entries(data);
  const mapped = journals.map(item => {
    return item[1].journalName;
  })
  function truncate(text, maxLength = 15) {
  return text.length > maxLength
    ? text.slice(0, maxLength) + "..."
    : text;
  } 
  function onChange(e) {
    setJournalIdx(Number(e.target.value));
  }
  return (
    <select className="select" value={journalIdx} onChange={onChange}>
      {mapped.map((name, index) => (
        <option className="option" key={index} value={index}>
          {truncate(name)}
        </option>
      ))}
    </select>
  );
} 