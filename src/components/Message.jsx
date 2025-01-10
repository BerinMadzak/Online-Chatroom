export default function Message({message})
{
    const { text, photoURL, username, uid } = message;
    return (
        <div className="message">
            <img className="profile-picture" src={photoURL} alt={username + " profile picture"} />
            <div className="message-content">
                <p className="username">{username}</p>
                <p className="message-text">{text}</p>
            </div>
        </div>
    );
}