# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** FIAT on-off-ramp [FIAT-on-off-ramp.md](https://github.com/w3f/Open-Grants-Program/blob/master/applications/FIAT-on-off-ramp.md)
* **Milestone Number:** 2 out of 3

**Context** (optional)
> Please provide a short paragraph or two connecting the deliverables in this milestone and describing their purpose.

**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

### Milestone 2 Implement Substrate based chain

* **Estimated Duration:** 6 months
* **FTE:**  2
* **Costs:** 20.000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | Inline documentation is provided. Documentation on how to build, test and launch Substrate chain and a separate instruction on testing minting, burning is also provided |
| 0c. | Testing Guide | Core functions of the basic token and the off chain worker is fully covered by unit tests to ensure functionality and robustness. Instructions to run the tests are provided. |
| 1. | Off chain worker pallet: Event Processing | An offchain worker pallet is implemented that serves the following purposes: a) polls the bank account for bank statements, for incoming transactions, mints if `source` IBAN of the transaction is not registered on chain, transfers from `source` if it is registered. For outgoing transactions, burns if `destination` IBAN is not registered on chain, transfers otherwise |
| 2. | Pallet: FIAT stable coin | We will create a basic token with init, mint, burn, transfer, getBalance(address) and getTotalBalance. Burn and transfer will emit events and errors. At this point for simplicity, we will not use [Currency](https://substrate.dev/recipes/currency.html) trait.  |
| 3. | Substrate chain | Use described modules of our custom chain will provide a token, which synchronizes with a fully pegging bank account as described throughout the document.  |
| 4. | Unit Tests | We will add unit tests to cover mint, burn, transfer, getBalance, getTotalBalance for the basic token. We will add unit tests to the off chain worker to test the local datastore with the map of IBAN to addresses and vice-versa, plus mint and burn.  |
| 5. | Docker-Compose Substrate node | We will provide a docker-compose file to demonstrate the full functionality of our chain, the ocw, including a stub for the FIAT Rest Interface developed in Milestone 1. |

**Additional Information**
> Any further comments on the milestone that you would like to share with us.
