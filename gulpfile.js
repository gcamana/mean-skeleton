var gulp = require('gulp'),
	argv = require('yargs').argv,
	iconFont = require('gulp-iconfont'),
	fs = require('fs'),
	iconfontCss = require('gulp-css-iconfont');

gulp.task('font-icons', function () {
	if (argv.fontName && typeof argv.fontName !== 'string') {
		console.log('------------------------------------');
		console.log('--fontName <name>: it is required.');
		console.log('------------------------------------');
	} else {
		var _dir = 'client/assets', fontName = argv.fontName;
		gulp.src(_dir + '/my_icons/**/*.svg')
			.pipe(iconfontCss({
				fontName: fontName,
				cssSelector: `.${fontName}`,
				separator: '-',
				targetPath: `../../../../${_dir}/scss/_${fontName}-icons.scss`,
				fontPath: `../assets/fonts/${fontName}-icons/`
			}))
			.pipe(iconFont({
				fontName: fontName,
				prependUnicode: true,
				formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
			}))
			.pipe(gulp.dest(`${_dir}/fonts/${fontName}-icons/`));
	}
});

gulp.task('iconScss2appScss', function () {
	if (argv.fontName && typeof argv.fontName !== 'string') {
		console.log('------------------------------------');
		console.log('--fontName <name>: it is required.');
		console.log('------------------------------------');
	} else {
		var style = `@import "../assets/scss/${argv.fontName}-icons";`;
		var file = fs.readFileSync('client/app/app.component.scss', 'utf8');
		var index = file.indexOf(style);
		if (index < 0) file = style.concat('\n' + file);
		fs.writeFile('client/app/app.component.scss', file);
	}
});
