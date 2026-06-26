# All Models at a Glance — The Complete Reference

> **Purpose:** One-file comprehensive reference covering every model on the exam — the theory, the derivations, the diagrams, the insights, and the **priority questions to master first**.
> **Exam format:** 8 questions (Solow, Golden Rule, Ramsey, OLG, R&D Growth, R&D Monopolistic, RBC, NK) — answer any 5.
> **Priority ranking:** ⭐ S-tier → A-tier → B-tier → C-tier (see [Priority Matrix](./EXAM-PRIORITY-MATRIX.md)).
> **Study order:** Work through models **in the order below** — each builds on the previous.

---

## Table of Contents

1. [Solow Growth Model](#-model-1-solow-growth-model-exogenous-growth)
2. [Golden Rule (Normative Solow)](#-model-2-golden-rule-normative-solow)
3. [Ramsey-Cass-Koopmans Model](#-model-3-ramsey-cass-koopmans-model-endogenous-saving)
4. [Overlapping Generations (OLG)](#-model-4-overlapping-generations-olg-diamond-model)
5. [Endogenous Growth (R&D / Romer)](#-model-5-endogenous-growth-rd--romer-model)
6. [R&D Monopolistic Competition](#-model-6-rd-monopolistic-competition)
7. [Real Business Cycle (RBC)](#-model-7-real-business-cycle-rbc)
8. [New Keynesian (NK)](#-model-8-new-keynesian-nk)
9. [Cross-Model Comparison](#cross-model-comparison-table)
10. [Suggested Study Sequence](#suggested-study-sequence)

---

## 🔷 Model 1: Solow Growth Model (Exogenous Growth)

### What It Explains

The Solow model answers: **Why do economies grow, and why do some grow faster than others?** It shows that capital accumulation drives growth in the short run (transition dynamics) but **only technological progress drives growth in the long run** (balanced growth path). It is the workhorse of all growth economics — every other model modifies or extends this one.

### Full Assumptions (Exam Checklist)

These 6 features define "neoclassical" and Q1 asks you to list them:

| # | Feature | Formal Statement | Why It Matters |
|---|---------|-----------------|----------------|
| 1 | **Constant Returns to Scale (CRS)** | $F(\lambda K, \lambda AL) = \lambda F(K, AL)$ for all $\lambda > 0$ | Allows us to write $y = f(k)$ per effective worker — reduces the model to one dimension |
| 2 | **Diminishing Marginal Returns** | $F_K > 0, F_{KK} < 0$, $F_L > 0, F_{LL} < 0$ | Ensures convergence to steady state — each extra machine adds less to output |
| 3 | **Inada Conditions** | $\lim_{K\to0} F_K = \infty$, $\lim_{K\to\infty} F_K = 0$, symmetrically for $L$ | Guarantees **interior** steady state — $k^*$ is positive and finite |
| 4 | **Perfect Competition** | Factors paid marginal products: $r = MPK - \delta$, $w = MPL$ | No market failures; income fully distributed to capital and labor |
| 5 | **Exogenous Saving Rate $s$** | $s$ is fixed (not chosen by households) | Simplification — relaxed in Ramsey model. Shortcut for "households save a constant fraction of income" |
| 6 | **Exogenous $g$ and $n$** | $\dot{A}/A = g$, $\dot{L}/L = n$, both given | Technology and population growth are outside the model — relaxed in endogenous growth |

> **Exam tip:** The most common mistake is listing only 3–4 features. Memorise all 6. Q1 explicitly asks for "why is Solow called neoclassical" — list these six, then derive $\dot{k}$.

### Step-by-Step $\dot{k}$ Derivation (Master This)

This is the single most important algebraic result in growth economics. You must be able to reproduce it from memory in under 5 minutes.

**Step 1:** Start from the capital accumulation identity:

$$\dot{K} = sY - \delta K$$

*Capital stock changes by gross investment ($sY$) minus depreciation ($\delta K$).*

**Step 2:** Define per-effective-worker variables:

$$k \equiv \frac{K}{AL}, \qquad y \equiv \frac{Y}{AL} = f(k)$$

*CRS allows us to divide through by $AL$ — this is the key mathematical convenience.*

**Step 3:** Take logs and differentiate $k = K/(AL)$:

$$\ln k = \ln K - \ln A - \ln L$$

$$\frac{\dot{k}}{k} = \frac{\dot{K}}{K} - \frac{\dot{A}}{A} - \frac{\dot{L}}{L} = \frac{\dot{K}}{K} - g - n$$

*Log-differentiation converts the ratio into a simple difference of growth rates.*

**Step 4:** Substitute $\dot{K}/K$ from Step 1:

$$\frac{\dot{K}}{K} = \frac{sY - \delta K}{K} = s\frac{Y}{K} - \delta = \frac{sf(k)}{k} - \delta$$

**Step 5:** Assemble:

$$\frac{\dot{k}}{k} = \frac{sf(k)}{k} - \delta - g - n$$

**Step 6:** Multiply through by $k$:

$$\boxed{\dot{k} = s f(k) - (n + g + \delta) k}$$

### Understanding Each Term

| Term | Name | Meaning |
|------|------|---------|
| $sf(k)$ | **Actual investment** | What the economy actually invests per effective worker |
| $(n+g+\delta)k$ | **Break-even investment** | Investment needed just to keep $k$ constant: replace depreciation ($\delta k$), equip new workers ($nk$), and equip effective workers from tech progress ($gk$) |
| $\dot{k} > 0$ | **Capital deepening** | Each worker has more capital than before |
| $\dot{k} = 0$ | **Steady state** | $k$ is constant — all growth comes from technology |

### The Solow Diagram (Draw Blindfolded)

```text
Output                   ▲
per eff.                 │
worker                   │    ┌── (n+g+δ)k   (break-even line, slope = n+g+δ)
                         │   /              
                         │  /               
                         │ /  ┌── sf(k)      (actual investment, concave: f'' < 0)
                         │/  /               
                         └──●────────────────► k
                           k*
```

**Axis labels:**
- Horizontal: $k$ (capital per effective worker)
- Vertical: output per effective worker (and investment per effective worker)
- Note: $sf(k)$ sits **below** $f(k)$ by factor $s$ — the saving rate determines the gap

**Directional arrows:**
- **Left of $k^*$**: $sf(k) > (n+g+\delta)k$ → $\dot{k} > 0$ → $k$ rises → arrow points right
- **Right of $k^*$**: $sf(k) < (n+g+\delta)k$ → $\dot{k} < 0$ → $k$ falls → arrow points left
- **At $k^*$**: $\dot{k} = 0$ → steady state

### BGP Growth Rates (Memorise This Table)

| Variable | Per Effective Worker | Per Worker (per capita) | Aggregate |
|----------|-------------------|----------------------|-----------|
| Capital $k$ | 0 | $g$ | $n+g$ |
| Output $y$ | 0 | $g$ | $n+g$ |
| Consumption $c$ | 0 | $g$ | $n+g$ |
| Capital-Output ratio $K/Y$ | 0 | 0 | 0 (steady state) |

**Key insight:** On the BGP, $K/Y$ is constant. This is a **stylized fact** (Kaldor, 1961) — the model matches the data.

### Steady-State Algebra (Cobb-Douglas)

**Production:** $Y = K^{\alpha}(AL)^{1-\alpha}$, so $f(k) = k^{\alpha}$

**Set $\dot{k} = 0$:**

$$s k^{\alpha} = (n+g+\delta)k$$

$$k^* = \left(\frac{s}{n+g+\delta}\right)^{\frac{1}{1-\alpha}}$$

**Then:**

$$y^* = k^{*\alpha} = \left(\frac{s}{n+g+\delta}\right)^{\frac{\alpha}{1-\alpha}}$$

$$c^* = (1-s)y^* = (1-s)\left(\frac{s}{n+g+\delta}\right)^{\frac{\alpha}{1-\alpha}}$$

**Derivation insight:** The exponent $1/(1-\alpha)$ is called the **capital multiplier**. With $\alpha = 1/3$, it equals $1.5$ — a 1% increase in $s$ raises $k^*$ by 1.5%. This is the key amplification mechanism.

### Speed of Convergence (Half-Life ~13 Years)

**Central result:** Taylor-expand $\dot{k}$ around $k^*$:

$$\dot{k} \approx -\lambda(k - k^*), \quad \lambda = (1-\alpha)(n+g+\delta)$$

**Intuition:** The gap $(k - k^*)$ closes at rate $\lambda$ per year. With $\alpha = 1/3$, $n+g+\delta = 0.08$:

$$\lambda = (1 - 1/3) \times 0.08 = 0.053$$

**Half-life:** $t_{1/2} = \ln 2 / \lambda \approx 0.693 / 0.053 \approx 13$ years.

**Exam insight:** This means it takes roughly 13 years for half the gap to steady state to be eliminated. Full adjustment takes about $4 \times$ half-life ≈ 50 years. This is **consistent with empirical estimates** (Barro, 2012: 2–3% convergence per year → $\lambda \approx 0.02–0.03$).

### Comparative Statics (Shock Analysis)

**All changes are permanent level effects — NOT growth effects.**

| Shock | What shifts | Direction of $k^*$ | Transition |
|-------|------------|-------------------|------------|
| **$s \uparrow$** | $sf(k)$ shifts **up** | $k^* \uparrow$ | $\dot{k} > 0$ at old $k^*$, gradual rise to new $k^*$ |
| **$\delta \uparrow$** | $(n+g+\delta)k$ rotates **up** | $k^* \downarrow$ | $\dot{k} < 0$ at old $k^*$, gradual fall to new $k^*$ |
| **$n \uparrow$** | $(n+g+\delta)k$ rotates **up** | $k^* \downarrow$ | Same as $\delta \uparrow$ — but affects $g_A$ in endogenous growth |
| **$g \uparrow$** | $(n+g+\delta)k$ rotates **up** | $k^* \downarrow$ | Unique: also raises the BGP growth rate |
| **$\alpha \uparrow$** | Both curves change shape | Ambiguous | Depends on whether MPK at steady state rises |

**Double-check:** A permanent increase in $s$ raises the **level** of output permanently but does NOT change the long-run **growth rate** (still $g$). This is the central Solow prediction: policy affects levels, not growth rates.

### Growth Accounting

**The decomposition:**

$$\frac{\dot{Y}}{Y} = \underbrace{\frac{\dot{A}}{A}}_{\text{TFP / Solow residual}} + \alpha \underbrace{\frac{\dot{K}}{K}}_{\text{capital deepening}} + (1-\alpha) \underbrace{\frac{\dot{L}}{L}}_{\text{labor growth}}$$

**How to compute the Solow residual:**
1. Get data: $\Delta Y/Y$, $\Delta K/K$, $\Delta L/L$
2. Set $\alpha$ = capital share of income (~1/3)
3. Residual = $\Delta Y/Y - \alpha(\Delta K/K) - (1-\alpha)(\Delta L/L)$
4. This $\Delta A/A$ is "total factor productivity" — technological progress

### Common Exam Pitfalls

| Mistake | Why It's Wrong |
|---------|---------------|
| Claiming $s$ affects long-run growth | $s$ only affects the **level** of $y^*$, not $g$ — $\partial \ln y(t)/\partial t = g$ regardless of $s$ |
| Forgetting $(n+g+\delta)k$ includes $n$ | Population growth requires equipping new workers with capital — this is a **drag** on $k$ |
| Drawing $sf(k)$ above $(n+g+\delta)k$ at high $k$ | $sf(k)$ is concave and crosses only once if Inada holds |
| Saying "convergence is automatic" | Only **conditional** convergence — countries converge to their OWN steady state, not a common one |

### Priority Questions

| # | Question | Difficulty | Why First |
|---|----------|-----------|-----------|
| **Q1** | Derive $\dot{k}$ + list 6 neoclassical assumptions + draw phase diagram + state BGP growth rates | ⭐ S | The single most important result in growth — **master this before anything else** |
| **Q2** | Derive $k^*$, $y^*$, $c^*$ for Cobb-Douglas + compute elasticities | ⭐ S | All comparative statics build on this algebra |
| **Q3** | Derive speed of convergence $\lambda$ + half-life calculation | **A** | Connects theory to empirical evidence |
| **Q6** | Full steady-state algebra for any production function parameters | ⭐ S | Catch-all for the algebraic core |

> **After these →** Do [Solow Model Basics](./solow-basics.md) for the complete treatment.
> **Full answers →** [answers-macroeconomics.md Q1–Q6](../ANSWERS/answers-macroeconomics.md#section-1--solow-growth-model)

---

## 🔷 Model 2: Golden Rule (Normative Solow)

### What It Explains

Given the Solow model, **which saving rate $s$ maximises long-run consumption?** This turns Solow from positive (what IS) to normative (what SHOULD BE). The answer: $s_{gold} = \alpha$.

### Deriving the Golden Rule

**Step 1:** Write steady-state consumption as a function of $s$:

$$c^*(s) = (1-s) y^* = (1-s) \left(\frac{s}{n+g+\delta}\right)^{\frac{\alpha}{1-\alpha}}$$

**Step 2:** Take logs and differentiate:

$$\ln c^* = \ln(1-s) + \frac{\alpha}{1-\alpha}[\ln s - \ln(n+g+\delta)]$$

$$\frac{\partial \ln c^*}{\partial s} = -\frac{1}{1-s} + \frac{\alpha}{1-\alpha} \cdot \frac{1}{s} = 0$$

**Step 3:** Solve:

$$\frac{\alpha}{1-\alpha} \cdot \frac{1}{s} = \frac{1}{1-s}$$

$$\frac{\alpha(1-s)}{s} = 1-\alpha \quad \Rightarrow \quad \alpha(1-s) = s(1-\alpha)$$

$$\boxed{s_{gold} = \alpha}$$

**Alternative derivation (the faster exam method):** At the Golden Rule, $f'(k_{gold}) = n+g+\delta$. For Cobb-Douglas $f(k) = k^{\alpha}$:

$$f'(k) = \alpha k^{\alpha-1} = n+g+\delta$$

$$k_{gold} = \left(\frac{\alpha}{n+g+\delta}\right)^{1/(1-\alpha)}$$

Then from steady-state condition $s k_{gold}^{\alpha} = (n+g+\delta)k_{gold}$:

$$s_{gold} = \frac{(n+g+\delta)k_{gold}}{k_{gold}^{\alpha}} = (n+g+\delta)k_{gold}^{1-\alpha}$$

Substitute $k_{gold}$:

$$s_{gold} = (n+g+\delta)\left(\frac{\alpha}{n+g+\delta}\right) = \boxed{\alpha}$$

### The Hump Shape (Draw This)

```text
c*       ▲
         │
         │       ┌── c*(s)
         │      / \
         │     /   \
         │    /     \
         │   /       \
         │  /         \
         │ /           \
         │└─────────────●──────► s
         0             1
                    s_gold = α
```

- $c^*(s)$ is zero at $s=0$ (no saving → no capital → no output) and at $s=1$ (all output invested, nothing consumed)
- Peaks at $s_{gold} = \alpha$ (for Cobb-Douglas, $\alpha \approx 1/3$)
- **Left of peak:** $c^*$ rising in $s$ — more saving → more capital → more output → higher consumption
- **Right of peak:** $c^*$ falling in $s$ — the extra output from more capital is less than the consumption sacrificed

### Welfare Analysis (The Key Insight)

| Scenario | Current $s$ relative to $\alpha$ | Policy | Welfare effect |
|----------|------|--------|---------------|
| **Dynamic inefficiency** | $s > \alpha$ (too much saving) | Reduce $s$ | **Immediate AND permanent consumption gain** — unambiguous Pareto improvement |
| **Dynamic efficiency** | $s < \alpha$ (too little saving) | Raise $s$ | Consumption falls **today**, rises later — ambiguous (need discounting) |

**Exam-level insight:** The envelope theorem says $\frac{dc^*}{ds}\big|_{s=\alpha} = 0$. Infinitesimally close to the Golden Rule, a small change in $s$ has zero first-order effect on steady-state consumption. This is why the welfare cost of being slightly away from $s_{gold}$ is second-order.

### Common Exam Pitfalls

| Mistake | Why It's Wrong |
|---------|---------------|
| Confusing Golden Rule $k_{gold}$ with steady-state $k^*$ | $k_{gold}$ maximises $c^*$; $k^*$ is where $\dot{k}=0$. They differ unless $s = \alpha$ |
| Claiming $s_{gold}$ is always optimal | Society may discount the future ($\rho > 0$) — Ramsey model shows optimal $k^* < k_{gold}$ |
| Forgetting the alternative derivation | The $f'(k_{gold}) = n+g+\delta$ method is faster and tests deeper understanding |

### Priority Questions

| # | Question | Difficulty | Why First |
|---|----------|-----------|-----------|
| **Q3 (Golden Rule)** | Derive $c^*(s)$ hump + $s_{gold}=\alpha$ + welfare analysis | ⭐ S | Central normative concept — the saving-consumption tradeoff is an exam classic |

---

## 🔷 Model 3: Ramsey-Cass-Koopmans Model (Endogenous Saving)

### What It Adds Over Solow

The Solow model assumes $s$ is constant. Ramsey **endogenises** saving by letting households optimally choose consumption over time. This transforms the model:

| Feature | Solow | Ramsey |
|---------|-------|--------|
| Saving rate | Fixed $s$ | Households optimize |
| Capital in steady state | $sf(k^*) = (n+g+\delta)k^*$ | $f'(k^*) = \rho + \theta g + \delta$ |
| Golden Rule comparison | $k^*$ can be > or < $k_{gold}$ | $k^* < k_{gold}$ always (for $\rho > 0$) |
| Stability | Global (1D) | Saddle-path (2D) |
| Convergence speed | $\lambda = (1-\alpha)(n+g+\delta)$ | Slower (~0.04 vs 0.053) |

### Full Assumptions

1. **Continuum of identical households** (representative agent) — simplifies aggregation
2. **Population growth** $n$, labor supply per household grows at $n$
3. **CRRA utility** $u(c) = \frac{c^{1-\theta} - 1}{1-\theta}$ — **constant** intertemporal elasticity of substitution $= 1/\theta$
4. **Perfect capital markets** — households can borrow/save at rate $r$
5. **No externalities** — competitive equilibrium is Pareto optimal
6. **No government** (in baseline model)
7. **Firms are identical** with CRS production $F(K, AL)$
8. **Exogenous technology** $g$ and population $n$ (same as Solow)

### Understanding CRRA Utility

$$u(c) = \frac{c^{1-\theta} - 1}{1-\theta}$$

| $\theta$ | IES ($1/\theta$) | Behavior |
|----------|-----------------|---------|
| 0 | $\infty$ | Linear utility — perfect consumption smoothing |
| 1 | 1 | Log utility $u(c) = \ln c$ — standard case |
| > 1 | < 1 | Strong diminishing marginal utility — households hate consumption fluctuations |

**Key parameter:** $\rho$ = rate of time preference. Higher $\rho$ → more impatient → consume more today → less capital in steady state.

### Hamiltonian Setup and Euler Derivation (4-Step Method)

This is the most heavily tested derivation in the macro exam. **Master these 4 steps.**

**The problem:**

$$U = \int_0^{\infty} e^{-(\rho-n)t} \frac{c(t)^{1-\theta} - 1}{1-\theta} dt$$

$$\text{s.t. } \dot{k} = f(k) - c - (n+g+\delta)k, \quad k(0) = k_0$$

**Step 1 — Write the Hamiltonian:**

$$\mathcal{H} = e^{-(\rho-n)t} \frac{c^{1-\theta} - 1}{1-\theta} + \underbrace{\lambda}_{\text{co-state}} \big[ \underbrace{f(k) - c - (n+g+\delta)k}_{\dot{k} = \text{law of motion}} \big]$$

**Step 2 — FOC for consumption ($\partial \mathcal{H} / \partial c = 0$):**

$$e^{-(\rho-n)t} c^{-\theta} = \lambda$$

*Intuition: At the optimum, the marginal utility of consumption today equals the shadow price of capital (the cost of saving one more unit).*

**Step 3 — FOC for capital ($\partial \mathcal{H} / \partial k = -\dot{\lambda}$):**

$$\lambda \big[f'(k) - (n+g+\delta)\big] = -\dot{\lambda}$$

*Intuition: The change in the shadow price reflects the net marginal product of capital.*

**Step 4 — Eliminate $\lambda$:**

Take logs of Step 2: $-\!(\rho-n)t - \theta \ln c = \ln \lambda$

Differentiate: $-(\rho-n) - \theta \frac{\dot{c}}{c} = \frac{\dot{\lambda}}{\lambda}$

Substitute $\dot{\lambda}/\lambda$ from Step 3: $-(\rho-n) - \theta \frac{\dot{c}}{c} = -[f'(k) - (n+g+\delta)]$

**Boxed result:**

$$\boxed{\frac{\dot{c}}{c} = \frac{1}{\theta} \big[f'(k) - \rho - \theta g - \delta\big]}$$

**Transversality condition:**

$$\lim_{t\to\infty} \lambda(t) k(t) e^{-(\rho-n)t} = 0$$

*No capital left over at the end of time (or more precisely, the present value of the capital stock goes to zero).*

### Key Intuition From the Euler Equation

- Consumption **grows** when $f'(k) > \rho + \theta g + \delta$ (MPK exceeds effective discount rate)
- Consumption **falls** when $f'(k) < \rho + \theta g + \delta$
- Consumption **constant** when $f'(k) = \rho + \theta g + \delta$ (the Modified Golden Rule)

**The $\theta g$ term:** Even with zero impatience ($\rho = 0$), consumption grows at $\theta g$ along the BGP because:
- Technology grows at $g$→ output grows → consumption per capita grows at $g$
- With diminishing marginal utility ($\theta > 0$), households require a higher MPK to accept delaying consumption

### The Phase Diagram (Draw This From Memory — 5-Step Method)

**The two equations:**

$$\dot{c} = 0 \quad\Rightarrow\quad f'(k^*) = \rho + \theta g + \delta \quad\text{(vertical line)}$$
$$\dot{k} = 0 \quad\Rightarrow\quad c = f(k) - (n+g+\delta)k \quad\text{(inverted-U)}$$

**Step 1 — Draw the axes:**
- Horizontal: $k$ (capital per effective worker)
- Vertical: $c$ (consumption per effective worker)

**Step 2 — Draw $\dot{c} = 0$:**
- Vertical line at $k^*$ where $f'(k^*) = \rho + \theta g + \delta$
- **Left of this line:** $f'(k) > \rho + \theta g + \delta$ → $\dot{c} > 0$ (c arrows **up**) — MPK is high, households accumulate, consumption grows
- **Right of this line:** $f'(k) < \rho + \theta g + \delta$ → $\dot{c} < 0$ (c arrows **down**) — MPK is low, households decumulate, consumption falls

**Step 3 — Draw $\dot{k} = 0$:**
- Inverted-U: zero at $k=0$, rises to peak at $k_{gold}$, falls to zero at the $k$ where $f(k) = (n+g+\delta)k$
- **Above this curve:** $c$ is too high → $\dot{k} < 0$ (k arrows **left**)
- **Below this curve:** $c$ is low enough → $\dot{k} > 0$ (k arrows **right**)

**Step 4 — Four directional quadrants:**

```text
c ▲            │
  │   Quadrant II  │  Quadrant I
  │   (k↓, c↑)     │  (k↓, c↓)
  │                │
  │   ════════●═══╪══════  ċ=0
  │           ║    │
  │   Quadrant III │  Quadrant IV
  │   (k↑, c↑)     │  (k↑, c↓)
  │                │
  └────────────────┴──────────────► k
                   k*
```

- **Quadrant I (k > k*, c high):** $\dot{k} < 0$ (above ċ=0), $\dot{c} < 0$ (right of $\dot{c}=0$) → NW movement
- **Quadrant II (k < k*, c high):** $\dot{k} < 0$ (above ċ=0), $\dot{c} > 0$ (left of $\dot{c}=0$) → NW movement
- **Quadrant III (k < k*, c low):** $\dot{k} > 0$ (below ċ=0), $\dot{c} > 0$ (left of $\dot{c}=0$) → NE movement
- **Quadrant IV (k > k*, c low):** $\dot{k} > 0$ (below ċ=0), $\dot{c} < 0$ (right of $\dot{c}=0$) → SE movement

**Step 5 — Draw the saddle path:**
- The unique convergent trajectory entering the steady state
- In Quadrants II and IV, trajectories diverge (blow up or crash to zero)
- The saddle path slopes **upward** in $(k,c)$ space
- For any initial $k_0$, the household picks $c_0$ ON the saddle path

### Steady State (Modified Golden Rule)

**Condition:** $f'(k^*) = \rho + \theta g + \delta$

**Cobb-Douglas ($f(k) = k^{\alpha}$):**

$$\alpha k^{*\alpha-1} = \rho + \theta g + \delta$$

$$k^* = \left(\frac{\alpha}{\rho + \theta g + \delta}\right)^{\frac{1}{1-\alpha}}$$

### Modified Golden Rule vs Golden Rule

| | Golden Rule (Solow) | Modified Golden Rule (Ramsey) |
|---|---|---|
| Condition | $f'(k_{gold}) = n+g+\delta$ | $f'(k^*) = \rho + \theta g + \delta$ |
| $k$ comparison | Highest possible $c^*$ | $k^* < k_{gold}$ when $\rho > 0$ |
| Intuition | Engineer's perspective | Households are impatient — they discount the future |
| Diagram | Peak of $\dot{k}=0$ | Vertical line to the **left** of the peak |

**Proof that $k^* < k_{gold}$:**

Since $f$ is concave ($f'' < 0$), $f'(k)$ is decreasing in $k$.
- $f'(k_{gold}) = n+g+\delta$ and $f'(k^*) = \rho + \theta g + \delta$
- Since $n < \rho + (\theta-1)g$ (for standard parameter values), $f'(k^*) > f'(k_{gold})$
- Therefore $k^* < k_{gold}$

**Economic meaning:** Impatience means society does not accumulate as much capital as the Golden Rule would suggest. Some consumption is sacrificed today relative to the "maximum possible forever" benchmark.

### Comparative Statics

| Parameter Shift | Effect on $\dot{c}=0$ | Effect on $k^*$ | Transition |
|----------------|----------------------|----------------|------------|
| **$\rho \uparrow$** (more impatient) | Vertical line shifts **left** | $k^* \downarrow$ | $c$ jumps **down** → gradual decline to lower $k^*$ |
| **$\theta \uparrow$** (lower IES) | Vertical line shifts **left** | $k^* \downarrow$ | Consumption responds less to interest rate changes |
| **G $\uparrow$** (govt spending) | **No shift** (key insight!) | $k^*$ unchanged | $\dot{k}=0$ shifts down → $c$ jumps down on impact |
| **$n \uparrow$** | Ambiguous (depends on $\theta$) | $k^*$ ambiguous | Break-even rises, but Euler also shifts |

**Government spending insight (exam favourite):** Permanent government consumption $G$ does NOT shift $\dot{c}=0$ — that locus depends only on $f'(k)$, not on $G$. Only $\dot{k}=0$ shifts down by $G$. The economy jumps immediately to the saddle path at lower $c$, with $k^*$ unchanged.

### Convergence Speed (Ramsey vs Solow)

**Solow:** $\lambda_{solow} = (1-\alpha)(n+g+\delta) \approx 0.053$

**Ramsey:** Linearize the 2×2 system around steady state:

Jacobian: $$J = \begin{pmatrix} f'(k^*) - (n+g+\delta) & -1 \\ \frac{c^*}{\theta} f''(k^*) & 0 \end{pmatrix}$$

Trace: $Tr(J) = \rho - n + (\theta - 1)g$
Determinant: $\det(J) = -\frac{c^*}{\theta} f''(k^*) > 0$ (since $f'' < 0$)

Eigenvalues: one negative ($\mu_1$), one positive ($\mu_2$) — saddle path stability.

Speed: $\phi_{ramsey} \approx 0.04$ → half-life ≈ 17 years.

**Why slower?** Consumption smoothing — households spread the adjustment over more periods rather than adjusting quickly.

### Common Exam Pitfalls

| Mistake | Why It's Wrong |
|---------|---------------|
| Forgetting the $\theta g$ term in the Euler equation | $f'(k^*) = \rho + \theta g + \delta$, NOT $\rho + \delta$ — the $\theta g$ term ensures $c$ grows at $g$ along BGP |
| Drawing $\dot{c}=0$ as hump-shaped | $\dot{c}=0$ is VERTICAL — it's defined by $f'(k) = \rho + \theta g + \delta$, not by the $c$ equation |
| Putting the saddle path outside the stable arm | Trajectories above the saddle path hit $c=0$ axis; trajectories below hit $k=0$ axis — only the saddle path converges |
| Claiming $k^* = k_{gold}$ | Only if $\rho = n + (1-\theta)g$, which is generally false. Ramsey steady state is LESS than Golden Rule |

### Priority Questions

| # | Question | Difficulty | Why First |
|---|----------|-----------|-----------|
| **Q4** | Hamiltonian → Euler equation (4-step derivation) | ⭐ S | The core behavioral equation of intertemporal macro — **master this cold** |
| **Q5** | Full phase diagram (4 quadrants + saddle path) | ⭐ S | The central analytical tool — draw from memory with all 4 directional arrows |
| **Q6** | Full household problem + competitive equilibrium + steady state $k^*$ | ⭐ S | Microfoundations of modern macro |
| **Q7** | Modified GR vs Golden Rule ($k^* < k_{gold}$ proof) | ⭐ S | The essential normative comparison — appears in 3 sources |

---

## 🔷 Model 4: Overlapping Generations (OLG / Diamond Model)

### What It Adds Over Ramsey

The Ramsey model assumes households live forever (or have perfect altruism). OLG introduces **finite lives** with **overlapping generations** — the young and old coexist. This changes everything:

| Feature | Ramsey | OLG |
|---------|--------|-----|
| Time horizon | Infinite (dynasty) | Two periods (young → old) |
| Saving motive | Smooth consumption across infinite horizon | Save for retirement only |
| Altruism | Perfect (bequests) | None |
| Dynamic efficiency | Always efficient (TVC rules out over-accumulation) | Can be **dynamically inefficient** |
| Multiplicity | Unique steady state | Possible multiple equilibria |

### Full Assumptions

1. **Two-period lives:** Each generation lives for two periods — "young" (work, save) and "old" (retire, dissave)
2. **No population growth** (simplest case; can add $n$)
3. **No altruism** — no bequests from old to young
4. **Representative firm** with CRS production $F(K, L)$
5. **Perfect competition** in factor markets
6. **Individuals maximise lifetime utility** from consumption in both periods
7. **No uncertainty** — perfect foresight

### The Two-Period Maximisation

**The problem:**

$$\max_{c_1, c_2, s} U = u(c_1) + \frac{1}{1+\rho} u(c_2)$$

$$\text{s.t. } c_1 + s = w \quad\text{(young: earn wage, consume, save)}$$
$$\quad\;\, c_2 = (1 + r_{t+1}) s \quad\text{(old: consume savings plus interest)}$$

Where $\rho$ = rate of time preference, $s$ = saving.

**Substitute constraints into utility:**

$$U = u(w - s) + \frac{1}{1+\rho} u\big((1+r_{t+1})s\big)$$

**FOC (choose $s$ to maximise $U$):**

$$-u'(w - s) + \frac{1}{1+\rho} (1+r_{t+1}) u'((1+r_{t+1})s) = 0$$

**The Euler equation:**

$$\boxed{u'(c_1) = \frac{1+r_{t+1}}{1+\rho} u'(c_2)}$$

**Intuition:** The marginal utility of consumption when young equals the discounted marginal utility of consumption when old, adjusted for the interest rate.

### Log Utility Special Case (Exam Standard)

If $u(c) = \ln c$, then $u'(c) = 1/c$:

$$\frac{1}{w - s} = \frac{1+r_{t+1}}{1+\rho} \cdot \frac{1}{(1+r_{t+1})s}$$

Simplify:

$$\frac{1}{w - s} = \frac{1}{(1+\rho)s}$$

$$s = \frac{w - s}{1+\rho}$$

$$(1+\rho)s = w - s$$

$$\boxed{s = \frac{w}{2+\rho}}$$

**Key insight:** With log utility, the saving rate is **constant** ($1/(2+\rho)$) and does NOT depend on $r$. This means:
- Higher wage → proportionally higher saving
- Higher $\rho$ (more impatience) → lower saving rate
- Interest rate does not affect saving (income and substitution effects cancel for $u(c) = \ln c$)

### Capital Dynamics

**Step 1:** Total saving of the young = capital next period (goods market clearing):

$$K_{t+1} = s_t \cdot L_t$$

Where $L_t$ is the number of young workers.

**Step 2:** Divide by effective labor $(A_{t+1}L_{t+1})$:

$$k_{t+1} = \frac{K_{t+1}}{A_{t+1}L_{t+1}} = \frac{s_t L_t}{A_{t+1}L_{t+1}}$$

**Step 3:** Express $s_t$ in terms of $w_t = w(k_t)$:

$$k_{t+1} = \frac{s(w(k_t))}{(1+g)(1+n)}$$

**For Cobb-Douglas + log utility:**

$$w_t = (1-\alpha) k_t^{\alpha}, \quad s_t = \frac{w_t}{2+\rho}$$

$$k_{t+1} = \frac{1-\alpha}{(1+g)(1+n)(2+\rho)} k_t^{\alpha}$$

### The Diagram ($k_{t+1}$ as Function of $k_t$)

```text
k_{t+1}  ▲
         │      ┌── k_{t+1}(k_t) = B·k_t^α  (concave)
         │     /
         │    /    ┌── 45° line (k_{t+1} = k_t)
         │   /    /
         │  /    /
         │ / ●  /      ← steady state (intersection)
         │/  / /
         └──●───────► k_t
            k*
```

- $k_{t+1}(k_t)$ is **concave** — diminishing returns from $k_t^{\alpha}$
- Crosses the 45° line at the steady state $k^*$
- Stability: slope of $k_{t+1}(k_t)$ at intersection < 1 → stable
- **Multiple intersections possible** if production has increasing returns or S-shaped saving function → **poverty traps**

### Dynamic (In)efficiency

The key result that distinguishes OLG from Ramsey:

- In Ramsey, TVC prevents over-accumulation of capital
- In OLG, individuals save only for retirement — they may collectively over-save
- **Dynamic inefficiency:** $k^*_{olg} > k_{gold}$ — the economy has more capital than Golden Rule
- **Welfare implication:** A Pareto improvement is possible — the government can transfer from young to old (pay-as-you-go social security) and make everyone better off

**Golden Rule in OLG:** $f'(k_{gold}) = n + g$ (or $n + g + \delta$ with depreciation)

**Test for dynamic efficiency:** If $r < n+g$ (real interest rate below growth rate), the economy is dynamically inefficient.

### Comparative Statics

| Parameter | Effect on $k^*$ | Intuition |
|-----------|----------------|-----------|
| **$g \uparrow$** (faster tech progress) | $k^* \downarrow$ | Denominator $(1+g)$ reduces $k_{t+1}$ — effective labor grows faster |
| **$\rho \uparrow$** (more impatience) | $k^* \downarrow$ | Lower saving $s = w/(2+\rho)$ → less capital |
| **$n \uparrow$** (faster pop growth) | $k^* \downarrow$ | More workers to equip with capital |
| **$\alpha \uparrow$** (higher capital share) | Ambiguous | Higher capital share → higher wage share? Depends on $w = (1-\alpha)k^{\alpha}$ |

### Common Exam Pitfalls

| Mistake | Why It's Wrong |
|---------|---------------|
| Writing OLG with continuous time | OLG is inherently **discrete** — two-period lives, time subscript $t$ |
| Missing $(1+g)(1+n)$ denominator | Capital next period must be divided by larger effective labor |
| Claiming OLG always converges | Can have **multiple equilibria** with poverty traps (S-shaped saving) |
| Forgetting dynamic inefficiency is possible | This is the defining difference from Ramsey — exam questions LOVE this comparison |

### Priority Questions

| # | Question | Difficulty | Why First |
|---|----------|-----------|-----------|
| **Q20** | Set up 2-period maximisation + derive $k_{t+1}$ function | **A** | Foundation of OLG — appears in Batch 47 & 48 |
| **Q21** | Comparative statics ($g, \rho, n$) + speed vs Solow | **A** | The key comparison question |

> **⚠ No pre-written answer yet.** Use Batch 47 Q4 and Batch 48 Q4 to write one.

---

## 🔷 Model 5: Endogenous Growth (R&D / Romer Model)

### What It Adds Over Solow

Technology $A$ is **endogenous** — it grows because profit-seeking firms invest in R&D, not because it falls from the sky. Knowledge has special properties that make it fundamentally different from capital or labor.

### The Three Features of Knowledge (Memorise These)

| Property | Definition | Implication |
|----------|-----------|-------------|
| **Non-rivalry** | One person's use does not reduce availability for others | The same idea can be used by many firms simultaneously — increasing returns |
| **Partial excludability** | Patents and legal protection can exclude some users, but not perfectly | Creates a tension: static efficiency (unlimited use) vs dynamic incentives (need profits to fund R&D) |
| **Cumulativeness** | New knowledge builds on old knowledge ("standing on shoulders") | $\phi > 0$ in R&D equation — past research makes future research easier |

### Full Assumptions

1. **Three sectors:** Final goods, intermediate goods, R&D
2. **R&D equation:** $\dot{A} = B (a^L L)^{\gamma} A^{\phi}$
3. **Labor allocation:** $a^L$ fraction to R&D, $(1-a^L)$ to goods production
4. **Perfect competition** in final goods
5. **Monopoly power** for intermediate goods producers (in R&D monopolistic version)
6. **Population growth** $n$ (semi-endogenous version)
7. **CRS** in final goods, IRS in overall economy (due to non-rival knowledge)

### The R&D Equation

$$\dot{A} = B (a^L L)^{\gamma} A^{\phi}$$

| Parameter | Meaning | Typical Value |
|-----------|---------|---------------|
| $B$ | R&D productivity | Normalization |
| $\gamma$ | Returns to R&D labor | $0 < \gamma \leq 1$ |
| $\phi$ | Returns to existing knowledge ("standing on shoulders") | $\phi < 1$ (semi-endogenous) or $\phi = 1$ (fully endogenous) |
| $a^L$ | Share of labor in R&D | $0 < a^L < 1$ |

**Growth rate of $A$:**

$$g_A = \frac{\dot{A}}{A} = B (a^L L)^{\gamma} A^{\phi-1}$$

**Log-differentiate to get dynamics:**

$$\frac{\dot{g}_A}{g_A} = \gamma n + (\phi - 1) g_A$$

### The Two-Regime Classification

| Regime | Condition | Steady-state $g_A^*$ | Policy affects growth? |
|--------|-----------|---------------------|----------------------|
| **Semi-endogenous** | $\phi < 1$ | $g_A^* = \frac{\gamma n}{1-\phi}$ | **No** — $a^L$ only has level effects |
| **Fully endogenous** | $\phi = 1$, $n = 0$ | $g_A = B(a^L L)^{\gamma}$ | **Yes** — $a^L \uparrow$ permanently raises $g_A$ |

**The Jones Critique (1995):** If $\phi = 1$, TFP growth should have risen as R&D labor increased massively (1950–2000). In reality, TFP growth was roughly constant. This supports the semi-endogenous view ($\phi < 1$).

### Complete Model Dynamics

**Two state variables:** $g_A$ (tech growth) and $g_K$ (capital growth)

**Capital dynamics:**

$$g_K = \frac{\dot{K}}{K} = \frac{s_K Y}{K} - \delta$$

Along BGP: $g_K = g_A + n$

**Equation system:**

$$\dot{g}_A = g_A [\gamma n + (\phi-1) g_A]$$

$$\dot{g}_K = g_K [\beta g_A + (\text{other terms})]$$

### The $(g_A, g_K)$ Phase Diagram

**$\dot{g}_A = 0$ locus:**

$$\beta g_K = (1-\phi) g_A - \theta n$$

**$\dot{g}_K = 0$ locus:**

$$g_K = g_A + n$$

```text
g_K ▲
    │              ┌── ġ_K = 0 (slope 1)
    │             /
    │            /  ┌── ġ_A = 0 (slope (1-φ)/β)
    │           /  /
    │          /  /
    │         /  / 
    │        / ●   ← BGP (intersection)
    │       / / 
    │      / /
    │     / /
    │    //
    └───●──────────► g_A
        g_A*
```

**Shifts:**
- $n \uparrow$: $\dot{g}_A = 0$ shifts **down** (slope unchanged, intercept changes), $\dot{g}_K = 0$ shifts **up** → higher $g_A^*$
- $a^L \uparrow$: In semi-endogenous, $\dot{g}_A = 0$ unchanged → only level effect on $A$, no growth effect

### Level vs Growth Effects (The Central Distinction)

**Level effect:** A one-time permanent change in the **level** of output or technology
**Growth effect:** A permanent change in the **growth rate** of output or technology

| Policy | Semi-endogenous | Fully endogenous |
|--------|----------------|-----------------|
| Increase R&D labor $a^L$ | Level effect only | Growth effect |
| Increase population growth $n$ | Growth effect | Growth effect |
| Improve R&D productivity $B$ | Level effect only | Growth effect |

### Common Exam Pitfalls

| Mistake | Why It's Wrong |
|---------|---------------|
| Confusing "level effect" with "no effect" | $a^L$ always affects $A(t)$ — the question is whether it affects $\dot{A}/A$ |
| Forgetting $n$ in $g_A^*$ | Semi-endogenous: $g_A^* = \gamma n/(1-\phi)$ — growth depends on population GROWTH, not population LEVEL |
| Claiming Romer (1990) predicts scale effects | True but the data rejects this — Jones (1995) provides the semi-endogenous correction |
| Mixing up $\phi$ and $\gamma$ | $\phi$ = returns to existing knowledge; $\gamma$ = returns to R&D labor |

### Priority Questions

| # | Question | Difficulty | Why First |
|---|----------|-----------|-----------|
| **Q8** | Role of $a^L$ — level vs growth effects of R&D labor | ⭐ S | Central distinction — 3 sources |
| **Q9** | $(g_A, g_K)$ dynamics — $n$ and $a^K$ in phase space | ⭐ S | The two-equation system is the BGP workhorse |
| **Q10** | Nature of knowledge (non-rivalry, excludability) + R&D allocation | ⭐ S | Foundational — ALL endogenous growth builds on this |
| **Q11** | Semi vs fully endogenous ($\beta+\theta<1$ vs $\beta+\theta=1$) | **A** | The Jones critique — why $\phi<1$ is more realistic |

---

## 🔷 Model 6: R&D Monopolistic Competition

### What It Adds Over Romer

The baseline Romer model says R&D happens but does not model the **decision** to invest. R&D monopolistic competition adds:
- **Monopoly profits** as the reward for innovation (temporary monopoly power via patents)
- **Endogenous R&D effort** — firms compare costs and benefits of research

### Full Assumptions

1. **Three sectors:**
   - **Final goods** ($Y$): Perfect competition, CRS
   - **Intermediate goods** ($L(i)$ for $i \in [0, A]$): Monopolistic competition, each firm produces one differentiated input
   - **R&D sector:** Creates new blueprints $\dot{A}$, sells patents to intermediate firms
2. **Final goods production:**

$$Y = \left[\int_0^A L(i)^{\phi} di\right]^{1/\phi}, \quad 0 < \phi < 1$$

3. **Elasticity of substitution** between inputs = $1/(1-\phi)$. Lower $\phi$ → more substitutable inputs → lower monopoly markup.
4. **Symmetric equilibrium:** All intermediate firms are identical.

### Step-by-Step Profit Maximisation

**Step 1 — Final goods firm's problem:**

Choose $L(i)$ to maximise profits:

$$\max_{L(i)} \left[\int L(i)^{\phi} di\right]^{1/\phi} - \int_0^A p(i) L(i) di$$

**FOC:**

$$\frac{\partial Y}{\partial L(i)} = Y^{1-\phi} L(i)^{\phi-1} = p(i)$$

**Demand for intermediate $i$:**

$$L(i) = Y \cdot p(i)^{-1/(1-\phi)}$$

**Step 2 — Intermediate monopolist's problem:**

Choose $p(i)$ to maximise profits, given demand and marginal cost $w$ (wage):

$$\max_{p(i)} \pi(i) = p(i)L(i) - wL(i)$$

$$= [p(i) - w] \cdot Y \cdot p(i)^{-1/(1-\phi)}$$

**FOC gives markup:**

$$p(i) = \frac{w}{\phi}$$

Since $\phi < 1$, price > marginal cost. The markup $1/\phi$ is larger when inputs are more complementary (lower $\phi$).

**Step 3 — Profit flow:**

$$\pi = pL - wL = \left(\frac{w}{\phi} - w\right)L = w\left(\frac{1-\phi}{\phi}\right)L$$

**Step 4 — Patent value (present value of future profits):**

$$v(t) = \int_t^{\infty} \pi(s) e^{-R(s)} ds$$

Where $R(s) = \int_t^s r(\tau) d\tau$ is the cumulative discount factor.

### Equilibrium R&D

**Arbitrage condition:** Free entry into R&D means:

$$\underbrace{v \cdot \dot{A}}_{\text{value of new patents}} = \underbrace{w L_A}_{\text{R&D cost}}$$

**Equilibrium $L_A^*$:**
- Higher profits → higher patent value $v$ → more R&D labor $L_A$
- Higher wages → higher R&D cost → less R&D labor
- Equilibrium: $v \cdot \dot{A} = w L_A$

**Social vs private returns:**
- **Private return:** Monopoly profit from selling the intermediate good
- **Social return:** Consumer surplus from the new variety + future innovation spillovers
- **Wedge:** Social returns > Private returns → **undersupply of R&D** in laissez-faire

### Key Insight

$$\boxed{L_A^* \text{ determined by: } v \cdot \dot{A} = w L_A}$$

Policy implication: A subsidy to R&D (or patent extension) can correct the wedge and move the economy closer to the social optimum.

### Priority Questions

| # | Question | Difficulty | Why First |
|---|----------|-----------|-----------|
| **Q22** | Model structure + equilibrium $L_A$ via PV of profits | **A** | Core mechanism — Batch 47 & 48 |
| **Q31** | Socially optimal vs equilibrium $L_A$ (knowledge spillover wedge) | **C** | Welfare gap logic; answer from Q22 |

> **⚠ No pre-written answer yet.** Use Batch 47 Q6 and Batch 48 Q6 to write one.

---

## 🔷 Model 7: Real Business Cycle (RBC)

### What It Explains

RBC theory argues that **business cycles are the efficient response of the economy to real (productivity) shocks.** Recessions are periods of low productivity — not market failures. Government intervention to smooth cycles is counterproductive.

### Full Assumptions

1. **Representative household** maximises expected lifetime utility
2. **Technology shock** is the only source of fluctuations (no monetary, fiscal, or demand shocks)
3. **Perfectly flexible prices and wages** — no nominal rigidities
4. **Rational expectations**
5. **Complete markets** — no borrowing constraints
6. **Neoclassical production** with CRS and diminishing returns
7. **Technology follows AR(1):** $z_{t+1} = \phi z_t + \varepsilon_t$, $\varepsilon_t \sim \text{WN}(0, \sigma^2)$

### The Household Problem

**Objective:**

$$\max \mathbb{E}_0 \sum_{t=0}^{\infty} \beta^t \big[\ln c_t + v(1 - l_t)\big]$$

Where $l_t$ = labor supply (fraction of time working), $1-l_t$ = leisure.

**Budget constraint:**

$$c_t + k_{t+1} = w_t l_t + (1 + r_t - \delta) k_t$$

### Key FOCs

**Intratemporal (labor-leisure tradeoff):**

$$\frac{v'(1-l_t)}{u'(c_t)} = w_t$$

For log utility $u(c) = \ln c$ and $v(1-l) = \gamma \ln(1-l)$:

$$\frac{\gamma}{1-l_t} = \frac{w_t}{c_t}$$

**Interpretation:** The marginal rate of substitution between leisure and consumption equals the real wage. If the wage is high, the household works more (substitution effect).

**Intertemporal (consumption Euler):**

$$\frac{1}{c_t} = \beta \mathbb{E}_t \left[\frac{1}{c_{t+1}} (1 + r_{t+1} - \delta)\right]$$

### Short-Run vs Long-Run Labor Supply

| Horizon | What changes | Labor supply response | Intuition |
|---------|-------------|---------------------|-----------|
| **Short run** | Temporary wage change | **Substitution effect dominates** — $l_t \uparrow$ when $w_t \uparrow$ | High wage today → work more today, consume more leisure later |
| **Long run** | Permanent wage change | **Income effect cancels substitution** — $l_t$ unchanged | Higher permanent wage → work same amount, earn more |

**RBC calibration trick:** Parameter $\rho = \phi$ (discount rate = shock persistence) makes long-run labor supply independent of wage — a necessary condition for matching balanced growth.

### The Indivisible Labor Model (Hansen 1985)

**Problem:** Micro estimates show labor supply elasticity ≈ 0.2 (very inelastic). But aggregate hours fluctuate much more than this would predict.

**Hansen's solution:** Lotteries over employment states:
- Workers either work full-time ($h=1$) or not at all ($h=0$)
- They do not vary hours on the intensive margin (no part-time)
- The lottery creates a convexified utility frontier

**Result:** Aggregate labor supply elasticity → **∞** (horizontal at the reservation wage)
- Explains large employment fluctuations from small productivity shocks
- RBC can generate realistic output and hours volatility

### Impulse Response Functions (The Key Diagram)

```text
Output        Hours           Investment
  ▲            ▲                ▲
  │\           │\               │\
  │ \          │ \              │ \
  │  \         │  \             │  \
  │   \        │   \            │   \
  │    \       │    \           │    \
  │     \______│     \__________│     \________
  └─────────   └──────────      └───────────    Time
```

All variables **rise together** on impact of a positive technology shock, then decay back to steady state. This co-movement (output, hours, investment all ↑) is a key prediction — there is no negative co-movement like in NK models.

### Common Exam Pitfalls

| Mistake | Why It's Wrong |
|---------|---------------|
| Claiming RBC predicts monetary neutrality | It does, but the test is what nominal shocks do to real variables — RBC says nothing (not the same as neutrality) |
| Confusing RBC with New Keynesian | RBC says cycles are EFFICIENT; NK says cycles are INEFFICIENT due to nominal rigidities |
| Forgetting the indivisible labor model | Without it, RBC produces too little hours variation — Hansen (1985) is the key calibration fix |

### Priority Questions

| # | Question | Difficulty | Why First |
|---|----------|-----------|-----------|
| **Q23** | Household problem + log utility labor supply (short-run vs long-run) | **A** | Core RBC mechanism — Batch 47 & 48 |
| **Q30** | Hansen indivisible labor + elasticity comparison | **B** | Why RBC can explain big employment fluctuations |

> **⚠ No pre-written answer yet.** Use Batch 47 Q7 and Batch 48 Q7 to write one.

---

## 🔷 Model 8: New Keynesian (NK)

### What It Adds Over RBC

RBC assumes flexible prices — all fluctuations are efficient. NK adds **nominal rigidities** (sticky prices) so that:
- Recessions are **inefficient** — output is below the natural rate
- **Monetary policy can help** stabilise the economy
- There is a role for **active policy rules** (Taylor rule)

### Full Assumptions

1. **Monopolistic competition** in goods markets (firms set prices)
2. **Nominal rigidity:** Calvo (1983) pricing — only a random fraction of firms can reset prices each period
3. **Rational expectations**
4. **No capital** (simplest version)
5. **Log-linearised around steady state**
6. **Central bank follows an interest rate rule**

### The 3-Equation NK Model

**Equation 1 — NK IS Curve (Dynamic IS):**

$$\dot{x}_t = \sigma (r_t - \rho - r_t^n)$$

Where:
- $x_t$ = output gap ($y_t - y_t^n$)
- $r_t$ = real interest rate ($i_t - \pi_t$)
- $r_t^n$ = natural rate of interest (Wicksellian)
- $\sigma$ = intertemporal substitution elasticity (often $\sigma = 1$ for log)

**Intuition:** When the real rate is above the natural rate, households save more → output gap falls. The output gap is forward-looking.

**Equation 2 — NK Phillips Curve:**

$$\dot{\pi}_t = \rho \pi_t - \kappa x_t$$

**Derivation from Calvo pricing:**
- A fraction $1-\theta$ of firms reset prices each period
- Resetting firms choose price based on expected future marginal costs
- Aggregation gives the NKPC

**Intuition:** When output gap is positive (demand too high), inflation rises. The forward-looking term $\rho \pi_t$ captures expected future inflation.

**Divine Coincidence (Blanchard-Gali, 2007):**
In this basic NK model, stabilising inflation ($\pi_t = 0$) also stabilises the output gap ($x_t = 0$). **No trade-off** — central bank can achieve both goals with one instrument.

Divine coincidence **breaks** with:
- Cost-push shocks (wage markup, oil prices)
- Inefficient natural output
- Incomplete information

**Equation 3 — Taylor Rule (Monetary Policy):**

$$i_t = r_t^n + \pi^* + \phi_{\pi} (\pi_t - \pi^*) + \phi_x x_t$$

**Taylor Principle:** $\phi_{\pi} > 1$ — the central bank raises the real rate when inflation rises. If $\phi_{\pi} < 1$, the economy may experience indeterminacy (multiple equilibria).

### The Lucas Supply Curve

**The original (1973) formulation:**

$$y = y_n + \alpha(p - p^e) + \varepsilon$$

- Output deviates from natural only when prices **surprise** agents
- If everyone expects $p^e$ correctly, $y = y_n$ (vertical long-run aggregate supply)
- Only **unanticipated** monetary policy has real effects
- Anticipated policy is neutral — the Lucas critique

### The Three Policy Regimes

| Regime | $\phi_{\pi}$ | $\phi_x$ | Outcome |
|--------|-------------|---------|---------|
| **Active** (Taylor principle) | > 1 | > 0 | Unique stable equilibrium |
| **Passive** | < 1 | > 0 | Indeterminacy — sunspots possible |
| **Aggressive** | > 1 | > 0 (large) | Faster stabilisation but possible overshooting |

### Common Exam Pitfalls

| Mistake | Why It's Wrong |
|---------|---------------|
| Using old Keynesian Phillips curve ($\pi_t = \kappa x_t$) | NKPC is **forward-looking**: $\pi_t = \beta \mathbb{E}_t \pi_{t+1} + \kappa x_t$ |
| Claiming divine coincidence always holds | Only without cost-push shocks. Add a markup shock → trade-off reappears |
| Forgetting the Taylor principle | $\phi_{\pi} > 1$ is required for determinacy — this is tested in Batch 47 & 48 |
| Confusing $r_t^n$ (natural rate) with $r_t$ (actual rate) | The NK IS gap depends on the **difference** between them |

### Priority Questions

| # | Question | Difficulty | Why First |
|---|----------|-----------|-----------|
| **Q24** | IS-PC-Taylor rule (3-equation NK model in continuous time) | **A** | The core NK framework — Batch 47 & 48 |
| **Q25** | Lucas supply curve + role of rational expectations | **A** | Foundational — Batch 47 & 48 |

> **⚠ No pre-written answer yet.** Use Batch 47 Q8 and Batch 48 Q8 to write one.

---

## Cross-Model Comparison Table

| Feature | Solow | Ramsey | OLG | Endogenous | R&D Mono | RBC | NK |
|---------|-------|--------|-----|------------|----------|-----|----|
| **Time** | Continuous | Continuous | Discrete | Continuous | Continuous | Discrete | Continuous |
| **Saving** | Exogenous $s$ | Optimising HH | Young save | Exogenous $s$ | Monopoly profits | Optimising HH | Optimising HH |
| **Tech** | Exogenous $g$ | Exogenous $g$ | Exogenous $g$ | R&D eqn $\dot{A}$ | R&D eqn $\dot{A}$ | Stochastic | Stochastic |
| **Market structure** | Perfect comp. | Perfect comp. | Perfect comp. | Perfect comp. | Monopolistic | Perfect comp. | Monopolistic |
| **Cycles** | No cycles | No cycles | No cycles | No cycles | No cycles | Real shocks | Nominal rigidities |
| **Policy role** | Level effects only | Taxation affects $k^*$ | Pareto transfers | Level effects (semi) or growth effects (full) | R&D subsidy | None (efficient) | Stabilisation |
| **Key diagram** | $sf(k)$ vs $(n+g+\delta)k$ | $(\dot{c}=0,\dot{k}=0)$ phase | $k_{t+1}(k_t)$ 45° line | $(g_A, g_K)$ phase | Profit PV = R&D cost | Impulse responses | IS-PC-Taylor |
| **Efficiency** | $k^*$ may not be optimal | Always efficient (TVC) | Can be inefficient | Generally inefficient | Under-investment in R&D | Always efficient | Inefficient (sticky prices) |
| **Convergence speed** | $\lambda \approx 0.053$ | $\phi \approx 0.04$ | Similar to Solow | N/A (BGP) | N/A (BGP) | N/A (cycles) | N/A (cycles) |

---

## Suggested Study Sequence

| Order | Model | Hours | Key Output |
|-------|-------|-------|-----------|
| **1** | Solow + Golden Rule | 6 | Master $\dot{k}$, phase diagram, BGP rates, $s_{gold}=\alpha$ |
| **2** | Ramsey | 6 | Euler equation (4-step), phase diagram with saddle path, Modified GR |
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
