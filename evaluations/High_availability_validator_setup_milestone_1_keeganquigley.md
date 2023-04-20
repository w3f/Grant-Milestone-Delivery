# Evaluation

- **Status:** In progress.
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/High_availability_validator_setup.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | License | <ul><li>[x] </li></ul> | https://github.com/bright/substrate-raft/blob/milestone-1/LICENSE-GPL3 | MIT | 
| 0b. | Documentation | <ul><li>[x] </li></ul> | Inline | Ok. | 
| 0c. | Testing and Testing Guide | <ul><li>[x] </li></ul> | - | Talked with team about implementing a more thorough testing readme for next milestone. |
| 0d. | Docker | <ul><li>[x] </li></ul> | https://github.com/bright/substrate-raft/tree/milestone-1/docker | Builds and executes successfully. |
| **1** | Update Substrate | <ul><li>[x] </li></ul> |  | Ok. |
| **2** | Update Substrate client | <ul><li>[x] </li></ul> |  | Ok. |
| **3** | Integration test |  <ul><li>[x] </li></ul> |  | Ok. |

# General Notes

## Eval V2

Had a nice call with the team and was able to solve the issues. The Docker image now builds successfully:

```rust
Building parity/substrate:latest docker image, hang on!
[+] Building 2041.1s (18/18) FINISHED                                                                                                                         
 => [internal] load build definition from substrate_builder.Dockerfile                                                                                   0.1s
 => => transferring dockerfile: 1.60kB                                                                                                                   0.0s
 => [internal] load .dockerignore                                                                                                                        0.1s
 => => transferring context: 99B                                                                                                                         0.0s
 => [internal] load metadata for docker.io/library/ubuntu:20.04                                                                                          1.3s
 => [internal] load metadata for docker.io/paritytech/ci-linux:production                                                                                1.2s
 => [stage-1 1/8] FROM docker.io/library/ubuntu:20.04@sha256:db8bf6f4fb351aa7a26e27ba2686cf35a6a409f65603e59d4c203e58387dc6b3                            6.4s
 => => resolve docker.io/library/ubuntu:20.04@sha256:db8bf6f4fb351aa7a26e27ba2686cf35a6a409f65603e59d4c203e58387dc6b3                                    0.0s
 => => sha256:db8bf6f4fb351aa7a26e27ba2686cf35a6a409f65603e59d4c203e58387dc6b3 1.13kB / 1.13kB                                                           0.0s
 => => sha256:b795f8e0caaaacad9859a9a38fe1c78154f8301fdaf0872eaf1520d66d9c0b98 424B / 424B                                                               0.0s
 => => sha256:88bd6891718934e63638d9ca0ecee018e69b638270fe04990a310e5c78ab4a92 2.30kB / 2.30kB                                                           0.0s
 => => sha256:ca1778b6935686ad781c27472c4668fc61ec3aeb85494f72deb1921892b9d39e 27.50MB / 27.50MB                                                         5.0s
 => => extracting sha256:ca1778b6935686ad781c27472c4668fc61ec3aeb85494f72deb1921892b9d39e                                                                1.0s
 => [internal] load build context                                                                                                                        2.6s
 => => transferring context: 182.97MB                                                                                                                    2.4s
 => [builder 1/4] FROM docker.io/paritytech/ci-linux:production@sha256:ed30e3d0edea7696f8af4d1159d201a4000eda0614c0d0a89600f75727b9579f                 36.1s
 => => resolve docker.io/paritytech/ci-linux:production@sha256:ed30e3d0edea7696f8af4d1159d201a4000eda0614c0d0a89600f75727b9579f                          0.0s
 => => sha256:ed30e3d0edea7696f8af4d1159d201a4000eda0614c0d0a89600f75727b9579f 761B / 761B                                                               0.0s
 => => sha256:758ff4f342daf49b5cdfecd645851512acfc4745fac7f9048c1bfc3f8666e6a4 9.77kB / 9.77kB                                                           0.0s
 => => sha256:26c5c85e47da3022f1bdb9a112103646c5c29517d757e95426f16e4bd9533405 31.42MB / 31.42MB                                                         1.9s
 => => sha256:b1ead25465c50d778ffb1ec21577c1fa1750b9d877cc77b58d20f05ed13994d4 360.37MB / 360.37MB                                                       9.1s
 => => sha256:d0a7c29b4117ccfd9f54117d5a0c7ef87ee8ac69486b970db5549e781da6f697 573.64MB / 573.64MB                                                      15.1s
 => => extracting sha256:26c5c85e47da3022f1bdb9a112103646c5c29517d757e95426f16e4bd9533405                                                                1.4s
 => => extracting sha256:d0a7c29b4117ccfd9f54117d5a0c7ef87ee8ac69486b970db5549e781da6f697                                                               13.0s
 => => extracting sha256:b1ead25465c50d778ffb1ec21577c1fa1750b9d877cc77b58d20f05ed13994d4                                                                7.0s
 => [stage-1 2/8] RUN apt-get update                                                                                                                    12.3s
 => [stage-1 3/8] RUN apt-get install -y openssl                                                                                                        14.1s
 => [builder 2/4] WORKDIR /substrate                                                                                                                     9.6s
 => [builder 3/4] COPY . /substrate                                                                                                                      1.5s
 => [builder 4/4] RUN cargo build --locked --release                                                                                                  1987.3s
 => [stage-1 4/8] COPY --from=builder /substrate/target/release/substrate /usr/local/bin                                                                 0.4s
 => [stage-1 5/8] COPY --from=builder /substrate/target/release/subkey /usr/local/bin                                                                    0.1s
 => [stage-1 6/8] COPY --from=builder /substrate/target/release/node-template /usr/local/bin                                                             0.3s
 => [stage-1 7/8] COPY --from=builder /substrate/target/release/chain-spec-builder /usr/local/bin                                                        0.1s
 => [stage-1 8/8] RUN useradd -m -u 1000 -U -s /bin/sh -d /substrate substrate &&  mkdir -p /data /substrate/.local/share/substrate &&  chown -R substr  0.4s
 => exporting to image                                                                                                                                   0.8s
 => => exporting layers                                                                                                                                  0.8s
 => => writing image sha256:421c616c09daccc5052038a070874be607e0d1a4258940197e7c0b033ee4eb51                                                             0.0s
 => => naming to docker.io/parity/substrate:latest                                                                                                       0.0s

real    34m18.632s
user    0m6.149s
sys     0m3.244s
Image is ready
parity/substrate   latest    421c616c09da   3 seconds ago   318MB
parity/substrate   v3.0.0    421c616c09da   3 seconds ago   318MB
~/substrate-raft
```

