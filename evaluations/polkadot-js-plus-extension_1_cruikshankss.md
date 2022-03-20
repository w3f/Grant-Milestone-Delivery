# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/pull/778
- **Milestone:** 1

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License Apache 2.0 | [x] | [License](https://github.com/Nick-1979/polkadot-Js-Plus-extension/blob/master/packages/extension-plus/LICENSE) | Thank you for your open-source contributions! Please apply the license to your work by filling out the copyright as specified in its appendix. 
| 0b. | Documentation | [x] | [GitHub > wiki](https://github.com/Nick-1979/polkadot-Js-Plus-extension/wiki) | Very clear and thorough! Spelling/capitalization could be improved for more professional appearance of your docs (since your app/codebase is so professional!). |
| 0c. | Testing Guide	| [x] |  [GitHub > wiki > Installation](https://github.com/Nick-1979/polkadot-Js-Plus-extension/wiki/Installation) | All unit-test suites passed. I tested manually with Kusama (fully) and Westend (partially). |
| 1. | Show balance and address as QRcode | [x] |  [Plus.tsx](https://github.com/Nick-1979/polkadot-Js-Plus-extension/blob/master/packages/extension-plus/src/components/Plus.tsx), [AddressQRCode](https://github.com/Nick-1979/polkadot-Js-Plus-extension/tree/master/packages/extension-plus/src/Popup/AddressQRcode) | `<Plus>` is a well-organized root component of the app. Address QR code worked really nicely! | 
| 2.  | Fund transfer | [x] |  [Transfer components](https://github.com/Nick-1979/polkadot-Js-Plus-extension/tree/master/packages/extension-plus/src/Popup/Transfer) | Nicely implemented! Confirm button hung once in loading when there was a successful transaction. | 
| 3.  | Transaction history | [x] |  [History components](https://github.com/Nick-1979/polkadot-Js-Plus-extension/tree/master/packages/extension-plus/src/Popup/History) | Looks great! | 
| 4.  | Easy staking | [x] | [Staking components](https://github.com/Nick-1979/polkadot-Js-Plus-extension/tree/master/packages/extension-plus/src/Popup/Staking) | Excellent UI/UX! Confirm button hung once in loading, resulting in successful staking but unsuccesful nominator selection. | 
| 5.  | Crowdloan contribution | [x] | [Crowdloans components](https://github.com/Nick-1979/polkadot-Js-Plus-extension/tree/master/packages/extension-plus/src/Popup/CrowdLoans) | Great job adding so many useful details! Confirm button hung once in loading when there was a successful crowdloan contribution. | 

Commit hash I used for testing: `82ef7ff95881629f94047c5cc62d074e22b6a9e0`.

## Additional Notes

Congratulations on an excellent milestone delivery.

Your code is written with high ideals of the following technologies:
- modern ECMAScript event loop management (async/await where possible, Promises otherwise, knowledge of different function declaration patterns, etc.)
- type safety with TypeScript, inherited types from polkadot{js}, creating your own `plusTypes.ts` util with interfaces, etc.
- high-abstraction React Hooks state-management patterns including `useReducer`, `useCallback`, your own `outerState`, etc.
- `umi-request` which apparently meets/exceeds ideals of `axios` & `fetch`
- CSS3 ideals like CSS-grid (I believe) and flexbox together via `styled-components` 
- accessible components via Material UI
- handling secure data like passwords with the same/similar patterns to the original Polkadot{js} extension
- testing using:
  -  `spec` files to create test suites for many different components
  -  `'@polkadot/extension-mocks/chrome'`, 
  -  jest
  -  enzyme (which provides partial simulation of runtime)
  -  `react-dom/test-utils`
  
It was a privilege to study & test your codebase & extension! Bravo!

### Documentation

The original Polkadot{js} extension says they are "an account manager, not a wallet", and so you found a great opportunity to build on top of this and create a "browser extension wallet".

I found this [Polkadot support article](https://support.polkadot.network/support/solutions/articles/65000169332-where-can-i-see-the-balance-of-my-account-) that has some info that might be relevant to you: 

```
Community-Built Tools

There is also a wallet manager built by Subsocial https://sub.id/#/ which allow you to connect your extension wallet to view all of your assets on different substrate chains. 
```

It's not an extension like yours but I thought you may want to study it nonetheless. Perhaps you already have, but I didn't see it mentioned in your competitor analysis. 

I already mentioned this above, but upon release of your app as an official Chrome extension, perhaps ensure your documentation is edited for spelling/capitalization. I assume that's already in your plans since you're still in beta of course. I think your app/codebase is so professional, and I'd love to see your documentation looking as beautiful/professional as your lovely UI!

### Testing

I used Chrome Version 99.0.4844.51 (Official Build) (x86_64) for testing (not Firefox). I realized this was "Nearly up to date!" after testing, sorry about that, but I will still notify you of some issues I had, since I assume I represent a fairly average user.

I bet you're aware, but there are still a few issues with `chain`/`chainInfo` with TypeScript: `"No overload matches this call."` and `"Type 'ChainInfo | undefined' is not assignable to type 'ChainInfo'."` respectively.

I think you're at a really high level of development and sometimes there aren't solutions right now for some types of error handling, for example doing an undefined checks while also needing to fit the code into a tertiary conditional statement.

[Here's an article](https://www.robinwieruch.de/react-hooks-fetch-data/) I studied really deeply on patterns that combined ideals of advanced error handling, React Hooks, fetching, custom hooks, state management, etc. and Robin Weiruch also seems to have other articles on useReducer, more on React Hooks, etc. I think the official React docs even linked to that article I linked, which is how I originally found it. 

I mention that because I did have some issues with your `Confirm` button hanging in loading instead of reaching a `Done` or `Failed` state.

I looked through your testing and you do have really nice testing for your buttons:

`ConfirmTransfer.spec.tsx` "Successfull Scenario"
```js
    await waitFor(() => expect(screen.queryByTestId('confirmButton').textContent).toEqual('Done'), { timeout: 30000 }); // wait enough to recive the transaction confirm from blockchain
```

But perhaps you could also add some tests for the next milestone for when the button status is `confirming`? That may not help, just a suggestion. 

I noticed some of your imports might be broken: `import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';` should be `@fontawesome/...` not `@fortawesome`.

I noticed some of your twitter links are broken (on staking, not crowdloan), linking to `twittericon.com/valid-username` for example. 

Thank you for the detailed beginner explanation for how to manage the Westend genesis rebuild (in the conversation tab of milestone 1), since I'm rather new here at W3F. With the workaround, I was able to rebuild your source and view my Westend account in your Plus extension. 

Thank you for raising this Westend testing issue to the Polkadot{js} and Parity teams. It's incredible to see there are already updates (within a day!) to the `polkadot-js-common` due to your work. I really appreciate your contributions to the open-source community.

Best of luck with your next milestone and wishing you continued success into the future!
