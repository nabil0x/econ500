# ECON 503 — Development Economics

> **Part of:** [`answers-development.md`](../answers-development.md) — Exam-ready revision notes

### Question 14 {#q-batch47-dev-07}

**Explain the concept of "convergence theory". What are the statistical pitfalls in Baumol's unconditional convergence theory? How were these addressed? (5+9 marks)**

**Answer:**

> **Marking Guide [14 marks]:** Definition of absolute vs conditional convergence (2) | Baumol's 1986 study and findings (3) | Three statistical pitfalls: selection bias, measurement error, omitted variables (5) | MRW solution — conditional convergence with steady-state controls (4)
>
> ⭐ **High-Yield** — Directly links to Solow model in Macroeconomics. Tests understanding of growth empirics.

**(A) Convergence Theory**

Convergence theory posits that poorer economies grow faster than richer ones, eventually catching up in income levels. Two versions:

| Type | Prediction | Basis |
|------|------------|-------|
| **Absolute (unconditional) convergence** | All economies converge to the same steady-state income level regardless of initial conditions | Assumes identical preferences, technology, and institutions across countries |
| **Conditional convergence** | Economies converge to their own steady state; poor countries grow faster only after controlling for steady-state determinants (savings rate, population growth, human capital) | Solow model with heterogeneous parameters |

The Solow growth model predicts conditional convergence: economies with lower initial capital per worker grow faster, controlling for the steady-state determinants. The further an economy is from its steady state, the faster it grows (transition dynamics).

**(B) Baumol's Unconditional Convergence Theory and Statistical Pitfalls**

William Baumol (1986) appeared to find strong evidence of convergence: his sample of 16 industrialised countries from 1870–1979 showed poorer countries growing faster. However, this finding suffered from three critical statistical pitfalls:

| Pitfall | Explanation | Why It Biases Results |
|---------|-------------|----------------------|
| **Selection bias (endogenous sample)** | Baumol selected countries that are now rich — the "survivors" | Countries that failed to industrialise (and thus remained poor) were excluded. If you only look at countries that ended up rich, you see convergence by construction |
| **Measurement error** | Historical GDP data for early periods are unreliable | Measurement errors in initial GDP per capita bias the estimated convergence coefficient toward finding convergence (regression to the mean — a statistical artefact) |
| **Omitted variables** | Baumol's regression of growth on initial income omitted steady-state determinants | Countries that grew faster had higher savings rates, better institutions, or more human capital — not just lower initial income |

**(C) MRW Solution**

Mankiw, Romer, and Weil (1992) addressed these pitfalls with three innovations:

**1. Larger, representative sample:** MRW used a sample of 98 non-oil countries (and 75 intermediate and 22 OECD), avoiding Baumol's survivor bias. They confirmed conditional convergence: the coefficient on initial income becomes negative and significant once steady-state determinants are controlled.

**2. Augmented Solow model:** MRW added human capital to the Solow model (physical capital + human capital + labour). Their estimating equation:

$$ \ln y(t) - \ln y(0) = \beta_0 + \beta_1 \ln y(0) + \beta_2 \ln s_k + \beta_3 \ln s_h + \beta_4 \ln (n+g+\delta) + \varepsilon $$

Where $s_k$ is physical capital investment, $s_h$ is human capital investment, $n$ is population growth, and $g+\delta$ is technology growth plus depreciation (assumed constant at 0.05).

**3. Key findings:** (a) The augmented Solow model explains about 80% of cross-country income variation. (b) Conditional convergence holds — poor countries grow faster, controlling for steady-state determinants. (c) The speed of convergence is approximately 2% per year (consistent with Solow calibration). (d) Human capital matters as much as physical capital for explaining income differences.

**Remaining puzzles:** (1) The estimated convergence speed (2%) is slower than the 4-6% implied by Solow calibration. (2) The model explains OECD convergence well but not African non-convergence. (3) Technology is assumed to be a public good — in reality, technology diffusion is limited by absorptive capacity and institutions.

**Exam Tip:** The (5+9) split means the first part is a short definition of convergence (absolute vs conditional), the second is a detailed evaluation of Baumol and MRW. Focus the long answer on the three pitfalls and how MRW addressed each.

> **Professor's Corner:** The convergence debate is one of the most important in growth economics. MRW showed the Solow model fits cross-country data reasonably well once human capital is included — but subsequent research questioned whether human capital is properly measured (Barro & Lee education data) and whether the estimated coefficients capture reverse causality (faster growth causes more education investment). Recent work uses panel data and system GMM to address endogeneity. The "convergence club" literature suggests there may be multiple convergence clubs (rich countries converge among themselves, poor among themselves) rather than a single convergence path — consistent with poverty trap models.
>
> → *See also: Macroeconomics Solow model notes (theoretical basis); Macroeconomics endogenous growth notes (non-convergence prediction)*
