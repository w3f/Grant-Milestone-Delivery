# Steps Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSdSqj2vYjvpiIytkjcc40Pwl0Eg76WGUAq5L9e8eFuuOegmLw/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Open-Grants-Program/blob/master/applications/citadel.md




* **Step Number:** 1

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Citadel joined the Polkadot ecosystem as a validator | https://polkadot.subscan.io/account/14coT8D8CB5L71J2HtKh6aCXZawKkeA8WE3A55qry3qeHJmF | ... | 
| 2. | Set up the Polkadot node to connect the provider and make RPC calls | https://polkadot.subscan.io/account/14coT8D8CB5L71J2HtKh6aCXZawKkeA8WE3A55qry3qeHJmF | Provider is available only for our servers. We check for updates and our node is always up to date. |




* **Step Number:** 2


| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Interface preparation, design elements specifications, and tuning|https://www.figma.com/file/WZcBlILPPpzlKiHUxupujR/%F0%9F%94%A5-Citadel.one-2.0?node-id=1104%3A1973, https://www.figma.com/file/WZcBlILPPpzlKiHUxupujR/%F0%9F%94%A5-Citadel.one-2.0?node-id=10778%3A337966| Polkadot send and stake pages| 


| Task ID | Module name | Description | Link |
| ------ | ----------- | ---- | ----- |
| 1.0 | Send page| Create interface of send transaction  | https://www.figma.com/file/WZcBlILPPpzlKiHUxupujR/%F0%9F%94%A5-Citadel.one-2.0?node-id=1104%3A1973 |
| 2.0 | Staking page| Create interface of staking page | https://www.figma.com/file/WZcBlILPPpzlKiHUxupujR/%F0%9F%94%A5-Citadel.one-2.0?node-id=10778%3A337966 |
| 2.1 | Stake nodes| Create components of staking nodes operation | https://www.figma.com/file/WZcBlILPPpzlKiHUxupujR/%F0%9F%94%A5-Citadel.one-2.0?node-id=10778%3A337966 |
| 2.2 | Unstake nodes| Create components of unstaking nodes operation | https://www.figma.com/file/WZcBlILPPpzlKiHUxupujR/%F0%9F%94%A5-Citadel.one-2.0?node-id=10778%3A337966 |






* **Step Number:** 3


| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Polkadot blockchain scrutiny, data transfer to PostgreSQL (for data aggregation and statistics building)| ... | This step will bring us some vital milestones: our database will contain all the transactions - new ones sourced directly from the blockchain will be also stored in our database that is convenient for the development needs (balance/rewards charts creation, etc.)| 
| 2.  |Source code|https://github.com/citadeldao/polkadot/blob/main/sourceCode.js| Source code for blockhain integration on our platform |
| 3.  |Testing|  https://github.com/citadeldao/polkadot/blob/main/testing.js | Testing the parser with mocha test|


| Task ID | Module name | Description | Link |
| ------ | ----------- | ---- | ----- |
| 1.0 | Parsing transactions| Download all blocks with transactions to our database | https://github.com/citadeldao/polkadot/blob/main/polkadot.js#L85  |
| 2.0 | Connector with methods: (isSystemAddress, validateAddress, getLastBlock, getOneBlock, filterOperations, getDelegationBalanceInfo) | Methods for processing a transactions | https://github.com/citadeldao/polkadot/blob/main/polkadot.js#L19 |
| 3.0 | Download the list of validators | Downloading the validators list for staking. This process done by automated script. | https://github.com/citadeldao/polkadot/blob/main/polkadot.js#L569 |
| 3.1 | List of validators by address | Get the list of validators by address who is nominated| https://github.com/citadeldao/polkadot/blob/main/polkadot.js#L564 |
| 4.0 | Currency exchange data and market caps | Download, update and store currency exchange data and the market caps | https://github.com/citadeldao/polkadot/blob/main/OtherCoins.js |



* **Step Number:** 4

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Examination of Polkadot transfer methods and staking system| ... | This is the building step of transactions with requested properties such as: transfer and stake | 
| 2.  |Source code| https://github.com/citadeldao/polkadot/blob/main/sourceCode.js | Source code for building transactions |



