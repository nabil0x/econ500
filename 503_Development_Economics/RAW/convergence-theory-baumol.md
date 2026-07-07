# ECON 503 — Development Economics

## Tutorial 1, Question 6 — Baumol's Unconditional Convergence Theory (20 Marks)

> **Index:** [`answers-development.md`](../answers-development.md) · **Cross-ref:** [Answer 14 — Convergence theory (14 marks)](../answers/14-convergence-theory.md)
>
> **Question:** (A) Explain Baumol's unconditional convergence theory. (8 marks) (B) What are the statistical pitfalls in Baumol's unconditional convergence theory? How were these addressed? (12 marks)

---

## (A) Baumol's Unconditional Convergence Theory — 8 Marks

### 1. Convergence Theory: Definition and Core Intuition

Convergence theory, rooted in the neoclassical Solow–Swan growth model (1956), predicts that **poorer economies should grow faster than richer ones**, leading to a narrowing of income gaps over time. The theoretical mechanism is **diminishing returns to capital**:

- A poor economy has very little capital per worker → the marginal product of capital is **high** → each additional unit of capital generates large output gains → rapid growth.
- A rich economy is already capital-abundant → the marginal product of capital is **low** → additional investment yields smaller growth increments.

Thus, holding technology and preferences constant, low-income countries should "catch up" to high-income countries — the further below steady state, the faster the transitional growth.

### 2. Absolute vs Conditional Convergence

The literature distinguishes two forms:

| Concept | Prediction | Assumptions | Key Implication |
|---------|-----------|-------------|-----------------|
| **Absolute (unconditional) convergence** | All economies converge to the **same** steady-state income per capita, regardless of initial conditions | Identical savings rates, population growth, technology, depreciation, and institutions across all countries | A simple negative relationship between initial income and subsequent growth should hold across the whole world |
| **Conditional convergence** | Each economy converges to its **own** steady state; the poor grow faster *only after* controlling for determinants of the steady state | Savings rates, population growth, human capital, institutions, and technology **differ** across countries | The negative income–growth relationship appears only *conditional* on steady-state controls; raw correlations may be misleading |

The distinction is critical: absolute convergence is a **special case** of conditional convergence that requires all economies to share identical structural parameters — a condition almost certainly violated in practice.

### 3. Baumol (1986): The Seminal Empirical Study

William J. Baumol, in *"Productivity Growth, Convergence, and Welfare: What the Long-Run Data Show"* (American Economic Review, 1986), conducted the first high-profile empirical test of convergence using long-run historical data.

#### 3.1 Data and Sample

- **Sample:** 16 industrialised countries (the "rich club")
- **Period:** 1870–1979 (110 years)
- **Income measure:** GDP per capita (Maddison data — reconstructed historical national accounts)
- Countries included: Australia, Austria, Belgium, Canada, Denmark, Finland, France, Germany, Italy, Japan, Netherlands, Norway, Sweden, Switzerland, UK, USA

#### 3.2 Regression Specification

Baumol estimated a cross-sectional regression of the form:

$$ g_i = \alpha + \beta \ln(y_{i0}) + \varepsilon_i $$

where:
- $g_i$ = average annual growth rate of GDP per capita for country $i$ over 1870–1979
- $\ln(y_{i0})$ = natural logarithm of initial GDP per capita in 1870
- $\beta$ = convergence coefficient (the parameter of interest)
- $\varepsilon_i$ = error term

If **$\beta < 0$** (negative and statistically significant), poorer countries in 1870 grew faster — evidence of convergence. The magnitude of $\beta$ can be interpreted as the speed of convergence: a more negative $\beta$ implies faster closing of income gaps.

#### 3.3 Key Findings

| Finding | Detail |
|---------|--------|
| **Coefficient estimate** | $\hat{\beta} = -0.75$ (strongly negative) |
| **Statistical significance** | Highly significant ($t$-statistic ≈ −5.5) |
| **$R^2$** | Approximately 0.87 — the model explained 87% of the variation in growth rates across these 16 countries |
| **Interpretation** | A country with half the initial income of another grew about 0.5 percentage points faster per year |
| **Visual evidence** | Baumol presented a scatter plot showing a striking downward-sloping relationship between 1870 income and 1870–1979 growth |

