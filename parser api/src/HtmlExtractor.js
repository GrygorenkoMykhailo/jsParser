const { parse } = require('node-html-parser');

module.exports = class HtmlExtractor{
    extract(html, selectors){
        const root = parse(html);
        const data = [];
        selectors.forEach(element => {
            data.push(root.querySelectorAll(element));
        });
        return data;
    }
}