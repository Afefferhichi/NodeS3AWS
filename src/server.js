const express = require('express')
const fileUpload = require('express-fileupload');
const dotenv = require('dotenv');
const routes = require('./routes');

dotenv.config();
const port = process.env.PORT || 5001;

const app = express();

app.use(fileUpload());
app.use('/api',routes)


//start app 
app.listen(port, () =>
    console.log(`App is listening on port ${port}`)
);
