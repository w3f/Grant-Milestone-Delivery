# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/hyperfridge.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/element36-io/hyperfridge-r0/blob/651815e00be9f8d82d0d8df94bf908a37b9cfe7e/LICENSE) | - |
| 0b. | Documentation | <ul><li>[ ] </li></ul> | [README](https://github.com/element36-io/hyperfridge-r0/blob/651815e00be9f8d82d0d8df94bf908a37b9cfe7e/README.md) | Inline comments look mostly good to me, although adding more comprehensive inline comments to the functions in `host/src/main.rs` and `methods/guest/src/main.rs` might make sense. |
| 0c. | Testing Guide | <ul><li>[ ] </li></ul> | [Testing Guide](https://github.com/element36-io/hyperfridge-r0/blob/651815e00be9f8d82d0d8df94bf908a37b9cfe7e/docs/INSTRUCTIONS.md) | See [Testing Feedback](#testing-feedback) |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/element36-io/hyperfridge-r0/blob/651815e00be9f8d82d0d8df94bf908a37b9cfe7e/Dockerfile) | See [Docker Feedback](#docker-feedback) |
| 1a. | risc0 Guest Program | <ul><li>[ ] </li></ul> | (to be evaluated, once 0c., 0d. are fixed) | Spec: Code (circuit) to generate the proof, later used by the proving system. Secret input of [Guest Program](https://dev.risczero.com/terminology#guest-program): Ebics envelope as XML and Z53/Camt53 file(s) as ZIP binary - see XML examples above. The Public input is: Public Certificate of the Bank or name of bank, bank account number, balance and date. The [journal](https://dev.risczero.com/terminology#journal) will contain balance, currency, timestamp in the ebics-envelope, timestamp of the proof, client-account-number, Bank-ID and sequence number of the bank-statement. The circuit will check the hash of the (zipped) Z53 documents and compares it with the data given in the ebicsRequest. It checks the signature of the Ebics request and the signed hash of the ZIP file using crypto standards X002 and E002. "X002" refers to RSA signature key with a key length of 2048 bits, "E002" defines RSA algorithm for encryption using  ECB (Electronic Codebook) and PKCS#1 v1.5 padding.|
| 1b. | Generate Receipt | <ul><li>[ ] </li></ul> | (to be evaluated, once 0c., 0d. are fixed) | Spec: Generate [receipt](https://dev.risczero.com/terminology#receipt) which proves that the computation (e.g. balance) is correct and signed by the bank.  |
| 1c. | Validator | <ul><li>[ ] </li></ul> | (to be evaluated, once 0c., 0d. are fixed) | Spec: Code to validate the receipt. |
| 1d. | Hyperfridge Crate | <ul><li>[ ] </li></ul> | (to be evaluated, once 0c., 0d. are fixed) | Spec: The crate to create and validate recipes (ZKPs), wrapping the functionality.  |
| 2. | Unit Tests | <ul><li>[ ] </li></ul> | (to be evaluated, once 0c., 0d. are fixed) | Spec: We will add unit tests and test data for creating and validating proofs which includes edge cases like wrong balance claims or faulty signature of the bank. |
| 3. | Performance Benchmark | <ul><li>[ ] </li></ul> | (to be evaluated, once 0c., 0d. are fixed) | Spec: Present a table with performance metrics, so that hyperfride proofing times can be interpolated with data from [risc-zero](https://dev.risczero.com/datasheet.pdf). |

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

Summarizes the overall performance plus additional feedback/comments

### Testing Feedback

- [x] Tests pass, when run natively
  
  <details>
    <summary>Output</summary>

    ```zsh
    % cargo install cargo-risczero\n
    % cargo install cargo-binstall\n
    % cargo binstall cargo-risczero\n
    % RISC0_DEV_MODE=1 cargo test

      Compiling protobuf-src v1.1.0+21.5
      
      (...)
      
      Compiling bonsai-sdk v0.5.1
    hyperfridge: Starting build for riscv32im-risc0-zkvm-elfcircuit-recursion(build), risc0-circuit-rv32im, risc0-binfmt, gobli...
      Compiling semver v1.0.22
      
      (...)

      Compiling rsa v0.9.6
    hyperfridge:     Updating crates.io index346/371: crypto-bigint, env_logger, risc0-circuit-recursion(build), num-bigint-dig...
    hyperfridge:     Updating git repository `https://github.com/risc0/RustCrypto-hashes`
      Compiling num-bigint v0.4.4
    hyperfridge:  Downloading crates ...>  ] 347/371: env_logger, risc0-circuit-recursion(build), num-bigint-dig, chrono, gobli...
      Compiling pem v3.0.3
      Compiling xmlparser v0.13.6
    hyperfridge:   Downloaded block-padding v0.3.371: risc0-circuit-recursion(build), pem, num-bigint-dig, chrono, goblin, rsa,...
    hyperfridge:   Downloaded cbc v0.1.2
    hyperfridge:    Compiling typenum v1.17.0352/371: risc0-circuit-recursion(build), num-bigint-dig, chrono, goblin, rsa, meth...

    (...)

    hyperfridge:    Compiling hyperfridge v0.1.0 (/Users/xxx/repos/hyperfridge-r0/methods/guest)
    hyperfridge:     Finished release [optimized] target(s) in 16.59s
      Compiling risc0-zkvm v0.19.1
      Compiling verifier v0.1.0 (/Users/xxx/repos/hyperfridge-r0/verifier)
      Compiling host v0.1.0 (/Users/xxx/repos/hyperfridge-r0/host)
        Finished test [optimized + debuginfo] target(s) in 1m 00s
        Running unittests src/main.rs (target/debug/deps/host-67fadf43513f1e1c)

    running 1 test
    test tests::do_main ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 3.29s

        Running unittests src/lib.rs (target/debug/deps/methods-890644c27a64360b)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/main.rs (target/debug/deps/verifier-40f6e8183f7c8d71)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

      Doc-tests methods

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
    ```
  </details>

- [] Host tests fail
  
  <details>
    <summary>Output</summary>

    ```zsh
    host % RISC0_DEV_MODE=true cargo test  -- --nocapture

      Compiling serde v1.0.197
      
      (...)

      Compiling methods v0.1.0 (/Users/xxx/repos/hyperfridge-r0/methods)
    hyperfridge: Starting build for riscv32im-risc0-zkvm-elf reqwest, risc0-zkvm(build.rs), reqwest, hyper, methods(build), h2                                           
      Compiling bonsai-sdk v0.5.1
    hyperfridge:     Finished release [optimized] target(s) in 0.32s, reqwest, bonsai-sdk, hyper, methods(build), h2                                                     
      Compiling risc0-circuit-recursion v0.19.1
    error: failed to run custom build command for `risc0-circuit-recursion v0.19.1`

    Caused by:
      process didn't exit successfully: `/Users/xxx/repos/hyperfridge-r0/target/debug/build/risc0-circuit-recursion-56838de3e476abcf/build-script-build` (exit status: 101)
      --- stderr
      Downloading https://github.com/risc0/risc0/raw/505295b963c97db2afffe58f4b0cb4721e396b90/risc0/circuit/recursion/src/recursion_zkr.zip
      thread 'main' panicked at /Users/xxx/.cargo/registry/src/index.crates.io-6f17d22bba15001f/risc0-circuit-recursion-0.19.1/build.rs:72:51:
      called `Result::unwrap()` on an `Err` value: Download(/Users/xxx/repos/hyperfridge-r0/target/debug/build/risc0-circuit-recursion-c504a99f331c8a53/out/recursion_zkr.zip: (verification: unverified):
      )
      note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
    warning: build failed, waiting for other jobs to finish...
    ```
  </details>

- [x] Guest tests pass
  
  <details>
    <summary>Output</summary>

    ```zsh
    guest % RISC0_DEV_MODE=true cargo test --features debug_mode -- --nocapture 

      Compiling typenum v1.17.0
      
      (...)

      Compiling hyperfridge v0.1.0 (/Users/xxx/repos/hyperfridge-r0/methods/guest)
        Finished test [unoptimized + debuginfo] target(s) in 8.15s
        Running unittests src/main.rs (target/debug/deps/hyperfridge-1b5a69c5018ae95a)

    running 7 tests
    => <ds:SignedInfo xmlns="http://www.ebics.org/H003" xmlns:ds="http://www.w3.org/2000/09/xmldsig#"><ds:CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"></ds:CanonicalizationMethod><ds:SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#rsa-sha256"></ds:SignatureMethod><ds:Reference URI="#xpointer(//*[@authenticate='true'])"><ds:Transforms><ds:Transform Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"></ds:Transform></ds:Transforms><ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256"></ds:DigestMethod><ds:DigestValue>BUuyFKUrSlvHaXjTC+Jo1h9myiVZakJ8SqjseZdQLyw=</ds:DigestValue></ds:Reference></ds:SignedInfo>
    => <header xmlns="http://www.ebics.org/H003" authenticate="true"><static><TransactionID>DD85DCE9DD8442B3DA74A2C174BEACE3</TransactionID><NumSegments>1</NumSegments></static><mutable><TransactionPhase>Initialisation</TransactionPhase><SegmentNumber lastSegment="true">1</SegmentNumber><ReturnCode>000000</ReturnCode><ReportText>[EBICS_OK] OK</ReportText></mutable></header><DataEncryptionInfo xmlns="http://www.ebics.org/H003" authenticate="true"><EncryptionPubKeyDigest Algorithm="http://www.w3.org/2001/04/xmlenc#sha256" Version="E002">iHehyz6aY84DY6T3ubzm0k/RfvbENVc3yHX8EUm7WdU=</EncryptionPubKeyDigest><TransactionKey>cNij+jRZjzrOxCVG6Sdx3FoA6lURiyb2p2Z128YREIL4JYgaCXtGQSMXh/VUN48JP87r1qbVLMWSZa3J0DpoPqiN1dJTshtLULeEwhLFNISs2Ht5rTocB8/vM4RxIihkqkwifgxgOXGSmqcUcI4W7BuDawDQ7tUcEvYqMCuyw2XfXIFOnR4k1XabUjRdpM3iB6tkPGqPsttaFgatmLUDV5dRg0tsvkbgICHozI8kO9VpJuiY0EvHGFxBsTIAZMAt7yKe5/T4zT6nrmdILtzS/pq9aQVBkHonYHw1cPQyHabqqg7kDl0JwjRFcqzoFjRGMIq1BZ46pyUrvjbNvDKSBQ==</TransactionKey></DataEncryptionInfo><ReturnCode xmlns="http://www.ebics.org/H003" authenticate="true">000000</ReturnCode><TimestampBankParameter xmlns="http://www.ebics.org/H003" authenticate="true">2023-11-30T08:38:11.8835379Z</TimestampBankParameter>
    => <ds:SignatureValue>nKKaRd6bTYVRZGiz+5/fxEDK83r2ETEnqhpCwDGjipRLBqfNaRT9qQW87bVfJc4Qxb8GiE9/jigBQ94Igw4JUm30Vylmohm2Fl6MwJEqWWvyFUJjnXoc25rTMSlEdkb8Mrpp32dupzI4UqpF6UT5SBHbWJNDvI1aVKcM30qtAwdGWN0kMpT5fAgqHOnckY0puwIi5py4VaiJEmpDmzlAnoOo1APMhz5pR/gbZ/NGXQRQj6I6VasW7mLPpjv02yOGlPYEfoat6am856i6GV6eeqHFedZkLVY+M+HRF6BSKva8OXLq+SiPkHoIaU3AggmJJjqEx4m78I5I0BnEU0ewJQ==</ds:SignatureValue>
    test test_xmlparse::test_print_imports ... ok
      authenticated file length 1217
    test test_xmlparse::test_signature_x ... ok
    test test_xmlparse::test_digest ... ok
    test test_xmlparse::test_validate_signature ... ok
    test test_xmlparse::test_decrypt_txkey_reverse ... ok
    test test_xmlparse::test_decrypt_txkey ... ok
    test test_xmlparse::test_parse ... ok

    test result: ok. 7 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.07s
    ```
  </details>

- [] Running the tests with a new ebics response fails

  <details>
    <summary>Output</summary>

    ```zsh
    % cd data
    data % mkdir myrequest

    data % ll
    total 224
    -rw-r--r--   1 xxx  staff   1704 Feb 20 19:07 bank.pem
    -rwxr-xr-x   1 xxx  staff  13672 Feb 20 19:07 checkResponse.sh
    -rw-r--r--   1 xxx  staff   1704 Feb 20 19:07 client.pem
    -rwxr-xr-x   1 xxx  staff  10483 Feb 20 19:07 createTestResponse.sh
    -rwxr-xr-x   1 xxx  staff    264 Feb 20 19:07 deploy_new_testdata.sh
    -rwxr-xr-x   1 xxx  staff   1517 Feb 20 19:07 export_primes.sh
    -rw-r--r--   1 xxx  staff    312 Feb 20 19:07 extract_pems_from_p12.sh
    drwxr-xr-x   2 xxx  staff     64 Feb 22 11:56 myrequest
    -rw-r--r--   1 xxx  staff   5343 Feb 20 19:07 producive_example_pretty.xml
    -rw-r--r--   1 xxx  staff   5608 Feb 20 19:07 producive_example_prettyH004.xml
    -rw-r--r--   1 xxx  staff    451 Feb 20 19:07 pub_bank.pem
    -rw-r--r--   1 xxx  staff    451 Feb 20 19:07 pub_client.pem
    -rw-r--r--   1 xxx  staff    451 Feb 20 19:07 pub_witness.pem
    drwxr-xr-x   3 xxx  staff     96 Feb 20 19:07 response_template
    drwxr-xr-x  10 xxx  staff    320 Feb 20 19:07 response_template-generated
    -rw-r--r--   1 xxx  staff   6088 Feb 20 19:07 response_template-generated.xml
    -rw-r--r--   1 xxx  staff   4916 Feb 20 19:07 response_template.xml
    -rw-r--r--   1 xxx  staff   6515 Feb 20 19:07 response_template_pretty.xml
    drwxr-xr-x   8 xxx  staff    256 Feb 20 19:07 schematas
    drwxr-xr-x  14 xxx  staff    448 Feb 21 11:03 test
    -rw-r--r--   1 xxx  staff   6088 Feb 20 19:07 test.xml
    -rw-r--r--   1 xxx  staff   1704 Feb 20 19:07 witness.pem
    data % cp response_template.xml myrequest.xml

    data % cp -r response_template/camt53 myrequest

    data % xml_file=myrequest.xml ./createTestResponse.sh

    ============================
    xml_dir variable is not set. Set to default: myrequest-generated
    response template: myrequest.xml - created new xml file from template: myrequest-generated.xml
    -rw-r--r--  1 xxx  staff  2184 Feb 22 11:57 myrequest/camt53/35e75effeaa74f579f97c8121bfa68ad_8307Camt053_2023112922562645_0.xml
    -rw-r--r--  1 xxx  staff  2184 Feb 22 11:57 myrequest/camt53/35e75effeaa74f579f97c8121bfa68ae_8307Camt053_2023113022562645_0.xml
    -rw-r--r--  1 xxx  staff  2174 Feb 22 11:57 myrequest/camt53/cf89170b3de1470e854cc270b572ad93_8307Camt053_2023112922562929_0.xml
      adding: myrequest/camt53/35e75effeaa74f579f97c8121bfa68ad_8307Camt053_2023112922562645_0.xml (deflated 61%)
      adding: myrequest/camt53/35e75effeaa74f579f97c8121bfa68ae_8307Camt053_2023113022562645_0.xml (deflated 61%)
      adding: myrequest/camt53/cf89170b3de1470e854cc270b572ad93_8307Camt053_2023112922562929_0.xml (deflated 61%)
    ./createTestResponse.sh: line 51: zlib-flate: command not found
    data % cd ../host

    host % RISC0_DEV_MODE=true \
    cargo run  -- --verbose prove-camt53  \
      --request="../data/myrequest-generated/myrequest-generated.xml"  --bankkey ../data/pub_bank.pem \
        --clientkey ../data/client.pem --witnesskey ../data/pub_witness.pem --clientiban CH4308307000289537312

      Compiling risc0-circuit-recursion v0.19.1
      Compiling methods v0.1.0 (/Users/xxx/repos/hyperfridge-r0/methods)
    error: failed to run custom build command for `risc0-circuit-recursion v0.19.1`

    Caused by:
      process didn't exit successfully: `/Users/xxx/repos/hyperfridge-r0/target/debug/build/risc0-circuit-recursion-56838de3e476abcf/build-script-build` (exit status: 101)
      --- stderr
      Downloading https://github.com/risc0/risc0/raw/505295b963c97db2afffe58f4b0cb4721e396b90/risc0/circuit/recursion/src/recursion_zkr.zip
      thread 'main' panicked at /Users/xxx/.cargo/registry/src/index.crates.io-6f17d22bba15001f/risc0-circuit-recursion-0.19.1/build.rs:72:51:
      called `Result::unwrap()` on an `Err` value: Download(/Users/xxx/repos/hyperfridge-r0/target/debug/build/risc0-circuit-recursion-c504a99f331c8a53/out/recursion_zkr.zip: (verification: unverified):
      )
      note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
    warning: build failed, waiting for other jobs to finish...
    hyperfridge: Starting build for riscv32im-risc0-zkvm-elfs(build)                                                                                                     
    hyperfridge:     Finished release [optimized] target(s) in 0.05s
    ```

### Docker Feedback

- [x] Docker image can be pulled from the registry ~~doesn't seem to exist (at least for arm64 architectures; I'm using a Macbook Pro M2)~~
  
  <details>
    <summary>Output</summary>

    ```zsh
    % docker pull e36io/hyperfridge-r0:latest
    latest: Pulling from e36io/hyperfridge-r0
    8a1e25ce7c4f: Pull complete 
    5bddf183218c: Pull complete 
    bd8552e74a9d: Pull complete 
    974962928483: Pull complete 
    da3f1affd165: Pull complete 
    82a599aff527: Pull complete 
    fef82fc2d60a: Pull complete 
    d92112b2e5f1: Pull complete 
    ec331e29b49a: Pull complete 
    355cff6739e3: Pull complete 
    4f4fb700ef54: Pull complete 
    Digest: sha256:d1976721ff9e00abb11cbba597c26677b337d0a868c4df3744422a3fe7d9c895
    Status: Downloaded newer image for e36io/hyperfridge-r0:latest
    docker.io/e36io/hyperfridge-r0:latest

    What's Next?
      View a summary of image vulnerabilities and recommendations → docker scout quickview e36io/hyperfridge-r0:latest
    ```
  </details>

- [x] Docker image can be pulled from the registry (macos version)

  <details>
    <summary>Output</summary>

    ```zsh
    % docker pull e36io/hyperfridge-r0:macos-latest       
    macos-latest: Pulling from e36io/hyperfridge-r0
    59f5764b1f6d: Pull complete 
    37dfb9e70f7a: Pull complete 
    5cdaeb1da99d: Pull complete 
    102ca4f92e50: Pull complete 
    e2acac3b3e9f: Pull complete 
    effce3959f3e: Pull complete 
    25551f8c8b74: Pull complete 
    3013f3ac45a2: Pull complete 
    620009823c12: Pull complete 
    effb984f1c57: Pull complete 
    6a8df3721225: Pull complete 
    4f4fb700ef54: Pull complete 
    Digest: sha256:167dbcf67a044234b7ac71b693633dcf50a1860440d4b424454678d9e8b439ca
    Status: Downloaded newer image for e36io/hyperfridge-r0:macos-latest
    docker.io/e36io/hyperfridge-r0:macos-latest

    What's Next?
      1. Sign in to your Docker account → docker login
      2. View a summary of image vulnerabilities and recommendations → docker scout quickview e36io/hyperfridge-r0:macos-latest
    ```
  </details>

- [x] Docker image can be tagged and integration tests run, however, it "will not generate valid, secure proofs"

  <details>
    <summary>Output</summary>
    ```zsh
    % docker tag  e36io/hyperfridge-r0:macos-latest fridge
    % docker run --env RISC0_DEV_MODE=true  fridge host test
    WARNING: proving in dev mode. This will not generate valid, secure proofs.
    WARNING: Proving in dev mode does not generate a valid receipt. Receipts generated from this process are invalid and should never be used in production.
    Commitment {
        hostinfo: "host:main",
        iban: "CH4308307000289537312",
        pub_bank_pem: "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvizgj/ppKl2zYD4mxsjs\no+4ji+wx9AMQFpKrdQ9AHFQL347BYicn0zvnnoDAwL5D012Z1EYJ+Zz1GIt83li4\nbBS7qnT9q0htl6x8pVszXyi7vA9qOWWICmp6jp/zO+nVWKEIkDekKW0uBwbXMsA3\nh+7yAPJapUwLNAmG2GsXQp1HWOKZkTFdDBG7nJJ5scc0AiwRjB2btvvNQnG+BGz4\n7a3i290J91Fjbgr+0BC2vhi3dHjDDDFw3y/+8Icjapi7UPhX9HDNum5lQzwvYECj\n3KsG7P7V2c3GRQdMA6t4kSub/d9AGpI5bRp4Iz+LaEWDFm4yN0YMK5sl9An8YPPg\ncwIDAQAB\n-----END PUBLIC KEY-----\n",
        pub_witness_pem: "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAngnoLec3QWzHkgGW7Uj2\ni2yFp86KDuKrFUus6pXHJmCnZILTAOiKzNCAB5qIDBwa9h50/OTZ6pv1X5mgVM2S\nPNKvZoUrfOU6Jg5m1b3GkyLj/3AfdS+nJbjUXFlyMWIi5c26WvvW2FsqsEoehAGF\nQpurZV6QKWSKEk16TKoI2kcD8sEAUb5TVwx+7D5kz8ZgUX0g/KqM+o2kUxBiSKdS\n1p9CDEhwWWe0MR0ja4Eh6+pFyIIjVsrybB9ufBuuBC31redFGZ4nBX43xts5Do6Z\n63U1lX15gNiJtVxldBfKm9o2ofPMxdPu3KXEg7f3Zm2n9eA1FxUKurwac7a31V8d\nLwIDAQAB\n-----END PUBLIC KEY-----\n",
        pub_client_pem: "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvlbtES+ljC3udEneaTyf\nXmLv4l4hwuXSEfCIYUfVZiDHzdeGK8wJ2gRSucBsxrr2NESdHuIrEPmDhWHnE4D6\nJy61WuL8QWVuiBTZFtSCgRIyeI9ojNTqq0vmO7Wj1Y9FYdIZ/iN8h9xOcuuQkja7\n2oTuM/aqGlycTbJSoioBkv5UbbcDz4MZ0Si9RAW3D+4IWePfKieTEeT3HYnBBChL\nS4pC1si44xz9vqJcj7zAOlpgaJ+vEhL3f/e4qYrb23R9KBY4Ui6UA1exMmWPbMs7\nni4bs93yyiNtpQlQ9sOV6HoPooKPHIufk/jlFdOIhB4m1XtErHIGSRp7Bt2NtFab\nHQIDAQAB\n-----END PUBLIC KEY-----\n",
        stmts: [
            Stmt {
                elctrnc_seq_nb: "247",
                fr_dt_tm: "2023-11-29T00:00:00",
                to_dt_tm: "2023-11-29T00:00:00",
                amt: "31709.14",
                ccy: "CHF",
                cd: "OPBD",
            },
            Stmt {
                elctrnc_seq_nb: "248",
                fr_dt_tm: "2023-11-30T00:00:00",
                to_dt_tm: "2023-11-30T00:00:00",
                amt: "31709.09",
                ccy: "CHF",
                cd: "OPBD",
            },
        ],
    }%
    ```
  </details>

- [x] A STARK receipt can be created

  <details>
    <summary>Output</summary>

    ```zsh
    % docker run --env RISC0_DEV_MODE=true  fridge host prove-camt53 \
        --request=../data/test/test.xml --bankkey ../data/pub_bank.pem \
        --clientkey ../data/client.pem --witnesskey ../data/pub_witness.pem \
        --clientiban CH4308307000289537312
    WARNING: proving in dev mode. This will not generate valid, secure proofs.
    WARNING: Proving in dev mode does not generate a valid receipt. Receipts generated from this process are invalid and should never be used in production.
    Commitment {
        hostinfo: "host:main",
        iban: "CH4308307000289537312",
        pub_bank_pem: "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvizgj/ppKl2zYD4mxsjs\no+4ji+wx9AMQFpKrdQ9AHFQL347BYicn0zvnnoDAwL5D012Z1EYJ+Zz1GIt83li4\nbBS7qnT9q0htl6x8pVszXyi7vA9qOWWICmp6jp/zO+nVWKEIkDekKW0uBwbXMsA3\nh+7yAPJapUwLNAmG2GsXQp1HWOKZkTFdDBG7nJJ5scc0AiwRjB2btvvNQnG+BGz4\n7a3i290J91Fjbgr+0BC2vhi3dHjDDDFw3y/+8Icjapi7UPhX9HDNum5lQzwvYECj\n3KsG7P7V2c3GRQdMA6t4kSub/d9AGpI5bRp4Iz+LaEWDFm4yN0YMK5sl9An8YPPg\ncwIDAQAB\n-----END PUBLIC KEY-----\n",
        pub_witness_pem: "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAngnoLec3QWzHkgGW7Uj2\ni2yFp86KDuKrFUus6pXHJmCnZILTAOiKzNCAB5qIDBwa9h50/OTZ6pv1X5mgVM2S\nPNKvZoUrfOU6Jg5m1b3GkyLj/3AfdS+nJbjUXFlyMWIi5c26WvvW2FsqsEoehAGF\nQpurZV6QKWSKEk16TKoI2kcD8sEAUb5TVwx+7D5kz8ZgUX0g/KqM+o2kUxBiSKdS\n1p9CDEhwWWe0MR0ja4Eh6+pFyIIjVsrybB9ufBuuBC31redFGZ4nBX43xts5Do6Z\n63U1lX15gNiJtVxldBfKm9o2ofPMxdPu3KXEg7f3Zm2n9eA1FxUKurwac7a31V8d\nLwIDAQAB\n-----END PUBLIC KEY-----\n",
        pub_client_pem: "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvlbtES+ljC3udEneaTyf\nXmLv4l4hwuXSEfCIYUfVZiDHzdeGK8wJ2gRSucBsxrr2NESdHuIrEPmDhWHnE4D6\nJy61WuL8QWVuiBTZFtSCgRIyeI9ojNTqq0vmO7Wj1Y9FYdIZ/iN8h9xOcuuQkja7\n2oTuM/aqGlycTbJSoioBkv5UbbcDz4MZ0Si9RAW3D+4IWePfKieTEeT3HYnBBChL\nS4pC1si44xz9vqJcj7zAOlpgaJ+vEhL3f/e4qYrb23R9KBY4Ui6UA1exMmWPbMs7\nni4bs93yyiNtpQlQ9sOV6HoPooKPHIufk/jlFdOIhB4m1XtErHIGSRp7Bt2NtFab\nHQIDAQAB\n-----END PUBLIC KEY-----\n",
        stmts: [
            Stmt {
                elctrnc_seq_nb: "247",
                fr_dt_tm: "2023-11-29T00:00:00",
                to_dt_tm: "2023-11-29T00:00:00",
                amt: "31709.14",
                ccy: "CHF",
                cd: "OPBD",
            },
            Stmt {
                elctrnc_seq_nb: "248",
                fr_dt_tm: "2023-11-30T00:00:00",
                to_dt_tm: "2023-11-30T00:00:00",
                amt: "31709.09",
                ccy: "CHF",
                cd: "OPBD",
            },
        ],
    }%      
    ```
  </details>

- [x] Proof can be verified

  <details>
    <summary>Output</summary>

    ```zsh
    % imageid=$(docker run fridge cat /app/IMAGE_ID.hex)

    % proof=/data/test/test.xml-Receipt-$imageid-latest.json

    % docker run --env RISC0_DEV_MODE=true  fridge verifier verify --imageid-hex=$imageid --proof-json=$proof

    verify e2d6e7645e1586f1c639a5d3913374669caa013519655d35dc8bf2c93e507cc0 Some("/data/test/test.xml-Receipt-e2d6e7645e1586f1c639a5d3913374669caa013519655d35dc8bf2c93e507cc0-latest.json")
    Ok(Commitment { hostinfo: "host:main", iban: "CH4308307000289537312", stmts: [Stmt { elctrnc_seq_nb: "247", fr_dt_tm: "2023-11-29T00:00:00", to_dt_tm: "2023-11-29T00:00:00", amt: "31709.14", ccy: "CHF", cd: "OPBD" }, Stmt { elctrnc_seq_nb: "248", fr_dt_tm: "2023-11-30T00:00:00", to_dt_tm: "2023-11-30T00:00:00", amt: "31709.09", ccy: "CHF", cd: "OPBD" }] })
    ```
  </details>

- [x] Building the dockerimage manually fails as well. However, given the fact that it can be pulled from the registry, I'm fine with accepting this limitation. For more context, see [this comment](https://github.com/w3f/Grant-Milestone-Delivery/pull/1125#issuecomment-1999053344).

  <details>
    <summary>Output</summary>

    ```zsh
    % docker  build . -t fridge

    [+] Building 37.0s (9/33)                                                                                  docker:desktop-linux
    => [internal] load build definition from Dockerfile                                                                       0.0s
    => => transferring dockerfile: 2.34kB                                                                                     0.0s
    => [internal] load metadata for docker.io/library/debian:bookworm-slim                                                    1.8s
    => [internal] load metadata for docker.io/library/rust:1.74-bookworm                                                      1.9s
    => [internal] load .dockerignore                                                                                          0.0s
    => => transferring context: 2B                                                                                            0.0s
    => [build  1/17] FROM docker.io/library/rust:1.74-bookworm@sha256:fd45a543ed41160eae2ce9e749e5b3c972625b0778104e8962e9b  25.8s
    => => resolve docker.io/library/rust:1.74-bookworm@sha256:fd45a543ed41160eae2ce9e749e5b3c972625b0778104e8962e9bfb1135353  0.0s
    => => sha256:6c641d36985b2db859fc64c43a6dbf7c25cdf73e5d16d107fab1d95a840bb4e1 23.58MB / 23.58MB                           2.2s
    => => sha256:fd45a543ed41160eae2ce9e749e5b3c972625b0778104e8962e9bfb113535301 988B / 988B                                 0.0s
    => => sha256:f7a48cf00631b7f3138b164618b05a3603ea32232d280ed04ffac327091f0906 1.38kB / 1.38kB                             0.0s
    => => sha256:ef77168cc79eb6dd02af2de55c2ab8b2abe70e8afe5765a1078ae70fbc41f87b 6.11kB / 6.11kB                             0.0s
    => => sha256:b66b4ecd3ecfb67b3b7a2a44b0199cbdfc94965c8bd3fefab75cd2e612799740 49.59MB / 49.59MB                          14.0s
    => => sha256:ddd8544b6e15c7a4096b1f48a67fb5bed2efba509fca597f1c164b582ab01c02 63.99MB / 63.99MB                          13.5s
    => => sha256:ae58c7c06d64a1a86430205c774637c7615d1365a575b256801bb23390ad5260 202.48MB / 202.48MB                        10.9s
    => => sha256:8a62ef715521e74aafe94c2d0d5dfb61aa54b85f72e703791a8331588cfee142 249.95MB / 249.95MB                        22.6s
    => => extracting sha256:b66b4ecd3ecfb67b3b7a2a44b0199cbdfc94965c8bd3fefab75cd2e612799740                                  1.2s
    => => extracting sha256:6c641d36985b2db859fc64c43a6dbf7c25cdf73e5d16d107fab1d95a840bb4e1                                  0.3s
    => => extracting sha256:ddd8544b6e15c7a4096b1f48a67fb5bed2efba509fca597f1c164b582ab01c02                                  1.4s
    => => extracting sha256:ae58c7c06d64a1a86430205c774637c7615d1365a575b256801bb23390ad5260                                  3.5s
    => => extracting sha256:8a62ef715521e74aafe94c2d0d5dfb61aa54b85f72e703791a8331588cfee142                                  2.9s
    => [internal] load build context                                                                                          0.1s
    => => transferring context: 1.17MB                                                                                        0.0s
    => [runtime  1/12] FROM docker.io/library/debian:bookworm-slim@sha256:d02c76d82364cedca16ba3ed6f9102406fa9fa8833076a609c  3.2s
    => => resolve docker.io/library/debian:bookworm-slim@sha256:d02c76d82364cedca16ba3ed6f9102406fa9fa8833076a609cabf14270f4  0.0s
    => => sha256:d02c76d82364cedca16ba3ed6f9102406fa9fa8833076a609cabf14270f43dfc 1.85kB / 1.85kB                             0.0s
    => => sha256:1d0a07d47a0394be1e327441ccdc0c8554e227a279e58a598fbfbd9f93b72ce9 529B / 529B                                 0.0s
    => => sha256:edb5ac49ded3e3edd87d3c2cbe08b3e27c5f74ddf9117999e7dc26fa2484693e 1.48kB / 1.48kB                             0.0s
    => => sha256:f546e941f15b76df3d982d56985432b05bc065e3923fb35be25a4d33d5c0f911 29.16MB / 29.16MB                           2.3s
    => => extracting sha256:f546e941f15b76df3d982d56985432b05bc065e3923fb35be25a4d33d5c0f911                                  0.8s
    => [runtime  2/12] RUN apt update && apt install -y perl qpdf xxd libxml2-utils openssl                                   8.6s
    => ERROR [build  2/17] RUN cargo install cargo-binstall                                                                   9.2s
    ------
    > [build  2/17] RUN cargo install cargo-binstall:
    0.125     Updating crates.io index
    0.232  Downloading crates ...
    0.645   Downloaded cargo-binstall v1.6.3
    0.701   Installing cargo-binstall v1.6.3
    0.728     Updating crates.io index
    6.622  Downloading crates ...
    6.983   Downloaded adler v1.0.2

    (...)

    8.711   Downloaded ring v0.16.20
    8.810 error: failed to compile `cargo-binstall v1.6.3`, intermediate artifacts can be found at `/tmp/cargo-installq4DwLf`.
    8.810 To reuse those artifacts with a future compilation, set the environment variable `CARGO_TARGET_DIR` to that path.
    8.810 
    8.810 Caused by:
    8.810   package `simple-git v0.2.3` cannot be built because it requires rustc 1.75.0 or newer, while the currently active rustc version is 1.74.1
    8.810   Try re-running cargo install with `--locked`
    ------
    Dockerfile:3
    --------------------
      1 |     FROM rust:1.74-bookworm as build
      2 |     
      3 | >>> RUN cargo install cargo-binstall
      4 |     RUN cargo binstall cargo-risczero -y
      5 |     RUN cargo risczero install
    --------------------
    ERROR: failed to solve: process "/bin/sh -c cargo install cargo-binstall" did not complete successfully: exit code: 101
    ```
  </details>
