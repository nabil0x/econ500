# Microeconomics — Questions by Year/Source (with Answers)

> All microeconomic theory questions indexed by source document, with concise exam-ready answers.
> **Cross-links:** [Topic-wise Index](./micro-questions-topic-wise.md) | [Priority Matrix 📊](./EXAM-PRIORITY-MATRIX.md) | [Full Notes](./README.md) | [Basics](./basics.md)

---

## 1. MainQ.pdf (Tutorial Questions, undated)

> **Source file:** `../../MainQ.pdf` — Pages 1, 2, 13
> **Type:** Tutorial questions (not final exam)

### Tutorial 1 — Consumer Theory & Preferences (Pages 1-2)

| # | Question | Marks | Topic |
|---|----------|-------|-------|
| 1a | What is the preference-based approach of consumer's behavior? Explain and interpret the assumptions. | 10 | 1A |
| 1b | Define indifference set. Examine: if preference satisfies strong monotonicity, ICs must be downward sloping. | 10 | 1A |
| 2a | What are the twin definitions of convexity? How differ from strong convexity? Graphical. | 10 | 1A |
| 2b | Show: Convexity of preference ⇔ USC(x) convex ⇔ u(.) quasiconcave. | 5 | 1A |
| 2c | Prove: monotonicity + continuity → utility function exists. | 5 | 1A |
| 3i | Cobb-Douglas: Derive Walrasian demand, examine properties. | 7 | 1B |
| 3ii | How to get indirect utility? Explain properties, verify Roy's identity. | 7 | 1B |
| 3iii | Solve expenditure minimization, examine compensated demand characteristics. | 6 | 1B |
| 4a | Define utility function. Explain desirability by monotonicity and strong monotonicity. | 10 | 1A |
| 4b | Show: Strong Mono ⇒ Mono ⇒ LNS. | 5 | 1A |
| 4c | Examine: i) Homogeneity ii) Homotheticity. | 5 | 1A |

#### Answers

**Q1a:** Preference-based approach — consumer has a well-defined preference relation $\succeq$ over $X = \mathbb{R}^N_+$, chooses most-preferred affordable bundle.
**Brief:** The preference-based approach treats preferences as primitive, with choices derived from them. Rationality requires completeness (any two bundles can be compared) and transitivity (no preference cycles), which together enable utility representation.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-01)

**Q1b:** Indifference set IND(x) = { y ∈ X : y ~ x }. Strong monotonicity ⇒ downward-sloping ICs.
**Brief:** The indifference set contains all bundles equally preferred to $x$. Under strong monotonicity (more of any good is strictly better), upward-sloping ICs lead to a contradiction: a northeast point on the same IC would be both strictly preferred and indifferent.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-02)

**Q2a:** Convexity (Def 1): if $x \succeq y$ then $\lambda x + (1-\lambda)y \succeq y$. (Def 2): UCS(x) convex.
**Brief:** Convexity has two equivalent definitions: (1) averages are weakly preferred to extremes, and (2) the upper contour set of every bundle is convex. Strong convexity requires strict preference for averages, ensuring strictly bowed ICs and unique Walrasian demand.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-03)

**Q2b:** Chain: Convexity of preference $\iff$ UCS(x) convex $\iff$ u(.) quasiconcave.
**Brief:** Convex preferences are definitionally equivalent to convex upper contour sets. The substantive equivalence is that convex UCS is equivalent to $u(\cdot)$ being quasiconcave ($u(\lambda x + (1-\lambda)y) \ge \min\{u(x), u(y)\}$), proved by the $\min\{u(x),u(y)\}$ trick.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-04)

**Q2c:** Debreu's theorem: monotonicity + continuity $\Rightarrow$ $\exists$ continuous u(.) representing $\succeq$.
**Brief:** Debreu's theorem states that monotonicity and continuity of preferences guarantee a continuous utility function exists. The proof constructs $u(x)$ by projecting each bundle onto the 45° line via the unique intersection of its indifference curve.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-05)

**Q3i:** $u = x_1^\alpha x_2^\beta$. Lagrangian $\to$ FOCs $\to$ $x_1 = [\alpha/(\alpha+\beta)]\cdot(w/p_1)$, $x_2 = [\beta/(\alpha+\beta)]\cdot(w/p_2)$.
**Brief:** For Cobb-Douglas utility, the Walrasian demands are $x_1 = \frac{\alpha}{\alpha+\beta}\frac{w}{p_1}$ and $x_2 = \frac{\beta}{\alpha+\beta}\frac{w}{p_2}$, obtained via Lagrangian optimisation. Key properties: HD(0) in $(p,w)$, Walras' Law holds, own-price effect is negative (non-Giffen), and expenditure shares $\alpha/(\alpha+\beta)$, $\beta/(\alpha+\beta)$ are constant.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-1b-01)

**Q3ii:** $v(p,w) = B \cdot w^{\alpha+\beta} \cdot p_1^{-\alpha} \cdot p_2^{-\beta}$, $B = \alpha^\alpha \beta^\beta / (\alpha+\beta)^{\alpha+\beta}$.
**Brief:** The indirect utility function is obtained by substituting Walrasian demands into the utility function. It is HD(0) in $(p,w)$, decreasing in prices and increasing in wealth. Roy's identity $x_k = -(\partial v/\partial p_k)/(\partial v/\partial w)$ recovers Walrasian demand without re-solving the UMP.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-1b-02)

**Q3iii:** EMP: $\min p \cdot x$ s.t. $u(x) \ge \bar u$. FOCs $\to$ same tangency ratio as UMP.
**Brief:** The Expenditure Minimisation Problem is dual to the UMP, yielding the same tangency condition $\frac{p_1}{p_2} = \frac{\alpha x_2}{\beta x_1}$. Hicksian demand isolates the pure substitution effect. The expenditure function $e(p,\bar u)$ satisfies duality checks: $e(p, v(p,w)) = w$ and $v(p, e(p,\bar u)) = \bar u$.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-1b-03)

**Q4a:** $u: X \to \mathbb{R}$ where $x \succeq y \iff u(x) \ge u(y)$. Only ranking matters (ordinality).
**Brief:** A utility function $u$ represents preferences if $x \succeq y \iff u(x) \ge u(y)$, and is ordinal (only rankings matter — any monotonic transformation is equivalent). Monotonicity requires more of ALL goods to be weakly preferred; strong monotonicity requires more of ANY good to be strictly preferred.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-06)

**Q4b:** Chain: Strong Monotonicity $\Rightarrow$ Monotonicity $\Rightarrow$ LNS.
**Brief:** Strong monotonicity implies monotonicity (by case analysis on $x=y$ vs $x\neq y$), and monotonicity implies LNS (construct $y$ by adding $\varepsilon/\sqrt{N}$ to all goods). The converse chain fails: LNS does not imply monotonicity (satiation point), and monotonicity does not imply strong monotonicity (Leontief counterexample).
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-07)

**Q4c:** (i) Homogeneous of degree k: $u(ax) = a^k u(x)$. (ii) Homothetic: monotonic transform of homogeneous function.
**Brief:** A function is HD($k$) if scaling all goods by $a$ scales utility by $a^k$; MRS is constant along rays. Homothetic functions are monotonic transformations of homogeneous functions — MRS depends only on the ratio $x_1/x_2$. All HD functions are homothetic, but not vice versa ($u = xy + a$ is homothetic but not homogeneous).
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-08)

### Tutorial 2 — Welfare & Production (Page 2)

| # | Question | Marks | Topic |
|---|----------|-------|-------|
| 1a | Distinguish CV and EV. How different from CS? | 10 | 4 |
| 1b | For price decrease (normal goods): EV > CS > CV. For price increase, explain. | 10 | 4 |
| 2a | Define production function, production set, transformation function, transformation frontier. | 10 | 3A |
| 2b | Graphically explain properties of the production set. | 10 | 3A |
| 3a | Define profit function. If Y closed & free disposal, what properties? | 10 | 3B |
| 3b | Cobb-Douglas u = x₁^½x₂^½. Given P⁰, P¹. Compute EV, CV, CS. | 10 | 4 |
| 4a | Examine properties of Walrasian demand x(p,w). When can UMP sufficient condition be violated? | 10 | 1B |
| 4b | Examine: i) Homogeneity ii) Homotheticity. | 10 | 1B |

#### Answers

