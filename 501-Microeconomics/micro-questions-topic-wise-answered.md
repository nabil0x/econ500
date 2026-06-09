# Microeconomics — Questions by Topic (with Answers)

> All microeconomic theory questions from every source, organized by topic with concise exam-ready answers.
> **Cross-links:** [Year-wise Index](./micro-questions-year-wise.md) | [Full Notes](./README.md) | [Basics](./basics.md) | [Resources](./resources/README.md)

---

## 1. Consumer Theory & Preferences

### 1A — Preference-Based Approach

| # | Question | Marks | Source | Year |
|---|----------|-------|--------|------|
| 1 | What is the preference-based approach of consumer's behavior? Explain and interpret the assumptions. | 10/7 | MainQ Tut1, Batch 47 Q1a | —, 2022 |
| 2 | Define indifference set. Examine that if a preference relation satisfies strong monotonicity, its indifference curves must be downward sloping. | 10/7 | MainQ Tut1, Batch 47 Q1b | —, 2022 |
| 3 | What are the twin definitions of convexity? How do they differ from strong convexity? Examine graphically. | 10/4 | MainQ Tut1, Batch 47 Q2a | —, 2022 |
| 4 | Show: Convexity of preference $\iff$ USC(x) is convex $\iff$ u(.) is quasiconcave. | 5 | MainQ Tut1, Batch 47 Q2b | —, 2022 |
| 5 | Prove: If preference satisfies monotonicity and continuity, there exists a utility function u(.) representing it. | 5 | MainQ Tut1, Batch 47 Q2c | —, 2022 |
| 6 | Define utility function. Explain desirability of consumer's preference by monotonicity and strong monotonicity. | 10/5 | MainQ Tut1, Batch 47 Q4a | —, 2022 |
| 7 | Show: Strong Monotonicity $\implies$ Monotonicity $\implies$ LNS. | 5 | MainQ Tut1, Batch 47 Q4b | —, 2022 |
| 8 | Examine properties of preference relations: i) Homogeneity ii) Homotheticity. | 5/4 | MainQ Tut1, Batch 47 Q4c | —, 2022 |
| 9 | Prove quasi-concave utility U(X,Y) is identical to dMRS/dX < 0. | 8 | Batch 48 Q1a | 2023 |
| 10 | Does U = X + log(Y) have convex indifference curves? Provide proof. | ~3 | Batch 48 Q2a | 2023 |

### Question 1
**Q:** What is the preference-based approach of consumer behavior? Explain and interpret the assumptions.
**A:**
• Consumer has a well-defined preference relation $\ge$ over consumption bundles X = Rⁿ₊ and chooses the most-preferred affordable bundle.
• **Completeness:** For any x,y, either x $\ge$ y or y $\ge$ x (or both). Consumer can compare any two bundles.
• **Transitivity:** If x $\ge$ y and y $\ge$ z then x $\ge$ z. Prevents cycles and money-pump exploitation.
• **Reflexivity** (implied): x $\ge$ x for all x.
• Completeness is the most challenged assumption — people often cannot compare unfamiliar bundles.
• Transitivity fails with indistinguishable alternatives (just-noticeable differences) or framing effects.
**→ See:** answers-consumer-theory.md for full derivation

### Question 2
**Q:** Define indifference set. Show strong monotonicity $\implies$ ICs must be downward sloping.
**A:**
• **Indifference set** IND(x) = {y in X : y ~ x} = UCS(x) $\cap$ LCS(x).
• **Strong monotonicity:** If x_k $\ge$ y_k for all k and x_l > y_l for at least one good, then x > y.
• **Proof by contradiction:** If IC were upward-sloping, pick y >> x on same IC $\implies$ y > x (by strong monotonicity) but y ~ x (by IC definition) — contradiction.
• Strong monotonicity rules out: upward-sloping ICs, thick ICs, and bads.
**→ See:** answers-consumer-theory.md for full derivation

### Question 3
**Q:** What are the twin definitions of convexity? How differ from strong convexity? Examine graphically.
**A:**
• **Definition 1 (convex preferences):** If x $\ge$ y then $\alpha$x + (1-$\alpha$)y $\ge$ y for any $\alpha$ in (0,1).
• **Definition 2 (convex UCS):** The upper contour set UCS(x) = {y : y $\ge$ x} is convex for every x.
• The two definitions are equivalent — both capture diversification preference.
• **Strong convexity:** $\alpha$x + (1-$\alpha$)y > z when x$\neq$y and both $\ge$ z. Indifference curves strictly bowed inward.
• Weak convexity allows flat segments (perfect substitutes); strong convexity implies strictly diminishing MRS.
**→ See:** answers-consumer-theory.md for full derivation

### Question 4
**Q:** Show: Convexity of preference $\iff$ UCS(x) convex $\iff$ u(.) quasiconcave.
**A:**
• (1) Convex preference $\iff$ convex UCS is definitional (by Def 2).
• (2) UCS convex $\iff$ u quasiconcave: Quasiconcave means u($\lambda$x + (1-$\lambda$)y) $\ge$ min{u(x), u(y)}.
• **($\implies$)** If UCS convex, take x,y in UCS(z) $\implies$ $\lambda$x + (1-$\lambda$)y in UCS(z) $\implies$ quasiconcavity.
• **($\impliedby$)** If u quasiconcave, for any x,y with u(x),u(y) $\ge$ u(z), the convex combination also has u $\ge$ u(z) $\implies$ UCS convex.
• Chain complete: Convex preference $\iff$ convex UCS $\iff$ quasiconcave utility.
**→ See:** answers-consumer-theory.md for full derivation

### Question 5
**Q:** Prove: If preference satisfies monotonicity and continuity, there exists a utility function u(.) representing it.
**A:**
• **Debreu's theorem:** Monotonicity + continuity on X = Rⁿ₊ $\implies$ continuous utility function exists.
• **Proof sketch:** Let **0** = (0,...,0). For bundle x, let m = max{x₁,...,xₙ}. Define M = (m,...,m) on the 45° line.
• Monotonicity: M $\ge$ x $\ge$ **0**. Define A = {t in [0,m] : (t,...,t) $\le$ x}, B = {t in [0,m] : (t,...,t) $\ge$ x}.
• A and B partition [0,m]; by continuity both are closed $\implies$ intersection non-empty $\implies$ unique t(x) ~ x.
• Set u(x) = t(x). Then x $\ge$ y $\iff$ t(x) $\ge$ t(y) $\iff$ u(x) $\ge$ u(y).
**→ See:** answers-consumer-theory.md for full derivation

### Question 6
**Q:** Define utility function. Explain desirability by monotonicity and strong monotonicity.
**A:**
• **Utility function:** u: X $\to$ R such that x $\ge$ y $\iff$ u(x) $\ge$ u(y). Only ordinal — any strictly increasing transform represents same preferences.
• **Monotonicity:** If x_k $\ge$ y_k for all k, then x $\ge$ y; if all components strictly larger, x > y.
• **Strong monotonicity:** If x_k $\ge$ y_k for all k and at least one strictly larger, then x > y.
• Comparison: Monotonicity requires ALL goods increase for strict improvement; strong monotonicity requires only ONE.
• Example: u = min{x₁,x₂} satisfies monotonicity but NOT strong monotonicity.
**→ See:** answers-consumer-theory.md for full derivation

### Question 7
**Q:** Show: Strong Monotonicity $\implies$ Monotonicity $\implies$ LNS.
**A:**
• **(SM $\implies$ M):** If x_k $\ge$ y_k for all k and x_l > y_l for some l, SM gives x > y. If x=y, x~y. Either way x $\ge$ y — so monotonicity holds.
• **(M $\implies$ LNS):** For any x and $\varepsilon$>0, construct y = (x₁+δ,...,xₙ+δ) with δ = $\varepsilon$/√N. Then y_k > x_k for all k $\implies$ y > x by monotonicity. ||y-x|| = $\varepsilon$, so LNS satisfied.
• **Chain:** Strong Monotonicity $\implies$ Monotonicity $\implies$ LNS.
• Converse does NOT hold — LNS does not imply monotonicity (e.g., preferences with a satiation point).
**→ See:** answers-consumer-theory.md for full derivation

### Question 8
**Q:** Examine: (i) Homogeneity (ii) Homotheticity.
**A:**
• **(i) Homogeneous of degree k:** u(ax) = aᵏ u(x). MRS is constant along rays from origin. Examples: Cobb-Douglas HD($\alpha$+$\beta$), linear HD(1), Leontief HD(1).
• **(ii) Homothetic:** Monotonic transform of a homogeneous function: u = g(v(x)) where g' > 0 and v HD(k). MRS depends only on ratio x₁/x₂.
• All homogeneous functions are homothetic; not all homothetic are homogeneous (e.g., u = xy + a).
• Homothetic $\implies$ Engel curves are straight lines through origin; income shares constant.
**→ See:** answers-consumer-theory.md for full derivation

### Question 9
**Q:** Prove quasi-concave utility U(X,Y) is identical to dMRS/dX < 0.
**A:**
• MRS = MUₓ/MUᵧ = ($\partial$u/$\partial$x)/($\partial$u/$\partial$y). Along IC, du = 0 $\implies$ dy/dx = -MRS.
• Quasiconcavity requires bordered Hessian condition: 2uₓuᵧu_xy - uₓ²u_yy - uᵧ²u_xx $\ge$ 0.
• Differentiate MRS along IC: dMRS/dx = [uₓ²u_yy - 2uₓuᵧu_xy + uᵧ²u_xx] / uᵧ³.
• Numerator of dMRS/dx = -(bordered Hessian numerator). So dMRS/dx < 0 $\iff$ numerator < 0 $\iff$ quasiconcavity.
• **Interpretation:** Diminishing MRS means IC flattens as x increases — graphical manifestation of convex preferences.
**→ See:** answers-consumer-theory.md for full derivation

### Question 10
**Q:** Does U = X + log(Y) have convex indifference curves? Provide proof.
**A:**
• MUₓ = 1, MUᵧ = 1/y $\implies$ MRS = y.
• Along IC: du = dx + (1/y)dy = 0 $\implies$ dy/dx = -y.
• dMRS/dx = dy/dx = -y < 0 for any positive y. Hence MRS diminishes $\implies$ **convex ICs**.
• Bordered Hessian: 2uₓuᵧu_xy - uₓ²u_yy - uᵧ²u_xx = 0 - 1(-1/y²) - (1/y²)(0) = 1/y² > 0 ✓
**→ See:** answers-consumer-theory.md for full derivation

