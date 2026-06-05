import "./MonthButton.css"
export function MonthButton({amount, month, setMonth})
{
  const  leftArrow = '<';
  const rightArrow = '>'
  const text = amount > 0 ? rightArrow : leftArrow;
  return (
    <button className="month-change-button" 
    onClick={() => setMonth(amount + month)}>
      {text}
      </button>
  );
}
