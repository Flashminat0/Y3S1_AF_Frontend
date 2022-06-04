import React from 'react'

const posts = [
    {
        title: 'Apply for a team membership',
        href: '#',
        category: {
            name: 'Group List',
            href: '#',
            color: 'bg-indigo-100 text-indigo-800',
        },
        description:
            'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
    },
    {
        title: 'Submit once the group members are complete',
        href: '#',
        category: {
            name: 'Finalize Group',
            href: '#',
            color: 'bg-pink-100 text-pink-800',
        },
        description:
            'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
    },
    {
        title: 'Submit a topic for group research',
        href: '#',
        category: {
            name: 'Submit Topics',
            href: '#',
            color: 'bg-green-100 text-green-800',
        },
        description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.',
    },
    {
        title: 'Download the marking schema related to your research',
        href: '#',
        category: {
            name: 'Download Marking Schema',
            href: '#',
            color: 'bg-orange-100 text-orange-800',
        },
        description:
            'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
    },
    {
        title: 'Download the project templates related to your research',
        href: '#',
        category: {
            name: 'Download Project Templates',
            href: '#',
            color: 'bg-purple-100 text-purple-800',
        },
        description:
            'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
    },
    {
        title: 'Improve your research outcome by chatting with supervisor, co-supervisor',
        href: '#',
        category: {name: 'Chat', href: '#', color: 'bg-red-100 text-red-800'},
        description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ProcessOfResearch = () => {
    return (
        <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
                <div>
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl capitalize">
                        What you are able to
                    </h2>
                    <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                        As a student, you can use this website to do the
                        following:
                    </p>
                </div>
                <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
                    {posts.map((post) => (
                        <div key={post.title}>
                            <div>
                                <a
                                    href={post.category.href}
                                    className="inline-block"
                                >
                                    <span
                                        className={classNames(
                                            post.category.color,
                                            'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium'
                                        )}
                                    >
                                        {post.category.name}
                                    </span>
                                </a>
                            </div>
                            <a
                                href={post.href}
                                className="block mt-4 no-underline"
                            >
                                <p className="text-xl font-semibold text-gray-900">
                                    {post.title}
                                </p>
                                <p className="mt-3 text-base text-gray-500">
                                    {post.description}
                                </p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProcessOfResearch
