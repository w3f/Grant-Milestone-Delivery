# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/centrifuge-gsrpc-v2.md
* **Milestone Number:** 1

**Context** (optional)

As per the [original grant application](https://github.com/w3f/Grants-Program/pull/1281/files), the work required for `Milestone 1 - Dynamic Type Loader from metadata` includes
all the changes required for parsing substrate metadata information into a Go registry that keeps track of all the types contained by a pallet's events.
This information will be then used in the 2nd milestone to allow decoding of any set of events that are retrieved from storage.

**Deliverables**

| Number | Deliverable     | Link | Notes                                                                                        |
|--------|-----------------|---|----------------------------------------------------------------------------------------------|
| 1.     | License         | https://github.com/centrifuge/go-substrate-rpc-client/blob/events-parsing-v2-milestone-1/LICENSE | Apache License v2                                                                            | 
| 2.     | Documentation   | https://github.com/centrifuge/go-substrate-rpc-client/blob/events-parsing-v2-milestone-1/README.md  | -                                                                                            |
| 3.     | PR with changes | https://github.com/centrifuge/go-substrate-rpc-client/pull/327  | -                                                                                            |
| 4a.    | Tests           | https://github.com/centrifuge/go-substrate-rpc-client/blob/19aa30067543bd77becbc2cee55d755fd689aa12/registry/registry_test.go  | Tested using metadata information from - Centrifuge, Acala, Moonbeam, Polkadot and Statemint |
| 4b.    | Test execution  | https://github.com/centrifuge/go-substrate-rpc-client/blob/19aa30067543bd77becbc2cee55d755fd689aa12/Makefile#L49  | Done in Docker image.                                                                        |

**Additional Information**

Additional docs with examples will be provided once the 2nd milestone is delivered since that will contain all the code necessary
for parsing events and provide ways for handling decoding errors, metadata updates and potential overrides for certain types.