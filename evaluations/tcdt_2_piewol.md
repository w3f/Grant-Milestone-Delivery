# Evaluation

- **Status:** in progress
- **Application Document:** private
- **Milestone:** 2
- **Previously successfully merged evaluation:** All by PieWol

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul> | [license file](https://github.com/tcdt-lab/bcdns/blob/master/LICENSE) | Apache 2.0 | 
| 0b.  | Documentation |<ul><li>[x] </li></ul> | [NodeJS Client](https://github.com/tcdt-lab/bcdns/blob/master/dns_client/README.md), [Golang Client](https://github.com/tcdt-lab/bcdns/blob/master/dns_client_golang/README.md), [Overview](https://github.com/tcdt-lab/bcdns/blob/master/README.md#enabling-blockchain-interoperability-through-discovery) | ok | 
| 0c.  | Testing guide | <ul><li>[ ] </li></ul> | [Tests](https://github.com/tcdt-lab/bcdns/blob/master/polkadot-sdk-solochain-template/pallets/rootdns/src/tests.rs), [Tests](https://github.com/tcdt-lab/bcdns/blob/master/polkadot-sdk-solochain-template/pallets/tld/src/tests.rs)   | unit tests failing [as described](https://github.com/tcdt-lab/bcdns/blob/master/dns_client/testing.md) | 
| 0d.  | Docker | <ul><li>[ ] </li></ul> | | not yet tested | 
| 1 | Domain Resolution Protocol |<ul><li>[ ] </li></ul> | [link](https://github.com/tcdt-lab/bcdns/blob/master/README.md#domain-resolution-protocol) |  | 
| 2 | Domain Registration Protocol|<ul><li>[ ] </li></ul> | [link](https://github.com/tcdt-lab/bcdns/blob/master/README.md#domain-registration-protocol) |  |
| 3 | Domain Revocation Protocol|<ul><li>[ ] </li></ul> | [link](https://github.com/tcdt-lab/bcdns/blob/master/README.md#domain-revocation-protocol) |  |
| 4 | Domain Transfer Protocol|<ul><li>[ ] </li></ul> | [link](https://github.com/tcdt-lab/bcdns/blob/master/README.md#domain-transfer-protocol) |  |
| 5 |  bcdns-adapter-node |<ul><li>[ ] </li></ul> | [Link](https://github.com/tcdt-lab/bcdns/blob/master/dns_client) |  |
| 6 | bcdns-adapter-golang |<ul><li>[ ] </li></ul> | [Link](https://github.com/tcdt-lab/bcdns/blob/master/dns_client_golang)|  |


## General Notes
First of all, thank you for the updates. Looks like there is now a straight forward guide to deploy a node and test your delivery properly. 


## Testing
All node.js dns client unit tests are passing

```
Test Suites: 3 passed, 3 total
Tests:       21 passed, 21 total
```

golang client unit tests are also all passing