# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

This milestone is submitted from a different github organization than it originated.  Grant committee has been notified and an amendment is being drafted to account for this. Invoice will be sent after.  

* **Application Document:** Please, provide a link to the merged contract (the `.md` file in the [applications](https://github.com/w3f/Grants-Program/tree/master/applications) directory).

[Original Application Link](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/load_balanced_endpoints_operations.md)

* **Milestone Number:** e.g. 1

[Milestone 2](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/load_balanced_endpoints_operations.md#milestones-and-deliverables)

**Context** (optional)

This is the second deliverable out of three focusing on building an endpoint to sync whole copies of the archive DB from a content delivery network. Copies of the archive are backed up at regular intervals to AWS S3 which is connected to a cloudfront distribution. 

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. [M1](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/load_balanced_endpoints_operations.md#milestones-and-deliverables) | Create fast sync endpoint with cloudfront for uncompressed copies of full archive data. Endpoint is synced through a "source of truth" node that regularly backups the chain to S3. Additionally a manifest file is uploaded that the user can use as reference to download the contents in parallel. Instructions on how to use the endpoints conveyed in a medium post to be sent to PR department for review. | [terraform-polkadot-aws-node](https://github.com/geometry-labs/terraform-polkadot-aws-node) + [terraform-substrate-archive-cloudfront](https://github.com/geometry-labs/terraform-substrate-archive-cloudfront) | Instructions for use in cloudfront deployment repo and will be published as in medium at later date. | 

**Additional Information**

Judgement call was made to offer uncompressed copies of the chain based on experience in other chains. Leaving compressed copies along with an option to have a IPFS solution running on an unmetered VPS out at this time but could be viable at a later date. 
