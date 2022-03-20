# Evaluation

* **Status:** In Progress
* **Application:** https://github.com/w3f/Grants-Program/blob/master/applications/SubsCrypt.md
* **Milestone:** 2
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [SubsCrypt-front/LICENSE](https://github.com/oxydev/SubsCrypt-front/blob/main/LICENSE), [SubsCrypt-npm-library/LICENSE](https://github.com/oxydev/SubsCrypt-npm-library/blob/main/LICENSE) | Correct License |
| 1. | UI Dashboard | <ul><li>[x] </li></ul> | [SubsCrypt-front](https://github.com/oxydev/SubsCrypt-front) | **12.08.21:** npm run dev doesn't work for me, see below, **16.08.21:** [Dart Sass 2.0.0 was fixed](https://github.com/oxydev/SubsCrypt-front/blob/main/package.json), but the UI doesn't show, see npm run dev errors **18.08.21:** Works now  |
| 1.1 | UI Dashboard for users | <ul><li>[ ] </li></ul> | [SubsCrypt-front](https://github.com/oxydev/SubsCrypt-front) | **12.08.21:** Not sure how I can test:  manage user's subscriptions and refund **18.08.21:** Same issue with polkadot.js extension as below, subscription worked with the help of https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fcanvas.subscrypt.io%3A443#/accounts. However refunding didn't seem to work |
| 1.2 | UI Dashboard for admins | <ul><li>[ ] </li></ul> | [SubsCrypt-front](https://github.com/oxydev/SubsCrypt-front) | When I click on register. It seems to simply ask me to sign a transaction with a random address via polkadot.js rather than the address I have selected at the beginning. When I add a plan as admin it doesn't show up as active plan  |  
| 2. | ES6 Module for developers |<ul><li>[x] </li></ul> | [npm package](https://www.npmjs.com/package/@oxydev/subscrypt) | |
| 2.1 | Implementation of ES6 Module for developers | <ul><li>[ ] </li></ul> | [SubsCrypt-npm-library](https://github.com/oxydev/SubsCrypt-npm-library) | |
| 2.2 | Documentation of ES6 Module | <ul><li>[x] </li></ul> | [Readme](https://github.com/oxydev/SubsCrypt-npm-library/blob/main/README.md) | Readme explains how to integrate it and some of the code has inline documentation. But the documentation [here](https://oxydev.github.io/SubsCrypt-docs/#/Tech/Front_end/index) should probably also be updated |
| 3. | Unit Test | <ul><li>[x] </li></ul> | [here](https://github.com/oxydev/SubsCrypt-npm-library/blob/main/src/index.test.js) | **12.08.21:** npm test fails see below **18.08.21:** Works now |

## General Notes

Live version: https://subscrypt.io

**General comments:**
- The UI immediately shows you a login screen without explaining what’s the purpose of it. 
- Polkadot.js login isn’t very user friendly if you have multiple addresses. 
- Is there a way to see/query the transaction on-chain for the live version? 
- snyk test found no issues

**npm run dev 16.08.21**

<pre><font color="#26A269"><b>david@noc2</b></font>:<font color="#12488B"><b>~/source/web3/evaluation/oxydev/subsCrypt-front</b></font>$ npm --version
7.20.6
<font color="#26A269"><b>david@noc2</b></font>:<font color="#12488B"><b>~/source/web3/evaluation/oxydev/subsCrypt-front</b></font>$ npm run dev

&gt; SubsCrypt-front@1.0.0 dev
&gt; next dev -p 5000

<font color="#26A269">ready</font> - started server on 0.0.0.0:5000, url: http://localhost:5000
<font color="#2AA1B3">info</font>  - Using webpack 5. Reason: Enabled by default https://nextjs.org/docs/messages/webpack5
<font color="#A347BA">event</font> - compiled successfully
<font color="#A347BA">event</font> - build page: /
<font color="#2AA1B3">wait</font>  - compiling...
<font color="#A347BA">event</font> - compiled successfully
(node:11826) UnhandledPromiseRejectionWarning: TypeError: Cannot destructure property &apos;protocol&apos; of &apos;window.location&apos; as it is undefined.
    at Object.getLocationOrigin (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/utils.js:27:13)
    at Object.parseRelativeUrl (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js:9:89)
    at Object.parseUrl (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/router/utils/parse-url.js:10:39)
    at Object.parseNextUrl (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/router/utils/parse-next-url.js:10:38)
    at DevServer.handleRequest (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/server/next-server.js:189:40)
    at Server.&lt;anonymous&gt; (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/server/next.js:54:20)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
(Use `node --trace-warnings ...` to show where the warning was created)
(node:11826) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 2)
(node:11826) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
(node:11826) UnhandledPromiseRejectionWarning: TypeError: Cannot destructure property &apos;protocol&apos; of &apos;window.location&apos; as it is undefined.
    at Object.getLocationOrigin (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/utils.js:27:13)
    at Object.parseRelativeUrl (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js:9:89)
    at Object.parseUrl (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/router/utils/parse-url.js:10:39)
    at Object.parseNextUrl (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/router/utils/parse-next-url.js:10:38)
    at DevServer.handleRequest (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/server/next-server.js:189:40)
    at Server.&lt;anonymous&gt; (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/server/next.js:54:20)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
(node:11826) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 4)
(node:11826) UnhandledPromiseRejectionWarning: TypeError: Cannot destructure property &apos;protocol&apos; of &apos;window.location&apos; as it is undefined.
    at Object.getLocationOrigin (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/utils.js:27:13)
    at Object.parseRelativeUrl (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js:9:89)
    at Object.parseUrl (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/router/utils/parse-url.js:10:39)
    at Object.parseNextUrl (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/router/utils/parse-next-url.js:10:38)
    at DevServer.handleRequest (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/server/next-server.js:189:40)
    at Server.&lt;anonymous&gt; (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/server/next.js:54:20)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
(node:11826) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 6)
(node:11826) UnhandledPromiseRejectionWarning: TypeError: Cannot destructure property &apos;protocol&apos; of &apos;window.location&apos; as it is undefined.
    at Object.getLocationOrigin (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/utils.js:27:13)
    at Object.parseRelativeUrl (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js:9:89)
    at Object.parseUrl (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/router/utils/parse-url.js:10:39)
    at Object.parseNextUrl (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/router/utils/parse-next-url.js:10:38)
    at DevServer.handleRequest (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/server/next-server.js:189:40)
    at Server.&lt;anonymous&gt; (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/server/next.js:54:20)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
(node:11826) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 8)
(node:11826) UnhandledPromiseRejectionWarning: TypeError: Cannot destructure property &apos;protocol&apos; of &apos;window.location&apos; as it is undefined.
    at Object.getLocationOrigin (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/utils.js:27:13)
    at Object.parseRelativeUrl (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js:9:89)
    at Object.parseUrl (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/router/utils/parse-url.js:10:39)
    at Object.parseNextUrl (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/router/utils/parse-next-url.js:10:38)
    at DevServer.handleRequest (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/server/next-server.js:189:40)
    at Server.&lt;anonymous&gt; (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/server/next.js:54:20)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
(node:11826) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 10)
(node:11826) UnhandledPromiseRejectionWarning: TypeError: Cannot destructure property &apos;protocol&apos; of &apos;window.location&apos; as it is undefined.
    at Object.getLocationOrigin (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/utils.js:27:13)
    at Object.parseRelativeUrl (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js:9:89)
    at Object.parseUrl (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/router/utils/parse-url.js:10:39)
    at Object.parseNextUrl (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/router/utils/parse-next-url.js:10:38)
    at DevServer.handleRequest (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/server/next-server.js:189:40)
    at Server.&lt;anonymous&gt; (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/server/next.js:54:20)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
(node:11826) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 12)

</pre>

**npm run dev 12.08.21**

<pre> npm run dev

&gt; SubsCrypt-front@1.0.0 dev
&gt; next dev -p 5000

<font color="#26A269">ready</font> - started server on 0.0.0.0:5000, url: http://localhost:5000
<font color="#2AA1B3">info</font>  - Using webpack 5. Reason: Enabled by default https://nextjs.org/docs/messages/webpack5
DEPRECATION WARNING: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.

Recommendation: math.div($height, 2)

More info and automated migrator: https://sass-lang.com/d/slash-div

   ╷
61 │   border-radius: $height / 2;
   │                  ^^^^^^^^^^^
   ╵
    styles/abstracts/_mixins.scss 61:18  primaryButtons()
    styles/components/_modal.scss 78:3   @import
    styles/app.scss 12:9                 root stylesheet

DEPRECATION WARNING: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.

Recommendation: math.div($height, 2)

More info and automated migrator: https://sass-lang.com/d/slash-div

   ╷
75 │   border-radius: $height / 2;
   │                  ^^^^^^^^^^^
   ╵
    styles/abstracts/_mixins.scss 75:18                        secondaryButtons()
    styles/components/MySubscryption/_userPlanCard.scss 111:3  @import
    styles/app.scss 19:9                                       root stylesheet

<font color="#A347BA">event</font> - compiled successfully
<font color="#A347BA"><b>Attention</b></font>: Next.js now collects completely anonymous telemetry regarding usage.
This information is used to shape Next.js&apos; roadmap and prioritize features.
You can learn more, including how to opt-out if you&apos;d not like to participate in this anonymous program, by visiting the following URL:
<font color="#2AA1B3">https://nextjs.org/telemetry</font>

<font color="#A347BA">event</font> - build page: /
<font color="#2AA1B3">wait</font>  - compiling...
<font color="#A347BA">event</font> - compiled successfully
(node:15625) UnhandledPromiseRejectionWarning: TypeError: Cannot destructure property &apos;protocol&apos; of &apos;window.location&apos; as it is undefined.
    at Object.getLocationOrigin (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/utils.js:27:13)
    at Object.parseRelativeUrl (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js:9:89)
    at Object.parseUrl (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/router/utils/parse-url.js:10:39)
    at Object.parseNextUrl (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/router/utils/parse-next-url.js:10:38)
    at DevServer.handleRequest (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/server/next-server.js:189:40)
    at Server.&lt;anonymous&gt; (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/server/next.js:54:20)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
(Use `node --trace-warnings ...` to show where the warning was created)
(node:15625) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 2)
(node:15625) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
(node:15625) UnhandledPromiseRejectionWarning: TypeError: Cannot destructure property &apos;protocol&apos; of &apos;window.location&apos; as it is undefined.
    at Object.getLocationOrigin (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/utils.js:27:13)
    at Object.parseRelativeUrl (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js:9:89)
    at Object.parseUrl (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/router/utils/parse-url.js:10:39)
    at Object.parseNextUrl (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/router/utils/parse-next-url.js:10:38)
    at DevServer.handleRequest (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/server/next-server.js:189:40)
    at Server.&lt;anonymous&gt; (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/server/next.js:54:20)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
(node:15625) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 4)
(node:15625) UnhandledPromiseRejectionWarning: TypeError: Cannot destructure property &apos;protocol&apos; of &apos;window.location&apos; as it is undefined.
    at Object.getLocationOrigin (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/utils.js:27:13)
    at Object.parseRelativeUrl (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js:9:89)
    at Object.parseUrl (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/router/utils/parse-url.js:10:39)
    at Object.parseNextUrl (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/router/utils/parse-next-url.js:10:38)
    at DevServer.handleRequest (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/server/next-server.js:189:40)
    at Server.&lt;anonymous&gt; (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/server/next.js:54:20)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
