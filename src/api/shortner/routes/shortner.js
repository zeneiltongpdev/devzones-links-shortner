'use strict';

/**
 * shortner router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::shortner.shortner');
