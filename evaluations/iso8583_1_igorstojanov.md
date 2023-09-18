# Evaluation ISO-8583 PoC


- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ISO-8583-implementation.md
- **Milestone:** 1
- **Kusama Identity:** Ha27MB4gKH36ieRPa1T1ASqhUz4sVxMoVmK7o5CS6tXDqjW
- **Previously successfully merged evaluation:** https://github.com/w3f/Grant-Milestone-Delivery/pull/917

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>|[Link](https://github.com/subclone/payment-processor/blob/main/LICENSE)| License is Ok. |
| 0b.  | Documentation |<ul><li>[x] </li></ul>|[Link](https://github.com/subclone/payment-processor/tree/main)| README is good. It contains links to other 3 README with proper documentation on how to run the solution. |
| 0c. | Testing and Testing Guide |<ul><li>[ ] </li></ul>|[Link1](https://github.com/subclone/payment-processor/tree/main/pcidss/oracle/src/tests) [Link2](https://github.com/subclone/payment-processor/blob/main/pcidss/core/src/bank_account/models.rs#L149)| See General Comment #7. A Guide on how to run tests would be helpful for novice users. |
| 0d.  | Docker |<ul><li>[x] </li></ul>|[Link](https://github.com/subclone/payment-processor/blob/main/pcidss/Dockerfile)| Good. See more under General Comments #6  |
| 1.  | Merchant App |<ul><li>[x] </li></ul>|[Link](https://github.com/subclone/payment-processor/tree/main/interface)| See General comments #1 and #2.Resolve the openssl-legacy-provider issue |
| 2. | Payment Processor |<ul><li>[x] </li></ul>|[Link](https://github.com/subclone/payment-processor/tree/main/payment-processor)| See General Comment #3 |
| 3. | PCIDSS Compliant Gateway|<ul><li>[] </li></ul>|[Link](https://github.com/subclone/payment-processor/tree/main/pcidss/oracle)|See General comment #8 |
| 4. | Makefile |<ul><li>[] </li></ul>|[Link](https://github.com/subclone/payment-processor/blob/main/Makefile)| See General Comment #4 |



## General Notes

1. Installing interface dependancies was successful with some warnings.

```
(base)  interface % yarn 
yarn install v1.22.18
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning " > react-credit-cards@0.8.3" has incorrect peer dependency "react@^15.0.0 || ^16.0.0".
warning " > react-credit-cards@0.8.3" has unmet peer dependency "prop-types@^15.7.2".
warning "react-hot-toast > goober@2.1.13" has unmet peer dependency "csstype@^3.0.10".
warning "react-scripts > eslint-config-react-app > eslint-plugin-flowtype@8.0.3" has unmet peer dependency "@babel/plugin-syntax-flow@^7.14.5".
warning "react-scripts > eslint-config-react-app > eslint-plugin-flowtype@8.0.3" has unmet peer dependency "@babel/plugin-transform-react-jsx@^7.14.9".
warning "react-scripts > react-dev-utils > fork-ts-checker-webpack-plugin@6.5.3" has unmet peer dependency "typescript@>= 2.7".
warning "@babel/plugin-proposal-private-property-in-object > @babel/plugin-syntax-private-property-in-object@7.14.5" has unmet peer dependency "@babel/core@^7.0.0-0".
warning "@babel/plugin-proposal-private-property-in-object > @babel/helper-create-class-features-plugin@7.22.15" has unmet peer dependency "@babel/core@^7.0.0".
warning "react-scripts > eslint-config-react-app > @typescript-eslint/eslint-plugin > tsutils@3.21.0" has unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta".
warning " > @babel/plugin-proposal-private-property-in-object@7.21.11" has unmet peer dependency "@babel/core@^7.0.0-0".
[4/4] 🔨  Building fresh packages...
✨  Done in 19.01s.
```

2. Starting the interface was not possible initially due to the following legacy issue: 

```
yarn run v1.22.18
$ export PORT=3001 && export SET NODE_OPTIONS=--openssl-legacy-provider && GENERATE_SOURCEMAP=false && react-scripts start
/opt/homebrew/Cellar/node/19.8.1/bin/node: --openssl-legacy-provider is not allowed in NODE_OPTIONS
error Command failed with exit code 9.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

Removing the *-openssl-legacy-provider* solved the problem. Please resolve this issue. 

3. Running the payment-processor worked:

```
yarn run v1.22.18
$ nodemon src/index.ts
[nodemon] 2.0.22
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: ts,json
[nodemon] starting `ts-node src/index.ts`
Connected to oracle at ws://127.0.0.1:3030
Server started
Server listening on port 3000
```

4. Running the makefile fails with the following output:

```
[2023-09-15T08:17:46Z INFO  pcidss_oracle] Starting PCIDSS Gateway Oracle
[2023-09-15T08:17:46Z INFO  pcidss_oracle] Connecting to Postgres database: postgres://postgres:postgres@localhost:5432/postgres
[2023-09-15T08:17:46Z INFO  op_core::postgres] Running migrations
[2023-09-15T08:17:46Z ERROR pcidss_oracle] Could not run migrations Error { kind: Connect, cause: Some(Os { code: 61, kind: ConnectionRefused, message: "Connection refused" }) }
make: *** [launch] Error 1
```

5. This is very similar idea to something you have previosly implemented. https://github.com/element36-io/ocw-ebics 

6. Docker build works although it takes about 20 minutes to build the image.

```
[+] Building 1559.8s (16/16) FINISHED                                                                                                                                                                            
 => [internal] load build definition from Dockerfile                                                                                                                                                        0.0s
 => => transferring dockerfile: 583B                                                                                                                                                                        0.0s
 => [internal] load .dockerignore                                                                                                                                                                           0.0s
 => => transferring context: 47B                                                                                                                                                                            0.0s
 => [internal] load metadata for docker.io/library/debian:bullseye-slim                                                                                                                                     2.1s
 => [internal] load metadata for docker.io/paritytech/ci-linux:production                                                                                                                                   2.4s
 => [auth] library/debian:pull token for registry-1.docker.io                                                                                                                                               0.0s
 => [auth] paritytech/ci-linux:pull token for registry-1.docker.io                                                                                                                                          0.0s
 => [builder 1/4] FROM docker.io/paritytech/ci-linux:production@sha256:dc9abf9e877c5bad94828245406dac8a186530e1ad6a1b5f2072e5e19e1f64b4                                                                   296.5s
 => => resolve docker.io/paritytech/ci-linux:production@sha256:dc9abf9e877c5bad94828245406dac8a186530e1ad6a1b5f2072e5e19e1f64b4                                                                             0.0s
 => => sha256:935ba62d5fdff39246cf9fca5697ae756bfdc34b2957c935254f447f1a296165 409.86MB / 409.86MB                                                                                                        248.9s
 => => sha256:dc9abf9e877c5bad94828245406dac8a186530e1ad6a1b5f2072e5e19e1f64b4 762B / 762B                                                                                                                  0.0s
 => => sha256:2d60a4916bc3faa064d298c966fd315dd26cd42fd54ec492ec238a99f649ca50 10.01kB / 10.01kB                                                                                                            0.0s
 => => sha256:9d21b12d5fab9ab82969054d72411ce627c209257df64b6057016c981e163c30 31.42MB / 31.42MB                                                                                                            9.0s
 => => sha256:94ec252bb138516408d499a54bd40801d1c76e3e0182571a90bb138e86cce7e3 588.46MB / 588.46MB                                                                                                        269.5s
 => => extracting sha256:9d21b12d5fab9ab82969054d72411ce627c209257df64b6057016c981e163c30                                                                                                                   1.0s
 => => extracting sha256:94ec252bb138516408d499a54bd40801d1c76e3e0182571a90bb138e86cce7e3                                                                                                                  16.0s
 => => extracting sha256:935ba62d5fdff39246cf9fca5697ae756bfdc34b2957c935254f447f1a296165                                                                                                                  10.4s
 => [stage-1 1/4] FROM docker.io/library/debian:bullseye-slim@sha256:3bc5e94a0e8329c102203c3f5f26fd67835f0c81633dd6949de0557867a87fac                                                                      28.3s
 => => resolve docker.io/library/debian:bullseye-slim@sha256:3bc5e94a0e8329c102203c3f5f26fd67835f0c81633dd6949de0557867a87fac                                                                               0.0s
 => => sha256:3bc5e94a0e8329c102203c3f5f26fd67835f0c81633dd6949de0557867a87fac 1.85kB / 1.85kB                                                                                                              0.0s
 => => sha256:dd78ce4ae2807bb29a4548203b8a9209995ddbb2d7e161a0203fd2b2b5d5c73d 529B / 529B                                                                                                                  0.0s
 => => sha256:2bde4f0c39bd2371a059c8ec68b7bcd02d3f3352e801cff45b46a1a5d2ddb3e2 1.48kB / 1.48kB                                                                                                              0.0s
 => => sha256:f96ab15157043879c2ff23e0556e798eba6a6ff3d7fd5d1384de223bb9f66f1d 30.06MB / 30.06MB                                                                                                           27.1s
 => => extracting sha256:f96ab15157043879c2ff23e0556e798eba6a6ff3d7fd5d1384de223bb9f66f1d                                                                                                                   1.0s
 => [internal] load build context                                                                                                                                                                           0.5s
 => => transferring context: 177.56kB                                                                                                                                                                       0.0s
 => [builder 2/4] WORKDIR /pcidss                                                                                                                                                                           0.1s
 => [builder 3/4] COPY . .                                                                                                                                                                                  0.1s
 => [builder 4/4] RUN cargo build --release --locked -p pcidss-oracle                                                                                                                                    1259.4s
 => [stage-1 2/4] COPY --from=builder /pcidss/target/release/pcidss-oracle /usr/bin                                                                                                                         0.1s 
 => [stage-1 3/4] RUN useradd -m -u 1000 -U -s /bin/sh -d /oracle oracle                                                                                                                                    0.3s 
 => [stage-1 4/4] RUN echo '#!/bin/bash\nset -xeu\n/usr/bin/pcidss-oracle $@' > /usr/bin/entrypoint.sh &&     chmod +x /usr/bin/entrypoint.sh                                                               0.2s 
 => exporting to image                                                                                                                                                                                      0.1s 
 => => exporting layers                                                                                                                                                                                     0.1s 
 => => writing image sha256:c67545634152bb811a83aea15bfcfc1aa465c82593be2266d7cb2761fbdbcf85 
```
Running the docker container locally gives the following error: 

```
qemu-x86_64: Could not open '/lib64/ld-linux-x86-64.so.2': No such file or directory
```

Could you publish your images to dockerhub, so we can download the pre-build images rather than building them locally? 

7. I was able to run the core tests: 

```
running 5 tests
test transaction::models::tests::test_conversion_from_transaction_create_to_transaction ... ok
test bank_account::models::tests::test_arithmetic_overflow_nonce ... ok
test bank_account::models::tests::test_successful_debit ... ok
test bank_account::models::tests::test_arithmetic_overflow_balance ... ok
test bank_account::models::tests::test_successful_credit ... ok

test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```

The oracle tests were failing tho.

```
running 2 tests
test tests::payment::test_payment ... FAILED
test tests::reversal::test_reversals_success ... FAILED

failures:

---- tests::payment::test_payment stdout ----
thread 'tests::payment::test_payment' panicked at 'Error to init database to tests: InternalServerError("error connecting to server: Connection refused (os error 61)")', oracle/src/tests/mock.rs:25:41
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace

---- tests::reversal::test_reversals_success stdout ----
thread 'tests::reversal::test_reversals_success' panicked at 'Error to init database to tests: InternalServerError("error connecting to server: Connection refused (os error 61)")', oracle/src/tests/mock.rs:25:41


failures:
    tests::payment::test_payment
    tests::reversal::test_reversals_success

test result: FAILED. 0 passed; 2 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s
```


8. Running the Oracle fails with similar error as the Makefile. 

```
workspace: /Users/igorstojanov/code/evaluations/payment-processor/pcidss/Cargo.toml
    Finished release [optimized] target(s) in 0.32s
     Running `target/release/pcidss-oracle --dev`
[2023-09-18T08:49:08Z ERROR pcidss_oracle] Could not run migrations Error { kind: Connect, cause: Some(Os { code: 61, kind: ConnectionRefused, message: "Connection refused" }) }
make: *** [run] Error 1
```

9. Consider hosting the solution online for the second delivery. It makes everything much easier to test and validate the functionality without running everything locally.