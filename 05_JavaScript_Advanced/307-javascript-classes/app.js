// function hex(r, g, b) {
//   return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
// }
// function rgb(r, g, b) {
//   return `rgb(${r}, ${g}, ${b})`
// }

// hex(255, 100, 25) // => "#ff6419"
// rgb(255, 100, 25) // => "rgb(255, 100, 25)"

// function makeColor(r, g, b) {
//   const color = {}
//   color.r = r
//   color.g = g
//   color.b = b
//   color.rgb = function () {
//     const { r, g, b } = this
//     return `rgb(${r}, ${g}, ${b})`
//   }
//   color.hex = function () {
//     const { r, g, b } = this
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//   }
//   return color
// }

// const firstColor = makeColor(35, 255, 150)
// firstColor.hex()
// firstColor.rgb()

// const black = makeColor(0, 0, 0)
// black.rgb()
// black.hex()

// *****************
// THE NEW OPERATOR!
// *****************

// 1. Creates a blank, plain JavaScript object;
// 2. Links (sets the constructor of) this object to another object;
// 3. Passes the newly created object from Step 1 as the this context;
// 4. Returns this if the function doesn't return its own object.

// function Color(r, g, b) {
//   this.r = r
//   this.g = g
//   this.b = b
// }

// Color.prototype.rgb = function () {
//   const { r, g, b } = this
//   return `rgb(${r}, ${g}, ${b})`
// }

// Color.prototype.hex = function () {
//   const { r, g, b } = this
//   return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
// }

// Color.prototype.rgba = function (a = 1.0) {
//   const { r, g, b } = this
//   return `rgba(${r}, ${g}, ${b}, ${a})`
// }

// const color1 = new Color(40, 255, 60)
// color1.hex()
// const color2 = new Color(0, 0, 0)
// color2.hex()

class Color {
  constructor(r, g, b, name) {
    this.r = r
    this.g = g
    this.b = b
    this.name = name
  }
  innerRGB() {
    const { r, g, b } = this
    return `${r}, ${g}, ${b}`
  }
  rbg() {
    return `rgb(${this.innerRGB()})`
  }
  hex() {
    const { r, g, b } = this
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
  }
  rbga(a = 1.0) {
    return `rgba(${this.innerRGB()}, ${a})`
  }
}

const c1 = new Color(255, 67, 89, 'tomato')
