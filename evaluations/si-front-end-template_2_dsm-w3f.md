# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/si-front-end-template.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul>| [Link](https://github.com/stojanov-igor/substrate-front-end-template/blob/material-design-update/LICENSE) |  |
| **0b.** | Documentation | <ul><li>[x] </li></ul>| [Link](https://github.com/stojanov-igor/substrate-front-end-template/blob/material-design-update/README.md) |   |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul>| [Sample Tests](https://github.com/stojanov-igor/substrate-front-end-template/blob/material-design-update/cypress/e2e/Integration-Tests/sample-tests.cy.js) |  |
| **0d.** | Docker | <ul><li>[x] </li></ul>| [Link](https://github.com/stojanov-igor/substrate-front-end-template/blob/material-design-update/Dockerfile) |  |
| 0e. | Article | <ul><li>[x] </li></ul>| [Link](https://medium.com/@igorstojanov/substrate-template-with-material-design-typescript-629465de6540) |  |
| 1. | Cards Module | <ul><li>[x] </li></ul>| [Link](https://github.com/stojanov-igor/substrate-front-end-template/blob/material-design-update/src/BlockNumber.tsx) |   |
| 2. | Table Module | <ul><li>[x] </li></ul>| [Link](https://github.com/stojanov-igor/substrate-front-end-template/blob/material-design-update/src/Balances.tsx) |  |
| 3. | Transfer Module | <ul><li>[x] </li></ul>| [Link](https://github.com/stojanov-igor/substrate-front-end-template/blob/material-design-update/src/Transfer.tsx) |   |
| 4. | Upgrade Runtime Module | <ul><li>[x] </li></ul>| [Link](https://github.com/stojanov-igor/substrate-front-end-template/blob/material-design-update/src/Upgrade.tsx) |   |
| 5. | Pallet Interactor | <ul><li>[x] </li></ul>| [Link](https://github.com/stojanov-igor/substrate-front-end-template/blob/material-design-update/src/Interactor.tsx)|   |
| 6. | Event Module | <ul><li>[x] </li></ul>| [Link](https://github.com/stojanov-igor/substrate-front-end-template/blob/material-design-update/src/Events.tsx) |  |

## Evaluation V4

### Pallet Interaction

I tested it again and it works as expected.

![image](https://github.com/dsm-w3f/Grant-Milestone-Delivery/assets/112647953/ceccfaec-9d26-4e48-9720-c529dd520e41)

The project has some minor problems related to the user interface, like the problem related to the copy icon alignment for the address. They don't affect the usability of the template, but it would be nice if someone polishes the interface in the future.

## Evaluation V3

### Pallet Interactor

I tested again, and I didn't have the runtime error. However, I still can't do a balance transfer using the pallet because the field in the UI only accept numbers, so I can't insert the account address. I changed the HTML on my browser to remove this limitation, and it worked as expected. 

The copy icon doesn't align correctly is a minor issue and I can accept the milestone this way, but please fix the the bug mentioned above, it should't be difficult to fix. 

## Evaluation V2

### License

According to this [comment](https://github.com/w3f/Grant-Milestone-Delivery/pull/1145#issuecomment-2006948660), the license is unlicensed for having the same license as the original software.

### Docker

Docker is now working without problems.

```
user@localhost:~/Documents/substrate-front-end-template$ docker run a2495a179757
(node:25) [DEP_WEBPACK_DEV_SERVER_ON_AFTER_SETUP_MIDDLEWARE] DeprecationWarning: 'onAfterSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:25) [DEP_WEBPACK_DEV_SERVER_ON_BEFORE_SETUP_MIDDLEWARE] DeprecationWarning: 'onBeforeSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
Starting the development server...
Compiled successfully!
You can now view substrate-front-end-template in the browser.
  Local:        	http://localhost:8000/substrate-front-end-template
  On Your Network:  http://172.17.0.2:8000/substrate-front-end-template
Note that the development build is not optimized.
To create a production build, use yarn build.
webpack compiled successfully
No issues found.
Compiling...
Compiled successfully!
webpack compiled successfully
No issues found.
```

### Testing

The cypress tests now have a better practice for selecting the elements after this [commit](https://github.com/stojanov-igor/substrate-front-end-template/commit/b08888c8fb618e0c9685d4da5e9c367c7999e74b). I understand it as only a sample and not to test all functionalities.

### Table module

Regarding the alignment problem, I was using Firefox but it occurs on Chrome too. I could notice this in some addresses. If you use the [substrate node template](https://github.com/substrate-developer-hub/substrate-node-template) you should observe it on the alice_stash. It is a small problem, and I don't see it as critical for the approval of this milestone like the problems below.

### Pallet Interactor

I tested this again, this time on Chrome, and I noticed the field accepts only numbers. If I use only numbers, the button becomes available. Using Firefox, I can use characters on the field, but the button doesn't become available only if I use numbers.

I discovered another problem. When I use an unexpected input like the print below, the page receives a runtime error. In the Original, it wouldn't show this error but would show "sending..." until others submit.


### Article

The correct link to the Article is missing. The article is a text explaining your project for potential users. Usually grantees publish articles at [Medium](https://medium.com/).

![Captura de tela de 2024-03-20 09-42-43](https://github.com/dsm-w3f/Grant-Milestone-Delivery/assets/112647953/0b2f1487-a79e-402b-bf91-45f6e25a626b)

![Screenshot 2024-03-20 at 09-43-53 Substrate Front End Template](https://github.com/dsm-w3f/Grant-Milestone-Delivery/assets/112647953/4379e6f2-1e84-48d2-9811-f84cc38eabf1)



## Evaluation V1



### License

In the [application](https://github.com/w3f/Grants-Program/blob/master/applications/si-front-end-template.md#milestone-1---design--initial-code) was specified the license Apache 2.0 and the license on the repository is unlicensed. Could you tell me if the license is correct?

### Testing

I ran the Cypress e2e tests, and all passed. But the [tests](https://github.com/stojanov-igor/substrate-front-end-template/blob/ec2b49aaeb293e1c2cb6f9f1ce4a7a343d7ab0b2/cypress/e2e/Integration-Tests/sample-tests.cy.js) doesn't properly cover the functionalities, and it isn't a good sample because it has some bad practices to select the elements. You can see better practices for selecting the elements [here](https://docs.cypress.io/guides/references/best-practices#Selecting-Elements).

I tried to run the command `yarn test` to run the test `renders without crashing` and it failed.

```
user@localhost:~/Documents/substrate-front-end-template$ yarn test
FAIL src/__tests__/App.tsx
  ● Test suite failed to run
	ENOENT: no such file or directory, open 'node:test'
  	3 | // See: https://github.com/polkadot-js/api/issues/3430
  	4 |
	> 5 | import { describe, it } from 'node:test'
    	| ^
  	6 |
  	7 | // import React from 'react';
  	8 | // import ReactDOM from 'react-dom';
  	at Runtime.readFile (node_modules/jest-runtime/build/index.js:2421:21)
  	at Object.<anonymous> (src/__tests__/App.tsx:5:1)
  	at TestScheduler.scheduleTests (node_modules/@jest/core/build/TestScheduler.js:333:13)
  	at runJest (node_modules/@jest/core/build/runJest.js:404:19)
  	at _run10000 (node_modules/@jest/core/build/cli/index.js:320:7)
  	at runCLI (node_modules/@jest/core/build/cli/index.js:173:3)
Test Suites: 1 failed, 1 total
Tests:   	0 total
Snapshots:   0 total
Time:    	0.918 s
Ran all test suites.
```

### Docker

The documentation doesn't have instructions to run using Docker. Please add the instructions to the documentation. I was able to build the image without problems, but I couldn't run with success.


```
user@localhost:~/Documents/substrate-front-end-template$ docker build .
[+] Building 160.4s (11/11) FINISHED                                                                                                                                      	 
 => [internal] load build definition from Dockerfile                                                                                                                  	0.0s
 => => transferring dockerfile: 332B                                                                                                                                  	0.0s
 => [internal] load .dockerignore                                                                                                                                     	0.0s
 => => transferring context: 91B                                                                                                                                      	0.0s
 => [internal] load metadata for docker.io/library/node:18-alpine                                                                                                     	2.1s
 => [1/6] FROM docker.io/library/node:18-alpine@sha256:ca9f6cb0466f9638e59e0c249d335a07c867cd50c429b5c7830dda1bed584649                                               	4.2s
 => => resolve docker.io/library/node:18-alpine@sha256:ca9f6cb0466f9638e59e0c249d335a07c867cd50c429b5c7830dda1bed584649                                               	0.0s
 => => sha256:ca9f6cb0466f9638e59e0c249d335a07c867cd50c429b5c7830dda1bed584649 1.43kB / 1.43kB                                                                        	0.0s
 => => sha256:affdf979bd8ec516bf189d451b8ac68dd50adc49adc4c4014963556c11efeda4 1.16kB / 1.16kB                                                                        	0.0s
 => => sha256:24d8fcd7167fb06e91dc7228311105013dc042f6875ff2528ff7a41c04770112 7.14kB / 7.14kB                                                                        	0.0s
 => => sha256:4abcf20661432fb2d719aaf90656f55c287f8ca915dc1c92ec14ff61e67fbaf8 3.41MB / 3.41MB                                                                        	2.0s
 => => sha256:e7ced292c644a1f7bc776dcc401164b67c9224f8592cc83b8c42e237668a0c7f 40.25MB / 40.25MB                                                                      	3.2s
 => => sha256:b32c0114bba5af3e85af37dbc23b1e026850aba590099b81bf75946327b3a9e8 2.34MB / 2.34MB                                                                        	1.8s
 => => sha256:f3748d9674b0ca905fe23e1cb4ad0e49d6a605dbbfb9d0cf485f300a03f1eeff 450B / 450B                                                                            	2.1s
 => => extracting sha256:4abcf20661432fb2d719aaf90656f55c287f8ca915dc1c92ec14ff61e67fbaf8                                                                             	0.1s
 => => extracting sha256:e7ced292c644a1f7bc776dcc401164b67c9224f8592cc83b8c42e237668a0c7f                                                                             	0.6s
 => => extracting sha256:b32c0114bba5af3e85af37dbc23b1e026850aba590099b81bf75946327b3a9e8                                                                             	0.1s
 => => extracting sha256:f3748d9674b0ca905fe23e1cb4ad0e49d6a605dbbfb9d0cf485f300a03f1eeff                                                                             	0.0s
 => [internal] load build context                                                                                                                                     	1.3s
 => => transferring context: 234.11MB                                                                                                                                 	1.3s
 => [2/6] WORKDIR /app                                                                                                                                                	1.5s
 => [3/6] COPY package.json ./                                                                                                                                        	0.0s
 => [4/6] COPY yarn.lock ./                                                                                                                                           	0.0s
 => [5/6] RUN yarn install                                                                                                                                          	126.2s
 => [6/6] COPY . ./                                                                                                                                                   	0.9s
 => exporting to image                                                                                                                                               	25.2s
 => => exporting layers                                                                                                                                              	25.2s
 => => writing image sha256:df0323f7e5c524e232a94b831b9cf1e9bc66ec65d2aef55c925cb7e599572fb2                                                                          	0.0s
user@localhost:~/Documents/substrate-front-end-template$ docker images
REPOSITORY   TAG   	IMAGE ID   	CREATED          	SIZE                                                                                                           	 
<none>   	<none>	df0323f7e5c5   About a minute ago   1.72GB
user@localhost:~/Documents/substrate-front-end-template$ docker run df0323f7e5c5
Usage Error: Couldn't find the node_modules state file - running an install might help (findPackageLocation)
$ yarn run [--inspect] [--inspect-brk] [-T,--top-level] [-B,--binaries-only] <scriptName> …
```

### Article

The link to the article is correct? It shouldn't be the `README.md`.

### Table Module

The functionality works, but have a small visual problem. The copy icon doesn't align correctly.

![pasted image 0 (26)](https://github.com/dsm-w3f/Grant-Milestone-Delivery/assets/112647953/dd035ce3-c90d-4b9b-a0c8-15d0cc55471f)

### Pallet Interactor

After to fill the fields, the buttons aren't interactive, so I can't use them to submit the command.


![pasted image 0 (27)](https://github.com/dsm-w3f/Grant-Milestone-Delivery/assets/112647953/69c39ff8-bbb6-47ec-8ec7-3a30589a73e2)


### Other observations

I had some problems with the template. I experienced these problems in the original template too. Therefore, I don't think it is part of the scope to correct them.

When running using the Polkadot rpc the page is too slow, but when using a local node, the page runs fine.

The transfer part has a field to select an address, to put the receiver and the amount. When You submit the transaction isn't between the selected address and the receiver. It is between the account selected in the header of the page and the receiver. In the image below you can see the address highlighted is from Alice.

![pasted image 0 (28)](https://github.com/dsm-w3f/Grant-Milestone-Delivery/assets/112647953/d5cd0422-f1c5-49a3-bfd8-798ed28ca21b)
