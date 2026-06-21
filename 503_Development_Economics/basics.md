# Basics — Development Economics

> Foundational concepts before diving into the detailed models and country case studies.
> **After basics →** [Full Study Notes](./README.md)

---

## What Is Development Economics About?

Development economics studies why some countries are rich and others poor, and what policies can transform low-income economies into prosperous ones. It goes beyond standard growth theory to examine structural change, institutional quality, distribution, gender relations, and the legacies of colonialism and global power asymmetries.

**Core question:** *Why do billions remain in poverty despite centuries of global economic growth?*

Key debates in the field include:
- Are poor countries poor because of **internal deficiencies** (bad institutions, low savings, traditional culture) or **external exploitation** (colonial extraction, unequal trade, neocolonial dependence)?
- Can developing countries follow the **same path** as today's rich countries, or do they face fundamentally different structural conditions?
- What is the role of **international institutions** (IMF, World Bank, WTO) in shaping development outcomes?
- How do **gender relations** and **social norms** affect — and get affected by — economic development?

---

## Key Definitions

| Term | Simple Explanation |
|------|--------------------|
| **Development** | Multidimensional improvement in living standards, health, education, and freedoms — not just GDP growth |
| **Underdevelopment** | A condition of low income, weak institutions, poor health/education outcomes, and technological backwardness; may be created or perpetuated by global economic structures |
| **Dependency** | A structural condition where peripheral economies rely on core economies for capital, technology, and markets, perpetuating underdevelopment |
| **Dualistic Development** | The coexistence of a modern, urban, industrial sector alongside a traditional, rural, subsistence sector within the same economy |
| **Convergence** | The hypothesis that poorer economies grow faster than richer ones, eventually catching up in income levels |
| **Conditionality** | Policy reforms required by the IMF/World Bank as a condition for receiving loans |
| **Feminization of agriculture** | Rising share of women in agricultural labour, often due to male out-migration and changing agrarian structures |
| **Comprador Group** | A local elite in developing countries that serves as an intermediary for foreign capital, benefiting from and perpetuating dependent relationships |
| **Classical Patriarchy** | A system of male dominance characterised by patrilineal inheritance, patrilocal residence, and restricted female mobility |
| **Agency** | The capacity to define goals and act upon them within social constraints (Giddens 1979) |
| **Positive Outlier** | A country that performs significantly better on social indicators than predicted by its income level (e.g., Bangladesh) |
| **False Paradigm Model** | The argument that development advice from Western-trained economists applies inappropriate models to developing-country contexts |
| **Unpaid employment** | Work (often domestic or subsistence) that contributes to economic output but is not captured in wage employment statistics |
| **Structural Adjustment** | Market-oriented policy reforms (liberalisation, privatisation, austerity) imposed by IFIs in exchange for loans during the 1980s–90s |

---

## The Two Big Development Questions

### 1. Why Are Some Countries Rich and Others Poor?

The central debate in development economics. Four main schools of thought:

**Dependency / Neocolonial School:** Underdevelopment is created by the global capitalist system. Colonialism extracted wealth; independence brought neocolonial control through trade, investment, and IFI conditionality. Development of the core required underdevelopment of the periphery.

**Neoclassical Counterrevolution:** Underdevelopment is caused by bad domestic policies — excessive state intervention, price distortions, corruption, weak property rights. Solution: free markets, privatisation, trade liberalisation, and getting prices right.

**Institutional School:** The quality of institutions (property rights, rule of law, governance) determines development outcomes. Good institutions emerged slowly in the West; developing countries need to build them.

**Geography / Endowment School:** Tropical location, disease burden, resource endowments, and being landlocked constrain development regardless of policies or institutions.

```
Dependency ←→ Neoclassical ←→ Institutional ←→ Geographic
  (external)      (internal)      (rules)         (endowment)
```

### 2. How Can Developing Countries Achieve Sustainable, Equitable Growth?

This question breaks into several sub-questions:

