

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