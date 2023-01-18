# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/fair_squares.md
- **Milestone:** 3

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/Fair-Squares/fair-squares/blob/main/LICENSE) | Apache 2.0 |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [guide](https://docs.google.com/document/d/1FxOSXGR49MX-UsGgBW24Rz0W1cfvwhfhIIrnPKiNhHc/edit?usp=sharing), [rustdocs](https://fair-squares.github.io/fair-squares/fs_node_runtime/index.html) |  Good inline documentation with hosted rustdocs, guide is not a tutorial for users as intended but instead an excellent step-by-step guide to test the functionality of this milestone.
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [instructions](https://github.com/Fair-Squares/fair-squares#run-all-tests) | Core functions covered by a battery of tests covering far more than the happy path
| 0d. | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/Fair-Squares/fair-squares/blob/main/Dockerfile) 
| 0e. | Article | <ul><li>[x] </li></ul> | [draft](https://docs.google.com/document/d/1y17QmO7sGR5FJEjtH9NJx5RowqBOtzgoKzcGyfPSVn4/edit?usp=sharing) | submitted to grants PR for review
| 1. | **pallet-bidding** | <ul><li>[x] </li></ul> | [pallet](https://github.com/Fair-Squares/fair-squares/tree/main/pallets/bidding) | All functionality besides one minor feature delivered as described
| 3. | Module: **timer** | <ul><li>[x] </li></ul> | [implementation](https://github.com/Fair-Squares/fair-squares/blob/9fd6f162e4f4e1e849817e7bdaefd1ee9bec89c7/runtime/src/lib.rs#L1051) | separate module not required
| 4. | Module: **fractioning** | <ul><li>[x] </li></ul> | implemented [here](https://github.com/Fair-Squares/fair-squares/blob/main/pallets/share_distributor/src/functions.rs#L66-L115) and [here](https://github.com/Fair-Squares/fair-squares/blob/main/pallets/share_distributor/src/functions.rs#L181-L214) | delivered as a separte `share_distributor` pallet
| 5. | Substrate chain _M3_ | <ul><li>[x] </li></ul> | [node](https://github.com/Fair-Squares/fair-squares/tree/v0.0.7.2-m3) |

## General Notes

The deliverables deviated slightly from their description the application, but the functionality is the same.
These changes do not, in my opinion, necessitate an amendment.
See the team's delivery [notes](https://github.com/w3f/Grant-Milestone-Delivery/blob/2ff28b41979de52adb0f854a0d6356fe10fe136b/deliveries/fair_squares-milestone-3.md) for a brief summary of the changes and the reasonale behind.

The team went above and beyond to meet high standards in their delivery, such as w.r.t. test coverage and documentation, as pointed out above.

Some errors returned by `cargo clippy` addressed by the team.