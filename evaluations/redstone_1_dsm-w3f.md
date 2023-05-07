# Evaluation

- **Status:** Approved.
- **Application Document:**  https://github.com/w3f/Grants-Program/blob/master/applications/RedStone%20Network.md 
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a.    | License                         |<ul><li>[x] </li></ul>| [Apache 2.0](https://github.com/redstone-network/redstone-node/blob/main/LICENSE) |                                                              |
| 0b.    | Documentation                   |<ul><li>[x] </li></ul>| [https://github.com/redstone-network/redstone-node#run-the-rsn-node](https://github.com/redstone-network/redstone-node#run-the-rsn-node) |  |
| 0c.    | Testing Guide                   |<ul><li>[x] </li></ul>| [https://github.com/redstone-network/redstone-node#run-tests](https://github.com/redstone-network/redstone-node#run-tests) |  |
| 0d.    | Article/Tutorial                |<ul><li>[x] </li></ul>| [https://github.com/redstone-network/redstone-node#module-documentation](https://github.com/redstone-network/redstone-node#module-documentation) |  |
| 1a.    | Substrate module: Defense    |<ul><li>[x] </li></ul>| [	https://github.com/redstone-network/redstone-node/tree/main/pallets/defense](	https://github.com/redstone-network/redstone-node/tree/main/pallets/defense) |  |
| 1b.    | Substrate module: Notification     |<ul><li>[x] </li></ul>| [https://github.com/redstone-network/redstone-node/tree/main/pallets/notification](https://github.com/redstone-network/redstone-node/tree/main/pallets/notification) |  |
| 1c.    | Substrate module: Permission-capture |<ul><li>[x] </li></ul>| [https://github.com/redstone-network/redstone-node/tree/main/pallets/permission-capture](https://github.com/redstone-network/redstone-node/tree/main/pallets/permission-capture) |  |
| 2.     | Docker                          |<ul><li>[x] </li></ul>| [https://github.com/redstone-network/redstone-node#run-in-docker](https://github.com/redstone-network/redstone-node#run-in-docker) |  |

## Evaluation V4

Now the command to spin up the network in the documentation is working.

## Evaluation V3

The steps in [the tutorial](https://github.com/redstone-network/grant-test-tutorial/blob/main/RedStone-Milestone-1-test-tutorial.md) worked well assuming that the notification events were emitted and with a proper infrastructure they would be sent. 

![image](https://user-images.githubusercontent.com/112647953/214831144-41e51147-81f1-4a68-a2fa-4eb954ca125f.png)

I tested the network using docker. In the documentation the following command is failing as showed in the image, please review.

![image](https://user-images.githubusercontent.com/112647953/214831374-7934801a-bd32-44b3-b264-34643ae1ed4b.png)


## Evaluation V2

`cargo test --release` is still failing with the msg below:

```
error[E0046]: not all trait items implemented, missing: `TransferProtectInterface`
  --> open-runtime-module-library/currencies/src/mock.rs:76:1
   |
76 | impl orml_tokens::Config for Runtime {
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ missing `TransferProtectInterface` in implementation
   |
   = help: implement the missing item: `type TransferProtectInterface = Type;`

   Compiling pallet-mmr-rpc v3.0.0 (https://github.com/paritytech/substrate?branch=polkadot-v0.9.24#814752f6)
   Compiling pallet-transaction-payment-rpc v4.0.0-dev (https://github.com/paritytech/substrate?branch=polkadot-v0.9.24#814752f6)
For more information about this error, try `rustc --explain E0046`.
error: could not compile `orml-currencies` due to previous error

```

However, as instructed the following commands can be used for running the automated tests on the pallets and they are working. 

```
cargo test -p pallet-permission-capture
cargo test -p pallet-defense
cargo test -p pallet-notification
```

The coverage of the stated pallets are:
- pallet-permission-capture lib.rs - 151 / 189 (79.89%)
- pallet-defense - lib.rs	177 / 548 (32.30%) - could be improved.
- pallet-notification - lib.rs	7 / 66 (10.61%) (+10.61%) - could be improved.

I was able to run the system using docker and connect to it. However, I still need the tutorial/article to execute system tests and finish the evaluation.


## Evaluation V1

### Testing Guide

I was able to compile the code with `cargo build --release`, however the tests `cargo test --release` are failing to compile with the following error:

```
error[E0046]: not all trait items implemented, missing: `TransferProtectInterface`
  --> open-runtime-module-library/currencies/src/mock.rs:76:1
   |
76 | impl orml_tokens::Config for Runtime {
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ missing `TransferProtectInterface` in implementation
   |
   = help: implement the missing item: `type TransferProtectInterface = Type;`

For more information about this error, try `rustc --explain E0046`.
error: could not compile `orml-currencies` due to previous error
warning: build failed, waiting for other jobs to finish...
error[E0046]: not all trait items implemented, missing: `TransferProtectInterface`
   --> open-runtime-module-library/tokens/src/mock.rs:272:1
    |
272 | impl Config for Runtime {
    | ^^^^^^^^^^^^^^^^^^^^^^^ missing `TransferProtectInterface` in implementation
    |
   ::: open-runtime-module-library/tokens/src/lib.rs:239:9
    |
239 |         type TransferProtectInterface: TransferProtectInterface<Self::Balance>;
    |         ---------------------------------------------------------------------- `TransferProtectInterface` from trait                                                                                                

error: could not compile `orml-tokens` due to previous error
```

When I tried to spin up the blockchain node, as describedd [here](https://github.com/redstone-network/redstone-node#run-the-rsn-node), I notice that the executable did not exist. The files in the target folder are listed in the image below. Can you provide assistence on that?

![image](https://user-images.githubusercontent.com/112647953/205960416-290b6101-4362-44cf-9a88-4e77b4b9cf46.png)


### Article/Tutorial 

We need better explanation on how to test the behavior or the system, as a sequence of steps on how to use these features in the blockchain.

### Docker

From docker I was able to spin up the node but I cannot connect to it using default port (9944) on Polkadot.js. 

### Code quality

Not evaluated yet. 

