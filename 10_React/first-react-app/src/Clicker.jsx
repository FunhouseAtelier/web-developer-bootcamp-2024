const handleClick = () => {
  alert(message)
}

export default function Clicker({ message, buttonText }) {
  // const handleClick = () => {
  //   alert(message)
  // }

  return <button onClick={handleClick}>{buttonText}</button>
}

// function handleClick() {
//   console.log('CLICKED THE BUTTON!!!')
// }
// function handleHover() {
//   console.log('HOVERED!!')
// }

// export default function Clicker() {
//   return (
//     <div>
//       <p onMouseOver={handleHover}>Hover Over Me</p>
//       <button onClick={handleClick}>Click</button>
//     </div>
//   )
// }
