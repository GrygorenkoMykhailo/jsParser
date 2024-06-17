const https = require('https');
const http = require('http');

module.exports = class HttpsRequester{
    getUrl(url){
        return new Promise((resolve, reject) => {
            https.get(url, (res) => {
                let data = '';

                res.on('data', chunk => {
                    data += chunk;
                });

                res.on('end', () => {
                    resolve(data);
                });

                res.on('error', (err) => {
                    reject(err);
                })
            });
        }) 
    }
    notifyTelegramApi(website, job_type){
        http.get(`http://localhost:3000?website=${website}&job_type=${job_type}`);
    }
}