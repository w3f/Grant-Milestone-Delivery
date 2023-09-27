# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Plus-social-recovery-wallet.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/Nick-1979/polkadot-Js-Plus-extension/blob/f92fdb66505bba53f83a070b021cbd765d9a4070/packages/extension-plus/LICENSE) | - |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [PolkadotJs Plus wiki](https://github.com/Nick-1979/polkadot-Js-Plus-extension/wiki/How-To's#social-recovery) | I found some legacy code [here](https://github.com/Nick-1979/polkadot-Js-Plus-extension/blob/9d6b6838579b60c312bcd91c0287cb674a28f7a2/packages/extension-plus/src/Popup/SocialRecovery/AsRescuer.tsx#L115-L132). There are not a lot of inline comments, but given the nature and readability of the (ReactJs) code I'm fine with that. |
| 0c. | Testing Guide	| <ul><li>[x] </li></ul> | [Testing Instructions](https://github.com/Nick-1979/polkadot-Js-Plus-extension/wiki/Installation#testing) | See [Testing Guide Feedback](#testing-guide-feedback) |
| 0d. | Article	| <ul><li>[x] </li></ul> | [Medium Article](https://medium.com/@ekbatanifard/social-recovery-by-polkadot-js-plus-ca422d871850) | - |
| 1. | Make recoverable | <ul><li>[x] </li></ul> | [SocialRecovery/Configure.tsx](https://github.com/Nick-1979/polkadot-Js-Plus-extension/blob/9d6b6838579b60c312bcd91c0287cb674a28f7a2/packages/extension-plus/src/Popup/SocialRecovery/Configure.tsx) | It works. However, I noticed that in the *Configure my account* the addresses don't get cached and get lost if the user navigates from the *Configuration* to the *Info* tab and back. I added an [issue](https://github.com/Nick-1979/polkadot-Js-Plus-extension/issues/67). |  
| 2. | Rescue account | <ul><li>[x] </li></ul> | [SocialRecovery/Rescue.tsx](https://github.com/Nick-1979/polkadot-Js-Plus-extension/blob/9d6b6838579b60c312bcd91c0287cb674a28f7a2/packages/extension-plus/src/Popup/SocialRecovery/Rescue.tsx) | - |  
| 3. | Friends vouches | <ul><li>[x] </li></ul> | [SocialRecovery/AsFriend.tsx](https://github.com/Nick-1979/polkadot-Js-Plus-extension/blob/9d6b6838579b60c312bcd91c0287cb674a28f7a2/packages/extension-plus/src/Popup/SocialRecovery/AsFriend.tsx) | It wasn't apparent to me that the rescuer has to vouch for himself as well. I think there's room for improvement from a UX perspective there. However, it works well. |
| 4. | Takeover lost account | <ul><li>[x] </li></ul> | [SocialRecovery/AsRescuer.tsx](https://github.com/Nick-1979/polkadot-Js-Plus-extension/blob/9d6b6838579b60c312bcd91c0287cb674a28f7a2/packages/extension-plus/src/Popup/SocialRecovery/AsRescuer.tsx) | - |


Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

- Deliverables 1-4 have been successfully tested on Westend.

### Testing Guide Feedback

- tests pass:

```bash
% yarn test:plus
$ polkadot-dev-run-test --detectOpenHandles --testPathPattern=packages/extension-plus/src/Popup/SocialRecovery --silent
 PASS  packages/extension-plus/src/Popup/SocialRecovery/AsFriend.spec.tsx (35.806 s)
 PASS  packages/extension-plus/src/Popup/SocialRecovery/RecoverableTab.spec.tsx (6.5 s)
 PASS  packages/extension-plus/src/Popup/SocialRecovery/socialRecoveryIndex.spec.tsx (10.463 s)
 PASS  packages/extension-plus/src/Popup/SocialRecovery/AsRescuer.spec.tsx
 PASS  packages/extension-plus/src/Popup/SocialRecovery/Confirm.spec.tsx (5.803 s)
 PASS  packages/extension-plus/src/Popup/SocialRecovery/addFriend.spec.tsx
 PASS  packages/extension-plus/src/Popup/SocialRecovery/CloseRecoveryTab.spec.tsx
 PASS  packages/extension-plus/src/Popup/SocialRecovery/Configure.spec.tsx
 PASS  packages/extension-plus/src/Popup/SocialRecovery/AddNewAccount.spec.tsx

Test Suites: 9 passed, 9 total
Tests:       31 passed, 31 total
Snapshots:   0 total
Time:        73.982 s
```

- however, when removing the `--silent` argument from the `yarn test:plus` script, there are a lot of warnings. I truncated the excerpt but I still included some of them:

```bash
% yarn test:plus
$ polkadot-dev-run-test --detectOpenHandles --testPathPattern=packages/extension-plus/src/Popup/SocialRecovery
 PASS  packages/extension-plus/src/Popup/SocialRecovery/AsFriend.spec.tsx (31.346 s)
  ● Console

    console.warn
      @polkadot/rpc-core has multiple versions, ensure that there is only one installed.
      Either remove and explicitly install matching versions or dedupe using your package manager.
      The following conflicting packages were found:
      	cjs 8.7.1 	node_modules/@polkadot/rpc-core/cjs
      	cjs 8.14.1	node_modules/@polkadot/apps-config/node_modules/@polkadot/rpc-core/cjs

      at warn (node_modules/@polkadot/util/cjs/versionDetect.js:92:11)
      at detectPackage (node_modules/@polkadot/util/cjs/versionDetect.js:118:5)
      at Object.<anonymous> (node_modules/@polkadot/apps-config/node_modules/@polkadot/rpc-core/cjs/detectPackage.js:14:25)
      at Object.<anonymous> (node_modules/@polkadot/apps-config/node_modules/@polkadot/rpc-core/cjs/index.js:7:1)

    console.warn
      react-i18next:: You will need to pass in an i18next instance by using initReactI18next

      41 |
      42 | function AsFriend({ account, accountsInfo, addresesOnThisChain, api, chain, handleCloseAsFriend, recoveryConsts, showAsFriendModal }: Props): React.ReactElement<Props> {
    > 43 |   const { t } = useTranslation();
         |                 ^
      44 |   const [lostAccount, setLostAccount] = useState<DeriveAccountInfo | undefined>();
      45 |   const [rescuerAccount, setRescuerAccount] = useState<DeriveAccountInfo | undefined>();
      46 |   const [lostAccountRecoveryInfo, setLostAccountRecoveryInfo] = useState<PalletRecoveryRecoveryConfig | undefined | null>();

      at warn (node_modules/react-i18next/dist/commonjs/utils.js:22:31)
      at warnOnce (node_modules/react-i18next/dist/commonjs/utils.js:35:8)
      at useTranslation (node_modules/react-i18next/dist/commonjs/useTranslation.js:36:25)
      at AsFriend (packages/extension-plus/src/Popup/SocialRecovery/AsFriend.tsx:43:17)
      at renderWithHooks (node_modules/react-dom/cjs/react-dom.development.js:16175:18)
      at mountIndeterminateComponent (node_modules/react-dom/cjs/react-dom.development.js:20913:13)
      at beginWork (node_modules/react-dom/cjs/react-dom.development.js:22416:16)
      at beginWork$1 (node_modules/react-dom/cjs/react-dom.development.js:27381:14)

    console.error
      Warning: validateDOMNesting(...): <div> cannot appear as a descendant of <p>.
          at div
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Avatar (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/Avatar/Avatar.js:158:44)
          at div
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Grid (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/Grid/Grid.js:315:49)
          at div
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Grid (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/Grid/Grid.js:315:49)
          at action (/Users/xxx/repos/polkadot-Js-Plus-extension/packages/extension-plus/src/components/PlusHeader.tsx:24:23)
          at p
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Typography (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/Typography/Typography.js:108:49)
          at div
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Container (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/system/Container/createContainer.js:128:19)
          at div
          at TrapFocus (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/base/node/TrapFocus/TrapFocus.js:109:5)
          at div
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Portal (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/base/node/Portal/Portal.js:33:5)
          at ModalUnstyled (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/base/node/ModalUnstyled/ModalUnstyled.js:81:5)
          at Modal (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/Modal/Modal.js:93:44)
          at children (/Users/xxx/repos/polkadot-Js-Plus-extension/packages/extension-plus/src/components/Popup.tsx:19:18)
          at displayName (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/styled-components/src/models/StyledComponent.js:247:14)
          at account (/Users/xxx/repos/polkadot-Js-Plus-extension/packages/extension-plus/src/Popup/SocialRecovery/AsFriend.tsx:42:21)
          at displayName (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/styled-components/src/models/StyledComponent.js:247:14)

      at printWarning (node_modules/react-dom/cjs/react-dom.development.js:86:30)
      at error (node_modules/react-dom/cjs/react-dom.development.js:60:7)
      at validateDOMNesting (node_modules/react-dom/cjs/react-dom.development.js:10846:7)
      at createInstance (node_modules/react-dom/cjs/react-dom.development.js:10927:5)
      at completeWork (node_modules/react-dom/cjs/react-dom.development.js:19415:28)
      at completeUnitOfWork (node_modules/react-dom/cjs/react-dom.development.js:26549:16)
      at performUnitOfWork (node_modules/react-dom/cjs/react-dom.development.js:26524:5)
      at workLoopSync (node_modules/react-dom/cjs/react-dom.development.js:26422:5)

    console.error
      Warning: Expected `onClick` listener to be a function, instead got a value of `boolean` type.
          at div
          at className (/Users/xxx/repos/polkadot-Js-Plus-extension/packages/extension-ui/src/components/ActionText.tsx:18:24)
          at displayName (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/styled-components/src/models/StyledComponent.js:247:14)
          at div
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Grid (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/Grid/Grid.js:315:49)
          at div
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Grid (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/Grid/Grid.js:315:49)
          at action (/Users/xxx/repos/polkadot-Js-Plus-extension/packages/extension-plus/src/components/PlusHeader.tsx:24:23)
          at p
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Typography (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/Typography/Typography.js:108:49)
          at div
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Container (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/system/Container/createContainer.js:128:19)
          at div
          at TrapFocus (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/base/node/TrapFocus/TrapFocus.js:109:5)
          at div
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Portal (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/base/node/Portal/Portal.js:33:5)
          at ModalUnstyled (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/base/node/ModalUnstyled/ModalUnstyled.js:81:5)
          at Modal (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/Modal/Modal.js:93:44)
          at children (/Users/xxx/repos/polkadot-Js-Plus-extension/packages/extension-plus/src/components/Popup.tsx:19:18)
          at displayName (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/styled-components/src/models/StyledComponent.js:247:14)
          at account (/Users/xxx/repos/polkadot-Js-Plus-extension/packages/extension-plus/src/Popup/SocialRecovery/AsFriend.tsx:42:21)
          at displayName (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/styled-components/src/models/StyledComponent.js:247:14)

      at printWarning (node_modules/react-dom/cjs/react-dom.development.js:86:30)
      at error (node_modules/react-dom/cjs/react-dom.development.js:60:7)
      at warnForInvalidEventListener (node_modules/react-dom/cjs/react-dom.development.js:9589:7)
      at setInitialDOMProperties (node_modules/react-dom/cjs/react-dom.development.js:9709:11)
      at setInitialProperties (node_modules/react-dom/cjs/react-dom.development.js:9918:3)
      at finalizeInitialChildren (node_modules/react-dom/cjs/react-dom.development.js:10947:3)
      at completeWork (node_modules/react-dom/cjs/react-dom.development.js:19421:17)
      at completeUnitOfWork (node_modules/react-dom/cjs/react-dom.development.js:26549:16)

    console.error
      Warning: validateDOMNesting(...): <hr> cannot appear as a descendant of <p>.
          at hr
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Divider (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/Divider/Divider.js:165:44)
          at div
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Grid (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/Grid/Grid.js:315:49)
          at action (/Users/xxx/repos/polkadot-Js-Plus-extension/packages/extension-plus/src/components/PlusHeader.tsx:24:23)
          at p
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Typography (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/Typography/Typography.js:108:49)
          at div
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Container (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/system/Container/createContainer.js:128:19)
          at div
          at TrapFocus (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/base/node/TrapFocus/TrapFocus.js:109:5)
          at div
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Portal (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/base/node/Portal/Portal.js:33:5)
          at ModalUnstyled (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/base/node/ModalUnstyled/ModalUnstyled.js:81:5)
          at Modal (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/Modal/Modal.js:93:44)
          at children (/Users/xxx/repos/polkadot-Js-Plus-extension/packages/extension-plus/src/components/Popup.tsx:19:18)
          at displayName (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/styled-components/src/models/StyledComponent.js:247:14)
          at account (/Users/xxx/repos/polkadot-Js-Plus-extension/packages/extension-plus/src/Popup/SocialRecovery/AsFriend.tsx:42:21)
          at displayName (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/styled-components/src/models/StyledComponent.js:247:14)

      at printWarning (node_modules/react-dom/cjs/react-dom.development.js:86:30)
      at error (node_modules/react-dom/cjs/react-dom.development.js:60:7)
      at validateDOMNesting (node_modules/react-dom/cjs/react-dom.development.js:10846:7)
      at createInstance (node_modules/react-dom/cjs/react-dom.development.js:10927:5)
      at completeWork (node_modules/react-dom/cjs/react-dom.development.js:19415:28)
      at completeUnitOfWork (node_modules/react-dom/cjs/react-dom.development.js:26549:16)
      at performUnitOfWork (node_modules/react-dom/cjs/react-dom.development.js:26524:5)
      at workLoopSync (node_modules/react-dom/cjs/react-dom.development.js:26422:5)

    console.error
      Warning: validateDOMNesting(...): <h6> cannot appear as a descendant of <p>.
          at h6
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Typography (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/Typography/Typography.js:108:49)
          at div
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Grid (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/Grid/Grid.js:315:49)
          at div
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Grid (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/Grid/Grid.js:315:49)
          at p
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Typography (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/Typography/Typography.js:108:49)
          at div
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Container (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/system/Container/createContainer.js:128:19)
          at div
          at TrapFocus (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/base/node/TrapFocus/TrapFocus.js:109:5)
          at div
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Portal (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/base/node/Portal/Portal.js:33:5)
          at ModalUnstyled (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/base/node/ModalUnstyled/ModalUnstyled.js:81:5)
          at Modal (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/Modal/Modal.js:93:44)
          at children (/Users/xxx/repos/polkadot-Js-Plus-extension/packages/extension-plus/src/components/Popup.tsx:19:18)
          at displayName (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/styled-components/src/models/StyledComponent.js:247:14)
          at account (/Users/xxx/repos/polkadot-Js-Plus-extension/packages/extension-plus/src/Popup/SocialRecovery/AsFriend.tsx:42:21)
          at displayName (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/styled-components/src/models/StyledComponent.js:247:14)

      at printWarning (node_modules/react-dom/cjs/react-dom.development.js:86:30)
      at error (node_modules/react-dom/cjs/react-dom.development.js:60:7)
      at validateDOMNesting (node_modules/react-dom/cjs/react-dom.development.js:10846:7)
      at createInstance (node_modules/react-dom/cjs/react-dom.development.js:10927:5)
      at completeWork (node_modules/react-dom/cjs/react-dom.development.js:19415:28)
      at completeUnitOfWork (node_modules/react-dom/cjs/react-dom.development.js:26549:16)
      at performUnitOfWork (node_modules/react-dom/cjs/react-dom.development.js:26524:5)
      at workLoopSync (node_modules/react-dom/cjs/react-dom.development.js:26422:5)

    console.error
      Warning: validateDOMNesting(...): <fieldset> cannot appear as a descendant of <p>.
          at fieldset
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at NotchedOutline (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/OutlinedInput/NotchedOutline.js:98:5)
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at div
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at InputBase (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/InputBase/InputBase.js:251:44)
          at OutlinedInput (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/OutlinedInput/OutlinedInput.js:135:44)
          at div
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at FormControl (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/FormControl/FormControl.js:111:44)
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at TextField (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/TextField/TextField.js:107:44)
          at div
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Autocomplete (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/Autocomplete/Autocomplete.js:394:44)
          at div
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Grid (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/Grid/Grid.js:315:49)
          at div
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Grid (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/Grid/Grid.js:315:49)
          at info (/Users/xxx/repos/polkadot-Js-Plus-extension/packages/extension-plus/src/Popup/SocialRecovery/AddNewAccount.tsx:157:29)
          at div
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Grid (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/Grid/Grid.js:315:49)
          at account (/Users/xxx/repos/polkadot-Js-Plus-extension/packages/extension-plus/src/Popup/SocialRecovery/AddNewAccount.tsx:41:26)
          at displayName (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/styled-components/src/models/StyledComponent.js:247:14)
          at div
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Grid (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/Grid/Grid.js:315:49)
          at div
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Grid (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/Grid/Grid.js:315:49)
          at p
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Typography (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/Typography/Typography.js:108:49)
          at div
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Container (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/system/Container/createContainer.js:128:19)
          at div
          at TrapFocus (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/base/node/TrapFocus/TrapFocus.js:109:5)
          at div
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Portal (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/base/node/Portal/Portal.js:33:5)
          at ModalUnstyled (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/base/node/ModalUnstyled/ModalUnstyled.js:81:5)
          at Modal (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/Modal/Modal.js:93:44)
          at children (/Users/xxx/repos/polkadot-Js-Plus-extension/packages/extension-plus/src/components/Popup.tsx:19:18)
          at displayName (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/styled-components/src/models/StyledComponent.js:247:14)
          at account (/Users/xxx/repos/polkadot-Js-Plus-extension/packages/extension-plus/src/Popup/SocialRecovery/AsFriend.tsx:42:21)
          at displayName (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/styled-components/src/models/StyledComponent.js:247:14)

      at printWarning (node_modules/react-dom/cjs/react-dom.development.js:86:30)
      at error (node_modules/react-dom/cjs/react-dom.development.js:60:7)
      at validateDOMNesting (node_modules/react-dom/cjs/react-dom.development.js:10846:7)
      at createInstance (node_modules/react-dom/cjs/react-dom.development.js:10927:5)
      at completeWork (node_modules/react-dom/cjs/react-dom.development.js:19415:28)
      at completeUnitOfWork (node_modules/react-dom/cjs/react-dom.development.js:26549:16)
      at performUnitOfWork (node_modules/react-dom/cjs/react-dom.development.js:26524:5)
      at workLoopSync (node_modules/react-dom/cjs/react-dom.development.js:26422:5)

    console.error
      Warning: validateDOMNesting(...): <p> cannot appear as a descendant of <p>.
          at p
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at FormHelperText (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/FormHelperText/FormHelperText.js:94:44)
          at div
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at FormControl (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/FormControl/FormControl.js:111:44)
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at TextField (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/TextField/TextField.js:107:44)
          at div
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Autocomplete (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/Autocomplete/Autocomplete.js:394:44)
          at div
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Grid (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/Grid/Grid.js:315:49)
          at div
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Grid (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/Grid/Grid.js:315:49)
          at info (/Users/xxx/repos/polkadot-Js-Plus-extension/packages/extension-plus/src/Popup/SocialRecovery/AddNewAccount.tsx:157:29)
          at div
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Grid (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/Grid/Grid.js:315:49)
          at account (/Users/xxx/repos/polkadot-Js-Plus-extension/packages/extension-plus/src/Popup/SocialRecovery/AddNewAccount.tsx:41:26)
          at displayName (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/styled-components/src/models/StyledComponent.js:247:14)
          at div
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Grid (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/Grid/Grid.js:315:49)
          at div
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Grid (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/Grid/Grid.js:315:49)
          at p
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Typography (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/Typography/Typography.js:108:49)
          at div
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Container (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/system/Container/createContainer.js:128:19)
          at div
          at TrapFocus (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/base/node/TrapFocus/TrapFocus.js:109:5)
          at div
          at /Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@emotion/react/dist/emotion-element-e89f38a3.cjs.dev.js:64:23
          at Portal (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/base/node/Portal/Portal.js:33:5)
          at ModalUnstyled (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/base/node/ModalUnstyled/ModalUnstyled.js:81:5)
          at Modal (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/@mui/material/node/Modal/Modal.js:93:44)
          at children (/Users/xxx/repos/polkadot-Js-Plus-extension/packages/extension-plus/src/components/Popup.tsx:19:18)
          at displayName (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/styled-components/src/models/StyledComponent.js:247:14)
          at account (/Users/xxx/repos/polkadot-Js-Plus-extension/packages/extension-plus/src/Popup/SocialRecovery/AsFriend.tsx:42:21)
          at displayName (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/styled-components/src/models/StyledComponent.js:247:14)

      at printWarning (node_modules/react-dom/cjs/react-dom.development.js:86:30)
      at error (node_modules/react-dom/cjs/react-dom.development.js:60:7)
      at validateDOMNesting (node_modules/react-dom/cjs/react-dom.development.js:10846:7)
      at createInstance (node_modules/react-dom/cjs/react-dom.development.js:10927:5)
      at completeWork (node_modules/react-dom/cjs/react-dom.development.js:19415:28)
      at completeUnitOfWork (node_modules/react-dom/cjs/react-dom.development.js:26549:16)
      at performUnitOfWork (node_modules/react-dom/cjs/react-dom.development.js:26524:5)
      at workLoopSync (node_modules/react-dom/cjs/react-dom.development.js:26422:5)

    console.log
      is lost account recoverable: noch

      at log (packages/extension-plus/src/Popup/SocialRecovery/AsFriend.tsx:92:15)

    console.log
      is lost account recoverable: {
        delayPeriod: 144000,
        deposit: 6000000000000,
        friends: [
          '5DRbuYvzokyX7X4QDxrk1BNRxYS6NP4V9CHiciPXdTe2vT4Z',
          '5G6TeiXHZJFV3DtPABJ22thuLguSEPJgH7FkqcRPrn88mFKh'
        ],
        threshold: 2
      }

      at log (packages/extension-plus/src/Popup/SocialRecovery/AsFriend.tsx:92:15)

    console.log
      activeRecoveries: noch

      at log (packages/extension-plus/src/Popup/SocialRecovery/AsFriend.tsx:134:15)

    console.log
      is lost account recoverable: {
        delayPeriod: 144000,
        deposit: 6000000000000,
        friends: [
          '5DRbuYvzokyX7X4QDxrk1BNRxYS6NP4V9CHiciPXdTe2vT4Z',
          '5G6TeiXHZJFV3DtPABJ22thuLguSEPJgH7FkqcRPrn88mFKh'
        ],
        threshold: 2
      }

      at log (packages/extension-plus/src/Popup/SocialRecovery/AsFriend.tsx:92:15)

    console.log
      is lost account recoverable: {
        delayPeriod: 144000,
        deposit: 6000000000000,
        friends: [
          '5DRbuYvzokyX7X4QDxrk1BNRxYS6NP4V9CHiciPXdTe2vT4Z',
          '5G6TeiXHZJFV3DtPABJ22thuLguSEPJgH7FkqcRPrn88mFKh'
        ],
        threshold: 2
      }

      at log (packages/extension-plus/src/Popup/SocialRecovery/AsFriend.tsx:92:15)

    console.error
      Warning: An update to AsFriend inside a test was not wrapped in act(...).
      
      When testing, code that causes React state updates should be wrapped into act(...):
      
      act(() => {
        /* fire events that update state */
      });
      /* assert on the output */
      
      This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
          at account (/Users/xxx/repos/polkadot-Js-Plus-extension/packages/extension-plus/src/Popup/SocialRecovery/AsFriend.tsx:42:21)
          at displayName (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/styled-components/src/models/StyledComponent.js:247:14)

      61 |       Promise.all(
      62 |         lostAccountRecoveryInfo.friends.map((f) => api.derive.accounts.info(f))
    > 63 |       ).then((info) => setfriendsAccountsInfo(info))
         |                        ^
      64 |         .catch(console.error);
      65 |     }
      66 |   }, [lostAccountRecoveryInfo, api]);

      at printWarning (node_modules/react-dom/cjs/react-dom.development.js:86:30)
      at error (node_modules/react-dom/cjs/react-dom.development.js:60:7)
      at warnIfUpdatesNotWrappedWithActDEV (node_modules/react-dom/cjs/react-dom.development.js:27543:9)
      at scheduleUpdateOnFiber (node_modules/react-dom/cjs/react-dom.development.js:25404:5)
      at dispatchSetState (node_modules/react-dom/cjs/react-dom.development.js:17389:16)
      at setfriendsAccountsInfo (packages/extension-plus/src/Popup/SocialRecovery/AsFriend.tsx:63:24)

    console.log
      activeRecoveries: {
        created: 11908195,
        deposit: 5000000000000,
        friends: [ '5G6TeiXHZJFV3DtPABJ22thuLguSEPJgH7FkqcRPrn88mFKh' ]
      }

      at log (packages/extension-plus/src/Popup/SocialRecovery/AsFriend.tsx:134:15)

    console.log
      is lost account recoverable: {
        delayPeriod: 144000,
        deposit: 6000000000000,
        friends: [
          '5DRbuYvzokyX7X4QDxrk1BNRxYS6NP4V9CHiciPXdTe2vT4Z',
          '5G6TeiXHZJFV3DtPABJ22thuLguSEPJgH7FkqcRPrn88mFKh'
        ],
        threshold: 2
      }

      at log (packages/extension-plus/src/Popup/SocialRecovery/AsFriend.tsx:92:15)

    console.error
      Warning: An update to AsFriend inside a test was not wrapped in act(...).
      
      When testing, code that causes React state updates should be wrapped into act(...):
      
      act(() => {
        /* fire events that update state */
      });
      /* assert on the output */
      
      This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
          at account (/Users/xxx/repos/polkadot-Js-Plus-extension/packages/extension-plus/src/Popup/SocialRecovery/AsFriend.tsx:42:21)
          at displayName (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/styled-components/src/models/StyledComponent.js:247:14)

      61 |       Promise.all(
      62 |         lostAccountRecoveryInfo.friends.map((f) => api.derive.accounts.info(f))
    > 63 |       ).then((info) => setfriendsAccountsInfo(info))
         |                        ^
      64 |         .catch(console.error);
      65 |     }
      66 |   }, [lostAccountRecoveryInfo, api]);

      at printWarning (node_modules/react-dom/cjs/react-dom.development.js:86:30)
      at error (node_modules/react-dom/cjs/react-dom.development.js:60:7)
      at warnIfUpdatesNotWrappedWithActDEV (node_modules/react-dom/cjs/react-dom.development.js:27543:9)
      at scheduleUpdateOnFiber (node_modules/react-dom/cjs/react-dom.development.js:25404:5)
      at dispatchSetState (node_modules/react-dom/cjs/react-dom.development.js:17389:16)
      at setfriendsAccountsInfo (packages/extension-plus/src/Popup/SocialRecovery/AsFriend.tsx:63:24)

    console.log
      activeRecoveries: {
        created: 11908195,
        deposit: 5000000000000,
        friends: [ '5G6TeiXHZJFV3DtPABJ22thuLguSEPJgH7FkqcRPrn88mFKh' ]
      }

      at log (packages/extension-plus/src/Popup/SocialRecovery/AsFriend.tsx:134:15)

    console.log
      is lost account recoverable: {
        delayPeriod: 144000,
        deposit: 6000000000000,
        friends: [
          '5DRbuYvzokyX7X4QDxrk1BNRxYS6NP4V9CHiciPXdTe2vT4Z',
          '5G6TeiXHZJFV3DtPABJ22thuLguSEPJgH7FkqcRPrn88mFKh'
        ],
        threshold: 2
      }

      at log (packages/extension-plus/src/Popup/SocialRecovery/AsFriend.tsx:92:15)

    console.error
      Warning: An update to AsFriend inside a test was not wrapped in act(...).
      
      When testing, code that causes React state updates should be wrapped into act(...):
      
      act(() => {
        /* fire events that update state */
      });
      /* assert on the output */
      
      This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
          at account (/Users/xxx/repos/polkadot-Js-Plus-extension/packages/extension-plus/src/Popup/SocialRecovery/AsFriend.tsx:42:21)
          at displayName (/Users/xxx/repos/polkadot-Js-Plus-extension/node_modules/styled-components/src/models/StyledComponent.js:247:14)

      61 |       Promise.all(
      62 |         lostAccountRecoveryInfo.friends.map((f) => api.derive.accounts.info(f))
    > 63 |       ).then((info) => setfriendsAccountsInfo(info))
         |                        ^
      64 |         .catch(console.error);
      65 |     }
      66 |   }, [lostAccountRecoveryInfo, api]);

      at printWarning (node_modules/react-dom/cjs/react-dom.development.js:86:30)
      at error (node_modules/react-dom/cjs/react-dom.development.js:60:7)
      at warnIfUpdatesNotWrappedWithActDEV (node_modules/react-dom/cjs/react-dom.development.js:27543:9)
      at scheduleUpdateOnFiber (node_modules/react-dom/cjs/react-dom.development.js:25404:5)
      at dispatchSetState (node_modules/react-dom/cjs/react-dom.development.js:17389:16)
      at setfriendsAccountsInfo (packages/extension-plus/src/Popup/SocialRecovery/AsFriend.tsx:63:24)

    console.log
      is lost account recoverable: noch

      at log (packages/extension-plus/src/Popup/SocialRecovery/AsFriend.tsx:92:15)

(...)

Test Suites: 9 passed, 9 total
Tests:       31 passed, 31 total
Snapshots:   0 total
Time:        73.23 s
Ran all test suites matching /packages\/extension-plus\/src\/Popup\/SocialRecovery/i.
```
