# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/zero-network.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/zero-network/zero/blob/master/LICENSE) |
| 0b. | Documentation | <ul><li>[ ] </li></ul> | [`zero-crypto`](https://docs.rs/zero-crypto/latest/zero_crypto/), [`zero-jubjub`](https://docs.rs/zero-jubjub/latest/zero_jubjub/), [`zero-bls12-381`](https://docs.rs/zero-bls12-381/latest/zero_bls12_381/), [`zero-elgamal`](https://docs.rs/zero-elgamal/latest/zero_elgamal/), [`zero-pairing`](https://docs.rs/zero-pairing/latest/zero_pairing/) | Not fully evaluated yet
| 0c. | Testing Guide | <ul><li>[ ] </li></ul> | [How to run test](https://github.com/zero-network/zero#test) | Possible improvements in the coverage
| 0d. | Docker | <ul><li>[ ] </li></ul> | [Dockerfile](https://github.com/zero-network/zero/blob/master/Dockerfile) | Could start the network.
| 0e. | Article | <ul><li>[ ] </li></ul> | [documentation](https://zero-network.github.io/zero/), [tutorial](https://zero-network.github.io/zero/6_0_tutorial.html) | Documentation ok, tutorial not fully evaluated yet
| 1. | `Lifted-ElGamal` pallet | <ul><li>[ ] </li></ul> | [github](https://github.com/zero-network/zero/tree/master/primitive/elgamal), [crate.io](https://docs.rs/zero-elgamal/latest/zero_elgamal/) | Not fully evaluated yet
| 2. | `encrypted-balance` pallet | <ul><li>[ ] </li></ul> | [github](https://github.com/zero-network/zero/tree/master/pallets/encrypted_balance) | Not fully evaluated yet
| 3. | `plonk` pallet | <ul><li>[ ] </li></ul> | [github](https://github.com/zero-network/zero/tree/master/pallets/plonk) | Not fully evaluated yet
| 4. | `confidential-transfer` pallet | <ul><li>[ ] </li></ul> | [github](https://github.com/zero-network/zero/tree/master/pallets/confidential_transfer) | Not fully evaluated yet


**General Notes**

Please notice that in .gitmodules the protocol used is git, which requires authentication. Would be better to use HTTPS instead.

The docs are very detailed and explicative. There are some typos there, such as "toools" and "Summerize". Worthwhile performing proofreading. 

The re-implementation of some cryptographic algorithms could need a more careful security assessment in the future, before going to production.

The tutorial instructs how to use the pallets with some examples. This is good for the developers, however, for purpose of evaluation I'm not supposed to do programming. Please, add some examples ready for execution so I continue with the evaluation. I also was expecting to perform system testing from the perspective of a user, using some kind of user interface like polkadot.js for example, please include not only programmatic examples. 

Docker worked for running the tests but usually we expect docker compose file to spin up the system for manual testing using a substrate node.

The automated tests are running and passing. The coverage is listed below. The coverage could be improved.

- confidential_transfer -> circuits.rs -> 58.44%
- confidential_transfer -> lib.rs -> 66.67%
- encrypted_balance -> lib.rs -> 43.37%
- plonk -> lib.rs -> 44.74%

The cargo clippy returned several warninigs and some erros, listed below, please review your code running regarding those errors and also the warnings from cargo clippy:

```
error: the since field must contain a semver-compliant version
  --> primitive/plonk/src/composer.rs:62:9
   |
62 |         since = "13.0",
   |         ^^^^^^^^^^^^^^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#deprecated_semver
   = note: `#[deny(clippy::deprecated_semver)]` on by default

error: the since field must contain a semver-compliant version
  --> primitive/plonk/src/composer.rs:72:9
   |
72 |         since = "13.0",
   |         ^^^^^^^^^^^^^^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#deprecated_semver

error: the since field must contain a semver-compliant version
  --> primitive/plonk/src/composer.rs:79:9
   |
79 |         since = "13.0",
   |         ^^^^^^^^^^^^^^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#deprecated_semver

```



