import express from 'express';
import { redirectUrl } from '../../controllers/url/redirecturl';

const router = express.Router();

router.get('/:shortCode', redirectUrl);

export default router;