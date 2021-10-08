# Evaluation

* **Status:** Accepted
* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/InvArch.md
* **Milestone:** 1
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All by mmagician

| Number | Deliverable   | Accepted               | Link                                                                                                                                                                                                                                                                                                                                  | Evaluation notes |
|--------|---------------|------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|
| 0a.    | License       | <ul><li>[x] </li></ul> | [GPLv3](https://github.com/InvArch/InvArch-Pallet-Library/blob/main/LICENSE)                                                                                                                                                                                                                                                          |                  |
| 0b.    | Documentation | <ul><li>[x] </li></ul> | https://github.com/InvArch/InvArch-Pallet-Library#readme                                                                                                                                                                                                                                                                              |                  |
| 0c.    | Testing Guide | <ul><li>[x] </li></ul> | [Testing Guide](https://github.com/InvArch/InvArch-node/edit/main/README.md), IPS: https://github.com/InvArch/InvArch-Pallet-Library/blob/main/ips/src/tests.rs, IPT: https://github.com/InvArch/InvArch-Pallet-Library/blob/main/ipt/src/tests.rs, IPO: https://github.com/InvArch/InvArch-Pallet-Library/blob/main/ipo/src/tests.rs |                  |
| 0d.    | Docker        | <ul><li>[x] </li></ul> | https://github.com/InvArch/InvArch-node/blob/main/dockerfile                                                                                                                                                                                                                                                                          |                  |
| 1.     | Node Repo     | <ul><li>[x] </li></ul> | https://github.com/InvArch/InvArch-node                                                                                                                                                                                                                                                                                               |                  |
| 2a.    | Pallet_ips    | <ul><li>[x] </li></ul> | https://github.com/InvArch/InvArch-Pallet-Library/tree/main/ips                                                                                                                                                                                                                                                                       |                  |
| 2b.    | Pallet_ipt    | <ul><li>[x] </li></ul> | https://github.com/InvArch/InvArch-Pallet-Library/tree/main/ipt                                                                                                                                                                                                                                                                       |                  |
| 2c.    | Pallet_ipo    | <ul><li>[x] </li></ul> | https://github.com/InvArch/InvArch-Pallet-Library/tree/main/ipo                                                                                                                                                                                                                                                                       |                  |
| 3.     | Article       | <ul><li>[x] </li></ul> | https://invarch.medium.com/invarch-tokenizing-ideas-using-substrate-cabeb08f00ea                                                                                                                                                                                                                                                      |                  |

### Misc

Naming: `ipts, ips & ipo` should be prefixed with `pallet_` to follow the naming convention set by other pallets: https://github.com/InvArch/InvArch-node/blob/main/runtime/src/lib.rs#L44.

[The mock data used in tests](https://github.com/InvArch/InvArch-Pallet-Library/blob/main/ips/src/mock.rs#L120) is raw and has no explanation where it came from/how it was generated. Ideally, you either generate the data on the fly (presumably read a metadata JSON file and convert to a vector of `u8`'s) or at least provide an equivalent representation in comments and instructions for converstion. 

Also all tests assume that the submitted data is in a correct format as described in your [README](https://github.com/InvArch/InvArch-Pallet-Library/blob/main/ips/README.md#L31). There are no tests checking for when it's not the case. Also I haven't seen any logic for validation of your IP Set Standard, i.e. what is there to prevent me from using hyphens in the `name` field of that JSON?

Code duplication: perhaps the [bind](https://github.com/InvArch/InvArch-Pallet-Library/blob/main/ipo/src/lib.rs#L293) and [unbind](https://github.com/InvArch/InvArch-Pallet-Library/blob/main/ipo/src/lib.rs#L309) functionality could be abstracted? The only difference between the two is the value of the boolean.

The [`set_balance`](https://github.com/InvArch/InvArch-Pallet-Library/blob/main/ipo/src/lib.rs#L275) function looks like a backdoor to whoever is currently the root account. Is this intentional? Are you planning to remove it at some point?

### General notes

The above mentioned issues are minor, so the milestone is accepted as-is, but please address them for the second delivery.

In general the code is clean and unit tests cover the basic functionality.
