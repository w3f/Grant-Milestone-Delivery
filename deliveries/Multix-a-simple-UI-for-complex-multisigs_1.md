# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Multix application](https://github.com/w3f/Grants-Program/blob/master/applications/Multix-a-simple-UI-for-complex-multisig.md). 
* **Milestone Number:** 1

**Context** (optional)
We have delivered the interface, it's live on Rococo and it can be found here: https://multix.chainsafe.io/
There are a couple UX improvements to be made in the very short term, notably for the multisig creation flow, those can be found [in the issue tracker](https://github.com/ChainSafe/Multix/issues).

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [LICENSE](https://github.com/ChainSafe/Multix/blob/main/LICENSE) | Apache 2.0 | 
| 0b. | Documentation | [Multix repo](https://github.com/ChainSafe/Multix) | The code is commented in line and the flows should be self explanatory for users. | 
| 0d.  | Docker | [Multix indexer](https://github.com/ChainSafe/Multix/tree/main/squid) | The docker of the indexer is available in the repo | 
| 0e.  | Article | [Medium article](https://blog.chainsafe.io/multix-a-simple-interface-to-manage-complex-multisigs-on-polkadot-97328be26f9d) | An article explaining what Multix brings and educating about proxies has been published| 
| 1. | creation screen | [Multix](https://multix.chainsafe.io/) | Users can create multisigs very easiely. They can even give names, and this will be stored locally| 
| 2. | indexer | [Multix indexer](https://api.multix.chainsafe.io/) | The indexer is currently running on Rococo and the code is available in the repo| 
| 3. | home screen | [Multix](https://multix.chainsafe.io/) | The home screen asks to either connect to an extension, or if done already will directly show the multisigs available for the accounts of the extension| 
| 4. | request approval | [Multix](https://multix.chainsafe.io/) | Approvals for multisig proposals are showed automatically. The calls are decoded and for some such as balances.transfer it is even displayed in a very user friendly manner (with the identicon of the receipient, and the formated balance)| 
| 5. | pallet support |[Multix](https://multix.chainsafe.io/) | These pallets are used to create the proxy and the multisig| 
| 6. | stack | [Multix](https://multix.chainsafe.io/) | TS backend and front-end, and direct connection to the chain for most actions such as the retrieval from multisig proposals| 

**Additional Information**
This is only the beginning, and while it shows the power of what can be done using a single proxy, there are a lot of feature requests by the community, and the work will continue hopefully funded by the Polkadot treasury.
