export default function Message({message})
{
    const { text, photoURL, username, uid } = message;
    return (
        <div>
            <img className="profile-picture" src={photoURL} alt={username + " profile picture"} />
            <p className="username">{username}</p>
            <p className="message">{text}</p>
        </div>
    );
}