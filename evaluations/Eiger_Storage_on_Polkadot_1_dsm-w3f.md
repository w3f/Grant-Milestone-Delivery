# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Eiger_Storage_on_Polkadot_1.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.** | Copyright and Licenses |<ul><li>[x] </li></ul>|https://github.com/eigerco/polkadot-native-storage/blob/main/LICENSE| |
| **0b.** | Documentation/Tutorial |<ul><li>[ ] </li></ul>|https://github.com/eigerco/polkadot-native-storage/blob/main/README.md| Not fully evaluated yet.|
| **0c.** | Methodology |<ul><li>[ ] </li></ul>|https://github.com/eigerco/polkadot-native-storage/blob/main/doc/report/src/new-overview.md#2-methodology| Not fully evaluated yet.|
| **0d.** | Infrastructure |<ul><li>[ ] </li></ul>|https://github.com/eigerco/polkadot-native-storage/blob/main/doc/testing_guide.md#infrastructure--testing-environment| Not fully evaluated yet.|
| **0e.** | Article |<ul><li>[ ] </li></ul>|https://github.com/eigerco/polkadot-native-storage/blob/main/doc/report/src/new-overview.md| Not fully evaluated yet.|
| **0f.** | Testing and Testing Guide |<ul><li>[ ] </li></ul>|https://github.com/eigerco/polkadot-native-storage/blob/main/doc/testing_guide.md| Not fully evaluated yet.|
| **0g.** | Docker |<ul><li>[ ] </li></ul>|https://github.com/eigerco/polkadot-native-storage/blob/main/README.md#docker , https://github.com/eigerco/polkadot-native-storage/blob/main/Dockerfile| Not fully evaluated yet.|
| **1.** | Updated CGS code |<ul><li>[ ] </li></ul>|https://github.com/eigerco/polkadot-native-storage| Not fully evaluated yet.|

## Evaluation V1

### Documentation

