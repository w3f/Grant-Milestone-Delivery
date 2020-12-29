# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**  

* **PR Link:** [Pontem Network](https://github.com/w3f/Open-Grants-Program/pull/138). 
* **Milestone Number:** [Milestone #1](https://github.com/w3f/Open-Grants-Program/blob/master/applications/pontem.md#milestone-1---pre-alpha-version-of-move-pallet).

See ["How to deploy module and execute script"](https://youtu.be/IJLEbk4Sx7Y) on Youtube.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0 - 2. | Crates developing/replacement | [Move VM](https://github.com/dfinance/sp-move-vm/commits/master) [Petgraph](https://github.com/dfinance/petgraph/commits/master) [Indexmap](https://github.com/RIg410/indexmap/commits/master)   | During 0 - 2 tasks we forked Libra Move VM, replaced all Rust std usages with sp_std, forked some Rust crates and did the same. See commits by [@RIg410](https://github.com/RIg410) and [@fzzr-](https://github.com/fzzr-). | 
| 3. | Move Pallet | [Move Pallet](https://github.com/dfinance/sp-move/tree/master/pallets/sp-mvm) | Move VM pallet inside substrate node template, currently dry-run. |
| 4. | Addresses support | [SS58 Support](https://github.com/dfinance/sp-move/commit/45a2cfb4d33db5f4a5792b43de313b313d3ec3ca#diff-ca0cca5ccd74d8e068826c35fd076cac894c357c184a1cd8177a966e9d3be207) | Supports ss58 addresses in transactions/modules publishing. |
| 5. | Compiler | [SS58 Support](https://github.com/dfinance/move-tools/commits/master) | Support SS58 addresses in Dove compiler. |
| 6. | Unit-tests | [Move Pallet](https://github.com/dfinance/sp-move/tree/master/pallets/sp-mvm/tests) [SS58](https://github.com/dfinance/move-tools/blob/55c742795d7b3f240817712c2d66de17db1f5b3a/lang/src/compiler/ss58.rs#L65) [Move VM](https://github.com/dfinance/sp-move-vm) | We covered the pallet with basic unit tests, same with VM and Dove. So you can check links, but it's not everything, you also can go over code. |
| 7. | Docker | [Docker Compose](https://github.com/dfinance/sp-move/pull/4/commits/663335a17badeb589a4dd54b3dde93255555d1e3) | Docker-Compose for quick start. |
| 8. | Documentation | [Move Pallet](https://github.com/dfinance/sp-move/blob/master/README.md) [Move VM](https://github.com/dfinance/sp-move-vm/blob/master/README.md) [Dove](https://github.com/dfinance/move-tools/blob/master/README.md#dove) | Basic docs include: how to run VM, compile scripts/modules, execute/publish it. |

**Other notes**

We are moving forward, some work done around #2 milestones. We are reporting that progress just because it's nice to have. We are going to report full #2 milestone, later. 

List of #2 milestone **in progress** tasks:

* Currently in our examples we allow only to pass U64 arguments, but we support for other kinds of arguments already, just we are looking how to make it possible to send transactions containing unknown types from the UI (otherwise it's ultra hard to demo it).
* We have ready events processing (VM -> Pallet). 
* We have an alpha version of storage implemented using LCS (migrating to Polkadot codec seems too expensive for us).
* We already have a publish module transaction ready, same with execute transaction.
  
