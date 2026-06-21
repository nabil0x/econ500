# Answers: New Keynesian DSGE Models

## Exam-ready Revision Notes — Econ 502

> **Math convention:** All equations use LaTeX notation. GitHub renders them natively.
> Display equations use `$$ ... $$`, inline formulas use `$ ... $`.
> Questions drawn from Yun (1996), Calvo (1983), Clarida-Gali-Gertler (1999), Woodford (2003).
> Sources: Batch 47 MSc 2022 Q8, Batch 48 MSc 2023 Q8.

---

# Section 1 — Batch 47 MSc 2022 Questions

---

### Question 1 — Batch 47, Question 8 (New Keynesian) {#q-nk-batch47-q8}

**Setup:** $Q_i = L_i$ (one-for-one output from labor), $P$ perfect information. $z_i$ (productivity shock) and $m$ (monetary shock) ~ normal. Consumer's Euler: $\dot{C}/C = \sigma(r_t - \rho)$. Wicksellian natural rate: $r^n = \rho + \sigma^{-1}g$. Yun (1996) optimal price: $v_t = p_t^a + \int[(w_s - p_s) + \eta x_s]e^{\theta(s-t)} ds$. **[4+2+4+4]**

---

**(a) Explain the role of rational expectations in determining macro policy effectiveness under imperfect information using Lucas' supply curve. (4 marks)**

**Answer:**

> **Marking Guide [4 marks]:** Lucas supply curve specification (1) | Rational expectations definition and implications (1) | Policy ineffectiveness under perfect info (1) | Imperfect info — Lucas islands and real effects of monetary surprises (1)
>
> ⭐ **High-Yield** — The Lucas supply curve and rational expectations are the intellectual bridge from old Keynesian (adaptive expectations, exploitable Phillips curve) to New Keynesian (microfoundations, forward-looking behavior). The key exam insight: under RE with perfect info, only surprises matter; with imperfect info or sticky prices, systematic policy can affect real output.

**Lucas aggregate supply curve:**

$$Y = \bar{Y} + \alpha(P - P^e) + \varepsilon$$

where $Y$ is actual output, $\bar{Y}$ is the natural rate of output, $P$ is the actual price level, $P^e$ is the expected price level, $\alpha > 0$ captures the sensitivity of supply to price surprises, and $\varepsilon$ is a supply shock.

**Rational expectations (RE):** Agents form expectations using all available information: $P^e = \mathbb{E}[P \mid \Omega]$, where $\Omega$ is the information set. Expectations are *unbiased* — forecast errors are purely random with zero mean — and *efficient* — no predictable pattern remains unexploited.

**Policy effectiveness under different information structures:**

1. **Perfect information (full current information):** Agents observe $P$ and aggregate demand perfectly. Systematic monetary policy is fully anticipated ($P^e = P$ on average), so $Y = \bar{Y} + \varepsilon$. Only *unanticipated* monetary shocks affect real output. This is the **Lucas-Sargent-Wallace policy ineffectiveness proposition**: anticipated money is neutral.

2. **Imperfect information (Lucas islands model):** Agents observe only the *local* price of their own island-good but cannot distinguish aggregate price movements from relative demand shifts. Since $z_i$ and $m$ are both normally distributed, a monetary expansion raises all prices, but each producer observes a higher local price and partially attributes it to a relative demand shift, increasing output. Formally:

   $$P_i = P + z_i \quad \text{(local price = aggregate + relative shock)}$$

   With $z_i$ and $m$ normal, the signal extraction problem yields:

   $$Y = \bar{Y} + \alpha(P - \mathbb{E}[P]) + \varepsilon$$

   where $\alpha$ depends on the relative variances of real vs monetary shocks. Unanticipated monetary policy affects output, but *anticipated* policy is still neutral — only the surprise component matters.

**NK qualification:** New Keynesian models with **sticky prices** (Calvo/Yun) overturn the pure Lucas conclusion: even fully anticipated monetary policy affects real output because prices cannot adjust instantly. This restores a role for systematic stabilization policy.

---

**(b) Determine the New Keynesian IS equation for continuous time. (2 marks)**

**Answer:**

> **Marking Guide [2 marks]:** Derivation from Euler equation with output gap definition (1) | Expression linking output gap growth to the real interest rate gap (1)

Start from the consumer's Euler equation:

$$\frac{\dot{C}}{C} = \sigma(r_t - \rho)$$

Goods market clearing (no capital, no government): $C_t = Y_t$. Thus:

