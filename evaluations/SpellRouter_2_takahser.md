# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/SpellRouter-proposal.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [MIT XCM Router](https://github.com/paraspell/xcm-router/blob/main/LICENSE), [MIT API](https://github.com/paraspell/xcm-api/blob/main/LICENSE) ,[MIT DOCS](https://github.com/paraspell/docs/blob/main/LICENSE) | - |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [XCM Router Readme.md](https://github.com/paraspell/xcm-router/blob/main/README.md), [Official SpellRouter documentation](https://paraspell.github.io/docs/router/getting-strtd.html) | - |
| 0c. | Testing and Testing Guide | <ul><li>[ ] </li></ul> | [Router Testing Guide](https://github.com/paraspell/xcm-router/tree/2f2bc4e4e42d360b753557b4bf301a0a702a2c1a#-development--testing), [API Testing Guide](https://github.com/paraspell/xcm-api/tree/1471c7d0eebf71a84f5612490ccaa3dbe8a25b61#tests) | see [Testing Feedback](#testing-feedback)|
| 0e. | Create Medium article about development of latest XCM Router | <ul><li>[x] </li></ul> | [Medium Article (Draft)](https://medium.com/@dudo50/xcm-router-phase-2-innovations-and-advancement-in-state-of-the-c84beacd4727) | - |
| 1. | Integrate automatic exchange chain selection into XCM Router | <ul><li>[x] </li></ul> | [`selectBestExchange` function](https://github.com/paraspell/xcm-router/blob/2f2bc4e4e42d360b753557b4bf301a0a702a2c1a/src/transfer/selectBestExchange.ts#L23-L78) | - |
| 2. | Integrate XCM Router into LightSpell XCM API | <ul><li>[x] </li></ul> | [Commit adding XCM Router into XCM API](https://github.com/paraspell/xcm-api/commit/a26e7245dfad40f9aaf1cab7c6d17d96e21ab142) | - |
|3.a| Update unit tests for new XCM Router functionalities | <ul><li>[x] </li></ul> | [Commit adding core unit tests for new XCM Router functionalities](https://github.com/paraspell/xcm-router/commit/6a5fc8a53bce38cf23207f04620cc3f83c942eb1) | - |
|3.b| Create integration tests for XCM Router | <ul><li>[x] </li></ul> | [Commit adding core integration tests for XCM Router](https://github.com/paraspell/xcm-router/commit/6a5fc8a53bce38cf23207f04620cc3f83c942eb1) | - |
|3.c| Update integration, unit and e2e tests for LightSpell XCM API | <ul><li>[x] </li></ul> | [Commit adding core e2e tests for XCM API](https://github.com/paraspell/xcm-api/commit/a26e7245dfad40f9aaf1cab7c6d17d96e21ab142) | - |
| 4.a | Cover latest automatic exchange chain selection in XCM Router section (Docs) | <ul><li>[x] </li></ul> | [PR adding documentation for latest XCM Router automatic chain selection mechanism](https://github.com/paraspell/docs/pull/5) | - |
| 4.b | Cover XCM Router integration in XCM API  section (Docs) | <ul><li>[x] </li></ul> | [docs repo](https://github.com/paraspell/docs/tree/2b9804d2afa6ec31c3cf9bea112020244f7e297a) | - |

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

Summarizes the overall performance plus additional feedback/comments

### Testing Feedback

- [x] dependency installation

    <details>
    <summary>Output</summary>

    ```zsh
    % yarn install
    yarn install v1.22.19
    [1/5] 🔍  Validating package.json...
    [2/5] 🔍  Resolving packages...
    warning Resolution field "@acala-network/eth-providers@2.7.5-1" is incompatible with requested version "@acala-network/eth-providers@~2.7.3"
    warning Resolution field "@crypto-dex-sdk/chain@0.0.4" is incompatible with requested version "@crypto-dex-sdk/chain@0.0.2"
    warning Resolution field "@crypto-dex-sdk/chain@0.0.4" is incompatible with requested version "@crypto-dex-sdk/chain@0.0.2"
    warning Resolution field "@crypto-dex-sdk/chain@0.0.4" is incompatible with requested version "@crypto-dex-sdk/chain@0.0.3"
    warning Resolution field "@crypto-dex-sdk/chain@0.0.4" is incompatible with requested version "@crypto-dex-sdk/chain@0.0.2"
    [3/5] 🚚  Fetching packages...
    warning Pattern ["@polkadot/api@latest"] is trying to unpack in the same destination "/Users/xxx/Library/Caches/Yarn/v6/npm-@polkadot-api-10.11.2-16cd07062d51cc9cf77a3a6afa3cb4e526e44a82-integrity/node_modules/@polkadot/api" as pattern ["@polkadot/api@^10.9.1","@polkadot/api@^10.9.1","@polkadot/api@10.11.2","@polkadot/api@^10.9.1","@polkadot/api@^10.9.1","@polkadot/api@^10.0.1","@polkadot/api@10.11.2","@polkadot/api@^10.11.1","@polkadot/api@^10.11.1","@polkadot/api@^10.7.3","@polkadot/api@^10.9.1"]. This could result in non-deterministic behavior, skipping.
    [4/5] 🔗  Linking dependencies...
    warning " > @acala-network/eth-providers@2.7.5-1" has incorrect peer dependency "@acala-network/api@5.1.2-7".
    warning "@acala-network/eth-providers > @acala-network/eth-transactions@2.7.5-1" has unmet peer dependency "@polkadot/util-crypto@^12.1.2".
    warning "@acala-network/eth-providers > graphql-request@3.6.1" has incorrect peer dependency "graphql@14.x || 15.x".
    warning " > @acala-network/sdk@4.1.9-12" has incorrect peer dependency "@acala-network/api@^5".
    warning " > @acala-network/sdk@4.1.9-12" has unmet peer dependency "ethers@~5.7.0".
    warning " > @acala-network/sdk-core@4.1.9-12" has unmet peer dependency "@acala-network/types@^6".
    warning " > @acala-network/sdk-swap@4.1.9-12" has unmet peer dependency "@acala-network/types@^6".
    warning "@crypto-dex-sdk/amm > @crypto-dex-sdk/currency@0.0.2" has unmet peer dependency "react-dom@^18.2.0".
    warning "@crypto-dex-sdk/parachains-bifrost > @zenlink-types/bifrost > @open-web3/api-mobx@0.9.4-38" has incorrect peer dependency "@polkadot/api@5.*".
    warning "@crypto-dex-sdk/parachains-bifrost > @zenlink-types/bifrost > @open-web3/orml-types@0.9.4-38" has incorrect peer dependency "@polkadot/api@5.*".
    warning "@crypto-dex-sdk/parachains-bifrost > @zenlink-types/bifrost > @open-web3/orml-types@0.9.4-38" has incorrect peer dependency "@polkadot/typegen@5.*".
    warning " > @crypto-dex-sdk/token-lists@0.0.2" has unmet peer dependency "@ethersproject/address@^5.7.0".
    warning " > @crypto-dex-sdk/token-lists@0.0.2" has incorrect peer dependency "@crypto-dex-sdk/currency@0.0.2".
    warning " > @crypto-dex-sdk/token-lists@0.0.2" has unmet peer dependency "@crypto-dex-sdk/format@0.0.2".
    warning " > @galacticcouncil/sdk@1.1.1" has unmet peer dependency "@polkadot/api-augment@^10.9.1".
    warning " > @galacticcouncil/sdk@1.1.1" has unmet peer dependency "@polkadot/api-derive@^10.9.1".
    warning " > @galacticcouncil/sdk@1.1.1" has unmet peer dependency "@polkadot/rpc-augment@^10.9.1".
    warning " > @galacticcouncil/sdk@1.1.1" has unmet peer dependency "@polkadot/rpc-core@^10.9.1".
    warning " > @galacticcouncil/sdk@1.1.1" has unmet peer dependency "@polkadot/rpc-provider@^10.9.1".
    warning " > @galacticcouncil/sdk@1.1.1" has unmet peer dependency "@polkadot/types-augment@^10.9.1".
    warning " > @galacticcouncil/sdk@1.1.1" has unmet peer dependency "@polkadot/types-codec@^10.9.1".
    warning " > @galacticcouncil/sdk@1.1.1" has unmet peer dependency "@polkadot/types-create@^10.9.1".
    warning " > @galacticcouncil/sdk@1.1.1" has unmet peer dependency "@polkadot/types-known@^10.9.1".
    warning " > @galacticcouncil/sdk@1.1.1" has unmet peer dependency "@polkadot/keyring@^12.3.2".
    warning " > @galacticcouncil/sdk@1.1.1" has unmet peer dependency "@polkadot/util-crypto@^12.3.2".
    warning " > @mangata-finance/sdk@2.1.2" has incorrect peer dependency "@polkadot/api@10.9.1".
    warning "@mangata-finance/sdk > @mangata-finance/type-definitions@2.0.0" has incorrect peer dependency "@polkadot/types@10.9.1".
    warning "@polkadot/apps-config > @polkadot/react-identicon@3.6.4" has unmet peer dependency "@polkadot/keyring@*".
    warning "@polkadot/apps-config > @polkadot/react-identicon@3.6.4" has unmet peer dependency "@polkadot/util-crypto@*".
    warning "@polkadot/apps-config > @polkadot/react-identicon@3.6.4" has unmet peer dependency "react-dom@*".
    warning "@polkadot/apps-config > @polkadot/react-identicon@3.6.4" has unmet peer dependency "react-is@*".
    warning "@polkadot/apps-config > @digitalnative/type-definitions > @polkadot/keyring@6.11.1" has incorrect peer dependency "@polkadot/util@6.11.1".
    warning "@polkadot/apps-config > @digitalnative/type-definitions > @polkadot/keyring@6.11.1" has unmet peer dependency "@polkadot/util-crypto@6.11.1".
    warning "@polkadot/apps-config > @polkadot/react-identicon > styled-components@6.1.2" has unmet peer dependency "react-dom@>= 16.8.0".
    warning "@polkadot/apps-config > @snowfork/snowbridge-types > @polkadot/keyring@8.7.1" has incorrect peer dependency "@polkadot/util@8.7.1".
    warning "@polkadot/apps-config > @snowfork/snowbridge-types > @polkadot/keyring@8.7.1" has unmet peer dependency "@polkadot/util-crypto@8.7.1".
    warning "@polkadot/apps-config > pontem-types-bundle > @polkadot/keyring@7.9.2" has incorrect peer dependency "@polkadot/util@7.9.2".
    warning "@polkadot/apps-config > pontem-types-bundle > @polkadot/keyring@7.9.2" has unmet peer dependency "@polkadot/util-crypto@7.9.2".
    warning " > @typescript-eslint/eslint-plugin@6.15.0" has unmet peer dependency "@typescript-eslint/parser@^6.0.0 || ^6.0.0-alpha".
    warning " > ts-node@10.9.2" has unmet peer dependency "@types/node@*".
    [5/5] 🔨  Building fresh packages...
    $ patch-package
    patch-package 8.0.0
    Applying patches...
    @galacticcouncil/sdk@0.7.7 ✔
    @interlay/interbtc-api@2.6.0 ✔

    Warning: patch-package detected a patch file version mismatch

    Don't worry! This is probably fine. The patch was still applied
    successfully. Here's the deets:

    Patch file created for

        @galacticcouncil/sdk@0.7.7

    applied to

        @galacticcouncil/sdk@1.1.1
    
    At path
    
        node_modules/@galacticcouncil/sdk

    This warning is just to give you a heads-up. There is a small chance of
    breakage even though the patch was applied successfully. Make sure the package
    still behaves like you expect (you wrote tests, right?) and then run

        patch-package @galacticcouncil/sdk

    to update the version in the patch file name and make this warning go away.

    ---
    patch-package finished with 1 warning(s).
    ✨  Done in 24.23s.
    ```
    </details>

- [x] compilation test run
  
  <details>
    <summary>Output</summary>

    ```zsh
    % yarn compile


    yarn run v1.22.19
    $ tsc --noEmit
    ✨  Done in 3.11s.
    ```
  </details>

- [x] linting test run
  
  <details>
    <summary>Output</summary>

    ```zsh
    % yarn lint

    yarn run v1.22.19
    $ eslint --fix src --ext .ts
    ✨  Done in 5.30s.
    ```
  </details>

- [x] unit test run
  
  <details>
    <summary>Output</summary>

    ```zsh
    % yarn test
    yarn run v1.22.19
    $ vitest

    DEV  v1.1.0 /Users/seraya/repos/xcm-router

    stderr | warn (/Users/seraya/repos/xcm-router/node_modules/@polkadot/util/cjs/versionDetect.js:70:13)
    @polkadot/util has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 12.6.2      node_modules/@polkadot/util/
            cjs 12.6.2      node_modules/@polkadot/util/cjs

    stderr | warn (/Users/seraya/repos/xcm-router/node_modules/@polkadot/util/cjs/versionDetect.js:70:13)
    @polkadot/util has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 12.6.2      node_modules/@polkadot/util/
            cjs 12.6.2      node_modules/@polkadot/util/cjs

    stderr | warn (/Users/seraya/repos/xcm-router/node_modules/@polkadot/util/cjs/versionDetect.js:70:13)
    @polkadot/util has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 12.6.2      node_modules/@polkadot/util/
            cjs 12.6.2      node_modules/@polkadot/util/cjs

    stderr | warn (/Users/seraya/repos/xcm-router/node_modules/@polkadot/util/cjs/versionDetect.js:70:13)
    @polkadot/util has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 12.6.2      node_modules/@polkadot/util/
            cjs 12.6.2      node_modules/@polkadot/util/cjs

    stderr | warn (/Users/seraya/repos/xcm-router/node_modules/@polkadot/util/cjs/versionDetect.js:70:13)
    @polkadot/util has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 12.6.2      node_modules/@polkadot/util/
            cjs 12.6.2      node_modules/@polkadot/util/cjs

    stderr | warn (/Users/seraya/repos/xcm-router/node_modules/@polkadot/util/cjs/versionDetect.js:70:13)
    @polkadot/rpc-augment has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-augment/
            cjs 10.11.2     node_modules/@polkadot/rpc-augment/cjs
    @polkadot/util-crypto has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 12.6.2      node_modules/@polkadot/util-crypto/
            cjs 12.6.2      node_modules/@polkadot/util-crypto/cjs
    @polkadot/wasm-crypto has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto/
            cjs 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto/cjs
    @polkadot/wasm-bridge has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-bridge/
            cjs 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-bridge/cjs
    @polkadot/wasm-crypto-wasm has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto-wasm/
            cjs 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto-wasm/cjs
    @polkadot/wasm-util has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/wasm-util/
            cjs 7.3.2       node_modules/@polkadot/wasm-util/cjs
    @polkadot/types has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types/
            cjs 10.11.2     node_modules/@polkadot/types/cjs
    @polkadot/types-create has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-create/
            cjs 10.11.2     node_modules/@polkadot/types-create/cjs
    @polkadot/types-codec has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-codec/
            cjs 10.11.2     node_modules/@polkadot/types-codec/cjs
    @polkadot/api-derive has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api-derive/
            cjs 10.11.2     node_modules/@polkadot/api-derive/cjs
    @polkadot/rpc-core has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-core/
            cjs 10.11.2     node_modules/@polkadot/rpc-core/cjs
    @polkadot/api has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api/
            cjs 10.11.2     node_modules/@polkadot/api/cjs
    @polkadot/keyring has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 12.6.2      node_modules/@polkadot/keyring/
            cjs 12.6.2      node_modules/@polkadot/keyring/cjs
    @polkadot/rpc-provider has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-provider/
            cjs 10.11.2     node_modules/@polkadot/rpc-provider/cjs
    @polkadot/types-known has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-known/
            cjs 10.11.2     node_modules/@polkadot/types-known/cjs

    stderr | warn (/Users/seraya/repos/xcm-router/node_modules/@polkadot/util/cjs/versionDetect.js:70:13)
    @polkadot/rpc-augment has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-augment/
            cjs 10.11.2     node_modules/@polkadot/rpc-augment/cjs
    @polkadot/util-crypto has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 12.6.2      node_modules/@polkadot/util-crypto/
            cjs 12.6.2      node_modules/@polkadot/util-crypto/cjs
    @polkadot/wasm-crypto has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto/
            cjs 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto/cjs
    @polkadot/wasm-bridge has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-bridge/
            cjs 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-bridge/cjs
    @polkadot/wasm-crypto-wasm has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto-wasm/
            cjs 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto-wasm/cjs
    @polkadot/wasm-util has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/wasm-util/
            cjs 7.3.2       node_modules/@polkadot/wasm-util/cjs
    @polkadot/types has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types/
            cjs 10.11.2     node_modules/@polkadot/types/cjs
    @polkadot/types-create has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-create/
            cjs 10.11.2     node_modules/@polkadot/types-create/cjs
    @polkadot/types-codec has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-codec/
            cjs 10.11.2     node_modules/@polkadot/types-codec/cjs
    @polkadot/api-derive has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api-derive/
            cjs 10.11.2     node_modules/@polkadot/api-derive/cjs
    @polkadot/rpc-core has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-core/
            cjs 10.11.2     node_modules/@polkadot/rpc-core/cjs
    @polkadot/api has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api/
            cjs 10.11.2     node_modules/@polkadot/api/cjs
    @polkadot/keyring has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 12.6.2      node_modules/@polkadot/keyring/
            cjs 12.6.2      node_modules/@polkadot/keyring/cjs
    @polkadot/rpc-provider has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-provider/
            cjs 10.11.2     node_modules/@polkadot/rpc-provider/cjs
    @polkadot/types-known has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-known/
            cjs 10.11.2     node_modules/@polkadot/types-known/cjs

    stderr | warn (/Users/seraya/repos/xcm-router/node_modules/@polkadot/util/cjs/versionDetect.js:70:13)
    @polkadot/rpc-augment has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-augment/
            cjs 10.11.2     node_modules/@polkadot/rpc-augment/cjs
    @polkadot/util-crypto has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 12.6.2      node_modules/@polkadot/util-crypto/
            cjs 12.6.2      node_modules/@polkadot/util-crypto/cjs
    @polkadot/wasm-crypto has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto/
            cjs 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto/cjs
    @polkadot/wasm-bridge has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-bridge/
            cjs 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-bridge/cjs
    @polkadot/wasm-crypto-wasm has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto-wasm/
            cjs 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto-wasm/cjs
    @polkadot/wasm-util has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/wasm-util/
            cjs 7.3.2       node_modules/@polkadot/wasm-util/cjs
    @polkadot/types has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types/
            cjs 10.11.2     node_modules/@polkadot/types/cjs
    @polkadot/types-create has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-create/
            cjs 10.11.2     node_modules/@polkadot/types-create/cjs
    @polkadot/types-codec has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-codec/
            cjs 10.11.2     node_modules/@polkadot/types-codec/cjs
    @polkadot/api-derive has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api-derive/
            cjs 10.11.2     node_modules/@polkadot/api-derive/cjs
    @polkadot/rpc-core has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-core/
            cjs 10.11.2     node_modules/@polkadot/rpc-core/cjs
    @polkadot/api has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api/
            cjs 10.11.2     node_modules/@polkadot/api/cjs
    @polkadot/keyring has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 12.6.2      node_modules/@polkadot/keyring/
            cjs 12.6.2      node_modules/@polkadot/keyring/cjs
    @polkadot/rpc-provider has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-provider/
            cjs 10.11.2     node_modules/@polkadot/rpc-provider/cjs
    @polkadot/types-known has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-known/
            cjs 10.11.2     node_modules/@polkadot/types-known/cjs

    stderr | warn (/Users/seraya/repos/xcm-router/node_modules/@polkadot/util/cjs/versionDetect.js:70:13)
    @polkadot/rpc-augment has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-augment/
            cjs 10.11.2     node_modules/@polkadot/rpc-augment/cjs
    @polkadot/util-crypto has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 12.6.2      node_modules/@polkadot/util-crypto/
            cjs 12.6.2      node_modules/@polkadot/util-crypto/cjs
    @polkadot/wasm-crypto has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto/
            cjs 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto/cjs
    @polkadot/wasm-bridge has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-bridge/
            cjs 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-bridge/cjs
    @polkadot/wasm-crypto-wasm has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto-wasm/
            cjs 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto-wasm/cjs
    @polkadot/wasm-util has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/wasm-util/
            cjs 7.3.2       node_modules/@polkadot/wasm-util/cjs
    @polkadot/types has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types/
            cjs 10.11.2     node_modules/@polkadot/types/cjs
    @polkadot/types-create has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-create/
            cjs 10.11.2     node_modules/@polkadot/types-create/cjs
    @polkadot/types-codec has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-codec/
            cjs 10.11.2     node_modules/@polkadot/types-codec/cjs
    @polkadot/api-derive has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api-derive/
            cjs 10.11.2     node_modules/@polkadot/api-derive/cjs
    @polkadot/rpc-core has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-core/
            cjs 10.11.2     node_modules/@polkadot/rpc-core/cjs
    @polkadot/api has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api/
            cjs 10.11.2     node_modules/@polkadot/api/cjs
    @polkadot/keyring has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 12.6.2      node_modules/@polkadot/keyring/
            cjs 12.6.2      node_modules/@polkadot/keyring/cjs
    @polkadot/rpc-provider has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-provider/
            cjs 10.11.2     node_modules/@polkadot/rpc-provider/cjs
    @polkadot/types-known has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-known/
            cjs 10.11.2     node_modules/@polkadot/types-known/cjs

    stderr | warn (/Users/seraya/repos/xcm-router/node_modules/@polkadot/util/cjs/versionDetect.js:70:13)
    @polkadot/rpc-augment has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-augment/
            cjs 10.11.2     node_modules/@polkadot/rpc-augment/cjs
    @polkadot/util-crypto has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 12.6.2      node_modules/@polkadot/util-crypto/
            cjs 12.6.2      node_modules/@polkadot/util-crypto/cjs
    @polkadot/wasm-crypto has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto/
            cjs 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto/cjs
    @polkadot/wasm-bridge has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-bridge/
            cjs 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-bridge/cjs
    @polkadot/wasm-crypto-wasm has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto-wasm/
            cjs 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto-wasm/cjs
    @polkadot/wasm-util has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/wasm-util/
            cjs 7.3.2       node_modules/@polkadot/wasm-util/cjs
    @polkadot/types has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types/
            cjs 10.11.2     node_modules/@polkadot/types/cjs
    @polkadot/types-create has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-create/
            cjs 10.11.2     node_modules/@polkadot/types-create/cjs
    @polkadot/types-codec has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-codec/
            cjs 10.11.2     node_modules/@polkadot/types-codec/cjs
    @polkadot/api-derive has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api-derive/
            cjs 10.11.2     node_modules/@polkadot/api-derive/cjs
    @polkadot/rpc-core has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-core/
            cjs 10.11.2     node_modules/@polkadot/rpc-core/cjs
    @polkadot/api has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api/
            cjs 10.11.2     node_modules/@polkadot/api/cjs
    @polkadot/keyring has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 12.6.2      node_modules/@polkadot/keyring/
            cjs 12.6.2      node_modules/@polkadot/keyring/cjs
    @polkadot/rpc-provider has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-provider/
            cjs 10.11.2     node_modules/@polkadot/rpc-provider/cjs
    @polkadot/types-known has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-known/
            cjs 10.11.2     node_modules/@polkadot/types-known/cjs

    stderr | warn (/Users/seraya/repos/xcm-router/node_modules/@polkadot/util/cjs/versionDetect.js:70:13)
    @polkadot/util has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 12.6.2      node_modules/@polkadot/util/
            cjs 12.6.2      node_modules/@polkadot/util/cjs

    stderr | warn (/Users/seraya/repos/xcm-router/node_modules/@polkadot/util/cjs/versionDetect.js:70:13)
    @polkadot/rpc-augment has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-augment/
            cjs 10.11.2     node_modules/@polkadot/rpc-augment/cjs
    @polkadot/util-crypto has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 12.6.2      node_modules/@polkadot/util-crypto/
            cjs 12.6.2      node_modules/@polkadot/util-crypto/cjs
    @polkadot/wasm-crypto has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto/
            cjs 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto/cjs
    @polkadot/wasm-bridge has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-bridge/
            cjs 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-bridge/cjs
    @polkadot/wasm-crypto-wasm has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto-wasm/
            cjs 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto-wasm/cjs
    @polkadot/wasm-util has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/wasm-util/
            cjs 7.3.2       node_modules/@polkadot/wasm-util/cjs
    @polkadot/types has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types/
            cjs 10.11.2     node_modules/@polkadot/types/cjs
    @polkadot/types-create has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-create/
            cjs 10.11.2     node_modules/@polkadot/types-create/cjs
    @polkadot/types-codec has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-codec/
            cjs 10.11.2     node_modules/@polkadot/types-codec/cjs
    @polkadot/api-derive has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api-derive/
            cjs 10.11.2     node_modules/@polkadot/api-derive/cjs
    @polkadot/rpc-core has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-core/
            cjs 10.11.2     node_modules/@polkadot/rpc-core/cjs
    @polkadot/api has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api/
            cjs 10.11.2     node_modules/@polkadot/api/cjs
    @polkadot/keyring has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 12.6.2      node_modules/@polkadot/keyring/
            cjs 12.6.2      node_modules/@polkadot/keyring/cjs
    @polkadot/rpc-provider has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-provider/
            cjs 10.11.2     node_modules/@polkadot/rpc-provider/cjs
    @polkadot/types-known has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-known/
            cjs 10.11.2     node_modules/@polkadot/types-known/cjs

    stderr | warn (/Users/seraya/repos/xcm-router/node_modules/@polkadot/util/cjs/versionDetect.js:70:13)
    @polkadot/api has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api/
            cjs 10.11.2     node_modules/@polkadot/api/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/api/cjs
    @polkadot/rpc-augment has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-augment/
            cjs 10.11.2     node_modules/@polkadot/rpc-augment/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/rpc-augment/cjs
    @polkadot/rpc-provider has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-provider/
            cjs 10.11.2     node_modules/@polkadot/rpc-provider/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/rpc-provider/cjs
    @polkadot/api-derive has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api-derive/
            cjs 10.11.2     node_modules/@polkadot/api-derive/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/api-derive/cjs
    @polkadot/rpc-core has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-core/
            cjs 10.11.2     node_modules/@polkadot/rpc-core/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/rpc-core/cjs
    @polkadot/types has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types/
            cjs 10.11.2     node_modules/@polkadot/types/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/types/cjs
    @polkadot/types-create has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-create/
            cjs 10.11.2     node_modules/@polkadot/types-create/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/types-create/cjs
    @polkadot/types-codec has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-codec/
            cjs 10.11.2     node_modules/@polkadot/types-codec/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/types-codec/cjs
    @polkadot/types-known has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-known/
            cjs 10.11.2     node_modules/@polkadot/types-known/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/types-known/cjs

    stderr | warn (/Users/seraya/repos/xcm-router/node_modules/@polkadot/util/cjs/versionDetect.js:70:13)
    @polkadot/api has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api/
            cjs 10.11.2     node_modules/@polkadot/api/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/api/cjs
    @polkadot/rpc-augment has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-augment/
            cjs 10.11.2     node_modules/@polkadot/rpc-augment/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/rpc-augment/cjs
    @polkadot/rpc-provider has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-provider/
            cjs 10.11.2     node_modules/@polkadot/rpc-provider/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/rpc-provider/cjs
    @polkadot/api-derive has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api-derive/
            cjs 10.11.2     node_modules/@polkadot/api-derive/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/api-derive/cjs
    @polkadot/rpc-core has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-core/
            cjs 10.11.2     node_modules/@polkadot/rpc-core/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/rpc-core/cjs
    @polkadot/types has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types/
            cjs 10.11.2     node_modules/@polkadot/types/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/types/cjs
    @polkadot/types-create has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-create/
            cjs 10.11.2     node_modules/@polkadot/types-create/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/types-create/cjs
    @polkadot/types-codec has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-codec/
            cjs 10.11.2     node_modules/@polkadot/types-codec/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/types-codec/cjs
    @polkadot/types-known has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-known/
            cjs 10.11.2     node_modules/@polkadot/types-known/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/types-known/cjs

    stderr | warn (/Users/seraya/repos/xcm-router/node_modules/@polkadot/util/cjs/versionDetect.js:70:13)
    @polkadot/api has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api/
            cjs 10.11.2     node_modules/@polkadot/api/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/api/cjs
    @polkadot/rpc-augment has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-augment/
            cjs 10.11.2     node_modules/@polkadot/rpc-augment/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/rpc-augment/cjs
    @polkadot/rpc-provider has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-provider/
            cjs 10.11.2     node_modules/@polkadot/rpc-provider/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/rpc-provider/cjs
    @polkadot/api-derive has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api-derive/
            cjs 10.11.2     node_modules/@polkadot/api-derive/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/api-derive/cjs
    @polkadot/rpc-core has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-core/
            cjs 10.11.2     node_modules/@polkadot/rpc-core/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/rpc-core/cjs
    @polkadot/types has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types/
            cjs 10.11.2     node_modules/@polkadot/types/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/types/cjs
    @polkadot/types-create has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-create/
            cjs 10.11.2     node_modules/@polkadot/types-create/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/types-create/cjs
    @polkadot/types-codec has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-codec/
            cjs 10.11.2     node_modules/@polkadot/types-codec/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/types-codec/cjs
    @polkadot/types-known has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-known/
            cjs 10.11.2     node_modules/@polkadot/types-known/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/types-known/cjs

    stderr | warn (/Users/seraya/repos/xcm-router/node_modules/@polkadot/util/cjs/versionDetect.js:70:13)
    @polkadot/api has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api/
            cjs 10.11.2     node_modules/@polkadot/api/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/api/cjs
    @polkadot/rpc-augment has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-augment/
            cjs 10.11.2     node_modules/@polkadot/rpc-augment/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/rpc-augment/cjs
    @polkadot/rpc-provider has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-provider/
            cjs 10.11.2     node_modules/@polkadot/rpc-provider/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/rpc-provider/cjs
    @polkadot/api-derive has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api-derive/
            cjs 10.11.2     node_modules/@polkadot/api-derive/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/api-derive/cjs
    @polkadot/rpc-core has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-core/
            cjs 10.11.2     node_modules/@polkadot/rpc-core/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/rpc-core/cjs
    @polkadot/types has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types/
            cjs 10.11.2     node_modules/@polkadot/types/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/types/cjs
    @polkadot/types-create has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-create/
            cjs 10.11.2     node_modules/@polkadot/types-create/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/types-create/cjs
    @polkadot/types-codec has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-codec/
            cjs 10.11.2     node_modules/@polkadot/types-codec/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/types-codec/cjs
    @polkadot/types-known has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-known/
            cjs 10.11.2     node_modules/@polkadot/types-known/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/types-known/cjs

    stderr | warn (/Users/seraya/repos/xcm-router/node_modules/@polkadot/util/cjs/versionDetect.js:70:13)
    @polkadot/api has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api/
            cjs 10.11.2     node_modules/@polkadot/api/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/api/cjs
    @polkadot/rpc-augment has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-augment/
            cjs 10.11.2     node_modules/@polkadot/rpc-augment/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/rpc-augment/cjs
    @polkadot/rpc-provider has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-provider/
            cjs 10.11.2     node_modules/@polkadot/rpc-provider/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/rpc-provider/cjs
    @polkadot/api-derive has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api-derive/
            cjs 10.11.2     node_modules/@polkadot/api-derive/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/api-derive/cjs
    @polkadot/rpc-core has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-core/
            cjs 10.11.2     node_modules/@polkadot/rpc-core/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/rpc-core/cjs
    @polkadot/types has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types/
            cjs 10.11.2     node_modules/@polkadot/types/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/types/cjs
    @polkadot/types-create has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-create/
            cjs 10.11.2     node_modules/@polkadot/types-create/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/types-create/cjs
    @polkadot/types-codec has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-codec/
            cjs 10.11.2     node_modules/@polkadot/types-codec/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/types-codec/cjs
    @polkadot/types-known has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-known/
            cjs 10.11.2     node_modules/@polkadot/types-known/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/types-known/cjs

    stdout | src/transfer/selectBestExchange.test.ts > selectBestExchange > should find best exchange
    Selecting best exchange for ASTR -> GLMR
    Checking HydraDxDex...
    Checking AcalaDex...
    Selected exchange: Acala

    stdout | src/transfer/selectBestExchange.test.ts > selectBestExchange > should fail to find best exchange
    Selecting best exchange for ASTR -> GLMR
    Checking HydraDxDex...
    Checking AcalaDex...

    stderr | warn (/Users/seraya/repos/xcm-router/node_modules/@polkadot/util/cjs/versionDetect.js:70:13)
    @polkadot/util has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 12.6.2      node_modules/@polkadot/util/
            cjs 12.6.2      node_modules/@polkadot/util/cjs
    @polkadot/rpc-core has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-core/
            cjs 10.11.2     node_modules/@polkadot/rpc-core/cjs
    @polkadot/types has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types/
            cjs 10.11.2     node_modules/@polkadot/types/cjs
    @polkadot/types-create has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-create/
            cjs 10.11.2     node_modules/@polkadot/types-create/cjs
    @polkadot/types-codec has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-codec/
            cjs 10.11.2     node_modules/@polkadot/types-codec/cjs
    @polkadot/util-crypto has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 12.6.2      node_modules/@polkadot/util-crypto/
            cjs 12.6.2      node_modules/@polkadot/util-crypto/cjs
    @polkadot/wasm-crypto has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto/
            cjs 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto/cjs
    @polkadot/wasm-bridge has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-bridge/
            cjs 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-bridge/cjs
    @polkadot/wasm-crypto-wasm has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto-wasm/
            cjs 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto-wasm/cjs
    @polkadot/wasm-util has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/wasm-util/
            cjs 7.3.2       node_modules/@polkadot/wasm-util/cjs

    stderr | warn (/Users/seraya/repos/xcm-router/node_modules/@polkadot/util/cjs/versionDetect.js:70:13)
    @polkadot/util has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 12.6.2      node_modules/@polkadot/util/
            cjs 12.6.2      node_modules/@polkadot/util/cjs

    stderr | warn (/Users/seraya/repos/xcm-router/node_modules/@polkadot/util/cjs/versionDetect.js:70:13)
    @polkadot/rpc-augment has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-augment/
            cjs 10.11.2     node_modules/@polkadot/rpc-augment/cjs
    @polkadot/util-crypto has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 12.6.2      node_modules/@polkadot/util-crypto/
            cjs 12.6.2      node_modules/@polkadot/util-crypto/cjs
    @polkadot/wasm-crypto has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto/
            cjs 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto/cjs
    @polkadot/wasm-bridge has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-bridge/
            cjs 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-bridge/cjs
    @polkadot/wasm-crypto-wasm has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto-wasm/
            cjs 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto-wasm/cjs
    @polkadot/wasm-util has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/wasm-util/
            cjs 7.3.2       node_modules/@polkadot/wasm-util/cjs
    @polkadot/types has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types/
            cjs 10.11.2     node_modules/@polkadot/types/cjs
    @polkadot/types-create has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-create/
            cjs 10.11.2     node_modules/@polkadot/types-create/cjs
    @polkadot/types-codec has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-codec/
            cjs 10.11.2     node_modules/@polkadot/types-codec/cjs
    @polkadot/api-derive has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api-derive/
            cjs 10.11.2     node_modules/@polkadot/api-derive/cjs
    @polkadot/rpc-core has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-core/
            cjs 10.11.2     node_modules/@polkadot/rpc-core/cjs
    @polkadot/api has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api/
            cjs 10.11.2     node_modules/@polkadot/api/cjs
    @polkadot/keyring has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 12.6.2      node_modules/@polkadot/keyring/
            cjs 12.6.2      node_modules/@polkadot/keyring/cjs
    @polkadot/rpc-provider has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-provider/
            cjs 10.11.2     node_modules/@polkadot/rpc-provider/cjs
    @polkadot/types-known has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-known/
            cjs 10.11.2     node_modules/@polkadot/types-known/cjs

    stderr | warn (/Users/seraya/repos/xcm-router/node_modules/@polkadot/util/cjs/versionDetect.js:70:13)
    @polkadot/api has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api/
            cjs 10.11.2     node_modules/@polkadot/api/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/api/cjs
    @polkadot/rpc-augment has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-augment/
            cjs 10.11.2     node_modules/@polkadot/rpc-augment/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/rpc-augment/cjs
    @polkadot/rpc-provider has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-provider/
            cjs 10.11.2     node_modules/@polkadot/rpc-provider/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/rpc-provider/cjs
    @polkadot/api-derive has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api-derive/
            cjs 10.11.2     node_modules/@polkadot/api-derive/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/api-derive/cjs
    @polkadot/rpc-core has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-core/
            cjs 10.11.2     node_modules/@polkadot/rpc-core/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/rpc-core/cjs
    @polkadot/types has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types/
            cjs 10.11.2     node_modules/@polkadot/types/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/types/cjs
    @polkadot/types-create has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-create/
            cjs 10.11.2     node_modules/@polkadot/types-create/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/types-create/cjs
    @polkadot/types-codec has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-codec/
            cjs 10.11.2     node_modules/@polkadot/types-codec/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/types-codec/cjs
    @polkadot/types-known has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-known/
            cjs 10.11.2     node_modules/@polkadot/types-known/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/types-known/cjs

    ✓ src/utils/submitTransaction.test.ts (3)
    ✓ src/utils/utils.test.ts (8)
    ✓ src/transfer/swap.test.ts (9)
    ✓ src/transfer/selectBestExchange.test.ts (10)
    ✓ src/transfer/transfer.test.ts (13) 11900ms
    ✓ src/RouterBuilder.test.ts (3)
    ✓ src/transfer/utils.test.ts (10)
    ✓ src/transfer/buildTransferExtrinsics.test.ts (10)
    ✓ src/transfer/transferToDestination.test.ts (9)
    ✓ src/Logger/Logger.test.ts (1)
    ✓ src/transfer/transferToExchange.test.ts (9)
    ✓ src/dexNodes/DexNode.test.ts (1)
    ✓ src/dexNodes/Acala/utils.test.ts (2)
    ✓ src/dexNodes/DexNodeFactory.test.ts (5)

    Test Files  14 passed (14)
        Tests  93 passed (93)
    Start at  15:40:26
    Duration  13.96s (transform 154ms, setup 1ms, collect 13.75s, tests 11.96s, environment 1ms, prepare 541ms)

    ```
  </details>

- [x] integration test run
  
  <details>
    <summary>Output</summary>

    ```zsh
    % yarn test:integration
    yarn run v1.22.19
    $ vitest run --config ./vitest.config.integration.ts

    RUN  v1.1.0 /Users/seraya/repos/xcm-router

    stderr | warn (/Users/seraya/repos/xcm-router/node_modules/@polkadot/util/cjs/versionDetect.js:70:13)
    @polkadot/util has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 12.6.2      node_modules/@polkadot/util/
            cjs 12.6.2      node_modules/@polkadot/util/cjs

    stderr | warn (/Users/seraya/repos/xcm-router/node_modules/@polkadot/util/cjs/versionDetect.js:70:13)
    @polkadot/util has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 12.6.2      node_modules/@polkadot/util/
            cjs 12.6.2      node_modules/@polkadot/util/cjs

    stderr | warn (/Users/seraya/repos/xcm-router/node_modules/@polkadot/util/cjs/versionDetect.js:70:13)
    @polkadot/util has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 12.6.2      node_modules/@polkadot/util/
            cjs 12.6.2      node_modules/@polkadot/util/cjs

    stderr | warn (/Users/seraya/repos/xcm-router/node_modules/@polkadot/util/cjs/versionDetect.js:70:13)
    @polkadot/util has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 12.6.2      node_modules/@polkadot/util/
            cjs 12.6.2      node_modules/@polkadot/util/cjs
    @polkadot/api has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api/
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/api/cjs
    @polkadot/rpc-augment has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-augment/
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/rpc-augment/cjs
    @polkadot/keyring has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 12.6.2      node_modules/@polkadot/keyring/
            cjs 12.6.2      node_modules/@polkadot/keyring/cjs
    @polkadot/util-crypto has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 12.6.2      node_modules/@polkadot/util-crypto/
            cjs 12.6.2      node_modules/@polkadot/util-crypto/cjs
    @polkadot/wasm-crypto has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto/
            cjs 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto/cjs
    @polkadot/wasm-bridge has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-bridge/
            cjs 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-bridge/cjs
    @polkadot/wasm-crypto-wasm has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto-wasm/
            cjs 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto-wasm/cjs
    @polkadot/wasm-util has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/wasm-util/
            cjs 7.3.2       node_modules/@polkadot/wasm-util/cjs
    @polkadot/rpc-provider has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-provider/
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/rpc-provider/cjs
    @polkadot/api-derive has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api-derive/
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/api-derive/cjs
    @polkadot/rpc-core has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-core/
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/rpc-core/cjs
    @polkadot/types has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types/
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/types/cjs
    @polkadot/types-create has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-create/
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/types-create/cjs
    @polkadot/types-codec has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-codec/
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/types-codec/cjs
    @polkadot/types-known has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-known/
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/types-known/cjs

    stderr | warn (/Users/seraya/repos/xcm-router/node_modules/@polkadot/util/cjs/versionDetect.js:70:13)
    @polkadot/rpc-augment has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-augment/
            cjs 10.11.2     node_modules/@polkadot/rpc-augment/cjs
    @polkadot/util-crypto has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 12.6.2      node_modules/@polkadot/util-crypto/
            cjs 12.6.2      node_modules/@polkadot/util-crypto/cjs
    @polkadot/wasm-crypto has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto/
            cjs 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto/cjs
    @polkadot/wasm-bridge has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-bridge/
            cjs 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-bridge/cjs
    @polkadot/wasm-crypto-wasm has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto-wasm/
            cjs 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto-wasm/cjs
    @polkadot/wasm-util has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/wasm-util/
            cjs 7.3.2       node_modules/@polkadot/wasm-util/cjs
    @polkadot/types has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types/
            cjs 10.11.2     node_modules/@polkadot/types/cjs
    @polkadot/types-create has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-create/
            cjs 10.11.2     node_modules/@polkadot/types-create/cjs
    @polkadot/types-codec has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-codec/
            cjs 10.11.2     node_modules/@polkadot/types-codec/cjs
    @polkadot/api-derive has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api-derive/
            cjs 10.11.2     node_modules/@polkadot/api-derive/cjs
    @polkadot/rpc-core has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-core/
            cjs 10.11.2     node_modules/@polkadot/rpc-core/cjs
    @polkadot/api has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api/
            cjs 10.11.2     node_modules/@polkadot/api/cjs
    @polkadot/keyring has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 12.6.2      node_modules/@polkadot/keyring/
            cjs 12.6.2      node_modules/@polkadot/keyring/cjs
    @polkadot/rpc-provider has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-provider/
            cjs 10.11.2     node_modules/@polkadot/rpc-provider/cjs
    @polkadot/types-known has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-known/
            cjs 10.11.2     node_modules/@polkadot/types-known/cjs

    stderr | warn (/Users/seraya/repos/xcm-router/node_modules/@polkadot/util/cjs/versionDetect.js:70:13)
    @polkadot/rpc-augment has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-augment/
            cjs 10.11.2     node_modules/@polkadot/rpc-augment/cjs
    @polkadot/util-crypto has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 12.6.2      node_modules/@polkadot/util-crypto/
            cjs 12.6.2      node_modules/@polkadot/util-crypto/cjs
    @polkadot/wasm-crypto has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto/
            cjs 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto/cjs
    @polkadot/wasm-bridge has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-bridge/
            cjs 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-bridge/cjs
    @polkadot/wasm-crypto-wasm has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto-wasm/
            cjs 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto-wasm/cjs
    @polkadot/wasm-util has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/wasm-util/
            cjs 7.3.2       node_modules/@polkadot/wasm-util/cjs
    @polkadot/types has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types/
            cjs 10.11.2     node_modules/@polkadot/types/cjs
    @polkadot/types-create has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-create/
            cjs 10.11.2     node_modules/@polkadot/types-create/cjs
    @polkadot/types-codec has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-codec/
            cjs 10.11.2     node_modules/@polkadot/types-codec/cjs
    @polkadot/api-derive has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api-derive/
            cjs 10.11.2     node_modules/@polkadot/api-derive/cjs
    @polkadot/rpc-core has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-core/
            cjs 10.11.2     node_modules/@polkadot/rpc-core/cjs
    @polkadot/api has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api/
            cjs 10.11.2     node_modules/@polkadot/api/cjs
    @polkadot/keyring has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 12.6.2      node_modules/@polkadot/keyring/
            cjs 12.6.2      node_modules/@polkadot/keyring/cjs
    @polkadot/rpc-provider has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-provider/
            cjs 10.11.2     node_modules/@polkadot/rpc-provider/cjs
    @polkadot/types-known has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-known/
            cjs 10.11.2     node_modules/@polkadot/types-known/cjs

    stderr | warn (/Users/seraya/repos/xcm-router/node_modules/@polkadot/util/cjs/versionDetect.js:70:13)
    @polkadot/rpc-augment has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-augment/
            cjs 10.11.2     node_modules/@polkadot/rpc-augment/cjs
    @polkadot/util-crypto has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 12.6.2      node_modules/@polkadot/util-crypto/
            cjs 12.6.2      node_modules/@polkadot/util-crypto/cjs
    @polkadot/wasm-crypto has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto/
            cjs 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto/cjs
    @polkadot/wasm-bridge has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-bridge/
            cjs 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-bridge/cjs
    @polkadot/wasm-crypto-wasm has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto-wasm/
            cjs 7.3.2       node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto-wasm/cjs
    @polkadot/wasm-util has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 7.3.2       node_modules/@polkadot/wasm-util/
            cjs 7.3.2       node_modules/@polkadot/wasm-util/cjs
    @polkadot/types has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types/
            cjs 10.11.2     node_modules/@polkadot/types/cjs
    @polkadot/types-create has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-create/
            cjs 10.11.2     node_modules/@polkadot/types-create/cjs
    @polkadot/types-codec has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-codec/
            cjs 10.11.2     node_modules/@polkadot/types-codec/cjs
    @polkadot/api-derive has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api-derive/
            cjs 10.11.2     node_modules/@polkadot/api-derive/cjs
    @polkadot/rpc-core has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-core/
            cjs 10.11.2     node_modules/@polkadot/rpc-core/cjs
    @polkadot/api has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api/
            cjs 10.11.2     node_modules/@polkadot/api/cjs
    @polkadot/keyring has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 12.6.2      node_modules/@polkadot/keyring/
            cjs 12.6.2      node_modules/@polkadot/keyring/cjs
    @polkadot/rpc-provider has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-provider/
            cjs 10.11.2     node_modules/@polkadot/rpc-provider/cjs
    @polkadot/types-known has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-known/
            cjs 10.11.2     node_modules/@polkadot/types-known/cjs

    stderr | warn (/Users/seraya/repos/xcm-router/node_modules/@polkadot/util/cjs/versionDetect.js:70:13)
    @polkadot/api has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api/
            cjs 10.11.2     node_modules/@polkadot/api/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/api/cjs
    @polkadot/rpc-augment has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-augment/
            cjs 10.11.2     node_modules/@polkadot/rpc-augment/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/rpc-augment/cjs
    @polkadot/rpc-provider has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-provider/
            cjs 10.11.2     node_modules/@polkadot/rpc-provider/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/rpc-provider/cjs
    @polkadot/api-derive has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api-derive/
            cjs 10.11.2     node_modules/@polkadot/api-derive/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/api-derive/cjs
    @polkadot/rpc-core has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-core/
            cjs 10.11.2     node_modules/@polkadot/rpc-core/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/rpc-core/cjs
    @polkadot/types has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types/
            cjs 10.11.2     node_modules/@polkadot/types/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/types/cjs
    @polkadot/types-create has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-create/
            cjs 10.11.2     node_modules/@polkadot/types-create/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/types-create/cjs
    @polkadot/types-codec has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-codec/
            cjs 10.11.2     node_modules/@polkadot/types-codec/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/types-codec/cjs
    @polkadot/types-known has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-known/
            cjs 10.11.2     node_modules/@polkadot/types-known/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/types-known/cjs

    stderr | warn (/Users/seraya/repos/xcm-router/node_modules/@polkadot/util/cjs/versionDetect.js:70:13)
    @polkadot/api has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api/
            cjs 10.11.2     node_modules/@polkadot/api/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/api/cjs
    @polkadot/rpc-augment has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-augment/
            cjs 10.11.2     node_modules/@polkadot/rpc-augment/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/rpc-augment/cjs
    @polkadot/rpc-provider has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-provider/
            cjs 10.11.2     node_modules/@polkadot/rpc-provider/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/rpc-provider/cjs
    @polkadot/api-derive has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/api-derive/
            cjs 10.11.2     node_modules/@polkadot/api-derive/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/api-derive/cjs
    @polkadot/rpc-core has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/rpc-core/
            cjs 10.11.2     node_modules/@polkadot/rpc-core/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/rpc-core/cjs
    @polkadot/types has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types/
            cjs 10.11.2     node_modules/@polkadot/types/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/types/cjs
    @polkadot/types-create has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-create/
            cjs 10.11.2     node_modules/@polkadot/types-create/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/types-create/cjs
    @polkadot/types-codec has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-codec/
            cjs 10.11.2     node_modules/@polkadot/types-codec/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/types-codec/cjs
    @polkadot/types-known has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
            esm 10.11.2     node_modules/@polkadot/types-known/
            cjs 10.11.2     node_modules/@polkadot/types-known/cjs
            cjs 10.9.1      node_modules/@interlay/interbtc-api/node_modules/@polkadot/types-known/cjs

    stderr | src/dexNodes/Bifrost/BifrostDex.integration.test.ts > BifrostDex - integration > should build a transfer extrinsic without error on Bifrost Polkadot
    2024-01-09 15:45:19        REGISTRY: Unknown signed extensions ValidateClaim found, treating them as no-effect

    stdout | src/transfer/transfer.integration.test.ts > transfer - integration > main transfer function - FULL_TRANSFER scenario - manual exchange
    Generating AccountId32 address

    stdout | src/dexNodes/Acala/AcalaDex.integration.test.ts > AcalaDex - integration > should build a transfer extrinsic without error on Acala
    Generating AccountId32 address
    Asigning fees for transfer to another Parachain chain
    Generating AccountId32 address

    stdout | src/dexNodes/Interlay/InterlayDex.integration.test.ts > InterlayDex - integration > should build a transfer extrinsic without error
    Generating AccountId32 address
    Asigning fees for transfer to another Parachain chain
    Generating AccountId32 address

    stderr | src/dexNodes/Interlay/InterlayDex.integration.test.ts > InterlayDex - integration > should build a transfer extrinsic without error
    2024-01-09 15:45:22        API/INIT: RPC methods not decorated: btcRelay_verifyBlockHeaderInclusion, dexGeneral_calculateRemoveLiquidity, dexGeneral_getAmountInPrice, dexGeneral_getAmountOutPrice, dexGeneral_getEstimateLptoken, dexGeneral_getPairByAssetId, dexStable_calculateCurrencyAmount, dexStable_calculateRemoveLiquidity, dexStable_calculateRemoveLiquidityOneCurrency, dexStable_calculateSwap, dexStable_getA, dexStable_getAPrecise, dexStable_getAdminBalance, dexStable_getAdminBalances, dexStable_getCurrencies, dexStable_getCurrency, dexStable_getCurrencyBalances, dexStable_getCurrencyIndex, dexStable_getCurrencyPrecisionMultipliers, dexStable_getLpCurrency, dexStable_getNumberOfCurrencies, dexStable_getVirtualPrice, escrow_balanceAt, escrow_freeStakable, escrow_totalSupply, issue_getIssueRequests, issue_getVaultIssueRequests, loans_getCollateralLiquidity, loans_getLiquidationThresholdLiquidity, loans_getMarketStatus, oracle_collateralToWrapped, oracle_wrappedToCollateral, redeem_getRedeemRequests, redeem_getVaultRedeemRequests, replace_getNewVaultReplaceRequests, replace_getOldVaultReplaceRequests, reward_computeEscrowReward, reward_computeFarmingReward, reward_computeVaultReward, reward_estimateEscrowRewardRate, reward_estimateFarmingReward, reward_estimateVaultRewardRate, txpool_content, txpool_inspect, txpool_status, vaultRegistry_getCollateralizationFromVault, vaultRegistry_getCollateralizationFromVaultAndCollateral, vaultRegistry_getIssueableTokensFromVault, vaultRegistry_getPremiumRedeemVaults, vaultRegistry_getRequiredCollateralForVault, vaultRegistry_getRequiredCollateralForWrapped, vaultRegistry_getVaultCollateral, vaultRegistry_getVaultTotalCollateral, vaultRegistry_getVaultsByAccountId, vaultRegistry_getVaultsWithIssuableTokens, vaultRegistry_getVaultsWithRedeemableTokens
    2024-01-09 15:45:22        API/INIT: interlay-parachain/1025003: Not decorating unknown runtime apis: LoansApi/1, DexGeneralApi/1, DexStableApi/1, BtcRelayApi/1, VaultRegistryApi/1, EscrowApi/1, RewardApi/1, IssueApi/1, RedeemApi/1, ReplaceApi/1

    stdout | src/dexNodes/HydraDx/HydraDxDex.integration.test.ts > HydraDxDex - integration > should build a transfer extrinsic without error on HydraDx
    Generating AccountId32 address
    Asigning fees for transfer to another Parachain chain
    Generating AccountId32 address

    stderr | src/dexNodes/HydraDx/HydraDxDex.integration.test.ts > HydraDxDex - integration > should build a transfer extrinsic without error on HydraDx
    2024-01-09 15:45:23        REGISTRY: Unknown signed extensions ValidateClaim found, treating them as no-effect

    stdout | src/dexNodes/Mangata/MangataDex.integration.test.ts > MangataDex - integration > should build a transfer extrinsic without error
    Original amount 1401830652183
    Amount without fee 1338748272835

    stdout | src/transfer/buildTransferExtrinsics.integration.test.ts > buildTransferExtrinsics - integration > should build transfer extrinsics correctly
    Generating AccountId32 address
    Asigning fees for transfer to another Parachain chain

    stdout | src/dexNodes/Bifrost/BifrostDex.integration.test.ts > BifrostDex - integration > should build a transfer extrinsic without error on Bifrost Polkadot
    Generating AccountId32 address
    Asigning fees for transfer to Relay chain
    Generating AccountId32 address
    Asigning fees for transfer to another Parachain chain

    stderr | src/dexNodes/Bifrost/BifrostDex.integration.test.ts > BifrostDex - integration > should build a transfer extrinsic without error on Bifrost Polkadot
    2024-01-09 15:45:24        API/INIT: RPC methods not decorated: farming_getFarmingRewards, farming_getGaugeRewards, flexibleFee_getFeeTokenAndAmount, lend_market_getCollateralLiquidity, lend_market_getLiquidationThresholdLiquidity, lend_market_getMarketStatus, salp_getContribution, stable_pool_addLiquidityAmount, stable_pool_getSwapOutputAmount, ve_minting_balanceOf, ve_minting_findBlockEpoch, ve_minting_totalSupply, zenlinkProtocol_calculateRemoveLiquidity, zenlinkProtocol_getAmountInPrice, zenlinkProtocol_getAmountOutPrice, zenlinkProtocol_getBalance, zenlinkProtocol_getEstimateLptoken, zenlinkProtocol_getPairByAssetId
    2024-01-09 15:45:24        API/INIT: bifrost_polkadot/990: Not decorating unknown runtime apis: 0xf877468f4ca0e826/1, ZenlinkProtocolApi/1, 0xdc655468d8394120/1, 0x0d94b80c178630f0/1, 0x9bf5dfc64f15a24b/1, 0xb1ef915a752c7a46/1, 0x56efef6dbb213baf/1

    stdout | src/transfer/transfer.integration.test.ts > transfer - integration > main transfer function - FULL_TRANSFER scenario - manual exchange
    Generating AccountId32 address
    Asigning fees for transfer to another Parachain chain

    stdout | src/transfer/buildTransferExtrinsics.integration.test.ts > buildTransferExtrinsics - integration > should build transfer extrinsics correctly
    Generating AccountId32 address

    stdout | src/transfer/transfer.integration.test.ts > transfer - integration > main transfer function - FULL_TRANSFER scenario - manual exchange
    Generating AccountId32 address

    stdout | src/dexNodes/Mangata/MangataDex.integration.test.ts > MangataDex - integration > should build a transfer extrinsic without error
    Best amount 104362944146543
    Min Amount out 103319314705077

    stderr | src/dexNodes/Interlay/InterlayDex.integration.test.ts > InterlayDex - integration > should build a transfer extrinsic without error
    <empty line>
    stdout | src/dexNodes/Interlay/InterlayDex.integration.test.ts > InterlayDex - integration > should build a transfer extrinsic without error
    Original amount 5000000000
    Amount without fee 4726106700.5

    stdout | src/dexNodes/Acala/AcalaDex.integration.test.ts > AcalaDex - integration > should build a transfer extrinsic without error on Acala
    XCM to dest. fee: 2660002411 ACA
    Swap fee: 2320007613 ACA
    Total fee: 4980010024 ACA
    Total fee human: 0.004980010024 ACA

    stderr | src/dexNodes/Bifrost/BifrostDex.integration.test.ts > BifrostDex - integration > should build a transfer extrinsic without error on Bifrost Polkadot
    <empty line>
    stdout | src/dexNodes/Bifrost/BifrostDex.integration.test.ts > BifrostDex - integration > should build a transfer extrinsic without error on Bifrost Polkadot
    price is 13.7561
    Fee in bnc 142439596.35361767
    Original amount 5000000000
    Amount modified 4786340605
    feePct 0.3
    amount without swap fee 4764802072

    stderr | src/dexNodes/Bifrost/BifrostDex.integration.test.ts > BifrostDex - integration > should build a transfer extrinsic without error on Bifrost Polkadot
    <empty line>
    stdout | src/dexNodes/Bifrost/BifrostDex.integration.test.ts > BifrostDex - integration > should build a transfer extrinsic without error on Bifrost Polkadot
    out fee in bnc 195941333140
    6.555054379251
    6555054379251
    6261142379541

    stdout | src/transfer/buildTransferExtrinsics.integration.test.ts > buildTransferExtrinsics - integration > should build transfer extrinsics correctly
    Xyk [bXnMD3c7JF...] balance subscribed
    Xyk [bXk4FhVNAF...] balance subscribed
    Xyk [bXi1mHNp4j...] balance subscribed
    Xyk [bXhPwmVvA1...] balance subscribed
    Xyk [bXmXYyxujT...] balance subscribed
    Xyk [bXn6KCrv8k...] balance subscribed
    Xyk [bXjT2D2cux...] balance subscribed

    stdout | src/transfer/buildTransferExtrinsics.integration.test.ts > buildTransferExtrinsics - integration > should build transfer extrinsics correctly
    Xyk [bXmXkRjikP...] balance subscribed

    stdout | src/transfer/transfer.integration.test.ts > transfer - integration > main transfer function - FULL_TRANSFER scenario - manual exchange
    Xyk [bXnMD3c7JF...] balance subscribed
    Xyk [bXk4FhVNAF...] balance subscribed
    Xyk [bXjT2D2cux...] balance subscribed
    Xyk [bXhPwmVvA1...] balance subscribed
    Xyk [bXi1mHNp4j...] balance subscribed
    Xyk [bXmXYyxujT...] balance subscribed
    Xyk [bXn6KCrv8k...] balance subscribed
    Xyk [bXmXkRjikP...] balance subscribed

    stderr | src/dexNodes/HydraDx/HydraDxDex.integration.test.ts > HydraDxDex - integration > should build a transfer extrinsic without error on HydraDx
    <empty line>
    stdout | src/dexNodes/HydraDx/HydraDxDex.integration.test.ts > HydraDxDex - integration > should build a transfer extrinsic without error on HydraDx
    Xyk [7Noq6Lw46j...] balance subscribed

    stderr | src/dexNodes/HydraDx/HydraDxDex.integration.test.ts > HydraDxDex - integration > should build a transfer extrinsic without error on HydraDx
    <empty line>
    stdout | src/dexNodes/HydraDx/HydraDxDex.integration.test.ts > HydraDxDex - integration > should build a transfer extrinsic without error on HydraDx
    Xyk [7KKXieLDbf...] balance subscribed

    stderr | src/dexNodes/HydraDx/HydraDxDex.integration.test.ts > HydraDxDex - integration > should build a transfer extrinsic without error on HydraDx
    <empty line>
    stdout | src/dexNodes/HydraDx/HydraDxDex.integration.test.ts > HydraDxDex - integration > should build a transfer extrinsic without error on HydraDx
    Omnipool [7L53bUTBbf...] balance subscribed

    stdout | src/transfer/transfer.integration.test.ts > transfer - integration > main transfer function - FULL_TRANSFER scenario - manual exchange
    XCM to exch. fee: 12670016500000 BSX
    XCM to dest. fee: 12670016500000 BSX
    Swap fee: 12560048293773 BSX
    Total fee: 37900081293773 BSX
    Total fee in currency from: 0.000130780409   KSM
    Total fee in currency from with buffer 50%: 0.0001961706135   KSM
    Original amount 10000000000000000000
    Amount modified 9999999999803829386.5
    Amount out fee 0.00084579675832963186 BSX
    Amount out original 6837081417682
    Amount out modified 6837080571885

    stdout | src/transfer/buildTransferExtrinsics.integration.test.ts > buildTransferExtrinsics - integration > should build transfer extrinsics correctly
    XCM to exch. fee: 12670016500000 BSX
    XCM to dest. fee: 12670016500000 BSX
    Swap fee: 12560048293773 BSX
    Total fee: 37900081293773 BSX
    Total fee in currency from: 0.000130780409   KSM
    Total fee in currency from with buffer 50%: 0.0001961706135   KSM
    Original amount 10000000000000000000
    Amount modified 9999999999803829386.5
    Amount out fee 0.00084579675832963186 BSX
    Amount out original 6837081417682
    Amount out modified 6837080571885
    Generating AccountId32 address
    Asigning fees for transfer to another Parachain chain

    stderr | src/dexNodes/HydraDx/HydraDxDex.integration.test.ts > HydraDxDex - integration > should build a transfer extrinsic without error on HydraDx
    <empty line>
    stdout | src/dexNodes/HydraDx/HydraDxDex.integration.test.ts > HydraDxDex - integration > should build a transfer extrinsic without error on HydraDx
    Stableswap [7JP6TvcH5x...] balance subscribed

    stdout | src/dexNodes/Acala/AcalaDex.integration.test.ts > AcalaDex - integration > should build a transfer extrinsic without error on Acala
    Fee total currency from 0.00010154729488208501 DOT
    Fee total currency from BN 1015472.9488208501 DOT
    XCM to exch. fee: 0.0182595533 DOT
    XCM to exch. fee /w buffer: 0.02738932995 DOT
    Original amount 5000000000
    Amount modified 4725091227.5511791499
    Calculated amount out: 34062340398750
    Amount out decimals 12
    Amount out fee 0.0039900036165 ACA
    Amount out original 34.06234039875
    Amount out modified 34058350395134

    stdout | src/transfer/transfer.integration.test.ts > transfer - integration > main transfer function - FULL_TRANSFER scenario - manual exchange
    Generating AccountId32 address
    Asigning fees for transfer to another Parachain chain

    stdout | src/transfer/transfer.integration.test.ts > transfer - integration > main transfer function - FULL_TRANSFER scenario - auto exchange
    Selecting best exchange for KSM -> XRT
    Checking BasiliskDex...

    stderr | src/dexNodes/HydraDx/HydraDxDex.integration.test.ts > HydraDxDex - integration > should build a transfer extrinsic without error on HydraDx
    <empty line>
    stdout | src/dexNodes/HydraDx/HydraDxDex.integration.test.ts > HydraDxDex - integration > should build a transfer extrinsic without error on HydraDx
    XCM to exch. fee: 1770000300480 HDX
    XCM to dest. fee: 1770000300480 HDX
    Swap fee: 1560004560937 HDX
    Total fee: 5100005161897 HDX
    Total fee in currency from: 0.684950103282   ASTR
    Total fee in currency from with buffer 50%: 1.027425154923   ASTR
    Original amount 38821036538894063687
    Amount modified 37793611383971063687

    stderr | src/dexNodes/HydraDx/HydraDxDex.integration.test.ts > HydraDxDex - integration > should build a transfer extrinsic without error on HydraDx
    <empty line>
    stdout | src/dexNodes/HydraDx/HydraDxDex.integration.test.ts > HydraDxDex - integration > should build a transfer extrinsic without error on HydraDx
    Amount out fee 0.00670102986205449722 HDX
    Amount out original 7080978206
    Amount out modified 7013967907

    stdout | src/dexNodes/Bifrost/BifrostDex.integration.test.ts > BifrostDex - integration > should build a transfer extrinsic without error on Bifrost Kusama
    Generating AccountId32 address
    Asigning fees for transfer to another Parachain chain
    Generating AccountId32 address

    stderr | src/dexNodes/Bifrost/BifrostDex.integration.test.ts > BifrostDex - integration > should build a transfer extrinsic without error on Bifrost Kusama
    2024-01-09 15:45:35        API/INIT: RPC methods not decorated: farming_getFarmingRewards, farming_getGaugeRewards, flexibleFee_getFeeTokenAndAmount, salp_getContribution, stableAmm_calculateRemoveLiquidityOneCurrency, stable_pool_addLiquidityAmount, stable_pool_getSwapOutputAmount, zenlinkProtocol_calculateRemoveLiquidity, zenlinkProtocol_getAmountInPrice, zenlinkProtocol_getAmountOutPrice, zenlinkProtocol_getBalance, zenlinkProtocol_getEstimateLptoken, zenlinkProtocol_getPairByAssetId, zenlinkStableAmm_calculateCurrencyAmount, zenlinkStableAmm_calculateRemoveLiquidity, zenlinkStableAmm_calculateSwap, zenlinkStableAmm_getA, zenlinkStableAmm_getAPrecise, zenlinkStableAmm_getAdminBalance, zenlinkStableAmm_getAdminBalances, zenlinkStableAmm_getCurrencies, zenlinkStableAmm_getCurrency, zenlinkStableAmm_getCurrencyBalances, zenlinkStableAmm_getCurrencyIndex, zenlinkStableAmm_getCurrencyPrecisionMultipliers, zenlinkStableAmm_getLpCurrency, zenlinkStableAmm_getNumberOfCurrencies, zenlinkStableAmm_getVirtualPrice
    2024-01-09 15:45:35        API/INIT: bifrost/990: Not decorating unknown runtime apis: 0xf877468f4ca0e826/1, ZenlinkProtocolApi/1, StableAmmApi/1, 0xdc655468d8394120/1, 0x0d94b80c178630f0/1, 0x56efef6dbb213baf/1, 0xb1ef915a752c7a46/1

    stdout | src/dexNodes/Acala/AcalaDex.integration.test.ts > AcalaDex - integration > should build a transfer extrinsic without error on Karura
    Generating AccountId32 address
    Asigning fees for transfer to another Parachain chain
    Generating AccountId32 address

    stderr | src/dexNodes/Acala/AcalaDex.integration.test.ts > AcalaDex - integration > should build a transfer extrinsic without error on Karura
    2024-01-09 15:45:38        API/INIT: karura/2230: Not decorating unknown runtime apis: 0x9af86751b70c112d/2

    stdout | src/dexNodes/Interlay/InterlayDex.integration.test.ts > InterlayDex - integration > should build a transfer extrinsic without error on kintsugi
    Generating AccountId32 address
    Asigning fees for transfer to another Parachain chain
    Generating AccountId32 address

    stderr | src/dexNodes/Interlay/InterlayDex.integration.test.ts > InterlayDex - integration > should build a transfer extrinsic without error on kintsugi
    2024-01-09 15:45:38        API/INIT: RPC methods not decorated: btcRelay_verifyBlockHeaderInclusion, dexGeneral_calculateRemoveLiquidity, dexGeneral_getAmountInPrice, dexGeneral_getAmountOutPrice, dexGeneral_getEstimateLptoken, dexGeneral_getPairByAssetId, dexStable_calculateCurrencyAmount, dexStable_calculateRemoveLiquidity, dexStable_calculateRemoveLiquidityOneCurrency, dexStable_calculateSwap, dexStable_getA, dexStable_getAPrecise, dexStable_getAdminBalance, dexStable_getAdminBalances, dexStable_getCurrencies, dexStable_getCurrency, dexStable_getCurrencyBalances, dexStable_getCurrencyIndex, dexStable_getCurrencyPrecisionMultipliers, dexStable_getLpCurrency, dexStable_getNumberOfCurrencies, dexStable_getVirtualPrice, escrow_balanceAt, escrow_freeStakable, escrow_totalSupply, issue_getIssueRequests, issue_getVaultIssueRequests, loans_getCollateralLiquidity, loans_getLiquidationThresholdLiquidity, loans_getMarketStatus, oracle_collateralToWrapped, oracle_wrappedToCollateral, redeem_getRedeemRequests, redeem_getVaultRedeemRequests, replace_getNewVaultReplaceRequests, replace_getOldVaultReplaceRequests, reward_computeEscrowReward, reward_computeFarmingReward, reward_computeVaultReward, reward_estimateEscrowRewardRate, reward_estimateFarmingReward, reward_estimateVaultRewardRate, txpool_content, txpool_inspect, txpool_status, vaultRegistry_getCollateralizationFromVault, vaultRegistry_getCollateralizationFromVaultAndCollateral, vaultRegistry_getIssueableTokensFromVault, vaultRegistry_getPremiumRedeemVaults, vaultRegistry_getRequiredCollateralForVault, vaultRegistry_getRequiredCollateralForWrapped, vaultRegistry_getVaultCollateral, vaultRegistry_getVaultTotalCollateral, vaultRegistry_getVaultsByAccountId, vaultRegistry_getVaultsWithIssuableTokens, vaultRegistry_getVaultsWithRedeemableTokens
    2024-01-09 15:45:38        API/INIT: kintsugi-parachain/1025003: Not decorating unknown runtime apis: BtcRelayApi/1, VaultRegistryApi/1, EscrowApi/1, RewardApi/1, IssueApi/1, RedeemApi/1, ReplaceApi/1, LoansApi/1, DexGeneralApi/1, DexStableApi/1

    stdout | src/transfer/transfer.integration.test.ts > transfer - integration > main transfer function - FULL_TRANSFER scenario - auto exchange
    Generating AccountId32 address
    Asigning fees for transfer to another Parachain chain

    stderr | src/dexNodes/Bifrost/BifrostDex.integration.test.ts > BifrostDex - integration > should build a transfer extrinsic without error on Bifrost Kusama
    <empty line>
    stdout | src/dexNodes/Bifrost/BifrostDex.integration.test.ts > BifrostDex - integration > should build a transfer extrinsic without error on Bifrost Kusama
    price is 0.4122
    Fee in bnc 475476731373.1198
    Original amount 1000000000000
    Amount modified 286784902940
    feePct 0.8999999999999999
    amount without swap fee 282913306750

    stderr | src/dexNodes/Bifrost/BifrostDex.integration.test.ts > BifrostDex - integration > should build a transfer extrinsic without error on Bifrost Kusama
    <empty line>
    stdout | src/dexNodes/Bifrost/BifrostDex.integration.test.ts > BifrostDex - integration > should build a transfer extrinsic without error on Bifrost Kusama
    price is 77.2413
    out fee in bnc 2537392672.9871195
    0.001500552360
    1500552360
    -2305536649

    stdout | src/dexNodes/HydraDx/HydraDxDex.integration.test.ts > HydraDxDex - integration > should build a transfer extrinsic without error on Basilisk
    Generating AccountId32 address
    Asigning fees for transfer to another Parachain chain
    Generating AccountId32 address

    stdout | src/transfer/transfer.integration.test.ts > transfer - integration > main transfer function - FULL_TRANSFER scenario - auto exchange
    Generating AccountId32 address

    stderr | src/dexNodes/Interlay/InterlayDex.integration.test.ts > InterlayDex - integration > should build a transfer extrinsic without error on kintsugi
    <empty line>
    stdout | src/dexNodes/Interlay/InterlayDex.integration.test.ts > InterlayDex - integration > should build a transfer extrinsic without error on kintsugi
    Original amount 5000000000
    Amount without fee 4088964839

    stderr | src/dexNodes/Acala/AcalaDex.integration.test.ts > AcalaDex - integration > should build a transfer extrinsic without error on Karura
    <empty line>
    stdout | src/dexNodes/Acala/AcalaDex.integration.test.ts > AcalaDex - integration > should build a transfer extrinsic without error on Karura
    XCM to dest. fee: 2660002411 KAR
    Swap fee: 2270005016 KAR
    Total fee: 4930007427 KAR
    Total fee human: 0.004930007427 KAR

    stdout | src/transfer/transfer.integration.test.ts > transfer - integration > main transfer function - FULL_TRANSFER scenario - auto exchange
    Xyk [bXnMD3c7JF...] balance subscribed
    Xyk [bXjT2D2cux...] balance subscribed
    Xyk [bXk4FhVNAF...] balance subscribed
    Xyk [bXmXYyxujT...] balance subscribed
    Xyk [bXhPwmVvA1...] balance subscribed
    Xyk [bXi1mHNp4j...] balance subscribed
    Xyk [bXn6KCrv8k...] balance subscribed
    Xyk [bXmXkRjikP...] balance subscribed

    stderr | src/dexNodes/Bifrost/BifrostDex.integration.test.ts > BifrostDex - integration > should return asset symbols
    2024-01-09 15:45:45        API/INIT: RPC methods not decorated: farming_getFarmingRewards, farming_getGaugeRewards, flexibleFee_getFeeTokenAndAmount, lend_market_getCollateralLiquidity, lend_market_getLiquidationThresholdLiquidity, lend_market_getMarketStatus, salp_getContribution, stable_pool_addLiquidityAmount, stable_pool_getSwapOutputAmount, ve_minting_balanceOf, ve_minting_findBlockEpoch, ve_minting_totalSupply, zenlinkProtocol_calculateRemoveLiquidity, zenlinkProtocol_getAmountInPrice, zenlinkProtocol_getAmountOutPrice, zenlinkProtocol_getBalance, zenlinkProtocol_getEstimateLptoken, zenlinkProtocol_getPairByAssetId
    2024-01-09 15:45:46        API/INIT: bifrost_polkadot/990: Not decorating unknown runtime apis: 0xf877468f4ca0e826/1, ZenlinkProtocolApi/1, 0xdc655468d8394120/1, 0x0d94b80c178630f0/1, 0x9bf5dfc64f15a24b/1, 0xb1ef915a752c7a46/1, 0x56efef6dbb213baf/1

    stdout | src/dexNodes/HydraDx/HydraDxDex.integration.test.ts > HydraDxDex - integration > should build a transfer extrinsic without error on Basilisk
    Xyk [bXnMD3c7JF...] balance subscribed

    stdout | src/dexNodes/HydraDx/HydraDxDex.integration.test.ts > HydraDxDex - integration > should build a transfer extrinsic without error on Basilisk
    Xyk [bXjT2D2cux...] balance subscribed
    Xyk [bXk4FhVNAF...] balance subscribed
    Xyk [bXhPwmVvA1...] balance subscribed
    Xyk [bXmXYyxujT...] balance subscribed
    Xyk [bXmXkRjikP...] balance subscribed

    stdout | src/dexNodes/HydraDx/HydraDxDex.integration.test.ts > HydraDxDex - integration > should build a transfer extrinsic without error on Basilisk
    Xyk [bXi1mHNp4j...] balance subscribed
    Xyk [bXn6KCrv8k...] balance subscribed

    stdout | src/transfer/transfer.integration.test.ts > transfer - integration > main transfer function - FULL_TRANSFER scenario - auto exchange
    XCM to exch. fee: 12670016500000 BSX
    XCM to dest. fee: 12670016500000 BSX
    Swap fee: 12560048293773 BSX
    Total fee: 37900081293773 BSX
    Total fee in currency from: 0.000130780409   KSM
    Total fee in currency from with buffer 50%: 0.0001961706135   KSM
    Original amount 10000000000000000000
    Amount modified 9999999999803829386.5
    Amount out fee 0.00084579675832963186 BSX
    Amount out original 6837081417682
    Amount out modified 6837080571885
    Selected exchange: Basilisk

    stdout | src/dexNodes/HydraDx/HydraDxDex.integration.test.ts > HydraDxDex - integration > should build a transfer extrinsic without error on Basilisk
    XCM to exch. fee: 12670016500000 BSX
    XCM to dest. fee: 12670016500000 BSX
    Swap fee: 12650077121897 BSX
    Total fee: 37990110121897 BSX
    Total fee in currency from: 0.000131091068   KSM
    Total fee in currency from with buffer 50%: 0.000196636602   KSM
    Original amount 1000000000000
    Amount modified 999803363398
    Amount out fee 0.00213849132337095519 BSX
    Amount out original 32331371
    Amount out modified 32329233

    stderr | src/dexNodes/Acala/AcalaDex.integration.test.ts > AcalaDex - integration > should build a transfer extrinsic without error on Karura
    <empty line>
    stdout | src/dexNodes/Acala/AcalaDex.integration.test.ts > AcalaDex - integration > should build a transfer extrinsic without error on Karura
    Fee total currency from 0.000036584664233764536 KSM
    Fee total currency from BN 36584664.233764536 KSM
    XCM to exch. fee: 0.000610690104 KSM
    XCM to exch. fee /w buffer: 0.000916035156 KSM
    Original amount 22000000000000
    Amount modified 21999047380179.766235464
    Calculated amount out: 4366975726788705
    Amount out decimals 12
    Amount out fee 0.0039900036165 KAR
    Amount out original 4366.975726788705
    Amount out modified 4366971736785089

    stdout | src/transfer/transfer.integration.test.ts > transfer - integration > main transfer function - FULL_TRANSFER scenario - auto exchange
    Generating AccountId32 address

    stderr | src/dexNodes/HydraDx/HydraDxDex.integration.test.ts > HydraDxDex - integration > should return asset symbols
    2024-01-09 15:45:51        REGISTRY: Unknown signed extensions ValidateClaim found, treating them as no-effect

    stderr | src/dexNodes/Interlay/InterlayDex.integration.test.ts > InterlayDex - integration > should return asset symbols
    2024-01-09 15:45:51        API/INIT: RPC methods not decorated: btcRelay_verifyBlockHeaderInclusion, dexGeneral_calculateRemoveLiquidity, dexGeneral_getAmountInPrice, dexGeneral_getAmountOutPrice, dexGeneral_getEstimateLptoken, dexGeneral_getPairByAssetId, dexStable_calculateCurrencyAmount, dexStable_calculateRemoveLiquidity, dexStable_calculateRemoveLiquidityOneCurrency, dexStable_calculateSwap, dexStable_getA, dexStable_getAPrecise, dexStable_getAdminBalance, dexStable_getAdminBalances, dexStable_getCurrencies, dexStable_getCurrency, dexStable_getCurrencyBalances, dexStable_getCurrencyIndex, dexStable_getCurrencyPrecisionMultipliers, dexStable_getLpCurrency, dexStable_getNumberOfCurrencies, dexStable_getVirtualPrice, escrow_balanceAt, escrow_freeStakable, escrow_totalSupply, issue_getIssueRequests, issue_getVaultIssueRequests, loans_getCollateralLiquidity, loans_getLiquidationThresholdLiquidity, loans_getMarketStatus, oracle_collateralToWrapped, oracle_wrappedToCollateral, redeem_getRedeemRequests, redeem_getVaultRedeemRequests, replace_getNewVaultReplaceRequests, replace_getOldVaultReplaceRequests, reward_computeEscrowReward, reward_computeFarmingReward, reward_computeVaultReward, reward_estimateEscrowRewardRate, reward_estimateFarmingReward, reward_estimateVaultRewardRate, txpool_content, txpool_inspect, txpool_status, vaultRegistry_getCollateralizationFromVault, vaultRegistry_getCollateralizationFromVaultAndCollateral, vaultRegistry_getIssueableTokensFromVault, vaultRegistry_getPremiumRedeemVaults, vaultRegistry_getRequiredCollateralForVault, vaultRegistry_getRequiredCollateralForWrapped, vaultRegistry_getVaultCollateral, vaultRegistry_getVaultTotalCollateral, vaultRegistry_getVaultsByAccountId, vaultRegistry_getVaultsWithIssuableTokens, vaultRegistry_getVaultsWithRedeemableTokens
    2024-01-09 15:45:51        API/INIT: interlay-parachain/1025003: Not decorating unknown runtime apis: LoansApi/1, DexGeneralApi/1, DexStableApi/1, BtcRelayApi/1, VaultRegistryApi/1, EscrowApi/1, RewardApi/1, IssueApi/1, RedeemApi/1, ReplaceApi/1

    stderr | src/dexNodes/HydraDx/HydraDxDex.integration.test.ts > HydraDxDex - integration > should return asset symbols
    <empty line>
    stdout | src/dexNodes/HydraDx/HydraDxDex.integration.test.ts > HydraDxDex - integration > should return asset symbols
    Xyk [7KKXieLDbf...] balance subscribed

    stderr | src/dexNodes/HydraDx/HydraDxDex.integration.test.ts > HydraDxDex - integration > should return asset symbols
    <empty line>
    stdout | src/dexNodes/HydraDx/HydraDxDex.integration.test.ts > HydraDxDex - integration > should return asset symbols
    Xyk [7Noq6Lw46j...] balance subscribed

    stderr | src/dexNodes/HydraDx/HydraDxDex.integration.test.ts > HydraDxDex - integration > should return asset symbols
    <empty line>
    stdout | src/dexNodes/HydraDx/HydraDxDex.integration.test.ts > HydraDxDex - integration > should return asset symbols
    Omnipool [7L53bUTBbf...] balance subscribed

    stdout | src/transfer/transfer.integration.test.ts > transfer - integration > main transfer function - FULL_TRANSFER scenario - auto exchange
    Generating AccountId32 address
    Asigning fees for transfer to another Parachain chain

    stderr | src/dexNodes/HydraDx/HydraDxDex.integration.test.ts > HydraDxDex - integration > should return asset symbols
    <empty line>
    stdout | src/dexNodes/HydraDx/HydraDxDex.integration.test.ts > HydraDxDex - integration > should return asset symbols
    Stableswap [7JP6TvcH5x...] balance subscribed

    stdout | src/transfer/transfer.integration.test.ts > transfer - integration > main transfer function - FULL_TRANSFER scenario - auto exchange
    Generating AccountId32 address

    stdout | src/transfer/transfer.integration.test.ts > transfer - integration > main transfer function - FULL_TRANSFER scenario - auto exchange
    Xyk [bXnMD3c7JF...] balance subscribed

    stdout | src/transfer/transfer.integration.test.ts > transfer - integration > main transfer function - FULL_TRANSFER scenario - auto exchange
    Xyk [bXjT2D2cux...] balance subscribed
    Xyk [bXk4FhVNAF...] balance subscribed
    Xyk [bXhPwmVvA1...] balance subscribed
    Xyk [bXmXYyxujT...] balance subscribed
    Xyk [bXi1mHNp4j...] balance subscribed
    Xyk [bXn6KCrv8k...] balance subscribed
    Xyk [bXmXkRjikP...] balance subscribed

    stdout | src/transfer/transfer.integration.test.ts > transfer - integration > main transfer function - FULL_TRANSFER scenario - auto exchange
    XCM to exch. fee: 12670016500000 BSX
    XCM to dest. fee: 12670016500000 BSX
    Swap fee: 12560048293773 BSX
    Total fee: 37900081293773 BSX
    Total fee in currency from: 0.000130780409   KSM
    Total fee in currency from with buffer 50%: 0.0001961706135   KSM
    Original amount 10000000000000000000
    Amount modified 9999999999803829386.5
    Amount out fee 0.00084579675832963186 BSX
    Amount out original 6837081417682
    Amount out modified 6837080571885

    stdout | src/transfer/transfer.integration.test.ts > transfer - integration > main transfer function - FULL_TRANSFER scenario - auto exchange
    Generating AccountId32 address
    Asigning fees for transfer to another Parachain chain

    ✓ src/dexNodes/Bifrost/BifrostDex.integration.test.ts (11) 31527ms
    ✓ src/dexNodes/HydraDx/HydraDxDex.integration.test.ts (11) 40591ms
    ✓ src/dexNodes/Mangata/MangataDex.integration.test.ts (10) 14655ms
    ✓ src/dexNodes/Interlay/InterlayDex.integration.test.ts (11) 37024ms
    ✓ src/dexNodes/Acala/AcalaDex.integration.test.ts (11) 36970ms
    ✓ src/transfer/buildTransferExtrinsics.integration.test.ts (9) 16292ms
    ✓ src/transfer/transfer.integration.test.ts (10) 47411ms

    Test Files  7 passed (7)
        Tests  73 passed (73)
    Start at  15:45:13
    Duration  48.91s (transform 87ms, setup 0ms, collect 6.93s, tests 224.47s, environment 1ms, prepare 272ms)

    ✨  Done in 50.37s.
    ```
  </details>

- [x] playground dependency installation - ok, but 2 warnings detected

  <details>
    <summary>Output</summary>

    ```zsh
    playground % yarn
    yarn install v1.22.19
    [1/4] 🔍  Resolving packages...
    warning Resolution field "@acala-network/eth-providers@2.7.5-1" is incompatible with requested version "@acala-network/eth-providers@~2.7.3"
    warning Resolution field "@crypto-dex-sdk/chain@0.0.4" is incompatible with requested version "@crypto-dex-sdk/chain@0.0.2"
    warning Resolution field "@crypto-dex-sdk/chain@0.0.4" is incompatible with requested version "@crypto-dex-sdk/chain@0.0.3"
    warning Resolution field "@crypto-dex-sdk/chain@0.0.4" is incompatible with requested version "@crypto-dex-sdk/chain@0.0.2"
    warning Resolution field "@crypto-dex-sdk/chain@0.0.4" is incompatible with requested version "@crypto-dex-sdk/chain@0.0.2"
    [2/4] 🚚  Fetching packages...
    warning Pattern ["@polkadot/api@latest"] is trying to unpack in the same destination "/Users/seraya/Library/Caches/Yarn/v6/npm-@polkadot-api-10.11.1-3667ae1cf2f9c1955e138438c313efdba081314d-integrity/node_modules/@polkadot/api" as pattern ["@polkadot/api@^10.11.1","@polkadot/api@^10.9.1","@polkadot/api@^10.9.1","@polkadot/api@^10.9.1","@polkadot/api@^10.9.1","@polkadot/api@^10.11.1","@polkadot/api@^10.0.1","@polkadot/api@10.11.1","@polkadot/api@^10.7.3","@polkadot/api@^10.9.1","@polkadot/api@10.11.1","@polkadot/api@^10.11.1"]. This could result in non-deterministic behavior, skipping.
    [3/4] 🔗  Linking dependencies...
    warning " > @acala-network/eth-providers@2.7.5-1" has unmet peer dependency "@acala-network/api@5.1.2-7".
    warning " > @acala-network/eth-providers@2.7.5-1" has unmet peer dependency "@polkadot/api@^10.5.1".
    warning "@acala-network/eth-providers > @acala-network/eth-transactions@2.7.5-1" has unmet peer dependency "@polkadot/util-crypto@^12.1.2".
    warning "@acala-network/eth-providers > graphql-request@3.6.1" has incorrect peer dependency "graphql@14.x || 15.x".
    warning " > @paraspell/sdk@3.0.11" has unmet peer dependency "@polkadot/api@^10.6.1".
    warning " > @paraspell/sdk@3.0.11" has unmet peer dependency "@polkadot/api-base@^10.6.1".
    warning " > @paraspell/sdk@3.0.11" has unmet peer dependency "@polkadot/apps-config@^0.133.1".
    warning " > @paraspell/sdk@3.0.11" has unmet peer dependency "@polkadot/types@^10.6.1".
    warning "@paraspell/sdk > @mangata-finance/type-definitions@2.1.2" has unmet peer dependency "@polkadot/types@^10.9.1".
    warning "@paraspell/xcm-router > @acala-network/sdk@4.1.9-12" has incorrect peer dependency "@acala-network/api@^5".
    warning "@paraspell/xcm-router > @acala-network/sdk@4.1.9-12" has unmet peer dependency "ethers@~5.7.0".
    warning "@paraspell/xcm-router > @acala-network/sdk-core@4.1.9-12" has unmet peer dependency "@acala-network/types@^6".
    warning "@paraspell/xcm-router > @acala-network/sdk-swap@4.1.9-12" has unmet peer dependency "@acala-network/types@^6".
    warning "@paraspell/xcm-router > @crypto-dex-sdk/token-lists@0.0.2" has unmet peer dependency "@ethersproject/address@^5.7.0".
    warning "@paraspell/xcm-router > @crypto-dex-sdk/token-lists@0.0.2" has incorrect peer dependency "@crypto-dex-sdk/currency@0.0.2".
    warning "@paraspell/xcm-router > @crypto-dex-sdk/token-lists@0.0.2" has unmet peer dependency "@crypto-dex-sdk/format@0.0.2".
    warning "@paraspell/xcm-router > @galacticcouncil/sdk@1.1.1" has unmet peer dependency "@polkadot/api-augment@^10.9.1".
    warning "@paraspell/xcm-router > @galacticcouncil/sdk@1.1.1" has unmet peer dependency "@polkadot/api-derive@^10.9.1".
    warning "@paraspell/xcm-router > @galacticcouncil/sdk@1.1.1" has unmet peer dependency "@polkadot/rpc-augment@^10.9.1".
    warning "@paraspell/xcm-router > @galacticcouncil/sdk@1.1.1" has unmet peer dependency "@polkadot/rpc-core@^10.9.1".
    warning "@paraspell/xcm-router > @galacticcouncil/sdk@1.1.1" has unmet peer dependency "@polkadot/rpc-provider@^10.9.1".
    warning "@paraspell/xcm-router > @galacticcouncil/sdk@1.1.1" has unmet peer dependency "@polkadot/types-augment@^10.9.1".
    warning "@paraspell/xcm-router > @galacticcouncil/sdk@1.1.1" has unmet peer dependency "@polkadot/types-codec@^10.9.1".
    warning "@paraspell/xcm-router > @galacticcouncil/sdk@1.1.1" has unmet peer dependency "@polkadot/types-create@^10.9.1".
    warning "@paraspell/xcm-router > @galacticcouncil/sdk@1.1.1" has unmet peer dependency "@polkadot/types-known@^10.9.1".
    warning "@paraspell/xcm-router > @galacticcouncil/sdk@1.1.1" has unmet peer dependency "@polkadot/util-crypto@^12.3.2".
    warning "@paraspell/xcm-router > @mangata-finance/sdk@2.1.1" has incorrect peer dependency "@polkadot/api@10.9.1".
    warning "@paraspell/xcm-router > @mangata-finance/sdk > @mangata-finance/type-definitions@2.0.0" has incorrect peer dependency "@polkadot/types@10.9.1".
    warning " > @polkadot/keyring@12.6.1" has unmet peer dependency "@polkadot/util-crypto@12.6.1".
    warning "@paraspell/xcm-router > @polkadot/apps-config > @polkadot/react-identicon@3.6.4" has unmet peer dependency "@polkadot/util-crypto@*".
    warning "@paraspell/xcm-router > @polkadot/apps-config > @polkadot/react-identicon@3.6.4" has unmet peer dependency "react-is@*".
    warning "@paraspell/xcm-router > @zenlink-types/bifrost > @open-web3/api-mobx@0.9.4-38" has incorrect peer dependency "@polkadot/api@5.*".
    warning "@paraspell/xcm-router > @zenlink-types/bifrost > @open-web3/orml-types@0.9.4-38" has incorrect peer dependency "@polkadot/api@5.*".
    warning "@paraspell/xcm-router > @zenlink-types/bifrost > @open-web3/orml-types@0.9.4-38" has incorrect peer dependency "@polkadot/typegen@5.*".
    warning "@paraspell/xcm-router > @polkadot/apps-config > @digitalnative/type-definitions > @polkadot/keyring@6.11.1" has incorrect peer dependency "@polkadot/util@6.11.1".
    warning "@paraspell/xcm-router > @polkadot/apps-config > @digitalnative/type-definitions > @polkadot/keyring@6.11.1" has unmet peer dependency "@polkadot/util-crypto@6.11.1".
    warning "@paraspell/xcm-router > @polkadot/apps-config > @snowfork/snowbridge-types > @polkadot/keyring@8.7.1" has incorrect peer dependency "@polkadot/util@8.7.1".
    warning "@paraspell/xcm-router > @polkadot/apps-config > @snowfork/snowbridge-types > @polkadot/keyring@8.7.1" has unmet peer dependency "@polkadot/util-crypto@8.7.1".
    warning "@paraspell/xcm-router > @polkadot/apps-config > pontem-types-bundle > @polkadot/keyring@7.9.2" has incorrect peer dependency "@polkadot/util@7.9.2".
    warning "@paraspell/xcm-router > @polkadot/apps-config > pontem-types-bundle > @polkadot/keyring@7.9.2" has unmet peer dependency "@polkadot/util-crypto@7.9.2".
    warning " > @polkadot/extension-dapp@0.46.6" has unmet peer dependency "@polkadot/api@*".
    warning " > @polkadot/extension-dapp@0.46.6" has unmet peer dependency "@polkadot/util-crypto@*".
    warning " > @polkadot/extension-inject@0.46.6" has unmet peer dependency "@polkadot/api@*".
    warning " > @esbuild-plugins/node-globals-polyfill@0.2.3" has unmet peer dependency "esbuild@*".
    [4/4] 🔨  Building fresh packages...
    $ patch-package
    patch-package 8.0.0
    Applying patches...
    @galacticcouncil/sdk@0.7.7 ✔
    @interlay/interbtc-api@2.6.0 ✔
    Unrecognized patch file in patches directory @galacticcouncil__sdk@0.7.7.patch

    Warning: patch-package detected a patch file version mismatch

    Don't worry! This is probably fine. The patch was still applied
    successfully. Here's the deets:

    Patch file created for

        @galacticcouncil/sdk@0.7.7

    applied to

        @galacticcouncil/sdk@1.1.1
    
    At path
    
        node_modules/@galacticcouncil/sdk

    This warning is just to give you a heads-up. There is a small chance of
    breakage even though the patch was applied successfully. Make sure the package
    still behaves like you expect (you wrote tests, right?) and then run

        patch-package @galacticcouncil/sdk

    to update the version in the patch file name and make this warning go away.

    ---
    patch-package finished with 2 warning(s).
    ✨  Done in 93.99s.
    ```
  </details>

- [x] launch playground app

  <details>
    <summary>Output</summary>

    ```zsh
    playground % yarn dev
    yarn run v1.22.19
    $ vite

    VITE v5.0.7  ready in 928 ms

    ➜  Local:   http://localhost:5173/
    ➜  Network: use --host to expose
    ➜  press h + enter to show help
    ```
  </details>

- [ ] playground app smoke-testing

  - [ ] if the balance is not sufficient the error is printed on the console, however, the web UI doesn't it

    <details>
      <summary>Output</summary>

      ```
      suppress-nextjs-warning.ts:7 2024-01-22 15:31:32        RPC-CORE: submitAndWatchExtrinsic(extrinsic: Extrinsic): ExtrinsicStatus:: 1010: Invalid Transaction: Inability to pay some fees , e.g. account balance too low
      console.error @ suppress-nextjs-warning.ts:7
      Show 1 more frame
      Show less
      index.js:19 Uncaught (in promise) RpcError: 1010: Invalid Transaction: Inability to pay some fees , e.g. account balance too low
      at checkError (index.js:19:15)
      at RpcCoder.decodeResponse (index.js:35:9)
      at _WsProvider.__internal__onSocketMessageResult (index.js:407:51)
      at WebSocket.__internal__onSocketMessage (index.js:396:20)
      ```
    </details>

  - [x] if the balance is sufficient, transfers can be conducted while a variety of parameters can be chosen: origin/destination/exchange nodes, original/target token symbols, recipient address, amount, tx type, slippage

  - [ ] I think it'd be useful to explain the meaning of the available [tx types](https://github.com/paraspell/xcm-router/blob/2f2bc4e4e42d360b753557b4bf301a0a702a2c1a/src/types.ts#L22-L27)

- [x] `@paraspell/xcm-router` npm package usage has been proven successfull in the [playground](https://github.com/paraspell/xcm-router/blob/2f2bc4e4e42d360b753557b4bf301a0a702a2c1a/playground/src/routes/HomePage.tsx#L64-L71)

