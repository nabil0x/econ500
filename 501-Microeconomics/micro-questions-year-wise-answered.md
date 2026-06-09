# Microeconomics — Questions by Year/Source (with Answers)

> All microeconomic theory questions indexed by source document, with concise exam-ready answers.
> **Cross-links:** [Topic-wise Index](./micro-questions-topic-wise.md) | [Full Notes](./README.md) | [Basics](./basics.md)

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

**Q1a:** Preference-based approach — consumer has a well-defined preference relation `>=` over X = Rⁿ₊, chooses most-preferred affordable bundle.
**A:** • Preferences are primitive, choices derived from them • Rationality requires **completeness** ($\forall x,y$: either $x\ge y$ or $y\ge x$) and **transitivity** (if $x\ge y$ and $y\ge z$ then $x\ge z$) • Reflexivity implied • Violations: Condorcet paradox, framing effects, just-noticeable differences
**→ See:** answers-consumer-theory.md §1A Q1

**Q1b:** Indifference set IND(x) = { y ∈ X : y ~ x }. Strong monotonicity ⇒ downward-sloping ICs.
**A:** • Strong mono: more of ANY good strictly ↑ utility • Proof by contradiction: upward-sloping IC $\Rightarrow$ $y\gg x$ on same IC $\Rightarrow$ $y > x$ (strong mono) but $y\sim x$ (IC definition) — contradiction • Rules out: upward-sloping ICs, thick ICs, bads
**→ See:** answers-consumer-theory.md §1A Q2

**Q2a:** Convexity (Def 1): if x>=y then λx+(1-λ)y >= y. (Def 2): UCS(x) convex.
**A:** • Strong convexity: strict — convex combination strictly better • Weak convexity: chord can coincide with IC (perfect substitutes) • Strong required for single-valued demand • CD: both; linear/Leontief: weak only
**→ See:** answers-consumer-theory.md §1A Q3

**Q2b:** Chain: Convexity of preference ⇔ UCS(x) convex ⇔ u(.) quasiconcave.
**A:** • Def 2 makes first equivalence definitional • Quasiconcave: $u(\lambda x+(1-\lambda)y) \ge \min\{u(x), u(y)\}$ • Proof: ($\Rightarrow$) if $x,y \in \text{UCS}(z)$ then $u(\lambda x+(1-\lambda)y) \ge \min\{u(x),u(y)\} \ge u(z)$ • ($\Leftarrow$) reverse the argument
**→ See:** answers-consumer-theory.md §1A Q4

**Q2c:** Debreu's theorem: monotonicity + continuity ⇒ ∃ continuous u(.) representing >=.
**A:** • Project each bundle $x$ onto 45° line via unique IC intersection • Let $m = \max\{x_i\}$, $M = (m,\ldots,m)$ • Define $A = \{t\in[0,m]: (t,\ldots,t) \le x\}$, $B = \{t: (t,\ldots,t) \ge x\}$ • Continuity $\Rightarrow$ $A,B$ closed, intersection non-empty • $u(x) = t(x)$ where $(t,\ldots,t) \sim x$
**→ See:** answers-consumer-theory.md §1A Q5

**Q3i:** u = x₁^α x₂^β. Lagrangian → FOCs → x₁ = [α/(α+β)]·(w/p₁), x₂ = [β/(α+β)]·(w/p₂).
**A:** • HD(0) in $(p,w)$ ✓ • Walras' Law ✓ • $\partial x_1/\partial p_1 < 0$ ✓ • $\partial x_1/\partial p_2 = 0$ (zero cross-price) • $\partial x_1/\partial w > 0$ (normal) • **Constant expenditure shares**: $s_1 = \alpha/(\alpha+\beta)$, $s_2 = \beta/(\alpha+\beta)$
**→ See:** answers-consumer-theory.md §1B Q1

**Q3ii:** v(p,w) = B·w^{α+β}·p₁^{-α}·p₂^{-β}, B = α^αβ^β/(α+β)^{α+β}.
**A:** • HD(0) in $(p,w)$ • $\uparrow w$, $\downarrow p_k$ • Quasiconvex in $(p,w)$ • Roy's identity: $x_k = -(\partial v/\partial p_k)/(\partial v/\partial w)$ • Verify: $\partial v/\partial p_1 = -\alpha v/p_1$, $\partial v/\partial w = (\alpha+\beta)v/w$ $\Rightarrow$ $-\partial v/\partial p_1 / \partial v/\partial w = \alpha w/((\alpha+\beta)p_1) = x_1$ ✓
**→ See:** answers-consumer-theory.md §1B Q2

**Q3iii:** EMP: min p·x s.t. u(x) ≥ ū. FOCs → same tangency ratio as UMP.
**A:** • Hicksian demand: $h_1 = \bar u^{1/(\alpha+\beta)}\cdot(\alpha/\beta)^{\beta/(\alpha+\beta)}\cdot(p_2/p_1)^{\beta/(\alpha+\beta)}$ • $e(p,\bar u) = \bar u^{1/(\alpha+\beta)}\cdot(\alpha+\beta)\cdot(p_1/\alpha)^{\alpha/(\alpha+\beta)}(p_2/\beta)^{\beta/(\alpha+\beta)}$ • HD(0) in $p$ • $\partial h_1/\partial p_1 < 0$ • Duality: $e(p,v(p,w)) = w$, $v(p,e(p,\bar u)) = \bar u$
**→ See:** answers-consumer-theory.md §1B Q3

**Q4a:** u: X → R where x>=y ⇔ u(x) ≥ u(y). Only ranking matters (ordinality).
**A:** • Monotonicity: all goods $\uparrow$ $\Rightarrow$ strictly better • Strong monotonicity: one good $\uparrow$ $\Rightarrow$ strictly better • Any strictly $\uparrow$ transform $f(u)$ represents same preferences • Examples: $u = x^\alpha y^\beta$ vs $v = \alpha \ln x + \beta \ln y$
**→ See:** answers-consumer-theory.md §1A Q6

