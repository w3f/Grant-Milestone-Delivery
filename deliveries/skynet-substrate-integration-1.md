# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/skynet-substrate-integration.md
- **Milestone Number:** 1

**Context**

The deliverables in this milestore enable the full functionality of interacting with Skynet Webportals in an off-chain worker. They take the form of an SDK that can be used in any off-chain worker context.

**Deliverables**

| Number | Deliverable                                                         | Link                                                                                                                     | Notes                                                                                                                                                                                              |
| ------ | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0a.    | License                                                             | https://github.com/SkynetLabs/skynet-substrate/blob/main/LICENSE                                                         |                                                                                                                                                                                                    |
| 0b.    | Documentation                                                       | https://skynetlabs.github.io/skynet-substrate/                                                                           | This technical documentation is specifically for the SDK. The example repos have additional inline comments.                                                                                       |
| 0c.    | Testing Guide                                                       | https://github.com/SkynetLabs/skynet-substrate#testing                                                                   |                                                                                                                                                                                                    |
| 0d.    | Sample Node & Frontend                                              | https://github.com/SkynetLabs/skynet-substrate-offchain-worker-node/tree/skynet-substrate/frame/examples/offchain-worker | Additionally, the corresponding front-end is available at [Skynet Substrate Front End Example](https://github.com/SkynetLabs/skynet-substrate-front-end-example)                                   |
| 1.     | Skynet Substrate SDK for Off-Chain Worker Pallet (Skyfiles)         | https://github.com/SkynetLabs/skynet-substrate/blob/main/src/download.rs                                                 | Additionally, see the [Upload](https://github.com/SkynetLabs/skynet-substrate/blob/main/src/upload.rs) and [Skylink](https://github.com/SkynetLabs/skynet-substrate/blob/main/src/skylink.rs) code |
| 2.     | Skynet Substrate SDK for Off-Chain Worker Pallet (Registry Entries) | https://github.com/SkynetLabs/skynet-substrate/blob/main/src/registry.rs                                                 |                                                                                                                                                                                                    |
| 3.     | Skynet Substrate SDK for Off-Chain Worker Pallet (Skylink v2)       | https://github.com/SkynetLabs/skynet-substrate/blob/d7734195ff425e1aca808fac97f21eef4f4593af/src/skylink.rs#L47          | In the Skynet ecosystem, these are now called resolver skylinks.                                                                                                                                   |
| 4.     | Skynet Substrate SDK for Off-Chain Worker Pallet (Repin)            | https://github.com/SkynetLabs/skynet-substrate/blob/main/src/pin.rs                                                      |                                                                                                                                                                                                    |

**Additional Information**
As mentioned in the proposal, the bulk of the work is in providing a Skynet SDK for Substrate, and usage is shown via the example node pallet and example frontend.
