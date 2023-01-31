

import React, {  useState } from "react";

import styles from '../../styles/ImageGrid.module.css'
import VideoDrawer from "../VideoDrawer";

interface VideoProps{
    src:string
    alt?:string
}


const Video:React.FC<VideoProps> =(props)=>{

    const {
        src,
        alt='A video',
    } = props

    const [open,setOpen] = useState<boolean>(false)


    const handleOpen =()=>{
        setOpen(true)
    }

    const handleClose =()=>{
        setOpen(false)
    }

    return(
        <React.Fragment>
            <div className={styles.image_wrapper} onClick={handleOpen} >
                <video src={src} className={styles.video}  />
            </div>
            <VideoDrawer open={open} action={handleClose} videoSrc={src}/>
        </React.Fragment>
    )
}


export default Video;