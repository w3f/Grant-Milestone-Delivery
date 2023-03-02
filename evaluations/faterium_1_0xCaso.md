# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/faterium.md
- **Milestone:** 1
- **Kusama Identity:** [HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu](https://kusama.subscan.io/account/HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu)
- **Previously successfully merged evaluation:** All by 0xCaso

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [faterium-node/LICENSE](https://github.com/faterium/faterium-node/blob/d5699efd71df7768d03aab76174c1d526b1474e4/LICENSE) [faterium-server/LICENSE](https://github.com/faterium/faterium-server/blob/98f534046cb9179011b13534c110557d09fbfa97/LICENSE) [faterium-dapp/LICENSE](https://github.com/faterium/faterium-dapp/blob/e6340e50ac8237c5cf17a9233c1d0cbc5c153dd5/LICENSE) | - |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [faterium-node/pallets/faterium-polls/README.md](https://github.com/faterium/faterium-node/tree/d5699efd71df7768d03aab76174c1d526b1474e4/pallets/faterium-polls/README.md) | See **General Notes** |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [faterium-node/README.md#Test](https://github.com/faterium/faterium-node/blob/d5699efd71df7768d03aab76174c1d526b1474e4/README.md#Test) | - |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Faterium Node Dockerfile](https://github.com/faterium/faterium-node/blob/d5699efd71df7768d03aab76174c1d526b1474e4/.github/docker/Dockerfile), [Faterium Server Dockerfile](https://github.com/faterium/faterium-server/blob/98f534046cb9179011b13534c110557d09fbfa97/Dockerfile), [Server docker-compose](https://github.com/faterium/faterium-server/blob/98f534046cb9179011b13534c110557d09fbfa97/.infra/docker-compose.yml) | - |
| 1. | Crowdfunding Polls Pallet | <ul><li>[x] </li></ul> | [faterium-node/pallets/faterium-polls](https://github.com/faterium/faterium-node/tree/d5699efd71df7768d03aab76174c1d526b1474e4/pallets/faterium-polls) | - |
| 2. | Configure Substrate Node | <ul><li>[x] </li></ul> | [faterium-node](https://github.com/faterium/faterium-node/tree/d5699efd71df7768d03aab76174c1d526b1474e4) | - |
| 3. | Faterium Server with PocketBase and IPFS | <ul><li>[x] </li></ul> | [faterium-server](https://github.com/faterium/faterium-server/tree/98f534046cb9179011b13534c110557d09fbfa97) | - |
| 4. | Launch testnet Substrate network on the server | <ul><li>[x] </li></ul> | https://dapp.faterium.com https://dapp-api.faterium.com/_/ https://dapp-api.faterium.com/ipfs/QmRcjJeqra35prAKsdUi1JU7ikPtJ6V477Eg8w4hxtmgEi https://dapp-apps.faterium.com/ wss://dapp-node.faterium.com/ | - |
| 5. | Pages for creating Polls and voting on it | <ul><li>[x] </li></ul> | [faterium-dapp/src/pages/index.astro](https://github.com/faterium/faterium-dapp/blob/e6340e50ac8237c5cf17a9233c1d0cbc5c153dd5/src/pages/index.astro), [faterium-dapp/src/pages/create-poll.astro](https://github.com/faterium/faterium-dapp/blob/e6340e50ac8237c5cf17a9233c1d0cbc5c153dd5/src/pages/create-poll.astro) | - |
<br/>

## General Notes v2 - Dec 13, 2020
All the minor things mentioned in **General Notes v1** have been fixed. Refer to [this comment](https://github.com/w3f/Grant-Milestone-Delivery/pull/651#issuecomment-1347644598) if you want to see exactly where the fix are. The delivery is now perfect, the team has done a great job so far.

<br/>

## General Notes v1 - Dec 12, 2022
The delivery is very good, and the documentation is excellent, also if I'd add some minor things to it. The `faterium-polls` pallet is well covered by unit tests. I managed to test all the functionalities with the hosted application [here](https://dapp.faterium.com), but also locally running the server, the substrate node and the frontend.

### 0b. Documentation
- In the [README](https://github.com/faterium/faterium-node/blob/c06b47e2ca951e13de42fc1f6c63919bce68546f/README.md) of the faterium-node repo, I'd add the command `mkdir .local` before running the docker script;
- In the [README](https://github.com/faterium/faterium-server/blob/8d84dd2aa6a5519ca74c0c3c9c6a1f3c9b8d359a/README.md) of the faterium-server repo, I'd add a quick guide to how setup the docker environment (also for development, maybe mention that in the [`docker-compose.yml`](https://github.com/faterium/faterium-server/blob/8d84dd2aa6a5519ca74c0c3c9c6a1f3c9b8d359a/.infra/docker-compose.yml) there is something to change like the `WS_URL`);
- I'd add somewhere a quick guide for the whole local setup. The steps should be something like this:
  - run node and server;
  - edit dapp:
    - edit [src/utils/PocketBase.ts](https://github.com/faterium/faterium-dapp/blob/b428e21fcc6d8576554e1c56375ffbfced5f4471/src/utils/PocketBase.ts) → uncomment + comment;
    - edit [src/utils/PollDetails.ts](https://github.com/faterium/faterium-dapp/blob/70dce4a3783d51f2dd04f635c00c9aa7d6ab83b0/src/utils/PollDetails.ts) → this.imageUrl, this.thumbUrl;
    - edit [src/utils/Substrate.ts](https://github.com/faterium/faterium-dapp/blob/70dce4a3783d51f2dd04f635c00c9aa7d6ab83b0/src/utils/Substrate.ts) → wss;
  - run dapp.

### Other notes
- I didn't understand what's the role of the `proxy` in the whole setup;
- Is it okay to be able to vote different options in the same time? If yes, I'd add the chance to enable/disable this option during the poll creation;
  - Also, it's possible to vote with "0" votes, was this expected?
- If the `collect` function fails, the UI doesn't show it, but shows that the operation worked;