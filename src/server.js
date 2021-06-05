const fs = require('fs');
const express = require('express')
const fileUpload = require('express-fileupload');
const dotenv = require('dotenv');
const aws = require('aws-sdk');
dotenv.config();
const port = process.env.PORT || 5001;


const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY;
const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY;
const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;

const S3  = aws.S3;
const myBucket = new S3({
    credentials:{
        accessKeyId:AWS_ACCESS_KEY,
        secretAccessKey:AWS_SECRET_KEY,
    }
});

const app = express();

app.use(fileUpload());

app.post('/upload-file', async (req, res) => {
   
    
    let file = req.files.file1;
    // Setting up S3 upload parameters
    const params = {
        Bucket: AWS_BUCKET_NAME,
        Key: file.name,
        Tagging: "public=yes",
        Body: file.data
    };
    // Uploading files to the bucket
    myBucket.upload(params, function(err, data) { 
        if (err) {
            throw err;
        }
        res.send({
            status: true,
            message: 'File is uploaded',
            data: {
                name: file.name,
                size: file.data.length
            },
            s3:data
        });
    });

})

//start app 
app.listen(port, () => 
  console.log(`App is listening on port ${port}`)
);
