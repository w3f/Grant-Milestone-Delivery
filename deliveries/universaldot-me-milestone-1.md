# Milestone Delivery :mailbox:


**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/UniversalDot/Grants-Program/blob/master/applications/universaldot-me.md
* **Milestone Number:** 1

**Context** 
We provide implementation of MVP 0.1. This includes 3 new pallets with custom functionality. Furthermore, the pallets are unit tested using mocks. Benchmarking for each extrinsic is also provided in the deliverable.


**Deliverables**


| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a.| Licence | Apache 2.0: https://github.com/UniversalDot/pallets/blob/master/LICENSE | ...|
| 0b.  | Documentation | Inline Documentations: <br> Pallet Profile: https://github.com/UniversalDot/pallets/blob/master/profile/src/lib.rs#L1 <br> Pallet Task: https://github.com/UniversalDot/pallets/blob/master/task/src/lib.rs#L1 <br> Pallet Dao: https://github.com/UniversalDot/pallets/blob/master/dao/src/lib.rs#L1 <br> Videos: <br> Pallet Profile: https://www.youtube.com/watch?v=2xgzU3Bqn5M<br> Pallet Task: https://www.youtube.com/watch?v=BwEutATKAa0 <br> Pallet Dao: https://www.youtube.com/watch?v=1axnuzhBc1M| | 
| 0c.  | Testing Guide | https://github.com/UniversalDot/pallets#testing | ...| 
| 0d.  | Docker | https://github.com/UniversalDot/universal-dot-node/blob/add_pallets/Dockerfile| ...| 
| 0e.  | Article | https://medium.com/universaldot/universaldot-dapp-overview-1acf40cb1a61| ...| 
| 1. | Pallet Profile | Pallet source code: https://github.com/UniversalDot/pallets/blob/master/profile/src/lib.rs <br> Pallet tests: https://github.com/UniversalDot/pallets/blob/master/profile/src/tests.rs <br> Pallet mock: https://github.com/UniversalDot/pallets/blob/master/profile/src/mock.rs <br> Pallet benchmark: https://github.com/UniversalDot/pallets/blob/master/profile/src/benchmarking.rs| ...| 
| 2.  | Pallet Task | Pallet source code: https://github.com/UniversalDot/pallets/blob/master/task/src/lib.rs <br> Pallet tests: https://github.com/UniversalDot/pallets/blob/master/task/src/tests.rs <br> Pallet mock: https://github.com/UniversalDot/pallets/blob/master/task/src/mock.rs <br> Pallet benchmark: https://github.com/UniversalDot/pallets/blob/master/task/src/benchmarking.rs| ...| 
| 3.  | Pallet DAO | Pallet source code: https://github.com/UniversalDot/pallets/blob/master/dao/src/lib.rs <br> Pallet tests: https://github.com/UniversalDot/pallets/blob/master/dao/src/tests.rs <br> Pallet mock: https://github.com/UniversalDot/pallets/blob/master/dao/src/mock.rs <br> Pallet benchmark: https://github.com/UniversalDot/pallets/blob/master/dao/src/benchmarking.rs| ...| 
| 4.  | Substrate Chain | Source code: https://github.com/UniversalDot/universal-dot-node/blob/add_pallets/runtime/src/lib.rs#L324 <br> Testnet: ws://109.235.70.27:9944| ...| 

**Additional Information**

For inline documentation delivery (0b.), please refer that in the source code of each pallet, we provide comments above each function definition, function call, struct, etc. Furthermore, at the top of the pallet we provide in-code overview documentation.

The functionality of the pallet is explained through a medium publication and videos.