(node:15625) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 6)
(node:15625) UnhandledPromiseRejectionWarning: TypeError: Cannot destructure property &apos;protocol&apos; of &apos;window.location&apos; as it is undefined.
    at Object.getLocationOrigin (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/utils.js:27:13)
    at Object.parseRelativeUrl (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js:9:89)
    at Object.parseUrl (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/router/utils/parse-url.js:10:39)
    at Object.parseNextUrl (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/router/utils/parse-next-url.js:10:38)
    at DevServer.handleRequest (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/server/next-server.js:189:40)
    at Server.&lt;anonymous&gt; (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/server/next.js:54:20)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
(node:15625) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 8)
(node:15625) UnhandledPromiseRejectionWarning: TypeError: Cannot destructure property &apos;protocol&apos; of &apos;window.location&apos; as it is undefined.
    at Object.getLocationOrigin (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/utils.js:27:13)
    at Object.parseRelativeUrl (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js:9:89)
    at Object.parseUrl (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/router/utils/parse-url.js:10:39)
    at Object.parseNextUrl (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/router/utils/parse-next-url.js:10:38)
    at DevServer.handleRequest (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/server/next-server.js:189:40)
    at Server.&lt;anonymous&gt; (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/server/next.js:54:20)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
(node:15625) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 10)
(node:15625) UnhandledPromiseRejectionWarning: TypeError: Cannot destructure property &apos;protocol&apos; of &apos;window.location&apos; as it is undefined.
    at Object.getLocationOrigin (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/utils.js:27:13)
    at Object.parseRelativeUrl (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js:9:89)
    at Object.parseUrl (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/router/utils/parse-url.js:10:39)
    at Object.parseNextUrl (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/shared/lib/router/utils/parse-next-url.js:10:38)
    at DevServer.handleRequest (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/server/next-server.js:189:40)
    at Server.&lt;anonymous&gt; (/home/david/source/web3/evaluation/oxydev/subsCrypt-front/node_modules/next/dist/server/next.js:54:20)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
