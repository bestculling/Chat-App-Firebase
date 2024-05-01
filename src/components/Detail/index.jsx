import "./detail.css"

function index() {
  const imageLink = "https://images.unsplash.com/photo-1483104879057-379b6c2fe5a2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>username</h2>
        <p>Lorem, ipsum.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Setting</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoitem">
              <div className="photoDetail">
                <img src={imageLink} alt="" />
                <span>test.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
            <div className="photoitem">
              <div className="photoDetail">
                <img src={imageLink} alt="" />
                <span>test.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
            <div className="photoitem">
              <div className="photoDetail">
                <img src={imageLink} alt="" />
                <span>test.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className="logout">Logout</button>
      </div>
    </div>
  )
}

export default index