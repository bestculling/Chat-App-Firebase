import "./addUser.css"

function index() {
  return (
    <div className='addUser'>
        <form>
            <input type="text" placeholder='Username' name="username" />
            <button>Search</button>
        </form>
        <div className='user'>
            <div className='detail'>
                <img src="./avatar.png" alt="" />
                <span>username</span>
            </div>
            <button>Add User</button>
        </div>
    </div>
  )
}

export default index