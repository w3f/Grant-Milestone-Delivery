# Evaluation



- **Status:** ACCEPTED
- **Application Document:** [anagolay-project-idiyanale](https://github.com/w3f/Grants-Program/blob/master/applications/anagolay-project-idiyanale-multi-token-community-contributions-for-verified-creators.md)
- **Milestone:** 2
- **Kusama Identity:** randombishop (https://sub.id/5Gnixfp6vnznRkr91JgwkxYnCJCyHr8EaBzYfFsUKcTMzVYF)
- **Previously successfully merged evaluation:** [Milestone 1](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/anagolay-project-idiyanale-multi-token_1_dsm-w3f.md)

| Number | Deliverable               | Accepted | Link                                                                                                                                                                                              | Evaluation Notes |
|-------:|---------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|
|    0a. | License                   |          | [License file](https://github.com/anagolay/anagolay-chain/blob/main/pallets/tipping/LICENSE)                                                                                                      | GNU              |
|    0b. | Documentation             |          | [Rust docs](https://bafybeierivi7ej4ofbti2hcgdvthunu6heqj74vpnovlwn4rlw52sa26ga.ipfs.anagolay.network/anagolay/)                                                                                  | OK               |
|    0c. | Testing and Testing Guide |          | In root of the repo runtime repo run `makers ci-flow-light`                                                                                                                                       | OK               |
|    0d. | Docker                    |          | `registry.gitlab.com/anagolay/anagolay/idiyanale:fb29d2a0`                                                                                                                                        | OK               |
|    0e. | Demo video                |          | https://www.youtube.com/watch?v=uySt392C6TE                                                                                                                                                       | OK               |
|     1. | Substrate module: tipping |          | [Pallet source code](https://github.com/anagolay/anagolay-chain/tree/main/pallets/tipping)                                                                                                        | OK               |
|     2. | Anagolay Extension        |          | [Extension source code](https://github.com/anagolay/anagolay-js-sdk/tree/main/extension)                                                                                                          | OK               |
|     3. | UI: `my-channels` page    |          | [Anagolay App](https://bafybeiai2abe5y2nbgydjopuxhg6sdicim22gu4zgkpmcvu7apurpdlguq.ipfs.anagolay.network/profile/) & [App Source Code](https://github.com/anagolay/anagolay-js-sdk/tree/main/app) | OK               |

## Repositories
(GNU licensed)

| Component | Repo                                        | Language |
|----------:|---------------------------------------------|----------|
| Substrate | https://github.com/anagolay/anagolay-chain  | Rust     |
| Extension | https://github.com/anagolay/anagolay-js-sdk | JS       |


## General Notes

* Running tasks without gitpod is possible but not clearly indicated in the docs, 
would be nice to have a path in the docs that's not dependent on particular proprietary dev environments (no gitpod nor Visual Studio.) 

* `cargo audit`
```
error: 6 vulnerabilities found!
warning: 7 allowed warnings found
```

* `makers ci-flow-light`
```
Summary [   0.127s] 74 tests run: 74 passed, 0 skipped
```


* I personally worked on a similar idea [here](https://github.com/randombishop/wika_node) so I am glad to see this being built. 
In the Wika Network pallets, you can find a tipping system as well that rewards previous tippers.
There's also a similar feature to yours where an owner can register a particular webpage (by marking it) rather than a domain name verified through DNS.
Maybe something you can re-use or adapt in Anagolay...