**Q4b:** Chain: Strong Mono ⇒ Mono ⇒ LNS.
**A:** • Strong Mono $\Rightarrow$ Mono: if $x_k \ge y_k$ $\forall k$, either $x_\ell > y_\ell$ for some $\ell$ $\Rightarrow$ $x > y$, or $x = y$ $\Rightarrow$ $x \sim y$. Either way $x \ge y$ ✓ • Mono $\Rightarrow$ LNS: $\forall x$, $\varepsilon>0$, construct $y = (x_1+\delta,\ldots)$ with $\delta = \varepsilon/\sqrt{N}$. Then $y_k > x_k$ $\forall k$ $\Rightarrow$ $y > x$, and $||y-x|| = \varepsilon$ ✓
**→ See:** answers-consumer-theory.md §1A Q7

**Q4c:** (i) Homogeneous of degree k: u(ax) = a^k u(x). (ii) Homothetic: monotonic transform of homogeneous function.
**A:** • HD $\Rightarrow$ MRS constant on rays • Homothetic $\Rightarrow$ MRS depends only on ratio $x_1/x_2$ • Engel curves are straight lines through origin • All homogeneous are homothetic; converse false (e.g., $u = xy + a$) • CD: HD($\alpha+\beta$) and homothetic
**→ See:** answers-consumer-theory.md §1A Q8

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

**Q1a:** CV = e(p¹, u¹) − e(p¹, u⁰) = w − e(p¹, u⁰) — uses new prices, original utility.
**A:** • $EV = e(p^0, u^1) - e(p^0, u^0) = e(p^0, u^1) - w$ — uses old prices, new utility • $CS = \int x_1(p_1, \bar p_{-1}, w) \, dp_1$ (area under Marshallian demand) • CV & EV exact (Hicksian); CS approximate (Marshallian mixes income+substitution effects) • For zero income effect, all three equal
**→ See:** answers-welfare.md §Topic 4 Q1

**Q1b:** For p↓ (normal): h(p,u¹) > x(p,w) > h(p,u⁰) ⇒ EV > CS > CV.
**A:** • EV uses new (higher) utility → rightmost Hicksian → largest area • CV uses original utility → leftmost → smallest • CS (Marshallian) lies between → intermediate • For p↑: ordering reverses — CV > CS > EV
**→ See:** answers-welfare.md §Topic 4 Q2

**Q2a:** Production function q = f(z): max output from input vector. Production set Y = {y∈Rᴸ: F(y) ≤ 0}.
**A:** • Transformation function $F(y)$ — implicit, $F(y)=0$ at boundary • Transformation frontier $\{y: F(y)=0\}$ — technically efficient points • $\text{MRPT}_{k\ell} = (\partial F/\partial y_k)/(\partial F/\partial y_\ell) = -dy_\ell/dy_k$
**→ See:** answers-demand-production.md §Topic 3A Q1

**Q2b:** 11 properties: non-empty, closed, no free lunch, possibility of inaction, free disposal, irreversibility, various returns to scale (non-inc/dec/CRS), additivity, convexity.
**A:** • Key graphs: closed (solid boundary), free disposal (southwest of any feasible point feasible), convexity (line between two points stays inside) • Convexity fails with fixed costs (set-up costs create "hole")
**→ See:** answers-demand-production.md §Topic 3A Q2&3

**Q3a:** π(p) = max_{y∈Y} p·y — value function of PMP.
**A:** If $Y$ closed & free disposal: • HD(1) in $p$: $\pi(\lambda p) = \lambda \pi(p)$ • Convex in $p$: $\pi(\alpha p+(1-\alpha)p') \le \alpha\pi(p)+(1-\alpha)\pi(p')$ • Hotelling's Lemma: $\partial\pi/\partial p_k = y_k(p)$ • Non-$\downarrow$ in output prices, non-$\uparrow$ in input prices • Continuous in $p$ • Law of Supply: $\partial y_k/\partial p_k \ge 0$
**→ See:** answers-demand-production.md §Topic 3B Q1

**Q3b:** α=½. p⁰=(4,4), m=300; p¹=(2,4), m=300. v⁰ = 37.5, v¹ ≈ 53.03.
**A:** • $e(p,u) = 2u\sqrt{p_1 p_2}$ • $CV = w - e(p^1, u^0) = 300 - 212.1 =$ **87.9** • $EV = e(p^0, u^1) - w = 424.24 - 300 =$ **124.24** • $CS = \int(150/p_1) dp_1 = 150 \ln(0.5) =$ **103.98** • **EV > CS > CV** confirms both goods are **normal**
**→ See:** answers-welfare.md §Topic 4 Q3

**Q4a:** x(p,w) properties: HD(0), Walras' Law (p·x = w), convex set (if convex pref), single-valued (if strictly convex).
**A:** Sufficient condition violated when: • Non-monotone utility → corner solution (MRS $\neq$ price ratio) • Non-quasiconcave utility → tangency yields minimum, not max • $\nabla u = 0$ (bliss point) → Walras' Law fails
**→ See:** answers-consumer-theory.md §1B Q4

**Q4b:** (i) HD(0) of Walrasian demand: x(ap,aw) = x(p,w). Same budget set. (ii) Homothetic pref: MRS depends only on ratio x₁/x₂.
**A:** • Homothetic $\Rightarrow$ Engel curves linear through origin, expenditure shares constant, income elasticity $= 1$ for all goods • CD, linear, Leontief, CES are homothetic • Quasilinear ($u = v(x)+y$) is NOT homothetic
**→ See:** answers-consumer-theory.md §1B Q5

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
**A:** • GE feedback loops: tax on tea → tea price ↑ → coffee demand ↑ → factor reallocation → wage changes → income effects • PE scope: one market; GE scope: all interdependent markets • GE determines all prices simultaneously
**→ See:** answers-ge-game-extern-trade.md §Topic 6A Q1

**Q1b:** Three problems via excess demand E(P) = QD − QS.
**A:** • **Existence**: $E(P)=0$ at some $P>0$ — requires continuity + boundary conditions ($E(P)>0$ at low $P$, $<0$ at high $P$) • **Uniqueness**: monotonic $E(P)$ ($dE/dP<0$ everywhere); non-monotonic $\Rightarrow$ multiple equilibria • **Stability**: $dE/dP<0$ $\Rightarrow$ stable; $dE/dP>0$ $\Rightarrow$ unstable • Draw D-S diagrams for all four cases
**→ See:** answers-ge-game-extern-trade.md §Topic 6A Q2