`docker-compose up` works to spin up all test validator nodes and I can watch the leader-follower model in action. This way multiple nodes can be run per a single validator. The nodes correctly pre-seal blocks for proposals.
```rust
validator-alice-1_1  | 2023-04-20 19:22:55.852  INFO main sc_cli::runner: Substrate Node    
validator-alice-1_1  | 2023-04-20 19:22:55.852  INFO main sc_cli::runner: ✌️  version 3.0.0-dev-1287cf90025    
validator-alice-1_1  | 2023-04-20 19:22:55.852  INFO main sc_cli::runner: ❤️  by Parity Technologies <admin@parity.io>, 2017-2023    
validator-alice-1_1  | 2023-04-20 19:22:55.852  INFO main sc_cli::runner: 📋 Chain specification: Local Testnet    
validator-alice-1_1  | 2023-04-20 19:22:55.852  INFO main sc_cli::runner: 🏷  Node name: Alice    
validator-alice-1_1  | 2023-04-20 19:22:55.852  INFO main sc_cli::runner: 👤 Role: AUTHORITY    
validator-alice-1_1  | 2023-04-20 19:22:55.852  INFO main sc_cli::runner: 💾 Database: RocksDb at /tmp/alice-1/chains/local_testnet/db/full    
validator-alice-1_1  | 2023-04-20 19:22:55.852  INFO main sc_cli::runner: ⛓  Native runtime: node-268 (substrate-node-0.tx2.au10)    
validator-alice-2_1  | 2023-04-20 19:22:55.904  INFO main sc_cli::runner: Substrate Node    
validator-alice-2_1  | 2023-04-20 19:22:55.904  INFO main sc_cli::runner: ✌️  version 3.0.0-dev-1287cf90025    
validator-alice-2_1  | 2023-04-20 19:22:55.904  INFO main sc_cli::runner: ❤️  by Parity Technologies <admin@parity.io>, 2017-2023    
validator-alice-2_1  | 2023-04-20 19:22:55.904  INFO main sc_cli::runner: 📋 Chain specification: Local Testnet    
validator-alice-2_1  | 2023-04-20 19:22:55.904  INFO main sc_cli::runner: 🏷  Node name: Alice    
validator-alice-2_1  | 2023-04-20 19:22:55.904  INFO main sc_cli::runner: 👤 Role: AUTHORITY    
validator-alice-2_1  | 2023-04-20 19:22:55.904  INFO main sc_cli::runner: 💾 Database: RocksDb at /tmp/alice-2/chains/local_testnet/db/full    
validator-alice-2_1  | 2023-04-20 19:22:55.904  INFO main sc_cli::runner: ⛓  Native runtime: node-268 (substrate-node-0.tx2.au10)    
validator-bob_1      | 2023-04-20 19:22:56 Substrate Node    
validator-bob_1      | 2023-04-20 19:22:56 ✌️  version 3.0.0-dev-1287cf90025    
validator-bob_1      | 2023-04-20 19:22:56 ❤️  by Parity Technologies <admin@parity.io>, 2017-2023    
validator-bob_1      | 2023-04-20 19:22:56 📋 Chain specification: Local Testnet    
validator-bob_1      | 2023-04-20 19:22:56 🏷  Node name: Bob    
validator-bob_1      | 2023-04-20 19:22:56 👤 Role: AUTHORITY    
validator-bob_1      | 2023-04-20 19:22:56 💾 Database: RocksDb at /tmp/bob/chains/local_testnet/db/full    
validator-bob_1      | 2023-04-20 19:22:56 ⛓  Native runtime: node-268 (substrate-node-0.tx2.au10)    
validator-eve_1      | 2023-04-20 19:22:55 Substrate Node    
validator-eve_1      | 2023-04-20 19:22:55 ✌️  version 3.0.0-dev-1287cf90025    
validator-eve_1      | 2023-04-20 19:22:55 ❤️  by Parity Technologies <admin@parity.io>, 2017-2023    
validator-eve_1      | 2023-04-20 19:22:55 📋 Chain specification: Local Testnet    
validator-eve_1      | 2023-04-20 19:22:55 🏷  Node name: Eve    
validator-eve_1      | 2023-04-20 19:22:55 👤 Role: AUTHORITY    
validator-eve_1      | 2023-04-20 19:22:55 💾 Database: RocksDb at /tmp/eve/chains/local_testnet/db/full    
validator-eve_1      | 2023-04-20 19:22:55 ⛓  Native runtime: node-268 (substrate-node-0.tx2.au10)    
validator-dave_1     | 2023-04-20 19:22:56 Substrate Node    
validator-dave_1     | 2023-04-20 19:22:56 ✌️  version 3.0.0-dev-1287cf90025    
validator-dave_1     | 2023-04-20 19:22:56 ❤️  by Parity Technologies <admin@parity.io>, 2017-2023    
validator-dave_1     | 2023-04-20 19:22:56 📋 Chain specification: Local Testnet    
validator-dave_1     | 2023-04-20 19:22:56 🏷  Node name: Dave    
validator-dave_1     | 2023-04-20 19:22:56 👤 Role: AUTHORITY    
validator-dave_1     | 2023-04-20 19:22:56 💾 Database: RocksDb at /tmp/dave/chains/local_testnet/db/full    
validator-dave_1     | 2023-04-20 19:22:56 ⛓  Native runtime: node-268 (substrate-node-0.tx2.au10)    
validator-charlie_1  | 2023-04-20 19:22:56 Substrate Node    
validator-charlie_1  | 2023-04-20 19:22:56 ✌️  version 3.0.0-dev-1287cf90025    
validator-charlie_1  | 2023-04-20 19:22:56 ❤️  by Parity Technologies <admin@parity.io>, 2017-2023    
validator-charlie_1  | 2023-04-20 19:22:56 📋 Chain specification: Local Testnet    
validator-charlie_1  | 2023-04-20 19:22:56 🏷  Node name: Charlie    
validator-charlie_1  | 2023-04-20 19:22:56 👤 Role: AUTHORITY    
validator-charlie_1  | 2023-04-20 19:22:56 💾 Database: RocksDb at /tmp/charlie/chains/local_testnet/db/full    
validator-charlie_1  | 2023-04-20 19:22:56 ⛓  Native runtime: node-268 (substrate-node-0.tx2.au10)    
validator-eve_1      | 2023-04-20 19:23:11 [0] 💸 generated 4 npos voters, 4 from validators and 0 nominators    
validator-alice-2_1  | 2023-04-20 19:23:11.574  INFO main runtime::staking: [0] 💸 generated 4 npos voters, 4 from validators and 0 nominators    
validator-bob_1      | 2023-04-20 19:23:11 [0] 💸 generated 4 npos voters, 4 from validators and 0 nominators    
validator-alice-1_1  | 2023-04-20 19:23:11.696  INFO main runtime::staking: [0] 💸 generated 4 npos voters, 4 from validators and 0 nominators    
validator-dave_1     | 2023-04-20 19:23:11 [0] 💸 generated 4 npos voters, 4 from validators and 0 nominators    
validator-charlie_1  | 2023-04-20 19:23:11 [0] 💸 generated 4 npos voters, 4 from validators and 0 nominators    
validator-eve_1      | 2023-04-20 19:23:29 🔨 Initializing Genesis block/state (state: 0x9615…09a3, header-hash: 0x3f1f…d8d3)    
validator-eve_1      | 2023-04-20 19:23:29 👴 Loading GRANDPA authority set from genesis on what appears to be first startup.    
validator-charlie_1  | 2023-04-20 19:23:30 🔨 Initializing Genesis block/state (state: 0x9615…09a3, header-hash: 0x3f1f…d8d3)    
validator-charlie_1  | 2023-04-20 19:23:30 👴 Loading GRANDPA authority set from genesis on what appears to be first startup.  
```

