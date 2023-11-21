# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/signet.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
|-|-|-|-|-|  
| 0a. | License | <ul><li>[x] </li></ul>| [MIT](https://github.com/TalismanSociety/siws/blob/44db2e2b36d9b350a77777bf67c2da97333bd6d7/LICENSE) | - |
| 0b. | Documentation | <ul><li>[ ] </li></ul>| | See [Documentation Feedback](#documentation-feedback) |  
| 0c. | Testing and Testing Guide | <ul><li>[ ] </li></ul>| | See [Testing Feedback](#testing-feedback) |
| 0d. | Docker | <ul><li>[ ] </li></ul>| | Missing; Has to be amended, if it won't be delivered. |
| 0e. | Article | <ul><li>[x] </li></ul>| [Article draft](https://docs.google.com/document/d/1Px3RAxQnBMDzZLuw5okXZmCL1VP6gfhxEVvOBaFPiqQ/edit?usp=sharing) | (to be evaluated, once 0b., 0c. are fixed) |
| 1. | JS Package: Sign in with Substrate | <ul><li>[x] </li></ul>| [siws repo](https://github.com/TalismanSociety/siws/tree/44db2e2b36d9b350a77777bf67c2da97333bd6d7) | - |
| 2. | Feature: Custom message | <ul><li>[ ] </li></ul>| | (to be evaluated, once 0b., 0c. are fixed) |
| 3. | Feature: Expiration | <ul><li>[ ] </li></ul>| | (to be evaluated, once 0b., 0c. are fixed) |  
| 4. | Feature: Message Formats | <ul><li>[ ] </li></ul>| | (to be evaluated, once 0b., 0c. are fixed) |
| 5. | Feature: Message Verification | <ul><li>[ ] </li></ul>| | (to be evaluated, once 0b., 0c. are fixed) |
| 6. | Example: Integrate SIWS into Signet | <ul><li>[ ] </li></ul>| | (to be evaluated, once 0b., 0c. are fixed) |  
| 7. | Example: Create example dapp for SIWS | <ul><li>[ ] </li></ul>| | (to be evaluated, once 0b., 0c. are fixed) |
| 8. | Public Docs: Sign in with Substrate | <ul><li>[ ] </li></ul>| | (to be evaluated, once 0b., 0c. are fixed) |

## General Notes

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

- [ ] the demo app has a different file structure than the tutorial (`src/components/demo/ConnectWallet.tsx`) assumes:

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

- [ ] there are unresolved dependencies within the `ConnectWallet.tsx` file:
    ```typescript
    // L2
    import { Button } from "@/components/ui/button" // Cannot find module '@/components/ui/button' or its corresponding type declarations.ts(2307)
    ```

- [ ] Information on how to open the index.tsx page is missing (e.g. no routing is being set up)

## Testing Feedback

- [ ] I think it'd make sense to add more tests, especially since the code to cover is very limited in scope. I'd suggest:
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
