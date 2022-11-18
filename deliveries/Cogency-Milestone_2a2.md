## Milestone Number
2a.2

## Context (Aim) 

| Number        | Workshop      | Date         | Duration     |
| ------------- | ------------- |------------- |------------- |
| 2.1 | History of similar projects: a case study  |17.10.2022 - 4PM CET|90min|
| 2.2 | Technology  - deep dive |19.10.2022 - 4PM CET|90min|

This week the group has reviewed past Web3 projects, focusing on the reasons why they didn’t work and how future projects could look. In the second session of the week, Radhakrishna Dasari has expanded our Web3 knowledge by talking about Polkadot & Kusama, DOT, Parachains and Substrate, to name a few.

## Output

During the first session (2.1), Walid Al-Saqaf, Associate Professor in Journalism at Södertörn University in Stockholm, has listed similar Blockchain projects in journalism run in the past:

- Decentralised News Network (DNN): https://dnn.media/
- Civil: https://joincivil.com/
- Publicism: http://www.publicism.nl/
- Reporter: http://www.reportercommunity.tech/
- Publiq: https://publiq.network/
- Scorum: https://scorumcoins.com - Sport news blogging
- Snip: https://www.snip.today/ - News platform
- Trive: https://trive.news/ - Browser plugin to detect news
- Steemit: https://steemit.com/ - Citizen journalism and blogging platform
- Hiveway: https://hiveway.net - Twitter-like microblogging platform
- Ong Social: https://ong.social/ - Citizen journalism and blogging platform
- Hashtiv: https://hashtiv.io/ - Citizen journalism and blogging platform
- Stock Block: https://stockblock.io/ - Media artists - copyright protection
- SocialX: https://socialx.network/ - Photo sharing platform

Particular emphasis has been placed on Civil:
- Civil was a decentralised network of people, each of whom have a stake in maintaining the health of the Civil ecosystem, that collectively improved and supported the content on the platform, which was all recorded on a transparent, immutable, and distributed ledger[^1].

- With its own token called CVL, CVL bearers can use their stake to try to shut down incompetent or corrupt Newsrooms, improving the overall trust of the piece of news published.

### Civil
- Civil is no longer running[^2] for a variety of reasons:
  - It wasn’t really a pure decentralised system:
    - A Civil Council (of Elders) had the authority to reverse the community’s vote.
    - Newsrooms relied on Civil’s websites and servers. Due to this reliance, Newsrooms may suffer if the Civil server is exposed to an attack or malfunction.
  - Buying the CVL token was extremely complicated[^3] 
  - The bigger your stack of CVL tokens is, the more sway you could exert over the community, which made the mechanism
  - Civil operated under the Ethereum blockchain, which was quite expensive due to gas fees. 
  - The mechanism wasn’t mature enough. Civil was developing and testing its business model while dealing with how to bring trust into newsrooms. They attempted to do those two things at the same time.
  - Cryptoeconomics were too bureaucratic: 
  
  <img width="618" alt="image" src="https://user-images.githubusercontent.com/114009050/197408024-b6b6cde2-1b9e-433b-ae3d-13647947ffd4.png">

### Use Cases

Although blockchain is far from mass adoption, there are already B2C filming companies that offer a curated list of indie and short films using blockchain technology[^4][^5]. The filming industry has taken steps towards Blockchain. In this sense, the team discussed what might prevent other types of media, like News, from adopting the new paradigm. Is news and current affairs content more controversial? Are we missing use cases? Is it a matter of creating scarcity for certain types of valuable articles?

Apart from the content itself, some other use cases have been discussed: 
- Improved Login: Connecting humans through NFT-based memberships[^6]
- Verifying that an ad impression has been really delivered. From a pre ad delivery perspective, the drawback is that currently Blockchain is too slow, and a second delay of not showing an ad could cost thousands of dollars. Further research needs to be made to assess if this could be applicable for post ad delivery.
- Analytics
- Revisioning: we can prove legally that an article has or hasn’t had a specific piece of text, image or video.

Based on the above, a further classification can be made between the type of use case and its associated outcome:

| Use Cases      | Outcome      | 
| ------------- | ------------- |
| Scarcity  | Monetization  |
| Verification of users for a site | Monetization  |
| Verification of media for users | Value  |
| Participation  | Value  |
| Robustness  | Cost |

Some other points have also been discussed:
- Suitability of “startup” as the organising metaphor for Cogency. This is more an infrastructure project, creating the roads and rails rather than building something that is a one-off.
- Kernel: A custom web3 educational community[^7]
- We can’t disrupt the Internet as it is, it needs to be compatible with what we have now. It should be an add-on.
- Centralisation vs Decentralisation, and the need for a certain degree of centralisation[^8][^9].


