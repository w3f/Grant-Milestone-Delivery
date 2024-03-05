# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Proof of Contract Stake](https://github.com/w3f/Grants-Program/tree/master/applications/PoCS.md)
* **Milestone Number:** 2

**Context**

The goal is to integrate `pallet-staking` with modified `pallet-contracts`, ensuring NPoS and PoCS systems work together seamlessly. A working prototype of the PoCS full node is achieved. 

**Deliverables**

|Number|Deliverable|Link|Notes|
|-------------|-------------|------------- |------------- |
|0a.|License| [Apache 2.0](https://github.com/auguth/pocs/blob/w3f_milestone_2/LICENSE) |-|
|0b.|Documentation| [Pallet Contracts](https://auguth.github.io/pocs/target/doc/pallet_contracts/), [Pallet Staking](https://auguth.github.io/pocs/target/doc/pallet_staking/) | Crate Documentation of modified `pallet_contracts` and `pallet_staking` for PoCS|
|0c.|Testing Guide| [Testing guide](https://github.com/auguth/pocs/blob/w3f_milestone_2/TESTING-GUIDE.md) |-|
|0d.|Docker | [Dockerfile](https://github.com/auguth/pocs/blob/w3f_milestone_2/Dockerfile) , [Docker Compose](https://github.com/auguth/pocs/blob/w3f_milestone_2/docker-compose.yml) , [DockerImage](https://github.com/auguth/pocs/blob/w3f_milestone_2/README.md#docker-pull)| `docker compose up --build -d` |
|0e.|Article|[PoCS x NPoS](https://medium.com/@auguthresearch/pocs-x-npos-d164688223fc)|-|
|1.|Modify pallet staking for PoCS|[PoCS x NPoS (Milestone 2 - Core) PR#29](https://github.com/auguth/pocs/pull/29)|-|

**Additional Information**

Upcoming Final **Milestone 3** will include these deliverables,
1. Multi Node Test
2. Yellow Paper (Security Report Included)
3. Sample PoCS ink! Contract (Verifying Contract's Delegate and Stake Score)
4. PoCS Blog Article
5. PoCS Tutorial Video