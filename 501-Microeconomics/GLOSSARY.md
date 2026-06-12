# Microeconomics 501 — Glossary of Terms, Abbreviations & Assumptions

<a id="term-ver"></a>
> **Purpose:** Quick lookup for every abbreviation, concept, assumption, theorem, and model in the course.
> **Cross-ref format:** `CT` = Consumer Theory, `DP` = Demand & Production, `WF` = Welfare, `GE` = Game/Extern/Trade

---

## 1. Abbreviations & Acronyms

| Term | Stands For | Definition | See |
|------|-----------|------------|-----|
<a id="term-bh"></a>
<a id="term-bordered-hessian"></a>
| **BH** | Bordered Hessian | Determinant test for quasiconcavity: $2u_xu_yu_{xy} - u_x^2u_{yy} - u_y^2u_{xx} \ge 0$ | [CT 1A.Q9](./answers-consumer-theory.md#q-cons-09) |
<a id="term-cd"></a>
| **CD** | Cobb-Douglas | Workhorse utility $u = x_1^\alpha x_2^\beta$; constant expenditure shares, closed-form solutions for all 4 core problems | [CT 1B.Q1](./answers-consumer-theory.md#q-cons-1b-01)–[Q3](./answers-consumer-theory.md#q-cons-1b-03) |
<a id="term-ce"></a>
| **CE** | Competitive (Walrasian) Equilibrium | Prices $p^*$ such that all markets clear: $z(p^*) = 0$ | [GE 6A.Q1](./answers-ge-game-extern-trade.md#q-ge-01) |
<a id="term-eos"></a>
<a id="term-elasticity"></a>
| **CES** | Constant Elasticity of Substitution | $u(x) = (\sum x_i^\rho)^{1/\rho}$, $\sigma = 1/(1-\rho)$ | [DP 3A.Q4](./answers-demand-production.md#q-prodset-03) |
<a id="term-walrasian-demand"></a>
<a id="term-walrasian"></a>
<a id="term-cs"></a>
| **CS** | Consumer Surplus | Area under Marshallian demand: $CS = \int_{p^0}^{p^1} x(p,w)\,dp$ | [WF Q1](./answers-welfare.md#q-welfare-01)–[Q5](./answers-welfare.md#q-welfare-05) |
<a id="term-cv"></a>
| **CV** | Compensating Variation | Money taken/given after price change to restore original utility $u^0$: $CV = w - e(p^1,u^0)$ | [WF Q1](./answers-welfare.md#q-welfare-01)–[Q5](./answers-welfare.md#q-welfare-05) |
<a id="term-welfare-cost"></a>
<a id="term-dwl"></a>
| **DWL** | Deadweight Loss | Welfare loss from tax/tariff: $\frac12 \times t \times \Delta Q$ | [DP 3C.Q1](./answers-demand-production.md#q-compet-01), [GE 9.Q1](./answers-ge-game-extern-trade.md#q-trade-01) |
<a id="term-hicksian-demand"></a>
<a id="term-hicksian"></a>
<a id="term-emp"></a>
<a id="term-cost-minimization"></a>
<a id="term-cost-function"></a>
<a id="term-compensated-demand"></a>
| **EMP** | Expenditure Minimization Problem | Dual to UMP: $\min p\cdot x$ s.t. $u(x) \ge \bar u$ → Hicksian demand $h(p,u)$ | [CT 1B.Q3](./answers-consumer-theory.md#q-cons-1b-03) |
<a id="term-fixed-proportions"></a>
<a id="term-leontief"></a>
| **EoS** | Elasticity of Substitution | $\sigma = \frac{d\ln(K/L)}{d\ln(MRTS)}$; CD=1, Leontief=0, linear=∞ | [DP 3A.Q4](./answers-demand-production.md#q-prodset-03) |
<a id="term-ev"></a>
| **EV** | Equivalent Variation | Money given/taken before price change to reach new utility $u^1$: $EV = e(p^0,u^1) - w$ | [WF Q1](./answers-welfare.md#q-welfare-01)–[Q5](./answers-welfare.md#q-welfare-05) |
<a id="term-lagrangian"></a>
<a id="term-foc"></a>
| **FOC** | First-Order Condition | Optimality condition from Lagrangian: $u_{x_k} = \lambda p_k$, $p\cdot x = w$ | [CT 1B.Q1](./answers-consumer-theory.md#q-cons-1b-01) |
<a id="term-welfare-theorems"></a>
<a id="term-po"></a>
<a id="term-fwt"></a>
| **FWT** | First Welfare Theorem | Every CE is Pareto optimal (under LNS, no externalities) | [WF 5B.Q5](./answers-welfare.md#q-pareto-05) |
<a id="term-upf"></a>
<a id="term-point-of-bliss"></a>
<a id="term-gupf"></a>
<a id="term-social-dividend"></a>
| **GUPF** | Grand Utility Possibility Frontier | Envelope of all UPFs across all product-mixes; tangency with SWF = point of bliss | [WF 5A.Q2](./answers-welfare.md#q-socwel-02) |
<a id="term-hd-0"></a>
| **HD(0)** / **HD(1)** | Homogeneous of Degree 0 / 1 | HD(0): $f(tx)=f(x)$; HD(1): $f(tx)=tf(x)$ | [CT 1B.Q4](./answers-consumer-theory.md#q-cons-1b-04), [basics.md](./basics.md) |
<a id="term-ic"></a>
<a id="term-indifference-set"></a>
| **IC** | Indifference Curve | Set of bundles yielding same utility: $\{x \in X : u(x) = \bar u\}$ | [CT 1A.Q2](./answers-consumer-theory.md#q-cons-02) |
<a id="term-ie"></a>
| **IE** | Income Effect | Change in demand due to purchasing power change: $-x_j \frac{\partial x_k}{\partial w}$ | [CT 1B.Q4](./answers-consumer-theory.md#q-cons-1b-04) |
| **LCS** | Lower Contour Set | $\{x \in X : u(x) \le \bar u\}$ — bundles worse than or equal to $\bar u$ | [CT 1A.Q3](./answers-consumer-theory.md#q-cons-03) |
<a id="term-lns"></a>
| **LNS** | Local Nonsatiation | $\forall x,\varepsilon>0\; \exists y: \|y-x\|<\varepsilon,\; y \succ x$ — no thick ICs | [CT 1A.Q7](./answers-consumer-theory.md#q-cons-07) |
<a id="term-m"></a>
<a id="term-monotonicity"></a>
| **M** | Monotonicity | $x_k > y_k \;\forall k \Rightarrow x \succ y$ — more of every good is strictly better | [CT 1A.Q7](./answers-consumer-theory.md#q-cons-07) |
<a id="term-mrs"></a>
| **MRS** | Marginal Rate of Substitution | $MRS_{xy} = MU_x/MU_y$; slope of IC at a point | [CT 1A.Q9](./answers-consumer-theory.md#q-cons-09) |
<a id="term-mrts"></a>
| **MRTS** | Marginal Rate of Technical Substitution | $MRTS_{LK} = MP_L/MP_K = w/r$; slope of isoquant | [DP 3A.Q4](./answers-demand-production.md#q-prodset-03) |
<a id="term-mrpt"></a>
| **MRPT** | Marginal Rate of Product Transformation | $MRPT = MC_x/MC_y$; slope of PPC — output transformation rate | [DP 3B.Q2](./answers-demand-production.md#q-profit-02) |
<a id="term-nash-equilibrium"></a>
<a id="term-ne"></a>
<a id="term-bertrand"></a>
| **NE** | Nash Equilibrium | $s_i^* \in \arg\max_{s_i} u_i(s_i, s_{-i}^*)$ — no unilateral profitable deviation | [GE 7.Q1](./answers-ge-game-extern-trade.md#q-game-01) |
<a id="term-slutsky-equation"></a>
<a id="term-slutsky"></a>
| **NSD** | Negative Semidefinite | Slutsky matrix $S(p,w)$ is NSD: $v^\top S v \le 0$ for all $v$ | [CT 1B.Q4](./answers-consumer-theory.md#q-cons-1b-04) |
<a id="term-pd"></a>
| **PD** | Prisoners' Dilemma | $T > R > P > S$, $T+S < 2R$; unique NE is (Defect, Defect) | [GE 7.Q2](./answers-ge-game-extern-trade.md#q-game-02) |
<a id="term-pe"></a>
| **PE** | Partial Equilibrium | Single-market analysis holding other prices fixed | [GE 6A.Q1](./answers-ge-game-extern-trade.md#q-ge-01) |
<a id="term-supply-function"></a>
<a id="term-profit-maximization"></a>
<a id="term-profit-max"></a>
<a id="term-profit-function"></a>
<a id="term-conditional-factor-demand"></a>
<a id="term-average-variable-cost"></a>
<a id="term-pmp"></a>
| **PMP** | Profit Maximization Problem | $\max_{y\in Y} p\cdot y$ → supply, profit function $\pi(p)$ | [DP 3B](./answers-demand-production.md) |
| **PO** | Pareto Optimal / Pareto Optimum | No agent can be made better off without making another worse off | [WF 5B](./answers-welfare.md) |
<a id="term-ppc"></a>
<a id="term-transformation-function"></a>
<a id="term-transformation-frontier"></a>
| **PPC** | Production Possibility (Frontier) Curve | All efficient output combinations given factor endowment | [GE 6B.Q3](./answers-ge-game-extern-trade.md#q-edge-03) |
<a id="term-se"></a>
| **SE** | Substitution Effect | Change in demand from price change holding utility constant: $\partial h_k/\partial p_j$ | [CT 1B.Q4](./answers-consumer-theory.md#q-cons-1b-04) |
<a id="term-sm"></a>
<a id="term-strong-mono"></a>
| **SM** | Strong Monotonicity | $x_k \ge y_k \forall k,\;x_l > y_l \exists l \Rightarrow x \succ y$; ICs strictly downward sloping | [CT 1A.Q7](./answers-consumer-theory.md#q-cons-07) |
<a id="term-subgame-perfect-ne"></a>
<a id="term-spne"></a>
<a id="term-backward-induction"></a>
| **SPNE** | Subgame Perfect Nash Equilibrium | NE in every subgame; found via backward induction | [GE 7.Q3](./answers-ge-game-extern-trade.md#q-game-03) |
<a id="term-swf"></a>
<a id="term-social-welfare"></a>
| **SWF** | Social Welfare Function | $W = W(u_1,\dots,u_n)$; aggregates individual utilities into social welfare | [WF 5A](./answers-welfare.md) |
<a id="term-swt"></a>
<a id="term-convexity"></a>
| **SWT** | Second Welfare Theorem | Any PO allocation can be decentralized as CE with lump-sum transfers (under convexity) | [WF 5B.Q5](./answers-welfare.md#q-pareto-05) |
<a id="term-quasiconcave"></a>
<a id="term-ucs"></a>
| **UCS** | Upper Contour Set | $\{x \in X : u(x) \ge \bar u\}$ — bundles at least as good as $\bar u$; convexity of UCS ⇔ quasiconcave $u$ | [CT 1A.Q3](./answers-consumer-theory.md#q-cons-03) |
<a id="term-utility-maximization"></a>
<a id="term-ump"></a>
<a id="term-demand-function"></a>
| **UMP** | Utility Maximization Problem | Primal: $\max_{x\ge0} u(x)$ s.t. $p\cdot x \le w$ → Walrasian demand $x(p,w)$ | [CT 1B.Q1](./answers-consumer-theory.md#q-cons-1b-01) |
| **UPF** | Utility Possibility Frontier | Feasible utility pairs for one product-mix | [WF 5A.Q2](./answers-welfare.md#q-socwel-02) |
<a id="term-stolper-samuelson"></a>
<a id="term-factor-intensity"></a>
| **VER** | Voluntary Export Restraint | Quota imposed by exporting country; quota rent goes to foreign exporters (worse than tariff) | [GE 9.Q1](./answers-ge-game-extern-trade.md#q-trade-01) |

---

## 2. Core Assumptions

### 2.1 Preference Axioms

| Assumption | Definition | Why Needed | Violation Example |
|-----------|-----------|------------|-------------------|
<a id="term-completeness"></a>
| **Completeness** | $\forall x,y:\; x\succeq y \lor y\succeq x$ | Consumer can always choose; utility representation requires a total order | "Brother of" relation — neither is brother of the other |
<a id="term-transitivity"></a>
| **Transitivity** | $x\succeq y \land y\succeq z \Rightarrow x\succeq z$ | No preference cycles; money-pump argument | Condorcet paradox, just-noticeable differences |
| **Reflexivity** | $x \sim x$ (implied by completeness + transitivity) | Technical regularity | Trivially satisfied |
<a id="term-rationality"></a>
| **Rationality** | Completeness + Transitivity together | Foundational assumption for all consumer theory | Real people often can't compare unfamiliar bundles |

**See:** [CT 1A.Q1](./answers-consumer-theory.md#q-cons-01) (preference-based approach)

### 2.2 Desirability Axioms

| Assumption | Definition | Implies | Key Result |
|-----------|-----------|---------|------------|
<a id="term-walras-law"></a>
<a id="term-price-ratio"></a>
| **Local Nonsatiation (LNS)** | $\forall x,\varepsilon>0\; \exists y:\|y-x\|<\varepsilon,\;y\succ x$ | No thick indifference curves; Walras' law $p\cdot x = w$ | FWT requires LNS; prevents bliss points |
| **Monotonicity (M)** | $x_k > y_k \forall k \Rightarrow x \succ y$ | ICs slope downward; LNS | M ⇒ LNS (strict) |
| **Strong Monotonicity (SM)** | $x_k \ge y_k \forall k,\; x_l > y_l \exists l \Rightarrow x \succ y$ | ICs strictly downward sloping; all goods desirable | SM ⇒ M ⇒ LNS (hierarchy, but converse fails) |

**See:** [CT 1A.Q7](./answers-consumer-theory.md#q-cons-07) (SM ⇒ M ⇒ LNS hierarchy), [CT 1A.Q2](./answers-consumer-theory.md#q-cons-02) (SM ⇒ downward-sloping ICs)

### 2.3 Convexity & Continuity

| Assumption | Definition | Why Needed |
|-----------|-----------|------------|
| **Convex preferences** | $y\succeq x \land z\succeq x \Rightarrow \lambda y + (1-\lambda)z \succeq x$ | Consumer prefers mixing/diversification; guarantees interior solutions |
| **UCS convex** | $\{x : u(x) \ge \bar u\}$ is a convex set | Equivalent to convex preferences |
| **Quasiconcave utility** | $u(\lambda x + (1-\lambda)y) \ge \min\{u(x), u(y)\}$ | Equivalent to UCS convex ⇔ convex preferences (same condition) |
<a id="term-debreu"></a>
<a id="term-continuity"></a>
| **Continuity** | $\{x : x \succeq y\}$ and $\{x : y \succeq x\}$ are closed | Needed for Debreu's utility representation theorem |
<a id="term-strong-convexity"></a>
| **Strict convexity** | $y\succeq x \land z\succeq x \land y\neq z \Rightarrow \lambda y+(1-\lambda)z \succ x$ | Unique demand (no flat segments on ICs) |

**Chain:** Convex preferences ⇔ UCS convex ⇔ utility quasiconcave
**See:** [CT 1A.Q3](./answers-consumer-theory.md#q-cons-03) (convexity definition), [CT 1A.Q4](./answers-consumer-theory.md#q-cons-04) (convexity ⇔ UCS ⇔ quasiconcave), [CT 1A.Q9](./answers-consumer-theory.md#q-cons-09) (dMRS/dx < 0)

<a id="term-production-set"></a>
<a id="term-production-function"></a>
### 2.4 Production Set Assumptions

| Assumption | Definition |
|-----------|------------|
| **Closed** | $Y$ includes its boundary (technical feasibility) |
| **No free lunch** | $Y \cap \mathbb{R}^N_+ \subseteq \{0\}$ — can't produce output from nothing |
<a id="term-free-disposal"></a>
| **Free disposal** | $y \in Y,\; y' \le y \Rightarrow y' \in Y$ — can costlessly discard |
<a id="term-shutdown-price"></a>
| **Possibility of inaction** | $0 \in Y$ — can shut down |
| **Irreversibility** | $y \in Y,\; y \neq 0 \Rightarrow -y \notin Y$ — can't reverse production |
<a id="term-returns-to-scale"></a>
| **Non-increasing RTS** | $y \in Y \Rightarrow \theta y \in Y \;\forall \theta \in [0,1]$ (scalability) |
| **CRTS (additivity)** | $y \in Y \Rightarrow \theta y \in Y \;\forall \theta \ge 0$ |
| **Convexity** | $y, y' \in Y \Rightarrow \lambda y + (1-\lambda)y' \in Y$ (no increasing RTS) |

**See:** [DP 3A.Q1](./answers-demand-production.md#q-prodset-01)–[Q3](./answers-demand-production.md#q-prodset-02), [DP 3B.Q1](./answers-demand-production.md#q-profit-01)

### 2.5 General Equilibrium Assumptions

| Assumption | Role |
|-----------|------|
| **LNS (local nonsatiation)** | Ensures budget exhausted; needed for FWT |
| **Convexity (preferences + production)** | Needed for SWT (decentralization) |
| **No externalities** | Prices reflect social costs; FWT fails otherwise |
<a id="term-perfect-competition"></a>
| **Perfect competition** | Agents are price-takers |
| **Complete markets** | All goods have markets |
| **Perfect information** | All agents know prices and quality |

**See:** [GE 6A.Q1](./answers-ge-game-extern-trade.md#q-ge-01)–[Q3](./answers-ge-game-extern-trade.md#q-ge-03), [WF 5B.Q5](./answers-welfare.md#q-pareto-05)

### 2.6 Welfare Economics Assumptions

| Assumption | Where Used |
|-----------|------------|
<a id="term-bentham"></a>
| **Cardinal utility (Bentham)** | SWF = $\sum u_i$ — requires interpersonally comparable utility |
| **Ordinal utility** | Pareto criterion — no comparability needed |
<a id="term-utility-function"></a>
<a id="term-cardinalist"></a>
| **Identical utility functions** | Cardinalist SW criterion — all individuals have same $u(\cdot)$ |
| **No externalities + convexity** | PO conditions hold |
| **Explicit value judgements** | Needed to pick a point on GUPF |

**See:** [WF 5A.Q1](./answers-welfare.md#q-socwel-01)–[Q7](./answers-welfare.md#q-socwel-07), [WF 5B.Q1](./answers-welfare.md#q-pareto-01)

---

## 3. Key Theorems & Identities

| Theorem | Statement | Where |
|---------|-----------|-------|
| **Debreu's Theorem** (1954) | If $\succeq$ is rational and continuous on $X = \mathbb{R}^N_+$, then $\exists$ continuous utility $u: X \to \mathbb{R}$ representing it | [CT 1A.Q5](./answers-consumer-theory.md#q-cons-05) |
<a id="term-roy-identity"></a>
<a id="term-roys"></a>
<a id="term-indirect-utility"></a>
| **Roy's Identity** | $x_k(p,w) = -\dfrac{\partial v(p,w)/\partial p_k}{\partial v(p,w)/\partial w}$ — recover Walrasian demand from indirect utility | [CT 1B.Q2](./answers-consumer-theory.md#q-cons-1b-02) |
<a id="term-shephard-lemma"></a>
<a id="term-shephards"></a>
<a id="term-expenditure-function"></a>
| **Shephard's Lemma** | $h_k(p,u) = \dfrac{\partial e(p,u)}{\partial p_k}$ — recover Hicksian demand from expenditure function | [CT 1B.Q3](./answers-consumer-theory.md#q-cons-1b-03) |
<a id="term-hotelling-lemma"></a>
<a id="term-hotellings"></a>
| **Hotelling's Lemma** | $y(p) = \dfrac{\partial \pi(p)}{\partial p}$, $z_i(p) = -\dfrac{\partial \pi(p)}{\partial w_i}$ — recover supply, factor demand from profit function | [DP 3B.Q1](./answers-demand-production.md#q-profit-01) |
<a id="term-duality"></a>
| **Slutsky Equation** | $\dfrac{\partial x_k}{\partial p_j} = \underbrace{\dfrac{\partial h_k}{\partial p_j}}_{\text{SE}} - \underbrace{x_j\dfrac{\partial x_k}{\partial w}}_{\text{IE}}$ — decomposes price effect | [CT 1B.Q4](./answers-consumer-theory.md#q-cons-1b-04) |
| **Slutsky Matrix** | $S(p,w) \equiv D_p h(p,u)$ — NSD, symmetric, $S(p,w)p = 0$ | [CT 1B.Q4](./answers-consumer-theory.md#q-cons-1b-04) |
<a id="term-excess-demand"></a>
| **Walras' Law** | $p \cdot z(p) = 0$ for all $p$ — value of excess demand is identically zero | [GE 6A](./answers-ge-game-extern-trade.md) |
| **First Welfare Theorem** | Every CE is PO (under LNS, no externalities) | [WF 5B.Q5](./answers-welfare.md#q-pareto-05) |
| **Second Welfare Theorem** | Every PO can be decentralized as CE with lump-sum transfers (under convexity) | [WF 5B.Q5](./answers-welfare.md#q-pareto-05) |
<a id="term-hicks-kaldor"></a>
| **Hicks-Kaldor Compensation** | If gainers can (potentially) compensate losers, the change is efficient | [WF 5B.Q7](./answers-welfare.md#q-pareto-07) |
<a id="term-scitovsky"></a>
| **Scitovsky Double Test** | Kaldor-Hicks + reversal test (losers can't bribe gainers) | [WF 5B.Q7](./answers-welfare.md#q-pareto-07) |
<a id="term-coase-theorem"></a>
<a id="term-coase"></a>
| **Coase Theorem** | With zero transaction costs + property rights, bargaining attains efficiency regardless of initial allocation | [GE 8.Q2](./answers-ge-game-extern-trade.md#q-extern-02) |
<a id="term-folk-theorem"></a>
<a id="term-folk"></a>
<a id="term-grim-trigger"></a>
| **Folk Theorem** | In infinitely repeated games, cooperation sustainable if discount factor $\delta \ge \delta^* = (\pi_{\text{dev}} - \pi_{\text{coop}})/(\pi_{\text{dev}} - \pi_{\text{pun}})$ | [GE 7.Q4](./answers-ge-game-extern-trade.md#q-game-04) |
<a id="term-samuelson"></a>
<a id="term-public-good"></a>
| **Samuelson Condition** | Public goods: $\sum_i MRS_{G,x}^i = MRT_{G,x}$ (sum of MRS = MRT) | [basics.md](./basics.md) |
<a id="term-lerner-index"></a>
<a id="term-lerner"></a>
| **Lerner Index** | $(P - MC)/P = -1/\varepsilon$ — markup over marginal cost | [DP 3C.Q1](./answers-demand-production.md#q-compet-01) |
<a id="term-arrow-debreu"></a>
| **Arrow-Debreu Existence** | If $z(p)$ is continuous, HD(0), obeys Walras' law, and has boundary behavior → $\exists p^* > 0: z(p^*) = 0$ | [GE 6A.Q2](./answers-ge-game-extern-trade.md#q-ge-02) |

---

## 4. Key Models & Functions

| Model | Form | Key Properties | Appears In |
|-------|------|---------------|------------|
<a id="term-homothetic"></a>
<a id="term-homotheticity"></a>
| **Cobb-Douglas** | $u = x_1^\alpha x_2^\beta$ | HD($\alpha+\beta$); constant expenditure shares; Engel elasticity = 1; homothetic; $\sigma = 1$ | [CT 1B.Q1](./answers-consumer-theory.md#q-cons-1b-01)–[Q5](./answers-consumer-theory.md#q-cons-1b-05), [WF Q3](./answers-welfare.md#q-welfare-03), [GE 6B.Q6](./answers-ge-game-extern-trade.md#q-edge-06) |
| **CES** | $u = (\sum x_i^\rho)^{1/\rho}$ | $\sigma = 1/(1-\rho)$, $\rho \le 1$; CD as $\rho \to 0$; Leontief as $\rho \to -\infty$; perfect subs as $\rho \to 1$; homothetic | [DP 3A.Q4](./answers-demand-production.md#q-prodset-03) |
| **Leontief** | $u = \min(x_1,\dots,x_n)$ | Perfect complements; $\sigma = 0$; non-strictly convex ICs; no substitution | [CT 1B.Q6](./answers-consumer-theory.md#q-cons-1b-06), [DP 3A.Q6](./answers-demand-production.md#q-prodset-05) |
<a id="term-numeraire"></a>
<a id="term-quasilinear"></a>
| **Quasilinear** | $u = x_1 + \varphi(x_2,\dots,x_n)$ | Zero income effects for $x_{k\ge2}$; CV = EV = CS; not homothetic; Engel curves flat for non-numeraire goods | [CT 1A.Q10](./answers-consumer-theory.md#q-cons-10), [CT 1B.Q7](./answers-consumer-theory.md#q-cons-1b-07) |
| **Homothetic** | $u = F(g(x))$, $g$ HD(1) | $x(p,w) = w \cdot x(p,1)$; Engel curves linear through origin; MRS constant on rays | [CT 1A.Q8](./answers-consumer-theory.md#q-cons-08), [CT 1B.Q5](./answers-consumer-theory.md#q-cons-1b-05) |
<a id="term-homogeneity"></a>
| **Log-linear Demand** | $X = \alpha P^\gamma P_Z^\delta I^\eta$ | Constant elasticities; $\gamma$ own-price, $\delta$ cross-price, $\eta$ income; homogeneity: $\gamma+\delta+\eta = 0$ | [DP 2.Q1](./answers-demand-production.md#q-demand-01) |
| **Linear Expenditure (Stone-Geary)** | $u = \prod(x_i - \gamma_i)^{\alpha_i}$ | Subsistence consumption $\gamma_i$; linear Engel curves | [CT 1B](./answers-consumer-theory.md) (extension) |

---

## 5. Welfare & Efficiency Concepts

| Concept | Definition | See |
|---------|-----------|-----|
| **Pareto Optimal** | No agent can be made better off without making another worse off | [WF 5B.Q1](./answers-welfare.md#q-pareto-01) |
<a id="term-pareto-improvement"></a>
| **Pareto Improvement** | A reallocation that makes at least one agent better off, none worse off | [WF 5B](./answers-welfare.md) |
<a id="term-pareto-efficient"></a>
| **Pareto Efficiency Conditions (3)** | (i) $MRS^A = MRS^B$ (consumption), (ii) $MRTS^X = MRTS^Y$ (production), (iii) $MRPT = MRS$ (product-mix) | [WF 5B.Q3](./answers-welfare.md#q-pareto-03), [GE 6B.Q3](./answers-ge-game-extern-trade.md#q-edge-03) |
| **CV** | Compensation after price change to maintain original utility ($u^0$) | [WF Q1](./answers-welfare.md#q-welfare-01)–[Q5](./answers-welfare.md#q-welfare-05) |
| **EV** | Compensation before price change to reach new utility ($u^1$) | [WF Q1](./answers-welfare.md#q-welfare-01)–[Q5](./answers-welfare.md#q-welfare-05) |
| **CS** | Area under Marshallian demand between prices | [WF Q1](./answers-welfare.md#q-welfare-01)–[Q5](./answers-welfare.md#q-welfare-05) |
| **DWL (tariff)** | $\frac12 \times t \times \Delta Q$ — tariff revenue lost to inefficient trade | [GE 9.Q1](./answers-ge-game-extern-trade.md#q-trade-01) |
| **DWL (tax)** | $\frac12 \times t \times \Delta Q$ — consumer+producer surplus lost | [DP 3C.Q1](./answers-demand-production.md#q-compet-01) |
| **Point of Bliss** | Tangency of GUPF with highest possible SWF indifference curve | [WF 5A.Q2](./answers-welfare.md#q-socwel-02) |
<a id="term-utilitarian"></a>
<a id="term-rawlsian"></a>
| **Social Welfare Function** | Aggregates individual utilities: $W(u_1,\dots,u_n)$; Utilitarian = sum, Rawlsian = max-min | [WF 5A](./answers-welfare.md) |

**Welfare orderings (normal goods):**
- Price decrease: $EV > CS > CV > 0$
- Price increase: $CV < CS < EV < 0$
- Quasilinear: $CV = EV = CS$

---

## 6. Equilibrium Concepts

| Concept | Definition | See |
|---------|-----------|-----|
| **Partial Equilibrium** | Single market analysis; all other prices fixed; Marshallian cross | [GE 6A.Q1](./answers-ge-game-extern-trade.md#q-ge-01) |
<a id="term-ge"></a>
<a id="term-contract-curve"></a>
<a id="term-edgeworth-box"></a>
<a id="term-edgeworth"></a>
| **General Equilibrium** | All markets simultaneously clear; prices are endogenous; Arrow-Debreu | [GE 6A.Q1](./answers-ge-game-extern-trade.md#q-ge-01) |
<a id="term-walrasian-system"></a>
| **Walrasian (Competitive) Equilibrium** | Prices $p^*$ such that $z(p^*) = 0$; agents take prices as given | [GE 6A](./answers-ge-game-extern-trade.md) |
| **Existence of GE** | $\exists p^* > 0: z(p^*) = 0$; requires continuity, HD(0), Walras' law, boundary behavior | [GE 6A.Q2](./answers-ge-game-extern-trade.md#q-ge-02) |
| **Uniqueness of GE** | Only one $p^*$; requires gross substitutes (not guaranteed) | [GE 6A.Q3](./answers-ge-game-extern-trade.md#q-ge-03) |
| **Stability of GE** | $dE/dP < 0$ at equilibrium (tâtonnement); multiple eq → some unstable | [GE 6A.Q3](./answers-ge-game-extern-trade.md#q-ge-03) |
| **Nash Equilibrium** | $s_i^*$ is best response to $s_{-i}^*$; no unilateral profitable deviation | [GE 7.Q1](./answers-ge-game-extern-trade.md#q-game-01) |
<a id="term-centipede"></a>
| **Subgame Perfect NE** | NE in every subgame; eliminates non-credible threats | [GE 7.Q3](./answers-ge-game-extern-trade.md#q-game-03) |
<a id="term-dominant-strategy"></a>
| **Dominant Strategy** | $s_i^D$ is best for all $s_{-i}$; strongest solution concept | [GE 7.Q2](./answers-ge-game-extern-trade.md#q-game-02) |
<a id="term-mixed-strategy"></a>
| **Mixed Strategy NE** | $\sigma^*$ such that every pure action in support yields equal expected payoff | [GE 7](./answers-ge-game-extern-trade.md) (extension) |
<a id="term-spence"></a>
<a id="term-signaling"></a>
<a id="term-separating-equil"></a>
| **Separating Equilibrium** | Different types choose different actions (Spence signaling) | [GE 8.Q4](./answers-ge-game-extern-trade.md#q-extern-04) |
<a id="term-pooling-equil"></a>
| **Pooling Equilibrium** | All types choose same action (Spence signaling) | [GE 8.Q4](./answers-ge-game-extern-trade.md#q-extern-04) |

---

## 7. Market Failure Concepts

| Concept | Definition | Policy Response | See |
|---------|-----------|----------------|-----|
<a id="term-pigouvian-tax"></a>
<a id="term-pigouvian"></a>
<a id="term-negative-externality"></a>
| **Negative Externality** | Private cost < social cost; overproduction | Pigouvian tax = MED at social optimum | [GE 8.Q2](./answers-ge-game-extern-trade.md#q-extern-02) |
<a id="term-positive-externality"></a>
| **Positive Externality** | Private benefit < social benefit; underproduction | Pigouvian subsidy = MEB at social optimum | [WF 5B.Q4](./answers-welfare.md#q-pareto-04) |
<a id="term-tragedy-commons"></a>
| **Tragedy of the Commons** | Open-access resource overused; each user ignores $\sum_{j\neq i} MC(q_j)$ | Property rights, quotas, taxes | [GE 8.Q1](./answers-ge-game-extern-trade.md#q-extern-01) |
| **Public Good** | Non-rival + non-excludable; free-rider problem | Government provision, Lindahl prices | [basics.md](./basics.md) |
<a id="term-lemons"></a>
<a id="term-adverse-selection"></a>
<a id="term-asymmetric-info"></a>
| **Adverse Selection** | Hidden information → market failure (lemons) | Mandates, certification, signaling | [GE 8.Q3](./answers-ge-game-extern-trade.md#q-extern-03) |
<a id="term-moral-hazard"></a>
| **Moral Hazard** | Hidden action → inefficient risk-taking | Co-payments, deductibles, contracts | — |
| **Signaling** | Informed party reveals type via costly signal | Spence education model: separating requires $w_H - w_L \in [c_H, c_L]$ | [GE 8.Q4](./answers-ge-game-extern-trade.md#q-extern-04) |
<a id="term-snob"></a>
<a id="term-consumption-externality"></a>
<a id="term-bandwagon"></a>
| **Consumption Externality** | $U_i = U_i(C_i, C_j)$ — Bandwagon (+) and Snob (-) effects | Breaks FWT (missing market) | [GE 8.Q5](./answers-ge-game-extern-trade.md#q-extern-05)–[Q6](./answers-ge-game-extern-trade.md#q-extern-06) |

---

## 8. Key Mathematical Tools

| Tool | Purpose | Example |
|------|---------|---------|
| **Lagrangian** | Solve constrained optimization | $\mathcal{L} = u(x) + \lambda(w - p\cdot x)$ |
| **Bordered Hessian** | Check quasiconcavity (second-order condition) | $| \overline{H} | \ge 0$ for quasiconcave $u$ |
<a id="term-envelope"></a>
<a id="term-marginal-utility-money"></a>
| **Envelope Theorem** | Derivative of optimized value w.r.t. parameter | $\partial v/\partial w = \lambda$ (marginal utility of income) |
| **Implicit Function Theorem** | Derive comparative statics of FOC system | $dx/dp$ from FOC derivatives |
<a id="term-intermediate-value-theorem"></a>
| **Intermediate Value Theorem** | Prove GE existence | $E(p) > 0$ at $p=0$, $E(p) < 0$ at $p=\infty$ → $\exists p^*$ with $E(p^*)=0$ |
| **Homogeneity Properties** | Check degree of functions | $x(p,w)$ HD(0), $e(p,u)$ HD(1), $v(p,w)$ HD(0), $\pi(p)$ HD(1) |

---

**File:** `501-Microeconomics/GLOSSARY.md`
**Cross-ref:** [`basics.md`](./basics.md) (formulas), [`EXAM-CHEAT-SHEET.md`](./EXAM-CHEAT-SHEET.md), [`EXAM-COMMON-MISTAKES.md`](./EXAM-COMMON-MISTAKES.md)
