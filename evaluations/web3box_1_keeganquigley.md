# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Web3Box.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley


| Number | Deliverable   | Accepted | Link                                                                                 | Notes |
|--------|---------------|----------|----------------------------------------------------------------------------|-------|
| 0a.    | License   | <ul><li>[x] </li></ul> | MIT            |       |
| 0b.    | Documentation       | <ul><li>[ ] </li></ul> | https://github.com/web3box-labs/apps/blob/main/README.md |    |
| 0c.    | Testing Guide      | <ul><li>[ ] </li></ul> | https://github.com/web3box-labs/apps/tree/main/doc |  |
| 0d.    | Article         | <ul><li>[ ] </li></ul> | https://twitter.com/w3b_official/status/1623649936364703744                 |       |
| 1.     | Implementations of APIs from third parties | <ul><li>[ ] </li></ul> |  |       |
| 2.     | Dashboard | <ul><li>[ ] </li></ul> |   |

# General Notes

The app runs successfully with yarn however generates a lot of warnings about unused variables. Can you check to see if any of these can be addressed?

```js
src/ui/pages/UserInfo/UserInfo.js
  Line 3:19:    'useDispatch' is defined but never used                                                                                                                                                                                                                                                                                                                                   no-unused-vars
  Line 3:32:    'useSelector' is defined but never used                                                                                                                                                                                                                                                                                                                                   no-unused-vars
  Line 4:22:    'setPrivateKey' is defined but never used                                                                                                                                                                                                                                                                                                                                 no-unused-vars
  Line 20:11:   'useLocations' is assigned a value but never used                                                                                                                                                                                                                                                                                                                         no-unused-vars
  Line 21:65:   'setethAddress' is assigned a value but never used                                                                                                                                                                                                                                                                                                                        no-unused-vars
  Line 62:17:   Expected '===' and instead saw '=='                                                                                                                                                                                                                                                                                                                                       eqeqeq
  Line 76:18:   Expected '===' and instead saw '=='                                                                                                                                                                                                                                                                                                                                       eqeqeq
  Line 94:21:   Expected '===' and instead saw '=='                                                                                                                                                                                                                                                                                                                                       eqeqeq
  Line 98:24:   Expected '===' and instead saw '=='                                                                                                                                                                                                                                                                                                                                       eqeqeq
  Line 102:26:  Expected '===' and instead saw '=='                                                                                                                                                                                                                                                                                                                                       eqeqeq
  Line 177:25:  'indexdb' is already defined                                                                                                                                                                                                                                                                                                                                              no-redeclare
  Line 178:25:  'r' is already defined                                                                                                                                                                                                                                                                                                                                                    no-redeclare
  Line 178:25:  'r' is assigned a value but never used                                                                                                                                                                                                                                                                                                                                    no-unused-vars
  Line 197:13:  'pkey' is assigned a value but never used                                                                                                                                                                                                                                                                                                                                 no-unused-vars
  Line 198:28:  Expected '===' and instead saw '=='                                                                                                                                                                                                                                                                                                                                       eqeqeq
  Line 220:41:  Expected '===' and instead saw '=='                                                                                                                                                                                                                                                                                                                                       eqeqeq
  Line 223:62:  'previousNonce' is assigned a value but never used                                                                                                                                                                                                                                                                                                                        no-unused-vars
  Line 225:28:  Expected '===' and instead saw '=='                                                                                                                                                                                                                                                                                                                                       eqeqeq
  Line 228:62:  'previousNonce' is assigned a value but never used                                                                                                                                                                                                                                                                                                                        no-unused-vars
  Line 234:55:  Expected '===' and instead saw '=='                                                                                                                                                                                                                                                                                                                                       eqeqeq
  Line 239:7:   React Hook useEffect has missing dependencies: 'Navigate', 'account', 'getBalance', and 'seed'. Either include them or remove the dependency array                                                                                                                                                                                                                        react-hooks/exhaustive-deps
  Line 261:17:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images                                                                                                                                                                                                                                                                 jsx-a11y/alt-text
  Line 277:21:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images                                                                                                                                                                                                                                                                 jsx-a11y/alt-text
  Line 292:52:  Expected '===' and instead saw '=='                                                                                                                                                                                                                                                                                                                                       eqeqeq
  Line 293:52:  Expected '===' and instead saw '=='                                                                                                                                                                                                                                                                                                                                       eqeqeq
  Line 298:44:  Expected '===' and instead saw '=='                                                                                                                                                                                                                                                                                                                                       eqeqeq
  Line 313:44:  Expected '===' and instead saw '=='                                                                                                                                                                                                                                                                                                                                       eqeqeq
  Line 323:51:  Expected '===' and instead saw '=='                                                                                                                                                                                                                                                                                                                                       eqeqeq
  Line 329:35:  The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
  Line 330:38:  The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
  Line 331:43:  The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
  Line 332:47:  The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
  Line 348:45:  Expected '===' and instead saw '=='                                                                                                                                                                                                                                                                                                                                       eqeqeq
  Line 349:21:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images                                                                                                                                                                                                                                                                 jsx-a11y/alt-text
  Line 351:45:  Expected '===' and instead saw '=='                                                                                                                                                                                                                                                                                                                                       eqeqeq
  Line 352:21:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images                                                                                                                                                                                                                                                                 jsx-a11y/alt-text
  Line 354:45:  Expected '===' and instead saw '=='                                                                                                                                                                                                                                                                                                                                       eqeqeq
  Line 355:21:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images                                                                                                                                                                                                                                                                 jsx-a11y/alt-text

src/ui/pages/WalletConfirm/Confirm.js
  Line 1:26:   'useEffect' is defined but never used               no-unused-vars
  Line 3:19:   'useDispatch' is defined but never used             no-unused-vars
  Line 3:32:   'useSelector' is defined but never used             no-unused-vars
  Line 5:18:   'Select' is defined but never used                  no-unused-vars
  Line 5:26:   'message' is defined but never used                 no-unused-vars
  Line 5:35:   'Input' is defined but never used                   no-unused-vars
  Line 11:12:  'setAddress' is assigned a value but never used     no-unused-vars
  Line 11:23:  'address' is assigned a value but never used        no-unused-vars
  Line 26:11:  'PrivateWallet' is assigned a value but never used  no-unused-vars

src/ui/pages/WalletHome/WalletHome.js
  Line 4:19:   'useDispatch' is defined but never used                                                                          no-unused-vars
  Line 4:32:   'useSelector' is defined but never used                                                                          no-unused-vars
  Line 5:55:   'setUserimg' is defined but never used                                                                           no-unused-vars
  Line 10:10:  'Button' is defined but never used                                                                               no-unused-vars
  Line 10:32:  'Pagination' is defined but never used                                                                           no-unused-vars
  Line 11:8:   'axios' is defined but never used                                                                                no-unused-vars
  Line 15:29:  'seed' is assigned a value but never used                                                                        no-unused-vars
  Line 16:21:  'setTabType' is assigned a value but never used                                                                  no-unused-vars
  Line 17:21:  'setLodingL' is assigned a value but never used                                                                  no-unused-vars
  Line 20:11:  'RecordBtn' is assigned a value but never used                                                                   no-unused-vars
  Line 26:13:  'query' is assigned a value but never used                                                                       no-unused-vars
  Line 47:8:   React Hook useEffect has a missing dependency: 'getTransList'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
  Line 73:29:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images        jsx-a11y/alt-text
  Line 73:50:  Expected '===' and instead saw '=='                                                                              eqeqeq

src/ui/style/iconfont.js
  Line 7:7:   'SubSvg' is assigned a value but never used     no-unused-vars
  Line 20:7:  'SearchSvg' is assigned a value but never used  no-unused-vars

webpack compiled with 1 warning
```

