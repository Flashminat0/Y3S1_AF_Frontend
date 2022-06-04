import React from 'react'
import UploadMarkingSchema from '../../components/layouts/uploadMarkingSchema/uploadMarkingSchema'
import {useRouter} from 'next/router'

const markingschema = () => {
    const router = useRouter()

    return (
        <>
            <UploadMarkingSchema
                navigateFunc={async () => {
                    await router.push('/')
                }}
            />
        </>
    )
}

export default markingschema