**Q2a:** 2×2×2 model: 2 factors (L,K), 2 goods (X,Y), 2 consumers (A,B). Fixed factor supplies, CRTS, perfect competition.
**A:** • Edgeworth production box: dimensions L_total × K_total • X isoquants from SW, Y isoquants from NE • Contract curve: MRTSˣ_LK = MRTSʸ_LK = w/r (Pareto-efficient in production) • Off-curve points inefficient — reallocation can ↑ both outputs
**→ See:** answers-ge-game-extern-trade.md §Topic 6B Q1

**Q2b:** Taste shift toward X → Pₓ↑, profits↑ in X → D for L,K↑ → w↑, r↑ → factor mobility from Y to X → w,r equalise → new GE.
**A:** • 9-step Koutsoyiannis chain: taste change → product market → factor market → factor mobility → factor price equalisation → supply shifts → new equilibrium • Different factor intensities drive final w₂>w₀, r₂<r₀ (Stolper-Samuelson)
**→ See:** answers-ge-game-extern-trade.md §Topic 6A Q4

**Q3a:** SW = aggregate well-being of society. Pigou: economic welfare = "part measurable by money."
**A:** Three issues: (1) Definition & scope — economic vs non-economic welfare (criticism: arbitrary division) (2) Dual conditions — NI growth + income redistribution from rich to poor (criticism: equal capacity for satisfaction assumption untenable) (3) Private vs social net product — externalities, Pigouvian tax/subsidy (criticism: quantification impossible in practice)
**→ See:** answers-welfare.md §Topic 5A Q1

**Q3b:** GUPF = outer envelope of all UPFs from every product-mix on PPC. Point of bliss = tangency of GUPF with highest social indifference contour.
**A:** • Points on GUPF are ALL Pareto-optimal • Bliss point requires: MRPT = MRS^A = MRS^B (efficiency) AND slope(GUPF) = slope(SWF) (distribution) • Bliss depends on specific SWF — different value judgements → different bliss points
**→ See:** answers-welfare.md §Topic 5A Q2

**Q4a:** Pareto optimality = necessary (any SW max must be efficient) but not sufficient (many PO points, only one maximises SW given SWF).
**A:** • GUPF: all points Pareto-optimal • Bergson SWF selects tangency point E • Points c, c₁ on GUPF are PO but on lower social indifference contours than E • Pareto criterion cannot rank PO points; SWF needed
**→ See:** answers-welfare.md §Topic 5B Q1

**Q4b:** Constant MU of money assumed — a rich person's £1 has same utility weight as a poor person's.
**A:** • Correct only if MU of money identical across individuals • If unequal (MU declines with income), Kaldor-Hicks can be wrong: rich gain £2000 (low MU), poor lose £1000 (high MU) → KH says pass, actual welfare falls • Potential $\neq$ actual compensation • Scitovsky's double test required
**→ See:** answers-welfare.md §Topic 5B Q2

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
**A:** • GUPF: infinite PO points • SWF tangency selects the single SW-maximising point • Pareto criterion cannot rank among PO points
**→ See:** answers-welfare.md §Topic 5B Q1

**Q1b:** (Same as MainQ GE Q4b.) Constant MU of money required; unequal MU → KH may give wrong ranking.
**A:** • Correct only if MU identical across all individuals • Robbins: interpersonal comparisons unscientific • Scitovsky paradox: intersecting UPFs can give A>B and B>A
**→ See:** answers-welfare.md §Topic 5B Q2

**Q2a:** Lagrangian: max U_A s.t. U_B ≥ Ū_B, X_A+X_B = X̄, Y_A+Y_B = Ȳ.
**A:** • FOCs: $\partial U_A/\partial X_A = \lambda \cdot \partial U_B/\partial X_B$, $\partial U_A/\partial Y_A = \lambda \cdot \partial U_B/\partial Y_B$ • Dividing: $\text{MRS}^A_{xy} = \text{MRS}^B_{xy}$ • Contract curve in Edgeworth box: all tangency points of A and B's ICs
**→ See:** answers-welfare.md §Topic 5B Q3

**Q2b:** C₁ = 0.1q₁²+5q₁−0.1q₂² (external economy from 2→1), C₂ = 0.2q₂²+7q₂+0.025q₁² (diseconomy from 1→2).
**A:** • Private: $q_1=50$, $q_2=20$, total $\pi=307.5$ • Social (joint max): $q_1^*=40$, $q_2^*=40$, total $\pi=360$ • Tax firm 1: $t = \partial C_2/\partial q_1 = 0.05(40) =$ **2/unit** • Subsidise firm 2: $s = -\partial C_1/\partial q_2 = 0.2(40) =$ **8/unit** • **Social dividend = $360 - 307.5 = 52.5$**
**→ See:** answers-welfare.md §Topic 5B Q4

**Q3a:** FWT: Every competitive equilibrium is Pareto-optimal. SWT: Any Pareto optimum can be realised as CE with lump-sum transfers.
**A:** • FWT conditions: LNS, perfect competition, complete markets, no externalities <-> MRS equality, MRTS equality, MRPT = MRS • SWT conditions: convex preferences and production; lump-sum transfers separate efficiency from equity • Policy: FWT → laissez-faire case; SWT → redistribute endowments, then let markets work
**→ See:** answers-welfare.md §Topic 5B Q5

**Q3b:** SWF: W = F(U₁,...,Uₙ) — rule ranking social states by individual utilities.
**A:** • **Utilitarian**: $W = \sum U_i$ — linear social ICs (slope $-1$), sum-ranking, equity-blind • **Rawlsian**: $W = \min\{U_i\}$ — L-shaped ICs, lexicographic priority to worst-off, extreme inequality aversion • **Nash SWF**: $W = \prod U_i$ (rectangular hyperbola)
**→ See:** answers-welfare.md §Topic 5B Q6

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

**Q4a:** NE: set of strategies where no player can unilaterally deviate and improve payoff.
**A:** • $q_1=100-2p_1+p_2$, $q_2=100-2p_2+p_1$, $MC=10$ • BR$_1$: $p_1=30+p_2/4$, BR$_2$: $p_2=30+p_1/4$ • Solve: $p_1^*=p_2^*=$**40**, $q_1=q_2=60$, $\pi_1=\pi_2=1800$ • Bertrand with differentiated products $\to$ prices are strategic complements (BR slopes positive)
**→ See:** answers-ge-game-extern-trade.md §Topic 7 Q1

