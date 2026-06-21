# Microeconomics — Questions by Topic (with Answers)

> All microeconomic theory questions from every source, organized by topic with concise exam-ready answers.
> **Cross-links:** [Year-wise Index](./micro-questions-year-wise.md) | [Priority Matrix 📊](./EXAM-PRIORITY-MATRIX.md) | [Full Notes](./README.md) | [Basics](./basics.md) | [Resources](./resources/README.md)

---

## 1. Consumer Theory & Preferences

### 1A — Preference-Based Approach

| # | Question | Priority | Marks | Source | Year |
|---|----------|----------|-------|--------|------|
| 1 | What is the preference-based approach of consumer's behavior? Explain and interpret the assumptions. | [A](./EXAM-PRIORITY-MATRIX.md) | 10/7 | MainQ Tut1, Batch 47 Q1a | —, 2022 |
| 2 | Define indifference set. Examine that if a preference relation satisfies strong monotonicity, its indifference curves must be downward sloping. | [A](./EXAM-PRIORITY-MATRIX.md) | 10/7 | MainQ Tut1, Batch 47 Q1b | —, 2022 |
| 3 | What are the twin definitions of convexity? How do they differ from strong convexity? Examine graphically. | [A](./EXAM-PRIORITY-MATRIX.md) | 10/4 | MainQ Tut1, Batch 47 Q2a | —, 2022 |
| 4 | Show: Convexity of preference $\iff$ USC(x) is convex $\iff$ u(.) is quasiconcave. | [A](./EXAM-PRIORITY-MATRIX.md) | 5 | MainQ Tut1, Batch 47 Q2b | —, 2022 |
| 5 | Prove: If preference satisfies monotonicity and continuity, there exists a utility function u(.) representing it. | [A](./EXAM-PRIORITY-MATRIX.md) | 5 | MainQ Tut1, Batch 47 Q2c | —, 2022 |
| 6 | Define utility function. Explain desirability of consumer's preference by monotonicity and strong monotonicity. | [A](./EXAM-PRIORITY-MATRIX.md) | 10/5 | MainQ Tut1, Batch 47 Q4a | —, 2022 |
| 7 | Show: Strong Monotonicity $\implies$ Monotonicity $\implies$ LNS. | [A](./EXAM-PRIORITY-MATRIX.md) | 5 | MainQ Tut1, Batch 47 Q4b | —, 2022 |
| 8 | Examine properties of preference relations: i) Homogeneity ii) Homotheticity. | [S](./EXAM-PRIORITY-MATRIX.md) | 5/4 | MainQ Tut1, Batch 47 Q4c | —, 2022 |
| 9 | Prove quasi-concave utility U(X,Y) is identical to dMRS/dX < 0. | [B](./EXAM-PRIORITY-MATRIX.md) | 8 | Batch 48 Q1a | 2023 |
| 10 | Does U = X + log(Y) have convex indifference curves? Provide proof. | [B](./EXAM-PRIORITY-MATRIX.md) | ~3 | Batch 48 Q2a | 2023 |

### Question 1
**Q:** What is the preference-based approach of consumer behavior? Explain and interpret the assumptions.
**Brief:** The preference-based approach treats consumer preferences as primitive: a rational preference relation $\succeq$ over bundles satisfies completeness (any two bundles are comparable) and transitivity (no preference cycles), from which utility-maximizing choices are derived. These axioms rule out money-pump exploitation and enable utility representation via Debreu's theorem.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-01)

### Question 2
**Q:** Define indifference set. Show strong monotonicity $\implies$ ICs must be downward sloping.
**Brief:** The indifference set $IND(x) = \{y \in X: y \sim x\}$ contains all bundles equally preferred to $x$. Strong monotonicity (more of any good strictly raises utility) implies downward-sloping indifference curves: an upward-sloping IC would put a bundle northeast of $x$ on the same IC, violating strict preference for more.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-02)

### Question 3
**Q:** What are the twin definitions of convexity? How differ from strong convexity? Examine graphically.
**Brief:** Convex preferences (averages are at least as good as extremes) are equivalent to convex upper contour sets. Strong convexity strengthens this to strict preference for averages, ruling out linear IC segments (perfect substitutes) and ensuring unique Walrasian demand.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-03)

### Question 4
**Q:** Show: Convexity of preference $\iff$ UCS(x) convex $\iff$ u(.) quasiconcave.
**Brief:** Convex preferences are equivalent to convex upper contour sets by definition. The substantive proof shows convex UCS $\iff$ quasiconcave utility using the $\min\{u(x),u(y)\}$ trick: bundles in UCS($z$) have utility $\ge u(z)$, and quasiconcavity preserves this property under convex combination.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-04)

### Question 5
**Q:** Prove: If preference satisfies monotonicity and continuity, there exists a utility function u(.) representing it.
**Brief:** Debreu's theorem: monotonicity orders all bundles relative to the 45° diagonal, and continuity ensures each indifference curve has a unique intersection with it. Setting $u(x) = t$ where $(t,\ldots,t) \sim x$ gives a continuous utility representation. Lexicographic preferences fail because they violate continuity.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-05)

### Question 6
**Q:** Define utility function. Explain desirability by monotonicity and strong monotonicity.
**Brief:** A utility function $u:X\to\mathbb{R}$ represents $\succeq$ if $x\succeq y \iff u(x)\ge u(y)$; only ordinal ranking matters. Monotonicity requires more of all goods to be strictly better; strong monotonicity requires more of even one good (others unchanged) to be strictly better — the Leontief $u=\min\{x_1,x_2\}$ satisfies the former but not the latter.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-06)

### Question 7
**Q:** Show: Strong Monotonicity $\implies$ Monotonicity $\implies$ LNS.
**Brief:** SM $\Rightarrow$ M: if more of any good strictly raises utility, then more of all goods certainly does too. M $\Rightarrow$ LNS: increase every good by $\delta = \varepsilon/\sqrt{N}$ to get a strictly preferred bundle within any $\varepsilon$-ball. The converse chain fails — Leontief satisfies M but not SM, and satiation-point preferences can satisfy LNS without monotonicity.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-07)

### Question 8
**Q:** Examine: (i) Homogeneity (ii) Homotheticity.
**Brief:** A utility function is HD($k$) if scaling all goods by $a$ scales utility by $a^k$; MRS is then constant along rays. Homothetic utility is a monotonic transformation of a homogeneous function — MRS depends only on the good ratio, not on scale. All homogeneous functions are homothetic but not vice versa: $u = xy + a$ is homothetic (transform of HD(2) $xy$) but not homogeneous.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-08)

