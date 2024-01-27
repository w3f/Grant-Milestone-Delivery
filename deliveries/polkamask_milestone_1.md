# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/polkamask.md
* **Milestone Number:** 1

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------ | ------------- | ------------- |------------- |
| 0a. | License Apache 2.0 | https://github.com/PolkaGate/polkaMask/blob/main/LICENSE.APACHE2 | 
| 0b. | Documentation | https://github.com/PolkaGate/polkaMask/wiki | Inline docs and wiki are available |
| 0c. | Testing and Testing Guide | https://github.com/PolkaGate/polkaMask#running-the-repository | To run tests via command prompt | 
| 0d. | Docker | https://github.com/PolkaGate/polkaMask?tab=readme-ov-file#docker | The snap, extension-dapp package, and polkadot-cloud are all included in the Docker |
| 0e. | Article | https://medium.com/@polkagate/polkamask-polkadot-with-metamask-0d0e5e12f2d6 | 
| 1. | Polkagate Signer (Metamask Snap) | https://github.com/PolkaGate/polkaMask/tree/main/packages/snap | Includes the snap files and a dapp to test the snap. The snap package is also available [here](https://www.npmjs.com/package/@polkagate/snap) |
| 2. | Upgraded Polkadot extension-dapp | https://github.com/PolkaGate/polkadot-js-extension/tree/master/packages/extension-dapp/src/snap | To enable dapps to communicate with the snap. Its package is also available [here](https://www.npmjs.com/package/@polkagate/extension-dapp?activeTab=versions) |
| 3. | Upgraded Polkadot-Cloud | https://github.com/PolkaGate/polkadot-cloud-library/commit/a29606260ef6ef79137b745d2c5c1336346bcb02 | Add Metamask snap (by polkagate) as a connection option to the UI. Updated packages are [cloud-react](https://www.npmjs.com/package/@polkagate/cloud-react) and [cloud-assets](https://www.npmjs.com/package/@polkagate/cloud-assets) |

**Additional Information** 

To try PolkaMask, you need to install [Metamask Flask](https://chromewebstore.google.com/detail/metamask-flask-developmen/ljfoeinjpaedjfecbmggjgodbgkmjkjk) (a developer version of Metamask). Metamask only allows the installation of allowlisted snaps, and the preliminary allowlisting for PolkaMask has been completed. It will undergo a security audit and be officially allowlisted after the payment for the audit, which costs around 5-10 thousand USD, is covered by the Polkagate team from this grant fund.