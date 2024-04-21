import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog"
import Image from 'next/image'

const ImagePreviewDialog = (
  {
    selectedFile,
    close,
    imageChange,
    setStep
  }:
    {
      selectedFile: any,
      close: any,
      imageChange: any,
      setStep: any
    }) => {
 
  return (
    <Dialog open={selectedFile}>
      <DialogContent className="sm:max-w-[425px] bg-white border max-w-xl flex flex-col" onInteractOutside={close}>
        <DialogHeader>
          <div className='flex items-center relative h-3/4 my-auto'>
            <Image
              src={selectedFile!}
              alt='Selected File'
              width={400}
              height={400}
              className='rounded-md border mx-auto border-sigColorBgBorder object-contain'
            />
          </div>
        </DialogHeader>
        <DialogFooter className='mx-auto flex items-center'>
          <DialogClose asChild>
            <Button variant='destructive' size={"sm"} onClick={close} className='rounded-full'>
              Cancel
            </Button>
          </DialogClose>
          <Button size={"sm"} onClick={imageChange} className='rounded-full px-4'>
            Change
          </Button>
          <Button
            size={"sm"}
            onClick={() => setStep && setStep(1)}
            className='rounded-full px-4 bg-green-500 hover:bg-green-400'
          >
            Next
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
export default ImagePreviewDialog;
