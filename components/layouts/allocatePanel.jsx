import React, {useState} from 'react'
import CommonModal from '../modals/CommonModal'

const AllocatePanel = () => {
    const [view, setView] = useState(false)

    return (
        <div className="bg-gray-400 h-screen w-full p-8">
            <CommonModal view={view} />
            <button
                className="text-center h-10 w-full bg-indigo-500 rounded-lg "
                onClick={() => {
                    setView(!view)
                }}
            >
                Allocate Panel
            </button>
        </div>
    )
}

export default AllocatePanel
