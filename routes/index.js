module.exports = function (app) {
  app.use('/healtheintent', require('./HealthIntentRoutes'));
  // Optional fallthrough error handler
  app.use(function onError(err, req, res, next) {
    // The error id is attached to `res.sentry` to be returned
    // and optionally displayed to the user for support.
    res.statusCode = 500;
    res.end(err + '\n');
  });
}
