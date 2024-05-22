# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).** 

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/tuxedo_parachain.md
* **Milestone Number:** 2

**Context**

Tuxedo is a framework for writing Substrate runtimes in the UTXO model. It is analogous (and an alternative) to FRAME which uses the accounts model. In this grant we are adding parachain support to Tuxedo.

In this second milestone we have built the `parachainify!` macro to turn any Tuxedo Runtime into a parachain runtime. We've also delivered a complete parachain template which uses the macro. In some ways our `parachainify!` is analogous to Cumulus's `register_validate_block!` macro; they both create the `validate_block` function that Polkadot requires from parachains. However, `parachainify!`, also does the _entire job_. No need to manually install the parachain piece or configure a custom pallet. With Tuxedo's `parachainify!` macro you transform your runtime with just a single line of code.

**Deliverables**

As in the previous milestone, the final shape became clearer as I worked. Now that it is done, I'll add a few "bonus" deliverables in addition to what I originally proposed. This should help you better understand the structure and scope of the work, and evaluate the submission more thoroughly.

In the proposal I mentioned that we would develop the Tuxedo equivalent to the following code, which we have now done.
```rust
// FRAME version - Requires that pallet_parachain_system be manually configured previously
cumulus_pallet_parachain_system::register_validate_block! {
	Runtime = Runtime,
	BlockExecutor = cumulus_pallet_aura_ext::BlockExecutor::<Runtime, Executive>,
	CheckInherents = CheckInherents,
}

// Tuxedo version - No additional configuration necessary.
// Parachain Id = 2000
tuxedo_parachain_core::parachainify!(Verifier, ConstraintChecker, 2000);
```

| Number | Deliverable | Link(s)       | Notes |
| ------ | ----------- | ------------- |------------- |
| 0a.    | License     | [LICENSE file](https://github.com/Off-Narrative-Labs/Tuxedo/blob/main/LICENSE) | Apache 2.0, as recommended. | 

| 0b.    | Documentation | [Hosted Rustdocs](https://off-narrative-labs.github.io/Tuxedo), [Readme](https://github.com/Off-Narrative-Labs/Tuxedo#readme) | We have detailed rustdocs throughout the project; they are also hosted. There is also a detailed project Readme including tutorial. | 

| 0c.    | Testing     | [Readme Section](https://github.com/Off-Narrative-Labs/Tuxedo#testing-and-code-quality) | We have good unit test coverage throughout the project. The tests are run in CI and instructions for running them locally are in the readme. |

| 0d.    | Docker      | [Readme Section](https://github.com/Off-Narrative-Labs/Tuxedo#docker), [Published Images](https://github.com/orgs/Off-Narrative-Labs/packages) | We provide docker images for the parachain template node, the normal template node, and the wallet which supports both nodes. Instructions for using these images are in the readme. |

| 1.     | Parachain Template Node | [Node Code](https://github.com/Off-Narrative-Labs/Tuxedo/tree/main/parachain-node), [Runtime Code](https://github.com/Off-Narrative-Labs/Tuxedo/tree/main/tuxedo-parachain-runtime), [Docker Image](https://github.com/Off-Narrative-Labs/Tuxedo/pkgs/container/tuxedo-parachain) | A complete working parachain template node ready for hacking. Analogous to Cumulus's parachain template node. |

| (BONUS) 2.  | `parachainify!` macro | [Rustdocs](https://off-narrative-labs.github.io/Tuxedo/tuxedo_parachain_core/macro.parachainify.html), [Example Usage](https://github.com/Off-Narrative-Labs/Tuxedo/blob/main/tuxedo-parachain-runtime/src/lib.rs#L63-L64) | Analogous to `register_validate_block!`, but also configures all necessary parachain machinery. |

| (BONUS) 3. | Zombienet | [Readme Section](https://github.com/Off-Narrative-Labs/Tuxedo#zombienet) [Config File](https://github.com/Off-Narrative-Labs/Tuxedo/blob/main/zombienet.toml) | To spin up a proper relay-para testnet, you can youse the provided zombienet config. |


**Additional Information**

Thank for your patience as this milestone is significantly past my estimated completion date. Not only did I underestimate the complexity of the macros and validating blocks on the relay chain validators, I also had life off-chain demanding my attention. :pray:
