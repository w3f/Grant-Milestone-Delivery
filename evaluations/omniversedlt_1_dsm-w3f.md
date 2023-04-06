# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Omniverse%20DLT.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul> | [GPLv3](https://github.com/Omniverse-Web3-Labs/omniverse-swap/blob/web3-grant/LICENSE) |  |
| 0b. | Documentation |<ul><li>[ ] </li></ul> |  - [A high-level Introduction](https://github.com/Omniverse-Web3-Labs/Omniverse-DLT-Introduction/blob/main/README.md) <br/> - [How to build in `pallet` tech stack](https://github.com/Omniverse-Web3-Labs/omniverse-swap/blob/web3-grant/README.md) <br/> - [Tutorial of how to use](https://github.com/Omniverse-Web3-Labs/Omniverse-DLT-Introduction/blob/main/docs/README.md)  | Not fully evaluated yet. |
| 0c. | Testing Guide |<ul><li>[ ] </li></ul> | [The test guide for milestone 1](https://github.com/Omniverse-Web3-Labs/Omniverse-DLT-Introduction/blob/main/docs/test-guide/m1-test-guide.md) | Not fully evaluated yet. |
| 0d. | Article |<ul><li>[ ] </li></ul> | [link](https://medium.com/@xiyuzheng1984/omniverse-decentralized-ledger-technology-has-finished-the-first-milestone-66bbcd6546fa) | Not fully evaluated yet. |
| 1. | Substrate module: omniverse assets |<ul><li>[ ] </li></ul> | - [pallet for Omniverse FT](https://github.com/Omniverse-Web3-Labs/omniverse-swap/tree/web3-grant/pallets/assets) <br/> -[pallet for Omniverse NFT](https://github.com/Omniverse-Web3-Labs/omniverse-swap/tree/web3-grant/pallets/uniques) | Not fully evaluated yet. |
| 2. | Substrate module: omniverse protocol |<ul><li>[ ] </li></ul> | - [the basic operations](https://github.com/Omniverse-Web3-Labs/omniverse-swap/tree/web3-grant/pallets/omni-protocol) | Not fully evaluated yet. |  
| 3. | Substrate chain |<ul><li>[ ] </li></ul> | - [parachain itself](https://github.com/Omniverse-Web3-Labs/omniverse-swap/tree/web3-grant) | Not fully evaluated yet. |
| 4. | Off-Chain Tools: Operate the o-tokens |<ul><li>[ ] </li></ul> | [CLI Client](https://github.com/Omniverse-Web3-Labs/omniverse-swap-tools/tree/web3-grant) | Not fully evaluated yet. |


## Evaluation V1

I tried to test this locally following the Testing Guide. The instructions for creating an Omniverse account, creating a token, and deploying the EVM contract are fine. I personally had some difficulty getting the tokens to deploy the contract on Goerlin. Would be nice to have a way to test it locally using Ganache for example or another local EVM testnet. Would be very nice to have automated tests as well. 

I noticed [in this part](https://github.com/Omniverse-Web3-Labs/Omniverse-DLT-Introduction/blob/main/docs/Deployment.md#launch ) the command `npm src/main.js` should be `node src/main.js`. Please put some explanation of how to fill the fields in `.Secrets` file. I needed to guess that the json needed to be in a string escaped format. I used [this site](https://www.freeformatter.com/json-escape.html) to escape the json and put it in the backup. [For using the set members function in the remix](https://github.com/Omniverse-Web3-Labs/Omniverse-DLT-Introduction/blob/main/docs/Deployment.md#set-members-1) would be nice if was explained that the SUBSTRATE-TOKEN-ID needs to be the hex code of the TokenID.


When I tried to run the commands to test the operations, my token FT, which is in the local node, wasn't found, but the skywalker was.

```
user@localhost:~/Documents/Omniverse/omniverse-swap-tools/omniverse-helper$ node index.js -c FT secp256k1 unavailable, reverting to browser version {"code":-2,"message":"Token id not exist"}

user@localhost:~/Documents/Omniverse/omniverse-swap-tools/omniverse-helper$ node index.js -c skywalker secp256k1 unavailable, reverting to browser version {"code":0,"message":"Successfully"}
```

When I tried to mint some tokens the command appeared to be working fine, but I checked in the substrate and EVM, and no token was minted.

```
user@localhost:~/Documents/omniverse/omniverse-swap-tools/omniverse-helper$ node index.js -m FT,0x6ebfa6ca46c34ca5d8745a1e386d78855f08977ee7f6f0c379d931e6236916505cfcc97772d458f90f937835f2f0d090bc9ef67f9a626fefa979476bc3f1c238, 10000
secp256k1 unavailable, reverting to browser version
<Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 46 54 da 85 bc f9 0b ae 36 43 04 17 bd 4a fb 11 07 69 23 2b 77 60 fc ca 6e 62 7c f1 b8 15 ... 36 more bytes>
00000000000000000000000000000000000000014654da85bcf90bae36430417bd4afb110769232b7760fcca6e627cf1b81589fa0acf4ff41701a76a9fffed90c204dae2fe63eaf2685b7adc8173083523ec73ba66fa016ebfa6ca46c34ca5d8745a1e386d78855f08977ee7f6f0c379d931e6236916505cfcc97772d458f90f937835f2f0d090bc9ef67f9a626fefa979476bc3f1c23800000000000000000000000000000000
<Buffer d0 20 3f bd c6 d9 ef 14 e5 22 a0 a5 c0 dc 5f f0 47 0f 91 ae 08 39 96 69 e4 86 c6 bc af 5f 7b d7>
0xb2502dd187baa3368931cb7c3a7f8ba46999f55683a14a8226289d450f6cb1782e2fcb3e4408482b58f67bc64f333b54b54c202ac1fddc885b512cc860c74d6f1c
{
  nonce: 0,
  chainId: 1,
  initiatorAddress: 'FT',
  from: '0xda85bcf90bae36430417bd4afb110769232b7760fcca6e627cf1b81589fa0acf4ff41701a76a9fffed90c204dae2fe63eaf2685b7adc8173083523ec73ba66fa',
  payload: '0x0101016ebfa6ca46c34ca5d8745a1e386d78855f08977ee7f6f0c379d931e6236916505cfcc97772d458f90f937835f2f0d090bc9ef67f9a626fefa979476bc3f1c23800000000000000000000000000000000',
  signature: '0xb2502dd187baa3368931cb7c3a7f8ba46999f55683a14a8226289d450f6cb1782e2fcb3e4408482b58f67bc64f333b54b54c202ac1fddc885b512cc860c74d6f1c'
}
0x97051f09c51026b9c620e2ac15fe5ce7343c7c4d66040e8d1729572256cf4b76
```

![image (15)](https://user-images.githubusercontent.com/112647953/229838104-ff9a07a1-12ca-46a5-943d-97bfc4d48584.png)

![image (16)](https://user-images.githubusercontent.com/112647953/229838133-b6544859-04c1-46cd-aebf-4fcd21a53740.png)


I need some balance of the created token to check the other functions. I could not test since mint of the tokens failed. 

If this could help, here are the address of the contract and accounts .

- Contract Address: 0xfBB905699a095c5c9062B4b5cEe8dA0a3E220086

- EVM Address of the account used for deployment: 0x6476C86d48512EACA51F179cD568CAdE4b6F074A

- EVM Address of the other account: 0x1b460B4402511f60eff418f6C21f3311aC2FB212

### Using the external Node

I tested the remainder of the testing guide using the external Node. I only tested checking the subtrate node, because I couldn't check it in the EVM. The transaction of Omniverse Fungible Token and Non-Fungible Token works fine for the Substrate external node.

### Code Quality

I ran `cargo clippy` in the omniverse-swap and got too many warnings, for example:

```
user@localhost:~/Documents/Omniverse/omniverse-swap$ cargo clippy
warning: the method `extend_from_slice` doesn't need a mutable reference
  --> pallets/omni-protocol/src/functions.rs:13:24
   |
13 | 	raw.extend_from_slice(&mut u128::to_be_bytes(data.nonce).as_slice());
   |                       	^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#unnecessary_mut_passed
   = note: `#[warn(clippy::unnecessary_mut_passed)]` on by default

warning: this expression creates a reference which is immediately dereferenced by the compiler
  --> pallets/omni-protocol/src/functions.rs:13:24
   |
13 | 	raw.extend_from_slice(&mut u128::to_be_bytes(data.nonce).as_slice());
   |                       	^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: change this to: `u128::to_be_bytes(data.nonce).as_slice()`
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrow
   = note: `#[warn(clippy::needless_borrow)]` on by default

warning: the method `extend_from_slice` doesn't need a mutable reference
  --> pallets/omni-protocol/src/functions.rs:14:24
   |
14 | 	raw.extend_from_slice(&mut u32::to_be_bytes(data.chain_id).as_slice());
   |                       	^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#unnecessary_mut_passed

warning: this expression creates a reference which is immediately dereferenced by the compiler
  --> pallets/omni-protocol/src/functions.rs:14:24
   |
14 | 	raw.extend_from_slice(&mut u32::to_be_bytes(data.chain_id).as_slice());
   |                       	^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: change this to: `u32::to_be_bytes(data.chain_id).as_slice()`
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrow

```
