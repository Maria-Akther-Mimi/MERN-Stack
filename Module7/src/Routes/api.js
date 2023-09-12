const express = require('express');
const router = express.Router();

const blogControllers = require('../Controllers/blogController');
const commentControllers = require('../Controllers/commentController');
const messageControllers = require('../Controllers/messageController');
const portfolioControllers = require('../Controllers/portfolioController');
const productControllers = require('../Controllers/productController');


router.get('/blog-create', blogControllers.create)
router.get('/blog-read', blogControllers.read)
router.get('/blog-delete', blogControllers.delete)
router.get('/blog-update', blogControllers.update)

router.get('/comment-create', commentControllers.create)
router.get('/comment-read', commentControllers.read)
router.get('/comment-delete', commentControllers.delete)
router.get('/comment-update', commentControllers.update)

router.get('/message-create', messageControllers.create)
router.get('/message-read', messageControllers.read)
router.get('/message-delete', messageControllers.delete)
router.get('/message-update', messageControllers.update)

router.get('/portfolio-create', portfolioControllers.create)
router.get('/portfolio-read', portfolioControllers.read)
router.get('/portfolio-delete', portfolioControllers.delete)
router.get('/portfolio-update', portfolioControllers.update)

router.get('/product-create', productControllers.create)
router.get('/product-read', productControllers.read)
router.get('/product-delete', productControllers.delete)
router.get('/product-update', productControllers.update)






module.exports=router;