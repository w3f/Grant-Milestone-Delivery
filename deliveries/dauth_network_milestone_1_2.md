# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/dauth_network.md
* **Milestone Number:** 1 and 2


**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

**Milestone 1 and 2**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/DAuth-Network/instant-proof/blob/main/LICENSE | Apache License | 
| 0b.  | Documentation | https://openid3.gitbook.io/openid3-docs/openid3/introduction | Documentations and project introductions | 
| 0c.  | Testing Guide | https://docs.google.com/document/d/1DiI4KGjeBw3-y4H0ZQGd7YsnQ_XoweWkfbmV2lQD66Q/edit?usp=sharing | Declared how to run the test and how to test on UI| 
| 0d.  | Docker | docker.io/ksdev2023/ip01 | The Docker image to run a server | 
| 1. | SDK | [SDK usage](https://openid3.gitbook.io/openid3-docs/developers/decentralized-authentication-sdk) and [SDK code](https://github.com/DAuth-Network/dauth/blob/main/packages/core/README.MD) | Web JS SDK to generate proofs | 
| 2.  | Core Protocol | https://github.com/keysafe-protocol/keysafe-app/blob/polkadot/README.md | The Key management part, including `nodeRegister` `userRegister` `userAuthentication` and `keyRecovery` functions are based on Keysafe | 
| 3.  | Smart Contract | https://github.com/DAuth-Network/instant-proof/tree/polka-grant/contracts | The contract that register proven node | 
| 4.  |  TEE Implementation | https://github.com/DAuth-Network/instant-proof/tree/polka-grant | Implement TEE as a prover |
| 5.  |  Web Server | https://github.com/DAuth-Network/instant-proof | Implement a prover backend. (We have already completed the development of the ZK-based backend. This means the TEE version will be discontinued.) |
| 6.  |  Support mainstream authentication methods | https://zk-demo.openid3.xyz/ | We supported Google, Github and Twitter in this interface | 


**Additional Information**
> Any further comments on the milestone that you would like to share with us.

1. We are currently using Plonky2 + gnark to achieve client-side proof and server-side aggregation. Due to the extremely low gas cost, we have become the Proof of Humanity attestation provider with the most users in the Linea ecosystem (400K users used openid3 for PoH). Here is the PoH link: https://auth.openid3.xyz/

2. For the item " Polkadot.js | Add in encryption/decryption functionality to `@polkadot/keyring` and `@polkadot/extension` ", it is the deliverable of Keysafe. So it's not included in this delivery.