**Q4b:** PD: individually rational choices (confess) → collectively worse outcome (both imprisoned).
**A:** • Dominant strategy: Confess for both • NE: (Confess, Confess) is Pareto-inferior to (Don't, Don't) • Implications for oligopoly: price undercutting, advertising wars, overinvestment in R&D — all PD-like • Repeated interaction (grim trigger, Folk Theorem) can sustain cooperation if δ is high enough
**→ See:** answers-ge-game-extern-trade.md §Topic 7 Q2

**Q5a:** Market entry: E decides IN/OUT; if IN, I decides Accommodate/Fight.
**A:** • Backward induction: (1) I accommodates ($40 > -10$) • (2) E enters ($40 > 0$) • SPNE: (Enter, Accommodate) • Fight threat is not credible (not subgame perfect)
**→ See:** answers-ge-game-extern-trade.md §Topic 7 Q3

**Q5b:** Stage game (differentiated from original Q): Up-Left (4,4), Up-Right (6,3), Down-Left (3,6), Down-Right (5,5).
**A:** • Stage-game NE: (Down, Right) = (5,5) • Infinitely repeated with grim trigger: play (Up, Left) = (4,4) cooperatively; deviation $\to$ (Down, Right) forever • Sustaining condition: $4/(1-\delta) \ge 6 + 5\delta/(1-\delta)$ $\Rightarrow$ $\delta \ge 2/3$ • For $\delta \ge 2/3$, cooperation on (4,4) is SPNE
**→ See:** answers-ge-game-extern-trade.md §Topic 7 Q4

**Q6a:** Backward induction in finite games predicts cooperation unravels from the end → inefficient early defection.
**A:** • In finitely repeated PD, last period forces defection → period T-1 knows this → defects → unravels to period 1 • Multiple NE help: if stage game has cooperative NE alongside non-cooperative one, unraveling argument weakens • Punishment strategies (reversion to bad NE) can sustain good outcomes
**→ See:** answers-ge-game-extern-trade.md §Topic 7 Q5

**Q6b:** Centipede: alternating Take/Pass with growing pot. BI predicts immediate Take (1,0). (2,2) at end is better but unreachable.
**A:** • Overcoming: (1) Incomplete info — small probability of altruistic type limits unraveling (Kreps et al.) (2) Multiple NE — "always Pass" can be sustained by belief (3) Bounded rationality — real players pass mid-game (4) Social preferences — fairness, reciprocity
**→ See:** answers-ge-game-extern-trade.md §Topic 7 Q6

### Part C — Externalities, Public Goods & Information

| # | Question | Marks | Topic |
|---|----------|-------|-------|
| 7a | What is Tragedy of Commons? Example. | 3 | 8 |
| 7b | Steel-fishery pollution: private vs social costs under profit max, joint max, property rights. | 11 | 8 |
| 8a | Show asymmetric information → good disappears from market. | 4 | 8 |
| 8b | Spence's Model of Education: education as productivity signal. | 10 | 8 |

#### Answers

**Q7a:** Common resource: each individual acts in self-interest → overuse → depletion for all.
**A:** • Mechanism: private marginal benefit = full gain; social marginal cost shared → overconsumption • Example: open-access fishery — each fisher catches maximally, stock collapses • Solutions: property rights, catch quotas, Pigouvian tax
**→ See:** answers-ge-game-extern-trade.md §Topic 8 Q1

**Q7b:** Steel mill (S) produces pollution x, harming fishery (F). C_S(S,x), C_F(F,x). ∂C_S/∂x < 0, ∂C_F/∂x > 0.
**A:** • Private max: S sets $-\partial C_S/\partial x = 0$ $\to$ too much pollution • Joint max: $-\partial C_S/\partial x = \partial C_F/\partial x$ $\to$ efficient $x^\circ < x^*$ • Coase Theorem: with property rights & zero transaction costs, bargaining reaches $x^\circ$ regardless of rights allocation • DWL = triangle between $x^\circ$ and $x^*$
**→ See:** answers-ge-game-extern-trade.md §Topic 8 Q2

**Q8a:** Akerlof's Market for Lemons: sellers know quality, buyers only know average.
**A:** • Good cars (peaches) value $10k to buyer, $8k to seller; lemons $5k/$3k • Asymmetric info → buyer offers expected value $7,500 • Peach owners reserve $8k → withdraw • Only lemons remain → market partially collapses • Result: high-quality goods may disappear entirely
**→ See:** answers-ge-game-extern-trade.md §Topic 8 Q3

**Q8b:** Spence (1973): workers have private type (H/L). Education costly but signals type. Single-crossing: c_H < c_L.
**A:** • Separating PBE: H acquires education ($e=1$), L does not ($e=0$). Firms: $w(e=1)=\text{high}$, $w(e=0)=\text{low}$. Requires $w_H - w_L \in [c_H, c_L]$ • Pooling PBE: neither acquires education; off-equilibrium beliefs sustain it • Education is wastefully costly in separating eq. but restores information • Does NOT raise productivity — pure signal
**→ See:** answers-ge-game-extern-trade.md §Topic 8 Q4

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

**Q1a:** (Identical to MainQ 1a.) Preference-based approach: primitive preferences, completeness + transitivity.
**A:** • Completeness: $\forall x,y$: can compare • Transitivity: no cycles • Rational preference $\to$ utility representation
**→ See:** answers-consumer-theory.md §1A Q1

**Q1b:** (Identical to MainQ 1b.) Indifference set IND(x) = {y: y~x}. Strong mono ⇒ ICs downward-sloping by contradiction.
**A:** • Upward-sloping IC $\Rightarrow$ $y \gg x$ but $y\sim x$ $\to$ contradiction with strong mono
**→ See:** answers-consumer-theory.md §1A Q2

**Q2a:** (Identical to MainQ 2a.) Two definitions; strong convexity gives strict preference.
**A:** • Convex: chord on or above IC; Strong: chord strictly above IC
**→ See:** answers-consumer-theory.md §1A Q3

**Q2b:** (Identical to MainQ 2b.) Equivalence. Provide key proof direction.
**A:** • UCS convex $\Leftrightarrow$ $u$ quasiconcave: quasiconcavity definition directly mirrors convex UCS property
**→ See:** answers-consumer-theory.md §1A Q4

**Q2c:** (Identical to MainQ 2c.) Debreu: project bundle onto 45° line via IC intersection.
**A:** • $u(x) = t$ where $(t,\ldots,t) \sim x$ • Continuity ensures unique $t$ exists
**→ See:** answers-consumer-theory.md §1A Q5

