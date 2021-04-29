# Milestone Delivery :mailbox:
 
**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).** 
 
* **PR Link:** [Pontem Network](https://github.com/w3f/Open-Grants-Program/pull/138).
* **Milestone Number:** [Milestone #3](https://github.com/w3f/Open-Grants-Program/blob/master/applications/pontem.md#milestone-3--beta-version--ecosystem).
 
See how to try result of work on milestone #3 in our [Pontem network](https://docs.pontem.network/02.-getting-started/getting_started) official documentation.
 
After the current 3rd milestone we are going to continue work on the Move pallet, we still have a lot of things to do: update the Move VM and its toolchain, develop tools for popular IDEs, launch our own Parathread, constantly refactor and develop new features.
 
Use the latest tags and if there are no no tags in the repository just use master branch.
 
| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0. | Gas compatibility | [Commit #1](https://github.com/pontem-network/sp-move/commit/49d6f1d8598aca86bf7e59f309a078cd573fcc0e) [Commit #2](https://github.com/pontem-network/sp-move/commit/6e4026bcf3f5e8bb595652306443a8bcd55e5dc4#diff-a751a72b51c3b8b76645db1fc49f0055a8330e0fcdbd5003cd74c2bc90f0ffb1) | Gas compatibility implemented by converting gas into Weight and back. Each transaction method in the pallet has weight that we get by calculating gas. The VM accepts gas during execution of module/script, and after execution we receive used gas and converts it to weight. [Read more](https://docs.pontem.network/03.-move-vm/gas). |
| 1. | Non-VM balances compatibility | [Commit #1](https://github.com/pontem-network/sp-move/commit/195406e3e2d296594a3d021d3c99bffcc1a51117) | We've implemented Non-VM balances compatibility by transferring native balances in "VM space" as we call it by using native functions and `0x1::PONT::T` type. See [examples](https://docs.pontem.network/03.-move-vm/native_balances) in documentation. |
| 2-3. | RPC / REST API | [Commits #1](https://github.com/pontem-network/sp-move/pull/30/commits) [Commit #2](https://github.com/pontem-network/sp-move/commit/50ad7d38ada15ff3c191447465f13c38c5d37c16) [CLI](https://github.com/pontem-network/tools/tree/master/packages/api-cli) | We implemented RPC to estimate gas and execution of smart contracts, also CLI in JS to iterate with RPC. See [RPC](https://docs.pontem.network/03.-move-vm/rpc) docs and [CLI](https://docs.pontem.network/02.-getting-started/cli). |
| 4. | Documentation | [Commits](https://github.com/pontem-network/docs/commits/master) | We implemented large documentation and described as much as possible, we also continued to increase the amount of materials with more examples, tutorials, etc. See [docs](https://docs.pontem.network). |
| 5. | Deployment of prod env | [Commit #1](https://github.com/pontem-network/sp-move/commit/755cc9bc2268f13f1b3e30a495cb1bd9feca0459) [Commit #2](https://github.com/pontem-network/sp-move/commit/d071378f719d427f687c2f3fa44a7ee123a8af93) [Testnet](https://docs.pontem.network/02.-getting-started/getting_started#connection-to-network) | We deployed our own private network as testnet, little modified docker files. Currently you can connect to testnet via UI or CLI using the address `wss://testnet.pontem.network/wss`. |
| 6. | Disassembler adoption | [Commit #1](https://github.com/pontem-network/move-tools/commit/e269763405e2f0b4e629ed03da706dd8c7d3b7b9#diff-ad94159425a4e644ecb2cd3b265d3c1c176245797327099cacc1ff52047dd204) [Commit #2](https://github.com/pontem-network/move-tools/commit/1eb933958926401c452d9c5831099671e2ca1c3f#diff-ad94159425a4e644ecb2cd3b265d3c1c176245797327099cacc1ff52047dd204) | As we adopted Move Tools for Polkadot in previous milestones, here we just updated the disassembler with the right dialect and made small documentation. |
| 7. | Unit-tests | [Tests #1](https://github.com/pontem-network/sp-move/commit/cce333b8808cd9bcf46c047d86ffbd841ef1eeea) [Tests #2](https://github.com/pontem-network/sp-move/commit/e981ab99544e1dee3e845e251f11f999cd540bb9) [Tests #3](https://github.com/pontem-network/sp-move/commit/49d6f1d8598aca86bf7e59f309a078cd573fcc0e) [Tests #4](https://github.com/pontem-network/sp-move/commit/b87042df7f439080bc941cf3bdfcbffbbec645ca) | We increase test coverage time to time because of active development and trying to cover new features, we also in-progress with benchmark tests. |
 
During this milestone we also moved everything to Substrate version 3, written large documentation, up testnet, so anyone can connect and try without local build, implemented CLI, started migration on a new version of Diem VM that is currently in progress.
 
Previous time you suggested:
 
> Could you allow specifying output filename for dove ct, for creating multiple Txs each with a different input. The workaround is to create multiple scripts, changing method names, but that's not very elegant. Just a suggestion 🙂
 
[Done](https://github.com/pontem-network/move-tools/commit/69629b08b100f05a739e46cda2e447b64851b50f):

```sh 
dove ct 'emit(100)' --output emit_100.mv
dove ct 'emit(200)' -f emit.move --output emit_200.mv
```

There are also updates to move-tools, like packages (because the deployment of stdlib is not painful anymore), support of `{{sender}}`, just FYI.
 
* [Move VM](https://github.com/pontem-network/sp-move-vm)
* [Move Pallet](https://github.com/pontem-network/sp-move)
* [Move Tools](https://github.com/pontem-network/move-tools)
 
