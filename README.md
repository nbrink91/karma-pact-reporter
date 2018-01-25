# Karma Pact Reporter
[Pact Node](https://github.com/pact-foundation/pact-node) wrapper for a Karma Reporter to allow for uploading of Pact files to the Broker when complete.

## Install with NPM

```bash
npm i @mattersight/karma-pact-reporter --save-dev
```

## Set up Karma Configuration

Add 'pact' to the list of reporters.

```json
reporters: ['pact']
```

Add a pactReporters section and configure according to the [Pact Node Broker Publishing](https://github.com/pact-foundation/pact-node#pact-broker-publishing) section.

```json
pactReporter: {
    pactBroker: 'http://localhost',
    consumerVersion: '1.0.0',
    pactFilesOrDirs: [
        'pact\\'
    ]
}
```