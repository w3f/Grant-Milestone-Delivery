# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Perun Channels - Integration with go-perun](https://github.com/w3f/Grants-Program/blob/master/applications/perun_channels-integration.md)
* **Milestone Number:** 4 (Improve Perun Pallet)

**Context**

Perun Channels is a technology enhancing blockchain scalablity and interoperability. We previously developed the [Perun Pallet](https://github.com/perun-network/perun-polkadot-pallet), which provides the on-chain logic for Perun Channels on Polkadot.
Our second project is on the integration of the Perun Pallet into the [Go-Perun](https://github.com/perun-network/go-perun) library.
In the focus of the milestone delivered here are improvements to the Perun Pallet.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [LICENSE] | Apache License, Version 2.0
| 0b. | Documentation | [README] | The [README] introduces the repository and its functionality. The source code is documented.
| 0c. | Testing Guide | [README] | All code is unit-tested. The [README] describes how to execute the tests.
| 0d. | Docker | [Dockerfile](https://github.com/perun-network/perun-polkadot-pallet/blob/master/Dockerfile) |
| 1. | Weight estimation | [benchmarking.rs](https://github.com/perun-network/perun-polkadot-pallet/blob/master/src/benchmarking.rs), [weights.rs](https://github.com/perun-network/perun-polkadot-pallet/blob/master/src/weights.rs) | The [README] describes how to generate the weights.
| 2. | Code Coverage | [rust.yml](https://github.com/perun-network/perun-polkadot-pallet/blob/master/.github/workflows/rust.yml), [README] | The workflow defined in [rust.yml] generates a coverage report and a badge in the [README] displays the result.

**Additional Information**

No additional information.

[LICENSE]: https://github.com/perun-network/perun-polkadot-pallet/blob/main/LICENSE
[README]: https://github.com/perun-network/perun-polkadot-pallet/blob/master/README.md
[rust.yml]: https://github.com/perun-network/perun-polkadot-pallet/blob/master/.github/workflows/rust.yml
