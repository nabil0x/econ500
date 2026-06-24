# Answers: Advanced Macroeconomics

## Exam-ready Revision Notes — Econ 501/502

> **Math convention:** All equations use LaTeX notation. GitHub renders them natively.
> Display equations use `$$ ... $$`, inline formulas use `$ ... $`.
> Questions drawn from Solow Growth Model, Ramsey-Cass-Koopmans Model, and Endogenous Growth & R&D Theory.
> Sources: Tutorials (MainQ.pdf pp. 3–4, 12), Batch 47 MSc 2022, Batch 48 MSc 2023.

---

# Section 1 — Solow Growth Model

---

### Question 1 {#q-solow-01}

**Why is the Solow model referred to as a neoclassical growth model? Derive the dynamic equation of capital per effective worker and explain the conditions under which the economy converges to a steady state. (6 marks)**

**Answer:**

> **Marking Guide [6 marks]:** Neoclassical features — CRS, Inada conditions, perfect competition, diminishing returns (2) | Derivation of $\dot{k}$ equation (2) | Steady-state condition $\dot{k}=0$ and convergence argument (2)
>
> ⭐ **High-Yield** — The Solow model is the benchmark growth model. The derivation of $\dot{k}=sf(k)-(n+g+\delta)k$ is the single most important algebraic result in growth economics.

**Neoclassical foundations:** The Solow model is called neoclassical because it builds on the core features of neoclassical economics:

1. **Constant returns to scale (CRS):** $F(\lambda K, \lambda AL) = \lambda F(K, AL)$ for all $\lambda > 0$ — doubling all inputs doubles output.
2. **Diminishing marginal returns:** $F_K > 0$, $F_{KK} < 0$, $F_L > 0$, $F_{LL} < 0$ — each additional unit of capital or labor yields smaller output gains.
3. **Inada conditions:** $\lim_{K \to 0} F_K = \infty$, $\lim_{K \to \infty} F_K = 0$ — ensures interior steady state.
4. **Perfect competition** with factor prices equal to marginal products: $r = F_K - \delta$, $w = F_L$.
5. **Exogenous saving rate** $s$ (a simplification relaxed in Ramsey).
6. **Exogenous technological progress** $g$ and population growth $n$.

**Derivation of capital per effective worker dynamics:**

Define capital per effective worker: $k(t) \equiv \frac{K(t)}{A(t)L(t)}$, and output per effective worker: $y(t) = f(k(t))$ where $f(k) = k^\alpha$ under Cobb-Douglas.

Starting from the capital accumulation identity:

$$\dot{K}(t) = sY(t) - \delta K(t)$$

Take logs and differentiate $k = K/(AL)$:

$$\ln k = \ln K - \ln A - \ln L$$
$$\frac{\dot{k}}{k} = \frac{\dot{K}}{K} - \frac{\dot{A}}{A} - \frac{\dot{L}}{L} = \frac{\dot{K}}{K} - g - n$$

Substitute $\dot{K}/K = (sY - \delta K)/K = sf(k)/k - \delta$:

$$\frac{\dot{k}}{k} = \frac{sf(k)}{k} - \delta - g - n$$

Multiply through by $k$:

$$\boxed{\dot{k}(t) = s f(k(t)) - (n + g + \delta) k(t)}$$

**Steady state and convergence:**

The steady state is defined by $\dot{k} = 0$, giving:

$$s f(k^*) = (n + g + \delta) k^*$$

For a Cobb-Douglas $f(k) = k^\alpha$:

$$k^* = \left( \frac{s}{n + g + \delta} \right)^{\frac{1}{1-\alpha}}$$

**Convergence:** The model converges to $k^*$ because:

- If $k < k^*$: $sf(k) > (n+g+\delta)k \implies \dot{k} > 0$ (capital deepening)
- If $k > k^*$: $sf(k) < (n+g+\delta)k \implies \dot{k} < 0$ (capital shallowing)

The Inada conditions guarantee $\dot{k}/k$ is negative for large $k$ and positive for small $k$, ensuring global stability of the steady state.

> **Exam Tip:** Draw the Solow diagram: $sf(k)$ curve and $(n+g+\delta)k$ ray intersecting at $k^*$. Label the region of positive/negative $\dot{k}$. Show that at $k^*$, all per-capita variables grow at $g$.

