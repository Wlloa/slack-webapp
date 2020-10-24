import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import db from '../../firebase';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import './Chat.css';
import Message from '../message/Message';


function Chat() {

    const [room, setRoom]  = useState({});
    const [messages, setMessages] = useState([]);
    const {roomId}= useParams();

    useEffect(()=>{
        if(roomId){
            db.collection('rooms')
              .doc(roomId).onSnapshot(snapchot=>{
                setRoom(snapchot.data())
            });

            db.collection('rooms')
                .doc(roomId)
                .collection('messages')
                .orderBy('timestamp', 'asc')
                .onSnapshot(snapchot=>{
                    setMessages(
                        snapchot.docs.map(doc=>doc.data()))
                })

        }
        
    },[roomId]) 
    console.log(room);
    console.log(messages);
    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong>#{room?.name}</strong>
                        <StarBorderIcon/>
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon/>
                    </p>
                </div>
            </div>
            <div className="chat__messages">
                {messages?.map(({message, timestamp, user, userImage})=>(
                    <Message
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImage={userImage}
                    />
                ))}
            </div>
        </div>
    )
}

export default Chat;
