const franc = require('franc')
const langs = require('langs')
const colors = require('colors')

const input = process.argv[2]
const langCode = franc(input)

if (langCode === 'und') {
  console.log(`SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!`.red)
} else {
  const language = langs.where('3', langCode)
  if (language) {
    console.log(`Our best buess is: ${language.name}`.green)
  } else {
    console.log(
      /* Jason's NOTE: In the warning notes from the lesson 339 document Colt switches to using a `colors.red()` method to change the color of the text printed in the terminal. I included that below, just to show it is another option, but I left the examples above the same way he did it in the video, because that requires less typing, so I prefer to do it that way. */
      colors.red(`SORRY, COULDN'T FIND A LANGUAGE FOR CODE: ${langCode}`)
    )
  }
}
