const fs = require("fs");
const path=require('path')
console.log("postinstall start");

const cmdArgv = JSON.parse(process.env.npm_config_argv).original;

// copy file to public
if (cmdArgv.includes("page-playground")) {
    console.log('copy html.min.js')
    fs.copyFileSync(path.join(__dirname,'../node_modules/page-playground/wcdist/html.min.js'),path.join(__dirname,'../docs/.vuepress/public/html.min.js'))
}

console.log("postinstall end");
