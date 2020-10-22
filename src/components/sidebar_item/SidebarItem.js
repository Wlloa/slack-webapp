import React from 'react';
import db from '../../firebase';
import './SidebarItem.css';

function SidebarItem({Icon, title, allowAddition=false}) {

    const addChannel = ()=>{
        const channelName = prompt("Enter channel's name");
        console.log(channelName);
        db.collection('rooms').add({
            name:channelName,
        }).then((docRef)=>{
            console.log('Document created with ID: ', docRef.id)
        }).catch((error)=>{
            console.log("Error adding document: ", error)
        })
    }

    return (
        <div onClick={allowAddition?addChannel:null} className="sidebarItem">
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
