// WRITE YOUR CODE IN HERE:

const container = document.querySelector('#container')

for (let i = 0; i < 100; i++) {
  const newButton = document.createElement('button')
  newButton.innerText = `Button # ${i + 1}`
  container.appendChild(newButton)
}
