import { useEffect, useRef, useState } from "react"
import EmojiPicker from "emoji-picker-react"
import "./chat.css"

function index() {
  const [open, setOpen] = useState(false)
  const [text, setText] = useState()

  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  const handleEmoji = e => {
    setText((prev) => prev + e.emoji)
    setOpen(false)
  }

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>username</span>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellendus odio voluptatibus odit praesentium ipsum quam ducimus voluptas animi aliquam itaque mollitia adipisci quidem perferendis, ipsam neque? Quos, nihil culpa.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellendus odio voluptatibus odit praesentium ipsum quam ducimus voluptas animi aliquam itaque mollitia adipisci quidem perferendis, ipsam neque? Quos, nihil culpa.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
          <img src="./avatar.png" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellendus odio voluptatibus odit praesentium ipsum quam ducimus voluptas animi aliquam itaque mollitia adipisci quidem perferendis, ipsam neque? Quos, nihil culpa.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellendus odio voluptatibus odit praesentium ipsum quam ducimus voluptas animi aliquam itaque mollitia adipisci quidem perferendis, ipsam neque? Quos, nihil culpa.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef} ></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          onChange={e => setText(e.target.value)}
          type="text"
          value={text}
          placeholder="Type a message..." />
        <div className="emoji">
          <img onClick={() => setOpen((prev) => !prev)} src="./emoji.png" alt="" />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  )
}

export default index