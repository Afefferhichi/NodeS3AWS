const { Router } = require("express")
const { bucketName, myBucket } = require('../../config')


const uploadRoute = Router();

uploadRoute.post('/uploadFile', (req, res) => {


    let file = req.files.file1;
    // Setting up S3 upload parameters
    const params = {
        Bucket: bucketName,
        Key: file.name,
        Tagging: "public=yes",
        Body: file.data
    };
    // Uploading files to the bucket
    myBucket.upload(params, function (err, data) {
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
            s3: data
        });
    });

})

module.exports = { uploadRoute }