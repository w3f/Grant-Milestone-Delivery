# Evaluation

* **Status:** Rejected
* **Application Document:** https://github.com/w3f/Open-Grants-Program/blob/master/applications/evanesco_networks.md
* **Milestone:** 1
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All by mmagician

## Milestone 1

### Substrate integration

According to the deliverables in the contract, the following was expected:
> the substrate node integrate with P2Private-rust module and perform as a Tor-like network


Instead, the code that is available in WhiteNoise-For-Substrate.git is not an integration into substrate. It does two things:
- it is running your binary alongside `node-template` using the same MultiAddress
- it exposes one RPC endpoint for information

I might be missing something important here, but at the moment I fail to see how the deployed substrate nodes would form a Tor-like network.

### Unit tests
Overall, your contract states a test coverage of 70%, which is not achieved at the current stage.

### Misc
---
`get_main_net_peers(&mut self, _cnt: i32)`

_cnt is never used, e.g. in `network_test.rs`: 
```
client.get_main_net_peers(10).await;
```

## Milestone 2
The WhiteNoise-client.rs repository is basically a copy of the `sdk` directory in your WhiteNoise.rs repo, with some methods renamed.
