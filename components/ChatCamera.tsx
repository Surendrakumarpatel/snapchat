"use client"
import React, { useEffect, useRef, useState } from 'react'
import { CiCamera } from "react-icons/ci";
import { readFileAsDataURL } from '@/lib/utils';
import ImagePreviewDialog from './ImagePreviewDialog';
import UserDialog from './UserDialog';

const ChatCamera = () => {
    const imageRef = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<string>("");
    const [step, setStep] = useState(0);
    const fileChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const dataUrl = await readFileAsDataURL(file);
            setSelectedFile(dataUrl);
        }
    }
    const closeDialog = () => {
        setSelectedFile("");
        setStep(0);
    };

    return (
        <>
            <div className='flex flex-col items-center justify-center m-2 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border p-5'>

                <div
                    className='rounded-full p-8 bg-white-800 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 border border-gray-200 cursor-pointer text-white'
                    onClick={() => imageRef.current?.click()}
                >
                    <CiCamera size={"30px"} />
                    <input
                        onChange={fileChangeHandler}
                        ref={imageRef}
                        type='file'
                        accept='image/*'
                        hidden
                    />
                </div>
                <p className='w-2/3 text-center text-white mt-4 font-semibold'>Click the Camera to send your Code.</p>
            </div>
            {
                step === 0 ? (
                    <ImagePreviewDialog
                        selectedFile={selectedFile}
                        close={closeDialog}
                        imageChange={() => imageRef.current?.click()}
                        setStep={setStep}
                    />
                ) : (
                    <UserDialog
                        selectedFile={selectedFile}
                        close={closeDialog}
                        onPreview={() => setStep(0)}
                    />
                )
            }
        </>
    )
}

export default ChatCamera