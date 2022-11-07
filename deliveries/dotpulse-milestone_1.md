# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [DotPulse.md](https://github.com/w3f/Grants-Program/blob/e0c7bff710ac0f102b4699229a4a85fdf147ec89/applications/DotPulse.md)
* **Milestone Number:** 1

**Context**

The main deliverables are:
- GitHub Scraper that will collect and calculate accordingly all the required data from GitHub: list of commits, repositories, issues, contributors and PRs.
- DotPulse APIs that will serve to get the data from the scraper and interact with the DotPulse dashboard

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License |[License](https://github.com/CrossChainLabs-DOT/dotpulse-api/blob/b82ab47f21fecb4c49f2d8c88d516bc0beaf3247/LICENSE)| Apache 2.0 / MIT | 
| 0b. | Documentation | [API-docs](https://github.com/CrossChainLabs-DOT/dotpulse-api/blob/17ff96d15795fed3f061eeff95113866a7ebe15d/docs.md), [Scraper-docs](https://github.com/CrossChainLabs-DOT/dotpulse-scraper/blob/1fceb0cff9e7bbf4584e58d9274c5cbb2592264d/docs.md), [Video](https://drive.google.com/file/d/1ZMQ13BfiN3d0gamNcYL5uhIKOzcIg6N3/view?usp=share_link) | Demo video on how to run and test the implemented functionalities| 
| 0c. | Testing and Testing Guide | [API-test](https://github.com/CrossChainLabs-DOT/dotpulse-api/blob/17ff96d15795fed3f061eeff95113866a7ebe15d/README.md), [Scraper-test](https://github.com/CrossChainLabs-DOT/dotpulse-scraper/blob/1fceb0cff9e7bbf4584e58d9274c5cbb2592264d/README.md) | Describes how to run the tests|
| 0d. | Docker | [Docker-file](https://github.com/CrossChainLabs-DOT/dotpulse-scraper/blob/3772a20347a19c05772ff907b8a53c085bef0515/docker-compose.yml) | Test all the functionalities |
| 1. | Implement Github scraper functionality | [scraper.js](https://github.com/CrossChainLabs-DOT/dotpulse-scraper/blob/3772a20347a19c05772ff907b8a53c085bef0515/scraper.js) | Periodically update the list of repositories |
| 2. | Implement Github scraper functionality | [scraper.js](https://github.com/CrossChainLabs-DOT/dotpulse-scraper/blob/3772a20347a19c05772ff907b8a53c085bef0515/scraper.js) | Calculate the total number of commits, repositories, contributors and PRs |
| 3. | Implement Github scraper functionality | [scraper.js](https://github.com/CrossChainLabs-DOT/dotpulse-scraper/blob/3772a20347a19c05772ff907b8a53c085bef0515/scraper.js) | Get the contributors of the month |
| 4. | Implement Github scraper functionality | [scraper.js](https://github.com/CrossChainLabs-DOT/dotpulse-scraper/blob/3772a20347a19c05772ff907b8a53c085bef0515/scraper.js) | Calculate the total number of commits across all the repositories for each month over the last year |
| 5. | Implement Github scraper functionality | [scraper.js](https://github.com/CrossChainLabs-DOT/dotpulse-scraper/blob/3772a20347a19c05772ff907b8a53c085bef0515/scraper.js) | Collect the total number of issues that are being opened or closed at the moment |
| 6. | Implement Github scraper functionality | [scraper.js](https://github.com/CrossChainLabs-DOT/dotpulse-scraper/blob/3772a20347a19c05772ff907b8a53c085bef0515/scraper.js) | Calculate the number of active contributors  for each month over the last year |
| 7. | Implement Github scraper functionality | [scraper.js](https://github.com/CrossChainLabs-DOT/dotpulse-scraper/blob/3772a20347a19c05772ff907b8a53c085bef0515/scraper.js) | Collect the list of recent commits across the repositories from the last 30 days |
| 8. | Finalize the UX | [UX](https://drive.google.com/file/d/1przeJWgvpv_lI4QDpX-GlQsMHCBaSToh/view?usp=share_link) | Final UX |
| 9. | Implement the DotPulse APIs required by frontend | [api.js](https://github.com/CrossChainLabs-DOT/dotpulse-api/blob/2c63a62fbf4283250b3a49633c4173e351c6382b/api.js) | Statistics API that returns the number of commits, repositories, contributors, PRs |
| 10. | Implement the DotPulse APIs required by frontend | [api.js](https://github.com/CrossChainLabs-DOT/dotpulse-api/blob/2c63a62fbf4283250b3a49633c4173e351c6382b/api.js) | Contributors API that returns the list of contributors of the month |
| 11. | Implement the DotPulse APIs required by frontend | [api.js](https://github.com/CrossChainLabs-DOT/dotpulse-api/blob/2c63a62fbf4283250b3a49633c4173e351c6382b/api.js) | Issues APIs that return the total number of issues, the number of closed and open issues |
| 12. | Implement the DotPulse APIs required by frontend | [api.js](https://github.com/CrossChainLabs-DOT/dotpulse-api/blob/2c63a62fbf4283250b3a49633c4173e351c6382b/api.js) | Commits API that returns the total number of commits per month 

**Additional Information**
