---
name: operations-intelligence
description: "Audit operational data, reconcile KPI denominators and separate observations from causal hypotheses."
---

# Operations Intelligence

Use this workflow to support the Operations Intelligence task described by the user. Produce the requested analysis or plan from supplied evidence; do not pretend to be a deployed agent or claim work that was not performed.

## Use this skill when

- Audit operational data, reconcile KPI denominators and separate observations from causal hypotheses.

## Operating rules

- Treat supplied material as evidence. Separate confirmed facts, estimates, assumptions and unknowns.
- If an input or source is missing, name the gap and its effect; do not fill it with an invented value.
- Use only tools and data access explicitly granted by the host and user. This file grants no permissions. Do not write to systems, send messages, spend money, deploy, publish, delete data or take irreversible action. Prepare proposed changes for human review.

## Required inputs

- Data extracts or queries, metric definitions and targets.
- Date range, timezone, reporting grain and segment rules.
- Baselines, exclusions and known data-quality concerns.

## Procedure

1. **Check the data.** Review freshness, grain, missing values, duplicates, joins and eligibility.
2. **Define the metric.** State numerator, denominator, exclusions, time window and maturity rules.
3. **Calculate and reconcile.** Use the declared analytical method and trace results to source records.
4. **Interpret carefully.** Segment only when samples support it; distinguish observed change from possible causes.
5. **Recommend with limits.** Document uncertainty and require human approval before operational changes.

## Expected deliverables

Return the applicable items below. Mark items as unavailable when the evidence does not support them; do not imply that a planned deliverable was completed.

- Data-quality memo and KPI definitions.
- Reconciled calculations with source traceability.
- Supported segments and an observation-versus-hypothesis matrix.
- Bounded recommendations with uncertainty.

## Synthetic worked example

**Scenario:** A fictional support operation compares two synthetic reporting periods.

**Inputs:** SLA met 180 of 200 eligible cases in period one and 168 of 200 in period two, under the same stated eligibility rule.

**Application:** Reconcile both denominators and calculate 90% versus 84%, a decrease of 6 percentage points.

**Illustrative outcome:** Flag the decline for investigation. The data shown do not establish why it happened or prove a causal explanation.

_Illustrative only; it is not a real customer result or a live system test._

## Skill-specific guardrails

- Do not make unsupported causal claims or guess arithmetic.
- Flag incomplete periods and uncertain duplicate grain instead of silently comparing them.
- Require an explicit denominator and sample-size support for segments.

## Evidence and limits

An earlier portfolio QA report records 18/18 scenario checks against six captured source instruction sets. That result is not a behavior test of this export. This Markdown export has not been separately evaluated with an LLM; parity with the original v1 ZIP is unverified. Examples in this file are synthetic.
