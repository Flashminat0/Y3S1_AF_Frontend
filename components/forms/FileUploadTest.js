import React, {useState} from 'react';
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {firebaseApp} from "../../firebase/base";

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


    return (
        <div>
            <h1>File Upload Test</h1>
            <form>
                <input type="file" name="file" onChange={uploadFile}/>
                <button type={`submit`}>Upload</button>
            </form>
            <button onClick={() => setShowImage(!showImage)}>Show Image</button>
            {showImage && <img src={imageUrl} alt=""/>}
        </div>
    );
};

export default FileUploadTest;
