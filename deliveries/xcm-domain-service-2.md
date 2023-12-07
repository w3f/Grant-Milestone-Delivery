# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**

- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/xcm-domain-service.md
- **Milestone Number:** 2

**Context**

Research of an ink! based domain service integrated with XCM.

**Deliverables**

| Number  | Deliverable                | Link                                                                                     | Notes                                                                                                                                       |
| ------- | -------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                    | ----                                                                                     | GPLv3                                                                                                                                       |
| **0b.** | Documentation              | ----                                                                                     | Supplied via the attached reports & repositories                                                                                            |
| **0c.** | Methodology                | [Docs](https://docs.google.com/document/d/1r9gQDz_-qi56uVKXHHleepwx4tMyw6WFoAJJpO57PW0/) | How we conducted our research                                                                                                               |
| **0d.** | Report                     | [Docs](https://docs.google.com/document/d/1-6WTMW5M_0ov_LoP-J0m62_V4yhhDF4zKrnMXuTiskI/) | Report summarizing the deliveries and the reasoning behind a unified domain name service                                                    |
| **1.**  | Technical Assessments      | [Docs](https://docs.google.com/document/d/11CFgzmr0tXpaHrtkrzlPY3chhp9gOQEp5cqCsiNEZHA/) | Assessments about integration options from M1, further challenges, etc.                                                                     |
| **2.**  | Architecture               | [Docs](https://docs.google.com/document/d/1keSkyREimcUnwuooJ4sfkriTMTEWCu_4k-hkrgTgrqc/) | Proposed architecture for an XCM-enabled, ink!-based DNS                                                                                    |
| **3.**  | Main Technical Deliverable | [Repository `xcm-domain-service`](https://github.com/azero-id/xcm-domain-service)        | Complete PoC of an XCM-enabled domain name service with ink! smart contracts. Ready to test via `zombienet` & `xcm-simulator` (see README). |
| **4.**  | Technical Deliverable      | [Repository `contracts-parachain`](https://github.com/azero-id/contracts-parachain)      | Fork of `substrate-developer-hub/substrate-parachain-template` with XCM-enabled `pallet-contracts` integration                              |
| **5.**  | Technical Deliverable      | [PR in `polkadot-sdk`](https://github.com/paritytech/polkadot-sdk/pull/1883)             | PR in `polkadot-sdk` fixing a minor issue in `xcm-simulator/example`                                                                        |
| **6.**  | References                 | [Docs](https://docs.google.com/document/d/19HiSH8rJKRFbuHm5Ju_lfhVl0XYTLCfgT4FuWIr5-Vw/) | ----                                                                                                                                        |

Two additional notes regarding the deliverables:

- We added a [minor PR](https://github.com/paritytech/polkadot-sdk/pull/1883) to the scope that fixes an issue in the `xcm-simulator/example` that we encountered during our PoC development.
- We ended up not pursuing the implementation via `chain_extensions` (see [Methodology #4](https://docs.google.com/document/d/1r9gQDz_-qi56uVKXHHleepwx4tMyw6WFoAJJpO57PW0)) which made the initially proposed fixes of the minor issues in `pallet-contracts-xcm` obsolete. Also, we know that Parity has already assigned someone internally to tackle them.

**Additional Information**

We are super proud that we were able to create one of the very first ink! contracts with a working XCM integration (if not _the first_). There was a lot more work and arising challenges (see [Methodology](https://docs.google.com/document/d/1r9gQDz_-qi56uVKXHHleepwx4tMyw6WFoAJJpO57PW0)) than initially anticipated, but we were able to overcome them and deliver a working PoC.

**Future Plans**

- We will use the gathered knowledge to create further education in the form of two blog posts: One being a developer-facing ink!/XCM tutorial, and another one being a deep-dive into existing domain service solutions on Dotsama.
- We will collaborate with Parity on the upcoming `pallet-contracts-xcm` integration.
- We will use the PoC as a starting point to develop a production-ready domain name service for the whole Substrate ecosystem. We are actively considering to apply for a follow-up grant for this.
