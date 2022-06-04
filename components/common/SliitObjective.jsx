import React from 'react';
import {ImQuotesLeft,ImQuotesRight} from 'react-icons/im';

const SliitObjective = () => {
    return (
        <div className="bg-white pt-16 lg:py-24">
            <div className="pb-16 bg-zinc-600 lg:pb-0 lg:z-10 lg:relative">
                <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
                    <div className="relative lg:-my-8">
                        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
                        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                            <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                                <img
                                    className="object-cover lg:h-full lg:w-full"
                                    src="https://firebasestorage.googleapis.com/v0/b/y3s1-sliit-af.appspot.com/o/Sliit.png?alt=media&token=7f4ede81-41b1-4968-87a0-2d97df98e68f"
                                    alt="Sliit Image"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
                        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                            <blockquote>
                                <div>
                                    <ImQuotesLeft className="relative h-8 w-8 text-white opacity-25"/>
                                    <p className="mt-4 text-2xl font-medium text-white">
                                        It is important to get results from experiment but the most important is the process in getting that results
                                    </p>
                                    <ImQuotesRight className="relative left-[15rem] sm:left-[30rem] md:left-[35rem] h-8 w-8 text-white opacity-25"/>
                                </div>
                                <footer className="mt-6">
                                    <p className="text-base font-medium text-white">Sliit Admin</p>
                                    <p className="text-base font-medium text-indigo-100">CEO at Sri Lanka Institute of Information Technology Campus</p>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliitObjective;