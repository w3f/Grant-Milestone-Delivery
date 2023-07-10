# Evaluation

- **Status:** Accepted
- **Application Document:** [Qrucial-dao](https://github.com/w3f/Grants-Program/blob/master/applications/QRUCIAL_DAO.md) 
- **Milestone:** 2
- **Kusama Identity:** Eexv1mKLiCidz2gGh6vfowtXgSSc7mvD4xEb2ji998W4DPs
- **Previously successfully merged evaluation:** All evaluations by ali-usama

| Number | Deliverable          | Accepted               | Link                                                                                                                                                                                                                                         | Evaluation Notes                                                         |
|--------|----------------------|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| 0a.    | Licence              | <ul><li>[x] </li></ul> | [Apache](https://github.com/Qrucial/QRUCIAL-DAO/blob/milestone2/LICENSE)                                                                                                                                                                     | Correct Licence                                                          |
| 0b.    | Documentation        | <ul><li>[x] </li></ul> | [Wiki](https://github.com/Qrucial/QRUCIAL-DAO/wiki)                                                                                                                                                                                          | Well-Structured and Well-explained docs                                  |
| 0c.    | Testing Guide        | <ul><li>[x] </li></ul> | [Development & Testing Guide](https://github.com/Qrucial/QRUCIAL-DAO/wiki/Development-and-testing-guide)                                                                                                                                     | Very well-written test guide explaining all steps, and works as expected |
| 0d.    | Docker               | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/Qrucial/QRUCIAL-DAO/blob/milestone2/docker/files/dockerfile)<br/>[Docker Setup](https://github.com/Qrucial/QRUCIAL-DAO/wiki/How-to-run-your-own-node#option-1-running-node-using-docker-limited-performance) | Builds & works fine                                                      |
| 0e.    | Article              | <ul><li>[x] </li></ul> | [Article](https://cryptoctf.org/2023/06/08/delivery-of-qdao-milestone-2/)                                                                                                                                                                    | Well-written article                                                     |
| 1.     | ExoSys Daemon        | <ul><li>[x] </li></ul> | [Source code](https://github.com/Qrucial/QRUCIAL-DAO/tree/milestone2/exosysd)                                                                                                                                                                | Works as per application                                                 |
| 2.     | QRUCIAL DAO Frontend | <ul><li>[x] </li></ul> | [Frontend code](https://github.com/Qrucial/QRUCIAL-DAO/tree/milestone2/frontend/substrate-front-end-template)                                                                                                                                | Works aa per application                                                 |
| 3.     | ExoTool-CCA          | <ul><li>[x] </li></ul> | [Audit Script](https://github.com/Qrucial/QRUCIAL-DAO/blob/milestone2/exotools/docker/docker_files/scripts/audit_script.sh)                                                                                                                  | Works as per application                                                 |
| 4.     | ExoTool-Octopus      | <ul><li>[x] </li></ul> | [Audit Script](https://github.com/Qrucial/QRUCIAL-DAO/blob/milestone2/exotools/docker/docker_files/scripts/audit_script.sh)                                                                                                                  | Works as per application                                                 |


## General Notes

The delivery is well-structured and well-documented and it works according to the application as well. However, the size of the docker image is quite large and if it could be optimized that would be great.
Also there are some steps missing [here](https://github.com/Qrucial/QRUCIAL-DAO/wiki/How-to-run-your-own-node#option-1-running-node-using-docker-limited-performance) as there's no dockerfile in the root directory.
So `cd docker/files` should be added before `docker build . -t "qdao:V0.3"`.

### docker output
```
$ docker build . -t "qdao:V0.3"
[+] Building 3866.2s (25/25) FINISHED                                                                                                                             
 => [internal] load build definition from dockerfile                                                                                                         0.0s
 => => transferring dockerfile: 1.71kB                                                                                                                       0.0s
 => [internal] load .dockerignore                                                                                                                            0.0s
 => => transferring context: 2B                                                                                                                              0.0s
 => [internal] load metadata for docker.io/paritytech/ci-linux:production                                                                                    4.6s
 => [ 1/20] FROM docker.io/paritytech/ci-linux:production@sha256:cbfcd99ba4f43366edadc2dc2276ad81b306c4968077eeb7a496595ac081129a                         1436.1s
 => => resolve docker.io/paritytech/ci-linux:production@sha256:cbfcd99ba4f43366edadc2dc2276ad81b306c4968077eeb7a496595ac081129a                              0.0s
 => => sha256:cbfcd99ba4f43366edadc2dc2276ad81b306c4968077eeb7a496595ac081129a 762B / 762B                                                                   0.0s
 => => sha256:8ee2ebf1b7d7aba267e7abc3670e059f30f22d20a706ec5cb5628942990c661b 10.01kB / 10.01kB                                                             0.0s
 => => sha256:759700526b7894aa9c150feb2ebfcd00cf06d2890df739e71555edcfd13669e3 31.42MB / 31.42MB                                                            49.6s
 => => sha256:c753b89dba9b2a88d31f9703ef9e4c54dc000ac65476c45d00d666a5d655c9aa 588.49MB / 588.49MB                                                        1405.5s
 => => sha256:479a59d03583b860b31a3bf5a6034434b0ad61e7d7bcd6bb5b4e1f7639b46ca3 403.78MB / 403.78MB                                                         776.0s
 => => extracting sha256:759700526b7894aa9c150feb2ebfcd00cf06d2890df739e71555edcfd13669e3                                                                    1.7s
 => => extracting sha256:c753b89dba9b2a88d31f9703ef9e4c54dc000ac65476c45d00d666a5d655c9aa                                                                   19.4s
 => => extracting sha256:479a59d03583b860b31a3bf5a6034434b0ad61e7d7bcd6bb5b4e1f7639b46ca3                                                                   10.2s
 => [internal] load build context                                                                                                                            0.0s
 => => transferring context: 73B                                                                                                                             0.0s
 => [ 2/20] RUN apt update                                                                                                                                  14.6s
 => [ 3/20] RUN apt-get install -y supervisor tmux curl wget python3 python3-setuptools                                                                      6.8s
 => [ 4/20] RUN python3 -m pip install --upgrade pip setuptools wheel                                                                                        9.6s 
 => [ 5/20] RUN pip3 install Flask substrate-interface                                                                                                      30.1s 
 => [ 6/20] RUN cargo install keccak256-cli                                                                                                                 30.6s 
 => [ 7/20] ADD scripts/qdao_services.sh /bin/qdao_services.sh                                                                                               0.0s 
 => [ 8/20] RUN mkdir /opt/data                                                                                                                              0.2s 
 => [ 9/20] RUN echo "Downloading git repo..."                                                                                                               0.3s 
 => [10/20] RUN if [ -d "/opt/data/QRUCIAL-DAO" ]; then   echo "QRUCIAL-DAO exists";   ( cd /opt/data/QRUCIAL-DAO && git pull https://github.com/Qrucial/Q  12.9s 
 => [11/20] RUN echo "Compiling exosys..."                                                                                                                   0.2s 
 => [12/20] RUN if [ ! -f "/opt/data/QRUCIAL-DAO/exosysd/target/release/qdao-exosysd" ]; then   ( cd /opt/data/QRUCIAL-DAO/exosysd && cargo build --relea  198.9s 
 => [13/20] RUN echo "Compiling qdao-node..."                                                                                                                0.2s
 => [14/20] RUN if [ ! -f "/opt/data/QRUCIAL-DAO/qdao-node/target/release/qdao-node" ]; then   ( cd /opt/data/QRUCIAL-DAO/qdao-node && cargo build --rel  2069.6s 
 => [15/20] RUN mkdir -p ~/QRUCIAL-DAO/exotools/                                                                                                             0.3s 
 => [16/20] RUN cp /opt/data/QRUCIAL-DAO/exotools/exotool.sh ~/QRUCIAL-DAO/exotools/                                                                         0.3s 
 => [17/20] RUN chmod +x ~/QRUCIAL-DAO/exotools/exotool.sh                                                                                                   0.2s 
 => [18/20] RUN chmod +x /opt/data/QRUCIAL-DAO/qdao-node/target/release/qdao-node                                                                            0.4s 
 => [19/20] RUN chmod +x /opt/data/QRUCIAL-DAO/exosysd/target/release/qdao-exosysd                                                                           0.2s 
 => [20/20] RUN chmod +x /bin/qdao_services.sh                                                                                                               0.2s 
 => exporting to image                                                                                                                                      49.5s
 => => exporting layers                                                                                                                                     49.5s
 => => writing image sha256:32da4b934206643b46f1af26763b82e553d41913b5a9fbeed9ecb05f5d651cc2                                                                 0.0s
 => => naming to docker.io/library/qdao:V0.3
```

