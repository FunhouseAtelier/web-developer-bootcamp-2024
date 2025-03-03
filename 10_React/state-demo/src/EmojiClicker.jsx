import { v4 as uuid } from 'uuid'
import { useState } from 'react'

export default function EmojiClicker() {
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: '😭' }])
  const addEmoji = () => {
    setEmojis((oldEmojis) => [...oldEmojis, { id: uuid(), emoji: '💋' }])
  }
  const deleteEmoji = (id) => {
    setEmojis((prevEmojis) => {
      return prevEmojis.filter((e) => e.id !== id)
    })
  }
  const makeEverythingAHeart = () => {
    setEmojis((prevEmojis) => {
      return prevEmojis.map((e) => {
        return { ...e, emoji: '🧡' }
      })
    })
  }
  return (
    <div>
      {emojis.map((e) => (
        <span
          key={e.id}
          style={{ fontSize: '4rem' }}
          onClick={() => deleteEmoji(e.id)}
        >
          {e.emoji}
        </span>
      ))}
      <button onClick={addEmoji}>Add Emoji</button>
      <button onClick={makeEverythingAHeart}>Make them all hearts</button>
    </div>
  )
}

const makeEverythingAHeart = () =>
  setEmojis((prev) => prev.map((e) => ({ ...e, emoji: '🧡' })))
