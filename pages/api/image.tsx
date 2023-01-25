
import ImageKit from 'imagekit'

import type { NextApiRequest, NextApiResponse } from 'next'





export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  let {body} = req
  let {tags} = body 

  if(tags){
    let imagekit = new ImageKit({
      publicKey:process.env.IMAGEKIT_PUBLIC_KEY ,
      privateKey:process.env.IMAGEKIT_PRIVATE_KEY,
      urlEndpoint:process.env.IMAGEKIT_URL_ENDPOINT
    })
  
    try{
      const data = await imagekit.listFiles({
        tags:tags
      })
      res.status(200).json({data:data})
    }catch(err){
      res.status(400).json({data:err})
    }
  }
  else{
    res.status(400).json({data:'tags not found'})
  }
}
