const HttpsRequester = require('./HttpsRequester');
const HtmlExtractor = require('./HtmlExtractor');
const ApplicationContext = require('./ApplicationContext');
const configuration = require('../config');

module.exports = new class App{

    constructor(){
        this.HttpsRequester = new HttpsRequester();
        this.HtmlExtractor = new HtmlExtractor();
        this.ApplicationContext = new ApplicationContext();
    }

    run() {
        this.getData();
        setInterval(this.getData.bind(this), 1000 * 60);
    }

    getData(){
        configuration.forEach(async unit => {
            const raw = await this.HttpsRequester.getUrl(unit.url);
            const data = this.HtmlExtractor.extract(raw, unit.selectors);
            data.forEach(selectorData => {
                if(this.ApplicationContext.checkIfDataIdentical(unit.replicaName, selectorData)){
                }else{
                    this.ApplicationContext.save(unit.replicaName, selectorData);
                    this.HttpsRequester.notifyTelegramApi(unit.alias, unit.branch);
                }
            })
        });
    }
}