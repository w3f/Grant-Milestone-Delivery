<!-- # Guildlines

> Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. Don't remove any of the mandatory parts presented in bold letters or as headlines!

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**  

* **PR Link:** Please, provide a link to the initial accepted pull request of your application to the [Web3 Foundation Open Grants Program repository](https://github.com/w3f/Open-Grants-Program). 
* **Milestone Number:** The number of the milestone

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which should be used for testing.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | ... |...| ...| 
| 2.  | ... |...| ...| 
 -->

* Invoice form has been filled
* Original [pull request](https://github.com/w3f/Open-Grants-Program/pull/117)
* Milestone number 1

> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which should be used for testing.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | Apache 2.0 |
| 1a. | Manta DAP Pallet, backend | [pallet-manta-dap](https://github.com/Manta-Network/pallet-manta-dap) |  |
| 1b. | Manta Substrate Node | [manta-node](https://github.com/Manta-Network/manta-node) | |
| 1c. | Manta Frontend | [manta-front-end](https://github.com/Manta-Network/manta-front-end) | | 
| 2. | Test Coverage and Benchmark | [test-coverage](https://github.com/Manta-Network/pallet-manta-dap#test-coverage), [benchmark](https://github.com/Manta-Network/pallet-manta-dap#benchmark)|  |


# Milestone 1 Delivery

## Code Organization

* [pallet-manta-dap](https://github.com/Manta-Network/pallet-manta-dap): the implementation of manta DAP protocol. It implement the following functions:
  - `init`: create a public asset (a.k.a. base token), which is public
  - `transfer`: tranfer the base token from one polkadot address to another
  - `mint`: mint a private token from the public token
  - `manta_transfer`: transfer a private token to a new shielded address
  - `forfeit`: reclaim a public token from a private token
* [manta-node](https://github.com/Manta-Network/manta-node): Manta substrate node that integrate `manta-dap-pallet`. You can start a manta local testnet using this code.
* [manta-front-end](https://github.com/Manta-Network/manta-front-end): A minimal web front-end for Manta that is forked from `substrate-front-end-template`.

## Run a Manta Demo

Detailed instructions can be found [here](https://github.com/Manta-Network/manta-node#demo).

![step3](https://user-images.githubusercontent.com/720571/110532076-3b84a100-80d1-11eb-9c7b-ab7f98350a0b.png)

## Test Coverage

Detailed instructions to run test coverage can be found [here](https://github.com/Manta-Network/pallet-manta-dap#test-coverage).

![Result](https://github.com/Manta-Network/pallet-manta-dap/blob/master/coverage/coverage.png)


## Benchmark

Detailed instructions to run Benchmark can be found [benchmark](https://github.com/Manta-Network/pallet-manta-dap#benchmark).

Summary of Benchmark Result:
| Function      | init |  trasfer | mint | manta_transfer | forfeit |
| ----------- |:-----------:|:-----------:|:-----------:|:-----------:|:-----------:|
| Rust       |    1.2 ms    |  30 \mu s | 3.5 ms | 18.1 ms | 16.1 ms |
| Wasm |    244 ms    |  178 \mu s | 1018 ms | 6079 ms | 5387 ms |
