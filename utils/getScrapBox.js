const axios = require("axios");

const getScrapBox = () => {
    return new Promise((resolve, reject) => {
        axios.get("https://scrapbox.io/api/pages/TouchSqueeze")
            .then(response => {
                resolve(response.data);
            })
            .catch(e => {
                reject(e);
            });
    });
};

module.exports = getScrapBox;