Baumol concluded: *"The data provide what appears to be unmistakable evidence of convergence."* The finding was interpreted as strong support for the neoclassical growth model's prediction of diminishing returns and catch-up growth.

#### 3.4 Baumol's Convergence Club Hypothesis

Beyond the main regression, Baumol also observed that convergence appeared to hold **only within groups** of countries with similar institutional characteristics. He identified three "convergence clubs":
1. Rich industrialised market economies (the 16-country sample)
2. Centrally planned economies
3. Poorer developing countries

Within each club, convergence occurred; *between* clubs, divergence persisted. This prefigured the later literature on **club convergence** and **multiple steady states**.

---

## (B) Statistical Pitfalls in Baumol's Analysis — 12 Marks

### 4. Three Critical Statistical Pitfalls

Baumol's dramatic finding was soon subjected to devastating methodological critique. The three main pitfalls are:

---

#### Pitfall 1: Selection Bias (Endogenous Sample / Survivor Bias)

**The problem:** Baumol chose his 16 countries **based on their current (1979) wealth**. He looked back at countries that were rich at the end of the period and asked whether poorer ones among them grew faster. This is **ex post sample selection** — the sample is conditioned on the outcome variable.

**Why it matters (De Long, 1988):** J. Bradford De Long, in *"Productivity Growth, Convergence, and Welfare: Comment"* (AER, 1988), demonstrated the bias formally:

- If you select countries that **ended up rich**, you necessarily exclude countries that were **poor in 1870 and stayed poor** (or grew only modestly). These excluded countries — "unsuccessful industrialisers" — would show up in the lower-left of the scatter plot: low initial income AND low subsequent growth.
- By omitting them, Baumol artificially steepened the downward slope of the regression line.
- De Long argued that the appropriate sample would be countries that **were rich (or plausibly on track to become rich) in 1870**, not countries that happened to be rich in 1979.

**De Long's counter-exercise:**

| Selected by end-period wealth (Baumol) | Selected by initial-period potential (De Long) |
|----------------------------------------|----------------------------------------------|
| Countries rich in 1979 | Countries that were relatively wealthy in 1870 OR had potential for industrialisation |
| 16 countries | Includes Argentina, Chile, East Germany, Ireland, Portugal, Spain, etc. |
| Strong convergence ($\hat{\beta} = -0.75$) | Convergence disappears or weakens dramatically |

When De Long expanded the sample to include countries that were economically promising in 1870 (using GNP per capita ranks from around that period), the convergence coefficient fell sharply and became statistically insignificant. Argentina, for instance, was among the 10 richest countries in the world in 1870 — it then grew slowly for a century. Including it **breaks** Baumol's convergence result.

**Mathematical intuition of the bias:**

Suppose the true DGP is: $g_i = \alpha + \beta \ln(y_{i0}) + \varepsilon_i$, but we observe only countries where $\ln(y_{iT}) > c$ (end-period income above a threshold). Since $\ln(y_{iT}) \approx \ln(y_{i0}) + g_i \cdot T$, the selection rule creates a positive correlation between $\ln(y_{i0})$ and $\varepsilon_i$ in the selected sample, biasing $\hat{\beta}$ downward (making convergence appear stronger than it is).

---

#### Pitfall 2: Measurement Error in Historical GDP

**The problem:** The Maddison data used by Baumol for 1870 GDP per capita are **reconstructed estimates**, often based on sparse historical records, and are subject to substantial measurement error. Countries' income levels in 1870 are not precisely known.

**Why it matters — Regression to the Mean:**

- Let the true initial income be $y_{i0}^*$, but we observe $y_{i0} = y_{i0}^* + u_i$ (with measurement error $u_i$).
- If measurement error is classical (uncorrelated with the true value and the error term), the estimated coefficient $\hat{\beta}$ in a regression of $g_i$ on $\ln(y_{i0})$ is **biased toward zero** in simple OLS (classical attenuation bias).
- **BUT** in convergence regressions, the **opposite** bias can occur. The reason: if $\ln(y_{i0})$ is measured with error, countries that are measured as **poorer than they really were** (negative $u_i$) will appear to have grown faster (because the denominator is too small), while countries measured as **richer than they really were** (positive $u_i$) will appear to have grown slower. This mechanical artefact — **Galton's fallacy of regression to the mean** — creates a spurious negative relationship between measured initial income and subsequent growth, even if no true convergence exists.

