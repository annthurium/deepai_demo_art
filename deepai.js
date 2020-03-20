// Example posting a local text file (Node.js only):
const fs = require('fs');

const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML

deepai.setApiKey(process.env.DEEPAI_KEY);

(async function () {
    resp = await deepai.callStandardApi("text-generator", {
        text: fs.createReadStream("assets/hp11st2ps.txt"),
    });
    fs.writeFile('assets/gentext.txt', JSON.stringify(resp), (err) => {
        // throws an error, you could also catch it here
        if (err) throw err;

        // success case, the file was saved
        console.log('saved!');
    });
    console.log(resp);
    
    resp = await deepai.callStandardApi("celebrity-recognition", {
        image: "https://pbs.twimg.com/media/BhxWutnCEAAtEQ6.jpg",
    });
    console.log(JSON.stringify(resp));
    resp = await deepai.callStandardApi("neuraltalk", {
        image: "https://www.syfy.com/sites/syfy/files/2019/05/untitled.png",
    });
    console.log(resp);
    resp = await deepai.callStandardApi("pose-detection", {
        image: "https://live.staticflickr.com/6026/5903485210_4033074bd1_b.jpg",
    });
    console.log(JSON.stringify(resp));
    var resp = await deepai.callStandardApi("summarization", {
        text: "LET'S get down to business to defeat the huns did they send me daughters when i asked for sons you're the saddest bunch i ever met so you can bet before we're through mister i'll make a man out of you",
    });
    console.log(resp);
    resp = await deepai.callStandardApi("colorizer", {
        image: "https://www.terragalleria.com/images/black-white/us-ca/usca9303-bw.jpeg",
    });
    console.log(resp);
    resp = await deepai.callStandardApi("fast-style-transfer", {
        content: fs.createReadStream("assets/avatar.png"),
        style: "https://cdn.kastatic.org/ka-perseus-images/6a6151155fbde50cec7b9616661c1448d3374fa7.jpg",
    });
    console.log(resp);
})()
