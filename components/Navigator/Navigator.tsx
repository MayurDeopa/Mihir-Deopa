import Link from 'next/link'
import React, { useState } from 'react'

import { CgClose } from 'react-icons/cg'

import styles from '../../styles/Navigator.module.css'


type options={
    title?:string,
    hasChildren:boolean,
    children?:options[],
    link?:string
}

interface NavigatorOptionsProps{
    options:options[]
    hidden:boolean
    action?:()=>void
}


const navOptions =[
    {
        title:'Home',
        hasChildren:false,
        link:'/'
    },
    {
        title:'Projects',
        hasChildren:false,
    },
    {
        title:'Contact',
        hasChildren:false,
        link:'/contact'
    }
]

const navOptions2 =[
    {
        title:"Personal",
        hasChildren:false,
        link:'/personal'
    },
    {
        title:"Work",
        hasChildren:false,
        link:'/work'
    },
    {
        title:"Videos",
        hasChildren:false,
        link:'/videos'
    },
    {
        hasChildren:false,
    }
]

const Navigator =()=>{

    const [option2Hidden,setHidden] = useState(true)

    return(
        <nav className={styles.wrapper}>
            <NavigatorOptions options={navOptions} hidden={!option2Hidden} action={()=>setHidden(false)}/>
            <NavigatorOptions options={navOptions2} hidden={option2Hidden} action={()=>setHidden(!option2Hidden)}/>
        </nav>
    )
}


const NavigatorOptions:React.FC<NavigatorOptionsProps> =(props)=>{

    const {
        options,
        hidden,
        action
    } = props


        return(
            <div className={hidden?`${styles.options_list} ${styles.hidden}`:styles.options_list}>
                {options.map((o,index)=>{
                    if(o.link){
                        return(
                            <Link key={index} href={o.link} className={styles.option}>
                                {o.title}
                            </Link>
                        )
                    }
                    else{
                        return(
                            <div key={index} className={styles.option} onClick={action}>
                                {o.title || <div style={{fontSize:'25px',display:'flex',alignItems:"center",justifyContent:'center'}}><CgClose/></div>}
                            </div >
                        )
                    }
                })}
            </div>
        )
    
    
    
}



export default Navigator;