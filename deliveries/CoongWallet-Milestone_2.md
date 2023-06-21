# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Coong Wallet](https://github.com/w3f/Grants-Program/blob/master/applications/coong_wallet.md)
* **Milestone Number:** 2

**Deliverables**
| Number | Deliverable | Link | Notes |
| -----: | ----------- | ------------- | ------------- |
| **0a.** | License | [Apache 2.0](https://github.com/CoongCrafts/coong-wallet/blob/w3f-milestone-2/LICENSE) |
| **0b.** | Documentation | - [README](https://github.com/CoongCrafts/coong-wallet/blob/w3f-milestone-2/README.md)<br/>- [Live Working Application](https://app.coongwallet.io/)<br/>- [Example Dapp](https://dapp.coongwallet.io) to demonstrate interactions<br/> - [Integration instruction](https://github.com/CoongCrafts/coong-wallet/blob/w3f-milestone-2/README.md#integrate-coong-wallet-into-your-dapps) |  |
| **0c.** | Testing and Testing Guide | [How to run tests](https://github.com/CoongCrafts/coong-wallet/tree/w3f-milestone-2#how-to-run-tests) |
| **0d.** | Docker | - [Dockerfile](https://github.com/CoongCrafts/coong-wallet/blob/w3f-milestone-2/Dockerfile)<br/>- [How to run the app on Docker](https://github.com/CoongCrafts/coong-wallet/blob/w3f-milestone-2/README.md#run-it-on-docker) |
| 0e. | Article | [Link](https://docs.google.com/document/d/1nZUzetDZvLReof3easrRvR5HQSpjags-XShYj55gJEo/edit?usp=sharing) | We are still polishing the content and will publish this article after the milestone is accepted |
| 1. | Wallet App / Additional features | We've implemented the following features for the wallet app:<br/>- [Sign raw message](https://github.com/CoongCrafts/coong-wallet/blob/w3f-milestone-2/packages/ui/src/components/pages/Request/RequestSigning/RequestSignRawMessage.tsx) <br/> - [Import existing wallet](https://github.com/CoongCrafts/coong-wallet/tree/w3f-milestone-2/packages/ui/src/components/pages/SetupWallet/RestoreWallet) <br/> - [Forget wallet password / Reset wallet](https://github.com/CoongCrafts/coong-wallet/blob/w3f-milestone-2/packages/ui/src/components/shared/buttons/ForgotPasswordButton.tsx) <br/> - [Account controls](https://github.com/CoongCrafts/coong-wallet/tree/w3f-milestone-2/packages/ui/src/components/pages/Accounts/AccountControls) <br/> - [Export wallet](https://github.com/CoongCrafts/coong-wallet/blob/w3f-milestone-2/packages/ui/src/components/shared/menu/ExportWalletDialog.tsx) <br/> - [Import account from QR Code, JSON file](https://github.com/CoongCrafts/coong-wallet/blob/w3f-milestone-2/packages/ui/src/components/shared/menu/ImportAccountDialog/index.tsx) <br/> - [Manage Dapps Access](https://github.com/CoongCrafts/coong-wallet/blob/w3f-milestone-2/packages/ui/src/components/shared/settings/ManageDappAccessDialog/index.tsx) <br/> - [Settings](https://github.com/CoongCrafts/coong-wallet/blob/w3f-milestone-2/packages/ui/src/components/shared/settings/SettingsWalletDialog/index.tsx) <br/> |
| 2. | Demo Dapp | - [Source Code](https://github.com/CoongCrafts/playground-dapp)<br/> - https://dapp.coongwallet.io | 🚀 Don't forget to try out the dapp on your mobile/tablet browsers to see the advantage of CoongWallet over extension-based wallets 😃 |

**Additional Information**
- Known issues mentioned in [Milestone 1](https://github.com/CoongCrafts/coong-wallet/tree/w3f-milestone-1#known-issues)
  - `Blocking third party cookies issue`: 
    - Requiring users to disable the "Block third-party cookies" setting in their browser would make the website-based wallet experience (UX, API) similar to extension-based wallets. But this approach poses certain tradeoffs.
      + Firstly, it violates users' privacy as they likely might not want to disable this setting and be tracked by social media platforms and other services.
      + Secondly, each browser (both on mobile and desktop) has its own unique method of enabling or disabling this setting. Consequently, providing custom instructions for each browser would complicate the user experience and onboarding process for new users. As our purpose is to create a more user-friendly onboarding experience, we strive to avoid complex instructions during this process.
    - Therefore, we have decided to take a different approach to address this issue.
      + We will no longer initiate or append an embedded iframe of the wallet within the dapp, eliminating the need to deal with the "Block third-party cookies" issue.
      + Instead, we will utilize first-party localStorage (dapp's localStorage) to store granted information (connected accounts). Additionally, we will introduce extra APIs to (1) allow users to add or remove (update) their granted information within the dapp and (2) clear granted information when users want to sign out of the dapp. This alternative approach requires some additional handling for developers during the integration of Coong Wallet into the dapp. However, for users, they will no longer need to toggle browser settings, resulting in a seamless onboarding experience.
  - `Blocking popups issue` when calling API that opens a Coong Wallet window/popup (asking for user's consent, signing transaction)
    - This issue might happen for actions that are running asynchronously or take a bit of time to complete.
    - To prevent this from happening, we introduce an API that allows developers to open a waiting wallet window/popup (`CoongSdk.newWaitingWalletInstance()`) ready to send messages to later, so developers can call this API first thing on users interaction (click/touch) before calling any asynchronous tasks.
    - More on this can be found [here](https://github.com/CoongCrafts/coong-wallet/tree/w3f-milestone-2#prevent-blocking-popups-issue)
    - Example integration for [transfering balance](https://github.com/CoongCrafts/playground-dapp/blob/a6072c80fe5dfd263c1b4bcbe44423cdda9798b2/src/components/TransferBalanceButton.tsx#L93-L99), [demo dapp](https://dapp.coongwallet.io/)
- As for the `Manage & decode metadata feature` mentioned in [milestone 1 delivery](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/CoongWallet-Milestone_1.md), due to timing constraints as we're changing approach to solve the known issues mentioned above, we don't have any extra time left to address this. So we decided to working on this in the future outside the scope of this grant.
- As for the `Import account from Private Key`: This feature was mentioned in the proposal but make more senses to implement when we have support for EVM accounts to allow users to transfering account using Private Key exported from MetaMask. So we decided to put this on hold until we implement EVM accounts support for the wallet. Let us know if we need to make an amendment PR to remove this from the proposal.
- Demo videos
  - Dapp x Wallet Interaction on Desktop: https://youtu.be/9fIcAlpx_UI
  - Dapp x Wallet Interaction on Mobile: https://youtu.be/F8S2fmQFRWQ
