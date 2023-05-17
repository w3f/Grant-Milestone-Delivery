# Milestone Delivery

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/epirus_substrate_phase_2.md
* **Milestone Number:** 2

**Context**

In this milestone we are delivering the functionality to decode contract messages and events in a human-friendly representation using contract metadata stored in the Ink Verifier Service, which was delivered in the previous milestone.

In this same milestone we also deliver the updated Epirus Substrate Explorer UI which displays the decoded data in a user-friendly format.

To test out the feature, you will need to have either verified source code or uploaded metadata for your contracts. Our [Source Code Verification Tutorial](https://github.com/web3labs/ink-verifier-server/blob/main/docs/TUTORIAL.md) explains how to do so in both a local contracts node and Rococo Contracts network. After the contract code hash is verified or metadata is uploaded, any new interaction with contract instances of this code hash should be decoded. Please note that any interaction prior to verification or metadata upload (e.g. instantiate) will not be decoded as this is [out of scope](https://github.com/w3f/Grants-Program/blob/master/applications/epirus_substrate_phase_2.md#out-of-scope).

**Deliverables**
| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/web3labs/epirus-substrate/blob/main/LICENSE | Apache 2.0 | 
| 0b. | Documentation | Tutorial for verifying source code or uploading metadata: https://github.com/web3labs/ink-verifier-server/blob/main/docs/TUTORIAL.md <br /> Project README: https://github.com/web3labs/epirus-substrate/blob/main/README.md <br/> Video demo: https://www.loom.com/share/bdf245a8bc56409dafff1342e920927d | The project READMEs + tutorial contains or points to all the information needed for development, deployment and testing. <br /> There is also inline documentation in the [AbiDecoder](https://github.com/web3labs/epirus-substrate/blob/main/squid-ink/src/abi/decoder.ts) to explain how data is decoded.  |
| 0c. | Testing Guide | Processor unit tests: https://github.com/web3labs/epirus-substrate/tree/main/squid-ink#testing <br /> UI unit tests: https://github.com/web3labs/epirus-substrate/blob/main/explorer-ui/README.md#testing |  | 
| 0d. | Docker | Processor Docker image: [ghcr.io/web3labs/squid-ink-epirus:latest](https://github.com/web3labs/epirus-substrate/pkgs/container/squid-ink-epirus) <br /> UI Docker image: [ghcr.io/web3labs/epirus-substrate-ui:latest](https://github.com/web3labs/epirus-substrate/pkgs/container/epirus-substrate-ui) <br /> Docker compose for running all explorer components locally: https://github.com/web3labs/epirus-substrate/tree/main/local-testnet | |
| 1. | Updated Squid Ink processor | https://github.com/web3labs/epirus-substrate/tree/main/squid-ink | Source code for ABI decoding are mainly found in `./src/abi/*` with some helper functions in `./src/handlers/contracts/metadata.ts`. <br /> Usages of the ABI decoder are found in the contract event and extrinsic handlers and are marked with a comment `// Decode data with ABI` |
| 2. | Updated Explorer UI | https://github.com/web3labs/epirus-substrate/tree/main/explorer-ui | Source code for the decoded data component can be found in `./src/components/contracts/DataView.tsx` |
| 3. | Public explorer instance | https://substrate.sirato.xyz | Public explorer instance for Rococo-Contracts. There are a few contracts with decoded data: [Incrementer](https://substrate.sirato.xyz/contracts/5G1JUcMkfxKRvibn9CMxzGzZbfqVoqNYJnMGVwCuPhfQM6Q1), [Crowdfund](https://substrate.sirato.xyz/contracts/5DbXo6UCimAmZmngiqZPzxpdXgFvAsfvPkhf3Nq8yPvN4abs), [Crowdfund 2](https://substrate.sirato.xyz/contracts/5G4RqP6A15L9oKAEDKar9dgwsCZDcbMhpAdjKctwfVyZNsmC). |

**Additional Information**

Video introducing the decoding feature in the UI: https://www.loom.com/share/bdf245a8bc56409dafff1342e920927d