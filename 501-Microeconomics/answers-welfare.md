# Welfare Economics — Comprehensive Exam Answers

> **Target:** Topic 4 (CV/EV/CS), Topic 5A (Social Welfare Criteria), Topic 5B (Pareto Optimality & Welfare Theorems)
> **Style:** Concise, structured, exam-ready. Unicode math throughout.

---

# Topic 4 — Welfare Economics: CV, EV & Consumer Surplus

---

### Question 1
**Distinguish Compensating Variation (CV) and Equivalent Variation (EV). How are they different from Consumer's Surplus (CS)?** *(10/4 marks)*

**Answer:**

**Definitions:**

| Measure | Definition | Formula (price decrease, p₁¹ < p₁⁰) |
|---------|-----------|--------------------------------------|
| **CV** | Money taken from consumer *after* price fall to restore original utility u⁰ | CV = e(p¹, u¹) − e(p¹, u⁰) = w − e(p¹, u⁰) |
| **EV** | Money given to consumer *before* price fall to make them as well off as after | EV = e(p⁰, u¹) − e(p⁰, u⁰) = e(p⁰, u¹) − w |
| **CS** | Area under Marshallian demand between old and new price | CS = ∫_{p₁⁰}^{p₁¹} x₁(p₁, p̄₋₁, w) dp₁ |

**Key distinctions:**

- **CV** uses *new prices, original utility* as reference point. It asks: "After the price change, how much money must be taken/given to return to the original indifference curve?"
- **EV** uses *old prices, new utility* as reference point. It asks: "Before the price change, how much money would be needed to reach the new indifference curve?"
- **CS** is the area beneath the *uncompensated (Marshallian)* demand curve — it mixes income and substitution effects.
- CV & EV are derived from *Hicksian (compensated)* demand curves and are exact welfare measures (theoretically superior).
- CS is observable (Marshallian demand is empirically estimable) but is an approximation unless income effects are zero.

**Key reference points:**

```
            CV              EV              CS
Reference  u⁰ (original)   u¹ (new)        Mixed (observable)
Prices     p¹ (new)        p⁰ (old)        p⁰ → p¹
Demand     Hicksian (u⁰)   Hicksian (u¹)   Marshallian (w)
```

> **Exam Tip:** Always state which utility level each measure is anchored to. CV = original utility; EV = new utility. This determines whether CV < CS < EV or reversed.

---

### Question 2
**For price decrease (normal goods): EV > CS > CV. For price increase, explain.** *(10/5 marks)*

**Answer:**

**For a price decrease (p₁↓) with normal goods:**

- **EV** uses Hicksian demand at *new* (higher) utility u¹ → Hicksian demand shifts right (income effect positive for normal goods) → largest area.
- **CS** uses Marshallian demand — lies between the two Hicksian curves → intermediate area.
- **CV** uses Hicksian demand at *original* (lower) utility u⁰ → smallest area.

```
EV > CS > CV
```

**For a price increase (p₁↑) with normal goods:**

- **CV** is now measured at original utility u⁰ (consumer needs compensation after price rise to stay at u⁰). The Hicksian demand at u⁰ is to the right → largest area.
- **EV** is measured at new (lower) utility u¹ → Hicksian demand at u¹ is to the left → smallest area.

```
EV < CS < CV
```

**Graphical logic:**

| Scenario | p₁↓ (normal good) | p₁↑ (normal good) |
|----------|------------------|------------------|
| Hicksian(u⁰) | Left of Marshallian | Right of Marshallian |
| Hicksian(u¹) | Right of Marshallian | Left of Marshallian |
| Ordering | EV > CS > CV | CV > CS > EV |

**Intuition:** For normal goods, a price fall increases real income → consumer would buy more if compensated → EV > CV. The gap between CV and EV reflects the income effect.

> **Exam Tip:** Draw the three demand curves (h(p,u⁰), x(p,w), h(p,u¹)) intersecting at p⁰ and p¹. Shade areas in two colors for price decrease and price increase cases. This is a guaranteed diagram question.

---

### Question 3
**Cobb-Douglas u = x₁^½ x₂^½. Given {p⁰,m⁰} = {{4,4},300}, {p¹,m¹} = {{2,4},300}. Compute indirect utilities, costs, EV, CV, CS. Examine relationship → nature of commodities.** *(10/5 marks)*

**Answer:**

**Step 1 — Walrasian demands:**

For u = x₁^α x₂^(1−α) with α = ½:
- x₁(p, m) = αm/p₁ = 150/p₁
- x₂(p, m) = (1−α)m/p₂ = 150/p₂

**Step 2 — Indirect utility:**

v(p, m) = (αm/p₁)^α · ((1−α)m/p₂)^(1−α)

At p⁰ = (4, 4), m = 300:
- x₁⁰ = 150/4 = 37.5, x₂⁰ = 150/4 = 37.5
- v⁰ = (37.5)^½ · (37.5)^½ = 37.5

At p¹ = (2, 4), m = 300:
- x₁¹ = 150/2 = 75, x₂¹ = 150/4 = 37.5
- v¹ = (75)^½ · (37.5)^½ = √2812.5 ≈ 53.03

**Step 3 — Expenditure function:**

For u = x₁^½ x₂^½:
- h₁ = u · (p₂/p₁)^½, h₂ = u · (p₁/p₂)^½
- e(p, u) = p₁h₁ + p₂h₂ = 2u · √(p₁p₂)

**Step 4 — CV (price decrease):**

CV = w − e(p¹, u⁰)

e(p¹, u⁰) = e((2,4), 37.5) = 2 × 37.5 × √(2 × 4) = 75 × √8 = 75 × 2.828 = 212.1

**CV = 300 − 212.1 = 87.9**

**Step 5 — EV:**

EV = e(p⁰, u¹) − w

e(p⁰, u¹) = e((4,4), 53.03) = 2 × 53.03 × √(4 × 4) = 106.06 × 4 = 424.24

**EV = 424.24 − 300 = 124.24**

**Step 6 — CS:**

CS = ∫_{p₁=4}^{2} x₁(p₁, p₂, m) dp₁ = ∫₄² (150/p₁) dp₁ = 150[ln p₁]₄²
= 150(ln 2 − ln 4) = 150 ln(0.5) = −150 ln 2 ≈ −103.98

**CS = 103.98** (absolute value since price fell)

**Step 7 — Summary & relationship:**

| Measure | Value |
|---------|-------|
| EV | 124.24 |
| CS | 103.98 |
| CV | 87.9 |

**EV > CS > CV ✓** — confirms both goods are **normal goods**.

Since EV − CV = 124.24 − 87.9 = 36.34 > 0, there is a substantial income effect, consistent with Cobb-Douglas (unit income elasticity for both goods ⇒ both are normal).

> **Exam Tip:** Never forget to state that EV > CS > CV confirms normal goods. If the relation reversed (CV > CS > EV), goods would be inferior. Know the Cobb-Douglas expenditure function formula e(p,u) = 2u√(p₁p₂) for α = ½ — saves time.

---

### Question 4
**EV > CS > CV diagram (price decrease) and EV < CS < CV (price increase) — graphical analysis.** *(Practice Mid)*

**Answer:**

**Price Decrease (p₁↓):**

```
p₁
↑
|  h(p, u¹) — Hicksian at new (higher) utility
|  ↙  x(p,w) — Marshallian (observable)
|  h(p, u⁰) — Hicksian at original (lower) utility
|
| p₁⁰ ———┼————┼——┼——
|        │    │  │
| p₁¹ ———┼————┼——┼——┼——
|        │    │  │  │
|        │    │  │  │
|        │ EV │CS│CV│
|        │    │  │  │
└──────────────────────────→ x₁
```

