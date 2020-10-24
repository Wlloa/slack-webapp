import React from 'react';
import db from '../../firebase';
import './SidebarItem.css';
import {useHistory} from 'react-router-dom';

function SidebarItem({Icon, title, id, allowAddition=false}) {

    const history = useHistory();

    const addChannel = ()=>{
        const channelName = prompt("Enter channel's name");
        if(channelName?.length > 0){
            console.log(channelName);
            db.collection('rooms').add({
                name:channelName,
            }).then((docRef)=>{
                console.log('Document created with ID: ', docRef.id)
            }).catch((error)=>{
                console.log("Error adding document: ", error)
            })
        }
        
    }

    const changeChannel = ()=>{
        if(id){
            history.push(`/room/${id}`);
        }
        
    }

    return (
        <div onClick={allowAddition?addChannel:changeChannel} className="sidebarItem">
            {Icon && <Icon className="sidebarItem__icon"/>}
            {Icon ? (
                <h3>{title}</h3>
            ):(
                <h3 className="sidebarItem__channel">
                    <span className="sidebarItem__hash">#</span> {title}
                </h3>
            )}
        </div>
    )
}

export default SidebarItem;