### 1B — Utility Maximization & Demand

| # | Question | Marks | Source | Year |
|---|----------|-------|--------|------|
| 1 | Cobb-Douglas: Derive Walrasian demand, examine properties. | 7 | MainQ Tut1 Q3i, Batch 47 Q3i | —, 2022 |
| 2 | Cobb-Douglas: Get indirect utility, explain properties, verify Roy's identity. | 7 | MainQ Tut1 Q3ii, Batch 47 Q3ii | —, 2022 |
| 3 | Cobb-Douglas: Solve expenditure minimization, examine compensated demand properties. | 6 | MainQ Tut1 Q3iii, Batch 47 Q3iii | —, 2022 |
| 4 | Consider utility maximization problem — examine properties of Walrasian demand x(p,w). When can sufficient condition of UMP be violated? | 10 | MainQ Tut2 Q4a | — |
| 5 | Examine: i) Homogeneity ii) Homotheticity. | 10 | MainQ Tut2 Q4b | — |
| 6 | Negroni cocktail: U(G,V,C) = min(G,V,C). Find Marshallian demand for Gin, Hicksian demand for Campari, expenditure function. | ~11 | Batch 48 Q1b | 2023 |
| 7 | U = X + ln(Y). Find demands for X and Y. With limited I, which goods do you buy? Why? | 3 | Batch 48 Q1c | 2023 |
| 8 | Agent has U(X,Y) = X - 3Y. P_X=20, P_Y=40, I=400. Choose quantities maximizing utility. | 3 | Batch 48 Q2c | 2023 |

### Question 1
**Q:** Cobb-Douglas: Derive Walrasian demand, examine properties.
**A:**
• U = x₁^$\alpha$ x₂^$\beta$, budget p₁x₁ + p₂x₂ = w. Lagrangian FOCs give tangency: ($\alpha$x₂)/($\beta$x₁) = p₁/p₂ $\implies$ x₂ = ($\beta$/$\alpha$)(p₁/p₂)x₁.
• **Walrasian demands:** x₁ = $\alpha$/($\alpha$+$\beta$) $\cdot$ w/p₁, x₂ = $\beta$/($\alpha$+$\beta$) $\cdot$ w/p₂.
• Properties: HD(0), Walras' Law holds, $\partial$x₁/$\partial$p₁ < 0 (usual good), $\partial$x₁/$\partial$p₂ = 0 (no cross-price effect), both goods normal.
• **Constant expenditure shares:** s₁ = $\alpha$/($\alpha$+$\beta$), s₂ = $\beta$/($\alpha$+$\beta$) — independent of p and w.
**→ See:** answers-consumer-theory.md for full derivation

### Question 2
**Q:** Cobb-Douglas: Get indirect utility, explain properties, verify Roy's identity.
**A:**
• **Indirect utility:** v(p,w) = [$\alpha$^$\alpha$$\beta$^$\beta$/($\alpha$+$\beta$)^($\alpha$+$\beta$)] $\cdot$ w^($\alpha$+$\beta$) $\cdot$ p₁^(-$\alpha$) $\cdot$ p₂^(-$\beta$).
• Properties: HD(0) in (p,w), ↑ in w, ↓ in p_k, quasiconvex in (p,w).
• **Roy's identity:** x_k = -($\partial$v/$\partial$p_k)/($\partial$v/$\partial$w). For good 1: $\partial$v/$\partial$p₁ = -$\alpha$v/p₁, $\partial$v/$\partial$w = ($\alpha$+$\beta$)v/w $\implies$ -($\partial$v/$\partial$p₁)/($\partial$v/$\partial$w) = $\alpha$w/(($\alpha$+$\beta$)p₁) = x₁ ✓
**→ See:** answers-consumer-theory.md for full derivation

### Question 3
**Q:** Cobb-Douglas: Solve expenditure minimization, examine compensated demand properties.
**A:**
• **EMP:** Minimize p₁x₁ + p₂x₂ s.t. x₁^$\alpha$x₂^$\beta$ $\ge$ ū. Tangency yields same ratio: x₂ = ($\beta$/$\alpha$)(p₁/p₂)x₁.
• **Hicksian demands:** h₁ = ū^(1/($\alpha$+$\beta$)) $\cdot$ ($\alpha$/$\beta$)^($\beta$/($\alpha$+$\beta$)) $\cdot$ (p₂/p₁)^($\beta$/($\alpha$+$\beta$)), h₂ symmetric.
• **Expenditure function:** e(p,ū) = ū^(1/($\alpha$+$\beta$)) $\cdot$ ($\alpha$+$\beta$) $\cdot$ (p₁/$\alpha$)^($\alpha$/($\alpha$+$\beta$))(p₂/$\beta$)^($\beta$/($\alpha$+$\beta$)).
• Properties: HD(0) in p, compensated law of demand ($\partial$h₁/$\partial$p₁ < 0), duality: e(p,v(p,w)) = w and v(p,e(p,ū)) = ū.
**→ See:** answers-consumer-theory.md for full derivation

### Question 4
**Q:** Examine properties of Walrasian demand x(p,w). When can UMP sufficient condition be violated?
**A:**
• **Properties:** (1) HD(0): x(ap,aw) = x(p,w). (2) Walras' Law: p$\cdot$x = w (by LNS). (3) Convex set if preferences convex; single-valued if strictly convex. (4) Continuous if u continuous and strictly quasiconcave.
• **Violations of Kuhn-Tucker sufficient conditions:**
  • **(A) Non-monotone utility:** Corner solution — MRS $\neq$ p₁/p₂ at optimum (e.g., bliss point).
  • **(B) Non-quasiconcave utility:** Tangency identifies a minimum, not a maximum.
  • **(C) Zero gradient (∇u = 0):** Satiation — Walras' Law may fail.
**→ See:** answers-consumer-theory.md for full derivation

### Question 5
**Q:** Examine: (i) Homogeneity (ii) Homotheticity.
**A:**
• **(i) Homogeneity of Walrasian demand:** x(ap,aw) = x(p,w) $\forall$ a > 0. Budget set unchanged. No special preferences needed beyond continuity.
• **(ii) Homothetic preferences:** If x ~ y then ax ~ ay $\forall$ a > 0. MRS depends only on ratio, not scale.
• Demand implications: Engel curves linear through origin, expenditure shares constant, income elasticity = 1 for all goods.
• Examples: Cobb-Douglas, CES, perfect substitutes, perfect complements. Non-example: Quasilinear, Stone-Geary.
• Homogeneous utility $\implies$ homothetic preferences; converse not true.
**→ See:** answers-consumer-theory.md for full derivation

### Question 6
**Q:** Negroni cocktail: U = min(G,V,C). Find Marshallian demand for Gin, Hicksian demand for Campari, expenditure function.
**A:**
• Leontief preferences — at optimum: G = V = C = q (fixed 1:1:1 proportions).
• **Marshallian demand:** G(p,w) = w/(p_G + p_V + p_C). Same for V and C. HD(0), Walras' Law ✓.
• **Hicksian demand for Campari:** h_C(p,u) = ū (constant — independent of prices, no substitution possible).
• **Expenditure function:** e(p,ū) = ū $\cdot$ (p_G + p_V + p_C). HD(1) in p, Shepard's lemma: $\partial$e/$\partial$p_C = ū = h_C ✓.
• Duality: e(p,v(p,w)) = w, v(p,e(p,ū)) = ū ✓.
**→ See:** answers-consumer-theory.md for full derivation

### Question 7
**Q:** U = X + ln(Y). Find demands for X and Y. With limited I, which goods do you buy? Why?
**A:**
• MUₓ = 1, MUᵧ = 1/y, MRS = y. Tangency: y = pₓ/pᵧ (independent of income I).
• **Demands:** x = I/pₓ - 1 (if I $\ge$ pₓ), y = pₓ/pᵧ.
• y is income-inelastic ($\partial$y/$\partial$I = 0) — quasilinear good with zero income effect. x absorbs all income changes.
• If I < pₓ: corner solution — x = 0, all income spent on y.
• **Why?** ln(y) has diminishing MU, so satiation in y. Beyond y* = pₓ/pᵧ, extra income goes entirely to x.
**→ See:** answers-consumer-theory.md for full derivation

### Question 8
**Q:** U(X,Y) = X - 3Y. P_X=20, P_Y=40, I=400. Choose quantities maximizing utility.
**A:**
• MUₓ = 1, MUᵧ = -3 (y is a **bad** — negative marginal utility). Consumer wants y = 0.
• **Corner solution:** y* = 0, x* = I/pₓ = 400/20 = 20. Utility: u(20,0) = 20.
• MRS = 1/(-3) = -1/3; price ratio = 20/40 = 1/2. Tangency condition identifies a minimum, not a maximum.
• Lagrangian FOCs would give incorrect interior solution — always check MU signs first.
**→ See:** answers-consumer-theory.md for full derivation

---

## 2. Demand Estimation & Elasticities

| # | Question | Marks | Source | Year |
|---|----------|-------|--------|------|
| 1 | Demand: X = $\alpha$P_X^γ P_Z^δ P_W^$\varepsilon$ I^η. Find cross-price elasticity with Z, income elasticity. Given $\alpha$=-0.5, γ=-0.4, δ=0.8: Is X luxury/necessity/inferior? Is Z substitute/complement? If P_W↓5%, ΔQ_d? If P_X↓, does expenditure↑↓? | ~11 | Batch 48 Q2b | 2023 |
| 2 | Burger King demand for Whopper: Q = 10 + 1.3P_B + 0.4P_M - 3P_F + 2.2I. What's the terrible problem? | 2 | Batch 48 Q3a | 2023 |
| 3 | Corrected demand: Q = 150P_B^{-1.5}P_{r1}^{0.75}P_{r2}^{-0.25}I^{0.8}A^{0.05}. Which good is French fries? Luxury? Advertising↑50%$\to$ΔQ? French fry price↓50%$\to$ΔQ? MC=$1, profit-max P? McDonald's↓10%, what % must BK lower price? | 12 | Batch 48 Q3b | 2023 |

