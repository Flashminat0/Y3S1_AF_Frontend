import React, { useEffect, useState } from 'react';
import SingleUserBox from './SingleUserBox';
import GroupListWrapper from '../../../../layouts/user/group/GroupListWrapper';
import SearchBar from '../../../../searchbar/SearchBar';
import AdminModalButtonWrapper from '../../../../layouts/admin/AdminModalButtonWrapper';
import axios from 'axios';

const UserInfoList = ({ navigateFunc }) => {
    const [userData, setUserData] = useState();
    const [trigger, setTrigger] = useState(1);
    useEffect(() => {
        axios.get('/api/users/userlist').then((result) => {
            setUserData(result.data.result);
        });
    }, [trigger]);

    const deleteUser = (userid) => {
        axios.delete('/api/users/removeuser', {
            data: { id: userid },
        });
    };

    const regnumber = (name) => {
        const arr = name.split('');
        const revarr = arr.reverse();
        const it = revarr.splice(0, 10);
        const reg = it.reverse();
        const RegNum = reg.join('');
        return RegNum;
    };
    const name = (name) => {
        const arr = name.split('');
        const revarr = arr.reverse();
        const fname = revarr.splice(11);
        const getname = fname.reverse();
        const stringName = getname.join('');
        return stringName;
    };

    return (
        <AdminModalButtonWrapper
            btnName={'Check Group List'}
            btnFunction={navigateFunc}
        >
            <GroupListWrapper>
                <SearchBar placeholder={'User Search'} />
                <div>
                    {userData &&
                        userData.map((user) => (
                            <SingleUserBox
                                key={user.name}
                                userName={name(user.name)}
                                userRegNo={regnumber(user.name)}
                                userRole={user.role}
                                deleteUser={deleteUser}
                                mongoID={user._id}
                                setTrigger={setTrigger}
                                trigger={trigger}
                            />
                        ))}
                </div>
            </GroupListWrapper>
        </AdminModalButtonWrapper>
    );
};

export default UserInfoList;
