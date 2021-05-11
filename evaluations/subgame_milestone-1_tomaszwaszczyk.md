# Evaluation

- **Status:** In Progress
- **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/374
- **Milestone:** 1
- **Kusama Identity:** [FqFKeVrWbBDVBk8U9VvL8gSFwUm4nj9fEZmtQvmViZzLvnv](https://polkascan.io/kusama/account/FqFKeVrWbBDVBk8U9VvL8gSFwUm4nj9fEZmtQvmViZzLvnv)
- **Previously successfully merged evaluation:** None

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 1. | License | <ul><li>[X] </li></ul> | [https://github.com/SubGame-Network/subgame-network/blob/master/LICENSE](https://github.com/SubGame-Network/subgame-network/blob/master/LICENSE) | Looks good to me | 
| 2. | Documentation | <ul><li>[] </li></ul> | [https://subgame.guanfantech.com/api/assets/whitePaper/en/%E6%8A%80%E8%A1%93%E7%99%BD%E7%9A%AE%E6%9B%B8_%E8%8B%B1%E6%96%87_v7.pdf](https://subgame.guanfantech.com/api/assets/whitePaper/en/%E6%8A%80%E8%A1%93%E7%99%BD%E7%9A%AE%E6%9B%B8_%E8%8B%B1%E6%96%87_v7.pdf) | Name of the file shall be English-like, look at General Notes section. Correct me if I am wrong but [here](https://github.com/w3f/Grant-Milestone-Delivery/pull/160/files#diff-3429cc6f7805248f1a79ebd7d5844662182caab60c2f7fed3d0775ffd23aeb81R19) is still Taiwanese name of the file |
| 3. | Testing Guide | <ul><li>[] </li></ul> | [https://github.com/SubGame-Network/subgame-network/tree/master/pallets](https://github.com/SubGame-Network/subgame-network/tree/master/pallets) | Taiwanese [comments](https://github.com/SubGame-Network/subgame-network/blob/master/pallets/chips/src/mock.rs#L86) |
| 4. | SubGame Node | <ul><li>[X]</li></ul> | [https://github.com/SubGame-Network/subgame-network/tree/master/node](https://github.com/SubGame-Network/subgame-network/tree/master/node) | Readable source code, cool [optimization](https://github.com/SubGame-Network/subgame-network/blob/master/node/src/service.rs#L238) |
| 5. | pallet-chips | <ul><li>[] </li></ul> | [https://github.com/SubGame-Network/subgame-network/tree/master/pallets/chips](https://github.com/SubGame-Network/subgame-network/tree/master/pallets/chips) | Much better, I am able to read the code, but look at here [Taiwanese comments](https://github.com/SubGame-Network/subgame-network/blob/master/pallets/chips/src/tests.rs) |
| 6. | pallet-gametemplates | <ul><li>[X]</li></ul> | [https://github.com/SubGame-Network/subgame-network/tree/master/pallets/gametemplates](https://github.com/SubGame-Network/subgame-network/tree/master/pallets/gametemplates) | Looks good to me |
| 7. | pallet-gamecenter | <ul><li>[]</li></ul> | [https://github.com/SubGame-Network/subgame-network/tree/master/pallets/gamecenter](https://github.com/SubGame-Network/subgame-network/tree/master/pallets/gamecenter) | Looks good to me, only one question: why all functions are public but not `DrawMap`, [link](https://github.com/SubGame-Network/subgame-network/blob/master/pallets/gamecenter/src/lib.rs#L52) |
| 8. | pallet-gametemplates-guess-hash | <ul><li>[] </li></ul> | [https://github.com/SubGame-Network/subgame-network/tree/master/pallets/gametemplates-guess-hash](https://github.com/SubGame-Network/subgame-network/tree/master/pallets/gametemplates-guess-hash) | Backbone logic delivered, look at [here](https://github.com/SubGame-Network/subgame-network/blob/master/pallets/gametemplates-guess-hash/src/mock.rs#L73) I know small things, but it is really easier to read code with English like comments |
| 9. | Front End | <ul><li>[X]</li></ul> | [https://github.com/SubGame-Network/GameCenter/tree/master/frontend](https://github.com/SubGame-Network/GameCenter/tree/master/frontend) | Front-end works with Docker |
| 10. | UI mock-ups | <ul><li>[X]</li></ul> | [https://www.figma.com/file/hbwDsOVkP5tJqCnl7v0Smr/Subgame-center](https://www.figma.com/file/hbwDsOVkP5tJqCnl7v0Smr/Subgame-center)| Wireframes delivered |
| 11. | Article/Tutorial | <ul><li>[X]</li></ul> | [https://github.com/SubGame-Network/subgame-network/blob/master/docker_run.md](https://github.com/SubGame-Network/subgame-network/blob/master/docker_run.md) | |
| 12. | Docker | <ul><li>[X]</li></ul> | [https://github.com/SubGame-Network/GameCenter](https://github.com/SubGame-Network/GameCenter) | Docker works smoothly, frontend part works, let's implement further features |

## General Notes

Good work, let me explain a room for improvements. In the context of whitepaper, I am not sure whether there is a need to mention about Bitcoin performance but what is more important, when I was reading the whitepaper I have read many general terms like:
- "providing unlimited possibilities for distributed mobile applications."
- "SubGame is a public chain development team based on the Polkadot parachain"
- "It combines public cloud and private cloud hybrid storage technology"
- "blockchain storage space"
- "Polkadot can be said to be a creation public chain that has reached a new level of technical strength. It was developed by the Web3 Foundation."
- "After the smart contract developed on the SubGame chain is processed by AI cloud computing, it can be perfectly compatible with other public chains to achieve high chain-to-chain collaboration."

I am really afraid when some software engineer claims that: "will deliver unlimited possibilities", maybe this statement replace with more specific description like "we will deliver SDK in order to give software engineers possibility to integrate with" and try to propose (even a draft) of interfaces, the interface is not be carved in stone and everyone understand it. Regarding "based on the Polkadot parachain", I think that the chain is based on Substrate Framework, not "parachain", in case you have a plan to became a parachain would be interesting what is your strategy to become one? Combining public and private cloud, what does it really mean, maybe more specific what are you going to deliver, same with "blockchain storage space". Maybe there is a room to use already existing solutions like IPFS, I suggest to look at [SubSocial](https://app.subsocial.network/) they are going to use IPFS. Web3 Foundation is an organization for research, strictly speaking Substrate framework was developed by Parity Technologies company and "Polkadot" is the name of relay chain as a whole network. Could you describe more about "combining" smart contracts and AI, I know those word but what does it mean in practical sense? Comment regarding "Data on Chain" section, I do not think that blockchain technology per se is a good/cheap/efficient way to keep data, maybe research IPFS solution? And a comment regarding: "it can be perfectly compatible with other public chains to achieve high chain-to-chain collaboration" could you describe how are you going to deliver it in more specific way? In the whitepaper there are pictures of mobile phones, are you going to deliver mobile version, if so how are you going to integrate wallet on mobile?

Explanation of RPC in the white paper is described as "RPC refers to remote procedure call, that is to say, two servers A and B, one application is deployed on server A, and you want to call the functions/methods provided by the application on server B.", this is not exact explanation of RPC.

In the whitepaper is written "After smart contract is processed by AI cloud computing, it can be perfectly compatible with other public chains to achieve high chain-to-chain collaboration.", could you elaborate more on that? ;-)

In the whitepaper is written "When the dependency between two modules is higher, their coupling is higher, which is called high coupling." - are you sure of that?

I think that description of the game in the form of GIVEN-WHEN-THEN convention is really, really good idea. In the source code I have found two types of comments, the first one is in English, the [second](https://github.com/SubGame-Network/subgame-network/blob/master/pallets/gametemplates-guess-hash/src/lib.rs) one is Taiwanese, I think that the comments should be unified in English language.
Regarding documenting a source code, I recommend to use [Rustdoc](https://doc.rust-lang.org/rustdoc/index.html) even for the most crucial functions I know that the Rome wasn't built in a day but let start to document a source code in Rust-like way.

I just want to ask about staging environment, there is any? If not, are you going to run the node with working frontend for public usage? I suggest also to improve bibliography in the whitepaper, some [tips on that](https://guides.library.cornell.edu/annotatedbibliography).
