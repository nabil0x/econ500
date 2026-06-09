# Exam Common Mistakes — Quick Reference

## ⚠️ Most Dangerous Mistakes (Top 10)

| # | ❌ Mistake | ✅ Correction |
|---|-----------|---------------|
| 1 | **Confusing `α` with income elasticity `η`** in log-linear demand | `α` is scale/intercept; `η` is exponent on income |
| 2 | **Forgetting to verify Walras' Law** after deriving demands | Substitute back into budget: `p·x(p,w)=w` must hold |
| 3 | **Using continuity before establishing A,B are closed** in Debreu proof | Argue: monotonicity orders diagonal → sets partition → continuity gives closedness → intersection |
| 4 | **Swapping CV/EV reference utilities** | CV = original utility (`u⁰`); EV = new utility (`u¹`) |
| 5 | **Forgetting the minus sign in Roy's identity** | `x_k = - (∂v/∂p_k)/(∂v/∂w)` — not `+` |
| 6 | **Solving Lagrangian mechanically without checking MU signs** | If `MU_k < 0`, good is a bad → corner at zero immediately; don't set up FOCs |
| 7 | **Profit function is *concave* (like cost function)** | Profit function is **CONVEX** in prices; cost function is concave. Opposite. |
| 8 | **DWL = ½ × t × Q_after** | DWL = **½ × t × ΔQ** (the change in quantity, not the post-tax quantity) |
| 9 | **Forgetting shutdown condition before P=MC** | Supply curve exists only for `P ≥ min AVC`; check this first |
| 10 | **Conflating Bergson-Samuelson SWF with Arrow's SWF** | Bergson = social planner with given values (used for optimisation); Arrow = preference aggregation (impossibility) |

---

## Consumer Theory (Section 1A — Preferences & 1B — Demand)

* ❌ **Giving definitions without violation examples** → ✅ Add Condorcet paradox, money-pump, "brother of" counterexample — separates A from B
* ❌ **Launching into proof without defining IND set/UCS/LCS first** → ✅ Define them first — costs 2 marks if skipped
* ❌ **Conflating convex preferences with convex UCS** → ✅ They're the same condition; chord between any 2 points in UCS stays in UCS
* ❌ **Getting stuck on reverse direction of quasiconcavity ↔ UCS convex** → ✅ Start with `u` quasiconcave, take `x,y ∈ UCS(z)`, apply `u(λx+(1-λ)y) ≥ min{u(x),u(y)} ≥ u(z)`
* ❌ **Forgetting `x=y` case in SM⇒M proof** → ✅ When all components equal, `x∼y`, consistent with `x⪰y`
* ❌ **For M⇒LNS, increasing only one good by δ=ε/2** → ✅ Must increase **ALL** goods by `δ = ε/√N` under plain monotonicity
* ❌ **Converse M⇒SM: thinking it holds** → ✅ Leontief satisfies M but violates SM — state counterexample explicitly
* ❌ **Missing `u=xy+a` as homothetic-but-not-homogeneous example** → ✅ This is the make-or-break example examiners look for
* ❌ **Computing `dMRS/dx` but not connecting to quasiconcavity** → ✅ Numerator of `dMRS/dx` = negative of bordered Hessian determinant — same condition
* ❌ **Forgetting to verify Walras' Law explicitly (CD)** → ✅ Substitute demands back into `p₁x₁ + p₂x₂ = w` and confirm
* ❌ **Cross-price effect = 0 is general** → ✅ Special to CD (additively separable); not general
* ❌ **Roy's identity: miscomputing `∂v/∂p_k` as raw form** → ✅ Factor `v` out: `∂v/∂p₁ = -αv/p₁` then cancel with denominator `v`
* ❌ **EMP tangency: thinking it differs from UMP** → ✅ Yields **SAME** ratio `x₂/x₁ = (β/α)(p₁/p₂)` — duality in action
* ❌ **Giffen good = violation of UMP sufficient conditions** → ✅ Giffen satisfies all conditions — income effect is large and negative, not a violation
* ❌ **HD(0) of Walrasian demand requires preference assumptions** → ✅ Follows from budget-set homogeneity alone — no preference assumptions needed
* ❌ **Writing `x = I/p_x − 1` without discussing corner condition** → ✅ Only valid when `I ≥ p_x`; if `I < p_x`, consumer buys only `y`
* ❌ **Solving Lagrangian when `MU_y < 0`** → ✅ First check sign of MUs — if `MU_k < 0`, set `k=0` immediately (the good is a bad)

