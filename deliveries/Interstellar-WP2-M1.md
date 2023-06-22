# Milestone Delivery :mailbox:



**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

> As W3F does not anymore offer payments in ETH, we switched to payment in USD in the submitted invoice

* **Application Document:** https://github.com/Interstellar-Network/Grants-Program/blob/master/applications/Interstellar-network2.md

* **Milestone Number:**  1

**Context** (optional)

The targeted performance in frames per second (fps) is related to both the performance of the garbled circuit evaluation itself in terms of gates/ms and the total number of logical gates to be evaluated per frame, which is linked to the screen resolution. The number of pixels to display is approx. close to the number of gates. 

Although it is not necessary from a security standpoint to hide the transaction message, it is essential to make it almost impossible for an attacker to identify this message in memory to modify it. See [Interstellar Secure UX/UI](https://medium.com/@jlleleu/interstellar-secure-ux-7d7f095403c9)

To do so, in the last milestone M5, we included the transaction message in the circuit itself to prevent an attacker from modifying it.It is one of the main reason why we reached only 3 fps.

Our new scheme developed from scratch based upon the following whitepapers [A New Framework for Garbled Circuits](https://www.esat.kuleuven.be/cosic/publications/article-3351.pdf) and [A New Approach to Garbled Circuits](https://eprint.iacr.org/2021/739.pdf) achieve 10x the performance of Swanky with the same circuit that include transaction message. 
 
However, for the M3, the security was relaxed and the message was not included in the circuit reducing its size to approxitmatly 80 000 gates when the current circuit size is 314 970 gates.

Although, given the resolution we want for a better User Experience, this dramatically increases the number of gates to evaluate. So, despite the number of optimizations we made to accelerate the evaluation of the logical gates, we cannot achieve the targeted 60 fps with such a big circuit.

One way to solve this problem is to include only half/or less of the transaction's message pixels in the circuit. This still prevents an attacker from modifying it, as modifying only a part of the message would be useless. We will make this modification on the next milestone. 

To approach the targeted fps objective, and anticipate the reduced size of the circuit for the next milestone, a test where  the resolution of the message displayed is reduced by half to approximate the size of the circuit in the next milestone. Knowing that the resolution will stay the same.


**Deliverables**

### Milestone 1 — New Garbling Scheme


| Number | Deliverable | Link | Notes  |
| -----: | ----------- | -----------|------------ |
| 0a. | Licence  |  APACHE 2.0, MIT | |
| 0b. | Documentation  |  [code documentation](https://book.interstellar.gg/P2M1.html#code-documentation  ) |   |
| 0c. | Testing Guide | [testing guide](https://book.interstellar.gg/P2M1.html#testing-guide) | |
| 0d. | Dockers | [Docker compose demo]() | [How to launch docker compose demo]( https://book.interstellar.gg/P2M1_demo_tutorial.html)   |
| 1. | New Garbling Scheme|link   | Test
