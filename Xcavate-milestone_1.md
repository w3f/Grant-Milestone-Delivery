# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [https://github.com/w3f/Grants-Program/pull/1649]
* **Milestone Number:** 1

**Context** (optional)
> We have built a fully functioning substrate based node + react.js Frontend + node.js backend dApp for user interaction

**Deliverables**
> Please see all our deliverables below. In addition please see this high level process flow to give you a better understanding of the overall interactions. [https://xcavate.io/w3f/Xcavate_Real_Estate_Lending_Process.jpg]


| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Xcavate Node Repo | [https://github.com/XcavateBlockchain/MarketplaceMVP_Substrate] | This is a fully functioning substrate node | 
| 2a.  | Xcavate Loan App Repo part 1 | [https://github.com/XcavateBlockchain/MVP_Frontend] | React.js Frontend | 
| 2b.  | Xcavate Loan App Repo part 1 | [https://github.com/XcavateBlockchain/MVP_Backend] | node.js Backend | 
| 3a.  | Loan management pallet | [https://github.com/XcavateBlockchain/MarketplaceMVP_Substrate] | Actually called Community Loan Pallet - A percentage of all XCAV tokens will be deposited in an account, once minted, to facilitate all approved real estate developer loans  |
| 3b.  | Loan Management Contracts | [https://github.com/XcavateBlockchain/lending_protocol_contracts] | Ink! based contracts that interact with the contracts pallet  | 
| 4.  | Staking pallet | To do | Community Loan Staking - This will require XCAV token holders to stake in to the Community Loan Pool and receive an aggregated APY for the period staked... This is more complex than we anticipated so requires a future milestone of its own  | 
| 5.  | Verification pallet | [https://github.com/XcavateBlockchain/kilt-credentials] | Not a pallet - It leverages the KILT protocol - going forward this will be a DID pallet that communicates with KILT via XCM  | 
| 6.  | DAO | [https://github.com/XcavateBlockchain/MarketplaceMVP_Substrate] | Our chain uses the SUDO pallet... this will continue until it has matured enough for the full community governance structure to be implemented  | 


**Additional Information**
> While we have made great progress with this project + we are confident we can deliver this as a live project within the Dotsama ecosystem. There is quite a bit more work to be doen and as such would require additional funding if available.
