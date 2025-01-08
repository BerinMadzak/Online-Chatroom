export default function ChatroomDisplay({name, icon}) 
{
    return (
        <div className="chatroom-display">
            <i className={"fa-solid " + icon}></i>
            <p>{name}</p>
            <button>Join</button>
        </div>
    );
}