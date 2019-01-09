const express = require("express");
const app = express();
const getScrapBox = require("./utils/getScrapBox");
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    const scrapboxData = await getScrapBox();
    res.render('index', {
        title: "Hello Express",
        content: "ポーリング中です."
    });
    //res.send(scrapboxData);
});

app.get("/api/:id", async (req, res) => {
    //湘南台のidを仮に1111としておく
    if (req.params.id == "1111") {
        const scrapboxData = await getScrapBox();
        const filteredData = scrapboxData.pages.filter(page => page.descriptions.includes("#湘南台"));
        res.send(filteredData);
    }
    ;
});


app.listen(port, () => {
    console.log("server is ready.");
});