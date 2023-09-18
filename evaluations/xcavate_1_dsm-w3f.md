
# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Xcavate.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a.  | License | <ul><li>[x] </li></ul>| Apache 2.0 | Have merge conflicts.|
| 0b.  | Documentation | <ul><li>[ ] </li></ul>| [https://xcavate.io/w3f/Xcavate_Real_Estate_Lending_Process.jpg] | Not fully evaluated yet. |
| 0c. | Testing video | <ul><li>[x] </li></ul>| [https://youtu.be/LxOwFm4XDrw] |  |
| 0d. | Testing Guide | <ul><li>[ ] </li></ul>| [https://github.com/XcavateBlockchain/MVP_Lending_Pool/blob/MVP_Lending_Protocol/README.md] [https://github.com/XcavateBlockchain/lending_protocol_contracts/blob/main/README.md] | Not fully evaluated yet. |
| 0e.  | Docker | <ul><li>[ ] </li></ul>| Not fully evaluated yet. | 
| 0f.  | Article | <ul><li>[ ] </li></ul>| [https://xcavate.io/revolutionizing-real-estate-development-financing-with-nft-backed-loans/] | Not fully evaluated yet. | 
| 0g.  | Tutorial | <ul><li>[ ] </li></ul>| [https://xcavate.io/XcavateDeveloperLoanUserInstructions.pdf] [https://xcavate.io/XcavatePlatformProcessflow.jpg] | Not fully evaluated yet.| 
| 1. | Xcavate Node Repo | <ul><li>[ ] </li></ul>| [https://github.com/XcavateBlockchain/MVP_Lending_Pool] | Couldn't use cargo commands. | 
| 2.  | Xcavate Loan App Repo | <ul><li>[x] </li></ul>| [https://github.com/XcavateBlockchain/lending_protocol_contracts] |  | 
| 3.  | Loan management pallet | <ul><li>[ ] </li></ul>| [https://github.com/XcavateBlockchain/MVP_Lending_Pool/tree/MVP_Lending_Protocol/pallets/community-loan-pool] | Not fully evaluated yet. |
| 4.  | Community Loan Staking pallet | <ul><li>[ ] </li></ul>| [https://github.com/XcavateBlockchain/MVP_Lending_Pool/tree/MVP_Lending_Protocol/pallets/xcavate-staking] | Not fully evaluated yet. | 
| 5.  | Verification pallet | <ul><li>[ ] </li></ul>| [https://github.com/XcavateBlockchain/kilt-credentials] | Not fully evaluated yet. | 
| 6.  | DAO | <ul><li>[ ] </li></ul>| [https://github.com/XcavateBlockchain/MVP_Lending_Pool/blob/MVP_Lending_Protocol/node/Cargo.toml] | Couldn't use cargo commands. | 
| 7a.  | Decentralized Developer Loan dApp / Front End Repo part 1 | <ul><li>[ ] </li></ul>| [https://github.com/XcavateBlockchain/MVP_Frontend] | Couldn't connet the wallet. | 
| 7b.  | Decentralized Developer Loan dApp / Front End Repo part 2 | <ul><li>[ ] </li></ul>| [https://github.com/XcavateBlockchain/MVP_Backend] | Not fully evaluated yet. | 
| 7c.  | Decentralized Developer Loan dApp / Front End Repo part 3 | <ul><li>[ ] </li></ul>| [https://github.com/XcavateBlockchain/MVP_Admin] | Not fully evaluated yet. | 

## Evaluation V3

### Node

I tried again to build using the [newly indicated repository](https://github.com/XcavateBlockchain/Xcavate_Node) with  Docker to check if I could build with success but I received the same error.

<details>

```
 => ERROR [build 4/4] RUN cargo build --release                                                                                                                                                             537.6s
------                                                                                                                                                                                                             
 > [build 4/4] RUN cargo build --release:                                                                                                                                                                          
#0 0.465 info: syncing channel updates for 'nightly-2023-01-01-x86_64-unknown-linux-gnu'                                                                                                                           
#0 4.219 info: latest update on 2023-01-01, rust version 1.68.0-nightly (574b64a97 2022-12-31)                                                                                                                     
#0 4.219 info: downloading component 'cargo'                                                                                                                                                                       
#0 11.80 info: downloading component 'rust-std' for 'wasm32-unknown-unknown'                                                                                                                                       
#0 29.30 info: downloading component 'rust-std'
#0 54.56 info: downloading component 'rustc'
#0 107.7 info: downloading component 'rustfmt'
#0 113.0 info: installing component 'cargo'
#0 113.5 info: installing component 'rust-std' for 'wasm32-unknown-unknown'
#0 115.0 info: installing component 'rust-std'
#0 117.2 info: installing component 'rustc'
#0 121.5 info: installing component 'rustfmt'
#0 122.2     Updating crates.io index
#0 403.8     Updating git repository `https://github.com/paritytech/substrate.git`
#0 537.6 error: failed to get `frame-benchmarking` as a dependency of package `node-template v4.0.0-dev (/code/node)`
#0 537.6 
#0 537.6 Caused by:
#0 537.6   failed to load source for dependency `frame-benchmarking`
#0 537.6 
#0 537.6 Caused by:
#0 537.6   Unable to update https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#98f2e345
#0 537.6 
#0 537.6 Caused by:
#0 537.6   object not found - no match for id (98f2e3451c9143278ec53c6718940aeabcd3b68a); class=Odb (9); code=NotFound (-3)
------
Dockerfile:5
--------------------
   3 |     WORKDIR /code
   4 |     COPY . .
   5 | >>> RUN cargo build --release
   6 |     
   7 |     FROM ubuntu:latest
--------------------
ERROR: failed to solve: process "/bin/sh -c cargo build --release" did not complete successfully: exit code: 101
```

</details>

### Contract

I tried to build the contract in the [new contract repository](https://github.com/XcavateBlockchain/xcavate_loan_contract.git) but I received this error.

<details>

```
user@localhost:~/Documents/xcavate/xcavate_loan_contract$ cargo contract build --release
 [1/*] Building cargo project
    Finished release [optimized] target(s) in 0.23s
 [2/*] Generating metadata
   Compiling metadata-gen v0.1.0 (/tmp/cargo-contract_CwO95e/.ink/metadata_gen)
error: linking with `cc` failed: exit status: 1
  |
  = note: LC_ALL="C" PATH="/home/user/.rustup/toolchains/nightly-2023-01-01-x86_64-unknown-linux-gnu/lib/rustlib/x86_64-unknown-linux-gnu/bin:/home/user/.pyenv/shims:/home/user/.nvm/versions/node/v18.16.0/bin:/home/user/.nix-profile/bin:/nix/var/nix/profiles/default/bin:/home/user/.cargo/bin:/home/user/.pyenv/bin:/home/user/.local/bin:/home/user/.nix-profile/bin:/nix/var/nix/profiles/default/bin:/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games:/home/user/.foundry/bin:/home/user/.local/go/bin:/home/user/Downloads/OpenWhisk_CLI-1.2.0-linux-amd64:/home/user/Documents/aurras/aurras/workflow/composer:/home/user/.pyenv/bin:/home/user/Downloads/llvm15.0/bin:/home/user/Downloads/dotnet-sdk-7.0.400-linux-x64:/home/user/Downloads/azuredatastudio-linux-x64:/home/user/Downloads/redis-4.0.7/src:/home/user/Downloads/mongodb-linux-x86_64-debian11-7.0.0/bin:/home/user/Downloads/mongosh-1.10.5-linux-x64/bin:/home/user/Downloads/ipfs/ipfs:/home/user/Downloads/substrate-contracts-node-linux/artifacts/substrate-contracts-node-linux:/home/user/Documents/slothunter/slothunter/target/release" VSLANG="1033" "cc" "-m64" "/tmp/rustc81v7YQ/symbols.o" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/metadata_gen-6bc6308340102ffe.metadata_gen.20a7a34b-cgu.0.rcgu.o" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/metadata_gen-6bc6308340102ffe.metadata_gen.20a7a34b-cgu.1.rcgu.o" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/metadata_gen-6bc6308340102ffe.metadata_gen.20a7a34b-cgu.10.rcgu.o" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/metadata_gen-6bc6308340102ffe.metadata_gen.20a7a34b-cgu.11.rcgu.o" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/metadata_gen-6bc6308340102ffe.metadata_gen.20a7a34b-cgu.12.rcgu.o" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/metadata_gen-6bc6308340102ffe.metadata_gen.20a7a34b-cgu.13.rcgu.o" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/metadata_gen-6bc6308340102ffe.metadata_gen.20a7a34b-cgu.14.rcgu.o" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/metadata_gen-6bc6308340102ffe.metadata_gen.20a7a34b-cgu.15.rcgu.o" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/metadata_gen-6bc6308340102ffe.metadata_gen.20a7a34b-cgu.2.rcgu.o" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/metadata_gen-6bc6308340102ffe.metadata_gen.20a7a34b-cgu.3.rcgu.o" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/metadata_gen-6bc6308340102ffe.metadata_gen.20a7a34b-cgu.4.rcgu.o" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/metadata_gen-6bc6308340102ffe.metadata_gen.20a7a34b-cgu.5.rcgu.o" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/metadata_gen-6bc6308340102ffe.metadata_gen.20a7a34b-cgu.6.rcgu.o" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/metadata_gen-6bc6308340102ffe.metadata_gen.20a7a34b-cgu.7.rcgu.o" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/metadata_gen-6bc6308340102ffe.metadata_gen.20a7a34b-cgu.8.rcgu.o" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/metadata_gen-6bc6308340102ffe.metadata_gen.20a7a34b-cgu.9.rcgu.o" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/metadata_gen-6bc6308340102ffe.b5kp0654vd6vpg.rcgu.o" "-Wl,--as-needed" "-L" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps" "-L" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/build/secp256k1-sys-97a648074d911023/out" "-L" "/home/user/.rustup/toolchains/nightly-2023-01-01-x86_64-unknown-linux-gnu/lib/rustlib/x86_64-unknown-linux-gnu/lib" "-Wl,-Bstatic" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libserde_json-bc329f7849043733.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libryu-ffc82982d137c604.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libitoa-da837f2c96aeeb31.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libxcavate_lending_protocol-480ad6859886854b.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libopenbrush-49bad53051da7e2b.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libopenbrush_contracts-79fffed4a08bbc5f.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libopenbrush_lang-da8125b736328b04.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libconst_format-3f544cb7537e5fc1.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libink-78a70d03eb1f1786.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libink_storage-378f5fc4c60b6354.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libink_env-bcde4bab4f992b22.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libink_engine-c494b8bb81e9239f.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libsha2-8bd9587a566e8bfd.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libcpufeatures-9afc2eebc73d816e.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libsha3-9d370768c01b408a.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libkeccak-2ec801f7ea8c87f9.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libblake2-78d95274fa9ec3ea.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libdigest-43825aa295da0447.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libsubtle-bb7be9b9749eb57e.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libblock_buffer-e09c5b416703ab8f.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libcrypto_common-1e51f07719035c87.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libgeneric_array-d847891487d83175.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libtypenum-65220950c030e733.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libsecp256k1-7ba2cf923e6a36e1.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libsecp256k1_sys-ca32534bbf5fddf1.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libarrayref-fc0a72e5085c38fd.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libstatic_assertions-6865a9c0238fb2ad.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libnum_traits-bdd166091f2c59da.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libink_storage_traits-3d8fc6937e9efbb9.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libink_metadata-222fcd0f3251619d.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libimpl_serde-71f7f1bc667db6ee.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libink_primitives-efafb59a1c70fc33.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libscale_encode-b5944ffd99ee6ecd.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libscale_decode-62533a7a6969fbc0.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libsmallvec-486b64106c006df0.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libscale_bits-a0760d77e5be9559.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libscale_info-9ab6a37acc20aad9.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libbitvec-fd3fbdf8eb8abd4c.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libwyz-e289aec6b92cf679.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libtap-abdd322fa87742c3.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libradium-53217f1c2dc64443.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libfunty-a012e3942e58fb90.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libparity_scale_codec-2cd3d25dbd284026.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libserde-184b512f15d121b4.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libarrayvec-157f4de9642b9fc9.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libbyte_slice_cast-31d55c9844484da4.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libxxhash_rust-aac50840cd46e640.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libink_prelude-8ef58543bfb53009.rlib" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/libcfg_if-af4ed11818f18246.rlib" "/home/user/.rustup/toolchains/nightly-2023-01-01-x86_64-unknown-linux-gnu/lib/rustlib/x86_64-unknown-linux-gnu/lib/libstd-62c4894b82797b30.rlib" "/home/user/.rustup/toolchains/nightly-2023-01-01-x86_64-unknown-linux-gnu/lib/rustlib/x86_64-unknown-linux-gnu/lib/libpanic_unwind-21d882eb82e74d58.rlib" "/home/user/.rustup/toolchains/nightly-2023-01-01-x86_64-unknown-linux-gnu/lib/rustlib/x86_64-unknown-linux-gnu/lib/libobject-a7a4a5c38e3da2ad.rlib" "/home/user/.rustup/toolchains/nightly-2023-01-01-x86_64-unknown-linux-gnu/lib/rustlib/x86_64-unknown-linux-gnu/lib/libmemchr-e2b1fec37c9c19cd.rlib" "/home/user/.rustup/toolchains/nightly-2023-01-01-x86_64-unknown-linux-gnu/lib/rustlib/x86_64-unknown-linux-gnu/lib/libaddr2line-f5128b1419f0c95a.rlib" "/home/user/.rustup/toolchains/nightly-2023-01-01-x86_64-unknown-linux-gnu/lib/rustlib/x86_64-unknown-linux-gnu/lib/libgimli-41e9355081407ce3.rlib" "/home/user/.rustup/toolchains/nightly-2023-01-01-x86_64-unknown-linux-gnu/lib/rustlib/x86_64-unknown-linux-gnu/lib/librustc_demangle-3d69bc2ce2ff7508.rlib" "/home/user/.rustup/toolchains/nightly-2023-01-01-x86_64-unknown-linux-gnu/lib/rustlib/x86_64-unknown-linux-gnu/lib/libstd_detect-bb4c6139d02b6b90.rlib" "/home/user/.rustup/toolchains/nightly-2023-01-01-x86_64-unknown-linux-gnu/lib/rustlib/x86_64-unknown-linux-gnu/lib/libhashbrown-3990de10d3f2460e.rlib" "/home/user/.rustup/toolchains/nightly-2023-01-01-x86_64-unknown-linux-gnu/lib/rustlib/x86_64-unknown-linux-gnu/lib/libminiz_oxide-3a23c05350b4d45c.rlib" "/home/user/.rustup/toolchains/nightly-2023-01-01-x86_64-unknown-linux-gnu/lib/rustlib/x86_64-unknown-linux-gnu/lib/libadler-c2c33bc29289b145.rlib" "/home/user/.rustup/toolchains/nightly-2023-01-01-x86_64-unknown-linux-gnu/lib/rustlib/x86_64-unknown-linux-gnu/lib/librustc_std_workspace_alloc-b3d80be3be44960e.rlib" "/home/user/.rustup/toolchains/nightly-2023-01-01-x86_64-unknown-linux-gnu/lib/rustlib/x86_64-unknown-linux-gnu/lib/libunwind-d2581a381e26c54b.rlib" "/home/user/.rustup/toolchains/nightly-2023-01-01-x86_64-unknown-linux-gnu/lib/rustlib/x86_64-unknown-linux-gnu/lib/libcfg_if-0ff401eab4233ffd.rlib" "/home/user/.rustup/toolchains/nightly-2023-01-01-x86_64-unknown-linux-gnu/lib/rustlib/x86_64-unknown-linux-gnu/lib/liblibc-6d46d38f739892fe.rlib" "/home/user/.rustup/toolchains/nightly-2023-01-01-x86_64-unknown-linux-gnu/lib/rustlib/x86_64-unknown-linux-gnu/lib/liballoc-cb19371b39fc63d8.rlib" "/home/user/.rustup/toolchains/nightly-2023-01-01-x86_64-unknown-linux-gnu/lib/rustlib/x86_64-unknown-linux-gnu/lib/librustc_std_workspace_core-522518611024dce5.rlib" "/home/user/.rustup/toolchains/nightly-2023-01-01-x86_64-unknown-linux-gnu/lib/rustlib/x86_64-unknown-linux-gnu/lib/libcore-05898138a596088a.rlib" "/home/user/.rustup/toolchains/nightly-2023-01-01-x86_64-unknown-linux-gnu/lib/rustlib/x86_64-unknown-linux-gnu/lib/libcompiler_builtins-66b9c3ae5ff29c13.rlib" "-Wl,-Bdynamic" "-lgcc_s" "-lutil" "-lrt" "-lpthread" "-lm" "-ldl" "-lc" "-Wl,--eh-frame-hdr" "-Wl,-znoexecstack" "-L" "/home/user/.rustup/toolchains/nightly-2023-01-01-x86_64-unknown-linux-gnu/lib/rustlib/x86_64-unknown-linux-gnu/lib" "-o" "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/metadata_gen-6bc6308340102ffe" "-Wl,--gc-sections" "-pie" "-Wl,-zrelro,-znow" "-Wl,-O1" "-nodefaultlibs"
  = note: /usr/bin/ld: /home/user/Documents/xcavate/xcavate_loan_contract/target/ink/release/deps/metadata_gen-6bc6308340102ffe.metadata_gen.20a7a34b-cgu.14.rcgu.o: in function `metadata_gen::main':
          metadata_gen.20a7a34b-cgu.14:(.text._ZN12metadata_gen4main17h2367a0e1641f1b89E+0x11): undefined reference to `__ink_generate_metadata'
          collect2: error: ld returned 1 exit status
          
  = note: some `extern` functions couldn't be found; some native libraries may need to be installed or have their path specified
  = note: use the `-l` flag to specify native libraries to link
  = note: use the `cargo:rustc-link-lib` directive to specify the native libraries to link with Cargo (see https://doc.rust-lang.org/cargo/reference/build-scripts.html#cargorustc-link-libkindname)

error: could not compile `metadata-gen` due to previous error
ERROR: command ["/home/user/.rustup/toolchains/nightly-2023-01-01-x86_64-unknown-linux-gnu/bin/cargo", "run", "--color=always", "--package", "metadata-gen", "--manifest-path=/tmp/cargo-contract_CwO95e/Cargo.toml", "--target-dir", "/home/user/Documents/xcavate/xcavate_loan_contract/target/ink", "--release"] exited with code 101
```

</details>

### Decentralized Developer Loan dApp

This time, I was able to connect my wallet using the latest test version of Sporran. When I tried to link my credentials to my DID, I received this error in the backend.

<details>

```
[18/09/2023, 10:14:29][INFO]  Incomming -> Method: [POST] - Url: [/api/user] - IP: [::ffff:127.0.0.1]
uploading error ::  MissingRequiredParameter: Missing required key 'Bucket' in params
	at ParamValidator.fail (/home/user/Documents/xcavate/MVP_Backend/node_modules/aws-sdk/lib/param_validator.js:50:37)
	at ParamValidator.validateStructure (/home/user/Documents/xcavate/MVP_Backend/node_modules/aws-sdk/lib/param_validator.js:62:14)
	at ParamValidator.validateMember (/home/user/Documents/xcavate/MVP_Backend/node_modules/aws-sdk/lib/param_validator.js:89:21)
	at ParamValidator.validate (/home/user/Documents/xcavate/MVP_Backend/node_modules/aws-sdk/lib/param_validator.js:34:10)
	at Request.VALIDATE_PARAMETERS (/home/user/Documents/xcavate/MVP_Backend/node_modules/aws-sdk/lib/event_listeners.js:166:42)
	at Request.callListeners (/home/user/Documents/xcavate/MVP_Backend/node_modules/aws-sdk/lib/sequential_executor.js:106:20)
	at callNextListener (/home/user/Documents/xcavate/MVP_Backend/node_modules/aws-sdk/lib/sequential_executor.js:96:12)
	at /home/user/Documents/xcavate/MVP_Backend/node_modules/aws-sdk/lib/event_listeners.js:120:11
	at finish (/home/user/Documents/xcavate/MVP_Backend/node_modules/aws-sdk/lib/config.js:396:7)
	at /home/user/Documents/xcavate/MVP_Backend/node_modules/aws-sdk/lib/config.js:438:9 {
  code: 'MissingRequiredParameter',
  time: 2023-09-18T13:14:37.677Z
}
```

</details>

I updated the .env with the AWS and Crust network info provided in [this comment](https://github.com/w3f/Grant-Milestone-Delivery/pull/992#issuecomment-1718973383), and this solved the problem. I would like to know what is being stored in the AWS. Is this info necessary for the application? If It is, it needs to be in the `.env.example` and in the documentation with some instructions on how to get these variables.

When I tried to Request a loan, I received 400 Bad Request in the console and this error in the backend when trying to submit in the last window.

<details>

```
uploading error ::  SignatureDoesNotMatch: The request signature we calculated does not match the signature you provided. Check your key and signing method.
	at Request.extractError (/home/user/Documents/xcavate/MVP_Backend/node_modules/aws-sdk/lib/services/s3.js:711:35)
	at Request.callListeners (/home/user/Documents/xcavate/MVP_Backend/node_modules/aws-sdk/lib/sequential_executor.js:106:20)
	at Request.emit (/home/user/Documents/xcavate/MVP_Backend/node_modules/aws-sdk/lib/sequential_executor.js:78:10)
	at Request.emit (/home/user/Documents/xcavate/MVP_Backend/node_modules/aws-sdk/lib/request.js:686:14)
	at Request.transition (/home/user/Documents/xcavate/MVP_Backend/node_modules/aws-sdk/lib/request.js:22:10)
	at AcceptorStateMachine.runTo (/home/user/Documents/xcavate/MVP_Backend/node_modules/aws-sdk/lib/state_machine.js:14:12)
	at /home/user/Documents/xcavate/MVP_Backend/node_modules/aws-sdk/lib/state_machine.js:26:10
	at Request.<anonymous> (/home/user/Documents/xcavate/MVP_Backend/node_modules/aws-sdk/lib/request.js:38:9)
	at Request.<anonymous> (/home/user/Documents/xcavate/MVP_Backend/node_modules/aws-sdk/lib/request.js:688:12)
	at Request.callListeners (/home/user/Documents/xcavate/MVP_Backend/node_modules/aws-sdk/lib/sequential_executor.js:116:18) {
  code: 'SignatureDoesNotMatch',
  region: null,
  time: 2023-09-18T13:46:43.905Z,
  requestId: '1FEWBNBDH7CVDARX',
  extendedRequestId: '+TrXoPhGemO/kj7Zy1S6PMi2FxdNgVgyLO0nceQuVvBFjFtt3J06KrWCk1cCUSLRBZU7dYdgOmuM18pNPL2w+A==',
  cfId: undefined,
  statusCode: 403,
  retryable: false,
  retryDelay: 90.9324145644753
}
```

</details>

The request info:

<details>

```

-----------------------------251684705632918065901995171460
Content-Disposition: form-data; name="planningPermissionCode"

UK1085745222
-----------------------------251684705632918065901995171460
Content-Disposition: form-data; name="planningAuthority"

Planning Authority
-----------------------------251684705632918065901995171460
Content-Disposition: form-data; name="landTitleDeedCode"

"UK1085745222"
-----------------------------251684705632918065901995171460
Content-Disposition: form-data; name="companyUrl"

www.planningpermisionapplication.dev
-----------------------------251684705632918065901995171460
Content-Disposition: form-data; name="companyName"

Briks and blocks limited
-----------------------------251684705632918065901995171460
Content-Disposition: form-data; name="companyPhoneNumber"

094523546
-----------------------------251684705632918065901995171460
Content-Disposition: form-data; name="companyDirector"

John Deo
-----------------------------251684705632918065901995171460
Content-Disposition: form-data; name="address"

UK1085745222
-----------------------------251684705632918065901995171460
Content-Disposition: form-data; name="landValue"

1000000
-----------------------------251684705632918065901995171460
Content-Disposition: form-data; name="totalGDV"

3000000
-----------------------------251684705632918065901995171460
Content-Disposition: form-data; name="duration"

6
-----------------------------251684705632918065901995171460
Content-Disposition: form-data; name="amount"

1000000
-----------------------------251684705632918065901995171460
Content-Disposition: form-data; name="currency"

GBP
-----------------------------251684705632918065901995171460
Content-Disposition: form-data; name="repaymentMethod"

Pay
-----------------------------251684705632918065901995171460
Content-Disposition: form-data; name="developmentPlan"; filename="Screenshot 2023-05-04 at 08-02-52 Polkadot_Substrate Portal.png"
Content-Type: image/png

PNG
...
...
-----------------------------251684705632918065901995171460--
```

</details>

I have some minor problems and questions. Should I be able to create a new DID using the front end? This step is on the PDF (pages 3, 4, and 5), but I didn't saw it. 

Some input boxes in the documentation are select boxes, but when I was testing, all the input boxes were input text. 

When I uploaded the image, the "Click to upload or drag and drop" box didn't change it, so I tried a few times to upload the image but I gave up and submitted it. I checked the console and the PNG was sent. I tested using Firefox. This don't look like the expected behavior. 


## Evaluation V2

### License 

The merge conflict in the license was fixed..

### Decentralized Developer Loan dApp 

The problem with the Backend is now solved. However, I still can't connect my wallet.

### Code Quality

The lint problems in the directory `MVP_Admin` were fixed.

<details>

```
user@localhost:~/Documents/xcavate/MVP_Admin$ yarn lint
yarn run v1.22.19
$ eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0
=============

WARNING: You are currently running a version of TypeScript which is not officially supported by @typescript-eslint/typescript-estree.

You may find that it works just fine, or you may not.

SUPPORTED TYPESCRIPT VERSIONS: >=3.3.1 <5.2.0

YOUR TYPESCRIPT VERSION: 5.2.2

Please only submit bug reports when using the officially supported version.

=============
Done in 2.88s.

```

</details>

## Evaluation V1

### Pull Request

I noticed the file isn't following the number for the deliverables. For example, the Docker, article and tutorial should be in the "0x.".

### License

The [license for Xcavate Loan App Repo](https://github.com/XcavateBlockchain/lending_protocol_contracts/blob/main/LICENSE) has some merge conflicts.

### Xcavate Node

I had some problems with this repo. When I tried to use cargo commands, I received this error:

<details>

```
user@localhost:~/Documents/xcavate/MVP_Lending_Pool$ cargo build --release    
Updating git repository `https://github.com/paritytech/substrate.git`
error: failed to get frame-benchmarking as a dependency of package node-template v4.0.0-dev (/home/user/Documents/xcavate/MVP_Lending_Pool/node)
Caused by:  failed to load source for dependency frame-benchmarking
Caused by:  Unable to update https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#98f2e345
Caused by:  object not found - no match for id (98f2e3451c9143278ec53c6718940aeabcd3b68a); class=Odb (9); code=NotFound (-3)
```

</details>

I tried to use a Dockerfile, but I received the same error.

<details>

Dockerfile
```
FROM paritytech/ci-linux:production

WORKDIR /var/www/xcavate

COPY . .

RUN rustup install nightly-2023-01-01-x86_64-unknown-linux-gnu
RUN rustup default nightly-2023-01-01-x86_64-unknown-linux-gnu
RUN rustup target add wasm32-unknown-unknown

RUN cargo build --release

EXPOSE 9944
CMD [ "./target/release/substrate", "--dev", "--rpc-external"]
```

`docker build . ` log
```
user@localhost:~/Documents/xcavate/MVP_Lending_Pool$ docker build .
[+] Building 1139.5s (11/11) FINISHED                                                                                                             
 => [internal] load .dockerignore                                                                                                            0.0s
 => => transferring context: 2B                                                                                                              0.0s
 => [internal] load build definition from dockerfile                                                                                         0.0s
 => => transferring dockerfile: 385B                                                                                                         0.0s
 => [internal] load metadata for docker.io/paritytech/ci-linux:production                                                                    0.6s
 => [1/7] FROM docker.io/paritytech/ci-linux:production@sha256:dc9abf9e877c5bad94828245406dac8a186530e1ad6a1b5f2072e5e19e1f64b4            303.1s
 => => resolve docker.io/paritytech/ci-linux:production@sha256:dc9abf9e877c5bad94828245406dac8a186530e1ad6a1b5f2072e5e19e1f64b4              0.0s
 => => sha256:94ec252bb138516408d499a54bd40801d1c76e3e0182571a90bb138e86cce7e3 588.46MB / 588.46MB                                         261.2s
 => => sha256:935ba62d5fdff39246cf9fca5697ae756bfdc34b2957c935254f447f1a296165 409.86MB / 409.86MB                                         214.4s
 => => sha256:dc9abf9e877c5bad94828245406dac8a186530e1ad6a1b5f2072e5e19e1f64b4 762B / 762B                                                   0.0s
 => => sha256:2d60a4916bc3faa064d298c966fd315dd26cd42fd54ec492ec238a99f649ca50 10.01kB / 10.01kB                                             0.0s
 => => sha256:9d21b12d5fab9ab82969054d72411ce627c209257df64b6057016c981e163c30 31.42MB / 31.42MB                                            20.1s
 => => extracting sha256:9d21b12d5fab9ab82969054d72411ce627c209257df64b6057016c981e163c30                                                    0.8s
 => => extracting sha256:94ec252bb138516408d499a54bd40801d1c76e3e0182571a90bb138e86cce7e3                                                   16.6s
 => => extracting sha256:935ba62d5fdff39246cf9fca5697ae756bfdc34b2957c935254f447f1a296165                                                   19.2s
 => [internal] load build context                                                                                                          253.6s
 => => transferring context: 16.65GB                                                                                                       252.8s
 => [2/7] WORKDIR /var/www/xcavate                                                                                                          16.2s
 => [3/7] COPY . .                                                                                                                         248.5s
 => [4/7] RUN rustup install nightly-2023-01-01-x86_64-unknown-linux-gnu                                                                   107.0s
 => [5/7] RUN rustup default nightly-2023-01-01-x86_64-unknown-linux-gnu                                                                     0.5s
 => [6/7] RUN rustup target add wasm32-unknown-unknown                                                                                      27.5s
 => ERROR [7/7] RUN cargo build --release                                                                                                  436.0s
------
 > [7/7] RUN cargo build --release:
#0 0.624     Updating crates.io index
#0 310.6     Updating git repository `https://github.com/paritytech/substrate.git`
#0 436.0 error: failed to get `frame-benchmarking` as a dependency of package `node-template v4.0.0-dev (/var/www/xcavate/node)`
#0 436.0 
#0 436.0 Caused by:
#0 436.0   failed to load source for dependency `frame-benchmarking`
#0 436.0 
#0 436.0 Caused by:
#0 436.0   Unable to update https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#98f2e345
#0 436.0 
#0 436.0 Caused by:
#0 436.0   object not found - no match for id (98f2e3451c9143278ec53c6718940aeabcd3b68a); class=Odb (9); code=NotFound (-3)
------
dockerfile:11
--------------------
   9 |     RUN rustup target add wasm32-unknown-unknown
  10 |     
  11 | >>> RUN cargo build --release
  12 |     
  13 |     EXPOSE 9944
--------------------
ERROR: failed to solve: process "/bin/sh -c cargo build --release" did not complete successfully: exit code: 101
```

</details>

I removed the `rust-toolchain.toml`. It solved the problem for me, but I used the same versions.

<details>

```
user@localhost:~/Documents/xcavate$ rustup show
Default host: x86_64-unknown-linux-gnu
rustup home:  /home/user/.rustup

installed toolchains
--------------------

stable-x86_64-unknown-linux-gnu
nightly-2023-01-01-x86_64-unknown-linux-gnu (default)
nightly-x86_64-unknown-linux-gnu
1.69.0-x86_64-unknown-linux-gnu

installed targets for active toolchain
--------------------------------------

wasm32-unknown-unknown
x86_64-unknown-linux-gnu

active toolchain
----------------

nightly-2023-01-01-x86_64-unknown-linux-gnu (default)
rustc 1.68.0-nightly (574b64a97 2022-12-31)
``` 

</details>

Maybe the overridden version by the `rust-toolchain.toml` doesn't have some caches in comparison to the not overridden versions. Because I tried again with Docker without success.

### Docker

Could you explain the problem you faced with the Docker image? You could create a dockerfile for the user to build the image.

### Pallets

I was able to build the loan contract, but when I deployed the contract it didn't appear on the contracts page and the message `contracts.instantiateWithCode   ready` in the corner didn't disappear. Besides that, I was able to add the existing contract using Polkadot.js because the code was stored and the contract instantiated.

I followed the video tutorial to test the pallets without problems. Watching the tutorial, I didn't notice any usage of the Community Loan Staking pallet. Is it used in the Loan management pallet or somewhere else? 

Could you explain the Verification pallet? I saw the comment that is not pallet, this is somewhat confusing.

I tried to run `cargo test`, but received these errors.

<details>

```
   Compiling kvdb-rocksdb v0.17.0
   Compiling sc-client-db v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#98f2e345)
error[E0277]: the trait bound `mock::Test: pallet_contracts::Config` is not satisfied
   --> pallets/community-loan-pool/src/mock.rs:135:6
    |
135 | impl pallet_community_loan_pool::Config for Test {
    |      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ the trait `pallet_contracts::Config` is not implemented for `mock::Test`
    |
note: required by a bound in `pallet::Config`
   --> pallets/community-loan-pool/src/lib.rs:109:51
    |
108 |     pub trait Config:
    |               ------ required by a bound in this
109 |         frame_system::Config + pallet_uniques::Config + pallet_contracts::Config
    |                                                         ^^^^^^^^^^^^^^^^^^^^^^^^ required by this bound in `Config`

error[E0046]: not all trait items implemented, missing: `Currency`, `MinimumRemainingAmount`, `TimeProvider`
  --> pallets/xcavate-staking/src/mock.rs:51:1
   |
51 |   impl pallet_template::Config for Test {
   |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ missing `Currency`, `MinimumRemainingAmount`, `TimeProvider` in implementation
   |
  ::: pallets/xcavate-staking/src/lib.rs:65:9
   |
65 | /         type Currency: Currency<Self::AccountId, Balance = Balance>
66 | |             + LockableCurrency<Self::AccountId, Moment = Self::BlockNumber>
67 | |             + ReservableCurrency<Self::AccountId>;
   | |_________________________________________________- `Currency` from trait
...
71 |           type MinimumRemainingAmount: Get<Balance>;
   |           ----------------------------------------- `MinimumRemainingAmount` from trait
72 |           type TimeProvider: UnixTime;
   |           --------------------------- `TimeProvider` from trait

error[E0277]: the trait bound `mock::Test: pallet_contracts::Config` is not satisfied in `sp_runtime::generic::UncheckedExtrinsic<u32, RuntimeCall, (), ()>`
   --> pallets/community-loan-pool/src/mock.rs:27:1
    |
27  | // frame_support::construct_runtime!(
28  | ||     pub enum Test where
29  | ||         Block = Block,
30  | ||         NodeBlock = Block,
...   ||
37  | ||     }
38  | || );
    | ||_- in this macro invocation
...   |
    |
    = help: the trait `BlockT` is implemented for `sp_runtime::generic::Block<Header, Extrinsic>`
note: required because it appears within the type `Call<Test>`
   --> pallets/community-loan-pool/src/lib.rs:246:12
    |
246 |     #[pallet::call]
    |               ^^^^
note: required because it appears within the type `RuntimeCall`
   --> pallets/community-loan-pool/src/mock.rs:27:1
    |
27  | // frame_support::construct_runtime!(
28  | ||     pub enum Test where
29  | ||         Block = Block,
30  | ||         NodeBlock = Block,
...   ||
37  | ||     }
38  | || );
    | ||_- in this macro invocation
...   |
    = note: required because it appears within the type `UncheckedExtrinsic<u32, RuntimeCall, (), ()>`
    = note: required for `sp_runtime::generic::UncheckedExtrinsic<u32, RuntimeCall, (), ()>` to implement `Member`
    = note: required for `sp_runtime::generic::Block<sp_runtime::generic::Header<u64, BlakeTwo256>, sp_runtime::generic::UncheckedExtrinsic<u32, RuntimeCall, (), ()>>` to implement `BlockT`
    = note: this error originates in the macro `frame_support::construct_runtime` (in Nightly builds, run with -Z macro-backtrace for more info)

For more information about this error, try `rustc --explain E0277`.
warning: `pallet-community-loan-pool` (lib test) generated 9 warnings (5 duplicates)
error: could not compile `pallet-community-loan-pool` due to 2 previous errors; 9 warnings emitted
warning: build failed, waiting for other jobs to finish...
error[E0599]: no function or associated item named `do_something` found for struct `Pallet` in the current scope
  --> pallets/xcavate-staking/src/tests.rs:10:30
   |
10 |         assert_ok!(TemplateModule::do_something(RuntimeOrigin::signed(1), 42));
   |                                    ^^^^^^^^^^^^ function or associated item not found in `Pallet<Test>`
   |
  ::: pallets/xcavate-staking/src/lib.rs:57:5
   |
57 |     pub struct Pallet<T>(_);
   |     -------------------- function or associated item `do_something` not found for this struct

error[E0599]: no function or associated item named `something` found for struct `Pallet` in the current scope
  --> pallets/xcavate-staking/src/tests.rs:12:30
   |
12 |         assert_eq!(TemplateModule::something(), Some(42));
   |                                    ^^^^^^^^^ function or associated item not found in `Pallet<Test>`
   |
  ::: pallets/xcavate-staking/src/lib.rs:57:5
   |
57 |     pub struct Pallet<T>(_);
   |     -------------------- function or associated item `something` not found for this struct

error[E0599]: no variant named `SomethingStored` found for enum `pallet::Event<_>`
  --> pallets/xcavate-staking/src/tests.rs:14:36
   |
14 |         System::assert_last_event(Event::SomethingStored { something: 42, who: 1 }.into());
   |                                          ^^^^^^^^^^^^^^^ variant not found in `pallet::Event<_>`
   |
  ::: pallets/xcavate-staking/src/lib.rs:92:5
   |
92 |     pub enum Event<T: Config> {
   |     ------------------------- variant `SomethingStored` not found here

error[E0599]: no function or associated item named `cause_error` found for struct `Pallet` in the current scope
  --> pallets/xcavate-staking/src/tests.rs:23:20
   |
23 |             TemplateModule::cause_error(RuntimeOrigin::signed(1)),
   |                             ^^^^^^^^^^^ function or associated item not found in `Pallet<Test>`
   |
  ::: pallets/xcavate-staking/src/lib.rs:57:5
   |
57 |     pub struct Pallet<T>(_);
   |     -------------------- function or associated item `cause_error` not found for this struct

error[E0599]: no variant or associated item named `NoneValue` found for enum `Error` in the current scope
   --> pallets/xcavate-staking/src/tests.rs:24:19
    |
24  |             Error::<Test>::NoneValue
    |                            ^^^^^^^^^ variant or associated item not found in `Error<Test>`
    |
   ::: pallets/xcavate-staking/src/lib.rs:103:5
    |
103 |     pub enum Error<T> {
    |     ----------------- variant or associated item `NoneValue` not found for this enum

Some errors have detailed explanations: E0046, E0599.
For more information about an error, try `rustc --explain E0046`.
error: could not compile `pallet-xcavate-staking` due to 6 previous errors
```

</details>

### Decentralized Developer Loan dApp 

I added the variables in the `.env`. I noticed the `MONGO_DB_URL` isn't showing in the example in the readme.

<details>

```
PORT="9090"
JWT_SECRET="XCavate JWT Secret"
URL=http://localhost:9090
BLOCKCHAIN_ENDPOINT=wss://peregrine.kilt.io/parachain-public-ws
DID=did:kilt:4skimcqA5SDHsp4K6XM6nQVZSuCPAixbjW6MUok6e5uJqtuf

SECRET_PAYER_MNEMONIC=forest turn anchor because angry miracle slot unhappy claim blood champion dolphin
SECRET_AUTHENTICATION_MNEMONIC=cage tunnel resist radio lab cost quick slight axis mad ankle era
SECRET_ASSERTION_METHOD_MNEMONIC=view science pistol skull enlist bleak wave category lawn real drill balcony
SECRET_KEY_AGREEMENT_MNEMONIC=curtain chest safe roast place avocado faculty duck dial bless pill mutual

ADMIN_USERNAME=example
ADMIN_PASSWORD=attester


# MongoDB
MONGO_DB_URL=localhost:27017/local
```

</details>

No problems running the repositories.

I disabled the CORS to use the front end. I added the wallet extension and tried to connect my wallet, but it didn't connect, and the console returned this error.

![pasted image 0 (14)](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/1751eb01-450d-4fb3-a4b9-20059ccb7e98)


Sometimes the backend crashes. I don't know how, but it occurred when I tried to navigate on the page.

<details>

Backend log
```
user@localhost:~/Documents/xcavate/MVP_Backend$ npm run dev

> mvp_backend@1.0.0 dev
> nodemon

[nodemon] 3.0.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node index.js`
Could not connect to db Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"
listening to port 9090...
(node:179675) NOTE: We are formalizing our plans to enter AWS SDK for JavaScript (v2) into maintenance mode in 2023.

Please migrate your code to use AWS SDK for JavaScript (v3).
For more information, check the migration guide at https://a.co/7PzMCcy
(Use `node --trace-warnings ...` to show where the warning was created)
Applied changes: logLevel=Error to log groups 'all'.
Applied changes: logLevel=Error to log groups 'all'.
[13/09/2023, 10:33:56][INFO]  Incomming -> Method: [GET] - Url: [/api/session] - IP: [::1]
[13/09/2023, 10:33:56][INFO]  Incomming -> Method: [GET] - Url: [/] - IP: [::1] - Status: [200]
[13/09/2023, 10:35:40][INFO]  Incomming -> Method: [GET] - Url: [/api/property] - IP: [::1]
file:///home/user/Documents/xcavate/MVP_Backend/controllers/property.controller.js:124
  	error: err.toString(),
         	^

ReferenceError: err is not defined
	at getAllProperties (file:///home/user/Documents/xcavate/MVP_Backend/controllers/property.controller.js:124:14)
	at process.processTicksAndRejections (node:internal/process/task_queues:95:5)

Node.js v18.16.0
[nodemon] app crashed - waiting for file changes before starting...
```

</details>

### Code Quality

I ran `cargo clippy` and got some warnings in the `MVP_Lending_Pool`. For example:

<details>

```
warning: manual implementation of an assign operation
   --> pallets/community-loan-pool/src/lib.rs:450:5
    |
450 |                 loan.amount = loan.amount + interest_balance;
    |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: replace it with: `loan.amount += interest_balance`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#assign_op_pattern
    = note: `#[warn(clippy::assign_op_pattern)]` on by default

warning: this function has too many arguments (10/7)
   --> pallets/community-loan-pool/src/lib.rs:246:12
    |
246 |     #[pallet::call]
    |               ^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#too_many_arguments

warning: very complex type used. Consider factoring parts into `type` definitions
   --> pallets/community-loan-pool/src/lib.rs:179:12
    |
179 |     #[pallet::storage]
    |               ^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#type_complexity
    = note: `#[warn(clippy::type_complexity)]` on by default

warning: the borrowed expression implements the required traits
   --> pallets/xcavate-staking/src/lib.rs:193:25
    |
193 |                 Ledger::<T>::remove(&staker);
    |                                     ^^^^^^^ help: change this to: `staker`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrow
    = note: `#[warn(clippy::needless_borrow)]` on by default

warning: `pallet-community-loan-pool` (lib) generated 17 warnings (run `cargo clippy --fix --lib -p pallet-community-loan-pool` to apply 8 suggestions)
warning: `pallet-xcavate-staking` (lib) generated 1 warning (run `cargo clippy --fix --lib -p pallet-xcavate-staking` to apply 1 suggestion)
```

</details>

I ran in the `lending_protocol_contracts` too. No warnings. I ran yarn lint in the `MVP_Admin` and got some problems, for example:

<details>

```
/home/user/Documents/xcavate/MVP_Admin/src/partials/SidebarLinkGroup.tsx
   5:13  warning  Unexpected any. Specify a different type                           @typescript-eslint/no-explicit-any
  10:11  error    Unsafe array destructuring of a tuple element with an `any` value  @typescript-eslint/no-unsafe-assignment
  18:61  error    Invalid type "false | "bg-hover"" of template literal expression   @typescript-eslint/restrict-template-expressions
  19:8   error    Unsafe call of an `any` typed value                                @typescript-eslint/no-unsafe-call

/home/user/Documents/xcavate/MVP_Admin/src/partials/credentials/DeveloperCredential.tsx
   4:13  warning  Unexpected any. Specify a different type                           @typescript-eslint/no-explicit-any
   8:11  error    Unsafe array destructuring of a tuple element with an `any` value  @typescript-eslint/no-unsafe-assignment
  17:12  error    Unsafe member access .fullName on an `any` value                   @typescript-eslint/no-unsafe-member-access
  25:12  error    Unsafe member access .phoneNumber on an `any` value                @typescript-eslint/no-unsafe-member-access
  33:12  error    Unsafe member access .email on an `any` value                      @typescript-eslint/no-unsafe-member-access
  41:12  error    Unsafe member access .address on an `any` value                    @typescript-eslint/no-unsafe-member-access
  49:12  error    Unsafe member access .profession on an `any` value                 @typescript-eslint/no-unsafe-member-access
  58:18  error    Unsafe assignment of an `any` value                                @typescript-eslint/no-unsafe-assignment
  58:18  error    Unsafe member access .idDoc1 on an `any` value                     @typescript-eslint/no-unsafe-member-access
  68:18  error    Unsafe assignment of an `any` value                                @typescript-eslint/no-unsafe-assignment
  68:18  error    Unsafe member access .idDoc2 on an `any` value                     @typescript-eslint/no-unsafe-member-access

/home/user/Documents/xcavate/MVP_Admin/src/partials/credentials/Table.tsx
   5:16  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  44:48  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  49:37  error    Unsafe assignment of an `any` value       @typescript-eslint/no-unsafe-assignment

/home/user/Documents/xcavate/MVP_Admin/src/partials/credentials/TableItem.tsx
   6:15   warning  Unexpected any. Specify a different type                           @typescript-eslint/no-explicit-any
  11:18   error    Unsafe array destructuring of a tuple element with an `any` value  @typescript-eslint/no-unsafe-assignment
  14:134  error    Unsafe assignment of an `any` value                                @typescript-eslint/no-unsafe-assignment
  14:139  error    Unsafe member access ._id on an `any` value                        @typescript-eslint/no-unsafe-member-access
  19:37   error    Unsafe member access .userId on an `any` value                     @typescript-eslint/no-unsafe-member-access
  22:37   error    Unsafe member access .rootHash on an `any` value                   @typescript-eslint/no-unsafe-member-access
  25:39   error    Unsafe member access .attested on an `any` value                   @typescript-eslint/no-unsafe-member-access
  28:39   error    Unsafe member access .cTypeTitle on an `any` value                 @typescript-eslint/no-unsafe-member-access

✖ 88 problems (76 errors, 12 warnings)
  2 errors and 0 warnings potentially fixable with the `--fix` option.
```

</details>
