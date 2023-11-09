
# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/zkwasm-rollups-transfer.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul>| [Apache 2.0](https://github.com/KogarashiNetwork/Kogarashi/blob/master/LICENSE) | |
| 0b. | Documentation | <ul><li>[x] </li></ul>| [RedDSA Tutorial](https://kogarashinetwork.github.io/Kogarashi/tutorial/reddsa_wallet/)| |
| 0c. | Testing Guide | <ul><li>[x] </li></ul>| [RedDSA Tutorial](https://kogarashinetwork.github.io/Kogarashi/tutorial/reddsa_wallet/)| |
| 0d. | Docker | <ul><li>[x] </li></ul>| [docker-compose](https://github.com/KogarashiNetwork/Kogarashi/blob/master/docker-compose.yml) [base image](https://github.com/KogarashiNetwork/Kogarashi/tree/master/docker) | |
| 0e. | Article | <ul><li>[x] </li></ul>| [RedDSA Signature](https://kogarashinetwork.github.io/Kogarashi/technical/reddsa_signature/)|  |
| 1. | `RedDSA` implementation | <ul><li>[x] </li></ul>| [Making Substrate RedDSA Compatible](https://github.com/KogarashiNetwork/zksubstrate/compare/49a4103...95f493c) [RedDSA Library](https://github.com/KogarashiNetwork/Kogarashi/tree/master/primitive/redjubjub) |  |
| 2. | `Jubjub` curve optimization | <ul><li>[x] </li></ul>| [field square](https://github.com/KogarashiNetwork/Kogarashi/pull/64) [field double](https://github.com/KogarashiNetwork/Kogarashi/pull/63) [jubjub NAF](https://github.com/KogarashiNetwork/Kogarashi/pull/60) [Twisted Edwards Revisit](https://github.com/KogarashiNetwork/Kogarashi/pull/68) |  |
|3. | Client wallet implementation | <ul><li>[x] </li></ul>| [Wallet Cli Example](https://github.com/KogarashiNetwork/Kogarashi/tree/master/node/client) |  |

## Evaluation V3

The parts that involve cryptograpy will be evaluated in the next milestone. 

## Evaluation V2

The parts that involve cryptograpy will be evaluated by a specialist from our research team. 

### Article

Considering the article as the site, it seems to be good for me.

### Manual Testing

I ran the tutorial, and no problems this time.

<details>

```
user@localhost:~/Documents/zkwasm/Kogarashi/node/client$ cargo run balance
	Finished dev [unoptimized + debuginfo] target(s) in 0.28s
 	Running `/home/user/Documents/zkwasm/Kogarashi/node/target/debug/kogarashi-cli balance`
0 Balance

user@localhost:~/Documents/zkwasm/Kogarashi/node/client$ cargo run fund
	Finished dev [unoptimized + debuginfo] target(s) in 0.29s
 	Running `/home/user/Documents/zkwasm/Kogarashi/node/target/debug/kogarashi-cli fund`
Transaction Success: String("0xe0d0316cacdf955c921481ef14e72a96fa3a7c658485f14b9b56b1920a62c168")

user@localhost:~/Documents/zkwasm/Kogarashi/node/client$ cargo run balance
	Finished dev [unoptimized + debuginfo] target(s) in 0.28s
 	Running `/home/user/Documents/zkwasm/Kogarashi/node/target/debug/kogarashi-cli balance`
1000000000000 Balance

user@localhost:~/Documents/zkwasm/Kogarashi/node/client$ cargo run balance Bob
	Finished dev [unoptimized + debuginfo] target(s) in 0.26s
 	Running `/home/user/Documents/zkwasm/Kogarashi/node/target/debug/kogarashi-cli balance Bob`
1152921504606846976 Balance

user@localhost:~/Documents/zkwasm/Kogarashi/node/client$ cargo run transfer Bob 1000
	Finished dev [unoptimized + debuginfo] target(s) in 0.34s
 	Running `/home/user/Documents/zkwasm/Kogarashi/node/target/debug/kogarashi-cli transfer Bob 1000`
Transaction Success: String("0x06d73d8bd15743d8e8380a058c35bf5be12f895de5ed4a7cef734dbd8bb0fdb8")

user@localhost:~/Documents/zkwasm/Kogarashi/node/client$ cargo run balance Bob
	Finished dev [unoptimized + debuginfo] target(s) in 0.32s
 	Running `/home/user/Documents/zkwasm/Kogarashi/node/target/debug/kogarashi-cli balance Bob`
1152921504606847976 Balance

user@localhost:~/Documents/zkwasm/Kogarashi/node/client$ cargo run balance
	Finished dev [unoptimized + debuginfo] target(s) in 0.27s
 	Running `/home/user/Documents/zkwasm/Kogarashi/node/target/debug/kogarashi-cli balance`
999874998858 Balance
```

</details>

### Benchmark

I ran `cargo bench` and received something similar to the results. Could you specify what machine configuration was used for running the benchmark?

## Evaluation V1

### Documentation

The [RedDSA Tutorial](https://kogarashinetwork.github.io/Kogarashi/tutorial/reddsa_wallet/) is good. Could you explain how you got the values for deliverable 2 and if I can reproduce it?

The repository has some broken links. Here are some I found, in the [README in the root](https://github.com/KogarashiNetwork/Kogarashi/blob/master/README.md), all the links in the columns name in Crypto Primitives. In the same README, all the links in the Pallet Functionalities, and in the [README in the folder primitive](https://github.com/KogarashiNetwork/Kogarashi/tree/master/primitive) the name `zkstd`.

### Article

Is the article only [this page](https://kogarashinetwork.github.io/Kogarashi/technical/reddsa_signature/), or is it the all the content of the site? 

### Docker

Docker is working fine.

<details>

```
user@localhost:~/Documents/zkwasm/Kogarashi$ docker compose up
[+] Running 4/4
 ✔ kogarashi 3 layers [⣿⣿⣿]  	0B/0B  	Pulled                    	52.8s
   ✔ 31e352740f53 Pull complete                                        	4.8s
   ✔ 6fc10cc2f7e9 Pull complete                                       	49.9s
   ✔ d39adfd3c03d Pull complete                                       	50.3s
[+] Running 2/2
 ✔ Network kogarashi_default  Created                                  	0.1s
 ✔ Container kogarashi    	Created                                  	6.0s
Attaching to kogarashi
kogarashi  | 2023-08-08 10:59:57 It isn't safe to expose RPC publicly without a proxy server that filters available set of RPC methods.    
kogarashi  | 2023-08-08 10:59:57 Substrate Node    
kogarashi  | 2023-08-08 10:59:57 ✌️  version 3.0.0-9dfdb5c-x86_64-linux-musl    
kogarashi  | 2023-08-08 10:59:57 ❤️  by Kogarashi Dev Team <https://github.com/KogarashiNetwork/Kogarashi>, 2017-2023    
kogarashi  | 2023-08-08 10:59:57 📋 Chain specification: Development    
kogarashi  | 2023-08-08 10:59:57 🏷 Node name: last-flight-5189    
kogarashi  | 2023-08-08 10:59:57 👤 Role: AUTHORITY    
kogarashi  | 2023-08-08 10:59:57 💾 Database: RocksDb at /root/.local/share/kogarashi/chains/dev/db    
kogarashi  | 2023-08-08 10:59:57 ⛓  Native runtime: kogarashi-node-100 (kogarashi-node-1.tx1.au1)    
kogarashi  | 2023-08-08 10:59:57 🔨 Initializing Genesis block/state (state: 0x034a…f04c, header-hash: 0x8ce7…8d0d)    
kogarashi  | 2023-08-08 10:59:57 👴 Loading GRANDPA authority set from genesis on what appears to be first startup.    
kogarashi  | 2023-08-08 10:59:57 ⏱  Loaded block-time = 6000 milliseconds from genesis on first-launch    
kogarashi  | 2023-08-08 10:59:57 Using default protocol ID "sup" because none is configured in the chain specs    
kogarashi  | 2023-08-08 10:59:57 🏷 Local node identity is: 12D3KooWEjrwPHbeuPTRrqWSYTByBxSMBtPy27z1nJujW7tJ3N2p    
kogarashi  | 2023-08-08 10:59:57 📦 Highest known block at #0    
kogarashi  | 2023-08-08 10:59:57 〽️ Prometheus server started at 127.0.0.1:9615    
kogarashi  | 2023-08-08 10:59:57 Listening for new connections on 127.0.0.1:9944.    
kogarashi  | 2023-08-08 11:00:00 🙌 Starting consensus session on top of parent 0x8ce769583cad2b8a6853624ab2e23d97c22fb58852ca6a5b42ce36c10f618d0d    
kogarashi  | 2023-08-08 11:00:00 🎁 Prepared block for proposing at 1 [hash: 0xb741ac228827d6a996f9a9a98c00400945e9b20599940ab6a82a59cc7958bca6; parent_hash: 0x8ce7…8d0d; extrinsics (1): [0xfc12…8f05]]    
kogarashi  | 2023-08-08 11:00:00 🔖 Pre-sealed block for proposal at 1. Hash now 0x8d1de5647a9a7378dffcb14dd38b6aaff243a1ecd6c7716924743f490c7ea6b2, previously 0xb741ac228827d6a996f9a9a98c00400945e9b20599940ab6a82a59cc7958bca6.    
kogarashi  | 2023-08-08 11:00:00 ✨ Imported #1 (0x8d1d…a6b2)    
kogarashi  | 2023-08-08 11:00:00 🙌 Starting consensus session on top of parent 0x8d1de5647a9a7378dffcb14dd38b6aaff243a1ecd6c7716924743f490c7ea6b2    
kogarashi  | 2023-08-08 11:00:00 🎁 Prepared block for proposing at 2 [hash: 0xfb8836a9fc4d2676f10650984274a1cc176adb6a12c1702c81f5ca10183f3320; parent_hash: 0x8d1d…a6b2; extrinsics (1): [0xdd1e…5885]]    
kogarashi  | 2023-08-08 11:00:00 🔖 Pre-sealed block for proposal at 2. Hash now 0x474ddb146b685fd3eb3465ef510763cd1a6916fbb13a672be9f965373ecdeedb, previously 0xfb8836a9fc4d2676f10650984274a1cc176adb6a12c1702c81f5ca10183f3320.    
kogarashi  | 2023-08-08 11:00:00 ✨ Imported #2 (0x474d…eedb)    
kogarashi  | 2023-08-08 11:00:02 💤 Idle (0 peers), best: #2 (0x474d…eedb), finalized #0 (0x8ce7…8d0d), ⬇ 0 ⬆ 0    
```

</details>

### Automatic Tests

All automatic tests passed.

<details>

```
 	Running unittests src/lib.rs (target/release/deps/bls_12_381-06a39bc13b8ce55b)

running 63 tests
test fqn::tests::fq12_field_subtraction_test ... ok
test fqn::tests::fq12_field_comparator_test ... ok
test fqn::tests::fq12_field_addition_test ... ok
test fqn::tests::fq12_field_inversion_test ... ok
test fqn::tests::fq2_field_subtraction_test ... ok
test fqn::tests::fq2_field_addition_test ... ok
test fqn::tests::fq2_mul_nonresidue_test ... ok
test fqn::tests::fq2_field_comparator_test ... ok
test fqn::tests::fq2_field_inversion_test ... ok
test fqn::tests::fq12_field_squaring_test ... ok
test fr::tests::bls12_381_scalar_addition_test ... ok
test fqn::tests::fq6_field_addition_test ... ok
test fr::tests::bls12_381_scalar_comparator_test ... ok
test fr::tests::bls12_381_scalar_inversion_test ... ok
test fqn::tests::fq12_field_multiplication_test ... ok
test fr::tests::test_root_of_unity ... ok
test fqn::tests::fq2_field_squaring_test ... ok
test fr::tests::test_sqrt ... ok
test fqn::tests::fq6_field_comparator_test ... ok
test fr::tests::bls12_381_scalar_subtraction_test ... ok
test g1::tests::bls12_381_affine_identity_test ... ok
test g1::tests::bls12_381_affine_is_on_curve_test ... ok
test fqn::tests::fq6_field_inversion_test ... ok
test g1::tests::bls12_381_affine_doubling_test ... ok
test g1::tests::bls12_381_mix_addition_test ... ok
test g1::tests::bls12_381_affine_scalar_test ... ok
test fr::tests::bls12_381_scalar_squaring_test ... ok
test g1::tests::bls12_381_coordinate_transformation_test ... ok
test g1::tests::bls12_381_affine_addition_test ... ok
test g1::tests::bls12_381_projective_identity_test ... ok
test g1::tests::bls12_381_projective_is_on_curve_test ... ok
test g1::tests::bls12_381_mix_doubling_test ... ok
test g1::tests::bls_operations ... ok
test g1::tests::test_batch_normalize ... ok
test g1::tests::bls12_381_mix_scalar_test ... ok
test g1::tests::bls12_381_projective_doubling_test ... ok
test g2::tests::bls12_381_affine_identity_test ... ok
test g2::tests::bls12_381_affine_is_on_curve_test ... ok
test g1::tests::bls12_381_projective_scalar_test ... ok
test g2::tests::bls12_381_affine_doubling_test ... ok
test g2::tests::bls12_381_mix_addition_test ... ok
test g2::tests::bls12_381_affine_scalar_test ... ok
test fqn::tests::fq6_field_subtraction_test ... ok
test fr::tests::bls12_381_scalar_multiplication_test ... ok
test g2::tests::bls12_381_coordinate_transformation_test ... ok
test g1::tests::bls12_381_projective_addition_test ... ok
test g2::tests::bls12_381_projective_is_on_curve_test ... ok
test g2::tests::bls12_381_projective_identity_test ... ok
test g2::tests::bls12_381_mix_doubling_test ... ok
test g2::tests::bls12_381_mix_scalar_test ... ok
test g2::tests::bls12_381_projective_doubling_test ... ok
test g2::tests::bls12_381_projective_scalar_test ... ok
test g2::tests::bls12_381_affine_addition_test ... ok
test g2::tests::bls12_381_projective_addition_test ... ok
test fqn::tests::fq2_field_multiplication_test ... ok
test fqn::tests::fq6_field_squaring_test ... ok
test fqn::tests::fq6_mul_nonresidue_test ... ok
test fqn::tests::fq6_mul_by_1_test ... ok
test fqn::tests::fq6_field_multiplication_test ... ok
test fqn::tests::fq6_mul_by_01_test ... ok
test fqn::tests::fq12_frobenius_map_test ... ok
test fqn::tests::fq12_mul_by_014_test ... ok
test fr::tests::test_serde ... ok

test result: ok. 63 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 3.46s

 	Running unittests src/lib.rs (target/release/deps/confidential_transfer-322d2378c31978be)

running 2 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::plonk_test::confidential_transfer_test ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 22.97s

 	Running tests/multi_scalar_multiplication.rs (target/release/deps/multi_scalar_multiplication-f1d735a9f990367e)

running 1 test
test multi_scalar_multiplication_test ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s

 	Running tests/pairing.rs (target/release/deps/pairing-8dace37104badd3a)

running 5 tests
test final_exp_test ... ok
test generator_pairing_test ... ok
test unitary_test ... ok
test pairing_test ... ok
test multi_miller_loop_test ... ok

test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.09s

 	Running unittests src/lib.rs (target/release/deps/jub_jub-961c0998509eb491)

running 22 tests
test curve::tests::jubjub_affine_is_on_curve_test ... ok
test curve::tests::jubjub_affine_identity_test ... ok
test curve::tests::jubjub_projective_is_on_curve_test ... ok
test curve::tests::jubjub_projective_identity_test ... ok
test curve::tests::jubjub_mix_addition_test ... ok
test curve::tests::jubjub_mix_doubling_test ... ok
test fp::tests::test_from_hex ... ok
test curve::tests::jubjub_mix_scalar_test ... ok
test curve::tests::jubjub_projective_scalar_test ... ok
test curve::tests::jubjub_affine_scalar_test ... ok
test curve::tests::jubjub_affine_doubling_test ... ok
test curve::tests::jubjub_projective_doubling_test ... ok
test curve::tests::jubjub_coordinate_transformation_test ... ok
test curve::tests::jubjub_projective_addition_test ... ok
test curve::tests::jubjub_affine_addition_test ... ok
test fp::tests::fp_field_addition_test ... ok
test fp::tests::fp_field_comparator_test ... ok
test fp::tests::fp_field_subtraction_test ... ok
test fp::tests::fp_field_inversion_test ... ok
test fp::tests::fp_field_squaring_test ... ok
test fp::tests::fp_field_multiplication_test ... ok
test curve::tests::test_serde ... ok

test result: ok. 22 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.22s

 	Running unittests src/lib.rs (target/release/deps/pallet_encrypted_balance-6e83e95ac9001f82)

running 7 tests
test tests_composite::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests_local::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests_composite::force_transfer_works ... ok
test tests_local::emit_events ... ok
test tests_composite::balance_transfer_works ... ok
test tests_local::balance_transfer_works ... ok
test tests_local::force_transfer_works ... ok

test result: ok. 7 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

 	Running unittests src/lib.rs (target/release/deps/pallet_plonk-cc53559983d424a3)

running 4 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::plonk_test::trusted_setup ... ok
test tests::plonk_test::default_test ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.64s

 	Running unittests src/lib.rs (target/release/deps/poly_commit-1b2f1616d91641d6)

running 4 tests
test fft::tests::fft_multiplication_test ... ok
test poly::tests::polynomial_scalar ... ok
test poly::tests::polynomial_division_test ... ok
test fft::tests::fft_transformation_test ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.05s

 	Running unittests src/lib.rs (target/release/deps/red_jubjub-c6a6b5a67c02e51f)

running 1 test
test tests::signature_test ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.79s

 	Running unittests src/lib.rs (target/release/deps/she_elgamal-d486b7af26b891d1)

running 3 tests
test tests::test_elgamal ... ok
test tests::test_encrypt_decrypt ... ok
test tests::test_homomorphic ... ok

test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.04s

 	Running unittests src/lib.rs (target/release/deps/zero_plonk-a9760c0893416cc9)

running 8 tests
test bit_iterator::test::test_bit_iterator8 ... ok
test permutation::test::test_permutation_compute_sigmas ... ok
test permutation::test::test_permutation_format ... ok
test util::test::test_batch_inversion ... ok
test permutation::test::test_basic_slow_permutation_poly ... ok
test commitment_scheme::kzg10::srs::test::test_powers_of ... ok
test permutation::test::test_permutation_compute_sigmas_only_left_wires ... ok
test commitment_scheme::kzg10::key::test::test_basic_commit ... ok

test result: ok. 8 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

 	Running tests/boolean.rs (target/release/deps/boolean-26ce70c1522f478c)

running 2 tests
test boolean_works ... ok
test select_works ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.39s

 	Running tests/decomposition.rs (target/release/deps/decomposition-30be669cf7fee5df)

running 1 test
test decomposition_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.72s

 	Running tests/ecc.rs (target/release/deps/ecc-7a8c1b6f87efd377)

running 3 tests
test add_point_works ... ok
test mul_generator_works ... ok
test mul_point_works ... ok

test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 4.84s

 	Running tests/logic.rs (target/release/deps/logic-66f07de980c4e9ba)

running 2 tests
test logic_and_works ... ok
test logic_xor_works ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.84s

 	Running tests/range.rs (target/release/deps/range-ef4bc6459f40d00f)

running 1 test
test range_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.21s

 	Running unittests src/lib.rs (target/release/deps/zkruntime-655540e255563adc)

running 1 test
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


 	Running tests/limbs.rs (target/release/deps/arithmetics-98a15ef40fe1f67e)

running 12 tests
test jubjub_limbs_tests::jubjub_limbs_tests_invert_test ... ok
test bls12_381_limbs_tests::bls12_381_limbs_tests_sub_test ... ok
test jubjub_limbs_tests::jubjub_limbs_tests_add_test ... ok
test jubjub_limbs_tests::jubjub_limbs_tests_power_test ... ok
test jubjub_limbs_tests::jubjub_limbs_tests_sub_test ... ok
test bls12_381_limbs_tests::bls12_381_limbs_tests_add_test ... ok
test jubjub_limbs_tests::jubjub_limbs_tests_square_test ... ok
test bls12_381_limbs_tests::bls12_381_limbs_tests_power_test ... ok
test bls12_381_limbs_tests::bls12_381_limbs_tests_square_test ... ok
test jubjub_limbs_tests::jubjub_limbs_tests_mul_test ... ok
test bls12_381_limbs_tests::bls12_381_limbs_tests_mul_test ... ok
test bls12_381_limbs_tests::bls12_381_limbs_tests_invert_test ... ok

test result: ok. 12 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

 	Running tests/points.rs (target/release/deps/points-719063068a0ce520)

running 4 tests
test twisted_edwards_points_tests::addition_test ... ok
test twisted_edwards_points_tests::scalar_test ... ok
test twisted_edwards_points_tests::is_on_curve_affine ... ok
test twisted_edwards_points_tests::is_on_curve_extended ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-encrypted-balance

running 2 tests
test src/lib.rs - (line 96) ... ok
test src/lib.rs - (line 110) ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.19s

   Doc-tests zkstd

running 2 tests
test src/lib.rs - (line 41) ... ok
test src/lib.rs - (line 139) ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.23s
```

</details>

### Manual Testing

I followed the [RedDSA Tutorial](https://kogarashinetwork.github.io/Kogarashi/tutorial/reddsa_wallet/), and in step five, I had some problems with the fund command.

```
user@localhost:~/Documents/zkwasm/Kogarashi/node/client$ cargo run fund
	Finished dev [unoptimized + debuginfo] target(s) in 0.26s
 	Running `/home/user/Documents/zkwasm/Kogarashi/node/target/debug/kogarashi-cli fund`
Transaction Success: Null

user@localhost:~/Documents/zkwasm/Kogarashi/node/client$ cargo run balance
	Finished dev [unoptimized + debuginfo] target(s) in 0.30s
 	Running `/home/user/Documents/zkwasm/Kogarashi/node/target/debug/kogarashi-cli balance`
0 Balance
```

### Code Quality

I ran `cargo clippy` and received a few warnings.

<details>

```
user@localhost:~/Documents/zkwasm/Kogarashi$ cargo clippy
warning: profiles for the non root package will be ignored, specify profiles at the workspace root:
package:   /home/user/Documents/zkwasm/Kogarashi/primitive/plonk/Cargo.toml
workspace: /home/user/Documents/zkwasm/Kogarashi/Cargo.toml
warning: unneeded unit return type
   --> pallets/encrypted_balance/src/lib.rs:328:15
	|
328 | 	#[pallet::event]
	|           	^^^^^ help: remove the `-> ()`
	|
	= help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#unused_unit
	= note: `#[warn(clippy::unused_unit)]` on by default

warning: unneeded unit expression
   --> pallets/encrypted_balance/src/lib.rs:328:15
	|
328 | 	#[pallet::event]
	|           	^^^^^ help: remove the final `()`
	|
	= help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#unused_unit

warning: unneeded unit return type
  --> pallets/plonk/src/lib.rs:99:15
   |
99 | 	#[pallet::event]
   |           	^^^^^ help: remove the `-> ()`
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#unused_unit
   = note: `#[warn(clippy::unused_unit)]` on by default

warning: unneeded unit expression
  --> pallets/plonk/src/lib.rs:99:15
   |
99 | 	#[pallet::event]
   |           	^^^^^ help: remove the final `()`
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#unused_unit

warning: statement with no effect
   --> pallets/plonk/src/lib.rs:183:17
	|
183 |             	Event::<T>::TrustedSetup(pp);
	|             	^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	|
	= help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#no_effect
	= note: `#[warn(clippy::no_effect)]` on by default

warning: `pallet-encrypted-balance` (lib) generated 2 warnings (run `cargo fix --lib -p pallet-encrypted-balance` to apply 1 suggestion)
warning: `pallet-plonk` (lib) generated 3 warnings (run `cargo fix --lib -p pallet-plonk` to apply 1 suggestion)
	Finished dev [unoptimized + debuginfo] target(s) in 0.21s
```

</details>

I ran `cargo tarpaulin --all --release` to check the test coverage. The pallets could have better coverage.

```
|| pallets/confidential_transfer/src/lib.rs: 14/21
|| pallets/encrypted_balance/src/lib.rs: 36/83
|| pallets/plonk/src/lib.rs: 17/36
```
