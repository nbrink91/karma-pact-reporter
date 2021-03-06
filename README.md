# Karma Pact Reporter
[Pact Node](https://github.com/pact-foundation/pact-node) wrapper for a Karma Reporter to allow for uploading of Pact files to the Broker when complete.

[![Travis](https://img.shields.io/travis/nbrink91/karma-pact-reporter.svg?style=flat-square&logo=travis)](https://travis-ci.org/pact-foundation/pact-php)
[![npm](https://img.shields.io/npm/v/@mattersight/karma-pact-reporter.svg?style=flat-square)](https://www.npmjs.com/package/@mattersight/karma-pact-reporter)
[![npm](https://img.shields.io/npm/l/@mattersight/karma-pact-reporter.svg?style=flat-square)](https://www.npmjs.com/package/@mattersight/karma-pact-reporter)
[![npm](https://img.shields.io/npm/dt/@mattersight/karma-pact-reporter.svg?style=flat-square)](https://www.npmjs.com/package/@mattersight/karma-pact-reporter)
[![npm](https://img.shields.io/npm/dw/@mattersight/karma-pact-reporter.svg?style=flat-square)](https://www.npmjs.com/package/@mattersight/karma-pact-reporter)

## Install with NPM

```bash
npm i @mattersight/karma-pact-reporter --save-dev
```

## Set up Karma Configuration

Add 'pact' to the list of reporters.

```js
[
    {
        reporters: ['pact']
    }
]
```

Add a pactReporters section and configure according to the [Pact Node Broker Publishing](https://github.com/pact-foundation/pact-node#pact-broker-publishing) section.

This library does include one extra option.

Option | Type | Purpose | Default
---|---|---|---
deletePactFilesOrDirs | bool | Deletes all files in the pactFilesOrDirs array | false

Here is an example configuration:

```js
[
    {
        pactReporter: {
            pactBroker: process.env.PACT_BROKER_HOST || 'http://localhost',
            consumerVersion: process.env.PACT_CONSUMER_VERSION || "0.0.1",
            pactFilesOrDirs: [__dirname + '/pact'],
            deletePactFilesOrDirs: true
        }
    }
]
```