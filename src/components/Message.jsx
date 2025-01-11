import { useState } from "react";

export default function Message({message})
{
    const { text, photoURL, username, uid } = message;
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleLoadSuccess = () => {
        setImageLoaded(true);
    }

    const handleLoadFail = () => {
        setImageLoaded(false);
    }

    return (
        <div className="message">
            <img className="profile-picture" src={imageLoaded ? photoURL : '/profile-picture-fallback.jpg'} 
                alt={username + " profile picture"} 
                onLoad={handleLoadSuccess} onError={handleLoadFail}
            />
            <div className="message-content">
                <p className="username">{username}</p>
                <p className="message-text">{text}</p>
            </div>
        </div>
    );
}