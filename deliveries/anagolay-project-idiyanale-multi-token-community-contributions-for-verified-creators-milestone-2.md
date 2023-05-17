# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/anagolay-project-idiyanale-multi-token-community-contributions-for-verified-creators.md

- **Milestone Number:** 2

**Context** (optional)

**Deliverables**

| Number | Deliverable               | Link                                                                                                                                                                                              | Notes                                |
| ------ | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| 0a.    | License                   | [License file](https://github.com/anagolay/anagolay-chain/blob/main/pallets/tipping/LICENSE)                                                                                                      |                                      |
| 0b.    | Documentation             | [Rust docs](https://bafybeierivi7ej4ofbti2hcgdvthunu6heqj74vpnovlwn4rlw52sa26ga.ipfs.anagolay.network/anagolay/)                                                                                  |                                      |
| 0c.    | Testing and Testing Guide | In root of the repo runtime repo run `makers ci-flow-light`                                                                                                                                       |                                      |
| 0d.    | Docker                    | `registry.gitlab.com/anagolay/anagolay/idiyanale:fb29d2a0`                                                                                                                                        | gitlab doesn't have the ui as docker |
| 0e.    | Demo video                | https://www.youtube.com/watch?v=uySt392C6TE                                                                                                                                                       |                                      |
| 1.     | Substrate module: tipping | [Pallet source code](https://github.com/anagolay/anagolay-chain/tree/main/pallets/tipping)                                                                                                        |                                      |
| 2.     | Anagolay Extension        | [Extension source code](https://github.com/anagolay/anagolay-js-sdk/tree/main/extension)                                                                                                          |                                      |
| 3.     | UI: `my-channels` page    | [Anagolay App](https://bafybeiai2abe5y2nbgydjopuxhg6sdicim22gu4zgkpmcvu7apurpdlguq.ipfs.anagolay.network/profile/) & [App Source Code](https://github.com/anagolay/anagolay-js-sdk/tree/main/app) |                                      |

**Additional Information**

Grant PR - https://github.com/w3f/Grants-Program/pull/1224

## Local building and testing

### Build Runtime

Copy this into a file named `docker-compose.yml` then execute it with `docker-compose up -d` this will create the container and expose the standard substrate ports.

```yaml
version: "3"
services:
  idiyanale:
    image: registry.gitlab.com/anagolay/anagolay/idiyanale:fb29d2a0
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

### Build JS based projects

Requirements for nodejs projects:

- nodejs >= 18.40
- [pnpm](https://pnpm.io/) installed

The SDK repository is a mono repo build with rushstack. There is no need to build each project by hand. It's enough to run following commands to have the deps installed and built:

```bash
git clone https://github.com/anagolay/anagolay-js-sdk.git
cd anagolay-js-sdk

# install the deps
node common/scripts/install-run-rush.js update

# build the sdk libraries
node common/scripts/install-run-rush.js build
```

**Web app**

Start the app:

```bash
cd app
pnpm dev
```

Now go to [http://localhost:7766](http://localhost:7766).

> Note that anagolay JS sdk repo is fully enabled to use gitpod.

**Extension**

Build the app:

> Note that the build process will produce warnings, they are not breaking nor have any effect on the performance of the Extension. All of them come from Polkadot Api libraries, due to the `sideEffects` and types lookup.

```bash
cd extension
pnpm build
```

After you build it you should follow [tutorial](https://anagolay.dev/blog/chrome_extension_wallet/installation-and-step-by-step-tutorial/?utm_source=github&utm_medium=w3f_deliverable&utm_campaign=gp_1224) to learn how to install the extension in a browser of your choice. This tutorial includes the video tutorials as well.
