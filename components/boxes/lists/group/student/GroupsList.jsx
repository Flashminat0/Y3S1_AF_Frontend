import React, {useState} from 'react'
import SingleGroupBox from './SingleGroupBox'
import GroupListWrapper from '../../../../layouts/user/group/GroupListWrapper'
import SearchBar from '../../../../searchbar/SearchBar'
import StudentModalButtonWrapper from '../../../../layouts/student/StudentModalButtonWrapper'
import CreateGroupModal from '../../../../modals/student/CreateGroupModal'

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

const GroupsList = () => {
    const [studentGroups, setStudentGroups] = useState(studentGroupsStaticData)
    const [openModal, setOpenModal] = useState(false)

    const openCreateGroupModal = () => {
        setOpenModal(true)
    }

    return (
        <StudentModalButtonWrapper
            btnName={'Create Group'}
            btnFunction={openCreateGroupModal}
        >
            <CreateGroupModal
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
            <GroupListWrapper>
                <SearchBar placeholder={placeholder} />
                <div>
                    {studentGroups.map((studentGroup) => (
                        <SingleGroupBox
                            key={studentGroup.id}
                            groupName={studentGroup.groupName}
                            groupLeader={studentGroup.groupLeader}
                            groupLeaderRegNo={studentGroup.groupLeaderRegNo}
                            currentNo={studentGroup.currentNo}
                        />
                    ))}
                </div>
            </GroupListWrapper>
        </StudentModalButtonWrapper>
    )
}

export default GroupsList
