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
| 0a.    | License	GPLv3          |                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                   | Licenses are actually varied per repo                                                                                       |
| 0b.    | Documentation          | Documentation that explains how to include the Captcha Client in a DApp website and smart contract.                                                                                                                                                                                                              | https://github.com/prosopo-io/client-example , https://github.com/prosopo-io/procaptcha-react, https://github.com/prosopo-io/demo-nft-marketplace | Documentation is a combination of various package READMEs                                                                   |
| 0c.    | Testing Guide          | Core function unit tests to ensure functionality and robustness. We will describe how to run these tests in the project README.                                                                                                                                                                                  | https://github.com/prosopo-io/integration#running-tests                                                                                           | The frontend components are covered by integration tests in the provider package.                                           |
| 0d.    | Docker                 | Dockerfile(s) that can be used to test all the functionality delivered with this milestone. These come as a single docker-compose file for all three services (Prosopo Client SDK, Provider Service SDK, Prosopo Contract)                                                                                       | https://github.com/prosopo-io/integration/blob/main/docker-compose.demo.yml                                                                       | This docker file can be used to start a pre-populated substrate node, a mongo db, and a provider node running a captcha API |
| 0e.    | Article                | A demo website on GitHub pages that shows how to implement the Captcha Client and create an accompanying article about this.                                                                                                                                                                                     | https://github.com/prosopo-io/prosopo-website/blob/milestone2/src/articles/prosopo-completes-web3-foundation-grant.md                             |                                                                                                                             |
| 1      | Prosopo Client SDK     | This is a frontend JavaScript client presented to a DApp User that will: <ul><li>check account status</li><li>request captchas from the Prosopo Provider Service</li><li>submit solutions</li><li>validate captcha data with on-chain commitment from Provider validate solution was approved on-chain</li></ul> | https://github.com/prosopo-io/procaptcha                                                                                                          |                                                                                                                             |
| 2      | Demo Website           | A demo website on that shows how to implement the Captcha Client.                                                                                                                                                                                                                                                | https://nft.demo.prosopo.io/                                                                                                                      | Deployed on netlify                                                                                                         |
| 3      | Integration Repository | Scripts to run all components in developer environment                                                                                                                                                                                                                                                           | https://github.com/prosopo-io/integration/tree/develop#development-environment-set-up                                                             |

## Evaluation Plan

Below you will find additional information to make it clear on how to proceed with the evaluation.

### Milestone 2 Branch

Please use the [`milestone2`](https://github.com/prosopo-io/integration/tree/milestone2) branch of our integration
repository when evaluating this milestone. This branch contains references to specific commits of the submodules
contained within it. When you sync this repository you should receive the following commits for each submodule.

```bash
> git submodule update --init --recursive --force --checkout
Submodule path 'client-example': checked out '7268766bb1b3fcfe3cbdf18b1ad6ba8d62994586'
Submodule path 'dapp-example': checked out '6ce098640abc6100b0e8d9d08184da7a418c9bc6'
Submodule path 'demos/demo-nft-marketplace': checked out '7978433306fec284cf024452eb3d5134953dac0f'
Submodule path 'packages/contract': checked out '31a52da278164296a064adfe19a0fc36033a351b'
Submodule path 'packages/procaptcha': checked out 'ef74c1b3bb9e4dd4c77ce9caf0ca6d0d77e05b96'
Submodule path 'packages/procaptcha-react': checked out '8997c41c28c142de72290409623b3375d0781d77'
Submodule path 'packages/provider': checked out 'f6a454fb194fe877543c3549dbf8c99ed08e447b'
Submodule path 'protocol': checked out '027eb4e1c1da1d8fdec0928f8a4eec09f0f81edb'
```

Please use these commits for evaluation of the milestone.

### 0a. Licenses

Licenses differ per package. All licenses are either MIT, GPLv3, or Apache License 2.0.

### 0b. Documentation

There is a repository called [client-example](https://github.com/prosopo-io/client-example) that demonstrates how to
integrate the [procaptcha-react](https://github.com/prosopo-io/procaptcha-react) package into a React app.
Procaptcha-react is a wrapper of [procaptcha](https://github.com/prosopo-io/procaptcha), which is an interface to
the [provider](https://github.com/prosopo-io/provider) API and the [protocol](https://github.com/prosopo-io/protocol)
smart contract. The documentation consists of the READMEs in these repositories. The architecture
is [documented in our proposal](https://github.com/w3f/Grants-Program/blob/master/applications/prosopo.md#24-architecture)
.

### 0c. Testing Guide

Due to the nature of blockchain development, there was not much we could do in terms of unit tests for the frontend, as
almost every operation depends on either the [provider](https://github.com/prosopo-io/provider) API or a contract
query/transaction. Therefore, there are minimal unit tests in the [procaptcha](https://github.com/prosopo-io/procaptcha)
repository that test the state and context reducers. All other functionality is covered by the integration tests that
are part of the [provider](https://github.com/prosopo-io/provider#tests) repository.

### 0d. Docker

The [demo docker file](https://github.com/prosopo-io/integration/blob/milestone2/docker-compose.demo.yml) is the most feature
filled docker file we have. It starts a pre-populated substrate node, a mongo db, and
a [provider](https://github.com/prosopo-io/provider) node running a captcha API. The developer is then expected to run
either [client-example](https://github.com/prosopo-io/client-example#how-to-run-locally)
or [demo-nft-marketplace](https://github.com/prosopo-io/demo-nft-marketplace#how-to-run-locally).

### 0e. Article

https://github.com/prosopo-io/prosopo-website/blob/milestone2/src/articles/prosopo-completes-web3-foundation-grant.md

### 1 Prosopo Client SDK

[procaptcha](https://github.com/prosopo-io/procaptcha) is the main package that communicates with
the [provider](https://github.com/prosopo-io/provider) API and the
[protocol](https://github.com/prosopo-io/protocol) smart contract. Procaptcha is designed to be used by a user
interface package, such as [procaptcha-react](https://github.com/prosopo-io/procaptcha-react).

### 2 Demo Website

[https://nft.demo.prosopo.io](https://nft.demo.prosopo.io) is a fully fledged NFT marketplace that demonstrates how the
captcha UI works in a website and in a contract simultaneously. The website is protected by a captcha user interface -
the "Select All" images captcha. The PSP34 contract in the background is protected by
the [protocol](https://github.com/prosopo-io/protocol) smart contract by using the `is_human` function.

### 3 Integration Scripts

The [developer set up instructions](https://github.com/prosopo-io/integration/tree/develop#development-environment-set-up)
can be used to evaluate the integration repository.
