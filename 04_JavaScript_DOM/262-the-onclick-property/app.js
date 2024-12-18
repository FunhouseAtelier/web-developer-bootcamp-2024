const btn = document.querySelector('#v2')

btn.onlick = function () {
  console.log('YOU CLICKED ME!')
  console.log('I HOPE IT WORKED!!')
}

function scream() {
  console.log('AAAAAHHHHH')
  console.log('STOP TOUCHING ME')
}

btn.onmouseenter = scream

document.querySelector('hi').onclick = () => {
  alert('you clicked the h1!')
}
