# Milestone Delivery :mailbox:



**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/milestone-delivery-template.md).**  


> FIAT payment i.e. USD

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Interstellar-network2.md

* **Milestone Number:** 2

**Context** (optional)

We have updated our current display circuit to enhance user experience by reducing the cognitive load required to read the screen. This means less time for the brain to decode or read the digits displayed. This has been achieved by introducing specific sub-circuits that handle a set of probabilities for displaying each segment for every frame. In this demonstration, we present the transaction validation screen with varied probabilities for segment display.

To simplify the evaluation, we utilize various apps in offline mode. Each app is assigned a specific probability that reflects a different cognitive load for the users. This approach will allows us to adjust the difficulty level dynamically for each user interaction.
> The mandatory English language requirement has been resolved and is no longer in effect.

Looking ahead, we plan to leverage the new capabilities of the display circuit to fine-tune the balance between cognitive load and security. More crucially, we aim to define a unique user's behavioral biometric profile. This profile will be based on the user's cognitive load experiences in conjunction with other behavioral biometrics, such as the timing of touch inputs for user's response.

Please refer to the [Interstellar Decentralized Authentication](https://medium.com/@jlleleu/interstellar-secure-ux-7d7f095403c9) article for more details on the security model.



**Deliverables**

### Milestone 2 — New Circuit Design


| Number | Deliverable | Link | Notes  |
| -----: | ----------- | -----------|------------ |
| 0a. | Licence  |  APACHE 2.0, MIT | |
| 0b. | Documentation |  [documentation](https://book.interstellar.gg/2M2.html) |   |
| 0c. | Testing Guide | [testing guide](https://book.interstellar.gg/2M2.html#testing-guide) | |
| 0d. | Docker | | see additional information |
| 1. | New Circuit| [New Circuit design](https://github.com/Interstellar-Network/lib_circuits/tree/main/circuit-gen-rs/data/verilog#new-circuit-diagrams), [Demo tutorial](https://book.interstellar.gg/2M2_demo_tutorial.html) | Mobile offline demo apps, each with the new circuit and a pre-computed display circuit generated with a defined probability to display segments |
|2. | Light security screen| [Demo tutorial](https://book.interstellar.gg/2M2_demo_tutorial.html) | we use high probability to display segments i.e. 0.9 this non-screenshot proof version will be used later with our adaptive security framework|

**Additional information:**

As we prioritize the user experience and aim to showcase the readability improvement compared to the previous milestone, there is no need for a Docker here. Instead, we provide offline demo apps to simplify the evaluation. 

However, if you'd like to test the full pipeline for this milestone, we can provide you with both a Docker and an online version of the app and the related demo tutorial.

