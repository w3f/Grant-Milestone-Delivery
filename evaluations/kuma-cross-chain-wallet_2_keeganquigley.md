# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/cross-chain-wallet.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- |------------- | ------------- |
| 0a. | License | <ul><li>[x] </li></ul> | https://github.com/blockcoders/kuma-wallet/blob/main/LICENSE | MIT |
| 0b. | Documentation | <ul><li>[x] </li></ul> | https://github.com/blockcoders/kuma-wallet/blob/main/README.md, https://github.com/blockcoders/kuma-wallet/blob/main/README-es.md | Looks good. |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | https://github.com/blockcoders/kuma-wallet#running-locally | Looks good. |
| 1. | Custom tokens | <ul><li>[x] </li></ul> | https://github.com/blockcoders/kuma-wallet/blob/main/src/pages/manageAssets/ManageAssets.tsx | Looks good. |
| 2. | Mesasges EVM - WASM | <ul><li>[x] </li></ul> | https://github.com/blockcoders/kuma-wallet/blob/main/src/pages/signMessage/SignMessage.tsx | Looks good. |
| 3. | Transfer EVM - WASM | <ul><li>[x] </li></ul> | https://github.com/blockcoders/kuma-wallet/blob/main/src/pages/send/Send.tsx | Looks good. |
| 4. | Transaction history | <ul><li>[x] </li></ul> | https://github.com/blockcoders/kuma-wallet/blob/main/src/entries/background/index.ts | Looks good. |
| 5. | Explorer link | <ul><li>[x] </li></ul> | https://github.com/blockcoders/kuma-wallet/blob/main/src/constants/chains.ts | Looks good. |

# General

Very well built wallet! It is sleek and I like it's simplicity, has a similar feel to using MetaMask. I was able to create and import test wallets and the UI is great, I didn't encounter any issues. I would love to see the addition of QR code functionality. I am also excited to try the XCM functionality in the next milestone.


## Tests

Well documented code and tests. All GH action CI is successful.

All 411 unit tests pass:
```js
 Test Files  56 passed (56)
      Tests  411 passed (411)
   Start at  16:35:02
   Duration  10.59s (transform 1.12s, setup 5.28s, collect 11.92s, tests 3.88s, environment 10.89s, prepare 2.42s)
```

