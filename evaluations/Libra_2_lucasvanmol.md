# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Libra.md 
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** https://github.com/w3f/Grant-Milestone-Delivery/blob/3ea205a60e60fc80483759439703025dcd6d0486/evaluations/Libra_1_Noc2.md

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>|https://github.com/atscaletech/libra/blob/main/LICENSE| Apache License 2.0 |
| 0b. | Documentation |<ul><li>[ ] </li></ul>| https://github.com/atscaletech/libra/tree/main/pallets/identities#identities https://github.com/atscaletech/libra/tree/main/pallets/resolvers#resolvers-network  https://github.com/atscaletech/libra/tree/main/pallets/dispute-resolution#dispute-resolution | Good documentation overall, however in `dispute-resolution`, the code example under `Fight a dispute` is wrong, and there isn't an example for the `escalate_dispute` function. It would also be useful to include `/// Doc comments` on the items of `Event` and `Error` enums on each of the pallets, as they can give additional information when using block explorers like polkadot.js.org |
| 0c. | Testing |<ul><li>[ ] </li></ul>|https://github.com/atscaletech/libra/blob/main/pallets/identities/src/tests.rs https://github.com/atscaletech/libra/blob/main/pallets/resolvers/src/tests.rs https://github.com/atscaletech/libra/blob/main/pallets/dispute-resolution/src/tests.rs | Overall there is good coverage on test cases - however some functions are not tested (see general notes below). |
| 0d. | Live testnet |<ul><li>[x] </li></ul>| wss://rpc.libra.atscale.xyz | I noticed on the testnet (and the default behaviour when running the node), some of the constants are set very high e.g. `pub const MinimumSelfStake: Balance = 10_000_000_000_000_000;` - is this intended?  | 
| 1. | Substrate module: Identities |<ul><li>[ ] </li></ul>| https://github.com/atscaletech/libra/blob/main/pallets/identities | See notes about testing | 
| 2.  | Substrate module: Resolvers Network |<ul><li>[ ] </li></ul>| https://github.com/atscaletech/libra/blob/main/pallets/resolvers | See notes about credibility |
| 3.  | Substrate module: Dispute Resolution |<ul><li>[ ] </li></ul>| https://github.com/atscaletech/libra/blob/main/pallets/dispute-resolution | See notes about credibility | 
| 4.  | Substrate based chain |<ul><li>[x] </li></ul>| https://github.com/atscaletech/libra/blob/main/runtime/src/lib.rs | Node works well. |

## General Notes

Some functions are missing in tests, notably `update_identity_data` and `remove_identity` in the identities pallet, and `increase/decrease_credibility` in the resolve pallet.

There are also some features that were mentioned in the application, but I can't seem to find them in this delivery:

* Regarding the `resolve` pallet - in your application you mentioned that resolvers would be slashed and reduced credibility when a dispute is given a final decision that's different from the initial resolver's assessment. Is this being tested somewhere? What about being banned from the network when credibility gets too low? 

* The application also mentioned that a user's credibility would be included in the identity pallet, but I can't see that being implemented.

* In addition, in your application it was stated that resolvers would be chosen at random, however the tests seems to suggest that any resolver can propose judgements.

Finally, could you also please also address some of the issues raised by running `cargo clippy`? Not everything needs to be fixed, but it's worthwile to take a look at.
