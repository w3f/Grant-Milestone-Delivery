# Evaluation

- **Status:** in progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ElizaPluginPolkadot.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/Esscrypt/plugin-polkadot/blob/main/LICENSE) | Apache 2.0 |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [Setup Tutorial](https://github.com/Esscrypt/plugin-polkadot/blob/main/README.md#step-by-step-usage)<br> | Inline code documentation and comprehensive setup tutorial with step-by-step ElizaOS integration |
| 0c. | Testing and Testing Guide | <ul><li>[x] </li></ul> | • [Tests](https://github.com/Esscrypt/plugin-polkadot/tree/main/src/tests)<br>• [Instructions](https://github.com/Esscrypt/plugin-polkadot/blob/main/README.md#testing) | Comprehensive unit tests covering core functions with testing instructions |
| 4.     | Transfers & Transactions | <ul><li>[x] </li></ul> | [Here](https://github.com/Esscrypt/plugin-polkadot/blob/main/src/actions/crossChainTransfer.ts) [Here](https://github.com/Esscrypt/plugin-polkadot/blob/main/src/actions/transferFunds.ts) | Execute token transfers between accounts, multisigs, or across parachains (XCMP transfers).    
| 5.     | Subsidized Transactions  | <ul><li>[x] </li></ul> | [Action Here](https://github.com/Esscrypt/plugin-polkadot/blob/main/src/actions/subsidizedTransfer.ts)	|Subsidized payment of transaction fees using asset hub's sufficient assets.                  |
| 6.     | Official ElizaOS Repository Integration | <ul><li>[x] </li></ul> | [Merged Here](https://github.com/elizaos-plugins/registry/pull/184#event-18525664150) |Submit a pull request to the official ElizaOS plugin repository and ensure successful merge. This ensures the plugin becomes an official part of the ElizaOS ecosystem and is accessible to all ElizaOS users. |

# General Notes

Agent successfully builds:

<details>
  <summary>Output</summary>

```ts
bun i && bun run build
bun install v1.2.17 (282dda62)

$ bash ./scripts/init-submodules.sh
Initializing git submodules...
Git submodules initialized successfully
$ husky

4 packages installed [7.50s]
$ turbo run build --filter=!@elizaos/docs
╭──────────────────────────────────────────────────────────────────────────╮
│                                                                          │
│                     Update available v2.5.4 ≫ v2.5.5                     │
│    Changelog: https://github.com/vercel/turborepo/releases/tag/v2.5.5    │
│            Run "bunx @turbo/codemod@latest update" to update             │
│                                                                          │
│          Follow @turborepo for updates: https://x.com/turborepo          │
╰──────────────────────────────────────────────────────────────────────────╯
turbo 2.5.4

• Packages in scope: @elizaos/api-client, @elizaos/app, @elizaos/autodoc, @elizaos/cli, @elizaos/client, @elizaos/core, @elizaos/plugin-bootstrap, @elizaos/plugin-dummy-services, @elizaos/plugin-polkadot, @elizaos/plugin-sql, @elizaos/plugin-starter, @elizaos/project-starter, @elizaos/project-tee-starter, @elizaos/server, create-eliza
• Running build in 15 packages
• Remote caching disabled
@elizaos/plugin-polkadot:build: cache miss, executing 4c9eaa89f30337c9
@elizaos/plugin-polkadot:build: 
@elizaos/core:build: cache miss, executing b09a38d7af26f41a
@elizaos/core:build: 
@elizaos/plugin-polkadot:build: $ tsup
@elizaos/core:build: $ tsup
@elizaos/autodoc:build: cache hit, replaying logs 937ebefbc65f08da
@elizaos/autodoc:build: 
@elizaos/autodoc:build: $ tsup
@elizaos/autodoc:build: CLI Building entry: src/index.ts
@elizaos/autodoc:build: CLI Using tsconfig: tsconfig.build.json
@elizaos/autodoc:build: CLI tsup v8.5.0
@elizaos/autodoc:build: CLI Using tsup config: /home/ubuntu/eliza/packages/autodoc/tsup.config.ts
@elizaos/autodoc:build: CLI Target: node23
@elizaos/autodoc:build: CLI Cleaning output folder
@elizaos/autodoc:build: CJS Build start
@elizaos/autodoc:build: ESM Build start
@elizaos/autodoc:build: DTS Build start
@elizaos/autodoc:build: ESM dist/index.js     93.71 KB
@elizaos/autodoc:build: ESM dist/index.js.map 199.98 KB
@elizaos/autodoc:build: ESM ⚡️ Build success in 1024ms
@elizaos/autodoc:build: CJS dist/index.cjs     95.46 KB
@elizaos/autodoc:build: CJS dist/index.cjs.map 200.11 KB
@elizaos/autodoc:build: CJS ⚡️ Build success in 1025ms
@elizaos/autodoc:build: DTS ⚡️ Build success in 7296ms
@elizaos/autodoc:build: DTS dist/index.d.cts 13.00 B
@elizaos/autodoc:build: DTS dist/index.d.ts  13.00 B
@elizaos/plugin-polkadot:build: CLI Building entry: src/index.ts
@elizaos/plugin-polkadot:build: CLI Using tsconfig: tsconfig.json
@elizaos/plugin-polkadot:build: CLI tsup v8.3.5
@elizaos/plugin-polkadot:build: CLI Using tsup config: /home/ubuntu/eliza/packages/plugin-polkadot/tsup.config.ts
@elizaos/core:build: CLI Building entry: src/index.ts, src/specs/v1/actionExample.ts, src/specs/v1/index.ts, src/specs/v1/messages.ts, src/specs/v1/posts.ts, src/specs/v1/provider.ts, src/specs/v1/runtime.ts, src/specs/v1/state.ts, src/specs/v1/templates.ts, src/specs/v1/types.ts, src/specs/v1/uuid.ts, src/specs/v2/index.ts
@elizaos/plugin-polkadot:build: CLI Target: esnext
@elizaos/plugin-polkadot:build: CLI Cleaning output folder
@elizaos/core:build: CLI Using tsconfig: tsconfig.build.json
@elizaos/core:build: CLI tsup v8.5.0
@elizaos/plugin-polkadot:build: ESM Build start
@elizaos/core:build: CLI Using tsup config: /home/ubuntu/eliza/packages/core/tsup.config.ts
@elizaos/core:build: CLI Target: node18
@elizaos/core:build: CLI Cleaning output folder
@elizaos/core:build: ESM Build start
@elizaos/core:build: ESM dist/specs/v1/templates.js     219.00 B
@elizaos/core:build: ESM dist/specs/v1/types.js         567.00 B
@elizaos/core:build: ESM dist/specs/v1/uuid.js          340.00 B
@elizaos/core:build: ESM dist/specs/v2/index.js         4.76 KB
@elizaos/core:build: ESM dist/index.js                  3.79 KB
@elizaos/core:build: ESM dist/specs/v1/actionExample.js 263.00 B
@elizaos/core:build: ESM dist/specs/v1/index.js         1.53 KB
@elizaos/core:build: ESM dist/specs/v1/messages.js      440.00 B
@elizaos/core:build: ESM dist/specs/v1/posts.js         303.00 B
@elizaos/core:build: ESM dist/specs/v1/provider.js      189.00 B
@elizaos/core:build: ESM dist/specs/v1/runtime.js       306.00 B
@elizaos/core:build: ESM dist/chunk-2HSL25IJ.js         852.00 B
@elizaos/core:build: ESM dist/chunk-WO7Z3GE6.js         5.72 KB
@elizaos/core:build: ESM dist/chunk-WZ3GLSAN.js         194.67 KB
@elizaos/core:build: ESM dist/chunk-U2ADTLZY.js         1.43 KB
@elizaos/core:build: ESM dist/chunk-JX2SRFHQ.js         1.52 KB
@elizaos/core:build: ESM dist/specs/v1/state.js         143.00 B
@elizaos/core:build: ESM dist/chunk-YIBXLDIR.js         749.00 B
@elizaos/core:build: ESM dist/chunk-R5U7XKVJ.js         569.00 B
@elizaos/core:build: ESM ⚡️ Build success in 109ms
@elizaos/plugin-polkadot:build: ESM dist/index.js     146.92 KB
@elizaos/plugin-polkadot:build: ESM dist/index.js.map 292.16 KB
@elizaos/plugin-polkadot:build: ESM ⚡️ Build success in 166ms
@elizaos/core:build: DTS Build start
@elizaos/core:build: DTS ⚡️ Build success in 5218ms
@elizaos/core:build: DTS dist/index.d.ts                  82.72 KB
@elizaos/core:build: DTS dist/specs/v1/actionExample.d.ts 1.47 KB
@elizaos/core:build: DTS dist/specs/v1/messages.d.ts      890.00 B
@elizaos/core:build: DTS dist/specs/v1/posts.d.ts         253.00 B
@elizaos/core:build: DTS dist/specs/v1/provider.d.ts      691.00 B
@elizaos/core:build: DTS dist/specs/v1/runtime.d.ts       6.30 KB
@elizaos/core:build: DTS dist/specs/v1/templates.d.ts     1.54 KB
@elizaos/core:build: DTS dist/specs/v1/state.d.ts         612.00 B
@elizaos/core:build: DTS dist/specs/v1/uuid.d.ts          834.00 B
@elizaos/core:build: DTS dist/specs/v1/types.d.ts         38.52 KB
@elizaos/core:build: DTS dist/specs/v1/index.d.ts         1.74 KB
@elizaos/core:build: DTS dist/specs/v2/index.d.ts         4.44 KB
@elizaos/core:build: DTS dist/index-BHW44X0A.d.ts         10.82 KB
@elizaos/core:build: DTS dist/index-Bu4JVNja.d.ts         129.95 KB
@elizaos/core:build: DTS dist/types-CpAVqV6l.d.ts         73.48 KB
@elizaos/api-client:build: cache miss, executing abe84c8742d3dbd4
@elizaos/plugin-sql:build: cache miss, executing 041d04b3c318dec7
@elizaos/api-client:build: 
@elizaos/plugin-sql:build: 
@elizaos/plugin-dummy-services:build: cache miss, executing ba714611ec582c46
@elizaos/plugin-dummy-services:build: 
@elizaos/api-client:build: $ tsup
@elizaos/plugin-sql:build: $ tsup
@elizaos/plugin-dummy-services:build: $ tsup
@elizaos/api-client:build: CLI Building entry: src/index.ts
@elizaos/api-client:build: CLI Using tsconfig: tsconfig.json
@elizaos/api-client:build: CLI tsup v8.5.0
@elizaos/api-client:build: CLI Using tsup config: /home/ubuntu/eliza/packages/api-client/tsup.config.ts
@elizaos/api-client:build: CLI Target: es2022
@elizaos/api-client:build: CLI Cleaning output folder
@elizaos/api-client:build: ESM Build start
@elizaos/plugin-dummy-services:build: CLI Building entry: src/index.ts
@elizaos/plugin-dummy-services:build: CLI Using tsconfig: tsconfig.build.json
@elizaos/plugin-dummy-services:build: CLI tsup v8.5.0
@elizaos/plugin-dummy-services:build: CLI Using tsup config: /home/ubuntu/eliza/packages/plugin-dummy-services/tsup.config.ts
@elizaos/api-client:build: ESM dist/index.js     27.13 KB
@elizaos/api-client:build: ESM dist/index.js.map 59.21 KB
@elizaos/api-client:build: ESM ⚡️ Build success in 38ms
@elizaos/plugin-sql:build: CLI Building entry: src/index.ts
@elizaos/plugin-sql:build: CLI Using tsconfig: tsconfig.build.json
@elizaos/plugin-sql:build: CLI tsup v8.5.0
@elizaos/plugin-sql:build: CLI Using tsup config: /home/ubuntu/eliza/packages/plugin-sql/tsup.config.ts
@elizaos/plugin-dummy-services:build: CLI Target: esnext
@elizaos/plugin-sql:build: CLI Target: esnext
@elizaos/plugin-sql:build: CLI Cleaning output folder
@elizaos/plugin-sql:build: ESM Build start
@elizaos/plugin-dummy-services:build: CLI Cleaning output folder
@elizaos/plugin-dummy-services:build: ESM Build start
@elizaos/plugin-dummy-services:build: ESM dist/index.js     26.73 KB
@elizaos/plugin-dummy-services:build: ESM dist/index.js.map 47.11 KB
@elizaos/plugin-dummy-services:build: ESM ⚡️ Build success in 48ms
@elizaos/plugin-sql:build: ESM dist/index.js     158.44 KB
@elizaos/plugin-sql:build: ESM dist/index.js.map 300.79 KB
@elizaos/plugin-sql:build: ESM ⚡️ Build success in 88ms
@elizaos/plugin-dummy-services:build: DTS Build start
@elizaos/api-client:build: DTS Build start
@elizaos/plugin-sql:build: DTS Build start
@elizaos/plugin-dummy-services:build: DTS ⚡️ Build success in 4873ms
@elizaos/plugin-dummy-services:build: DTS dist/index.d.ts 3.31 KB
@elizaos/api-client:build: DTS ⚡️ Build success in 5983ms
@elizaos/api-client:build: DTS dist/index.d.ts 23.61 KB
@elizaos/client:build: cache miss, executing 2b96bdcc3eab8a0c
@elizaos/client:build: 
@elizaos/client:build: $ vite build
@elizaos/plugin-sql:build: DTS ⚡️ Build success in 6829ms
@elizaos/plugin-sql:build: DTS dist/index.d.ts 78.52 KB
@elizaos/plugin-bootstrap:build: cache miss, executing 3d6e94ce6cd2385f
@elizaos/plugin-bootstrap:build: 
@elizaos/server:build: cache miss, executing 00fd90d3e0c23989
@elizaos/server:build: 
@elizaos/plugin-bootstrap:build: $ tsup
@elizaos/server:build: $ tsup
@elizaos/server:build: CLI Building entry: src/index.ts
@elizaos/server:build: CLI Using tsconfig: tsconfig.build.json
@elizaos/server:build: CLI tsup v8.5.0
@elizaos/server:build: CLI Using tsup config: /home/ubuntu/eliza/packages/server/tsup.config.ts
@elizaos/server:build: CLI Target: esnext
@elizaos/server:build: CLI Cleaning output folder
@elizaos/server:build: ESM Build start
@elizaos/plugin-bootstrap:build: CLI Building entry: src/index.ts
@elizaos/plugin-bootstrap:build: CLI Using tsconfig: tsconfig.build.json
@elizaos/plugin-bootstrap:build: CLI tsup v8.5.0
@elizaos/plugin-bootstrap:build: CLI Using tsup config: /home/ubuntu/eliza/packages/plugin-bootstrap/tsup.config.ts
@elizaos/plugin-bootstrap:build: CLI Target: esnext
@elizaos/plugin-bootstrap:build: CLI Cleaning output folder
@elizaos/plugin-bootstrap:build: ESM Build start
@elizaos/server:build: ESM dist/index.js     227.00 KB
@elizaos/server:build: ESM dist/index.js.map 437.56 KB
@elizaos/server:build: ESM ⚡️ Build success in 201ms
@elizaos/plugin-bootstrap:build: ESM dist/index.js     825.87 KB
@elizaos/plugin-bootstrap:build: ESM dist/index.js.map 888.02 KB
@elizaos/plugin-bootstrap:build: ESM ⚡️ Build success in 273ms
@elizaos/server:build: DTS Build start
@elizaos/plugin-bootstrap:build: DTS Build start
@elizaos/plugin-bootstrap:build: DTS ⚡️ Build success in 5781ms
@elizaos/plugin-bootstrap:build: DTS dist/index.d.ts 19.81 KB
@elizaos/server:build: DTS ⚡️ Build success in 6506ms
@elizaos/server:build: DTS dist/index.d.ts 10.08 KB

@elizaos/cli:build: cache miss, executing f7992846e5da7e82
@elizaos/cli:build: 
@elizaos/cli:build: $ bun run src/scripts/copy-templates.ts && bun x tsup && bun run src/scripts/copy-client-dist.ts
@elizaos/cli:build: Templates have been copied and updated successfully.
@elizaos/cli:build: CLI Building entry: src/index.ts, src/commands/agent/index.ts, src/commands/create/index.ts, src/commands/shared/index.ts, src/commands/agent/actions/index.ts, src/commands/create/actions/index.ts
@elizaos/cli:build: CLI Using tsconfig: tsconfig.json
@elizaos/cli:build: CLI tsup v8.5.0
@elizaos/cli:build: CLI Using tsup config: /home/ubuntu/eliza/packages/cli/tsup.config.ts
@elizaos/cli:build: CLI Target: esnext
@elizaos/cli:build: CLI Cleaning output folder
@elizaos/cli:build: ESM Build start
@elizaos/cli:build: i Resolve assert pair to path from: /home/ubuntu/eliza/packages/cli
@elizaos/cli:build: i Watching mode disabled. You need to enable build.watch option for watch mode to work.
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/README.md -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/README.md
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/bunfig.toml -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/bunfig.toml
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/cypress.config.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/cypress.config.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/index.html -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/index.html
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/package.json -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/package.json
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/postcss.config.js -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/postcss.config.js
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/tailwind.config.js -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/tailwind.config.js
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/tsconfig.build.json -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/tsconfig.build.json
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/tsconfig.json -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/tsconfig.json
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/tsup.config.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/tsup.config.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/vite.config.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/vite.config.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/README.md -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/README.md
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/bunfig.toml -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/bunfig.toml
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/cypress.config.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/cypress.config.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/index.html -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/index.html
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/package.json -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/package.json
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/postcss.config.js -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/postcss.config.js
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/tailwind.config.js -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/tailwind.config.js
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/tsconfig.build.json -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/tsconfig.build.json
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/tsconfig.json -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/tsconfig.json
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/tsup.config.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/tsup.config.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/vite.config.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/vite.config.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/Dockerfile -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/Dockerfile
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/GUIDE.md -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/GUIDE.md
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/README.md -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/README.md
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/bunfig.toml -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/bunfig.toml
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/docker-compose.yaml -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/docker-compose.yaml
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/package.json -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/package.json
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/tsconfig.build.json -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/tsconfig.build.json
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/tsconfig.json -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/tsconfig.json
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/tsup.config.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/tsup.config.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/dist/index.d.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/dist/index.d.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/dist/index.js -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/dist/index.js
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/dist/index.js.map -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/dist/index.js.map
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/scripts/install-test-deps.js -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/scripts/install-test-deps.js
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/scripts/test-e2e-manual.js -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/scripts/test-e2e-manual.js
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/src/index.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/src/index.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/src/plugin.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/src/plugin.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/src/tests.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/src/tests.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/dist/index.js -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/dist/index.js
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/dist/index.js.map -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/dist/index.js.map
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/scripts/install-test-deps.js -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/scripts/install-test-deps.js
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/scripts/test-all.sh -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/scripts/test-all.sh
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/character.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/character.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/index.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/index.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/plugin.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/plugin.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/__tests__/actions.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/__tests__/actions.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/__tests__/character.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/__tests__/character.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/__tests__/config.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/__tests__/config.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/__tests__/env.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/__tests__/env.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/__tests__/error-handling.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/__tests__/error-handling.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/__tests__/events.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/__tests__/events.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/__tests__/file-structure.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/__tests__/file-structure.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/__tests__/integration.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/__tests__/integration.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/__tests__/models.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/__tests__/models.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/__tests__/plugin.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/__tests__/plugin.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/__tests__/provider.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/__tests__/provider.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/__tests__/routes.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/__tests__/routes.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/__tests__/test-utils.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/__tests__/test-utils.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/assets/mr-tee-portrait.jpg -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/assets/mr-tee-portrait.jpg
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/dist/index.js -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/dist/index.js
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/dist/index.js.map -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/dist/index.js.map
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/e2e/project.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/e2e/project.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/e2e/starter-plugin.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/e2e/starter-plugin.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/src/character.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/src/character.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/src/index.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/src/index.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/src/plugin.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/src/plugin.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/src/__tests__/integration.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/src/__tests__/integration.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/src/__tests__/plugin.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/src/__tests__/plugin.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/src/__tests__/test-utils.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/src/__tests__/test-utils.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/src/frontend/index.css -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/src/frontend/index.css
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/src/frontend/index.tsx -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/src/frontend/index.tsx
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/src/frontend/utils.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/src/frontend/utils.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/__tests__/actions.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/__tests__/actions.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/__tests__/character-plugin-ordering.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/__tests__/character-plugin-ordering.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/__tests__/character.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/__tests__/character.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/__tests__/config.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/__tests__/config.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/__tests__/env.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/__tests__/env.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/__tests__/error-handling.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/__tests__/error-handling.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/__tests__/events.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/__tests__/events.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/__tests__/file-structure.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/__tests__/file-structure.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/__tests__/integration.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/__tests__/integration.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/__tests__/models.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/__tests__/models.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/__tests__/plugin.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/__tests__/plugin.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/__tests__/provider.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/__tests__/provider.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/__tests__/routes.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/__tests__/routes.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/__tests__/test-utils.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/__tests__/test-utils.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/frontend/index.css -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/frontend/index.css
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/frontend/index.html -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/frontend/index.html
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/frontend/index.tsx -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/frontend/index.tsx
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/frontend/utils.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/frontend/utils.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/__tests__/utils/core-test-utils.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/__tests__/utils/core-test-utils.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/src/__tests__/cypress/tsconfig.json -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/src/__tests__/cypress/tsconfig.json
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/src/__tests__/e2e/README.md -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/src/__tests__/e2e/README.md
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/src/__tests__/e2e/starter-plugin.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/src/__tests__/e2e/starter-plugin.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/__tests__/e2e/index.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/__tests__/e2e/index.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/__tests__/e2e/natural-language.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/__tests__/e2e/natural-language.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/__tests__/e2e/project.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/__tests__/e2e/project.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/__tests__/e2e/starter-plugin.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/__tests__/e2e/starter-plugin.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/__tests__/utils/core-test-utils.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/__tests__/utils/core-test-utils.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/src/__tests__/cypress/component/ExampleRoute.cy.tsx -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/src/__tests__/cypress/component/ExampleRoute.cy.tsx
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/src/__tests__/cypress/component/PanelComponent.cy.tsx -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/src/__tests__/cypress/component/PanelComponent.cy.tsx
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/src/__tests__/cypress/support/commands.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/src/__tests__/cypress/support/commands.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/src/__tests__/cypress/support/component-index.html -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/src/__tests__/cypress/support/component-index.html
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/src/__tests__/cypress/support/component.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/src/__tests__/cypress/support/component.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/src/__tests__/cypress/support/e2e.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/src/__tests__/cypress/support/e2e.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/__tests__/cypress/component/Accessibility.cy.tsx -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/__tests__/cypress/component/Accessibility.cy.tsx
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/__tests__/cypress/component/ApiIntegration.cy.tsx -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/__tests__/cypress/component/ApiIntegration.cy.tsx
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/__tests__/cypress/component/ExampleRoute.cy.tsx -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/__tests__/cypress/component/ExampleRoute.cy.tsx
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/__tests__/cypress/component/PanelComponent.cy.tsx -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/__tests__/cypress/component/PanelComponent.cy.tsx
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/__tests__/cypress/e2e/agent-chat.cy.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/__tests__/cypress/e2e/agent-chat.cy.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/__tests__/cypress/e2e/dashboard.cy.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/__tests__/cypress/e2e/dashboard.cy.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/__tests__/cypress/e2e/user-workflow.cy.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/__tests__/cypress/e2e/user-workflow.cy.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/__tests__/cypress/support/commands.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/__tests__/cypress/support/commands.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/__tests__/cypress/support/component-index.html -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/__tests__/cypress/support/component-index.html
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/__tests__/cypress/support/component.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/__tests__/cypress/support/component.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/__tests__/cypress/support/e2e.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/__tests__/cypress/support/e2e.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/.gitignore -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/.gitignore
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/.npmignore -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/.npmignore
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/.env.example -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/.env.example
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/.gitignore -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/.gitignore
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/.npmignore -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/.npmignore
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/.dockerignore -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/.dockerignore
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/.env.example -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/.env.example
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/.gitignore -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/.gitignore
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/.npmignore -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/.npmignore
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/docs/docs/plugins/migration/claude-code/advanced-migration-guide.md -> /home/ubuntu/eliza/packages/cli/dist/migration-guides/advanced-migration-guide.md
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/docs/docs/plugins/migration/claude-code/completion-requirements.md -> /home/ubuntu/eliza/packages/cli/dist/migration-guides/completion-requirements.md
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/docs/docs/plugins/migration/claude-code/integrated-migration-loop.md -> /home/ubuntu/eliza/packages/cli/dist/migration-guides/integrated-migration-loop.md
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/docs/docs/plugins/migration/claude-code/migration-guide.md -> /home/ubuntu/eliza/packages/cli/dist/migration-guides/migration-guide.md
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/docs/docs/plugins/migration/claude-code/prompt-and-generation-guide.md -> /home/ubuntu/eliza/packages/cli/dist/migration-guides/prompt-and-generation-guide.md
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/docs/docs/plugins/migration/claude-code/state-and-providers-guide.md -> /home/ubuntu/eliza/packages/cli/dist/migration-guides/state-and-providers-guide.md
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/docs/docs/plugins/migration/claude-code/testing-guide.md -> /home/ubuntu/eliza/packages/cli/dist/migration-guides/testing-guide.md
@elizaos/cli:build: ESM dist/setup-K57BO7RB.js                471.00 B
@elizaos/cli:build: ESM dist/plugin-creator-35CAJF4O.js       30.68 KB
@elizaos/cli:build: ESM dist/commands/agent/index.js          417.00 B
@elizaos/cli:build: ESM dist/index.js                         195.48 KB
@elizaos/cli:build: ESM dist/chunk-XJILFI3S.js                5.94 KB
@elizaos/cli:build: ESM dist/commands/shared/index.js         261.00 B
@elizaos/cli:build: ESM dist/commands/agent/actions/index.js  445.00 B
@elizaos/cli:build: ESM dist/commands/create/index.js         367.00 B
@elizaos/cli:build: ESM dist/commands/create/actions/index.js 687.00 B
@elizaos/cli:build: ESM dist/chunk-XP3VU6BN.js                10.17 KB
@elizaos/cli:build: ESM dist/registry-RUG45V2P.js             1.22 KB
@elizaos/cli:build: ESM dist/utils-YF4RZR7K.js                4.72 KB
@elizaos/cli:build: ESM dist/chunk-7PPBVSWE.js                5.50 KB
@elizaos/cli:build: ESM dist/chunk-F24MS2YR.js                531.00 B
@elizaos/cli:build: ESM dist/chunk-AQ6OMR2A.js                480.00 B
@elizaos/cli:build: ESM dist/chunk-PDYSGRDE.js                193.19 KB
@elizaos/cli:build: ESM dist/chunk-ZYDPZGQX.js                22.34 KB
@elizaos/cli:build: ESM ⚡️ Build success in 181ms
@elizaos/cli:build: DTS Build start
@elizaos/cli:build: DTS ⚡️ Build success in 14403ms
@elizaos/cli:build: DTS dist/index.d.ts                         20.00 B
@elizaos/cli:build: DTS dist/commands/create/index.d.ts         89.00 B
@elizaos/cli:build: DTS dist/commands/agent/index.d.ts          585.00 B
@elizaos/cli:build: DTS dist/commands/agent/actions/index.d.ts  974.00 B
@elizaos/cli:build: DTS dist/commands/create/actions/index.d.ts 1.84 KB
@elizaos/cli:build: DTS dist/commands/shared/index.d.ts         831.00 B
@elizaos/cli:build: [2025-07-25 21:16:47] INFO: ✅ Client files successfully copied to CLI package
@elizaos/app:build: cache miss, executing cd9b051a604f3024
@elizaos/app:build: 
@elizaos/project-starter:build: cache miss, executing 28ab96e3279b1c0a
@elizaos/app:build: $ tsc && vite build
@elizaos/project-tee-starter:build: cache miss, executing f6796266efa8e7aa
@elizaos/project-tee-starter:build: 
@elizaos/project-starter:build: 
@elizaos/project-starter:build: $ tsc --noEmit && vite build && tsup
@elizaos/plugin-starter:build: cache miss, executing 8f09659fdd62e7a2
@elizaos/project-tee-starter:build: $ tsup
@elizaos/plugin-starter:build: 
@elizaos/plugin-starter:build: $ tsc --noEmit && vite build && tsup
@elizaos/project-tee-starter:build: CLI Building entry: src/index.ts
@elizaos/project-tee-starter:build: CLI Using tsconfig: tsconfig.build.json
@elizaos/project-tee-starter:build: CLI tsup v8.5.0
@elizaos/project-tee-starter:build: CLI Using tsup config: /home/ubuntu/eliza/packages/project-tee-starter/tsup.config.ts
@elizaos/project-tee-starter:build: CLI Target: esnext
@elizaos/project-tee-starter:build: CLI Cleaning output folder
@elizaos/project-tee-starter:build: ESM Build start
@elizaos/project-tee-starter:build: ESM dist/index.js     13.73 KB
@elizaos/project-tee-starter:build: ESM dist/index.js.map 22.74 KB
@elizaos/project-tee-starter:build: ESM ⚡️ Build success in 26ms
@elizaos/app:build: vite v6.3.5 building for production...
✓ 28 modules transformed.
dist/index.html                  0.69 kB │ gzip:  0.34 kB
@elizaos/app:build: dist/assets/index-DOrZo_HZ.js  189.35 kB │ gzip: 59.77 kB
@elizaos/app:build: ✓ built in 1.77s
@elizaos/project-starter:build: vite v6.3.5 building for production...
@elizaos/plugin-starter:build: vite v6.3.5 building for production...
✓ 75 modules transformed.
../../dist/frontend/index.html                  0.60 kB │ gzip:  0.38 kB
@elizaos/project-starter:build: ../../dist/frontend/assets/main-BGv8Llvv.css   20.97 kB │ gzip:  5.88 kB
@elizaos/project-starter:build: ../../dist/frontend/assets/main-ClsKfpmy.js   215.01 kB │ gzip: 67.29 kB
@elizaos/project-starter:build: ✓ built in 1.67s
✓ 75 modules transformed.
dist/.vite/manifest.json          0.19 kB │ gzip:  0.14 kB
@elizaos/plugin-starter:build: dist/index.html                   0.48 kB │ gzip:  0.31 kB
@elizaos/plugin-starter:build: dist/assets/index-T3rb0ytc.css   11.12 kB │ gzip:  2.93 kB
@elizaos/plugin-starter:build: dist/assets/index-CdoewY3J.js   226.80 kB │ gzip: 71.08 kB
@elizaos/plugin-starter:build: ✓ built in 1.77s
@elizaos/project-starter:build: CLI Building entry: src/index.ts
@elizaos/project-starter:build: CLI Using tsconfig: tsconfig.build.json
@elizaos/project-starter:build: CLI tsup v8.5.0
@elizaos/project-starter:build: CLI Using tsup config: /home/ubuntu/eliza/packages/project-starter/tsup.config.ts
@elizaos/project-starter:build: CLI Target: esnext
@elizaos/project-starter:build: CLI Cleaning output folder
@elizaos/project-starter:build: ESM Build start
@elizaos/project-starter:build: ESM dist/index.js     26.63 KB
@elizaos/project-starter:build: ESM dist/index.js.map 50.74 KB
@elizaos/project-starter:build: ESM ⚡️ Build success in 39ms
@elizaos/plugin-starter:build: CLI Building entry: src/index.ts
@elizaos/plugin-starter:build: CLI Using tsconfig: tsconfig.build.json
@elizaos/plugin-starter:build: CLI tsup v8.5.0
@elizaos/plugin-starter:build: CLI Using tsup config: /home/ubuntu/eliza/packages/plugin-starter/tsup.config.ts
@elizaos/plugin-starter:build: CLI Target: esnext
@elizaos/plugin-starter:build: CLI Cleaning output folder
@elizaos/plugin-starter:build: ESM Build start
@elizaos/plugin-starter:build: ESM dist/index.js     11.45 KB
@elizaos/plugin-starter:build: ESM dist/index.js.map 24.32 KB
@elizaos/plugin-starter:build: ESM ⚡️ Build success in 17ms
@elizaos/plugin-starter:build: DTS Build start
@elizaos/plugin-starter:build: DTS ⚡️ Build success in 2953ms
@elizaos/plugin-starter:build: DTS dist/index.d.ts 516.00 B

 Tasks:    14 successful, 14 total
Cached:    1 cached, 14 total
  Time:    1m14.605s
```
</details>

pnpm run builds:
```ts
pnpm run build

> @elizaos/plugin-polkadot@1.0.12 build /home/ubuntu/eliza/packages/plugin-polkadot
> tsup

CLI Building entry: src/index.ts
CLI Using tsconfig: tsconfig.json
CLI tsup v8.3.5
CLI Using tsup config: /home/ubuntu/eliza/packages/plugin-polkadot/tsup.config.ts
CLI Target: esnext
CLI Cleaning output folder
ESM Build start
ESM dist/index.js     146.92 KB
ESM dist/index.js.map 292.16 KB
ESM ⚡️ Build success in 63ms
```
