
# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Application](https://github.com/w3f/Grants-Program/blob/master/applications/Dotflow.md)
* **Milestone Number:** 2

**Context** (optional)
We are submitting the delivery of all the functionality specified in the grant application for the first milestone. The list of the things we did in this milestone:

- Created the Address Book which contains all the functionality we promised to do in the grant application.
- Tests for the address book contract. We have not only written integration tests but also e2e tests since the contract is doing cross-contract calling with the Identity contract.
- Address book contract and transaction router documentation. We have added a lot of commetns in the code, as well as in the tests to make sure everything is easy to understand.
- We added token routing which is by far the most complex component in this milestone. We support 
    1. non-cross-chain transfers
    2.  teleport transfers, this utilises the existing `limited_teleport_assets` extrinsic
    3. reserve transfers from the reserve chain, this utilises the existing `limited_reserve_transfer_assets` extrinsic
    4. reserve transfers to the reserve chain, this is a more complex case and we have written a custom XCM program to do this.
    5. two-hop reserve transfer, this is the most complex case there is and we have written a custom XCM program to do this also.
- We decided to utilise XCM for non-cross-chain transfers also, since this way we do not make any assumptions on the pallets the chains implement other than the fact that we require the xcm pallet.
- For getting all the assets on all polkadot and kusama chains we use the [XCM Global Asset Registry](https://github.com/colorfulnotion/xcm-global-registry).

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [Contract](https://github.com/TheDotflow/dotflow-ink/blob/main/LICENSE) [Frontend](https://github.com/TheDotflow/dotflow-ui/blob/main/LICENSE) | MIT license | 
| 0b.  | Documentation | [Link](https://github.com/TheDotflow/dotflow-ink/blob/main/README.md) |  | 
| 0c.  | Testing and Testing Guide | [Address Book Ingegration tests](https://github.com/TheDotflow/dotflow-ink/blob/main/contracts/address_book/tests.rs) [Address Book e2e tests](https://github.com/TheDotflow/dotflow-ink/blob/main/contracts/address_book/lib.rs#L239) [UI e2e tests](https://github.com/TheDotflow/dotflow-ui/tree/main/__tests__) [UI reserve transfer unit test](https://github.com/TheDotflow/dotflow-ui/blob/main/src/utils/transactionRouter/reserveTransfer.test.ts) [Frontend test guide](https://github.com/TheDotflow/dotflow-ui#running-tests) [Contract test guide](https://github.com/TheDotflow/dotflow-ink#build--test-locally) | Tests for the address book contract, Tests for the cross-chain, non-cross-chain, teleport transfers and other utility tests |
| 0d.  | Docker | [Contract](https://github.com/TheDotflow/dotflow-ink#docker) [Frontend](https://github.com/TheDotflow/dotflow-ui#run-with-docker) |  |
| 0d.  | Medium article | [Article](https://medium.com/@sakacszergej/dotflow-6326f71dd97b) |  |
| 1.  | Address Book Contract | [Link](https://github.com/TheDotflow/dotflow-ink/tree/main/contracts/address_book) | The code of the address book contract | 
| 2.  | Routing functionality | [Link](https://github.com/TheDotflow/dotflow-ui/tree/main/src/utils/transactionRouter) | The code containing the routing functionality | 
| 3.  | Address Book page | [Link](https://github.com/TheDotflow/dotflow-ui/blob/main/src/pages/address_book.tsx) | The frontend code | 
| 4.  | Transfer page | [Link](https://github.com/TheDotflow/dotflow-ui/blob/main/src/pages/transfer.tsx) | The frontend code | 

**Additional Information**

In the very near future we plan to deploy the contract to a Kusama network parachain.