In the [testing guide](https://github.com/eigerco/polkadot-native-storage/blob/main/doc/testing_guide.md#infrastructure--testing-environment), the commands are using the repository `polka-storage` it shouldn't be `polkadot-native-storage`?

### Docker

I tried to build the Docker image, but I received an error in the command `cargo build --release --features runtime-benchmarks`.

<details>

```
 => [builder  8/11] RUN git clone https://github.com/paritytech/polkadot-sdk.git && cd polkadot  5961.1s 
 => [builder  9/11] WORKDIR /usr/src/polka-storage                                                  0.2s 
 => [builder 10/11] COPY . .                                                                        0.3s 
 => ERROR [builder 11/11] RUN cargo build --release --features runtime-benchmarks                 797.1s 
 .
 .
 .
#0 648.7    Compiling cumulus-pallet-session-benchmarking v3.0.0 (https://github.com/paritytech/cumulus.git?branch=polkadot-v1.0.0#0d17cf6b)
#0 648.8 warning: unused imports: `address::Address`, `registered_proof::RegisteredPoStProof`
#0 648.8   --> pallets/miner/src/benchmarking.rs:12:29
#0 648.8    |
#0 648.8 12 |     use pallet_pns_common::{address::Address, registered_proof::RegisteredPoStProof};
#0 648.8    |                             ^^^^^^^^^^^^^^^^  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
#0 648.8    |
#0 648.8    = note: `#[warn(unused_imports)]` on by default
#0 648.8 
#0 648.8    Compiling pallet-collator-selection-power v0.1.0 (/usr/src/polka-storage/pallets/collator-selection-power)
#0 648.8    Compiling parachain-info v0.1.0 (https://github.com/paritytech/cumulus.git?branch=polkadot-v1.0.0#0d17cf6b)
#0 649.0    Compiling cumulus-pallet-dmp-queue v0.1.0 (https://github.com/paritytech/cumulus.git?branch=polkadot-v1.0.0#0d17cf6b)
#0 649.1 error[E0061]: this function takes 3 arguments but 0 arguments were supplied
#0 649.1    --> pallets/miner/src/benchmarking.rs:10:1
#0 649.1     |
#0 649.1 10  | #[benchmarks]
#0 649.1     | ^^^^^^^^^^^^^ three arguments of type `<T as frame_system::Config>::AccountId`, `Address`, and `<<T as pallet::Config>::Power as Power>::PeerId` are missing
#0 649.1     |
#0 649.1 note: associated function defined here
#0 649.1    --> pallets/miner/src/lib.rs:117:16
#0 649.1     |
#0 649.1 117 |         pub fn create(
#0 649.1     |                ^^^^^^
#0 649.1 118 |             origin: OriginFor<T>,
#0 649.1 119 |             owner: T::AccountId,
#0 649.1     |             -------------------
#0 649.1 120 |             worker: Address,
#0 649.1     |             ---------------
#0 649.1 121 |             peer_id: PeerId<T>,
#0 649.1     |             ------------------
#0 649.1     = note: this error originates in the attribute macro `benchmarks` (in Nightly builds, run with -Z macro-backtrace for more info)
#0 649.1 help: provide the arguments
#0 649.1     |
#0 649.1 10  | #[benchmarks](/* <T as frame_system::Config>::AccountId */, /* Address */, /* <<T as pallet::Config>::Power as Power>::PeerId */)
#0 649.1     |              ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
#0 649.1 
#0 649.1 error[E0599]: no variant or associated item named `new_call_variant_create` found for enum `pallet::Call` in the current scope
#0 649.1   --> pallets/pns/src/benchmarking.rs:10:1
#0 649.1    |
#0 649.1 10 | #[benchmarks]
#0 649.1    | ^^^^^^^^^^^^^
#0 649.1    | |
#0 649.1    | variant or associated item not found in `Call<T>`
#0 649.1    | help: there is an associated function with a similar name: `new_call_variant_store_file`
#0 649.1    |
#0 649.1   ::: pallets/pns/src/lib.rs:45:15
#0 649.1    |
#0 649.1 45 |     #[pallet::call]
#0 649.1    |               ---- variant or associated item `new_call_variant_create` not found for this enum
#0 649.1    |
#0 649.1    = note: this error originates in the attribute macro `benchmarks` (in Nightly builds, run with -Z macro-backtrace for more info)
#0 649.1 
#0 649.1 error[E0061]: this function takes 3 arguments but 0 arguments were supplied
#0 649.1    --> pallets/miner/src/benchmarking.rs:10:1
#0 649.1     |
#0 649.1 10  | #[benchmarks]
#0 649.1     | ^^^^^^^^^^^^^ three arguments of type `<<T as pallet::Config>::Power as Power>::AccountId`, `Address`, and `MinerControllers<<T as frame_system::Config>::AccountId>` are missing
#0 649.1     |
#0 649.1 note: associated function defined here
#0 649.1    --> pallets/miner/src/lib.rs:160:16
#0 649.1     |
#0 649.1 160 |         pub fn change_worker_address(
#0 649.1     |                ^^^^^^^^^^^^^^^^^^^^^
#0 649.1 161 |             origin: OriginFor<T>,
#0 649.1 162 |             miner: MinerAccountId<T>,
#0 649.1     |             ------------------------
#0 649.1 163 |             new_worker: Address,
#0 649.1     |             -------------------
#0 649.1 164 |             new_controllers: MinerControllers<T::AccountId>,
#0 649.1     |             -----------------------------------------------
#0 649.1     = note: this error originates in the attribute macro `benchmarks` (in Nightly builds, run with -Z macro-backtrace for more info)
#0 649.1 help: provide the arguments
#0 649.1     |
#0 649.1 10  | #[benchmarks](/* <<T as pallet::Config>::Power as Power>::AccountId */, /* Address */, /* MinerControllers<<T as frame_system::Config>::AccountId> */)
#0 649.1     |              +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
#0 649.1 
#0 649.1 error[E0061]: this function takes 2 arguments but 0 arguments were supplied
#0 649.1    --> pallets/miner/src/benchmarking.rs:10:1
#0 649.1     |
#0 649.1 10  | #[benchmarks]
#0 649.1     | ^^^^^^^^^^^^^ two arguments of type `<<T as pallet::Config>::Power as Power>::AccountId` and `<<T as pallet::Config>::Power as Power>::PeerId` are missing
#0 649.1     |
#0 649.1 note: associated function defined here
#0 649.1    --> pallets/miner/src/lib.rs:205:16
#0 649.1     |
#0 649.1 205 |         pub fn change_peer_id(
#0 649.1     |                ^^^^^^^^^^^^^^
#0 649.1 206 |             origin: OriginFor<T>,
#0 649.1 207 |             miner: MinerAccountId<T>,
#0 649.1     |             ------------------------
#0 649.1 208 |             new_peer_id: PeerId<T>,
#0 649.1     |             ----------------------
#0 649.1     = note: this error originates in the attribute macro `benchmarks` (in Nightly builds, run with -Z macro-backtrace for more info)
#0 649.1 help: provide the arguments
#0 649.1     |
#0 649.1 10  | #[benchmarks](/* <<T as pallet::Config>::Power as Power>::AccountId */, /* <<T as pallet::Config>::Power as Power>::PeerId */)
#0 649.1     |              +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
#0 649.1 
#0 649.1 error[E0061]: this function takes 1 argument but 0 arguments were supplied
#0 649.1    --> pallets/miner/src/benchmarking.rs:10:1
#0 649.1     |
#0 649.1 10  | #[benchmarks]
#0 649.1     | ^^^^^^^^^^^^^ an argument of type `<<T as pallet::Config>::Power as Power>::AccountId` is missing
#0 649.1     |
#0 649.1 note: associated function defined here
#0 649.1    --> pallets/miner/src/lib.rs:231:16
#0 649.1     |
#0 649.1 231 |         pub fn confirm_update_worker_key(
#0 649.1     |                ^^^^^^^^^^^^^^^^^^^^^^^^^
#0 649.1 232 |             origin: OriginFor<T>,
#0 649.1 233 |             miner: MinerAccountId<T>,
#0 649.1     |             ------------------------
#0 649.1     = note: this error originates in the attribute macro `benchmarks` (in Nightly builds, run with -Z macro-backtrace for more info)
#0 649.1 help: provide the argument
#0 649.1     |
#0 649.1 10  | #[benchmarks](/* <<T as pallet::Config>::Power as Power>::AccountId */)
#0 649.1     |              ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
#0 649.1 
#0 649.1 error[E0061]: this function takes 2 arguments but 0 arguments were supplied
#0 649.1    --> pallets/miner/src/benchmarking.rs:10:1
#0 649.1     |
#0 649.1 10  | #[benchmarks]
#0 649.1     | ^^^^^^^^^^^^^ two arguments of type `<<T as pallet::Config>::Power as Power>::AccountId` and `<T as frame_system::Config>::AccountId` are missing
#0 649.1     |
#0 649.1 note: associated function defined here
#0 649.1    --> pallets/miner/src/lib.rs:262:16
#0 649.1     |
#0 649.1 262 |         pub fn change_owner_address(
#0 649.1     |                ^^^^^^^^^^^^^^^^^^^^
#0 649.1 263 |             origin: OriginFor<T>,
#0 649.1 264 |             miner: MinerAccountId<T>,
#0 649.1     |             ------------------------
#0 649.1 265 |             new_owner: T::AccountId,
#0 649.1     |             -----------------------
#0 649.1     = note: this error originates in the attribute macro `benchmarks` (in Nightly builds, run with -Z macro-backtrace for more info)
#0 649.1 help: provide the arguments
#0 649.1     |
#0 649.1 10  | #[benchmarks](/* <<T as pallet::Config>::Power as Power>::AccountId */, /* <T as frame_system::Config>::AccountId */)
#0 649.1     |              ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
#0 649.1 
#0 649.1    Compiling cumulus-pallet-aura-ext v0.1.0 (https://github.com/paritytech/cumulus.git?branch=polkadot-v1.0.0#0d17cf6b)
#0 649.1    Compiling cumulus-ping v0.1.0 (https://github.com/paritytech/cumulus.git?branch=polkadot-v1.0.0#0d17cf6b)
#0 649.2    Compiling cumulus-primitives-timestamp v0.1.0 (https://github.com/paritytech/cumulus.git?branch=polkadot-v1.0.0#0d17cf6b)
#0 649.3    Compiling cumulus-primitives-aura v0.1.0 (https://github.com/paritytech/cumulus.git?branch=polkadot-v1.0.0#0d17cf6b)
#0 649.3 For more information about this error, try `rustc --explain E0599`.
#0 649.3 error: could not compile `pallet-pns` (lib) due to previous error
#0 649.3 warning: build failed, waiting for other jobs to finish...
#0 649.4 For more information about this error, try `rustc --explain E0061`.
#0 649.4 warning: `pallet-miner` (lib) generated 1 warning
#0 649.4 error: could not compile `pallet-miner` (lib) due to 5 previous errors; 1 warning emitted
------
Dockerfile:15
--------------------
  13 |     WORKDIR /usr/src/polka-storage
  14 |     COPY . .
  15 | >>> RUN cargo build --release --features runtime-benchmarks
  16 |     
  17 |     # Uncomment when polka-storage repo will become public
--------------------
ERROR: failed to solve: process "/bin/sh -c cargo build --release --features runtime-benchmarks" did not complete successfully: exit code: 101
```

</details>

The same error occurred when I tried to build without docker with the flag `--features runtime-benchmarks`.

### Testing

#### Unit and integration testing

I followed the testing guide. I could build the `polkadot-native-storage`, without the flag `--features runtime-benchmarks`. 

I ran `cargo test -p pallet-miner`, and these tests are passing.


<details>

```
user@localhost:~/Documents/eiger/polka-storage$ cargo test -p pallet-miner
warning: some crates are on edition 2021 which defaults to `resolver = "2"`, but virtual workspaces default to `resolver = "1"`
note: to keep the current resolver, specify `workspace.resolver = "1"` in the workspace root's manifest
note: to use the edition 2021 resolver, specify `workspace.resolver = "2"` in the workspace root's manifest
	Finished test [unoptimized + debuginfo] target(s) in 0.39s
 	Running unittests src/lib.rs (target/debug/deps/pallet_miner-09e9e0c21f0f8be8)

running 18 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::change_owner_address_confirms_new_owner_with_valid_signer_and_proposal ... ok
test tests::change_owner_address_rejects_invalid_signer ... ok
test tests::change_worker_address_works_with_valid_signer_and_new_worker ... ok
test tests::change_worker_address_keeps_old_controller_without_override ... ok
test tests::change_owner_address_creates_proposal_with_valid_signer ... ok
test tests::change_worker_address_clears_pending_worker_with_valid_signer_and_old_worker ... ok
test tests::change_owner_address_revokes_existing_proposal_with_valid_signer ... ok
test tests::confirm_update_worker_accepts_effective_request_with_valid_signature ... ok
test tests::change_owner_address_rejects_proposal_with_owner_account ... ok
test tests::change_worker_address_rejects_invalid_signer ... ok
test tests::change_peer_id_rejects_invalid_signer ... ok
test tests::create_miner_first_miner_addr_is_correct ... ok
test tests::change_peer_id_works_with_valid_owner ... ok
test tests::change_worker_address_rejects_trigger_without_request ... ok
test tests::create_miner ... ok
test tests::change_peer_id_works_with_valid_controller ... ok
test tests::confirm_update_worker_key_rejects_trigger_before_effective_at ... ok

test result: ok. 18 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

   Doc-tests pallet-miner

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```

</details>

I tried to run `cargo test` to run all tests, but I received these errors.

<details>

```
error: `PowerModule` does not have #[pallet::event] defined, perhaps you should remove `Event` from construct_runtime?
  --> pallets/power/src/lib.rs:12:1
   |
12 |   #[frame_support::pallet]
   |   ^^^^^^^^^^^^^^^^^^^^^^^^
   |
  ::: pallets/power/src/mock.rs:12:1
   |
12 | / frame_support::construct_runtime!(
13 | | 	pub enum Test
14 | | 	{
15 | |     	System: frame_system::{Pallet, Call, Config<T>, Storage, Event<T>},
16 | |     	PowerModule: crate::{Pallet, Call, Storage, Event<T>},
17 | | 	}
18 | | );
   | |_- in this macro invocation
   |
   = note: this error originates in the macro `crate::__substrate_event_check::is_event_part_defined` which comes from the expansion of the macro `frame_support::construct_runtime` (in Nightly builds, run with -Z macro-backtrace for more info)

error[E0437]: type `RuntimeEvent` is not a member of trait `crate::Config`
  --> pallets/power/src/mock.rs:54:5
   |
54 | 	type RuntimeEvent = RuntimeEvent;
   | 	^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ not a member of trait `crate::Config`

error[E0412]: cannot find type `Event` in the crate root
   --> pallets/power/src/mock.rs:12:1
	|
12  | // frame_support::construct_runtime!(
13  | || 	pub enum Test
14  | || 	{
15  | ||     	System: frame_system::{Pallet, Call, Config<T>, Storage, Event<T>},
16  | ||     	PowerModule: crate::{Pallet, Call, Storage, Event<T>},
17  | || 	}
18  | || );
	| ||_- in this macro invocation
