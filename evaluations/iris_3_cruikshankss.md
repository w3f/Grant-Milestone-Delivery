# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/pull/657
- **Milestone:** 3

**Deliverables**

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | [x] | [Apache 2](https://github.com/iridium-labs/substrate/blob/iris-milestone-2/LICENSE-APACHE2) | No change to licenses used in Substrate |
| 0b. | Documentation | [x] | https://iridium-labs.github.io/ | The mdbook source is found at: https://github.com/iridium-labs/iris-docs |
| 0c. | Testing Guide | [x] | https://docs.google.com/document/d/1EUf8YUi3Gnr05weutoH-TTLpOClHHgKOTlLVhX61Frg/edit?usp=sharing | |
| 0d. | Docker | [x] | [iris](https://hub.docker.com/repository/docker/iridiumlabs/iris), [UI](https://hub.docker.com/repository/docker/iridiumlabs/iris-ui) | |
| 0e. | Article | [x] | https://medium.com/iridium/iris-a-next-gen-decentralized-storage-layer-part-3-aa6e8492cc09 | |
| 1. | Substrate module: iris-assets Runtime Module Enhancements | [x] | https://github.com/iridium-labs/substrate/blob/iris_milestone_3/bin/node-template/pallets/iris-assets/src/lib.rs |   |
| 2. | Custom RPC Endpoint | [x] | https://github.com/iridium-labs/substrate/tree/iris_milestone_3/bin/node-template/pallets/iris-assets/rpc |   |
| 3a. | Iris Runtime: Contracts Pallet | [x] | https://github.com/iridium-labs/substrate/blob/ff629c867b523a18526359360d1fb55f23a4aa90/bin/node-template/runtime/src/lib.rs#L252 | |
| 3b. | Iris Runtime: Chain Extension | [x] | https://github.com/iridium-labs/substrate/blob/ff629c867b523a18526359360d1fb55f23a4aa90/bin/node-template/runtime/src/lib.rs#L813 | |
| 3c. | Contracts: The Iris Asset Exchange | [x] | https://github.com/iridium-labs/contracts/tree/iris_milestone_3/iris_asset_exchange | |
| 4 | Iris Runtime: Iris-Ledger pallet | [x] | https://github.com/iridium-labs/substrate/tree/iris_milestone_3/bin/node-template/pallets/iris-ledger |  |
| 5. | User Interface | [x] | https://github.com/iridium-labs/ui/tree/iris_milestone_3 | |


# Additional Notes


I watched 2mins demo vid, then check out testing guide google doc & sheet & instructions to run docker (main docs) https://iridium-labs.github.io/.

```
git clone git@github.com:iridium-labs/substrate.git
cd substrate
git checkout iris_milestone_3s
cargo +nightly build --release

touch testfile.txt
nano testfile.txt // then put in some text and closed nano with ctrl+X, then "Y" to save
ipfs add testfile.txt 

docker pull iridiumlabs/iris

docker run -p 9944:9944 \
  -p 9933:9933 \
  -p 30333:30333 \
  -p 9615:9615 \
  -it \
  --rm \
  --name iris-alice \
  iridium/substrate \
  --dev --ws-external --rpc-external \
  --node-key 0000000000000000000000000000000000000000000000000000000000000001

docker run -p 9945:9944 -p 9934:9933 -p 30334:30333 -p 9616:9615 -it --rm --name iris-node1 iridiumlabs/iris --bob --dev --ws-external --rpc-external --rpc-methods=unsafe --bootnodes /ip4/172.17.0.1/tcp/30333/p2p/12D3KooWEyoppNCUx8Yx66oV9fJnriXwCcXwDDUA2kj6vnc6iDEp
```

