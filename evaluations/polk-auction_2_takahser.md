# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/polk-auction.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| [Apache License](https://github.com/CrommVardek/polk-auction-ui/blob/3286f5de70e87bd14e86fe43999897059d65aebb/LICENSE) | - |
| 0b. | Documentation |<ul><li>[ ] </li></ul>| [polk-auction-ui README](https://github.com/CrommVardek/polk-auction-ui/blob/3286f5de70e87bd14e86fe43999897059d65aebb/README.md) | Instructions for installing NPM dependencies are missing. |
| 0c. | Testing Guide |<ul><li>[ ] </li></ul>| [polk-auction-ui README](https://github.com/CrommVardek/polk-auction-ui/blob/3286f5de70e87bd14e86fe43999897059d65aebb/README.md#test) | See [Test Feedback](#test-feedback) |
| 0d. | Docker |<ul><li>[ ] </li></ul>| [Dockerfile](https://github.com/CrommVardek/polk-auction-ui/blob/3286f5de70e87bd14e86fe43999897059d65aebb/Dockerfile) | See [Docker Feedback](#docker-feedback) |
| 1. | Current-Auction page |<ul><li>[ ] </li></ul>| [Auction Page](https://github.com/CrommVardek/polk-auction-ui/tree/3286f5de70e87bd14e86fe43999897059d65aebb/src/components/auction) | See [Current Auction Page Feedback](#current-auction-page-feedback) |
| 2. | Current-Parachains page |<ul><li>[ ] </li></ul>| [Parachain Page](https://github.com/CrommVardek/polk-auction-ui/tree/3286f5de70e87bd14e86fe43999897059d65aebb/src/components/parachain) | See [Parachain Page Feedback](#parachain-page-feedback) |
| 3. | Current-Crowdloan page |<ul><li>[ ] </li></ul>| [Crowdloan Page](https://github.com/CrommVardek/polk-auction-ui/tree/3286f5de70e87bd14e86fe43999897059d65aebb/src/components/crowdloan) | See [Crowdloan Page Feedback](#crowdloan-page-feedback) |
| 4. | Others pages |<ul><li>[ ] </li></ul>| [About Page](https://github.com/CrommVardek/polk-auction-ui/blob/3286f5de70e87bd14e86fe43999897059d65aebb/src/components/about/AboutPage.tsx) | Contrary to the specification, there is no FAQ section. |
| 4. | Header |<ul><li>[ ] </li></ul>| [Header Component](https://github.com/CrommVardek/polk-auction-ui/tree/3286f5de70e87bd14e86fe43999897059d65aebb/src/components/header) | See [Header Feedback](#header-feedback) |


Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

In general, I'm confused why you use the following IPs instead of 127.0.0.1 (localhost) in the docker configs located in your [polk-auction-core repo](https://github.com/CrommVardek/polk-auction-core):
- 127.0.33.1 for the DB container
- 127.0.0.10 for the sidecar container

### Test Feedback

When running the tests, the following warning occurs multiple times:

```bash
 console.error
    Warning: Each child in a list should have a unique "key" prop.
    
    Check the render method of `RelayChainsTab`. See https://reactjs.org/link/warning-keys for more information.
        at RelayChainButton (/repos/polk-auction-ui/src/components/header/RelayChainsTab.tsx:16:8)
        at RelayChainsTab (/repos/polk-auction-ui/src/components/header/RelayChainsTab.tsx:34:85)
        at WrapperComponent (/repos/polk-auction-ui/node_modules/@wojtekmaj/enzyme-adapter-utils/src/createMountWrapper.jsx:48:26)
```

### Docker Feedback

When building the docker image it fails with the following error:

```bash
% docker build -t polk-auction-ui .
[+] Building 3.4s (12/13)                                                                                                                                                                                   
 => [internal] load build definition from Dockerfile                                                                                                                                                   0.0s
 => => transferring dockerfile: 37B                                                                                                                                                                    0.0s
 => [internal] load .dockerignore                                                                                                                                                                      0.0s
 => => transferring context: 34B                                                                                                                                                                       0.0s
 => [internal] load metadata for docker.io/library/nginx:stable-alpine                                                                                                                                 2.0s
 => [internal] load metadata for docker.io/library/node:14                                                                                                                                             2.0s
 => [build 1/6] FROM docker.io/library/node:14@sha256:b2c75df8c9706156c38b4f1f678d00e11cb2bfda09fc4ab6e36ec17ac9163865                                                                                 0.0s
 => [internal] load build context                                                                                                                                                                      0.0s
 => => transferring context: 6.48kB                                                                                                                                                                    0.0s
 => CACHED [stage-1 1/2] FROM docker.io/library/nginx:stable-alpine@sha256:74694f2de64c44787a81f0554aa45b281e468c0c58b8665fafceda624d31e556                                                            0.0s
 => CACHED [build 2/6] WORKDIR /app                                                                                                                                                                    0.0s
 => CACHED [build 3/6] COPY package*.json ./                                                                                                                                                           0.0s
 => CACHED [build 4/6] RUN yarn install                                                                                                                                                                0.0s
 => [build 5/6] COPY . ./                                                                                                                                                                              0.0s
 => ERROR [build 6/6] RUN yarn build:prod                                                                                                                                                              1.3s
------                                                                                                                                                                                                      
 > [build 6/6] RUN yarn build:prod:                                                                                                                                                                         
#12 0.316 yarn run v1.22.17                                                                                                                                                                                 
#12 0.336 $ cross-env NODE_ENV=prod parcel build ./src/index.html                                                                                                                                           
#12 0.655 Building...                                                                                                                                                                                       
#12 1.036 🚨 Build failed.                                                                                                                                                                                  
#12 1.037 
#12 1.038 Error: /lib/aarch64-linux-gnu/libm.so.6: version `GLIBC_2.29' not found
#12 1.038 (required by
#12 1.038 /app/node_modules/@parcel/transformer-js/parcel-swc.linux-arm64-gnu.node)
#12 1.038 
#12 1.041   Error: /lib/aarch64-linux-gnu/libm.so.6: version `GLIBC_2.29' not found
#12 1.041   (required by
#12 1.041   /app/node_modules/@parcel/transformer-js/parcel-swc.linux-arm64-gnu.node)
#12 1.041   at Object.Module._extensions..node (internal/modules/cjs/loader.js:1144:18)
#12 1.041   at Module.load (internal/modules/cjs/loader.js:950:32)
#12 1.041   at NodePackageManager.load
#12 1.041   (/app/node_modules/@parcel/package-manager/lib/index.js:3391:15)
#12 1.041   at NodePackageManager.requireSync
#12 1.041   (/app/node_modules/@parcel/package-manager/lib/index.js:3369:21)
#12 1.041   at Module.m.require
#12 1.041   (/app/node_modules/@parcel/package-manager/lib/index.js:3382:25)
#12 1.041   at require (internal/modules/cjs/helpers.js:101:18)
#12 1.041   at Object.<anonymous>
#12 1.041   (/app/node_modules/@parcel/transformer-js/native.js:30:20)
#12 1.041   at Module._compile (internal/modules/cjs/loader.js:1085:14)
#12 1.041   at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
#12 1.041   at Module.load (internal/modules/cjs/loader.js:950:32)
#12 1.041 
#12 1.235 info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
#12 1.235 error Command failed with exit code 1.
------
executor failed running [/bin/sh -c yarn build:prod]: exit code: 1
```

When trying to spin up the container using `docker-compose` it fails because it doesn't find the image:

```bash
 % docker-compose up -d --build
Pulling polk-auction-core-api (polk-auction-ui:latest)...
ERROR: The image for the service you're trying to recreate has been removed. If you continue, volume data could be lost. Consider backing up your data before continuing.

Continue with the new image? [yN]y
Pulling polk-auction-core-api (polk-auction-ui:latest)...
ERROR: pull access denied for polk-auction-ui, repository does not exist or may require 'docker login': denied: requested access to the resource is denied
```

I suppose, if you can solve the build issue this error will also disappear.

### Current Auction Page Feedback

In general, there is the following console error when the single-page app is initially loaded.

```
Warning: Each child in a list should have a unique "key" prop.

Check the render method of `RelayChainsTab`. See https://reactjs.org/link/warning-keys for more information.
    at RelayChainButton (http://localhost:3000/index.9978ec32.js:28232:20)
    at RelayChainsTab (http://localhost:3000/index.9978ec32.js:28252:21)
    at Header (http://localhost:3000/index.9978ec32.js:25268:30)
    at Router (http://localhost:3000/index.9978ec32.js:22395:34)
    at BrowserRouter (http://localhost:3000/index.9978ec32.js:22075:39)
    at App (http://localhost:3000/index.9978ec32.js:21989:12)
```
It's the same error as already described in the [Test Feedback](#test-feedback).


### Parachain Page Feedback

When navigating to `/parachain`, the following console error occurs and the site is blank:

```
ParachainsDetails.tsx:22 Uncaught TypeError: parachains.filter is not a function
    at ParachainsDetails (ParachainsDetails.tsx:22:130)
    at renderWithHooks (react-dom.development.js:14985:18)
    at mountIndeterminateComponent (react-dom.development.js:17811:13)
    at beginWork (react-dom.development.js:19049:16)
    at HTMLUnknownElement.callCallback (react-dom.development.js:3945:14)
    at Object.invokeGuardedCallbackDev (react-dom.development.js:3994:16)
    at invokeGuardedCallback (react-dom.development.js:4056:31)
    at beginWork$1 (react-dom.development.js:23964:7)
    at performUnitOfWork (react-dom.development.js:22776:12)
    at workLoopSync (react-dom.development.js:22707:5)
ParachainsDetails @ ParachainsDetails.tsx:22
renderWithHooks @ react-dom.development.js:14985
mountIndeterminateComponent @ react-dom.development.js:17811
beginWork @ react-dom.development.js:19049
callCallback @ react-dom.development.js:3945
invokeGuardedCallbackDev @ react-dom.development.js:3994
invokeGuardedCallback @ react-dom.development.js:4056
beginWork$1 @ react-dom.development.js:23964
performUnitOfWork @ react-dom.development.js:22776
workLoopSync @ react-dom.development.js:22707
renderRootSync @ react-dom.development.js:22670
performSyncWorkOnRoot @ react-dom.development.js:22293
(anonymous) @ react-dom.development.js:11327
unstable_runWithPriority @ scheduler.development.js:468
runWithPriority$1 @ react-dom.development.js:11276
flushSyncCallbackQueueImpl @ react-dom.development.js:11322
flushSyncCallbackQueue @ react-dom.development.js:11309
scheduleUpdateOnFiber @ react-dom.development.js:21893
dispatchAction @ react-dom.development.js:16139
_callee$ @ useBaseAxios.ts:58
tryCatch @ runtime.js:45
invoke @ runtime.js:271
prototype.<computed> @ runtime.js:97
asyncGeneratorStep @ asyncToGenerator.js:3
_next @ asyncToGenerator.js:25
Promise.then (async)
asyncGeneratorStep @ asyncToGenerator.js:13
_next @ asyncToGenerator.js:25
(anonymous) @ asyncToGenerator.js:32
(anonymous) @ asyncToGenerator.js:21
(anonymous) @ useBaseAxios.ts:50
(anonymous) @ useAxios.ts:24
invokePassiveEffectCreate @ react-dom.development.js:23487
callCallback @ react-dom.development.js:3945
invokeGuardedCallbackDev @ react-dom.development.js:3994
invokeGuardedCallback @ react-dom.development.js:4056
flushPassiveEffectsImpl @ react-dom.development.js:23574
unstable_runWithPriority @ scheduler.development.js:468
runWithPriority$1 @ react-dom.development.js:11276
flushPassiveEffects @ react-dom.development.js:23447
(anonymous) @ react-dom.development.js:23324
workLoop @ scheduler.development.js:417
flushWork @ scheduler.development.js:390
performWorkUntilDeadline @ scheduler.development.js:157
react-dom.development.js:20085 The above error occurred in the <ParachainsDetails> component:

    at ParachainsDetails (http://localhost:3000/index.9978ec32.js:37322:25)
    at div
    at ParachainsPage (http://localhost:3000/index.9978ec32.js:37269:57)
    at Route (http://localhost:3000/index.9978ec32.js:22670:33)
    at Switch (http://localhost:3000/index.9978ec32.js:22831:33)
    at Routes
    at div
    at Router (http://localhost:3000/index.9978ec32.js:22395:34)
    at BrowserRouter (http://localhost:3000/index.9978ec32.js:22075:39)
    at App (http://localhost:3000/index.9978ec32.js:21989:12)

Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.
```

### Crowdloan Page Feedback

When navigating to `/crowdloan`, the following console error occurs and the site is blank:

```
CrowdloanPage.tsx:16 Uncaught TypeError: Cannot read properties of undefined (reading 'filter')
    at CrowdloanPage (CrowdloanPage.tsx:16:123)
    at renderWithHooks (react-dom.development.js:14985:18)
    at updateFunctionComponent (react-dom.development.js:17356:20)
    at beginWork (react-dom.development.js:19063:16)
    at HTMLUnknownElement.callCallback (react-dom.development.js:3945:14)
    at Object.invokeGuardedCallbackDev (react-dom.development.js:3994:16)
    at invokeGuardedCallback (react-dom.development.js:4056:31)
    at beginWork$1 (react-dom.development.js:23964:7)
    at performUnitOfWork (react-dom.development.js:22776:12)
    at workLoopSync (react-dom.development.js:22707:5)
CrowdloanPage @ CrowdloanPage.tsx:16
renderWithHooks @ react-dom.development.js:14985
updateFunctionComponent @ react-dom.development.js:17356
beginWork @ react-dom.development.js:19063
callCallback @ react-dom.development.js:3945
invokeGuardedCallbackDev @ react-dom.development.js:3994
invokeGuardedCallback @ react-dom.development.js:4056
beginWork$1 @ react-dom.development.js:23964
performUnitOfWork @ react-dom.development.js:22776
workLoopSync @ react-dom.development.js:22707
renderRootSync @ react-dom.development.js:22670
performSyncWorkOnRoot @ react-dom.development.js:22293
(anonymous) @ react-dom.development.js:11327
unstable_runWithPriority @ scheduler.development.js:468
runWithPriority$1 @ react-dom.development.js:11276
flushSyncCallbackQueueImpl @ react-dom.development.js:11322
flushSyncCallbackQueue @ react-dom.development.js:11309
scheduleUpdateOnFiber @ react-dom.development.js:21893
dispatchAction @ react-dom.development.js:16139
_callee$ @ useBaseAxios.ts:58
tryCatch @ runtime.js:45
invoke @ runtime.js:271
prototype.<computed> @ runtime.js:97
asyncGeneratorStep @ asyncToGenerator.js:3
_next @ asyncToGenerator.js:25
Promise.then (async)
asyncGeneratorStep @ asyncToGenerator.js:13
_next @ asyncToGenerator.js:25
(anonymous) @ asyncToGenerator.js:32
(anonymous) @ asyncToGenerator.js:21
(anonymous) @ useBaseAxios.ts:50
(anonymous) @ useAxios.ts:24
invokePassiveEffectCreate @ react-dom.development.js:23487
callCallback @ react-dom.development.js:3945
invokeGuardedCallbackDev @ react-dom.development.js:3994
invokeGuardedCallback @ react-dom.development.js:4056
flushPassiveEffectsImpl @ react-dom.development.js:23574
unstable_runWithPriority @ scheduler.development.js:468
runWithPriority$1 @ react-dom.development.js:11276
flushPassiveEffects @ react-dom.development.js:23447
(anonymous) @ react-dom.development.js:23324
workLoop @ scheduler.development.js:417
flushWork @ scheduler.development.js:390
performWorkUntilDeadline @ scheduler.development.js:157
react-dom.development.js:20085 The above error occurred in the <CrowdloanPage> component:

    at CrowdloanPage (http://localhost:3000/index.9978ec32.js:37039:57)
    at Route (http://localhost:3000/index.9978ec32.js:22670:33)
    at Switch (http://localhost:3000/index.9978ec32.js:22831:33)
    at Routes
    at div
    at Router (http://localhost:3000/index.9978ec32.js:22395:34)
    at BrowserRouter (http://localhost:3000/index.9978ec32.js:22075:39)
    at App (http://localhost:3000/index.9978ec32.js:21989:12)

Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.
```

### Header Feedback

- There is currently no indication on the currently selected network (Polkadot or Kusama) which might affects the UX. On hover, a tab is displayed but it disappeares when moving the mouse outside that area. Suggestion: Always display the currently selected tab.