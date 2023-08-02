# Evaluation

- **Status:** Accpeted
- **Application Document:** [w3f/Grants-Program#1660](https://github.com/w3f/Grants-Program/blob/master/applications/cryptex.md)
- **Milestone:** 1
- **Kusama Identity:** [FdAoQzuxaG2nsXFGpvXfzzUDYueKqYK1B1LShZ874N2vhv5](https://sub.id/FdAoQzuxaG2nsXFGpvXfzzUDYueKqYK1B1LShZ874N2vhv5)
- **Previously successfully merged evaluation:** N/A

**Deliverables**

| Number | Deliverable | Link | Notes |
| -----: | ----------- | ------------- | ------------- |
| **0a.** | License | https://github.com/ideal-lab5/substrate/blob/milestone1/LICENSE-GPL3, [etf-pallet](https://github.com/ideal-lab5/substrate/blob/e1b7e7bbbcdb3131edb0c635cec30dfcbe1012eb/bin/node-template/pallets/etf/Cargo.toml#L8) | GPLv3 | 
| **0b.** | Documentation | https://ideal-lab5.github.io | also see inline documentation |
| **0c.** | Testing and Testing Guide | https://docs.google.com/document/d/1XfBpWfTUq-8DYJ43ZqJGpXb_AJMEvK6PV01nEn8JwQo/edit?usp=sharing |  |
| **0d.** | Docker | https://hub.docker.com/repository/docker/ideallabs/etf/general | |
| **0e.** | Article | https://ideallabs.substack.com/p/e6bb13fb-be93-4a22-b039-f81b7c70e93c | It isn't published yet. We're waiting on the milestone's acceptance before publishing. |
| **1.** | Substrate module: IBE Pallet/IBC Setup | https://github.com/ideal-lab5/substrate/tree/milestone1/bin/node-template/pallets/etf/src | Instead of IBC it seemed more fitting to call it the ETF pallet. |
| **2.** | Substrate module: Aura Pallet | id generation: https://github.com/ideal-lab5/substrate/blob/40dca8d373ccdd59696b251f87ba89029a5bae63/client/consensus/aura/src/standalone.rs#L123, hash to curve: https://github.com/ideal-lab5/substrate/blob/502032949307b1c19cba606dbef1d2f108f71a56/client/consensus/aura/src/dleq.rs#L108 | The original thought was we needed to know these values (pubkeys) before a session started, but we didn't. Instead we are able to just calculate these on the fly, and make them publicly calculable as well. This is explained in the docs with how we derive the public key for a slot id, which occurs when blocks are proposed and imported. The first link shows how identities are derived, the second link is to the hash-to-g1 function we use to hash slot ids to a point in G1. |
| **3.** | Substrate module: Aura Client | https://github.com/ideal-lab5/substrate/tree/milestone1/client/consensus/aura/src| See the attached article link and documentation for more insights on how this piece works. Here we have introduced a DLEQ proof and have made several changes in the aura client. |
| **4.** | Substrate Module: Validator Incentives |  block header/proof verification: https://github.com/ideal-lab5/substrate/blob/502032949307b1c19cba606dbef1d2f108f71a56/client/consensus/aura/src/standalone.rs#L390, simple reward of 10 tokens/session: https://github.com/ideal-lab5/substrate/blob/cf0a5193af80e458ee585a614f7ff12ece9b56fd/frame/aura/src/lib.rs#L269 | We implemented this directly in the aura pallet. Since we're using a PoA consensus, validator incentives are really simple: blocks with invalid slot secrets are rejected and the network fails to produce more blocks. At the beginning each session, each validator is awarded 10 tokens. Note that we see the PoA version as a stepping stone, and intend to integrate with Sassafrass + Babe.  |

## General Notes

Overall, this is a solid project, well docker-compose scripts and documentation, and all promised features work as expected. 

Currently all of the tests are available.

### Logs

#### Unit tests

<details>

<summary> cargo +nightly test </summary>

https://drive.google.com/file/d/1Inlv96nT181t75mnxro2LGeiv5rLDJTq/view?usp=drive_link

</details>

<details>

<summary> etf-pallet </summary>

```bash
running 4 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::it_sets_the_genesis_state ... ok
test tests::it_fails_to_update_generator_when_not_decodable ... ok
test tests::it_allows_root_to_update_generator ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s

   Doc-tests pallet-etf

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

```

</details>

<details>

<summary> Aura client + DLEQ implementation </summary>

```bash
running 6 tests
test dleq::tests::prove_secret_correctness_manual_testing_tool ... ok
test dleq::tests::dleq_prepare_and_verify_works ... ok
test standalone::tests::authorities_call_works ... ok
test tests::authoring_blocks ... ok
test tests::on_slot_returns_correct_block ... ok
test tests::current_node_authority_should_claim_slot ... ok

test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 36.43s

   Doc-tests sc-consensus-aura

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

```

</details>

<details>

<summary> runtime test-utils </summary>

```bash
running 8 tests
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::check_substrate_check_signed_extension_works ... ok
test storage_key_generator::expected_keys_vec_are_matching ... ok
test tests::validate_unsigned_works ... ok
test tests::validate_storage_keys ... ok
test tests::witness_backend_works ... ok
test tests::test_storage ... ok
test tests::heap_pages_is_respected ... ok

test result: ok. 8 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 10.56s

   Doc-tests substrate-test-runtime

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

```

</details>

<details>

<summary> Benchmark tests </summary>

```bash

Running unittests src/lib.rs (target/debug/deps/pallet_etf-bb86bac3c815b1c1)

running 5 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test benchmarking::benchmarks::benchmark_tests::test_benchmarks ... ok
test tests::it_fails_to_update_generator_when_not_decodable ... ok
test tests::it_sets_the_genesis_state ... ok
test tests::it_allows_root_to_update_generator ... ok

test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

   Doc-tests pallet-etf

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


```

</details>

### Screenshot

![monitor screenshot](https://github.com/w3f/Grant-Milestone-Delivery/assets/12571049/31a651b9-bf60-4aad-b44a-0883b8721032)