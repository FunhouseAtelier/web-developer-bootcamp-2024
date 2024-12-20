const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456]

Math.max(nums) // => NaN
Math.max(...nums) // => 53456

const cats = ['Blue', 'Scout', 'Rocket']
const dogs = ['Rusty', 'Wyatt']

const allPets = [...cats, ...dogs]

const feline = { legs: 4, family: 'Felidae' }
const canine = { legs: 4, family: 'Caninae' }

const dataFromForm = {
  email: 'blueman@gmail.com',
  password: 'tobias123!',
  username: 'tfunke',
}

const newUser = { ...dataFromForm, id: 2345, isAdmin: false }
