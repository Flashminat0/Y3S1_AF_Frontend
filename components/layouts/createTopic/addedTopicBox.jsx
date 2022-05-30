import {Button} from '@mui/material'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Success from './Success'
import DeleteModal from './DeleteModal'
import Chips from './Chips'

const AddedTopicBox = ({topicData, setTrigger, trigger}) => {
    const [view, setView] = useState(false)
    const [deleteView, setDeleteView] = useState(false)
    const [deleteId, setDeleteId] = useState()

    const openDelete = (id) => {
        setDeleteView(true)
        setDeleteId(id)
    }

    const deleteTopic = (id) => {
        axios
<<<<<<< HEAD
            .delete('/api/removetopic', {data: {id: id}})
            .then(()=>{
=======
            .delete('http://localhost:8000/api/removetopic', {data: {id: id}})
            .then(() => {
>>>>>>> 5ddb0e5bc2b110993cb891f025bdcba138b3ca2e
                setView(true)
                setTrigger(trigger + 1)
            })
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
                topicData.map((topics, index) => (
                    <div key={index} className="py-3 px-3">
                        {' '}
                        <div
                            className={
                                'mx-1 my-1 rounded-lg bg-gray-50 py-1 shadow-md'
                            }
                        >
                            <div className="grid grid-cols-2">
                                <div
                                    className={
                                        'ml-5 flex flex-col rounded-lg p-1'
                                    }
                                >
                                    <div className=" px-3 text-lg flex space-x-2">
                                        <div>Topic : </div>{' '}
                                        {topics.tags.map((tags, index) => (
                                            <div key={index}>
                                                <Chips tags={tags} />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="rounded-lg px-3 text-lg flex">
                                        <div className="pr-1">Steps : </div>
                                        {topics.steps}
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
