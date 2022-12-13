# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/DotPulse.md
* **Milestone Number:** 2

**Context**

The main deliverables are:
- DotPulse APIs that will serve to get the data from the scraper and interact with the DotPulse dashboard
- DotPulse Dashboard that will include:
  - the statistics top section with the overall number of commits, repositories, contributors and PRs
  - contributors of the month
  - commits graph with info regarding the last 12 months
  - issues graph that shows the number of open and closed issues together with their total
  - chart of active contributors and active repositories for each month over the last year
  - the recent commits section that shows the activity of the ecosystem over the last 30 days, with clickable links to open a commit, its repository or the developer's profile on GitHub

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License |[License](https://github.com/CrossChainLabs-DOT/dotpulse-webapp/blob/5f344e21291f86faa086f3e3619e1afef4cb9cd9/LICENSE)| Apache 2.0 / MIT | 
| 0b. | Documentation | [API-docs](https://github.com/CrossChainLabs-DOT/dotpulse-api/blob/f3cf33274b9dbea3404e36faef4e3f01e496701e/docs.md), [Webapp-docs](https://github.com/CrossChainLabs-DOT/dotpulse-scraper/blob/1fceb0cff9e7bbf4584e58d9274c5cbb2592264d/docs.md), [Video-demo](https://drive.google.com/file/d/1b0Mz9aIjra9NJDmaz_RVURbaLrXjnQnw/view?usp=sharing) | Demo video that shows how a user can easily use DotPulse app | 
| 0c. | Testing and Testing Guide | [API-test](https://github.com/CrossChainLabs-DOT/dotpulse-api/blob/f3cf33274b9dbea3404e36faef4e3f01e496701e/README.md), [Webapp-test](https://github.com/CrossChainLabs-DOT/dotpulse-webapp/blob/5f344e21291f86faa086f3e3619e1afef4cb9cd9/README.md) [Video](https://drive.google.com/file/d/1mb3vZqbavempMEbPxATmM77pqwOIND1P/view?usp=sharing)| Describes how to run the tests|
| 0d. | Docker | [Docker-file](https://github.com/CrossChainLabs-DOT/dotpulse-scraper/blob/27344758aade05cdd4a7a6c1a121599046331ad1/docker-compose.yml) [Docker-video](https://drive.google.com/file/d/1PLhHs-1AkmWK6LHl0Ss07Yjiv_DyQqjf/view?usp=sharing) | Test all the functionalities |
| 0e.	| Article | [Article](https://github.com/CrossChainLabs-DOT/dotpulse-webapp/blob/4baaf84c253b8235fd808fa203b5de30a3a3467e/Article.md) | Article that demo the DotPulse functionalities |
| 1. | Implement the DotPulse APIs required by frontend | [api.js](https://github.com/CrossChainLabs-DOT/dotpulse-api/blob/f3cf33274b9dbea3404e36faef4e3f01e496701e/api.js) | Activity API that returns the number of active contributors and active repositories for each month over the last year |
| 2. | Implement the DotPulse APIs required by frontend | [api.js](https://github.com/CrossChainLabs-DOT/dotpulse-api/blob/f3cf33274b9dbea3404e36faef4e3f01e496701e/api.js) | Recent commits API that returns the list of recent commits across all Polkadot repositories over the last 30 days |
| 3. | Build the DotPulse dashboard | [Statistics](https://github.com/CrossChainLabs-DOT/dotpulse-webapp/blob/a2ae9b7da24ec39a5f7a7c64864f5150ed19fef7/src/sections/CardWidget.js) | Display the statistics top section with the overall number of commits, repositories, contributors and PRs |
| 4. | Build the DotPulse dashboard | [TopContributors](https://github.com/CrossChainLabs-DOT/dotpulse-webapp/blob/a2ae9b7da24ec39a5f7a7c64864f5150ed19fef7/src/sections/TopContributors.js) | Show the contributors of the month |
| 5. | Build the DotPulse dashboard | [CommitsChart](https://github.com/CrossChainLabs-DOT/dotpulse-webapp/blob/a2ae9b7da24ec39a5f7a7c64864f5150ed19fef7/src/sections/CommitsChart.js) | Commits bar chart with info regarding the last 12 months |
| 6. | Build the DotPulse dashboard | [IssuesChart](https://github.com/CrossChainLabs-DOT/dotpulse-webapp/blob/a2ae9b7da24ec39a5f7a7c64864f5150ed19fef7/src/sections/Issues.js) | Issues pie chart that shows the number of open and closed issues together with their total |
| 7. | Build the DotPulse dashboard | [EcosystemChart](https://github.com/CrossChainLabs-DOT/dotpulse-webapp/blob/a2ae9b7da24ec39a5f7a7c64864f5150ed19fef7/src/sections/EcosystemChart.js) | Chart of active contributors and active repositories for each month over the last year  |
| 8. | Build the DotPulse dashboard | [RecentCommits](https://github.com/CrossChainLabs-DOT/dotpulse-webapp/blob/a2ae9b7da24ec39a5f7a7c64864f5150ed19fef7/src/sections/RecentCommits.js) | The recent commits section that shows the activity of the ecosystem over the last 30 days, with clickable links to open a commit, its repository or the developer's profile on GitHub |
| 9. | Prepare the final adjustments | [dotpulse.app](https://dotpulse.app/) | Create the production infrastructure on Google Cloud |
| 10. | Prepare the final adjustments | [dotpulse.app](https://dotpulse.app/) | Deploy dotpulse.app webapp |
| 11. | Prepare the final adjustments | [dotpulse.app](https://dotpulse.app/) | Run the final tests |
| 12. | Prepare the final adjustments | [dotpulse.app](https://dotpulse.app/) | Public release |

**Additional Information**