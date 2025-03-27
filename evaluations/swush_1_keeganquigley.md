# General Notes

deps install w/ warnings:

<details>
  <summary>Output</summary>

```ts
@keeganquigley ➜ /workspaces/swush-app (dev) $ pnpm i
packages/api                             |  WARN  The field "pnpm.overrides" was found in /workspaces/swush-app/packages/api/package.json. This will not take effect. You should configure "pnpm.overrides" at the root of the workspace instead.
Scope: all 3 workspace projects
 WARN  deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.
Downloading next@14.2.15: 20.69 MB/20.69 MB, done
Downloading @next/swc-linux-x64-gnu@14.2.15: 41.91 MB/41.91 MB, done
Downloading @next/swc-linux-x64-musl@14.2.15: 50.27 MB/50.27 MB, done
Downloading @polkadot/types-support@15.7.2: 8.08 MB/8.08 MB, done
 WARN  11 deprecated subdependencies found: @humanwhocodes/config-array@0.13.0, @humanwhocodes/object-schema@2.0.3, @npmcli/move-file@1.1.2, @substrate/connect@0.8.11, are-we-there-yet@3.0.1, boolean@3.2.0, gauge@4.0.4, glob@7.2.3, inflight@1.0.6, npmlog@6.0.2, rimraf@3.0.2
Packages: +1026
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 1075, reused 1, downloaded 1025, added 1026, done
node_modules/.pnpm/esbuild@0.25.0/node_modules/esbuild: Running postinstall script, done in 103ms
node_modules/.pnpm/sqlite3@5.1.7/node_modules/sqlite3: Running install script, done in 358ms
 WARN  Failed to create bin at /workspaces/swush-app/node_modules/.pnpm/@polkadot-api+cli@0.1.0_jiti@1.21.7_postcss@8.5.3_tsx@4.19.3_yaml@2.7.0/node_modules/@polkadot-api/cli/node_modules/.bin/papi. ENOENT: no such file or directory, open '/workspaces/swush-app/node_modules/.pnpm/@polkadot-api+cli@0.1.0_jiti@1.21.7_postcss@8.5.3_tsx@4.19.3_yaml@2.7.0/node_modules/@polkadot-api/cli/dist/main.js'
 WARN  Failed to create bin at /workspaces/swush-app/node_modules/.pnpm/@polkadot-api+cli@0.1.0_jiti@1.21.7_postcss@8.5.3_tsx@4.19.3_yaml@2.7.0/node_modules/@polkadot-api/cli/node_modules/.bin/polkadot-api. ENOENT: no such file or directory, open '/workspaces/swush-app/node_modules/.pnpm/@polkadot-api+cli@0.1.0_jiti@1.21.7_postcss@8.5.3_tsx@4.19.3_yaml@2.7.0/node_modules/@polkadot-api/cli/dist/main.js'
packages/api postinstall$ papi
[50 lines collapsed]
│ │ ├── ✕ unmet peer @polkadot/types-known@~14.0.1: found 15.7.2
│ │ ├── ✕ unmet peer @polkadot/util@~13.1.1: found 13.4.3
│ │ └── ✕ unmet peer @polkadot/util-crypto@~13.1.1: found 13.4.3
│ └─┬ @galacticcouncil/xcm-cfg 6.0.1
│   └─┬ @galacticcouncil/xcm-core 5.5.0
│     ├── ✕ unmet peer @polkadot/api@~14.0.1: found 15.7.2
│     ├── ✕ unmet peer @polkadot/api-augment@~14.0.1: found 15.7.2
│     ├── ✕ unmet peer @polkadot/types@~14.0.1: found 15.7.2
│     └── ✕ unmet peer @polkadot/util-crypto@~13.1.1: found 13.4.3
│ Done in 5.9s
└─ Done in 43.4s

dependencies:
+ @polkadot/util-crypto 13.4.3

devDependencies:
+ @typescript-eslint/eslint-plugin 6.21.0
+ @typescript-eslint/parser 6.21.0
+ eslint 8.57.1 deprecated
+ eslint-config-prettier 9.1.0
+ husky 9.1.7
+ lint-staged 15.4.3
+ prettier 3.5.3
+ typescript 5.8.2

 WARN  Issues with peer dependencies found
packages/api
├─┬ @galacticcouncil/sdk 5.6.0
│ ├── ✕ unmet peer @polkadot/api@~14.0.1: found 15.7.2
│ ├── ✕ unmet peer @polkadot/api-augment@~14.0.1: found 15.7.2
│ ├── ✕ unmet peer @polkadot/api-base@~14.0.1: found 15.7.2
│ ├── ✕ unmet peer @polkadot/api-derive@~14.0.1: found 15.7.2
│ ├── ✕ unmet peer @polkadot/keyring@~13.1.1: found 13.4.3
│ ├── ✕ unmet peer @polkadot/rpc-augment@~14.0.1: found 15.7.2
│ ├── ✕ unmet peer @polkadot/rpc-core@~14.0.1: found 15.7.2
│ ├── ✕ unmet peer @polkadot/rpc-provider@~14.0.1: found 15.7.2
│ ├── ✕ unmet peer @polkadot/types@~14.0.1: found 15.7.2
│ ├── ✕ unmet peer @polkadot/types-augment@~14.0.1: found 15.7.2
│ ├── ✕ unmet peer @polkadot/types-codec@~14.0.1: found 15.7.2
│ ├── ✕ unmet peer @polkadot/types-create@~14.0.1: found 15.7.2
│ ├── ✕ unmet peer @polkadot/types-known@~14.0.1: found 15.7.2
│ ├── ✕ unmet peer @polkadot/util@~13.1.1: found 13.4.3
│ └── ✕ unmet peer @polkadot/util-crypto@~13.1.1: found 13.4.3
└─┬ @galacticcouncil/xcm-cfg 6.0.1
  └─┬ @galacticcouncil/xcm-core 5.5.0
    ├── ✕ unmet peer @polkadot/api@~14.0.1: found 15.7.2
    ├── ✕ unmet peer @polkadot/api-augment@~14.0.1: found 15.7.2
    ├── ✕ unmet peer @polkadot/types@~14.0.1: found 15.7.2
    └── ✕ unmet peer @polkadot/util-crypto@~13.1.1: found 13.4.3
```
</details>

## Testing

Unit tests all passing:
```ts
[215 lines collapsed]
│       60 |                 return null;
│       61 |             }
│       62 |
│       at AssetHubRouter.findBestRoute (services/assets/router/AssetHubRouter.ts:59:25)
│       at Object.<anonymous> (services/assets/router/__tests__/AssetHubRouter.test.ts:35:41)
│ Test Suites: 5 passed, 5 total
│ Tests:       37 passed, 37 total
│ Snapshots:   0 total
│ Time:        23.397 s
│ Ran all test suites.
└─ Done in 24s
```
