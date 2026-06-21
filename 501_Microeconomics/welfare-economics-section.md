## Topic 4: Welfare Economics

### 4.1 Compensating Variation, Equivalent Variation & Consumer Surplus

#### 4.1.1 Definitions

Three measures quantify the welfare impact of a price change on a consumer.

Let $p^0$ and $p^1$ be initial and final price vectors, $w$ be income (constant), $u^0 = v(p^0, w)$ and $u^1 = v(p^1, w)$ be initial and final utility levels, and $e(p, u)$ be the expenditure function.

| Measure | Definition | Formula (price decrease) |
|---------|-----------|--------------------------|
| **CV** | Money taken/given *after* the price change to restore the *original* utility $u^0$ | $CV = w - e(p^1, u^0)$ |
| **EV** | Money given/taken *before* the price change to reach the *new* utility $u^1$ | $EV = e(p^0, u^1) - w$ |
| **CS** | Area under the Marshallian demand curve between old and new prices | $CS = \int_{p_1^0}^{p_1^1} x_1(p_1, \bar{p}_{-1}, w)\,dp_1$ |

**Key reference points:**

| Measure | Utility anchor | Price anchor | Demand curve |
|---------|---------------|-------------|--------------|
| CV | $u^0$ (original) | $p^1$ (new) | Hicksian at $u^0$ |
| EV | $u^1$ (new) | $p^0$ (old) | Hicksian at $u^1$ |
| CS | Mixed | $p^0 \to p^1$ | Marshallian |

**Relationship via expenditure functions:**

$$CV = e(p^1, u^1) - e(p^1, u^0) = w - e(p^1, u^0)$$
$$EV = e(p^0, u^1) - e(p^0, u^0) = e(p^0, u^1) - w$$

CV anchors on **original utility at new prices**; EV anchors on **new utility at old prices**. CS is empirically observable (Marshallian demand is estimable) but theoretically approximate unless income effects are zero.

---

#### 4.1.2 EV > CS > CV Ordering

For a **price decrease** ($p \downarrow$) and a **normal good**:

$$EV \;>\; CS \;>\; CV$$

For a **price increase** ($p \uparrow$) and a **normal good**:

$$CV \;>\; CS \;>\; EV$$

**Why the ordering?** For a price decrease on a normal good:
- **EV** uses Hicksian demand at $u^1$ (higher utility) — income effect shifts Hicksian demand right → largest area
- **CS** uses Marshallian demand — lies between the two Hicksian curves → intermediate area
- **CV** uses Hicksian demand at $u^0$ (original utility) — smallest area

The gap $|EV - CV|$ measures the **income effect**. When the income effect is zero (quasilinear utility), all three measures coincide: $CV = EV = CS$.

**Diagram logic (price decrease):**

At $p_1^1 < p_1^0$, for a normal good: $h(p, u^1) > x(p, w) > h(p, u^0)$. The three demand curves intersect at $p_1^0$. EV is the area left of $h(p, u^1)$ between $p^0$ and $p^1$; CS is the area left of $x(p, w)$; CV is the area left of $h(p, u^0)$.

**For inferior goods:** The ordering reverses — Hicksian demand at $u^1$ shifts left instead of right.

**Willig (1976) bounds:** For realistic income elasticities and price changes, the percentage error from using CS instead of CV or EV is typically $<5\%$:

$$\frac{|CS - CV|}{|CV|} \le \frac{\eta \cdot (\Delta p / p)}{2}, \qquad \frac{|CS - EV|}{|EV|} \le \frac{\eta \cdot (\Delta p / p)}{2}$$

where $\eta$ is the income elasticity of demand.

---

#### 4.1.3 Worked Example: Cobb-Douglas $u = x_1^{1/2} x_2^{1/2}$

**Given:** $p^0 = (4, 4),\; w = 300$; $p^1 = (2, 4),\; w = 300$.

**Walrasian demands:** $x_1 = \frac{150}{p_1},\; x_2 = \frac{150}{p_2}$.

**Indirect utilities:**
- $v^0 = v(4,4,300) = 37.5$
- $v^1 = v(2,4,300) = \sqrt{75 \times 37.5} \approx 53.03$

**Expenditure function** (for $u = x_1^{1/2} x_2^{1/2}$):
$$e(p, u) = 2u \sqrt{p_1 p_2}$$

