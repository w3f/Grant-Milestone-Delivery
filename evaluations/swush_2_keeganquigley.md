# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/swush-dex-aggregator.md
- **Milestone:** 2

| Number | Deliverable | Link | Notes |
| --- | --- | --- | --- |
| **0a.** | License | AGPLv3  | 
| **0b.** | Documentation | [High Level Documentation](https://github.com/swush-labs/swush-app/blob/dev-v2/docs/api/HIGH_LEVEL_DESIGN.md) | 
| **0c.** | Testing Guide | [Testing Guide](https://github.com/swush-labs/swush-app?tab=readme-ov-file#getting-started) | |
| **0d.** | Docker | [Dockerfile](https://github.com/swush-labs/swush-app/blob/dev-v2/docker-compose.yml) and [steps to run](https://github.com/swush-labs/swush-app?tab=readme-ov-file#docker-development-environment) | 
| **0e.** | Article | | 
| 1. | **Cross-Chain (XCM) APIs** | [XCM APIs and UI Integration](https://github.com/swush-labs/swush-app/blob/dev-v2/apps/web/src/components/swap/hooks/useAssetConversionSwap.ts) | 
| 2. | **Asset Balance** | [Balance API and UI Integration](https://github.com/swush-labs/swush-app/blob/dev-v2/apps/web/src/lib/api.ts#L119) | 
| 3. | **Slippage Control and Protection** | [Slippage Protection](https://github.com/swush-labs/swush-app/blob/dev-v2/apps/web/src/components/swap/hooks/useAssetConversionSwap.ts#L181-L243) | 
| 4. | **Real-time Fee Updates** | Preview in UI | 
| 5. | **Asset Pair Swap** | [Swap API and UI Integration](https://github.com/swush-labs/swush-app/blob/dev-v2/apps/web/src/components/swap/hooks/useAssetConversionSwap.ts) | 
| 6. | **Optimized Routing** | [Best route selection API](https://github.com/swush-labs/swush-app/blob/dev-v2/packages/api/src/routes/assets.ts#L24-L55) | 
| 7. | **Chopsticks simulation** | [Chopsticks config](https://github.com/swush-labs/swush-app/tree/dev-v2/packages/chopsticks/config) | 
| 8 | **User Transaction History** | [Supabase API](https://github.com/swush-labs/swush-app/blob/dev-v2/apps/web/src/services/swapHistoryService.ts) | 

# General Notes

`pnpm i` builds packages successfully. Web, API, and Chopsticks services all start successfully on their specified ports:

![Screenshot 2025-05-27 at 4 14 37 PM](https://github.com/user-attachments/assets/f3e2f3d6-8217-4430-bca4-5e95b2b656fa)

Docker starts successfully:
```ts
[+] Running 5/5
 ✔ api                        Built                                                                                                                                                                                   0.0s 
 ✔ web                        Built                                                                                                                                                                                   0.0s 
 ✔ Network swush-app_default  Created                                                                                                                                                                                 0.1s 
 ✔ Container swush-app-api-1  Created                                                                                                                                                                                 0.1s 
 ✔ Container swush-app-web-1  Created                                                                                                                                                                                 0.0s 
Attaching to api-1, web-1
api-1  | 
api-1  | > @swush/api@0.1.0 dev /app/packages/api
api-1  | > tsx watch src/server.ts
api-1  | 
web-1  | 
web-1  | > @swush/web@0.1.0 dev /app/apps/web
web-1  | > next dev
web-1  | 
web-1  |   ▲ Next.js 14.2.15
web-1  |   - Local:        http://localhost:3000
web-1  |   - Environments: .env.local, .env
web-1  | 
web-1  |  ✓ Starting...
web-1  |  ✓ Ready in 3.6s
api-1  | @polkadot/util has multiple versions, ensure that there is only one installed.
api-1  | Either remove and explicitly install matching versions or dedupe using your package manager.
api-1  | The following conflicting packages were found:
api-1  |        esm 13.5.1      node_modules/.pnpm/@polkadot+util@13.5.1/node_modules/@polkadot/util/
api-1  |        cjs 13.5.1      node_modules/.pnpm/@polkadot+util@13.5.1/node_modules/@polkadot/util/cjs
api-1  | @polkadot/util-crypto has multiple versions, ensure that there is only one installed.
api-1  | Either remove and explicitly install matching versions or dedupe using your package manager.
api-1  | The following conflicting packages were found:
api-1  |        esm 13.5.1      node_modules/.pnpm/@polkadot+util-crypto@13.5.1_@polkadot+util@13.5.1/node_modules/@polkadot/util-crypto/
api-1  |        cjs 13.5.1      node_modules/.pnpm/@polkadot+util-crypto@13.5.1_@polkadot+util@13.5.1/node_modules/@polkadot/util-crypto/cjs
api-1  | @polkadot/wasm-crypto has multiple versions, ensure that there is only one installed.
api-1  | Either remove and explicitly install matching versions or dedupe using your package manager.
api-1  | The following conflicting packages were found:
api-1  |        esm 7.4.1       node_modules/.pnpm/@polkadot+wasm-crypto@7.4.1_@polkadot+util@13.5.1_@polkadot+x-randomvalues@13.5.1_@polkadot+u_wcbejs6wtiypexcbquv7qpimcy/node_modules/@polkadot/wasm-crypto/
api-1  |        cjs 7.4.1       node_modules/.pnpm/@polkadot+wasm-crypto@7.4.1_@polkadot+util@13.5.1_@polkadot+x-randomvalues@13.5.1_@polkadot+u_wcbejs6wtiypexcbquv7qpimcy/node_modules/@polkadot/wasm-crypto/cjs
api-1  | @polkadot/wasm-bridge has multiple versions, ensure that there is only one installed.
api-1  | Either remove and explicitly install matching versions or dedupe using your package manager.
api-1  | The following conflicting packages were found:
api-1  |        esm 7.4.1       node_modules/.pnpm/@polkadot+wasm-bridge@7.4.1_@polkadot+util@13.5.1_@polkadot+x-randomvalues@13.5.1_@polkadot+u_j5jc7lfxbukdyjmvog6lsgygc4/node_modules/@polkadot/wasm-bridge/
api-1  |        cjs 7.4.1       node_modules/.pnpm/@polkadot+wasm-bridge@7.4.1_@polkadot+util@13.5.1_@polkadot+x-randomvalues@13.5.1_@polkadot+u_j5jc7lfxbukdyjmvog6lsgygc4/node_modules/@polkadot/wasm-bridge/cjs
api-1  | @polkadot/wasm-crypto-wasm has multiple versions, ensure that there is only one installed.
api-1  | Either remove and explicitly install matching versions or dedupe using your package manager.
api-1  | The following conflicting packages were found:
api-1  |        esm 7.4.1       node_modules/.pnpm/@polkadot+wasm-crypto-wasm@7.4.1_@polkadot+util@13.5.1/node_modules/@polkadot/wasm-crypto-wasm/
api-1  |        cjs 7.4.1       node_modules/.pnpm/@polkadot+wasm-crypto-wasm@7.4.1_@polkadot+util@13.5.1/node_modules/@polkadot/wasm-crypto-wasm/cjs
api-1  | @polkadot/wasm-util has multiple versions, ensure that there is only one installed.
api-1  | Either remove and explicitly install matching versions or dedupe using your package manager.
api-1  | The following conflicting packages were found:
api-1  |        esm 7.4.1       node_modules/.pnpm/@polkadot+wasm-util@7.4.1_@polkadot+util@13.5.1/node_modules/@polkadot/wasm-util/
api-1  |        cjs 7.4.1       node_modules/.pnpm/@polkadot+wasm-util@7.4.1_@polkadot+util@13.5.1/node_modules/@polkadot/wasm-util/cjs
api-1  | @polkadot/types has multiple versions, ensure that there is only one installed.
api-1  | Either remove and explicitly install matching versions or dedupe using your package manager.
api-1  | The following conflicting packages were found:
api-1  |        esm 15.10.2     node_modules/.pnpm/@polkadot+types@15.10.2/node_modules/@polkadot/types/
api-1  |        cjs 15.10.2     node_modules/.pnpm/@polkadot+types@15.10.2/node_modules/@polkadot/types/cjs
api-1  | @polkadot/types-create has multiple versions, ensure that there is only one installed.
api-1  | Either remove and explicitly install matching versions or dedupe using your package manager.
api-1  | The following conflicting packages were found:
api-1  |        esm 15.10.2     node_modules/.pnpm/@polkadot+types-create@15.10.2/node_modules/@polkadot/types-create/
api-1  |        cjs 15.10.2     node_modules/.pnpm/@polkadot+types-create@15.10.2/node_modules/@polkadot/types-create/cjs
api-1  | @polkadot/types-codec has multiple versions, ensure that there is only one installed.
api-1  | Either remove and explicitly install matching versions or dedupe using your package manager.
api-1  | The following conflicting packages were found:
api-1  |        esm 15.10.2     node_modules/.pnpm/@polkadot+types-codec@15.10.2/node_modules/@polkadot/types-codec/
api-1  |        cjs 15.10.2     node_modules/.pnpm/@polkadot+types-codec@15.10.2/node_modules/@polkadot/types-codec/cjs
api-1  | Initializing network connections...
api-1  | Connected to wss://polkadot-asset-hub-rpc.polkadot.io using PAPI
api-1  | Server is running on port 3001
api-1  | Connected to wss://hydradx-rpc.dwellir.com
api-1  | Connected to wss://hydradx-rpc.dwellir.com using Polkadot API
api-1  | All network connections initialized
api-1  | Initializing trade router...
api-1  | Syncing registry with 0 assets
api-1  | TradeRouterService initialized successfully
api-1  | Initializing asset service...
api-1  | All assets and metadata fetched and cached
api-1  | Cache initialized for merged_assets
api-1  | AssetService initialized successfully
api-1  | ✅ SDK initialized successfully 🚀
web-1  |  ○ Compiling / ...
web-1  |  ✓ Compiled / in 16s (3345 modules)
web-1  |  GET / 200 in 16918ms
web-1  |  ✓ Compiled in 1273ms (1556 modules)
web-1  |  ○ Compiling /favicon.ico ...
web-1  |  ✓ Compiled /favicon.ico in 10.6s (1811 modules)
web-1  |  GET /favicon.ico 200 in 10720ms
```
Chopsticks starts successfully when run separately:
```ts
> swush-me@0.1.0 start-chopsticks /workspaces/swush-app
> npx @acala-network/chopsticks xcm -p packages/chopsticks/config/polkadot_asset_hub.yml -p packages/chopsticks/config/hydration.yml

[20:26:15.893] INFO: Polkadot Asset Hub RPC listening on http://[::]:3421 and ws://[::]:3421
    app: "chopsticks"
[20:26:19.697] INFO: Hydration RPC listening on http://[::]:3422 and ws://[::]:3422
    app: "chopsticks"
[20:26:20.074] INFO (xcm): Connected parachains [1000,2034]
    app: "chopsticks"
```

## Testing

`pnpm lint` comes back clear:
```ts
@keeganquigley ➜ /workspaces/swush-app (dev-v2) $ pnpm lint

> swush-me@0.1.0 lint /workspaces/swush-app
> pnpm -r lint

Scope: 2 of 3 workspace projects
apps/web lint$ next lint
│ ✔ No ESLint warnings or errors
└─ Done in 14.9s
packages/api lint$ eslint services --ext .ts
└─ Done in 13.6s
```

Unit tests all passing:
```ts
packages/api test$ jest --config=jest.config.js
[442 lines collapsed]
│       60 |                 return null;
│       61 |             }
│       62 |
│       at AssetHubRouter.findBestRoute (services/assets/router/AssetHubRouter.ts:59:25)
│       at Object.<anonymous> (services/assets/router/__tests__/AssetHubRouter.test.ts:35:41)
│ Test Suites: 5 passed, 5 total
│ Tests:       36 passed, 36 total
│ Snapshots:   0 total
│ Time:        34.963 s
│ Ran all test suites.
└─ Done in 38.1s
```
