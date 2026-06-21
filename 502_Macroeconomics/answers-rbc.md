# Answers: Real Business Cycle (RBC) Model

## Exam-ready Revision Notes — Econ 502

> **Math convention:** All equations use LaTeX notation. GitHub renders them natively.
> Display equations use `$$ ... $$`, inline formulas use `$ ... $`.
> Questions drawn from Batch 47 (2022) and Batch 48 (2023) MSc finals.
> Core references: Kydland & Prescott (1982), Hansen (1985), Rogerson (1988).

---

# Section 1 — Real Business Cycle

---

### Batch 47 Question 7 {#q-rbc-batch47-q7}

**Household: consumption $c_t$ & leisure $1-l_t$. Firm: $y_t = z_t k_t^\theta l_t^{1-\theta}$, $z_{t+1} = \phi z_t + \varepsilon_t$. [3+2+4+5]**

**(a) Construct the household's problem. Using log utility, derive the short-run labor supply curve. Explain the relationship among leisure, real wage, and interest rate. (3 marks)**

**Answer:**

> **Marking Guide [3 marks]:** Household optimization setup (1) | Intratemporal FOC and labor supply (1) | Intertemporal Euler and relationship among leisure, wage, interest rate (1)

**Household problem:** The infinitely-lived representative household maximizes expected lifetime utility:

$$\max \mathbb{E}_0 \sum_{t=0}^\infty \beta^t \bigl[ \ln c_t + \ln(1-l_t) \bigr]$$

subject to the budget constraint:

$$c_t + k_{t+1} = w_t l_t + (1+r_t) k_t, \quad k_0 \text{ given}$$

where $\beta \in (0,1)$ is the discount factor, $c_t$ is consumption, $l_t$ is hours worked (leisure $= 1-l_t$), $w_t$ is the real wage, $r_t$ is the real interest rate, and $k_t$ is capital.

**First-order conditions:** Form the Lagrangian with multiplier $\lambda_t$:

$$\mathcal{L} = \mathbb{E}_0 \sum_{t=0}^\infty \beta^t \bigl[ \ln c_t + \ln(1-l_t) + \lambda_t( w_t l_t + (1+r_t)k_t - c_t - k_{t+1}) \bigr]$$

| FOC | Equation | Interpretation |
|----|----------|---------------|
| $c_t$ | $1/c_t = \lambda_t$ | Marginal utility of consumption = shadow price of wealth |
| $l_t$ | $1/(1-l_t) = \lambda_t w_t$ | Marginal utility of leisure = wage $\times$ marginal utility of consumption |
| $k_{t+1}$ | $\lambda_t = \beta \mathbb{E}_t[\lambda_{t+1}(1+r_{t+1})]$ | Euler intertemporal condition |

**Intratemporal optimality** combines the $c_t$ and $l_t$ FOCs:

$$\frac{1}{1-l_t} = \frac{w_t}{c_t} \quad\Longrightarrow\quad c_t = w_t(1-l_t)$$

**Short-run labor supply:** Rearranging gives labor supply as a function of the wage and consumption:

$$l_t(w_t, c_t) = 1 - \frac{c_t}{w_t}$$

The **Frisch (constant-$\lambda$) elasticity of labor supply** measures the response of hours to a wage change holding the marginal utility of consumption constant. From the intratemporal FOC with $\lambda_t$ constant:

$$\frac{\partial \ln l_t}{\partial \ln w_t} \bigg|_{\lambda} = \frac{1-l_t}{l_t}$$

With log utility of leisure, the Frisch elasticity equals $(1-l)/l$ — approximately 2 for $l=1/3$.

**Relationship among leisure, wage, and interest rate:**

- **Intratemporal (current period):** A higher real wage $w_t$ increases the opportunity cost of leisure. For given $c_t$, labor supply rises (substitution effect). However, higher $w_t$ also raises income, increasing consumption and leisure demand (income effect). With log utility, the two effects balance in the long run, but in the short run the substitution effect dominates for temporary wage changes.

- **Intertemporal (across periods):** The Euler equation $\frac{1}{c_t} = \beta \mathbb{E}_t[\frac{1+r_{t+1}}{c_{t+1}}]$ links the interest rate to consumption growth. A higher expected $r_{t+1}$ makes current consumption more expensive relative to future consumption, reducing $c_t$ and, through the intratemporal condition, increasing $l_t$ (households work more today when the return to saving is high). This is the **intertemporal substitution of leisure** — the key propagation mechanism in RBC models.

---

**(b) Prove that long-run labor supply is independent of wage when $\phi = \beta$. (2 marks)**

**Answer:**

