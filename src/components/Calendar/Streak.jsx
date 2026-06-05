import "./Streak.css"
export function Streak({ data, journalIdx}) {
  function getUnixArray() {
    let unixArray = Object.entries(data[journalIdx].content);
    unixArray = unixArray.map(item => { return Number(item[0]) });
    return unixArray;
  }
  function formatStreakText(number) {
    return number === 1 ? `${number} day` : `${number} days`
  }
  const dayLengthUnix = 86400;

  function getBestStreak() {
    const unixArray = getUnixArray();
    if(unixArray.length === 0)
      return 0;

    let streak = 1;
    let maxStreak = 1;
    for (let i = 0; i < unixArray.length - 1; i++) {
      unixArray[i] + dayLengthUnix === unixArray[i + 1] ? streak += 1 : streak = 1;

      if (streak > maxStreak)
        maxStreak = streak;
    }
    return maxStreak;
  }
  function getCurrentStreak() {
    const unixArray = getUnixArray();
    if(unixArray.length === 0)
      return 0;

    let streak = 1;
    for (let i = 0; i < unixArray.length - 1; i++) {
      unixArray[i] + dayLengthUnix === unixArray[i + 1] ? streak += 1 : streak = 1;
    }
    return streak;

  }
  return (
    <div className="streak-container">
      <p className="streak-text">Best Streak: {formatStreakText(getBestStreak())}</p>
      <p className="streak-text">Current Streak: {formatStreakText(getCurrentStreak())}</p>
    </div>
  );
}