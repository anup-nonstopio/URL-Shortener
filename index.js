const express = require('express');
const urlRoute = require('./routes/url.route');
const dbConnect = require('./DB/dbConnect');
const URL = require('./models/url.model');
const userRoute = require('./routes/user.route');
const staticRoute = require('./routes/static.route');

const app = express();
const PORT = 8001;

dbConnect("mongodb://127.0.0.1:27017/URL-Shortener");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/url", urlRoute);
app.use("/user", userRoute);
app.use("/", staticRoute);

app.get("/:shortId", async (req, res) => {
    const entry = await URL.findOneAndUpdate({ shortId: req.params.shortId }, { $push: { visitHistory: { timestamp: Date.now() } } });
    if (entry) {
        return res.redirect(entry.redirectURL);
    }
    return res.status(404).json({ message: 'URL not found' }); 
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});