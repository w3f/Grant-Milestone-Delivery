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
## Testing
I'm getting errors in the tests even though I did fill the secrets in polkadot.character.json

<details>
  <summary>Output</summary>

```ts
pnpm run test

> @elizaos/plugin-polkadot@1.0.12 test /home/ubuntu/eliza/packages/plugin-polkadot
> vitest run


 RUN  v3.1.4 /home/ubuntu/eliza/packages/plugin-polkadot

[2025-07-25 21:23:54] ERROR: POLKADOT_PRIVATE_KEY is missing
 ✓ src/tests/validateSignature.test.ts (9 tests) 541ms
[2025-07-25 21:23:54] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:54] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:54] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:54] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:54] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:23:54] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:54] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:54] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:54] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:23:54] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:54] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:54] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:54] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:55] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:23:55] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:55] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:55] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:55] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:23:55] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:55] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:55] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:55] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:55] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:23:55] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:55] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:55] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:55] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:23:55] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:55] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:55] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:55] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:23:55] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:55] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:55] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:23:55] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:55] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:55] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
stderr | src/tests/crossChainTransfer.test.ts
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	esm 13.5.1	node_modules/.pnpm/@polkadot+util@13.5.1/node_modules/@polkadot/util/
	esm 13.5.3	node_modules/.pnpm/@polkadot+util@13.5.3/node_modules/@polkadot/util/
@polkadot/rpc-augment has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	esm 16.4.2	node_modules/.pnpm/@polkadot+rpc-augment@16.4.2/node_modules/@polkadot/rpc-augment/
	esm 16.2.1	node_modules/.pnpm/@polkadot+rpc-augment@16.2.1/node_modules/@polkadot/rpc-augment/
@polkadot/types-codec has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	esm 16.2.1	node_modules/.pnpm/@polkadot+types-codec@16.2.1/node_modules/@polkadot/types-codec/
	esm 16.4.2	node_modules/.pnpm/@polkadot+types-codec@16.4.2/node_modules/@polkadot/types-codec/

[2025-07-25 21:23:56] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
stdout | src/tests/walletProvider.test.ts > WalletProvider > Initialization > should create a wallet from mnemonic
Wallet address: 5HGvHvM9yEiNXTUprs59katuR6deZiWbr3c8XjNEYvaVJjJ8

stderr | src/tests/transferFunds.test.ts > TransferFundsAction > API Service Integration > should work with real API service
2025-07-25 21:23:56        API/INIT: RPC methods not decorated: archive_v1_body, archive_v1_call, archive_v1_finalizedHeight, archive_v1_genesisHash, archive_v1_hashByHeight, archive_v1_header, archive_v1_stopStorage, archive_v1_storage, archive_v1_storageDiff, archive_v1_storageDiff_stopStorageDiff, chainHead_v1_body, chainHead_v1_call, chainHead_v1_continue, chainHead_v1_follow, chainHead_v1_header, chainHead_v1_stopOperation, chainHead_v1_storage, chainHead_v1_unfollow, chainHead_v1_unpin, chainSpec_v1_chainName, chainSpec_v1_genesisHash, chainSpec_v1_properties, transactionWatch_v1_submitAndWatch, transactionWatch_v1_unwatch, transaction_v1_broadcast, transaction_v1_stop

stdout | src/tests/walletProvider.test.ts > WalletProvider > Initialization > should throw error when keypair is not loaded
Wallet address: 5FQQhTaDqX1VYTFToyBa8ZDVSGShGTAZ2VBiGCfWAChoNK1n

stderr | src/tests/transferFunds.test.ts > TransferFundsAction > API Service Integration > should handle API connection establishment
2025-07-25 21:23:57        RPC-CORE: subscribeRuntimeVersion(): RuntimeVersion:: disconnected from wss://rpc.polkadot.io: 1000:: Normal Closure

stderr | src/tests/transferFunds.test.ts > TransferFundsAction > API Service Integration > should handle API connection establishment
2025-07-25 21:23:57        RPC-CORE: subscribeRuntimeVersion(): RuntimeVersion:: disconnected from wss://rpc.polkadot.io: 1000:: Normal Closure

stdout | src/tests/walletProvider.test.ts > WalletProvider > Wallet Generation, Backup, and Import > should generate a new wallet, encrypt mnemonic, and save to file
Wallet address: 5CZxbLv2jXCEu2dgoL6hkWjsoKRqUQN2uardPLhkTuzf1XYm

stdout | src/tests/walletProvider.test.ts > WalletProvider > Wallet Generation, Backup, and Import > should import a wallet from an encrypted JSON string
Wallet address: 5Eun7tQfr293zRwXz7epkKVt3fLQBREEhN8bMjAwmaNzcZbP

stdout | src/tests/walletProvider.test.ts > WalletProvider > Wallet Generation, Backup, and Import > should import a wallet from an encrypted file
Wallet address: 5DWkio7HmBHCL5oCk3KDFHtAWsYupjfn3gPSiEzRyVY9VFc1

stdout | src/tests/walletProvider.test.ts > WalletProvider > Wallet Generation, Backup, and Import > should fail to import with an incorrect password (from JSON string)
Wallet address: 5HeHaGS1TuTDEDQsYwHtbq6eFbbWi7oRkEPZbXsm7SeDE2b3

stdout | src/tests/walletProvider.test.ts > WalletProvider > Key Management > should allow removing a keypair from the keyring
Wallet address: 5CDSYEDtq6frm2bwWP4CDCmAUK6DKa4vauYFiGyrjr6vnFJk

stdout | src/tests/walletProvider.test.ts > WalletProvider > Cache Management > should store wallet in cache
Wallet address: 5HM99RS6cbNbXnSQeifhzCzFGst6mSBYSk4kXrtLxAcM987N

stderr | src/tests/transferFunds.test.ts > TransferFundsAction > API Service Integration > should handle API connection establishment
2025-07-25 21:23:57        API/INIT: RPC methods not decorated: archive_v1_body, archive_v1_call, archive_v1_finalizedHeight, archive_v1_genesisHash, archive_v1_hashByHeight, archive_v1_header, archive_v1_stopStorage, archive_v1_storage, archive_v1_storageDiff, archive_v1_storageDiff_stopStorageDiff, chainHead_v1_body, chainHead_v1_call, chainHead_v1_continue, chainHead_v1_follow, chainHead_v1_header, chainHead_v1_stopOperation, chainHead_v1_storage, chainHead_v1_unfollow, chainHead_v1_unpin, chainSpec_v1_chainName, chainSpec_v1_genesisHash, chainSpec_v1_properties, transactionWatch_v1_submitAndWatch, transactionWatch_v1_unwatch, transaction_v1_broadcast, transaction_v1_stop

stdout | src/tests/walletProvider.test.ts > WalletProvider > Cache Management > should clear all wallets from cache
Wallet address: 5DekKLED7AyDiG1vHiPgQDSMmVkAAcssYoyvb8V3eDy2PPge

stdout | src/tests/walletProvider.test.ts > WalletProvider > Wallet Loading > should load wallet by address from cache
Wallet address: 5FjE9CigFcDN9hMi81pzSRrYkXcACZxJ7jNaf57AJGEP1xj9

stderr | src/tests/transferFunds.test.ts > TransferFundsAction > API Service Integration > should retrieve system properties
2025-07-25 21:23:57        RPC-CORE: subscribeRuntimeVersion(): RuntimeVersion:: disconnected from wss://rpc.polkadot.io: 1000:: Normal Closure

stderr | src/tests/transferFunds.test.ts > TransferFundsAction > API Service Integration > should retrieve system properties
2025-07-25 21:23:57        RPC-CORE: subscribeRuntimeVersion(): RuntimeVersion:: disconnected from wss://rpc.polkadot.io: 1000:: Normal Closure

stdout | src/tests/walletProvider.test.ts > WalletProvider > Wallet Loading > should load wallet by number from cache
Wallet address: 5GtHu5UrVnVLFBcfciHvL1MUav2PFzBZ9nVnWiMT6xeoptSs

stdout | src/tests/walletProvider.test.ts > WalletProvider > Wallet Data > should get wallet data by number
Wallet address: 5GcEr2EU5Bb5GREnK1cMpxbejRhqMKRDs9AfkzHE92MzRXQg

stdout | src/tests/walletProvider.test.ts > WalletProvider > Wallet Data > should get wallet by address
Wallet address: 5FShKY86e2PHxZzfMzYfR7Szg3n5yitPgcYaWyFsDkmLua8c

 ✓ src/tests/walletProvider.test.ts (13 tests) 698ms
[2025-07-25 21:23:56] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:56] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:56] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:57] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:57] ERROR: Error initializing from mnemonic:
    error: {
      "message": "Invalid bip39 mnemonic specified",
      "stack":
          Error: Invalid bip39 mnemonic specified
              at mnemonicToMiniSecret (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+util-crypto@13.5.1_@polkadot+util@13.5.1/node_modules/@polkadot/util-crypto/mnemonic/toMiniSecret.js:8:15)
              at Keyring.createFromUri (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+keyring@13.5.1_@polkadot+util-crypto@13.5.1_@polkadot+util@13.5.1__@polkadot+util@13.5.1/node_modules/@polkadot/keyring/keyring.js:182:23)
              at Keyring.addFromUri (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+keyring@13.5.1_@polkadot+util-crypto@13.5.1_@polkadot+util@13.5.1__@polkadot+util@13.5.1/node_modules/@polkadot/keyring/keyring.js:126:34)
              at WalletProvider._initKeyringFromDetails (/home/ubuntu/eliza/packages/plugin-polkadot/src/providers/wallet.ts:450:22)
              at WalletProvider._initializeFromMnemonic (/home/ubuntu/eliza/packages/plugin-polkadot/src/providers/wallet.ts:463:18)
              at Object.fromMnemonic (/home/ubuntu/eliza/packages/plugin-polkadot/src/providers/wallet.ts:135:26)
              at new WalletProvider (/home/ubuntu/eliza/packages/plugin-polkadot/src/providers/wallet.ts:141:36)
              at /home/ubuntu/eliza/packages/plugin-polkadot/src/tests/walletProvider.test.ts:123:26
              at Proxy.assertThrows (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/chai@5.2.1/node_modules/chai/chai.js:2787:5)
              at Proxy.methodWrapper (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/chai@5.2.1/node_modules/chai/chai.js:1706:25)
              at Proxy.<anonymous> (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+expect@3.1.4/node_modules/@vitest/expect/dist/index.js:1000:12)
              at Proxy.overwritingMethodWrapper (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/chai@5.2.1/node_modules/chai/chai.js:1755:33)
              at Proxy.<anonymous> (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+expect@3.1.4/node_modules/@vitest/expect/dist/index.js:1325:16)
              at Proxy.<anonymous> (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+expect@3.1.4/node_modules/@vitest/expect/dist/index.js:944:14)
              at Proxy.methodWrapper (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/chai@5.2.1/node_modules/chai/chai.js:1706:25)
              at /home/ubuntu/eliza/packages/plugin-polkadot/src/tests/walletProvider.test.ts:123:54
              at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:103:11
              at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:596:26
              at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:879:20
              at new Promise (<anonymous>)
              at runWithTimeout (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:852:10)
              at runTest (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:1360:12)
              at processTicksAndRejections (node:internal/process/task_queues:105:5)
              at runSuite (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:1507:8)
              at runSuite (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:1507:8)
              at runSuite (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:1507:8)
              at runFiles (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:1561:3)
              at startTests (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:1571:2)
              at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/vitest@3.1.4_@types+node@24.1.0_yaml@2.8.0/node_modules/vitest/dist/chunks/runBaseTests.BV8m0B-u.js:122:5
              at withEnv (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/vitest@3.1.4_@types+node@24.1.0_yaml@2.8.0/node_modules/vitest/dist/chunks/runBaseTests.BV8m0B-u.js:88:3)
              at run (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/vitest@3.1.4_@types+node@24.1.0_yaml@2.8.0/node_modules/vitest/dist/chunks/runBaseTests.BV8m0B-u.js:113:2)
              at runBaseTests (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/vitest@3.1.4_@types+node@24.1.0_yaml@2.8.0/node_modules/vitest/dist/chunks/base.DslwPSCy.js:35:2)
              at ForksBaseWorker.executeTests (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/vitest@3.1.4_@types+node@24.1.0_yaml@2.8.0/node_modules/vitest/dist/workers/forks.js:27:4)
              at execute (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/vitest@3.1.4_@types+node@24.1.0_yaml@2.8.0/node_modules/vitest/dist/worker.js:113:3)
              at onMessage (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)
      "name": "Error"
    }
[2025-07-25 21:23:57] ERROR: WalletProvider constructor failed: Failed to initialize wallet from mnemonic: Invalid bip39 mnemonic specified
[2025-07-25 21:23:57] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:57] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:57] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:57] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:57] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:57] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:57] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:57] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:57] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:57] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:57] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:57] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:57] ERROR: Decryption error: Decryption failed. Invalid password or corrupted data.
[2025-07-25 21:23:57] ERROR: Error initializing from encrypted JSON:
    error: {
      "message": "Failed to decrypt data: Decryption failed. Invalid password or corrupted data.",
      "stack":
          Error: Failed to decrypt data: Decryption failed. Invalid password or corrupted data.
              at decrypt (/home/ubuntu/eliza/packages/plugin-polkadot/src/utils/encryption.ts:82:15)
              at WalletProvider._initializeFromEncryptedJson (/home/ubuntu/eliza/packages/plugin-polkadot/src/providers/wallet.ts:492:35)
              at Object.fromEncryptedJson (/home/ubuntu/eliza/packages/plugin-polkadot/src/providers/wallet.ts:137:26)
              at new WalletProvider (/home/ubuntu/eliza/packages/plugin-polkadot/src/providers/wallet.ts:141:36)
              at WalletProvider.importWallet (/home/ubuntu/eliza/packages/plugin-polkadot/src/providers/wallet.ts:826:32)
              at /home/ubuntu/eliza/packages/plugin-polkadot/src/tests/walletProvider.test.ts:183:32
              at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:103:11
              at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:596:26
              at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:879:20
              at new Promise (<anonymous>)
              at runWithTimeout (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:852:10)
              at runTest (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:1360:12)
              at processTicksAndRejections (node:internal/process/task_queues:105:5)
              at runSuite (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:1507:8)
              at runSuite (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:1507:8)
              at runSuite (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:1507:8)
              at runFiles (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:1561:3)
              at startTests (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:1571:2)
              at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/vitest@3.1.4_@types+node@24.1.0_yaml@2.8.0/node_modules/vitest/dist/chunks/runBaseTests.BV8m0B-u.js:122:5
              at withEnv (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/vitest@3.1.4_@types+node@24.1.0_yaml@2.8.0/node_modules/vitest/dist/chunks/runBaseTests.BV8m0B-u.js:88:3)
              at run (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/vitest@3.1.4_@types+node@24.1.0_yaml@2.8.0/node_modules/vitest/dist/chunks/runBaseTests.BV8m0B-u.js:113:2)
              at runBaseTests (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/vitest@3.1.4_@types+node@24.1.0_yaml@2.8.0/node_modules/vitest/dist/chunks/base.DslwPSCy.js:35:2)
              at ForksBaseWorker.executeTests (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/vitest@3.1.4_@types+node@24.1.0_yaml@2.8.0/node_modules/vitest/dist/workers/forks.js:27:4)
              at execute (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/vitest@3.1.4_@types+node@24.1.0_yaml@2.8.0/node_modules/vitest/dist/worker.js:113:3)
              at onMessage (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)
      "name": "Error"
    }
[2025-07-25 21:23:57] ERROR: WalletProvider constructor failed: Failed to initialize wallet from encrypted data: Failed to decrypt data: Decryption failed. Invalid password or corrupted data.
[2025-07-25 21:23:57] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:57] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:57] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:57] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:57] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:57] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:57] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:57] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:57] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:57] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:57] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:57] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:57] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:57] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:57] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:57] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
stderr | src/tests/transferFunds.test.ts > TransferFundsAction > API Service Integration > should retrieve system properties
2025-07-25 21:23:57        API/INIT: RPC methods not decorated: archive_v1_body, archive_v1_call, archive_v1_finalizedHeight, archive_v1_genesisHash, archive_v1_hashByHeight, archive_v1_header, archive_v1_stopStorage, archive_v1_storage, archive_v1_storageDiff, archive_v1_storageDiff_stopStorageDiff, chainHead_v1_body, chainHead_v1_call, chainHead_v1_continue, chainHead_v1_follow, chainHead_v1_header, chainHead_v1_stopOperation, chainHead_v1_storage, chainHead_v1_unfollow, chainHead_v1_unpin, chainSpec_v1_chainName, chainSpec_v1_genesisHash, chainSpec_v1_properties, transactionWatch_v1_submitAndWatch, transactionWatch_v1_unwatch, transaction_v1_broadcast, transaction_v1_stop

stderr | src/tests/transferFunds.test.ts > TransferFundsAction > integration: create two wallets and transfer between them > should create two wallets and simulate a transfer between them (dry run)
2025-07-25 21:23:58        API/INIT: RPC methods not decorated: archive_v1_body, archive_v1_call, archive_v1_finalizedHeight, archive_v1_genesisHash, archive_v1_hashByHeight, archive_v1_header, archive_v1_stopStorage, archive_v1_storage, archive_v1_storageDiff, archive_v1_storageDiff_stopStorageDiff, chainHead_v1_body, chainHead_v1_call, chainHead_v1_continue, chainHead_v1_follow, chainHead_v1_header, chainHead_v1_stopOperation, chainHead_v1_storage, chainHead_v1_unfollow, chainHead_v1_unpin, chainSpec_v1_chainName, chainSpec_v1_genesisHash, chainSpec_v1_properties, transactionWatch_v1_submitAndWatch, transactionWatch_v1_unwatch, transaction_v1_broadcast, transaction_v1_stop

 ✓ src/tests/transferFunds.test.ts (14 tests) 2856ms
   ✓ TransferFundsAction > API Service Integration > should work with real API service  939ms
   ✓ TransferFundsAction > API Service Integration > should handle API connection establishment  432ms
   ✓ TransferFundsAction > API Service Integration > should retrieve system properties  417ms
   ✓ TransferFundsAction > integration: create two wallets and transfer between them > should create two wallets and simulate a transfer between them (dry run)  984ms
[2025-07-25 21:23:58] ERROR: POLKADOT_PRIVATE_KEY is missing
 ✓ src/tests/createWallet.test.ts (8 tests) 412ms
[2025-07-25 21:23:58] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:59] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:23:59] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:59] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:59] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:23:59] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:59] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:59] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:23:59] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:59] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:59] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:59] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:23:59] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:59] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:59] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:59] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:23:59] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:59] ERROR: Encryption error:
    message: "(Error) Invalid password for encryption"
    stack: [
      "Error: Invalid password for encryption",
      "at encrypt (/home/ubuntu/eliza/packages/plugin-polkadot/src/utils/encryption.ts:17:19)",
      "at WalletProvider.generateNew (/home/ubuntu/eliza/packages/plugin-polkadot/src/providers/wallet.ts:676:49)",
      "at CreateWalletAction.createWallet (/home/ubuntu/eliza/packages/plugin-polkadot/src/actions/createWallet.ts:108:81)",
      "at /home/ubuntu/eliza/packages/plugin-polkadot/src/tests/createWallet.test.ts:203:36",
      "at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:103:11",
      "at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:596:26",
      "at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:879:20",
      "at new Promise (<anonymous>)",
      "at runWithTimeout (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:852:10)",
      "at runTest (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:1360:12)",
      "at processTicksAndRejections (node:internal/process/task_queues:105:5)",
      "at runSuite (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:1507:8)",
      "at runSuite (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:1507:8)",
      "at runSuite (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:1507:8)",
      "at runFiles (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:1561:3)",
      "at startTests (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:1571:2)",
      "at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/vitest@3.1.4_@types+node@24.1.0_yaml@2.8.0/node_modules/vitest/dist/chunks/runBaseTests.BV8m0B-u.js:122:5",
      "at withEnv (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/vitest@3.1.4_@types+node@24.1.0_yaml@2.8.0/node_modules/vitest/dist/chunks/runBaseTests.BV8m0B-u.js:88:3)",
      "at run (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/vitest@3.1.4_@types+node@24.1.0_yaml@2.8.0/node_modules/vitest/dist/chunks/runBaseTests.BV8m0B-u.js:113:2)",
      "at runBaseTests (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/vitest@3.1.4_@types+node@24.1.0_yaml@2.8.0/node_modules/vitest/dist/chunks/base.DslwPSCy.js:35:2)",
      "at ForksBaseWorker.executeTests (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/vitest@3.1.4_@types+node@24.1.0_yaml@2.8.0/node_modules/vitest/dist/workers/forks.js:27:4)",
      "at execute (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/vitest@3.1.4_@types+node@24.1.0_yaml@2.8.0/node_modules/vitest/dist/worker.js:113:3)",
      "at onMessage (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"
    ]
[2025-07-25 21:23:59] ERROR: Error in wallet generation:
    error: {
      "message": "Failed to encrypt data: Invalid password for encryption",
      "stack":
          Error: Failed to encrypt data: Invalid password for encryption
              at encrypt (/home/ubuntu/eliza/packages/plugin-polkadot/src/utils/encryption.ts:36:15)
              at WalletProvider.generateNew (/home/ubuntu/eliza/packages/plugin-polkadot/src/providers/wallet.ts:676:49)
              at CreateWalletAction.createWallet (/home/ubuntu/eliza/packages/plugin-polkadot/src/actions/createWallet.ts:108:81)
              at /home/ubuntu/eliza/packages/plugin-polkadot/src/tests/createWallet.test.ts:203:36
              at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:103:11
              at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:596:26
              at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:879:20
              at new Promise (<anonymous>)
              at runWithTimeout (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:852:10)
              at runTest (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:1360:12)
              at processTicksAndRejections (node:internal/process/task_queues:105:5)
              at runSuite (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:1507:8)
              at runSuite (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:1507:8)
              at runSuite (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:1507:8)
              at runFiles (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:1561:3)
              at startTests (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:1571:2)
              at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/vitest@3.1.4_@types+node@24.1.0_yaml@2.8.0/node_modules/vitest/dist/chunks/runBaseTests.BV8m0B-u.js:122:5
              at withEnv (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/vitest@3.1.4_@types+node@24.1.0_yaml@2.8.0/node_modules/vitest/dist/chunks/runBaseTests.BV8m0B-u.js:88:3)
              at run (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/vitest@3.1.4_@types+node@24.1.0_yaml@2.8.0/node_modules/vitest/dist/chunks/runBaseTests.BV8m0B-u.js:113:2)
              at runBaseTests (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/vitest@3.1.4_@types+node@24.1.0_yaml@2.8.0/node_modules/vitest/dist/chunks/base.DslwPSCy.js:35:2)
              at ForksBaseWorker.executeTests (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/vitest@3.1.4_@types+node@24.1.0_yaml@2.8.0/node_modules/vitest/dist/workers/forks.js:27:4)
              at execute (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/vitest@3.1.4_@types+node@24.1.0_yaml@2.8.0/node_modules/vitest/dist/worker.js:113:3)
              at onMessage (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)
      "name": "Error"
    }
[2025-07-25 21:23:59] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:23:59] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:23:59] ERROR: Encryption error:
    message: "(Error) Invalid password for encryption"
    stack: [
      "Error: Invalid password for encryption",
      "at encrypt (/home/ubuntu/eliza/packages/plugin-polkadot/src/utils/encryption.ts:17:19)",
      "at WalletProvider.generateNew (/home/ubuntu/eliza/packages/plugin-polkadot/src/providers/wallet.ts:676:49)",
      "at CreateWalletAction.createWallet (/home/ubuntu/eliza/packages/plugin-polkadot/src/actions/createWallet.ts:108:81)",
      "at /home/ubuntu/eliza/packages/plugin-polkadot/src/tests/createWallet.test.ts:211:36",
      "at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:103:11",
      "at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:596:26",
      "at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:879:20",
      "at new Promise (<anonymous>)",
      "at runWithTimeout (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:852:10)",
      "at runTest (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:1360:12)",
      "at processTicksAndRejections (node:internal/process/task_queues:105:5)",
      "at runSuite (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:1507:8)",
      "at runSuite (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:1507:8)",
      "at runSuite (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:1507:8)",
      "at runFiles (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:1561:3)",
      "at startTests (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:1571:2)",
      "at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/vitest@3.1.4_@types+node@24.1.0_yaml@2.8.0/node_modules/vitest/dist/chunks/runBaseTests.BV8m0B-u.js:122:5",
      "at withEnv (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/vitest@3.1.4_@types+node@24.1.0_yaml@2.8.0/node_modules/vitest/dist/chunks/runBaseTests.BV8m0B-u.js:88:3)",
      "at run (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/vitest@3.1.4_@types+node@24.1.0_yaml@2.8.0/node_modules/vitest/dist/chunks/runBaseTests.BV8m0B-u.js:113:2)",
      "at runBaseTests (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/vitest@3.1.4_@types+node@24.1.0_yaml@2.8.0/node_modules/vitest/dist/chunks/base.DslwPSCy.js:35:2)",
      "at ForksBaseWorker.executeTests (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/vitest@3.1.4_@types+node@24.1.0_yaml@2.8.0/node_modules/vitest/dist/workers/forks.js:27:4)",
      "at execute (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/vitest@3.1.4_@types+node@24.1.0_yaml@2.8.0/node_modules/vitest/dist/worker.js:113:3)",
      "at onMessage (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"
    ]
[2025-07-25 21:23:59] ERROR: Error in wallet generation:
    error: {
      "message": "Failed to encrypt data: Invalid password for encryption",
      "stack":
          Error: Failed to encrypt data: Invalid password for encryption
              at encrypt (/home/ubuntu/eliza/packages/plugin-polkadot/src/utils/encryption.ts:36:15)
              at WalletProvider.generateNew (/home/ubuntu/eliza/packages/plugin-polkadot/src/providers/wallet.ts:676:49)
              at CreateWalletAction.createWallet (/home/ubuntu/eliza/packages/plugin-polkadot/src/actions/createWallet.ts:108:81)
              at /home/ubuntu/eliza/packages/plugin-polkadot/src/tests/createWallet.test.ts:211:36
              at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:103:11
              at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:596:26
              at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:879:20
              at new Promise (<anonymous>)
              at runWithTimeout (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:852:10)
              at runTest (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:1360:12)
              at processTicksAndRejections (node:internal/process/task_queues:105:5)
              at runSuite (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:1507:8)
              at runSuite (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:1507:8)
              at runSuite (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:1507:8)
              at runFiles (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:1561:3)
              at startTests (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:1571:2)
              at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/vitest@3.1.4_@types+node@24.1.0_yaml@2.8.0/node_modules/vitest/dist/chunks/runBaseTests.BV8m0B-u.js:122:5
              at withEnv (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/vitest@3.1.4_@types+node@24.1.0_yaml@2.8.0/node_modules/vitest/dist/chunks/runBaseTests.BV8m0B-u.js:88:3)
              at run (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/vitest@3.1.4_@types+node@24.1.0_yaml@2.8.0/node_modules/vitest/dist/chunks/runBaseTests.BV8m0B-u.js:113:2)
              at runBaseTests (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/vitest@3.1.4_@types+node@24.1.0_yaml@2.8.0/node_modules/vitest/dist/chunks/base.DslwPSCy.js:35:2)
              at ForksBaseWorker.executeTests (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/vitest@3.1.4_@types+node@24.1.0_yaml@2.8.0/node_modules/vitest/dist/workers/forks.js:27:4)
              at execute (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/vitest@3.1.4_@types+node@24.1.0_yaml@2.8.0/node_modules/vitest/dist/worker.js:113:3)
              at onMessage (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)
      "name": "Error"
    }
 ✓ src/tests/crossChainTransfer.test.ts (12 tests) 3699ms
   ✓ CrossChainTransferAction > CrossChainTransferAction Initialization > should initialize with valid source chain  1097ms
   ✓ CrossChainTransferAction > CrossChainTransferAction Initialization > should use chain RPC mapping for known chains  560ms
   ✓ CrossChainTransferAction > Transfer Funds Validation > should validate transfer parameters  751ms
   ✓ CrossChainTransferAction > Transfer Funds Validation > should handle missing optional parameters  802ms
   ✓ CrossChainTransferAction > Transfer Funds Validation > should validate parachain ID format  463ms
[2025-07-25 21:24:00] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:24:00] ERROR: POLKADOT_PRIVATE_KEY is missing
 ✓ src/tests/importWallet.test.ts (5 tests) 358ms
[2025-07-25 21:24:00] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:00] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:00] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:24:00] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:00] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:00] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:00] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:00] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:24:00] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:00] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:00] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:00] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:24:00] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:00] ERROR: Encryption error:
    message: "(Error) Invalid password for encryption"
    stack: [
      "Error: Invalid password for encryption",
      "at encrypt (/home/ubuntu/eliza/packages/plugin-polkadot/src/utils/encryption.ts:17:19)",
      "at WalletProvider.importMnemonicAndStore (/home/ubuntu/eliza/packages/plugin-polkadot/src/providers/wallet.ts:868:33)",
      "at processTicksAndRejections (node:internal/process/task_queues:105:5)",
      "at ImportWalletAction.importWallet (/home/ubuntu/eliza/packages/plugin-polkadot/src/actions/importWallet.ts:134:13)",
      "at /home/ubuntu/eliza/packages/plugin-polkadot/src/tests/importWallet.test.ts:158:13",
      "at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:596:20"
    ]
[2025-07-25 21:24:00] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:24:00] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:00] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:00] ERROR: Error initializing from mnemonic:
    error: {
      "message": "Unable to match provided value to a secret URI",
      "stack":
          Error: Unable to match provided value to a secret URI
              at keyExtractSuri (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+util-crypto@13.5.1_@polkadot+util@13.5.1/node_modules/@polkadot/util-crypto/key/extractSuri.js:12:15)
              at Keyring.createFromUri (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+keyring@13.5.1_@polkadot+util-crypto@13.5.1_@polkadot+util@13.5.1__@polkadot+util@13.5.1/node_modules/@polkadot/keyring/keyring.js:171:56)
              at Keyring.addFromUri (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+keyring@13.5.1_@polkadot+util-crypto@13.5.1_@polkadot+util@13.5.1__@polkadot+util@13.5.1/node_modules/@polkadot/keyring/keyring.js:126:34)
              at WalletProvider._initKeyringFromDetails (/home/ubuntu/eliza/packages/plugin-polkadot/src/providers/wallet.ts:450:22)
              at WalletProvider._initializeFromMnemonic (/home/ubuntu/eliza/packages/plugin-polkadot/src/providers/wallet.ts:463:18)
              at Object.fromMnemonic (/home/ubuntu/eliza/packages/plugin-polkadot/src/providers/wallet.ts:135:26)
              at new WalletProvider (/home/ubuntu/eliza/packages/plugin-polkadot/src/providers/wallet.ts:141:36)
              at WalletProvider.importMnemonicAndStore (/home/ubuntu/eliza/packages/plugin-polkadot/src/providers/wallet.ts:871:35)
              at processTicksAndRejections (node:internal/process/task_queues:105:5)
              at ImportWalletAction.importWallet (/home/ubuntu/eliza/packages/plugin-polkadot/src/actions/importWallet.ts:134:13)
              at /home/ubuntu/eliza/packages/plugin-polkadot/src/tests/importWallet.test.ts:167:13
              at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:596:20
      "name": "Error"
    }
[2025-07-25 21:24:00] ERROR: WalletProvider constructor failed: Failed to initialize wallet from mnemonic: Unable to match provided value to a secret URI
[2025-07-25 21:24:00] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:00] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:00] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:00] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:00] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:24:00] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:00] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:00] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:00] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:24:00] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:00] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:00] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:01] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:01] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:24:01] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:01] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:01] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:01] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:24:01] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:01] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:01] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:01] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:01] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:24:01] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:01] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:01] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:01] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:01] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:24:01] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:01] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:01] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
 ✓ src/tests/signMessage.test.ts (7 tests) 463ms
[2025-07-25 21:24:01] ERROR: POLKADOT_PRIVATE_KEY is missing
 ✓ src/tests/loadWallet.test.ts (9 tests) 505ms
[2025-07-25 21:24:01] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:01] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:01] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:01] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:24:01] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:01] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:01] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:01] ERROR: Decryption error: Decryption failed. Invalid password or corrupted data.
[2025-07-25 21:24:01] ERROR: Error initializing from encrypted JSON:
    error: {
      "message": "Failed to decrypt data: Decryption failed. Invalid password or corrupted data.",
      "stack":
          Error: Failed to decrypt data: Decryption failed. Invalid password or corrupted data.
              at decrypt (/home/ubuntu/eliza/packages/plugin-polkadot/src/utils/encryption.ts:82:15)
              at WalletProvider._initializeFromEncryptedJson (/home/ubuntu/eliza/packages/plugin-polkadot/src/providers/wallet.ts:492:35)
              at Object.fromEncryptedJson (/home/ubuntu/eliza/packages/plugin-polkadot/src/providers/wallet.ts:137:26)
              at new WalletProvider (/home/ubuntu/eliza/packages/plugin-polkadot/src/providers/wallet.ts:141:36)
              at WalletProvider.loadWalletByNumber (/home/ubuntu/eliza/packages/plugin-polkadot/src/providers/wallet.ts:415:32)
              at processTicksAndRejections (node:internal/process/task_queues:105:5)
      "name": "Error"
    }
[2025-07-25 21:24:01] ERROR: WalletProvider constructor failed: Failed to initialize wallet from encrypted data: Failed to decrypt data: Decryption failed. Invalid password or corrupted data.
[2025-07-25 21:24:01] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:24:01] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:01] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:01] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:01] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:24:01] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:01] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:01] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:24:01] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:01] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:01] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:01] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:24:01] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:01] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:02] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:02] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:02] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:24:02] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:02] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:02] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:24:02] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:02] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:02] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:02] ERROR: Decryption error: Invalid encrypted data format (expected kdfSaltHex:nonceHex:encryptedHex)
[2025-07-25 21:24:02] ERROR: Error initializing from encrypted JSON:
    error: {
      "message": "Failed to decrypt data: Invalid encrypted data format (expected kdfSaltHex:nonceHex:encryptedHex)",
      "stack":
          Error: Failed to decrypt data: Invalid encrypted data format (expected kdfSaltHex:nonceHex:encryptedHex)
              at decrypt (/home/ubuntu/eliza/packages/plugin-polkadot/src/utils/encryption.ts:82:15)
              at WalletProvider._initializeFromEncryptedJson (/home/ubuntu/eliza/packages/plugin-polkadot/src/providers/wallet.ts:492:35)
              at Object.fromEncryptedJson (/home/ubuntu/eliza/packages/plugin-polkadot/src/providers/wallet.ts:137:26)
              at new WalletProvider (/home/ubuntu/eliza/packages/plugin-polkadot/src/providers/wallet.ts:141:36)
              at WalletProvider.loadWalletByAddress (/home/ubuntu/eliza/packages/plugin-polkadot/src/providers/wallet.ts:344:32)
              at processTicksAndRejections (node:internal/process/task_queues:105:5)
      "name": "Error"
    }
[2025-07-25 21:24:02] ERROR: WalletProvider constructor failed: Failed to initialize wallet from encrypted data: Failed to decrypt data: Invalid encrypted data format (expected kdfSaltHex:nonceHex:encryptedHex)
[2025-07-25 21:24:02] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:24:02] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:02] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:02] ERROR: POLKADOT_PRIVATE_KEY is missing
 ✓ src/tests/ejectWallet.test.ts (9 tests) 438ms
[2025-07-25 21:24:02] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:02] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:03] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:24:03] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:03] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:03] ERROR: Decryption error: Decryption failed. Invalid password or corrupted data.
[2025-07-25 21:24:03] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:24:03] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:03] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:03] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:24:03] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:03] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:03] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:24:03] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:03] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:03] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:24:03] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:03] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:03] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:24:03] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:03] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:03] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:24:03] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:03] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:03] ERROR: Decryption error: Invalid encrypted data format (expected kdfSaltHex:nonceHex:encryptedHex)
[2025-07-25 21:24:03] ERROR: POLKADOT_PRIVATE_KEY is missing
[2025-07-25 21:24:03] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:03] WARN: COINMARKETCAP_API_KEY is not set. Price fetching will likely fail.
[2025-07-25 21:24:03] ERROR: Decryption error: Invalid password for decryption
stderr | src/tests/getBlockEvents.test.ts > GetBlockEventsAction > API Integration > should retrieve events for a valid block number
2025-07-25 21:24:04        API/INIT: RPC methods not decorated: archive_v1_body, archive_v1_call, archive_v1_finalizedHeight, archive_v1_genesisHash, archive_v1_hashByHeight, archive_v1_header, archive_v1_stopStorage, archive_v1_storage, archive_v1_storageDiff, archive_v1_storageDiff_stopStorageDiff, chainHead_v1_body, chainHead_v1_call, chainHead_v1_continue, chainHead_v1_follow, chainHead_v1_header, chainHead_v1_stopOperation, chainHead_v1_storage, chainHead_v1_unfollow, chainHead_v1_unpin, chainSpec_v1_chainName, chainSpec_v1_genesisHash, chainSpec_v1_properties, transactionWatch_v1_submitAndWatch, transactionWatch_v1_unwatch, transaction_v1_broadcast, transaction_v1_stop

stderr | src/tests/getBlockEvents.test.ts > GetBlockEventsAction > Error Handling > should throw error for invalid block number
2025-07-25 21:24:05        RPC-CORE: getBlockHash(blockNumber?: BlockNumber): BlockHash:: createType(BlockNumber):: Number needs to be an integer <= Number.MAX_SAFE_INTEGER, i.e. 2 ^ 53 - 1

{"level":50,"time":1753478645402,"pid":12629,"hostname":"ip-172-31-19-62","message":"(Error) createType(BlockNumber):: Number needs to be an integer <= Number.MAX_SAFE_INTEGER, i.e. 2 ^ 53 - 1","stack":["Error: createType(BlockNumber):: Number needs to be an integer <= Number.MAX_SAFE_INTEGER, i.e. 2 ^ 53 - 1","at createTypeUnsafe (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+types-create@16.2.1/node_modules/@polkadot/types-create/create/type.js:51:22)","at TypeRegistry.createTypeUnsafe (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+types@16.2.1/node_modules/@polkadot/types/create/registry.js:226:16)","at RpcCore._formatParams (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+rpc-core@16.2.1/node_modules/@polkadot/rpc-core/bundle.js:299:34)","at callWithRegistry (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+rpc-core@16.2.1/node_modules/@polkadot/rpc-core/bundle.js:186:33)","at Observable._subscribe (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+rpc-core@16.2.1/node_modules/@polkadot/rpc-core/bundle.js:194:17)","at Observable._trySubscribe (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:235:19)","at /home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:225:18","at Object.errorContext (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/util/errorContext.ts:29:5)","at Observable.subscribe (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:211:5)","at ConnectableObservable.connect (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/observable/ConnectableObservable.ts:72:21)","at /home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/operators/refCount.ts:116:57","at OperatorSubscriber.<anonymous> (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/util/lift.ts:24:18)","at /home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:217:22","at Object.errorContext (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/util/errorContext.ts:29:5)","at Observable.subscribe (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:211:5)","at /home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/operators/catchError.ts:113:23","at SafeSubscriber.<anonymous> (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/util/lift.ts:24:18)","at /home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:217:22","at Object.errorContext (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/util/errorContext.ts:29:5)","at Observable.subscribe (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:211:5)","at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+api@16.2.1/node_modules/@polkadot/api/promise/decorateMethod.js:41:14","at new Promise (<anonymous>)","at decorateCall (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+api@16.2.1/node_modules/@polkadot/api/promise/decorateMethod.js:35:12)","at Object.getBlockHash (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+api@16.2.1/node_modules/@polkadot/api/promise/decorateMethod.js:69:15)","at GetBlockEventsAction.getBlockEvents (/home/ubuntu/eliza/packages/plugin-polkadot/src/actions/getBlockEvents.ts:214:50)","at processTicksAndRejections (node:internal/process/task_queues:105:5)","at /home/ubuntu/eliza/packages/plugin-polkadot/src/tests/getBlockEvents.test.ts:146:13","at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:596:20"],"msg":"Error fetching events for block 9999999999999999:"}
stderr | src/tests/getBlockEvents.test.ts > GetBlockEventsAction > Error Handling > should handle invalid block hash
2025-07-25 21:24:05        RPC-CORE: getHeader(hash?: BlockHash): Header:: createType(BlockHash):: Expected input with 32 bytes (256 bits), found 13 bytes

stderr | src/tests/getBlockEvents.test.ts > GetBlockEventsAction > Error Handling > should handle invalid block hash
2025-07-25 21:24:05        RPC-CORE: getHeader(hash?: BlockHash): Header:: createType(BlockHash):: Expected input with 32 bytes (256 bits), found 13 bytes

{"level":50,"time":1753478645422,"pid":12629,"hostname":"ip-172-31-19-62","message":"(Error) createType(BlockHash):: Expected input with 32 bytes (256 bits), found 13 bytes","stack":["Error: createType(BlockHash):: Expected input with 32 bytes (256 bits), found 13 bytes","at createTypeUnsafe (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+types-create@16.2.1/node_modules/@polkadot/types-create/create/type.js:51:22)","at TypeRegistry.createTypeUnsafe (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+types@16.2.1/node_modules/@polkadot/types/create/registry.js:226:16)","at RpcCore._formatParams (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+rpc-core@16.2.1/node_modules/@polkadot/rpc-core/bundle.js:299:34)","at callWithRegistry (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+rpc-core@16.2.1/node_modules/@polkadot/rpc-core/bundle.js:186:33)","at Observable._subscribe (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+rpc-core@16.2.1/node_modules/@polkadot/rpc-core/bundle.js:194:17)","at Observable._trySubscribe (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:235:19)","at /home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:225:18","at Object.errorContext (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/util/errorContext.ts:29:5)","at Observable.subscribe (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:211:5)","at ConnectableObservable.connect (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/observable/ConnectableObservable.ts:72:21)","at /home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/operators/refCount.ts:116:57","at SafeSubscriber.<anonymous> (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/util/lift.ts:24:18)","at /home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:217:22","at Object.errorContext (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/util/errorContext.ts:29:5)","at Observable.subscribe (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:211:5)","at /home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/firstValueFrom.ts:73:12","at new Promise (<anonymous>)","at firstValueFrom (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/firstValueFrom.ts:58:10)","at ApiPromise._getBlockRegistryViaHash (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+api@16.2.1/node_modules/@polkadot/api/base/Init.js:148:21)","at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+api@16.2.1/node_modules/@polkadot/api/base/Init.js:175:84","at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+api@16.2.1/node_modules/@polkadot/api/base/Init.js:112:17","at new Promise (<anonymous>)","at ApiPromise._cacheBlockRegistryProgress (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+api@16.2.1/node_modules/@polkadot/api/base/Init.js:111:65)","at ApiPromise.getBlockRegistry (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+api@16.2.1/node_modules/@polkadot/api/base/Init.js:175:24)","at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+api@16.2.1/node_modules/@polkadot/api/base/Init.js:41:59","at RpcCore.memoized [as __internal__getBlockRegistry] (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+util@13.5.1/node_modules/@polkadot/util/memoize.js:18:47)","at callWithRegistry (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+rpc-core@16.2.1/node_modules/@polkadot/rpc-core/bundle.js:184:30)","at Observable._subscribe (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+rpc-core@16.2.1/node_modules/@polkadot/rpc-core/bundle.js:194:17)","at Observable._trySubscribe (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:235:19)","at /home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:225:18","at Object.errorContext (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/util/errorContext.ts:29:5)","at Observable.subscribe (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:211:5)","at ConnectableObservable.connect (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/observable/ConnectableObservable.ts:72:21)","at Observable._subscribe (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+rpc-core@16.2.1/node_modules/@polkadot/rpc-core/util/refCountDelay.js:15:41)","at Observable._trySubscribe (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:235:19)","at /home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:225:18","at Object.errorContext (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/util/errorContext.ts:29:5)","at Observable.subscribe (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:211:5)","at /home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/operators/catchError.ts:113:23","at SafeSubscriber.<anonymous> (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/util/lift.ts:24:18)","at /home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:217:22","at Object.errorContext (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/util/errorContext.ts:29:5)","at Observable.subscribe (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:211:5)","at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+api@16.2.1/node_modules/@polkadot/api/promise/decorateMethod.js:41:14","at new Promise (<anonymous>)","at decorateCall (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+api@16.2.1/node_modules/@polkadot/api/promise/decorateMethod.js:35:12)","at Object.getHeader (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+api@16.2.1/node_modules/@polkadot/api/promise/decorateMethod.js:69:15)","at GetBlockEventsAction.getBlockEvents (/home/ubuntu/eliza/packages/plugin-polkadot/src/actions/getBlockEvents.ts:209:52)","at processTicksAndRejections (node:internal/process/task_queues:105:5)","at /home/ubuntu/eliza/packages/plugin-polkadot/src/tests/getBlockEvents.test.ts:156:13"],"msg":"Error fetching events for block 0xinvalidhash:"}
stderr | src/tests/getBlockEvents.test.ts > GetBlockEventsAction > Error Handling > should handle connection failures gracefully
2025-07-25 21:24:05        RPC-CORE: getBlockHash(blockNumber?: BlockNumber): BlockHash:: disconnected from wss://rpc.polkadot.io: 1000:: Normal Closure

{"level":50,"time":1753478645469,"pid":12629,"hostname":"ip-172-31-19-62","message":"(Error) disconnected from wss://rpc.polkadot.io: 1000:: Normal Closure","stack":["Error: disconnected from wss://rpc.polkadot.io: 1000:: Normal Closure","at WebSocket.__internal__onSocketClose (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+rpc-provider@16.2.1/node_modules/@polkadot/rpc-provider/ws/index.js:371:23)","at WebSocket.sentryWrapped (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@sentry+browser@9.42.0/node_modules/@sentry/browser/src/helpers.ts:117:17)","at WebSocket.[nodejs.internal.kHybridDispatch] (node:internal/event_target:827:20)","at WebSocket.dispatchEvent (node:internal/event_target:762:26)","at fireEvent (node:internal/deps/undici/undici:12277:14)","at WebSocket.#onSocketClose (node:internal/deps/undici/undici:13529:9)","at TLSSocket.onSocketClose (node:internal/deps/undici/undici:13251:72)","at TLSSocket.emit (node:events:519:35)","at node:net:346:12","at TCP.done (node:_tls_wrap:649:7)"],"msg":"Error fetching events for block 22000000:"}
 ✓ src/tests/getBlockEvents.test.ts (8 tests) 1780ms
   ✓ GetBlockEventsAction > API Integration > should retrieve events for a valid block number  1491ms
stderr | src/tests/getReferenda.test.ts > GetReferendaAction > API Integration > should retrieve referenda with default behavior
2025-07-25 21:24:05        API/INIT: RPC methods not decorated: archive_v1_body, archive_v1_call, archive_v1_finalizedHeight, archive_v1_genesisHash, archive_v1_hashByHeight, archive_v1_header, archive_v1_stopStorage, archive_v1_storage, archive_v1_storageDiff, archive_v1_storageDiff_stopStorageDiff, chainHead_v1_body, chainHead_v1_call, chainHead_v1_continue, chainHead_v1_follow, chainHead_v1_header, chainHead_v1_stopOperation, chainHead_v1_storage, chainHead_v1_unfollow, chainHead_v1_unpin, chainSpec_v1_chainName, chainSpec_v1_genesisHash, chainSpec_v1_properties, transactionWatch_v1_submitAndWatch, transactionWatch_v1_unwatch, transaction_v1_broadcast, transaction_v1_stop

stderr | src/tests/getReferendumDetails.test.ts > GetReferendumDetailsAction > API Integration > should retrieve referendum details for an existing referendum
2025-07-25 21:24:06        API/INIT: RPC methods not decorated: archive_v1_body, archive_v1_call, archive_v1_finalizedHeight, archive_v1_genesisHash, archive_v1_hashByHeight, archive_v1_header, archive_v1_stopStorage, archive_v1_storage, archive_v1_storageDiff, archive_v1_storageDiff_stopStorageDiff, chainHead_v1_body, chainHead_v1_call, chainHead_v1_continue, chainHead_v1_follow, chainHead_v1_header, chainHead_v1_stopOperation, chainHead_v1_storage, chainHead_v1_unfollow, chainHead_v1_unpin, chainSpec_v1_chainName, chainSpec_v1_genesisHash, chainSpec_v1_properties, transactionWatch_v1_submitAndWatch, transactionWatch_v1_unwatch, transaction_v1_broadcast, transaction_v1_stop

{"level":30,"time":1753478646545,"pid":12774,"hostname":"ip-172-31-19-62","approved":[16815056,null,null],"msg":""}
{"level":30,"time":1753478646566,"pid":12774,"hostname":"ip-172-31-19-62","approved":[16815056,null,null],"msg":""}
{"level":30,"time":1753478646595,"pid":12774,"hostname":"ip-172-31-19-62","approved":[16815056,null,null],"msg":""}
{"level":50,"time":1753478646621,"pid":12774,"hostname":"ip-172-31-19-62","message":"(Error) Referendum 9999999999 does not exist. Latest referendum is 1684.","stack":["Error: Referendum 9999999999 does not exist. Latest referendum is 1684.","at GetReferendumDetailsAction.getReferendumDetails (/home/ubuntu/eliza/packages/plugin-polkadot/src/actions/getReferendumDetails.ts:244:23)","at processTicksAndRejections (node:internal/process/task_queues:105:5)","at /home/ubuntu/eliza/packages/plugin-polkadot/src/tests/getReferendumDetails.test.ts:131:13","at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:596:20"],"msg":"Error fetching referendum 9999999999:"}
stderr | src/tests/getReferendumDetails.test.ts > GetReferendumDetailsAction > Error Handling > should handle negative referendum ID
2025-07-25 21:24:06             VEC: Unable to decode on index 0 createType(Lookup4):: u32: Negative number passed to unsigned type

stderr | src/tests/getReferendumDetails.test.ts > GetReferendumDetailsAction > Error Handling > should handle negative referendum ID
2025-07-25 21:24:06        RPC-CORE: queryStorageAt(keys: Vec<StorageKey>, at?: BlockHash): Vec<StorageChangeSet>:: createType(Vec<StorageKey>):: createType(Lookup4):: u32: Negative number passed to unsigned type

{"level":50,"time":1753478646640,"pid":12774,"hostname":"ip-172-31-19-62","message":"(Error) createType(Vec<StorageKey>):: createType(Lookup4):: u32: Negative number passed to unsigned type","stack":["Error: createType(Vec<StorageKey>):: createType(Lookup4):: u32: Negative number passed to unsigned type","at createTypeUnsafe (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+types-create@16.2.1/node_modules/@polkadot/types-create/create/type.js:51:22)","at TypeRegistry.createTypeUnsafe (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+types@16.2.1/node_modules/@polkadot/types/create/registry.js:226:16)","at RpcCore._formatParams (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+rpc-core@16.2.1/node_modules/@polkadot/rpc-core/bundle.js:299:34)","at callWithRegistry (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+rpc-core@16.2.1/node_modules/@polkadot/rpc-core/bundle.js:186:33)","at Observable._subscribe (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+rpc-core@16.2.1/node_modules/@polkadot/rpc-core/bundle.js:194:17)","at Observable._trySubscribe (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:235:19)","at /home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:225:18","at Object.errorContext (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/util/errorContext.ts:29:5)","at Observable.subscribe (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:211:5)","at ConnectableObservable.connect (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/observable/ConnectableObservable.ts:72:21)","at /home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/operators/refCount.ts:116:57","at OperatorSubscriber.<anonymous> (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/util/lift.ts:24:18)","at /home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:217:22","at Object.errorContext (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/util/errorContext.ts:29:5)","at Observable.subscribe (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:211:5)","at /home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/operators/switchMap.ts:108:49","at OperatorSubscriber._this._next (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/operators/OperatorSubscriber.ts:70:13)","at OperatorSubscriber.Subscriber.next (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Subscriber.ts:71:12)","at /home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/observable/innerFrom.ts:90:24"],"msg":"Error fetching referendum -1:"}
stderr | src/tests/getReferendumDetails.test.ts > GetReferendumDetailsAction > Error Handling > should handle connection failures gracefully
2025-07-25 21:24:06        RPC-CORE: queryStorageAt(keys: Vec<StorageKey>, at?: BlockHash): Vec<StorageChangeSet>:: disconnected from wss://rpc.polkadot.io: 1000:: Normal Closure

{"level":50,"time":1753478646659,"pid":12774,"hostname":"ip-172-31-19-62","message":"(Error) disconnected from wss://rpc.polkadot.io: 1000:: Normal Closure","stack":["Error: disconnected from wss://rpc.polkadot.io: 1000:: Normal Closure","at WebSocket.__internal__onSocketClose (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+rpc-provider@16.2.1/node_modules/@polkadot/rpc-provider/ws/index.js:371:23)","at WebSocket.sentryWrapped (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@sentry+browser@9.42.0/node_modules/@sentry/browser/src/helpers.ts:117:17)","at WebSocket.[nodejs.internal.kHybridDispatch] (node:internal/event_target:827:20)","at WebSocket.dispatchEvent (node:internal/event_target:762:26)","at fireEvent (node:internal/deps/undici/undici:12277:14)","at WebSocket.#onSocketClose (node:internal/deps/undici/undici:13529:9)","at TLSSocket.onSocketClose (node:internal/deps/undici/undici:13251:72)","at TLSSocket.emit (node:events:519:35)","at node:net:346:12","at TCP.done (node:_tls_wrap:649:7)"],"msg":"Error fetching referendum 100:"}
 ✓ src/tests/getReferendumDetails.test.ts (6 tests) 693ms
   ✓ GetReferendumDetailsAction > API Integration > should retrieve referendum details for an existing referendum  580ms
stderr | src/tests/getReferenda.test.ts > GetReferendaAction > Error Handling > should handle connection failures gracefully
2025-07-25 21:24:07        RPC-CORE: queryStorageAt(keys: Vec<StorageKey>, at?: BlockHash): Vec<StorageChangeSet>:: disconnected from wss://rpc.polkadot.io: 1000:: Normal Closure

{"level":50,"time":1753478647452,"pid":12720,"hostname":"ip-172-31-19-62","message":"(Error) disconnected from wss://rpc.polkadot.io: 1000:: Normal Closure","stack":["Error: disconnected from wss://rpc.polkadot.io: 1000:: Normal Closure","at WebSocket.__internal__onSocketClose (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+rpc-provider@16.2.1/node_modules/@polkadot/rpc-provider/ws/index.js:371:23)","at WebSocket.sentryWrapped (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@sentry+browser@9.42.0/node_modules/@sentry/browser/src/helpers.ts:117:17)","at WebSocket.[nodejs.internal.kHybridDispatch] (node:internal/event_target:827:20)","at WebSocket.dispatchEvent (node:internal/event_target:762:26)","at fireEvent (node:internal/deps/undici/undici:12277:14)","at WebSocket.#onSocketClose (node:internal/deps/undici/undici:13529:9)","at TLSSocket.onSocketClose (node:internal/deps/undici/undici:13251:72)","at TLSSocket.emit (node:events:519:35)","at node:net:346:12","at TCP.done (node:_tls_wrap:649:7)"],"msg":"Error fetching referenda:"}
stderr | src/tests/getReferenda.test.ts > GetReferendaAction > Error Handling > should handle invalid limit values
2025-07-25 21:24:07        API/INIT: RPC methods not decorated: archive_v1_body, archive_v1_call, archive_v1_finalizedHeight, archive_v1_genesisHash, archive_v1_hashByHeight, archive_v1_header, archive_v1_stopStorage, archive_v1_storage, archive_v1_storageDiff, archive_v1_storageDiff_stopStorageDiff, chainHead_v1_body, chainHead_v1_call, chainHead_v1_continue, chainHead_v1_follow, chainHead_v1_header, chainHead_v1_stopOperation, chainHead_v1_storage, chainHead_v1_unfollow, chainHead_v1_unpin, chainSpec_v1_chainName, chainSpec_v1_genesisHash, chainSpec_v1_properties, transactionWatch_v1_submitAndWatch, transactionWatch_v1_unwatch, transaction_v1_broadcast, transaction_v1_stop

 ✓ src/tests/getReferenda.test.ts (6 tests) 3275ms
   ✓ GetReferendaAction > API Integration > should retrieve referenda with default behavior  1410ms
   ✓ GetReferendaAction > API Integration > should handle limit greater than max returnable referenda  744ms
   ✓ GetReferendaAction > Error Handling > should handle invalid limit values  677ms
stderr | src/tests/getBalance.test.ts > GetBalanceAction > API Integration > should retrieve balance for a valid Polkadot address
2025-07-25 21:24:08        API/INIT: RPC methods not decorated: archive_v1_body, archive_v1_call, archive_v1_finalizedHeight, archive_v1_genesisHash, archive_v1_hashByHeight, archive_v1_header, archive_v1_stopStorage, archive_v1_storage, archive_v1_storageDiff, archive_v1_storageDiff_stopStorageDiff, chainHead_v1_body, chainHead_v1_call, chainHead_v1_continue, chainHead_v1_follow, chainHead_v1_header, chainHead_v1_stopOperation, chainHead_v1_storage, chainHead_v1_unfollow, chainHead_v1_unpin, chainSpec_v1_chainName, chainSpec_v1_genesisHash, chainSpec_v1_properties, transactionWatch_v1_submitAndWatch, transactionWatch_v1_unwatch, transaction_v1_broadcast, transaction_v1_stop

stderr | src/tests/getBalance.test.ts > GetBalanceAction > Basic Error Handling > should throw error for invalid address format
2025-07-25 21:24:08             VEC: Unable to decode on index 0 createType(Lookup0):: Decoding invalid-address: Invalid base58 character "l" (0x6c) at index 4

stderr | src/tests/getBalance.test.ts > GetBalanceAction > Basic Error Handling > should throw error for invalid address format
2025-07-25 21:24:08        RPC-CORE: queryStorageAt(keys: Vec<StorageKey>, at?: BlockHash): Vec<StorageChangeSet>:: createType(Vec<StorageKey>):: createType(Lookup0):: Decoding invalid-address: Invalid base58 character "l" (0x6c) at index 4

{"level":50,"time":1753478648737,"pid":12813,"hostname":"ip-172-31-19-62","message":"(Error) createType(Vec<StorageKey>):: createType(Lookup0):: Decoding invalid-address: Invalid base58 character \"l\" (0x6c) at index 4","stack":["Error: createType(Vec<StorageKey>):: createType(Lookup0):: Decoding invalid-address: Invalid base58 character \"l\" (0x6c) at index 4","at createTypeUnsafe (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+types-create@16.2.1/node_modules/@polkadot/types-create/create/type.js:51:22)","at TypeRegistry.createTypeUnsafe (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+types@16.2.1/node_modules/@polkadot/types/create/registry.js:226:16)","at RpcCore._formatParams (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+rpc-core@16.2.1/node_modules/@polkadot/rpc-core/bundle.js:299:34)","at callWithRegistry (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+rpc-core@16.2.1/node_modules/@polkadot/rpc-core/bundle.js:186:33)","at Observable._subscribe (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+rpc-core@16.2.1/node_modules/@polkadot/rpc-core/bundle.js:194:17)","at Observable._trySubscribe (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:235:19)","at /home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:225:18","at Object.errorContext (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/util/errorContext.ts:29:5)","at Observable.subscribe (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:211:5)","at ConnectableObservable.connect (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/observable/ConnectableObservable.ts:72:21)","at /home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/operators/refCount.ts:116:57","at OperatorSubscriber.<anonymous> (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/util/lift.ts:24:18)","at /home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:217:22","at Object.errorContext (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/util/errorContext.ts:29:5)","at Observable.subscribe (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:211:5)","at /home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/operators/switchMap.ts:108:49","at OperatorSubscriber._this._next (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/operators/OperatorSubscriber.ts:70:13)","at OperatorSubscriber.Subscriber.next (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Subscriber.ts:71:12)","at /home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/observable/innerFrom.ts:90:24"],"msg":"Error fetching balance for address invalid-address:"}
stderr | src/tests/getBalance.test.ts > GetBalanceAction > Basic Error Handling > should handle connection failures gracefully
2025-07-25 21:24:08        RPC-CORE: queryStorageAt(keys: Vec<StorageKey>, at?: BlockHash): Vec<StorageChangeSet>:: disconnected from wss://rpc.polkadot.io: 1000:: Normal Closure

{"level":50,"time":1753478648759,"pid":12813,"hostname":"ip-172-31-19-62","message":"(Error) disconnected from wss://rpc.polkadot.io: 1000:: Normal Closure","stack":["Error: disconnected from wss://rpc.polkadot.io: 1000:: Normal Closure","at WebSocket.__internal__onSocketClose (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+rpc-provider@16.2.1/node_modules/@polkadot/rpc-provider/ws/index.js:371:23)","at WebSocket.sentryWrapped (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@sentry+browser@9.42.0/node_modules/@sentry/browser/src/helpers.ts:117:17)","at WebSocket.[nodejs.internal.kHybridDispatch] (node:internal/event_target:827:20)","at WebSocket.dispatchEvent (node:internal/event_target:762:26)","at fireEvent (node:internal/deps/undici/undici:12277:14)","at WebSocket.#onSocketClose (node:internal/deps/undici/undici:13529:9)","at TLSSocket.onSocketClose (node:internal/deps/undici/undici:13251:72)","at TLSSocket.emit (node:events:519:35)","at node:net:346:12","at TCP.done (node:_tls_wrap:649:7)"],"msg":"Error fetching balance for address 13UVJyLnbVp9RBZYFwFGyDvVd1y27Tt8tkntv6Q7JVPhFsTB:"}
 ✓ src/tests/getBalance.test.ts (5 tests) 747ms
   ✓ GetBalanceAction > API Integration > should retrieve balance for a valid Polkadot address  643ms
stderr | src/tests/getBlockInfo.test.ts > GetBlockInfoAction > API Integration > should retrieve block info for a valid block number
2025-07-25 21:24:09        API/INIT: RPC methods not decorated: archive_v1_body, archive_v1_call, archive_v1_finalizedHeight, archive_v1_genesisHash, archive_v1_hashByHeight, archive_v1_header, archive_v1_stopStorage, archive_v1_storage, archive_v1_storageDiff, archive_v1_storageDiff_stopStorageDiff, chainHead_v1_body, chainHead_v1_call, chainHead_v1_continue, chainHead_v1_follow, chainHead_v1_header, chainHead_v1_stopOperation, chainHead_v1_storage, chainHead_v1_unfollow, chainHead_v1_unpin, chainSpec_v1_chainName, chainSpec_v1_genesisHash, chainSpec_v1_properties, transactionWatch_v1_submitAndWatch, transactionWatch_v1_unwatch, transaction_v1_broadcast, transaction_v1_stop

stderr | src/tests/getBlockInfo.test.ts > GetBlockInfoAction > Error Handling > should throw error for invalid block number
2025-07-25 21:24:10        RPC-CORE: getBlockHash(blockNumber?: BlockNumber): BlockHash:: createType(BlockNumber):: Number needs to be an integer <= Number.MAX_SAFE_INTEGER, i.e. 2 ^ 53 - 1

{"level":50,"time":1753478650423,"pid":12836,"hostname":"ip-172-31-19-62","message":"(Error) createType(BlockNumber):: Number needs to be an integer <= Number.MAX_SAFE_INTEGER, i.e. 2 ^ 53 - 1","stack":["Error: createType(BlockNumber):: Number needs to be an integer <= Number.MAX_SAFE_INTEGER, i.e. 2 ^ 53 - 1","at createTypeUnsafe (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+types-create@16.2.1/node_modules/@polkadot/types-create/create/type.js:51:22)","at TypeRegistry.createTypeUnsafe (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+types@16.2.1/node_modules/@polkadot/types/create/registry.js:226:16)","at RpcCore._formatParams (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+rpc-core@16.2.1/node_modules/@polkadot/rpc-core/bundle.js:299:34)","at callWithRegistry (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+rpc-core@16.2.1/node_modules/@polkadot/rpc-core/bundle.js:186:33)","at Observable._subscribe (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+rpc-core@16.2.1/node_modules/@polkadot/rpc-core/bundle.js:194:17)","at Observable._trySubscribe (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:235:19)","at /home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:225:18","at Object.errorContext (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/util/errorContext.ts:29:5)","at Observable.subscribe (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:211:5)","at ConnectableObservable.connect (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/observable/ConnectableObservable.ts:72:21)","at /home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/operators/refCount.ts:116:57","at OperatorSubscriber.<anonymous> (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/util/lift.ts:24:18)","at /home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:217:22","at Object.errorContext (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/util/errorContext.ts:29:5)","at Observable.subscribe (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:211:5)","at /home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/operators/catchError.ts:113:23","at SafeSubscriber.<anonymous> (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/util/lift.ts:24:18)","at /home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:217:22","at Object.errorContext (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/util/errorContext.ts:29:5)","at Observable.subscribe (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:211:5)","at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+api@16.2.1/node_modules/@polkadot/api/promise/decorateMethod.js:41:14","at new Promise (<anonymous>)","at decorateCall (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+api@16.2.1/node_modules/@polkadot/api/promise/decorateMethod.js:35:12)","at Object.getBlockHash (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+api@16.2.1/node_modules/@polkadot/api/promise/decorateMethod.js:69:15)","at GetBlockInfoAction.getBlockInfo (/home/ubuntu/eliza/packages/plugin-polkadot/src/actions/getBlockInfo.ts:128:56)","at processTicksAndRejections (node:internal/process/task_queues:105:5)","at /home/ubuntu/eliza/packages/plugin-polkadot/src/tests/getBlockInfo.test.ts:114:13","at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@vitest+runner@3.1.4/node_modules/@vitest/runner/dist/index.js:596:20"],"msg":"Error fetching block info for 9999999999999999:"}
stderr | src/tests/getBlockInfo.test.ts > GetBlockInfoAction > Error Handling > should throw error for invalid block hash format
2025-07-25 21:24:10        RPC-CORE: getHeader(hash?: BlockHash): Header:: createType(BlockHash):: Expected input with 32 bytes (256 bits), found 13 bytes

stderr | src/tests/getBlockInfo.test.ts > GetBlockInfoAction > Error Handling > should throw error for invalid block hash format
2025-07-25 21:24:10        RPC-CORE: getBlock(hash?: BlockHash): SignedBlock:: createType(BlockHash):: Expected input with 32 bytes (256 bits), found 13 bytes

{"level":50,"time":1753478650431,"pid":12836,"hostname":"ip-172-31-19-62","message":"(Error) createType(BlockHash):: Expected input with 32 bytes (256 bits), found 13 bytes","stack":["Error: createType(BlockHash):: Expected input with 32 bytes (256 bits), found 13 bytes","at createTypeUnsafe (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+types-create@16.2.1/node_modules/@polkadot/types-create/create/type.js:51:22)","at TypeRegistry.createTypeUnsafe (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+types@16.2.1/node_modules/@polkadot/types/create/registry.js:226:16)","at RpcCore._formatParams (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+rpc-core@16.2.1/node_modules/@polkadot/rpc-core/bundle.js:299:34)","at callWithRegistry (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+rpc-core@16.2.1/node_modules/@polkadot/rpc-core/bundle.js:186:33)","at Observable._subscribe (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+rpc-core@16.2.1/node_modules/@polkadot/rpc-core/bundle.js:194:17)","at Observable._trySubscribe (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:235:19)","at /home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:225:18","at Object.errorContext (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/util/errorContext.ts:29:5)","at Observable.subscribe (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:211:5)","at ConnectableObservable.connect (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/observable/ConnectableObservable.ts:72:21)","at /home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/operators/refCount.ts:116:57","at SafeSubscriber.<anonymous> (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/util/lift.ts:24:18)","at /home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:217:22","at Object.errorContext (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/util/errorContext.ts:29:5)","at Observable.subscribe (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:211:5)","at /home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/firstValueFrom.ts:73:12","at new Promise (<anonymous>)","at firstValueFrom (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/firstValueFrom.ts:58:10)","at ApiPromise._getBlockRegistryViaHash (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+api@16.2.1/node_modules/@polkadot/api/base/Init.js:148:21)","at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+api@16.2.1/node_modules/@polkadot/api/base/Init.js:175:84","at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+api@16.2.1/node_modules/@polkadot/api/base/Init.js:112:17","at new Promise (<anonymous>)","at ApiPromise._cacheBlockRegistryProgress (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+api@16.2.1/node_modules/@polkadot/api/base/Init.js:111:65)","at ApiPromise.getBlockRegistry (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+api@16.2.1/node_modules/@polkadot/api/base/Init.js:175:24)","at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+api@16.2.1/node_modules/@polkadot/api/base/Init.js:41:59","at RpcCore.memoized [as __internal__getBlockRegistry] (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+util@13.5.1/node_modules/@polkadot/util/memoize.js:18:47)","at callWithRegistry (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+rpc-core@16.2.1/node_modules/@polkadot/rpc-core/bundle.js:184:30)","at Observable._subscribe (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+rpc-core@16.2.1/node_modules/@polkadot/rpc-core/bundle.js:194:17)","at Observable._trySubscribe (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:235:19)","at /home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:225:18","at Object.errorContext (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/util/errorContext.ts:29:5)","at Observable.subscribe (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:211:5)","at ConnectableObservable.connect (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/observable/ConnectableObservable.ts:72:21)","at Observable._subscribe (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+rpc-core@16.2.1/node_modules/@polkadot/rpc-core/util/refCountDelay.js:15:41)","at Observable._trySubscribe (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:235:19)","at /home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:225:18","at Object.errorContext (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/util/errorContext.ts:29:5)","at Observable.subscribe (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:211:5)","at /home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/operators/catchError.ts:113:23","at SafeSubscriber.<anonymous> (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/util/lift.ts:24:18)","at /home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:217:22","at Object.errorContext (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/util/errorContext.ts:29:5)","at Observable.subscribe (/home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/src/internal/Observable.ts:211:5)","at file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+api@16.2.1/node_modules/@polkadot/api/promise/decorateMethod.js:41:14","at new Promise (<anonymous>)","at decorateCall (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+api@16.2.1/node_modules/@polkadot/api/promise/decorateMethod.js:35:12)","at Object.getBlock (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+api@16.2.1/node_modules/@polkadot/api/promise/decorateMethod.js:69:15)","at GetBlockInfoAction.getBlockInfo (/home/ubuntu/eliza/packages/plugin-polkadot/src/actions/getBlockInfo.ts:136:31)","at processTicksAndRejections (node:internal/process/task_queues:105:5)","at /home/ubuntu/eliza/packages/plugin-polkadot/src/tests/getBlockInfo.test.ts:124:13"],"msg":"Error fetching block info for 0xinvalidhash:"}
stderr | src/tests/getBlockInfo.test.ts > GetBlockInfoAction > Error Handling > should handle connection failures gracefully
2025-07-25 21:24:10        RPC-CORE: getBlockHash(blockNumber?: BlockNumber): BlockHash:: disconnected from wss://rpc.polkadot.io: 1000:: Normal Closure

{"level":50,"time":1753478650471,"pid":12836,"hostname":"ip-172-31-19-62","message":"(Error) disconnected from wss://rpc.polkadot.io: 1000:: Normal Closure","stack":["Error: disconnected from wss://rpc.polkadot.io: 1000:: Normal Closure","at WebSocket.__internal__onSocketClose (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@polkadot+rpc-provider@16.2.1/node_modules/@polkadot/rpc-provider/ws/index.js:371:23)","at WebSocket.sentryWrapped (file:///home/ubuntu/eliza/packages/plugin-polkadot/node_modules/.pnpm/@sentry+browser@9.42.0/node_modules/@sentry/browser/src/helpers.ts:117:17)","at WebSocket.[nodejs.internal.kHybridDispatch] (node:internal/event_target:827:20)","at WebSocket.dispatchEvent (node:internal/event_target:762:26)","at fireEvent (node:internal/deps/undici/undici:12277:14)","at WebSocket.#onSocketClose (node:internal/deps/undici/undici:13529:9)","at TLSSocket.onSocketClose (node:internal/deps/undici/undici:13251:72)","at TLSSocket.emit (node:events:519:35)","at node:net:346:12","at TCP.done (node:_tls_wrap:649:7)"],"msg":"Error fetching block info for 22000000:"}
 ✓ src/tests/getBlockInfo.test.ts (6 tests) 1298ms
   ✓ GetBlockInfoAction > API Integration > should retrieve block info for a valid block number  1115ms
stderr | src/tests/networkDataProvider.test.ts > Network Data Provider > API Integration > should fetch and return network status information
2025-07-25 21:24:11        API/INIT: RPC methods not decorated: archive_v1_body, archive_v1_call, archive_v1_finalizedHeight, archive_v1_genesisHash, archive_v1_hashByHeight, archive_v1_header, archive_v1_stopStorage, archive_v1_storage, archive_v1_storageDiff, archive_v1_storageDiff_stopStorageDiff, chainHead_v1_body, chainHead_v1_call, chainHead_v1_continue, chainHead_v1_follow, chainHead_v1_header, chainHead_v1_stopOperation, chainHead_v1_storage, chainHead_v1_unfollow, chainHead_v1_unpin, chainSpec_v1_chainName, chainSpec_v1_genesisHash, chainSpec_v1_properties, transactionWatch_v1_submitAndWatch, transactionWatch_v1_unwatch, transaction_v1_broadcast, transaction_v1_stop

[2025-07-25 21:24:11] INFO: Network Data Provider output generated Polkadot Network Status (updated 0s ago):
- Network: Polkadot
- Connected: Yes (69 peers)
- Synced: Yes
- Latest Block: #27038307 (finalized: #27038302)
- Native Token: DOT
- Active Validators: 600
- Connected Parachains: 40
[2025-07-25 21:24:11] INFO: Network Data Provider output generated Polkadot Network Status (updated 0s ago):
- Network: Polkadot
- Connected: Yes (69 peers)
- Synced: Yes
- Latest Block: #27038307 (finalized: #27038302)
- Native Token: DOT
- Active Validators: 600
- Connected Parachains: 40
[2025-07-25 21:24:11] INFO: Network Data Provider output generated Polkadot Network Status (updated 0s ago):
- Network: Polkadot
- Connected: Yes (69 peers)
- Synced: Yes
- Latest Block: #27038307 (finalized: #27038302)
- Native Token: DOT
- Active Validators: 600
- Connected Parachains: 40
[2025-07-25 21:24:11] INFO: Network Data Provider output generated Polkadot Network Status (updated 0s ago):
- Network: Polkadot
- Connected: Yes (69 peers)
- Synced: Yes
- Latest Block: #27038307 (finalized: #27038302)
- Native Token: DOT
- Active Validators: 600
- Connected Parachains: 40
[2025-07-25 21:24:11] INFO: Network Data Provider output generated Polkadot Network Status (updated 0s ago):
- Network: Polkadot
- Connected: Yes (69 peers)
- Synced: Yes
- Latest Block: #27038307 (finalized: #27038302)
- Native Token: DOT
- Active Validators: 600
- Connected Parachains: 40
stderr | src/tests/networkDataProvider.test.ts > Network Data Provider > Error Handling > should handle connection failures gracefully
2025-07-25 21:24:12        RPC-CORE: chain(): Text:: disconnected from wss://rpc.polkadot.io: 1000:: Normal Closure
2025-07-25 21:24:12        RPC-CORE: name(): Text:: disconnected from wss://rpc.polkadot.io: 1000:: Normal Closure
2025-07-25 21:24:12        RPC-CORE: version(): Text:: disconnected from wss://rpc.polkadot.io: 1000:: Normal Closure
2025-07-25 21:24:12        RPC-CORE: properties(): ChainProperties:: disconnected from wss://rpc.polkadot.io: 1000:: Normal Closure

[2025-07-25 21:24:12] ERROR: Error in Network Data Provider: disconnected from wss://rpc.polkadot.io: 1000:: Normal Closure
 ✓ src/tests/networkDataProvider.test.ts (6 tests) 1342ms
   ✓ Network Data Provider > API Integration > should fetch and return network status information  930ms

 Test Files  15 passed (15)
      Tests  123 passed (123)
   Start at  21:23:53
   Duration  18.92s (transform 688ms, setup 0ms, collect 27.79s, tests 19.10s, environment 4ms, prepare 1.71s)
```
</details>