### Question 1
**Q:** Demand: X = $\alpha$P_X^γ P_Z^δ P_W^$\varepsilon$ I^η. Find cross-price elasticity with Z, income elasticity. Given $\alpha$=-0.5, γ=-0.4, δ=0.8: classify X, Z, and predict changes.
**A:**
• **Cross-price elasticity with Z:** $\varepsilon$_X,P_Z = δ = 0.8 > 0 $\implies$ Z is a **gross substitute** for X.
• **Income elasticity:** $\varepsilon$_X,I = η. Classification: η > 1 luxury, 0<η<1 necessity, η<0 inferior. (Note: $\alpha$ is a scale constant, NOT income elasticity.)
• **P_W falls 5%:** %ΔQ = $\varepsilon$ × (-5%). If $\varepsilon$ > 0, demand falls; if $\varepsilon$ < 0, demand rises.
• **P_X decreases:** |γ| = 0.4 < 1 (inelastic) $\implies$ P_X ↓ $\implies$ expenditure ↓ (total revenue test).
**→ See:** answers-demand-production.md for full derivation

### Question 2
**Q:** Burger King demand: Q = 10 + 1.3P_B + 0.4P_M - 3P_F + 2.2I. What's the terrible problem?
**A:**
• Coefficient on own price P_B is **positive** (+1.3): $\partial$Q/$\partial$P_B = 1.3 > 0 $\implies$ demand curve slopes **upward**.
• Violates the Law of Demand. A normal demand function must have negative own-price coefficient.
• This is a misspecified model — likely a Giffen paradox or data error.
**→ See:** answers-demand-production.md for full derivation

### Question 3
**Q:** Corrected demand: Q = 150P_B^{-1.5}P_{r1}^{0.75}P_{r2}^{-0.25}I^{0.8}A^{0.05}. Classify goods, compute effects, find profit-max P.
**A:**
• **French fries = r2** ($\varepsilon$ = -0.25 < 0 $\implies$ complement). r1 ($\varepsilon$ = 0.75 > 0) is a substitute (e.g., chicken sandwich).
• **Whopper = necessity** (income elasticity η = 0.8: 0 < 0.8 < 1).
• **Advertising ↑50%:** %ΔQ = 0.05 × 50% = +2.5% (advertising-inelastic).
• **French fry price ↓50%:** %ΔQ = -0.25 × (-50%) = +12.5%.
• **Profit-max P (MC=$1):** Lerner Index: P(1 + 1/$\varepsilon$) = MC $\implies$ P(1 - 2/3) = 1 $\implies$ P* = $3. Markup = (3-1)/3 = 2/3.
• **McDonald's ↓10%:** BK must lower P_B by 5% (since 0.75 × 10% / 1.5 = 5%).
**→ See:** answers-demand-production.md for full derivation

---

## 3. Production & Supply

### 3A — Production Sets & Functions

| # | Question | Marks | Source | Year |
|---|----------|-------|--------|------|
| 1 | Define production function, production set, transformation function, transformation frontier. | 10 | MainQ Tut2 Q2a | — |
| 2 | Graphically explain the properties of the production set. | 10 | MainQ Tut2 Q2b | — |
| 3 | Define production sets. Graphically explain properties. | 5 | Batch 47 Q5a | 2022 |
| 4 | What is elasticity of substitution (EoS)? Find EoS for q = aK + bL. EoS for fixed proportions? | 6 | Batch 47 Q5b | 2022 |
| 5 | Four properties of cost functions — match to intuitive explanations. | 6 | Batch 48 Q4a | 2023 |
| 6 | Sausage maker: 3 oz pork + 2 oz veal = 5 oz sausage. Write production function, conditional factor demand for pork, cost function. If Q = 200P^{-6}, find profit-max P. | ~8 | Batch 48 Q4b | 2023 |
| 7 | Q = (KL)^{1/3}. Short-run K=64. Find SR production function, conditional factor demand for L, SR cost function, shutdown price, SR supply, returns to scale, elasticity of substitution, LR conditional factor demands, LR cost function, LR supply. | ~12 | Batch 48 Q5a | 2023 |
| 8 | Starbucks Jumbo (62 oz) vs Trenta (31 oz). Will Jumbo cost twice as much, more, or less? Explain. | 2 | Batch 48 Q5b | 2023 |

### Question 1
**Q:** Define production function, production set, transformation function, transformation frontier.
**A:**
• **Production function:** q = f(z₁,...,zₙ) — max output from given inputs given technology.
• **Production set:** Y = {y $\in$ Rᴸ : F(y) $\le$ 0} — all technologically feasible production plans (positive = outputs, negative = inputs).
• **Transformation function:** F(y) — implicit function where F(y) $\le$ 0 iff y feasible.
• **Transformation frontier:** {y $\in$ Rᴸ : F(y) = 0} — boundary where firm is technically efficient.
• **MRPT** = ($\partial$F/$\partial$y_k)/($\partial$F/$\partial$y_l) = -dy_l/dy_k along F(y)=0.
**→ See:** answers-demand-production.md for full derivation

### Question 2 & 3
**Q:** Graphically explain properties of the production set.
**A:**
• Properties: (1) Non-empty, (2) Closed, (3) No free lunch (y$\ge 0$ $\implies$ y=0), (4) Possibility of inaction (0$\in$Y), (5) Free disposal (y'$\le$y $\implies$ y'$\in$Y), (6) Irreversibility (y$\neq$0 $\implies$ -y∉Y), (7) Non-increasing RTS, (8) Non-decreasing RTS, (9) CRS, (10) Additivity/free entry, (11) Convexity.
• **Convexity violation:** Fixed costs create a "hole" near origin — non-convex production set.
• Differentiate convex production set (diminishing returns) from convex isoquants (diminishing MRTS).
**→ See:** answers-demand-production.md for full derivation

### Question 4
**Q:** What is elasticity of substitution (EoS)? Find EoS for q = aK + bL and for fixed proportions.
**A:**
• **EoS:** σ = %Δ(K/L) / %ΔMRTS = d(K/L)/d(MRTS) $\cdot$ MRTS/(K/L) = $\partial$ln(K/L)/$\partial$ln(MRTS).
• **Linear q = aK + bL (perfect substitutes):** MRTS = b/a constant $\implies$ %ΔMRTS = 0 $\implies$ σ = ∞.
• **Fixed proportions (Leontief):** K/L fixed $\implies$ %Δ(K/L) = 0 $\implies$ σ = 0.
• Notable: Cobb-Douglas $\implies$ σ = 1. CES $\implies$ σ = 1/(1-ρ).
**→ See:** answers-demand-production.md for full derivation

### Question 5
**Q:** Four properties of cost functions — match to intuitive explanations.
**A:**
| Property | Explanation |
|----------|-------------|
| **1. HD(1) in w** | c($\lambda$w,q) = $\lambda$c(w,q). Doubling all input prices doubles cost. |
| **2. Non-decreasing in q** | q₁ > q₀ $\implies$ c(w,q₁) $\ge$ c(w,q₀). More output cannot cost less. |
| **3. Concave in w** | Cost rises less than linearly as input prices rise — firm substitutes away from expensive inputs. |
| **4. Shephard's Lemma** | $\partial$c(w,q)/$\partial$w_k = z_k(w,q). Derivative wrt input price = conditional factor demand. |
**→ See:** answers-demand-production.md for full derivation

### Question 6
**Q:** Sausage maker: 3 oz pork + 2 oz veal = 5 oz sausage. Write production function, conditional factor demand for pork, cost function. If Q = 200P^{-6}, find profit-max P.
**A:**
• **Production function:** Q = min{P/3, V/2} (Leontief fixed proportions).
• **Conditional factor demand for pork:** P(Q) = 3Q (since P/3 = Q at optimum).
• **Cost function:** c(Q) = p_P$\cdot$3Q + p_V$\cdot$2Q = Q(3p_P + 2p_V). If p_P = p_V = 1, c(Q) = 5Q.
• **Profit-max P:** $\pi$ = P$\cdot$200P^{-6} - 5$\cdot$200P^{-6} = 200P^{-5} - 1000P^{-6}. FOC $\implies$ P* = 6.
**→ See:** answers-demand-production.md for full derivation

### Question 7
**Q:** Q = (KL)^{1/3}, SR K=64. Find SR and LR functions.
**A:**
• **SR prod function:** Q = 4L^{1/3}. **SR conditional L demand:** L = Q³/64.
• **SR cost:** SRTC(Q) = wQ³/64 + 64r. If w=r=1: SRTC = Q³/64 + 64.
• **Shutdown price:** min AVC = 0 (AVC = wQ²/64, min at Q=0). Firm produces for any P>0.
• **SR supply:** Qˢ = √(64P/(3w)) for P > 0.
• **Returns to scale:** Q(tK,tL) = t^{2/3}Q(K,L), sum of exponents = 2/3 < 1 $\implies$ **DRS**.
• **EoS:** σ = 1 (Cobb-Douglas).
• **LR conditional demands:** L = (r/w)^{1/2} Q^{3/2}, K = (w/r)^{1/2} Q^{3/2}.
• **LR cost:** LRTC(Q) = 2√(wr) $\cdot$ Q^{3/2}. **LR supply:** Qˢ = P²/(9wr) (upward-sloping for DRS).
**→ See:** answers-demand-production.md for full derivation

### Question 8
**Q:** Starbucks Jumbo (62 oz) vs Trenta (31 oz). Will Jumbo cost twice as much, more, or less? Explain.
**A:**
• **Less than twice as much.** Food/beverage production exhibits **economies of scale** — packaging, labor, and overhead are largely fixed.
• Larger cup uses ~same labor and overhead, slightly more ingredients (less than proportional), packaging costs that increase sub-linearly.
• Average cost declines with output — MC of second 31 oz < AC of first 31 oz.
**→ See:** answers-demand-production.md for full derivation

### 3B — Profit Function

| # | Question | Marks | Source | Year |
|---|----------|-------|--------|------|
| 1 | Define profit function. If production set Y is closed and has free disposal, what properties does the profit function satisfy? | 10/3 | MainQ Tut2 Q3a, Batch 47 Q5c | —, 2022 |
| 2 | Show that MRPT_x,y = MC_x / MC_y. | — | Professor Q17 | — |