**CV** (price decrease):
$$CV = w - e(p^1, u^0) = 300 - 2(37.5)\sqrt{2 \times 4} = 300 - 212.1 = 87.9$$

**EV:**
$$EV = e(p^0, u^1) - w = 2(53.03)\sqrt{4 \times 4} - 300 = 424.24 - 300 = 124.24$$

**CS:**
$$CS = \int_{4}^{2} \frac{150}{p_1}\,dp_1 = 150[\ln p_1]_{4}^{2} = 150\ln(0.5) \approx 103.98$$

**Summary:** $EV = 124.24 > CS = 103.98 > CV = 87.9$ — confirms both goods are **normal goods**. The gap $EV - CV = 36.34 > 0$ indicates a substantial income effect, consistent with Cobb-Douglas (unit income elasticity).

---

#### 4.1.4 CS Approximation: When CS Overstates CV and Understates EV

For a price decrease with a normal good:
- **CS > CV:** Marshallian demand includes both substitution and income effects → flatter than Hicksian at $u^0$ → larger area
- **EV > CS:** Hicksian demand at $u^1$ shifts right (income effect) → larger area than Marshallian

**Special cases:**
| Condition | Relationship |
|-----------|-------------|
| Zero income effect (quasilinear) | $CS = CV = EV$ (exact) |
| Small price change | $CS \approx CV \approx EV$ (Willig bounds) |
| Normal good, large price change | $EV > CS > CV$ (decrease); $CV > CS > EV$ (increase) |
| Inferior good | Reversed ordering |

---

### 4.2 Pareto Optimality

#### 4.2.1 Definition and Concept

An allocation $\mathbf{x}$ is **Pareto-optimal** (Pareto-efficient) if no feasible reallocation can make at least one individual better off without making any other individual worse off:

