# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** <https://github.com/w3f/Grants-Program/blob/master/applications/TuxedoDapp.md>
* **Milestone Number:** 1

**Context**

Unlike traditional account-based systems, UTXO-based systems treat each transaction output as a distinct entity, introducing advantages in parallel processing and state transition simplicity. The Tuxedo project endeavours to demonstrate the flexibility and interoperability of Polkadot by implementing UTXO as one of its paradigms. MLabs, with expertise in the Cardano ecosystem utilizing UTXO as its core model, sees an opportunity to contribute to Tuxedo's success, address identified issues, and engage in future collaborative activities.

Our goal is to showcase the potential of Polkadot using the UTXO paradigm for the end user, leveraging Tuxedo.

**Deliverables**

| Number | Deliverable | Link | Notes |
| -----: | ----------- | ------------- | ------------- |
| **0a.** | License | [License file](https://github.com/mlabs-haskell/TuxedoDapp?tab=Apache-2.0-1-ov-file#readme) | Apache 2.0, as recommended |
| **0b.** | Documentation | [README](https://github.com/mlabs-haskell/TuxedoDapp/blob/master/README.md), [Demo wallet integration](https://www.loom.com/share/e1270ecea79a4689aff5732e8acfae14), [CLI-wallet - Demo part 1/3](https://youtu.be/Mom3BV_HozY), [CLI-wallet - Demo  part 2/3](https://youtu.be/GfyiBW1XFW0), [CLI-wallet - Demo part 3/3](https://youtu.be/1T2oE0bfaCQ), [APIs spreadsheet](https://github.com/mlabs-haskell/TuxedoDapp/wiki/APIs-spreadsheet), [Build and run the project](https://github.com/mlabs-haskell/TuxedoDapp/wiki/Build-and-run-the-project), [Frontend development libs](https://github.com/mlabs-haskell/TuxedoDapp/wiki/Frontend-development-libs), [Game design](https://github.com/mlabs-haskell/TuxedoDapp/wiki/Game-design),  [Wireframes](https://github.com/mlabs-haskell/TuxedoDapp/wiki/Wireframes), [GitHub project management tool](https://github.com/orgs/mlabs-haskell/projects/57/views/1) | Overall project description. Video to showcase the Talisman integration. Info about APIs spreadsheet, Build and run the project, DApp specification, Frontend development libs, Game Design, Wireframes. The GitHub PM tool tracked the amount of work done across different developers |
| **0c.** | Testing and Testing Guide | [CLI-Wallet test](https://github.com/mlabs-haskell/Tuxedo/blob/webservice-redeemer-gen-debug-with-lks/wardrobe/kitties/src/tests.rs) , [Tuxedo Template Wallet](https://github.com/mlabs-haskell/Tuxedo/blob/webservice-redeemer-gen-debug-with-lks/wallet/README.md) | We included our tests done for the CLI-Wallet, they can be executed using the Tuxedo documentation in the README |
| **0d.** | Article | [Tuxedo DApp specification](https://docs.google.com/document/d/1dHsb_k3Xo5f4yFx802sMe22z6NYq3FeZc9l4bB0exMk/edit), [Talisman integration design](https://docs.google.com/presentation/d/1vsfJ5TYPXcvF4vmY7fHfM25lcNmZdjh6YfUyyoOzVAw/edit) | DApp specification with description of the components. A brief design of the talisman integration. |
| **0e.** | Docker | [webservice-wallet](https://github.com/mlabs-haskell/Tuxedo/blob/webservice-redeemer-gen-debug-with-lks/webservice-wallet/Dockerfile) | For the Talisman integration, docker is not needed. However, we included the docked used for the webservice |
| **0f.** | Frontend, CLI wallet and core | [main DApp repo](https://github.com/mlabs-haskell/TuxedoDapp), [CLI Wallet and core repo](https://github.com/mlabs-haskell/Tuxedo) | In these repos we have the DApp including the integrated Talisman and the CLI-Wallet together with the core |


##

**Additional Information**

Following the suggestion of Joshua Orndorff, author of Tuxedo, we focused on integrating an existing wallet instead of building a redundant solution from scratch. The effort was not trivial because Talisman doesn't support UTXO. However, to be sure how the front end of the Dapp was supposed to work, we had to build extra features on the Tuxedo CLI wallet. That effort was not foreseen during the original budget definition of the grant. Still, we preferred to invest the extra time and resources in this direction, to understand and test the Tuxedo code deeply. Other than the CLI-wallet we also worked on extra areas outside of the granted budget:

1. Mint_coin: <https://github.com/Off-Narrative-Labs/Tuxedo/commit/80e7b5720a384907cef89e091034fff3fe0f2b7f>
2. Metadata analysis and design/experiments: <https://github.com/Off-Narrative-Labs/Tuxedo/issues/30#issuecomment-1920539885>
