# Evaluation

* **Status:** Accepted
* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/InvArch.md
* **Milestone:** 2
* **Previously successfully merged evaluation:** All by cruikshankss

### Deliveries (all accepted)

| Number | Deliverable | Link | Notes | 
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [GPLv3](https://github.com/InvArch/InvArch-Pallet-Library/blob/main/LICENSE) | Open-Source |
| 0b. | Documentation | https://github.com/InvArch/InvArch-Frames#readme | Further Documentation can be found through the repository's README files. |
| 0c. | Testing Guide | [INV4 Pallet Calls](https://gist.github.com/arrudagates/877d6d7b56d06ea1a941b73573a28d3f) & [INV4-GIT Testing Guide](https://github.com/InvArch/INV4-Git#readme) | Additional walkthroughs & guides can be found in the article (3). |
| 0d. | Docker | https://github.com/InvArch/InvArch-Node/blob/main/dockerfile | |
| 1a. | Pallet_ipl | https://github.com/InvArch/InvArch-Frames/blob/main/INV4/pallet-inv4/src/ipl.rs | Please see: [Pallet INV4](https://github.com/InvArch/InvArch-Frames/tree/main/INV4). `pallet-ipl` was restructured to `pallet-inv4` & includes both IP Sets, IP licenses, & IP Tokens. This was done in order to utilize on-chain storage more efficiently, versus having multiple interdependent Pallets. |
| 1b. | Pallet_ipt | https://github.com/InvArch/InvArch-Frames/blob/main/INV4/pallet-inv4/src/ipt.rs | Please see: [Pallet INV4](https://github.com/InvArch/InvArch-Frames/tree/main/INV4). `pallet-ipt` was restructured to `pallet-inv4` & includes both IP Sets, IP licenses, & IP Tokens. This was done in order to utilize on-chain storage more efficiently, versus having multiple interdependent Pallets. |
| 2. | INV4-Git middleware | https://github.com/InvArch/INV4-Git | Please see: [Demo Video](https://www.youtube.com/watch?v=wTfi9B6Yi9A&t=5s) |
| 3. | Article | https://medium.com/@invarch/invarch-realizes-on-chain-ip-assets-licensing-git-version-control-under-a-web3-foundation-grant-99e96675c514 | Videos included in Article. The current link is a draft link. When/if this submission is approved, the article will be published to the [InvArch blog on Medium](https://invarch.medium.com/) |

# Additional Notes

Thank you very much for adding the very detailed testing guide to your GH readme. I think it will serve you well going forward so others can easily use your code.

Your guide was extremely clear & flawless and (on my end), after I did `rustup update` and `rustup target add wasm32-unknown-unknown`, I was able to store my test GH repo on-chain and clone it! Very innovative way of allowing me to use my own wallet so I could test it in my CLI and handle the proper git credentials so easily. By the way, great job building the git InvArch CLI tooling. 

In general, congratulations on completing your grant & great job utilizing IPFS and building your own pallets for substrate for a very practical use-case. 

I appreciate the [classification scheme](https://github.com/InvArch/InvArch-Frames/tree/main/INV4) you've clearly labelled regarding your software architecture. 

Best of luck finding product-market fit with your InvArch decentralized storage invention! It can be notoriously difficult to find sustainable incentives/business model with IPFS, but it seems you are well on your way!


