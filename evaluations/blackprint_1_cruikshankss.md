
# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/pull/774
- **Milestone:** 1

**Deliverables**

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | yes | [LICENSE](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/LICENSE) | MIT License |
| 0b. | Documentation | yes | 1. [Examples](https://github.com/Blackprint/nodes-polkadot.js/tree/ce4de7b316d864489d4f207144ea87e4310e4299/example) <br> 2. [Guide for importing the module and load examples](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/README.md) | The examples were wonderful, thank you. |
| 0c. | Testing Guide | yes | [Guide](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/README.md#development) | Your method of communication and documentation is extremely clear and well-maintained. |
| 0d. | Docker | yes | [Test files](https://github.com/Blackprint/nodes-polkadot.js/tree/ce4de7b316d864489d4f207144ea87e4310e4299/tests), [GitHub Actions](https://github.com/Blackprint/nodes-polkadot.js/actions/workflows/build.yml) | They use GitHub Actions/Workflow instead of Docker and they explain more why/how in comments in the Conversations tab. |
| 1. | HTTP & WebSocket node |  yes | 1. [Example](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/example/ws-http-connection.json) <br> 2. [Connection/HTTP](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/src/Connection/HTTP.js) <br> 3. [Connection/WebSocket](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/src/Connection/WebSocket.js) <br> 4. [Unit Test](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/tests/nodes/http-and-ws-provider.js) | Connect with either HTTPS or WebSocket to many main and test networks. |
| 2. | Event node | yes | 1. [Example](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/example/ws-event-new-blocks.json) <br> 2. [Events/Blocks](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/src/Events/Blocks.js) <br> 3. [Unit Test](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/tests/nodes/event-new-heads.js) | Using a WebSocket connection, you can subscribe to events such as a feed of new block numbers. |
| 3. | Mnemonic/seed importer node | yes | 1. [Example](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/example/import-mnemonic.json) <br> 2. [Keyring/Create/Keypair](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/src/Keyring/Create/Keypair.js) <br> 3. [Unit Test](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/tests/nodes/import-mnemonic.js) | Creating a keyring using only valid mnemonics was successful. |
| 4. | Encrypt, Decrypt node | yes | 1. [Example](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/example/encrypt-decrypt.json) <br> 2. [Data/Keyring/Encrypt](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/src/Data/Keyring/Encrypt.js) <br> 3. [Data/Keyring/Decrypt](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/src/Data/Keyring/Decrypt.js) <br> 4. [Unit Test](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/tests/nodes/encrypt-decrypt.js) | It is possible to encrypt messages with a target and decrypt them using that target's wallet.  |
| 5. | Sign, Verify node | yes | 1. [Example: Sign with mnemonic](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/example/sign-verify-mnemonic.json) <br> 2. [Example: Sign with extension](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/example/sign-verify-extension.json) <br> 3. [Data/Sign](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/src/Data/Sign.js) <br> 4. [Data/Verify](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/src/Data/Verify.js) <br> 5. [Extension/Get/Signer](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/src/Extension/Get/Signer.js) <br> 6. [Unit Test](https://github.com/Blackprint/nodes-polkadot.js/blob/ce4de7b316d864489d4f207144ea87e4310e4299/tests/nodes/sign-verify.js) | It's possible to create a signature, sign a message, and verify the signature was made by a certain public key. |
| 6. | Package |  | [NPM Registry](https://www.npmjs.com/package/@blackprint/nodes-polkadot.js) | Now it can be loaded by the browser via CDN. |






## 1. Name of the grant project

Blackprint visual programming for Polkadot.js

## 2. Link to the open-source code/delivery 

Run their code and manually test the UI on the browser here: https://blackprint.github.io/

They made a [Polkadot.js JavaScript module](https://github.com/Blackprint/nodes-polkadot.js)  so their [Blackprint engine](https://github.com/Blackprint/Blackprint) implements Polkadot functionality on the Browser/Node.js.

## 3. License
Their code is MIT-licensed.

## 4. Documentation 
Their documentation is really excellent. The [grant application](https://github.com/w3f/Grants-Program/pull/774/files#diff-5d05027d6d628ef75e532128d8c85353e6fa41745b5c9fec3e3d4c7a04540fc1), this [milestone delivery](https://github.com/w3f/Grant-Milestone-Delivery/pull/368/files?short_path=80fb60a#diff-80fb60a7dd4f6350144b74e3b5f16a187f30ebf0e67eecf03208a6e62b608b59), their [GitHub](https://github.com/Blackprint/Blackprint) `README`s, the on-screen notes in their [browser editor](https://blackprint.github.io/), and their code comments are *excellent*. Bravo! 

They provide a roadmap here: https://github.com/Blackprint/Blackprint#blackprint-roadmap

Their technology stack is really clear and they provide FOSSA reports as well on GitHub.

```
Technology stack
- JavaScript (Browser & Node.js)
- Polkadot.js's library
- Blackprint does have 2 main component:
- Engine: Designed for managing data flow between nodes and can be run on Browser/Node.js/Deno
- Sketch: Can be used for creating node editor and modify node connections
- Blackprint Editor: An IDE that combine the sketch and the engine and provide another tools on the GUI to make the development more easier
- Browser/Node.js/Deno
```

They write the purpose of this project is this:

 >Polkadot.js's library then will handle the connection between parachain and the current environment (Browser/Node.js).

And that made it very clear where this part of the project lives in regard to the entire Blackprint ecosystem. Thank you!

## 5. Formatted Code

Their visual programming as well as code & testing suites are formatted by Polkadot utility. They are very clear about setting up environments, then proceed to connections, then proceed to simple events (e.g. listening for new blocks). 

From there, they demonstrate how mnemonics are seeds for keyrings, and how public and private keys are the parts of addresses. There are a lot of technical terms even for these simple actions, but they are very clear in their nomenclature/depth of teaching with their visual programming and code organization.

Then they proceed to more complicated topics that they group so I could learn the purpose, subtle differences, and step-by-step process for:
  - encrypting and decrypting data
  - signing and verifying data 


## 6. Testing Guide

I manually tested each deliverable on https://blackprint.github.io/#page/sketch/1. Detailed description is below in `7. Milestone Deliverables`.

I successfully ran and passed all unit tests from two different JavaScript testing suites. 

First, I cloned the [the Blackprint engine repo](https://github.com/Blackprint/Blackprint) and followed the [testing guide](https://github.com/Blackprint/Blackprint/blob/2cbbc226dd550a10d48f49dbd8ddea2f6dc4e399/README.md#build-and-run-the-unit-test), yielding these results:

<img width="595" alt="Screen Shot 2022-02-28 at 2 11 56 PM" src="https://user-images.githubusercontent.com/22508682/156048246-852435d3-56e5-4447-a867-cdde787dcde5.png">

Then, I cloned the [Polkadot.js module repo](https://github.com/Blackprint/nodes-polkadot.js) and followed the [testing guide](https://github.com/Blackprint/nodes-polkadot.js/tree/,ce4de7b316d864489d4f207144ea87e4310e4299#development), yielding these results:

<img width="574" alt="Screen Shot 2022-02-28 at 2 20 04 PM" src="https://user-images.githubusercontent.com/22508682/156048225-c897fb52-c8b0-422c-9157-9a445afed82e.png">

They provide excellent comments throughout their testing suite. They properly prepare and execute a testing environment, documented in the `prepare-env.js`. Then, they provide separate tests for both the Browser and Node.js environments. I learned a lot, for example, how they use modern JavaScript's `await` to help set up a Jest testing environment: 

```
	// Wait and avoid Jest's test environment being torn down
	await Blackprint.getContext('Polkadot.js');
	await new Promise(resolve => setTimeout(resolve, 1000));
```

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

<img width="231" alt="1_https_websocket_connection_kusama" src="https://user-images.githubusercontent.com/22508682/156003031-4e4b6d4c-b27a-4ca8-a8b9-1bc7bd5c2042.png">
<img width="235" alt="1_https_websocket_connection_polka" src="https://user-images.githubusercontent.com/22508682/156003037-82b4a4a0-c6f0-4f24-a34b-86ea42d02980.png">


### **Deliverable 2: Event node** 

Events only work via a WebSocket connection. The example Blackprint uses for an event is listening for/subscribing to pushes of a new block on the network and the number of the new block. 

I was able to connect to test networks and subscribe to events.

<img width="584" alt="2_event_test_networks" src="https://user-images.githubusercontent.com/22508682/156003066-4a671738-7eb9-499c-b5c9-f7190f1909e8.png">

I was able to successfully connect to Polkadot and Kusama via WebSocket and confirmed the block numbers. 

<img width="719" alt="2_event_main_networks" src="https://user-images.githubusercontent.com/22508682/156003048-6507e371-b36b-4e6d-8fc4-cc5f695874c3.png">
<img width="579" alt="2_kusama_current_block" src="https://user-images.githubusercontent.com/22508682/156003089-37b25d05-c621-4224-99d7-0f999d5e1964.png">
<img width="580" alt="2_polkadot_current_block" src="https://user-images.githubusercontent.com/22508682/156003091-680dbe08-29e3-4a6f-8c6c-cb55d18ceea4.png">

### **Deliverable 3: Mnemonic/seed importer node**    
Given a mnemonic, Blackprint generates new addresses (public keys) with either a default key type (ed25519). I also provided input for an external key type (e.g. sr25519) which yielded a different address. I tested it with bad data and it only seems to accept valid mnemonics.


<img width="854" alt="3_mnemonic_seed" src="https://user-images.githubusercontent.com/22508682/156003093-ba0e25db-9042-4aaf-abbb-f0104c5c7d75.png">



### **Deliverable 4: Encrypt/decrypt data node**  
I tested encrypting different input data with Bob's wallet ("key pair") and gave the target as Alice's public key/address. When I connect Alice's wallet to a decrypt data action, I can decrypt the data properly. I tried testing with bad data for the target on the encrypted data, and in this case, Alice cannot decrypt the data, as expected. 

<img width="1143" alt="4_encrypt_decrypt_data" src="https://user-images.githubusercontent.com/22508682/156003136-f3d7c3ee-c57b-47f7-b4c4-1bebeb5d45bb.png">


### **Deliverable 5: Sign/verify data node**  
I tested signing a message and verifying a signed message. Then I was able to verify (true) that the signature came from a certain public key address. 

<img width="902" alt="5_sign_verify_data" src="https://user-images.githubusercontent.com/22508682/156003200-2770dcef-696b-4c39-a8d2-8d929f70441c.png">

### **Deliverable 6: Package**  
npm registry: Includes great documentation, license and even a FOSSA scan showing their Deep Impact Statistics.


## Conclusion
Blackprint conceptually designs software like hardware (with "cable connections") in their no-code app. That's a clever way to teach and almost game-ify the process of exploring how Polkadot and app-building works.

I am excited that you also intend to support Deno as well as Node.js. I have never seen a project that uses Deno and that's very exciting! Deno is a secure server project built with Rust, that could be a great alternative to the npm ecosystem vulnerabilities, as I'm sure you're aware! Good luck!

You could potentially look into using `yarn` instead of `npm` in the future for security purposes. 

For absolute beginners, you could potentially make it more clear the [editor is live here](https://blackprint.github.io/) and I don't have to clone and run a local instance, because I was confused at first. Also, you could potentially explain what a "Dummy Key" is and how it's used, and what the word "Provider" means.

This is from their application and it's really exciting:

> Blackprint hopefully can help the development of Metaverse, frontend development, as well as automation such as bots that connect to multiple blockchains. Blackprint itself is planning to expand to support several programming languages such as JavaScript, PHP, Golang, and Python. But this proposal is currently only for JavaScript as Blackprint is still trying to improve.

Good luck helping along the metaverse! ;-)

This seems like really excellent, high-quality codebase. With such high-quality comments and documentation, I expect it will be possible for Blackprint to build new features and maintain the code. It seems very accessible to devs who wish to join an open-source project. One small suggestion, if you're interested, would be to add more tutorials for absolute beginners to blockchain/crypto/Polkadot/coding/etc. to extend your already highly-accessible project. Wishing you continued success! It was a wonderful experience to evaluate your code!



