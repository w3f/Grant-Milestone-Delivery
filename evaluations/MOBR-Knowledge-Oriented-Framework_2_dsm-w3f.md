# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Knowledge-Oriented-Framework.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>|[License](https://creativecommons.org/licenses/by-sa/4.0/)| | 
| 0b. | Documentation/Tutorial |<ul><li>[x] </li></ul>|[TR1](https://github.com/mobr-ai/POnto/raw/main/deliverables/milestone2/TR%20-%20Use%20case.pdf)|  | 
| 0c. | Methodology |<ul><li>[ ] </li></ul>|[Article Section 3](https://github.com/mobr-ai/POnto/raw/main/deliverables/milestone2/Article.pdf)| Need review of terms used and citations/references |
| 0d. | Infrastructure |<ul><li>[x] </li></ul>|[TR2](https://github.com/mobr-ai/POnto/raw/main/deliverables/milestone2/TR%20-%20Infrastructure%20requirements.pdf)||
| 0e. | Article |<ul><li>[x] </li></ul>|[Article](https://github.com/mobr-ai/POnto/raw/main/deliverables/milestone2/Article.pdf)| | 
| 1. | Case Study |<ul><li>[ ] </li></ul>|[TR3](https://github.com/mobr-ai/POnto/raw/main/deliverables/milestone2/TR%20-%20Case%20study.pdf)| Need review of the questions|


## Evaluation V1

### Methodology

The definition of the case study concept needs citations (Section 2, paragraph 1). 

The proposed methodology looks more to be a [Survey](https://en.wikipedia.org/wiki/Survey_(human_research)) than a [Case Study](https://en.wikipedia.org/wiki/Case_study). You can find informal references for what those primary research methods mean in the links provided. Please review the concepts involved in the text or provide the references that embase that your study is a case study and not a survey. 

### Case Study (or Survey)

The questionnaire asks some questions about trading tokens and other ecosystems. Why these questions would be relevant regarding the perspective to research Polkadot/Kusama ecosystem?

"Which of these tokens have you traded before? Check all that apply."

"Which Web3 networks have you accessed information and ledger data from before? Check all that apply."


In the question "Which of the following queries do you think would be useful to make in a query service?" I think it limits a lot the possibilities of queries that the user would make. The questions are all generic and don't have a specific connection with Polkadot/Kusama ecosystem. I think would be better to ask about the entities involved in queries than give examples of queries that the user may find relevant. For example, Polkadot/Kusama ecosystem has many specific concepts that would be possible to ask if the user wanted to query about that entity and had problems finding the relevant information about it, or how easy is to find information about those entities. Examples: Parachains, XCM, collators, validators, nominators, etc. The model for this idea is: Demand for the info + Info is difficult to find -> Willing to use a better tool to find it. I saw the open question made but I think the examples of queries provided are limited regarding the scope of queries that the user can have and don't help the user to think about the possible queries they would like to have regarding Polkadot/Kusama ecosystem.

"Any other queries you would use to gather information from Web3 networks?" Is this questionnaire about Polkadot/Kusama ecosystem or is a generic one?

I feel the perspective of the questionnaire with a focus on trader users. Would be better to have more of an investment perspective and to know what questions are relevant for investors to know about the health or growth of an ecosystem. You may want to take a look at [Mesari reports](https://messari.io/research) to find relevant information about these possible questions that investors may have or want to know to invest in a web3 project. 

Another relevant perspective for the questionaries is the users of the ecosystem. People that use the projects, stake, validators, developers, etc. Traders are not the only users of this service. You may want to take a look at [Polkadot Forum](https://forum.polkadot.network/) to see what people want to know there. It is also a good venue to talk with Polkadot/Kusama ecosystem users.

### Off-topic

Considering this aim definition: "The main goal of the proposed case study methodology is to assess the potential of a query engine service for accessing and analyzing data from distributed ledgers. Specifically, the relevance of having an ontology and a controlled natural language supporting this service.". 

Are you aware of [this RFP](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/data_analysis_tools.md)? We have a demand to answer complex questions from the perspective of user support. Can you take a look and see if your approach would be able to fit this RFP? Furthermore, consider taking a look at [this grant application](https://github.com/w3f/Grants-Program/pull/1764) and if possible provide some comparison with your approach. This is more to direct you to a path where we already have a demand since you are looking for it in your research. Another question is if the proposed tool would be able to index and query TBs of data. What would be the cost of maintaining this index and tool available for users? Would you be able to afford this cost for yourself or from a sustainable business model?




