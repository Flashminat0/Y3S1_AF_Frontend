import React from 'react';
import {getStorage, ref , uploadBytes} from "firebase/storage";
import {firebaseApp} from "../../firebase/base";

const FileUploadTest = () => {
    const uploadFile = (e) => {
        const file = e.target.files[0];
        const storageRef = getStorage(firebaseApp);
        const fileRef = ref(storageRef, file.name);

        uploadBytes(fileRef, file).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });

    }

    return (
        <div>
            <h1>File Upload Test</h1>
            <form>
                <input type="file" name="file" onChange={uploadFile}/>
                <button type={`submit`}>Upload</button>
            </form>
        </div>
    );
};

export default FileUploadTest;
