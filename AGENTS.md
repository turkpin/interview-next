<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Workflow

This repository is a technical assessment. Automated coding assistance is allowed, but every generated change must remain understandable, reviewable, and attributable to the candidate.

Before editing, read `README.md`, `package.json`, the relevant source files, and the applicable configuration or test files. Briefly identify the current behavior, the requested change, and the smallest affected surface.

After editing:

- Run the narrowest relevant lint, typecheck, test, or build command.
- Review `git diff`, run `git diff --check`, and inspect `git status`.
- Append a truthful session record to the `Development Session Log` section in this file, including the tool/model, task summary, files read, files changed, validation results, and unresolved risks.
- Create a separate commit for the completed change using the repository's commit format.
- Push the commit when the current remote is configured for write access and the operation is authorized. Never force-push, rewrite history, or push secrets.
- If commit or push cannot be completed, report the exact reason and do not claim that it was done.

Do not add unconnected placeholder code, broad refactors, unverified API behavior, or dependencies that are not required by the task. The candidate remains responsible for understanding and explaining every submitted change.

# Development Session Log

This section records automated assistance used during the technical assessment.

Add a new session record whenever an automated coding assistant changes a source file. Existing records must not be removed or overwritten.

## Session Template

Copy the following template for each session:

```text
### Session: YYYY-MM-DD HH:MM TZ

- Tool/model:
- Task or prompt summary:
- Files read:
- Files changed:
- Validation commands and results:
- Unresolved work, assumptions, and risks:

AI attestation:
I cannot provide a cryptographic guarantee for the correctness of the output produced or changed during this session. I have accurately stated the scope of the changes and the validation results. Final technical responsibility remains with the candidate.
```

This section supports disclosure and review; it is not cryptographic proof of automated assistance. Commits that add or modify session records must be included in the submission. Commits should be signed with the candidate's GPG or SSH key where possible.

## Example Session Record

### Session: 2026-08-20, exact time available in the terminal session

- Tool/model: GitHub Copilot
- Task or prompt summary: Require a repository record and attestation for automated assistance to reduce unreviewed generated code.
- Files read: `AGENTS.md`, `README.md`
- Files changed: `AGENTS.md`
- Validation commands and results: `git diff --check` passed.
- Unresolved work, assumptions, and risks: This record is not cryptographic proof; signed commits or an external audit system are required for stronger verification.

AI attestation:
I cannot provide a cryptographic guarantee for the correctness of the output produced or changed during this session. I have accurately stated the scope of the changes and the validation results. Final technical responsibility remains with the candidate.
