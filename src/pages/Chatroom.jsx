import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom"
import { auth, db } from "../config/firebase"
import {useCollectionData} from "react-firebase-hooks/firestore"
import Message from "../components/Message";
import { collection, serverTimestamp, query, orderBy, limit, addDoc } from 'firebase/firestore';

export default function Chatroom()
{
    const { name } = useParams();
    const [input, setInput] = useState('');
    const endPoint = useRef();

    const messageLimit = 30;
    const messages = collection(db, name);
    const result = query(messages, orderBy('time', 'desc'), limit(messageLimit));

    const [messageList] = useCollectionData(result, {idField: 'id'});

    useEffect(()=>{
        if(endPoint) endPoint.current.scrollIntoView({behavior: 'smooth'});
    });

    const sendMessage = async(e) => {
        e.preventDefault();

        const {displayName, photoURL, uid} = auth.currentUser;

        await addDoc(messages, {
            text: input,
            time: serverTimestamp(),
            username: displayName,
            photoURL: photoURL,
            uid: uid
        });

        setInput('');
    }

    return (
        <div className="chatroom-page">
            <button className="home-button"><i className="fa-solid fa-home"></i></button>
            <h1>{name}</h1>
            <div className="chatroom">
                {messageList && messageList.reverse().map((message, index) => <Message message={message} key={index}/>)}
                <div ref={endPoint}></div>
            </div>
            <form className="message-form" onSubmit={sendMessage}>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}