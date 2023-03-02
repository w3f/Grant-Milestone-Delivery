# Evaluation



- **Status:** ACCEPTED
- **Application Document:** [ParaSpell_follow-up.md](https://github.com/w3f/Grants-Program/blob/master/applications/ParaSpell_follow-up.md)
- **Milestone:** 1
- **Kusama Identity:** randombishop (https://sub.id/5Gnixfp6vnznRkr91JgwkxYnCJCyHr8EaBzYfFsUKcTMzVYF)
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable                                                               | Accepted | Link                                                                                                                                                                                                                                                                                                      | Evaluation Notes                      |
|-------:|---------------------------------------------------------------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------|
|    0a. | License                                                                   | Yes      | [MIT](https://github.com/paraspell/sdk/blob/main/LICENSE)                                                                                                                                                                                                                                                 | MIT                                   | 
|    0b. | Documentation                                                             | Yes      | [Transfer.ts file](https://github.com/paraspell/sdk/blob/beta-pre-release/src/utils.ts),<br > [Usage guide file](https://github.com/paraspell/sdk/blob/beta-pre-release/README.md)                                                                                                                        | Looks good                            | 
|    0c. | Testing guide                                                             | Yes      | [Tests and refined unit testing commit](https://github.com/paraspell/sdk/commit/2747e85a0683fa652b8799365ac9cefd25251512#diff-7c8329b110fe849d911fcd5426704c9e41afb3dec9ec60d46c277391a12d6011), [Testing guide commit](https://github.com/paraspell/sdk/commit/3dd68b84406fd95ad8f2069051e7d6a44b575552) | 8 Tests - All pass but took 6 minutes | 
|    0d. | Docker                                                                    | Yes      | [Commit updating UI to newest SDK version](https://github.com/paraspell/ui/commit/af85a7014e0aca8e444b6f7dfd8216d8bc246476), [Guide on launching dockerized version](https://github.com/paraspell/ui#start-application-in-docker-container)                                                               | OK                                    | 
|     1. | Create scaffold template for Web3 projects                                | No       | [Subscaffold template repository link](https://github.com/paraspell/sub-scaffold)                                                                                                                                                                                                                         | OK                                    | 
|     2. | Implement support for checking asset compatibility through `asset pallet` | No       | [Asset pallet commit](https://github.com/paraspell/sdk/commit/2747e85a0683fa652b8799365ac9cefd25251512)                                                                                                                                                                                                   | OK                                    | 
|    3a. | Add support for nodes without xTokens pallet I                            | No       | [Commit adding compatible polkadotXCM nodes](https://github.com/paraspell/sdk/commit/9fc45356f7976066b0ee9ee5c44e1df4be35ed6a)                                                                                                                                                                            | OK                                    | 
|    3b. | Add support for nodes without xTokens pallet II                           | No       | [Commit adding compatible polkadotXCM nodes](https://github.com/paraspell/sdk/commit/9fc45356f7976066b0ee9ee5c44e1df4be35ed6a)                                                                                                                                                                            | OK                                    | 
|     4. | Make SDK easier to use                                                    | No       | [Merging scenarios commit](https://github.com/paraspell/sdk/commit/e7921bc68db74e6c2e2d3fc23166d145f063b3e3)                                                                                                                                                                                              | OK                                    |



## Repos
[SDK](https://github.com/paraspell/sdk)
[UI](https://github.com/paraspell/ui)
[Scaffolding](https://github.com/kodadot/sub-scaffold.git)


## General Notes

- Good delivery, the SDK is useful and very educational for devs willing to use the XCM technology and don't know where to start.

- Would be great if there was a video or a tutorial that uses the scaffolding repo to teach about XCM and how developers can easily make a UI that uses this capability.

- Tests pass but are very slow and require starting local instances of multiple networks.
I would recommend splitting tests into fast unit tests that don't require networks up and running vs integration tests that rely on the networks.
That way it can be easy and fast to run unit tests and perform first checks, then run integration tests later when ready for full checks.

- Little insignificant detail, just reporting it here cause I found it annoying in my environment: the repos are named `ui` and `sdk`, very common names that a dev could want to rename locally.
Would be nice if the scripts didn't assume the repo name like here in the Makefile:
```
initialize:
	cd .. && chmod 777 ./ui
```
