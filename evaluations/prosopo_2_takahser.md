# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/prosopo.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [integration repo LICENSE](https://github.com/prosopo-io/integration/blob/5c19f41acf18866088104dab2995c68e10e05993/LICENSE), [demo-nft-marketplace repo LICENSE](https://github.com/prosopo-io/demo-nft-marketplace/blob/d22b0164b66be84d9fd3fa569961c41aa19587f7/LICENSE), [procaptcha-react repo License](https://github.com/prosopo-io/procaptcha-react/blob/8997c41c28c142de72290409623b3375d0781d77/LICENSE), [client-example LICENSE](https://github.com/prosopo-io/client-example/blob/7dbb4fd74bd72a7e02d5a4aedf6e84f9926a740b/LICENSE) | Apache 2.0 |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [React Prosopo Procaptcha Component Lib doc](https://github.com/prosopo-io/procaptcha-react/tree/8997c41c28c142de72290409623b3375d0781d77), [Prosopo example client docs](https://github.com/prosopo-io/client-example/tree/7dbb4fd74bd72a7e02d5a4aedf6e84f9926a740b), [Demo NFT Marketplace docs](https://github.com/prosopo-io/demo-nft-marketplace/tree/d22b0164b66be84d9fd3fa569961c41aa19587f7), [integration docs](https://github.com/prosopo-io/integration/tree/5c19f41acf18866088104dab2995c68e10e05993) | - |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [Testing Guide](https://github.com/prosopo-io/integration/tree/5c19f41acf18866088104dab2995c68e10e05993#running-tests) | See [Testing Guide Feedback](#testing-guide-feedback) |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Docker instructions](https://github.com/prosopo-io/integration/tree/5c19f41acf18866088104dab2995c68e10e05993#set-up-containers) | Note: There are multiple docker compose configurations, appliable for different scenarios. |
| 0e. | Article | <ul><li>[x] </li></ul> | [Article](https://github.com/prosopo-io/prosopo-website/blob/milestone2/src/articles/prosopo-completes-web3-foundation-grant.md) | - |
| 1 | Prosopo Client SDK | <ul><li>[x] </li></ul> | [Procaptcha repo](https://github.com/prosopo-io/procaptcha/tree/ef74c1b3bb9e4dd4c77ce9caf0ca6d0d77e05b96) | The demo dApps (delivery 2 & 3) both are built on the [Procaptcha npm package](https://www.npmjs.com/package/@prosopo/procaptcha). |
| 2 | Demo Website | <ul><li>[x] </li></ul> | [Minimal client example](https://github.com/prosopo-io/client-example/tree/7dbb4fd74bd72a7e02d5a4aedf6e84f9926a740b), [NFT Marketplace example](https://github.com/prosopo-io/demo-nft-marketplace/blob/d22b0164b66be84d9fd3fa569961c41aa19587f7/LICENSE) | Integration with the example dApps has been tested successfully. |
| 3 | Integration Repository	 | <ul><li>[x] </li></ul> | [Integration instructions](https://github.com/prosopo-io/integration/tree/develop#development-environment-set-up) | As already in M1, the integration repo ft. submodules makes it easy to spin up the infrastructure required for testing the delivery (tested), running automated tests (tested), deploying the infrastructure (not tested), etc. |

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

Though there are a lot of moving parts, the grantee made a lot of efforts to make it as easy to test as possible. Overall a solid delivery.

### Testing Guide Feedback

- tests pass, though there are some errors occuring when executing them:
    ```bash
    ~/repos/integration$ docker compose --file docker-compose.test.yml up -d
    [+] Running 2/2
    ⠿ Network integration_default        Created 0.0s
    ⠿ Container integration-substrate-1  Started 

    ~/repos/integration$ npm run test

    > integration@0.0.0 test
    > docker compose --file docker-compose.test.yml down && docker compose --file docker-compose.test.yml up -d substrate && npm -w @prosopo/provider run test

    [+] Running 2/2
    ⠿ Container integration-substrate-1  Removed 0.3s
    ⠿ Network integration_default        Removed 0.1s
    [+] Running 2/2
    ⠿ Network integration_default        Created 0.0s
    ⠿ Container integration-substrate-1  Started 0.4s

    > @prosopo/provider@0.0.0 test
    > cp -n env.test .env.test && NODE_ENV=test ts-mocha "tests/**/*.test.ts" --timeout 120000 && exit 0

    CAPTCHA FUNCTIONS
        ✔ Parses a captcha dataset correctly
        ✔ Captcha data set is hashed correctly
        ✔ Captcha solutions are successfully parsed
        ✔ Invalid Captcha solutions are not successfully parsed
        ✔ Text Captchas are successfully parsed
        ✔ Image Captchas are successfully parsed
        ✔ Invalid Captchas are not successfully parsed
        ✔ Captchas are hashed properly
        ✔ Captcha hashes are successfully added to dataset
        ✔ Empty dataset and tree throws error
        ✔ Matching captcha solutions are correctly compared, returning true
        ✔ Non-matching captcha solutions are correctly compared, returning false
        ✔ Mismatched length captcha solutions returns false
        ✔ Captchas with mismatching solution lengths are marked as incorrect
        ✔ Two captchas are correctly compared when solutions and captchaIds are identical
        ✔ Two captchas are correctly compared when solutions and captchaIds are different
        ✔ Mismatched captchas are correctly compared
        ✔ Captchas with zero length solutions are automatically assumed to be correct
        ✔ Captchas with no solutions are automatically assumed to be correct
        ✔ Pending request hash is calculated properly
        ✔ Computes a captcha solution hash correctly

    CONTRACT HELPERS
        ✔ Unwrap function properly unwraps JSON
        ✔ Properly encodes `Hash` arguments when passed unhashed

    CONTRACT WRAPPER
        ✔ Gets the contract method from the ABI when method name is valid

    ********************* ERROR *********************

    Invalid contract method ProsopoContractError@contractMethodName: Invalid contract method
        at ProsopoContractApi.getContractMethod (/home/seraya/repos/integration/packages/contract/dist/contract/interface.js:147:15)
        at /home/seraya/repos/integration/packages/provider/tests/contract/interface.test.ts:42:25
        at Proxy.assertThrows (/home/seraya/repos/integration/node_modules/chai/lib/chai/core/assertions.js:2648:7)
        at Proxy.methodWrapper (/home/seraya/repos/integration/node_modules/chai/lib/chai/utils/addMethod.js:57:25)
        at doAsserterAsyncAndAddThen (/home/seraya/repos/integration/node_modules/chai-as-promised/lib/chai-as-promised.js:289:22)
        at Proxy.<anonymous> (/home/seraya/repos/integration/node_modules/chai-as-promised/lib/chai-as-promised.js:255:20)
        at Proxy.overwritingMethodWrapper (/home/seraya/repos/integration/node_modules/chai/lib/chai/utils/overwriteMethod.js:78:33)
        at Context.<anonymous> (/home/seraya/repos/integration/packages/provider/tests/contract/interface.test.ts:43:20)
        at callFn (/home/seraya/repos/integration/node_modules/mocha/lib/runnable.js:366:21)
        at Test.Runnable.run (/home/seraya/repos/integration/node_modules/mocha/lib/runnable.js:354:5)
        at Runner.runTest (/home/seraya/repos/integration/node_modules/mocha/lib/runner.js:666:10)
        at /home/seraya/repos/integration/node_modules/mocha/lib/runner.js:789:12
        at next (/home/seraya/repos/integration/node_modules/mocha/lib/runner.js:581:14)
        at /home/seraya/repos/integration/node_modules/mocha/lib/runner.js:591:7
        at next (/home/seraya/repos/integration/node_modules/mocha/lib/runner.js:474:14)
        at Immediate._onImmediate (/home/seraya/repos/integration/node_modules/mocha/lib/runner.js:559:5)
        at processImmediate (node:internal/timers:464:21)
        ✔ Throws an error when method name is invalid
        ✔ Gets the storage key from the ABI

    ENV TESTS
        ✔ Initiliases an environment

    ERRORS

    ********************* ERROR *********************

    undefined ProsopoEnvError: This is a bad request
        at Context.<anonymous> (/home/seraya/repos/integration/packages/provider/tests/errors.test.ts:24:26)
        at callFn (/home/seraya/repos/integration/node_modules/mocha/lib/runnable.js:366:21)
        at Test.Runnable.run (/home/seraya/repos/integration/node_modules/mocha/lib/runnable.js:354:5)
        at Runner.runTest (/home/seraya/repos/integration/node_modules/mocha/lib/runner.js:666:10)
        at /home/seraya/repos/integration/node_modules/mocha/lib/runner.js:789:12
        at next (/home/seraya/repos/integration/node_modules/mocha/lib/runner.js:581:14)
        at /home/seraya/repos/integration/node_modules/mocha/lib/runner.js:591:7
        at next (/home/seraya/repos/integration/node_modules/mocha/lib/runner.js:474:14)
        at Immediate._onImmediate (/home/seraya/repos/integration/node_modules/mocha/lib/runner.js:559:5)
        at processImmediate (node:internal/timers:464:21)
        ✔ Returns 500 for a BadRequest

    PROVIDER MERKLE TREE
        ✔ Tree contains correct leaf hashes when computing leaf hashes
        ✔ Tree root is correct when computing leaf hashes
        ✔ Tree proof works when computing leaf hashes
        ✔ Tree contains correct leaf hashes when not computing leaf hashes
        ✔ Tree root is correct when not computing leaf hashes
        ✔ Tree proof works when not computing leaf hashes
        ✔ Tree proof works when there is only one leaf

    CONTRACT TASKS
        ✔ Provider registration (119ms)
        ✔ Provider update (258ms)
        ✔ Provider add dataset (288ms)
        ✔ Inactive Provider cannot add dataset (204ms)

    ********************* ERROR *********************

    ProviderInsufficientFunds ProsopoContractError@providerAddDataset: ProviderInsufficientFunds
        at handleContractCallOutcomeErrors (/home/seraya/repos/integration/packages/contract/dist/contract/helpers.js:73:19)
        at ProsopoContractApi.<anonymous> (/home/seraya/repos/integration/packages/contract/dist/contract/interface.js:126:59)
        at Generator.next (<anonymous>)
        at fulfilled (/home/seraya/repos/integration/node_modules/tslib/tslib.js:115:62)
        at processTicksAndRejections (node:internal/process/task_queues:96:5) [
    Uint8Array(32) [
        34, 224, 185, 143,   1, 123, 128, 107,
        185, 155,  31,  79, 188,  49,   4, 128,
        26,  86, 109, 212,  84, 180, 162,  10,
        220, 123, 216, 248,   6,  26, 139, 143
    ]
    ]
        ✔ Provider approve (862ms)
        ✔ Provider disapprove (779ms)
        ✔ Timestamps check (798ms)
        ✔ Provider details (286ms)
        ✔ Provider accounts (296ms)
        ✔ Dapp registration (74ms)
        ✔ Dapp is active (257ms)
        ✔ Dapp details (187ms)
        ✔ Dapp fund (306ms)
        ✔ Dapp user commit (970ms)
        ✔ Dapp accounts (184ms)
        ✔ Captchas are correctly formatted before being passed to the API layer (396ms)
        ✔ Captcha proofs are returned if commitment found and solution is correct (1052ms)
        ✔ Validates the received captchas length (907ms)
        ✔ Builds the tree and gets the commitment (1183ms)
        ✔ BuildTreeAndGetCommitment throws if commitment does not exist (637ms)

    ********************* ERROR *********************

    CaptchaSolutionCommitmentDoesNotExist ProsopoContractError@getCaptchaSolutionCommitment: CaptchaSolutionCommitmentDoesNotExist
        at handleContractCallOutcomeErrors (/home/seraya/repos/integration/packages/contract/dist/contract/helpers.js:73:19)
        at ProsopoContractApi.<anonymous> (/home/seraya/repos/integration/packages/contract/dist/contract/interface.js:126:59)
        at Generator.next (<anonymous>)
        at fulfilled (/home/seraya/repos/integration/node_modules/tslib/tslib.js:115:62)
        at runMicrotasks (<anonymous>)
        at processTicksAndRejections (node:internal/process/task_queues:96:5) [
    '0x74aee18ae26c74e115ca7cabb872e43c0a1d43e9472fc657928f11d092cb4c92'
    ]
        ✔ Validates the Dapp User Solution Request is Pending (641ms)
        ✔ Get random captchas and request hash (623ms)
        ✔ Validate provided captcha dataset (255ms)

    ********************* ERROR *********************

    ProviderInsufficientFunds ProsopoContractError@providerAddDataset: ProviderInsufficientFunds
        at handleContractCallOutcomeErrors (/home/seraya/repos/integration/packages/contract/dist/contract/helpers.js:73:19)
        at ProsopoContractApi.<anonymous> (/home/seraya/repos/integration/packages/contract/dist/contract/interface.js:126:59)
        at Generator.next (<anonymous>)
        at fulfilled (/home/seraya/repos/integration/node_modules/tslib/tslib.js:115:62)
        at runMicrotasks (<anonymous>)
        at processTicksAndRejections (node:internal/process/task_queues:96:5) [
    Uint8Array(32) [
        34, 224, 185, 143,   1, 123, 128, 107,
        185, 155,  31,  79, 188,  49,   4, 128,
        26,  86, 109, 212,  84, 180, 162,  10,
        220, 123, 216, 248,   6,  26, 139, 143
    ]
    ]
        ✔ Validate provided captcha dataset - fail (712ms)
        ✔ Provider unstake (249ms)
        ✔ Provider deregister (253ms)
        ✔ Calculate captcha solution on the basis of Dapp users provided solutions (283ms)
    ```
- the demo-nft-marketplace app was successfully smoke-tested, using the infrastructure provided in the integration repo
- one thing to note when testing the demo-nft-marketplace or client-example apps is to make sure, only one Substrate-compatible wallet extension is active since otherwise the captchas can't successfully submitted to the network
