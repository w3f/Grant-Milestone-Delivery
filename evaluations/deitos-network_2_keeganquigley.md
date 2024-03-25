# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Deitos_Network.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Description | Accepted | Link 
| -----: | ----------- | ----------- | -----------
| **0a.** | Deitos Node License | <ul><li>[x] </li></ul> | https://github.com/Deitos-Network/deitos-node/blob/w3f-grant-m2-delivery/LICENSE
| **0a.** | Deitos IP stack License | <ul><li>[x] </li></ul> | https://github.com/Deitos-Network/deitos-ip/blob/w3f-grant-m2-delivery/LICENSE
| **0a.** | Deitos CLI | <ul><li>[x] </li></ul> | https://github.com/Deitos-Network/deitos-cli/tree/w3f-grant-m2-delivery/LICENSE
| **0a.** | Deitos Gate License | <ul><li>[x] </li></ul> | https://github.com/Deitos-Network/deitos-gate/tree/w3f-grant-m2-delivery/LICENSE
| **0a.** | Deitos Verifier License | <ul><li>[x] </li></ul> | https://github.com/Deitos-Network/deitos-verifier/blob/w3f-grant-m2-delivery/LICENSE
| **0b.** | `pallet-deitos-fs` README Documentation | <ul><li>[x] </li></ul> | https://github.com/Deitos-Network/deitos-node/blob/w3f-grant-m2-delivery/pallets/deitos-fs/README.md 
| **0b.** | `pallet-deitos-fs` Inline Documentation | <ul><li>[x] </li></ul> | https://github.com/Deitos-Network/deitos-node/blob/w3f-grant-m2-delivery/pallets/deitos-fs/src/lib.rs
| **0b.** | Deitos IP Documentation | <ul><li>[x] </li></ul> | https://github.com/Deitos-Network/deitos-ip/blob/w3f-grant-m2-delivery/README.md
| **0c.** | `pallet-deitos-fs` Unit Testing | <ul><li>[x] </li></ul> | https://github.com/Deitos-Network/deitos-node/tree/w3f-grant-m2-delivery/pallets/deitos-fs/src/tests
| **0c.** | `pallet-deitos-fs` User Guide | <ul><li>[x] </li></ul> | https://github.com/Deitos-Network/deitos-node/blob/w3f-grant-m2-delivery/docs/pallet-deitos-user-guide.md (section 5)
| **0c.** |  Deitos IP Docker User Guide | <ul><li>[x] </li></ul> | https://github.com/Deitos-Network/deitos-ip/blob/w3f-grant-m2-delivery/README.md
| **0d.** | Deitos IP | <ul><li>[x] </li></ul> | https://github.com/Deitos-Network/deitos-ip/blob/w3f-grant-m2-delivery
| **0e.** | Article #1 | <ul><li>[x] </li></ul> | https://forum.polkadot.network/t/deitos-network-forging-a-new-path-in-big-data-and-ai-with-blockchain-technology/4961
| **0e.** | Article #2 | <ul><li>[x] </li></ul> | https://medium.com/@deitos.network/deitos-network-web3-foundation-grant-f267cb10e7a8
| **2.** |   File Uploads (Client Interface)  | <ul><li>[x] </li></ul> | https://github.com/Deitos-Network/deitos-cli/tree/w3f-grant-m2-delivery
| **3.** |  File Upload Verification (Provider Side) | <ul><li>[x] </li></ul> | https://github.com/Deitos-Network/deitos-verifier/tree/w3f-grant-m2-delivery
| **4.** |  Data Integrity Protocol | <ul><li>[x] </li></ul> | https://github.com/Deitos-Network/deitos-node/tree/w3f-grant-m2-delivery/pallets/deitos-fs/lib.rs

# General Notes

Great work! Was able to manually test the pallet functions and I was able to complete the user guide. Nice guides and inline docs. Articles are well written. `deitos-ip`, `deitos-node`, `deitos-client` all work as expected. Cooperates nicely alongside Hadoop, Jupyter, and Llama 2.

Docker builds successfully on Ubuntu:

<details>
   <summary>Output</summary>

