# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**  

* **PR Link:**

https://github.com/w3f/Open-Grants-Program/pull/98

* **Milestone Number:** 1

| Number | Deliverable | Specification | Status |
| ------------- | ------------- | ------------- | ----- |
| 1. | [Documentation](https://github.com/Cerebellum-Network/private-standalone-network-node#documentation) and [basic tests](https://github.com/Cerebellum-Network/private-standalone-network-node/blob/dev/docs/deployment.md) | We will provide README files inside repositories with instructions of how to build, deploy and test. |  Done |
| 2.  | [Ink! based Smart Contract Standard](https://github.com/Cerebellum-Network/cere-enterprise-smart-contracts/blob/master/cere01/specification.md) | We are introducing a new smart contract standard which allows assets adaptable for real businesses to be programmatically created, managed, owned, transferred, and traded. It provides a template for establishing a foundation to capture common enterprise utility, and can be easily extended.. This standard is purposefully being built on top of Parity’s ink! Smart contract framework. | Done |
| 2a.  | [Enterprise Derivative Assets](https://github.com/Cerebellum-Network/cere-enterprise-smart-contracts/blob/master/cere01/specification.md) | Derivative Asset support for the enterprise needs, with attributes such as expiration, limit on transfers, longitudinal unlocking, redemptions, etc | Done |
| 2b.  | [Manual Direct Wallet Transfer](https://github.com/Cerebellum-Network/private-standalone-network-node/blob/dev/docs/direct_wallet_transfer.md) | Support for most Substrate/Polkadot based wallet applications. Smart Contract transfer function allows for the directly wallet-signed transfer of assets from one application/user address to the other. | Done |
| 2c.  | [Programmatic Asset Transfer](https://github.com/Cerebellum-Network/private-standalone-network-node/blob/dev/ext20/lib.rs#L100) | Smart Contract transfer function allows for the programmatic/automated transfer of tokens from one application/user via smart contract to the other. | Done |
| 2d.  | [Asset Restrictions](https://github.com/Cerebellum-Network/private-standalone-network-node/blob/dev/docs/asset_restrictions.md) | Support for the locking of assets by time or by issuer permission, support for expirations and potentially invalidations. | Done |
| 3.  | [Smart Contract Tests](https://github.com/Cerebellum-Network/private-standalone-network-node/blob/dev/ext20/lib.rs#L196) | The Smart Contract implementation will include unit tests, we will be using the off-chain test environment that ink! provides. | Done |