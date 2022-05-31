# Evaluation

- **Status:** Accepted
- **Application Document:** private
- **Milestone:** 2
- **Previously successfully merged evaluation:** All by alxs

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 1.     | Operation of "source of truth" node to send copies of the chain data for kusama and polkadot to persistent layers on a schedule |<ul><li>[ ] </li></ul> | [terraform-polkadot-aws-node](https://github.com/geometry-labs/terraform-polkadot-aws-node) + [Fast sync script](https://github.com/geometry-labs/substrate-meta/blob/main/sync/archive_download.sh) | sync script currently does not terminate [fixed]
| 2.     | Content delivery network (cloudfront) for distributing compressed copies of the chain data |<ul><li>[x] </li></ul> | [terraform-substrate-archive-cloudfront](https://github.com/geometry-labs/terraform-substrate-archive-cloudfront) | Likely not cost effective and more expensive than the team initially estimated
| 2a.    | Alarms when for when download quotas are reached (eg each TB of download) |<ul><li>[ ] </li></ul> | 

## General Notes

The reliability of this setup is questionable as the initial download speeds proved to be unreasonable, with the download duration of a full archive copy of the Kusama chain estimated to reach anywhere from 24-60 hours.
This problem appears anywhere the data is not cached on Cloudfront already, which means it appears in every different Cloudfront region.
Furthermore, the problem reappears whenever the cache is flushed.
The team didn't report back on the number of regions Cloudfront is split into or the expected persistence period of the cached data.
As a compromise, they instead saturated the cache in 5 regions: US, Brazil, Australia, EU, and Tokyo.
A onetime test showed the download speed to have indeed improved to very reasonable levels in the regions tested.

Initially, the process to download a consistent full copy was rather cumbersome and couldn't be used in automated node deployment as it required manually inspecting the manifest and ensuring the data was consistent.
To address this, the team provided the script referenced above, which after a few iterations seemed to work reliably.
