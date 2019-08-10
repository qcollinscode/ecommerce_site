const gulp = require('gulp'),
      gutil = require('gulp-util'),
      phpServer = require('php-server');

(async () => {
    const server = await phpServer();
    console.log(`PHP server running at ${server.url}`)
})();

gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});
