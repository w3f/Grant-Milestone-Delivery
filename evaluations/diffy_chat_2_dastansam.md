# Evaluation

- **Status:** In Progress
- **Application Document:** [Application](https://github.com/w3f/Grants-Program/blob/master/applications/Diffy_chat.md)
- **Milestone:** 2
- **Kusama Identity:** [Fd1SvYZnE3dZ3mEaq5QG1HEWhzNrDyMPJ41C4fQqiMirtTP](https://sub.id/Fd1SvYZnE3dZ3mEaq5QG1HEWhzNrDyMPJ41C4fQqiMirtTP)
- **Previously successfully merged evaluation:** [Milestone 1](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/diffy_chat_1_dsm-w3f.md)

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [LICENSE](https://github.com/Belsoft-rs/diffychat-pallet/blob/main/LICENSE) | Correct license |
| 0b. | Documentation | [Readme.md](https://github.com/Belsoft-rs/diffychat-client/blob/master/README.md) | Well-covered documentation |
| 0c. | Testing Guide | [Diffy chat pallet](https://github.com/Belsoft-rs/diffychat-pallet#getting-started) | Tests are passing, logs below. |
| 0d. | Article | [BelSoft Dev on Medium](https://medium.com/@belsoft/diffy-chat-a-secured-decentralized-messenger-194ad74d6669) | Article is posted, it explains well the need for this messenger and has an extensive coverage. |
| 1. | Contacts list feature | [See here](https://github.com/Belsoft-rs/diffychat-client/blob/master/src/components/messenger/contacts/contacts.js) | Feature is delivered completely, and is deployed [here](https://belsoft-rs.github.io/diffychat/). Users are able to add others into their contact list. | 
| 2. | Web messenger dapp MVP | [See here](https://belsoft-rs.github.io/diffychat/index.html) | I wasn't able to complete instructions for testing the web messenger. I followed the tutorial video that was provided but it just hangs and lags for me. I attached some screenshots of the failure. | 

## General Notes

Contact list feature works both locally and on production. However, main web messenger has different behaviour than expected. I followed the tutorial [video](https://media.belsoft.rs/diffychat/diffychat.mp4) that was provided but chat windows just hang and lag for me. I attached screenshot of the failure.

I also thought you would use `Polkadot.js` wallet when you mentioned that `web messenger will use Polkadot.js for authorization`, but it seems that you are using `polkadot.js` library. It seemed strange to me that user inserts their `mnemonic` phrase into the form and not use their wallet directly. I think it would be nice if you could provide some context on that.

## Logs and screenshots

<img width="1721" alt="Hanging screenshot" src="https://github.com/dastansam/Grant-Milestone-Delivery/assets/88332432/963bebb0-b0fd-4f33-b15d-9941fd07770f">

<details>

<summary>Tests</summary>

```
running 7 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::test_register ... ok
test tests::test_upsert_contact ... ok
test tests::test_register_nickname_is_already_registered ... ok
test tests::offer_chat_with_static_values ... ok
test tests::test_register_account_id_is_already_registered ... ok
test tests::answer_chat_with_static_values ... ok

test result: ok. 7 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```

</details>
