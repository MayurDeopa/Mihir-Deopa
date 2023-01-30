import Head from 'next/head'


import styles from '@/styles/Home.module.css'

import { InferGetStaticPropsType } from 'next'
import {  imageKit } from '@/lib/api'
import { CustomImage, ImageGrid, Video } from '@/components'


export default function Personal({result}:InferGetStaticPropsType<typeof getStaticProps>) {
  const videos = result
  return (
    <>
    <Head>
      <title>Mihir Deopa | Videos</title>

    </Head>
      <ImageGrid columnWidth='15rem'>
        {videos.map((video:any,index:number)=>{
          return(
            <Video key={index} src={video.url} />
          )
        })}
      </ImageGrid>
    </>
    
  )
}

export async function getStaticProps() {
  const result = await imageKit.listFiles({
    tags:['work_video']
  })
  return {
    props: {
      result,
    },
  }
}