### Question 1
**Q:** Define profit function. Properties if Y closed with free disposal.
**A:**
• **Profit function:** $\pi$(p) = max_{y$\in$Y} p$\cdot$y — value function of the PMP.
• **Properties:**
  • **HD(1) in p:** $\pi$($\lambda$p) = $\lambda$$\pi$(p) for $\lambda$ > 0.
  • **Convex in p:** $\pi$($\alpha$p+(1-$\alpha$)p') $\le$ $\alpha$$\pi$(p)+(1-$\alpha$)$\pi$(p') — firm benefits from extreme price vectors.
  • **Non-decreasing in output prices, non-increasing in input prices** (Hotelling's Lemma).
  • **Continuous in p** (given Y closed).
• **Hotelling's Lemma:** $\partial$$\pi$/$\partial$p_k = y_k(p). **Law of Supply:** $\partial$y_k/$\partial$p_k $\ge$ 0.
• The profit function is convex (not concave!) in prices — opposite of the cost function.
**→ See:** answers-demand-production.md for full derivation

### Question 2
**Q:** Show MRPT_x,y = MC_x / MC_y.
**A:**
• Total differentiate transformation function F(q_x,q_y,z)=0 along frontier: ($\partial$F/$\partial$q_x)dq_x + ($\partial$F/$\partial$q_y)dq_y = 0 $\implies$ MRPT = -dq_y/dq_x = ($\partial$F/$\partial$q_x)/($\partial$F/$\partial$q_y).
• PMP FOCs: p_x = MC_x, p_y = MC_y. Tangency condition: MRPT = p_x/p_y.
• Hence MRPT = p_x/p_y = MC_x/MC_y. QED.
• **Intuition:** If MRPT > MC_x/MC_y, firm reallocates from y to x to increase profit.
**→ See:** answers-demand-production.md for full derivation

### 3C — Competitive Industry

| # | Question | Marks | Source | Year |
|---|----------|-------|--------|------|
| 1 | 1,000 identical firms: C_SR(q) = 0.5q²+2q+80. Find SR supply per firm, industry SR supply. Market Q=44,000-1,000P. Find equilibrium P, Q, each firm's profit. $20/unit tax: new P, quantity. Welfare cost of tax. | ~14 | Batch 48 Q6a | 2023 |
| 2 | Three-good world: excess demand Z₂(p) = -3 + p₃/p₂ + p₁/p₂, Z₃(p) = 3p₁/p₃ + 4p₂/p₃ - 7. Find Z₁. Find market-clearing p₂/p₁, p₃/p₁. | ~4 | Batch 48 Q6b | 2023 |

### Question 1
**Q:** 1,000 identical firms with C_SR(q)=0.5q²+2q+80. Market Q_D=44,000-1,000P. $20/unit tax. Find equilibrium, profit, welfare cost.
**A:**
• **SR supply per firm:** MC = q+2. min AVC = 2 at q=0. q(P) = P - 2 for P $\ge$ 2.
• **Industry SR supply:** Q_S = 1,000(P - 2) for P $\ge$ 2.
• **Equilibrium:** 1,000(P-2) = 44,000 - 1,000P $\implies$ P* = 23, Q* = 21,000. Each firm q = 21, $\pi$ = 140.5.
• **$20 tax:** Supply becomes P - 20 = q+2 $\implies$ q = P-22. New equilibrium: P_b = 33 (buyer), P_s = 13 (seller), Q = 11,000. Tax revenue = 220,000. Per-firm profit = -19.5 (losses but continue since P_s > min AVC).
• **DWL = ½ × t × ΔQ = ½ × 20 × 10,000 = 100,000.**
**→ See:** answers-demand-production.md for full derivation

### Question 2
**Q:** Three-good world: given Z₂, Z₃. Find Z₁ via Walras' law. Solve price ratios.
**A:**
• **Walras' law:** p₁Z₁ + p₂Z₂ + p₃Z₃ = 0 $\implies$ Z₁ = -(p₂/p₁)Z₂ - (p₃/p₁)Z₃.
• Substitute: Z₁ = -4 + (6p₃ - p₂)/p₁.
• Set Z₂ = Z₃ = 0. Let r₂ = p₂/p₁, r₃ = p₃/p₁.
• Z₂ = 0 $\implies$ r₃ + 1 = 3r₂. Z₃ = 0 $\implies$ 3 + 4r₂ = 7r₃.
• Solve: r₂ = 10/17, r₃ = 13/17. Verify Z₁ = 0 ✓.
• Only n-1 equations independent — Walras' law gives the nth for free.
**→ See:** answers-demand-production.md for full derivation

---

## 4. Welfare Economics (CV, EV, CS)

| # | Question | Marks | Source | Year |
|---|----------|-------|--------|------|
| 1 | Distinguish CV and EV. How are they different from CS? | 10/4 | MainQ Tut2 Q1a, Batch 47 Q6a | —, 2022 |
| 2 | For a price decrease (both goods normal): EV > CS > CV. For price increase, explain relationship. | 10/5 | MainQ Tut2 Q1b, Batch 47 Q6b | —, 2022 |
| 3 | Cobb-Douglas u = x₁^½ x₂^½. Given {p⁰,m⁰}={{4,4},300}, {p¹,m¹}={{2,4},300}. Compute EV, CV, CS. Examine relationship $\to$ nature of commodities. | 10/5 | MainQ Tut2 Q3b, Batch 47 Q6c | —, 2022 |
| 4 | EV > CS > CV diagram (price decrease) and EV < CS < CV (price increase) — graphical analysis. | — | Practice Mid | — |
| 5 | Show: Marshallian consumer surplus overstates CV and understates EV for normal goods. | — | WelfareChange paper §4 | — |

### Question 1
**Q:** Distinguish CV and EV. How are they different from CS?
**A:**
• **CV** = money taken/given after price change to restore original utility u⁰: CV = w - e(p¹,u⁰).
• **EV** = money given/taken before price change to reach new utility u¹: EV = e(p⁰,u¹) - w.
• **CS** = area under Marshallian demand between old and new prices: ∫ x₁(p₁,$\cdot$) dp₁.
• CV uses new prices + original utility; EV uses old prices + new utility. CS mixes income and substitution effects.
• CV and EV are exact welfare measures from Hicksian demands; CS is observable but approximate.
**→ See:** answers-welfare.md for full derivation

### Question 2
**Q:** For price decrease (normal goods): EV > CS > CV. For price increase, explain.
**A:**
• **Price decrease (normal goods):** EV uses Hicksian at new (higher) utility u¹ — largest area. CV uses Hicksian at original (lower) utility u⁰ — smallest area. Marshallian lies between: **EV > CS > CV**.
• **Price increase (normal goods):** CV uses Hicksian at original u⁰ (largest). EV uses Hicksian at new u¹ (smallest). **CV > CS > EV**.
• **Intuition:** For normal goods, price fall increases real income $\implies$ consumer buys more if compensated $\implies$ EV > CV. The gap reflects the income effect.
**→ See:** answers-welfare.md for full derivation

### Question 3
**Q:** Cobb-Douglas u = x₁^½ x₂^½. p⁰=(4,4), p¹=(2,4), m=300. Compute EV, CV, CS. Interpret.
**A:**
• Walrasian demands: x₁ = 150/p₁, x₂ = 150/p₂. v⁰ = 37.5, v¹ ≈ 53.03.
• Expenditure function ($\alpha$=½): e(p,u) = 2u√(p₁p₂).
• CV = w - e(p¹,u⁰) = 300 - 2$\cdot$37.5$\cdot$√(2$\cdot$4) = 300 - 212.1 = **87.9**.
• EV = e(p⁰,u¹) - w = 2$\cdot$53.03$\cdot$√(4$\cdot$4) - 300 = 424.24 - 300 = **124.24**.
• CS = ∫₄² (150/p₁) dp₁ = 150|ln p₁|₄² = 150 ln(0.5) ≈ **103.98**.
• **EV > CS > CV ✓ $\implies$ both goods are normal.** EV-CV = 36.34 > 0 confirms substantial income effect.
**→ See:** answers-welfare.md for full derivation

### Question 4
**Q:** EV > CS > CV diagram (price decrease) and EV < CS < CV (price increase) — graphical analysis.
**A:**
• **Price decrease p₁↓ (normal good):** Three demand curves intersect at p₁⁰. At p₁¹ < p₁⁰: h(p,u¹) > x(p,w) > h(p,u⁰). EV = area left of h(p,u¹) $\to$ largest; CS = area left of x(p,w) $\to$ intermediate; CV = area left of h(p,u⁰) $\to$ smallest.
• **Price increase p₁↑ (normal good):** At p₁¹ > p₁⁰: h(p,u⁰) > x(p,w) > h(p,u¹). CV $\to$ largest; CS $\to$ intermediate; EV $\to$ smallest.
• **Why reversal?** CV references original (better) utility for price increase; EV references new (better) utility for price decrease.
**→ See:** answers-welfare.md for full derivation

### Question 5
**Q:** Show: Marshallian CS overstates CV and understates EV for normal goods.
**A:**
• **Normal good $\implies$ $\partial$x₁/$\partial$m > 0** $\implies$ positive income effect. Marshallian demand is flatter (includes income+substitution effects) than Hicksian at u⁰.
• **Price ↓:** CS > CV (CS overstates CV because Marshallian includes income effect). EV > CS (CS understates EV because EV references higher u¹).
• **Zero income effect (quasilinear):** CS = CV = EV (exact). **Willig bounds:** for realistic parameters, CS error < 5%.
• For inferior goods: the ordering reverses.
**→ See:** answers-welfare.md for full derivation

---

## 5. Social Welfare & Pareto Optimality

### 5A — Social Welfare Criteria

| # | Question | Marks | Source | Year |
|---|----------|-------|--------|------|
| 1 | Define social welfare. Critically examine three key issues Pigou dealt with in analyzing social welfare. | 10 | MainQ GE Q3a, Professor Q5 | — |
| 2 | Derive the grand utility possibility frontier and determine the 'point of bliss'. Does this ensure maximum social welfare? Justify. | 10/6 | MainQ GE Q3b, Batch 48 Q8b | —, 2023 |
| 3 | Define social welfare. Critically explain criteria: i) Growth of GNP ii) Bentham's Criteria iii) Cardinalist approach. | — | Professor Q1 | — |
| 4 | Define social welfare function. Derive grand utility possibility frontier, determine point of bliss. | — | Professor Q4, 49Qs Q4 | — |
| 5 | Critically explain the three key things Pigou dealt with in analyzing social welfare. | — | Professor Q5, 49Qs Q5 | — |
| 6 | Define social welfare function. How could it be used as a criterion to measure social welfare? Explain. | — | Professor (Given) Q4 | — |
| 7 | What are the major assumptions of social welfare maximization in a 2×2×2 model? | — | Professor (Given) Q5 | — |