```sh
docker build -t deitos-base-image ./base
[+] Building 238.8s (25/25) FINISHED                                                                                                      docker:default
 => [internal] load build definition from Dockerfile                                                                                                0.5s
 => => transferring dockerfile: 4.51kB                                                                                                              0.0s
 => [internal] load metadata for docker.io/library/ubuntu:latest                                                                                    1.5s
 => [internal] load .dockerignore                                                                                                                   0.1s
 => => transferring context: 2B                                                                                                                     0.0s
 => [ 1/20] FROM docker.io/library/ubuntu:latest@sha256:77906da86b60585ce12215807090eb327e7386c8fafb5402369e421f44eff17e                            2.0s
 => => resolve docker.io/library/ubuntu:latest@sha256:77906da86b60585ce12215807090eb327e7386c8fafb5402369e421f44eff17e                              0.0s
 => => sha256:77906da86b60585ce12215807090eb327e7386c8fafb5402369e421f44eff17e 1.13kB / 1.13kB                                                      0.0s
 => => sha256:aa772c98400ef833586d1d517d3e8de670f7e712bf581ce6053165081773259d 424B / 424B                                                          0.0s
 => => sha256:ca2b0f26964cf2e80ba3e084d5983dab293fdb87485dc6445f3f7bbfc89d7459 2.30kB / 2.30kB                                                      0.0s
 => => sha256:bccd10f490ab0f3fba61b193d1b80af91b17ca9bdca9768a16ed05ce16552fcb 29.54MB / 29.54MB                                                    0.4s
 => => extracting sha256:bccd10f490ab0f3fba61b193d1b80af91b17ca9bdca9768a16ed05ce16552fcb                                                           1.2s
 => [internal] load build context                                                                                                                   0.0s
 => => transferring context: 30.31kB                                                                                                                0.0s
 => [ 2/20] RUN apt-get -qq update   && DEBIAN_FRONTEND=noninteractive apt-get -qq install --no-install-recommends       sudo       openjdk-8-jdk  63.4s
 => [ 3/20] RUN echo jovyan ALL=(root) NOPASSWD:ALL > /etc/sudoers.d/jovyan  && chmod 0440 /etc/sudoers.d/jovyan  && groupadd -g 1001 jovyan  && u  0.4s 
 => [ 4/20] RUN set -x  && curl -fsSL https://archive.apache.org/dist/hadoop/common/KEYS -o /tmp/hadoop-KEYS  && gpg --import /tmp/hadoop-KEYS  &  41.2s 
 => [ 5/20] RUN set -x  && curl -fsSL https://archive.apache.org/dist/spark/KEYS -o /tmp/spark-KEYS   && gpg --import /tmp/spark-KEYS  && sudo mk  86.5s 
 => [ 6/20] RUN set -x  && curl -fsSL https://archive.apache.org/dist/hive/KEYS -o /tmp/hive-KEYS   && gpg --import /tmp/hive-KEYS  && sudo mkdir  31.3s 
 => [ 7/20] COPY --chown=jovyan:jovyan conf/core-site.xml /opt/hadoop/etc/hadoop/                                                                   0.1s 
 => [ 8/20] COPY --chown=jovyan:jovyan conf/hdfs-site.xml /opt/hadoop/etc/hadoop/                                                                   0.0s 
 => [ 9/20] COPY --chown=jovyan:jovyan conf/yarn-site.xml /opt/hadoop/etc/hadoop/                                                                   0.1s 
 => [10/20] COPY --chown=jovyan:jovyan conf/mapred-site.xml /opt/hadoop/etc/hadoop/                                                                 0.1s 
 => [11/20] COPY --chown=jovyan:jovyan conf/ssl-server.xml /opt/hadoop/etc/hadoop/                                                                  0.1s 
 => [12/20] COPY --chown=jovyan:jovyan conf/ssl-client.xml /opt/hadoop/etc/hadoop/                                                                  0.1s 
 => [13/20] COPY --chown=jovyan:jovyan conf/kms.xml /opt/hadoop/etc/hadoop/                                                                         0.1s
 => [14/20] COPY --chown=jovyan:jovyan conf/workers /opt/hadoop/etc/hadoop/                                                                         0.1s
 => [15/20] COPY --chown=jovyan:jovyan conf/spark-defaults.conf /opt/spark/conf/                                                                    0.1s
 => [16/20] COPY --chown=jovyan:jovyan conf/log4j.properties /opt/spark/conf/                                                                       0.1s
 => [17/20] COPY --chown=jovyan:jovyan conf/hive-site.xml /opt/hive/conf/                                                                           0.0s
 => [18/20] RUN ln /opt/hadoop/etc/hadoop/workers /opt/spark/conf/  && ln /opt/hive/conf/hive-site.xml /opt/spark/conf/                             0.3s
 => [19/20] COPY entrypoint.sh /usr/local/sbin/entrypoint.sh                                                                                        0.1s
 => [20/20] RUN sudo chmod a+x /usr/local/sbin/entrypoint.sh                                                                                        0.3s
 => exporting to image                                                                                                                              8.7s
 => => exporting layers                                                                                                                             8.7s
 => => writing image sha256:e0d77fe8bf7bde6541bcabb662168d46854229cf7b3ca8e4521baef9ddf60fd6                                                        0.0s
 => => naming to docker.io/library/deitos-base-image                                                                                                0.0s
docker build -t deitos-master-image ./master
[+] Building 5.3s (15/15) FINISHED                                                                                                        docker:default
 => [internal] load build definition from Dockerfile                                                                                                0.0s
 => => transferring dockerfile: 1.32kB                                                                                                              0.0s
 => [internal] load metadata for docker.io/library/deitos-base-image:latest                                                                         0.0s
 => [internal] load .dockerignore                                                                                                                   0.0s
 => => transferring context: 2B                                                                                                                     0.0s
 => [ 1/10] FROM docker.io/library/deitos-base-image:latest                                                                                         0.3s
 => [internal] load build context                                                                                                                   0.0s
 => => transferring context: 6.98kB                                                                                                                 0.0s
 => [ 2/10] RUN apt-get -qq update   && DEBIAN_FRONTEND=noninteractive apt-get -qq install --no-install-recommends       sudo       openjdk-8-jdk   3.2s
 => [ 3/10] RUN mkdir /home/jovyan/keytabs                                                                                                          0.3s
 => [ 4/10] RUN chown jovyan:root /home/jovyan/keytabs                                                                                              0.4s
 => [ 5/10] RUN mkdir -p /opt/hadoop/dfs/name                                                                                                       0.3s
 => [ 6/10] COPY --chown=jovyan:jovyan ldap/ou.ldif /home/jovyan/ou.ldif                                                                            0.1s
 => [ 7/10] COPY --chown=jovyan:jovyan ldap/group.ldif /home/jovyan/group.ldif                                                                      0.1s
 => [ 8/10] COPY --chown=jovyan:jovyan ldap/person.ldif /home/jovyan/person.ldif                                                                    0.0s
 => [ 9/10] COPY run.sh /usr/local/sbin/run.sh                                                                                                      0.0s
 => [10/10] RUN sudo chmod a+x /usr/local/sbin/run.sh                                                                                               0.2s
 => exporting to image                                                                                                                              0.2s
 => => exporting layers                                                                                                                             0.2s
 => => writing image sha256:c15c1a5500c0a7e05dabfc07e50f94622efc577caa5c72d4b509a745a6b31193                                                        0.0s
 => => naming to docker.io/library/deitos-master-image                                                                                              0.0s
docker build -t deitos-worker-image ./worker
[+] Building 1.5s (9/9) FINISHED                                                                                                          docker:default
 => [internal] load build definition from Dockerfile                                                                                                0.0s
 => => transferring dockerfile: 347B                                                                                                                0.0s
 => [internal] load metadata for docker.io/library/deitos-base-image:latest                                                                         0.0s
 => [internal] load .dockerignore                                                                                                                   0.0s
 => => transferring context: 2B                                                                                                                     0.0s
 => CACHED [1/4] FROM docker.io/library/deitos-base-image:latest                                                                                    0.0s
 => [internal] load build context                                                                                                                   0.1s
 => => transferring context: 3.98kB                                                                                                                 0.0s
 => [2/4] RUN mkdir -p /opt/hadoop/dfs/data                                                                                                         0.2s
 => [3/4] COPY run.sh /usr/local/sbin/run.sh                                                                                                        0.0s
 => [4/4] RUN sudo chmod a+x /usr/local/sbin/run.sh                                                                                                 0.2s
 => exporting to image                                                                                                                              0.1s
 => => exporting layers                                                                                                                             0.1s
 => => writing image sha256:f7229e65ff8483a7e1dc591fdf0d25d601812fab4b7eb9b06fe7ad49b027d193                                                        0.0s
 => => naming to docker.io/library/deitos-worker-image                                                                                              0.0s
docker build -t deitos-history-image ./history
[+] Building 0.6s (8/8) FINISHED                                                                                                          docker:default
 => [internal] load build definition from Dockerfile                                                                                                0.0s
 => => transferring dockerfile: 182B                                                                                                                0.0s
 => [internal] load metadata for docker.io/library/deitos-base-image:latest                                                                         0.0s
 => [internal] load .dockerignore                                                                                                                   0.0s
 => => transferring context: 2B                                                                                                                     0.0s
 => [internal] load build context                                                                                                                   0.0s
 => => transferring context: 3.77kB                                                                                                                 0.0s
 => CACHED [1/3] FROM docker.io/library/deitos-base-image:latest                                                                                    0.0s
 => [2/3] COPY run.sh /usr/local/sbin/run.sh                                                                                                        0.0s
 => [3/3] RUN sudo chmod a+x /usr/local/sbin/run.sh                                                                                                 0.3s
 => exporting to image                                                                                                                              0.1s
 => => exporting layers                                                                                                                             0.1s
 => => writing image sha256:e147a4ec6d3a9ec4a3651c89176f762d44f7fbef333270c0b8b3af604d05289b                                                        0.0s
 => => naming to docker.io/library/deitos-history-image                                                                                             0.0s
docker build -t deitos-jupyter-image ./jupyter
[+] Building 127.5s (16/19)                                                                                                               docker:default
[+] Building 129.4s (16/19)                                                                                                               docker:default
[+] Building 141.8s (20/20) FINISHED                                                                                                      docker:default
 => [internal] load build definition from Dockerfile                                                                                                0.0s
 => => transferring dockerfile: 1.58kB                                                                                                              0.0s
 => [internal] load metadata for docker.io/jupyter/minimal-notebook:python-3.10.4                                                                   1.4s
 => [internal] load metadata for docker.io/library/deitos-base-image:latest                                                                         0.0s
 => [internal] load .dockerignore                                                                                                                   0.0s
 => => transferring context: 2B                                                                                                                     0.0s
 => [stage-1  1/13] FROM docker.io/jupyter/minimal-notebook:python-3.10.4@sha256:edede2004c961f49d72a2451875e5d3b4104e076bc8abc3ffcaf04f3652f59aa  35.4s
 => => resolve docker.io/jupyter/minimal-notebook:python-3.10.4@sha256:edede2004c961f49d72a2451875e5d3b4104e076bc8abc3ffcaf04f3652f59aa             0.0s
 => => sha256:edede2004c961f49d72a2451875e5d3b4104e076bc8abc3ffcaf04f3652f59aa 743B / 743B                                                          0.0s
 => => sha256:d7bfe07ed8476565a440c2113cc64d7c0409dba8ef761fb3ec019d7e6b5952df 28.57MB / 28.57MB                                                    0.4s
 => => sha256:0222f0bdd757c884ea3a8ad51c54ca6dea59dc44b79b2194428d5c3ef5cd6dda 11.66kB / 11.66kB                                                    0.0s
 => => sha256:5a85f5dbd9e30b5fc8b42abde4453d56659bd36a892c0b26719f8a6b7bff40f8 37.11MB / 37.11MB                                                    1.5s
 => => sha256:c4b87d87dd6517148d8d98e4af34ae35ebdb29f2b02e95046656a03d27802fe8 685B / 685B                                                          0.6s
 => => sha256:232b587170f391dc82d00cf207491281509cfcea5f45758a837e7f7727b98139 3.65kB / 3.65kB                                                      0.0s
 => => extracting sha256:d7bfe07ed8476565a440c2113cc64d7c0409dba8ef761fb3ec019d7e6b5952df                                                           1.4s
 => => sha256:4f4fb700ef54461cfa02571ae0db9a0dc1e0cdb5577484a6d75e68dc38e8acc1 32B / 32B                                                            0.6s
 => => sha256:82ab29871e0547b28ed8111078430b3890785fdda205a34ccd7ea3f1a78dcc46 1.92kB / 1.92kB                                                      0.8s
 => => sha256:336f8c73141aa855f01b357fbe6cc33b62805d00179fbe4c235426daa0c96768 4.53kB / 4.53kB                                                      1.1s
 => => sha256:2c920feb5ad1c4d0fc09e5ca940552945be5ffbfa39c7ba377c9f0180c324dc2 162B / 162B                                                          1.2s
 => => sha256:6f42fb2ddae962d9ea53df9b2d21cf1909fae1a3a55453912157f6e72be43c52 287B / 287B                                                          1.3s
 => => sha256:15b447323bc684a97a62571ee662a0ae8f9681d6353acddf3ad4dec94f466681 180.60MB / 180.60MB                                                  5.2s
 => => sha256:ff6d6f1576750f5abba9a6ee9f1546cf5b58bcc74d0ebf4348db54835d0c5de4 4.53kB / 4.53kB                                                      1.8s  => => sha256:700b99c7a20f48175baecc4e1f7d488f185b9f6df44e30522999ff72f7a5d971 995B / 995B                                                          1.9s  => => sha256:c4285eda0fcb4842ff71687fe00e9224a1f8dc3bd3bcf18096a65d8e76589a2b 221.81MB / 221.81MB                                                  9.3s 
 => => sha256:368fbc96a2ca6964c8007ed4bf84ef232d4b9433912e355984d3fe9b6a727c2e 1.08kB / 1.08kB                                                      2.1s
 => => extracting sha256:5a85f5dbd9e30b5fc8b42abde4453d56659bd36a892c0b26719f8a6b7bff40f8                                                           1.8s
 => => sha256:61379c513b778119312d0a7d7b2ed2fc0958acf7b0ba9fb87ad1a81340a08b83 1.43kB / 1.43kB                                                      2.6s
 => => extracting sha256:c4b87d87dd6517148d8d98e4af34ae35ebdb29f2b02e95046656a03d27802fe8                                                           0.0s
 => => extracting sha256:4f4fb700ef54461cfa02571ae0db9a0dc1e0cdb5577484a6d75e68dc38e8acc1                                                           0.0s
 => => extracting sha256:82ab29871e0547b28ed8111078430b3890785fdda205a34ccd7ea3f1a78dcc46                                                           0.0s
 => => extracting sha256:336f8c73141aa855f01b357fbe6cc33b62805d00179fbe4c235426daa0c96768                                                           0.0s
 => => extracting sha256:2c920feb5ad1c4d0fc09e5ca940552945be5ffbfa39c7ba377c9f0180c324dc2                                                           0.0s
 => => extracting sha256:6f42fb2ddae962d9ea53df9b2d21cf1909fae1a3a55453912157f6e72be43c52                                                           0.0s
 => => extracting sha256:15b447323bc684a97a62571ee662a0ae8f9681d6353acddf3ad4dec94f466681                                                          11.8s
 => => extracting sha256:ff6d6f1576750f5abba9a6ee9f1546cf5b58bcc74d0ebf4348db54835d0c5de4                                                           0.0s
 => => extracting sha256:700b99c7a20f48175baecc4e1f7d488f185b9f6df44e30522999ff72f7a5d971                                                           0.0s
 => => extracting sha256:368fbc96a2ca6964c8007ed4bf84ef232d4b9433912e355984d3fe9b6a727c2e                                                           0.0s
 => => extracting sha256:c4285eda0fcb4842ff71687fe00e9224a1f8dc3bd3bcf18096a65d8e76589a2b                                                          15.8s
 => => extracting sha256:61379c513b778119312d0a7d7b2ed2fc0958acf7b0ba9fb87ad1a81340a08b83                                                           0.0s
 => [internal] load build context                                                                                                                   0.0s
 => => transferring context: 4.96kB                                                                                                                 0.0s
 => CACHED [base 1/1] FROM docker.io/library/deitos-base-image:latest                                                                               0.0s
 => [stage-1  2/13] RUN apt-get -qq update   && DEBIAN_FRONTEND=noninteractive apt-get -qq install --no-install-recommends       sudo       openj  43.9s
 => [stage-1  3/13] COPY run.sh /home/jovyan/run.sh                                                                                                 0.0s
 => [stage-1  4/13] RUN sudo chmod 755 /home/jovyan/run.sh                                                                                          0.3s
 => [stage-1  5/13] RUN mkdir /home/jovyan/keytabs                                                                                                  0.3s
 => [stage-1  6/13] RUN chown jovyan:root /home/jovyan/keytabs                                                                                      0.3s
 => [stage-1  7/13] COPY --from=base  /opt/hadoop /opt/hadoop                                                                                      27.3s
 => [stage-1  8/13] COPY --from=base  /opt/spark /opt/spark                                                                                         5.3s
 => [stage-1  9/13] COPY --from=base  /opt/hive /opt/hive                                                                                           2.5s
 => [stage-1 10/13] RUN pip install -U pip                                                                                                          3.7s
 => [stage-1 11/13] RUN pip install --no-cache-dir     pandas     openpyxl     findspark                                                           12.6s
 => [stage-1 12/13] COPY notebook /home/jovyan/work                                                                                                 0.0s
 => [stage-1 13/13] COPY test /home/jovyan/test                                                                                                     0.1s
 => exporting to image                                                                                                                              8.6s
 => => exporting layers                                                                                                                             8.6s
 => => writing image sha256:442dcc1a3c6f3837ed2faa1355c41ba24103817d971d757bcc682e0cf7bc6111                                                        0.0s
 => => naming to docker.io/library/deitos-jupyter-image                                                                                             0.0s
docker build -t deitos-llama2-image ./llama2
[+] Building 90.9s (8/12)                                                                                                                 docker:default
[+] Building 91.0s (8/12)                                                                                                                 docker:default
[+] Building 91.2s (8/12)                                                                                                                 docker:default
[+] Building 91.3s (8/12)                                                                                                                 docker:default
[+] Building 91.5s (8/12)                                                                                                                 docker:default
[+] Building 91.6s (8/12)                                                                                                                 docker:default
[+] Building 91.8s (8/12)                                                                                                                 docker:default
[+] Building 92.1s (8/12)                                                                                                                 docker:default
[+] Building 92.2s (8/12)                                                                                                                 docker:default
[+] Building 92.4s (8/12)                                                                                                                 docker:default
[+] Building 92.8s (8/12)                                                                                                                 docker:default
[+] Building 93.0s (8/12)                                                                                                                 docker:default
[+] Building 93.1s (8/12)                                                                                                                 docker:default
[+] Building 98.1s (8/12)                                                                                                                 docker:default
[+] Building 98.2s (8/12)                                                                                                                 docker:default
[+] Building 98.4s (8/12)                                                                                                                 docker:default
[+] Building 98.5s (8/12)                                                                                                                 docker:default
[+] Building 98.7s (8/12)                                                                                                                 docker:default
[+] Building 98.8s (8/12)                                                                                                                 docker:default
[+] Building 99.0s (8/12)                                                                                                                 docker:default
[+] Building 99.1s (8/12)                                                                                                                 docker:default
[+] Building 99.3s (8/12)                                                                                                                 docker:default
[+] Building 99.4s (8/12)                                                                                                                 docker:default
[+] Building 99.6s (8/12)                                                                                                                 docker:default
[+] Building 99.7s (8/12)                                                                                                                 docker:default
[+] Building 99.9s (8/12)                                                                                                                 docker:default [+] Building 100.0s (8/12)                                                                                                                docker:default [+] Building 100.2s (8/12)                                                                                                                docker:default [+] Building 100.3s (8/12)                                                                                                                docker:default [+] Building 105.2s (8/12)                                                                                                                docker:default [+] Building 106.5s (8/12)                                                                                                                docker:default [+] Building 106.9s (8/12)                                                                                                                docker:default [+] Building 107.1s (8/12)                                                                                                                docker:default [+] Building 107.5s (8/12)                                                                                                                docker:default [+] Building 114.1s (8/12)                                                                                                                docker:default [+] Building 114.6s (8/12)                                                                                                                docker:default [+] Building 114.9s (8/12)                                                                                                                docker:default [+] Building 121.9s (8/12)                                                                                                                docker:default [+] Building 147.9s (13/13) FINISHED                                                                                                      docker:default  => [internal] load build definition from Dockerfile                                                                                                0.0s  => => transferring dockerfile: 397B                                                                                                                0.0s  => [internal] load metadata for docker.io/library/python:3.9                                                                                       1.2s  => [internal] load .dockerignore                                                                                                                   0.0s  => => transferring context: 2B                                                                                                                     0.0s  => [1/8] FROM docker.io/library/python:3.9@sha256:2bcc365751dcb3099062695aec15bc05086e36876c0a196a3a6e57d76dcf80a6                                17.7s  => => resolve docker.io/library/python:3.9@sha256:2bcc365751dcb3099062695aec15bc05086e36876c0a196a3a6e57d76dcf80a6                                 0.0s  => => sha256:2bcc365751dcb3099062695aec15bc05086e36876c0a196a3a6e57d76dcf80a6 1.86kB / 1.86kB                                                      0.0s  => => sha256:14dfba14e8062d9ec96b94f2a9c7b59f00ac4d1b7abada804daa4cefabc814e4 7.33kB / 7.33kB                                                      0.0s  => => sha256:3cb8f9c23302e175d87a827f0a1c376bd59b1f6949bd3bc24ab8da0d669cdfa0 24.05MB / 24.05MB                                                    1.0s  => => sha256:1023bd4c5e0e6b7f4f612b034627826d91ec78ae0439313450ec30c0ad60c908 2.01kB / 2.01kB                                                      0.0s  => => sha256:71215d55680cf0ab2dcc0e1dd65ed76414e3fb0c294249b5b9319a8fa7c398e4 49.55MB / 49.55MB                                                    1.9s  => => sha256:5f899db30843f8330d5a40d1acb26bb00e93a9f21bff253f31c20562fa264767 64.14MB / 64.14MB                                                    2.5s  => => sha256:567db630df8d441ffe43e050ede26996c87e3b33c99f79d4fba0bf6b7ffa0213 211.14MB / 211.14MB                                                  5.6s  => => extracting sha256:71215d55680cf0ab2dcc0e1dd65ed76414e3fb0c294249b5b9319a8fa7c398e4                                                           2.5s  => => sha256:d68cd2123173935e339e3feb56980a0aefd7364ad43ca2b9750699e60fbf74c6 6.39MB / 6.39MB                                                      3.0s  => => sha256:dade860a2d46486368638b888860a83e77d1eaa84591f3e4ab82e6cf20e3c76d 15.82MB / 15.82MB                                                    2.9s  => => sha256:ae4968fa8c5e57851970a90d9a5c5f0453224c825bd82600662a83449cc03220 245B / 245B                                                          3.0s  => => sha256:0fb178dfc7b295c24a54e305f524fbc0ecbb233f6b5272b0eb45ea0068b017ea 2.85MB / 2.85MB                                                      5.7s  => => extracting sha256:3cb8f9c23302e175d87a827f0a1c376bd59b1f6949bd3bc24ab8da0d669cdfa0                                                           0.6s  => => extracting sha256:5f899db30843f8330d5a40d1acb26bb00e93a9f21bff253f31c20562fa264767                                                           2.6s  => => extracting sha256:567db630df8d441ffe43e050ede26996c87e3b33c99f79d4fba0bf6b7ffa0213                                                           6.8s  => => extracting sha256:d68cd2123173935e339e3feb56980a0aefd7364ad43ca2b9750699e60fbf74c6                                                           0.3s  => => extracting sha256:dade860a2d46486368638b888860a83e77d1eaa84591f3e4ab82e6cf20e3c76d                                                           0.5s
 => => extracting sha256:ae4968fa8c5e57851970a90d9a5c5f0453224c825bd82600662a83449cc03220                                                           0.0s
 => => extracting sha256:0fb178dfc7b295c24a54e305f524fbc0ecbb233f6b5272b0eb45ea0068b017ea                                                           0.2s
 => [internal] load build context                                                                                                                   0.0s
 => => transferring context: 1.74kB                                                                                                                 0.0s
 => [2/8] WORKDIR /app                                                                                                                              8.1s
 => [3/8] COPY ./llama_cpu_server.py /app/llama_cpu_server.py                                                                                       0.0s
 => [4/8] RUN wget https://huggingface.co/TheBloke/Llama-2-7B-Chat-GGUF/resolve/main/llama-2-7b-chat.Q2_K.gguf?download=true -O /app/llama-2-7b-c  48.6s
 => [5/8] RUN pip install llama-cpp-python                                                                                                         52.7s
 => [6/8] RUN pip install Flask                                                                                                                     2.0s
 => [7/8] COPY run.sh /app/run.sh                                                                                                                   0.0s
 => [8/8] RUN chmod a+x /app/run.sh                                                                                                                 0.3s
 => exporting to image                                                                                                                             13.3s
 => => exporting layers                                                                                                                            13.3s
 => => writing image sha256:1d0214c1c6d750e69cde9cfe1107a82b0433696af9fad50e151ad2e63d016fb0                                                        0.0s
 => => naming to docker.io/library/deitos-llama2-image                                                                                              0.0s
docker build -t deitos-node-image ./substrate
[+] Building 28.7s (11/11) FINISHED                                                                                                       docker:default
 => [internal] load build definition from Dockerfile                                                                                                0.0s
 => => transferring dockerfile: 1.69kB                                                                                                              0.0s
 => [internal] load metadata for docker.io/library/rust:latest                                                                                      1.2s
 => [internal] load .dockerignore                                                                                                                   0.0s
 => => transferring context: 2B                                                                                                                     0.0s
 => [1/7] FROM docker.io/library/rust:latest@sha256:00e330d2e2cdada2b75e9517c8359df208b3c880c5e34cb802c120083d50af35                                5.2s
 => => resolve docker.io/library/rust:latest@sha256:00e330d2e2cdada2b75e9517c8359df208b3c880c5e34cb802c120083d50af35                                0.0s
 => => sha256:f5fb4e37fac35c431abe472e75256e5d536a9096d5c472b7ed67ea25e0c9c674 1.94kB / 1.94kB                                                      0.0s
 => => sha256:9871b6d6172d8ce4315a5e1f3b16291a66b03072bca2448117a1a05ecab77ce7 3.99kB / 3.99kB                                                      0.0s
 => => sha256:682f5019ac25603786052a58e04fc791257c99d2bb230468ce9359a983a1b4b7 172.91MB / 172.91MB                                                  1.9s
 => => sha256:00e330d2e2cdada2b75e9517c8359df208b3c880c5e34cb802c120083d50af35 6.22kB / 6.22kB                                                      0.0s
 => => extracting sha256:682f5019ac25603786052a58e04fc791257c99d2bb230468ce9359a983a1b4b7                                                           3.2s
 => [2/7] RUN apt-get -qq update   && DEBIAN_FRONTEND=noninteractive apt-get -qq install --no-install-recommends       sudo       curl       wget  16.4s
 => [3/7] WORKDIR /node-template                                                                                                                    0.0s 
 => [4/7] RUN wget --no-check-certificate https://github.com/Deitos-Network/deitos-node/releases/download/v0.0.1/deitos-node  -O deitos-node        2.3s 
 => [5/7] RUN chmod 755 deitos-node                                                                                                                 0.4s 
 => [6/7] RUN mv /node-template/deitos-node /usr/local/bin                                                                                          0.5s 
 => [7/7] RUN useradd -m -u 1000 -U -s /bin/sh -d /node-dev node-dev &&   mkdir -p /chain-data /node-dev/.local/share &&   chown -R node-dev:node-  0.4s 
 => exporting to image                                                                                                                              0.9s 
 => => exporting layers                                                                                                                             0.9s
 => => writing image sha256:03983c0fe2da3d48f4b701830d3f915fb28654b9ca94d7bd08da901db0aa0d93                                                        0.0s
 => => naming to docker.io/library/deitos-node-image                                                                                                0.0s
docker build -t deitos-client-image ./deitos-client
[+] Building 82.1s (20/20) FINISHED                                                                                                       docker:default
 => [internal] load build definition from Dockerfile                                                                                                0.0s
 => => transferring dockerfile: 1.61kB                                                                                                              0.0s
 => [internal] load metadata for docker.io/jupyter/minimal-notebook:python-3.10.4                                                                   0.7s
 => [internal] load metadata for docker.io/library/deitos-base-image:latest                                                                         0.0s
 => [internal] load .dockerignore                                                                                                                   0.0s
 => => transferring context: 2B                                                                                                                     0.0s
 => CACHED [stage-1  1/13] FROM docker.io/jupyter/minimal-notebook:python-3.10.4@sha256:edede2004c961f49d72a2451875e5d3b4104e076bc8abc3ffcaf04f365  0.0s
 => [internal] load build context                                                                                                                   0.0s
 => => transferring context: 5.08kB                                                                                                                 0.0s
 => CACHED [base 1/1] FROM docker.io/library/deitos-base-image:latest                                                                               0.0s
 => [stage-1  2/13] RUN apt-get -qq update   && DEBIAN_FRONTEND=noninteractive apt-get -qq install --no-install-recommends       sudo       openj  36.4s
 => [stage-1  3/13] COPY run.sh /home/jovyan/run.sh                                                                                                 0.1s 
 => [stage-1  4/13] RUN sudo chmod 755 /home/jovyan/run.sh                                                                                          0.3s 
 => [stage-1  5/13] RUN mkdir /home/jovyan/keytabs                                                                                                  0.3s 
 => [stage-1  6/13] RUN chown jovyan:root /home/jovyan/keytabs                                                                                      0.3s 
 => [stage-1  7/13] COPY --from=base  /opt/hadoop /opt/hadoop                                                                                      14.0s 
 => [stage-1  8/13] COPY --from=base  /opt/spark /opt/spark                                                                                         3.4s 
 => [stage-1  9/13] COPY --from=base  /opt/hive /opt/hive                                                                                           2.9s
 => [stage-1 10/13] RUN pip install -U pip                                                                                                          3.7s
 => [stage-1 11/13] RUN pip install --no-cache-dir     pandas     openpyxl     findspark                                                           11.2s 
 => [stage-1 12/13] COPY notebook /home/jovyan/work                                                                                                 0.0s 
 => [stage-1 13/13] COPY test /home/jovyan/test                                                                                                     0.0s 
 => exporting to image                                                                                                                              8.7s 
 => => exporting layers                                                                                                                             8.7s 
 => => writing image sha256:2e68a5319afa503eef96e1004606d9869830e5ac1a77428a2c70bc355b7c25e6                                                        0.0s 
 => => naming to docker.io/library/deitos-client-image                                                                                              0.0s 
ubuntu@ip-172-31-30-5:~/deitos-ip$
```
</details>

