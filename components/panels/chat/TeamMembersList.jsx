import React from 'react'

const TeamMembersList = ({ memberList }) => {
    return (
        <div className={`bg-red-100`}>
            {memberList.map((singleMember) => {
                return <div className={`grid`}>{singleMember.name}</div>
            })}
        </div>
    )
}

export default TeamMembersList
