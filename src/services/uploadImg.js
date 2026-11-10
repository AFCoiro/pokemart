const IMGBB_API_KEY = '0593c3e6193029a090d574ce2a1f7e8f'
const IMGBB_ENDPOINT = 'https://api.imgbb.com/1/upload'

export const uploadImg = async (img)=>{
    const formData = new FormData();
    formData.append('image',img)

    try {
        const resp = await fetch(`${IMGBB_ENDPOINT}?key=${IMGBB_API_KEY}` , {
            method:'POST',
            body:formData,
        });

        const data = await resp.json();
        if(!data.success){
            throw new Error('Hubo un error al subir la imagen. Por favor, intente nuevamente.')
        }
        return data.data.url;

    } catch (error) {
        console.error('ImgBB error:',error)
        throw error;
    }
}