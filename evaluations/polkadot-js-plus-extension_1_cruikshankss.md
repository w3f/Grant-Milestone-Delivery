# Evaluation

- **Status:** In Progress
- **Application Document:** 
- **Milestone:** 1

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License Apache 2.0 | [x] | [License](https://github.com/Nick-1979/polkadot-Js-Plus-extension/blob/master/packages/extension-plus/LICENSE) | Please apply the license to your work by filling out the copyright as specified in its appendix. 
| 0b. | Documentation | [x] | [GitHub > wiki](https://github.com/Nick-1979/polkadot-Js-Plus-extension/wiki) | Very clear. |
| 0c. | Testing Guide	| [x] |  [GitHub > wiki > Installation](https://github.com/Nick-1979/polkadot-Js-Plus-extension/wiki/Installation) | The Westend genesis & info instructions are unclear so I tested with Kusama. |
| 1. | Show balance and address as QRcode | [x] |  [Plus.tsx](https://github.com/Nick-1979/polkadot-Js-Plus-extension/blob/master/packages/extension-plus/src/components/Plus.tsx) , [AddressQRCode.tsx](https://github.com/Nick-1979/polkadot-Js-Plus-extension/tree/master/packages/extension-plus/src/Popup/AddressQRcode) |  | 
| 2.  | Fund transfer | [x] |  [Transfer.tsx](https://github.com/Nick-1979/polkadot-Js-Plus-extension/tree/master/packages/extension-plus/src/Popup/Transfer) |  | 
| 3.  | Tranaction history | [x] |  [History.tsx](https://github.com/Nick-1979/polkadot-Js-Plus-extension/tree/master/packages/extension-plus/src/Popup/History) |  | 
| 4.  | Easy staking | [x] | [Staking.tsx](https://github.com/Nick-1979/polkadot-Js-Plus-extension/tree/master/packages/extension-plus/src/Popup/Staking) |  | 
| 5.  | Crowdloan contribution | [x] | [Crowdloans.tsx](https://github.com/Nick-1979/polkadot-Js-Plus-extension/tree/master/packages/extension-plus/src/Popup/CrowdLoans) |  | 

## Additional Notes
Commit hash I used for testing: `82ef7ff95881629f94047c5cc62d074e22b6a9e0`:

Upon release of your app as an official Chrome extension, perhaps ensure your documentation is edited for spelling/grammar/capitalization. I assume that's already in your plans since you're still in beta of course. I think your app is so professional, and I'd love to see your documentation looking as beautiful/professional as your lovely UI!

The original Polkadot{js} extension says they are "an account manager, not a wallet", and so Polkadot.js Plus Extension found a great opportunity to build on top of this and create a wallet.

I found this [Polkadot support article](https://support.polkadot.network/support/solutions/articles/65000169332-where-can-i-see-the-balance-of-my-account-) that has some info that might be relevant to you. 

```
Community-Built Tools

There is also a wallet manager built by Subsocial https://sub.id/#/ which allow you to connect your extension wallet to view all of your assets on different substrate chains. 
```

It's not an extension like yours but I thought you may want to study it nonetheless. 



