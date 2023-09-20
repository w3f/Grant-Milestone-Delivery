# Evaluation ISO-8583 PoC

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ISO-8583-implementation.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by nikw3f

| Number | Deliverable | Accepted | Link | Notes |
| -----: | ----------- | ------------- | ------------- | ----- |
| **0a.** | License | <ul><li>[x] </li></ul> | [License](https://github.com/subclone/payment-processor/blob/main/LICENSE) | MIT |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [Main README](https://github.com/subclone/payment-processor/tree/main) | Documentation can be improved. I recommend to add guide on how to run all the services in correct order and user flow. |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [Unit/Integration tests](https://github.com/subclone/payment-processor/tree/main/pcidss/oracle/src/tests), [Unit tests](https://github.com/subclone/payment-processor/blob/main/pcidss/core/src/bank_account/models.rs#L149) | All rust tests are working fine except 1. payment-processer node server and interface can use some tests. |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/subclone/payment-processor/blob/main/pcidss/Dockerfile) | Dockerfile is working fine but it is taking 20 min to build. Please check if build can be optimised. |
| 1. | Merchant App | <ul><li>[x] </li></ul> | [Merchant App](https://github.com/subclone/payment-processor/tree/main/interface) | This is a demo interface that uses the PCIDSS Oracle Gateway and Payment Processor to simulate bank dashboard and demo checkout page. |
| 2. | Payment Processor | <ul><li>[x] </li></ul> | [Payment processor server](https://github.com/subclone/payment-processor/tree/main/payment-processor) | Merchant app is working fine. |
| 3. | PCIDSS Compliant Gateway | <ul><li>[x] </li></ul> | [Oracle](https://github.com/subclone/payment-processor/tree/main/pcidss/oracle) | Oracle is working fine. |
| 4. | Makefile | <ul><li>[x] </li></ul> | [Makefile](https://github.com/subclone/payment-processor/blob/main/pcidss/Makefile) | makefile is working fine. |


## General Notes

1. Thank you very much for the milestone delivery. I've reviewed the milestone and I can accept it. Here's my feedback:

- Documentation can be improved. Please add guide on how to run all the services in correct order and user flow.
- All rust tests are working fine except 1 (see below). payment-processer node server and interface can use some tests.
- Dockerfile is working fine but it is taking 20 min to build. Please check if build can be optimised.

2. Interface is working fine

```
> cd interface
> yarn start
Compiled successfully!

You can now view checkout-page in the browser.

  Local:            http://localhost:3001
  On Your Network:  http://192.168.1.69:3001

Note that the development build is not optimized.
To create a production build, use yarn build.

webpack compiled successfully
```

3. payment-processor node server is working fine: 

```
➜  payment-processor git:(main) yarn start
yarn run v1.22.19
$ ts-node src/index.ts
Connected to oracle at ws://127.0.0.1:3030
Server started
Server listening on port 3000
```


4. PCIDSS oracle is working fine.

```
➜  payment-processor git:(main) make launch
Building the Oracle
warning: profiles for the non root package will be ignored, specify profiles at the workspace root:
package:   /Users/nikhil/w3f/payment-processor/pcidss/oracle/Cargo.toml
workspace: /Users/nikhil/w3f/payment-processor/pcidss/Cargo.toml
    Finished release [optimized] target(s) in 0.27s
Launching the Oracle
[2023-09-20T07:42:10Z INFO  pcidss_oracle] Starting PCIDSS Gateway Oracle
[2023-09-20T07:42:10Z INFO  pcidss_oracle] Connecting to Postgres database: postgres://postgres:postgres@localhost:5432/postgres
[2023-09-20T07:42:10Z INFO  op_core::postgres] Running migrations
[2023-09-20T07:42:10Z INFO  tokio_postgres::connection] NOTICE: relation "refinery_schema_history" already exists, skipping
[2023-09-20T07:42:10Z INFO  refinery_core::traits] current version: 2
[2023-09-20T07:42:10Z INFO  refinery_core::traits::r#async] no migrations to apply
[2023-09-20T07:42:10Z INFO  pcidss_oracle] Connected to Postgres database
[2023-09-20T07:42:10Z INFO  pcidss_oracle::rpc] Starting ISO8583 processor
current-dir: /Users/nikhil/w3f/payment-processor/pcidss
spec-file: spec.yaml
[2023-09-20T07:42:10Z INFO  pcidss_oracle::rpc] Running in dev mode, inserting dev accounts
[2023-09-20T07:42:10Z INFO  pcidss_oracle::rpc] Starting RPC server
[2023-09-20T07:42:10Z INFO  pcidss_oracle::rpc] RPC server listening on ws://127.0.0.1:3030
```

5. Oracle is dependent on postgres database.

6. Docker build is working fine. Build can be optimised.

```
➜  pcidss git:(main) docker build .
[+] Building 635.9s (15/15) FINISHED                                                                                                                                                             docker:desktop-linux
 => [internal] load .dockerignore                                                                                                                                                                                0.0s
 => => transferring context: 61B                                                                                                                                                                                 0.0s
 => [internal] load build definition from Dockerfile                                                                                                                                                             0.0s
 => => transferring dockerfile: 644B                                                                                                                                                                             0.0s
 => [internal] load metadata for docker.io/library/debian:bullseye-slim                                                                                                                                          5.4s
 => [internal] load metadata for docker.io/paritytech/ci-linux:production                                                                                                                                        4.3s
 => [builder 1/4] FROM docker.io/paritytech/ci-linux:production@sha256:dc9abf9e877c5bad94828245406dac8a186530e1ad6a1b5f2072e5e19e1f64b4                                                                         78.2s
 => => resolve docker.io/paritytech/ci-linux:production@sha256:dc9abf9e877c5bad94828245406dac8a186530e1ad6a1b5f2072e5e19e1f64b4                                                                                  0.0s
 => => sha256:dc9abf9e877c5bad94828245406dac8a186530e1ad6a1b5f2072e5e19e1f64b4 762B / 762B                                                                                                                       0.0s
 => => sha256:2d60a4916bc3faa064d298c966fd315dd26cd42fd54ec492ec238a99f649ca50 10.01kB / 10.01kB                                                                                                                 0.0s
 => => sha256:9d21b12d5fab9ab82969054d72411ce627c209257df64b6057016c981e163c30 31.42MB / 31.42MB                                                                                                                 2.9s
 => => sha256:94ec252bb138516408d499a54bd40801d1c76e3e0182571a90bb138e86cce7e3 588.46MB / 588.46MB                                                                                                              62.1s
 => => sha256:935ba62d5fdff39246cf9fca5697ae756bfdc34b2957c935254f447f1a296165 409.86MB / 409.86MB                                                                                                              44.2s
 => => extracting sha256:9d21b12d5fab9ab82969054d72411ce627c209257df64b6057016c981e163c30                                                                                                                        1.1s
 => => extracting sha256:94ec252bb138516408d499a54bd40801d1c76e3e0182571a90bb138e86cce7e3                                                                                                                       10.5s
 => => extracting sha256:935ba62d5fdff39246cf9fca5697ae756bfdc34b2957c935254f447f1a296165                                                                                                                        5.4s
 => [stage-1 1/5] FROM docker.io/library/debian:bullseye-slim@sha256:f794067bee57cf99c4c2b32f022a8782ad47c89e11f935d3ca5fdc7414cc465d                                                                           15.5s
 => => resolve docker.io/library/debian:bullseye-slim@sha256:f794067bee57cf99c4c2b32f022a8782ad47c89e11f935d3ca5fdc7414cc465d                                                                                    0.0s
 => => sha256:f794067bee57cf99c4c2b32f022a8782ad47c89e11f935d3ca5fdc7414cc465d 1.85kB / 1.85kB                                                                                                                   0.0s
 => => sha256:fe434fe10d82fb78bb8a9819f19a854c2d17ef87f2f7794ea0155bdb5ad89f08 529B / 529B                                                                                                                       0.0s
 => => sha256:3fa8a56f7bc99978173e7bd6de8e4d6112bcc40575c57efb01c7d690656ac741 1.48kB / 1.48kB                                                                                                                   0.0s
 => => sha256:fc521c5b98350f6fd8c72ace1e48558bb7b53cb3db201a2a3b42095401cd02f1 30.06MB / 30.06MB                                                                                                                14.4s
 => => extracting sha256:fc521c5b98350f6fd8c72ace1e48558bb7b53cb3db201a2a3b42095401cd02f1                                                                                                                        1.1s
 => [internal] load build context                                                                                                                                                                                0.0s
 => => transferring context: 179.78kB                                                                                                                                                                            0.0s
 => [builder 2/4] WORKDIR /pcidss                                                                                                                                                                                0.2s
 => [builder 3/4] COPY . .                                                                                                                                                                                       0.0s
 => [builder 4/4] RUN cargo build --release --locked -p pcidss-oracle                                                                                                                                          551.7s
 => [stage-1 2/5] COPY --from=builder /pcidss/target/release/pcidss-oracle /usr/bin                                                                                                                              0.0s
 => [stage-1 3/5] COPY --from=builder /pcidss/spec.yaml /usr/bin                                                                                                                                                 0.0s
 => [stage-1 4/5] RUN useradd -m -u 1000 -U -s /bin/sh -d /oracle oracle                                                                                                                                         0.1s
 => [stage-1 5/5] RUN echo '#!/bin/bash\nset -xeu\n/usr/bin/pcidss-oracle $@' > /usr/bin/entrypoint.sh &&     chmod +x /usr/bin/entrypoint.sh                                                                    0.1s
 => exporting to image                                                                                                                                                                                           0.0s
 => => exporting layers                                                                                                                                                                                          0.0s
 => => writing image sha256:95369bd9897e810bbb0f034cc53d8885ac05fe15250e2eb1d6697a22d291a6b9                                                                                                                     0.0s
```

## Unit tests

7. For PCIDSS oracle All tests are passing except 1:

```
➜  pcidss git:(main) cargo test
warning: profiles for the non root package will be ignored, specify profiles at the workspace root:
package:   /Users/nikhil/w3f/payment-processor/pcidss/oracle/Cargo.toml
workspace: /Users/nikhil/w3f/payment-processor/pcidss/Cargo.toml
    Finished test [unoptimized + debuginfo] target(s) in 0.20s
     Running unittests src/lib.rs (target/debug/deps/op_api-4948e635d4fc3069)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/op_core-4ed3cc35f909a678)

running 5 tests
test transaction::models::tests::test_conversion_from_transaction_create_to_transaction ... ok
test bank_account::models::tests::test_arithmetic_overflow_nonce ... ok
test bank_account::models::tests::test_successful_debit ... ok
test bank_account::models::tests::test_arithmetic_overflow_balance ... ok
test bank_account::models::tests::test_successful_credit ... ok

test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/main.rs (target/debug/deps/pcidss_oracle-56e2f38d67c88873)

running 2 tests
test tests::payment::test_payment ... FAILED
test tests::reversal::test_reversals_success ... ok

failures:

---- tests::payment::test_payment stdout ----
thread 'tests::payment::test_payment' panicked at 'Error to init database to tests: InternalServerError("db error: ERROR: database \"mockdb\" does not exist")', oracle/src/tests/mock.rs:25:41
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace


failures:
    tests::payment::test_payment

test result: FAILED. 1 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.45s

error: test failed, to rerun pass `-p pcidss-oracle --bin pcidss-oracle`
```


Please add some tests for payment-processer node server and interface.