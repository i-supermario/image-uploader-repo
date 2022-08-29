import React, { useCallback, useState } from "react";
import Icon from '../public/image'
import {useDropzone} from 'react-dropzone';
import { storage } from "../firebase";
import { ref, getDownloadURL, uploadBytesResumable, uploadBytes } from "firebase/storage";
import Container from "./container";
import Loader from "./loader";

export default function Dropzone(props){


    const onDrop = useCallback(acceptedFiles => {
        console.log("dropped")
        props.handleDrop()

        const file = acceptedFiles[0]
        if (!file) {
            console.log("no file")
            return;
        }

        const storageRef = ref(storage, `${file.name}_${Date.now()}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        
        uploadTask.on('state_changed',
        (snapshot) => {
            const progress =
            Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            props.setProgresspercent(progress);
        },
        (error) => {
            alert(error);
        },
        async () => {
            await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log(downloadURL)
            props.setImgUrl(downloadURL)
            });
        }
        );

        }, [])

    const {getRootProps, getInputProps, open} = useDropzone({onDrop, noClick:true,maxFiles:2,multiple:true})
    
    return (
        <div style={{display:props.dropArea}} {...getRootProps()} className="flex flex-col text-center gap-y-4">
            <div className="container flex flex-col gap-y-6 justify-center content-center p-8 w-90 h-70 rounded-md border-blue-300 border-2 border-dashed bg-gray-100">
                <Icon></Icon>
                <input {...getInputProps()} />
                <p className='text-gray-500'>Drag & Drop your image here</p>
            </div>
            <span className='text-gray-400'>Or</span>
            <button type="button" onClick={open} className='rounded-xl bg-blue-500 text-white text-center w-fit px-6 py-2 self-center'>Choose a file</button>
        </div>
    )
}