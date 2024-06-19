import express from 'express';
import { getAllUrls } from '../controllers/url.controller.js';
import { restrictTo } from '../middlewares/auth.middleware.js';
const router = express.Router();

router.get('/', restrictTo(["NORMAL"]), getAllUrls);

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/login', (req, res) => {
    res.render('login');
});

export default router;