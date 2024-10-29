'use client'
import Image from "next/image";
import { useRef,useState } from "react"

export default function ImagePicker({label,name}){
    const [selectedImage,setSelectedImage]=useState();
    const image =useRef();
    const handleSelectImage=()=>{
        image.current.click();
    }
    function handleChangeImage(event){
        const file =event.target.files[0];
        if(!file){
            setSelectedImage(null);
            return;
        }
        const fileReader =new FileReader();
        fileReader.onload=()=>{
            setSelectedImage(fileReader.result);
        }
        fileReader.readAsDataURL(file);
    }
    return(
        <div>
            {/* <label htmlFor={name}>{label}</label> */}
            <div>
                {selectedImage?<Image src={selectedImage} alt="choosen photo" width={300} height={300}></Image>:<p>Choose an image</p>}
                <input className="hidden" type="file" id={name} name={name} accept="image/png, image/jpeg" required ref={image}  onChange={handleChangeImage}/>
                <button type="button" onClick={handleSelectImage}>Select Image</button>
            </div>
            
        </div>
        
    )
}