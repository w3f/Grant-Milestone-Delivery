# Evaluation

- **Status:** accepted
- **Application Document:** [agridot](https://github.com/w3f/Grants-Program/blob/master/applications/AgriDot.md)
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by PieWol

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul> |[APP MIT](https://github.com/kacena123/AgriDot/blob/main/LICENSE), [BE MIT](https://github.com/kacena123/agridot-backend/blob/main/LICENSE), [DOCS MIT](https://github.com/kacena123/agridot-docs/blob/main/LICENSE)| MIT| 
| 0b.  | Documentation |<ul><li>[x] </li></ul> |[AgriDot Mobile dAPP Readme](https://github.com/kacena123/AgriDot/blob/main/README.md), [AgriDot Backend readme](https://github.com/kacena123/agridot-backend/blob/main/README.md), [Official documentation link](https://kacena123.github.io/agridot-docs/)| detailed user documentation. very nice. | 
| 0c.  | Testing guide | <ul><li>[x] </li></ul> | [BE Unit tests guide](https://github.com/kacena123/agridot-backend?tab=readme-ov-file#run-tests), [AgriDot dAPP Unit tests guide](https://github.com/kacena123/AgriDot?tab=readme-ov-file#other-commands) | unit tests all passing | 
| 0d.  | Docker | <ul><li>[x] </li></ul> | [Dockerfile AgriDot dAPP](https://github.com/kacena123/AgriDot/blob/main/Dockerfile), [Dockerfile Agridot BE](https://github.com/kacena123/agridot-backend/blob/main/Dockerfile) | works | 
| 0e.  | Article | <ul><li>[x] </li></ul> | [AgriDot - Revolutionary Web3 mobile dApp for Farmers](https://medium.com/@valova.katarin/5e4a886c1604) | ok | 
| 1.a | Fields as NFTs (Private) |<ul><li>[x] </li></ul> | [Private fields feature commit](https://github.com/kacena123/AgriDot/commit/c54553b96181ed2a46c53c8c3073c5fe1c4c257a), [Fields final v2](https://github.com/kacena123/AgriDot/commit/ad6fe12ed44473a63f24389fbba4b58cf2709ae6)| ok | 
| 1.b | Fields as NFTs (Public) |<ul><li>[x] </li></ul> | [Public fields feature commit](https://github.com/kacena123/AgriDot/commit/c54553b96181ed2a46c53c8c3073c5fe1c4c257a), [Fields final v2](https://github.com/kacena123/AgriDot/commit/ad6fe12ed44473a63f24389fbba4b58cf2709ae6) | ok | 
| 1.c | See the weather for your NFT fields |<ul><li>[x] </li></ul> | [Weather field monitoring feature commit](https://github.com/kacena123/AgriDot/commit/ca482d19104931bc3c78b076a1053bb0cc7dce43), [Weather final](https://github.com/kacena123/AgriDot/commit/ad6fe12ed44473a63f24389fbba4b58cf2709ae6) | Every field is able to display weather in hourly intervals and daily intervals (One week in advance) | 
| 2.a | Pests as NFTs |<ul><li>[x] </li></ul> |[Pest final commit](https://github.com/kacena123/AgriDot/commit/b50725419536ac1cffcb0156b63dddf52cd065a5) | nice proximity feature. What about a stake based system for reporting to allow really decentralized pest reports? | 
| 2.b | Donation system for Pest reporters |<ul><li>[x] </li></ul> | [Donation feature commit v1](https://github.com/kacena123/AgriDot/commit/a929a7db63ad1d9b8992a878b3ea2cf334d230ce) | ok | 
| 3.a | Guides as NFTs |<ul><li>[x] </li></ul> | [Guides final commit](https://github.com/kacena123/AgriDot/commit/60943dde034af7a67cbe6c7e229f88d9963481ac) | ok. | 
| 3.b | Rating and donation system for Guides | <ul><li>[x] </li></ul> | [Donation feature commit v1](https://github.com/kacena123/AgriDot/commit/a929a7db63ad1d9b8992a878b3ea2cf334d230ce) | nice | 
| 4. | Crop origin proofs |  <ul><li>[x] </li></ul> | [Crops feature commit](https://github.com/kacena123/AgriDot/commit/c54553b96181ed2a46c53c8c3073c5fe1c4c257a), [Crops feature commit final](https://github.com/kacena123/AgriDot/commit/24793da52b46c70e247d96ac12b9920b90165c43) | I think without an instance that actually verifies all claimed data, this is not really a sound proof. | 
| 5.a | Developer Guide | <ul><li>[x] </li></ul> | [documentation section](https://kacena123.github.io/agridot-docs/dev-guide/introduction.html)| ok | 
| 5.b | User Guide | <ul><li>[x] </li></ul> | [documentation section](https://kacena123.github.io/agridot-docs/user-guide/intro.html), [Video guide](https://www.youtube.com/watch?v=3khnW3acfJk) | nice user guide. the video is a great feature walkthrough. | 



## General Notes
Thanks for submitting your delivery. I'm really happy with the project and you managed to deliver everything that was agreed upon. Well done!

I was also happy to read in your article that you are planning on creating a dedicated parachain for AgriDot. Unless you really hit technical limitations without your own chain I would suggest to instead implement AgriDot on Plaza, once it has hit a more mature state. Anyways I'm happy that you are interested in continuing this project and I hope AgriDot will attract a lot of users.

I do wonder why you chose to implement an encryption for the private fields that is based on a password and not encrypted to the account address itself. Maybe so that you can eventually share the password without compromising your keys?

It was nice to see the whole setup work with Expo Go. I think the project is awesome and I hope you manage to get as many farmers as possible to leverage this technology. All the best going forward.



## Tests

Backend Tests
````
Test Suites: 2 passed, 2 total
Tests:       9 passed, 9 total
Snapshots:   0 total
Time:        6.908 s
Ran all test suites.
````

Guide fetching didn't work locally. I assume it really is just a permission issue since you managed to show it working in the demo video.

````
 (NOBRIDGE) ERROR  Error fetching likes: [FirebaseError: Missing or insufficient permissions.]
````





