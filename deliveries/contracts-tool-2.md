# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/contracts-tool.md
* **Milestone Number:** 2

**Context** (optional)
> Please provide a short paragraph or two connecting the deliverables in this milestone and describing their purpose.

**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| **0a.** | License | [GPLv3](https://github.com/paritytech/smart-bench/blob/master/LICENSE) ||
| **0b.** | Documentation | [README for benchmark](https://github.com/paritytech/smart-bench/blob/master/launch/README.md), [README for graphs](https://github.com/paritytech/smart-bench/blob/master/stats/README.md) ||
| **0c.** | Testing and Testing Guide | [README for smart-bench](https://github.com/paritytech/smart-bench/blob/master/README.md) [README for benchmark](https://github.com/paritytech/smart-bench/blob/master/launch/README.md)||
| **0d.** | Docker | [Dockerfile](https://github.com/paritytech/smart-bench/blob/master/launch/smart_bench.Dockerfile), [Docker Compose](https://github.com/paritytech/smart-bench/blob/master/stats/docker-compose.yml)||
| 0e. | Article | [Article](https://medium.com/@s.miasojed/6b0bf02dec2d) ||
| 1. | Github Actions benchmark jobs | [Benchmark workflow](https://github.com/paritytech/smart-bench/blob/master/.github/workflows/benchmark.yml), [Workflow Action](https://github.com/paritytech/smart-bench/blob/master/.github/actions/get-contract-language/action.yml)||
| 2. | Results processing tools | [Convert smart-bench output to CSV](https://github.com/paritytech/smart-bench/blob/master/stats/smart_bench_to_csv.sh), [Inject CSV](https://github.com/paritytech/smart-bench/blob/master/stats/get_graph.sh) ||
| 3. | Github Actions workflow | [Github Action workflow](https://github.com/paritytech/smart-bench/actions/workflows/benchmark.yml), [Benchmark workflow v1.0.0](https://github.com/paritytech/smart-bench/blob/v1.0.0/.github/workflows/benchmark.yml), [Benchmark workflow v1.7.0](https://github.com/paritytech/smart-bench/blob/v1.7.0/.github/workflows/benchmark.yml)|Previously, we planned to run benchmarks on any chain version, but it appeared that parachains are tightly coupled with relay chains, Zombinet and smart-bench (subxt/scale encoded chain metadata), making such an approach impossible. The current approach is to test on branches: [v1.0.0](https://github.com/paritytech/smart-bench/tree/v1.0.0) is compatible with polkadot release v1.0.0 and branch [v1.7.0](https://github.com/paritytech/smart-bench/tree/v1.7.0) is compatible with polkadot release v1.7.0. To run benchmark go to [GHA](https://github.com/paritytech/smart-bench/actions/workflows/benchmark.yml), select `Run workflow` and branch (v1.0.0 or v1.7.0). Results are visible in [README.md v1.0.0](https://github.com/paritytech/smart-bench/blob/v1.0.0/README.md)/[README.md v1.7.0](https://github.com/paritytech/smart-bench/blob/v1.7.0/README.md) file and [gh_pages](https://github.com/paritytech/smart-bench/tree/gh-pages)|
| 4. | Updated smart-bench | [Subxt update](https://github.com/paritytech/smart-bench/commit/66641f64b232eedd29f00ebc961f10f7e6abdf40) |

**Additional Information**
> Any further comments on the milestone that you would like to share with us.

Benchmarks do not work on newest polkadot releases >= 1.8.0 due to the issue:
https://github.com/paritytech/polkadot-sdk/issues/1202#issuecomment-1803786956
