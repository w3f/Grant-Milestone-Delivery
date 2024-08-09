# Evaluation

- **Status:** In Progress
- **Application Document:** [tuxedoDapp](https://github.com/w3f/Grants-Program/blob/master/applications/TuxedoDapp.md)
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by PieWol

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [License file](https://github.com/mlabs-haskell/TuxedoDapp?tab=Apache-2.0-1-ov-file#readme)  | Apache 2.0 |
| **0b.** | Documentation | <ul><li>[ ] </li></ul> |[README](https://github.com/mlabs-haskell/TuxedoDapp/blob/master/README.md), [Demo wallet integration](https://www.loom.com/share/e1270ecea79a4689aff5732e8acfae14), [CLI-wallet - Demo part 1/3](https://youtu.be/Mom3BV_HozY), [CLI-wallet - Demo  part 2/3](https://youtu.be/GfyiBW1XFW0), [CLI-wallet - Demo part 3/3](https://youtu.be/1T2oE0bfaCQ), [APIs spreadsheet](https://github.com/mlabs-haskell/TuxedoDapp/wiki/APIs-spreadsheet), [Build and run the project](https://github.com/mlabs-haskell/TuxedoDapp/wiki/Build-and-run-the-project), [Frontend development libs](https://github.com/mlabs-haskell/TuxedoDapp/wiki/Frontend-development-libs), [Game design](https://github.com/mlabs-haskell/TuxedoDapp/wiki/Game-design),  [Wireframes](https://github.com/mlabs-haskell/TuxedoDapp/wiki/Wireframes), [GitHub project management tool](https://github.com/orgs/mlabs-haskell/projects/57/views/1)| See notes |
| **0c.** | Testing and Testing Guide | <ul><li>[ ] </li></ul> | [CLI-Wallet test](https://github.com/mlabs-haskell/Tuxedo/blob/webservice-redeemer-gen-debug-with-lks/wardrobe/kitties/src/tests.rs) , [Tuxedo Template Wallet](https://github.com/mlabs-haskell/Tuxedo/blob/webservice-redeemer-gen-debug-with-lks/wallet/README.md) | see additional notes |
| **0d.** | Article | <ul><li>[x] </li></ul> | [Tuxedo DApp specification](https://docs.google.com/document/d/1dHsb_k3Xo5f4yFx802sMe22z6NYq3FeZc9l4bB0exMk/edit), [Talisman integration design](https://docs.google.com/presentation/d/1vsfJ5TYPXcvF4vmY7fHfM25lcNmZdjh6YfUyyoOzVAw/edit) |  |
| **0e.** | Docker | <ul><li>[ ] </li></ul> | [webservice-wallet](https://github.com/mlabs-haskell/Tuxedo/blob/webservice-redeemer-gen-debug-with-lks/webservice-wallet/Dockerfile)  | chains builds, please include instructions to run the webservice with docker |
| **0f.** | Frontend, CLI wallet and core | <ul><li>[ ] </li></ul> | [main DApp repo](https://github.com/mlabs-haskell/TuxedoDapp), [CLI Wallet and core repo](https://github.com/mlabs-haskell/Tuxedo)  | frontend state seems divergent from chain. |


## General Notes
Thanks for providing the testing guide.


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

The part about the CLI wallet extension isn't explicitly linked but I saw it in the readme of the wallet. 

## Functionality issues
At this point I will no longer try to hack until it works. I think you can either provide me a testing guide to only interact with the cli wallet or rework the current testing guide so that it actually works and all functionalities can be verfied.

I had issues to test the functionality. Even after a fresh setup strictly following the latest testing guide barely anythign works. Only thing I could do is list a single Kitty for purchase. A second listing attempt failed. The requests towards the webservice for minting of kitties as well as coins are working well. Below are my current issues.
All testing was done with cache disabled via the chrome dev console. The state between the dApp and the chain seem to be divergent.

1. Breeding a new Kitty
No Talisman pop-up. Nothing happens at all. On another try just some error messages came up with no meaningful content. I included an image of these error messsages in the github thread of the milestone delivery.

2. Trying to delist a Kitty
first there was no Talisman pop-up. After a few retries the following issue came up in the node logs

````
Accepting new connection 1/100
2024-07-19 10:05:40 runtime-> validate_transaction
            TransactionSource = TransactionSource::External
            tx = Transaction { inputs: [Input { output_ref: OutputRef { tx_hash: 0xe57ed0caae1c55e780115b1ca35a4edf168d12509cbee8be82bbbaf9a65b9a02, index: 0 }, redeemer: [36, 9, 197, 182, 115, 132, 123, 84, 157, 82, 104, 101, 102, 17, 61, 145, 225, 159, 34, 41, 31, 74, 179, 150, 44, 129, 73, 191, 174, 97, 103, 94, 243, 207, 140, 38, 36, 37, 134, 51, 78, 202, 128, 143, 26, 153, 222, 53, 84, 211, 72, 169, 81, 27, 111, 202, 114, 120, 154, 41, 143, 132, 54, 141] }], peeks: [], outputs: [Output { payload: DynamicallyTypedData { data: [1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 11, 183, 120, 190, 63, 13, 154, 151, 12, 25, 186, 221, 78, 182, 163, 113, 179, 55, 27, 1, 123, 38, 180, 94, 201, 76, 229, 189, 169, 244, 79, 53, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 107, 105, 116, 49], type_id: [75, 105, 116, 116] }, verifier: Sr25519Signature(Sr25519Signature { owner_pubkey: 0xecd473695cbfdc36602d8a858863e8bee1f67a341aa5f3d3ace024800f9d7a2b }) }], checker: TradableKitty(DelistKittiesFromSale) }
            block_hash = 0xa3df303ba49dc61806f3353be0fa67378b34ff8d132354361ec50be02e071274    
2024-07-19 10:05:40 validating tuxedo transaction    
2024-07-19 10:05:40 input_set.len() 1 and transaction.inputs.len()  1    
2024-07-19 10:05:40 Validation result: Ok(ValidTransaction { priority: 0, requires: [], provides: [[110, 10, 235, 103, 160, 84, 236, 100, 149, 245, 232, 107, 8, 4, 52, 74, 249, 249, 89, 63, 148, 193, 145, 196, 8, 160, 107, 184, 184, 82, 181, 137, 0, 0, 0, 0]], longevity: 18446744073709551615, propagate: true })    
2024-07-19 10:05:40 💤 Idle (0 peers), best: #1927 (0xa3df…1274), finalized #1924 (0x99f8…7f5e), ⬇ 0 ⬆ 0    
2024-07-19 10:05:42 🙌 Starting consensus session on top of parent 0xa3df303ba49dc61806f3353be0fa67378b34ff8d132354361ec50be02e071274    
2024-07-19 10:05:42 runtime-> inherent_extrinsics     
2024-07-19 10:05:42 runtime-> apply_extrinsic Transaction { inputs: [], peeks: [OutputRef { tx_hash: 0x4dbbfd44b1c15669230990c786a18008e7dbfc62ca0006ff2c29d551f98deab4, index: 0 }], outputs: [Output { payload: DynamicallyTypedData { data: [240, 92, 116, 202, 144, 1, 0, 0, 136, 7, 0, 0], type_id: [116, 105, 109, 101] }, verifier: UpForGrabs(UpForGrabs) }], checker: SetTimestamp(SetTimestamp(PhantomData<tuxedo_template_runtime::Runtime>)) }    
2024-07-19 10:05:42 validating tuxedo transaction    
2024-07-19 10:05:42 input_set.len() 0 and transaction.inputs.len()  0    
2024-07-19 10:05:42 runtime-> apply_extrinsic Transaction { inputs: [Input { output_ref: OutputRef { tx_hash: 0xe57ed0caae1c55e780115b1ca35a4edf168d12509cbee8be82bbbaf9a65b9a02, index: 0 }, redeemer: [36, 9, 197, 182, 115, 132, 123, 84, 157, 82, 104, 101, 102, 17, 61, 145, 225, 159, 34, 41, 31, 74, 179, 150, 44, 129, 73, 191, 174, 97, 103, 94, 243, 207, 140, 38, 36, 37, 134, 51, 78, 202, 128, 143, 26, 153, 222, 53, 84, 211, 72, 169, 81, 27, 111, 202, 114, 120, 154, 41, 143, 132, 54, 141] }], peeks: [], outputs: [Output { payload: DynamicallyTypedData { data: [1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 11, 183, 120, 190, 63, 13, 154, 151, 12, 25, 186, 221, 78, 182, 163, 113, 179, 55, 27, 1, 123, 38, 180, 94, 201, 76, 229, 189, 169, 244, 79, 53, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 107, 105, 116, 49], type_id: [75, 105, 116, 116] }, verifier: Sr25519Signature(Sr25519Signature { owner_pubkey: 0xecd473695cbfdc36602d8a858863e8bee1f67a341aa5f3d3ace024800f9d7a2b }) }], checker: TradableKitty(DelistKittiesFromSale) }    
2024-07-19 10:05:42 validating tuxedo transaction    
2024-07-19 10:05:42 input_set.len() 1 and transaction.inputs.len()  1    
2024-07-19 10:05:42 runtime-> finalize_block     
2024-07-19 10:05:42 🎁 Prepared block for proposing at 1928 (1 ms) [hash: 0xc195a18a3388b40ebce79fcd4caa693ed8b63023337a7a646e45bd1f06eeaebc; parent_hash: 0xa3df…1274; extrinsics (2): [0xf130…a005, 0x2df6…6c61]    
2024-07-19 10:05:42 🔖 Pre-sealed block for proposal at 1928. Hash now 0xefb963b00e01ca5e7264bc41e18368bb7bae8787c613cc029ac2e84ba2a1e57c, previously 0xc195a18a3388b40ebce79fcd4caa693ed8b63023337a7a646e45bd1f06eeaebc.    
2024-07-19 10:05:42 ✨ Imported #1928 (0xefb9…e57c)    
2024-07-19 10:05:42 runtime-> validate_transaction
            TransactionSource = TransactionSource::InBlock
            tx = Transaction { inputs: [], peeks: [OutputRef { tx_hash: 0x4dbbfd44b1c15669230990c786a18008e7dbfc62ca0006ff2c29d551f98deab4, index: 0 }], outputs: [Output { payload: DynamicallyTypedData { data: [240, 92, 116, 202, 144, 1, 0, 0, 136, 7, 0, 0], type_id: [116, 105, 109, 101] }, verifier: UpForGrabs(UpForGrabs) }], checker: SetTimestamp(SetTimestamp(PhantomData<tuxedo_template_runtime::Runtime>)) }
            block_hash = 0xa3df303ba49dc61806f3353be0fa67378b34ff8d132354361ec50be02e071274    
2024-07-19 10:05:42 Validation result: Err(TransactionValidityError::Invalid(InvalidTransaction::Call))  
````

3. Listing a second Kitty for purchase doesn't work. 

```
2024-07-19 09:31:06 ✨ Imported #1236 (0x695e…e2ea)    
2024-07-19 09:31:07 Accepting new connection 1/100
2024-07-19 09:31:07 runtime-> validate_transaction
            TransactionSource = TransactionSource::External
            tx = Transaction { inputs: [Input { output_ref: OutputRef { tx_hash: 0x4e50032d9e08e8f3cebb39b1dfa5b236c6db52d9755421c159b029d350b00a9f, index: 0 }, redeemer: [46, 126, 76, 179, 144, 244, 255, 150, 250, 107, 228, 5, 156, 130, 28, 124, 0, 230, 57, 42, 174, 29, 72, 38, 142, 144, 162, 90, 63, 180, 230, 31, 64, 8, 158, 171, 182, 148, 137, 144, 34, 197, 44, 90, 96, 123, 171, 98, 101, 229, 184, 0, 236, 136, 71, 152, 53, 0, 186, 17, 115, 61, 229, 138] }], peeks: [], outputs: [Output { payload: DynamicallyTypedData { data: [1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 11, 183, 120, 190, 63, 13, 154, 151, 12, 25, 186, 221, 78, 182, 163, 113, 179, 55, 27, 1, 123, 38, 180, 94, 201, 76, 229, 189, 169, 244, 79, 53, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 107, 105, 116, 49], type_id: [75, 105, 116, 116] }, verifier: Sr25519Signature(Sr25519Signature { owner_pubkey: 0xecd473695cbfdc36602d8a858863e8bee1f67a341aa5f3d3ace024800f9d7a2b }) }], checker: TradableKitty(DelistKittiesFromSale) }
            block_hash = 0x695ee841e4f88b0bcc7c1d40f60507c6b851e78094a5eac763a3abd2bfbce2ea    
2024-07-19 09:31:07 validating tuxedo transaction    
2024-07-19 09:31:07 input_set.len() 1 and transaction.inputs.len()  1    
2024-07-19 09:31:07 Validation result: Ok(ValidTransaction { priority: 0, requires: [], provides: [[69, 103, 95, 95, 100, 29, 28, 155, 94, 21, 118, 229, 22, 254, 153, 106, 146, 220, 225, 193, 116, 214, 189, 107, 135, 201, 79, 246, 122, 38, 52, 114, 0, 0, 0, 0]], longevity: 18446744073709551615, propagate: true })    
2024-07-19 09:31:09 🙌 Starting consensus session on top of parent 0x695ee841e4f88b0bcc7c1d40f60507c6b851e78094a5eac763a3abd2bfbce2ea    
2024-07-19 09:31:09 runtime-> inherent_extrinsics     
2024-07-19 09:31:09 runtime-> apply_extrinsic Transaction { inputs: [], peeks: [OutputRef { tx_hash: 0xee5d37cc9103ccf8bd63dae9863615fcc71a315063b73fe2bb0be3fdcf435a6d, index: 0 }], outputs: [Output { payload: DynamicallyTypedData { data: [72, 187, 84, 202, 144, 1, 0, 0, 213, 4, 0, 0], type_id: [116, 105, 109, 101] }, verifier: UpForGrabs(UpForGrabs) }], checker: SetTimestamp(SetTimestamp(PhantomData<tuxedo_template_runtime::Runtime>)) }    
2024-07-19 09:31:09 validating tuxedo transaction    
2024-07-19 09:31:09 input_set.len() 0 and transaction.inputs.len()  0    
2024-07-19 09:31:09 runtime-> apply_extrinsic Transaction { inputs: [Input { output_ref: OutputRef { tx_hash: 0x4e50032d9e08e8f3cebb39b1dfa5b236c6db52d9755421c159b029d350b00a9f, index: 0 }, redeemer: [46, 126, 76, 179, 144, 244, 255, 150, 250, 107, 228, 5, 156, 130, 28, 124, 0, 230, 57, 42, 174, 29, 72, 38, 142, 144, 162, 90, 63, 180, 230, 31, 64, 8, 158, 171, 182, 148, 137, 144, 34, 197, 44, 90, 96, 123, 171, 98, 101, 229, 184, 0, 236, 136, 71, 152, 53, 0, 186, 17, 115, 61, 229, 138] }], peeks: [], outputs: [Output { payload: DynamicallyTypedData { data: [1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 11, 183, 120, 190, 63, 13, 154, 151, 12, 25, 186, 221, 78, 182, 163, 113, 179, 55, 27, 1, 123, 38, 180, 94, 201, 76, 229, 189, 169, 244, 79, 53, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 107, 105, 116, 49], type_id: [75, 105, 116, 116] }, verifier: Sr25519Signature(Sr25519Signature { owner_pubkey: 0xecd473695cbfdc36602d8a858863e8bee1f67a341aa5f3d3ace024800f9d7a2b }) }], checker: TradableKitty(DelistKittiesFromSale) }    
2024-07-19 09:31:09 validating tuxedo transaction    
2024-07-19 09:31:09 input_set.len() 1 and transaction.inputs.len()  1    
2024-07-19 09:31:09 runtime-> finalize_block     
2024-07-19 09:31:09 🎁 Prepared block for proposing at 1237 (1 ms) [hash: 0x33f83575c1c75b07538ad5d9a9de877d835e973a4f8623924b8a4f7b0f7df1e9; parent_hash: 0x695e…e2ea; extrinsics (2): [0x8d11…63e8, 0x8e5d…e293]    
2024-07-19 09:31:09 🔖 Pre-sealed block for proposal at 1237. Hash now 0x03f740ff29276d619638007c9d97eef130efccdb4b17400efa0e47efa1b1df90, previously 0x33f83575c1c75b07538ad5d9a9de877d835e973a4f8623924b8a4f7b0f7df1e9.    
2024-07-19 09:31:09 ✨ Imported #1237 (0x03f7…df90)    
2024-07-19 09:31:09 runtime-> validate_transaction
            TransactionSource = TransactionSource::InBlock
            tx = Transaction { inputs: [], peeks: [OutputRef { tx_hash: 0xee5d37cc9103ccf8bd63dae9863615fcc71a315063b73fe2bb0be3fdcf435a6d, index: 0 }], outputs: [Output { payload: DynamicallyTypedData { data: [72, 187, 84, 202, 144, 1, 0, 0, 213, 4, 0, 0], type_id: [116, 105, 109, 101] }, verifier: UpForGrabs(UpForGrabs) }], checker: SetTimestamp(SetTimestamp(PhantomData<tuxedo_template_runtime::Runtime>)) }
            block_hash = 0x695ee841e4f88b0bcc7c1d40f60507c6b851e78094a5eac763a3abd2bfbce2ea    
2024-07-19 09:31:09 Validation result: Err(TransactionValidityError::Invalid(InvalidTransaction::Call))   
```
4. Purchasing a kitty. 

Even though I have minted sufficient coins to the purchasing account. This is also reflected within the frontend. Yet owner doesn't change and the chain rejects the tx.
````
2024-07-19 10:01:22 Accepting new connection 1/100
2024-07-19 10:01:22 runtime-> validate_transaction
            TransactionSource = TransactionSource::External
            tx = Transaction { inputs: [Input { output_ref: OutputRef { tx_hash: 0x9693997ef4730bcc3e40f1fa233008d599695ded24ba0ec7fab36e09f001bdfd, index: 0 }, redeemer: [218, 223, 181, 115, 197, 223, 65, 25, 201, 234, 87, 201, 46, 133, 60, 48, 239, 196, 5, 203, 51, 131, 193, 15, 172, 88, 208, 79, 221, 136, 57, 81, 143, 201, 133, 123, 228, 58, 64, 135, 246, 138, 37, 221, 52, 246, 62, 99, 218, 46, 193, 239, 165, 193, 183, 106, 227, 195, 145, 177, 79, 136, 121, 128] }, Input { output_ref: OutputRef { tx_hash: 0x610203c4c2d664618677764c3e31c8608f4488149ace2e9a98adf07f3847d7f0, index: 0 }, redeemer: [188, 57, 0, 127, 206, 2, 163, 16, 224, 244, 234, 50, 8, 107, 128, 253, 108, 103, 26, 24, 170, 57, 185, 240, 16, 60, 108, 78, 141, 188, 223, 25, 221, 28, 248, 253, 102, 201, 244, 154, 88, 154, 243, 150, 139, 92, 92, 15, 235, 36, 29, 169, 167, 24, 38, 99, 254, 115, 126, 143, 137, 68, 36, 136] }], peeks: [], outputs: [Output { payload: DynamicallyTypedData { data: [1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 11, 183, 120, 190, 63, 13, 154, 151, 12, 25, 186, 221, 78, 182, 163, 113, 179, 55, 27, 1, 123, 38, 180, 94, 201, 76, 229, 189, 169, 244, 79, 53, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 107, 105, 116, 49, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], type_id: [116, 100, 107, 116] }, verifier: Sr25519Signature(Sr25519Signature { owner_pubkey: 0xc8d29f460cda2f9d09882126246ca415f255fbb9e5af4ddde9027d1e64da9e46 }) }, Output { payload: DynamicallyTypedData { data: [180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], type_id: [99, 111, 105, 0] }, verifier: Sr25519Signature(Sr25519Signature { owner_pubkey: 0xecd473695cbfdc36602d8a858863e8bee1f67a341aa5f3d3ace024800f9d7a2b }) }], checker: TradableKitty(Buy) }
            block_hash = 0x10fa30668ed3deae018d49a4fbafb04308f4295389c4f01470de5beba9270436    
2024-07-19 10:01:22 validating tuxedo transaction    
2024-07-19 10:01:22 input_set.len() 2 and transaction.inputs.len()  2    
2024-07-19 10:01:22 Money:Spend called     
2024-07-19 10:01:22 Money:Spend Total burned for this transaction = 20    
2024-07-19 10:01:22 Validation result: Ok(ValidTransaction { priority: 0, requires: [], provides: [[164, 57, 94, 54, 161, 129, 101, 105, 150, 38, 89, 110, 61, 42, 33, 200, 215, 226, 167, 157, 60, 200, 191, 144, 90, 131, 71, 151, 35, 148, 177, 244, 0, 0, 0, 0], [164, 57, 94, 54, 161, 129, 101, 105, 150, 38, 89, 110, 61, 42, 33, 200, 215, 226, 167, 157, 60, 200, 191, 144, 90, 131, 71, 151, 35, 148, 177, 244, 1, 0, 0, 0]], longevity: 18446744073709551615, propagate: true })    
2024-07-19 10:01:23 Accepting new connection 1/100
2024-07-19 10:01:24 🙌 Starting consensus session on top of parent 0x10fa30668ed3deae018d49a4fbafb04308f4295389c4f01470de5beba9270436    
2024-07-19 10:01:24 runtime-> inherent_extrinsics     
2024-07-19 10:01:24 runtime-> apply_extrinsic Transaction { inputs: [], peeks: [OutputRef { tx_hash: 0x727cc437a5010fcd4ef9f0e17989ee8e3fd9a21a3980d1117e7c8245208592d9, index: 0 }], outputs: [Output { payload: DynamicallyTypedData { data: [32, 109, 112, 202, 144, 1, 0, 0, 50, 7, 0, 0], type_id: [116, 105, 109, 101] }, verifier: UpForGrabs(UpForGrabs) }], checker: SetTimestamp(SetTimestamp(PhantomData<tuxedo_template_runtime::Runtime>)) }    
2024-07-19 10:01:24 validating tuxedo transaction    
2024-07-19 10:01:24 input_set.len() 0 and transaction.inputs.len()  0    
2024-07-19 10:01:24 runtime-> apply_extrinsic Transaction { inputs: [Input { output_ref: OutputRef { tx_hash: 0x9693997ef4730bcc3e40f1fa233008d599695ded24ba0ec7fab36e09f001bdfd, index: 0 }, redeemer: [218, 223, 181, 115, 197, 223, 65, 25, 201, 234, 87, 201, 46, 133, 60, 48, 239, 196, 5, 203, 51, 131, 193, 15, 172, 88, 208, 79, 221, 136, 57, 81, 143, 201, 133, 123, 228, 58, 64, 135, 246, 138, 37, 221, 52, 246, 62, 99, 218, 46, 193, 239, 165, 193, 183, 106, 227, 195, 145, 177, 79, 136, 121, 128] }, Input { output_ref: OutputRef { tx_hash: 0x610203c4c2d664618677764c3e31c8608f4488149ace2e9a98adf07f3847d7f0, index: 0 }, redeemer: [188, 57, 0, 127, 206, 2, 163, 16, 224, 244, 234, 50, 8, 107, 128, 253, 108, 103, 26, 24, 170, 57, 185, 240, 16, 60, 108, 78, 141, 188, 223, 25, 221, 28, 248, 253, 102, 201, 244, 154, 88, 154, 243, 150, 139, 92, 92, 15, 235, 36, 29, 169, 167, 24, 38, 99, 254, 115, 126, 143, 137, 68, 36, 136] }], peeks: [], outputs: [Output { payload: DynamicallyTypedData { data: [1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 11, 183, 120, 190, 63, 13, 154, 151, 12, 25, 186, 221, 78, 182, 163, 113, 179, 55, 27, 1, 123, 38, 180, 94, 201, 76, 229, 189, 169, 244, 79, 53, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 107, 105, 116, 49, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], type_id: [116, 100, 107, 116] }, verifier: Sr25519Signature(Sr25519Signature { owner_pubkey: 0xc8d29f460cda2f9d09882126246ca415f255fbb9e5af4ddde9027d1e64da9e46 }) }, Output { payload: DynamicallyTypedData { data: [180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], type_id: [99, 111, 105, 0] }, verifier: Sr25519Signature(Sr25519Signature { owner_pubkey: 0xecd473695cbfdc36602d8a858863e8bee1f67a341aa5f3d3ace024800f9d7a2b }) }], checker: TradableKitty(Buy) }    
2024-07-19 10:01:24 validating tuxedo transaction    
2024-07-19 10:01:24 input_set.len() 2 and transaction.inputs.len()  2    
2024-07-19 10:01:24 Money:Spend called     
2024-07-19 10:01:24 Money:Spend Total burned for this transaction = 20    
2024-07-19 10:01:24 runtime-> finalize_block     
2024-07-19 10:01:24 🎁 Prepared block for proposing at 1842 (1 ms) [hash: 0x5895c13f58d00bf17dbc912f30f3140077ff75bd4d5cf64571e06e7e782190af; parent_hash: 0x10fa…0436; extrinsics (2): [0x54c7…6d0c, 0x30ed…35ab]    
2024-07-19 10:01:24 🔖 Pre-sealed block for proposal at 1842. Hash now 0xef09b1fb80befbb217d7c9f845880b09ae1c6f3ad7025da90cd028c47dd0f080, previously 0x5895c13f58d00bf17dbc912f30f3140077ff75bd4d5cf64571e06e7e782190af.    
2024-07-19 10:01:24 ✨ Imported #1842 (0xef09…f080)    
2024-07-19 10:01:24 runtime-> validate_transaction
            TransactionSource = TransactionSource::InBlock
            tx = Transaction { inputs: [], peeks: [OutputRef { tx_hash: 0x727cc437a5010fcd4ef9f0e17989ee8e3fd9a21a3980d1117e7c8245208592d9, index: 0 }], outputs: [Output { payload: DynamicallyTypedData { data: [32, 109, 112, 202, 144, 1, 0, 0, 50, 7, 0, 0], type_id: [116, 105, 109, 101] }, verifier: UpForGrabs(UpForGrabs) }], checker: SetTimestamp(SetTimestamp(PhantomData<tuxedo_template_runtime::Runtime>)) }
            block_hash = 0x10fa30668ed3deae018d49a4fbafb04308f4295389c4f01470de5beba9270436    
2024-07-19 10:01:24 Validation result: Err(TransactionValidityError::Invalid(InvalidTransaction::Call))