### Question 1
**Q:** Define social welfare. Critically examine three key issues Pigou dealt with.
**A:**
• **Social welfare** = aggregate well-being of all individuals. Pigou's "economic welfare" = part measurable by money.
• **Three Pigouvian issues:**
  • **(1) Definition/Scope:** Economic welfare vs total welfare. Limitation: arbitrary division — many factors (environment, relationships) affect welfare but resist monetization.
  • **(2) Dual conditions for max SW:** (i) Maximize national income; (ii) Transfer income from rich to poor (based on diminishing MU of income + equal capacity for satisfaction). Criticism: equal capacity assumption is scientifically untenable (Robbins).
  • **(3) Private vs Social cost (externalities):** Divergence justifies taxes/subsidies. Criticism: quantification difficult; structural failures pervasive.
**→ See:** answers-welfare.md for full derivation

### Question 2
**Q:** Derive the grand utility possibility frontier and determine the 'point of bliss'. Does this ensure maximum SW?
**A:**
• **GUPF** = outer envelope of all UPFs from every product-mix on the PPC. Each UPF is derived from efficient distribution of a given output.
• **Point of bliss** = tangency between GUPF and highest attainable social indifference contour: slope(GUPF) = ($\partial$W/$\partial$U_A)/($\partial$W/$\partial$U_B).
• **Does it ensure max SW?** YES — it identifies the constrained maximum given resources and SWF. **NO —** it depends on the specific SWF chosen. Different value judgements $\to$ different bliss points. Pareto optimality is necessary but not sufficient.
**→ See:** answers-welfare.md for full derivation

### Question 3
**Q:** Define social welfare. Explain criteria: (i) Growth of GNP (ii) Bentham (iii) Cardinalist.
**A:**
• **Social welfare** = aggregate well-being; welfare economics evaluates allocative/distributional states.
• **(i) GNP growth (Smith):** ∆W > 0 if ∆GNP > 0. **Good:** objectively measurable. **Bad:** ignores distribution, pollution, inequality.
• **(ii) Bentham (Utilitarian):** W = ΣUᵢ, "greatest good for greatest number." **Problem:** additive utility requires cardinality + interpersonal comparability; "greatest good" vs "greatest number" can conflict.
• **(iii) Cardinalist:** Diminishing MU of income $\implies$ redistribute to equalize incomes $\implies$ max SW. **Problem:** assumes identical utility functions — empirically false; ignores incentive effects.
**→ See:** answers-welfare.md for full derivation

### Question 4
**Q:** Define social welfare function. Derive GUPF and point of bliss.
**A:**
• **SWF:** W = F(U₁,...,Uₙ) — rule ranking social states by utility levels. Introduced by Bergson (1938).
• **GUPF derivation:** (1) PPC $\to$ product-mix. (2) For each product-mix, UPF = efficient utility pairs. (3) GUPF = envelope of all UPFs.
• **Point of bliss:** tangency of GUPF with highest SWF contour. Condition: slope(GUPF) = ($\partial$W/$\partial$U_A)/($\partial$W/$\partial$U_B) AND MRPT = MRS^A = MRS^B (Pareto efficiency).
• Bliss point depends on SWF — different value judgements $\to$ different points.
**→ See:** answers-welfare.md for full derivation

### Question 5
**Q:** Critically explain three key things Pigou dealt with in social welfare analysis.
**A:**
• **(1) Definition:** Economic welfare = "that part of social welfare measurable by money." Limitation: arbitrary economic/non-economic boundary (Robbins).
• **(2) Dual conditions:** (i) National income growth $\to$ SW↑ (if distribution constant). (ii) Redistribution from rich to poor $\to$ SW↑ (diminishing MU, equal capacity). Criticism: equal capacity assumption is a value judgement, not science.
• **(3) Private vs Social net product (externalities):** Divergence $\to$ tax/subsidize. Criticism: hard to quantify; structural failures pervasive.
• **Overall:** Pigou = father of welfare economics, but cardinal utility assumption and arbitrary welfare dichotomy limit his framework.
**→ See:** answers-welfare.md for full derivation

### Question 6
**Q:** Define social welfare function. How could it be used as a criterion to measure SW?
**A:**
• **SWF:** W = F(U₁,...,Uₙ) — complete ranking of social states. Bergson-Samuelson form embodies ethical value judgements.
• **Uses:** (1) Compare states: W' > W $\implies$ S' better than S. (2) Constrained optimization: max W subject to GUPF $\to$ bliss point. (3) Evaluate Pareto-incomparable changes (winners vs losers).
• **Advantages:** explicit value judgements, complete ranking, framework for policy.
• **Limitations:** Arrow's Impossibility Theorem, requires interpersonal comparisons, no objective construction.
**→ See:** answers-welfare.md for full derivation

### Question 7
**Q:** What are the major assumptions of SW maximization in a 2×2×2 model?
**A:**
• **Structural:** 2 factors (L,K fixed), 2 goods (X,Y), 2 consumers (A,B), each firm produces one good.
• **Efficiency (Pareto):** (1) MRS^A = MRS^B, (2) MRTS^X = MRTS^Y, (3) MRPT = MRS.
• **Perfect competition:** price-taking, complete markets, no externalities, no public goods, convex preferences/technology, perfect information, factor mobility.
• **Distributional (beyond Pareto):** Existence of SWF, concave SWF (inequality aversion), value judgements about interpersonal comparisons.
• **Regularity:** Continuous, strictly quasiconcave utility; concave PPC; convex social indifference curves.
**→ See:** answers-welfare.md for full derivation

### 5B — Pareto Optimality & Welfare Theorems

| # | Question | Marks | Source | Year |
|---|----------|-------|--------|------|
| 1 | "Pareto optimality is necessary but not sufficient for social welfare maximization" — justify with 2×2×2 model. | 10/7 | MainQ GE Q4a, Batch 46 A1a, Professor Q2 | —, 2020 |
| 2 | Explain assumptions about marginal utility of money for Hicks-Kaldor compensation to be correct. Can compensation be correct? | 10/7 | MainQ GE Q4b, Batch 46 A1b, Professor Q3 | —, 2020 |
| 3 | In a 2-person 2-good case (fixed supply), show with equations how Pareto optimality for consumption is achieved. | 7 | Batch 46 A2a | 2020 |
| 4 | Firm 1 external economies, firm 2 external diseconomies. p₁=p₂=15. Cost functions given. Show Pareto optimality through taxes/subsidies. Find social dividend. | 7 | Batch 46 A2b | 2020 |
| 5 | State and explain First and Second Welfare Theorems with implications. | 8 | Batch 46 A3a | 2020 |
| 6 | What is social welfare function? Explain Utilitarian vs Rawlsian welfare functions. | 6 | Batch 46 A3b | 2020 |
| 7 | Explain the Hicks-Kaldor compensation principle. How did Scitovsky correct the contradiction? | 8 | Batch 48 Q8a | 2023 |
| 8 | Does perfect competition ensure welfare maximization? Examine. | — | Professor (Given) Q8 | — |

### Question 1
**Q:** "Pareto optimality necessary but not sufficient for SW maximization" — justify with 2×2×2 model.
**A:**
• **Necessary:** Any SW maximum must be Pareto-optimal — if resources were wasted, welfare could rise without harming anyone.
• **Not sufficient:** All points on the GUPF are Pareto-optimal (infinite set), but only the tangency point with the SWF maximizes social welfare.
• **In 2×2×2:** Points c, c₁, d on same GUPF are all Pareto-optimal. Only the point where GUPF tangent to highest social indifference contour yields max SW — requires distributional value judgments beyond Pareto.
• Bergson SWF > Pareto for sufficiency: Pareto identifies efficiency; SWF selects the best among efficient points.
**→ See:** answers-welfare.md for full derivation

### Question 2
**Q:** Assumptions about MU of money for Hicks-Kaldor compensation. Can compensation be correct?
**A:**
• **Hicks-Kaldor:** Change is welfare-improving if gainers could potentially compensate losers and still be better off.
• **Assumptions:** (1) Constant MU of money across individuals; (2) No income effects on valuations; (3) Ordinal utility sufficient (but money metric implicitly cardinal).
• **Can compensation be correct?**
  • **YES only if MU of money is equal across individuals.** Then £1 gain = £1 loss in utility.
  • **NO if MU differs:** Rich gaining £2000 (low MU) vs poor losing £1000 (high MU) $\to$ total utility may fall despite Kaldor-Hicks passing.
  • **Potential $\neq$ actual:** If compensation not paid, losers actually worse off.
• **Robbins critique:** Interpersonal comparisons lack scientific basis. Scitovsky paradox: Kaldor-Hicks can produce A > B and B > A simultaneously.
**→ See:** answers-welfare.md for full derivation

### Question 3
**Q:** 2-person 2-good fixed supply: show Pareto optimality for consumption with equations.
**A:**
• **Setup:** Max U_A(X_A,Y_A) s.t. U_B(X̄-X_A, Ȳ-Y_A) $\ge$ Ū_B.
• **Lagrangian:** ℒ = U_A(X_A,Y_A) + $\lambda$[U_B(X̄-X_A, Ȳ-Y_A) - Ū_B].
• **FOCs:** $\partial$U_A/$\partial$X_A = $\lambda$$\cdot$$\partial$U_B/$\partial$X_B, $\partial$U_A/$\partial$Y_A = $\lambda$$\cdot$$\partial$U_B/$\partial$Y_B.
• **Dividing:** ($\partial$U_A/$\partial$X_A)/($\partial$U_A/$\partial$Y_A) = ($\partial$U_B/$\partial$X_B)/($\partial$U_B/$\partial$Y_B) $\implies$ **MRS^A_xy = MRS^B_xy**.
• **Interpretation:** If MRS differ, both gain from trade until equalization. Contract curve = locus of MRS_A = MRS_B in Edgeworth box.
• Infinite Pareto-optimal points exist — each corresponds to a different utility distribution.
**→ See:** answers-welfare.md for full derivation

