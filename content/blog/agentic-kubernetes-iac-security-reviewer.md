---
title: What This Agentic IaC Security Reviewer Says About My Architecture Style
slug: agentic-kubernetes-iac-security-reviewer
date: 2026-06-23
summary: This project shows how I turn noisy infrastructure security findings into an explainable, remediation-focused workflow by combining proven scanners with bounded agent reasoning.
category: Security Architecture
featured: true
readingTime: 6 min
tags:
  - Security Architecture
  - Platform Engineering
  - AI Products
---
# Overview
[Agentic Kubernetes IaC Security Reviewer](https://github.com/perugoal2/Agentic-Kubernetes-IaC-Security-Reviewer) is a practical example of how AI-assisted security tooling can be made useful without becoming opaque or unsafe.

The tool reviews Kubernetes manifests, Terraform, Dockerfiles, and related infrastructure configuration with established open-source scanners, then adds an LLM layer to prioritize findings, explain operational risk, map results to relevant controls, and stage remediations safely.

## Key architecture decisions
- The project does not rely on an LLM as the primary detection engine. It starts with scanner evidence from Checkov and Trivy, then uses the model where it adds the most value: prioritization, explanation, and remediation guidance.
- The control flow is easy to defend in an architecture review: scan, normalize findings, retrieve relevant controls, generate a severity-grouped report, then attempt bounded remediation in a separate workspace.
- The remediation loop is intentionally constrained. Retry budgets and validation checks matter because autonomous fix paths become risky when they can mutate files repeatedly without a stopping condition.
- Generated changes are staged under a separate `patches/` directory instead of being written back into the source tree. That separation reduces blast radius and makes the workflow easier to inspect, diff, and trust.
- The local control corpus adds traceability. Citing CIS, NSA, and AWS guidance turns the output from a generic AI summary into a review artifact that a platform or security team can actually use.

## Why this approach works
Most infrastructure security programs do not fail because they lack scanners. They fail because scanner output is difficult to prioritize, difficult to explain, and rarely turned into an action path teams will actually follow.

This is where an agent layer becomes useful, but only when it is attached to evidence, bounded by validation, and inserted into a workflow engineers can inspect. That architectural discipline matters more than whether the system can generate polished text.

## What stands out
- It solves a practical platform-security problem instead of wrapping an LLM around a vague use case.
- It combines deterministic security tooling with agent reasoning instead of pretending model output alone is sufficient.
- It shows judgment about trust boundaries, operational safety, and where automation should stop.
- It uses explicit boundaries, evidence-backed decisions, and automation that is useful without being careless.

That combination is what makes the project a strong example of practical AI-assisted security architecture.