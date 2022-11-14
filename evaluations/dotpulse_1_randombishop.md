# Evaluation



- **Status:** Accepted
- **Application Document:** [DotPulse](https://github.com/w3f/Grants-Program/blob/master/applications/DotPulse.md)
- **Milestone:** 1
- **Kusama Identity:** randombishop (https://sub.id/5Gnixfp6vnznRkr91JgwkxYnCJCyHr8EaBzYfFsUKcTMzVYF)
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| -----: | ----------- | -------- | ---- | ---------------- |
| 0a. | License | Yes | [License](https://github.com/CrossChainLabs-DOT/dotpulse-api/blob/b82ab47f21fecb4c49f2d8c88d516bc0beaf3247/LICENSE) | MIT |
| 0b. | Documentation | Yes | [API-docs](https://github.com/CrossChainLabs-DOT/dotpulse-api/blob/17ff96d15795fed3f061eeff95113866a7ebe15d/docs.md), [Scraper-docs](https://github.com/CrossChainLabs-DOT/dotpulse-scraper/blob/1fceb0cff9e7bbf4584e58d9274c5cbb2592264d/docs.md), [Video](https://drive.google.com/file/d/1ZMQ13BfiN3d0gamNcYL5uhIKOzcIg6N3/view?usp=share_link) | OK. Additional good to have: 1) Audio in the video. 2) Overall introduction of the technical architecture of the projects, frameworks used, and entry-point to the different parts of the docs. 3) Also a document describing the schema of the database would be useful. |
| 0c. | Testing and Testing Guide | Yes | [API-test](https://github.com/CrossChainLabs-DOT/dotpulse-api/blob/17ff96d15795fed3f061eeff95113866a7ebe15d/README.md), [Scraper-test](https://github.com/CrossChainLabs-DOT/dotpulse-scraper/blob/1fceb0cff9e7bbf4584e58d9274c5cbb2592264d/README.md) | All tests PASS. The number of tests is minimal, in future iterations, would be nice to enrich the test suite with edge cases and bug cases. |
| 0d. | Docker | Yes | [Docker-file](https://github.com/CrossChainLabs-DOT/dotpulse-scraper/blob/3772a20347a19c05772ff907b8a53c085bef0515/docker-compose.yml) | OK |
| 1. | Implement Github scraper functionality | Yes | [scraper.js](https://github.com/CrossChainLabs-DOT/dotpulse-scraper/blob/3772a20347a19c05772ff907b8a53c085bef0515/scraper.js) | Periodically update the list of repositories that are being part of the Polkadot organizations on GitHub |
| 2. | Implement Github scraper functionality | Yes | scraper.js | Calculate the total number of commits, repositories, contributors and PRs from the entire Polkadot ecosystem |
| 3. | Implement Github scraper functionality | Yes | scraper.js | Get the contributors of the month based on the number of commits |
| 4. | Implement Github scraper functionality | Yes | scraper.js | Calculate the total number of commits across all the repositories for each month over the last year |
| 5. | Implement Github scraper functionality | Yes | scraper.js | Collect the total number of issues that are being opened or closed at the moment |
| 6. | Implement Github scraper functionality | Yes | scraper.js | Calculate the number of active contributors  for each month over the last year |
| 7. | Implement Github scraper functionality | Yes | scraper.js | Collect the list of recent commits across all the Polkadot's Github repositories from the last 30 days |
| 8. | Finalize the UX | Yes | [UX](https://drive.google.com/file/d/1przeJWgvpv_lI4QDpX-GlQsMHCBaSToh/view?usp=share_link) | OK
| 9. | Implement the DotPulse APIs required by frontend | Yes | [api.js](https://github.com/CrossChainLabs-DOT/dotpulse-api/blob/2c63a62fbf4283250b3a49633c4173e351c6382b/api.js) | Statistics API that returns the overall number of commits, repositories, contributors, PRs |
| 10. | Implement the DotPulse APIs required by frontend | Yes | api.js | Contributors API that returns the list of contributors of the month based on the number of commits over the last month |
| 11. | Implement the DotPulse APIs required by frontend | Yes | api.js | Issues APIs that return the total number of issues, the number of closed and open issues |
| 12. | Implement the DotPulse APIs required by frontend | Yes | api.js | Commits API that returns the total number of commits per month 




## General Notes

Good quality deliverable with clean code and all features worked at first try.

Improvement suggestions:

- The video without audio is not very helpful imo, 
would prefer a document that presents a high level introduction to the different components of the project and the dev frameworks used.

- Document the database schema.

- More tests (mainly edge cases and bugs as they're discovered)

