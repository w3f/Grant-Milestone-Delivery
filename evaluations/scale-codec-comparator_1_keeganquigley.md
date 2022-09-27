
# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/scale-codec-comparator.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley


| Number | Deliverable   | Link                                                                                 | Notes |
|--------|---------------|--------------------------------------------------------------------------------------|-------|
| 0a.     | License   | MIT License                            |       |
| 0b.     | Documentation       | https://github.com/gmajor-encrypt/scale-codec-comparator                                                                        | Documentation is minimal, but a description was added upon request.   |
| 1.     | Tests         | https://github.com/gmajor-encrypt/scale-codec-comparator#how-to-test                 | Successful      |
| 2.     | Github action | https://github.com/gmajor-encrypt/scale-codec-comparator/tree/main/.github/workflows | Successful      |

# General Notes

All codec comparisons run successfully. Though scale.go only works with x86/64 processors. Github Actions run successfully upon commits. Tests perform as they should, and results compare successfully with `parity-scale-codec`