> **Professor's Corner:** The key distinction for an A-grade answer is explaining that the Solow model is neoclassical not just because of CRS but because it assumes all factors are paid their marginal products and there are no externalities. This contrasts directly with endogenous growth models where knowledge spillovers create market failures.
>
> → *See also: [Q2](#q-solow-02) (depreciation shock), [Q5](#q-solow-05) (conditional convergence), [Q16](#q-batch47-macro-01) (Batch 47 Solow assumptions)*

---

### Question 2 {#q-solow-02}

**Examine the transition process of capital per effective worker after a permanent decrease in the depreciation rate $\delta$. How would a decline in population growth rate due to demographic transition affect Bangladesh's steady-state capital per worker? (4 marks)**

**Answer:**

> **Marking Guide [4 marks]:** Phase-diagram analysis of $\delta \downarrow$ (2) | Bangladesh demographic transition mechanism (2)
>
> ⭐ **High-Yield** — Comparative statics in the Solow diagram are a standard exam question. Depreciation and population growth appear in the break-even line symmetrically.

**Permanent decrease in $\delta$:**

The break-even investment line is $(n+g+\delta)k$. A fall in $\delta$ rotates this line **downward** (clockwise), since the slope $n+g+\delta$ decreases.

**Transition dynamics:**

1. **Initial steady state** $k^*_1$: $sf(k) = (n+g+\delta_1)k$.
2. **At the moment of the shock** $(\delta \downarrow \text{ to } \delta_2)$: break-even investment shifts down to $(n+g+\delta_2)k$. Actual investment $sf(k)$ does not change instantly.
3. **New gap:** $sf(k^*_1) > (n+g+\delta_2)k^*_1 \implies \dot{k} > 0$.
4. **Transition:** $k$ rises gradually from $k^*_1$ toward $k^*_2$ (higher steady state). During transition, $y = f(k)$ and $c = (1-s)f(k)$ also rise.
5. **New steady state** $k^*_2 > k^*_1$: $\frac{\partial k^*}{\partial \delta} = -\frac{1}{1-\alpha} \frac{s^{1/(1-\alpha)}}{(n+g+\delta)^{\alpha/(1-\alpha)}} < 0$.

**Impact on $y$ and $c$:** Both per-effective-worker output and consumption are higher in the new steady state. The saving rate $s$ is unchanged, so $c$ rises in proportion to the increase in output.

**Bangladesh demographic transition:**

Bangladesh's fertility rate has declined from approximately 6.6 children per woman in 1975 to approximately 2.2 in 2023. This demographic transition implies a **decline in the population growth rate $n$**.

In the Solow model, a lower $n$ reduces break-even investment $(n+g+\delta)k$, shifting the break-even line downward. This raises steady-state capital per effective worker:

$$k^* = \left( \frac{s}{n+g+\delta} \right)^{\frac{1}{1-\alpha}} \quad \implies \quad \frac{\partial k^*}{\partial n} < 0$$

For Bangladesh, the demographic dividend means:

- Declining dependency ratio → higher potential saving $s$
- Slower labor force growth → higher $k^*$
- But actual outcomes depend on whether the increased saving materializes and is efficiently invested

| Variable | Pre-Transition | Post-Transition | Effect on $k^*$ |
|----------|---------------|----------------|-----------------|
| $n$ | ~2.5% | ~1.0% | ↑ |
| $k^*$ | Lower | Higher | ↑ steady state |
| $y^*$ | Lower | Higher | ↑ permanently |

> **Exam Tip:** Always draw the Solow diagram before and after the shock. Two lines: original $(n+g+\delta_1)k$ and new $(n+g+\delta_2)k$ showing the rotation. For Bangladesh, explicitly connect fertility decline → slower $n$ → higher $k^*$.

> **Professor's Corner:** The demographic transition in Bangladesh is one of the fastest in developing-country history. The Solow model predicts a permanent level effect on per-capita income from the decline in $n$. However, the empirical evidence (Bloom, Canning & Sevilla, 2003) suggests that the demographic dividend accounts for roughly one-third of East Asian growth — the rest comes from total factor productivity.
>
> → *See also: [Q5](#q-solow-05) (conditional convergence and developing countries), [Bangladesh Trade notes](../../503-Development/bangladesh-trade/README.md)*

---

### Question 3 {#q-solow-03}

**Use phase-diagram intuition to explain the adjustment path of capital per effective worker $k$, output per effective worker $y$, and consumption per effective worker $c$ during the transition to steady state. (4 marks)**

**Answer:**

> **Marking Guide [4 marks]:** Phase diagram of $\dot{k}=0$ (1) | Adjustment paths for $k$, $y$, $c$ over time (2) | Intuition for the simultaneous behavior (1)

The Solow model has a single state variable $k$ governed by:

$$\dot{k}(t) = sf(k(t)) - (n+g+\delta)k(t)$$

The phase diagram is one-dimensional: plot $\dot{k}$ on the vertical axis against $k$ on the horizontal axis.

**Phase diagram intuition:**

- $\dot{k} > 0$ for $k < k^*$ (vertical axis above zero)
- $\dot{k} < 0$ for $k > k^*$ (vertical axis below zero)
- $\dot{k} = 0$ at $k = k^*$ (intersection with horizontal axis)

**Adjustment paths (starting from $k(0) < k^*$):**

| Variable | Initial Level | Transition Behavior | Steady State |
|----------|---------------|-------------------|--------------|
| **$k$** | Low | Rises rapidly at first, then slows (concave path) | $k^*$ |
| **$y = f(k)$** | Low | Rises with $k$, but with diminishing increments (because $f'(k) < 0$) | $y^*$ |
| **$c = (1-s)f(k)$** | Low | Rises with $y$ (proportional to $y$ since $s$ is fixed) | $c^*$ |

**Key insight:** All three variables increase monotonically from below steady state. There is **no overshooting** because $s$ is constant — consumption is a fixed share of output at every point on the transition path.

The speed of convergence is measured by:

$$\lambda = \frac{\partial \dot{k}/k}{\partial \ln k} \bigg|_{k^*} = (1-\alpha)(n+g+\delta)$$

Under typical calibration ($\alpha = 1/3$, $n+g+\delta = 0.08$), $\lambda \approx 0.053$ per year, implying a half-life of $t_{1/2} = \ln 2 / \lambda \approx 13$ years.

> **Exam Tip:** Draw three time-series graphs side-by-side: $k(t)$, $y(t)$, $c(t)$ all rising monotonically toward their steady-state levels. The distinguishing feature from Ramsey is the absence of consumption smoothing jumps — $c$ simply tracks $y$ proportionally.

> **Professor's Corner:** The monotonic adjustment path is a special feature of the Solow model's exogenous saving rate. In models with optimizing households (Ramsey), consumption can jump discontinuously at the time of a shock and then follow a non-monotonic path. The contrast between Solow's $c$ tracking $y$ and Ramsey's $c$ smoothing is a standard exam comparison.
>
> → *See also: [Q7](#q-ramsey-01) (Ramsey phase diagram with $\dot{c}=0$ and $\dot{k}=0$ loci)*

---

### Question 4 {#q-solow-04}

**Suppose the economy initially operates at the Golden Rule level of capital. Examine how a permanent increase in the saving rate affects welfare over time. Is it possible for such a policy to improve long-run welfare? Justify analytically. (3 marks)**

**Answer:**

> **Marking Guide [3 marks]:** Definition of Golden Rule (1) | Transition path analysis starting from $k_{gold}$ (1) | Welfare analysis — short-run sacrifice vs long-run gain (1)
>
> ⭐ **High-Yield** — The Golden Rule is a core normative concept in macroeconomics. Understanding why $k_{gold}$ maximizes steady-state consumption is essential for policy evaluation.

**Golden Rule defined:** The Golden Rule level of capital $k_{gold}$ maximizes steady-state consumption per effective worker:

$$c^* = f(k^*) - (n+g+\delta)k^*$$

$$\frac{\partial c^*}{\partial k^*} = f'(k_{gold}) - (n+g+\delta) = 0 \implies f'(k_{gold}) = n+g+\delta$$

**Starting at $k_{gold}$:** If the economy is at the Golden Rule steady state and the saving rate $s$ increases permanently:

1. **At impact:** Investment rises from $s_{gold}f(k_{gold})$ to $s'f(k_{gold})$. Consumption per effective worker drops immediately from $c_{gold}$ to $c(0^+) < c_{gold}$. Welfare falls on impact.

2. **Transition:** With $k = k_{gold}$ initially, the higher saving rate means $\dot{k} = s'f(k) - (n+g+\delta)k > 0$. Capital accumulates toward the new, higher steady state $k^{**} > k_{gold}$.

3. **New steady state:** $k^{**} > k_{gold} \implies$ the economy is now **dynamically inefficient** (over-accumulated capital). Steady-state consumption $c^{**}$ is lower than $c_{gold}$ because:

   $$c^{**} = f(k^{**}) - (n+g+\delta)k^{**} < c_{gold}$$

   This follows because $c^*$ is maximized at $k_{gold}$ — any deviation reduces steady-state consumption.

**Welfare implications over time:**

| Phase | Consumption | Welfare |
|-------|------------|---------|
| Impact ($t=0$) | Drops sharply | Worsens |
| Transition ($0<t<\infty$) | Rises gradually from trough | Ambiguous |
| New steady state ($t\to\infty$) | Below $c_{gold}$ | Worse permanently |

**Conclusion:** A permanent increase in $s$ from the Golden Rule **cannot** improve long-run welfare. It reduces steady-state consumption permanently. Even with discounting, the initial sacrifice is never compensated by future gains because steady-state consumption is strictly lower.

> **Exam Tip:** The intuition is: Golden Rule is the *best possible* steady state for consumption. Any deviation reduces $c^*$. The only scenario where a saving increase could improve welfare is if $k < k_{gold}$ (below Golden Rule), in which case the transition cost may be worth the long-run gain.

> **Professor's Corner:** The formal proof uses the fact that $c^*(s)$ is a concave function of $s$, maximized at $s_{gold} = \alpha$ (for Cobb-Douglas). Starting from $s_{gold}$, a marginal increase in $s$ has zero first-order effect on $c^*$ (envelope theorem) but negative second-order effect. The initial drop in $c$ is a pure welfare loss with no compensating long-run gain.
>
> → *See also: [Q5](#q-solow-05) (saving and level effects), [Q17](#q-batch47-macro-02) (Golden Rule in Batch 47)*

---

### Question 5 {#q-solow-05}

**Critically evaluate the Solow model's prediction of conditional convergence. Discuss at least two reasons why empirical growth experiences of developing countries may deviate from this prediction. (3 marks)**

**Answer:**

> **Marking Guide [3 marks]:** Definition of conditional convergence (1) | Two reasons for deviation — e.g., institutions, human capital, structural change, openness (2)

**Conditional convergence defined:**

The Solow model predicts that a country grows faster the further it is below its own steady state, *controlling for the determinants of the steady state* (saving rate $s$, population growth $n$, technology growth $g$, depreciation $\delta$, and initial technology level $A(0)$). Formally:

$$g_{y_i} = \beta \cdot (\ln y_i^* - \ln y_i(0))$$

where $g_{y_i}$ is the growth rate, $\beta > 0$ is the speed of convergence, $y_i^*$ is the steady-state output per worker, and $y_i(0)$ is the initial level.

**Unconditional (absolute) convergence** — the idea that poor countries grow faster regardless of characteristics — is not supported empirically. **Conditional convergence** receives some support (Barro, 1991; Mankiw, Romer & Weil, 1992), but many developing countries deviate from the prediction.

**Reasons for deviation:**

**1. Differences in institutions and governance:**
- The Solow model treats $s$, $n$, and $g$ as exogenous parameters, but these are shaped by institutions (property rights, rule of law, corruption).
- Poor institutions lower the effective saving rate (capital flight, expropriation risk) and reduce total factor productivity.
- **Bangladesh example:** High trade-to-GDP ratio suggests openness, but tariff regimes, bureaucratic inefficiency, and infrastructure deficits keep the effective steady state low, slowing convergence.

**2. Human capital differences:**
- The basic Solow model includes only physical capital $K$ and raw labor $L$. Mankiw, Romer & Weil (1992) show that including human capital $H$ substantially improves the fit.
- Developing countries often have low human capital (education, health), which reduces the effective productivity of labor and lowers the steady state.
- **Bangladesh example:** Despite rapid GDP growth, Bangladesh's secondary enrollment rates and skill development lag behind comparator countries, constraining productivity growth.

**3. Structural change and sectoral reallocation:**
- The Solow model treats the economy as having a single production sector. Developing countries undergo structural transformation (agriculture → industry → services), during which growth patterns deviate from the model's steady-state logic.
- **Bangladesh example:** The rapid growth of the RMG sector since the 1980s represents a one-time structural shift, not a smooth convergence path.

**4. Resource curse and Dutch disease:**
- Countries with natural resource wealth (e.g., Venezuela, Nigeria) often grow slower due to governance failures, volatility, and real exchange rate appreciation.

> **Exam Tip:** Structure your answer as: (1) define conditional convergence precisely, (2) acknowledge the MRW (1992) evidence, (3) present 2-3 reasons for deviation with concrete examples. For full marks, link each reason to a real country example.

> **Professor's Corner:** The strongest critique of the Solow convergence prediction is that the model assumes all countries have the same technology level $A(t)$ and converge to the same steady state. In reality, technology gaps persist because of absorptive capacity constraints, and steady states differ dramatically across countries. The "convergence club" literature (Durlauf & Johnson, 1995) shows that countries cluster into multiple convergence groups.
>
> → *See also: [Q25](#q-batch48-macro-05) (convergence clubs), [Venezuela notes](../../503-Development/venezuela/README.md)*

---

### Question 6 {#q-solow-06}

**Derive steady-state $k^*$, $y^*$, and $c^*$ for a Cobb-Douglas production function. Show comparative statics for changes in $s$, $n$, and $\delta$. (3 marks)**

**Answer:**

> **Marking Guide [3 marks]:** Derivation of $k^*$ (1) | Derivation of $y^*$ and $c^*$ (1) | Comparative statics for $s$, $n$, $\delta$ (1)

**Cobb-Douglas production function:**

$$Y = K^\alpha (AL)^{1-\alpha}, \quad 0 < \alpha < 1$$

Per effective worker: $y = f(k) = k^\alpha$.

**Steady-state condition:** $\dot{k} = 0 \implies s k^\alpha = (n+g+\delta)k$.

**Derivation of $k^*$:**

$$s k^{*\alpha} = (n+g+\delta) k^*$$
$$k^{*\alpha-1} = \frac{n+g+\delta}{s}$$
$$k^* = \left( \frac{s}{n+g+\delta} \right)^{\frac{1}{1-\alpha}}$$

**Steady-state output:**

$$y^* = k^{*\alpha} = \left( \frac{s}{n+g+\delta} \right)^{\frac{\alpha}{1-\alpha}}$$

**Steady-state consumption:**

$$c^* = (1-s) y^* = (1-s) \left( \frac{s}{n+g+\delta} \right)^{\frac{\alpha}{1-\alpha}}$$

**Comparative statics:**

| Parameter Change | Effect on $k^*$ | Effect on $y^*$ | Effect on $c^*$ |
|-----------------|----------------|----------------|-----------------|
| $s \uparrow$ | Positive | Positive | Ambiguous (hump-shaped: $\uparrow$ for $s < \alpha$, $\downarrow$ for $s > \alpha$) |
| $n \uparrow$ | Negative | Negative | Negative |
| $\delta \uparrow$ | Negative | Negative | Negative |

**Elasticities:**

$$\varepsilon_{k^*, s} = \frac{\partial \ln k^*}{\partial \ln s} = \frac{1}{1-\alpha} > 0$$

$$\varepsilon_{k^*, n} = \frac{\partial \ln k^*}{\partial \ln n} = -\frac{1}{1-\alpha} \cdot \frac{n}{n+g+\delta} < 0$$

$$\varepsilon_{k^*, \delta} = \frac{\partial \ln k^*}{\partial \ln \delta} = -\frac{1}{1-\alpha} \cdot \frac{\delta}{n+g+\delta} < 0$$

Under standard calibration ($\alpha = 1/3$), $\varepsilon_{k^*, s} = 1.5$ — a 10% increase in the saving rate raises steady-state capital by 15%.

> **Exam Tip:** The hump-shaped relationship between $s$ and $c^*$ is crucial: $c^*$ rises with $s$ until $s = \alpha$ (Golden Rule), then falls. This is why "more saving is always better" is false.

> **Professor's Corner:** The comparative statics reveal the Solow model's central policy implication: policies that raise $s$ or lower $n$ and $\delta$ have permanent *level* effects on per-capita income but zero *growth* effects. This is the fundamental distinction between exogenous and endogenous growth models.
>
> → *See also: [Q12](#q-endogrowth-01) (endogenous growth: why level effects become growth effects), [Q16](#q-batch47-macro-01)*

---

# Section 2 — Ramsey-Cass-Koopmans Model

---

### Question 7 {#q-ramsey-01}

**Describe the differential equations governing $k$ and $c$ in the Ramsey-Cass-Koopmans model. Determine the $\dot{k}=0$ and $\dot{c}=0$ loci and illustrate the phase diagram. Interpret its properties. (10 marks)**

**Answer:**

> **Marking Guide [10 marks]:** Derivation of $\dot{k}$ equation (2) | Derivation of $\dot{c}$ equation (Euler) (3) | $\dot{k}=0$ locus (2) | $\dot{c}=0$ locus (1) | Phase diagram with saddle path (2)
>
> ⭐ **High-Yield** — The Ramsey phase diagram is the central analytical tool of intertemporal macroeconomics. Mastering its derivation, interpretation, and comparative statics is essential for any growth theory exam.

**Model setup:**

Representative household maximizes:
$$U = \int_0^\infty e^{-\rho t} \frac{c(t)^{1-\theta} - 1}{1-\theta} \cdot \frac{L(t)}{H} \, dt$$

where $\rho$ is the discount rate, $\theta$ is the coefficient of relative risk aversion, $L(t)/H$ is household size. The real interest rate is $r(t) = f'(k(t))$.

**Differential equation for $k$ (capital per effective worker):**

As in Solow, but with endogenous consumption:

$$\dot{k}(t) = f(k(t)) - c(t) - (n+g+\delta)k(t)$$

where $c(t)$ is consumption per effective worker. Unlike Solow, there is no fixed $s$ — consumption is chosen optimally.

**Differential equation for $c$ (Euler equation):**

From the household's optimization (Hamiltonian):

$$\mathcal{H} = e^{-(\rho-n)t} \frac{c^{1-\theta} - 1}{1-\theta} + \lambda [f(k) - c - (n+g+\delta)k]$$

First-order conditions yield the Euler equation:

$$\frac{\dot{c}(t)}{c(t)} = \frac{1}{\theta} \left( f'(k(t)) - \rho - \theta g \right)$$

In per-effective-worker terms (accounting for $g$):

$$\boxed{\frac{\dot{c}(t)}{c(t)} = \frac{1}{\theta} \left( f'(k(t)) - \rho - \theta g - \delta \right)}$$

**The $\dot{k}=0$ locus:**

Setting $\dot{k}=0$: $c = f(k) - (n+g+\delta)k$.

This is a concave function in $k$ (same shape as the Solow steady-state consumption locus). It peaks at the Golden Rule $k_{gold}$ where $f'(k_{gold}) = n+g+\delta$.

Points below $\dot{k}=0$: $\dot{k} > 0$ (capital deepening, since $c$ is lower than break-even).
Points above $\dot{k}=0$: $\dot{k} < 0$ (capital shallowing).

**The $\dot{c}=0$ locus:**

Setting $\dot{c}=0$: $f'(k) = \rho + \theta g + \delta$.

This determines a vertical line at $k^*$ because the RHS is constant. The value of $k$ satisfying this is:

$$f'(k^*) = \rho + \theta g + \delta$$

For Cobb-Douglas $f(k) = k^\alpha$:

$$\alpha k^{*\alpha-1} = \rho + \theta g + \delta$$
$$k^* = \left( \frac{\alpha}{\rho + \theta g + \delta} \right)^{\frac{1}{1-\alpha}}$$

Left of $\dot{c}=0$: $f'(k) > \rho + \theta g + \delta \implies \dot{c} > 0$ (high $MPK$ encourages saving → consumption growth).
Right of $\dot{c}=0$: $f'(k) < \rho + \theta g + \delta \implies \dot{c} < 0$ (low $MPK$ discourages saving → consumption decline).

**Phase diagram:**

| Region | $\dot{k}$ | $\dot{c}$ | Direction |
|--------|-----------|-----------|-----------|
| NW (low $k$, high $c$) | $-$ (above $\dot{k}=0$) | $+$ (left of $\dot{c}=0$) | ← ↑ |
| NE (high $k$, high $c$) | $-$ (above $\dot{k}=0$) | $-$ (right of $\dot{c}=0$) | ← ↓ |
| SW (low $k$, low $c$) | $+$ (below $\dot{k}=0$) | $+$ (left of $\dot{c}=0$) | → ↑ |
| SE (high $k$, low $c$) | $+$ (below $\dot{k}=0$) | $-$ (right of $\dot{c}=0$) | → ↓ |

**Saddle-path stability:**

The steady state $(k^*, c^*)$ is a saddle point. There is a unique one-dimensional stable manifold (the saddle path) converging to steady state. For any initial $k(0)$, consumption must jump to the saddle path $c(0) = c_{sp}(k(0))$.

- If $c(0)$ is too high: trajectory hits $c=0$ axis (infeasible)
- If $c(0)$ is too low: trajectory converges to $k_{gold}$ with $\dot{c}=0$ but $k > k^*$ (also violates transversality)
- The unique saddle path ensures determinacy

> **Exam Tip:** Draw the phase diagram carefully. The $\dot{c}=0$ locus is vertical. The $\dot{k}=0$ locus is hump-shaped (inverted U). Label the four directional quadrants. Show the saddle path as the unique convergent trajectory. Mark $k_{gold}$ where $\dot{k}=0$ peaks, and $k^*$ where $\dot{c}=0$ intersects.

> **Professor's Corner:** Note that $k^* < k_{gold}$ in the Ramsey model (for $\rho > 0$). The representative household discounts future utility, so it accumulates less capital than the Golden Rule prescribes. The difference $k_{gold} - k^*$ is a measure of "impatience-driven under-accumulation."
>
> → *See also: [Q8](#q-ramsey-02) (socially optimal vs Golden Rule), [Q10](#q-ramsey-04) (government spending shocks), [Q18](#q-batch47-macro-03) (Batch 47 Ramsey)*

---

### Question 8 {#q-ramsey-02}

**Briefly explain the socially optimal level of capital and the Golden Rule level of capital. How do they differ? (2 marks)**

**Answer:**

> **Marking Guide [2 marks]:** Golden Rule definition (1) | Socially optimal (Modified Golden Rule) in Ramsey model (1)

**Golden Rule level of capital ($k_{gold}$):**

Maximizes steady-state consumption per effective worker:

$$c^* = f(k) - (n+g+\delta)k$$

$$\text{FOC: } f'(k_{gold}) = n + g + \delta$$

At $k_{gold}$, the marginal product of capital exactly offsets the effective depreciation rate. This is the maximum sustainable consumption level.

**Socially optimal level in Ramsey model ($k^*$):**

The decentralized Ramsey equilibrium satisfies the Modified Golden Rule:

$$f'(k^*) = \rho + \theta g + \delta$$

This differs from $k_{gold}$ because the household discounts future utility at rate $\rho$ (impatience) and smooths consumption with intertemporal elasticity $1/\theta$.

**Comparison:**

| Criterion | Golden Rule $k_{gold}$ | Ramsey Social Optimum $k^*$ |
|-----------|----------------------|---------------------------|
| Maximizes | Steady-state $c$ | Household utility $U$ |
| Condition | $f'(k) = n+g+\delta$ | $f'(k) = \rho + \theta g + \delta$ |
| Relative size | Higher | Lower (for $\rho > 0$) |
| Dynamic efficiency | Not always efficient | Always efficient |
| Decentralized? | No (requires $s = s_{gold}$) | Yes (competitive equilibrium) |

**Key insight:** $k_{gold}$ is purely technological — it does not depend on preferences. $k^*$ depends on $\rho$ and $\theta$, reflecting the household's time preference and risk aversion. For $\rho > 0$, $k^* < k_{gold}$, meaning the decentralized economy under-accumulates capital relative to the consumption-maximizing level.

> **Exam Tip:** This is a short-answer question (2 marks). State the two conditions clearly and note the one-sentence comparison: $k^* < k_{gold}$ when $\rho > 0$ because households discount the future.

> **Professor's Corner:** Some textbooks call $k^*$ the "Modified Golden Rule." The central normative implication is that the decentralized equilibrium is *constrained Pareto optimal* — there is no market failure to correct, even though $k^* < k_{gold}$.
>
> → *See also: [Q7](#q-ramsey-01) (phase diagram showing $k^*$ vs $k_{gold}$), [Q18](#q-batch47-macro-03)*

---

### Question 9 {#q-ramsey-03}

**Estimate the speed of adjustment in the Ramsey model via Taylor approximation. Determine the value of $\phi$ (the speed of adjustment) and explain why it differs from the Solow model. (8 marks)**

**Answer:**

> **Marking Guide [8 marks]:** Linearization of system around steady state (3) | Derivation of eigenvalue $\mu$ (2) | Numerical value of $\phi$ (1) | Comparison with Solow (2)
>
> ⭐ **High-Yield** — The speed of convergence distinguishes Solow from Ramsey quantitatively. Ramsey converges slower because optimizing households smooth consumption rather than adjusting investment fully.

**Linearization of the Ramsey system:**

The two-equation system is:

$$\dot{k} = f(k) - c - (n+g+\delta)k$$
$$\frac{\dot{c}}{c} = \frac{1}{\theta} (f'(k) - \rho - \theta g - \delta)$$

Take first-order Taylor expansion around $(k^*, c^*)$:

$$\begin{pmatrix} \dot{k} \\ \dot{c} \end{pmatrix} = \begin{pmatrix} 
f'(k^*) - (n+g+\delta) & -1 \\
\frac{c^*}{\theta} f''(k^*) & 0
\end{pmatrix} \begin{pmatrix} k - k^* \\ c - c^* \end{pmatrix}$$

Using the steady-state conditions $f'(k^*) = \rho + \theta g + \delta$ and $f(k^*) - c^* = (n+g+\delta)k^*$:

Let $a_{11} = \rho + \theta g + \delta - (n+g+\delta) = \rho - n + (\theta - 1)g$ (can be positive or negative).
Let $a_{21} = \frac{c^*}{\theta} f''(k^*)$ (negative since $f''(k^*) < 0$).
Let $a_{12} = -1$.
Let $a_{22} = 0$.

The Jacobian matrix $J$ has trace $Tr(J) = a_{11}$ and determinant $Det(J) = a_{21} > 0$ (since $a_{21} < 0$ and $a_{12} = -1$, the product $-a_{21}$ is positive).

**Eigenvalues:**

The characteristic equation is $\lambda^2 - (Tr)\lambda + Det = 0$.

The eigenvalues are:

$$\lambda_1 = \frac{Tr - \sqrt{Tr^2 - 4Det}}{2} < 0$$
$$\lambda_2 = \frac{Tr + \sqrt{Tr^2 - 4Det}}{2} > 0$$

One negative (stable) and one positive (unstable) eigenvalue, confirming saddle-path stability.

**Speed of adjustment $\phi$:**

The speed of convergence is the absolute value of the negative eigenvalue, $\phi = -\lambda_1$.

Under standard parameterization ($\alpha = 1/3$, $\rho = 0.02$, $\theta = 1$, $g = 0.02$, $n = 0.01$, $\delta = 0.05$):

The negative eigenvalue can be approximated as:

$$\phi \approx \frac{1}{2} \left[ \sqrt{ \left( \rho - n + (\theta-1)g \right)^2 + 4 \cdot \frac{c^*}{\theta} (-f''(k^*)) } - \left( \rho - n + (\theta-1)g \right) \right]$$

For Cobb-Douglas, $f(k)=k^\alpha$, $f''(k) = \alpha(\alpha-1)k^{\alpha-2}$, and at steady state:

$$\frac{c^*}{k^*} = \frac{f(k^*) - (n+g+\delta)k^*}{k^*} = \frac{k^{*\alpha-1} - (n+g+\delta)}{k^{*0}} = \cdots$$

After substitution, a commonly used closed-form approximation is:

$$\phi_{ramsey} \approx \frac{1}{2} \left[ \sqrt{(\rho + \theta g + \delta - (n+g+\delta))^2 + \frac{4(1-\alpha)(\rho + \theta g + \delta)(n+g+\delta + (\rho + \theta g + \delta)/\theta)}{\alpha}} - (...) \right]$$

A simpler and widely-cited approximation (Barro & Sala-i-Martin, 2004) is:

$$\phi_{ramsey} \approx \frac{1}{2} \left( \rho - n + (\theta-1)g + \sqrt{(\rho - n + (\theta-1)g)^2 + \frac{4(1-\alpha)(n+g+\delta)(\rho + \theta g + \delta)}{\theta \alpha}} \right)$$

Using $\alpha = 1/3$, $\rho = 0.02$, $\theta = 1$, $g = 0.02$, $n = 0.01$, $\delta = 0.05$:

$$\phi_{ramsey} \approx 0.035 \text{ to } 0.045 \text{ per year}$$

| Model | Convergence Speed $\phi$ | Half-Life |
|-------|------------------------|-----------|
| **Solow** | $(1-\alpha)(n+g+\delta) \approx 0.053$ | ~13 years |
| **Ramsey** | $\approx 0.04$ | ~17 years |

**Why Ramsey converges slower than Solow:**

In the **Solow model**, the saving rate $s$ is fixed. When $k$ is below steady state, actual investment $sf(k)$ responds fully to the gap between actual and steady-state capital. The entire adjustment burden falls on capital accumulation.

In the **Ramsey model**, households optimize intertemporally. When $k$ is below steady state:
- The marginal product of capital $f'(k)$ is high, encouraging saving.
- But households smooth consumption — they increase consumption gradually rather than cutting it sharply to accumulate capital quickly.
- Consumption can rise (or fall) along the transition path, dampening the investment response relative to Solow.

The difference arises because the Ramsey model has an **endogenous saving rate** that adjusts to smooth consumption, while Solow imposes a constant $s$. The Ramsey model's additional margin (consumption smoothing) slows convergence.

> **Exam Tip:** For an 8-mark question, derive the linearized system explicitly and state both eigenvalues. The exact numerical value of $\phi$ is less important than showing how it depends on parameters ($\alpha$, $\rho$, $\theta$, $n$, $g$, $\delta$). Always compare with Solow.

> **Professor's Corner:** The quantitative difference in convergence speeds (4% vs 5.3% per year) is large enough that it can be tested empirically. Caselli, Esquivel & Lefort (1996) estimate convergence rates around 4-5% per year, consistent with both models under plausible parameters. However, Islam (1995) finds rates closer to 5-6% using panel data, somewhat favoring the Solow calibration.
>
> → *See also: [Q7](#q-ramsey-01) (phase diagram), [Q6](#q-solow-06) (Solow comparative statics)*

---

### Question 10 {#q-ramsey-04}

**Consider a closed economy where the government permanently raises government spending financed through lump-sum taxation. Explain how the phase diagram for capital and consumption changes. Analyze whether a temporary increase in government purchases can have different welfare implications compared to a permanent increase. (6 marks)**

**Answer:**

> **Marking Guide [6 marks]:** Permanent spending shock — phase diagram shifts (3) | Temporary vs permanent welfare (3)

**Permanent increase in government spending ($G$):**

Government spending $g(t)$ per effective worker is financed by lump-sum taxes. The resource constraint becomes:

$$\dot{k}(t) = f(k(t)) - c(t) - G - (n+g+\delta)k(t)$$

where $G$ is government consumption per effective worker (assumed to provide no direct utility).

**Phase diagram changes:**

1. **$\dot{k}=0$ locus shifts downward:** The new locus is $c = f(k) - G - (n+g+\delta)k$. Since $G > 0$, the vertical intercept falls by $G$. The shape remains concave, and $k_{gold}$ is unchanged (since $f'(k_{gold}) = n+g+\delta$ is unaffected).

2. **$\dot{c}=0$ locus unchanged:** The Euler equation $\dot{c}/c = (1/\theta)(f'(k) - \rho - \theta g - \delta)$ does not involve $G$. The $\dot{c}=0$ locus remains at the same $k^*$.

3. **New steady state:** $k^*$ unchanged, $c^*$ falls by exactly $G$: $c^*_{new} = c^*_{old} - G$.

4. **Transition:** Since $k^*$ is unchanged, the saddle path shifts downward. Consumption jumps immediately to the new saddle path (a downward jump at $t=0$). Over time, $k$ and $c$ converge to the same $k^*$ but lower $c^*$.

**Welfare implications:**

- **Permanent $G \uparrow$:** Consumption falls permanently by $G$. Welfare declines by the present discounted value of the consumption loss $\int_0^\infty e^{-\rho t} u'(c) G \, dt$. There is no possibility of recovery because the long-run capital stock is unchanged.

**Temporary increase in government spending:**

If $G$ rises temporarily (period $[0, T]$) and returns to the original level thereafter:

1. **At impact:** $\dot{k}=0$ locus shifts down for $t \in [0,T]$. Consumption jumps down (but less than the permanent case).
2. **During $[0,T]$:** $c$ is below the original saddle path. Capital accumulates because consumption was cut. The economy moves along a trajectory with rising $c$ and $k$.
3. **After $t=T$:** $G$ returns to original. The economy is now on a trajectory that approaches the original steady state from below. Consumption and capital continue rising toward the original steady state.

**Comparison of welfare:**

| Shock Type | Impact on $c$ | Long-run $c$ | Welfare Loss |
|------------|--------------|--------------|-------------|
| Permanent $G \uparrow$ | Large downward jump | Permanently lower | Large, permanent |
| Temporary $G \uparrow$ | Smaller downward jump | Fully recovers | Smaller, temporary |

**Key insight:** The permanent spending shock has a pure **level effect** — it reduces consumption permanently with no change in the long-run capital stock. The temporary shock allows consumption to recover fully once $G$ returns to normal. Lump-sum taxation means there is no distortionary effect on the Euler equation in either case.

> **Exam Tip:** For the phase diagram, draw the original and new $\dot{k}=0$ loci. Show the instantaneous downward jump of $c(0)$ to the new saddle path. Contrast this with the Solow model where $c$ would not jump (it adjusts gradually).

> **Professor's Corner:** Under distortionary taxation (e.g., capital income tax), the $\dot{c}=0$ locus would also shift because the after-tax return to capital changes. This is a common extension question. The Ricardian equivalence property (Barro, 1974) means that debt-financed vs tax-financed government spending has identical effects under lump-sum taxation with rational households.
>
> → *See also: [Q7](#q-ramsey-01) (baseline phase diagram), [Q19](#q-batch47-macro-04) (government policy in growth models)*

---

### Question 11 {#q-ramsey-05}

**Derive the Euler equation for consumption in the Ramsey-Cass-Koopmans model. Explain how $\rho$ (discount rate) and $\theta$ (CRRA coefficient) affect savings behavior. (4 marks)**

**Answer:**

> **Marking Guide [4 marks]:** Derivation of Euler equation via Hamiltonian (2) | Interpretation of $\rho$ effect (1) | Interpretation of $\theta$ effect (1)
>
> ⭐ **High-Yield** — The Euler equation is the core behavioral equation in intertemporal macroeconomics. It appears in Ramsey, OLG, RBC, and New Keynesian models.

**Derivation:**

Set up the present-value Hamiltonian for the representative household:

$$\mathcal{H} = \frac{c(t)^{1-\theta} - 1}{1-\theta} e^{-(\rho-n)t} + \lambda(t) [f(k(t)) - c(t) - (n+g+\delta)k(t)]$$

First-order conditions:

1. $\frac{\partial \mathcal{H}}{\partial c} = 0$: $c(t)^{-\theta} e^{-(\rho-n)t} = \lambda(t)$
2. $\frac{\partial \mathcal{H}}{\partial k} = -\dot{\lambda}$: $\lambda(t)[f'(k(t)) - (n+g+\delta)] = -\dot{\lambda}(t)$
3. Transversality: $\lim_{t\to\infty} \lambda(t) k(t) = 0$

From (1): $\ln \lambda(t) = -\theta \ln c(t) - (\rho-n)t$
Differentiate wrt $t$: $\frac{\dot{\lambda}}{\lambda} = -\theta \frac{\dot{c}}{c} - (\rho - n)$

From (2): $\frac{\dot{\lambda}}{\lambda} = -[f'(k) - (n+g+\delta)]$

Equate:

$$-\theta \frac{\dot{c}}{c} - (\rho - n) = -[f'(k) - (n+g+\delta)]$$

Solve for $\dot{c}/c$:

$$\boxed{\frac{\dot{c}(t)}{c(t)} = \frac{1}{\theta} \left( f'(k(t)) - \rho - \theta g - \delta \right)}$$

**Interpretation — the Euler equation states:**

- If $f'(k) > \rho + \theta g + \delta$ (return to capital exceeds the effective discount rate), consumption grows over time — households defer consumption to the future.
- If $f'(k) < \rho + \theta g + \delta$, consumption declines — households consume more now.
- At steady state $\dot{c}=0$: $f'(k^*) = \rho + \theta g + \delta$.

**Role of $\rho$ (discount rate):**

- Higher $\rho$ means households are more impatient — they discount future utility more heavily.
- A higher $\rho$ shifts the $\dot{c}=0$ locus leftward (lower $k^*$).
- Impatient households accumulate less capital and consume more today.
- Formally: $\frac{\partial k^*}{\partial \rho} = -\frac{1}{1-\alpha} \frac{k^*}{\rho + \theta g + \delta} < 0$.

**Role of $\theta$ (CRRA coefficient):**

- $\theta$ measures the curvature of the utility function. $1/\theta$ is the intertemporal elasticity of substitution (IES).
- Higher $\theta$ means households are less willing to substitute consumption intertemporally (more consumption smoothing).
- A higher $\theta$ reduces the responsiveness of consumption growth to interest rate differentials — $\dot{c}/c$ is smaller for any given gap between $f'(k)$ and $\rho + \theta g + \delta$.
- Formally: $\frac{\partial (\dot{c}/c)}{\partial (f'(k))} = 1/\theta$. A higher $\theta$ flattens the consumption growth response.

| Parameter | Higher value means... | Effect on $k^*$ | Effect on $\dot{c}/c$ response |
|-----------|---------------------|-----------------|-------------------------------|
| $\rho \uparrow$ | More impatience | Lower $k^*$ | Stronger negative level shift |
| $\theta \uparrow$ | Stronger risk aversion / lower IES | Lower $k^*$ (since $\theta g$ term) | Muted response to rate gaps |

> **Exam Tip:** For a derivation question, always write the Hamiltonian first, then the FOCs, then eliminate $\lambda$. Memorize the final Euler form — it appears in every intertemporal model.

> **Professor's Corner:** The Euler equation is sometimes written as $\frac{\dot{c}}{c} = \frac{r - \rho - \theta g}{\theta}$ where $r = f'(k) - \delta$ is the real interest rate. The term $-\theta g$ adjusts for trend growth in technology. Without growth ($g=0$), the familiar form $\dot{c}/c = (r-\rho)/\theta$ emerges.
>
> → *See also: [Q7](#q-ramsey-01) (Euler equation in the phase diagram), [Q21](#q-batch48-macro-03) (Batch 48 Euler equation)*

---

# Section 3 — Endogenous Growth & R&D

---

### Question 12 {#q-endogrowth-01}

**Critically explain the role of $a^L$ (the labor force used in the R&D sector) for the dynamics of knowledge accumulation, without considering capital. Is there any long-run growth effect from a change in $a^L$? (6 marks)**

**Answer:**

> **Marking Guide [6 marks]:** Basic R&D equation with $a^L$ (1) | Dynamics of $g_A$ without capital (2) | Long-run growth effect analysis (2) | Semi-endogenous vs fully endogenous distinction (1)
>
> ⭐ **High-Yield** — The distinction between level effects and growth effects of R&D labor is central to endogenous growth theory.

**Basic R&D setup (without capital):**

Knowledge accumulates according to:

$$\dot{A}(t) = B [a^L L(t)]^\gamma A(t)^\phi$$

where:
- $a^L$: fraction of labor force in R&D
- $L(t)$: total labor force, growing at $n$
- $\gamma$: elasticity of R&D output with respect to R&D labor
- $\phi$: elasticity of R&D output with respect to existing knowledge (spillovers/standing on shoulders)
- $B$: efficiency parameter

**Dynamics of knowledge accumulation:**

Divide both sides by $A(t)$ to get the growth rate of knowledge $g_A = \dot{A}/A$:

$$g_A(t) = \frac{\dot{A}}{A} = B [a^L L(t)]^\gamma A(t)^{\phi-1}$$

Taking logs and differentiating with respect to time:

$$\frac{\dot{g}_A}{g_A} = \gamma n + (\phi-1)g_A$$

This is the key dynamic equation. The growth rate of $g_A$ depends on:
- Population growth $n$ (with weight $\gamma$)
- The current growth rate $g_A$ itself (with weight $\phi-1$, which is negative if $\phi < 1$)

**Steady-state analysis:**

At steady state, $\dot{g}_A = 0$:

$$0 = \gamma n + (\phi-1)g_A^*$$

$$g_A^* = \frac{\gamma n}{1-\phi}$$

The steady-state growth rate of knowledge is **determined entirely by population growth $n$** and the parameters $\gamma$ and $\phi$.

**Effect of a change in $a^L$:**

A permanent increase in $a^L$ (more labor allocated to R&D):

1. **Impact effect:** $g_A$ jumps up immediately because $\dot{A} = B(a^L L)^\gamma A^\phi$ increases with $a^L$.
2. **Transition:** $\dot{g}_A/g_A = \gamma n + (\phi-1)g_A$. At the higher $g_A$, if $\phi < 1$, $(\phi-1)g_A$ becomes more negative, so $\dot{g}_A$ becomes negative — $g_A$ begins falling.
3. **Long-run:** $g_A$ returns to $g_A^* = \gamma n/(1-\phi)$, which is **independent of $a^L$**.

**Conclusion:** A change in $a^L$ has a **level effect** on knowledge $A$ (permanently higher path) but **no long-run growth effect** — the steady-state growth rate of knowledge depends only on $n$, $\gamma$, and $\phi$.

**Intuition:** A one-time increase in R&D labor raises the level of knowledge permanently (the stock is higher), but the *rate* at which knowledge grows in the long run is pinned down by the rate at which new researchers enter the economy ($n$). Without population growth ($n=0$), $g_A^* = 0$ when $\phi < 1$.

> **Exam Tip:** For a 6-mark question, structure your answer as: (1) the equation for $\dot{A}$, (2) derive $g_A$, (3) steady-state condition $\dot{g}_A=0$, (4) comparative static for $a^L$, (5) level effect vs growth effect conclusion.

> **Professor's Corner:** This result — that R&D labor allocation has level effects but not growth effects — is known as **semi-endogenous growth** (Jones, 1995). It challenged the earlier fully endogenous models (Romer, 1990) which assumed $\phi = 1$, making $g_A$ depend on $a^L$ even in the long run. Jones showed that time-series evidence is consistent with $\phi < 1$, resolving the "scale effect" problem.
>
> → *See also: [Q13](#q-endogrowth-02) (R&D model with capital), [Q14](#q-endogrowth-03) (semi-endogenous vs fully endogenous)*

---

### Question 13 {#q-endogrowth-02}

**Assume $\beta + \theta < 1$ and $n > 0$, and the economy is on its balanced growth path. Describe how each of the following changes affects the $\dot{g}_A = 0$ and $\dot{g}_K = 0$ lines and the position of the economy in $(g_A, g_K)$ space: (i) An increase in $n$; (ii) A decrease in $a^K$ (capital share in R&D). (6 marks)**

**Answer:**

> **Marking Guide [6 marks]:** Setup of the two-equation system (2) | Effect of $n \uparrow$ on both loci (2) | Effect of $a^K \downarrow$ on both loci (2)

**Two-equation system for $(g_A, g_K)$:**

The full R&D model with both capital and knowledge gives two dynamic equations:

**Knowledge accumulation:**
$$\dot{A} = B (a^K K)^\beta (a^L L)^\theta A^\phi$$

Converting to growth rates:

$$\frac{\dot{g}_A}{g_A} = \theta n + \beta g_K + (\phi - 1) g_A$$

The $\dot{g}_A = 0$ locus:
$$\beta g_K = (1-\phi) g_A - \theta n$$

**Capital accumulation:**
$$\dot{K} = s_K Y - \delta K$$

With output $Y = [(1-a^K)K]^\alpha [A(1-a^L)L]^{1-\alpha}$, the growth rate of capital is:

$$\frac{\dot{g}_K}{g_K} = \theta n + \beta g_K + (\phi - 1) g_A$$

Wait — let me reconsider. The standard formulation for the R&D-based growth model (Jones, 1995; Romer, 1990) with both capital and knowledge has:

For the knowledge equation:
$$g_A = \frac{\dot{A}}{A} = B (a^K K)^\beta (a^L L)^\theta A^{\phi-1}$$

In growth rates:
$$\frac{\dot{g}_A}{g_A} = \beta g_K + \theta n + (\phi - 1)g_A$$

For the capital equation, using $Y = [(1-a^K)K]^\alpha [A(1-a^L)L]^{1-\alpha}$:

$$\frac{\dot{g}_K}{g_K} = \frac{\dot{Y}}{Y} - \frac{\dot{K}}{K} + ...$$

After derivation, the $\dot{g}_K = 0$ locus is typically:

$$\frac{\dot{g}_K}{g_K} = \frac{(1-\alpha)(g_A + n)}{g_K} - \text{terms involving shares}$$

A cleaner and more standard presentation from Jones (1995) gives the two loci:

**$\dot{g}_A = 0$ locus:** $$\beta g_K = (1-\phi)g_A - \theta n$$

**$\dot{g}_K = 0$ locus:** $$g_K = g_A + n$$

The second condition comes from the balanced growth path requirement that $K$ and $Y$ grow at the same rate, and $Y$ grows at $g_A + n$.

Let me use this well-known formulation.

**(i) Increase in $n$:**

**Effect on $\dot{g}_A = 0$ line:**
The $\dot{g}_A = 0$ locus is $\beta g_K = (1-\phi)g_A - \theta n$. An increase in $n$ makes the intercept $- \theta n$ more negative. The line shifts **downward** (or rightward) — for any $g_A$, the required $g_K$ to keep $\dot{g}_A = 0$ is lower.

**Effect on $\dot{g}_K = 0$ line:**
The $\dot{g}_K = 0$ locus is $g_K = g_A + n$. An increase in $n$ shifts this line **upward** — for any $g_A$, the required $g_K$ increases.

**New steady state:**
- $\dot{g}_A = 0$ shifts down: $g_K$ required for each $g_A$ falls.
- $\dot{g}_K = 0$ shifts up: $g_K$ required for each $g_A$ rises.
- The new intersection has a **higher** $g_A^*$ and ambiguous change in $g_K^*$ (typically higher).

Solve for the steady state:
$$g_K = g_A + n$$
$$\beta(g_A + n) = (1-\phi)g_A - \theta n$$
$$(\beta - (1-\phi))g_A = -\theta n - \beta n$$
$$g_A^* = \frac{-\theta n - \beta n}{\beta + \phi - 1} = \frac{(\theta + \beta)n}{1 - \phi - \beta} \text{ (since denominator } \beta + \phi - 1 < 0)$$

With $\beta + \theta < 1$ (given), $1 - \phi - \beta > 0$, so:

$$g_A^* = \frac{\theta + \beta}{1 - \phi - \beta} \cdot n$$

Thus $\partial g_A^*/\partial n > 0$.

**(ii) Decrease in $a^K$ (capital share in R&D):**

**Effect on $\dot{g}_A = 0$ line:**
The slope of $\dot{g}_A = 0$ is $(1-\phi)/\beta$. A fall in $a^K$ (i.e., a fall in $\beta$, the elasticity of R&D with respect to capital) **increases** the slope $(1-\phi)/\beta$ — the line becomes steeper. The intercept $-\theta n/\beta$ also changes (becomes more negative if $\beta$ falls).

**Effect on $\dot{g}_K = 0$ line:**
The $\dot{g}_K = 0$ locus $g_K = g_A + n$ is **unaffected** by $a^K$ — it depends only on the balanced growth condition, not on the R&D capital share.

**New steady state:**
- $\dot{g}_A = 0$ becomes steeper.
- $\dot{g}_K = 0$ unchanged.
- The new intersection has **lower** $g_A^*$ and **lower** $g_K^*$ (if the slope effect dominates).

> **Exam Tip:** Draw the $(g_A, g_K)$ plane. The $\dot{g}_A = 0$ line slopes upward (if $\phi < 1$); $\dot{g}_K = 0$ is a 45-degree line shifted by $n$. Label the BGP intersection. For each shock, show the shift and new intersection.

> **Professor's Corner:** The key result is that population growth $n$ is a *positive* driver of long-run knowledge growth in the semi-endogenous model ($\partial g_A^*/\partial n > 0$). This implies that countries with faster population growth should, other things equal, have faster technological progress — though empirically this is complicated by quality of education and institutions.
>
> → *See also: [Q12](#q-endogrowth-01) (role of $a^L$), [Q14](#q-endogrowth-03) ($\beta+\theta=1$ case)*

---

### Question 14 {#q-endogrowth-03}

**Compare two cases: (i) $\beta + \theta < 1$, and (ii) $\beta + \theta = 1$ with $n = 0$. What is the difference in the dynamics of the growth rates of capital and knowledge between these two cases? (4 marks)**

**Answer:**

> **Marking Guide [4 marks]:** Case (i) semi-endogenous dynamics (1.5) | Case (ii) fully endogenous dynamics (1.5) | Table comparison (1)

**Case (i): $\beta + \theta < 1$ (Semi-endogenous growth, Jones 1995):**

The dynamic system for growth rates:

$$\frac{\dot{g}_A}{g_A} = \beta g_K + \theta n + (\phi - 1)g_A$$
$$\frac{\dot{g}_K}{g_K} = \text{(derived from capital accumulation)}$$

When $\beta + \theta < 1$, the system has diminishing returns to the "produced" factors of knowledge production (capital and labor in R&D). The dynamics converge to a unique steady state $(g_A^*, g_K^*)$ where:

$$g_A^* = \frac{\theta + \beta}{1 - \phi - \beta} \cdot n$$
$$g_K^* = g_A^* + n$$

Key properties:
- **Steady state exists and is stable.** From any initial condition, $(g_A, g_K)$ converge to $(g_A^*, g_K^*)$.
- **Growth rates are endogenous** but pinned down by population growth $n$ and parameters.
- **Scale effects:** A larger level of R&D labor ($a^L L$) raises the *level* of $A$ but not the long-run growth rate.
- Without population growth ($n=0$), $g_A^* = 0$ — long-run growth stops.

**Case (ii): $\beta + \theta = 1$ with $n = 0$ (Fully endogenous growth, Romer 1990):**

With $\beta + \theta = 1$ and $n = 0$:

$$\frac{\dot{g}_A}{g_A} = \beta g_K + (\phi - 1)g_A \quad \text{(since }\theta n = 0\text{)}$$

At the steady state $\dot{g}_A = 0$:

$$\beta g_K^* = (1-\phi)g_A^*$$

And $\dot{g}_K = 0$ gives $g_K = g_A$ (since $n=0$, the balanced growth condition is $g_K = g_A$).

Substituting: $\beta g_A^* = (1-\phi)g_A^*$, which implies either $g_A^* = 0$ or $\beta = 1-\phi$.

Key properties:
- If $\beta + \theta = 1$ and $\beta \neq 1-\phi$, the only steady state is $g_A^* = 0$ (zero long-run growth).
- If $\beta + \theta = 1$ and $\beta = 1-\phi$, the model exhibits **balanced growth at any rate** (the $\dot{g}_A=0$ and $\dot{g}_K=0$ lines coincide) — growth is determined by initial conditions and policy parameters $a^L$, $a^K$.
- **Scale effects:** A permanent increase in $a^L$ **does** affect the long-run growth rate because there are constant returns to the produced factors in R&D.
- **Fully endogenous:** Growth is sustained without relying on population growth.

| Feature | Semi-endogenous ($\beta+\theta<1$) | Fully endogenous ($\beta+\theta=1$, $n=0$) |
|---------|-----------------------------------|--------------------------------------------|
| Growth source | Population growth ($n>0$) | R&D labor allocation ($a^L$) |
| $g_A^*$ depends on | $n$ only | $a^L$, $a^K$, $B$ |
| Scale effect | Level effect only | Growth effect |
| Policy effect on growth | None (long-run) | Permanent |
| Empirical support | Jones (1995) — time series | Romer (1990) — cross-section |
| Long-run growth if $n=0$ | Zero | Positive |

> **Exam Tip:** The distinction between semi-endogenous and fully endogenous growth is one of the most frequently tested concepts in advanced growth theory. Memorize the parameter conditions: $\beta+\theta<1$ → semi-endogenous; $\beta+\theta=1$ → fully endogenous.

> **Professor's Corner:** The Jones (1995) critique was devastating to the first-generation endogenous growth models. He showed that patent data exhibit no upward trend in TFP growth despite massive increases in R&D labor — the scale effect prediction of the fully endogenous model is rejected. This led to the "semi-endogenous" synthesis where growth is driven by R&D but with diminishing returns in knowledge production.
>
> → *See also: [Q12](#q-endogrowth-01) (role of $a^L$), [Q13](#q-endogrowth-02) ($\dot{g}_A$ and $\dot{g}_K$ loci)*

---

### Question 15 {#q-endogrowth-04}

**Briefly explain the nature of Knowledge and the determinants of the allocation of resources to R&D. (4 marks)**

**Answer:**

> **Marking Guide [4 marks]:** Nature of knowledge — non-rivalry, non-excludability, externalities (2) | Determinants of R&D allocation (2)

**Nature of Knowledge:**

Knowledge (or ideas) differs fundamentally from ordinary economic goods along two dimensions:

1. **Non-rivalry:** One person's use of an idea does not reduce its availability for others. A design for a new product can be used simultaneously by any number of firms. This contrasts with physical capital or labor, which are rival.

   - Implication: Knowledge can be accumulated without diminishing returns at the aggregate level, making sustained growth possible (Romer, 1990).
   - Non-rivalry is the fundamental reason why endogenous growth models can generate increasing returns.

2. **Non-excludability (partial):** It is difficult to prevent others from using an idea once it is discovered. Patents, copyright, and trade secrets provide partial excludability, but knowledge spillovers are pervasive.
   - Implications: Creates a **positive externality** — private returns to R&D are below social returns.
   - This externality is the central market failure justifying policy intervention (R&D subsidies, patent length).

3. **Cumulative nature (standing on shoulders):** New knowledge builds on existing knowledge. The productivity of current R&D depends on the stock of past discoveries.
   - Parameter $\phi$ in the R&D equation captures this: $\dot{A} = B (a^L L)^\theta A^\phi$.
   - If $\phi > 0$, there are positive intertemporal knowledge spillovers.

| Feature | Rival Goods | Knowledge (Non-rival) |
|---------|-------------|----------------------|
| Marginal cost of reproduction | Positive | Approximately zero |
| Optimal pricing | Marginal cost | Mark-up (monopoly) |
| Market structure | Competitive | Monopolistic competition |
| Returns to scale | Diminishing (at firm level) | Increasing (at aggregate level) |

**Determinants of R&D resource allocation:**

The allocation of labor and capital to R&D is determined by:

1. **Profitability of innovation:**
   - Firms allocate resources to R&D if the expected present value of monopoly profits exceeds the cost of innovation.
   - Determined by market size, patent protection, and the elasticity of substitution in production.
   - In the Romer model: $L_A$ solves $v \cdot \dot{A} = w L_A$ where $v$ is the value of a patent.

2. **Patent protection and intellectual property rights:**
   - Stronger IP protection increases appropriability, raising the private return to R&D.
   - However, excessively long patents reduce the knowledge spillover that benefits future innovators.

3. **Market structure:**
   - Monopolistic competition is essential — competitive firms cannot recover fixed R&D costs.
   - Creative destruction (Aghion-Howitt): new innovations make existing products obsolete, creating both incentives and disincentives for R&D.

4. **Government policy:**
   - R&D subsidies, tax credits, and direct government research funding increase $a^L$.
   - Education policy affects the quality and quantity of R&D labor.

5. **Knowledge spillovers:**
   - The effective knowledge stock available to researchers affects R&D productivity.
   - Open science, academic publications, and researcher mobility increase spillovers.

6. **Learning by doing (Arrow, 1962):**
   - Knowledge accumulates as a byproduct of production experience, not just dedicated R&D.
   - $\dot{A} = \delta L$ (learning-by-doing formulation) where knowledge grows with labor used in production.

> **Exam Tip:** For a 4-mark question, focus on two key points: (1) non-rivalry is the one essential feature that distinguishes knowledge from other inputs, and (2) the wedge between private and social returns to R&D is the central market failure.

> **Professor's Corner:** The distinction between non-rivalry and non-excludability is critical. Non-rivalry (ideas can be used by many simultaneously) creates increasing returns and makes sustained growth possible. Non-excludability (it's hard to prevent others from using ideas) creates the market failure. These two features together necessitate imperfect competition (monopoly profits) as the engine of endogenous growth — a key insight of Romer (1990).
>
> → *See also: [Q12](#q-endogrowth-01) (R&D labor allocation), [Q20](#q-batch47-macro-05) (Romer vs Solow)*

---

# Section 4 — Batch 47 MSc 2022 Questions

---

### Question 16 {#q-batch47-macro-01}

**Solow Growth Model: Discuss assumptions about input, output, and production function. Describe the phase diagram for $k$ and the Balanced Growth Path. Show the impacts of changes in saving ratio on steady state and prove these are level effects, not growth effects. [4+3+3+4]**

**Answer:**

> **Marking Guide [14 marks]:** Assumptions (4) | Phase diagram + BGP (3) | Break-even/actual investment changes (3) | Saving ratio level effects (4)
>
> ⭐ **High-Yield** — Comprehensive Solow question covering all core elements.

**a) Assumptions (4 marks):**

1. **Production function:** $Y = F(K, AL)$, CRS, positive and diminishing marginal products, Inada conditions.
2. **Input assumptions:** $K$ accumulates via investment; $L$ grows at $n$; $A$ grows at $g$ (exogenous).
3. **Output allocation:** $Y = C + I$, saving rate $s$ is exogenous and constant.
4. **Factor markets:** Competitive — capital earns $r = MPK - \delta$, labor earns $w = MPL$.
5. **No government, no international trade** (closed economy).

**b) Phase diagram for $k$ and BGP (3 marks):**

The phase diagram plots $\dot{k}$ against $k$:

$$\dot{k} = sf(k) - (n+g+\delta)k$$

- For $k < k^*$: $\dot{k} > 0$ (economy capital-deepens)
- For $k > k^*$: $\dot{k} < 0$ (economy capital-shallows)
- Single crossing at $k^*$: globally stable steady state

**Balanced Growth Path (BGP):** On the BGP, all variables grow at constant rates:
- $k$, $y$, $c$ per effective worker: **constant**
- $K$, $Y$, $C$ per worker: grow at rate $g$
- Aggregate $K$, $Y$, $C$: grow at rate $n+g$

The BGP is called "balanced" because all real variables grow at the same rate ($n+g$), so their ratios are constant.

**c) Effects on break-even and actual investment (3 marks):**

| Change | Effect on Actual Investment $sf(k)$ | Effect on Break-Even $(n+g+\delta)k$ | Net Effect |
|--------|-------------------------------------|--------------------------------------|------------|
| $\delta \downarrow$ | No direct effect | Slope decreases → break-even line rotates down | $\dot{k} > 0$ → $k^*$ ↑ |
| $g \uparrow$ | No direct effect | Slope increases → break-even line rotates up | $\dot{k} < 0$ → $k^*$ ↓ |
| $\alpha \uparrow$ | $f(k) = k^\alpha$ changes: higher $\alpha$ raises $sf(k)$ for $k>1$, lowers for $k<1$ | No direct effect | Ambiguous (depends on $k$) |

**d) Saving ratio: level effects, not growth effects (4 marks):**

Steady-state condition: $s f(k^*) = (n+g+\delta)k^*$.

For Cobb-Douglas:
$$k^* = \left( \frac{s}{n+g+\delta} \right)^{1/(1-\alpha)}$$
$$y^* = \left( \frac{s}{n+g+\delta} \right)^{\alpha/(1-\alpha)}$$

**Level effect:** An increase in $s$ raises $k^*$ and $y^*$ permanently. On the BGP, $y(t) = A(t)y^*$ — the path of output per worker is higher at every point in time.

**No growth effect:** On the BGP, $\dot{y}/y = g$ regardless of $s$. A higher $s$ moves the economy to a higher output *path* but does not change the *slope* of that path.

**Proof:**
$$\ln y(t) = \ln A(0) + gt + \frac{\alpha}{1-\alpha} \ln s - \frac{\alpha}{1-\alpha} \ln(n+g+\delta)$$
$$\frac{\partial \ln y(t)}{\partial t} = g \quad \text{(independent of $s$)}$$

>Saving ratio changes have permanent **level effects** on $k$ and $y$ but no **growth effects**.

> **Exam Tip:** This is a comprehensive question. Allocate time proportionally: assumptions (4 min), phase diagram (3 min), break-even analysis (3 min), level vs growth effects (4 min). For part (d), write the log-linearized expression for $\ln y(t)$ to show that the time derivative is independent of $s$.

> **Professor's Corner:** The Solow model's prediction that saving affects levels but not long-run growth is the fundamental dividing line between exogenous and endogenous growth theories. Policy implications differ radically: Solow says R&D subsidies have level effects only; endogenous growth says they can raise the growth rate permanently.
>
> → *See also: [Q1](#q-solow-01) (Solow derivation), [Q6](#q-solow-06) (Cobb-Douglas comparative statics)*

---

### Question 17 {#q-batch47-macro-02}

**Golden Rule & Convergence: Show impacts of changes in saving ratio on per capita consumption. Explain the long-run effect of a rise in saving on output and the speed of convergence. Find the elasticity of $y^*$ with respect to $n$. [3+5+3+3]**

**Answer:**

> **Marking Guide [14 marks]:** Saving-consumption relationship (3) | Long-run output effect and convergence speed (5) | Elasticity calculation with numerics (3) | Growth accounting and convergence empirics (3)

**a) Saving ratio and per capita consumption (3 marks):**

Steady-state consumption per effective worker: $c^* = (1-s) f(k^*(s))$.

For Cobb-Douglas $f(k) = k^\alpha$ and $k^* = (s/(n+g+\delta))^{1/(1-\alpha)}$:

$$c^*(s) = (1-s) \left( \frac{s}{n+g+\delta} \right)^{\alpha/(1-\alpha)}$$

Relationship between $s$ and $c^*$:
- For $s < \alpha$: $\partial c^*/\partial s > 0$ (higher saving raises steady-state consumption)
- For $s = \alpha$: Golden Rule, $c^*$ maximized
- For $s > \alpha$: $\partial c^*/\partial s < 0$ (over-saving reduces consumption — dynamic inefficiency)

**The Golden Rule saving rate is $s_{gold} = \alpha$.** Most steady states do NOT automatically satisfy the Golden Rule — it requires a specific saving rate.

**b) Long-run effect of saving on output and speed of convergence (5 marks):**

**Long-run output effect:**
$$\frac{\partial \ln y^*}{\partial \ln s} = \frac{\alpha}{1-\alpha} > 0$$

With $\alpha = 1/3$, a 10% increase in $s$ raises steady-state output per worker by 5%.

**Speed of convergence (near BGP):**
The key dynamic equation linearized around $k^*$:

$$\dot{k} \approx - \lambda (k - k^*)$$

where $\lambda = (1-\alpha)(n+g+\delta)$ is the speed of convergence.

**Proof:** $\dot{k} = sf(k) - (n+g+\delta)k$. First-order Taylor expansion:
$$\dot{k} \approx [sf'(k^*) - (n+g+\delta)](k-k^*)$$

But $sf'(k^*) = s \alpha k^{*\alpha-1} = \alpha (n+g+\delta)$ using $s k^{*\alpha} = (n+g+\delta)k^*$.

Thus $\dot{k} \approx [\alpha(n+g+\delta) - (n+g+\delta)](k-k^*) = -(1-\alpha)(n+g+\delta)(k-k^*)$.

So $\lambda = (1-\alpha)(n+g+\delta)$.

Half-life: $t_{1/2} = \frac{\ln 2}{\lambda} = \frac{\ln 2}{(1-\alpha)(n+g+\delta)}$.

With $\alpha = 1/3$, $n+g+\delta = 0.08$: $\lambda = 0.053$, $t_{1/2} \approx 13$ years.

**c) Elasticity of $y^*$ with respect to $n$ (3 marks):**

From $y^* = (s/(n+g+\delta))^{\alpha/(1-\alpha)}$:

$$\ln y^* = \frac{\alpha}{1-\alpha} [\ln s - \ln(n+g+\delta)]$$

$$\varepsilon_{y^*, n} = \frac{\partial \ln y^*}{\partial \ln n} = -\frac{\alpha}{1-\alpha} \cdot \frac{n}{n+g+\delta}$$

**Numerical example:** $\alpha = 1/3$, $g = 0.02$, $\delta = 0.03$, $n$ falls from 0.02 to 0.01.

At initial $n = 0.02$:
$$\varepsilon = -\frac{1/3}{2/3} \cdot \frac{0.02}{0.02+0.02+0.03} = -0.5 \cdot \frac{0.02}{0.07} = -0.143$$

Elasticity at new $n = 0.01$:
$$\varepsilon = -0.5 \cdot \frac{0.01}{0.01+0.02+0.03} = -0.5 \cdot \frac{0.01}{0.06} = -0.083$$

Approximate percentage change in $y^*$:
$$\Delta \ln y^* \approx \varepsilon_{avg} \cdot (\ln n_1 - \ln n_0) \approx -0.113 \cdot \ln(0.5) = -0.113 \cdot (-0.693) \approx 0.078$$

So $y^*$ rises by approximately **7.8%**.

**d) Growth accounting and convergence empirics (3 marks):**

**Growth accounting** decomposes output growth into factor accumulation and TFP growth:

$$\frac{\dot{Y}}{Y} = \frac{\dot{A}}{A} + \alpha \frac{\dot{K}}{K} + (1-\alpha) \frac{\dot{L}}{L}$$

The Solow residual $\frac{\dot{A}}{A}$ is the part of output growth not explained by capital and labor growth.

**Convergence empirics:**
- Barro (1991): Cross-country regressions of growth on initial GDP show conditional convergence at 2-3% per year.
- MRW (1992): Augmented Solow model (with human capital) explains 80% of cross-country variation in income.
- Critics argue that parameter heterogeneity (different $A(0)$, $s$, $n$) makes convergence tests unreliable.

> **Exam Tip:** For the elasticity calculation, show every step. The approximation $\Delta \ln y^* \approx \varepsilon \cdot \Delta \ln n$ is acceptable for small changes. For the large change from 2% to 1%, use the average elasticity.

> **Professor's Corner:** The elasticity result has important policy implications: a country experiencing demographic transition (falling $n$) will experience a substantial level increase in per-capita income through the Solow channel alone. Bangladesh's fertility decline from 6.6 to 2.2 represents one of the largest demographic transitions in history.
>
> → *See also: [Q2](#q-solow-02) (Bangladesh demographic transition), [Q5](#q-solow-05) (conditional convergence)*

---

### Question 18 {#q-batch47-macro-03}

**Ramsey-Cass-Koopmans: Find the solution to the household problem, define a competitive equilibrium, and find the steady-state equilibrium value of capital. [3+4+7]**

**Answer:**

> **Marking Guide [14 marks]:** Household problem solution (3) | Competitive equilibrium definition (4) | Steady-state capital (7)
>
> ⭐ **High-Yield** — The Ramsey household optimization is the microfoundation for all modern macroeconomics.

**a) Solution to the household problem (3 marks):**

The household maximizes:

$$U = \int_0^\infty e^{-\rho t} \frac{c(t)^{1-\theta} - 1}{1-\theta} \cdot \frac{L(t)}{H} \, dt$$

subject to the budget constraint:

$$\dot{a}(t) = r(t)a(t) + w(t) - c(t) - n a(t)$$

where $a(t)$ is assets per person, $r(t)$ is the real interest rate, $w(t)$ is the wage.

**Hamiltonian:**
$$\mathcal{H} = e^{-(\rho-n)t} \frac{c^{1-\theta} - 1}{1-\theta} + \lambda(t)[r(t)a(t) + w(t) - c(t) - n a(t)]$$

**FOCs:**

1. $\frac{\partial \mathcal{H}}{\partial c} = 0$: $c^{-\theta} e^{-(\rho-n)t} = \lambda$
2. $\frac{\partial \mathcal{H}}{\partial a} = -\dot{\lambda}$: $\lambda(r - n) = -\dot{\lambda}$
3. TVC: $\lim_{t\to\infty} \lambda(t) a(t) = 0$

From (1) and (2), derive the Euler equation:

$$\frac{\dot{c}}{c} = \frac{r - \rho}{\theta}$$

In per-effective-worker terms (adjusting for $g$):

$$\frac{\dot{c}}{c} = \frac{f'(k) - \delta - \rho - \theta g}{\theta}$$

**No-Ponzi condition:** $\lim_{t\to\infty} a(t) e^{-\int_0^t (r(s)-n) ds} = 0$.

**b) Competitive equilibrium definition (4 marks):**

A competitive equilibrium consists of:
1. **Allocations:** $\{c(t), k(t)\}_{t=0}^\infty$
2. **Prices:** $\{r(t), w(t)\}_{t=0}^\infty$

such that:

1. **Households optimize:** Given $\{r(t), w(t)\}$, the consumption path $\{c(t)\}$ maximizes utility subject to the budget constraint and No-Ponzi condition.
2. **Firms optimize:** Given $\{r(t), w(t)\}$, firms hire capital and labor to maximize profits:
   - $r(t) = f'(k(t)) - \delta$
   - $w(t) = f(k(t)) - k(t)f'(k(t))$
3. **Markets clear:**
   - Goods market: $\dot{k} = f(k) - c - (n+g+\delta)k$
   - Capital market: $a(t) = k(t)$ (assets = capital, since no government bonds)
   - Labor market: supply = demand
4. **Transversality condition holds:** $\lim_{t\to\infty} \lambda(t)k(t) = 0$.

**c) Steady-state equilibrium value of capital (7 marks):**

At steady state, $\dot{c} = 0$ and $\dot{k} = 0$.

From $\dot{c} = 0$:
$$f'(k^*) = \rho + \theta g + \delta$$

For Cobb-Douglas $f(k) = k^\alpha$:
$$\alpha k^{*\alpha-1} = \rho + \theta g + \delta$$
$$k^{*\alpha-1} = \frac{\rho + \theta g + \delta}{\alpha}$$
$$k^* = \left( \frac{\alpha}{\rho + \theta g + \delta} \right)^{\frac{1}{1-\alpha}}$$

From $\dot{k} = 0$:
$$c^* = f(k^*) - (n+g+\delta)k^*$$

**Key results:**
- $k^*$ depends on the **discount rate** $\rho$: higher impatience → lower $k^*$.
- $k^*$ depends on the **CRRA coefficient** $\theta$: stronger consumption smoothing → lower $k^*$ (via $\theta g$ term).
- $k^*$ does NOT depend on the saving rate $s$ (which is endogenous).
- $k^* < k_{gold}$ because $\rho > 0$ ensures $f'(k^*) > f'(k_{gold})$.

**Comparison with Solow steady state:**

| Feature | Solow | Ramsey |
|---------|-------|--------|
| $k^*$ condition | $sf(k^*) = (n+g+\delta)k^*$ | $f'(k^*) = \rho + \theta g + \delta$ |
| Determines $k^*$ | $s$ (exogenous) | $\rho, \theta$ (preferences) |
| Saving rate | Fixed at $s$ | Endogenous: $s^* = (n+g+\delta)k^*/f(k^*)$ |
| Welfare | No optimization | Maximizes household utility |

> **Exam Tip:** For the competitive equilibrium definition, state each condition precisely. The steady-state derivation should show both the $\dot{c}=0$ and $\dot{k}=0$ conditions. The final expression for $k^*$ in terms of parameters is the key result.

> **Professor's Corner:** The Ramsey model's steady-state capital is often called "the Modified Golden Rule" because it modifies the Golden Rule condition $f'(k) = n+g+\delta$ to include discounting: $f'(k) = \rho + \theta g + \delta$. The wedge reflects the household's impatience and desire to smooth consumption.
>
> → *See also: [Q7](#q-ramsey-01) (phase diagram), [Q8](#q-ramsey-02) (socially optimal vs Golden Rule)*

---

### Question 19 {#q-batch47-macro-04}

**Government policy in growth models: Discuss the effects of taxes, government spending, and welfare implications in the Solow and Ramsey frameworks. [4+4+3+3] — Synthesized from Batch 47**

**Answer:**

> **Marking Guide [14 marks]:** Solow with government (4) | Ramsey with government spending (4) | Taxation effects (3) | Welfare analysis (3)

**Government in the Solow model:**

Introduce government spending $G$ financed by a lump-sum tax $T = G$. The resource constraint becomes:

$$Y = C + I + G$$

In per-effective-worker terms:
$$y = c + \dot{k} + (n+g+\delta)k + g$$

The steady-state condition is:
$$sf(k^*) = (n+g+\delta)k^* + g$$

where $s$ is the private saving rate. Government spending financed by taxation **reduces** the saving available for capital accumulation.

- An increase in $G$ shifts the effective saving curve downward: $s(f(k)-g)$.
- Steady-state $k^*$ falls.
- Both $y^*$ and $c^*$ fall permanently.
- The effect is identical to a fall in $s$ — level effect, not growth effect.

**Government in the Ramsey model:**

With permanent $G$ financed by lump-sum taxes:

$$\dot{k} = f(k) - c - G - (n+g+\delta)k$$

The Euler equation is unchanged ($\dot{c}/c$ depends only on $f'(k)$, not on $G$).

- $\dot{k}=0$ locus shifts down by $G$.
- $\dot{c}=0$ locus unchanged.
- Steady-state $k^*$ unchanged.
- Steady-state $c^*$ falls by exactly $G$.
- Transition: $c(0)$ jumps down immediately to the new saddle path.

**Taxation effects:**

**Lump-sum tax:** No distortionary effect. The Euler equation is unaffected. Only the resource constraint changes. This is Ricardian equivalent to debt finance.

**Capital income tax ($\tau_K$):** The after-tax return to capital is $(1-\tau_K)r$. The Euler equation becomes:

$$\frac{\dot{c}}{c} = \frac{(1-\tau_K)f'(k) - \delta - \rho - \theta g}{\theta}$$

The $\dot{c}=0$ locus shifts left: $(1-\tau_K)f'(k^*) = \rho + \theta g + \delta$.
- $k^*$ falls (reduced incentive to accumulate capital).
- Permanent welfare loss.

**Labor income tax ($\tau_L$):** In the Ramsey model with inelastic labor supply, a wage tax is equivalent to a lump-sum tax (no distortion on the intensive margin). With elastic labor, it reduces the effective wage and may reduce labor supply.

| Tax Type | $\dot{c}=0$ locus | $\dot{k}=0$ locus | $k^*$ effect | Welfare |
|----------|------------------|------------------|-------------|---------|
| Lump-sum | No shift | Down by $G$ | Unchanged | Full loss |
| Capital income ($\tau_K$) | Shifts left | Down by $G$ | Decreases | Excess burden |
| Labor income ($\tau_L$) | No shift (inelastic) | Down by $G$ | Decreases slightly | Small excess burden |

**Welfare implications:**

- **Permanent $G \uparrow$:** Lump-sum tax → consumption falls permanently by $G$. No transitional dynamics for $k^*$. Welfare loss equals PDV of $G$.
- **Temporary $G \uparrow$:** Consumption decline is smaller and reversed. Welfare loss is finite and smaller.
- **Distortionary taxes** (capital income tax): Create an *excess burden* beyond the revenue raised, because they distort the intertemporal consumption allocation.
- **Productive government spending** (infrastructure, education): If $G$ enters the production function as $Y = F(K, AL, G)$, the net effect on welfare depends on the productivity of $G$ relative to the distortion.

> **Exam Tip:** For government spending in Ramsey, the key insight is that the $\dot{c}=0$ locus does NOT shift (since it depends only on $f'(k)$, not on $G$). This is the fundamental difference from a technology shock.

> **Professor's Corner:** The Chamley-Judd result (1985, 1986) shows that the optimal long-run capital income tax rate is zero in the Ramsey model — the distortion accumulates over time, making it extremely inefficient. Short-run capital taxes may be optimal during transition, but the steady-state rate is zero. This is one of the most important results in dynamic public finance.
>
> → *See also: [Q10](#q-ramsey-04) (government spending in Ramsey), [Q5](#q-solow-05) (Solow convergence)*

---

### Question 20 {#q-batch47-macro-05}

**R&D Endogenous Growth (Romer/GH/AGH): How does constructing this framework differ from Solow? Critically explain the role of $a_L$ and distinguish semi-endogenous from fully endogenous growth. [2+4+4+4]**

**Answer:**

> **Marking Guide [14 marks]:** Framework differences from Solow (2) | Role of $a_L$ (4) | $\beta+\theta$ cases (4) | Semi vs fully endogenous (4)

**a) How the R&D framework differs from Solow (2 marks):**

| Feature | Solow Model | R&D Endogenous Growth |
|---------|-------------|----------------------|
| Technology | Exogenous $g$ | Endogenous: $\dot{A} = f(L_A, K_A, A)$ |
| Returns to scale | CRS in $K$ and $L$ | IRS: non-rival knowledge creates increasing returns |
| Market structure | Perfect competition | Monopolistic competition (R&D requires profit) |
| Long-run growth driver | Population + tech growth | Profit-driven innovation |
| Saving rate | Exogenous $s$ | Endogenous (households optimize) |
| Policy implications | Level effects only | Possible growth effects |

The fundamental difference: **Solow treats technology as a free good (manna from heaven); Romer treats it as a produced input requiring resources and yielding monopoly profits.**

**b) Role of $a_L$ (R&D labor) for knowledge accumulation (4 marks):**

See [Q12](#q-endogrowth-01) for the full derivation. Key points:

- $\dot{A} = B(a_L L)^\gamma A^\phi$
- Growth rate of knowledge: $g_A = B(a_L L)^\gamma A^{\phi-1}$
- Steady state: $g_A^* = \gamma n / (1-\phi)$ (independent of $a_L$)
- A permanent increase in $a_L$ raises the level of $A$ but not the long-run growth rate
- This is the **semi-endogenous growth** result (Jones, 1995)

**c) $\beta+\theta < 1$ vs $\beta+\theta = 1$ with $n=0$ (4 marks):**

See [Q14](#q-endogrowth-03) for full analysis.

**d) Semi-endogenous vs fully endogenous growth (4 marks):**

| Feature | Semi-Endogenous ($\beta+\theta<1$) | Fully Endogenous ($\beta+\theta=1$, $n=0$) |
|---------|-----------------------------------|--------------------------------------------|
| Key paper | Jones (1995) | Romer (1990), Aghion-Howitt (1992) |
| R&D returns | Diminishing to produced factors | Constant returns to produced factors |
| Steady-state $g_A$ | $\frac{(\theta+\beta)n}{1-\phi-\beta}$ | Depends on $a_L$, $a_K$, $B$ |
| Role of $n$ | Essential for positive growth | Not needed (growth can be sustained) |
| Policy effect on long-run growth | None (level effect only) | Permanent (growth effect) |
| Scale effect prediction | No scale effect (level only) | Positive scale effect |
| Empirical validity | Consistent with TFP time series | Scale effect rejected by data |

The **Jones (1995) critique** showed that fully endogenous models predict a positive relationship between the level of R&D labor and TFP growth. Empirically, R&D labor has risen dramatically in the US since 1950 without a corresponding increase in TFP growth — consistent with semi-endogenous but not fully endogenous growth.

> **Exam Tip:** This question links all the key concepts from Tutorial 3. Start with the R&D equation, derive the dynamics, compare the two parameter cases, and conclude with the Jones critique. For top marks, reference specific papers.

> **Professor's Corner:** The distinction between semi-endogenous and fully endogenous growth is not just academic — it has direct policy implications. If growth is semi-endogenous, R&D subsidies have no long-run growth effects (only level effects). If fully endogenous, R&D subsidies can permanently raise the growth rate. The current consensus (Jones, 2005; Acemoglu, 2009) leans toward the semi-endogenous view for frontier economies.
>
> → *See also: [Q12](#q-endogrowth-01) (role of $a^L$), [Q14](#q-endogrowth-03) (comparison of cases), [Q15](#q-endogrowth-04) (nature of knowledge)*

---

# Section 5 — Batch 48 MSc 2023 Questions

---

### Question 21 {#q-batch48-macro-01}

**Solow Model with Technological Progress: Discuss assumptions, capital-augmenting and Hicks-neutral technological progress. Describe dynamics of $k$ and the Balanced Growth Path (BGP). [4+3+3+4]**

**Answer:**

> **Marking Guide [14 marks]:** Assumptions + types of tech progress (4) | $k$ dynamics (3) | Break-even/actual investment (3) | Saving ratio level effects (4)

**a) Assumptions and types of technological progress (4 marks):**

**Solow assumptions:** (same as [Q16](#q-batch47-macro-01)a) — CRS, Inada conditions, exogenous $n$, $g$, $\delta$, constant $s$.

**Types of technological progress:**

1. **Hicks-neutral (output-augmenting):** $Y = A(t) F(K, L)$
   - Technology multiplies output directly.
   - The production function shifts proportionally.
   - $MP_K$ and $MP_L$ rise at the same rate.

2. **Harrod-neutral (labor-augmenting):** $Y = F(K, A(t)L)$
   - Technology multiplies labor effectiveness.
   - This is the form used in the standard Solow model $Y = K^\alpha (AL)^{1-\alpha}$.
   - Along the BGP, $K/Y$ is constant (steady-state property).
   - **Uzawa's theorem:** Sustained growth requires labor-augmenting technical change.

3. **Solow-neutral (capital-augmenting):** $Y = F(A(t)K, L)$
   - Technology multiplies capital effectiveness.
   - $Y = (AK)^\alpha L^{1-\alpha}$ under Cobb-Douglas.
   - For Cobb-Douglas, all three forms are equivalent (since $A^\alpha K^\alpha L^{1-\alpha} = K^\alpha (A^{\alpha/(1-\alpha)} L)^{1-\alpha}$ — can be rewritten as labor-augmenting).

**b) Dynamics of $k$ and the BGP (3 marks):**

The fundamental equation:

$$\dot{k} = s f(k) - (n+g+\delta)k$$

**BGP properties:**
- $k$, $y$, $c$ per effective worker: constant at $k^*$, $y^*$, $c^*$.
- Output per worker $Y/L = A y^*$ grows at rate $g$.
- Capital-output ratio $K/Y$ is constant (key BGP condition).
- Real wage grows at rate $g$ (marginal product of labor rises with technology).
- Real interest rate is constant (marginal product of capital is constant on BGP).

**c) Effects on break-even and actual investment (3 marks):**

| Change | Actual $sf(k)$ | Break-Even $(n+g+\delta)k$ | $k^*$ |
|--------|---------------|---------------------------|-------|
| $\delta \uparrow$ | No change | Slope increases | Decreases |
| $g \uparrow$ | No change | Slope increases | Decreases |
| $\alpha \uparrow$ | Changes shape of $f(k)$ | No change | Ambiguous |

For the case $\alpha \uparrow$:

$$k^* = \left( \frac{s}{n+g+\delta} \right)^{1/(1-\alpha)}$$

As $\alpha$ increases (more capital-intensive production), $1/(1-\alpha)$ increases, so $k^*$ rises if $s > n+g+\delta$, falls if $s < n+g+\delta$.

**d) Saving ratio level effects (4 marks):**

See [Q16](#q-batch47-macro-01)d — the proof that saving changes have level effects but not growth effects is identical. The key equation:

$$\ln y(t) = \ln A(0) + gt + \frac{\alpha}{1-\alpha} [\ln s - \ln(n+g+\delta)]$$

The growth rate $\partial \ln y(t)/\partial t = g$ is independent of $s$.

> **Exam Tip:** The types of technological progress (Hicks, Harrod, Solow-neutral) are a Batch 48 specific addition. For the standard Solow model, always assume labor-augmenting (Harrod-neutral) technical progress — Uzawa's theorem says this is the only form consistent with steady-state growth.

> **Professor's Corner:** Uzawa's (1961) steady-state growth theorem states that if a neoclassical growth model exhibits constant steady-state growth, technological progress must be purely labor-augmenting. This is often glossed over but provides the microfoundation for why we write $Y = F(K, AL)$ rather than $Y = A F(K, L)$.
>
> → *See also: [Q16](#q-batch47-macro-01) (Solow assumptions), [Q6](#q-solow-06) (Cobb-Douglas comparative statics)*

---

### Question 22 {#q-batch48-macro-02}

**Romer Endogenous Growth: Find the steady-state level of technological progress. Calculate the effects of a 10% increase in $L_R$ (researchers) on impact and in steady state. Illustrate on the $\dot{g}_A/g_A$ diagram. [4+4+3+3]**

**Answer:**

> **Marking Guide [14 marks]:** Steady-state tech level (4) | Impact effect of $L_R \uparrow$ (4) | Steady-state effect (3) | Diagram (3)

**a) Steady-state level of technological progress (4 marks):**

Knowledge accumulation: $\dot{A} = B L_R^\beta A^\theta$, where $L_R$ is the number of researchers, $\beta$ is the elasticity of R&D output to researchers, and $\theta$ captures returns to existing knowledge.

Population grows at $n$, so $L_R$ grows at $n$ (assuming constant fraction of researchers).

The growth rate of technology:

$$g_A = \frac{\dot{A}}{A} = B L_R^\beta A^{\theta-1}$$

In steady state, $\dot{g}_A = 0$:

$$\frac{\dot{g}_A}{g_A} = \beta n + (\theta-1) g_A = 0$$

$$g_A^* = \frac{\beta n}{1-\theta}$$

For $\theta < 1$ (diminishing returns to knowledge in R&D), this is the semi-endogenous growth result.

**Steady-state level of $A$:**

From $g_A^* = \dot{A}/A = \beta n/(1-\theta)$, the balanced growth path implies:

$$A(t) = A(0) e^{g_A^* t}$$

The level of $A$ at any point depends on $A(0)$ and the steady-state growth rate.

**b) Effect of a 10% increase in $L_R$ — on impact (4 marks):**

At the moment of the shock (holding $A$ constant):

$$g_A(0^+) = B (1.1 L_R)^\beta A(0)^{\theta-1} = 1.1^\beta \cdot g_A(0^-)$$

The impact elasticity is:

$$\frac{\partial \ln g_A}{\partial \ln L_R} \bigg|_{impact} = \beta$$

With $\beta = 1$ (standard case), a 10% increase in $L_R$ raises $g_A$ by 10% on impact.

With $\beta = 0.5$, a 10% increase in $L_R$ raises $g_A$ by approximately 5% ($1.1^{0.5} - 1 \approx 0.049$).

**c) Effect on steady-state level of technological progress (3 marks):**

In the long run, $g_A$ returns to $g_A^* = \beta n/(1-\theta)$, which is **independent of $L_R$**.

However, the **level** of $A$ is permanently higher. The increase in $A$ can be calculated as:

After the shock, the economy transitions with $g_A > g_A^*$ initially, then $g_A$ declines to $g_A^*$. The cumulated addition to $\ln A$ is:

$$\Delta \ln A(\infty) = \int_0^\infty [g_A(t) - g_A^*] dt$$

Solving the transition dynamics:

The steady-state condition $\dot{g}_A = 0$ gives the dynamics:

$$\frac{\partial \ln A}{\partial \ln L_R} \bigg|_{steady-state} = \frac{\beta}{1-\theta}$$

If $\theta = 0.5$, $\beta = 0.5$, the long-run elasticity of $A$ with respect to $L_R$ is $0.5/0.5 = 1$ (proportional). A 10% increase in $L_R$ raises the long-run level of $A$ by 10%.

**d) Diagram: $\dot{g}_A/g_A$ vs $g_A$ (3 marks):**

The phase diagram for $g_A$:

$$\frac{\dot{g}_A}{g_A} = \beta n + (\theta-1)g_A$$

This is a linear function in $g_A$:
- Intercept: $\beta n$ (positive if $n>0$)
- Slope: $\theta-1$ (negative if $\theta<1$)

The steady state is at $g_A^* = \beta n/(1-\theta)$.

An increase in $L_R$ shifts the initial $g_A$ point to the right (higher $g_A$ on impact), but does not shift the $\dot{g}_A/g_A$ line itself (because the line depends on $n$ and $\theta$, not $L_R$). The economy then moves along the line back to $g_A^*$.

> **Exam Tip:** For the phase diagram, put $g_A$ on the horizontal axis and $\dot{g}_A/g_A$ on the vertical. The downward-sloping line crosses zero at $g_A^*$. Show the jump in $g_A$ from $L_R$ increase and the gradual return along the line to $g_A^*$.

> **Professor's Corner:** This exercise illustrates the crucial difference between impact effects and steady-state effects in semi-endogenous growth models. Policy-makers see the immediate boost in innovation rates and may conclude the policy is working, but the long-run growth rate is unchanged — only the level of technology is permanently higher.
>
> → *See also: [Q12](#q-endogrowth-01) (role of $a^L$), [Q14](#q-endogrowth-03) (semi vs fully endogenous)*

---

### Question 23 {#q-batch48-macro-03}

**Ramsey-Cass-Koopmans: Define and derive the Euler equation for the household's maximization problem. Describe the phase diagram in $(c, k)$ space. Compare the BGP of Solow and RCK regarding social optimum and Golden Rule. Determine the slope of the saddle path via Taylor approximation. [4+4+2+4]**

**Answer:**

> **Marking Guide [14 marks]:** Euler equation derivation (4) | Phase diagram description (4) | Social optimum vs Golden Rule comparison (2) | Saddle path slope via Taylor approximation (4)

**a) Euler equation (4 marks):**

See [Q11](#q-ramsey-05) for full derivation. The key result:

$$\frac{\dot{c}}{c} = \frac{1}{\theta} (f'(k) - \rho - \theta g - \delta)$$

**Intuition:** Consumption growth is positive when the marginal product of capital exceeds the effective discount rate. The intertemporal elasticity of substitution $1/\theta$ determines the magnitude of the response.

**b) Phase diagram (4 marks):**

See [Q7](#q-ramsey-01) for full description.

The $\dot{c}=0$ locus: vertical line at $k^*$ where $f'(k^*) = \rho + \theta g + \delta$.
The $\dot{k}=0$ locus: hump-shaped curve $c = f(k) - (n+g+\delta)k$.

Saddle path: unique convergent trajectory from any initial $k(0)$ to $(k^*, c^*)$.

**c) Solow vs RCK: Social optimum and Golden Rule (2 marks):**

See [Q8](#q-ramsey-02) for detailed comparison.

**Summary table:**

| Model | $k^*$ Condition | $k_{gold}$ Condition | Relationship |
|-------|----------------|---------------------|--------------|
| Solow | $s f(k^*) = (n+g+\delta)k^*$ | $f'(k_{gold}) = n+g+\delta$ | $k^*$ may be >, <, or = $k_{gold}$ |
| Ramsey | $f'(k^*) = \rho + \theta g + \delta$ | $f'(k_{gold}) = n+g+\delta$ | $k^* < k_{gold}$ (for $\rho > 0$) |

In Solow, $k^*$ can exceed $k_{gold}$ (dynamic inefficiency). In Ramsey, $k^*$ is always less than $k_{gold}$ because the household discounts the future ($\rho > 0$).

**d) Slope of saddle path via Taylor approximation (4 marks):**

See [Q9](#q-ramsey-03) for the full linearization.

The linearized system around $(k^*, c^*)$:

$$\begin{pmatrix} \dot{k} \\ \dot{c} \end{pmatrix} = J \begin{pmatrix} k - k^* \\ c - c^* \end{pmatrix}$$

where $J = \begin{pmatrix} f'(k^*) - (n+g+\delta) & -1 \\ \frac{c^*}{\theta} f''(k^*) & 0 \end{pmatrix}$.

The saddle path slope at steady state is:

$$\frac{dc}{dk} \bigg|_{sp} = \frac{c - c^*}{k - k^*} \text{ as } (k, c) \to (k^*, c^*)$$

The slope equals the eigenvector associated with the negative eigenvalue $\mu_1$:

$$\frac{dc}{dk} \bigg|_{sp} = \frac{c^* f''(k^*) / \theta}{\mu_1 - 0} = \frac{c^* f''(k^*)}{\theta \mu_1}$$

Since $f''(k^*) < 0$ and $\mu_1 < 0$, the product is positive — the saddle path slopes **upward** in $(k, c)$ space near the steady state.

For Cobb-Douglas with $\alpha = 1/3$, $\rho = 0.02$, $\theta = 1$:

$$\frac{dc}{dk} \bigg|_{sp} \approx \frac{(1-\alpha)(\rho + \theta g + \delta)}{\alpha} \cdot \frac{c^*}{k^*} > 0$$

The positive slope means that when $k(0) < k^*$, the optimal consumption $c(0)$ is below $c^*$ (households save to accumulate capital), and $c$ rises as the economy approaches steady state.

> **Exam Tip:** The saddle path slope calculation is a common stumbling block. Remember: the slope is positive because $f''(k) < 0$ and the stable eigenvalue $\mu_1 < 0$ — two negatives make a positive.

> **Professor's Corner:** The Taylor approximation gives more than just curvature information. The ratio $\mu_2/\mu_1$ (absolute values) determines how much faster consumption adjusts than capital. In the Ramsey model, consumption adjusts instantly (it is a "jump variable") while capital adjusts slowly — this is reflected in the saddle path being the unique stable trajectory.
>
> → *See also: [Q7](#q-ramsey-01) (phase diagram), [Q9](#q-ramsey-03) (speed of adjustment)*

---

### Question 24 {#q-batch48-macro-04}

**R&D Growth (Romer/GH/AGH): Critically explain the role of $a_L$ for knowledge accumulation. Analyze how changes in $n$ and $a_K$ affect the $\dot{g}_A=0$ and $\dot{g}_K=0$ lines. Compare $\beta+\theta<1$ vs $\beta+\theta=1$ with $n=0$. Explain the nature of knowledge and determinants of R&D allocation. [2+6+4+4]**

**Answer:**

> **Marking Guide [16 marks]:** Role of $a_L$ (2) | Changes in $n$ and $a_K$ (6) | Comparison of cases (4) | Nature of knowledge (4)

**a) Role of $a_L$ (2 marks):**

See [Q12](#q-endogrowth-01): $a_L$ has level effects but not long-run growth effects in the semi-endogenous framework ($\beta+\theta < 1$). This is because the steady-state $g_A$ is pinned down by $n$ and the R&D parameters, not the allocation of labor.

**b) Changes in $n$ and $a_K$ (6 marks):**

See [Q13](#q-endogrowth-02) for the full analysis. For the Batch 48 version, the changes are:

**(i) Decrease in $n$:**

- $\dot{g}_A=0$ shifts **up** (less negative intercept).
- $\dot{g}_K=0$ shifts **down** (since $g_K = g_A + n$).
- New steady state: lower $g_A^*$ and lower $g_K^*$.
- Intuition: slower population growth means fewer new researchers, reducing long-run knowledge growth.

**(ii) Increase in $a_K$ (capital share in R&D):**

- $\dot{g}_A=0$ slope becomes flatter ($(1-\phi)/\beta$ decreases).
- $\dot{g}_K=0$ unchanged.
- New steady state: higher $g_A^*$ and $g_K^*$.
- Intuition: more capital allocated to R&D raises the productivity of the R&D sector.

**c) $\beta+\theta<1$ vs $\beta+\theta=1$ with $n=0$ (4 marks):**

See [Q14](#q-endogrowth-03).

The key difference: $\beta+\theta<1$ gives a unique stable steady state for growth rates; $\beta+\theta=1$ with $n=0$ can generate sustained growth with the growth rate depending on $a_L$ and $a_K$.

**d) Nature of knowledge and determinants of R&D allocation (4 marks):**

See [Q15](#q-endogrowth-04).

Key points on **nature of knowledge**:
- **Non-rivalry:** Ideas can be used by any number of people simultaneously.
- **Partial excludability:** Patents provide temporary monopoly, but spillovers are pervasive.
- **Cumulative:** New knowledge builds on existing knowledge (standing on shoulders).

**Learning by doing (Arrow, 1962):** Knowledge also accumulates as a byproduct of production:
$$\dot{A} = \delta L$$
Individuals and firms learn from experience, and this learning spills over across the economy.

**Determinants of R&D allocation:**

| Determinant | Mechanism |
|-------------|-----------|
| Patent protection | Increases appropriability → more R&D |
| Market size | Larger markets → larger monopoly profits → more R&D |
| R&D subsidies | Reduce cost of R&D → more R&D labor allocation |
| Education | Increases supply and quality of researchers |
| Knowledge spillovers | Higher spillovers → lower private incentive to do R&D |
| Competition policy | More competition → less post-innovation profit → less R&D |

The **trade-off** central to endogenous growth: too much patent protection reduces spillovers (slowing future innovation), while too little reduces the incentive to innovate. Optimal patent design balances these forces.

> **Exam Tip:** The nature of knowledge question (part d) is the same across Batch 47 and 48. Memorize the three key features: non-rivalry, partial excludability, and cumulativeness. Reference Romer (1990) for the formal treatment.

> **Professor's Corner:** The concept of "learning by doing" connects to Bangladesh's RMG sector — workers and managers accumulated production experience that raised productivity over time without formal R&D. This form of endogenous growth is difficult to measure (it doesn't appear in patent data) but may be quantitatively important for developing countries.
>
> → *See also: [Q12](#q-endogrowth-01) (role of $a^L$), [Q15](#q-endogrowth-04) (nature of knowledge)*

---

### Question 25 {#q-batch48-macro-05}

**Convergence clubs, poverty traps, and multiple equilibria in growth: Discuss how these phenomena arise in models that extend the neoclassical framework. How do the policy implications differ from the standard Solow model? — Synthesized from Batch 47/48**

**Answer:**

> **Marking Guide [14 marks]:** Convergence clubs definition and mechanisms (4) | Poverty traps (4) | Multiple equilibria (3) | Policy implications (3)

**Convergence clubs:**

The Solow model predicts **conditional convergence** — poor countries grow faster than rich ones once we control for steady-state determinants. However, empirical evidence (Durlauf & Johnson, 1995) shows that countries cluster into "convergence clubs" — groups of countries converging to different steady states.

**Sources of convergence clubs:**

1. **Threshold externalities:** Production or technology adoption requires a minimum level of capital or institutional development before returns increase.
   - Example: A country needs a minimum stock of educated workers before FDI becomes productive.

2. **Complementarities:** The return to one activity depends on others engaging in it (e.g., R&D investment is more profitable when other firms also invest in R&D).

3. **Institutional traps:** Poor institutions persist because changing them is costly and the benefits are spread across society (Acemoglu & Robinson, 2012).

4. **Technology adoption thresholds:** Countries below a certain development level cannot adopt frontier technologies because of absorptive capacity constraints.

**Poverty traps:**

A **poverty trap** is a self-reinforcing mechanism that keeps countries at low income levels. Formally, it exists when the growth rate is negative below a threshold $k_{low}$ and positive above it.

**Diagram:** The $\dot{k}/k$ function is non-linear — it is negative for $k \in (0, k_{low})$, positive for $k \in (k_{low}, k^*)$, and negative again for $k > k^*$. This creates **two stable steady states** ($k=0$ and $k^*$) with an unstable threshold at $k_{low}$.

**Common mechanisms:**

| Mechanism | Description | Example |
|-----------|-------------|---------|
| Nutrition-based trap | Low income → poor nutrition → low productivity → low income (Dasgupta, 1997) | Sub-Saharan Africa |
| Demographic trap | High mortality → high fertility → low education spending → low productivity | Pre-industrial societies |
| Credit constraints | Low income → no collateral/no saving → low investment → low income | Microcredit failures |
| Big Push | Coordination failures prevent industrialization (Rosenstein-Rodan, 1943) | Multiple equilibria |

**Multiple equilibria:**

Multiple equilibria arise when the growth rate of capital $\dot{k}/k$ is a non-monotonic function of $k$.

**Source:** Increasing returns in the production function or in the saving/investment process. For example, if $sf(k)/k$ is not monotonically decreasing (due to threshold effects in saving or technology adoption), there can be multiple intersections with $(n+g+\delta)$.

**An extension of the Solow model with multiple equilibria:**

Modify the saving function to be non-linear: $s(k)$ where $s(k)$ is low for low $k$ (poor can't save) and high for high $k$ (rich can save). The condition for steady state becomes:

$$s(k) f(k) = (n+g+\delta)k$$

If $s(k)$ is S-shaped (low, then rising, then plateauing), there can be three intersections with the break-even line — the middle one is unstable, the outer two are stable.

**Policy implications:**

| Model | Policy Implication |
|-------|-------------------|
| **Standard Solow** | Policies have level effects only. Growth is exogenous. Best policy: raise $s$, reduce $n$, adopt technology. |
| **Convergence clubs** | Once-off interventions can shift a country from one club to another. Foreign aid, education investment, and institutional reform can have persistent effects. |
| **Poverty traps** | **Big Push** needed: coordinated investment across multiple sectors simultaneously (Sachs, 2005). Piecemeal reform is ineffective because of complementarities. |
| **Multiple equilibria** | **History vs expectations** (Krugman, 1991): a country's trajectory depends not just on fundamentals but on self-fulfilling expectations. Policy can coordinate expectations toward the good equilibrium. |

**Solow model vs extended frameworks:**

| Feature | Solow | Extended (Convergence Clubs/Poverty Traps) |
|---------|-------|-------------------------------------------|
| Convergence | Conditional — all countries converge to own $k^*$ | Countries cluster in clubs — can be stuck at low $k$ |
| Steady states | Unique | Multiple (stable and unstable) |
| Policy role | Level effects only | Can shift between equilibria |
| Dynamics | Global stability | Local stability with thresholds |
| Development policy | Raise $s$, control $n$ | Big Push, coordination, institutional reform |

**Bangladesh context:** Bangladesh's growth trajectory is often cited as a "development paradox" — it achieved rapid growth and poverty reduction despite weak institutions and governance (Kabeer, 2020). This suggests Bangladesh has escaped a potential poverty trap through: (1) the RMG export boom providing a big push in employment and female labor force participation, (2) remittances providing a stable income floor, and (3) NGOs and microfinance addressing credit constraints at the micro level.

> **Exam Tip:** This is a synthesis question, not from a single source. Draw the diagram with multiple steady states: the $\dot{k}/k$ curve crossing zero at three points. Label the stable steady states (outer intersections) and the unstable threshold (middle intersection). Explain how the Big Push shifts the economy past the threshold.

> **Professor's Corner:** The convergence club literature (Durlauf & Johnson, 1995; Quah, 1996) directly challenges the Barro/MRW convergence results. Using nonparametric methods, Quah shows the cross-country income distribution is becoming "twin-peaked" — rich and poor country clubs are diverging from each other, contradicting the simple convergence prediction. The policy implication is radical: aid and reform must be massive and coordinated (Sachs-style Big Push), not incremental.
>
> → *See also: [Q5](#q-solow-05) (conditional convergence critique)*

---

# Key Formulas

| Concept | Formula | Parameters |
|---------|---------|------------|
| **Solow fundamental equation** | $\dot{k} = s k^\alpha - (n+g+\delta)k$ | $\alpha$: capital share |
| **Solow steady-state $k^*$** | $k^* = \left( \frac{s}{n+g+\delta} \right)^{1/(1-\alpha)}$ | |
| **Solow steady-state $y^*$** | $y^* = \left( \frac{s}{n+g+\delta} \right)^{\alpha/(1-\alpha)}$ | |
| **Speed of convergence (Solow)** | $\lambda_{solow} = (1-\alpha)(n+g+\delta)$ | Half-life: $\ln 2 / \lambda$ |
| **Golden Rule** | $f'(k_{gold}) = n+g+\delta$ | Max $c^*$ condition |
| **Ramsey Euler equation** | $\frac{\dot{c}}{c} = \frac{1}{\theta}(f'(k) - \rho - \theta g - \delta)$ | $\theta$: CRRA, $\rho$: discount |
| **Ramsey steady-state $k^*$** | $k^* = \left( \frac{\alpha}{\rho + \theta g + \delta} \right)^{1/(1-\alpha)}$ | |
| **Modified Golden Rule** | $f'(k^*) = \rho + \theta g + \delta$ | $k^* < k_{gold}$ |
| **R&D knowledge accumulation** | $\dot{A} = B (a^K K)^\beta (a^L L)^\theta A^\phi$ | |
| **Knowledge growth rate** | $\dot{g}_A/g_A = \beta g_K + \theta n + (\phi-1)g_A$ | |
| **Steady-state $g_A$ (semi-endogenous)** | $g_A^* = \frac{(\theta + \beta)n}{1 - \phi - \beta}$ | |
| **Steady-state $g_K$ (BGP)** | $g_K^* = g_A + n$ | |
| **Ramsey speed of convergence** | $\mu \approx \frac{1}{2}\left( Tr + \sqrt{Tr^2 - 4Det} \right)$ | See [Q9](#q-ramsey-03) |
| **Balanced growth condition** | $g_Y = g_K = g_A + n$ | BGP $K/Y$ constant |
| **Solow growth accounting** | $\dot{Y}/Y = \dot{A}/A + \alpha \dot{K}/K + (1-\alpha)\dot{L}/L$ | Solow residual: TFP |

---

> **Cross-Reference Index:**
> - Solow model: Questions [1–6](#q-solow-01), [16–17](#q-batch47-macro-01), [21](#q-batch48-macro-01)
> - Ramsey model: Questions [7–11](#q-ramsey-01), [18–19](#q-batch47-macro-03), [23](#q-batch48-macro-03)
> - Endogenous growth & R&D: Questions [12–15](#q-endogrowth-01), [20](#q-batch47-macro-05), [22](#q-batch48-macro-02), [24](#q-batch48-macro-04)
> - Convergence clubs & poverty traps: Questions [5](#q-solow-05), [25](#q-batch48-macro-05)
> - Bangladesh connections: Questions [2](#q-solow-02), [5](#q-solow-05), [25](#q-batch48-macro-05)
