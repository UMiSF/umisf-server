const cloudinary = require('./cloudinary');

const uploadFile = async (folder,picture,fileName) => {
    try{
        const result = await cloudinary.uploader.upload(picture, {
            public_id: `${folder}/${fileName}`,
            overwrite: true
        })

        return result.url
    }catch (e){
       console.log('cant upload file',e);
       return '';
        
    }
}

module.exports = {
    uploadFile
}