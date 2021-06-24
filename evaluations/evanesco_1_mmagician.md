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
- `bytes_test.rs` doesn't test any logic related to your code, it's purely a test of multihas lib (by no measure does it **hurt** to have these test - I'm just saying that they don't necessarily bring value to your test suite)
- `ecies_test.rs` contain no network related logic.
- `node_test.rs`'s main test `node_test` doesn't actually test anything, it just calls the methods. Furthermore, all this is already done (and with some actual peer checks) in `get_mainnet_test` from `network_test.rs`
- `network_test.rs`:
	- conceptual question: why is the bootnode not included in the peer list for the both of the clients? `assert_eq!(peers.len(), 1 as usize);`. I added an extra check to see which one it is, and for both of the nodes it seems to be the `node` from `let node = start_server(...);`
	- in your architecture, you talk about the following circuit: "Alice ⟷ EntryNode ⟷ Joint Node ⟷ Relay Node (or nodes) ⟷ Exit Node ⟷ Bob". If I can try to make the analogy to your test, EntryNode would be `caller`, ExitNode would be `answer`. Now since they are connected to the same peer (`node`), I don't see where the "Joint Node ⟷ Relay Node" connection is represented in your test.
	- From your protocol description: "After Entry Node get such request, it will gossip a message in the first layer network. The message is encrypted by Alice based on ECIES scheme, and only Bob is able to decrypt". This is not covered by tests. I also couldn't find source code which would perform this task.

Overall, your contract states a test coverage of 70%, which is not achieved at the current stage.

### Code structure & cleanliness

Numerous unused imports, ignoring results of async calls and more.
Running `cargo clippy` produces the following:

```
error: aborting due to 3 previous errors; 317 warnings emitted
```

### Misc
---
- code duplication, same `start_server` function method used in `node_test.rs` & `network_test.rs`, very similar code also in `main.rs` (could be refactored to accomodate all three instances?)


---
`main.rs`:

no-op check:
```
    if 1 == 1 {
```

---
`get_main_net_peers(&mut self, _cnt: i32)`

_cnt is never used, e.g. in `network_test.rs`: 
```
client.get_main_net_peers(10).await;
```

## Milestone 2
The WhiteNoise-client.rs repository is basically a copy of the `sdk` directory in your WhiteNoise.rs repo, with some methods renamed.
