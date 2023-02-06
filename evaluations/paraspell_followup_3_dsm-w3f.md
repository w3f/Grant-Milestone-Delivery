# Evaluation

- **Status:** Accepted.
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ParaSpell_follow-up.md
- **Milestone:** 3 
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>|[MIT SDK](https://github.com/paraspell/sdk/blob/main/LICENSE), [MIT UI-V2](https://github.com/paraspell/ui-v2/blob/main/LICENSE)| MIT| 
| 0b.  | Documentation|<ul><li>[x] </li></ul> |[Usage guide file](https://github.com/paraspell/ui-v2/blob/main/README.md)| 
| 0c.  | Testing guide|<ul><li>[x] </li></ul> |[Testing guide SDK](https://github.com/paraspell/xcm-sdk/tree/main#-development),[Testing guide UI-V2](https://github.com/paraspell/ui-v2#31-prerequisites)|  | 
| 0d.  | Docker|<ul><li>[x] </li></ul> |[Update UI to newest version of SDK](https://github.com/paraspell/ui-v1/commit/5dea10c4e814b7f0123441858c907c31fca0b081), [Guide on launching dockerized version](https://github.com/paraspell/ui-v2#start-application-in-docker-container) |  | 
| 0e. | Article|<ul><li>[x] </li></ul> | [Medium article](https://medium.com/@dudo50/sdk-meant-to-unify-cross-chain-experience-on-polkadot-paraspell-xcm-sdk-ec8a781f4f57)|  |
| 1.  | Release new functionality|<ul><li>[x] </li></ul> |[NPM Commit](https://github.com/paraspell/xcm-sdk/commit/51de81fc0a060a3fdeec004de8c4ddee71c70c6a)|  | 
| 2.a | Update ParaSpell UI I|<ul><li>[x] </li></ul> |[Update UI-V1 to Builder commit](https://github.com/paraspell/ui-v1/commit/2d67280b334f9f18d40c2ce68d831c1d61e6c80f)| | 
| 2.b  | Update ParaSpell UI II|<ul><li>[x] </li></ul> |[Update UI-V1 to Builder commit](https://github.com/paraspell/ui-v1/commit/2d67280b334f9f18d40c2ce68d831c1d61e6c80f)| | 
| 2.c  | Update ParaSpell UI III|<ul><li>[x] </li></ul> |[Update UI-V1 to Builder commit](https://github.com/paraspell/ui-v1/commit/2d67280b334f9f18d40c2ce68d831c1d61e6c80f)| | 
| 3.  | Add comprehensive Wiki guide|<ul><li>[x] </li></ul> |[Wiki guide for UI & SDK](https://paraspell.github.io/docs/)|  | 
| 4.  | Use scaffold template from Milestone 1 to update UI|<ul><li>[x] </li></ul> |[UI-V2](https://github.com/paraspell/ui-v2)|  | 
| 5.  | Integrate suggestions from [evaluation](https://github.com/w3f/Grant-Milestone-Delivery/blob/1343c66d74a1078b2a30972463a614737ed8aa92/evaluations/paraspell_1_keeganquigley.md)|<ul><li>[x] </li></ul> |[Features added in UI-V2](https://github.com/paraspell/ui-v2)|  | 

## Evaluation V3

After considering the balance constraints explained [here](https://github.com/w3f/Grant-Milestone-Delivery/pull/715#issuecomment-1416347119) the transaction worked and the events were shown after the finalization of the transaction. As an improvement, please consider adding the balance observation in the tutorial of the software. Please consider either to report this possible bug with XCM. If it is not a bug, at least someone can help to identify how to identify the case when the XCM transaction is not completed (the balance is not transferred).


## Evaluation V2

Using UI-V2 most of the examples provided for manual testing worked well. However, in the transaction from Parachain to Relay Chain and Parachain to Parachain the the events were not emitted and seems that the values were not transferred. The application shows a msg that the transaction was successful. Could you assist with that? 

Parachain to Relay chain
 
![image](https://user-images.githubusercontent.com/112647953/216694744-b49071d5-7a76-4a6b-ad2d-d0502d950207.png)

![image](https://user-images.githubusercontent.com/112647953/216694758-951346dd-de4c-44be-8928-daf91b77419c.png)

![image](https://user-images.githubusercontent.com/112647953/216694779-a35850d8-ecef-4a34-bb3b-7c53db78682e.png)


Parachain to Parachain

![image](https://user-images.githubusercontent.com/112647953/216694800-05f99678-841d-415d-912c-4c5b1e80da51.png)

![image](https://user-images.githubusercontent.com/112647953/216694807-ef9345fb-90a6-45df-91e9-b5d9963bb1ae.png)

![image](https://user-images.githubusercontent.com/112647953/216694820-c1b614d1-d8c8-439b-9edb-928b21516495.png)


## Evaluation V1

### System tests

As a new UI was provided it needs to be tested. Can you provide examples of each operation inside the user interface with the expected results for manual testing? This can be a user guide incorporated into the software as a user guide after that.

### Docker 

After spinning up the docker container the following log was generated when tring to open the application. Running without docker works well.


```
[2023-02-02T16:35:24.956Z]  "GET /" "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/109.0"
(node:1) [DEP0066] DeprecationWarning: OutgoingMessage.prototype._headers is deprecated
(Use `node --trace-deprecation ...` to show where the warning was created)
[2023-02-02T16:35:24.965Z]  "GET /" Error (404): "Not found"
[2023-02-02T16:35:25.096Z]  "GET /favicon.ico" "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/109.0"
[2023-02-02T16:35:25.097Z]  "GET /favicon.ico" Error (404): "Not found"
[2023-02-02T16:35:28.500Z]  "GET /" "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/109.0"
[2023-02-02T16:35:28.505Z]  "GET /" Error (404): "Not found"
[2023-02-02T16:35:30.422Z]  "GET /" "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/109.0"
[2023-02-02T16:35:30.429Z]  "GET /" Error (404): "Not found"
[2023-02-02T16:35:31.280Z]  "GET /" "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/109.0"
[2023-02-02T16:35:31.281Z]  "GET /" Error (404): "Not found"
[2023-02-02T16:35:34.292Z]  "GET /" "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/109.0"
[2023-02-02T16:35:34.296Z]  "GET /" Error (404): "Not found"
[2023-02-02T16:35:47.651Z]  "GET /" "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/109.0"
[2023-02-02T16:35:47.652Z]  "GET /" Error (404): "Not found"
[2023-02-02T16:35:47.868Z]  "GET /favicon.ico" "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/109.0"
[2023-02-02T16:35:47.869Z]  "GET /favicon.ico" Error (404): "Not found"

```

### Code Quality

UI-V1:  There is no automated test for the user interface.

SDK: Same as M2 for the SDK.


