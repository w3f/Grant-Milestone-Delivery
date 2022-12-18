# Milestone Delivery

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/epirus_substrate_phase_2.md
* **Milestone Number:** 1

**Context**

In this milestone we are delivering the ink! Verifier Service (previously named Metadata Registry in the grant application). The main functions of the service are to:
- verify ink! smart contract source code through reproducible builds
- store and serve verified contract source code
- generate, store and serve verified contract metadata
- expose an intuitive web API for easy integration into any application that wishes to use the above functionalities

In this same milestone we also deliver the updated Epirus Substrate Explorer UI which integrates with the ink! Verifier Service. The UI provides a user-friendly interface for uploading source code, following the verification process through streamed logs and displaying of verified source code.

There are three project repositories that make up this delivery:
- **[ink! Verifier Server:](https://github.com/web3labs/ink-verifier-server)** The main project repository for this delivery. The server manages the verification process and serves the web API.
- **[ink! Verifier Image:](https://github.com/web3labs/ink-verifier-image)** The docker image that the ink! Verifier Server uses to ensure identical build environments for reproducible builds. The repository also houses the command line tool for generating verifiable contract packages.
- **[Explorer UI:](https://github.com/web3labs/epirus-substrate/tree/main/explorer-ui)** The UI of the contracts explorer.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | Server: https://github.com/web3labs/ink-verifier-server/blob/main/LICENSE <br /> Image: https://github.com/web3labs/ink-verifier-image/blob/main/LICENSE <br /> UI: https://github.com/web3labs/epirus-substrate/blob/main/LICENSE | Apache 2.0 | 
| 0b. | Documentation | Server: https://github.com/web3labs/ink-verifier-server/blob/main/README.md <br /> Image: https://github.com/web3labs/ink-verifier-image/blob/main/README.md <br /> Tutorial: https://github.com/web3labs/ink-verifier-server/blob/main/docs/TUTORIAL.md | The project READMEs + tutorial contains or points to all the information needed for development, deployment and testing. |
| 0c. | Testing Guide | Server unit tests: https://github.com/web3labs/ink-verifier-server/blob/main/README.md#testing <br /> UI unit tests: https://github.com/web3labs/epirus-substrate/blob/main/explorer-ui/README.md#testing |  | 
| 0d. | Docker | ink! Verifier Docker image: [ghcr.io/web3labs/ink-verifier:latest](https://github.com/web3labs/ink-verifier-image/pkgs/container/ink-verifier) <br /> UI Docker image: [ghcr.io/web3labs/epirus-substrate-ui:latest](https://github.com/web3labs/epirus-substrate/pkgs/container/epirus-substrate-ui) <br /> Docker compose for running all explorer components locally: https://github.com/web3labs/epirus-substrate/tree/main/local-testnet | We run the ink! Verifier Server using PM2 in production since it spawns Docker containers as sub-processes, see [docs](https://github.com/web3labs/ink-verifier-server/blob/main/README.md#running-in-production). |
| 1. | Metadata Registry (now ink! Verifier Service) | Server: https://github.com/web3labs/ink-verifier-server <br /> Image used by server: https://github.com/web3labs/ink-verifier-image |  |
| 2. | Developer Tools | https://github.com/web3labs/ink-verifier-image/tree/main/cli | The command line tool to generate the verifiable package that the server expects during verification. |
| 3. | Updated Explorer UI | https://github.com/web3labs/epirus-substrate/tree/main/explorer-ui | Source code for the contract verification component can be found in `./src/components/codes/sources/` |
| 4. | Public explorer instance | https://substrate.sirato.xyz | Public explorer instance for Rococo-Contracts. An example contract with verified source code can be seen [here](https://substrate.sirato.xyz/codes/0x2ed87234d3c1a2dd23ca67d49cc8cc8454aabefff6fffeb495bba27a75d38ecc/sources). |

**Additional Information**

In this delivery we also added the option to upload only the metadata of the contract if it is signed by the owner. This feature is added in anticipation of the next milestone: decoding contract messages and events. This was not included in the grant application but we deemed it a useful feature since the process of source code verification is still experimental and subject to change (works only with cargo-contract ^v2.0.0-alpha.5 and ink! ^v4.0.0-alpha.3). You can find more information about this feature in the ink! verifier server [documentation](https://github.com/web3labs/ink-verifier-server/blob/main/README.md#unverified-metadata-upload).
