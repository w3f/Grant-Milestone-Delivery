<!-- # Guildlines

> Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. Don't remove any of the mandatory parts presented in bold letters or as headlines!

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**  

* **PR Link:** Please, provide a link to the initial accepted pull request of your application to the [Web3 Foundation Open Grants Program repository](https://github.com/w3f/Open-Grants-Program). 
* **Milestone Number:** The number of the milestone

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which should be used for testing.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | ... |...| ...| 
| 2.  | ... |...| ...| 
 -->

* Invoice form has been filled
* Original [pull request](https://github.com/w3f/Open-Grants-Program/pull/117)
* Milestone number 1

> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which should be used for testing.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | Apache 2.0 |
| 1a. | Manta Substrate Pallet Protoype, backend | [docker](https://hub.docker.com/r/shumo/manta-node), [source code](https://github.com/Manta-Network/manta-node/tree/master/pallets/manta-dap) |  |
| 1a. | Manta Substrate Pallet Protoype, frontend | [Github](https://github.com/Manta-Network/manta-front-end) | |
| 2. | Benchmark | [link](https://github.com/Manta-Network/manta-node/blob/master/pallets/manta-dap/benches/manta_bench.rs)  | `13.4 ms` for proof verification |
| 3. | Docker | [docker](https://hub.docker.com/r/shumo/manta-node)  | |


# Howto:

1. download and run the manta node:
   1. `docker pull shumo/manta-node`
   2. `docker container run -p 9944:9944 shumo/manta-node`
2. setup the front end 
    1. `git clone https://github.com/Manta-Network/manta-front-end`
    2. `cd manta-front-end`
    3. `yarn install`
    4. `yarn start`
3. how to play with the demo: see this [video](https://www.dropbox.com/s/hgufnzb6ssqimxx/manta-demo.mp4?dl=0)

The manta-node repo that containing the manta-dap pallet code is still in a private repo. Please send shumo@manta.network an email with your github username if you want to check out the code. 