...   |
	|
	= note: this error originates in the macro `frame_support::construct_runtime` (in Nightly builds, run with -Z macro-backtrace for more info)
help: consider importing one of these items
	|
1   + use crate::mock::system::Event;
	|
1   + use frame_system::Event;
	|

warning: function `new_test_ext` is never used
  --> pallets/pns/src/mock.rs:56:8
   |
56 | pub fn new_test_ext() -> sp_io::TestExternalities {
   |    	^^^^^^^^^^^^
   |
   = note: `#[warn(dead_code)]` on by default

Some errors have detailed explanations: E0412, E0437.
For more information about an error, try `rustc --explain E0412`.
error: could not compile `pallet-power` (lib test) due to 3 previous errors
warning: build failed, waiting for other jobs to finish...
warning: `pallet-pns` (lib test) generated 1 warning
```

</details>

#### RPC testing

I ran `curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "pns_chainGetBlock", "params": ["123"]}' http://localhost:9977/` and received "Method not found".

```
user@localhost:~/Documents/eiger/polka-storage$ curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "pns_chainGetBlock", "params": ["123"]}' http://localhost:9977/

{"jsonrpc":"2.0","error":{"code":-32601,"message":"Method not found"},"id":1}
```

#### XCM testing

I checked the chain state. `hrmpChannelMaxCapacity` and `hrmpChannelMaxMessageSize` are non-zero values.

