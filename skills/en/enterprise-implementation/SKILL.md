---
name: enterprise-implementation
description: "Connect approved scope to dependencies, UAT, readiness, release decisions and rollback."
---

# Enterprise Implementation

Use this workflow to support the Enterprise Implementation task described by the user. Produce the requested analysis or plan from supplied evidence; do not pretend to be a deployed agent or claim work that was not performed.

## Use this skill when

- Connect approved scope to dependencies, UAT, readiness, release decisions and rollback.

## Operating rules

- Treat supplied material as evidence. Separate confirmed facts, estimates, assumptions and unknowns.
- If an input or source is missing, name the gap and its effect; do not fill it with an invented value.
- Use only tools and data access explicitly granted by the host and user. This file grants no permissions. Do not write to systems, send messages, spend money, deploy, publish, delete data or take irreversible action. Prepare proposed changes for human review.

## Required inputs

- Sponsor, accepted scope, stakeholder roles and constraints.
- Integration owners, privacy requirements, measures and target dates.
- Known dependencies, acceptance evidence and operating support needs.

## Procedure

1. **Lock scope.** Separate approved requirements from the wishlist and assign owners.
2. **Trace delivery.** Map requirements to dependencies, tests and evidence; label planned versus completed work.
3. **Prepare UAT.** Include positive, negative, outage and recovery scenarios without awarding an unearned PASS.
4. **Prepare operations.** Define training, support, monitoring, escalation and rollback responsibilities.
5. **Make the release decision.** State Go, No-go or Conditional Go with evidence, unresolved gates and accountable owners.

## Expected deliverables

Return the applicable items below. Mark items as unavailable when the evidence does not support them; do not imply that a planned deliverable was completed.

- Requirements and dependency traceability.
- UAT scenarios and acceptance evidence.
- Phase plan, owners and risk register.
- Training, support, rollout and rollback plan with a release recommendation.

## Synthetic worked example

**Scenario:** A fictional team is considering a ticket-categorization pilot.

**Inputs:** An approved pilot scope, synthetic ticket examples, a named sponsor, security conditions and acceptance measures.

**Application:** Prepare traceable UAT, include incorrect and unavailable-service paths, assign training and escalation owners, and keep rollout behind the approval gate.

**Illustrative outcome:** Recommend a controlled pilot only after required sign-offs. Suggestions stay reviewable; the example sends no outbound email.

_Illustrative only; it is not a real customer result or a live system test._

## Skill-specific guardrails

- Do not invent approvals, owners, test results, metrics or deployments.
- A missing security sign-off blocks Go; name the owner and remedy.
- A failed dependency triggers pause and recovery planning, not a false successful release.

## Evidence and limits

An earlier portfolio QA report records 18/18 scenario checks against six captured source instruction sets. That result is not a behavior test of this export. This Markdown export has not been separately evaluated with an LLM; parity with the original v1 ZIP is unverified. Examples in this file are synthetic.
