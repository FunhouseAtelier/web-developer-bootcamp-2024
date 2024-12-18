const person = {
  firstName: 'Viggo',
  lastName: 'Mortensen',
  fullName: function () {
    console.log(this)
    return `${this.firstName} ${this.lastName}`
  },
  shoutName: function () {
    setTimeout(() => {
      console.log(this)
      console.log(this.fullName())
    }, 3000)
  },
}
