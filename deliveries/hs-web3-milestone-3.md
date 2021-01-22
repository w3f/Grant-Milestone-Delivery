# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone.**  

* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/15
* **Milestone Number:** 3

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Runtime Metadata parsers | https://github.com/airalab/hs-web3/tree/master/packages/polkadot/src/Network/Polkadot/Metadata, https://github.com/airalab/hs-web3/blob/master/packages/polkadot/tests/Network/Polkadot/Test/MetadataSpec.hs | Supported 9-12 metadata versions. Added parser combinators for metadata type sanitize. Added metadata decoding unit tests for all versions. |
| 2. | Runtime query requests | https://github.com/airalab/hs-web3/blob/master/packages/polkadot/src/Network/Polkadot/Query.hs, https://github.com/airalab/hs-web3/blob/master/packages/polkadot/tests/Network/Polkadot/Test/StorageSpec.hs | Storage information derived from metadata. Storage keys used in query function exported on high-level. Currently it's runtime-level but using TH the compile-time is also could be written for static metadata. |
| 3. | Runtime query documentation | https://hs-web3.readthedocs.io/en/latest/polkadot_storage.html | Added documentation page. |
| 4. | Usage examples | https://github.com/airalab/hs-web3/tree/master/examples/polkadot | Added query requests into example. | 
| 5. | Docker image | https://hub.docker.com/repository/docker/akru/hs-web3 | Docker image with prebuilded hs-web3 unit tests. | 
