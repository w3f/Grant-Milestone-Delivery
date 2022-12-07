# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/substats.md  
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a.    | License                 |<ul><li>[X] </li></ul>|                                                              | Apache 2.0                         |
| 0b.    | Documentation           |<ul><li>[ ] </li></ul>| [README.md](https://github.com/CESSProject/substats/blob/master/README.md) | Not fully evaluated yet. |
| 0c.    | Testing Guide           |<ul><li>[ ] </li></ul>| [testing-guide.md](https://github.com/CESSProject/substats/blob/master/documents/testing-guide.md) | Automated tests failing |
| 1a.    | Develop the webservice  |<ul><li>[x] </li></ul>| [about-framework.md](https://github.com/CESSProject/substats/blob/master/documents/about-framework.md) |  |
| 1b.    | Develop the polkadot.js |<ul><li>[ ] </li></ul>| Connect to the RPC node<br /> [https://github.com/CESSProject/substats/blob/master/bll/init-polkadot-api.js#L22](https://github.com/CESSProject/substats/blob/master/bll/init-polkadot-api.js#L22)<br /><br />Get block info and transfer<br />[https://github.com/CESSProject/substats/blob/master/app/sync-block/index.js#L44](https://github.com/CESSProject/substats/blob/master/app/sync-block/index.js#L44)<br /><br />Get block events by block hash<br />[https://github.com/CESSProject/substats/blob/master/app/sync-block/index.js#L52](https://github.com/CESSProject/substats/blob/master/app/sync-block/index.js#L52)<br /><br />Account query<br />[https://github.com/CESSProject/substats/blob/master/app/timer/get-accounts.js#L38](https://github.com/CESSProject/substats/blob/master/app/timer/get-accounts.js#L38)<br /><br />Miner query<br />[https://github.com/CESSProject/substats/blob/master/app/timer/get-miners.js#L32](https://github.com/CESSProject/substats/blob/master/app/timer/get-accounts.js#L38)<br /><br />Subscribe new block header<br />[https://github.com/CESSProject/substats/blob/master/bll/sub.js#L19](https://github.com/CESSProject/substats/blob/master/bll/sub.js#L19) | Not fully evaluated yet |
| 1c.    | Develop the API         |<ul><li>[ ] </li></ul>| [api-docs.md](https://github.com/CESSProject/substats/blob/master/documents/api-docs.md) | Some calls with problems |
| 1d.    | Create the database     |<ul><li>[x] </li></ul>| [about-database.md](https://github.com/CESSProject/substats/blob/master/documents/about-database.md) | Ran ok using docker |


**General Notes** 

### Running the system

I was able to run the system using docker-compose without problems. 


### API Testing 

I ran the system using docker-compose and performed the API calls instructed in [this document](https://github.com/CESSProject/substats/blob/master/documents/api-docs.md) with the following result. Some of them seem to have problems. Could you please explain or provide a fix for the ones where the actual result is different from the expected one?

**Data Dictionary**

```
{
	"msg": "ok",
	"data": []
}
```

**Chain State Query**

```
{
	"msg": "api.query.fileBank not a function"
}
```

**Chain Consts**
```
{
	"msg": "ok",
	"data": {
		"baseBlock": {
			"refTime": "5,849,907,000"
		},
		"maxBlock": {
			"refTime": "2,000,000,000,000"
		},
		"perClass": {
			"normal": {
				"baseExtrinsic": {
					"refTime": "85,212,000"
				},
				"maxExtrinsic": {
					"refTime": "1,479,914,788,000"
				},
				"maxTotal": {
					"refTime": "1,500,000,000,000"
				},
				"reserved": {
					"refTime": "0"
				}
			},
			"operational": {
				"baseExtrinsic": {
					"refTime": "85,212,000"
				},
				"maxExtrinsic": {
					"refTime": "1,979,914,788,000"
				},
				"maxTotal": {
					"refTime": "2,000,000,000,000"
				},
				"reserved": {
					"refTime": "500,000,000,000"
				}
			},
			"mandatory": {
				"baseExtrinsic": {
					"refTime": "85,212,000"
				},
				"maxExtrinsic": null,
				"maxTotal": null,
				"reserved": null
			}
		}
	}
}
```
**Query List and Query Details**

Take a long time and didn't return any result from the API call.


### Automated Tests

Even with the database configuration performed as instructed the automated tests are failing with the following trace:

```
/substats # npm run test

> cess-explorer@0.1.0 test
> jest

 PASS  bll/keyring.test.js
 FAIL  controls/queryDB/common.test.js
  ● query the block list

    TypeError: Cannot read properties of undefined (reading 'mysql')

       7 |     if (!conn) {
       8 |       let webconfig = global.webconfig;
    >  9 |       conn = mysql.createPool(webconfig.mysql);
         |                                         ^
      10 |     }
      11 |     this.conn = conn;
      12 |     this.tableName = tableName;

      at new mysql (dal/mysql-base.js:9:41)
      at DalCommon._createSuperInternal (dal/dal-common.js:10:14)
      at new DalCommon (dal/dal-common.js:14:26)
      at _callee$ (controls/queryDB/common.js:42:13)
      at tryCatch (node_modules/@babel/runtime/helpers/regeneratorRuntime.js:44:17)
      at Generator.<anonymous> (node_modules/@babel/runtime/helpers/regeneratorRuntime.js:125:22)
      at Generator.next (node_modules/@babel/runtime/helpers/regeneratorRuntime.js:69:21)
      at asyncGeneratorStep (node_modules/@babel/runtime/helpers/asyncToGenerator.js:3:24)
      at _next (node_modules/@babel/runtime/helpers/asyncToGenerator.js:22:9)
      at node_modules/@babel/runtime/helpers/asyncToGenerator.js:27:7
      at node_modules/@babel/runtime/helpers/asyncToGenerator.js:19:12
      at controls/queryDB/common.js:54:2
      at main (controls/queryDB/common.test.js:18:9)
      at tryCatch (node_modules/@babel/runtime/helpers/regeneratorRuntime.js:44:17)
      at Generator.<anonymous> (node_modules/@babel/runtime/helpers/regeneratorRuntime.js:125:22)
      at Generator.next (node_modules/@babel/runtime/helpers/regeneratorRuntime.js:69:21)
      at asyncGeneratorStep (node_modules/@babel/runtime/helpers/asyncToGenerator.js:3:24)
      at _next (node_modules/@babel/runtime/helpers/asyncToGenerator.js:22:9)
      at node_modules/@babel/runtime/helpers/asyncToGenerator.js:27:7
      at Object.<anonymous> (node_modules/@babel/runtime/helpers/asyncToGenerator.js:19:12)

  ● query the transaction list

    TypeError: Cannot read properties of undefined (reading 'mysql')

       7 |     if (!conn) {
       8 |       let webconfig = global.webconfig;
    >  9 |       conn = mysql.createPool(webconfig.mysql);
         |                                         ^
      10 |     }
      11 |     this.conn = conn;
      12 |     this.tableName = tableName;

      at new mysql (dal/mysql-base.js:9:41)
      at DalCommon._createSuperInternal (dal/dal-common.js:10:14)
      at new DalCommon (dal/dal-common.js:14:26)
      at _callee$ (controls/queryDB/common.js:42:13)
      at tryCatch (node_modules/@babel/runtime/helpers/regeneratorRuntime.js:44:17)
      at Generator.<anonymous> (node_modules/@babel/runtime/helpers/regeneratorRuntime.js:125:22)
      at Generator.next (node_modules/@babel/runtime/helpers/regeneratorRuntime.js:69:21)
      at asyncGeneratorStep (node_modules/@babel/runtime/helpers/asyncToGenerator.js:3:24)
      at _next (node_modules/@babel/runtime/helpers/asyncToGenerator.js:22:9)
      at node_modules/@babel/runtime/helpers/asyncToGenerator.js:27:7
      at node_modules/@babel/runtime/helpers/asyncToGenerator.js:19:12
      at controls/queryDB/common.js:54:2
      at main (controls/queryDB/common.test.js:36:9)
      at tryCatch (node_modules/@babel/runtime/helpers/regeneratorRuntime.js:44:17)
      at Generator.<anonymous> (node_modules/@babel/runtime/helpers/regeneratorRuntime.js:125:22)
      at Generator.next (node_modules/@babel/runtime/helpers/regeneratorRuntime.js:69:21)
      at asyncGeneratorStep (node_modules/@babel/runtime/helpers/asyncToGenerator.js:3:24)
      at _next (node_modules/@babel/runtime/helpers/asyncToGenerator.js:22:9)
      at node_modules/@babel/runtime/helpers/asyncToGenerator.js:27:7
      at Object.<anonymous> (node_modules/@babel/runtime/helpers/asyncToGenerator.js:19:12)

  ● query the miner list

    TypeError: Cannot read properties of undefined (reading 'mysql')

       7 |     if (!conn) {
       8 |       let webconfig = global.webconfig;
    >  9 |       conn = mysql.createPool(webconfig.mysql);
         |                                         ^
      10 |     }
      11 |     this.conn = conn;
      12 |     this.tableName = tableName;

      at new mysql (dal/mysql-base.js:9:41)
      at DalCommon._createSuperInternal (dal/dal-common.js:10:14)
      at new DalCommon (dal/dal-common.js:14:26)
      at _callee$ (controls/queryDB/common.js:42:13)
      at tryCatch (node_modules/@babel/runtime/helpers/regeneratorRuntime.js:44:17)
      at Generator.<anonymous> (node_modules/@babel/runtime/helpers/regeneratorRuntime.js:125:22)
      at Generator.next (node_modules/@babel/runtime/helpers/regeneratorRuntime.js:69:21)
      at asyncGeneratorStep (node_modules/@babel/runtime/helpers/asyncToGenerator.js:3:24)
      at _next (node_modules/@babel/runtime/helpers/asyncToGenerator.js:22:9)
      at node_modules/@babel/runtime/helpers/asyncToGenerator.js:27:7
      at node_modules/@babel/runtime/helpers/asyncToGenerator.js:19:12
      at controls/queryDB/common.js:54:2
      at main (controls/queryDB/common.test.js:53:9)
      at tryCatch (node_modules/@babel/runtime/helpers/regeneratorRuntime.js:44:17)
      at Generator.<anonymous> (node_modules/@babel/runtime/helpers/regeneratorRuntime.js:125:22)
      at Generator.next (node_modules/@babel/runtime/helpers/regeneratorRuntime.js:69:21)
      at asyncGeneratorStep (node_modules/@babel/runtime/helpers/asyncToGenerator.js:3:24)
      at _next (node_modules/@babel/runtime/helpers/asyncToGenerator.js:22:9)
      at node_modules/@babel/runtime/helpers/asyncToGenerator.js:27:7
      at Object.<anonymous> (node_modules/@babel/runtime/helpers/asyncToGenerator.js:19:12)

  ● query the miner_summary list

    TypeError: Cannot read properties of undefined (reading 'mysql')

       7 |     if (!conn) {
       8 |       let webconfig = global.webconfig;
    >  9 |       conn = mysql.createPool(webconfig.mysql);
         |                                         ^
      10 |     }
      11 |     this.conn = conn;
      12 |     this.tableName = tableName;

      at new mysql (dal/mysql-base.js:9:41)
      at DalCommon._createSuperInternal (dal/dal-common.js:10:14)
      at new DalCommon (dal/dal-common.js:14:26)
      at _callee$ (controls/queryDB/common.js:42:13)
      at tryCatch (node_modules/@babel/runtime/helpers/regeneratorRuntime.js:44:17)
      at Generator.<anonymous> (node_modules/@babel/runtime/helpers/regeneratorRuntime.js:125:22)
      at Generator.next (node_modules/@babel/runtime/helpers/regeneratorRuntime.js:69:21)
      at asyncGeneratorStep (node_modules/@babel/runtime/helpers/asyncToGenerator.js:3:24)
      at _next (node_modules/@babel/runtime/helpers/asyncToGenerator.js:22:9)
      at node_modules/@babel/runtime/helpers/asyncToGenerator.js:27:7
      at node_modules/@babel/runtime/helpers/asyncToGenerator.js:19:12
      at controls/queryDB/common.js:54:2
      at main (controls/queryDB/common.test.js:70:9)
      at tryCatch (node_modules/@babel/runtime/helpers/regeneratorRuntime.js:44:17)
      at Generator.<anonymous> (node_modules/@babel/runtime/helpers/regeneratorRuntime.js:125:22)
      at Generator.next (node_modules/@babel/runtime/helpers/regeneratorRuntime.js:69:21)
      at asyncGeneratorStep (node_modules/@babel/runtime/helpers/asyncToGenerator.js:3:24)
      at _next (node_modules/@babel/runtime/helpers/asyncToGenerator.js:22:9)
      at node_modules/@babel/runtime/helpers/asyncToGenerator.js:27:7
      at Object.<anonymous> (node_modules/@babel/runtime/helpers/asyncToGenerator.js:19:12)

 PASS  controls/storage/index.test.js (6.046 s)
  ● Console

    console.log
      ws client list is empty.

      at Object.log [as send] (bll/ws-helper.js:4:13)

    console.log
      connect success  wss://polkadot.api.onfinality.io/public-ws

      at EventEmitter.log (bll/init-polkadot-api.js:28:15)

    console.log
      ws client list is empty.

      at Object.log [as send] (bll/ws-helper.js:4:13)

    console.warn
      2022-12-07 16:53:17        API/INIT: RPC methods not decorated: mmr_root, mmr_verifyProof, mmr_verifyProofStateless, transaction_unstable_submitAndWatch, transaction_unstable_unwatch

      at apply (node_modules/@polkadot/util/cjs/logger.js:62:22)
      at Object.warn (node_modules/@polkadot/util/cjs/logger.js:131:14)
      at ApiPromise._filterRpcMethods (node_modules/@polkadot/api/cjs/base/Decorate.js:342:9)
      at ApiPromise._filterRpc (node_modules/@polkadot/api/cjs/base/Decorate.js:305:10)
      at ApiPromise._metaFromChain (node_modules/@polkadot/api/cjs/base/Init.js:356:10)
      at ApiPromise._loadMeta (node_modules/@polkadot/api/cjs/base/Init.js:284:229)
      at ApiPromise._onProviderConnect2 (node_modules/@polkadot/api/cjs/base/Init.js:429:21)

    console.log
      { msg: 'ok', data: 1670431992014 }

      at Object.log [as json] (controls/storage/index.test.js:13:15)

 FAIL  controls/queryDB/dics.test.js
  ● Test suite failed to run

    TypeError: Cannot read properties of undefined (reading 'mysql')

       7 |     if (!conn) {
       8 |       let webconfig = global.webconfig;
    >  9 |       conn = mysql.createPool(webconfig.mysql);
         |                                         ^
      10 |     }
      11 |     this.conn = conn;
      12 |     this.tableName = tableName;

      at new mysql (dal/mysql-base.js:9:41)
      at DalCommon._createSuperInternal (dal/dal-common.js:10:14)
      at new DalCommon (dal/dal-common.js:14:26)
      at Object.<anonymous> (bll/init.js:11:19)
      at Object.require (controls/queryDB/dics.js:11:14)
      at Object.require (controls/queryDB/dics.test.js:1:14)

 PASS  controls/chain-state/constants.test.js
  ● Console

    console.log
      ws client list is empty.

      at Object.log [as send] (bll/ws-helper.js:4:13)

    console.log
      connect success  wss://polkadot.api.onfinality.io/public-ws

      at EventEmitter.log (bll/init-polkadot-api.js:28:15)

    console.log
      ws client list is empty.

      at Object.log [as send] (bll/ws-helper.js:4:13)

    console.warn
      2022-12-07 16:53:18        API/INIT: RPC methods not decorated: mmr_root, mmr_verifyProof, mmr_verifyProofStateless, transaction_unstable_submitAndWatch, transaction_unstable_unwatch

      at apply (node_modules/@polkadot/util/cjs/logger.js:62:22)
      at Object.warn (node_modules/@polkadot/util/cjs/logger.js:131:14)
      at ApiPromise._filterRpcMethods (node_modules/@polkadot/api/cjs/base/Decorate.js:342:9)
      at ApiPromise._filterRpc (node_modules/@polkadot/api/cjs/base/Decorate.js:305:10)
      at ApiPromise._metaFromChain (node_modules/@polkadot/api/cjs/base/Init.js:356:10)
      at ApiPromise._loadMeta (node_modules/@polkadot/api/cjs/base/Init.js:284:229)
      at ApiPromise._onProviderConnect2 (node_modules/@polkadot/api/cjs/base/Init.js:429:21)

    console.log
      {
        msg: 'ok',
        data: {
          baseBlock: { refTime: '5,849,907,000' },
          maxBlock: { refTime: '2,000,000,000,000' },
          perClass: { normal: [Object], operational: [Object], mandatory: [Object] }
        }
      }

      at Object.log [as json] (controls/chain-state/constants.test.js:13:15)

 FAIL  bll/init.test.js
  ● Test suite failed to run

    TypeError: Cannot read properties of undefined (reading 'mysql')

       7 |     if (!conn) {
       8 |       let webconfig = global.webconfig;
    >  9 |       conn = mysql.createPool(webconfig.mysql);
         |                                         ^
      10 |     }
      11 |     this.conn = conn;
      12 |     this.tableName = tableName;

      at new mysql (dal/mysql-base.js:9:41)
      at DalCommon._createSuperInternal (dal/dal-common.js:10:14)
      at new DalCommon (dal/dal-common.js:14:26)
      at Object.<anonymous> (bll/init.js:11:19)
      at Object.require (bll/init.test.js:1:14)

 PASS  bll/init-polkadot-api.test.js
  ● Console

    console.log
      ws client list is empty.

      at Object.log [as send] (bll/ws-helper.js:4:13)

    console.log
      connect success  wss://polkadot.api.onfinality.io/public-ws

      at EventEmitter.log (bll/init-polkadot-api.js:28:15)

    console.log
      ws client list is empty.

      at Object.log [as send] (bll/ws-helper.js:4:13)

    console.warn
      2022-12-07 16:53:18        API/INIT: RPC methods not decorated: mmr_root, mmr_verifyProof, mmr_verifyProofStateless, transaction_unstable_submitAndWatch, transaction_unstable_unwatch

      at apply (node_modules/@polkadot/util/cjs/logger.js:62:22)
      at Object.warn (node_modules/@polkadot/util/cjs/logger.js:131:14)
      at ApiPromise._filterRpcMethods (node_modules/@polkadot/api/cjs/base/Decorate.js:342:9)
      at ApiPromise._filterRpc (node_modules/@polkadot/api/cjs/base/Decorate.js:305:10)
      at ApiPromise._metaFromChain (node_modules/@polkadot/api/cjs/base/Init.js:356:10)
      at ApiPromise._loadMeta (node_modules/@polkadot/api/cjs/base/Init.js:284:229)
      at ApiPromise._onProviderConnect2 (node_modules/@polkadot/api/cjs/base/Init.js:429:21)

    console.log
      block height 13254768

      at log (bll/init-polkadot-api.test.js:7:11)

A worker process has failed to exit gracefully and has been force exited. This is likely caused by tests leaking due to improper teardown. Try running with --detectOpenHandles to find leaks. Active timers can also cause this, ensure that .unref() was called on them.

Test Suites: 3 failed, 4 passed, 7 total
Tests:       4 failed, 5 passed, 9 total
Snapshots:   0 total
Time:        8.473 s
Ran all test suites.
```
