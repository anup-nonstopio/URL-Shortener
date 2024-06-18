const shortid = require("shortid");
const URL = require('../models/url.model');

async function generateshortId(req, res) {
    if(!req.body.url) {
        return res.status(400).json({ message: 'URL is required' });
    }
    const shortID = shortid.generate();
    await URL.create({
        redirectURL: req.body.url,
        shortId: shortID,
        visitHistory: [],
    });
    return res.json({ url: shortID });
}

module.exports = {
    generateshortId,
};