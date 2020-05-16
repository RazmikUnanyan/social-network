import React from 'react';
import s from './Sidebar.module.css';
import MyFriends from "./Friends/MyFriends";
import ava from "../../assets/image/ava.png"


const Sidebar = React.memo(props => {

    let friendItem = props.friends.map(f => <MyFriends photos={f.photos}  name={f.name} img={ava} id={f.id} key={f.id}/>)
    return (
        <div className={s.sitebar}>
            <div className={s.friends}><h6>Friends</h6></div>
            {friendItem}
        </div>
    )
});

export default Sidebar;