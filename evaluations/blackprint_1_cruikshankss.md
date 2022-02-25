Blackprint conceptually designs software like hardware (with "cable connections") in their no-code app. 

"node" === "the blackprint engine"

"help developers interact with libraries by simply connecting nodes in realtime"
Blackprint Engine ß
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


















