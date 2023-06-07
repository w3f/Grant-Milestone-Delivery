# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/High_availability_validator_setup.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | License | <ul><li>[x] </li></ul> | https://github.com/bright/substrate-raft/blob/milestone-1/LICENSE-GPL3 | GPLv3, Unlicense | 
| 0b. | Documentation | <ul><li>[x] </li></ul> | Inline |  | 
| 0c. | Testing and Testing Guide | <ul><li>[x] </li></ul> | - |  |
| 0d. | Docker | <ul><li>[x] </li></ul> | https://github.com/bright/substrate-raft/tree/milestone-1/docker |  |
| **1** | Basic Service | <ul><li>[x] </li></ul> | [Authority-service](https://github.com/bright/substrate-raft-setup/blob/milestone-2/bin/authority-service) code |  |
| **2** | Getting permission from microservice | <ul><li>[x] </li></ul> | [Repository](https://github.com/bright/substrate-raft-setup/blob/milestone-2) for the custom node, and the [implementation](https://github.com/bright/substrate-raft-setup/blob/milestone-2/permission_resolver/src/lib.rs) for the PermissionResolver |  |
| **3** | Allow as optional | <ul><li>[x] </li></ul> | Code for the [cli](https://github.com/bright/substrate-raft-setup/blob/milestone-2/node/src/cli.rs) |  |
| **4** | Clean up substrate code | <ul><li>[x] </li></ul> | Changes in [code](https://github.com/bright/substrate-raft/commit/f4bab8f2a461271ab52ec6343934f6b84623b6c8) |  |
| **5** | Integration test | <ul><li>[x] </li></ul> |  |  |

# General Notes

## Tests

6 tests pass successfully in `authority-service`:
```rust
running 6 tests
test config::test::next_test ... ok
test config::test::load_test ... ok
test handler::test::test_authorize_round ... ok
test handler::test::test_authorize ... ok
test handler::test::test_authorize_fix_order ... ok
test handler::test::test_authorize_session ... ok

test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s
```

Running on Ubuntu 20.04

Running `cargo test` in `substrate-raft-setup` fails with:
```rust
error: failed to run custom build command for `openssl-sys v0.9.80`

Caused by:
  process didn't exit successfully: `/home/ubuntu/substrate-raft-setup/target/debug/build/openssl-sys-d554517e5179ead6/build-script-main` (exit status: 101)
  --- stdout
  cargo:rustc-cfg=const_fn
  cargo:rustc-cfg=openssl
  cargo:rerun-if-env-changed=X86_64_UNKNOWN_LINUX_GNU_OPENSSL_LIB_DIR
  X86_64_UNKNOWN_LINUX_GNU_OPENSSL_LIB_DIR unset
  cargo:rerun-if-env-changed=OPENSSL_LIB_DIR
  OPENSSL_LIB_DIR unset
  cargo:rerun-if-env-changed=X86_64_UNKNOWN_LINUX_GNU_OPENSSL_INCLUDE_DIR
  X86_64_UNKNOWN_LINUX_GNU_OPENSSL_INCLUDE_DIR unset
  cargo:rerun-if-env-changed=OPENSSL_INCLUDE_DIR
  OPENSSL_INCLUDE_DIR unset
  cargo:rerun-if-env-changed=X86_64_UNKNOWN_LINUX_GNU_OPENSSL_DIR
  X86_64_UNKNOWN_LINUX_GNU_OPENSSL_DIR unset
  cargo:rerun-if-env-changed=OPENSSL_DIR
  OPENSSL_DIR unset
  cargo:rerun-if-env-changed=OPENSSL_NO_PKG_CONFIG
  cargo:rerun-if-env-changed=PKG_CONFIG_x86_64-unknown-linux-gnu
  cargo:rerun-if-env-changed=PKG_CONFIG_x86_64_unknown_linux_gnu
  cargo:rerun-if-env-changed=HOST_PKG_CONFIG
  cargo:rerun-if-env-changed=PKG_CONFIG
  cargo:rerun-if-env-changed=OPENSSL_STATIC
  cargo:rerun-if-env-changed=OPENSSL_DYNAMIC
  cargo:rerun-if-env-changed=PKG_CONFIG_ALL_STATIC
  cargo:rerun-if-env-changed=PKG_CONFIG_ALL_DYNAMIC
  cargo:rerun-if-env-changed=PKG_CONFIG_PATH_x86_64-unknown-linux-gnu
  cargo:rerun-if-env-changed=PKG_CONFIG_PATH_x86_64_unknown_linux_gnu
  cargo:rerun-if-env-changed=HOST_PKG_CONFIG_PATH
  cargo:rerun-if-env-changed=PKG_CONFIG_PATH
  cargo:rerun-if-env-changed=PKG_CONFIG_LIBDIR_x86_64-unknown-linux-gnu
  cargo:rerun-if-env-changed=PKG_CONFIG_LIBDIR_x86_64_unknown_linux_gnu
  cargo:rerun-if-env-changed=HOST_PKG_CONFIG_LIBDIR
  cargo:rerun-if-env-changed=PKG_CONFIG_LIBDIR
  cargo:rerun-if-env-changed=PKG_CONFIG_SYSROOT_DIR_x86_64-unknown-linux-gnu
  cargo:rerun-if-env-changed=PKG_CONFIG_SYSROOT_DIR_x86_64_unknown_linux_gnu
  cargo:rerun-if-env-changed=HOST_PKG_CONFIG_SYSROOT_DIR
  cargo:rerun-if-env-changed=PKG_CONFIG_SYSROOT_DIR
  run pkg_config fail: "Could not run `PKG_CONFIG_ALLOW_SYSTEM_CFLAGS=\"1\" \"pkg-config\" \"--libs\" \"--cflags\" \"openssl\"`\nThe pkg-config command could not be found.\n\nMost likely, you need to install a pkg-config package for your OS.\nTry `apt install pkg-config`, or `yum install pkg-config`,\nor `pkg install pkg-config` depending on your distribution.\n\nIf you've already installed it, ensure the pkg-config command is one of the\ndirectories in the PATH environment variable.\n\nIf you did not expect this build to link to a pre-installed system library,\nthen check documentation of the openssl-sys crate for an option to\nbuild the library from source, or disable features or dependencies\nthat require pkg-config."

  --- stderr
  thread 'main' panicked at '

  Could not find directory of OpenSSL installation, and this `-sys` crate cannot
  proceed without this knowledge. If OpenSSL is installed and this crate had
  trouble finding it,  you can set the `OPENSSL_DIR` environment variable for the
  compilation process.

  Make sure you also have the development packages of openssl installed.
  For example, `libssl-dev` on Ubuntu or `openssl-devel` on Fedora.

  If you're in a situation where you think the directory *should* be found
  automatically, please open a bug at https://github.com/sfackler/rust-openssl
  and include information about your system as well as this message.

  $HOST = x86_64-unknown-linux-gnu
  $TARGET = x86_64-unknown-linux-gnu
  openssl-sys = 0.9.80


  It looks like you're compiling on Linux and also targeting Linux. Currently this
  requires the `pkg-config` utility to find OpenSSL but unfortunately `pkg-config`
  could not be found. If you have OpenSSL installed you can likely fix this by
  installing `pkg-config`.

  ', /home/ubuntu/.cargo/registry/src/index.crates.io-6f17d22bba15001f/openssl-sys-0.9.80/build/find_normal.rs:191:5
  note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
  ```
  I tried installing OpenSSL tools with `sudo apt-get install libssl-dev` to no avail. Also tried `sudo apt install pkg-config`. That works to fix pkg-config error but then it displays an old Rust issue that has been fixed since this toolchain was released:
```rust
error: `sp_trie::recorder::Recorder<H>::as_trie_recorder::{opaque#0}<'_>` does not live long enough
   --> /home/ubuntu/.cargo/git/checkouts/substrate-raft-e8c7ccdd76a0db97/f4bab8f/primitives/state-machine/src/trie_backend_essence.rs:181:44
    |
181 |         let recorder = recorder.as_mut().map(|r| r as _);
    |                                                  ^

error: `sp_trie::recorder::Recorder<H>::as_trie_recorder::{opaque#0}<'_>` does not live long enough
   --> /home/ubuntu/.cargo/git/checkouts/substrate-raft-e8c7ccdd76a0db97/f4bab8f/primitives/state-machine/src/trie_backend_essence.rs:219:44
    |
219 |         let recorder = recorder.as_mut().map(|r| r as _);
    |                                                  ^

error: could not compile `sp-state-machine` due to 2 previous errors
```

Docker also fails to run:
  ```rust
  ~/substrate-raft-setup ~/substrate-raft-setup
Building bright/substrate-raft-setup:latest docker image, hang on!
[+] Building 3.7s (9/14)
 => [internal] load build definition from Dockerfile                                                                  0.0s
 => => transferring dockerfile: 1.53kB                                                                                0.0s
 => [internal] load .dockerignore                                                                                     0.0s
 => => transferring context: 2B                                                                                       0.0s
 => [internal] load metadata for docker.io/paritytech/ci-linux:1c0fde6a-20220811                                      1.5s
 => [internal] load metadata for docker.io/library/ubuntu:20.04                                                       1.3s
 => CANCELED [builder 1/4] FROM docker.io/paritytech/ci-linux:1c0fde6a-20220811@sha256:4e8c072ea12bc17d99cb531adb58d  2.2s
 => => resolve docker.io/paritytech/ci-linux:1c0fde6a-20220811@sha256:4e8c072ea12bc17d99cb531adb58dea5a4c7d4880a8a86  0.0s
 => => sha256:a4115f36e7e5073366d03bde65ca2cb5e4c8e443c1b1f316b6aa4179fab42000 1.05MB / 527.84MB                      2.2s
 => => sha256:660ac983e23e1bd2d0e97d5d2e468994e007da287a2e395ca13e53b8571e5283 2.10MB / 337.09MB                      2.2s
 => => sha256:4e8c072ea12bc17d99cb531adb58dea5a4c7d4880a8a86525052d24d1454e89e 761B / 761B                            0.0s
 => => sha256:a63a944a77f9ebe6cbf1d5100a7c9c07bb3fd3181d298bb166c8a1ce75b81aec 9.38kB / 9.38kB                        0.0s
 => => sha256:751ef25978b2971e15496369695ba51ed5b1b9aaca7e37b18a173d754d1ca820 8.39MB / 27.14MB                       2.2s
 => [internal] load build context                                                                                     0.6s
 => => transferring context: 50.35MB                                                                                  0.5s
 => [stage-1 1/5] FROM docker.io/library/ubuntu:20.04@sha256:db8bf6f4fb351aa7a26e27ba2686cf35a6a409f65603e59d4c203e5  0.0s
 => CACHED [stage-1 2/5] RUN apt-get update                                                                           0.0s
 => ERROR [stage-1 3/5] RUN apt-get install -y openssl                                                                2.2s
------
 > [stage-1 3/5] RUN apt-get install -y openssl:
#7 0.363 Reading package lists...
#7 0.953 Building dependency tree...
#7 1.035 Reading state information...
#7 1.119 The following additional packages will be installed:
#7 1.119   libssl1.1
#7 1.119 Suggested packages:
#7 1.119   ca-certificates
#7 1.153 The following NEW packages will be installed:
#7 1.153   libssl1.1 openssl
#7 1.635 0 upgraded, 2 newly installed, 0 to remove and 0 not upgraded.
#7 1.635 Need to get 1757 kB of archives.
#7 1.635 After this operation, 4950 kB of additional disk space will be used.
#7 1.635 Ign:1 http://ports.ubuntu.com/ubuntu-ports focal-updates/main arm64 libssl1.1 arm64 1.1.1f-1ubuntu2.17
#7 1.781 Ign:2 http://ports.ubuntu.com/ubuntu-ports focal-updates/main arm64 openssl arm64 1.1.1f-1ubuntu2.17
#7 1.946 Err:1 http://ports.ubuntu.com/ubuntu-ports focal-updates/main arm64 libssl1.1 arm64 1.1.1f-1ubuntu2.17
#7 1.946   404  Not Found [IP: 185.125.190.39 80]
#7 2.106 Err:2 http://ports.ubuntu.com/ubuntu-ports focal-updates/main arm64 openssl arm64 1.1.1f-1ubuntu2.17
#7 2.106   404  Not Found [IP: 185.125.190.39 80]
#7 2.117 E: Failed to fetch http://ports.ubuntu.com/ubuntu-ports/pool/main/o/openssl/libssl1.1_1.1.1f-1ubuntu2.17_arm64.deb  404  Not Found [IP: 185.125.190.39 80]
#7 2.117 E: Failed to fetch http://ports.ubuntu.com/ubuntu-ports/pool/main/o/openssl/openssl_1.1.1f-1ubuntu2.17_arm64.deb  404  Not Found [IP: 185.125.190.39 80]
#7 2.117 E: Unable to fetch some archives, maybe run apt-get update or try with --fix-missing?
------
process "/bin/sh -c apt-get install -y openssl" did not complete successfully: exit code: 100
```
## V2

Tried Docker on Ubuntu and fails with this:
```rust
error: failed to run custom build command for `node-template-runtime v4.0.0-dev (/node-template/runtime)`
#0 563.4 
#0 563.4 Caused by:
#0 563.4   process didn't exit successfully: `/node-template/target/release/build/node-template-runtime-37c0b72b2eac5a32/build-script-build` (exit status: 1)
#0 563.4   --- stderr
#0 563.4   Rust WASM toolchain not installed, please install it!
#0 563.4 
#0 563.4   Further error information:
#0 563.4   ------------------------------------------------------------
#0 563.4      Compiling wasm-test v1.0.0 (/tmp/.tmpyZyoTz)
#0 563.4   error[E0463]: can't find crate for `std`
#0 563.4     |
#0 563.4     = note: the `wasm32-unknown-unknown` target may not be installed
#0 563.4     = help: consider downloading the target with `rustup target add wasm32-unknown-unknown`
#0 563.4     = help: consider building the standard library from source with `cargo build -Zbuild-std`
#0 563.4 
#0 563.4   error: requires `sized` lang_item
#0 563.4 
#0 563.4   For more information about this error, try `rustc --explain E0463`.
#0 563.4   error: could not compile `wasm-test` due to 2 previous errors
#0 563.4   ------------------------------------------------------------
#0 563.4 
#0 563.4 warning: build failed, waiting for other jobs to finish...
------
Dockerfile:9
--------------------
   7 |     WORKDIR /node-template
   8 |     COPY . .
   9 | >>> RUN cargo build --locked --release
  10 |     
  11 |     # This is the 2nd stage: a very small image where we copy the binary."
--------------------
ERROR: failed to solve: process "/bin/sh -c cargo build --locked --release" did not complete successfully: exit code: 101
```

  **Linting:**: Cargo clippy produces the following warnings for `substrate-raft`:
```rust
warning: associated function `project_ref` is never used
  --> client/telemetry/src/transport.rs:80:1
   |
80 | #[pin_project::pin_project]
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: `#[warn(dead_code)]` on by default

warning: `sc-telemetry` (lib) generated 1 warning
```
