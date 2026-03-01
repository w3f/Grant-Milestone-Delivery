# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/da_comparative_study.md
* **Milestone Number:** 3

**Context**

Milestone 3 delivers the complete 90-day production datasets, analysis scripts (transform + plot), and preliminary findings with visualizations. The analysis pipeline aggregates raw block CSVs into daily/hourly metrics and generates publication-quality figures used in the draft results section of the paper.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ---: | --- | --- | --- |
| **0a.** | **Licenses** | [LICENSE](https://github.com/Chainscore/score-da/blob/main/LICENSE), [LICENSE-DATA](https://github.com/Chainscore/score-da/blob/main/LICENSE-DATA) | Apache 2.0 (code), CC BY 4.0 (data/docs) |
| **0b.** | **Documentation** | [Protocol README](https://github.com/Chainscore/score-da/blob/main/protocol/README.md) | Documents dataset structure (common layout), transform/plot pipeline, and output formats. Each protocol README describes its specific data schema |
| **0c.** | **Methodology** | [Shared transform utilities](https://github.com/Chainscore/score-da/blob/main/protocol/shared/transform_utils.py) | Data analysis procedure implemented in code: `load_blocks` aggregates CSVs, computes daily/hourly bucketed metrics (throughput, utilization, cost quantiles, rolling averages). Shared across all protocols for consistent methodology |
| **0d.** | **Infrastructure** | [Dockerfile](https://github.com/Chainscore/score-da/blob/main/Dockerfile), [collect.sh](https://github.com/Chainscore/score-da/blob/main/collect.sh) | Docker image supports `transform` and `plot` actions: `docker run da-research <protocol> transform` and `docker run da-research <protocol> plot`. `all transform` and `all plot` run all protocols in parallel |
| **0e.** | **Article (draft results)** | [Paper: Results (Section V)](https://github.com/Chainscore/score-da/blob/main/paper-latex/sections/results.tex) | 613-line draft results with figures, tables, and interpretation covering throughput, utilization, cost, block dynamics, and cross-protocol comparisons |
| 1. | **Complete Data Sets for All Platforms** | [protocol/](https://github.com/Chainscore/score-da/tree/main/protocol) | 1,163 day-files across 6 protocols, 90-day window (Nov 2025 - Feb 2026). Polkadot: 92 days, ~1.3M blocks. Celestia: 92 days, ~1.3M blocks. Avail: 90 days, ~390K blocks. Espresso: 91 days, ~2.9M blocks. NEAR: 93 days, ~13M blocks. Ethereum: 705 days since Dencun (Mar 2024), ~655K blocks |
| 2. | **Analysis Scripts** | Per-protocol: [Celestia transform](https://github.com/Chainscore/score-da/blob/main/protocol/Celestia/data/transform.py), [Celestia plot](https://github.com/Chainscore/score-da/blob/main/protocol/Celestia/analysis/plot.py). Shared: [transform_utils.py](https://github.com/Chainscore/score-da/blob/main/protocol/shared/transform_utils.py), [plot_style.py](https://github.com/Chainscore/score-da/blob/main/protocol/shared/plot_style.py), [cross_protocol_plot.py](https://github.com/Chainscore/score-da/blob/main/protocol/shared/cross_protocol_plot.py) | Each protocol has `data/transform.py` (blocks/ + prices -> daily.csv + hourly.csv) and `analysis/plot.py` (daily.csv -> out/*.png). Shared utilities provide consistent metrics and styling. Delivered as executable Python scripts rather than Jupyter notebooks — functionally equivalent and runnable via Docker |
| 3. | **Preliminary Findings & Visualizations** | [Paper figures](https://github.com/Chainscore/score-da/tree/main/paper-latex/figures), per-protocol outputs (e.g. [Celestia](https://github.com/Chainscore/score-da/tree/main/protocol/Celestia/analysis/out), [shared cross-protocol](https://github.com/Chainscore/score-da/tree/main/protocol/shared/out)) | 39 figures: per-protocol (throughput, utilization, cost quantiles, payload, block time, cumulative) + 7 cross-protocol comparisons (throughput, utilization, cost, retention-adjusted cost, cumulative, capacity vs cost, encoding overhead) + Ethereum-specific era analysis |

**Testing Guide**

```bash
# Build (if not already built from M2)
docker build -t da-research .

# Run transform for a single protocol (uses collected block data in repo)
docker run -v ./protocol:/app/protocol da-research celestia transform
# Expected: "daily: 92 rows", "hourly: 2179 rows"

# Run plot for a single protocol
docker run -v ./protocol:/app/protocol da-research celestia plot
# Expected: 6 chart types generated to analysis/out/

# Run all protocols
docker run -v ./protocol:/app/protocol da-research all transform
docker run -v ./protocol:/app/protocol da-research all plot

# Verify outputs
ls protocol/Celestia/analysis/out/        # per-protocol figures
ls protocol/shared/out/                   # cross-protocol comparisons
head -3 protocol/Celestia/analysis/daily.csv  # aggregated metrics
```

Note: NEAR transform requires >4GB RAM (13M-row dataset). Use `docker run -m 8g -v ./protocol:/app/protocol da-research near transform`. Pre-computed `daily.csv` and `hourly.csv` for NEAR are included in the repo.
