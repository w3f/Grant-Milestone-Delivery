# Milestone Delivery :mailbox:



**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/milestone-delivery-template.md).**  



> As W3F does not anymore offer payments in ETH, we switched to payment in USD in the submitted invoice

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Interstellar-network2.md

* **Milestone Number:**  1

**Context** (optional)
In order to improve the frames per second (fps) performance of our garbled circuit evaluation, we need to consider both the efficiency of the evaluation itself in terms of gates/ms and the total number of logical gates required for each frame, which is directly linked to the screen resolution. As a rough approximation, the number of pixels to display is proportional to the number of gates, and strictly reflects for now the number of garbled circuits outputs.

While it is not strictly necessary to hide the transaction message from a security standpoint, it is crucial to make it almost impossible for an attacker to identify and modify this message in memory. Please refer to the [Interstellar Secure UX/UI](https://medium.com/@jlleleu/interstellar-secure-ux-7d7f095403c9) article for more details.

To address this concern, in the M5 milestone, we incorporated the transaction message within the circuit itself to prevent unauthorized modifications. However, including the message in the circuit significantly increased the number of gates that need to be evaluated, resulting in a performance of only 1 fps with Fancy Garble scheme. Compared with M3, our circuit consisted of approximately 80,000 gates, while the updated circuit with the included message now contains 314,970 gates.

So, we have developed a new garbling scheme implementation, from scratch, based on the following whitepapers: [A New Framework for Garbled Circuits] (https://www.esat.kuleuven.be/cosic/publications/article-3351.pdf) and [A New Approach to Garbled Circuits](https://eprint.iacr.org/2021/739.pdf). This new scheme, proven secure against PPT adversary, achieves a major performance improvement compared to the previous method i.e., Fancy Garble, while still incorporating the transaction message within the circuit. Our optimizations, including parallelization, free gates, and especially tight memory management, contribute to this significant boost in performance.

We believe that by implementing additional optimizations and reducing the size of the circuit, we can still increase performance without sacrificing the desired high resolution and security. One approach to achieve this is to include only a portion (half or less) of the transaction message pixels in the circuit. This modification effectively prevents attackers from modifying the message, as modifying only a part of it would be futile. It is likely that we will incorporate this change in the next milestone related to our circuit design modification/optimization. This can be done on top of specific modifications to reduce cognitive load in order to achieve smoother user experience.


**Deliverables**

### Milestone 1 — New Garbling Scheme


| Number | Deliverable | Link | Notes  |
| -----: | ----------- | -----------|------------ |
| 0a. | Licence  |  APACHE 2.0, MIT | |
| 0b. | Documentation |  [documentation](https://book.interstellar.gg/2M1.html) |   |
| 0c. | Testing Guide | [testing guide](https://book.interstellar.gg/2M1.html#testing-guide) | |
| 0d. | Docker | | see additional information |
| 1. | New Garbling Scheme| [New Garbling library](https://github.com/Interstellar-Network/lib-garble-rs/tree/w3f-phase2-milestone1), [Demo tutorial](https://book.interstellar.gg/2M1_demo_tutorial.html) | Mobile offline demo  app with the new evaluator and a pre-computed circuit  generated with the new scheme |


**Additional information:**

As we prioritize the user experience and aim to showcase the FPS improvement compared to the previous milestone, there is no need for a Docker here. Instead, we provide an offline demo app to simplify the evaluation. 

However, if you'd like to test the full pipeline for this milestone, we can provide you with both a Docker and an online version of the app and the related demo tutorial.


