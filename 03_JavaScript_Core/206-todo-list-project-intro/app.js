const todos = ['Sample Todo']
let input = ''

while (input !== 'quit') {
  if (input === 'new') {
    const newTodo = prompt('Describe the new Todo.')
    if (newTodo) {
      todos.push(newTodo)
      console.log('Todo added.')
    }
  } else if (input === 'list') {
    console.log('**********')
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`)
    }
    console.log('**********')
  } else if (input === 'delete') {
    const index = parseInt(
      prompt('What is the index of the Todo you want to delete?')
    )
    if (index >= 0) {
      todos.splice(index, 1)
      console.log('Todo deleted.')
    }
  }
  input = prompt('What would you like to do?')
}

console.log('Quitter!')
