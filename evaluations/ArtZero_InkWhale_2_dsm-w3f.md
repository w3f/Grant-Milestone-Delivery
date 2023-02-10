# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ArtZero_InkWhale.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a.    | License            |<ul><li>[ ] </li></ul>| Apache License 2.0 | Link to the licenses is missing |
| 0b.    | Documentation      |<ul><li>[ ] </li></ul>| Official Document is at https://docs.inkwhale.net/ Technical documents are at https://github.com/InkWhale-net/backend/blob/main/docs/apis.md and https://github.com/InkWhale-net/contracts/blob/main/inkwhale_contract/docs/technical_doc.md | Not fully evaluated yet |
| 0c.    | Testing Guide      |<ul><li>[ ] </li></ul>| https://github.com/InkWhale-net/contracts/tree/main/inkwhale_contract/tests | Some files reported in the link are missing |
| 0d.    | Article/Tutorial   |<ul><li>[ ] </li></ul>| https://medium.com/@artzero_io/aztzeros-nft-yield-farming-pool-guide-for-creators-c20057fa0d89 | Not fully evaluated yet |
| 1. | Smart Contract Development |<ul><li>[ ] </li></ul>| https://github.com/InkWhale-net/contracts Completed following functions: create PSP22 token, create a staking pool, create NFT yield farm, create token yield farm, add rewards to pool, remove rewards from pool, claim reward from pool. We have to create 9 different contracts; INW token contract that allows public minting and fixed total supply; General psp22 token contract and psp22 token generator contract; Pool Contract and Pool Generator Contract; NFT Farming Contract and NFT Farming Generator Contract; LP Farming Contract and LP Farming Generator Contract. | Need better instructions how to deploy and run. |
| 2. | Backend |<ul><li>[ ] </li></ul>| https://github.com/InkWhale-net/backend | Need better instructions how to run. |
| 3. | Frontend | <ul><li>[ ] </li></ul>|The front-end demo can be seen at https://testnet.inkwhale.net The code repo is at https://github.com/InkWhale-net/frontend This front-end uses our latest design. | Need better instructions how to run. |
| 4. | Testing | <ul><li>[ ] </li></ul>| We will provide unit test for smart contracts. For Frontend and Backend testing we will provide Test Document with Plan and Test Cases for operating and using the NFT Marketplace | The deliverable is missing.

## Evaluation V1

### Testing Guide

