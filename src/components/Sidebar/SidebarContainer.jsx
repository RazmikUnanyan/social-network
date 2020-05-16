import React from 'react';
import {connect} from "react-redux";
import Sidebar from "./Sidebar";
import {compose} from "redux";
import {getUser} from "../../Redux/users-selector";



class SidebarContainer extends React.Component {


    render() {
        const friends = this.props.users.filter(u => u.followed === true)

        return (

                <div>
                    <Sidebar friends={friends}/>
                </div>

        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUser(state),


    }

};

export default compose(
    connect(mapStateToProps,)
)(SidebarContainer)
