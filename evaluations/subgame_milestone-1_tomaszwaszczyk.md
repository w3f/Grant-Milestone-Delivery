# Evaluation

- **Status:** In Progress
- **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/374
- **Milestone:** 1
- **Kusama Identity:** [FqFKeVrWbBDVBk8U9VvL8gSFwUm4nj9fEZmtQvmViZzLvnv](https://polkascan.io/kusama/account/FqFKeVrWbBDVBk8U9VvL8gSFwUm4nj9fEZmtQvmViZzLvnv)
- **Previously successfully merged evaluation:** None

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 1. | License | <ul><li>[X] </li></ul> | [https://github.com/SubGame-Network/subgame-network/blob/master/LICENSE](https://github.com/SubGame-Network/subgame-network/blob/master/LICENSE) | Looks good to me | 
| 2. | Documentation | <ul><li>[] </li></ul> | [https://subgame.guanfantech.com/api/assets/whitePaper/en/%E6%8A%80%E8%A1%93%E7%99%BD%E7%9A%AE%E6%9B%B8_%E8%8B%B1%E6%96%87_v7.pdf](https://subgame.guanfantech.com/api/assets/whitePaper/en/%E6%8A%80%E8%A1%93%E7%99%BD%E7%9A%AE%E6%9B%B8_%E8%8B%B1%E6%96%87_v7.pdf) | Name of the file shall be English-like, look at General Notes section |
| 3. | Testing Guide | <ul><li>[X] </li></ul> | [https://github.com/SubGame-Network/subgame-network/tree/master/pallets](https://github.com/SubGame-Network/subgame-network/tree/master/pallets) | |
| 4. | SubGame Node | <ul><li>[] </li></ul> | [https://github.com/SubGame-Network/subgame-network/tree/master/node](https://github.com/SubGame-Network/subgame-network/tree/master/node) | Taiwanese comments and lack of Rustdoc [link](https://github.com/SubGame-Network/subgame-network/commit/cf903db5256d0b75eed9fb1868d0a76e5bfa8123) |
| 5. | pallet-chips | <ul><li>[] </li></ul> | [https://github.com/SubGame-Network/subgame-network/tree/master/pallets/chips](https://github.com/SubGame-Network/subgame-network/tree/master/pallets/chips) | Hard coding `weight` value is not the best possible strategy vide `default_weight.rs`, to implement it better you can look at Substrate code where is used Frame System pallet, but leave it now and improve it in at a later stage. Let's add Rustdoc and remove Taiwanese comments |
| 6. | pallet-gametemplates | <ul><li>[] </li></ul> | [https://github.com/SubGame-Network/subgame-network/tree/master/pallets/gametemplates](https://github.com/SubGame-Network/subgame-network/tree/master/pallets/gametemplates) | Let start using Rustdoc, please improve readability of a source code like unified indentations |
| 7. | pallet-gamecenter | <ul><li>[] </li></ul> | [https://github.com/SubGame-Network/subgame-network/tree/master/pallets/gamecenter](https://github.com/SubGame-Network/subgame-network/tree/master/pallets/gamecenter) | Like above, could you explain why do you use `extern crate alloc;`?  |
| 8. | pallet-gametemplates-guess-hash | <ul><li>[] </li></ul> | [https://github.com/SubGame-Network/subgame-network/tree/master/pallets/gametemplates-guess-hash](https://github.com/SubGame-Network/subgame-network/tree/master/pallets/gametemplates-guess-hash) | Mixed type of comments - English and Taiwanese |
| 9. | Front End | <ul><li>[] </li></ul> | [https://github.com/SubGame-Network/GameCenter/tree/master/frontend](https://github.com/SubGame-Network/GameCenter/tree/master/frontend) | I am not able to run the frontend part, below I include more [details](https://github.com/SubGame-Network/GameCenter/issues/1) |
| 10. | UI mock-ups | <ul><li>[X] </li></ul> | [https://www.figma.com/file/hbwDsOVkP5tJqCnl7v0Smr/Subgame-center](https://www.figma.com/file/hbwDsOVkP5tJqCnl7v0Smr/Subgame-center) | Looks good to me, big plus for a dark mode |
| 11. | Article/Tutorial | <ul><li>[X]</li></ul> | [https://github.com/SubGame-Network/subgame-network/blob/master/docker_run.md](https://github.com/SubGame-Network/subgame-network/blob/master/docker_run.md) | |
| 12. | Docker | <ul><li>[] </li></ul> | [https://github.com/SubGame-Network/GameCenter](https://github.com/SubGame-Network/GameCenter) | Docker works smoothly althought frontend part does not want to start as I have mentioned in front-end part |

## General Notes

Good work, let me explain a room for improvements. In the context of whitepaper, I am not sure whether there is a need to mention about Bitcoin performance but what is more important, when I was reading the whitepaper I have read many general terms like:
- "providing unlimited possibilities for distributed mobile applications."
- "SubGame is a public chain development team based on the Polkadot parachain"
- "It combines public cloud and private cloud hybrid storage technology"
- "blockchain storage space"
- "Polkadot can be said to be a creation public chain that has reached a new level of technical strength. It was developed by the Web3 Foundation."
- "After the smart contract developed on the SubGame chain is processed by AI cloud computing, it can be perfectly compatible with other public chains to achieve high chain-to-chain collaboration."

I am really afraid when some software engineer claims that: "will deliver unlimited possibilities", maybe this statement replace with more spesific description like "we will deliver SDK in order to give software enginners possibility to integrate with" and try to propose (even a draft) of interfaces, the interface is not be carved in stone and everyone understand it. Regarding "based on the Polkadot parachain", I think that the chain is based on Substrate Framework, not "parachain", in case you have a plan to became a parachain would be interesting what is your strategy to become one? Combining public and private cloud, what does it really mean, maybe more specific what are you going to deliver, same with "blockchain storage space". Maybe there is a room to use already existing solutions like IPFS, I suggest to look at [SubSocial](https://app.subsocial.network/) they are going to use IPFS. Web3 Foundation is an organisation for research, strictly speaking Substrate framework was developed by Parity Technologies company and "Polkadot" is the name of relay chain as a whole network. Could you describe more about "combining" smart contracts and AI, I know those word but what does it mean in practical sense? Comment regarding "Data on Chain" section, I do not think that blockchain technology per se is a good/cheap/efficient way to keep data, maybe research IPFS solution? And a comment regarding: "it can be perfectly compatible with other public chains to achieve high chain-to-chain collaboration" could you describe how are you going to deliver it in more spesific way? In the whitepaper there are pictures of mobile phones, are you going to deliver mobile version, if so how are you going to integrate wallet on mobile?

I think that description of the game in the form of GIVEN-WHEN-THEN convention is really, really good idea. In the source code I have found two types of comments, the first one is in English, the [second](https://github.com/SubGame-Network/subgame-network/blob/master/pallets/gametemplates-guess-hash/src/lib.rs) one is Taiwanese, I think that the comments should be unified in English language.
Regarding documenting a source code, I recommend to use [Rustdoc](https://doc.rust-lang.org/rustdoc/index.html) even for the most crucial functions I know that the Rome wasn't built in a day but let start to document a source code in Rust-like way.

I just want to ask about staging environment, there is any? If not, are you going to run the node with working frontend for public usage? I suggest also to improve bibliography in the whitepaper, some [tips on that](https://guides.library.cornell.edu/annotatedbibliography).
