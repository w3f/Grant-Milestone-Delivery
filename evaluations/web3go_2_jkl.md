# Evaluation


- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Web3Go.md 
- **Milestone:** 2
- **Kusama Identity:** Ha27MB4gKH36ieRPa1T1ASqhUz4sVxMoVmK7o5CS6tXDqjW
- **Previously successfully merged evaluation:** https://github.com/UniversalDot/Grant-Milestone-Delivery/blob/master/evaluations/crossbow_1_jkl.md


| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ------- | ------- | -- |------------------- |
| 0a. | License | <ul><li>[x] </li></ul>| [link](https://github.com/web3go-xyz/web3go-xyz-v2/blob/develop/LICENSE) | Uses Correct License. Please add year and copyright owner on line 189 of your license.|
| 0b. | Documentation |<ul><li>[x] </li></ul>| [link](https://web3go.notion.site/M2-Delivery-Web3Go-V2-0f083900301a451a8e60042a3755a03a)| Easy to follow tutorials regarding basic functionality. Inline documentation could be further improved and README documentation could be extended as well.|
| 0c. | Testing Guide |<ul><li>[x] </li></ul>| [link](https://web3go.notion.site/End-to-End-Testing-for-local-build-c544ecd080e6462ab423f3c2778fe8b1)| Testing guide usually refers to a guide on how to run unit/e2e tests. What you are currently doing is manually testing the functionality. See point 3 in General Notes for more details.|
| 0d. | Docker |<ul><li>[x] </li></ul>| [link](https://hub.docker.com/layers/web3go/web3go/v2-alpha-0.3/images/sha256-b16a63f497936cf17a8d3f6ab5a6200854f5be957720715e82052b56c936ba99?context=explore)| Good. The only thing that perhaps can be improved is the large size of the docker image. This could be improved by using a different base image perhaps.|
| 0e. | Article |<ul><li>[x] </li></ul>|[link](https://web3go.medium.com/web3go-delivered-milestone-2-for-our-web3-foundation-grant-a5d03f6f26e1)| Article available on Medium |
| 1. | UI Module:support more charts in semi-automatic chart generation |<ul><li>[x] </li></ul>|[link](https://dev-v2.web3go.xyz)| Good. However, there can be many configurable options to graphs so perhaps the generation of these charts should be made more intuitive.|  
| 2. | UI Module:fully-automatic chart generation|<ul><li>[x] </li></ul>| [link](https://dev-v2.web3go.xyz) | It works. See point 6 below. |


## General Notes

1. You are exposing database passwords in plain text here: https://github.com/web3go-xyz/web3go-xyz-v2/blob/develop/v2-mvp/api-service-extend/ecosystem.config.js. Please consider using [Github Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets) to hide infromation that should not be publicly available.
2. Many of your npm packages have variabilities that could be resolved. See below.

```
25 vulnerabilities (4 moderate, 18 high, 3 critical)

To address issues that do not require attention, run:
  npm audit fix

To address all issues possible (including breaking changes), run:
  npm audit fix --force

Some issues need review, and may require choosing
a different dependency.
```
1.  You are not using automated tests in your code. Consider improving on this. What you are doing is manual tests. In the original application, you are not stating if the tests should be made automated or manual, so I will accept the delivery from my side.  In the future, consider using automated testing tools such as [Cypress](https://www.cypress.io/). If you are not familiar with automated tests, please read this [article](https://www.browserstack.com/guide/manual-vs-automated-testing-differences) that goes over the benefits of automated testing. Your current testing guide explains how to run a single e2e test, that can be automated.  
```
No tests found, exiting with code 1
Run with `--passWithNoTests` to exit with code 0
In web3go-xyz-v2/v2-mvp/api-service-extend/src
  299 files checked.
  testMatch:  - 0 matches
  testPathIgnorePatterns: /node_modules/ - 299 matches
  testRegex: .*\.spec\.ts$ - 0 matches
Pattern:  - 0 matches
```
4. Docker image does not work on Mac M1 architecture.
```
api-service-extend % docker run -d -p 20080:80 --name web3go-v2-alpha-0.3 web3go/web3go:v2-alpha-0.3
WARNING: The requested image's platform (linux/amd64) does not match the detected host platform (linux/arm64/v8) and no specific platform was requested
1c1311b41c157be271274095279232855152ba4398549de0b7422b5407140a97
```
But works on Ubuntu 20.04
```
root@node1:~# docker run -d -p 20080:80 --name web3go-v2-alpha-0.3 web3go/web3go:v2-alpha-0.3                           
422bd3acf824369ccabb613e057910c91d02598c412e64ded92e10c84d2b857d                                                        
root@node1:~# docker ps                                                                                                 
CONTAINER ID   IMAGE                        COMMAND                  CREATED         STATUS         PORTS               
                                          NAMES                                                                         
422bd3acf824   web3go/web3go:v2-alpha-0.3   "/bin/bash -c /start…"   6 seconds ago   Up 3 seconds   5432/tcp, 6379/tcp, 
0.0.0.0:20080->80/tcp, :::20080->80/tcp   web3go-v2-alpha-0.3
```
5. The integration with PolkdotJS wallet works smoothly. Good job. 

6. I was able to generate a nice graph for fees.
![](https://i.imgur.com/gF6MHZf.png)

