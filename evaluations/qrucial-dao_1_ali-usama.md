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