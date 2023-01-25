import ImageKit from "imagekit";


export async function getImagesWithTags(tags:string[]){

    const data = await fetch(`http://localhost:3000/api/image`,{
        method:'post',
        headers:{"Content-Type" :"application/json"},
        body:JSON.stringify({
            tags:tags
        })
    })
    const result = await data.json()

    return result;
}

export const imageKit = new ImageKit({
    publicKey:process.env.IMAGEKIT_PUBLIC_KEY || '',
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY || '',
    urlEndpoint:process.env.IMAGEKIT_URL_ENDPOINT  || ''
  })