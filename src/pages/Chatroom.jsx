import { useParams } from "react-router-dom";

export default function Chatroom()
{
    const { name } = useParams();

    return (
        <div className="chatroom-page">
            <button className="home-button"><i className="fa-solid fa-home"></i></button>
            <h1>{name}</h1>
            <div className="chatroom">

            </div>
            <form className="message-form" action="">
                <input type="text" />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}