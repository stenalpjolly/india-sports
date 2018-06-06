const HTMLParser = require('fast-html-parser');
const request = require("request");

let api_url = "http://www.aitatennis.com/Tournament_Calendar.php?year=2018";

module.exports.loadData = async function () {

    request(api_url, function (err, req, res) {
        let responseData = HTMLParser.parse(res);
        let tableData = responseData.querySelector(".table").childNodes;

        tableData.filter(childNode=>{
            return !!childNode.childNodes
        }).map(childNode=>{
            return childNode.childNodes
        }).forEach(row=>{
            row.filter(childNode => {
                return !!childNode.childNodes && !!childNode.childNodes[0].childNodes && !!childNode.childNodes[0].childNodes[0].childNodes
            }).map(element => {
                return element.childNodes[0].childNodes[0].childNodes[0].rawText;
            }).forEach(item=>{x
                console.log(JSON.stringify(item));
            });
        })
    });


    console.log("Inside Plugin 1");
};