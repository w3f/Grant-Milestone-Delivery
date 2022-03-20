# Evaluation

* **Status:** Accepted
* **Application Document:** https://github.com/w3f/Open-Grants-Program/blob/master/applications/FIAT-on-off-ramp.md
* **Milestone:** 1
* **Previously successfully merged evaluation:** All by alxs

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | License | [x] | [LICENSE](https://github.com/element36-io/ebics-java-service/blob/main/LICENCE) | Apache 2.0 |
| 0b. | Documentation | [x] | [README](https://github.com/element36-io/ebics-java-service/blob/main/README.md), [Instructions on linking an account](https://github.com/element36-io/ebics-java-service/blob/main/HOWTO.md) | Very comprehensive documentation, inline as well as external |
| 0c. | Testing Guide | [x] | [TEST.md](https://github.com/element36-io/ebics-java-service/blob/main/TEST.md) | Testing improved to address feedback, although quality of tests could still be improved significantly (some hard-coded/no-ops/only a single case etc.) |
| 1. | Module: Open Banking Client | [x] | [Controller](https://github.com/element36-io/ebics-java-service/blob/main/src/main/java/io/element36/cash36/ebics/controller/EbicsController.java) | Mostly a wrapper around an existing library, though the team was able to point out the advantages of their approach and this is a building stone for the next milestones. |  
| 2. | Docker | [x] | [Dockerhub](https://hub.docker.com/r/e36io/ebics-service) | Had to resolve a small platform-related [error](https://superuser.com/questions/1413352/running-jdk-8-in-docker-suddenly-broken-on-arch-linux-with-unable-to-allocate-f/1413390#1413390), other than that it worked flawlessly. |

## General Notes

Production version with real integration showcased in a demo.

Integration tests and local testing was mentioned in the context of the application but didn't form part of the delivery, which the team reasonably argued against.

Good communication and documentation. The project was noticeably carefully structured and designed.