**Quah (1993) demonstrated:** Using i.i.d. income data with no actual convergence, simply adding measurement error to initial income and computing growth rates produces an apparent convergence coefficient that is negative and significant — a purely statistical artefact.

---

#### Pitfall 3: Omitted Variables Bias

**The problem:** Baumol's regression included only **one explanatory variable** — initial income. The Solow model itself predicts that growth depends on the **distance from steady state**, not just initial income. Steady-state income itself varies across countries based on structural parameters:

$$\text{Steady-state income} = f(s, n, g, \delta, h)$$

where $s$ = savings rate, $n$ = population growth, $g$ = technology growth, $\delta$ = depreciation, $h$ = human capital.

**Why it matters:**

- The regression $g_i = \alpha + \beta \ln(y_{i0}) + \varepsilon_i$ conflates two effects:
  1. The true convergence effect (catch-up to steady state)
  2. The effect of cross-country differences in steady-state determinants that are correlated with initial income
- Countries that were richer in 1870 may have had **higher savings rates, better institutions, more human capital, and lower population growth** — all of which also predict faster growth. If these are omitted and they correlate with initial income, the coefficient on $\ln(y_{i0})$ is biased.
- The coefficient $\beta$ captures **both** convergence *and* the fact that rich countries may have different steady states. Without controlling for steady-state determinants, one cannot identify which channel is operating.

**A concrete example:** Japan had very low income in 1870 but invested heavily in education and physical capital throughout the century. Its rapid growth was driven by **high steady-state determinants**, not just by being poor. Baumol's regression attributed all of Japan's catch-up to "being poor," when in reality Japan's steady state was rising rapidly due to policy choices.

---

### 5. Summary Table of Pitfalls

| Pitfall | Description | Direction of Bias | Key Contributor |
|---------|-------------|------------------|-----------------|
| **1. Selection bias** | Choosing countries that ended up rich excludes failed industrialisers | Overstates convergence ($\beta$ too negative) | De Long (1988) |
| **2. Measurement error** | Historical GDP data for 1870 are unreliable | Creates spurious convergence via regression-to-the-mean | Quah (1993), Galton (1886) |
| **3. Omitted variables** | No controls for savings, population growth, human capital, institutions | Biases $\beta$ because steady-state determinants correlate with initial income | MRW (1992) |

---

### 6. How These Pitfalls Were Addressed: MRW (1992)

Mankiw, Romer, and Weil — *"A Contribution to the Empirics of Economic Growth"* (QJE, 1992) — addressed all three pitfalls in a landmark paper that rehabilitated the Solow model for cross-country data.

#### 6.1 Addressing Selection Bias — Representative Sample

| Sample | Countries | Key Feature |
|--------|-----------|-------------|
| **Non-oil** | 98 countries | Excludes only oil exporters; no selection by income level |
| **Intermediate** | 75 countries | Excludes countries with population < 1 million (alleviates data-quality concerns) |
| **OECD** | 22 countries | Comparable to Baumol's sample for benchmarking |

By using a sample not conditioned on end-period wealth, MRW eliminated survivor bias. They found that **unconditional convergence fails** in the full sample — the simple regression of growth on initial income shows **no significant negative relationship** across 98 countries. This confirmed De Long's critique: Baumol's convergence was an artefact of sample selection.

#### 6.2 Addressing Omitted Variables — The Augmented Solow Model

MRW augmented the Solow model by adding **human capital** as a third factor of production (alongside physical capital and labour). Their production function:

$$Y(t) = K(t)^\alpha H(t)^\beta (A(t)L(t))^{1-\alpha-\beta}$$

where:
- $K$ = physical capital
- $H$ = human capital (education, skills)
- $L$ = labour
- $A$ = labour-augmenting technology (grows exogenously at rate $g$)

**Derived estimating equation:**

