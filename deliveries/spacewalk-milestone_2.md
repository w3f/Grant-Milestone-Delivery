# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [contract](https://github.com/w3f/Grants-Program/blob/master/applications/spacewalk-bridge.md)
* **Milestone Number:** 2

**Context**

In this milestone we deliver one highly crucial components of the Stellar bridge, which we term the _Stellar Oracle_. 
The Stellar Oracle is the Stellar equivalent of a chain relay: it is meant to provide information about the state of the Stellar blockchain to the
chain implementing Spacewalk (see the diagram below).

![Screen Shot 2022-10-31 at 16 47 05](https://user-images.githubusercontent.com/15174476/199051062-9a254aab-f83f-444a-8417-b9dab165989e.png)

It works different to most chain relays that are based on Merkle inclusion proofs and the longest chain rule because neither of these features are
available in Stellar due to the way Stellar organizes transactions in its blocks and how Stellar validators find consensus. Find a more detailed high-level
description in the [article](https://pendulum-chain.medium.com/introducing-the-stellar-oracle-ce4b85244cc8) that accompanies this milestone delivery.

The Stellar Oracle is tailormade for the [Stellar Consensus Protocol](https://www.stellar.org/papers/stellar-consensus-protocol) and is a key difference
to the [InterBTC bridge](https://github.com/interlay/interbtc) that Spacewalk is based on. The Stellar Oracle is provably as secure as the 
Stellar Consensus Protocol itself, which means that Spacewalk verifies a Stellar transaction as valid if and only if the transaction is also valid and
contained in a finalized block in Stellar.

The Stellar Oracle consists of two core components:
* _Agent_: A component that needs to run inside a client off-chain and that acts on behalf of a user or a
Spacewalk vault operator. An agent can also run inside a (browser) wallet. The agent collects information from the Stellar overlay network.
* _Oracle pallet_: A component of Spacewalk that runs inside a Substrate chain and that receives messages from agents. It will verify that the messages
are valid in a reliable manner.

**Deliverables**

| Number | Deliverable              | Link | Notes |                                                                                                                                                                                                              
| -----: | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | - |
|    0a. | License                  | https://github.com/pendulum-chain/spacewalk/blob/main/LICENSE | - |
|    0b. | Documentation            | https://satoshipay.notion.site/Spacewalk-Stellar-Oracle-Demo-Documentation-a3341e692d754d649b74bff9ac47e800 | A basic tutorial that describes how to run the oracle with a simple client and a Substrate test chain that implements a simplified version of the Oracle pallet that is part of Spacewalk |
|    0c. | Testing Guide            | https://github.com/pendulum-chain/spacewalk/tree/web-3-milestone-2/pallets/stellar-relay | Run a complete suit of unit tests |
|    0d. | Article                  | https://pendulum-chain.medium.com/introducing-the-stellar-oracle-ce4b85244cc8 | This article gives an overview and more background information about the Stellar Oracle |
|     1. | Protocol specification   | https://satoshipay.notion.site/Stellar-Oracle-Protocol-Specification-38ce4edc3e3b4c929a10097a7ae2ac12 | A more formal specification of the Stellar Oracle and the oracle pallet |
|     2. | Stellar oracle consensus | https://github.com/pendulum-chain/spacewalk and https://github.com/pendulum-chain/stellar-experiments | The code containing the Stellar Oracle pallet (in the [Spacewalk repository](https://github.com/pendulum-chain/spacewalk)) and the Stellar Oracle agent (in the [Stellar Experiments repository](https://github.com/pendulum-chain/stellar-experiments)) |

**Additional Information**

Originally milestones 2 and 3 of Spacewalk were swapped and we changed their order through an [amendment](https://github.com/w3f/Grants-Program/pull/1087).
However, when doing so, we missed to change deliverable 0d of this milestone (now milestone 2) accordingly and its description in the W3F grant proposal 
is still "We will publish an article that explains the completed Spacewalk protocol and pallet that we built as part of the grant." 

Instead we only describe the Stellar Oracle in the linked article and will describe the complete protocol only in milestone 3.
