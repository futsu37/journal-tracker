import { MonthButton } from "./MonthButton";
import dayjs from "dayjs";
import './TopPanel.css'
export function TopPanel({month, setMonth}) {
  return (
    <>
      <div className="top-panel-container">
        <MonthButton amount={-1} month={month} setMonth={setMonth}/>
        <div className="month-label">{dayjs().set('month',month).format('MMMM YYYY')}</div>
        <MonthButton amount={1} month={month} setMonth={setMonth}/>
      </div>
    </>
  );
}