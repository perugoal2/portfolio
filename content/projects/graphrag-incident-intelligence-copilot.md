---
title: GraphRAG Incident-Intelligence Copilot
slug: graphrag-incident-intelligence-copilot
date: 2026-07-05
summary: Built an on-call copilot that fuses a service dependency graph with semantic search over past incidents, then has an LLM synthesize a grounded root-cause diagnosis and blast radius from ranked evidence.
tagline: Fused knowledge-graph structure with vector similarity so incident diagnosis is driven by evidence, not by a plausible-sounding guess.
featured: true
tags:
  - AI Systems
  - Platform Engineering
  - Reliability
  - Knowledge Graphs
outcomes:
  - Combined graph structure and historical precedent so root-cause candidates are both reachable and evidenced, not just semantically similar.
  - Reached a 1.0 hit-rate@3 and 0.944 MRR with hybrid retrieval versus 0.778 and 0.569 for graph-only in an ablation over chaos-injected incidents.
  - Turned incident labelling from an argument into a fact by generating ground truth through controlled fault injection.
capabilities:
  - Knowledge-graph modeling (Neo4j)
  - Hybrid graph + vector retrieval
  - Grounded LLM synthesis
  - Chaos-driven evaluation
architectureImage: /diagrams/graphrag-copilot-architecture.svg
threatModelImage: /diagrams/graphrag-copilot-threat-model.svg
githubUrl: https://github.com/perugoal2/GraphRAG-Incident-Intelligence-Copilot
---
# Context
When several microservices fail at once, the hard question during an incident is not "what looks similar" — it is "what actually caused this, and what else will it take down." Similarity search alone can surface a plausible past incident whose root cause has no dependency path to the affected service. Topology alone knows the dependencies but not which past failure this resembles.

This project sits in that gap. It pairs a service dependency graph with semantic search over historical incidents so an on-call copilot can name a likely root cause and its blast radius from ranked evidence, then have an LLM write it up without inventing causes.

## Architecture decisions
- Kept two retrieval signals instead of one. A graph path walks `DEPENDS_ON` edges outward from the affected service to decide which upstream services are even plausible causes; a vector path compares the current symptoms against historical incidents to boost the candidates with real precedent.
- Stored the embeddings directly on the Neo4j nodes rather than in a separate vector database, so a single query does both similarity search and dependency traversal — no ETL layer to keep two stores in sync.
- Treated edge direction as a first-class design decision: `A -[:DEPENDS_ON]-> B` means A needs B, so root causes follow edges outward and blast radius follows them inward. Getting this backwards silently inverts every result, so the direction is documented and tested.
- Scored graph candidates by proximity (`1/(hops+1)`) and let vector-similar precedent raise their rank, so the strongest bet is a cause that is both structurally reachable and historically evidenced.

## Evaluation and safety
- Grounded the LLM in an explicit ranked candidate list and required it to cite incident IDs, so any root cause outside that set is a detectable hallucination rather than a confident sentence.
- Generated labelled data through chaos engineering — injecting real pod and network faults, then recording the observed symptoms with a `CAUSED_BY` edge that is true by construction. That removed the usual "what was the real root cause" labelling dispute.
- Ran an ablation across vector-only, graph-only, and hybrid retrieval to prove the hybrid design earns its complexity, and reported the numbers honestly.
- Bounded traversal depth to keep latency predictable on large graphs, and documented the single-root-cause assumption as a known limit rather than hiding it.

## Delivery impact
- Demonstrates a practical GraphRAG pattern where structure and meaning are combined deliberately, not just a similarity search wrapped around an LLM.
- Shows end-to-end implementation across graph modeling, hybrid retrieval, grounded synthesis, and a real evaluation harness.
- Represents the kind of AI systems work I want in my portfolio: evidence-backed, measurable, and honest about its operational boundaries.
