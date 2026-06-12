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
• Consumer has a well-defined preference relation $\succeq$ over consumption bundles $X = \mathbb{R}^N_+$ and chooses the most-preferred affordable bundle — preferences are primitive, choices are derived from them.
• **Rational preference relation** must satisfy two key axioms: completeness and transitivity (reflexivity is implied).
• **Completeness:** For any $x,y \in X$, either $x \succeq y$ or $y \succeq x$ (or both, $x \sim y$). The consumer can compare ANY two bundles — no refusal to answer.
• **Transitivity:** If $x \succeq y$ and $y \succeq z$ then $x \succeq z$. Prevents preference cycles and money-pump exploitation — essential for consistent choice.
• **Reflexivity** (implied): $x \succeq x$ for all $x$. Follows from completeness + transitivity.
• **Notation:** $x \succ y$ (strict preference) means $x \succeq y$ but not $y \succeq x$; $x \sim y$ (indifference) means $x \succeq y$ and $y \succeq x$.
• **Completeness challenged** — people often cannot compare unfamiliar bundles. "Brother of" counterexample: if John and Bob are not brothers, neither is the brother of the other — relation fails completeness.
• **Transitivity fails** with: indistinguishable alternatives (just-noticeable differences), framing effects, Condorcet paradox (aggregating multiple criteria), or changing preferences over time.
• **Money-pump argument:** Without transitivity, a trader can extract infinite money by selling cycles of preferences — exploitability of intransitive preferences demonstrates why rationality is economically necessary.
• **Economic intuition:** Rational preferences are the foundational assumption of all consumer theory. Every UMP (utility maximization) and EMP (expenditure minimization) problem presupposes them.
• **Exam tip:** For 10-mark questions, define the preference approach, state both axioms, and discuss violations with concrete examples (Condorcet paradox, money-pump). A students give violation examples; B students merely restate definitions.
• **Professor's corner:** Completeness is the most frequently challenged assumption in behavioral economics. Transitivity is required for utility representation. The subtle point that completeness + transitivity together imply reflexivity impresses examiners.

### Question 2
**Q:** Define indifference set. Show strong monotonicity $\implies$ ICs must be downward sloping.
**A:**
• **Indifference set** of bundle $x$: $IND(x) = \{ y \in X : y \sim x \}$ — all bundles the consumer considers equally preferable to $x$.
• **Related sets:** Upper contour set $UCS(x) = \{ y \in X : y \succeq x \}$, Lower contour set $LCS(x) = \{ y \in X : x \succeq y \}$, and $IND(x) = UCS(x) \cap LCS(x)$.
• **Strong monotonicity:** For any $x \neq y$, if $x_k \ge y_k$ for all $k$ and $x_l > y_l$ for at least one good $l$, then $x \succ y$ — more of ANY good strictly increases utility.
• **Proof (by contradiction):** (1) Suppose IC through $x$ were upward-sloping. (2) Then there exists $y$ northeast of $x$ on same IC: $y \gg x$ (more of both goods). (3) By strong monotonicity, $y \gg x \implies y \succ x$. (4) But by IC definition, $y \sim x$. (5) Contradiction — hence ICs cannot be upward sloping.
• **What strong monotonicity rules out:** (i) Upward-sloping ICs (proved above), (ii) Thick indifference curves (points within a thick band are indifferent but differ in quantities), (iii) Bads (goods where more reduces utility).
• **Graphical intuition:** Draw north-east quadrant (region A — strictly better) and south-west quadrant (region B — strictly worse). An upward-sloping IC would place points from region A on the same IC, violating strong monotonicity.
• **Sufficiency vs necessity:** Strong monotonicity is sufficient but NOT necessary for downward-sloping ICs. LNS alone does NOT guarantee downward-sloping ICs (e.g., if one good is a bad).
• **Contrast with weak monotonicity:** Strong monotonicity gives strictly downward-sloping ICs; weak monotonicity gives weakly downward-sloping (allowing vertical/horizontal segments).
• **Economic intuition:** Strong monotonicity formalizes "more is better" — the consumer never becomes satiated in any good. This ensures ICs have negative slope everywhere.
• **Exam tip:** For 7-10 marks, define IND set first (2 marks), then prove SM ⇒ downward-sloping ICs with contradiction argument (4 marks), and illustrate with diagram showing north-east/south-west quadrants (2 marks). Mention what SM rules out (1 mark).

### Question 3
**Q:** What are the twin definitions of convexity? How differ from strong convexity? Examine graphically.
**A:**
• **Definition 1 (convex preferences):** For all $x,y \in X$, if $x \succeq y$ then for any $\alpha \in (0,1)$, $\alpha x + (1-\alpha)y \succeq y$ — convex combination of $x$ and $y$ is at least as good as $y$.
• **Definition 2 (convex UCS):** For every bundle $x$, the upper contour set $UCS(x) = \{ y \in X : y \succeq x \}$ is convex: for any $y,z \in UCS(x)$ and $\lambda \in (0,1)$, $\lambda y + (1-\lambda)z \succeq x$.
• **Equivalence:** Both definitions capture the same idea — consumers prefer averages to extremes (diversification preference). Definition 2 is a geometric restatement of Definition 1.
• **Strong convexity:** For every $x \neq y$ with $x \succeq z$ and $y \succeq z$, then for all $\lambda \in (0,1)$, $\lambda x + (1-\lambda)y \succ z$ — strict inequality.
• **Key difference:** Weak convexity allows chord segments to lie on IC boundary (flat segments — perfect substitutes). Strong convexity requires chord to lie in interior of UCS (strictly bowed ICs).
• **Examples:** Cobb-Douglas $U = X^\alpha Y^\beta$ satisfies both convexity and strong convexity. Perfect substitutes $U = aX + bY$ and perfect complements $U = \min\{aX,bY\}$ satisfy convexity but NOT strong convexity.
• **Utility representation:** Convex preferences correspond to quasiconcave $u(\cdot)$; strong convexity corresponds to strictly quasiconcave $u(\cdot)$.
• **Demand implications:** Convex preferences allow multi-valued Walrasian demand (convex set). Strong convexity ensures single-valued (unique) Walrasian demand.
• **Graphical distinction:** Draw an IC — weak convexity permits linear segments (chord coincides with IC); strict convexity shows ICs strictly bowed inward toward origin (chord lies entirely above IC).
• **Economic intuition:** Convexity reflects diminishing marginal rate of substitution — as you consume more of one good, you need increasingly less of the other to stay indifferent. This underlies interior solutions to UMP.
• **Exam tip:** For 4-10 marks, give both definitions, state equivalence, then contrast with strong convexity. Use a comparison table (convex vs strong) and draw IC shapes (strictly bowed vs linear segments). Know CD vs linear vs Leontief classification cold.

### Question 4
**Q:** Show: Convexity of preference $\iff$ UCS(x) convex $\iff$ u(.) quasiconcave.
**A:**
• **(1) Convex preference $\iff$ convex UCS:** This is definitional — Definition 2 of convexity (Q3) directly states that preferences are convex iff the upper contour set of every bundle is convex. Hence the equivalence holds by definition.
• **(2) UCS convex $\iff$ u(.) quasiconcave:** This is the substantive equivalence requiring proof.
• **Quasiconcavity definition:** A function $u(\cdot)$ is quasiconcave if for all $x,y \in X$ and $\lambda \in (0,1)$: $u(\lambda x + (1-\lambda)y) \ge \min\{u(x), u(y)\}$.
• **Proof ($\Rightarrow$):** Assume UCS is convex for all bundles. Take any $x,y$. Let $m = \min\{u(x), u(y)\}$ and $z$ be the bundle achieving $u(z)=m$. Then both $x$ and $y$ lie in $UCS(z)$ since $u(x)\ge m$ and $u(y)\ge m$. By convexity of $UCS(z)$, $\lambda x + (1-\lambda)y \in UCS(z)$, so $u(\lambda x + (1-\lambda)y) \ge m = \min\{u(x),u(y)\}$. Hence $u$ is quasiconcave.
• **Proof ($\Leftarrow$):** Assume $u$ is quasiconcave. Take any $z$ and any $x,y \in UCS(z)$, so $u(x) \ge u(z)$ and $u(y) \ge u(z)$. Then $\min\{u(x),u(y)\} \ge u(z)$. By quasiconcavity, $u(\lambda x + (1-\lambda)y) \ge \min\{u(x),u(y)\} \ge u(z)$. Hence $\lambda x + (1-\lambda)y \in UCS(z)$, so $UCS(z)$ is convex.
• **Chain complete:** Convex preference $\iff$ UCS convex $\iff$ quasiconcave utility.
• **Bordered Hessian condition (for $n>2$):** For differentiable utility, quasiconcavity requires the bordered Hessian principal minors to alternate in sign — the two-good case simplifies to $2u_xu_yu_{xy} - u_x^2u_{yy} - u_y^2u_{xx} \ge 0$.
• **Economic intuition:** Quasiconcavity means the upper contour sets are convex — the set of bundles that are at least as good as any given bundle bulges outward, reflecting diversification preference.
• **Exam tip:** This is the single most tested equivalence in 501 Micro prelims. For 5 marks, state each equivalence clearly and prove the UCS convex $\iff$ quasiconcave direction both ways. The $\min\{u(x),u(y)\}$ trick is the key step. No diagram needed.

### Question 5
**Q:** Prove: If preference satisfies monotonicity and continuity, there exists a utility function u(.) representing it.
**A:**
• **Debreu's theorem:** If a preference relation $\succeq$ satisfies monotonicity and continuity on $X = \mathbb{R}^N_+$, then there exists a continuous utility function $u: X \to \mathbb{R}$ representing $\succeq$.
• **Intuition:** Project every bundle onto the 45-degree line via unique indifference curve intersection — the projection value $t(x)$ becomes the utility number.
• **Proof sketch — Step 1 (setup):** Let $\mathbf{0} = (0,\ldots,0)$. For any bundle $x$, let $m = \max\{x_1,\ldots,x_N\}$ and define $M = (m,\ldots,m)$ on the 45° line.
• **Step 2 (ordering):** By monotonicity, $M \succeq x \succeq \mathbf{0}$. Both $\mathbf{0}$ and $M$ lie on the main diagonal (equal amounts of all goods).
• **Step 3 (construct candidate):** Define $A = \{ t \in [0,m] : (t,\ldots,t) \preceq x \}$ and $B = \{ t \in [0,m] : (t,\ldots,t) \succeq x \}$.
• **Step 4 (intersection):** Monotonicity ensures $A$ and $B$ are non-empty and partition $[0,m]$. By continuity, both $A$ and $B$ are closed. Since a closed interval cannot be partitioned into two disjoint closed sets, the intersection is non-empty — there exists a unique $t(x)$ such that $(t(x),\ldots,t(x)) \sim x$.
• **Step 5 (utility):** Set $u(x) = t(x)$. For any $x,y$: $x \succeq y \iff t(x) \ge t(y) \iff u(x) \ge u(y)$ — by transitivity and monotonicity of diagonal comparison.
• **Continuity of $u$:** Follows from the continuity of preferences and the closed-set construction.
• **Why continuity is necessary:** Lexicographic preferences satisfy monotonicity but NOT continuity — they cannot be represented by any utility function (a classic counterexample).
• **Economic intuition:** The proof constructs a utility function by finding, for each bundle, a unique indifference-curve intersection on the 45° ray. This construction works because monotonicity ensures all bundles lie between the origin and some point on the diagonal.
• **Exam tip:** For 5 marks, memorize the structure: $\mathbf{0} \to M \to t(x) \to u(x)=t(x)$. State monotonicity orders bundles on diagonal; continuity guarantees the intersection exists. List three steps: (i) monotonicity orders diagonal, (ii) $A$ and $B$ sets partition $[0,m]$, (iii) continuity implies both closed ⇒ non-empty intersection.

