# Solow Growth Model — Complete Basics

> **Exam weight:** ⭐ S-tier — 3 of 5 sources contain Solow questions. The single most important growth model.
> **Cheat sheet reference:** See also [Exam Cheat Sheet](./EXAM-CHEAT-SHEET.md) for one-page formulas.
> **Practice questions:** [answers-macroeconomics.md Q1–Q6](../ANSWERS/answers-macroeconomics.md#section-1--solow-growth-model)

---

## 1. Why It's Called Neoclassical (6 features)

| # | Feature | Meaning |
|---|---------|---------|
| 1 | **CRS** | $F(\lambda K, \lambda AL) = \lambda F(K, AL)$ — double inputs → double output |
| 2 | **Diminishing MP** | $F_K > 0,\; F_{KK} < 0$ — each extra machine adds less to output |
| 3 | **Inada conditions** | $\lim_{K\to0} F_K = \infty$, $\lim_{K\to\infty} F_K = 0$ — ensures interior steady state |
| 4 | **Perfect competition** | Factors paid $MP$: $r = MPK - \delta$, $w = MPL$ |
| 5 | **Exogenous $s$** | Saving rate is fixed (not chosen by households) |
| 6 | **Exogenous $g, n$** | Technology grows at $g$, population at $n$ — both given |

> **Exam tip:** Q1 asks exactly this. Memorise all 6.

---

## 2. The One Equation — $\dot{k}$ Derivation

**Capital accumulation identity:**

$$\dot{K} = sY - \delta K$$

**Define per-effective-worker:**

$$k \equiv \frac{K}{AL}, \qquad y \equiv \frac{Y}{AL} = f(k)$$

**Take logs and differentiate:**

$$\ln k = \ln K - \ln A - \ln L$$

$$\frac{\dot{k}}{k} = \frac{\dot{K}}{K} - g - n$$

**Substitute $\dot{K}/K = sY/K - \delta = sf(k)/k - \delta$:**

$$\frac{\dot{k}}{k} = \frac{sf(k)}{k} - (n + g + \delta)$$

**Multiply through by $k$:**

$$\boxed{\dot{k} = s f(k) - (n + g + \delta) k}$$

| Term | Meaning |
|------|---------|
| $sf(k)$ | **Actual investment** per effective worker |
| $(n+g+\delta)k$ | **Break-even investment** — keeps $k$ constant as $A,L$ grow and capital depreciates |

**Convergence logic:**

- $k < k^*$: $sf(k) > (n+g+\delta)k$ → $\dot{k} > 0$ → $k$ rises
- $k > k^*$: $sf(k) < (n+g+\delta)k$ → $\dot{k} < 0$ → $k$ falls
- $k = k^*$: stable steady state

---

## 3. Steady State (Cobb-Douglas)

**Production:** $Y = K^\alpha (AL)^{1-\alpha}$, $y = f(k) = k^\alpha$

**Set $\dot{k} = 0$:**

$$s k^\alpha = (n+g+\delta) k$$

$$k^* = \left(\frac{s}{n+g+\delta}\right)^{\frac{1}{1-\alpha}}$$

**Then:**

$$y^* = k^{*\alpha} = \left(\frac{s}{n+g+\delta}\right)^{\frac{\alpha}{1-\alpha}}$$

$$c^* = (1-s) y^* = (1-s) \left(\frac{s}{n+g+\delta}\right)^{\frac{\alpha}{1-\alpha}}$$

**Elasticities:**

| Elasticity | Formula | $\alpha = 1/3$ |
|---|---|---|
| $y^*$ wrt $s$ | $\varepsilon_{y^*,s} = \frac{\alpha}{1-\alpha}$ | 0.5 |
| $y^*$ wrt $n$ | $\varepsilon_{y^*,n} = -\frac{\alpha}{1-\alpha} \cdot \frac{n}{n+g+\delta}$ | ~0.078 |

---

## 4. The Solow Diagram (Draw This Blindfolded)

```text
                    ▲
                    │
                    │    ┌── (n+g+δ)k   (break-even line)
                    │   /               slope = n+g+δ
                    │  /
                    │ /  ┌── sf(k)      (actual investment)
                    │/  /               concave, f'' < 0
                    ●──/──────────────────► k
                   k*
```

- **Left of $k^*$**: $\dot{k} > 0$ (arrow right)
- **Right of $k^*$**: $\dot{k} < 0$ (arrow left)
- **At $k^*$**: stable equilibrium

---

## 5. Balanced Growth Path (BGP) Growth Rates

| Variable | Per effective worker | Per worker ($/div A$) | Aggregate |
|---|---|---|---|
| $k$ | **0** (constant $k^*$) | $g$ | $n+g$ |
| $y$ | **0** (constant $y^*$) | $g$ | $n+g$ |
| $c$ | **0** (constant $c^*$) | $g$ | $n+g$ |
| $K$ | — | — | $n+g$ |
| $Y$ | — | — | $n+g$ |

**Key insight:** Only $g$ (technology) drives long-run per-capita growth. Saving $s$ has **level effects only**, not growth effects.

**Proof:** $\ln y(t) = \ln A(0) + gt + \frac{\alpha}{1-\alpha}[\ln s - \ln(n+g+\delta)]$

Differentiate: $\frac{\partial \ln y(t)}{\partial t} = g$, independent of $s$.

---

## 6. Golden Rule

**Question:** What saving rate $s$ maximizes steady-state consumption $c^*$?

$$c^* = f(k^*) - (n+g+\delta)k^*$$

$$\frac{\partial c^*}{\partial k^*} = f'(k_{gold}) - (n+g+\delta) = 0$$

$$\boxed{f'(k_{gold}) = n+g+\delta}$$

**For Cobb-Douglas** $f(k) = k^\alpha$:

$$k_{gold} = \left(\frac{\alpha}{n+g+\delta}\right)^{\frac{1}{1-\alpha}}$$

$$s_{gold} = \alpha \quad (\text{typically } 1/3)$$

**$c^*(s)$ is hump-shaped:** rises then falls, peaking at $s = \alpha$.

| $s$ relative to $\alpha$ | $k^*$ relative to $k_{gold}$ | Efficiency |
|---|---|---|
| $s < \alpha$ | $k^* < k_{gold}$ | **Dynamically efficient** (under-accumulated) |
| $s = \alpha$ | $k^* = k_{gold}$ | **Golden Rule** (max $c^*$) |
| $s > \alpha$ | $k^* > k_{gold}$ | **Dynamically inefficient** (over-accumulated) |

**Welfare analysis** (starting FROM $k_{gold}$, raise $s$):

1. **Impact:** $c$ drops immediately (more saving, less consumption)
2. **Transition:** $k$ rises toward higher $k^{**}$
3. **New steady state:** $c^{**} < c_{gold}$ because $c^*$ is maximized at $k_{gold}$
4. **Result:** Permanent welfare loss — initial sacrifice is never compensated

> **Exam tip:** This is Q4. Show the envelope theorem logic — at $k_{gold}$, small change in $s$ has zero first-order effect on $c^*$ but negative second-order effect.

---

## 7. Speed of Convergence

**Taylor-expand $\dot{k}$ around $k^*$:**

$$\dot{k} = -\underbrace{(1-\alpha)(n+g+\delta)}_{\lambda} (k - k^*)$$

$$\boxed{\lambda = (1-\alpha)(n+g+\delta)}$$

**Calibration ($\alpha = 1/3$, $n+g+\delta = 0.08$):**

$$\lambda \approx \left(1-\frac{1}{3}\right) \times 0.08 = 0.053$$

**Half-life:**

$$t_{1/2} = \frac{\ln 2}{\lambda} \approx \frac{0.693}{0.053} \approx \textbf{13 years}$$

---

## 8. Comparative Statics (Shock Analysis)

| Shock | What shifts | $k^*$ effect | Intuition |
|---|---|---|---|
| $\delta \downarrow$ | $(n+g+\delta)k$ rotates **down** | $k^* \uparrow$ | Less depreciation → more net investment |
| $n \downarrow$ | $(n+g+\delta)k$ rotates **down** | $k^* \uparrow$ | Slower workforce growth → less dilution |
| $s \uparrow$ | $sf(k)$ shifts **up** | $k^* \uparrow$ | More saving → more investment |
| $g \uparrow$ | $(n+g+\delta)k$ rotates **up** | $k^* \downarrow$ | Faster tech growth → more effective workers to equip |
| $\alpha \uparrow$ | $sf(k)$ shape changes | ambiguous | Higher capital share → ambiguous effect |

### Bangladesh Example: Demographic Transition

- **Fertility fell:** 6.6 (1975) → 2.2 (2023)
- **Effect:** $n \downarrow$ → break-even line rotates down → $k^* \uparrow$
- **Result:** Permanent level effect on per-capita income
- **Caveat:** Dividend realized only if increased saving is efficiently invested

> **Exam tip:** Always draw the Solow diagram **before and after** the shock. Two lines — original and new — with clear axis labels and arrow directions.

---

## 9. Growth Accounting

$$\frac{\dot{Y}}{Y} = \underbrace{\frac{\dot{A}}{A}}_{\text{TFP / Solow residual}} + \alpha \frac{\dot{K}}{K} + (1-\alpha) \frac{\dot{L}}{L}$$

- $\alpha \approx 1/3$ = capital share of income
- Solow residual = output growth **not explained** by capital and labor growth
- Measures **technological progress** / total factor productivity (TFP)

---

## 10. Conditional vs Absolute Convergence

| Type | Claim | Evidence |
|---|---|---|
| **Absolute convergence** | Poor countries grow faster **regardless** of characteristics | ❌ **Fails** — no clear pattern |
| **Conditional convergence** | Poor grows faster **controlling for** $s, n, A(0)$ | ✅ **Supported** (Barro 1991, MRW 1992) |

**MRW (1992) augmented Solow** adds human capital $H$:

$$Y = K^\alpha H^\beta (AL)^{1-\alpha-\beta}$$

- Explains ~80% of cross-country income variation (vs ~60% for basic Solow)
- Conditional convergence rate: ~2-3% per year

**Why convergence fails for developing countries:**

1. **Institutions** — property rights, rule of law, corruption
2. **Human capital gaps** — education, health
3. **Structural change** — agriculture → industry → services
4. **Resource curse** — Dutch disease, governance failures

### Convergence Clubs (Q19)

- S-shaped $s(k)f(k)$ creates **3 intersections** with break-even line
- 2 stable steady states (poverty trap at low $k$, wealthy at high $k$)
- 1 unstable threshold in the middle
- **Policy implication:** Big Push — coordinated investment across sectors to escape poverty trap
- Bangladesh context: RMG sector growth as a structural transformation

---

## 11. Summary Table — Solow at a Glance

| Concept | Formula | Exam-ready |
|---|---|---|
| Production (CD) | $y = k^\alpha$ | ✅ |
| Capital dynamics | $\dot{k} = s k^\alpha - (n+g+\delta)k$ | ✅ **Derive this** |
| Steady state $k^*$ | $\left(\frac{s}{n+g+\delta}\right)^{1/(1-\alpha)}$ | ✅ **Memorise** |
| Steady state $y^*$ | $\left(\frac{s}{n+g+\delta}\right)^{\alpha/(1-\alpha)}$ | ✅ |
| Golden Rule $s_{gold}$ | $\alpha$ | ✅ **Prove this** |
| Convergence speed $\lambda$ | $(1-\alpha)(n+g+\delta)$ | ✅ **Calibrate** |
| Half-life | $\ln 2 / \lambda \approx 13$ years | ✅ |
| BGP per-capita growth | $g$ (technology only) | ✅ |
| Growth accounting | $\dot{Y}/Y = \dot{A}/A + \alpha \dot{K}/K + (1-\alpha)\dot{L}/L$ | ✅ |

---

## ⏱ Exam Drills — Can You Do These?

1. **Derive $\dot{k}$** (3 steps: $\dot{K} \to \ln k \to$ boxed equation) → 2 min
2. **Solve for $k^*, y^*, c^*$** with Cobb-Douglas → 2 min
3. **Prove $s_{gold} = \alpha$** → 2 min
4. **Draw Solow diagram** with all labels, show $\delta\downarrow$ shock → 3 min
5. **Compute $\lambda$** with $\alpha=1/3$, $n+g+\delta=0.08$, find half-life → 1 min
6. **Explain level vs growth effect** — differentiate $\ln y(t)$ → 2 min
7. **Growth accounting** — decompose output growth into TFP, capital, labor → 2 min
8. **Conditional convergence** — define, contrast with absolute, give 2 reasons for failure → 3 min

> **Master these 8 drills and the Solow block is locked.**
> Next: [Ramsey-Cass-Koopmans Model](./EXAM-CHEAT-SHEET.md#ramsey-cass-koopmans)
