# Milestone Delivery :mailbox:

**
The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform)
has been filled out correctly for this milestone and the delivery is according to the
official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md)
.**

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/prosopo.md
* **Milestone Number:** 2

## Context 

This delivery builds on the smart contract and command line Provider node built in Milestone 1 to deliver a fully
functional CAPTCHA system that can be integrated with Polkadot smart contracts via web User Interface components.

## Deliverables

| Number | Deliverable            | Description                                                                                                                                                                                                                                                                                                      | Links                                                                                                                                             | Notes                                                                                                                       |
|--------|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| 0a.    | License	GPLv3          |                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                   |
| 0b.    | Documentation          | Documentation that explains how to include the Captcha Client in a DApp website and smart contract.                                                                                                                                                                                                              | https://github.com/prosopo-io/client-example , https://github.com/prosopo-io/procaptcha-react, https://github.com/prosopo-io/demo-nft-marketplace | Documentation is a combination of various package READMEs                                                                   |
| 0c.    | Testing Guide          | Core function unit tests to ensure functionality and robustness. We will describe how to run these tests in the project README.                                                                                                                                                                                  | https://github.com/prosopo-io/integration#running-tests                                                                                           | The frontend components are covered by integration tests in the provider package.                                           |
| 0d.    | Docker                 | Dockerfile(s) that can be used to test all the functionality delivered with this milestone. These come as a single docker-compose file for all three services (Prosopo Client SDK, Provider Service SDK, Prosopo Contract)                                                                                       | https://github.com/prosopo-io/integration/blob/main/docker-compose.demo.yml                                                                       | This docker file can be used to start a pre-populated substrate node, a mongo db, and a provider node running a captcha API |
| 0e.    | Article                | A demo website on GitHub pages that shows how to implement the Captcha Client and create an accompanying article about this.                                                                                                                                                                                     | https://github.com/prosopo-io/prosopo-website/blob/milestone2/src/articles/prosopo-completes-web3-foundation-grant.md                             |                                                                                                                             |
| 1      | Prosopo Client SDK     | This is a frontend JavaScript client presented to a DApp User that will: <ul><li>check account status</li><li>request captchas from the Prosopo Provider Service</li><li>submit solutions</li><li>validate captcha data with on-chain commitment from Provider validate solution was approved on-chain</li></ul> | https://github.com/prosopo-io/procaptcha                                                                                                          |                                                                                                                             |
| 2      | Demo Website           | A demo website on that shows how to implement the Captcha Client.                                                                                                                                                                                                                                                | https://nft.demo.prosopo.io/                                                                                                                      | Deployed on netlify                                                                                                         |
| 3      | Integration Repository | Scripts to run all components in developer environment                                                                                                                                                                                                                                                           | https://github.com/prosopo-io/integration/tree/develop#development-environment-set-up                                                             |


## Evaluation Plan

Below you will find additional information to make it clear on how to proceed with the evaluation.

### 0b. Documentation

There is a repository called [client-example](https://github.com/prosopo-io/client-example) that demonstrates how to
integrate the [procaptcha-react](https://github.com/prosopo-io/procaptcha-react) package into a react app.
procaptcha-react is a wrapper of a package called [procaptcha](https://github.com/prosopo-io/procaptcha), which is an
interface to the [provider](https://github.com/prosopo-io/provider) API and
the [provider](https://github.com/prosopo-io/protocol) smart contract. The documentation consists of the READMEs in
these repositories.

### 0c. Testing Guide

Due to the nature of blockchain development, there was not much we could do in terms of unit tests for the frontend, as
almost every operation depends on either the [provider](https://github.com/prosopo-io/provider) API or a contract
query/transaction. Therefore, there are minimal tests in the [procaptcha](https://github.com/prosopo-io/procaptcha)
repository that test the state and context reducers. All other functionality is covered by the integration tests that
are part of the [provider](https://github.com/prosopo-io/provider#tests) repository.

### 0d. Docker

The [demo docker file](https://github.com/prosopo-io/integration/blob/main/docker-compose.demo.yml) is the most feature
filled docker file we have. It starts a pre-populated substrate node, a mongo db, and
a [provider](https://github.com/prosopo-io/provider) node running a captcha API. The developer is then expected to run
either [client-example](https://github.com/prosopo-io/client-example#how-to-run-locally)
or [demo-nft-marketplace](https://github.com/prosopo-io/demo-nft-marketplace#how-to-run-locally) after setting their
environment variables.

### 0e. Article

https://github.com/prosopo-io/prosopo-website/blob/milestone2/src/articles/prosopo-completes-web3-foundation-grant.md

### 1 Prosopo Client SDK

[procaptcha](https://github.com/prosopo-io/procaptcha) is the main package that communicates with
the [provider](https://github.com/prosopo-io/provider) API and the
[protocol](https://github.com/prosopo-io/protocol) smart contract. This package is designed to be used by a user
interface package, such as [procaptcha-react](https://github.com/prosopo-io/procaptcha-react).

### 2 Demo Website

[https://nft.demo.prosopo.io](https://nft.demo.prosopo.io) is a fully fledged NFT marketplace that demonstrates how the
captcha UI works in a website and in a contract simultaneously. The website is protected by a captcha user interface -
the "Select All" images captcha. The PSP34 contract in the background is protected by
the [protocol](https://github.com/prosopo-io/protocol) smart contract by using the `is_human` function.

### 3 Integration Scripts

The [developer set up instructions](https://github.com/prosopo-io/integration/tree/develop#development-environment-set-up)
can be used to evaluate the integration repository.