**Q3i:** (Identical to MainQ 3i.) x₁ = αw/(α+β)p₁, x₂ = βw/(α+β)p₂. Constant expenditure shares.
**A:** • Lagrangian: FOCs → tangency condition • Properties: HD(0), Walras' Law, downward sloping own-price, zero cross-price, normal goods
**→ See:** answers-consumer-theory.md §1B Q1

**Q3ii:** (Identical to MainQ 3ii.) v(p,w) = B·w^{α+β}·p₁^{-α}·p₂^{-β}. Roy's: x_k = −(∂v/∂p_k)/(∂v/∂w).
**A:** • HD(0) in $(p,w)$ • $\uparrow w$, $\downarrow p_k$ • Roy's verified: $\partial v/\partial p_1 = -\alpha v/p_1$, $\partial v/\partial w = (\alpha+\beta)v/w$ $\Rightarrow$ $x_1 = \alpha w/((\alpha+\beta)p_1)$ ✓
**→ See:** answers-consumer-theory.md §1B Q2

**Q3iii:** (Identical to MainQ 3iii.) h₁ = ū^{1/(α+β)}·(α/β)^{β/(α+β)}·(p₂/p₁)^{β/(α+β)}. e(p,ū) duality checks.
**A:** • EMP setup $\to$ same tangency ratio as UMP • Hicksian HD(0) in $p$ • Compensated law of demand: $\partial h/\partial p < 0$
**→ See:** answers-consumer-theory.md §1B Q3

**Q4a:** (Identical to MainQ 4a.) u: X→R representing >=. Monotonicity vs strong monotonicity distinction.
**A:** • Mono: all goods $\uparrow$ $\Rightarrow$ better; Strong mono: one good $\uparrow$ $\Rightarrow$ better • Only ranking matters (ordinal)
**→ See:** answers-consumer-theory.md §1A Q6

**Q4b:** (Identical to MainQ 4b.) Strong Mono ⇒ Mono ⇒ LNS.
**A:** • Strong Mono $\Rightarrow$ Mono: one-good increase gives strict or weak preference • Mono $\Rightarrow$ LNS: construct $y = x+\delta$ in $\varepsilon$-ball, all components larger $\Rightarrow$ strictly better
**→ See:** answers-consumer-theory.md §1A Q7

**Q4c:** (Identical to MainQ 4c.) Homogeneous: u(ax)=a^k u(x). Homothetic: monotonic transform of homogeneous.
**A:** • HD $\Rightarrow$ MRS constant on rays • Homothetic $\Rightarrow$ Engel curves linear through origin • Homogeneous $\subset$ Homothetic (converse false)
**→ See:** answers-consumer-theory.md §1A Q8

**Q5a:** (Same as Tutorial 2 Q2a/Q2b.) Production set Y = {y: F(y) ≤ 0}. 11 properties.
**A:** • Closed, no free lunch, free disposal, possibility of inaction, convexity, various RTS • Graphs: solid boundary (closed), southwest region (free disposal)
**→ See:** answers-demand-production.md §Topic 3A Q2&3

**Q5b:** σ = %Δ(K/L)/%ΔMRTS. σ = ∞ for linear (MRTS constant). σ = 0 for fixed proportions (K/L fixed).
**A:** • Linear $q = aK+bL$: MRTS $= b/a$ constant $\to$ $\sigma = \infty$ • Leontief: $K/L$ fixed at kink $\to$ $\sigma = 0$ • CD: $\sigma = 1$
**→ See:** answers-demand-production.md §Topic 3A Q4

**Q5c:** (Same as Tutorial 2 Q3a.) π(p) = max p·y. Properties: HD(1), convex, Hotelling's Lemma, law of supply.
**A:** • Convex in $p$ (not concave!) • Hotelling: $\partial\pi/\partial p_k = y_k(p)$ • Law of supply: $\partial y_k/\partial p_k \ge 0$
**→ See:** answers-demand-production.md §Topic 3B Q1

**Q6a:** (Same as Tutorial 2 Q1a.) CV = w−e(p¹,u⁰), EV = e(p⁰,u¹)−w, CS = ∫x₁dp₁.
**A:** • CV: new prices, old utility • EV: old prices, new utility • CS: Marshallian (observable but approximate)
**→ See:** answers-welfare.md §Topic 4 Q1

**Q6b:** (Same as Tutorial 2 Q1b.) For p↓, normal: h(p,u¹) > x(p,w) > h(p,u⁰) ⇒ EV > CS > CV.
**A:** • For p↑: ordering reverses (CV > CS > EV) • Gap reflects income effect
**→ See:** answers-welfare.md §Topic 4 Q2

**Q6c:** (Same as Tutorial 2 Q3b.) α=½, p⁰=(4,4), m=300; p¹=(2,4). v⁰=37.5, v¹≈53.03.
**A:** • $e(p,u)=2u\sqrt{p_1 p_2}$ • CV=87.9, EV=124.24, CS=103.98 • EV$>$CS$>$CV $\Rightarrow$ both **normal goods** • Positive income effect (EV $-$ CV = 36.34)
**→ See:** answers-welfare.md §Topic 4 Q3

**Q7a:** (Same as MainQ GE Q1b.) Existence: E(P)=0 at P>0. Uniqueness: monotonic E(P). Stability: dE/dP<0.
**A:** • Existence: continuity + IVT • Uniqueness: $dE/dP<0$ $\forall P$ • Stability: Walrasian tâtonnement • Arrow-Debreu conditions
**→ See:** answers-ge-game-extern-trade.md §Topic 6A Q3

**Q7b:** (Same as MainQ GE Q2b.) Taste shock → product market → factor market → factor mobility → new GE.
**A:** • 9-step transmission chain • Different factor intensities → w₂>w₀, r₂<r₀ (Stolper-Samuelson)
**→ See:** answers-ge-game-extern-trade.md §Topic 6A Q4

