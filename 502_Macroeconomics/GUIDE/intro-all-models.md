# All Models at a Glance — What to Study First

> **Purpose:** One-file introduction to every model on the exam — the core theory, the essential equations, the key diagrams, and the **first questions you must master** for each model.
> **Exam format:** 8 questions (Solow, Golden Rule, Ramsey, OLG, R&D Growth, R&D Monopolistic, RBC, NK) — answer any 5.
> **Priority ranking:** ⭐ S-tier → A-tier → B-tier → C-tier (see [Priority Matrix](./EXAM-PRIORITY-MATRIX.md)).
> **Study order:** Work through models **in the order below** — each builds on the previous.

---

## 🔷 Model 1: Solow Growth Model (Exogenous Growth)

### What It Explains
Why economies grow in the short run (capital accumulation) but **not** in the long run (only technology drives sustained growth). The workhorse of all growth economics — every other model modifies or extends this one.

### Core Mechanism

$$\dot{k} = s f(k) - (n + g + \delta) k$$

- $k$ = capital per effective worker
- Investment = $s f(k)$; break-even = $(n+g+\delta)k$
- When investment > break-even → $k$ rises → economy grows
- When investment = break-even → **steady state** $k^*$ → per-capita variables grow at $g$

### Key Diagram
**Solow Phase Diagram:** $sf(k)$ curve crossing $(n+g+\delta)k$ ray. Below $k^*$: $k$ rises. Above $k^*$: $k$ falls. Arrow on $k$-axis points toward $k^*$.

### Essential Equations to Memorise
| Formula | What It Is |
|---------|-----------|
| $\dot{k} = s f(k) - (n+g+\delta)k$ | Law of motion (capital accumulation) |
| $k^* = \big(\frac{s}{n+g+\delta}\big)^{1/(1-\alpha)}$ | Steady-state capital (Cobb-Douglas) |
| $y^* = k^{*\alpha}$ | Steady-state output |
| $\lambda = (1-\alpha)(n+g+\delta)$ | Speed of convergence (~0.053 → half-life ≈ 13 yr) |
| $\frac{\dot{Y}}{Y} = \frac{\dot{A}}{A} + \alpha\frac{\dot{K}}{K} + (1-\alpha)\frac{\dot{L}}{L}$ | Growth accounting decomposition |

### Priority Questions (Study These First)

| # | Question | Difficulty | Why First |
|---|----------|-----------|-----------|
| **Q1** | Derive $\dot{k}$ + list 6 neoclassical assumptions + draw phase diagram + state BGP growth rates | ⭐ S | The single most important result in growth — **master this before anything else** |
| **Q2** | Derive $k^*$, $y^*$, $c^*$ for Cobb-Douglas + compute elasticities | ⭐ S | All comparative statics build on this algebra |
| **Q3** | Derive speed of convergence $\lambda$ + half-life calculation | **A** | Connects theory to empirical evidence |
| **Q6** | Full steady-state algebra for any production function parameters | ⭐ S | Catch-all for the algebraic core |

> **After these →** Do [Solow Model Basics](./solow-basics.md) for the complete treatment.

---

## 🔷 Model 2: Golden Rule (Normative Solow)

