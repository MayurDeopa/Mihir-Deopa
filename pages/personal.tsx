import Head from 'next/head'


import styles from '@/styles/Home.module.css'

import { InferGetStaticPropsType } from 'next'
import {  imageKit } from '@/lib/api'
import { CustomImage, ImageGrid } from '@/components'


export default function Personal({result}:InferGetStaticPropsType<typeof getStaticProps>) {
  const images = result
  return (
    <>
    <Head>
      <title>Mihir Deopa | Personal Projects</title>

    </Head>
      <ImageGrid>
        {images.map((image:any,index:number)=>{
          return(
            <CustomImage key={index} src={image.url} width={image.width/10} height={image.height/10}/>
          )
        })}
      </ImageGrid>
    </>
    
  )
}

export async function getStaticProps() {
  const result = await imageKit.listFiles({
    tags:['personal']
  })
  return {
    props: {
      result,
    },
  }
}