Make command runs all containers successfully:

<details>
   <summary>Output</summary>

```sh
CONTAINER ID   IMAGE                        COMMAND                  CREATED         STATUS                   PORTS                                                                                                                                                                                                                                                                                                                                                                            NAMES
b2a878851332   deitos-worker-image          "run.sh"                 2 minutes ago   Up 2 minutes             0.0.0.0:8040->8040/tcp, :::8040->8040/tcp, 0.0.0.0:8042->8042/tcp, :::8042->8042/tcp, 0.0.0.0:8081->8081/tcp, :::8081->8081/tcp, 0.0.0.0:9867->9867/tcp, :::9867->9867/tcp, 0.0.0.0:50010->50010/tcp, :::50010->50010/tcp, 0.0.0.0:50075->50075/tcp, :::50075->50075/tcp                                                                                                         deitos-worker1
b10cb7f7b1db   deitos-history-image         "entrypoint.sh run.sh"   2 minutes ago   Up 2 minutes             0.0.0.0:18080->18080/tcp, :::18080->18080/tcp, 0.0.0.0:19888->19888/tcp, :::19888->19888/tcp                                                                                                                                                                                                                                                                                     deitos-history
491d65b05437   deitos-worker-image          "run.sh"                 2 minutes ago   Up 2 minutes             0.0.0.0:8041->8040/tcp, :::8041->8040/tcp, 0.0.0.0:8043->8042/tcp, :::8043->8042/tcp, 0.0.0.0:8082->8081/tcp, :::8082->8081/tcp, 0.0.0.0:9868->9867/tcp, :::9868->9867/tcp, 0.0.0.0:50011->50010/tcp, :::50011->50010/tcp, 0.0.0.0:50076->50075/tcp, :::50076->50075/tcp                                                                                                         deitos-worker2
f39855b3254e   deitos-jupyter-image         "tini -g -- /home/jo…"   2 minutes ago   Up 2 minutes (healthy)   0.0.0.0:8888->8888/tcp, :::8888->8888/tcp                                                                                                                                                                                                                                                                                                                                        deitos-jupyter
c43e393d6edc   deitos-master-image          "entrypoint.sh run.sh"   2 minutes ago   Up 2 minutes             0.0.0.0:7077->7077/tcp, :::7077->7077/tcp, 0.0.0.0:8020->8020/tcp, :::8020->8020/tcp, 0.0.0.0:8030-8033->8030-8033/tcp, :::8030-8033->8030-8033/tcp, 0.0.0.0:8080->8080/tcp, :::8080->8080/tcp, 0.0.0.0:8088->8088/tcp, :::8088->8088/tcp, 0.0.0.0:9083->9083/tcp, :::9083->9083/tcp, 0.0.0.0:9600->9600/tcp, :::9600->9600/tcp, 0.0.0.0:50470->50470/tcp, :::50470->50470/tcp   deitos-master
4c6f3b29cb41   osixia/phpldapadmin:latest   "/container/tool/run"    2 minutes ago   Up 2 minutes             0.0.0.0:20080->80/tcp, :::20080->80/tcp, 0.0.0.0:20443->443/tcp, :::20443->443/tcp                                                                                                                                                                                                                                                                                               deitos-ldap-console
50006759c8cb   deitos-node-image            "/usr/local/bin/deit…"   3 minutes ago   Up 2 minutes             0.0.0.0:9615->9615/tcp, :::9615->9615/tcp, 0.0.0.0:9933->9933/tcp, :::9933->9933/tcp, 0.0.0.0:9944->9944/tcp, :::9944->9944/tcp, 0.0.0.0:30333->30333/tcp, :::30333->30333/tcp                                                                                                                                                                                                   deitos-node
cfb5e7a5e047   sequenceiq/kerberos          "/config.sh"             3 minutes ago   Up 2 minutes             88/tcp, 749/tcp                                                                                                                                                                                                                                                                                                                                                                  deitos-kdc
ef0ff0463bc0   deitos-llama2-image          "/app/run.sh"            3 minutes ago   Up 2 minutes             0.0.0.0:7860->5000/tcp, :::7860->5000/tcp                                                                                                                                                                                                                                                                                                                                        deitos-llama2
835116c742b0   osixia/openldap:latest       "/container/tool/run"    3 minutes ago   Up 2 minutes             0.0.0.0:389->389/tcp, :::389->389/tcp, 636/tcp                                                                                                                                                                                                                                                                                                                                   deitos-ldap
9cda95806797   postgres:11                  "docker-entrypoint.s…"   3 minutes ago   Up 2 minutes             0.0.0.0:5432->5432/tcp, :::5432->5432/tcp                                                                                                                                                                                                                                                                                                                                        deitos-metastore
ubuntu@ip-172-31-30-5:~$
```
</details>

