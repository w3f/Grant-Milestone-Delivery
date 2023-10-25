# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:**  [Aisland-Docsig](https://github.com/w3f/Grants-Program/blob/master/applications/Aisland-DocSig.md)  
  
* **Milestone Number:** 2
  
**Context** (optional)
Aisland docsig is a platform to exchange signed documents throught the blockchain.  
In the second milestone we added some features to Docsig: 
1. Pdf Output - The dapp is able to generate a contract with the visual signatures and a QR code to verify on chain the validity of the contract.
2. Link Sharing - The dapp allows the sharing of the signing link by: email, Matrix, Whatsapp, and Telegram.
3. Multiple Counter Parties -  The document can be signed from multiple parties (more than 2).
4. Enhanced Templates -  You can reuse your private template and use whenever necessary.
  
**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License |[https://github.com/aisland-dao/docsig/blob/main/LICENSE](https://github.com/aisland-dao/docsig/blob/main/LICENSE)| Apache 2.0| 
| 0b.| Documentation |[Dapp Documentation](https://github.com/aisland-dao/docsig/blob/main/README.md),[Dapp Repository](https://github.com/aisland-dao/docsig) | in-line documentation is present in every source code file| 
| 0c.  |Testing and Testing Guide|[Dapp unit tests](https://github.com/aisland-dao/docsig/blob/main/README.md#unit-tests)| | 
| 0d.  | Docker |[Docker Documentation](https://github.com/aisland-dao/docsig/blob/main/README.md#docker), [Docker file](https://github.com/aisland-dao/docsig/blob/main/docker-compose.yml)| | 
| 0e.  | Article | [Article for Update](https://news.aisland.io/aisland-docsig-new-features/), [Workshop Video](https://dropbox.aisland.io/index.php/s/3xCUS0r5dNNe4Np)|| 
| 1.  | Dapp Feature: Pdf Export |The main change is in the [View Function](https://github.com/aisland-dao/docsig/blob/b23cc85356d16baa35b06734492b261a45d15880/docsig-server.js#L515) | 
| 2.  | Dapp Feature: Signing Link Sharing by multiple channels |The main point is this [function](https://github.com/aisland-dao/docsig/blob/b23cc85356d16baa35b06734492b261a45d15880/client-src/index.js#L413)|From the dapp, 'document actions" click on the "Link" icon| 
| 3.  | Dapp Feature: Multiple Counterparties |Many changes have been done to manage multiple counter parties, the main entry port for the UI, is in this [function](https://github.com/aisland-dao/docsig/blob/b23cc85356d16baa35b06734492b261a45d15880/client-src/index.js#L343C3-L343C3)|| 
| 4.  | Dapp Feature: Enhanced Templates |The entry point is this [function](https://github.com/aisland-dao/docsig/blob/b23cc85356d16baa35b06734492b261a45d15880/client-src/index.js#L1665)| | 

**Additional Information**
