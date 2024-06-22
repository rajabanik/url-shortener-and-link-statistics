import express from 'express';
import { getUrlStatistics } from '../../controllers/url/getUrlStats';
const router = express.Router();

router.get('/stats/:shortCode', getUrlStatistics);

export default router;
