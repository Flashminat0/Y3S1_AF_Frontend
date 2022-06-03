import React from 'react'
import {Button} from '@mui/material'
import {useRouter} from 'next/router'

const UserProfileWrapper = ({children, role}) => {
    const router = useRouter()

    return (
        <div className={'px-6 py-6'}>
            {children}
            <hr />
            {role === 'admin' ? (
                <>
                    <Button
                        className={'mb-2 text-lg'}
                        fullWidth={true}
                        color={'success'}
                        variant="outlined"
                    >
                        Change Role
                    </Button>
                    <Button
                        className={'mb-2 text-lg'}
                        fullWidth={true}
                        color={'error'}
                        variant="outlined"
                    >
                        Remove Member
                    </Button>
                </>
            ) : (
                <>
                    <Button
                        onClick={async () => {
                            await router.push('/')
                        }}
                        className={'mb-2 text-lg'}
                        fullWidth={true}
                        color={'primary'}
                        variant="outlined"
                    >
                        Go to Home Page
                    </Button>
                </>
            )}
        </div>
    )
}

export default UserProfileWrapper
