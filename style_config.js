var fs = require('fs'),
	readline = require('readline');

var filePath = './dist/client/index.html';
var input = fs.createReadStream(filePath);
var lineReader = readline.createInterface({ input });
var linkList = [];

lineReader.on('line', function (line) {
	var linkLine = (line.indexOf('link') > -1) ? line : undefined;
	if (linkLine) linkList.push(linkLine);
});

lineReader.on('close', function () {
	linkList.forEach(link => file.appendFileSync(filePath, 'link', 'utf8'))
});

module.exports = function () {
	let env = getEnv();
	let filePath = path.resolve(__dirname, 'src/providers/utils/config.service.ts');
	let file = fs.readFileSync(filePath, 'utf8');

	execConfig(env, filePath, file);
};
