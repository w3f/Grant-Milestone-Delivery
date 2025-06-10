# Evaluation


- **Status:** Accepted
- **Application Document:** [Link ](https://github.com/w3f/Grants-Program/pull/2440)
- **Milestone:** 2
- **Kusama Identity:** Ha27MB4gKH36ieRPa1T1ASqhUz4sVxMoVmK7o5CS6tXDqjW
- **Previously successfully merged evaluation:** https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/iso8583_1_igorstojanov.md

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License (AGPLv3) |<ul><li>[x] </li></ul>|[Link](https://github.com/swush-labs/swush-app?tab=AGPL-3.0-1-ov-file#readme)| License updated to AGPLv3. |
| 0b. | Documentation |<ul><li>[x] </li></ul>|[High Level Documentation](https://github.com/swush-labs/swush-app/blob/dev-v2/docs/api/HIGH_LEVEL_DESIGN.md)| Covers overall system design. Could be extended with additional diagrams.  Has a Readme |
| 0c. | Testing Guide |<ul><li>[x] </li></ul>|[Testing Guide](https://github.com/swush-labs/swush-app?tab=readme-ov-file#getting-started)| Guide includes setup, linting, and unit test instructions. See General Notes for more. |
| 0d. | Dockerfile for testing functionality |<ul><li>[x] </li></ul>|[Dockerfile](https://github.com/swush-labs/swush-app/blob/dev/docker-compose.yml), [Run Steps](https://github.com/swush-labs/swush-app?tab=readme-ov-file#docker-development-environment)| See General Notes for more.|
| 0e. | Article about the work |<ul><li>[x] </li></ul>|[Documentation](https://github.com/swush-labs/swush-app/blob/dev-v2/docs/api/HIGH_LEVEL_DESIGN.md)| You could publish a Medium article to publicize your development. |
| 1. | Cross-Chain (XCM) APIs |<ul><li>[x] </li></ul>|[XCM APIs and UI Integration](https://github.com/swush-labs/swush-app/blob/dev-v2/apps/web/src/components/swap/hooks/useAssetConversionSwap.ts)|  |
| 2. | Asset Balance |<ul><li>[x] </li></ul>|[Balance API and UI Integration](https://github.com/swush-labs/swush-app/blob/dev-v2/apps/web/src/lib/api.ts#L119)| Its well-structured and leverages React hooks effectively. Could be improved by clearer inline documentation and stronger type definitions. |
| 3. | Slippage Control and Protection |<ul><li>[x] </li></ul>|[Slippage Protection](https://github.com/swush-labs/swush-app/blob/dev-v2/apps/web/src/components/swap/hooks/useAssetConversionSwap.ts#L181-L243)| Looks good.|
| 4. | Real-time Fee Updates |<ul><li>[ ] </li></ul>|N/A| Unsure on how to verify this feature. |
| 5. | Asset Pair Swap |<ul><li>[x] </li></ul>|[Swap API and UI Integration](https://github.com/swush-labs/swush-app/blob/dev-v2/apps/web/src/components/swap/hooks/useAssetConversionSwap.ts)| Looks good. |
| 6. | Optimized Routing |<ul><li>[x] </li></ul>|[Best route selection API](https://github.com/swush-labs/swush-app/blob/dev-v2/packages/api/src/routes/assets.ts#L24-L55)| You are handling asset-related API routes well using asynchronous functions. |
| 7. | Chopsticks simulation |<ul><li>[x] </li></ul>|[Chopsticks config](https://github.com/swush-labs/swush-app/tree/dev-v2/apps/web/chopsticks/config)| Your link is not correct. Please fix. Your config files are here: https://github.com/swush-labs/swush-app/tree/db5893f3cac348f8b7a0e4104b6fbeac706cea8d/packages/chopsticks/config  |
| 8. | User Transaction History |<ul><li>[x] </li></ul>|[Supabase API](https://github.com/swush-labs/swush-app/blob/dev-v2/apps/web/src/services/swapHistoryService.ts)| Looks good.|





## General Notes

Some other general feedback is addressed below.


1. You have several warnings when installing dependencies. It would be nice if you can fix these in the future. See below for the warnings.

```
Scope: all 3 workspace projects
 WARN  deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.
Downloading next@14.2.15: 20.69 MB/20.69 MB, done
Downloading @next/swc-darwin-arm64@14.2.15: 37.20 MB/37.20 MB, done
Downloading @polkadot/types-support@15.9.2: 8.08 MB/8.08 MB, done
 WARN  12 deprecated subdependencies found: @humanwhocodes/config-array@0.13.0, @humanwhocodes/object-schema@2.0.3, @npmcli/move-file@1.1.2, @substrate/connect@0.8.11, are-we-there-yet@3.0.1, boolean@3.2.0, gauge@4.0.4, glob@7.2.3, inflight@1.0.6, node-domexception@1.0.0, npmlog@6.0.2, rimraf@3.0.2
Packages: +1166
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 1225, reused 1, downloaded 1158, added 1166, done
 WARN  Failed to create bin at /Users/igorstojanov/code/evaluations/swush-app/node_modules/.pnpm/node_modules/.bin/polkadot-api. ENOENT: no such file or directory, open '/Users/igorstojanov/code/evaluations/swush-app/node_modules/.pnpm/node_modules/@polkadot-api/cli/dist/main.js'
 WARN  Failed to create bin at /Users/igorstojanov/code/evaluations/swush-app/node_modules/.pnpm/node_modules/.bin/papi. ENOENT: no such file or directory, open '/Users/igorstojanov/code/evaluations/swush-app/node_modules/.pnpm/node_modules/@polkadot-api/cli/dist/main.js'
node_modules/.pnpm/esbuild@0.25.0/node_modules/esbuild: Running postinstall script, done in 477ms
node_modules/.pnpm/sqlite3@5.1.7/node_modules/sqlite3: Running install script, done in 1.1s
node_modules/.pnpm/unrs-resolver@1.7.2/node_modules/unrs-resolver: Running postinstall script, done in 311ms
 WARN  Failed to create bin at /Users/igorstojanov/code/evaluations/swush-app/node_modules/.pnpm/@polkadot-api+cli@0.1.0_jiti@1.21.7_postcss@8.5.3_tsx@4.19.3_yaml@2.7.0/node_modules/@polkadot-api/cli/node_modules/.bin/papi. ENOENT: no such file or directory, open '/Users/igorstojanov/code/evaluations/swush-app/node_modules/.pnpm/@polkadot-api+cli@0.1.0_jiti@1.21.7_postcss@8.5.3_tsx@4.19.3_yaml@2.7.0/node_modules/@polkadot-api/cli/dist/main.js'
 WARN  Failed to create bin at /Users/igorstojanov/code/evaluations/swush-app/node_modules/.pnpm/@polkadot-api+cli@0.1.0_jiti@1.21.7_postcss@8.5.3_tsx@4.19.3_yaml@2.7.0/node_modules/@polkadot-api/cli/node_modules/.bin/polkadot-api. ENOENT: no such file or directory, open '/Users/igorstojanov/code/evaluations/swush-app/node_modules/.pnpm/@polkadot-api+cli@0.1.0_jiti@1.21.7_postcss@8.5.3_tsx@4.19.3_yaml@2.7.0/node_modules/@polkadot-api/cli/dist/main.js'
 WARN  Failed to create bin at /Users/igorstojanov/code/evaluations/swush-app/packages/api/node_modules/.bin/papi. ENOENT: no such file or directory, open '/Users/igorstojanov/code/evaluations/swush-app/packages/api/node_modules/@polkadot-api/cli/dist/main.js'
 WARN  1 other warnings
. postinstall$ papi
[51 lines collapsed]
│   ├── ✕ unmet peer @polkadot/keyring@~13.1.1: found 13.4.4
│   ├── ✕ unmet peer @polkadot/rpc-augment@~14.0.1: found 15.9.2
│   ├── ✕ unmet peer @polkadot/rpc-core@~14.0.1: found 15.9.2
│   ├── ✕ unmet peer @polkadot/rpc-provider@~14.0.1: found 15.9.2
│   ├── ✕ unmet peer @polkadot/types@~14.0.1: found 15.7.2
│   ├── ✕ unmet peer @polkadot/types-augment@~14.0.1: found 15.7.2
│   ├── ✕ unmet peer @polkadot/types-codec@~14.0.1: found 15.9.2
│   ├── ✕ unmet peer @polkadot/types-create@~14.0.1: found 15.9.2
│   └── ✕ unmet peer @polkadot/types-known@~14.0.1: found 15.9.2
│ Done in 3s
└─ Done in 15.9s

dependencies:
+ @acala-network/chopsticks 1.0.5
+ @galacticcouncil/api-augment 0.3.1
+ @polkadot-api/descriptors 0.1.0-autogenerated.17999435642283397599
+ @polkadot-labs/hdkd-helpers 0.0.10
+ @polkadot/api 15.9.2 (15.10.2 is available)
+ @polkadot/util-crypto 13.4.3
+ @supabase/supabase-js 2.49.4
+ polkadot-api 1.9.5 (1.11.0 is available)
+ ws 8.18.1

devDependencies:
+ @typescript-eslint/eslint-plugin 6.21.0
+ @typescript-eslint/parser 6.21.0
+ eslint 8.57.1 (9.26.0 is available) deprecated
+ eslint-config-prettier 9.1.0
+ husky 9.1.7
+ lint-staged 15.4.3
+ prettier 3.5.3
+ typescript 5.8.2 (5.8.3 is available)

 WARN  Issues with peer dependencies found
.
└─┬ @polkadot/util-crypto 13.4.3
  ├── ✕ unmet peer @polkadot/util@13.4.3: found 13.4.4
  └─┬ @polkadot/x-randomvalues 13.4.3
    └── ✕ unmet peer @polkadot/util@13.4.3: found 13.4.4

packages/api
├─┬ @polkadot/keyring 13.4.4
│ ├── ✕ unmet peer @polkadot/util@13.4.4: found 13.4.3
│ └── ✕ unmet peer @polkadot/util-crypto@13.4.4: found 13.4.3
├─┬ @polkadot/x-randomvalues 13.4.4
│ └── ✕ unmet peer @polkadot/util@13.4.4: found 13.4.3
└─┬ @galacticcouncil/sdk 6.1.1
  ├── ✕ unmet peer @polkadot/util@~13.1.1: found 13.4.3
  ├── ✕ unmet peer @polkadot/util-crypto@~13.1.1: found 13.4.3
  ├── ✕ unmet peer @polkadot/api@~14.0.1: found 15.9.2
  ├── ✕ unmet peer @polkadot/api-augment@~14.0.1: found 15.9.2
  ├── ✕ unmet peer @polkadot/api-base@~14.0.1: found 15.9.2
  ├── ✕ unmet peer @polkadot/api-derive@~14.0.1: found 15.9.2
  ├── ✕ unmet peer @polkadot/keyring@~13.1.1: found 13.4.4
  ├── ✕ unmet peer @polkadot/rpc-augment@~14.0.1: found 15.9.2
  ├── ✕ unmet peer @polkadot/rpc-core@~14.0.1: found 15.9.2
  ├── ✕ unmet peer @polkadot/rpc-provider@~14.0.1: found 15.9.2
  ├── ✕ unmet peer @polkadot/types@~14.0.1: found 15.7.2
  ├── ✕ unmet peer @polkadot/types-augment@~14.0.1: found 15.7.2
  ├── ✕ unmet peer @polkadot/types-codec@~14.0.1: found 15.9.2
  ├── ✕ unmet peer @polkadot/types-create@~14.0.1: found 15.9.2
  └── ✕ unmet peer @polkadot/types-known@~14.0.1: found 15.9.2

Done in 54.6s

```

2. Although I was able to build your app locally, I initially had error in the output:

```

npm ERR! Lifecycle script `start-chopsticks` failed with error: 
npm ERR! Error: Missing script: "start-chopsticks"

To see a list of scripts, run:
  npm run 
npm ERR!   in workspace: @swush/web@0.1.0 
npm ERR!   at location: /Users/igorstojanov/code/evaluations/swush-app/apps/web 
  ▲ Next.js 14.2.15
  - Local:        http://localhost:3000
  - Environments: .env.local, .env

```

3. Test passed successfully. Also, no linting errors. 

```
 Test Suites: 5 passed, 5 total
│ Tests:       36 passed, 36 total
│ Snapshots:   0 total
│ Time:        10.64 s
│ Ran all test suites.
```

```
│ ✔ No ESLint warnings or errors
└─ Done in 2.2s
packages/api lint$ eslint services --ext .ts
└─ Done in 1.3s
```

4. You have a typo for docker compose. The command is not docker-compose up --build, but docker compose up --build. Please fix the readme. Also, building all the images takes about 2.5 minutes. I see that you are building the Dockerfile from node:20-slim images which is fine, but make sure you are not adding any unnecessary steps in the dockerfile that would take extra time. It seems that you can set COMPOSE_BAKE=true to speed up performance also.

```
WARN[0000] /Users/igorstojanov/code/evaluations/swush-app/docker-compose.yml: the attribute `version` is obsolete, it will be ignored, please remove it to avoid potential confusion 
Compose now can delegate build to bake for better performances
Just set COMPOSE_BAKE=true
[+] Building 158.6s (33/33) FINISHED   
```
