require('dotenv').config();

const express = require('express');
const app = express();
const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
let currentUser;

const bot = new TelegramBot(process.env.TOKEN, { polling: true });

bot.on('message', (msg) => {
    if(msg.text === '/start'){
        if(!currentUser){
            fs.writeFileSync('config.json', JSON.stringify({
                'current_user_id': msg.chat.id
            }));
            currentUser = msg.chat.id;
        } 
    }
});

app.get('/', (req, res) => {
    const job_type = req.query['job_type'];
    const website = req.query['website'];

    if(job_type && website){
        bot.sendMessage(currentUser, `New job offer for ${job_type} developer found at ${website}`);
        return 200;
    }   
    return 400;
});

app.listen(process.env.PORT, () => {
    try {
        currentUser = JSON.parse(fs.readFileSync('config.json')).current_user_id;
    }catch{
        console.log('No user id defined in config');
    }  
    console.log('Server listening on port ' + process.env.PORT);
});