`yarn test` also doesn't work to run any tests. I'm not seeing a tests folder or any unit tests.
**UPDATE:** Team has now included unit tests.
## Evaluation V2

1. `yarn build` and `yarn run` works successfully, but with a ton of warnings about variables that are defined and/or assigned a value but never used:

```js
yarn run v1.22.15
warning ../package.json: No license field
$ node scripts/build.js
Creating an optimized production build...
Compiled with warnings.

[eslint]
src/ui/App.js
  Line 3:27:   'IndexRoute' is defined but never used                                               no-unused-vars
  Line 3:38:   'useState' is defined but never used                                                 no-unused-vars
  Line 3:47:   'useRef' is defined but never used                                                   no-unused-vars
  Line 5:47:   'Navigate' is defined but never used                                                 no-unused-vars
  Line 36:11:  Imported JSX component _WindowWrapper must be in PascalCase or SCREAMING_SNAKE_CASE  react/jsx-pascal-case

src/ui/pages/CreatWalletFile/CreatWalletFile.js
  Line 3:19:   'useDispatch' is defined but never used                                                                                                                                                                                                                                                                                                                                   no-unused-vars
  Line 3:32:   'useSelector' is defined but never used                                                                                                                                                                                                                                                                                                                                   no-unused-vars
  Line 12:13:  'account' is assigned a value but never used                                                                                                                                                                                                                                                                                                                              no-unused-vars
  Line 12:21:  'address' is assigned a value but never used                                                                                                                                                                                                                                                                                                                              no-unused-vars
  Line 13:18:  'password' is assigned a value but never used                                                                                                                                                                                                                                                                                                                             no-unused-vars
  Line 13:27:  'list' is assigned a value but never used                                                                                                                                                                                                                                                                                                                                 no-unused-vars
  Line 29:56:  The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
  Line 34:21:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images                                                                                                                                                                                                                                                                 jsx-a11y/alt-text
  Line 43:7:   'mapDispatchToProps' is assigned a value but never used                                                                                                                                                                                                                                                                                                                   no-unused-vars

src/ui/pages/CreatWallte/CreatWallte.js
  Line 4:19:   'useDispatch' is defined but never used                                                                    no-unused-vars
  Line 4:32:   'useSelector' is defined but never used                                                                    no-unused-vars
  Line 5:22:   'setSeed' is defined but never used                                                                        no-unused-vars
  Line 5:31:   'setPrivateKey' is defined but never used                                                                  no-unused-vars
  Line 12:9:   'Option' is assigned a value but never used                                                                no-unused-vars
  Line 33:18:  'setlist' is assigned a value but never used                                                               no-unused-vars
  Line 34:12:  'loadings' is assigned a value but never used                                                              no-unused-vars
  Line 34:22:  'setLoadings' is assigned a value but never used                                                           no-unused-vars
  Line 38:23:  Expected '===' and instead saw '=='                                                                        eqeqeq
  Line 81:29:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
  Line 90:39:  Expected '===' and instead saw '=='                                                                        eqeqeq

src/ui/pages/Dashboard/Dashboard.js
  Line 1:36:    'useRef' is defined but never used                                                                                                            no-unused-vars
  Line 3:19:    'useDispatch' is defined but never used                                                                                                       no-unused-vars
  Line 3:32:    'useSelector' is defined but never used                                                                                                       no-unused-vars
  Line 5:8:     'Talisman' is defined but never used                                                                                                          no-unused-vars
  Line 6:9:     'parseTime' is defined but never used                                                                                                         no-unused-vars
  Line 6:32:    'queryHttpBalance' is defined but never used                                                                                                  no-unused-vars
  Line 10:10:   'Button' is defined but never used                                                                                                            no-unused-vars
  Line 10:25:   'Input' is defined but never used                                                                                                             no-unused-vars
  Line 10:31:   'Modal' is defined but never used                                                                                                             no-unused-vars
  Line 10:37:   'messag' is defined but never used                                                                                                            no-unused-vars
  Line 10:44:   'Card' is defined but never used                                                                                                              no-unused-vars
  Line 23:8:    'icon_btc_img' is defined but never used                                                                                                      no-unused-vars
  Line 24:8:    'icon_eth_img' is defined but never used                                                                                                      no-unused-vars
  Line 25:8:    'icon_fil_img' is defined but never used                                                                                                      no-unused-vars
  Line 26:8:    'recent_trans_img' is defined but never used                                                                                                  no-unused-vars
  Line 29:13:   'echarts' is defined but never used                                                                                                           no-unused-vars
  Line 34:11:   'useLocations' is assigned a value but never used                                                                                             no-unused-vars
  Line 35:32:   'seed' is assigned a value but never used                                                                                                     no-unused-vars
  Line 55:18:   'setData' is assigned a value but never used                                                                                                  no-unused-vars
  Line 155:54:  Expected '===' and instead saw '=='                                                                                                           eqeqeq
  Line 159:7:   React Hook useEffect has missing dependencies: 'Navigate', 'account', and 'getTransList'. Either include them or remove the dependency array  react-hooks/exhaustive-deps
  Line 163:54:  Expected '===' and instead saw '=='                                                                                                           eqeqeq
  Line 167:7:   React Hook useEffect has missing dependencies: 'Navigate', 'account', and 'getBalance'. Either include them or remove the dependency array    react-hooks/exhaustive-deps
  Line 181:18:  Expected '===' and instead saw '=='                                                                                                           eqeqeq
  Line 189:56:  'previousNonce' is assigned a value but never used                                                                                            no-unused-vars
  Line 202:52:  'previousNonce' is assigned a value but never used                                                                                            no-unused-vars
  Line 204:36:  Expected '===' and instead saw '=='                                                                                                           eqeqeq
  Line 211:54:  Expected '===' and instead saw '=='                                                                                                           eqeqeq
  Line 254:13:  'query' is assigned a value but never used                                                                                                    no-unused-vars
  Line 257:28:  Array.prototype.map() expects a return value from arrow function                                                                              array-callback-return
  Line 272:17:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images                                     jsx-a11y/alt-text
  Line 274:21:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images                                     jsx-a11y/alt-text
  Line 285:56:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images                                     jsx-a11y/alt-text
  Line 345:29:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images                                     jsx-a11y/alt-text
  Line 376:21:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images                                     jsx-a11y/alt-text
  Line 383:38:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images                                     jsx-a11y/alt-text
  Line 396:38:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images                                     jsx-a11y/alt-text
  Line 409:38:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images                                     jsx-a11y/alt-text
  Line 422:38:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images                                     jsx-a11y/alt-text
  Line 435:38:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images                                     jsx-a11y/alt-text
  Line 448:38:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images                                     jsx-a11y/alt-text
  Line 461:38:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images                                     jsx-a11y/alt-text

src/ui/pages/LoginWallet/LoginWallet.js
  Line 4:19:   'useDispatch' is defined but never used                no-unused-vars
  Line 4:32:   'useSelector' is defined but never used                no-unused-vars
  Line 5:57:   'setPrivateKey' is defined but never used              no-unused-vars
  Line 6:10:   'mnemonicGenerate' is defined but never used           no-unused-vars
  Line 9:34:   'Upload' is defined but never used                     no-unused-vars
  Line 13:9:   'Option' is assigned a value but never used            no-unused-vars
  Line 18:12:  'tabType' is assigned a value but never used           no-unused-vars
  Line 18:21:  'setTabType' is assigned a value but never used        no-unused-vars
  Line 19:26:  'setFilesContent' is assigned a value but never used   no-unused-vars
  Line 20:12:  'fileName' is assigned a value but never used          no-unused-vars
  Line 20:22:  'setFileName' is assigned a value but never used       no-unused-vars
  Line 24:12:  'loadings' is assigned a value but never used          no-unused-vars
  Line 35:11:  'WalletHomeRouter' is assigned a value but never used  no-unused-vars
  Line 40:13:  'PassClick' is assigned a value but never used         no-unused-vars
  Line 47:13:  'ConfirmLogin' is assigned a value but never used      no-unused-vars
  Line 59:13:  'ps4' is assigned a value but never used               no-unused-vars

src/ui/pages/Menu/Menu.js
  Line 13:8:    'ipfs_img' is defined but never used                                                                       no-unused-vars
  Line 14:8:    'Loding' is defined but never used                                                                         no-unused-vars
  Line 17:8:    'axios' is defined but never used                                                                          no-unused-vars
  Line 32:10:   'collapsed' is assigned a value but never used                                                             no-unused-vars
  Line 32:21:   'setCollapsed' is assigned a value but never used                                                          no-unused-vars
  Line 58:25:   Expected '===' and instead saw '=='                                                                        eqeqeq
  Line 58:50:   Expected '===' and instead saw '=='                                                                        eqeqeq
  Line 58:80:   Expected '===' and instead saw '=='                                                                        eqeqeq
  Line 61:25:   Expected '===' and instead saw '=='                                                                        eqeqeq
  Line 64:25:   Expected '===' and instead saw '=='                                                                        eqeqeq
  Line 73:21:   Expected '===' and instead saw '=='                                                                        eqeqeq
  Line 94:27:   img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
  Line 99:17:   img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
  Line 100:77:  Expected '===' and instead saw '=='                                                                        eqeqeq
  Line 101:77:  Expected '===' and instead saw '=='                                                                        eqeqeq

src/ui/pages/PrivateWallet/PrivateWallet.js
  Line 4:19:   'useDispatch' is defined but never used                no-unused-vars
  Line 4:32:   'useSelector' is defined but never used                no-unused-vars
  Line 5:46:   'setAddress' is defined but never used                 no-unused-vars
  Line 5:57:   'setPrivateKey' is defined but never used              no-unused-vars
  Line 8:18:   'message' is defined but never used                    no-unused-vars
  Line 8:34:   'Upload' is defined but never used                     no-unused-vars
  Line 11:9:   'Option' is assigned a value but never used            no-unused-vars
  Line 13:13:  'setAccount' is assigned a value but never used        no-unused-vars
  Line 13:24:  'setethAddress' is assigned a value but never used     no-unused-vars
  Line 13:39:  'dispatch' is assigned a value but never used          no-unused-vars
  Line 16:12:  'tabType' is assigned a value but never used           no-unused-vars
  Line 16:21:  'setTabType' is assigned a value but never used        no-unused-vars
  Line 17:12:  'filesContent' is assigned a value but never used      no-unused-vars
  Line 17:26:  'setFilesContent' is assigned a value but never used   no-unused-vars
  Line 18:12:  'fileName' is assigned a value but never used          no-unused-vars
  Line 18:22:  'setFileName' is assigned a value but never used       no-unused-vars
  Line 19:12:  'passwords' is assigned a value but never used         no-unused-vars
  Line 20:12:  'newpasswords' is assigned a value but never used      no-unused-vars
  Line 21:12:  'seedValue' is assigned a value but never used         no-unused-vars
  Line 22:12:  'loadings' is assigned a value but never used          no-unused-vars
  Line 22:22:  'setLoadings' is assigned a value but never used       no-unused-vars
  Line 33:11:  'WalletHomeRouter' is assigned a value but never used  no-unused-vars
  Line 37:13:  'PassClick' is assigned a value but never used         no-unused-vars

src/ui/pages/Risk/Risk.js
  Line 1:17:   'useState' is defined but never used                                                                       no-unused-vars
  Line 3:19:   'useDispatch' is defined but never used                                                                    no-unused-vars
  Line 3:32:   'useSelector' is defined but never used                                                                    no-unused-vars
  Line 7:10:   'Button' is defined but never used                                                                         no-unused-vars
  Line 7:18:   'Select' is defined but never used                                                                         no-unused-vars
  Line 7:26:   'message' is defined but never used                                                                        no-unused-vars
  Line 7:35:   'Input' is defined but never used                                                                          no-unused-vars
  Line 7:41:   'Modal' is defined but never used                                                                          no-unused-vars
  Line 10:13:  'account' is assigned a value but never used                                                               no-unused-vars
  Line 10:21:  'privateKey' is assigned a value but never used                                                            no-unused-vars
  Line 11:11:  'Navigate' is assigned a value but never used                                                              no-unused-vars
  Line 21:17:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text

src/ui/pages/UserInfo/UserInfo.js
  Line 3:19:    'useDispatch' is defined but never used                                                                                                                                                                                                                                                                                                                                   no-unused-vars
  Line 3:32:    'useSelector' is defined but never used                                                                                                                                                                                                                                                                                                                                   no-unused-vars
  Line 4:22:    'setPrivateKey' is defined but never used                                                                                                                                                                                                                                                                                                                                 no-unused-vars
  Line 20:11:   'useLocations' is assigned a value but never used                                                                                                                                                                                                                                                                                                                         no-unused-vars
  Line 21:65:   'setethAddress' is assigned a value but never used                                                                                                                                                                                                                                                                                                                        no-unused-vars
  Line 62:17:   Expected '===' and instead saw '=='                                                                                                                                                                                                                                                                                                                                       eqeqeq
  Line 76:18:   Expected '===' and instead saw '=='                                                                                                                                                                                                                                                                                                                                       eqeqeq
  Line 94:21:   Expected '===' and instead saw '=='                                                                                                                                                                                                                                                                                                                                       eqeqeq
  Line 98:24:   Expected '===' and instead saw '=='                                                                                                                                                                                                                                                                                                                                       eqeqeq
  Line 102:26:  Expected '===' and instead saw '=='                                                                                                                                                                                                                                                                                                                                       eqeqeq
  Line 177:25:  'indexdb' is already defined                                                                                                                                                                                                                                                                                                                                              no-redeclare
  Line 178:25:  'r' is already defined                                                                                                                                                                                                                                                                                                                                                    no-redeclare
  Line 178:25:  'r' is assigned a value but never used                                                                                                                                                                                                                                                                                                                                    no-unused-vars
  Line 197:13:  'pkey' is assigned a value but never used                                                                                                                                                                                                                                                                                                                                 no-unused-vars
  Line 198:28:  Expected '===' and instead saw '=='                                                                                                                                                                                                                                                                                                                                       eqeqeq
  Line 220:41:  Expected '===' and instead saw '=='                                                                                                                                                                                                                                                                                                                                       eqeqeq
  Line 223:62:  'previousNonce' is assigned a value but never used                                                                                                                                                                                                                                                                                                                        no-unused-vars
  Line 225:28:  Expected '===' and instead saw '=='                                                                                                                                                                                                                                                                                                                                       eqeqeq
  Line 228:62:  'previousNonce' is assigned a value but never used                                                                                                                                                                                                                                                                                                                        no-unused-vars
  Line 234:55:  Expected '===' and instead saw '=='                                                                                                                                                                                                                                                                                                                                       eqeqeq
  Line 239:7:   React Hook useEffect has missing dependencies: 'Navigate', 'account', 'getBalance', and 'seed'. Either include them or remove the dependency array                                                                                                                                                                                                                        react-hooks/exhaustive-deps
  Line 261:17:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images                                                                                                                                                                                                                                                                 jsx-a11y/alt-text
  Line 277:21:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images                                                                                                                                                                                                                                                                 jsx-a11y/alt-text
  Line 292:52:  Expected '===' and instead saw '=='                                                                                                                                                                                                                                                                                                                                       eqeqeq
  Line 293:52:  Expected '===' and instead saw '=='                                                                                                                                                                                                                                                                                                                                       eqeqeq
  Line 298:44:  Expected '===' and instead saw '=='                                                                                                                                                                                                                                                                                                                                       eqeqeq
  Line 313:44:  Expected '===' and instead saw '=='                                                                                                                                                                                                                                                                                                                                       eqeqeq
  Line 323:51:  Expected '===' and instead saw '=='                                                                                                                                                                                                                                                                                                                                       eqeqeq
  Line 329:35:  The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
  Line 330:38:  The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
  Line 331:43:  The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
  Line 332:47:  The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
  Line 348:45:  Expected '===' and instead saw '=='                                                                                                                                                                                                                                                                                                                                       eqeqeq
  Line 349:21:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images                                                                                                                                                                                                                                                                 jsx-a11y/alt-text
  Line 351:45:  Expected '===' and instead saw '=='                                                                                                                                                                                                                                                                                                                                       eqeqeq
  Line 352:21:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images                                                                                                                                                                                                                                                                 jsx-a11y/alt-text
  Line 354:45:  Expected '===' and instead saw '=='                                                                                                                                                                                                                                                                                                                                       eqeqeq
  Line 355:21:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images                                                                                                                                                                                                                                                                 jsx-a11y/alt-text

src/ui/pages/WalletConfirm/Confirm.js
  Line 1:26:   'useEffect' is defined but never used               no-unused-vars
  Line 3:19:   'useDispatch' is defined but never used             no-unused-vars
  Line 3:32:   'useSelector' is defined but never used             no-unused-vars
  Line 5:18:   'Select' is defined but never used                  no-unused-vars
  Line 5:26:   'message' is defined but never used                 no-unused-vars
  Line 5:35:   'Input' is defined but never used                   no-unused-vars
  Line 11:12:  'setAddress' is assigned a value but never used     no-unused-vars
  Line 11:23:  'address' is assigned a value but never used        no-unused-vars
  Line 26:11:  'PrivateWallet' is assigned a value but never used  no-unused-vars

src/ui/pages/WalletHome/WalletHome.js
  Line 4:19:   'useDispatch' is defined but never used                                                                          no-unused-vars
  Line 4:32:   'useSelector' is defined but never used                                                                          no-unused-vars
  Line 5:55:   'setUserimg' is defined but never used                                                                           no-unused-vars
  Line 10:10:  'Button' is defined but never used                                                                               no-unused-vars
  Line 10:32:  'Pagination' is defined but never used                                                                           no-unused-vars
  Line 11:8:   'axios' is defined but never used                                                                                no-unused-vars
  Line 15:29:  'seed' is assigned a value but never used                                                                        no-unused-vars
  Line 16:21:  'setTabType' is assigned a value but never used                                                                  no-unused-vars
  Line 17:21:  'setLodingL' is assigned a value but never used                                                                  no-unused-vars
  Line 20:11:  'RecordBtn' is assigned a value but never used                                                                   no-unused-vars
  Line 26:13:  'query' is assigned a value but never used                                                                       no-unused-vars
  Line 47:8:   React Hook useEffect has a missing dependency: 'getTransList'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
  Line 73:29:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images        jsx-a11y/alt-text
  Line 73:50:  Expected '===' and instead saw '=='                                                                              eqeqeq

src/ui/style/iconfont.js
  Line 7:7:   'SubSvg' is assigned a value but never used     no-unused-vars
  Line 20:7:  'SearchSvg' is assigned a value but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

File sizes after gzip:

  1.23 MB   build/static/js/main.3bc18ac0.js
  71.67 kB  build/static/css/main.0ee79b32.css
  15.09 kB  build/scripts/jsstore.worker.min.b89008e52d9bde0e86118f58c940006b.js
  1.78 kB   build/static/js/787.528a8aaa.chunk.js

The bundle size is significantly larger than recommended.
Consider reducing it with code splitting: https://goo.gl/9VhYWB
You can also analyze the project dependencies: https://goo.gl/LeUzfb

The project was built assuming it is hosted at ./.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.

Find out more about deployment here:

  https://cra.link/deployment

✨  Done in 22.84s.
```
2. `yarn test` succeeds, but Jest doesn't exit because of operations that are still active:
```js
 PASS  src/substrate/polkadot.test.js (10.082 s)
   polkadot wallet manager
    ✓  create wallat address and set passwd  (525 ms)
    ✓  account address format  (1 ms)
    ✓  export account  (433 ms)
    ✓  import account
   account transaction
    ✓  Account balance inquiry  (1876 ms)
    ✓  Account transfer token
   Dashboard query
    ✓  balance  (1570 ms)
    ✓ Assets Pie Chart (4762 ms)
    ✓  market  (13 ms)

Test Suites: 1 passed, 1 total
Tests:       9 passed, 9 total
Snapshots:   0 total
Time:        10.116 s, estimated 11 s
Ran all test suites matching /src\/substrate\/polkadot.test.js/i.
Jest did not exit one second after the test run has completed.

This usually means that there are asynchronous operations that weren't stopped in your tests. Consider running Jest with `--detectOpenHandles` to troubleshoot this issue.
```
3. Some RPC calls still timeout:
```js
 2023-02-16 17:48:47        API/INIT: RPC methods not decorated: evm_blockLimits, evm_call, evm_estimateResources, oracle_getAllValues, oracle_getValue, tokens_queryExistentialDeposit, transaction_unstable_submitAndWatch, transaction_unstable_unwatch

      at apply (node_modules/@polkadot/util/cjs/logger.js:62:22)
      at Object.warn (node_modules/@polkadot/util/cjs/logger.js:131:14)
      at ApiPromise._filterRpcMethods (node_modules/@polkadot/api/cjs/base/Decorate.js:291:9)
      at ApiPromise._filterRpc (node_modules/@polkadot/api/cjs/base/Decorate.js:262:10)
      at ApiPromise._metaFromChain (node_modules/@polkadot/api/cjs/base/Init.js:326:10)
      at ApiPromise._loadMeta (node_modules/@polkadot/api/cjs/base/Init.js:259:192)

  console.warn
    2023-02-16 17:48:47        API/INIT: acala/2120: Not decorating unknown runtime apis: 0xe3df3f2aa8a5cc57/2

      at apply (node_modules/@polkadot/util/cjs/logger.js:62:22)
      at Object.warn (node_modules/@polkadot/util/cjs/logger.js:131:14)
      at ApiPromise._decorateCalls (node_modules/@polkadot/api/cjs/base/Decorate.js:483:11)
      at ApiPromise._createDecorated (node_modules/@polkadot/api/cjs/base/Decorate.js:156:26)
      at ApiPromise._injectMetadata (node_modules/@polkadot/api/cjs/base/Decorate.js:186:14)
      at ApiPromise._initFromMeta (node_modules/@polkadot/api/cjs/base/Init.js:351:10)
      at ApiPromise._loadMeta (node_modules/@polkadot/api/cjs/base/Init.js:260:17)
```
When running `yarn test --detectOpenHandles` it shows that there is an issue with the API promises:

