# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

This milestone is submitted from a different github organization than it originated.  Grant committee has been notified and an amendment is being drafted to account for this. Invoice will be sent after.  

* **Application Document:** Please, provide a link to the merged contract (the `.md` file in the [applications](https://github.com/w3f/Grants-Program/tree/master/applications) directory).

[Original Application Link](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/load_balanced_endpoints_operations.md)

* **Milestone Number:** e.g. 1

[Milestone 2](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/load_balanced_endpoints_operations.md#milestones-and-deliverables)

**Context** (optional)

This is the second deliverable out of three focusing on building an endpoint to sync whole copies of the archive DB from a content delivery network. Copies of the archive are backed up at regular intervals to AWS S3 which is connected to a cloudfront distribution. Cloudfront distribution cache was saturated in 5 regions, US, Brazil, Australia, EU, and Tokyo on both kusama and polkadot leading to an increase in download speeds from 8-24 hours down to 1.5-2 hours. A fast sync script was built that can be included in other deployment tooling and an medium article has been written on how to use it ready for publication. 

**Deliverables**

| Number | Deliverable | Link | Notes | Engineering Time |
| --- | --- | --- | --- | --- |
| 1. [D1](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/load_balanced_endpoints_operations.md#milestones-and-deliverables) | Create fast sync endpoint with cloudfront for uncompressed copies of full archive data. Endpoint is synced through a "source of truth" node that regularly backups the chain to S3. Additionally a manifest file is uploaded that the user can use as reference to download the contents in parallel. Instructions on how to use the endpoints conveyed in a medium post to be sent to PR department for review. | [terraform-polkadot-aws-node](https://github.com/geometry-labs/terraform-polkadot-aws-node) + [terraform-substrate-archive-cloudfront](https://github.com/geometry-labs/terraform-substrate-archive-cloudfront) + [Fast sync script](https://github.com/geometry-labs/substrate-meta/blob/main/sync/archive_download.sh) | Instructions for use in cloudfront deployment repo and has been created and ready to be published in a medium.| 8 days original estimate / 11 days actual |


**Additional Information**

- IPFS solution was sidelined in favor of a s3 based solution which was then upgraded to a cloudfront solution as the egress + instance costs of hosting an IPFS solution were comparable to that of using object storage. 

- Cloudfront solution was benchmarked in multiple regions (US, EU, Japan, Brazil, Australia) and found to have initially slow download speeds but after refreshing the caches was determined to be acceptable. 

- Automated download script was included so that others can easily bootstrap their own archive nodes and could be embedded in an automated deployment solution such as with docker or ansible. 

- Judgement call was made to offer uncompressed copies of the chain based on experience in other chains. Leaving compressed copies along with an option to have a IPFS solution running on an unmetered VPS out at this time but could be viable at a later date. 

- After monitoring the bills for cloudfront, we have decided that long term we will need to move the CDN to a cheaper provider. We will be recommending some partner in the [Bandwidth Alliance](https://www.cloudflare.com/bandwidth-alliance/) and are doing cost comparisons to include in a followup report. 
