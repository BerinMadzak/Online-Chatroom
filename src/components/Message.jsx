import { useState } from "react";

export default function Message({message})
{
    const { text, photoURL, username, time } = message;
    const [imageLoaded, setImageLoaded] = useState(false);

    const messageTime = time ? time.toDate().toLocaleString('en-US', {
        day: 'numeric', 
        month: 'short',
        year: 'numeric'
    }) : null;

    const handleLoadSuccess = () => {
        setImageLoaded(true);
    }

    const handleLoadFail = () => {
        setImageLoaded(false);
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
        </div>
    );
}