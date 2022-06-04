import React, {useState} from 'react'

const faqStaticData = [
    {
        id: 1,
        question: 'What should do at first as a student?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eum expedita incidunt laborum libero nemo nisi.',
    },
    {
        id: 2,
        question: 'If you want to create a group, what should you do?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eum expedita incidunt laborum libero nemo nisi. Ab amet eligendi ipsam ipsum, mollitia nisi quaerat repudiandae ullam? Consequuntur quidem sed tempora.',
    },
    {
        id: 3,
        question: 'Is it essential for the team leader to create a team?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eum expedita incidunt laborum libero nemo nisi. Ab amet eligendi ipsam ipsum, mollitia nisi quaerat repudiandae ullam? Consequuntur quidem sed tempora.',
    },
    {
        id: 4,
        question:
            'How to find a supervisor and co-supervisor for the research?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eum expedita incidunt laborum libero nemo nisi. Ab amet eligendi ipsam ipsum, mollitia nisi quaerat repudiandae ullam? Consequuntur quidem sed tempora.',
    },
    {
        id: 5,
        question: 'How is the chat section useful?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eum expedita incidunt laborum libero nemo nisi. Ab amet eligendi ipsam ipsum, mollitia nisi quaerat repudiandae ullam? Consequuntur quidem sed tempora.',
    },
    {
        id: 6,
        question: 'How to submit a topic?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur atque aut autem beatae blanditiis consequatur consequuntur corporis eligendi est ex, exercitationem facilis fuga illum impedit',
    },
]

const FAQ = () => {
    const [faqs, setFaqs] = useState(faqStaticData)

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="max-w-2xl lg:mx-auto lg:text-center">
                    <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                        Frequently asked questions
                    </h2>
                    <p className="mt-4 text-gray-500">
                        Refer the FAQ section below to resolve any issues you
                        may have.
                    </p>
                </div>
                <div className="mt-20">
                    <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
                        {faqs.map((faq) => (
                            <div key={faq.id}>
                                <dt className="font-semibold text-gray-900">
                                    {faq.question}
                                </dt>
                                <dd className="mt-3 text-gray-500">
                                    {faq.answer}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default FAQ
