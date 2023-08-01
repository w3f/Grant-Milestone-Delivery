# Evaluation

- **Status:** Accepted
- **Application Document:** [w3f/Grants-Program#1715](https://github.com/w3f/Grants-Program/blob/master/applications/ocelloids_monitoring_sdk.md)
- **Milestone:** 1
- **Kusama Identity:** [FdAoQzuxaG2nsXFGpvXfzzUDYueKqYK1B1LShZ874N2vhv5](https://sub.id/FdAoQzuxaG2nsXFGpvXfzzUDYueKqYK1B1LShZ874N2vhv5)
- **Previously successfully merged evaluation:** N/A

**Deliverables**

| Number  | Deliverable   | Link | Notes |
| ------- | ------------- | ------------- |------------- |
| **0a.** | License       | https://github.com/sodazone/ocelloids/blob/main/LICENSE | |
| **0b.** | Documentation | <ul><li>https://github.com/sodazone/ocelloids/blob/main/README.md</li><li>https://github.com/sodazone/ocelloids/blob/main/guides/QUICKSTART.md</li><li>https://sodazone.github.io/ocelloids/</li></ul>| There are detailed READMEs for each module and also inline source code documentation. We also have a quickstart guide and a documentation site to help with setting up the first Ocelloids project. |
| **0c.** | Testing and Testing Guide | https://github.com/sodazone/ocelloids#testing | |
| 1.      | Core SDK | https://github.com/sodazone/ocelloids/tree/main/packages/core | |
| 2.      | ink! Contracts Domain Logic | https://github.com/sodazone/ocelloids/tree/main/packages/pallets/contracts | |
| 3.      | Example application | https://github.com/sodazone/ocelloids/tree/main/examples/watch-contracts | |

## General Notes

Overall, this is a solid project, well documented and scripts, and all promised features work as expected, and are well tested (including unit tests and intergration tests).

### Logs

<details>

<summary> Unit tests </summary>

```bash

 PASS  packages/core/src/subjects/query.spec.ts
 PASS  packages/core/src/observables/bn.spec.ts
 PASS  packages/core/src/subjects/mingo-ops.spec.ts
 PASS  packages/core/src/configuration/utils.spec.ts
 PASS  packages/core/src/apis/substrate-apis.spec.ts
 PASS  packages/core/src/observables/blocks.spec.ts (5.017 s)
 PASS  packages/core/src/observables/events.spec.ts (5.042 s)
 PASS  packages/core/src/operators/convert.spec.ts (5.168 s)
 PASS  packages/core/src/operators/flatten.spec.ts (5.28 s)
 PASS  packages/core/src/converters/base.spec.ts (5.443 s)
 PASS  packages/pallets/contracts/src/operators/contracts.spec.ts (5.499 s)
 PASS  packages/core/src/operators/mongo-filter.spec.ts (5.543 s)
 PASS  packages/pallets/contracts/src/operators/filter.spec.ts (5.759 s)
 PASS  packages/core/src/operators/filter.spec.ts (5.899 s)
 PASS  packages/core/src/operators/extract.spec.ts (7.689 s)
----------------------------------|---------|----------|---------|---------|-------------------------
File                              | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s       
----------------------------------|---------|----------|---------|---------|-------------------------
All files                         |   95.86 |    94.54 |   93.82 |   95.74 |                         
 core/src                         |     100 |      100 |     100 |     100 |                         
  index.ts                        |     100 |      100 |     100 |     100 |                         
 core/src/apis                    |   81.35 |      100 |      65 |   81.35 |                         
  index.ts                        |     100 |      100 |     100 |     100 |                         
  substrate-apis.ts               |   81.03 |      100 |      65 |   81.03 | 127,131-172,220,236,272 
 core/src/configuration           |     100 |      100 |     100 |     100 |                         
  index.ts                        |     100 |      100 |     100 |     100 |                         
  networks.ts                     |     100 |      100 |     100 |     100 |                         
  utils.ts                        |     100 |      100 |     100 |     100 |                         
 core/src/converters              |     100 |    97.22 |     100 |     100 |                         
  base.ts                         |     100 |    97.22 |     100 |     100 | 166                     
  index.ts                        |     100 |      100 |     100 |     100 |                         
 core/src/observables             |     100 |      100 |     100 |     100 |                         
  blocks.ts                       |     100 |      100 |     100 |     100 |                         
  bn.ts                           |     100 |      100 |     100 |     100 |                         
  events.ts                       |     100 |      100 |     100 |     100 |                         
  index.ts                        |     100 |      100 |     100 |     100 |                         
 core/src/operators               |     100 |    94.44 |     100 |     100 |                         
  convert.ts                      |     100 |      100 |     100 |     100 |                         
  debug.ts                        |     100 |    66.66 |     100 |     100 | 34                      
  extract.ts                      |     100 |      100 |     100 |     100 |                         
  filter.ts                       |     100 |      100 |     100 |     100 |                         
  flatten.ts                      |     100 |      100 |     100 |     100 |                         
  index.ts                        |     100 |      100 |     100 |     100 |                         
  mongo-filter.ts                 |     100 |      100 |     100 |     100 |                         
 core/src/subjects                |     100 |      100 |     100 |     100 |                         
  index.ts                        |     100 |      100 |     100 |     100 |                         
  mingo-ops.ts                    |     100 |      100 |     100 |     100 |                         
  query.ts                        |     100 |      100 |     100 |     100 |                         
 core/src/types                   |   90.47 |      100 |   71.42 |   90.47 |                         
  event.ts                        |    87.5 |      100 |   66.66 |    87.5 | 62                      
  extrinsic.ts                    |      90 |      100 |      75 |      90 | 59                      
  index.ts                        |     100 |      100 |     100 |     100 |                         
 pallets/contracts/src/converters |    87.5 |    71.42 |   92.85 |    87.5 |                         
  contracts.ts                    |    87.5 |    71.42 |   92.85 |    87.5 | 118,122-134             
 pallets/contracts/src/operators  |   96.29 |      100 |     100 |   96.15 |                         
  contracts.ts                    |   94.44 |      100 |     100 |   94.11 | 117-125                 
  filter.ts                       |     100 |      100 |     100 |     100 |                         
  index.ts                        |     100 |      100 |     100 |     100 |                         
----------------------------------|---------|----------|---------|---------|-------------------------

Test Suites: 15 passed, 15 total
Tests:       76 passed, 76 total
Snapshots:   0 total
Time:        8.113 s
Ran all test suites.

```

</details>

<details>

<summary>Integration tests 1 - simple-fees</summary>

- Calculates simple fee stats for a block range.

```bash

Fees [16134439-16134539]
========================================
Average: 15.9970 mDOT
Minimum: 11.9089 mDOT (@16134496-2)
Maximum: 29.0940 mDOT (@16134517-2)
----------------------------------------
Time: 13255ms (132.55 block/s)
Blocks: 100 (tx: 364, events: 4931)

```

</details>

<details>

<summary>Integration tests 2 - filter-extrinsics</summary>

- Filters extrinsics using HJSON provided filters. Supports pipeable stdin and stdout.

```bash

> Endpoints: [ 'wss://rpc.polkadot.io', 'wss://kusama-rpc.polkadot.io' ]
> Using filter: {
  "extrinsic.call.section": "timestamp"
}
{"network":0,"extrinsicId":"16555430-0","blockNumber":"16,555,430","position":0,"isSigned":false,"method":{"args":{"now":"1,690,298,016,000"},"method":"set","section":"timestamp"}}
{"network":1,"extrinsicId":"18944488-0","blockNumber":"18,944,488","position":0,"isSigned":false,"method":{"args":{"now":"1,690,298,016,001"},"method":"set","section":"timestamp"}}
{"network":0,"extrinsicId":"16555431-0","blockNumber":"16,555,431","position":0,"isSigned":false,"method":{"args":{"now":"1,690,298,022,000"},"method":"set","section":"timestamp"}}
{"network":1,"extrinsicId":"18944489-0","blockNumber":"18,944,489","position":0,"isSigned":false,"method":{"args":{"now":"1,690,298,022,001"},"method":"set","section":"timestamp"}}
{"network":0,"extrinsicId":"16555432-0","blockNumber":"16,555,432","position":0,"isSigned":false,"method":{"args":{"now":"1,690,298,028,001"},"method":"set","section":"timestamp"}}
{"network":1,"extrinsicId":"18944490-0","blockNumber":"18,944,490","position":0,"isSigned":false,"method":{"args":{"now":"1,690,298,028,000"},"method":"set","section":"timestamp"}}
{"network":0,"extrinsicId":"16555433-0","blockNumber":"16,555,433","position":0,"isSigned":false,"method":{"args":{"now":"1,690,298,034,000"},"method":"set","section":"timestamp"}}
{"network":1,"extrinsicId":"18944491-0","blockNumber":"18,944,491","position":0,"isSigned":false,"method":{"args":{"now":"1,690,298,034,000"},"method":"set","section":"timestamp"}}
{"network":0,"extrinsicId":"16555434-0","blockNumber":"16,555,434","position":0,"isSigned":false,"method":{"args":{"now":"1,690,298,040,000"},"method":"set","section":"timestamp"}}
{"network":1,"extrinsicId":"18944492-0","blockNumber":"18,944,492","position":0,"isSigned":false,"method":{"args":{"now":"1,690,298,040,000"},"method":"set","section":"timestamp"}}
{"network":1,"extrinsicId":"18944493-0","blockNumber":"18,944,493","position":0,"isSigned":false,"method":{"args":{"now":"1,690,298,046,000"},"method":"set","section":"timestamp"}}
{"network":0,"extrinsicId":"16555435-0","blockNumber":"16,555,435","position":0,"isSigned":false,"method":{"args":{"now":"1,690,298,046,000"},"method":"set","section":"timestamp"}}
{"network":1,"extrinsicId":"18944494-0","blockNumber":"18,944,494","position":0,"isSigned":false,"method":{"args":{"now":"1,690,298,052,000"},"method":"set","section":"timestamp"}}
{"network":0,"extrinsicId":"16555436-0","blockNumber":"16,555,436","position":0,"isSigned":false,"method":{"args":{"now":"1,690,298,052,000"},"method":"set","section":"timestamp"}}
{"network":0,"extrinsicId":"16555437-0","blockNumber":"16,555,437","position":0,"isSigned":false,"method":{"args":{"now":"1,690,298,058,000"},"method":"set","section":"timestamp"}}
{"network":1,"extrinsicId":"18944495-0","blockNumber":"18,944,495","position":0,"isSigned":false,"method":{"args":{"now":"1,690,298,058,001"},"method":"set","section":"timestamp"}}
{"network":0,"extrinsicId":"16555438-0","blockNumber":"16,555,438","position":0,"isSigned":false,"method":{"args":{"now":"1,690,298,064,000"},"method":"set","section":"timestamp"}}
{"network":1,"extrinsicId":"18944496-0","blockNumber":"18,944,496","position":0,"isSigned":false,"method":{"args":{"now":"1,690,298,064,000"},"method":"set","section":"timestamp"}}
{"network":0,"extrinsicId":"16555439-0","blockNumber":"16,555,439","position":0,"isSigned":false,"method":{"args":{"now":"1,690,298,070,000"},"method":"set","section":"timestamp"}}
{"network":1,"extrinsicId":"18944497-0","blockNumber":"18,944,497","position":0,"isSigned":false,"method":{"args":{"now":"1,690,298,070,000"},"method":"set","section":"timestamp"}}

```

</details>




<details>

<summary>Integration tests 3 - light-client</summary>

- Demonstrates the usage of the Smoldot light client provider.

```bash

[smoldot] Smoldot v1.0.9
[smoldot] Chain initialization complete for polkadot. Name: "Polkadot". Genesis hash: 0x91b1…90c3. State root hash: 0x29d0d972cd27cbc511e9589fcb7a4506d5eb6a9e8df205f00472e5ab354a4e17. Network identity: 12D3KooWQXwHpNiUZCBZ65u2ztzX7i6EwpJMWRmspevcqPFitdZf. Chain specification or database starting at: 0x33f6…bd93 (#15903907)
[json-rpc-polkadot] The JSON-RPC client has just called a JSON-RPC function from the legacy JSON-RPC API (system_health). Legacy JSON-RPC functions have loose semantics and cannot be properly implemented on a light client. You are encouraged to use the new JSON-RPC API <https://github.com/paritytech/json-rpc-interface-spec/> instead. The legacy JSON-RPC API functions will be deprecated and removed in the distant future.
[sync-service-polkadot] GrandPa warp sync in progress. Block: #16541939 (0x0x57bd…e270). Peer attempt: 12D3KooWDhp18HYzJuVX2jLhtjQgAhT1XWGqah42StoUJpkLvh2o.
[sync-service-polkadot] GrandPa warp sync finished to #16541939 (0x57bd…e270)
[runtime-polkadot] Finalized block runtime ready. Spec version: 9430. Size of `:code`: 1.4 MiB.
💡 New block #16541944 has hash ⚡️ 0x7060af556370241531f58b8f9d3eda55c8d29bb8040ce27022958aba26e0d8d8
💡 New block #16541945 has hash ⚡️ 0xbe43669bb6ea592a5a920c0072d025accde2510dbbbf361656ae16e9ca50293e
💡 New block #16541946 has hash ⚡️ 0x5e29e1886b7a09c9ab9f75a5937d9369a2c4a074626a49d9777e29d5307684dc
[connections] Problem during discovery on polkadot: Response decoding error: Invalid multiaddress: FromVecError
💡 New block #16541947 has hash ⚡️ 0xedbf9db4960aebf638b4b3ae0dd4f47729187ab4e856709ac88729ddeb1f544a
💡 New block #16541948 has hash ⚡️ 0x80dbfb682b5bcd665a8cbfb14312d7e03f5e22c5d22575003766b6c49ffbff23
💡 New block #16541949 has hash ⚡️ 0x536cf5bab86ed6e324953fa2e2b2a86bcf37aa282f18b1e0e3d309012a1b35ee
💡 New block #16541950 has hash ⚡️ 0x99e636854292fd878a18cc45b837cfc204585fb0c625a35fedfaaed4cc34d889
💡 New block #16541951 has hash ⚡️ 0x77c359b801a80382c900dd46624bf90d1d89ea2784df6e28955300c9bc0e4d58
[smoldot] Smoldot v1.0.9. Current memory usage: 26.1 MiB. Average download: 118 kiB/s. Average upload: 812 B/s.
💡 New block #16541952 has hash ⚡️ 0x9f7b94c00fa108b0df3f3d94f3daec7b25bd2270a1acbb250bb9f4ea397b8ee0


```

</details>

<details>


<summary>Integration tests 4 - Running watch contracts on AZERO testnet for AZERO.ID contract to get its register events</summary>

```bash

> Contract address: 5HfQopC1yQSoG83auWgRLTxhWWFxiVQWT74LLXeXMLJDFBvP
> Network: wss://ws.test.azero.dev
> Scanning blocks from 34870110 to 34870140
> ============================================================
> 💬 Contract Message
> ============================================================
> Identifier: register
> Arguments: 
> - name: basecoin
> - yearsToRegister: 3
> - referrer: 
> - merkleProof: null
> - setAsPrimaryName: false
> JSON:
{"dispatchInfo":{"weight":{"refTime":10283889502,"proofSize":156509},"class":"Normal","paysFee":"Yes"},"events":[{"method":"Withdraw","section":"balances","index":"0x0508","data":{"who":"5ELouTaV9ag9NPkPmRfCSJ31NynTyjD6hJkbEE3uBq4Edi41","amount":"10,466,750,316"}},{"method":"Transfer","section":"balances","index":"0x0502","data":{"from":"5ELouTaV9ag9NPkPmRfCSJ31NynTyjD6hJkbEE3uBq4Edi41","to":"5HfQopC1yQSoG83auWgRLTxhWWFxiVQWT74LLXeXMLJDFBvP","amount":"36,000,000,000,000"}},{"method":"Called","section":"contracts","index":"0x1206","data":{"caller":"5HfQopC1yQSoG83auWgRLTxhWWFxiVQWT74LLXeXMLJDFBvP","contract":"5C7reDvF8hyLLHSpvXoJzJy6Rwe6HsqdvtyphFANqVVFeu6W"}},{"method":"Called","section":"contracts","index":"0x1206","data":{"caller":"5HfQopC1yQSoG83auWgRLTxhWWFxiVQWT74LLXeXMLJDFBvP","contract":"5CZsw7XCVHN6n8U5JCVdMWjmHB3UPqCYmjxVAfw11NmCUkRE"}},{"method":"ContractEmitted","section":"contracts","index":"0x1203","data":{"contract":"5HfQopC1yQSoG83auWgRLTxhWWFxiVQWT74LLXeXMLJDFBvP","data":"0x002062617365636f696e64c0c0ccbb3552bdd05197828af07063c7862318cfbf2e8ca65252ed55ea7958900a600789010000908e730e9f010000"}},{"method":"ContractEmitted","section":"contracts","index":"0x1203","data":{"contract":"5HfQopC1yQSoG83auWgRLTxhWWFxiVQWT74LLXeXMLJDFBvP","data":"0x07000164c0c0ccbb3552bdd05197828af07063c7862318cfbf2e8ca65252ed55ea7958052062617365636f696e"}},{"method":"ContractEmitted","section":"contracts","index":"0x1203","data":{"contract":"5HfQopC1yQSoG83auWgRLTxhWWFxiVQWT74LLXeXMLJDFBvP","data":"0x012062617365636f696e64c0c0ccbb3552bdd05197828af07063c7862318cfbf2e8ca65252ed55ea7958010000004036e7bd200000000000000000000000000000000000000000000000000000"}},{"method":"Called","section":"contracts","index":"0x1206","data":{"caller":"5ELouTaV9ag9NPkPmRfCSJ31NynTyjD6hJkbEE3uBq4Edi41","contract":"5HfQopC1yQSoG83auWgRLTxhWWFxiVQWT74LLXeXMLJDFBvP"}},{"method":"Transfer","section":"balances","index":"0x0502","data":{"from":"5ELouTaV9ag9NPkPmRfCSJ31NynTyjD6hJkbEE3uBq4Edi41","to":"5HfQopC1yQSoG83auWgRLTxhWWFxiVQWT74LLXeXMLJDFBvP","amount":"17,720,000,000"}},{"method":"Reserved","section":"balances","index":"0x0504","data":{"who":"5HfQopC1yQSoG83auWgRLTxhWWFxiVQWT74LLXeXMLJDFBvP","amount":"17,720,000,000"}},{"method":"Deposit","section":"balances","index":"0x0507","data":{"who":"5ELouTaV9ag9NPkPmRfCSJ31NynTyjD6hJkbEE3uBq4Edi41","amount":"182,860,637"}},{"method":"Deposit","section":"balances","index":"0x0507","data":{"who":"5EYCAe5fg5WiYGVNH6QpCFnu55Hzv9MwtjFHdQCx8EaSQTm2","amount":"10,283,889,679"}},{"method":"Deposit","section":"treasury","index":"0x0d06","data":{"value":"10,283,889,679"}},{"method":"TransactionFeePaid","section":"transactionPayment","index":"0x0600","data":{"who":"5ELouTaV9ag9NPkPmRfCSJ31NynTyjD6hJkbEE3uBq4Edi41","actualFee":"10,283,889,679","tip":"0"}},{"method":"ExtrinsicSuccess","section":"system","index":"0x0000","data":{"dispatchInfo":{"weight":{"refTime":"10,283,889,502","proofSize":"156,509"},"class":"Normal","paysFee":"Yes"}}}],"extrinsic":{"extrinsicId":"34870110-1","blockNumber":"34,870,110","position":1,"isSigned":true,"method":{"args":{"dest":{"Id":"5HfQopC1yQSoG83auWgRLTxhWWFxiVQWT74LLXeXMLJDFBvP"},"value":"36,000,000,000,000","gas_limit":{"refTime":"9,665,133,139","proofSize":"254,504"},"storage_deposit_limit":null,"data":"0x229b553f2062617365636f696e0301000000"},"method":"call","section":"contracts"},"era":{"MortalEra":{"period":"512","phase":"341"}},"nonce":"4","signature":"0x76a716ece454c270e11d43d421464afef285ebe8de5215c46c7b9dd65f853a5f69263b1a3f0bc00a568231e383bcc32788be539981429244589e8d2f8f03c88b","signer":{"Id":"5ELouTaV9ag9NPkPmRfCSJ31NynTyjD6hJkbEE3uBq4Edi41"},"tip":"0"},"args":["basecoin","0x03","",null,false],"message":{"isDefault":false,"isMutating":true,"isPayable":true,"returnType":{"info":13,"lookupIndex":16,"type":"Result<Result<Null, AznsRegistryError>, InkPrimitivesLangError>","docs":[],"namespace":"Result","sub":[{"name":"Ok","info":13,"lookupIndex":17,"type":"Result<Null, AznsRegistryError>","docs":[],"namespace":"Result","sub":[{"name":"Ok","info":8,"lookupIndex":6,"type":"Null","docs":[],"namespace":""},{"name":"Error","docs":[],"info":15,"lookupIndex":18,"lookupName":"AznsRegistryError","type":"Lookup18"}]},{"name":"Error","docs":[],"info":15,"lookupIndex":12,"lookupName":"InkPrimitivesLangError","type":"Lookup12"}]},"args":[{"name":"name","type":{"displayName":"String","info":10,"lookupIndex":3,"type":"Text","docs":[],"namespace":""}},{"name":"yearsToRegister","type":{"info":10,"lookupIndex":2,"type":"u8","docs":[],"namespace":""}},{"name":"referrer","type":{"info":9,"lookupIndex":13,"type":"Option<Text>","docs":[],"namespace":"Option","sub":{"info":10,"lookupIndex":3,"type":"Text","docs":[],"namespace":""}}},{"name":"merkleProof","type":{"info":9,"lookupIndex":14,"type":"Option<Vec<[u8;32]>>","docs":[],"namespace":"Option","sub":{"info":19,"lookupIndex":15,"type":"Vec<[u8;32]>","docs":[],"namespace":"","sub":{"info":20,"lookupIndex":1,"type":"[u8;32]","docs":[],"namespace":"","length":32,"sub":{"info":10,"lookupIndex":2,"type":"u8","docs":[],"namespace":""}}}}},{"name":"setAsPrimaryName","type":{"info":10,"lookupIndex":20,"type":"bool","docs":[],"namespace":""}}],"docs":[" Register specific name with caller as owner.",""," NOTE: Whitelisted addresses can buy one name during the whitelist phase by submitting its proof"],"identifier":"register","index":1,"method":"register","path":["register"],"selector":"0x229b553f"}}
> ============================================================
> 💬 Contract Message
> ============================================================
> Identifier: register
> Arguments: 
> - name: scroll
> - yearsToRegister: 3
> - referrer: 
> - merkleProof: null
> - setAsPrimaryName: false
> JSON:
{"dispatchInfo":{"weight":{"refTime":10283421827,"proofSize":156509},"class":"Normal","paysFee":"Yes"},"events":[{"method":"Withdraw","section":"balances","index":"0x0508","data":{"who":"5ELouTaV9ag9NPkPmRfCSJ31NynTyjD6hJkbEE3uBq4Edi41","amount":"10,466,282,639"}},{"method":"Transfer","section":"balances","index":"0x0502","data":{"from":"5ELouTaV9ag9NPkPmRfCSJ31NynTyjD6hJkbEE3uBq4Edi41","to":"5HfQopC1yQSoG83auWgRLTxhWWFxiVQWT74LLXeXMLJDFBvP","amount":"36,000,000,000,000"}},{"method":"Called","section":"contracts","index":"0x1206","data":{"caller":"5HfQopC1yQSoG83auWgRLTxhWWFxiVQWT74LLXeXMLJDFBvP","contract":"5C7reDvF8hyLLHSpvXoJzJy6Rwe6HsqdvtyphFANqVVFeu6W"}},{"method":"Called","section":"contracts","index":"0x1206","data":{"caller":"5HfQopC1yQSoG83auWgRLTxhWWFxiVQWT74LLXeXMLJDFBvP","contract":"5CZsw7XCVHN6n8U5JCVdMWjmHB3UPqCYmjxVAfw11NmCUkRE"}},{"method":"ContractEmitted","section":"contracts","index":"0x1203","data":{"contract":"5HfQopC1yQSoG83auWgRLTxhWWFxiVQWT74LLXeXMLJDFBvP","data":"0x00187363726f6c6c64c0c0ccbb3552bdd05197828af07063c7862318cfbf2e8ca65252ed55ea7958386c60078901000038f0730e9f010000"}},{"method":"ContractEmitted","section":"contracts","index":"0x1203","data":{"contract":"5HfQopC1yQSoG83auWgRLTxhWWFxiVQWT74LLXeXMLJDFBvP","data":"0x07000164c0c0ccbb3552bdd05197828af07063c7862318cfbf2e8ca65252ed55ea795805187363726f6c6c"}},{"method":"ContractEmitted","section":"contracts","index":"0x1203","data":{"contract":"5HfQopC1yQSoG83auWgRLTxhWWFxiVQWT74LLXeXMLJDFBvP","data":"0x01187363726f6c6c64c0c0ccbb3552bdd05197828af07063c7862318cfbf2e8ca65252ed55ea7958010000004036e7bd200000000000000000000000000000000000000000000000000000"}},{"method":"Called","section":"contracts","index":"0x1206","data":{"caller":"5ELouTaV9ag9NPkPmRfCSJ31NynTyjD6hJkbEE3uBq4Edi41","contract":"5HfQopC1yQSoG83auWgRLTxhWWFxiVQWT74LLXeXMLJDFBvP"}},{"method":"Transfer","section":"balances","index":"0x0502","data":{"from":"5ELouTaV9ag9NPkPmRfCSJ31NynTyjD6hJkbEE3uBq4Edi41","to":"5HfQopC1yQSoG83auWgRLTxhWWFxiVQWT74LLXeXMLJDFBvP","amount":"17,480,000,000"}},{"method":"Reserved","section":"balances","index":"0x0504","data":{"who":"5HfQopC1yQSoG83auWgRLTxhWWFxiVQWT74LLXeXMLJDFBvP","amount":"17,480,000,000"}},{"method":"Deposit","section":"balances","index":"0x0507","data":{"who":"5ELouTaV9ag9NPkPmRfCSJ31NynTyjD6hJkbEE3uBq4Edi41","amount":"182,860,637"}},{"method":"Deposit","section":"balances","index":"0x0507","data":{"who":"5EYCAe5fg5WiYGVNH6QpCFnu55Hzv9MwtjFHdQCx8EaSQTm2","amount":"10,283,422,002"}},{"method":"Deposit","section":"treasury","index":"0x0d06","data":{"value":"10,283,422,002"}},{"method":"TransactionFeePaid","section":"transactionPayment","index":"0x0600","data":{"who":"5ELouTaV9ag9NPkPmRfCSJ31NynTyjD6hJkbEE3uBq4Edi41","actualFee":"10,283,422,002","tip":"0"}},{"method":"ExtrinsicSuccess","section":"system","index":"0x0000","data":{"dispatchInfo":{"weight":{"refTime":"10,283,421,827","proofSize":"156,509"},"class":"Normal","paysFee":"Yes"}}}],"extrinsic":{"extrinsicId":"34870135-1","blockNumber":"34,870,135","position":1,"isSigned":true,"method":{"args":{"dest":{"Id":"5HfQopC1yQSoG83auWgRLTxhWWFxiVQWT74LLXeXMLJDFBvP"},"value":"36,000,000,000,000","gas_limit":{"refTime":"9,664,665,464","proofSize":"254,504"},"storage_deposit_limit":null,"data":"0x229b553f187363726f6c6c0301000000"},"method":"call","section":"contracts"},"era":{"MortalEra":{"period":"512","phase":"366"}},"nonce":"5","signature":"0x6c5d268d5819516864189daa080cce2eae218a412cb92e8e7436df7184870672ea19d4520cc0da4f88d50bbf17fb27761285d41a12507bcbf4cec19acc843c85","signer":{"Id":"5ELouTaV9ag9NPkPmRfCSJ31NynTyjD6hJkbEE3uBq4Edi41"},"tip":"0"},"args":["scroll","0x03","",null,false],"message":{"isDefault":false,"isMutating":true,"isPayable":true,"returnType":{"info":13,"lookupIndex":16,"type":"Result<Result<Null, AznsRegistryError>, InkPrimitivesLangError>","docs":[],"namespace":"Result","sub":[{"name":"Ok","info":13,"lookupIndex":17,"type":"Result<Null, AznsRegistryError>","docs":[],"namespace":"Result","sub":[{"name":"Ok","info":8,"lookupIndex":6,"type":"Null","docs":[],"namespace":""},{"name":"Error","docs":[],"info":15,"lookupIndex":18,"lookupName":"AznsRegistryError","type":"Lookup18"}]},{"name":"Error","docs":[],"info":15,"lookupIndex":12,"lookupName":"InkPrimitivesLangError","type":"Lookup12"}]},"args":[{"name":"name","type":{"displayName":"String","info":10,"lookupIndex":3,"type":"Text","docs":[],"namespace":""}},{"name":"yearsToRegister","type":{"info":10,"lookupIndex":2,"type":"u8","docs":[],"namespace":""}},{"name":"referrer","type":{"info":9,"lookupIndex":13,"type":"Option<Text>","docs":[],"namespace":"Option","sub":{"info":10,"lookupIndex":3,"type":"Text","docs":[],"namespace":""}}},{"name":"merkleProof","type":{"info":9,"lookupIndex":14,"type":"Option<Vec<[u8;32]>>","docs":[],"namespace":"Option","sub":{"info":19,"lookupIndex":15,"type":"Vec<[u8;32]>","docs":[],"namespace":"","sub":{"info":20,"lookupIndex":1,"type":"[u8;32]","docs":[],"namespace":"","length":32,"sub":{"info":10,"lookupIndex":2,"type":"u8","docs":[],"namespace":""}}}}},{"name":"setAsPrimaryName","type":{"info":10,"lookupIndex":20,"type":"bool","docs":[],"namespace":""}}],"docs":[" Register specific name with caller as owner.",""," NOTE: Whitelisted addresses can buy one name during the whitelist phase by submitting its proof"],"identifier":"register","index":1,"method":"register","path":["register"],"selector":"0x229b553f"}}
> ============================================================
> 🙌 Scan complete
> ============================================================

```

</details>

<details>

<summary>Integration tests 5 - Running watch contracts on Rococo testnet for Link contract to get specific signer events</summary>

```bash

> Contract address: 5GdHQQkRHvEEE4sDkcLkxCCumSkw2SFBJSLKzbMTNARLTXz3
> Network: wss://rococo-contracts-rpc.polkadot.io
> Scanning blocks from 2686243 to 2686263
> ============================================================
> 💬 Contract Message
> ============================================================
> Identifier: shorten
> Arguments: 
> - slug: 
>   - deduplicateOrNew: XAo89
> - url: https://foo.com
> JSON:
{"dispatchInfo":{"weight":{"refTime":2375779907,"proofSize":9360},"class":"Normal","paysFee":"Yes"},"events":[{"method":"Withdraw","section":"balances","index":"0x0a08","data":{"who":"5HprbfKUFdN4qfweVbgRtqDPHfNtoi8NoWPE45e5bD5AEKiR","amount":"9,125,486"}},{"method":"ContractEmitted","section":"contracts","index":"0x2803","data":{"contract":"5GdHQQkRHvEEE4sDkcLkxCCumSkw2SFBJSLKzbMTNARLTXz3","data":"0x001458416f38393c68747470733a2f2f666f6f2e636f6d"}},{"method":"Called","section":"contracts","index":"0x2806","data":{"caller":"5HprbfKUFdN4qfweVbgRtqDPHfNtoi8NoWPE45e5bD5AEKiR","contract":"5GdHQQkRHvEEE4sDkcLkxCCumSkw2SFBJSLKzbMTNARLTXz3"}},{"method":"Transfer","section":"balances","index":"0x0a02","data":{"from":"5HprbfKUFdN4qfweVbgRtqDPHfNtoi8NoWPE45e5bD5AEKiR","to":"5GdHQQkRHvEEE4sDkcLkxCCumSkw2SFBJSLKzbMTNARLTXz3","amount":"1,334,066,646"}},{"method":"Reserved","section":"balances","index":"0x0a04","data":{"who":"5GdHQQkRHvEEE4sDkcLkxCCumSkw2SFBJSLKzbMTNARLTXz3","amount":"1,334,066,646"}},{"method":"Deposit","section":"balances","index":"0x0a07","data":{"who":"5HprbfKUFdN4qfweVbgRtqDPHfNtoi8NoWPE45e5bD5AEKiR","amount":"1,740,008"}},{"method":"Deposit","section":"balances","index":"0x0a07","data":{"who":"5EYCAe5cKPAoFh2HnQQvpKqRYZGqBpaA87u4Zzw89qPE58is","amount":"7,385,478"}},{"method":"TransactionFeePaid","section":"transactionPayment","index":"0x0b00","data":{"who":"5HprbfKUFdN4qfweVbgRtqDPHfNtoi8NoWPE45e5bD5AEKiR","actualFee":"7,385,478","tip":"0"}},{"method":"ExtrinsicSuccess","section":"system","index":"0x0000","data":{"dispatchInfo":{"weight":{"refTime":"2,375,779,907","proofSize":"9,360"},"class":"Normal","paysFee":"Yes"}}}],"extrinsic":{"extrinsicId":"2686248-2","blockNumber":"2,686,248","position":2,"isSigned":true,"method":{"args":{"dest":{"Id":"5GdHQQkRHvEEE4sDkcLkxCCumSkw2SFBJSLKzbMTNARLTXz3"},"value":"0","gas_limit":{"refTime":"6,029,312,000","proofSize":"131,072"},"storage_deposit_limit":null,"data":"0x92ccc180011458416f38393c68747470733a2f2f666f6f2e636f6d"},"method":"call","section":"contracts"},"era":{"MortalEra":{"period":"32","phase":"5"}},"nonce":"1,670","signature":"0x8c4ec8baaff377b53b460cff66836cc1742d7fe1dcfc5c0ad70d0ff448a7856b93c0db0ecfca0d9f0d22c17639dc47aaff10d2ab527335d615d52f573a788985","signer":{"Id":"5HprbfKUFdN4qfweVbgRtqDPHfNtoi8NoWPE45e5bD5AEKiR"},"tip":"0"},"args":[{"deduplicateOrNew":"0x58416f3839"},"0x68747470733a2f2f666f6f2e636f6d"],"message":{"isDefault":false,"isMutating":true,"isPayable":false,"returnType":{"info":13,"lookupIndex":7,"type":"Result<LinkShorteningOutcome, LinkError>","docs":[],"namespace":"Result","sub":[{"name":"Ok","docs":[],"info":15,"lookupIndex":8,"lookupName":"LinkShorteningOutcome","type":"Lookup8"},{"name":"Error","docs":[],"info":15,"lookupIndex":9,"lookupName":"LinkError","type":"Lookup9"}]},"args":[{"name":"slug","type":{"displayName":"SlugCreationMode","info":4,"lookupIndex":6,"lookupName":"LinkSlugCreationMode","type":"{\"_enum\":{\"New\":\"Bytes\",\"DeduplicateOrNew\":\"Bytes\",\"Deduplicate\":\"Null\"}}","docs":[],"namespace":"link::link::SlugCreationMode","sub":[{"info":10,"lookupIndex":1,"type":"Bytes","docs":[],"namespace":"","typeName":"Slug","index":0,"name":"New"},{"info":10,"lookupIndex":1,"type":"Bytes","docs":[],"namespace":"","typeName":"Slug","index":1,"name":"DeduplicateOrNew"},{"info":8,"type":"Null","index":2,"name":"Deduplicate"}]}},{"name":"url","type":{"displayName":"Url","info":10,"lookupIndex":1,"type":"Bytes","docs":[],"namespace":""}}],"docs":[" Create a a new mapping or use an existing one."],"identifier":"shorten","index":0,"method":"shorten","path":["shorten"],"selector":"0x92ccc180"}}
> ============================================================
> 💬 Contract Message
> ============================================================
> Identifier: shorten
> Arguments: 
> - slug: 
>   - deduplicateOrNew: 4YhuF
> - url: https://erp.pre
> JSON:
{"dispatchInfo":{"weight":{"refTime":2375779907,"proofSize":9360},"class":"Normal","paysFee":"Yes"},"events":[{"method":"Withdraw","section":"balances","index":"0x0a08","data":{"who":"5HprbfKUFdN4qfweVbgRtqDPHfNtoi8NoWPE45e5bD5AEKiR","amount":"9,125,486"}},{"method":"ContractEmitted","section":"contracts","index":"0x2803","data":{"contract":"5GdHQQkRHvEEE4sDkcLkxCCumSkw2SFBJSLKzbMTNARLTXz3","data":"0x001434596875463c68747470733a2f2f6572702e707265"}},{"method":"Called","section":"contracts","index":"0x2806","data":{"caller":"5HprbfKUFdN4qfweVbgRtqDPHfNtoi8NoWPE45e5bD5AEKiR","contract":"5GdHQQkRHvEEE4sDkcLkxCCumSkw2SFBJSLKzbMTNARLTXz3"}},{"method":"Transfer","section":"balances","index":"0x0a02","data":{"from":"5HprbfKUFdN4qfweVbgRtqDPHfNtoi8NoWPE45e5bD5AEKiR","to":"5GdHQQkRHvEEE4sDkcLkxCCumSkw2SFBJSLKzbMTNARLTXz3","amount":"1,334,066,646"}},{"method":"Reserved","section":"balances","index":"0x0a04","data":{"who":"5GdHQQkRHvEEE4sDkcLkxCCumSkw2SFBJSLKzbMTNARLTXz3","amount":"1,334,066,646"}},{"method":"Deposit","section":"balances","index":"0x0a07","data":{"who":"5HprbfKUFdN4qfweVbgRtqDPHfNtoi8NoWPE45e5bD5AEKiR","amount":"1,740,008"}},{"method":"Deposit","section":"balances","index":"0x0a07","data":{"who":"5EYCAe5cKPAoFh2HnQQvpKqRYZGqBpaA87u4Zzw89qPE58is","amount":"7,385,478"}},{"method":"TransactionFeePaid","section":"transactionPayment","index":"0x0b00","data":{"who":"5HprbfKUFdN4qfweVbgRtqDPHfNtoi8NoWPE45e5bD5AEKiR","actualFee":"7,385,478","tip":"0"}},{"method":"ExtrinsicSuccess","section":"system","index":"0x0000","data":{"dispatchInfo":{"weight":{"refTime":"2,375,779,907","proofSize":"9,360"},"class":"Normal","paysFee":"Yes"}}}],"extrinsic":{"extrinsicId":"2686255-2","blockNumber":"2,686,255","position":2,"isSigned":true,"method":{"args":{"dest":{"Id":"5GdHQQkRHvEEE4sDkcLkxCCumSkw2SFBJSLKzbMTNARLTXz3"},"value":"0","gas_limit":{"refTime":"6,029,312,000","proofSize":"131,072"},"storage_deposit_limit":null,"data":"0x92ccc180011434596875463c68747470733a2f2f6572702e707265"},"method":"call","section":"contracts"},"era":{"MortalEra":{"period":"32","phase":"13"}},"nonce":"1,672","signature":"0x1e6c449b380275a737a3cd36d18b5a2cacb1516d83c4c53a5ee05b002dfaa757cda701853f3b3fb71fe588236adfa9d74e6b7e0e9eddaa81c6b809e0ba85cb80","signer":{"Id":"5HprbfKUFdN4qfweVbgRtqDPHfNtoi8NoWPE45e5bD5AEKiR"},"tip":"0"},"args":[{"deduplicateOrNew":"0x3459687546"},"0x68747470733a2f2f6572702e707265"],"message":{"isDefault":false,"isMutating":true,"isPayable":false,"returnType":{"info":13,"lookupIndex":7,"type":"Result<LinkShorteningOutcome, LinkError>","docs":[],"namespace":"Result","sub":[{"name":"Ok","docs":[],"info":15,"lookupIndex":8,"lookupName":"LinkShorteningOutcome","type":"Lookup8"},{"name":"Error","docs":[],"info":15,"lookupIndex":9,"lookupName":"LinkError","type":"Lookup9"}]},"args":[{"name":"slug","type":{"displayName":"SlugCreationMode","info":4,"lookupIndex":6,"lookupName":"LinkSlugCreationMode","type":"{\"_enum\":{\"New\":\"Bytes\",\"DeduplicateOrNew\":\"Bytes\",\"Deduplicate\":\"Null\"}}","docs":[],"namespace":"link::link::SlugCreationMode","sub":[{"info":10,"lookupIndex":1,"type":"Bytes","docs":[],"namespace":"","typeName":"Slug","index":0,"name":"New"},{"info":10,"lookupIndex":1,"type":"Bytes","docs":[],"namespace":"","typeName":"Slug","index":1,"name":"DeduplicateOrNew"},{"info":8,"type":"Null","index":2,"name":"Deduplicate"}]}},{"name":"url","type":{"displayName":"Url","info":10,"lookupIndex":1,"type":"Bytes","docs":[],"namespace":""}}],"docs":[" Create a a new mapping or use an existing one."],"identifier":"shorten","index":0,"method":"shorten","path":["shorten"],"selector":"0x92ccc180"}}
> ============================================================
> 💬 Contract Message
> ============================================================
> Identifier: shorten
> Arguments: 
> - slug: 
>   - deduplicateOrNew: PrKJ3
> - url: https://blam.com
> JSON:
{"dispatchInfo":{"weight":{"refTime":2378376020,"proofSize":9360},"class":"Normal","paysFee":"Yes"},"events":[{"method":"Withdraw","section":"balances","index":"0x0a08","data":{"who":"5HprbfKUFdN4qfweVbgRtqDPHfNtoi8NoWPE45e5bD5AEKiR","amount":"9,158,819"}},{"method":"ContractEmitted","section":"contracts","index":"0x2803","data":{"contract":"5GdHQQkRHvEEE4sDkcLkxCCumSkw2SFBJSLKzbMTNARLTXz3","data":"0x001450724b4a334068747470733a2f2f626c616d2e636f6d"}},{"method":"Called","section":"contracts","index":"0x2806","data":{"caller":"5HprbfKUFdN4qfweVbgRtqDPHfNtoi8NoWPE45e5bD5AEKiR","contract":"5GdHQQkRHvEEE4sDkcLkxCCumSkw2SFBJSLKzbMTNARLTXz3"}},{"method":"Transfer","section":"balances","index":"0x0a02","data":{"from":"5HprbfKUFdN4qfweVbgRtqDPHfNtoi8NoWPE45e5bD5AEKiR","to":"5GdHQQkRHvEEE4sDkcLkxCCumSkw2SFBJSLKzbMTNARLTXz3","amount":"1,334,099,979"}},{"method":"Reserved","section":"balances","index":"0x0a04","data":{"who":"5GdHQQkRHvEEE4sDkcLkxCCumSkw2SFBJSLKzbMTNARLTXz3","amount":"1,334,099,979"}},{"method":"Deposit","section":"balances","index":"0x0a07","data":{"who":"5HprbfKUFdN4qfweVbgRtqDPHfNtoi8NoWPE45e5bD5AEKiR","amount":"1,739,005"}},{"method":"Deposit","section":"balances","index":"0x0a07","data":{"who":"5EYCAe5cKPAoFh2HnQQvpKqRYZGqBpaA87u4Zzw89qPE58is","amount":"7,419,814"}},{"method":"TransactionFeePaid","section":"transactionPayment","index":"0x0b00","data":{"who":"5HprbfKUFdN4qfweVbgRtqDPHfNtoi8NoWPE45e5bD5AEKiR","actualFee":"7,419,814","tip":"0"}},{"method":"ExtrinsicSuccess","section":"system","index":"0x0000","data":{"dispatchInfo":{"weight":{"refTime":"2,378,376,020","proofSize":"9,360"},"class":"Normal","paysFee":"Yes"}}}],"extrinsic":{"extrinsicId":"2686244-2","blockNumber":"2,686,244","position":2,"isSigned":true,"method":{"args":{"dest":{"Id":"5GdHQQkRHvEEE4sDkcLkxCCumSkw2SFBJSLKzbMTNARLTXz3"},"value":"0","gas_limit":{"refTime":"6,029,312,000","proofSize":"131,072"},"storage_deposit_limit":null,"data":"0x92ccc180011450724b4a334068747470733a2f2f626c616d2e636f6d"},"method":"call","section":"contracts"},"era":{"MortalEra":{"period":"32","phase":"0"}},"nonce":"1,669","signature":"0x3466867c067b8c1e249776b08e323508b700e16ea83e52bed8cad80ab228b357b6c44a297e4909c11ab6c34daa0037a9a82f2340b77200b78c3017f61a55e480","signer":{"Id":"5HprbfKUFdN4qfweVbgRtqDPHfNtoi8NoWPE45e5bD5AEKiR"},"tip":"0"},"args":[{"deduplicateOrNew":"0x50724b4a33"},"0x68747470733a2f2f626c616d2e636f6d"],"message":{"isDefault":false,"isMutating":true,"isPayable":false,"returnType":{"info":13,"lookupIndex":7,"type":"Result<LinkShorteningOutcome, LinkError>","docs":[],"namespace":"Result","sub":[{"name":"Ok","docs":[],"info":15,"lookupIndex":8,"lookupName":"LinkShorteningOutcome","type":"Lookup8"},{"name":"Error","docs":[],"info":15,"lookupIndex":9,"lookupName":"LinkError","type":"Lookup9"}]},"args":[{"name":"slug","type":{"displayName":"SlugCreationMode","info":4,"lookupIndex":6,"lookupName":"LinkSlugCreationMode","type":"{\"_enum\":{\"New\":\"Bytes\",\"DeduplicateOrNew\":\"Bytes\",\"Deduplicate\":\"Null\"}}","docs":[],"namespace":"link::link::SlugCreationMode","sub":[{"info":10,"lookupIndex":1,"type":"Bytes","docs":[],"namespace":"","typeName":"Slug","index":0,"name":"New"},{"info":10,"lookupIndex":1,"type":"Bytes","docs":[],"namespace":"","typeName":"Slug","index":1,"name":"DeduplicateOrNew"},{"info":8,"type":"Null","index":2,"name":"Deduplicate"}]}},{"name":"url","type":{"displayName":"Url","info":10,"lookupIndex":1,"type":"Bytes","docs":[],"namespace":""}}],"docs":[" Create a a new mapping or use an existing one."],"identifier":"shorten","index":0,"method":"shorten","path":["shorten"],"selector":"0x92ccc180"}}
> ============================================================
> 💬 Contract Message
> ============================================================
> Identifier: shorten
> Arguments: 
> - slug: 
>   - deduplicateOrNew: BDQMJ
> - url: https://foo.bax
> JSON:
{"dispatchInfo":{"weight":{"refTime":2375779907,"proofSize":9360},"class":"Normal","paysFee":"Yes"},"events":[{"method":"Withdraw","section":"balances","index":"0x0a08","data":{"who":"5HprbfKUFdN4qfweVbgRtqDPHfNtoi8NoWPE45e5bD5AEKiR","amount":"9,125,486"}},{"method":"ContractEmitted","section":"contracts","index":"0x2803","data":{"contract":"5GdHQQkRHvEEE4sDkcLkxCCumSkw2SFBJSLKzbMTNARLTXz3","data":"0x00144244514d4a3c68747470733a2f2f666f6f2e626178"}},{"method":"Called","section":"contracts","index":"0x2806","data":{"caller":"5HprbfKUFdN4qfweVbgRtqDPHfNtoi8NoWPE45e5bD5AEKiR","contract":"5GdHQQkRHvEEE4sDkcLkxCCumSkw2SFBJSLKzbMTNARLTXz3"}},{"method":"Transfer","section":"balances","index":"0x0a02","data":{"from":"5HprbfKUFdN4qfweVbgRtqDPHfNtoi8NoWPE45e5bD5AEKiR","to":"5GdHQQkRHvEEE4sDkcLkxCCumSkw2SFBJSLKzbMTNARLTXz3","amount":"1,334,066,646"}},{"method":"Reserved","section":"balances","index":"0x0a04","data":{"who":"5GdHQQkRHvEEE4sDkcLkxCCumSkw2SFBJSLKzbMTNARLTXz3","amount":"1,334,066,646"}},{"method":"Deposit","section":"balances","index":"0x0a07","data":{"who":"5HprbfKUFdN4qfweVbgRtqDPHfNtoi8NoWPE45e5bD5AEKiR","amount":"1,740,008"}},{"method":"Deposit","section":"balances","index":"0x0a07","data":{"who":"5EYCAe5cKPAoFh2HnQQvpKqRYZGqBpaA87u4Zzw89qPE58is","amount":"7,385,478"}},{"method":"TransactionFeePaid","section":"transactionPayment","index":"0x0b00","data":{"who":"5HprbfKUFdN4qfweVbgRtqDPHfNtoi8NoWPE45e5bD5AEKiR","actualFee":"7,385,478","tip":"0"}},{"method":"ExtrinsicSuccess","section":"system","index":"0x0000","data":{"dispatchInfo":{"weight":{"refTime":"2,375,779,907","proofSize":"9,360"},"class":"Normal","paysFee":"Yes"}}}],"extrinsic":{"extrinsicId":"2686252-2","blockNumber":"2,686,252","position":2,"isSigned":true,"method":{"args":{"dest":{"Id":"5GdHQQkRHvEEE4sDkcLkxCCumSkw2SFBJSLKzbMTNARLTXz3"},"value":"0","gas_limit":{"refTime":"6,029,312,000","proofSize":"131,072"},"storage_deposit_limit":null,"data":"0x92ccc18001144244514d4a3c68747470733a2f2f666f6f2e626178"},"method":"call","section":"contracts"},"era":{"MortalEra":{"period":"32","phase":"9"}},"nonce":"1,671","signature":"0xf2eb542bbd2370d189de53c40b9cef3694f176f0c3ff1eae21eccd71620b9d76951051d289ccfae50585ec4c3d6c50075019edaa53e3ce14dc8b4dcd59589082","signer":{"Id":"5HprbfKUFdN4qfweVbgRtqDPHfNtoi8NoWPE45e5bD5AEKiR"},"tip":"0"},"args":[{"deduplicateOrNew":"0x4244514d4a"},"0x68747470733a2f2f666f6f2e626178"],"message":{"isDefault":false,"isMutating":true,"isPayable":false,"returnType":{"info":13,"lookupIndex":7,"type":"Result<LinkShorteningOutcome, LinkError>","docs":[],"namespace":"Result","sub":[{"name":"Ok","docs":[],"info":15,"lookupIndex":8,"lookupName":"LinkShorteningOutcome","type":"Lookup8"},{"name":"Error","docs":[],"info":15,"lookupIndex":9,"lookupName":"LinkError","type":"Lookup9"}]},"args":[{"name":"slug","type":{"displayName":"SlugCreationMode","info":4,"lookupIndex":6,"lookupName":"LinkSlugCreationMode","type":"{\"_enum\":{\"New\":\"Bytes\",\"DeduplicateOrNew\":\"Bytes\",\"Deduplicate\":\"Null\"}}","docs":[],"namespace":"link::link::SlugCreationMode","sub":[{"info":10,"lookupIndex":1,"type":"Bytes","docs":[],"namespace":"","typeName":"Slug","index":0,"name":"New"},{"info":10,"lookupIndex":1,"type":"Bytes","docs":[],"namespace":"","typeName":"Slug","index":1,"name":"DeduplicateOrNew"},{"info":8,"type":"Null","index":2,"name":"Deduplicate"}]}},{"name":"url","type":{"displayName":"Url","info":10,"lookupIndex":1,"type":"Bytes","docs":[],"namespace":""}}],"docs":[" Create a a new mapping or use an existing one."],"identifier":"shorten","index":0,"method":"shorten","path":["shorten"],"selector":"0x92ccc180"}}
> ============================================================
> 💬 Contract Message
> ============================================================
> Identifier: shorten
> Arguments: 
> - slug: 
>   - deduplicateOrNew: M7ikd
> - url: https://foom.boom
> JSON:
{"dispatchInfo":{"weight":{"refTime":2380972133,"proofSize":9360},"class":"Normal","paysFee":"Yes"},"events":[{"method":"Withdraw","section":"balances","index":"0x0a08","data":{"who":"5HprbfKUFdN4qfweVbgRtqDPHfNtoi8NoWPE45e5bD5AEKiR","amount":"9,192,152"}},{"method":"ContractEmitted","section":"contracts","index":"0x2803","data":{"contract":"5GdHQQkRHvEEE4sDkcLkxCCumSkw2SFBJSLKzbMTNARLTXz3","data":"0x00144d37696b644468747470733a2f2f666f6f6d2e626f6f6d"}},{"method":"Called","section":"contracts","index":"0x2806","data":{"caller":"5HprbfKUFdN4qfweVbgRtqDPHfNtoi8NoWPE45e5bD5AEKiR","contract":"5GdHQQkRHvEEE4sDkcLkxCCumSkw2SFBJSLKzbMTNARLTXz3"}},{"method":"Transfer","section":"balances","index":"0x0a02","data":{"from":"5HprbfKUFdN4qfweVbgRtqDPHfNtoi8NoWPE45e5bD5AEKiR","to":"5GdHQQkRHvEEE4sDkcLkxCCumSkw2SFBJSLKzbMTNARLTXz3","amount":"1,334,133,312"}},{"method":"Reserved","section":"balances","index":"0x0a04","data":{"who":"5GdHQQkRHvEEE4sDkcLkxCCumSkw2SFBJSLKzbMTNARLTXz3","amount":"1,334,133,312"}},{"method":"Deposit","section":"balances","index":"0x0a07","data":{"who":"5HprbfKUFdN4qfweVbgRtqDPHfNtoi8NoWPE45e5bD5AEKiR","amount":"1,738,002"}},{"method":"Deposit","section":"balances","index":"0x0a07","data":{"who":"5EYCAe5cKPAoFh2HnQQvpKqRYZGqBpaA87u4Zzw89qPE58is","amount":"7,454,150"}},{"method":"TransactionFeePaid","section":"transactionPayment","index":"0x0b00","data":{"who":"5HprbfKUFdN4qfweVbgRtqDPHfNtoi8NoWPE45e5bD5AEKiR","actualFee":"7,454,150","tip":"0"}},{"method":"ExtrinsicSuccess","section":"system","index":"0x0000","data":{"dispatchInfo":{"weight":{"refTime":"2,380,972,133","proofSize":"9,360"},"class":"Normal","paysFee":"Yes"}}}],"extrinsic":{"extrinsicId":"2686261-2","blockNumber":"2,686,261","position":2,"isSigned":true,"method":{"args":{"dest":{"Id":"5GdHQQkRHvEEE4sDkcLkxCCumSkw2SFBJSLKzbMTNARLTXz3"},"value":"0","gas_limit":{"refTime":"6,029,312,000","proofSize":"131,072"},"storage_deposit_limit":null,"data":"0x92ccc18001144d37696b644468747470733a2f2f666f6f6d2e626f6f6d"},"method":"call","section":"contracts"},"era":{"MortalEra":{"period":"32","phase":"17"}},"nonce":"1,673","signature":"0x7c3818278b6da0cc3abbf713739e6a700c44c460670a8041af621ccab928632b4cbbf8a6c362856f089e03036f4c566ce237b502f626dd118d305ee3c54ae88b","signer":{"Id":"5HprbfKUFdN4qfweVbgRtqDPHfNtoi8NoWPE45e5bD5AEKiR"},"tip":"0"},"args":[{"deduplicateOrNew":"0x4d37696b64"},"0x68747470733a2f2f666f6f6d2e626f6f6d"],"message":{"isDefault":false,"isMutating":true,"isPayable":false,"returnType":{"info":13,"lookupIndex":7,"type":"Result<LinkShorteningOutcome, LinkError>","docs":[],"namespace":"Result","sub":[{"name":"Ok","docs":[],"info":15,"lookupIndex":8,"lookupName":"LinkShorteningOutcome","type":"Lookup8"},{"name":"Error","docs":[],"info":15,"lookupIndex":9,"lookupName":"LinkError","type":"Lookup9"}]},"args":[{"name":"slug","type":{"displayName":"SlugCreationMode","info":4,"lookupIndex":6,"lookupName":"LinkSlugCreationMode","type":"{\"_enum\":{\"New\":\"Bytes\",\"DeduplicateOrNew\":\"Bytes\",\"Deduplicate\":\"Null\"}}","docs":[],"namespace":"link::link::SlugCreationMode","sub":[{"info":10,"lookupIndex":1,"type":"Bytes","docs":[],"namespace":"","typeName":"Slug","index":0,"name":"New"},{"info":10,"lookupIndex":1,"type":"Bytes","docs":[],"namespace":"","typeName":"Slug","index":1,"name":"DeduplicateOrNew"},{"info":8,"type":"Null","index":2,"name":"Deduplicate"}]}},{"name":"url","type":{"displayName":"Url","info":10,"lookupIndex":1,"type":"Bytes","docs":[],"namespace":""}}],"docs":[" Create a a new mapping or use an existing one."],"identifier":"shorten","index":0,"method":"shorten","path":["shorten"],"selector":"0x92ccc180"}}
> ============================================================
> 🙌 Scan complete
> ============================================================

```

</details>

<details>

<summary>Integration tests 6 - Running watch contracts on Astar shibuya testnet for Magink contract to get its start and claim events</summary>

```bash

> Contract address: apJNVQJ5T4C5gZ1XRPw2MAHcUFxbuHch7BPGQuTyT8DHjeX
> Network: wss://rpc.shibuya.astar.network
> Scanning blocks from 3944050 to 3944060
> ============================================================
> 💬 Contract Message
> ============================================================
> Identifier: claim
> Arguments: {}
> JSON:
{"dispatchInfo":{"weight":{"refTime":1330092824,"proofSize":23055},"class":"Normal","paysFee":"Yes"},"events":[{"method":"Withdraw","section":"balances","index":"0x1f08","data":{"who":"YDFDMh78emMcyN67CtwiiKrCWH6tDNVPcKeEUckY9YjRdPe","amount":"1,660,638,064,850,342"}},{"method":"Called","section":"contracts","index":"0x4606","data":{"caller":"YDFDMh78emMcyN67CtwiiKrCWH6tDNVPcKeEUckY9YjRdPe","contract":"apJNVQJ5T4C5gZ1XRPw2MAHcUFxbuHch7BPGQuTyT8DHjeX"}},{"method":"Deposit","section":"balances","index":"0x1f07","data":{"who":"YDFDMh78emMcyN67CtwiiKrCWH6tDNVPcKeEUckY9YjRdPe","amount":"469,208,401,042"}},{"method":"Deposit","section":"balances","index":"0x1f07","data":{"who":"YQnbw3h6couUX48Ghs3qyzhdbyxA3Gu9KQCoi8z2CPBf9N3","amount":"1,328,135,085,159,440"}},{"method":"TransactionFeePaid","section":"transactionPayment","index":"0x1e00","data":{"who":"YDFDMh78emMcyN67CtwiiKrCWH6tDNVPcKeEUckY9YjRdPe","actualFee":"1,660,168,856,449,300","tip":"0"}},{"method":"ExtrinsicSuccess","section":"system","index":"0x0a00","data":{"dispatchInfo":{"weight":{"refTime":"1,330,092,824","proofSize":"23,055"},"class":"Normal","paysFee":"Yes"}}}],"extrinsic":{"extrinsicId":"3944056-3","blockNumber":"3,944,056","position":3,"isSigned":true,"method":{"args":{"dest":{"Id":"apJNVQJ5T4C5gZ1XRPw2MAHcUFxbuHch7BPGQuTyT8DHjeX"},"value":"0","gas_limit":{"refTime":"3,951,114,240","proofSize":"125,952"},"storage_deposit_limit":null,"data":"0xb388803f"},"method":"call","section":"contracts"},"era":{"MortalEra":{"period":"32","phase":"21"}},"nonce":"26","signature":"0x488064a398f631bba470173611ecf4b0701cc3b285b4ac5c1fe9a982d4003f2799e6e66d30fb534ae25c2fcc46f979b1ff0d1debd738cb34801b678ea285958a","signer":{"Id":"YDFDMh78emMcyN67CtwiiKrCWH6tDNVPcKeEUckY9YjRdPe"},"tip":"0"},"args":[],"message":{"isDefault":false,"isMutating":true,"isPayable":false,"returnType":{"info":13,"lookupIndex":5,"type":"Result<Result<Null, MaginkError>, InkPrimitivesLangError>","docs":[],"namespace":"Result","sub":[{"name":"Ok","info":13,"lookupIndex":6,"type":"Result<Null, MaginkError>","docs":[],"namespace":"Result","sub":[{"name":"Ok","info":8,"lookupIndex":3,"type":"Null","docs":[],"namespace":""},{"name":"Error","docs":[],"info":15,"lookupIndex":7,"lookupName":"MaginkError","type":"Lookup7"}]},{"name":"Error","docs":[],"info":15,"lookupIndex":4,"lookupName":"InkPrimitivesLangError","type":"Lookup4"}]},"args":[],"docs":[" Claim the badge after the era."],"identifier":"claim","index":1,"method":"claim","path":["claim"],"selector":"0xb388803f"}}
> ============================================================
> 💬 Contract Message
> ============================================================
> Identifier: start
> Arguments: 
> - era: 2
> JSON:
{"dispatchInfo":{"weight":{"refTime":1243856965,"proofSize":22337},"class":"Normal","paysFee":"Yes"},"events":[{"method":"Withdraw","section":"balances","index":"0x1f08","data":{"who":"YDFDMh78emMcyN67CtwiiKrCWH6tDNVPcKeEUckY9YjRdPe","amount":"1,670,638,069,537,409"}},{"method":"Called","section":"contracts","index":"0x4606","data":{"caller":"YDFDMh78emMcyN67CtwiiKrCWH6tDNVPcKeEUckY9YjRdPe","contract":"apJNVQJ5T4C5gZ1XRPw2MAHcUFxbuHch7BPGQuTyT8DHjeX"}},{"method":"Transfer","section":"balances","index":"0x1f02","data":{"from":"YDFDMh78emMcyN67CtwiiKrCWH6tDNVPcKeEUckY9YjRdPe","to":"apJNVQJ5T4C5gZ1XRPw2MAHcUFxbuHch7BPGQuTyT8DHjeX","amount":"7,000,000,000"}},{"method":"Reserved","section":"balances","index":"0x1f04","data":{"who":"apJNVQJ5T4C5gZ1XRPw2MAHcUFxbuHch7BPGQuTyT8DHjeX","amount":"7,000,000,000"}},{"method":"Deposit","section":"balances","index":"0x1f07","data":{"who":"YDFDMh78emMcyN67CtwiiKrCWH6tDNVPcKeEUckY9YjRdPe","amount":"481,048,104,177"}},{"method":"Deposit","section":"balances","index":"0x1f07","data":{"who":"YQnbw3h6couUX48Ghs3qyzhdbyxA3Gu9KQCoi8z2CPBf9N3","amount":"1,336,125,617,146,586"}},{"method":"TransactionFeePaid","section":"transactionPayment","index":"0x1e00","data":{"who":"YDFDMh78emMcyN67CtwiiKrCWH6tDNVPcKeEUckY9YjRdPe","actualFee":"1,670,157,021,433,232","tip":"0"}},{"method":"ExtrinsicSuccess","section":"system","index":"0x0a00","data":{"dispatchInfo":{"weight":{"refTime":"1,243,856,965","proofSize":"22,337"},"class":"Normal","paysFee":"Yes"}}}],"extrinsic":{"extrinsicId":"3944053-2","blockNumber":"3,944,053","position":2,"isSigned":true,"method":{"args":{"dest":{"Id":"apJNVQJ5T4C5gZ1XRPw2MAHcUFxbuHch7BPGQuTyT8DHjeX"},"value":"0","gas_limit":{"refTime":"3,951,114,240","proofSize":"125,952"},"storage_deposit_limit":null,"data":"0x3c1e398602"},"method":"call","section":"contracts"},"era":{"MortalEra":{"period":"32","phase":"18"}},"nonce":"25","signature":"0xbca248c2599adc334a97cc852cab42f1aee0d42a121e7fbaaad0de63dc1ddc659c2af52ab49c798db755c8cff80a2998af14b2900a841ab09abe19841cc25186","signer":{"Id":"YDFDMh78emMcyN67CtwiiKrCWH6tDNVPcKeEUckY9YjRdPe"},"tip":"0"},"args":["0x02"],"message":{"isDefault":false,"isMutating":true,"isPayable":false,"returnType":{"info":13,"lookupIndex":2,"type":"Result<Null, InkPrimitivesLangError>","docs":[],"namespace":"Result","sub":[{"name":"Ok","info":8,"lookupIndex":3,"type":"Null","docs":[],"namespace":""},{"name":"Error","docs":[],"info":15,"lookupIndex":4,"lookupName":"InkPrimitivesLangError","type":"Lookup4"}]},"args":[{"name":"era","type":{"info":10,"lookupIndex":0,"type":"u8","docs":[],"namespace":""}}],"docs":[" (Re)Start the Magink the claiming era for the caller."],"identifier":"start","index":0,"method":"start","path":["start"],"selector":"0x3c1e3986"}}
> ============================================================
> 🙌 Scan complete
> ============================================================

```

</details>

<details>

<summary>Integration tests 7 - watch-balances</summary>

- Watches the change in balances of big exchange hot wallets from chain storage.

```bash

👀 Watching 17 balances...
********************************************************************************
OKX wallet 🌶️
--------------------------------------------------------------------------------
Time   : 2023-07-24T16:22:54.952Z
Address: 16hp43x8DUZtU8L3cJy9Z8JMwTzuu8ZZRWqDZnpMhp464oEd
Balance: 10.1685 MDOT
Delta  : +82.9841 DOT
********************************************************************************
Kraken wallet 🌶️
--------------------------------------------------------------------------------
Time   : 2023-07-24T16:23:19.165Z
Address: 12xtAYsRUrmbniiWQqJtECiBQrMn8AypQcXhnQAc6RB6XkLW
Balance: 39.9922 MDOT
Delta  : -92.7463 DOT
********************************************************************************
Kucoin wallet 🌶️
--------------------------------------------------------------------------------
Time   : 2023-07-24T16:23:30.843Z
Address: 15QFBQY6TF6Abr6vA1r6opRh6RbRSMWgBC1PcCMDDzRSEXf5
Balance: 374.7984 kDOT
Delta  : -30.3473 DOT
********************************************************************************
Huobi wallet 🌶️
--------------------------------------------------------------------------------
Time   : 2023-07-24T16:23:42.876Z
Address: 15kUt2i86LHRWCkE3D9Bg1HZAoc2smhn1fwPzDERTb1BXAkX
Balance: 1.0837 MDOT
Delta  : -1.3995 kDOT
********************************************************************************
ByBit wallet 🌶️
--------------------------------------------------------------------------------
Time   : 2023-07-24T16:23:48.932Z
Address: 12nr7GiDrYHzAYT9L8HdeXnMfWcBuYfAXpgfzf3upujeCciz
Balance: 462.1488 kDOT
Delta  : +599.9841 DOT
********************************************************************************
ByBit wallet 🌶️
--------------------------------------------------------------------------------
Time   : 2023-07-24T16:23:54.788Z
Address: 12nr7GiDrYHzAYT9L8HdeXnMfWcBuYfAXpgfzf3upujeCciz
Balance: 462.1776 kDOT
Delta  : +28.8000 DOT
********************************************************************************
Binance wallet 🌶️
--------------------------------------------------------------------------------
Time   : 2023-07-24T16:24:06.885Z
Address: 1qnJN7FViy3HZaxZK9tGAA71zxHSBeUweirKqCaox4t8GT7
Balance: 1.4922 MDOT
Delta  : -1.9360 DOT
********************************************************************************
MEXC wallet 🌶️
--------------------------------------------------------------------------------
Time   : 2023-07-24T16:24:19.254Z
Address: 16Xuv8TZpqSP9iSxquSJ9CQDfnJink7tFFNg8YYLqE5DiXkn
Balance: 448.4608 kDOT
Delta  : +1.1764 DOT
********************************************************************************
Binance wallet 🌶️
--------------------------------------------------------------------------------
Time   : 2023-07-24T16:26:06.974Z
Address: 1qnJN7FViy3HZaxZK9tGAA71zxHSBeUweirKqCaox4t8GT7
Balance: 1.4921 MDOT
Delta  : -61.5530 DOT
********************************************************************************
Kraken wallet 🌶️
--------------------------------------------------------------------------------
Time   : 2023-07-24T16:26:37.019Z
Address: 12xtAYsRUrmbniiWQqJtECiBQrMn8AypQcXhnQAc6RB6XkLW
Balance: 39.9921 MDOT
Delta  : -33.6456 DOT
********************************************************************************
Binance wallet 🌶️
--------------------------------------------------------------------------------
Time   : 2023-07-24T16:28:06.975Z
Address: 1qnJN7FViy3HZaxZK9tGAA71zxHSBeUweirKqCaox4t8GT7
Balance: 1.4921 MDOT
Delta  : -15.9651 DOT
********************************************************************************
Binance wallet 🌶️
--------------------------------------------------------------------------------
Time   : 2023-07-24T16:30:06.866Z
Address: 1qnJN7FViy3HZaxZK9tGAA71zxHSBeUweirKqCaox4t8GT7
Balance: 1.4921 MDOT
Delta  : -6.9634 DOT

```

</details>

<details>

<summary>Integration tests 8 - watch-instantiations</summary>

- Watches contract instantiations of the same code hash.

```bash

{"dispatchInfo":{"weight":{"refTime":1753781289,"proofSize":0},"class":"Normal","paysFee":"Yes"},"events":[{"method":"Withdraw","section":"balances","index":"0x0a08","data":{"who":"5F94w9qeXAkQBgAqDwRCUMPmDifVUH5C5S3PwEogWRDSEkFC","amount":"55,171,618"}},{"method":"NewAccount","section":"system","index":"0x0003","data":{"account":"5Dr6apvQcHNNzm5nnyhisdQfpmtzmAy2Lzj1EK5MBYwtfbVn"}},{"method":"Endowed","section":"balances","index":"0x0a00","data":{"account":"5Dr6apvQcHNNzm5nnyhisdQfpmtzmAy2Lzj1EK5MBYwtfbVn","freeBalance":"670,699,953"}},{"method":"Transfer","section":"balances","index":"0x0a02","data":{"from":"5F94w9qeXAkQBgAqDwRCUMPmDifVUH5C5S3PwEogWRDSEkFC","to":"5Dr6apvQcHNNzm5nnyhisdQfpmtzmAy2Lzj1EK5MBYwtfbVn","amount":"670,699,953"}},{"method":"Reserved","section":"balances","index":"0x0a04","data":{"who":"5Dr6apvQcHNNzm5nnyhisdQfpmtzmAy2Lzj1EK5MBYwtfbVn","amount":"670,699,953"}},{"method":"Instantiated","section":"contracts","index":"0x2800","data":{"deployer":"5F94w9qeXAkQBgAqDwRCUMPmDifVUH5C5S3PwEogWRDSEkFC","contract":"5Dr6apvQcHNNzm5nnyhisdQfpmtzmAy2Lzj1EK5MBYwtfbVn"}},{"method":"Transfer","section":"balances","index":"0x0a02","data":{"from":"5F94w9qeXAkQBgAqDwRCUMPmDifVUH5C5S3PwEogWRDSEkFC","to":"5Dr6apvQcHNNzm5nnyhisdQfpmtzmAy2Lzj1EK5MBYwtfbVn","amount":"666,666,660"}},{"method":"Reserved","section":"balances","index":"0x0a04","data":{"who":"5Dr6apvQcHNNzm5nnyhisdQfpmtzmAy2Lzj1EK5MBYwtfbVn","amount":"666,666,660"}},{"method":"Deposit","section":"balances","index":"0x0a07","data":{"who":"5F94w9qeXAkQBgAqDwRCUMPmDifVUH5C5S3PwEogWRDSEkFC","amount":"19,260,013"}},{"method":"Deposit","section":"balances","index":"0x0a07","data":{"who":"5EYCAe5cKPAoFh2HnQQvpKqRYZGqBpaA87u4Zzw89qPE58is","amount":"35,911,605"}},{"method":"TransactionFeePaid","section":"transactionPayment","index":"0x0b00","data":{"who":"5F94w9qeXAkQBgAqDwRCUMPmDifVUH5C5S3PwEogWRDSEkFC","actualFee":"35,911,605","tip":"0"}},{"method":"ExtrinsicSuccess","section":"system","index":"0x0000","data":{"dispatchInfo":{"weight":{"refTime":"1,753,781,289","proofSize":"0"},"class":"Normal","paysFee":"Yes"}}}],"extrinsic":{"extrinsicId":"1951957-2","blockNumber":"1,951,957","position":2,"isSigned":true,"method":{"args":{"value":"0","gas_limit":{"refTime":"50,000,000,000","proofSize":"0"},"storage_deposit_limit":null,"code":"0x0061736d01000000011b0560027f7f0060000060047f7f7f7f017f60037f7f7f006000017f027406057365616c310b6765745f73746f726167650002057365616c301176616c75655f7472616e736665727265640000057365616c3005696e7075740000057365616c320b7365745f73746f726167650002057365616c300b7365616c5f72657475726e000303656e76066d656d6f7279020102100307060004010001010608017f01418080040b071102066465706c6f7900090463616c6c000a0ab405064a01037f024002402001280208220241046a22032002490d00200320012802044b0d00200320026b4104470d012001280200210420012003360208200220046a20003600000f0b000b000b5502027f027e230041206b22002400200041106a22014200370300200042003703082000411036021c200041086a2000411c6a10012001290300210220002903082103200041206a2400410541042002200384501b0b1300418080044181023b0100410141021008000b0d0020004180800420011004000ba20101027f230041106b220024000240100641ff01714105470d00200041808001360200418080042000100220002802002201418180014f0d00024020014104490d0041808004280200419bddf6f405470d002000428080013702042000418080043602004100200010052000280208220120002802044b0d01200028020022002001200020016a410010031a4180800441003b0100410041021008000b1007000b000bca0201047f230041106b220024000240100641ff01714105470d00200041808001360200418080042000100220002802002202418180014f0d00024020024104490d00418080042802000d002000428080013702042000418080043602004100200010052000280204220220002802082203490d01200028020021012000200220036b220236020020012003200120036a200010002002200028020049720d012000410036020820004201370300230041106b22012400200141808001360204200141808004360200024041818004027f2000280200220241024704404180800441003a000041002002450d011a4181800441013a000020014102360208200028020420011005200041086a280200200110052001280208220041818001490d02000b4180800441013a000041010b3a000041022100200141023602080b410020001008000b1007000b000b","data":"0x9bae9d5e","salt":"0xaaf314e5b308bfd974cfa03c68f8f94b785908c34baa37bbf1c276a21165cb29"},"method":"instantiateWithCode","section":"contracts"},"era":{"MortalEra":{"period":"32","phase":"18"}},"nonce":"0","signature":"0x1c8af3ef759466a8d4820b657c29a3c2e2d8b983f2909c0c5c2992df2908cd584693936d1233dee36a2a8c3547dfaaa944f07ba7cc9e50349bdb3544cae36d81","signer":{"Id":"5F94w9qeXAkQBgAqDwRCUMPmDifVUH5C5S3PwEogWRDSEkFC"},"tip":"0"},"args":[{"x":0,"y":0},"0x00000000000000000000000000000000","0x00000000","0x00000000"],"message":{"isConstructor":true,"isDefault":false,"isPayable":false,"returnType":{"info":13,"lookupIndex":10,"type":"Result<Null, InkPrimitivesLangError>","docs":[],"namespace":"Result","sub":[{"name":"Ok","info":8,"lookupIndex":11,"type":"Null","docs":[],"namespace":""},{"name":"Error","docs":[],"info":15,"lookupIndex":12,"lookupName":"InkPrimitivesLangError","type":"Lookup12"}]},"args":[{"name":"dimensions","type":{"displayName":"Field","info":16,"lookupIndex":9,"lookupName":"SquinkSplashContractField","type":"{\"x\":\"u32\",\"y\":\"u32\"}","docs":[],"namespace":"squink_splash::contract::Field","sub":[{"docs":[],"name":"x","info":10,"lookupIndex":0,"type":"u32","namespace":"","typeName":"u32"},{"docs":[],"name":"y","info":10,"lookupIndex":0,"type":"u32","namespace":"","typeName":"u32"}]}},{"name":"buyIn","type":{"info":10,"type":"Balance"}},{"name":"formingRounds","type":{"info":10,"lookupIndex":0,"type":"u32","docs":[],"namespace":""}},{"name":"rounds","type":{"info":10,"lookupIndex":0,"type":"u32","docs":[],"namespace":""}}],"docs":["Create a new game.","","- `dimensions`: (width, height) of the board.","- `buy_in`: The amount of balance each player needs to submit in order to play.","- `forming_rounds`: Number of blocks that needs to pass until anyone can start the game.","- `rounds`: The number of blocks a game can be played for.","- `score_multiplier`: The higher the more score you get per field.","- `gas_per_round`: The amount of gas each player can use. Unused gas is carried over to the next round."],"identifier":"new","index":0,"method":"new","path":["new"],"selector":"0x9bae9d5e"}}
{"dispatchInfo":{"weight":{"refTime":1409926289,"proofSize":1061},"class":"Normal","paysFee":"Yes"},"events":[{"method":"Withdraw","section":"balances","index":"0x0a08","data":{"who":"5F94w9qeXAkQBgAqDwRCUMPmDifVUH5C5S3PwEogWRDSEkFC","amount":"10,869,511"}},{"method":"NewAccount","section":"system","index":"0x0003","data":{"account":"5GvsRQzJAoFj2NTeRgffGGKT2R62jJpAsxnxkxDPoQguFEBH"}},{"method":"Endowed","section":"balances","index":"0x0a00","data":{"account":"5GvsRQzJAoFj2NTeRgffGGKT2R62jJpAsxnxkxDPoQguFEBH","freeBalance":"670,699,953"}},{"method":"Transfer","section":"balances","index":"0x0a02","data":{"from":"5F94w9qeXAkQBgAqDwRCUMPmDifVUH5C5S3PwEogWRDSEkFC","to":"5GvsRQzJAoFj2NTeRgffGGKT2R62jJpAsxnxkxDPoQguFEBH","amount":"670,699,953"}},{"method":"Reserved","section":"balances","index":"0x0a04","data":{"who":"5GvsRQzJAoFj2NTeRgffGGKT2R62jJpAsxnxkxDPoQguFEBH","amount":"670,699,953"}},{"method":"Instantiated","section":"contracts","index":"0x2800","data":{"deployer":"5F94w9qeXAkQBgAqDwRCUMPmDifVUH5C5S3PwEogWRDSEkFC","contract":"5GvsRQzJAoFj2NTeRgffGGKT2R62jJpAsxnxkxDPoQguFEBH"}},{"method":"Transfer","section":"balances","index":"0x0a02","data":{"from":"5F94w9qeXAkQBgAqDwRCUMPmDifVUH5C5S3PwEogWRDSEkFC","to":"5GvsRQzJAoFj2NTeRgffGGKT2R62jJpAsxnxkxDPoQguFEBH","amount":"666,666,660"}},{"method":"Reserved","section":"balances","index":"0x0a04","data":{"who":"5GvsRQzJAoFj2NTeRgffGGKT2R62jJpAsxnxkxDPoQguFEBH","amount":"666,666,660"}},{"method":"Deposit","section":"balances","index":"0x0a07","data":{"who":"5F94w9qeXAkQBgAqDwRCUMPmDifVUH5C5S3PwEogWRDSEkFC","amount":"2,257,118"}},{"method":"Deposit","section":"balances","index":"0x0a07","data":{"who":"5EYCAe5cKPAoFh2HnQQvpKqRYZGqBpaA87u4Zzw89qPE58is","amount":"8,612,393"}},{"method":"TransactionFeePaid","section":"transactionPayment","index":"0x0b00","data":{"who":"5F94w9qeXAkQBgAqDwRCUMPmDifVUH5C5S3PwEogWRDSEkFC","actualFee":"8,612,393","tip":"0"}},{"method":"ExtrinsicSuccess","section":"system","index":"0x0000","data":{"dispatchInfo":{"weight":{"refTime":"1,409,926,289","proofSize":"1,061"},"class":"Normal","paysFee":"Yes"}}}],"extrinsic":{"extrinsicId":"1951985-2","blockNumber":"1,951,985","position":2,"isSigned":true,"method":{"args":{"value":"0","gas_limit":{"refTime":"6,029,312,000","proofSize":"131,072"},"storage_deposit_limit":"1,337,366,613","code_hash":"0x6cf11f2c80feaa775afb888442a5857dbb2da91d46f3ff03698a8a45f645667c","data":"0x9bae9d5e","salt":"0x307831663437343564396533633635616566656265616239366464326365636638353537613065613138613431346236323833303439613431613737636532343736"},"method":"instantiate","section":"contracts"},"era":{"MortalEra":{"period":"32","phase":"14"}},"nonce":"2","signature":"0x9464f09d91c3de340c8bb791057c3fa713272dd4d45f429afe4a79b4ae233f473f8d7a33b24bbcd0f7fdf7d364e63c071b6bca1058ee889b4c2bfc84ec831083","signer":{"Id":"5F94w9qeXAkQBgAqDwRCUMPmDifVUH5C5S3PwEogWRDSEkFC"},"tip":"0"},"args":[{"x":0,"y":0},"0x00000000000000000000000000000000","0x00000000","0x00000000"],"message":{"isConstructor":true,"isDefault":false,"isPayable":false,"returnType":{"info":13,"lookupIndex":10,"type":"Result<Null, InkPrimitivesLangError>","docs":[],"namespace":"Result","sub":[{"name":"Ok","info":8,"lookupIndex":11,"type":"Null","docs":[],"namespace":""},{"name":"Error","docs":[],"info":15,"lookupIndex":12,"lookupName":"InkPrimitivesLangError","type":"Lookup12"}]},"args":[{"name":"dimensions","type":{"displayName":"Field","info":16,"lookupIndex":9,"lookupName":"SquinkSplashContractField","type":"{\"x\":\"u32\",\"y\":\"u32\"}","docs":[],"namespace":"squink_splash::contract::Field","sub":[{"docs":[],"name":"x","info":10,"lookupIndex":0,"type":"u32","namespace":"","typeName":"u32"},{"docs":[],"name":"y","info":10,"lookupIndex":0,"type":"u32","namespace":"","typeName":"u32"}]}},{"name":"buyIn","type":{"info":10,"type":"Balance"}},{"name":"formingRounds","type":{"info":10,"lookupIndex":0,"type":"u32","docs":[],"namespace":""}},{"name":"rounds","type":{"info":10,"lookupIndex":0,"type":"u32","docs":[],"namespace":""}}],"docs":["Create a new game.","","- `dimensions`: (width, height) of the board.","- `buy_in`: The amount of balance each player needs to submit in order to play.","- `forming_rounds`: Number of blocks that needs to pass until anyone can start the game.","- `rounds`: The number of blocks a game can be played for.","- `score_multiplier`: The higher the more score you get per field.","- `gas_per_round`: The amount of gas each player can use. Unused gas is carried over to the next round."],"identifier":"new","index":0,"method":"new","path":["new"],"selector":"0x9bae9d5e"}}
{"dispatchInfo":{"weight":{"refTime":1753849289,"proofSize":0},"class":"Normal","paysFee":"Yes"},"events":[{"method":"Withdraw","section":"balances","index":"0x0a08","data":{"who":"5F94w9qeXAkQBgAqDwRCUMPmDifVUH5C5S3PwEogWRDSEkFC","amount":"37,250,275"}},{"method":"NewAccount","section":"system","index":"0x0003","data":{"account":"5CKaujm58vuCXWsh2kvTSs4D9a5nRwZJQRPqDaP7cdovFf49"}},{"method":"Endowed","section":"balances","index":"0x0a00","data":{"account":"5CKaujm58vuCXWsh2kvTSs4D9a5nRwZJQRPqDaP7cdovFf49","freeBalance":"670,699,953"}},{"method":"Transfer","section":"balances","index":"0x0a02","data":{"from":"5F94w9qeXAkQBgAqDwRCUMPmDifVUH5C5S3PwEogWRDSEkFC","to":"5CKaujm58vuCXWsh2kvTSs4D9a5nRwZJQRPqDaP7cdovFf49","amount":"670,699,953"}},{"method":"Reserved","section":"balances","index":"0x0a04","data":{"who":"5CKaujm58vuCXWsh2kvTSs4D9a5nRwZJQRPqDaP7cdovFf49","amount":"670,699,953"}},{"method":"Instantiated","section":"contracts","index":"0x2800","data":{"deployer":"5F94w9qeXAkQBgAqDwRCUMPmDifVUH5C5S3PwEogWRDSEkFC","contract":"5CKaujm58vuCXWsh2kvTSs4D9a5nRwZJQRPqDaP7cdovFf49"}},{"method":"Transfer","section":"balances","index":"0x0a02","data":{"from":"5F94w9qeXAkQBgAqDwRCUMPmDifVUH5C5S3PwEogWRDSEkFC","to":"5CKaujm58vuCXWsh2kvTSs4D9a5nRwZJQRPqDaP7cdovFf49","amount":"666,666,660"}},{"method":"Reserved","section":"balances","index":"0x0a04","data":{"who":"5CKaujm58vuCXWsh2kvTSs4D9a5nRwZJQRPqDaP7cdovFf49","amount":"666,666,660"}},{"method":"Deposit","section":"balances","index":"0x0a07","data":{"who":"5F94w9qeXAkQBgAqDwRCUMPmDifVUH5C5S3PwEogWRDSEkFC","amount":"71,990"}},{"method":"Deposit","section":"balances","index":"0x0a07","data":{"who":"5EYCAe5cKPAoFh2HnQQvpKqRYZGqBpaA87u4Zzw89qPE58is","amount":"37,178,285"}},{"method":"TransactionFeePaid","section":"transactionPayment","index":"0x0b00","data":{"who":"5F94w9qeXAkQBgAqDwRCUMPmDifVUH5C5S3PwEogWRDSEkFC","actualFee":"37,178,285","tip":"0"}},{"method":"ExtrinsicSuccess","section":"system","index":"0x0000","data":{"dispatchInfo":{"weight":{"refTime":"1,753,849,289","proofSize":"0"},"class":"Normal","paysFee":"Yes"}}}],"extrinsic":{"extrinsicId":"1951969-2","blockNumber":"1,951,969","position":2,"isSigned":true,"method":{"args":{"value":"0","gas_limit":{"refTime":"323,337,799","proofSize":"0"},"storage_deposit_limit":"1,337,366,613","code":"0x0061736d01000000011b0560027f7f0060000060047f7f7f7f017f60037f7f7f006000017f027406057365616c310b6765745f73746f726167650002057365616c301176616c75655f7472616e736665727265640000057365616c3005696e7075740000057365616c320b7365745f73746f726167650002057365616c300b7365616c5f72657475726e000303656e76066d656d6f7279020102100307060004010001010608017f01418080040b071102066465706c6f7900090463616c6c000a0ab405064a01037f024002402001280208220241046a22032002490d00200320012802044b0d00200320026b4104470d012001280200210420012003360208200220046a20003600000f0b000b000b5502027f027e230041206b22002400200041106a22014200370300200042003703082000411036021c200041086a2000411c6a10012001290300210220002903082103200041206a2400410541042002200384501b0b1300418080044181023b0100410141021008000b0d0020004180800420011004000ba20101027f230041106b220024000240100641ff01714105470d00200041808001360200418080042000100220002802002201418180014f0d00024020014104490d0041808004280200419bddf6f405470d002000428080013702042000418080043602004100200010052000280208220120002802044b0d01200028020022002001200020016a410010031a4180800441003b0100410041021008000b1007000b000bca0201047f230041106b220024000240100641ff01714105470d00200041808001360200418080042000100220002802002202418180014f0d00024020024104490d00418080042802000d002000428080013702042000418080043602004100200010052000280204220220002802082203490d01200028020021012000200220036b220236020020012003200120036a200010002002200028020049720d012000410036020820004201370300230041106b22012400200141808001360204200141808004360200024041818004027f2000280200220241024704404180800441003a000041002002450d011a4181800441013a000020014102360208200028020420011005200041086a280200200110052001280208220041818001490d02000b4180800441013a000041010b3a000041022100200141023602080b410020001008000b1007000b000b","data":"0x9bae9d5e","salt":"0x307836636361356532393266326166646230346238656163316531323933613537313766346431383438386334326562613635356239346132343432323164343132"},"method":"instantiateWithCode","section":"contracts"},"era":{"MortalEra":{"period":"32","phase":"29"}},"nonce":"1","signature":"0x8c35a3ba42936bd2213c3c128ba3649baa50d0f9259aaea406f8c710099b9c0268662001be44f6af51b09519e060773e25d4c14e1318704a80561c69df8af882","signer":{"Id":"5F94w9qeXAkQBgAqDwRCUMPmDifVUH5C5S3PwEogWRDSEkFC"},"tip":"0"},"args":[{"x":0,"y":0},"0x00000000000000000000000000000000","0x00000000","0x00000000"],"message":{"isConstructor":true,"isDefault":false,"isPayable":false,"returnType":{"info":13,"lookupIndex":10,"type":"Result<Null, InkPrimitivesLangError>","docs":[],"namespace":"Result","sub":[{"name":"Ok","info":8,"lookupIndex":11,"type":"Null","docs":[],"namespace":""},{"name":"Error","docs":[],"info":15,"lookupIndex":12,"lookupName":"InkPrimitivesLangError","type":"Lookup12"}]},"args":[{"name":"dimensions","type":{"displayName":"Field","info":16,"lookupIndex":9,"lookupName":"SquinkSplashContractField","type":"{\"x\":\"u32\",\"y\":\"u32\"}","docs":[],"namespace":"squink_splash::contract::Field","sub":[{"docs":[],"name":"x","info":10,"lookupIndex":0,"type":"u32","namespace":"","typeName":"u32"},{"docs":[],"name":"y","info":10,"lookupIndex":0,"type":"u32","namespace":"","typeName":"u32"}]}},{"name":"buyIn","type":{"info":10,"type":"Balance"}},{"name":"formingRounds","type":{"info":10,"lookupIndex":0,"type":"u32","docs":[],"namespace":""}},{"name":"rounds","type":{"info":10,"lookupIndex":0,"type":"u32","docs":[],"namespace":""}}],"docs":["Create a new game.","","- `dimensions`: (width, height) of the board.","- `buy_in`: The amount of balance each player needs to submit in order to play.","- `forming_rounds`: Number of blocks that needs to pass until anyone can start the game.","- `rounds`: The number of blocks a game can be played for.","- `score_multiplier`: The higher the more score you get per field.","- `gas_per_round`: The amount of gas each player can use. Unused gas is carried over to the next round."],"identifier":"new","index":0,"method":"new","path":["new"],"selector":"0x9bae9d5e"}}

```

</details>

<details>

<summary>Integration tests 9 - watch-sovereign-acc</summary>

- Watches the Moonbeam sovereign account on Astar and xcASTR supply on Moonbeam and logs the difference, if any, between the two.

```bash

--------------------------------------------------------------------------------
👍 ASTR balance in sovereign account is above xcASTR supply on Moonbeam
> Difference              : +549.1708 ASTR
> Soverign account balance: 1.9269 MASTR
> Asset supply            : 1.9263 MxcASTR
> Timestamp               : 2023-07-24T16:34:14.444Z

```

</details>

<details>

<summary>Integration tests 10 - watch-transfer-events</summary>

- Watches transfers above a specified amount. Supports pipeable stdout.

```bash

{"eventId":"16541862-2-1","extrinsicId":"16541862-2","extrinsicPosition":1,"blockNumber":"16,541,862","method":"Transfer","section":"balances","index":"0x0502","data":{"from":"1qnJN7FViy3HZaxZK9tGAA71zxHSBeUweirKqCaox4t8GT7","to":"142oJRBEXmF89aosiYQZkzZeUzMoT2B3NR3bBVGRjgggwBgg","amount":"252,601,444,900,000"}}
{"eventId":"16541869-2-1","extrinsicId":"16541869-2","extrinsicPosition":1,"blockNumber":"16,541,869","method":"Transfer","section":"balances","index":"0x0502","data":{"from":"142oJRBEXmF89aosiYQZkzZeUzMoT2B3NR3bBVGRjgggwBgg","to":"1o138Rc4VihLQnuRkdcCvRYkcifWj2UN4Bn6h3UNNtstFu6","amount":"250,000,000,000,000"}}
{"eventId":"16541889-2-1","extrinsicId":"16541889-2","extrinsicPosition":1,"blockNumber":"16,541,889","method":"Transfer","section":"balances","index":"0x0502","data":{"from":"15G3uHVCAmcSLdkMEYmaGXL597GrcBcjhDBm189QPSaHopex","to":"12nr7GiDrYHzAYT9L8HdeXnMfWcBuYfAXpgfzf3upujeCciz","amount":"64,382,246,851,959"}}
{"eventId":"16541894-2-3","extrinsicId":"16541894-2","extrinsicPosition":3,"blockNumber":"16,541,894","method":"Transfer","section":"balances","index":"0x0502","data":{"from":"12nr7GiDrYHzAYT9L8HdeXnMfWcBuYfAXpgfzf3upujeCciz","to":"14Sraq8qPWryS8EXucSRcQ9gtUWeYa5cfnHcdLP7oT6qqBvm","amount":"47,960,000,000,000"}}
{"eventId":"16541901-4-2","extrinsicId":"16541901-4","extrinsicPosition":2,"blockNumber":"16,541,901","method":"Transfer","section":"balances","index":"0x0502","data":{"from":"16H7ogLrJiZrWo6sByaVvQKjU1nfMaVndj8Ba5Uyj1tBqh7x","to":"1qnJN7FViy3HZaxZK9tGAA71zxHSBeUweirKqCaox4t8GT7","amount":"26,398,241,537,837"}}
{"eventId":"16541901-5-2","extrinsicId":"16541901-5","extrinsicPosition":2,"blockNumber":"16,541,901","method":"Transfer","section":"balances","index":"0x0502","data":{"from":"16UNHDyHhrT8UxAVbkm4DxMMLCvUVj2JEgyPuTq66f5Sc6RF","to":"1qnJN7FViy3HZaxZK9tGAA71zxHSBeUweirKqCaox4t8GT7","amount":"12,769,683,075,670"}}
{"eventId":"16541901-6-2","extrinsicId":"16541901-6","extrinsicPosition":2,"blockNumber":"16,541,901","method":"Transfer","section":"balances","index":"0x0502","data":{"from":"15txjgVA8PZAJftAfYsesVpMGVBSdpJhXg6NnocxUMUiNYAm","to":"1qnJN7FViy3HZaxZK9tGAA71zxHSBeUweirKqCaox4t8GT7","amount":"2,402,218,513,511"}}
{"eventId":"16541915-2-2","extrinsicId":"16541915-2","extrinsicPosition":2,"blockNumber":"16,541,915","method":"Transfer","section":"balances","index":"0x0502","data":{"from":"1yHzBRxRhLdwN3Uj939449wEYS9A2U2y4cSo9ZeF6FCfLwr","to":"1KSL5DBpkpQhgh9sWuD8jExMm8UekGn9H8fC3NQPVF1k9Xv","amount":"5,001,715,702,074"}}
{"eventId":"16541922-3-1","extrinsicId":"16541922-3","extrinsicPosition":1,"blockNumber":"16,541,922","method":"Transfer","section":"balances","index":"0x0502","data":{"from":"14ACmZNf1rash4zpotAQ3n6kTgJErySd3qUAedjHr7oMHDnn","to":"1569rMZWXthh2KHgn3VEnZKo79ycJ8cgwgo98TdzBfyVhv9y","amount":"40,000,000,000,000"}}
{"eventId":"16541922-4-1","extrinsicId":"16541922-4","extrinsicPosition":1,"blockNumber":"16,541,922","method":"Transfer","section":"balances","index":"0x0502","data":{"from":"15kUt2i86LHRWCkE3D9Bg1HZAoc2smhn1fwPzDERTb1BXAkX","to":"19safgYRgs8ei9fV285mp2avgBi1RTNeafSLvprZwijVQHQ","amount":"13,371,044,000,000"}}
{"eventId":"16541949-2-1","extrinsicId":"16541949-2","extrinsicPosition":1,"blockNumber":"16,541,949","method":"Transfer","section":"balances","index":"0x0502","data":{"from":"12Hp1JuFLFts7vvtJGg5qML8MB69QZ5jYo49BAHiAkbP9Gqy","to":"137cbASMdG3NNdfEriFS58trwhjWYDkQ5cU4qsxvuXDqG2Hk","amount":"187,159,318,000,000"}}

```

</details>

<details>

<summary>Integration tests 11 - follow-transfer-events</summary>

- Simple demonstration of dynamic queries.

```bash

================================================================================
🛸 Ocelloids Follow Transfer Demo
================================================================================
Address: 12xtAYsRUrmbniiWQqJtECiBQrMn8AypQcXhnQAc6RB6XkLW
Network: Polkadot
Start Block: 16134439
Block Count: 80
--------------------------------------------------------------------------------
Block Height 16,134,439
Block Height 16,134,440
Block Height 16,134,441
Block Height 16,134,442
Block Height 16,134,443
Block Height 16,134,444
Block Height 16,134,445
Block Height 16,134,446
Event {
  eventId: '16134446-2-3',
  extrinsicId: '16134446-2',
  extrinsicPosition: 3,
  blockNumber: '16,134,446',
  method: 'Transfer',
  section: 'balances',
  index: '0x0502',
  data: {
    from: '12xtAYsRUrmbniiWQqJtECiBQrMn8AypQcXhnQAc6RB6XkLW',
    to: '125194e7cT6G2GRijSjT3Xc88ydr89io3rGUP2js5D2W2YyK',
    amount: '2,720,115,502,300'
  }
}
Block Height 16,134,447
Block Height 16,134,448
Block Height 16,134,449
Block Height 16,134,450
Block Height 16,134,451
Block Height 16,134,452
Block Height 16,134,453
Block Height 16,134,454
Block Height 16,134,455
Block Height 16,134,456
Block Height 16,134,457
Event {
  eventId: '16134457-4-3',
  extrinsicId: '16134457-4',
  extrinsicPosition: 3,
  blockNumber: '16,134,457',
  method: 'Transfer',
  section: 'balances',
  index: '0x0502',
  data: {
    from: '16FgoegQkWE5r7JALNMWN6CY7snq4jDP8ZdyimfJv71kwXBZ',
    to: '12xtAYsRUrmbniiWQqJtECiBQrMn8AypQcXhnQAc6RB6XkLW',
    amount: '83,830,722,636'
  }
}
Block Height 16,134,458
Block Height 16,134,459
Block Height 16,134,460
Block Height 16,134,461
Block Height 16,134,462
Block Height 16,134,463
Block Height 16,134,464
Block Height 16,134,465
Block Height 16,134,466
Block Height 16,134,467
Block Height 16,134,468
Block Height 16,134,469
Block Height 16,134,470
Block Height 16,134,471
Block Height 16,134,472
Block Height 16,134,473
Block Height 16,134,474
Block Height 16,134,475
Block Height 16,134,476
Block Height 16,134,477
Block Height 16,134,478
Block Height 16,134,479
Block Height 16,134,480
Block Height 16,134,481
Block Height 16,134,482
Block Height 16,134,483
Block Height 16,134,484
Block Height 16,134,485
Block Height 16,134,486
Block Height 16,134,487
Block Height 16,134,488
Block Height 16,134,489
Block Height 16,134,490
Block Height 16,134,491
Block Height 16,134,492
Block Height 16,134,493
Block Height 16,134,494
Block Height 16,134,495
Block Height 16,134,496
Block Height 16,134,497
Block Height 16,134,498
Block Height 16,134,499
Block Height 16,134,500
Block Height 16,134,501
Block Height 16,134,502
Block Height 16,134,503
Block Height 16,134,504
Block Height 16,134,505
Block Height 16,134,506
Block Height 16,134,507
Block Height 16,134,508
Block Height 16,134,509
Block Height 16,134,510
Block Height 16,134,511
Block Height 16,134,512
Block Height 16,134,513
Block Height 16,134,514
Block Height 16,134,515
Block Height 16,134,516
Event {
  eventId: '16134516-2-3',
  extrinsicId: '16134516-2',
  extrinsicPosition: 3,
  blockNumber: '16,134,516',
  method: 'Transfer',
  section: 'balances',
  index: '0x0502',
  data: {
    from: '16FgoegQkWE5r7JALNMWN6CY7snq4jDP8ZdyimfJv71kwXBZ',
    to: '12xtAYsRUrmbniiWQqJtECiBQrMn8AypQcXhnQAc6RB6XkLW',
    amount: '13,799,031,569,036'
  }
}
Block Height 16,134,517
Block Height 16,134,518
Graph {
  "nodes": [
    {
      "id": "12xtAYsRUrmbniiWQqJtECiBQrMn8AypQcXhnQAc6RB6XkLW"
    },
    {
      "id": "125194e7cT6G2GRijSjT3Xc88ydr89io3rGUP2js5D2W2YyK"
    },
    {
      "id": "16FgoegQkWE5r7JALNMWN6CY7snq4jDP8ZdyimfJv71kwXBZ"
    }
  ],
  "links": [
    {
      "source": "12xtAYsRUrmbniiWQqJtECiBQrMn8AypQcXhnQAc6RB6XkLW",
      "target": "125194e7cT6G2GRijSjT3Xc88ydr89io3rGUP2js5D2W2YyK",
      "weight": 1
    },
    {
      "source": "16FgoegQkWE5r7JALNMWN6CY7snq4jDP8ZdyimfJv71kwXBZ",
      "target": "12xtAYsRUrmbniiWQqJtECiBQrMn8AypQcXhnQAc6RB6XkLW",
      "weight": 2
    }
  ]
}


```
</details>
