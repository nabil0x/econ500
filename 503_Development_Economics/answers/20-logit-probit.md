# ECON 503 — Development Economics

> **Part of:** [`answers-development.md`](../answers-development.md) — Exam-ready revision notes

### Question 20 {#q-batch48-dev-02}

**Compare logit and probit models. What are their key similarities and differences? How do you interpret their coefficients? (14 marks)**

**Answer:**

> **Marking Guide [14 marks]:** Similarities — both binary choice, S-shaped, latent variable (3) | Differences — logistic vs normal distribution, tail behaviour (4) | Coefficient interpretation — log-odds, odds ratios, marginal effects (5) | Practical guidance for choice (2)
>
> ⭐ **High-Yield** — Standard binary choice models. Common in development microeconometrics.

**(A) Similarities**

Logit and probit are both models for binary dependent variables ($y \in \{0, 1\}$). They share:

| Similarity | Detail |
|------------|--------|
| **Purpose** | Model the probability that $y = 1$ given covariates $x$ |
| **S-shaped response** | $P(y=1|x) = F(x'\beta)$ where $F$ is a cumulative distribution function — probability is bounded between 0 and 1 |
| **Latent variable basis** | Both assume a latent (unobserved) continuous variable $y^* = x'\beta + \varepsilon$ with $y = 1$ if $y^* > 0$, $y = 0$ otherwise |
| **Nonlinear** | Marginal effects depend on the value of $x$, not constant as in LPM |
| **Estimation** | Both estimated by Maximum Likelihood (MLE) |
| **Asymptotic properties** | Both yield consistent, asymptotically normal, efficient estimates under standard conditions |

**(B) Differences**

| Feature | Logit | Probit |
|---------|-------|--------|
| **Link function** | Logistic CDF: $\Lambda(z) = e^z / (1 + e^z)$ | Normal CDF: $\Phi(z) = \int_{-\infty}^z \phi(t) dt$ |
| **Error distribution** | $\varepsilon$ follows logistic distribution (variance $\pi^2/3 \approx 3.29$) | $\varepsilon$ follows standard normal distribution (variance 1) |
| **Tails** | Fatter tails — probability approaches 0/1 more slowly | Thinner tails — probability approaches 0/1 more quickly |
| **Coefficient scale** | ~1.8 times larger than probit for same data (because variance is larger) | ~0.55 times logit coefficients |
| **Interpretation** | Exact: odds = $\exp(\beta)$; $P(y=1|x)$ = exactly logistic | No closed form for $P(y=1|x)$; must use numerical integration |
| **Computational** | Slightly faster (no numerical integration needed) | Slightly slower |
| **Common use** | Epidemiology, economics (logistic is more common) | Biostatistics (tradition), some econometrics |

**(C) Coefficient Interpretation**

**Logit coefficient ($\beta$):** A one-unit increase in $x$ increases the **log-odds** of $y=1$ by $\beta$. Log-odds are not intuitive, so we convert:

$$ \text{Odds} = \frac{P(y=1)}{P(y=0)} = e^{x'\beta} $$

- **Odds ratio ($e^\beta$):** A one-unit increase in $x$ multiplies the odds of $y=1$ by $e^\beta$. If $e^\beta = 1.7$, odds increase by 70%.
- **Marginal effect:** $\frac{\partial P(y=1|x)}{\partial x_k} = \beta_k \cdot \Lambda(x'\beta) \cdot [1 - \Lambda(x'\beta)]$ — depends on the value of $x$, typically evaluated at the mean or averaged across observations.

**Probit coefficient:** Cannot be directly interpreted as log-odds. Convert to marginal effects:

$$ \frac{\partial P(y=1|x)}{\partial x_k} = \beta_k \cdot \phi(x'\beta) $$

A probit marginal effect of 0.12 means a one-unit increase in $x$ increases the probability of $y=1$ by 12 percentage points (at the specified $x$ value).

**Multinomial logit:** Used when $y$ has $>2$ unordered categories (e.g., Employed, Self-employed, Unemployed). Coefficients are interpreted **relative to a base category**. If "Male" coefficient for "Self-employed" (base = "Unemployed") = 1.2, then the log-odds of being self-employed rather than unemployed is 1.2 higher for men than women. The odds ratio is $e^{1.2} \approx 3.32$ — men have 3.32 times the odds of being self-employed versus unemployed compared to women.

**Practical guidance:** Logit and probit rarely give substantively different results in practice. The choice is largely a matter of discipline convention (economists often prefer logit for the odds-ratio interpretation; biostatisticians prefer probit). Key criterion: if you care about **extreme probabilities** (very high or very low), the different tail behaviour may matter — logit assigns higher probability to extreme outcomes.

**Exam Tip:** The coefficient interpretation part (Q2c in the exam) can be a standalone calculation question. Know the formulas: logit coefficient → odds ratio ($e^\beta$), marginal effect = $\beta \cdot P \cdot (1-P)$.

> **Professor's Corner:** The logit/probit decision is not as consequential as textbooks suggest. Amemiya (1981) showed that the two models produce nearly identical predictions except at the tails. A more important choice is between binary choice models and the **Linear Probability Model** (LPM). LPM has known problems (heteroskedasticity, predicted probabilities outside [0,1], non-normal errors) but is widely used in applied work because coefficients are directly interpretable as marginal effects and fixed-effects estimation is straightforward. The guidance: use LPM for robustness, logit/probit for efficiency and bounded predictions.
>
> → *See also: Batch 48 full notes (multinomial logit, ordered logit); Health Economics notes (binary outcomes in health utilisation)*
