import {Button} from '@mui/material'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Success from './Success'
import DeleteModal from './DeleteModal'

const AddedTopicBox = ({topicData}) => {
    const [view, setView] = useState(false)
    const [deleteView, setDeleteView] = useState(false)
    const [deleteId, setDeleteId] = useState()

    const openDelete = (id) => {
        setDeleteView(true)
        setDeleteId(id)
    }

    const deleteTopic = (id) => {
        axios
            .delete('http://localhost:8000/api/removetopic', {data: {id: id}})
            .then(setView(true))
    }
    return (
        <div>
            <DeleteModal
                view={deleteView}
                tid={deleteId}
                deleteTopic={deleteTopic}
                setDeleteView={setDeleteView}
            />
            <Success view={view} setView={setView} />
            {topicData &&
                topicData.reverse().map((topics, index) => (
                    <div key={index}>
                        {' '}
                        <div
                            className={
                                'mx-10 my-10 rounded-lg bg-gray-50 py-10 shadow-md'
                            }
                        >
                            <div className="grid grid-cols-2">
                                <div
                                    className={
                                        'ml-5 flex flex-col bg-green-100 rounded-lg p-1'
                                    }
                                >
                                    <div className=" px-3 text-lg font-bold">
                                        Topic : {topics.name}
                                    </div>
                                    <div className=" rounded-lg px-3 text-lg font-bold">
                                        Group ID: {topics.grpID}
                                    </div>
                                </div>

                                <div className="ml-auto mr-4">
                                    <button
                                        type="button"
                                        className="h-10 rounded-lg bg-red-500 text-center text-xl  font-semibold text-black"
                                        onClick={() => {
                                            openDelete(topics._id)
                                        }}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default AddedTopicBox
