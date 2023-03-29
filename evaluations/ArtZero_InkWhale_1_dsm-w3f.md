# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ArtZero_InkWhale.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a.    | License            | <ul><li>[x] </li></ul>| https://github.com/InkWhale-net/contracts/blob/main/LICENSE  | |
| 0b.    | Documentation      | <ul><li>[X] </li></ul>| Official document is at https://docs.artzero.io/ Technical documents are at https://docs.google.com/document/d/1QWJW2YAFXcD_X-xvwcTee_W9Gfn2GXNdKYdoe0m7iv8/edit# and https://docs.google.com/document/d/1bPq9aFMaaVgKgsYWG3K4APubRK33OloY4_gHM3c8wo0/edit |  |
| 0c.    | Testing      | <ul><li>[ ] </li></ul>| Tests can be found at https://github.com/ArtZero-io/Contracts/tree/feature/ink-4-version/Azero_Contracts/tests | Some tests are failing. |
| 0d.    | Article/Tutorial   | <ul><li>[X] </li></ul>| Several articles are published at https://medium.com/@artzero_io |  |
| 1. | Smart contract Development | <ul><li>[ ] </li></ul>| Code can be found in https://github.com/ArtZero-io/Contracts branch feature/ink-4-version | Not fully evaluated yet.  |
| 2. | Backend | <ul><li>[ ] </li></ul>| Backend code is at https://github.com/ArtZero-io/backend and handles the following tasks: Monitor NFT bids in the queue and update Bid table in the database; Cache Images from IPFS to CloudFlare Image; Cache NFT Metadata to local database; Monitor NFT Collection changes and update the database; Monitor NFT Information and update the database; Telegram bot to alert system operators: queue length and access attempt and work load. | Not fully evaluated yet. |
| 3. | Frontend | <ul><li>[ ] </li></ul>| Our front-end demo can be seen at https://alephzero.artzero.io/ for AlephZero network. The git repo is at https://github.com/ArtZero-io/frontend-react branch ink4-upgrade | Not full evaluated yet |
| 4. | Testing | <ul><li>[X] </li></ul>| We will provide unit test for smart contracts. For Frontend and Backend testing we will provide Test Document with Plan and Test Cases for operating and using the NFT Marketplace | Some tests are failing.

## Evaluation V4


### Documentation

