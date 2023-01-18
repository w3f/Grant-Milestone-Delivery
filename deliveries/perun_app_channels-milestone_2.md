# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Perun App Channels](https://github.com/w3f/Grants-Program/blob/master/applications/perun_app_channels.md)
* **Milestone Number:** 2

**Context**
The goal of the project is to enable Perun App Channels on Polkadot. The second milestone focuses on extending Perun's client functionality.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [LICENSE] | Apache License, Version 2.0
| 0b. | Documentation | [README] | The README introduces the repository and its functionality. The source code is documented.
| 0c. | Testing Guide | [appchannel_test.go], [README] | The new functionality is tested in [appchannel_test.go]. The [README] describes how to run the tests. We also upgraded the [test node] to use the new Pallet version.
| 0d. | Docker | [docker-compose.yml] | The [docker-compose.yml] starts up the node and runs the test.
| 1. | Update backend | [go.mod] | We updated the Polkadot backend to go-perun v0.9.2. This included adapting the code to the relevant API changes and was done in [PR#11].
| 2. | App identifier and data | [channel.go], [encoding.go]  | We extended the `Params` data structure by an `AppID` field and the `State` by a `Data` field. We adapted the encoding functionality accordingly. This was done as part of [PR#12].
| 3. | Progress function | [adjudicator.go], [adjudicator_sub.go], [event.go], [channel.go], [appchannel_test.go] | We adapted the Polkadot binding to the changes in the Pallet. In particular, this included adapting  `RegisteredState` in [channel.go], the event types in [event.go], and the conclude logic in [adjudicator.go]. Then we integrated the on-chain progression call for app channel functionality ([adjudicator.go]). We also adapted the event subscription by a new event type ([adjudicator_sub.go]). We added the end-to-end test for app channel functionality ([appchannel_test.go]). All of this was done as part of [PR#12].

[LICENSE]: https://github.com/perun-network/perun-polkadot-backend/blob/46d11537a97a268fe0fe62d95c53182086fe3e66/LICENSE
[README]: https://github.com/perun-network/perun-polkadot-backend/blob/46d11537a97a268fe0fe62d95c53182086fe3e66/README.md
[appchannel_test.go]: https://github.com/perun-network/perun-polkadot-backend/blob/46d11537a97a268fe0fe62d95c53182086fe3e66/client/appchannel_test.go
[test node]: https://github.com/perun-network/perun-polkadot-node
[docker-compose.yml]: https://github.com/perun-network/perun-polkadot-backend/blob/46d11537a97a268fe0fe62d95c53182086fe3e66/docker-compose.yml
[go.mod]: https://github.com/perun-network/perun-polkadot-backend/blob/46d11537a97a268fe0fe62d95c53182086fe3e66/go.mod
[PR#11]: https://github.com/perun-network/perun-polkadot-backend/pull/11
[channel.go]: https://github.com/perun-network/perun-polkadot-backend/blob/46d11537a97a268fe0fe62d95c53182086fe3e66/channel/channel.go
[encoding.go]: https://github.com/perun-network/perun-polkadot-backend/blob/46d11537a97a268fe0fe62d95c53182086fe3e66/channel/encoding.go
[PR#12]: https://github.com/perun-network/perun-polkadot-backend/pull/12
[adjudicator.go]: https://github.com/perun-network/perun-polkadot-backend/blob/46d11537a97a268fe0fe62d95c53182086fe3e66/channel/pallet/adjudicator.go
[event.go]: https://github.com/perun-network/perun-polkadot-backend/blob/46d11537a97a268fe0fe62d95c53182086fe3e66/channel/event.go
[adjudicator_sub.go]: https://github.com/perun-network/perun-polkadot-backend/blob/46d11537a97a268fe0fe62d95c53182086fe3e66/channel/pallet/adjudicator_sub.go
[appchannel_test.go]: https://github.com/perun-network/perun-polkadot-backend/blob/46d11537a97a268fe0fe62d95c53182086fe3e66/client/appchannel_test.go

**Additional Information**

We look forward to working on the next and final milestone of this project :)
