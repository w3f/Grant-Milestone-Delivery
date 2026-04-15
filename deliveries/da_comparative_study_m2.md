# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/da_comparative_study.md
* **Milestone Number:** 2

**Context**

Milestone 2 delivers the data collection tooling for all six DA protocols and initial datasets demonstrating each tool works on production mainnets. All tools are packaged in a single Docker image for reproducibility.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ---: | --- | --- | --- |
| **0a.** | **Licenses** | [LICENSE](https://github.com/Chainscore/score-da/blob/main/LICENSE), [LICENSE-DATA](https://github.com/Chainscore/score-da/blob/main/LICENSE-DATA) | Apache 2.0 (code), CC BY 4.0 (data/docs) |
| **0b.** | **Documentation** | [Root README](https://github.com/Chainscore/score-da/blob/main/README.md), per-protocol READMEs: [Polkadot](https://github.com/Chainscore/score-da/blob/main/protocol/Polkadot/README.md), [Celestia](https://github.com/Chainscore/score-da/blob/main/protocol/Celestia/README.md), [Avail](https://github.com/Chainscore/score-da/blob/main/protocol/Avail/README.md), [Espresso](https://github.com/Chainscore/score-da/blob/main/protocol/Espresso/README.md), [NEAR](https://github.com/Chainscore/score-da/blob/main/protocol/Near/README.md), [Ethereum](https://github.com/Chainscore/score-da/blob/main/protocol/Ethereum/README.md) | Technical READMEs explaining how to run each collector, data sources, CLI options |
| **0c.** | **Methodology** | [Paper: Methodology (Section IV)](https://github.com/Chainscore/score-da/blob/main/paper-latex/sections/methodology.tex) | Describes data collection implementation: metrics captured per protocol, API sources, sampling approach. Covers reproducibility — each protocol README has steps to re-collect data |
| **0d.** | **Infrastructure** | [Dockerfile](https://github.com/Chainscore/score-da/blob/main/Dockerfile), [docker-compose.yml](https://github.com/Chainscore/score-da/blob/main/docker-compose.yml), [collect.sh](https://github.com/Chainscore/score-da/blob/main/collect.sh) | Single Docker image (Python 3.11 + Node 20) supporting all 6 protocols. Entrypoint script routes `docker run da-research <protocol> [options]` to the correct collector |
| **0e.** | **Article (update)** | [Paper: Architecture (Section III)](https://github.com/Chainscore/score-da/blob/main/paper-latex/sections/architecture.tex), [Paper: Methodology (Section IV)](https://github.com/Chainscore/score-da/blob/main/paper-latex/sections/methodology.tex) | Added architecture comparison (encoding, commitments, verification paradigms) and methodology implementation sections |
| 1. | **Polkadot Data Collection Tool & Data** | [Throughput collector](https://github.com/Chainscore/score-da/blob/main/protocol/Polkadot/data/throughput/collect.ts), [Cost collector](https://github.com/Chainscore/score-da/blob/main/protocol/Polkadot/data/cost/collect.ts) | TypeScript. Throughput: relay chain RPC — captures PoV inclusion per block, core engagement, parachain diversity. Cost: Coretime broker via Subscan + RPC — captures bulk purchases, renewals, on-demand sales, DOT prices. Initial data: 92 day-files of block data + coretime pricing CSVs |
| 2. | **Celestia/Avail Data Collection Tool & Data** | [Celestia collector](https://github.com/Chainscore/score-da/blob/main/protocol/Celestia/data/collect.py), [Avail collector](https://github.com/Chainscore/score-da/blob/main/protocol/Avail/data/collect.ts) | Celestia: Python, Celenium API — captures block size, blob count, fees, square size per block. Avail: TypeScript, Substrate RPC (WSS) with 7-endpoint rotation — captures submitData extrinsics and TransactionFeePaid events. Both include CoinGecko price feeds. Initial data: 92 + 90 day-files |
| 3. | **Espresso & NEAR Data Scripts & Data** | [Espresso collector](https://github.com/Chainscore/score-da/blob/main/protocol/Espresso/data/collect.py), [NEAR collector](https://github.com/Chainscore/score-da/blob/main/protocol/Near/data/collect.ts), [Ethereum collector](https://github.com/Chainscore/score-da/blob/main/protocol/Ethereum/data/collect.ts) | Espresso: Python, Explorer API — captures block size, base fee, block time per block. NEAR: TypeScript, NEAR Lake S3 + RPC (auto-selects based on range) — captures per-receipt DA bytes across 9 shards. Ethereum: TypeScript, Google BigQuery — captures blob count, blob gas, base fee per slot. Initial data: 91 + 93 + 705 day-files |

**Testing Guide**

```bash
# Clone and build
git clone https://github.com/Chainscore/score-da.git
cd score-da
docker build -t da-research .

# Verify usage
docker run da-research

# Test collectors (free APIs, no credentials needed)
docker run da-research celestia --blocks 50
docker run da-research espresso --blocks 50
docker run da-research avail --blocks 50
docker run da-research polkadot-throughput --blocks 50
docker run da-research near --blocks 100

# Ethereum requires a GCP service account with BigQuery access.
# The tool and collected data can be verified in the repo without running it.
docker run -e GOOGLE_APPLICATION_CREDENTIALS=/creds/key.json -v ./key.json:/creds/key.json da-research ethereum --days 1
```

Each collector prints a summary on completion showing block count, date range, throughput stats, and cost metrics.
