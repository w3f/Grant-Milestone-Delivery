# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/xcmsend.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a.    |  License | <ul><li>[x] </li></ul> | [XcmSend/app-v0.0.1](https://github.com/XcmSend/app-v0.0.1/blob/5b1e55b64fd8d9e44dd5c2d10e0b74c2a0c81fa6/LICENSE) | MIT |
| 0b | Documentation | <ul><li>[x] </li></ul> | [XcmSend/xcmsend.github.io](https://github.com/XcmSend/xcmsend.github.io/tree/74afe11c4c0e3f810c01b33df453916749e88e5a) | Also https://xcmsend.github.io |
| 0c      | Testing and Testing Guide | <ul><li>[x] </li></ul> | [XcmSend/xcmsend.github.io](https://github.com/XcmSend/xcmsend.github.io/blob/74afe11c4c0e3f810c01b33df453916749e88e5a/src/tests/readme.md) | Tests amended on request |
| 0d      | Docker | <ul><li>[x] </li></ul> | [XcmSend/DockerBuild](https://github.com/XcmSend/DockerBuild/tree/7bad3705ffa5a1d27566e6be578a28cb76e3ae75) | — |
| 0e      | Article | <ul><li>[x] </li></ul> | [medium.com](https://decentration.medium.com/a-workflow-builder-adds-a-playground-on-top-of-cross-chain-infrastructure-25222617ed8) | Basic intro |
| 1      | XCMSend UI (MVP) | <ul><li>[x] </li></ul> | [XcmSend/app-v0.0.1](https://github.com/XcmSend/app-v0.0.1/tree/5b1e55b64fd8d9e44dd5c2d10e0b74c2a0c81fa6) | deployed at https://app.xcmsend.com/ |
| 2      | Browser wallet integration | <ul><li>[x] </li></ul> | [XcmSend/app-v0.0.1](https://github.com/XcmSend/app-v0.0.1/tree/5b1e55b64fd8d9e44dd5c2d10e0b74c2a0c81fa6/src/components/Wallet) | Uses `subwallet/wallet-connect`. Tested with polkadot.js extension and Talisman. Also supports Subwallet, Fearless and Nova. |
| 3      | Rococo XCM Transfers | <ul><li>[x] </li></ul> | [XcmSend/app-v0.0.1](https://github.com/XcmSend/app-v0.0.1/blob/5b1e55b64fd8d9e44dd5c2d10e0b74c2a0c81fa6/src/Chains/ChainsInfo.tsx#L74-L78) | Skipped Rococo due to issues, went straight to Polkadot, AssetHub and HydraDX |


## General Notes

- Tested Polkadot -> AssetHub DOT transfer successfully
- Inline documentation could be improved
- Minor UI issues:
  - Button text in dark mode invisible
  - On Firefox, dropdown text is hard to read (black on gray) 
  - Unclear why empty canvas requires clicking "New Scenario" (`Attempt to add node with empty scenario ID`)


#### Test output

```sh
❯ yarn run test
yarn run v1.22.19
warning package.json: "dependencies" has dependency "@types/react" with range "^17.0.20" that collides with a dependency in "devDependencies" of the same name with version "^18.2.15"
warning package.json: "dependencies" has dependency "@types/react-dom" with range "^17.0.9" that collides with a dependency in "devDependencies" of the same name with version "^18.2.7"
$ npx tsx src/tests/run_tests.ts
@polkadot/wasm-bridge has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	esm 7.2.2	node_modules/@polkadot/wasm-crypto/node_modules/@polkadot/wasm-bridge/
	esm 7.2.2	node_modules/@polkadot/wasm-crypto-init/node_modules/@polkadot/wasm-bridge/
Running tests
Running Balance tests
running transaction tests
[test] Polkadot transfers
Polkadot DOT > assethub OK
drafting dot to hydradx
[dotTohydraDx] tx created!
[dotTohydraDx] tx to hex 0xec04630803000100c91f030001010068de6e1566e333753df02b2446f24e1cc2b796cfdf954dc0f39753c578e02a40030400000000e5140000000000
Polkadot DOT > hydradx OK
[test] AssetHub transfers
2023-10-06 11:32:26        API/INIT: statemint/9430: Not decorating runtime apis without matching versions: FungiblesApi/2 (1 known)
Assethub > hydradx ok
2023-10-06 11:32:27        API/INIT: statemint/9430: Not decorating runtime apis without matching versions: FungiblesApi/2 (1 known)
Assethub > Polkadot ok
[test] HydraDx transfers
2023-10-06 11:32:27        REGISTRY: Unknown signed extensions ValidateClaim found, treating them as no-effect
Hydradx > assethub ok
2023-10-06 11:32:27        REGISTRY: Unknown signed extensions ValidateClaim found, treating them as no-effect
Hydradx > polkadot ok
all transaction tests are ok!
test completed

```