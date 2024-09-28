const multer = require("multer");
const path=require("path");

//Multer
const storage = multer.diskStorage({
  destination: "src/uploads/",
  filename: function (req, file, cb) {
    const milliseconds = new Date().getTime();
    const filename=`${milliseconds}_${file.originalname}`;
    req.dataFile={name:filename}
    /*req.dataFile = {
      name: `${milliseconds}_${file.originalname}`,
    };
    cb("", req.dataFile.name);*/
    cb(null,filename);
  },
});
const fileFilter=(req,file,cb)=>{
  const filetypes= ['.pdf','.docx'];
  const ext=path.extname(file.originalname).toLowerCase();
  if(filetypes.includes(ext)){
    cb(null,true);
  }else{
    cb(new Error('Solo se permiten archivos PDF y DOCX'),false);
    
  }  
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits:{
    fileSize: 5*1024*1024,
  }
});

module.exports = upload.array("files");
