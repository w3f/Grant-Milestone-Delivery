# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/choko_wallet.md
* **Milestone Number:** 1


**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

Code Repo Base: 
Frontend Web App: https://github.com/choko-wallet/wallet-app/blob/w3f-milestone-1 

SDK: https://github.com/choko-wallet/sdk/blob/w3f-milestone-1 

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | See LICENSE in both codebases | Apache 2.0 | 
| 0b. | Documentation | See codebase. Live Demo at https://choko.app | | 
| 0c. | Testing Guide | https://github.com/choko-wallet/sdk/blob/w3f-milestone-1  | Core functionalities inside SDK repo. 
| 0b. | Docker | None | | 
| 0b. | Article | https://medium.com/@choko_wallet/introducing-to-the-new-web3-wallet-choko-wallet-d4626a40c9dd | | 
| 1. | Reactjs WebApp | Accounts: https://github.com/choko-wallet/wallet-app/tree/w3f-milestone-1/packages/frontend/pages/account https://choko.app/account <br/> <br/><br/> sign message/transaction<br/> https://github.com/choko-wallet/wallet-app/tree/w3f-milestone-1/packages/frontend/pages/request Ref to Delivery#2 for how to tests in a demo page <br/><br/> setup-on-another-device  https://github.com/choko-wallet/wallet-app/blob/w3f-milestone-1/packages/frontend/pages/settings.tsx https://github.com/choko-wallet/wallet-app/blob/w3f-milestone-1/packages/frontend/pages/import.tsx  https://choko.app/settings Go to Export Account Url | We ended up exporting accounts ENCRYPTED with the user input password. Therefore, we do not need any warning message for potential risk of leaing private key. Comments welcomed. 
| 2. | A Sample DApp | https://github.com/choko-wallet/wallet-app/blob/w3f-milestone-1/packages/frontend/pages/test-request.tsx https://choko.app/test-request | |
| 3. | SDK | https://github.com/choko-wallet/sdk/tree/w3f-milestone-1/packages/known-networks/src For known networks. https://github.com/choko-wallet/sdk/tree/w3f-milestone-1/packages/request-handler/src for "signMessage", "connectDapp", "signTx", "decryptMessage" handlers | |
 
**Additional Information**
For some functionalities included in "decryptMessage", might be also worth review https://github.com/skyekiwi/skyekiwi-protocol/blob/master/packages/crypto/src/asymmetric.ts for "encryptWithCurveType", "decryptWithCurveType" and "getPublicKeyWithCurveType". 

