# Equation Explainer

> Plain-English explanations for every equation on the [Exam Cheat Sheet](./EXAM-CHEAT-SHEET.md). Use the equation links on the cheat sheet to jump directly to the relevant explanation.

---

## 1. Preference Axioms

### Completeness & Transitivity {#eq-rationality}
**Equation:**
- Completeness: $\forall x,y,\;x\succeq y\lor y\succeq x$
- Transitivity: $x\succeq y\land y\succeq z\Rightarrow x\succeq z$
**Variables:** $x,y,z$ = consumption bundles; $\succeq$ = weak preference relation ("at least as good as")
**Intuition:** Completeness says the consumer can always compare any two bundles — no indecisiveness allowed. Transitivity ensures consistency across chains of comparisons — if A is preferred to B and B to C, then A must be preferred to C. Together (completeness + transitivity) define rational preferences, which are necessary and sufficient for a utility representation.
**Exam tip:** Transitivity violations create "money pump" situations. Examiners ask you to identify which axiom a given preference pattern violates.

### Monotonicity (SM, M, LNS) {#eq-monotonicity}
**Equation:**
- SM: $x_k\ge y_k\forall k,\;x_l>y_l\exists l\Rightarrow x\succ y$
- M: $x_k>y_k\forall k\Rightarrow x\succ y$
- LNS: $\forall x,\varepsilon>0\;\exists y:\|y-x\|<\varepsilon,\;y\succ x$
**Variables:** $x,y$ = bundles; $\succ$ = strict preference; $\varepsilon$ = arbitrarily small distance; $\|\cdot\|$ = Euclidean norm
**Intuition:** These three form a weakening chain. Strong Monotonicity (SM): strictly more of at least one good and no less of any other is strictly better. Monotonicity (M): strictly more of ALL goods is better. Local Nonsatiation (LNS): you can always find a slightly better bundle arbitrarily close — this is the minimal assumption needed for Walras' Law to hold. LNS is weaker than M, which is weaker than SM.
**Exam tip:** LNS is sufficient for Walras' Law and the First Welfare Theorem. Don't assume M when only LNS is given.

### Homothetic Preferences {#eq-homothetic}
**Equation:** $x(p,w)=w\cdot x(p,1)$; MRS constant on rays from origin
**Variables:** $x(p,w)$ = Walrasian demand at prices $p$ and wealth $w$; $x(p,1)$ = demand at unit wealth
**Intuition:** Homothetic preferences have Engel curves that are straight lines through the origin — doubling wealth doubles demand for every good, and the consumption bundle composition (budget shares) stays the same. The MRS depends only on the ratio of goods, not the absolute scale. Cobb-Douglas and CES are homothetic.
**Exam tip:** Homotheticity massively simplifies GE problems — the contract curve is linear, and you can scale from one wealth level to another without re-solving.

---

## 2. Convexity & Quasiconcavity

### Quasiconcavity & Bordered Hessian {#eq-quasiconcavity}
**Equation:**
- $u(\lambda x+(1-\lambda)y)\ge\min\{u(x),u(y)\}$
- $\frac{dMRS}{dx}=\frac{u_x^2u_{yy}-2u_xu_yu_{xy}+u_y^2u_{xx}}{u_y^3}<0\iff$ quasiconcave
- Bordered Hessian: $\begin{vmatrix}0&u_x&u_y\\ u_x&u_{xx}&u_{xy}\\ u_y&u_{yx}&u_{yy}\end{vmatrix}\ge0$
**Variables:** $u$ = utility function; $u_x$ = partial derivative with respect to first good, $u_{xx}$ = second derivative; $\lambda\in[0,1]$ = convex combination weight
**Intuition:** These three conditions are equivalent characterizations of quasiconcavity (which corresponds to convex upper contour sets = convex preferences). The first is the definition: a convex combination of two bundles is at least as good as the worse of the two. The second says that diminishing MRS is equivalent to quasiconcavity. The third (bordered Hessian determinant non-negative) is the most practical test — if the BH is positive, the function is quasiconcave.
**Exam tip:** The BH determinant is the most common exam tool for checking quasiconcavity. For n variables, check leading principal minors alternate in sign (first ≥0, second ≤0, third ≥0, ...).

---

## 3. Utility Maximization (UMP)

