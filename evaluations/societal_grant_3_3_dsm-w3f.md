# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/societal_saas_pricing.md
- **Milestone:** 3
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul>| [GitHub repo link](https://github.com/sctllabs/societal-node/blob/grant3_m3/LICENSE)|  |
| 0b. | Documentation | <ul><li>[ ] </li></ul>| [GitHub repo link](https://github.com/sctllabs/societal-node/blob/grant3_m3/README.md) | Not fully evaluated yet. |
| 0c. | Testing Guide | <ul><li>[ ] </li></ul>| [GitHub repo link](https://github.com/sctllabs/societal-node/blob/grant3_m3/docs/PaymentTestingGuide.md)| Not fully evaluated yet. |
| 0d. | Docker | <ul><li>[ ] </li></ul>| [Docker Image](https://hub.docker.com/layers/societal/societal-node/grant3_m3-latest/images/sha256-c17b20e56572e3d68102fec147e6e1427e8b174c791584d98bec338480a7b0f2?context=explore)| Not fully evaluated yet. |
| 0e. | Article | <ul><li>[ ] </li></ul>| [Article Link](https://medium.com/@societal.xyz/societals-third-web3-foundation-grant-56b80c3b2cc6)| Not fully evaluated yet. |
| 1. | Substrate Module: DAO Factory Pallet | <ul><li>[ ] </li></ul>| [GitHub repo link](https://github.com/sctllabs/societal-node/tree/grant3_m3/pallets/dao-subscription) | Not fully evaluated yet. |
| 2. | Client Modules | <ul><li>[ ] </li></ul>|  [Polkadot-JS](https://cloudflare-ipfs.com/ipns/dotapps.io/?rpc=ws://localhost:9954) | Not fully evaluated yet. |

## Evaluation V1

### Unit Tests

I ran `cargo test` and received these errors.

```
error[E0407]: method `exists` is not a member of trait `DaoProvider`
   --> pallets/dao-nft-governance/src/mock.rs:252:2
	|
252 | / 	fn exists(_id: Self::Id) -> Result<(), DispatchError> {
253 | |     	Ok(())
254 | | 	}
	| |_____^ not a member of trait `DaoProvider`

error[E0407]: method `count` is not a member of trait `DaoProvider`
   --> pallets/dao-nft-governance/src/mock.rs:281:2
	|
281 | / 	fn count() -> u32 {
282 | |     	1
283 | | 	}
	| |_____^ not a member of trait `DaoProvider`

error[E0407]: method `ensure_member` is not a member of trait `DaoProvider`
   --> pallets/dao-nft-governance/src/mock.rs:285:2
	|
285 | / 	fn ensure_member(_id: Self::Id, _who: &AccountId) -> Result<bool, DispatchError> {
286 | |     	Ok(true)
287 | | 	}
	| |_____^ not a member of trait `DaoProvider`

   Compiling polkadot-runtime-parachains v0.9.41 (https://github.com/paritytech/polkadot?branch=release-v0.9.41#e203bfb3)
   Compiling pallet-dao-collective-precompile v1.0.0-dev (/home/user/Documents/societal/societal-node/precompiles/dao-collective)
For more information about this error, try `rustc --explain E0407`.
error: could not compile `pallet-dao-nft-governance` due to 3 previous errors
warning: build failed, waiting for other jobs to finish...
```

### Manual Test

I followed the instructions in the [guide](https://github.com/sctllabs/societal-node/blob/grant3_m3/docs/PaymentTestingGuide.md).

I ran `./scripts/rococo_testnet_docker_run.sh` to start the Rococo Local Testnet.

This shows the Docker Container working.
```
user@localhost:~/Documents/societal/societal-node$ docker ps -a
CONTAINER ID   IMAGE                               COMMAND                  CREATED          STATUS          PORTS                                                                                                                                                                                                                         NAMES
d598cb72e24c   parity/polkadot:v0.9.41             "/usr/bin/polkadot -…"   41 minutes ago   Up 41 minutes   9933/tcp, 9944/tcp, 0.0.0.0:9946->9946/tcp, :::9946->9946/tcp, 30333/tcp, 0.0.0.0:30335->30335/tcp, :::30335->30335/tcp                                                                                                       validator-charlie
007b108bc07b   parity/polkadot:v0.9.41             "/usr/bin/polkadot -…"   41 minutes ago   Up 41 minutes   9933/tcp, 9944/tcp, 0.0.0.0:9945->9945/tcp, :::9945->9945/tcp, 30333/tcp, 0.0.0.0:30334->30334/tcp, :::30334->30334/tcp                                                                                                       validator-bob
496b1e0f81f4   parity/polkadot-parachain:0.9.400   "/usr/local/bin/polk…"   41 minutes ago   Up 41 minutes   9933/tcp, 0.0.0.0:9956->9956/tcp, :::9956->9956/tcp, 9944/tcp, 0.0.0.0:9979->9979/tcp, :::9979->9979/tcp, 0.0.0.0:30345->30345/tcp, :::30345->30345/tcp, 30333/tcp, 0.0.0.0:40335->40335/tcp, :::40335->40335/tcp             asset-hub
2da67da48591   societal/societal-node:v0.0.3       "/usr/local/bin/soci…"   41 minutes ago   Up 41 minutes   9615/tcp, 9933/tcp, 0.0.0.0:9954->9954/tcp, :::9954->9954/tcp, 9944/tcp, 0.0.0.0:9977->9977/tcp, :::9977->9977/tcp, 0.0.0.0:30343->30343/tcp, :::30343->30343/tcp, 30333/tcp, 0.0.0.0:40333->40333/tcp, :::40333->40333/tcp   societal-node-parachain-2000
bd44ce0c6797   societal/societal-node:v0.0.3       "/usr/local/bin/soci…"   41 minutes ago   Up 41 minutes   9615/tcp, 9933/tcp, 0.0.0.0:9955->9955/tcp, :::9955->9955/tcp, 9944/tcp, 0.0.0.0:9978->9978/tcp, :::9978->9978/tcp, 0.0.0.0:30344->30344/tcp, :::30344->30344/tcp, 30333/tcp, 0.0.0.0:40334->40334/tcp, :::40334->40334/tcp   societal-node-parachain-2001
8e8bb09bbf4f   parity/polkadot:v0.9.41             "/usr/bin/polkadot -…"   41 minutes ago   Up 41 minutes   0.0.0.0:9944->9944/tcp, :::9944->9944/tcp, 9933/tcp, 0.0.0.0:30333->30333/tcp, :::30333->30333/tcp                                                                                                                            validator-alice
```

I tried to add the Parachain 2000. I could check on the list, but it doesn't produce new blocks.

![pasted image 0 (10)](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/a6d6aa85-9c90-46fd-b0c9-4df558dddfb3)

![pasted image 0 (11)](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/061f534b-016b-43d6-8f64-c831990170f8)


### Documentation

All guides that instructions to launch the Rococo Local Testnet have a link to `#run-rococo-local-testnet-with-societal-node-parachains`, but now it is `#launch-rococo-local-testnet` in the README.

The instructions to [Run in docker](https://github.com/sctllabs/societal-node/blob/grant3_m3/README.md) and to start a [Single node development chain](https://github.com/sctllabs/societal-node/blob/grant3_m3/README.md#single-node-development-chain) still working? I tried them and received the error below.

```
user@localhost:~/Documents/societal/societal-node$ ./scripts/docker_run.sh
*** Start Societal Node ***
[+] Running 1/0
 ✔ Network societal-node_default  Created                                                                                                                                                                 	0.0s
[+] Running 6/6
 ✔ dev 5 layers [⣿⣿⣿⣿⣿]  	0B/0B  	Pulled                                                                                                                                                           	34.0s
   ✔ 01085d60b3a6 Pull complete                                                                                                                                                                          	15.9s
   ✔ 8fcfcb47b1c2 Pull complete                                                                                                                                                                          	16.2s
   ✔ c1af8e07a1f9 Pull complete                                                                                                                                                                          	16.3s
   ✔ 47e3ace19e9f Pull complete                                                                                                                                                                          	31.0s
   ✔ ddc7d981c9e4 Pull complete                                                                                                                                                                          	31.0s
2023-09-05 13:11:22 Societal Node    
2023-09-05 13:11:22 ✌️  version 4.0.0-dev-2a91180de89    
2023-09-05 13:11:22 ❤️  by Societal <https://github.com/sctllabs>, 2017-2023    
2023-09-05 13:11:22 📋 Chain specification: Societal Development    
2023-09-05 13:11:22 🏷  Node name: zippy-drain-6262    
2023-09-05 13:11:22 👤 Role: AUTHORITY    
2023-09-05 13:11:22 💾 Database: RocksDb at /tmp/substratemk1Bx6/chains/societal_dev/db/full    
2023-09-05 13:11:22 ⛓  Native runtime: node-103 (societal-node-1.tx1.au1)    
Error: Input("Relay chain argument error: Invalid input: `rococo-local` only supported with `rococo-native` feature enabled.")
2023-09-05 13:11:24 assembling new collators for new session 0 at #0    
2023-09-05 13:11:24 assembling new collators for new session 1 at #0 
```

### Code Quality

I ran `cargo clippy` and didn't receive any warnings.

```
user@localhost:~/Documents/societal/societal-node$ cargo clippy
⚡ Found 3 strongly connected components which includes at least one cycle each
cycle(001) ∈ α: DisputeCoordinator ~~{"DisputeDistributionMessage"}~~> DisputeDistribution ~~{"DisputeCoordinatorMessage"}~~>  *
cycle(002) ∈ β: CandidateBacking ~~{"ProvisionerMessage"}~~> Provisioner ~~{"CandidateBackingMessage"}~~>  *
cycle(003) ∈ γ: NetworkBridgeRx ~~{"GossipSupportMessage"}~~> GossipSupport ~~{"NetworkBridgeRxMessage"}~~>  *
    Finished dev [unoptimized + debuginfo] target(s) in 1.16s
```
