# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ArtZero_InkWhale.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a.    | License            | <ul><li>[x] </li></ul>| https://github.com/InkWhale-net/contracts/blob/main/LICENSE  | |
| 0b.    | Documentation      | <ul><li>[ ] </li></ul>| Official document is at https://docs.artzero.io/ Technical documents are at https://docs.google.com/document/d/1QWJW2YAFXcD_X-xvwcTee_W9Gfn2GXNdKYdoe0m7iv8/edit# and https://docs.google.com/document/d/1bPq9aFMaaVgKgsYWG3K4APubRK33OloY4_gHM3c8wo0/edit | Not fully evaluated yet. |
| 0c.    | Testing      | <ul><li>[ ] </li></ul>| Tests can be found at https://github.com/ArtZero-io/Contracts/tree/feature/ink-4-version/Azero_Contracts/tests | Some tests are failing. |
| 0d.    | Article/Tutorial   | <ul><li>[ ] </li></ul>| Several articles are published at https://medium.com/@artzero_io | Not full evaluated yet |
| 1. | Smart contract Development | <ul><li>[ ] </li></ul>| Code can be found in https://github.com/ArtZero-io/Contracts branch feature/ink-4-version | Not fully evaluated yet. One contract failing to build. |
| 2. | Backend | <ul><li>[ ] </li></ul>| Backend code is at https://github.com/ArtZero-io/backend and handles the following tasks: Monitor NFT bids in the queue and update Bid table in the database; Cache Images from IPFS to CloudFlare Image; Cache NFT Metadata to local database; Monitor NFT Collection changes and update the database; Monitor NFT Information and update the database; Telegram bot to alert system operators: queue length and access attempt and work load. | Source code is missing |
| 3. | Frontend | <ul><li>[ ] </li></ul>| Our front-end demo can be seen at https://alephzero.artzero.io/ for AlephZero network. The git repo is at https://github.com/ArtZero-io/frontend-react branch ink4-upgrade | Not full evaluated yet |
| 4. | Testing | <ul><li>[ ] </li></ul>| We will provide unit test for smart contracts. For Frontend and Backend testing we will provide Test Document with Plan and Test Cases for operating and using the NFT Marketplace | The deliverable is missing.

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
