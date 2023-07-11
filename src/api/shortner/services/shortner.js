'use strict';

/**
 * shortner service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::shortner.shortner');
