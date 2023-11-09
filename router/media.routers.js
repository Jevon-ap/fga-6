const router = require('express').Router();
const storage = require('../libs/multer')

const {storageImage} = require('../controllers/media.controllers')

router.post('/images',storage.image.single('image'),storageImage)

module.exports = router