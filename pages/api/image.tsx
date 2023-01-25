
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
      publicKey:'public_qtgfk/FOFZxZiCLmuYHiGmTWJn4=',
      privateKey:'private_SDJePxajZpobaUO8EPbbyt4DLwo=',
      urlEndpoint:'https://ik.imagekit.io/artboomer'
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
