const dotenv = require('dotenv');
const aws = require('aws-sdk');
dotenv.config();
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
module.exports={
    myBucket,
    bucketName:AWS_BUCKET_NAME
}