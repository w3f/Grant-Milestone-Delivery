# General Notes

Benchmarking tests pass:

```rust
running 21 tests
test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::ip::test_correct_ip_registration ... ok
test benchmarking::benchmarks::benchmark_tests::test_benchmarks ... ok
test tests::ip::test_fail_ip_registration_already_exists ... ok
test tests::agreements::test_consumer_accept_agreement ... ok
test tests::agreements::test_consumer_request_agreement ... ok
test tests::agreements::test_consumer_reject_proposal ... ok
test tests::agreements::test_ip_accept_agreement ... ok
test tests::ip::test_register_unregister_register_ip ... ok
test tests::ip::test_unregister_ip ... ok
test tests::ip::test_update_storage_cost_per_unit ... ok
test tests::ip::test_fail_ip_unregister_agreement_in_progress ... ok
test tests::ip::test_register_update_deposit_amount_unregister_ip ... ok
test tests::ip::test_update_ip_storage ... ok
test tests::ip::test_update_ip_status ... ok
test tests::payments::test_consumer_prepay_installment ... ok
test tests::payments::test_consumer_prepay_multiple ... ok
test tests::payments::test_ip_withdraw ... ok
test tests::payments::test_ip_terminate_nonpay ... ok
test tests::rating::test_consumer_submit_feedback ... ok
test tests::payments::test_ip_withdraw_completely ... ok
```

