# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Liberland grant application](https://github.com/w3f/Grants-Program/blob/master/applications/liberland.md)  
* **Milestone Number:** 2

**Context** (optional)
> Liberland has implemented on chain registries for companies, land and assets This, in combination with the upcoming judiciary, allows the full running of traditional businesses, as well as smart and dumb contracts completely on-chain.

**Deliverables**
| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [LICENSE-MIT](https://github.com/liberland/liberland_substrate/blob/main/LICENSE-MIT) | All contributed code is MIT |
| 0b.  | Documentation | [liberland/liberland.github.io](https://liberland-1.gitbook.io/wiki/v/public-documents/blockchain/for-developers-and-testers) | Inline code documentation can be found in our main [node repo](https://github.com/liberland/liberland_substrate) , Other documentation and guides can be found on [gitbook](https://liberland-1.gitbook.io/wiki/v/public-documents/blockchain/for-developers-and-testers) | 
| 0c.  | Testing Guide | [Testing guide](https://docs.google.com/document/d/1ntrT6bafTD2LfXUG9QLxOieogXELn9icN1y__EGfZ98/edit#) | ... | 
| 0d.  | Docker |[Docker](https://hub.docker.com/r/liberland/blockchain-node)| Uses testnet chainspec | 
| 0e.  | Article |...| ...| 
| 1.  | Land owner Pallet |[Modified NFTs pallet](https://github.com/liberland/liberland_substrate/tree/main/frame/nfts)| Uses office pallet| 
| 2.  | Metaverse integration pallet |[Test metaverse build](https://liberverse.net/win64-staging)| Not a pallet | 
| 3.  | Company registration pallet |[Registry](https://github.com/liberland/liberland_substrate/tree/main/frame/registry)| Uses office pallet| 

**Additional Information**
> Any further comments on the milestone that you would like to share with us.
#### Main repo: https://github.com/liberland/liberland_substrate/
#### A live testnet can be accessed here:
[Testnet](https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Ftestchain.liberland.org%252F#)
[Frontend](https://testnet.liberland.org/signin)
#### Mainnet launching this week

For the last few months we have been focusing on getting all features ready to launch the mainnet.
This includes grant related tasks and others. We expanded the political system, adding a separation of power between
Congress, Senate, LLM tokens and headcount citizens. There is now support for underage citizens, legislation vetoes, new vote delegation system,
the offices pallet, KYC for validators.

For grant related tasks, we added the office pallet, registries and metaverse integration.

The offices pallet are meant to mimic real world government offices on-chain. It allows clerks to execute permissioned calls on behalf of the office.
For example, an identity registrar is a wallet address of the Ministry of Interior office, and any Ministry of Interior clerk can
dispatch provideJudgement calls as the Ministry of Interior. Clerks have sets of permissions - which calls they can or cannot dispatch.
Clerks can be hired or fired by the office Admin, and office admins are appointed through the political system.
All of our registries have a corresponding instance of the office pallet.

Liberland registry pallets allow companies and assets to be registered on-chain. In combination with the upcoming judiciary system, this
will allow running of traditional businesses, smart and dumb contracts on chain. For example, an insurance company could operate entirely
on-chain, with disputes handled via a traditional-like court system that has the limited power to enforce wordy contracts, allowing for
much greater confidence in and adoption of on-chain businesses.

Company registry pallet and companyRegistryOffice are custom pallets that handle the requirements of business registration, explained
more in depth in the [testing guide](https://docs.google.com/document/d/1ntrT6bafTD2LfXUG9QLxOieogXELn9icN1y__EGfZ98/edit#heading=h.jdlftz66hx0s).
A missing upcoming WIP feature is selective encryption of data - for example, not all company shareholders may want to be public, 
but they still need to be known to the Registry and be able to prove their data in a ZK way.

Land, Metaverse Land and Asset registries are office-managed collections of the nfts pallet. We have a LandRegistryOffice,
MetaverseLandRegistryOffice and AssetRegistryOffice that all behave more or less in the same way.
See [testing guide](https://docs.google.com/document/d/1ntrT6bafTD2LfXUG9QLxOieogXELn9icN1y__EGfZ98/edit#heading=h.jdlftz66hx0s) for details.

Since nfts pallet provided all functionality that was required, we did not have to create a whole new metaverse integration pallet from
scratch, though we did have to some integration work. Since there are no good C libraries for substrate, we created a public API that reads
metaverse plots of lands from the blockchain and is connected to the metaverse. The flow of data is Blockchain nfts -> middleware API -> metaverse

