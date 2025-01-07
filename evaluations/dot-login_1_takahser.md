# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/dot-login.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [Node: MIT License](https://github.com/singkeo/dot-login-substrate-node/blob/7451fb5d5a16427094fe3691488c3a9b2dafdb50/LICENSE), [Client: Apache License](https://github.com/singkeo/dot-login/blob/e471f51d88e85addb75c6cc40f2bc8b49a80c058/LICENSE) | - |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [Client README](https://github.com/singkeo/dot-login/blob/e471f51d88e85addb75c6cc40f2bc8b49a80c058/README.md) | Details see [Documentation Feedback](#documentation-feedback) |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [Client README](https://github.com/singkeo/dot-login/blob/e471f51d88e85addb75c6cc40f2bc8b49a80c058/README.md) | Details see [Testing Feedback](#testing-feedback) |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Client Dockerfile](https://github.com/singkeo/dot-login/blob/e471f51d88e85addb75c6cc40f2bc8b49a80c058/Dockerfile), [Node Containerfile](https://github.com/singkeo/dot-login-substrate-node/blob/7451fb5d5a16427094fe3691488c3a9b2dafdb50/Containerfile) | Ok, but it would have been nice if there was a docker compose setup that allows the tester to spin up the whole infra at once. |
| 1. | `zkEphemeralKeys` Pallet | <ul><li>[x] </li></ul> | https://github.com/singkeo/dot-login-substrate-node/blob/7451fb5d5a16427094fe3691488c3a9b2dafdb50/pallets/zkproof/src/lib.rs#L195-L219 | Substrate pallet for ephemeral key registration with zk-SNARKs proof validation. |
| 2. | `address` Pallet | <ul><li>[x] </li></ul> | https://github.com/singkeo/dot-login-substrate-node/blob/7451fb5d5a16427094fe3691488c3a9b2dafdb50/pallets/zkproof/src/lib.rs#L182-L185 |  |
| 3. | `jwtValidation` Pallet | <ul><li>[x] </li></ul> | https://github.com/singkeo/dot-login-substrate-node/blob/7451fb5d5a16427094fe3691488c3a9b2dafdb50/pallets/zkproof/src/lib.rs#L188-L192 |  |
| 4. | `JWK Registry` Pallet | <ul><li>[x] </li></ul> | [jwk registry function](https://github.com/singkeo/dot-login-substrate-node/blob/7451fb5d5a16427094fe3691488c3a9b2dafdb50/pallets/zkproof/src/lib.rs#L357-L379) | - |
| 5. | Client and OAuth Integrations | <ul><li>[x] </li></ul> | [client code](https://github.com/singkeo/dot-login/blob/e471f51d88e85addb75c6cc40f2bc8b49a80c058/src/main.rs), [node communication](https://github.com/singkeo/dot-login/blob/e471f51d88e85addb75c6cc40f2bc8b49a80c058/src/main.rs#L377) | - |

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

While the functionality seems to be implemented, it's all currently implemented into a single mono pallet. For the first milestone that's fine, but given the complex architecture I think it makes sense to stick to the original idea to seperate concerns into dedicated pallets. Also, the client had a few minor warnings, these should be fixed.

### Documentation Feedback

- [x] Inline comments are sufficient.
- [x] The testing scenario was run successfully:
  1. start client
  2. use the provided login url to log into my gmail account using a web browser
  3. copy over the jwt and save it into the `current.jwt` file
  4. run the client again (=> generates zk proof)
  5. copy the zk proof and feed it into the `zkProofModule.storeZkProof` extrinsic
- [x] Client build passes on Ubuntu (on macos it didn't work for me), some warnings occur
  
  <details>
    <summary>Output</summary>

    ```zsh
    # cargo build --release
      Downloaded parking v2.2.0
      
      (...)

      Downloaded 603 crates (46.5 MB) in 3.04s (largest was `ring` at 4.2 MB)
      Compiling proc-macro2 v1.0.86
      
      (...)

      Compiling dot_login v0.1.0 (/root/dot-login)
    warning: unused variable: `a`
      --> src/main.rs:255:13
        |
    255 |         let a = cs.new_input_variable(|| self.a.ok_or(SynthesisError::AssignmentMissing))?;
        |             ^ help: if this is intentional, prefix it with an underscore: `_a`
        |
        = note: `#[warn(unused_variables)]` on by default

    warning: unused variable: `b`
      --> src/main.rs:257:13
        |
    257 |         let b = cs.new_input_variable(|| self.b.ok_or(SynthesisError::AssignmentMissing))?;
        |             ^ help: if this is intentional, prefix it with an underscore: `_b`

    warning: unused variable: `c`
      --> src/main.rs:259:13
        |
    259 |         let c = cs.new_input_variable(|| self.c.ok_or(SynthesisError::AssignmentMissing))?;
        |             ^ help: if this is intentional, prefix it with an underscore: `_c`

    warning: `dot_login` (bin "dot_login") generated 3 warnings
        Finished `release` profile [optimized] target(s) in 12m 11s
    ```
  </details>
- [x] Node build passes
  
  <details>
    <summary>Output</summary>

    ```zsh
    % cargo build --release
    Compiling pallet-zkproof v0.0.0 (/Users/xxx/repos-os/mocu-substrate-node/pallets/zkproof)
    Compiling node-template-runtime v0.0.0 (/Users/xxx/repos-os/mocu-substrate-node/runtime)
    Compiling node-template v0.0.0 (/Users/xxx/repos-os/mocu-substrate-node/node)
      Finished `release` profile [optimized] target(s) in 38.35s
    ```
  </details>
- [x] Client runs fine (for privacy and security reasons I haven't included my jwt here)
  <details>
    <summary>Output</summary>

    ```zsh
    # ./dot_login

    Token/Key Pairs empty, Log first
    Google OAuth login: https://accounts.google.com/o/oauth2/auth?client_id=801054035848-vn7773nujkjq17c2lcmc3en3doonfu8u.apps.googleusercontent.com&response_type=id_token&redirect_uri=http%3A%2F%2Flocalhost&scope=openid+email&nonce=e3e8fe19
    ```
  </details>
- [x] Node runs fine
  
  <details>
    <summary>Output</summary>

    ```zsh
    % ./target/release/node-template --dev
    2024-07-23 22:07:52 Substrate Node    
    2024-07-23 22:07:52 ✌️  version 0.0.0-7451fb5d5a1    
    2024-07-23 22:07:52 ❤️  by Substrate DevHub <https://github.com/substrate-developer-hub>, 2017-2024    
    2024-07-23 22:07:52 📋 Chain specification: Development    
    2024-07-23 22:07:52 🏷  Node name: adamant-way-8031    
    2024-07-23 22:07:52 👤 Role: AUTHORITY    
    2024-07-23 22:07:52 💾 Database: RocksDb at /var/folders/fp/c9nsbc1d6_qgvk24wfdf9yc00000gn/T/substrateLYC1pt/chains/dev/db/full    
    2024-07-23 22:07:52 🔨 Initializing Genesis block/state (state: 0xefc0…dfa7, header-hash: 0xab4e…9673)    
    2024-07-23 22:07:52 👴 Loading GRANDPA authority set from genesis on what appears to be first startup.    
    2024-07-23 22:07:52 Using default protocol ID "sup" because none is configured in the chain specs    
    2024-07-23 22:07:52 🏷  Local node identity is: 12D3KooWDkwvZEEwX6KDgMsPXkGavLM5akDqDVNPzusCPa98YjRe    
    2024-07-23 22:07:52 💻 Operating system: macos    
    2024-07-23 22:07:52 💻 CPU architecture: aarch64    
    2024-07-23 22:07:52 📦 Highest known block at #0    
    2024-07-23 22:07:52 〽️ Prometheus exporter started at 127.0.0.1:9615    
    2024-07-23 22:07:52 Running JSON-RPC server: addr=127.0.0.1:9944, allowed origins=["*"]    
    2024-07-23 22:07:54 🙌 Starting consensus session on top of parent 0xab4e97d1118826481a8d05b8fc16d70fd600bc42d157248b408366af25619673    
    2024-07-23 22:07:54 🎁 Prepared block for proposing at 1 (3 ms) [hash: 0xf3878bea859b957bbc44cbde6da521760cc6954518e46cd46bfb127c953ae36d; parent_hash: 0xab4e…9673; extrinsics (1): [0x8542…7b95]    
    2024-07-23 22:07:54 🔖 Pre-sealed block for proposal at 1. Hash now 0xddca0235e73cb743ed23f9de49a42813547a30960a907ec8da695dc7fef5dd7b, previously 0xf3878bea859b957bbc44cbde6da521760cc6954518e46cd46bfb127c953ae36d.    
    2024-07-23 22:07:54 ✨ Imported #1 (0xddca…dd7b)    
    2024-07-23 22:07:57 💤 Idle (0 peers), best: #1 (0xddca…dd7b), finalized #0 (0xab4e…9673), ⬇ 0 ⬆ 0    
    2024-07-23 22:08:00 🙌 Starting consensus session on top of parent 0xddca0235e73cb743ed23f9de49a42813547a30960a907ec8da695dc7fef5dd7b    
    2024-07-23 22:08:00 🎁 Prepared block for proposing at 2 (2 ms) [hash: 0x8dbd52dfa072e0d3e372ca1614d182569f31095db96be8dcaf83a711f8346807; parent_hash: 0xddca…dd7b; extrinsics (1): [0x6459…dbbf]    
    2024-07-23 22:08:00 🔖 Pre-sealed block for proposal at 2. Hash now 0x1e90733c46349cdeae955454cb51516aff58061dfc9b664498f12af24415e437, previously 0x8dbd52dfa072e0d3e372ca1614d182569f31095db96be8dcaf83a711f8346807.  
    ```
  </details>

### Testing Feedback

- [x] Unit tests work, but it would be good to test more edge cases.
  - [x] Client tests pass, some warnings occur
    <details>
      <summary>Output</summary>

      ```zsh
      # cargo test
      Compiling proc-macro2 v1.0.86

      (...)

      Compiling dot_login v0.1.0 (/root/dot-login)
      warning: unused variable: `a`
        --> src/main.rs:255:13
          |
      255 |         let a = cs.new_input_variable(|| self.a.ok_or(SynthesisError::AssignmentMissing))?;
          |             ^ help: if this is intentional, prefix it with an underscore: `_a`
          |
          = note: `#[warn(unused_variables)]` on by default

      warning: unused variable: `b`
        --> src/main.rs:257:13
          |
      257 |         let b = cs.new_input_variable(|| self.b.ok_or(SynthesisError::AssignmentMissing))?;
          |             ^ help: if this is intentional, prefix it with an underscore: `_b`

      warning: unused variable: `c`
        --> src/main.rs:259:13
          |
      259 |         let c = cs.new_input_variable(|| self.c.ok_or(SynthesisError::AssignmentMissing))?;
          |             ^ help: if this is intentional, prefix it with an underscore: `_c`

      warning: `dot_login` (bin "dot_login" test) generated 3 warnings
          Finished `test` profile [unoptimized + debuginfo] target(s) in 1m 34s
          Running unittests src/main.rs (target/debug/deps/dot_login-2b48f6255a6f98d6)

      running 4 tests
      test tests::test_generate_google_oauth2_url ... ok
      test tests::test_generate_nonce ... ok
      test tests::test_generate_user_salt ... ok
      test tests::test_save_key_pair_to_file ... ok

      test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
      ```
    </details>

  - [x] Node tests pass
    <details>
      <summary>Output</summary>

      ```zsh
      % cargo test
        Compiling pallet-zkproof v0.0.0 (/Users/xxx/repos-os/mocu-substrate-node/pallets/zkproof)
        Compiling node-template-runtime v0.0.0 (/Users/xxx/repos-os/mocu-substrate-node/runtime)
        Compiling node-template v0.0.0 (/Users/xxx/repos-os/mocu-substrate-node/node)
          Finished `test` profile [unoptimized + debuginfo] target(s) in 15.27s
          Running unittests src/main.rs (target/debug/deps/node_template-3ebccf5df064d944)

      running 0 tests

      test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

          Running unittests src/lib.rs (target/debug/deps/node_template_runtime-2db508cace05da90)

      running 2 tests
      test test_genesis_config_builds ... ok
      test __construct_runtime_integrity_test::runtime_integrity_tests ... ok

      test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

          Running unittests src/lib.rs (target/debug/deps/pallet_template-32ebcb94fb3a39f4)

      running 4 tests
      test mock::test_genesis_config_builds ... ok
      test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
      test tests::correct_error_for_none_value ... ok
      test tests::it_works_for_default_value ... ok

      test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

          Running unittests src/lib.rs (target/debug/deps/pallet_zkproof-6b2fa44dc36ea265)

      running 0 tests

      test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Doc-tests node-template-runtime

      running 0 tests

      test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Doc-tests pallet-template

      running 0 tests

      test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Doc-tests pallet-zkproof

      running 0 tests

      test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
      ```
    </details>
