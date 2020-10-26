import React, {useState, useEffect} from 'react';
import './Sidebar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarItem from '../sidebar_item/SidebarItem';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import db from '../../firebase';
import { useStateValue } from '../context/StateProvider';

function Sidebar() {

    const [channels, setChannels] = useState([]);
    const [{user}] = useStateValue();

    useEffect(()=>{
        db.collection('rooms').onSnapshot(snapshot=>
            setChannels(snapshot.docs.map(doc=>({
                id: doc.id,
                name: doc.data().name
            })))
        );
    },[]);

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Clever Programmer</h2>
                    <h3>                    
                        <FiberManualRecordIcon/>
                        {user?.displayName}
                    </h3>
                </div>
                <CreateIcon/>
            </div>
            <SidebarItem title="Add Channel" Icon={AddOutlinedIcon} allowAddition={true}/>
            {channels?.map(channel=>(
                <SidebarItem id={channel.id} title={channel.name}/>
            ))}
        
        </div>
    )
}

export default Sidebar;
