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

**Milestone 1**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Smart contract |  5EoHd9mVxEEE8gWQp9s5TEc2hoP57W7QBcRvXQTafsutrED6 (Rococo testnet) | ...| 
| 2.  | TEE implementation | https://github.com/DAuth-Network/instant-proof/tree/polka-grant | ...| 
| 3.  | Web SDK | https://github.com/DAuth-Network/dauth.git | ...| 

**Milestone 2**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Documentation | https://openid3.gitbook.io/openid3-docs/openid3/introduction | ...| 
| 2.  | Testing Guide | https://docs.google.com/document/d/1DiI4KGjeBw3-y4H0ZQGd7YsnQ_XoweWkfbmV2lQD66Q/edit?usp=sharing | ...| 
| 3.  | SDK |  https://openid3.gitbook.io/openid3-docs/developers/decentralized-authentication-sdk | ...| 
| 4.  |  Support mainstream authentication methods | https://zk-demo.openid3.xyz/ | ...| 


**Additional Information**
> Any further comments on the milestone that you would like to share with us.

We are currently using Plonky2 + gnark to achieve client-side proof and server-side aggregation. Due to the extremely low gas cost, we have become the Proof of Humanity attestation provider with the most users in the Linea ecosystem (400K users used openid3 for PoH).

Here is the PoH link: https://auth.openid3.xyz/