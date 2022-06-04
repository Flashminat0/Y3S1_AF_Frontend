import Link from 'next/link'
import FileUploadTest from '../components/forms/FileUploadTest'
import LoginWIthMicrosoft from '../components/forms/auth/LoginWIthMicrosoft'
import Header from '../components/common/Header'
import {useDocumentTitle, useLocalStorage} from '@mantine/hooks'
import Button from '@mui/material/Button'
import axios from 'axios'
import {useState, useEffect} from 'react'
import MainPanel from '../components/common/MainPanel'
import FAQ from '../components/common/FAQ'
import SliitObjective from '../components/common/SliitObjective'
import ProcessOfResearch from '../components/common/ProcessOfResearch'
import Footer from '../components/common/Footer'

export default function Home() {
    useDocumentTitle('Home')

    const [credentials, setCredentials] = useLocalStorage({
        key: 'y3s1-af-credentials',
        defaultValue: {},
    })

    const testAPI = () => {
        axios.get('/api/test').then((res) => {
            console.log(res)
        })
    }

    return (
        <div className={`font-sans`}>
            <Header />
            <MainPanel />
            <ProcessOfResearch />
            <SliitObjective />
            <FAQ />
            <Footer />
            <Button onClick={testAPI} color={'primary'}>
                TEST
            </Button>

            <h1 className="text-3xl font-bold underline text-lg bg-red-100 text-red-500">
                Hello world!
            </h1>
            <FileUploadTest />
            <LoginWIthMicrosoft
                credentials={credentials}
                setCredentials={setCredentials}
            />
        </div>
    )
}
