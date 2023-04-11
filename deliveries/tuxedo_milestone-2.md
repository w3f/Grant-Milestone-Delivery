# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/tuxedo.md
* **Milestone Number:** 2 

**Context**

Tuxedo is a runtime framework for writing Substrate runtimes in the UTXO model. It is analogous (and an alternative) to FRAME which uses the accounts model. This is the second of three milestones in the grant.

In this milestone we focused on the user experience for a Tuxedo based chain and implemented the CLI wallet. The wallet syncs with a node and allow a user to see their balance and send transactions. We also added in a concept of a `ThresholdMultiSignature` to allow for more versatile signing schemes.

Meanwhile, we also improved the robustness of the Tuxedo framework, thinking of edge cases and improving the test coverage as we went. A major core change was that we changed the terminology to fall in line with the IOHK naming. `Redeemer` -> `Verifier`, `Verifier -> ConstraintChecker`, `Witness -> Redeemer`. We also allowed for a more powerful `ConstraintChecker` which can not only have access to the `DynamicallyTypedData` from the `Inputs` and `Outputs` of a transaction but also to actually have the ability to be passed the full `Outputs` of a transaction for the future implementation of coupling between Tuxedo pieces.  

**Deliverables**

| Number | Deliverable | Link(s)       | Notes |
| ------ | ----------- | ------------- |------------- |
| 0a.    | License     | [LICENSE file](https://github.com/Off-Narrative-Labs/Tuxedo/blob/milestone-1/LICENSE) | Apache 2.0, as recommended | 
| 0b.    | Documentation | [Hosted Rustdocs](https://off-narrative-labs.github.io/Tuxedo), [Readme](https://github.com/Off-Narrative-Labs/Tuxedo/tree/milestone-1#readme) | We have detailed rustdocs throughout the project; they are also hosted. Instructions for using Tuxedo are in the Readme. | 
| 0c.    | Testing     | [Readme Section](https://github.com/Off-Narrative-Labs/Tuxedo#testing-and-code-quality) | We have good unit test coverage throughout the project. The tests are run in CI and instructions for running them locally are in the readme. Instructions for testing the node manually with the PoC wallet in the Readme. |
| 0d.    | Docker      | [Readme Section](https://github.com/Off-Narrative-Labs/Tuxedo#docker), [Published Images](https://github.com/orgs/Off-Narrative-Labs/packages) | We provide docker images for both the template node and the PoC wallet as well as instructions for how to test the node with them. |
| 1.     | User Wallet | [Wallet Rustdocs](https://off-narrative-labs.github.io/Tuxedo/tuxedo_template_wallet/index.html) | the wallet includes new MultiSig feature as well as improved CLI user functionality relating to generating and storing keys, sending coins to other users, displaying current utxos for the existing keystore |
| 2.     | MultiSig Piece | [MultiSig Rustdocs](https://off-narrative-labs.github.io/Tuxedo/tuxedo_core/verifier/index.html) | The threshold multisig model as old as bitcoin which is implemented as a specific verifier |

**Additional Information**

Both the github repository and the published docker images have a `milestone-2` tag. This is what we are officially submitting. (Although reviewing anything that comes in later should also be fine.)

Thanks for the opportunity to work on this. We look forward to the next milestone and beyond.
