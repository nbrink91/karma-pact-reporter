'use strict';

const pact = require('@pact-foundation/pact-node');
const fs = require('fs');
const rmdir = require('rimraf');

/**
 * @param baseReporterDecorator default decorator that includes default Karma events
 * @param config pactReporter from Karma config
 * @param logger console logger
 * @constructor
 */
const PactReporter = function (baseReporterDecorator, config, logger) {
    const log = logger.create('reporter.pact');
    baseReporterDecorator(this);

    let failure = false;

    // Create the publisher to make sure the configuration is valid before running.
    const publisher = pact.Publisher.create(config);

    // Mark the test as a failure if one fails.
    this.specFailure = function () {
        failure = true;
    };

    // On Karma Exit
    this.onExit = function (done) {
        // Publish the Pact file on success.
        if (!failure) {
            publisher.publish();
        } else {
            log.error('Pact not uploaded to Pact Broker due to a spec failure.');
        }

        // Configuration to remove files.
        if (config.deletePactFilesOrDirs) {
            removeFiles(config.pactFilesOrDirs);
        }

        done();
    };

    /**
     * Remove files recursively.
     * @param filesOrDirs Array of files to remove.
     */
    function removeFiles(filesOrDirs) {
        filesOrDirs.forEach(function (fileOrDir) {
            rmdir(fileOrDir, [], function(err) {
                if (err) {
                    log.error(err);
                } else {
                    log.info('Successfully removed file or directory ' + fileOrDir + '.')
                }
            });
        })
    }
};

PactReporter.$inject = ['baseReporterDecorator', 'config.pactReporter', 'logger'];

module.exports = {
    'reporter:pact': ['type', PactReporter]
};
