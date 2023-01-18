# Evaluation

- **Status:** Accepted
- **Application Document:** [tribal_protocol.md](https://github.com/w3f/Grants-Program/blob/master/applications/tribal_protocol.md) 
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>|[tribal_contract](https://github.com/tribal-protocol/tribal_contract/blob/main/LICENSE) [substrate-poc-client](https://github.com/tribal-protocol/substrate-poc-client/blob/main/LICENSE) | Apache 2.0 |
| 0b. | Documentation |<ul><li>[x] </li></ul>| [Milestone Article](https://mirror.xyz/0xd7ce012585d013585C158431F08903B771189513/hIAaElI7y4QCXE3YDy8plmBRzKoVPIIqx13l2zXSiJ4)| Good documentation, with additional in-line documentation to the exposed contract functions added upon request. | 
| 0c.  | Testing |<ul><li>[x] </li></ul>|[Milestone Article](https://mirror.xyz/0xd7ce012585d013585C158431F08903B771189513/hIAaElI7y4QCXE3YDy8plmBRzKoVPIIqx13l2zXSiJ4)| Testing coverage on the smart contract is excellent. The webapp does not have automated tests, but since it is a poc and not the core of this delivery, this is fine. |
| 0d. | Article |<ul><li>[x] </li></ul>|[Milestone Article](https://mirror.xyz/0xd7ce012585d013585C158431F08903B771189513/hIAaElI7y4QCXE3YDy8plmBRzKoVPIIqx13l2zXSiJ4)| Good article containing a summary of this delivery and a detailed overview of the design. | 
| 1.  | Design Doc |<ul><li>[x] </li></ul>|[Milestone Article](https://mirror.xyz/0xd7ce012585d013585C158431F08903B771189513/hIAaElI7y4QCXE3YDy8plmBRzKoVPIIqx13l2zXSiJ4)| Good article containing a summary of this delivery and a detailed overview of the design. | 
| 2.  | tribal_pallet | N/A | N/A| Did not Implement -- milestone implemented 100% in ink! contract | 
| 3. | Ink! Contract: create_tribe |<ul><li>[x] </li></ul>|[Link](https://github.com/tribal-protocol/tribal_contract)| Works | 
| 4.  | Initial Tribe Struct |<ul><li>[x] </li></ul>|[Link](https://github.com/tribal-protocol/tribal_contract/blob/100d43279165f01ca3654806a816feb05916a650/lib.rs#L18)| | 
| 5.  | Orchestrator Client |<ul><li>[x] </li></ul>|[Link](https://github.com/tribal-protocol/substrate-poc-client/blob/main/src/lib/orchestrator.ts)| Minimal, but works. AFAIK the frontend currently only initializes the creation of tribes, and other tools are needed to finalize their creation, i.e. calling `accept_tribe` and `fund_tribe`. | 

## General Notes

Overall this is a great delivery, especially considering this is your team's first experience with ink!. 

Additional documentation and better error handling was added upon request. The team "intends on implementing [`Event` emissions] in the future, as necessity arises." 
