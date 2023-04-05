# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**

- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/polkadot-contract-wizard.md

- **Milestone Number:** 1

**Context**

<p align="center">
  <img src="https://polkadot-contract-wizard-proto-polkadot.vercel.app/assets/architecture.png" />
</p>

The frontend is a NextJS application that interacts with the backend through a REST API. The backend is a Rust application that compiles the contracts and stores them in a database. The database is a MongoDB instance that stores the compiled contracts and the deployed contracts information.

**Milestone 1**

Based on the initial interface design, we identified several opportunities for improvement. We incorporated elements such as a modern color scheme, improved typography, and a more intuitive layout to create a visually appealing and user-friendly interface. After completing the design phase, we moved on to the development phase, where we created the frontend interface based on the design specifications. We optimized the code to ensure the interface was responsive, accessible, and compatible with different devices and web browsers.

To achieve the goal of enabling new users to create their own contracts in a few steps, the wizard provides them a set of options to customize and create tokens based on PSP. We implemented the logic to compose the contracts based on the selection made. Once the user has completed the wizard, they can preview the contract and copy the generated code. To improve the readability and ease of understanding of the smart contract code, we added syntax highlighting to the displayed code.
We implemented the wallet connection using the Polkadot-JS API library. The user can connect their wallet to the wizard and select the account they want to use.

**Milestone 2 (Work in Progress)**

Once the generated contract is sent to the backend it will be compiled. In the meantime, the user has to fill in the required fields of the contract constructor and will be able to deploy it to any chain that supports the contracts pallet.
We dockerized the application to simplify the deployment process and ensure consistency across different environments. We created a Dockerfile that specified the dependencies and configuration of the application, built a Docker image from the Dockerfile, and deployed the image to a Docker container.

A quick note: we understand that the current version of the wizard may not be fully functional. However, we want to assure that we have been working in parallel on the next milestone (Milestone 2) to address this issue. The Milestone 2 will introduce an on-demand contract compilation service and a database that will store compiled contracts to enhance user experience by reducing compilation time. Additionally, we will store deployed contracts information in the database to allow users to keep track of their deployments. We are confident that these new features will not only improve functionality but also provide a more streamlined and user-friendly experience.

**Deliverables**

[Milestone 1 deployment preview](https://polkadot-contract-wizard-fbukarssr-proto-polkadot.vercel.app/)

| Number | Deliverable                                                   | Link | Notes |
| ------ | ------------------------------------------------------------- | ---- | ----- |
| 0a.    | License.                                                      | https://github.com/protofire/polkadot-contract-wizard/blob/milestone-1/LICENSE  | ...   |
| 0b.    | Documentation.                                                | https://github.com/protofire/polkadot-contract-wizard/blob/milestone-1/README.md  | ...   |
| 0c.    | Testing and Testing Guide.                                    | https://github.com/protofire/polkadot-contract-wizard/blob/milestone-1/tests/Readme.md  | ...   |
| 0d.    | Docker.                                                       | https://github.com/protofire/polkadot-contract-wizard#a-with-docker  | ...   |
| 1.     | Redesign frontend interface.                                  | https://github.com/protofire/polkadot-contract-wizard/tree/milestone-1  | ...   |
| 2.     | Develop the interface based on the previous task result.      | https://github.com/protofire/polkadot-contract-wizard/tree/milestone-1  | ...   |
| 3.     | Compose the contract based on the selection.                  | https://github.com/protofire/polkadot-contract-wizard/tree/milestone-1  | ...   |
| 4.     | Add syntax highlighting to the displayed smart contract code. | https://github.com/protofire/polkadot-contract-wizard/tree/milestone-1  | ...   |