---

## Demand Estimation & Production (Topics 2, 3A, 3B, 3C)

* ❌ **Confusing α (scale parameter) with income elasticity η** → ✅ α is intercept in log form; η is the exponent on income
* ❌ **Guessing a value for missing cross-price elasticity** → ✅ State answer depends on sign of ε, explain both cases
* ❌ **Blindly computing elasticities with positive own-price coefficient** → ✅ Check sign first — positive own-price = misspecified model, stop
* ❌ **Cross-price effect: computing demand drop but stopping there** → ✅ Use own-price elasticity to find price change needed to offset it
* ❌ **Confusing MRPT (output transformation) with MRTS (factor substitution)** → ✅ MRPT = `MC_x/MC_y` between outputs; MRTS = `MP_L/MP_K` between inputs
* ❌ **Listing 11 production set properties as a flat list** → ✅ Group them: feasibility, physical constraints, disposal, scalability, aggregation, curvature
* ❌ **Writing `σ = 1/(1-ρ)` without mentioning `ρ ≤ 1`** → ✅ CES well-behaved only when ρ ≤ 1
* ❌ **Cost function: using production function directly instead of conditional factor demands** → ✅ `c(Q) = w·L(Q) + r·K(Q)` where L(Q), K(Q) are **conditional demands**
* ❌ **Shutdown: thinking `min AVC = 0` means firm always shuts down** → ✅ With sunk fixed costs and `min AVC = 0`, firm produces for any `P > 0`
* ❌ **Profit function is concave (like cost function)** → ✅ **Convex** in prices — firm benefits from extreme prices by adjusting production
* ❌ **DWL = ½ × t × Q_after** → ✅ DWL = **½ × t × ΔQ** (change in quantity, not post-tax level)
* ❌ **Walras' Law algebra: sign mistakes when substituting** → ✅ Always verify solution by checking Z₁ = 0 with computed ratios

---

## Welfare Economics (Topics 4, 5A, 5B)

* ❌ **Swapping CV/EV reference utility** → ✅ CV = original utility `u⁰`; EV = new utility `u¹`
* ❌ **EV > CS > CV ordering is universal** → ✅ Holds for price **decrease** with normal goods. Reverses (CV > CS > EV) for price **increase**
* ❌ **Failing to check EV > CS > CV as sanity check on arithmetic** → ✅ If numbers violate this for normal goods, recalculate
* ❌ **Confusing UPF with GUPF** → ✅ UPF = one product-mix; GUPF = envelope of **all** UPFs across all product-mixes
* ❌ **Cardinalist criterion: missing its weakest assumption** → ✅ Assumes **identical utility functions** across individuals — empirically false
* ❌ **Pareto optimality = social welfare maximisation** → ✅ All GUPF points are Pareto-optimal; only tangency with SWF = SW max. Not the same.
* ❌ **Conflating Bergson-Samuelson SWF with Arrow's SWF** → ✅ Bergson = given value judgements (optimisation); Arrow = preference aggregation (impossibility)
* ❌ **Mixing up assumptions for Pareto vs SW maximisation** → ✅ Pareto: markets, convexity, no externalities. SW max: additionally needs explicit value judgements + SWF
* ❌ **"Potential" compensation = actual compensation** → ✅ Potential ≠ Actual — the most common trap. Kaldor-Hicks ignores distribution.
* ❌ **Confusing direction of Welfare Theorems** → ✅ 1st: CE → PO (efficiency of markets). 2nd: PO → CE (separability of efficiency and equity)
* ❌ **Utilitarian vs Rawlsian: describing without drawing** → ✅ Draw social indifference curves: Utilitarian = straight line (slope -1); Rawlsian = L-shaped. The shape IS the answer.
* ❌ **Missing Scitovsky's double test** → ✅ Kaldor-Hicks alone can give A>B and B>A. Add reversal test: losers must not be able to bribe gainers.

