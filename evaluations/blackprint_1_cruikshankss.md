Blackprint conceptually designs software like hardware (with "cable connections") in their no-code app. 

"node" === "the blackprint engine"

"help developers interact with libraries by simply connecting nodes in realtime"
Blackprint Engine 
cable connections,

 execute exported JSON of node, cable connections, and embedded data.


> Blackprint hopefully can help the development of Metaverse, frontend development, as well as automation such as bots that connect to multiple blockchains. Blackprint itself is planning to expand to support several programming languages such as JavaScript, PHP, Golang, and Python. But this proposal is currently only for JavaScript as Blackprint is still trying to improve.

Technology stack
JavaScript (Browser & Node.js)
Polkadot.js's library
Blackprint does have 2 main component:
Engine: Designed for managing data flow between nodes and can be run on Browser/Node.js/Deno
Sketch: Can be used for creating node editor and modify node connections
Blackprint Editor: An IDE that combine the sketch and the engine and provide another tools on the GUI to make the development more easier
 Browser/Node.js/Deno

 "node editor"

 don't have to download the Blackprint Editor because the browser/Node.js can run a node editor too

 "modify node connections"

Blackprint conceptually designs software like hardware (with "cable connections") in their no-code app. 

 Polkadot.js's library then will handle the connection between parachain and the current environment (Browser/Node.js).

WebSocket Provider? (reading list)

what is dummy key for?

Currently the MVP can be run on browsers. 

 The support for Node.js is still work in progress and may be delivered on Milestone 3. The current MVP may already contain nodes that will be delivered for Milestone 1 and Milestone 2, I'm still preparing to create the unit test and some example before I deliver it.

 Milestone 1 — Connection and data encryption nodes for Browser

 I will provide inline documentation of the code and simple example that can be imported to the Blackprint Editor

We will use GitHub Action/Workflow instead, for manual UI testing/interaction we can use Blackprint Editor

1.	HTTP & WebSocket node	Able to connect to parachain's test/mainnet (including: Polkadot/Kusama/Westend) by specifying the RPC URL
2.	Event node	Able to listen for new blocks/heads of the connected parachain node
3.	Mnemonic/seed importer node	Able to convert mnemonic into private key (seed) that can be used for decrypting data or signing data, the private key is in the Keyring
4.	Encrypt, Decrypt node	Able to encrypt data with public key, and able to decrypt data with private key. Public key and private key is in the Keyring
5.	Sign, Verify node	Able to sign data with private key, and able to verify data with public key. Public key and private key is in the Keyring
6.	Package	I will submit the JavaScript package/module to NPM registry so it can be loaded browser via CDN


Able to encrypt data with public key, and able to decrypt data with private key. Public key and private key is in the Keyring

Able to sign data with private key, and able to verify data with public key. 

Able to convert mnemonic into private key (seed) that can be used for decrypting data or signing data, the private key is in the Keyring

why?^

https://github.com/Blackprint/Blackprint#blackprint-roadmap

import mnemonic/seeds, encrypt/decrypt data, and sign/verify data. ??? what's the difference between each pair?


Testing follow tutorial https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/README.md


Download and run Sketch editor 
https://github.com/Blackprint/Blackprint/blob/master/.github/CONTRIBUTING.md#the-build-script-how-it-works

error
npm install -g npm@8.5.2
npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/ash/.npm/_logs/2022-02-27T15_55_59_619Z-debug.log

19 vulnerabilities (8 moderate, 11 high)
Run `npm audit` for details.

npm notice New minor version of npm available! 8.1.2 -> 8.5.2
npm notice Changelog: https://github.com/npm/cli/releases/tag/v8.5.2
npm notice Run npm install -g npm@8.5.2 to update!

sudo npm install -g npm@8.5.2

https://github.com/Blackprint/blackprint.github.io/blob/master/.github/CONTRIBUTING.md

You may also need to change <script> URL on /index.html and /dev.html if you want to test the engine or sketch library from the browser.

<!-- Comment this -->
<!-- <script src="https://cdn.jsdelivr.net/npm/@blackprint/engine@0.3.0"></script> -->

<!-- Uncomment this -->
<script src="/dist/engine.min.js"></script>

note: yarn 

note: make it more clear the editor is live here and I dont have to run a local instance of it 
https://blackprint.github.io/#page/sketch/1 works


import 


