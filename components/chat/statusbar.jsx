import React from 'react';
import {LoadingAnimation, NotOkAnimation, OkAnimation} from "../assets/animations";

const Statusbar = ({userId, type, status, selectedType , userData}) => {
    return (
        <div className={`grid place-items-center grid place-items-center mt-20 `}>
            <div className="space-y-4 grid place-items-center">
                <img className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
                     src={userData.image.url}
                     alt={userData.image.name}/>
                <div className="space-y-2">
                    <div className="text-xs font-medium lg:text-sm">
                        <h3>{userData.name}</h3>
                        <p className="text-indigo-600">{userData.role.split('_').join(' ')}</p>
                        {selectedType !== 'Student' && <div className={`flex justify-between px-5 pt-3`}>
                            {status === 'pending' && (
                                <>
                                    Pending Approval &nbsp;&nbsp;
                                    <LoadingAnimation/>
                                </>
                            )}
                            {status === 'approved' && (
                                <>
                                    Topic Approved &nbsp;&nbsp;
                                    <OkAnimation/>
                                </>
                            )}
                            {status === 'rejected' && (
                                <>
                                    Topic Rejected &nbsp;&nbsp;
                                    <NotOkAnimation/>
                                </>
                            )}
                        </div>}


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statusbar;