### Question 9
**Q:** Prove quasi-concave utility U(X,Y) is identical to dMRS/dX < 0.
**Brief:** Differentiating $MRS = u_x/u_y$ along an indifference curve and substituting $y'(x) = -u_x/u_y$ yields $dMRS/dx = (u_x^2 u_{yy} - 2u_x u_y u_{xy} + u_y^2 u_{xx})/u_y^3$. The numerator is the negative of the bordered Hessian determinant, so $dMRS/dx < 0 \iff$ strict quasiconcavity $\iff$ convex preferences.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-09)

### Question 10
**Q:** Does U = X + log(Y) have convex indifference curves? Provide proof.
**Brief:** Yes. $u = x + \ln y$ gives $MRS = y$, and along an IC $dy/dx = -y$, so $dMRS/dx = -y < 0$ for any $y > 0$, confirming diminishing MRS and convex ICs. The bordered Hessian $1/y^2 > 0$ verifies strict quasiconcavity.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-10)

### 1B — Utility Maximization & Demand

| # | Question | Priority | Marks | Source | Year |
|---|----------|----------|-------|--------|------|
| 1 | Cobb-Douglas: Derive Walrasian demand, examine properties. | [S](./EXAM-PRIORITY-MATRIX.md) | 7 | MainQ Tut1 Q3i, Batch 47 Q3i | —, 2022 |
| 2 | Cobb-Douglas: Get indirect utility, explain properties, verify Roy's identity. | [S](./EXAM-PRIORITY-MATRIX.md) | 7 | MainQ Tut1 Q3ii, Batch 47 Q3ii | —, 2022 |
| 3 | Cobb-Douglas: Solve expenditure minimization, examine compensated demand properties. | [S](./EXAM-PRIORITY-MATRIX.md) | 6 | MainQ Tut1 Q3iii, Batch 47 Q3iii | —, 2022 |
| 4 | Consider utility maximization problem — examine properties of Walrasian demand x(p,w). When can sufficient condition of UMP be violated? | [S](./EXAM-PRIORITY-MATRIX.md) | 10 | MainQ Tut2 Q4a | — |
| 5 | Examine: i) Homogeneity ii) Homotheticity. | [S](./EXAM-PRIORITY-MATRIX.md) | 10 | MainQ Tut2 Q4b | — |
| 6 | Negroni cocktail: U(G,V,C) = min(G,V,C). Find Marshallian demand for Gin, Hicksian demand for Campari, expenditure function. | [B](./EXAM-PRIORITY-MATRIX.md) | ~11 | Batch 48 Q1b | 2023 |
| 7 | U = X + ln(Y). Find demands for X and Y. With limited I, which goods do you buy? Why? | [B](./EXAM-PRIORITY-MATRIX.md) | 3 | Batch 48 Q1c | 2023 |
| 8 | Agent has U(X,Y) = X - 3Y. P_X=20, P_Y=40, I=400. Choose quantities maximizing utility. | [B](./EXAM-PRIORITY-MATRIX.md) | 3 | Batch 48 Q2c | 2023 |

### Question 1
**Q:** Cobb-Douglas: Derive Walrasian demand, examine properties.
**Brief:** For $U = x_1^\alpha x_2^\beta$, the Lagrangian yields tangency $\alpha x_2/\beta x_1 = p_1/p_2$, giving Walrasian demands $x_1 = \frac{\alpha}{\alpha+\beta}\frac{w}{p_1}$ and $x_2 = \frac{\beta}{\alpha+\beta}\frac{w}{p_2}$. Key properties: HD(0), Walras' Law, zero cross-price effects, constant expenditure shares $\alpha/(\alpha+\beta)$ independent of prices and income — the most testable result.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-1b-01)

### Question 2
**Q:** Cobb-Douglas: Get indirect utility, explain properties, verify Roy's identity.
**Brief:** Substituting Walrasian demands into $u$ gives $v(p,w) = \frac{\alpha^\alpha \beta^\beta}{(\alpha+\beta)^{\alpha+\beta}} w^{\alpha+\beta} p_1^{-\alpha} p_2^{-\beta}$, which is HD(0), monotonic ($\partial v/\partial w > 0$, $\partial v/\partial p_k < 0$), and quasiconvex. Roy's identity $x_k = -(\partial v/\partial p_k)/(\partial v/\partial w)$ recovers Walrasian demand from $v$ without re-solving the UMP.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-1b-02)

### Question 3
**Q:** Cobb-Douglas: Solve expenditure minimization, examine compensated demand properties.
**Brief:** Minimizing $p_1 x_1 + p_2 x_2$ s.t. $x_1^\alpha x_2^\beta \ge \bar{u}$ yields the same tangency ratio as the UMP. Hicksian demands are $h_1 = \bar{u}^{1/(\alpha+\beta)} (\alpha/\beta)^{\beta/(\alpha+\beta)} (p_2/p_1)^{\beta/(\alpha+\beta)}$ and the expenditure function $e(p,\bar{u})$ is HD(1) in $p$, concave in $p$, with Shephard's lemma $\partial e/\partial p_1 = h_1$. Duality: $e(p,v(p,w)) = w$ and $v(p,e(p,\bar{u})) = \bar{u}$.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-1b-03)

### Question 4
**Q:** Examine properties of Walrasian demand x(p,w). When can UMP sufficient condition be violated?
**Brief:** Walrasian demand $x(p,w)$ satisfies: HD(0) (budget-set property), Walras' Law ($p\cdot x = w$ under LNS), convex-valued if preferences are convex, and continuous if $u$ is continuous and strictly quasiconcave. Sufficient conditions for UMP fail when utility is non-monotone (corner solution), non-quasiconcave (tangency yields a minimum), or $\nabla u = 0$ (bliss point). Giffen behaviour is NOT a violation — it satisfies all conditions.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-1b-04)

### Question 5
**Q:** Examine: (i) Homogeneity (ii) Homotheticity.
**Brief:** Walrasian demand is HD(0) in $(p,w)$ — scaling all prices and income leaves the budget set unchanged (no preference assumptions needed). Homothetic preferences mean indifference sets are radial expansions: MRS depends only on the good ratio, Engel curves are linear through the origin, and $x(p,w) = w \cdot x(p,1)$. All homogeneous utility implies homotheticity, but not vice versa ($u = xy + a$ is homothetic but not homogeneous).
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-1b-05)

