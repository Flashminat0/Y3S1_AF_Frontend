import React, {useState} from 'react';
import GroupSearchWrapper from "../../../../layouts/user/group/student/GroupSearchWrapper";
import SingleGroupBox from "./SingleGroupBox";

const studentGroupsStaticData = [{
    id: 1,
    groupName: "Noobcooders",
    groupLeader: "John Smith",
    groupLeaderRegNo: "IT14256789",
    maxNo: 4,
    currentNo: 3
}, {
    id: 2,
    groupName: "thorn",
    groupLeader: "Mary Snatiya",
    groupLeaderRegNo: "IT20256749",
    maxNo: 8,
    currentNo: 1
}, {
    id: 3,
    groupName: "BugFixers",
    groupLeader: "Jonas Smith",
    groupLeaderRegNo: "IT24156785",
    maxNo: 5,
    currentNo: 3
}, {
    id: 4,
    groupName: "darkcodes",
    groupLeader: "Leo Max",
    groupLeaderRegNo: "IT10256350",
    maxNo: 4,
    currentNo: 3
}
];

const GroupsList = () => {
    const [studentGroups, setStudentGroups] = useState(studentGroupsStaticData);

    return (
        <div>
            <GroupSearchWrapper>
                {studentGroups.map((studentGroup, index) => (
                    <SingleGroupBox key={index} groupName={studentGroup.groupName}
                                    groupLeader={studentGroup.groupLeader}
                                    groupLeaderRegNo={studentGroup.groupLeaderRegNo} maxNo={studentGroup.maxNo}
                                    currentNo={studentGroup.currentNo}/>
                ))}
            </GroupSearchWrapper>
        </div>
    );
};

export default GroupsList;