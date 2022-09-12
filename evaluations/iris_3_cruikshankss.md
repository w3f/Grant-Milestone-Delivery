# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/pull/657
- **Milestone:** 3

**Deliverables**

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | [x] | [Apache 2](https://github.com/iridium-labs/substrate/blob/iris-milestone-2/LICENSE-APACHE2) | No change to licenses used in Substrate |
| 0b. | Documentation | [x] | [docs](https://iridium-labs.github.io/), [mdbook](https://github.com/iridium-labs/iris-docs) | Exemplary M3 demo video!! Great docs site. |
| 0c. | Testing Guide | [x] | https://docs.google.com/document/d/1EUf8YUi3Gnr05weutoH-TTLpOClHHgKOTlLVhX61Frg/edit?usp=sharing | Exemplary Google Doc and Google Sheets!! |
| 0d. | Docker | [x] | [iris](https://hub.docker.com/repository/docker/iridiumlabs/iris), [UI](https://hub.docker.com/repository/docker/iridiumlabs/iris-ui) | Works great! |
| 0e. | Article | [x] | https://medium.com/iridium/iris-a-next-gen-decentralized-storage-layer-part-3-aa6e8492cc09 | Thank you for the entire M1, M2, M3 series. |
| 1. | Substrate module: iris-assets Runtime Module Enhancements | [x] | https://github.com/iridium-labs/substrate/blob/iris_milestone_3/bin/node-template/pallets/iris-assets/src/lib.rs | Simplified runtime storage, security, moved some RPC functions into here.  |
| 2. | Custom RPC Endpoint | [x] | https://github.com/iridium-labs/substrate/tree/iris_milestone_3/bin/node-template/pallets/iris-assets/rpc | Moved some functions into iris-assets; security.  |
| 3a. | Iris Runtime: Contracts Pallet | [x] | https://github.com/iridium-labs/substrate/blob/ff629c867b523a18526359360d1fb55f23a4aa90/bin/node-template/runtime/src/lib.rs#L252 |  Enables running the Iris Asset Exchange smart contract via the explorer. |
| 3b. | Iris Runtime: Chain Extension | [x] | https://github.com/iridium-labs/substrate/blob/ff629c867b523a18526359360d1fb55f23a4aa90/bin/node-template/runtime/src/lib.rs#L813 | Links Iris nodes and Iris Asset Exchange smart contracts. |
| 3c. | Contracts: The Iris Asset Exchange | [x] | https://github.com/iridium-labs/contracts/tree/iris_milestone_3/iris_asset_exchange | Buy/sell access to data. |
| 4 | Iris Runtime: Iris-Ledger pallet | [x] | https://github.com/iridium-labs/substrate/tree/iris_milestone_3/bin/node-template/pallets/iris-ledger | Discovered the need for locking mechanisms for currency/payments. |
| 5. | User Interface | [x] | https://github.com/iridium-labs/ui/tree/iris_milestone_3 | CONGRATULATIONS!! LOOKS AMAZING! |


# Additional Notes


I watched the demo vid, then checked out the testing guides in the google sheet and google doc. Main docs here (to run docker): https://iridium-labs.github.io/.


I got the blockchain running by doing these commands:

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
  iridiumlabs/iris \
  --dev --ws-external --rpc-external \
  --node-key 0000000000000000000000000000000000000000000000000000000000000001

docker run -p 9945:9944 -p 9934:9933 -p 30334:30333 -p 9616:9615 -it --rm --name iris-node1 iridiumlabs/iris --bob --dev --ws-external --rpc-external --rpc-methods=unsafe --bootnodes /ip4/172.17.0.1/tcp/30333/p2p/12D3KooWEyoppNCUx8Yx66oV9fJnriXwCcXwDDUA2kj6vnc6iDEp


docker pull iridiumlabs/iris-ui

// found my ipv4 and replaced w.x.y.z (below) with it
docker run -it --rm -p 3000:3000 -e REACT_APP_IPV4="w.x.y.z" iridiumlabs/iris-ui:latest

ipfs daemon
```