### Question 4
**Q:** Firm 1 external economies, firm 2 diseconomies. p₁=p₂=15. Show Pareto optimality through taxes/subsidies. Find social dividend.
**A:**
• **Externalities:** Firm 1: C₁ = 0.1q₁²+5q₁-0.1q₂² (external economy from Firm 2). Firm 2: C₂ = 0.2q₂²+7q₂+0.025q₁² (external diseconomy from Firm 1).
• **Private optimum (MC=p):** q₁=50, q₂=20. Total profit = 307.5.
• **Social optimum (joint profit max):** SMC₁=0.25q₁+5=15 $\implies$ q₁=40; SMC₂=0.2q₂+7=15 $\implies$ q₂=40. Total profit = 360.
• **Tax on Firm 1:** t = $\partial$C₂/$\partial$q₁ = 0.05(40) = 2/unit. **Subsidy to Firm 2:** s = -$\partial$C₁/$\partial$q₂ = 0.2(40) = 8/unit.
• **Social dividend = 360 - 307.5 = 52.5** (net gain from correcting externalities).
**→ See:** answers-welfare.md for full derivation

### Question 5
**Q:** State and explain First and Second Welfare Theorems with implications.
**A:**
• **First Welfare Theorem:** Every competitive equilibrium is Pareto-optimal (given LNS, perfect competition, complete markets, no externalities). The price mechanism coordinates decentralized decisions to achieve efficiency.
• **Second Welfare Theorem:** Any Pareto-optimal allocation can be realized as a competitive equilibrium with appropriate lump-sum transfers (given convexity). Efficiency and equity can be separated.
• **Comparison:**
  • First: Competitive equilibrium $\to$ Pareto optimality. Policy: markets work.
  • Second: Pareto optimality $\to$ Competitive equilibrium with transfers. Policy: redistribute endowments, then let markets work.
• **Failures:** Market power, externalities, public goods, incomplete markets, asymmetric information, non-convexity.
**→ See:** answers-welfare.md for full derivation

### Question 6
**Q:** What is social welfare function? Explain Utilitarian vs Rawlsian welfare functions.
**A:**
• **SWF:** W = F(U₁,...,Uₙ) — rule for ranking social states based on utility levels.
• **Utilitarian (Bentham):** W = ΣUᵢ. Linear social indifference contours (slope -1). Only total utility matters — distribution irrelevant. Weakness: ignores inequality.
• **Rawlsian (maximin):** W = min{U₁,...,Uₙ}. L-shaped (right-angle) contours. Only the worst-off matters — society is infinitely inequality-averse. Weakness: extreme — may justify very inefficient redistributions.
• Other forms: Nash (W = ΠUᵢ), Bergson-Samuelson (general), weighted utilitarian (W = Σ$\alpha$ᵢUᵢ).
**→ See:** answers-welfare.md for full derivation

### Question 7
**Q:** Explain Hicks-Kaldor compensation principle. How did Scitovsky correct the contradiction?
**A:**
• **Hicks-Kaldor:** Change improves SW if gainers could potentially compensate losers. Based on WTP vs WTA comparison.
• **Scitovsky paradox:** If UPFs intersect, Kaldor-Hicks can give A > B and B > A simultaneously — a logical contradiction.
• **Scitovsky double test:** (i) Forward test: gainers' WTP > losers' WTA ✓. (ii) Reversal test: losers cannot bribe gainers to oppose the change ✓. Both must pass for a genuine welfare improvement.
• **Limitations:** Potential $\neq$ actual compensation; ignores income distribution; assumes constant MU of money.
**→ See:** answers-welfare.md for full derivation

### Question 8
**Q:** Does perfect competition ensure welfare maximization? Examine.
**A:**
• **YES — ensures Pareto efficiency** (First Welfare Theorem): MRS^A = MRS^B, MRTS^X = MRTS^Y, MRPT = MRS automatically satisfied.
• **NO — does NOT guarantee SW maximization because:**
  • (1) Pareto optimality $\neq$ SW max — competition places us somewhere on GUPF, not necessarily the bliss point.
  • (2) Outcome depends on initial endowments — different endowments $\to$ different Pareto-optimal points.
  • (3) Market failures (monopoly, externalities, public goods, asymmetric info) prevent even Pareto optimality.
  • (4) Distributional equity requires lump-sum transfers (Second Welfare Theorem) beyond what markets provide.
• **Necessary but not sufficient** — combine competition (efficiency) + transfers (equity) + SWF (distributional choice).
**→ See:** answers-welfare.md for full derivation

---

## 6. General Equilibrium

### 6A — Existence, Uniqueness, Stability

| # | Question | Marks | Source | Year |
|---|----------|-------|--------|------|
| 1 | Define general equilibrium. How does it differ from partial equilibrium? Examine with examples. | 8/— | MainQ GE Q1a, Professor Q9 | — |
| 2 | Graphically explain problems of existence, uniqueness, and stability in GE. | 12 | MainQ GE Q1b | — |
| 3 | Explain existence, uniqueness, stability of GE. Show: i) Existence at positive price ii) Stability from demand/supply slopes iii) Uniqueness from excess demand slope. | 7 | Batch 47 Q7a | 2022 |
| 4 | Graphically explain: external shock in product market $\to$ factor market $\to$ equilibrium restored in both markets. | 7/— | Batch 47 Q7b, Professor Q12 | 2022 |

### Question 1
**Q:** Define general equilibrium. How differs from partial equilibrium? Examples.
**A:**
• **GE:** All markets and all decision-makers simultaneously in equilibrium — every market cleared at positive prices, utility/profit maximized.
• **PE (partial eq):** Single market in isolation, ceteris paribus. **GE:** All markets simultaneously, cross-market feedback modeled.
• **Example:** Drought destroys wheat. PE: wheat price ↑. GE: wheat ↑ $\to$ bread ↑ $\to$ rice substitute ↑ $\to$ land shifts from cotton to wheat $\to$ cotton ↑ $\to$ textiles ↑ $\to$ factor markets adjust $\to$ all prices change.
• GE captures feedback loops PE misses: factor price changes, income effects, cross-price effects.
**→ See:** answers-ge-game-extern-trade.md for full derivation

### Question 2 & 3
**Q:** Explain existence, uniqueness, stability of GE graphically.
**A:**
• **(i) Existence:** Does any P > 0 clear all markets? Requires excess demand E(P) = Q_D - Q_S continuous, with E(P) > 0 at low P and E(P) < 0 at high P (Intermediate Value Theorem). No equilibrium if D and S never intersect.
• **(ii) Uniqueness:** Is there exactly one equilibrium? If E(P) is monotonic (dE/dP < 0 $\forall$ P), unique. Multiple intersections of D and S $\to$ multiple equilibria.
• **(iii) Stability:** If displaced, does the system return? Stable if dE/dP < 0 at eq (D cuts S from above). Unstable if dE/dP > 0. Walrasian tâtonnement: auctioneer adjusts P proportionally to E(P).
• Arrow-Debreu (1954): existence requires perfect competition, no indivisibilities, no IRS, continuous convex preferences/production.
**→ See:** answers-ge-game-extern-trade.md for full derivation

### Question 4
**Q:** Graphically explain: external shock in product market $\to$ factor market $\to$ equilibrium restored.
**A:**
• **Chain:** Taste shift toward X $\to$ D_X ↑ $\to$ P_X ↑ $\to$ excess profits in X $\to$ X expands $\to$ D for L and K ↑ $\to$ w_X ↑, r_X ↑. Simultaneously Y contracts $\to$ w_Y ↓, r_Y ↓.
• **Factor mobility:** L and K migrate from Y to X until factor prices equalize across industries.
• With X less capital-intensive than Y (Stolper-Samuelson): net D for L rises (w↑), net D for K falls (r↓).
• **Long run:** Entry into X shifts S_X right $\to$ P_X↓; exit from Y shifts S_Y left $\to$ P_Y↑. New GE at (P_X₂,P_Y₂,w₂,r₂) with normal profits restored.
• Draw 8-panel Koutsoyiannis diagram showing all linkages.
**→ See:** answers-ge-game-extern-trade.md for full derivation

### 6B — Edgeworth Box & 2×2×2 Model

| # | Question | Marks | Source | Year |
|---|----------|-------|--------|------|
| 1 | Explain with assumptions of 2×2×2 model, production equilibrium in simple GE through Edgeworth box. | 10 | MainQ GE Q2a | — |
| 2 | Graphically explain: external shock in product market affects factor market $\to$ equilibrium restored in both markets. | 10 | MainQ GE Q2b | — |
| 3 | Explain production/consumption/simultaneous equilibrium in simple GE through Edgeworth box. | — | 49Qs Q8, Professor Q13 | — |
| 4 | Define general equilibrium. How differs from partial equilibrium? Examine with example. | — | 49Qs Q9, Professor Q14 | — |
| 5 | What are assumptions of 2×2×2 model? How is GE reached in such model? | — | 49Qs Q10, Professor Q16 | — |
| 6 | Exchange economy: A: U_A = X_A Y_A, B: U_B = X_B + Y_B. Endowments given. Draw Edgeworth box, check Pareto efficiency, find contract curve, check if allocation is Pareto efficient / in core. | 14 | Batch 47 Q8 | 2022 |
| 7 | Present a 2×2×2 Walrasian system. Does GE solution exist in such model? Explain. | — | Professor Q15 | — |
| 8 | Three-good world: excess demand functions given. Find Z₁ via Walras' law. Solve price ratios. | ~4 | Batch 48 Q6b | 2023 |

