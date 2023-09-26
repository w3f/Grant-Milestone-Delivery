# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/chainviz.md
- **Milestone:** 1
- **Evaluation by:** keeganquigley

| Number | Deliverable | Accepted | Link | Notes                                              |
| -------- | ----------- | -----------|-----------| ----------- |
| 0a.     | License                           | <ul><li>[x] </li></ul> | [GNU GPL v3.0](https://github.com/helikon-labs/chainviz/blob/main/LICENSE)                                                      |                                                                                                 |
| 0b.     | Documentation                  | <ul><li>[x] </li></ul> | [Article](https://medium.com/helikon/introducing-chainviz-v1-a-new-kind-of-block-explorer-6b9f4ed83e8d), [Source Code](https://github.com/helikon-labs/chainviz)                                                                       |                                                                                 |
| 0c.     | Testing Guide                | <ul><li>[x] </li></ul> | [Link](https://github.com/helikon-labs/chainviz/blob/main/TEST.md)                                                                   |                                                                                |
| 0d.     | Docker                       | <ul><li>[x] </li></ul> | [Repository](https://hub.docker.com/repository/docker/helikon/chainviz/general)                                          |                                |
| 0e.     | Video Article                    | <ul><li>[x] </li></ul> | [YouTube](https://www.youtube.com/watch?v=SJCATTnbgqA&ab_channel=HelikonLabs)                                                  |                                                        |
| 1a.     | Web Application Source Code                     | <ul><li>[x] </li></ul> | [Repository](https://github.com/helikon-labs/chainviz)                                          |                |
| 1b.     | Deployment                    | <ul><li>[x] </li></ul> | [chainviz.app](https://chainviz.app)                                        |              

# General Notes

<details>

  <summary>App starts successfully</summary>

  ```ts
> chainviz@1.0.0 dev
> webpack serve --config ./src/client/webpack.dev.js

<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:8080/
<i> [webpack-dev-server] On Your Network (IPv4): http://10.0.0.131:8080/
<i> [webpack-dev-server] On Your Network (IPv6): http://[fe80::1]:8080/
<i> [webpack-dev-server] Content not from webpack is served from '/Users/keeganquigley/chainviz/dist/client' directory
asset bundle.js 11.6 MiB [emitted] (name: main)
orphan modules 456 KiB [orphan] 609 modules
runtime modules 27.5 KiB 13 modules
modules by path ./node_modules/ 3.48 MiB 839 modules
modules by path ./src/client/ 203 KiB
  modules by path ./src/client/ui/*.ts 58.5 KiB 11 modules
  modules by path ./src/client/util/*.ts 11.1 KiB 9 modules
  modules by path ./src/client/model/ 2.07 KiB 3 modules
  modules by path ./src/client/data/*.ts 66.1 KiB 3 modules
  modules by path ./src/client/scene/*.ts 45.7 KiB 3 modules
  modules by path ./src/client/*.ts 12.2 KiB 2 modules
  modules by path ./src/client/event/*.ts 3.15 KiB 2 modules
  ./src/client/service/rpc/rpc-subscription-service.ts 3.94 KiB [built] [code generated]
buffer (ignored) 15 bytes [optional] [built] [code generated]
webpack 5.88.2 compiled successfully in 3887 ms
```
</details>

<details>

  <summary>Docker build starts successfully</summary>

  ```sh
[+] Building 68.7s (15/15) FINISHED
 => [internal] load build definition from chainviz.dockerfile                                                        0.0s
 => => transferring dockerfile: 370B                                                                                 0.0s
 => [internal] load .dockerignore                                                                                    0.0s
 => => transferring context: 109B                                                                                    0.0s
 => [internal] load metadata for docker.io/library/node:18.17.1-bookworm-slim                                        1.5s
 => [internal] load build context                                                                                    0.1s
 => => transferring context: 3.26MB                                                                                  0.1s
 => [ 1/10] FROM docker.io/library/node:18.17.1-bookworm-slim@sha256:e5c8c319295f6cbc288e19506a9ac37afa3b330f4e38af  3.2s
 => => resolve docker.io/library/node:18.17.1-bookworm-slim@sha256:e5c8c319295f6cbc288e19506a9ac37afa3b330f4e38afb0  0.0s
 => => sha256:e5c8c319295f6cbc288e19506a9ac37afa3b330f4e38afb01d1269b579cf6a5b 1.21kB / 1.21kB                       0.0s
 => => sha256:9d2bb3454eb710303b1bb396083e7f9100eb2adafee3ef5ffd953e691c531409 1.37kB / 1.37kB                       0.0s
 => => sha256:7ba67421320b2177e59a96a0a1f4c13bf420c9ee653648b0423e6919b00966d4 7.03kB / 7.03kB                       0.0s
 => => sha256:155eab17d86c47443adc8cebe7fc62c847c03db8cfb1ca53aa6276564fff23ef 29.16MB / 29.16MB                     1.6s
 => => sha256:10fc951f2114cd46ad673fb0643aa677bb9d144377b98820ef3c8aace3d5f404 3.35kB / 3.35kB                       0.1s
 => => sha256:1bd36d261a13ceb6aea907473b7295662b5bd2f6706c38b50bcf2b5dcc46b68f 46.32MB / 46.32MB                     1.7s
 => => sha256:ea8b9e6b3c1bba661a306a7ccc5ec41ce74a2f9212bc74dbebf04a283aed1419 2.74MB / 2.74MB                       0.7s
 => => sha256:6989448a74eb59ab85a4b5c32773029bd5d71aedaa1b851eaadf0eb8f9f4d651 450B / 450B                           0.9s
 => => extracting sha256:155eab17d86c47443adc8cebe7fc62c847c03db8cfb1ca53aa6276564fff23ef                            0.5s
 => => extracting sha256:10fc951f2114cd46ad673fb0643aa677bb9d144377b98820ef3c8aace3d5f404                            0.0s
 => => extracting sha256:1bd36d261a13ceb6aea907473b7295662b5bd2f6706c38b50bcf2b5dcc46b68f                            0.7s
 => => extracting sha256:ea8b9e6b3c1bba661a306a7ccc5ec41ce74a2f9212bc74dbebf04a283aed1419                            0.1s
 => => extracting sha256:6989448a74eb59ab85a4b5c32773029bd5d71aedaa1b851eaadf0eb8f9f4d651                            0.0s
 => [ 2/10] WORKDIR /usr/src/app                                                                                     0.3s
 => [ 3/10] RUN adduser chainviz                                                                                     0.2s
 => [ 4/10] COPY ./package.json ./                                                                                   0.0s
 => [ 5/10] COPY ./tsconfig.json ./                                                                                  0.0s
 => [ 6/10] COPY ./src ./src                                                                                         0.0s
 => [ 7/10] COPY ./dist ./dist                                                                                       0.0s
 => [ 8/10] RUN chown -R chainviz:chainviz /usr/src/app                                                              0.3s
 => [ 9/10] RUN npm install --ignore-scripts                                                                        47.5s
 => [10/10] RUN npm run build                                                                                       13.5s
 => exporting to image                                                                                               2.1s
 => => exporting layers                                                                                              2.1s
 => => writing image sha256:a2d5ee0bb111e7ebb582f499160852a42cbad0e01b5ff6683edd9b344be30d68                         0.0s
 => => naming to docker.io/helikon/chainviz:1.0.0
 ```
</details>

<details>

  <summary>Helikon Docker Hub image works</summary>

  ```sh
docker pull helikon/chainviz:1.0.0
1.0.0: Pulling from helikon/chainviz
155eab17d86c: Already exists
10fc951f2114: Already exists
1bd36d261a13: Already exists
ea8b9e6b3c1b: Already exists
6989448a74eb: Already exists
44a2357b439c: Pull complete
5a841f468b5f: Pull complete
b688e67979e7: Pull complete
cc7e8e3c5c97: Pull complete
4e257fef09f3: Pull complete
426ce65f7c7f: Pull complete
2ba7af354f54: Pull complete
be8d289ef4b4: Pull complete
9821bdbe56ea: Pull complete
Digest: sha256:c8772ba01fb595a4f20de5c724f69b09a0eb9abc9d21129a0ae4df7b23c8b19e
Status: Downloaded newer image for helikon/chainviz:1.0.0
docker.io/helikon/chainviz:1.0.0
docker run --name chainviz -p 8080:8080 -d helikon/chainviz:1.0.0
347f8b6a82a8bde3fa1f0504ffc6895bee63ddcb38f6017a420789ae5a3d31f5
docker ps
CONTAINER ID   IMAGE                    COMMAND                  CREATED          STATUS          PORTS                    NAMES
347f8b6a82a8   helikon/chainviz:1.0.0   "docker-entrypoint.s…"   16 seconds ago   Up 15 seconds   0.0.0.0:8080->8080/tcp   chainviz
```
</details>
