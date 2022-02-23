# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/7ab49456baf43a9474cb3fa49af0c7e42e0db5f0/applications/prosopo.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| [provider license](https://github.com/prosopo-io/provider/blob/a796760a66551302a6eb44ca7b5a5d421e740721/LICENSE), [protocol license](https://github.com/prosopo-io/protocol/blob/8debb2a1ce32dc7ca4c1df5b96b1ff903581fc0b/LICENSE), [example dApp license](https://github.com/prosopo-io/dapp-example/blob/418d4b658764539fab67b2602481306b1b51e4ba/LICENSE) | GPLv3 |
| 0b. | Documentation |<ul><li>[ ] </li></ul>| [provider README](https://github.com/prosopo-io/provider/blob/a796760a66551302a6eb44ca7b5a5d421e740721/README.md), [protocol README](https://github.com/prosopo-io/protocol/blob/8debb2a1ce32dc7ca4c1df5b96b1ff903581fc0b/README.md), [integration README](https://github.com/prosopo-io/integration/blob/main/README.md) | see [Documentation Feedback](#documentation-feedback) |
| 0c. | Testing Guide |<ul><li>[ ] </li></ul>| [provider tests](https://github.com/prosopo-io/provider/blob/a796760a66551302a6eb44ca7b5a5d421e740721/README.md#tests), [protocol tests](https://github.com/prosopo-io/protocol/blob/8debb2a1ce32dc7ca4c1df5b96b1ff903581fc0b/README.md#test), [integration tests](https://github.com/prosopo-io/integration/blob/main/README.md#tests) | see [Testing Guide Feedback](#testing-guide-feedback) |
| 0d. | Docker |<ul><li>[ ] </li></ul>| [Provider Dockerfile](https://github.com/prosopo-io/provider/blob/a796760a66551302a6eb44ca7b5a5d421e740721/dev.dockerfile), [docker-compose.yml](https://github.com/prosopo-io/integration/blob/6df0787178d896791a3b0bd3fdcd2fa71a6d783d/docker-compose.yml) | provider-api and substrate-node can't be started, see [Documentation Feedback](#documentation-feedback). Only the mongodb container can be started. |
| 0e. | Article |<ul><li>[x] </li></ul>| [Article](https://github.com/prosopo-io/prosopo-website/blob/1b28c45a53c8f9fce64b2b75d579aa70b2152bc7/src/articles/prosopo-web3-foundation-grant.md) | - |
| 1. | Prosopo Contract Development |<ul><li>[ ] </li></ul>| [protocol repo](https://github.com/prosopo-io/protocol/) | Functionality couldn't yet be tested, see [Documentation Feedback](#documentation-feedback) |
| 2. | Prosopo Provider Service |<ul><li>[ ] </li></ul>| [provider repo](https://github.com/prosopo-io/provider) | Functionality couldn't yet be tested, see [Documentation Feedback](#documentation-feedback) |
| 3. | External Contract |<ul><li>[ ] </li></ul>| [dapp-example repo](https://github.com/prosopo-io/dapp-example) | Functionality couldn't yet be tested, see [Documentation Feedback](#documentation-feedback) |

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

### Documentation Feedback

#### Inline Comments

- I saw that there are still a lot of TODO comments in the [contract file](https://github.com/prosopo-io/protocol/blob/8debb2a1ce32dc7ca4c1df5b96b1ff903581fc0b/contracts/lib.rs). Do you intend to fix these and if so, when? Also, are there any critical TODOs that should be resolved as part of this milestone delivery?
- Inline comments within the contract are mostly sufficient, however, some `struct`s and `enum`s have none, mostly [L35-L239](https://github.com/prosopo-io/protocol/blob/8debb2a1ce32dc7ca4c1df5b96b1ff903581fc0b/contracts/lib.rs#L35-L239).

#### Docs

- The [integration README](https://github.com/prosopo-io/integration/blob/6df0787178d896791a3b0bd3fdcd2fa71a6d783d/README.md#prerequisites) lists following the steps in the protocol README as a prerequesite. Then, in the [protocol README](https://github.com/prosopo-io/protocol/blob/8debb2a1ce32dc7ca4c1df5b96b1ff903581fc0b/README.md#deploy) there are instructions for deploying the contract. However, at this time the substrate node isn't running yet which is why the deployment script fails.

- Unfortunately the `make dev` command fails on my MacBook Air (M1, 2020) running on macOS Monterey 12.2. I was not able to fix the issue but I found a [similar one](https://github.com/blockscout/blockscout/issues/954#issuecomment-432124337). This is the output on my machine, notice that for simplicity I only included the parts that I thought were relevant:
  ```bash
  % make dev
    ./scripts/run-dev.sh
    [+] Building 381.1s (11/16)                                                                                                                                                                                                                              
    => [internal] load build definition from Substrate.dockerfile                                                                  0.0s
    => => transferring dockerfile: 837B                                                                                             0.0s
    => [internal] load .dockerignore                                                                                                0.0s
    => => transferring context: 2B                                                                                                  0.0s
    => [internal] load metadata for docker.io/library/debian:bookworm-slim                                                          1.8s
    => [ 1/12] FROM docker.io/library/debian:bookworm-slim@sha256:67d6b7c886ae6568ca9fc2a206583093d20c2d17261ac3006aa0d959826c3bff                                        
    => [ 8/12] RUN . ~/.cargo/env &&     cd substrate &&     cargo build --locked --release                                       379.2s
    => => #   process didn't exit successfully: `rustc --crate-name libsecp256k1 --edition=2018 /root/.cargo/registry/src/github.com-1ecc6299db9ec823/libsecp256k1-0.7.0/src/lib.rs --error-format=json --json=diagnostic-rendered-ansi,artifacts --crate-type lib --emit=dep-info,metadata,link -C opt-level=3 -C embed-bitcode=no --cfg 'feature="default"' --cfg 'feature="
    => => # hmac"' --cfg 'feature="hmac-drbg"' --cfg 'feature="sha2"' --cfg 'feature="static-context"' --cfg 'feature="std"' --cfg 'feature="typenum"' -C metadata=7c91307b066ef596 -C extra-filename=-7c91307b066ef596 --out-dir /substrate/target/release/deps -L dependency=/substrate/target/release/deps --extern arrayref=/substrate/target/release/deps/libarrayref-17a
    => => # 09001e44b0cf0.rmeta --extern base64=/substrate/target/release/deps/libbase64-3b4bbad27b382180.rmeta --extern digest=/substrate/target/release/deps/libdigest-abc5066828294dba.rmeta --extern hmac_drbg=/substrate/target/release/deps/libhmac_drbg-8bdd53f9f4f7293d.rmeta --extern libsecp256k1_core=/substrate/target/release/deps/liblibsecp256k1_core-90c936391
    => => # c7cb851.rmeta --extern rand=/substrate/target/release/deps/librand-4e02e933e4490265.rmeta --extern serde=/substrate/target/release/deps/libserde-ee2fa4c60838c057.rmeta --extern sha2=/substrate/target/release/deps/libsha2-cf075108f690ab69.rmeta --extern typenum=/substrate/target/release/deps/libtypenum-f5d6b2c5304005e0.rmeta --cap-lints allow` (signal: 
    => => # 9, SIGKILL: kill)                                                                                                                                                                                                                                                                                                                                                 
    => => # warning: build failed, waiting for other jobs to finish...  


    (...)

    #11 334.6 error: could not compile `libsecp256k1`
    #11 334.6 
    #11 334.6 Caused by:
    #11 334.6   process didn't exit successfully: `rustc --crate-name libsecp256k1 --edition=2018 /root/.cargo/registry/src/github.com-1ecc6299db9ec823/libsecp256k1-0.7.0/src/lib.rs --error-format=json --json=diagnostic-rendered-ansi,artifacts --crate-type lib --emit=dep-info,metadata,link -C opt-level=3 -C embed-bitcode=no --cfg 'feature="default"' --cfg 'feature="hmac"' --cfg 'feature="hmac-drbg"' --cfg 'feature="sha2"' --cfg 'feature="static-context"' --cfg 'feature="std"' --cfg 'feature="typenum"' -C metadata=7c91307b066ef596 -C extra-filename=-7c91307b066ef596 --out-dir /substrate/target/release/deps -L dependency=/substrate/target/release/deps --extern arrayref=/substrate/target/release/deps/libarrayref-17a09001e44b0cf0.rmeta --extern base64=/substrate/target/release/deps/libbase64-3b4bbad27b382180.rmeta --extern digest=/substrate/target/release/deps/libdigest-abc5066828294dba.rmeta --extern hmac_drbg=/substrate/target/release/deps/libhmac_drbg-8bdd53f9f4f7293d.rmeta --extern libsecp256k1_core=/substrate/target/release/deps/liblibsecp256k1_core-90c936391c7cb851.rmeta --extern rand=/substrate/target/release/deps/librand-4e02e933e4490265.rmeta --extern serde=/substrate/target/release/deps/libserde-ee2fa4c60838c057.rmeta --extern sha2=/substrate/target/release/deps/libsha2-cf075108f690ab69.rmeta --extern typenum=/substrate/target/release/deps/libtypenum-f5d6b2c5304005e0.rmeta --cap-lints allow` (signal: 9, SIGKILL: kill)
    #11 334.6 warning: build failed, waiting for other jobs to finish...
    #11 539.0 error: build failed
    ------
    failed to solve: rpc error: code = Unknown desc = executor failed running [/bin/sh -c . ~/.cargo/env &&     cd substrate &&     cargo build --locked --release]: exit code: 101
    Waiting for the substrate node to start up...


    (...)

    yarn install v1.22.17
    error `install` has been replaced with `add` to add new dependencies. Run "yarn add v1.22.17 [1/5] Validating package.json... [2/5] Resolving packages... success Already up-to-date. Done in 0.14s." instead.
    info Visit https://yarnpkg.com/en/docs/cli/install for documentation about this command.
        Updating crates.io index
    Installing cargo-contract v0.16.0

    (...)

    yarn run v1.22.17
    warning package.json: License should be a valid SPDX license expression                                                                                                                                                                                                                                                                                                    
    $ yarn redspot run ./scripts/deploy.ts
    warning package.json: License should be a valid SPDX license expression                                                                                                                                                                                                                                                                                                    
    $ /Users/xxx/repos/prosopo/integration/protocol/node_modules/.bin/redspot run ./scripts/deploy.ts
    ✔️ No file changes checked, skip compilation

    WARN  Socket event: error

    _Event {
    type: 'error',
    isTrusted: false,
    _yaeti: true,
    target: W3CWebSocket {
        _listeners: {},
        addEventListener: [Function: _addEventListener],
        removeEventListener: [Function: _removeEventListener],
        dispatchEvent: [Function: _dispatchEvent],
        _url: 'ws://127.0.0.1:9944',
        _readyState: 3,
        _protocol: undefined,
        _extensions: '',
        _bufferedAmount: 0,
        _binaryType: 'arraybuffer',
        _connection: undefined,
        _client: WebSocketClient {
        _events: [Object: null prototype] {},
        _eventsCount: 0,
        _maxListeners: undefined,
        config: [Object],
        _req: null,
        protocols: [],
        origin: undefined,
        url: [Url],
        secure: false,
        base64nonce: '0LLqy6im2SGbEnwDdOmhJg==',
        [Symbol(kCapture)]: false
        },
        onclose: null,
        onerror: null,
        onmessage: null,
        onopen: null
    },
    cancelable: true,
    stopImmediatePropagation: [Function (anonymous)]
    }
    [UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "#<_Event>".] {
    code: 'ERR_UNHANDLED_REJECTION'
    }
    error Command failed with exit code 1.                                                                      
    info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
    error Command failed with exit code 1.

    info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
    yarn run v1.22.17
    warning package.json: License should be a valid SPDX license expression                                                                                                                                                                                 
    $ npx --trace-warnings redspot run ./scripts/deploy.ts
    ✔️ No file changes checked, skip compilation

    WARN  Socket event: error

    _Event {
    type: 'error',
    isTrusted: false,
    _yaeti: true,
    target: W3CWebSocket {
        _listeners: {},
        addEventListener: [Function: _addEventListener],
        removeEventListener: [Function: _removeEventListener],
        dispatchEvent: [Function: _dispatchEvent],
        _url: 'ws://127.0.0.1:9944',
        _readyState: 3,
        _protocol: undefined,
        _extensions: '',
        _bufferedAmount: 0,
        _binaryType: 'arraybuffer',
        _connection: undefined,
        _client: WebSocketClient {
        _events: [Object: null prototype] {},
        _eventsCount: 0,
        _maxListeners: undefined,
        config: [Object],
        _req: null,
        protocols: [],
        origin: undefined,
        url: [Url],
        secure: false,
        base64nonce: '999Z4V6ijn35vLFmSR3EwQ==',
        [Symbol(kCapture)]: false
        },
        onclose: null,
        onerror: null,
        onmessage: null,
        onopen: null
    },
    cancelable: true,
    stopImmediatePropagation: [Function (anonymous)]
    }
    [UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "#<_Event>".] {
    code: 'ERR_UNHANDLED_REJECTION'
    }
    error Command failed with exit code 1.                                                                                                                                                                                                                                                                                                                                     
    info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

    (...)

    #11 780.1 warning: 1.	<eof> parser at end of file
    #11 780.1 
    #11 781.4 error: build failed
    ------
    failed to solve: rpc error: code = Unknown desc = executor failed running [/bin/sh -c . ~/.cargo/env &&     cd substrate &&     cargo build --locked --release]: exit code: 101
    Installing packages for redspot and building
    Error: No such container: zsh
    Sending funds to the Provider account and registering the provider
    Error: No such container: zsh
    Dev env up! You can now interact with the provider-api.
    "docker exec" requires at least 2 arguments.
    See 'docker exec --help'.

    Usage:  docker exec [OPTIONS] CONTAINER COMMAND [ARG...]

    Run a command in a running container
    make: *** [dev] Error 1
    ```

- Even when running the `make dev` on Ubuntu 20.04.3 LTS it fails. I'm using Docker version 20.10.12, build e91ed57 here:

  ```bash
    $ make dev
        ./scripts/run-dev.sh
        unknown shorthand flag: 'd' in -d
        See 'docker --help'.

    (...)

    Waiting for the substrate node to start up...
    warning package.json: License should be a valid SPDX license expression
    warning prosopo-contract@1.0.0: License should be a valid SPDX license expression
    warning prosopo-contract@1.0.0: License should be a valid SPDX license expression                                                                                     
    warning Resolution field "@polkadot/util@8.3.3" is incompatible with requested version "@polkadot/util@8.4.1"
    warning @polkadot/util-crypto > micro-base@0.10.2: Switch to @scure/base for audited version of the lib & updates
    error Package "" refers to a non-existing file '"/home/seraya/repos/integration/redspot/build/redspot-chai"'.
    yarn install v1.22.17
    info No lockfile found.
    error `install` has been replaced with `add` to add new dependencies. Run "yarn add v1.22.17 info No lockfile found. [1/5] Validating package.json... [2/5] Resolving packages... info Visit https://yarnpkg.com/en/docs/cli/install for documentation about this command." instead.
    info Visit https://yarnpkg.com/en/docs/cli/install for documentation about this command.

    (...)

    $ yarn redspot run ./scripts/deploy.ts
    warning package.json: License should be a valid SPDX license expression
    error Command "redspot" not found.
    info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
    error Command failed with exit code 1.
    info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
    yarn run v1.22.17

    $ npx --trace-warnings redspot run ./scripts/deploy.ts
    Need to install the following packages:
    redspot
    Ok to proceed? (y) y
    npm WARN deprecated uuid@3.3.2: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
    Error RS12: Trying to use a non-local installation of Redspot, which is not supported.
    Please install Redspot locally using npm or Yarn, and try again.

    You tried to run Redspot from a global installation or not installing it at all. This is not supported.

    Please install Redspot locally using npm or Yarn, and try again.

    (...)

    error Command "ts-node" not found.
    info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
    error Command failed with exit code 1.

    info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
    PROVIDER_MNEMONIC not set!
    ./scripts/run-dev.sh: line 39: Provider keyring index 0:  ${echo $PROVIDER_KEYRING[0]}: bad substitution
    unknown shorthand flag: 'd' in -d
    See 'docker --help'.

    Usage:  docker [OPTIONS] COMMAND

    (...)

    Installing packages for redspot and building
    Error: No such container: zsh
    Sending funds to the Provider account and registering the provider
    Error: No such container: zsh
    Dev env up! You can now interact with the provider-api.
    "docker exec" requires at least 2 arguments.
    See 'docker exec --help'.

    Usage:  docker exec [OPTIONS] CONTAINER COMMAND [ARG...]

    Run a command in a running container
    make: *** [Makefile:5: dev] Error 1
  ```

### Testing Guide Feedback

#### Provider Tests

- Currently fail on my machine (MacBook):

    ```bash
    % yarn test   
    yarn run v1.22.17
    $ yarn redspot test
    $ /Users/xxx/repos/prosopo/integration/provider/node_modules/.bin/redspot test
    Error RS8: There's one or more errors in your config file:

    * Invalid value undefined for RedspotConfig.networks.development.accounts.0.6 - Expected a value of type string.
    * Invalid value "//Alice" for RedspotConfig.networks.development.accounts.1.0 - Expected a value of type { mnemonic: string | undefined, initialIndex: number | undefined, count: number | undefined, path: string | undefined }.
    * Invalid value "//Bob" for RedspotConfig.networks.development.accounts.1.1 - Expected a value of type { mnemonic: string | undefined, initialIndex: number | undefined, count: number | undefined, path: string | undefined }.
    * Invalid value "//Charlie" for RedspotConfig.networks.development.accounts.1.2 - Expected a value of type { mnemonic: string | undefined, initialIndex: number | undefined, count: number | undefined, path: string | undefined }.
    * Invalid value "//Dave" for RedspotConfig.networks.development.accounts.1.3 - Expected a value of type { mnemonic: string | undefined, initialIndex: number | undefined, count: number | undefined, path: string | undefined }.
    * Invalid value "//Eve" for RedspotConfig.networks.development.accounts.1.4 - Expected a value of type { mnemonic: string | undefined, initialIndex: number | undefined, count: number | undefined, path: string | undefined }.
    * Invalid value "//Ferdie" for RedspotConfig.networks.development.accounts.1.5 - Expected a value of type { mnemonic: string | undefined, initialIndex: number | undefined, count: number | undefined, path: string | undefined }.
    * Invalid value undefined for RedspotConfig.networks.development.accounts.1.6 - Expected a value of type { mnemonic: string | undefined, initialIndex: number | undefined, count: number | undefined, path: string | undefined }.

    To learn more about Redspot's configuration, please go to https://redspot.org/config/

    You have one or more errors in your config file.                                                                                                                                                                                                                                                                                                                  22:18:53

    Check the error message for details, or go to [documentation](https://redspot.org/config/) to learn more.

    error Command failed with exit code 1.
    info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
    error Command failed with exit code 1.
    info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
    ```

#### Contract/Protocol Tests

- Running the contract tests currently fails. Please add instructions for installing `tarpaulin` to fix this.
    ```bash
    % cargo +nightly tarpaulin --no-default-features --features std --verbose -- --nocapture
    error: no such subcommand: `tarpaulin`
    ```

- The first set of tests pass. In your [application](https://github.com/w3f/Grants-Program/blob/c038bd3a57c69ffd6e56a34f2944971787496d67/applications/prosopo.md?plain=1#L691) you were aiming for a test coverage of ~80%, however, currently its only 21.71%:

    ```bash
    $ cargo +nightly tarpaulin --no-default-features --features std --verbose -- --nocapture
        Feb 15 17:18:03.584 DEBUG cargo_tarpaulin: set up logging
        Feb 15 17:18:03.584  INFO cargo_tarpaulin::config: Creating config
        Feb 15 17:18:03.616  INFO cargo_tarpaulin: Running Tarpaulin
        Feb 15 17:18:03.616  INFO cargo_tarpaulin: Building project
        Feb 15 17:18:03.616  INFO cargo_tarpaulin::cargo: Cleaning project
        Compiling proc-macro2 v1.0.36
        
        (...)

        21.71% coverage, 89/410 lines covered, +0% change in coverage
    ```

- The 2nd set of tests fails:

    ```bash
    $ cargo +nightly tarpaulin --no-default-features --features std,ink-experimental-engine --verbose -- --nocapture
        Feb 15 17:19:38.821 DEBUG cargo_tarpaulin: set up logging
        Feb 15 17:19:38.821  INFO cargo_tarpaulin::config: Creating config
        Feb 15 17:19:38.852  INFO cargo_tarpaulin: Running Tarpaulin
        Feb 15 17:19:38.852  INFO cargo_tarpaulin: Building project
        Feb 15 17:19:38.852  INFO cargo_tarpaulin::cargo: Cleaning project
        Compiling proc-macro2 v1.0.36
        Compiling unicode-xid v0.2.2

        (...)

        Feb 15 17:19:51.023 DEBUG cargo_tarpaulin::cargo: Linker paths: ["/home/seraya/repos/integration/protocol/contracts/target/debug/build/secp256k1-sys-9987bd1144a50a95/out"]
        error: Broken pipe (os error 32)
        warning: build failed, waiting for other jobs to finish...
        error: Broken pipe (os error 32)
        error: build failed
        Feb 15 17:19:51.092 ERROR cargo_tarpaulin: Failed to compile tests! Error: prosopo: this function takes 1 argument but 0 arguments were supplied
        Error: "Failed to compile tests! Error: prosopo: this function takes 1 argument but 0 arguments were supplied"
    ```

#### Integration Tests

- couldn't be run since the container couldn't be started