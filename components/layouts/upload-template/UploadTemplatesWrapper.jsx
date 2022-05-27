import React from 'react';
import GreenFullButton from "../../buttons/full-button/GreenFullButton";
import YellowFullButton from "../../buttons/full-button/YellowFullButton";
import {BsFillTagsFill} from 'react-icons/bs';

const UploadTemplatesWrapper = ({children, btnFunction}) => {
    return (
        <div className={'px-6 py-6 grid grid-cols-1 gap-3'}>
            <div className="flex text-sm text-gray-600">
                <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                    <span>Upload Templates</span>
                    <input id="file-upload"
                           name="file-upload"
                           type="file"
                           accept="image/*"
                           className="sr-only"/>
                </label>
                <p className="pl-1">that clearly represents the content</p>
            </div>
            <div className={'px-3 py-3 my-5 bg-gray-100 shadow rounded-lg'}>
                <div className={'flex flex-row justify-between items-center'}>
                    <div className={'flex flex-col gap-4'}>
                        <div className={"uppercase text-2xl font-semibold text-blue-900"}>Tag Set</div>
                        <div className={"flex flex-row gap-2"}>
                            <span className={"px-2 py-1 text-sm bg-blue-400 rounded-xl"}>Python</span>
                            <span className={"px-2 py-1 text-sm bg-blue-400 rounded-xl"}>Julia</span>
                            <span className={"px-2 py-1 text-sm bg-blue-400 rounded-xl"}>C++</span>
                            <span className={"px-2 py-1 text-sm bg-blue-400 rounded-xl"}>R</span>
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
            <YellowFullButton btnName={'Download Templates'}/>
        </div>
    );
};

export default UploadTemplatesWrapper;