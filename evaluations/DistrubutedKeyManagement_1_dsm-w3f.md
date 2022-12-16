# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/DistributedKeyManagement.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 1. | Documentation |<ul><li>[x] </li></ul>|https://www.kryptik.app/blog|  | 
| 2.  | Article |<ul><li>[x] </li></ul>| https://www.kryptik.app/developer/recovery |  | 
| 3. | Formal Investigation |<ul><li>[ ] </li></ul>|https://www.kryptik.app/blog| see general notes | 
| 1. | Research Paper |<ul><li>[ ] </li></ul>|https://www.kryptik.app/blog/wallets| see general notes | 

**General Notes**


From the research questions mentioned, follow the status of each one for me: 
* What is the threat model? (partial, some parts missing)
* How can keys be synced across devices? (partial, there is an idea without PoC)
* How can the system include more than two shareholders? (partial, no concrete solution)
* What is the ideal number of shareholders? (no answer)
* Is there any application to social recovery? (no answer)

More details are below:


* Citations/References (there are no citations at all in the article). Please provide citations to the technologies, concepts, and statements in the article that were produced or stated for anyone else than you.

* What is the difference between distributed key management wallets to MPC wallets (https://www.alchemy.com/overviews/mpc-wallet). I think you should at least compare distributed key management wallets with MPC wallets since they aim to solve the same problem.

* Another drawback of the system is when we have 2 of 2, one part with the user and another in a server if the server is compromised or unavailable all wallets that use this server are also unavailable. I think this weak point should be mentioned as well. The system to be fault tolerant the scheme should have redundancy (at least two servers/machines with the same information), like 2 of 3, 3 of 5, or 5 of 7 are common schemes for fault tolerance. 

* The existence of a centralized cyphertext is either another weak point, this one is cited in the article.

* What if the authentication provider is unavailable or compromised? 

More on threat modeling here (https://owasp.org/www-community/Threat_Modeling) and here (https://owasp.org/www-community/Threat_Modeling_Process).

* Just some ideas and questions. In an N of M approach who are the shareholders that hold the shared secret key? How they are chosen? Are they reliable? For example, if I select to share with my relatives this could enable social recovery. If they need to be available for use in the wallet, Is that the same thing as having a multisig wallet but I just need to be available to authorize someone to transact? If I share the ciphertext as well with my relatives is that a group wallet? In a fault-tolerant schema (2 of 3 for example) is that Social Recovery already implemented for 1 element missing?


Regarding the research paper, there is only a blog post, when the application says: "The paper will be released as an open-source document on Github". The blog post is mostly focused on Krypt when the application seems to be an unbiased research paper. 