$$\ln\left(\frac{Y(t)}{L(t)}\right) - \ln\left(\frac{Y(0)}{L(0)}\right) = \theta_0 + \theta_1 \ln y(0) + \theta_2 \ln s_k + \theta_3 \ln s_h + \theta_4 \ln(n + g + \delta) + \varepsilon$$

where:
- $y(0)$ = initial income per capita
- $s_k$ = physical capital investment rate (share of GDP invested)
- $s_h$ = human capital investment rate (proxied by secondary-school enrolment rate)
- $n$ = average population growth rate
- $g + \delta$ = sum of technology growth and depreciation (assumed constant at 0.05)
- $\theta_1$ is the **conditional convergence coefficient** — expected to be negative

#### 6.3 Addressing Measurement Error

MRW addressed measurement error through:
- **Sample restrictions:** Excluding small-population countries where data quality is poorest
- **Instrumental variables:** In robustness checks, using lagged values of regressors as instruments
- **Averaging over long periods (1960–1985):** Long-difference regressions reduce the influence of short-run measurement errors
- The 25-year averaging period (standard in growth empirics thereafter) smooths business-cycle noise

#### 6.4 MRW's Key Results

| Finding | Estimate | Implication |
|---------|----------|-------------|
| **Unconditional convergence** | $\theta_1 \approx 0$ (insignificant) in full sample | No absolute convergence across countries |
| **Conditional convergence** | $\theta_1 < 0$ (significant) at about −0.02 per year | Countries grow ~2% faster for every 1% they are below their steady state |
| **Human capital coefficient** | $\theta_3$ ≈ 0.66 (significant) | Human capital is as important as physical capital |
| **$R^2$** | ~0.78 (non-oil), ~0.81 (OECD) | The augmented Solow model explains ≈80% of cross-country income variation |
| **Implicit capital share** | $\alpha + \beta$ ≈ 0.67 | Consistent with a broad capital share including human capital |
| **Convergence speed** | ~2% per year | Implies half-life of deviation from steady state ≈ 35 years |

**The convergence speed of ~2% per year** became a standard calibration target in growth economics. It implies that an economy closes about half the gap to its steady state every 35 years — slow enough to be plausible given cross-country evidence, but slower than the 4–6% that a simple Solow calibration would predict (the "convergence speed puzzle").

#### 6.5 MRW Regression Equation (Detailed)

The full MRW estimating equation is:

$$ \ln\left(\frac{Y}{L}\right)_{i,1985} - \ln\left(\frac{Y}{L}\right)_{i,1960} = \beta_0 + \beta_1 \ln\left(\frac{Y}{L}\right)_{i,1960} + \beta_2 \ln\left(\frac{I}{Y}\right)_{i} + \beta_3 \ln\left(\text{SCHOOL}\right)_{i} + \beta_4 \ln(n_i + 0.05) + \varepsilon_i $$

where:
- $(I/Y)_i$ = average investment share of GDP (physical capital accumulation)
- $\text{SCHOOL}_i$ = percentage of working-age population in secondary school (human capital proxy)
- $n_i$ = average population growth rate
- $0.05$ = assumed value for $g + \delta$ (technology growth + depreciation)

---

### 7. Post-MRW Developments and Contemporary Understanding

| Development | Contribution | Key Reference |
|-------------|-------------|---------------|
| **Panel data estimation** | Country fixed effects control for time-invariant omitted variables (institutions, culture, geography) | Caselli, Esquivel & Lefort (1996); Islam (1995) |
| **System GMM** | Addresses endogeneity of regressors using internal instruments; finds faster convergence (3–6% per year) | Bond, Hoeffler & Temple (2001) |
| **Distribution dynamics** | Studies the entire cross-country income distribution, not just average behaviour; finds "twin peaks" (convergence clubs) | Quah (1993, 1997) |
| **Threshold/panel-cat** | Non-linearities in convergence; different regimes for rich and poor | Durlauf & Johnson (1995) |
| **Development accounting** | Decomposes income differences into factor accumulation vs TFP; finds TFP matters more than capital | Klenow & Rodríguez-Clare (1997); Hall & Jones (1999) |
| **Institutions vs geography** | Deep determinants of steady-state income; institutions trump geography | Acemoglu, Johnson & Robinson (2001) |

---

### 8. Exam Tips

