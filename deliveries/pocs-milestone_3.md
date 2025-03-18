# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Proof of Contract Stake](https://github.com/w3f/Grants-Program/tree/master/applications/PoCS.md)
* **Milestone Number:** 3


**Deliverables**

|Number|Deliverable|Link|Notes|
|-------------|-------------|------------- |------------- |
|0a.|License| [MIT License](https://github.com/auguth/pocs/blob/w3f_milestone_3/ink-contracts/LICENSE) |ink! Contracts LICENSE|
|0b.|Documentation| [Inline Documentation](hhttps://github.com/auguth/pocs/tree/w3f_milestone_3/ink-contracts) | All ink! contracts and chain extensions contain inline code documentation|
|0c.|Testing Guide| [Testing guide](https://github.com/auguth/pocs/blob/w3f_milestone_3/ink-contracts/README.md) |Contracts Testing Guide |
|0d.|Docker | [Dockerfile](https://github.com/auguth/pocs/blob/w3f_milestone_3/solo-substrate-chain/Dockerfile) | `docker compose up --build -d` |
|0e.|Article|[Medium-Article](https://medium.com/@auguthresearch/proof-of-contract-stake-pocs-v0-1-experimental-0ed7f009b6dc), [PoCS-Litepaper](https://github.com/auguth/pocs/tree/w3f_milestone_3/litepaper/pocs-litepaper.pdf)|-|
|1.| Contract development |[Ink-Contracts](https://github.com/auguth/pocs/tree/w3f_milestone_3/ink-contracts), [Validator-Reward Contract](https://github.com/auguth/pocs/tree/w3f_milestone_3/ink-contracts/delegate_registry/) | Includes Chain Extension Contracts & Validator Reward Contract|
|2.| Alpha testing and publish paper | [Testing & Report](https://github.com/auguth/pocs/blob/w3f_milestone_3/testing-report.md), [PoCS-Specification-paper](https://github.com/auguth/pocs/tree/w3f_milestone_3/specification/pocs-spec.pdf) |Testing Report includes comprehensive list of all modifications to existing pallets, provides inference on breaking changes and also further development steps.|

**Additional Notes**

 - Since `cargo test` cannot be conducted for our chain extensions, [E2E tests](https://github.com/auguth/pocs/tree/w3f_milestone_3/ink-contracts/e2e_test.sh) for all contracts are conducted. 
 - Tests allowing Root account to call are intentionally avoided and left to fail. Reasons are provided in [Testing & Report](https://github.com/auguth/pocs/blob/w3f_milestone_3/testing-report.md#srctestsrs)

---

