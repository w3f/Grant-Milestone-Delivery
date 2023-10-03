# Profond.ai Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Profond.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by nikw3f

| Number | Deliverable                            | Accepted               | Link                                                                                                                                                                                                                                                                                                                                              | Notes |
| ------ | -------------------------------------- | -----------------------| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| 0a.    | License                                | <ul><li>[x] </li></ul> | https://github.com/profondHQ/profond-psp22-contract/blob/master/LICENSE                                                                                                                                                                                                                                                                           |  MIT     |
| 0b.    | Documentation                          | <ul><li>[x] </li></ul> | User document at: https://profond.gitbook.io/docs/ . API documentation is on the backend API swagger: https://github.com/profondHQ/profond-backend-api                                                                                                                                                                                            | Documentation looks good.      |
| 0c.    | Testing and Testing Guide              | <ul><li>[x] </li></ul> | PSP22 Tests: https://github.com/profondHQ/profond-psp22-contract/tree/master/tests . PSP34 Tests: https://github.com/profondHQ/paras-ink-nft-launchpad-contract/tree/main/tests. API Tests: https://github.com/profondHQ/profond-backend-api/tree/master/test. Test cases: https://drive.google.com/file/d/10p3J6sO9N9L2nulLg66I11lnUcQdj5ws/view | Able to run tests for contracts.     |
| 0d.    | Article                                | <ul><li>[x] </li></ul> | Article published at https://medium.com/@profond.ai/introducing-profond-ai-no-code-platform-for-creators-to-create-an-nft-and-coins-740bba361253                                                                                                                                                                                                  | Article looks good.      |
| 1.     | No Code NFT Creation (ink!)            | <ul><li>[x] </li></ul> | Live at: https://profond.ai/. FE code: https://github.com/profondHQ/launchpad . Contract used: https://github.com/profondHQ/paras-ink-nft-launchpad-contract                                                                                                                                                                                      | Able to create PSP34 NFT and deploy on rococo and shibuya chains.      |
| 2.     | No Code Fungible Token Creation (ink!) | <ul><li>[x] </li></ul> | Live at: https://profond.ai/. FE code: https://github.com/profondHQ/launchpad . Contract used: https://github.com/profondHQ/profond-psp22-contract                                                                                                                                                                                                | Able to create PSP22 Token and deploy on rococo and shibuya chains.     |
| 3.     | Project Management Module              | <ul><li>[x] </li></ul> | BE code is at https://github.com/profondHQ/profond-backend-api and handles create and query of NFT collections and Fungible Tokens (Coins). Indexer code: https://github.com/profondHQ/profond-indexer, every successful creation of a smart contract will be automatically listed by the indexer.                                                | Able to run and test backend API and subsuid indexer.     |
| 4.     | Multichain Integration                 | <ul><li>[x] </li></ul> | Users can change between multiple chains, try it at https://profond.ai. FE code: https://github.com/profondHQ/launchpad                                                                                                                                                                                                                           | Able to switch between multiple chain.    |

# General Notes

NFT collection and coin creation works. One sample NFT creation extrinsic is here https://shibuya.subscan.io/extrinsic/4775394-2. 
Coin creation is here https://shibuya.subscan.io/extrinsic/4718105-2. The application is able to index the collection after upload. 
Documentation is good. The application is able to switch between chains.

I would recommend to add more tests and a docker compose file to run the system locally. Docker allows to have dependencies like mongodb to be run locally.

# Testing

### Contracts

I am able to build and test PSP22 and NFT contracts.

```
± |master ✓| → yarn compile
yarn run v1.22.19
$ mkdir artifacts; cd contracts/base_token; cargo +nightly-2023-03-13 contract build --release; cd ../../; cp target/ink/base_token/base_token.* artifacts/; mkdir types; typechain-compiler -r --noCompile
mkdir: cannot create directory ‘artifacts’: File exists
 [1/5] Building cargo project
    Updating crates.io index
    Updating git repository `https://github.com/emarai/openbrush-contracts`
    Updating git repository `https://github.com/727-ventures/pallet-assets-chain-extension`
    Updating git repository `https://github.com/727-Ventures/obce`
   Compiling psp22_extension_pkg v1.0.0 (/tmp/cargo-contract_WkcOxy/logics)
   Compiling base_token v1.0.0 (/tmp/cargo-contract_WkcOxy/contracts/base_token)
    Finished release [optimized] target(s) in 10.72s
 [2/5] Post processing wasm file
 [3/5] Optimizing wasm file
 [4/5] Generating metadata
    Updating crates.io index
    Updating git repository `https://github.com/emarai/openbrush-contracts`
    Updating git repository `https://github.com/727-ventures/pallet-assets-chain-extension`
    Updating git repository `https://github.com/727-Ventures/obce`
   Compiling psp22_extension_pkg v1.0.0 (/tmp/cargo-contract_EfN4JG/logics)
   Compiling base_token v1.0.0 (/tmp/cargo-contract_EfN4JG/contracts/base_token)
   Compiling metadata-gen v0.1.0 (/tmp/cargo-contract_EfN4JG/contracts/base_token/.ink/metadata_gen)
    Finished release [optimized] target(s) in 4.05s
     Running `/home/nikhil/w3f/profond-psp22-contract/target/ink/base_token/release/metadata-gen ''`
 [5/5] Generating bundle

