import { useEffect, useState } from "react"
import AddUser from "../addUser"
import { useUserStore } from '../../../lib/userStore'
import "./chatList.css"
import { doc, getDoc, onSnapshot } from "firebase/firestore"
import { db } from "../../../lib/firebase"

function index() {
  const [chats, setChats] = useState([])
  const [addMode, setAddmode] = useState(false)

  const { currentUser } = useUserStore()

  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "userchats", currentUser.id),
      async (res) => {
        const items = res.data().chats

        const promises = items.map(async (item) => {
          const userDocRef = doc(db, "users", item.receiverId)
          const userDocSnap = await getDoc(userDocRef)

          const user = userDocSnap.data()

          return { ...item, user }
        })

        const chatData = await Promise.all(promises)

        setChats(chatData.sort((a, b) => b.updateAt - a.updateAt))

      })

    return () => {
      unSub()
    }

  }, [currentUser.id])

  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <img
          className="add"
          src={addMode ? "./minus.png" : "./plus.png"}
          onClick={() => setAddmode((prev) => !prev)}
          alt="" />
      </div>
      {
        chats.map((chat) => (
          <div className="item" key={chat.chatId}>
            <img src={chat.user.avatar || "./avatar.png"} alt="" />
            <div className="texts">
              <span>{chat.user.username}</span>
              <p>{chat.lastMessage}</p>
            </div>
          </div>
        ))
      }
      {addMode && <AddUser />}
    </div>
  )
}

export default index