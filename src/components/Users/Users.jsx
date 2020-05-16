import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({
                   totalUsersCount, pageSize,
                   onPageChanged, currentPage,
                   users, ...props
               }) => {

    return <div>
        <Paginator totalUsersCount={totalUsersCount}
                   pageSize={pageSize}
                   currentPage={currentPage}
                   onPageChanged={onPageChanged}/>

        {
            users.map(u => <User user={u} key={u.id}
                                 isFetching={props.isFetching}
                                 followingInProgress={props.followingInProgress}
                                 follow={props.follow}
                                 unfollow={props.unfollow}/>)

        }


    </div>
};

export default Users;