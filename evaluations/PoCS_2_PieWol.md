# Evaluation


- **Status:** in progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/PoCS.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** All evaluations by PieWol


**Milestone 2**
| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
|0a.|License| <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/auguth/pocs/blob/master/LICENSE) | - |
|0b.|Documentation| <ul><li>[x] </li></ul> | [Pallet Contracts](https://auguth.github.io/pocs/target/doc/pallet_contracts/) , [Pallet Staking](https://auguth.github.io/pocs/target/doc/pallet_staking/) | okay |
|0c.|Testing Guide | <ul><li>[ ] </li></ul> | [Testing guide](https://github.com/auguth/pocs/blob/master/TESTING-GUIDE.md) | nice, changes were good. benchmarks are not passing.|
|0d.|Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/auguth/pocs/blob/master/Dockerfile) , [Docker Compose](https://github.com/auguth/pocs/blob/master/docker-compose.yml) , [DockerImage Pull](https://github.com/auguth/pocs/blob/master/README.md#docker-pull)| docker works |
|0e.| Article | <ul><li>[x] </li></ul> | [Article (Draft)](https://github.com/auguth/pocs/blob/master/ARTICLE.md)| okay |
|1.| Modify pallet staking for PoCS |<ul><li>[ ] </li></ul> | [PoCS x NPoS (Milestone 2 - Core) PR#29](https://github.com/auguth/pocs/pull/29)| Thanks for changing to a minimum stake score. please check the benchmarks.|

## General Notes
Thank you for the changes you have introduced. The article is now focussed on this very milestone.

There is still a lot of warnings emitted on compilation which are really easy to fix.

## Tests pallet-staking
All regular tests are passing. Runtime benchmarks are throwing some errors.

<details>

	error[E0046]: not all trait items implemented, missing: `score_update_worst_case`
		--> /root/pocs/pallets/staking/src/pallet/impls.rs:1429:1
		|
	1429 | impl<T: Config> SortedListProvider<T::AccountId> for UseValidatorsMap<T> {
		| ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ missing `score_update_worst_case` in implementation
		|
		= help: implement the missing item: `fn score_update_worst_case(_: &<T as frame_system::Config>::AccountId, _: bool) -> <Self as frame_election_provider_support::SortedListProvider<<T as frame_system::Config>::AccountId>>::Score { todo!() }`

	error[E0046]: not all trait items implemented, missing: `score_update_worst_case`
		--> /root/pocs/pallets/staking/src/pallet/impls.rs:1495:1
		|
	1495 | impl<T: Config> SortedListProvider<T::AccountId> for UseNominatorsAndValidatorsMap<T> {
		| ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ missing `score_update_worst_case` in implementation
		|
		= help: implement the missing item: `fn score_update_worst_case(_: &<T as frame_system::Config>::AccountId, _: bool) -> <Self as frame_election_provider_support::SortedListProvider<<T as frame_system::Config>::AccountId>>::Score { todo!() }`

	For more information about this error, try `rustc --explain E0046`.
	warning: `pallet-staking` (lib) generated 1 warning
	error: could not compile `pallet-staking` (lib) due to 2 previous errors; 1 warning emitted
</details>


## Testing Guide
Great simplification of the testing guide!




