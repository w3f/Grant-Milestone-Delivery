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
