
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
