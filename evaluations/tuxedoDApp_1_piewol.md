# Evaluation

- **Status:** In Progress
- **Application Document:** [tuxedoDapp](https://github.com/w3f/Grants-Program/blob/master/applications/TuxedoDapp.md)
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by PieWol

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [License file](https://github.com/mlabs-haskell/TuxedoDapp?tab=Apache-2.0-1-ov-file#readme)  | Apache 2.0 |
| **0b.** | Documentation | <ul><li>[ ] </li></ul> |[Wiki](https://github.com/mlabs-haskell/TuxedoDapp/wiki) | See notes |
| **0c.** | Testing and Testing Guide | <ul><li>[ ] </li></ul> | [CLI-Wallet test](https://github.com/mlabs-haskell/Tuxedo/blob/webservice-redeemer-gen-debug-with-lks/wardrobe/kitties/src/tests.rs) , [Tuxedo Template Wallet](https://github.com/mlabs-haskell/Tuxedo/blob/webservice-redeemer-gen-debug-with-lks/wallet/README.md) | — |
| **0d.** | Article | <ul><li>[ ] </li></ul> | [Demo wallet integration](https://www.loom.com/share/e1270ecea79a4689aff5732e8acfae14), [GitHub project management tool](https://github.com/orgs/mlabs-haskell/projects/57/views/1)  |  See notes  |
| **0e.** | Docker | <ul><li>[ ] </li></ul> | [webservice-wallet](https://github.com/mlabs-haskell/Tuxedo/blob/webservice-redeemer-gen-debug-with-lks/webservice-wallet/Dockerfile)  | See notes |
| **0f.** | Frontend, CLI wallet and core | <ul><li>[ ] </li></ul> | [main DApp repo](https://github.com/mlabs-haskell/TuxedoDapp) , [CLI Wallet and core repo](https://github.com/mlabs-haskell/Tuxedo)  | please put up amendment PR to keep deliverables consistent. See general notes! |


## General Notes

Great job with the Talisman integration. I think this is a must have for a Tuxedo dApp to be adopted by users of the ecosystem.

I see that you have deviated in the ``0f`` deliverable from the one in your application. Is it correct that you have, instead of creating your own web-based wallet, integrated Talisman to be usable for Tuxedo and your dApp? If so, please put up an amendment PR to your original application and clarify these points. I think it is a good change to make Talisman work. Just make sure that you keep your deliverables from your application and your actual milestone delivery in check. So please put up an amendment PR that states that there is no self-made web-based wallet. 

Please adjust some links of this milestone to better fit the original application and its specifications for the deliverables. Right now the wallet readme isn't even mentioned in the documentation deliverable. Even though I think this is the key documentation for this milestone.




## Documentation 
The demo for showcasing the Talisman wallet compatibility seems cut short. In the readme only a 4 second clip is visible.

Furthermore this was is specification of the documentation deliverable in your application:

"We will provide [...] a basic tutorial that explains how a user can use the web wallet app for Tuxedo (Private key configuration, local URI to be used to connect to blockchain) and send test transactions, tuxedo balance, which will show how the new functionality works."

Is this all covered by the readme within the wallet directory?


## Article

"We will publish an article/workshop that explains how to use the web-based wallet which can be used to configure the user's private key and also get the information from the tuxedo based blockchain, how to do the transactions based on UTXO instead of account-based blockchain."

Was listed as the specification for this deliverable. Yet in the milestone delivery you are linking to a little showcase video that walks through a offer creation and buying process. No info on private key configuration or how information from the chain is retrieved. It's just a video of a frontend usage.

Is there no written article at all? This is usually a deliverable aimed at providing content for the community of this ecosystem to be made aware of your project and give them an easy to understand introduction. Your kanban-style github issue history is not really hitting the spot for this deliverable.

Especially interesting could be a written article that covers your changes to Talisman to be Tuxedo compatible on a high level.

## Docker
In the docker delivery you gave the following description:

 "For the Web wallet integration docker is not needed, however, we included the one used for the webservice"

 This confuses me a lot. Is the "web wallet integration" the Talisman integration? If so please just call it Talisman integration. I think this is far less confusing. Furthermore what exactly are you referring to by "webservice"? Is this supposed to be your dApp?

Is this dockerfile shipped so that I can test the CLI wallet within the container? Or is there some other purpose to it?