# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/hex.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | Unlicense | <ul><li>[x] </li></ul> | [Unlicense](https://github.com/rust-0x0/hex-space-protocol-substrate/blob/f723f5f3e3c7f7136c0936b648072a7dcd920d85/LICENSE) | - |
| 0b. | Documentation | <ul><li>[ ] </li></ul> | [README](https://github.com/rust-0x0/hex-space-protocol-docs/blob/3f4827905237927de45806e5ab4d834964407d00/README.md), [hex_space contract](https://github.com/rust-0x0/hex-space-protocol-substrate/blob/f723f5f3e3c7f7136c0936b648072a7dcd920d85/hex_space/lib.rs) | Good inline documentation. README documents all steps required to run the deliveries. However, there is not guide on how to test the frontend. |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [inline tests](https://github.com/rust-0x0/hex-space-protocol-substrate/blob/f723f5f3e3c7f7136c0936b648072a7dcd920d85/hex_space/lib.rs#L1052) | See [Testing Feedback](#testing-feedback) |
| 0d. | Docker | <ul><li>[ ] </li></ul> | [Dockerfile](https://github.com/rust-0x0/hex-space-protocol-front-end/blob/362c896bb11f91fbe0c1728b93b28ab6db4963d0/Dockerfile) | Build fails, see [Docker Feedback](#docker-feedback) |
| 0e. | Article | <ul><li>[x] </li></ul> | [Medium Article](https://medium.com/@rust.0x0/hex-space-social-graph-487c548c2391) | - |
| 1. |  ink! Contract: FiveDegrees | <ul><li>[ ] </li></ul> | [ERC-1155 Contract](https://github.com/rust-0x0/hex-space-protocol-substrate/tree/f723f5f3e3c7f7136c0936b648072a7dcd920d85/erc1155), [Hexspace Contract](https://github.com/rust-0x0/hex-space-protocol-substrate/tree/f723f5f3e3c7f7136c0936b648072a7dcd920d85/hex_space) | See [Contracts Feedback](#contracts-feedback) |  
| 2. |  protocol front-end  | <ul><li>[ ] </li></ul> | [ReactJs Frontend](https://github.com/rust-0x0/hex-space-protocol-front-end/tree/362c896bb11f91fbe0c1728b93b28ab6db4963d0) | See [Frontend Feedback](#frontend-feedback) |  

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

Summarizes the overall performance plus additional feedback/comments

### Testing Feedback

- tests pass:

    ```bash
    hex-space-protocol-substrate/hex_space$ cargo test
        Finished test [unoptimized + debuginfo] target(s) in 0.02s
        Running unittests (target/debug/deps/hex_space-617ecd0f5c7f59c4)

    running 37 tests
    test hex_space::tests::batch_transfers_fail_if_len_is_zero - should panic ... ok
    test hex_space::tests::account_id_to_token_id ... ok
    test hex_space::tests::metrics ... ok
    test hex_space::tests::decrease_max_supply_fail - should panic ... ok
    test hex_space::tests::increase_max_supply_fail - should panic ... ok
    test hex_space::tests::burning_batch_tokens_fails_if_total_balance_is_zero - should panic ... ok
    test hex_space::tests::burning_tokens_works ... ok
    test hex_space::tests::minting_tokens_fails_if_operator_equal_to_account - should panic ... ok
    test hex_space::tests::set_pay_proxy ... ok
    test hex_space::tests::set_pay_proxy_fail_if_not_owner - should panic ... ok
    test hex_space::tests::burn_batch_by_origin ... ok
    test hex_space::tests::rejects_batch_if_lengths_dont_match - should panic ... ok
    test hex_space::tests::sending_tokens_fails_if_insufficient_balance - should panic ... ok
    test hex_space::tests::decrease_max_supply ... ok
    test hex_space::tests::increase_max_supply ... ok
    test hex_space::tests::minting_tokens_fails - should panic ... ok
    test hex_space::tests::test_single_char ... ok
    test hex_space::tests::mint_by_origin_tokens_works ... ok
    test hex_space::tests::minting_tokens_works ... ok
    test hex_space::tests::minting_tokens_fails_if_total_supply_equal_max_supply - should panic ... ok
    test hex_space::tests::mint_batch ... ok
    test hex_space::tests::sending_too_many_tokens_fails - should panic ... ok
    test hex_space::tests::mint_batch_by_origin ... ok
    test hex_space::tests::burning_tokens_fails_if_token_supply_is_zero - should panic ... ok
    test hex_space::tests::can_send_batch_tokens ... ok
    test hex_space::tests::test_three_chars ... ok
    test hex_space::tests::set_info ... ok
    test hex_space::tests::set_protocol_info ... ok
    test hex_space::tests::burning_batch_tokens_fails_if_token_supply_is_zero - should panic ... ok
    test hex_space::tests::test_longer_string ... ok
    test hex_space::tests::test_two_chars ... ok
    test hex_space::tests::tests_short_string ... ok
    test hex_space::tests::uri ... ok
    test hex_space::tests::burn_batch ... ok
    test hex_space::tests::burn_by_origin_tokens_works ... ok
    test hex_space::tests::batch_transfers_fail_if_balance_insufficient - should panic ... ok
    test hex_space::tests::burning_tokens_fails_if_total_balance_is_zero - should panic ... ok

    test result: ok. 37 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s
    ```

### Docker Feedback

- Dockerfile can't be built:

    ```bash
    $ docker build .
    Sending build context to Docker daemon  4.048MB
    Step 1/6 : FROM node:16-alpine
    ---> b0cbdedc1b9d
    Step 2/6 : COPY . /app
    ---> 1ec6568a2fc2
    Step 3/6 : WORKDIR /app
    ---> Running in 3f6e4347690a
    Removing intermediate container 3f6e4347690a
    ---> a60b93eb81a5
    Step 4/6 : RUN yarn
    ---> Running in 138d072784d8
    node:internal/modules/cjs/loader:936
    throw err;
    ^

    Error: Cannot find module '/app/.yarn/releases/yarn-3.1.1.cjs'
        at Function.Module._resolveFilename (node:internal/modules/cjs/loader:933:15)
        at Function.Module._load (node:internal/modules/cjs/loader:778:27)
        at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
        at node:internal/main/run_main_module:17:47 {
    code: 'MODULE_NOT_FOUND',
    requireStack: []
    }
    The command '/bin/sh -c yarn' returned a non-zero code: 1
    ```
- Pre-built Docker image can be pulled:

    ```bash
    $ docker pull rust0x0/hex-space-protocol-front-end:0.1
    0.1: Pulling from rust0x0/hex-space-protocol-front-end
    59bf1c3509f3: Pull complete 
    05f4bd9ef508: Pull complete 
    503741069fa0: Pull complete 
    88b2b4880461: Pull complete 
    252601da0352: Pull complete 
    4f4fb700ef54: Pull complete 
    5967ca921a3c: Pull complete 
    Digest: sha256:18f488b3491cf11e469df91519b6e34db815c636dd3cb3e23664e9fd55c06623
    Status: Downloaded newer image for rust0x0/hex-space-protocol-front-end:0.1
    docker.io/rust0x0/hex-space-protocol-front-end:0.1
    ```

### Contracts Feedback

- when using the node based on the docker image, as per docs, the deployment of the ERC1155 contract fails with the following error:
    
    **system.ExtrinsicFailed, contracts.NewContractNotFunded**

- on the same node, the deployment of the hex space contract fails with a different error (though I assume that's because the ERC1155 contract wasn't successfully deployed previously):

    **system.ExtrinsicFailed, Other**

- when using Rococo's *Contracts* parachain, the deployment succeeds.
- On both chains the accounts deploying the contract were sufficiently funded.

### Frontend Feedback

There are 1 warning and 1 console error being thrown, when starting the frontend:

- react-dom.development.js:67 Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of RefFindNode which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node

- SubstrateContext.js:164 TypeError: Cannot read properties of null (reading 'toString')
    at asyncConnectContract (SubstrateContext.js:160:1)