**Q1a:** $CV = e(p^1, u^1) - e(p^1, u^0) = w - e(p^1, u^0)$ — uses new prices, original utility.
**Brief:** CV is the money taken after a price change to restore original utility $u^0$ (uses new prices, original utility). EV is the money given before the change to achieve new utility $u^1$ (uses old prices, new utility). CS is the area under the Marshallian demand curve. CV and EV are exact (Hicksian); CS is approximate (Marshallian).
→ [Full answer in Welfare](./answers-welfare.md#q-welfare-01)

**Q1b:** For $p\downarrow$ (normal): $h(p,u^1) > x(p,w) > h(p,u^0)$ $\Rightarrow$ EV $>$ CS $>$ CV.
**Brief:** For a price decrease with normal goods, the ordering is EV $>$ CS $>$ CV because EV uses the higher-utility Hicksian curve (rightmost), CV uses the original-utility curve (leftmost), and CS lies between them. For a price increase, the ordering reverses to CV $>$ CS $>$ EV.
→ [Full answer in Welfare](./answers-welfare.md#q-welfare-02)

**Q2a:** Production function $q = f(z)$: max output from input vector. Production set $Y = \{ y \in \mathbb{R}^L : F(y) \le 0 \}$.
**Brief:** The production function $q = f(z)$ gives maximum output from inputs. The production set $Y$ is the set of all feasible production plans. The transformation function $F(y)$ implicitly defines feasibility, and the transformation frontier $F(y) = 0$ is the boundary where MRPT$_{xy} = MC_x/MC_y$.
→ [Full answer in Demand & Production](./answers-demand-production.md#q-prodset-01)

**Q2b:** 11 properties: non-empty, closed, no free lunch, possibility of inaction, free disposal, irreversibility, various returns to scale, additivity, convexity.
**Brief:** The 11 properties of production sets are: non-empty, closed, no free lunch, possibility of inaction ($0 \in Y$), free disposal (if $y \in Y$, $y' \le y \implies y' \in Y$), irreversibility, returns to scale properties, additivity, and convexity. Fixed costs violate convexity.
→ [Full answer in Demand & Production](./answers-demand-production.md#q-prodset-02)

**Q3a:** $\pi(p) = \max_{y \in Y} p \cdot y$ — value function of PMP.
**Brief:** The profit function $\pi(p) = \max_{y \in Y} p \cdot y$ is HD(1) in $p$, convex in $p$ (firm substitutes inputs as prices change), and satisfies Hotelling's Lemma: $\partial\pi(p)/\partial p_k = y_k(p)$. The Law of Supply ($\partial y_k/\partial p_k \ge 0$) follows from convexity.
→ [Full answer in Demand & Production](./answers-demand-production.md#q-profit-01)

**Q3b:** $\alpha=½$. $p^0=(4,4)$, $m=300$; $p^1=(2,4)$, $m=300$. $v^0 = 37.5$, $v^1 \approx 53.03$.
**Brief:** For Cobb-Douglas $u = x_1^{1/2}x_2^{1/2}$, with $p^0=(4,4)$, $p^1=(2,4)$, $m=300$: CV = 87.9, CS ≈ 103.98, EV = 124.24. The ordering EV $>$ CS $>$ CV confirms normal goods with an income effect of 36.34.
→ [Full answer in Welfare](./answers-welfare.md#q-welfare-03)

**Q4a:** $x(p,w)$ properties: HD(0), Walras' Law ($p \cdot x = w$), convex set (if convex pref), single-valued (if strictly convex).
**Brief:** Walrasian demand $x(p,w)$ satisfies HD(0) in $(p,w)$, Walras' Law ($p\cdot x = w$ under LNS), convex-valuedness (convex preferences), and single-valuedness (strictly convex preferences). Sufficient conditions for UMP interior solution fail when utility is non-monotone, non-quasiconcave, or satiated.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-1b-04)

**Q4b:** (i) HD(0) of Walrasian demand: $x(ap,aw) = x(p,w)$. Same budget set. (ii) Homothetic pref: MRS depends only on ratio $x_1/x_2$.
**Brief:** HD(0) of Walrasian demand follows purely from the budget set scaling — no preference assumptions needed. Homothetic preferences mean MRS depends only on the consumption ratio, not scale; demand takes the form $x(p,w) = w \cdot x(p,1)$ with Engel curves linear through the origin and unit income elasticity.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-1b-05)

### General Equilibrium (Page 13)

| # | Question | Marks | Topic |
|---|----------|-------|-------|
| 1a | Define GE. How different from partial equilibrium? Examples. | 8 | 6A |
| 1b | Graphically explain problems of existence, uniqueness, stability in GE. | 12 | 6A |
| 2a | Explain with assumptions of 2×2×2 model, production equilibrium via Edgeworth box. | 10 | 6B |
| 2b | Graphically: external shock in product market → factor market → equilibrium restored. | 10 | 6B |
| 3a | Define social welfare. Critically examine three key issues Pigou dealt with. | 10 | 5A |
| 3b | Derive grand utility possibility frontier, determine 'point of bliss'. Does it ensure max SW? | 10 | 5A |
| 4a | "Pareto optimality necessary but not sufficient for SW maximization" — justify with 2×2×2. | 10 | 5B |
| 4b | Explain assumption about MU of money for Hicks-Kaldor compensation. Can compensation be correct? | 10 | 5B |

#### Answers

**Q1a:** GE: all markets & decision-makers in simultaneous equilibrium. PE: single market in isolation, ceteris paribus.
**Brief:** General Equilibrium studies all markets simultaneously, capturing interdependencies and feedback loops (e.g., a tea tax affects coffee demand, factor prices, and incomes across all markets). Partial Equilibrium studies a single market in isolation, holding other prices constant. GE is essential for economy-wide policies; PE suffices for small markets with weak cross-price effects.
→ [Full answer in GE, Game Theory, Extern & Trade](./answers-ge-game-extern-trade.md#q-ge-01)

**Q1b:** Three problems via excess demand $E(P) = Q_D - Q_S$.
**Brief:** Existence asks whether a price vector $p>0$ with $z(p)=0$ exists (Arrow-Debreu theorem guarantees it under standard assumptions). Uniqueness requires the gross substitutes property; income effects can cause multiple equilibria. Stability concerns tâtonnement convergence ($dp_k/dt = z_k(p)$), requiring $\partial z_k/\partial p_k < 0$ at equilibrium.
→ [Full answer in GE, Game Theory, Extern & Trade](./answers-ge-game-extern-trade.md#q-ge-02)

**Q2a:** 2×2×2 model: 2 factors (L,K), 2 goods (X,Y), 2 consumers (A,B). Fixed factor supplies, CRTS, perfect competition.
**Brief:** The 2×2×2 model assumes two factors (L,K), two goods (X,Y), and two consumers (A,B) with fixed factor supplies, CRTS, and perfect competition. Pareto efficiency in production requires $MRTS^X_{LK} = MRTS^Y_{LK}$, traced by the contract curve in the Edgeworth production box.
→ [Full answer in GE, Game Theory, Extern & Trade](./answers-ge-game-extern-trade.md#q-edge-01)

**Q2b:** Taste shift toward $X \to P_X\uparrow$, profits in $X \to D$ for $L,K\uparrow \to w\uparrow, r\uparrow \to$ factor mobility from $Y$ to $X \to w,r$ equalise $\to$ new GE.
**Brief:** An external shock (taste shift toward X) triggers a 9-step Koutsoyiannis chain: product market adjustment ($P_X\uparrow$, $P_Y\downarrow$) → profit differential → factor demand shifts → factor mobility → factor price equalisation → supply response → new GE. The Stolper-Samuelson effect determines which factor gains or loses based on factor intensities.
→ [Full answer in GE, Game Theory, Extern & Trade](./answers-ge-game-extern-trade.md#q-ge-03)

**Q3a:** $SW$ = aggregate well-being of society. Pigou: economic welfare = "part measurable by money."
**Brief:** Pigou identified three key issues: (1) defining economic welfare as the money-measurable part of total welfare (criticised as arbitrary), (2) dual conditions for welfare increase — national income growth plus redistribution from rich to poor (requires interpersonal utility comparisons, criticised by Robbins), (3) divergence between private and social net product, solved by Pigouvian taxes/subsidies (criticised by Coase).
→ [Full answer in Welfare](./answers-welfare.md#q-socwel-01)

**Q3b:** GUPF = outer envelope of all UPFs from every product-mix on PPC. Point of bliss = tangency of GUPF with highest social indifference contour.
**Brief:** The GUPF is the outer envelope of all UPFs across every product-mix on the PPC — every point on it is Pareto-optimal. The point of bliss is the tangency between the GUPF and the highest Bergson-Samuelson social indifference curve, requiring $MRS^A = MRS^B$, $MRTS^X = MRTS^Y$, $MRPT = MRS$, and SWF tangency.
→ [Full answer in Welfare](./answers-welfare.md#q-socwel-02)

**Q4a:** Pareto optimality = necessary (any SW max must be efficient) but not sufficient (many PO points, only one maximises SW given SWF).
**Brief:** Pareto optimality is necessary for SW maximisation (any inefficient allocation can be Pareto-improved, increasing SW). But it is not sufficient: the GUPF contains infinitely many PO points differing only in distribution, and only the tangency with the chosen Bergson-Samuelson SWF (the "bliss point") maximises social welfare.
→ [Full answer in Welfare](./answers-welfare.md#q-pareto-01)

**Q4b:** Constant MU of money assumed — a rich person's £1 has same utility weight as a poor person's.
**Brief:** The Kaldor-Hicks compensation criterion requires constant marginal utility of money across individuals for valid welfare comparisons. Without it, a policy giving £2000 to a rich person (low MU) and costing a poor person £1000 (high MU) passes KH despite reducing actual welfare. Scitovsky's double test (forward + reverse) corrects for reversal paradoxes.
→ [Full answer in Welfare](./answers-welfare.md#q-pareto-02)

---

## 2. Batch 46 — 4th Year Hons 2020 (Micro 401)

> **Source file:** `../batch-finals/batch-46/micro-401.md`
> **Type:** Final examination (undergraduate)

### Part A — Welfare & Pareto Optimality

| # | Question | Marks | Topic |
|---|----------|-------|-------|
| 1a | "Pareto optimality necessary but not sufficient" — justify with 2×2×2. | 7 | 5B |
| 1b | Explain assumptions about MU of money for Hicks-Kaldor compensation. | 7 | 5B |
| 2a | 2-person 2-good fixed supply: show Pareto optimality for consumption with equations. | 7 | 5B |
| 2b | External economies/diseconomies: show Pareto optimality through taxes/subsidies, find social dividend. | 7 | 5B |
| 3a | State and explain First and Second Welfare Theorems with implications. | 8 | 5B |
| 3b | What is social welfare function? Utilitarian vs Rawlsian. | 6 | 5B |

#### Answers

**Q1a:** (Same as MainQ GE Q4a above.) Pareto = necessary (efficiency) but not sufficient (distribution via SWF needed).
**Brief:** Pareto optimality is necessary because any SW maximum must be efficient (otherwise welfare could be increased without harming anyone). It is not sufficient because the GUPF contains infinitely many PO allocations differing only in distribution — a SWF is required to select the unique bliss point.
→ [Full answer in Welfare](./answers-welfare.md#q-pareto-01)

**Q1b:** (Same as MainQ GE Q4b.) Constant MU of money required; unequal MU → KH may give wrong ranking.
**Brief:** The Kaldor-Hicks criterion requires constant marginal utility of money across individuals. When MU differs (rich have low MU, poor have high MU), KH can rank a policy as welfare-improving when actual welfare falls. Scitovsky's double test (forward + reverse) corrects for reversal paradoxes, but Robbins' critique of interpersonal comparisons remains.
→ [Full answer in Welfare](./answers-welfare.md#q-pareto-02)

**Q2a:** Lagrangian: max $U_A$ s.t. $U_B \ge \bar U_B$, $X_A+X_B = \bar X$, $Y_A+Y_B = \bar Y$.
**Brief:** Pareto efficiency in a 2-person, 2-good exchange economy requires $\text{MRS}^A_{xy} = \text{MRS}^B_{xy}$, derived by maximising $U_A$ subject to $U_B \ge \bar U_B$ and resource constraints. The Lagrangian FOCs yield equalised MRS, and the contract curve is the locus of all such tangency points in the Edgeworth consumption box.
→ [Full answer in Welfare](./answers-welfare.md#q-pareto-03)

**Q2b:** $C_1 = 0.1q_1^2+5q_1-0.1q_2^2$ (external economy from 2→1), $C_2 = 0.2q_2^2+7q_2+0.025q_1^2$ (diseconomy from 1→2).
**Brief:** Private optimum: $q_1=50$, $q_2=20$, total profit = 307.5. Social optimum (joint max): $q_1^*=40$, $q_2^*=40$, total profit = 360. A Pigouvian tax of 2/unit on Firm 1 and subsidy of 8/unit to Firm 2 internalise the externalities. Social dividend = 52.5.
→ [Full answer in GE, Game Theory, Extern & Trade](./answers-ge-game-extern-trade.md#q-extern-01)

**Q3a:** FWT: Every competitive equilibrium is Pareto-optimal. SWT: Any Pareto optimum can be realised as CE with lump-sum transfers.
**Brief:** First Welfare Theorem: under LNS and perfect competition, every Walrasian equilibrium is Pareto-efficient. Second Welfare Theorem: under convex preferences and production, any Pareto optimum can be decentralised as a competitive equilibrium with lump-sum transfers — separating efficiency (market) from equity (redistribution).
→ [Full answer in Welfare](./answers-welfare.md#q-socwel-03)

**Q3b:** SWF: $W = F(U_1,...,U_n)$ — rule ranking social states by individual utilities.
**Brief:** A Social Welfare Function maps individual utilities into a scalar welfare measure. Utilitarian: $W = \sum U_i$ (linear social indifference curves, equity-blind). Rawlsian: $W = \min\{U_i\}$ (L-shaped social indifference curves, lexicographic priority to the worst-off). Arrow's Impossibility Theorem shows no SWF can satisfy all desirable axioms.
→ [Full answer in Welfare](./answers-welfare.md#q-socwel-04)

### Part B — Game Theory & Industrial Organization

| # | Question | Marks | Topic |
|---|----------|-------|-------|
| 4a | Define Nash equilibrium. Bertrand duopoly (differentiated): solve equilibrium. | 8 | 7 |
| 4b | What is Prisoners' dilemma? Implications for oligopoly. Strategic interaction? | 6 | 7 |
| 5a | Market entry game: extensive form, backward induction. | 6 | 7 |
| 5b | Show "down/right" is SPNE if infinitely repeated (grim trigger). | 8 | 7 |
| 6a | Paradox of backward induction. Can multiple NE help? | 8 | 7 |
| 6b | Cooperation and Centipede game (Rosenthal) — overcoming backward induction paradox. | 6 | 7 |

#### Answers

**Q4a:** Nash equilibrium: a strategy profile where no player can profitably deviate unilaterally, given the strategies of others. Each strategy is a best response.
**Brief:** Nash equilibrium is a strategy profile where no player can profitably deviate unilaterally. For Bertrand differentiated duopoly ($q_1 = 100 - 2p_1 + p_2$, $MC=10$), the symmetric NE is $p_1^*=p_2^*=40$, $q_1=q_2=60$, $\pi_1=\pi_2=1800$. Best-response functions have positive slopes — prices are strategic complements.
→ [Full answer in GE, Game Theory, Extern & Trade](./answers-ge-game-extern-trade.md#q-game-01)

**Q4b:** Prisoners' Dilemma: individually rational choices lead to a collectively Pareto-inferior outcome. The "dilemma" is that mutual cooperation would be better, but each player has a dominant strategy to defect.
**Brief:** In the Prisoners' Dilemma, each player has a dominant strategy to defect, yielding a unique Nash equilibrium that is Pareto-inferior to mutual cooperation. In oligopoly, this explains price wars, advertising races, and R&D overinvestment. Repeated interaction with grim trigger strategies can sustain cooperation if players are sufficiently patient.
→ [Full answer in GE, Game Theory, Extern & Trade](./answers-ge-game-extern-trade.md#q-game-02)

**Q5a:** Incumbent (I) and entrant (E). E chooses IN/OUT; if IN, I chooses Accommodate or Fight. Solve by backward induction.
**Brief:** By backward induction: if E enters, I chooses Accommodate (40 > -10). Anticipating this, E enters (40 > 0). SPNE: (Enter, Accommodate) with payoffs (40,40). The fight threat is not credible. Commitment devices (excess capacity, reputation) can make fight threats credible.
→ [Full answer in GE, Game Theory, Extern & Trade](./answers-ge-game-extern-trade.md#q-game-03)

**Q5b:** Stage game (4×4 from original): Up-Left (4,4), Up-Right (6,3), Down-Left (3,6), Down-Right (5,5). Show (Down, Right) as stage-game NE and cooperation on (Up, Left) as SPNE under grim trigger.
**Brief:** The stage-game NE is (Up, Left) = (4,4). Players wish to sustain (Down, Right) = (5,5) cooperatively using grim trigger with punishment to (4,4). The condition for cooperation is $\delta \ge 1/2$ derived from $5/(1-\delta) \ge 6 + 4\delta/(1-\delta)$.
→ [Full answer in GE, Game Theory, Extern & Trade](./answers-ge-game-extern-trade.md#q-game-04)

**Q6a:** Backward induction in finite-horizon games of perfect information predicts cooperation unravels from the terminal period, leading to inefficient early defection — the paradox of backward induction.
**Brief:** In finitely repeated games with a unique stage-game NE, backward induction predicts defection in every period — contradicting experimental evidence of cooperation. Resolution: multiple stage-game NEs provide punishment strategies that prevent unraveling. Alternative resolutions include incomplete information (Kreps et al., 1982), bounded rationality, and social preferences.
→ [Full answer in GE, Game Theory, Extern & Trade](./answers-ge-game-extern-trade.md#q-game-05)

**Q6b:** Centipede game (Rosenthal, 1981): alternating Take/Pass with growing total. Backward induction predicts immediate Take (1,0). Cooperative outcome (2,2) is better but unreachable under full rationality.
**Brief:** In the centipede game, backward induction predicts immediate Take (1,0), but both players would prefer passing to the end (2,2). Cooperation can be sustained via incomplete information (Kreps et al., 1982), multiple equilibria, bounded rationality, or social preferences. Experiments (McKelvey & Palfrey, 1992) show most pairs reach middle rounds.
→ [Full answer in GE, Game Theory, Extern & Trade](./answers-ge-game-extern-trade.md#q-game-06)

### Part C — Externalities, Public Goods & Information

| # | Question | Marks | Topic |
|---|----------|-------|-------|
| 7a | What is Tragedy of Commons? Example. | 3 | 8 |
| 7b | Steel-fishery pollution: private vs social costs under profit max, joint max, property rights. | 11 | 8 |
| 8a | Show asymmetric information → good disappears from market. | 4 | 8 |
| 8b | Spence's Model of Education: education as productivity signal. | 10 | 8 |

#### Answers

**Q7a:** Tragedy of the Commons (Hardin, 1968): When a resource is owned in common, each individual acting rationally in self-interest depletes the resource, destroying it for all.
**Brief:** The Tragedy of the Commons arises because each user captures the full private benefit but bears only a share of the social cost of their action (negative externality). Private $MB >$ social $MB$, leading to overuse. Solutions include private property rights, Pigouvian taxes, quantity quotas (ITQs), and Coasean bargaining.
→ [Full answer in GE, Game Theory, Extern & Trade](./answers-ge-game-extern-trade.md#q-extern-02)

**Q7b:** Steel mill (S) produces pollution x as byproduct, harming downstream fishery (F). $C_S(S,x)$, $C_F(F,x)$ with $\partial C_S/\partial x < 0$, $\partial C_F/\partial x > 0$.
**Brief:** The steel mill's private optimum ignores the fishery's damage, yielding excessive pollution $x^*$. The social optimum requires marginal benefit to the steel mill ($-\partial C_S/\partial x$) to equal marginal damage to the fishery ($\partial C_F/\partial x$). Solutions: Pigouvian tax $\tau = \partial C_F/\partial x$ at $x^\circ$, or Coasean bargaining with well-defined property rights.
→ [Full answer in GE, Game Theory, Extern & Trade](./answers-ge-game-extern-trade.md#q-extern-03)

**Q8a:** Akerlof's "Market for Lemons" (1970, Nobel Prize 2001): asymmetric information between sellers (who know quality) and buyers (who only know the average) can cause high-quality goods to disappear.
**Brief:** Akerlof's lemons model shows that asymmetric information (sellers know quality, buyers only know the average) drives high-quality goods from the market. With 50% peaches ($10,000) and 50% lemons ($5,000), buyers' WTP of $7,500 is below peach sellers' reservation ($8,000), so peaches exit — only lemons remain.
→ [Full answer in GE, Game Theory, Extern & Trade](./answers-ge-game-extern-trade.md#q-extern-04)

**Q8b:** Spence's Education Signalling Model (1973, Nobel Prize 2001): education serves as a costly signal of unobservable worker productivity, even if it adds no human capital.
**Brief:** In Spence's model, education is a costly signal of unobservable productivity. The single-crossing property ($c_L > c_H$) enables a separating equilibrium where H-types acquire education ($w_H - c_H \ge w_L$) and L-types do not ($w_L \ge w_H - c_L$). Education is wasteful (no productivity gain) but solves adverse selection.
→ [Full answer in GE, Game Theory, Extern & Trade](./answers-ge-game-extern-trade.md#q-extern-05)

---

## 3. Batch 47 — MSc 2022 (Micro 501)

> **Source file:** `../batch-finals/batch-47/micro-501.md`
> **Type:** M.Sc. Final Examination 2022

| # | Question | Marks | Topic |
|---|----------|-------|-------|
| 1a | What is preference-based approach? Explain and interpret assumptions. | 7 | 1A |
| 1b | Define indifference set. Strong monotonicity → downward sloping ICs. | 7 | 1A |
| 2a | Twin definitions of convexity vs strong convexity. Graphical. | 4 | 1A |
| 2b | Convexity ⇔ USC convex ⇔ u quasiconcave. | 5 | 1A |
| 2c | Prove: monotonicity + continuity → utility function exists. | 5 | 1A |
| 3i | Cobb-Douglas: Derive Walrasian demand, examine properties. | — | 1B |
| 3ii | Indirect utility, properties, verify Roy's identity. | — | 1B |
| 3iii | Expenditure minimization, compensated demand characteristics. | — | 1B |
| 4a | Define utility function. Monotonicity and strong monotonicity. | 5 | 1A |
| 4b | Strong Mono ⇒ Mono ⇒ LNS. | 5 | 1A |
| 4c | Homogeneity, Homotheticity. | 4 | 1A |
| 5a | Define production sets. Graphically explain properties. | 5 | 3A |
| 5b | Elasticity of substitution. Find EoS for linear and fixed proportions. | 6 | 3A |
| 5c | If Y closed & free disposal, what properties does profit function satisfy? | 3 | 3B |
| 6a | Distinguish CV and EV. How different from CS? | 4 | 4 |
| 6b | EV > CS > CV for normal goods (price decrease). | 5 | 4 |
| 6c | Cobb-Douglas: compute EV, CV, CS. Nature of commodities. | 5 | 4 |
| 7a | Existence, uniqueness, stability of GE. Show conditions. | 7 | 6A |
| 7b | External shock in product market → factor market → equilibrium restored. | 7 | 6A |
| 8 | Exchange economy: Edgeworth box, Pareto efficiency, contract curve, core. | 14 | 6B |

> **Note:** Q3 counts as one question (14 marks total for all parts).

#### Answers

**Q1a:** Preference-based approach: consumer has a well-defined preference relation $\succeq$ over $X$, chooses most-preferred affordable bundle.
**Brief:** The preference-based approach treats preferences as primitive. Rationality requires completeness (any two bundles can be compared) and transitivity (no cycles), which together enable utility representation via Debreu's theorem.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-01)

**Q1b:** $IND(x) = \{ y \in X : y \sim x \}$. Strong monotonicity $\Rightarrow$ ICs downward-sloping.
**Brief:** The indifference set is all bundles $y \sim x$. Proof by contradiction: if IC were upward-sloping, a northeast point $y \gg x$ would be both strictly preferred (by strong monotonicity) and indifferent (by IC definition) — impossible.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-02)

**Q2a:** Convexity Def 1: $x \succeq y \implies \lambda x+(1-\lambda)y \succeq y$. Def 2: $UCS(x)$ convex.
**Brief:** Convexity has two equivalent definitions: (1) averages are at least as good as extremes, and (2) UCS(x) is convex. Strong convexity requires averages to be strictly preferred, giving strictly bowed ICs and unique Walrasian demand.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-03)

**Q2b:** Chain: convex preference $\iff$ UCS convex $\iff$ $u(\cdot)$ quasiconcave.
**Brief:** Convex preferences are definitionally equivalent to convex UCS. The substantive equivalence is that convex UCS $\iff$ $u(\cdot)$ quasiconcave, proved by the $\min\{u(x),u(y)\}$ trick: quasiconcavity says $u(\lambda x+(1-\lambda)y) \ge \min\{u(x),u(y)\}$, which is exactly convex UCS.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-04)

**Q2c:** Debreu's theorem: monotonicity + continuity $\Rightarrow$ $\exists$ continuous utility $u(\cdot)$.
**Brief:** Debreu's theorem: monotonicity + continuity guarantee a continuous utility function exists. Construct $u(x)$ by finding the unique intersection of $x$'s indifference curve with the 45° line. Continuity is essential — lexicographic preferences satisfy monotonicity but not continuity and have no utility representation.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-05)

**Q3i:** Cobb-Douglas: $u = x_1^\alpha x_2^\beta$. Walrasian demand: $x_1 = \frac{\alpha}{\alpha+\beta}\frac{w}{p_1}$, $x_2 = \frac{\beta}{\alpha+\beta}\frac{w}{p_2}$.
**Brief:** For CD utility, Walrasian demands are $x_1 = \frac{\alpha}{\alpha+\beta}\frac{w}{p_1}$, $x_2 = \frac{\beta}{\alpha+\beta}\frac{w}{p_2}$ from Lagrangian optimisation. Properties: HD(0), Walras' Law, negative own-price effect, zero cross-price effect, constant expenditure shares $\alpha/(\alpha+\beta)$ and $\beta/(\alpha+\beta)$.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-1b-01)

**Q3ii:** $v(p,w) = B\cdot w^{\alpha+\beta}\cdot p_1^{-\alpha}\cdot p_2^{-\beta}$ where $B = \alpha^\alpha\beta^\beta/(\alpha+\beta)^{\alpha+\beta}$.
**Brief:** The indirect utility function $v(p,w) = B w^{\alpha+\beta} p_1^{-\alpha} p_2^{-\beta}$ is HD(0) in $(p,w)$, decreasing in prices, increasing in wealth. Roy's identity $x_k = -(\partial v/\partial p_k)/(\partial v/\partial w)$ recovers Walrasian demand.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-1b-02)

**Q3iii:** EMP: minimise $p\cdot x$ s.t. $u(x) \ge \bar u$. FOCs $\to$ same tangency ratio as UMP.
**Brief:** The EMP yields Hicksian demand $h_k(p,\bar u)$ and expenditure function $e(p,\bar u)$ with the same tangency as the UMP (confirming duality). Duality checks: $e(p,v(p,w)) = w$ and $v(p,e(p,\bar u)) = \bar u$. Compensated law of demand: $\partial h_k/\partial p_k < 0$.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-1b-03)

**Q4a:** Utility function: $u: X \to \mathbb{R}$ where $x \succeq y \iff u(x) \ge u(y)$. Only ranking matters (ordinality).
**Brief:** Monotonicity requires more of ALL goods to be weakly preferred; strong monotonicity requires more of ANY one good to be strictly preferred. The Leontief utility $u = \min\{x_1,x_2\}$ satisfies monotonicity but violates strong monotonicity (increasing one good when it is not the minimum leaves utility unchanged).
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-06)

**Q4b:** Chain: Strong Monotonicity $\Rightarrow$ Monotonicity $\Rightarrow$ LNS.
**Brief:** SM $\Rightarrow$ M follows by case analysis ($x=y$ vs $x\neq y$). M $\Rightarrow$ LNS uses the construction $y = (x_1+\delta,\ldots,x_N+\delta)$ with $\delta = \varepsilon/\sqrt{N}$. The converse fails: LNS does not imply M (satiation), M does not imply SM (Leontief).
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-07)

**Q4c:** (i) Homogeneous of degree $k$: $u(ax) = a^k u(x)$. (ii) Homothetic: monotonic transform of homogeneous.
**Brief:** HD(k): scaling all goods by $a$ scales utility by $a^k$; MRS constant along rays. Homothetic: $u = g(v(x))$ with $v$ HD(k); MRS depends only on the ratio $x_1/x_2$. All HD functions are homothetic, but $u = xy + a$ is homothetic (monotonic transform of $xy$) but not homogeneous.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-08)

**Q5a:** Production set $Y = \{y \in \mathbb{R}^L : F(y) \le 0\}$. 11 properties to explain graphically.
**Brief:** The 11 properties of production sets include: non-empty, closed, no free lunch, possibility of inaction ($0 \in Y$), free disposal, irreversibility, returns to scale (non-increasing, non-decreasing, or CRS), additivity (free entry), and convexity (violated by fixed costs).
→ [Full answer in Demand & Production](./answers-demand-production.md#q-prodset-02)

**Q5b:** Elasticity of substitution $\sigma = \%\Delta(K/L)/\%\Delta\text{MRTS}$. Measures curvature of isoquant.
**Brief:** $\sigma$ measures how easily inputs substitute. Benchmark values: linear production $\sigma = \infty$ (perfect substitutes), Cobb-Douglas $\sigma = 1$, Leontief $\sigma = 0$ (no substitution). CES production $q = [\delta K^\rho + (1-\delta)L^\rho]^{1/\rho}$ has $\sigma = 1/(1-\rho)$, nesting all three cases.
→ [Full answer in Demand & Production](./answers-demand-production.md#q-demand-01)

**Q5c:** Profit function $\pi(p) = \max_{y\in Y} p\cdot y$. If $Y$ closed & free disposal, properties hold.
**Brief:** The profit function satisfies HD(1) in $p$, convexity in $p$ (firm substitutes as prices change), Hotelling's Lemma ($\partial\pi/\partial p_k = y_k(p)$), and the Law of Supply ($\partial y_k/\partial p_k \ge 0$).
→ [Full answer in Demand & Production](./answers-demand-production.md#q-profit-01)

**Q6a:** CV, EV, CS: three welfare measures for price changes.
**Brief:** CV = $w - e(p^1, u^0)$ (new prices, original utility — money taken to restore $u^0$). EV = $e(p^0, u^1) - w$ (old prices, new utility — money given to reach $u^1$). CS = $\int x_1 dp_1$ (Marshallian area). CV and EV are exact (Hicksian); CS is approximate (Marshallian).
→ [Full answer in Welfare](./answers-welfare.md#q-welfare-01)

**Q6b:** For $p\downarrow$ (normal): $h(p,u^1) > x(p,w) > h(p,u^0)$ $\Rightarrow$ EV $>$ CS $>$ CV.
**Brief:** For a price decrease with normal goods: EV $>$ CS $>$ CV because $h(p,u^1)$ (rightmost) > $x(p,w)$ (middle) > $h(p,u^0)$ (leftmost). For a price increase, ordering reverses to CV $>$ CS $>$ EV. The gap between EV and CV equals the income effect.
→ [Full answer in Welfare](./answers-welfare.md#q-welfare-02)

**Q6c:** $\alpha=½$, $p^0=(4,4)$, $m=300$; $p^1=(2,4)$. $v^0=37.5$, $v^1 \approx 53.03$.
**Brief:** For CD $u = x_1^{1/2}x_2^{1/2}$ with $p^0=(4,4)$, $p^1=(2,4)$, $m=300$: CV = 87.9, CS ≈ 103.98, EV = 124.24. Ordering EV $>$ CS $>$ CV confirms normal goods; income effect = 36.34.
→ [Full answer in Welfare](./answers-welfare.md#q-welfare-03)

**Q7a:** Three GE problems via excess demand $E(P) = QD - QS$. Show conditions.
**Brief:** Existence: $E(P) = 0$ at some $P > 0$ (Arrow-Debreu theorem). Uniqueness: requires $E(P)$ monotonic (gross substitutes property); income effects can create multiple equilibria. Stability: Walrasian tâtonnement $dP/dt = k\cdot E(P)$ is stable if $dE/dP < 0$ at equilibrium.
→ [Full answer in GE, Game Theory, Extern & Trade](./answers-ge-game-extern-trade.md#q-ge-02)

**Q7b:** External shock → product market → factor market → factor mobility → new GE. (Koutsoyiannis 9-step chain.)
**Brief:** A taste shift toward X triggers: $P_X\uparrow$, $P_Y\downarrow$ → profit differential → factor demand shifts → factor mobility from Y to X → factor price changes (Stolper-Samuelson: labour gains if X is labour-intensive) → supply shifts → new GE.
→ [Full answer in GE, Game Theory, Extern & Trade](./answers-ge-game-extern-trade.md#q-ge-03)

**Q8:** Edgeworth box exchange economy: $U_A = X_A Y_A$, $U_B = X_B + Y_B$. Endowments: A(10,50), B(50,10).
**Brief:** Total endowments: $X=60$, $Y=60$. $MRS_A = Y_A/X_A$, $MRS_B = 1$. At endowments, $MRS_A = 5 \neq 1$, so trade is mutually beneficial. Pareto efficiency requires $MRS_A = MRS_B \implies Y_A = X_A$ (contract curve). B's linear utility may yield a corner solution.
→ [Full answer in GE, Game Theory, Extern & Trade](./answers-ge-game-extern-trade.md#q-edge-02)

---

## 4. Batch 48 — MSc 2023 (Micro 501)

> **Source file:** `../batch-finals/batch-48/micro-501.md`
> **Type:** M.Sc. Final Examination 2023

| # | Question | Marks | Topic |
|---|----------|-------|-------|
| 1a | Prove quasi-concave utility U(X,Y) ⇔ dMRS/dX < 0. | 8 | 1A |
| 1b | Negroni cocktail (perfect complements): Marshallian/Hicksian demand, expenditure function. | — | 1B |
| 1c | U = X + ln(Y): find demands. With limited I, which goods? Why? | 3 | 1B |
| 2a | U = X + log(Y): convex indifference curves? Proof. | ~3 | 1A |
| 2b | Demand function elasticities (cross-price, income). Luxury/necessity? Substitute/complement? | ~11 | 2 |
| 2c | U = X - 3Y. P_X=20, P_Y=40, I=400. Utility-maximizing quantities. | 3 | 1B |
| 3a | Burger King demand: what's the terrible problem? | 2 | 2 |
| 3b | Corrected demand: elasticities, advertising, pricing decisions, competitive response. | 12 | 2 |
| 4a | Four properties of cost functions — match to explanations. | 6 | 3A |
| 4b | Sausage maker: production function, conditional factor demand, cost function, profit-max price. | ~8 | 3A |
| 5a | Q = (KL)^{1/3}: SR and LR production, costs, supply, returns to scale, EoS. | ~12 | 3A |
| 5b | Starbucks Jumbo vs Trenta: cost comparison. | 2 | 3A |
| 6a | 1,000 identical firms: SR supply, equilibrium, tax incidence, welfare cost. | ~14 | 3C |
| 6b | Three-good excess demand, Walras' law, price ratios. | ~4 | 6B |
| 7 | Color printers: autarky, trade, tariff welfare effects, VER. | ~14 | 9 |
| 8a | Hicks-Kaldor compensation principle. Scitovsky's correction. | 8 | 5B |
| 8b | Grand utility possibility frontier, point of bliss. Max SW? | 6 | 5A |

#### Answers

**Q1a:** Quasiconcavity of u(x,y) ⇔ dMRS/dx < 0 (diminishing MRS along IC).
**Brief:** Quasiconcavity means upper contour sets are convex. The bordered Hessian condition $2u_x u_y u_{xy} - u_x^2 u_{yy} - u_y^2 u_{xx} \ge 0$ is equivalent to diminishing MRS ($dMRS/dx < 0$) along an indifference curve.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-09)

**Q1b:** u(G,V,C) = min(G,V,C). Negroni 1:1:1.
**Brief:** The Negroni is a Leontief (perfect complements) utility $u = \min(G,V,C)$ with 1:1:1 proportions. Marshallian demand for each good is $w/(p_G + p_V + p_C)$, Hicksian demand is $\bar u$, and expenditure is $\bar u(p_G + p_V + p_C)$ — zero substitution means Hicksian demand is price-independent.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-1b-06)

**Q1c:** u = x + ln(y). MRS = y. Tangency: y* = p_x/p_y. x* = I/p_x − 1.
**Brief:** $u = x + \ln y$ gives $y^* = p_x/p_y$ (income-independent), $x^* = I/p_x - 1$ (absorbs all income changes). If $I < p_x$, the consumer buys only $y$ ($x=0$). Good $y$ is a necessity with zero income elasticity.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-1b-07)

**Q2a:** u = x + log(y). MRS = y. dMRS/dx = dy/dx = −y < 0. Yes, convex ICs.
**Brief:** For $u = x + \log y$, $MRS = y$ and $dMRS/dx = dy/dx = -y < 0$ along any IC, confirming strictly diminishing MRS and hence convex indifference curves. The bordered Hessian also verifies quasiconcavity.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-10)

**Q2b:** X = αP_X^γ P_Z^δ P_W^ε I^η. Cross-price with Z: ε = δ. Income elasticity = η.
**Brief:** The log-linear demand $X = \alpha P_X^\gamma P_Z^\delta P_W^\varepsilon I^\eta$ has own-price elasticity $\gamma$, cross-price elasticities $\delta$ and $\varepsilon$ ($>0$ = substitutes, $<0$ = complements), and income elasticity $\eta$ ($>0$ = normal, $>1$ = luxury, $<0$ = inferior). Homogeneity of degree zero requires $\gamma + \delta + \varepsilon + \eta = 0$.
→ [Full answer in Demand & Production](./answers-demand-production.md#q-demand-01)

**Q2c:** u = x − 3y. MU_y = −3 < 0 — y is a **bad**. Corner solution: y=0, x=400/20=20.
**Brief:** $MU_y = -3 < 0$ means $y$ is a "bad" — the optimal choice is a corner with $y^* = 0$ and $x^* = I/p_x = 20$. Do NOT use the Lagrangian; it would find a utility minimum, not a maximum.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-1b-08)

**Q3a:** Q = 10 + 1.3P_B + 0.4P_M − 3P_F + 2.2I. The coefficient on P_B is **positive** (+1.3).
**Brief:** The own-price coefficient $+1.3$ is positive, violating the Law of Demand. This is a textbook sign of misspecification — likely endogeneity, omitted variable bias, or simultaneity between supply and demand.
→ [Full answer in Demand & Production](./answers-demand-production.md#q-demand-02)

**Q3b:** Q = 150P_B^{−1.5} P_{r1}^{0.75} P_{r2}^{−0.25} I^{0.8} A^{0.05}.
**Brief:** The corrected log-log demand gives own-price elasticity $-1.5$, cross-price $+0.75$ (substitute) and $-0.25$ (complement), income elasticity $0.8$ (normal necessity), and advertising elasticity $0.05$. Lerner Index gives profit-max price $P = \$3.00$ (200% markup over MC).
→ [Full answer in Demand & Production](./answers-demand-production.md#q-demand-03)

**Q4a:** Four properties: (1) Homog(1) in w (2) Non-↓ in q (3) Concave in w (4) Shephard's Lemma.
**Brief:** Cost functions satisfy: (1) HD(1) in input prices — doubling input prices doubles cost; (2) non-decreasing in output — more output cannot cost less; (3) concave in input prices — the firm substitutes away from dearer inputs, so cost rises less than linearly; (4) Shephard's Lemma — $\partial c/\partial w_k = z_k$, the conditional factor demand.
→ [Full answer in Demand & Production](./answers-demand-production.md#q-prodset-04)

**Q4b:** Sausage: 3 oz pork + 2 oz veal → 5 oz sausage. Q = min{P/3, V/2}.
**Brief:** Leontief production $Q = \min\{P/3, V/2\}$ with fixed proportions. Conditional factor demands are $P = 3Q$, $V = 2Q$; cost function $c(Q) = Q(3p_P + 2p_V)$; profit-max price via Lerner Index is $P = \$6$.
→ [Full answer in Demand & Production](./answers-demand-production.md#q-prodset-05)

**Q5a:** Q = (KL)^{1/3}, K̄=64. SR: Q=4L^{1/3}.
**Brief:** $Q = (KL)^{1/3}$ is Cobb-Douglas with DRS (exponent sum $2/3 < 1$) and $\sigma = 1$. SR ($\bar K=64$): $Q = 4L^{1/3}$, $SRTC = Q^3/64 + 64$, $SMC = 3Q^2/64$, shutdown at $P=0$. LR: $LRTC = 2\sqrt{wr} \cdot Q^{3/2}$, $MC = 3\sqrt{wr} Q^{1/2}$, supply $Q = P^2/(9wr)$.
→ [Full answer in Demand & Production](./answers-demand-production.md#q-prodset-06)

**Q5b:** Jumbo (62 oz) costs less than twice Trenta (31 oz) — economies of scale.
**Brief:** A 62 oz Jumbo costing less than twice a 31 oz Trenta reflects economies of scale — fixed costs (labor, rent, equipment) spread over more output, and variable costs (packaging, ingredients) rise less than proportionally with volume.
→ [Full answer in Demand & Production](./answers-demand-production.md#q-prodset-07)

**Q6a:** 1,000 firms, C=0.5q²+2q+80. MC=q+2. Min AVC=2.
**Brief:** Each firm supplies $q = P - 2$ for $P \ge 2$; industry supply $Q_s = 1000(P-2)$. Equilibrium at $P=23$, $Q=21,000$, per-firm profit $140.5$. A \$20/unit tax raises price to \$33 (consumers bear half), reduces output to $11,000$, and creates DWL of $100,000$.
→ [Full answer in Demand & Production](./answers-demand-production.md#q-compet-01)

**Q6b:** Three-good world: Z₂ = −3 + p₃/p₂ + p₁/p₂, Z₃ = 3p₁/p₃ + 4p₂/p₃ − 7.
**Brief:** Use Walras' Law ($\sum p_i Z_i = 0$) to find $Z_1 = -4 + 6p_3/p_1 - p_2/p_1$. Set $Z_2 = Z_3 = 0$ with $p_1 = 1$ as numeraire to obtain equilibrium prices $p_2 = 10/17$, $p_3 = 13/17$. Only relative prices are determined.
→ [Full answer in Demand & Production](./answers-demand-production.md#q-compet-02)

**Q7:** Color printers: Q_d = 250,000−100P, Q_s = 250P−30,000. World P_W=600.
**Brief:** Autarky: $P=800$, $Q=170,000$. Free trade at $P_W=600$: imports $=70,000$. A \$50 tariff raises price to $650$, imports fall to $52,500$, DWL $= \$437,500$. A VER of $20,000$ raises price to $\approx \$743$ and is welfare-inferior to tariff because quota rent goes to foreign exporters.
→ [Full answer in GE, Game Theory, Extern & Trade](./answers-ge-game-extern-trade.md#q-trade-01)

**Q8a:** Kaldor-Hicks: gainers could potentially compensate losers and still be better off.
**Brief:** Kaldor-Hicks says a change improves welfare if gainers could potentially compensate losers. The Scitovsky paradox (intersecting UPFs can give contradictory rankings) is resolved by the double test: forward test (WTP > WTA) plus reverse test (losers cannot bribe gainers) must both pass.
→ [Full answer in Welfare](./answers-welfare.md#q-pareto-02)

**Q8b:** (Same as MainQ GE Q3b.) GUPF = envelope of all UPFs. Point of bliss = tangency with highest SWF contour.
**Brief:** The GUPF is the outer envelope of all UPFs across every product-mix on the PPC — every point on it is Pareto-optimal. The "point of bliss" is the tangency of the GUPF with the highest attainable Bergson-Samuelson SWF contour, where $MRS_{SWF} =$ slope of GUPF.
→ [Full answer in Welfare](./answers-welfare.md#q-socwel-02)

---

## 5. Professor Questions (undated)

> **Source file:** `./resources/Micro questions Given by professor.docx.pdf` (17 questions)
> **Also:** `./resources/Micro  questions 49 given by professor.docx.pdf` (10 questions — subset)
> **Type:** Practice/supplementary questions

All questions focus on **General Equilibrium** and **Social Welfare**:

| # | Question | Topic | In 49Qs? |
|---|----------|-------|----------|
| 1 | Define social welfare. Critically explain criteria: i) GNP growth ii) Bentham iii) Cardinalist. | 5A | ✓ |
| 2 | "Pareto optimality necessary but not sufficient" — justify with 2×2×2. | 5B | ✓ |
| 3 | Explain assumption about MU of money for Hicks-Kaldor compensation. | 5B | ✓ |
| 4 | Define social welfare function. How used as criteria? Explain. | 5A | — |
| 5 | What are the major assumptions of SW maximization in 2×2×2? | 5A | — |
| 6 | Derive grand utility possibility frontier, determine point of bliss. | 5A | ✓ |
| 7 | Critically explain three key things Pigou dealt with in social welfare. | 5A | ✓ |
| 8 | Does perfect competition ensure welfare maximization? Examine. | 5B | — |
| 9 | Graphically explain problems of existence, uniqueness, stability in GE. | 6A | ✓ |
| 10 | Define consumption externality. Bandwagon effect and snob effect. | 8 | — |
| 11 | Does consumption externality affect GE solution in 2×2×2? | 8 | — |
| 12 | External shock in product market → factor market → equilibrium restored. | 6A | ✓ |
| 13 | Production/consumption/simultaneous equilibrium via Edgeworth box. | 6B | ✓ |
| 14 | Define GE. How differs from partial equilibrium? Example. | 6B | ✓ |
| 15 | Present a 2×2×2 Walrasian system. Does GE solution exist? Explain. | 6B | — |
| 16 | Assumptions of 2×2×2 model. How is GE reached? | 6B | ✓ |
| 17 | Show MRPT_x,y = MC_x/MC_y. | 3B | — |

#### Answers

**Q1:** SW = aggregate well-being. Three criteria: (i) GNP growth — objective but ignores distribution (ii) Bentham: W = ΣUᵢ — sum-ranking, ignores equity (iii) Cardinalist: diminishing MU of money justifies redistribution — assumes identical utility functions (unrealistic).
**Brief:** Social welfare is the aggregate well-being of society. GNP growth is objective but distribution-blind; Bentham's sum-ranking ignores equity; the Cardinalist criterion justifies redistribution via diminishing MU of money but assumes identical utility functions — an empirically unverifiable claim.
→ [Full answer in Welfare](./answers-welfare.md#q-socwel-03)

**Q2:** (Same as Batch 46 Q1a, MainQ GE Q4a.) All points on GUPF are PO; SWF selects the unique SW-maximising point.
**Brief:** Pareto optimality is necessary (SW maxima must be efficient) but not sufficient — the GUPF contains infinitely many PO points differing in distribution. A Bergson-Samuelson SWF is needed to select the unique welfare-maximising point via tangency with the GUPF.
→ [Full answer in Welfare](./answers-welfare.md#q-pareto-01)

**Q3:** (Same as Batch 46 Q1b, MainQ GE Q4b.) Constant MU of money; unequal MU leads to wrong KH ranking.
**Brief:** Kaldor-Hicks assumes constant and identical MU of money across individuals. If MU differs (rich have low MU, poor have high MU), K-H can rank a policy as welfare-improving when it actually reduces total utility — the rich person's gain is valued equally to the poor person's loss despite different utility weights.
→ [Full answer in Welfare](./answers-welfare.md#q-pareto-02)

**Q4:** SWF: W = F(U₁,...,Uₙ) — rule for ranking social states. Bergson-Samuelson: embodies explicit value judgements.
**Brief:** A social welfare function $W = F(U_1,\ldots,U_n)$ ranks social states by aggregating individual utilities with explicit value judgements about equity. Bergson-Samuelson SWFs avoid Arrow's impossibility by directly incorporating ethical norms rather than aggregating preferences axiomatically.
→ [Full answer in Welfare](./answers-welfare.md#q-socwel-04)

**Q5:** 2×2×2 SW maximisation assumptions: 2 factors, 2 goods, 2 consumers; efficiency conditions (MRS=MRT, MRTS equal, MRS equal); perfect competition; convex preferences/technology; existence of SWF with concave social ICs.
**Brief:** SW maximisation in the 2×2×2 model requires: (1) structural assumptions (2 factors, 2 goods, 2 consumers), (2) three Pareto efficiency conditions (MRTS equal, MRS equal, MRPT = MRS), (3) perfect competition to decentralise efficiency, (4) convex preferences/technology, and (5) a concave Bergson-Samuelson SWF to select the optimal distribution.
→ [Full answer in GE, Game Theory, Extern & Trade](./answers-ge-game-extern-trade.md#q-edge-01)

**Q6:** (Same as MainQ GE Q3b.) GUPF = envelope of UPFs from each PPC point. Bliss = tangency with highest SWF contour.
**Brief:** The GUPF is the outer envelope of all UPFs across every product-mix on the PPC — every point on it is Pareto-optimal. The "point of bliss" is the tangency of the GUPF with the highest SWF contour, where $MRS_{SWF} =$ slope of GUPF. Different SWFs (Bentham, Rawls, Nash) give different bliss points.
→ [Full answer in Welfare](./answers-welfare.md#q-socwel-02)

**Q7:** (Same as MainQ GE Q3a.) Pigou's three pillars: (1) Economic welfare definition (2) Dual conditions for SW max (3) Private vs social net product.
**Brief:** Pigou's three pillars: (1) defining economic welfare as the money-measurable part of social welfare; (2) dual conditions for SW max — maximise national income AND redistribute from rich to poor via diminishing MU of money; (3) divergence between private and social net product (externalities) requiring Pigouvian taxes/subsidies. Criticised for assuming cardinal, interpersonally comparable utility (Robbins, 1932).
→ [Full answer in Welfare](./answers-welfare.md#q-socwel-01)

**Q8:** Perfect competition ensures Pareto efficiency (FWT) but NOT SW maximisation — distribution depends on initial endowments.
**Brief:** Perfect competition ensures Pareto efficiency (First Welfare Theorem) but NOT social welfare maximisation — the specific Pareto optimum reached depends on initial endowments, and market failures (monopoly, externalities, public goods, asymmetric information) can prevent even efficiency. SW maximisation requires competition plus lump-sum redistribution plus a SWF.
→ [Full answer in Welfare](./answers-welfare.md#q-pareto-08)

**Q9:** (Same as MainQ GE Q1b.) Existence via E(P)=0; uniqueness via monotonic E(P); stability via dE/dP<0.
**Brief:** GE existence requires a price where $E(P)=0$ (via Intermediate Value Theorem under continuity). Uniqueness requires $E(P)$ to be monotonic (no Giffen goods or backward-bending supply). Stability follows the Walrasian tâtonnement $dP/dt = k \cdot E(P)$ — stable when $dE/dP < 0$ at equilibrium.
→ [Full answer in GE, Game Theory, Extern & Trade](./answers-ge-game-extern-trade.md#q-ge-03)

**Q10:** Consumption externality: Uᵢ = Uᵢ(Cᵢ, Cⱼ) — utility depends on others' consumption. Bandwagon: positive (demand ↑ as others consume). Snob: negative (demand ↓ as others consume).
**Brief:** Consumption externalities occur when one person's utility depends on others' consumption. Bandwagon effects (positive) make demand more elastic; snob effects (negative) make demand less elastic. Veblen effects are a related case where demand rises with price due to status signalling.
→ [Full answer in GE, Game Theory, Extern & Trade](./answers-ge-game-extern-trade.md#q-extern-05)

**Q11:** Yes — consumption externalities break the 2×2×2 GE efficiency conditions. MRS equality alone insufficient for Pareto efficiency.
**Brief:** Consumption externalities break the standard MRS equality condition: the FOC becomes $\text{MRS}_{XY}^A + \text{MRS}_{XY}^{B \to A} = \text{MRS}_{XY}^B + \text{MRS}_{XY}^{A \to B}$, so the First Welfare Theorem fails. Pigouvian taxes/subsidies are needed to internalise the externality.
→ [Full answer in GE, Game Theory, Extern & Trade](./answers-ge-game-extern-trade.md#q-extern-06)

**Q12:** (Same as MainQ GE Q2b.) 9-step Koutsoyiannis chain: taste shift → product market → factor market → factor mobility → new equilibrium.
**Brief:** The Koutsoyiannis 9-step chain traces how a taste shift toward X ripples through the product market ($P_X \uparrow$, $P_Y \downarrow$), then factor markets (Stolper-Samuelson effect changes relative $w/r$), then factor mobility (L and K reallocate), until all four markets clear in a new GE with a different functional income distribution.
→ [Full answer in GE, Game Theory, Extern & Trade](./answers-ge-game-extern-trade.md#q-ge-04)

**Q13:** Three Pareto conditions: (a) Production efficiency — MRTS equal on Edgeworth contract curve (b) Consumption efficiency — MRS equal on consumption contract curve (c) Simultaneous — MRPT = MRS = Pₓ/Pᵧ.
**Brief:** The three Pareto efficiency conditions are: (a) $\text{MRTS}_{LK}^X = \text{MRTS}_{LK}^Y$ (production efficiency along the contract curve); (b) $\text{MRS}_{XY}^A = \text{MRS}_{XY}^B$ (consumption efficiency); (c) $\text{MRPT}_{XY} = \text{MRS}_{XY}^A = \text{MRS}_{XY}^B = P_X/P_Y$ (product-mix efficiency). All four markets clear simultaneously in GE.
→ [Full answer in GE, Game Theory, Extern & Trade](./answers-ge-game-extern-trade.md#q-edge-01)

**Q14:** (Same as MainQ GE Q1a.) GE: all markets simultaneously. PE: single market isolated.
**Brief:** Partial equilibrium analyses one market in isolation (ceteris paribus), ignoring feedback effects. General equilibrium analyses all markets simultaneously, capturing interdependencies, income effects, and factor market linkages. PE is sufficient when the market is small relative to the economy.
→ [Full answer in GE, Game Theory, Extern & Trade](./answers-ge-game-extern-trade.md#q-ge-01)

**Q15:** 2×2×2 Walrasian system: 18 equations, 18 unknowns. Walras' law makes one redundant; numeraire resolves.
**Brief:** The 2×2×2 Walrasian system has ~18 equations matching ~18 unknowns (prices, quantities, incomes). Walras' Law makes one market-clearing equation redundant ($n-1$ independent), and the numeraire fixes the price level ($p_1=1$), yielding $n-1$ equations in $n-1$ relative prices. Arrow-Debreu (1954) proves existence under standard assumptions via Kakutani's fixed-point theorem.
→ [Full answer in GE, Game Theory, Extern & Trade](./answers-ge-game-extern-trade.md#q-edge-07)

**Q16:** (Same as Batch 46 (GE) part.) 6 assumptions: 2 factors, 2 goods, 2 consumers, maximising behaviour, ownership, perfect competition.
**Brief:** The 2×2×2 GE model rests on 6 assumptions: (1) two factors (L, K), (2) two goods (X, Y), (3) two consumers, (4) maximising behaviour (profit max by firms, utility max by consumers), (5) ownership of initial endowments determining income distribution, and (6) perfect competition. GE is reached via production Edgeworth box → PPC → consumption Edgeworth box → simultaneous MRPT = MRS with four-market clearing.
→ [Full answer in GE, Game Theory, Extern & Trade](./answers-ge-game-extern-trade.md#q-edge-05)

**Q17:** MRPT_xy = MC_x/MC_y. Proof: differentiate transformation function F(q_x,q_y,z)=0; profit max FOC p_x=MC_x, p_y=MC_y; tangency MRPT=p_x/p_y ⇒ MRPT=MC_x/MC_y.
**Brief:** Differentiate the transformation function $F(q_X,q_Y,z)=0$ to get $\text{MRPT}_{XY} = (\partial F/\partial q_X)/(\partial F/\partial q_Y)$. Profit maximisation gives $p_X = MC_X$ and $p_Y = MC_Y$. The competitive tangency condition $\text{MRPT}_{XY} = p_X/p_Y$ then yields $\text{MRPT}_{XY} = MC_X/MC_Y$.
→ [Full answer in Demand & Production](./answers-demand-production.md#q-profit-02)

---

## 6. Practice Questions for Mid 1 & 2 (undated)

> **Source file:** `./resources/Practice questions for mid 1 and 2.pdf`
> **Type:** Handwritten practice (scanned, Bengali + English)

Topics identified from the document (OCR-limited due to handwriting):

| Topic | Questions |
|-------|-----------|
| Consumer Theory | Preference approach, convexity, LNS, monotonicity, strong monotonicity, utility functions |
| Utility Functions | Cobb-Douglas, perfect substitutes u = ax₁ + bx₂, perfect complements u = min(ax₁, bx₂), quasilinear |
| Walrasian Demand | Properties, sufficient conditions, homogeneity |
| Welfare | CV, EV, CS — EV > CS > CV diagram |
| Production | Production function properties (closed, free disposal), profit function |
| Cobb-Douglas Applications | Walrasian demand, indirect utility, Roy's identity, expenditure minimization, compensated demand |

> **Note:** These largely overlap with the MainQ Tutorial 1 and Batch 47 Q1-5 questions above. Use the topic-wise index to find the fully-text versions.

#### Answers

**Consumer Theory:**
**Brief:** Consumer theory begins with preferences (completeness, transitivity, continuity). Convexity ensures well-behaved demand (diminishing MRS), LNS guarantees budget exhaustion (Walras' Law), and Debreu's theorem provides continuous utility representation. These axioms translate directly into properties of Marshallian and Hicksian demand.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-01)

**Utility Functions:**
**Brief:** Four canonical types: Cobb-Douglas ($\sigma=1$, constant expenditure shares), perfect substitutes ($\sigma=\infty$, corner solutions), perfect complements/Leontief ($\sigma=0$, fixed proportions), and quasilinear (zero income effect, CV=EV=CS). The CES family nests all three via parameter $\rho$.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-1b-03)

**Walrasian Demand:**
**Brief:** Walrasian demand $x(p,w)$ has four key properties: HD(0) (no money illusion), Walras' Law (budget exhaustion under LNS), convex-valuedness (from convex preferences), and upper hemi-continuity. Sufficient conditions for interior solutions: quasiconcave, monotone utility with non-zero gradient at optimum.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-1b-03)

**Welfare — EV > CS > CV:**
**Brief:** For a normal good with a price fall: CV = $e(p^0,u^0) - e(p^1,u^0)$ (area under $h(p,u^0)$), CS = area under Marshallian demand, EV = $e(p^0,u^1) - e(p^1,u^1)$ (area under $h(p,u^1)$). Since $h(p,u^1)$ lies right of $h(p,u^0)$ for normal goods, $EV > CS > CV$. The gap is the income effect; quasilinear utility gives $EV = CV = CS$.
→ [Full answer in Welfare](./answers-welfare.md#q-welfare-01)

**Production:**
**Brief:** The production set $Y$ has 5 properties: closed, no free lunch, free disposal, possibility of inaction, convexity. The profit function $\pi(p) = \max_{y\in Y} p \cdot y$ is HD(1) in $p$, convex in $p$, and yields Hotelling's Lemma ($y(p) = \nabla\pi(p)$) and the Law of Supply ($\partial y_i/\partial p_i \ge 0$).
→ [Full answer in Demand & Production](./answers-demand-production.md#q-prodset-02)

**Cobb-Douglas Applications:**
**Brief:** For $u(x_1,x_2) = x_1^\alpha x_2^\beta$, UMP yields $x_1 = \frac{\alpha}{\alpha+\beta}\frac{w}{p_1}$ (constant expenditure shares). Indirect utility $v(p,w)$ and expenditure $e(p,u)$ are inverses via duality. Roy's identity recovers demand from $v$, and Shephard's lemma recovers Hicksian demand from $e$ — the complete UMP-EMP duality chain.
→ [Full answer in Consumer Theory](./answers-consumer-theory.md#q-cons-1b-04)

---

## Source File Inventory

| Source | File | Pages | Type | Extracted? |
|--------|------|-------|------|------------|
| MainQ.pdf | `../../MainQ.pdf` | 1,2,13 | Tutorial | ✅ |
| Batch 46 | `../batch-finals/batch-46/micro-401.md` | — | Final (Hons) | ✅ |
| Batch 47 | `../batch-finals/batch-47/micro-501.md` | — | Final (MSc) | ✅ |
| Batch 48 | `../batch-finals/batch-48/micro-501.md` | — | Final (MSc) | ✅ |
| Professor Qs (17) | `./resources/Micro questions Given by professor.docx.pdf` | — | Practice | ✅ |
| Professor Qs (49 subset) | `./resources/Micro  questions 49 given by professor.docx.pdf` | — | Practice | ✅ |
| Practice Mid | `./resources/Practice questions for mid 1 and 2.pdf` | 6 | Handwritten | ⚠️ Partial (scanned) |

---

*End of document. ~80 questions across 6 source groups, each with concise exam-ready answers.*
