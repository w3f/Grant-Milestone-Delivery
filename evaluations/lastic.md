# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/lastic.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Notes |
| ----- | ----------- | ------ | ------- | ------ |
| **0a.** | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/LasticXYZ/LasticUI/blob/main/LICENSE) | Licensed under GPLv3 |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [README.md](https://github.com/LasticXYZ/LasticUI/blob/main/README.md) and [docs.lastic.xyz](https://docs.lastic.xyz/) | Looks good. |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [lastic.xyz](https://www.lastic.xyz/) | Looks good. |
| **0d.** | Error logging | <ul><li>[x] </li></ul> | [Lastic UI/issues](https://github.com/LasticXYZ/LasticUI/issues) | Looks good. |
| **0e.** | Article Publishing | <ul><li>[x] </li></ul> | [Unlocking the Future of Blockspace](https://medium.com/lastic-marketplace/unlocking-the-future-of-blockspace-introducing-lastic-9036b9d6637) | - | 
| **0e.** | Article Publishing | <ul><li>[x] </li></ul> | [The Genesis of Lastic](https://medium.com/lastic-marketplace/the-genesis-of-lastic-a-coretime-marketplace-for-polkadot-75130e40306c) | - |
| **0e.** | Article Publishing | <ul><li>[x] </li></ul> | [Simplifying RFC-1: Understanding Agile Coretime for the Polkadot Network](https://medium.com/lastic-marketplace/the-genesis-of-lastic-a-coretime-marketplace-for-polkadot-75130e40306c) | - |
| **0e.** | Article Publishing | <ul><li>[x] </li></ul> | [Polkadot 2.0: A New Era of Decentralization](https://medium.com/lastic-marketplace/polkadot-2-0-a-new-era-of-decentralization-d5626a6e63e5) | Looks good. |
| **0e.** | Article Publishing | <ul><li>[x] </li></ul> | [Unraveling Agile Coretime: Polkadot’s Innovative Resource Allocation](https://medium.com/lastic-marketplace/unraveling-agile-coretime-polkadots-innovative-resource-allocation-2c025d0daa59)  | Looks good. |
| 1. | Whitepaper creation | <ul><li>[x] </li></ul> | [Lastic Whitepaper v1](https://github.com/LasticXYZ/LasticUI/blob/main/W3FGrant_Lastic_Whitepaper.pdf) | Looks good. |
| 2a. | User Flow Diagram Design | <ul><li>[x] </li></ul> | [Link to Flow Chart](https://www.figma.com/file/aFn15lyvti5hqLJBNUDZlU/Lastic-Flow-Chart-%231?type=whiteboard&node-id=0%3A1&t=ZiWNv9gRsH68D5Km-1) | Looks good.
| 2b. | UI Figma Design | <ul><li>[x] </li></ul> | [Link to Figma UI](https://www.figma.com/proto/druTS8m2bCDNgovAjb0sbH/Lastic-milestone?page-id=0%3A1&type=design&node-id=203-897&viewport=191%2C-177%2C0.06&t=OHMXONHfLogXX1M4-1&scaling=min-zoom&starting-point-node-id=203%3A897&mode=design) | Could link to application prototype instead of landing page. |
| 3a. | Frontend Development - Broker Pallet Integration | <ul><li>[x] </li></ul> | [Substrate Interact Github Link](https://github.com/LasticXYZ/LasticUI/tree/main/substrate-interact) | Looks good.
| 3b. | Mockup-based Frontend Development | <ul><li>[x] </li></ul> | [deployment - test.lastic.xyz](https://test.lastic.xyz/) [Link to Frontend](https://github.com/LasticXYZ/LasticUI/tree/main/substrate_interact) | Nice UX/UI

# General Notes

## Evaluation v2

Overall, great work! The prototype looks great and has a sleek UI. I'm able to connect my wallet and click through the different test pages. I can also spin up a local node and run the UI locally. I was able to get through the [guide](https://docs.lastic.xyz/substrate-interact/interact.html#configuring-the-coretime-chain) to interact with the core time chain from broker pallet. The team resolved the initial issues, `pnpm` is now the only package manager. Docs are also looking much better, thank you!

There are still a few issues to note, but they are not show-stoppers for approving the evaluation:

1. Link in deliverable 3a. [Substrate Interact GitHub Link](https://github.com/LasticXYZ/LasticUI/tree/main/substrate-interact) gives 404 error, but can be found [here](https://github.com/LasticXYZ/LasticUI/tree/main/substrate_interact). Please consider fixing.
2. BrowserStack is not mentioned in the application as a testing suite. In the future please make sure to include these suites in the application along with any applicable e2e tests.

### Tests

<details>

  <summary>pnpm run dev is successful</summary>

```ts
> lastic-ui@ dev /Users/keeganquigley/LasticUI
> pnpm -r --if-present dev

substrate_interact                       |  WARN  The field "resolutions" was found in /Users/keeganquigley/LasticUI/substrate_interact/package.json. This will not take effect. You should configure "resolutions" at the root of the workspace instead.
Scope: 2 of 3 workspace projects
static_frontend dev$ next dev
│ FatalError: error TS6046: Argument for '--moduleResolution' option must be: 'node', 'classic', 'node16', 'nodenext'.
│     at getTypeScriptConfiguration (/Users/keeganquigley/LasticUI/node_modules/.pnpm/next@13.5.6_react-dom@18.2.0_reac…
│     at writeConfigurationDefaults (/Users/keeganquigley/LasticUI/node_modules/.pnpm/next@13.5.6_react-dom@18.2.0_reac…
│     at verifyTypeScriptSetup (/Users/keeganquigley/LasticUI/node_modules/.pnpm/next@13.5.6_react-dom@18.2.0_react@18.…
│     at async verifyTypeScript (/Users/keeganquigley/LasticUI/node_modules/.pnpm/next@13.5.6_react-dom@18.2.0_react@18…
│     at async startWatcher (/Users/keeganquigley/LasticUI/node_modules/.pnpm/next@13.5.6_react-dom@18.2.0_react@18.2.0…
│     at async setupDevBundler (/Users/keeganquigley/LasticUI/node_modules/.pnpm/next@13.5.6_react-dom@18.2.0_react@18.…
│     at async initialize (/Users/keeganquigley/LasticUI/node_modules/.pnpm/next@13.5.6_react-dom@18.2.0_react@18.2.0/n…
│     at async Server.<anonymous> (/Users/keeganquigley/LasticUI/node_modules/.pnpm/next@13.5.6_react-dom@18.2.0_react@…
│
└─ Done in 739ms
substrate_interact dev$ react-app-rewired start
[27 lines collapsed]
│   json modules 128 bytes 2 modules
│ modules by mime type application/x-font-ttf 16.3 KiB
│   data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAOAIAAAwBg.. 5.71 KiB [built] [code generated]
│   + 3 modules
│ modules by mime type application/font-woff 14.6 KiB
│   data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAoU.. 3.41 KiB [built] [code generated]
│   + 3 modules
│ data:image/png;base64,iVBORw0KGgoAAAAN.. 1.29 KiB [built] [code generated]
│ buffer (ignored) 15 bytes [optional] [built] [code generated]
│ webpack 5.89.0 compiled successfully in 4107 ms
└─ Running...
```

</details>

### UI

Mock UI works nicely.

![dash1](https://github.com/w3f/Grant-Milestone-Delivery/assets/35080151/986c8f7d-2102-4dc3-a801-18701376ddee)

![dash2](https://github.com/w3f/Grant-Milestone-Delivery/assets/35080151/6e337e1b-daa4-4dbb-bdac-5d29f96d17a0)

![dash3](https://github.com/w3f/Grant-Milestone-Delivery/assets/35080151/8b06e061-886a-4d60-9f31-cee94d5ac6ac)

![dash4](https://github.com/w3f/Grant-Milestone-Delivery/assets/35080151/6cc19271-e627-4681-bc81-45d255cf3730)



## Evaluation v1


### Tests

<details>

  <summary>pnpm run dev fails</summary>

```js
pnpm run dev

> lastic@0.1.0 dev /Users/keeganquigley/LasticUI/static_frontend
> next dev

FatalError: error TS6046: Argument for '--moduleResolution' option must be: 'node', 'classic', 'node16', 'nodenext'.

    at getTypeScriptConfiguration (/Users/keeganquigley/LasticUI/static_frontend/node_modules/.pnpm/next@13.5.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/lib/typescript/getTypeScriptConfiguration.js:49:19)
    at writeConfigurationDefaults (/Users/keeganquigley/LasticUI/static_frontend/node_modules/.pnpm/next@13.5.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/lib/typescript/writeConfigurationDefaults.js:178:117)
    at verifyTypeScriptSetup (/Users/keeganquigley/LasticUI/static_frontend/node_modules/.pnpm/next@13.5.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/lib/verify-typescript-setup.js:119:74)
    at async verifyTypeScript (/Users/keeganquigley/LasticUI/static_frontend/node_modules/.pnpm/next@13.5.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/lib/router-utils/setup-dev-bundler.js:108:26)
    at async startWatcher (/Users/keeganquigley/LasticUI/static_frontend/node_modules/.pnpm/next@13.5.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/lib/router-utils/setup-dev-bundler.js:129:29)
    at async setupDevBundler (/Users/keeganquigley/LasticUI/static_frontend/node_modules/.pnpm/next@13.5.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/lib/router-utils/setup-dev-bundler.js:1627:20)
    at async initialize (/Users/keeganquigley/LasticUI/static_frontend/node_modules/.pnpm/next@13.5.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/lib/router-server.js:71:30)
    at async Server.<anonymous> (/Users/keeganquigley/LasticUI/static_frontend/node_modules/.pnpm/next@13.5.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/lib/start-server.js:221:36)
```
</details>

<details>

  <summary>yarn start also fails</summary>

```js
yarn start
yarn run v1.22.19
warning ../../package.json: No license field
$ next start
[Error: ENOENT: no such file or directory, open '/Users/keeganquigley/LasticUI/static_frontend/.next/BUILD_ID'] {
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: '/Users/keeganquigley/LasticUI/static_frontend/.next/BUILD_ID'
}
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
</details>

Doing the same thing on Ubuntu:
```js
ubuntu@ip-172-31-26-199:~/LasticUI/static_frontend$ yarn start
yarn run v1.22.19
$ next start
[Error: ENOENT: no such file or directory, open '/home/ubuntu/LasticUI/static_frontend/.next/BUILD_ID'] {
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: '/home/ubuntu/LasticUI/static_frontend/.next/BUILD_ID'
}
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
Okay, I was able to get the front-end running from the [substrate-interact](https://github.com/LasticXYZ/LasticUI/tree/main/substrate-interact) dir. But I'm not sure where I'm supposed to be entering the extrinsics in the [coretime-chain-setup](https://github.com/LasticXYZ/LasticUI/tree/main/substrate-interact#coretime-chain-setup). Also `yarn test` doesn't seem to be working in any of the directories.

<img width="911" alt="substrate-interact" src="https://github.com/w3f/Grant-Milestone-Delivery/assets/35080151/bf21c9b6-609b-4a61-b8c3-593415b1b524">
