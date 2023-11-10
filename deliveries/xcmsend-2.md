# Milestone Delivery :mailbox:


The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform)  
has been filled out correctly for this milestone.

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/xcmsend.md
* **Milestone Number:** 2 



**Deliverables**   
| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [LICENSE](https://github.com/XcmSend/app/blob/main/LICENSE) | All code is MIT license | 
| 0b.  | Documentation | [xcmsend main doc](https://xcmsend.github.io/) [api docs](https://xcmsend.github.io/api/index.html) | XCMSends public documentation is located here | 
| 0c. | Testing and Testing Guide | [app test](https://xcmsend.github.io/tests/index.html) [api tests](https://xcmsend.github.io/tests/api.html) | (npm run test)XCMSend and api has built in tests | 
| 0d.  | Docker | [Build the docker image locally](https://xcmsend.github.io/deployments/docker.html#build-the-docker-image-locally) | `docker pull xcmsend/xcmsend:v0.0.6` | 
| 0e. | Article | [XCM Send Milestone 2 Delivered: What’s new?](https://decentration.medium.com/xcm-send-milestone-2-delivered-whats-new-6d69b99b8b81) | Medium Article | 
|  1. |  Support 3 chains or more   | [xcmsend.github.io/teleport](https://xcmsend.github.io/teleport/index.html)   | We currently support Polkadot, HydraDx, AssetHub and Interlay | 
| 2.  | Json-rpc api | [https://github.com/XcmSend/api](https://github.com/XcmSend/api/) | `npm run buildme && npm run test` | 
| 3. | Parachain discovery | [https://github.com/XcmSend/app/](https://github.com/XcmSend/app) | /parachains section | 
| 4.  | Auto index XCM channels | [https://github.com/XcmSend/app](https://github.com/XcmSend/app) | XCMSend will auto filter the options for destination chains based on the open egress and ingress hrmp channels the source chain has. Test this by selecting assethub on the source chain and watching the destination chain options be limited. | 

