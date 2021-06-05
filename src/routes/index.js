const {Router} = require('express')
const {uploadRoute} = require('./uploadFile');

const mainRoute = Router()
mainRoute.use(uploadRoute)


module.exports = mainRoute