<details>
	<summary>Output</summary>

```ts
bun i && bun run build
bun install v1.2.20 (6ad208bc)

$ bash ./scripts/init-submodules.sh
Initializing git submodules...
Submodule '.cursor' (https://github.com/elizaOS/.cursor) registered for path '.cursor'
Cloning into '/home/ubuntu/eliza/.cursor'...
Submodule path '.cursor': checked out '797ad22670a917147df4d85a25373b53c727151b'
Git submodules initialized successfully
$ husky

+ @types/bun@1.2.19 (v1.2.20 available)
+ @types/node@22.17.0 (v24.2.1 available)
+ @types/uuid@10.0.0
+ bun@1.2.19 (v1.2.20 available)
+ husky@9.1.7
+ lerna@8.1.4
+ tsup@8.5.0
+ turbo@2.5.5
+ typescript@5.8.2 (v5.9.2 available)
+ helmet@8.1.0

2018 packages installed [15.33s]

Blocked 2 postinstalls. Run `bun pm untrusted` for details.
$ turbo run build 

Attention:
Turborepo now collects completely anonymous telemetry regarding usage.
This information is used to shape the Turborepo roadmap and prioritize features.
You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
https://turborepo.com/docs/telemetry

turbo 2.5.5

• Packages in scope: @elizaos/api-client, @elizaos/app, @elizaos/autodoc, @elizaos/cli, @elizaos/client, @elizaos/config, @elizaos/core, @elizaos/plugin-bootstrap, @elizaos/plugin-dummy-services, @elizaos/plugin-polkadot, @elizaos/plugin-quick-starter, @elizaos/plugin-sql, @elizaos/plugin-starter, @elizaos/project-starter, @elizaos/project-tee-starter, @elizaos/server, @elizaos/test-utils, create-eliza
• Running build in 18 packages
• Remote caching disabled
@elizaos/config:build: cache miss, executing 7f071935c413d854
@elizaos/autodoc:build: cache miss, executing 47e734fb05dcc241
@elizaos/core:build: cache miss, executing 72dc15c4745841e1
@elizaos/plugin-polkadot:build: cache miss, executing 0b5f232db8c1b488
@elizaos/autodoc:build: 
@elizaos/autodoc:build: $ tsup
@elizaos/plugin-polkadot:build: 
@elizaos/plugin-polkadot:build: $ tsup
@elizaos/config:build: 
@elizaos/config:build: $ tsup
@elizaos/core:build: 
@elizaos/core:build: $ tsup
@elizaos/autodoc:build: CLI Building entry: src/index.ts
@elizaos/config:build: CLI Building entry: src/index.ts
@elizaos/core:build: CLI Building entry: src/index.ts
@elizaos/core:build: CLI Using tsconfig: tsconfig.build.json
@elizaos/config:build: CLI Using tsconfig: tsconfig.build.json
@elizaos/core:build: CLI tsup v8.5.0
@elizaos/core:build: CLI Using tsup config: /home/ubuntu/eliza/packages/core/tsup.config.ts
@elizaos/config:build: CLI tsup v8.5.0
@elizaos/config:build: CLI Using tsup config: /home/ubuntu/eliza/packages/config/tsup.config.ts
@elizaos/autodoc:build: CLI Using tsconfig: tsconfig.build.json
@elizaos/autodoc:build: CLI tsup v8.5.0
@elizaos/autodoc:build: CLI Using tsup config: /home/ubuntu/eliza/packages/autodoc/tsup.config.ts
@elizaos/plugin-polkadot:build: CLI Building entry: src/index.ts
@elizaos/plugin-polkadot:build: CLI Using tsconfig: tsconfig.json
@elizaos/plugin-polkadot:build: CLI tsup v8.3.5
@elizaos/plugin-polkadot:build: CLI Using tsup config: /home/ubuntu/eliza/packages/plugin-polkadot/tsup.config.ts
@elizaos/plugin-polkadot:build: CLI Target: esnext
@elizaos/plugin-polkadot:build: CLI Cleaning output folder
@elizaos/plugin-polkadot:build: ESM Build start
@elizaos/core:build: CLI Target: node18
@elizaos/core:build: CLI Cleaning output folder
@elizaos/config:build: CLI Target: node18
@elizaos/autodoc:build: CLI Target: node23
@elizaos/core:build: ESM Build start
@elizaos/autodoc:build: CLI Cleaning output folder
@elizaos/autodoc:build: CJS Build start
@elizaos/autodoc:build: ESM Build start
@elizaos/config:build: CLI Cleaning output folder
@elizaos/config:build: ESM Build start
@elizaos/config:build: ESM dist/index.js 1.38 KB
@elizaos/config:build: ESM ⚡️ Build success in 27ms
@elizaos/core:build: ESM dist/index.js 168.78 KB
@elizaos/core:build: ESM ⚡️ Build success in 113ms
@elizaos/plugin-polkadot:build: ESM dist/index.js     162.23 KB
@elizaos/plugin-polkadot:build: ESM dist/index.js.map 324.21 KB
@elizaos/plugin-polkadot:build: ESM ⚡️ Build success in 143ms
@elizaos/core:build: DTS Build start
@elizaos/config:build: DTS Build start
@elizaos/autodoc:build: DTS Build start
@elizaos/autodoc:build: ESM dist/index.js     93.71 KB
@elizaos/autodoc:build: ESM dist/index.js.map 199.98 KB
@elizaos/autodoc:build: ESM ⚡️ Build success in 1490ms
@elizaos/autodoc:build: CJS dist/index.cjs     95.46 KB
@elizaos/autodoc:build: CJS dist/index.cjs.map 200.11 KB
@elizaos/autodoc:build: CJS ⚡️ Build success in 1495ms
@elizaos/core:build: DTS ⚡️ Build success in 6914ms
@elizaos/core:build: DTS dist/index.d.ts 184.78 KB
@elizaos/test-utils:build: cache miss, executing fae8eda51b4411a9
@elizaos/test-utils:build: 
@elizaos/plugin-dummy-services:build: cache miss, executing 5a6c73f20655b7c7
@elizaos/test-utils:build: $ tsc --noEmit && tsup
@elizaos/plugin-dummy-services:build: 
@elizaos/plugin-sql:build: cache miss, executing cc0a90fff866c04c
@elizaos/plugin-dummy-services:build: $ tsup
@elizaos/api-client:build: cache miss, executing 09b9d85414b7b9fb
@elizaos/plugin-sql:build: 
@elizaos/plugin-sql:build: $ tsup
@elizaos/api-client:build: 
@elizaos/api-client:build: $ tsup
@elizaos/plugin-dummy-services:build: CLI Building entry: src/index.ts
@elizaos/plugin-dummy-services:build: CLI Using tsconfig: tsconfig.build.json
@elizaos/plugin-dummy-services:build: CLI tsup v8.5.0
@elizaos/plugin-dummy-services:build: CLI Using tsup config: /home/ubuntu/eliza/packages/plugin-dummy-services/tsup.config.ts
@elizaos/plugin-dummy-services:build: CLI Target: esnext
@elizaos/plugin-dummy-services:build: CLI Cleaning output folder
@elizaos/plugin-dummy-services:build: ESM Build start
@elizaos/api-client:build: CLI Building entry: src/index.ts
@elizaos/api-client:build: CLI Using tsconfig: tsconfig.json
@elizaos/api-client:build: CLI tsup v8.5.0
@elizaos/api-client:build: CLI Using tsup config: /home/ubuntu/eliza/packages/api-client/tsup.config.ts
@elizaos/api-client:build: CLI Target: es2022
@elizaos/api-client:build: CLI Cleaning output folder
@elizaos/api-client:build: ESM Build start
@elizaos/plugin-dummy-services:build: ESM dist/index.js     60.96 KB
@elizaos/plugin-dummy-services:build: ESM dist/index.js.map 110.75 KB
@elizaos/plugin-dummy-services:build: ESM ⚡️ Build success in 76ms
@elizaos/plugin-sql:build: CLI Building entry: src/index.ts
@elizaos/plugin-sql:build: CLI Using tsconfig: tsconfig.build.json
@elizaos/plugin-sql:build: CLI tsup v8.5.0
@elizaos/plugin-sql:build: CLI Using tsup config: /home/ubuntu/eliza/packages/plugin-sql/tsup.config.ts
@elizaos/plugin-sql:build: CLI Target: esnext
@elizaos/plugin-sql:build: CLI Cleaning output folder
@elizaos/plugin-sql:build: ESM Build start
@elizaos/api-client:build: ESM dist/index.js     30.21 KB
@elizaos/api-client:build: ESM dist/index.js.map 65.94 KB
@elizaos/api-client:build: ESM ⚡️ Build success in 90ms
@elizaos/plugin-sql:build: ESM dist/index.js     158.84 KB
@elizaos/plugin-sql:build: ESM dist/index.js.map 301.74 KB
@elizaos/plugin-sql:build: ESM ⚡️ Build success in 204ms
@elizaos/config:build: DTS ⚡️ Build success in 8500ms
@elizaos/config:build: DTS dist/index.d.ts 12.66 KB
@elizaos/plugin-dummy-services:build: DTS Build start
@elizaos/plugin-sql:build: DTS Build start
@elizaos/api-client:build: DTS Build start
@elizaos/autodoc:build: DTS ⚡️ Build success in 12200ms
@elizaos/autodoc:build: DTS dist/index.d.cts 13.00 B
@elizaos/autodoc:build: DTS dist/index.d.ts  13.00 B
@elizaos/test-utils:build: CLI Building entry: src/index.ts
@elizaos/test-utils:build: CLI Using tsconfig: tsconfig.build.json
@elizaos/test-utils:build: CLI tsup v8.5.0
@elizaos/test-utils:build: CLI Using tsup config: /home/ubuntu/eliza/packages/test-utils/tsup.config.ts
@elizaos/test-utils:build: CLI Target: esnext
@elizaos/test-utils:build: CLI Cleaning output folder
@elizaos/test-utils:build: ESM Build start
@elizaos/test-utils:build: ESM dist/index.js     92.31 KB
@elizaos/test-utils:build: ESM dist/index.js.map 186.83 KB
@elizaos/test-utils:build: ESM ⚡️ Build success in 142ms
@elizaos/test-utils:build: DTS Build start
@elizaos/plugin-dummy-services:build: DTS ⚡️ Build success in 7380ms
@elizaos/plugin-dummy-services:build: DTS dist/index.d.ts 9.79 KB
@elizaos/api-client:build: DTS ⚡️ Build success in 10312ms
@elizaos/api-client:build: DTS dist/index.d.ts 28.27 KB
@elizaos/client:build: cache miss, executing f8be9a25cadce097
@elizaos/client:build: 
@elizaos/client:build: $ vite build
@elizaos/plugin-sql:build: DTS ⚡️ Build success in 12038ms
@elizaos/plugin-sql:build: DTS dist/index.d.ts 78.52 KB
@elizaos/plugin-bootstrap:build: cache miss, executing 47ad1fd00ab34f89
@elizaos/plugin-bootstrap:build: 
@elizaos/plugin-bootstrap:build: $ tsup
@elizaos/plugin-bootstrap:build: CLI Building entry: src/index.ts
@elizaos/plugin-bootstrap:build: CLI Using tsconfig: tsconfig.build.json
@elizaos/plugin-bootstrap:build: CLI tsup v8.5.0
@elizaos/plugin-bootstrap:build: CLI Using tsup config: /home/ubuntu/eliza/packages/plugin-bootstrap/tsup.config.ts
@elizaos/plugin-bootstrap:build: CLI Target: esnext
@elizaos/plugin-bootstrap:build: CLI Cleaning output folder
@elizaos/plugin-bootstrap:build: ESM Build start
@elizaos/plugin-bootstrap:build: ESM dist/index.js     305.19 KB
@elizaos/plugin-bootstrap:build: ESM dist/index.js.map 605.95 KB
@elizaos/plugin-bootstrap:build: ESM ⚡️ Build success in 198ms
@elizaos/test-utils:build: DTS ⚡️ Build success in 6149ms
@elizaos/test-utils:build: DTS dist/index.d.ts 31.76 KB
@elizaos/plugin-bootstrap:build: DTS Build start
@elizaos/plugin-bootstrap:build: DTS ⚡️ Build success in 5801ms
@elizaos/plugin-bootstrap:build: DTS dist/index.d.ts 20.31 KB

@elizaos/server:build: cache miss, executing 183aaec45f5f9331
@elizaos/server:build: 
@elizaos/server:build: $ tsup && bun run src/scripts/copy-client-dist.ts
@elizaos/server:build: CLI Building entry: src/index.ts
@elizaos/server:build: CLI Using tsconfig: tsconfig.build.json
@elizaos/server:build: CLI tsup v8.5.0
@elizaos/server:build: CLI Using tsup config: /home/ubuntu/eliza/packages/server/tsup.config.ts
@elizaos/server:build: CLI Target: esnext
@elizaos/server:build: CLI Cleaning output folder
@elizaos/server:build: ESM Build start
@elizaos/server:build: ESM dist/index.js     248.67 KB
@elizaos/server:build: ESM dist/index.js.map 479.78 KB
@elizaos/server:build: ESM ⚡️ Build success in 111ms
@elizaos/server:build: DTS Build start
@elizaos/server:build: DTS ⚡️ Build success in 6058ms
@elizaos/server:build: DTS dist/index.d.ts 12.57 KB
@elizaos/server:build: Copying client dist files to server...
@elizaos/server:build: Copying from /home/ubuntu/eliza/packages/client/dist to /home/ubuntu/eliza/packages/server/dist/client...
@elizaos/server:build: ✓ Client dist files copied successfully to: /home/ubuntu/eliza/packages/server/dist/client
@elizaos/cli:build: cache miss, executing dd9a089361d694d0
@elizaos/cli:build: 
@elizaos/cli:build: $ bun run src/scripts/copy-templates.ts && bun x tsup
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
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-quick-starter/README.md -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-quick-starter/README.md
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-quick-starter/bunfig.toml -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-quick-starter/bunfig.toml
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-quick-starter/package.json -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-quick-starter/package.json
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-quick-starter/tsconfig.build.json -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-quick-starter/tsconfig.build.json
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-quick-starter/tsconfig.json -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-quick-starter/tsconfig.json
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-quick-starter/tsup.config.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-quick-starter/tsup.config.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/CLAUDE.md -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/CLAUDE.md
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
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/CLAUDE.md -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/CLAUDE.md
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
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/index.html -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/index.html
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/package.json -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/package.json
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/postcss.config.js -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/postcss.config.js
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/tailwind.config.js -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/tailwind.config.js
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/tsconfig.build.json -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/tsconfig.build.json
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/tsconfig.json -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/tsconfig.json
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/tsup.config.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/tsup.config.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/vite.config.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/vite.config.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-quick-starter/scripts/install-test-deps.js -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-quick-starter/scripts/install-test-deps.js
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-quick-starter/src/index.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-quick-starter/src/index.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-quick-starter/src/plugin.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-quick-starter/src/plugin.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/scripts/install-test-deps.js -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/scripts/install-test-deps.js
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/scripts/test-e2e-manual.js -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/scripts/test-e2e-manual.js
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/src/index.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/src/index.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/src/plugin.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/src/plugin.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/scripts/install-test-deps.js -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/scripts/install-test-deps.js
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/scripts/test-all.sh -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/scripts/test-all.sh
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/character.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/character.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/index.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/index.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/plugin.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/plugin.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/assets/mr-tee-portrait.jpg -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/assets/mr-tee-portrait.jpg
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/scripts/install-test-deps.js -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/scripts/install-test-deps.js
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/scripts/test-all.sh -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/scripts/test-all.sh
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/src/character.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/src/character.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/src/index.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/src/index.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/src/plugin.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/src/plugin.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-quick-starter/src/__tests__/plugin.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-quick-starter/src/__tests__/plugin.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-quick-starter/src/__tests__/test-utils.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-quick-starter/src/__tests__/test-utils.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/src/__tests__/build-order.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/src/__tests__/build-order.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/src/__tests__/integration.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/src/__tests__/integration.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/src/__tests__/plugin.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/src/__tests__/plugin.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/src/__tests__/test-utils.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/src/__tests__/test-utils.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/src/__tests__/vite-config-utils.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/src/__tests__/vite-config-utils.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/src/frontend/index.css -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/src/frontend/index.css
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/src/frontend/index.tsx -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/src/frontend/index.tsx
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/src/frontend/utils.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/src/frontend/utils.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/__tests__/actions.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/__tests__/actions.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/__tests__/build-order.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/__tests__/build-order.test.ts
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
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/__tests__/vite-config-utils.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/__tests__/vite-config-utils.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/frontend/index.css -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/frontend/index.css
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/frontend/index.html -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/frontend/index.html
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/frontend/index.tsx -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/frontend/index.tsx
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/frontend/utils.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/frontend/utils.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/src/__tests__/actions.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/src/__tests__/actions.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/src/__tests__/build-order.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/src/__tests__/build-order.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/src/__tests__/character.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/src/__tests__/character.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/src/__tests__/config.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/src/__tests__/config.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/src/__tests__/env.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/src/__tests__/env.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/src/__tests__/error-handling.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/src/__tests__/error-handling.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/src/__tests__/events.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/src/__tests__/events.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/src/__tests__/file-structure.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/src/__tests__/file-structure.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/src/__tests__/frontend.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/src/__tests__/frontend.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/src/__tests__/integration.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/src/__tests__/integration.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/src/__tests__/models.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/src/__tests__/models.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/src/__tests__/plugin.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/src/__tests__/plugin.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/src/__tests__/provider.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/src/__tests__/provider.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/src/__tests__/routes.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/src/__tests__/routes.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/src/__tests__/tee-validation.test.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/src/__tests__/tee-validation.test.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/src/__tests__/test-utils.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/src/__tests__/test-utils.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/src/__tests__/vite-config-utils.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/src/__tests__/vite-config-utils.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/src/frontend/index.css -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/src/frontend/index.css
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/src/frontend/index.html -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/src/frontend/index.html
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/src/frontend/index.tsx -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/src/frontend/index.tsx
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/src/frontend/panels.tsx -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/src/frontend/panels.tsx
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/src/frontend/utils.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/src/frontend/utils.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-quick-starter/src/__tests__/e2e/README.md -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-quick-starter/src/__tests__/e2e/README.md
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-quick-starter/src/__tests__/e2e/plugin-quick-starter.e2e.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-quick-starter/src/__tests__/e2e/plugin-quick-starter.e2e.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/src/__tests__/cypress/tsconfig.json -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/src/__tests__/cypress/tsconfig.json
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/src/__tests__/e2e/README.md -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/src/__tests__/e2e/README.md
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/src/__tests__/e2e/plugin-starter.e2e.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/src/__tests__/e2e/plugin-starter.e2e.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/__tests__/e2e/README.md -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/__tests__/e2e/README.md
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/__tests__/e2e/project-starter.e2e.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/__tests__/e2e/project-starter.e2e.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/src/__tests__/utils/core-test-utils.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/src/__tests__/utils/core-test-utils.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/src/__tests__/utils/core-test-utils.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/src/__tests__/utils/core-test-utils.ts
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/src/__tests__/e2e/README.md -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/src/__tests__/e2e/README.md
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/src/__tests__/e2e/project-tee-starter.e2e.ts -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/src/__tests__/e2e/project-tee-starter.e2e.ts
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
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-quick-starter/.gitignore -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-quick-starter/.gitignore
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-quick-starter/.npmignore -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-quick-starter/.npmignore
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/.gitignore -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/.gitignore
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/plugin-starter/.npmignore -> /home/ubuntu/eliza/packages/cli/dist/templates/plugin-starter/.npmignore
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/.dockerignore -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/.dockerignore
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/.env.example -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/.env.example
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/.gitignore -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/.gitignore
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-tee-starter/.npmignore -> /home/ubuntu/eliza/packages/cli/dist/templates/project-tee-starter/.npmignore
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/.env.example -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/.env.example
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/.gitignore -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/.gitignore
@elizaos/cli:build: i File copied: /home/ubuntu/eliza/packages/cli/templates/project-starter/.npmignore -> /home/ubuntu/eliza/packages/cli/dist/templates/project-starter/.npmignore
@elizaos/cli:build: i No files matched using current glob pattern: ../docs/docs/plugins/migration/claude-code/**/*, maybe you need to configure globby by options.globbyOptions?
@elizaos/cli:build: ESM dist/utils-GATLGH6J.js                4.87 KB
@elizaos/cli:build: ESM dist/plugin-creator-TCUFII32.js       30.67 KB
@elizaos/cli:build: ESM dist/chunk-ZJDZ4DQK.js                6.62 KB
@elizaos/cli:build: ESM dist/index.js                         208.50 KB
@elizaos/cli:build: ESM dist/chunk-IU23LUNR.js                34.90 KB
@elizaos/cli:build: ESM dist/bun-exec-ULMPAIQC.js             301.00 B
@elizaos/cli:build: ESM dist/registry-U2QI2FTO.js             1.16 KB
@elizaos/cli:build: ESM dist/chunk-FQYWRHLX.js                5.13 KB
@elizaos/cli:build: ESM dist/chunk-GXWWPFBO.js                1015.00 B
@elizaos/cli:build: ESM dist/chunk-I4L4T7QX.js                5.32 KB
@elizaos/cli:build: ESM dist/chunk-3RG5ZIWI.js                390.00 B
@elizaos/cli:build: ESM dist/chunk-HHK2Q4AD.js                204.37 KB
@elizaos/cli:build: ESM dist/commands/agent/actions/index.js  392.00 B
@elizaos/cli:build: ESM dist/commands/create/actions/index.js 625.00 B
@elizaos/cli:build: ESM dist/commands/agent/index.js          361.00 B
@elizaos/cli:build: ESM dist/commands/shared/index.js         257.00 B
@elizaos/cli:build: ESM dist/commands/create/index.js         277.00 B
@elizaos/cli:build: ESM ⚡️ Build success in 208ms
@elizaos/cli:build: DTS Build start
@elizaos/cli:build: DTS ⚡️ Build success in 17241ms
@elizaos/cli:build: DTS dist/index.d.ts                         19.00 B
@elizaos/cli:build: DTS dist/commands/create/index.d.ts         89.00 B
@elizaos/cli:build: DTS dist/commands/shared/index.d.ts         817.00 B
@elizaos/cli:build: DTS dist/commands/agent/index.d.ts          618.00 B
@elizaos/cli:build: DTS dist/commands/agent/actions/index.d.ts  1.13 KB
@elizaos/cli:build: DTS dist/commands/create/actions/index.d.ts 2.05 KB
@elizaos/cli:build: DTS dist/url-utils-CKc_Ebt_.d.ts            851.00 B
@elizaos/plugin-quick-starter:build: cache miss, executing 23df6928a58ae926
@elizaos/plugin-quick-starter:build: 
@elizaos/app:build: cache miss, executing ffc5be651bf6f7cd
@elizaos/plugin-quick-starter:build: $ tsc --noEmit && tsup
@elizaos/plugin-starter:build: cache miss, executing 5c9b88cf63d09ee4
@elizaos/project-tee-starter:build: cache miss, executing 9db9152b0f08a54d
@elizaos/plugin-starter:build: 
@elizaos/plugin-starter:build: $ tsc --noEmit && vite build && tsup
@elizaos/app:build: 
@elizaos/app:build: $ tsc && vite build
@elizaos/project-tee-starter:build: 
@elizaos/project-tee-starter:build: $ tsc --noEmit && vite build && tsup
@elizaos/project-starter:build: cache miss, executing b96681617ae1f92d
@elizaos/project-starter:build: 
@elizaos/project-starter:build: $ tsc --noEmit && vite build && tsup
@elizaos/app:build: vite v6.3.5 building for production...
✓ 28 modules transformed.
dist/index.html                  0.69 kB │ gzip:  0.34 kB
@elizaos/app:build: dist/assets/index-DOrZo_HZ.js  189.35 kB │ gzip: 59.70 kB
@elizaos/app:build: ✓ built in 3.75s
@elizaos/plugin-starter:build: vite v6.3.5 building for production...
@elizaos/plugin-quick-starter:build: CLI Building entry: src/index.ts
@elizaos/plugin-quick-starter:build: CLI Using tsconfig: tsconfig.build.json
@elizaos/plugin-quick-starter:build: CLI tsup v8.5.0
@elizaos/plugin-quick-starter:build: CLI Using tsup config: /home/ubuntu/eliza/packages/plugin-quick-starter/tsup.config.ts
@elizaos/plugin-quick-starter:build: CLI Target: esnext
@elizaos/plugin-quick-starter:build: ESM Build start
@elizaos/plugin-quick-starter:build: ESM dist/index.js     5.15 KB
@elizaos/plugin-quick-starter:build: ESM dist/index.js.map 10.91 KB
@elizaos/plugin-quick-starter:build: ESM ⚡️ Build success in 16ms
@elizaos/project-starter:build: vite v6.3.5 building for production...
@elizaos/plugin-quick-starter:build: DTS Build start
@elizaos/project-tee-starter:build: vite v6.3.5 building for production...
✓ 76 modules transformed.
✓ 76 modules transformed.
dist/.vite/manifest.json          0.19 kB │ gzip:  0.14 kB
@elizaos/plugin-starter:build: dist/index.html                   0.48 kB │ gzip:  0.31 kB
@elizaos/plugin-starter:build: dist/assets/index-CgkejLs_.css   11.18 kB │ gzip:  2.96 kB
@elizaos/plugin-starter:build: dist/assets/index-D1cHX53P.js   226.83 kB │ gzip: 70.92 kB
@elizaos/plugin-starter:build: ✓ built in 3.27s
../../dist/frontend/index.html                  0.60 kB │ gzip:  0.38 kB
@elizaos/project-starter:build: ../../dist/frontend/assets/main-BGv8Llvv.css   20.97 kB │ gzip:  5.89 kB
@elizaos/project-starter:build: ../../dist/frontend/assets/main-evuFysO-.js   215.01 kB │ gzip: 67.15 kB
@elizaos/project-starter:build: ✓ built in 3.24s
@elizaos/plugin-starter:build: CLI Building entry: src/index.ts
@elizaos/plugin-starter:build: CLI Using tsconfig: tsconfig.build.json
@elizaos/plugin-starter:build: CLI tsup v8.5.0
@elizaos/plugin-starter:build: CLI Using tsup config: /home/ubuntu/eliza/packages/plugin-starter/tsup.config.ts
@elizaos/plugin-starter:build: CLI Target: esnext
@elizaos/plugin-starter:build: ESM Build start
@elizaos/plugin-starter:build: ESM dist/index.js     5.50 KB
@elizaos/plugin-starter:build: ESM dist/index.js.map 11.41 KB
@elizaos/plugin-starter:build: ESM ⚡️ Build success in 27ms
@elizaos/project-starter:build: CLI Building entry: src/index.ts
@elizaos/project-starter:build: CLI Using tsconfig: tsconfig.build.json
@elizaos/project-starter:build: CLI tsup v8.5.0
@elizaos/project-starter:build: CLI Using tsup config: /home/ubuntu/eliza/packages/project-starter/tsup.config.ts
@elizaos/project-starter:build: CLI Target: esnext
@elizaos/project-starter:build: ESM Build start
@elizaos/project-starter:build: ESM dist/index.js     18.74 KB
@elizaos/project-starter:build: ESM dist/index.js.map 37.40 KB
@elizaos/project-starter:build: ESM ⚡️ Build success in 80ms
@elizaos/plugin-starter:build: DTS Build start
@elizaos/project-starter:build: DTS Build start
✓ 76 modules transformed.
../../dist/frontend/index.html                  0.61 kB │ gzip:  0.39 kB
@elizaos/project-tee-starter:build: ../../dist/frontend/assets/main-DNh3t3_D.css   21.35 kB │ gzip:  6.01 kB
@elizaos/project-tee-starter:build: ../../dist/frontend/assets/main-C05CtZd1.js   220.72 kB │ gzip: 68.81 kB
@elizaos/project-tee-starter:build: ✓ built in 3.42s
@elizaos/project-tee-starter:build: CLI Building entry: src/index.ts
@elizaos/project-tee-starter:build: CLI Using tsconfig: tsconfig.build.json
@elizaos/project-tee-starter:build: CLI tsup v8.5.0
@elizaos/project-tee-starter:build: CLI Using tsup config: /home/ubuntu/eliza/packages/project-tee-starter/tsup.config.ts
@elizaos/project-tee-starter:build: CLI Target: esnext
@elizaos/project-tee-starter:build: ESM Build start
@elizaos/project-tee-starter:build: ESM dist/index.js     27.86 KB
@elizaos/project-tee-starter:build: ESM dist/index.js.map 48.24 KB
@elizaos/project-tee-starter:build: ESM ⚡️ Build success in 81ms
@elizaos/plugin-quick-starter:build: DTS ⚡️ Build success in 6615ms
@elizaos/plugin-quick-starter:build: DTS dist/index.d.ts 471.00 B
@elizaos/project-tee-starter:build: DTS Build start
@elizaos/plugin-starter:build: DTS ⚡️ Build success in 5744ms
@elizaos/plugin-starter:build: DTS dist/index.d.ts 516.00 B
@elizaos/project-starter:build: DTS ⚡️ Build success in 6217ms
@elizaos/project-starter:build: DTS dist/index.d.ts 634.00 B
@elizaos/project-tee-starter:build: DTS ⚡️ Build success in 5559ms
@elizaos/project-tee-starter:build: DTS dist/index.d.ts 676.00 B

 Tasks:    17 successful, 17 total
Cached:    0 cached, 17 total
  Time:    1m49.507s 

~/eliza
Please help me interact with this agent on my local browser on port 3000 using ssh
I'll help you set up SSH tunneling to access your agent running on port 3000 from your local browser. This involves creating an SSH tunnel that forwards traffic from your local machine to the remote server.
Check if agent is running on port 3000
Provide SSH tunnel command for local machine
Verify tunnel setup instructions
First, let me check if there's something running on port 3000:
Let me also check what processes might be running:
Perfect! I can see this is an Eliza AI agent project. Let me provide you with the complete solution:
Completed Provide SSH tunnel command for local machine (2/3)
Setting up SSH Tunnel to Access Your Eliza Agent

Here's how to set up SSH tunneling to access your Eliza agent on port 3000:

Step 1: Start the Eliza Agent (on your remote server)

First, you need to start the agent. Based on the package.json, you have a few options:
bash
Step 2: Create SSH Tunnel (on your local machine)

Once the agent is running on your remote server, run this command on your local machine (not on the remote server):
bash
Replace YOUR_SERVER_IP with your actual server's IP address.

Alternative Options:

Option 1: Background tunnel (recommended)
bash
•  -N: Don't execute commands, just forward ports
•  -f: Run in background

Option 2: Specify different local port
bash
This maps local port 8080 to remote port 3000.

Step 3: Access in Browser

After establishing the tunnel, open your local browser and navigate to:
Or if you used port 8080:
Completed Verify tunnel setup instructions (3/3)
Troubleshooting:

1. If the agent isn't running: Start it first with one of the npm commands above
2. If you can't connect: Make sure your SSH key is set up properly
3. If port 3000 is busy locally: Use a different local port like ssh -L 8080:localhost:3000
4. To stop the background tunnel: Find the process with ps aux | grep ssh and kill it

Would you like me to help you start the Eliza agent on the server first?
elizaos start --character "packages/plugin-polkadot/characters/polkadot.character.json"
[2025-08-14 21:24:11] INFO: Using local @elizaos/cli installation

⠀⠀⠀⠀⠀⠀⠀⠀⢀⣐⣿⣿⢰⡀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⣴⠤⠾⠛⠛⣿⣶⣇⠀⠀⡆ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢰⣋⡳⡄⠀⢨⣭⡀⠀⡤⠀⣀⣝⢿⣶⣿⡅ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢸⣯⠀⣇⠀⣼⣿⣿⣆⢷⣴⣿⣿⡏⣛⡉⠀ ⢸⣿⣿⣿⣿⣿⣿⢸⣿⣿⠀⠀⠀⠀⠀⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⣾⣿⣿⣧⠀⠀⠀⢸⠟⢀⣴⣿⣿⣿⣿⣦⡀⣠⣾⣿⣿⣿⣿⣦⡙⢿
⠀⠙⢷⣮⢸⣿⣿⣿⣿⣷⣯⣟⣏⣼⣷⣅⠾ ⢸⣿⣇⣀⣀⣀⠀⢸⣿⣿⠀⠀⠀⠀⠀⣿⣿⡇⠀⠀⠀⣠⣿⣿⠟⠁⠀⠀⣼⣿⡟⣿⣿⣆⠀⠀⠀⠀⣿⣿⠋⠀⠈⠻⣿⡇⣿⣿⣅⣀⣀⡛⠛⠃⠀
⠀⠀⠀⠁⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠀ ⢸⣿⡿⠿⠿⠿⠀⢸⣿⣿⠀⠀⠀⠀⠀⣿⣿⡇⠀⣠⣾⣿⠟⠁⠀⠀⠀⣰⣿⣿⣁⣸⣿⣿⡄⠀⠀⠀⣿⣿ ⠀⠀ ⣿⣿⢈⣛⠿⠿⠿⣿⣷⡄⠀
⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣉⡟⠀⠀ ⢸⣿⣧⣤⣤⣤⣤⢸⣿⣿⣦⣤⣤⣤⡄⣿⣿⡇⣾⣿⣿⣧⣤⣤⣤⡄⢰⣿⣿⠟⠛⠛⠻⣿⣿⡄⢠⡀⠻⣿⣿⣦⣴⣿⣿⠇⢿⣿⣦⣤⣤⣿⣿⠇⣠
⠀⠀⠀⠀⢰⡈⠛⠿⣿⣿⣿⣿⣿⠋⠀   ⠘⠛⠛⠛⠛⠛⠛⠈⠛⠛⠛⠛⠛⠛⠃⠛⠛⠃⠛⠛⠛⠛⠛⠛⠛⠃⠛⠛⠃⠀⠀⠀⠀⠙⠛⠃⠘⠛⠀⠈⠛⠛⠛⠛⠁⠀⠀⠙⠛⠛⠛⠛⠁⠚⠛
⠀⠀⠀⠀⢸⣿⡦⠀⠀⠉⠛⠿⠃⠀⠀⠀  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀

Version: monorepo
[2025-08-14 21:24:12] INFO: Using local @elizaos/server installation
[2025-08-14 21:24:12] INFO: Loaded @elizaos/server from local installation
[2025-08-14 21:24:12] INFO: Successfully loaded character from: /home/ubuntu/eliza/packages/plugin-polkadot/characters/polkadot.character.json
[2025-08-14 21:24:12] INFO: Successfully loaded character: Polkadot
BYPASS: No database configuration found, defaulting to pglite
[2025-08-14 21:24:12] INFO: [INIT] Database Dir for SQL plugin: /home/ubuntu/eliza/.eliza/.elizadb
[2025-08-14 21:24:12] INFO: [INIT] Running database migrations for messaging tables...
[2025-08-14 21:24:12] INFO: DatabaseMigrationService initialized with database
[2025-08-14 21:24:12] INFO: Registered schema for plugin: @elizaos/plugin-sql
[2025-08-14 21:24:12] INFO: Discovered 1 plugin schemas out of 1 plugins
[2025-08-14 21:24:12] INFO: Running migrations for 1 plugins...
[2025-08-14 21:24:12] INFO: Starting migration for plugin: @elizaos/plugin-sql
[2025-08-14 21:24:16] INFO: Created table: agents
[2025-08-14 21:24:16] INFO: Created table: cache
[2025-08-14 21:24:16] INFO: Created table: message_servers
[2025-08-14 21:24:16] INFO: Created table: channels
[2025-08-14 21:24:16] INFO: Created table: channel_participants
[2025-08-14 21:24:16] INFO: Created table: entities
[2025-08-14 21:24:16] INFO: Created table: rooms
[2025-08-14 21:24:16] INFO: Created table: worlds
[2025-08-14 21:24:16] INFO: Created table: components
[2025-08-14 21:24:16] INFO: Created table: memories
[2025-08-14 21:24:16] INFO: Created table: embeddings
[2025-08-14 21:24:16] INFO: Created table: logs
[2025-08-14 21:24:16] INFO: Created table: central_messages
[2025-08-14 21:24:16] INFO: Created table: participants
[2025-08-14 21:24:16] INFO: Created table: relationships
[2025-08-14 21:24:16] INFO: Created table: server_agents
[2025-08-14 21:24:16] INFO: Created table: tasks
[2025-08-14 21:24:16] INFO: All plugin migrations completed.
[2025-08-14 21:24:16] INFO: [INIT] Ensuring default server exists...
[2025-08-14 21:24:16] INFO: [AgentServer] Checking for default server...
[2025-08-14 21:24:16] INFO: [AgentServer] Creating default server with UUID 00000000-0000-0000-0000-000000000000...
[2025-08-14 21:24:16] WARN: Server authentication is disabled. Set ELIZA_SERVER_AUTH_TOKEN environment variable to enable.
[2025-08-14 21:24:16] INFO: Web UI enabled
[2025-08-14 21:24:16] INFO: [STATIC] Found client files at: /home/ubuntu/eliza/packages/server/dist/client
[2025-08-14 21:24:16] INFO: [STATIC] Serving static files from: /home/ubuntu/eliza/packages/server/dist/client
[2025-08-14 21:24:16] INFO: [SocketIO] Router initialized with 0 agents
[2025-08-14 21:24:16] INFO: [SocketIO] Setting up Socket.IO event listeners
[2025-08-14 21:24:16] INFO: [SocketIO] Registered message types: 1: ROOM_JOINING, 2: SEND_MESSAGE, 3: MESSAGE, 4: ACK, 5: THINKING, 6: CONTROL, ROOM_JOINING: 1, SEND_MESSAGE: 2, MESSAGE: 3, ACK: 4, THINKING: 5, CONTROL: 6
Startup successful!
Go to the dashboard at http://localhost:3000
AgentServer is listening on port 3000
[2025-08-14 21:24:20] WARN: Failed to load plugin module '@elizaos/plugin-polkadot' using all relevant strategies.
[2025-08-14 21:24:20] INFO: Plugin @elizaos/plugin-polkadot not available, installing...
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	esm 13.5.1	node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/rpc-augment/node_modules/@polkadot/util/
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	esm 13.5.1	node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/rpc-augment/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/api/node_modules/@polkadot/rpc-provider/node_modules/@polkadot/util/
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	esm 13.5.1	node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/rpc-augment/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/api/node_modules/@polkadot/rpc-provider/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/api-derive/node_modules/@polkadot/util/
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	esm 13.5.1	node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/rpc-augment/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/api/node_modules/@polkadot/rpc-provider/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/api-derive/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/rpc-core/node_modules/@polkadot/util/
@polkadot/rpc-provider has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	esm 16.2.1	node_modules/@polkadot/api/node_modules/@polkadot/rpc-provider/
	esm 16.2.1	node_modules/@polkadot/rpc-core/node_modules/@polkadot/rpc-provider/
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	esm 13.5.1	node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/rpc-augment/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/api/node_modules/@polkadot/rpc-provider/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/api-derive/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/rpc-core/node_modules/@polkadot/util/
	esm 13.5.1	node_modules/@polkadot/rpc-core/node_modules/@polkadot/types/node_modules/@polkadot/util/
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	esm 13.5.1	node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/rpc-augment/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/api/node_modules/@polkadot/rpc-provider/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/api-derive/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/rpc-core/node_modules/@polkadot/util/
	esm 13.5.1	node_modules/@polkadot/rpc-core/node_modules/@polkadot/types/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/types-create/node_modules/@polkadot/util/
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	esm 13.5.1	node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/rpc-augment/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/api/node_modules/@polkadot/rpc-provider/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/api-derive/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/rpc-core/node_modules/@polkadot/util/
	esm 13.5.1	node_modules/@polkadot/rpc-core/node_modules/@polkadot/types/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/types-create/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/types-codec/node_modules/@polkadot/util/
@polkadot/util-crypto has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	esm 13.5.1	node_modules/@polkadot/util-crypto/
	esm 13.5.5	node_modules/@polkadot/api-derive/node_modules/@polkadot/util-crypto/
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	esm 13.5.1	node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/rpc-augment/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/api/node_modules/@polkadot/rpc-provider/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/api-derive/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/rpc-core/node_modules/@polkadot/util/
	esm 13.5.1	node_modules/@polkadot/rpc-core/node_modules/@polkadot/types/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/types-create/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/types-codec/node_modules/@polkadot/util/
	esm 13.5.1	node_modules/@polkadot/api-derive/node_modules/@polkadot/types/node_modules/@polkadot/util/
@polkadot/types has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	esm 16.2.1	node_modules/@polkadot/rpc-core/node_modules/@polkadot/types/
	esm 16.2.1	node_modules/@polkadot/api-derive/node_modules/@polkadot/types/
@polkadot/util-crypto has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	esm 13.5.1	node_modules/@polkadot/util-crypto/
	esm 13.5.5	node_modules/@polkadot/api-derive/node_modules/@polkadot/util-crypto/
	esm 13.5.1	node_modules/@polkadot/api-derive/node_modules/@polkadot/types/node_modules/@polkadot/util-crypto/
@polkadot/types has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	esm 16.2.1	node_modules/@polkadot/rpc-core/node_modules/@polkadot/types/
	esm 16.2.1	node_modules/@polkadot/api-derive/node_modules/@polkadot/types/
	esm 16.2.1	node_modules/@polkadot/api/node_modules/@polkadot/types/
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	esm 13.5.1	node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/rpc-augment/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/api/node_modules/@polkadot/rpc-provider/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/api-derive/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/rpc-core/node_modules/@polkadot/util/
	esm 13.5.1	node_modules/@polkadot/rpc-core/node_modules/@polkadot/types/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/types-create/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/types-codec/node_modules/@polkadot/util/
	esm 13.5.1	node_modules/@polkadot/api-derive/node_modules/@polkadot/types/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/types-known/node_modules/@polkadot/util/
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	esm 13.5.1	node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/rpc-augment/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/api/node_modules/@polkadot/rpc-provider/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/api-derive/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/rpc-core/node_modules/@polkadot/util/
	esm 13.5.1	node_modules/@polkadot/rpc-core/node_modules/@polkadot/types/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/types-create/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/types-codec/node_modules/@polkadot/util/
	esm 13.5.1	node_modules/@polkadot/api-derive/node_modules/@polkadot/types/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/types-known/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/api-augment/node_modules/@polkadot/util/
@polkadot/rpc-augment has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	esm 16.2.1	node_modules/@polkadot/rpc-augment/
	esm 16.4.4	node_modules/@polkadot/api-augment/node_modules/@polkadot/rpc-augment/
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	esm 13.5.1	node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/rpc-augment/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/api/node_modules/@polkadot/rpc-provider/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/api-derive/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/rpc-core/node_modules/@polkadot/util/
	esm 13.5.1	node_modules/@polkadot/rpc-core/node_modules/@polkadot/types/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/types-create/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/types-codec/node_modules/@polkadot/util/
	esm 13.5.1	node_modules/@polkadot/api-derive/node_modules/@polkadot/types/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/types-known/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/api-augment/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@substrate/asset-transfer-api/node_modules/@polkadot/util/
@polkadot/api has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	esm 16.2.1	node_modules/@polkadot/api/
	esm 16.4.4	node_modules/@substrate/asset-transfer-api/node_modules/@polkadot/api/
@polkadot/rpc-augment has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	esm 16.2.1	node_modules/@polkadot/rpc-augment/
	esm 16.4.4	node_modules/@polkadot/api-augment/node_modules/@polkadot/rpc-augment/
	esm 16.4.4	node_modules/@substrate/asset-transfer-api/node_modules/@polkadot/api/node_modules/@polkadot/rpc-augment/
@polkadot/keyring has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	esm 13.5.1	node_modules/@polkadot/keyring/
	esm 13.5.5	node_modules/@substrate/asset-transfer-api/node_modules/@polkadot/api/node_modules/@polkadot/keyring/
@polkadot/util-crypto has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	esm 13.5.1	node_modules/@polkadot/util-crypto/
	esm 13.5.5	node_modules/@polkadot/api-derive/node_modules/@polkadot/util-crypto/
	esm 13.5.1	node_modules/@polkadot/api-derive/node_modules/@polkadot/types/node_modules/@polkadot/util-crypto/
	esm 13.5.5	node_modules/@substrate/asset-transfer-api/node_modules/@polkadot/util-crypto/
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	esm 13.5.1	node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/rpc-augment/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/api/node_modules/@polkadot/rpc-provider/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/api-derive/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/rpc-core/node_modules/@polkadot/util/
	esm 13.5.1	node_modules/@polkadot/rpc-core/node_modules/@polkadot/types/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/types-create/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/types-codec/node_modules/@polkadot/util/
	esm 13.5.1	node_modules/@polkadot/api-derive/node_modules/@polkadot/types/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/types-known/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/api-augment/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@substrate/asset-transfer-api/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/rpc-provider/node_modules/@polkadot/util/
@polkadot/rpc-provider has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	esm 16.2.1	node_modules/@polkadot/api/node_modules/@polkadot/rpc-provider/
	esm 16.2.1	node_modules/@polkadot/rpc-core/node_modules/@polkadot/rpc-provider/
	esm 16.4.4	node_modules/@polkadot/rpc-provider/
@polkadot/api-derive has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	esm 16.2.1	node_modules/@polkadot/api-derive/
	esm 16.4.4	node_modules/@substrate/asset-transfer-api/node_modules/@polkadot/api/node_modules/@polkadot/api-derive/
@polkadot/rpc-core has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	esm 16.2.1	node_modules/@polkadot/rpc-core/
	esm 16.4.4	node_modules/@substrate/asset-transfer-api/node_modules/@polkadot/api/node_modules/@polkadot/rpc-core/
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	esm 13.5.1	node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/rpc-augment/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/api/node_modules/@polkadot/rpc-provider/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/api-derive/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/rpc-core/node_modules/@polkadot/util/
	esm 13.5.1	node_modules/@polkadot/rpc-core/node_modules/@polkadot/types/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/types-create/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/types-codec/node_modules/@polkadot/util/
	esm 13.5.1	node_modules/@polkadot/api-derive/node_modules/@polkadot/types/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/types-known/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/api-augment/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@substrate/asset-transfer-api/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/rpc-provider/node_modules/@polkadot/util/
	esm 13.5.5	node_modules/@polkadot/types/node_modules/@polkadot/util/
@polkadot/types has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	esm 16.2.1	node_modules/@polkadot/rpc-core/node_modules/@polkadot/types/
	esm 16.2.1	node_modules/@polkadot/api-derive/node_modules/@polkadot/types/
	esm 16.2.1	node_modules/@polkadot/api/node_modules/@polkadot/types/
	esm 16.4.4	node_modules/@polkadot/types/
@polkadot/types-create has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	esm 16.2.1	node_modules/@polkadot/types-create/
	esm 16.4.4	node_modules/@polkadot/types/node_modules/@polkadot/types-create/
@polkadot/types-codec has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	esm 16.2.1	node_modules/@polkadot/types-codec/
	esm 16.4.4	node_modules/@polkadot/types/node_modules/@polkadot/types-codec/
@polkadot/util-crypto has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	esm 13.5.1	node_modules/@polkadot/util-crypto/
	esm 13.5.5	node_modules/@polkadot/api-derive/node_modules/@polkadot/util-crypto/
	esm 13.5.1	node_modules/@polkadot/api-derive/node_modules/@polkadot/types/node_modules/@polkadot/util-crypto/
	esm 13.5.5	node_modules/@substrate/asset-transfer-api/node_modules/@polkadot/util-crypto/
	esm 13.5.5	node_modules/@polkadot/types/node_modules/@polkadot/util-crypto/
@polkadot/types-known has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	esm 16.2.1	node_modules/@polkadot/types-known/
	esm 16.4.4	node_modules/@substrate/asset-transfer-api/node_modules/@polkadot/api/node_modules/@polkadot/types-known/
@polkadot/types-create has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	esm 16.2.1	node_modules/@polkadot/types-create/
	esm 16.4.4	node_modules/@polkadot/types/node_modules/@polkadot/types-create/
	esm 16.4.4	node_modules/@substrate/asset-transfer-api/node_modules/@polkadot/api/node_modules/@polkadot/types-create/
@polkadot/types-codec has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	esm 16.2.1	node_modules/@polkadot/types-codec/
	esm 16.4.4	node_modules/@polkadot/types/node_modules/@polkadot/types-codec/
	esm 16.4.4	node_modules/@substrate/asset-transfer-api/node_modules/@polkadot/types-codec/
[2025-08-14 21:24:23] WARN: Failed to load plugin module '@elizaos/plugin-polkadot' using all relevant strategies.
[2025-08-14 21:24:23] ERROR: Failed to load module for plugin @elizaos/plugin-polkadot.
[2025-08-14 21:24:23] INFO: Final plugins being loaded:
    plugins: [
      "bootstrap",
      "@elizaos/plugin-sql",
      "openai"
    ]
[2025-08-14 21:24:24] INFO: plugin-sql init starting...
[2025-08-14 21:24:24] INFO: Database adapter created and registered
[2025-08-14 21:24:24] WARN: DatabaseMigrationService not found - plugin schema migrations skipped
[2025-08-14 21:24:24] INFO: [Polkadot] MessageBusService: Subscribing to internal message bus for 'new_message', 'message_deleted', and 'channel_cleared' events.
[2025-08-14 21:24:24.013 +0000] INFO: Running plugin migrations...
    agentName: "Polkadot"
    logLevel: "info"
[2025-08-14 21:24:24.013 +0000] INFO: Found 1 plugins with schemas to migrate.
    agentName: "Polkadot"
    logLevel: "info"
[2025-08-14 21:24:24.013 +0000] INFO: Running migrations for plugin: @elizaos/plugin-sql
    agentName: "Polkadot"
    logLevel: "info"
[2025-08-14 21:24:24.013 +0000] INFO: Successfully migrated plugin: @elizaos/plugin-sql
    agentName: "Polkadot"
    logLevel: "info"
[2025-08-14 21:24:24.013 +0000] INFO: Plugin migrations completed.
    agentName: "Polkadot"
    logLevel: "info"
```
</details>