| Task ID | Module name | Description | Link |
| ------ | ----------- | ---- | ----- |
| 1.0 | Build transactions | Create unsigned transaction with requested properties| https://github.com/citadeldao/polkadot/blob/main/polkadot.js |
| 1.1 | Build transfers | Create unsigned transaction for transferring balances | https://github.com/citadeldao/polkadot/blob/main/polkadot.js#L362 |
| 1.1.0 | Build transfer | Create transaction for transferring some liquid free balance to another account | https://github.com/citadeldao/polkadot/blob/main/polkadot.js#L362 |
| 1.1.1 | Build transferKeepAlive | Create transaction for transferring balance, but with a check that a transfer will not kill the origin account | https://github.com/citadeldao/polkadot/blob/main/polkadot.js#L362 |
| 1.2 | Build staking | Create unsigned transaction for staking balances | https://github.com/citadeldao/polkadot/blob/main/polkadot.js#L406 |
| 1.2.0 | Build bond | Create transactions for bonding balances, including a stash account where rewards will drip | https://github.com/citadeldao/polkadot/blob/main/polkadot.js#L406 |
| 1.2.1 | Build bondExtra | Create transactions for adding balances to the bonded ones | https://github.com/citadeldao/polkadot/blob/main/polkadot.js#L406 |
| 2.0 | Create payload | Create a signer payload for builded transaction | https://github.com/citadeldao/polkadot/blob/main/payload.js |
| 2.1 | Insert properties to payload | Insert necessary properties such tip, transactionVersion, genesisHash, blockHash, runtimeVersion, account nonce, extrinsicVersion | https://github.com/citadeldao/polkadot/blob/main/payload.js |
| 3.0 | Evaluate fees for transactions | Get the fee for builded transaction| https://github.com/citadeldao/polkadot/blob/main/evaluateFee.js |






* **Step Number:** 5

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Analysis of a network's transfer transaction; search for necessary libraries or APIs;determination of transaction preparation logic; writing logic; signing; writing the send logic |...| ...| 
| 2.  |Source code|Detailed links applied below| Source code for blockhain integration on our platform |
| 3.  |Testing| https://www.youtube.com/watch?v=5HALywJtjaI | Send transaction demonstration video|

| Task ID | Module name | Description | Link |
| ------ | ----------- | ---- | ----- |
| 1.0 | Handle the account by the private key | Create a Keyring object from user's private key to handle the account | https://github.com/citadeldao/polkadot/blob/main/oneseed-polkadot.ts  |
| 1.1 | Create registry to make RPC calls | Prepare a TypeRegistry with active MetaData for decode extrinsic payload since signing process is offline. | https://github.com/citadeldao/polkadot/blob/main/base.signing-strategy.ts#L47 |
| 1.2 | Generate a signature for requested transaction | Generate a signature by signing the Extrinsic Payload with Keyring which stores private key | https://github.com/citadeldao/polkadot/blob/main/base.signing-strategy.ts#L51 |
| 1.3 | Request the transaction sending | Send the signature to server to get hash of the transaction on blockchain | https://github.com/citadeldao/polkadot/blob/main/base.signing-strategy.ts#L56 |
| 2.0 | Show details of the transaction | Checking availability of transaction in polkascan | https://github.com/citadeldao/polkadot/blob/main/listoftransaction.js |





* **Step Number:** 6

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Analysis of network's staking transaction, search for necessary libraries or APIs;determination of transaction preparation logic; writing logic; signing; writing the send logic. Polkadot validator list parsing. | Detailed links applied below | ...| 
| 2.  |Testing| https://www.youtube.com/watch?v=QgG87TO_H1E&feature=youtu.be , https://youtu.be/C6V-4a4ULMM | Polkadot stake, unstake nodes demonstration videos |


| Task ID | Module name | Description | Link |
| ------ | ----------- | ---- | ----- |
| 1.0 | Implementation of properties to build nomination and staking transaction | Collecting properties and request the builded transaction | https://github.com/citadeldao/polkadot/blob/main/preparestake.js |
| 1.1 | Strategy of nominating and staking| Stake and nominate validators to earn rewards | https://github.com/citadeldao/polkadot/blob/main/polkadot.js#L381 |
| 1.2 | Strategy of signing the nominating and staking transaction | Generate the signature for builded transaction with users private key | https://github.com/citadeldao/polkadot/blob/main/stake.js |
| 2.0 | Nominated validators | Show the list of nominated and active validators on current era | https://github.com/citadeldao/polkadot/tree/main/stakenodes |



