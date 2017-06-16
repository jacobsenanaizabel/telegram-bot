const TelegramBot = require(`node-telegram-bot-api`)

const TOKEN = `395061033:AAHnXQBFoJewkbuJpndsuAsdhsWG6K0Kmc8`

const bot = new TelegramBot(TOKEN, { polling:true })

bot.on('message', function(msg){
    console.log('msg',msg);
});