**Q8:** Exchange economy: U_A = X_A Y_A, U_B = X_B + Y_B. Endowments: A (10,50), B (50,10). Total X=60, Y=60.
**A:** • $\text{MRS}_A = Y_A/X_A$, $\text{MRS}_B = 1$ • Pareto efficiency: $Y_A = X_A$ (interior) • Endowment $\text{MRS}_A=5 \neq 1$ $\Rightarrow$ **not efficient**, scope for trade • Contract curve: $Y_A = X_A$ ($0 \le X_A \le 60$) • $(X_A=80, Y_A=50)$ infeasible (total $X=60$)
**→ See:** answers-ge-game-extern-trade.md §Topic 6B Q6

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
**A:** • $\text{MRS} = u_x/u_y$ • Along IC: $d\text{MRS}/dx = [u_x^2 u_{yy} - 2u_x u_y u_{xy} + u_y^2 u_{xx}] / u_y^3$ • Numerator $= -$ (bordered Hessian condition) • $d\text{MRS}/dx < 0$ $\Leftrightarrow$ numerator $< 0$ $\Leftrightarrow$ quasiconcavity holds
**→ See:** answers-consumer-theory.md §1A Q9

**Q1b:** u(G,V,C) = min(G,V,C). Negroni 1:1:1.
**A:** • Marshallian: $G^* = w/(p_G+p_V+p_C)$ (all three identical) • Hicksian: $h_C(p,u) = \bar u$ (independent of prices) • Expenditure: $e(p,u) = u \cdot (p_G+p_V+p_C)$ • HD(0) for Marshallian, HD(0) for Hicksian in $p$
**→ See:** answers-consumer-theory.md §1B Q6

**Q1c:** u = x + ln(y). MRS = y. Tangency: y* = p_x/p_y. x* = I/p_x − 1.
**A:** • $y$ is income-inelastic ($\partial y/\partial I = 0$) • $x$ absorbs all extra income • If $I < p_x$: corner solution, only $y$ consumed • Quasilinear: zero income effect for $y$
**→ See:** answers-consumer-theory.md §1B Q7

**Q2a:** u = x + log(y). MRS = y. dMRS/dx = dy/dx = −y < 0. Yes, convex ICs.
**A:** • Bordered Hessian: $2u_x u_y u_{xy} - u_x^2 u_{yy} - u_y^2 u_{xx} = 1/y^2 > 0$ ✓ • Quasiconcave confirmed
**→ See:** answers-consumer-theory.md §1A Q10

**Q2b:** X = αP_X^γ P_Z^δ P_W^ε I^η. Cross-price with Z: ε = δ. Income elasticity = η.
**A:** • $\delta=0.8>0$ $\Rightarrow$ $Z$ is **gross substitute** • $\eta$ not given directly — check coefficients • Own-price $|\gamma|=0.4<1$ $\Rightarrow$ inelastic • $P_X\downarrow$ $\Rightarrow$ expenditure $\downarrow$ (inelastic good) • If $P_W\downarrow5\%$ and $\varepsilon>0$ $\Rightarrow$ $Q\downarrow$; if $\varepsilon<0$ $\Rightarrow$ $Q\uparrow$
**→ See:** answers-demand-production.md §Topic 2 Q1

**Q2c:** u = x − 3y. MU_y = −3 < 0 — y is a **bad**. Corner solution: y=0, x=400/20=20.
**A:** • Do NOT use Lagrangian (identifies minimum) • $\text{MU}_y < 0$ $\Rightarrow$ consumer chooses zero $y$ • $u(20,0)=20$
**→ See:** answers-consumer-theory.md §1B Q8

**Q3a:** Q = 10 + 1.3P_B + 0.4P_M − 3P_F + 2.2I. The coefficient on P_B is **positive** (+1.3).
**A:** • $\partial Q/\partial P_B = 1.3 > 0$ $\Rightarrow$ upward-sloping demand • Violates Law of Demand • Likely misspecified model
**→ See:** answers-demand-production.md §Topic 2 Q2

**Q3b:** Q = 150P_B^{−1.5} P_{r1}^{0.75} P_{r2}^{−0.25} I^{0.8} A^{0.05}.
**A:** • $r_2$ ($\varepsilon=-0.25$) is French fries (complement) • $r_1$ ($\varepsilon=0.75$) is substitute (Big Mac) • $\eta=0.8$ $\Rightarrow$ necessity • Advertising: $0.05\times 50\%=$**2.5%** $\uparrow$ • FF price $\downarrow 50\%$ $\Rightarrow$ Whopper $Q$ $\uparrow$ by 12.5% • Profit-max $P = \text{MC}/(1+1/\varepsilon) = 1/(1-\frac{2}{3}) =$ **\$3.00** • BK must lower price by **5%** to offset McDonald's 10% cut
**→ See:** answers-demand-production.md §Topic 2 Q3

**Q4a:** Four properties: (1) Homog(1) in w (2) Non-↓ in q (3) Concave in w (4) Shephard's Lemma.
**A:** • (1) $c(\lambda w,q)=\lambda c(w,q)$ • (2) $q_1>q_0$ $\Rightarrow$ $c(q_1) \ge c(q_0)$ • (3) Firm substitutes away from expensive inputs $\to$ cost rises less than linearly • (4) $\partial c/\partial w_k = z_k(w,q)$ (conditional factor demand)
**→ See:** answers-demand-production.md §Topic 3A Q5

**Q4b:** Sausage: 3 oz pork + 2 oz veal → 5 oz sausage. Q = min{P/3, V/2}.
**A:** • Production: $Q = \min\{P/3, V/2\}$ • Conditional demand: $P(Q)=3Q$, $V(Q)=2Q$ • Cost: $c(Q) = 3p_P \cdot Q + 2p_V \cdot Q = 5Q$ (if $p_P=p_V=1$) • Demand $Q=200P^{-6}$: $\text{MR}=\text{MC}$ $\Rightarrow$ $P^*=$**\$6**
**→ See:** answers-demand-production.md §Topic 3A Q6

**Q5a:** Q = (KL)^{1/3}, K̄=64. SR: Q=4L^{1/3}.
**A:** • $L = Q^3/64$ • $\text{SRTC} = Q^3/64 + 64$ ($w=r=1$) • Shutdown: $\min\text{AVC} = 0$ (any $P>0$ produces) • SR supply: $Q = \sqrt{64P/3}$ • DRS ($\frac13+\frac13=\frac23<1$) • $\sigma=1$ (CD) • LR: $L=(r/w)^{1/2} Q^{3/2}$, $K=(w/r)^{1/2} Q^{3/2}$ • $\text{LRTC}=2\sqrt{wr} \cdot Q^{3/2}$ • LR supply: $Q = P^2/(9wr)$
**→ See:** answers-demand-production.md §Topic 3A Q7

