const express = require("express");
const URL = require('../models/url');
const { handleGenerateShortUrl, handleGetAnalytics} = require("../controllers/url")
const router = express.Router();

router.post("/" , handleGenerateShortUrl);

router.get('/analytics/:shortId', handleGetAnalytics),


router.get('/:shortId', async(req,res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push:
            {
                visitHistory: { timestamp:Date.now()},
            },
        }
);

res.redirect(entry.redirectURL);
});


module.exports = router;