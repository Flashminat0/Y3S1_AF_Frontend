import React from 'react'

const SenderFileBubble = ({content, isForApproval}) => {
    return (
        <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                <div>
                    <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-indigo-600 text-white text-base">
                        File here
                    </span>
                </div>
            </div>
            <img
                src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                className="w-8 h-8 rounded-full order-2"
            />
        </div>
    )
}

export default SenderFileBubble