During the second session of the week (2.2), Radhakrishna Dasari delved into Polkadot and the aspects that make it different from other Blockchains. The main elements of Polkadot blockchain are as follows:

<img width="934" alt="image" src="https://user-images.githubusercontent.com/114009050/197408407-11dc3cac-02ce-42d5-affa-d1279ff54c43.png">

- Relay chain: 
  - The heart of Polkadot, responsible for the network’s security, consensus and cross-chain interoperability. 
  - It’s located in Layer 0 (Technology) of the Polkadot’s stack.

- Parachains & Bridges: 
  - Parachains are sovereign blockchains that can have their own tokens and optimise their functionality for specific use cases. To connect to the Relay Chain, parachains can pay as they go or lease a slot for continuous connectivity. There are currently 28 parachains live in Polkadot.
  - The aim of bridges is to connect Polkadot with other blockchains (e.g. Bitcoin, Ethereum) and, since they are having their own community, both bridges and parachains need to have a degree of independence from the Relay chain. That’s the reason why they are located in a layer above, called Layer 1 (Applications). 

- Consensus Roles:
  - Collators:
    - Maintain shards by collecting shard transactions from users and producing proofs for validators.
    - They are listener nodes that can’t manipulate any other node in the network.
    - The parachain needs at least one collator to submit a block to the Relay chain.
  - Validators:
    - Secure the Relay Chain by staking DOTs, validating proofs from collators and participating in consensus with other validators.

- DOT token[^10]:
  - Polkadot token holders have complete control over the protocol. All privileges, which on other platforms are exclusive to miners, will be given to the Relay Chain participants (DOT holders).
  - It’s an inflationary token because participants are rewarded by their participation, therefore the supply increases. A question was raised during the session: will this cause the DOT value to decrease over time? Possibly, but since DOT is the means to do certain things in Polkadot, if you are just holding, you are not participating in the network, which is contrary to Polkadot's vision.

- Kusama[^11]:
  - Kusama is the Polkadot’s canary network to experiment with certain features.
  - Kusama is a Polkadot’s branch that has evolved over the last years with the aim of doing R&D and early deployments without compromising Polkadot, which is the main branch.

<img width="968" alt="image" src="https://user-images.githubusercontent.com/114009050/197408607-ae41efc3-5710-4b36-9107-607671440c14.png">

Challenges of creating custom blockchains:
- Overhead: there are many aspects that need to be recreated. Typically, there’s a need to fork the Bitcoin network, that is, the dominant blockchain, to start creating a custom network.
- Isolation: blockchains can’t be connected with each other easily.
- Security: a permissionless open network is a gateway for people with malicious intent. 

Substrate:
- Substrate is a software development framework to build blockchain technologies. 
- Any user can build parachains with the substrate playground: https://playground.substrate.dev/  You can build your own parachain for testing purposes with a single node (your own computer). It creates a block every 6 seconds.

Some other points have also been discussed:
- Cosmos as the main competitor of Polkadot[^12]
- Polkadot and parachains can easily upgrade without forking the chain, which means a smooth transition from node X (old version) to node X+1 (new version) using the same branch.
- Polkadot & Kusama ecosystem projects directory: https://parachains.info/ where you can find projects, investors, news, addresses, etc.


## Next steps

Knowing the very basics about Web3, Blockchain and Polkadot, from next week we'll put all our brains to work together towards specific solutions. During the third week of the project, Walid Al-Saqaf, Associate Professor in Journalism at Södertörn University in Stockholm, will run a couple of brainstorming sessions to move the group from learning about the tech to thinking about solutions.

| Number        | Workshop      | Date         | Duration     |
| ------------- | ------------- |------------- |------------- |
| 3.1 | Brainstorming (1/2)  |25.10.2022 - 3.30PM CET|90min|
| 3.2 | Brainstorming (2/2) |28.10.2022 - 3.30PM CET|90min|


 [^1]: https://decrypt.co/3341/understanding-civil
 [^2]: https://civil.co/
 [^3]: https://www.niemanlab.org/2018/09/how-to-buy-into-journalisms-blockchain-future-in-only-44-steps/ 
 [^4]: https://sensoriumxr.com/articles/best-blockchain-movies
 [^5]: https://www.moviebloc.com/
 [^6]: https://unlock-protocol.com/ 
 [^7]: https://www.kernel.community/en/
 [^8]: https://www.ietf.org/archive/id/draft-nottingham-avoiding-internet-centralization-02.html
 [^9]: https://tedium.co/2022/04/06/centralization-decentralization-social-networking-faq/
 [^10]: https://tedium.co/2022/04/06/centralization-decentralization-social-networking-faq/](https://polkadot.network/dot-token/
 [^11]: https://kusama.network/
 [^12]: https://kusama.network/](https://www.blockchain-council.org/blockchain/polkadot-vs-cosmos/)