- All three curves intersect at price p₁⁰ (original equilibrium)
- At p₁¹ < p₁⁰, for a normal good: h(p,u¹) > x(p,w) > h(p,u⁰)
- EV = area left of h(p, u¹) between p₁⁰ and p₁¹ → **largest**
- CS = area left of x(p,w) between p₁⁰ and p₁¹ → **intermediate**
- CV = area left of h(p, u⁰) between p₁⁰ and p₁¹ → **smallest**

**Price Increase (p₁↑):**

```
p₁
↑
|  h(p, u⁰) — Hicksian at original (higher) utility
|  ↙  h(p, u¹) — Hicksian at new (lower) utility
|  x(p,w) — Marshallian
|
| p₁¹ ———┼————┼——┼——
|        │    │  │
| p₁⁰ ———┼————┼——┼——┼——
|        │    │  │  │
|        │ CV │CS│EV│
|        │    │  │  │
└──────────────────────────→ x₁
```

- At p₁¹ > p₁⁰, for a normal good: h(p,u⁰) > x(p,w) > h(p,u¹)
- CV = area left of h(p, u⁰) → **largest**
- CS = area left of x(p,w) → **intermediate**
- EV = area left of h(p, u¹) → **smallest**

**Why the reversal?** The reference utility level flips. For a price *decrease*, EV references the better (new) state — bigger welfare gain. For a price *increase*, CV references the better (original) state — bigger compensation needed.

> **Exam Tip:** In exams, sketch the three demand curves intersecting at one point. Label the income and substitution effects. The Marshallian demand always lies *between* the two Hicksian demands for normal goods.

---

### Question 5
**Show: Marshallian CS overstates CV and understates EV for normal goods.** *(WelfareChange paper §4)*

**Answer:**

**For a price decrease (p₁↓) with normal good:**

- **Good is normal** ⇒ ∂x₁/∂m > 0 ⇒ income effect is positive
- When price falls, real income rises → consumer buys more of the good due to income effect
- **Marshallian demand** includes BOTH substitution and income effects → it is flatter (more elastic) than the Hicksian demand at u⁰
- **CV** uses Hicksian demand at u⁰ (compensated, no income effect) → steeper → smaller area
- Therefore: **CS > CV** (CS overstates CV)

- **EV** uses Hicksian demand at u¹ (higher utility level) → shifted right for normal goods → larger area
- Therefore: **EV > CS** (CS understates EV)

**For a price increase (p₁↑) with normal good:**

- Real income falls → consumer buys less due to income effect
- Marshallian demand lies between the two Hicksian curves
- **CV > CS > EV** — CS overstates EV, understates CV

**Magnitude of error:**

| Condition | Error (CS vs CV/EV) |
|-----------|---------------------|
| Zero income effect (quasilinear) | CS = CV = EV (exact) |
| Small price change | CS ≈ CV ≈ EV (Willig bounds) |
| Normal good, large price change | CS ≠ CV ≠ EV, ordering per above |
| Inferior good | Reversed ordering |

**Willig (1976) bounds:** For realistic income elasticities and price changes, the percentage error from using CS instead of CV or EV is typically < 5%.

> **Exam Tip:** Cite Willig bounds as a practical justification for using CS despite its theoretical inferiority. For quasilinear utility, all three measures coincide exactly — mention this special case.

---

# Topic 5A — Social Welfare Criteria

---

### Question 1
**Define social welfare. Critically examine three key issues Pigou dealt with.** *(10 marks)*

**Answer:**

**Definition of Social Welfare:**

Social welfare is the aggregate well-being of all individuals in a society. Pigou defined it as the sum of individual utilities derived from the consumption of goods and services, but he restricted his analysis to *economic welfare* — "that part of social welfare that can be brought directly or indirectly into relation with the measuring rod of money." Economic welfare excludes non-economic elements (working conditions, security, human relationships) but is a proxy for total welfare.

**Three Key Issues Pigou Dealt With:**

**(1) Definition and Scope of Economic Welfare**

| Aspect | Pigou's View |
|--------|-------------|
| Scope | Only economic welfare (measurable by money) |
| Individual welfare | Sum of satisfactions from goods/services |
| Social welfare | Sum of all individual welfares |
| Economic welfare | Part of total welfare linked to money measurement |
| Relation | Economic welfare and national income are *coordinate* |

- Pigou limited his study to economic welfare because general welfare is too wide and complex to analyse rigorously.
- *Criticism:* The division between economic and non-economic welfare is arbitrary and superficial. Many factors (environment, relationships) affect welfare but are hard to monetize. Repeated as too simplistic a basis for welfare analysis.

**(2) Dual Conditions for Maximum Social Welfare**

- **Condition (i) — Maximisation of national income:** Given tastes and income distribution, an increase in national income (without corresponding change in factor supply) increases social welfare.
- **Condition (ii) — Transfer of income from rich to poor:** If national income is constant, transferring income from rich to poor increases welfare, based on:
  - *Equal capacity for satisfaction postulate:* People receive equal satisfaction from equal real income.
  - *Diminishing marginal utility of income:* A rupee transferred from rich (low MU of money) to poor (high MU of money) raises total utility.

- *Criticism of Condition (i):* National income may rise due to inflation — poor may become worse off. Also, national income is difficult to measure accurately.
- *Criticism of Condition (ii):* The assumption of equal capacity for satisfaction is scientifically untenable — utility functions differ across individuals. This represents a value judgement in favour of equal distribution, not objective science.

**(3) Distinction Between Private and Social Costs (Externalities)**

Pigou identified the divergence between private net product and social net product:

| Concept | Definition |
|---------|-----------|
| Private net product | Contribution to national dividend that accrues to the private investor (saleable output) |
| Social net product | Aggregate contribution to national dividend (includes external effects) |
| Divergence | Social > Private (external economies) or Private > Social (external diseconomies) |

- **Example of external economy:** Technical training of workers by a firm benefits society beyond the firm's private gain.
- **Example of external diseconomy:** Factory smoke raises laundry bills of neighbours — cost borne by society, not the factory.
- **Pigou's remedy:** Tax industries where private net product > social net product; subsidize where social net product > private net product.

- *Criticism:* The divergence between private and social product cannot always be quantified in money terms. Pigou assumed the divergence is not inherent in free enterprise but correctable through government intervention. In reality, structural failures (immobility, indivisibility, imperfect knowledge) are so numerous they defy correction through social action.

**Overall Evaluation of Pigou:**

| Strength | Weakness |
|----------|----------|
| First systematic welfare economics theory | Based on cardinal utility — unrealistic |
| Rationale for state intervention | Value-laden, more normative than positive |
| Foundation for externality analysis | Assumes equal capacity for satisfaction (unproven) |
| Integrated normative and positive problems | Lacks rigour in private/social product distinction |

> **Exam Tip:** For "critically examine," always give both Pigou's position AND the standard criticisms (Robbins, ordinalist critique). Know that Pigou is considered the "father of welfare economics" but Pigouvian welfare economics was later supplanted by the Pareto-Bergson approach.

---

### Question 2
**Derive grand utility possibility frontier, determine 'point of bliss'. Does it ensure maximum SW?** *(10/6 marks)*

**Answer:**

**Concept of Grand Utility Possibility Frontier:**

In a 2×2×2 model (2 factors L,K; 2 goods X,Y; 2 consumers A,B):

