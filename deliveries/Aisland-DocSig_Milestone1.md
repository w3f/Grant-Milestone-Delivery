# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:**  [Aisland-Docsig](https://github.com/w3f/Grants-Program/blob/master/applications/Aisland-DocSig.md)  
  
* **Milestone Number:** 1
  
**Context** (optional)
Aisland docsig is a platform to exchange signed documents throught the blockchain.  
In this first milestone we added some features to Docsig:  
1.new functions in Docsig Pallet to store the documents completely on chain (not only the hash);  
2. UI managament of a standard signature (generated from fonts or scanned and uploaded);  
3. Plugin for blocks editor to insert the standard signature;  
4. Encryption/Decryption of the the documents stored on the blockchain.  
  
**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License |[https://github.com/aisland-dao/docsig/blob/main/LICENSE](https://github.com/aisland-dao/docsig/blob/main/LICENSE)| Apache 2.0| 
| 0b.| Documentation |[Dapp Documentation](https://github.com/aisland-dao/docsig/blob/main/README.md),  [Pallet Documentation](https://github.com/aisland-dao/aisland-node/blob/main/pallets/docsig/README.md), [Dapp Repository](https://github.com/aisland-dao/docsig), [Pallet Repository](https://github.com/aisland-dao/aisland-node/blob/main/pallets/docsig)| in-line documentation is present in every source code file| 
| 0c.  |Testing and Testing Guide|[Dapp unit tests](https://github.com/aisland-dao/docsig/blob/main/README.md#unit-tests), [Pallet unit tests](https://github.com/aisland-dao/aisland-node/blob/main/pallets/docsig/README.md#unit-tests)| | 
| 0d.  | Docker |[Docker Documentation](https://github.com/aisland-dao/docsig/blob/main/README.md#docker), [Docker file](https://github.com/aisland-dao/docsig/blob/main/docker-compose.yml)| | 
| 0e.  | Article |[Article of Introduction](https://news.aisland.io/aisland-docsig-decentralised-exchange-of-signed-documents/),[Workshop Video](https://dropbox.aisland.io/index.php/s/fvIn7U4b75v6jSo)|| 
| 1.  | Substrate module: pallet-docsig |[Pallet Docsig](https://github.com/aisland-dao/aisland-node/tree/main/pallets/docsig), new functions: [newBlob()](https://github.com/aisland-dao/aisland-node/blob/66433f01b1ec232ca013a7d2cb8d8ca1eaebe007/pallets/docsig/src/lib.rs#L234), [destroyBlob()](https://github.com/aisland-dao/aisland-node/blob/66433f01b1ec232ca013a7d2cb8d8ca1eaebe007/pallets/docsig/src/lib.rs#L264), [storePublickey()](https://github.com/aisland-dao/aisland-node/blob/66433f01b1ec232ca013a7d2cb8d8ca1eaebe007/pallets/docsig/src/lib.rs#L210)| | 
| 2.  | Dapp Feature: Standard Signature Image |The main entry point is the function [render_settings()](https://github.com/aisland-dao/docsig/blob/84e57c3fa448fc71e412f126394355864c40c3ed/client-src/index.js#L1676)|From the dapp, click on "Settings" icon| 
| 3.  | Dapp Feature: Signature Marker |[Plugin Source Code](https://github.com/aisland-dao/docsig/tree/main/editorjs-signature-plugin), [UI Implementation](https://github.com/aisland-dao/docsig/blob/84e57c3fa448fc71e412f126394355864c40c3ed/client-src/index.js#L1412)|The new option is shown in the blocks editor when you create a blank document, for example.| 
| 4.  | Dapp Feature: Encryption |[Encryption/Decryption Module](https://github.com/aisland-dao/docsig/blob/main/modules/cryptostream.js), [UI to manage encryption keys](https://github.com/aisland-dao/docsig/blob/84e57c3fa448fc71e412f126394355864c40c3ed/client-src/index.js#L1881), [Implementation on UI multiple points](https://github.com/aisland-dao/docsig/blob/main/client-src/index.js)| | 

**Additional Information**
