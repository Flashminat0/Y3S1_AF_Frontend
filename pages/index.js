import Link from 'next/link'
import FileUploadTest from "../components/forms/FileUploadTest";
import LoginWIthMicrosoft from "../components/forms/auth/LoginWIthMicrosoft";
import Header from "../components/common/header";
import {useDocumentTitle} from '@mantine/hooks';

export default function Home() {
    useDocumentTitle("Home");


    return (
        <div className={``}>
            <Header/>
            <li>
                <Link href="/b  " as="/a">
                    <a>a</a>
                </Link>
            </li>
            <li>
                <Link href="/a" as="/b">
                    <a>bs</a>
                </Link>
            </li>
            <h1 className="text-3xl font-bold underline text-lg bg-red-100 text-red-500">
                Hello world!
            </h1>
            {/*<FileUploadTest/>*/}
            <LoginWIthMicrosoft/>
        </div>
    )
}
