const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');

gulp.task('nunjucks', function() {
    // Gets .html and .nunjucks files in pages
    return gulp.src('pages/**/*.+(html|nunjucks|njk)')
    // Renders template with nunjucks
    .pipe(nunjucksRender({
        path: ['templates']
      }))
    // output files in app folder
    .pipe(gulp.dest('dist'))
  });
  