### Question 6
**Q:** Define utility function. Explain desirability by monotonicity and strong monotonicity.
**A:**
• **Utility function:** A function $u: X \to \mathbb{R}$ that represents preference relation $\succeq$ if, for every $x,y \in X$, $x \succeq y \iff u(x) \ge u(y)$.
• **Ordinality:** Only the ranking matters, not the numerical magnitude. Any strictly increasing transformation $v = f(u(x))$ (with $f' > 0$) represents the same preferences — e.g., $u = x^\alpha y^\beta$ and $v = \alpha \ln x + \beta \ln y$ are equivalent.
• **Monotonicity:** For all $x \neq y$: (a) If $x_k \ge y_k$ for ALL goods $k$, then $x \succeq y$. (b) If $x_k > y_k$ for ALL goods $k$, then $x \succ y$. Increasing ALL commodities strictly improves welfare; increasing SOME (without reducing others) cannot hurt.
• **Strong monotonicity:** For all $x \neq y$: if $x_k \ge y_k$ for all goods $k$ AND $x_l > y_l$ for at least one good $l$, then $x \succ y$. Increasing even ONE commodity strictly improves welfare.
• **Key distinction:** Under monotonicity, increasing only good 1 (holding others constant) yields only weak improvement ($x \succeq y$), not strict. Under strong monotonicity, it is strictly better ($x \succ y$).
• **Critical example:** $u = \min\{x_1, x_2\}$ satisfies monotonicity but violates strong monotonicity (increasing only $x_1$ when $\min = x_2$ leaves utility unchanged).
• **IC implications:** Monotonicity gives weakly downward-sloping ICs (permits vertical/horizontal segments). Strong monotonicity gives strictly downward-sloping ICs.
• **LNS relation:** Monotonicity implies LNS (local non-satiation). Strong monotonicity is stronger than needed for most results — LNS is the workhorse assumption for Walras' Law.
• **Utility implications:** Monotonicity means $u$ is weakly increasing in each argument, strictly increasing when all increase. Strong monotonicity means $u$ is strictly increasing in every argument.
• **Economic intuition:** These assumptions formalize "more is better" — they rule out satiation, bads, and bliss points, ensuring the consumer always prefers larger bundles.
• **Exam tip:** For 10 marks, define utility, give translation example, then systematically define and distinguish M and SM with the Leontief counterexample. For 5 marks, concise focus on the utility-desirability link.

### Question 7
**Q:** Show: Strong Monotonicity $\implies$ Monotonicity $\implies$ LNS.
**A:**
• **(SM $\Rightarrow$ M) — Proof:** Take any $x \neq y$. (a) If $x_k \ge y_k$ for all $k$, then by SM: either $x_l > y_l$ for some $l$ giving $x \succ y$, or $x = y$ giving $x \sim y$. Either way, $x \succeq y$ — so monotonicity (a) holds. (b) If $x_k > y_k$ for ALL $k$, then $x_k \ge y_k$ for all $k$ and $x_l > y_l$ for at least one $l$ (in fact all), so by SM, $x \succ y$ — monotonicity (b) holds. Hence SM $\Rightarrow$ M.
• **(M $\Rightarrow$ LNS) — Proof:** LNS: For every $x \in X$ and $\varepsilon > 0$, there exists $y$ with $\|y-x\| < \varepsilon$ such that $y \succ x$.
• **Construction:** Take any $x = (x_1,\ldots,x_N)$ and $\varepsilon > 0$. Set $\delta = \varepsilon/\sqrt{N} > 0$ and define $y = (x_1+\delta,\ldots,x_N+\delta)$.
• **Verification:** $y_k > x_k$ for ALL $k$, so by monotonicity (condition b), $y \succ x$. Distance $\|y-x\| = \sqrt{N\delta^2} = \delta\sqrt{N} = \varepsilon$. Hence for any $\varepsilon > 0$, there exists $y$ within $\varepsilon$ of $x$ that is strictly preferred — precisely LNS.
• **Chain:** Strong Monotonicity $\Rightarrow$ Monotonicity $\Rightarrow$ LNS.
• **Converse does NOT hold:** LNS does NOT imply monotonicity (e.g., preferences with a satiation point and one bad good may satisfy LNS but fail monotonicity). Similarly M does NOT imply SM (Leontief counterexample).
• **Economic intuition — LNS:** The consumer can always find a strictly better bundle arbitrarily close to any given bundle. This is the weakest desirability assumption and the workhorse of modern micro theory — it ensures Walras' Law holds without requiring "more is better" in every dimension.
• **Common mistakes:** (1) For SM ⇒ M, forget to handle the $x=y$ case. (2) For M ⇒ LNS, using $\delta = \varepsilon/2$ with only one good increasing fails under plain monotonicity (only weak preference). The trick is increasing ALL goods by $\delta$.
• **Exam tip:** For 5 marks, prove each arrow cleanly. Draw an $\varepsilon$-ball diagram for the LNS proof. Mention that LNS is the weakest assumption used in UMP (for Walras' Law) and that the converse chain fails — give the Leontief counterexample for M $\not\Rightarrow$ SM.

### Question 8
**Q:** Examine: (i) Homogeneity (ii) Homotheticity.
**A:**
• **(i) Homogeneous of degree k:** $u(ax_1,\ldots,ax_N) = a^k u(x_1,\ldots,x_N)$ for all $a > 0$. Scaling ALL goods by $a$ scales utility by $a^k$.
• **Properties of HD(k) functions:** Derivatives are HD($k-1$). Indifference curves are radial expansions — if $u(y) = u(z)$ then $u(ay) = u(az)$. MRS is constant along rays from origin: $MRS(ax_1,ax_2) = MRS(x_1,x_2)$ (both numerator and denominator scale by $a^{k-1}$, which cancels).
• **Examples:** Cobb-Douglas $u = x^\alpha y^\beta$ is HD($\alpha+\beta$). Perfect substitutes $u = ax + by$ and perfect complements $u = \min\{ax,by\}$ are HD(1). CES is HD(1).
• **(ii) Homothetic:** $u(x)$ is homothetic if it is a monotonic transformation of a homogeneous function: $u(x) = g(v(x))$ where $g' > 0$ and $v$ is HD($k$).
• **Key property:** MRS depends only on the ratio $x_1/x_2$, not on scale or utility level. If $y \sim z$ then $ay \sim az$ for all $a > 0$ (indifference curves are radial expansions).
• **Demand implications:** Engel curves are straight lines through origin. Income elasticity = 1 for all goods (no luxuries or necessities). Expenditure shares are constant as income changes.
• **Homogeneous vs Homothetic:** All homogeneous functions are homothetic (take $g$ as identity). But not all homothetic functions are homogeneous.
• **Key counterexample:** $u = xy + a$ is homothetic (monotonic transform of $xy$, which is HD(2)) but NOT homogeneous: $u(tx,ty) = t^2 xy + a \neq t^k(xy + a)$ for any $k$.
• **Non-examples:** Quasilinear $u = v(x) + y$ is NOT homothetic (Engel curve for $x$ flattens after satiation). Stone-Geary (subsistence) is also not homothetic.
• **Economic intuition:** Homotheticity means consumption patterns scale proportionally with income — rich and poor consume goods in the same ratios. This is a strong assumption, often relaxed in empirical work.
• **Exam tip:** For 5/4 marks, define each, state the MRS-constant-on-rays property, give examples with the $u=xy+a$ counterexample prominently. Distinguish utility homogeneity (preference assumption) from Walrasian demand HD(0) (budget-set property).

### Question 9
**Q:** Prove quasi-concave utility U(X,Y) is identical to dMRS/dX < 0.
**A:**
• **MRS formula:** $MRS_{xy} = MU_x/MU_y = (\partial u/\partial x)/(\partial u/\partial y)$. Along an indifference curve, $du = 0 \implies (\partial u/\partial x)dx + (\partial u/\partial y)dy = 0 \implies dy/dx = -MRS$.
• **Quasiconcavity condition (bordered Hessian):** For two variables, the $(3 \times 3)$ bordered Hessian determinant must be $\ge 0$: $|\overline{H}| = 2u_x u_y u_{xy} - u_x^2 u_{yy} - u_y^2 u_{xx} \ge 0$.
• **Derivation of dMRS/dx:** Differentiate $MRS = u_x/u_y$ along an IC (total derivative, accounting for $y = y(x)$): $\frac{dMRS}{dx} = \frac{u_y[u_{xx} + u_{xy}y'(x)] - u_x[u_{yx} + u_{yy}y'(x)]}{u_y^2}$.
• **Substitute $y'(x) = -u_x/u_y$** along the IC, multiply numerator and denominator by $u_y$, and simplify to: $\frac{dMRS}{dx} = \frac{u_x^2 u_{yy} - 2u_x u_y u_{xy} + u_y^2 u_{xx}}{u_y^3}$.
• **Sign equivalence:** The numerator of $dMRS/dx$ is exactly $-(2u_x u_y u_{xy} - u_x^2 u_{yy} - u_y^2 u_{xx})$, which is the negative of the bordered Hessian numerator.
• Hence: $\frac{dMRS}{dx} < 0 \iff \text{numerator} < 0 \iff 2u_x u_y u_{xy} - u_x^2 u_{yy} - u_y^2 u_{xx} > 0 \iff \text{strict quasiconcavity}$.
• **Interpretation:** Diminishing MRS means as $x$ increases (substituting $x$ for $y$), the consumer requires increasingly less $y$ to give up for an additional unit of $x$ — the IC flattens moving rightward. This is the graphical manifestation of convex preferences.
• **Chain of equivalences:** Convex preferences $\iff$ convex UCS $\iff$ quasiconcave utility $\iff$ diminishing MRS $\iff$ $dMRS/dx < 0$.
• **Economic intuition:** $dMRS/dx < 0$ captures the idea that the willingness to trade $y$ for $x$ declines as the consumer has more $x$ — the psychological law of diminishing marginal rate of substitution.
• **Exam tip:** For 8 marks, show the full derivation. The critical insight is that $dMRS/dx$ shares a numerator with the bordered Hessian (up to sign). Memorize $dMRS/dx$ numerator $= u_x^2 u_{yy} - 2u_x u_y u_{xy} + u_y^2 u_{xx}$ — it reappears in duality theory. Do NOT skip the implicit differentiation step.

### Question 10
**Q:** Does U = X + log(Y) have convex indifference curves? Provide proof.
**A:**
• **Step 1 — MRS computation:** $u(x,y) = x + \ln y$. $MU_x = 1$, $MU_y = 1/y$. Hence $MRS_{xy} = MU_x/MU_y = 1/(1/y) = y$.
• **Step 2 — IC slope:** Along an indifference curve, $du = dx + (1/y)dy = 0 \implies dy/dx = -y$. As $x$ increases, $y$ must decrease to stay on the same IC.
• **Step 3 — dMRS/dx:** Since $MRS = y$, differentiate along IC: $dMRS/dx = dy/dx = -y$.
• **Sign:** For any positive $y$, $dMRS/dx = -y < 0$. Hence MRS is strictly diminishing in $x$ along the IC — confirming **convex indifference curves**.
• **Alternative verification via bordered Hessian:** $u_x = 1$, $u_y = 1/y$, $u_{xx} = 0$, $u_{xy} = 0$, $u_{yy} = -1/y^2$. Bordered Hessian: $2u_x u_y u_{xy} - u_x^2 u_{yy} - u_y^2 u_{xx} = 0 - 1(-1/y^2) - (1/y^2)(0) = 1/y^2 > 0$. Satisfies quasiconcavity condition ✓.
• **Elegant shortcut:** Because $MRS = y$ and we know $y$ decreases along the IC ($dy/dx = -y < 0$), $dMRS/dx < 0$ follows immediately without computing the full bordered Hessian.
• **Economic intuition:** This quasilinear utility function exhibits diminishing marginal utility for $y$ ($MU_y = 1/y$ declines as $y$ increases) but constant marginal utility for $x$ ($MU_x = 1$). The diminishing MRS reflects that as the consumer substitutes $x$ for $y$, the marginal valuation of $y$ rises relative to $x$.
• **Broader significance:** $U = x + \ln y$ is the canonical quasilinear utility function. It has zero income effect for $y$ (demand $y$ independent of income), which implies CV = EV = CS in welfare analysis (Willig bounds).
• **Exam tip:** Short question (~3 marks). Compute MRS, show $dMRS/dx < 0$. The key insight is $MRS = y$, which is decreasing along the IC because $y$ falls as $x$ rises. Including the bordered Hessian verification shows depth beyond the minimum.

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
• **Setup:** $U = x_1^\alpha x_2^\beta$, $\alpha,\beta > 0$, budget $p_1 x_1 + p_2 x_2 = w$. Lagrangian: $\mathcal{L} = x_1^\alpha x_2^\beta + \lambda(w - p_1 x_1 - p_2 x_2)$.
• **FOCs:** $\partial\mathcal{L}/\partial x_1 = \alpha x_1^{\alpha-1}x_2^\beta - \lambda p_1 = 0$, $\partial\mathcal{L}/\partial x_2 = \beta x_1^\alpha x_2^{\beta-1} - \lambda p_2 = 0$, $\partial\mathcal{L}/\partial\lambda = w - p_1 x_1 - p_2 x_2 = 0$.
• **Tangency condition:** Dividing FOC(1) by FOC(2): $\frac{\alpha x_2}{\beta x_1} = \frac{p_1}{p_2} \implies x_2 = \frac{\beta}{\alpha}\frac{p_1}{p_2}x_1$.
• **Walrasian demands:** Substitute tangency into budget: $p_1 x_1 + p_2\left(\frac{\beta}{\alpha}\frac{p_1}{p_2}x_1\right) = w \implies x_1 = \frac{\alpha}{\alpha+\beta}\frac{w}{p_1}$, $x_2 = \frac{\beta}{\alpha+\beta}\frac{w}{p_2}$.
• **Homogeneity of degree 0:** $x_1(tp,tw) = \frac{\alpha}{\alpha+\beta}\frac{tw}{tp_1} = x_1(p,w)$. Scaling all prices and income leaves demands unchanged.
• **Walras' Law:** $p_1 x_1 + p_2 x_2 = \frac{\alpha w}{\alpha+\beta} + \frac{\beta w}{\alpha+\beta} = w$ — all income is spent.
• **Own-price effect:** $\partial x_1/\partial p_1 = -\frac{\alpha}{\alpha+\beta}\frac{w}{p_1^2} < 0$ — usual (non-Giffen) downward-sloping demand.
• **Cross-price effect:** $\partial x_1/\partial p_2 = 0$ — Cobb-Douglas has zero cross-price effects (additive separability of $\log u$).
• **Income effect:** $\partial x_1/\partial w = \frac{\alpha}{\alpha+\beta}\frac{1}{p_1} > 0$ — both goods are normal.
• **Constant expenditure shares:** $s_1 = p_1 x_1/w = \alpha/(\alpha+\beta)$, $s_2 = \beta/(\alpha+\beta)$ — independent of $p$ and $w$. This unique property is the most testable result.
• **Normalization:** Setting $\alpha + \beta = 1$ (common in exams) gives $x_1 = \alpha w/p_1$, $x_2 = (1-\alpha)w/p_2$, shares $\alpha$ and $1-\alpha$.
• **Economic intuition:** Cobb-Douglas represents well-behaved preferences where the consumer allocates fixed budget shares to each good regardless of prices or income — a special but analytically tractable case.
• **Exam tip:** For 7 marks, derive Lagrangian FOCs, obtain tangency, solve for demands, then systematically verify HD(0), Walras' Law, own/cross/income effects. Memorize the constant share result — it is the single most testable property.

### Question 2
**Q:** Cobb-Douglas: Get indirect utility, explain properties, verify Roy's identity.
**A:**
• **Indirect utility derivation:** Substitute Walrasian demands into $u(x_1,x_2)$: $v(p,w) = \left[\frac{\alpha w}{(\alpha+\beta)p_1}\right]^\alpha \left[\frac{\beta w}{(\alpha+\beta)p_2}\right]^\beta = \frac{\alpha^\alpha \beta^\beta}{(\alpha+\beta)^{\alpha+\beta}} \cdot w^{\alpha+\beta} \cdot p_1^{-\alpha} \cdot p_2^{-\beta}$.
• **Compact form:** $v(p,w) = B \cdot w^{\alpha+\beta} \cdot p_1^{-\alpha} \cdot p_2^{-\beta}$ where $B = \alpha^\alpha \beta^\beta/(\alpha+\beta)^{\alpha+\beta}$.
• **Normalized form ($\alpha+\beta=1$):** $v(p,w) = w \cdot p_1^{-\alpha} \cdot p_2^{-(1-\alpha)} \cdot \alpha^\alpha (1-\alpha)^{1-\alpha}$.
• **Property 1 — HD(0):** $v(tp,tw) = B (tw)^{\alpha+\beta} (tp_1)^{-\alpha} (tp_2)^{-\beta} = t^{\alpha+\beta-\alpha-\beta} v(p,w) = v(p,w)$.
• **Property 2 — Monotonicity:** $\partial v/\partial w = (\alpha+\beta)v/w > 0$ (higher income → higher utility). $\partial v/\partial p_1 = -\alpha v/p_1 < 0$ (higher prices → lower utility).
• **Property 3 — Quasiconvexity:** The set $\{(p,w): v(p,w) \le \bar{u}\}$ is convex in $(p,w)$.
• **Roy's identity statement:** $x_k(p,w) = -(\partial v/\partial p_k)/(\partial v/\partial w)$ — recovers Walrasian demand from indirect utility without re-solving the UMP.
• **Verification for good 1:** $\frac{\partial v}{\partial p_1} = -\alpha B w^{\alpha+\beta} p_1^{-\alpha-1} p_2^{-\beta} = -\frac{\alpha v}{p_1}$, $\frac{\partial v}{\partial w} = \frac{(\alpha+\beta)v}{w}$. Hence $-\frac{\partial v/\partial p_1}{\partial v/\partial w} = -\frac{-\alpha v/p_1}{(\alpha+\beta)v/w} = \frac{\alpha w}{(\alpha+\beta)p_1} = x_1(p,w)$ ✓.
• **Verification for good 2:** Similarly, $-\frac{\partial v/\partial p_2}{\partial v/\partial w} = \frac{\beta w}{(\alpha+\beta)p_2} = x_2(p,w)$ ✓.
• **Duality significance:** Roy's identity is the first duality result — it links UMP solution ($x_k$) to the value function ($v$) via simple differentiation, demonstrating that $v$ fully encodes consumer behavior.
• **Exam tip:** For 7 marks, derive $v(p,w)$ from substitution, state three properties (HD(0), monotonicity, quasiconvexity), then verify Roy's identity with explicit derivatives. The normalization $\alpha+\beta=1$ simplifies algebra. Memorize $x_k = -(\partial v/\partial p_k)/(\partial v/\partial w)$ — the minus sign is the most common exam error.

### Question 3
**Q:** Cobb-Douglas: Solve expenditure minimization, examine compensated demand properties.
**A:**
• **EMP setup:** Minimize $p_1 x_1 + p_2 x_2$ subject to $x_1^\alpha x_2^\beta \ge \bar{u}$. Lagrangian: $\mathcal{L} = p_1 x_1 + p_2 x_2 + \mu(\bar{u} - x_1^\alpha x_2^\beta)$.
• **FOCs:** $p_1 = \mu \alpha x_1^{\alpha-1}x_2^\beta$, $p_2 = \mu \beta x_1^\alpha x_2^{\beta-1}$, and $\bar{u} = x_1^\alpha x_2^\beta$.
• **Tangency condition (same ratio as UMP!):** $\frac{p_1}{p_2} = \frac{\alpha x_2}{\beta x_1} \implies x_2 = \frac{\beta}{\alpha}\frac{p_1}{p_2}x_1$ — duality in action.
• **Hicksian demand derivation:** Substitute tangency into $x_1^\alpha x_2^\beta = \bar{u}$: $x_1^{\alpha+\beta} \cdot (\beta/\alpha)^\beta \cdot (p_1/p_2)^\beta = \bar{u} \implies h_1(p,\bar{u}) = \bar{u}^{1/(\alpha+\beta)} \cdot (\alpha/\beta)^{\beta/(\alpha+\beta)} \cdot (p_2/p_1)^{\beta/(\alpha+\beta)}$.
• **Hicksian demand for good 2:** $h_2(p,\bar{u}) = \bar{u}^{1/(\alpha+\beta)} \cdot (\beta/\alpha)^{\alpha/(\alpha+\beta)} \cdot (p_1/p_2)^{\alpha/(\alpha+\beta)}$.
• **Normalized form ($\alpha+\beta=1$):** $h_1 = \bar{u} \cdot (\alpha/\beta)^\beta \cdot (p_2/p_1)^\beta$, $h_2 = \bar{u} \cdot (\beta/\alpha)^\alpha \cdot (p_1/p_2)^\alpha$.
• **Expenditure function:** $e(p,\bar{u}) = p_1 h_1 + p_2 h_2 = \bar{u}^{1/(\alpha+\beta)} \cdot (\alpha+\beta) \cdot (p_1/\alpha)^{\alpha/(\alpha+\beta)}(p_2/\beta)^{\beta/(\alpha+\beta)}$.
• **Properties of e(p,u):** HD(1) in $p$: $e(tp,\bar{u}) = t \cdot e(p,\bar{u})$. Strictly increasing in $\bar{u}$. Concave in $p$.
• **Compensated law of demand:** $\partial h_1/\partial p_1 < 0$ — substitution effect is always negative.
• **Shephard's lemma:** $\partial e(p,\bar{u})/\partial p_1 = h_1(p,\bar{u})$ — recovers Hicksian demand from expenditure function (EMP analog of Roy's identity).
• **Duality checks:** $e(p, v(p,w)) = w$ (minimum expenditure to reach $v(p,w)$ is exactly $w$), and $v(p, e(p,\bar{u})) = \bar{u}$ (maximum utility from income $e(p,\bar{u})$ is exactly $\bar{u}$).
• **Key insight:** The tangency condition from EMP yields the SAME ratio $x_2/x_1 = (\beta/\alpha)(p_1/p_2)$ as UMP — duality means the optimal bundle proportions are identical whether maximizing utility or minimizing expenditure.
• **Exam tip:** For 6 marks, set up Lagrangian, derive FOCs, note tangency ratio is same as UMP, solve for Hicksian demands, compute $e(p,u)$, and verify Shephard's lemma. Emphasize duality: $e(p,v(p,w)) = w$ and $v(p,e(p,\bar{u})) = \bar{u}$.

### Question 4
**Q:** Examine properties of Walrasian demand x(p,w). When can UMP sufficient condition be violated?
**A:**
• **Property 1 — Homogeneity of degree 0:** $x(ap,aw) = x(p,w)$ for all $a > 0$. Reason: budget set $\{x: p \cdot x \le w\}$ is identical to $\{x: ap \cdot x \le aw\}$. No preference assumptions needed — purely a budget-set property.
• **Property 2 — Walras' Law:** $p \cdot x = w$ for all $x \in x(p,w)$. Reason (by LNS): if $p \cdot x < w$, there exists $y$ epsilon-close to $x$ with $y \succ x$ and still affordable, contradicting optimality. LNS ensures all wealth is spent.
• **Property 3 — Convexity/Uniqueness:** If preferences are convex, $x(p,w)$ is a convex set (multiple optimal bundles possible). If strictly convex, $x(p,w)$ is single-valued (unique optimum). Linear indifference curves (perfect substitutes) allow multiple optima.
• **Property 4 — Continuity:** $x(p,w)$ is continuous in $(p,w)$ if $u$ is continuous and strictly quasiconcave (by the Maximum Theorem).
• **Other properties:** Normal goods have $\partial x_k/\partial w > 0$; inferior goods have $\partial x_k/\partial w < 0$. Usual goods have $\partial x_k/\partial p_k < 0$; Giffen goods have $\partial x_k/\partial p_k > 0$ (possible despite standard assumptions — due to large negative income effect).
• **When can UMP sufficient conditions be violated?** The Kuhn-Tucker conditions are sufficient when: (1) $u$ is quasiconcave, (2) $u$ is monotone/LNS, (3) $\nabla u \neq 0$.
• **Violation (A) — Non-monotone utility:** If utility is non-monotone (e.g., bliss point), the optimum can be at a corner where $MRS \neq p_1/p_2$. At corner solutions, some goods have zero consumption and $MU_i/p_i < MU_j/p_j$ for consumed goods.
• **Violation (B) — Non-quasiconcave utility:** If $u$ is not quasiconcave (UCS not convex), the tangency condition may identify a minimum or saddle point rather than a maximum. Graphically: the IC may be tangent to the budget line at a point giving LOWER utility than other affordable points.
• **Violation (C) — Zero gradient ($\nabla u = 0$):** If gradient vanishes at some bundle (top of a "mountain"), this is a bliss point. Monotonicity/LNS fails — consumer is satiated. Walras' Law may be violated since the consumer stops spending.
• **Summary table:** Non-monotone → corner solution (budget under-spent). Non-quasiconcave → tangency is minimum, not max. Zero gradient → bliss point, Walras' Law fails. Non-compact budget → no solution (Weierstrass fails).
• **Important distinction:** Giffen behavior is NOT a violation of sufficient conditions — it satisfies all conditions but has a large negative income effect dominating the substitution effect. Do not confuse Giffen goods with non-quasiconcavity.
• **Exam tip:** For 10 marks, list each property with economic intuition (3 each), then discuss three violation cases with diagrams. The corner solution case ($x_1 = 0$) is the most commonly tested. State the three sufficient conditions explicitly: quasiconcavity, monotonicity/LNS, non-zero gradient.

### Question 5
**Q:** Examine: (i) Homogeneity (ii) Homotheticity.
**A:**
• **(i) Homogeneity of Walrasian demand:** $x(ap,aw) = x(p,w)$ for all $a > 0$. Reason: the budget set $\{x: p \cdot x \le w\}$ is identical to $\{x: ap \cdot x \le aw\}$ — scaling all prices and income by same factor does not change feasible set.
• **Implication:** Demand depends only on relative prices and real income, not on nominal magnitudes. If all prices and income double, the consumer buys exactly the same bundle.
• **For indirect utility:** $v(p,w)$ is HD(0) in $(p,w)$. **For expenditure function:** $e(p,u)$ is HD(1) in $p$. **For Hicksian demand:** $h(p,u)$ is HD(0) in $p$.
• **Key contrast:** HD(0) of Walrasian demand is a property of any UMP solution — no preference assumptions needed; it follows from budget-set homogeneity. This differs from utility homogeneity (Section 1A Q8) which IS a preference assumption.
• **(ii) Homothetic preferences:** A preference relation is homothetic if all indifference sets are related by proportional expansions along rays: if $x \sim y$ then $ax \sim ay$ for all $a > 0$.
• **Characterization:** MRS depends only on the ratio $x_1/x_2$, not on scale or utility level. Indifference curves are radial replicas of each other.
• **Demand implications of homotheticity:** Engel curves are linear through origin (income elasticity = 1 for all goods). Expenditure shares constant as income changes. Income expansion paths are rays from origin. No luxuries or necessities — all goods have unit income elasticity.
• **Income-linearity result:** Under homotheticity, $x(p,w) = x(p,1) \cdot w$ — Walrasian demand is linear in income. This is the most testable corollary.
• **Examples:** Cobb-Douglas (constant shares $\alpha,\beta$), CES $u = (a x_1^\rho + b x_2^\rho)^{1/\rho}$, perfect substitutes $u = ax + by$, perfect complements $u = \min\{ax,by\}$.
• **Non-examples:** Quasilinear $u = v(x) + y$ (Engel curve for $x$ flattens after satiation — NOT homothetic). Stone-Geary with subsistence requirements (shares vary with income).
• **Homogeneous vs Homothetic:** Homogeneous utility $\Rightarrow$ homothetic preferences. Converse does NOT hold — e.g., $u = xy + a$ is homothetic (transform of HD(2) function) but not homogeneous.
• **Exam tip:** For 10 marks, treat as demand-focused. Link HD(0) of demand (budget property) to homotheticity of preferences (assumption). Use Engel curve diagrams to distinguish homothetic (line through origin) from non-homothetic. The income-linearity $x(p,w) = w \cdot x(p,1)$ is the key testable result.

### Question 6
**Q:** Negroni cocktail: U = min(G,V,C). Find Marshallian demand for Gin, Hicksian demand for Campari, expenditure function.
**A:**
• **Preference structure:** Leontief (perfect complements) utility $u = \min(G,V,C)$ — Negroni cocktail with gin ($G$), sweet vermouth ($V$), Campari ($C$) in fixed 1:1:1 proportions. No substitution possible between goods.
• **Optimality condition:** At optimum, the consumer consumes in fixed proportion: $G = V = C = q$ (some quantity). Any deviation wastes resources since utility is determined by the minimum.
• **Budget constraint:** $p_G G + p_V V + p_C C = w$. With $G = V = C = q$: $q(p_G + p_V + p_C) = w \implies q = w/(p_G + p_V + p_C)$.
• **Marshallian demand for Gin** (and symmetrically for V and C): $G(p,w) = V(p,w) = C(p,w) = w/(p_G + p_V + p_C)$.
• **Properties of Marshallian demand:** HD(0) in $(p,w)$: $G(ap,aw) = aw/(ap_G+ap_V+ap_C) = G(p,w)$ ✓. Walras' Law: total spending equals $w$ ✓. Own-price effect: $\partial G/\partial p_G = -w/(\sum p)^2 < 0$ (usual good).
• **EMP setup:** Minimize $p_G G + p_V V + p_C C$ subject to $\min(G,V,C) \ge \bar{u}$. Optimal: $G = V = C = q = \bar{u}$.
• **Hicksian demand for Campari:** $h_C(p,u) = \bar{u}$ — constant, independent of ALL prices. Zero substitution possibility: compensated own-price effect $\partial h_C/\partial p_C = 0$.
• **Expenditure function:** $e(p,\bar{u}) = p_G h_G + p_V h_V + p_C h_C = \bar{u}(p_G + p_V + p_C)$.
• **Properties of e(p,u):** HD(1) in $p$: $e(ap,\bar{u}) = a \cdot e(p,\bar{u})$ ✓. Strictly increasing in $\bar{u}$: $\partial e/\partial \bar{u} = \sum p_k > 0$ ✓. Linear (hence weakly concave) in $p$.
• **Shephard's lemma:** $\partial e/\partial p_C = \bar{u} = h_C(p,u)$ ✓ — recovers Hicksian demand from expenditure function.
• **Duality checks:** $e(p, v(p,w)) = v(p,w) \cdot \sum p_k = w$ ✓ and $v(p, e(p,\bar{u})) = e(p,\bar{u})/\sum p_k = \bar{u}$ ✓ — duality holds perfectly.
• **Key insight:** Leontief is the polar opposite of Cobb-Douglas — zero substitution vs smooth substitution. Hicksian demand is price-independent because there is no substitution margin — the compensated law of demand gives $\partial h_k/\partial p_k = 0$.
• **Exam tip:** For ~11 marks, structure as three parts (Marshallian, Hicksian, expenditure function). The critical Leontief insight: at optimum all goods consumed in fixed proportion, so utility value directly equals quantity consumed. Marshallian demand depends on all prices; Hicksian demand is constant. Draw the right-angle IC diagram.

### Question 7
**Q:** U = X + ln(Y). Find demands for X and Y. With limited I, which goods do you buy? Why?
**A:**
• **Utility:** $u(x,y) = x + \ln y$, budget $p_x x + p_y y = I$. This is quasilinear — linear in $x$, nonlinear in $y$.
• **MRS condition (interior):** $MU_x = 1$, $MU_y = 1/y$, so $MRS = 1/(1/y) = y$. Tangency: $MRS = p_x/p_y \implies y = p_x/p_y$.
• **Key insight:** Demand for $y$ is independent of income $I$ — $y^* = p_x/p_y$ is constant in $I$.
• **Demand for $x$ (interior):** From budget: $x^* = (I - p_y y^*)/p_x = (I - p_y \cdot p_x/p_y)/p_x = I/p_x - 1$.
• **Interior condition:** $x^* \ge 0 \iff I \ge p_x$. If $I < p_x$, the consumer cannot afford positive $x$ — corner solution.
• **Corner solution:** If $I < p_x$, set $x = 0$ and $y = I/p_y$ (spend all income on $y$).
• **Characterization of goods:** $y$ is income-INELASTIC ($\partial y/\partial I = 0$) — behaves like a necessity with satiation floor. $x$ absorbs ALL income changes — it is a normal good with income elasticity concentrated entirely on $x$.
• **Why this pattern?** $\ln y$ has diminishing marginal utility ($MU_y = 1/y$ decreases as $y$ increases). There is a natural satiation point for $y$ at $y^* = p_x/p_y$. Beyond this, additional income generates no extra utility from $y$ and goes entirely to $x$ (since $MU_x = 1$ is constant).
• **Quasilinearity property:** The utility function $u = x + f(y)$ has zero income effect for the good entering nonlinearly ($y$). All income effects are concentrated in the linear good ($x$).
• **Welfare implication:** Because $y$ has zero income effect, CV = EV = CS for any price change affecting $y$ (Willig bounds — quasilinear utility gives exact welfare equivalence).
• **Economic intuition:** The consumer first satisfies a "subsistence" level for $y$ (determined by relative prices), then spends any remaining income on $x$. With very limited income, the subsistence level for $y$ cannot be reached, so all income goes to $y$.
• **Exam tip:** For 3 marks, derive demands, note $y$ is constant in $I$ (income-inelastic), $x$ absorbs all extra income, and discuss the $I \ge p_x$ condition for interior $x$. The corner solution with $I < p_x$ is the most commonly overlooked point.

### Question 8
**Q:** U(X,Y) = X - 3Y. P_X=20, P_Y=40, I=400. Choose quantities maximizing utility.
**A:**
• **Utility:** $u(x,y) = x - 3y$. **Prices:** $p_x = 20$, $p_y = 40$. **Income:** $I = 400$.
• **Step 1 — Check marginal utilities:** $MU_x = \partial u/\partial x = 1 > 0$ (good). $MU_y = \partial u/\partial y = -3 < 0$ — $y$ is a **BAD** (negative marginal utility).
• **Critical insight:** Since $MU_y < 0$, the consumer wants as LITTLE $y$ as possible. Never mechanically solve Lagrangian FOCs without first checking MU signs.
• **Step 2 — Corner solution:** Set $y^* = 0$ (consume zero of the bad). Spend all income on $x$: $x^* = I/p_x = 400/20 = 20$.
• **Utility at optimum:** $u(20,0) = 20 - 3(0) = 20$. Any positive $y$ would reduce utility.
• **Step 3 — Verify Lagrangian would fail:** $MRS = MU_x/MU_y = 1/(-3) = -1/3$. Price ratio $p_x/p_y = 20/40 = 1/2$. Since $MRS \neq p_x/p_y$, the tangency condition does not hold. Even if solved, it identifies a MINIMUM, not a maximum.
• **Why tangency fails:** The utility function is linear (perfect substitutes), so it is both convex and concave. When $MU_y < 0$, the indifference curves slope upward (more $y$ requires more $x$ to stay indifferent — a direct violation of the "more is better" property for $y$).
• **Geometric interpretation:** Indifference curves are lines with slope $dy/dx = -MU_x/MU_y = -1/(-3) = 1/3$ (upward sloping). The budget line has slope $-p_x/p_y = -1/2$. The optimum is at the $x$-axis intercept where $y=0$.
• **Alternative interpretation:** If the coefficient on $y$ were positive ($u = x + 3y$), compare marginal utility per dollar: $MU_x/p_x = 1/20 = 0.05$ vs $MU_y/p_y = 3/40 = 0.075$. Since $MU_y/p_y > MU_x/p_x$, the consumer would specialize in $y$ (higher marginal utility per dollar). The general rule: compare $MU_k/p_k$ across goods and consume only the good with the highest ratio.
• **General lesson:** For any UMP, ALWAYS check marginal utility signs first. If $MU_k < 0$ for any good $k$, set $x_k = 0$ and spend all income on goods with positive MU. Lagrangian FOCs only identify valid maxima when utility is quasiconcave and monotone.
• **Exam tip:** For 3 marks, the critical insight is $MU_y < 0$ ⇒ $y$ is a bad ⇒ corner solution $y=0$, $x=I/p_x$. Do NOT write Lagrangian equations — they would give an incorrect interior solution. Always check MU signs before optimizing.

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
• **Cross-price elasticity with Z:** In the constant-elasticity (log-linear) form $X = \alpha P_X^\gamma P_Z^\delta P_W^\varepsilon I^\eta$, each exponent IS the elasticity: $\varepsilon_{X,P_Z} = \partial \ln X / \partial \ln P_Z = \delta = 0.8$. Since $\delta > 0$, $\partial X / \partial P_Z > 0$, so **Z is a gross substitute** for X — when P_Z rises, consumers switch toward X.
• **Income elasticity:** $\varepsilon_{X,I} = \eta$. Standard classification: $\eta > 1$ → luxury (consumption rises more than proportionally with income); $0 < \eta < 1$ → necessity (normal but income-inelastic); $\eta < 0$ → inferior good. **Critically, $\alpha = -0.5$ is a scaling constant (the log-linear intercept), NOT the income elasticity** — confusing these is a common exam mistake.
• **P_W falls 5%:** $\% \Delta Q_d = \varepsilon \times (-5\%)$, where $\varepsilon$ is the exponent on $P_W$. The outcome depends on $\varepsilon$'s sign: if $\varepsilon > 0$ (W is a substitute), $P_W \downarrow \Rightarrow Q_d \downarrow$ by $5\varepsilon\%$; if $\varepsilon < 0$ (W is a complement), $P_W \downarrow \Rightarrow Q_d \uparrow$ by $5|\varepsilon|\%$; if $\varepsilon = 0$, no change.
• **P_X decreases — expenditure effect:** Own-price elasticity $\gamma = -0.4$, so $|\gamma| = 0.4 < 1$ (inelastic demand). By the total revenue test: with inelastic demand, a price decrease causes quantity to rise proportionally less than the price falls, so **total expenditure on X decreases**. In the elastic case ($|\gamma| > 1$) expenditure would rise; at unit elasticity ($|\gamma| = 1$) expenditure stays unchanged.
• **Exam tip:** In constant-elasticity demand, each exponent IS the elasticity — no additional computation needed. Never confuse $\alpha$ with $\eta$. The total revenue test is a staple: elastic → price and revenue move opposite; inelastic → same direction.

### Question 2
**Q:** Burger King demand: Q = 10 + 1.3P_B + 0.4P_M - 3P_F + 2.2I. What's the terrible problem?
**A:**
• **The critical error:** The coefficient on own price $P_B$ is **positive** (+1.3): $\partial Q / \partial P_B = 1.3 > 0$. This means the estimated demand curve slopes **upward** — a direct violation of the Law of Demand, which requires $\partial Q / \partial P < 0$ ceteris paribus.
• **Why it invalidates the model:** With $\partial Q / \partial P_B > 0$, the model implies Burger King can increase sales by raising its price, which is economically nonsensical for a normal good. The regression is unusable for any policy analysis — you would reject it before calculating elasticities.
• **Likely econometric causes:** The positive own-price coefficient likely stems from omitted variable bias, simultaneous equations bias (price and quantity are jointly determined), or severe multicollinearity in time-series data where both price and quantity trend together due to inflation or income growth.
• **Sign check of other coefficients:** $P_M = +0.4$ (substitute, plausible), $P_F = -3.0$ (complement, plausible), $I = +2.2$ (normal good, plausible) — all other signs are reasonable, making the $P_B$ coefficient the unmistakable red flag.
• **Exam tip:** Always check the sign of the own-price coefficient first. This is a 30-second question once you spot the sign error — the examiner tests whether you blindly apply formulas or first verify the data make sense.

### Question 3
**Q:** Corrected demand: Q = 150P_B^{-1.5}P_{r1}^{0.75}P_{r2}^{-0.25}I^{0.8}A^{0.05}. Classify goods, compute effects, find profit-max P.
**A:**
• **French fries identification:** In the log-linear demand $Q = 150P_B^{-1.5}P_{r1}^{0.75}P_{r2}^{-0.25}I^{0.8}A^{0.05}$, French fries are a complement to Whoppers (negative cross-price elasticity). $\varepsilon_{Q,P_{r2}} = -0.25 < 0$ → **r2 is French fries** (complement). $\varepsilon_{Q,P_{r1}} = 0.75 > 0$ → **r1 is a substitute** (e.g., chicken sandwich).
• **Whopper classification:** Income elasticity $\eta = 0.8$ satisfies $0 < 0.8 < 1$, so the Whopper is a **necessity** — a normal good that is income-inelastic (not a luxury and not inferior).
• **Advertising ↑ 50%:** Advertising elasticity $\varepsilon_{Q,A} = 0.05$, so $\% \Delta Q = 0.05 \times 50\% = +2.5\%$. Demand is highly advertising-inelastic — advertising spending has a negligible effect on quantity.
• **French fry price ↓ 50%:** $\% \Delta Q = \varepsilon_{Q,P_{r2}} \times (\% \Delta P_{r2}) = -0.25 \times (-50\%) = +12.5\%$. Lowering the complementary good's price boosts Whopper sales substantially.
• **Profit-max P (MC = \$1):** Using the Lerner Index $P(1 + 1/\varepsilon) = MC$ with $\varepsilon = -1.5$: $P(1 - 2/3) = 1 \Rightarrow P(1/3) = 1 \Rightarrow P^* = \$3$. Markup = $(P-MC)/P = 2/3$, which equals $-1/\varepsilon$. This formula only applies when $\varepsilon < -1$ (elastic region); if $-1 < \varepsilon < 0$, MR would be negative.
• **McDonald's ↓ 10% — BK's required response:** Big Mac (r1) price falls 10% → Whopper Q falls by $0.75 \times 10\% = 7.5\%$. To neutralise this, BK must raise Q by 7.5% via own price. Using $\% \Delta Q / \% \Delta P_B = -1.5$: $\% \Delta P_B = 7.5\% / (-1.5) = -5\%$. **BK must lower its price by 5%.** This is the strongest discriminator — it tests whether you use elasticities as tools, not just classification labels.

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
• **Production function:** $q = f(z_1, z_2, ..., z_n)$ — the maximum output obtainable from a given input vector, given the available technology. It maps $\mathbb{R}^{L-M}_+$ (input space) to $\mathbb{R}^M_+$ (output space) and presumes technical efficiency.
• **Production set:** $Y = \{ y \in \mathbb{R}^L : F(y) \leq 0 \}$ — the set of ALL technologically feasible production plans expressed as net-output vectors (positive components = outputs, negative components = inputs). This is the most general representation of a firm's technological possibilities.
• **Transformation function:** $F(y)$ — an implicit function where $F(y) \leq 0$ iff $y$ is feasible. It nests the standard production function as a special case: $F(y) = f(z) - q$.
• **Transformation frontier:** $\{ y \in \mathbb{R}^L : F(y) = 0 \}$ — the boundary of the production set where the firm operates at **technical efficiency**. On the frontier, increasing one output requires either reducing another output or using more inputs.
• **MRPT (Marginal Rate of Product Transformation):** $MRPT_{k,l}(y) = (\partial F(y)/\partial y_k) / (\partial F(y)/\partial y_l) = -dy_l/dy_k$ along $F(y)=0$. It measures how much output $l$ must be reduced to increase output $k$ by one unit — the production-side analogue of the MRS in consumption.
• **Key duality:** $MRPT_{k,l} = MC_k / MC_l$ (proved in 3B Q2), connecting production theory to cost theory and general equilibrium product-mix efficiency ($MRPT = MRS$).

### Question 2 & 3
**Q:** Graphically explain properties of the production set.
**A:**
• **11 properties grouped by category:**
  • **(i) Basic feasibility:** Non-empty ($Y \neq \varnothing$ — at least one plan exists); Closed ($Y$ includes its boundary); Possibility of inaction ($0 \in Y$ — firm can shut down).
  • **(ii) Physical constraints:** No free lunch ($y \in Y, y \geq 0 \Rightarrow y = 0$ — can't produce output from nothing); Irreversibility ($y \neq 0 \Rightarrow -y \notin Y$ — can't reverse production like pure exchange).
  • **(iii) Disposal:** Free disposal ($y \in Y, y' \leq y \Rightarrow y' \in Y$ — can discard inputs/outputs at no cost, making $Y$ downward-closed).
  • **(iv) Scalability:** Non-increasing RTS ($\alpha y \in Y$ for $\alpha \in [0,1]$); Non-decreasing RTS ($\alpha y \in Y$ for $\alpha \geq 1$); CRS ($\alpha y \in Y$ for $\alpha \geq 0$ — full ray through origin).
  • **(v) Aggregation & curvature:** Additivity ($y+y' \in Y$ — independent plans can be combined); Convexity ($\alpha y + (1-\alpha)y' \in Y$ — balanced combinations feasible, implying diminishing returns).
• **Convexity exception:** Fixed costs create a non-convex "hole" near the origin — set-up costs break convexity at low output levels.
• **Exam tip:** Distinguish **convex production set** (implies diminishing returns / DRS) from **convex isoquants** (implies diminishing MRTS). A top answer groups properties rather than listing them linearly.

### Question 4
**Q:** What is elasticity of substitution (EoS)? Find EoS for q = aK + bL and for fixed proportions.
**A:**
• **EoS definition:** $\sigma$ measures the proportionate change in the $K/L$ ratio relative to the proportionate change in $MRTS_{L,K}$ along an isoquant: $\sigma = \frac{\% \Delta (K/L)}{\% \Delta MRTS} = \frac{d(K/L)}{d(MRTS)} \cdot \frac{MRTS}{K/L} = \frac{\partial \ln(K/L)}{\partial \ln(MRTS)}$. Always $\sigma \geq 0$ because $K/L$ and MRTS move in the same direction along a convex isoquant.
• **Economic interpretation:** High $\sigma$ → isoquants are nearly flat (easy substitution); low $\sigma$ → isoquants sharply curved (hard substitution); $\sigma = 0$ → fixed proportions (no substitution); $\sigma = \infty$ → perfect substitutes.
• **Linear $q = aK + bL$ (perfect substitutes):** $MRTS = MP_L/MP_K = b/a$ constant. $\% \Delta MRTS = 0 \Rightarrow \sigma = \infty$. Inputs can be substituted at a constant rate indefinitely.
• **Fixed proportions (Leontief) $q = \min\{aK, bL\}$:** $K/L$ is fixed at $b/a$ along the efficiency ray; MRTS jumps from $0$ to $\infty$ at the kink. $\% \Delta (K/L) = 0 \Rightarrow \sigma = 0$.
• **Benchmark table:** Linear = $\infty$, Cobb-Douglas = $1$, Leontief = $0$, CES generalises as $\sigma = 1/(1-\rho)$ where $\rho \leq 1$. As $\rho \to 1$, $\sigma \to \infty$ (linear); as $\rho \to -\infty$, $\sigma \to 0$ (Leontief); as $\rho \to 0$, $\sigma \to 1$ (Cobb-Douglas).

### Question 5
**Q:** Four properties of cost functions — match to intuitive explanations.
**A:**
| Property | Explanation |
|----------|-------------|
| **1. HD(1) in $w$** | $c(\lambda w, q) = \lambda c(w, q)$. "If all input prices rise by 10%, the minimum cost of producing $q$ rises by exactly 10%." Follows from linear homogeneity in input prices. |
| **2. Non-decreasing in $q$** | $q_1 > q_0 \Rightarrow c(w, q_1) \geq c(w, q_0)$. "To produce a larger quantity, you need at least as many inputs, so cost cannot fall." More output requires at least as much of every input. |
| **3. Concave in $w$** | $c(\alpha w + (1-\alpha)w', q) \geq \alpha c(w,q) + (1-\alpha)c(w',q)$. "The firm substitutes away from inputs that become relatively more expensive, so costs rise less than linearly with input prices." Implies $\partial^2 c / \partial w_k^2 \leq 0$ (conditional factor demand slopes downward). |
| **4. Shephard's Lemma** | $\partial c(w,q) / \partial w_k = z_k(w,q)$. "The cost increase from a small rise in the price of input $k$ equals the quantity of input $k$ used at the optimum." Follows from the envelope theorem. |
• **Key dual relationship:** The cost function is **concave** in input prices (substitution mitigates cost increases), while the profit function is **convex** in output prices (firm reallocates toward higher-priced outputs). Property 3 (concavity) is the most commonly tested.

### Question 6
**Q:** Sausage maker: 3 oz pork + 2 oz veal = 5 oz sausage. Write production function, conditional factor demand for pork, cost function. If Q = 200P^{-6}, find profit-max P.
**A:**
• **Production function:** The recipe requires fixed proportions: $Q = \min\{P/3, V/2\}$ where $P$ = pork oz, $V$ = veal oz, $Q$ = sausage oz. Equivalent form per 5 oz unit: $Q = \frac{1}{5} \min\{P/0.6, V/0.4\}$ (Leontief technology).
• **Conditional factor demand for pork:** At the cost-minimising optimum, no input is wasted: $P/3 = V/2 = Q$, so $P(Q) = 3Q$ and $V(Q) = 2Q$. The firm uses exactly 3 oz of pork per oz of sausage.
• **Cost function:** $c(Q) = p_P \cdot P(Q) + p_V \cdot V(Q) = p_P \cdot 3Q + p_V \cdot 2Q = Q(3p_P + 2p_V)$. With $p_P = p_V = 1$, this simplifies to $c(Q) = 5Q$ (linear cost, constant MC = 5).
• **Profit-max P given $Q = 200P^{-6}$:** Direct $\pi(P)$ maximisation is fastest: $\pi(P) = P \cdot 200P^{-6} - 5 \cdot 200P^{-6} = 200P^{-5} - 1000P^{-6}$. FOC: $d\pi/dP = -1000P^{-6} + 6000P^{-7} = 0 \Rightarrow 6000 = 1000P \Rightarrow P^* = 6$.
• **Alternative MR = MC approach:** Invert demand to $P = (Q/200)^{-1/6}$, find $MR$, set equal to $MC = 5$ to verify $Q^* \approx 0.00429$, $P^* = 6$. For Leontief technology, conditional factor demands come directly from the fixed-proportion constraint — no tangency condition needed.

### Question 7
**Q:** Q = (KL)^{1/3}, SR K=64. Find SR and LR functions.
**A:**
• **SR production function ($K=64$):** $Q = (64 \cdot L)^{1/3} = 64^{1/3} \cdot L^{1/3} = 4L^{1/3}$. Inverting gives $L = Q^3/64$ (SR conditional factor demand for labour).
• **SR cost function:** $SRTC(Q) = wL + rK = wQ^3/64 + 64r$. With $w=r=1$: $SRTC = Q^3/64 + 64$, $AVC = wQ^2/64$, $MC = 3wQ^2/64$. $AVC$ is increasing in $Q$, minimised at $Q=0$ where $\min AVC = 0$.
• **Shutdown & SR supply:** Since $\min AVC = 0$, the firm produces for any $P > 0$ (fixed costs are sunk). SR supply from $P = MC$: $Q^S(P) = \sqrt{64P/(3w)}$ for $P > 0$, upward-sloping because $MC$ increases with $Q$.
• **Returns to scale:** $Q(tK, tL) = t^{2/3} Q(K,L)$ with sum of exponents $= 1/3 + 1/3 = 2/3 < 1$ → **Decreasing returns to scale (DRS)**. Elasticity of substitution: $\sigma = 1$ (Cobb-Douglas property).
• **LR conditional factor demands:** Tangency $MRTS = K/L = w/r \Rightarrow K = (w/r)L$. Substituting into $Q = (KL)^{1/3}$: $L(w,r,Q) = (r/w)^{1/2} Q^{3/2}$, $K(w,r,Q) = (w/r)^{1/2} Q^{3/2}$.
• **LR cost & supply:** $LRTC(Q) = wL + rK = 2\sqrt{wr} \cdot Q^{3/2}$. $MC = 3\sqrt{wr} Q^{1/2}$. Setting $P = MC$: $Q^S(P) = P^2/(9wr)$. For DRS, LR supply slopes upward (unlike CRS where it is horizontal at min LRAC). The conditional factor demands satisfy Shephard's Lemma — verify for bonus marks.

### Question 8
**Q:** Starbucks Jumbo (62 oz) vs Trenta (31 oz). Will Jumbo cost twice as much, more, or less? Explain.
**A:**
• **Answer: Less than twice as much.** Food and beverage production typically exhibits **economies of scale** — average cost declines as output rises because fixed costs are spread over more units.
• **Why less than double:** The additional 31 oz uses approximately the same labour (one barista serves any cup size), the same overhead (rent, equipment, cleaning), and only slightly more ingredients (coffee, milk, ice). Packaging costs increase sub-linearly with volume.
• **Marginal vs average cost logic:** The marginal cost of the second 31 oz is LESS than the average cost of the first 31 oz because fixed costs are already covered by the first unit. When $MC < AC$, average cost is falling — this defines economies of scale.
• **Broader principle:** Many production processes have large fixed-cost components (setup, equipment, training) and relatively small variable costs. Scaling up reduces average total cost, which is why bulk sizes are cheaper per unit and why firms use non-linear pricing (larger sizes cost proportionally less).
• **Exam tip:** No math required — the examiner wants economic reasoning, not common sense. Frame your answer around $AC$ declining with output and $MC < AC$ in the presence of economies of scale.

### 3B — Profit Function

| # | Question | Marks | Source | Year |
|---|----------|-------|--------|------|
| 1 | Define profit function. If production set Y is closed and has free disposal, what properties does the profit function satisfy? | 10/3 | MainQ Tut2 Q3a, Batch 47 Q5c | —, 2022 |
| 2 | Show that MRPT_x,y = MC_x / MC_y. | — | Professor Q17 | — |

### Question 1
**Q:** Define profit function. Properties if Y closed with free disposal.
**A:**
• **Profit function definition:** $\pi(p) = \max_{y \in Y} p \cdot y$ — the value function of the profit maximisation problem (PMP). It maps price vectors $p$ to the maximum attainable profit from production set $Y$. This is the production-side dual of the cost function.
• **Properties (Y closed, free disposal):**
  • **HD(1) in $p$:** $\pi(\lambda p) = \lambda \pi(p)$ for $\lambda > 0$. Doubling all prices doubles nominal profit — no money illusion.
  • **Convex in $p$:** $\pi(\alpha p + (1-\alpha)p') \leq \alpha \pi(p) + (1-\alpha)\pi(p')$. The firm benefits more from extreme price vectors because it can adjust its production plan toward relatively more expensive outputs. **This is the opposite of the cost function** (which is concave in input prices).
  • **Non-decreasing in output prices, non-increasing in input prices** — follows from Hotelling's Lemma: $\partial \pi / \partial p_k = y_k(p)$, which is $\geq 0$ for outputs and $\leq 0$ for inputs.
  • **Continuous in $p$** (given $Y$ closed).
• **Hotelling's Lemma:** $\nabla_p \pi(p) = y(p)$ — the gradient of the profit function gives the net supply vector. This is the production analogue of Roy's Identity in consumer theory.
• **Law of Supply:** $\partial y_k(p) / \partial p_k \geq 0$ — supply curves slope upward. This follows directly from the convexity of $\pi(p)$ (the Hessian is positive semi-definite, so diagonal elements are non-negative).
• **Exam tip:** Never confuse profit function convexity with cost function concavity. The profit function is convex in prices (firm reallocates); the cost function is concave in input prices (substitution mitigates increases).

### Question 2
**Q:** Show MRPT_x,y = MC_x / MC_y.
**A:**
• **Step 1 — MRPT from the transformation function:** Total differentiate $F(q_x, q_y, z) = 0$ along the frontier ($dF = 0$): $\frac{\partial F}{\partial q_x} dq_x + \frac{\partial F}{\partial q_y} dq_y = 0$. Hence $MRPT_{x,y} = -dq_y/dq_x = (\partial F/\partial q_x) / (\partial F/\partial q_y)$.
• **Step 2 — Profit maximisation FOCs:** The firm maximises $\pi = p_x q_x + p_y q_y - c(q_x, q_y)$. FOCs: $\partial \pi/\partial q_x = p_x - MC_x = 0 \Rightarrow p_x = MC_x$; $\partial \pi/\partial q_y = p_y - MC_y = 0 \Rightarrow p_y = MC_y$.
• **Step 3 — Tangency condition:** At the profit-maximising output mix, the firm sets $MRPT_{x,y}$ equal to the output price ratio: $MRPT_{x,y} = p_x / p_y$.
• **Step 4 — Substitution:** Since $p_x = MC_x$ and $p_y = MC_y$, we obtain $MRPT_{x,y} = p_x/p_y = MC_x/MC_y$. **QED.**
• **Intuition:** If $MRPT_{x,y} > MC_x/MC_y$, reallocating resources from $y$ to $x$ increases profit — the gain in $x$ revenue exceeds the loss in $y$ revenue per unit of resource shift. Adjustment continues until equality holds.
• **Broader significance:** This duality result is the foundation for the product-mix efficiency condition in general equilibrium: $MRPT_{x,y} = MRS_{x,y}$ (Pareto optimality in production).

### 3C — Competitive Industry

| # | Question | Marks | Source | Year |
|---|----------|-------|--------|------|
| 1 | 1,000 identical firms: C_SR(q) = 0.5q²+2q+80. Find SR supply per firm, industry SR supply. Market Q=44,000-1,000P. Find equilibrium P, Q, each firm's profit. $20/unit tax: new P, quantity. Welfare cost of tax. | ~14 | Batch 48 Q6a | 2023 |
| 2 | Three-good world: excess demand Z₂(p) = -3 + p₃/p₂ + p₁/p₂, Z₃(p) = 3p₁/p₃ + 4p₂/p₃ - 7. Find Z₁. Find market-clearing p₂/p₁, p₃/p₁. | ~4 | Batch 48 Q6b | 2023 |

### Question 1
**Q:** 1,000 identical firms with C_SR(q)=0.5q²+2q+80. Market Q_D=44,000-1,000P. $20/unit tax. Find equilibrium, profit, welfare cost.
**A:**
• **SR supply per firm:** $MC = dC/dq = q + 2$. $AVC = (0.5q^2 + 2q)/q = 0.5q + 2$, minimised at $q = 0$ where $\min AVC = 2$. Supply: $P = MC \Rightarrow q(P) = P - 2$ for $P \geq 2$.
• **Industry SR supply (1,000 identical firms):** $Q_S(P) = 1,000(P - 2)$ for $P \geq 2$ — the horizontal sum of individual firm supplies.
• **Market equilibrium:** Set $Q_S = Q_D$: $1,000(P-2) = 44,000 - 1,000P \Rightarrow 2,000P = 46,000 \Rightarrow P^* = 23$, $Q^* = 21,000$. Each firm produces $q = 21$ and earns $\pi = 23(21) - [0.5(21)^2 + 2(21) + 80] = 483 - 342.5 = 140.5$.
• **$20/unit tax incidence:** Tax shifts supply: effective price to firms is $P - t$, so $P - 20 = q + 2 \Rightarrow q = P - 22$. New equilibrium: $1,000(P-22) = 44,000 - 1,000P \Rightarrow P_b = 33$ (buyer pays), $P_s = 13$ (seller receives), $Q = 11,000$. Tax revenue = $20 \times 11,000 = 220,000$.
• **After-tax profit & DWL:** Per-firm profit = $13(11) - [0.5(11)^2 + 2(11) + 80] = 143 - 162.5 = -19.5$ (losses, but firms continue since $P_s = 13 > \min AVC = 2$). Deadweight loss: $DWL = \frac{1}{2} \times t \times \Delta Q = \frac{1}{2} \times 20 \times 10,000 = 100,000$. Since supply and demand slopes are equal ($\pm 1,000$), the tax burden is split evenly — buyers pay \$10 more, sellers receive \$10 less.
• **Exam tip:** Common mistakes: (1) forgetting the shutdown condition ($P \geq \min AVC$), and (2) computing DWL as $\frac{1}{2} \times t \times Q_{after}$ instead of $\frac{1}{2} \times t \times \Delta Q$.

### Question 2
**Q:** Three-good world: given Z₂, Z₃. Find Z₁ via Walras' law. Solve price ratios.
**A:**
• **Walras' Law:** In an $n$-good GE system, $p \cdot Z(p) = \sum_{i=1}^n p_i Z_i(p) = 0$ for all price vectors $p$. Consumer budget constraints and firm profit maximisation imply the value of excess demand sums to zero identically — if $n-1$ markets clear, the $n$th must also clear.
• **Find $Z_1$:** From Walras' Law: $p_1 Z_1 + p_2 Z_2 + p_3 Z_3 = 0 \Rightarrow Z_1 = -(p_2/p_1)Z_2 - (p_3/p_1)Z_3$. Substituting $Z_2$ and $Z_3$: $Z_1 = -4 + (6p_3 - p_2)/p_1$.
• **Normalise numeraire ($p_1 = 1$):** Let $r_2 = p_2/p_1$, $r_3 = p_3/p_1$. From $Z_2 = 0$: $-3 + r_3/r_2 + 1/r_2 = 0 \Rightarrow r_3 + 1 = 3r_2$. From $Z_3 = 0$: $3/r_3 + 4r_2/r_3 - 7 = 0 \Rightarrow 3 + 4r_2 = 7r_3$.
• **Solve the system:** Substitute $r_3 = 3r_2 - 1$ into $3 + 4r_2 = 7(3r_2 - 1) \Rightarrow 10 = 17r_2 \Rightarrow r_2 = 10/17$, then $r_3 = 3(10/17) - 1 = 13/17$. **Market-clearing ratios:** $p_2/p_1 = 10/17$, $p_3/p_1 = 13/17$.
• **Consistency check:** $Z_1 = -4 + 6(13/17) - 10/17 = -4 + 68/17 = -4 + 4 = 0$ ✓. Only $n-1 = 2$ equations are independent — Walras' Law gives the $n$th equation for free.
• **Exam tip:** Normalise one price as numeraire to reduce unknowns. Follow a three-step process: (1) write Walras' Law, (2) solve any two market-clearing conditions, (3) verify the third market clears automatically.

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
• **CV** = money taken from consumer after a price fall (or given after a price rise) to restore original utility u⁰: CV = w - e(p¹,u⁰).
• **EV** = money given to consumer before a price fall (or taken before a price rise) to reach new utility u¹: EV = e(p⁰,u¹) - w.
• **CS** = area under Marshallian demand between old and new prices: CS = ∫ x₁(p₁,$\cdot$) dp₁. Observable from market demand data.
• **Reference points:** CV uses new prices + original utility (u⁰). EV uses old prices + new utility (u¹). CS uses actual prices — mixes income and substitution effects.
• **Demand curve basis:** CV and EV derived from Hicksian (compensated) demand — theoretically exact. CS from Marshallian (uncompensated) demand — approximate but empirically estimable.
• **CV asks:** "After the price change, how much money must be taken/given to return to the original indifference curve?" — compensation after the event.
• **EV asks:** "Before the price change, how much money would be needed to reach the new indifference curve?" — compensation before the event.
• **Economic intuition:** CV and EV bracket CS for normal goods. The gap between them measures the income effect — the larger the income elasticity, the wider the gap between EV and CV.
• **Key equations:** CV = e(p⁰,u⁰) - e(p¹,u⁰); EV = e(p⁰,u¹) - e(p⁰,u⁰). Both are Hicksian-based and path-independent welfare measures.
• **When equal:** For quasilinear utility (zero income effect), CV = EV = CS exactly. For Cobb-Douglas (unit income elasticity), EV > CS > CV.
• **Exam tip:** Always state which utility level each measure anchors to. CV = original u⁰; EV = new u¹ — this determines the welfare ordering.
• **Professor's corner:** Top students draw the three demand curves and anchor CV to u⁰ and EV to u¹. Most common mistake: confusing reference utilities.

### Question 2
**Q:** For price decrease (normal goods): EV > CS > CV. For price increase, explain.
**A:**
• **Price decrease (normal goods):** EV uses Hicksian demand at new (higher) utility u¹ — Hicksian shifts right (positive income effect) → largest area. CS uses Marshallian demand — lies between → intermediate. CV uses Hicksian at original u⁰ → smallest. **Ordering: EV > CS > CV**.
• **Price increase (normal goods):** CV uses Hicksian at original u⁰ (compensation after price rise to stay at u⁰) → largest. EV uses Hicksian at new u¹ (lower utility) → smallest. **Ordering: CV > CS > EV**.
• **Graphical logic:** At p₁¹ < p₁⁰: h(p,u¹) > x(p,w) > h(p,u⁰). At p₁¹ > p₁⁰: h(p,u⁰) > x(p,w) > h(p,u¹). Marshallian always lies between the two Hicksians for normal goods.
• **Intuition:** Price fall increases real income → compensated consumer buys more → EV (new higher utility) exceeds CV (original utility). The gap EV − CV = income effect magnitude.
• **Why the reversal?** For price decrease, EV references the better (new) state — bigger gain. For price increase, CV references the better (original) state — bigger compensation needed.
• **Role of income elasticity:** Larger income elasticity → wider EV−CV gap. For luxuries (income elastic > 1), ordering discrepancies are especially pronounced.
• **Inferior goods (bonus):** For inferior goods, ordering reverses: price decrease gives CV > CS > EV. Tests understanding of the normality assumption.
• **Numerical example (Cobb-Douglas):** u = x₁^½ x₂^½, p⁰=(4,4), p¹=(2,4), m=300: EV=124.24, CS=103.98, CV=87.9. EV−CV=36.34 reflects income effect.
• **Willig bounds:** For small income effects, CS error < 5% — justifying CS use in applied cost-benefit analysis despite theoretical inferiority.
• **Exam tip:** Draw three demand curves intersecting at p⁰ and p¹. Shade EV, CS, CV areas distinctly. This is a guaranteed diagram question.
• **Professor's corner:** The diagram is the centrepiece. Strong answers add the inferior goods case for bonus marks.

### Question 3
**Q:** Cobb-Douglas u = x₁^½ x₂^½. p⁰=(4,4), p¹=(2,4), m=300. Compute EV, CV, CS. Interpret.
**A:**
• **Step 1 — Walrasian demands:** For u = x₁^½ x₂^½ with α=½: x₁ = αm/p₁ = 150/p₁, x₂ = (1-α)m/p₂ = 150/p₂.
• **Step 2 — Indirect utilities:** v⁰ = (150/4)^½ × (150/4)^½ = 37.5. v¹ = (150/2)^½ × (150/4)^½ = √2812.5 ≈ 53.03.
• **Step 3 — Expenditure function:** For Cobb-Douglas α=½: e(p,u) = 2u·√(p₁p₂). Derivation: h₁ = u·(p₂/p₁)^½, h₂ = u·(p₁/p₂)^½.
• **Step 4 — CV:** CV = w − e(p¹,u⁰) = 300 − 2×37.5×√(2×4) = 300 − 212.1 = **87.9**.
• **Step 5 — EV:** EV = e(p⁰,u¹) − w = 2×53.03×√(4×4) − 300 = 424.24 − 300 = **124.24**.
• **Step 6 — CS:** CS = ∫₄² (150/p₁) dp₁ = 150[ln p₁]₄² = 150 ln(0.5) ≈ **103.98** (absolute value, price fell).
• **Summary:** EV (124.24) > CS (103.98) > CV (87.9). **✓ Confirms both goods are normal.**
• **Income effect:** EV − CV = 36.34 > 0. Positive gap reflects income effect of the price fall — consistent with Cobb-Douglas unit income elasticity for both goods.
• **Economic intuition:** When p₁ falls, real income rises → consumer buys more x₁. CV compensates this away (holds utility at u⁰), so it is smallest. EV captures full gain at u¹, so it is largest.
• **Interpretation:** The gap EV − CV = 36.34 means the income effect accounts for roughly 29% of EV — significant but not dominant.
• **Exam tip:** Derive expenditure function first — saves half the computation. For α=½, e(p,u) = 2u√(p₁p₂) is a time-saving shortcut worth memorising.
• **Professor's corner:** Always check EV > CS > CV as a sanity check. If violated, recalculate. Interpret EV−CV explicitly as the income effect measure.

### Question 4
**Q:** EV > CS > CV diagram (price decrease) and EV < CS < CV (price increase) — graphical analysis.
**A:**
• **Price decrease p₁↓ (normal good):** Three demand curves intersect at p₁⁰. At p₁¹ < p₁⁰: h(p,u¹) > x(p,w) > h(p,u⁰). EV = area left of h(p,u¹) between p₁⁰ and p₁¹ → largest; CS = area left of x(p,w) → intermediate; CV = area left of h(p,u⁰) → smallest.
• **Price increase p₁↑ (normal good):** At p₁¹ > p₁⁰: h(p,u⁰) > x(p,w) > h(p,u¹). CV = area left of h(p,u⁰) → largest; CS = area left of x(p,w) → intermediate; EV = area left of h(p,u¹) → smallest.
• **Graphical mechanism:** All three curves intersect at the original price p₁⁰. For normal goods, Hicksian at higher utility lies right of Marshallian, which lies right of Hicksian at lower utility. This ordering determines welfare measure rankings.
• **Why the reversal?** For price decrease, EV references the better (new) state u¹ → larger area. For price increase, CV references the better (original) state u⁰ → larger area. The reference utility level flips between scenarios.
• **Income and substitution effects:** Movement along Marshallian demand from p₁⁰ to p₁¹ combines substitution effect (movement along Hicksian at u⁰) and income effect (shift from h(p,u⁰) to h(p,u¹)).
• **Slope comparison:** Marshallian demand is flatter than Hicksian at u⁰ (includes income effect) but steeper than Hicksian at u¹ — explaining why CS lies between CV and EV.
• **Exam tip:** In exams, sketch the three demand curves intersecting at one point. Label income and substitution effects clearly. The Marshallian always lies between the two Hicksians for normal goods.
• **Professor's corner:** The key graphical insight: Marshallian demand lies between the two Hicksian curves for normal goods. Show this clearly and label EV, CS, CV regions with distinct shading.

### Question 5
**Q:** Show: Marshallian CS overstates CV and understates EV for normal goods.
**A:**
• **Normal good ⇒ ∂x₁/∂m > 0** ⇒ positive income effect. When price falls, real income rises → consumer buys more of the good due to income effect.
• **Marshallian demand** includes BOTH substitution and income effects → it is flatter (more elastic) than the Hicksian demand at u⁰ which isolates the substitution effect.
• **Price ↓: CS > CV** — CS overstates CV because the Marshallian curve includes the income effect, making the welfare triangle larger than the compensated measure at u⁰.
• **Price ↓: EV > CS** — CS understates EV because EV references the higher utility u¹, where the Hicksian demand has shifted right, producing a larger area than the Marshallian.
• **Price ↑ (normal good):** The ordering reverses. Real income falls → consumer buys less. CV > CS > EV — CS overstates EV and understates CV.
• **Magnitude of error:** For zero income effect (quasilinear utility), CS = CV = EV exactly — all three measures coincide since Marshallian and Hicksian demands are identical.
• **Willig (1976) bounds:** For realistic income elasticities and price changes, the percentage error from using CS instead of CV or EV is typically < 5% — a practical justification for CS use.
• **Inferior goods:** If ∂x₁/∂m < 0, the ordering reverses: CV > CS > EV for a price decrease. Income effect works against the substitution effect.
• **Giffen goods (extreme inferiority):** For Giffen goods (inferior + large budget share), Marshallian demand slopes upward — CS gives completely wrong welfare signals.
• **Exam tip:** Cite Willig bounds as a practical justification for using CS despite its theoretical inferiority. Mention quasilinear utility as the special case where all three coincide.
• **Professor's corner:** Mentioning Willig bounds (<5% error) distinguishes A-grade answers. The quasilinear special case (CS = CV = EV) is a common exam follow-up.

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
• **Social welfare** = aggregate well-being of all individuals in a society. Pigou restricted analysis to **economic welfare** — "that part of social welfare that can be brought directly or indirectly into relation with the measuring rod of money."
• **Issue 1 — Definition and scope:** Pigou distinguished economic welfare (measurable by money) from total welfare. Economic welfare and national income are "coordinate" — changes in one correspond to changes in the other. **Criticism:** The division is arbitrary — many factors (environment, relationships) affect welfare but resist monetization.
• **Issue 2 — Dual conditions for max SW:** Condition (i): Maximize national income given constant tastes and distribution → SW↑. Condition (ii): Transfer income from rich to poor (based on diminishing MU of income + equal capacity for satisfaction postulate) → SW↑.
• **Criticism of Condition (ii):** The equal capacity assumption is scientifically untenable — it is a value judgement favouring equality, not objective science (Robbins, 1932). Utility functions differ across individuals in unknown ways.
• **Criticism of Condition (i):** National income may rise due to inflation — poor may become worse off. National income is also difficult to measure accurately.
• **Issue 3 — Private vs Social net product (externalities):** Private net product = contribution to national dividend accruing to the private investor. Social net product = aggregate contribution including external effects. **Divergence** = market failure.
• **External economy example:** Technical training of workers by a firm benefits society beyond the firm's private gain (social > private). **External diseconomy:** Factory smoke raises neighbours' costs (private > social).
• **Pigou's remedy:** Tax industries where private > social net product; subsidize where social > private net product. This is the foundation of Pigouvian tax/subsidy theory.
• **Criticism of Issue 3:** The divergence cannot always be quantified. Pigou assumed divergences are exceptions correctable by intervention — structural failures are pervasive in reality.
• **Overall evaluation:** Pigou = father of welfare economics, provided rationale for state intervention and foundation for externality analysis. **Limitations:** cardinal utility assumption, arbitrary welfare/non-welfare dichotomy, value-laden analysis.
• **Exam tip:** For "critically examine," always give Pigou's position AND the standard criticisms (Robbins, ordinalist critique). Structure as three clear pillars.
• **Professor's corner:** Strong answers identify Pigou's implicit cardinal utility assumption and link it to Robbins' ordinalist critique. This shows the examiner you understand the architecture of Pigou's framework.

### Question 2
**Q:** Derive the grand utility possibility frontier and determine the 'point of bliss'. Does this ensure maximum SW?
**A:**
• **GUPF** = outer envelope of all UPFs from every product-mix on the PPC. Each UPF shows efficient utility pairs from distributing a given output between A and B.
• **Derivation step 1:** Start from the PPC — each point is a Pareto-efficient output combination (MRPT_xy = MRS_xy).
• **Derivation step 2:** For each product-mix on PPC, construct a UPF by distributing X and Y efficiently between A and B (MRS^A_xy = MRS^B_xy).
• **Derivation step 3:** The GUPF is the outer envelope of all such UPFs — representing the maximum utility combinations feasible given the economy's resources and technology.
• **Point of bliss** = tangency between GUPF and highest attainable social indifference contour. Condition: slope(GUPF) = (∂W/∂U_A)/(∂W/∂U_B).
• **Does it ensure max SW? YES** — given resources, technology, and the SWF, no reallocation can reach a higher social indifference contour. It identifies the constrained maximum.
• **Does it ensure max SW? NO** — the point of bliss depends on the specific SWF chosen. Different value judgements about equity → different bliss points.
• **Pareto optimality is necessary but not sufficient:** All points on the GUPF are Pareto-optimal, but only the tangency point E maximizes SW. Points c and c₁ on the GUPF are on lower social indifference contours than point d.
• **Requires explicit value judgements:** The SWF embodies ethical choices about interpersonal comparisons — these are value judgements, not objective facts.
• **Exam tip:** The key exam point: Pareto optimality = all points on GUPF ✓, but SW maximization requires a specific point chosen by value judgements via the SWF.
• **Professor's corner:** Distinguish UPF (one product-mix) from GUPF (envelope of all UPFs). Students lose marks on this distinction. The GUPF is the outer boundary of all possible UPFs.

### Question 3
**Q:** Define social welfare. Explain criteria: (i) Growth of GNP (ii) Bentham (iii) Cardinalist.
**A:**
• **Social welfare** = aggregate well-being of a society, encompassing satisfaction levels of all individuals. Welfare economics evaluates alternative economic states — if current W < potential W*, show why and how to raise W to W*.
• **(i) GNP Growth (Adam Smith):** ΔW > 0 if ΔGNP > 0. Growth increases employment and goods available for consumption → welfare rises. **Strength:** objectively measurable, simple, intuitive. **Weakness:** ignores distribution, pollution, inequality, and non-market well-being.
• **Limitation of GNP criterion:** Efficiency is necessary but not sufficient for SW maximization. Growth may benefit only the rich while creating pollution or social disruption.
• **(ii) Bentham's Utilitarian criterion:** W = ΣUᵢ — "greatest good for greatest number." ΔW > 0 if sum of utility changes is positive.
• **Problem with Bentham:** (a) Requires cardinal utility + interpersonal comparability — scientifically impossible (Robbins). (b) "Greatest good" vs "greatest number" can conflict — total utility 280 may be distributionally worse than total 260.
• **Bentham's implicit value judgement:** A change where ΔU_A = +200, ΔU_B = +50, ΔU_C = −100 gives ΔW = +150. This assumes A and B's gains "outweigh" C's loss — a value judgement about relative deservingness.
• **(iii) Cardinalist criterion:** Uses diminishing MU of income to justify redistribution. Rich gain less from an extra £1 than the poor. Therefore, redistributing from rich to poor raises total SW.
• **Cardinalist SW maximization:** Equal income distribution maximizes welfare. **Strength:** introduces explicit distributional concern. **Weakness:** assumes identical utility functions — empirically false; ignores incentive effects of redistribution.
• **Critical weakness of Cardinalist:** A rich person may have a utility function lying far above the poor person's — redistribution toward equality could reduce total welfare. Equal incomes may also reduce work effort → Pareto inefficiency.
• **Evaluation along two axes:** (i) Efficiency: GNP criterion handles it; Bentham and Cardinalist ignore incentive effects. (ii) Equity: GNP criterion ignores it; Bentham is equity-blind (sum-ranking); Cardinalist is equity-focused but unrealistic.
• **Exam tip:** For any welfare criterion question, evaluate along efficiency and equity axes — this is the marking framework. Growth = efficiency-only; Bentham = sum-ranking; Cardinalist = equity-focused but unrealistic assumptions.
• **Professor's corner:** Organise by efficiency-equity axis — the marking framework. The Cardinalist weakness (identical utility functions assumed) is the most commonly missed point.

### Question 4
**Q:** Define social welfare function. Derive GUPF and point of bliss.
**A:**
• **SWF:** W = F(U₁,...,Uₙ) — a rule for ranking alternative social states based on individual utility levels. Introduced by Abram Bergson (1938), developed by Samuelson, Arrow, Tinter.
• **Purpose:** To evaluate changes where some gain and some lose — situations where the Pareto criterion cannot apply because it cannot rank Pareto-incomparable alternatives.
• **GUPF derivation — Step 1:** Start from the 2×2×2 model (2 factors L,K; 2 goods X,Y; 2 consumers A,B). Each point on the PPC is a Pareto-efficient output combination.
• **GUPF derivation — Step 2:** From each point on the PPC, construct a UPF — the locus of efficient utility pairs (U_A, U_B) attainable by distributing output efficiently (MRS^A_xy = MRS^B_xy).
• **GUPF derivation — Step 3:** The GUPF is the outer envelope of all UPFs across all product-mixes. It represents the maximum utility combinations feasible given resources and technology.
• **GUPF derivation — Step 4:** Superimpose social indifference contours from the SWF. The point of bliss (E) is where GUPF is tangent to the highest attainable social indifference contour.
• **Mathematical condition at bliss point:** ∂U_B/∂U_A (from GUPF) = (∂W/∂U_A)/(∂W/∂U_B) (from SWF). Also: MRPT_xy = MRS^A_xy = MRS^B_xy (Pareto efficiency).
• **Non-uniqueness:** The bliss point depends on the specific SWF — different value judgements → different bliss points. Arrow's Impossibility Theorem questions whether a consistent SWF can exist.
• **Economic intuition:** Pareto optimality gets us to the GUPF frontier (efficiency), but only the SWF can select which point on the frontier is best (equity). Both are needed.
• **Exam tip:** The bliss point is not unique — it depends on the SWF. Arrow's Impossibility Theorem questioned whether a consistent SWF can be constructed from individual preferences.
• **Professor's corner:** Pareto optimality ≡ points on GUPF (all efficient). SW maximisation = a specific point at tangency with SWF. These are NOT the same — this distinction is the heart of welfare economics.

### Question 5
**Q:** Critically explain three key things Pigou dealt with in social welfare analysis.
**A:**
• Pigou's *The Economics of Welfare* (1932) laid the foundation of neoclassical welfare economics around three pillars. This is a condensed synthesis of the full analysis.
• **Pillar 1 — Definition of economic welfare:** "That part of social welfare that can be brought directly or indirectly into relation with the measuring rod of money." Economic welfare and national income are coordinate.
• **Criticism of Pillar 1:** (i) Cannot separate economic from non-economic welfare (Robbins). (ii) Cardinal utility measurement is impossible. (iii) Interpersonal comparisons lack scientific basis.
• **Pillar 2 — Dual conditions for max SW:** Condition (i): Growth in national dividend → SW↑ (given tastes and distribution unchanged). Condition (ii): Transfer from rich to poor → SW↑ (given constant NI), based on diminishing MU of income + equal capacity for satisfaction.
• **Criticism of Pillar 2:** (i) Inflation can raise money NI while reducing real welfare. (ii) "Equal capacity for satisfaction" is a value judgement, not science. (iii) Ignores incentive effects of redistribution.
• **Pillar 3 — Private vs Social net product:** Private NP = contribution accruing to investor. Social NP = aggregate contribution including external effects. Divergence → market failure.
• **Examples:** Social > Private: technical training (positive externality). Private > Social: factory smoke (negative externality). Pigou's remedy: tax/subsidize to correct divergence.
• **Criticism of Pillar 3:** (i) Divergence cannot always be quantified. (ii) Pigou assumed divergences are exceptions — in reality structural failures are pervasive. (iii) Policy recommendations are normative, not positive.
• **Overall contribution:** First systematic welfare theory, integrated normative with positive economics, provided rationale for government intervention.
• **Overall limitations:** Cardinal utility assumption, arbitrary welfare/non-welfare dichotomy, lack of rigour in private/social product distinction.
• **Exam tip:** For this condensed version, the examiner wants synthesis not repetition. Show you can identify the three pillars and their criticisms concisely.
• **Professor's corner:** Strong answers add a brief evaluation of Pigou's overall legacy: pioneer who laid foundations but whose cardinal utility framework was superseded by the Pareto-Bergson approach.

### Question 6
**Q:** Define social welfare function. How could it be used as a criterion to measure SW?
**A:**
• **SWF:** W = F(U₁,...,Uₙ) — a rule for aggregating individual utility levels into overall social welfare. Provides a complete ranking of all feasible social states.
• **Bergson-Samuelson SWF:** Individual utilities are arguments; the functional form embodies ethical value judgements about distribution. Social indifference contours in U_A-U_B space show utility combinations yielding the same W.
• **Use 1 — Comparing social states:** For states S and S' with utility vectors (U_A,U_B) and (U'_A,U'_B): if W' > W, state S' is socially preferred. If W' = W, they are socially indifferent.
• **Use 2 — Constrained optimization (bliss point):** Max W = F(U_A,U_B) subject to (U_A,U_B) ∈ GUPF. At the optimum: slope(GUPF) = slope(Social Indifference Contour).
• **Use 3 — Evaluating Pareto-incomparable changes:** Pareto criterion fails when some gain and others lose. SWF resolves this by allowing trade-offs based on explicit value judgements.
• **Example:** A change increasing U_A by +10 and decreasing U_B by −5 is SW-improving if W(·) places sufficient weight on A relative to B.
• **Advantages:** (1) Explicit value judgements — distributional assumptions transparent. (2) Complete ranking — all social states comparable. (3) Framework for policy — evaluate taxes, spending, regulation.
• **Limitation 1:** No objective construction — requires a "social planner" or derivation from individual preferences.
• **Limitation 2:** Arrow's Impossibility (1951) — no SWF can simultaneously satisfy universal domain, Pareto, IIA, and non-dictatorship.
• **Limitation 3:** Any SWF ranking states where some gain/lose requires interpersonal utility comparisons — these are value judgements without scientific basis (Robbins).
• **Exam tip:** Distinguish between Bergson-Samuelson SWF (social planner with given value judgements) and Arrow's SWF (aggregating individual preferences). Bergson's is used in welfare maximization; Arrow's leads to impossibility.
• **Professor's corner:** Bergson-Samuelson SWF (optimisation) and Arrow's SWF (impossibility theorem) are different concepts. Many students conflate them — the examiner watches for this distinction.

### Question 7
**Q:** What are the major assumptions of SW maximization in a 2×2×2 model?
**A:**
• The 2×2×2 general equilibrium model for SW maximization rests on structural, efficiency, competitive, distributional, and regularity assumptions.
• **A. Structural assumptions:** 2 factors (L,K fixed), 2 goods (X,Y, each by one firm), 2 consumers (A,B). Each firm produces one good. No economies of scale. Consumers maximize utility; firms maximize profit.
• **B. Efficiency assumptions (Pareto conditions):** (1) Consumption efficiency: MRS^A_xy = MRS^B_xy. (2) Production efficiency: MRTS^X_LK = MRTS^Y_LK. (3) Product-mix efficiency: MRPT_xy = MRS_xy.
• **C. Perfect competition assumptions:** Price-taking behaviour, complete markets, no externalities, no public goods, convex preferences, convex technology, continuous demand, perfect information, perfect factor mobility.
• **D. Distributional assumptions (beyond Pareto):** Existence of a SWF F(U_A,U_B) embodying societal value judgements. Concave SWF (diminishing marginal social utility — inequality aversion). Interpersonal comparisons are value judgements, not facts.
• **E. Regularity conditions:** Production functions: continuous, twice differentiable, diminishing MRTS. Utility functions: continuous, strictly increasing, strictly quasiconcave. PPC: concave. Social indifference curves: convex (ensures unique tangency with GUPF).
• **Implication:** Under these assumptions, competitive equilibrium is Pareto-optimal (First Welfare Theorem) and any Pareto optimum = competitive equilibrium with lump-sum transfers (Second Welfare Theorem).
• **The SWF then selects the "best" among Pareto-optimal points along the GUPF** — combining efficiency (markets + transfers) with equity (SWF value judgements).
• **Exam tip:** Distinguish between assumptions needed for Pareto optimality (sections A-C) and additional assumptions for SW maximization (section D). Many students miss this second category.
• **Professor's corner:** The crucial distinction: assumptions for Pareto optimality (A-C) vs. additional assumptions for SW maximisation (D). The latter embodies value judgements — the key insight.

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
• **Statement:** A situation can be Pareto-optimal without maximizing social welfare. All SW maxima must be Pareto-optimal, but not all Pareto-optimal points are SW maxima.
• **Proof via 2×2×2 — Step 1:** Any point on the PPC satisfies all three Pareto conditions: MRS^A_xy = MRS^B_xy, MRTS^X_LK = MRTS^Y_LK, MRPT_xy = MRS_xy. No one can be made better off without harming another.
• **Proof — Step 2:** From each point on PPC, a UPF is derived. The envelope (GUPF) contains all Pareto-efficient utility combinations. Every point on the GUPF is Pareto-optimal.
• **Proof — Step 3:** Among points c, c₁, d on the same GUPF (all Pareto-optimal), only d lies on a higher social indifference contour. Different points = different utility distributions.
• **Proof — Step 4:** Bergson SWF selects the single best point (tangency of SWF with GUPF). Pareto optimality alone cannot identify the social optimum.
• **Pareto criterion limitation:** It cannot rank between Pareto-optimal points — all are "optimal" in the efficiency sense. A distribution where A gets everything and B nothing is still Pareto-optimal.
• **Role of SWF:** The SWF adds distributional value judgements. Efficiency (Pareto) gets us to the frontier; equity (SWF) selects the specific point on the frontier.
• **Necessity argument:** If a situation is not Pareto-optimal, resources are wasted → welfare could increase without harming anyone → it cannot be a SW maximum.
• **Diagrammatic intuition:** GUPF = efficiency frontier. Tangency with SWF = best point. Pareto optimality alone = anywhere on the frontier.
• **Exam tip:** GUPF-SWF tangency diagram answers the entire question. Point E (tangency) = SW maximum. Points c and c₁ on GUPF are Pareto-optimal but on lower social indifference contours.
• **Professor's corner:** This is the quintessential welfare economics essay question. "All points on GUPF are Pareto-optimal, but only one maximizes SW" is the key punchline.

### Question 2
**Q:** Explain assumptions about marginal utility of money for Hicks-Kaldor compensation to be correct. Can compensation be correct?
**A:**
• **Hicks-Kaldor criterion:** A change is SW-improving if gainers could potentially compensate losers and still be better off — based on WTP vs WTA comparison.
• **Assumption 1 — Constant MU of money:** MU of money is assumed constant across individuals and income ranges. Allows money measures to serve as utility measures directly.
• **Assumption 2 — No income effects on valuations:** WTP reflects true utility change independent of income level. If MU differs, a rich person's WTP of £2000 may represent less utility than a poor person's £1000.
• **Assumption 3 — Ordinal utility sufficient:** The criterion claims to avoid interpersonal comparisons, but money valuation implicitly treats money as a cardinal utility proxy.
• **Can compensation be correct? YES — only if MU of money is equal across individuals.** Then £1 gain = £1 loss in utility terms → Kaldor-Hicks gives correct welfare ordering.
• **Can compensation be correct? NO if MU differs.** Example: Millionaire gains £2000 (low MU) vs poor loses £1000 (high MU). Kaldor-Hicks passes, but total utility actually falls.
• **Potential ≠ actual compensation:** If compensation is not paid, losers are actually worse off. The criterion ignores this — it only requires potential compensation.
• **Constant MU unrealistic:** MU of money declines with income — a well-established empirical regularity. This undermines the criterion's theoretical foundation.
• **Robbins critique:** Interpersonal comparisons of utility have no scientific basis. Kaldor-Hicks claims to avoid them but fails — money-metric welfare judgements implicitly compare MU across individuals.
• **Scitovsky paradox:** Kaldor-Hicks can produce contradictory rankings (A > B and B > A) when UPFs intersect. The Scitovsky reversal test adds a second condition to resolve this.
• **Income distribution ignored:** The criterion accepts status quo distribution as ethically neutral. If distribution is inequitable, welfare ranking is biased toward the rich (higher WTP).
• **Practical verdict:** Usable as a rough efficiency check, but must be supplemented by explicit distributional judgements for proper welfare analysis.

### Question 3
**Q:** 2-person 2-good fixed supply: show Pareto optimality for consumption with equations.
**A:**
• **Setup:** 2 consumers (A,B), 2 goods (X,Y) with fixed total supply X̄, Ȳ. A consumes (X_A,Y_A), B consumes (X_B,Y_B) = (X̄−X_A, Ȳ−Y_A).
• **Definition:** An allocation is Pareto-optimal in consumption if it is impossible to reallocate goods to make one consumer better off without making the other worse off.
• **Optimization problem:** Max U_A(X_A,Y_A) s.t. U_B(X̄−X_A, Ȳ−Y_A) ≥ Ū_B, plus resource and non-negativity constraints.
• **Lagrangian:** ℒ = U_A(X_A,Y_A) + λ[U_B(X̄−X_A, Ȳ−Y_A) − Ū_B].
• **FOC for X:** ∂ℒ/∂X_A = ∂U_A/∂X_A + λ·∂U_B/∂X_B·(−1) = 0 ⇒ ∂U_A/∂X_A = λ·∂U_B/∂X_B.
• **FOC for Y:** ∂ℒ/∂Y_A = ∂U_A/∂Y_A + λ·∂U_B/∂Y_B·(−1) = 0 ⇒ ∂U_A/∂Y_A = λ·∂U_B/∂Y_B.
• **Dividing FOCs:** (∂U_A/∂X_A)/(∂U_A/∂Y_A) = (∂U_B/∂X_B)/(∂U_B/∂Y_B) ⇒ **MRS^A_xy = MRS^B_xy** where MRS^i_xy = MU_x^i / MU_y^i.
• **Economic intuition:** If MRS_A > MRS_B, A values X more than B does → transfer X from B to A, Y from A to B → both gain → trade continues until MRS equalize.
• **Contract curve:** Locus of all points in the Edgeworth box satisfying MRS^A_xy = MRS^B_xy. Every point on the contract curve is Pareto-optimal.
• **Infinite optima:** The contract curve is a continuum — each point corresponds to a different utility distribution. Pareto optimality alone does not select a unique allocation.
• **Graphical representation:** Edgeworth box: dimensions X̄ × Ȳ. A's origin = SW corner, B's origin = NE corner. Tangency of indifference curves = contract curve.
• **Exam tip:** Write the Lagrangian cleanly then explain economics: if MRS differ, both gain from trade until MRS equalize. Contract curve is not unique — connects to Pareto-but-not-SW-max point.

### Question 4
**Q:** Firm 1 external economies, firm 2 diseconomies. p₁=p₂=15. Show Pareto optimality through taxes/subsidies. Find social dividend.
**A:**
• **Externalities identified:** Firm 1: C₁ = 0.1q₁²+5q₁−0.1q₂² (external economy from Firm 2 — −0.1q₂² reduces C₁ as q₂↑). Firm 2: C₂ = 0.2q₂²+7q₂+0.025q₁² (external diseconomy from Firm 1 — +0.025q₁² raises C₂ as q₁↑).
• **Step 1 — Private optimum (MC = p = 15):** MC₁^priv = 0.2q₁+5=15 ⇒ q₁=50. MC₂^priv = 0.4q₂+7=15 ⇒ q₂=20. Private profits: π₁=290, π₂=17.5, total = 307.5.
• **Step 2 — Social optimum (joint profit max):** TC = C₁+C₂ = 0.125q₁²+0.1q₂²+5q₁+7q₂. SMC₁ = 0.25q₁+5=15 ⇒ q₁*=40. SMC₂ = 0.2q₂+7=15 ⇒ q₂*=40.
• **Social profits:** π₁*=400, π₂*=−40, total = 360. Firm 2 makes a loss at social optimum — realistic and shows the need for subsidy.
• **Step 3 — Pigouvian tax on Firm 1:** t = marginal external cost at q₁* = ∂C₂/∂q₁ = 0.05(40) = 2/unit. Corrects overproduction from 50→40.
• **Step 3 — Pigouvian subsidy to Firm 2:** s = marginal external benefit at q₂* = −∂C₁/∂q₂ = 0.2(40) = 8/unit. Corrects underproduction from 20→40.
• **Verification with tax:** MC₁^priv + t = 0.2q₁+5+2 = 0.2q₁+7 = 15 ⇒ q₁=40 ✓. With subsidy: MC₂^priv − s = 0.4q₂+7−8 = 0.4q₂−1 = 15 ⇒ q₂=40 ✓.
• **Step 4 — Social dividend:** Total profit at social optimum (360) minus total profit at private optimum (307.5) = **52.5**. Net gain from correcting externalities.
• **Economic intuition:** Private optimum ignores cross-firm effects. Firm 1 overproduces (imposes cost on Firm 2); Firm 2 underproduces (provides benefit to Firm 1). Pigouvian taxes/subsidies align private with social incentives.
• **Exam tip:** Structure: (1) Private optimum (MC=p), (2) Social optimum (minimize total cost), (3) Compare outputs, (4) Tax/subsidy = marginal external effect at social optimum, (5) Social dividend = change in total profit.
• **Professor's corner:** The solution is algorithmic. The negative profit for Firm 2 at social optimum is realistic and shows the need for subsidy.

### Question 5
**Q:** State and explain First and Second Welfare Theorems with implications.
**A:**
• **First Welfare Theorem:** Every competitive equilibrium is Pareto-optimal (given LNS, perfect competition, complete markets, no externalities). The price mechanism coordinates decentralized decisions to achieve efficiency.
• **First Theorem — Marginal conditions:** At equilibrium: MRS^A = MRS^B (via equal price ratios), MRTS^X = MRTS^Y (via equal factor prices), MRPT = MRS (via P=MC). All three Pareto conditions satisfied automatically.
• **First Theorem — Implications:** (1) Market efficiency — free markets achieve efficiency without central planning. (2) Non-intervention basis — justifies laissez-faire. (3) Limited by assumptions — when assumptions fail, intervention may improve efficiency.
• **Second Welfare Theorem:** Any Pareto-optimal allocation can be realized as a competitive equilibrium with appropriate lump-sum transfers (given convex preferences and production sets).
• **Second Theorem — Intuition:** Efficiency and equity can be separated. Society decides on a "fair" distribution (via lump-sum transfers), then markets achieve efficiency through the price mechanism.
• **Second Theorem — Implications:** (1) Separation of efficiency and equity. (2) Role for government — redistribute endowments, don't intervene in prices. (3) Policy design — transfers should be lump-sum (but infeasible in practice → second-best problems).
• **Comparison:** First Theorem: CE → PO (markets work). Second Theorem: PO → CE with transfers (redistribute then markets work).
• **Key assumption difference:** First Theorem requires local non-satiation; Second Theorem requires convexity.
• **Failure conditions:** Market power, externalities, public goods, incomplete markets, asymmetric information, non-convexity — all prevent theorems from holding.
• **Policy relevance:** First Theorem supports free markets. Second Theorem is more policy-relevant — justifies redistribution without sacrificing efficiency.
• **Exam tip:** Know the direction of each theorem (CE→PO vs PO→CE) and the key assumption (LNS vs convexity). Second Theorem separates efficiency from equity.
• **Professor's corner:** Strong answers distinguish the direction of each theorem. The Second Theorem justifies redistribution without sacrificing efficiency — this is its key policy insight.

### Question 6
**Q:** What is social welfare function? Explain Utilitarian vs Rawlsian welfare functions.
**A:**
• **SWF:** W = F(U₁,...,Uₙ) — a rule mapping individual utility levels to aggregate social welfare. Different ethical philosophies imply different functional forms.
• **Utilitarian (Bentham):** W = ΣUᵢ. Social indifference curves are linear with slope −1 in U_A-U_B space. Only total utility matters — distribution irrelevant.
• **Utilitarian — Implication:** A gain of 1 util to a rich person = a gain of 1 util to a poor person. A transfer from poor to rich with ΔW = 0 is "acceptable" as long as total utility is unchanged.
• **Utilitarian — Weakness:** Ignores inequality completely. The sum-ranking property means any distribution with the same total utility is equally good regardless of who gets what.
• **Rawlsian (maximin):** W = min{U₁,...,Uₙ}. Social indifference curves are L-shaped (right-angle) in U_A-U_B space — perfect complements in utility.
• **Rawlsian — Implication:** Only the worst-off person's utility matters. Any change that improves the worst-off is good, even if it dramatically reduces everyone else's utility.
• **Rawlsian — Weakness:** Extreme — ignores losses to the non-poor entirely. May justify very inefficient redistributions. Lexicographic priority to the worst-off.
• **Graphical comparison:** Utilitarian = straight line (perfect substitutes in utility). Rawlsian = right-angle (perfect complements). The shape reveals the entire ethical stance.
• **Nash (Cobb-Douglas) SWF:** W = ΠUᵢ. Social indifference curves are rectangular hyperbolas — moderate inequality aversion. A compromise between Utilitarian and Rawlsian.
• **Bergson-Samuelson general form:** W = F(U₁,...,Uₙ) with unspecified weights. Allows any degree of inequality aversion. Weighted utilitarian: W = ΣαᵢUᵢ with different weights for different individuals.
• **Exam tip:** Draw the social indifference curves for both types. Utilitarian = straight line. Rawlsian = right-angle. The shape reveals the entire ethical stance.
• **Professor's corner:** The shape of the social indifference curves IS the answer. Utilitarian = straight line; Rawlsian = L-shaped. The graph reveals the entire ethical stance.

### Question 7
**Q:** Explain Hicks-Kaldor compensation principle. How did Scitovsky correct the contradiction?
**A:**
• **Hicks-Kaldor principle:** A change from A to B increases SW if gainers could potentially compensate losers and still be better off. Based on WTP vs WTA comparison — if gainers' max WTP > losers' min WTA, the change is welfare-improving.
• **Numerical example:** Road project — gainers (villagers) WTP = ₹1.2 lakh, losers (landowners) WTA = ₹1 lakh. Since 1.2 > 1.0, gainers could compensate losers and still have ₹0.2 lakh net gain → passes Kaldor-Hicks test.
• **Assumptions:** (1) Individuals best judges of own welfare. (2) Tastes constant. (3) Ordinal utility sufficient. (4) No interpersonal comparisons needed (claimed). (5) No externalities. (6) MU of money constant (implicit).
• **Scitovsky paradox:** If two UPFs intersect, Kaldor-Hicks can give A > B AND B > A simultaneously — a logical contradiction. Movement a→a₁ passes K-H test, but a₁→a also passes K-H test.
• **Why the paradox occurs:** Intersecting UPFs mean the distribution of gains/losses depends on which state is the starting point. The status quo biases the K-H test.
• **Scitovsky's double test — (i) Forward test:** Gainers' WTP > Losers' WTA (gainers can compensate losers). This is the standard Kaldor-Hicks condition.
• **Scitovsky's double test — (ii) Reversal test:** Losers' WTP to prevent < Gainers' WTA to accept (losers cannot bribe gainers to reject the change). Both tests must pass for a genuine improvement.
• **In the intersecting UPF example:** a→a₁ passes (i) but fails (ii) — losers at a₁ could bribe gainers to move back to a. Therefore a→a₁ is NOT a welfare improvement under Scitovsky.
• **Limitations:** (1) Potential ≠ actual compensation — losers worse off if unpaid. (2) Ignores income distribution — status quo accepted as neutral. (3) Constant MU of money assumed. (4) Not a complete ordering. (5) Implicit value judgements despite claims of value-freedom.
• **Exam tip:** Show with intersecting UPFs that Kaldor-Hicks can lead to A > B and B > A. Scitovsky's double test resolves this by requiring both forward and reverse conditions.
• **Professor's corner:** The intersecting UPF diagram is the classic exam point. The double test resolves the paradox by requiring both forward and reverse conditions to hold.

### Question 8
**Q:** Does perfect competition ensure welfare maximization? Examine.
**A:**
• **Short answer:** Perfect competition ensures Pareto efficiency (First Welfare Theorem) but does NOT guarantee social welfare maximization, which also requires distributional equity.
• **Efficiency — Yes:** Under perfect competition: MRS^A = MRS^B (same prices), MRTS^X = MRTS^Y (same factor prices), MRPT = MRS (P=MC). All three Pareto conditions automatically satisfied → every CE is Pareto-optimal.
• **Why not SW max — (1) Pareto ≠ SW max:** All points on GUPF are Pareto-optimal, but only the tangency with SWF maximizes welfare. Competition places us somewhere on GUPF, not at the bliss point.
• **Why not SW max — (2) Initial endowments matter:** The CE reached depends on initial endowment distribution. Different endowments → different (all Pareto-optimal) equilibria → different welfare levels.
• **Why not SW max — (3) Market failures:** Monopoly (P>MC), externalities (private≠social cost), public goods (free-rider), increasing returns (non-convex), asymmetric information (adverse selection) — all prevent even Pareto optimality.
• **Why not SW max — (4) Distributional equity:** Even a Pareto-optimum may involve extreme inequality. Second Welfare Theorem says redistribution + CE achieves equity + efficiency, but requires active state intervention.
• **First Welfare Theorem limitation:** Only ensures efficiency, not equity. Markets work but the theorem says nothing about whether the resulting distribution is fair.
• **Second Welfare Theorem insight:** Efficiency and equity can be separated — redistribute lump-sum, then let markets work. But lump-sum transfers are practically and politically infeasible.
• **Synthesis:** Competition is necessary but not sufficient for SW maximization. The ideal combines: perfect competition (efficiency) + lump-sum transfers (equity) + SWF (distributional choice).
• **Exam tip:** Structure: (1) Yes — competition ensures Pareto efficiency via three marginal conditions. (2) No — Pareto≠SW max, endowments matter, market failures, equity requires redistribution. (3) Conclusion — necessary but not sufficient.
• **Professor's corner:** This is the synthesis question tying together all welfare economics. Structure: Yes (efficiency) → No (endowments, failures, equity) → Conclusion (necessary but not sufficient). Reference both Welfare Theorems explicitly.

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
• **GE Definition:** A state where all markets (goods and factors) and all decision-makers (consumers and firms) are simultaneously in equilibrium — every market clears at positive prices, each consumer maximises utility given budget, each firm maximises profit given technology (Koutsoyiannis p. 486).
• **PE vs GE contrasted:** PE studies a single market in isolation holding all else constant (ceteris paribus). GE models all markets simultaneously with full cross-market interdependence. PE determines one price; GE determines all prices simultaneously via a system of simultaneous equations. PE ignores feedback; GE explicitly models them.
• **Key formula:** GE is a price vector $\mathbf{P}^* = (P_1^*, \ldots, P_n^*, w^*, r^*)$ such that excess demand $E_i(\mathbf{P}^*) = 0$ for all $i$, with $E_i(P) = QD_i(P) - QS_i(P)$. In PE, only $E_1(P_1^*) = 0$ for one market.
• **Drought example (GE chain):** Wheat harvest destroyed $\to$ wheat price $\uparrow$ $\to$ bread price $\uparrow$ $\to$ consumers substitute rice $\to$ rice price $\uparrow$ $\to$ farmers shift land from cotton to wheat $\to$ cotton price $\uparrow$ $\to$ textile costs $\uparrow$ $\to$ clothing prices $\uparrow$ $\to$ factor markets adjust (wages, rents) $\to$ feedback to all markets. PE stops after the first step.
• **Why GE matters:** PE misses income effects (factor price changes alter consumer budgets), cross-price effects (substitutes/complements), and factor reallocation effects. GE reveals the full generalised interdependence of all economic variables.
• **Exam tip:** Contrast GE and PE on three dimensions — scope (one market vs all), feedback (none vs full interdependence), and determinacy (absolute vs relative prices). Name Arrow-Debreu (1954) for the existence proof and Walras for the tâtonnement process.

### Question 2 & 3
**Q:** Explain existence, uniqueness, stability of GE graphically.
**A:**
• **(i) Existence:** Does any P > 0 clear all markets? Define excess demand $E(P) = Q_D(P) - Q_S(P)$. Existence requires $E(P)$ continuous (continuous D and S functions), $E(P) > 0$ at very low P (D exceeds S), and $E(P) < 0$ at very high P (S exceeds D). By the Intermediate Value Theorem, $\exists P^* > 0$ such that $E(P^*) = 0$. No equilibrium exists if D and S never intersect (e.g., backward-bending S lies everywhere above D).
• **(ii) Uniqueness:** Is there exactly one equilibrium? If $E(P)$ is monotonic ($dE/dP < 0$ for all $P$), the equilibrium is unique — only one price where $E(P) = 0$. Multiple intersections of D and S (e.g., backward-bending labour supply curve) create multiple equilibria. Normal goods (downward-sloping D, upward-sloping S) guarantee $dE/dP < 0$ and uniqueness. Giffen goods or backward-bending supply can create multiple crossings.
• **(iii) Stability:** If displaced, does the system return to equilibrium? Stable if $dE/dP < 0$ at equilibrium (D cuts S from above) — when $P < P^*$, excess demand pushes price up; when $P > P^*$, excess supply pushes price down. Unstable if $dE/dP > 0$ at equilibrium (D cuts S from below) — price diverges from equilibrium. Walrasian tâtonnement: auctioneer calls prices proportionally to excess demand: $\dot{P} = k \cdot E(P)$, stable where $\partial E/\partial P < 0$.
• **Arrow-Debreu (1954) existence conditions:** Perfect competition in all markets, no indivisibilities, no increasing returns to scale, continuous convex preferences and production sets, well-behaved excess demand functions satisfying homogeneity of degree zero and Walras' Law.
• **Exam tip:** Draw all four cases: (1) unique stable equilibrium, (2) unique unstable equilibrium, (3) multiple equilibria (alternating stable/unstable), (4) no equilibrium. Always translate D-S into $E(P) = Q_D - Q_S$ and state stability in terms of $dE/dP$ sign.

### Question 4
**Q:** Graphically explain: external shock in product market $\to$ factor market $\to$ equilibrium restored.
**A:**
• **Step 1 — Initial GE:** Economy starts with all markets cleared at prices $(P_{X0}, P_{Y0}, w_0, r_0)$.
• **Step 2 — Taste shock:** Consumers shift preferences toward X (away from substitute Y). $D_X$ shifts right $(D_0 \to D_1)$, $D_Y$ shifts left.
• **Step 3 — Short-run product response:** $P_X$ rises $(P_0 \to P_1)$, $Q_X$ increases; $P_Y$ falls, $Q_Y$ decreases. Excess profits in X; losses in Y.
• **Step 4 — Firm adjustment:** X firms expand output along rising MC; Y firms contract.
• **Step 5 — Factor market transmission:** X expands $\to$ $D_L$ and $D_K$ rise $\to$ $w_X \uparrow$, $r_X \uparrow$. Y contracts $\to$ $D_L$ and $D_K$ fall $\to$ $w_Y \downarrow$, $r_Y \downarrow$. Factor price differential emerges.
• **Step 6 — Factor mobility:** L and K migrate from Y to X until factor prices equalise. $S_L$ shifts right in X (lowers $w$), $S_L$ shifts left in Y (raises $w$).
• **Step 7 — Stolper-Samuelson effect:** If X is less capital-intensive than Y, net demand for L rises ($w$ rises overall), net demand for K falls ($r$ falls overall). New factor prices: $w_2 > w_0$, $r_2 < r_0$.
• **Step 8 — Long-run product adjustment:** Entry into X shifts $S_X$ right $\to$ $P_X$ settles at $P_{X2}$ (between $P_0$ and $P_1$). Exit from Y shifts $S_Y$ left $\to$ $P_Y$ settles at $P_{Y2}$.
• **Final GE:** All markets clear at $(P_{X2}, P_{Y2}, w_2, r_2)$, output mix $(X_2 > X_0, Y_2 < Y_0)$, normal profits restored everywhere. Draw the 8-panel Koutsoyiannis diagram (Figs 22.10-22.22) showing all linkages.

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
• **Model structure:** The $2\times 2\times 2$ model has 2 factors (L, K), 2 commodities (X, Y), 2 consumers (A, B). It is the simplest general equilibrium framework capturing factor-product interdependence.
• **Assumptions (6):** (1) Fixed supplies of L and K, homogeneous, perfectly divisible. (2) Two goods X, Y with smooth convex isoquants, CRTS, no production externalities. (3) Two consumers A, B with ordinal convex indifference curves (diminishing MRS), no consumption externalities. (4) Consumers maximise utility; firms maximise profit. (5) Factors owned by consumers; full employment; all income spent. (6) Perfect competition in all markets.
• **Edgeworth production box:** Dimensions = total K × total L. X-isoquants originate from SW corner; Y-isoquants originate from NE corner. Each point in the box represents an allocation of K and L between the two industries.
• **Contract curve:** Locus of tangency points between X and Y isoquants — condition is $\text{MRTS}^X_{LK} = \text{MRTS}^Y_{LK}$. Points on the contract curve are Pareto-efficient in production: impossible to increase output of one good without reducing the other.
• **Off-curve inefficiency:** At points like Z off the contract curve, the "lens" between intersecting isoquants shows reallocations that increase both outputs. Reallocation along an isoquant frees up one factor that can expand the other good.
• **Competitive equilibrium:** In perfect competition, profit maximisation requires each firm to set $\text{MRTS} = w/r$. Since $w/r$ is the same for both firms, equilibrium must lie on the contract curve. The contract curve maps to the production possibility curve (PPC) in output space.

### Question 2
**Q:** Graphically explain: external shock $\to$ factor market $\to$ equilibrium restored in both markets.
**A:**
• This is the same mechanism as Topic 6A Q4 but asked specifically in the $2\times 2\times 2$ framework using the Koutsoyiannis 8-panel diagram (pp. 491-495).
• **Shock:** Exogenous taste shift toward X ($D_X \uparrow$) and away from Y ($D_Y \downarrow$).
• **Product market:** X industry — price rises ($P_0 \to P_1$), output expands ($X_0 \to X_1$), excess profits. Y industry — price falls, output contracts ($Y_1 \to Y_0$), losses.
• **Firm response:** X firms expand output along rising MC (increasing-cost industry). Y firms contract.
• **Factor market effects:** X expansion raises $D_L$ and $D_K$ $\to$ $w_X \uparrow$, $r_X \uparrow$. Y contraction lowers $D_L$ and $D_K$ $\to$ $w_Y \downarrow$, $r_Y \downarrow$. Factor price differential drives migration.
• **Factor mobility:** L and K migrate from Y to X. In X, factor supply shifts right (lowers $w$, $r$); in Y, factor supply shifts left (raises $w$, $r$). Process continues until factor prices equalise.
• **Stolper-Samuelson outcome:** If X is less capital-intensive than Y, net $D_L$ rises $\to$ $w_2 > w_0$; net $D_K$ falls $\to$ $r_2 < r_0$. Factor intensities determine the direction of factor price changes.
• **Long-run adjustment:** Entry into X shifts $S_X$ right; exit from Y shifts $S_Y$ left. New GE at $(P_{X2}, P_{Y2}, w_2, r_2)$ with normal profits. Both industries are increasing-cost, so LAC shifts due to factor price changes.

### Question 3
**Q:** Explain production/consumption/simultaneous equilibrium in GE through Edgeworth box.
**A:**
• These three conditions are the static Pareto-efficiency properties of a GE state — the Fundamental Condition of Pareto Optimality (Koutsoyiannis pp. 497-504).
• **(a) Production equilibrium (efficiency in factor substitution):** Condition $\text{MRTS}^X_{LK} = \text{MRTS}^Y_{LK} = w/r$ ensures optimal allocation of K and L between X and Y. Achieved on the Edgeworth contract curve of production. The contract curve maps to the production possibility curve (PPC) in output space.
• **(b) Consumption equilibrium (efficiency in distribution):** Condition $\text{MRS}^A_{xy} = \text{MRS}^B_{xy} = P_X/P_Y$ ensures optimal distribution of the produced goods $(X_e, Y_e)$ between A and B. Achieved on the Edgeworth contract curve of consumption within the consumption box of dimensions $X_e \times Y_e$.
• **(c) Simultaneous equilibrium (efficiency in product-mix):** Condition $\text{MRPT}_{xy} = \text{MRS}^A_{xy} = \text{MRS}^B_{xy}$ marries production and consumption sides. In perfect competition, $\text{MRPT} = MC_X/MC_Y = P_X/P_Y = \text{MRS}$, so the output mix consumers prefer is exactly what producers choose to supply.
• **The three Pareto conditions together:** (1) $\text{MRS}^A = \text{MRS}^B$ (efficient distribution), (2) $\text{MRTS}^X = \text{MRTS}^Y$ (efficient factor allocation), (3) $\text{MRPT} = \text{MRS}$ (efficient output mix). These are necessary and sufficient for Pareto optimality under the $2\times 2\times 2$ assumptions.
• **Diagrammatic insight:** The PPC's slope (MRPT) must equal the community indifference curve's slope (MRS) at the equilibrium point. This ensures production plans are consistent with consumption preferences.

### Question 4
**Q:** Define general equilibrium. How differs from partial equilibrium? Example.
**A:**
• **GE (repeated):** A state where all markets and all decision-makers are simultaneously in equilibrium — every market cleared at positive prices, every consumer maximising utility, every firm maximising profit. GE determines a vector of relative prices, not absolute prices (numeraire needed).
• **PE vs GE contrasted:** PE holds ceteris paribus and studies one market in isolation. GE relaxes ceteris paribus entirely — everything depends on everything else. PE determines one price; GE solves a system of simultaneous equations for all prices.
• **Coffee/tea example:** Frost destroys coffee crops. PE: coffee price rises. GE: coffee $\uparrow$ $\to$ consumers switch to tea $\to$ tea price $\uparrow$ $\to$ tea farmers expand $\to$ demand for factors in tea $\uparrow$ $\to$ wages in tea regions $\uparrow$ $\to$ income $\uparrow$ $\to$ further demand shifts $\to$ feedback to coffee market $\to$ all prices adjust until a new GE is found.
• **Mathematical structure:** PE solves $Q_D(P) = Q_S(P)$ for one good. GE solves $E_i(P_1,\ldots,P_n) = 0$ for $i = 1,\ldots,n$, where $E_i$ are excess demand functions. Only $n-1$ equations are independent (Walras' Law), so one price is set as numeraire.
• **Key insight:** GE captures feedback loops PE misses — factor price changes (income effects), cross-price effects (substitutes/complements), and factor reallocation across sectors. This is why trade policy, tax reform, and environmental regulation all require GE analysis.

### Question 5
**Q:** What are assumptions of 2×2×2 model? How is GE reached?
**A:**
• **Assumptions (Koutsoyiannis pp. 496-497):** (1) 2 factors (L, K) — fixed supplies, homogeneous, perfectly divisible. (2) 2 commodities (X, Y) — given technology, smooth convex isoquants, CRTS, no production externalities. (3) 2 consumers (A, B) — ordinal convex indifference curves, diminishing MRS, independent preferences (no bandwagon/snob/Veblen). (4) Maximising behaviour — consumers maximise utility, firms maximise profit. (5) Factor ownership by consumers, full employment, all income spent. (6) Perfect competition — all agents face same $(P_X, P_Y, w, r)$.
• **How GE is reached (6 steps):**
  **(1) Production side:** Profit-maximising firms choose K/L mix where $\text{MRTS}^X_{LK} = \text{MRTS}^Y_{LK} = w/r$. This places production on the Edgeworth contract curve.
  **(2) Product transformation:** Contract curve maps to the PPC. Firms choose output where $\text{MRPT} = P_X/P_Y$.
  **(3) Consumption side:** Given $(X_e, Y_e)$ from production, consumers maximise utility: $\text{MRS}^A = \text{MRS}^B = P_X/P_Y$. Edgeworth consumption contract curve.
  **(4) Simultaneous equilibrium:** $\text{MRPT} = \text{MRS}^A = \text{MRS}^B = P_X/P_Y$ — production plans consistent with consumption preferences.
  **(5) Price determination:** All prices are ratios (relative prices only). The system has 18 equations with 18 unknowns, but one is redundant (Walras' Law), so a numeraire is needed to pin down absolute prices.
  **(6) Income distribution:** Determined by factor ownership, which must be consistent with equilibrium consumption — indeterminate without specifying ownership shares (Second Welfare Theorem connection).

### Question 6
**Q:** Exchange economy: A: U_A = X_A Y_A, B: U_B = X_B + Y_B. Endowments: A(10,50), B(50,10). Find contract curve, check efficiency.
**A:**
• **Setup:** Total X = 60, total Y = 60. Edgeworth box dimensions: width = 60 (X), height = 60 (Y). A's origin at SW, B's origin at NE.
• **MRS derivation:** For A (Cobb-Douglas), $MU_X = Y_A$, $MU_Y = X_A$, so $\text{MRS}_A = Y_A/X_A$. For B (perfect substitutes), $MU_X = MU_Y = 1$, so $\text{MRS}_B = 1$ always — B is willing to trade one good for the other at a 1:1 ratio.
• **Pareto efficiency condition (interior):** $\text{MRS}_A = \text{MRS}_B \implies Y_A/X_A = 1 \implies Y_A = X_A$. The contract curve is $Y_A = X_A$ for interior allocations where B consumes both goods.
• **Corner solutions possible:** With B's linear utility, if $P_X \neq P_Y$, B will consume only the cheaper good. The contract curve then lies on the edge of the box, not along $Y_A = X_A$. The interior contract curve $Y_A = X_A$ applies only when $P_X = P_Y$.
• **Endowment point (10,50):** $\text{MRS}_A = 50/10 = 5 \neq 1 = \text{MRS}_B$. Since $\text{MRS}_A > \text{MRS}_B$, A values Y more relative to X than B does — mutually beneficial trade is possible (A gives Y to B for X). $U_A = 500$, $U_B = 60$. **Not Pareto-efficient.**
• **Allocation (80,50) check:** Infeasible — total X endowment is 60, so $X_A$ cannot exceed 60. This allocation lies outside the Edgeworth box and cannot be in the core (core requires feasibility).
• **Exam tip:** Always check corner solutions first when one consumer has linear utility. Derive contract curve by equating MRS, then check if the proposed allocation is feasible given total endowments.

### Question 7
**Q:** Present a 2×2×2 Walrasian system. Does GE solution exist?
**A:**
• **18 unknowns:** (1) quantities demanded of X and Y by A and B: $2 \times 2 = 4$; (2) quantities supplied of L and K by A and B: $2 \times 2 = 4$; (3) quantities demanded of L and K by X and Y firms: $2 \times 2 = 4$; (4) quantities supplied of X and Y by firms: 2; (5) prices of X, Y, L, K: 4. Total = 18.
• **18 equations:** (1) demand functions of A and B for X and Y: 4; (2) supply functions of L and K by A and B: 4; (3) demand functions for L and K by firms: 4; (4) supply functions of X and Y by firms: 2; (5) market-clearing equations for X, Y, L, K: 4. Total = 18.
• **Walras' Law:** One market-clearing equation is redundant — if $n-1$ markets clear, the $n$th must also clear ($\sum P_i \cdot ED_i = 0$). This reduces independent equations to 17.
• **Numeraire resolution:** With 17 independent equations and 18 unknowns, set one price = 1 (numeraire). Now 17 equations = 17 unknowns. System is determinate **in relative prices only**. Absolute prices require a monetary theory.
• **Does GE exist?** Equality of equations and unknowns is **neither necessary nor sufficient** for existence. Three issues: (1) Walras' Law reduces independent equations; (2) non-negativity constraints ($P \ge 0$, quantities $\ge 0$) are not captured by counting; (3) functional forms must satisfy continuity and convexity.
• **Arrow-Debreu (1954) existence conditions:** Perfect competition, no indivisibilities, no increasing returns to scale, continuous convex preferences and production sets, well-behaved excess demand functions. Under these: **YES, GE exists**. Without them (oligopoly, indivisibilities, IRS): existence is not guaranteed. The proof uses the Kakutani fixed-point theorem.

### Question 8
**Q:** Three-good world: excess demands given. Find Z₁ via Walras' law. Solve price ratios.
**A:**
• **Walras' Law (core statement):** The sum of excess demands across all markets valued at market prices equals zero: $\sum_{i=1}^n P_i \cdot ED_i = 0$. This is an identity that follows from agents' budget constraints — if each agent spends all income, total value of excess demands must be zero.
• **Implication:** If $n-1$ markets clear ($ED_i = 0$ for $i=2,\ldots,n$), the $n$th market automatically clears ($ED_1 = 0$). Only $n-1$ independent equilibrium equations exist.
• **Given setup:** Three-good world with excess demand functions $Z_1, Z_2, Z_3$. Using Walras' Law: $P_1 \cdot Z_1 + P_2 \cdot Z_2 + P_3 \cdot Z_3 = 0 \implies Z_1 = -(P_2/P_1)Z_2 - (P_3/P_1)Z_3$.
• **Solving procedure:** Set $P_1 = 1$ (numeraire). Solve $Z_2(P_1=1, P_2, P_3) = 0$ and $Z_3(P_1=1, P_2, P_3) = 0$ simultaneously for $P_2$ and $P_3$.
• **Numerical solution:** For consistent excess demand functions: $P_2 = 10/17$, $P_3 = 13/17$. Verify: at these prices, $Z_1$ automatically equals zero via Walras' Law without needing to solve $Z_1 = 0$ directly.
• **Key insight:** In an $n$-good Walrasian system, you only solve $n-1$ market-clearing equations. The $n$th market is automatically satisfied. The numeraire choice is arbitrary (setting $P_1 = 1$ is conventional) and does not affect relative prices. Always verify that the excess demand functions satisfy Walras' Law identically — otherwise they are not derived from utility/profit maximisation.

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
• **Nash equilibrium definition:** A set of strategies (one per player) such that no player can unilaterally deviate and improve their payoff. Each player's strategy is a **best response** to the other's strategies. No regrets, no unilateral improvements.
• **Bertrand with differentiated products setup:** $\pi_1 = (p_1 - 10)(100 - 2p_1 + p_2)$, $\pi_2 = (p_2 - 10)(100 - 2p_2 + p_1)$. Products are imperfect substitutes — each firm's demand depends on own price (negative) and rival's price (positive).
• **First-order conditions:** $\partial\pi_1/\partial p_1 = 120 - 4p_1 + p_2 = 0 \implies p_1 = 30 + p_2/4$ (BR₁). Similarly $p_2 = 30 + p_1/4$ (BR₂). Best response functions are upward-sloping — prices are **strategic complements** ($dp_1/dp_2 = 1/4 > 0$).
• **Solving the Nash equilibrium:** Substitute BR₂ into BR₁: $p_1 = 30 + (30 + p_1/4)/4 = 30 + 7.5 + p_1/16$. Then $(15/16)p_1 = 37.5 \implies p_1 = 40$. By symmetry, $p_2 = 30 + 40/4 = 40$.
• **Equilibrium outcomes:** $(p_1^*, p_2^*) = (40, 40)$. Quantities: $q_1 = q_2 = 100 - 2(40) + 40 = 60$. Profits: $\pi_1 = \pi_2 = (40 - 10)(60) = 1800$.
• **Verification:** Neither firm can increase profit by unilaterally changing price. If Firm 1 raised price, demand would fall sharply (own-price effect dominates cross-price effect). The BR functions intersect uniquely at (40,40).
• **Exam tip:** Always derive BR functions from FOCs. Compare with collusive outcome (higher price, higher joint profit). Highlight that BR slopes are positive = strategic complements (unlike Cournot where quantities are strategic substitutes with negative BR slopes).

### Question 2
**Q:** What is Prisoners' dilemma? Implications for oligopolistic market?
**A:**
• **PD structure:** Two prisoners, each with two actions (Confess/Don't Confess). Payoffs (years in prison, lower is better): mutual non-confession = (-1,-1), mutual confession = (-5,-5), one-sided confession = (0,-10) for confessor. **Dominant strategy** for each: Confess (5 < 10 if other confesses; 0 < 1 if other does not). Yet mutual confession (-5) is collectively worse than mutual non-confession (-1).
• **Source of dilemma:** The dilemma is structural — it arises from the payoff matrix ordering ($T > R > P > S$ for one player), not from irrationality. Each player has a dominant strategy to defect, even though both prefer the cooperative outcome.
• **Oligopoly implications:** (1) **Price competition** — firms undercut each other like confessing, leading to Bertrand-level profits below monopoly. (2) **Advertising wars** — each firm advertises because rival will if they don't, but mutual advertising is a costly arms race that reduces joint profits. (3) **R&D investment** — each firm fears being left behind, so overinvests in R&D that could be avoided collectively.
• **Escaping the dilemma via repeated games:** In infinitely repeated PD, the cooperative outcome can be sustained as SPNE using grim trigger or tit-for-tat strategies. The Folk Theorem states that any feasible, individually rational payoff vector can be sustained if players are sufficiently patient (discount factor $\delta > \delta^*$).
• **Discount factor threshold:** $\delta^* = (\pi_{defect} - \pi_{coop})/(\pi_{defect} - \pi_{punish})$. Cooperation requires $\delta \ge \delta^*$ — the gain from defecting today must be outweighed by the present value of future punishment.
• **Exam tip:** Draw the PD matrix. Emphasise that the dilemma is structural (T > R > P > S), not about irrationality. Link to oligopoly: undetected cheating on collusion is the real-world equivalent of confessing.

### Question 3
**Q:** Two firms considering entry. Market supports only one. Firm B observes A's decision. Extensive form, backward induction.
**A:**
• **Game structure:** Potential entrant (E) decides Enter (IN) or Stay Out (OUT). If E enters, incumbent (I) chooses Accommodate (A) — share the market — or Fight (F) — price war.
• **Payoffs:** IN + Accommodate = (40,40) for (E,I) — duopoly profits. IN + Fight = (-10,-10) — both lose from price war. OUT = (0,100) — I keeps monopoly profits.
• **Extensive form tree:** E's initial node branches to IN and OUT. At IN, I's decision node branches to A (payoff 40,40) and F (-10,-10). OUT gives (0,100) terminal payoff.
• **Backward induction (rollback) — Step 1:** At I's decision node (after E enters), compare payoffs: Accommodate gives I = 40, Fight gives I = -10. Rational I chooses **Accommodate** (40 > -10).
• **Backward induction — Step 2:** At E's initial node, E anticipates I's response. If E enters, I accommodates → E gets 40. If E stays out → E gets 0. Rational E chooses **Enter** (40 > 0).
• **SPNE:** (Enter, Accommodate) with payoffs (40,40). This is the unique subgame perfect Nash equilibrium.
• **Non-credible threat analysis:** I would like to threaten fighting to deter entry. But the threat is not credible — once E enters, I prefers to accommodate. Subgame perfection eliminates equilibria based on non-credible threats. Only strategies that are NE in every subgame survive.
• **Exam tip:** Draw the game tree. Always solve by backward induction. Mention that I can make the fight threat credible via excess capacity investment, burning bridges, or reputation in multimarket contact (chain-store paradox, Selten 1978).

### Question 4
**Q:** Show "down/right" can be SPNE if infinitely repeated with grim trigger.
**A:**
• **Stage game payoff matrix:** (Up,Left) = (3,3), (Up,Middle) = (0,5), (Up,Right) = (1,1), (Down,Left) = (5,0), (Down,Middle) = (1,1), (Down,Right) = (2,2). The unique pure-strategy Nash equilibrium is (Down,Right) = (2,2).
• **Cooperative potential:** (Up,Left) = (3,3) Pareto dominates the NE (2,2) but is not sustainable in a one-shot game — each player has incentive to deviate to get 5.
• **Grim trigger strategy:** In infinitely repeated play: Play (Up,Left) in every period as long as no one has ever deviated. If anyone deviates, revert to stage-game NE (Down,Right) forever.
• **Present value of cooperation:** $PV_{coop} = 3 + 3\delta + 3\delta^2 + \ldots = 3/(1-\delta)$.
• **Present value of deviation:** Player deviates by playing Down (against Left) to get 5 today, then receives 2 forever after (punishment). $PV_{dev} = 5 + 2\delta/(1-\delta)$.
• **Sustaining condition:** Cooperation is sustainable if $PV_{coop} \ge PV_{dev}$: $3/(1-\delta) \ge 5 + 2\delta/(1-\delta) \implies \delta \ge 2/3$.
• **Interpretation:** If players are sufficiently patient ($\delta \ge 2/3$), the long-run cost of punishment outweighs short-run gain from deviation. Cooperation (Up,Left) becomes a SPNE with grim trigger, using (Down,Right) as the punishment reversion point.
• **Exam tip:** The general formula is $\delta^* = (\pi_{dev} - \pi_{coop})/(\pi_{dev} - \pi_{NE})$. Here: $(5-3)/(5-2) = 2/3$. Draw the game matrix and show the incentive constraint clearly.

### Question 5
**Q:** Paradox of backward induction. How can multiple Nash equilibrium help avoid it?
**A:**
• **Paradox statement:** In finite-horizon games of perfect information with a unique stage-game Nash equilibrium, backward induction unravels cooperation from the last period. In a finitely repeated PD with known end: last period T has dominant strategy to defect; knowing T is defection, period T-1 also has dominant strategy to defect; this unravels to defection in EVERY period, even though both players prefer mutual cooperation (Koutsoyiannis p. 413).
• **Contradiction with evidence:** The theoretical prediction contradicts experimental evidence — people cooperate in early periods of finitely repeated PD games. Real players do not fully backward-induct, especially in longer games.
• **How multiple NE help:** The paradox arises specifically when the stage game has a **unique** Nash equilibrium. If there are **multiple** NE, the endgame is not forced:
• **Mechanism (1) — Punishment strategies:** With multiple NE, players can threaten to revert to a "bad" equilibrium (e.g., low-payoff NE) to deter deviation from a "good" equilibrium (e.g., high-payoff NE). This makes cooperation sustainable even in finite games.
• **Mechanism (2) — Coordination on good equilibrium:** If both players prefer one NE over another, they can coordinate their expectations on the Pareto-superior equilibrium. The threat of reverting to the inferior equilibrium disciplines behaviour.
• **Mechanism (3) — Reputation with incomplete information:** Kreps-Milgrom-Roberts-Wilson (1982) show that even a tiny probability of a "cooperative type" who always cooperates can sustain cooperation throughout most of a finitely repeated PD. The unraveling is limited by reputation-building.
• **Exam tip:** The paradox is that individual rationality (backward induction) leads to collectively inefficient outcomes. Multiple NE expand the set of credible threats and promises, enabling punishment strategies that sustain cooperation.

### Question 6
**Q:** Explain Centipede game (Rosenthal) — how initial cooperation helps overcome the paradox.
**A:**
• **Centipede game (Rosenthal, 1981):** A sequential game where two players alternately choose Take (T) or Pass (P). The total pot grows with each Pass, but Taking ends the game. The name comes from the extensive form resembling a centipede.
• **Simplified 4-move structure:** Round 1: P1 chooses T → (1,0) or P → Round 2. Round 2: P2 chooses T → (0,3) or P → Round 3. Round 3: P1 chooses T → (3,1) or P → Round 4. Round 4: P2 chooses T → (1,4) or P → (2,2).
• **Backward induction solution:** Round 4: P2 chooses T (4 > 2). Round 3: P1 knowing this, chooses T (3 > 1). Round 2: P2 predicting P1 takes, chooses T (3 > 1). Round 1: P1 predicting all this, chooses T (1 > 0). **Prediction:** Immediate Take → (1,0). Very inefficient.
• **Paradox:** Both players would be better off passing all the way to the end (2,2), but backward induction says immediate Take. The cooperative outcome is achievable only if neither acts "rationally" in the backward-induction sense.
• **Overcoming the paradox (5 mechanisms):** (1) **Incomplete information** — small probability of "altruistic" type → Pass to build reputation (Kreps-Milgrom-Roberts-Wilson, 1982). (2) **Multiple NE** — alternative equilibria (both always Pass) can be sustained if each believes the other will. (3) **Bounded rationality** — real players don't fully backward-induct; experiments show most pairs reach middle/late rounds. (4) **Social preferences** — fairness and reciprocity lead players to Pass more often. (5) **Incomplete info about rationality** — tiny chance opponent is cooperative type makes it rational to Pass until late rounds.
• **Key insight from experiments (McKelvey & Palfrey, 1992):** Substantial passing observed, consistent with Kreps' incomplete information model. If players initially cooperate (Pass), the unraveling is partially blocked — they reach middle/late rounds before Take occurs. This connects to the backward induction paradox in Q5 — both games show the same gap between theoretical prediction and actual behaviour.

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
• **Definition (Hardin, 1968):** When a resource is owned in common (no exclusive property rights), each individual acting rationally in their self-interest depletes the resource, ultimately destroying it for everyone. This is a canonical negative production externality.
• **Mechanism:** Each user captures the full benefit of an additional unit extracted (e.g., selling one more fish) but shares the cost of over-extraction (depletion) with all other users. Hence, private marginal benefit > social marginal benefit, leading to overuse. Mathematically, user $i$ maximises $MB_i(q_i) - MC(q_i)$ ignoring $\sum_{j \neq i} MC(q_j)$ — each ignores the external cost imposed on others.
• **Example — open-access fishery:** A fishing ground is open to all fishers. Each fisher catches as many fish as possible reasoning "if I don't catch them, someone else will." Individual rationality: maximise own catch. Collective result: overfishing → fish stock collapses → everyone loses, including future generations. The resource is destroyed because no one has the right to exclude others.
• **Solutions (3 approaches):** (1) **Private property rights** — assign ownership so the owner internalises the future value of the resource (Coase Theorem). (2) **Government regulation** — catch limits, quotas, seasonal closures, licences. (3) **Pigouvian taxes** — tax each unit extracted equal to marginal social damage, aligning private and social costs.
• **Exam tip:** Link to externalities — it is a negative production externality where each user's action reduces others' available resource. Private cost < social cost. Formalise: each user maxes $MB_i(q_i) - MC(q_i)$, ignoring external cost. The Nash equilibrium over-extracts relative to the social optimum. The tragedy is that individual rationality produces collective irrationality.

### Question 2
**Q:** Steel-fishery: pollution increases B's cost, decreases A's cost. Show private/social optimum.
**A:**
• **Setup:** Steel mill produces steel $S$ and pollution $x$ as a byproduct. Steel's cost: $C_S(S,x)$ with $\partial C_S/\partial x < 0$ (pollution reduces cost — cheaper to dump waste). Fishery's cost: $C_F(F,x)$ with $\partial C_F/\partial x > 0$ (pollution raises cost — damages fish stocks). The mill ignores the harm.
• **(i) Individual profit max (unregulated):** Steel maximises $\pi_S = P_S \cdot S - C_S(S,x)$. FOCs: $\partial\pi_S/\partial S = P_S - \partial C_S/\partial S = 0$ and $\partial\pi_S/\partial x = -\partial C_S/\partial x = 0$. The steel mill pollutes until its marginal private benefit $-\partial C_S/\partial x = 0$ — i.e., until cost savings are exhausted. Fishery maximises $\pi_F = P_F \cdot F - C_F(F,x)$ taking $x$ as given. Result: pollution level $x^*$ is too high relative to social optimum ($x^* > x^\circ$).
• **(ii) Joint profit max (merger):** Joint profit $\Pi_J = P_S S - C_S(S,x) + P_F F - C_F(F,x)$. FOC for $x$: $-\partial C_S/\partial x - \partial C_F/\partial x = 0 \implies -\partial C_S/\partial x = \partial C_F/\partial x$. The merged firm chooses $x^\circ$ where the marginal benefit of pollution to steel equals the marginal damage to the fishery. Result: less pollution ($x^\circ < x^*$) and higher total profit. The deadweight loss from excessive pollution in the unregulated case is the triangle between $x^\circ$ and $x^*$.
• **(iii) Coase Theorem (property rights):** If rights are well-defined and transaction costs are zero, bargaining achieves the efficient pollution level $x^\circ$ regardless of who owns the rights. **Case A** — fishery has right to clean water: steel pays fishery for permission to pollute up to $x^\circ$. **Case B** — steel has right to pollute: fishery pays steel to reduce pollution from $x^*$ to $x^\circ$. Only the distribution of wealth differs (who pays whom), not the pollution level.
• **Exam tip:** Draw the MB-MC diagram. Show unregulated equilibrium $x^*$ (where MB=0) vs social optimum $x^\circ$ (where MB = MD). Contrast Coase (bargaining, zero transaction costs) with Pigouvian tax $\tau = \partial C_F/\partial x$ at $x^\circ$ (works even with transaction costs). The DWL is the triangle between $x^\circ$ and $x^*$ under the MB and MD curves.

### Question 3
**Q:** Show asymmetric information may lead to disappearance of a good from market.
**A:**
• **Market for Lemons (Akerlof, 1970 — Nobel Prize):** The foundational model of asymmetric information. Sellers know the true quality of their goods; buyers cannot distinguish quality ex ante. This can cause markets for high-quality goods to shrink or disappear entirely.
• **Setup:** Used cars — two types: "peaches" (high quality) and "lemons" (low quality). Suppose 50% are peaches (value $10,000 to buyer, $8,000 to seller) and 50% are lemons (value $5,000 to buyer, $3,000 to seller).
• **Full information benchmark:** With perfect information, separate markets exist — peaches trade between $8,000-$10,000, lemons between $3,000-$5,000. Both types trade efficiently.
• **Asymmetric information:** Buyers cannot distinguish quality, so they offer the expected value: $WTP = 0.5 \times 10,000 + 0.5 \times 5,000 = \$7,500$. Peach owners value their cars at $8,000 > \$7,500$ → peach owners **withdraw from the market**.
• **Adverse selection spiral:** With only lemons remaining, buyers update: expected value = $5,000. Lemons trade at $3,000-$5,000. The market partially survives for lemons only. **Complete collapse** occurs if even lemon owners' reservation price exceeds buyers' WTP.
• **General principle:** Asymmetric information → price reflects average quality → high-quality sellers exit → average quality falls → price falls further → more exit → potential complete market breakdown. The uninformed side (buyers) cannot distinguish quality, so the market unravels from the top.
• **Solutions:** Signalling (sellers offer warranties to reveal quality), screening (buyers design contracts that separate types), and reputation mechanisms (certifiers, brand names, third-party inspections). These restore information and enable markets to function.

### Question 4
**Q:** Using Spence's Model of Education, explain education as a signal of worker productivity.
**A:**
• **Spence (1973, Nobel Prize 2001):** The classic signalling model. Workers have private information about their productivity type (High or Low). Education is costly but does NOT increase productivity — it serves as a **signal** of underlying type.
• **Key assumptions:** Single-crossing property — education cost is lower for High types ($c_H$) than for Low types ($c_L$). This makes the signal credible: $c_L > c_H$ means Low types cannot profitably mimic High types' education choices.
• **Signalling game structure:** Nature picks worker type (H or L) → worker chooses education $e \in \{0,1\}$ → firm observes $e$, updates beliefs, offers wage $w(e)$. Payoffs: worker gets $w(e) - c(e)$; firm gets productivity minus wage.
• **Separating Perfect Bayesian Equilibrium:** H acquires education ($e=1$), L does not ($e=0$). Firm beliefs: $\mu(H|e=1) = 1$, $\mu(H|e=0) = 0$. Conditions: H prefers $e=1$: $w_H - c_H \ge w_L$; L prefers $e=0$: $w_L \ge w_H - c_L$. Together: $w_H - w_L \in [c_H, c_L]$ — the "signalling interval." Feasible only if $c_L > c_H$.
• **Pooling PBE:** Neither type acquires education ($e=0$ for both). Firm's off-equilibrium beliefs must be sufficiently pessimistic about educated workers to deter deviation. Both types earn wage = average productivity.
• **Welfare implications:** Separating equilibrium is Pareto-inferior to full information — education is a socially wasteful expenditure (no productivity gain) but individually rational for H types to distinguish themselves. The signal restores some information to the market but at a real resource cost.
• **Exam tip:** Draw the game tree. Emphasise that signalling works because of differential cost — it's not the education content but the cost difference that makes separation possible. Mention the Intuitive Criterion (Cho-Kreps) for refining PBE.

### Question 5
**Q:** Define consumption externality. Explain Bandwagon and Snob effects.
**A:**
• **Consumption externality definition:** Occurs when one consumer's utility depends not only on their own consumption but also on others' consumption — utility interdependence that the market does not price. Mathematically: $U_i = U_i(C_i, C_j)$ where $\partial U_i/\partial C_j \neq 0$ for $i \neq j$.
• **Bandwagon effect (Leibenstein, 1950):** A positive consumption externality — demand for a good increases because others are consuming it. The desire to conform, be fashionable, or belong to a group ("keeping up with the Joneses"). Effect on market demand: becomes **more elastic** — the bandwagon reinforces price changes (lower price attracts more buyers, which attracts even more). Example: smartphones, social media platforms, fashion trends.
• **Snob effect (Leibenstein, 1950):** A negative consumption externality — demand falls as more people consume the good. The desire to be exclusive, unique, or distinguish oneself from the masses. Effect on market demand: becomes **less elastic** — snobs pay a premium for exclusivity. Example: luxury goods, rare art, designer fashion, limited-edition products.
• **Veblen effect (related concept):** Demand increases with price because high price signals status (conspicuous consumption). Unlike snob effect (driven by others' quantity), Veblen is driven by price itself as a status signal — the good is valued partly because it is expensive.
• **Leibenstein's contribution (1950):** "Bandwagon, Snob, and Veblen Effects in the Theory of Consumers' Demand" — these effects shift the demand curve itself (endogenous preferences), violating the standard assumption that preferences are independent and stable. They also violate the $2\times 2\times 2$ assumption of no consumption externalities.
• **Exam tip:** Define consumption externality as $U_i = U_i(C_i, C_j)$. Bandwagon = positive interdependence (want to match others). Snob = negative interdependence (want to be different). Show how these effects rotate/shift the demand curve compared to the standard independent-preferences case.

### Question 6
**Q:** Does consumption externality affect GE solution in a 2×2×2 model?
**A:**
• **Direct answer: Yes.** The standard $2\times 2\times 2$ model explicitly **assumes away** consumption externalities (Assumption 3, Koutsoyiannis p. 497): "consumer choices are independent; bandwagon, snob, Veblenesque and other 'external' effects are ruled out." If introduced, the Pareto-optimality of the competitive equilibrium breaks down.
• **(1) Pareto conditions break:** With externalities, the standard efficiency condition $\text{MRS}^A_{xy} = \text{MRS}^B_{xy} = P_X/P_Y$ is no longer sufficient because $U_A = U_A(X_A, Y_A, X_B, Y_B)$. Each consumer's MRS depends on the other's consumption directly — equating MRS does not capture all welfare-relevant margins. The first-order conditions for Pareto efficiency require additional terms for cross-consumer effects.
• **(2) Missing market → First Welfare Theorem fails:** The consumption externality is an unpriced interdependence — there is no market in which A pays B for the right to influence B's utility. Since competitive equilibrium requires complete markets, the equilibrium allocation cannot be Pareto-optimal. This is a fundamental **market failure**.
• **(3) Specific effects on equilibrium:** **Bandwagon** → positive feedback may generate multiple equilibria (tipping points where adoption becomes self-reinforcing) or overconsumption (private valuation exceeds social). **Snob** → demand may become unstable or backward-bending as consumers reduce consumption when others increase it. The excess demand functions may lose the continuity/monotonicity properties required for existence and uniqueness.
• **Conclusion:** The GE solution may still *exist* (Arrow-Debreu continuity conditions can hold) but it will NOT be Pareto-optimal. The three marginal conditions (MRS equality, MRTS equality, MRPT = MRS) are necessary but no longer sufficient. Koutsoyiannis (Ch. 23): "when externalities exist, the conditions for Pareto optimality are not fulfilled." Externalities are a missing market — adding contingent claims markets for interdependent utility would restore efficiency in theory, but is impractical.

---

## 9. Trade & Tariffs

| # | Question | Marks | Source | Year |
|---|----------|-------|--------|------|
| 1 | Domestic demand: Q=250,000-100P. Supply: Q=250P-30,000. Find autarky P, Q. World P_W=600: import/export? $50 tariff: new P, Q_d, Q_s, imports, tariff revenue. Welfare effects (ΔCS, ΔPS, ΔW). VER limiting to 20,000: welfare vs free trade. | ~14 | Batch 48 Q7 | 2023 |

### Question 1
**Q:** Domestic Q_d=250,000-100P, Q_s=250P-30,000. World P_W=600. Tariff $50. VER 20,000. Welfare analysis.
**A:**
• **Step 1 — Autarky equilibrium:** Set $Q_d = Q_s$: $250,000 - 100P = 250P - 30,000 \implies 280,000 = 350P \implies P_A = 800$, $Q_A = 250,000 - 100(800) = 170,000$.
• **Step 2 — Free trade (P_W = $600):** $Q_d = 250,000 - 100(600) = 190,000$. $Q_s = 250(600) - 30,000 = 120,000$. Since $Q_d > Q_s$: **imports = 190,000 - 120,000 = 70,000 units**. The country is an importer — domestic price falls from $800 to $600.
• **Step 3 — Tariff of $50 (domestic P = $650):** $Q_d = 250,000 - 100(650) = 185,000$. $Q_s = 250(650) - 30,000 = 132,500$. Imports = 185,000 - 132,500 = 52,500. Tariff revenue = $50 \times 52,500 = \mathbf{\$2,625,000}$.
• **Welfare effects (relative to free trade):** ΔCS = $-50 \times (190,000 + 185,000)/2 = -\mathbf{\$9,375,000}$ (consumers lose). ΔPS = $+50 \times (120,000 + 132,500)/2 = +\mathbf{\$6,312,500}$ (domestic producers gain). Tariff revenue = $+\mathbf{\$2,625,000}$ (government gains). **Net ΔW = -9,375,000 + 6,312,500 + 2,625,000 = -\mathbf{\$437,500}$**.
• **Deadweight loss decomposition:** Two triangles: (a) **Production distortion** = $\frac{1}{2} \times 50 \times (132,500 - 120,000) = \frac{1}{2} \times 50 \times 12,500 = \$312,500$ — domestic firms produce at higher cost than world price. (b) **Consumption distortion** = $\frac{1}{2} \times 50 \times (190,000 - 185,000) = \frac{1}{2} \times 50 \times 5,000 = \$125,000$ — consumers reduce consumption below efficient level. Total DWL = \$312,500 + \$125,000 = \$437,500 ✓.
• **Step 4 — VER limiting imports to 20,000 units:** Solve $Q_d - Q_s = 20,000$: $(250,000 - 100P) - (250P - 30,000) = 20,000 \implies 280,000 - 350P = 20,000 \implies P_{VER} = \$742.86$. $Q_d = 175,714$, $Q_s = 155,714$, imports = 20,000.
• **VER welfare vs free trade:** ΔCS ≈ $-\$26,122,450$ (much larger consumer loss). ΔPS ≈ $+\$19,693,875$. **Quota rent** = $(742.86 - 600) \times 20,000 = \$2,857,200$ goes to **foreign exporters** (not domestic government). ΔW ≈ $-\mathbf{\$9,285,775}$ — far worse than the tariff.
• **VER vs Tariff comparison:** Tariff generates government revenue of \$2,625,000 (stays domestic). VER transfers the equivalent quota rent to foreign exporters — same price increase, same DWL triangles, but the revenue rectangle is lost to foreigners. VER is the strictly more costly protectionist instrument.
• **Exam tip:** Always compute autarky first as the reference point. Draw the DWL triangles. The key insight: VER is strictly worse than a tariff because the quota rent goes abroad. The comparison table (price, Q_d, Q_s, imports, ΔCS, ΔPS, govt revenue, ΔW) is essential for exam presentation.

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
