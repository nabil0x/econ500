# Welfare Economics — Comprehensive Exam Answers

> **Target:** Topic 4 (CV/EV/CS), Topic 5A (Social Welfare Criteria), Topic 5B (Pareto Optimality & Welfare Theorems)
> **Style:** Concise, structured, exam-ready. Unicode math throughout.

---

## ✅ Answer Files — Quick Navigation

| File | Topics | Key Glossary Terms |
|------|--------|-------------------|
| [Consumer Theory](./answers-consumer-theory.md) | Preferences, Utility, UMP, EMP, Duality | [Rationality](GLOSSARY.md#term-rationality) • [Utility Function](GLOSSARY.md#term-utility-function) • [UMP](GLOSSARY.md#term-ump) • [EMP](GLOSSARY.md#term-emp) • [Duality](GLOSSARY.md#term-duality) |
| [Demand & Production](./answers-demand-production.md) | Elasticities, Production, Costs, Profit | [Elasticity](GLOSSARY.md#term-elasticity) • [Production Function](GLOSSARY.md#term-production-function) • [Cost Function](GLOSSARY.md#term-cost-function) • [Profit Max](GLOSSARY.md#term-profit-maximization) |
| [Welfare](./answers-welfare.md) | CV, EV, CS, Pareto, Welfare Theorems | [CV](GLOSSARY.md#term-cv) • [EV](GLOSSARY.md#term-ev) • [CS](GLOSSARY.md#term-cs) • [Pareto Efficiency](GLOSSARY.md#term-pareto-efficient) • [FWT](GLOSSARY.md#term-fwt) |
| [GE, Game Theory & Trade](./answers-ge-game-extern-trade.md) | GE, Game Theory, Externalities, Trade | [GE](GLOSSARY.md#term-ge) • [Nash Equilibrium](GLOSSARY.md#term-nash-equilibrium) • [Pigouvian Tax](GLOSSARY.md#term-pigouvian-tax) • [Stolper-Samuelson](GLOSSARY.md#term-stolper-samuelson) |

---

# Topic 4 — Welfare Economics: CV, EV & Consumer Surplus

---

### Question 1 {#q-welfare-01}
**Distinguish Compensating Variation (CV) and Equivalent Variation (EV). How are they different from Consumer's Surplus (CS)?** *(10/4 marks)*

**Answer:**

> **Marking Guide [14 marks]:** Definition (3) | Comparison (4) | Diagram (3) | Intuition (4)

> **Formal Definition 1 — Compensating Variation, Equivalent Variation & Consumer Surplus**
>
> **CV** is the monetary compensation needed *after* a price change to return the consumer to the original utility level $u^0$: $CV = e(p^1, u^0) - e(p^1, u^1) = w - e(p^1, u^0)$ for a price fall. **EV** is the monetary compensation needed *before* a price change to bring the consumer to the new utility level $u^1$: $EV = e(p^0, u^1) - e(p^0, u^0) = e(p^0, u^1) - w$ (Munoz-Garcia, §3.2, pp.172–176; Koutsoyiannis, p.524):
>
> $$CV = e(p^1, u^0) - e(p^1, u^1) \qquad EV = e(p^0, u^1) - e(p^0, u^0)$$
>
> **CS** is the area under the Marshallian (uncompensated) demand curve between old and new prices: $CS = \int_{p^0}^{p^1} x(p,w)\,dp$. CV and EV are exact welfare measures derived from Hicksian (compensated) demand; CS is observable but theoretically approximate unless income effects are zero.
>
> **Key insight:** CV anchors on original utility at new prices; EV anchors on new utility at old prices. For normal goods with a price decrease: $EV > CS > CV$ (see FD2).
> → *See also: Topic 4 Q2, Q3, Q4*

**Definitions:**

| Measure | Definition | Formula (price decrease, p_{1}^{1} < p_{1}^{0}) |
|---------|-----------|--------------------------------------|
| **CV** | Money taken from consumer *after* price fall to restore original utility u^{0} | $CV = e(p^{1}, u^{1}) - e(p^{1}, u^{0}) = w - e(p^{1}, u^{0})$ |
| **EV** | Money given to consumer *before* price fall to make them as well off as after | $EV = e(p^{0}, u^{1}) - e(p^{0}, u^{0}) = e(p^{0}, u^{1}) - w$ |
| **CS** | Area under Marshallian demand between old and new price | $CS = \int_{p_{1}^{0}}^{p_{1}^{1}} x_{1}(p_{1}, \bar{p}_{-1}, w) dp_{1}$ |

**Key distinctions:**

- **CV** uses *new prices, original utility* as reference point. It asks: "After the price change, how much money must be taken/given to return to the original indifference curve?"
- **EV** uses *old prices, new utility* as reference point. It asks: "Before the price change, how much money would be needed to reach the new indifference curve?"
- **CS** is the area beneath the *uncompensated (Marshallian)* demand curve — it mixes income and substitution effects.
- CV & EV are derived from *Hicksian (compensated)* demand curves and are exact welfare measures (theoretically superior).
- CS is observable (Marshallian demand is empirically estimable) but is an approximation unless income effects are zero.

**Key reference points:**

```
            CV              EV              CS
Reference  $u^{0}$ (original)   $u^{1}$ (new)        Mixed (observable)
Prices     $p^{1}$ (new)        $p^{0}$ (old)        $p^{0} \to p^{1}$
Demand     Hicksian ($u^{0}$)   Hicksian ($u^{1}$)   Marshallian (w)
```

> **Exam Tip:** Always state which utility level each measure is anchored to. CV = original utility; EV = new utility. This determines whether CV < CS < EV or reversed.

> **Professor's Corner:** Top students immediately draw the three demand curves and anchor CV to $u^{0}$ and EV to $u^{1}$. The most common mistake: confusing which reference utility belongs to which measure. CV = back to original utility; EV = forward to new utility — memorise this pairing.

⭐ **High-Yield** — CV/EV/CS definitions are foundational for all welfare measurement. Nearly every welfare question builds on these concepts.
→ *See also: answers-ge-game-extern-trade Q8, answers-demand-production Q4*

---

### Question 2 {#q-welfare-02}
**For price decrease (normal goods): EV > CS > CV. For price increase, explain.** *(10/5 marks)*

**Answer:**

> **Marking Guide [14 marks]:** Theory (2) | Diagram (5) | Intuition (4) | Evaluation (3)

> **Formal Definition 2 — EV, CS, CV Ordering & the Income Effect**
>
> **For a price decrease ($p \downarrow$) and a normal good, the three welfare measures rank as $EV > CS > CV$.** This ordering arises because the Hicksian demand at the new (higher) utility lies to the right of the Marshallian demand, which lies to the right of the Hicksian demand at the original (lower) utility (Munoz-Garcia, §3.3, pp.176–180; Koutsoyiannis, p.524):
>
> $$EV \;>\; CS \;>\; CV \quad \text{($p \downarrow$, normal good)} \qquad CV \;>\; CS \;>\; EV \quad \text{($p \uparrow$, normal good)}$$
>
> **For a price increase ($p \uparrow$):** CV > CS > EV — the ordering reverses because the reference utility level flips. The gap $|EV - CV|$ measures the **income effect**: a larger gap implies a stronger income effect. When the income effect is zero (quasilinear utility), all three measures coincide.
>
> **Key insight:** Marshallian demand lies between the two Hicksian demands for normal goods. For inferior goods, the ordering reverses again — the Hicksian at $u^1$ shifts left instead of right.
> → *See also: Topic 4 Q1, Q4*

**For a price decrease (p_{1}\downarrow) with normal goods:**

- **EV** uses Hicksian demand at *new* (higher) utility $u^{1}$ → Hicksian demand shifts right (income effect positive for normal goods) → **largest** area.
- **CS** uses Marshallian demand — lies between the two Hicksian curves → intermediate area.
- **CV** uses Hicksian demand at *original* (lower) utility $u^{0}$ → smallest area.

```
EV > CS > CV
```

**For a price increase (p_{1}\uparrow) with normal goods:**

- **CV** is now measured at original utility $u^{0}$ (consumer needs compensation after price rise to stay at $u^{0}$). The Hicksian demand at $u^{0}$ is to the right → largest area.
- **EV** is measured at new (lower) utility $u^{1}$ → Hicksian demand at $u^{1}$ is to the left → smallest area.

```
EV < CS < CV
```

**Graphical logic:**

| Scenario | p_{1}\downarrow (normal good) | p_{1}\uparrow (normal good) |
|----------|------------------|------------------|
| Hicksian(u^{0}) | Left of Marshallian | Right of Marshallian |
| Hicksian(u^{1}) | Right of Marshallian | Left of Marshallian |
| Ordering | EV > CS > CV | CV > CS > EV |

**Intuition:** For normal goods, a price fall increases real income → consumer would buy more if compensated → EV > CV. The gap between CV and EV reflects the income effect.

> **Exam Tip:** Draw the three demand curves (h(p,$u^{0}$, x(p,w), h(p,$u^{1}$) intersecting at $p^{0}$and $p^{1}$ Shade areas in two colors for price decrease and price increase cases. This is a guaranteed diagram question.

> **Professor's Corner:** The diagram is the centrepiece of this topic. Strong answers add the inferior goods case (reversed ordering) for bonus marks. The key mechanism: Hicksian demand at higher utility shifts right for normal goods — this generates EV > CS > CV.

⭐ **High-Yield** — The EV > CS > CV ordering is one of the most tested relationships. Know the diagram AND the intuition behind it.
→ *See also: Topic 4 Q1, Q3, Q4*

---

### Question 3 {#q-welfare-03}
**Cobb-Douglas $u = x_1^{1/2} x_2^{1/2}$. Given $\{p^0, m^0\} = \{\{4,4\},300\}$, $\{p^1, m^1\} = \{\{2,4\},300\}$. Compute indirect utilities, costs, EV, CV, CS. Examine relationship → nature of commodities.** *(10/5 marks)*

**Answer:**

> **Marking Guide [14 marks]:** Derivation (5) | Calculation (5) | Interpretation (4)

> **Formal Definition 3 — Expenditure Function**
>
> The expenditure function $e(p, u)$ gives the minimum expenditure needed to achieve utility level $u$ at prices $p$ (Munoz-Garcia, §2.4, pp.107–110; Koutsoyiannis, p.528):
>
> $$e(p, u) = \min_{x \ge 0} \{ p \cdot x \mid u(x) \ge u \} = \sum_{k} p_k h_k(p, u)$$
>
> **Properties:** (i) Homogeneous of degree 1 in $p$; (ii) Increasing in $p$ and $u$; (iii) Concave in $p$; (iv) $\partial e/\partial p_k = h_k(p, u)$ (Shephard's lemma). For Cobb-Douglas $u = x_1^\alpha x_2^{1-\alpha}$:
>
> $$e(p, u) = u \left(\frac{p_1}{\alpha}\right)^\alpha \left(\frac{p_2}{1-\alpha}\right)^{1-\alpha}$$
>
> **Key insight:** The expenditure function is the dual of the indirect utility function: $e(p, v(p, w)) = w$ and $v(p, e(p, u)) = u$. It is the essential building block for computing CV and EV.
> → *See also: answers-consumer-theory Q2*

**Step 1 — Walrasian demands:**

For u = $x_{1}^{\alpha} x_{2}^{(1-\alpha)}$ with $\alpha = 1/2$:
- $x_{1}(p, m) = \alpha m/p_{1} = 150/p_{1}$
- $x_{2}(p, m) = (1-\alpha)m/p_{2} = 150/p_{2}$

**Step 2 — Indirect utility:**

$v(p, m) = (\alpha m/p_{1})^\alpha \cdot ((1-\alpha)m/p_{2})^{(1-\alpha)}$

At $p^{0} = (4, 4)$, $m = 300$:
- $x_{1}^{0} = 150/4 = 37.5, x_{2}^{0} = 150/4 = 37.5$
- $v^{0} = (37.5)^\frac{1}{2} \cdot (37.5)^\frac{1}{2} = 37.5$

At $p^{1} = (2, 4)$, $m = 300$:
- $x_{1}^{1} = 150/2 = 75, x_{2}^{1} = 150/4 = 37.5$
- $v^{1} = (75)^\frac{1}{2} \cdot (37.5)^\frac{1}{2} = \sqrt{2812.5} \approx 53.03$

**Step 3 — Expenditure function:**

For u = $x_{1}^{1/2} x_{2}^{1/2}$:
- $h_{1} = u \cdot (p_{2}/p_{1})^{1/2}, h_{2} = u \cdot (p_{1}/p_{2})^{1/2}$
- $e(p, u) = p_{1}h_{1} + p_{2}h_{2} = 2u \cdot \sqrt{p_1 p_2}$

**Step 4 — CV (price decrease):**

CV = $w - e(p^{1}, u^{0})$

$e(p^{1}, u^{0}) = e((2,4), 37.5) = 2 \times 37.5 \times \sqrt{2 \times 4} = 75 \times \sqrt{8} = 75 \times 2.828 = 212.1$

**$CV = 300 - 212.1 = 87.9$**

**Step 5 — EV:**

EV = $e(p^{0}, u^{1}) - w$

$e(p^{0}, u^{1}) = e((4,4), 53.03) = 2 \times 53.03 \times \sqrt{4 \times 4} = 106.06 \times 4 = 424.24$

**$EV = 424.24 - 300 = 124.24$**

**Step 6 — CS:**

$$CS = \int_{p_{1}=4}^{2} x_{1}(p_{1}, p_{2}, m) dp_{1} = \int_{4}^{2} (150/p_{1}) dp_{1} = 150[ln p_{1}]_{4}^{2}$$
$$= 150(ln 2 - ln 4) = 150 ln(0.5) = -150 ln 2 \approx -103.98$$

**CS = 103.98** (absolute value since price fell)

**Step 7 — Summary & relationship:**

| Measure | Value |
|---------|-------|
| EV | 124.24 |
| CS | 103.98 |
| CV | 87.9 |

**EV > CS > CV ✓** — confirms both goods are **normal goods**.

Since EV $-$ CV $= 124.24 - 87.9 = 36.34 > 0$, there is a substantial income effect, consistent with Cobb-Douglas (unit income elasticity for both goods \Rightarrow both are normal).

> **Exam Tip:** Never forget to state that EV $>$ CS $>$ CV confirms normal goods. If the relation reversed (CV $>$ CS $>$ EV), goods would be inferior. Know the Cobb-Douglas expenditure function formula $e(p,u) = 2u\sqrt{p_1 p_2}$ for $\alpha = \frac{1}{2}$ — saves time.

> **Professor's Corner:** Derive the expenditure function first — it saves half the computation. Always check EV > CS > CV as a sanity check on your arithmetic: if your numbers violate this ordering for normal goods, recalculate.

⭐ **High-Yield** — The Cobb-Douglas welfare computation is a classic exam question. The expenditure function shortcut is essential for timed exams.
→ *See also: answers-consumer-theory Q2 (CD demand), Topic 4 Q1, Q2*

---

### Question 4 {#q-welfare-04}
**EV > CS > CV diagram (price decrease) and EV < CS < CV (price increase) — graphical analysis.** *(Practice Mid)*

**Answer:**

> **Marking Guide [14 marks]:** Diagram (6) | Theory (3) | Intuition (3) | Evaluation (2)

**Price Decrease (p_{1}\downarrow):**

```
p_{1}
↑
|  h(p, $u^{1}$ — Hicksian at new (higher) utility
|  ↙  x(p,w) — Marshallian (observable)
|  h(p, $u^{0}$ — Hicksian at original (lower) utility
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

- All three curves intersect at price $p_{1}^{0}$ (original equilibrium)
- At $p_{1}^{1} < p_{1}^{0}$, for a normal good: $h(p, u^{1}) > x(p,w) > h(p, u^{0})$
- **EV** = area left of $h(p, u^{1})$ between $p_{1}^{0}$ and $p_{1}^{1}$ → **largest**
- **CS** = area left of $x(p,w)$ between $p_{1}^{0}$ and $p_{1}^{1}$ → **intermediate**
- **CV** = area left of $h(p, u^{0})$ between $p_{1}^{0}$ and $p_{1}^{1}$ → **smallest**

**Price Increase (p_{1}\uparrow):**

```
p_{1}
↑
|  h(p, $u^{0}$ — Hicksian at original (higher) utility
|  ↙  h(p, $u^{1}$ — Hicksian at new (lower) utility
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

- At $p_{1}^{1} > p_{1}^{0}$, for a normal good: $h(p, u^{0}) > x(p,w) > h(p, u^{1})$
- **CV** = area left of $h(p, u^{0})$ → **largest**
- CS = area left of $x(p,w)$ → **intermediate**
- **EV** = area left of $h(p, u^{1})$ → **smallest**

**Why the reversal?** The reference utility level flips. For a price *decrease*, EV references the better (new) state — bigger welfare gain. For a price *increase*, CV references the better (original) state — bigger compensation needed.

> **Exam Tip:** In exams, sketch the three demand curves intersecting at one point. Label the income and substitution effects. The Marshallian demand always lies *between* the two Hicksian demands for normal goods.

> **Professor's Corner:** The key graphical insight: Marshallian demand lies between the two Hicksian curves for normal goods. Show this clearly and label the EV, CS, CV regions with distinct shading or patterns.

→ *See also: Topic 4 Q1, Q2*

---

### Question 5 {#q-welfare-05}
**Show: Marshallian CS overstates CV and understates EV for normal goods.** *(WelfareChange paper §4)*

**Answer:**

> **Marking Guide [14 marks]:** Theory (3) | Diagram (4) | Intuition (4) | Evaluation (3)

> **Formal Definition 4 — Willig Bounds & the CS Approximation Error**
>
> **Willig (1976)** established bounds for the percentage error from using Marshallian CS as an approximation for CV or EV. For realistic income elasticities and price changes, the error is typically less than 5% (Munoz-Garcia, §3.4, pp.180–182; Koutsoyiannis, p.525):
>
> $$\frac{|CS - CV|}{|CV|} \le \frac{\eta \cdot (\Delta p / p)}{2} \quad \text{and} \quad \frac{|CS - EV|}{|EV|} \le \frac{\eta \cdot (\Delta p / p)}{2}$$
>
> where $\eta$ is the income elasticity of demand and $\Delta p/p$ is the proportionate price change.
>
> **Special cases:** (i) Zero income effect (quasilinear utility) → $CS = CV = EV$ exactly; (ii) Small price change → all three approximately equal; (iii) Inferior good → ordering reverses.
>
> **Key insight:** Willig bounds provide a practical justification for using CS in applied cost-benefit analysis despite its theoretical inferiority. The approximation error grows with the income elasticity and the size of the price change.
> → *See also: Topic 4 Q1, Q3*

**For a price decrease (p_{1}\downarrow) with normal good:**

- **Good is normal** \Rightarrow $\partial x_1/\partial m > 0$ \Rightarrow income effect is positive
- When price falls, real income rises → consumer buys more of the good due to income effect
- **Marshallian demand** includes BOTH substitution and income effects → it is flatter (more elastic) than the Hicksian demand at $u^{0}$
- **CV** uses Hicksian demand at $u^{0}$(compensated, no income effect) → steeper → smaller area
- Therefore: **CS > CV** (CS overstates CV)

- **EV** uses Hicksian demand at $u^{1}$(higher utility level) → shifted right for normal goods → larger area
- Therefore: **EV > CS** (CS understates EV)

**For a price increase (p_{1}\uparrow) with normal good:**

- Real income falls → consumer buys less due to income effect
- Marshallian demand lies between the two Hicksian curves
- **CV > CS > EV** — CS overstates EV, understates CV

**Magnitude of error:**

| Condition | Error (CS vs CV/EV) |
|-----------|---------------------|
| Zero income effect (quasilinear) | CS = CV = EV (exact) |
| Small price change | CS \approx CV \approx EV (Willig bounds) |
| Normal good, large price change | CS \ne CV \ne EV, ordering per above |
| Inferior good | Reversed ordering |

**Willig (1976) bounds:** For realistic income elasticities and price changes, the percentage error from using CS instead of CV or EV is typically < 5%.

> **Exam Tip:** Cite Willig bounds as a practical justification for using CS despite its theoretical inferiority. For quasilinear utility, all three measures coincide exactly — mention this special case.

> **Professor's Corner:** Mentioning Willig bounds (typically <5% error) distinguishes A-grade answers from B. The special case of quasilinear utility (CS = CV = EV) is a common exam follow-up — always have this ready.

→ *See also: Topic 4 Q1, Q3*

---

# Topic 5A — Social Welfare Criteria

---

### Question 1 {#q-socwel-01}
**Define social welfare. Critically examine three key issues Pigou dealt with.** *(10 marks)*

**Answer:**

> **Marking Guide [14 marks]:** Definition (2) | Analysis (6) | Evaluation (4) | Diagram (2)

> **Formal Definition 5 — Social Welfare & Pigouvian Taxation**
>
> **Social welfare** is the aggregate well-being of all individuals in a society. Pigou (1932) restricted analysis to **economic welfare** — "that part of social welfare that can be brought directly or indirectly into relation with the measuring rod of money" (Koutsoyiannis, pp.524–528).
>
> Pigou's central contribution was the distinction between **private net product** (returns to the private investor) and **social net product** (total contribution to the national dividend, including external effects). A **Pigouvian tax** corrects the divergence by taxing activities where private net product exceeds social net product (negative externality) and subsidizing where social net product exceeds private net product (positive externality) (Pigou, 1932):
>
> $$t = MSC - MPC \quad \text{at the socially optimal output}$$
>
> **Key insight:** Pigou's framework assumes cardinal, interpersonally comparable utility — a limitation later critiqued by Robbins and superseded by the Pareto-Bergson approach. Modern externality analysis (Coase, 1960) offers an alternative: bargaining can solve externalities without government intervention when property rights are well-defined.
> → *See also: Topic 5A Q5, Topic 5B Q4*

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

> **Professor's Corner:** Strong answers identify Pigou's implicit cardinal utility assumption and link it to Robbins' ordinalist critique. Structure as three clear pillars — this shows the examiner you understand the architecture of Pigou's framework.

⭐ **High-Yield** — Pigou questions appear in multiple forms (Q1, Q5). Prepare one comprehensive answer you can adapt.
→ *See also: Topic 5A Q5 (condensed Pigou)*

---

### Question 2 {#q-socwel-02}
**Derive grand utility possibility frontier, determine 'point of bliss'. Does it ensure maximum SW?** *(10/6 marks)*

**Answer:**

> **Marking Guide [14 marks]:** Definition (2) | Derivation (5) | Diagram (4) | Evaluation (3)

> **Formal Definition 6 — Production Possibility Curve, Utility Possibility Frontier & Grand Utility Possibility Frontier**
>
> The **Production Possibility Curve (PPC)** shows all Pareto-efficient output combinations $(X, Y)$ given the economy's resources and technology. Each point on the PPC satisfies $\text{MRPT}_{XY} = \text{MRS}_{XY}$ (product-mix efficiency). For a given product-mix on the PPC, the **Utility Possibility Frontier (UPF)** traces the maximum utility pairs $(U_A, U_B)$ achievable by distributing goods efficiently ($\text{MRS}^A = \text{MRS}^B$). The **Grand Utility Possibility Frontier (GUPF)** is the outer envelope of all UPFs across every product-mix on the PPC (Koutsoyiannis, pp.528–532; Munoz-Garcia, §6.6, pp.373–388):
>
> $$\text{GUPF} = \max_{(X,Y) \in \text{PPC}} \{ (U_A, U_B) \mid \text{MRS}^A = \text{MRS}^B, \text{feasibility} \}$$
>
> The **Point of Bliss** is the tangency between the GUPF and the highest attainable Bergson–Samuelson social indifference contour: $\text{slope(GUPF)} = \text{MRS}_{U_AU_B}^F$.
>
> **Key insight:** All points on the GUPF are Pareto-optimal, but only the bliss point maximizes social welfare — the SWF embodies the value judgement that selects among them.
> → *See also: Topic 5A Q4*

**Concept of Grand Utility Possibility Frontier:**

In a 2×2×2 model (2 factors $L$, $K$; 2 goods $X$, $Y$; 2 consumers $A$, $B$):

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
     |       SWF_{3} (unattainable)
     |      SWF_{2}
     |     SWF_{1}
     |    ╱
     |   ╱ ● E (Point of Bliss)
     |  ╱
     | ╱
     |╱
     └────────────────→ U_A
                      GUPF
```

- **Point E:** Tangency between GUPF and $SWF_{2}$ → slope of GUPF = slope of social indifference contour
  - $\partial U_B/\partial U_A$ (at the margin of GUPF) = $\partial W/\partial U_A / \partial W/\partial U_B$ (marginal social rate of substitution between utilities)
- At E: **Pareto efficiency (all points on GUPF are Pareto-optimal) + distributional equity (determined by SWF shape)**

**Does the Point of Bliss Ensure Maximum Social Welfare?**

| Claim | Explanation |
|-------|-------------|
| **YES — it identifies the constrained maximum** | Given resources and technology, no reallocation can reach a higher social indifference contour |
| **NO — it does not by itself guarantee max SW** | The point of bliss depends on the *specific SWF* chosen. A different SWF (different value judgements about equity) yields a different optimum |
| **Pareto optimality is NECESSARY but NOT SUFFICIENT** | All points on the GUPF satisfy Pareto optimality, but only E maximizes social welfare. Bergson showed that Pareto-optimal points like c and c_{1} on the GUPF are on lower social indifference contours than point d |
| **Requires explicit value judgements** | The SWF embodies ethical choices about interpersonal comparisons — these are value judgements, not objective facts |

> **Exam Tip:** The key exam point is that Pareto optimality \equiv all points on GUPF $\checkmark$, but SW maximization requires a specific point on the GUPF chosen by value judgements via the SWF. Bergson > Pareto for sufficiency.

> **Professor's Corner:** The distinction between UPF (one product-mix) and GUPF (envelope of all UPFs) is where students lose marks. Show this clearly — the GUPF is the outer boundary of all possible UPFs.

⭐ **High-Yield** — The GUPF/bliss point diagram is one of the most important in welfare economics. Master the 4-step derivation.
→ *See also: Topic 5A Q4 (SWF/GUPF), Topic 5B Q1 (Pareto sufficiency)*

---

### Question 3 {#q-socwel-03}
**Define social welfare. Explain criteria: i) Growth of GNP ii) Bentham iii) Cardinalist.** *(Professor Q1)*

**Answer:**

> **Marking Guide [14 marks]:** Definition (2) | GNP (4) | Bentham (4) | Cardinalist (4)

> **Formal Definition 7 — Bentham's Utilitarian Criterion & the Cardinalist Criterion**
>
> **Bentham's criterion** defines social welfare as the unweighted sum of individual utilities: $W = \sum_i U_i$. A change is welfare-improving if the sum of utility changes is positive: $\Delta W = \sum_i \Delta U_i > 0$ (Koutsoyiannis, pp.526–528). This is a **sum-ranking** criterion — it cares only about total utility, not its distribution:
>
> $$W_B = U_1 + U_2 + \dots + U_n \quad \Rightarrow \quad \text{social indifference curves are linear with slope } -1$$
>
> The **Cardinalist criterion** (Pigou) adds diminishing marginal utility of income to argue for redistribution: transferring income from rich (low $MU_m$) to poor (high $MU_m$) raises total welfare, assuming identical utility functions across individuals.
>
> **Key insight:** Both criteria require cardinal utility and interpersonal comparability — assumptions rejected by the ordinalist revolution (Robbins, 1932). Bentham's sum-ranking is equity-neutral; the Cardinalist criterion explicitly favours equality but depends on empirically unverifiable assumptions.
> → *See also: Topic 5B Q6*

**Definition of Social Welfare:**

Social welfare is the aggregate well-being of a society, encompassing the satisfaction levels of all individuals from economic and non-economic sources. Welfare economics evaluates alternative economic states (allocations of resources and distributions of rewards) from the perspective of society's well-being. The central task: if current welfare W < potential W*, show why and suggest how to raise W to W*.

**Three Criteria:**

**(i) Growth of GNP as a Welfare Criterion (Adam Smith)**

- **Premise:** Growth of national output (GNP) increases employment and goods available for consumption → welfare rises.
- **Implicit assumption:** The status quo of income distribution is acceptable/"ethical."
- **Formula:** \DeltaW > 0 if \DeltaGNP > 0

| Strengths | Weaknesses |
|-----------|------------|
| Objectively measurable | Ignores distribution — growth may benefit only the rich |
| Highlights efficiency as necessary for welfare | Growth may reduce welfare if it creates pollution, inequality, or social disruption |
| Simple and intuitive | GNP measures market activity, not well-being directly |

- *Conclusion:* Efficiency is necessary but not sufficient for SW maximization.

**(ii) Bentham's Criterion (Jeremy Bentham)**

- **Premise:** "Greatest good for the greatest number." Social welfare is the *sum* of individual utilities.
- $**Formula:** W = U_A + U_B + U_C; \DeltaW > 0 if (\DeltaU_A + \DeltaU_B + \DeltaU_C) > 0$

| Problem | Illustration |
|---------|-------------|
| **Interpersonal comparability of deservingness** | A change where \DeltaU_A = +200, \DeltaU_B = +50, \DeltaU_C = -100 gives \DeltaW = +150. But this assumes A&B's gains "outweigh" C's loss — a value judgement about who deserves more. |
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

> **Professor's Corner:** Organise your answer by the efficiency-equity axis — this is the framework the examiner uses to mark. The Cardinalist criterion's weakness (identical utility functions assumed) is the most common missed point.

→ *See also: Topic 5B Q6 (Utilitarian vs Rawlsian)*

---

### Question 4 {#q-socwel-04}
**Define social welfare function. Derive grand utility possibility frontier, point of bliss.** *(Professor Q4, 49Qs Q4)*

**Answer:**

> **Marking Guide [14 marks]:** Definition (2) | Derivation (5) | Diagram (4) | Intuition (3)

> **Formal Definition 8 — Social Welfare Function & Arrow's Impossibility Theorem**
>
> A **Social Welfare Function (SWF)** is a rule $W = F(U_1, U_2, \dots, U_n)$ that ranks alternative social states based on the utility levels of individuals. Introduced by Bergson (1938) and developed by Samuelson, it embodies society's value judgements about distribution (Koutsoyiannis, pp.524–528; Munoz-Garcia, §6.5, pp.360–372):
>
> $$W = F(U_1, U_2, \dots, U_n) \quad \text{with} \quad \partial W / \partial U_i > 0 \ \forall i$$
>
> **Arrow's Impossibility Theorem** (1951) asks whether a SWF can be constructed by aggregating individual preference orderings alone. Arrow proved that no such function can simultaneously satisfy: (1) Universal domain, (2) Pareto principle, (3) Independence of irrelevant alternatives, and (4) Non-dictatorship.
>
> **Key insight:** Bergson's SWF (used in optimization) assumes a social planner with explicit value judgements; Arrow's SWF (preference aggregation) proves impossibility. These are fundamentally different concepts — conflating them is a common exam mistake.
> → *See also: Topic 5A Q6, Topic 5B Q6*

**Definition of Social Welfare Function (SWF):**

A social welfare function is a rule for ranking alternative social states based on the utility levels of individuals. It is analogous to an individual's utility function but operates in utility space:

$$W = F(U_{1}, U_{2}, ..., U_{n})$$

where $W$ is social welfare and $U_i$ is the utility of individual $i$.

- **Introduced by:** Abram Bergson (1938), developed by Samuelson, Tinter, Arrow.
- **Purpose:** To evaluate changes where some gain and some lose — situations where Pareto criterion cannot apply.
- **Form:** A set of social indifference contours in utility space (U_A vs U_B). Each contour shows utility combinations yielding the same social welfare.

**Derivation of Grand Utility Possibility Frontier (GUPF) and Point of Bliss:**

*Step 1:* Start from the 2×2×2 model — two factors ($L$,$K$), two goods ($X$,$Y$), two consumers ($A$,$B$).

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
     |       I_{3} (higher SW — unattainable)
     |      I_{2}
     |     I_{1}
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

$\partial U_B/\partial U_A (from GUPF) = (\partial W/\partial U_A) / (\partial W/\partial U_B) (from SWF)$

> **Exam Tip:** The bliss point is not unique — it depends on the specific SWF (different value judgements → different bliss points). Arrow's Impossibility Theorem later questioned whether a consistent SWF can be constructed from individual preferences.

> **Professor's Corner:** The key insight: Pareto optimality ≡ points on GUPF (all efficient); SW maximisation = a specific point at tangency with the SWF. These are NOT the same — this distinction is the heart of welfare economics.

⭐ **High-Yield** — SWF definition and GUPF derivation appear in multiple question formats. The 4-step derivation is essential.
→ *See also: Topic 5A Q2 (GUPF/bliss), Topic 5B Q1 (Pareto sufficiency)*

---

### Question 5 {#q-socwel-05}
**Critically explain three key things Pigou dealt with in social welfare analysis.** *(Professor Q5, 49Qs Q5)*

**Answer:**

> **Marking Guide [14 marks]:** Pillar 1 (3) | Pillar 2 (4) | Pillar 3 (4) | Evaluation (3)

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

> **Professor's Corner:** For the condensed version (Q5), the examiner wants synthesis, not repetition. Show you can identify the three pillars without the full detail of Q1. Strong answers add a brief evaluation of Pigou's overall legacy.

→ *See also: Topic 5A Q1 (full Pigou)*

---

### Question 6 {#q-socwel-06}
**Define social welfare function. How could it be used as a criterion to measure SW?** *(Professor Given Q4)*

**Answer:**

> **Marking Guide [14 marks]:** Definition (3) | Application (5) | Critique (4) | Diagram (2)

> **Formal Definition 9 — Social Indifference Contours**
>
> A **social indifference contour** (or social indifference curve) is the locus of utility pairs $(U_A, U_B)$ that yield the same level of social welfare $W$. These contours are the graphical representation of the SWF $W = F(U_A, U_B)$ in utility space (Koutsoyiannis, pp.528–530):
>
> $$F(U_A, U_B) = \text{constant} \quad \Rightarrow \quad \text{MRS}_{U_A, U_B}^F = \frac{\partial W / \partial U_A}{\partial W / \partial U_B}$$
>
> **Properties:** (i) Contours further northeast represent higher welfare; (ii) Convexity to origin implies diminishing marginal social utility (preference for equity); (iii) Shape reflects the ethical weights assigned to each individual — utilitarian contours have slope $-1$ (perfect substitutes in utility), Rawlsian contours are L-shaped (perfect complements).
>
> **Key insight:** The social optimum occurs where a social indifference contour is tangent to the GUPF — the slope of the contour equals the slope of the GUPF at that point.
> → *See also: Topic 5B Q6*

**Definition of Social Welfare Function (SWF):**

$$W = F(U_{1}, U_{2}, ..., U_{n})$$

A SWF is a rule for aggregating individual utility levels into a measure of overall social welfare. It provides a *complete ranking* of all feasible social states. Each state is a vector of utilities $(U_1,\ldots,U_n)$ and the SWF assigns a real number $W$ to that vector.

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
     s.t. (U_A, U_B) \in GUPF
```

- At the optimum: Slope(GUPF) = Slope(Social Indifference Contour)

**(3) Evaluating Pareto-incomparable changes**

- Pareto criterion fails when some gain and others lose. The SWF resolves this by allowing trade-offs across individuals based on explicit value judgements:
  - A change increasing U_A by +10 and decreasing U_B by -5 is SW-improving if W(\cdot) places sufficient weight on A relative to B.

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

> **Professor's Corner:** The Bergson-Samuelson SWF (used in optimisation) and Arrow's SWF (impossibility theorem) are different concepts. Many students conflate them — the examiner watches for this distinction.

→ *See also: Topic 5A Q4 (SWF/GUPF), Topic 5B Q6 (Utilitarian vs Rawlsian)*

---

### Question 7 {#q-socwel-07}
**What are the major assumptions of SW maximization in a 2×2×2 model?** *(Professor Given Q5)*

**Answer:**

> **Marking Guide [14 marks]:** Structure (3) | Efficiency (4) | Competition (4) | Distributional (3)

> **Formal Definition 10 — Three Pareto Efficiency Conditions & the First Welfare Theorem**
>
> A general equilibrium in a $2\times2\times2$ economy (2 factors, 2 goods, 2 consumers) is Pareto-optimal if and only if three marginal conditions hold simultaneously (Koutsoyiannis, pp.509–514; Munoz-Garcia, §6.4, pp.330–360):
>
> **(1) Consumption efficiency:** $\text{MRS}^A_{XY} = \text{MRS}^B_{XY}$ — the marginal rate of substitution between goods is equal across all consumers.
>
> **(2) Production efficiency:** $\text{MRTS}^X_{LK} = \text{MRTS}^Y_{LK}$ — the marginal rate of technical substitution between factors is equal across all firms.
>
> **(3) Product-mix efficiency:** $\text{MRPT}_{XY} = \text{MRS}_{XY}$ — the marginal rate of product transformation equals consumers' common marginal rate of substitution.
>
> **First Welfare Theorem:** Under local non-satiation, perfect competition, complete markets, and no externalities or public goods, every competitive equilibrium satisfies all three conditions and is therefore Pareto-optimal.
>
> **Key insight:** These conditions are necessary but not sufficient for social welfare maximization — they guarantee efficiency but say nothing about distributional equity.
> → *See also: Topic 5B Q1, Topic 5B Q5*

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

> **Professor's Corner:** The crucial distinction students miss: assumptions for Pareto optimality (sections A-C) vs. additional assumptions for SW maximisation (section D). The latter embodies value judgements — this is the key insight.

→ *See also: Topic 5B Q1 (Pareto sufficiency), Topic 5B Q5 (Welfare Theorems)*

---

# Topic 5B — Pareto Optimality & Welfare Theorems

---

### Question 1 {#q-pareto-01}
**"Pareto optimality necessary but not sufficient for SW maximization" — justify with 2×2×2 model.** *(10/7 marks)*

**Answer:**

> **Marking Guide [14 marks]:** Theory (3) | Derivation (4) | Diagram (4) | Evaluation (3)

> **Formal Definition 11 — Pareto Optimality & Pareto Improvement**
>
> An allocation is **Pareto-optimal** (or Pareto-efficient) if no feasible reallocation can make at least one individual better off without making any other individual worse off (Koutsoyiannis, pp.509–511; Munoz-Garcia, §6.4.1, pp.330–332):
>
> $$\text{Allocation } \mathbf{x} \text{ is PO } \iff \nexists \ \mathbf{x}' \text{ s.t. } U_i(\mathbf{x}') \ge U_i(\mathbf{x}) \ \forall i \text{ and } U_j(\mathbf{x}') > U_j(\mathbf{x}) \text{ for some } j$$
>
> A **Pareto improvement** is a reallocation that makes at least one individual better off without harming anyone else. If a Pareto improvement exists, the original allocation is Pareto-inefficient.
>
> **Key insight:** Pareto optimality is a minimal efficiency condition — it does not consider distributional equity. An allocation where one person has everything and others have nothing can be Pareto-optimal. The SWF is needed to select among Pareto-optimal points.
> → *See also: Topic 5B Q3, Topic 5A Q1*

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

Points c, c_{1}, and d are all on the GUPF → all Pareto-optimal. But if d lies on a higher social indifference contour than c or c_{1}, then d yields higher social welfare. Hence, Pareto optimality alone cannot identify the social optimum.

*Step 4 — Bergson's superiority:*

| Criterion | What it does | Limitation |
|-----------|-------------|------------|
| Pareto optimality | Identifies efficient allocations (any point on GUPF) | Cannot rank Pareto-optimal points — all are "optimal" in efficiency sense |
| Bergson SWF | Selects the single best point (tangency of SWF with GUPF) | Requires explicit value judgements about distribution |

**Conclusion:** Pareto optimality is *necessary* because any SW maximum must be efficient (otherwise resources are wasted — welfare could increase without harming anyone). But it is *not sufficient* because among the infinite set of Pareto-efficient allocations, only one (given the SWF) maximizes social welfare. Efficiency without equity does not guarantee maximum social welfare.

> **Exam Tip:** The classic diagram shows the GUPF with social indifference curves. Point E (tangency) = SW maximum. Points c and c_{1} on the GUPF are Pareto-optimal but on lower social indifference contours. This single diagram answers the entire question.

> **Professor's Corner:** The GUPF-SWF tangency diagram is the single most important diagram in welfare economics. Master it cold. The phrase "all points on GUPF are Pareto-optimal, but only one maximizes SW" is the key punchline.

⭐ **High-Yield** — This is the quintessential welfare economics essay question. The GUPF-SWF diagram answers the entire question in one image.
→ *See also: Topic 5A Q2 (GUPF/bliss), Topic 5A Q4 (SWF)*

---

### Question 2 {#q-pareto-02}
**Explain assumptions about MU of money for Hicks-Kaldor compensation. Can compensation be correct?** *(10/7 marks)*

**Answer:**

> **Marking Guide [14 marks]:** Theory (4) | Analysis (5) | Evaluation (5)

> **Formal Definition 12 — Kaldor-Hicks Compensation Principle & Robbins' Critique**
>
> The **Kaldor-Hicks compensation principle** (Kaldor, 1939; Hicks, 1940) states that a change from state $A$ to state $B$ improves social welfare if the gainers could *potentially* compensate the losers and still remain better off — regardless of whether compensation is actually paid (Munoz-Garcia, §6.7.2, pp.393–400; Koutsoyiannis, pp.526–528):
>
> $$\text{Change } A \to B \text{ is K-H efficient } \iff \sum \text{WTP}_{\text{gainers}} > \sum \text{WTA}_{\text{losers}}$$
>
> **Key: "Potential" not "actual" compensation** — the criterion accepts the status quo income distribution as ethically neutral, which biases results toward those with higher willingness-to-pay.
>
> **Robbins' Critique** (1932): Interpersonal comparisons of utility have no scientific basis. Since Kaldor-Hicks uses money valuations (which depend on income), it implicitly embeds interpersonal comparisons that the criterion claimed to avoid.
>
> **Key insight:** The Scitovsky paradox (see FD17) reveals a further flaw: Kaldor-Hicks can produce contradictory rankings $(A \succ B \text{ and } B \succ A)$ when utility possibility curves intersect.
> → *See also: Topic 5B Q7*

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
| **Potential \ne Actual compensation** | AMBIGUOUS | If compensation is not actually paid, the distributional change is ignored — the outcome may worsen actual welfare despite potential Pareto improvement |
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

> **Exam Tip:** The key word is "potential" compensation. The examiner expects you to identify that potential \ne actual compensation \to income distribution effects are ignored. Also mention Scitovsky's paradox and the double test (Kaldor-Hicks + reversal test).

> **Professor's Corner:** The word "potential" is the single most important term in this question. Potential ≠ actual compensation — this is the most common trap. Strong answers also note that Kaldor-Hicks accepts the status quo distribution as neutral.

→ *See also: Topic 5B Q7 (Scitovsky paradox)*

---

### Question 3 {#q-pareto-03}
**2-person 2-good fixed supply: show Pareto optimality for consumption with equations.** *(7 marks)*

**Answer:**

> **Marking Guide [14 marks]:** Setup (2) | Derivation (6) | Diagram (3) | Intuition (3)

> **Formal Definition 13 — Pareto-Optimal Consumption Condition & Contract Curve**
>
> For a pure-exchange economy with two consumers ($A$, $B$) and two goods ($X$, $Y$), a consumption allocation is Pareto-optimal if and only if the marginal rates of substitution are equal across consumers (Koutsoyiannis, pp.511–514; Munoz-Garcia, §6.4.2, pp.332–340):
>
> $$\text{MRS}^A_{XY} = \frac{MU_X^A}{MU_Y^A} = \frac{MU_X^B}{MU_Y^B} = \text{MRS}^B_{XY}$$
>
> The **contract curve** in the Edgeworth box is the locus of all Pareto-optimal consumption allocations — i.e., all points of tangency between $A$'s and $B$'s indifference curves:
>
> $$\mathcal{C} = \{ (X_A, Y_A) \mid \text{MRS}^A_{XY}(X_A, Y_A) = \text{MRS}^B_{XY}(\bar{X} - X_A, \bar{Y} - Y_A) \}$$
>
> **Key insight:** If $\text{MRS}^A \neq \text{MRS}^B$, mutually beneficial trade is possible — the consumer with the higher MRS values $X$ more and will trade $Y$ for $X$ until MRS equalize. The contract curve contains infinitely many Pareto-optimal points, each with a different utility distribution.
> → *See also: answers-ge-game-extern-trade Q2*

**Setup:**

- 2 consumers: A and B
- 2 goods: X and Y (fixed total supply: $\bar{X}$, $\bar{Y}$)
- A consumes (X_A, Y_A); B consumes (X_B, Y_B)
- Feasibility: X_A + X_B = $\bar{X}$, Y_A + Y_B = $\bar{Y}$
- Utility functions: U_A(X_A, Y_A), U_B(X_B, Y_B) — continuous, strictly increasing, quasiconcave

**Definition of Pareto-Optimal Consumption:**

An allocation {(X_A, Y_A), (X_B, Y_B)} is Pareto-optimal in consumption if it is impossible to reallocate the fixed goods to make one consumer better off without making the other worse off.

**Mathematical Formulation:**

Maximize U_A(X_A, Y_A) subject to:
1. U_B(X_B, Y_B) \ge \bar{U}_B (B's utility constraint)
2. X_A + X_B = X̄ (resource constraint for X)
3. Y_A + Y_B = Ȳ (resource constraint for Y)
4. X_A, Y_A, X_B, Y_B \ge 0 (non-negativity)

**Lagrangian:**

$\mathcal{L} = U_A(X_A, Y_A) + \lambda[U_B(\bar{X} - X_A, \bar{Y} - Y_A) - \bar{U}_B]$

**First-order conditions:**

$\partial \mathcal{L}/\partial X_A = \partial U_A/\partial X_A + \lambda \cdot \partial U_B/\partial X_B \cdot (-1) = 0$
$\Rightarrow \partial U_A/\partial X_A = \lambda \cdot \partial U_B/\partial X_B$ ... (1)

$\partial \mathcal{L}/\partial Y_A = \partial U_A/\partial Y_A + \lambda \cdot \partial U_B/\partial Y_B \cdot (-1) = 0$
$\Rightarrow \partial U_A/\partial Y_A = \lambda \cdot \partial U_B/\partial Y_B$ ... (2)

**Dividing (1) by (2):**

$(\partial U_A/\partial X_A) / (\partial U_A/\partial Y_A) = (\partial U_B/\partial X_B) / (\partial U_B/\partial Y_B)$

**Equivalently:**

**MRS^A_xy = MRS^B_xy**

where $MRS^i_{xy} = MU_x^i / MU_y^i = (\partial U_i/\partial X_i) / (\partial U_i/\partial Y_i)$

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

> **Professor's Corner:** Write the Lagrangian cleanly then explain the economics: if MRS differ, both can gain from trade until MRS equalise. The contract curve is not unique — this connects to the Pareto-but-not-SW-max point.

→ *See also: answers-ge-game-extern-trade Q2 (Edgeworth box), Topic 5B Q1*

---

### Question 4 {#q-pareto-04}
**Firm 1 external economies, firm 2 diseconomies. $p_1 = p_2 = 15$. $C_1 = 0.1q_1^2 + 5q_1 - 0.1q_2^2$, $C_2 = 0.2q_2^2 + 7q_2 + 0.025q_1^2$. Show Pareto optimality through taxes/subsidies. Find social dividend.** *(7 marks)*

**Answer:**

> **Marking Guide [14 marks]:** Private optimum (4) | Social optimum (5) | Taxes (3) | Social dividend (2)

> **Formal Definition 14 — External Economies & Diseconomies, Private vs Social Optimum**
>
> An **external economy** (positive externality) arises when one firm's production lowers another firm's costs: $\partial C_j / \partial q_i < 0$. An **external diseconomy** (negative externality) arises when one firm's production raises another firm's costs: $\partial C_j / \partial q_i > 0$ (Koutsoyiannis, pp.531–532; Pigou, 1932).
>
> The **private optimum** equates each firm's private marginal cost to price ($MC_i = p$), ignoring cross-effects. The **social optimum** maximizes joint profit, internalizing externalities by setting social marginal cost equal to price ($SMC_i = p$):
>
> $$\text{Private: } \frac{\partial C_i(q_i)}{\partial q_i} = p \quad \text{vs} \quad \text{Social: } \frac{\partial}{\partial q_i}\sum_j C_j(q_1, \dots, q_n) = p$$
>
> **Pigouvian solution:** Tax the firm generating the external diseconomy (negative externality) and subsidize the firm generating the external economy (positive externality), each at the marginal external effect evaluated at the social optimum.
> → *See also: Topic 5A Q1, Topic 5A Q5*

**Step 1 — Identify externalities:**

| Firm | Cost function | Externality |
|------|-------------|-------------|
| Firm 1 | $C_{1} = 0.1q_{1}^{2} + 5q_{1} - 0.1q_{2}^{2}$ | -0.1q_{2}^{2} \to C_{1} \downarrow as q_{2}\uparrow \Rightarrow **external economy from Firm 2 to Firm 1** |
| Firm 2 | $C_{2} = 0.2q_{2}^{2} + 7q_{2} + 0.025q_{1}^{2}$ | +0.025q_{1}^{2} \to C_{2} \uparrow as q_{1}\uparrow \Rightarrow **external diseconomy from Firm 1 to Firm 2** |

**Step 2 — Private optimum (each firm maximizes own profit, ignores externality):**

Each firm equates private MC to price (p = 15):

- $MC_{1}^{\text{priv}} = \partial C_{1}/\partial q_{1} = 0.2q_{1} + 5 = 15 \Rightarrow q_{1}^{\text{priv}} = 50$
- $MC_{2}^{\text{priv}} = \partial C_{2}/\partial q_{2} = 0.4q_{2} + 7 = 15 \Rightarrow q_{2}^{\text{priv}} = 20$

Private profits:
**$\pi_{1}^{\text{priv}} = 15(50) - [0.1(2500) + 5(50) - 0.1(400)] = 750 - [250 + 250 - 40] = 750 - 460 = 290$**
**$\pi_{2}^{\text{priv}} = 15(20) - [0.2(400) + 7(20) + 0.025(2500)] = 300 - [80 + 140 + 62.5] = 300 - 282.5 = 17.5$**
- **Total private profit = 307.5**

**Step 3 — Social optimum (maximize joint profit, internalize externalities):**

Total cost (social cost) function:
$TC = C_{1} + C_{2} = (0.1q_{1}^{2} + 5q_{1} - 0.1q_{2}^{2}) + (0.2q_{2}^{2} + 7q_{2} + 0.025q_{1}^{2})$
$= 0.125q_{1}^{2} + 0.1q_{2}^{2} + 5q_{1} + 7q_{2}$

Social marginal costs:

**$SMC_1 = \partial TC/\partial q_1 = 0.25q_1 + 5 = 15 \Rightarrow q_1^{*} = 40$**
**$SMC_2 = \partial TC/\partial q_2 = 0.2q_2 + 7 = 15 \Rightarrow q_2^{*} = 40$**

Social profits:
- $\pi_{1}* = 15(40) - [0.1(1600) + 5(40) - 0.1(1600)] = 600 - [160 + 200 - 160] = 600 - 200 = **400**$
- $\pi_{2}* = 15(40) - [0.2(1600) + 7(40) + 0.025(1600)] = 600 - [320 + 280 + 40] = 600 - 640 = **-40**$
- **Total social profit = 360**

**Step 4 — Pigouvian taxes/subsidies:**

The divergence between private and social optimum arises from externalities. Use taxes/subsidies to align private incentives with social efficiency.

| Firm | Private → Social | Problem | Policy |
|------|-----------------|---------|--------|
| Firm 1 | 50 $\to$ 40 | Overproduces — imposes external cost on Firm 2 (diseconomy) | $**Tax** = marginal external cost at q_{1}^{*} = \partial C_{2}/\partial q_{1} = 0.05q_{1} = 0.05(40) = **2 per unit**$ |
| Firm 2 | 20 $\to$ 40 | Underproduces — provides external benefit to Firm 1 (economy) | $**Subsidy** = marginal external benefit at q_{2}^{*} = -\partial C_{1}/\partial q_{2} = 0.2q_{2} = 0.2(40) = **8 per unit**$ |

**Verification:**

With tax on Firm 1 (t = 2):
- $MC_{1}^{\text{priv}} + t = 0.2q_{1} + 5 + 2 = 0.2q_{1} + 7 = 15 \Rightarrow q_{1} = 40$ $\checkmark$

With subsidy to Firm 2 (s = 8):
- $MC_{2}^{\text{priv}} - s = 0.4q_{2} + 7 - 8 = 0.4q_{2} - 1 = 15 \Rightarrow q_{2} = 40$ $\checkmark$

**Step 5 — Social dividend:**

$Social dividend = total profit at social optimum - total profit at private optimum$

| | Private optimum | Social optimum |
|---|---|---|
| q_{1} | 50 | 40 |
| q_{2} | 20 | 40 |
| \pi_{1} | 290 | 400 |
| \pi_{2} | 17.5 | -40 |
| Total | **307.5** | **360** |

**$Social Dividend = 360 - 307.5 = 52.5$**

The social dividend (52.5) represents the net gain to society from correcting the externality through Pigouvian taxation.

> **Exam Tip:** The structure is always: (1) Find private optimum (MC = p), (2) Find social optimum (minimize total cost, or set SMC = p), (3) Compare outputs, (4) Compute tax/subsidy = marginal external effect at social optimum, (5) Compute social dividend = change in total profit. The negative profit for Firm 2 at social optimum is realistic — subsidies compensate for losses.

> **Professor's Corner:** The solution is algorithmic: private optimum → social optimum → tax/subsidy = marginal external effect → social dividend. The negative profit for Firm 2 at social optimum is realistic and shows the need for the subsidy.

⭐ **High-Yield** — Numerical externality questions are guaranteed in exams. The 5-step structure is essential for timed answers.
→ *See also: answers-ge-game-extern-trade Q5 (externalities)*

---

### Question 5 {#q-pareto-05}
**State and explain First and Second Welfare Theorems with implications.** *(8 marks)*

**Answer:**

> **Marking Guide [14 marks]:** First Theorem (5) | Second Theorem (5) | Comparison (4)

> **Formal Definition 15 — First & Second Welfare Theorems**
>
> **First Welfare Theorem:** If all agents have **locally non-satiated** preferences and markets are perfectly competitive, every Walrasian (competitive) equilibrium allocation is Pareto-optimal (Koutsoyiannis, pp.514–517; Munoz-Garcia, §6.7.1, pp.388–393). Local non-satiation means that for any bundle $x$ and $\varepsilon > 0$, there exists $x'$ within $\varepsilon$ of $x$ that is strictly preferred — ensuring that budget constraints bind at equilibrium.
>
> **Second Welfare Theorem:** Under convexity of preferences and production sets, any Pareto-optimal allocation can be realized as a competitive equilibrium with appropriate **lump-sum transfers** of initial endowments (Munoz-Garcia, §6.7.3, pp.400–405; Koutsoyiannis, pp.517–519). Lump-sum transfers are fixed transfers independent of agents' choices, preserving marginal incentives.
>
> **Direction:**
> $$\text{1st: CE} \xrightarrow{\text{local non-satiation}} \text{PO} \qquad \text{2nd: PO} \xrightarrow{\text{convexity + transfers}} \text{CE}$$
>
> **Key insight:** The two theorems together imply that efficiency and equity can be separated — the government can redistribute endowments (equity) via lump-sum transfers and let competitive markets achieve efficiency.
> → *See also: Topic 5B Q8, Topic 5A Q7*

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

> **Professor's Corner:** Strong answers distinguish the direction of each theorem (CE → PO vs PO → CE) and the key assumption (local non-satiation vs convexity). The Second Theorem is more relevant for policy — it justifies redistribution without sacrificing efficiency.

⭐ **High-Yield** — The two Welfare Theorems are the foundation of modern welfare economics. Expect at least one question on them.
→ *See also: Topic 5B Q8 (competition vs welfare), Topic 5A Q7 (assumptions)*

---

### Question 6 {#q-pareto-06}
**What is social welfare function? Utilitarian vs Rawlsian.** *(6 marks)*

**Answer:**

> **Marking Guide [14 marks]:** SWF definition (2) | Utilitarian (4) | Rawlsian (4) | Comparison (4)

> **Formal Definition 16 — Utilitarian vs Rawlsian Social Welfare Functions**
>
> The **Utilitarian (Benthamite) SWF** sums individual utilities: $W = \sum_i U_i$. Social indifference curves are linear with slope $-1$ — utility is a perfect substitute across individuals (Koutsoyiannis, pp.526–528; Munoz-Garcia, §6.5.1, pp.360–364):
>
> $$W_U = \sum_{i=1}^n U_i \quad \Rightarrow \quad \text{MRS}_{U_A, U_B} = -1 \ \text{(constant)}$$
>
> The **Rawlsian (Maximin) SWF** cares only about the worst-off individual: $W = \min\{U_1, U_2, \dots, U_n\}$. Social indifference curves are L-shaped (right-angle) — utility is a perfect complement across individuals (Rawls, 1971, *A Theory of Justice*):
>
> $$W_R = \min_i U_i \quad \Rightarrow \quad \text{society is infinitely averse to inequality}$$
>
> **Key insight:** The shape of the social indifference curve reveals the entire ethical stance. Utilitarian = sum-ranking (equity-blind); Rawlsian = maximin (extreme equity focus). The Bergson-Samuelson SWF nests both as special cases.
> → *See also: Topic 5A Q3, Topic 5A Q6*

**Social Welfare Function (SWF):**

A rule mapping individual utility levels to a measure of aggregate social welfare:

$$W = F(U_{1}, U_{2}, ..., U_{n})$$

The SWF embodies society's value judgements about distributional equity. Different ethical philosophies imply different functional forms.

**Utilitarian SWF (Bentham, classical):**

$W = U_{1} + U_{2} + ... + U_{n} = \sum_{i} U_{i}$

| Property | Meaning |
|----------|---------|
| Form | Sum of utilities (additive) |
| Social indifference curves | Linear with slope -1 in U-U space |
| Equity concern | Only total utility matters — distribution irrelevant |
| MU of income | Typically assumed constant (or declining but equal across individuals) |
| Implication | A gain of 1 util to a rich person = a gain of 1 util to a poor person |
| Weakness | Ignores inequality — a transfer from poor to rich with \DeltaW = 0 is "acceptable" as long as total utility unchanged |

**Rawlsian SWF (John Rawls, maximin criterion):**

$W = min{U_{1}, U_{2}, ..., U_{n}}$

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
     $|  Slope = -1  (Utilitarian)$
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
| Social indifference curve | Linear, slope -1 | L-shaped (right-angle) |
| Transfer from rich to poor (same \DeltaU) | W unchanged | W unchanged |
| Transfer from rich to poor (poor gains less) | W decreases | W unchanged (if min unchanged) |
| Transfer from rich to poor (poor gains more) | W increases | W increases (if poor is the worst-off) |
| Philosophical basis | Classical utilitarianism | Theory of Justice (1971) — "veil of ignorance" |
| Practical implementation | Cost-benefit analysis (Kaldor-Hicks) | Targeted poverty-reduction policies |

**Other SWF forms:**

| Type | Formula | Characteristic |
|------|---------|---------------|
| **Nash (Cobb-Douglas)** | $W = \Pi_i U_i$ | Social indifference curves are rectangular hyperbolas; moderate inequality aversion |
| **Bergson-Samuelson** | $W = F(U_{1},...,U_{n})$ | General form with unspecified weights; allows any degree of inequality aversion |
| **Weighted utilitarian** | $W = \sum_i \alpha_i U_i$ with $\alpha_i > 0$ | Unequal weights for different individuals |

> **Exam Tip:** Draw the social indifference curves for both types in U_A-U_B space. Utilitarian = straight line (perfect substitutes in utility). Rawlsian = right-angle (perfect complements in utility). The shape reveals the ethical stance.

> **Professor's Corner:** The shape of the social indifference curves IS the answer. Utilitarian = straight line (perfect substitutes in utility). Rawlsian = L-shaped (perfect complements). The graph reveals the entire ethical stance.

→ *See also: Topic 5A Q3 (welfare criteria), Topic 5A Q6 (SWF as criterion)*

---

### Question 7 {#q-pareto-07}
**Explain Hicks-Kaldor compensation principle. How did Scitovsky correct the contradiction?** *(8 marks)*

**Answer:**

> **Marking Guide [14 marks]:** Kaldor-Hicks (4) | Scitovsky paradox (5) | Double test (5)

> **Formal Definition 17 — Scitovsky Paradox & the Double Test**
>
> **Scitovsky's paradox** (Scitovsky, 1941) demonstrates that the Kaldor-Hicks compensation criterion can produce logically contradictory rankings when utility possibility frontiers intersect (Munoz-Garcia, §6.7.2, pp.393–400; Koutsoyiannis, pp.526–528):
>
> $$A \succ_{KH} B \quad \text{AND} \quad B \succ_{KH} A \quad \text{(contradiction)}$$
>
> This arises because the two UPFs cross — the gainers in one state may be the losers in the other, and vice versa.
>
> **Scitovsky's Double Test** resolves the paradox by requiring both conditions:
> $$\text{(1) Forward test: Gainers can compensate losers;} \quad \text{(2) Reversal test: Losers cannot bribe gainers to reverse the change.}$$
>
> A change passes the Scitovsky criterion only if (i) the forward Kaldor-Hicks test passes AND (ii) the reversal test fails. This eliminates contradictory rankings by ensuring consistency.
>
> **Key insight:** The double test is necessary for a consistent welfare ranking when utility possibility curves intersect. However, it does not address the deeper issue of income distribution bias inherent in money-metric welfare criteria.
> → *See also: Topic 5B Q2*

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
     |    a_{1} (new)
     |   ╱
     |  ╱  a (initial)
     | ╱
     |╱
     └────────────────→ U_A
          UPF_{1} (initial)
                UPF_{2} (new)
```

If the two utility possibility curves (UPF_{1} and UPF_{2}) intersect, Kaldor-Hicks can produce:

- Movement a → a_{1}: Passes K-H test (gainers can compensate losers → welfare improves)
- Movement a_{1} → a: Also passes K-H test (gainers at a_{1} can compensate losers at a → welfare improves)

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
- a → a_{1}: Passes (i) $\checkmark$ but fails (ii) because the losers at a_{1} could bribe gainers to move back to a
- Therefore a → a_{1} is **not** a welfare improvement under the Scitovsky criterion

A movement from a to d (where both are better off) passes both tests.

**Limitations of Compensation Principle (all versions):**

| Limitation | Explanation |
|------------|-------------|
| Potential $\ne$ actual compensation | If compensation is not paid, the losers are actually worse off — the criterion ignores this |
| Ignores income distribution | The criterion accepts status quo distribution as neutral — biases results toward the rich |
| Constant MU of money assumed | Unrealistic — MU of money falls with income |
| Not a complete ordering | The criterion may still fail to rank some alternatives |
| Implicit value judgements | Despite claiming to be value-free, the criterion involves interpersonal comparisons through money valuations |

> **Exam Tip:** The Scitovsky paradox is the classic exam point. Show with intersecting utility possibility curves that Kaldor-Hicks can lead to A > B and B > A simultaneously. Scitovsky's double test resolves this by requiring both forward and reverse conditions.

> **Professor's Corner:** The Scitovsky paradox (intersecting UPFs → contradictory rankings) is the classic exam point. Show the intersecting UPF diagram clearly. The double test resolves it by requiring both forward and reverse conditions.

⭐ **High-Yield** — The Scitovsky paradox is a guaranteed exam question. Know the intersecting UPF diagram and the double test.
→ *See also: Topic 5B Q2 (MU of money assumptions)*

---

### Question 8 {#q-pareto-08}
**Does perfect competition ensure welfare maximization? Examine.** *(Professor Given Q8)*

**Answer:**

> **Marking Guide [14 marks]:** Efficiency (4) | Distribution (4) | Market failures (4) | Synthesis (2)

> **Formal Definition 18 — Initial Endowment Distribution & Market Failures Taxonomy**
>
> The **initial endowment distribution** determines which competitive equilibrium the economy reaches. Each initial distribution $\omega$ generates a unique Walrasian equilibrium $(\mathbf{p}^*, \mathbf{x}^*)$. Since every competitive equilibrium is Pareto-optimal (1st Welfare Theorem), different initial endowments produce different Pareto-optimal allocations — all efficient but with different utility distributions (Koutsoyiannis, pp.517–519; Munoz-Garcia, §6.7.3, pp.400–405).
>
> **Market failures** are situations where the First Welfare Theorem's assumptions break down, so competitive equilibrium is not Pareto-optimal (Munoz-Garcia, §6.7.4, pp.405–420; Koutsoyiannis, pp.531–532):
>
> | Failure | Source | Effect |
> |---------|--------|--------|
> | Market power | $P > MC$ | $\text{MRPT} \neq \text{MRS}$ |
> | Externalities | Unpriced costs/benefits | Private $\neq$ social cost |
> | Public goods | Non-rival, non-excludable | Free-rider → underprovision |
> | Asymmetric info | Adverse selection, moral hazard | Markets may unravel |
> | Non-convexities | Increasing returns | No competitive equilibrium |
>
> **Key insight:** Even without market failures, competitive equilibrium need not maximize social welfare — distribution depends on initial endowments. The 2nd Welfare Theorem shows lump-sum transfers can correct this, but such transfers are rarely feasible in practice.
> → *See also: Topic 5B Q5, Topic 5A Q7*

**Short Answer:** Perfect competition ensures *Pareto efficiency* (First Welfare Theorem) but does NOT guarantee *social welfare maximization*, which also requires distributional equity.

**In What Sense Does Perfect Competition Ensure Efficiency?**

Under perfect competition, the following marginal conditions are automatically satisfied in general equilibrium:

| Condition | Market Mechanism |
|-----------|-----------------|
| MRS^A_xy = MRS^B_xy | All consumers face same prices $\to$ equate MRS to price ratio |
| MRTS^X_LK = MRTS^Y_LK | All firms face same factor prices $\to$ equate MRTS to factor price ratio |
| MRPT_xy = MRS_xy | P = MC for all firms $\to$ MRPT = MC_x/MC_y = P_x/P_y = MRS |

Result: **Every competitive equilibrium is Pareto-optimal** (First Welfare Theorem).

**Why Perfect Competition Does NOT Ensure Maximum Social Welfare:**

**(1) Pareto optimality \ne SW maximization**

All points on the GUPF are Pareto-optimal (including extremes where one person gets everything). But society's SWF selects only one point (tangency of SWF with GUPF). Competition ensures we are *somewhere* on the GUPF, but not necessarily at the bliss point.

**(2) Initial endowment distribution matters**

The competitive equilibrium reached depends on the initial distribution of endowments. Different initial distributions → different competitive equilibria (all Pareto-optimal, but with different utility distributions).

```
Initial endowments $\to$ Competitive equilibrium $\to$ Pareto-optimal ALWAYS
                   $\to$ Which Pareto-optimal point? Depends on endowments
                   $\to$ Social welfare? Depends on SWF and resulting distribution
```

**(3) Market failures prevent even Pareto optimality**

| Failure | Effect | Why competition fails |
|---------|--------|----------------------|
| Market power (monopoly) | $P > MC$ $\to$ $MRPT \ne MRS$ | Non-price-taking behaviour |
| Externalities | Private $\ne$ Social cost | Unpriced interdependencies |
| Public goods | Non-rival, non-excludable | Free-rider problem $\to$ underprovision |
| Increasing returns | Non-convex production set | Natural monopoly $\to$ $P < MC$ at efficient scale |
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

> **Exam Tip:** This is a common essay question. Structure: (1) Yes — competition ensures Pareto efficiency via the three marginal conditions. (2) No — Pareto \ne SW maximum; initial endowments determine the equilibrium; market failures prevent efficiency; equity requires redistribution beyond markets. (3) Conclusion — necessary but not sufficient. Reference both Welfare Theorems.

> **Professor's Corner:** This is the synthesis question that ties together all of welfare economics. Structure: Yes (efficiency via 3 marginal conditions) → No (initial endowments, market failures, equity) → Conclusion (necessary but not sufficient). Reference both Welfare Theorems explicitly.

⭐ **High-Yield** — This is the capstone question that ties together all welfare economics topics. The synthesis table makes for a strong conclusion.
→ *See also: Topic 5B Q1 (Pareto sufficiency), Topic 5B Q5 (Welfare Theorems)*