### Question 6
**Q:** Negroni cocktail: U = min(G,V,C). Find Marshallian demand for Gin, Hicksian demand for Campari, expenditure function.
**Brief:** Leontief $u = \min(G,V,C)$ implies all goods are consumed in fixed 1:1:1 proportions. Marshallian demands: $G = V = C = w/(p_G + p_V + p_C)$. Hicksian demand for Campari: $h_C = \bar{u}$ (constant, zero substitution). Expenditure function: $e(p,\bar{u}) = \bar{u}(p_G + p_V + p_C)$, which is HD(1) in $p$, linear, and satisfies Shephard's lemma.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-1b-06)

### Question 7
**Q:** U = X + ln(Y). Find demands for X and Y. With limited I, which goods do you buy? Why?
**Brief:** Quasilinear $u = x + \ln y$ gives $MRS = y$, so $y^* = p_x/p_y$ (independent of income) and $x^* = I/p_x - 1$ (interior if $I \ge p_x$). If $I < p_x$, the consumer buys only $y$ ($x=0$). Good $y$ has zero income effect (satiation at $y^*$), while $x$ absorbs all additional income.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-1b-07)

### Question 8
**Q:** U(X,Y) = X - 3Y. P_X=20, P_Y=40, I=400. Choose quantities maximizing utility.
**Brief:** $MU_y = -3 < 0$ means $y$ is a bad — corner solution: consume zero $y$, spend all income on $x$: $x^* = 400/20 = 20$, $u(20,0)=20$. Lagrangian FOCs fail here because $MRS \neq p_x/p_y$ and tangency would identify a minimum, not a maximum. Always check MU signs before solving.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-1b-08)

---

## 2. Demand Estimation & Elasticities

| # | Question | Priority | Marks | Source | Year |
|---|----------|----------|-------|--------|------|
| 1 | Demand: X = $\alpha$P_X^γ P_Z^δ P_W^$\varepsilon$ I^η. Find cross-price elasticity with Z, income elasticity. Given $\alpha$=-0.5, γ=-0.4, δ=0.8: Is X luxury/necessity/inferior? Is Z substitute/complement? If P_W↓5%, ΔQ_d? If P_X↓, does expenditure↑↓? | [B](./EXAM-PRIORITY-MATRIX.md) | ~11 | Batch 48 Q2b | 2023 |
| 2 | Burger King demand for Whopper: Q = 10 + 1.3P_B + 0.4P_M - 3P_F + 2.2I. What's the terrible problem? | [B](./EXAM-PRIORITY-MATRIX.md) | 2 | Batch 48 Q3a | 2023 |
| 3 | Corrected demand: Q = 150P_B^{-1.5}P_{r1}^{0.75}P_{r2}^{-0.25}I^{0.8}A^{0.05}. Which good is French fries? Luxury? Advertising↑50%$\to$ΔQ? French fry price↓50%$\to$ΔQ? MC=$1, profit-max P? McDonald's↓10%, what % must BK lower price? | [A](./EXAM-PRIORITY-MATRIX.md) | 12 | Batch 48 Q3b | 2023 |