Node starts correctly with workers:

<details>
   <summary>Output</summary>

```rust
 
deitos-node     | 2024-03-25 21:28:12 🎁 Prepared block for proposing at 20 (1 ms) [hash: 0x1169ebd6e288cbb1b58c8f7da9372dc4e4ad38489c6afc674ccb44357914899a; parent_hash: 0xdca4…b176; extrinsics (1): [0x0dfe…aa91]    
deitos-node     | 2024-03-25 21:28:12 🔖 Pre-sealed block for proposal at 20. Hash now 0xfb1326d57b23996b287759f84cea60be76ad25b9e46fb35e62a4a3a267d59970, previously 0x1169ebd6e288cbb1b58c8f7da9372dc4e4ad38489c6afc674ccb44357914899a.    
deitos-node     | 2024-03-25 21:28:12 ✨ Imported #20 (0xfb13…9970)    
deitos-ldap     | 6601ec70 conn=1003 op=7 SRCH base="dc=deitos,dc=network" scope=2 deref=3 filter="(&(objectClass=posixAccount)(uid=root))"
deitos-ldap     | 6601ec70 conn=1003 op=7 SRCH attr=cn uidNumber gidNumber
deitos-ldap     | 6601ec70 conn=1003 op=7 SEARCH RESULT tag=101 err=0 nentries=0 text=
deitos-node     | 2024-03-25 21:28:16 💤 Idle (0 peers), best: #20 (0xfb13…9970), finalized #0 (0x3eeb…5980), ⬇ 0 ⬆ 0    
deitos-node     | 2024-03-25 21:28:21 💤 Idle (0 peers), best: #20 (0xfb13…9970), finalized #0 (0x3eeb…5980), ⬇ 0 ⬆ 0    
deitos-node     | 2024-03-25 21:28:24 🙌 Starting consensus session on top of parent 0xfb1326d57b23996b287759f84cea60be76ad25b9e46fb35e62a4a3a267d59970    
deitos-node     | 2024-03-25 21:28:24 🎁 Prepared block for proposing at 21 (0 ms) [hash: 0xc343934d7261cee5249e13101e988c2e378d4e650993b9f27ef485e6924fb801; parent_hash: 0xfb13…9970; extrinsics (1): [0xd5db…02ea]    
deitos-node     | 2024-03-25 21:28:24 🔖 Pre-sealed block for proposal at 21. Hash now 0x14e1301171195656b9edc847b0dbbf1108fedce2ad770edaedf40a393b0202e9, previously 0xc343934d7261cee5249e13101e988c2e378d4e650993b9f27ef485e6924fb801.    
deitos-node     | 2024-03-25 21:28:24 ✨ Imported #21 (0x14e1…02e9)    
deitos-node     | 2024-03-25 21:28:26 💤 Idle (0 peers), best: #21 (0x14e1…02e9), finalized #0 (0x3eeb…5980), ⬇ 0 ⬆ 0    
deitos-node     | 2024-03-25 21:28:31 💤 Idle (0 peers), best: #21 (0x14e1…02e9), finalized #0 (0x3eeb…5980), ⬇ 0 ⬆ 0    
deitos-node     | 2024-03-25 21:28:36 🙌 Starting consensus session on top of parent 0x14e1301171195656b9edc847b0dbbf1108fedce2ad770edaedf40a393b0202e9    
deitos-node     | 2024-03-25 21:28:36 🎁 Prepared block for proposing at 22 (0 ms) [hash: 0xbeecfb7b4df13aecf12e21d667a9cd31fbf511c92ab0382551b45b5a70812add; parent_hash: 0x14e1…02e9; extrinsics (1): [0xb56c…0de7]    
deitos-node     | 2024-03-25 21:28:36 🔖 Pre-sealed block for proposal at 22. Hash now 0x929313c51b598c974500551a7eba3edf84771094f4eb5d4c82acebaa7d3344b8, previously 0xbeecfb7b4df13aecf12e21d667a9cd31fbf511c92ab0382551b45b5a70812add.    
deitos-node     | 2024-03-25 21:28:36 ✨ Imported #22 (0x9293…44b8)    
deitos-node     | 2024-03-25 21:28:36 💤 Idle (0 peers), best: #22 (0x9293…44b8), finalized #0 (0x3eeb…5980), ⬇ 0 ⬆ 0    
deitos-node     | 2024-03-25 21:28:41 💤 Idle (0 peers), best: #22 (0x9293…44b8), finalized #0 (0x3eeb…5980), ⬇ 0 ⬆ 0    
deitos-node     | 2024-03-25 21:28:42 🙌 Starting consensus session on top of parent 0x929313c51b598c974500551a7eba3edf84771094f4eb5d4c82acebaa7d3344b8    
deitos-node     | 2024-03-25 21:28:42 🎁 Prepared block for proposing at 23 (0 ms) [hash: 0x327d0b6a5d62e80eaf316abd44dcb0befce14872f294c1c785b6c87b5fa10a9c; parent_hash: 0x9293…44b8; extrinsics (1): [0x5df2…32ad]    
deitos-node     | 2024-03-25 21:28:42 🔖 Pre-sealed block for proposal at 23. Hash now 0x166e8aa16aba9a675b39b758545c39e6c046e3ab4459e7e61310b36d06dd6588, previously 0x327d0b6a5d62e80eaf316abd44dcb0befce14872f294c1c785b6c87b5fa10a9c.    
deitos-node     | 2024-03-25 21:28:42 ✨ Imported #23 (0x166e…6588)    
deitos-ldap     | 6601ec8e conn=1003 op=8 SRCH base="dc=deitos,dc=network" scope=2 deref=3 filter="(&(objectClass=posixAccount)(uid=root))"
deitos-ldap     | 6601ec8e conn=1003 op=8 SRCH attr=cn uidNumber gidNumber
deitos-ldap     | 6601ec8e conn=1003 op=8 SEARCH RESULT tag=101 err=0 nentries=0 text=
deitos-node     | 2024-03-25 21:28:46 💤 Idle (0 peers), best: #23 (0x166e…6588), finalized #0 (0x3eeb…5980), ⬇ 0 ⬆ 0
```
</details>

