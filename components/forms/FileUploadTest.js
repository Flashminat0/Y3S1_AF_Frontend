import React, {useState} from 'react';
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {firebaseApp} from "../../firebase/base";
import axios from "axios";

const FileUploadTest = () => {

    const [showImage, setShowImage] = useState(false);
    const [imageUrl, setImageUrl] = useState('');

    const uploadFile = (e) => {
        const file = e.target.files[0];
        const storageRef = getStorage(firebaseApp);
        const fileRef = ref(storageRef, `images/${Date.now()}-${file.name}`);

        uploadBytes(fileRef, file).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrl(url);
                return url;
            });
        });
    }

    const uploadUriToDatabase = (e) => {
        e.preventDefault();
        axios.post('/api/save-pic-on-db', {
            name: 'test',
            description: 'test description',
            url: imageUrl
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div>
            <h1>File Upload Test</h1>
            <form>
                <input type="file" name="file" onChange={uploadFile}/>
                <button onClick={uploadUriToDatabase}>Upload</button>
            </form>
            <button onClick={() => setShowImage(!showImage)}>Show Image</button>
            {showImage && <img src={imageUrl} alt=""/>}
        </div>
    );
};

export default FileUploadTest;
