# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/supersig_fellowship.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>|  Apache 2.0  |  | |
| 0b. | Documentation |<ul><li>[ ] </li></ul>|  https://decentration.medium.com/, https://wiki.kabocha.network/docs/Supersig/introduction | Not fully evaluated yet |
| 0c. | Testing Guide |<ul><li>[ ] </li></ul>|  https://github.com/decentration/pallet_supersig/tree/polkadot-v0.9.37-fix-unbounded/src/tests | Not fully evaluated yet` |
| 0d. | Article and Video  |<ul><li>[ ] </li></ul>|  https://medium.com/@decentration/supersig-statemine-cbe6533233c2, https://www.loom.com/share/ea2fe68f99c44a4b91baaa85828b1745 | Not fully evaluated yet |
| 1. | Substrate module: pallet_supersig |<ul><li>[ ] </li></ul>|   pallet_supersig https://github.com/decentration/pallet_supersig/tree/polkadot-v0.9.37-fix-unbounded | Not fully evaluated yet |
| 2. | Supersig-app: polkadot-js-ui (fork) |<ul><li>[ ] </li></ul>|  https://github.com/decentration/apps |Not fully evaluated yet 
| 3. | Benchmarking |<ul><li>[ ] </li></ul>|  https://github.com/decentration/pallet_supersig/blob/master/src/weights.rs  |  Not fully evaluated yet | 

## Evaluation V1

### Automate Testing

I tried to run the tests but got some warnings and this error:

```
...

warning: use of deprecated associated function `frame_support::dispatch::Weight::from_ref_time`: Will be removed soon; use `from_parts` instead.
   --> src/weights.rs:125:11
	|
125 |     	Weight::from_ref_time(110_730_000u64)
	|             	^^^^^^^^^^^^^

warning: use of deprecated associated function `frame_support::dispatch::Weight::from_ref_time`: Will be removed soon; use `from_parts` instead.
   --> src/weights.rs:134:11
	|
134 |     	Weight::from_ref_time(53_207_000u64)
	|             	^^^^^^^^^^^^^

warning: `pallet-supersig` (lib) generated 13 warnings
   Compiling pallet-supersig v1.1.1 (/home/user/Documentos/supersig/pallet_supersig)
error[E0046]: not all trait items implemented, missing: `HoldIdentifier`, `FreezeIdentifier`, `MaxHolds`, `MaxFreezes`
  --> src/tests/mock.rs:68:1
   |
68 | impl pallet_balances::Config for Test {
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ missing `HoldIdentifier`, `FreezeIdentifier`, `MaxHolds`, `MaxFreezes` in implementation
   |
   = help: implement the missing item: `type HoldIdentifier = Type;`
   = help: implement the missing item: `type FreezeIdentifier = Type;`
   = help: implement the missing item: `type MaxHolds = Type;`
   = help: implement the missing item: `type MaxFreezes = Type;`

...

For more information about this error, try `rustc --explain E0046`.
warning: `pallet-supersig` (lib test) generated 13 warnings (1 duplicate)
error: could not compile `pallet-supersig` due to previous error; 13 warnings emitted

```

### Manual Testing

I got the error mentioned with `yarn build`:

```
FATAL: page-supersig/src/Supersig/Dashboard/Summary.tsx:: line 1:: Invalid header definition::

    // Copyright 2017-2022 @decentration/page-supersig authors & contributors

page-supersig/src/Supersig/Dashboard/Table.tsx:: line 1:: Invalid header definition::

    

page-supersig/src/Supersig/Dashboard/index.tsx:: line 1:: Invalid header definition::

    

page-supersig/src/SupersigDecoder/index.tsx:: line 1:: Invalid header definition::

    

page-supersig/src/definitions.ts:: line 1:: Invalid header definition::

    // import OverrideRpcDefinition from '@polkadot/types/interfaces/jsonrpc';

page-supersig/src/util.ts:: line 1:: Invalid header definition::
```

I followed [this guide](https://decentration.medium.com/add-supersig-to-your-chain-789de9356de1) to set up the substrate to test the pallets. I only had one problem with adding members. I created the supersig with Alice (Master) and Bob (Standard) and tried to add Charlie through propose_call, I voted with Alice and Bob, and the vote passed, but Charlie wasn't added. With only Alice in the supersig, I could add Bob or Charlie, but not both in the same propose_call. I didn't have problems with other functions.

Could you provide a testing guide for the derivable 2? 

I tried to run the lint but got this error:

```
user@localhost:~/Documentos/supersig/apps$ yarn lint
$ polkadot-dev-run-lint
$ yarn polkadot-exec-eslint --fix --resolve-plugins-relative-to /home/user/Documentos/supersig/apps/node_modules/@polkadot/dev/scripts --ext .js,.cjs,.mjs,.ts,.tsx /home/user/Documentos/supersig/apps
$ eslint --fix --resolve-plugins-relative-to /home/user/Documentos/supersig/apps/node_modules/@polkadot/dev/scripts --ext .js,.cjs,.mjs,.ts,.tsx /home/user/Documentos/supersig/apps

/home/user/Documentos/supersig/apps/packages/page-supersig/src/index.tsx
  49:5  error  Expected object keys to be in ascending order. 'dashboard' should be before 'decode'  sort-keys

✖ 1 problem (1 error, 0 warnings)

node:internal/errors:857
  const err = new Error(message);
          	^

Error: Command failed: yarn polkadot-exec-eslint --fix --resolve-plugins-relative-to /home/user/Documentos/supersig/apps/node_modules/@polkadot/dev/scripts --ext .js,.cjs,.mjs,.ts,.tsx /home/user/Documentos/supersig/apps
	at checkExecSyncError (node:child_process:861:11)
	at Object.execSync (node:child_process:932:15)
	at execSync (file:///home/user/Documentos/supersig/apps/node_modules/@polkadot/dev/scripts/util.mjs:79:6)
	at file:///home/user/Documentos/supersig/apps/node_modules/@polkadot/dev/scripts/polkadot-dev-run-lint.mjs:31:3
	at ModuleJob.run (node:internal/modules/esm/module_job:193:25)
	at async Promise.all (index 0)
	at async ESMLoader.import (node:internal/modules/esm/loader:530:24)
	at async loadESM (node:internal/process/esm_loader:91:5)
	at async handleMainPromise (node:internal/modules/run_main:65:12) {
  status: 1,
  signal: null,
  output: [ null, null, null ],
  pid: 182729,
  stdout: null,
  stderr: null
}

```
