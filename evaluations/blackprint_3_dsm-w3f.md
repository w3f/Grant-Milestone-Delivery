
# Evaluation

- **Status:** Accepted
- **Application Document:** [Blackprint Application](https://github.com/w3f/Grants-Program/pull/774) 
- **Milestone:** 3
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** https://github.com/w3f/Grant-Milestone-Delivery/pull/405

**Deliverables**

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul>| [LICENSE](https://github.com/Blackprint/nodes-polkadot.js/blob/1fececa0d17821fa11165f76cb86a5014129eea2/LICENSE) | MIT License - OK |
| 0b. | Documentation | <ul><li>[x] </li></ul>| 1. [Documentation for Blackprint](https://blackprint.github.io/#page/sketch/1#;bpdocs:Home)<br>2. [Documentation for the module](https://github.com/Blackprint/nodes-polkadot.js/blob/1fececa0d17821fa11165f76cb86a5014129eea2/README.md) | Ok |
| 0c. | Testing Guide | <ul><li>[x] </li></ul>| 1. [Test file](https://github.com/Blackprint/nodes-polkadot.js/blob/1fececa0d17821fa11165f76cb86a5014129eea2/tests/node.test.js)<br>2. [Guide to run the test](https://github.com/Blackprint/nodes-polkadot.js/blob/1fececa0d17821fa11165f76cb86a5014129eea2/README.md#running-test) | OK |
| 0d. | Docker | <ul><li>[x] </li></ul>| 1. [Docker file](https://github.com/Blackprint/nodes-polkadot.js/tree/1fececa0d17821fa11165f76cb86a5014129eea2/.github/docker) | Ok |
| 1. | Nodes | <ul><li>[x] </li></ul>| 1. [Source files](https://github.com/Blackprint/nodes-polkadot.js/tree/1fececa0d17821fa11165f76cb86a5014129eea2/src)<br>2. [Guide for export schema from editor to Node.js/Deno](https://github.com/Blackprint/nodes-polkadot.js/blob/1fececa0d17821fa11165f76cb86a5014129eea2/README.md#run-in-different-environment) | Minor code quality reviews. Ok now.|
| 2. | Package | <ul><li>[x] </li></ul>| [NPM Registry](https://www.npmjs.com/package/@blackprint/nodes-polkadot.js) | ok |

## General Notes

License – MIT – Ok.

### Documentation and Testing Guide:

User documentation is extensive and well-written. All tutorials and examples that I tried from documentation worked well. 

### Automated Tests:

Unit tests are passing and with acceptable coverage 88.64%. Update: Now the coverage is 95.5%.

Some modules have low coverage like Convert (50%), Keyring (60.31%), NodeToast.js (59.72%), Transaction/DryRun.js (39.13%), please review and see if improvements could be performed. Update: The coverage was increased to Convert (93.1%), Keyring (92.3%), NodeToast.js (93.5%), Transaction/DryRun.js (removed).

Running unit tests without docker, the tests sometimes pass sometimes fails. I think something is not cleaned between runs because the first time I ran all test passed, then the second time some failed and when I ran again they passed. Update: Now all tests passed, they depends of test blockchain state but this is not a problem. 

Node and Deno testing (system testing using docker) are working. 

### Exploratory testing:

The example presented in the tutorial is very simple and worked as expected. I did the tutorial to export the model from blackprint and import into a new JS/Deno project.

Is there some browser/plugin requirement for using blackprint? In Firefox on Linux got the error below, using Opera this error didn’t show up. Update: Problem Fixed.

![image](https://user-images.githubusercontent.com/112647953/190692146-5542fd38-7774-46ac-b0bc-ec0a07333fa7.png)

I was able to install the npm package in a new project without problems.

### Static Analysis:

I used eslint to evaluate that, with 227 warnings generated. When reading those warning mostly are by variables not defined or assigned and not used. However, reading the code seems that some imports are commented. Those variables are injected in some way? I think would be nice to review eslint results and fix the warnings that make sense.

Update: Now 32 warnings but all them seems because of eslint cannot handle the injection/compilation approach of blackprint. No problems here. 

### Code documentation:

There is reasonable code documentation and I was able to generate html from it with jsdoc.