1. **Production Possibility Curve (PPC):** Each point on the PPC is a Pareto-efficient output combination (MRPT_xy = MRS_xy).
2. **Utility Possibility Frontier (UPF):** For a given product-mix (point on PPC), the UPF shows the maximum utility attainable by B given A's utility level, obtained by distributing X and Y between A and B efficiently (MRS^A_xy = MRS^B_xy).
3. **Grand Utility Possibility Frontier (GUPF):** The *outer envelope* of all UPFs from every product-mix on the PPC. It represents the maximum utility combinations feasible given the economy's resources and technology.

```
     U_B
     ↑
     |    GUPF (envelope of all UPFs)
     |   ╱
     |  ╱
     | ╱  ── UPF₁ (from point 1 on PPC)
     |╱   ── UPF₂ (from point 2 on PPC)
     └────────────────→ U_A
```

**Determination of the Point of Bliss:**

The point of bliss is the tangency between the **GUPF** and the **highest attainable social welfare function (SWF)** represented by social indifference contours.

```
     U_B
     ↑
     |       SWF₃ (unattainable)
     |      SWF₂
     |     SWF₁
     |    ╱
     |   ╱ ● E (Point of Bliss)
     |  ╱
     | ╱
     |╱
     └────────────────→ U_A
                      GUPF
```

- **Point E:** Tangency between GUPF and SWF₂ → slope of GUPF = slope of social indifference contour
  - ∂U_B/∂U_A (at the margin of GUPF) = ∂W/∂U_A / ∂W/∂U_B (marginal social rate of substitution between utilities)
- At E: **Pareto efficiency (all points on GUPF are Pareto-optimal) + distributional equity (determined by SWF shape)**

**Does the Point of Bliss Ensure Maximum Social Welfare?**

| Claim | Explanation |
|-------|-------------|
| **YES — it identifies the constrained maximum** | Given resources and technology, no reallocation can reach a higher social indifference contour |
| **NO — it does not by itself guarantee max SW** | The point of bliss depends on the *specific SWF* chosen. A different SWF (different value judgements about equity) yields a different optimum |
| **Pareto optimality is NECESSARY but NOT SUFFICIENT** | All points on the GUPF satisfy Pareto optimality, but only E maximizes social welfare. Bergson showed that Pareto-optimal points like c and c₁ on the GUPF are on lower social indifference contours than point d |
| **Requires explicit value judgements** | The SWF embodies ethical choices about interpersonal comparisons — these are value judgements, not objective facts |

> **Exam Tip:** The key exam point is that Pareto optimality ≡ all points on GUPF ✓, but SW maximization requires a specific point on the GUPF chosen by value judgements via the SWF. Bergson > Pareto for sufficiency.

---

### Question 3
**Define social welfare. Explain criteria: i) Growth of GNP ii) Bentham iii) Cardinalist.** *(Professor Q1)*

**Answer:**

**Definition of Social Welfare:**

Social welfare is the aggregate well-being of a society, encompassing the satisfaction levels of all individuals from economic and non-economic sources. Welfare economics evaluates alternative economic states (allocations of resources and distributions of rewards) from the perspective of society's well-being. The central task: if current welfare W < potential W*, show why and suggest how to raise W to W*.

**Three Criteria:**

**(i) Growth of GNP as a Welfare Criterion (Adam Smith)**

- **Premise:** Growth of national output (GNP) increases employment and goods available for consumption → welfare rises.
- **Implicit assumption:** The status quo of income distribution is acceptable/"ethical."
- **Formula:** ∆W > 0 if ∆GNP > 0

| Strengths | Weaknesses |
|-----------|------------|
| Objectively measurable | Ignores distribution — growth may benefit only the rich |
| Highlights efficiency as necessary for welfare | Growth may reduce welfare if it creates pollution, inequality, or social disruption |
| Simple and intuitive | GNP measures market activity, not well-being directly |

- *Conclusion:* Efficiency is necessary but not sufficient for SW maximization.

**(ii) Bentham's Criterion (Jeremy Bentham)**

- **Premise:** "Greatest good for the greatest number." Social welfare is the *sum* of individual utilities.
- **Formula:** W = U_A + U_B + U_C; ∆W > 0 if (∆U_A + ∆U_B + ∆U_C) > 0

| Problem | Illustration |
|---------|-------------|
| **Interpersonal comparability of deservingness** | A change where ∆U_A = +200, ∆U_B = +50, ∆U_C = −100 gives ∆W = +150. But this assumes A&B's gains "outweigh" C's loss — a value judgement about who deserves more. |
| **"Greatest good" vs "greatest number"** | Situation 1: U = (200, 50, 30), total = 280. Situation 2: U = (100, 80, 80), total = 260. Which is better? Bentham gives no clear rule when "greatest good" and "greatest number" conflict. |

- *Criticism:* Implicitly assumes ability to add utilities across individuals — requires cardinal utility and interpersonal comparisons. Ignores distributional equity.

**(iii) Cardinalist Criterion**

- **Premise:** Use the law of diminishing marginal utility of income to justify income redistribution.
- **Logic:** A rich person (income £1000) gains less utility from an extra £1 than a poor person (income £500). Therefore, redistributing income from rich to poor raises total social welfare.
- **SW maximization:** Equal income distribution maximizes welfare.

| Strengths | Weaknesses |
|-----------|------------|
| Introduces distributional concerns | Assumes all individuals have *identical* utility functions for money — empirically false |
| Intuitive appeal of diminishing MU | Ignores incentive effects — equal distribution may reduce work effort, shrinking total GNP |
| Provides explicit equity criterion | Redistribution affects resource allocation and incentives — cannot be examined in isolation |

- *Criticism:* A rich person may have a utility function that lies far above the poor person's — redistribution toward equality could *reduce* total welfare. Furthermore, equal incomes may induce less work → Pareto inefficiency.

> **Exam Tip:** For any social welfare criterion question, evaluate along two axes: (1) Does it handle efficiency? (2) Does it handle equity? Growth criterion = efficiency-only; Bentham = sum-ranking (equity-blind); Cardinalist = equity-focused but unrealistic assumptions.

---

### Question 4
**Define social welfare function. Derive grand utility possibility frontier, point of bliss.** *(Professor Q4, 49Qs Q4)*

**Answer:**

**Definition of Social Welfare Function (SWF):**

A social welfare function is a rule for ranking alternative social states based on the utility levels of individuals. It is analogous to an individual's utility function but operates in utility space:

W = F(U₁, U₂, ..., Uₙ)

where W is social welfare and Uᵢ is the utility of individual i.

- **Introduced by:** Abram Bergson (1938), developed by Samuelson, Tinter, Arrow.
- **Purpose:** To evaluate changes where some gain and some lose — situations where Pareto criterion cannot apply.
- **Form:** A set of social indifference contours in utility space (U_A vs U_B). Each contour shows utility combinations yielding the same social welfare.

**Derivation of Grand Utility Possibility Frontier (GUPF) and Point of Bliss:**

*Step 1:* Start from the 2×2×2 model — two factors (L,K), two goods (X,Y), two consumers (A,B).

*Step 2:* From each point on the Production Possibility Curve (PPC), construct a **Utility Possibility Frontier (UPF)** — the locus of efficient utility pairs (U_A, U_B) attainable by distributing the given output between A and B efficiently (MRS^A_xy = MRS^B_xy).

*Step 3:* The **Grand Utility Possibility Frontier** is the outer envelope of all such UPFs across all product-mixes on the PPC:

```
     U_B
     ↑
     |   ╱ GUPF
     |  ╱
     | ╱─── UPF₁ (at (X₁,Y₁) on PPC)
     |╱──── UPF₂ (at (X₂,Y₂) on PPC)
     └────────→ U_A
```

*Step 4:* Superimpose the social indifference contours (from the SWF). The **point of bliss (E)** is where the GUPF is tangent to the highest attainable social indifference contour:

