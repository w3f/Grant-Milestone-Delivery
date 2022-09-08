# Evaluation

- **Status:** In Progress
- **Application Document:** [universaldot.me](https://github.com/w3f/Grants-Program/blob/master/applications/universaldot.me.md) 
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Link | Evaluation Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License|https://github.com/UniversalDot/universal-dot-node/blob/universal-master/LICENSE </br> https://github.com/UniversalDot/front-end/blob/develop/LICENSE.md | Missing filled details on second link| 
| 0b.  | Documentation | Documentation regarding the app is provided at: https://docs.universaldot.me/| Confusing UI?| 
| 0c. | Testing Guide | https://docs.universaldot.me/docs/sdk/Testing | Guide Ok, One failing test| 
| 0d. | Docker |https://github.com/UniversalDot/compose-service/blob/master/docker-compose.yml| Ok?| 
| 0e. | Article |https://medium.com/universaldot/vision-everything-starts-with-a-why-d4ad616a4310| ...| 
| 1. | Improve Profile,Task, Dao pallets |Release: https://github.com/UniversalDot/universal-dot-node/releases/tag/v0.7.0 <br/> Pallet Profile: https://github.com/UniversalDot/universal-dot-node/blob/universal-master/pallets/profile/src/lib.rs <br/> Pallet Task: https://github.com/UniversalDot/universal-dot-node/blob/universal-master/pallets/task/src/lib.rs <br/> Pallet Dao: https://github.com/UniversalDot/universal-dot-node/blob/universal-master/pallets/dao/src/lib.rs | Ok|
| 2. | Tensorflow Integration |https://github.com/UniversalDot/front-end/pull/11/files <br/> Model: https://github.com/UniversalDot/tensorflow| Uncertain on how to test that the integration is working properly| 
| 3. | DAO Redesign |Figma:  https://www.figma.com/file/HHVZfIdNWrKOKNka6gdm5d/Dao-Design?node-id=0%3A1 <br/>  New front-end: https://test.universaldot.me| Ok|
| 4. | IPFS Design Document |https://drive.google.com/file/d/1uYoLvdV9r5kaIxKSVCKBcEF5xWb_4ktn/view?usp=sharing| Ok|
| 5. | CI/CD |Github Actions: <br/> Node: https://github.com/UniversalDot/universal-dot-node/actions <br/> Front-end: https://github.com/UniversalDot/front-end/actions <br/> Actions Config: <br/> Node: https://github.com/UniversalDot/universal-dot-node/blob/universal-develop/.github/workflows/check.yml <br/> Front-end: https://github.com/UniversalDot/front-end/blob/develop/.github/workflows/deploy.yml | Ok|
| 6. | Udot Wiki |https://docs.universaldot.me| Already reviewed in 0b|

## General Notes

### 0a. License

On the [second link](https://github.com/UniversalDot/front-end/blob/develop/LICENSE.md), `Copyright [yyyy] [name of copyright owner]` should be filled with the correct data, following the instructions in the appendix.

### 0b. Documentation

On entering the provided address, we are presented with three sections in the middle of the screen. It seems like the pictures or text should be clickable to access the specific sections (learn, join, build), but they are not. Instead, to access the sections you have to see the three sections at the top left and click there, which is a bit confusing. It may be the intended design, but seems confusing from a UX perspective (I thought the links were broken before finding the sections at the top left).

Apart from that the documentation seems to have some missing sections:

profile/how to update a profile
profile/how to delete a profile
task/how to update a task
task/how to delete a task

And other sections seem to contain docusaurus boilerplate documentation:

Development
Tools
Tutorials

In the API section, `typyscript` should probably be `typescript` (typo)

### 0c. Testing guide

I was able to run the tests by following the guide successfully. Although I got a test failure when running the task pallet benchmark. Here is the output:

```bash
running 39 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::assign_task_to_current_owner ... ok
test tests::balance_check_after_task_deletion ... ok
test tests::check_balance_after_update_task ... ok
test tests::block_time_is_added_when_task_is_updated ... ok
test tests::accepted_task_is_added_to_completed_task_for_volunteer ... ok
test tests::check_balance_after_complete_task ... ok
test tests::completing_tasks_assigns_new_current_owner ... ok
test tests::create_new_task ... ok
test tests::feedback_is_given_when_task_is_rejected ... ok
test tests::decrease_task_count_when_accepting_task ... ok
test benchmarking::benchmark_tests::test_benchmarks ... FAILED
test tests::fund_transfer_on_create_task ... ok
test tests::only_add_reputation_when_task_has_been_accepted ... ok
test tests::increase_profile_reputation_when_task_completed ... ok
test tests::increase_task_count_when_creating_task ... ok
test tests::increase_task_count_when_creating_two_tasks ... ok
test tests::start_tasks_assigns_task_to_volunteer ... ok
test tests::only_creator_accepts_task ... ok
test tests::task_can_be_rejected_by_creator ... ok
test tests::only_started_task_can_be_completed ... ok
test tests::start_tasks_assigns_new_current_owner ... ok
test tests::task_can_be_removed_only_when_status_is_created ... ok
test tests::task_can_be_removed_by_owner ... ok
test tests::task_can_be_updated_only_by_one_who_created_it ... ok
test tests::task_can_be_updated_only_after_it_has_been_created ... ok
test tests::task_can_only_be_finished_by_the_user_who_started_it ... ok
test tests::task_can_only_be_started_once ... ok
test tests::test_create_insufficient_funds_to_reserve ... ok
test tests::test_create_two_tasks_insufficient_balance ... ok
test tests::task_can_be_updated_after_it_is_created ... ok
test tests::test_multiple_tasks_and_reserve_amounts ... ok
test tests::test_update_insufficient_funds_to_reserve ... ok
test tests::the_volunteer_is_different_from_task_creator ... ok
test tests::verify_inputs_outputs_to_tasks ... ok
test tests::volunteer_gets_paid_on_task_completion ... ok
test tests::when_task_is_accepted_ownership_is_cleared ... ok
test tests::delete_task_after_deadline ... ok
test tests::cant_own_more_tasks_than_max_tasks ... ok

failures:

---- benchmarking::benchmark_tests::test_benchmarks stdout ----
failing benchmark tests:
create_task: "InvalidOrganization"
thread 'benchmarking::benchmark_tests::test_benchmarks' panicked at 'index out of bounds: the len is 0 but the index is 0', pallets/task/src/benchmarking.rs:103:25
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
update_task: Any { .. }
thread 'benchmarking::benchmark_tests::test_benchmarks' panicked at 'index out of bounds: the len is 0 but the index is 0', pallets/task/src/benchmarking.rs:135:25
start_task: Any { .. }
thread 'benchmarking::benchmark_tests::test_benchmarks' panicked at 'index out of bounds: the len is 0 but the index is 0', pallets/task/src/benchmarking.rs:163:25
remove_task: Any { .. }
thread 'benchmarking::benchmark_tests::test_benchmarks' panicked at 'index out of bounds: the len is 0 but the index is 0', pallets/task/src/benchmarking.rs:191:25
complete_task: Any { .. }
thread 'benchmarking::benchmark_tests::test_benchmarks' panicked at 'index out of bounds: the len is 0 but the index is 0', pallets/task/src/benchmarking.rs:220:25
accept_task: Any { .. }
thread 'benchmarking::benchmark_tests::test_benchmarks' panicked at 'index out of bounds: the len is 0 but the index is 0', pallets/task/src/benchmarking.rs:252:25
reject_task: Any { .. }
thread 'benchmarking::benchmark_tests::test_benchmarks' panicked at 'assertion failed: !anything_failed', pallets/task/src/benchmarking.rs:265:1


failures:
    benchmarking::benchmark_tests::test_benchmarks

test result: FAILED. 38 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.05s

error: test failed, to rerun pass '--lib'
```

### 0d. Docker

The docker files and docker-compose look ok, but the execution is failing at the node build for me on trying to execute the docker with `docker-compose up`. Could be a problem with my macbook, as docker has given me problems before because of M1, and it would be interesting to try on another computer (which I don't have at the moment).

### 2. Tensorflow Integration

I was able to successfully test the model on colab. However, as you are using an existing Google model, what would be interesting would be to test the integration itself and not the model. Is there any way in which a demonstration could be done of this working, or some unit tests could be added testing the integration with the model from the app?

### 4. IPFS design document

The document describes a fairly standard usage of IPFS in many blockchain projects (storing data in IPFS, then storing the cid in the blockchain). Reading Milestone 2 on the original proposal it seems like the idea initially was to integrate ipfs into a substrate pallet. This idea seems to have been abandoned, as a pallet would not make much sense here for what is needed.