### Question 1
**Q:** Explain 2×2×2 model assumptions and production equilibrium via Edgeworth box.
**A:**
• **Assumptions:** 2 factors (L,K fixed, homogeneous, divisible), 2 goods (X,Y, CRTS, smooth isoquants), 2 consumers (ordinal convex ICs), max behavior, perfect competition, full employment, no externalities.
• **Edgeworth production box:** dimensions = total K × total L. X-isoquants from SW origin, Y-isoquants from NE origin.
• **Contract curve:** locus of tangency points — MRTSˣ_LK = MRTSʸ_LK. Points on curve = Pareto-efficient in production.
• Off-curve points (e.g., Z): inefficient — reallocation can increase both outputs.
• Under perfect competition: MRTS = w/r (same for both firms) ensures equilibrium on contract curve.
**→ See:** answers-ge-game-extern-trade.md for full derivation

### Question 2
**Q:** Graphically explain: external shock $\to$ factor market $\to$ equilibrium restored in both markets.
**A:**
• Identical mechanism to Topic 6A Q4. Taste shift toward X: D_X↑ $\to$ P_X↑ $\to$ profits in X $\to$ expand $\to$ factor demand↑ $\to$ w↑, r↑. Y contracts $\to$ factor demand↓.
• Factor mobility from Y to X. With X less capital-intensive: net L demand↑ (w rises overall), net K demand↓ (r falls overall).
• Long-run entry/exit shifts supply curves. New GE with (P_X₂,P_Y₂,w₂,r₂), normal profits.
• The key Stolper-Samuelson insight: factor intensities determine whether w and r rise or fall.
**→ See:** answers-ge-game-extern-trade.md for full derivation

### Question 3
**Q:** Explain production/consumption/simultaneous equilibrium in GE through Edgeworth box.
**A:**
• **(a) Production equilibrium:** MRTSˣ_LK = MRTSʸ_LK = w/r. Edgeworth production contract curve $\to$ PPC.
• **(b) Consumption equilibrium:** MRSᴬ_xy = MRSᴮ_xy = P_X/P_Y. Edgeworth consumption box within product-mix (X_e,Y_e).
• **(c) Simultaneous equilibrium:** MRPT_xy = MRSᴬ_xy = MRSᴮ_xy (= P_X/P_Y under perfect competition). Production sector's plans consistent with households' plans.
• The three conditions together = Fundamental Condition of Pareto Optimality.
**→ See:** answers-ge-game-extern-trade.md for full derivation

### Question 4
**Q:** Define general equilibrium. How differs from partial equilibrium? Example.
**A:**
• **GE:** All markets and agents simultaneously in equilibrium. **PE:** single market in isolation.
• PE ignores cross-market feedback; GE models full interdependence.
• **Example (coffee/tea):** Frost destroys coffee. PE: coffee price ↑. GE: coffee ↑ $\to$ switch to tea $\to$ tea ↑ $\to$ tea farmers expand $\to$ factor demand in tea ↑ $\to$ wages ↑ $\to$ income ↑ $\to$ further demand shifts $\to$ all markets adjust.
• GE determines relative prices only (numeraire needed). Uses system of simultaneous equations.
**→ See:** answers-ge-game-extern-trade.md for full derivation

### Question 5
**Q:** What are assumptions of 2×2×2 model? How is GE reached?
**A:**
• **Assumptions:** (1) 2 factors (L,K fixed); (2) 2 goods (CRTS, no externalities); (3) 2 consumers (convex ordinal ICs); (4) Max behavior; (5) Factor ownership + full employment; (6) Perfect competition.
• **How GE reached:** (1) Production: MRTS = w/r $\to$ Edgeworth contract curve $\to$ PPC. (2) Output mix: MRPT = P_X/P_Y. (3) Consumption: MRS = P_X/P_Y $\to$ Edgeworth consumption contract curve. (4) Simultaneous: MRPT = MRS $\to$ production consistent with consumption. (5) All prices determined as ratios (numeraire needed). 18 equations with 18 unknowns, but one redundant (Walras' law) $\to$ numeraire resolves.
**→ See:** answers-ge-game-extern-trade.md for full derivation

### Question 6
**Q:** Exchange economy: A: U_A = X_A Y_A, B: U_B = X_B + Y_B. Endowments: A(10,50), B(50,10). Find contract curve, check efficiency.
**A:**
• **MRS_A = Y_A/X_A** (Cobb-Douglas). **MRS_B = 1** (perfect substitutes, MU = 1 for both goods).
• **Pareto efficiency condition (interior):** MRS_A = MRS_B $\implies$ Y_A = X_A.
• **Contract curve:** Y_A = X_A (for interior allocations where B consumes both goods).
• **Endowment (10,50):** MRS_A = 50/10 = 5 $\neq$ 1 = MRS_B. Since MRS_A > MRS_B, A values Y more than B does $\to$ mutually beneficial trade possible. **Not Pareto-efficient.**
• **Allocation (80,50):** infeasible — total X = 60, so X_A cannot exceed 60. Outside the Edgeworth box.
• With B's linear utility, corner solutions possible: if P_X $\neq$ P_Y, B consumes only the cheaper good.
**→ See:** answers-ge-game-extern-trade.md for full derivation

### Question 7
**Q:** Present a 2×2×2 Walrasian system. Does GE solution exist?
**A:**
• **18 unknowns:** quantities demanded (4), factor supplies (4), factor demands (4), output supplies (2), prices (4).
• **18 equations:** demand functions (4), factor supply functions (4), factor demand functions (4), output supply functions (2), market-clearing (4).
• Walras' Law: one equation redundant $\to$ 17 independent eq, 18 unknowns. Numeraire (set one price = 1) $\to$ 17 unknowns. System determinate **in relative prices**.
• **Arrow-Debreu existence** requires: perfect competition, no indivisibilities, no IRS, convex preferences/production, continuous excess demands. Under these: **YES, GE exists**.
• Without these (oligopoly, indivisibilities, IRS): existence not guaranteed.
**→ See:** answers-ge-game-extern-trade.md for full derivation

### Question 8
**Q:** Three-good world: excess demands given. Find Z₁ via Walras' law. Solve price ratios.
**A:**
• **Walras' law:** p₁Z₁ + p₂Z₂ + p₃Z₃ = 0 $\implies$ Z₁ = -(p₂/p₁)Z₂ - (p₃/p₁)Z₃.
• For the specific Z₂, Z₃ functions: Z₁ = -4 + (6p₃ - p₂)/p₁.
• Set P₁ = 1 (numeraire). Solve Z₂ = 0 and Z₃ = 0 for p₂,p₃.
• Solution: p₂ = 10/17, p₃ = 13/17. Verify Z₁ = 0 automatically via Walras' law.
• Key insight: only n-1 equations needed — the nth market clears automatically.
**→ See:** answers-ge-game-extern-trade.md for full derivation

---

## 7. Game Theory & Industrial Organization

| # | Question | Marks | Source | Year |
|---|----------|-------|--------|------|
| 1 | Define Nash equilibrium. Duopoly: MC=$10, q₁=100-2p₁+p₂, q₂=100-2p₂+p₁. Solve Bertrand equilibrium. Explain as Nash equilibrium. | 8 | Batch 46 B4a | 2020 |
| 2 | What is Prisoners' dilemma? Explain implications for oligopolistic market. Strategic interaction? | 6 | Batch 46 B4b | 2020 |
| 3 | Two firms considering entry. Market supports only one. Firm B observes A's decision. Present in extensive form, apply backward induction. | 6 | Batch 46 B5a | 2020 |
| 4 | Show "down/right" can be subgame perfect Nash equilibrium if infinitely repeated (grim trigger). Given payoff matrix. | 8 | Batch 46 B5b | 2020 |
| 5 | Paradox of backward induction. How can multiple Nash equilibrium help avoid it? | 8 | Batch 46 B6a | 2020 |
| 6 | If players initially cooperate (play across), paradox partially overcome — explain with Centipede game (Rosenthal). | 6 | Batch 46 B6b | 2020 |

### Question 1
**Q:** Define Nash equilibrium. Bertrand duopoly: q₁=100-2p₁+p₂, q₂=100-2p₂+p₁, MC=10. Solve Bertrand equilibrium.
**A:**
• **Nash equilibrium:** Each player's strategy is a best response to the other's — no unilateral profitable deviation.
• **Bertrand with differentiated products:** $\pi$₁ = (p₁-10)(100-2p₁+p₂). FOC: $\partial$$\pi$₁/$\partial$p₁ = 120 - 4p₁ + p₂ = 0 $\implies$ p₁ = 30 + p₂/4 (BR₁). Similarly p₂ = 30 + p₁/4 (BR₂).
• **Nash eq:** Solve simultaneously $\implies$ p₁* = p₂* = 40. q₁ = q₂ = 60. $\pi$₁ = $\pi$₂ = 1800.
• Prices are **strategic complements** (BR slopes positive: dp₁/dp₂ = 1/4 > 0).
• Check: neither firm can increase profit by unilaterally changing price.
**→ See:** answers-ge-game-extern-trade.md for full derivation

### Question 2
**Q:** What is Prisoners' dilemma? Implications for oligopolistic market?
**A:**
• **PD:** Dominant strategy (defect) leads to collectively worse outcome. Mutual confession (-5,-5) vs mutual non-confession (-1,-1).
• **Oligopoly implications:**
  • (1) **Price competition:** Undercutting is individually rational but jointly destructive (Bertrand paradox).
  • (2) **Advertising wars:** Each firm advertises because rival will — mutual advertising reduces profits.
  • (3) **R&D:** Overinvestment due to fear of being left behind.
• **Escape via repeated games:** With grim trigger/tit-for-tat, cooperation can be sustained if discount factor δ > δ* (Folk Theorem).
**→ See:** answers-ge-game-extern-trade.md for full derivation

### Question 3
**Q:** Two firms considering entry. Market supports only one. Firm B observes A's decision. Extensive form, backward induction.
**A:**
• **Structure:** E chooses IN/OUT. If IN, I chooses Accommodate (A) or Fight (F). Payoffs: (E,I) = (40,40) for (IN,A), (-10,-10) for (IN,F), (0,100) for OUT.
• **Backward induction:** At I's node, A gives 40 > -10 from F $\to$ I accommodates. At E's initial node, IN gives 40 > 0 from OUT $\to$ E enters.
• **SPNE:** (Enter, Accommodate). Payoffs: (40,40).
• **Non-credible threat:** I would like to threaten fight to deter entry, but once E enters, I prefers to accommodate. Subgame perfection eliminates this non-credible threat.
**→ See:** answers-ge-game-extern-trade.md for full derivation

### Question 4
**Q:** Show "down/right" can be SPNE if infinitely repeated with grim trigger.
**A:**
• Stage game: (Down,Right) = (2,2) is the unique Nash equilibrium.
• In infinitely repeated play, cooperative outcome (Up,Left) = (3,3) can be sustained with grim trigger (revert to (Down,Right) forever on deviation).
• **Sustaining condition:** Cooperation PV = 3/(1-δ) $\ge$ deviation PV = 5 + 2δ/(1-δ) $\implies$ δ $\ge$ 2/3.
• If players are sufficiently patient (δ $\ge$ ⅔), (Up,Left) is SPNE with grim trigger punishment to (Down,Right).
• (Down,Right) itself is trivially SPNE as stage-game Nash (play NE every period).
**→ See:** answers-ge-game-extern-trade.md for full derivation

### Question 5
**Q:** Paradox of backward induction. How can multiple Nash equilibrium help avoid it?
**A:**
• **Paradox:** In finite games with unique stage-game NE, backward induction unravels cooperation from the last period. In finitely repeated PD: defect every period — even though both prefer cooperation.
• **Contradicts experimental evidence** — people cooperate in early periods of finitely repeated games.
• **Multiple NE help:** If stage game has multiple equilibria (cooperative + non-cooperative), the endgame does not force defection:
  • (1) Punishment strategies: revert to "bad" equilibrium to deter deviation.
  • (2) Coordination on "good" equilibrium in each period.
  • (3) Reputation effects with incomplete information limit unraveling.
**→ See:** answers-ge-game-extern-trade.md for full derivation

### Question 6
**Q:** Explain Centipede game (Rosenthal) — how initial cooperation helps overcome the paradox.
**A:**
• **Centipede:** Sequential game where players alternately Take/Pass. Pot grows with each Pass, but Taking ends the game. Backward induction predicts immediate Take (1,0) — very inefficient.
• **But** if both Pass to the end, they get (2,2) — collectively superior.
• **Overcoming the paradox:**
  • (1) **Incomplete information:** Small probability of "altruistic" type $\to$ Pass to build reputation (Kreps-Milgrom-Roberts-Wilson).
  • (2) **Multiple NE:** Alternative equilibria (always Pass) can be sustained.
  • (3) **Bounded rationality:** Real players don't fully backward-induct.
  • (4) **Social preferences:** Fairness/reciprocity $\to$ players Pass more than predicted.
• **Key insight:** If players initially cooperate (Pass), the unraveling is partially blocked — they reach middle/late rounds before Take occurs.
**→ See:** answers-ge-game-extern-trade.md for full derivation

---

## 8. Externalities, Public Goods & Information

| # | Question | Marks | Source | Year |
|---|----------|-------|--------|------|
| 1 | What is Tragedy of Commons? Explain with example. | 3 | Batch 46 C7a | 2020 |
| 2 | Two firms: A (steel, pollution x) and B (fishery). Pollution increases B's cost, decreases A's cost. Show private/social costs under: i) individual profit max ii) joint profit max iii) different property rights. | 11 | Batch 46 C7b | 2020 |
| 3 | Show asymmetric information may lead to disappearance of a good from market. | 4 | Batch 46 C8a | 2020 |
| 4 | Using Spence's Model of Education, explain how education works as a signal of worker productivity. | 10 | Batch 46 C8b | 2020 |
| 5 | Define consumption externality. Explain by Bandwagon effect and Snob effect. | — | Professor Q10 | — |
| 6 | Does consumption externality affect GE solution in a 2×2×2 model? | — | Professor Q11 | — |