Report runs successfully:

```rust
jovyan@master:/$ hdfs dfsadmin -report 
Configured Capacity: 124483125248 (115.93 GB)
Present Capacity: 70462531939 (65.62 GB)
DFS Remaining: 70127058944 (65.31 GB)
DFS Used: 335472995 (319.93 MB)
DFS Used%: 0.48%
Replicated Blocks:
        Under replicated blocks: 0
        Blocks with corrupt replicas: 0
        Missing blocks: 0
        Missing blocks (with replication factor 1): 0
        Low redundancy blocks with highest priority to recover: 0
        Pending deletion blocks: 0
Erasure Coded Block Groups: 
        Low redundancy block groups: 0
        Block groups with corrupt internal blocks: 0
        Missing block groups: 0
        Low redundancy blocks with highest priority to recover: 0
        Pending deletion blocks: 0

-------------------------------------------------
Live datanodes (2):

Name: 172.28.1.3:50010 (worker1.deitos.network)
Hostname: worker1.deitos.network
Decommission Status : Normal
Configured Capacity: 62241562624 (57.97 GB)
DFS Used: 240249125 (229.12 MB)
Non DFS Used: 26921006811 (25.07 GB)
DFS Remaining: 35063529472 (32.66 GB)
DFS Used%: 0.39%
DFS Remaining%: 56.33%
Configured Cache Capacity: 0 (0 B)
Cache Used: 0 (0 B)
Cache Remaining: 0 (0 B)
Cache Used%: 100.00%
Cache Remaining%: 0.00%
Xceivers: 0
Last contact: Mon Mar 25 21:30:18 GMT 2024
Last Block Report: Mon Mar 25 21:25:07 GMT 2024
Num of Blocks: 111


Name: 172.28.1.4:50010 (worker2.deitos.network)
Hostname: worker2.deitos.network
Decommission Status : Normal
Configured Capacity: 62241562624 (57.97 GB)
DFS Used: 95223870 (90.81 MB)
Non DFS Used: 27066032066 (25.21 GB)
DFS Remaining: 35063529472 (32.66 GB)
DFS Used%: 0.15%
DFS Remaining%: 56.33%
Configured Cache Capacity: 0 (0 B)
Cache Used: 0 (0 B)
Cache Remaining: 0 (0 B)
Cache Used%: 100.00%
Cache Remaining%: 0.00%
Xceivers: 0
Last contact: Mon Mar 25 21:30:18 GMT 2024
Last Block Report: Mon Mar 25 21:25:07 GMT 2024
Num of Blocks: 137
```

