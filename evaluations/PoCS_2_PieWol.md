# Evaluation


- **Status:** accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/PoCS.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** All evaluations by PieWol


**Milestone 2**
| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
|0a.|License| <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/auguth/pocs/blob/master/LICENSE) | ok |
|0b.|Documentation| <ul><li>[x] </li></ul> | [Pallet Contracts](https://auguth.github.io/pocs/target/doc/pallet_contracts/) , [Pallet Staking](https://auguth.github.io/pocs/target/doc/pallet_staking/) | okay |
|0c.|Testing Guide | <ul><li>[x] </li></ul> | [Testing guide](https://github.com/auguth/pocs/blob/master/TESTING-GUIDE.md) | nice, changes were good.|
|0d.|Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/auguth/pocs/blob/master/Dockerfile) , [Docker Compose](https://github.com/auguth/pocs/blob/master/docker-compose.yml) , [DockerImage Pull](https://github.com/auguth/pocs/blob/master/README.md#docker-pull)| docker works |
|0e.| Article | <ul><li>[x] </li></ul> | [Article](https://medium.com/@auguthresearch/pocs-x-npos-d164688223fc)| ok|
|1.| Modify pallet staking for PoCS |<ul><li>[x] </li></ul> | [PoCS x NPoS (Milestone 2 - Core) PR#29](https://github.com/auguth/pocs/pull/29)| Thanks for changing to a minimum stake score.|

## General Notes
Thank you for the changes you have introduced. The article is now focussed on this very milestone.


## Testing
Great simplification of the testing guide!

benchmarks are now passing.

```
test result: ok. 312 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 239.33s

test result: ok. 160 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 16.12s
```








