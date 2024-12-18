let input = prompt('what would you like to do?')
const todos = ['Collect Chicken Eggs', 'Clean Litter Box']
while (input !== 'quit' && input !== 'q') {
  if (input === 'list') {
    console.log('**********')
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`)
    }
    console.log('**********')
  } else if (input === 'new') {
    const newTodo = prompt('Ok, what is the new todo?')
    todos.push(newTodo)
    console.log(`${newTodo} added to the list!`)
  } else if (input === 'delete') {
    const index = paresInt(prompt('Ok, enter an index to delete.'))
    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1)
      console.log(`Ok, deleted ${deleted[0]}`)
    }
  }
  input = prompt('what would you like to do?')
}
console.log('OK QUIT THE APP')

/* Jason's NOTE: This was the solution I made before seeing how Colt did it. It is very similar, including the variable names, even though I had no idea what he would use for variable names. The significant differences in my code are:

1. I skip the initial prompt, outside of the `while` loop, and instead just set `input` to start as an empty string, which won't do anything. Technically that means the first time the loop runs it checks to see if `input` is equal to things we know it cannot be equal to before the user is first prompted, but it happens very fast, so it's not really a problem. This is just a matter of personal preference.

2. I check to see if `newTodo` is not an empty string (falsy value) before adding it to the list. I figured a blank Todo is meaningless, so a person would never want to add that.

3. I don't use `!Number.isNaN(index)` to make sure `index` is a valid value, although that strategy is useful in some cases. Instead I used the condition `index >= 0`, because if `index` is not a number (`NaN`) any attempt to compare it to a number will result in `false`. `NaN` cannot be equal to, greater than, or less than any number; in JavaScript it is not even equal to itself! Additionally, we don't want to try removing something in an array with a negative index, so my validation check is better than what Colt demonstrated in this case. */
// const todos = ['Sample Todo']
// let input = ''

// while (input !== 'quit') {
//   if (input === 'new') {
//     const newTodo = prompt('Describe the new Todo.')
//     if (newTodo) {
//       todos.push(newTodo)
//       console.log('Todo added.')
//     }
//   } else if (input === 'list') {
//     console.log('**********')
//     for (let i = 0; i < todos.length; i++) {
//       console.log(`${i}: ${todos[i]}`)
//     }
//     console.log('**********')
//   } else if (input === 'delete') {
//     const index = parseInt(
//       prompt('What is the index of the Todo you want to delete?')
//     )
//     if (index >= 0) {
//       todos.splice(index, 1)
//       console.log('Todo deleted.')
//     }
//   }
//   input = prompt('What would you like to do?')
// }

// console.log('Quitter!')
