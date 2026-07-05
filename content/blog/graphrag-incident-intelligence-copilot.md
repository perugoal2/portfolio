---
title: Grounding Incident Diagnosis With a GraphRAG Copilot
slug: graphrag-incident-intelligence-copilot
date: 2026-07-05
summary: This project pairs a service dependency graph with semantic search so an on-call copilot can name a likely root cause and its blast radius from evidence, not from a plausible-sounding guess.
category: AI Systems
featured: true
readingTime: 6 min
tags:
  - AI Systems
  - Platform Engineering
  - Reliability
---
# Overview
[GraphRAG Incident-Intelligence Copilot](https://github.com/perugoal2/GraphRAG-Incident-Intelligence-Copilot) is an on-call diagnostic assistant that answers two questions fast during a microservice incident: what is the likely root cause, and what is the blast radius.

Most retrieval-augmented tools lean on similarity alone. This one fuses two signals. A graph path walks the service dependency topology to decide which upstream services are even plausible causes, and a vector path compares the current symptoms against historical incidents to boost the candidates with real precedent. The graph defines the candidate set; similarity re-ranks it; and the model synthesizes a diagnosis only from that ranked list.

## Key architecture decisions
- The LLM is not the detection engine. Retrieval ranks candidates from evidence — cosine similarity over 384-dimensional embeddings plus a graph proximity score of `1/(hops+1)` — and Claude synthesizes a diagnosis that is instructed to cite only those ranked candidates.
- Vectors live on the graph nodes. Embeddings are stored directly on Neo4j nodes rather than in a separate vector store, so one query does both similarity search and dependency traversal and there is no ETL layer to keep in sync between two systems.
- Edge direction is treated as a first-class design decision. `A -[:DEPENDS_ON]-> B` means A needs B, so root causes follow edges outward and blast radius follows them inward. Getting this backwards inverts every result, so the direction is documented and tested rather than assumed.
- Grounding is enforced, not hoped for. Because the prompt hands the model an explicit ranked candidate list, any root cause outside that set is detectable as a hallucination. That turns model drift into something observable instead of something you discover in a postmortem.
- Ground truth comes from chaos, not from argument. A fault-injection phase kills pods and adds network delay in a Kubernetes cluster, records the observed symptoms, and links them with a `CAUSED_BY` edge that is true by construction — no manual labelling disputes.

## Why this approach works
Incident diagnosis fails when a system reasons from structure or from meaning, but not both. Topology alone tells you what depends on what, but not which past failure this resembles. Similarity alone finds analogous incidents, but will happily suggest a root cause that has no dependency path to the affected service.

Fusing the two is what makes the output trustworthy. In an ablation over nine chaos-injected incidents, hybrid retrieval reached a 1.0 hit-rate@3 and 0.944 MRR, while graph-only fell to 0.778 and 0.569. Structural plausibility combined with historical precedent beat either signal on its own.

## What stands out
- It solves a real reliability problem instead of wrapping a chatbot around logs.
- It keeps the model bounded to evidence, so a wrong answer is a detectable event rather than a confident sentence.
- It shows judgment about operational limits: traversal depth is capped to control latency on large graphs, and the current design assumes a single root cause per incident and says so.
- It is honest about scope — the chaos phase is a validation and evaluation tool, not a drop-in replacement for live observability.

That combination — hybrid retrieval, enforced grounding, and evidence built by construction — is what makes this a strong example of practical, defensible AI systems design.
