# Evaluation

- **Status:** Rejected
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/liberland.md
- **Milestone:** 2
- **Kusama Identity:** Ha27MB4gKH36ieRPa1T1ASqhUz4sVxMoVmK7o5CS6tXDqjW
- **Previously successfully merged evaluation:** https://github.com/UniversalDot/Grant-Milestone-Delivery/blob/master/evaluations/crossbow_1_jkl.md

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>|[Link](https://github.com/liberland/liberland_substrate/blob/main/LICENSE-MIT)| License is Ok. The MIT license is also referenced in their pallets.|
| 0b.  | Documentation |<ul><li>[x] </li></ul>|[Link](https://liberland-1.gitbook.io/wiki/v/public-documents/blockchain/for-developers-and-testers)| Good inline documentation in pallets. It contains dispatchable functions, configs, etc. The Gitbook is also good, but can be further imrproved. See 1. in General Notes.|
| 0c. | Testing Guide |<ul><li>[ ] </li></ul>|...|I can see you have created tests for your pallets. Please include a short guide on how to run these tests. Incude this guide in your README document.|
| 0d.  | Docker |<ul><li>[x] </li></ul>|[Link](https://hub.docker.com/layers/liberland/blockchain-node/latest/images/sha256-e59f697c8df37b6c8c509e1c949cb23c052b4e95463f087abb044d4873a791b5?context=explore)|Docker Image works. See 3. In General notes. |
| 0e. | Article |<ul><li>[x] </li></ul>|[Link](https://docs.google.com/document/d/1IiOEka3eZOOyM7GuT5aVJYihdSz3qYbWqwcTNS_Pvqg/edit#heading=h.gvgdsh4wfciv)| Draft is ok.|
| 1.  | Land owner Pallet |<ul><li>[ ] </li></ul>|[Link](https://github.com/liberland/liberland_substrate/tree/main/frame/nfts)| Your pallet is almost exact fork from pallet-nfts. You have made small modificaiton to add citizenship information. In the original application you state you will use geo coordination but I don't see this reflected in code. Can you make the requirements for this pallet more explicit?|
| 2 | Metaverse integration Pallet |<ul><li>[ ] </li></ul>|...| Based on the submitted requirements in your application [document](https://github.com/w3f/Grants-Program/blob/master/applications/liberland.md), you have not provided a pallet implementation. I understand that requirements can change during development, but these changes have to be reflected back in the original requirements document.  |
| 3 | Company Registration Pallet |<ul><li>[x] </li></ul>|[Link](https://github.com/liberland/liberland_substrate/blob/main/frame/registry/src/lib.rs)| Good. But it seems to be inspired from the original substrate [Registry pallet](https://github.com/liberland/liberland_substrate/blob/main/frame/registry/src/lib.rs)|



## General Notes

1. In your documentation [here](https://liberland-1.gitbook.io/wiki/v/public-documents/blockchain/for-developers-and-testers/testing_guide), you are including link to google doc, instead of having the information available on the wiki. Consolidate your documentation in one place so you have one source of truth. 

2. In your Testing Guide, you are including some keys together with the mnemonics used to derive the keys. Make sure you keep all key information interally and preferably private, even if you are using for testing accounts. 

3. Docker image works. It seems we can run your node in --dev mode and from chain-spec. Maybe you can include this in your documentation. 

```
2023-04-14 13:26:06 Substrate Node    
2023-04-14 13:26:06 ✌️  version 3.0.0-dev-unknown    
2023-04-14 13:26:06 ❤️  by Parity Technologies <admin@parity.io>, 2017-2023    
2023-04-14 13:26:06 📋 Chain specification: Development    
2023-04-14 13:26:06 🏷  Node name: spotted-wool-7161    
2023-04-14 13:26:06 👤 Role: AUTHORITY    
2023-04-14 13:26:06 💾 Database: RocksDb at /tmp/substrateAV9b9f/chains/dev/db/full    
2023-04-14 13:26:06 ⛓  Native runtime: Liberland-8 (liberland-node-0.tx1.au10)    
2023-04-14 13:26:09 [0] 💸 generated 1 npos voters, 1 from validators and 0 nominators    
2023-04-14 13:26:09 [0] 💸 generated 1 npos targets    
2023-04-14 13:26:10 You're running on a system with a broken `madvise(MADV_DONTNEED)` implementation. This will result in lower performance.    
2023-04-14 13:26:27 🔨 Initializing Genesis block/state (state: 0x12f5…4c6f, header-hash: 0x9f82…9441)    
2023-04-14 13:26:27 👴 Loading GRANDPA authority set from genesis on what appears to be first startup. 
```

###  Concluding Remarks

Based on my evaluation, you have not provided all the deliverables as described in you application. Thus I have to reject this delivery. My advise is to update your initial application with the exact deliverables that you are delivering for this milestone, before it can be accepted. 

Furthermore, a lot of your pallets are derivative work from already existing pallets (such as registry, nfts) and I would expect more original work for grant submission. 

Note that this evaluation is not binding since I do not work of Web3 Foundation, so the Web3 team can accept your delivery in its current state.

