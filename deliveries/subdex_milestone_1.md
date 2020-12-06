# Milestone Delivery :mailbox:

> Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. Don't remove any of the mandatory parts presented in bold letters or as headlines!

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone.**  

* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/60 
* **Milestone Number:** 1 

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which should be used for testing.
| Number | Deliverable                 | Link  | Notes                                                                                                                                                                                                                                                                 |
| ------ | --------------------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.     | UI connection               | https://subdex.network | Update UI to support user specified connections to Subdex parachain nodes and connection to browser wallet                                                                                                                                                                    |
| 2.     | UI feature                  | https://subdex.network | Allow user to set allowed slippage                                                                                                                                                                                                                                            |
| 3.     | UI Theme                    | https://subdex.network | Provide 2 themes for UI -- light and dark and allow user to choose which one                                                                                                                                                                                                  |
| 4.     | Dex Pallet                  | https://github.com/subdarkdex/pallet-subdex | Implement Uniswap V2 AMM protocol with full test coverage and eliminate overflow/underflow risks in calculation in the chain, publish as a standalone pallet                                                                                                                  |
| 5.     | Dex XCMP Pallet             | https://github.com/subdarkdex/pallet-subdex | Handle relay chain asset creation and test this placeholder XCMP pallet that will be used to create demo for testnets for this milestone                                                                                                                                      |
| 6.     | Generic Token Dealer Pallet | https://github.com/subdarkdex/pallet-generic-token-dealer |  Create a generic token dealer pallet that can handle generic assets and/or native parachain currency, based on the [token dealer](https://github.com/paritytech/cumulus/tree/master/rococo-parachains/pallets/token-dealer) pallet example and publish as a standalone pallet |
| 7.     | UI Infrastrcture            | https://subdex.network | Deploy frontend to IPFS - (submission note: via Fleek.co)                                                                                                                                                                                                                                                       |
| 8.     | Network Infrastructure      | subdex: wss://subdex.link; generic: wss://subdex.link/generic; relay alice: wss://subdex.link/relay | Deploy to secured and high reliability server(s) to host a demo relay chain and parachains testnets.      |
| 9. | Twitter and medium | twitter: @subdex1 and [post](https://medium.com/@subdex/subdex-milestone-1-delivery-c87ca9b6b159) medium: @subdex | We will provide a tutorial on how to use the Pallets created to connect a DEX parachain to a generic parachain with the Generic Token Dealer pallet.

**Other Resources**
In order to demostrate the usage or the pallets in the milestone, we have 3 additional repos 
1. [subdex-xc-network](https://github.com/subdarkdex/subdex-xc-network) - Network deployment for docker and local development. Network specifics are documented here
1. [subdex-parachain](https://github.com/subdarkdex/subdex-parachain) - The subdex parachain connected to a test relay network using pallet-subdex and pallet-subdex-xcmp
1. [generic-parachain](https://github.com/subdarkdex/generic-parachain) - The parachain using the Generic Token Dealer Pallet and Assets. 

In the UI for this milestone, we represent other assets on the generic parachain - that the paraAssetId=1 is BTC on subdex parachain and paraAssetId=2 is EDG on subdex-parachain, this is also the order of which they are transfered
initially to the subdex-parachain
