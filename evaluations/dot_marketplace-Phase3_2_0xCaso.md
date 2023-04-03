# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/dot_marketplace-Phase3.md
- **Milestone:** 2
- **Kusama Identity:** [HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu](https://kusama.subscan.io/account/HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu)
- **Previously successfully merged evaluation:** All by 0xCaso

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/WowLabz/dot-marketplace-v2/blob/bbeb45c2dfeeb91d2a4e39d191658361375992ef/LICENSE)|  |
| 0b.  | Documentation | <ul><li>[x] </li></ul> | Pallet Tasking Backend - [github.io-tasking](https://github.com/WowLabz/dot-marketplace-v2/blob/bbeb45c2dfeeb91d2a4e39d191658361375992ef/pallets/pallet-tasking/src/lib.rs), [Readme](https://github.com/WowLabz/dot-marketplace-v2/blob/bbeb45c2dfeeb91d2a4e39d191658361375992ef/README.md) |  |
| 0c.  | Testing Guide | <ul><li>[x] </li></ul> | [Testing Guide](https://github.com/WowLabz/dot_marketplace_docker/tree/1357c620a6a10831c22d8cf23279f48c802e681d)|  |
| 0d. | Docker | <ul><li>[x] </li></ul> | [docker-compose](https://github.com/WowLabz/dot_marketplace_docker/blob/1357c620a6a10831c22d8cf23279f48c802e681d/docker-compose.yml)|  |
| 1 | Decentralized Court Module | <ul><li>[x] </li></ul> | [pallet-tasking](https://github.com/WowLabz/dot-marketplace-v2/blob/bbeb45c2dfeeb91d2a4e39d191658361375992ef/pallets/pallet-tasking/src/lib.rs)|  |
| 1a | Disapprove Milestone | <ul><li>[x] </li></ul> | [pallet-tasking](https://github.com/WowLabz/dot-marketplace-v2/blob/bbeb45c2dfeeb91d2a4e39d191658361375992ef/pallets/pallet-tasking/src/lib.rs#L836) |  |
| 1b | Disapprove Rating | <ul><li>[x] </li></ul> | [pallet-tasking](https://github.com/WowLabz/dot-marketplace-v2/blob/bbeb45c2dfeeb91d2a4e39d191658361375992ef/pallets/pallet-tasking/src/lib.rs#L740) |  |
| 1c | General Dispute | <ul><li>[x] </li></ul> | [pallet-tasking](https://github.com/WowLabz/dot-marketplace-v2/blob/bbeb45c2dfeeb91d2a4e39d191658361375992ef/pallets/pallet-tasking/src/lib.rs#L668) |  |
| 2 | Voting module | <ul><li>[x] </li></ul> | [pallet-tasking](https://github.com/WowLabz/dot-marketplace-v2/blob/bbeb45c2dfeeb91d2a4e39d191658361375992ef/pallets/pallet-tasking/src/lib.rs#L886) |  |
| 3 | Frontend App | <ul><li>[x] </li></ul> | [tasking_frontend](https://github.com/WowLabz/tasking_frontend/tree/e28aef80f242a82352ddd7fce29175b8d1b35da6) |  |
<br/>

## General Notes v1 - Jan 13, 2023

**NOTE**: Milestone 1,2 and 3 have been delivered in the same [pull request](https://github.com/w3f/Grant-Milestone-Delivery/pull/674).

As Milestone 1, the delivery is good:
- straightforward local setup (both docker and manual);
- videos that explains how to use the dapp, and how to interact directly with PolkadotJS;

I made the following comments in the pull request conversation:

---
<br/>

As for the previous milestone, both docker and without-docker setups were straightforward.
<br/>

## Backend comments

Everything seems to work greatly, I've just two things to say about `votes`:

- ### `accept_jury_duty` issue

  I've just noted an issue, but I'm not sure if it's on your end, so I'll ask here: often, when I try to cast a vote with a `Potential Juror` I get this error from the frontend:
  
  ![Screenshot 2023-01-12 at 13 27 24](https://user-images.githubusercontent.com/22419450/212080260-99e489d0-7dff-43fa-bff5-082cd2ac6afc.png)
  
  So I tried to reproduce it with PolkadotJS to know more about it, and it gave me the `JurySelectionPeriodElapsed` error. From the [source code](https://github.com/WowLabz/dot-marketplace-v2/blob/bbeb45c2dfeeb91d2a4e39d191658361375992ef/pallets/pallet-tasking/src/lib.rs#L920), I see that it's like the `Juror` has been too slow to fire the `accept_jury_duty` function. Is that possible, and is that a bug?

- ### `accept_jury_duty` ratings
  (This is just a discussion to understand better the project's operations)
  
  I didn't get it why a `Juror` can, as well as choosing who they are voting for, cast their ratings for both the `customer` and `worker`. Is this to "correct" the ratings they're voting against? If yes, is it good for milestones disputes, as there are no ratings at the time a milestone is disputed? Or maybe is because a voter can express his rating in advance?
<br/>

## Frontend comments

Other than this, I didn't see any other important things in the backend, but I'd like to comment quickly the frontend (I think it should be an MVP, but maybe these could still be useful to you): 
- On the `login` page, I’d replace `User Name` with `Email` (and not writing under the input field “Enter registered EmailID”)
- On the `create project` page, if I try to change the wallet the frontend breaks, and then I have to logout and re-login;
- If I try `edit milestone`, its cost increases each time the button gets pressed;
- Isn't it possible to add an image and upload it in just one step instead of two?
- It looks a bit weird that just the `customer`, initially, must signup and login, but I guess it's for the MVP; by the way, what's the purpose of the signup?
- Milestone's button is `Complete` for a `worker` who bidded also if the `customer` accepted a bid of another `worker` (if you then click it, it says "project does not exist"):

  ![Screenshot 2023-01-13 at 10 08 35](https://user-images.githubusercontent.com/22419450/212281950-e60e6f32-e730-4bad-a22d-f9c77486363e.png)

  ![Screenshot 2023-01-13 at 10 09 02](https://user-images.githubusercontent.com/22419450/212281964-7ad06311-5aed-46b6-bf74-c7778084bbaf.png)

<br/>

## Conclusion

To accept the milestone, i'd like to get answers for the **Backend** part, but the **Frontend** one is definetly not urgent, as those are just comments for improvement / bugs findings.

---
<br/>

For the answers, you can follow the conversation from [this](https://github.com/w3f/Grant-Milestone-Delivery/pull/674#issuecomment-1380765274) comment.