# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/tuxedo.md
* **Milestone Number:** 3 

**Context**
Tuxedo is a runtime framework for writing Substrate runtimes in the UTXO model.
It is analogous (and an alternative) to FRAME which uses the accounts model.
This is the last of three milestones in the grant.

In this milestone we focused on making Tuxedo approachable to new developers who want to use it in their Substrate runtimes.
The primary deliverables are in 0b and 0e for this milestone, so don't miss them.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a.    | License     | [LICENSE file](https://github.com/Off-Narrative-Labs/Tuxedo/blob/milestone-3/LICENSE) | Apache 2.0, as recommended | 
| 0b.    | Documentation | [Hosted Rustdocs](https://off-narrative-labs.github.io/Tuxedo) | We have detailed rustdocs throughout the project; they are also hosted. These docs serve as a technical and architectural reference. | 
| 0c.    | Testing     | [Readme Section](https://github.com/Off-Narrative-Labs/Tuxedo/blob/milestone-3#testing-and-code-quality) | Tests are run in CI and instructions for running them locally are in the readme. |
| 0d.    | Docker      | [Readme Section](https://github.com/Off-Narrative-Labs/Tuxedo/blob/milestone-3#docker), [Published Images](https://github.com/orgs/Off-Narrative-Labs/packages) | We provide docker images for both the template node and the PoC wallet as well as instructions for how to test the node with them. |
| 0e.    | Full Tutorial | [Starter Code](https://github.com/Off-Narrative-Labs/Tuxedo-Order-Book-Dex-Tutorial/), [Complete Solutions](https://github.com/Off-Narrative-Labs/Tuxedo-Order-Book-Dex-Tutorial/tree/dex-solutions), [Walkthrough Video](https://www.youtube.com/watch?v=bWA2ksTmNBU) | Instead of the simple tutorial about passing around tokens from the original spec, we expanded this into a complete tutorial about adding an additional token to your runtime and designing a decentralized exchange between the two tokens. This tutorial contains written instructions, starter code, complete unit tests so you know when you have solved each part, and a complete solution example. We also worked through most of this tutorial live on Substrate Seminar.
| 1.     | Template Piece | [Readme Section](https://github.com/Off-Narrative-Labs/Tuxedo-Order-Book-Dex-Tutorial#use-as-a-template), [Dex Template](https://github.com/Off-Narrative-Labs/Tuxedo-Order-Book-Dex-Tutorial/blob/dex-tutorial/dex/src/lib.rs) | We've decided to use the same starting point for our tutorial and for a general-purpose template. As explained in the readme, this makes it easier for learners to complete the tutorial and continue naturally on to their project. It also makes it easier for downstream projects to get updates to tuxedo core.

**Additional Information**

While The Order Book Dex tutorial linked above is the primary deliverable product, we also worked to make Tuxedo more accessible and visible to developers by appearing twice on Substrate Seminar.
* 1. Conceptual and Architectural Overview - https://www.youtube.com/watch?v=6AY5VqXIAcM
* 2. Live coding on the beta Dex Tutorial - https://www.youtube.com/watch?v=bWA2ksTmNBU
