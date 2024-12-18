const h1 = document.querySelector('h1')
const usernameInput = document.querySelector('#username')

usernameInput.addEventListener('input', function (event) {
  const username = usernameInput.value
  if (username) {
    h1.innerText = `Welcome, ${username}`
  } else {
    h1.innerText = 'Enter Your Username'
  }
})
