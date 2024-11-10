# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  


* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/community-health-check.md
* **Milestone Number:** 2

**Context** (optional)
Milestone 2: 
Milestone 1: The goal was to describe how we will build a network using Twitter data to measure the health ("vibes") of Twitter communities. 

**Deliverables**

### Milestone 2 — Twitter API (dashboard backend)

- **Estimated duration:** 6 weeks
- **FTE:**  5
- **Costs:** 9 000 USDC

The aim of milestone 2 was to implement the twitter pipeline. We have created a script for fetching and cleaning the data and computing the metrics.

While building, there were changes in the Twitter API that forced us to reconfigure our analysis. In contrast to other Twitte analytics tools, we took a network approach, measuring the pattern of interactions (likeing, retweeting, quoting, mentioning) between a focal user (e.g., Polkadot) and the accounts that interact with the focal user. To build the network, we needed to know:
1. Who is interacting with the focal user on Twitter ([the Connectors](https://github.com/RnDAO/tc-Documentation/blob/master/Twitter-vibes/Twitter_Community_Vibes.md))
2. With whom are the connectors interacting

The second step was crucial to build the network. However, this also meant the data we needed to fetch quickly exceeded the API limit. At our current stage, moving to the pro plan ($1500/month) is financially not viable. 

When submitting the project, we were aware of the rate limit. The change to the API announced on [June 26th](https://developer.twitter.com/en/updates/changelog) killed our most interesting metric for the Twitter dashboard (Community vibes).


| Number | Deliverable | Link | Notes | 
| -----: | ----------- | ------|------- |
| 0a. | License: Apache 2.0 | https://github.com/TogetherCrew/twitter-bot/blob/main/LICENSE | |
| 0b. | Documentation | https://github.com/TogetherCrew/twitter-bot/blob/main/README.md  |  |
| 0c. | Testing and Testing Guide | https://github.com/TogetherCrew/twitter-bot/blob/main/README.md | The Readme file in the Twitter bot repo contains information about how to run the tests. |
| 0d. | Docker | https://github.com/TogetherCrew/twitter-bot/tree/main |  |
| 0e. | Article | na | Given that we can not produce a user-facing Twitter dashboard, documentation is not necessary.  |
| 1. | Twitter data pipeline | https://github.com/TogetherCrew/twitter-bot |  |





| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide a basic tutorial for how to run the file to receive the Twitter data and analyse it. The user has to have their own Twitter API.|
| 0c. | Testing and Testing Guide | Running the data pipeline and analyzing the data will be covered by tests to ensure functionality. We will describe how to run the tests|.
| 0d. | Docker | We will deliver a docker file to tests the functionality. |
| 1. | Twitter data pipeline | We will create a data pipeline fetching data from Twitter using their API. The user will enter one or a few twitter handles. The data pipeline is build using Python. We have already a data flow for Discord visible in the following repos: [Discord bot](https://github.com/RnDAO/tc-botComm), [interactions with db](https://github.com/RnDAO/tc-dbComm), and [interactions between front-end and db](https://github.com/RnDAO/tc-serverComm). |




**Additional Information**
We had a call with Keegan to discuss the issues we had with the Twitter API, demoed the front-end, and discussed what we should deliver for milestone 2.
