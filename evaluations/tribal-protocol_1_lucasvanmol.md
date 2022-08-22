# Evaluation

- **Status:** In Progress
- **Application Document:** [tribal_protocol.md](https://github.com/w3f/Grants-Program/blob/master/applications/tribal_protocol.md) 
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** Link

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[ ] </li></ul>|[tribal_contract](https://github.com/tribal-protocol/tribal_contract/blob/main/LICENSE) [substrate-poc-client](https://github.com/tribal-protocol/substrate-poc-client/blob/main/LICENSE) | LICENSE file needed for the `substrate-poc-client` repo |
| 0b. | Documentation |<ul><li>[ ] </li></ul>| [Milestone Article](https://mirror.xyz/0xd7ce012585d013585C158431F08903B771189513/hIAaElI7y4QCXE3YDy8plmBRzKoVPIIqx13l2zXSiJ4)| Documentation related to the project as a whole is good (see article), although I would suggest copying some of the information related to building & testing projects to the relevent repo's READMEs as well. Additionally, in-line documentation is missing for the ink! contract (see general notes below). | 
| 0c.  | Testing |<ul><li>[x] </li></ul>|[Milestone Article](https://mirror.xyz/0xd7ce012585d013585C158431F08903B771189513/hIAaElI7y4QCXE3YDy8plmBRzKoVPIIqx13l2zXSiJ4)| Testing coverage on the smart contract is excellent. The webapp does not have automated tests, but since it is a poc and not the core of this delivery, this is fine. |
| 0d. | Article |<ul><li>[x] </li></ul>|[Milestone Article](https://mirror.xyz/0xd7ce012585d013585C158431F08903B771189513/hIAaElI7y4QCXE3YDy8plmBRzKoVPIIqx13l2zXSiJ4)| Good article containing a summary of this delivery and a detailed overview of the design. | 
| 1.  | Design Doc |<ul><li>[x] </li></ul>|[Milestone Article](https://mirror.xyz/0xd7ce012585d013585C158431F08903B771189513/hIAaElI7y4QCXE3YDy8plmBRzKoVPIIqx13l2zXSiJ4)| Good article containing a summary of this delivery and a detailed overview of the design. | 
| 2.  | tribal_pallet | N/A | N/A| Did not Implement -- milestone implemented 100% in ink! contract | 
| 3. | Ink! Contract: create_tribe |<ul><li>[x] </li></ul>|[Link](https://github.com/tribal-protocol/tribal_contract)| Works, but needs better documentation | 
| 4.  | Initial Tribe Struct |<ul><li>[x] </li></ul>|[Link](https://github.com/tribal-protocol/tribal_contract/blob/100d43279165f01ca3654806a816feb05916a650/lib.rs#L18)| | 
| 5.  | Orchestrator Client |<ul><li>[x] </li></ul>|[Link](https://github.com/tribal-protocol/substrate-poc-client/blob/main/src/lib/orchestrator.ts)| Minimal, but works. AFAIK the frontend currently only initializes the creation of tribes, and other tools are needed to finalize their creation, for example when a tribe has multiple founders that need to `accept_tribe` and `fund_tribe` (feel free to correct me on this!). | 

## General Notes

Overall this is a great delivery, especially considering this is your team's first experience with ink!. However there are a couple things blocking me from accepting it at this stage. Here's the changes I recommend, starting with the easiest:

### *LICENSE*

Firstly, since the [substrate-poc-client](https://github.com/tribal-protocol/substrate-poc-client) is a part of this delivery, it would also need a `LICENSE` file

### *ink! contract - Documentation*

In order to be a more user-friendly to both developers and callers of the ink! contract, there needs to be more in-line documentation inside the code. In particular, each of the `#[ink(...)]` functions should have rust `/// Doc comments`, because they will also be exposed to callers of the contract, since it shows up on contract metadata - which is used by frontends such as polkadot.js.org or contracts-ui.substrate.io . For example, see the below screenshot from https://contracts-ui.substrate.io:

<img width="910" alt="Screenshot from https://contracts-ui.substrate.io" src="https://user-images.githubusercontent.com/16979353/185635101-03008e22-9289-4ac9-977a-11040a9c7919.png">

### *ink! contract - Errors*

Another improvement to developer experience and user-friendliness is to avoid `panics!` inside the contracts. Rather, it's better practice to have functions return `Result< ... , MyError>`s, where `MyError` is a custom error enum inside your smart contract (where each error type in the enum has `/// Doc comments`, as they will also be visible to smart contract callers). This will give developers/callers more information when something goes wrong or when the contract is used incorrectly, and will be helpful for future front-end implementations.

### *ink! contract - Events*

Finally, it's useful for contracts to emit `Event`s when things happen in the smart contract - these are like on-chain logging events that can be used by on- or off-chain applications. These events can also be tested for, if you wish to have extra-thorough testing. See the [relevant documentation](https://ink.substrate.io/basics/events).

## Final Notes

I realise these are a lot of suggestions that I'm throwing at you all at once, so just to be clear about the expectations I have for this milestone:

* Adding the LICENSE files and `/// Doc comments` to the existing code is a must
* Returning `Results` with your own documented errors will probably require a bit more work, and will probably require you to alter some of your tests aswell - but in my opinion this is crucial for smart contracts that will be implemented at a production level. To this end, feel free to reach out to us if you feel like this suggestions will require a significant amount of extra time or resources, so that we can work something out.
* Emitting `Events` can be a nice-to-have although you may feel that it's inappropriate for your application at this point, so it's up to you whether you decide to implement them at this stage. No worries if you prefer to place your focus on other areas of the project instead.

Finally here are some resources to help you with some of this feedback:

* If you haven't used it before, https://contracts-ui.substrate.io is a great tool for quickly messing around with smart contracts to get a feel for what the experience is like for callers of the smart contract and is a great complement to the unit testing you've already implemented

* https://github.com/RoloiMoney/roloi-polkadot-w3f-grant is an excellent example of a smart contract implementing correct documentation and errors. Note that the documentation I'm expecting does not have to be as verbose; a handful of lines to explain the behaviour of each function is enough.
    * See also https://github.com/paritytech/ink/blob/master/examples for more examples, including e.g. the `dns` example which showcases the use of `Event`s
 
* You can further improve the rust code of your smart contract code by running `cargo +nightly clippy -- -A clippy::let_unit_value` and taking a look at some of the warnings raised.
    * > (`-A clippy::let_unit_value` removes warnings for a specific lint created by some the macro expansions which you have no control over)











