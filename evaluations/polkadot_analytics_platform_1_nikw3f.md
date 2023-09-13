# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/polkadot_analytics_platform.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by nikw3f

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| **0a.** | Copyright and Licenses | <ul><li>[x] </li></ul> | [Apache License](https://github.com/mobr-ai/PolkadotAnalytics/blob/main/LICENSE) | Apache 2.0 |
| **0b.** | Documentation/Tutorial | <ul><li>[x] </li></ul> | [POnto documentation](https://www.mobr.ai/ponto) <br><br> [PAP endpoints](https://github.com/mobr-ai/PolkadotAnalytics/blob/main/pap/swagger.yml) <br><br> [source code documentation](https://github.com/mobr-ai/PolkadotAnalytics/tree/main/docs/pap) | Documentation is good. Swagger docs are working fine. Use of python virtual environment is recommended. |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [Tests](https://github.com/mobr-ai/PolkadotAnalytics/tree/main/pap/tests) <br><br> [How to test](https://github.com/mobr-ai/PolkadotAnalytics/blob/main/README.md) <br><br> [KB query guide](https://github.com/mobr-ai/PolkadotAnalytics/blob/main/docs/kb_guide.ipynb)| Tests are passing. Please add some more tests covering extra scenarios. |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/mobr-ai/PolkadotAnalytics/blob/main/Dockerfile) <br><br> [docker-compose](https://github.com/mobr-ai/PolkadotAnalytics/blob/main/docker-compose.yml) | Docker instructions are working fine. |
| **0e.** | Article | <ul><li>[x] </li></ul> | [Medium post draft](https://medium.com/@mobrsys/building-the-foundation-the-first-stage-of-the-polkadot-analytics-platform-6e9fa6fdbf33) | Looks good. |
| **1.** | POnto Evolution | <ul><li>[x] </li></ul> | [POnto](https://github.com/mobr-ai/POnto) <br><br>[Technical Report](https://github.com/mobr-ai/POnto/blob/main/docs/pdf/POnto_v0.0.2_evolution_report.pdf) | Looks good |
| **2.** | KB Bootstrap | <ul><li>[x] </li></ul> | [PAP](https://github.com/mobr-ai/PolkadotAnalytics) | Working fine. |

# General Notes

Thank you team for completing this milestone. Dev documentation is good. I was able to run fuseki-server and query the KB. Docker compose build is working fine. More tests are recommended. Use of [virtual environment](https://docs.python.org/3/tutorial/venv.html) is recommended.

## Setup

Server starting instructions worked fine:

```
➜  PolkadotAnalytics git:(main) ✗ fuseki-server --update --tdb2
[2023-09-13 12:57:24] Server     INFO  Apache Jena Fuseki 4.9.0
[2023-09-13 12:57:24] Config     INFO  FUSEKI_HOME=/opt/homebrew/Cellar/fuseki/4.9.0/libexec
[2023-09-13 12:57:24] Config     INFO  FUSEKI_BASE=/opt/homebrew/var/fuseki
[2023-09-13 12:57:24] Config     INFO  Shiro file: file:///opt/homebrew/var/fuseki/shiro.ini
[2023-09-13 12:57:24] Config     INFO  Load configuration: file:///opt/homebrew/var/fuseki/configuration/POnto.ttl
[2023-09-13 12:57:24] Server     INFO  Configuration file: /opt/homebrew/var/fuseki/config.ttl
[2023-09-13 12:57:24] Server     INFO  Path = /POnto
[2023-09-13 12:57:24] Server     INFO    Memory: 4,0 GiB
[2023-09-13 12:57:24] Server     INFO    Java:   20.0.2
[2023-09-13 12:57:24] Server     INFO    OS:     Mac OS X 13.5.1 aarch64
[2023-09-13 12:57:24] Server     INFO    PID:    46233
[2023-09-13 12:57:24] Server     INFO  Started 2023/09/13 12:57:24 CEST on port 3030


➜  PolkadotAnalytics git:(main) ✗ python3 app.py
POnto dataset already exists
 * Serving Flask app 'pap.index'
 * Debug mode: off
 * Running on all addresses (0.0.0.0)
 * Running on http://127.0.0.1:5500
 * Running on http://192.168.43.202:5500
Press CTRL+C to quit
127.0.0.1 - - [13/Sep/2023 13:00:27] "GET / HTTP/1.1" 200 -
127.0.0.1 - - [13/Sep/2023 13:00:28] "GET /s_file HTTP/1.1" 200 -
127.0.0.1 - - [13/Sep/2023 13:00:28] "GET /favicon.ico HTTP/1.1" 404 -
```

## Tests

Tests are passing. I would suggest to add more tests to cover more scenarios:

```
➜  PolkadotAnalytics git:(main) ✗ python3 -m pytest pap/tests

================================================================================================ test session starts =================================================================================================
platform darwin -- Python 3.9.6, pytest-7.4.2, pluggy-1.3.0
rootdir: /Users/nikhil/w3f/PolkadotAnalytics
plugins: anyio-4.0.0
collected 12 items

pap/tests/test_app.py .........                                                                                                                                                                                [ 75%]
pap/tests/test_dataset.py .                                                                                                                                                                                    [ 83%]
pap/tests/test_kb.py ..                                                                                                                                                                                        [100%]

================================================================================================== warnings summary ==================================================================================================
../../Library/Python/3.9/lib/python/site-packages/urllib3/__init__.py:34
  /Users/nikhil/Library/Python/3.9/lib/python/site-packages/urllib3/__init__.py:34: NotOpenSSLWarning: urllib3 v2.0 only supports OpenSSL 1.1.1+, currently the 'ssl' module is compiled with 'LibreSSL 2.8.3'. See: https://github.com/urllib3/urllib3/issues/3020
    warnings.warn(

-- Docs: https://docs.pytest.org/en/stable/how-to/capture-warnings.html
=========================================================================================== 12 passed, 1 warning in 1.29s ============================================================================================
```

## Docker

Docker instructions works.
```
➜  PolkadotAnalytics git:(main) ✗ docker build -t mobr/fuseki . --platform linux/x86_64/v2 --no-cache

[+] Building 111.0s (11/11) FINISHED                                                                                                                                                             docker:desktop-linux
 => [internal] load build definition from Dockerfile                                                                                                                                                             0.0s
 => => transferring dockerfile: 575B                                                                                                                                                                             0.0s
 => [internal] load .dockerignore                                                                                                                                                                                0.0s
 => => transferring context: 106B                                                                                                                                                                                0.0s
 => [internal] load metadata for docker.io/library/python:3.9.13-alpine3.16                                                                                                                                      4.8s
 => [1/6] FROM docker.io/library/python:3.9.13-alpine3.16@sha256:b25d37ffbad1e72bb75c6b0bb774019077a1985e548e2abd48a207b9e055b4ab                                                                               16.8s
 => => resolve docker.io/library/python:3.9.13-alpine3.16@sha256:b25d37ffbad1e72bb75c6b0bb774019077a1985e548e2abd48a207b9e055b4ab                                                                                0.0s
 => => sha256:1eb4a6e3c1091be150d7173e5c2179e9b2aa625a7dc42374a59b1bd54f676785 1.37kB / 1.37kB                                                                                                                   0.0s
 => => sha256:1d8fd6bcc2184cabf49d96f1b6cd867665b38e8f6f17ba2c460e16ed91279574 7.02kB / 7.02kB                                                                                                                   0.0s
 => => sha256:213ec9aee27d8be045c6a92b7eac22c9a64b44558193775a1a7f626352392b49 2.81MB / 2.81MB                                                                                                                   7.1s
 => => sha256:6b2a141cd2277284ebaafc76d13b42cf8a7682e4663298a2a730f18331a95eb6 681.40kB / 681.40kB                                                                                                               2.0s
 => => sha256:1c5919676b4e6f1b77fdd79a051ad906360491ada648fcbf7f1d857a8a273a76 12.01MB / 12.01MB                                                                                                                16.2s
 => => sha256:b25d37ffbad1e72bb75c6b0bb774019077a1985e548e2abd48a207b9e055b4ab 1.65kB / 1.65kB                                                                                                                   0.0s
 => => sha256:7815e2028908be7647388c7f29ea1fcb3a9277bc867fc55779542db1e1d161f8 230B / 230B                                                                                                                       2.4s
 => => sha256:28f6fa2748d49cf3cb1017784e8e84716934ce60242186e465d55f5cbd88e786 2.88MB / 2.88MB                                                                                                                   6.0s
 => => extracting sha256:213ec9aee27d8be045c6a92b7eac22c9a64b44558193775a1a7f626352392b49                                                                                                                        0.1s
 => => extracting sha256:6b2a141cd2277284ebaafc76d13b42cf8a7682e4663298a2a730f18331a95eb6                                                                                                                        0.2s
 => => extracting sha256:1c5919676b4e6f1b77fdd79a051ad906360491ada648fcbf7f1d857a8a273a76                                                                                                                        0.3s
 => => extracting sha256:7815e2028908be7647388c7f29ea1fcb3a9277bc867fc55779542db1e1d161f8                                                                                                                        0.0s
 => => extracting sha256:28f6fa2748d49cf3cb1017784e8e84716934ce60242186e465d55f5cbd88e786                                                                                                                        0.2s
 => [internal] load build context                                                                                                                                                                                0.0s
 => => transferring context: 22.84kB                                                                                                                                                                             0.0s
 => [2/6] RUN set -eux;     apk add --update --no-cache bash python3 wget && ln -sf python3 /usr/bin/python;     python3 -m ensurepip;     pip3 install --no-cache --upgrade pip setuptools;     rm -rf /var/c  57.6s
 => [3/6] RUN mkdir -p /usr/src/polkadot/                                                                                                                                                                        0.1s
 => [4/6] WORKDIR /usr/src/polkadot/                                                                                                                                                                             0.0s
 => [5/6] ADD . .                                                                                                                                                                                                0.0s
 => [6/6] RUN pip install -r requirements.txt                                                                                                                                                                   31.5s
 => exporting to image                                                                                                                                                                                           0.3s
 => => exporting layers                                                                                                                                                                                          0.3s
 => => writing image sha256:df3b6d04d941ac0ceb11947d09552ab4128ceca9d36b2226c8271cf2ffa69847                                                                                                                     0.0s
 => => naming to docker.io/mobr/fuseki                                                                                                                                                                           0.0s

```

I am able to open fuseki-server UI on `localhost:3030` and query KB.

<img width="1493" alt="Screenshot 2023-09-13 at 13 11 29" src="https://github.com/w3f/Grant-Milestone-Delivery/assets/142136841/3db81af0-8687-4aa0-9cda-7c452e65d8b2">



```
➜  PolkadotAnalytics git:(main) ✗ cat test.py
import sys
sys.path.append("../")

from pap.datalayer.kbm import KBM

sparql_spec = KBM.sparql_prefix + """
SELECT ?s
WHERE {
    ?s a ponto:Parachain
}
"""

r = KBM.run_sparql(sparql_spec, "s")
print (r)
➜  PolkadotAnalytics git:(main) ✗ python3 test.py
['Acala', 'Moonriver', 'Moonbeam', 'Ganshiro', 'Picasso', 'Phala', 'Astar', 'Statemint', 'Collectives']
```
