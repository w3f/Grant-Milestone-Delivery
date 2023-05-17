# Evaluation



- **Status:** Accepted
- **Application Document:** [XCM Tools](https://github.com/w3f/Grants-Program/blob/master/applications/xcm-tools.md)
- **Milestone:** 1
- **Kusama Identity:** randombishop (https://sub.id/5Gnixfp6vnznRkr91JgwkxYnCJCyHr8EaBzYfFsUKcTMzVYF)
- **Previously successfully merged evaluation:** 

| Number | Deliverable               | Accepted | Link                                                                                                                                                                         | Evaluation Notes |
|-------:|---------------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|
|    0a. | License                   | Yes      | https://github.com/gmajor-encrypt/scale.go/blob/master/LICENSE <br/> https://github.com/gmajor-encrypt/substrate-api-rpc                                                     | Apache 2.0       |
|    0b. | Documentation             | Yes      | https://github.com/gmajor-encrypt/scale.go/blob/master/extrinsic.go#L199 <br/> https://github.com/gmajor-encrypt/substrate-api-rpc                                           | OK               |
|    0c. | Testing and Testing Guide | Yes      | https://github.com/gmajor-encrypt/scale.go/blob/master/extrinsic_test.go#L54  <br/> https://github.com/gmajor-encrypt/substrate-api-rpc/blob/master/rpc/transactions_test.go | OK               |
|    0d. | Docker                    | Yes      | https://github.com/gmajor-encrypt/scale.go/blob/master/Dockerfile <br/> https://github.com/gmajor-encrypt/substrate-api-rpc/blob/master/Dockerfile                           | OK               |
|     1. | Sign message              | Yes      | https://github.com/gmajor-encrypt/substrate-api-rpc/tree/master/keyring                                                                                                      | OK               |
|     2. | Extrinsic encode          | Yes      | https://github.com/gmajor-encrypt/scale.go/blob/master/extrinsic.go#L198                                                                                                     | OK               |
|     3. | Send extrinsic            | Yes      | https://github.com/gmajor-encrypt/substrate-api-rpc/blob/master/rpc/transactions.go                                                                                          | OK               |
|     4. | Pull request              | Yes      | https://github.com/itering/substrate-api-rpc/pull/30/files <br/> https://github.com/itering/scale.go/pull/76                                                                 | OK               |


## Repositories
(all Apache 2.0 licensed)

|     Component | Repo                                                | Language |
|--------------:|-----------------------------------------------------|----------|
|   Scale Codec | https://github.com/gmajor-encrypt/scale.go          | Go       |
| Substrate RPC | https://github.com/gmajor-encrypt/substrate-api-rpc | Go       |




## General Notes

The team delivered the new feature as expected and got its PRs approved and merged in both upstream scale.go and substrate-api-rpc 
repositories.
