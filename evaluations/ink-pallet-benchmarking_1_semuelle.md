# Evaluation

- Status: In Progress
- Application Document:  https://github.com/w3f/Grants-Program/blob/master/applications/ink-pallet-benchmarking.md
- Milestone: 1
- Kusama Identity: [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- Previously successfully merged evaluation: All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/Nikhil-Desai-Talentica/substrate-node-template-benchmarking/blob/17be56bb0b3d3e209c97877854b7c2b8ed103513/LICENSE) | Unlicense |
| 0b. | Documentation | <ul><li>[ ] </li></ul> | [README](https://github.com/Nikhil-Desai-Talentica/substrate-node-template-benchmarking/blob/3d3614768695af687fe2e0cf931a6bd5af7472e6/README.md) | "We will provide [...] a live demo." |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [README](https://github.com/Nikhil-Desai-Talentica/substrate-node-template-benchmarking/tree/3d3614768695af687fe2e0cf931a6bd5af7472e6#pallet-extrinsic-benchmarking) | No unit tests here. But good description of usage and examples included. |
| 0e. | Article | <ul><li>[ ] </li></ul> | [sharepoint.com](https://talenticaall-my.sharepoint.com/:w:/g/personal/nikhil_desai_talentica_com/EcPSsxTWE5dBnOZS81uspkwBIIHoGI1RvAs6E0ETBsGiDg?e=NEtqmT) | Article contains project abstract and sample results. No interpretation or replication instructions. Graph missing axis descriptions. |
| 1.  | Performance metrics | <ul><li>[x] </li></ul> | — | Nothing to deliver here. |
| 2.  | Pallet: Basic Read & Write | <ul><li>[x] </li></ul> | [pallets/template](https://github.com/Nikhil-Desai-Talentica/substrate-node-template-benchmarking/tree/3d3614768695af687fe2e0cf931a6bd5af7472e6/pallets/template) | — |
| 3.  | Ink Smart Contract: Basic Read & Write | <ul><li>[x] </li></ul> | [test](https://github.com/Nikhil-Desai-Talentica/substrate-node-template-benchmarking/tree/3d3614768695af687fe2e0cf931a6bd5af7472e6/test) | — |
| 4. | Library: Benchmarking | <ul><li>[x] </li></ul> | [benchmarking.rs](https://github.com/Nikhil-Desai-Talentica/substrate-node-template-benchmarking/blob/3d3614768695af687fe2e0cf931a6bd5af7472e6/node/src/benchmarking.rs) | Useful output (median, stddev, etc.) |


## General Notes

Sample output:

```sh
❯ ./target/release/node-template benchmark extrinsic --pallet template --extrinsic get_some_num
2023-03-13 20:48:30 🔨 Initializing Genesis block/state (state: 0x78fb…e8a3, header-hash: 0xf244…1983)    
2023-03-13 20:48:30 👴 Loading GRANDPA authority set from genesis on what appears to be first startup.    
...
2023-03-13 20:48:32 Running 10 warmups...    
2023-03-13 20:48:32 Executing block 100 times    
2023-03-13 20:48:32 Building block, this takes some time...    
2023-03-13 20:49:11 Extrinsics per block: 12098    
2023-03-13 20:49:11 Running 10 warmups...    
2023-03-13 20:49:38 Executing block 100 times    
2023-03-13 20:54:09 Executing a template::get_some_num extrinsic takes[ns]:
Total: 22350511
Min: 179360, Max: 280708
Average: 223505, Median: 220187, Stddev: 21359.24
Percentiles 99th, 95th, 75th: 278430, 259679, 236890
```
