import Link from 'next/link'
import FileUploadTest from '../components/forms/FileUploadTest'
import LoginWIthMicrosoft from '../components/forms/auth/LoginWIthMicrosoft'
import Header from '../components/common/header'
import {useDocumentTitle, useLocalStorage} from '@mantine/hooks'
import Button from '@mui/material/Button'
import axios from 'axios'
import {useState, useEffect} from 'react'

export default function Home() {
    useDocumentTitle('Home')

    // const [credentials, setCredentials] = useLocalStorage({
    //     key: 'y3s1-af-credentials',
    //     defaultValue: {},
    // })

    const [credentials, setCredentials] = useState({})
    useEffect(() => {
        let credentialStorage = window.localStorage.getItem(
            'y3s1-af-credentials'
        )
        setCredentials(credentialStorage)
    }, [])

    const testAPI = () => {
        axios.get('/api/test').then((res) => {
            console.log(res)
        })
    }

    return (
        <div className={`font-sans`}>
            <Header />
            <Button onClick={testAPI} color={'primary'}>
                TEST
            </Button>

            <h1 className="text-3xl font-bold underline text-lg bg-red-100 text-red-500">
                Hello world!
            </h1>
            <FileUploadTest />
            <LoginWIthMicrosoft credentials={credentials} />
        </div>
    )
}