**For the 8-mark part (A):**
- Start with the Solow model's diminishing returns intuition — this is the *theoretical anchor*.
- Define both absolute and conditional convergence clearly and give the distinction a full paragraph.
- Present Baumol's regression equation and explain each term.
- Cite the specific numbers: 16 countries, 1870–1979, $\hat{\beta} = -0.75$, $R^2 = 0.87$.
- Mention the convergence club hypothesis as Baumol's secondary finding.

**For the 12-mark part (B):**
- Organise your answer around the **three pitfalls** — use the table above for quick reference.
- For each pitfall: (i) what it is, (ii) why it biases Baumol's result, (iii) who demonstrated it, (iv) how MRW addressed it.
- **De Long's critique** is the most important single argument — dedicate at least 3–4 marks to it.
- Show the MRW equation and explain each term.
- Note that MRW found conditional but **not** absolute convergence — this is the key empirical result.
- Mention the convergence speed (2% per year) and its half-life (~35 years).

**Common mistakes to avoid:**
- ❌ Saying "Baumol proved convergence" — he found evidence that was overturned by better methods.
- ❌ Confusing absolute and conditional convergence.
- ❌ Omitting the actual regression equation.
- ❌ Discussing MRW without mentioning that they rejected absolute convergence.
- ❌ Not specifying that $g + \delta$ is assumed constant at 0.05.

---

### 9. Professor's Corner

> The Baumol–De Long–MRW episode is a classic case study in **econometric methodology** and the dangers of **endogenous sample selection**. It is often cited in discussions of:
>
> 1. **"Looking backward" bias in economic history** — selecting a sample based on current outcomes and projecting backwards. This is the same statistical fallacy as "survivorship bias" in finance (comparing performance of stocks that survived delisting).
>
> 2. **The importance of economic theory for empirical specification.** Baumol's atheoretical regression (growth on initial income) was doomed by omitted variables. MRW showed that the Solow model — properly specified with human capital — fits the data well. Theory **must** guide empirical work.
>
> 3. **The conditional convergence result** ($\approx$ 2% per year) remains one of the most robust empirical regularities in macroeconomics, replicated across hundreds of studies with different samples, periods, and estimation methods. It is arguably the single most important empirical finding in growth economics.
>
> 4. **Remaining puzzles:** (a) The convergence speed is slower than basic Solow calibration predicts (the "speed puzzle"). (b) The model works well for OECD but poorly for Sub-Saharan Africa — suggesting threshold effects or poverty traps. (c) Human capital measurement (years of schooling vs quality of education) remains controversial — using Barro–Lee or PISA-adjusted data gives different results. (d) Technology is not a pure public good — absorptive capacity and institutional quality determine whether poor countries can actually adopt rich-country technologies.
>
> 5. **Exam relevance:** This question bridges Macroeconomics (Solow model) and Development Economics (why some countries stay poor). It also connects to the **institutions vs geography debate** (Acemoglu, Johnson & Robinson) — institutions are a deep determinant of the steady state, and thus of conditional convergence.
>
> **Must-read references for deeper understanding:**
> - Baumol, W.J. (1986). Productivity Growth, Convergence, and Welfare. *AER*, 76(5), 1072–1085.
> - De Long, J.B. (1988). Productivity Growth, Convergence, and Welfare: Comment. *AER*, 78(5), 1138–1154.
> - Mankiw, N.G., Romer, D. & Weil, D.N. (1992). A Contribution to the Empirics of Economic Growth. *QJE*, 107(2), 407–437.
> - Quah, D. (1993). Galton's Fallacy and Tests of the Convergence Hypothesis. *Scandinavian Journal of Economics*, 95(4), 427–443.
>
> *See also: Solow model notes (Macroeconomics) for the theoretical basis; endogenous growth theory notes for alternative predictions of non-convergence.*

---

> **Mark allocation (20 marks):**
> - 8 marks for Part A: Definition of convergence (2) | Absolute vs conditional (2) | Solow mechanism (1) | Baumol regression, sample, and findings (3)
> - 12 marks for Part B: Selection bias / De Long critique (4) | Measurement error / regression-to-the-mean (3) | Omitted variables (3) | MRW solution and results (2)
> - Includes marks for accurate equations, clear exposition, and evaluation
