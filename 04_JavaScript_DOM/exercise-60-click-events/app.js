const helloButton = document.querySelector('#hello')
const goodbyeButton = document.querySelector('#goodbye')

const sayHello = () => console.log('hello')
const sayGoodbye = () => console.log('goodbye')

helloButton.addEventListener('click', sayHello)
goodbyeButton.addEventListener('click', sayGoodbye)