Client starts successfully:
```rust
deitos-client    |     super().start()
deitos-client    |   File "/opt/conda/lib/python3.10/site-packages/jupyter_core/application.py", line 262, in start
deitos-client    |     self.write_default_config()
deitos-client    |   File "/opt/conda/lib/python3.10/site-packages/jupyter_core/application.py", line 147, in write_default_config
deitos-client    |     answer = ask()
deitos-client    |   File "/opt/conda/lib/python3.10/site-packages/jupyter_core/application.py", line 142, in ask
deitos-client    |     return input(prompt).lower() or "n"
deitos-client    | EOFError: EOF when reading a line
deitos-client    | [I 21:39:29.645 NotebookApp] Writing notebook server cookie secret to /home/jovyan/.local/share/jupyter/runtime/notebook_cookie_secret
deitos-client    | [I 21:39:29.645 NotebookApp] Authentication of /metrics is OFF, since other authentication is disabled.
deitos-client    | [W 21:39:29.910 NotebookApp] All authentication is disabled.  Anyone who can connect to this server will be able to run code.
deitos-client    | [W 2024-03-25 21:39:30.506 LabApp] 'ip' has moved from NotebookApp to ServerApp. This config will be passed to ServerApp. Be sure to update your config before our next release.
deitos-client    | [W 2024-03-25 21:39:30.506 LabApp] 'port' has moved from NotebookApp to ServerApp. This config will be passed to ServerApp. Be sure to update your config before our next release.
deitos-client    | [W 2024-03-25 21:39:30.506 LabApp] 'token' has moved from NotebookApp to ServerApp. This config will be passed to ServerApp. Be sure to update your config before our next release.
deitos-client    | [W 2024-03-25 21:39:30.506 LabApp] 'notebook_dir' has moved from NotebookApp to ServerApp. This config will be passed to ServerApp. Be sure to update your config before our next release.
deitos-client    | [W 2024-03-25 21:39:30.506 LabApp] 'notebook_dir' has moved from NotebookApp to ServerApp. This config will be passed to ServerApp. Be sure to update your config before our next release.
deitos-client    | [W 2024-03-25 21:39:30.506 LabApp] 'notebook_dir' has moved from NotebookApp to ServerApp. This config will be passed to ServerApp. Be sure to update your config before our next release.
deitos-client    | [I 2024-03-25 21:39:30.515 LabApp] JupyterLab extension loaded from /opt/conda/lib/python3.10/site-packages/jupyterlab
deitos-client    | [I 2024-03-25 21:39:30.516 LabApp] JupyterLab application directory is /opt/conda/share/jupyter/lab
deitos-client    | [I 21:39:30.520 NotebookApp] Serving notebooks from local directory: /home/jovyan/work
deitos-client    | [I 21:39:30.521 NotebookApp] Jupyter Notebook 6.4.12 is running at:
deitos-client    | [I 21:39:30.521 NotebookApp] http://client.deitos.network:8888/
deitos-client    | [I 21:39:30.521 NotebookApp] Use Control-C to stop this server and shut down all kernels (twice to skip confirmation).
```

