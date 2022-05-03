# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/on-chain-cash.md
* **Milestone Number:** 1

**Context** (optional)
In this milestone we've developed an Ink! smart contract, that executes logic for coupons operations: mint/burn coupons, store coupons, register and validate minted coupons, manage liquidity pool. In milestone 2 it will be connected with CLI tools for coupon lifecycle management and a user UI for coupon redemption.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. :heavy_check_mark: | License | [LICENSE](https://github.com/bsn-si/ocex-smartcontract/blob/main/LICENSE) | Apache 2.0 license |
| 0b. :heavy_check_mark: | Documentation | [Readme.md](https://github.com/bsn-si/ocex-smartcontract#design-and-features) | Explaining basic features |
| 0c. :heavy_check_mark: | Testing Guide | [Readme.md](https://github.com/bsn-si/ocex-smartcontract#how-to) | How To guide |
| 1. | Liquidity pool management methods | [See contract](https://github.com/bsn-si/ocex-smartcontract/blob/7946707a23ab9a7c95baeb9d3d9f8c34baee9b6b/lib.rs#L219) | To top up contract's balance an owner just transfers fund to it's address. Other operations (e.g. withdrawal, balance check up) are described in the contract | 
| 2. | Coupon data storage | [See contract](https://github.com/bsn-si/ocex-smartcontract/blob/7946707a23ab9a7c95baeb9d3d9f8c34baee9b6b/lib.rs#L60) | Storage contains coupon's sr25519 public keys and vlaues as well as activation info | 
| 3. | Coupon registration | [See contract](https://github.com/bsn-si/ocex-smartcontract/blob/7946707a23ab9a7c95baeb9d3d9f8c34baee9b6b/lib.rs#L97) | Only the owner can register new coupons | 
| 4. | Coupon liquidation | [See contract](https://github.com/bsn-si/ocex-smartcontract/blob/7946707a23ab9a7c95baeb9d3d9f8c34baee9b6b/lib.rs#L236) | Registered but unused coupons can be liquidated by the owner and reserved balance will become spare | 
