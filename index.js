'use strict';

var pact = require('@pact-foundation/pact-node');

var PactReporter = function (config) {
    pact.Publisher.create(config).publish();
};

PactReporter.$inject = ['config.pactReporter'];

module.exports = {
    'reporter:pact': ['type', PactReporter]
};
