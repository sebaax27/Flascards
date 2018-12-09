let fs = require("fs");
let express = require('express');
let DOMParser = require('xmldom').DOMParser;
let xpath = require('xpath.js');
let app = express();
let cors = require('cors');

app.use(cors());

let number = 3;

app.get('/xml', function (req, res) {
    console.log(req.query);
    fs.readFile("./kurs.xml", function (error, data) {
        let resultArray = [];
        console.log('Parsing the xml file');

        let xml = (new DOMParser()).parseFromString(data.toString());

        console.log('Finished parsing xml file.');
        console.log('Now using xpath.');

        let nodes = xpath(xml, `//lekcja[@nr=${number}]/slowo`);
        console.log(nodes[0].getElementsByTagName('pl')[0].firstChild.data);
        console.log(nodes[0].getElementsByTagName('en')[0].firstChild.data);

        console.log('Done.');
        console.log(`I've found ${nodes.length} nodes!`);

        for (let i = 0; i < nodes.length; ++i) {
            let pl = nodes[i].getElementsByTagName('pl')[0].firstChild.data;
            let en = nodes[i].getElementsByTagName('en')[0].firstChild.data;
            resultArray.push([pl, en]);
        }
        console.log(resultArray)
        let dataToSend = resultArray.toString();
        // console.log(dataToSend);
        res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8'
        });
        res.write(JSON.stringify(resultArray));
        console.log('Data sent to client!');
        res.end();
    });
});

app.listen(3000);
