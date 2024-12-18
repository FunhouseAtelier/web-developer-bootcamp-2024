// DEFINE YOUR FUNCTION BELOW:
function returnDay(dayNum) {
  if (dayNum < 1 || dayNum > 7) {
    return null
  }
  const dayNames = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]
  return dayNames[dayNum - 1]
}
