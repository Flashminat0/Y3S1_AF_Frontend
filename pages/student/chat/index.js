import React from 'react'
import BaseChatWrapper from '../../../components/layouts/chat/BaseChatWrapper'
import {NavigationOnStudentChat} from '../../../components/common/navigation'

const Index = () => {
    return (
        <BaseChatWrapper navigation={NavigationOnStudentChat}>
            select a chat to type
        </BaseChatWrapper>
    )
}

export default Index
