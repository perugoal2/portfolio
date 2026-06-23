---
title: Agentic Kubernetes IaC Security Reviewer
slug: agentic-kubernetes-iac-security-reviewer
date: 2026-06-23
summary: Built an agent-assisted CLI that turns Kubernetes, Terraform, and Dockerfile scanner output into prioritized security reviews, control-backed explanations, and safely staged remediation artifacts.
tagline: Combined deterministic security scanning with bounded agent remediation to make infrastructure findings easier to trust and act on.
featured: true
tags:
  - Security Engineering
  - Platform Engineering
  - DevSecOps
  - AI Products
outcomes:
  - Turned raw infrastructure scan output into a prioritized review workflow engineers can act on faster.
  - Added control-backed explanations that make findings easier to defend in platform and security discussions.
  - Reduced remediation risk by staging generated fixes outside the source tree with bounded retry logic.
capabilities:
  - Security tooling integration
  - Agent workflow design
  - Infrastructure review automation
  - Safe remediation patterns
architectureImage: /diagrams/agentic-iac-reviewer-architecture.svg
threatModelImage: /diagrams/agentic-iac-reviewer-threat-model.svg
githubUrl: https://github.com/perugoal2/Agentic-Kubernetes-IaC-Security-Reviewer
---
# Context
Infrastructure scanners are valuable, but their output is often too noisy to drive good engineering action on its own. Teams still need help understanding which findings matter first, why they matter in operational terms, and what a safe remediation path should look like.

This project was built to sit in that gap. It reviews Kubernetes manifests, Terraform, Dockerfiles, and related infrastructure configuration, keeps the deterministic findings from existing scanners, and adds an agent layer to improve prioritization, explanation, and remediation handling.

## Architecture decisions
- Used established scanners such as Checkov and optional Trivy support as the evidence layer instead of asking an LLM to perform primary security detection.
- Structured the flow as a clear pipeline: scan inputs, normalize findings, retrieve relevant controls from a local corpus, generate a readable report, then attempt bounded remediation.
- Kept control references local through a Chroma-backed corpus so the agent can connect findings to CIS, NSA, and AWS guidance without reducing the workflow to generic text generation.
- Wrote remediated copies into a mirrored `patches/` workspace instead of mutating source files directly, which keeps the workflow safer, reviewable, and easier to inspect.

## Security analysis
- Treated the LLM as an augmentation layer, not a trust anchor. Scanner output, validation, and remediation limits define the system's safety boundaries.
- Bounded remediation retries to prevent infinite patch loops and to keep failure handling explicit.
- Preserved file separation between source inputs and generated outputs so teams can review proposed fixes before adopting them.
- Added control citations so the resulting review is more useful for governance, review boards, and platform-security discussions.

## Delivery impact
- Demonstrates a practical pattern for combining deterministic tooling with agent reasoning in a way that is easier to trust.
- Shows hands-on implementation across CLI design, scanner integration, retrieval-backed guidance, and remediation workflow control.
- Represents the kind of security automation work I want associated with my portfolio: useful, explainable, and architected with operational restraint.