[In this part of the deploying guide](https://docs.alephzero.org/aleph-zero/build/deploying-your-contract-to-aleph-zero-testnet), the instructions recommend using the Polkadot.js to deploy the contracts, but now it seems not to be working because the Polkadot.js doesn't support WeightV2 yet.

### Frontend

I followed [this tesing guide](https://github.com/ArtZero-io/Contracts/blob/feature/ink-4-version/contract_deployment_and_update_addresses_abis.md#cache-data-for-pmp-nft) to get the admin function, this guide is complex, but it works. 

In the frontend, I tested all the features I couldn't test before, but I have some problems, for example, when I tried to activate the collections, I received this error:

![image (12)](https://user-images.githubusercontent.com/112647953/227582457-9394ea09-a4a2-4bcb-9a43-aabddacdd0ad.png)

After a minute the collection became active. When I tried to create a Collection in simple mode the same error appeared but this time no collection was created. Because of that, I couldn't create a simple NFT and lock the metadata. When I tested this function with the previously deployed contracts it was working.

In My Collections, I couldn't find how to edit the royalty percentage. In MY NFT and MY Stakes test are mentioned a page with All NFT and Stakes, but I in the page there is no "All" filter. Are these features still in the project? 


All other features are working fine.

### API

I tried again, and now the requests work fine.

### Code Quality

The warnings from Azero_Contracts were fixed.

### Automated tests

I tried to run the automated tests again and now all of them are failing. Could you assist with that?

```
0 passing (30s)
  7 failing

  1) Profile test
       "before all" hook for "Can get set attributes":
     TypeError: Cannot read properties of undefined (reading 'result')
      at Constructors.<anonymous> (typed_contracts/constructors/profile_manager.ts:48:55)
      at Generator.throw (<anonymous>)
      at rejected (typed_contracts/constructors/profile_manager.ts:6:65)

  2) Psp34 standard test
       "before all" hook for "Can mint without attrs":
     TypeError: Cannot read properties of undefined (reading 'result')
      at Constructors.<anonymous> (typed_contracts/constructors/psp34_nft.ts:54:55)
      at Generator.throw (<anonymous>)
      at rejected (typed_contracts/constructors/psp34_nft.ts:6:65)

  3) Launchpad manager test
       "before all" hook for "Can add project":
     TypeError: Cannot read properties of undefined (reading 'result')
      at Constructors.<anonymous> (typed_contracts/constructors/artzero_launchpad_psp34.ts:60:55)
      at Generator.throw (<anonymous>)
      at rejected (typed_contracts/constructors/artzero_launchpad_psp34.ts:6:65)

  4) Collection manager test
       "before all" hook for "Creating collection in simple mode works":
     TypeError: Cannot read properties of undefined (reading 'result')
      at Constructors.<anonymous> (typed_contracts/constructors/artzero_collection_manager.ts:58:55)
      at Generator.throw (<anonymous>)
      at rejected (typed_contracts/constructors/artzero_collection_manager.ts:6:65)

  5) Marketplace test
       "before all" hook for "Can list NFT":
     TypeError: Cannot read properties of undefined (reading 'result')
      at Constructors.<anonymous> (typed_contracts/constructors/psp34_nft.ts:54:55)
      at Generator.throw (<anonymous>)
      at rejected (typed_contracts/constructors/psp34_nft.ts:6:65)

  6) Psp34 launchpad standard test
       "before all" hook for "Can add whitelist":
     TypeError: Cannot read properties of undefined (reading 'result')
      at Constructors.<anonymous> (typed_contracts/constructors/artzero_launchpad_psp34.ts:60:55)
      at Generator.throw (<anonymous>)
      at rejected (typed_contracts/constructors/artzero_launchpad_psp34.ts:6:65)

  7) Staking test
       "before all" hook for "When staking is locked, not allow staking NFT":
     TypeError: Cannot read properties of undefined (reading 'result')
      at Constructors.<anonymous> (typed_contracts/constructors/psp34_nft.ts:54:55)
      at Generator.throw (<anonymous>)
      at rejected (typed_contracts/constructors/psp34_nft.ts:6:65)
```

## Evaluation V3

I evaluated both frontend and backend using the testnet provided. I still need to test both using a local substrate node. Please provide more detailed instructions for contract deployment and update the contract addresses and abi in the frontend application. Also, provide any config update instructions to point the backend and frontend to a local substrate node instead of the testnet provided. 

I also notice that there are no instructions on how to set the admin profile for testing.

### Backend

In Run Backend Job, needs to change `node az_bids_monitors` to `node az_bids_monitor` to match the name of the file.
The error in Az_events_collector seems to be fixed.

### API 

Some requests returned with success, but with an empty return. Here is a list of the requests:

- getBidsByBidderAddress
- getCollectionsByVolume
- getNFTsByOwnerAndCollection
- getNFTsByCollectionAddress
- getNewListEvents
- getUnlistEvents
- getPurchaseEvents
- getBidWinEvents
- getOwnershipHistory
- getAddRewardHistory
- getClaimRewardHistory

I tried getJSON and getCollectionContract requests using the API page provided and got:

```
TypeError: Windown.fetch: HEAD or GET Request cannot have a body.
```

I put `/ipfs/QmSdgNQ2zvJvaw8kP8oCJnmuFQUxVDBYrThYvV1C8k5bXU/131.json` in the input for getJson and nothing in getCollectionContract.

The other requests work fine.

### Frontend

I tested some features following the test plan.

In the part of Marketplace, I tested the collections creating one inactive collection and an NFT that doesn't appear in My NFTs. Because of that, I couldn't test other features related to NFT, excluding creating and editing the NFT.

In the part of LauchPad, I created a project and tried to update the project info the transaction was complete, but the project wasn't changing. When I tried to Update the art location, the transaction success but I don't view anything changing. I don't find the button Withdraw_Balance and couldn't test Owner mint, Mint an NFT, and Update project phases.

I couldn't test the Admin features, how to log in with admin?

In the MyAccount I haven't tested My NFTs and My Stake and the Mint NFT in My Project.

### Code Quality

`cargo +nightly clippy` in Azero_Contracts now finish to compile but still returning some warnings, for example:

```
...
warning: casting integer literal to `u8` is unnecessary
  --> traits/collection_manager.rs:19:5
   |
19 | 	Reserved2   	= 6,
   | 	^^^^^^^^^^^^^^^^^^^ help: try: `6_u8`
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#unnecessary_cast
warning: casting integer literal to `u8` is unnecessary
  --> traits/collection_manager.rs:13:5
   |
13 | 	Unknown     	= 0,
   | 	^^^^^^^^^^^^^^^^^^^ help: try: `0_u8`
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#unnecessary_cast
warning: `artzero_project` (lib) generated 32 warnings (6 duplicates) (run `cargo clippy --fix --lib -p artzero_project` to apply 16 suggestions)
	Finished dev [unoptimized + debuginfo] target(s) in 0.08s
```

## Evaluation V2

### Contract

All contracts build without problems and passed all tests.

### Backend

Az_events_collector got this error after some time running during the API testing.

```
Process latest block 24400590
Scanning block 24400587
Process latest block 24400591
Event from Collection Manager Contract...
/home/user/Documents/ArtZero/backend/node_modules/mongoose/lib/query.js:4913
  const castError = new CastError();
                	^
CastError: Cast to Number failed for value "Psp34Manual" (type string) at path "contractType" for model "CollectionEvent"
	at model.Query.exec (/home/user/Documents/ArtZero/backend/node_modules/mongoose/lib/query.js:4913:21)
	at Query.then (/home/user/Documents/ArtZero/backend/node_modules/mongoose/lib/query.js:5012:15)
	at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  messageFormat: undefined,
  stringValue: '"Psp34Manual"',
  kind: 'Number',
  value: 'Psp34Manual',
  path: 'contractType',
  reason: AssertionError [ERR_ASSERTION]: The expression evaluated to a falsy value:
 
	assert.ok(!isNaN(val))
 
  	at castNumber (/home/user/Documents/ArtZero/backend/node_modules/mongoose/lib/cast/number.js:27:10)
  	at SchemaNumber.cast (/home/user/Documents/ArtZero/backend/node_modules/mongoose/lib/schema/number.js:376:12)
  	at SchemaType.applySetters (/home/user/Documents/ArtZero/backend/node_modules/mongoose/lib/schematype.js:1201:12)
  	at SchemaType._castForQuery (/home/user/Documents/ArtZero/backend/node_modules/mongoose/lib/schematype.js:1648:15)
  	at SchemaNumber.castForQuery (/home/user/Documents/ArtZero/backend/node_modules/mongoose/lib/schema/number.js:430:14)
  	at SchemaType.castForQueryWrapper (/home/user/Documents/ArtZero/backend/node_modules/mongoose/lib/schematype.js:1612:20)
  	at cast (/home/user/Documents/ArtZero/backend/node_modules/mongoose/lib/cast.js:349:32)
  	at Query.cast (/home/user/Documents/ArtZero/backend/node_modules/mongoose/lib/query.js:5341:12)
  	at Query._castConditions (/home/user/Documents/ArtZero/backend/node_modules/mongoose/lib/query.js:2214:10)
  	at model.Query.<anonymous> (/home/user/Documents/ArtZero/backend/node_modules/mongoose/lib/query.js:2517:8) {
	generatedMessage: true,
	code: 'ERR_ASSERTION',
	actual: false,
	expected: true,
	operator: '=='
  },
  valueType: 'string'
}
Node.js v18.14.0
```

### API

API starts, but I only tested the first 5 tests in the testing guide, because 4 of them failed. I used the same inputs in the guide.

UpdateCollection
```
{
    "status": "FAILED",
    "message: "Not Exist Address"
}
```

UpdateAdress
```
{
    "status": "FAILED",
    "message: "Invalid Address"
}
```

newMintingEvent
```
{
    "status": "OK",
    "message: "SUCCESS"
}
```

UpdateNFT
```
{
    "status": "FAILED",
    "message: "Not Exist Address"
}
```

UpdateBids
```
{
    "status": "FAILED",
    "message: "Not Exist Collection Address"
}
```

### Frontend

It starts fine, but when I was testing, I got the error `Could not upload your image!!!.` when trying to create a collection or project. Because of that, I could only test the dashboard and my profile, it works fine.

Some features still use external API `https://api.artzero.io`. The ideal scenario for testing is to run all services locally.

### Code Quality

Problems returned from `cargo +nightly clippy` in Azero_Contracts aren't fixed.

The EsLint in the frontend now returns no problems.

## Evaluation V1


### Backend

Https://github.com/ArtZero-io/backend only have the LICENSE and README.MD, the source code is missing. We need the source code to test the application locally. Furthermore, the source code is a deliverable reported in the grant application.


### Frontend

The frontend ran but it needs the backend to work properly.


### System test

The ideal situation is to run all parts of the system locally for testing. I need a local server (backend) to do the System test of the application.


### Contracts Building and Testing

I built all contracts, however, the proxy contract presented an error.



```
user@localhost:~/Documents/Contracts/Azero_Contracts/contracts/proxy$ cargo +nightly contract build --release
warning: nothing to print.
To find dependencies that require specific target platforms, try to use option `--target all` first, and then narrow your search scope accordingly.
 [1/5] Building cargo project
	Updating crates.io index
	Updating git repository `https://github.com/Supercolony-net/openbrush-contracts`
	Updating git repository `https://github.com/paritytech/ink`
	Updating git repository `https://github.com/727-Ventures/openbrush-contracts`
	Updating git repository `https://github.com/Supercolony-net/pallet-assets-chain-extension`
	Updating git repository `https://github.com/727-ventures/pallet-assets-chain-extension`
	Updating git repository `https://github.com/Supercolony-net/obce`
	Updating git repository `https://github.com/727-Ventures/obce`
	Finished release [optimized] target(s) in 3.63s
 [2/5] Post processing wasm file
 [3/5] Optimizing wasm file
ERROR: ink dependency not found
```

The contract tests seem to be system tests and not unit ones as declared in the grant application. Furthermore, all test scripts fail. Please provide proper configuration or instructions to run these tests. 


The collection_manager_test.ts returned some problems. For example:

```
...
ts-node collection_manager_test.ts 
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        cjs 10.2.1      node_modules/@polkadot/util/cjs
        cjs 9.7.2       node_modules/@polkadot/keyring/node_modules/@polkadot/util/cjs
@polkadot/keyring has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        cjs 10.2.1      node_modules/@polkadot/api/node_modules/@polkadot/keyring/cjs
        cjs 9.7.2       node_modules/@polkadot/keyring/cjs
@polkadot/util-crypto has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        cjs 10.2.1      node_modules/@polkadot/util-crypto/cjs
        cjs 9.7.2       node_modules/@polkadot/keyring/node_modules/@polkadot/util-crypto/cjs
2023-02-10 12:45:04        API/INIT: RPC methods not decorated: alephNode_emergencyFinalize
2023-02-10 12:45:04        API/INIT: aleph-node/44: Not decorating unknown runtime apis: 0x2be3f75b696ad1f6/1
Testnet AZERO Ready. Running Test Now...
Checking Accounts and Balance
Account 0 has address: 5GvLTN6tyRv1a6b3mFTDsxEdx8BqeHW1UVKmwePQ7D7puMP4 and balance: 0 TZERO
Account 1 has address: 5F4529WRUYXbYxuw4AzqC8Htto5UAEcZZ8vHgq6vVY7rJD43 and balance: 0 TZERO
Account 2 has address: 5C4sQWd8SEu8JB1hSHy9rsnU229bH57tr9NAHDAMj2FtLX8v and balance: 0 TZERO
[UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "#<Object>".] {
  code: 'ERR_UNHANDLED_REJECTION'
}
```

The launchpad_ts.ts returned few problems. 

```
ts-node launchpad_test.ts 
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        cjs 10.2.1      node_modules/@polkadot/util/cjs
        cjs 9.7.2       node_modules/@polkadot/keyring/node_modules/@polkadot/util/cjs
@polkadot/keyring has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        cjs 10.2.1      node_modules/@polkadot/api/node_modules/@polkadot/keyring/cjs
        cjs 9.7.2       node_modules/@polkadot/keyring/cjs
@polkadot/util-crypto has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        cjs 10.2.1      node_modules/@polkadot/util-crypto/cjs
        cjs 9.7.2       node_modules/@polkadot/keyring/node_modules/@polkadot/util-crypto/cjs
2023-02-10 12:42:41        API/INIT: RPC methods not decorated: alephNode_emergencyFinalize
2023-02-10 12:42:42        API/INIT: aleph-node/44: Not decorating unknown runtime apis: 0x2be3f75b696ad1f6/1
Testnet AZERO Ready. Running Test Now...
Checking Accounts and Balance
Account 0 has address: 5GvLTN6tyRv1a6b3mFTDsxEdx8BqeHW1UVKmwePQ7D7puMP4 and balance: 0 TZERO
Account 1 has address: 5F4529WRUYXbYxuw4AzqC8Htto5UAEcZZ8vHgq6vVY7rJD43 and balance: 0 TZERO
Account 2 has address: 5C4sQWd8SEu8JB1hSHy9rsnU229bH57tr9NAHDAMj2FtLX8v and balance: 0 TZERO
[UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "#<Object>".] {
  code: 'ERR_UNHANDLED_REJECTION'
}
```

And the psp34_standard_test.ts returned some problems too. For example:

```
...
ts-node psp34_standard_test.ts 
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        cjs 10.2.1      node_modules/@polkadot/util/cjs
        cjs 9.7.2       node_modules/@polkadot/keyring/node_modules/@polkadot/util/cjs
@polkadot/keyring has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        cjs 10.2.1      node_modules/@polkadot/api/node_modules/@polkadot/keyring/cjs
        cjs 9.7.2       node_modules/@polkadot/keyring/cjs
@polkadot/util-crypto has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        cjs 10.2.1      node_modules/@polkadot/util-crypto/cjs
        cjs 9.7.2       node_modules/@polkadot/keyring/node_modules/@polkadot/util-crypto/cjs
2023-02-10 12:46:01        API/INIT: RPC methods not decorated: alephNode_emergencyFinalize
2023-02-10 12:46:01        API/INIT: aleph-node/44: Not decorating unknown runtime apis: 0x2be3f75b696ad1f6/1
Testnet AZERO Ready. Running Test Now...
Creating PSP34 NFT contract...
2023-02-10 12:46:03        RPC-CORE: submitAndWatchExtrinsic(extrinsic: Extrinsic): ExtrinsicStatus:: 1010: Invalid Transaction: Inability to pay some fees , e.g. account balance too low
2023-02-10 12:46:04        RPC-CORE: submitAndWatchExtrinsic(extrinsic: Extrinsic): ExtrinsicStatus:: 1010: Invalid Transaction: Inability to pay some fees , e.g. account balance too low
{
  from: '5C4sQWd8SEu8JB1hSHy9rsnU229bH57tr9NAHDAMj2FtLX8v',
  txHash: '0x193a53d833a1bde62d71ae8e3a550a4f695aadd9fdea915679ab3fa750bac0f2',
  error: {
    message: '1010: Invalid Transaction: Inability to pay some fees , e.g. account balance too low'
  }
}
/home/diogo/workspace/w3f/artzero/Contracts/Azero_Contracts/tests/typed_contracts/constructors/psp34_nft.ts:54
                                address: (response as SignAndSendSuccessResponse)!.result!.contract.address.toString(),
                                                       ^
TypeError: Cannot read properties of undefined (reading 'result')
    at Constructors.<anonymous> (/home/diogo/workspace/w3f/artzero/Contracts/Azero_Contracts/tests/typed_contracts/constructors/psp34_nft.ts:54:56)
    at Generator.throw (<anonymous>)
    at rejected (/home/diogo/workspace/w3f/artzero/Contracts/Azero_Contracts/tests/typed_contracts/constructors/psp34_nft.ts:6:65)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
```

### Code Quality

I ran `cargo +nightly clippy` in Azero_Contracts and got some problems. For example:

```
...
error: use of `#[inline]` on trait method `is_locked_nft_builder` which has no body
  --> traits/psp34_standard.rs:17:1
   |
17 | #[openbrush::trait_definition]
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#inline_fn_without_body
   = note: this error originates in the attribute macro `openbrush::trait_definition` (in Nightly builds, run with -Z macro-backtrace for more info)
error: use of `#[inline]` on trait method `get_locked_token_count` which has no body
  --> traits/psp34_standard.rs:17:1
   |
17 | #[openbrush::trait_definition]
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#inline_fn_without_body
   = note: this error originates in the attribute macro `openbrush::trait_definition` (in Nightly builds, run with -Z macro-backtrace for more info)
error: use of `#[inline]` on trait method `get_locked_token_count_builder` which has no body
  --> traits/psp34_standard.rs:17:1
   |
17 | #[openbrush::trait_definition]
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#inline_fn_without_body
   = note: this error originates in the attribute macro `openbrush::trait_definition` (in Nightly builds, run with -Z macro-backtrace for more info)
error: use of `#[inline]` on trait method `get_total_staked_by_account` which has no body
 --> traits/staking.rs:6:1
  |
6 | #[openbrush::trait_definition]
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  |
  = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#inline_fn_without_body
  = note: this error originates in the attribute macro `openbrush::trait_definition` (in Nightly builds, run with -Z macro-backtrace for more info)
error: use of `#[inline]` on trait method `get_total_staked_by_account_builder` which has no body
 --> traits/staking.rs:6:1
  |
6 | #[openbrush::trait_definition]
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  |
  = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#inline_fn_without_body
  = note: this error originates in the attribute macro `openbrush::trait_definition` (in Nightly builds, run with -Z macro-backtrace for more info)
error: use of `#[inline]` on trait method `get_total_pending_unstaked_by_account` which has no body
 --> traits/staking.rs:6:1
  |
6 | #[openbrush::trait_definition]
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  |
  = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#inline_fn_without_body
  = note: this error originates in the attribute macro `openbrush::trait_definition` (in Nightly builds, run with -Z macro-backtrace for more info)
error: use of `#[inline]` on trait method `get_total_pending_unstaked_by_account_builder` which has no body
 --> traits/staking.rs:6:1
  |
6 | #[openbrush::trait_definition]
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  |
  = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#inline_fn_without_body
  = note: this error originates in the attribute macro `openbrush::trait_definition` (in Nightly builds, run with -Z macro-backtrace for more info)
error: use of `#[inline]` on trait method `set_code` which has no body
 --> traits/upgradable.rs:6:1
  |
6 | #[openbrush::trait_definition]
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  |
  = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#inline_fn_without_body
  = note: this error originates in the attribute macro `openbrush::trait_definition` (in Nightly builds, run with -Z macro-backtrace for more info)
error: use of `#[inline]` on trait method `set_code_builder` which has no body
 --> traits/upgradable.rs:6:1
  |
6 | #[openbrush::trait_definition]
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  |
  = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#inline_fn_without_body
  = note: this error originates in the attribute macro `openbrush::trait_definition` (in Nightly builds, run with -Z macro-backtrace for more info)
warning: `artzero_project` (lib) generated 35 warnings (6 duplicates)
error: could not compile `artzero_project` due to 46 previous errors; 35 warnings emitted
```

For the Frontend I ran `npm run eslint:check` and got some problems:

```
...
/home/user/Documents/frontend-react/src/pages/collections/components/_AdvancedERC721Form.js
  43:15  warning  Effect callbacks are synchronous to prevent race conditions. Put the async function inside:
useEffect(() => {
  async function fetchData() {
	// You can await here
	const response = await MyAPI.getData(someId);
	// ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state
Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching  react-hooks/exhaustive-deps
  48:8   warning  React Hook useEffect has a missing dependency: 'currentAccount'. Either include it or remove the dependency array                                                                                                                                                                                                                                                                                          	react-hooks/exhaustive-deps
/home/user/Documents/frontend-react/src/pages/collections/components/_MyCollectionLising.js
  36:15  warning  Effect callbacks are synchronous to prevent race conditions. Put the async function inside:
useEffect(() => {
  async function fetchData() {
	// You can await here
	const response = await MyAPI.getData(someId);
	// ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state
Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching  react-hooks/exhaustive-deps
  38:8   warning  React Hook useEffect has a missing dependency: 'onRefresh'. Either include it or remove the dependency array                                                                                                                                                                                                                                                                                               	react-hooks/exhaustive-deps
  38:9   warning  React Hook useEffect has a complex expression in the dependency array. Extract it to a separate variable so it can be statically checked                                                                                                                                                                                                                                                                   	react-hooks/exhaustive-deps
/home/user/Documents/frontend-react/src/pages/collections/components/_NewNFTForm.js
  20:15  warning  Effect callbacks are synchronous to prevent race conditions. Put the async function inside:
useEffect(() => {
  async function fetchData() {
	// You can await here
	const response = await MyAPI.getData(someId);
	// ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state
Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching  react-hooks/exhaustive-deps
  32:8   warning  React Hook useEffect has missing dependencies: 'api' and 'props.nftAddress'. Either include them or remove the dependency array                                                                                                                                                                                                                                                                            	react-hooks/exhaustive-deps
/home/user/Documents/frontend-react/src/pages/collections/components/_SimpleERC721Form.js
  46:15  warning  Effect callbacks are synchronous to prevent race conditions. Put the async function inside:
useEffect(() => {
  async function fetchData() {
	// You can await here
	const response = await MyAPI.getData(someId);
	// ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state
Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching  react-hooks/exhaustive-deps
  51:8   warning  React Hook useEffect has a missing dependency: 'currentAccount'. Either include it or remove the dependency array                                                                                                                                                                                                                                                                                          	react-hooks/exhaustive-deps
/home/user/Documents/frontend-react/src/pages/home/index.js
  33:60   warning  Using target="_blank" without rel="noreferrer" (which implies rel="noopener") is a security risk in older browsers: see https://mathiasbynens.github.io/rel-noopener/#recommendations  react/jsx-no-target-blank
  33:124  warning  Using target="_blank" without rel="noreferrer" (which implies rel="noopener") is a security risk in older browsers: see https://mathiasbynens.github.io/rel-noopener/#recommendations  react/jsx-no-target-blank
  33:205  warning  Using target="_blank" without rel="noreferrer" (which implies rel="noopener") is a security risk in older browsers: see https://mathiasbynens.github.io/rel-noopener/#recommendations  react/jsx-no-target-blank
  35:99   warning  Using target="_blank" without rel="noreferrer" (which implies rel="noopener") is a security risk in older browsers: see https://mathiasbynens.github.io/rel-noopener/#recommendations  react/jsx-no-target-blank
✖ 126 problems (33 errors, 93 warnings)
  0 errors and 4 warnings potentially fixable with the `--fix` option.
```
