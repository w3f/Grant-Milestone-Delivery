# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/imbue_network.md#milestone-1--mvp-start
* **Milestone Number:** 1

**Context** (optional)

Milestone 1 required us to submit a project via a dedicated UI. Each project had to have a dedicated ID
There is also [documentation](https://github.com/imbuenetwork/imbue) detailing how to add a project via Polkadot JS

The team has been mainly focused on getting the collator part done for both milestones as we felt that was the more difficult part. We are proud of what we have achieved given the time spent.

The only missing point is 0e which is an article explaining how to go through the UI. We are planning to do this as soon as we complete the UI for voting/contributing as we feel it will make sense to our community


However, that said the core functionality of creating a project, defining its milestones as well as contributing and having the funds unloked based on votes is complete

We also did a tremendous amount of work to make it seamless to launch the collator using docker/polkadot-js so every single member of our community can launch the entire chain with very little technical knowledge


Finaly, We have shared a demo of the full flow [here](https://imbuenetwork.medium.com/imbue-mvp-demo-33d6c3e29856)



**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a (milestone 2) | CI/CD |https://github.com/ImbueNetwork/imbue/blob/main/.github/workflows/collator_actions.yml| While this pipeline only ensures the code can be built, we will be expanding it to include deployment to an environment as soon the UI prototype is done |
| 0a | licence |License| https://github.com/ImbueNetwork/imbue | 
| 0b  | DAPP |The UI to allow you to submit proposals| https://github.com/ImbueNetwork/prototype | 
| 0c  | Documentation | The main repo has a guide on launching from source | https://github.com/ImbueNetwork/imbue/blob/main/scripts/docker-compose.yml| 
| 0d  | Docker |The main repo has a polkadot-launch docker-compose file to get the entire infrastructure up, including polkadotJS| https://github.com/ImbueNetwork/prototype |

| 1  | Grants Pallet | Renamed to proposals, has alot of the functionality required for milestone 2.  | https://github.com/ImbueNetwork/imbue/blob/main/pallets/proposals/src/lib.rs#L187| 


**Additional Information**
> We also completed some of Milestone 2 points, we would like to submit milestone 1 as we are very keen on joining substrate builders programme and a successful milestone delivery will strongly help our application

We are now in a position where we are thinking how we can mint on statemint, and maybe use its stable currencies when it is available.

We also hope to work with the Web3 foundation and Parity - through the substrate builders programme - to get some guidance to how voting should work when working with stable currencies as well as when a round is considered successful. i.e. hitting 80% of required funding vs 120%

We also know we require to add tests as well as benchmarks, there is already a dedicated [ticket](https://sharing.clickup.com/v/4-54644340-2/t/h/1ufupfj/b653e1b55c26828) that's also part of the public board, which incidently is also part of milestone 2

Overall, we have done alot of work towards the milestones and we reached a point where we could benefit with some guidance to ensure what we are building is what is best for the entire ecosystem
