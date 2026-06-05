import dayjs from "dayjs";
import './DateGrid.css'
export function DateGrid({unixId ,setUnixId ,data, month,journalIdx }) {

  const selectedMonth = dayjs().set('month', month);

  const startOfMonth = selectedMonth.startOf('month');

  const startOfCalendar = startOfMonth.startOf('week').add(1, 'day');

  let pointerDate = startOfCalendar.clone()
  const dates = []
  for(let i = 0; i < 42; i++) {
    dates.push(pointerDate)
    pointerDate = pointerDate.add(1, 'day')
  }
  return (
    <>
      <div className='grid-date-box'>
        {
          dates.map((date) => {
            const unix = Number(date.unix().toString());
            const dateFromUnix = dayjs.unix(unix);

            let dataClassName = data[journalIdx].content[unix] ? 'date-box date-box-exist' : 'date-box';
            dataClassName += dateFromUnix.month(month).month() !== dateFromUnix.month() ? " not-current-month" : '';
            dataClassName += unixId === unix ? " current-unix" : '';
            return (
              <div key={unix} data-unix={unix}
                onClick={(e) => { handleClick(e, setUnixId) }}
                className={dataClassName}> {date.format('D')}
                <p className="day-of-the-month"> {date.format('dd')} </p>
              </div>
            );
          })}
      </div>
    </>
  );
}

function handleClick(e, setUnixId) {
  const unix = e.currentTarget.dataset.unix;
  setUnixId(Number(unix));
}