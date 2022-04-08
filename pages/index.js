import Link from 'next/link'
import FileUploadTest from "../components/forms/FileUploadTest";

export default function Home() {
    return (
        <ul>
            <li>
                <Link href="/b" as="/a">
                    <a>a</a>
                </Link>
            </li>
            <li>
                <Link href="/a" as="/b">
                    <a>b</a>
                </Link>
            </li>
            <h1 className="text-3xl font-bold underline text-lg bg-red-100 text-red-500">
                Hello world!
            </h1>
            <FileUploadTest/>
        </ul>
    )
}
