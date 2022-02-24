import multer from 'multer'

const filename = (req,file,next) => {
    let lastIndexof = file.originalname.lastIndexOf(".")
    let ext = file.originalname.substring(lastIndexof);
    next(null,`file-${Date.now()}${ext}`)
}

const destination = (req, file, next) => {
    next(null, `${__dirname}/../uploads`);
}

const upload = multer({
    storage:multer.diskStorage({destination,filename})
})

export default upload;