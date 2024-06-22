import express from 'express';
import { shortenUrl } from '../../controllers/url/createUrl';
const router = express.Router();

router.post('/shortcode', shortenUrl);

export default router;
