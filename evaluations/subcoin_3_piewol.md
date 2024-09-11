# Evaluation

- **Status:** in progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Subcoin.md
- **Milestone:** 3

| Number | Deliverable    | Accepted | Link | Notes |
| -- | --  | ---    | --- | --- |
| 0a.    | License                 | <ul><li>[x] </li></ul> | https://github.com/subcoin-project/subcoin/blob/subcoin-milestone-3/LICENSE |  MIT  |
| 0b.    | Documentation           | <ul><li>[] </li></ul> | Each module has its own docs. The rendered inline rustdoc is deployed at https://subcoin-project.github.io/subcoin/.  | |
| 0c.    | Testing and Testing Guide | <ul><li>[] </li></ul> |  https://github.com/subcoin-project/subcoin/tree/subcoin-milestone-3?tab=readme-ov-file#run-tests |    |
| 0d.    | Docker                  | <ul><li>[ ] </li></ul> | https://github.com/subcoin-project/subcoin/blob/subcoin-milestone-3/Dockerfile The docker image is available at https://github.com/subcoin-project/subcoin/pkgs/container/subcoin/263310548?tag=v0.3.0   |   |
| 1.     | Article	       | <ul><li>[ ] </li></ul> | 	https://liuchengxu.notion.site/Subcoin-A-Step-Toward-Decentralized-Fast-Sync-for-Bitcoin-68762427a4484d73906a91602d789be9 |  |
| 2.     | Bitcoin Transaction Broadcasting  | <ul><li>[ ] </li></ul> |  https://github.com/subcoin-project/subcoin/blob/subcoin-milestone-3/docs/src/test_bitcoin_transaction_broadcasting.md |  |

# General Notes
 

## Documentation

## Tests


<details>

</details>

## Docker


<details>

````
ubuntu@ip-172-31-30-101:~/subcoin$ sudo docker build .
[+] Building 1843.6s (12/12) FINISHED                            docker:default
 => [internal] load build definition from Dockerfile                       0.1s
 => => transferring dockerfile: 1.35kB                                     0.0s
 => [internal] load metadata for docker.io/library/ubuntu:22.04            1.3s
 => [internal] load .dockerignore                                          0.0s
 => => transferring context: 2B                                            0.0s
 => [internal] load build context                                        134.7s
 => => transferring context: 12.66GB                                     134.6s
 => [builder 1/5] FROM docker.io/library/ubuntu:22.04@sha256:340d9b015b19  3.5s
 => => resolve docker.io/library/ubuntu:22.04@sha256:340d9b015b194dc6e2a1  0.0s
 => => sha256:340d9b015b194dc6e2a13938944e0d016e57b967996 1.13kB / 1.13kB  0.0s
 => => sha256:0eb0f877e1c869a300c442c41120e778db7161419244ee5 424B / 424B  0.0s
 => => sha256:8a3cdc4d1ad3e314a91f76b7b99eed443f2152e3a9b 2.30kB / 2.30kB  0.0s
 => => sha256:3713021b02770a720dea9b54c03d0ed83e03a2ef5 29.53MB / 29.53MB  1.2s
 => => extracting sha256:3713021b02770a720dea9b54c03d0ed83e03a2ef5dce2898  2.0s
 => [builder 2/5] WORKDIR /src                                           146.8s
 => [builder 3/5] RUN apt-get update &&     DEBIAN_FRONTEND=noninteracti  43.5s
 => [builder 4/5] COPY . .                                               176.3s 
 => [builder 5/5] RUN /root/.cargo/bin/cargo build     --locked     --  1465.3s 
 => [stage-1 2/3] COPY --from=builder /subcoin /subcoin                    0.2s 
 => [stage-1 3/3] RUN mkdir /node-data && chown nobody:nogroup /node-data  0.2s 
 => exporting to image                                                     0.3s 
 => => exporting layers                                                    0.3s 
 => => writing image sha256:9037f7d697a3625c15bc64fd85433e07bc5ebf0aebe98  0.0s
 ````

 ````
root@ip-172-31-30-101:/home/ubuntu/subcoin# docker run --user root subv2 run
2024-08-18 14:49:23 Subcoin Node    
2024-08-18 14:49:23 ✌️  version 0.1.0-b35da7ae2a4    
2024-08-18 14:49:23 ❤️  by xuliuchengxlc@gmail.com, 2024-2024    
2024-08-18 14:49:23 📋 Chain specification: Bitcoin    
2024-08-18 14:49:23 🏷  Node name: lacking-harbor-7709    
2024-08-18 14:49:23 👤 Role: FULL    
2024-08-18 14:49:23 💾 Database: ParityDb at /root/.local/share/subcoin/chains/mainnet/paritydb/full    
2024-08-18 14:49:23 🔨 Initializing Genesis block/state (state: 0xf5c9…79d3, header-hash: 0x9f00…6b6c)    
2024-08-18 14:49:25 🏁 CPU score: 693.98 MiBs    
2024-08-18 14:49:25 🏁 Memory score: 10.05 GiBs    
2024-08-18 14:49:25 🏁 Disk score (seq. writes): 212.38 MiBs    
2024-08-18 14:49:25 🏁 Disk score (rand. writes): 93.89 MiBs    
2024-08-18 14:49:25 📦 Highest known block at #0
2024-08-18 14:49:25 Running JSON-RPC server: addr=127.0.0.1:9944, allowed origins=[]    
2024-08-18 14:49:25 🔊 Listening on 127.0.0.1:8333
2024-08-18 14:49:30 ⚙️  Syncing, target=#857354 (6 peers), best: #0 (0000…8ce26f,0x9f00…6b6c), finalized #0 (0000…8ce26f,0x9f00…6b6c), ⬇ 36.2kiB/s ⬆ 0.4kiB/s
2024-08-18 14:49:35 ⚙️  Syncing  0.0 bps, target=#857354 (6 peers), best: #0 (0000…8ce26f,0x9f00…6b6c), finalized #0 (0000…8ce26f,0x9f00…6b6c), ⬇ 0 ⬆ 0
2024-08-18 14:49:40 ⚙️  Syncing  0.0 bps, target=#857354 (7 peers), best: #0 (0000…8ce26f,0x9f00…6b6c), finalized #0 (0000…8ce26f,0x9f00…6b6c), ⬇ 67 B/s ⬆ 53  

````

</details>





