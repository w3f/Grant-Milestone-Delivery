# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** FIAT on-off-ramp [FIAT-on-off-ramp.md](https://github.com/w3f/Open-Grants-Program/blob/master/applications/FIAT-on-off-ramp.md)
* **Milestone Number:** 2 out of 3

**Context** (optional)
> Please provide a short paragraph or two connecting the deliverables in this milestone and describing their purpose.

In this milestone we worked on connecting our EBICS service developed in the first milestone with a Substrate chain. Our Substrate chain utilises offchain workers to synchronize the state of connected bank accounts with their on-chain state. Thus it creates a token that is pegged by a bank account currency. Currently, our chain supports EURO and our token is called pEURO, or simply *pegged euro*. With the use of our chain users can easily on and off ramp to web3. For example, just with signing and submitting an extrinsic call, user can easily transfer their EUROs from their bank account to another bank account. And respectively, can mint *pEUROs* by simply depositing to their bank account.

**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

### Milestone 2 Implement Substrate based chain

* **Estimated Duration:** 6 months
* **FTE:**  2
* **Costs:** 20.000 USD

* Link to [github repo](https://github.com/element36-io/ocw-ebics/tree/milestone-2)
* Link to the initial [pull request 348](https://github.com/w3f/Open-Grants-Program/pull/348)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | Inline documentation is provided. Documentation on how to build, test and launch Substrate chain and a separate instruction on testing minting, burning is also [provided](https://github.com/element36-io/ocw-ebics/blob/milestone-2/INSTRUCTIONS.md)|
| 0c. | Testing Guide | Core functions of the basic token and the off chain worker is fully covered by unit tests to ensure functionality and robustness. Instructions to run the tests are provided. |
| 1. | Off chain worker pallet: Event Processing | An [offchain worker pallet](https://github.com/element36-io/ocw-ebics/blob/milestone-2/pallets/fiat-ramps/src/lib.rs) is implemented that performs two main activities: a) polls the bank account for bank statements. Bank statement contains IBAN number, and list of incoming and outgoing transactions. For incoming transactions, pallet mints `amount` of tokens if `source` IBAN of the transaction is not registered on chain, transfers from `source` if it is registered. For outgoing transactions, burns if `destination` IBAN is not registered on chain, performs simple transfer otherwise. b) stores and processes burn requests. Burn request is created when user wants to initiate transfer or burn action on their bank account via on-chain extrinsic with their registered account. Burn requests are stored until they are processed by the offchain worker and removed after that. They will be removed even if `unpegging`/`burning` action fails. More explanation of offchain worker is provided in README file of the repository |
| 2. | Balances Pallet: FIAT stable coin | Balances pallet is loosely coupled into our pallet that makes it possible to have the most basic token actions: mint, burn, transfer, etc. Our token has 10 decimals and has a name pEURO (pegged EURO). Total supply for testing purposes is 40000 pEUROs. |
| 3. | Substrate chain | Altogether, we have a solo Substrate chain that connects to the banking APIs via offchain worker and makes sure to synchronize bank accounts' state with on-chain state. |
| 4. | Unit Tests | Unit tests cover the most essential features of our offchain worker pallet. Every extrinsic, offchain worker behaviour and parsing of raw string into pallet types are thoroughly [tested](https://github.com/element36-io/ocw-ebics/blob/milestone-2/pallets/fiat-ramps/src/tests.rs)|
| 5. | Docker-Compose Substrate node | A docker-compose file is provided to spawn the banking interface API developed in the Milestone 1. |

**Additional Information**
> Any further comments on the milestone that you would like to share with us.

There have been some changes from the initial grant proposal. They are:

- `Minting`: minting process is not proactive, i.e it's not possible to call an extrinsic to mint new stablecoins. Stablecoins are minted only when offchain worker detects an incoming transaction from an unknown IBAN address, i.e from an IBAN address is not mapped to any on-chain account address.
- `Burning`: unlike minting, burning can be achieved either via extrinsic or banking API. However, `burn` extrinsic is not an instant call, pallet will first register the burn request from the user and passes it to offchain worker to process the burn request. Offchain worker then sends the `unpeg` request to the banking API. And once the request suceeds, it will be reflected in the statement as an outgoing transaction, which in turn should be picked up by offchain worker again and processed accordingly.
- Currently, it is not possible to run backend service with machines on Apple M1 Silicone chips. Therefore, for testing purposes you would need to use our hosted version of the backend.
- There is an offchain worker keypair inserted into the keystore so that offchain worker can sign and submit transactions. Since it needs funds for transactions, it comes endowed with 10k pEURO balance.
