// DEFINE YOUR FUNCTION BELOW:
function capitalize(str) {
  const firstLetter = str[0].toUpperCase()
  const remainder = str.slice(1)
  const newStr = firstLetter + remainder
  return newStr
}
