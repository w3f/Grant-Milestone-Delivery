# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/contracts-tool.md
- **Milestone:** 2
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/paritytech/smart-bench/blob/1be4373398c342b38beea7d45c85681c9c97739e/LICENSE) | GPLv3 |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [launch/README.md](https://github.com/paritytech/smart-bench/blob/1be4373398c342b38beea7d45c85681c9c97739e/launch/README.md), [stats/README.md](https://github.com/paritytech/smart-bench/blob/1be4373398c342b38beea7d45c85681c9c97739e/stats/README.md) | Describes building, running various chains, running the tool locally and generating data and graphs. |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [smart-bench/README.md](https://github.com/paritytech/smart-bench/blob/1be4373398c342b38beea7d45c85681c9c97739e/README.md#integration-tests) | — |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [/launch](https://github.com/paritytech/smart-bench/blob/1be4373398c342b38beea7d45c85681c9c97739e/launch/smart_bench.Dockerfile), [/stats](https://github.com/paritytech/smart-bench/blob/1be4373398c342b38beea7d45c85681c9c97739e/stats/docker-compose.yml) | — |
| 0e. | Article | <ul><li>[x] </li></ul> | [medium.com](https://medium.com/@s.miasojed/contracts-benchmarking-in-substrate-chains-6b0bf02dec2d) | Minor changes made on request |
| 1. | Github Actions benchmark jobs | <ul><li>[x] </li></ul> | [v1.0.0](https://github.com/paritytech/smart-bench/blob/92c22be26e0ed391eeeae2d709af307952d347d1/.github/workflows/benchmark.yml), [v1.7.0](https://github.com/paritytech/smart-bench/blob/5bdad1e5e615af5bfb7e77f9ccde71c567189a7b/.github/workflows/benchmark.yml) | — |
| 2. | Results processing tools | <ul><li>[x] </li></ul> | [Convert smart-bench output to CSV](https://github.com/paritytech/smart-bench/blob/1be4373398c342b38beea7d45c85681c9c97739e/stats/smart_bench_to_csv.sh), [Inject CSV](https://github.com/paritytech/smart-bench/blob/1be4373398c342b38beea7d45c85681c9c97739e/stats/get_graph.sh) | — |
| 3. | Github Actions workflow | <ul><li>[x] </li></ul> | [workflows/benchmark.yml](https://github.com/paritytech/smart-bench/blob/1be4373398c342b38beea7d45c85681c9c97739e/.github/workflows/benchmark.yml) | — |
| 4. | Updated smart-bench | <ul><li>[x] </li></ul> | [commit/66641f](https://github.com/paritytech/smart-bench/commit/66641f64b232eedd29f00ebc961f10f7e6abdf40) | — |


## General Notes

- —