Client commands all work:
```rust
(base) jovyan@client:~$ kinit -kt /home/jovyan/keytabs/current-jupyter.keytab test_user/$(hostname -f)@DEITOS.NETWORK
(base) jovyan@client:~$ hdfs dfs -ls /data/test_user
(base) jovyan@client:~$ hdfs dfs -put test/test.txt /data/test_user
(base) jovyan@client:~$ hdfs dfs -ls /data
Found 1 items
drwxr-xr-x   - test_user root          0 2024-03-25 21:48 /data/test_user
```
Llama 2 works:

```js
(base) jovyan@client:~$ curl -X POST -H "Content-Type: application/json" -d '{
>   "system_message": "You are a helpful assistant",
>   "user_message": "Generate a list of 5 funny dog names",
>   "max_tokens": 100
> }' http://llama2.deitos.network:5000/llama
{
  "choices": [
    {
      "finish_reason": "length",
      "index": 0,
      "logprobs": null,
      "text": "<s>[INST] <<SYS>>\n            You are a helpful assistant\n            <</SYS>>\n            Generate a list of 5 funny dog names [/INST]  Of course! Here are five funny dog names that I think you'll find amusing:\n\n1. \"Barky McBarkface\" - This name is a play on the classic \"Barky\" nickname, but with a fun twist. It's perfect for a dog that's always barking and making noise.\n2. \"Puddles McSplashy\" - This name is great for a dog that lov"
    }
  ],
  "created": 1711403520,
  "id": "cmpl-0a03e21a-7185-41bd-b215-30e3fd5d544f",
  "model": "./llama-2-7b-chat.Q2_K.gguf",
  "object": "text_completion",
  "usage": {
    "completion_tokens": 100,
    "prompt_tokens": 40,
    "total_tokens": 140
  }
}
```

