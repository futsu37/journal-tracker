import { truncate } from "../../../utils/truncate";
import "./SelectOptions.css"
export function SelectOptions({data, journalIdx ,setJournalIdx}) {
  const journals = Object.entries(data);
  const mapped = journals.map(item => {
    return item[1].journalName;
  })
  
  function onChange(e) {
    setJournalIdx(Number(e.target.value));
  }
  return (
    <select className="select" value={journalIdx} onChange={onChange}>
      {mapped.map((name, index) => (
        <option className="option" key={index} value={index}>
          {truncate(name, 15)}
        </option>
      ))}
    </select>
  );
} 