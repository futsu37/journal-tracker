import dayjs from 'dayjs';
import './App.css'
import { Calendar } from './components/Calendar/Calendar';
import { useEffect, useState } from "react";


function loadData() {
  const stored = localStorage.getItem('data')
  return stored ? JSON.parse(stored) : [
    {
      journalName: "New Journal",
      content: {}
    }]
}

function App() {

  const todaysDateFormated = dayjs().format("YYYY-MM-DD");
  const todaysUnixId = dayjs(todaysDateFormated).unix();

  const [month, setMonth] = useState(dayjs().month());
  const [unixId, setUnixId] = useState(todaysUnixId);
  const [data, setData] = useState(loadData());
  const [journalIdx, setJournalIdx] = useState(0);
  useEffect(() => {
      localStorage.setItem('data', JSON.stringify(data))    
  },[data])
  return (
    <>
      <Calendar data={data}
        setData={setData}
        month={month}
        setMonth={setMonth}
        unixId={unixId}
        setUnixId={setUnixId}
        journalIdx={journalIdx}
        setJournalIdx={setJournalIdx} />
    </>
  );
}

export default App