Good coverage:
```js
 % Coverage report from c8
-------------------------------|---------|----------|---------|---------|--------------------------------------------------
File                           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-------------------------------|---------|----------|---------|---------|--------------------------------------------------
All files                      |   92.81 |    78.31 |   85.07 |   92.81 |
 src                           |     100 |    95.69 |     100 |     100 |
  Extension.ts                 |     100 |    95.69 |     100 |     100 | 63,83,245,289
 src/accounts                  |   98.11 |       66 |   93.33 |   98.11 |
  AccountManager.ts            |      98 |     65.3 |   93.33 |      98 | 104,129,143-144
  types.ts                     |     100 |      100 |     100 |     100 |
 src/hooks                     |     100 |      100 |     100 |     100 |
  index.ts                     |     100 |      100 |     100 |     100 |
 src/hooks/common              |   98.91 |     90.9 |     100 |   98.91 |
  useCopyToClipboard.tsx       |   98.03 |       80 |     100 |   98.03 | 20
  useLoading.tsx               |     100 |      100 |     100 |     100 |
  useToast.tsx                 |     100 |      100 |     100 |     100 |
 src/i18n                      |     100 |      100 |     100 |     100 |
  index.ts                     |     100 |      100 |     100 |     100 |
 src/pages/accountForm         |   81.38 |    51.16 |   15.38 |   81.38 |
  AccountForm.tsx              |   81.38 |    51.16 |   15.38 |   81.38 | ...3-250,281-282,309,340-341,347,376-377,390-402
 src/pages/addAccount          |     100 |      100 |     100 |     100 |
  AddAccount.tsx               |     100 |      100 |     100 |     100 |
  OptionButton.tsx             |     100 |      100 |     100 |     100 |
 src/pages/balance/components  |   93.13 |    53.48 |   65.62 |   93.13 |
  AccountList.tsx              |   91.05 |     62.5 |   33.33 |   91.05 | 27-28,47,93,96-98,101-104
  AccountSelected.tsx          |     100 |       50 |     100 |     100 | 13
  Activity.tsx                 |   94.03 |    56.66 |     100 |   94.03 | 62-63,76-77,88,91,101,115,117,119,157-159
  Assets.tsx                   |   96.15 |    42.85 |      25 |   96.15 | 43-45,52-53
  ChainSelector.tsx            |   94.76 |    73.68 |    87.5 |   94.76 | 68-70,73,93-94,164-166,185
  ConfirmChainChangeModal.tsx  |   84.05 |    11.11 |      50 |   84.05 | 72,80,89-91,112-128
  TotalBalance.tsx             |     100 |       50 |   33.33 |     100 | 28-35
 src/pages/manageAssets        |   96.75 |    46.15 |      50 |   96.75 |
  ManageAssets.tsx             |   96.75 |    46.15 |      50 |   96.75 | 52,54-55,87-88
 src/pages/receive             |     100 |    33.33 |      50 |     100 |
  Receive.tsx                  |     100 |    33.33 |      50 |     100 | 20-41
 src/pages/send/components     |    91.2 |    72.89 |   70.58 |    91.2 |
  ConfirmTx.tsx                |     100 |    33.33 |      50 |     100 | 36-82
  Destination.tsx              |    83.9 |    77.41 |   57.14 |    83.9 | 33-39,46-52,58-63,138-146,160-163
  EvmForm.tsx                  |   81.73 |    59.09 |     100 |   81.73 | 81,125-155,157,181,193-200
  Fees.tsx                     |     100 |      100 |     100 |     100 |
  SelectableAsset.tsx          |     100 |     87.5 |     100 |     100 | 27
  SelectableChain.tsx          |     100 |      100 |     100 |     100 |
  WasmForm.tsx                 |   93.18 |    69.69 |   66.66 |   93.18 | 97-99,160-165,170-171,217-218,234-238
 src/pages/settings            |   90.97 |    71.79 |   40.54 |   90.97 |
  Contacts.tsx                 |   92.39 |    70.37 |   44.44 |   92.39 | 42-48,83-84,99,107-113,124,221-222
  General.tsx                  |   93.04 |    81.48 |   66.66 |   93.04 | 48-49,68-76,93-94
  Security.tsx                 |   88.91 |     62.5 |   26.31 |   88.91 | ...,95-96,99-102,110-111,118-124,166-167,190-192
 src/pages/signIn              |   90.21 |    66.66 |   57.14 |   90.21 |
  SignIn.tsx                   |   90.21 |    66.66 |   57.14 |   90.21 | 26-27,37-39,42-43,70-71
 src/pages/signMessage         |   98.31 |    57.14 |     100 |   98.31 |
  SignMessage.tsx              |   98.31 |    57.14 |     100 |   98.31 | 76-77
 src/pages/welcome             |     100 |      100 |     100 |     100 |
  Welcome.tsx                  |     100 |      100 |     100 |     100 |
 src/providers                 |     100 |      100 |     100 |     100 |
  index.ts                     |     100 |      100 |     100 |     100 |
 src/providers/accountProvider |   76.69 |    72.72 |   83.33 |   76.69 |
  AccountProvider.tsx          |   76.58 |    72.72 |   83.33 |   76.58 | 50-62,64,97-99,112-116,136-137,141-162,184-185
  index.ts                     |     100 |      100 |     100 |     100 |
 src/providers/assetProvider   |      87 |    65.62 |     100 |      87 |
  AssetProvider.tsx            |   86.98 |    65.62 |     100 |   86.98 | ...6,288-289,312-313,337-362,386-387,441-442,511
  index.ts                     |     100 |      100 |     100 |     100 |
 src/providers/authProvider    |     100 |    95.23 |     100 |     100 |
  AuthProvider.tsx             |     100 |    95.23 |     100 |     100 | 79
  index.ts                     |     100 |      100 |     100 |     100 |
 src/providers/networkProvider |   93.19 |    81.39 |    87.5 |   93.19 |
  NetworkProvider.tsx          |   93.16 |    81.39 |    87.5 |   93.16 | 132-133,177-178,188-189,193-202
  index.ts                     |     100 |      100 |     100 |     100 |
 src/providers/txProvider      |   92.85 |       75 |    87.5 |   92.85 |
  TxProvider.tsx               |   92.79 |       75 |    87.5 |   92.79 | 52,102,113-114,138-139,177-186
  index.ts                     |     100 |      100 |     100 |     100 |
 src/storage                   |     100 |     97.5 |     100 |     100 |
  Auth.ts                      |     100 |      100 |     100 |     100 |
  Storage.ts                   |     100 |     92.3 |     100 |     100 | 22
 src/storage/entities          |   96.15 |    92.85 |   96.39 |   96.15 |
  Account.ts                   |     100 |      100 |     100 |     100 |
  Accounts.ts                  |    90.9 |    95.65 |    87.5 |    90.9 | 43-46,49-52
  Assets.ts                    |   90.74 |    91.66 |   85.71 |   90.74 | 28-32
  BackUp.ts                    |     100 |      100 |     100 |     100 |
  BaseEntity.ts                |     100 |      100 |     100 |     100 |
  CacheAuth.ts                 |   87.91 |    84.21 |    90.9 |   87.91 | 27-28,45-46,59-62,71-73
  Chains.ts                    |   98.26 |    93.54 |     100 |   98.26 | 111-112
  Keyring.ts                   |     100 |    88.88 |     100 |     100 | 21-22
  Network.ts                   |     100 |     90.9 |     100 |     100 | 33
  SelectedAccount.ts           |     100 |    66.66 |     100 |     100 | 26-28
  TrustedSites.ts              |     100 |      100 |     100 |     100 |
  Vault.ts                     |   98.11 |    96.77 |     100 |   98.11 | 35-36
 src/storage/entities/activity |    97.5 |    79.31 |    87.5 |    97.5 |
  Activity.ts                  |   95.71 |    77.77 |    87.5 |   95.71 | 17-18,36
  types.ts                     |     100 |      100 |     100 |     100 |
 src/storage/entities/registry |   96.15 |    77.14 |     100 |   96.15 |
  Contact.ts                   |     100 |      100 |     100 |     100 |
  Register.ts                  |     100 |      100 |     100 |     100 |
  Registry.ts                  |   95.57 |    74.19 |     100 |   95.57 | 91-93,96-97
 src/storage/entities/settings |     100 |    96.42 |     100 |     100 |
  LanguageSetting.ts           |     100 |      100 |     100 |     100 |
  Setting.ts                   |     100 |      100 |     100 |     100 |
  Settings.ts                  |     100 |    93.75 |     100 |     100 | 66
  types.ts                     |     100 |      100 |     100 |     100 |
 src/utils                     |   98.13 |    89.58 |     100 |   98.13 |
  account-utils.ts             |     100 |      100 |     100 |     100 |
  assets.ts                    |   97.61 |    86.95 |     100 |   97.61 | 72-73
  constants.ts                 |     100 |      100 |     100 |     100 |
  env.ts                       |     100 |       50 |     100 |     100 | 5
  i18n.ts                      |     100 |      100 |     100 |     100 |
  utils.ts                     |   95.55 |    88.88 |     100 |   95.55 | 39-40
-------------------------------|---------|----------|---------|---------|--------------------------------------------------

=============================== Coverage summary ===============================
Statements   : 92.81% ( 6670/7186 )
Branches     : 78.31% ( 816/1042 )
Functions    : 85.07% ( 359/422 )
Lines        : 92.81% ( 6670/7186 )
================================================================================
```
## Linting

Consider fixing this warning about rules for next milestone:
```js
/Users/keeganquigley/kuma-wallet/src/Extension.ts
  227:73  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  311:47  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/Users/keeganquigley/kuma-wallet/src/entries/background/index.ts
  204:20  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/Users/keeganquigley/kuma-wallet/src/entries/scripts/contentScript.ts
  6:12  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/Users/keeganquigley/kuma-wallet/src/storage/entities/BaseEntity.ts
  12:45  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  15:18  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/Users/keeganquigley/kuma-wallet/src/storage/entities/CacheAuth.ts
  33:18  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/Users/keeganquigley/kuma-wallet/src/utils/assets.ts
  16:23  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/Users/keeganquigley/kuma-wallet/src/utils/utils.ts
  19:32  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

✖ 9 problems (0 errors, 9 warnings)
```
Please note: No security audits were performed as a part of this evaluation.
