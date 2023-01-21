# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/dot_marketplace-Phase3.md
- **Milestone:** 1
- **Kusama Identity:** [HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu](https://kusama.subscan.io/account/HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu)
- **Previously successfully merged evaluation:** All by 0xCaso

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/WowLabz/dot-marketplace-v2/blob/bbb03123cc77cd0de5e613c4812cc16b67a06181/LICENSE) |  |
| 0b.  | Documentation | <ul><li>[x] </li></ul> | Pallet Tasking Backend - [github.io-tasking](https://github.com/WowLabz/dot-marketplace-v2/blob/bbb03123cc77cd0de5e613c4812cc16b67a06181/pallets/pallet-tasking/src/lib.rs), [Readme](https://github.com/WowLabz/dot-marketplace-v2/blob/bbb03123cc77cd0de5e613c4812cc16b67a06181/README.md) |  |
| 0c.  | Testing Guide | <ul><li>[x] </li></ul> | [Testing Guide](https://github.com/WowLabz/dot_marketplace_docker/tree/b140a221fe644d946975176f327cd18375d44a3b) |  |
| 0d. | Docker | <ul><li>[x] </li></ul> | [docker-compose](https://github.com/WowLabz/dot_marketplace_docker/blob/b140a221fe644d946975176f327cd18375d44a3b/docker-compose.yml) |  |
| 1 | Project Structure | <ul><li>[x] </li></ul> | [pallet-tasking](https://github.com/WowLabz/dot-marketplace-v2/blob/bbb03123cc77cd0de5e613c4812cc16b67a06181/pallets/pallet-tasking/src/lib.rs#L513) |  |
| 2 | Multiple Bidders | <ul><li>[x] </li></ul> | [pallet-tasking](https://github.com/WowLabz/dot-marketplace-v2/blob/bbb03123cc77cd0de5e613c4812cc16b67a06181/pallets/pallet-tasking/src/lib.rs#LL633C3-L633C3) |  |
| 3 | Escrow | <ul><li>[x] </li></ul> | [pallet-tasking](https://github.com/WowLabz/dot-marketplace-v2/blob/bbb03123cc77cd0de5e613c4812cc16b67a06181/pallets/pallet-tasking/src/lib.rs#L1214) |  |
<br/>

## General Notes v1 - Jan 13, 2023

**NOTE**: Milestone 1,2 and 3 have been delivered in the same [pull request](https://github.com/w3f/Grant-Milestone-Delivery/pull/674).

The delivery is good:
- The setup, both with and without docker, is straightforward and works as expected;
- A videoguide explains how to test the chain with the PolkadotJS app, and it's easy to follow;
- The deliveries **1**, **2** and **3** are implemented as expected (see the `pallet-tasking` source code);

I made the following comments in the pull request conversation:
- Is it ok that a user can bid the same milestone multiple times, also if his other bid is still open?
- Have you considered/planned to make `TaskTypeTags` customizable/editable?
- The milestone's `deadline` is the number of day the milestone can last, right? So in this case M2's deadline can be < than M1's;
- Do you plan to control the `rating` value? For now it should be a number from 0 to 255, as now it's `u8`; **EDIT**: I've seen in milestone 2 this is checked (1<=rating<=5).
- In the videoguide, **Alice** manages to close the project also if the milestone `1b` was still open. As I couldn't, and I only could close it if all the milestones are completed, I assume that you've seen the issue and solved it, but it was still in the video, right? In this case it's not a problem, I just want to double check.

And these are the answers:
1. We have fixed this issue for all the milestones. A bidder can now only bid once per milestone.
2. Yes, as per the clients we can modify this to include tags of their own. However, we can can also modify this to be dynamic as per request by introducing a Tag Management Model.
3. Yes, the milestones are independent of each others timelines (based on their complexity).
4. Yes, its fixed to a number between 1-5 both in the frontend and backend.
5. Yes, this was possible because all the milestone was still `Open`. In this case, the funds to all the bidders will be transferred back [code](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase3_Milestone1/pallets/pallet-tasking/src/lib.rs#L1083-L1116). However, when each milestone in the project is not in either status `Open` or `Completed` the customer can't close the project. This was designed to be this way to give the customer an option to close a project that he might have added and doesn't want to proceed with it. 
