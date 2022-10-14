# Evaluation

- **Status:** In Progress
- **Application Document:** [Application](https://github.com/w3f/Grants-Program/blob/master/applications/QRUCIAL_DAO.md)
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A



**Deliverables**

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li> [x] </li></ul> | [Link](https://github.com/Qrucial/QRUCIAL-DAO/blob/milestone1/LICENSE) | Ok |
| 0b. | Documentation | <ul><li> [x] </li></ul> | [Wiki](https://github.com/Qrucial/QRUCIAL-DAO/wiki) and [Whitepaper](https://github.com/Qrucial/QRUCIAL-DAO/blob/milestone1/docs/QRUCIAL_DAO_Whitepaper.pdf) | Ok |
| 0c. | Testing Guide | <ul><li> [ ] </li></ul> | [Development and testing guide](https://github.com/Qrucial/QRUCIAL-DAO/wiki/Development-and-testing-guide) | Needs better instructions for exploratory testing. |
| 0d. | Docker | <ul><li> [ ] </li></ul> | [Docker](https://github.com/Qrucial/QRUCIAL-DAO/blob/milestone1/docker/files/dockerfile) and [node-setup.sh](https://github.com/Qrucial/QRUCIAL-DAO/blob/milestone1/node-setup.sh) | With docker, build with success but cannot start the services. |
| 1. | Substrate runtime | <ul><li> [ ] </li></ul> | [Crate source](https://github.com/Qrucial/QRUCIAL-DAO/tree/milestone1/qdao-node/runtime) | Not tested yet. Needs better instructions for exploratory testing. |
| 2. | Substrate pallet: ExoSys | <ul><li> [ ] </li></ul> | [Crate source](https://github.com/Qrucial/QRUCIAL-DAO/tree/milestone1/qdao-node/exo-pallet) | Not tested yet. Needs better instructions for exploratory testing. |
| 3. | Substrate pallet: AuditorRep | <ul><li> [ ] </li></ul> | [Crate source](https://github.com/Qrucial/QRUCIAL-DAO/tree/milestone1/qdao-node/audit-pallet) | Not tested yet. Needs better instructions for exploratory testing. |
| 4. | Substrate report storage | <ul><li> [ ] </li></ul> | [Part of ExoTool](https://github.com/Qrucial/QRUCIAL-DAO/blob/milestone1/exotools/lar.py) | Not tested yet. Needs better instructions for exploratory testing. |
| 5. | Substrate pallet: governance | <ul><li> [ ] </li></ul> | [Sudo](https://github.com/Qrucial/QRUCIAL-DAO/blob/167d856b87f6ea21c86dd3f3c556ab8e70bb6f35/qdao-node/runtime/src/lib.rs#L306) | Not tested yet. Needs better instructions for exploratory testing. |


## General Notes

## Update V2: October 6.

1. Problems with Docker
Commands. The build commands and folders are with some problems in the manual. The commands that worked for me were:

```
cd QRUCIAL-DAO/docker/files
docker build .  -t "qdao:V0.3"
```

  - dependencies
    - I needed to add `RUN apt-get install -y python3-setuptools` to line 11 of the docker file to fulfill a missing dependency problem.
  - expose ports
    - After the container start, there is no port exposed by the container. In this way, the services are not available outside of the container. Please export the ports needed to access the application from outside of the container.
  - service not running. After checking the services running inside the container the `tmux a -t qdao-api` was not running.


2. Clippy (ok)

- Ok. Most of the warnings were fixed.

3. Tests are not running. The pipeline in the repository is also showing that the tests are broken.

https://github.com/Qrucial/QRUCIAL-DAO/actions/runs/3161906474/jobs/5147991781

4. Docs

Ok. Improved.

5. Running the software.

I tried to guess some order and way to run the pallets extrinsic, however, when I started the auditor part I cannot get an authorized auditor.
Please, help me with a tutorial to run the full process of QDAO using the available methods. A complete example should be enough to fulfill this requirement of the evaluation.



----
## Evaluation V1

LICENSE – Ok.

Whitepaper and Wiki – Ok.

### Testing guide:

Please include these install requirements in the tutorial (without docker), I needed to install them to be able to install the QDAO:

```
sudo apt-get install tmux
cargo install keccak256-cli
```

After installing those dependencies I was able to run the system wihtout docker.

Using docker, I was able to build the container but when I ran it the following messages were presented and did not worked, please review:

```
docker run 5777941d397f
/usr/lib/python2.7/dist-packages/supervisor/options.py:461: UserWarning: Supervisord is running as root and it is searching for its configuration file in default locations (including its current working directory); you probably want to specify a "-c" argument specifying an absolute path to a configuration file for improved security.
  'Supervisord is running as root and it is searching '
2022-09-15 13:03:55,778 CRIT Supervisor is running as root.  Privileges were not dropped because no user is specified in the config file.  If you intend to run as root, you can set user=root in the config file to avoid this message.
2022-09-15 13:03:55,778 INFO Included extra file "/etc/supervisor/conf.d/supervisord.conf" during parsing
2022-09-15 13:03:55,791 INFO RPC interface 'supervisor' initialized
2022-09-15 13:03:55,791 CRIT Server 'unix_http_server' running without any HTTP authentication checking
2022-09-15 13:03:55,791 INFO supervisord started with pid 1
2022-09-15 13:03:56,796 INFO spawned: 'qdao-node' with pid 9
2022-09-15 13:03:56,801 INFO spawned: 'qdao-exosysd' with pid 10
2022-09-15 13:03:56,825 INFO exited: qdao-node (exit status 0; not expected)
2022-09-15 13:03:56,827 INFO exited: qdao-exosysd (exit status 0; not expected)
2022-09-15 13:03:56,833 INFO reaped unknown pid 12
2022-09-15 13:03:57,839 INFO spawned: 'qdao-node' with pid 19
2022-09-15 13:03:57,845 INFO spawned: 'qdao-exosysd' with pid 20
2022-09-15 13:03:57,886 INFO exited: qdao-node (exit status 0; not expected)
2022-09-15 13:03:57,893 INFO exited: qdao-exosysd (exit status 0; not expected)
2022-09-15 13:03:57,902 INFO reaped unknown pid 22
2022-09-15 13:03:59,910 INFO spawned: 'qdao-node' with pid 29
2022-09-15 13:03:59,916 INFO spawned: 'qdao-exosysd' with pid 30
2022-09-15 13:03:59,952 INFO exited: qdao-node (exit status 0; not expected)
2022-09-15 13:03:59,957 INFO exited: qdao-exosysd (exit status 0; not expected)
2022-09-15 13:03:59,966 INFO reaped unknown pid 32
2022-09-15 13:04:02,972 INFO spawned: 'qdao-node' with pid 39
2022-09-15 13:04:02,975 INFO spawned: 'qdao-exosysd' with pid 40
2022-09-15 13:04:02,993 INFO exited: qdao-node (exit status 0; not expected)
2022-09-15 13:04:02,995 INFO gave up: qdao-node entered FATAL state, too many start retries too quickly
2022-09-15 13:04:02,996 INFO exited: qdao-exosysd (exit status 0; not expected)
2022-09-15 13:04:02,999 INFO gave up: qdao-exosysd entered FATAL state, too many start retries too quickly
2022-09-15 13:04:02,999 INFO reaped unknown pid 42

```

Regarding the extrinsics/modules available for testing, would be nice to have more information to perform exploratory testing as a workflow (sequence of function calls that have a specific meaning), or use cases. Please provide the main flow of the application within an example, as a sequence of calls and expected results, for us to perform exploratory testing. If there are any alternative use cases (workflows) please also provide for testing. Maybe the wiki could be an appropriate location for this documentation.


### Automated Testing / Code Quality / Code documentation

 - exo_pallet/src/lib.rs – 60% - some methods are not covered, please improve.
 - audit_pallet/src/lib.rs – 75.32% - some error paths are not covered, and could be improved. Some unimplemented methods.
 - exosysd/src/main.rs – This code is quite complex, with many nested loops and conditionals. Could be refactored to have a better design.



Static analysis (cargo clippy):

Some warnings were presented, please review.

```
warning: useless conversion to the same type: `u128`
   --> client/src/benchmarking.rs:109:24
    |
109 |                 value: self.value.into(),
    |                        ^^^^^^^^^^^^^^^^^ help: consider removing `.into()`: `self.value`
    |
    = note: `#[warn(clippy::useless_conversion)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#useless_conversion

warning: redundant clone
   --> client/src/benchmarking.rs:172:13
    |
172 |         call.clone(),
    |             ^^^^^^^^ help: remove this
    |
    = note: `#[warn(clippy::redundant_clone)]` on by default
note: this value is dropped without further use
   --> client/src/benchmarking.rs:172:9
    |
172 |         call.clone(),
    |         ^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> client/src/benchmarking.rs:174:46
    |
174 |         runtime::Signature::Sr25519(signature.clone()),
    |                                              ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> client/src/benchmarking.rs:174:37
    |
174 |         runtime::Signature::Sr25519(signature.clone()),
    |                                     ^^^^^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> client/src/benchmarking.rs:175:14
    |
175 |         extra.clone(),
    |              ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> client/src/benchmarking.rs:175:9
    |
175 |         extra.clone(),
    |         ^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
  --> client/src/rpc.rs:52:50
   |
52 |     module.merge(System::new(client.clone(), pool.clone(), deny_unsafe).into_rpc())?;
   |                                                  ^^^^^^^^ help: remove this
   |
note: this value is dropped without further use
  --> client/src/rpc.rs:52:46
   |
52 |     module.merge(System::new(client.clone(), pool.clone(), deny_unsafe).into_rpc())?;
   |                                              ^^^^
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: very complex type used. Consider factoring parts into `type` definitions
  --> client/src/service.rs:41:6
   |
41 |   ) -> Result<
   |  ______^
42 | |     sc_service::PartialComponents<
43 | |         FullClient,
44 | |         FullBackend,
...  |
59 | |     ServiceError,
60 | | > {
   | |_^
   |
   = note: `#[warn(clippy::type_complexity)]` on by default
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#type_complexity

warning: writing `&String` instead of `&str` involves a new object where a slice will do
   --> client/src/service.rs:156:26
    |
156 | fn remote_keystore(_url: &String) -> Result<Arc<LocalKeystore>, &'static str> {
    |                          ^^^^^^^ help: change this to: `&str`
    |
    = note: `#[warn(clippy::ptr_arg)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#ptr_arg

warning: `qdao-node` (bin "qdao-node") generated 7 warnings
```

These warnings were presented during the build, please review:

```
warning: unused variable: `origin`                                                                                                                                                                                                                           
   --> exo-pallet/src/lib.rs:160:41                                                                                                                                                                                                                          
    |                                                                                                                                                                                                                                                        
160 |         pub fn tool_exec_cancel_invalid(origin: OriginFor<T>, hash: T::Hash) -> DispatchResult {                                                                                                                                                       
    |                                         ^^^^^^ help: if this is intentional, prefix it with an underscore: `_origin`                                                                                                                                   
    |                                                                                                                                                                                                                                                        
    = note: `#[warn(unused_variables)]` on by default                                                                                                                                                                                                        
                                                                                                                                                                                                                                                             
warning: unused variable: `hash`                                                                                                                                                                                                                             
   --> exo-pallet/src/lib.rs:160:63                                                                                                                                                                                                                          
    |                                                                                                                                                                                                                                                        
160 |         pub fn tool_exec_cancel_invalid(origin: OriginFor<T>, hash: T::Hash) -> DispatchResult {                                                                                                                                                       
    |                                                               ^^^^ help: if this is intentional, prefix it with an underscore: `_hash`                                                                                                                 
                                                                                                                                                                                                                                                             
warning: unused variable: `origin`                                                                                                                                                                                                                           
   --> exo-pallet/src/lib.rs:167:13                                                                                                                                                                                                                          
    |                                                                                                                                                                                                                                                        
167 |             origin: OriginFor<T>,                                                                                                                                                                                                                      
    |             ^^^^^^ help: if this is intentional, prefix it with an underscore: `_origin`                                                                                                                                                               
                                                                                                                                                                                                                                                             
warning: unused variable: `hash`                                                                                                                                                                                                                             
   --> exo-pallet/src/lib.rs:168:13                                                                                                                                                                                                                          
    |                                                                                                                                                                                                                                                        
168 |             hash: T::Hash,                                                                                                                                                                                                                             
    |             ^^^^ help: if this is intentional, prefix it with an underscore: `_hash`                                                                                                                                                                   
                                                                                                                                                                                                                                                             
warning: unused variable: `result`                                                                                                                                                                                                                           
   --> exo-pallet/src/lib.rs:169:13                                                                                                                                                                                                                          
    |                                                                                                                                                                                                                                                        
169 |             result: Vec<u8>,                                                                                                                                                                                                                           
    |             ^^^^^^ help: if this is intentional, prefix it with an underscore: `_result`                                                                                                                                                               
                                                                                                                                                                                                                                                             
warning: unused variable: `result`                                                                                                                                                                                                                           
   --> exo-pallet/src/lib.rs:179:13                                                                                                                                                                                                                          
    |                                                                                                                                                                                                                                                        
179 |             result: Vec<u8>,                                                                                                                                                                                                                           
    |             ^^^^^^ help: if this is intentional, prefix it with an underscore: `_result`                                                                                                                                                               
                                                                                                                                                                                                                                                             
warning: `qdao-exo-pallet` (lib) generated 6 warnings
```


Code documentation:

There is code documentation but it is not in rust docstrings format. In this way, we cannot transport it to html with rust doc command. Please review. See https://doc.rust-lang.org/rustdoc/.
