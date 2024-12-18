const testScores = {
  keenan: 80,
  damon: 67,
  kim: 89,
  marlon: 91,
  dwayne: 77,
  nadia: 83,
  elvira: 97,
  dierdre: 81,
  vonnie: 60,
}

// for (let person in testScores) {
//   console.log(`${person} scored ${testScores[person]}`)
// }

let total = 0
let scores = Object.values(testScores)
for (let score of scores) {
  total += score
}
console.log(total / scores.length)
