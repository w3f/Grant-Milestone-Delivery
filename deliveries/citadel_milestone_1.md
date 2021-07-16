# Steps Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSdSqj2vYjvpiIytkjcc40Pwl0Eg76WGUAq5L9e8eFuuOegmLw/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Open-Grants-Program/blob/master/applications/citadel.md




* **Step Number:** 1

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Citadel joined the Polkadot ecosystem as a validator | https://polkadot.subscan.io/waiting/14coT8D8CB5L71J2HtKh6aCXZawKkeA8WE3A55qry3qeHJmF | ... | 
| 2. | Set up the Polkadot node to connect the provider and make RPC calls | https://polkadot.subscan.io/waiting/14coT8D8CB5L71J2HtKh6aCXZawKkeA8WE3A55qry3qeHJmF | Provider is available only for our servers. We check for updates and our node is always up to date. |




* **Step Number:** 2


| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Interface preparation, design elements specifications, and tuning|https://www.figma.com/file/Xj6gXZIXn90l4ADwuE4xlQ/Send, https://www.figma.com/file/OOgENsczG6WytLvrssBBar/Stake| Polkadot send and stake pages| 


| Task ID | Module name | Description | Link |
| ------ | ----------- | ---- | ----- |
| 1.0 | Send page| Create interface of send transaction  | https://www.figma.com/file/Xj6gXZIXn90l4ADwuE4xlQ/Send |
| 2.0 | Staking page| Create interface of staking page | https://www.figma.com/file/OOgENsczG6WytLvrssBBar/Stake |
| 2.1 | Stake nodes| Create components of staking nodes operation | https://www.figma.com/file/OOgENsczG6WytLvrssBBar/Stake |
| 2.2 | Unstake nodes| Create components of unstaking nodes operation | https://www.figma.com/file/OOgENsczG6WytLvrssBBar/Stake |






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
| 3.  |Testing| https://youtu.be/0T8CE3r_xbA | Send transaction demonstration video|

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
| 2.  |Testing| https://youtu.be/BcE-KQgXV5k | Polkadot stake nodes demonstration video |


| Task ID | Module name | Description | Link |
| ------ | ----------- | ---- | ----- |
| 1.0 | Implementation of properties to build nomination and staking transaction | Collecting properties and request the builded transaction | https://github.com/citadeldao/polkadot/blob/main/preparestake.js |
| 1.1 | Strategy of nominating and staking| Stake and nominate validators to earn rewards | https://github.com/citadeldao/polkadot/blob/main/polkadot.js#L381 |
| 1.2 | Strategy of signing the nominating and staking transaction | Generate the signature for builded transaction with users private key | https://github.com/citadeldao/polkadot/blob/main/stake.js |
| 2.0 | Nominated validators | Show the list of nominated and active validators on current era | https://github.com/citadeldao/polkadot/tree/main/stakenodes |