$$\frac{\dot{Y}_t}{Y_t} = \sigma(r_t - \rho)$$

Define the **output gap** $x_t \equiv \ln(Y_t / Y_t^n)$ as the log deviation of actual output from the natural (flexible-price) level. Natural output grows at the trend rate $g$: $\dot{Y}_t^n / Y_t^n = g$.

Differentiate the output gap definition:

$$\dot{x}_t = \frac{\dot{Y}_t}{Y_t} - \frac{\dot{Y}_t^n}{Y_t^n} = \sigma(r_t - \rho) - g = \sigma\left(r_t - \rho - \frac{g}{\sigma}\right)$$

The **Wicksellian natural rate of interest** is the real rate consistent with flexible prices:

$$r_t^n = \rho + \sigma^{-1}g$$

Substituting gives the **continuous-time New Keynesian IS equation**:

$$\boxed{\dot{x}_t = \sigma(r_t - r_t^n)} \quad \text{or equivalently} \quad \boxed{r_t = r_t^n + \sigma^{-1}\dot{x}_t}$$

**Interpretation:** When the real interest rate exceeds the natural rate, the output gap is falling (contractionary); when the real rate is below the natural rate, the output gap is rising (expansionary). In discrete time, the familiar form is $x_t = \mathbb{E}_t x_{t+1} - \sigma^{-1}(i_t - \mathbb{E}_t\pi_{t+1} - r_t^n)$.

> **Exam Tip:** The key step is connecting the consumer's Euler to the output gap. The Wicksellian natural rate $r^n = \rho + \sigma^{-1}g$ is the benchmark — it is the real rate that would prevail in a frictionless economy. Memorize it.

---

**(c) Determine the New Keynesian Phillips Curve for continuous time using Leibniz's rule. Explain "divine coincidence" (Blanchard & Gali). (4 marks)**

**Answer:**

> **Marking Guide [4 marks]:** Use of Leibniz's rule to differentiate the optimal price integral (1) | Derivation of NKPC linking inflation to output gap (2) | Divine coincidence: no trade-off absent cost-push shocks — stabilizing $\pi$ stabilizes $x$ (1)

**Yun (1996) optimal pricing with Calvo contracts:** Each period, a random fraction $(1-\theta)$ of firms reset prices; the remaining $\theta$ keep prices unchanged. The optimal reset price $p_t^*$ is a forward-looking weighted average of current and future nominal marginal costs:

$$p_t^* = \theta \int_{t}^{\infty} \big[(w_s - p_s) + \eta x_s\big] e^{-\theta(s-t)} ds + p_t$$

where $(w_s - p_s)$ is the real marginal cost (log real wage), $\eta x_s$ captures the effect of output gap on marginal cost, and $\theta$ is the Calvo hazard rate.

**Applying Leibniz's rule:** Differentiate $p_t^*$ with respect to $t$:

$$\frac{dp_t^*}{dt} = \theta\big[(w_t - p_t) + \eta x_t\big] - \theta^2 \int_t^{\infty} \big[(w_s - p_s) + \eta x_s\big] e^{-\theta(s-t)} ds$$

The integral equals $(p_t^* - p_t)/\theta$ from the definition of $p_t^*$. Substituting:

$$\frac{dp_t^*}{dt} = \theta\big[(w_t - p_t) + \eta x_t\big] - \theta(p_t^* - p_t)$$

The aggregate price level evolves as $p_t = \theta p_{t-\Delta} + (1-\theta)p_t^*$, which in continuous time gives:

$$\dot{p}_t = \dot{\pi}_t = \theta(p_t^* - p_t)$$

Combining these and simplifying yields the **continuous-time New Keynesian Phillips Curve**:

$$\boxed{\dot{\pi}_t = \rho\pi_t - \kappa x_t}$$

or in the standard discrete-time forward-looking form:

$$\boxed{\pi_t = \beta\mathbb{E}_t\pi_{t+1} + \kappa x_t}$$

where the slope $\kappa = \frac{(1-\theta)(1-\beta\theta)}{\theta}(\sigma + \eta) > 0$, capturing the sensitivity of inflation to the output gap.

**"Divine Coincidence" (Blanchard & Gali, 2007):**

In the basic NK model **without cost-push shocks** ($u_t = 0$ in the full specification $\pi_t = \beta\mathbb{E}_t\pi_{t+1} + \kappa x_t + u_t$), there is a remarkable property:

