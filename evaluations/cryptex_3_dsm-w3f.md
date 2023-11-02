# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/cryptex.md
- **Milestone:** 3
- **Previously successfully merged evaluation:** dsmw3f, keeganquigley

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.** | License  |<ul><li>[x] </li></ul>| https://github.com/ideal-lab5/substrate/blob/etf/LICENSE-GPL3 | |
| **0b.** | Documentation  |<ul><li>[ ] </li></ul>| https://ideal-lab5.github.io | Not fully evaluated yet. |
| **0c.** | Testing and Testing Guide  |<ul><li>[ ] </li></ul>| https://docs.google.com/document/d/1SJ9bf2ALFf-UBG-W4gF63aQS1_9FywDQgBry1oxRv64/edit?usp=sharing | Not fully evaluated yet. |
| **0d.** | Docker   |<ul><li>[ ] </li></ul>| [etf node](https://hub.docker.com/repository/docker/ideallabs/etf/general), [etf-auction-ui](https://hub.docker.com/repository/docker/ideallabs/etf-auction-ui/general)   | Not fully evaluated yet. |
| **0e.** | Article  |<ul><li>[x] </li></ul>| [milestone 3 substack draft](https://ideallabs.substack.com/p/509e34d1-3d7e-43f0-a7d5-54e8215dae1e)  | |
|   1. | Smart Contract: Auction Platform |<ul><li>[ ] </li></ul>| [contracts repo](https://github.com/ideal-lab5/contracts) | Have some problems. |
|   2. | UI/SDK: Auction Interface  |<ul><li>[ ] </li></ul>| [etf-auction-ui repo](https://github.com/ideal-lab5/etf-auction-ui) hosted at [(infura IPFS)](http://auction.idealabs.network) and [vercel](https://etf-auction.vercel.app/), [etf-sdk](https://github.com/ideal-lab5/etf-sdk), [typescript lib](https://github.com/ideal-lab5/etf.js) | Have some problems. |
|   3. | UI + Testnet Deployment |<ul><li>[ ] </li></ul>| nodes hosted at [etf0.idealabs.network, etf1.idealabs.network], [Grafana](http://etf0.idealabs.network:3000/d/PUYzGbwWz/substrate-node-template-metrics?orgId=1), [prometheus](http://etf0.idealabs.network:9090/) [ipfs-hosted UI - http://auction.idealabs.network](http://auction.idealabs.network) | I need some balance to test this. |

## Evaluation V3 (Keegan Quigley)

<details>

 <summary>Docker commands are successful</summary>
 ```sh
docker run -p 9944:9944 -it --rm --name etf-node-0 ideallabs/etf --unsafe-rpc-external --validator --dev --tmp
WARNING: The requested image's platform (linux/amd64) does not match the detected host platform (linux/arm64/v8) and no specific platform was requested
2023-11-02 04:19:38 EtF Node
2023-11-02 04:19:38 ✌️  version 4.0.0-dev-cf02da969fa
2023-11-02 04:19:38 ❤️  by Substrate DevHub <https://github.com/substrate-developer-hub>, 2017-2023
2023-11-02 04:19:38 📋 Chain specification: Development
2023-11-02 04:19:38 🏷  Node name: probable-lunch-5771
2023-11-02 04:19:38 👤 Role: AUTHORITY
2023-11-02 04:19:38 💾 Database: RocksDb at /tmp/substratedFcloG/chains/dev/db/full
2023-11-02 04:19:38 ⛓  Native runtime: node-template-100 (node-template-1.tx1.au1)
2023-11-02 04:19:39 You're running on a system with a broken `madvise(MADV_DONTNEED)` implementation. This will result in lower performance.
2023-11-02 04:19:45 🔨 Initializing Genesis block/state (state: 0x4184…f840, header-hash: 0xc090…3722)
2023-11-02 04:19:45 👴 Loading GRANDPA authority set from genesis on what appears to be first startup.
2023-11-02 04:19:51 Using default protocol ID "sup" because none is configured in the chain specs
2023-11-02 04:19:51 🏷  Local node identity is: 12D3KooWLKW8DeC2kJs1P4nFS3CQSG5W3qdbGk7FCahPemiUjnHE
2023-11-02 04:19:51 💻 Operating system: linux
2023-11-02 04:19:51 💻 CPU architecture: x86_64
2023-11-02 04:19:51 💻 Target environment: gnu
2023-11-02 04:19:51 💻 Memory: 7844MB
2023-11-02 04:19:51 💻 Kernel: 6.4.16-linuxkit
2023-11-02 04:19:51 💻 Linux distribution: Ubuntu 20.04.6 LTS
2023-11-02 04:19:51 💻 Virtual machine: no
2023-11-02 04:19:51 📦 Highest known block at #0
2023-11-02 04:19:51 〽️ Prometheus exporter started at 127.0.0.1:9615
2023-11-02 04:19:51 Running JSON-RPC server: addr=0.0.0.0:9944, allowed origins=["*"]
2023-11-02 04:19:56 💤 Idle (0 peers), best: #0 (0xc090…3722), finalized #0 (0xc090…3722), ⬇ 0 ⬆ 0
2023-11-02 04:20:00 🙌 Starting consensus session on top of parent 0xc090a537eeb4251e352cf672192462f76e4341901210666d2b58251041723722
2023-11-02 04:20:00 🎁 Prepared block for proposing at 1 (9 ms) [hash: 0x8c05471233841c2f6f80eaaac42f9e0f4224d668c71433c02665dccd967284c7; parent_hash: 0xc090…3722; extrinsics (1): [0xa9c9…2951]]
2023-11-02 04:20:00 🔖 Pre-sealed block for proposal at 1. Hash now 0x0b6a84b14c3b5e5f7ccce426f09552dc33e06578cd0b18955796ea3aa354888d, previously 0x8c05471233841c2f6f80eaaac42f9e0f4224d668c71433c02665dccd967284c7.
2023-11-02 04:20:00 ✨ Imported #1 (0x0b6a…888d)
2023-11-02 04:20:02 💤 Idle (0 peers), best: #1 (0x0b6a…888d), finalized #0 (0xc090…3722), ⬇ 0 ⬆ 0
```
</details>

<details>

  <summary>Benchmarking tests are successful</summary>
  ```rust
running 5 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test benchmarking::benchmarks::benchmark_tests::test_benchmarks ... ok
test tests::it_fails_to_update_generator_when_not_decodable ... ok
test tests::it_sets_the_genesis_state ... ok
test tests::it_allows_root_to_update_generator ... ok

test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.10s

   Doc-tests pallet-etf

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```</details>

## Evaluation V2

### Smart Contract

All tests passed.

<details>

```
 	Running unittests lib.rs (target/debug/deps/erc721-40638d9358009cb8)

running 10 tests
test erc721::tests::mint_works ... ok
test erc721::tests::burn_works ... ok
test erc721::tests::mint_existing_should_fail ... ok
test erc721::tests::burn_fails_token_not_found ... ok
test erc721::tests::invalid_transfer_should_fail ... ok
test erc721::tests::transfer_works ... ok
test erc721::tests::burn_fails_not_owner ... ok
test erc721::tests::approved_for_all_works ... ok
test erc721::tests::not_approved_transfer_should_fail ... ok
test erc721::tests::approved_transfer_works ... ok

test result: ok. 10 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

 	Running unittests lib.rs (target/debug/deps/tlock_proxy-b8e53100ed1b79b2)

running 3 tests
test tlock_proxy::e2e_tests::default_works ... ok
test tlock_proxy::e2e_tests::bid_works has been running for over 60 seconds
test tlock_proxy::e2e_tests::new_auction_works has been running for over 60 seconds
test tlock_proxy::e2e_tests::bid_works ... ok
test tlock_proxy::e2e_tests::new_auction_works ... ok

test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 73.62s

 	Running unittests lib.rs (target/debug/deps/vickrey_auction-a268f9b7af4bfb23)

running 5 tests
test vickrey_auction::tests::bid_fails_when_not_proxy ... ok
test vickrey_auction::tests::bid_success ... ok
test vickrey_auction::tests::complete_auction_success_many_participants_all_valid ... ok
test vickrey_auction::tests::complete_auction_success_single_participant ... ok
test vickrey_auction::tests::complete_auction_success_many_participants_some_valid ... ok

test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests erc721

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests tlock_proxy

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests vickrey_auction

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

```

</details>

### UI

When I started the front end, I received this message "Provide a valid value for NEXT_PUBLIC_NODE_DETAILS". That occurred because, in the documentation, the variable name is `NEXT_PUBLIC_NODE_DETAIL`. Please fix this.

When I tried to create the auction, the transaction occurred but wasn't successful.

![pasted image 0 (21)](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/8daeaa6e-0c69-416e-8008-feae57bad2af)


Because of that, I tried using the [external one](http://auction.idealabs.network). It worked. I created the auction, bid, completed, and claimed but I think the minimum bid isn't working because it doesn't start with the minimum bid that I chose, and it doesn't increase when it receives a new bid. I received these errors when testing.

![pasted image 0 (22)](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/de4ef125-2184-46d6-8d66-4083ba81b792)


## Evaluation V1

### Smart Contract

I ran the unit tests, and all tests for `erc721` passed, and I was not able to run the tests for the `vickrey_auction`.

- erc721
    ```
    user@localhost:~/Documents/cryptex/contracts/timelock_auction/erc721$ cargo test
        Finished test [unoptimized + debuginfo] target(s) in 0.10s
        Running unittests lib.rs (/home/user/Documents/cryptex/contracts/timelock_auction/target/debug/deps/erc721-f46842367f9c39f2)

    running 10 tests
    test erc721::tests::burn_fails_token_not_found ... ok
    test erc721::tests::burn_fails_not_owner ... ok
    test erc721::tests::mint_works ... ok
    test erc721::tests::burn_works ... ok
    test erc721::tests::mint_existing_should_fail ... ok
    test erc721::tests::invalid_transfer_should_fail ... ok
    test erc721::tests::transfer_works ... ok
    test erc721::tests::not_approved_transfer_should_fail ... ok
    test erc721::tests::approved_transfer_works ... ok
    test erc721::tests::approved_for_all_works ... ok

    test result: ok. 10 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests erc721

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
    ```

- vickrey_auction

    <details>
    ```
    user@localhost:~/Documents/cryptex/contracts/timelock_auction/vickrey_auction$ cargo test
    Compiling vickrey_auction v0.1.0 (/home/user/Documents/cryptex/contracts/timelock_auction/vickrey_auction)
    error[E0433]: failed to resolve: could not find `Error` in the crate root
    --> vickrey_auction/lib.rs:300:40
        |
    300 |         	assert_eq!(res, Err(crate::Error::NotProxy));
        |                                    	^^^^^ could not find `Error` in the crate root
        |
    help: consider importing one of these items
        |
    263 +     	use core::error::Error;
        |
    263 +     	use core::fmt::Error;
        |
    263 +     	use crate::vickrey_auction::Error;
        |
    263 +     	use ink_e2e::Error;
        |
        and 7 other candidates
    help: if you import `Error`, refer to it directly
        |
    300 -         	assert_eq!(res, Err(crate::Error::NotProxy));
    300 +         	assert_eq!(res, Err(Error::NotProxy));
        |

    error[E0308]: mismatched types
    --> vickrey_auction/lib.rs:316:40
        |
    316 |         	let res = auction.complete(revealed_bids);
        |                           	-------- ^^^^^^^^^^^^^ expected `Vec<RevealedBid<...>>`, found `Vec<(AccountId, ...)>`
        |                           	|
        |                           	arguments to this method are incorrect
        |
        = note: expected struct `sp_application_crypto::Vec<RevealedBid<ink::ink_primitives::AccountId>>`
                found struct `sp_application_crypto::Vec<(ink::ink_primitives::AccountId, {integer})>`
    note: method defined here
    --> vickrey_auction/lib.rs:213:18
        |
    213 |       	pub fn complete(
        |              	^^^^^^^^
    214 |           	&mut self,
    215 |           	revealed_bids: Vec<RevealedBid<AccountId>>,
        |           	------------------------------------------

    error[E0277]: the type `[RevealedBid<ink::ink_primitives::AccountId>]` cannot be indexed by `ink::ink_primitives::AccountId`
    --> vickrey_auction/lib.rs:318:50
        |
    318 |         	assert_eq!(auction.revealed_bids.get(accounts.alice), Some(4));
        |                                          	--- ^^^^^^^^^^^^^^ slice indices are of type `usize` or ranges of `usize`
        |                                          	|
        |                                          	required by a bound introduced by this call
        |
        = help: the trait `SliceIndex<[RevealedBid<ink::ink_primitives::AccountId>]>` is not implemented for `ink::ink_primitives::AccountId`
    note: required by a bound in `core::slice::<impl [T]>::get`
    --> /home/user/.rustup/toolchains/stable-x86_64-unknown-linux-gnu/lib/rustlib/src/rust/library/core/src/slice/mod.rs:603:12
        |
    601 | 	pub fn get<I>(&self, index: I) -> Option<&I::Output>
        |        	--- required by a bound in this associated function
    602 | 	where
    603 |     	I: SliceIndex<Self>,
        |        	^^^^^^^^^^^^^^^^ required by this bound in `core::slice::<impl [T]>::get`

    error[E0308]: mismatched types
    --> vickrey_auction/lib.rs:318:67
        |
    318 |         	assert_eq!(auction.revealed_bids.get(accounts.alice), Some(4));
        |                                                               	^^^^^^^ expected `Option<&_>`, found `Option<{integer}>`
        |
        = note: expected enum `Option<&_>`
                found enum `Option<{integer}>`
    help: try using `.as_ref()` to convert `Option<{integer}>` to `Option<&_>`
        |
    318 |         	assert_eq!(auction.revealed_bids.get(accounts.alice), Some(4).as_ref());
        |                                                                      	+++++++++

    error[E0308]: mismatched types
    --> vickrey_auction/lib.rs:319:40
        |
    319 |         	assert_eq!(auction.winner, Some((accounts.alice, 0)))
        |                                    	^^^^^^^^^^^^^^^^^^^^^^^^^ expected `Option<AuctionResult<..., ...>>`, found `Option<(AccountId, ...)>`
        |
        = note: expected enum `Option<AuctionResult<ink::ink_primitives::AccountId, u128>>`
                found enum `Option<(ink::ink_primitives::AccountId, {integer})>`

    error[E0308]: mismatched types
    --> vickrey_auction/lib.rs:344:40
        |
    344 |         	let res = auction.complete(revealed_bids);
        |                           	-------- ^^^^^^^^^^^^^ expected `Vec<RevealedBid<...>>`, found `Vec<(AccountId, u128)>`
        |                           	|
        |                           	arguments to this method are incorrect
        |
        = note: expected struct `sp_application_crypto::Vec<RevealedBid<ink::ink_primitives::AccountId>>`
                found struct `sp_application_crypto::Vec<(ink::ink_primitives::AccountId, u128)>`
    note: method defined here
    --> vickrey_auction/lib.rs:213:18
        |
    213 |       	pub fn complete(
        |              	^^^^^^^^
    214 |           	&mut self,
    215 |           	revealed_bids: Vec<RevealedBid<AccountId>>,
        |           	------------------------------------------

    error[E0277]: the type `[RevealedBid<ink::ink_primitives::AccountId>]` cannot be indexed by `ink::ink_primitives::AccountId`
    --> vickrey_auction/lib.rs:347:50
        |
    347 |         	assert_eq!(auction.revealed_bids.get(accounts.alice), Some(4));
        |                                          	--- ^^^^^^^^^^^^^^ slice indices are of type `usize` or ranges of `usize`
        |                                          	|
        |                                          	required by a bound introduced by this call
        |
        = help: the trait `SliceIndex<[RevealedBid<ink::ink_primitives::AccountId>]>` is not implemented for `ink::ink_primitives::AccountId`
    note: required by a bound in `core::slice::<impl [T]>::get`
    --> /home/user/.rustup/toolchains/stable-x86_64-unknown-linux-gnu/lib/rustlib/src/rust/library/core/src/slice/mod.rs:603:12
        |
    601 | 	pub fn get<I>(&self, index: I) -> Option<&I::Output>
        |        	--- required by a bound in this associated function
    602 | 	where
    603 |     	I: SliceIndex<Self>,
        |        	^^^^^^^^^^^^^^^^ required by this bound in `core::slice::<impl [T]>::get`

    error[E0308]: mismatched types
    --> vickrey_auction/lib.rs:347:67
        |
    347 |         	assert_eq!(auction.revealed_bids.get(accounts.alice), Some(4));
        |                                                               	^^^^^^^ expected `Option<&_>`, found `Option<{integer}>`
        |
        = note: expected enum `Option<&_>`
                found enum `Option<{integer}>`
    help: try using `.as_ref()` to convert `Option<{integer}>` to `Option<&_>`
        |
    347 |         	assert_eq!(auction.revealed_bids.get(accounts.alice), Some(4).as_ref());
        |                                                                      	+++++++++

    error[E0277]: the type `[RevealedBid<ink::ink_primitives::AccountId>]` cannot be indexed by `ink::ink_primitives::AccountId`
    --> vickrey_auction/lib.rs:348:50
        |
    348 |         	assert_eq!(auction.revealed_bids.get(accounts.bob), Some(6));
        |                                          	--- ^^^^^^^^^^^^ slice indices are of type `usize` or ranges of `usize`
        |                                          	|
        |                                          	required by a bound introduced by this call
        |
        = help: the trait `SliceIndex<[RevealedBid<ink::ink_primitives::AccountId>]>` is not implemented for `ink::ink_primitives::AccountId`
    note: required by a bound in `core::slice::<impl [T]>::get`
    --> /home/user/.rustup/toolchains/stable-x86_64-unknown-linux-gnu/lib/rustlib/src/rust/library/core/src/slice/mod.rs:603:12
        |
    601 | 	pub fn get<I>(&self, index: I) -> Option<&I::Output>
        |        	--- required by a bound in this associated function
    602 | 	where
    603 |     	I: SliceIndex<Self>,
        |        	^^^^^^^^^^^^^^^^ required by this bound in `core::slice::<impl [T]>::get`

    error[E0308]: mismatched types
    --> vickrey_auction/lib.rs:348:65
        |
    348 |         	assert_eq!(auction.revealed_bids.get(accounts.bob), Some(6));
        |                                                             	^^^^^^^ expected `Option<&_>`, found `Option<{integer}>`
        |
        = note: expected enum `Option<&_>`
                found enum `Option<{integer}>`
    help: try using `.as_ref()` to convert `Option<{integer}>` to `Option<&_>`
        |
    348 |         	assert_eq!(auction.revealed_bids.get(accounts.bob), Some(6).as_ref());
        |                                                                    	+++++++++

    error[E0277]: the type `[RevealedBid<ink::ink_primitives::AccountId>]` cannot be indexed by `ink::ink_primitives::AccountId`
    --> vickrey_auction/lib.rs:349:50
        |
    349 |         	assert_eq!(auction.revealed_bids.get(accounts.charlie), Some(1));
        |                                          	--- ^^^^^^^^^^^^^^^^ slice indices are of type `usize` or ranges of `usize`
        |                                          	|
        |                                          	required by a bound introduced by this call
        |
        = help: the trait `SliceIndex<[RevealedBid<ink::ink_primitives::AccountId>]>` is not implemented for `ink::ink_primitives::AccountId`
    note: required by a bound in `core::slice::<impl [T]>::get`
    --> /home/user/.rustup/toolchains/stable-x86_64-unknown-linux-gnu/lib/rustlib/src/rust/library/core/src/slice/mod.rs:603:12
        |
    601 | 	pub fn get<I>(&self, index: I) -> Option<&I::Output>
        |        	--- required by a bound in this associated function
    602 | 	where
    603 |     	I: SliceIndex<Self>,
        |        	^^^^^^^^^^^^^^^^ required by this bound in `core::slice::<impl [T]>::get`

    error[E0308]: mismatched types
    --> vickrey_auction/lib.rs:349:69
        |
    349 |         	assert_eq!(auction.revealed_bids.get(accounts.charlie), Some(1));
        |                                                                 	^^^^^^^ expected `Option<&_>`, found `Option<{integer}>`
        |
        = note: expected enum `Option<&_>`
                found enum `Option<{integer}>`
    help: try using `.as_ref()` to convert `Option<{integer}>` to `Option<&_>`
        |
    349 |         	assert_eq!(auction.revealed_bids.get(accounts.charlie), Some(1).as_ref());
        |                                                                        	+++++++++

    error[E0308]: mismatched types
    --> vickrey_auction/lib.rs:351:40
        |
    351 |         	assert_eq!(auction.winner, Some((accounts.bob, b1)))
        |                                    	^^^^^^^^^^^^^^^^^^^^^^^^ expected `Option<AuctionResult<..., ...>>`, found `Option<(AccountId, u128)>`
        |
        = note: expected enum `Option<AuctionResult<ink::ink_primitives::AccountId, u128>>`
                found enum `Option<(ink::ink_primitives::AccountId, u128)>`

    error[E0308]: mismatched types
    --> vickrey_auction/lib.rs:386:40
        |
    386 |         	let res = auction.complete(revealed_bids);
        |                           	-------- ^^^^^^^^^^^^^ expected `Vec<RevealedBid<...>>`, found `Vec<(AccountId, u128)>`
        |                           	|
        |                           	arguments to this method are incorrect
        |
        = note: expected struct `sp_application_crypto::Vec<RevealedBid<ink::ink_primitives::AccountId>>`
                found struct `sp_application_crypto::Vec<(ink::ink_primitives::AccountId, u128)>`
    note: method defined here
    --> vickrey_auction/lib.rs:213:18
        |
    213 |       	pub fn complete(
        |              	^^^^^^^^
    214 |           	&mut self,
    215 |           	revealed_bids: Vec<RevealedBid<AccountId>>,
        |           	------------------------------------------

    error[E0277]: the type `[RevealedBid<ink::ink_primitives::AccountId>]` cannot be indexed by `ink::ink_primitives::AccountId`
    --> vickrey_auction/lib.rs:389:50
        |
    389 |         	assert_eq!(auction.revealed_bids.get(accounts.alice), Some(4));
        |                                          	--- ^^^^^^^^^^^^^^ slice indices are of type `usize` or ranges of `usize`
        |                                          	|
        |                                          	required by a bound introduced by this call
        |
        = help: the trait `SliceIndex<[RevealedBid<ink::ink_primitives::AccountId>]>` is not implemented for `ink::ink_primitives::AccountId`
    note: required by a bound in `core::slice::<impl [T]>::get`
    --> /home/user/.rustup/toolchains/stable-x86_64-unknown-linux-gnu/lib/rustlib/src/rust/library/core/src/slice/mod.rs:603:12
        |
    601 | 	pub fn get<I>(&self, index: I) -> Option<&I::Output>
        |        	--- required by a bound in this associated function
    602 | 	where
    603 |     	I: SliceIndex<Self>,
        |        	^^^^^^^^^^^^^^^^ required by this bound in `core::slice::<impl [T]>::get`

    error[E0308]: mismatched types
    --> vickrey_auction/lib.rs:389:67
        |
    389 |         	assert_eq!(auction.revealed_bids.get(accounts.alice), Some(4));
        |                                                               	^^^^^^^ expected `Option<&_>`, found `Option<{integer}>`
        |
        = note: expected enum `Option<&_>`
                found enum `Option<{integer}>`
    help: try using `.as_ref()` to convert `Option<{integer}>` to `Option<&_>`
        |
    389 |         	assert_eq!(auction.revealed_bids.get(accounts.alice), Some(4).as_ref());
        |                                                                      	+++++++++

    error[E0277]: the type `[RevealedBid<ink::ink_primitives::AccountId>]` cannot be indexed by `ink::ink_primitives::AccountId`
    --> vickrey_auction/lib.rs:390:50
        |
    390 |         	assert_eq!(auction.revealed_bids.get(accounts.bob), Some(6));
        |                                          	--- ^^^^^^^^^^^^ slice indices are of type `usize` or ranges of `usize`
        |                                          	|
        |                                          	required by a bound introduced by this call
        |
        = help: the trait `SliceIndex<[RevealedBid<ink::ink_primitives::AccountId>]>` is not implemented for `ink::ink_primitives::AccountId`
    note: required by a bound in `core::slice::<impl [T]>::get`
    --> /home/user/.rustup/toolchains/stable-x86_64-unknown-linux-gnu/lib/rustlib/src/rust/library/core/src/slice/mod.rs:603:12
        |
    601 | 	pub fn get<I>(&self, index: I) -> Option<&I::Output>
        |        	--- required by a bound in this associated function
    602 | 	where
    603 |     	I: SliceIndex<Self>,
        |        	^^^^^^^^^^^^^^^^ required by this bound in `core::slice::<impl [T]>::get`

    error[E0308]: mismatched types
    --> vickrey_auction/lib.rs:390:65
        |
    390 |         	assert_eq!(auction.revealed_bids.get(accounts.bob), Some(6));
        |                                                             	^^^^^^^ expected `Option<&_>`, found `Option<{integer}>`
        |
        = note: expected enum `Option<&_>`
                found enum `Option<{integer}>`
    help: try using `.as_ref()` to convert `Option<{integer}>` to `Option<&_>`
        |
    390 |         	assert_eq!(auction.revealed_bids.get(accounts.bob), Some(6).as_ref());
        |                                                                    	+++++++++

    error[E0277]: the type `[RevealedBid<ink::ink_primitives::AccountId>]` cannot be indexed by `ink::ink_primitives::AccountId`
    --> vickrey_auction/lib.rs:391:50
        |
    391 |         	assert_eq!(auction.revealed_bids.get(accounts.charlie), None);
        |                                          	--- ^^^^^^^^^^^^^^^^ slice indices are of type `usize` or ranges of `usize`
        |                                          	|
        |                                          	required by a bound introduced by this call
        |
        = help: the trait `SliceIndex<[RevealedBid<ink::ink_primitives::AccountId>]>` is not implemented for `ink::ink_primitives::AccountId`
    note: required by a bound in `core::slice::<impl [T]>::get`
    --> /home/user/.rustup/toolchains/stable-x86_64-unknown-linux-gnu/lib/rustlib/src/rust/library/core/src/slice/mod.rs:603:12
        |
    601 | 	pub fn get<I>(&self, index: I) -> Option<&I::Output>
        |        	--- required by a bound in this associated function
    602 | 	where
    603 |     	I: SliceIndex<Self>,
        |        	^^^^^^^^^^^^^^^^ required by this bound in `core::slice::<impl [T]>::get`

    error[E0308]: mismatched types
    --> vickrey_auction/lib.rs:394:40
        |
    394 |         	assert_eq!(auction.winner, Some((accounts.bob, b1)))
        |                                    	^^^^^^^^^^^^^^^^^^^^^^^^ expected `Option<AuctionResult<..., ...>>`, found `Option<(AccountId, u128)>`
        |
        = note: expected enum `Option<AuctionResult<ink::ink_primitives::AccountId, u128>>`
                found enum `Option<(ink::ink_primitives::AccountId, u128)>`

    Some errors have detailed explanations: E0277, E0308, E0433.
    For more information about an error, try `rustc --explain E0277`.
    error: could not compile `vickrey_auction` (lib test) due to 20 previous errors
    warning: build failed, waiting for other jobs to finish...
    ```

    </details>

For the e2e tests, I received the same errors for the `vickrey_auction` and these errors.

<details>

```
warning: unused import: `super::*`
   --> tlock_proxy/lib.rs:377:13
    |
377 |         use super::*;
    |             ^^^^^^^^
    |
    = note: `#[warn(unused_imports)]` on by default

error[E0599]: no method named `is_empty` found for enum `std::result::Result` in the current scope
    --> tlock_proxy/lib.rs:424:62
     |
424  |             assert!(matches!(get_auctions_res.return_value().is_empty(), true));
     |                                                              ^^^^^^^^ method not found in `Result<Vec<AuctionDetails>, Error>`
     |
note: the method `is_empty` exists on the type `Vec<tlock_proxy::AuctionDetails>`
    --> /home/issamu/.rustup/toolchains/nightly-x86_64-unknown-linux-gnu/lib/rustlib/src/rust/library/alloc/src/vec/mod.rs:2119:5
     |
2119 |     pub fn is_empty(&self) -> bool {
     |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
help: consider using `Result::expect` to unwrap the `Vec<tlock_proxy::AuctionDetails>` value, panicking if the value is a `Result::Err`
     |
424  |             assert!(matches!(get_auctions_res.return_value().expect("REASON").is_empty(), true));
     |                                                             +++++++++++++++++

error[E0063]: missing fields `bids` and `published` in initializer of `tlock_proxy::AuctionDetails`
   --> tlock_proxy/lib.rs:486:44
    |
486 |             let expected_auction_details = AuctionDetails {
    |                                            ^^^^^^^^^^^^^^ missing `bids` and `published`

error[E0599]: no method named `len` found for enum `std::result::Result` in the current scope
    --> tlock_proxy/lib.rs:495:62
     |
495  |             assert!(matches!(get_auctions_res.return_value().len(), 1));
     |                                                              ^^^ method not found in `Result<Vec<AuctionDetails>, Error>`
     |
note: the method `len` exists on the type `Vec<tlock_proxy::AuctionDetails>`
    --> /home/issamu/.rustup/toolchains/nightly-x86_64-unknown-linux-gnu/lib/rustlib/src/rust/library/alloc/src/vec/mod.rs:2103:5
     |
2103 |     pub fn len(&self) -> usize {
     |     ^^^^^^^^^^^^^^^^^^^^^^^^^^
help: consider using `Result::expect` to unwrap the `Vec<tlock_proxy::AuctionDetails>` value, panicking if the value is a `Result::Err`
     |
495  |             assert!(matches!(get_auctions_res.return_value().expect("REASON").len(), 1));
     |                                                             +++++++++++++++++

error[E0599]: no method named `len` found for enum `std::result::Result` in the current scope
    --> tlock_proxy/lib.rs:574:34
     |
574  |             assert!(matches!(res.len(), 1));
     |                                  ^^^ method not found in `Result<Vec<AuctionDetails>, Error>`
     |
note: the method `len` exists on the type `Vec<tlock_proxy::AuctionDetails>`
    --> /home/issamu/.rustup/toolchains/nightly-x86_64-unknown-linux-gnu/lib/rustlib/src/rust/library/alloc/src/vec/mod.rs:2103:5
     |
2103 |     pub fn len(&self) -> usize {
     |     ^^^^^^^^^^^^^^^^^^^^^^^^^^
help: consider using `Result::expect` to unwrap the `Vec<tlock_proxy::AuctionDetails>` value, panicking if the value is a `Result::Err`
     |
574  |             assert!(matches!(res.expect("REASON").len(), 1));
     |                                 +++++++++++++++++

Some errors have detailed explanations: E0063, E0599.
For more information about an error, try `rustc --explain E0063`.
warning: `tlock_proxy` (lib test) generated 1 warning
error: could not compile `tlock_proxy` (lib test) due to 4 previous errors; 1 warning emitted
```

</details>

### Auction Interface

I ran the interface, but I got this error.


![pasted image 0 (19)](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/b7a897e7-d9d0-42b1-9bab-37d3ab67b056)


And I got this message in the terminal.

```
 ⨯ unhandledRejection: Error [ERR_MODULE_NOT_FOUND]: Cannot find package '/home/user/Documents/cryptex/etf-auction-ui/node_modules/@ideallabs/etf-sdk/' imported from /home/user/Documents/cryptex/etf-auction-ui/node_modules/@ideallabs/etf.js/dist/etf.js
	at new NodeError (node:internal/errors:405:5)
	at legacyMainResolve (node:internal/modules/esm/resolve:234:9)
	at packageResolve (node:internal/modules/esm/resolve:877:14)
	at moduleResolve (node:internal/modules/esm/resolve:939:20)
	at defaultResolve (node:internal/modules/esm/resolve:1132:11)
	at nextResolve (node:internal/modules/esm/loader:163:28)
	at ESMLoader.resolve (node:internal/modules/esm/loader:835:30)
	at ESMLoader.getModuleJob (node:internal/modules/esm/loader:424:18)
	at ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:77:40)
	at link (node:internal/modules/esm/module_job:76:36) {
  code: 'ERR_MODULE_NOT_FOUND'
}
```

I checked the nome_modules, and the etf-sdk is there.

![pasted image 0 (20)](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/9c6477d7-d7e5-4321-9d32-f1d4f6fd6b10)


I tried with docker, building the image, because I want to test locally and got the same problem with the chain spec.

Could you send some tokens to the account `5CcLqAqU2uMJhQ6YFaTuRfvHtMemXjdqrw2428Ds4uTqiJZY`?
