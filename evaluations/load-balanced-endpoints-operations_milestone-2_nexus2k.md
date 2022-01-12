# Evaluation

- **Status:** Accepted
- **Application Document:** [link](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/load_balanced_endpoints_operations.md) 
- **Milestone:** 2
- **Kusama Identity:** PHILIPP W3F
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 1. [D1](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/load_balanced_endpoints_operations.md#milestones-and-deliverables) | Create fast sync endpoint with cloudfront for uncompressed copies of full archive data. Endpoint is synced through a "source of truth" node that regularly backups the chain to S3. Additionally a manifest file is uploaded that the user can use as reference to download the contents in parallel. Instructions on how to use the endpoints conveyed in a medium post to be sent to PR department for review. | <ul><li>[x] </li></ul> | [terraform-polkadot-aws-node](https://github.com/geometry-labs/terraform-polkadot-aws-node) + [terraform-substrate-archive-cloudfront](https://github.com/geometry-labs/terraform-substrate-archive-cloudfront) | Repos look reasonable with recent activity. |

## General Notes

Uncompressed archives of full polkadot DB found at https://substrate.archive.aws.geometry.io/polkadot_manifest.txt. All promised deliverables found.
