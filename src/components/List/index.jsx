import UserInfo from "./userinfo"
import ChatList from "./chatList"
import "./list.css"

function index() {
  return (
    <div className="list">
      <UserInfo />
      <ChatList />
    </div>
  )
}

export default index