### What It Explains
Given the Solow model, **which saving rate $s$ maximises long-run consumption?** The answer is $s_{gold} = \alpha$ (capital's share of output). Saving more than $\alpha$ means you could consume more forever by saving less.

### Core Mechanism

$$c^*(s) = (1-s) \cdot \big(\frac{s}{n+g+\delta}\big)^{\alpha/(1-\alpha)}$$

- Differentiate w.r.t $s$ → set to zero → $s_{gold} = \alpha$
- $c^*(s)$ has a **hump shape**: peaks at $s=\alpha$, zero at $s=0$ and $s=1$

### Key Diagram
**Golden Rule hump:** $c^*$ on vertical axis, $s$ on horizontal. Inverted-U shape peaking at $\alpha$. Show regions of dynamic inefficiency (saving too much) and dynamic efficiency.

### Key Insight (Welfare)
- If $s > \alpha$: reduce $s$ → consumption rises **immediately AND permanently** → unambiguous welfare gain
- If $s < \alpha$: raise $s$ → consumption drops today but is higher later → ambiguous welfare effect

### Priority Questions

| # | Question | Difficulty | Why First |
|---|----------|-----------|-----------|
| **Q3 (Golden Rule)** | Derive $c^*(s)$ hump + $s_{gold}=\alpha$ + welfare analysis of changing $s$ | ⭐ S | Central normative concept — the saving-consumption tradeoff is an exam classic |

---

## 🔷 Model 3: Ramsey-Cass-Koopmans Model (Endogenous Saving)

### What It Adds Over Solow
Households **optimally choose consumption/saving** over time (instead of fixed $s$). This gives us:
- The **Euler equation** ($\dot{c}/c$ depends on MPK minus discount rate)
- The **Modified Golden Rule** ($f'(k^*) = \rho + \theta g + \delta$, not $n+g+\delta$)
- **Saddle-path stability** (unique path to steady state)
- Slower convergence than Solow (consumption smoothing)

### Core Equations

$$\dot{c}/c = \frac{1}{\theta}\big(f'(k) - \rho - \theta g - \delta\big)$$
$$\dot{k} = f(k) - c - (n+g+\delta)k$$

- Euler equation: consumption grows when $f'(k) > \rho + \theta g + \delta$ (i.e. MPK exceeds the effective discount rate)
- Modified Golden Rule: $f'(k^*) = \rho + \theta g + \delta$
- **Key comparison:** $k^*_{ramsey} < k^*_{gold}$ whenever $\rho > 0$ (impatience → less capital)

### Key Diagram
**Phase diagram** with two loci:
- $\dot{c}=0$: vertical line at $k^*$ (where $f'(k^*) = \rho + \theta g + \delta$)
- $\dot{k}=0$: hump-shaped (peaks at $k_{gold}$)
- 4 directional quadrants + unique convergent **saddle path**

### Hamiltonian Setup

$$\mathcal{H} = e^{-(\rho-n)t}\frac{c^{1-\theta}-1}{1-\theta} + \lambda\big[f(k) - c - (n+g+\delta)k\big]$$

FOCs: $\partial\mathcal{H}/\partial c = 0$, $\partial\mathcal{H}/\partial k = -\dot{\lambda}$, TVC: $\lim_{t\to\infty} \lambda k e^{-(\rho-n)t} = 0$

### Priority Questions

| # | Question | Difficulty | Why First |
|---|----------|-----------|-----------|
| **Q4** | Set up Hamiltonian → derive Euler equation ($\dot{c}/c$) | ⭐ S | The core behavioral equation of intertemporal macro — **master the 4-step elimination** |
| **Q5** | Draw the full phase diagram (4 quadrants + saddle path) | ⭐ S | The central analytical tool — draw from memory with all 4 directional arrows |
| **Q6** | Full household problem + competitive equilibrium definition + steady-state $k^*$ | ⭐ S | Microfoundations of modern macro |
| **Q7** | Compare Modified Golden Rule vs Golden Rule ($k^* < k_{gold}$ proof) | ⭐ S | The essential normative comparison — appears in 3 sources |

---

## 🔷 Model 4: Overlapping Generations (OLG / Diamond Model)

### What It Adds Over Ramsey
- **Discrete time** (two-period lives: young work & save, old consume savings)
- **No altruism** — each generation only cares about itself
- Can produce **multiple equilibria** and **poverty traps**
- **Dynamic inefficiency** possible (unlike Ramsey where it is ruled out by TVC)

### Core Mechanism

$$\max_{c_1, c_2} U = u(c_1) + \frac{1}{1+\rho}u(c_2) \quad\text{s.t.}\quad c_1 + s = w,\; c_2 = (1+r)s$$

- Euler equation: $u'(c_1) = \frac{1+r}{1+\rho} u'(c_2)$
- For log utility: saving $s = \frac{w}{2+\rho}$ (constant fraction of wage)
- Capital dynamics: $k_{t+1} = \frac{s(w(k_t))}{(1+n)(1+g)}$

### Key Diagram
**$k_{t+1}$ as function of $k_t$:** crossing the 45° line gives steady states. Can have 0, 1, or multiple intersections (multiple equilibria).

### Key Insight
- OLG can be **dynamically inefficient** ($k^*_{olg} > k_{gold}$) — too much capital accumulation
- Government can Pareto-improve by transferring from young to old (pay-as-you-go social security)

### Priority Questions

| # | Question | Difficulty | Why First |
|---|----------|-----------|-----------|
| **Q20** | Set up 2-period maximisation + derive $k_{t+1}$ function | **A** | Foundation of the OLG model — appears in Batch 47 & 48 |
| **Q21** | Comparative statics ($g, \rho, n$) + speed of convergence vs Solow | **A** | The key comparison question |

> **⚠ No pre-written answer yet.** Use Batch 47 Q4 and Batch 48 Q4 to write one.

---

## 🔷 Model 5: Endogenous Growth (R&D / Romer Model)

### What It Adds Over Solow
Technology ($A$) is **endogenous** — it grows because firms invest in R&D, not because it falls from the sky. Knowledge has special properties: **non-rivalry** (can be used by many) and **partial excludability** (patents).

### Core Mechanism

$$\dot{A} = B (a^L L)^\gamma A^\phi \qquad
g_A = \frac{\dot{A}}{A} = B (a^L L)^\gamma A^{\phi-1}$$

- $\gamma$ = returns to R&D labor, $\phi$ = returns to existing knowledge (standing on shoulders)
- **Semi-endogenous** ($\phi < 1$): $g_A^* = \frac{\gamma n}{1-\phi}$ — growth depends on population growth $n$, **NOT** on R&D labor share $a^L$
- **Fully endogenous** ($\phi = 1, n=0$): $g_A = B(a^L L)^\gamma$ — policy CAN affect long-run growth

### Key Diagram
**(g_A, g_K) phase diagram:**
- $\dot{g}_A = 0$ locus: $\beta g_K = (1-\phi)g_A - \theta n$
- $\dot{g}_K = 0$ locus: $g_K = g_A + n$
- BGP at intersection. $n\uparrow$ shifts $\dot{g}_A=0$ down and $\dot{g}_K=0$ up → higher $g_A^*$.

### Key Distinction
| Effect | What Changes | Examples |
|--------|-------------|---------|
| **Level effect** | Permanent change in $A$ (one-time jump) | $a^L \uparrow$ in semi-endogenous model |
| **Growth effect** | Permanent change in $\dot{A}/A$ (sustained) | $a^L \uparrow$ in fully endogenous model |

### Priority Questions

| # | Question | Difficulty | Why First |
|---|----------|-----------|-----------|
| **Q8** | Role of $a^L$ — level vs growth effects of R&D labor | ⭐ S | Central distinction — 3 sources contain this |
| **Q9** | $(g_A, g_K)$ dynamics — $n$ and $a^K$ changes in phase space | ⭐ S | The two-equation system is the BGP workhorse |
| **Q10** | Nature of knowledge (non-rivalry, excludability) + R&D allocation | ⭐ S | Foundational concept for ALL endogenous growth |
| **Q11** | Semi-endogenous ($\beta+\theta<1$) vs fully endogenous ($\beta+\theta=1$) | **A** | The Jones critique — why $\phi<1$ is more realistic |

---

## 🔷 Model 6: R&D Monopolistic Competition

### What It Adds Over Romer
Firms **explicitly choose** how much to invest in R&D by comparing:
- **Cost** of R&D: paying researchers' wages $w L_A$
- **Benefit** of R&D: present value of monopoly profits from selling a new intermediate good

### Core Mechanism
1. **Final good:** $Y = \big[\int L(i)^\phi di\big]^{1/\phi}$ with $0<\phi<1$ — love-of-variety
2. **Intermediate monopolist:** buys patent, produces $L(i)$ units of input, charges markup $p(i) = w/\phi$
3. **Profit flow:** $\pi = p(i)L(i) - wL(i) = (1-\phi)p(i)L(i)$
4. **Patent value:** $v(t) = \int_t^\infty \pi(s) e^{-R(s)} ds$ (PV of all future profits)

### Key Insight

$$v \cdot \dot{A} = w L_A$$

In equilibrium, the value of new patents created ($v \cdot \dot{A}$) equals R&D cost ($w L_A$). This determines equilibrium $L_A^*$.

### Priority Questions

| # | Question | Difficulty | Why First |
|---|----------|-----------|-----------|
| **Q22** | Model structure + equilibrium $L_A$ via PV of profits | **A** | Core mechanism — appears in Batch 47 & 48 |
| **Q31** | Socially optimal vs equilibrium $L_A$ (knowledge spillover wedge) | **C** | Understanding the welfare gap; can answer from Q22 logic |

> **⚠ No pre-written answer yet.** Use Batch 47 Q6 and Batch 48 Q6 to write one.

---

## 🔷 Model 7: Real Business Cycle (RBC)

### What It Explains
Business cycles are the **efficient response** of the economy to **real shocks** (technology, productivity) — not market failures. Recessions are just periods of low productivity, and policy should not try to smooth them.

### Core Mechanism
**Household problem:**

$$\max \mathbb{E}_0 \sum_{t=0}^\infty \beta^t \big[\ln c_t + v(1-l_t)\big]$$

- **Intratemporal FOC:** $v'(1-l_t)/u'(c_t) = w_t$ — labor supply depends on real wage
- **Short-run labor supply:** upward-sloping (substitution effect dominates)
- **Long-run labor supply:** when preferences calibrated correctly ($\rho = \phi$), labor supply is **independent of permanent wage changes** — only temporary productivity shocks matter

### Key Diagram
**Impulse response functions:** technology shock → output, hours, investment all ↑ → gradual return to steady state. All variables co-move positively (no trade-off like in NK).

### Key Result (Hansen 1985)
**Indivisible labor** (lotteries: work full-time or not at all) makes aggregate labor supply **much more elastic** (~∞) than micro elasticities (~0.2). This resolves the puzzle of why hours fluctuate so much despite small wage changes.

### Priority Questions

| # | Question | Difficulty | Why First |
|---|----------|-----------|-----------|
| **Q23** | Household problem + log utility labor supply (short-run vs long-run) | **A** | Core RBC mechanism — appears in Batch 47 & 48 |
| **Q30** | Hansen indivisible labor + elasticity comparison | **B** | Understanding why RBC can explain big employment fluctuations |

> **⚠ No pre-written answer yet.** Use Batch 47 Q7 and Batch 48 Q7 to write one.

---

## 🔷 Model 8: New Keynesian (NK)

### What It Adds Over RBC
**Nominal rigidities** (sticky prices) mean the economy can deviate from the efficient equilibrium — recessions are **inefficient** and policy can help. The core framework is the **3-equation NK model**.

### Core Equations (Continuous Time / New Keynesian)

| Name | Equation | What It Says |
|------|----------|-------------|
| **NK IS** | $\dot{x}_t = \sigma(r_t - \rho - r^n_t)$ | Output gap $x_t$ depends on real interest rate relative to natural rate |
| **NK PC** | $\dot{\pi}_t = \rho\pi_t - \kappa x_t$ | Inflation rises when output gap is positive (Phillips curve) |
| **Taylor Rule** | $i_t = r^n_t + \phi_\pi \pi_t + \phi_x x_t$ | Central bank sets interest rate to stabilise inflation and output |

Where $x_t$ is the output gap (actual minus natural output).

### Key Insight: Divine Coincidence
In the basic NK model, stabilising inflation **also** stabilises the output gap ($\pi_t = 0 \Rightarrow x_t = 0$). No trade-off. This breaks with cost-push shocks or incomplete information.

### Lucas Supply Curve

$$y = y_n + \alpha(p - p^e) + \varepsilon$$

Output deviates from natural only when prices surprise agents. Role of **rational expectations**: only unanticipated policy has real effects.

### Priority Questions

| # | Question | Difficulty | Why First |
|---|----------|-----------|-----------|
| **Q24** | IS-PC-Taylor rule (3-equation NK model in continuous time) | **A** | The core NK framework — appears in Batch 47 & 48 |
| **Q25** | Lucas supply curve + role of rational expectations | **A** | Foundational — appears in Batch 47 & 48 |

> **⚠ No pre-written answer yet.** Use Batch 47 Q8 and Batch 48 Q8 to write one.

---

## Cross-Model Comparison Table

| Feature | Solow | Ramsey | OLG | Endogenous | R&D Mono | RBC | NK |
|---------|-------|--------|-----|------------|----------|-----|----|
| **Time** | Continuous | Continuous | Discrete | Continuous | Continuous | Discrete | Continuous |
| **Saving** | Exogenous $s$ | Optimising HH | Young save | Exogenous $s$ | Monopoly profits | Optimising HH | Optimising HH |
| **Tech** | Exogenous $g$ | Exogenous $g$ | Exogenous $g$ | R&D eqn $\dot{A}$ | R&D eqn $\dot{A}$ | Stochastic | Stochastic |
| **Market** | Perfect comp. | Perfect comp. | Perfect comp. | Perfect comp. | Monopolistic | Perfect comp. | Monopolistic |
| **Cycle** | No cycles | No cycles | No cycles | No cycles | No cycles | Real shocks | Nominal rigidities |
| **Policy?** | Only level effects | Taxation affects $k^*$ | Pareto-improving transfers | Could affect $g$ in fully endog. | R&D subsidy | No (efficient) | Yes (stabilisation) |
| **Key diagram** | $sf(k)$ vs $(n+g+\delta)k$ | $(\dot{c}=0,\dot{k}=0)$ phase | $k_{t+1}(k_t)$ 45° line | $(g_A, g_K)$ phase | Profit PV = R&D cost | Impulse responses | IS-PC-Taylor curves |

---

## Suggested Study Sequence

| Order | Model | Hours | Key Output |
|-------|-------|-------|-----------|
| **1** | Solow + Golden Rule | 6 | Master $\dot{k}$, phase diagram, BGP rates, $s_{gold}=\alpha$ |
| **2** | Ramsey | 6 | Euler equation, phase diagram with saddle path, Modified Golden Rule |
| **3** | Endogenous Growth | 4 | R&D equation, $(g_A, g_K)$ phase, level vs growth effects |
| **4** | OLG | 3 | Two-period setup, $k_{t+1}$ function, dynamic inefficiency |
| **5** | R&D Monopolistic | 2 | Profit PV, equilibrium $L_A$ |
| **6** | RBC | 2 | Household labor supply, indivisible labor |
| **7** | NK | 2 | IS-PC-Taylor, Lucas supply |
| **Total** | — | **~25h** | — |

> **Pro tip:** Models 1–3 (S-tier) cover 60%+ of exam marks. Master those first. Models 4–8 share common structure with 1–3 — learn them faster by identifying what they **change** from the baseline.

---

## Cross-References

- [Full answer set](../ANSWERS/answers-macroeconomics.md) — detailed solutions for S-tier + A-tier questions
- [Solow Model Basics](./solow-basics.md) — deep dive on the Solow model
- [Exam Priority Matrix](./EXAM-PRIORITY-MATRIX.md) — all 32 questions ranked by frequency × difficulty
- [Exam Cheat Sheet](./EXAM-CHEAT-SHEET.md) — one-page formula reference
- [Equation Explainer](./EQUATION-EXPLAINER.md) — plain-English breakdown of each equation
- [Study Roadmap](./STUDY-ROADMAP.md) — 10-day study schedule
