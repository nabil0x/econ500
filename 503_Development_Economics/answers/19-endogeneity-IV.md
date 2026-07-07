# ECON 503 — Development Economics

> **Part of:** [`answers-development.md`](../answers-development.md) — Exam-ready revision notes

### Question 19 {#q-batch48-dev-01}

**What is endogeneity in regression analysis, and how does it arise? Explain with a health-income example. How can Instrumental Variables (IV) address this? (14 marks)**

**Answer:**

> **Marking Guide [14 marks]:** Definition of endogeneity (2) | Three sources: omitted variables, measurement error, simultaneity (3) | Health-income example (3) | IV solution — valid instruments, exclusion restriction (4) | Limitations (2)
>
> ⭐ **High-Yield** — Core econometric concept for development research. Links to causality debates.

**(A) What Is Endogeneity and How Does It Arise?**

Endogeneity occurs when an explanatory variable is correlated with the error term in a regression model:

$$ y = \beta_0 + \beta_1 x + \varepsilon, \quad \text{where } \text{Cov}(x, \varepsilon) \neq 0 $$

This violates OLS Assumption 3 (zero conditional mean). The consequence is that OLS estimates are **biased and inconsistent** — they do not converge to the true parameter value even with infinite sample size.

**Three sources of endogeneity:**

| Source | Mechanism | Example |
|--------|-----------|---------|
| **Omitted variable bias** | An unobserved factor affects both x and y | Ability affects both education and earnings; omitting ability biases the education coefficient |
| **Measurement error** | x is measured with error; the error correlates with x | Self-reported income contains reporting error; attenuation bias toward zero |
| **Simultaneity (reverse causality)** | y causes x as well as x causes y | GDP affects health expenditure; health expenditure affects GDP |

**(B) Health-Income Example**

Suppose we estimate the effect of health on labour market outcomes:

$$ \text{Income}_i = \beta_0 + \beta_1 \text{Health}_i + \varepsilon_i $$

**Why health is endogenous:**

| Source | Explanation |
|--------|-------------|
| **Reverse causality** | Higher income improves health (better nutrition, health care, living conditions). The causal arrow runs both ways |
| **Omitted variables** | Education, time preference, and genetic factors affect both health and income. Someone with higher time preference invests less in health AND less in career |
| **Measurement error** | Self-reported health status is subjective; people with the same objective health may report differently based on income or social desirability bias |

The OLS estimate of $\beta_1$ is therefore biased — it captures not only the causal effect of health on income but also the effect of income on health and the effect of omitted variables on both.

**(C) Instrumental Variables Solution**

IV addresses endogeneity by using an **instrument** (Z) that satisfies two conditions:

| Condition | Formal Requirement | Intuition |
|-----------|-------------------|-----------|
| **Relevance** | Cov(Z, x) ≠ 0 | The instrument predicts the endogenous variable |
| **Exclusion restriction** | Cov(Z, ε) = 0 | The instrument affects y ONLY through x (no direct path, no omitted path) |

**Two-stage least squares (2SLS) procedure:**

1. **First stage:** Regress the endogenous variable (Health) on the instrument(s): $\text{Health}_i = \pi_0 + \pi_1 Z_i + \upsilon_i$
2. **Second stage:** Regress the outcome (Income) on the predicted health values: $\text{Income}_i = \beta_0 + \beta_1 \widehat{\text{Health}}_i + \varepsilon_i$

The predicted health $\widehat{\text{Health}}_i$ contains only the exogenous variation in health (driven by the instrument), so $\beta_1$ is consistently estimated.

**Example instruments for health-income:** (a) family history of illness (genetic variation in health not affected by income), (b) access to health services determined by policy (e.g., distance to nearest clinic), (c) health shocks (accidents) unrelated to income, (d) policy changes (Medicaid expansion, introduction of universal health care).

**(D) Limitations of IV**

| Limitation | Issue |
|------------|-------|
| **Weak instruments** | If Cov(Z, x) is weak, IV estimates are biased and have large standard errors |
| **Exclusion restriction untestable** | The assumption that Z affects y only through x cannot be directly tested; must be justified theoretically |
| **LATE interpretation** | IV estimates the Local Average Treatment Effect for compliers (those whose treatment status shifts with the instrument) — not the average effect for the whole population |
| **Small sample bias** | IV is biased in finite samples; the bias approaches OLS bias as instrument strength decreases |

**Exam Tip:** For the full 14-mark question, spend 3-4 minutes on each part (definition, health example, IV solution, limitations). Use the health-income example throughout to keep the answer focused.

> **Professor's Corner:** The endogeneity problem is central to development econometrics because most variables of interest (institutions, policy, health, education) are endogenous — they are chosen by actors, not randomly assigned. The "credibility revolution" in development economics (Angrist & Pischke 2010) was driven by awareness that without addressing endogeneity, regression estimates are not causal. Natural experiments, difference-in-differences, and regression discontinuity designs are now preferred over OLS for establishing causal effects in development research.
>
> → *See also: Batch 48 full notes (other econometric methods); Health Economics notes (endogeneity in health-care utilisation studies)*