### Question 1
**Q:** What is Tragedy of Commons? Explain with example.
**A:**
• **Tragedy of Commons (Hardin, 1968):** Common-pool resource without property rights $\to$ each individual rationally depletes the resource, destroying it for everyone.
• **Mechanism:** Each user captures full benefit of extra use but shares the cost — private MB > social MB $\implies$ overuse.
• **Example:** Open-access fishery. Each fisher catches maximally ("if I don't, someone else will") $\to$ overfishing $\to$ stock collapse.
• **Solutions:** Private property rights, regulation (catch limits, quotas), Pigouvian taxes (tax = marginal social damage).
**→ See:** answers-ge-game-extern-trade.md for full derivation

### Question 2
**Q:** Steel-fishery: pollution increases B's cost, decreases A's cost. Show private/social optimum.
**A:**
• Steel mill: C_S(S,x), $\partial$C_S/$\partial$x < 0 (pollution reduces cost). Fishery: C_F(F,x), $\partial$C_F/$\partial$x > 0 (pollution raises cost).
• **(i) Individual max:** Steel sets $\partial$C_S/$\partial$x = 0 (too much pollution, x*). Fishery takes x as given. Result: x* > x° (social optimum).
• **(ii) Joint max:** Merger internalizes externality. FOC: -$\partial$C_S/$\partial$x = $\partial$C_F/$\partial$x (MB = MC). Less pollution: x° < x*. Total profit higher.
• **(iii) Property rights (Coase):** Regardless of who owns rights (steel or fishery), bargaining at zero transaction cost achieves x°. Only distribution differs (who pays whom).
**→ See:** answers-ge-game-extern-trade.md for full derivation

### Question 3
**Q:** Show asymmetric information may lead to disappearance of a good from market.
**A:**
• **Market for Lemons (Akerlof, 1970):** Used cars — sellers know quality, buyers don't.
• 50% peaches (value $10K buyer, $8K seller), 50% lemons ($5K buyer, $3K seller). Full info: both trade.
• **Asymmetric info:** Buyer's WTP = expected value = 0.5×10K + 0.5×5K = $7.5K. Peach owner reservation = $8K > $7.5K $\to$ peaches withdraw.
• **Adverse selection:** Only lemons remain. Buyers update WTP to $5K. Market survives for lemons only.
• **Complete collapse possible** if even lemons' reservation exceeds buyers' WTP.
• Solutions: signaling (warranties), screening, reputation mechanisms.
**→ See:** answers-ge-game-extern-trade.md for full derivation

### Question 4
**Q:** Using Spence's Model of Education, explain education as a signal of worker productivity.
**A:**
• **Setup:** Workers have private type (High or Low productivity). Education is costly but does NOT increase productivity — it signals type. Single-crossing: c_L > c_H (education less costly for H types).
• **Separating PBE:** H acquires education (e=1), L does not (e=0). Firm beliefs: $\mu$(H|e=1)=1, $\mu$(H|e=0)=0. Condition: w_H - w_L $\in$ [c_H, c_L].
• **Pooling PBE:** No one acquires education. Firm's off-equilibrium beliefs pessimistic enough to deter deviation.
• **Key insight:** Education restores information to market via differential cost — it is socially wasteful (no productivity gain) but individually rational for H types.
• Spence won Nobel Prize 2001 for this.
**→ See:** answers-ge-game-extern-trade.md for full derivation

### Question 5
**Q:** Define consumption externality. Explain Bandwagon and Snob effects.
**A:**
• **Consumption externality:** Uᵢ depends on own consumption AND others' consumption — unpriced interdependence.
• **Bandwagon effect (positive externality):** Demand ↑ as more people consume the good (conformity, fashion). Market demand more elastic. Example: smartphones, social media.
• **Snob effect (negative externality):** Demand ↓ as more people consume (desire exclusivity). Market demand less elastic. Example: luxury goods, art.
• **Veblen effect (related):** Demand ↑ with price (conspicuous consumption — price signals status).
• Leibenstein (1950) seminal paper — these effects shift the demand curve itself.
**→ See:** answers-ge-game-extern-trade.md for full derivation

### Question 6
**Q:** Does consumption externality affect GE solution in a 2×2×2 model?
**A:**
• **Yes — the standard 2×2×2 assumes NO consumption externalities** (assumption 3, Koutsoyiannis). If introduced, Pareto optimality fails.
• (1) **Pareto conditions break:** MRS equality no longer sufficient — each consumer's utility depends on others' consumption directly.
• (2) **Missing market:** No price for A's influence on B's utility $\implies$ First Welfare Theorem fails.
• (3) **Bandwagon:** Overconsumption or multiple equilibria. **Snob:** Demand reduction, instability.
• The GE solution may still exist (Arrow-Debreu conditions) but will NOT be Pareto-optimal. Market failure.
**→ See:** answers-ge-game-extern-trade.md for full derivation

---

## 9. Trade & Tariffs

| # | Question | Marks | Source | Year |
|---|----------|-------|--------|------|
| 1 | Domestic demand: Q=250,000-100P. Supply: Q=250P-30,000. Find autarky P, Q. World P_W=600: import/export? $50 tariff: new P, Q_d, Q_s, imports, tariff revenue. Welfare effects (ΔCS, ΔPS, ΔW). VER limiting to 20,000: welfare vs free trade. | ~14 | Batch 48 Q7 | 2023 |

### Question 1
**Q:** Domestic Q_d=250,000-100P, Q_s=250P-30,000. World P_W=600. Tariff $50. VER 20,000. Welfare analysis.
**A:**
• **Autarky:** P=800, Q=170,000.
• **Free trade at P_W=600:** Q_d=190,000, Q_s=120,000 $\implies$ **imports = 70,000**.
• **Tariff $50 (P=650):** Q_d=185,000, Q_s=132,500, imports=52,500. Tariff revenue=$2,625,000.
  • ΔCS = -$9,375,000, ΔPS = +$6,312,500, ΔW = -$437,500 (DWL = production distortion $312,500 + consumption distortion $125,000).
• **VER (20,000 units):** P=$742.86. Imports=20,000. Quota rent = $2,857,200 goes to **foreign exporters** (not domestic govt). ΔW ≈ -$9,285,775 — much worse than tariff.
• **VER vs Tariff:** Tariff generates government revenue; VER transfers this to foreigners. VER is the more costly protectionist instrument.
**→ See:** answers-ge-game-extern-trade.md for full derivation

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
