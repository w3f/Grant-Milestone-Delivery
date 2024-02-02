# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/infimum.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [MIT](https://github.com/rhysbalevicius/infimum/blob/aed324e94084f734d8a6110b2a41ff905349edb1/LICENSE) | - |
| 0b. | Documentation | <ul><li>[ ] </li></ul> | [Guide](https://github.com/rhysbalevicius/infimum/tree/aed324e94084f734d8a6110b2a41ff905349edb1#usage) | See [Documentation Feedback](#documentation-feedback) |
| 0c. | Testing | <ul><li>[ ] </li></ul> | | See [Testing Feedback](#testing-feedback) |
| 1a. | Substrate pallet | <ul><li>[ ] </li></ul> | (will evaluate once 0b., 0c. are fixed) | Spec: Methods 1.ii.a to 1.ii.i (listed under deliverables in the project overview) without verification functionality provided by Groth16 proving system. |

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

Note: The builds were ran on a MacBook Pro M2, MacOs 14.3

### Documentation Feedback

- [] Docker-based Build currently fails
  
  <details>
    <summary>Output</summary>

    ```zsh
    infimum % docker compose --profile dev up

    [+] Running 1/1
    ! pallet-base Warning                                                                                                             4.0s 
    [+] Building 30.8s (8/15)                                                                                          docker:desktop-linux
    => [pallet-base internal] load build definition from Dockerfile.base                                                              0.0s
    => => transferring dockerfile: 801B                                                                                               0.0s
    => [pallet-base internal] load .dockerignore                                                                                      0.0s
    => => transferring context: 2B                                                                                                    0.0s
    => [pallet-base internal] load metadata for docker.io/library/rust:latest                                                         0.9s
    => [pallet-base  1/11] FROM docker.io/library/rust:latest@sha256:e1730890f6646c5d896cc6867c064fc986b6160f362f3cac7fe425c94ccbd8  20.6s
    => => resolve docker.io/library/rust:latest@sha256:e1730890f6646c5d896cc6867c064fc986b6160f362f3cac7fe425c94ccbd8f2               0.0s
    => => sha256:e1730890f6646c5d896cc6867c064fc986b6160f362f3cac7fe425c94ccbd8f2 5.26kB / 5.26kB                                     0.0s
    => => sha256:48e4d3984b3d5ba7b00f452541c7076dacffd19774426be61555b841944a09ed 1.63kB / 1.63kB                                     0.0s
    => => sha256:ddf3d03921975c190f70241530e658ba601a6e2981e5944e95a065d4d4f612fc 3.94kB / 3.94kB                                     0.0s
    => => sha256:f419b1a62fc83850ab3cb43274970bb20a18ae6e674535478a48f5bee11559b6 23.58MB / 23.58MB                                   2.8s
    => => sha256:5665c1f9a9e17acd68ae05b2839df402eac34afdd095f8c115f09886d757840c 49.59MB / 49.59MB                                   3.9s
    => => sha256:76b4f1810f998c1f1580e2404b2e7fed8e264902d898bbe531443ea9789b7641 63.99MB / 63.99MB                                   5.3s
    => => extracting sha256:5665c1f9a9e17acd68ae05b2839df402eac34afdd095f8c115f09886d757840c                                          1.6s
    => => extracting sha256:f419b1a62fc83850ab3cb43274970bb20a18ae6e674535478a48f5bee11559b6                                          0.4s
    => => extracting sha256:76b4f1810f998c1f1580e2404b2e7fed8e264902d898bbe531443ea9789b7641                                          1.8s
    => => sha256:1c176cbf649709b5d8a03720a6c53e18e33ad50feef33abe83c5ae95c5aabdb2 202.50MB / 202.50MB                                11.5s
    => => sha256:6e5246d4f6ea6de0e6b0aa7c8e62640711bc918625b3e71c09c3cbcea9735e6e 247.93MB / 247.93MB                                14.0s
    => => extracting sha256:1c176cbf649709b5d8a03720a6c53e18e33ad50feef33abe83c5ae95c5aabdb2                                          4.4s
    => => extracting sha256:6e5246d4f6ea6de0e6b0aa7c8e62640711bc918625b3e71c09c3cbcea9735e6e                                          3.9s
    => [pallet-base internal] load build context                                                                                      0.3s
    => => transferring context: 27.37MB                                                                                               0.2s
    => [pallet-base  2/11] RUN ln -snf /usr/share/zoneinfo/America/New_York /etc/localtime && echo America/New_York > /etc/timezone   0.5s
    => [pallet-base  3/11] RUN rustup update     && rustup update nightly     && rustup target add wasm32-unknown-unknown            18.8s
    => ERROR [pallet-base  4/11] RUN apt-get update -y && apt-get install -y     build-essential     clang     curl     git     libs  2.1s
    ------
    > [pallet-base  4/11] RUN apt-get update -y && apt-get install -y     build-essential     clang     curl     git     libssl-dev     protobuf-compiler:
    0.764 Get:1 http://deb.debian.org/debian bookworm InRelease [151 kB]
    1.590 Err:1 http://deb.debian.org/debian bookworm InRelease
    1.590   At least one invalid signature was encountered.
    1.682 Get:2 http://deb.debian.org/debian bookworm-updates InRelease [52.1 kB]
    1.756 Err:2 http://deb.debian.org/debian bookworm-updates InRelease
    1.756   At least one invalid signature was encountered.
    1.868 Get:3 http://deb.debian.org/debian-security bookworm-security InRelease [48.0 kB]
    2.040 Err:3 http://deb.debian.org/debian-security bookworm-security InRelease
    2.040   At least one invalid signature was encountered.
    2.042 Reading package lists...
    2.048 W: GPG error: http://deb.debian.org/debian bookworm InRelease: At least one invalid signature was encountered.
    2.048 E: The repository 'http://deb.debian.org/debian bookworm InRelease' is not signed.
    2.048 W: GPG error: http://deb.debian.org/debian bookworm-updates InRelease: At least one invalid signature was encountered.
    2.048 E: The repository 'http://deb.debian.org/debian bookworm-updates InRelease' is not signed.
    2.048 W: GPG error: http://deb.debian.org/debian-security bookworm-security InRelease: At least one invalid signature was encountered.
    2.048 E: The repository 'http://deb.debian.org/debian-security bookworm-security InRelease' is not signed.
    ------
    failed to solve: process "/bin/sh -c apt-get update -y && apt-get install -y     build-essential     clang     curl     git     libssl-dev     protobuf-compiler" did not complete successfully: exit code: 100
    ```
  </details>

### Testing Feedback

- [] Tests pass, but there are a lot of warnings
  
  <details>
    <summary>Output</summary>

    ```zsh
    infimum % cargo +nightly test --manifest-path=./pallet/Cargo.toml

    (...)

    541-InstrumentMemory.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/InstrumentMemory.cpp"
    456.1   running: "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/23b236a9a09e6541-PrintCallGraph.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/PrintCallGraph.cpp"
    456.1   cargo:warning=/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/RemoveUnusedModuleElements.cpp:777:1: fatal error: error writing to /tmp/ccZljG0f.s: No space left on device
    456.1 
    456.1   cargo:warning= } // namespace wasm
    456.1 
    456.1   cargo:warning= ^
    456.1 
    456.1   cargo:warning=compilation terminated.
    456.1 
    456.1 
    456.1   exit status: 1
    456.1   cargo:warning=ToolExecError: Command "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/23b236a9a09e6541-RemoveUnusedModuleElements.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/RemoveUnusedModuleElements.cpp" with args "c++" did not execute successfully (status code exit status: 1).running: "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/23b236a9a09e6541-RedundantSetElimination.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/RedundantSetElimination.cpp"
    456.1   running: "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/23b236a9a09e6541-ReorderLocals.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/ReorderLocals.cpp"
    456.1   running: "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/23b236a9a09e6541-Asyncify.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/Asyncify.cpp"
    456.1   running: "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/23b236a9a09e6541-TypeSSA.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/TypeSSA.cpp"
    456.1   cargo:warning=/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/InstrumentMemory.cpp:308:1: fatal error: error writing to /tmp/ccRnP8z3.s: No space left on device
    456.1 
    456.1   cargo:warning= } // namespace wasm
    456.1 
    456.1   cargo:warning= ^
    456.1 
    456.1   cargo:warning=compilation terminated.
    456.1 
    456.1   running: "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/23b236a9a09e6541-Metrics.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/Metrics.cpp"
    456.1 
    456.1   exit status: 0
    456.1   exit status: 1
    456.1   cargo:warning=ToolExecError: Command "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/23b236a9a09e6541-InstrumentMemory.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/InstrumentMemory.cpp" with args "c++" did not execute successfully (status code exit status: 1).cargo:warning=/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/Vacuum.cpp:455:1: fatal error: error writing to /tmp/cct7PXXP.s: No space left on device
    456.1 
    456.1   cargo:warning= } // namespace wasm
    456.1 
    456.1   cargo:warning= ^
    456.1 
    456.1   cargo:warning=compilation terminated.
    456.1 
    456.1 
    456.1   exit status: 1
    456.1   cargo:warning=ToolExecError: Command "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/23b236a9a09e6541-Vacuum.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/Vacuum.cpp" with args "c++" did not execute successfully (status code exit status: 1).running: "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/23b236a9a09e6541-MergeBlocks.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/MergeBlocks.cpp"
    456.1   running: "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/23b236a9a09e6541-PrintFeatures.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/PrintFeatures.cpp"
    456.1   cargo:warning=/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/PrintCallGraph.cpp:110:1: fatal error: error writing to /tmp/ccUKHZMU.s: No space left on device
    456.1 
    456.1   cargo:warning= } // namespace wasm
    456.1 
    456.1   cargo:warning= ^
    456.1 
    456.1   cargo:warning=compilation terminated.
    456.1 
    456.1   cargo:warning=/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/ReorderLocals.cpp:167:1: fatal error: error writing to /tmp/cc5RuLR1.s: No space left on device
    456.1 
    456.1   cargo:warning= } // namespace wasm
    456.1 
    456.1   cargo:warning= ^
    456.1 
    456.1   cargo:warning=compilation terminated.
    456.1 
    456.1 
    456.1   exit status: 1
    456.1   cargo:warning=ToolExecError: Command "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/23b236a9a09e6541-PrintCallGraph.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/PrintCallGraph.cpp" with args "c++" did not execute successfully (status code exit status: 1).
    456.1   exit status: 1
    456.1   cargo:warning=ToolExecError: Command "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/23b236a9a09e6541-ReorderLocals.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/ReorderLocals.cpp" with args "c++" did not execute successfully (status code exit status: 1).running: "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/23b236a9a09e6541-Poppify.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/Poppify.cpp"
    456.1   running: "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/23b236a9a09e6541-GenerateDynCalls.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/GenerateDynCalls.cpp"
    456.1   cargo:warning=/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/PrintFeatures.cpp:39:1: fatal error: error writing to /tmp/cci7Zi75.s: No space left on device
    456.1 
    456.1   cargo:warning= } // namespace wasm
    456.1 
    456.1   cargo:warning= ^
    456.1 
    456.1   cargo:warning=compilation terminated.
    456.1 
    456.1   cargo:warning=/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/TypeSSA.cpp:395:1: fatal error: error writing to /tmp/ccfeAaTf.s: No space left on device
    456.1 
    456.1   cargo:warning= } // namespace wasm
    456.1 
    456.1   cargo:warning= ^
    456.1 
    456.1   cargo:warning=compilation terminated.
    456.1 
    456.1   cargo:warning=/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/RedundantSetElimination.cpp:479:1: fatal error: error writing to /tmp/ccQQaJAG.s: No space left on device
    456.1 
    456.1   cargo:warning= } // namespace wasm
    456.1 
    456.1   cargo:warning= ^
    456.1 
    456.1 
    456.1   exit status: 1
    456.1   cargo:warning=ToolExecError: Command "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/23b236a9a09e6541-TypeSSA.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/TypeSSA.cpp" with args "c++" did not execute successfully (status code exit status: 1).
    456.1   exit status: 1
    456.1   cargo:warning=ToolExecError: Command "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/23b236a9a09e6541-PrintFeatures.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/PrintFeatures.cpp" with args "c++" did not execute successfully (status code exit status: 1).running: "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/23b236a9a09e6541-CodePushing.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/CodePushing.cpp"
    456.1   cargo:warning=compilation terminated.
    456.1 
    456.1   running: "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/23b236a9a09e6541-OptimizeForJS.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/OptimizeForJS.cpp"
    456.1 
    456.1   exit status: 1
    456.1   cargo:warning=ToolExecError: Command "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/23b236a9a09e6541-RedundantSetElimination.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/RedundantSetElimination.cpp" with args "c++" did not execute successfully (status code exit status: 1).running: "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/23b236a9a09e6541-StripEH.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/StripEH.cpp"
    456.1   cargo:warning=/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/Metrics.cpp:228:1: fatal error: error writing to /tmp/ccBRHGEW.s: No space left on device
    456.1 
    456.1   cargo:warning= } // namespace wasm
    456.1 
    456.1   cargo:warning= ^
    456.1 
    456.1   cargo:warning=compilation terminated.
    456.1 
    456.1   cargo:warning=/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/GenerateDynCalls.cpp:175:1: fatal error: error writing to /tmp/cc1FwAus.s: No space left on device
    456.1 
    456.1   cargo:warning= } // namespace wasm
    456.1 
    456.1   cargo:warning= ^
    456.1 
    456.1   cargo:warning=compilation terminated.
    456.1 
    456.1 
    456.1   exit status: 1
    456.1   cargo:warning=ToolExecError: Command "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/23b236a9a09e6541-Metrics.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/Metrics.cpp" with args "c++" did not execute successfully (status code exit status: 1).
    456.1   exit status: 1
    456.1   cargo:warning=ToolExecError: Command "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/23b236a9a09e6541-GenerateDynCalls.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/GenerateDynCalls.cpp" with args "c++" did not execute successfully (status code exit status: 1).running: "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/8919bb621854f257-fuzzing.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools/fuzzing/fuzzing.cpp"
    456.1   running: "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/8919bb621854f257-random.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools/fuzzing/random.cpp"
    456.1   cargo:warning=/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/MergeBlocks.cpp:683:1: fatal error: error writing to /tmp/cczxLcQM.s: No space left on device
    456.1 
    456.1   cargo:warning= } // namespace wasm
    456.1 
    456.1   cargo:warning= ^
    456.1 
    456.1   cargo:warning=compilation terminated.
    456.1 
    456.1 
    456.1   exit status: 1
    456.1   cargo:warning=ToolExecError: Command "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/23b236a9a09e6541-MergeBlocks.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/MergeBlocks.cpp" with args "c++" did not execute successfully (status code exit status: 1).running: "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/8919bb621854f257-heap-types.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools/fuzzing/heap-types.cpp"
    456.1   cargo:warning=/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools/fuzzing/random.cpp:78:1: fatal error: error writing to /tmp/ccEsjl4O.s: No space left on device
    456.1 
    456.1   cargo:warning= } // namespace wasm
    456.1 
    456.1   cargo:warning= ^
    456.1 
    456.1   cargo:warning=compilation terminated.
    456.1 
    456.1 
    456.1   exit status: 1
    456.1   cargo:warning=ToolExecError: Command "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/8919bb621854f257-random.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools/fuzzing/random.cpp" with args "c++" did not execute successfully (status code exit status: 1).running: "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/061f727fc95a2fed-asm_v_wasm.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/asmjs/asm_v_wasm.cpp"
    456.1   cargo:warning=/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/Poppify.cpp:509:1: fatal error: error writing to /tmp/ccta6Yst.s: No space left on device
    456.1 
    456.1   cargo:warning= } // namespace wasm
    456.1 
    456.1   cargo:warning= ^
    456.1 
    456.1   cargo:warning=compilation terminated.
    456.1 
    456.1 
    456.1   exit status: 1
    456.1   cargo:warning=ToolExecError: Command "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/23b236a9a09e6541-Poppify.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/Poppify.cpp" with args "c++" did not execute successfully (status code exit status: 1).running: "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/061f727fc95a2fed-shared-constants.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/asmjs/shared-constants.cpp"
    456.1   cargo:warning=/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/OptimizeForJS.cpp:74:1: fatal error: error writing to /tmp/ccvSKz21.s: No space left on device
    456.1 
    456.1   cargo:warning= } // namespace wasm
    456.1 
    456.1   cargo:warning= ^
    456.1 
    456.1   cargo:warning=compilation terminated.
    456.1 
    456.1 
    456.1   exit status: 1
    456.1   cargo:warning=ToolExecError: Command "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/23b236a9a09e6541-OptimizeForJS.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/OptimizeForJS.cpp" with args "c++" did not execute successfully (status code exit status: 1).running: "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/468e803d39ad68cc-Relooper.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/cfg/Relooper.cpp"
    456.1   cargo:warning=/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/CodePushing.cpp:499:1: fatal error: error writing to /tmp/ccaCTC72.s: No space left on device
    456.1 
    456.1   cargo:warning= } // namespace wasm
    456.1 
    456.1   cargo:warning= ^
    456.1 
    456.1   cargo:warning=compilation terminated.
    456.1 
    456.1 
    456.1   exit status: 1
    456.1   cargo:warning=ToolExecError: Command "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/23b236a9a09e6541-CodePushing.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/CodePushing.cpp" with args "c++" did not execute successfully (status code exit status: 1).running: "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/e31e2f6615db0296-intrinsics-ir.o" "-c" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/intrinsics-ir.cpp"
    456.1   cargo:warning=/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/StripEH.cpp:78:1: fatal error: error writing to /tmp/ccEUySQ8.s: No space left on device
    456.1 
    456.1   cargo:warning= } // namespace wasm
    456.1 
    456.1   cargo:warning= ^
    456.1 
    456.1   cargo:warning=compilation terminated.
    456.1 
    456.1 
    456.1   exit status: 1
    456.1   cargo:warning=ToolExecError: Command "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/23b236a9a09e6541-StripEH.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/StripEH.cpp" with args "c++" did not execute successfully (status code exit status: 1).running: "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/e31e2f6615db0296-wasm-opt.o" "-c" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/wasm-opt.cpp"
    456.1   cargo:warning=/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/asmjs/shared-constants.cpp:123:1: fatal error: error writing to /tmp/ccOpgso3.s: No space left on device
    456.1 
    456.1   cargo:warning= } // namespace wasm
    456.1 
    456.1   cargo:warning= ^
    456.1 
    456.1   cargo:warning=compilation terminated.
    456.1 
    456.1 
    456.1   exit status: 1
    456.1   cargo:warning=ToolExecError: Command "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/061f727fc95a2fed-shared-constants.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/asmjs/shared-constants.cpp" with args "c++" did not execute successfully (status code exit status: 1).running: "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/e31e2f6615db0296-WasmIntrinsics.o" "-c" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/WasmIntrinsics.cpp"
    456.1   cargo:warning=/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/WasmIntrinsics.cpp:9:1: fatal error: error writing to /tmp/ccVxK1k1.s: No space left on device
    456.1 
    456.1   cargo:warning= }
    456.1 
    456.1   cargo:warning= ^
    456.1 
    456.1   cargo:warning=compilation terminated.
    456.1 
    456.1   cargo:warning=/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/asmjs/asm_v_wasm.cpp:75:1: fatal error: error writing to /tmp/ccnXODWV.s: No space left on device
    456.1 
    456.1   cargo:warning= } // namespace wasm
    456.1 
    456.1   cargo:warning= ^
    456.1 
    456.1   cargo:warning=compilation terminated.
    456.1 
    456.1 
    456.1   exit status: 1
    456.1   cargo:warning=ToolExecError: Command "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/061f727fc95a2fed-asm_v_wasm.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/asmjs/asm_v_wasm.cpp" with args "c++" did not execute successfully (status code exit status: 1).
    456.1   exit status: 1
    456.1   cargo:warning=ToolExecError: Command "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/e31e2f6615db0296-WasmIntrinsics.o" "-c" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/WasmIntrinsics.cpp" with args "c++" did not execute successfully (status code exit status: 1).cargo:warning=/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/Asyncify.cpp:1997:1: fatal error: error writing to /tmp/ccfqHyKd.s: No space left on device
    456.1 
    456.1   cargo:warning= } // namespace wasm
    456.1 
    456.1   cargo:warning= ^
    456.1 
    456.1   cargo:warning=compilation terminated.
    456.1 
    456.1 
    456.1   exit status: 1
    456.1   cargo:warning=ToolExecError: Command "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/23b236a9a09e6541-Asyncify.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/passes/Asyncify.cpp" with args "c++" did not execute successfully (status code exit status: 1).cargo:warning=/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools/fuzzing/heap-types.cpp:1012:1: fatal error: error writing to /tmp/cc571QVB.s: No space left on device
    456.1 
    456.1   cargo:warning= } // namespace wasm
    456.1 
    456.1   cargo:warning= ^
    456.1 
    456.1   cargo:warning=compilation terminated.
    456.1 
    456.1 
    456.1   exit status: 0
    456.1   exit status: 1
    456.1   cargo:warning=ToolExecError: Command "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/8919bb621854f257-heap-types.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools/fuzzing/heap-types.cpp" with args "c++" did not execute successfully (status code exit status: 1).cargo:warning=/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/cfg/Relooper.cpp:1689:1: fatal error: error writing to /tmp/ccw4cxke.s: No space left on device
    456.1 
    456.1   cargo:warning= } // namespace CFG
    456.1 
    456.1   cargo:warning= ^
    456.1 
    456.1   cargo:warning=compilation terminated.
    456.1 
    456.1 
    456.1   exit status: 1
    456.1   cargo:warning=ToolExecError: Command "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/468e803d39ad68cc-Relooper.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/cfg/Relooper.cpp" with args "c++" did not execute successfully (status code exit status: 1).cargo:warning=/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools/fuzzing/fuzzing.cpp:3906:1: fatal error: error writing to /tmp/cc5unujO.s: No space left on device
    456.1 
    456.1   cargo:warning= } // namespace wasm
    456.1 
    456.1   cargo:warning= ^
    456.1 
    456.1   cargo:warning=compilation terminated.
    456.1 
    456.1 
    456.1   exit status: 1
    456.1   cargo:warning=ToolExecError: Command "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/8919bb621854f257-fuzzing.o" "-c" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools/fuzzing/fuzzing.cpp" with args "c++" did not execute successfully (status code exit status: 1).cargo:warning=/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/wasm-opt.cpp:429:1: fatal error: error writing to /tmp/ccVwOj6U.s: No space left on device
    456.1 
    456.1   cargo:warning= }
    456.1 
    456.1   cargo:warning= ^
    456.1 
    456.1   cargo:warning=compilation terminated.
    456.1 
    456.1 
    456.1   exit status: 1
    456.1   cargo:warning=ToolExecError: Command "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/e31e2f6615db0296-wasm-opt.o" "-c" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/wasm-opt.cpp" with args "c++" did not execute successfully (status code exit status: 1).
    456.1 
    456.1   --- stderr
    456.1 
    456.1   CXX include path:
    456.1     /target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include
    456.1     /target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate
    456.1     /usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src
    456.1     /usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools
    456.1     /target/release/build/wasm-opt-sys-35366ff9bd612db3/out
    456.1 
    456.1 
    456.1   error occurred: Command "c++" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-m64" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/include" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/cxxbridge/crate" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src" "-I" "/usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/wasm-opt-sys-0.114.2/binaryen/src/tools" "-I" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out" "-Wall" "-Wextra" "-std=c++17" "-w" "-Wno-unused-parameter" "-DTHROW_ON_FATAL" "-DNDEBUG" "-o" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/e31e2f6615db0296-wasm-opt.o" "-c" "/target/release/build/wasm-opt-sys-35366ff9bd612db3/out/wasm-opt.cpp" with args "c++" did not execute successfully (status code exit status: 1).
    456.1 
    456.1 
    462.2 thread 'rustc' panicked at compiler/rustc_metadata/src/rmeta/encoder.rs:442:9:
    462.3 error: could not compile `frame-support` (lib)
    ------
    pos_build.Dockerfile:6
    --------------------
      4 |     WORKDIR /
      5 |     COPY . .
      6 | >>> RUN cargo build --locked --release
      7 |     
      8 |     
    --------------------
    ERROR: failed to solve: process "/bin/sh -c cargo build --locked --release" did not complete successfully: exit code: 101
    xxx@machine chain % 
    xxx@machine chain % 
    xxx@machine chain % cd ..
    xxx@machine repos % git clone https://github.com/rhysbalevicius/infimum.git
    Cloning into 'infimum'...
    remote: Enumerating objects: 293, done.
    remote: Counting objects: 100% (47/47), done.
    remote: Compressing objects: 100% (15/15), done.
    remote: Total 293 (delta 32), reused 40 (delta 31), pack-reused 246
    Receiving objects: 100% (293/293), 331.64 KiB | 482.00 KiB/s, done.
    Resolving deltas: 100% (96/96), done.
    xxx@machine repos % cd infimum 
    xxx@machine infimum % cargo +nightly test --manifest-path=./pallet/Cargo.toml

        Updating crates.io index
        Updating git repository `https://github.com/paritytech/substrate.git`
          Fetch [==>                      ]  12.16%, 11.64MiB/s                                                                            
        Updating git repository `https://github.com/paritytech/polkadot-sdk.git`
      Downloaded futures-executor v0.3.30
      Downloaded const-oid v0.9.6
      Downloaded array-bytes v6.2.2
      Downloaded derive-hex v0.1.2
      Downloaded keccak v0.1.5
      Downloaded ref-cast v1.0.22
      Downloaded pairing v0.23.0
      Downloaded dusk-bytes v0.1.7
      Downloaded ref-cast-impl v1.0.22
      Downloaded futures-io v0.3.30
      Downloaded cfg-expr v0.15.6
      Downloaded ss58-registry v1.45.0
      Downloaded target-lexicon v0.12.13
      Downloaded async-trait v0.1.77
      Downloaded ahash v0.4.8
      Downloaded futures v0.3.30
      Downloaded ahash v0.8.7
      Downloaded k256 v0.13.3
      Downloaded winnow v0.5.34
      Downloaded zerocopy v0.7.32
      Downloaded object v0.32.2
      Downloaded uint v0.8.5
      Downloaded msgpacker v0.4.3
      Downloaded dusk-poseidon v0.33.0
      Downloaded pairing v0.22.0
      Downloaded dusk-jubjub v0.14.0
      Downloaded dusk-hades v0.24.0
      Downloaded hashbrown v0.9.1
      Downloaded msgpacker-derive v0.3.1
      Downloaded bls12_381 v0.7.1
      Downloaded dusk-plonk v0.19.0
      Downloaded dusk-bls12_381 v0.13.0
      Downloaded 32 crates (2.3 MB) in 2.97s
      Compiling proc-macro2 v1.0.78
      Compiling unicode-ident v1.0.12
      Compiling cfg-if v1.0.0
      Compiling version_check v0.9.4
      Compiling libc v0.2.152
      Compiling typenum v1.17.0
      Compiling once_cell v1.19.0
      Compiling subtle v2.4.1
      Compiling autocfg v1.1.0
      Compiling syn v1.0.109
      Compiling serde v1.0.195
      Compiling hashbrown v0.14.3
      Compiling equivalent v1.0.1
      Compiling winnow v0.5.34
      Compiling toml_datetime v0.6.3
      Compiling memchr v2.7.1
      Compiling generic-array v0.14.7
      Compiling arrayvec v0.7.4
      Compiling const-oid v0.9.6
      Compiling indexmap v2.1.0
      Compiling byteorder v1.5.0
      Compiling ppv-lite86 v0.2.17
      Compiling ahash v0.7.7
      Compiling crunchy v0.2.2
      Compiling byte-slice-cast v1.2.2
      Compiling aho-corasick v1.1.2
      Compiling toml_edit v0.20.2
      Compiling proc-macro-crate v2.0.1
      Compiling toml_edit v0.19.15
      Compiling indexmap v1.9.3
      Compiling bytes v1.5.0
      Compiling regex-syntax v0.8.2
      Compiling arrayref v0.3.7
      Compiling tinyvec_macros v0.1.1
      Compiling tinyvec v1.6.0
      Compiling cc v1.0.83
      Compiling regex-automata v0.4.3
      Compiling proc-macro-crate v1.3.1
      Compiling ahash v0.8.7
      Compiling lazy_static v1.4.0
      Compiling getrandom v0.1.16
      Compiling unicode-normalization v0.1.22
      Compiling log v0.4.20
      Compiling zerocopy v0.7.32
      Compiling static_assertions v1.1.0
      Compiling constant_time_eq v0.3.0
      Compiling unicode-bidi v0.3.15
      Compiling percent-encoding v2.3.1
      Compiling thiserror v1.0.56
      Compiling idna v0.5.0
      Compiling regex v1.10.2
      Compiling form_urlencoded v1.2.1
      Compiling itoa v1.0.10
      Compiling anyhow v1.0.79
      Compiling crc32fast v1.3.2
      Compiling quote v1.0.35
      Compiling syn v2.0.48
      Compiling getrandom v0.2.12
      Compiling rand_core v0.6.4
      Compiling cpufeatures v0.2.12
      Compiling keccak v0.1.5
      Compiling hashbrown v0.12.3
      Compiling rand_chacha v0.3.1
      Compiling rand v0.8.5
      Compiling errno v0.3.8
      Compiling url v2.5.0
      Compiling num-traits v0.2.17
      Compiling rustix v0.38.30
      Compiling fallible-iterator v0.2.0
      Compiling rand_core v0.5.1
      Compiling io-lifetimes v1.0.11
      Compiling stable_deref_trait v1.2.0
      Compiling target-lexicon v0.12.13
      Compiling ryu v1.0.16
      Compiling Inflector v0.11.4
      Compiling memoffset v0.8.0
      Compiling pin-project-lite v0.2.13
      Compiling rustix v0.36.17
      Compiling paste v1.0.14
      Compiling sp-std v8.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
      Compiling bitflags v2.4.2
      Compiling digest v0.9.0
      Compiling generic-array v0.12.4
      Compiling blake2b_simd v1.0.2
      Compiling wasmtime-runtime v8.0.1
      Compiling tracing-core v0.1.32
      Compiling rustc-demangle v0.1.23
      Compiling hashbrown v0.13.2
      Compiling zeroize_derive v1.4.2
      Compiling serde_derive v1.0.195
      Compiling thiserror-impl v1.0.56
      Compiling bitflags v1.3.2
      Compiling impl-trait-for-tuples v0.2.2
      Compiling parity-scale-codec-derive v3.6.9
      Compiling derive_more v0.99.17
      Compiling zeroize v1.7.0
      Compiling scale-info-derive v2.10.0
      Compiling cpp_demangle v0.3.5
      Compiling smallvec v1.13.1
      Compiling memfd v0.6.4
      Compiling libsecp256k1-core v0.3.0
      Compiling mach v0.3.2
      Compiling psm v0.1.21
      Compiling slab v0.4.9
      Compiling wasmtime-jit-debug v8.0.1
      Compiling wasmtime-asm-macros v8.0.1
      Compiling regex-syntax v0.6.29
      Compiling ref-cast v1.0.22
      Compiling core-foundation-sys v0.8.6
      Compiling opaque-debug v0.3.0
      Compiling rustc-hex v2.1.0
      Compiling byte-tools v0.3.1
      Compiling serde_json v1.0.111
      Compiling iana-time-zone v0.1.59
      Compiling block-padding v0.1.5
      Compiling block-buffer v0.10.4
      Compiling crypto-common v0.1.6
      Compiling block-buffer v0.9.0
      Compiling digest v0.10.7
      Compiling sha2 v0.9.9
      Compiling sha2 v0.10.8
      Compiling hmac v0.12.1
      Compiling tracing-attributes v0.1.27
      Compiling ref-cast-impl v1.0.22
      Compiling regex-automata v0.1.10
      Compiling digest v0.8.1
      Compiling wasmtime-jit-icache-coherence v8.0.1
      Compiling hex v0.4.3
      Compiling wasmtime v8.0.1
      Compiling futures-sink v0.3.30
      Compiling futures-core v0.3.30
      Compiling futures-channel v0.3.30
      Compiling tracing v0.1.40
      Compiling matchers v0.0.1
      Compiling crypto-mac v0.11.1
      Compiling crypto-mac v0.8.0
      Compiling block-buffer v0.7.3
      Compiling chrono v0.4.31
      Compiling libsecp256k1-gen-ecmult v0.3.0
      Compiling libsecp256k1-gen-genmult v0.3.0
      Compiling futures-macro v0.3.30
      Compiling sp-debug-derive v8.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
      Compiling tracing-log v0.1.4
      Compiling rand_chacha v0.2.2
      Compiling secp256k1-sys v0.6.1
      Compiling sharded-slab v0.1.7
      Compiling lock_api v0.4.11
      Compiling thread_local v1.1.7
      Compiling ansi_term v0.12.1
      Compiling pin-utils v0.1.0
      Compiling hash-db v0.16.0
      Compiling futures-task v0.3.30
      Compiling unicode-xid v0.2.4
      Compiling opaque-debug v0.2.3
      Compiling fake-simd v0.1.2
      Compiling futures-io v0.3.30
      Compiling parking_lot_core v0.9.9
      Compiling sha2 v0.8.2
      Compiling futures-util v0.3.30
      Compiling rand v0.7.3
      Compiling libsecp256k1 v0.7.1
      Compiling hmac v0.8.1
      Compiling uint v0.9.5
      Compiling curve25519-dalek v2.1.3
      Compiling curve25519-dalek v3.2.0
      Compiling fixed-hash v0.8.0
      Compiling merlin v2.0.1
      Compiling num_cpus v1.16.0
      Compiling scopeguard v1.2.0
      Compiling environmental v1.1.4
      Compiling arrayvec v0.5.2
      Compiling hmac-drbg v0.3.0
      Compiling pbkdf2 v0.8.0
      Compiling hmac v0.11.0
      Compiling schnorrkel v0.9.1
      Compiling twox-hash v1.6.3
      Compiling sha3 v0.10.8
      Compiling pbkdf2 v0.11.0
      Compiling dyn-clonable-impl v0.9.0
      Compiling sp-runtime-interface-proc-macro v11.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
      Compiling parity-scale-codec v3.6.9
      Compiling cranelift-entity v0.95.1
      Compiling impl-serde v0.4.0
      Compiling bincode v1.3.3
      Compiling gimli v0.27.3
      Compiling wasmparser v0.102.0
      Compiling object v0.30.4
      Compiling tracing-serde v0.1.3
      Compiling num-format v0.4.4
      Compiling tracing-subscriber v0.2.25
      Compiling adler v1.0.2
      Compiling ss58-registry v1.45.0
      Compiling base64 v0.13.1
      Compiling dyn-clone v1.0.16
      Compiling rustc-hash v1.1.0
      Compiling dyn-clonable v0.9.0
      Compiling tiny-bip39 v1.0.0
      Compiling miniz_oxide v0.7.1
      Compiling futures-executor v0.3.30
      Compiling addr2line v0.19.0
      Compiling scale-info v2.10.0
      Compiling wasmtime-types v8.0.1
      Compiling sp-storage v13.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
      Compiling impl-codec v0.6.0
      Compiling sp-tracing v10.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
      Compiling secp256k1 v0.24.3
      Compiling wasmtime-environ v8.0.1
      Compiling futures v0.3.30
      Compiling parking_lot v0.12.1
      Compiling substrate-bip39 v0.4.5
      Compiling sp-core-hashing v9.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
      Compiling ed25519-zebra v3.1.0
      Compiling blake2 v0.10.6
      Compiling secrecy v0.8.0
      Compiling hash256-std-hasher v0.15.2
      Compiling array-bytes v6.2.2
      Compiling bs58 v0.4.0
      Compiling backtrace v0.3.69
      Compiling rustversion v1.0.14
      Compiling sp-externalities v0.19.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
      Compiling gimli v0.28.1
      Compiling ff v0.13.0
      Compiling object v0.32.2
      Compiling either v1.9.0
      Compiling group v0.13.0
      Compiling trie-db v0.27.1
      Compiling memory-db v0.32.0
      Compiling trie-root v0.18.0
      Compiling schnellru v0.2.1
      Compiling nohash-hasher v0.2.0
      Compiling tiny-keccak v2.0.2
      Compiling primitive-types v0.12.2
      Compiling bounded-collections v0.1.9
      Compiling wasmtime-jit v8.0.1
      Compiling signature v1.6.4
      Compiling ed25519 v1.5.3
      Compiling addr2line v0.21.0
      Compiling radium v0.7.0
      Compiling ed25519-dalek v1.0.1
      Compiling integer-sqrt v0.1.5
      Compiling tap v1.0.1
      Compiling sp-arithmetic v16.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
      Compiling fs-err v2.11.0
      Compiling wyz v0.5.1
      Compiling funty v2.0.0
      Compiling sp-io v23.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
      Compiling const-random-macro v0.1.16
      Compiling sp-panic-handler v8.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
      Compiling const-random v0.1.17
      Compiling der v0.7.8
      Compiling derive-syn-parse v0.1.5
      Compiling macro_magic_core_macros v0.4.3
      Compiling expander v2.0.0
      Compiling sp-wasm-interface v14.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
      Compiling bitvec v1.0.1
      Compiling macro_magic_core v0.4.2
      Compiling sp-runtime-interface v17.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
      Compiling derive-hex v0.1.2
      Compiling base16ct v0.2.0
      Compiling sec1 v0.7.3
      Compiling pairing v0.23.0
      Compiling dusk-bytes v0.1.7
      Compiling crypto-bigint v0.5.5
      Compiling proc-macro-warning v0.4.2
      Compiling async-trait v0.1.77
      Compiling sp-core-hashing-proc-macro v9.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
      Compiling spki v0.7.3
      Compiling frame-metadata v16.0.0
      Compiling rfc6979 v0.4.0
      Compiling sp-version-proc-macro v8.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
      Compiling signature v2.2.0
      Compiling frame-support-procedural-tools-derive v3.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
      Compiling parity-wasm v0.45.0
      Compiling cfg-expr v0.15.6
      Compiling sp-core v21.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
      Compiling frame-support-procedural-tools v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
      Compiling sp-metadata-ir v0.1.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
      Compiling dusk-bls12_381 v0.13.0
      Compiling elliptic-curve v0.13.8
      Compiling ecdsa v0.16.9
      Compiling sp-api-proc-macro v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
      Compiling ff v0.12.1
      Compiling itertools v0.10.5
      Compiling msgpacker-derive v0.3.1
      Compiling ahash v0.4.8
      Compiling hashbrown v0.9.1
      Compiling k256 v0.13.3
      Compiling sp-trie v22.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
      Compiling sp-keystore v0.27.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
      Compiling sp-weights v20.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
      Compiling msgpacker v0.4.3
      Compiling macro_magic_macros v0.4.2
      Compiling dusk-jubjub v0.14.0
      Compiling group v0.12.1
      Compiling itertools v0.9.0
      Compiling merlin v3.0.0
      Compiling tt-call v1.0.9
      Compiling pairing v0.22.0
      Compiling dusk-hades v0.24.0
      Compiling bls12_381 v0.7.1
      Compiling uint v0.8.5
      Compiling sp-std v8.0.0 (https://github.com/paritytech/polkadot-sdk.git#caa987d2)
      Compiling macro_magic v0.4.2
      Compiling sp-state-machine v0.28.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
      Compiling frame-support-procedural v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
      Compiling dusk-plonk v0.19.0
      Compiling dusk-poseidon v0.33.0
      Compiling sp-application-crypto v23.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
      Compiling sp-runtime v24.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
      Compiling sp-version v22.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
      Compiling sp-staking v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
      Compiling sp-inherents v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
      Compiling sp-api v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
      Compiling frame-support v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
      Compiling frame-system v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
      Compiling pallet-infimum v4.0.0-dev (/Users/xxx/repos/infimum/pallet)
        Finished test [unoptimized + debuginfo] target(s) in 1m 20s
        Running unittests src/lib.rs (pallet/target/debug/deps/pallet_infimum-f6381b113fc722e3)

    running 23 tests
    test tests::merge_poll_state ... ok
    test tests::coordinator_key_rotation_during_poll ... ok
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::coordinator_registration_duplicated ... ok
    test tests::coordinator_registration_malformed ... ok
    test tests::commit_outcome ... ok
    test tests::coordinator_registration ... ok
    test tests::coordinator_key_rotation_malformed ... ok
    test tests::coordinator_key_rotation ... ok
    test tests::participant_interaction_outside_period ... ok
    test tests::participant_registration_no_poll ... ok
    test tests::poll_creation ... ok
    test tests::poll_creation_by_non_coordinator ... ok
    test tests::poll_creation_malformed ... ok
    test tests::poll_nullify_during_extant ... ok
    test tests::poll_creation_during_extant ... ok
    test tests::poll_creation_beyond_limit ... ok
    test tests::register_as_participant_outside_period ... ok
    test tests::register_as_participant ... ok
    test tests::participant_interaction ... ok
    test tests::participant_limit_reached ... ok
    test tests::poll_nullify_missing_outcome ... ok
    test tests::participant_interaction_limit ... ok

    test result: ok. 23 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.06s

      Doc-tests pallet-infimum

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
    ```
  </details>

- [] Docker-based tests can't be run since the build fails:

  <details>
    <summary>Output</summary>

    ```zsh
    infimum % docker compose --profile test up

    [+] Running 1/1
    ! pallet-base Warning                                                                                                             4.5s 
    [+] Building 46.5s (8/15)                                                                                          docker:desktop-linux
    => [pallet-base internal] load build definition from Dockerfile.base                                                              0.0s
    => => transferring dockerfile: 801B                                                                                               0.0s
    => [pallet-base internal] load .dockerignore                                                                                      0.0s
    => => transferring context: 2B                                                                                                    0.0s
    => [pallet-base internal] load metadata for docker.io/library/rust:latest                                                         4.5s
    => [pallet-base internal] load build context                                                                                      0.0s
    => => transferring context: 185.52kB                                                                                              0.0s
    => [pallet-base  1/11] FROM docker.io/library/rust:latest@sha256:e1730890f6646c5d896cc6867c064fc986b6160f362f3cac7fe425c94ccbd8  20.6s
    => => resolve docker.io/library/rust:latest@sha256:e1730890f6646c5d896cc6867c064fc986b6160f362f3cac7fe425c94ccbd8f2               0.0s
    => => sha256:e1730890f6646c5d896cc6867c064fc986b6160f362f3cac7fe425c94ccbd8f2 5.26kB / 5.26kB                                     0.0s
    => => sha256:48e4d3984b3d5ba7b00f452541c7076dacffd19774426be61555b841944a09ed 1.63kB / 1.63kB                                     0.0s
    => => sha256:ddf3d03921975c190f70241530e658ba601a6e2981e5944e95a065d4d4f612fc 3.94kB / 3.94kB                                     0.0s
    => => sha256:5665c1f9a9e17acd68ae05b2839df402eac34afdd095f8c115f09886d757840c 49.59MB / 49.59MB                                   3.9s
    => => sha256:f419b1a62fc83850ab3cb43274970bb20a18ae6e674535478a48f5bee11559b6 23.58MB / 23.58MB                                   2.8s
    => => sha256:76b4f1810f998c1f1580e2404b2e7fed8e264902d898bbe531443ea9789b7641 63.99MB / 63.99MB                                   5.3s
    => => sha256:1c176cbf649709b5d8a03720a6c53e18e33ad50feef33abe83c5ae95c5aabdb2 202.50MB / 202.50MB                                11.5s
    => => extracting sha256:5665c1f9a9e17acd68ae05b2839df402eac34afdd095f8c115f09886d757840c                                          1.6s
    => => sha256:6e5246d4f6ea6de0e6b0aa7c8e62640711bc918625b3e71c09c3cbcea9735e6e 247.93MB / 247.93MB                                14.0s
    => => extracting sha256:f419b1a62fc83850ab3cb43274970bb20a18ae6e674535478a48f5bee11559b6                                          0.4s
    => => extracting sha256:76b4f1810f998c1f1580e2404b2e7fed8e264902d898bbe531443ea9789b7641                                          1.8s
    => => extracting sha256:1c176cbf649709b5d8a03720a6c53e18e33ad50feef33abe83c5ae95c5aabdb2                                          4.4s
    => => extracting sha256:6e5246d4f6ea6de0e6b0aa7c8e62640711bc918625b3e71c09c3cbcea9735e6e                                          3.9s
    => [pallet-base  2/11] RUN ln -snf /usr/share/zoneinfo/America/New_York /etc/localtime && echo America/New_York > /etc/timezone   0.5s
    => [pallet-base  3/11] RUN rustup update     && rustup update nightly     && rustup target add wasm32-unknown-unknown            18.8s
    => ERROR [pallet-base  4/11] RUN apt-get update -y && apt-get install -y     build-essential     clang     curl     git     libs  2.1s
    ------
    > [pallet-base  4/11] RUN apt-get update -y && apt-get install -y     build-essential     clang     curl     git     libssl-dev     protobuf-compiler:
    0.764 Get:1 http://deb.debian.org/debian bookworm InRelease [151 kB]
    1.590 Err:1 http://deb.debian.org/debian bookworm InRelease
    1.590   At least one invalid signature was encountered.
    1.682 Get:2 http://deb.debian.org/debian bookworm-updates InRelease [52.1 kB]
    1.756 Err:2 http://deb.debian.org/debian bookworm-updates InRelease
    1.756   At least one invalid signature was encountered.
    1.868 Get:3 http://deb.debian.org/debian-security bookworm-security InRelease [48.0 kB]
    2.040 Err:3 http://deb.debian.org/debian-security bookworm-security InRelease
    2.040   At least one invalid signature was encountered.
    2.042 Reading package lists...
    2.048 W: GPG error: http://deb.debian.org/debian bookworm InRelease: At least one invalid signature was encountered.
    2.048 E: The repository 'http://deb.debian.org/debian bookworm InRelease' is not signed.
    2.048 W: GPG error: http://deb.debian.org/debian bookworm-updates InRelease: At least one invalid signature was encountered.
    2.048 E: The repository 'http://deb.debian.org/debian bookworm-updates InRelease' is not signed.
    2.048 W: GPG error: http://deb.debian.org/debian-security bookworm-security InRelease: At least one invalid signature was encountered.
    2.048 E: The repository 'http://deb.debian.org/debian-security bookworm-security InRelease' is not signed.
    ------
    failed to solve: process "/bin/sh -c apt-get update -y && apt-get install -y     build-essential     clang     curl     git     libssl-dev     protobuf-compiler" did not complete successfully: exit code: 100
    ```
  </details>