```
     U_B
     ↑
     |       I₃ (higher SW — unattainable)
     |      I₂
     |     I₁
     |    ╱
     |   ╱ ● E (point of bliss)
     |  ╱
     | ╱
     |╱
     └────────────────→ U_A
        GUPF
```

**Condition for bliss point:**

MRPT_xy = MRS^A_xy = MRS^B_xy  (Pareto efficiency — satisfied everywhere on GUPF)

AND
Slope(GUPF) = Slope(Social Indifference Contour)  (distributional judgement — satisfied only at E)

**Mathematical condition at bliss point:**

∂U_B/∂U_A (from GUPF) = (∂W/∂U_A) / (∂W/∂U_B) (from SWF)

> **Exam Tip:** The bliss point is not unique — it depends on the specific SWF (different value judgements → different bliss points). Arrow's Impossibility Theorem later questioned whether a consistent SWF can be constructed from individual preferences.

---

### Question 5
**Critically explain three key things Pigou dealt with in social welfare analysis.** *(Professor Q5, 49Qs Q5)*

**Answer:**

*(This question overlaps with Q1 above. Provide a condensed, targeted answer.)*

Pigou's *The Economics of Welfare* (1932) laid the foundation of neoclassical welfare economics around three pillars:

**Pillar 1: Definition and Measurement of Economic Welfare**

- Defined economic welfare as "that part of social welfare that can be brought directly or indirectly into relation with the measuring rod of money."
- Economic welfare and national income are "coordinate" — changes in economic welfare correspond to changes in national dividend.
- Social welfare = sum of individual economic welfares (cardinal, additive).
- **Criticism:** (i) Cannot separate economic from non-economic welfare (Robbins). (ii) Cardinal utility measurement is impossible. (iii) Interpersonal comparisons lack scientific basis.

**Pillar 2: Dual Conditions for Welfare Maximization**

| Condition | Content | Underlying Assumption |
|-----------|---------|----------------------|
| (i) National income growth | Given factor supply, increase in national dividend → increase in SW | Tastes and distribution unchanged |
| (ii) Income redistribution | Transfer from rich to poor increases SW (given constant NI) | Equal capacity for satisfaction + diminishing MU of income |

- **Criticism of (i):** Inflation can raise money NI while reducing real welfare of the poor. National income is difficult to measure accurately.
- **Criticism of (ii):** "Equal capacity for satisfaction" is scientiﬁcally untenable — it is a value judgement favoring equality, not an objective postulate.

**Pillar 3: Private vs Social Net Product (Externalities)**

- Private net product: contribution to national dividend accruing to the private investor.
- Social net product: aggregate contribution to national dividend (including external effects).
- **Divergence examples:**
  - Social > Private: Technical training by firms (positive externality)
  - Private > Social: Factory smoke increasing neighbourhood laundry costs (negative externality)
- **Policy prescription:** Tax industries where private > social net product; subsidize where social > private net product.
- **Criticism:** (i) Divergence cannot always be quantified. (ii) Pigou assumed divergences are exceptions correctable by state intervention — in reality structural market failures are pervasive. (iii) The policy recommendations are normative, not positive.

**Overall:** Pigou's contribution — first systematic welfare theory, integrated normative with positive economics, provided rationale for government intervention. His limitations — cardinal utility assumption, arbitrary welfare/non-welfare dichotomy, lack of rigour in private/social product distinction.

> **Exam Tip:** Pigou questions appear in multiple forms (Q1, Q5, and variations). Prepare one comprehensive answer. The examiner looks for: (1) knowledge of Pigou's framework, (2) ability to identify his assumptions, (3) standard criticisms.

---

### Question 6
**Define social welfare function. How could it be used as a criterion to measure SW?** *(Professor Given Q4)*

**Answer:**

**Definition of Social Welfare Function (SWF):**

W = F(U₁, U₂, ..., Uₙ)

A SWF is a rule for aggregating individual utility levels into a measure of overall social welfare. It provides a *complete ranking* of all feasible social states. Each state is a vector of utilities (U₁,...,Uₙ) and the SWF assigns a real number W to that vector.

- **Bergson-Samuelson SWF:** Individual utilities are arguments; the functional form embodies ethical/value judgements about distribution.
- **Social indifference contours:** In two-person space (U_A, U_B), each contour connects utility pairs yielding the same W. Contours further northeast = higher welfare.

**Using the SWF as a Welfare Criterion:**

**(1) Comparing alternative social states**

- For any two states S and S' with utility vectors (U_A, U_B) and (U'_A, U'_B):
  - If W' > W, state S' is socially preferred to S.
  - If W' = W, the two states are socially indifferent.

**(2) Constrained optimization — the bliss point**

- The SWF is maximized subject to the Grand Utility Possibility Frontier (GUPF):

```
     Max  W = F(U_A, U_B)
     s.t. (U_A, U_B) ∈ GUPF
```

- At the optimum: Slope(GUPF) = Slope(Social Indifference Contour)

**(3) Evaluating Pareto-incomparable changes**

- Pareto criterion fails when some gain and others lose. The SWF resolves this by allowing trade-offs across individuals based on explicit value judgements:
  - A change increasing U_A by +10 and decreasing U_B by −5 is SW-improving if W(·) places sufficient weight on A relative to B.

**Advantages:**

| Advantage | Explanation |
|-----------|-------------|
| Explicit value judgements | The weights in the SWF make distributional assumptions transparent |
| Complete ranking | All social states can be compared, not just Pareto-rankable ones |
| Framework for policy | Government can use SWF to evaluate tax, spending, regulatory changes |

**Limitations:**

| Limitation | Explanation |
|------------|-------------|
| No objective construction | SWF requires a "social planner" or must be derived from individual preferences |
| Arrow's Impossibility | Arrow (1951) proved no SWF can simultaneously satisfy universal domain, Pareto, independence of irrelevant alternatives, and non-dictatorship |
| Interpersonal comparisons | Any SWF that ranks states where some gain/lose requires interpersonal utility comparisons |

> **Exam Tip:** Distinguish between a *Bergson-Samuelson* SWF (assumes a social planner with given value judgements) and *Arrow's* social welfare function (attempts to aggregate individual preferences). Bergson's is used in welfare maximization; Arrow's leads to impossibility.

---

### Question 7
**What are the major assumptions of SW maximization in a 2×2×2 model?** *(Professor Given Q5)*

**Answer:**

The 2×2×2 general equilibrium model for social welfare maximization rests on the following assumptions:

**A. Structural Assumptions of the 2×2×2 Framework:**

| Assumption | Detail |
|------------|--------|
| 2 Factors | Labour (L) and Capital (K) — quantities are fixed and given |
| 2 Goods | X and Y — each produced by one firm |
| 2 Consumers | A and B — each maximizes utility |
| Production | Each firm produces only one good. No economies of scale. |
| Utility | Consumers' utilities are independent (no consumption externalities) |
| Motivation | Consumers maximize utility; producers maximize profit |

**B. Efficiency Assumptions (Pareto Conditions):**

1. **Consumption efficiency:** MRS^A_xy = MRS^B_xy — equal marginal rates of substitution across consumers.
2. **Production efficiency:** MRTS^X_LK = MRTS^Y_LK — equal marginal rates of technical substitution across firms.
3. **Product-mix efficiency:** MRPT_xy = MRS_xy — the rate of product transformation equals consumers' marginal rate of substitution.

**C. Assumptions for Perfect Competition (First Welfare Theorem):**

