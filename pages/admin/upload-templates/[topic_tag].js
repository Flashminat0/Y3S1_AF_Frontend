import React from 'react'
import {useRouter} from 'next/router'

const TopicTag = () => {
    const router = useRouter()
    const {topic_tag} = router.query

    return <div>{topic_tag}</div>
}

export default TopicTag
