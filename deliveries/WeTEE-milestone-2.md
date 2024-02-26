# Milestone Delivery :mailbox:


**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [WeTEE Network](https://github.com/w3f/Grants-Program/blob/master/applications/WeTEE_Network.md)
* **Milestone Number:** 2

**Deliverables**


| Number | Deliverable | Link | Notes |
| -----: | ----------- | ------------- | ------------- |
| **0a.** | License | [Apache 2.0](https://github.com/wetee-dao/worker/blob/main/LICENSE) | Apache License 2.0 |
| **0b.** | Documentation | [Milestone 2 Documentation](https://github.com/wetee-dao/chain/blob/patch/docs/grants/milestone-2-documentation.md)  | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | [Test guide link](https://github.com/wetee-dao/chain/blob/patch/docs/grants/milestone-2-test.md) | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | [DockerFile](https://github.com/wetee-dao/worker/blob/main/Dockerfile)<br/>[Docker build and run](https://github.com/wetee-dao/worker/blob/main/docs/build.md) | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 01. | TEE Image build guide | [TEE Image guide](https://github.com/wetee-dao/examples/blob/main/README.md) | We will provide documentation to help programmers understand and execute compiling existing web2 programs into deployable mirrors on Wetee. Currently we provide documentation for compiling via Ego and Gramine. |
| 02. | App Example | [Ego Example](https://github.com/wetee-dao/examples/tree/main/ego-http-server)<br/>[C (nginx) Example](https://github.com/wetee-dao/examples/tree/main/gramine-nginx)<br/>[Rust Example](https://github.com/wetee-dao/examples/tree/main/gramine-rust)<br/>[C++ Example](https://github.com/wetee-dao/examples/tree/main/gramine-c%2B%2B)<br/>[Python Example](https://github.com/wetee-dao/examples/tree/main/gramine-python)  |  We will provide example programs to help programmers understand and execute compiling existing web2 programs into deployable mirrors on Wetee. Currently we provide Examples in Golang, Python, C, C++, and Rust. |
| 03. | Worker K8S Operator | https://github.com/wetee-dao/worker/tree/main/graph | The k8s worker acts as a trusted controller in the wetee network. It securely stores deployment states, including manifests and defined secrets. Based on the manifests, the Worker uses remote attestation to authenticate the trusted execution environments of applications. <br /> 1. K8S Operator run in SGX <br /> 2. Listen to Wetee Node State <br /> 3. Worker cluster register <br /> 4. Worker cluster mortgage <br /> 5. Worker cluster withdrawal <br /> 6. Worker cluster stop |
| 04. | Worker App Deploy | https://github.com/wetee-dao/worker/blob/main/mint/app.go | The application controller of the miner node is responsible for pulling settings from the chain and synchronizing them into the k8s/k3s cluster to complete application deployment/update.<br />1. TEE app create <br /> 2. TEE app update <br /> 3. TEE app set settings <br /> 4. TEE app recharge <br /> 5. TEE app stop |
| 05. | Worker Task Deploy | https://github.com/wetee-dao/worker/blob/main/mint/task.go | Miner node task controller, responsible for executing assigned tasks, uploading execution logs, and synchronizing to the chain.<br />1. TEE task create <br /> 2. TEE task update <br /> 3. TEE task set execute settings <br /> 4. TEE task recharge <br /> 5. TEE task stop |