```js
●  TCPWRAP

      178 |
      179 | export async function queryBalance(address,chain){
    > 180 |   polkadotApi = await ApiPromise.create({ provider:new WsProvider(chain) });
          |                                                    ^
      181 |   let r = await polkadotApi.query.system.account(address);
      182 |   return r;
      183 | }

      at WebSocketClient.Object.<anonymous>.WebSocketClient.connect (node_modules/websocket/lib/WebSocketClient.js:254:56)
      at new W3CWebSocket (node_modules/websocket/lib/W3CWebSocket.js:62:18)
      at WsProvider.connect (node_modules/@polkadot/rpc-provider/cjs/ws/index.js:448:9)
      at WsProvider.connectWithRetry (node_modules/@polkadot/rpc-provider/cjs/ws/index.js:480:20)
      at new WsProvider (node_modules/@polkadot/rpc-provider/cjs/ws/index.js:387:12)
      at queryBalance (src/substrate/polkadot.js:180:52)
      at Object.queryBalance (src/substrate/polkadot.test.js:51:72)


  ●  Timeout

      178 |
      179 | export async function queryBalance(address,chain){
    > 180 |   polkadotApi = await ApiPromise.create({ provider:new WsProvider(chain) });
          |                                                    ^
      181 |   let r = await polkadotApi.query.system.account(address);
      182 |   return r;
      183 | }

      at WsProvider.connect (node_modules/@polkadot/rpc-provider/cjs/ws/index.js:466:81)
      at WsProvider.connectWithRetry (node_modules/@polkadot/rpc-provider/cjs/ws/index.js:480:20)
      at new WsProvider (node_modules/@polkadot/rpc-provider/cjs/ws/index.js:387:12)
      at queryBalance (src/substrate/polkadot.js:180:52)
      at Object.queryBalance (src/substrate/polkadot.test.js:51:72)


  ●  TCPWRAP

      178 |
      179 | export async function queryBalance(address,chain){
    > 180 |   polkadotApi = await ApiPromise.create({ provider:new WsProvider(chain) });
          |                                                    ^
      181 |   let r = await polkadotApi.query.system.account(address);
      182 |   return r;
      183 | }

      at WebSocketClient.Object.<anonymous>.WebSocketClient.connect (node_modules/websocket/lib/WebSocketClient.js:254:56)
      at new W3CWebSocket (node_modules/websocket/lib/W3CWebSocket.js:62:18)
      at WsProvider.connect (node_modules/@polkadot/rpc-provider/cjs/ws/index.js:448:9)
      at WsProvider.connectWithRetry (node_modules/@polkadot/rpc-provider/cjs/ws/index.js:480:20)
      at new WsProvider (node_modules/@polkadot/rpc-provider/cjs/ws/index.js:387:12)
      at queryBalance (src/substrate/polkadot.js:180:52)
      at Object.queryBalance (src/substrate/polkadot.test.js:72:72)


  ●  Timeout

      178 |
      179 | export async function queryBalance(address,chain){
    > 180 |   polkadotApi = await ApiPromise.create({ provider:new WsProvider(chain) });
          |                                                    ^
      181 |   let r = await polkadotApi.query.system.account(address);
      182 |   return r;
      183 | }

      at WsProvider.connect (node_modules/@polkadot/rpc-provider/cjs/ws/index.js:466:81)
      at WsProvider.connectWithRetry (node_modules/@polkadot/rpc-provider/cjs/ws/index.js:480:20)
      at new WsProvider (node_modules/@polkadot/rpc-provider/cjs/ws/index.js:387:12)
      at queryBalance (src/substrate/polkadot.js:180:52)
      at Object.queryBalance (src/substrate/polkadot.test.js:72:72)


  ●  TCPWRAP

       7 |
       8 | export async function tokenPrice(){
    >  9 |   let r =  await axios.get(tokenPrice_url,{},
         |                        ^
      10 |     {
      11 |     headers:{
      12 |         'Content-Type':'application/json',

      at RedirectableRequest.Object.<anonymous>.RedirectableRequest._performRequest (node_modules/follow-redirects/index.js:284:24)
      at new RedirectableRequest (node_modules/follow-redirects/index.js:66:8)
      at Object.request (node_modules/follow-redirects/index.js:523:14)
      at dispatchHttpRequest (node_modules/axios/lib/adapters/http.js:386:21)
      at http (node_modules/axios/lib/adapters/http.js:117:10)
      at Axios.dispatchRequest (node_modules/axios/lib/core/dispatchRequest.js:51:10)
      at Axios.request (node_modules/axios/lib/core/Axios.js:142:33)
      at Axios.<computed> [as get] (node_modules/axios/lib/core/Axios.js:168:17)
      at Function.wrap [as get] (node_modules/axios/lib/helpers/bind.js:5:15)
      at get (src/substrate/risk.js:9:24)
      at Object.tokenPrice (src/substrate/polkadot.test.js:99:6)
```

## V2 

**UPDATE: Tests have been resolved. Code comments have been somewhat improved. 

I would also recommend adding functionality for Westend (testnet) so that users (as well as yourself) can use it for testing purposes.

ESlint: Still a lot of unused variables and assigned declarations that are never used. This dead code could bloat software performance and possibly even effect security; I would recommend cleaning up the code more.
