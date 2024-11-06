# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/polkadart_extension.md
- **Milestone:** 1
- **Evaluation by:** keeganquigley

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| 0a. | License | <ul><li>[x] </li></ul> | https://github.com/polkadart/docs/blob/main/LICENSE | | 
| 0b.  | Documentation | <ul><li>[x] </li></ul> | https://polkadart.dev | Very robust docs, nice job!| 
| 1a.  | API docs | <ul><li>[x] </li></ul> | https://polkadart.dev/api/overview | Great docs| 
| 1c.  | API examples | <ul><li>[x] </li></ul> | https://polkadart.dev/api/state/#sample-usage | Examples work as expected. | 
| 2a.  | Metadata docs | <ul><li>[x] </li></ul> | https://polkadart.dev/metadata/overview | Good| 
| 2b.  | Metadata examples | <ul><li>[x] </li></ul> | https://polkadart.dev/metadata/overview/#example-stateapi | Examples work as expected. | 
| 3a.  | Keyring docs | <ul><li>[x] </li></ul> | https://polkadart.dev/keyring-signer/overview | Good | 
| 3b.  | Keyring examples | <ul><li>[x] </li></ul> | https://polkadart.dev/keyring-signer/keypair | Examples work as expected. | 
| 1d.  | API faq | <ul><li>[x] </li></ul> | http://polkadart.dev/guides/listen-blocks | Good | 
| 2c.  | Metadata faq | <ul><li>[x] </li></ul> | https://polkadart.dev/guides/read-storage | Good | 
| 3c.  | Keyring faq | <ul><li>[x] </li></ul> | http://localhost:4321/guides/make-transfer | Good | 

# General Notes

Docker builds successfully:
```sh
ubuntu@ip-172-31-24-52:~/polkadart$ docker build -t my-image .
[+] Building 665.0s (13/13) FINISHED                                                                                                      docker:default
 => [internal] load build definition from Dockerfile                                                                                                0.0s
 => => transferring dockerfile: 282B                                                                                                                0.0s
 => [internal] load metadata for docker.io/library/dart:stable                                                                                      0.8s
 => [internal] load .dockerignore                                                                                                                   0.0s
 => => transferring context: 119B                                                                                                                   0.0s
 => [1/8] FROM docker.io/library/dart:stable@sha256:ca3fbf2ea7d95637c3524246050a6f8e23e59ff11d6d72663d151ebadf46cf09                                0.0s
 => [internal] load build context                                                                                                                   4.7s
 => => transferring context: 820.47MB                                                                                                               4.6s
 => CACHED [2/8] RUN apt-get update                                                                                                                 0.0s
 => CACHED [3/8] RUN apt-get clean                                                                                                                  0.0s
 => CACHED [4/8] RUN apt-get install -y curl git wget unzip libglu1-mesa                                                                            0.0s
 => CACHED [5/8] RUN dart pub global activate melos                                                                                                 0.0s
 => [6/8] COPY . .                                                                                                                                 12.2s
 => [7/8] RUN melos fetch_dependencies                                                                                                             24.6s
 => [8/8] RUN melos test                                                                                                                          618.0s 
 => exporting to image                                                                                                                              4.5s 
 => => exporting layers                                                                                                                             4.4s 
 => => writing image sha256:e3b8fcc09d36b23645bd4819c8fd6b6fb9f68014f6940a12d731c36bcd3c5196                                                        0.0s 
 => => naming to docker.io/library/my-image
```

Runs successfully:
```sh
ubuntu@ip-172-31-24-52:~/polkadart$ docker ps
CONTAINER ID   IMAGE      COMMAND   CREATED          STATUS          PORTS     NAMES
50eae4761fbb   my-image   "bash"    47 seconds ago   Up 47 seconds             sharp_babbage
```
No unit tests as the milestone was mostly documentation based.

