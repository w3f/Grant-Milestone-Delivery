# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/AdMeta.md
* **Milestone Number:** 1


**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0b. | Documentation | [Rust Docs](https://admetanetwork.github.io/admeta/), [AdMeta Documentation](https://docs.admeta.network/)| Rust docs are generated from the inline documentation, which can be also found in the source code. AdMeta documentation provides a guide to build and set up an AdMeta test network, and also there is a step-to-step guide for the AdMeta WebApp. | 
| 0c.  | Testing Guide	| [Build and Test](https://github.com/AdMetaNetwork/admeta#getting-started), [Test Results in CI](https://github.com/AdMetaNetwork/admeta/actions/workflows/rust.yml), [WebApp Guide](https://docs.admeta.network/guides/how-to-use-admeta-webapp) | In the README we described a build and unit test guide of AdMeta node. Also, unit test execution is integrated in CI. For a functional related test, the most convenient way is to use our WebApp by following the WebApp guide provided.  |
| 0d. | Docker | [Docker Image](https://hub.docker.com/repository/docker/h4n00/admeta) | |
| 0e. | Article | [Introduce AdMeta](https://medium.com/@admeta/admeta-an-internet-advertising-revolution-cee26f3421e7) ||
| 1. | Substrate module: ad	| https://github.com/AdMetaNetwork/admeta/tree/d133bce5adaa41dc2acffa8f10b63928d22751b4/pallets/ad |  |
| 2. | Substrate module: user mock	| https://github.com/AdMetaNetwork/admeta/tree/d133bce5adaa41dc2acffa8f10b63928d22751b4/pallets/user | |
| 3. | Substrate solo chain	| https://github.com/AdMetaNetwork/admeta/tree/d133bce5adaa41dc2acffa8f10b63928d22751b4/node https://github.com/AdMetaNetwork/admeta/tree/d133bce5adaa41dc2acffa8f10b63928d22751b4/runtime | |
| 4. | AdMeta WebApp | https://github.com/AdMetaNetwork/admeta-webapp/tree/cb198db390708e47b1a3fce2b36769d01509e890 | |




**Additional Information**

Please note that the deployed Webapp https://app.testnet.admeta.network/ is based on the latest version, while the provided code commit is from an older version. There could be inconsistency between these two versions.

