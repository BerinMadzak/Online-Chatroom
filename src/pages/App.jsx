import '../App.css'
import ChatroomDisplay from '../components/ChatroomDisplay'
import { auth } from '../config/firebase';
import SignIn from './SignIn'
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from 'firebase/auth';

function App() {
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  }

  if(!user) return <SignIn />

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
        <button onClick={signUserOut}>Sign Out</button>
      </div>
    </>
  )
}

export default App
