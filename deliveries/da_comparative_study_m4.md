# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/da_comparative_study.md
* **Milestone Number:** 4

**Context**

Milestone 4 delivers the final 21-page IEEE-format research paper, finalized documentation and reproducibility mapping, and optional deliverables (Dune Analytics dashboards for all 6 protocols).

**Deliverables**

| Number | Deliverable | Link | Notes |
| ---: | --- | --- | --- |
| **0a.** | **Licenses & IP** | [LICENSE](https://github.com/Chainscore/score-da/blob/main/LICENSE), [LICENSE-DATA](https://github.com/Chainscore/score-da/blob/main/LICENSE-DATA) | Final audit complete. All source code Apache 2.0, all data/docs/figures CC BY 4.0. No proprietary dependencies |
| **0b.** | **Documentation** | [Root README](https://github.com/Chainscore/score-da/blob/main/README.md) | Finalized project README covering repository structure, Docker pipeline (collect/transform/plot), Dune dashboard links, and per-protocol setup |
| **0c.** | **Methodology & Reproducibility** | See reproducibility table below | Mapping between paper figures and Docker commands to regenerate them |
| **0d.** | **Infrastructure** | [Dockerfile](https://github.com/Chainscore/score-da/blob/main/Dockerfile), [CI/CD](https://github.com/Chainscore/score-da/blob/main/.github/workflows/build-paper.yml) | Final Docker image with full collect/transform/plot pipeline. GitHub Actions CI auto-builds paper PDF on version tags |
| **0e.** | **Final Research Article** | [Paper source (LaTeX)](https://github.com/Chainscore/score-da/tree/main/paper-latex), [Compiled PDF](https://github.com/Chainscore/score-da/blob/main/paper-latex/main.pdf) | 21-page IEEE paper with 8 sections (Introduction, Background, Architecture, Methodology, Results, Security Analysis, Discussion, Conclusion), 27 references, 39 figures. W3F acknowledgment included |
| Opt 3. | **Results Dashboard** | [Polkadot](https://dune.com/prasad_chainscore/polkadot-da-analysis), [Ethereum](https://dune.com/prasad_chainscore/ethereum-da-analysis), [Celestia](https://dune.com/prasad_chainscore/celestia-da-analysis), [Espresso](https://dune.com/prasad_chainscore/espresso-tiramisu-da), [NEAR](https://dune.com/prasad_chainscore/near-da-analysis), [Avail](https://dune.com/prasad_chainscore/avail-da-analysis) | Interactive Dune Analytics dashboards for all 6 protocols. SQL queries in `protocol/*/queries/` |

**Reproducibility: Figure-to-Command Mapping (0c)**

Every figure in the paper can be reproduced from the collected data:

```bash
docker build -t da-research .
docker run -v ./protocol:/app/protocol da-research all plot
```

| Paper Figure | Command | Output |
| --- | --- | --- |
| Throughput (per-protocol) | `<protocol> plot` | `protocol/*/analysis/out/throughput.png` |
| Utilization (per-protocol) | `<protocol> plot` | `protocol/*/analysis/out/utilization.png` |
| Cost quantiles (per-protocol) | `<protocol> plot` | `protocol/*/analysis/out/cost_bands.png` |
| Block time (Celestia, Espresso) | `celestia plot`, `espresso plot` | `protocol/{Celestia,Espresso}/analysis/out/block_time.png` |
| Daily payload (per-protocol) | `<protocol> plot` | `protocol/*/analysis/out/data_volume.png` |
| Ethereum era analysis | `ethereum plot` | `protocol/Ethereum/analysis/out/cost_eras.png` |
| Polkadot core engagement | `polkadot plot` | `protocol/Polkadot/analysis/out/core_engagement.png` |
| Cross-protocol comparisons | `python3 protocol/shared/cross_protocol_plot.py` | `protocol/shared/out/*.png` |
| Tables (aggregated metrics) | `all transform` | `protocol/*/analysis/daily.csv` |

**Testing Guide**

```bash
# Build (if not already built)
docker build -t da-research .

# Verify full pipeline
docker run -v ./protocol:/app/protocol da-research all plot
# Expected: OK for all 6 protocols

# Verify paper builds
cd paper-latex && pdflatex main.tex && bibtex main && pdflatex main.tex && pdflatex main.tex

# Verify Dune dashboards are accessible
# Visit any of the dashboard links in the table above
```

**Additional Information**

The paper includes the W3F acknowledgment in the Acknowledgments section.
