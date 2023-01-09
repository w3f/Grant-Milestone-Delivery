# Milestone Delivery:MangoBOX_Milestone_1_2



**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**



## Context

When we decided to inject Juicebox's DAO fundraising system into the Polkadot ecosystem, we never thought the process would be so difficult.Both the complexity of the code and the overall workload exceeded our expectations.We were originally scheduled to complete the development of the entire protocol in two months, but today it has been a full four months.

However, it is a great honor that with the joint efforts of team members, we have finally completed the overall development of the protocol.Only Ink! smart contracts, we have developed a total of 11 contracts with different functions, more than 5000 lines of contract code.

At the same time, due to the close connection between the different contracts of the entire protocol, we did not submit milestones after the first milestone was developed. We choose to complete the development of all the contracts of the two milestones, and the overall protocol can be run, and then submit the two milestones together today. We want to maximize the integrity of the entire protocol.So when you test the protocol, you can test the two milestones together, and all the contracts form a whole.

If there is any unclear place during the test, please feel free to leave us a message, and we will solve it as soon as possible.

Thanks again to all the Web3 Foundation staff for your hard work.





* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/MangoBOX-Protocol.md

* **Milestone Number:**  1

| Number | Deliverable              | Link                                                         | Notes                                                        |
| ------ | :----------------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
| 0a.    | License                  |[License](https://github.com/Mangoboxlabs/Mangoboxink/blob/main/LICENSE) | Apache 2.0 |
| 0b.    | Documentation            |[Documentation](https://github.com/Mangoboxlabs/Mangoboxink/blob/main/contract/README.md)| Documentation . |
| 0c.    | Testing Guide            |[Testing Guide](https://github.com/Mangoboxlabs/Mangoboxink/blob/main/contract/README.md#testing)| All test instructions are in the contract code document. |
| 0d.    | Docker         | [Docker](https://github.com/Mangoboxlabs/Mangoboxink/tree/main/docker) | Dockerfile. |
| 1.     | Ink! Contract 1           |[MBProjects](https://github.com/Mangoboxlabs/Mangoboxink/tree/main/contract/MBProjects) |1.MBProjects:Manages and tracks ownership over projects, which are represented as ERC-721 tokens.The protocol uses this to enforce permissions needed to access several project-oriented transactions. |
| 2.     | Ink! Contract 2           |[MBFundingCycleStore](https://github.com/Mangoboxlabs/Mangoboxink/tree/main/contract/MBFundingCycleStore) |2.MBFundingCycleStore:Manages funding cycle configurations and scheduling. |
| 3.     | Ink! Contract 3           |[MBToken](https://github.com/Mangoboxlabs/Mangoboxink/tree/main/contract/MBToken) |3.MBToken:An ERC-20 token that can be used by a project in the `MBTokenStore`. |
| 4.     | Ink! Contract 4           | [MBTokenStore](https://github.com/Mangoboxlabs/Mangoboxink/tree/main/contract/MBTokenStore) |4.MBTokenStore: Manages token minting and burning for all projects. |
| 5.     | Ink! Contract 5           |[MBERC20PaymentTerminal](https://github.com/Mangoboxlabs/Mangoboxink/tree/main/contract/MBERC20PaymentTerminal) |5.MBERC20PaymentTerminal:Manages the inflows and outflows of an ERC-20 token. |





* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/MangoBOX-Protocol.md

* **Milestone Number:**  2

| Number |      Deliverable       |                             Link                             | Notes                       |
| ------ | :--------------------: | :----------------------------------------------------------: | --------------------------- |
| 0a.    |        License         |[License](https://github.com/Mangoboxlabs/Mangoboxink/blob/main/LICENSE) | Apache 2.0                  |
| 0b-01.    |     Documentation01      |[Documentation01](https://github.com/Mangoboxlabs/Mangoboxink/blob/main/contract/README.md) | Contract Documentation               |
| 0b-02.    |     Documentation02      |[Documentation02](https://github.com/Mangoboxlabs/Mangoboxink/blob/main/Frontend/README.md) |Frontend Documentation               |
| 0c.    |     Testing Guide      |[ Testing Guide ](https://github.com/Mangoboxlabs/Mangoboxink/blob/main/contract/README.md#testing) | All test instructions are in the contract code document. |
| 0d.    |         Docker         | [Docker](https://github.com/Mangoboxlabs/Mangoboxink/tree/main/docker) | Dockerfile.                 |
| 0e.    |        Article         | [Article](https://medium.com/@mangoboxlabs/introduction-to-mongobox-5fab08bd1b57) | Article                     |
| 1.     |     Front-end File     | [Front-end File](https://github.com/Mangoboxlabs/Mangoboxink/tree/main/Frontend) | Front-end file.             |
| 2.     |           UI           |  [UI](https://github.com/Mangoboxlabs/Mangoboxink/tree/main/UIs)   | MangoBox design UI picture. |
| 3.     | Functional Testnet URL |                  https://app.mangobox.xyz/                   | Functional Testnet URL      |
| 4.     |     Ink! Contract 6     | [MBSplitsStore](https://github.com/Mangoboxlabs/Mangoboxink/tree/main/contract/MBSplitsStore) | 6.MBSplitsStore:Stores information about how arbitrary distributions should be split. The surface contracts currently use these to split up payout distributions and reserved token distributions. |
| 5.     |     Ink! Contract 7     | [MBOperatorStore](https://github.com/Mangoboxlabs/Mangoboxink/tree/main/contract/MBOperatorStore) | 7.MBOperatorStore:Stores operator permissions for all addresses. Addresses can give permissions to any other address to take specific indexed actions on their behalf, while confining the permissions to an arbitrary number of domain namespaces. |
| 6.     |     Ink! Contract 8    | [MBDirectory](https://github.com/Mangoboxlabs/Mangoboxink/tree/main/contract/MBDirectory) | 8.MBDirectory:Keeps a reference of which terminal contracts each project is currently accepting funds through, and which controller contract is managing each project's tokens and funding cycles. |
| 7.     |     Ink! Contract 9     |[MBController](https://github.com/Mangoboxlabs/Mangoboxink/tree/main/contract/MBController) | 9.MBController:Stitches together funding cycles and project tokens, allowing for restricted control, accounting, and token management. |
| 8.     |     Ink! Contract 10     | [MBSingleTokenPaymentTerminalStore](https://github.com/Mangoboxlabs/Mangoboxink/tree/main/contract/MBSingleTokenPaymentTerminalStore) | 10.MBSingleTokenPaymentTerminalStore: Manages accounting data on behalf of payment terminals that manage balances of only one token type. |
| 9.     |     Ink! Contract 11    | [MBPrices](https://github.com/Mangoboxlabs/Mangoboxink/tree/main/contract/MBPrices) | 11.MBPrices:Manages and normalizes price feeds of various currencies. |
