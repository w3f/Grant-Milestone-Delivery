# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ocelloids_xcm_monitoring_service.md
* **Milestone Number:** 1

**Context**
  
The XCM Monitoring Server is an application designed to monitor Cross-Consensus Message Format (XCM) program executions across different consensus systems. Users can easily configure specific blockchain networks for monitoring and create subscriptions to notifications based on origin and destination chains, as well as sender addresses, via a convenient web API. Noteworthy features include real-time execution monitoring, dynamic subscription updates without the need for restarts, and support for light clients. It also provides comprehensive HTTP APIs for seamless interaction and management, making it a powerful tool for monitoring and managing cross-chain interactions.

**Deliverables**

| Number  | Deliverable   | Link | Notes |
| ------- | ------------- | ------------- |------------- |
| **0a.** | License | https://github.com/sodazone/xcm-monitoring/blob/main/LICENSE | |
| **0b.** | Documentation | <ul><li>README: https://github.com/sodazone/xcm-monitoring/blob/main/README.md</li><li>Administration Guide: https://github.com/sodazone/xcm-monitoring/blob/main/guides/ADMINISTRATION.md</li><li>Subscription API Docs: https://github.com/sodazone/xcm-monitoring/blob/main/guides/SUBSCRIPTION.md</li></ul> | |
| **0c.** | Testing and Testing Guides | <ul><li>Polkadot Testing Guide: https://github.com/sodazone/xcm-monitoring/blob/main/guides/TESTING-POLKADOT.md</li><li>Zombienet Testing Guide: https://github.com/sodazone/xcm-monitoring/blob/main/guides/TESTING-ZOMBIENET.md</li> <li>Unit Tests: https://github.com/sodazone/xcm-monitoring/blob/main/README.md#testing</li></ul> |
| **0d.** | Docker        | <ul><li>Dockerfile: https://github.com/sodazone/xcm-monitoring/blob/main/Dockerfile</li><li>Docker Hub: https://hub.docker.com/r/sodazone/xcm-monitoring</li><li>Github Container Registry: https://github.com/sodazone/xcm-monitoring/pkgs/container/xcmon</li></ul> |
| 1. | XCM Monitoring Server | https://github.com/sodazone/xcm-monitoring/tree/main/src | |
| 2. | Management Tools | https://github.com/sodazone/xcm-monitoring/tree/main/src/services/admin | See 0b. Administration Guide |
