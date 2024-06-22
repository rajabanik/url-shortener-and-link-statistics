'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.shortenUrl = void 0;

async function loadNanoid() {
  const { nanoid } = await import('nanoid');
  return nanoid;
}

const createUrl = require('../../services/users/createUrl.cjs').createUrl;
exports.shortenUrl = async function (req, res) {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ message: 'URL is required' });
  }

  try {
    const nanoid = await loadNanoid();
    const shortCode = nanoid(8); // Generate a nanoid with length 8
    // Assuming createUrl returns a Promise, await its completion
    await createUrl({ originalUrl: url, shortCode });

    res.status(201).json({ shortCode });
  } catch (error) {
    console.error('Error shortening URL:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
