const express = require('express');
const routes = require('../routes');
const config = require('../config');
const cache = require('./cache');

exports.load = function (app) {
  // Transforms the raw string of req.body into json
  app.use(express.json());
  // Load API routes
  app.use(config.api.prefix, routes);

  /// catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err['status'] = 404;
    next(err);
  });

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });
};

exports.loadData = function () {
  cache.loadAllDataToCache();
};
