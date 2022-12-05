# Evaluation

- **Status:** Approved
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/massbit_route.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** [M1](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/massbit_1_takahser.md)


| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0.a    | License                                                                           | <ul><li>[x] </li></ul> | [Massbit Chain - Apache 2.0 ](https://github.com/massbitprotocol/massbitchain/blob/main/LICENSE)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |       |
| 0.b    | Documentation                                                                     | <ul><li>[x] </li></ul> | [Massbit Components](https://docs.massbit.io/massbit-route-mbr/components), [Massbit Architecture](https://docs.massbit.io/massbit-route-mbr/architecture)                                                                                                                                                                                                                                                                                                                                                                                                                                                   |       |
| 0.c    | Testing Guide                                                                     | <ul><li>[x] </li></ul> | [Testing Massbit Route on Docker environment and Unit Test](https://github.com/massbitprotocol/w3f-testing-guide/tree/w3f-milestone-2)<br /> [Testing Massbit Route on Testnet](https://docs.massbit.io/massbit-route-mbr/guides)                                                                                                                                                                                                                                                                                                                                                                                                   | Execution propblems      |
| 0.d    | Docker release                                                                    | <ul><li>[x] </li></ul> | The following images for the Milestone 2 components have been published on Docker hub: <br /> - **Web Portal image:** massbit/massbitroute_web:w3f-milestone-2 <br />- **Fisherman image:** massbit/massbitroute_fisherman:w3f-milestone-2  <br />- **Massbit Chain image:** massbit/massbitroute_chain:w3f-milestone-2-submit  <br />- **Massbit Core image:** massbit/massbitroute_api:v0.1.15 <br />- **Gateway Manager image:** massbit/massbitroute_gwman:v0.1.8  <br />- **Massbit Node image:** massbit/massbitroute_node:v0.1.8 <br />- **Massbit Gateway image:** massbit/massbitroute_gateway:v0.1.11 <br />- **Massbit Stat image:** massbit/massbitroute_stat:v0.1.0 <br />- **Massbit Session image:** massbit/massbitroute_session:v0.1.0|       |  |  |
| 0.e    | Article                                                                           | <ul><li>[x] </li></ul> | [Article for Community on running Massbit Node/Gateway](https://blog.massbit.io/launching-mbr-testnet-phase-ii-staking-with-rewards-2/)                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |       |
| 1.     | Fisherman Pallet - offchain worker (Lua)                                                 | <ul><li>[x] </li></ul> | [Offchain worker Git](https://github.com/massbitprotocol/massbitchain/tree/wf-grant/pallets/fisherman)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |       |
| 2.     | Session Manager (Rust)	(C)                                                | <ul><li>[x] </li></ul> | [Session Manager Git](https://github.com/massbitprotocol/massbitroute_session/releases/tag/v0.1.0)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |       |
| 3.     | Node Provider staking Pallet - Provider incentive pot                                      | <ul><li>[x] </li></ul> | [Staking Pallet Git](https://github.com/massbitprotocol/massbitchain/tree/wf-grant/pallets/dapi-staking)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |       |
| 4.     | Stats and monitoring system implementation  (Lua)                                                  | <ul><li>[x] </li></ul> | [Massbit Stat Git](https://github.com/massbitprotocol/massbitroute_stat/releases/tag/v0.1.0)                                                                                                                                                                                                                                                                                                                                                                                 |       |


## General notes

## Evaluation V2

### Testing Guides:

Worked well with the help of hoanito.


### 1. 	Fisherman Pallet - offchain worker (code quality)

#### Tests Coverage:

Improved. lib.rs	51 / 113 (45.13%) (+3.53%).

#### Static Analysis:

Improved, now only 3 warnings:

```
warning: this `impl` can be derived
   --> pallets/block-reward/src/lib.rs:112:2
    |
112 | /     impl Default for GenesisConfig {
113 | |         fn default() -> Self {
114 | |             Self { reward_config: Default::default() }
115 | |         }
116 | |     }
    | |_____^
    |
    = note: `#[warn(clippy::derivable_impls)]` on by default
    = help: try annotating `pallet::GenesisConfig` with `#[derive(Default)]`
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#derivable_impls

warning: `pallet-block-reward` (lib) generated 1 warning
warning: this function has too many arguments (15/7)
   --> pallets/fisherman/src/lib.rs:152:3
    |
152 | /         pub fn create_job(
153 | |             origin: OriginFor<T>,
154 | |             plan_id: Vec<u8>,
155 | |             job_id: JobId,
...   |
167 | |             payload: Vec<u8>,
168 | |         ) -> DispatchResultWithPostInfo {
    | |_______________________________________^
    |
    = note: `#[warn(clippy::too_many_arguments)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#too_many_arguments

warning: large size difference between variants
   --> pallets/fisherman/src/lib.rs:146:12
    |
146 |       #[pallet::call]
    |  _______________^
147 | |     impl<T: Config> Pallet<T> {
148 | |         /// Create new job.
149 | |         ///
150 | |         /// Require authorized operator.
151 | |         #[pallet::weight(10_000)]
152 | |         pub fn create_job(
    | |_________________________^ this variant is 313 bytes
    |
    = note: `#[warn(clippy::large_enum_variant)]` on by default
note: and the second-largest variant is 24 bytes:
   --> pallets/fisherman/src/lib.rs:146:12
    |
146 |       #[pallet::call]
    |  _______________^
147 | |     impl<T: Config> Pallet<T> {
148 | |         /// Create new job.
149 | |         ///
...   |
195 | |         #[pallet::weight(10_000)]
196 | |         pub fn submit_job_result(
    | |________________________________^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#large_enum_variant
help: consider boxing the large fields to reduce the total size of the enum
    |
163 ~             response_values: Box<Vec<u8>>,
164 ~             url: Box<Vec<u8>>,
165 |             method: ApiMethod,
166 ~             headers: Box<Vec<(Vec<u8>, Vec<u8>)>>,
167 ~             payload: Box<Vec<u8>>,
    |

warning: this function has too many arguments (14/7)
   --> pallets/fisherman/src/lib.rs:146:12
    |
146 |     #[pallet::call]
    |               ^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#too_many_arguments

warning: `pallet-fisherman` (lib) generated 3 warnings
```

#### Code Documentation:

Improved, added some code documentation.

### 2. Session Manager (code quality)

#### Tests and Documentation

Tests ran ok (see script ./scripts/run \_run_test). 

Code documentation is still missing.

#### Static Analysis

The same warnings remain. 


### 3. Node Provider staking Pallet - Provider incentive pot (code quality)

#### Static Analysis

The warnings were fixed.

#### Tests Coverage

Is still the same: massbitchain/pallets/dapi-staking/src/lib.rs
Covered: 98 of 368 (26.63%)

### 4. Stats and monitoring system implementation (Lua) (code quality)

#### Tests and Code Documentation

Tests ran ok (see script ./scripts/run \_run_test). 

Code documentation is still missing.

#### Static Analysis

The same warnings remain. 


----

## Evaluation V1

### Testing Guides:

The first one failed in the first step with the output below:

```
bash start_env.sh
a78178bb9f41103dfbc4922daa28f06dfed05052a31ca25d0b32056801da9edd
Creating volume "w3f-testing-guide_db-data" with local driver
Creating volume "w3f-testing-guide_redis-data" with local driver
Pulling git_43 (massbit/massbitroute_git:v0.1.13)...
v0.1.13: Pulling from massbit/massbitroute_git
675920708c8b: Already exists
a0766ac80d67: Pull complete
38e19ad1e46d: Pull complete
d40b5dc87879: Pull complete
c91965e8e958: Pull complete
Digest: sha256:af897da80ced3cca930a096d49123d0b2d6a13af0b3a1c4ca1ab58f09c3ae55a
Status: Downloaded newer image for massbit/massbitroute_git:v0.1.13
Creating mbr_git_43 ... done
Git enviroment
_repo_add env
Git enviroment
_update_repo_branch env
fatal: remote origin already exists.
fatal: A branch named 'shamu' already exists.
fatal: couldn't find remote ref shamu
[shamu 5214422] Add env
 3 files changed, 21 insertions(+)
To http://git.massbitroute.net/massbitroute/env.git
 * [new branch]      shamu -> shamu
Branch 'shamu' set up to track remote branch 'shamu' from 'origin'.
_repo_add ssl
Git enviroment
_update_repo_branch ssl
fatal: remote origin already exists.
fatal: A branch named 'shamu' already exists.
fatal: couldn't find remote ref shamu
On branch shamu
nothing to commit, working tree clean
To http://git.massbitroute.net/massbitroute/ssl.git
 * [new branch]      shamu -> shamu
Branch 'shamu' set up to track remote branch 'shamu' from 'origin'.
_repo_add gwmandeploy
Git enviroment
_update_repo_branch gwmandeploy
fatal: remote origin already exists.
fatal: A branch named 'shamu' already exists.
fatal: couldn't find remote ref shamu
On branch shamu
nothing to commit, working tree clean
To http://git.massbitroute.net/massbitroute/gwmandeploy.git
 * [new branch]      shamu -> shamu
Branch 'shamu' set up to track remote branch 'shamu' from 'origin'.
_repo_add apideploy
Git enviroment
_update_repo_branch apideploy
fatal: remote origin already exists.
fatal: A branch named 'shamu' already exists.
fatal: couldn't find remote ref shamu
On branch shamu
nothing to commit, working tree clean
To http://git.massbitroute.net/massbitroute/apideploy.git
 * [new branch]      shamu -> shamu
Branch 'shamu' set up to track remote branch 'shamu' from 'origin'.
_repo_add statdeploy
Git enviroment
_update_repo_branch statdeploy
fatal: remote origin already exists.
fatal: A branch named 'shamu' already exists.
fatal: couldn't find remote ref shamu
On branch shamu
nothing to commit, working tree clean
To http://git.massbitroute.net/massbitroute/statdeploy.git
 * [new branch]      shamu -> shamu
Branch 'shamu' set up to track remote branch 'shamu' from 'origin'.
_repo_add monitordeploy
Git enviroment
_update_repo_branch monitordeploy
fatal: remote origin already exists.
fatal: A branch named 'shamu' already exists.
fatal: couldn't find remote ref shamu
On branch shamu
nothing to commit, working tree clean
To http://git.massbitroute.net/massbitroute/monitordeploy.git
 * [new branch]      shamu -> shamu
Branch 'shamu' set up to track remote branch 'shamu' from 'origin'.
_repo_add nodedeploy
Git enviroment
_update_repo_branch nodedeploy
fatal: remote origin already exists.
fatal: A branch named 'shamu' already exists.
fatal: couldn't find remote ref shamu
On branch shamu
nothing to commit, working tree clean
To http://git.massbitroute.net/massbitroute/nodedeploy.git
 * [new branch]      shamu -> shamu
Branch 'shamu' set up to track remote branch 'shamu' from 'origin'.
_repo_add gatewaydeploy
Git enviroment
_update_repo_branch gatewaydeploy
fatal: remote origin already exists.
fatal: A branch named 'shamu' already exists.
fatal: couldn't find remote ref shamu
On branch shamu
nothing to commit, working tree clean
To http://git.massbitroute.net/massbitroute/gatewaydeploy.git
 * [new branch]      shamu -> shamu
Branch 'shamu' set up to track remote branch 'shamu' from 'origin'.
start_env.sh: line 12: git/data/env/api.env: Permission denied
start_env.sh: line 13: git/data/env/api.env: Permission denied
http://massbit:tP-VbhEoC5bxVEbU-JtLYcmVu1Pf3zrK@git.massbitroute.net
ERROR: Couldn't find env file: /home/massbit/massbit/massbitroute_test/end2end/.secret
Error response from daemon: No such container: mbr_portal_api_43
start_env.sh: line 24: cd: stat/docker-compose: No such file or directory
ERROR: .FileNotFoundError: [Errno 2] No such file or directory: './network.yaml'
```

In the second tutorial, I could register a user but I didn't receive the e-mail confirmation for the user register. This prevented me to proceed with the other steps.


### 1. 	Fisherman Pallet - offchain worker (code quality)


#### Tests Coverage:

massbitchain/pallets/fisherman/src/lib.rs
Covered: 52 of 125 (41.60%)
Some paths and full methods not covered. 

#### Static Analysis:

`cargo clippy` generated 8 warnings:

```

warning: this function has too many arguments (15/7)
   --> pallets/fisherman/src/lib.rs:145:3
    |
145 | /         pub fn create_job(
146 | |             origin: OriginFor<T>,
147 | |             plan_id: Vec<u8>,
148 | |             job_id: JobId,
...   |
160 | |             payload: Vec<u8>,
161 | |         ) -> DispatchResultWithPostInfo {
    | |_______________________________________^
    |
    = note: `#[warn(clippy::too_many_arguments)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#too_many_arguments

warning: large size difference between variants
   --> pallets/fisherman/src/lib.rs:139:12
    |
139 |       #[pallet::call]
    |  _______________^
140 | |     impl<T: Config> Pallet<T> {
141 | |         /// Create new job.
142 | |         ///
143 | |         /// Require authorized operator.
144 | |         #[pallet::weight(10_000)]
145 | |         pub fn create_job(
    | |_________________________^ this variant is 313 bytes
    |
    = note: `#[warn(clippy::large_enum_variant)]` on by default
note: and the second-largest variant is 24 bytes:
   --> pallets/fisherman/src/lib.rs:139:12
    |
139 |       #[pallet::call]
    |  _______________^
140 | |     impl<T: Config> Pallet<T> {
141 | |         /// Create new job.
142 | |         ///
...   |
188 | |         #[pallet::weight(10_000)]
189 | |         pub fn submit_job_result(
    | |________________________________^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#large_enum_variant
help: consider boxing the large fields to reduce the total size of the enum
    |
156 ~             response_values: Box<Vec<u8>>,
157 ~             url: Box<Vec<u8>>,
158 |             method: ApiMethod,
159 ~             headers: Box<Vec<(Vec<u8>, Vec<u8>)>>,
160 ~             payload: Box<Vec<u8>>,
    |

warning: this function has too many arguments (14/7)
   --> pallets/fisherman/src/lib.rs:139:12
    |
139 |     #[pallet::call]
    |               ^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#too_many_arguments

warning: unneeded late initialization
   --> pallets/fisherman/src/lib.rs:298:4
    |
298 |             let response: Vec<u8>;
    |             ^^^^^^^^^^^^^^^^^^^^^^
    |
    = note: `#[warn(clippy::needless_late_init)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_late_init
help: declare `response` here
    |
300 |             let response: Vec<u8> = match job.method {
    |             +++++++++++++++++++++++
help: remove the assignments from the `match` arms
    |
302 ~                     Self::send_http_get_request(job.url.clone()).unwrap_or_else(|_| {
303 |                         is_success = false;
304 |                         "Failed to send request".as_bytes().to_vec()
305 ~                     })
306 |                 },
307 |                 ApiMethod::Post => {
  ...
help: add a semicolon after the `match` expression
    |
318 |             };
    |              +

warning: called `.iter().count()` on a `Vec`
   --> pallets/fisherman/src/lib.rs:342:6
    |
342 |         if results.iter().count() > 0 {
    |            ^^^^^^^^^^^^^^^^^^^^^^ help: try: `results.len()`
    |
    = note: `#[warn(clippy::iter_count)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#iter_count

warning: redundant clone
   --> pallets/fisherman/src/lib.rs:389:84
    |
389 |         let mut request = http::Request::post(str::from_utf8(&url).unwrap(), vec![payload.clone()]);
    |                                                                                          ^^^^^^^^ help: remove this
    |
    = note: `#[warn(clippy::redundant_clone)]` on by default
note: this value is dropped without further use
   --> pallets/fisherman/src/lib.rs:389:77
    |
389 |         let mut request = http::Request::post(str::from_utf8(&url).unwrap(), vec![payload.clone()]);
    |                                                                                   ^^^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: this expression creates a reference which is immediately dereferenced by the compiler
   --> pallets/fisherman/src/lib.rs:391:41
    |
391 |             let key_str = sp_std::str::from_utf8(&key).unwrap_or_default();
    |                                                  ^^^^ help: change this to: `key`
    |
    = note: `#[warn(clippy::needless_borrow)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrow

warning: this expression creates a reference which is immediately dereferenced by the compiler
   --> pallets/fisherman/src/lib.rs:392:41
    |
392 |             let val_str = sp_std::str::from_utf8(&val).unwrap_or_default();
    |                                                  ^^^^ help: change this to: `val`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrow

warning: `pallet-fisherman` (lib) generated 8 warnings

```

#### Code documentation

Some methods do have code documentation.


### 2. Session Manager (code quality)

#### Tests and Documentation
- There is no automated test and code documentation.

#### Static Analysis

`luacheck` generated these warnings. They seems to be false positives. Feel free to fix the ones that make sense to you. 

```
Checking apps/api/conf/app_config.lua             OK
Checking config.lua                               OK
Checking sites/config.lua                         OK
Checking src/filter-jsonrpc-access.lua            8 warnings

    src/filter-jsonrpc-access.lua:1:17: accessing undefined variable ndk
    src/filter-jsonrpc-access.lua:9:16: accessing undefined variable ngx
    src/filter-jsonrpc-access.lua:10:15: accessing undefined variable ngx
    src/filter-jsonrpc-access.lua:11:17: accessing undefined variable ngx
    src/filter-jsonrpc-access.lua:13:5: accessing undefined variable ngx
    src/filter-jsonrpc-access.lua:13:14: accessing undefined variable ngx
    src/filter-jsonrpc-access.lua:18:1: mutating non-standard global variable ngx
    src/filter-jsonrpc-access.lua:19:1: accessing undefined variable ngx

Total: 8 warnings / 0 errors in 4 files
```

Most of the code is shell script, shellcheck resulted in the following output. Feel free to fix the alerts that makes sense for you:

```

shellcheck base.sh run -S warning

In base.sh line 2:
SITE_ROOT=$(realpath $(dirname $(realpath $0))/..)
                     ^-----------------------^ SC2046: Quote this to prevent word splitting.
                               ^------------^ SC2046: Quote this to prevent word splitting.


In base.sh line 27:
                source $SITE_ROOT/env/env.sh
                       ^-------------------^ SC1090: Can't follow non-constant source. Use a directive to specify location.


In base.sh line 71:
        for _pathgit in $@; do
                        ^-- SC2068: Double quote array expansions to avoid re-splitting elements.


In base.sh line 93:
        for _pathgit in $@; do
                        ^-- SC2068: Double quote array expansions to avoid re-splitting elements.


In base.sh line 113:
        for _pathgit in $@; do
                        ^-- SC2068: Double quote array expansions to avoid re-splitting elements.


In base.sh line 119:
                cd $_dir
                ^------^ SC2164: Use 'cd ... || exit' or 'cd ... || return' in case cd fails.

Did you mean: 
                cd $_dir || exit


In base.sh line 135:
                $0 $@
                   ^-- SC2068: Double quote array expansions to avoid re-splitting elements.


In base.sh line 144:
                timeout $t $0 $@
                              ^-- SC2068: Double quote array expansions to avoid re-splitting elements.


In base.sh line 146:
                $0 $@
                   ^-- SC2068: Double quote array expansions to avoid re-splitting elements.


In run line 67:
        if [ \( -z "$GIT_PRIVATE_READ_URL" \) -o \( -z "$GIT_PRIVATE_DOMAIN" ] \) ]; then
           ^-- SC1073: Couldn't parse this test expression. Fix to allow more checks.
                                                                             ^-- SC1072:  Fix any mentioned problems and try again.                                                                                                                       

For more information:
  https://www.shellcheck.net/wiki/SC2068 -- Double quote array expansions to ...
  https://www.shellcheck.net/wiki/SC1090 -- Can't follow non-constant source....
  https://www.shellcheck.net/wiki/SC2046 -- Quote this to prevent word splitt...
```

### 3. Node Provider staking Pallet - Provider incentive pot (code quality)


#### Static Analysis


cargo clippy resulted in 4 warnings:

```
    Checking pallet-dapi-staking v0.1.0 (/home/diogo/workspace/massbit/codequality/massbitchain/pallets/dapi-staking)
    Checking pallet-grandpa v4.0.0-dev (https://github.com/paritytech/substrate?branch=polkadot-v0.9.26#e8a7d161)
    Checking pallet-validator-set v0.1.0 (/home/diogo/workspace/massbit/codequality/massbitchain/pallets/validator-set)
warning: useless conversion to the same type: `&str`
   --> pallets/dapi-staking/src/types.rs:131:16
    |
131 |                 return Err("Unexpected era".into())
    |                            ^^^^^^^^^^^^^^^^^^^^^^^ help: consider removing `.into()`: `"Unexpected era"`
    |
    = note: `#[warn(clippy::useless_conversion)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#useless_conversion

warning: useless conversion to the same type: `&str`
   --> pallets/dapi-staking/src/types.rs:168:16
    |
168 |                 return Err("Unexpected era".into())
    |                            ^^^^^^^^^^^^^^^^^^^^^^^ help: consider removing `.into()`: `"Unexpected era"`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#useless_conversion

warning: redundant clone
   --> pallets/dapi-staking/src/lib.rs:708:73
    |
708 |             ProviderInfo::<T>::insert(&provider_id, ProviderMetadata::new(account.clone()));
    |                                                                                  ^^^^^^^^ help: remove this
    |
    = note: `#[warn(clippy::redundant_clone)]` on by default
note: this value is dropped without further use
   --> pallets/dapi-staking/src/lib.rs:708:66
    |
708 |             ProviderInfo::<T>::insert(&provider_id, ProviderMetadata::new(account.clone()));
    |                                                                           ^^^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: using `clone` on type `<<T as pallet::Config>::Currency as frame_support::traits::Currency<<T as frame_system::Config>::AccountId>>::Balance` which implements the `Copy` trait
   --> pallets/dapi-staking/src/lib.rs:783:56
    |
783 |                 EraMetadata { rewards: Default::default(), staked: state.staked.clone() },
    |                                                                    ^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `state.staked`                                                                                                         
    |
    = note: `#[warn(clippy::clone_on_copy)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: `pallet-dapi-staking` (lib) generated 4 warnings
```


#### Tests Coverage

massbitchain/pallets/dapi-staking/src/lib.rs
Covered: 98 of 368 (26.63%)

#### Code Documentation

Good code documentation.


### 4. Stats and monitoring system implementation (Lua) (code quality)

#### Tests and Code Documentation

There is no automated tests and code documentation.

#### Static Analysis

Luacheck results are good:

```
Checking config.lua                               OK
Checking sites/config.lua                         OK
Checking src/env.lua                              OK

Total: 0 warnings / 0 errors in 3 files
```

Most of the code is shell script, shellcheck resulted in the following output. Feel free to fix the alerts that makes sense for you:

```
shellcheck base.sh run -S warning

In base.sh line 2:
SITE_ROOT=$(realpath $(dirname $(realpath $0))/..)
^-------^ SC2034: SITE_ROOT appears unused. Verify use (or export if used externally).
                     ^-----------------------^ SC2046: Quote this to prevent word splitting.
                               ^------------^ SC2046: Quote this to prevent word splitting.


In base.sh line 50:
        for _pathgit in $@; do
                        ^-- SC2068: Double quote array expansions to avoid re-splitting elements.


In base.sh line 81:
                $0 $@
                   ^-- SC2068: Double quote array expansions to avoid re-splitting elements.


In base.sh line 90:
                timeout $t $0 $@
                              ^-- SC2068: Double quote array expansions to avoid re-splitting elements.


In base.sh line 92:
                $0 $@
                   ^-- SC2068: Double quote array expansions to avoid re-splitting elements.


In run line 4:
SITE_ROOT=$(realpath $(dirname $(realpath $0))/..)
                     ^-----------------------^ SC2046: Quote this to prevent word splitting.
                               ^------------^ SC2046: Quote this to prevent word splitting.


In run line 9:
if [ -f "$SITE_ROOT/.env_raw" ]; then source $SITE_ROOT/.env_raw; fi
                                             ^-----------------^ SC1090: Can't follow non-constant source. Use a directive to specify location.                                                                                                           


In run line 10:
source $SITE_ROOT/scripts/base.sh
       ^------------------------^ SC1090: Can't follow non-constant source. Use a directive to specify location.


In run line 12:
cd $SITE_ROOT
^-----------^ SC2164: Use 'cd ... || exit' or 'cd ... || return' in case cd fails.

Did you mean: 
cd $SITE_ROOT || exit


In run line 25:
        if [ -f "$SITE_ROOT/.env_raw" ]; then source $SITE_ROOT/.env_raw; fi
                                                     ^-----------------^ SC1090: Can't follow non-constant source. Use a directive to specify location.                                                                                                   


In run line 98:
        source $SITE_ROOT/.env
               ^-------------^ SC1090: Can't follow non-constant source. Use a directive to specify location.


In run line 207:
        cat $SITE_ROOT/data/run/stat_${_type}.sh | parallel -j$(wc -l $SITE_ROOT/data/run/stat_${_type}.sh | cut -d' ' -f1)
                                                              ^-- SC2046: Quote this to prevent word splitting.


In run line 208:
        cd $SITE_ROOT
        ^-----------^ SC2164: Use 'cd ... || exit' or 'cd ... || return' in case cd fails.

Did you mean: 
        cd $SITE_ROOT || exit


In run line 237:
        cat $SITE_ROOT/data/run/stat_${_type}.sh | parallel -j$(wc -l $SITE_ROOT/data/run/stat_${_type}.sh | cut -d' ' -f1)
                                                              ^-- SC2046: Quote this to prevent word splitting.


In run line 238:
        cd $SITE_ROOT
        ^-----------^ SC2164: Use 'cd ... || exit' or 'cd ... || return' in case cd fails.

Did you mean: 
        cd $SITE_ROOT || exit


In run line 282:
        cd $_dir
        ^------^ SC2164: Use 'cd ... || exit' or 'cd ... || return' in case cd fails.

Did you mean: 
        cd $_dir || exit


In run line 294:
                mkdir -p $(dirname $SITE_ROOT/etc/prometheus/$f)
                         ^-- SC2046: Quote this to prevent word splitting.


In run line 311:
                mkdir -p $(dirname $SITE_ROOT/etc/prometheus/$f)
                         ^-- SC2046: Quote this to prevent word splitting.


In run line 318:
        cd $SITE_ROOT
        ^-----------^ SC2164: Use 'cd ... || exit' or 'cd ... || return' in case cd fails.

Did you mean: 
        cd $SITE_ROOT || exit


In run line 427:
$@
^-- SC2068: Double quote array expansions to avoid re-splitting elements.

For more information:
  https://www.shellcheck.net/wiki/SC2068 -- Double quote array expansions to ...
  https://www.shellcheck.net/wiki/SC1090 -- Can't follow non-constant source....
  https://www.shellcheck.net/wiki/SC2034 -- SITE_ROOT appears unused. Verify ...

```


