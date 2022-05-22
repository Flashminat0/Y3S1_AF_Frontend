import React, { useState } from 'react'
import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
    deleteObject,
} from 'firebase/storage'
import { firebaseApp } from '../../firebase/base'
import axios from 'axios'

const FileUploadTest = () => {
    const [showImage, setShowImage] = useState(false)
    const [image, setImage] = useState({
        name: '',
        url: '',
    })

    const uploadFile = (e) => {
        const file = e.target.files[0]
        const storageRef = getStorage(firebaseApp)

        const fileName = `${Date.now()}-${file.name}`

        const fileRef = ref(storageRef, `images/${fileName}`)

        uploadBytes(fileRef, file).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImage({
                    name: fileName,
                    url: url,
                })
            })
        })
    }

    const deleteFileFromRef = () => {
        const storageRef = getStorage(firebaseApp)
        const fileRef = ref(storageRef, `images/${image.name}`)

        deleteObject(fileRef).then(() => {
            setImage({
                name: '',
                url: '',
            })
        })
    }

    const uploadUriToDatabase = (e) => {
        e.preventDefault()
        axios
            .post('/api/save-pic-on-db', {
                name: 'test',
                description: 'test description',
                url: image.url,
            })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <h1>File Upload Test</h1>
            <form>
                <input type="file" name="file" onChange={uploadFile} />
                <button onClick={uploadUriToDatabase}>Upload</button>
            </form>
            <button onClick={() => setShowImage(!showImage)}>Show Image</button>
            <button onClick={deleteFileFromRef}>DELETE Image</button>
            {showImage && <img src={image.url} alt="" />}
        </div>
    )
}

export default FileUploadTest
