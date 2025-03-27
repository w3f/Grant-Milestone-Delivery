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

Docker works:

<details>
  <summary>Output</summary>

```ts
docker-compose up --build
Creating network "swush-app_default" with the default driver
Building api
[+] Building 72.2s (17/17) FINISHED                                                                         docker:default
 => [internal] load build definition from Dockerfile.dev                                                              0.1s
 => => transferring dockerfile: 572B                                                                                  0.0s
 => [internal] load metadata for docker.io/library/node:20-slim                                                       1.2s
 => [internal] load .dockerignore                                                                                     0.0s
 => => transferring context: 2B                                                                                       0.0s
 => [internal] load build context                                                                                     0.2s
 => => transferring context: 18.21MB                                                                                  0.2s
 => [ 1/12] FROM docker.io/library/node:20-slim@sha256:d6e4ec9eaf2390129b5d23904d07ae03ef744818386bcab3fc45fe63405b5  5.0s
 => => resolve docker.io/library/node:20-slim@sha256:d6e4ec9eaf2390129b5d23904d07ae03ef744818386bcab3fc45fe63405b5eb  0.0s
 => => sha256:6e909acdb790c5a1989d9cfc795fda5a246ad6664bb27b5c688e2b734b2c5fad 28.20MB / 28.20MB                      0.5s
 => => sha256:fb5ef0ccfaeefc0319b772c25470de8843b9f41996fdbe03472bdc5b4e79e50f 3.31kB / 3.31kB                        0.3s
 => => sha256:503b319f8e1f5e6e771ddb4a315450b4092416ce7b1c7db675339c02cafa70ae 41.16MB / 41.16MB                      1.0s
 => => sha256:d6e4ec9eaf2390129b5d23904d07ae03ef744818386bcab3fc45fe63405b5eb2 6.49kB / 6.49kB                        0.0s
 => => sha256:990084211ea3d72132f286a038bf27e0f79b8cad532ae623b090f3486490e62e 1.93kB / 1.93kB                        0.0s
 => => sha256:c3a65a06b755dc38919ba579cdeaa2aab51c73e68283067d96ba01dd03ae7115 6.54kB / 6.54kB                        0.0s
 => => sha256:a9798128bc50b0d5ad9bcc80876c1bfb7ee48745b13a88651d91483bc214b168 1.71MB / 1.71MB                        0.5s
 => => sha256:2b8290f79121bcc7eb2bf12c320eb6373bcd1e0b28020fa6abc59d720fd295d9 448B / 448B                            0.6s
 => => extracting sha256:6e909acdb790c5a1989d9cfc795fda5a246ad6664bb27b5c688e2b734b2c5fad                             1.9s
 => => extracting sha256:fb5ef0ccfaeefc0319b772c25470de8843b9f41996fdbe03472bdc5b4e79e50f                             0.0s
 => => extracting sha256:503b319f8e1f5e6e771ddb4a315450b4092416ce7b1c7db675339c02cafa70ae                             2.0s
 => => extracting sha256:a9798128bc50b0d5ad9bcc80876c1bfb7ee48745b13a88651d91483bc214b168                             0.1s
 => => extracting sha256:2b8290f79121bcc7eb2bf12c320eb6373bcd1e0b28020fa6abc59d720fd295d9                             0.0s
 => [ 2/12] WORKDIR /app                                                                                              1.1s
 => [ 3/12] RUN corepack enable && corepack prepare pnpm@9.13.0 --activate                                            1.7s
 => [ 4/12] COPY pnpm-workspace.yaml ./                                                                               0.1s 
 => [ 5/12] COPY tsconfig.base.json ./                                                                                0.1s
 => [ 6/12] WORKDIR /app/packages/api                                                                                 0.1s
 => [ 7/12] COPY packages/api/package.json ./                                                                         0.1s
 => [ 8/12] COPY packages/api/.papi ./.papi                                                                           0.1s
 => [ 9/12] COPY packages/api/tsconfig.json ./                                                                        0.1s
 => [10/12] COPY packages/api/services ./services                                                                     0.1s
 => [11/12] COPY packages/api/src ./src                                                                               0.1s
 => [12/12] RUN pnpm install                                                                                         54.1s
 => exporting to image                                                                                                8.2s 
 => => exporting layers                                                                                               8.1s 
 => => writing image sha256:6d9f269001ed0cfc3c3c9eca4a0f059ef1be78fff5294f7484cffce7f10d352c                          0.0s 
 => => naming to docker.io/library/swush-app_api                                                                      0.0s 
Building web                                                                                                               
[+] Building 25.2s (14/14) FINISHED                                                                         docker:default 
 => [internal] load build definition from Dockerfile.dev                                                              0.0s
 => => transferring dockerfile: 521B                                                                                  0.0s
 => [internal] load metadata for docker.io/library/node:20-slim                                                       0.4s
 => [internal] load .dockerignore                                                                                     0.0s
 => => transferring context: 2B                                                                                       0.0s
 => [1/9] FROM docker.io/library/node:20-slim@sha256:d6e4ec9eaf2390129b5d23904d07ae03ef744818386bcab3fc45fe63405b5eb  0.0s
 => [internal] load build context                                                                                     0.0s
 => => transferring context: 2.33kB                                                                                   0.0s
 => CACHED [2/9] WORKDIR /app                                                                                         0.0s
 => CACHED [3/9] RUN corepack enable && corepack prepare pnpm@9.13.0 --activate                                       0.0s
 => CACHED [4/9] COPY pnpm-workspace.yaml ./                                                                          0.0s
 => [5/9] COPY apps/web/tsconfig.json ./                                                                              0.1s
 => [6/9] COPY tsconfig.base.json ./                                                                                  0.1s
 => [7/9] WORKDIR /app/apps/web                                                                                       0.1s
 => [8/9] COPY apps/web/package.json ./                                                                               0.1s
 => [9/9] RUN pnpm install                                                                                           16.9s
 => exporting to image                                                                                                7.5s 
 => => exporting layers                                                                                               7.5s 
 => => writing image sha256:925614708a58cfe4fc145e9011c551dbb21bc0c7e2e9a28ee927575ed64fab25                          0.0s 
 => => naming to docker.io/library/swush-app_web                                                                      0.0s 
Creating swush-app_api_1 ... done
Creating swush-app_web_1 ... done
Attaching to swush-app_api_1, swush-app_web_1
api_1  | 
api_1  | > @swush/api@0.1.0 dev /app/packages/api
api_1  | > tsx watch src/server.ts
api_1  | 
web_1  | 
web_1  | > @swush/web@0.1.0 dev /app/apps/web
web_1  | > next dev
web_1  | 
web_1  |   ▲ Next.js 14.2.15
web_1  |   - Local:        http://localhost:3000
web_1  |   - Environments: .env
web_1  | 
web_1  |  ✓ Starting...
web_1  | Attention: Next.js now collects completely anonymous telemetry regarding usage.
web_1  | This information is used to shape Next.js' roadmap and prioritize features.
web_1  | You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
web_1  | https://nextjs.org/telemetry
web_1  | 
web_1  |  ✓ Ready in 2.1s
api_1  | @polkadot/util has multiple versions, ensure that there is only one installed.
api_1  | Either remove and explicitly install matching versions or dedupe using your package manager.
api_1  | The following conflicting packages were found:
api_1  | 	esm 13.4.3	node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/
api_1  | 	cjs 13.4.3	node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/cjs
api_1  | @polkadot/util-crypto has multiple versions, ensure that there is only one installed.
api_1  | Either remove and explicitly install matching versions or dedupe using your package manager.
api_1  | The following conflicting packages were found:
api_1  | 	esm 13.4.3	node_modules/.pnpm/@polkadot+util-crypto@13.4.3_@polkadot+util@13.4.3/node_modules/@polkadot/util-crypto/
api_1  | 	cjs 13.4.3	node_modules/.pnpm/@polkadot+util-crypto@13.4.3_@polkadot+util@13.4.3/node_modules/@polkadot/util-crypto/cjs
api_1  | @polkadot/wasm-crypto has multiple versions, ensure that there is only one installed.
api_1  | Either remove and explicitly install matching versions or dedupe using your package manager.
api_1  | The following conflicting packages were found:
api_1  | 	esm 7.4.1	node_modules/.pnpm/@polkadot+wasm-crypto@7.4.1_@polkadot+util@13.4.3_@polkadot+x-randomvalues@13.4.3_@polkadot+u_3a6p6dwoyg77iyxprahdteacfa/node_modules/@polkadot/wasm-crypto/
api_1  | 	cjs 7.4.1	node_modules/.pnpm/@polkadot+wasm-crypto@7.4.1_@polkadot+util@13.4.3_@polkadot+x-randomvalues@13.4.3_@polkadot+u_3a6p6dwoyg77iyxprahdteacfa/node_modules/@polkadot/wasm-crypto/cjs
api_1  | @polkadot/wasm-bridge has multiple versions, ensure that there is only one installed.
api_1  | Either remove and explicitly install matching versions or dedupe using your package manager.
api_1  | The following conflicting packages were found:
api_1  | 	esm 7.4.1	node_modules/.pnpm/@polkadot+wasm-bridge@7.4.1_@polkadot+util@13.4.3_@polkadot+x-randomvalues@13.4.3_@polkadot+u_gvlwcquwhwduchieihclbuz4qa/node_modules/@polkadot/wasm-bridge/
api_1  | 	cjs 7.4.1	node_modules/.pnpm/@polkadot+wasm-bridge@7.4.1_@polkadot+util@13.4.3_@polkadot+x-randomvalues@13.4.3_@polkadot+u_gvlwcquwhwduchieihclbuz4qa/node_modules/@polkadot/wasm-bridge/cjs
api_1  | @polkadot/wasm-crypto-wasm has multiple versions, ensure that there is only one installed.
api_1  | Either remove and explicitly install matching versions or dedupe using your package manager.
api_1  | The following conflicting packages were found:
api_1  | 	esm 7.4.1	node_modules/.pnpm/@polkadot+wasm-crypto-wasm@7.4.1_@polkadot+util@13.4.3/node_modules/@polkadot/wasm-crypto-wasm/
api_1  | 	cjs 7.4.1	node_modules/.pnpm/@polkadot+wasm-crypto-wasm@7.4.1_@polkadot+util@13.4.3/node_modules/@polkadot/wasm-crypto-wasm/cjs
api_1  | @polkadot/wasm-util has multiple versions, ensure that there is only one installed.
api_1  | Either remove and explicitly install matching versions or dedupe using your package manager.
api_1  | The following conflicting packages were found:
api_1  | 	esm 7.4.1	node_modules/.pnpm/@polkadot+wasm-util@7.4.1_@polkadot+util@13.4.3/node_modules/@polkadot/wasm-util/
api_1  | 	cjs 7.4.1	node_modules/.pnpm/@polkadot+wasm-util@7.4.1_@polkadot+util@13.4.3/node_modules/@polkadot/wasm-util/cjs
api_1  | @polkadot/types has multiple versions, ensure that there is only one installed.
api_1  | Either remove and explicitly install matching versions or dedupe using your package manager.
api_1  | The following conflicting packages were found:
api_1  | 	esm 15.9.1	node_modules/.pnpm/@polkadot+types@15.9.1/node_modules/@polkadot/types/
api_1  | 	cjs 15.9.1	node_modules/.pnpm/@polkadot+types@15.9.1/node_modules/@polkadot/types/cjs
api_1  | @polkadot/types-create has multiple versions, ensure that there is only one installed.
api_1  | Either remove and explicitly install matching versions or dedupe using your package manager.
api_1  | The following conflicting packages were found:
api_1  | 	esm 15.9.1	node_modules/.pnpm/@polkadot+types-create@15.9.1/node_modules/@polkadot/types-create/
api_1  | 	cjs 15.9.1	node_modules/.pnpm/@polkadot+types-create@15.9.1/node_modules/@polkadot/types-create/cjs
api_1  | @polkadot/types-codec has multiple versions, ensure that there is only one installed.
api_1  | Either remove and explicitly install matching versions or dedupe using your package manager.
api_1  | The following conflicting packages were found:
api_1  | 	esm 15.9.1	node_modules/.pnpm/@polkadot+types-codec@15.9.1/node_modules/@polkadot/types-codec/
api_1  | 	cjs 15.9.1	node_modules/.pnpm/@polkadot+types-codec@15.9.1/node_modules/@polkadot/types-codec/cjs
api_1  | Initializing network connections...
api_1  | Connected to wss://sys.ibp.network/asset-hub-polkadot using PAPI
api_1  | Server is running on port 3001
api_1  | Connected to wss://rpc.hydradx.cloud
api_1  | Connected to wss://rpc.hydradx.cloud using Polkadot API
api_1  | All network connections initialized
api_1  | Initializing trade router...
api_1  | Syncing registry with 204 assets
api_1  | TradeRouterService initialized successfully
api_1  | Initializing asset service...
api_1  | All assets and metadata fetched and cached
api_1  | Xyk mem pools 1 ✅
api_1  | Omnipool mem pools 1 ✅
api_1  | Lbp mem pools 1 ✅
api_1  | Stableswap mem pools 1 ✅
api_1  | Lbp pools(0) ✅
api_1  | Lbp subs(0) ✅
api_1  | Omnipool [7L53bUTBbf...] balance subscribed
api_1  | Omnipool pools(1) ✅
api_1  | Omnipool subs(3) ✅
api_1  | Xyk [7Ng5x54Yht...] balance subscribed
api_1  | Xyk [7MXgvKfXrv...] balance subscribed
api_1  | Xyk [7KK3V8SDWu...] balance subscribed
api_1  | Xyk [7MQjJCRm8A...] balance subscribed
api_1  | Xyk [7KWJYcMnd4...] balance subscribed
api_1  | Xyk [7P8J4Ux4gR...] balance subscribed
api_1  | Xyk [7LLwSgKxfd...] balance subscribed
api_1  | Xyk [7LnkizyuqV...] balance subscribed
api_1  | Xyk [7PG4XJStVk...] balance subscribed
api_1  | Xyk [7M4ZPaPuXG...] balance subscribed
api_1  | Xyk [7HuPcWECUV...] balance subscribed
api_1  | Xyk [7LTbdfUvjK...] balance subscribed
api_1  | Xyk [7L7LcvenaR...] balance subscribed
api_1  | Xyk [7JBqzTe8mS...] balance subscribed
api_1  | Xyk [7NaaM4kjUi...] balance subscribed
api_1  | Xyk [7NAZGHJ9Uh...] balance subscribed
api_1  | Xyk [7Hnz4EvBwg...] balance subscribed
api_1  | Xyk [7HugGqamGK...] balance subscribed
api_1  | Xyk [7J4CZXYzZP...] balance subscribed
api_1  | Xyk [7HmDbzZoWD...] balance subscribed
api_1  | Xyk [7HkYL6b2p4...] balance subscribed
api_1  | Xyk [7HmEek1jti...] balance subscribed
api_1  | Xyk [7P9KqhSexz...] balance subscribed
api_1  | Xyk [7J2Xan3eSM...] balance subscribed
api_1  | Xyk [7LYn5YB7tm...] balance subscribed
api_1  | Xyk [7MF5PY2o7s...] balance subscribed
api_1  | Xyk [7NPWe2Y1TV...] balance subscribed
api_1  | Xyk [7J3UoYB5TS...] balance subscribed
api_1  | Xyk [7Lqy7HjhbQ...] balance subscribed
api_1  | Xyk [7Mqt796ndN...] balance subscribed
api_1  | Xyk [7K348SBxkC...] balance subscribed
api_1  | Xyk [7KWuZGbZEs...] balance subscribed
api_1  | Xyk [7N3qEFSBWY...] balance subscribed
api_1  | Xyk [7JJ3ob15bo...] balance subscribed
api_1  | Xyk [7PAGeKCJJG...] balance subscribed
api_1  | Xyk [7K4AcNr5rg...] balance subscribed
api_1  | Xyk [7P7gK6QgTC...] balance subscribed
api_1  | Xyk [7KuqZNLuPk...] balance subscribed
api_1  | Xyk [7JCxDBik4H...] balance subscribed
api_1  | Xyk [7JWYQ2DYpr...] balance subscribed
api_1  | Xyk [7N3s3y993a...] balance subscribed
api_1  | Xyk [7K6Tt2EB2N...] balance subscribed
api_1  | Xyk [7MveTu8GZx...] balance subscribed
api_1  | Xyk [7KEsKSHoJi...] balance subscribed
api_1  | Xyk [7NoBSvuNS5...] balance subscribed
api_1  | Xyk [7MCEZkdG2w...] balance subscribed
api_1  | Xyk [7LRfzVTknQ...] balance subscribed
api_1  | Xyk [7NUJFMR9Wk...] balance subscribed
api_1  | Xyk [7MuUbvxJ9v...] balance subscribed
api_1  | Xyk [7JhF2aPwuj...] balance subscribed
api_1  | Xyk [7NPweAerKa...] balance subscribed
api_1  | Xyk [7L932APnXW...] balance subscribed
api_1  | Xyk [7KVVxpFqrc...] balance subscribed
api_1  | Xyk [7Lvnpjm1kS...] balance subscribed
api_1  | Xyk [7P7wFNhgZu...] balance subscribed
api_1  | Xyk [7NrBw6m9st...] balance subscribed
api_1  | Xyk [7KZMhpcoe6...] balance subscribed
api_1  | Xyk [7MLTH2tFE8...] balance subscribed
api_1  | Xyk [7MKJkrswrA...] balance subscribed
api_1  | Xyk [7KTJTAxLEG...] balance subscribed
api_1  | Xyk [7HwgoABwd6...] balance subscribed
api_1  | Xyk [7K3RgizRia...] balance subscribed
api_1  | Xyk [7LuV341j9G...] balance subscribed
api_1  | Xyk [7MazhGnfXP...] balance subscribed
api_1  | Xyk [7KwKVeboct...] balance subscribed
api_1  | Xyk [7Nt5EEx7uF...] balance subscribed
api_1  | Xyk [7N4BvEsDe2...] balance subscribed
api_1  | Xyk [7JMCTf2j8L...] balance subscribed
api_1  | Xyk [7LbjoqFDcQ...] balance subscribed
api_1  | Xyk [7MPQyn5ELn...] balance subscribed
api_1  | Xyk [7J6JvaD1fs...] balance subscribed
api_1  | Xyk [7NeK45U4gW...] balance subscribed
api_1  | Xyk [7N4v4yPgmB...] balance subscribed
api_1  | Xyk [7Nvf1nxWcp...] balance subscribed
api_1  | Xyk [7J8AVj5js1...] balance subscribed
api_1  | Xyk [7JRrXBpB1K...] balance subscribed
api_1  | Xyk [7NtCze6PjL...] balance subscribed
api_1  | Xyk [7J7C7YMJT1...] balance subscribed
api_1  | Xyk [7Ly1vsyAV8...] balance subscribed
api_1  | Xyk [7JyYo9eRrY...] balance subscribed
api_1  | Xyk [7JbHiKAaCL...] balance subscribed
api_1  | Xyk [7KE1PTcvhR...] balance subscribed
api_1  | Xyk [7KZGAZfYLs...] balance subscribed
api_1  | Xyk [7P14DyYfRz...] balance subscribed
api_1  | Xyk [7JG6LZjtcw...] balance subscribed
api_1  | Xyk [7NKFpxaXym...] balance subscribed
api_1  | Xyk [7L1wLYY2XJ...] balance subscribed
api_1  | Xyk [7MZ5JthfEe...] balance subscribed
api_1  | Xyk [7KzUj7umfp...] balance subscribed
api_1  | Xyk [7PBWdNG5sZ...] balance subscribed
api_1  | Xyk [7N6rhBoDJ1...] balance subscribed
api_1  | Xyk [7Ms3hryBYj...] balance subscribed
api_1  | Xyk [7NuJe4EcDp...] balance subscribed
api_1  | Xyk [7NvHfgusTV...] balance subscribed
api_1  | Xyk [7JCXZKeGpj...] balance subscribed
api_1  | Xyk [7Ndv8yEWSB...] balance subscribed
api_1  | Xyk [7JojeSp9MV...] balance subscribed
api_1  | Xyk [7P9DkRuJVs...] balance subscribed
api_1  | Xyk [7Noq6Lw46j...] balance subscribed
api_1  | Xyk [7NTAu7Pfut...] balance subscribed
api_1  | Xyk [7N1dToULCj...] balance subscribed
api_1  | Xyk [7K2Lv82Ek9...] balance subscribed
api_1  | Xyk [7MiB7LH7rS...] balance subscribed
api_1  | Xyk [7KKXieLDbf...] balance subscribed
api_1  | Xyk [7KLichhV1i...] balance subscribed
api_1  | Xyk [7MnTh8N7p8...] balance subscribed
api_1  | Xyk [7MQmFvs9FP...] balance subscribed
api_1  | Xyk [7LQssWv7je...] balance subscribed
api_1  | Xyk [7MJjFCDfmS...] balance subscribed
api_1  | Xyk [7LtzyH2Uku...] balance subscribed
api_1  | Xyk [7P1uW2jjUL...] balance subscribed
api_1  | Xyk [7P7gPHswkL...] balance subscribed
api_1  | Xyk [7N7RKaCVqi...] balance subscribed
api_1  | Xyk [7JDNz4ULW2...] balance subscribed
api_1  | Xyk [7JoCYJyDXs...] balance subscribed
api_1  | Xyk [7MGWXo9VpF...] balance subscribed
api_1  | Xyk [7MHyCfVcSy...] balance subscribed
api_1  | Xyk [7LntV47x73...] balance subscribed
api_1  | Xyk [7KhXnguryv...] balance subscribed
api_1  | Xyk [7PEbRLjLwF...] balance subscribed
api_1  | Xyk [7JoCXXNRn7...] balance subscribed
api_1  | Xyk [7NPYiXKS9d...] balance subscribed
api_1  | Xyk [7NbK3nNUJE...] balance subscribed
api_1  | Xyk [7LBSsk2iPw...] balance subscribed
api_1  | Xyk [7LEHkRSuC3...] balance subscribed
api_1  | Xyk [7JzgT8M2X9...] balance subscribed
api_1  | Xyk [7N8uzcXKbV...] balance subscribed
api_1  | Xyk [7KsbYZTDHQ...] balance subscribed
api_1  | Xyk [7L3yk3A18E...] balance subscribed
api_1  | Xyk [7NL2VJr35A...] balance subscribed
api_1  | Xyk [7Hhnk53koe...] balance subscribed
api_1  | Xyk [7HpVPprYhS...] balance subscribed
api_1  | Xyk [7LGagyCQkt...] balance subscribed
api_1  | Xyk [7MuHVrRFZ6...] balance subscribed
api_1  | Xyk pools(134) ✅
api_1  | Xyk subs(153) ✅
api_1  | Stableswap [7JP6TvcH5x...] balance subscribed
api_1  | Stableswap [7MaKPwwnqN...] balance subscribed
api_1  | Stableswap [7LVGEVLFXp...] balance subscribed
api_1  | Stableswap pools(3) ✅
api_1  | Stableswap subs(9) ✅
api_1  | Cache initialized for merged_assets
api_1  | AssetService initialized successfully
api_1  | SDK initialized successfully
```
</details>

Tear down build works:
```ts
docker-compose down
Removing swush-app_web_1 ... done
Removing swush-app_api_1 ... done
Removing network swush-app_default
```
`pnpm dev` successfully builds and launches UI on port 3000

```ts
packages/api dev: Xyk [7Hhnk53koe...] balance subscribed
packages/api dev: Xyk [7HpVPprYhS...] balance subscribed
packages/api dev: Xyk [7LGagyCQkt...] balance subscribed
packages/api dev: Xyk [7MuHVrRFZ6...] balance subscribed
packages/api dev: Xyk pools(134) ✅
packages/api dev: Xyk subs(153) ✅
packages/api dev: Stableswap [7JP6TvcH5x...] balance subscribed
packages/api dev: Stableswap [7MaKPwwnqN...] balance subscribed
packages/api dev: Stableswap [7LVGEVLFXp...] balance subscribed
packages/api dev: Stableswap pools(3) ✅
packages/api dev: Stableswap subs(9) ✅
packages/api dev: Cache initialized for merged_assets
packages/api dev: AssetService initialized successfully
packages/api dev: SDK initialized successfully
```

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
