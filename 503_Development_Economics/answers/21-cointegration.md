# ECON 503 — Development Economics

> **Part of:** [`answers-development.md`](../answers-development.md) — Exam-ready revision notes

### Question 21 {#q-batch48-dev-03}

**What is cointegration? How can we test for cointegration? Why prefer the ARDL bounds testing approach over Johansen? (14 marks)**

**Answer:**

> **Marking Guide [14 marks]:** Definition of cointegration — long-run equilibrium among non-stationary variables (3) | Engle-Granger two-step method (3) | Johansen system approach (3) | ARDL bounds testing advantages — mixed I(0)/I(1), small samples, single equation (5)
>
> ⭐ **High-Yield** — Essential time-series concept for development macroeconometrics.

**(A) What Is Cointegration?**

Two or more non-stationary (unit root) variables are **cointegrated** if a linear combination of them is stationary — meaning they share a common long-run equilibrium relationship despite trending individually in the short run.

$$ y_t \sim I(1), \; x_t \sim I(1), \; z_t = y_t - \beta x_t \sim I(0) $$

**Intuition:** If $y_t$ and $x_t$ are both random walks, they will drift apart in general — unless some force (economic theory: purchasing power parity, interest rate parity, consumption function) ties them together in the long run. Cointegration formalises this: the variables are "tied together" by an equilibrium relationship; deviations from equilibrium are temporary and self-correct.

**Economic examples:**
- Consumption and income (they share a long-run proportion)
- Exchange rates and prices (PPP holds in the long run)
- Money demand: real money balances, income, and interest rates
- Interest rates across countries (uncovered interest parity)

**(B) Testing for Cointegration**

**Engle-Granger Two-Step Method (1987):**

| Step | Procedure | Key Points |
|------|-----------|------------|
| **1. Test unit roots** | Confirm all variables are $I(1)$ using ADF or PP tests | If variables have different orders, EG cannot be used |
| **2. Estimate static OLS** | $y_t = \alpha + \beta x_t + \varepsilon_t$ | "Cointegrating regression" |
| **3. Test residuals for stationarity** | Apply ADF test to $\hat{\varepsilon}_t$ (residuals) | Use MacKinnon critical values (not standard Dickey-Fuller) — because residuals are estimated |

**Limitations:** (1) Only one cointegrating relationship. (2) Sensitive to which variable is normalised (placed on LHS). (3) Two-step means errors from step 1 carry into step 2. (4) Cannot handle more than two variables efficiently.

**Johansen Maximum Likelihood Approach (1991, 1995):**

A system-based approach that can identify **multiple cointegrating vectors** in a Vector Error Correction Model (VECM):

$$ \Delta y_t = \Pi y_{t-1} + \Gamma_1 \Delta y_{t-1} + \ldots + \Gamma_{p-1} \Delta y_{t-p+1} + \varepsilon_t $$

where $\Pi = \alpha \beta'$, $\beta$ contains the cointegrating vectors, and $\alpha$ contains the adjustment (speed of correction) parameters. Two likelihood-ratio tests — trace test and maximum eigenvalue test — determine the number of cointegrating vectors ($r$).

| Advantage | Limitation |
|-----------|------------|
| Handles multiple cointegrating relationships | Requires all variables to be $I(1)$ |
| System approach — no normalisation issue | Large sample required |
| Tests for $r$ (number of cointegrating vectors) | Sensitive to lag length specification |

**(C) ARDL Bounds Testing — Why Prefer It?**

The Autoregressive Distributed Lag (ARDL) bounds testing approach (Pesaran, Shin & Smith 2001) has become the preferred method in applied development econometrics for several reasons:

| Advantage over Johansen | Explanation |
|------------------------|-------------|
| **Mixed I(0)/I(1) variables** | ARDL works when variables are $I(0)$, $I(1)$, or a mix — Johansen requires all $I(1)$. This is critical because many macroeconomic variables are borderline between the two |
| **Small sample performance** | ARDL is more efficient in small samples (typical in developing-country time series with 30-40 annual observations) |
| **Single equation estimation** | ARDL estimates one equation at a time — simpler to specify and interpret than the VECM system |
| **Cointegration test embedded** | The bounds test (F-test on lagged levels) directly tests for cointegration without needing unit root pre-testing with certainty |
| **Handles endogeneity** | ARDL with sufficient lags is robust to weak endogeneity of regressors |
| **Short-run and long-run separately** | Error Correction representation separates short-run dynamics from long-run equilibrium |

**ARDL procedure:**
1. Estimate the unrestricted error correction model (ECM): $\Delta y_t = \alpha + \sum \beta_i \Delta y_{t-i} + \sum \gamma_j \Delta x_{t-j} + \delta_1 y_{t-1} + \delta_2 x_{t-1} + \varepsilon_t$
2. Compute the **F-statistic** for the joint significance of lagged levels: $H_0: \delta_1 = \delta_2 = 0$
3. Compare to **Pesaran bounds** — two sets of critical values (lower bound for $I(0)$, upper for $I(1)$)
4. If F-stat exceeds upper bound, reject $H_0$ → cointegration exists regardless of whether variables are $I(0)$ or $I(1)$

**When Johansen is still preferred:** (a) with more than 5-6 variables (ARDL becomes cumbersome), (b) when theory predicts multiple cointegrating relationships, (c) when the sample is large enough, (d) when system inference on adjustment parameters across equations is needed.

**Exam Tip:** For 14 marks, spend about 4 minutes on definition and intuition, 5 minutes on testing methods (EG and Johansen), and 5 minutes on ARDL advantages. Use a concrete development example (e.g., FDI-growth nexus) to illustrate the application.

> **Professor's Corner:** The ARDL bounds test revolutionised applied time-series econometrics in development because it freed researchers from the "unit root pre-testing problem" — unit root tests have low power, especially in small samples, so pre-testing leads to frequent pre-testing errors that cascade into the cointegration analysis. ARDL's ability to handle mixed integration orders was a major practical advance. However, its main limitation is sensitivity to lag length selection (use AIC/SIC, but different criteria may suggest different lags) and its assumption of a single long-run relationship — for modelling systems with multiple equilibrium relationships, Johansen remains essential.
>
> → *See also: Macroeconomics notes (cointegration in growth empirics); Batch 48 full notes (unit root tests, ARIMA, VAR models)*
