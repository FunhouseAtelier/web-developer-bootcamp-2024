// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form')
const list = document.querySelector('#list')

form.addEventListener('submit', function (event) {
  event.preventDefault()
  const qtyInput = document.querySelector('#qty')
  const productInput = document.querySelector('#product')
  const newLi = document.createElement('li')
  newLi.innerText = `${qtyInput.value} ${productInput.value}`
  list.append(newLi)
  qtyInput.value = ''
  productInput.value = ''
})
