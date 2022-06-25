# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Perun App Channels](https://github.com/w3f/Grants-Program/blob/master/applications/perun_app_channels.md)
* **Milestone Number:** 1

**Context**
The goal of the project is to enable Perun App Channels on Polkadot. The first milestone focuses on extending the Pallet with the corresponding functionality.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [LICENSE] | Apache License, Version 2.0
| 0b. | Documentation | [README] | The README introduces the repository and its functionality. The source code is documented.
| 0c. | Testing Guide | [tests], [README] | Tests are contained in [tests]. The README describes how to run the tests.
| 0d. | Docker | [Dockerfile] | The Dockerfile runs the rust tests.
| 1. | App identifier and data | [types.rs:Params], [tests] | We added an app identifier and app data field. The tests were adapted accordingly.
| 2. | App registry | [types.rs:AppRegistry], [mock.rs:MockRegistry] | We added an AppRegistry type and a mocked implementation that is used for testing.
| 3. | Progress function | [lib.rs:progress], [types.rs:RegisteredState], [lib.rs:dispute], [lib.rs:conclude] | We implemented the `progress` function. This required adapting the state registry date type to reflect the additional protocol phase. Accordingly, we also adapted the other Pallet functions `dispute` and `conclude` to accomodate the new phase.

[LICENSE]: https://github.com/perun-network/perun-polkadot-pallet/blob/54c55acabfe2f5b57a79b4330726cf572453c0f0/LICENSE
[README]: https://github.com/perun-network/perun-polkadot-pallet/blob/54c55acabfe2f5b57a79b4330726cf572453c0f0/README.md
[tests]: https://github.com/perun-network/perun-polkadot-pallet/tree/54c55acabfe2f5b57a79b4330726cf572453c0f0/tests
[Dockerfile]: https://github.com/perun-network/perun-polkadot-pallet/blob/54c55acabfe2f5b57a79b4330726cf572453c0f0/Dockerfile
[types.rs:Params]: https://github.com/perun-network/perun-polkadot-pallet/blob/54c55acabfe2f5b57a79b4330726cf572453c0f0/src/types.rs#L71
[types.rs:AppRegistry]: https://github.com/perun-network/perun-polkadot-pallet/blob/54c55acabfe2f5b57a79b4330726cf572453c0f0/src/types.rs#55
[mock.rs:MockRegistry]: https://github.com/perun-network/perun-polkadot-pallet/blob/54c55acabfe2f5b57a79b4330726cf572453c0f0/tests/common/mock.rs#L160
[lib.rs:progress]: https://github.com/perun-network/perun-polkadot-pallet/blob/54c55acabfe2f5b57a79b4330726cf572453c0f0/src/lib.rs#L340
[types.rs:RegisteredState]: https://github.com/perun-network/perun-polkadot-pallet/blob/54c55acabfe2f5b57a79b4330726cf572453c0f0/src/types.rs#L131
[lib.rs:dispute]: https://github.com/perun-network/perun-polkadot-pallet/blob/54c55acabfe2f5b57a79b4330726cf572453c0f0/src/lib.rs#L277
[lib.rs:conclude]: https://github.com/perun-network/perun-polkadot-pallet/blob/54c55acabfe2f5b57a79b4330726cf572453c0f0/src/lib.rs#L399

**Additional Information**

None.
