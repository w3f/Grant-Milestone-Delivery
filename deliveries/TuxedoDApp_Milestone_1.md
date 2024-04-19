# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/TuxedoDapp.md
* **Milestone Number:** 1 

**Context**

Unlike traditional account-based systems, UTXO-based systems treat each transaction output as a distinct entity, introducing advantages in parallel processing and state transition simplicity. The Tuxedo project endeavours to demonstrate the flexibility and interoperability of Polkadot by implementing UTXO as one of its paradigms. MLabs, with expertise in the Cardano ecosystem utilizing UTXO as its core model, sees an opportunity to contribute to Tuxedo's success, address identified issues, and engage in future collaborative activities.

Our goal is to showcase the potential of Polkadot using the UTXO paradigm for the end user, leveraging Tuxedo.

**Deliverables**


| Number | Deliverable | Link | Notes |
| -----: | ----------- | ------------- | ------------- |
| **0a.** | License | [License file](https://github.com/mlabs-haskell/TuxedoDapp?tab=Apache-2.0-1-ov-file#readme) | Apache 2.0, as recommended |
| **0b.** | Documentation | [Wiki](https://github.com/mlabs-haskell/TuxedoDapp/wiki) | Info about APIs spreadsheet, Build and run the project, DApp specification, Frontend development libs, Game design, Talisman wallet, Wireframes |
| **0c.** | Testing and Testing Guide | link to readme? how to do so? | Tests are run in CI and instructions for running them locally are in the readme.|
| **0d.** | Article | Link to video and [GitHub project management tool](https://github.com/orgs/mlabs-haskell/projects/57/views/1) | This video shows how to use the Talismat wallet which we integrated |
| **0e.** | Docker | ? | anything about it? |
| **0f.** | Web-based wallet, CLI wallet and core | [DApp repo](https://github.com/mlabs-haskell/TuxedoDapp) , [CLI Wallet and core repo](https://github.com/mlabs-haskell/Tuxedo) | We integrated the well-known web-based wallet Talisman which was not compatible with Tuxedo nor the UTXO model |

##

**Additional Information**

Following the suggestion of Joshua Orndorff, author of Tuxedo, we focused on the integration of something existing instead of building from scratch a redundant solution. The effort was not trivial because Talisman doesn't support UTXO. However, to be sure about how the front end of the Dapp was supposed to work, we had to build extra features on the Tuxedo CLI-wallet. That effort was outside the scope of the grant, but we preferred to invest extra time and resources in this direction as well, to deeply understand and test the Tuxedo code. 