Original wasm size: 36.8K, Optimized: 12.2K

The contract was built in RELEASE mode.

Your contract artifacts are ready. You can find them in:
/home/nikhil/w3f/profond-psp22-contract/target/ink/base_token

  - base_token.contract (code + metadata)
  - base_token.wasm (the contract's code)
  - metadata.json (the contract's metadata)
mkdir: cannot create directory ‘types’: File exists
======== Compiling Typechain' code ========                                                                                                                                                    3:38:37 PM
======== Compiled Typechain' code ========                                                                                                                                                     3:38:39 PM
Done in 18.82s.

```

Created PR to fix build and type generations commands: 

https://github.com/profondHQ/profond-psp22-contract/pull/4
https://github.com/profondHQ/profond-psp22-contract/pull/5

I am able to deploy the contracts on rococo contracts chain:
![Screenshot from 2023-10-03 16-19-44](https://github.com/w3f/Grant-Milestone-Delivery/assets/142136841/d02f978c-eecc-4f41-ac51-76f468e01871)
![Screenshot from 2023-10-03 16-18-41](https://github.com/w3f/Grant-Milestone-Delivery/assets/142136841/ca5812fb-061c-473d-845b-82f28407905d)



I am able to test transfer function:
![Screenshot from 2023-10-03 16-20-03](https://github.com/w3f/Grant-Milestone-Delivery/assets/142136841/6b8077cf-f71b-4323-880c-f0c659bc6e8b)


### Backend

I am able to start backend:

```
[4:45:37 PM] Starting compilation in watch mode...

[4:45:38 PM] Found 0 errors. Watching for file changes.

[Nest] 27092  - 10/03/2023, 4:45:38 PM     LOG [NestFactory] Starting Nest application...
[Nest] 27092  - 10/03/2023, 4:45:38 PM     LOG [InstanceLoader] MongooseModule dependencies initialized +10ms
[Nest] 27092  - 10/03/2023, 4:45:38 PM     LOG [InstanceLoader] AppModule dependencies initialized +0ms
[Nest] 27092  - 10/03/2023, 4:45:41 PM     LOG [InstanceLoader] MongooseCoreModule dependencies initialized +3051ms
[Nest] 27092  - 10/03/2023, 4:45:41 PM     LOG [InstanceLoader] MongooseModule dependencies initialized +14ms
[Nest] 27092  - 10/03/2023, 4:45:41 PM     LOG [InstanceLoader] MongooseModule dependencies initialized +0ms
[Nest] 27092  - 10/03/2023, 4:45:41 PM     LOG [InstanceLoader] CoinModule dependencies initialized +0ms
[Nest] 27092  - 10/03/2023, 4:45:41 PM     LOG [InstanceLoader] CollectionModule dependencies initialized +0ms
[Nest] 27092  - 10/03/2023, 4:45:41 PM     LOG [RoutesResolver] AppController {/}: +21ms
[Nest] 27092  - 10/03/2023, 4:45:41 PM     LOG [RouterExplorer] Mapped {/, GET} route +1ms
[Nest] 27092  - 10/03/2023, 4:45:41 PM     LOG [RoutesResolver] CoinController {/coins}: +0ms
[Nest] 27092  - 10/03/2023, 4:45:41 PM     LOG [RouterExplorer] Mapped {/coins, GET} route +1ms
[Nest] 27092  - 10/03/2023, 4:45:41 PM     LOG [RoutesResolver] CollectionController {/collections}: +0ms
[Nest] 27092  - 10/03/2023, 4:45:41 PM     LOG [RouterExplorer] Mapped {/collections, GET} route +0ms
[Nest] 27092  - 10/03/2023, 4:45:41 PM     LOG [NestApplication] Nest application successfully started +1ms
```

I am able to run tests for backend:

```
➜  profond-backend-api git:(master) yarn
yarn install v1.22.19
[1/4] 🔍  Resolving packages...
success Already up-to-date.
✨  Done in 0.12s.
➜  profond-backend-api git:(master) yarn test
yarn run v1.22.19
$ jest
 PASS  src/app.controller.spec.ts
 PASS  src/coin/coin.service.spec.ts (6.33 s)
 PASS  src/collection/collection.service.spec.ts (6.333 s)
A worker process has failed to exit gracefully and has been force exited. This is likely caused by tests leaking due to improper teardown. Try running with --detectOpenHandles to find leaks. Active timers can also cause this, ensure that .unref() was called on them.

Test Suites: 3 passed, 3 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        6.985 s
Ran all test suites.
✨  Done in 7.63s.
```


### Frontend   

I am able to run launchpad frontend:

```
➜  launchpad git:(main) yarn dev
yarn run v1.22.19
$ NODE_OPTIONS="--max_old_space_size=4096" next dev
- warn Port 3000 is in use, trying 3001 instead.
- ready started server on 0.0.0.0:3001, url: http://localhost:3001
Attention: Next.js now collects completely anonymous telemetry regarding usage.
This information is used to shape Next.js' roadmap and prioritize features.
You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
https://nextjs.org/telemetry

- event compiled client and server successfully in 101 ms (20 modules)
```

<img width="1468" alt="Screenshot 2023-10-03 at 16 53 35" src="https://github.com/w3f/Grant-Milestone-Delivery/assets/142136841/448f0707-9659-4e6d-995d-b65ca7e51a91">

