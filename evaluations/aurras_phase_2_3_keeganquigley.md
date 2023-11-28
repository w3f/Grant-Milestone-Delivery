# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/project_aurras_mvp_phase_2.md
- **Milestone:** 3
- **Previously successfully merged evaluation:** dsm-w3f

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| 0a. | License | <ul><li>[x] </li></ul> | https://github.com/HugoByte/aurras/blob/master/LICENSE | |
| 0b. | Documentation | <ul><li>[x] </li></ul> | https://github.com/HugoByte/aurras/tree/next/workflow/workflow_apis | Ok. |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | https://github.com/HugoByte/aurras/blob/next/docs/integration-testing.md | Ok. |
| 0d. | Article | <ul><li>[x] </li></ul> | https://medium.com/hugobyte/advancing-through-milestones-the-journey-of-aurras-from-mvp-1-to-mvp-2-and-beyond-a8550f8391a5 | Ok.|
| 1a. | Web API: Workflow Registration | <ul><li>[x] </li></ul> | https://github.com/HugoByte/aurras/tree/next/actions/workflow-registration | |
| 1b. | Web API: User Registration | <ul><li>[x] </li></ul> | https://github.com/HugoByte/aurras/tree/next/actions/user-registration | |
| 1c. | Web API: User Workflow Management | <ul><li>[x] </li></ul> | https://github.com/HugoByte/aurras/tree/next/actions/workflow-management | |
| 2a. | Workflow Yaml Polkadot Payouts | <ul><li>[x] </li></ul> | https://github.com/HugoByte/aurras/blob/next/workflow/examples/PayoutNotification.yaml | |
| 2b. | Reward OpenWhisk actions | <ul><li>[x] </li></ul> | https://github.com/HugoByte/aurras/blob/next/workflow/polkadot_macro/src/staking_payout.rs#L52  | |
| 2c. | Claim workflow module | <ul><li>[x] </li></ul> | https://github.com/HugoByte/aurras/blob/next/workflow/polkadot_macro/src/staking_payout.rs | |
| 2d. | Polkadot API Derive macro for workflow task | <ul><li>[x] </li></ul> | https://github.com/HugoByte/aurras/tree/next/workflow/polkadot_macro | |
| 3. | Video Tutorial | <ul><li>[x] </li></ul> | https://youtu.be/OodSxh65twA <br/> https://youtu.be/qqC9t0c2M1A | Points to wrong tutorial. Could be improved to better correspond with docs.|

# General Notes

Delivered as expected. Payout push notification example works. `./deploy.sh ` script works once env variables are set correctly. I was able to generate the event registration ID. Code looks good, but the repos and branches seem a bit messy, could use some organization. Docs are well made. However, there are a lot of long videos and it was confusing to know which one to use where.


<details>
  <summary>cargo clippy warnings</summary>

```rust
error: redundant redefinition of a binding
  --> workflow/openwhisk_macro/src/lib.rs:42:9
   |
42 |     let insecure = match property_map["Insecure"].as_str() {
   |         ^^^^^^^^
...
50 |     let insecure = insecure;
   |     ^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = help: remove the redefinition of `insecure`
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_locals
   = note: `#[deny(clippy::redundant_locals)]` on by default

error: could not compile `openwhisk_macro` (lib) due to previous error
warning: build failed, waiting for other jobs to finish...
warning: this `else` branch is empty
  --> workflow/polkadot_macro/src/lib.rs:90:7
   |
90 |       } else {
   |  _______^
91 | |     }
   | |_____^ help: you can remove it
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_else
   = note: `#[warn(clippy::needless_else)]` on by default

warning: `substrate_macro` (lib) generated 1 warning (run `cargo clippy --fix --lib -p substrate_macro` to apply 1 suggestion)
```
</details>

<details>
  <summary>Unit tests passing</summary>

```rust
warning: variable does not need to be mutable
   --> workflow/test_util/src/wasi_http.rs:135:13
    |
135 |         let mut body = &mut st.responses.get_mut(&handle).unwrap().body;
    |             ----^^^^
    |             |
    |             help: remove this `mut`
    |
    = note: `#[warn(unused_mut)]` on by default

warning: `test_util` (bin "test_util" test) generated 1 warning (run `cargo fix --bin "test_util" --tests` to apply 1 suggestion)
warning: method `init` is never used
  --> actions/workflow-registration/src/lib.rs:47:12
   |
38 | impl Action {
   | ----------- method in this implementation
...
47 |     pub fn init(&mut self, config: &Config) {
   |            ^^^^
   |
   = note: `#[warn(dead_code)]` on by default

warning: `action-workflow-registartion` (lib test) generated 1 warning
    Finished test [unoptimized + debuginfo] target(s) in 39.76s
     Running unittests src/lib.rs (target/debug/deps/action_balance_filter-385f1da13e0155f5)

running 4 tests
test tests::invoke_trigger_fail - should panic ... ok
test tests::invoke_trigger_pass - should panic ... ok
test tests::filter_topics_pass ... ok
test tests::filter_address_pass ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 17.86s

     Running unittests src/lib.rs (target/debug/deps/action_balance_notification_registration-d1d24cda0e534c55)

running 5 tests
test tests::get_event_sources_fail_getaddress - should panic ... ok
test tests::get_event_sources_invalid_method - should panic ... ok
test tests::get_event_sources_fail ... ok
test tests::add_address_pass ... ok
test tests::get_event_sources_pass - should panic ... ok

test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 13.43s

     Running unittests src/lib.rs (target/debug/deps/action_event_receiver-10533ecd93f10979)

running 2 tests
test tests::parse_event_pass ... ok
test tests::parse_event_fail - should panic ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/lib.rs (target/debug/deps/action_event_registration-254df74353f7135d)

running 1 test
test tests::register_source_pass ... ok
```
</details>

Docker container runs successfully:
```sh
docker ps
CONTAINER ID   IMAGE                                  COMMAND                  CREATED          STATUS          PORTS     NAMES
ac5ab99f490d   hugobyte/openwhisk-runtime-rust:v0.3   "/bin/proxy -compile…"   45 seconds ago   Up 44 seconds             practical_cartwright
```