**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [LICENSE](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/LICENSE) | MIT License |
| 0b. | Documentation | 1. [Examples](https://github.com/Blackprint/nodes-polkadot.js/tree/ce4de7b316d864489d4f207144ea87e4310e4299/example) <br> 2. [Guide for importing the module and load examples](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/README.md) | Inline documentation is provided for nodes that being delivered for this milestone. |
| 0c. | Testing Guide | [Guide](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/README.md#development) | `npm i & npm run build-prod & npm test` |
| 0d. | Docker | [Test files](https://github.com/Blackprint/nodes-polkadot.js/tree/ce4de7b316d864489d4f207144ea87e4310e4299/tests), [GitHub Action](https://github.com/Blackprint/nodes-polkadot.js/actions/workflows/build.yml) | To run the test manually, please follow the instruction on the `README.md`. For manual UI testing, you can use the example provided for each deliverable nodes below. |
| 1. | HTTP & WebSocket node | 1. [Example](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/example/ws-http-connection.json) <br> 2. [Connection/HTTP](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/src/Connection/HTTP.js) <br> 3. [Connection/WebSocket](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/src/Connection/WebSocket.js) <br> 4. [Unit Test](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/tests/nodes/http-and-ws-provider.js) |  |
| 2. | Event node | 1. [Example](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/example/ws-event-new-blocks.json) <br> 2. [Events/Blocks](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/src/Events/Blocks.js) <br> 3. [Unit Test](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/tests/nodes/event-new-heads.js) | Events can only be used if we connected to the network via WebSocket. |
| 3. | Mnemonic/seed importer node | 1. [Example](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/example/import-mnemonic.json) <br> 2. [Keyring/Create/Keypair](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/src/Keyring/Create/Keypair.js) <br> 3. [Unit Test](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/tests/nodes/import-mnemonic.js) | Mnemonic/seed will be imported with Keypair nodes, and the keypair will be stored in the Keyring. |
| 4. | Encrypt, Decrypt node | 1. [Example](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/example/encrypt-decrypt.json) <br> 2. [Data/Keyring/Encrypt](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/src/Data/Keyring/Encrypt.js) <br> 3. [Data/Keyring/Decrypt](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/src/Data/Keyring/Decrypt.js) <br> 4. [Unit Test](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/tests/nodes/encrypt-decrypt.js) | For encrypting or decrypting data, we do need to use the Keypair. Private key can't be exposed from the keypair, but the public key is exposed as wallet address. |
| 5. | Sign, Verify node | 1. [Example: Sign with mnemonic](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/example/sign-verify-mnemonic.json) <br> 2. [Example: Sign with extension](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/example/sign-verify-extension.json) <br> 3. [Data/Sign](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/src/Data/Sign.js) <br> 4. [Data/Verify](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/src/Data/Verify.js) <br> 5. [Extension/Get/Signer](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/src/Extension/Get/Signer.js) <br> 6. [Unit Test](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/tests/nodes/sign-verify.js) | Signer can be obtained from Keypair or Extension |
| 6. | Package | [NPM Registry](https://www.npmjs.com/package/@blackprint/nodes-polkadot.js) | Published: v0.2 |


 npm run build-prod
npm ERR! Missing script: "build-prod"




## 1. Name of the grant project

Blackprint visual programming for Polkadot.js

## 2. Link to the open-source code/delivery 
> How to run their code.

Run their code and manually test the UI on the browser here: https://blackprint.github.io/

They made a [Polkadot.js JavaScript module](https://github.com/Blackprint/nodes-polkadot.js)  so their [Blackprint engine](https://github.com/Blackprint/Blackprint) implements Polkadot functionality on the Browser/Node.js.

## 3. License
Their code is MIT-licensed.

## 4. Documentation 
Their documentation is really excellent. The creator has 

## 5. Formatted Code

Here I attempt to explain how their app code/functionality is formatted in the.


<img width="400" alt="" src="">

## 6. Testing Guide

<img width="400" alt="" src="">

I verified the block number on Polkadot and Kusama:

I unsuccessfully attempted to run and test their code from [this repository](https://github.com/Blackprint/Blackprint) with [this guide](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/README.md#development) and the command `npm i & npm run build-prod & npm test`. Discuss more below.

## 7. Milestone Deliverables (see table above & descriptions here)

### **Deliverable 1: HTTP & WebSocket node** 
Blackprint can connect to Polkadot networks via both HTTPS and WebSocket. They keep a great list of the main and test networks and teach the different address types needed for either HTTPS and WebSocket RPC connections:

 ```
  Main networks

  https://rpc.polkadot.io
  https://kusama-rpc.polkadot.io
  https://statemint-rpc.polkadot.io
  https://astar.api.onfinality.io/public-http

  wss://rpc.polkadot.io
  wss://kusama-rpc.polkadot.io
  wss://statemint-rpc.polkadot.io
  wss://astar.api.onfinality.io/public-ws

  Test networks

  wss://westend-rpc.polkadot.io
  wss://ws.test.azero.dev
  wss://rpc.shibuya.astar.network

 ```

 I was able to successfully test connecting to Polkadot and Kusama via HTTPS and Westend via WebSocket, for example.

### **Deliverable 2: Event node** 

Events only work via a WebSocket connection. The example Blackprint uses for an event is listening for/subscribing to pushes of a new block on the network and the number of the new block. I was able to successfully connect to Polkadot and Kusama via WebSocket and confirmed the block numbers. 

### **Deliverable 3: Mnemonic/seed importer node**    
Given a mnemonic, Blackprint generates new addresses (public keys) with either a default key type (ed25519). I also provided input for an external key type (e.g. sr25519) which yielded a different address. I tested it with bad data and it only seems to accept valid mnemonics.


### **Deliverable 4: Encrypt/decrypt data node**  
I tested encrypting different input data with Bob's wallet ("key pair") and gave the target as Alice's public key/address. When I connect Alice's wallet to a decrypt data action, I can decrypt the data properly. I tried testing with bad data for the target on the encrypted data, and in this case, Alice cannot decrypt the data, as expected. 

### **Deliverable 5: Sign/verify data node**  
I tested signing a message and verifying a signed message. Then I was able to verify (true) that the signature came from a certain public key address. 

### **Deliverable 6: Package**  
npm registry:


## Conclusion
