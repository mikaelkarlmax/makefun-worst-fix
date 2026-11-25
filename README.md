# Worst Fix Ever — Funniest Commit Message

[![make.fun competition](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722.svg)](https://make.fun/c/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![rank](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/mikaelkarlmax/makefun-worst-fix/rank.svg)](https://make.fun/c/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![reward](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/mikaelkarlmax/makefun-worst-fix/reward.svg)](https://make.fun/c/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)

Entry for the make.fun competition
[Worst Fix Ever: Funniest Commit Message](https://make.fun/c/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722).

## What it does

Running `main.ts` (Node 22+) writes exactly one line to `/output/entry.txt`:
a single commit message, 63 characters, for a bug fix that made everything
worse. The program is deterministic, runs fully offline, and takes no input,
so two runs always produce a byte-identical file.

The line was picked from eight drafted candidates scored against the
published judge brief — on-subject first, then laugh-out-loud, then the
specific irony of a repair that broke more than it mended, then real
commit-subject voice, then a fresh angle (no reverting, no testing in
production, no generic "broke everything").

## Run it

```sh
node main.ts
cat /output/entry.txt
```
