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
First of all, thank you for the updates. Looks like there is now a straight forward guide to deploy a node and test your delivery properly. Sadly there are issues with the current unit tests.


## Testing
sadly testing with the following commands doesn't succeed. Since you state "The tests are designed to verify the functionality of the DNS client without requiring a connection to the actual blockchain network." I assume that the tests should pass. 
```
cd dns_client
npm install
npm run build
npm test
```
```
All files          |   66.16 |    76.59 |      64 |   66.16 |                   
 dns_client        |   43.25 |    58.82 |   33.33 |   43.25 |                   
  util.js          |   43.25 |    58.82 |   33.33 |   43.25 | ...41-154,157-178 
 dns_client/dns    |   97.86 |    86.66 |     100 |   97.86 |                   
  ..._connector.js |   96.11 |    76.47 |     100 |   96.11 | 77-78,92-93       
  resolver.js      |     100 |      100 |     100 |     100 |                   
 ...lient/polkadot |    6.45 |      100 |       0 |    6.45 |                   
  connector.js     |    6.45 |      100 |       0 |    6.45 | 3-31              
-------------------|---------|----------|---------|---------|-------------------
Test Suites: 1 failed, 2 passed, 3 total
Tests:       4 failed, 17 passed, 21 total
Snapshots:   0 total
Time:        1.904 s, estimated 2 s
```