# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/9f7b7d042b9af9bf2bf9e3c24f2ed05fceaf8276/applications/lip_payments.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser


| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- | ---------------- |
| 0a. | License | <ul><li>[x]</li></ul> | ['Unlicence' License](https://github.com/virto-network/virto-node/blob/bc0bd8ca74deb58499b9258094fcae462b96729d/LICENSE) | "Unlicense" License |
| 0b. | Documentation | <ul><li>[x]</li></ul> | [Main README](https://github.com/virto-network/virto-node/blob/bc0bd8ca74deb58499b9258094fcae462b96729d/README.md) | See [Documentation](#documentation) section |
| 0c. | Tests and benchmarks | <ul><li>[x]</li></ul> | [tests](https://github.com/virto-network/virto-node/blob/bc0bd8ca74deb58499b9258094fcae462b96729d/pallets/payment/src/tests.rs) | See [Tests & benchmarks](#tests-and-benchmarks) section |
| 1. | Escrow functionality | <ul><li>[x]</li></ul> | [Payment Pallet](https://github.com/virto-network/virto-node/blob/bc0bd8ca74deb58499b9258094fcae462b96729d/pallets/payment/src/lib.rs) | payment pallet contains escrow logic |  
| 2. | Dispute resolution  | <ul><li>[x]</li></ul> | [Payment Pallet](https://github.com/virto-network/virto-node/blob/bc0bd8ca74deb58499b9258094fcae462b96729d/pallets/payment/src/lib.rs) | payment pallet contains dispute logic |  

## General Notes

### Documentation

- Instructions on how to run tests were added. To run them with benchmarks I used:

    ```bash
    make run # multi-node local testnet
    cargo build # update dependencies
    cargo test --features runtime-benchmarks
    ```

- Instructions on how to run benchmarks were added. I used:

    ```bash
    make benchmark pallet=virto-payment
    ```

    Results:

    ```
        Pallet: "virto_payment", Extrinsic: "pay", Lowest values: [], Highest values: [], Steps: 20, Repeat: 1
    Raw Storage Info
    ========
    Storage: Payment Payment (r:1 w:1)
    Storage: Sudo Key (r:1 w:0)
    Storage: Assets Accounts (r:2 w:2)
    Storage: System Account (r:1 w:1)

    Median Slopes Analysis
    ========
    -- Extrinsic Time --

    Model:
    Time ~=       70
                µs

    Reads = 5
    Writes = 4

    Min Squares Analysis
    ========
    -- Extrinsic Time --

    Model:
    Time ~=       70
                µs

    Reads = 5
    Writes = 4

    Pallet: "virto_payment", Extrinsic: "pay_with_remark", Lowest values: [], Highest values: [], Steps: 20, Repeat: 1
    Raw Storage Info
    ========
    Storage: Payment Payment (r:1 w:1)
    Storage: Sudo Key (r:1 w:0)
    Storage: Assets Accounts (r:2 w:2)
    Storage: System Account (r:1 w:1)

    Median Slopes Analysis
    ========
    -- Extrinsic Time --

    Model:
    Time ~=       64
                µs

    Reads = 5
    Writes = 4

    Min Squares Analysis
    ========
    -- Extrinsic Time --

    Model:
    Time ~=       64
                µs

    Reads = 5
    Writes = 4

    Pallet: "virto_payment", Extrinsic: "release", Lowest values: [], Highest values: [], Steps: 20, Repeat: 1
    Raw Storage Info
    ========
    Storage: Payment Payment (r:1 w:1)
    Storage: Assets Accounts (r:2 w:2)

    Median Slopes Analysis
    ========
    -- Extrinsic Time --

    Model:
    Time ~=       36
                µs

    Reads = 3
    Writes = 3

    Min Squares Analysis
    ========
    -- Extrinsic Time --

    Model:
    Time ~=       36
                µs

    Reads = 3
    Writes = 3

    Pallet: "virto_payment", Extrinsic: "cancel", Lowest values: [], Highest values: [], Steps: 20, Repeat: 1
    Raw Storage Info
    ========
    Storage: Payment Payment (r:1 w:1)
    Storage: Assets Accounts (r:2 w:2)
    Storage: System Account (r:1 w:0)

    Median Slopes Analysis
    ========
    -- Extrinsic Time --

    Model:
    Time ~=       43
                µs

    Reads = 4
    Writes = 3

    Min Squares Analysis
    ========
    -- Extrinsic Time --

    Model:
    Time ~=       43
                µs

    Reads = 4
    Writes = 3

    Pallet: "virto_payment", Extrinsic: "resolve_cancel_payment", Lowest values: [], Highest values: [], Steps: 20, Repeat: 1
    Raw Storage Info
    ========
    Storage: Payment Payment (r:1 w:1)
    Storage: Assets Accounts (r:2 w:2)
    Storage: System Account (r:1 w:0)

    Median Slopes Analysis
    ========
    -- Extrinsic Time --

    Model:
    Time ~=       46
                µs

    Reads = 4
    Writes = 3

    Min Squares Analysis
    ========
    -- Extrinsic Time --

    Model:
    Time ~=       46
                µs

    Reads = 4
    Writes = 3

    Pallet: "virto_payment", Extrinsic: "resolve_release_payment", Lowest values: [], Highest values: [], Steps: 20, Repeat: 1
    Raw Storage Info
    ========
    Storage: Payment Payment (r:1 w:1)
    Storage: Assets Accounts (r:2 w:2)

    Median Slopes Analysis
    ========
    -- Extrinsic Time --

    Model:
    Time ~=       34
                µs

    Reads = 3
    Writes = 3

    Min Squares Analysis
    ========
    -- Extrinsic Time --

    Model:
    Time ~=       34
                µs

    Reads = 3
    Writes = 3

    Pallet: "virto_payment", Extrinsic: "request_refund", Lowest values: [], Highest values: [], Steps: 20, Repeat: 1
    Raw Storage Info
    ========
    Storage: Payment Payment (r:1 w:1)

    Median Slopes Analysis
    ========
    -- Extrinsic Time --

    Model:
    Time ~=       17
                µs

    Reads = 1
    Writes = 1

    Min Squares Analysis
    ========
    -- Extrinsic Time --

    Model:
    Time ~=       17
                µs

    Reads = 1
    Writes = 1
    ```

### Tests & benchmarks

  - benchmarks can now be executed together with the tests
  - the team followed [my feedback](https://github.com/w3f/Grant-Milestone-Delivery/pull/338#issuecomment-1024143883) and added 8 additional tests to the original 10 tests it already had to cover all `PaymentHandler` methods