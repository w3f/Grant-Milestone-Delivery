# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/anagolay-project-idiyanale-multi-token-community-contributions-for-verified-creators.md

- **Milestone Number:** 1

**Context** (optional)

Important thing to note is the `0c` which doesn't have any other tests than the rust unit tests or any extensive testing guide. The command is all a person needs to run the tests.

**Deliverables**

| Number | Deliverable                      | Link                                                                                                                                                                                                         | Notes                                |
| ------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ |
| 0a.    | License                          | [License file](https://github.com/anagolay/anagolay-chain/blob/main/pallets/verification/LICENSE)                                                                                                            |                                      |
| 0b.    | Documentation                    | [Rust docs](https://bafybeifhfhy7qnqz2ew6klndwcdhi3spgbkkhhzwpct4mrlsn2l3stujxi.ipfs.anagolay.network/anagolay/)                                                                                             |                                      |
| 0c.    | Testing and Testing Guide        | In root of the repo run `makers ci-flow-light`                                                                                                                                                               |                                      |
| 0d.    | Docker                           | registry.gitlab.com/anagolay/anagolay/idiyanale:3b7f3e2a                                                                                                                                                     | gitlab doesn't have the ui as docker |
| 0e.    | Demo video tutorial              | https://www.youtube.com/watch?v=j5__j3Km8ho                                                                                                                                                                  | i was making video with the flu :(   |
| 1.     | Substrate module: verification   | [Pallet source code](https://github.com/anagolay/anagolay-chain/tree/main/pallets/verification)                                                                                                              |                                      |
| 2.     | Statement pallet update          | [Commit id where this is implemented](https://github.com/anagolay/anagolay-chain/commit/3bfaa83146555ffe6e4203b4d21d80b73ae0a0d8)                                                                            |                                      |
| 3.     | UI for claiming domain ownership | [Anagolay App](https://bafybeiexksyj76zmsnsm6ew4eumidi75sigc2vchqqoeh2d3edxmorslxu.ipfs.anagolay.network/verify-your-domain/) & [App Source Code](https://github.com/anagolay/anagolay-js-sdk/tree/main/app) |                                      |

**Additional Information**

Grant PR - https://github.com/w3f/Grants-Program/pull/1224

## Local building and testing

Copy this into a file named `docker-compose.yml` then execute it with `docker-compose up -d` this will create the container and expose the standard substrate ports.

```yaml
version: "3"
services:
  idiyanale:
    image: registry.gitlab.com/anagolay/anagolay/idiyanale:3b7f3e2a
    container_name: idiyanale_testnet
    volumes:
      - ./data_idiyanale:/data
    ports:
      - 30333:30333
      - 9933:9933
      - 9944:9944
    # command: purge-chain --dev -y --base-path /data
    command: --dev --no-telemetry --rpc-external --unsafe-ws-external --rpc-cors all --base-path /data --enable-offchain-indexing /tmp
```

**Setting up the Anagolay app**

Before you can build the app you need to have following installed:

- nodejs >= 18.40
- [pnpm](https://pnpm.io/) installed

Follow the steps in this snippet:

```bash
git clone git@github.com:anagolay/anagolay-js-sdk.git
cd anagolay-js-sdk
node common/scripts/install-run-rush.js update
node common/scripts/install-run-rush.js build
cd app
pnpm dev
```
