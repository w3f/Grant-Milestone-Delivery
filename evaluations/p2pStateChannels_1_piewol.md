# Evaluation

- **Status:** accepted
- **Application Document:** [P2P State Channels](https://github.com/w3f/Grants-Program/blob/master/applications/P2PStateChannels.md)
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by PieWol

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [License file](https://github.com/peer3to/state-channels-plus/blob/master/LICENSE)  | MIT, compiling the solidity contracts emits warnings about unspecified licenses. |
| **0b.** | Documentation | <ul><li>[x] </li></ul> |https://github.com/peer3to/state-channels-plus/blob/master/docs/mfsDocs.md | ok  |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | https://github.com/peer3to/state-channels-plus/tree/master/test | ok |
| **0d.** | Docker | <ul><li>[x] </li></ul> | https://github.com/peer3to/state-channels-plus/blob/master/Dockerfile | works |
| **1** | Channel Opening | <ul><li>[x] </li></ul> | https://github.com/peer3to/state-channels-plus/blob/db81f2bb11a032a2e4678b98ceed9f7944477325/examples/TicTacToe/contracts/TicTacToe/TicTacToeStateChannelManagerProxy.sol#L23 , [interface](https://github.com/peer3to/state-channels-plus/blob/master/contracts/V1/StateChannelManagerInterface.sol) | ok |
| **2** | Cryptography | <ul><li>[x] </li></ul> | https://github.com/peer3to/state-channels-plus/blob/master/contracts/V1/StateChannelDiamondProxy/StateChannelUtilLibrary.sol | ok |
| **3** | Liveness | <ul><li>[x] </li></ul> | https://github.com/peer3to/state-channels-plus/blob/db81f2bb11a032a2e4678b98ceed9f7944477325/examples/TicTacToe/contracts/TicTacToe/TicTacToeStateChannelManagerProxy.sol#L23 | ok |



## General Notes
Looks good, all tests are passing and all deliverables have been achieved. Thanks! A lot of files could use some more expressive inline documentation. I'm hopeful that this will be improved in the future. 
I'd love to see a PVM integration.  

## tests
all tests passing
````
  31 passing (11s)
````
