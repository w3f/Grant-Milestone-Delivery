# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/NuLink.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by alxs

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul> | [LICENSE](https://github.com/NuLink-network/nulink-chain/blob/f33c097135acee6d702139e52d84c4a597246711/LICENSE) | Apache 2.0
| 0b. | Documentation |<ul><li>[x] </li></ul> | [README](https://github.com/NuLink-network/nulink-chain/blob/f33c097135acee6d702139e52d84c4a597246711/README.md) | Readme improved in response to feedback, though documentation is still rather minimal and covers mostly manually submitting extrinsics which would never be submitted manually in the real world.
| 0c. | Testing Guide |<ul><li>[x] </li></ul> | [tests](https://github.com/NuLink-network/nulink-chain/blob/f33c097135acee6d702139e52d84c4a597246711/pallets/policy/src/tests.rs) | Poor test design but sufficient code coverage
| 1.  | register_watcher |<ul><li>[x] </li></ul>  | [link](https://github.com/NuLink-network/nulink-chain/blob/b17378d70ab870094b0e7beb72cc46f8a54bc471/pallets/nuproxy/src/lib.rs#L163) | Simply allows registering only one watcher and only one time.
| 2.  | UpdateStakers |<ul><li>[x] </li></ul>  | [link](https://github.com/NuLink-network/nulink-chain/blob/b17378d70ab870094b0e7beb72cc46f8a54bc471/pallets/nuproxy/src/lib.rs#L179) | 
| 3.  | GetActiveStakers |<ul><li>[x] </li></ul>  | [link](https://github.com/NuLink-network/nulink-chain/blob/b17378d70ab870094b0e7beb72cc46f8a54bc471/pallets/nuproxy/src/lib.rs#L298) | Did initially not return by random sampling as initially described (and strictly speaking still doesn't, though this is tangential to the actual delivery)

## General Notes

Team was delayed by several months and submitted an amendment with an updated timeline upon delivery.

All in all a rather simplified MVP.
Some of the deliverables weren't well-defined (e.g. "A Nuproxy pallet which can retrieve the information of stakers and bonding workers from NuCypher contracts in Ethereum to Polkadot parachain", which a pallet of course cannot do) and some others not really significant.
A deliverable was removed since it hadn't been implemented (allowing for a larger network of watcher nodes instead of the current single node approach) and deliverable 3 isn't implemented as described, which are both reasonable simplifications.

The delivery was initially in questionable condition with a considerable amount of tests commented out and not compiling, but with some inline documentation.
The team addressed everything.

They have been collaborating with the NuCypher team.
