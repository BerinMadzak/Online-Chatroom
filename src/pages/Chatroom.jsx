import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { auth, db } from "../config/firebase"
import {useCollection, useCollectionData} from "react-firebase-hooks/firestore"
import Message from "../components/Message";
import { collection, serverTimestamp, query, orderBy, limit, addDoc, doc, deleteDoc } from 'firebase/firestore';

export default function Chatroom()
{
    const { name } = useParams();
    const [input, setInput] = useState('');
    const endPoint = useRef();
    const navigate = useNavigate();

    const messageLimit = 30;
    const messages = collection(db, name);
    const result = query(messages, orderBy('time', 'desc'), limit(messageLimit));

    const [messageList] = useCollection(result);

    useEffect(()=> {
        if(endPoint) endPoint.current.scrollIntoView();
    }, [messageList]);

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

    const deleteMessage = async (id) => {
        try {
            const docRef = doc(db, name, id);
            await deleteDoc(docRef); 
        } catch(error) {
            console.error("Error deleting message: ", error);
        }
    }

    return (
        <div className="chatroom-page">
            <button className="home-button" onClick={() => navigate('/')}><i className="fa-solid fa-home"></i></button>
            <h1>{name}</h1>
            <div className="chatroom">
                {messageList?.docs && messageList.docs.reverse().map(
                    (message, index) => <Message message={message} deleteMessage={deleteMessage} key={message.id}/>)
                }
                <div ref={endPoint}></div>
            </div>
            <form className="message-form" onSubmit={sendMessage}>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}