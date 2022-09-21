# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/hex.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | Unlicense | <ul><li>[x] </li></ul> | [Unlicense](https://github.com/rust-0x0/hex-space-protocol-substrate/blob/f723f5f3e3c7f7136c0936b648072a7dcd920d85/LICENSE) | - |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/rust-0x0/hex-space-protocol-docs/blob/3f4827905237927de45806e5ab4d834964407d00/README.md), [hex_space contract](https://github.com/rust-0x0/hex-space-protocol-substrate/blob/f723f5f3e3c7f7136c0936b648072a7dcd920d85/hex_space/lib.rs), [frontend tutorial](https://github.com/rust-0x0/hex-space-protocol-docs/blob/6ce9707bed58832e262cba236e07d1f8a9dc3e39/Follow.md) | Good inline documentation. README documents all steps required to run the deliveries. The [frontend tutorial](https://github.com/rust-0x0/hex-space-protocol-docs/blob/6ce9707bed58832e262cba236e07d1f8a9dc3e39/Follow.md) explains how to test the frontend. |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [inline tests](https://github.com/rust-0x0/hex-space-protocol-substrate/blob/f723f5f3e3c7f7136c0936b648072a7dcd920d85/hex_space/lib.rs#L1052) | See [Testing Feedback](#testing-feedback) |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/rust-0x0/hex-space-protocol-front-end/blob/508ca3ccf0459e975445eded2b084efbc34c6a6a/Dockerfile) | - |
| 0e. | Article | <ul><li>[x] </li></ul> | [Medium Article](https://medium.com/@rust.0x0/hex-space-social-graph-487c548c2391) | - |
| 1. |  ink! Contract: FiveDegrees | <ul><li>[x] </li></ul> | [ERC-1155 Contract](https://github.com/rust-0x0/hex-space-protocol-substrate/tree/f723f5f3e3c7f7136c0936b648072a7dcd920d85/erc1155), [Hexspace Contract](https://github.com/rust-0x0/hex-space-protocol-substrate/tree/f723f5f3e3c7f7136c0936b648072a7dcd920d85/hex_space) | See [Contracts Feedback](#contracts-feedback) |  
| 2. |  protocol front-end  | <ul><li>[x] </li></ul> | [ReactJs Frontend](https://github.com/rust-0x0/hex-space-protocol-front-end/tree/362c896bb11f91fbe0c1728b93b28ab6db4963d0) | See [Frontend Feedback](#frontend-feedback) |  

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

### Contracts Feedback

- contract can be built using the `bash ./build.sh` command
- when using the node based on the docker image, as per docs, the deployment of the ERC1155 contract fails with the following error:
    
    **system.ExtrinsicFailed, contracts.NewContractNotFunded**

- on the same node, the deployment of the hex space contract fails with a different error (though I assume that's because the ERC1155 contract wasn't successfully deployed previously):

    **system.ExtrinsicFailed, Other**

- when using Rococo's *Contracts* parachain, the deployment succeeds.
- all contract functions have been successfully tested using the front end in the most recent version.
- the grantee created a new contract in the `hex_space_social_graph` directory instead of changing the existing contract in the `hex_space` directory. Also, the legacy contract at `hex_space` wasn't removed. I'd recommend to remove the legacy contract to avoid any confusion.

### Frontend Feedback

There are 1 warning and 1 console error being thrown, when starting the frontend:

- react-dom.development.js:67 Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of RefFindNode which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node

- SubstrateContext.js:164 TypeError: Cannot read properties of null (reading 'toString')
    at asyncConnectContract (SubstrateContext.js:160:1)