---

## GE, Game Theory, Externalities & Trade (Topics 6-9)

* ❌ **GE vs PE: stopping at comparison table** → ✅ Name Arrow-Debreu (1954) and explain why relative prices suffice (numeraire)
* ❌ **Not labelling stability type of each equilibrium** → ✅ Label each: stable if `dE/dP < 0`, unstable if `dE/dP > 0`
* ❌ **Arrow-Debreu conditions: forgetting continuous, HD(0), Walras' Law** → ✅ Existence requires all three on excess demand functions
* ❌ **Factor prices returning to original after taste shock (same K/L ratio)** → ✅ Different factor intensities drive permanent w/r change (Stolper-Samuelson)
* ❌ **Contract curve is straight line under CRTS always** → ✅ Only if isoquants are homothetic **with identical returns**
* ❌ **Income distribution determinate in GE** → ✅ Indeterminate without specifying factor ownership shares — connects to 2nd Welfare Theorem
* ❌ **Forgetting corner solutions with linear utility** → ✅ If P_x ≠ P_y, B consumes only cheaper good — contract curve becomes edge of box
* ❌ **Equation counting = existence guarantee** → ✅ Neither necessary nor sufficient. Walras' Law makes 1 eq redundant; numeraire fixes 1 price; non-negativity not counted
* ❌ **Solving ED functions without verifying Walras' Law first** → ✅ Inconsistent ED functions give nonsense — always verify `P₁ED₁ + P₂ED₂ + P₃ED₃ = 0`
* ❌ **Confusing strategic complements (Bertrand) with substitutes (Cournot)** → ✅ Bertrand: BRs slope **up** (strategic complements). Cournot: BRs slope **down**
* ❌ **Folk Theorem: forgetting observability condition** → ✅ If firms can secretly undercut, cooperation breaks down even with high δ
* ❌ **Entry deterrence: incumbents always accommodate** → ✅ Can make fight credible via excess capacity, reputation (chain-store paradox)
* ❌ **δ* formula wrong** → ✅ `δ* = (π_dev − π_coop) / (π_dev − π_pun)`
* ❌ **Backward induction paradox only in PD** → ✅ Same logic in centipede, finitely repeated games with unique NE
* ❌ **Tragedy of Commons: verbal only** → ✅ Formalise: each user ignores `Σ_{j≠i} MC(q_j)` → Nash over-extracts
* ❌ **Coase = Pigou** → ✅ Coase: bargaining, zero transaction costs, efficiency regardless of rights. Pigou: tax, works WITH transaction costs
* ❌ **Lemons: only verbal intuition** → ✅ Compute: WTP = E[V] = proportion good + proportion bad. If < reservation of high-quality → adverse selection
* ❌ **Signalling: forgetting single-crossing condition** → ✅ Separating requires `w_H−w_L ∈ [c_H, c_L]` — education cheap enough for H, too costly for L
* ❌ **Bandwagon/snob: missing elasticity effect** → ✅ Bandwagon makes demand **more** elastic; snob makes it **less** elastic
* ❌ **Consumption externalities: minor issue** → ✅ They break the independence assumption → First Welfare Theorem fails (missing market)
* ❌ **VER equivalent to tariff** → ✅ VER strictly **worse**: quota rent goes to foreign exporters, not domestic government
