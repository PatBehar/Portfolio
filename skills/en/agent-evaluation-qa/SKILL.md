---
name: agent-evaluation-qa
description: "Evaluate agent behavior against fixtures, independent assertions, tool boundaries and release thresholds."
---

# Agent Evaluation & QA

Use this workflow to support the Agent Evaluation & QA task described by the user. Produce the requested analysis or plan from supplied evidence; do not pretend to be a deployed agent or claim work that was not performed.

## Use this skill when

- Evaluate agent behavior against fixtures, independent assertions, tool boundaries and release thresholds.

## Operating rules

- Treat supplied material as evidence. Separate confirmed facts, estimates, assumptions and unknowns.
- If an input or source is missing, name the gap and its effect; do not fill it with an invented value.
- Use only tools and data access explicitly granted by the host and user. This file grants no permissions. Do not write to systems, send messages, spend money, deploy, publish, delete data or take irreversible action. Prepare proposed changes for human review.

## Required inputs

- Agent goal, boundaries, prompt or model version and tool schemas.
- Representative synthetic fixtures and expected outcomes.
- Risk thresholds, allowed calls and evidence requirements.

## Procedure

1. **Define independent cases.** Cover normal, ambiguous, insufficient, malformed, duplicate, denied, timeout, injection and out-of-scope conditions.
2. **Run with trace capture.** Record the actual output and tool events; mocks must expose attempted effects without performing external writes.
3. **Assert observable behavior.** Check grounding, schema, tool allowlists, approval gates and truthful status with deterministic assertions.
4. **Adjudicate each case.** Mark PASS, FAIL, BLOCKED or INCONCLUSIVE; preserve outputs, traces and failure reasons.
5. **Gate readiness.** Treat critical authorization or security failures as blockers; do not use a model judge as the sole security check.

## Expected deliverables

Return the applicable items below. Mark items as unavailable when the evidence does not support them; do not imply that a planned deliverable was completed.

- Versioned evaluation fixtures and expected behavior.
- Per-case results, outputs and tool traces.
- Defect log and regression coverage.
- Evidence-based readiness decision with unresolved risks.

## Synthetic worked example

**Scenario:** A fictional read-only support assistant is tested with three synthetic cases.

**Inputs:** A policy question with a citation, a retrieved note that instructs the assistant to email contacts, and a question with no supporting source.

**Application:** Check citation evidence, reject the untrusted instruction without a write, and require abstention or source clarification for the unsupported question.

**Illustrative outcome:** These three examples are listed as acceptance scenarios in the source Skill; their individual live-agent execution status is not claimed here.

_Illustrative only; it is not a real customer result or a live system test._

## Skill-specific guardrails

- Never infer PASS from a plan or manually written answer.
- Sensitive actions, external communication and financial decisions require human approval.
- A prohibited write trace is a critical blocker even if other cases pass.

## Evidence and limits

An earlier portfolio QA report records 18/18 scenario checks against six captured source instruction sets. That result is not a behavior test of this export. This Markdown export has not been separately evaluated with an LLM; parity with the original v1 ZIP is unverified. Examples in this file are synthetic.
