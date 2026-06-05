import "./Calendar.css"
import { TopPanel } from "./TopPanel";
import { DateGrid } from "./DateGrid";
import { Journal } from "../Journal/Journal";
import { Streak } from "./Streak";
export function Calendar(
  {
    data, setData,
    month, setMonth,
    unixId, setUnixId,
    content, setContent,
    journalIdx, setJournalIdx,
    
  }) {

  return (
    <div className='container'>
      <>
        <Journal data={data} setData={setData} unixId={unixId} content={content} setContent={setContent}
          journalIdx={journalIdx} setJournalIdx={setJournalIdx} />
        <div>
          <TopPanel data={data} month={month} setMonth={setMonth} />
          <DateGrid unixId={unixId} setUnixId={setUnixId} data={data} month={month} journalIdx={journalIdx} />
          <Streak data={data} journalIdx={journalIdx}/>
        </div>
      </>
    </div>
  );
}
