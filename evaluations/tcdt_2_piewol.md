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
| 0d.  | Docker | <ul><li>[x] </li></ul> | | works | 
| 1 | Domain Resolution Protocol |<ul><li>[x] </li></ul> | [link](https://github.com/tcdt-lab/bcdns/blob/master/README.md#domain-resolution-protocol) | works | 
| 2 | Domain Registration Protocol|<ul><li>[x] </li></ul> | [link](https://github.com/tcdt-lab/bcdns/blob/master/README.md#domain-registration-protocol) | works |
| 3 | Domain Revocation Protocol|<ul><li>[ ] </li></ul> | [link](https://github.com/tcdt-lab/bcdns/blob/master/README.md#domain-revocation-protocol) | not yet tested |
| 4 | Domain Transfer Protocol|<ul><li>[ ] </li></ul> | [link](https://github.com/tcdt-lab/bcdns/blob/master/README.md#domain-transfer-protocol) | not yet tested |
| 5 |  bcdns-adapter-node |<ul><li>[x] </li></ul> | [Link](https://github.com/tcdt-lab/bcdns/blob/master/dns_client) | works  |
| 6 | bcdns-adapter-golang |<ul><li>[ ] </li></ul> | [Link](https://github.com/tcdt-lab/bcdns/blob/master/dns_client_golang)| ok |


## General Notes
First of all, thank you for the updates. Looks like there is now a straight forward guide to deploy a node and test your delivery properly. 

Testing guide is now working and the docker containers launch as expected. The UI is available and the domain registration & resolution works.

## bcdns-adapter-node
works and successfully resolved the domain.


````
BCDNS_MODE=web npm start

> dns_client@1.0.0 start
> node --trace-warnings main

Web server running at http://localhost:3000
Connecting to network root with boot nodes: /ip4/172.18.0.2/tcp/9945/p2p/12D3KooWNL4mZo8y7oAes3VRRnbHy91TDLxnjrDsnMFZkPebB2Rh,/ip4/172.18.0.3/tcp/9945/p2p/12D3KooWNL4mZo8y7oAes3VRRnbHy91TDLxnjrDsnMFZkPebB2Rh
Trying to connect to /ip4/172.18.0.3/tcp/9945/p2p/12D3KooWNL4mZo8y7oAes3VRRnbHy91TDLxnjrDsnMFZkPebB2Rh
2025-05-16 11:09:38        API/INIT: Api will be available in a limited mode since the provider does not support subscriptions
2025-05-16 11:09:39        API/INIT: RPC methods not decorated: chainHead_v1_body, chainHead_v1_call, chainHead_v1_continue, chainHead_v1_follow, chainHead_v1_header, chainHead_v1_stopOperation, chainHead_v1_storage, chainHead_v1_unfollow, chainHead_v1_unpin, chainSpec_v1_chainName, chainSpec_v1_genesisHash, chainSpec_v1_properties, transactionWatch_v1_submitAndWatch, transactionWatch_v1_unwatch, transaction_v1_broadcast, transaction_v1_stop
Connected to chain: root
Using node: Substrate Node v0.1.0-1ec77d199e1
Connecting to network com_tld with boot nodes: /ip4/172.19.0.2/tcp/9945/p2p/12D3KooWNL4mZo8y7oAes3VRRnbHy91TDLxnjrDsnMFZkPebB2Rh,/ip4/172.19.0.3/tcp/9945/p2p/12D3KooWNL4mZo8y7oAes3VRRnbHy91TDLxnjrDsnMFZkPebB2Rh
Trying to connect to /ip4/172.19.0.3/tcp/9945/p2p/12D3KooWNL4mZo8y7oAes3VRRnbHy91TDLxnjrDsnMFZkPebB2Rh
2025-05-16 11:09:39        API/INIT: Api will be available in a limited mode since the provider does not support subscriptions
2025-05-16 11:09:39        API/INIT: RPC methods not decorated: chainHead_v1_body, chainHead_v1_call, chainHead_v1_continue, chainHead_v1_follow, chainHead_v1_header, chainHead_v1_stopOperation, chainHead_v1_storage, chainHead_v1_unfollow, chainHead_v1_unpin, chainSpec_v1_chainName, chainSpec_v1_genesisHash, chainSpec_v1_properties, transactionWatch_v1_submitAndWatch, transactionWatch_v1_unwatch, transaction_v1_broadcast, transaction_v1_stop
Connected to chain: com_tld
Using node: Substrate Node v0.1.0-1ec77d199e1
`````



## Testing
All node.js dns client unit tests are passing

```
Test Suites: 3 passed, 3 total
Tests:       21 passed, 21 total
```

golang client unit tests are also all passing