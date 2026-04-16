---
title: Threat Modeling a Local-First AI Desktop App
slug: threat-modeling-a-local-first-ai-desktop-app
date: 2026-04-17
summary: Local-first AI products feel safer by default, but they still need careful threat modeling around files, models, prompts, packaging, and desktop boundaries.
category: Security Engineering
featured: true
readingTime: 6 min
tags:
  - Threat Modeling
  - Desktop Security
  - Local AI
---
# The false assumption
People often hear local-first AI and assume the security story is already solved. In reality, the trust model changes rather than disappears.

## What I model first
- Uploaded PDFs as untrusted input.
- Local runtime directories that store parsed content, indexes, and models.
- Prompt boundaries between user input, retrieved document context, and generated output.
- Desktop packaging and update paths, especially when models are bundled offline.

## Why this matters
Threat modeling improves more than security. It improves architecture clarity. Once trust boundaries are visible, logging, storage, packaging, and data handling decisions become easier to defend.

Threat diagrams make those design decisions easier to understand than a short written summary alone.
