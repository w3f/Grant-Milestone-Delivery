# Evaluation

- **Status:** Accepted 
- **Application Link:** https://github.com/w3f/Grants-Program/blob/master/applications/Fennel_Protocol.md
* **Milestone:** 2
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/fennelLabs/Fennel-Protocol/blob/main/LICENSE), [Fennel-lib](https://github.com/fennelLabs/fennel-lib/blob/master/LICENSE) | Fennel lib has no license file **14.03.22:** License file was added |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [wiki](https://github.com/fennelLabs/Fennel-Protocol/wiki), [rust docs](https://fennellabs.com/Fennel-Protocol/doc/fennel_protocol_runtime/index.html), [rust docs fennel lib](https://fennellabs.com/fennel-lib/fennel_lib/index.html ) | According to the contract |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [Testing-Milestone-2](https://github.com/fennelLabs/Fennel-Protocol/wiki/Testing-Milestone-2) | Testing guide, but I'm unable to run the test for Fennel lib, see below  |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/fennelLabs/fennel-lib/blob/master/Dockerfile) | According to the contract |
| 0e. | Article | <ul><li>[x] </li></ul> | [Article](https://fennellabs.com/FennelBlog/Milestone-Two/) | Not very long, but according to the contract |
| 1. | Keypair Creation | <ul><li>[x] </li></ul> | [mod.rs](https://github.com/fennelLabs/fennel-lib/blob/master/src/rsa_tools/mod.rs) | Works, but needs to be compiled with a rust nightly version. |
| 2. | Public Key Transmission | <ul><li>[x] </li></ul> | [keystore](https://github.com/fennelLabs/Fennel-Protocol/blob/6a93b9abab9f643b001756597323f4882012714b/pallets/keystore/src/lib.rs#L67) | Works |
| 3. | Public Key Retrieval | <ul><li>[x] </li></ul> | [mod.rs](https://github.com/fennelLabs/fennel-lib/blob/master/src/fennel/mod.rs#L153) | Works |
| 4. | Encrypted Communciation Channel Negotiation | <ul><li>[x] </li></ul> | [mod.rs](https://github.com/fennelLabs/fennel-lib/blob/master/src/dh_tools/mod.rs), [lib.rs](https://github.com/fennelLabs/Fennel-Protocol/blob/6a93b9abab9f643b001756597323f4882012714b/pallets/keystore/src/lib.rs#L95) | Works, but needs to be compiled with a rust nightly version. |

## General Notes

**14.03.22:**

Link https://fennellabs.com/fennel-lib/fennel_lib/index.html was fixed and license file was added. I also was able to compile it, but got a few warnings:


<pre><font color="#A2734C"><b>warning</b></font><b>: type alias is never used: `RawIdentity`</b>
  <font color="#2A7BDE"><b>--&gt; </b></font>src/fennel/mod.rs:14:1
   <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>14</b></font> <font color="#2A7BDE"><b>| </b></font>type RawIdentity = [u8; 4];
   <font color="#2A7BDE"><b>| </b></font><font color="#A2734C"><b>^^^^^^^^^^^^^^^^^^^^^^^^^^^</b></font>
   <font color="#2A7BDE"><b>|</b></font>
   <font color="#2A7BDE"><b>= </b></font><b>note</b>: `#[warn(dead_code)]` on by default

<font color="#A2734C"><b>warning</b></font><b>: field is never read: `identity_db`</b>
  <font color="#2A7BDE"><b>--&gt; </b></font>src/fennel/mod.rs:40:5
   <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>40</b></font> <font color="#2A7BDE"><b>| </b></font>    identity_db: Arc&lt;Mutex&lt;DB&gt;&gt;,
   <font color="#2A7BDE"><b>| </b></font>    <font color="#A2734C"><b>^^^^^^^^^^^^^^^^^^^^^^^^^^^</b></font>

<font color="#A2734C"><b>warning</b></font><b>: field is never read: `messages_db`</b>
  <font color="#2A7BDE"><b>--&gt; </b></font>src/fennel/mod.rs:41:5
   <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>41</b></font> <font color="#2A7BDE"><b>| </b></font>    messages_db: Arc&lt;Mutex&lt;DB&gt;&gt;,
   <font color="#2A7BDE"><b>| </b></font>    <font color="#A2734C"><b>^^^^^^^^^^^^^^^^^^^^^^^^^^^</b></font>

<font color="#A2734C"><b>warning</b></font><b>:</b> `fennel-lib` (lib) generated 3 warnings
<font color="#A2734C"><b>warning</b></font><b>:</b> `fennel-lib` (lib test) generated 3 warnings (3 duplicates)
</pre>


**11.03.22:**

- I can not open the following link: https://fennellabs.com/fennel-lib/fennel_lib/index.html 
- Fennel lib has no license file

**fennel-lib Cargo Test Error:**

```
error: failed to run custom build command for `openssl-sys v0.9.72`
Caused by:
  process didn't exit successfully: `/Users/davidhawig/source/evaluations/fennel-lib/target/debug/build/openssl-sys-a3646713ee13d9c1/build-script-main` (exit status: 101)
  --- stdout
  cargo:rustc-cfg=const_fn
  cargo:rerun-if-env-changed=AARCH64_APPLE_DARWIN_OPENSSL_LIB_DIR
  AARCH64_APPLE_DARWIN_OPENSSL_LIB_DIR unset
  cargo:rerun-if-env-changed=OPENSSL_LIB_DIR
  OPENSSL_LIB_DIR unset
  cargo:rerun-if-env-changed=AARCH64_APPLE_DARWIN_OPENSSL_INCLUDE_DIR
  AARCH64_APPLE_DARWIN_OPENSSL_INCLUDE_DIR unset
  cargo:rerun-if-env-changed=OPENSSL_INCLUDE_DIR
  OPENSSL_INCLUDE_DIR unset
  cargo:rerun-if-env-changed=AARCH64_APPLE_DARWIN_OPENSSL_DIR
  AARCH64_APPLE_DARWIN_OPENSSL_DIR unset
  cargo:rerun-if-env-changed=OPENSSL_DIR
  OPENSSL_DIR unset
  cargo:rerun-if-env-changed=OPENSSL_NO_PKG_CONFIG
  cargo:rerun-if-env-changed=PKG_CONFIG_aarch64-apple-darwin
  cargo:rerun-if-env-changed=PKG_CONFIG_aarch64_apple_darwin
  cargo:rerun-if-env-changed=HOST_PKG_CONFIG
  cargo:rerun-if-env-changed=PKG_CONFIG
  cargo:rerun-if-env-changed=OPENSSL_STATIC
  cargo:rerun-if-env-changed=OPENSSL_DYNAMIC
  cargo:rerun-if-env-changed=PKG_CONFIG_ALL_STATIC
  cargo:rerun-if-env-changed=PKG_CONFIG_ALL_DYNAMIC
  cargo:rerun-if-env-changed=PKG_CONFIG_PATH_aarch64-apple-darwin
  cargo:rerun-if-env-changed=PKG_CONFIG_PATH_aarch64_apple_darwin
  cargo:rerun-if-env-changed=HOST_PKG_CONFIG_PATH
  cargo:rerun-if-env-changed=PKG_CONFIG_PATH
  cargo:rerun-if-env-changed=PKG_CONFIG_LIBDIR_aarch64-apple-darwin
  cargo:rerun-if-env-changed=PKG_CONFIG_LIBDIR_aarch64_apple_darwin
  cargo:rerun-if-env-changed=HOST_PKG_CONFIG_LIBDIR
  cargo:rerun-if-env-changed=PKG_CONFIG_LIBDIR
  cargo:rerun-if-env-changed=PKG_CONFIG_SYSROOT_DIR_aarch64-apple-darwin
  cargo:rerun-if-env-changed=PKG_CONFIG_SYSROOT_DIR_aarch64_apple_darwin
  cargo:rerun-if-env-changed=HOST_PKG_CONFIG_SYSROOT_DIR
  cargo:rerun-if-env-changed=PKG_CONFIG_SYSROOT_DIR
  run pkg_config fail: "Could not run `\"pkg-config\" \"--libs\" \"--cflags\" \"openssl\"`\nThe pkg-config command could not be found.\n\nMost likely, you need to install a pkg-config package for your OS.\nTry `brew install pkg-config` if you have Homebrew.\n\nIf you've already installed it, ensure the pkg-config command is one of the\ndirectories in the PATH environment variable.\n\nIf you did not expect this build to link to a pre-installed system library,\nthen check documentation of the openssl-sys crate for an option to\nbuild the library from source, or disable features or dependencies\nthat require pkg-config."

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

  $HOST = aarch64-apple-darwin
  $TARGET = aarch64-apple-darwin
  openssl-sys = 0.9.72

  ', /Users/davidhawig/.cargo/registry/src/github.com-1ecc6299db9ec823/openssl-sys-0.9.72/build/find_normal.rs:180:5
  note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
warning: build failed, waiting for other jobs to finish...
error: build failed
```