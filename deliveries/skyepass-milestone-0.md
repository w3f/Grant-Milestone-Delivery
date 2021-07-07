# Milestone Delivery :mailbox:

> Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. Don't remove any of the mandatory parts presented in bold letters or as headlines!

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**  

* **PR Link:**  https://github.com/w3f/Open-Grants-Program/pull/212
* **Milestone Number:** Milestone 0

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which should be used for testing.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Smart Contract |[Smart Contract lib.rs ](https://github.com/skyekiwi/skyepass-vault/blob/master/contracts/lib.rs)| [Test](https://github.com/skyekiwi/skyepass-vault/blob/master/tests/skyepassvault.test.ts) Section: "SkyePassVault Smart Contract" |
| 2.  | Client Side PoC |1. Local data storage schema and adapters with lowDB [Link](https://github.com/skyekiwi/skyepass-vault/blob/master/client/db.ts) <br/>2. IPFS (add, cat, pin) on the Infura IPFS nodes; [Link](https://github.com/skyekiwi/skyepass-vault/blob/master/client/ipfs.ts)<br/>3. ECIES encryption & decryption with [eccrypto](https://github.com/bitchan/eccrypto) [Link](https://github.com/skyekiwi/skyepass-vault/blob/master/client/metadata.ts)<br/>4. Shamir secret sharing with a simplest 4/2 schema powered by audited lib [Secrets.js](https://github.com/grempe/secrets.js) [Link](https://github.com/skyekiwi/skyepass-vault/blob/master/client/metadata.ts)<br/>5. A full run down of the process (from a user creating a vault, add in some password items, to the encryption, publish to IPFS, interact with a local blockchain, to access management when sharing with two other users)<br/>[Test](https://github.com/skyekiwi/skyepass-vault/blob/master/tests/skyepassvault.test.ts) Section: "End to End run through"<br/>6. Unit testing for most of these functionalities<br/>    - Data storage schema: [Test](https://github.com/skyekiwi/skyepass-vault/blob/master/tests/skyepassvault.test.ts) Section: "DB Adapter"<br/>    - IPFS: [Test](https://github.com/skyekiwi/skyepass-vault/blob/master/tests/skyepassvault.test.ts) Section: "IPFS Adapter"<br/>    - ECIES/Shamir: [Test](https://github.com/skyekiwi/skyepass-vault/blob/master/tests/skyepassvault.test.ts) Section: "Encryption & Metadata"<br/>|  |
| 3. | Client Side UI/UX |an simple Electron UI/UX not wired up with logic yet [Link](https://github.com/skyekiwi/skyepass-ux/tree/master)|  |
