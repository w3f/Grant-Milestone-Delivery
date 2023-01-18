# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Whiteflag-on-Fennel.md
* **Milestone Number:** 2

**Context**
This milestone finishes the initial version of our Rust port of the Whiteflag protocol, and creates complete application integrations for Whiteflag and IPFS. At this point, the platform is essentially in an early-alpha release state.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/fennelLabs/Fennel-Protocol/blob/main/LICENSE | Unlicense. All of our repositories include the same default UNLICENSE file. | 
| 0b. | Documentation | https://fennel-labs.notion.site/Grant-2-d6f134a5b65f4556823ae648e3b68e68, https://github.com/fennelLabs/Fennel-Protocol/wiki, https://fennellabs.com/Fennel-Protocol/doc/fennel_protocol_runtime/index.html, https://fennellabs.com/fennel-lib/fennel_lib/index.html, https://fennellabs.com/fennel-cli/fennel_cli/, https://fennellabs.com/fennel-server/fennel_server/ | Documentation is provided both as generated inline documentation and a wiki. We've begun migrating the wiki over to Notion, so some content may be subject to change. | 
| 0c.  | Testing Guide | https://fennel-labs.notion.site/Grant-2-Milestone-2-Testing-Guide-7c92ba9123c04f0cac7d00cbffc04a3b, https://fennel-labs.notion.site/Grant-2-Milestone-1-Testing-Guide-76b12a5e6e1149c2998d3e723cbaeb09, https://fennellabs.com/Fennel-Protocol/doc/fennel_protocol_runtime/index.html, https://github.com/fennelLabs/Fennel-Protocol/wiki/Testing-Milestone-3 | Automated testing, application usage, and extrinsics calls are outlined. | 
| 0d. | Docker | https://github.com/fennelLabs/Fennel-Protocol/blob/main/Dockerfile, https://github.com/fennelLabs/fennel-lib/blob/master/Dockerfile, https://github.com/fennelLabs/fennel-cli/blob/master/Dockerfile, https://github.com/fennelLabs/fennel-server/blob/master/Dockerfile, https://github.com/fennelLabs/fennel-api/blob/master/Dockerfile, https://github.com/fennelLabs/fennel-api/blob/master/Dockerfile | Docker Compose is used to run tests, benchmarks, and documentation. | 
| 0e. | Article | https://fennel-labs.notion.site/Whiteflag-on-Fennel-Protocol-f051965e700049fea452a3a5c1ed0f02 | Self-hosted announcement article describing the purpose of the material included in this milestone. This will be published after the milestone is accepted. |
| 1. | Implementation of Whiteflag Protocol | https://github.com/fennelLabs/whiteflag-rust | Our Rust port of the Whiteflag protocol is now in an early alpha state, supporting all major message types and cryptography for on-chain messages. |
| 2. | Whiteflag Integration - fennel-cli | https://github.com/fennelLabs/fennel-cli/blob/60128a34a3a1a68cc4ba2f541e8f5d75fdc2eda9/src/fennel_rpc/mod.rs#L143 | The original fennel-cli RPC has been updated to add full support for the Whiteflag protocol through the two functions listed in the referenced file. These functions will take Whiteflag messages as JSON and format them correctly for submission to the chain. |
| 3. | IPFS Support | https://github.com/fennelLabs/fennel-lib/blob/master/src/ipfs/mod.rs, https://github.com/fennelLabs/fennel-app/commit/37cc301f03ebd7eef83b589385fe566bfa777aa2#diff-299b25d6371add360dcaf87c6a21570765a9f5af351dfd10bb9ccaba5d5c8b6a | Basic IPFS support is now baked in to fennel-cli, with more complete interface-wrapped support in fennel-app. The easiest way to explore this is through the IPFS interface in fennel-app, just make sure you use either our Docker Compose setup with an IPFS node or run IPFS Desktop locally. |


**Additional Information**
Work from our last grant is included in the links provided in this submission. This is for full reference on all cooperating features, as most of our repositories were modified in some way to adjust for new architecture decisions.