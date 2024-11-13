# Evaluation

- **Status:** accepted
- **Application Document:** [tuxedoDapp](https://github.com/w3f/Grants-Program/blob/master/applications/TuxedoDapp.md)
- **Milestone:** 2
- **Previously successfully merged evaluation:** All by PieWol

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [License file](https://github.com/mlabs-haskell/TuxedoDapp?tab=Apache-2.0-1-ov-file#readme)  | Apache 2.0 |
| **0b.** | Documentation | <ul><li>[x] </li></ul> |[Wiki](https://github.com/mlabs-haskell/TuxedoDapp/wiki) | ok  |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [Kitty Piece test](https://github.com/mlabs-haskell/Tuxedo/blob/main/wardrobe/kitties/src/tests.rs) , [Tradable Kitty Piece test](https://github.com/mlabs-haskell/Tuxedo/blob/main/wardrobe/tradable_kitties/src/tests.rs) | ok |
| **0d.** | Article | <ul><li>[x] </li></ul> | [Tuxedo DApp specification](https://docs.google.com/document/d/1dHsb_k3Xo5f4yFx802sMe22z6NYq3FeZc9l4bB0exMk/edit) | ok |
| **0e.** | Kitties Pieces: Docker image | <ul><li>[x] </li></ul> | [webservice-wallet](https://github.com/mlabs-haskell/Tuxedo/blob/webservice-redeemer-gen-debug-with-lks/webservice-wallet/Dockerfile)  | works |
| **0f.** | dApp | <ul><li>[x] </li></ul> | [main DApp repo](https://github.com/mlabs-haskell/TuxedoDapp), [CLI Wallet and core repo](https://github.com/mlabs-haskell/Tuxedo)  | frontend shows already purchased kitties still as "for sale". |
| **0g.** | Personalized Dashboard |  <ul><li>[x] </li></ul> | - | ok |



## General Notes
There is one issue in the frontend as it shows Kitties that already have been bought still as "for sale" so the UI support you in creating a TX to buy this even though it has just been bought and is actually no longer for sale. These transactions fail and it doesn't change the owner again. Sadly the grantee is not willing to fix this issue due to unreasonable time and effort this would require on his side. Still all agreed upon deliverables have been achieved and this milestone is accepted nonetheless. 


## Article
It would have been amazing if there were a short and high level overview of your work to be published on e.g. medium for the general community to read. This deliverable is accepted though as it wasn't specified in the agreement. The agreed upon items for this deliverable have been delivered.