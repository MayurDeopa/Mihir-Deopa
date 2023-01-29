import Head from 'next/head'


import { Layout } from '@/components'

import {AiOutlineInstagram,AiOutlineLinkedin,AiOutlineMail,AiOutlinePhone} from 'react-icons/ai'

import styles from '../styles/contact.module.css'


export default function Contact() {
  return (
    <>
    <Head>
      <title>Mihir Deopa</title>

    </Head>
      <Layout>
        <div className={styles.wrapper}>
            <h5 className={styles.description}>For any inquiries about shootings and collaborations please send me a message on</h5>
            <div style={{display:'flex',flexDirection:'row'}}>
                <a href='https://www.linkedin.com/in/mihir-deopa-371b5422b/' target='_blank' className={styles.icons}> 
                    <AiOutlineLinkedin/>
                </a>
                <a href='https://www.instagram.com/xtcmihir/' target='_blank' className={styles.icons}> 
                    <AiOutlineInstagram/>
                </a>
            </div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div className={styles.icons}>
                <AiOutlineMail/>
                </div>
                :
                <p>mihirdeopa@gmail.com</p>
            </div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div className={styles.icons}>
                <AiOutlinePhone/>
                </div>
                :
                <p>+91 9619386772</p>
            </div>
        </div>
      </Layout>
    </>
    
  )
}