I'm able to modify the yaml [file](https://github.com/bright/substrate-raft/blob/milestone-1/docker-compose.yml) to switch the --permission-resolver tag on an off for different nodes. You can see watch the proposal voting phases, and see nodes skip voting due to lack of permission. Vote finalization and `I'm online` messages work properly. Team has seen no incorrect slashing so far in testing.
```rust
validator-eve_1      | 2023-04-20 19:38:45 🎁 Prepared block for proposing at 299 (0 ms) [hash: 0x0e52ad6665dd660f9d89e35873d4d2013e1cc51b7b820b0ac48681a333aea995; parent_hash: 0x0a1d…326b; extrinsics (1): [0xb11d…427b]]    
validator-eve_1      | 2023-04-20 19:38:45 🔖 Pre-sealed block for proposal at 299. Hash now 0x9539758e67d6741db4e73d88245ae34685b19381ccb677e76a39514c85b24fa2, previously 0x0e52ad6665dd660f9d89e35873d4d2013e1cc51b7b820b0ac48681a333aea995.    
validator-eve_1      | 2023-04-20 19:38:45 ✨ Imported #299 (0x9539…4fa2)    
validator-alice-2_1  | 2023-04-20 19:38:45.001 DEBUG tokio-runtime-worker slots: Skipping proposal slot due to lack of permission.  
```

## V1
Running `cargo test` currently fails. Building with Docker file also gives the same error:

```rust
Compiling sp-state-machine v0.12.0 (/home/ubuntu/substrate-raft/primitives/state-machine)
   Compiling frame-election-provider-solution-type v4.0.0-dev (/home/ubuntu/substrate-raft/frame/election-provider-support/solution-type)
