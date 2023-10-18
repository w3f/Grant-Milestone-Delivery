# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/xcm-domain-service.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.** | License                    |<ul><li>[x] </li></ul>| ----                                                                                     | |
| **0b.** | Documentation              |<ul><li>[ ] </li></ul>| ----                                                                                     | Not fully evaluated yet. |
| **0c.** | Methodology                |<ul><li>[ ] </li></ul>| [Docs](https://docs.google.com/document/d/1r9gQDz_-qi56uVKXHHleepwx4tMyw6WFoAJJpO57PW0/) | Not fully evaluated yet. |
| **0d.** | Report                     |<ul><li>[ ] </li></ul>| [Docs](https://docs.google.com/document/d/1-6WTMW5M_0ov_LoP-J0m62_V4yhhDF4zKrnMXuTiskI/) | Not fully evaluated yet. |
| **1.**  | Technical Assessments      |<ul><li>[ ] </li></ul>| [Docs](https://docs.google.com/document/d/11CFgzmr0tXpaHrtkrzlPY3chhp9gOQEp5cqCsiNEZHA/) | Not fully evaluated yet. |
| **2.**  | Architecture               |<ul><li>[ ] </li></ul>| [Docs](https://docs.google.com/document/d/1keSkyREimcUnwuooJ4sfkriTMTEWCu_4k-hkrgTgrqc/) | Not fully evaluated yet. |
| **3.**  | Main Technical Deliverable |<ul><li>[x] </li></ul>| [Repository `xcm-domain-service`](https://github.com/azero-id/xcm-domain-service)        | |
| **4.**  | Technical Deliverable      |<ul><li>[ ] </li></ul>| [Repository `contracts-parachain`](https://github.com/azero-id/contracts-parachain)      | Not fully evaluated yet. |
| **5.**  | Technical Deliverable      |<ul><li>[x] </li></ul>| [PR in `polkadot-sdk`](https://github.com/paritytech/polkadot-sdk/pull/1883)             | |
| **6.**  | References                 |<ul><li>[ ] </li></ul>| [Docs](https://docs.google.com/document/d/19HiSH8rJKRFbuHm5Ju_lfhVl0XYTLCfgT4FuWIr5-Vw/) | Not fully evaluated yet. |

## Evaluation V1

### Testing

All tests passed.

```
user@localhost:~/Documents/xcm/xcm-domain-service$ cargo test
	Finished test [unoptimized + debuginfo] target(s) in 0.37s
 	Running unittests src/lib.rs (target/debug/deps/xcm_domain_service-36fac793acd60136)

running 21 tests
test tests::remote_account_ids_work ... ok
test relay_chain::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test parachain::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::dmp ... ok
test tests::query_holding ... ok
test tests::remote_locking_and_unlocking ... ok
test tests::ump ... ok
test tests::teleport_nft ... ok
test tests::reserve_transfer ... ok
test tests::reserve_asset_transfer_nft ... ok
test tests::reserve_asset_class_create_and_reserve_transfer ... ok
test tests::withdraw_and_deposit ... ok
test tests::xcmp ... ok
test tests::withdraw_and_deposit_nft ... ok
test test_xcm_domains::setup::setup_works ... ok
test test_xcm_domains::native_dns::registration_works ... ok
test test_xcm_domains::native_dns::set_address_works ... ok
test test_xcm_domains::native_dns::transfer_name_works ... ok
test test_xcm_domains::xcm_dns::registration_works ... ok
test test_xcm_domains::xcm_dns::transfer_works ... ok
test test_xcm_domains::xcm_dns::set_address_works ... ok

test result: ok. 21 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.54s

   Doc-tests xcm-domain-service

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

```

### Documentation

Could you give some instructions on how to use these contracts?

I could verify the contract `Xc-domain-service` sending an XCM message to the `Parachain 1`. However, I couldn't figure out how to use the address-to-domain mapping function propertly.