| Sub-question | Key Debates |
|-------------|-------------|
| **Growth vs distribution** | Does growth automatically reduce poverty (trickle-down)? Or is deliberate redistribution needed? |
| **State vs market** | Should the state lead development (industrial policy, planning) or get out of the way? |
| **Export orientation vs import substitution** | Is openness the path to growth (East Asia) or a trap (Latin America debt crisis)? |
| **Agriculture vs industry** | Should development prioritise industrialisation or agricultural transformation first? |
| **Gender and development** | Does growth automatically improve gender equity? Or can gender inequality persist despite growth? |
| **Role of IFIs** | Do IMF/World Bank programmes help or hurt developing countries? |

---

## The Development Connection Chain

```
Colonial History → Structural Constraints → Policy Choices → Growth → Distribution
                                                                        ↓
                                                               Human Development
                                                              (health, education,
                                                               gender equity)
```

| Link | Key Variables |
|------|--------------|
| Colonial History | Extractive institutions, commodity dependence, border artificiality |
| Structural Constraints | Geography, disease, resource curse, demographics |
| Policy Choices | Trade policy, fiscal policy, industrial policy, IFI agreements |
| Growth | GDP per capita, productivity, structural transformation |
| Distribution | Inequality, poverty, wage shares, regional disparities |
| Human Development | Life expectancy, education, nutrition, gender equality |

---

## Why This Matters for Your Exam

Development economics connects directly to both macroeconomics and political economy:

| Development Concept | Used In |
|--------------------|---------|
| Convergence theory | Solow growth model predictions — Macro 502 |
| Dual economy models | Lewis structural transformation — Macro & Development |
| IMF conditionality | Washington Consensus — Political Economy 512 |
| Dependency theory | Critique of Modernisation theory — Political Economy 512 |
| Gender and development | Naila Kabeer's agency framework — Development & Political Econ |
| Bangladesh paradox | Cross-country comparisons — Development & Political Econ |
| Trade concentration (RMG) | Export dependency, value addition — Development & Political Econ |
| Population dynamics | Demographic transition, labour supply — Macro 502 & Development |
| Panel data & endogeneity | Econometric methods for all courses |
| Cointegration & ARDL | Time-series analysis for Macro, Development, Health |

---

## The Econometric Tools You Need

Development economics increasingly relies on rigorous quantitative methods. These key tools appear directly in the MSc final examination (Batch 48, 2023):

| Tool | What It Does |
|------|-------------|
| **Instrumental Variables (IV)** | Addresses endogeneity — when explanatory variables correlate with the error term (e.g., health and income) |
| **Logit / Probit** | Models binary outcomes (employed/unemployed) with probability distributions |
| **Multinomial Logit** | Models choices among multiple categories (employed/self-employed/unemployed) |
| **Quantile Regression** | Estimates effects across the entire distribution (not just the mean) |
| **Canonical Correlation Analysis (CCA)** | Examines relationships between two sets of variables |
| **Koyck Transformation** | Converts distributed lag models to autoregressive form |
| **Almon Polynomial Approach** | Flexible lag distribution without Koyck's restrictive assumptions |
| **Dickey-Fuller / ADF / PP / KPSS** | Tests for stationarity and unit roots in time series |
| **Zivot-Andrews Test** | Unit root test allowing for structural breaks |
| **ARDL Bounds Testing** | Tests cointegration with mixed I(0)/I(1) variables |
| **ARIMA / Box-Jenkins** | Models time series with autoregressive and moving-average components |
| **VAR / Granger Causality** | Models interdependent time series and tests predictive relationships |
| **Fixed Effects (LSDV) / Random Effects** | Panel data methods to control for unobserved heterogeneity |

---

## 🎯 Practice with Previous Finals

| Batch | Course | Theme | Link |
|-------|--------|-------|------|
| 47 (MSc 2022) | Dev 503 | Dependence, Convergence, Gender, IMF | [Open Questions](../question-banks/batch-finals/batch-47/dev-503.md) |
| 48 (MSc 2023) | Dev 503 | Econometric Methods for Development | [Open Questions](../question-banks/batch-finals/batch-48/dev-503.md) |