### Question 1
**Q:** Demand: X = $\alpha$P_X^γ P_Z^δ P_W^$\varepsilon$ I^η. Find cross-price elasticity with Z, income elasticity. Given $\alpha$=-0.5, γ=-0.4, δ=0.8: classify X, Z, and predict changes.
**Brief:** In a log-linear demand function, each exponent IS the elasticity: cross-price elasticity with $Z = \delta$ (positive ⇒ Z is a gross substitute), income elasticity $= \eta$. Given $\gamma = -0.4$ (inelastic, $|\gamma| < 1$), a price decrease reduces total expenditure. Do NOT confuse $\alpha$ (scaling constant) with income elasticity $\eta$.
→ [Full answer in Demand & Production](./answers-demand-production.md#q-demand-01)

### Question 2
**Q:** Burger King demand: Q = 10 + 1.3P_B + 0.4P_M - 3P_F + 2.2I. What's the terrible problem?
**Brief:** The own-price coefficient is positive (+1.3), implying an upward-sloping demand curve that violates the Law of Demand. Likely causes: omitted variable bias or simultaneous equations bias. Other coefficients have plausible signs ($P_M$ substitute, $P_F$ complement, $I$ normal good), making the $P_B$ sign the unmistakable red flag.
→ [Full answer in Demand & Production](./answers-demand-production.md#q-demand-02)

### Question 3
**Q:** Corrected demand: Q = 150P_B^{-1.5}P_{r1}^{0.75}P_{r2}^{-0.25}I^{0.8}A^{0.05}. Classify goods, compute effects, find profit-max P.
**Brief:** $r2$ (cross-price elasticity $-0.25$) is French fries (complement); $r1$ ($+0.75$) is a substitute. Whopper is a necessity ($\eta=0.8$). Profit-max price via Lerner Index: $P^* = \$3$ (given $MC=1$, $\varepsilon=-1.5$). If McDonald's cuts prices 10%, BK must cut 5% to neutralize the demand loss.
→ [Full answer in Demand & Production](./answers-demand-production.md#q-demand-03)

---

## 3. Production & Supply

### 3A — Production Sets & Functions

| # | Question | Priority | Marks | Source | Year |
|---|----------|----------|-------|--------|------|
| 1 | Define production function, production set, transformation function, transformation frontier. | [B](./EXAM-PRIORITY-MATRIX.md) | 10 | MainQ Tut2 Q2a | — |
| 2 | Graphically explain the properties of the production set. | [S](./EXAM-PRIORITY-MATRIX.md) | 10 | MainQ Tut2 Q2b | — |
| 3 | Define production sets. Graphically explain properties. | [S](./EXAM-PRIORITY-MATRIX.md) | 5 | Batch 47 Q5a | 2022 |
| 4 | What is elasticity of substitution (EoS)? Find EoS for q = aK + bL. EoS for fixed proportions? | [A](./EXAM-PRIORITY-MATRIX.md) | 6 | Batch 47 Q5b | 2022 |
| 5 | Four properties of cost functions — match to intuitive explanations. | [B](./EXAM-PRIORITY-MATRIX.md) | 6 | Batch 48 Q4a | 2023 |
| 6 | Sausage maker: 3 oz pork + 2 oz veal = 5 oz sausage. Write production function, conditional factor demand for pork, cost function. If Q = 200P^{-6}, find profit-max P. | [B](./EXAM-PRIORITY-MATRIX.md) | ~8 | Batch 48 Q4b | 2023 |
| 7 | Q = (KL)^{1/3}. Short-run K=64. Find SR production function, conditional factor demand for L, SR cost function, shutdown price, SR supply, returns to scale, elasticity of substitution, LR conditional factor demands, LR cost function, LR supply. | [A](./EXAM-PRIORITY-MATRIX.md) | ~12 | Batch 48 Q5a | 2023 |
| 8 | Starbucks Jumbo (62 oz) vs Trenta (31 oz). Will Jumbo cost twice as much, more, or less? Explain. | [B](./EXAM-PRIORITY-MATRIX.md) | 2 | Batch 48 Q5b | 2023 |

### Question 1
**Q:** Define production function, production set, transformation function, transformation frontier.
**Brief:** A production function $q = f(z)$ gives maximum output from inputs. The production set $Y = \{y \in \mathbb{R}^L: F(y) \leq 0\}$ contains all feasible net-output vectors, with $F(y)$ as the transformation function and $F(y)=0$ as the transformation frontier (technical efficiency). The MRPT measures the output trade-off along the frontier, dual to the cost ratio $MC_k/MC_l$.
→ [Full answer in Demand & Production](./answers-demand-production.md#q-prodset-01)

### Question 2 & 3
**Q:** Graphically explain properties of the production set.
**Brief:** The production set $Y$ has five property groups: (i) basic feasibility (non-empty, closed, inaction), (ii) physical constraints (no free lunch, irreversibility), (iii) free disposal (downward-closed), (iv) scalability (RTS variants), (v) aggregation (additivity, convexity). Fixed costs create a non-convex "hole" near the origin. Convex production set implies DRS; convex isoquants imply diminishing MRTS — do not conflate.
→ [Full answer in Demand & Production](./answers-demand-production.md#q-prodset-02)

### Question 4
**Q:** What is elasticity of substitution (EoS)? Find EoS for q = aK + bL and for fixed proportions.
**Brief:** $\sigma = \frac{\% \Delta (K/L)}{\% \Delta MRTS}$ measures substitution ease along an isoquant. For linear $q = aK + bL$, $MRTS$ is constant so $\sigma = \infty$ (perfect substitutes). For Leontief $q = \min\{aK,bL\}$, $K/L$ is fixed so $\sigma = 0$ (no substitution). Benchmark: Linear = $\infty$, Cobb-Douglas = $1$, Leontief = $0$; CES generalises as $\sigma = 1/(1-\rho)$.
→ [Full answer in Demand & Production](./answers-demand-production.md#q-prodset-03)

### Question 5
**Q:** Four properties of cost functions — match to intuitive explanations.
**Brief:** Cost functions satisfy: (1) HD(1) in input prices $w$, (2) non-decreasing in output $q$, (3) concave in $w$ (substitution mitigates cost increases), and (4) Shephard's Lemma ($\partial c/\partial w_k = z_k$). Concavity in $w$ is the most tested property — it implies conditional factor demands slope downward and contrasts with profit function convexity in output prices.
→ [Full answer in Demand & Production](./answers-demand-production.md#q-prodset-04)

### Question 6
**Q:** Sausage maker: 3 oz pork + 2 oz veal = 5 oz sausage. Write production function, conditional factor demand for pork, cost function. If Q = 200P^{-6}, find profit-max P.
**Brief:** Leontief technology $Q = \min\{P/3, V/2\}$ with fixed proportions. Conditional factor demand: $P(Q) = 3Q$, $V(Q) = 2Q$. Cost function: $c(Q) = 5Q$ (constant MC = 5 when input prices = 1). Profit-max price via direct $\pi(P)$ maximisation: $P^* = 6$.
→ [Full answer in Demand & Production](./answers-demand-production.md#q-prodset-05)

### Question 7
**Q:** Q = (KL)^{1/3}, SR K=64. Find SR and LR functions.
**Brief:** SR ($K=64$): $Q = 4L^{1/3}$, $SRTC = wQ^3/64 + 64r$, $\min AVC = 0$ so produce for any $P>0$. DRS ($t^{2/3}$), $\sigma = 1$ (Cobb-Douglas). LR conditional factor demands: $L = (r/w)^{1/2} Q^{3/2}$, $K = (w/r)^{1/2} Q^{3/2}$. LRTC: $2\sqrt{wr}\,Q^{3/2}$, LR supply $Q^S = P^2/(9wr)$ slopes upward under DRS.
→ [Full answer in Demand & Production](./answers-demand-production.md#q-prodset-06)

### Question 8
**Q:** Starbucks Jumbo (62 oz) vs Trenta (31 oz). Will Jumbo cost twice as much, more, or less? Explain.
**Brief:** Less than twice as much due to economies of scale. The second 31 oz uses the same labour and overhead, with only slightly more ingredients — $MC < AC$, so average cost declines with output. Bulk sizes cost proportionally less per unit because fixed costs are spread over more output.
→ [Full answer in Demand & Production](./answers-demand-production.md#q-prodset-07)

### 3B — Profit Function

| # | Question | Priority | Marks | Source | Year |
|---|----------|----------|-------|--------|------|
| 1 | Define profit function. If production set Y is closed and has free disposal, what properties does the profit function satisfy? | [S](./EXAM-PRIORITY-MATRIX.md) | 10/3 | MainQ Tut2 Q3a, Batch 47 Q5c | —, 2022 |
| 2 | Show that MRPT_x,y = MC_x / MC_y. | [B](./EXAM-PRIORITY-MATRIX.md) | — | Professor Q17 | — |

### 3C — Competitive Industry

| # | Question | Priority | Marks | Source | Year |
|---|----------|----------|-------|--------|------|
| 1 | 1,000 identical firms: C_SR(q) = 0.5q²+2q+80. Find SR supply per firm, industry SR supply. Market Q=44,000-1,000P. Find equilibrium P, Q, each firm's profit. $20/unit tax: new P, quantity. Welfare cost of tax. | [S](./EXAM-PRIORITY-MATRIX.md) | ~14 | Batch 48 Q6a | 2023 |
| 2 | Three-good world: excess demand Z₂(p) = -3 + p₃/p₂ + p₁/p₂, Z₃(p) = 3p₁/p₃ + 4p₂/p₃ - 7. Find Z₁. Find market-clearing p₂/p₁, p₃/p₁. | [B](./EXAM-PRIORITY-MATRIX.md) | ~4 | Batch 48 Q6b | 2023 |

---

## 4. Welfare Economics (CV, EV, CS)

| # | Question | Priority | Marks | Source | Year |
|---|----------|----------|-------|--------|------|
| 1 | Distinguish CV and EV. How are they different from CS? | [S](./EXAM-PRIORITY-MATRIX.md) | 10/4 | MainQ Tut2 Q1a, Batch 47 Q6a | —, 2022 |
| 2 | For a price decrease (both goods normal): EV > CS > CV. For price increase, explain relationship. | [S](./EXAM-PRIORITY-MATRIX.md) | 10/5 | MainQ Tut2 Q1b, Batch 47 Q6b | —, 2022 |
| 3 | Cobb-Douglas u = x₁^½ x₂^½. Given {p⁰,m⁰}={{4,4},300}, {p¹,m¹}={{2,4},300}. Compute EV, CV, CS. Examine relationship $\to$ nature of commodities. | [S](./EXAM-PRIORITY-MATRIX.md) | 10/5 | MainQ Tut2 Q3b, Batch 47 Q6c | —, 2022 |
| 4 | EV > CS > CV diagram (price decrease) and EV < CS < CV (price increase) — graphical analysis. | [A](./EXAM-PRIORITY-MATRIX.md) | — | Practice Mid | — |
| 5 | Show: Marshallian consumer surplus overstates CV and understates EV for normal goods. | [B](./EXAM-PRIORITY-MATRIX.md) | — | WelfareChange paper §4 | — |

### Question 1
**Q:** Distinguish CV and EV. How are they different from CS?
**Brief:** CV measures the compensation needed after a price change to maintain the original utility level ($u^0$), while EV measures the compensation before the change to reach the new utility level ($u^1$). CS is the area under the Marshallian demand curve between old and new prices — it is empirically observable but theoretically less precise than CV and EV, which are based on Hicksian demand.
→ [Full answer in Welfare](./answers-welfare.md#q-welfare-01)

### Question 2
**Q:** For price decrease (normal goods): EV > CS > CV. For price increase, explain.
**Brief:** For a price decrease with normal goods, EV (anchored to higher utility $u^1$) is largest, CS is intermediate, and CV (anchored to $u^0$) is smallest — hence $EV > CS > CV$. The ordering reverses for a price increase: $CV > CS > EV$, because CV now references the better original state. The gap between EV and CV measures the income effect.
→ [Full answer in Welfare](./answers-welfare.md#q-welfare-02)

### Question 3
**Q:** Cobb-Douglas u = x₁^½ x₂^½. p⁰=(4,4), p¹=(2,4), m=300. Compute EV, CV, CS. Interpret.
**Brief:** For $u = x_1^{1/2} x_2^{1/2}$ with $p^0=(4,4), p^1=(2,4), m=300$: $EV = 124.24$, $CS = 103.98$, $CV = 87.9$. The ordering $EV > CS > CV$ confirms both goods are normal. The gap $EV - CV = 36.34$ measures the income effect of the price fall.
→ [Full answer in Welfare](./answers-welfare.md#q-welfare-03)

### Question 4
**Q:** EV > CS > CV diagram (price decrease) and EV < CS < CV (price increase) — graphical analysis.
**Brief:** For a price decrease with normal goods, the Hicksian demand at the higher utility $u^1$ lies furthest right, then Marshallian, then Hicksian at $u^0$ — making EV the largest welfare area and CV the smallest. This reverses for a price increase. The Marshallian demand always lies between the two Hicksians for normal goods.
→ [Full answer in Welfare](./answers-welfare.md#q-welfare-04)

### Question 5
**Q:** Show: Marshallian CS overstates CV and understates EV for normal goods.
**Brief:** For a price decrease with normal goods, the Marshallian demand includes both substitution and income effects, making it flatter than the Hicksian at $u^0$ — so CS exceeds CV. However, EV references the higher utility $u^1$, where the Hicksian has shifted right, making EV larger than CS. Hence $EV > CS > CV$ for a price decrease and $CV > CS > EV$ for a price increase.
→ [Full answer in Welfare](./answers-welfare.md#q-welfare-05)

---

## 5. Social Welfare & Pareto Optimality

### 5A — Social Welfare Criteria

| # | Question | Priority | Marks | Source | Year |
|---|----------|----------|-------|--------|------|
| 1 | Define social welfare. Critically examine three key issues Pigou dealt with in analyzing social welfare. | [S](./EXAM-PRIORITY-MATRIX.md) | 10 | MainQ GE Q3a, Professor Q5 | — |
| 2 | Derive the grand utility possibility frontier and determine the 'point of bliss'. Does this ensure maximum social welfare? Justify. | [S](./EXAM-PRIORITY-MATRIX.md) | 10/6 | MainQ GE Q3b, Batch 48 Q8b | —, 2023 |
| 3 | Define social welfare. Critically explain criteria: i) Growth of GNP ii) Bentham's Criteria iii) Cardinalist approach. | [B](./EXAM-PRIORITY-MATRIX.md) | — | Professor Q1 | — |
| 4 | Define social welfare function. Derive grand utility possibility frontier, determine point of bliss. | [S](./EXAM-PRIORITY-MATRIX.md) | — | Professor Q4, 49Qs Q4 | — |
| 5 | Critically explain the three key things Pigou dealt with in analyzing social welfare. | [C](./EXAM-PRIORITY-MATRIX.md) | — | Professor Q5, 49Qs Q5 | — |
| 6 | Define social welfare function. How could it be used as a criterion to measure social welfare? Explain. | [C](./EXAM-PRIORITY-MATRIX.md) | — | Professor (Given) Q4 | — |
| 7 | What are the major assumptions of social welfare maximization in a 2×2×2 model? | [B](./EXAM-PRIORITY-MATRIX.md) | — | Professor (Given) Q5 | — |

### 5B — Pareto Optimality & Welfare Theorems

| # | Question | Priority | Marks | Source | Year |
|---|----------|----------|-------|--------|------|
| 1 | "Pareto optimality is necessary but not sufficient for social welfare maximization" — justify with 2×2×2 model. | [S](./EXAM-PRIORITY-MATRIX.md) | 10/7 | MainQ GE Q4a, Batch 46 A1a, Professor Q2 | —, 2020 |
| 2 | Explain assumptions about marginal utility of money for Hicks-Kaldor compensation to be correct. Can compensation be correct? | [S](./EXAM-PRIORITY-MATRIX.md) | 10/7 | MainQ GE Q4b, Batch 46 A1b, Professor Q3 | —, 2020 |
| 3 | In a 2-person 2-good case (fixed supply), show with equations how Pareto optimality for consumption is achieved. | [A](./EXAM-PRIORITY-MATRIX.md) | 7 | Batch 46 A2a | 2020 |
| 4 | Firm 1 external economies, firm 2 external diseconomies. p₁=p₂=15. Cost functions given. Show Pareto optimality through taxes/subsidies. Find social dividend. | [A](./EXAM-PRIORITY-MATRIX.md) | 7 | Batch 46 A2b | 2020 |
| 5 | State and explain First and Second Welfare Theorems with implications. | [S](./EXAM-PRIORITY-MATRIX.md) | 8 | Batch 46 A3a | 2020 |
| 6 | What is social welfare function? Explain Utilitarian vs Rawlsian welfare functions. | [B](./EXAM-PRIORITY-MATRIX.md) | 6 | Batch 46 A3b | 2020 |
| 7 | Explain the Hicks-Kaldor compensation principle. How did Scitovsky correct the contradiction? | [B](./EXAM-PRIORITY-MATRIX.md) | 8 | Batch 48 Q8a | 2023 |
| 8 | Does perfect competition ensure welfare maximization? Examine. | [S](./EXAM-PRIORITY-MATRIX.md) | — | Professor (Given) Q8 | — |

### Question 1
**Q:** "Pareto optimality necessary but not sufficient for SW maximization" — justify with 2×2×2 model.
**Brief:** All Pareto-optimal allocations lie on the GUPF, but only the tangency point between the GUPF and the highest social indifference contour maximizes social welfare. The SWF selects which Pareto-optimal point is best based on distributional value judgements — Pareto optimality alone cannot rank between points on the GUPF.
→ [Full answer in Welfare](./answers-welfare.md#q-pareto-01)

### Question 2
**Q:** Explain assumptions about marginal utility of money for Hicks-Kaldor compensation to be correct. Can compensation be correct?
**Brief:** The Hicks-Kaldor criterion requires constant marginal utility of money across individuals and no income effects on valuations. Compensation can be correct only if the marginal utility of money is equal across individuals — otherwise a rich person's gain may represent less utility than a poor person's loss, yet the criterion passes. The assumption of constant MU of money is empirically unrealistic, and the criterion also suffers from the Scitovsky paradox and Robbins' critique of interpersonal comparisons.
→ [Full answer in Welfare](./answers-welfare.md#q-pareto-02)

### Question 3
**Q:** 2-person 2-good fixed supply: show Pareto optimality for consumption with equations.
**Brief:** Set up the Lagrangian $\mathcal{L} = U_A(X_A,Y_A) + \lambda[U_B(\bar{X}-X_A, \bar{Y}-Y_A) - \bar{U}_B]$. The first-order conditions yield $MRS^A_{xy} = MRS^B_{xy}$ — the condition for Pareto-efficient consumption. The locus of such points in the Edgeworth box is the contract curve, which contains infinitely many Pareto-optimal allocations differing only in distribution.
→ [Full answer in Welfare](./answers-welfare.md#q-pareto-03)

### Question 4
**Q:** Firm 1 external economies, firm 2 diseconomies. p₁=p₂=15. Show Pareto optimality through taxes/subsidies. Find social dividend.
**Brief:** Firm 1 imposes an external diseconomy on Firm 2 ($C_2$ rises with $q_1$), while Firm 2 provides an external economy to Firm 1 ($C_1$ falls with $q_2$). Private optimum: $q_1=50, q_2=20$, total profit = 307.5. Social optimum (joint profit max): $q_1^*=40, q_2^*=40$, total profit = 360. A Pigouvian tax of 2/unit on Firm 1 and subsidy of 8/unit to Firm 2 align private with social incentives. The social dividend (net gain) = $360 - 307.5 = 52.5$.
→ [Full answer in Welfare](./answers-welfare.md#q-pareto-04)

### Question 5
**Q:** State and explain First and Second Welfare Theorems with implications.
**Brief:** The First Welfare Theorem states that every competitive equilibrium is Pareto-optimal (CE → PO), requiring local non-satiation. The Second Welfare Theorem states that any Pareto-optimal allocation can be realized as a competitive equilibrium with appropriate lump-sum transfers (PO → CE with transfers), requiring convexity. The First Theorem supports free markets; the Second justifies redistribution without sacrificing efficiency by separating equity from efficiency.
→ [Full answer in Welfare](./answers-welfare.md#q-pareto-05)

### Question 6
**Q:** What is social welfare function? Explain Utilitarian vs Rawlsian welfare functions.
**Brief:** A SWF $W = F(U_1,\ldots,U_n)$ maps individual utilities to aggregate welfare. The Utilitarian SWF ($W = \sum U_i$) has linear social indifference curves (slope -1) — only total utility matters, distribution is irrelevant. The Rawlsian SWF ($W = \min\{U_1,\ldots,U_n\}$) has L-shaped indifference curves — only the worst-off person's utility matters, with lexicographic priority to the least advantaged.
→ [Full answer in Welfare](./answers-welfare.md#q-pareto-06)

### Question 7
**Q:** Explain Hicks-Kaldor compensation principle. How did Scitovsky correct the contradiction?
**Brief:** The Hicks-Kaldor principle states a change increases social welfare if gainers could potentially compensate losers and still be better off (WTP > WTA). The Scitovsky paradox shows that when UPFs intersect, Kaldor-Hicks can give contradictory rankings ($A > B$ and $B > A$). Scitovsky's double test resolves this by requiring both the forward test (gainers can compensate losers) AND the reversal test (losers cannot bribe gainers to reject the change).
→ [Full answer in Welfare](./answers-welfare.md#q-pareto-07)

### Question 8
**Q:** Does perfect competition ensure welfare maximization? Examine.
**Brief:** Perfect competition ensures Pareto efficiency via the First Welfare Theorem (all three marginal conditions hold automatically), but does NOT guarantee social welfare maximization. The competitive equilibrium depends on initial endowments, Pareto-optimal allocations may involve extreme inequality, and market failures prevent even Pareto optimality. The Second Welfare Theorem suggests efficiency and equity can be separated via lump-sum transfers, but these are practically infeasible.
→ [Full answer in Welfare](./answers-welfare.md#q-pareto-08)

---

## 6. General Equilibrium

### 6A — Existence, Uniqueness, Stability

| # | Question | Priority | Marks | Source | Year |
|---|----------|----------|-------|--------|------|
| 1 | Define general equilibrium. How does it differ from partial equilibrium? Examine with examples. | [S](./EXAM-PRIORITY-MATRIX.md) | 8/— | MainQ GE Q1a, Professor Q9 | — |
| 2 | Graphically explain problems of existence, uniqueness, and stability in GE. | [A](./EXAM-PRIORITY-MATRIX.md) | 12 | MainQ GE Q1b | — |
| 3 | Explain existence, uniqueness, stability of GE. Show: i) Existence at positive price ii) Stability from demand/supply slopes iii) Uniqueness from excess demand slope. | [S](./EXAM-PRIORITY-MATRIX.md) | 7 | Batch 47 Q7a | 2022 |
| 4 | Graphically explain: external shock in product market $\to$ factor market $\to$ equilibrium restored in both markets. | [S](./EXAM-PRIORITY-MATRIX.md) | 7/— | Batch 47 Q7b, Professor Q12 | 2022 |

### 6B — Edgeworth Box & 2×2×2 Model

| # | Question | Priority | Marks | Source | Year |
|---|----------|----------|-------|--------|------|
| 1 | Explain with assumptions of 2×2×2 model, production equilibrium in simple GE through Edgeworth box. | [A](./EXAM-PRIORITY-MATRIX.md) | 10 | MainQ GE Q2a | — |
| 2 | Graphically explain: external shock in product market affects factor market $\to$ equilibrium restored in both markets. | [C](./EXAM-PRIORITY-MATRIX.md) | 10 | MainQ GE Q2b | — |
| 3 | Explain production/consumption/simultaneous equilibrium in simple GE through Edgeworth box. | [S](./EXAM-PRIORITY-MATRIX.md) | — | 49Qs Q8, Professor Q13 | — |
| 4 | Define general equilibrium. How differs from partial equilibrium? Examine with example. | [C](./EXAM-PRIORITY-MATRIX.md) | — | 49Qs Q9, Professor Q14 | — |
| 5 | What are assumptions of 2×2×2 model? How is GE reached in such model? | [S](./EXAM-PRIORITY-MATRIX.md) | — | 49Qs Q10, Professor Q16 | — |
| 6 | Exchange economy: A: U_A = X_A Y_A, B: U_B = X_B + Y_B. Endowments given. Draw Edgeworth box, check Pareto efficiency, find contract curve, check if allocation is Pareto efficient / in core. | [S](./EXAM-PRIORITY-MATRIX.md) | 14 | Batch 47 Q8 | 2022 |
| 7 | Present a 2×2×2 Walrasian system. Does GE solution exist in such model? Explain. | [A](./EXAM-PRIORITY-MATRIX.md) | — | Professor Q15 | — |
| 8 | Three-good world: excess demand functions given. Find Z₁ via Walras' law. Solve price ratios. | [A](./EXAM-PRIORITY-MATRIX.md) | ~4 | Batch 48 Q6b | 2023 |

### Question 1
**Q:** Explain 2×2×2 model assumptions and production equilibrium via Edgeworth box.
**Brief:** The $2\times 2\times 2$ model has 2 factors (L, K), 2 goods (X, Y), and 2 consumers (A, B) under perfect competition with fixed factor supplies and CRTS. Production equilibrium in the Edgeworth box requires $\text{MRTS}^X_{LK} = \text{MRTS}^Y_{LK} = w/r$, placing firms on the contract curve — the locus of Pareto-efficient factor allocations.
→ [Full answer in GE, Game, Extern & Trade](./answers-ge-game-extern-trade.md#q-edge-01)

### Question 2
**Q:** Graphically explain: external shock $\to$ factor market $\to$ equilibrium restored in both markets.
**Brief:** A taste shock toward X raises $P_X$, expanding X output, while $P_Y$ falls and Y contracts. Factor migration from Y to X restores factor price equalization, with Stolper-Samuelson effects determining net factor price changes. Long-run entry/exit returns both industries to normal profits, establishing a new general equilibrium.
→ [Full answer in GE, Game, Extern & Trade](./answers-ge-game-extern-trade.md#q-edge-02)

### Question 3
**Q:** Explain production/consumption/simultaneous equilibrium in GE through Edgeworth box.
**Brief:** The three Pareto conditions are: (a) production equilibrium — $\text{MRTS}^X_{LK} = \text{MRTS}^Y_{LK}$ (efficient factor allocation on the production contract curve); (b) consumption equilibrium — $\text{MRS}^A_{xy} = \text{MRS}^B_{xy}$ (efficient distribution on the consumption contract curve); (c) simultaneous equilibrium — $\text{MRPT}_{xy} = \text{MRS}_{xy}$ (output mix matches consumer preferences). All three are necessary and sufficient for Pareto optimality.
→ [Full answer in GE, Game, Extern & Trade](./answers-ge-game-extern-trade.md#q-edge-03)

### Question 4
**Q:** Define general equilibrium. How differs from partial equilibrium? Example.
**Brief:** General equilibrium is a state where all markets clear simultaneously with all agents optimizing, determining a vector of relative prices. Partial equilibrium studies one market in isolation (ceteris paribus), while GE captures full cross-market interdependence — income effects, cross-price effects, and factor reallocation that PE misses. For example, a coffee crop failure under PE only raises coffee prices, but under GE it also affects tea prices, factor markets, and incomes through feedback loops.
→ [Full answer in GE, Game, Extern & Trade](./answers-ge-game-extern-trade.md#q-edge-04)

### Question 5
**Q:** What are assumptions of 2×2×2 model? How is GE reached?
**Brief:** The $2\times 2\times 2$ model assumes 2 fixed factors, 2 goods with CRTS, 2 consumers with convex preferences, maximising behaviour, full employment, and perfect competition. GE is reached through: (1) production equilibrium on the Edgeworth contract curve ($\text{MRTS}^X = \text{MRTS}^Y = w/r$), (2) mapping to the PPC ($\text{MRPT} = P_X/P_Y$), (3) consumption equilibrium ($\text{MRS}^A = \text{MRS}^B = P_X/P_Y$), and (4) simultaneous equilibrium ($\text{MRPT} = \text{MRS}$). Walras' Law reduces independent equations, requiring a numeraire.
→ [Full answer in GE, Game, Extern & Trade](./answers-ge-game-extern-trade.md#q-edge-05)

### Question 6
**Q:** Exchange economy: A: U_A = X_A Y_A, B: U_B = X_B + Y_B. Endowments: A(10,50), B(50,10). Find contract curve, check efficiency.
**Brief:** Total endowments: $X=60, Y=60$. $\text{MRS}_A = Y_A/X_A$, $\text{MRS}_B = 1$ (perfect substitutes). The interior contract curve is $Y_A = X_A$ (where $\text{MRS}_A = \text{MRS}_B$). At endowment (10,50), $\text{MRS}_A = 5 \neq 1$ — the allocation is not Pareto-efficient, and mutually beneficial trade is possible. Corner solutions arise if $P_X \neq P_Y$ due to B's linear utility.
→ [Full answer in GE, Game, Extern & Trade](./answers-ge-game-extern-trade.md#q-edge-06)

### Question 7
**Q:** Present a 2×2×2 Walrasian system. Does GE solution exist?
**Brief:** The $2\times 2\times 2$ Walrasian system has 18 unknowns (quantities demanded/supplied and prices) and 18 equations, but Walras' Law reduces independent equations to 17, requiring a numeraire to determine relative prices. Equation counting is neither necessary nor sufficient for existence — Arrow-Debreu (1954) proved existence under perfect competition, convexity, continuity, and no indivisibilities using the Kakutani fixed-point theorem.
→ [Full answer in GE, Game, Extern & Trade](./answers-ge-game-extern-trade.md#q-edge-07)

### Question 8
**Q:** Three-good world: excess demands given. Find Z₁ via Walras' law. Solve price ratios.
**Brief:** Using Walras' Law ($\sum P_i Z_i = 0$), solve for $Z_1 = -(P_2/P_1)Z_2 - (P_3/P_1)Z_3$. Set $P_1 = 1$ as numeraire, then solve $Z_2 = 0$ and $Z_3 = 0$ simultaneously for $P_2$ and $P_3$. Walras' Law ensures $Z_1 = 0$ automatically when the other two markets clear — only $n-1$ equations are independent.
→ [Full answer in GE, Game, Extern & Trade](./answers-ge-game-extern-trade.md#q-edge-08)

---

## 7. Game Theory & Industrial Organization

| # | Question | Priority | Marks | Source | Year |
|---|----------|----------|-------|--------|------|
| 1 | Define Nash equilibrium. Duopoly: MC=$10, q₁=100-2p₁+p₂, q₂=100-2p₂+p₁. Solve Bertrand equilibrium. Explain as Nash equilibrium. | [A](./EXAM-PRIORITY-MATRIX.md) | 8 | Batch 46 B4a | 2020 |
| 2 | What is Prisoners' dilemma? Explain implications for oligopolistic market. Strategic interaction? | [B](./EXAM-PRIORITY-MATRIX.md) | 6 | Batch 46 B4b | 2020 |
| 3 | Two firms considering entry. Market supports only one. Firm B observes A's decision. Present in extensive form, apply backward induction. | [B](./EXAM-PRIORITY-MATRIX.md) | 6 | Batch 46 B5a | 2020 |
| 4 | Show "down/right" can be subgame perfect Nash equilibrium if infinitely repeated (grim trigger). Given payoff matrix. | [A](./EXAM-PRIORITY-MATRIX.md) | 8 | Batch 46 B5b | 2020 |
| 5 | Paradox of backward induction. How can multiple Nash equilibrium help avoid it? | [B](./EXAM-PRIORITY-MATRIX.md) | 8 | Batch 46 B6a | 2020 |
| 6 | If players initially cooperate (play across), paradox partially overcome — explain with Centipede game (Rosenthal). | [B](./EXAM-PRIORITY-MATRIX.md) | 6 | Batch 46 B6b | 2020 |

---

## 8. Externalities, Public Goods & Information

| # | Question | Priority | Marks | Source | Year |
|---|----------|----------|-------|--------|------|
| 1 | What is Tragedy of Commons? Explain with example. | [B](./EXAM-PRIORITY-MATRIX.md) | 3 | Batch 46 C7a | 2020 |
| 2 | Two firms: A (steel, pollution x) and B (fishery). Pollution increases B's cost, decreases A's cost. Show private/social costs under: i) individual profit max ii) joint profit max iii) different property rights. | [A](./EXAM-PRIORITY-MATRIX.md) | 11 | Batch 46 C7b | 2020 |
| 3 | Show asymmetric information may lead to disappearance of a good from market. | [B](./EXAM-PRIORITY-MATRIX.md) | 4 | Batch 46 C8a | 2020 |
| 4 | Using Spence's Model of Education, explain how education works as a signal of worker productivity. | [A](./EXAM-PRIORITY-MATRIX.md) | 10 | Batch 46 C8b | 2020 |
| 5 | Define consumption externality. Explain by Bandwagon effect and Snob effect. | [B](./EXAM-PRIORITY-MATRIX.md) | — | Professor Q10 | — |
| 6 | Does consumption externality affect GE solution in a 2×2×2 model? | [B](./EXAM-PRIORITY-MATRIX.md) | — | Professor Q11 | — |

---

## 9. Trade & Tariffs

| # | Question | Priority | Marks | Source | Year |
|---|----------|----------|-------|--------|------|
| 1 | Domestic demand: Q=250,000-100P. Supply: Q=250P-30,000. Find autarky P, Q. World P_W=600: import/export? $50 tariff: new P, Q_d, Q_s, imports, tariff revenue. Welfare effects (ΔCS, ΔPS, ΔW). VER limiting to 20,000: welfare vs free trade. | [A](./EXAM-PRIORITY-MATRIX.md) | ~14 | Batch 48 Q7 | 2023 |

### Question 1
**Q:** Domestic Q_d=250,000-100P, Q_s=250P-30,000. World P_W=600. Tariff $50. VER 20,000. Welfare analysis.
**Brief:** Autarky: $P_A=800, Q_A=170,000$. Under free trade ($P_W=600$): imports = 70,000. A $50 tariff raises domestic price to $650, reducing imports to 52,500, generating tariff revenue of \$2,625,000, with net welfare loss of -\$437,500. A VER limiting imports to 20,000 raises price to \$742.86, and the quota rent of \$2,857,200 goes to foreign exporters — making the VER strictly worse than the tariff (net welfare loss ~\$9.3 million).
→ [Full answer in GE, Game, Extern & Trade](./answers-ge-game-extern-trade.md#q-trade-01)

---

## Topic Frequency Summary

| Topic | Sources | Question Count |
|-------|---------|---------------|
| Consumer Theory & Preferences | MainQ, Batch 47, Batch 48, Practice Mid | 18 |
| Demand Estimation & Elasticities | Batch 48 | 3 |
| Production & Supply | MainQ, Batch 47, Batch 48 | 12 |
| Welfare Economics (CV/EV/CS) | MainQ, Batch 47, Practice Mid, WelfareChange paper | 5 |
| Social Welfare & Pareto Optimality | MainQ, Batch 46, Batch 48, Professor Qs | 15 |
| General Equilibrium | MainQ, Batch 47, Batch 48, Professor Qs | 12 |
| Game Theory & IO | Batch 46 | 6 |
| Externalities, Public Goods & Info | Batch 46, Professor Qs | 6 |
| Trade & Tariffs | Batch 48 | 1 |

---

*End of document. All 78 questions from the topic-wise index answered with concise exam-ready bullet points and cross-references to detailed answer files.*
