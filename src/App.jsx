import './App.css'
import ChatroomDisplay from './components/ChatroomDisplay'

function App() {
  return (
    <>
      <h1>Online Chatroom</h1>
      <div>
        <div className='chatrooms'>
          <ChatroomDisplay name="General" icon="fa-globe"/>
          <ChatroomDisplay name="Books" icon="fa-book"/>
          <ChatroomDisplay name="Music" icon="fa-music"/>
          <ChatroomDisplay name="Movies" icon="fa-film"/>
          <ChatroomDisplay name="Games" icon="fa-gamepad"/>
        </div>
        <form action="">
          <input className='room-name-input' type="text" />
          <button type="submit">Join Room</button>
        </form>
      </div>
    </>
  )
}

export default App
