import { useState } from "react";
import { auth } from "../config/firebase";
import { deleteDoc } from "firebase/firestore";

export default function Message({message, deleteMessage})
{
    const { text, photoURL, username, time, uid } = message.data();
    const [imageLoaded, setImageLoaded] = useState(null);

    const messageTime = time ? time.toDate().toLocaleString('en-US', {
        day: 'numeric', 
        month: 'short',
        year: 'numeric'
    }) : null;

    const handleLoadSuccess = () => {
        if(imageLoaded === null) setImageLoaded(true);
    }

    const handleLoadFail = () => {
        setImageLoaded(false);
    }

    const handleDelete = async () => {
        deleteMessage(message.id);
    }

    return (
        <div className="flex flex-top">
            <img className="profile-picture" src={imageLoaded ? photoURL : '/profile-picture-fallback.jpg'} 
                alt={username + " profile picture"} 
                onLoad={handleLoadSuccess} onError={handleLoadFail}
            />
            <div className="message-content">
                <div className="flex">
                    <p className="username">{username}</p>
                    <p className="date">{messageTime}</p>
                </div>
                <p className="message-text">{text}</p>
            </div>
            {uid === auth.currentUser.uid && <i className="fa-solid fa-trash trash" onClick={handleDelete}></i>}
        </div>
    );
}