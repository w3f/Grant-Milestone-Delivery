# Milestone Delivery :mailbox:



**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

> As W3F does not anymore offer payments in ETH, we switched to payment in USD in the submitted invoice

* **Application Document:** https://github.com/Interstellar-Network/Grants-Program/blob/master/applications/Interstellar-network2.md

* **Milestone Number:**  1

**Context** (optional)

The targeted performance in frames per second (fps) is related to both the performance of the garbled circuit evaluation itself in terms of gates/ms and the total number of logical gates to be evaluated per frame, which is linked to the screen resolution. The latter is defined by the security model, one of its objectives being to hide sensitive information such as pinpad topology, one-time codes, and semi-secret transaction messages in memory. Although it is not necessary from a security standpoint to hide the transaction message, it is essential to make it almost impossible for an attacker to identify this message in memory to modify it. See [Interstellar Secure UX/UI](https://medium.com/@jlleleu/interstellar-secure-ux-7d7f095403c9)


We reached with our new scheme developed from scratch based upon the following whitepapers [A New Framework for Garbled Circuits](https://www.esat.kuleuven.be/cosic/publications/article-3351.pdf) and [A New Approach to Garbled Circuits](https://eprint.iacr.org/2021/739.pdf) performance comparable to JustGarble i.e the scheme we used for the milestone M3 from the previous grant. However, for this milestone, the security was relaxed and it was possible for an attacker to identify and modify the pixels of the messages. We now include this message in the circuit itself to prevent an attacker from modifying it.

Although, given the resolution we want for a better User Experience, this dramatically increases the number of gates to evaluate. So, despite the number of optimizations we made to accelerate the evaluation of logical gates, we cannot achieve the targeted 60 fps. One way to solve this problem is to include only half/or a bit less of the transaction's message in the circuit. This still prevents the attacker from modifying it as it is useless to modify only a part of it. We will make this modification on the next milestone. To approach the targeted fps objective, and anticipate the reduced size of the circuit, we just reduce the size of the message display from 640x360 by half to approximate the size of the modified circuit in the next milestone.


**Deliverables**

### Milestone 1 — New Garbling Scheme


| Number | Deliverable | Link | Notes  |
| -----: | ----------- | -----------|------------ |
| 0a. | Licence  |  APACHE 2.0, MIT | |
| 0b. | Documentation  |  [code documentation](https://book.interstellar.gg/P2M1.html#code-documentation  ) |   |
| 0c. | Testing Guide | [testing guide](https://book.interstellar.gg/P2M1.html#testing-guide) | |
| 0d. | Dockers | [Docker compose demo]() | [How to launch docker compose demo]( https://book.interstellar.gg/P2M1_demo_tutorial.html)   |
| 1. | New Garbling Scheme|link   | Test
