# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  


* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/community-health-check.md
* **Milestone Number:** 2

**Context** (optional)
Milestone 2: 
Milestone 1: The goal was to describe how we will build a network using Twitter data to measure the health ("vibes") of Twitter communities. 

**Deliverables**

### Milestone 2 — Twitter community health dashboard

- **Estimated duration:** 6 weeks
- **FTE:**  5
- **Costs:** 10 000 USDC

The aim of mileestone 2 was to implement the twitter pipeline and build the front-end for users to view the results of the analysis. We have created a script for fetching and analzing the data, and developed a dashboard for users to access the results. 

While building, there were changes in the Twitter API that forced us to reconfigure our analysis. In contrast to other Twitte analytics tools, we took a network approach, measuring the pattern of interactions (likeing, retweeting, quoting, mentioning) between a focal user (e.g., Polkadot) and the accounts that interact with the focal user. To build the network, we needed to know:
1. Who is interacting with the focal user on Twitter ([the Connectors](https://github.com/RnDAO/tc-Documentation/blob/master/Twitter-vibes/Twitter_Community_Vibes.md))
2. With whom are the connectors interacting

The second step was crucial to build the network. However, this also meant the data we needed to fetch quickly exceeded the API limit. At our current stage, moving to the pro plan ($1500/month) is financially not viable. 

When submitting the project, we were aware of the rate limit. The change to the API announced on [June 26th](https://developer.twitter.com/en/updates/changelog) killed our most interesting metric for the Twitter dashboard (Community vibes).

While testing our dashboard, the user experience was sub-par with long wait times imposed by the API limits. 


| Number | Deliverable | Link | Notes | 
| -----: | ----------- | ------|------- |
| 0a. | License: Apache 2.0 | https://github.com/TogetherCrew/twitter-bot/blob/main/LICENSE | |
| 0b. | Documentation | https://github.com/RnDAO/tc-Documentation/blob/master/Twitter-vibes/Twitter_Community_Vibes.md  | Given that we couldn't deliver a dashboard users can connect their Twitter account to, and analyze their community, documentation of how to use the dashboard isn't necessary. If someone would want to run the Twitter-bot, they would have to subscribe to the basic plan to get access to the Twitter API. |
| 0c. | Testing and Testing Guide | https://github.com/TogetherCrew/twitter-bot/blob/main/README.md | The Readme file in the Twitter bot repo contains information about how to run the tests. |
| 0d. | Docker | https://github.com/TogetherCrew/twitter-bot/tree/main |  |
| 0e. | Article | na | Given that we can not produce a user-facing Twitter dashboard, documentation is not necessary.  |
| 1. | Twitter data pipeline | https://github.com/TogetherCrew/twitter-bot |  |
| 2. | Twitter dashboard | https://github.com/TogetherCrew/frontend/pull/193/ https://github.com/TogetherCrew/frontend/pull/193/  | The front-end was designed and build. However, given the changes in the Twitter pipeline we didn't commit them. The linked pull requests shows how we planned to integrate the Twitter dashboard into our application.  |
| 3. | Workshop/call | https://cal.com/katerina-bohle-carbonell-wvtw5a/30min | It's up to the community team if they want to do a call. |


**Additional Information**
We had a call with Keegan to discuss the issues we had with the Twitter API, demoed the front-end, and discussed what we should deliver for milestone 2.