### UMP Lagrangian & FOC {#eq-ump}
**Equation:** $\mathcal{L}=u(x)+\lambda(w-p\cdot x)$; FOC: $u_{x_k}=\lambda p_k$, $p\cdot x=w$
**Variables:** $\mathcal{L}$ = Lagrangian; $u(x)$ = utility; $\lambda$ = Lagrange multiplier (marginal utility of wealth); $p_k$ = price of good $k$; $w$ = wealth
**Intuition:** The UMP chooses the affordable bundle that maximizes utility. The Lagrangian transforms the constrained problem into an unconstrained one. The FOCs say the marginal utility per dollar is equalized across all goods ($u_{x_k}/p_k=\lambda$), which is equivalent to $MRS_{ij}=p_i/p_j$. The budget binds ($p\cdot x=w$) because LNS ensures no unspent money.
**Exam tip:** Always derive FOCs, then take ratios to eliminate $\lambda$ — that gives the tangency condition $MRS=p_1/p_2$. The SOC is the bordered Hessian being negative semi-definite.

### Walrasian Demand & Indirect Utility {#eq-walrasian-demand}
**Equation:**
- $x(p,w)$: HD(0), $p\cdot x(p,w)=w$ (Walras' Law via LNS)
- $v(p,w)=u(x(p,w))$: HD(0), $\uparrow w$, $\downarrow p$
**Variables:** $x(p,w)$ = Walrasian (Marshallian) demand; $v(p,w)$ = indirect utility; $p$ = price vector; $w$ = wealth
**Intuition:** Walrasian demand solves the UMP. It is homogeneous of degree 0: scaling all prices and wealth by the same factor leaves the budget set unchanged, so the same bundle is chosen. Walras' Law says the optimal bundle exhausts the budget (with LNS). Indirect utility is the maximum utility achievable at given prices and wealth — it increases with wealth and decreases with prices.
**Exam tip:** HD(0) is constantly tested. CD example: $x(p,w)=(\alpha w/p_1, (1-\alpha)w/p_2)$ — doubling $(p,w)$ gives the same $x$.

### Roy's Identity {#eq-roys-identity}
**Equation:** $x_k(p,w)=-\frac{\partial v/\partial p_k}{\partial v/\partial w}$
**Variables:** $v(p,w)$ = indirect utility; $\partial v/\partial p_k$ = marginal disutility of price increase; $\partial v/\partial w$ = marginal utility of wealth
**Intuition:** Roy's identity recovers Walrasian demand from indirect utility. It says demand for good $k$ equals the negative ratio of how much a price hike hurts (in utility terms) to how much extra wealth helps. It is derived by applying the envelope theorem to $v(p,w)=u(x(p,w))$ and differentiating with respect to $p_k$.
**Exam tip:** If you have $v(p,w)$, you get $x(p,w)$ instantly with no re-optimization. This is the fastest route from indirect utility to demand.

---

## 4. Expenditure Minimization (EMP)

### EMP & Shephard's Lemma {#eq-emp-shephard}
**Equation:**
- $\min p\cdot x$ s.t. $u(x)\ge\bar u$; $\mathcal{L}=p\cdot x+\mu(\bar u-u(x))$
- Shephard: $\partial e(p,u)/\partial p_k=h_k(p,u)$
- $e(p,u)=p\cdot h(p,u)$: HD(1) in $p$, concave in $p$
**Variables:** $e(p,u)$ = expenditure function; $h(p,u)$ = Hicksian (compensated) demand; $\mu$ = Lagrange multiplier; $\bar u$ = target utility
**Intuition:** The EMP is the dual of the UMP — instead of maximizing utility given a budget, it minimizes expenditure needed to reach a target utility. Shephard's Lemma says the derivative of the expenditure function with respect to a price gives Hicksian demand for that good. The expenditure function is HD(1) in prices and concave — as a price rises, you need at least proportionally more expenditure to stay at the same utility.
**Exam tip:** Shephard's Lemma is the fastest way to get Hicksian demand from $e(p,u)$. Concavity in $p$ implies $\partial h_k/\partial p_k \le 0$ (own-price compensated demand slopes downward).

---

## 5. Duality & Slutsky

### Duality {#eq-duality}
**Equation:** $e(p,v(p,w))=w$; $v(p,e(p,u))=u$
**Variables:** $e(p,\cdot)$ = expenditure function; $v(p,\cdot)$ = indirect utility; $w$ = wealth; $u$ = utility
**Intuition:** Duality formalizes the inverse relationship between UMP and EMP. Starting from any wealth $w$, the indirect utility $v(p,w)$ gives maximum utility; plugging that utility into the expenditure function returns exactly $w$. Starting from any utility $u$, expenditure $e(p,u)$ gives minimum wealth needed; plugging that into indirect utility returns $u$. They are functional inverses.
**Exam tip:** Duality lets you switch between UMP and EMP freely. If a problem is easier to solve as cost minimization, do it — then duality recovers the utility maximization results.

### Slutsky Equation {#eq-slutsky}
**Equation:** $\frac{\partial x_k}{\partial p_j}=\frac{\partial h_k}{\partial p_j}-x_j\frac{\partial x_k}{\partial w}$
**Variables:** $x_k$ = Marshallian demand for good $k$; $h_k$ = Hicksian demand; $p_j$ = price of good $j$; $w$ = wealth
**Intuition:** The Slutsky equation decomposes the total effect of a price change on demand into: (1) substitution effect ($\partial h_k/\partial p_j$) — the change holding utility constant, always negative for own-price; and (2) income effect ($-x_j\cdot\partial x_k/\partial w$) — the change due to altered purchasing power. For own-price ($k=j$), the substitution effect is negative and the income effect sign depends on whether the good is normal ($+$) or inferior ($-$). A Giffen good requires the good to be inferior AND the income effect to dominate the substitution effect.
**Exam tip:** Giffen goods need TWO conditions — inferior good AND $|\text{income effect}| > |\text{substitution effect}|$. The Slutsky equation shows both.

### Homogeneity Properties {#eq-homogeneity}
**Equation:**
- $x(p,w), v(p,w), h(p,u)$: HD(0)
- $e(p,u), c(w,q), \pi(p)$: HD(1)
**Variables:** $x$ = demand; $v$ = indirect utility; $h$ = Hicksian demand; $e$ = expenditure; $c$ = cost; $\pi$ = profit; $p$ = prices; $w$ = factor prices; $q$ = output; $u$ = utility
**Intuition:** Homogeneity of degree zero means "no money illusion" — doubling all prices and wealth leaves the budget set unchanged, so real decisions don't change. Homogeneity of degree one means proportional scaling — doubling all input prices exactly doubles cost. These properties provide testable restrictions on demand and cost behavior.
**Exam tip:** Euler's theorem: for HD($r$) function $f$, $\sum_i p_i\cdot\partial f/\partial p_i = r\cdot f$. Use this to check homogeneity or derive restrictions.

---

## 6. Elasticities & Production

### Elasticities & Lerner Index {#eq-elasticities}
**Equation:**
- $\varepsilon_{kk}=\frac{\partial\ln x_k}{\partial\ln p_k}$; TR test: $|\varepsilon|>1\Rightarrow P\downarrow\Rightarrow TR\uparrow$
- $\varepsilon_{kj}>0$ substitute, $<0$ complement; $\eta_k$: $>1$ luxury, $0<\eta<1$ necessity, $<0$ inferior
- Lerner: $\frac{P-MC}{P}=-\frac1\varepsilon$; $P=MC/(1+1/\varepsilon)$
**Variables:** $\varepsilon_{kk}$ = own-price elasticity; $\varepsilon_{kj}$ = cross-price elasticity; $\eta_k$ = income elasticity; $P$ = price; $MC$ = marginal cost; $TR$ = total revenue
**Intuition:** Price elasticity measures how responsive demand is to price changes. Elastic demand ($|\varepsilon|>1$) means a price cut raises total revenue; inelastic ($|\varepsilon|<1$) means a price cut lowers it. The Lerner Index measures market power as the markup over marginal cost as a fraction of price. It is inversely proportional to demand elasticity. Perfect competition ($\varepsilon\to-\infty$) gives zero markup ($P=MC$). Monopoly operates where demand is elastic ($|\varepsilon|>1$).
**Exam tip:** The Lerner Index is your go-to for any market power question. Remember: less elastic demand = more market power = higher markup.

### MRTS & Elasticity of Substitution {#eq-mrts-eos}
**Equation:** $MRTS_{LK}=MP_L/MP_K=w/r$; $\sigma=\frac{d\ln(K/L)}{d\ln(MRTS)}$
**Variables:** $MRTS_{LK}$ = marginal rate of technical substitution; $MP_L$ = marginal product of labour; $MP_K$ = marginal product of capital; $w,r$ = factor prices; $\sigma$ = elasticity of substitution; $K/L$ = capital-labour ratio
**Intuition:** MRTS is the slope of the isoquant. It shows the rate at which capital substitutes for labour while holding output constant. Cost minimization requires $MRTS = w/r$. The elasticity of substitution $\sigma$ measures how easily inputs can be substituted: $\sigma\to\infty$ (linear/perfect substitutes), $\sigma=1$ (Cobb-Douglas), $\sigma\to0$ (Leontief/fixed proportions).
**Exam tip:** $\sigma$ determines the curvature of the isoquant. High $\sigma$ means the firm can easily adjust input ratios when relative prices change.

### Cost & Profit Functions {#eq-cost-profit}
**Equation:**
- $c(w,q)$: HD(1), concave in $w$, $\partial c/\partial w_k=z_k$ (Shephard's Lemma for production)
- $\pi(p)$: HD(1), convex in $p$, Hotelling: $\partial\pi/\partial p_k=y_k$
**Variables:** $c(w,q)$ = cost function (min cost to produce $q$ at factor prices $w$); $\pi(p)$ = profit function (max profit at output prices $p$); $z_k$ = conditional factor demand; $y_k$ = output supply
**Intuition:** The cost function is the production analogue of the expenditure function. It gives minimum cost to produce a given output. It is HD(1) in factor prices, concave reflecting diminishing returns. Shephard's Lemma recovers factor demands. The profit function is HD(1) and convex in output prices. Hotelling's Lemma recovers output supply. Concavity of $c(\cdot)$ implies factor demand slopes downward; convexity of $\pi(\cdot)$ implies supply slopes upward.
**Exam tip:** For any production function, derive $c(w,q)$ and apply Shephard's Lemma to get conditional factor demands $z_k = \partial c/\partial w_k$.

---

## 7. Welfare Measurement

### CV, EV, CS {#eq-welfare-measures}
**Equation:**
- $CV = e(p^1,u^1) - e(p^1,u^0) = w - e(p^1,u^0)$ (new prices, old utility)
- $EV = e(p^0,u^1) - e(p^0,u^0) = e(p^0,u^1) - w$ (old prices, new utility)
- $CS = \int_{p^0}^{p^1} x(p,w)\, dp$ (area under Marshallian demand)
**Variables:** $CV$ = compensating variation; $EV$ = equivalent variation; $CS$ = consumer surplus; $e(p,u)$ = expenditure function; $p^0$ = initial prices; $p^1$ = new prices; $w$ = income/wealth
**Intuition:** CV asks: "How much compensation is needed after a price change to keep the consumer at their original utility?" (Uses new prices.) EV asks: "How much would the consumer pay to avoid the price change?" (Uses old prices.) Both are exact welfare measures using the expenditure function. CS approximates using the area under Marshallian demand. For a price DECREASE of a normal good: $EV > CS > CV$. For a price INCREASE: $CV > CS > EV$. With quasilinear utility (no income effects), all three are equal.
**Exam tip:** CV and EV are theoretically correct (based on Hicksian demand). CS is an approximation (Marshallian) but easily observable. Use CV/EV for exam answers; note the ordering to show depth.

### Welfare Ordering {#eq-ordering}
**Equation:** $P\downarrow$ normal: $EV>CS>CV$; $P\uparrow$: $CV>CS>EV$
**Variables:** $P\downarrow$ = price decrease; $P\uparrow$ = price increase; normal = normal good (positive income elasticity)
**Intuition:** The ordering reflects how income effects interact with substitution effects. For a price cut of a normal good, the consumer is better off (new utility > old utility). EV uses old prices (larger compensation), CV uses new prices (smaller compensation). The ordering reverses for price increases. This is a key result in applied welfare economics.
**Exam tip:** Memorize the ordering arrows. Draw the demand diagram showing Marshallian vs Hicksian demands to illustrate why the ordering holds.

---

## 8. Social Welfare & Pareto

### GUPF & Three Pareto Conditions {#eq-social-welfare}
**Equation:**
- GUPF = envelope of all UPFs; point of bliss = GUPF tangent to SWF
- (i) $MRS^A = MRS^B$ (exchange efficiency)
- (ii) $MRTS^X = MRTS^Y$ (production efficiency)
- (iii) $MRPT = MRS$ (product mix efficiency)
**Variables:** $GUPF$ = grand utility possibility frontier; $UPF$ = utility possibility frontier; $SWF$ = social welfare function; $MRS$ = marginal rate of substitution; $MRTS$ = marginal rate of technical substitution; $MRPT$ = marginal rate of product transformation
**Intuition:** The GUPF is the outer envelope of all UPFs. It shows the maximum utility combinations society can achieve at any distribution. The three Pareto conditions are necessary for any Pareto optimum: (i) no mutually beneficial trades remain (consumption efficient), (ii) no reallocation of inputs can increase total output (production efficient), (iii) the economy produces the right mix of goods. The rate at which production can transform one good into another equals the rate at which consumers trade them. The social optimum (bliss point) is where the GUPF is tangent to the SWF, adding distributional justice.
**Exam tip:** Condition (iii) links consumption and production sides. It is the top-level efficiency condition. All three conditions together are necessary AND sufficient for Pareto optimality.

### Welfare Theorems {#eq-welfare-theorems}
**Equation:** FWT: CE $\Rightarrow$ PO (needs LNS, no externalities); SWT: PO $\Rightarrow$ CE with transfers (needs convexity)
**Variables:** $CE$ = competitive equilibrium; $PO$ = Pareto optimal; $LNS$ = local nonsatiation; $SWT$ = second welfare theorem
**Intuition:** The First Welfare Theorem formalizes Adam Smith's invisible hand. Any competitive equilibrium (with complete markets, no externalities, LNS preferences) is Pareto efficient. The Second Welfare Theorem says any Pareto efficient allocation can be achieved as a competitive equilibrium with appropriate lump-sum transfers. This separates efficiency from equity.
**Exam tip:** FWT fails with externalities, public goods, market power, or incomplete markets. SWT requires convexity (fails with increasing returns to scale / natural monopoly).

### Kaldor-Hicks & Scitovsky {#eq-kaldor-hicks}
**Equation:** Gainers can potentially compensate losers (KH); Scitovsky: add reversal test
**Variables:** Not a mathematical equation. A compensation criterion.
**Intuition:** Kaldor-Hicks says a change is efficient if the gainers could (hypothetically) compensate the losers and still be better off. Actual compensation is not required. This is the basis for cost-benefit analysis. The Scitovsky reversal test checks that the losers cannot bribe the gainers to oppose the change, avoiding the "Kaldor-Hicks paradox" where both a change and its reversal pass the test.
**Exam tip:** Kaldor-Hicks is used in real-world policy evaluation (CBA). Pareto optimality is too strict for most policy changes. MH (Scitovsky double test) is the gold standard.

---

## 9. General Equilibrium

### Excess Demand & Walras' Law {#eq-excess-demand}
**Equation:** $E(P) = QD - QS$; Walras' Law: $\sum P_i Z_i(P) = 0$
**Variables:** $E(P)$ = aggregate excess demand; $QD$ = quantity demanded; $QS$ = quantity supplied; $P_i$ = price of good $i$; $Z_i(P)$ = excess demand for good $i$
**Intuition:** Excess demand is net demand (positive) or net supply (negative) at a given price. Walras' Law states that the total value of excess demand summed across ALL markets is identically zero. This holds because each agent's budget constraint binds. If $n-1$ markets clear (excess demand = 0), the $n$th market must also clear. This allows us to drop one market when solving general equilibrium.
**Exam tip:** Use Walras' Law to reduce the number of equations by one. Always check that your solution satisfies the remaining market. If it does, all markets clear.

### Existence, Stability, Numeraire {#eq-ge-properties}
**Equation:**
- Existence via IVT: $E(0)>0$, $E(\infty)<0$, continuous $\Rightarrow \exists P^*: E(P^*)=0$
- Stability: $dE/dP < 0$ stable; $>0$ unstable (tâtonnement)
- Numeraire: $n$ goods, $n-1$ independent eqns; set $P_1=1$
**Variables:** $E(P)$ = excess demand; $P$ = price; $P^*$ = equilibrium price; tâtonnement = Walrasian price adjustment process
**Intuition:** Existence relies on the Intermediate Value Theorem. If excess demand is positive at price zero and negative as price goes to infinity, there must be some price where it crosses zero (equilibrium). Stability under tâtonnement requires excess demand to slope downward at equilibrium. If price is above equilibrium, excess demand is negative and price falls toward it. The numeraire pins down absolute prices because only relative prices matter in GE. We can set one price to 1 and solve for the rest.
**Exam tip:** Draw the four existence/stability cases: (1) unique stable, (2) unique unstable, (3) multiple equilibria alternating stable/unstable, (4) no equilibrium. For numeraire: pick the good that makes algebra simplest.

### Edgeworth Box {#eq-edgeworth}
**Equation:** Contract curve: $MRS^A = MRS^B$ (exchange); $MRTS^X = MRTS^Y$ (production box)
**Variables:** $MRS^A, MRS^B$ = marginal rates of substitution for agents A and B; $MRTS^X, MRTS^Y$ = marginal rates of technical substitution for firms X and Y
**Intuition:** The Edgeworth box visualizes allocations of two goods between two agents (or two inputs between two firms). The contract curve connects all Pareto optimal allocations where indifference curves (or isoquants) are tangent. No reallocation can make one agent better off without harming the other. The competitive equilibrium lies on the contract curve at the point where the common slope equals the price ratio.
**Exam tip:** The competitive equilibrium in the Edgeworth box is found by equating MRS ratios to the price ratio AND satisfying both agents' budget constraints. The initial endowment determines which point on the contract curve is reached.

---

## 10. Game Theory & Externalities

### Nash & Backward Induction {#eq-game-theory}
**Equation:**
- Nash: $s_i^* \in \arg\max_{s_i} u_i(s_i, s_{-i}^*)$
- Backward induction: roll back from terminal node; SPNE eliminates non-credible threats
**Variables:** $s_i^*$ = optimal strategy for player $i$; $s_{-i}^*$ = optimal strategies of all other players; $u_i$ = player $i$'s payoff; SPNE = subgame perfect Nash equilibrium
**Intuition:** Nash equilibrium is a profile where no player can improve their payoff by unilaterally changing strategy. Backward induction solves sequential games by reasoning from the last move backward. At each decision node, the player chooses the action that maximizes their payoff given optimal play thereafter. SPNE refines Nash to require credibility at every subgame, eliminating empty threats in sequential games.
**Exam tip:** Find Nash in simultaneous games by underlining best responses in each cell. For sequential games, always use backward induction (rollback), not Nash.

### Folk Theorem & Spence {#eq-folk-spence}
**Equation:**
- Folk Theorem: $\delta \ge \delta^* = \frac{\pi_{dev} - \pi_{coop}}{\pi_{dev} - \pi_{pun}}$ sustains cooperation
- Grim trigger in PD: $\delta \ge 2/3$
- Spence separating: $w_H - w_L \in [c_H, c_L]$; single-crossing $c_L > c_H$
**Variables:** $\delta$ = discount factor; $\pi_{dev}$ = deviation profit; $\pi_{coop}$ = cooperative profit; $\pi_{pun}$ = punishment profit; $w_H, w_L$ = wages for high/low type; $c_H, c_L$ = education cost for high/low type
**Intuition:** The Folk Theorem characterizes conditions for cooperation in infinitely repeated games. If players are patient enough (high $\delta$), any feasible payoff above the minimax can be sustained. The critical $\delta$ compares the one-time gain from cheating to the future loss from punishment. In Spence's signaling model, the single-crossing property ($c_L > c_H$) ensures that high-productivity workers find education less costly. This separates types in equilibrium. Separating requires the wage premium to lie between the two cost levels.
**Exam tip:** Derive the critical $\delta$ by setting: cooperate payoff $\ge$ deviate payoff. For Spence, the single-crossing property is the key condition enabling separation.

### Pigou, Coase, Tariff DWL {#eq-extern-trade}
**Equation:**
- Pigouvian tax = marginal external damage at social optimum
- Coase: zero TC + property rights $\Rightarrow$ bargaining achieves efficiency
- Tariff DWL: $DWL = \frac12 \times t \times \Delta Q$; VER worse (quota rent to foreigners)
**Variables:** $t$ = tariff per unit; $\Delta Q$ = change in quantity imported; $TC$ = transaction costs; $DWL$ = deadweight loss; $VER$ = voluntary export restraint
**Intuition:** Pigouvian taxes correct externalities by charging the marginal external damage. This aligns private and social costs. The Coase Theorem shows that with well-defined property rights and zero transaction costs, bargaining between affected parties achieves the efficient outcome regardless of who holds the rights. A tariff creates a DWL triangle (the Harberger triangle) from lost consumption (consumers pay more) and lost production (inefficient domestic output). VER is economically worse because the quota rent (the tariff equivalent) goes to foreign exporters rather than the domestic government.
**Exam tip:** Compare tariff vs VER: both create same DWL, but VER adds foreign rent transfer. Always draw the DWL triangle diagram for tariff questions.
