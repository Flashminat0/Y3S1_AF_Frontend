import React, {useState} from 'react'
import SingleGroupBox from './SingleGroupBox'
import GroupListWrapper from '../../../../layouts/user/group/GroupListWrapper'
import SearchBar from '../../../../searchbar/SearchBar'
import AdminModalButtonWrapper from '../../../../layouts/admin/AdminModalButtonWrapper'

const studentGroupsStaticData = [
    {
        id: 1,
        groupName: 'Noobcooders',
        groupLeader: 'John Smith',
        groupLeaderRegNo: 'IT14256789',
        currentNo: 3,
    },
    {
        id: 2,
        groupName: 'thorn',
        groupLeader: 'Mary Snatiya',
        groupLeaderRegNo: 'IT20256749',
        currentNo: 1,
    },
    {
        id: 3,
        groupName: 'BugFixers',
        groupLeader: 'Jonas Smith',
        groupLeaderRegNo: 'IT24156785',
        currentNo: 3,
    },
    {
        id: 4,
        groupName: 'darkcodes',
        groupLeader: 'Leo Max',
        groupLeaderRegNo: 'IT10256350',
        currentNo: 3,
    },
]

const placeholder = 'Group Search'

const GroupsList = ({navigateFunc}) => {
    const [studentGroups, setStudentGroups] = useState(studentGroupsStaticData)

    return (
        <AdminModalButtonWrapper
            btnName={'Check User List'}
            btnFunction={navigateFunc}
        >
            <GroupListWrapper>
                <SearchBar placeholder={placeholder} />
                <div>
                    {studentGroups.map((studentGroup, index) => (
                        <SingleGroupBox
                            key={index}
                            groupName={studentGroup.groupName}
                            groupLeader={studentGroup.groupLeader}
                            groupLeaderRegNo={studentGroup.groupLeaderRegNo}
                            currentNo={studentGroup.currentNo}
                        />
                    ))}
                </div>
            </GroupListWrapper>
        </AdminModalButtonWrapper>
    )
}

export default GroupsList
