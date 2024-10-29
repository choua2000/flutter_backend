import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../../public/uploads"));
    },
    filename: function (req, file, cb) {
        const fileType = /\.jpg|\.jpeg|\.png|\.gif/;
        const extname = fileType.test(path.extname(file.originalname).toLocaleLowerCase());
        if(extname) {
            cb(null, Date.now() + "_" + Math.floor(Math.random() * 1000) + path.extname(file.originalname));
    } else{
        return cb(new Error("Only image files are allowed"));
    }
    }
})
const upload = multer({ storage: storage ,
    limits : {
        fileSize:1024 * 1024 * 5
    }
});
export default upload