> **Marking Guide [2 marks]:** Intuition that $\phi=\beta$ equates shock persistence to discount factor (1) | Proof that wealth and substitution effects cancel in steady state (1)

**Proof:** In the long run (steady state), all variables are constant. The Euler equation gives:

$$\frac{1}{c} = \beta \frac{1+r}{c} \quad\Longrightarrow\quad 1 = \beta(1+r) \quad\Longrightarrow\quad r = \frac{1}{\beta} - 1 \equiv \rho$$

From the firm's problem, the steady-state interest rate pins down the capital-labor ratio:

$$r = \theta z \left(\frac{k}{l}\right)^{\theta-1} - \delta \quad\Longrightarrow\quad \frac{k}{l} = \left( \frac{\theta z}{r+\delta} \right)^{1/(1-\theta)}$$

The real wage is then determined solely by $k/l$ (and hence by $r$ and preference parameters):

$$w = (1-\theta) z \left(\frac{k}{l}\right)^\theta = (1-\theta) z^{\frac{1}{1-\theta}} \left( \frac{\theta}{r+\delta} \right)^{\frac{\theta}{1-\theta}}$$

When $\phi = \beta$, the persistence of the technology shock exactly equals the household's discount factor. This means that **permanent** (fully persistent) wage changes — those that last as long as the household's effective horizon — induce offsetting wealth and substitution effects:

- **Substitution effect:** Higher $w$ makes leisure more expensive → work more.
- **Wealth effect:** Higher $w$ raises permanent income → consume more leisure → work less.

With log utility, these two effects exactly cancel when the wage change is permanent ($\phi = \beta$). A shock with persistence $\phi < \beta$ is perceived as temporary, so the substitution effect dominates (labor supply rises). A shock with $\phi > \beta$ is perceived as more permanent than the household's planning horizon, so the wealth effect dominates (labor supply falls).

**Formally:** From the intratemporal FOC $v'(1-l) = w/c$ and the budget constraint in steady state ($c = wl + rk$), substituting $k/l$ from the firm's optimality yields $l^*$ as a function only of $\beta$, $\theta$, $\delta$, and $z^{1/(1-\theta)}$. When $\phi = \beta$, the steady state is independent of the shock history, and $l^*$ does not respond to $w$ at the steady state — the long-run labor supply is perfectly inelastic with respect to the wage.

---

**(c) Assuming $v(h) = -\gamma^{-1}(1-h)^{\gamma-1}$, find the elasticity of labor supply. (4 marks)**

**Answer:**

> **Marking Guide [4 marks]:** Derivation of marginal utility (1) | Frisch elasticity derivation (2) | Expression and interpretation (1)

Let $h = 1-l$ denote leisure. The utility of leisure is:

$$v(1-l) = -\frac{1}{\gamma} (1-(1-l))^{\gamma-1} = -\frac{1}{\gamma} \, l^{\gamma-1}$$

**Marginal utility of leisure:**

$$v'(1-l) = \frac{\gamma-1}{\gamma} \, l^{\gamma-2}$$

**Frisch elasticity derivation:** From the intratemporal FOC $v'(1-l) = \lambda w$ (where $\lambda = 1/c$ is constant for the Frisch elasticity):

Differentiate holding $\lambda$ constant:

$$v''(1-l) \cdot (-dl) = \lambda\, dw \quad\Longrightarrow\quad \frac{dl}{dw} = -\frac{\lambda}{v''(1-l)}$$

where $v''(1-l) = -\frac{(\gamma-1)(\gamma-2)}{\gamma} \, l^{\gamma-3} < 0$ for $\gamma > 2$.

The Frisch elasticity of labor supply is:

