# Evaluation



- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Lollipop.md
- **Milestone:** 1
- **Kusama Identity:** F5Kk8nGuP58oSpqPE2bD3sPSEJR8uZW7jbdJuXJQWiKcsw9


| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[ ] </li></ul>| https://github.com/LollipopHQ/sbpf-on-polkavm/blob/main/LICENSE | Apache 2.0 |
| 0b. | Documentation |<ul><li>[ ] </li></ul>| https://github.com/LollipopHQ/sbpf-on-polkavm#code-structure | Initial architecture documentation explaining sBPF execution in PVM |
| 0c. | Testing and Testing Guide |<ul><li>[ ] </li></ul>| https://github.com/LollipopHQ/sbpf-on-polkavm/blob/main/README.md | Unit tests to measure compiled sBPF interpreter size |
| 0d. | Docker |<ul><li>[ ] </li></ul>| https://hub.docker.com/repository/docker/yipinlollipop/sbpf_on_polkavm/general | Containerized and deploy to run Minimal sBPF Execution Test in PVM using Docker |
| 0e. | Article |<ul><li>[ ] </li></ul>| https://medium.com/lollipop-builders/bridging-two-blockchain-worlds-inside-the-sbpf-polkavm-lollipop-initiative-00dcba14aa69 | ... |
| 1. | Compile `anza-xyz/sbpf` with `no_std` and analyze feasibility |<ul><li>[ ] </li></ul>| https://github.com/LollipopHQ/sbpf | ... |
| 2. | Memory & Execution Profiling for Minimal sBPF |<ul><li>[ ] </li></ul>| https://github.com/LollipopHQ/sbpf-on-polkavm?tab=readme-ov-file#profiling-statistics | ...|
| 3. | Fork `anza-xyz/sbpf` & Introduce PVM Service (`jam-pvm-common`) |<ul><li>[ ] </li></ul>| https://github.com/LollipopHQ/sbpf-on-polkavm/tree/main/sbpf-jam | Refactored sBPF interpreter to work as a PolkaVM service using `jam-pvm-common`. |
| 4. | Compile & Measure sBPF Binary Size |<ul><li>[ ] </li></ul>| https://github.com/LollipopHQ/sbpf-on-polkavm#profiling-statistics | According to memory profiling statistics, the size of the Binary is 143kb (<4mb) |
| 5. | Solana Account Model Integration |<ul><li>[ ] </li></ul>| https://github.com/LollipopHQ/sbpf-on-polkavm/tree/main/sbpf-polkavm | Solana’s account model is ported. |
| 6. | Minimal sBPF Execution Test in PVM |<ul><li>[ ] </li></ul>| https://github.com/LollipopHQ/sbpf-on-polkavm/tree/main/client | The test environment has been successfully deployed and tested. |


## General Notes

Lollipop has introduced key innovations to integrate Solana’s sBPF with PolkaVM, allowing Solana programs - whether built with Anchor or native code - to run on PolkaVM without modification.

- **Dynamic Memory Mapping:** Addresses PolkaVM’s memory limits by loading Solana .so programs onto the host and mapping that memory into the PolkaVM VM at runtime. This eliminates RISC-V memory constraints, enabling any host-loadable .so to execute on-chain.
- **Solana RocksDB Integration:** Ports Solana’s RocksDB layer into PolkaVM for seamless account model compatibility. A custom adapter ensures identical data access semantics, while a Copy-on-Write mechanism guarantees atomic state changes on the host-side database.
- **JAM Programming Paradigm Support:** Allows PolkaVM-deployed programs to function as JAM Services. A JAM adapter bridges DApp calls to JAM’s Refine and Accumulate functions. Minimal host-side changes enable service exposure and future JAM network compatibility (e.g., `onTransfer` support).

The core distinction between sBPF and PolkaVM is that sBPF programs can directly access host memory, whereas PolkaVM programs operate within a sandboxed environment and cannot directly interact with host memory. Consequently, when packaging sBPF into a PolkaVM-compatible format, meticulous handling of memory management is required.​ 

The process begins by ​serializing parameters into a contiguous memory block​ (`parameter_bytes`) and generating ​address mapping metadata​ (`regions`). This memory block is loaded into the sBPF VM starting at the address `MM_INPUT_START`. The virtual machine will read input data for the program execution from this address. During program execution, if the account data is modified, the content of `parameter_bytes` will be ​directly mutated. Subsequently, `parameter_bytes` undergoes ​deserialization​ to write back modifications to the underlying storage. 

Divergent memory access mechanisms​ between sBPF and Polkavm necessitate modifications to SVM system calls. The original workflow—passing guest addresses → converting to host physical addresses → accessing host memory—must be replaced with Polkavm's sandboxed access model.

The following statistic was also obtained:

| Item | Value |
| ------ | ----------- |
| compiled binary size | 143KB |
| execution time(initialize instruction) | 377ms |
| execution time(inc instruction) | 379ms |
| memory usage for creating polkavm instance | 1.6MB |
| peak memory usage for executing initialize instruction | 2.36MB |
| peak memory usage for executing inc instruction | 2.36MB |
