# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/centrifuge-gsrpc-v2.md
* **Milestone Number:** 2

**Context** (optional)

As per the [original grant application](https://github.com/w3f/Grants-Program/pull/1281/files), the work required for `Milestone 2 - New generic type registry encoder/decoder` includes
all the changes required for parsing substrate metadata information into a Go registry that keeps track of all the types contained by a pallet's events & calls.
In addition to using this registry to encode and decode events and extrinsic data.

**Deliverables**

| Number | Deliverable                      | Link                                                                                                                                                    | Notes                                                                                        |
|--------|----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 1.     | License                          | https://github.com/centrifuge/go-substrate-rpc-client/blob/event-parsing-v2/LICENSE                                                                     | Apache License v2                                                                            | 
| 2.     | Documentation                    | https://github.com/centrifuge/go-substrate-rpc-client/blob/event-parsing-v2/registry/REGISTRY.md                                                        | -                                                                                            |
| 3.     | PR with changes                  | https://github.com/centrifuge/go-substrate-rpc-client/pull/338                                                                                          | -                                                                                            |
| 4a.    | Registry Unit Tests              | https://github.com/centrifuge/go-substrate-rpc-client/blob/7e3e5ad5225bfa7afd342f3fe8932dc44702c472/registry/registry_test.go                           | Tested using metadata information from - Centrifuge, Acala, Moonbeam, Polkadot and Statemint |
| 4b.    | Registry (Events) Live Tests     | https://github.com/centrifuge/go-substrate-rpc-client/blob/7e3e5ad5225bfa7afd342f3fe8932dc44702c472/registry/retriever/event_retriever_live_test.go     | Live test against public endpoints - Centrifuge, Acala, Moonbeam, Polkadot and Statemint     |
| 4c.    | Registry (Extrinsics) Live Tests | https://github.com/centrifuge/go-substrate-rpc-client/blob/7e3e5ad5225bfa7afd342f3fe8932dc44702c472/registry/retriever/extrinsic_retriever_live_test.go | Live test against public endpoints - Centrifuge, Acala, Moonbeam, Polkadot and Statemint     |
| 4d.    | Test execution                   | https://github.com/centrifuge/go-substrate-rpc-client/blob/7e3e5ad5225bfa7afd342f3fe8932dc44702c472/Makefile#L49-L53                                    | Done in Docker image.                                                                        |