Some files reported [in this link](https://github.com/InkWhale-net/contracts/tree/main/inkwhale_contract/tests) are missing. It's missing **artifacts** folder and the **test_files.ts**.

### Backend

Need a guide on how to run locally to test the application.

### Frontend

Need a guide on how to run. But I ran `npm install` and got:

```
user@localhost:~/Documents/InkWhale- Net/frontend$ npm install
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR!
npm ERR! While resolving: inkwhale-fe@0.1.0
npm ERR! Found: react@17.0.2
npm ERR! node_modules/react
npm ERR!   react@"17.0.2" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer react@"^0.14.7 || ^15.0.0-0 || ^16.0.0-0" from react-floaterjs@1.0.6
npm ERR! node_modules/react-floaterjs
npm ERR!   react-floaterjs@"^1.0.6" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR!
npm ERR! For a full report see:
npm ERR! /home/user/.npm/_logs/2023-02-10T13_42_52_894Z-eresolve-report.txt

npm ERR! A complete log of this run can be found in:
npm ERR! 	/home/user/.npm/_logs/2023-02-10T13_42_52_894Z-debug-0.log
```

With `npm install --force` and `npm install --legacy-peer-deps` it finished the install.

```
user@localhost:~/Documents/InkWhale- Net/frontend$ npm install --legacy-peer-deps
npm WARN deprecated source-map-url@0.4.1: See https://github.com/lydell/source-map-url#deprecated
npm WARN deprecated stable@0.1.8: Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated. See the compatibility table on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility
npm WARN deprecated babel-preset-es2015@6.24.1: 🙌  Thanks for using Babel: we recommend using babel-preset-env now: please read https://babeljs.io/env to update!
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated rollup-plugin-terser@7.0.2: This package has been deprecated and is no longer maintained. Please use @rollup/plugin-terser
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm WARN deprecated source-map-resolve@0.5.3: See https://github.com/lydell/source-map-resolve#deprecated
npm WARN deprecated chokidar@1.7.0: Chokidar 2 will break on node v14+. Upgrade to chokidar 3 with 15x less dependencies.
npm WARN deprecated w3c-hr-time@1.0.2: Use your platform's native performance.now() and performance.timeOrigin.
npm WARN deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
npm WARN deprecated svgo@1.3.2: This SVGO version is no longer supported. Upgrade to v2.x.x.
npm WARN deprecated core-js@2.6.12: core-js@<3.23.3 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Some versions have web compatibility issues. Please, upgrade your dependencies to the actual version of core-js.

added 2177 packages, and audited 2178 packages in 2m

257 packages are looking for funding
  run `npm fund` for details

17 vulnerabilities (2 low, 15 high)

To address issues that do not require attention, run:
  npm audit fix

To address all issues possible (including breaking changes), run:
  npm audit fix --force

Some issues need review, and may require choosing
a different dependency.

Run `npm audit` for details.
```

And with `npm start` I ran the frontend but I need the backend to test the application locally.

### Code Quality

The contracts in inkwhale_contracts are compiling. Some warnings were generated during the compilation as showed below.

```
InkWhale- Net/contracts/lp-pool-generator$ cargo build --release
warning: unused import: SpreadLayout
  --> lib.rs:14:13
   |
14 |             SpreadLayout,
   |             ^^^^^^^^^^^^
   |
   = note: #[warn(unused_imports)] on by default

warning: lp_pool_generator (lib) generated 1 warning (run cargo fix --lib -p lp_pool_generator to apply 1 suggestion)
    Finished release [optimized] target(s) in 0.16s
```

I ran `cargo +nightly clippy` in inkwhale_contracts and got some problems. For example:

```
user@localhost:~/Documents/InkWhale- Net/contracts/inkwhale_contract$ cargo +nightly clippy
	Checking inkwhale_project v1.0.0 (/home/user/Documents/InkWhale- Net/contracts/inkwhale_contract)
warning: unused import: `String`
  --> impls/admin/admin.rs:25:9
   |
25 |     	String,
   |     	^^^^^^
   |
   = note: `#[warn(unused_imports)]` on by default

warning: unused import: `SpreadAllocate`
  --> impls/token_manager/data.rs:16:9
   |
16 |     	SpreadAllocate,
   |     	^^^^^^^^^^^^^^

warning: unused import: `String`
  --> impls/token_manager/token_manager.rs:25:9
   |
25 |     	String
   |     	^^^^^^

...

warning: this let-binding has unit value
  --> traits/generic_pool_contract.rs:58:43
   |
58 | 	fn staking_contract_address(&self) -> AccountId;
   |                                       	^^^^^^^^^ help: omit the `let` binding: `AccountId;`
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#let_unit_value

warning: this let-binding has unit value
  --> traits/generic_pool_contract.rs:61:30
   |
61 | 	fn get_stake_info(&self, staker: AccountId) -> Option<StakeInformation>;
   |                          	^^^^^^^^^^^^^^^^^ help: omit the `let` binding: `staker: AccountId;`
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#let_unit_value

warning: this let-binding has unit value
  --> traits/generic_pool_contract.rs:61:52
   |
61 | 	fn get_stake_info(&self, staker: AccountId) -> Option<StakeInformation>;
   |                                                	^^^^^^^^^^^^^^^^^^^^^^^^ help: omit the `let` binding: `Option<StakeInformation>;`
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#let_unit_value

warning: `inkwhale_project` (lib) generated 113 warnings
error: could not compile `inkwhale_project` due to 98 previous errors; 113 warnings emitted
```

I ran `npx eslint src` for the frontend and no warnings or error returned.
