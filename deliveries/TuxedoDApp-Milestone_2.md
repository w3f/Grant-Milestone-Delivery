# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** <https://github.com/w3f/Grants-Program/blob/master/applications/TuxedoDapp.md>
* **Milestone Number:** 2

**Context**

Unlike traditional account-based systems, UTXO-based systems treat each transaction output as a distinct entity, introducing advantages in parallel processing and state transition simplicity. The Tuxedo project endeavours to demonstrate the flexibility and interoperability of Polkadot by implementing UTXO as one of its paradigms. MLabs, with expertise in the Cardano ecosystem utilizing UTXO as its core model, sees an opportunity to contribute to Tuxedo's success, address identified issues, and engage in future collaborative activities.

Our goal is to showcase the potentiality of a real business case of UTXO paradigm on Polkadot.

In this conclusive milestone of the project, we will demo the overall solution with every single component we built (frontend, web service,  swagger restful API contracts and the CLI-wallet extended). We will include our comments on how this product could have been built by adopting an EVM-based chain and also another UTXO-based chain backed by smart contracts.

**Deliverables**

| Number | Deliverable | Link | Notes |
| -----: | ----------- | ------------- | ------------- |
| **0a.** | License | [License file](https://github.com/mlabs-haskell/TuxedoDapp?tab=Apache-2.0-1-ov-file#readme) | Apache 2.0, as recommended |
| **0b.** | Documentation | [Wiki](https://github.com/mlabs-haskell/TuxedoDapp/wiki) | Info about APIs spreadsheet, Build and run the project, DApp specification, Frontend development libs, Game design, Talisman wallet, Wireframes |
| **0c.** | Testing and Testing Guide | [Kitty Piece test](https://github.com/mlabs-haskell/Tuxedo/blob/main/wardrobe/kitties/src/tests.rs) , [Tradable Kitty Piece test](https://github.com/mlabs-haskell/Tuxedo/blob/main/wardrobe/tradable_kitties/src/tests.rs) , [Tuxedo Template Wallet](https://github.com/mlabs-haskell/Tuxedo/blob/main/wallet/README.md) , [APIs test](https://github.com/mlabs-haskell/Tuxedo/tree/main/webservice-wallet#rest-documentation) | We included our tests done for the CLI-Wallet, they can be executed using the Tuxedo documentation in the README. We did tests also for the APIs |
| **0d.** | Article | [Demo frontend, web service, swagger restful API contracts](https://www.loom.com/share/4445b97dddd8447c8ccafa3b9cea6bb6), [Demo - CLI-wallet - part 1/3](https://youtu.be/Mom3BV_HozY), [Demo - CLI-wallet - part 2/3](https://youtu.be/GfyiBW1XFW0), [Demo - CLI-wallet - part 3/3](https://youtu.be/1T2oE0bfaCQ), [GitHub project management tool](https://github.com/orgs/mlabs-haskell/projects/57/views/1) | This video shows every single component we built including the Talisman integration. The GitHub PM tool tracked the amount of work done across different developers |
| **0e.** | Docker | [webservice-wallet](https://github.com/mlabs-haskell/Tuxedo/blob/webservice-redeemer-gen-debug-with-lks/webservice-wallet/Dockerfile) | For the Web wallet integration docker is not needed, however, we included the one used for the webservice |
| **0f.** | Frontend, CLI wallet and core, Backend | [main DApp repo](https://github.com/mlabs-haskell/TuxedoDapp), [CLI Wallet and core repo](https://github.com/mlabs-haskell/Tuxedo), [Webservice APIs](https://github.com/mlabs-haskell/Tuxedo/tree/webservice-redeemer-gen-debug-with-lks/webservice-wallet) | We integrated Talisman and created a Dapp with the business logic in the backend that uses the UTXO model to send money and Kitties. For the same purposes, users could also use the CLI-wallet we extended. |
| **0g.** | Personalized Dashboard | Video showed at 0d | A personal dashboard for users to view and manage their NFT-based kitty collections. Display detailed information about each NFT, including ownership and other details such as parents, dna, Tradable status, Price, etc |


##

**Additional Information**

We did a [short comparative analysis](https://docs.google.com/document/d/1kdYA9Jd100p91t9okjYncLZw_Qn6guo2Bm032mko3DU/edit?usp=sharing) of the development of the same application adopting EVM-based and Cardano (eUTXO) versus Tuxedo.
Moreover, it underscores the potential for Tuxedo's ongoing development to become a robust platform for creating UTXO Dapps on Polkadot.

Additional extra work outside the scope of the grant:

1. Mint_coin: <https://github.com/Off-Narrative-Labs/Tuxedo/commit/80e7b5720a384907cef89e091034fff3fe0f2b7f>
2. Metadata analysis and design/experiments: <https://github.com/Off-Narrative-Labs/Tuxedo/issues/30#issuecomment-1920539885>
3. Complete CLI-wallet implementation for Kitties/Tradable kitties: <https://github.com/mlabs-haskell/Tuxedo/blob/main/wallet/src/kitty.rs>
4. Cryptokitties development: A comparative analysis between EVM - Tuxedo/Polkadot - Cardano: <https://docs.google.com/document/d/1kdYA9Jd100p91t9okjYncLZw_Qn6guo2Bm032mko3DU/edit?usp=sharing>