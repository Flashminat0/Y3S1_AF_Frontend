import React from 'react'
import GreenFullButton from '../../buttons/full-button/GreenFullButton'
import YellowFullButton from '../../buttons/full-button/YellowFullButton'
import {BsFillTagsFill} from 'react-icons/bs'

const UploadTemplatesWrapper = ({children, topicTags, uploadHandler}) => {
    return (
        <div className={'px-6 py-6 grid grid-cols-1 gap-3'}>
            <div className="text-sm max-w-full">
                <label
                    htmlFor="file-upload"
                    className="cursor-pointer px-[4.5rem] sm:px-[10rem] md:px-[21.25rem] lg:px-[23.25rem] py-1.5 text-xl max-w-fit bg-white hover:bg-green-50 uppercase rounded-sm font-medium text-green-700 outline outline-1 outline-green-500 focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-green-500"
                >
                    <span>Upload Templates</span>
                    <input
                        onChange={uploadHandler}
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                    />
                </label>
            </div>
            <div className={'px-3 py-3 my-5 bg-gray-100 shadow rounded-lg'}>
                <div className={'flex flex-row justify-between items-center'}>
                    <div className={'flex flex-col gap-4'}>
                        <div
                            className={
                                'uppercase text-2xl font-semibold text-blue-900'
                            }
                        >
                            Tag Set
                        </div>
                        <div className={'flex flex-row gap-2'}>
                            {topicTags.map((tag, index) => {
                                return (
                                    <span
                                        className={
                                            'px-2 py-1 text-sm bg-blue-400 rounded-xl'
                                        }
                                    >
                                        {tag}
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                    <div className={'pr-2 sm:pr-8'}>
                        <BsFillTagsFill
                            className={
                                'w-16 h-16 sm:w-18 sm:h-18 text-gray-600'
                            }
                        />
                    </div>
                </div>
            </div>
            {children}
            <YellowFullButton btnName={'Download Templates'} />
        </div>
    )
}

export default UploadTemplatesWrapper