| Assumption | Implication |
|------------|-------------|
| Price-taking behaviour | No market power — all agents are price takers |
| Complete markets | Markets exist for all goods and factors |
| No externalities | No unpriced effects in production or consumption |
| No public goods | All goods are private and rivalrous |
| Convex preferences | Indifference curves convex to origin |
| Convex technology | Diminishing returns or constant returns to scale |
| Continuous demand functions | Ensures existence of equilibrium |
| Perfect information | All agents have full information about prices and quality |
| Perfect factor mobility | Factors can move freely between sectors |

**D. Distributional Assumptions (for SW maximization, beyond Pareto):**

| Assumption | Explanation |
|------------|-------------|
| Existence of a SWF | A social welfare function F(U_A, U_B) can be specified, embodying societal value judgements |
| Concave SWF | Diminishing marginal social utility from each individual's utility (distributional preference) |
| No interpersonal utility comparisons | The SWF itself embeds these — they are value judgements, not objective facts |

**E. Mathematical Regularity Conditions:**

- Production functions: continuous, twice differentiable, diminishing MRTS.
- Utility functions: continuous, strictly increasing, strictly quasiconcave.
- Production possibility curve: concave to origin.
- Social indifference curves: convex to origin (ensures unique tangency with GUPF).

**Implication:** Under these assumptions, the competitive equilibrium is Pareto-optimal (First Welfare Theorem) and any Pareto optimum can be achieved as a competitive equilibrium with suitable lump-sum transfers (Second Welfare Theorem). The SWF then selects the "best" among all Pareto-optimal points along the GUPF.

> **Exam Tip:** When asked about assumptions, distinguish between (1) assumptions needed for Pareto optimality (market structure, convexity, no externalities) and (2) additional assumptions needed for SW maximization (existence of SWF, value judgements). Many students miss this second category.

---

# Topic 5B — Pareto Optimality & Welfare Theorems

---

### Question 1
**"Pareto optimality necessary but not sufficient for SW maximization" — justify with 2×2×2 model.** *(10/7 marks)*

**Answer:**

**Statement:** A situation can be Pareto-optimal without maximizing social welfare. All SW maxima must be Pareto-optimal, but not all Pareto-optimal points are SW maxima.

**Proof via 2×2×2 Model:**

*Step 1 — All points on the PPC are Pareto-optimal:*

In a 2×2×2 model, any point on the production possibility curve satisfies all three Pareto conditions:
1. MRS^A_xy = MRS^B_xy (consumption efficiency)
2. MRTS^X_LK = MRTS^Y_LK (production efficiency)
3. MRPT_xy = MRS_xy (product-mix efficiency)

These conditions ensure no one can be made better off without making someone worse off. But they say nothing about *distributional equity*.

*Step 2 — The GUPF includes infinitely many Pareto-optimal points:*

From each point on the PPC, a UPF is derived. The envelope (GUPF) contains all Pareto-efficient utility combinations. Every point on the GUPF is Pareto-optimal — by definition, no reallocation can improve one person without harming the other.

*Step 3 — SW maximization requires a specific point on GUPF:*

```
     U_B
     ↑
     |   ╱ GUPF
     |  ╱
     |●c ╱ ●d
     | ╱
     |●c₁
     |╱
     └────────────────→ U_A
```

Points c, c₁, and d are all on the GUPF → all Pareto-optimal. But if d lies on a higher social indifference contour than c or c₁, then d yields higher social welfare. Hence, Pareto optimality alone cannot identify the social optimum.

*Step 4 — Bergson's superiority:*

| Criterion | What it does | Limitation |
|-----------|-------------|------------|
| Pareto optimality | Identifies efficient allocations (any point on GUPF) | Cannot rank Pareto-optimal points — all are "optimal" in efficiency sense |
| Bergson SWF | Selects the single best point (tangency of SWF with GUPF) | Requires explicit value judgements about distribution |

**Conclusion:** Pareto optimality is *necessary* because any SW maximum must be efficient (otherwise resources are wasted — welfare could increase without harming anyone). But it is *not sufficient* because among the infinite set of Pareto-efficient allocations, only one (given the SWF) maximizes social welfare. Efficiency without equity does not guarantee maximum social welfare.

> **Exam Tip:** The classic diagram shows the GUPF with social indifference curves. Point E (tangency) = SW maximum. Points c and c₁ on the GUPF are Pareto-optimal but on lower social indifference contours. This single diagram answers the entire question.

---

### Question 2
**Explain assumptions about MU of money for Hicks-Kaldor compensation. Can compensation be correct?** *(10/7 marks)*

**Answer:**

**The Hicks-Kaldor Compensation Criterion:**

A change from state A to state B improves social welfare if the gainers from the change could *potentially* compensate the losers and still be better off. If the gainers' willingness-to-pay exceeds the losers' willingness-to-accept, the change is welfare-improving — regardless of whether compensation is actually paid.

**Assumptions About Marginal Utility (MU) of Money:**

| Assumption | Explanation | Why Needed |
|------------|-------------|------------|
| **Constant MU of money** | The marginal utility of money is assumed constant for all individuals across the relevant income range | Allows money measures to serve as utility measures directly — a rupee of gain/loss means the same utility change for everyone |
| **No income effects on valuations** | Willingness-to-pay reflects true utility change independent of income level | If MU differs between rich and poor, a rich person's WTP of £2000 may represent less utility than a poor person's WTP of £1000 |
| **Ordinal utility sufficient** | Only ranking matters, not intensity — but money valuation implicitly treats money as cardinal utility proxy | The criterion claims to avoid interpersonal comparisons, but money valuations embed implicit comparisons |

**Can Compensation Be Correct?**

| Condition | Correct? | Reasoning |
|-----------|----------|-----------|
| **MU of money EQUAL across individuals** | YES | £1 of gain = £1 of loss in utility terms → Kaldor-Hicks gives correct welfare ordering |
| **MU of money UNEQUAL across individuals** | NO | Example: Millionaire A gains £2000 (low MU gain); Poor B loses £1000 (high MU loss). Kaldor-Hicks says gainers can compensate → welfare improves. But total utility actually FALLS. |
| **Potential ≠ Actual compensation** | AMBIGUOUS | If compensation is not actually paid, the distributional change is ignored — the outcome may worsen actual welfare despite potential Pareto improvement |
| **Constant MU unrealistic** | NO | MU of money *declines* with income. This is a well-established empirical regularity |

**The Critique (Robbins, Scitovsky):**

- Robbins (1932): Interpersonal comparisons of utility have no scientific basis. Kaldor-Hicks claims to avoid them but fails — any money-metric welfare judgement implicitly compares the MU of money across individuals.
- Scitovsky paradox: Kaldor-Hicks can yield contradictory rankings (A is better than B AND B is better than A) — the Scitovsky reversal test adds a second condition (losers cannot bribe gainers to reverse the change).
- Income distribution ignored: The criterion accepts the *status quo* income distribution as ethically neutral. If distribution is inequitable, the welfare ranking is biased toward the rich (who have higher WTP).

**Verdict:**

``` 
Can compensation be correct?
├── Strictly: Only if MU of money is identical across all individuals
├── Practically: Rarely correct — MU varies systematically with income
└── Usable as: A rough efficiency check, but must be supplemented by explicit distributional judgements
```

> **Exam Tip:** The key word is "potential" compensation. The examiner expects you to identify that potential ≠ actual compensation → income distribution effects are ignored. Also mention Scitovsky's paradox and the double test (Kaldor-Hicks + reversal test).

---

### Question 3
**2-person 2-good fixed supply: show Pareto optimality for consumption with equations.** *(7 marks)*

**Answer:**

**Setup:**

