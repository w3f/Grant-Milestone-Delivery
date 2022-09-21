# Evaluation
- **Status:** Accepted
- **Application Document:** [link](https://github.com/herou/Grants-Program/blob/af324cf01e0cfe707c262d86a0edaf81b53ca340/applications/escrow_pallet.md)
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable              | Accepted | Link                                                                                 							         | Notes |
|--------|--------------------------|----------|------------------------------------------------------------------------------------------------------|----------------------|
| 1.     | License                  | <ul><li>[x] </li></ul>| https://github.com/herou/EscrowPallet/blob/eljo-prifti/escrow/LICENSE  |Apache 2.0     |
| 2.     | Documentation & Tutorial | <ul><li>[x] </li></ul>| https://docs.google.com/document/d/1XpxfrG6Qd9AHJ7OUVv3L3D6ZcEyizGh68w7yZxN3p_A/edit?usp=sharing     |See my notes below on docs.        |
| 3.     | Tests                    | <ul><li>[x] </li></ul>| https://docs.google.com/document/d/1XpxfrG6Qd9AHJ7OUVv3L3D6ZcEyizGh68w7yZxN3p_A/edit?usp=sharing     |Unit tests pass successfully. Core functionality mostly covered, see my notes below.      |
| 4.     | Docker                   | <ul><li>[x] </li></ul>| https://github.com/herou/EscrowPallet/blob/eljo-prifti/escrow/docker-compose.yml    |  -     |
| 5.     | Article                  | <ul><li>[x] </li></ul>| https://medium.com/p/6f941c28b6fd/edit     							         |Looks good.       |
| 6.     | Benchmarking             | <ul><li>[x] </li></ul>| https://github.com/herou/EscrowPallet/blob/eljo-prifti/escrow/pallets/escrow/src/benchmarking.rs     |Benchmarking tests pass successfully.      |
| 7.     | escrow pallet            | <ul><li>[x] </li></ul>| https://github.com/herou/EscrowPallet/tree/eljo-prifti/escrow    |Looks good.       |

# General Notes

## Documentation Feedback

Thanks for the quick communication! Errors were fixed upon request. The docs were enough for me to test the pallet but I would recommend improving these for the next milestone. I would also recommend that you remove the default readme template and write your own. This way you can explain the architecture of your project, get rid of unneeded tests, setup instructions, etc. Check out [this pallet's documentation](https://github.com/chainify/substrate-nolik-dev/blob/4f1f36e01f5fb22d745e2a3566e84c43f58ba3c2/README.md#run-in-docker) for a great example on how to customize it.

## Testing Feedback

Unit test was provided for `SameAddressError`, but none for `WrongExpiringDate` or `NoValueStored`. Please consider adding tests for these errors as well.
