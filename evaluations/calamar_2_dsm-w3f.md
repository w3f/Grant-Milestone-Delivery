# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Calamar.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul>| [LICENSE](https://github.com/topmonks/calamar/blob/fc791d5ddc433cea71b3587dc0718c50a017c9ee/LICENSE.txt) | |
| 0b. | Documentation | <ul><li>[x] </li></ul>| [README](https://github.com/topmonks/calamar/blob/fc791d5ddc433cea71b3587dc0718c50a017c9ee/README.md), [Calamar docs](https://docs.calamar.app/) | |
| 0c. | Testing Guide | <ul><li>[x] </li></ul>| [README#Test](https://github.com/topmonks/calamar/blob/fc791d5ddc433cea71b3587dc0718c50a017c9ee/README.md#test), [E2E tests](https://github.com/topmonks/calamar/tree/fc791d5ddc433cea71b3587dc0718c50a017c9ee/test/e2e), [GitHub workflow](https://github.com/topmonks/calamar/blob/fc791d5ddc433cea71b3587dc0718c50a017c9ee/.github/workflows/test-and-deploy.yml#L27), [Test reports](https://github.com/topmonks/calamar/deployments?environment=test-report#activity-log), [Screenshots](https://app.argos-ci.com/topmonks/calamar) |  |
| 0d. | Docker | <ul><li>[x] </li></ul>| [Dockerfile](https://github.com/topmonks/calamar/blob/fc791d5ddc433cea71b3587dc0718c50a017c9ee/Dockerfile), [README#Docker](https://github.com/topmonks/calamar/blob/fc791d5ddc433cea71b3587dc0718c50a017c9ee/README.md#docker) | |
| 0e. | Article | <ul><li>[x] </li></ul>| [Article](https://medium.com/topmonks/calamar-block-explorer-milestone-2-finished-ca581f95301a) | |
| 1. | Account / Balance overview | <ul><li>[x] </li></ul>| [PR#142](https://github.com/topmonks/calamar/pull/142), [Example](https://c5a84f4a.calamar.pages.dev/kusama/account/GLjawuGpmgzma4JkR4A56esGofJVKXWdDAuGeF6o5D66wGE) |  |
| 2. | Account / Balance charts | <ul><li>[x] </li></ul>| [PR#143](https://github.com/topmonks/calamar/pull/143), [Example](https://c5a84f4a.calamar.pages.dev/kusama/account/GLjawuGpmgzma4JkR4A56esGofJVKXWdDAuGeF6o5D66wGE) |  |
| 3. | Account / Transfers list | <ul><li>[x] </li></ul>| [PR#134](https://github.com/topmonks/calamar/pull/134), [Example](https://c5a84f4a.calamar.pages.dev/kusama/account/GLjawuGpmgzma4JkR4A56esGofJVKXWdDAuGeF6o5D66wGE) |  |
| 4. | Account / Calls list | <ul><li>[x] </li></ul>| [PR#125](https://github.com/topmonks/calamar/pull/125), [Example](https://c5a84f4a.calamar.pages.dev/kusama/account/GLjawuGpmgzma4JkR4A56esGofJVKXWdDAuGeF6o5D66wGE) |  |
| 5. | Account / Identity info | <ul><li>[x] </li></ul>| [PR#150](https://github.com/topmonks/calamar/pull/150), [Example](https://c5a84f4a.calamar.pages.dev/kusama/account/EMRpBNnfAqRb62b14cxmnCdihtUjEeyh6tfyhGwnGwxjY8F) |  |
| 6. | Chain dashboard / Stats | <ul><li>[x] </li></ul>| [PR#149](https://github.com/topmonks/calamar/pull/149), [Example](https://c5a84f4a.calamar.pages.dev/polkadot) |  |
| 7. | Chain dashboard / Asset value chart | <ul><li>[x] </li></ul>| [PR#149](https://github.com/topmonks/calamar/pull/149), [Example](https://c5a84f4a.calamar.pages.dev/polkadot) |  |
| 8. | Chain dashboard / Latest blocks | <ul><li>[x] </li></ul>| [PR#136](https://github.com/topmonks/calamar/pull/136), [Example](https://c5a84f4a.calamar.pages.dev/polkadot) |  |
| 9. | Chain dashboard / Latest transfers | <ul><li>[x] </li></ul>| [PR#135](https://github.com/topmonks/calamar/pull/135), [Example](https://c5a84f4a.calamar.pages.dev/polkadot) |  |
| 10. | Chain dashboard / Top holders | <ul><li>[x] </li></ul>| [PR#137](https://github.com/topmonks/calamar/pull/137), [Example](https://c5a84f4a.calamar.pages.dev/polkadot) |  |

## Evaluation V2

### Automatic Test

All tests passed this time.

```
user@localhost:~/Documents/calamar/calamar$ npm run test

> calamar@0.1.0 test
> playwright test


Running 128 tests using 1 worker

  128 passed (18.8m)

To open last HTML report run:

  npx playwright show-report test/report
```

### Code quality

Some lint warnings were fixed but other warnings remain, for example:

```
/home/user/Documents/calamar/calamar/src/utils/addRuntimeSpec.ts
  16:16  warning  Forbidden non-null assertion  @typescript-eslint/no-non-null-assertion
  28:16  warning  Forbidden non-null assertion  @typescript-eslint/no-non-null-assertion

/home/user/Documents/calamar/calamar/src/utils/assert.ts
  3:31  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  3:47  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/home/user/Documents/calamar/calamar/src/utils/compare.ts
  23:12  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  23:25  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  25:19  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  25:32  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  32:70  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/home/user/Documents/calamar/calamar/src/utils/extractConnectionItems.ts
  5:44  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  5:53  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  5:68  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  5:76  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/home/user/Documents/calamar/calamar/src/utils/fetchGraphql.ts
  3:40  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/home/user/Documents/calamar/calamar/src/utils/filterToWhere.ts
  1:39  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/home/user/Documents/calamar/calamar/src/utils/number.ts
  25:32  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  56:33  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/home/user/Documents/calamar/calamar/src/utils/tryJsonParse.ts
  1:37  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/home/user/Documents/calamar/calamar/src/utils/uniq.ts
  5:62  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

✖ 104 problems (0 errors, 104 warnings)

```

## Evaluation V1

### Automatic Test

I ran the E2E tests, and some tests failed with timeout, for example, the failed tests 1, 13, and 14:

```
user@localhost:~/Documents/calamar/calamar$ npm run test

> calamar@0.1.0 test
> playwright test


Running 128 tests using 8 workers
  1) [desktop] › e2e/chainDashboard.spec.ts:14:6 › Chain dashboard page › shows latest extrinsics tab

	Test timeout of 60000ms exceeded.

	page.evaluate: Target closed

   	at utils/events.ts:26

  	24 |     };
  	25 |
	> 26 |     return page.evaluate(([eventName, serializedCondition, timeout]) => {
     	|             	^
  	27 |    	 const condition = new Function(`return ${serializedCondition}`)();
  	28 |
  	29 |    	 return new Promise<void>((resolve, reject) => {

    	at waitForPageEvent (/home/user/Documents/calamar/calamar/test/utils/events.ts:26:14)
    	at navigate (/home/user/Documents/calamar/calamar/test/utils/navigate.ts:26:25)
    	at /home/user/Documents/calamar/calamar/test/e2e/chainDashboard.spec.ts:15:3

	Pending operations:
  	- page.evaluate at test/utils/events.ts:26:14
  	- page.evaluate at test/utils/screenshot.ts:32:7


	attachment #2: video (video/webm) --------------------------------------------------------------
	test/results/e2e-chainDashboard-Chain-dashboard-page-shows-latest-extrinsics-tab-desktop/video.webm
	------------------------------------------------------------------------------------------------

	attachment #3: trace (application/zip) ---------------------------------------------------------
	test/results/e2e-chainDashboard-Chain-dashboard-page-shows-latest-extrinsics-tab-desktop/trace.zip
	Usage:

    	npx playwright show-trace test/results/e2e-chainDashboard-Chain-dashboard-page-shows-latest-extrinsics-tab-desktop/trace.zip

	------------------------------------------------------------------------------------------------

  13) [mobile] › e2e/chainDashboard.spec.ts:100:6 › Chain dashboard page › show error message when transfers items fetch fails

	Test timeout of 60000ms exceeded.

	page.evaluate: Target closed

   	at utils/events.ts:26

  	24 |     };
  	25 |
	> 26 |     return page.evaluate(([eventName, serializedCondition, timeout]) => {
     	|             	^
  	27 |    	 const condition = new Function(`return ${serializedCondition}`)();
  	28 |
  	29 |    	 return new Promise<void>((resolve, reject) => {

    	at waitForPageEvent (/home/user/Documents/calamar/calamar/test/utils/events.ts:26:14)
    	at navigate (/home/user/Documents/calamar/calamar/test/utils/navigate.ts:26:25)
    	at /home/user/Documents/calamar/calamar/test/e2e/chainDashboard.spec.ts:114:3

	Pending operations:
  	- page.evaluate at test/utils/events.ts:26:14
  	- page.evaluate at test/utils/screenshot.ts:32:7


	attachment #2: video (video/webm) --------------------------------------------------------------
	test/results/e2e-chainDashboard-Chain-dashboard-page-show-error-message-when-transfers-items-fetch-fails-mobile/video.webm
	------------------------------------------------------------------------------------------------

	attachment #3: trace (application/zip) ---------------------------------------------------------
	test/results/e2e-chainDashboard-Chain-dashboard-page-show-error-message-when-transfers-items-fetch-fails-mobile/trace.zip
	Usage:

    	npx playwright show-trace test/results/e2e-chainDashboard-Chain-dashboard-page-show-error-message-when-transfers-items-fetch-fails-mobile/trace.zip

	------------------------------------------------------------------------------------------------

  14) [mobile] › e2e/chainDashboard.spec.ts:50:6 › Chain dashboard page › show error message when extrinsics items fetch fails

	Test timeout of 60000ms exceeded.

	page.evaluate: Target closed

   	at utils/events.ts:26

  	24 |     };
  	25 |
	> 26 |     return page.evaluate(([eventName, serializedCondition, timeout]) => {
     	|             	^
  	27 |    	 const condition = new Function(`return ${serializedCondition}`)();
  	28 |
  	29 |    	 return new Promise<void>((resolve, reject) => {

    	at waitForPageEvent (/home/user/Documents/calamar/calamar/test/utils/events.ts:26:14)
    	at navigate (/home/user/Documents/calamar/calamar/test/utils/navigate.ts:26:25)
    	at /home/user/Documents/calamar/calamar/test/e2e/chainDashboard.spec.ts:64:3

	Pending operations:
  	- page.evaluate at test/utils/events.ts:26:14
  	- page.evaluate at test/utils/screenshot.ts:32:7


	attachment #2: video (video/webm) --------------------------------------------------------------
	test/results/e2e-chainDashboard-Chain-dashboard-page-show-error-message-when-extrinsics-items-fetch-fails-mobile/video.webm
	------------------------------------------------------------------------------------------------

	attachment #3: trace (application/zip) ---------------------------------------------------------
	test/results/e2e-chainDashboard-Chain-dashboard-page-show-error-message-when-extrinsics-items-fetch-fails-mobile/trace.zip
	Usage:

    	npx playwright show-trace test/results/e2e-chainDashboard-Chain-dashboard-page-show-error-message-when-extrinsics-items-fetch-fails-mobile/trace.zip

	------------------------------------------------------------------------------------------------


  14 failed
	[desktop] › e2e/chainDashboard.spec.ts:14:6 › Chain dashboard page › shows latest extrinsics tab
	[desktop] › e2e/chainDashboard.spec.ts:23:6 › Chain dashboard page › shows latest blocks tab ===
	[desktop] › e2e/chainDashboard.spec.ts:32:6 › Chain dashboard page › shows latest transfers tab
	[desktop] › e2e/chainDashboard.spec.ts:41:6 › Chain dashboard page › shows top holders tab =====
	[desktop] › e2e/chainDashboard.spec.ts:50:6 › Chain dashboard page › show error message when extrinsics items fetch fails
	[desktop] › e2e/chainDashboard.spec.ts:74:6 › Chain dashboard page › show error message when blocks items fetch fails
	[desktop] › e2e/chainDashboard.spec.ts:100:6 › Chain dashboard page › show error message when transfers items fetch fails
	[mobile] › e2e/chainDashboard.spec.ts:14:6 › Chain dashboard page › shows latest extrinsics tab
	[mobile] › e2e/chainDashboard.spec.ts:23:6 › Chain dashboard page › shows latest blocks tab ====
	[mobile] › e2e/chainDashboard.spec.ts:32:6 › Chain dashboard page › shows latest transfers tab =
	[mobile] › e2e/chainDashboard.spec.ts:41:6 › Chain dashboard page › shows top holders tab ======
	[mobile] › e2e/chainDashboard.spec.ts:50:6 › Chain dashboard page › show error message when extrinsics items fetch fails
	[mobile] › e2e/chainDashboard.spec.ts:74:6 › Chain dashboard page › show error message when blocks items fetch fails
	[mobile] › e2e/chainDashboard.spec.ts:100:6 › Chain dashboard page › show error message when transfers items fetch fails
  114 passed (4.7m)

```

Do these tests need some configuration to avoid this?

### Manual Test

I ran the front end and was able to check the change in the homepage and the improvements for the account and chain dashboard pages. The application seems to be working fine but I need some explanation about the tests failing.

### Code quality

I ran `npm run lint` and received some warnings, for example:

```
user@localhost:~/Documents/calamar/calamar$ npm run lint

> calamar@0.1.0 lint
> eslint ./src
.
.
.
/home/user/Documents/calamar/calamar/src/services/fetchService.ts
   4:40  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  14:40  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  24:40  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  34:36  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  44:46  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  54:37  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/home/user/Documents/calamar/calamar/src/services/runtimeService.ts
  48:15  warning  Forbidden non-null assertion  @typescript-eslint/no-non-null-assertion

/home/user/Documents/calamar/calamar/src/services/statsService.ts
   6:27  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  51:18  warning  Forbidden non-null assertion          	@typescript-eslint/no-non-null-assertion

/home/user/Documents/calamar/calamar/src/services/transfersService.ts
  134:26  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/home/user/Documents/calamar/calamar/src/services/usdRatesService.ts
  27:14  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/home/user/Documents/calamar/calamar/src/utils/addRuntimeSpec.ts
  16:16  warning  Forbidden non-null assertion  @typescript-eslint/no-non-null-assertion
  28:16  warning  Forbidden non-null assertion  @typescript-eslint/no-non-null-assertion

/home/user/Documents/calamar/calamar/src/utils/assert.ts
  3:31  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  3:47  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/home/user/Documents/calamar/calamar/src/utils/compare.ts
  23:12  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  23:25  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  25:19  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  25:32  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  32:70  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/home/user/Documents/calamar/calamar/src/utils/extractConnectionItems.ts
  5:44  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  5:53  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  5:68  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  5:76  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/home/user/Documents/calamar/calamar/src/utils/fetchGraphql.ts
  3:40  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/home/user/Documents/calamar/calamar/src/utils/filterToWhere.ts
  1:39  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/home/user/Documents/calamar/calamar/src/utils/number.ts
  25:32  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  56:33  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/home/user/Documents/calamar/calamar/src/utils/tryJsonParse.ts
  1:37  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/home/user/Documents/calamar/calamar/src/utils/uniq.ts
  5:62  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

✖ 121 problems (0 errors, 121 warnings)
```
