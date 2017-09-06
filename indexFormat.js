var path = require('path'), fs = require('fs');
var htmlIndex = '';
var _dir = ''

function replaceLink(filename) {
	filename = `<link href="${filename}" rel="stylesheet">`;
	htmlIndex = htmlIndex.replace(filename, '').concat(filename);
}

function replaceLiveReload() {
	var script = `<script src="http://localhost:35729/livereload.js"></script>`;
	htmlIndex = htmlIndex.replace(script, '');
}

function formatHtml(startPath, filter) {

	if (!fs.existsSync(startPath)) return;

	var files = fs.readdirSync(startPath);
	for (var i = 0; i < files.length; i++) {
		var filename = path.join(startPath, files[i]);
		var stat = fs.lstatSync(filename);
		if (stat.isDirectory()) formatHtml(filename, filter);
		else if (filename.indexOf(filter) >= 0) {
			var extName = path.extname(filename);
			if (extName === filter) {
				filename = filename.replace(_dir, '');
				replaceLink(filename);
			}
		};
	};
};

var filePath = path.resolve(__dirname, 'dist/client/index.html');
_dir = path.resolve(__dirname, 'dist/client').concat('\\');
htmlIndex = fs.readFileSync(filePath, 'utf8');

formatHtml(_dir, '.css');
replaceLiveReload();
fs.writeFile(filePath, htmlIndex);

console.log('\x1b[33m', '------------------------------------------------------');
console.log('\x1b[33m', '	      BUILD PRODUCTION COMPLETED');
console.log('\x1b[33m', '------------------------------------------------------');
