# XENI Pipeline Framework — The Architecture of LI Measurement

> **Series:** Linguistic Intelligence (2/10)
> **Audience:** ML Practitioners
> **Tags:** architecture · pipeline · xeni

---

## Overview

The XENI framework standardises how Linguistic Intelligence pipelines are built. It is language-agnostic — the same pipeline structure works for Bangla, Assamese, Nepali, or any target language. Swap the data source, retrain the classifier, produce the index.

```
Collect → Annotate → Classify → Index → Validate
```

Each stage is a discrete module with well-defined inputs, outputs, and quality gates. The framework enforces no specific implementation — only the interface contract between stages.

---

## The Five Stages

### Stage 1 — Collect

**Input:** Raw text from target-language sources (news, social media, parliamentary records, corpora)
**Output:** Cleaned, deduplicated document corpus with metadata

| Concern | Approach |
|---------|----------|
| Source diversity | Minimum 3 orthogonal source types per language |
| Deduplication | SimHash / MinHash at document level |
| Metadata | Source, date, domain category, character encoding |
| Quality floor | Reject documents with >15% non-native character ratio |

### Stage 2 — Annotate

**Input:** Document corpus
**Output:** LLM-annotated documents with structured labels

The annotation stage uses LLMs (GPT-4, Claude, or local models) to label documents along LI-relevant dimensions:

- **Topic classification** — domain, subdomain
- **Argument structure** — premise, claim, evidence markers
- **Complexity** — lexical density, syntactic depth, abstraction level
- **Sentiment / stance** — toward target entities or policies

**Quality gate:** Human review of a stratified 5% sample; inter-annotator agreement ≥ 0.8 Cohen's κ.

### Stage 3 — Classify

**Input:** Annotated documents
**Output:** Classified documents with LI dimension scores

A supervised classifier (typically fine-tuned multilingual transformer) maps annotations to scores on LI dimensions:

- **Reasoning depth** (surface → structural → systemic)
- **Perspective diversity** (single → multiple → meta)
- **Evidence quality** (anecdotal → empirical → systemic)
- **Abstraction level** (concrete → categorical → abstract)

Each dimension scored 1–5. The classifier is trained on human-annotated gold data from Stage 2.

### Stage 4 — Index

**Input:** Per-document LI dimension scores
**Output:** Aggregate LI index values per time period / region / domain

The index stage aggregates individual document scores into a single comparable metric:

$$LI_t = \frac{1}{N} \sum_{i=1}^{N} \sum_{d=1}^{D} w_d \cdot s_{i,d,t}$$

Where $s_{i,d,t}$ is document $i$'s score on dimension $d$ at time $t$, and $w_d$ is the dimension weight (typically equal-weighted, but adjustable by use case).

**Output formats:**
- Time-series LI index by language/region
- Heatmaps by domain-sector
- Ranked lists of most/least linguistically intelligent discourse clusters

### Stage 5 — Validate

**Input:** LI index time series + macroeconomic / social outcome variables
**Output:** Validation report (correlation, Granger causality, out-of-sample fit)

The validation stage asks: *Does the LI index predict real-world outcomes?*

| Test | What It Checks |
|------|----------------|
| **Correlation** | LI index co-moves with policy quality, institutional outcomes |
| **Granger causality** | LI shifts precede outcome changes |
| **Out-of-sample fit** | Model trained on language A predicts language B |
| **Construct validity** | Human experts rank discourse clusters consistent with LI scores |

---

## Design Principles

1. **Language-agnostic by construction** — only Stage 1 (Collect) needs reconfiguration for a new language; Stages 3–5 are transferable.
2. **Explicit quality gates** — each stage produces a validation artifact before the next stage consumes it.
3. **Dimension transparency** — the aggregate index is always decomposable into per-dimension scores.
4. **No black boxes** — every LLM annotation and classifier decision is logged with confidence scores.

---

## Discussion

> 💬 **Think About This:** The XENI framework has 5 stages: Collect → Annotate → Classify → Index → Validate. If you had to skip one stage to get a prototype out faster, which would it be? What would you lose by skipping it?

**Trade-off analysis:**

| Skip | Gain | Loss |
|------|------|------|
| Validate | Ship prototype immediately | No empirical support; index is just a number |
| Annotate | Skip expensive LLM + human review | Poor classifier training data; garbage-in-garbage-out |
| Classify | Go straight from annotation to index | No systematic dimension scoring; ad hoc aggregation |
| Index | Deliver raw classified documents | No comparable metric; no time-series or aggregation |
| Collect | Use existing corpus only | Source bias; poor generalisability |

The recommended skip-for-prototype is **Validate**: you can build the pipeline, produce an index, and demonstrate the concept. But without validation the index is an unsupported number — useful for demo, not for publication.

---

## References

- Linguistic Intelligence Series — [Part 1: Foundations](./)
- XENI reference implementation — [`github.com/lilalab/xeni`](https://github.com)
