# Evaluation ISO-8583 PoC


- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ISO-8583-implementation.md
- **Milestone:** 1
- **Kusama Identity:** Ha27MB4gKH36ieRPa1T1ASqhUz4sVxMoVmK7o5CS6tXDqjW
- **Previously successfully merged evaluation:** https://github.com/w3f/Grant-Milestone-Delivery/pull/917

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>|[Link](https://github.com/subclone/payment-processor/blob/main/LICENSE)| License is Ok. |
| 0b.  | Documentation |<ul><li>[x] </li></ul>|[Link](https://github.com/subclone/payment-processor/tree/main)| README is good. It contains links to other 3 README with proper documentation on how to run the solution. |
| 0c. | Testing and Testing Guide |<ul><li>[x] </li></ul>|[Link1](https://github.com/subclone/payment-processor/tree/main/pcidss/oracle/src/tests) [Link2](https://github.com/subclone/payment-processor/blob/main/pcidss/core/src/bank_account/models.rs#L149)| See General Comment #7. A Guide on how to run tests would be helpful for novice users. |
| 0d.  | Docker |<ul><li>[x] </li></ul>|[Link](https://github.com/subclone/payment-processor/blob/main/pcidss/Dockerfile)| Good. See more under General Comments #6  |
| 1.  | Merchant App |<ul><li>[x] </li></ul>|[Link](https://github.com/subclone/payment-processor/tree/main/interface)| See General comments #1 and #2.Resolve the openssl-legacy-provider issue |
| 2. | Payment Processor |<ul><li>[x] </li></ul>|[Link](https://github.com/subclone/payment-processor/tree/main/payment-processor)| See General Comment #3 |
| 3. | PCIDSS Compliant Gateway|<ul><li>[x] </li></ul>|[Link](https://github.com/subclone/payment-processor/tree/main/pcidss/oracle)|See General comment #8 |
| 4. | Makefile |<ul><li>[x] </li></ul>|[Link](https://github.com/subclone/payment-processor/blob/main/Makefile)| See General Comment #4 |



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
    

10. **Update after initial revision**: The Postgres Docker image worked. I am now able to run it locally.  

```
Status: Downloaded newer image for kingleard/pcidss-oracle:latest
Creating pcidss_postgres_1 ... done
Creating pcidss_oracle_1   ... done
Attaching to pcidss_postgres_1, pcidss_oracle_1
postgres_1  | ********************************************************************************
postgres_1  | WARNING: POSTGRES_HOST_AUTH_METHOD has been set to "trust". This will allow
postgres_1  |          anyone with access to the Postgres port to access your database without
postgres_1  |          a password, even if POSTGRES_PASSWORD is set. See PostgreSQL
postgres_1  |          documentation about "trust":
postgres_1  |          https://www.postgresql.org/docs/current/auth-trust.html
postgres_1  |          In Docker's default configuration, this is effectively any other
postgres_1  |          container on the same system.
postgres_1  | 
postgres_1  |          It is not recommended to use POSTGRES_HOST_AUTH_METHOD=trust. Replace
postgres_1  |          it with "-e POSTGRES_PASSWORD=password" instead to set a password in
postgres_1  |          "docker run".
postgres_1  | ********************************************************************************
postgres_1  | The files belonging to this database system will be owned by user "postgres".
postgres_1  | This user must also own the server process.
postgres_1  | 
postgres_1  | The database cluster will be initialized with locale "en_US.utf8".
postgres_1  | The default database encoding has accordingly been set to "UTF8".
postgres_1  | The default text search configuration will be set to "english".
postgres_1  | 
postgres_1  | Data page checksums are disabled.
postgres_1  | 
postgres_1  | fixing permissions on existing directory /var/lib/postgresql/data ... ok
postgres_1  | creating subdirectories ... ok
postgres_1  | selecting dynamic shared memory implementation ... posix
postgres_1  | selecting default max_connections ... 100
postgres_1  | selecting default shared_buffers ... 128MB
postgres_1  | selecting default time zone ... UTC
postgres_1  | creating configuration files ... ok
postgres_1  | running bootstrap script ... ok
postgres_1  | performing post-bootstrap initialization ... sh: locale: not found
postgres_1  | 2023-09-18 18:57:02.045 UTC [33] WARNING:  no usable system locales were found
postgres_1  | ok
postgres_1  | syncing data to disk ... ok
postgres_1  | 
postgres_1  | 
postgres_1  | Success. You can now start the database server using:
postgres_1  | 
postgres_1  |     pg_ctl -D /var/lib/postgresql/data -l logfile start
postgres_1  | 
postgres_1  | initdb: warning: enabling "trust" authentication for local connections
postgres_1  | You can change this by editing pg_hba.conf or using the option -A, or
postgres_1  | --auth-local and --auth-host, the next time you run initdb.
postgres_1  | waiting for server to start....2023-09-18 18:57:10.740 UTC [53] LOG:  starting PostgreSQL 14.9 on aarch64-unknown-linux-musl, compiled by gcc (Alpine 12.2.1_git20220924-r10) 12.2.1 20220924, 64-bit
postgres_1  | 2023-09-18 18:57:10.742 UTC [53] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
postgres_1  | 2023-09-18 18:57:10.758 UTC [54] LOG:  database system was shut down at 2023-09-18 18:57:09 UTC
postgres_1  | 2023-09-18 18:57:10.783 UTC [53] LOG:  database system is ready to accept connections
postgres_1  |  done
postgres_1  | server started
postgres_1  | 
postgres_1  | /usr/local/bin/docker-entrypoint.sh: ignoring /docker-entrypoint-initdb.d/*
postgres_1  | 
postgres_1  | waiting for server to shut down...2023-09-18 18:57:11.088 UTC [53] LOG:  received fast shutdown request
postgres_1  | 2023-09-18 18:57:11.089 UTC [53] LOG:  aborting any active transactions
postgres_1  | .2023-09-18 18:57:11.091 UTC [53] LOG:  background worker "logical replication launcher" (PID 60) exited with exit code 1
postgres_1  | 2023-09-18 18:57:11.093 UTC [55] LOG:  shutting down
postgres_1  | 2023-09-18 18:57:11.135 UTC [53] LOG:  database system is shut down
postgres_1  |  done
postgres_1  | server stopped
postgres_1  | 
postgres_1  | PostgreSQL init process complete; ready for start up.
postgres_1  | 
postgres_1  | 2023-09-18 18:57:11.216 UTC [1] LOG:  starting PostgreSQL 14.9 on aarch64-unknown-linux-musl, compiled by gcc (Alpine 12.2.1_git20220924-r10) 12.2.1 20220924, 64-bit
postgres_1  | 2023-09-18 18:57:11.216 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
postgres_1  | 2023-09-18 18:57:11.217 UTC [1] LOG:  listening on IPv6 address "::", port 5432
postgres_1  | 2023-09-18 18:57:11.220 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
postgres_1  | 2023-09-18 18:57:11.237 UTC [66] LOG:  database system was shut down at 2023-09-18 18:57:11 UTC
postgres_1  | 2023-09-18 18:57:11.256 UTC [1] LOG:  database system is ready to accept connections
oracle_1    | + /usr/bin/pcidss-oracle --iso8583-spec=/usr/bin/spec.yaml --database-host=postgres
oracle_1    | current-dir: /
oracle_1    | spec-file: /usr/bin/spec.yaml
postgres_1  | 2023-09-18 19:00:43.911 UTC [422] ERROR:  duplicate key value violates unique constraint "pg_database_datname_index"
postgres_1  | 2023-09-18 19:00:43.911 UTC [422] DETAIL:  Key (datname)=(mockdb) already exists.
postgres_1  | 2023-09-18 19:00:43.911 UTC [422] STATEMENT:  create database "mockdb";
postgres_1  | 2023-09-18 19:01:41.563 UTC [70] WARNING:  could not open statistics file "pg_stat_tmp/global.stat": Operation not permitted
```

I noticed that one of the tests was still failing due to duplication in database. You can try mocking the data in tests rather than reading/writing to database. 

```
test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/op_core-4ed3cc35f909a678)

running 5 tests
test transaction::models::tests::test_conversion_from_transaction_create_to_transaction ... ok
test bank_account::models::tests::test_arithmetic_overflow_nonce ... ok
test bank_account::models::tests::test_arithmetic_overflow_balance ... ok
test bank_account::models::tests::test_successful_debit ... ok
test bank_account::models::tests::test_successful_credit ... ok

test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/main.rs (target/debug/deps/pcidss_oracle-56e2f38d67c88873)

running 2 tests
test tests::payment::test_payment ... FAILED
test tests::reversal::test_reversals_success ... ok

failures:

---- tests::payment::test_payment stdout ----
thread 'tests::payment::test_payment' panicked at 'Error to init database to tests: InternalServerError("db error: ERROR: duplicate key value violates unique constraint \"pg_database_datname_index\"\nDETAIL: Key (datname)=(mockdb) already exists.")', oracle/src/tests/mock.rs:25:41
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace


failures:
    tests::payment::test_payment

test result: FAILED. 1 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out; finished in 2.25s
```