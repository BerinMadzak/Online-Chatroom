export default function Message({name, image, message})
{
    return (
        <div>
            <img className="profile-picture" src={image} alt={name + " profile picture"} />
            <p className="username">{name}</p>
            <p className="message">{message}</p>
        </div>
    );
}