Benchmarking tests pass:

```rust
running 21 tests
test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::ip::test_correct_ip_registration ... ok
test benchmarking::benchmarks::benchmark_tests::test_benchmarks ... ok
test tests::ip::test_fail_ip_registration_already_exists ... ok
test tests::agreements::test_consumer_accept_agreement ... ok
test tests::agreements::test_consumer_request_agreement ... ok
test tests::agreements::test_consumer_reject_proposal ... ok
test tests::agreements::test_ip_accept_agreement ... ok
test tests::ip::test_register_unregister_register_ip ... ok
test tests::ip::test_unregister_ip ... ok
test tests::ip::test_update_storage_cost_per_unit ... ok
test tests::ip::test_fail_ip_unregister_agreement_in_progress ... ok
test tests::ip::test_register_update_deposit_amount_unregister_ip ... ok
test tests::ip::test_update_ip_storage ... ok
test tests::ip::test_update_ip_status ... ok
test tests::payments::test_consumer_prepay_installment ... ok
test tests::payments::test_consumer_prepay_multiple ... ok
test tests::payments::test_ip_withdraw ... ok
test tests::payments::test_ip_terminate_nonpay ... ok
test tests::rating::test_consumer_submit_feedback ... ok
test tests::payments::test_ip_withdraw_completely ... ok
```
Unit tests all passing but with some warnings:

```rust
   Compiling pallet-transaction-payment-rpc v4.0.0-dev (https://github.com/paritytech/polkadot-sdk?branch=release-polkadot-v1.4.0#fcfdb98a)
warning: the item `ConstU32` is imported redundantly
  --> pallets/deitos-fs/src/tests/mod.rs:20:14
   |
17 | use super::*;
   |     -------- the item `ConstU32` is already imported here
...
20 |     traits::{ConstU32, ConstU64},
   |              ^^^^^^^^
   |
   = note: `#[warn(unused_imports)]` on by default

warning: the item `PalletId` is imported redundantly
  --> pallets/deitos-fs/src/tests/mod.rs:21:5
   |
17 | use super::*;
   |     -------- the item `PalletId` is already imported here
...
21 |     PalletId,
   |     ^^^^^^^^

warning: the item `StorageSizeMB` is imported redundantly
  --> pallets/deitos-fs/src/tests/fs.rs:19:5
   |
17 | use super::*;
   |     -------- the item `StorageSizeMB` is already imported here
18 | use frame_system::pallet_prelude::BlockNumberFor;
19 | use pallet_deitos::StorageSizeMB;
   |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: the item `Event` is imported redundantly
  --> pallets/deitos-fs/src/tests/fs.rs:22:14
   |
17 | use super::*;
   |     -------- the item `Event` is already imported here
...
22 |     pallet::{Event, Files},
   |              ^^^^^

warning: the item `Files` is imported redundantly
  --> pallets/deitos-fs/src/tests/fs.rs:22:21
   |
17 | use super::*;
   |     -------- the item `Files` is already imported here
...
22 |     pallet::{Event, Files},
   |                     ^^^^^

warning: `pallet-deitos-fs` (lib test) generated 5 warnings
   Compiling wasm-opt v0.116.0
   Compiling substrate-wasm-builder v5.0.0-dev (https://github.com/paritytech/polkadot-sdk?branch=release-polkadot-v1.4.0#fcfdb98a)
   Compiling deitos-runtime v0.0.3 (/Users/keeganquigley/deitos-node/runtime)
   Compiling rocksdb v0.21.0
   Compiling kvdb-rocksdb v0.19.0
   Compiling sc-client-db v0.10.0-dev (https://github.com/paritytech/polkadot-sdk?branch=release-polkadot-v1.4.0#fcfdb98a)
   Compiling sc-service v0.10.0-dev (https://github.com/paritytech/polkadot-sdk?branch=release-polkadot-v1.4.0#fcfdb98a)
   Compiling sc-cli v0.10.0-dev (https://github.com/paritytech/polkadot-sdk?branch=release-polkadot-v1.4.0#fcfdb98a)
    Finished `test` profile [unoptimized + debuginfo] target(s) in 5m 36s
     Running unittests src/main.rs (target/debug/deps/deitos_node-840c01e3acff905f)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/deitos_runtime-846798178ff85305)

running 1 test
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/lib.rs (target/debug/deps/pallet_deitos-9fc0a10903db9a8a)

running 20 tests
test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::agreements::test_ip_accept_agreement ... ok
test tests::ip::test_correct_ip_registration ... ok
test tests::agreements::test_consumer_reject_proposal ... ok
test tests::agreements::test_consumer_request_agreement ... ok
test tests::ip::test_fail_ip_registration_already_exists ... ok
test tests::agreements::test_consumer_accept_agreement ... ok
test tests::ip::test_fail_ip_unregister_agreement_in_progress ... ok
test tests::ip::test_register_unregister_register_ip ... ok
test tests::ip::test_update_storage_cost_per_unit ... ok
test tests::ip::test_update_ip_storage ... ok
test tests::ip::test_update_ip_status ... ok
test tests::ip::test_unregister_ip ... ok
test tests::ip::test_register_update_deposit_amount_unregister_ip ... ok
test tests::payments::test_consumer_prepay_installment ... ok
test tests::payments::test_consumer_prepay_multiple ... ok
test tests::payments::test_ip_terminate_nonpay ... ok
test tests::payments::test_ip_withdraw ... ok
test tests::rating::test_consumer_submit_feedback ... ok
test tests::payments::test_ip_withdraw_completely ... ok

test result: ok. 20 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.04s

     Running unittests src/lib.rs (target/debug/deps/pallet_deitos_fs-bdbf849f0e366a9c)

running 4 tests
test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::fs::file_is_correctly_registered ... ok
test tests::fs::file_is_not_verified ... ok
test tests::fs::file_is_correctly_verified ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s

   Doc-tests deitos_runtime

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet_deitos

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet_deitos_fs

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```
