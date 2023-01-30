import Image from "next/image";
import { useEffect, useState } from "react";

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

    const [loading,setLoading] = useState<boolean>(true)

    const getAspectRatio =(height:number,width:number)=>{
        let ratio = width/height
        return `${(1/ratio)*100}%`
    }

    const containerClass = loading?`${styles.image_wrapper} ${styles.skeleton_wrapper}`:styles.image_wrapper

    const imageStyle = loading?{opacity:0}:{opacity:1}

    return(
        <div className={containerClass} style={{paddingTop:getAspectRatio(height,width)}}>
            <Image src={src} alt={alt} fill className={styles.image}  style={imageStyle} onLoadingComplete={()=>setLoading(false)}/>
        </div>
    )
}


export default CustomImage;