**Q5b:** Jumbo (62 oz) costs less than twice Trenta (31 oz) — economies of scale.
**A:** • Fixed costs (labor, rent) spread over more output • MC of second 31 oz < AC of first 31 oz • Packaging costs less than proportional to volume
**→ See:** answers-demand-production.md §Topic 3A Q8

**Q6a:** 1,000 firms, C=0.5q²+2q+80. MC=q+2. Min AVC=2.
**A:** • SR supply per firm: $q=P-2$ ($P\ge2$) • Industry: $Q_s=1000(P-2)$ • Eq: $P=23$, $Q=21{,}000$, each $q=21$, $\pi=140.5$ • \$20 tax: $P_b=33$, $P_s=13$, $Q=11{,}000$ • $\text{DWL} = \frac12 \times 20 \times 10{,}000 =$ **100,000** • Tax split evenly (equal slopes)
**→ See:** answers-demand-production.md §Topic 3C Q1

**Q6b:** Three-good world: Z₂ = −3 + p₃/p₂ + p₁/p₂, Z₃ = 3p₁/p₃ + 4p₂/p₃ − 7.
**A:** • Walras' law: $p_1 Z_1 + p_2 Z_2 + p_3 Z_3 = 0$ $\Rightarrow$ $Z_1 = -4 + (6p_3 - p_2)/p_1$ • Solve $Z_2=0$, $Z_3=0$: $p_2/p_1 = 10/17$, $p_3/p_1 = 13/17$ • $Z_1=0$ automatically by Walras' law
**→ See:** answers-demand-production.md §Topic 3C Q2

**Q7:** Color printers: Q_d = 250,000−100P, Q_s = 250P−30,000. World P_W=600.
**A:** • Autarky: P=800, Q=170,000 • Free trade: imports 70,000 at P=600 • $50 tariff: P=650, imports=52,500, revenue=$2.625M, DWL=$437,500 • VER 20,000: P=$742.86, imports=20,000, ΔW=−$9.29M (worse: quota rent to foreigners) • VER > tariff for welfare loss
**→ See:** answers-ge-game-extern-trade.md §Topic 9 Q1

**Q8a:** Kaldor-Hicks: gainers could potentially compensate losers and still be better off.
**A:** • Scitovsky paradox: K-H can give A>B and B>A simultaneously (intersecting UPFs) • Scitovsky double test: (i) Forward: gainers' WTP > losers' WTA ✓ AND (ii) Reverse: losers cannot bribe gainers to reject ✓ • Both must pass for welfare improvement
**→ See:** answers-welfare.md §Topic 5B Q7

**Q8b:** (Same as MainQ GE Q3b.) GUPF = envelope of all UPFs. Point of bliss = tangency with highest SWF contour.
**A:** • All points on GUPF are Pareto-optimal • Bliss requires both efficiency (on GUPF) and distribution (tangency with SWF) • Does NOT guarantee max SW if SWF is misspecified or changes
**→ See:** answers-welfare.md §Topic 5A Q2

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
**A:** • GNP: efficiency-only • Bentham: equity-blind • Cardinalist: equity-focused but empirically weak • All three have implicit value judgements
**→ See:** answers-welfare.md §Topic 5A Q3

**Q2:** (Same as Batch 46 Q1a, MainQ GE Q4a.) All points on GUPF are PO; SWF selects the unique SW-maximising point.
**A:** • Pareto: necessary (efficiency) but not sufficient (distribution) • Bergson-Samuelson SWF resolves
**→ See:** answers-welfare.md §Topic 5B Q1

**Q3:** (Same as Batch 46 Q1b, MainQ GE Q4b.) Constant MU of money; unequal MU leads to wrong KH ranking.
**A:** • Correct only if identical MU across individuals • Scitovsky paradox: requires double test
**→ See:** answers-welfare.md §Topic 5B Q2

**Q4:** SWF: W = F(U₁,...,Uₙ) — rule for ranking social states. Bergson-Samuelson: embodies explicit value judgements.
**A:** • Used to compare Pareto-incomparable changes • Maximised subject to GUPF → bliss point • Social ICs in U-space • Limitation: Arrow's impossibility theorem
**→ See:** answers-welfare.md §Topic 5A Q4

**Q5:** 2×2×2 SW maximisation assumptions: 2 factors, 2 goods, 2 consumers; efficiency conditions (MRS=MRT, MRTS equal, MRS equal); perfect competition; convex preferences/technology; existence of SWF with concave social ICs.
**A:** • Structural (2×2×2) + Efficiency (3 Pareto conditions) + Perfect competition + Distributional (SWF existence) • Distinguish assumptions for PO vs for SW max
**→ See:** answers-welfare.md §Topic 5A Q7

**Q6:** (Same as MainQ GE Q3b.) GUPF = envelope of UPFs from each PPC point. Bliss = tangency with highest SWF contour.
**A:** • All GUPF points PO • Bliss requires efficiency + distribution • Not unique — depends on SWF chosen
**→ See:** answers-welfare.md §Topic 5A Q2

**Q7:** (Same as MainQ GE Q3a.) Pigou's three pillars: (1) Economic welfare definition (2) Dual conditions for SW max (3) Private vs social net product.
**A:** • Criticisms: cardinal utility assumption, arbitrary welfare/non-welfare dichotomy, equal capacity-for-satisfaction postulate
**→ See:** answers-welfare.md §Topic 5A Q5

**Q8:** Perfect competition ensures Pareto efficiency (FWT) but NOT SW maximisation — distribution depends on initial endowments.
**A:** • Competition = necessary condition (efficiency) but not sufficient (equity) • Market failures (monopoly, externalities, public goods, asymmetric info) prevent even PO • Need: competition + lump-sum transfers + SWF
**→ See:** answers-welfare.md §Topic 5B Q8

**Q9:** (Same as MainQ GE Q1b.) Existence via E(P)=0; uniqueness via monotonic E(P); stability via dE/dP<0.
**A:** • Graph 4 cases: unique stable, unique unstable, multiple, none • Draw D-S and E(P) diagrams
**→ See:** answers-ge-game-extern-trade.md §Topic 6A Q2

**Q10:** Consumption externality: Uᵢ = Uᵢ(Cᵢ, Cⱼ) — utility depends on others' consumption. Bandwagon: positive (demand ↑ as others consume). Snob: negative (demand ↓ as others consume).
**A:** • Bandwagon → more elastic demand (network effects) • Snob → less elastic demand (exclusivity premium) • Veblen effect: demand ↑ with price (status signalling)
**→ See:** answers-ge-game-extern-trade.md §Topic 8 Q5

