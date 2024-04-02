# Milestone Delivery :mailbox:

**Submission Reminder:**
> Only the GitHub account that submitted the original application is permitted to submit milestones. Please adhere to this rule to ensure a smooth review process.

**Mandatory Guidelines:**
> It is crucial to follow the [official milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md) closely. Do not remove any sections marked as mandatory or outlined with bold letters or headlines. Optional advisory comments, like this one, can be removed for clarity.

* **Application Document:** [lastic.md](https://github.com/w3f/Grants-Program/blob/master/applications/Lastic.md)
* **Milestone Number:** 1

### Context (Optional)
Lastic's milestone 3 aims to enhance the functionality and user experience of the Coretime Chain indexing process through Subsquid, along with providing basic visualization capabilities.

### Deliverables
This section lists all deliverables for Milestone 1, as outlined in the original application. Each deliverable includes a link to its implementation, with additional notes provided where applicable.

### Milestone 1: Indexing Coretime Chain with Subsquid - Functioning Indexer and Basic Visualization

This milestone focuses on establishing a robust infrastructure for indexing the Coretime Chain using Subsquid, along with the initial steps towards visualizing Coretime data. Each deliverable is detailed below, complete with relevant links to implementations and additional notes for clarity.

| Number   | Deliverable                                      | Link                                                                                                    | Notes                                                                                                     |
|----------|--------------------------------------------------|---------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| **0a.**  | License                                          | [LICENSE](https://github.com/LasticXYZ/LasticUI/blob/main/LICENSE)                                      | The project is licensed under GPLv3, ensuring open-source accessibility and compliance.                   |
| **0b.**  | Documentation                                    | [README.md](https://github.com/LasticXYZ/LasticUI/blob/main/README.md) and [docs.lastic.xyz](https://docs.lastic.xyz/) | Provides extensive documentation in README and dedicated docs site, facilitating user understanding. |
| **0d.**  | Error Logging                                    | [Lastic UI/issues](https://github.com/LasticXYZ/LasticUI/issues)                                        | Errors are thoroughly documented as issues on GitHub, set for future resolution.                          |
| **0d.**  | Article Publishing                               | [Article link](https://blog.lastic.xyz/revolutionizing-blockchain-interactivity-unveiling-lastics-groundbreaking-developments-042225bb0b72) | Discusses Lastic's latest breakthroughs, enhancing blockchain interaction.                           |
| **0e.**  | Dockerfile                                       | [GitHub for Subsquid](https://github.com/LasticXYZ/subsquid)                                            | Simplifies indexer deployment through a Dockerfile setup, promoting ease of use.                          |
| **1.**   | A Functioning Indexer                            | [Subsquid GraphQL](https://squid.subsquid.io/rococo-coretime/v/v1/graphql)                              | Offers a GraphQl endpoint for seamless access to indexed data.                                            |
| **1a.**  | Setup and Configuration of Subsquid with Rococo  | [Subsquid GraphQL Endpoint](https://squid.subsquid.io/rococo-coretime/v/v1/graphql)                     | Details the successful deployment of the indexer on Rococo, showcasing setup and indexing efforts.        |
| **1b.**  | Indexing Broker Pallet Events                    | [Subsquid GraphQL](https://squid.subsquid.io/rococo-coretime/v/v1/graphql), [Appendix 1b](#1b.-appendix)| Explains the indexing of all events within the `broker pallet`, including a list and retrieval methods.   |
| **1c.**  | Indexing Broker Pallet Calls                     | [Subsquid GraphQL](https://squid.subsquid.io/rococo-coretime/v/v1/graphql), [Appendix 1c](#1c.-appendix)| Covers the indexing of all calls within the `broker pallet`, complemented by a comprehensive list and retrieval techniques. |
| **2.**   | Connecting the Indexer with the Frontend         | [GitHub Repository](https://github.com/LasticXYZ/squid-sdk)                                             | Describes the creation of an SDK to facilitate GraphQL calls from the frontend.                           |
| **3.**   | SDK and Frontend Integration                     | [GitHub Repository](https://github.com/LasticXYZ/squid-sdk), [Appendix 3](#3.-appendix)                 | Integrates extrinsic interaction capabilities within the SDK and the frontend, enhancing user engagement. |
| **4.**   | Visualization of Coretime Prices                 | [See Appendix 4](#4-appendix)                                                                           | Provides a preliminary visualization of Coretime price trends, illustrating data in a digestible format.  |

#### 1b. Appendix:
List of all `broker pallet` events on the Coretime Chain
```
    HistoryInitializedEvent ,
    SaleInitializedEvent,
    SalesStartedEvent,
    PurchasedEvent,
    RenewableEvent,
    RenewedEvent,
    TransferredEvent,
    PartitionedEvent,
    InterlacedEvent,
    AssignedEvent,
    PooledEvent,
    CoreCountRequestedEvent,
    CoreCountChangedEvent,
    ReservationMadeEvent,
    ReservationCancelledEvent,
    LeasedEvent,
    LeaseEndingEvent,
    RevenueClaimBegunEvent,
    RevenueClaimItemEvent,
    RevenueClaimPaidEvent,
    CreditPurchasedEvent,
    RegionDroppedEvent,
    ContributionDroppedEvent,
    HistoryDroppedEvent,
    HistoryIgnoredEvent,
    ClaimsReadyEvent,
    CoreAssignedEvent,
    AllowedRenewalDroppedEvent
```
And their coresponding graphQl calls to retrieve them
```
    historyInitializeds,
    saleInitializeds,
    salesStarteds,
    purchaseds,
    renewables,
    reneweds,
    transferreds,
    partitioneds,
    interlaceds,
    assigneds,
    pooleds,
    coreCountRequesteds,
    coreCountChangeds,
    reservationMades,
    reservationCancelleds,
    leaseds,
    leaseEndings,
    revenueClaimBeguns,
    revenueClaimItems,
    revenueClaimPaids,
    creditPurchaseds,
    regionDroppeds,
    contributionDroppeds,
    historyDroppeds,
    historyIgnoreds,
    claimsReadys,
    coreAssigneds,
    allowedRenewalDroppeds
```

To retrieve the relevant data find the event with it's data and then click the ▶️ button as can be seen on the image below.
![image](https://github.com/LasticXYZ/Grant-Milestone-Delivery/assets/30662672/967c7bfb-1528-4f8b-8d1f-a21d4c7d7cb5)


#### 1c. Appendix:
List of all `broker pallet` calls on Coretime Chain
```
    ConfigureCall,
    ReserveCall,
    UnreserveCall,
    SetLeaseCall,
    StartSalesCall,
    PurchaseCall,
    RenewCall,
    TransferCall,
    PartitionCall,
    InterlaceCall,
    AssignCall,
    PoolCall,
    ClaimRevenueCall,
    PurchaseCreditCall,
    DropRegionCall,
    DropContributionCall,
    DropHistoryCall,
    DropRenewalCall,
    RequestCoreCountCall
```

And their coresponding graphQl calls to retrieve them
```
    configureExts,
    reserveExts,
    unreserveExts,
    setLeaseExts,
    startSalesExts,
    purchaseExts,
    renewExts,
    transferExts,
    partitionExts,
    interlaceExts,
    assignExts,
    poolExts,
    claimRevenueExts,
    purchaseCreditExts,
    dropRegionExts,
    dropContributionExts,
    dropHistoryExts,
    dropRenewalExts,
    requestCoreCountExts
```


#### 3. Appendix
The frontend is successfully retrieving the indexed data. An example of this can be seen with the display of the relevant indexed past purchases users have made. [Link: test.lastic.xyz/bulkcore1](https://test.lastic.xyz/bulkcore1])
![image](https://github.com/LasticXYZ/Grant-Milestone-Delivery/assets/30662672/bdb7970c-ddb5-4662-978b-47fe408302e2)

#### 4. Appendix
Price per core on Rococo over time. Real time graph can be viewed [here: test.lastic.xyz/bulkcore1](https://test.lastic.xyz/bulkcore1])
![image](https://github.com/LasticXYZ/Grant-Milestone-Delivery/assets/30662672/c98b0a94-2a92-460e-b322-bb32f97c7680)

### Milestone 2 - Visualizations + Added Interactivity

| Number | Deliverable                                | Link                                                                                                                   | Notes                                                                                                  |
|--------|--------------------------------------------|------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| **0a.**| License                                    | [LICENSE](https://github.com/LasticXYZ/LasticUI/blob/main/LICENSE)                                                     | Licensed under GPLv3.                                                                                  |
| **0b.**| Documentation                              | [README.md](https://github.com/LasticXYZ/LasticUI/blob/main/README.md) and [docs.lastic.xyz](https://docs.lastic.xyz/) | Comprehensive documentation available in the README files of corresponding folders.                    |
| **0d.**| Error logging                              | [Lastic UI/issues](https://github.com/LasticXYZ/LasticUI/issues)                                                       | All identified errors are documented as issues and will be addressed iteratively.                      |
| **0d.**| Article Publishing                         | [Article link](https://blog.lastic.xyz/revolutionizing-blockchain-interactivity-unveiling-lastics-groundbreaking-developments-042225bb0b72) | Article about the latest developments at Lastic                                   |
| **1.** | Visualizations                             | 1a.-1d.          | Development of visualizations for Polkadot and Kusama. This includes auction history, a timer view of the auction process, a list of all connected parachains and parathreads, and detailed information on different PARA IDs. Includes steps 1a. - 1d. |
| **1a.** | Auction History                           | [can be viewed](https://test.lastic.xyz/bulkcore1), [See appendix 1a](#2-1a-appendix)                                | Includes visualizations and a list detailing the teams who won the slot over time, the duration of that slot, and other relevant information. |
| **1b.** | Timer View                                | [can be viewed](https://test.lastic.xyz/bulkcore1), [See appendix 1b](#2-1b-appendix)                                | A visualization showing the current status and timeline of ongoing sales of coretime                     |
| **1c.** | Parachain Connectivity                    | [can be viewed](https://test.lastic.xyz/bulkcore1), [See appendix 1c](#2-1c-appendix)                                | List and visualization of all connected parachains, parathreads, and registered PARA IDs.                |
| **1d.** | PARA ID Details                           | [can be viewed](https://test.lastic.xyz/bulkcore1), [See appendix 1d](#2-1d-appendix)                                | Information on which PARA ID is connected to which parachain.                                            |
| **2.**  | Figma Designs in Code and Functional      |  2a.-2c.                                      | Implementing Figma designs into functional code for various features such as personal wallet/address page, core-specific pages, the core buying process, and network selection. |
| **2a.** | Personal Wallet/Address Page              | [can be viewed](https://test.lastic.xyz/my-cores), [See appendix 2a](#2-1c-appendix)                                 |  Development of the user interface for personal wallet or address management.                            |
| **2b.** | Core Page                                 | [can be viewed](https://test.lastic.xyz/core/62/122910/0xffffffffffffffffffff), , [See appendix 2b](#2-2b-appendix)  | Interface specific to individual cores, detailing core-specific information.                             |
| **2c.** | Core Buying Process                       | [can be viewed](https://test.lastic.xyz/bulkcore1), [See appendix 2c](#2-2c-appendix)                                | User interface for the process of purchasing cores.                                                      |
| **3.**  | Additional Features                       | 3a.-3c                                                                                                               | Implementation of extra functionalities such as the teleport asset feature and creation of a foldable sidebar. |
| **3a.** | Teleport Asset Functionality              | [can be viewed](https://test.lastic.xyz/teleport), [See appendix 3a](#3-3a-appendix)                                 | Enabling users to teleport assets within the platform.                                                   | 
| **3b.** | Foldable Sidebar                          | [can be viewed](https://test.lastic.xyz/bulkcore1) , [See appendix 3b](#2-3b-appendix)                               | Development of a user-friendly, foldable sidebar for better navigation.                                  |
| **3c.** | Connect to Different Networks             | [can be viewed](https://test.lastic.xyz/bulkcore1) , [See appendix 3c](#2-3c-appendix)                               |  Feature allowing users to switch between different blockchain networks seamlessly. / Feature to choose between different networks like Roccoco, Kusama, and Polkadot. |

#### 2-1a Appendix
Visualization of Aucton Prices over time (Subscan API)
![image](https://github.com/LasticXYZ/Grant-Milestone-Delivery/assets/30662672/fb9768b3-039a-4d12-9153-24eb01e6baf1)

#### 2-1b Appendix
Visualization of the current status and timeline of ongoing sales of coretime
![image](https://github.com/LasticXYZ/Grant-Milestone-Delivery/assets/30662672/6692665b-5037-47a8-800c-c4f98f2f4733)

#### 2-1c Appendix
List and visualization of all connected parachains, parathreads, and registered PARA IDs.
![image](https://github.com/LasticXYZ/Grant-Milestone-Delivery/assets/30662672/355040b4-778c-40f7-860f-f95ea5048c70)

#### 2-1d Appendix
![image](https://github.com/LasticXYZ/Grant-Milestone-Delivery/assets/30662672/232982ce-d0d1-467f-af6a-7f9a33ba04a7)

#### 2-2a Appendix
![image](https://github.com/LasticXYZ/Grant-Milestone-Delivery/assets/30662672/23475a87-3bb1-4ad8-a5aa-e055e4377047)

#### 2-2b Appendix
![image](https://github.com/LasticXYZ/Grant-Milestone-Delivery/assets/30662672/d497f744-10b4-4b4c-899c-6d6da59b3940)

#### 2-2c Appendix
![image](https://github.com/LasticXYZ/Grant-Milestone-Delivery/assets/30662672/f71418ba-9f7c-4021-ba56-b4520dd898b1)

#### 3-3a Appendix
<img width="1242" alt="Screenshot 2024-03-29 at 12 44 48" src="img/image-6.png">
![image](https://github.com/LasticXYZ/Grant-Milestone-Delivery/assets/30662672/b94781be-ddc4-4e3b-958e-010a6b3c1486)

#### 3-3b Appendix
Sidebar and its corresponding folded state:

<img width="200" alt="Screenshot 2024-03-29 at 12 32 06" src="https://github.com/LasticXYZ/Grant-Milestone-Delivery/assets/30662672/00341e7f-ba68-41cd-991c-957b451c7848">
<img width="80" alt="Screenshot 2024-03-29 at 12 32 56" src="https://github.com/LasticXYZ/Grant-Milestone-Delivery/assets/30662672/37b78662-5402-4edc-a5e2-96cd14f1d1d5">

#### 3-3c Appendix
<img width="710" alt="Screenshot 2024-03-29 at 12 45 52" src="https://github.com/LasticXYZ/Grant-Milestone-Delivery/assets/30662672/071e9de7-4d0a-4325-90dd-c37d9e4e5163">


