# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/signet.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by takahser, keeganquigley

| Number | Deliverable | Accepted | Link | Evaluation Notes |
|-|-|-|-|-|  
| 0a. | License | <ul><li>[x] </li></ul>| [MIT](https://github.com/TalismanSociety/siws/blob/44db2e2b36d9b350a77777bf67c2da97333bd6d7/LICENSE) | - |
| 0b. | Documentation | <ul><li>[x] </li></ul>| | Looks good. |  
| 0c. | Testing and Testing Guide | <ul><li>[x] </li></ul>| | Looks good. |
| 0d. | Docker | <ul><li>[x] </li></ul>| | Amended. |
| 0e. | Article | <ul><li>[x] </li></ul>| [Article draft](https://docs.google.com/document/d/1Px3RAxQnBMDzZLuw5okXZmCL1VP6gfhxEVvOBaFPiqQ/edit?usp=sharing) | Looks good. |
| 1. | JS Package: Sign in with Substrate | <ul><li>[x] </li></ul>| [siws repo](https://github.com/TalismanSociety/siws/tree/44db2e2b36d9b350a77777bf67c2da97333bd6d7) | - |
| 2. | Feature: Custom message | <ul><li>[x] </li></ul>| | Works as expected. |
| 3. | Feature: Expiration | <ul><li>[x] </li></ul>| | Works as expected |  
| 4. | Feature: Message Formats | <ul><li>[x] </li></ul>| | Works as expected |
| 5. | Feature: Message Verification | <ul><li>[x] </li></ul>| | Works as expected |
| 6. | Example: Integrate SIWS into Signet | <ul><li>[x] </li></ul>| | Works as expected |  
| 7. | Example: Create example dapp for SIWS | <ul><li>[x] </li></ul>| | Works as expected |
| 8. | Public Docs: Sign in with Substrate | <ul><li>[x] </li></ul>| | Works as expected |

## General Notes

Nice work! All issues were resolved. I was able to get it running both locally and on the live page. Requested unit tests were added, coverage looks better now. Both `siws` and `siws-demo` run successfully now on both Mac and Ubuntu.

## Evaluation v2

`npm run dev` works now in `siws-demo`:
```sh
ubuntu@ip-172-31-24-157:~/siws-demo$ npm run dev

> siws-demo@0.1.0 dev
> next dev

   ▲ Next.js 14.0.1
   - Local:        http://localhost:3000
   - Environments: .env

 ✓ Ready in 2.9s
```

<details>

    <summary>Requested unit tests were written</summary>

```ts
> @talismn/siws@0.0.5 test
> jest --verbose --coverage

 PASS  test/Address.test.ts
  Address
    construction
      fromSs58
        ✓ should return false if the address is invalid (5 ms)
        ✓ should return an Address if generic address is valid (1 ms)
        ✓ should return an Address if polkadot address is valid (1 ms)
        ✓ should return an Address if kusama address is valid (1 ms)
      fromPubKey
        ✓ should return false if the address is invalid
        ✓ should return an Address if generic pubkey is valid (1 ms)
        ✓ should return an Address if polkadot pubkey is valid
        ✓ should return an Address if kusama pubkey is valid
    methods
      isEqual
        ✓ should return true if addresses are equal
        ✓ should return false if addresses are not equal
      toSs58
        ✓ should return the correct ss58 address according to prefix (2 ms)
      toPubKey
        ✓ should return the correct pubkey

 PASS  test/parseMessage.test.ts
  parseMessage
    ✓ should parse a valid message correctly (7 ms)
    ✓ should parse a valid json message correctly (4 ms)
    ✓ should throw an error if address is invalid (12 ms)
    ✓ should throw error when message is empty string (1 ms)
    ✓ should throw error when message is random string
    ✓ should throw error when message is number (1 ms)
    ✓ should throw error when message is missing domain
    ✓ should throw error when message is missing chainName
    ✓ should throw error when message is missing address
    ✓ should throw error when message is missing uri
    ✓ should throw error when message is missing nonce (1 ms)
    ✓ should throw error when message is missing body (1 ms)
    ✓ should throw error when message is missing body with statement
    ✓ should throw error when message is missing statement text (1 ms)
  parseJson
    ✓ should parse a valid json message correctly (1 ms)
    ✓ should throw error if message is not valid json
    ✓ should throw error when json is invalid address
    ✓ should throw error when json is missing domain (1 ms)
    ✓ should throw error when json is missing address (2 ms)
    ✓ should throw error when json is missing uri
    ✓ should throw error when json is missing nonce (1 ms)

 PASS  test/SiwsMessage.test.ts
  SiwsMessage
    constructor
      ✓ should create an SIWS instance with correct params (4 ms)
      ✓ should throw error when address is invalid (11 ms)
      ✓ should throw error if domain is invalid (1 ms)
      ✓ should throw error if uri is invalid (1 ms)
      ✓ should throw error if nonce is invalid (6 ms)
      ✓ should throw error if issuedAt is invalid (1 ms)
      ✓ should throw error if expirationTime is invalid (1 ms)
      ✓ should throw error if expirationTime is before issuedAt (1 ms)
      ✓ should throw error when message has expired (2 ms)
    asJson
      ✓ should return the same params as json object
    prepareJson
      ✓ should return the same params as json string (2 ms)
    prepareMessage
      ✓ should return the same params as message string (1 ms)
    sign
      ✓ should throw error when signRaw method does not exist (2 ms)
      ✓ should call signRaw with the right parameters (1 ms)
    signJson
      ✓ should throw error when signRaw method does not exist
      ✓ should call signRaw with the right parameters (1 ms)

------------------|---------|----------|---------|---------|-------------------
File              | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------------|---------|----------|---------|---------|-------------------
All files         |      98 |    97.59 |   93.75 |      98 |
 src              |   97.89 |    97.59 |   93.75 |   97.89 |
  SiwsMessage.ts  |     100 |      100 |     100 |     100 |
  parseMessage.ts |     100 |      100 |     100 |     100 |
  utils.ts        |   89.39 |    83.33 |   85.71 |   89.39 | 16-22
 test             |     100 |      100 |     100 |     100 |
  config.ts       |     100 |      100 |     100 |     100 |
------------------|---------|----------|---------|---------|-------------------
Test Suites: 3 passed, 3 total
Tests:       49 passed, 49 total
Snapshots:   0 total
Time:        0.943 s
Ran all test suites.
npm notice
npm notice New major version of npm available! 9.6.5 -> 10.2.5
npm notice Changelog: https://github.com/npm/cli/releases/tag/v10.2.5
npm notice Run npm install -g npm@10.2.5 to update!
npm notice
```
</details>

<details>
    <summary>Demo produces some warnings about conflicting packages</summary>

```js
 ✓ Creating an optimized production build    
 ✓ Compiled successfully
   Collecting page data  ..@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        cjs 12.5.1      node_modules/@polkadot/util/cjs
        esm 12.5.1      node_modules/@polkadot/util/
@polkadot/util-crypto has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        cjs 12.5.1      node_modules/@polkadot/util-crypto/cjs
        esm 12.5.1      node_modules/@polkadot/util-crypto/
@polkadot/wasm-crypto has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        cjs 7.2.2       node_modules/@polkadot/wasm-crypto/cjs
        esm 7.2.2       node_modules/@polkadot/wasm-crypto/
@polkadot/wasm-bridge has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        cjs 7.2.2       node_modules/@polkadot/wasm-bridge/cjs
        esm 7.2.2       node_modules/@polkadot/wasm-bridge/
@polkadot/wasm-crypto-wasm has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        cjs 7.2.2       node_modules/@polkadot/wasm-crypto-wasm/cjs
        esm 7.2.2       node_modules/@polkadot/wasm-crypto-wasm/
@polkadot/wasm-util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        cjs 7.2.2       node_modules/@polkadot/wasm-util/cjs
        esm 7.2.2       node_modules/@polkadot/wasm-util/
 ✓ Collecting page data    
   Generating static pages (2/3)  [==  ] 
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        cjs 12.5.1      node_modules/@polkadot/util/cjs
        esm 12.5.1      node_modules/@polkadot/util/
@polkadot/util-crypto has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        cjs 12.5.1      node_modules/@polkadot/util-crypto/cjs
        esm 12.5.1      node_modules/@polkadot/util-crypto/
@polkadot/wasm-crypto has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        cjs 7.2.2       node_modules/@polkadot/wasm-crypto/cjs
        esm 7.2.2       node_modules/@polkadot/wasm-crypto/
@polkadot/wasm-bridge has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        cjs 7.2.2       node_modules/@polkadot/wasm-bridge/cjs
        esm 7.2.2       node_modules/@polkadot/wasm-bridge/
@polkadot/wasm-crypto-wasm has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        cjs 7.2.2       node_modules/@polkadot/wasm-crypto-wasm/cjs
        esm 7.2.2       node_modules/@polkadot/wasm-crypto-wasm/
@polkadot/wasm-util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        cjs 7.2.2       node_modules/@polkadot/wasm-util/cjs
 ✓ Generating static pages (3/3) 
 ✓ Collecting build traces    
 ✓ Finalizing page optimization 
```
</details>

## Evaluation v1

## Documentation Feedback

- [x] instructions for basic `create-next-app` setup and running it:
    ```zsh
    % npx create-next-app siws-demo --ts && cd siws-demo

    Need to install the following packages:
    create-next-app@14.0.3
    Ok to proceed? (y) y
    ✔ Would you like to use ESLint? … No / Yes
    ✔ Would you like to use Tailwind CSS? … No / Yes
    ✔ Would you like to use `src/` directory? … No / Yes
    ✔ Would you like to use App Router? (recommended) … No / Yes
    ✔ Would you like to customize the default import alias (@/*)? … No / Yes
    Creating a new Next.js app in /Users/xxx/repos/siws-demo.

    Using npm.

    Initializing project with template: app-tw 

    Installing dependencies:
    - react
    - react-dom
    - next

    Installing devDependencies:
    - typescript
    - @types/node
    - @types/react
    - @types/react-dom
    - autoprefixer
    - postcss
    - tailwindcss
    - eslint
    - eslint-config-next

    added 332 packages, and audited 333 packages in 16s

    116 packages are looking for funding
    run `npm fund` for details

    found 0 vulnerabilities
    Success! Created siws-demo at /Users/xxx/repos/siws-demo

    % npm run dev
    > siws-demo@0.1.0 dev
    > next dev

    ▲ Next.js 14.0.3
    - Local:        http://localhost:3000

    Attention: Next.js now collects completely anonymous telemetry regarding usage.
    This information is used to shape Next.js' roadmap and prioritize features.
    You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
    https://nextjs.org/telemetry

    ✓ Ready in 2.9s
    ```
- [x] the signet package is installed successfully
    ```zsh
    % npm install @talismn/siws @polkadot/api @polkadot/extension-dapp

    added 96 packages, and audited 429 packages in 17s

    124 packages are looking for funding
    run `npm fund` for details

    found 0 vulnerabilities
    ```

- [x] Resolved: ~~the demo app has a different file structure than the tutorial (`src/components/demo/ConnectWallet.tsx`) assumes:~~

    ```zsh
    % ll # there is no 'src' folder
    total 456
    -rw-r--r--    1 xxx  staff    1383 Nov 20 17:57 README.md
    drwxr-xr-x    7 xxx  staff     224 Nov 21 09:40 app
    -rw-r--r--    1 xxx  staff     201 Nov 20 17:57 next-env.d.ts
    -rw-r--r--    1 xxx  staff      92 Nov 20 17:57 next.config.js
    drwxr-xr-x  335 xxx  staff   10720 Nov 21 09:44 node_modules
    -rw-r--r--    1 xxx  staff  200943 Nov 21 09:44 package-lock.json
    -rw-r--r--    1 xxx  staff     657 Nov 21 09:44 package.json
    -rw-r--r--    1 xxx  staff      82 Nov 20 17:57 postcss.config.js
    drwxr-xr-x    4 xxx  staff     128 Nov 20 17:57 public
    -rw-r--r--    1 xxx  staff     495 Nov 20 17:57 tailwind.config.ts
    -rw-r--r--    1 xxx  staff     595 Nov 20 17:57 tsconfig.json
    ```

- [x] Resolved: ~~there are unresolved dependencies within the `ConnectWallet.tsx` file:~~
    ```typescript
    // L2
    import { Button } from "@/components/ui/button" // Cannot find module '@/components/ui/button' or its corresponding type declarations.ts(2307)
    ```

- [x] Information on how to open the index.tsx page is missing (e.g. no routing is being set up)

## Testing Feedback

- [x] Resolved: There are now 59 tests. ~~I think it'd make sense to add more tests, especially since the code to cover is very limited in scope. I'd suggest:~~
    - adding test for for the `Address` class
    - test `SiwsMessage` methods, rather than solely its construction
    - test the `parseJson` function

- [x] The already existing tests that are limited to the `SiwsMessage` construction and the `parseMessage` method all pass:
    ```zsh
    % npm run build

    > @talismn/siws@0.0.4 build
    > tsc

    % npm run test         

    > @talismn/siws@0.0.4 test
    > jest

    PASS  test/SiwsMessage.test.ts
    PASS  test/parseMessage.test.ts

    Test Suites: 2 passed, 2 total
    Tests:       15 passed, 15 total
    Snapshots:   0 total
    Time:        0.684 s
    Ran all test suites.
    ```
