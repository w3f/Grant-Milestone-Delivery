# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/lastic-price-simulation-2.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Specification | Link | Comments
| -----: | ----------- | ------------- | ------------- | ------------- | ------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | GPLv3 Open Source License. | [License](https://github.com/LasticXYZ/price-simulation/blob/master/LICENSE) |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | Detailed guide including usage, configurations, and setup. | [Documentation](https://docs.lastic.xyz/price-simulator/) | Great docs!
| **0d.** | Article Publishing | <ul><li>[x] </li></ul> | An article on the Coretime Price Simulator's development and impact. | [Article](https://blog.lastic.xyz/discover-polkadots-coretime-pricing-with-the-lastic-simulator-32e371203d1b) | Ok.
| **1.** | Streamlit-based Application | <ul><li>[x] </li></ul> | An interactive web application with UI elements for simulating Coretime pricing. | [Application](https://lastic.streamlit.app/) | Works great.
| **2a.** | Real-time Graph Visualization | <ul><li>[x] </li></ul> | Graph visualization of Coretime pricing using Matplotlib. | [Github](https://github.com/LasticXYZ/price-simulation) or [Application](https://lastic.streamlit.app/) | Works great.
| **2b.** | UI - Sliders | <ul><li>[x] </li></ul> | Configurable sliders for adjusting Coretime pricing parameters. | [Github](https://github.com/LasticXYZ/price-simulation) or [Application](https://lastic.streamlit.app/) | Works great.
| **2c.** | Configuration Management | <ul><li>[x] </li></ul> | System for customizing parameters like region length, bulk proportion. | [Github](https://github.com/LasticXYZ/price-simulation) or [Application](https://lastic.streamlit.app/) | Works great.
| **2d.** | Price Calculation Models | <ul><li>[x] </li></ul> | Linear and exponential price calculation functions with a toggle feature. | [Github](https://github.com/LasticXYZ/price-simulation) or [Application](https://lastic.streamlit.app/) | Works great.
| **2e.** | Monthly Adjustments | <ul><li>[x] </li></ul> | Feature for adjusting bulk coretime renewals and sales on a monthly basis. | [Github](https://github.com/LasticXYZ/price-simulation) or [Application](https://lastic.streamlit.app/) | Works great.
| **3.** | Functionality Comparison | <ul><li>[x] </li></ul> | Validation against the [`Broker pallet`](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/broker) implementation. | [Github](https://github.com/LasticXYZ/price-simulation) | Ok.

# General Notes

Price Simulation app works great. ~~Not finding any unit or e2e tests. Also am not finding the last deliverable for "Functionality Comparison".~~

Team resolved issues and there is now a validation report present. All tests are now passing.

One minor issue: The repo notes that the license is GPLv3 but the license file is for MIT license. Please pick one or the other here.

Docker:
```sh
Successfully built 163a2f0272fb
Successfully tagged price-simulation_test:latest
WARNING: Image for service test was built because it did not already exist. To rebuild this image you must use `docker-compose build` or `docker-compose up --build`.
Creating price-simulation_test_run ... done
......
----------------------------------------------------------------------
Ran 6 tests in 0.001s

OK
```
Python venv:
```sh
ubuntu@ip-172-31-17-84:~/price-simulation$ python -m unittest discover
......
----------------------------------------------------------------------
Ran 6 tests in 0.001s

OK
```
Docker compose build works:
```
[+] Building 34.3s (9/9) FINISHED                                                                    docker:desktop-linux
 => [web internal] load build definition from Dockerfile                                                             0.0s
 => => transferring dockerfile: 529B                                                                                 0.0s
 => [web internal] load .dockerignore                                                                                0.0s
 => => transferring context: 2B                                                                                      0.0s
 => [web internal] load metadata for docker.io/library/python:3.11-slim                                              1.6s
 => [web 1/4] FROM docker.io/library/python:3.11-slim@sha256:cfd7ed5c11a88ce533d69a1da2fd932d647f9eb6791c5b4ddce081  6.6s
 => => resolve docker.io/library/python:3.11-slim@sha256:cfd7ed5c11a88ce533d69a1da2fd932d647f9eb6791c5b4ddce081aedf  0.0s
 => => sha256:353058a8f18c0cd00cbd29bed16e133c9c78ea1017be4cadb0a8d8f7edf94fc7 6.95kB / 6.95kB                       0.0s
 => => sha256:2c6d21737d8318aa15c4cc838475029a5efc36c0429e3d8da80d97d0b96d9aaf 29.18MB / 29.18MB                     4.6s
 => => sha256:eed0175a0a2c6ea04c0688918deec0baaf3cc4ee3fd31d69088883d577408e52 3.33MB / 3.33MB                       0.7s
 => => sha256:9ea77d5fb7aae54d1facbd47df91e06b2f905c693157afe334e026dede65b585 12.82MB / 12.82MB                     1.6s
 => => sha256:cfd7ed5c11a88ce533d69a1da2fd932d647f9eb6791c5b4ddce081aedf7f7876 1.65kB / 1.65kB                       0.0s
 => => sha256:8e3fe4b0c5762c8f17fb6b1d025b4b232f1b8c16c93e70e0e7d879cc7c9c5984 1.37kB / 1.37kB                       0.0s
 => => sha256:a745ecb651c283b14331cb456d744c8d43957f9cc831f8768857a4a174da31e8 245B / 245B                           0.9s
 => => sha256:17b48befe9035dd48e603b43147fcb19df243e5fa63fbf0ee3378adbacc6cfee 3.39MB / 3.39MB                       1.7s
 => => extracting sha256:2c6d21737d8318aa15c4cc838475029a5efc36c0429e3d8da80d97d0b96d9aaf                            1.2s
 => => extracting sha256:eed0175a0a2c6ea04c0688918deec0baaf3cc4ee3fd31d69088883d577408e52                            0.1s
 => => extracting sha256:9ea77d5fb7aae54d1facbd47df91e06b2f905c693157afe334e026dede65b585                            0.4s
 => => extracting sha256:a745ecb651c283b14331cb456d744c8d43957f9cc831f8768857a4a174da31e8                            0.0s
 => => extracting sha256:17b48befe9035dd48e603b43147fcb19df243e5fa63fbf0ee3378adbacc6cfee                            0.2s
 => [web internal] load build context                                                                                0.0s
 => => transferring context: 132.01kB                                                                                0.0s
 => [web 2/4] WORKDIR /usr/src/app                                                                                   0.2s
 => [web 3/4] COPY . .                                                                                               0.0s
 => [web 4/4] RUN pip install --no-cache-dir -r requirements.txt                                                    24.6s
 => [web] exporting to image                                                                                         1.3s
 => => exporting layers                                                                                              1.3s
 => => writing image sha256:aca89961d1227d9f19d1121612016095640c4916ad0b7ae9e465179ecb9c22b4                         0.0s
 => => naming to docker.io/library/price-simulation-web                                                              0.0s
[+] Running 2/1
 ✔ Network price-simulation_default  Created                                                                         0.0s
 ✔ Container price-simulation-web-1  Created                                                                         0.0s
Attaching to web-1
web-1  |
web-1  | Collecting usage statistics. To deactivate, set browser.gatherUsageStats to False.
web-1  |
web-1  |
web-1  |   You can now view your Streamlit app in your browser.
web-1  |
web-1  |   Network URL: http://172.18.0.2:8501
web-1  |   External URL: http://68.43.183.94:8501
```
Python venv build also works:

```py
Installing collected packages: numpy, fonttools, contourpy, six, python-dateutil, zipp, importlib-resources, pyparsing, pillow, kiwisolver, packaging, cycler, matplotlib, click, blinker, urllib3, certifi, charset-normalizer, idna, requests, importlib-metadata, cachetools, protobuf, MarkupSafe, jinja2, pydeck, toml, typing-extensions, mdurl, markdown-it-py, pygments, rich, toolz, rpds-py, attrs, referencing, jsonschema-specifications, pkgutil-resolve-name, jsonschema, tzdata, pytz, pandas, altair, watchdog, tornado, validators, backports.zoneinfo, tzlocal, tenacity, pyarrow, smmap, gitdb, gitpython, streamlit
Successfully installed MarkupSafe-2.1.3 altair-5.2.0 attrs-23.1.0 backports.zoneinfo-0.2.1 blinker-1.7.0 cachetools-5.3.2 certifi-2023.11.17 charset-normalizer-3.3.2 click-8.1.7 contourpy-1.1.1 cycler-0.12.1 fonttools-4.46.0 gitdb-4.0.11 gitpython-3.1.40 idna-3.6 importlib-metadata-6.11.0 importlib-resources-6.1.1 jinja2-3.1.2 jsonschema-4.20.0 jsonschema-specifications-2023.11.2 kiwisolver-1.4.5 markdown-it-py-3.0.0 matplotlib-3.7.4 mdurl-0.1.2 numpy-1.24.4 packaging-23.2 pandas-2.0.3 pillow-10.1.0 pkgutil-resolve-name-1.3.10 protobuf-4.25.1 pyarrow-14.0.1 pydeck-0.8.1b0 pygments-2.17.2 pyparsing-3.1.1 python-dateutil-2.8.2 pytz-2023.3.post1 referencing-0.32.0 requests-2.31.0 rich-13.7.0 rpds-py-0.13.2 six-1.16.0 smmap-5.0.1 streamlit-1.29.0 tenacity-8.2.3 toml-0.10.2 toolz-0.12.0 tornado-6.4 typing-extensions-4.9.0 tzdata-2023.3 tzlocal-5.2 urllib3-2.1.0 validators-0.22.0 watchdog-3.0.0 zipp-3.17.0
(.venv) ubuntu@ip-172-31-20-134:~/price-simulation$ streamlit run main.py

Collecting usage statistics. To deactivate, set browser.gatherUsageStats to False.


  You can now view your Streamlit app in your browser.

  Network URL: http://172.31.20.134:8501
  External URL: http://35.156.219.22:8501
  ```
