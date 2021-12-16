# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Open-Grants-Program/pull/419
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
|      0 | License  | <ul><li>[x] </li></ul> | [License](https://github.com/parallel-finance/parallel/blob/master/LICENSE)  | Correct License |
|    1.a | Substrate module: Staking DOT | <ul><li>[x] </li></ul> | [code](https://github.com/parallel-finance/parallel/blob/0f8d47a1ec/pallets/liquid-staking/src/lib.rs#L399)  |  Implemented  |
|    1.b | Substrate module: Unstaking DOT | <ul><li>[x] </li></ul> | [code](https://github.com/parallel-finance/parallel/blob/0f8d47a1ec/pallets/liquid-staking/src/lib.rs#L462)  | Implemented |
|    1.c | Substrate module: Exchange Rate     | <ul><li>[x] </li></ul> | [code](https://github.com/parallel-finance/parallel/blob/0f8d47a1ec/pallets/liquid-staking/src/lib.rs#L514)  | Implemented |
|    1.d | Substrate module: Slashing Scenario | <ul><li>[x] </li></ul> | [code](https://github.com/parallel-finance/parallel/blob/0f8d47a1ec/pallets/liquid-staking/src/lib.rs#L614)  | Implemented |
|    1.e | Substrate module: KSM | <ul><li>[x] </li></ul> | - | UI currently only supports KSM, and not polkadot, but it doesn't really matter here. The implementation is the same for both |
|    2   | Validator evaluation schema | <ul><li>[x] </li></ul> | [code](https://github.com/parallel-finance/parallel/tree/master/pallets/nominee-election/src)  | Implemented |
|    3. | Integration with front-end  | <ul><li>[x] </li></ul> | [Integration code](https://gist.github.com/yz89/34bb2954f0682b9837733f21a199c7ed)  |  they didn't open source the entire front-end, only the integration, which isn't really useful but according to the contract. However the UI currently doesn't let me select polkadot. Also the code hasn't be updated since the last time |
|    4. | Article/Tutorial  | <ul><li>[x] </li></ul> | [Testnet Experience](https://docs.parallel.fi/a-guide-to-testnet/testnet-experience)  | Long article which describes every step in detail |
|    5. | Testing and Documentation | <ul><li>[x] </li></ul> | [Test guide](https://github.com/parallel-finance/parallel/wiki/Test-guide)  | **27.10.21:**  Very short testing guide, but the code has inline documentation and unit tests. Currently I get the below error **29.10.21:** It's fixed now  |
|    6. | User Testing   | <ul><li>[x] </li></ul> | [Notion](https://parallelfinance.notion.site/Web3-Grant-Milestone-2-d98aed16ce0642348c2133f0b7d91ab2)  | They claim to have done user testing, it's difficult to prove, but they don’t provide a lot of information  |  

## General Notes

In general the quality of the delivery is very good, especially given the size of the grant. However the front-end shouldn’t have been part of the contract, since the open sourced code is basically useless for others and hard to evaluate (but according to the contract). 

**27.10.21, Testing guide error**

<pre>sudo make launch
docker-compose -f output/docker-compose.yml -f output/docker-compose.override.yml down --remove-orphans &gt; /dev/null 2&gt;&amp;1 || true
rm -fr output || true
docker volume prune -f
Total reclaimed space: 0B
docker image pull parallelfinance/polkadot:v0.9.11
v0.9.11: Pulling from parallelfinance/polkadot
Digest: sha256:08777017aef3bc7c55b8711b5cbde54e4589adc4463b61d6c86192f70b88566a
Status: Image is up to date for parallelfinance/polkadot:v0.9.11
docker.io/parallelfinance/polkadot:v0.9.11
docker image pull parallelfinance/parallel:latest
latest: Pulling from parallelfinance/parallel
Digest: sha256:63a2f4e41f4d3cee86255b7cedbdba37a3d1430a0edde2756cf1728016f83fa2
Status: Image is up to date for parallelfinance/parallel:latest
docker.io/parallelfinance/parallel:latest
docker image pull parallelfinance/stake-client:latest
latest: Pulling from parallelfinance/stake-client
Digest: sha256:c771aa8a139ad6a5865714bcf82691e904d4acf9ef7ecf0f5124f3581664f74c
Status: Image is up to date for parallelfinance/stake-client:latest
docker.io/parallelfinance/stake-client:latest
docker image pull parallelfinance/liquidation-client:latest
latest: Pulling from parallelfinance/liquidation-client
Digest: sha256:4813181e25af3d51b9ec82dc3389537e44fc6827380508138de4dae4b365156f
Status: Image is up to date for parallelfinance/liquidation-client:latest
docker.io/parallelfinance/liquidation-client:latest
docker image pull parallelfinance/nominate-client:latest
latest: Pulling from parallelfinance/nominate-client
Digest: sha256:0807154f67aca8f389297fc49bf6b69318567194c3bac6487ba2d10723beec74
Status: Image is up to date for parallelfinance/nominate-client:latest
docker.io/parallelfinance/nominate-client:latest
docker image pull parallelfinance/oracle-client:latest
latest: Pulling from parallelfinance/oracle-client
Digest: sha256:1610b5c9c8b1fc4e7eed1c754a65040afcc2c9f522a87de8220f3ad27d62bb27
Status: Image is up to date for parallelfinance/oracle-client:latest
docker.io/parallelfinance/oracle-client:latest
docker image pull parallelfinance/parallel-dapp:latest
latest: Pulling from parallelfinance/parallel-dapp
Digest: sha256:69b393618b4a348456949a66fe425b9b0ef7b2ecbc91ec8eca2d978be14863fc
Status: Image is up to date for parallelfinance/parallel-dapp:latest
docker.io/parallelfinance/parallel-dapp:latest
parachain-launch generate config.yml &amp;&amp; (cp -r keystore* output || true) &amp;&amp; cp docker-compose.override.yml output &amp;&amp; cd output &amp;&amp; docker-compose up -d --build
/bin/sh: 1: parachain-launch: not found
make: *** [Makefile:95: launch] Error 127
</pre>