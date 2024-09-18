# Evaluation

- **Status:** In progress
- **Application Document:** [tuxedoDapp](https://github.com/w3f/Grants-Program/blob/master/applications/TuxedoDapp.md)
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by PieWol

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [License file](https://github.com/mlabs-haskell/TuxedoDapp?tab=Apache-2.0-1-ov-file#readme)  | Apache 2.0 |
| **0b.** | Documentation | <ul><li>[x] </li></ul> |[README](https://github.com/mlabs-haskell/TuxedoDapp/blob/master/README.md), [Demo wallet integration](https://www.loom.com/share/e1270ecea79a4689aff5732e8acfae14), [CLI-wallet - Demo part 1/3](https://youtu.be/Mom3BV_HozY), [CLI-wallet - Demo  part 2/3](https://youtu.be/GfyiBW1XFW0), [CLI-wallet - Demo part 3/3](https://youtu.be/1T2oE0bfaCQ), [APIs spreadsheet](https://github.com/mlabs-haskell/TuxedoDapp/wiki/APIs-spreadsheet), [Build and run the project](https://github.com/mlabs-haskell/TuxedoDapp/wiki/Build-and-run-the-project), [Frontend development libs](https://github.com/mlabs-haskell/TuxedoDapp/wiki/Frontend-development-libs), [Game design](https://github.com/mlabs-haskell/TuxedoDapp/wiki/Game-design),  [Wireframes](https://github.com/mlabs-haskell/TuxedoDapp/wiki/Wireframes)| ok  |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [CLI-Wallet test](https://github.com/mlabs-haskell/Tuxedo/blob/webservice-redeemer-gen-debug-with-lks/wardrobe/kitties/src/tests.rs) , [Tuxedo Template Wallet](https://github.com/mlabs-haskell/Tuxedo/blob/webservice-redeemer-gen-debug-with-lks/wallet/README.md) | see additional notes |
| **0d.** | Article | <ul><li>[x] </li></ul> | [Tuxedo DApp specification](https://docs.google.com/document/d/1dHsb_k3Xo5f4yFx802sMe22z6NYq3FeZc9l4bB0exMk/edit), [Talisman integration design](https://docs.google.com/presentation/d/1vsfJ5TYPXcvF4vmY7fHfM25lcNmZdjh6YfUyyoOzVAw/edit) | ok |
| **0e.** | Docker | <ul><li>[x] </li></ul> | [webservice-wallet](https://github.com/mlabs-haskell/Tuxedo/blob/webservice-redeemer-gen-debug-with-lks/webservice-wallet/Dockerfile)  | works |
| **0f.** | Frontend, CLI wallet and core | <ul><li>[ ] </li></ul> | [main DApp repo](https://github.com/mlabs-haskell/TuxedoDapp), [CLI Wallet and core repo](https://github.com/mlabs-haskell/Tuxedo)  | see notes, frontend shows already purchased kitties still as "for sale". |


## General Notes
Thanks for providing the testing guide.

1. Minting Kitties works
2. Breeding Kitties works
3. Listing a Kitty for purchase works
4. Purchasing a kitty works

There is one issue in the frontend as it shows Kitties that already have been bought still as "for sale" so the UI support you in creating a TX to buy this even though it has just been bought and is actually no longer for sale. These transactions fail and it doesn't change the owner again.



## Testing
webservice tests: 
``test result: ok. 30 passed``

node tests failing:

```
failures:
    service_handlers::block_handler::block_service_handler::tests::test_get_block_block_number_not_present_fail
    service_handlers::block_handler::block_service_handler::tests::test_get_block_success
    service_handlers::block_handler::block_service_handler::tests::test_get_genesis_block_success
    service_handlers::kitty_handler::kitty_service_handler::tests::test_breed_kitty
    service_handlers::kitty_handler::kitty_service_handler::tests::test_buy_kitty
    service_handlers::kitty_handler::kitty_service_handler::tests::test_create_kitty
    service_handlers::kitty_handler::kitty_service_handler::tests::test_create_kitty_fail_due_unknown_public_key
    service_handlers::kitty_handler::kitty_service_handler::tests::test_create_kitty_success
    service_handlers::kitty_handler::kitty_service_handler::tests::test_delist_kitty_from_sale
    service_handlers::kitty_handler::kitty_service_handler::tests::test_get_all_kitty_list
    service_handlers::kitty_handler::kitty_service_handler::tests::test_get_all_td_kitty_list
    service_handlers::kitty_handler::kitty_service_handler::tests::test_get_kitty_by_dna
    service_handlers::kitty_handler::kitty_service_handler::tests::test_get_owned_kitty_list
    service_handlers::kitty_handler::kitty_service_handler::tests::test_get_owned_td_kitty_list
    service_handlers::kitty_handler::kitty_service_handler::tests::test_get_td_kitty_by_dna
    service_handlers::kitty_handler::kitty_service_handler::tests::test_get_txn_and_inpututxolist_for_list_kitty_for_sale_success
    service_handlers::kitty_handler::kitty_service_handler::tests::test_list_kitty_for_sale
    service_handlers::kitty_handler::kitty_service_handler::tests::test_name_update
    service_handlers::kitty_handler::kitty_service_handler::tests::test_td_name_update
    service_handlers::kitty_handler::kitty_service_handler::tests::test_td_price_update
    service_handlers::money_handler::money_servicehandler::tests::test_get_all_coins
    service_handlers::money_handler::money_servicehandler::tests::test_owned_coins

test result: FAILED. 8 passed; 22 failed; 0 ignored; 0 measured; 0 filtered out; finished in 15.14s
```



## Documentation 
The API documentation is currently in an excel spreadsheet which makes for a very cluttered look. Not that this is your fault but excel doesn't seem to be a great tool for API documentation and management.

## Article
It would have been amazing if there were a short and high level overview of your work to be published on e.g. medium for the general community to read. This deliverable is accepted though as it wasn't specified in the agreement. The agreed upon items for this deliverable have been delivered.