* **Step Number:** 7

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Transaction and price feed metrics adding | ... | At this stage, we are preparing the relevant data for charts and the network's significant metrics | 
| 2. | Source code | https://github.com/citadeldao/polkadot/blob/main/sourceCode.js | Source code for blockhain integration on our platform |
| 3.  |Testing|  https://github.com/citadeldao/polkadot/blob/main/testing.js | Testing the parser with mocha test|


| Task ID | Module name | Description | Link |
| ------ | ----------- | ---- | ----- |
| 1.0 | Multiple currency rates  | Get currency rates and store them in the database to visualize changes on the charts | https://github.com/citadeldao/polkadot/blob/main/OtherCoins.js  |
| 2.0 | Approximated era duration | We use approximated era duration which is 24 hours to handle the unstaked assets | https://github.com/citadeldao/polkadot/blob/main/eraduration.js |
| 3.0 | Minimum Nominator Bond value | We use minNominatorBond to optimize the transactions and to avoid fails | https://github.com/citadeldao/polkadot/blob/main/minnominatorbondvalue.js |


* **Step Number:** 8

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Development of mobile app for interaction with Polkadot wallets using Web API | https://www.figma.com/file/RhqgBddx8KhKC11Ck71SJx/Untitled?node-id=0%3A1 | Polkadot mobile integration |


| Task ID | Module name | Description | Link |
| ------ | ----------- | ---- | ----- |
| 1.0 | Send page| Create interface of send transaction  | https://www.figma.com/file/sQCbRcJERJmdHOccOE3qou/citadel.one-v2-mobile-polkadot-send?node-id=0%3A1 |
| 1.1 | Staking page| Create interface of staking page | https://www.figma.com/file/CCn4qdNX2OpDKQMwnhjsdn/citadel.one-v2-mobile-polkadot-stake?node-id=0%3A1 |
| 1.2 | Stake nodes| Create components of staking nodes operation | https://www.figma.com/file/CCn4qdNX2OpDKQMwnhjsdn/citadel.one-v2-mobile-polkadot-stake?node-id=0%3A1 |
| 1.3 | Unstake nodes| Create components of unstaking nodes operation | https://www.figma.com/file/ZLbTFaIcAMfsp4KzNSFmxW/citadel.one-v2-mobile-polkadot-unstake?node-id=0%3A1 |
| 2.0 | Stake  | Stake crypto assets | https://github.com/citadeldao/polkadot/blob/main/stake.dart |
| 2.1 | Unstake | Unstake crypto assets | https://github.com/citadeldao/polkadot/blob/main/unstake.dart |
| 2.2 | StakeAndNominate | Stake crypto assets and nominate to validator(-s) to get rewards| https://github.com/citadeldao/polkadot/blob/main/StakeAndNominate.dart|
| 2.3 | Transfer | Transfer the coins from one to another address between the net | https://github.com/citadeldao/polkadot/blob/main/transfer.dart |
| 3.0 | SignAndSend transaction to blockchain | Sign the built transaction and send to blockchain | https://github.com/citadeldao/polkadot/blob/main/SignAndSend.dart |


* **Step Number:** 9

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Performing different types of testing. Verification of the main scenarios such as sending tokens, and staking in the various environments including Ledger and Trezor wallets. | Detailed links applied below | ...| 


| Task ID | Module name | Description | Link |
| ------ | ----------- | ---- | ----- |
| 1.0 | Testing of block details by number | Parse extrinsics and events of block, test for correct different types of transaction properties | https://github.com/citadeldao/polkadot/blob/main/getOneBlock.js|
| 2.0 | Test every type of transaction, redelegate | Manually testing of different transactions on the platform | https://youtu.be/5HALywJtjaI , https://youtu.be/uvS9lpFgjQ0 |
| 2.1 | Test transfer | Transfering some balance to the new and elderly another addresses to check if it is possible to avoid the error of the case "an account liquidity restrictions prevent withdrawal" | https://www.youtube.com/watch?v=5HALywJtjaI |
| 2.2 | Test stake and nominate | To check if it is possible to stake and nominate once, since nominating is possible only if the amount to bond or active bonded amount is more than minNominatorBond. | https://youtu.be/TK_qW7snhYc |
| 3.0 | Test list of validators | Check if all active validators at current era appears with identity name | https://youtu.be/iZP53X9Ahm0 |
| 4.0 | Test address balances | Check if all balances of the address are correctly appeared on the platform | https://youtu.be/O1rOCyEDH2A |
| 5.0 | Test sent transaction hash | Check if hash of the transaction sent on the platform to blockchain is correct on scanners | https://youtu.be/zfFY4Buh11U |

