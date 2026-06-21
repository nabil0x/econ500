# Exam Common Mistakes — Macroeconomics Quick Reference

## ⚠️ Most Dangerous Mistakes (Top 10)

| # | ❌ Mistake | ✅ Correction |
|---|-----------|---------------|
| 1 | **Confusing level effects with growth effects** when s changes in Solow | s changes the LEVEL of k*, y*, c* permanently but does NOT change the long-run GROWTH rate (always g) |
| 2 | **Sign errors in the Ramsey Euler equation**: writing ċ/c = (1/θ)(f'(k) - ρ + θg + δ) | Correct: ċ/c = (1/θ)(f'(k) - ρ - θg - δ). The -θg term enters because trend growth raises the effective discount rate |
| 3 | **Confusing ċ=0 vs k̇=0 loci** in the Ramsey phase diagram | ċ=0 is VERTICAL at k* where f'(k*) = ρ+θg+δ; k̇=0 is the HUMP-SHAPED c = f(k) - (n+g+δ)k. They intersect at different k |
| 4 | **Dynamic inefficiency: checking r < 0** instead of r < n+g in OLG | Over-accumulation (k* > k_gold) occurs when r* < n+g, not when r* < 0 |
| 5 | **Level vs growth effects of R&D labor a^L** in endogenous growth | Under β+θ<1 (semi-endogenous), a^L ↑ raises the LEVEL of A but NOT the long-run growth rate g_A^* |
| 6 | **Divine coincidence is NOT universal** in NK models | Holds ONLY without cost-push shocks (u_t=0). With u_t ≠ 0, stabilising π does NOT stabilise x — a trade-off appears |
| 7 | **Taylor principle: writing φ_π > 0** as sufficient | Correct: φ_π > 1. The real rate rises only when the nominal rate increases MORE than one-for-one with π |
| 8 | **Intratemporal FOC in RBC: solving for l_t without c_t** | The condition 1/(1-l_t) = w_t/c_t links labour supply to consumption — must solve both simultaneously |
| 9 | **Jones critique: interpreting it as rejecting all endogenous growth** | Jones (1995) rejects SCALE EFFECTS (β+θ=1), not R&D-driven growth. Semi-endogenous (β+θ<1) resolves the critique |
| 10 | **Using Lagrangian instead of Hamiltonian** for Ramsey optimal control | Ramsey is continuous-time optimal control with state k and control c. Use the present-value Hamiltonian, not a Lagrangian |

---

## Solow Growth Model

* ❌ **Confusing steady-state vs transition dynamics** → ✅ When s↑, k rises monotonically from k*₁ to k*₂. During transition, growth temporarily exceeds g; at k*₂, growth returns to g. Never claim the growth rate changes permanently.
* ❌ **k̇=0 condition: writing f(k*) = (n+g+δ)k*** → ✅ Correct: sf(k*) = (n+g+δ)k*. The saving rate s multiplies output, not the break-even line.
* ❌ **Forgetting to state Inada conditions** when proving convergence → ✅ lim_{k→0} f'(k)=∞ and lim_{k→∞} f'(k)=0 guarantee an interior steady state. Without them, corner solutions are possible.
* ❌ **Golden Rule: f'(k_gold) = δ** → ✅ Correct: f'(k_gold) = n+g+δ (maximises c* = f(k) - (n+g+δ)k). The break-even includes population and tech growth, not just depreciation.
* ❌ **Speed of convergence: λ = (1-α) only** → ✅ λ = (1-α)(n+g+δ) in Solow. The (n+g+δ) term captures the dilution effect driving convergence.
* ❌ **Believing Solow predicts absolute (unconditional) convergence** → ✅ Solow predicts CONDITIONAL convergence: each country converges to its OWN steady state (determined by its s, n, δ). Poor countries need not catch up to rich ones.

---

## Ramsey-Cass-Koopmans Model

