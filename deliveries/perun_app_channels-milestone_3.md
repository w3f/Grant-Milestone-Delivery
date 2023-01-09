# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Perun App Channels](https://github.com/w3f/Grants-Program/blob/master/applications/perun_app_channels.md)
* **Milestone Number:** 3

**Context**
The goal of the project is to enable Perun App Channels on Polkadot. The third milestone focuses on demonstrating the new functionality in form of a CLI game client.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [LICENSE] | Apache License, Version 2.0
| 0b. | Documentation | [README] | The [README] introduces the repository and its functionality. The source code is documented.
| 0c. | Testing Guide | [README] | The [README] describes how to test the game client.
| 0d. | Docker | [Node:Dockerfile] | We have updated the [polkadot-test-node image] to include the Tic-Tac-Toe app.
| 0e. | Article | [Google Doc] (Draft) | The article is currently in review by the W3F Grants team and shall be published on Medium.com afterwards.
| 1. | Pallet game logic | [Node:app.rs] | We have implemented the Tic-tac-toe on-chain game logic in form of a valid transition function ([Node:PR#20]). We have also enhanced the Perun Pallet by a few standard checks and a more permissive timeout logic ([Pallet:PR#21], [Pallet:PR#22]).
| 2. | Off-chain game logic | [app/] | We have implemented the off-chain game logic in package [app/].
| 3. | Game client | [client/] | We have implemented a demo game client in package [client/]. The main routine is in [main.go] and the command line commands are in [command.go]. The [README] gives an overview of how to use the client.

[LICENSE]: https://github.com/perun-network/perun-polkadot-appdemo/blob/0387dd6dd73c3b2ec11c8d8028c8fb6fbb908f9b/LICENSE
[README]: https://github.com/perun-network/perun-polkadot-appdemo/blob/0387dd6dd73c3b2ec11c8d8028c8fb6fbb908f9b/README.md
[Node:Dockerfile]: https://github.com/perun-network/perun-polkadot-node/blob/a5d1981f7d7ad6132a37405ec01f22ae4bba2ed1/node/Dockerfile
[polkadot-test-node image]: https://github.com/perun-network/perun-polkadot-node/pkgs/container/polkadot-test-node
[Google Doc]: https://docs.google.com/document/d/1aO05SZgDmabtYBNySm91It7oxinTFg-HArs7N4_aA4Y/edit?usp=sharing
[Node:app.rs]: https://github.com/perun-network/perun-polkadot-node/blob/a5d1981f7d7ad6132a37405ec01f22ae4bba2ed1/node/runtime/src/app.rs
[Node:PR#20]: https://github.com/perun-network/perun-polkadot-node/pull/20
[Pallet:PR#21]: https://github.com/perun-network/perun-polkadot-pallet/pull/21
[Pallet:PR#22]: https://github.com/perun-network/perun-polkadot-pallet/pull/22
[app/]: https://github.com/perun-network/perun-polkadot-appdemo/tree/0387dd6dd73c3b2ec11c8d8028c8fb6fbb908f9b/app
[client/]: https://github.com/perun-network/perun-polkadot-appdemo/tree/0387dd6dd73c3b2ec11c8d8028c8fb6fbb908f9b/client
[main.go]: https://github.com/perun-network/perun-polkadot-appdemo/blob/0387dd6dd73c3b2ec11c8d8028c8fb6fbb908f9b/main.go
[command.go]: https://github.com/perun-network/perun-polkadot-appdemo/blob/0387dd6dd73c3b2ec11c8d8028c8fb6fbb908f9b/command.go

**Additional Information**

Together with Ajuna we have investigated how Perun Channels could be further integrated with their game developer platform. We have found that Ajuna's [TurnBasedGame interface] is relatively similar to Perun's [App interface].

One idea was that we could write an adapter that allows plug-and-play use of Ajuna Games in Perun Channels. However, here a challenge is that Perun Apps are split between an off-chain part and an on-chain part, where the off-chain part is written in Go, while Ajuna's Games are written in Rust. To provide a plug-and-play solution, we would need to write a component that integrates Rust code in Go. This may be done as part of a future project.

We thank the Web3 Foundation for sponsoring this project.

[TurnBasedGame interface]: https://github.com/ajuna-network/Ajuna/blob/5a2be3460d7f737724bf389b466a3819e68d684a/ajuna-common/src/lib.rs#L131
[App interface]: https://github.com/hyperledger-labs/go-perun/blob/2b78f88753afa2e6191c80c6bf5481a64a0432c6/channel/app.go#L51