(node:15625) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 12)

<font color="#2AA1B3">wait</font>  - compiling...
<font color="#A347BA">event</font> - compiled successfully
</pre>

**NPM unit test result:**

<pre><font color="#12488B"><b>SubsCrypt-npm-library</b></font>$ npm test

&gt; @oxydev/subscrypt@0.2.3 test
&gt; mocha src/*.test.js --exit



  Metadata Test
  <font color="#26A269">  ✓</font><font color="#5E5C64"> Metadata Test</font>

  CallView Funcs Test 1
    Check Get Sha2
    <font color="#C01C28">  1) should hash correct</font>
    Check UserName And UserAddress Validity
    <font color="#C01C28">  2) should User Be Available</font>
    <font color="#C01C28">  3) should Username of provider Be Available</font>
    <font color="#C01C28">  4) should The Address Be For The User</font>
    <font color="#C01C28">  5) should The Address Be For The provider</font>
    <font color="#C01C28">  6) should The Address Be For The username of User</font>
    <font color="#C01C28">  7) should The Address Be For The username of provider</font>
    Check Server
    <font color="#26A269">  ✓</font><font color="#5E5C64"> should be connected to server</font><font color="#C01C28"> (2282ms)</font>
    Check User Authentication
    <font color="#C01C28">  8) should Authenticate User Address With Password</font>
    <font color="#C01C28">  9) should Authenticate Username With Password</font>
    Check Getting The Data Of The User
    <font color="#C01C28">  10) should Retrieve Whole Data</font>
    <font color="#C01C28">  11) should Retrieve Data</font>
    Check Checking Auth Of User &amp; Its Providers
    <font color="#C01C28">  12) should CheckAuth Using User Address</font>
    <font color="#C01C28">  13) should CheckAuth Using User Name</font>
    Check Auth Of Provider
    <font color="#C01C28">  14) should CheckAuth Using Provider Address</font>
    <font color="#C01C28">  15) should CheckAuth Using Provider Username</font>
    Check Subscription Functions
    <font color="#C01C28">  16) should Check Subscriptions With User Address</font>
    <font color="#C01C28">  17) should Check Subscriptions With User Name</font>
    Getting Plan Data Count
    <font color="#C01C28">  18) should Get Plan Data Length</font>
    Check Getting Plan Data Funcs
    <font color="#26A269">  ✓</font><font color="#5E5C64"> should Get Plan Data</font><font color="#C01C28"> (134ms)</font>
    <font color="#26A269">  ✓</font><font color="#5E5C64"> should Get Plan Characteristic</font><font color="#C01C28"> (101ms)</font>
    <font color="#26A269">  ✓</font><font color="#5E5C64"> should Get User Plan Characteristic</font><font color="#C01C28"> (104ms)</font>


<font color="#33DA7A"> </font><font color="#26A269"> 5 passing</font><font color="#5E5C64"> (34s)</font>
<font color="#C01C28">  18 failing</font>

  1) CallView Funcs Test 1
       Check Get Sha2
         should hash correct:

      <font color="#C01C28">AssertionError [ERR_ASSERTION]: &apos;Failed&apos; == &apos;Fetched&apos;</font>
      <font color="#26A269">+ expected</font> <font color="#C01C28">- actual</font>

      <font color="#C01C28">-Failed</font>
      <font color="#26A269">+Fetched</font>
      
<font color="#5E5C64">      at Context.&lt;anonymous&gt; (src/index.test.js:39:14)</font>
<font color="#5E5C64">      at processTicksAndRejections (internal/process/task_queues.js:93:5)</font>

  2) CallView Funcs Test 1
       Check UserName And UserAddress Validity
         should User Be Available:

      <font color="#C01C28">AssertionError [ERR_ASSERTION]: &apos;Failed&apos; == &apos;Fetched&apos;</font>
      <font color="#26A269">+ expected</font> <font color="#C01C28">- actual</font>

      <font color="#C01C28">-Failed</font>
      <font color="#26A269">+Fetched</font>
      
<font color="#5E5C64">      at Context.&lt;anonymous&gt; (src/index.test.js:46:14)</font>
<font color="#5E5C64">      at processTicksAndRejections (internal/process/task_queues.js:93:5)</font>

  3) CallView Funcs Test 1
       Check UserName And UserAddress Validity
         should Username of provider Be Available:

      <font color="#C01C28">AssertionError [ERR_ASSERTION]: &apos;Failed&apos; == &apos;Fetched&apos;</font>
      <font color="#26A269">+ expected</font> <font color="#C01C28">- actual</font>

      <font color="#C01C28">-Failed</font>
      <font color="#26A269">+Fetched</font>
      
<font color="#5E5C64">      at Context.&lt;anonymous&gt; (src/index.test.js:52:14)</font>
<font color="#5E5C64">      at processTicksAndRejections (internal/process/task_queues.js:93:5)</font>

  4) CallView Funcs Test 1
       Check UserName And UserAddress Validity
         should The Address Be For The User:

      <font color="#C01C28">AssertionError [ERR_ASSERTION]: &apos;Failed&apos; == &apos;Fetched&apos;</font>
      <font color="#26A269">+ expected</font> <font color="#C01C28">- actual</font>

      <font color="#C01C28">-Failed</font>
      <font color="#26A269">+Fetched</font>
      
<font color="#5E5C64">      at Context.&lt;anonymous&gt; (src/index.test.js:61:14)</font>
<font color="#5E5C64">      at processTicksAndRejections (internal/process/task_queues.js:93:5)</font>

  5) CallView Funcs Test 1
       Check UserName And UserAddress Validity
         should The Address Be For The provider:

      <font color="#C01C28">AssertionError [ERR_ASSERTION]: &apos;Failed&apos; == &apos;Fetched&apos;</font>
      <font color="#26A269">+ expected</font> <font color="#C01C28">- actual</font>

      <font color="#C01C28">-Failed</font>
      <font color="#26A269">+Fetched</font>
      
<font color="#5E5C64">      at Context.&lt;anonymous&gt; (src/index.test.js:66:14)</font>
<font color="#5E5C64">      at processTicksAndRejections (internal/process/task_queues.js:93:5)</font>

  6) CallView Funcs Test 1
       Check UserName And UserAddress Validity
         should The Address Be For The username of User:

      <font color="#C01C28">AssertionError [ERR_ASSERTION]: &apos;Failed&apos; == &apos;Fetched&apos;</font>
      <font color="#26A269">+ expected</font> <font color="#C01C28">- actual</font>

      <font color="#C01C28">-Failed</font>
      <font color="#26A269">+Fetched</font>
      
<font color="#5E5C64">      at Context.&lt;anonymous&gt; (src/index.test.js:71:14)</font>
<font color="#5E5C64">      at processTicksAndRejections (internal/process/task_queues.js:93:5)</font>

  7) CallView Funcs Test 1
       Check UserName And UserAddress Validity
         should The Address Be For The username of provider:

      <font color="#C01C28">AssertionError [ERR_ASSERTION]: &apos;Failed&apos; == &apos;Fetched&apos;</font>
      <font color="#26A269">+ expected</font> <font color="#C01C28">- actual</font>

      <font color="#C01C28">-Failed</font>
      <font color="#26A269">+Fetched</font>
      
<font color="#5E5C64">      at Context.&lt;anonymous&gt; (src/index.test.js:76:14)</font>
<font color="#5E5C64">      at processTicksAndRejections (internal/process/task_queues.js:93:5)</font>

  8) CallView Funcs Test 1
       Check User Authentication
         should Authenticate User Address With Password:

      <font color="#C01C28">AssertionError [ERR_ASSERTION]: &apos;Failed&apos; == &apos;Fetched&apos;</font>
      <font color="#26A269">+ expected</font> <font color="#C01C28">- actual</font>

      <font color="#C01C28">-Failed</font>
      <font color="#26A269">+Fetched</font>
      
<font color="#5E5C64">      at Context.&lt;anonymous&gt; (src/index.test.js:91:14)</font>
<font color="#5E5C64">      at processTicksAndRejections (internal/process/task_queues.js:93:5)</font>

  9) CallView Funcs Test 1
       Check User Authentication
         should Authenticate Username With Password:

      <font color="#C01C28">AssertionError [ERR_ASSERTION]: &apos;Failed&apos; == &apos;Fetched&apos;</font>
      <font color="#26A269">+ expected</font> <font color="#C01C28">- actual</font>

      <font color="#C01C28">-Failed</font>
      <font color="#26A269">+Fetched</font>
      
<font color="#5E5C64">      at Context.&lt;anonymous&gt; (src/index.test.js:97:14)</font>
<font color="#5E5C64">      at processTicksAndRejections (internal/process/task_queues.js:93:5)</font>

  10) CallView Funcs Test 1
       Check Getting The Data Of The User
         should Retrieve Whole Data:

      <font color="#C01C28">AssertionError [ERR_ASSERTION]: &apos;Failed&apos; == &apos;Fetched&apos;</font>
      <font color="#26A269">+ expected</font> <font color="#C01C28">- actual</font>

      <font color="#C01C28">-Failed</font>
      <font color="#26A269">+Fetched</font>
      
<font color="#5E5C64">      at Context.&lt;anonymous&gt; (src/index.test.js:105:14)</font>
<font color="#5E5C64">      at processTicksAndRejections (internal/process/task_queues.js:93:5)</font>

  11) CallView Funcs Test 1
       Check Getting The Data Of The User
         should Retrieve Data:
<font color="#C01C28">     TypeError: Cannot read property &apos;0&apos; of undefined</font>
<font color="#5E5C64">      at Context.&lt;anonymous&gt; (src/index.test.js:110:96)</font>
<font color="#5E5C64">      at processImmediate (internal/timers.js:461:21)</font>

  12) CallView Funcs Test 1
       Check Checking Auth Of User &amp; Its Providers
         should CheckAuth Using User Address:
<font color="#C01C28">     TypeError: userWholeData is not iterable</font>
<font color="#5E5C64">      at Context.&lt;anonymous&gt; (src/index.test.js:119:36)</font>
<font color="#5E5C64">      at processImmediate (internal/timers.js:461:21)</font>

  13) CallView Funcs Test 1
       Check Checking Auth Of User &amp; Its Providers
         should CheckAuth Using User Name:
<font color="#C01C28">     TypeError: userWholeData is not iterable</font>
<font color="#5E5C64">      at Context.&lt;anonymous&gt; (src/index.test.js:126:36)</font>
<font color="#5E5C64">      at processImmediate (internal/timers.js:461:21)</font>

  14) CallView Funcs Test 1
       Check Auth Of Provider
         should CheckAuth Using Provider Address:

      <font color="#C01C28">AssertionError [ERR_ASSERTION]: &apos;Failed&apos; == &apos;Fetched&apos;</font>
      <font color="#26A269">+ expected</font> <font color="#C01C28">- actual</font>

      <font color="#C01C28">-Failed</font>
      <font color="#26A269">+Fetched</font>
      
<font color="#5E5C64">      at Context.&lt;anonymous&gt; (src/index.test.js:136:14)</font>
<font color="#5E5C64">      at processTicksAndRejections (internal/process/task_queues.js:93:5)</font>

  15) CallView Funcs Test 1
       Check Auth Of Provider
         should CheckAuth Using Provider Username:

      <font color="#C01C28">AssertionError [ERR_ASSERTION]: &apos;Failed&apos; == &apos;Fetched&apos;</font>
      <font color="#26A269">+ expected</font> <font color="#C01C28">- actual</font>

      <font color="#C01C28">-Failed</font>
      <font color="#26A269">+Fetched</font>
      
<font color="#5E5C64">      at Context.&lt;anonymous&gt; (src/index.test.js:141:14)</font>
<font color="#5E5C64">      at processTicksAndRejections (internal/process/task_queues.js:93:5)</font>

  16) CallView Funcs Test 1
       Check Subscription Functions
         should Check Subscriptions With User Address:
<font color="#C01C28">     TypeError: Cannot read property &apos;entries&apos; of undefined</font>
<font color="#5E5C64">      at Context.&lt;anonymous&gt; (src/index.test.js:147:59)</font>
<font color="#5E5C64">      at processImmediate (internal/timers.js:461:21)</font>

  17) CallView Funcs Test 1
       Check Subscription Functions
         should Check Subscriptions With User Name:
<font color="#C01C28">     TypeError: Cannot read property &apos;entries&apos; of undefined</font>
<font color="#5E5C64">      at Context.&lt;anonymous&gt; (src/index.test.js:154:59)</font>
<font color="#5E5C64">      at processImmediate (internal/timers.js:461:21)</font>

  18) CallView Funcs Test 1
       Getting Plan Data Count
         should Get Plan Data Length:
<font color="#C01C28">     AssertionError [ERR_ASSERTION]: {</font>
<font color="#C01C28">  debugMessage: [String (Text): &apos;&apos;] {</font>
<font color="#C01C28">    createdAtHash: undefined,</font>
<font color="#C01C28">    registry: TypeRegistry {</font>
<font color="#C01C28">      createdAtHash: undefined</font>
<font color="#C01C28">    }</font>
<font color="#C01C28">  },</font>
<font color="#C01C28">  gasConsumed: u64 {</font>
<font color="#C01C28">    createdAtHash: undefined,</font>
<font color="#C01C28">    length: 1,</font>
<font color="#C01C28">    negative: 0,</font>
<font color="#C01C28">    red: null,</font>
<font color="#C01C28">    registry: TypeRegistry {</font>
<font color="#C01C28">      createdAtHash: undefined</font>
<font color="#C01C28">    },</font>
<font color="#C01C28">    words: [</font>
<font color="#C01C28">      0</font>
<font color="#C01C28">    ]</font>
<font color="#C01C28">  },</font>
<font color="#C01C28">  gasRequired: u64 {</font>
<font color="#C01C28">    createdAtHash: undefined,</font>
<font color="#C01C28">    length: 1,</font>
<font color="#C01C28">    negative: 0,</font>
<font color="#C01C28">    red: null,</font>
<font color="#C01C28">    registry: TypeRegistry {</font>
<font color="#C01C28">      createdAtHash: undefined</font>
<font color="#C01C28">    },</font>
<font color="#C01C28">    wo... == 1</font>
<font color="#5E5C64">      at Context.&lt;anonymous&gt; (src/index.test.js:164:14)</font>
<font color="#5E5C64">      at processTicksAndRejections (internal/process/task_queues.js:93:5)</font>
</pre>