error: `sp_trie::recorder::Recorder<H>::as_trie_recorder::{opaque#0}<'_>` does not live long enough
   --> primitives/state-machine/src/trie_backend_essence.rs:181:44
    |
181 |         let recorder = recorder.as_mut().map(|r| r as _);
    |                                                  ^

error: `sp_trie::recorder::Recorder<H>::as_trie_recorder::{opaque#0}<'_>` does not live long enough
   --> primitives/state-machine/src/trie_backend_essence.rs:219:44
    |
219 |         let recorder = recorder.as_mut().map(|r| r as _);
    |                                                  ^

error: could not compile `sp-state-machine` due to 2 previous errors
warning: build failed, waiting for other jobs to finish...
```
Stack Exchange suggests `sudo apt install clang` but that doesn't do the trick. I've tried on multiple machines with multiple different specs but `cargo test` still gets fails and Docker fails on Ubuntu and Mac while compiling the node:
```rust
#12 2717.3 <jemalloc>: MADV_DONTNEED does not work (memset will be used instead)
#12 2717.3 <jemalloc>: (This is the expected behaviour if you are running under QEMU)
#12 2745.2    Compiling snow v0.9.0
#12 2745.6 <jemalloc>: MADV_DONTNEED does not work (memset will be used instead)
#12 2745.6 <jemalloc>: (This is the expected behaviour if you are running under QEMU)
#12 2748.3    Compiling wasmtime-types v0.40.1
#12 2748.6 <jemalloc>: MADV_DONTNEED does not work (memset will be used instead)
#12 2748.6 <jemalloc>: (This is the expected behaviour if you are running under QEMU)
#12 2756.7 <jemalloc>: MADV_DONTNEED does not work (memset will be used instead)
#12 2756.7 <jemalloc>: (This is the expected behaviour if you are running under QEMU)
#12 2759.9    Compiling wasmtime-jit-debug v0.40.1
#12 2760.2 <jemalloc>: MADV_DONTNEED does not work (memset will be used instead)
#12 2760.2 <jemalloc>: (This is the expected behaviour if you are running under QEMU)
#12 2763.3 <jemalloc>: MADV_DONTNEED does not work (memset will be used instead)
#12 2763.3 <jemalloc>: (This is the expected behaviour if you are running under QEMU)
#12 2766.6 <jemalloc>: MADV_DONTNEED does not work (memset will be used instead)
#12 2766.6 <jemalloc>: (This is the expected behaviour if you are running under QEMU)
#12 2816.6 <jemalloc>: MADV_DONTNEED does not work (memset will be used instead)
#12 2816.6 <jemalloc>: (This is the expected behaviour if you are running under QEMU)
#12 2879.7 Killed
------
executor failed running [/bin/sh -c cargo build --locked --release]: exit code: 137
```
There is also one warning about dead code:
```rust
warning: associated function `project_ref` is never used
  --> client/telemetry/src/transport.rs:80:1
   |
80 | #[pin_project::pin_project]
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: `#[warn(dead_code)]` on by default

warning: `sc-telemetry` (lib test) generated 1 warning (1 duplicate)
   Compiling pallet-balances v4.0.0-dev (/home/ubuntu/substrate-raft/frame/balances)
warning: `sc-telemetry` (lib) generated 1 warning
```
