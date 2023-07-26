# Evaluation

- **Status:** In Progress
* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/openPayroll.md
- **Milestone:** 1
- **Kusama Identity:** [Fd1SvYZnE3dZ3mEaq5QG1HEWhzNrDyMPJ41C4fQqiMirtTP](https://sub.id/Fd1SvYZnE3dZ3mEaq5QG1HEWhzNrDyMPJ41C4fQqiMirtTP)
- **Previously successfully merged evaluation:** N/A

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | <div><div>Frontend: https://github.com/polkadrys/open-payroll-web/blob/main/LICENSE</div><div>Smart Contract: https://github.com/polkadrys/openPayroll/blob/main/LICENSE</div></div>  | Correct licenses |
| 0b.    | Documentation                                                | <div><div>Frontend: https://github.com/polkadrys/open-payroll-web/blob/main/README.md</div><div> Smart Contract: https://github.com/polkadrys/openPayroll/blob/main/README.md</div></div>  | Well documented |
| 0c.    | Testing and Testing Guide                                    | <div><div>Frontend: https://github.com/polkadrys/open-payroll-web/blob/main/e2e/README.md</div><div> Smart Contract: https://github.com/polkadrys/openPayroll/blob/main/README.md#run-the-tests</div></div>  | Unit and end-to-end tests provided. Unit tests are not compiling and there are some failing cases in the end-to-end tests. Logs below. |
| 0d.    | Docker                                                       | <div><div>Frontend: https://github.com/polkadrys/open-payroll-web/blob/main/Dockerfile</div><div> Smart Contract: https://github.com/polkadrys/openPayroll/blob/main/Dockerfile</div></div> | Docker image for frontend compiles and runs, but Docker image for contract fails to compile. Logs below. |
| 1.| Design frontend interface (Figma) | https://www.figma.com/file/FkHVzkM1dcn8rHkKjegYW0/OpenPayroll?type=design&node-id=0%3A1&mode=design&t=hQcmM0GOdGQsvPji-1 | The figma file on Empathy, Design, UI, Wireframes, Wireframes Mobile and Landing is provided. |
| 2. | Develop the interface based on the previous task result | https://github.com/polkadrys/open-payroll-web/tree/main | UI is delivered and is deployed. All expected deliverables are provided. |
| 3. | Develop the payroll smart contract | https://github.com/polkadrys/openPayroll/tree/main | Smart contract is present, it's well documented and covers a huge scope. There are some issues with building the contract with Docker. It compiles perfectly fine natively. Logs below. |
| 4. | Integrate the UI with the contracts | https://github.com/polkadrys/open-payroll-web/tree/main | Same deliverable as #2 |
| 5. | Quality Assurance | https://github.com/polkadrys/open-payroll-web/tree/main/e2e | It's a nice addition to have end-to-end tests, however I faced some difficulties running it. Screenshot below. |

## General Notes

In general, it's well documented, contains both unit and end-to-end tests and the app supports all the features that were promised in the application. However, contract doesn't build with Docker and there are some minor issues that can be easily addressed.

### End-to-end tests

It's not clear what is meant by:

> - Set up your wallet to provide a valid account. 

Is simply having Polkadot.js with wallet connected to the frontend enough? Or do we have to fund the account or do something else?

### Code suggestions

- One issue I would suggest to resolve is the usage of unsafe methods in the smart contract. It's not a blocker for the milestone, but it's better to avoid them in the future. In the smart contract calls, many of them contain unsafe `unwrap()` method which can lead to runtime errors. It can be refactored to throw an error instead of panicking. For example, in the `claim_payment` method, instead of [`unwrap()`](https://github.com/polkadrys/openPayroll/blob/main/src/lib.rs#L392C50-L392C56), you can use `ok_or` method to return an error.
- Move `Cargo.toml` from `contract/src` folder to root folder.

### Logs

<details>

<summary>Docker web</summary>

```bash
 => => extracting sha256:e591100acf5b50227ef74124d46d23adfe12d3c67f9cb5f55fc122693c23a160                                                                                   0.0s
 => [2/4] COPY . ./                                                                                                                                                         2.0s
 => [3/4] RUN npm install                                                                                                                                                  10.4s
 => [4/4] RUN npm run build                                                                                                                                                22.7s
 => exporting to image                                                                                                                                                      1.2s
 => => exporting layers                                                                                                                                                     1.2s
 => => writing image sha256:9a5bb7012b11a626a14221751a6b75d0bc2872a22d5c5f87f21b9928626aa5e5                                                                                0.0s 
 => => naming to docker.io/library/open-payroll-web:0.1.0     
```

</details>

<details>
<summary>Docker contract build</summary>

```bash
> docker run -v "$(pwd)/src:/src" open-payroll:0.1.0 cargo contract build --release
error[E0658]: use of unstable library feature 'once_cell'
#6 209.5    --> /usr/local/cargo/registry/src/github.com-1ecc6299db9ec823/subxt-signer-0.30.1/src/utils.rs:22:29
#6 209.5     |
#6 209.5 22  |                   static VAR: std::sync::OnceLock<$ty> = std::sync::OnceLock::new();
#6 209.5     |                               ^^^^^^^^^^^^^^^^^^^^^^^^
#6 209.5     |
#6 209.5    ::: /usr/local/cargo/registry/src/github.com-1ecc6299db9ec823/subxt-signer-0.30.1/src/crypto/secret_uri.rs:125:1
#6 209.5     |
#6 209.5 125 | / once_static! {
#6 209.5 126 | |     /// Interpret a phrase like:
#6 209.5 127 | |     ///
#6 209.5 128 | |     /// ```text
#6 209.5 ...   |
#6 209.5 151 | |     }
#6 209.5 152 | | }
#6 209.5     | |_- in this macro invocation
#6 209.5     |
#6 209.5     = note: see issue #74465 <https://github.com/rust-lang/rust/issues/74465> for more information
#6 209.5     = note: this error originates in the macro `once_static` (in Nightly builds, run with -Z macro-backtrace for more info)
#6 209.5 
#6 209.5 error[E0658]: use of unstable library feature 'once_cell'
#6 209.5    --> /usr/local/cargo/registry/src/github.com-1ecc6299db9ec823/subxt-signer-0.30.1/src/utils.rs:22:56
#6 209.5     |
#6 209.5 22  |                   static VAR: std::sync::OnceLock<$ty> = std::sync::OnceLock::new();
#6 209.5     |                                                          ^^^^^^^^^^^^^^^^^^^
#6 209.5     |
#6 209.5    ::: /usr/local/cargo/registry/src/github.com-1ecc6299db9ec823/subxt-signer-0.30.1/src/crypto/secret_uri.rs:125:1
#6 209.5     |
#6 209.5 125 | / once_static! {
#6 209.5 126 | |     /// Interpret a phrase like:
#6 209.5 127 | |     ///
#6 209.5 128 | |     /// ```text
#6 209.5 ...   |
#6 209.5 151 | |     }
#6 209.5 152 | | }
#6 209.5     | |_- in this macro invocation
#6 209.5     |
#6 209.5     = note: see issue #74465 <https://github.com/rust-lang/rust/issues/74465> for more information
#6 209.5     = note: this error originates in the macro `once_static` (in Nightly builds, run with -Z macro-backtrace for more info)
#6 209.5 
#6 209.5 error[E0658]: use of unstable library feature 'once_cell'
#6 209.5    --> /usr/local/cargo/registry/src/github.com-1ecc6299db9ec823/subxt-signer-0.30.1/src/utils.rs:36:29
#6 209.5     |
#6 209.5 36  |                   static VAR: std::sync::OnceLock<$ty> = std::sync::OnceLock::new();
#6 209.5     |                               ^^^^^^^^^^^^^^^^^^^^^^^^
#6 209.5     |
#6 209.5    ::: /usr/local/cargo/registry/src/github.com-1ecc6299db9ec823/subxt-signer-0.30.1/src/sr25519.rs:209:5
#6 209.5     |
#6 209.5 209 | /     once_static_cloned! {
#6 209.5 210 | |         /// Equivalent to `{DEV_PHRASE}//Alice`.
#6 209.5 211 | |         pub fn alice() -> Keypair {
#6 209.5 212 | |             Keypair::from_uri(&SecretUri::from_str("//Alice").unwrap()).unwrap()
#6 209.5 ...   |
#6 209.5 241 | |         }
#6 209.5 242 | |     }
#6 209.5     | |_____- in this macro invocation
#6 209.5     |
#6 209.5     = note: see issue #74465 <https://github.com/rust-lang/rust/issues/74465> for more information
#6 209.5     = note: this error originates in the macro `once_static_cloned` (in Nightly builds, run with -Z macro-backtrace for more info)
#6 209.5 
#6 209.5 error[E0658]: use of unstable library feature 'once_cell'
#6 209.5    --> /usr/local/cargo/registry/src/github.com-1ecc6299db9ec823/subxt-signer-0.30.1/src/utils.rs:36:56
#6 209.5     |
#6 209.5 36  |                   static VAR: std::sync::OnceLock<$ty> = std::sync::OnceLock::new();
#6 209.5     |                                                          ^^^^^^^^^^^^^^^^^^^
#6 209.5     |
#6 209.5    ::: /usr/local/cargo/registry/src/github.com-1ecc6299db9ec823/subxt-signer-0.30.1/src/sr25519.rs:209:5
#6 209.5     |
#6 209.5 209 | /     once_static_cloned! {
#6 209.5 210 | |         /// Equivalent to `{DEV_PHRASE}//Alice`.
#6 209.5 211 | |         pub fn alice() -> Keypair {
#6 209.5 212 | |             Keypair::from_uri(&SecretUri::from_str("//Alice").unwrap()).unwrap()
#6 209.5 ...   |
#6 209.5 241 | |         }
#6 209.5 242 | |     }
#6 209.5     | |_____- in this macro invocation

executor failed running [/bin/sh -c rustup component add rust-src     && cargo install --force --locked cargo-contract]: exit code: 101
```

</details>

<details>
<summary>Native contract build</summary>

```bash
> cargo contract build --release
Original wasm size: 90.6K, Optimized: 44.1K

The contract was built in RELEASE mode.

Your contract artifacts are ready. You can find them in:
/openPayroll/src/target/ink

  - open_payroll.contract (code + metadata)
  - open_payroll.wasm (the contract's code)
  - open_payroll.json (the contract's metadata)
```

</details>

<details>

<summary>Unit tests</summary>

```bash
> docker run -v "$(pwd)/src:/src" open-payroll:0.1.0
> cargo test
error[E0554]: `#![feature]` may not be used on the stable release channel
   --> /Users/dastan@enjin.io/.cargo/registry/src/index.crates.io-6f17d22bba15001f/anyhow-1.0.72/src/lib.rs:214:32
    |
214 | #![cfg_attr(backtrace, feature(error_generic_member_access, provide_any))]
    |                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^

error[E0554]: `#![feature]` may not be used on the stable release channel
   --> /Users/dastan@enjin.io/.cargo/registry/src/index.crates.io-6f17d22bba15001f/thiserror-1.0.43/src/lib.rs:239:34
    |
239 | #![cfg_attr(provide_any, feature(provide_any))]
    |                                  ^^^^^^^^^^^

error[E0554]: `#![feature]` may not be used on the stable release channel
   --> /Users/dastan@enjin.io/.cargo/registry/src/index.crates.io-6f17d22bba15001f/anyhow-1.0.72/src/lib.rs:214:61
    |
214 | #![cfg_attr(backtrace, feature(error_generic_member_access, provide_any))]
    |                                                             ^^^^^^^^^^^

For more information about this error, try `rustc --explain E0554`.
error: could not compile `thiserror` (lib) due to previous error
warning: build failed, waiting for other jobs to finish...
error: could not compile `anyhow` (lib) due to 2 previous errors
```

### Screenshots

<img width="1719" alt="Failing end-to-end" src="https://github.com/dastansam/Grant-Milestone-Delivery/assets/88332432/6b1013b9-1697-4771-86f5-fc725ccb83ae">

