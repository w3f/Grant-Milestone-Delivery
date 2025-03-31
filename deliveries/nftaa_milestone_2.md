# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [nftaa.md](https://github.com/w3f/Grants-Program/blob/master/applications/nftaa.md)
* **Milestone Number:** 2

**Context** (optional)

In this milestone, we are expanding the NFT as an Account (NFTAA) project by integrating full compatibility with the original Substrate pallet-nfts.
This enhancement allows seamless management of NFTAAs and collections using the same mechanisms and standards as traditional NFTs. 
Additionally, we have introduced an indexer, laying the groundwork for integrating the pallet into web applications — the focus of our upcoming delivery no. 3.

**Deliverables**

Repository overview - Here are the three repositories related to our project:

1. NFTAA W3F proposal documents <br>
   Repository containing all materials related to the W3F proposal for NFTAA. <br>
   [GitHub link: polkadot-nftaa-proposal](https://github.com/decenzio/polkadot-nftaa-proposal)

2. Pallet source code <br>
   The core implementation of the NFTAA pallet. <br>
   [GitHub link: pallet-nftaa](https://github.com/decenzio/pallet-nftaa)

3. Custom Polkadot-SDK fork <br>
   A customized fork of the Polkadot SDK. Development is happening in the `dev` branch. <br> 
   [GitHub link: polkadot-sdk](https://github.com/decenzio/polkadot-sdk)

4. Stick - indexer <br>
   A fork of Kodadot indexer with the addition of our own events to work with our nftaa palett. <br>
   [Github link: stick](https://github.com/decenzio/stick)

| Number | Deliverable                                                                                                                | Link                                                                                                                                                                                                  | Notes                                                                                                               |
|--------|----------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| 0a.    | License                                                                                                                    | [MIT NFTAA general repo](https://github.com/decenzio/polkadot-nftaa-proposal/blob/main/LICENSE), [MIT NFTAA pallet src repo](https://github.com/decenzio/nftaa/blob/main/LICENSE)                     | MIT                                                                                                                 | 
| 0b.    | Documentation                                                                                                              | [How to run?](https://github.com/decenzio/polkadot-nftaa-proposal/blob/main/README.md#how-to-run), [NFTAA doc](https://github.com/decenzio/nftaa/blob/main/README.md)                                 | Readmes for all major parts of repository + inline documentation in each version of pallet + official documentation | 
| 0c.    | Testing and Testing Guide                                                                                                  | [Testing guide in readme](https://github.com/decenzio/polkadot-nftaa-proposal/blob/main/README.md#testing), [Unit tests file](https://github.com/decenzio/nftaa/blob/main/src/tests.rs)               | Testing guide mentioned in readme & core unit tests                                                                 | 
| 0d.    | Docker                                                                                                                     | [Docker file](https://github.com/decenzio/polkadot-nftaa-proposal/blob/main/Dockerfile), [Docker guid in this readme](https://github.com/decenzio/polkadot-nftaa-proposal/blob/main/README.md#docker) | Docker file provided to test the functionality of the solution                                                      | 
| 2.     | adding the remaining functionalities from pallet_nfts                                                                      | [lib.rs](https://github.com/decenzio/nftaa/blob/main/src/lib.rs)                                                                                                                                      | Integration with the Substrate nfts pallet (for now all functions)                                                  |
| 2a.    | nftaa check (we will add functionalities to read and check if NFTAA exists for a given account)                            | [stick](https://github.com/decenzio/stick)                                                                                                                                                            | The default blockchain explorer can be used for this purpose or via our new GraphQL service (stick)                 |
| 2b.    | nftaa collections (we will add functionalities to read existing collections and manage NFTAAs if they are in a collection) |                                                                                                                                                                                                       | This can be done as standard thanks to full compatibility with the nfts palett                                      |

**Additional Information**

Every aspect of the project outlined in the proposal was implemented as specified.  
However, we would like to acknowledge that some components work a bit differently than we originally envisioned.

Initially, we planned for all sub-search functions related to ownership information to be handled directly at the pallet level. 
During implementation, we realized this approach was not practical. 
Instead, we found that some of this functionality is better achieved through the blockchain explorer or the Polkadot.js API.
Additionally, having a custom indexer was not part of our original plan. It became clear during development that an indexer was essential for enabling efficient integration with web applications and expanding usability.
As a result, referencing the original deliverable targets in the proposal can be slightly misleading due to the organic evolution of the implementation.

Furthermore, we have begun consulting with our advisors on how to bring our project to a parachain or another blockchain built with Substrate.  
(If you have any guidance or can assist us in this area, we’d be very grateful.)

At [Web3 Amsterdam](https://web3amsterdam.com), we connected with [Reef](https://docs.reef.io/) and are currently in ongoing discussions with them.

Also worth noting, our team member Romi had the opportunity to present the NFTAA project at the [Polkadot Meetup in Bratislava](https://lu.ma/o3fjdib9).