**Q11:** Yes — consumption externalities break the 2×2×2 GE efficiency conditions. MRS equality alone insufficient for Pareto efficiency.
**A:** • First Welfare Theorem fails when externalities present • Market failure: missing market for the externality • Standard MRS $\neq$ MRS condition no longer sufficient
**→ See:** answers-ge-game-extern-trade.md §Topic 8 Q6

**Q12:** (Same as MainQ GE Q2b.) 9-step Koutsoyiannis chain: taste shift → product market → factor market → factor mobility → new equilibrium.
**A:** • Key: different factor intensities → w₂>w₀, r₂<r₀ • Increasing-cost industries • 8-panel diagram
**→ See:** answers-ge-game-extern-trade.md §Topic 6A Q4

**Q13:** Three Pareto conditions: (a) Production efficiency — MRTS equal on Edgeworth contract curve (b) Consumption efficiency — MRS equal on consumption contract curve (c) Simultaneous — MRPT = MRS = Pₓ/Pᵧ.
**A:** • Edgeworth production box → contract curve → PPC → consumption box → contract curve → GE at MRPT=MRS=MRS^A=MRS^B
**→ See:** answers-ge-game-extern-trade.md §Topic 6B Q3

**Q14:** (Same as MainQ GE Q1a.) GE: all markets simultaneously. PE: single market isolated.
**A:** • GE captures feedback loops • PE: ceteris paribus • Example: coffee/tea or drought/wheat
**→ See:** answers-ge-game-extern-trade.md §Topic 6B Q4

**Q15:** 2×2×2 Walrasian system: 18 equations, 18 unknowns. Walras' law makes one redundant; numeraire resolves.
**A:** • Arrow-Debreu (1954): under perfect competition, convexity, no indivisibilities, GE solution **exists** • Equation-counting neither necessary nor sufficient • Determines relative prices only
**→ See:** answers-ge-game-extern-trade.md §Topic 6B Q7

**Q16:** (Same as Batch 46 (GE) part.) 6 assumptions: 2 factors, 2 goods, 2 consumers, maximising behaviour, ownership, perfect competition.
**A:** • GE reached via: (1) Production side: MRTS=w/r on contract curve (2) PPC from contract curve (3) Consumption side: MRS=Pₓ/Pᵧ (4) Simultaneous: MRPT=MRS • 4 markets (L,K,X,Y) clear simultaneously
**→ See:** answers-ge-game-extern-trade.md §Topic 6B Q5

**Q17:** MRPT_xy = MC_x/MC_y. Proof: differentiate transformation function F(q_x,q_y,z)=0; profit max FOC p_x=MC_x, p_y=MC_y; tangency MRPT=p_x/p_y ⇒ MRPT=MC_x/MC_y.
**A:** • Direct proof: total differentiate $F=0$ $\to$ $\text{MRPT} = (\partial F/\partial q_x)/(\partial F/\partial q_y)$ • Profit max: $p_x=\text{MC}_x$, $p_y=\text{MC}_y$ • $\text{MRPT} = p_x/p_y = \text{MC}_x/\text{MC}_y$ ✓
**→ See:** answers-demand-production.md §Topic 3B Q2

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
**A:** • Preference approach: completeness + transitivity $\to$ rational preference • Convexity: chord above IC; strict convexity: chord strictly above • LNS: $\forall x$, $\varepsilon>0$, $\exists y$ within $\varepsilon$ with $y > x$ • Mono: all goods $\uparrow$ $\Rightarrow$ strictly better; Strong mono: one good $\uparrow$ $\Rightarrow$ strictly better • Utility function: $x \ge y$ $\Leftrightarrow$ $u(x) \ge u(y)$; ordinal, unique up to monotonic transform
**→ See:** answers-consumer-theory.md §1A

**Utility Functions:**
**A:** • CD: $u=x^\alpha y^\beta$ — constant shares, $\sigma=1$ • Perfect substitutes: $u=ax_1+bx_2$ — linear ICs, $\sigma=\infty$, corner solutions • Perfect complements: $u=\min\{ax_1,bx_2\}$ — right-angle ICs, $\sigma=0$, fixed proportions • Quasilinear: $u=v(x)+y$ — zero income effect for $x$
**→ See:** answers-consumer-theory.md §1A and §1B

**Walrasian Demand:**
**A:** • Properties: HD(0), Walras' Law ($p \cdot x = w$ by LNS), convex set (convex pref), single-valued (strictly convex) • Sufficient conditions for interior solution: (1) $u$ quasiconcave (2) $u$ monotone (3) $\nabla u \neq 0$ • Violations $\to$ corner solutions or minima
**→ See:** answers-consumer-theory.md §1B Q4

**Welfare — EV > CS > CV:**
**A:** • For p↓, normal good: h(p,u¹) rightmost → largest area (EV) • h(p,u⁰) leftmost → smallest area (CV) • Marshallian between them → CS intermediate • For p↑: ordering reverses • Gap = income effect
**→ See:** answers-welfare.md §Topic 4 Q2, Q4

**Production:**
**A:** • Production set: closed, no free lunch, free disposal, possibility of inaction, convexity • Profit function ($Y$ closed & free disposal): HD(1) in $p$, convex, Hotelling's Lemma, law of supply • Properties from $Y$ $\to$ properties of $\pi(p)$
**→ See:** answers-demand-production.md §Topic 3A Q2&3, §Topic 3B Q1

**Cobb-Douglas Applications:**
**A:** • Walrasian demand: $x_1 = \alpha w/(\alpha+\beta)p_1$, $x_2 = \beta w/(\alpha+\beta)p_2$ • Indirect utility: $v = B \cdot w^{\alpha+\beta} \cdot p_1^{-\alpha} \cdot p_2^{-\beta}$ • Roy's identity: $x_k = -(\partial v/\partial p_k)/(\partial v/\partial w)$ • Expenditure function: $e = \bar u^{1/(\alpha+\beta)} \cdot (\alpha+\beta) (p_1/\alpha)^{\alpha/(\alpha+\beta)} (p_2/\beta)^{\beta/(\alpha+\beta)}$ • Hicksian demand derived from EMP
**→ See:** answers-consumer-theory.md §1B Q1-Q3

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
