import Image from "next/image";
import { useEffect } from "react";

import styles from '../../styles/ImageGrid.module.css'

interface CustomImageProps{
    src:string
    alt?:string
    height:number
    width:number
}


const CustomImage:React.FC<CustomImageProps> =(props)=>{

    const {
        src,
        alt='An image',
        height,
        width
    } = props

    const getAspectRatio =(height:number,width:number)=>{
        let ratio = width/height
        return `${(1/ratio)*100}%`
    }

    useEffect(()=>{
        getAspectRatio(height,width)
    },[])

    return(
        <div className={styles.image_wrapper} style={{paddingTop:getAspectRatio(height,width)}}>
            <Image src={src} alt={alt} fill className={styles.image}/>
        </div>
    )
}


export default CustomImage;