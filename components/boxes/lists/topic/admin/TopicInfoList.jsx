import React, {useState} from 'react'
import AdminModalButtonWrapper from '../../../../layouts/admin/AdminModalButtonWrapper'
import GroupListWrapper from '../../../../layouts/user/group/GroupListWrapper'
import SearchBar from '../../../../searchbar/SearchBar'
import SingleTopicBox from './SingleTopicBox'

const tagsStaticData = [
    {id: 1, tagsArray: ['Julia', 'Matlab', 'Python', 'R']},
    {
        id: 2,
        tagsArray: ['Java', 'Perl', 'Python', 'SQL', 'C'],
    },
    {id: 3, tagsArray: ['C++', 'PHP', 'Python', 'R']},
    {
        id: 4,
        tagsArray: ['Javascript', 'C#', 'Python', 'SQL', 'nextJS'],
    },
    {id: 5, tagsArray: ['Maple', 'Visual Basic', 'Fortran']},
]

const placeholder = 'Tags Search'

const TopicInfoList = ({navigateFunc ,topicTagsList}) => {
    const [tagsSet, setTagsSet] = useState(tagsStaticData)

    return (
        <AdminModalButtonWrapper
            btnName={'Check Group List'}
            btnFunction={navigateFunc}
        >
            <GroupListWrapper>
                <SearchBar placeholder={placeholder} />
                <div>
                    {topicTagsList.map((tag) => (
                        <SingleTopicBox
                            key={tag._id}
                            tagsArray={tag.tags}
                            pageId={tag._id}
                        />
                    ))}
                </div>
            </GroupListWrapper>
        </AdminModalButtonWrapper>
    )
}

export default TopicInfoList