$$\eta \equiv \frac{dl}{dw}\frac{w}{l} = -\frac{\lambda w}{l \, v''(1-l)} = -\frac{v'(1-l)}{l \, v''(1-l)}$$

Substituting $v'$ and $v''$:

$$\eta = -\frac{\frac{\gamma-1}{\gamma} l^{\gamma-2}}{l \cdot \left(-\frac{(\gamma-1)(\gamma-2)}{\gamma} l^{\gamma-3}\right)} = \frac{\frac{\gamma-1}{\gamma} l^{\gamma-2}}{\frac{(\gamma-1)(\gamma-2)}{\gamma} l^{\gamma-2}} = \frac{1}{\gamma-2}$$

**Final expression (in terms of $l$ and $\gamma$):**

$$\boxed{\eta = \frac{1-l}{l(\gamma-2)}}$$

The special cases:

| $\gamma$ | Elasticity | Interpretation |
|----------|-----------|---------------|
| $\gamma \to \infty$ | $\eta \to 0$ | Perfectly inelastic labor supply (no response to wage) |
| $\gamma \to 2^+$ | $\eta \to \infty$ | Perfectly elastic labor supply (infinite response) |
| $\gamma = 3$ | $\eta = (1-l)/l$ | Log utility case (matches part a) |

**Intuition:** The parameter $\gamma$ governs the curvature of the leisure utility function. Higher $\gamma$ means more concave utility (stronger diminishing marginal utility of leisure), reducing the willingness to substitute leisure across time in response to wage changes.

---

**(d) Discuss Hansen's indivisible labor supply solution as an attempt to overcome limitations. (5 marks)**

**Answer:**

> **Marking Guide [5 marks]:** Limitations of divisible RBC models (1) | Hansen's lottery mechanism (2) | Effective utility function becomes linear in hours (1) | Success in matching empirical moments (1)

**Limitations of divisible labor RBC models:** In the standard RBC model with divisible labor, the Frisch elasticity of labor supply is approximately $(1-l)/l \approx 2$ (for $l = 1/3$). However, US data shows aggregate hours are 5-10 times more volatile than real wages, implying the model requires a much higher elasticity. Microeconomic estimates of labor supply elasticity (especially for men) are near zero. This is the **elasticity puzzle** — macro RBC models need elastic labor supply, but micro evidence suggests it is inelastic.

**Hansen's (1985) indivisible labor solution:** Hansen introduces non-convexities in labor supply — agents either work a fixed shift $\bar{l}$ or not at all ($l=0$). This captures the reality that most workers cannot choose hours continuously but face discrete work/no-work decisions.

**Lottery mechanism:** Following Rogerson (1988), Hansen assumes a representative agent who chooses the **probability** $\pi_t$ of working in each period, rather than hours directly. A lottery determines who works. The expected utility is:

$$\mathbb{E}[u(c_t, l_t)] = \pi_t \, u(c_t^e, \bar{l}) + (1-\pi_t) \, u(c_t^u, 0)$$

where $c_t^e$ and $c_t^u$ are consumption when employed and unemployed.

**Effective utility function:** When utilities are separable ($u(c,l) = \ln c + v(1-l)$) and consumption is equalized across states (through complete markets), the representative agent's problem reduces to:

$$\max \sum \beta^t \bigl[ \ln c_t + \underbrace{\bigl(v(1-\bar{l}) - v(1)\bigr)}_{\text{constant}} \pi_t \bigr]$$

The term $\bigl(v(1-\bar{l}) - v(1)\bigr)$ is a constant. Since $\pi_t$ is the aggregate employment rate and total hours are $h_t = \pi_t \bar{l}$, the effective utility function becomes **linear in hours worked**:

$$u(c_t, h_t) = \ln c_t - B h_t$$

where $B = [v(1) - v(1-\bar{l})] / \bar{l} > 0$ is a constant.

**Result:** Indivisible labor makes the effective utility function linear in hours ($\eta \to \infty$). The Frisch elasticity of aggregate labor supply becomes very large — effectively infinite at the micro level — allowing the model to generate the observed volatility of hours relative to wages. Hansen shows that with indivisible labor, the RBC model's predicted standard deviation of hours is approximately 5 times larger than in the divisible labor case, closely matching US post-war data.

---

### Batch 48 Question 7 {#q-rbc-batch48-q7}

**Household: consumption $c_t$ and leisure $1-l_t$. Firm: $y_t = z_t k_t^\theta l_t^{1-\theta}$, $z_{t+1} = \phi z_t + \varepsilon_t$. [3+2+4+5]**

**(a) Construct the household's problem. Using log utility, derive the short-run labor supply curve. Explain the relationship among leisure, real wage, and interest rate. (3 marks)**

**Answer:**

> **Marking Guide [3 marks]:** Problem setup and FOCs (1) | Short-run labor supply derivation (1) | Leisure-wage-interest rate relationships (1)

See [Batch 47 Q7(a)](#q-rbc-batch47-q7) for the full derivation. The household's problem is identical across both batches.

**Key result — Short-run labor supply:**

$$\frac{1}{1-l_t} = \frac{w_t}{c_t} \quad\Longrightarrow\quad l_t = 1 - \frac{c_t}{w_t}$$

The short-run (Frisch) elasticity of labor supply with log utility of leisure is $\eta = (1-l_t)/l_t$.

**Relationships:**

| Relationship | Direction | Mechanism |
|-------------|-----------|-----------|
| $w_t \uparrow \to l_t \uparrow$ | Positive (SR) | Substitution effect dominates for temporary shocks |
| $r_{t+1} \uparrow \to l_t \uparrow$ | Positive | Higher return to saving => work more today, consume less |
| $1-l_t$ (leisure) | Normal good | Higher permanent income $\to$ consume more leisure ($l_t \downarrow$) |

The **intertemporal substitution elasticity of leisure** governs how households shift labor supply across periods in response to interest rate changes — this is the core propagation mechanism in RBC models, distinguishing them from Keynesian models where labor supply responds only to the current wage.

---

**(b) Prove long-run labor supply is independent of wage when $\rho = \phi$. (2 marks)**

**Answer:**

> **Marking Guide [2 marks]:** Steady-state condition $r = \rho$ pins down $k/l$ (1) | $\rho = \phi$ implies wage changes fully offset by wealth effect (1)

**Proof:** In continuous time (or with discount rate $\rho$ where $\beta = e^{-\rho}$), the steady-state Euler equation gives $r = \rho$. From the firm's optimality, the marginal product of capital equals $r + \delta$, which pins down the steady-state capital-labor ratio independently of the technology level $z$:

$$\frac{k}{l} = \left( \frac{\theta z}{\rho + \delta} \right)^{\frac{1}{1-\theta}}$$

The real wage $w = (1-\theta) z (k/l)^\theta$ then inherits the same property — it is determined by $\rho$, $\theta$, and $\delta$ alone (and the current $z$).

When $\rho = \phi$, the discount rate equals the AR(1) persistence parameter of the technology shock. This implies that technology shocks are exactly as persistent as the household's effective discounting. A positive shock to $z$ raises the wage permanently (from the household's perspective), but the wealth effect (higher permanent income reduces labor supply) exactly offsets the substitution effect (higher opportunity cost of leisure increases labor supply). The **income and substitution effects cancel**, leaving long-run labor supply unchanged.

**Formally,** combining the steady-state conditions:

$$c = wl + rk, \quad w = (1-\theta)z(k/l)^\theta, \quad r = \rho, \quad k = \left( \frac{\theta z}{\rho+\delta} \right)^{\frac{1}{1-\theta}} l$$

and the intratemporal FOC $1/(1-l) = w/c$ yields a closed-form expression for $l^*$ that depends only on $\theta$, $\rho$, and $\delta$ — **not on $w$**. Hence $\partial l^*/\partial w = 0$ in the long run when $\rho = \phi$.

---

**(c) Find the elasticity of labor supply and interpret. (4 marks)**

**Answer:**

> **Marking Guide [4 marks]:** Derivation of Frisch elasticity (2) | Expression in terms of $l$ and $\gamma$ (1) | Economic interpretation (1)

This question is identical to [Batch 47 Q7(c)](#q-rbc-batch47-q7) — the utility of leisure is $v(h) = -\gamma^{-1}(1-h)^{\gamma-1}$.

**Frisch elasticity of labor supply:**

$$\boxed{\eta = \frac{1-l}{l(\gamma-2)}}$$

**Interpretation:**

| Value of $\gamma$ | Elasticity $\eta$ | Economic Meaning |
|-------------------|-------------------|------------------|
| $\gamma \to \infty$ | $\eta \to 0$ | **Divisible labor benchmark:** Hours unresponsive to transitory wage changes |
| $\gamma = 3$ | $\eta = (1-l)/l \approx 2$ | **Log-utility case:** Standard RBC calibration |
| $\gamma \to 2^+$ | $\eta \to \infty$ | **Indivisible labor limit:** Hours infinitely elastic (Hansen, 1985) |

The curvature parameter $\gamma$ governs the intertemporal substitution elasticity of leisure. A high $\gamma$ means households strongly dislike varying their leisure across periods — labor supply becomes inelastic. A low $\gamma$ (approaching 2) makes leisure nearly linear in utility, giving rise to a very elastic labor supply response that helps the RBC model match the observed volatility of hours.

---

**(d) Discuss Hansen's indivisible labor supply solution and calibration mechanism. (5 marks)**

**Answer:**

> **Marking Guide [5 marks]:** Limitations of divisible labor (1) | Lottery mechanism and effective utility (2) | Calibration procedure (1) | Quantitative success (1)

**Why indivisible labor?** Standard RBC models with divisible labor and log utility generate a Frisch elasticity of $\eta \approx 2$, which produces hours volatility far below what we observe in the data (US quarterly hours are approximately 5 times more volatile than real wages). Micro estimates suggest even smaller elasticities (0–0.5 for men).

**Hansen's (1985) lottery mechanism:** Agents cannot choose hours continuously. Instead, they face a discrete choice: work a fixed shift $\bar{l}$ or not at all. Following Rogerson (1988), a lottery determines employment status, and agents choose the **probability** $\pi_t$ of working. With complete markets ensuring consumption equalization, expected utility for the representative agent is:

$$U = \pi_t \ln c_t + (1-\pi_t) \ln c_t + \pi_t \, v(1-\bar{l}) + (1-\pi_t) \, v(1)$$

$$= \ln c_t + v(1) + \pi_t \bigl( v(1-\bar{l}) - v(1) \bigr)$$

Since $\pi_t = h_t / \bar{l}$ (where $h_t$ is aggregate hours), the effective utility function is:

$$u(c_t, h_t) = \ln c_t - B h_t + \text{constant}$$

where $B = [v(1) - v(1-\bar{l})]/\bar{l} > 0$ is a **constant** calibrated from preference parameters.

**Calibration mechanism:** The calibration proceeds as follows:

1. **Set $\bar{l}$:** The fixed work shift is calibrated to match average hours. Hansen uses $\bar{l} = 0.53$ (fraction of time endowment), implying agents work roughly 1/3 of their waking hours when employed ($\bar{l} \times 0.53 \approx 0.33$ after adjusting for sleep/ maintenance).

2. **Utility parameters:** With $\ln c_t + \ln(1-l_t)$, the leisure utility parameter $v(1-\bar{l}) - v(1) = \ln(1-\bar{l})$ is a known number given $\bar{l}$.

3. **Effective Frisch elasticity:** The effective utility $u(c, h) = \ln c - B h$ is linear in $h$, so the marginal rate of substitution between consumption and hours is $B c$. The labor supply condition becomes $B c_t = w_t$, giving an **infinite Frisch elasticity** — hours respond arbitrarily to wage changes because there is no curvature in the disutility of work.

4. **Calibrated moments:** Hansen targets US post-war quarterly data:
   - Standard deviation of output: $\sigma_y \approx 1.7\%$
   - Standard deviation of hours: $\sigma_h \approx 1.5\%$ (vs $\approx 0.3\%$ in divisible labor model)
   - Relative volatility $\sigma_h/\sigma_y \approx 0.9$ (matching data)

**Success:** With indivisible labor, the model's predicted relative volatility of hours to output rises from 0.2 (divisible labor) to approximately 0.9, closely matching the US data. This resolves the elasticity puzzle: microeconomic inelasticity at the individual level is consistent with high aggregate elasticity because the **extensive margin** (employment vs non-employment) dominates the **intensive margin** (hours adjustment by workers). Hansen's indivisible labor mechanism remains the standard approach in DSGE modeling today.

---

# Key Formulas

| Concept | Formula | Parameters |
|---------|---------|------------|
| **Household intratemporal FOC** | $v'(1-l_t) = w_t / c_t$ | Log utility: $c_t = w_t(1-l_t)$ |
| **Euler equation (discrete)** | $1/c_t = \beta \mathbb{E}_t[(1+r_{t+1})/c_{t+1}]$ | $\beta$: discount factor |
| **Steady-state interest rate** | $r = 1/\beta - 1$ | Modified Golden Rule |
| **Frisch elasticity (general)** | $\eta = (1-l)/[l(\gamma-2)]$ | $v(h) = -\gamma^{-1}(1-h)^{\gamma-1}$ |
| **Frisch elasticity (log utility)** | $\eta = (1-l)/l$ | $\gamma = 3$ |
| **Long-run labor supply** | $\partial l^*/\partial w = 0$ when $\phi = \beta$ | Wealth effect = substitution effect |
| **Hansen's effective utility** | $u(c, h) = \ln c - B h$ | $B = [v(1)-v(1-\bar{l})]/\bar{l}$ |
| **Firm MPL** | $w_t = (1-\theta) z_t (k_t/l_t)^\theta$ | Cobb-Douglas |
| **Firm MPK** | $r_t + \delta = \theta z_t (k_t/l_t)^{\theta-1}$ | |
| **Technology shock** | $z_{t+1} = \phi z_t + \varepsilon_t$ | $\varepsilon_t \sim \text{i.i.d.}(0,\sigma^2)$ |

---

> **Cross-Reference Index:**
> - Solow model: [answers-solow-ramsey-endogenous.md](./answers-solow-ramsey-endogenous.md#q-solow-01)
> - Ramsey model: [answers-solow-ramsey-endogenous.md](./answers-solow-ramsey-endogenous.md#q-ramsey-01)
> - Endogenous growth: [answers-solow-ramsey-endogenous.md](./answers-solow-ramsey-endogenous.md#q-endogrowth-01)
> - New Keynesian DSGE: Batch 47 Q8, Batch 48 Q8
