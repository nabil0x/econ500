# Answers: Overlapping Generations (OLG) Model

## Exam-ready Revision Notes — Econ 501/502

> **Math convention:** All equations use LaTeX notation. GitHub renders them natively.
> Display equations use `$$ ... $$`, inline formulas use `$ ... $`.
> Questions drawn from the Diamond (1965) OLG model, Batch 47 MSc 2022 and Batch 48 MSc 2023.
> Sources: [../GUIDE/GLOSSARY.md](../GUIDE/GLOSSARY.md) (#term-olgi, #term-dynamic-inefficiency), [EXAM-CHEAT-SHEET.md](../GUIDE/EXAM-CHEAT-SHEET.md) (OLG section), [answers-macroeconomics.md](./answers-macroeconomics.md).

---

# Overlapping Generations (Diamond OLG)

> **Model structure:** Discrete time, two-period lives (young and old). Each generation works when young, earns wage $w_t$, consumes $c_{1t}$ and saves $s_t$; when old consumes $c_{2,t+1} = (1+r_{t+1})s_t$. Population grows at rate $n$, technology at rate $g$. Production $Y_t = F(K_t, A_tL_t)$ satisfies CRS and Inada conditions.

---

### Question 26 — OLG Individual Maximization and Dynamics {#q-olg-batch47-q4}

**Two-period OLG: $Y_t = F(K_t, A_tL_t)$ with CRS, Inada conditions. $A_{t+1} = (1+g)A_t$, $L_{t+1} = (1+n)L_t$. Discrete time, two-period lives. [5+2+3+4]**

**(a) Solve the individual's maximization problem where $\theta$ determines how consumption varies in response to differences between $r$ and $\rho$. Explain income and substitution effects on consumption and saving. [5 marks]**

**(b) Find an expression for $k_{t+1}$ as a function of $k_t$. [2 marks]**

**(c) Describe how each affects $k_{t+1}$ as a function of $k_t$: (i) $g\uparrow$, (ii) $\rho\downarrow$, (iii) $G\uparrow$ (permanent govt purchases). [3 marks]**

**(d) Find the speed of convergence of $k$ to $k^*$. How does it differ from Solow? [4 marks]**

**Answer:**

> **Marking Guide [14 marks]:** Euler equation derivation and income/substitution effects (5) | $k_{t+1}$ expression with log utility and Cobb-Douglas (2) | Comparative statics — three shifts (3) | Convergence speed derivation and Solow comparison (4)
>
> **High-Yield** — The OLG model differs from Ramsey in three key ways: (1) finite lives create no transversality condition for the economy, (2) saving depends on wage income of the young, (3) dynamic inefficiency is possible.

---

**(a) Individual maximization and income/substitution effects [5 marks]:**

The representative individual born at time $t$ faces:

$$\max_{c_{1t}, c_{2,t+1}} \; U_t = u(c_{1t}) + \frac{1}{1+\rho} \, u(c_{2,t+1})$$

subject to the lifetime budget constraint:

$$c_{1t} + \frac{c_{2,t+1}}{1+r_{t+1}} = w_t$$

where $\rho > 0$ is the discount rate, $w_t$ is the real wage (young earn all labor income), and $r_{t+1}$ is the real return on saving from $t$ to $t+1$.

**Euler equation:** Form the Lagrangian $\mathcal{L} = u(c_{1t}) + \frac{1}{1+\rho}u(c_{2,t+1}) + \lambda\bigl(w_t - c_{1t} - \frac{c_{2,t+1}}{1+r_{t+1}}\bigr)$:

$$\frac{\partial \mathcal{L}}{\partial c_{1t}} = u'(c_{1t}) - \lambda = 0 \quad\Longrightarrow\quad \lambda = u'(c_{1t})$$

$$\frac{\partial \mathcal{L}}{\partial c_{2,t+1}} = \frac{1}{1+\rho} u'(c_{2,t+1}) - \frac{\lambda}{1+r_{t+1}} = 0$$

Eliminating $\lambda$ gives the **OLG Euler equation**:

$$\boxed{\frac{u'(c_{1t})}{u'(c_{2,t+1})} = \frac{1+r_{t+1}}{1+\rho}}$$

**Interpretation:** When $r_{t+1} > \rho$, the marginal utility of young consumption exceeds that of old consumption, so $c_{1t} < c_{2,t+1}$ — the individual tilts consumption toward old age. When $r_{t+1} = \rho$, consumption is perfectly smoothed ($c_{1t} = c_{2,t+1}$).

**CRRA utility:** $u(c) = \frac{c^{1-\theta}}{1-\theta}$ with $\theta > 0$ and $u'(c) = c^{-\theta}$. The Euler equation becomes:

$$\left( \frac{c_{2,t+1}}{c_{1t}} \right)^{\theta} = \frac{1+r_{t+1}}{1+\rho} \quad\Longrightarrow\quad \frac{c_{2,t+1}}{c_{1t}} = \left( \frac{1+r_{t+1}}{1+\rho} \right)^{1/\theta}$$

**Income vs substitution effects (role of $\theta$):** When $r_{t+1}$ rises:

| Effect | Mechanism | Direction |
|--------|-----------|-----------|
| **Substitution effect** | Higher $r$ makes future consumption cheaper relative to present | $\uparrow$ saving, $\downarrow c_{1t}$ |
| **Income effect** | Higher $r$ means each unit saved yields more future consumption — can afford more $c_{1t}$ | $\downarrow$ saving, $\uparrow c_{1t}$ |

The **intertemporal elasticity of substitution (IES)** is $1/\theta$:

- If $\theta < 1$ (IES $> 1$, high substitutability): substitution effect dominates — saving **rises** with $r$.
- If $\theta > 1$ (IES $< 1$, low substitutability): income effect dominates — saving may **fall** with $r$.
- If $\theta = 1$ (log utility): income and substitution effects exactly cancel — saving is **independent** of $r$. The saving rate becomes constant: $s_t = w_t/(2+\rho)$.

---

**(b) Expression for $k_{t+1}$ as a function of $k_t$ [2 marks]:**

Under **log utility** ($\theta = 1$) and **Cobb-Douglas production** ($f(k) = k^\alpha$):

From the budget and Euler equation with $\theta = 1$:

$$c_{1t} = \frac{1+\rho}{2+\rho} w_t, \qquad s_t = w_t - c_{1t} = \frac{w_t}{2+\rho}$$

The real wage equals the marginal product of labor:

$$w_t = A_t \bigl[f(k_t) - k_t f'(k_t)\bigr] = A_t (1-\alpha) k_t^\alpha$$

Capital accumulates from the saving of the young: $K_{t+1} = s_t L_t$. Converting to per-effective-worker terms:

$$k_{t+1} = \frac{K_{t+1}}{A_{t+1} L_{t+1}} = \frac{s_t L_t}{(1+g)A_t (1+n)L_t} = \frac{s_t}{(1+g)(1+n)}$$

Substituting $s_t$ and $w_t$:

$$\boxed{k_{t+1} = \frac{(1-\alpha) k_t^\alpha}{(2+\rho)(1+g)(1+n)} \equiv D \, k_t^\alpha}$$

where $D \equiv \frac{1-\alpha}{(2+\rho)(1+g)(1+n)}$. This is a first-order non-linear difference equation. The steady state $k^*$ satisfies $k^* = D k^{*\alpha}$, giving:

$$k^* = \left( \frac{1-\alpha}{(2+\rho)(1+g)(1+n)} \right)^{\frac{1}{1-\alpha}}$$

---

**(c) Comparative statics on $k_{t+1}$ function [3 marks]:**

The shift parameter $D = (1-\alpha)/[(2+\rho)(1+g)(1+n)]$ determines the position of the $k_{t+1}$ curve.

**(i) Rise in $g$ (technological progress):**

$$D \downarrow \quad\Longrightarrow\quad k_{t+1} \text{ shifts down}$$

Intuition: Faster technological progress means more effective workers in period $t+1$, diluting capital per effective worker. Analogous to the Solow model where $(n+g+\delta)k$ rotates up when $g$ rises. The steady-state $k^*$ falls.

**(ii) Fall in $\rho$ (more patient):**

$$D \uparrow \quad\Longrightarrow\quad k_{t+1} \text{ shifts up}$$

Intuition: A lower discount rate $\rho$ means individuals value the future more — they save a larger fraction of wage income ($s_t = w_t/(2+\rho)$ increases). More saving translates to higher capital accumulation.

**(iii) Permanent increase in government purchases $G$:**

Government spending must be financed. Under lump-sum taxation of the **young** (the typical OLG assumption):

$$c_{1t} + \frac{c_{2,t+1}}{1+r_{t+1}} = w_t - T_t$$

where $T_t$ is the lump-sum tax. Disposable income falls, reducing saving:

$$s_t = \frac{w_t - T_t}{2+\rho} \quad\Longrightarrow\quad k_{t+1} = \frac{(1-\alpha)k_t^\alpha - \tilde{T}_t}{(2+\rho)(1+g)(1+n)}$$

where $\tilde{T}_t = T_t/A_t$ is tax per effective worker. The $k_{t+1}$ curve shifts **down**. If government spending is on **consumption** (not productive investment), there is no offsetting productivity gain — steady-state capital per worker is permanently lower.

| Shock | Direction of shift | Mechanism |
|-------|-------------------|-----------|
| $g\uparrow$ | $\downarrow$ | More effective workers dilute $k_{t+1}$ |
| $\rho\downarrow$ | $\uparrow$ | Higher saving rate (more patient) |
| $G\uparrow$ (tax on young) | $\downarrow$ | Lower disposable income reduces saving |

---

**(d) Speed of convergence vs Solow [4 marks]:**

From $k_{t+1} = D k_t^\alpha$, take logs around steady state:

$$\ln k_{t+1} = \ln D + \alpha \ln k_t$$

$$\ln k_{t+1} - \ln k^* = \alpha (\ln k_t - \ln k^*)$$

The gap shrinks by factor $\alpha$ each period. The discrete-time convergence parameter is:

$$\boxed{\lambda_{OLG} = 1 - \alpha}$$

With $\alpha = 1/3$, this gives $\lambda_{OLG} \approx 0.667$ (per period in discrete time).

**Comparison with Solow:**

| Feature | OLG (log utility) | Solow |
|---------|-------------------|-------|
| **Convergence rate** | $\lambda = 1 - \alpha$ | $\lambda = (1-\alpha)(n+g+\delta)$ |
| **Determinants** | Only capital share $\alpha$ | $\alpha$, $n$, $g$, $\delta$ |
| **Typical value** | $\approx 0.67$ | $\approx 0.05$ per year |
| **Saving behavior** | Endogenous (optimizing) | Exogenous (constant $s$) |

**Why the difference?**
- In OLG with log utility, saving is proportional to wages ($s_t = w_t/(2+\rho)$), and wages are proportional to $k_t^\alpha$. This creates a direct geometric link between $k_t$ and $k_{t+1}$ with coefficient $\alpha$, independent of $n+g+\delta$.
- In Solow, the saving rate $s$ is constant but capital depreciates and is diluted by $n+g$, producing the slower convergence rate $(1-\alpha)(n+g+\delta)$.
- For typical calibration ($\alpha = 1/3$, $n+g+\delta = 0.08$), OLG converges **faster** in discrete-time terms. However, a direct apples-to-apples comparison requires converting to common units (continuous-time half-lives).

> **Exam Tip (Part a):** Write the Lagrangian with $\lambda$, derive both FOCs, and eliminate $\lambda$ to get the Euler equation. Always distinguish the $\theta < 1$, $\theta = 1$, and $\theta > 1$ cases for income vs substitution effects.
>
> **Exam Tip (Parts b-d):** For the $k_{t+1}$ derivation, show each algebraic step: $s_t$ from budget, $w_t$ from Cobb-Douglas, then the capital accumulation identity. For convergence, the key is the log-linearization yielding coefficient $\alpha$. Compare directly with Solow's $(1-\alpha)(n+g+\delta)$.
>
> **Professor's Corner:** The OLG model's convergence speed being independent of $n+g+\delta$ (under log utility) is a striking result. It arises because saving is proportional to wages, and wages depend only on $k_t$ and $A_t$ — the $n$ and $g$ parameters affect the level of $k_{t+1}$ (through the denominator of $D$) but not the eigenvalue $\alpha$ governing the transition. With general CRRA, the convergence speed depends on $\theta$, creating richer dynamics.
>
> → *See also: ../GUIDE/GLOSSARY.md [#term-olgi-model](./../GUIDE/GLOSSARY.md#term-olgi-model), [#term-speed-of-convergence](./../GUIDE/GLOSSARY.md#term-speed-of-convergence), [#term-dynamic-inefficiency](./../GUIDE/GLOSSARY.md#term-dynamic-inefficiency). Compare with [Ramsey convergence speed in Q9](./answers-macroeconomics.md#q-ramsey-03).*

---

### Question 27 — OLG Dynamics and Dynamic Inefficiency {#q-olg-batch48-q4}

**Two-period OLG: $Y_t = F(K_t, A_tL_t)$, CRS, Inada conditions. $A_{t+1} = (1+g)A_t$, $L_{t+1} = (1+n)L_t$. Discrete time. [4+3+4+5]**

**(a) Solve individual's maximization problem where $\theta$ determines response to $r$ vs $\rho$ differences. [4 marks]**

**(b) Find the speed of convergence of $k$ to $k^*$. How does it differ from Solow? [3 marks]**

**(c) Describe how each affects $k_{t+1}$ as a function of $k_t$: (i) Rise in $n$, (ii) Fall in $\rho$. [4 marks]**

**(d) After relaxing log utility and Cobb-Douglas assumptions, what possibilities exist for $k_{t+1}$ vs $k_t$? Is there possibility of dynamic inefficiency? [5 marks]**

**Answer:**

> **Marking Guide [16 marks]:** Euler equation with CRRA (4) | Convergence speed with Solow comparison (3) | Comparative statics — two shifts (4) | General utility, multiple steady states, dynamic inefficiency (5)
>
> **High-Yield** — Dynamic inefficiency is the signature OLG result. Unlike Ramsey, where $k^* < k_{gold}$ always holds, OLG can generate $k^* > k_{gold}$ (over-accumulation). This is a market failure caused by the absence of intergenerational coordination.

---

**(a) Individual maximization [4 marks]:**

See the derivation in [Q26(a)](#q-olg-batch47-q4). The key results:

$$\boxed{\frac{u'(c_{1t})}{u'(c_{2,t+1})} = \frac{1+r_{t+1}}{1+\rho}}$$

For CRRA utility $u(c) = c^{1-\theta}/(1-\theta)$:

$$\frac{c_{2,t+1}}{c_{1t}} = \left( \frac{1+r_{t+1}}{1+\rho} \right)^{1/\theta}$$

The parameter $\theta = 1/\text{IES}$ governs the consumption response:

- $\theta < 1$ (IES $> 1$): consumption growth is **elastic** to $r - \rho$ — substitution effect dominates.
- $\theta > 1$ (IES $< 1$): consumption growth is **inelastic** — income effect dominates.
- $\theta = 1$ (log utility): $s_t = w_t/(2+\rho)$, independent of $r_{t+1}$.

---

**(b) Speed of convergence vs Solow [3 marks]:**

Under log utility ($\theta = 1$) and Cobb-Douglas ($f(k) = k^\alpha$):

$$k_{t+1} = \frac{(1-\alpha)k_t^\alpha}{(2+\rho)(1+g)(1+n)}$$

Log-linearizing: $\ln k_{t+1} - \ln k^* = \alpha (\ln k_t - \ln k^*)$, giving:

$$\boxed{\lambda_{OLG} = 1 - \alpha}$$

**Solow comparison:** The Solow continuous-time convergence speed is $\lambda_{Solow} = (1-\alpha)(n+g+\delta)$.

| Aspect | OLG | Solow |
|--------|-----|-------|
| $\lambda$ expression | $1-\alpha$ | $(1-\alpha)(n+g+\delta)$ |
| Depends on $n,g,\delta$? | No | Yes |
| Typical value | $\approx 0.67$ | $\approx 0.05$ per year |
| $\alpha \uparrow$ effect | $\lambda \downarrow$ (slower) | $\lambda \downarrow$ (slower) |
| $n \uparrow$ effect | None | $\lambda \uparrow$ (faster) |

The fundamental difference: OLG convergence speed derives from the **wage—saving—capital** channel which, with log utility, involves only $\alpha$. Solow convergence depends additionally on the **depreciation and dilution** of capital through $n+g+\delta$.

---

**(c) Comparative statics on $k_{t+1}$ [4 marks]:**

Recall $k_{t+1} = D k_t^\alpha$ where $D = \frac{1-\alpha}{(2+\rho)(1+g)(1+n)}$.

**(i) Rise in $n$ (population growth):**

$$n \uparrow \;\Longrightarrow\; D \downarrow \;\Longrightarrow\; k_{t+1} \text{ shifts down}$$

Intuition: Faster population growth means more young workers in period $t+1$, so the same capital stock must be spread across more effective workers. The $k_{t+1}$ curve rotates downward, and $k^*$ falls. This mirrors the Solow effect where $(n+g+\delta)k$ steepens.

**(ii) Fall in $\rho$ (more patient):**

$$\rho \downarrow \;\Longrightarrow\; D \uparrow \;\Longrightarrow\; k_{t+1} \text{ shifts up}$$

Intuition: Lower $\rho$ means a higher saving rate $s_t = 1/(2+\rho)$. Each young person saves more, raising the capital stock passed to the next period. Steady-state $k^*$ rises.

| Shock | Effect on $D$ | Effect on $k_{t+1}$ curve | Effect on $k^*$ |
|-------|--------------|--------------------------|-----------------|
| $n \uparrow$ | $D \downarrow$ | Shifts down | $\downarrow$ |
| $\rho \downarrow$ | $D \uparrow$ | Shifts up | $\uparrow$ |

---

**(d) Relaxing log utility and Cobb-Douglas: dynamic inefficiency [5 marks]:**

When we relax the assumptions of log utility ($\theta = 1$) and Cobb-Douglas production, the dynamics become richer.

**General CRRA utility ($\theta \neq 1$):**

The saving function $s(w_t, r_{t+1})$ now depends on both the wage and the interest rate. From the Euler equation and budget constraint, saving is:

$$s_t = \frac{w_t}{1 + (1+\rho)^{-1/\theta} (1+r_{t+1})^{(1-\theta)/\theta}}$$

The $k_{t+1}$ equation becomes implicit because $r_{t+1} = f'(k_{t+1})$ depends on $k_{t+1}$ itself:

$$k_{t+1} = \frac{s\bigl(w(k_t),\; f'(k_{t+1})\bigr)}{(1+g)(1+n)}$$

This implicit equation can generate:

1. **Multiple steady states:** The $k_{t+1}$ function may be non-monotonic if the saving function is non-linear — creating multiple intersections with the $45^\circ$ line.
2. **Non-convergence or cycles:** The eigenvalue $\alpha$ in the log-linear case generalizes to a function of $\theta$ and the production parameters; convergence may be slower, faster, or oscillatory.
3. **Poverty traps:** With subsistence consumption constraints, very low $k_t$ may produce zero saving, trapping the economy.

**Dynamic inefficiency:**

Dynamic inefficiency occurs when the economy **over-accumulates** capital — the steady-state capital stock exceeds the Golden Rule level:

$$k^* > k_{gold} \quad\Longleftrightarrow\quad f'(k^*) < n+g+\delta \quad\Longleftrightarrow\quad r < n+g$$

In this case, reducing the saving rate would **increase** steady-state consumption permanently — a Pareto improvement across generations (no generation loses, some gain).

**Comparison across models:**

| Model | Can $k^* > k_{gold}$? | Reason |
|-------|----------------------|--------|
| **OLG** | **Yes** | No intergenerational transfers; each generation saves only for its own old age; decentralized equilibrium ignores general-equilibrium over-accumulation |
| **Solow** | Yes (if $s > \alpha$) | Exogenous saving rate can be set too high |
| **Ramsey** | **No** | Infinitely-lived dynasty internalizes the future; $f'(k^*) = \rho + \theta g + \delta > n+g+\delta$ ensures $k^* < k_{gold}$ |

**Why is dynamic inefficiency possible in OLG?**
- In OLG, there is no market in which the current old and current young can trade to reduce the capital stock.
- Each generation's saving decision is individually rational but collectively sub-optimal.
- The condition $r < n+g$ means the return on capital is lower than the growth rate of the economy — investing less and consuming more would make everyone better off across generations.
- This is a **pecuniary externality**: individual savers do not internalize the effect of their saving on the aggregate capital stock and thus on the interest rate.

**Policy implications:**
- A **Pay-As-You-Go (PAYG) social security system** can reduce private saving and move the economy toward the Golden Rule.
- Government debt can crowd out capital and improve intergenerational allocation.
- These policies can achieve a Pareto improvement if the economy is dynamically inefficient — the key normative implication that distinguishes OLG from Ramsey.

> **Exam Tip (Part a):** For 4 marks, present the Euler equation concisely but include the CRRA specialization. Mention the $\theta$ parameter's role as the inverse of IES.
>
> **Exam Tip (Part b):** The difference is that OLG convergence depends only on $\alpha$, while Solow depends on $(1-\alpha)(n+g+\delta)$. Emphasize that the saving mechanism differs fundamentally.
>
> **Exam Tip (Part d):** This is the highest-mark part (5 marks). Structure your answer as: (1) general saving function, (2) $k_{t+1}$ becomes implicit, (3) multiple steady states possible, (4) define dynamic inefficiency, (5) compare across OLG/Solow/Ramsey, (6) intuition for why OLG permits it. Draw the $k_{t+1}$ vs $45^\circ$ diagram showing possible multiple intersections.
>
> **Professor's Corner:** Dynamic inefficiency in OLG was first identified by Samuelson (1958) and Diamond (1965). The condition $r < n+g$ is sometimes called the "Samuelson condition." In practice, the empirical relevance of dynamic inefficiency is debated — Abel, Mankiw, Summers & Zeckhauser (1989) developed a test based on whether capital's cash flow exceeds investment, finding that the US economy appears dynamically efficient. However, the theoretical possibility remains a cornerstone of OLG analysis and motivates the study of social security and government debt.
>
> → *See also: ../GUIDE/GLOSSARY.md [#term-dynamic-inefficiency](./../GUIDE/GLOSSARY.md#term-dynamic-inefficiency), [#term-olgi-model](./../GUIDE/GLOSSARY.md#term-olgi-model). Compare with [Ramsey modified Golden Rule in Q8](./answers-macroeconomics.md#q-ramsey-02) and [Solow Golden Rule in Q4](./answers-macroeconomics.md#q-solow-04).*

---

# Key Formulas — OLG Model

| Concept | Formula | Notes |
|---------|---------|-------|
| **Utility** | $U_t = u(c_{1t}) + \frac{1}{1+\rho} u(c_{2,t+1})$ | Two-period life, discount $\rho$ |
| **Lifetime budget** | $c_{1t} + \frac{c_{2,t+1}}{1+r_{t+1}} = w_t$ | Labor only when young |
| **Euler equation** | $\frac{u'(c_{1t})}{u'(c_{2,t+1})} = \frac{1+r_{t+1}}{1+\rho}$ | Intertemporal optimality |
| **CRRA Euler** | $\frac{c_{2,t+1}}{c_{1t}} = \left( \frac{1+r_{t+1}}{1+\rho} \right)^{1/\theta}$ | $\theta = 1/\text{IES}$ |
| **Log utility saving** | $s_t = w_t/(2+\rho)$ | Independent of $r$ |
| **Wage (Cobb-Douglas)** | $w_t = A_t (1-\alpha) k_t^\alpha$ | $f(k) = k^\alpha$ |
| **Capital transition** | $k_{t+1} = \frac{(1-\alpha)k_t^\alpha}{(2+\rho)(1+g)(1+n)}$ | Log utility, Cobb-Douglas |
| **Steady state $k^*$** | $k^* = \left( \frac{1-\alpha}{(2+\rho)(1+g)(1+n)} \right)^{1/(1-\alpha)}$ | |
| **Convergence speed** | $\lambda_{OLG} = 1 - \alpha$ | Under log utility |
| **Dynamic inefficiency** | $r < n+g \;\Longleftrightarrow\; k^* > k_{gold}$ | Possible in OLG |
| **Golden Rule** | $f'(k_{gold}) = n+g+\delta$ | Max $c^*$ condition |

---

> **Cross-Reference Index:**
> - ../GUIDE/GLOSSARY.md: [#term-olgi](./../GUIDE/GLOSSARY.md#term-olgi), [#term-dynamic-inefficiency](./../GUIDE/GLOSSARY.md#term-dynamic-inefficiency), [#term-speed-of-convergence](./../GUIDE/GLOSSARY.md#term-speed-of-convergence)
> - EXAM-CHEAT-SHEET.md: [OLG section](../GUIDE/EXAM-CHEAT-SHEET.md) (lines 48-55)
> - Solow model: [Q1–Q6](./answers-macroeconomics.md#q-solow-01)
> - Ramsey model: [Q7–Q11](./answers-macroeconomics.md#q-ramsey-01)
> - Endogenous growth: [Q12–Q15](./answers-macroeconomics.md#q-endogrowth-01)
