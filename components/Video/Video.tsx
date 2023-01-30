

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
        alt='An image',
    } = props

    const [open,setOpen] = useState<boolean>(false)

    const setScroll =(value:boolean)=>{
        const body = document.getElementsByTagName('body')[0]
        body.style.overflowY = value?'hidden':'scroll'
    }

    const handleOpen =()=>{
        setOpen(true)
    }

    const handleClose =()=>{
        setOpen(false)
    }

    return(
        <React.Fragment>
            <div className={styles.image_wrapper} onClick={handleOpen}>
                <video src={src} className={styles.video}  muted  />
            </div>
            <VideoDrawer open={open} action={handleClose} videoSrc={src}/>
        </React.Fragment>
    )
}


export default Video;