$$\text{Allocation } \mathbf{x} \text{ is PO } \iff \nexists \ \mathbf{x}' \text{ s.t. } U_i(\mathbf{x}') \ge U_i(\mathbf{x}) \ \forall i \text{ and } U_j(\mathbf{x}') > U_j(\mathbf{x}) \text{ for some } j$$

A **Pareto improvement** is a reallocation making at least one person better off without harming anyone else.

---

#### 4.2.2 Three Pareto Conditions in the $2 \times 2 \times 2$ Model

The $2\times2\times2$ model has two factors ($L$, $K$), two goods ($X$, $Y$), and two consumers ($A$, $B$). For Pareto optimality, three marginal conditions must hold simultaneously:

**1. Consumption efficiency (efficiency in exchange):**

$$MRS_{XY}^A = MRS_{XY}^B$$

The marginal rate of substitution between goods must be equal across all consumers. This ensures no mutually beneficial trade remains.

*Lagrangian derivation (fixed supply $\bar{X}$, $\bar{Y}$):*

$$\mathcal{L} = U_A(X_A, Y_A) + \lambda[U_B(\bar{X} - X_A, \bar{Y} - Y_A) - \bar{U}_B]$$

FOCs:
$$\frac{\partial U_A/\partial X_A}{\partial U_A/\partial Y_A} = \frac{\partial U_B/\partial X_B}{\partial U_B/\partial Y_B} \quad\Rightarrow\quad MRS_{XY}^A = MRS_{XY}^B$$

The locus of such points in the Edgeworth exchange box is the **contract curve**.

**2. Production efficiency (efficiency in factor allocation):**

$$MRTS_{LK}^X = MRTS_{LK}^Y$$

The marginal rate of technical substitution between factors must be equal across all firms. This ensures no reallocation of $L$ and $K$ can increase output of one good without reducing the other.

**3. Product-mix efficiency (efficiency in output composition):**

$$MRPT_{XY} = MRS_{XY}$$

The marginal rate of product transformation (slope of the PPC) must equal the consumers' common marginal rate of substitution. With $MRPT_{XY} = MC_X/MC_Y$ and $P = MC$ under competition, this becomes $P_X/P_Y = MRS$.

---

#### 4.2.3 Pareto Optimality: Necessary but Not Sufficient

**Statement:** A situation can be Pareto-optimal without maximizing social welfare. All SW maxima must be Pareto-optimal, but not all Pareto-optimal points are SW maxima.

**Proof via $2\times2\times2$ model:**

1. All points on the PPC satisfy all three Pareto conditions → all are Pareto-optimal
2. The GUPF (envelope of all UPFs) contains infinitely many Pareto-optimal points
3. SW maximization requires tangency between the GUPF and the highest social indifference contour — only one point on the GUPF satisfies this
4. Points $c$, $c_1$, $d$ on the GUPF are all Pareto-optimal, but $d$ may lie on a higher social indifference contour

| Criterion | What it does | Limitation |
|-----------|-------------|------------|
| Pareto optimality | Identifies efficient allocations | Cannot rank Pareto-optimal points |
| Bergson SWF | Selects single best point (tangency with GUPF) | Requires explicit value judgements |

**Conclusion:** Pareto optimality is *necessary* (any SW maximum must be efficient) but *not sufficient* (among infinite Pareto-efficient allocations, only one maximizes SW given the SWF).

---

#### 4.2.4 Externalities and Pareto Optimality: Pigouvian Tax/Subsidy

When externalities exist, private optimization does not yield Pareto optimality. Consider two firms in a competitive market ($p = 15$):

| Firm | Cost function | Externality |
|------|-------------|-------------|
| Firm 1 | $C_1 = 0.1q_1^2 + 5q_1 - 0.1q_2^2$ | $-\partial C_1/\partial q_2 > 0$ → external economy from Firm 2 |
| Firm 2 | $C_2 = 0.2q_2^2 + 7q_2 + 0.025q_1^2$ | $+\partial C_2/\partial q_1 > 0$ → external diseconomy from Firm 1 |

**Private optimum** (each firm maximizes own profit, $MC_i = p$):
- $MC_1^{priv} = 0.2q_1 + 5 = 15 \Rightarrow q_1 = 50$
- $MC_2^{priv} = 0.4q_2 + 7 = 15 \Rightarrow q_2 = 20$
- Total private profit = $290 + 17.5 = 307.5$

**Social optimum** (maximize joint profit, internalize externalities):
$$TC = C_1 + C_2 = 0.125q_1^2 + 0.1q_2^2 + 5q_1 + 7q_2$$
- $SMC_1 = 0.25q_1 + 5 = 15 \Rightarrow q_1^* = 40$
- $SMC_2 = 0.2q_2 + 7 = 15 \Rightarrow q_2^* = 40$
- Total social profit = $400 + (-40) = 360$

**Pigouvian correction:**
| Firm | Problem | Policy |
|------|---------|--------|
| Firm 1: $50 \to 40$ | Overproduces (external diseconomy) | Tax $t = \partial C_2/\partial q_1 = 0.05(40) = 2$ per unit |
| Firm 2: $20 \to 40$ | Underproduces (external economy) | Subsidy $s = -\partial C_1/\partial q_2 = 0.2(40) = 8$ per unit |

**Verification:** With tax: $MC_1 + 2 = 0.2q_1 + 7 = 15 \Rightarrow q_1 = 40$. With subsidy: $MC_2 - 8 = 0.4q_2 - 1 = 15 \Rightarrow q_2 = 40$.

**Social dividend** $= 360 - 307.5 = 52.5$ — the net gain to society from correcting the externality.

---

### 4.3 The First and Second Welfare Theorems

#### 4.3.1 First Welfare Theorem (Invisible Hand Theorem)

> **Every competitive equilibrium is Pareto-optimal.**

*Formal statement:* If all agents have locally non-satiated preferences and markets are perfectly competitive, every Walrasian equilibrium allocation is Pareto-efficient.

**Key assumption:** Local non-satiation — for any bundle $x$ and $\varepsilon > 0$, there exists $x'$ within $\varepsilon$ of $x$ that is strictly preferred. This ensures budget constraints bind at equilibrium.

**Conditions required:**
| Condition | Role |
|-----------|------|
| Local non-satiation | Consumers spend all income |
| Perfect competition | All agents are price-takers |
| Complete markets | Markets exist for all goods |
| No externalities | All costs/benefits reflected in prices |
| No public goods | Goods are rivalrous and excludable |

**Why it works:** In competitive equilibrium:
- Consumers equate $MRS$ to price ratio $\Rightarrow MRS^A = MRS^B$ (consumption efficiency)
- Producers equate $MRTS$ to factor price ratio $\Rightarrow MRTS^X = MRTS^Y$ (production efficiency)
- $P = MC \Rightarrow MRPT = P_X/P_Y = MRS$ (product-mix efficiency)

#### 4.3.2 Second Welfare Theorem

> **Any Pareto-optimal allocation can be realized as a competitive equilibrium with appropriate lump-sum transfers.**

*Formal statement:* Under convexity of preferences and production sets, for any Pareto-optimal allocation, there exists a set of prices and lump-sum transfers such that the allocation is a competitive equilibrium.

**Key assumptions:** Convex preferences, convex production sets, lump-sum transfers (fixed transfers independent of choices, preserving marginal incentives).

**Direction:**
$$\text{FWT: CE } \xrightarrow{\text{local non-satiation}} \text{ PO} \qquad \text{SWT: PO } \xrightarrow{\text{convexity + transfers}} \text{ CE}$$

#### 4.3.3 Comparison and Implications

| Feature | First Theorem | Second Theorem |
|---------|---------------|----------------|
| Direction | CE $\to$ PO | PO $\to$ CE |
| Key assumption | Local non-satiation | Convexity of preferences/production |
| Policy implication | Markets work — don't interfere | Redistribute endowments, then let markets work |
| Practical limitation | Real markets have imperfections | Lump-sum transfers infeasible in practice |

**Separation of efficiency and equity:** The two theorems together imply that society can first choose a "fair" distribution (via lump-sum transfers) and then let competitive markets achieve efficiency. The government should redistribute endowments, not intervene in prices.

**When the theorems fail (market failures):**
| Failure | Effect |
|---------|--------|
| Market power | $P > MC \Rightarrow MRPT \neq MRS$ |
| Externalities | Private $\neq$ social cost |
| Public goods | Free-rider $\Rightarrow$ underprovision |
| Asymmetric information | Adverse selection, moral hazard |
| Non-convexities | No competitive equilibrium exists |

#### 4.3.4 Does Perfect Competition Ensure Welfare Maximization?

**Short answer:** Perfect competition ensures *Pareto efficiency* (FWT) but does NOT guarantee *social welfare maximization*, which also requires distributional equity.

**Why competition ensures efficiency:** Under perfect competition, all three marginal conditions are automatically satisfied in general equilibrium via the price mechanism.

**Why competition does NOT ensure SW maximization:**

1. **Pareto $\neq$ SW maximum:** All points on the GUPF are Pareto-optimal, but only one maximizes SW (tangency with SWF)
2. **Initial endowment distribution matters:** Different endowments $\to$ different competitive equilibria (all PO, but different utility distributions)
3. **Market failures** prevent even Pareto optimality
4. **Distributional equity** requires active redistribution — markets have no tendency toward equity

**The theoretical ideal:** Perfect competition (for efficiency) + Lump-sum transfers (for equity) + SWF (for distributional choice).

---

### 4.4 Social Welfare Functions

#### 4.4.1 Definition

A **Social Welfare Function (SWF)** is a rule $W = F(U_1, U_2, \dots, U_n)$ that ranks alternative social states based on individual utility levels. Introduced by Bergson (1938) and developed by Samuelson, it embodies society's value judgements about distribution:

$$W = F(U_1, U_2, \dots, U_n) \quad \text{with} \quad \partial W / \partial U_i > 0 \ \forall i$$

Social welfare contours (in $U_A$-$U_B$ space) are downward-sloping, do not intersect, and higher contours represent higher welfare.

#### 4.4.2 Types of SWF

| Type | Formula | Social indifference curve | Equity concern |
|------|---------|--------------------------|---------------|
| **Utilitarian (Bentham)** | $W = \sum_i U_i$ | Linear, slope $-1$ | None (sum-ranking) |
| **Rawlsian (maximin)** | $W = \min_i U_i$ | L-shaped (right-angle) | Extreme (only worst-off matters) |
| **Nash (multiplicative)** | $W = \prod_i U_i$ | Rectangular hyperbola | Moderate inequality aversion |
| **Bergson-Samuelson** | $W = F(U_1, \dots, U_n)$ | General form | Any degree of inequality aversion |

**Utilitarian:** A gain of 1 util to a rich person = a gain of 1 util to a poor person. Ignores inequality — a transfer from poor to rich with $\Delta W = 0$ is "acceptable."

**Rawlsian:** Only the worst-off person matters. Any change that improves the worst-off is good, even if it dramatically reduces everyone else's utility. Philosophical basis: Rawls (1971) *A Theory of Justice* — "veil of ignorance."

#### 4.4.3 Grand Utility Possibility Frontier and Point of Bliss

**Derivation of GUPF (4 steps):**

1. **PPC:** Each point on the production possibility curve is a Pareto-efficient output combination $(X, Y)$
2. **UPF:** For a given product-mix, construct the Edgeworth exchange box. The contract curve yields a utility possibility frontier — the set of efficient utility pairs $(U_A, U_B)$
3. **GUPF:** The outer envelope of all UPFs across every product-mix on the PPC. It represents the maximum utility combinations feasible given resources and technology
4. **Point of Bliss:** Tangency between the GUPF and the highest attainable social indifference contour

**Condition at bliss point:**

$$MRPT_{XY} = MRS^A_{XY} = MRS^B_{XY} \quad \text{(Pareto efficiency — holds on entire GUPF)}$$
$$\text{Slope(GUPF)} = \text{Slope(Social Indifference Contour)} \quad \text{(distributional judgement — only at bliss)}$$

The bliss point determines all ten unknowns in the $2\times2\times2$ model: $X^*, Y^*, X_A^*, X_B^*, Y_A^*, Y_B^*, L_X^*, L_Y^*, K_X^*, K_Y^*$.

#### 4.4.4 Kaldor-Hicks Compensation and the Scitovsky Double Test

**Kaldor-Hicks compensation principle (1939):** A change from state $A$ to state $B$ improves social welfare if the gainers could *potentially* compensate the losers and still remain better off — regardless of whether compensation is actually paid:

$$\text{Change } A \to B \text{ is K-H efficient } \iff \sum \text{WTP}_{\text{gainers}} > \sum \text{WTA}_{\text{losers}}$$

**Critical assumption — Equal MU of money:** For monetary amounts to be comparable across individuals, each unit of money must represent the same utility change for everyone. If the MU of money differs (e.g., millionaire vs. poor person), the comparison breaks down.

**Can compensation be correct?**
| Condition | Verdict |
|-----------|---------|
| MU of money EQUAL across individuals | YES — £1 gain = £1 loss in utility terms |
| MU of money UNEQUAL | NO — example: millionaire gains £2000 (low MU), poor loses £1000 (high MU) → total utility falls despite K-H "pass" |
| Potential $\neq$ actual compensation | AMBIGUOUS — distributional change ignored |
| Constant MU unrealistic | NO — MU of money declines with income |

**Scitovsky paradox (1941):** Kaldor-Hicks can produce contradictory rankings when utility possibility curves intersect:
$$A \succ_{KH} B \quad \text{AND} \quad B \succ_{KH} A$$

**Scitovsky's Double Test** resolves this:
1. **Forward test:** Gainers can compensate losers (K-H test passes)
2. **Reversal test:** Losers *cannot* bribe gainers to reject the change

A change is welfare-improving only if (i) passes AND (ii) fails.

**Limitations of compensation principle:**
- Potential $\neq$ actual compensation → losers may be actually worse off
- Ignores income distribution — accepts status quo as neutral
- Constant MU of money assumed unrealistically
- Not a complete ordering — may still fail to rank some alternatives

#### 4.4.5 Pigou's Three Pillars of Welfare Economics

Pigou (1932) structured welfare analysis around three pillars:

**Pillar 1: Definition and measurement of economic welfare**
- Economic welfare = "that part of social welfare that can be brought into relation with the measuring rod of money"
- Economic welfare and national income are coordinate
- *Criticism:* Cannot separate economic from non-economic welfare (Robbins); cardinal utility is unmeasurable

**Pillar 2: Dual conditions for welfare maximization**
| Condition | Content | Assumption |
|-----------|---------|------------|
| (i) National income growth | Given factor supply, NI↑ → SW↑ | Tastes and distribution unchanged |
| (ii) Income redistribution | Transfer from rich to poor ↑ SW (constant NI) | Equal capacity for satisfaction + diminishing MU of income |

*Criticism of (ii):* "Equal capacity for satisfaction" is scientifically untenable — it is a value judgement favoring equality.

**Pillar 3: Private vs. social net product (externalities)**
- Private net product: contribution to national dividend accruing to the private investor
- Social net product: aggregate contribution (including external effects)
- *Policy:* Tax where private > social; subsidize where social > private
- *Criticism:* Divergence cannot always be quantified; assumes state can measure marginal external effects accurately

---

### 4.5 Assumptions of Social Welfare Maximization in the $2\times2\times2$ Model

| Category | Assumptions |
|----------|-------------|
| **Structure** | 2 factors ($L$, $K$, fixed supply); 2 goods ($X$, $Y$); 2 consumers ($A$, $B$); each firm produces one good |
| **Efficiency (Pareto)** | $MRS^A = MRS^B$, $MRTS^X = MRTS^Y$, $MRPT = MRS$ |
| **Competition (for FWT)** | Price-taking, complete markets, no externalities, no public goods, convex preferences/technology, perfect information, perfect factor mobility |
| **Distributional (beyond Pareto)** | Existence of a SWF $F(U_A, U_B)$, concave SWF, no interpersonal utility comparisons (the SWF embeds these as value judgements) |

**Key distinction:** Assumptions for Pareto optimality (market structure, convexity, no externalities) vs. additional assumptions for SW maximization (existence of SWF, value judgements) — many students miss the second category.

---

### 4.6 Arrow's Impossibility Theorem

Arrow (1951) proved that no SWF can simultaneously satisfy:
1. **Universal domain** (all possible preference profiles allowed)
2. **Pareto principle** (if everyone prefers $A$ to $B$, society prefers $A$ to $B$)
3. **Independence of irrelevant alternatives** (social ranking of $A$ vs $B$ depends only on individual rankings of $A$ vs $B$)
4. **Non-dictatorship** (no single individual's preferences determine social preferences)

**Bergson-Samuelson SWF** (used in optimization) vs. **Arrow's SWF** (preference aggregation) are fundamentally different concepts:

| Bergson-Samuelson | Arrow |
|-------------------|-------|
| Assumes a social planner with explicit value judgements | Attempts to aggregate individual preferences |
| Used for constrained optimization (bliss point) | Used for aggregation rules |
| Viable for policy analysis | Proves impossibility of perfect aggregation |

---

### 4.7 Summary Table: Welfare Criteria

| Criterion | Basis | Interpersonal comparisons? | Complete ordering? | Distributional concern? |
|-----------|-------|--------------------------|-------------------|------------------------|
| Pareto | Ordinal utility | No | No (only Pareto-rankable) | None |
| Kaldor-Hicks | Money metric | Implicit (via money) | Potentially contradictory | None (status quo accepted) |
| Scitovsky double | Money metric | Implicit | Yes (consistent) | None |
| Bergson SWF | SWF with value judgements | Yes (embedded in SWF) | Yes | Explicit (via SWF shape) |
| Utilitarian | Sum of utilities | Yes (cardinal) | Yes | Equity-blind (sum-ranking) |
| Rawlsian | Minimum utility | Yes (ordinal) | Yes | Extreme (maximin) |

---

### Exam Checklist

- [ ] Define CV, EV, CS with correct utility anchors
- [ ] Know $EV > CS > CV$ ordering for price decrease (normal goods)
- [ ] Cobb-Douglas welfare computation: $e(p, u) = 2u\sqrt{p_1 p_2}$ for $\alpha = 1/2$
- [ ] Willig bounds: CS approximates CV/EV within $<5\%$ for realistic scenarios
- [ ] Three Pareto conditions: $MRS^A = MRS^B$, $MRTS^X = MRTS^Y$, $MRPT = MRS$
- [ ] Pareto necessary but not sufficient for SW maximization (GUPF-SWF tangency diagram)
- [ ] FWT: CE $\to$ PO (local non-satiation); SWT: PO $\to$ CE (convexity + transfers)
- [ ] Separation of efficiency and equity (Second Welfare Theorem)
- [ ] Utilitarian (linear, slope -1) vs Rawlsian (L-shaped) indifference curves
- [ ] Kaldor-Hicks: potential compensation, equal MU of money assumption, Scitovsky double test
- [ ] Pigouvian tax/subsidy algorithm: private optimum $\to$ social optimum $\to$ tax = marginal external effect $\to$ social dividend
- [ ] Arrow's Impossibility: UD + P + IIA + ND cannot all be satisfied
