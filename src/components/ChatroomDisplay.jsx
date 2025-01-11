import { Link, useNavigate } from "react-router-dom";

export default function ChatroomDisplay({name, icon}) 
{
    const navigate = useNavigate();

    return (
        <div className="chatroom-display">
            <i className={"fa-solid " + icon}></i>
            <p>{name}</p>
            <button onClick={() => navigate(`/${name.toLowerCase()}`)}>Join</button>
        </div>
    );
}