<details>

```
configuration.activeConfig: PolkadotRuntimeParachainsConfigurationHostConfiguration
{
  maxCodeSize: 3,145,728
  maxHeadDataSize: 32,768
  maxUpwardQueueCount: 8
  maxUpwardQueueSize: 1,048,576
  maxUpwardMessageSize: 51,200
  maxUpwardMessageNumPerCandidate: 5
  hrmpMaxMessageNumPerCandidate: 5
  validationUpgradeCooldown: 2
  validationUpgradeDelay: 2
  asyncBackingParams: {
    maxCandidateDepth: 0
    allowedAncestryLen: 0
  }
  maxPovSize: 5,242,880
  maxDownwardMessageSize: 1,048,576
  hrmpMaxParachainOutboundChannels: 4
  hrmpMaxParathreadOutboundChannels: 4
  hrmpSenderDeposit: 0
  hrmpRecipientDeposit: 0
  hrmpChannelMaxCapacity: 8   -----
  hrmpChannelMaxTotalSize: 8,192
  hrmpMaxParachainInboundChannels: 4
  hrmpMaxParathreadInboundChannels: 4
  hrmpChannelMaxMessageSize: 1,048,576  -----
  executorParams: []
  codeRetentionPeriod: 1,200
  parathreadCores: 0
  parathreadRetries: 0
  groupRotationFrequency: 20
  chainAvailabilityPeriod: 4
  threadAvailabilityPeriod: 4
  schedulingLookahead: 0
  maxValidatorsPerCore: 1
  maxValidators: null
  disputePeriod: 6
  disputePostConclusionAcceptancePeriod: 100
  noShowSlots: 2
  nDelayTranches: 25
  zerothDelayTrancheWidth: 0
  neededApprovals: 2
  relayVrfModuloSamples: 2
  pvfCheckingEnabled: false
  pvfVotingTtl: 2
  minimumValidationUpgradeDelay: 5
}
```

</details>

#### Benchmark

I was not able to build successfully with the `--features runtime-benchmarks` flag. In this way, I was not able to run the benchmarks.