> Stabilizing inflation at target ($\pi_t = \pi^*$) **automatically** stabilizes the output gap at zero ($x_t = 0$), and vice versa.

From the NKPC with $\pi_t = \pi^*$ (constant): $\pi^* = \beta\pi^* + \kappa x_t \implies (1-\beta)\pi^* = \kappa x_t$. Since $\beta \to 1$ in continuous time and $\kappa > 0$, having $\pi^* = 0$ implies $x_t = 0$. The two objectives — price stability and output gap stabilization — coincide perfectly. This is "divine" because the central banker faces **no policy trade-off** between its dual mandate objectives.

**Why it matters:** Divine coincidence justifies **strict inflation targeting** as optimal policy. Only when cost-push shocks ($u_t \neq 0$) are present does a tension emerge between stabilizing inflation and stabilizing the output gap.

> **Professor's Corner:** Divine coincidence is the single most important normative result in NK macroeconomics. It implies that central banks should not "lean against the wind" in normal times — targeting zero inflation also delivers the efficient level of output. The breakdown of divine coincidence with cost-push shocks motivates the case for flexible inflation targeting (e.g., the Taylor rule weighting both $\pi$ and $x$).
>
> → *See also: [Q2(b)](#q-nk-batch48-q8) (Batch 48 NK DSGE definition)*

---

**(d) Describe the Taylor rule in the canonical New Keynesian model where $x$ (output) and $\pi$ (inflation) are both jump variables. (4 marks)**

**Answer:**

> **Marking Guide [4 marks]:** Taylor rule specification (1) | The NK three-equation system and its forward-looking nature (1) | Jump variables and determinacy under the Taylor principle (2)

**The Taylor rule:** The central bank sets the nominal interest rate in response to deviations of inflation from target and the output gap:

$$\boxed{i_t = r_t^n + \pi^* + \phi_\pi(\pi_t - \pi^*) + \phi_x x_t}$$

where $r_t^n$ is the Wicksellian natural rate, $\pi^*$ is the inflation target, $\phi_\pi > 1$ (the Taylor principle), $\phi_x \geq 0$, and $i_t$ is the nominal interest rate ($i_t = r_t + \mathbb{E}_t\pi_{t+1}$ in continuous time).

**The canonical NK three-equation system:**

1. **NK IS:** $x_t = \mathbb{E}_t x_{t+1} - \sigma^{-1}(i_t - \mathbb{E}_t\pi_{t+1} - r_t^n)$
2. **NK PC:** $\pi_t = \beta\mathbb{E}_t\pi_{t+1} + \kappa x_t$
3. **Taylor rule:** $i_t = r_t^n + \pi^* + \phi_\pi(\pi_t - \pi^*) + \phi_x x_t$

**Why $x$ and $\pi$ are jump variables:**

In the basic NK model, there are **no predetermined state variables** — unlike the Ramsey model where $k_t$ is predetermined. Both $x_t$ and $\pi_t$ are forward-looking variables that can jump discontinuously in response to news, expectations, or policy announcements:

- $x_t$ can jump because there is no capital accumulation (or it is abstracted from) — output adjusts freely
- $\pi_t$ can jump because the Calvo pricing mechanism yields a purely forward-looking Phillips curve
- The system is a **saddle-path stable** differential equation system in $(x_t, \pi_t)$ space

**Determinacy and the Taylor principle:**

Substituting the Taylor rule into the NK IS eliminates $i_t$, reducing the system to two forward-looking equations in $(x_t, \pi_t)$. For a **unique bounded equilibrium**, the Taylor principle must hold:

$$\phi_\pi > 1$$

This ensures that the central bank raises the **real** interest rate $i_t - \mathbb{E}_t\pi_{t+1}$ when inflation rises above target. If $\phi_\pi < 1$, the real rate falls when inflation rises, amplifying inflationary pressures and generating **indeterminacy** (multiple equilibria, sunspot fluctuations).

Since $x_t$ and $\pi_t$ are jump variables, they respond immediately to:
- **Current shocks** (technology $z_i$, monetary $m$)
- **Expected future shocks** (forward guidance is powerful — announcements about future policy affect $x_t$ and $\pi_t$ today)
- **Changes in the policy rule** (a shift in $\phi_\pi$ or $\pi^*$ causes instantaneous jumps)

> **Exam Tip:** The contrast with the RBC model is instructive. RBC has a predetermined state variable (capital $k_t$) and a jump variable (consumption $c_t$). NK has two jump variables. This means NK models can generate larger and faster responses to news shocks — a key feature for matching business cycle facts.
>
> → *See also: [Q2(d)](#q-nk-batch48-q8) (Batch 48 Taylor rule)*

---

# Section 2 — Batch 48 MSc 2023 Questions

---

### Question 2 — Batch 48, Question 8 (New Keynesian DSGE) {#q-nk-batch48-q8}

**Setup:** $Q_i = L_i$, $P$ perfect information. $z_i$, $m \sim$ normal. Consumer: $\dot{C}/C = \sigma(r_t - \rho)$. Wicksellian: $r^n = \rho + \sigma^{-1}g$. Yun (1996) optimal pricing. $k = \kappa\pi$. **[4+3+4+3]**

---

**(a) Explain the role of rational expectations in macro policy effectiveness under imperfect information using Lucas' supply curve. (4 marks)**

**Answer:**

> **Marking Guide [4 marks]:** Lucas supply curve (1) | Rational expectations concept (1) | Perfect info → policy ineffectiveness (1) | Imperfect info → monetary non-neutrality through signal extraction (1)

**Lucas aggregate supply curve:**

$$Y = \bar{Y} + \alpha(P - P^e) + \varepsilon$$

Output deviates from its natural level only when the actual price level differs from the expected price level.

**Rational expectations (Muth, 1961; Lucas, 1972):** Agents form expectations as the mathematical expected value conditional on all available information: $P^e = \mathbb{E}[P \mid \Omega]$. This implies forecast errors are white noise — unpredictable from any information available at the time.

**Macro policy effectiveness:**

1. **Under perfect information:** Agents observe aggregate prices. Any systematic monetary rule is fully anticipated, so $P = P^e$ on average and $Y = \bar{Y} + \varepsilon$. **Systematic monetary policy has no real effects** — only unanticipated money matters (Lucas-Sargent-Wallace policy ineffectiveness proposition).

2. **Under imperfect information (Lucas islands):** Each producer observes the local price $P_i = P + z_i$ (where $z_i$ is an island-specific relative shock) but cannot separately observe $P$ and $z_i$. Since $z_i$ and the monetary shock $m$ are independent normals, a rise in $P_i$ could reflect either an aggregate monetary expansion (all prices rising) or a favorable relative demand shift. The optimal signal-extraction problem gives:

   $$\mathbb{E}[P \mid P_i] = \lambda P_i, \quad 0 < \lambda < 1$$

   where $\lambda$ depends on the relative variance of aggregate vs idiosyncratic shocks. This produces the Lucas supply curve: a purely monetary expansion raises output because agents partially mistake it for a relative price change.

**NK extension:** New Keynesian models with sticky prices move beyond Lucas: even **anticipated** monetary policy affects output because nominal rigidities prevent instantaneous price adjustment. This restores real effects of systematic stabilization policy.

---

**(b) Define the New Keynesian DSGE model. Determine the NK IS equation for continuous time. (3 marks)**

**Answer:**

> **Marking Guide [3 marks]:** Definition of NK DSGE model — three key features (1) | NK IS derivation from Euler equation (1) | Natural rate and output gap interpretation (1)

**Definition of the New Keynesian DSGE model:**

The NK DSGE model is a dynamic stochastic general equilibrium framework that extends the Real Business Cycle (RBC) model with three key features:

1. **Monopolistic competition:** Firms produce differentiated goods and set prices, earning positive markups in the long run.
2. **Nominal rigidities (sticky prices):** Prices adjust infrequently due to Calvo (1983) contracts or Yun (1996) staggered adjustment — prices are not perfectly flexible.
3. **Rational expectations and optimizing agents:** Households maximize utility, firms maximize profits, and the central bank follows a monetary policy rule.

The canonical NK DSGE is summarized by a **three-equation system**: (i) the NK IS curve (aggregate demand), (ii) the NK Phillips curve (aggregate supply), and (iii) a monetary policy rule (typically Taylor rule).

**Continuous-time NK IS derivation:**

Start from the representative household's Euler equation:

$$\frac{\dot{C}_t}{C_t} = \sigma(r_t - \rho)$$

Goods market clearing implies $C_t = Y_t$ (no capital, no government):

$$\frac{\dot{Y}_t}{Y_t} = \sigma(r_t - \rho)$$

Define the output gap $x_t \equiv \ln\left(\frac{Y_t}{Y_t^n}\right)$. The natural output grows at the exogenous trend rate: $\dot{Y}_t^n / Y_t^n = g$. Differentiating:

$$\dot{x}_t = \frac{\dot{Y}_t}{Y_t} - \frac{\dot{Y}_t^n}{Y_t^n} = \sigma(r_t - \rho) - g = \sigma\left(r_t - \rho - \frac{g}{\sigma}\right)$$

The **Wicksellian natural rate** $r_t^n = \rho + \sigma^{-1}g$ is the real interest rate consistent with flexible-price equilibrium. Substituting:

$$\boxed{\dot{x}_t = \sigma(r_t - r_t^n)} \quad \text{or} \quad \boxed{x_t = -\sigma^{-1} \int_t^{\infty} (r_s - r_s^n) ds}$$

**Interpretation:** The output gap evolves according to the deviation of the actual real rate from the natural rate. When $r_t > r_t^n$, the output gap contracts (tight policy); when $r_t < r_t^n$, the output gap expands (loose policy). In discrete time, this is the familiar forward-looking IS:

$$x_t = \mathbb{E}_t x_{t+1} - \sigma^{-1}(i_t - \mathbb{E}_t\pi_{t+1} - r_t^n)$$

---

**(c) Determine the NK Phillips Curve using Leibniz's rule. Explain "divine coincidence" (Blanchard & Gali). (4 marks)**

**Answer:**

> **Marking Guide [4 marks]:** Calvo pricing setup and optimal price equation (1) | Leibniz's rule applied to the optimal price integral (1) | NKPC derivation with $\kappa$ slope (1) | Divine coincidence and its implications (1)

**Calvo pricing setup:** Each period, a random fraction $1-\theta$ of firms reset their price optimally, while $\theta$ keep their price unchanged. The optimal reset price $p_t^*$ maximizes expected discounted profits over the expected contract duration:

$$p_t^* = \theta \int_t^\infty \big[(w_s - p_s) + \eta x_s\big] e^{-\theta(s-t)} ds + p_t$$

where $w_s - p_s$ is log real marginal cost, $\eta x_s$ captures the output gap effect on marginal cost via diminishing returns and wage pressure, and $\theta$ is the probability of price non-adjustment per unit of time.

**Applying Leibniz's rule:**

Differentiate $p_t^*$ with respect to the time index $t$. Leibniz's rule for $\frac{d}{dt}\int_t^\infty f(t, s) ds$ gives:

$$\frac{dp_t^*}{dt} = \theta\big[(w_t - p_t) + \eta x_t\big] + \theta^2 \int_t^\infty \big[(w_s - p_s) + \eta x_s\big] e^{-\theta(s-t)} ds - \theta\big[(w_t - p_t) + \eta x_t\big]$$

The integral term is $(p_t^* - p_t)/\theta$ by the definition of $p_t^*$. Simplifying:

$$\frac{dp_t^*}{dt} = \theta\big[(w_t - p_t) + \eta x_t\big] - \theta(p_t^* - p_t)$$

The aggregate price level evolves according to $p_t = (1-\theta)p_t^* + \theta p_{t-\Delta}$, which in continuous time gives:

$$\dot{p}_t = \pi_t = \theta(p_t^* - p_t)$$

Combining and eliminating $(p_t^* - p_t)$ yields the **continuous-time New Keynesian Phillips Curve**:

$$\boxed{\dot{\pi}_t = \rho\pi_t - \kappa x_t}$$

or the discrete-time forward-looking form:

$$\boxed{\pi_t = \beta\mathbb{E}_t\pi_{t+1} + \kappa x_t}, \quad \kappa = \frac{(1-\theta)(1-\beta\theta)}{\theta}(\sigma + \eta) > 0$$

**"Divine Coincidence" (Blanchard & Gali, 2007):**

In the benchmark NK model without cost-push shocks, the NKPC becomes:

$$\pi_t = \beta\mathbb{E}_t\pi_{t+1} + \kappa x_t$$

This implies that stabilizing inflation at target ($\pi_t = \pi^*$) automatically sets the output gap $x_t = 0$, and vice versa. From the equation, if $\pi_t = \pi^*$ (constant) and $\beta \to 1$, then $x_t = 0$. **There is no trade-off between inflation and output gap stabilization.**

This result is called "divine coincidence" because:
- Central banks pursue both price stability and output stability (dual mandate)
- Without cost-push shocks, these objectives do **not conflict** — achieving one automatically achieves the other
- Strict inflation targeting (focusing exclusively on $\pi$) is therefore optimal policy

**When divine coincidence breaks down:** With cost-push shocks $u_t$ (e.g., oil price shocks, exchange rate pass-through), the NKPC becomes $\pi_t = \beta\mathbb{E}_t\pi_{t+1} + \kappa x_t + u_t$. Now stabilizing $\pi$ requires output gap *deviations* ($x_t \neq 0$), creating a genuine policy trade-off.

> **Professor's Corner:** Divine coincidence is the normative cornerstone of inflation targeting. It explains why central banks from the 1990s onward focused on inflation stabilization — not because they didn't care about output, but because stabilizing inflation was the best way to stabilize output. The 2008 financial crisis and post-pandemic supply shocks (cost-push) have challenged this consensus.
>
> → *See also: [Q1(c)](#q-nk-batch47-q8) (Batch 47 NKPC)*

---

**(d) Describe the Taylor rule where $x$ (output) and $\pi$ (inflation) are both jump variables. (3 marks)**

**Answer:**

> **Marking Guide [3 marks]:** Taylor rule specification (1) | Implications of $x$, $\pi$ being jump variables — forward-looking equilibrium (1) | Taylor principle and determinacy (1)

**The Taylor rule for monetary policy:**

$$i_t = r_t^n + \pi^* + \phi_\pi(\pi_t - \pi^*) + \phi_x x_t$$

The central bank adjusts the nominal interest rate $i_t$ when inflation deviates from target $\pi^*$ (with coefficient $\phi_\pi > 1$) and when the output gap is non-zero (with coefficient $\phi_x \geq 0$). The intercept $r_t^n + \pi^*$ is the **neutral nominal rate** consistent with trend growth and target inflation.

**Closed-form NK system with the Taylor rule:**

Substituting the Taylor rule into the NK IS and NK PC gives:

$$\begin{aligned}
x_t &= \mathbb{E}_t x_{t+1} - \sigma^{-1}\big[(\phi_\pi - 1)(\pi_t - \pi^*) + \phi_x x_t\big] \\
\pi_t &= \beta\mathbb{E}_t\pi_{t+1} + \kappa x_t
\end{aligned}$$

This is a system of two forward-looking difference equations in $(x_t, \pi_t)$.

**Implications of $x_t$ and $\pi_t$ as jump variables:**

1. **No predetermined state variables:** Unlike the Solow or Ramsey models where capital $k_t$ is predetermined, both $x_t$ and $\pi_t$ can adjust instantaneously in response to new information. The system is purely forward-looking.

2. **Saddle-path stability:** The characteristic polynomial of the system has one stable and one unstable root. For a unique bounded equilibrium (determinacy), the Taylor principle $\phi_\pi > 1$ is required. This ensures that the real rate rises when inflation increases, dampening aggregate demand.

3. **Instantaneous response to news:** Because $x_t$ and $\pi_t$ jump, the economy responds immediately to:
   - **Policy announcements:** Forward guidance about future interest rates affects current $x_t$ and $\pi_t$ through expectations channels.
   - **Expected future shocks:** Anticipated technology or cost-push shocks are incorporated into current pricing and output decisions.
   - **Regime changes:** A credible shift in $\phi_\pi$ or $\pi^*$ causes instantaneous re-anchoring of inflation expectations.

4. **No endogenous propagation from predetermined stocks:** Without capital or other state variables, all persistence in $x_t$ and $\pi_t$ comes from:
   - **Serial correlation in shocks** (autocorrelated $z_t$ or $m_t$)
   - **Intrinsic persistence from $\mathbb{E}_t\pi_{t+1}$ and $\mathbb{E}_t x_{t+1}$** (forward-looking expectations)
   - **Inertia in the Taylor rule** (interest rate smoothing, $\rho_i$)

> **Exam Tip:** Contrast with the RBC model: RBC has one predetermined variable (capital $k_t$) and one jump variable (consumption $c_t$). The NK model with two jump variables generates stronger responses to news and forward guidance. The Taylor principle ($\phi_\pi > 1$) is the condition that ensures the equilibrium is unique — without it, multiple self-fulfilling equilibria (sunspots) arise.

---

> **Cross-Reference:** For related material on the Solow model, Ramsey-Cass-Koopmans, and endogenous growth, see [`answers-macroeconomics.md`](./answers-macroeconomics.md). For the RBC model framework (which shares the Euler equation foundation), see the Tutorial section of the Batch 47/48 questions.