* ❌ **Euler sign: forgetting -θg or the -δ term** → ✅ Correct: ċ/c = (1/θ)(f'(k) - ρ - θg - δ). The θg term reflects that per-capita consumption grows at rate g on the BGP, raising the effective discount rate.
* ❌ **Confusing ċ=0 slope** → ✅ ċ=0 is VERTICAL (k fixed by f'(k)=ρ+θg+δ), not upward-sloping. Forgetting θg gives a k* that is too high.
* ❌ **Saddle path is the only trajectory satisfying the Euler equation** → ✅ ALL trajectories satisfy the Euler equation. Only the saddle path satisfies the transversality condition. Off-path trajectories violate TVC (capital explodes or hits zero).
* ❌ **Government spending G: shifting the wrong locus** → ✅ G↑ shifts k̇=0 DOWN (c = f(k)-G-(n+g+δ)k). ċ=0 does NOT shift (G does not affect MPK). Consumption jumps DOWN immediately to the new saddle path.
* ❌ **Modified Golden Rule = Golden Rule** → ✅ MGR: f'(k*) = ρ+θg+δ (Ramsey steady state). GR: f'(k_gold) = n+g+δ. MGR always gives lower k because ρ > n is required for utility convergence.
* ❌ **Hamiltonian: writing H = u(c) + λ[f(k) - c - (n+g+δ)k]** (forgetting the discount term) → ✅ Use the present-value Hamiltonian: H = u(c)e^{-(ρ-n)t} + λ[f(k) - c - (n+g+δ)k].

---

## Endogenous Growth & R&D (Monopolistic Competition)

* ❌ **Level vs growth effect: a^L always changes the growth rate** → ✅ Under β+θ<1 (semi-endogenous), a^L raises the LEVEL of A permanently but does NOT affect the long-run g_A^*. Only under β+θ=1 (fully endogenous) does a^L change growth.
* ❌ **β+θ<1 vs β+θ=1: thinking they behave identically** → ✅ β+θ<1: growth depends on n (population-driven). β+θ=1, n=0: growth depends on R&D allocation (policy-driven). Opposite policy implications.
* ❌ **Treating patent demand like final-goods demand** → ✅ Patent demand is DERIVED from expected monopoly profits in the final-goods sector. Patent price = PV of future profits, not marginal cost. Monopoly pricing recovers fixed R&D costs.
* ❌ **Assuming full appropriability / perfect IP protection** → ✅ Non-rivalry + partial non-excludability → private returns < social returns. Knowledge spillovers are pervasive, justifying R&D subsidies.
* ❌ **Writing the R&D equation without specifying φ** → ✅ Always state: ġ_A/g_A = βg_K + θn + (φ-1)g_A. The (φ-1) term determines whether g_A converges (φ<1) or explodes (φ>1).
* ❌ **Confusing expanding-variety (Romer) with quality-ladder (Aghion-Howitt)** → ✅ Expanding variety: new designs complement existing ones (no obsolescence). Quality ladders: new innovations destroy old ones (creative destruction). Different welfare and policy implications.

---

## Overlapping Generations (OLG) Model

* ❌ **Two-period budget: writing c_{1t} + c_{2,t+1} = w_t(1+r_{t+1})** → ✅ Correct intertemporal budget: c_{1t} + c_{2,t+1}/(1+r_{t+1}) = w_t. Future consumption must be DISCOUNTED by 1+r, not multiplied.
* ❌ **Dynamic inefficiency: checking r < ρ** → ✅ Condition for inefficiency: r* < n+g (the growth rate of the economy), not r < ρ. Even if r* > 0, the economy can be dynamically inefficient.
* ❌ **Assuming OLG always has the same steady state as Ramsey** → ✅ OLG CAN have k* > k_gold (dynamic inefficiency) because generations don't coordinate. Ramsey ALWAYS has k* < k_gold under ρ > n.
* ❌ **Forgetting only the YOUNG save** → ✅ Capital in t+1 = saving of generation born at t only. The old dissave entirely. So k_{t+1} = s_t/((1+g)(1+n)) where s_t depends only on w_t (the young's wage).
* ❌ **OLG Euler: forgetting the discount factor 1/(1+ρ)** → ✅ u'(c_{1t})/u'(c_{2,t+1}) = (1+r_{t+1})/(1+ρ). The 1/(1+ρ) appears because utility is discounted — omitting it overweights future consumption.

---

## Real Business Cycle (RBC) Model

* ❌ **Solving for labour supply without the intratemporal FOC** → ✅ The condition 1/(1-l_t) = w_t/c_t (with log utility) must hold alongside the Euler equation. Labour supply and consumption are jointly determined.
* ❌ **Long-run labour independence is universal** → ✅ Long-run labour supply is wage-independent ONLY when φ = β (shock persistence = discount factor). If φ < β, substitution dominates; if φ > β, wealth dominates.
* ❌ **Confusing Frisch (constant-λ) with uncompensated elasticity** → ✅ Frisch holds marginal utility of wealth constant = substitution effect only. Uncompensated includes income effect. The Frisch is the relevant concept for RBC macro; micro estimates give uncompensated (much smaller).
* ❌ **Hansen indivisible labour makes supply inelastic** → ✅ The lottery mechanism makes aggregate labour supply PERFECTLY ELASTIC (linear in hours). It solves the elasticity puzzle: micro inelastic at individual level, macro elastic at aggregate level.
* ❌ **RBC predicts long-run money neutrality only** → ✅ RBC has no nominal rigidities — money is neutral even in the SHORT run. This is the key contrast with NK models.
* ❌ **Technology shocks are the only propagation mechanism** → ✅ Intertemporal substitution of leisure is the KEY propagation mechanism: a temporary shock today affects labour supply across multiple periods through interest rate changes.

---

## New Keynesian (NK) Model

* ❌ **Divine coincidence: no trade-off ever** → ✅ Divine coincidence holds ONLY without cost-push shocks (u_t=0). When u_t ≠ 0, the NKPC is π_t = βE_tπ_{t+1} + κx_t + u_t, and stabilising π requires x_t ≠ 0.
* ❌ **Taylor principle: φ_π > 0 is enough** → ✅ Determinacy requires φ_π > 1. If φ_π ∈ (0,1), a rise in π lowers the real rate (i - Eπ), amplifying inflation → sunspot equilibria.
* ❌ **Confusing r^n (natural rate) with actual r** → ✅ r^n = ρ + σ^{-1}g (real rate under flexible prices). The NK IS: ẋ = σ(r - r^n) — the output gap moves when actual r deviates from r^n.
* ❌ **NK IS equation: treating x_t as predetermined** → ✅ x_t (output gap) is a JUMP variable — no capital in the basic NK model. Both x and π jump, unlike Ramsey where k is predetermined.
* ❌ **Calvo parameter θ: confusing fraction adjusting vs fraction stuck** → ✅ θ = fraction of firms that CANNOT reset price each period. Average contract duration = 1/(1-θ). If θ = 0.75, prices last 4 quarters on average.
* ❌ **Rational expectations: policy ineffectiveness holds in NK** → ✅ Lucas-Sargent-Wallace (anticipated money is neutral) holds under flexible prices but NOT under sticky prices. In NK, even anticipated monetary policy affects real output because prices cannot adjust instantly.