- 2 consumers: A and B
- 2 goods: X and Y (fixed total supply: X̄, Ȳ)
- A consumes (X_A, Y_A); B consumes (X_B, Y_B)
- Feasibility: X_A + X_B = X̄, Y_A + Y_B = Ȳ
- Utility functions: U_A(X_A, Y_A), U_B(X_B, Y_B) — continuous, strictly increasing, quasiconcave

**Definition of Pareto-Optimal Consumption:**

An allocation {(X_A, Y_A), (X_B, Y_B)} is Pareto-optimal in consumption if it is impossible to reallocate the fixed goods to make one consumer better off without making the other worse off.

**Mathematical Formulation:**

Maximize U_A(X_A, Y_A) subject to:
1. U_B(X_B, Y_B) ≥ Ū_B (B's utility constraint)
2. X_A + X_B = X̄ (resource constraint for X)
3. Y_A + Y_B = Ȳ (resource constraint for Y)
4. X_A, Y_A, X_B, Y_B ≥ 0 (non-negativity)

**Lagrangian:**

ℒ = U_A(X_A, Y_A) + λ[U_B(X̄ − X_A, Ȳ − Y_A) − Ū_B]

**First-order conditions:**

∂ℒ/∂X_A = ∂U_A/∂X_A + λ · ∂U_B/∂X_B · (−1) = 0
⇒ ∂U_A/∂X_A = λ · ∂U_B/∂X_B  ... (1)

∂ℒ/∂Y_A = ∂U_A/∂Y_A + λ · ∂U_B/∂Y_B · (−1) = 0
⇒ ∂U_A/∂Y_A = λ · ∂U_B/∂Y_B  ... (2)

**Dividing (1) by (2):**

(∂U_A/∂X_A) / (∂U_A/∂Y_A) = (∂U_B/∂X_B) / (∂U_B/∂Y_B)

**Equivalently:**

**MRS^A_xy = MRS^B_xy**

where MRS^i_xy = MU_x^i / MU_y^i = (∂U_i/∂X_i) / (∂U_i/∂Y_i)

**Interpretation:**

- The marginal rate at which consumer A is willing to substitute X for Y must equal the marginal rate at which consumer B is willing to substitute X for Y.
- If MRS_A > MRS_B, there is scope for mutually beneficial trade: A values X more than B does → transfer X from B to A, Y from A to B → both gain.
- The contract curve in the Edgeworth box is the locus of all points satisfying MRS_A = MRS_B.

**Graphical representation (Edgeworth box of exchange):**

- Dimensions: X̄ (width), Ȳ (height)
- A's origin: southwest corner; B's origin: northeast corner
- A's indifference curves: convex to southwest
- B's indifference curves: convex to northeast
- **Contract curve:** Points of tangency between A and B indifference curves
- At each tangency point: MRS^A_xy = MRS^B_xy ✓

**Implications:**

| Property | Significance |
|----------|-------------|
| Necessary condition | MRS equality must hold for Pareto-optimal distribution |
| Infinite optima | Every point on the contract curve is Pareto-optimal — different points imply different utility distributions |
| Not unique | The contract curve does not select a single "best" allocation — only the Pareto set |

> **Exam Tip:** The Lagrangian derivation is the core mathematical approach. Write it cleanly. Then explain the economics: if MRS differ, both can gain from trade until MRS equalize.

---

### Question 4
**Firm 1 external economies, firm 2 diseconomies. p₁ = p₂ = 15. C₁ = 0.1q₁² + 5q₁ − 0.1q₂², C₂ = 0.2q₂² + 7q₂ + 0.025q₁². Show Pareto optimality through taxes/subsidies. Find social dividend.** *(7 marks)*

**Answer:**

**Step 1 — Identify externalities:**

| Firm | Cost function | Externality |
|------|-------------|-------------|
| Firm 1 | C₁ = 0.1q₁² + 5q₁ − 0.1q₂² | −0.1q₂² → C₁ ↓ as q₂↑ ⇒ **external economy from Firm 2 to Firm 1** |
| Firm 2 | C₂ = 0.2q₂² + 7q₂ + 0.025q₁² | +0.025q₁² → C₂ ↑ as q₁↑ ⇒ **external diseconomy from Firm 1 to Firm 2** |

**Step 2 — Private optimum (each firm maximizes own profit, ignores externality):**

Each firm equates private MC to price (p = 15):

- MC₁ᵖʳⁱᵛ = ∂C₁/∂q₁ = 0.2q₁ + 5 = 15 ⇒ q₁ᵖʳⁱᵛ = 50
- MC₂ᵖʳⁱᵛ = ∂C₂/∂q₂ = 0.4q₂ + 7 = 15 ⇒ q₂ᵖʳⁱᵛ = 20

Private profits:
- π₁ᵖʳⁱᵛ = 15(50) − [0.1(2500) + 5(50) − 0.1(400)] = 750 − [250 + 250 − 40] = 750 − 460 = **290**
- π₂ᵖʳⁱᵛ = 15(20) − [0.2(400) + 7(20) + 0.025(2500)] = 300 − [80 + 140 + 62.5] = 300 − 282.5 = **17.5**
- **Total private profit = 307.5**

**Step 3 — Social optimum (maximize joint profit, internalize externalities):**

Total cost (social cost) function:
TC = C₁ + C₂ = (0.1q₁² + 5q₁ − 0.1q₂²) + (0.2q₂² + 7q₂ + 0.025q₁²)
= 0.125q₁² + 0.1q₂² + 5q₁ + 7q₂

Social marginal costs:

- SMC₁ = ∂TC/∂q₁ = 0.25q₁ + 5 = 15 ⇒ q₁* = **40**
- SMC₂ = ∂TC/∂q₂ = 0.2q₂ + 7 = 15 ⇒ q₂* = **40**

Social profits:
- π₁* = 15(40) − [0.1(1600) + 5(40) − 0.1(1600)] = 600 − [160 + 200 − 160] = 600 − 200 = **400**
- π₂* = 15(40) − [0.2(1600) + 7(40) + 0.025(1600)] = 600 − [320 + 280 + 40] = 600 − 640 = **−40**
- **Total social profit = 360**

**Step 4 — Pigouvian taxes/subsidies:**

The divergence between private and social optimum arises from externalities. Use taxes/subsidies to align private incentives with social efficiency.

| Firm | Private → Social | Problem | Policy |
|------|-----------------|---------|--------|
| Firm 1 | 50 → 40 | Overproduces — imposes external cost on Firm 2 (diseconomy) | **Tax** = marginal external cost at q₁* = ∂C₂/∂q₁ = 0.05q₁ = 0.05(40) = **2 per unit** |
| Firm 2 | 20 → 40 | Underproduces — provides external benefit to Firm 1 (economy) | **Subsidy** = marginal external benefit at q₂* = −∂C₁/∂q₂ = 0.2q₂ = 0.2(40) = **8 per unit** |

**Verification:**

With tax on Firm 1 (t = 2):
- MC₁ᵖʳⁱᵛ + t = 0.2q₁ + 5 + 2 = 0.2q₁ + 7 = 15 ⇒ q₁ = 40 ✓

With subsidy to Firm 2 (s = 8):
- MC₂ᵖʳⁱᵛ − s = 0.4q₂ + 7 − 8 = 0.4q₂ − 1 = 15 ⇒ q₂ = 40 ✓

**Step 5 — Social dividend:**

Social dividend = total profit at social optimum − total profit at private optimum

| | Private optimum | Social optimum |
|---|---|---|
| q₁ | 50 | 40 |
| q₂ | 20 | 40 |
| π₁ | 290 | 400 |
| π₂ | 17.5 | −40 |
| Total | **307.5** | **360** |

**Social Dividend = 360 − 307.5 = 52.5**

The social dividend (52.5) represents the net gain to society from correcting the externality through Pigouvian taxation.

> **Exam Tip:** The structure is always: (1) Find private optimum (MC = p), (2) Find social optimum (minimize total cost, or set SMC = p), (3) Compare outputs, (4) Compute tax/subsidy = marginal external effect at social optimum, (5) Compute social dividend = change in total profit. The negative profit for Firm 2 at social optimum is realistic — subsidies compensate for losses.

---

### Question 5
**State and explain First and Second Welfare Theorems with implications.** *(8 marks)*

**Answer:**

**First Welfare Theorem (Invisible Hand Theorem):**

> **Every competitive equilibrium is Pareto-optimal.**

*Formal statement:* If all agents have locally non-satiated preferences and markets are perfectly competitive, then every Walrasian equilibrium allocation is Pareto-efficient.

| Condition | Role |
|-----------|------|
| Local non-satiation | Ensures consumers spend all income and budget constraints bind |
| Perfect competition | All agents are price-takers — no market power |
| Complete markets | Markets exist for all goods (including contingent claims) |
| No externalities | All costs and benefits are reflected in prices |
| No public goods | Goods are rivalrous and excludable |

*Intuition:* The price mechanism coordinates decentralized decisions. At equilibrium:
- Consumers equate MRS to price ratio → MRS^A = MRS^B (consumption efficiency)
- Producers equate MRTS to factor price ratio → MRTS^X = MRTS^Y (production efficiency)
- MRPT = MRS (product-mix efficiency, via P = MC)

*Implications:*

| Implication | Explanation |
|-------------|-------------|
| Market efficiency | Free markets achieve efficient resource allocation without central planning |
| Non-intervention basis | Provides theoretical justification for laissez-faire |
| Limited by assumptions | When assumptions fail (monopoly, externalities), intervention may improve efficiency |

**Second Welfare Theorem:**

> **Any Pareto-optimal allocation can be realized as a competitive equilibrium with appropriate lump-sum transfers.**

*Formal statement:* Under convexity of preferences and production sets, for any Pareto-optimal allocation, there exists a set of prices and lump-sum transfers such that the allocation is a competitive equilibrium.

| Condition | Role |
|-----------|------|
| Convex preferences | Ensures supporting price hyperplane exists |
| Convex production sets | Ensures profit-maximizing output at given prices |
| Lump-sum transfers | Redistribute initial endowments without distorting incentives |

*Intuition:* Efficiency and equity can be separated. Society can first decide on a "fair" distribution (using lump-sum transfers), then let the market achieve efficiency through the price mechanism.

*Implications:*

| Implication | Explanation |
|-------------|-------------|
| **Separation of efficiency and equity** | Distribution can be handled via transfers; production can be left to markets |
| **Role for government** | Government should redistribute endowments (not intervene in prices) to achieve equity |
| **Policy design** | Redistributive taxes should be lump-sum (but in practice, lump-sum taxes are infeasible → distortionary taxes create second-best problems) |

**Comparison Table:**

| Feature | First Theorem | Second Theorem |
|---------|---------------|----------------|
| Direction | Competitive equilibrium → Pareto optimality | Pareto optimality → Competitive equilibrium |
| Key assumption | Local non-satiation | Convexity of preferences and production |
| Policy implication | Markets work — don't interfere | Redistribute endowments, then let markets work |
| Practical limitation | Real markets have imperfections | Lump-sum transfers are politically and practically infeasible |

**Failure conditions (when theorems may not hold):**

- Market power (monopoly/oligopoly)
- Externalities (unpriced costs/benefits)
- Public goods (non-rival, non-excludable)
- Incomplete markets
- Asymmetric information
- Non-convex preferences or technologies

> **Exam Tip:** Strong answers distinguish: (1) The First Theorem says every competitive equilibrium is Pareto-optimal (efficiency of markets). (2) The Second Theorem says every Pareto-optimum can be supported as a competitive equilibrium with transfers (separability of efficiency and equity). The Second Theorem is more relevant for policy — it justifies redistribution without sacrificing efficiency.

---

### Question 6
**What is social welfare function? Utilitarian vs Rawlsian.** *(6 marks)*

**Answer:**

**Social Welfare Function (SWF):**

A rule mapping individual utility levels to a measure of aggregate social welfare:

W = F(U₁, U₂, ..., Uₙ)

The SWF embodies society's value judgements about distributional equity. Different ethical philosophies imply different functional forms.

**Utilitarian SWF (Bentham, classical):**

W = U₁ + U₂ + ... + Uₙ = Σᵢ Uᵢ

| Property | Meaning |
|----------|---------|
| Form | Sum of utilities (additive) |
| Social indifference curves | Linear with slope −1 in U-U space |
| Equity concern | Only total utility matters — distribution irrelevant |
| MU of income | Typically assumed constant (or declining but equal across individuals) |
| Implication | A gain of 1 util to a rich person = a gain of 1 util to a poor person |
| Weakness | Ignores inequality — a transfer from poor to rich with ∆W = 0 is "acceptable" as long as total utility unchanged |

**Rawlsian SWF (John Rawls, maximin criterion):**

W = min{U₁, U₂, ..., Uₙ}

| Property | Meaning |
|----------|---------|
| Form | Minimum utility (maximin) |
| Social indifference curves | Right-angle (L-shaped) in U-U space |
| Equity concern | Only the worst-off person matters |
| MU of income | Society is infinitely averse to inequality |
| Implication | Any change that improves the worst-off is good, even if it dramatically reduces the utility of everyone else |
| Weakness | Extreme — ignores losses to the non-poor entirely; may justify very inefficient redistributions |

**Graphical comparison (two-person case):**

```
     U_B
     ↑
     |  Slope = −1  (Utilitarian)
     |  ⁄
     | ⁄            ┐
     |/             │ Rawlsian
     |              │ (right-angle)
     |              ┘
     └────────────────→ U_A
```

**Comparison table:**

| Feature | Utilitarian | Rawlsian |
|---------|-------------|----------|
| Principle | Maximize sum of utilities | Maximize minimum utility |
| Distributional concern | None (sum-ranking) | Extreme (lexicographic priority to worst-off) |
| Social indifference curve | Linear, slope −1 | L-shaped (right-angle) |
| Transfer from rich to poor (same ∆U) | W unchanged | W unchanged |
| Transfer from rich to poor (poor gains less) | W decreases | W unchanged (if min unchanged) |
| Transfer from rich to poor (poor gains more) | W increases | W increases (if poor is the worst-off) |
| Philosophical basis | Classical utilitarianism | Theory of Justice (1971) — "veil of ignorance" |
| Practical implementation | Cost-benefit analysis (Kaldor-Hicks) | Targeted poverty-reduction policies |

**Other SWF forms:**

| Type | Formula | Characteristic |
|------|---------|---------------|
| **Nash (Cobb-Douglas)** | W = Πᵢ Uᵢ | Social indifference curves are rectangular hyperbolas; moderate inequality aversion |
| **Bergson-Samuelson** | W = F(U₁,...,Uₙ) | General form with unspecified weights; allows any degree of inequality aversion |
| **Weighted utilitarian** | W = Σᵢ αᵢUᵢ with αᵢ > 0 | Unequal weights for different individuals |

> **Exam Tip:** Draw the social indifference curves for both types in U_A−U_B space. Utilitarian = straight line (perfect substitutes in utility). Rawlsian = right-angle (perfect complements in utility). The shape reveals the ethical stance.

---

### Question 7
**Explain Hicks-Kaldor compensation principle. How did Scitovsky correct the contradiction?** *(8 marks)*

**Answer:**

**Hicks-Kaldor Compensation Principle:**

The principle was developed by Nicholas Kaldor (1939) and John Hicks to evaluate welfare changes where some gain and some lose — situations the Pareto criterion cannot handle.

*Statement:* A change from state A to state B increases social welfare if those who gain from the change could *potentially* compensate those who lose and still be better off. If the gainers' maximum willingness-to-pay (WTP) for the change exceeds the losers' minimum willingness-to-accept (WTA) to forgo the change, the change is welfare-improving.

*Numerical example:* Road widening project:
- Gainers (villagers) are willing to pay ₹1.2 lakh for the project
- Losers (landowners) demand ₹1 lakh to accept the project
- Since 1.2 > 1.0, gainers could compensate losers and still have ₹0.2 lakh net gain → project passes Kaldor-Hicks test

*Assumptions:*
1. Individuals are the best judges of their own welfare
2. Tastes are constant
3. Ordinal utility measurement is sufficient
4. No interpersonal comparisons of utility needed (claimed)
5. Absence of externalities in production and consumption
6. Marginal utility of money is constant (implicit)

**The Scitovsky Paradox (Contradiction):**

Tibor Scitovsky (1941) identified a fundamental flaw in the Kaldor-Hicks criterion: it can lead to **contradictory rankings**.

```
     U_B
     ↑
     |    a₁ (new)
     |   ╱
     |  ╱  a (initial)
     | ╱
     |╱
     └────────────────→ U_A
          UPF₁ (initial)
                UPF₂ (new)
```

If the two utility possibility curves (UPF₁ and UPF₂) intersect, Kaldor-Hicks can produce:

- Movement a → a₁: Passes K-H test (gainers can compensate losers → welfare improves)
- Movement a₁ → a: Also passes K-H test (gainers at a₁ can compensate losers at a → welfare improves)

**Result:** A is better than B AND B is better than A — a logical contradiction. This is the **Scitovsky paradox**.

**Scitovsky's Double Test (Reversal Test):**

Scitovsky proposed a two-part criterion to resolve the paradox:

> A change is welfare-improving **if and only if**:
> 1. **Kaldor-Hicks test passes:** Gainers can compensate losers and remain better off (forward test).
> 2. **Reversal test fails:** Losers cannot bribe gainers to oppose the change (reverse test) — i.e., it is NOT possible for those who would lose from the change to bribe the gainers to reject it.

| Test | Condition | Logic |
|------|-----------|-------|
| (i) Forward test | Gainers' WTP > Losers' WTA | Gainers can compensate losers |
| (ii) Reverse test | Losers' WTP to prevent < Gainers' WTA to accept | Losers cannot bribe gainers to reject change |

In the figure above:
- a → a₁: Passes (i) ✓ but fails (ii) because the losers at a₁ could bribe gainers to move back to a
- Therefore a → a₁ is **not** a welfare improvement under the Scitovsky criterion

A movement from a to d (where both are better off) passes both tests.

**Limitations of Compensation Principle (all versions):**

| Limitation | Explanation |
|------------|-------------|
| Potential ≠ actual compensation | If compensation is not paid, the losers are actually worse off — the criterion ignores this |
| Ignores income distribution | The criterion accepts status quo distribution as neutral — biases results toward the rich |
| Constant MU of money assumed | Unrealistic — MU of money falls with income |
| Not a complete ordering | The criterion may still fail to rank some alternatives |
| Implicit value judgements | Despite claiming to be value-free, the criterion involves interpersonal comparisons through money valuations |

> **Exam Tip:** The Scitovsky paradox is the classic exam point. Show with intersecting utility possibility curves that Kaldor-Hicks can lead to A > B and B > A simultaneously. Scitovsky's double test resolves this by requiring both forward and reverse conditions.

---

### Question 8
**Does perfect competition ensure welfare maximization? Examine.** *(Professor Given Q8)*

**Answer:**

**Short Answer:** Perfect competition ensures *Pareto efficiency* (First Welfare Theorem) but does NOT guarantee *social welfare maximization*, which also requires distributional equity.

**In What Sense Does Perfect Competition Ensure Efficiency?**

Under perfect competition, the following marginal conditions are automatically satisfied in general equilibrium:

| Condition | Market Mechanism |
|-----------|-----------------|
| MRS^A_xy = MRS^B_xy | All consumers face same prices → equate MRS to price ratio |
| MRTS^X_LK = MRTS^Y_LK | All firms face same factor prices → equate MRTS to factor price ratio |
| MRPT_xy = MRS_xy | P = MC for all firms → MRPT = MC_x/MC_y = P_x/P_y = MRS |

Result: **Every competitive equilibrium is Pareto-optimal** (First Welfare Theorem).

**Why Perfect Competition Does NOT Ensure Maximum Social Welfare:**

**(1) Pareto optimality ≠ SW maximization**

All points on the GUPF are Pareto-optimal (including extremes where one person gets everything). But society's SWF selects only one point (tangency of SWF with GUPF). Competition ensures we are *somewhere* on the GUPF, but not necessarily at the bliss point.

**(2) Initial endowment distribution matters**

The competitive equilibrium reached depends on the initial distribution of endowments. Different initial distributions → different competitive equilibria (all Pareto-optimal, but with different utility distributions).

```
Initial endowments → Competitive equilibrium → Pareto-optimal ALWAYS
                   → Which Pareto-optimal point? Depends on endowments
                   → Social welfare? Depends on SWF and resulting distribution
```

**(3) Market failures prevent even Pareto optimality**

| Failure | Effect | Why competition fails |
|---------|--------|----------------------|
| Market power (monopoly) | P > MC → MRPT ≠ MRS | Non-price-taking behaviour |
| Externalities | Private ≠ Social cost | Unpriced interdependencies |
| Public goods | Non-rival, non-excludable | Free-rider problem → underprovision |
| Increasing returns | Non-convex production set | Natural monopoly → P < MC at efficient scale |
| Asymmetric information | Adverse selection, moral hazard | Market may unravel |

**(4) Distributional equity**

Even if the competitive equilibrium is Pareto-optimal, it may involve extreme inequality. The Second Welfare Theorem says any Pareto optimum can be achieved as a competitive equilibrium with appropriate lump-sum transfers — but this requires active redistribution by the state.

**Synthesis:**

| Aspect | What competition delivers | What it does NOT deliver |
|--------|--------------------------|--------------------------|
| Efficiency | ✅ Pareto optimality (given assumptions) | ❌ Cannot correct market failures |
| Distribution | ❌ Depends on initial endowments | ❌ No tendency toward equity |
| SW maximization | ❌ Only one PO point among many | ❌ Requires explicit value judgements |

**Conclusion:**

Perfect competition is a **necessary condition** for welfare maximization in the sense that any SW maximum must be Pareto-optimal (and competitive equilibrium delivers Pareto optimality). But it is **not sufficient** because:
1. The specific Pareto optimum reached depends on initial endowments
2. Market failures may prevent even Pareto optimality
3. Without lump-sum redistribution, the competitive equilibrium may be distributionally unjust
4. Social welfare maximization requires a SWF — an ethical judgement beyond what markets can provide

The theoretical ideal combines: **Perfect competition (for efficiency) + Lump-sum transfers (for equity) + SWF (for distributional choice).**

> **Exam Tip:** This is a common essay question. Structure: (1) Yes — competition ensures Pareto efficiency via the three marginal conditions. (2) No — Pareto ≠ SW maximum; initial endowments determine the equilibrium; market failures prevent efficiency; equity requires redistribution beyond markets. (3) Conclusion — necessary but not sufficient. Reference both Welfare Theorems.
