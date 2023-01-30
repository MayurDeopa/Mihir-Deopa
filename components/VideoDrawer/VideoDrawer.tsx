import {AiOutlineClose} from 'react-icons/ai'

import {Drawer} from 'material-gas-ui'

import styles from '../../styles/ImageGrid.module.css'

interface VideoDrawerProps{
    open:boolean
    action:()=>void
    videoSrc:string
}


const VideoDrawer:React.FC<VideoDrawerProps>=(props)=>{

    const {
        open,
        action,
        videoSrc
    } = props

    

    return(
        <Drawer
            open={open}
            action={action}
            width='100%'
            height='100%'
            position='bottom'
            styles={{
                backgroundColor:'var(--accent-7)',
                color:'var(--text-color)',
                display:'flex',
                alignItems:'center',
                justifyContent:'center'
            }}
        >
            <div className={styles.video_player}>
                <video src={videoSrc} autoPlay  loop playsInline className={styles.video_player_video}/>
                
            </div>
            <div className={styles.video_player_close} onClick={action}>
                    <AiOutlineClose/>
                </div>
        </Drawer>
    )
}

export default VideoDrawer