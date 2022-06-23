# Evaluation

- **Status:** Accepted
- **Application Document:** private
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by alxs

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 1a.     | Extend API to include both Kusama and Polkadot |<ul><li>[x] </li></ul> | wss://polkadot.geometry.io, wss://kusama.geometry.io | 
| 1b.     | Operation of V1 endpoint on AWS in 2 regions with geo-routing through cloudflare |<ul><li>[x] </li></ul> | [status page](https://status.substrate.geometry.io/) | Cloudflare geo-routing confirmed, see [previous evaluation](https://github.com/w3f/Grant-Milestone-Delivery/pull/329/files)
| 2a.     | Centralized monitoring and logging integration |<ul><li>[x] </li></ul> | [substrate-meta](https://github.com/geometry-labs/substrate-meta), [log interceptor](https://github.com/geometry-labs/websocket-logger), [kibana code](https://github.com/geometry-labs/substrate-meta/tree/main/elasticsearch)
| 2b.     | Tuned metrics and logs populating Grafana and Kibana dashboards |<ul><li>[x] </li></ul> | [Grafana US](https://grafana.substrate.us-west-2.aws.geometry.io/), [Grafana EU](https://grafana.substrate.eu-west-1.aws.geometry.io/), [Kibana](https://kibana.us-west-2.aws.geometry.io/), [Telemetry](http://telemetry.substrate.geometry.io/#/0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3)
| 3a.     | Aggregated metrics from prometheus to feed high level status page endpoints |<ul><li>[x] </li></ul> | [prometheus rules](https://github.com/geometry-labs/substrate-meta/tree/main/prometheus)
| 3b.     | Status page for high level healthchecks on each zone |<ul><li>[x] </li></ul> | [status page](https://status.substrate.sudoblock.io/), [repo](https://github.com/sudoblockio/substrate-status-page)

## General Notes

Grant was delayed by over a year and had to undergo two amendments after delivery due to changes in scope, budget and entity.

The endpoints delivered in this milestone were [added](https://github.com/polkadot-js/apps/pull/6477) to polkadot.{js} apps on November 4 and [removed again](https://github.com/polkadot-js/apps/pull/6746) on December 28 by the community due to them being reported as having "never been operational".
The team released a [post-mortem and opened](https://github.com/polkadot-js/apps/pull/6897) a PR to add them back on January 29 after it was brought to their attention.
Unfortunately, the PR wasn't merged in time for the reliability of the improved setup when deployed on polkadot.js to be taken into account in this evaluation.

The endpoints work fine and are even very responsive for standalone usage.
