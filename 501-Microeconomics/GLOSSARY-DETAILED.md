# 501 Micro — Detailed Glossary

> This glossary provides deeper context for every term in the main [GLOSSARY.md](./GLOSSARY.md). Each entry explains the core concept in plain English, describes its role in the course, and gives practical exam advice. Cross-references point to the [Equation Explainer](./EQUATION-EXPLAINER.md) where deeper equation-level detail lives.

---

## 1. Abbreviations & Acronyms

<a id="detail-term-ac"></a>
### **AC — Average Cost**
**What it is:** Total cost divided by output: $AC(Q) = TC(Q)/Q$. Under perfect competition, the AC curve is typically U-shaped: it falls as fixed costs are spread over more units, then rises as diminishing returns set in.
**Why it matters:** AC determines long-run viability. In a competitive market, price settles at the minimum of the AC curve in the long run (zero profit condition). Firms producing below minimum AC earn positive profits, attracting entry; above it, they exit.
**Exam tip:** Do not confuse AC with MC. The relationship between MC and AC is key: MC crosses AC at AC's minimum. When MC < AC, AC is falling; when MC > AC, AC is rising.

<a id="detail-term-avc"></a>
### **AVC — Average Variable Cost**
**What it is:** Variable cost per unit: $AVC(Q) = TVC(Q)/Q$. Unlike AC, it excludes fixed costs, so it captures only costs that vary with output.
**Why it matters:** The shutdown condition in the short run is $P \ge \min AVC$. If price falls below minimum AVC, the firm loses more by operating than by shutting down, since revenue does not cover even variable costs. The supply curve is the MC curve above min AVC.
**Exam tip:** Questions often ask: "At what price does the firm shut down?" The answer is the minimum point of the AVC curve. Draw the AVC, AC, and MC curves to show the relationship clearly.

<a id="detail-term-bh"></a>
### **BH — Bordered Hessian**
**What it is:** A determinant test for quasiconcavity of a function. For two variables, the bordered Hessian determinant is $| \overline{H} | = 2u_xu_yu_{xy} - u_x^2u_{yy} - u_y^2u_{xx} \ge 0$. For the SOC of constrained optimization, the bordered Hessian of the Lagrangian must alternate in sign to confirm a maximum.
**Why it matters:** The BH is the standard tool for verifying second-order conditions in every constrained optimization problem (UMP, EMP, PMP). It tells you whether a critical point is a maximum, minimum, or saddle. Without it you only have necessary conditions.
**Exam tip:** For $n$ variables with one constraint, the leading principal minors of the bordered Hessian must alternate: $| \overline{H}_2 | \ge 0$, $| \overline{H}_3 | \le 0$, $| \overline{H}_4 | \ge 0$, etc. Memorize the $2\times2$ formula for quick computation.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-quasiconcavity), [§8](#detail-term-bordered-hessian)

<a id="detail-term-cd"></a>
### **CD — Cobb-Douglas**
**What it is:** The most commonly used utility (or production) function: $u = x_1^\alpha x_2^\beta$ or $q = K^\alpha L^\beta$. It has constant expenditure shares: the consumer spends a fixed fraction $\alpha/(\alpha+\beta)$ of income on good 1, regardless of prices. It generates closed-form solutions for all four core problems (UMP, EMP, PMP, CMP).
**Why it matters:** CD is the workhorse of microeconomic modeling. Its tractability makes it the default first choice for exams. It is homothetic (MRS constant on rays), has elasticity of substitution $\sigma = 1$, and its demand functions are linear in income.
**Exam tip:** CD demand is $x_1 = \alpha w/(\alpha+\beta)p_1$, $x_2 = \beta w/(\alpha+\beta)p_2$. For production, cost function is $c(w,q) = q \cdot (w/\alpha)^\alpha (r/\beta)^\beta$ times a constant. These are worth memorizing stone cold.

<a id="detail-term-ce"></a>
### **CE — Competitive (Walrasian) Equilibrium**
**What it is:** A price vector $p^*$ such that all markets clear simultaneously: excess demand $z(p^*) = 0$ for every good. Each agent maximizes utility (or profit) taking prices as given, and the resulting demands and supplies balance.
**Why it matters:** CE is the central equilibrium concept in general equilibrium theory. It formalizes Adam Smith's invisible hand: decentralized price-taking behavior leads to coordinated market clearing across all markets. The FWT and SWT are statements about the efficiency properties of CE.
**Exam tip:** Solving for CE requires (i) finding individual demands/supplies, (ii) aggregating to get excess demands, (iii) solving $z(p^*) = 0$. Use Walras' Law to reduce the system by one equation and set a numeraire price.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-ge-properties)

<a id="detail-term-ces"></a>
### **CES — Constant Elasticity of Substitution**
**What it is:** A general functional form: $u(x) = (\sum_i x_i^\rho)^{1/\rho}$ (utility) or $q = (aK^\rho + bL^\rho)^{1/\rho}$ (production). The elasticity of substitution is $\sigma = 1/(1-\rho)$. Special cases include Cobb-Douglas ($\rho \to 0$, $\sigma = 1$), Leontief ($\rho \to -\infty$, $\sigma = 0$), and perfect substitutes ($\rho \to 1$, $\sigma = \infty$).
**Why it matters:** CES nests all the standard functional forms as special cases. It lets you test how results depend on the elasticity of substitution. In production theory, $\sigma$ determines how easily inputs substitute when relative prices change.
**Exam tip:** The parameter $\rho$ determines curvature. $\rho < 1$ is required for concavity/quasiconcavity. The CD limit ($\rho \to 0$) is the most common exam case. Know how to derive $\sigma$ from the definition $\sigma = d\ln(K/L)/d\ln(MRTS)$.

<a id="detail-term-cmp"></a>
### **CMP — Cost Minimization Problem**
**What it is:** The production dual to the PMP: choose inputs $z$ to minimize cost $w \cdot z$ subject to producing at least $q$ units, $f(z) \ge q$. The solution gives conditional factor demands $z(w,q)$ and the cost function $c(w,q)$.
**Why it matters:** CMP is the foundation of production theory. It parallels the EMP in consumer theory. The cost function inherits HD(1) and concavity in factor prices. Shephard's Lemma for production recovers conditional factor demands as $z_k = \partial c/\partial w_k$.
**Exam tip:** For a Cobb-Douglas production function $q = K^\alpha L^\beta$, the cost function is $c(w,r,q) = q \cdot (\alpha+\beta) \cdot (w/\alpha)^{\alpha/(\alpha+\beta)} (r/\beta)^{\beta/(\alpha+\beta)}$ for $\alpha+\beta=1$.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-cost-profit)

<a id="detail-term-crs"></a>
<a id="detail-term-crts"></a>
### **CRS / CRTS — Constant Returns to Scale**
**What it is:** A production technology where scaling all inputs by $t > 0$ scales output by exactly $t$: $f(tx) = t f(x)$. Doubling inputs exactly doubles output. Equivalently, the production function is homogeneous of degree 1.
**Why it matters:** CRS implies $AC = MC$ (constant), and by Euler's theorem, total output equals the sum of factor payments: $f = f_K K + f_L L$ (product exhaustion). In competitive equilibrium with CRS, firms earn zero profits and the number of firms is indeterminate.
**Exam tip:** CRS is the dividing line between DRS and IRS. Use Euler's theorem to allocate output to factors. CRS + perfect competition = zero profit.

<a id="detail-term-cs"></a>
### **CS — Consumer Surplus**
**What it is:** The area under the Marshallian (uncompensated) demand curve between two prices: $CS = \int_{p^0}^{p^1} x(p,w)\,dp$. It measures the net benefit consumers receive from trading at the market price, over and above what they pay.
**Why it matters:** CS is the most commonly used welfare measure in applied work because it is directly observable from market demand data. However, it is only an exact welfare measure when there are no income effects (quasilinear utility). For normal goods, CS lies between CV and EV.
**Exam tip:** CS is an approximation for welfare changes unless utility is quasilinear. In exams, compute CV and EV for exact measures and report CS for comparison. The ordering for a price decrease of a normal good is $EV > CS > CV$.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-welfare-measures)

<a id="detail-term-cv"></a>
### **CV — Compensating Variation**
**What it is:** The amount of money transferred to (or from) a consumer after a price change to restore their original utility level $u^0$. Formally: $CV = w - e(p^1, u^0)$. It uses new prices and old utility.
**Why it matters:** CV is an exact welfare measure based on Hicksian demand (the expenditure function). It answers: "How much compensation does the consumer need after the price change to be as well off as before?" For a price increase, CV is the minimum compensation the consumer must receive.
**Exam tip:** CV uses the Hicksian demand at the old utility level. For a price decrease of a normal good, CV is the smallest of the three welfare measures ($EV > CS > CV$). Draw both Hicksian demands to illustrate.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-welfare-measures)

<a id="detail-term-drs"></a>
<a id="detail-term-drts"></a>
### **DRS / DRTS — Decreasing Returns to Scale**
**What it is:** A technology where scaling all inputs by $t > 0$ produces less than $t$ times the output: $f(tx) < t f(x)$. Doubling inputs less than doubles output. The production function is homogeneous of degree less than 1.
**Why it matters:** DRS implies rising AC ($AC \uparrow$ with $Q$). It can arise from fixed factors or managerial constraints. In competitive markets, DRS firms can coexist at different scales because each operates in the decreasing portion of its AC curve.
**Exam tip:** DRS is often modeled as $f(K,L) = K^\alpha L^\beta$ with $\alpha+\beta < 1$. Check the sum of output elasticities to determine RTS.

<a id="detail-term-dwl"></a>
### **DWL — Deadweight Loss**
**What it is:** The net loss of total surplus (consumer + producer surplus) caused by a market distortion such as a tax, tariff, monopoly, or externality. For a per-unit tax $t$, $DWL = \frac12 \times t \times \Delta Q$ (the Harberger triangle).
**Why it matters:** DWL measures the efficiency cost of government interventions and market failures. It is the key metric in welfare analysis of policy. Understanding DWL helps compare the relative costs of tariffs vs. quotas, taxes vs. subsidies, monopoly vs. competition.
**Exam tip:** Always draw the DWL triangle in supply-demand diagrams. The formula $\frac12 \times t \times \Delta Q$ works for linear demand and supply. For a tariff, DWL has two triangles (consumption distortion + production distortion).
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-extern-trade)

<a id="detail-term-emp"></a>
### **EMP — Expenditure Minimization Problem**
**What it is:** The dual of the UMP. Instead of maximizing utility given a budget, minimize expenditure $p \cdot x$ subject to achieving at least utility $\bar u$. The solution gives Hicksian (compensated) demand $h(p,u)$ and the expenditure function $e(p,u) = p \cdot h(p,u)$.
**Why it matters:** EMP is the gateway to Hicksian demand, which isolates substitution effects and is the foundation of exact welfare measurement (CV, EV). The expenditure function is HD(1) in prices and concave. Shephard's Lemma recovers Hicksian demand from $e(p,u)$.
**Exam tip:** For CD utility, $e(p,u) = u \cdot (p_1/\alpha)^\alpha (p_2/(1-\alpha))^{1-\alpha}$. Use Shephard's Lemma to get $h_1 = \partial e/\partial p_1$. Duality: $e(p, v(p,w)) = w$ and $v(p, e(p,u)) = u$.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-emp-shephard)

<a id="detail-term-eos"></a>
### **EoS — Elasticity of Substitution**
**What it is:** A measure of how easily one input (or good) substitutes for another: $\sigma = \frac{d\ln(K/L)}{d\ln(MRTS)}$. It tells you the percentage change in the input ratio per 1% change in the slope of the isoquant (MRTS).
**Why it matters:** $\sigma$ determines the curvature of isoquants (or indifference curves). It governs the response of factor ratios to changes in relative prices. CES production nests all cases: CD ($\sigma=1$), Leontief ($\sigma=0$), perfect substitutes ($\sigma = \infty$).
**Exam tip:** Compute $\sigma$ from the production function using logs. For CD, $\sigma = 1$ always. Low $\sigma$ means firms cannot easily substitute inputs; high $\sigma$ means they can. This has implications for income distribution when relative prices change.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-mrts-eos)

<a id="detail-term-ev"></a>
### **EV — Equivalent Variation**
**What it is:** The amount of money that would have to be given to (or taken from) a consumer before a price change to achieve the utility level they would reach after the change. Formally: $EV = e(p^0, u^1) - w$. It uses old prices and new utility.
**Why it matters:** EV asks: "How much would the consumer be willing to pay to avoid the price change (or need to be compensated to forgo it)?" It is an exact welfare measure using Hicksian demand at the new utility level. For a price decrease, EV is the largest of the three welfare measures.
**Exam tip:** EV uses the Hicksian demand at the new utility level. For a price decrease of a normal good, $EV > CS > CV$. Memorize the ordering and why it occurs (income effects).
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-welfare-measures)

<a id="detail-term-foc"></a>
### **FOC — First-Order Condition**
**What it is:** The necessary condition for an optimum in a constrained optimization problem. For the UMP, the FOCs from the Lagrangian are $u_{x_k} = \lambda p_k$ (marginal utility proportional to price) and $p\cdot x = w$ (budget binds). Equivalently, $MRS_{12} = p_1/p_2$.
**Why it matters:** Every microeconomic problem starts with FOCs. They give the equations that characterize the optimal choice. Without FOCs you cannot solve for demand, supply, factor demands, or any endogenous variable.
**Exam tip:** Always start by writing the Lagrangian and the FOCs. For the UMP, take the ratio of two FOCs to eliminate $\lambda$ and get the tangency condition. Then combine with the budget constraint to solve. Do not forget the SOC check.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-ump)

<a id="detail-term-fwt"></a>
### **FWT — First Welfare Theorem**
**What it is:** Every competitive equilibrium (CE) is Pareto optimal (PO), provided local nonsatiation holds and there are no externalities. Under LNS, each agent exhausts their budget, and the market-clearing allocation cannot be improved upon without harming someone.
**Why it matters:** The FWT is the formal statement of Adam Smith's invisible hand: decentralized, self-interested market behavior leads to an efficient allocation. It justifies the efficiency of competitive markets and is the starting point for welfare economics.
**Exam tip:** The FWT fails when there are externalities, public goods, market power, or incomplete markets. Most exam questions ask you to identify which assumption is violated and why the resulting CE is not PO.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-welfare-theorems)

<a id="detail-term-gupf"></a>
### **GUPF — Grand Utility Possibility Frontier**
**What it is:** The envelope of all utility possibility frontiers (UPFs) across all possible product-mixes in the economy. It shows the maximum utility combinations society can achieve when both consumption and production are fully efficient.
**Why it matters:** The GUPF represents the outer bound of social welfare possibilities. The tangency between the GUPF and the social welfare function (SWF) determines the "point of bliss" — the social optimum that balances efficiency and distributional preferences.
**Exam tip:** Distinguish UPF (one product-mix) from GUPF (all product-mixes). The three Pareto conditions (exchange, production, product-mix) all contribute to reaching the GUPF. The SWF picks a point on it.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-social-welfare)

<a id="detail-term-hd-0"></a>
<a id="detail-term-hd-1"></a>
### **HD(0) / HD(1) — Homogeneous of Degree 0 / 1**
**What it is:** A function $f$ is homogeneous of degree $k$ if $f(tx) = t^k f(x)$ for all $t > 0$. HD(0) means no money illusion: doubling all prices and wealth leaves demand unchanged. HD(1) means proportional scaling: doubling all input prices doubles cost.
**Why it matters:** Homogeneity properties provide testable restrictions and are constantly tested. Walrasian demand $x(p,w)$, indirect utility $v(p,w)$, and Hicksian demand $h(p,u)$ are HD(0). Expenditure $e(p,u)$, cost $c(w,q)$, and profit $\pi(p)$ are HD(1).
**Exam tip:** Use Euler's theorem: for HD($r$) $f$, $\sum_i \partial f/\partial x_i \cdot x_i = r \cdot f(x)$. Check homogeneity by scaling arguments: if $x(\alpha p, \alpha w) = x(p,w)$, it is HD(0). Know the homogeneity properties of every function.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-homogeneity)

<a id="detail-term-ic"></a>
### **IC — Indifference Curve**
**What it is:** The set of all consumption bundles that yield the same utility level: $IC = \{x \in X : u(x) = \bar u\}$. The slope of the IC at any point is the negative of the MRS: $-MU_x/MU_y$.
**Why it matters:** ICs are the basic tool for visualizing preferences. Their shape encodes all preference information: convex ICs (diminishing MRS) mean the consumer prefers diversification; linear ICs mean perfect substitutes; right-angle ICs mean perfect complements.
**Exam tip:** Properties of ICs under different assumptions: (i) LNS implies no thick ICs; (ii) SM implies strictly downward-sloping ICs; (iii) convex preferences imply convex ICs (diminishing MRS). Always draw ICs to illustrate substitution vs. income effects.

<a id="detail-term-ie"></a>
### **IE — Income Effect**
**What it is:** The change in demand for a good due to the change in purchasing power caused by a price change. In the Slutsky equation: $IE = -x_j \cdot \partial x_k/\partial w$. It captures how much demand changes because the consumer feels richer or poorer after the price change.
**Why it matters:** The income effect determines whether a good is normal ($\partial x/\partial w > 0$, IE reinforces SE) or inferior ($\partial x/\partial w < 0$, IE opposes SE). A Giffen good requires the IE to be positive and larger than the SE in absolute value.
**Exam tip:** The sign of the IE depends on whether the good is normal or inferior. For a price decrease: normal goods have positive IE (buy more), inferior goods have negative IE (buy less). The Slutsky equation separates total effect into SE + IE.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-slutsky)

<a id="detail-term-irs"></a>
<a id="detail-term-irts"></a>
### **IRS / IRTS — Increasing Returns to Scale**
**What it is:** A technology where scaling all inputs by $t > 0$ produces more than $t$ times the output: $f(tx) > t f(x)$. Doubling inputs more than doubles output. The production function is homogeneous of degree greater than 1.
**Why it matters:** IRS implies falling AC ($AC \downarrow$ with $Q$), known as economies of scale. It leads to natural monopoly because a single firm can produce at lower cost than many small firms. IRS violates the convexity assumption needed for the SWT.
**Exam tip:** IRS can come from fixed costs, specialization, or indivisibilities. A Cobb-Douglas production function $K^\alpha L^\beta$ has IRS if $\alpha + \beta > 1$. In such cases, perfect competition breaks down.

<a id="detail-term-ivt"></a>
### **IVT — Intermediate Value Theorem**
**What it is:** A theorem from real analysis: if $f$ is continuous on $[a,b]$ and $f(a) < 0 < f(b)$, then there exists $c \in (a,b)$ such that $f(c) = 0$. In economics, it is used to prove the existence of a general equilibrium.
**Why it matters:** IVT is the core mathematical tool for proving existence of equilibrium prices. If excess demand $E(p)$ is continuous, positive at price zero, and negative as price goes to infinity, then there must be a price where $E(p) = 0$.
**Exam tip:** When asked about GE existence, the argument is: (1) $E(0) > 0$ (excess demand at zero price), (2) $E(\infty) < 0$ (excess supply at infinite price), (3) continuity of $E(p)$, (4) by IVT $\exists p^*$ with $E(p^*) = 0$.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-ge-properties), [§8](#detail-term-intermediate-value-theorem)

<a id="detail-term-k"></a>
### **K — Capital**
**What it is:** A produced factor of production — machines, buildings, tools, infrastructure. Capital earns a rental rate $r$ as its factor payment. It is accumulated through investment and depreciates over time.
**Why it matters:** Capital is one of the two primary factors in the standard two-factor production model ($K$ and $L$). The capital-labour ratio $K/L$ determines the MRTS and factor intensities in production. Capital allocation across sectors is central to general equilibrium and trade models.
**Exam tip:** Distinguish capital as a stock (machines) from investment as a flow (new machines per year). In production functions, capital is a flow of services, not the stock itself. The rental rate $r$ is the price of capital services.

<a id="detail-term-l"></a>
### **L — Labour**
**What it is:** The human factor of production — workers' time, effort, and skill. Labour earns wage $w$ as its factor payment. It is supplied by households and demanded by firms.
**Why it matters:** Labour is the other primary factor in the standard two-factor model. Labour markets determine employment and wages. In general equilibrium, labour is assumed to be mobile across sectors (but not across countries in trade models).
**Exam tip:** Labour supply comes from households' utility maximization (labour-leisure choice). Labour demand comes from firms' profit maximization (value of marginal product = wage). In the 2x2x2 GE model, labour is mobile between sectors.

<a id="detail-term-lcs"></a>
### **LCS — Lower Contour Set**
**What it is:** The set of all bundles that are no better than a given utility level: $LCS = \{x \in X : u(x) \le \bar u\}$. It contains everything that is "no better" or "worse" than the reference utility.
**Why it matters:** Convexity of preferences is defined via upper contour sets (UCS), but LCS is the mirror image. A function is quasiconvex if its LCS is convex. Together with UCS, these sets characterize the curvature properties of utility functions.
**Exam tip:** LCS is the set of bundles below or on the indifference curve. Know the duality: UCS convex $\iff$ utility quasiconcave $\iff$ convex preferences; LCS convex $\iff$ utility quasiconvex.

<a id="detail-term-les"></a>
### **LES — Linear Expenditure System (Stone-Geary)**
**What it is:** A utility function of the form $u = \prod(x_i - \gamma_i)^{\alpha_i}$, where $\gamma_i$ is subsistence consumption of good $i$ (the minimum amount that must be consumed). It is a generalization of Cobb-Douglas that adds a subsistence floor.
**Why it matters:** LES generates linear Engel curves (expenditure on each good is a linear function of total expenditure), which makes it empirically useful. It introduces income elasticities that are not forced to be 1: necessities have low income elasticity, luxuries have high income elasticity.
**Exam tip:** The demand function is $p_i x_i = p_i \gamma_i + \alpha_i (w - \sum p_j \gamma_j)$. The term $(w - \sum p_j \gamma_j)$ is "supernumerary income" — income left after subsistence. The $\alpha_i$ are marginal budget shares.

<a id="detail-term-lns"></a>
### **LNS — Local Nonsatiation**
**What it is:** For any bundle $x$ and any distance $\varepsilon > 0$, there exists a bundle $y$ within $\varepsilon$ of $x$ that is strictly preferred to $x$. There is no "thick" indifference curve and no local bliss point.
**Why it matters:** LNS is the minimal desirability assumption needed for the First Welfare Theorem and for Walras' Law (consumers spend all their income). It is weaker than monotonicity and strong monotonicity. It allows some goods to be bads, as long as at least one nearby bundle is better.
**Exam tip:** The hierarchy is SM $\Rightarrow$ M $\Rightarrow$ LNS (all strict). LNS is sufficient for Walras' Law but does not guarantee downward-sloping ICs. Do not assume monotonicity when only LNS is given.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-monotonicity)

<a id="detail-term-lr"></a>
### **LR — Long Run**
**What it is:** The time horizon in which all factors of production are variable. There are no fixed costs, and firms can enter or exit the industry. All costs are variable, so the distinction between fixed and variable costs disappears.
**Why it matters:** In the long run, competitive equilibrium has zero profit (freedom of entry drives profit to zero). The LR supply curve can be flat (CRS), upward-sloping (DRS/limited factors), or downward-sloping (IRS). LR analysis determines industry structure.
**Exam tip:** LR equilibrium in perfect competition: $P = MC = AC$. Firms produce at the minimum of their LRAC curve. Entry/exit occurs until zero profit. Compare with SR where at least one factor is fixed and firms can only shut down, not exit.

<a id="detail-term-m"></a>
### **M — Monotonicity**
**What it is:** If every good in bundle $x$ is strictly greater than the corresponding good in bundle $y$, then $x$ is strictly preferred to $y$: $x_k > y_k \ \forall k \Rightarrow x \succ y$. More of every good is strictly better.
**Why it matters:** Monotonicity (also called strict monotonicity in all goods) ensures downward-sloping indifference curves. It is a stronger assumption than LNS but weaker than SM. It rules out situations where some goods are bads.
**Exam tip:** M is often used in textbook models but is stronger than needed for most results. If M holds, you can assume all goods are desirable and ICs are strictly downward-sloping. The hierarchy: SM $\Rightarrow$ M $\Rightarrow$ LNS.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-monotonicity)

<a id="detail-term-mc"></a>
### **MC — Marginal Cost**
**What it is:** The cost of producing one additional unit of output: $MC(Q) = dTC/dQ$. Under perfect competition, the firm's supply curve is the MC curve above the minimum of AVC.
**Why it matters:** MC is the central concept in firm decision-making. The profit-maximizing rule is $P = MC$ for a price-taking firm. The relationship between MC and AC determines scale economies. The Lerner Index expresses market power as $(P - MC)/P$.
**Exam tip:** To find supply: set $P = MC$ and solve for $Q$, but check that $P \ge \min AVC$ (shutdown condition). For a monopoly, set $MR = MC$ instead of $P = MC$. MC is the derivative of TC (or VC, since FC drops out).
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-cost-profit)

<a id="detail-term-med"></a>
### **MED — Marginal External Damage**
**What it is:** The additional harm imposed on society from one more unit of a negative externality (e.g., pollution). At the social optimum, the optimal Pigouvian tax equals MED evaluated at the efficient output level.
**Why it matters:** MED is the key concept for correcting negative externalities. The market overproduces because firms only consider PMC, not SMC = PMC + MED. A Pigouvian tax equal to MED at $Q^*$ internalizes the externality and restores efficiency.
**Exam tip:** The optimal tax $t^* = MED(Q^*)$, where $Q^*$ is the social optimum where SMC = MB. Draw the PMC, SMC, and MB curves. The DWL from the externality is the triangle between $Q^*$ and $Q^{market}$ bounded by SMC and MB.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-extern-trade)

<a id="detail-term-meb"></a>
### **MEB — Marginal External Benefit**
**What it is:** The additional benefit to society from one more unit of a positive externality (e.g., education, vaccination). At the social optimum, the optimal Pigouvian subsidy equals MEB evaluated at the efficient output level.
**Why it matters:** MEB captures the spillover benefits that the market does not reward. Because private agents only consider their own benefit ($PMB$), they under-provide goods with positive externalities. A subsidy equal to MEB at $Q^*$ aligns private and social incentives.
**Exam tip:** For positive externalities, $SMB = PMB + MEB$. The optimal subsidy $s = MEB(Q^*)$. Draw the PMB, SMB, and MC curves. The DWL is the under-production triangle.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-extern-trade)

<a id="detail-term-mp"></a>
### **MP — Marginal Product**
**What it is:** The additional output from using one more unit of a single input, holding all other inputs constant: $MP_L = \partial f(K,L)/\partial L$, $MP_K = \partial f(K,L)/\partial K$.
**Why it matters:** MP determines the demand for inputs. A profit-maximizing firm hires until the value of marginal product equals the factor price ($VMP_L = P \cdot MP_L = w$). Diminishing MP (law of diminishing returns) is the standard assumption for short-run production.
**Exam tip:** For Cobb-Douglas $q = K^\alpha L^\beta$, $MP_L = \beta K^\alpha L^{\beta-1} = \beta q/L$. The marginal product declines as the input increases (holding other inputs fixed). MP is not the same as the marginal revenue product ($MRP = MR \cdot MP$).

<a id="detail-term-mrpt"></a>
### **MRPT — Marginal Rate of Product Transformation**
**What it is:** The rate at which the economy can transform one good into another by reallocating resources, i.e., the slope of the Production Possibility Curve (PPC): $MRPT = MC_x / MC_y$. It measures the opportunity cost of producing one more unit of $x$ in terms of $y$ forgone.
**Why it matters:** MRPT links the production side to the consumption side. The third Pareto condition (product-mix efficiency) requires $MRPT = MRS$. If $MRPT \neq MRS$, society could be made better off by producing a different mix of goods.
**Exam tip:** MRPT is not $MRTS$. MRTS is the input substitution rate (slope of isoquant), while MRPT is the output transformation rate (slope of PPC). The relationship is $MRPT = MRTS$ (but between goods, not inputs). Use $MC$ ratios to compute MRPT.

<a id="detail-term-mrs"></a>
### **MRS — Marginal Rate of Substitution**
**What it is:** The rate at which a consumer is willing to trade one good for another while maintaining the same utility level: $MRS_{xy} = MU_x / MU_y$. It is the absolute value of the slope of the indifference curve at a given point.
**Why it matters:** MRS is the fundamental behavioral margin for consumer choice. At an interior optimum, $MRS = p_x/p_y$ (tangency condition). Diminishing MRS (as $x$ increases relative to $y$, MRS falls) reflects the preference for diversity and is equivalent to convex preferences.
**Exam tip:** Diminishing MRS is tested via the derivative $dMRS/dx < 0$. This is equivalent to the utility function being quasiconcave. The rate of change of MRS determines curvature of ICs and the elasticity of substitution.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-quasiconcavity)

<a id="detail-term-mrts"></a>
### **MRTS — Marginal Rate of Technical Substitution**
**What it is:** The rate at which one input can be substituted for another while holding output constant: $MRTS_{LK} = MP_L / MP_K$. It is the absolute value of the slope of the isoquant. Cost minimization requires $MRTS = w/r$ (tangency between isoquant and isocost line).
**Why it matters:** MRTS determines the optimal input mix for a firm. It is the production analogue of MRS in consumption. The elasticity of substitution $\sigma$ measures how responsive the input ratio $K/L$ is to changes in MRTS.
**Exam tip:** For CD production, $MRTS = (\beta/\alpha) \cdot (K/L)$. For a given output, as $L$ increases relative to $K$, MRTS falls (diminishing MRTS). This is equivalent to the isoquant being convex.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-mrts-eos)

<a id="detail-term-mu"></a>
### **MU — Marginal Utility**
**What it is:** The additional utility from consuming one more unit of a good: $MU_k = \partial u(x)/\partial x_k$. The FOC of the UMP equates $MU_k = \lambda p_k$ (marginal utility proportional to price) for all goods consumed.
**Why it matters:** MU is the building block of the marginalist approach. The ratio $MU_k/p_k = \lambda$ (marginal utility of income) must be equalized across all goods for utility maximization. Diminishing MU is related to concavity of utility, but quasiconcavity (not concavity) is what matters for convex preferences.
**Exam tip:** MU is not directly observable (utility is ordinal), but the ratio of MUs (the MRS) is observable via the price ratio at the optimum. Do not assume diminishing MU = diminishing MRS (they are different properties).

<a id="detail-term-ne"></a>
### **NE — Nash Equilibrium**
**What it is:** A strategy profile where no player can improve their payoff by unilaterally deviating: $s_i^* \in \arg\max_{s_i} u_i(s_i, s_{-i}^*)$. Each player's strategy is a best response to the others' strategies.
**Why it matters:** NE is the central solution concept in game theory. It predicts the outcome of strategic interactions. It applies to simultaneous and sequential games, and refinements like SPNE and PBE handle dynamic and informational extensions.
**Exam tip:** Find NE by underlining best responses in each cell of the payoff matrix. Intersections of mutual best responses are NE. Check for mixed strategy NE when there is no pure-strategy NE. Always note whether there are multiple NE.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-game-theory)

<a id="detail-term-nsd"></a>
### **NSD — Negative Semidefinite**
**What it is:** A property of a matrix $S$ such that $v^\top S v \le 0$ for all vectors $v$. The Slutsky matrix $S(p,w) = D_p h(p,u)$ is NSD, which implies the compensated law of demand: own-price effects are non-positive ($\partial h_k/\partial p_k \le 0$).
**Why it matters:** NSD of the Slutsky matrix is the fundamental testable implication of utility maximization. It means that Hicksian demand slopes downward (a consumer never buys more of a good when its price rises, holding utility constant). It also implies the Slutsky matrix is symmetric.
**Exam tip:** NSD is a matrix property. For a $2\times2$ Slutsky matrix, check that $S_{11} \le 0$, $S_{22} \le 0$, and the determinant is non-negative. Violation of NSD means the demand system is not consistent with rational utility maximization.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-slutsky)

<a id="detail-term-pbe"></a>
### **PBE — Perfect Bayesian Equilibrium**
**What it is:** A refinement of NE for dynamic games of incomplete information. It requires: (i) strategies are optimal given beliefs, (ii) beliefs are derived from Bayes' rule wherever possible (on the equilibrium path), and (iii) off-path beliefs are specified consistently.
**Why it matters:** PBE is the standard solution concept for signaling games, screening models, and other asymmetric information settings. It captures how agents learn and update beliefs from observed actions. Spence's education signaling model uses PBE.
**Exam tip:** Find PBE by solving for separating and pooling equilibria separately. In a separating equilibrium, off-path beliefs must prevent deviation. In a pooling equilibrium, the off-path belief must sustain pooling. Use the Intuitive Criterion to refine multiple PBE.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-folk-spence)

<a id="detail-term-pd"></a>
### **PD — Prisoners' Dilemma**
**What it is:** A $2\times2$ game where the unique NE is (Defect, Defect), even though both players would be better off at (Cooperate, Cooperate). The payoff structure is $T > R > P > S$ and $T + S < 2R$, where $T$ = temptation, $R$ = reward, $P$ = punishment, $S$ = sucker.
**Why it matters:** The PD is the canonical model of the tension between individual rationality and collective welfare. It shows how self-interested behavior can lead to inefficient outcomes. It is used to model public goods provision, oligopoly collusion, arms races, and free-riding.
**Exam tip:** The PD is defined by the payoff ranking $T > R > P > S$ and $T + S < 2R$. Cooperation can emerge in the infinitely repeated PD if the discount factor $\delta$ is high enough (Folk Theorem). Draw the payoff matrix and underline best responses.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-folk-spence)

<a id="detail-term-pe"></a>
### **PE — Partial Equilibrium**
**What it is:** Analysis of a single market in isolation, holding all other prices and incomes fixed. The Marshallian cross of supply and demand determines equilibrium price and quantity in that market alone.
**Why it matters:** PE is simpler and more tractable than general equilibrium. Most policy analysis (taxes, tariffs, price controls) is done in PE because GE effects are often second-order. However, PE ignores feedback effects across markets, which can be significant for large policies or interconnected markets.
**Exam tip:** Use PE for welfare analysis of a single tax, subsidy, or price control. Draw the supply-demand diagram. Calculate CS, PS, DWL. Note that PE approximates GE well when the market is small relative to the economy.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-ge-properties)

<a id="detail-term-pmp"></a>
### **PMP — Profit Maximization Problem**
**What it is:** The firm's problem of choosing the production plan $y \in Y$ that maximizes profit $\pi(p) = \max_{y \in Y} p \cdot y$. The solution gives output supply $y(p)$ and the profit function $\pi(p)$.
**Why it matters:** PMP is the primal problem for the firm. Hotelling's Lemma recovers supply from the profit function: $y(p) = \partial \pi(p)/\partial p$. The profit function is HD(1) in output prices and convex. Together with CMP, it forms the foundation of production theory.
**Exam tip:** For a price-taking firm, the PMP reduces to $\max_q P \cdot q - c(q)$. The FOC is $P = MC$. The SOC is $MC' \ge 0$ (MC non-decreasing at optimum). Use Hotelling's Lemma to recover supply without re-optimizing.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-cost-profit)

<a id="detail-term-pmc"></a>
### **PMC — Private Marginal Cost**
**What it is:** The marginal cost of production borne directly by the producer. It excludes any external costs imposed on others. Under a Pigouvian tax, $PMC + t = SMC$ at the social optimum.
**Why it matters:** When there is a negative externality, the market equilibrium is based on PMC, not SMC. The divergence between PMC and SMC (equal to MED) is the source of market failure. The Pigouvian tax bridges this gap.
**Exam tip:** In externality diagrams, PMC is the private supply curve. SMC = PMC + MED lies above PMC. The market produces at $PMC = MB$, the social optimum at $SMC = MB$. The tax $t = MED(Q^*)$ shifts PMC up to SMC.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-extern-trade)

<a id="detail-term-po"></a>
### **PO — Pareto Optimal / Pareto Optimum**
**What it is:** An allocation where no agent can be made strictly better off without making at least one other agent strictly worse off. This is the fundamental normative criterion in welfare economics.
**Why it matters:** Pareto optimality is the efficiency benchmark. The FWT says every CE is PO. The three Pareto conditions (exchange, production, product-mix) are necessary and sufficient for PO. Policy changes are judged by whether they can achieve Pareto improvements.
**Exam tip:** PO is not the same as "fair" or "equitable." An allocation where one person has everything and everyone else has nothing can be PO. Use the Edgeworth box to identify the contract curve (all PO allocations). Learn the three conditions for production economies.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-social-welfare)

<a id="detail-term-ppc"></a>
### **PPC — Production Possibility Curve**
**What it is:** The set of all efficient combinations of outputs that an economy can produce given its factor endowments and technology. The slope of the PPC is the MRPT, which equals $MC_x/MC_y$.
**Why it matters:** The PPC represents the supply side of the economy. Points on the PPC are production-efficient (condition ii: $MRTS^X = MRTS^Y$). The optimal production point occurs where $MRPT = MRS$ (condition iii: product-mix efficiency).
**Exam tip:** The PPC is concave (bowed out) due to diminishing returns in each sector. In the 2x2x2 model, the PPC shifts with factor endowments. Draw the PPC together with community indifference curves to find the optimal production point.

<a id="detail-term-ps"></a>
### **PS — Producer Surplus**
**What it is:** Revenue minus variable cost: $PS = TR - TVC$. It is the area above the supply curve and below the market price. It measures the net benefit producers receive from selling at the market price, over and above their variable costs.
**Why it matters:** PS is the producer-side analogue of CS. Together, $CS + PS =$ total surplus, which is maximized at the competitive equilibrium. Changes in PS measure how producers are affected by policy interventions.
**Exam tip:** PS is not profit. PS = profit + fixed costs (since $TR - TVC = (TR - TC) + FC$). In the short run with fixed costs, PS is larger than profit. In the long run with no fixed costs, PS = profit (which is zero under perfect competition).

<a id="detail-term-rts"></a>
### **RTS — Returns to Scale**
**What it is:** How output responds when all inputs are increased proportionally. CRTS: $f(tx) = tf(x)$; IRTS: $f(tx) > tf(x)$; DRTS: $f(tx) < tf(x)$. For a Cobb-Douglas function $q = K^\alpha L^\beta$, RTS is determined by $\alpha + \beta$: $=1$ (CRTS), $>1$ (IRTS), $<1$ (DRTS).
**Why it matters:** RTS determines market structure. CRTS leads to flat LRAC and indeterminate firm size. IRTS leads to naturally monopolistic markets. DRTS leads to upward-sloping firm supply. RTS also determines whether profit functions are well-behaved.
**Exam tip:** Check RTS by scaling all inputs by $t$ and seeing what happens to output. You can also use the sum of output elasticities. Note that RTS is a property of the production function, not of the cost function (though they are related).

<a id="detail-term-se"></a>
### **SE — Substitution Effect**
**What it is:** The change in demand due to a price change holding utility constant. It is the movement along the original indifference curve to the new price ratio: $SE = \partial h_k/\partial p_j$ (for own-price, $\partial h_k/\partial p_k$, which is always non-positive by the compensated law of demand).
**Why it matters:** The SE isolates the pure price effect from the income effect. In the Slutsky equation, the total effect is SE + IE. The SE is always utility-increasing for a price decrease (the consumer can reach a higher indifference curve by substituting toward the cheaper good).
**Exam tip:** The SE is always non-positive for own-price changes (Hicksian demand slopes downward). This is the compensated law of demand. Sign the SE by analyzing whether the good is a substitute or complement for another good.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-slutsky)

<a id="detail-term-sm"></a>
### **SM — Strong Monotonicity**
**What it is:** If bundle $x$ has at least as much of every good as bundle $y$, and strictly more of at least one good, then $x$ is strictly preferred to $y$: $x_k \ge y_k\ \forall k,\ x_l > y_l\ \exists l \Rightarrow x \succ y$.
**Why it matters:** SM is the strongest desirability assumption. It implies all indifference curves are strictly downward-sloping and goods are always desirable. It ensures demand is strictly positive in all goods (interior solutions). SM implies M, which implies LNS.
**Exam tip:** SM is sufficient but not necessary for most results. If an exam question says "preferences are strongly monotonic," you can assume strictly downward-sloping ICs and that more is always better. Hierarchy: SM $\Rightarrow$ M $\Rightarrow$ LNS.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-monotonicity)

<a id="detail-term-smc"></a>
### **SMC — Social Marginal Cost**
**What it is:** The full marginal cost to society of producing one more unit, including both private costs and external damages. For a negative externality: $SMC = PMC + MED$ (private cost plus marginal external damage).
**Why it matters:** The social optimum occurs where $SMC = MB$ (marginal benefit), not where $PMC = MB$. The difference between $SMC$ and $PMC$ is the externality. A Pigouvian tax of $t = MED(Q^*)$ aligns the private outcome with the social optimum.
**Exam tip:** In externality questions, the market equilibrium uses PMC, and the social optimum uses SMC. The DWL is the area between PMC and SMC from $Q^*$ to $Q^{market}$. Draw the PMC, SMC, and MB curves.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-extern-trade)

<a id="detail-term-soc"></a>
### **SOC — Second-Order Condition**
**What it is:** The curvature condition that ensures a critical point (from the FOCs) is actually a maximum (or minimum). For constrained optimization, the SOC involves the bordered Hessian: $| \overline{H} | \ge 0$ for a maximum with one constraint, with alternating signs for multiple variables.
**Why it matters:** FOCs alone are necessary but not sufficient. Without verifying the SOC, you cannot be sure the candidate is a true optimum. In utility maximization, the SOC is equivalent to the utility function being quasiconcave at the optimum.
**Exam tip:** Most exam questions only require the FOC to solve for demand. But when asked "verify that this is a maximum," compute the bordered Hessian and check its sign. For the UMP with two goods, the SOC is $2u_xu_yu_{xy} - u_x^2u_{yy} - u_y^2u_{xx} \ge 0$.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-quasiconcavity)

<a id="detail-term-spne"></a>
### **SPNE — Subgame Perfect Nash Equilibrium**
**What it is:** A refinement of Nash equilibrium for sequential (dynamic) games. A strategy profile is SPNE if it constitutes a NE in every subgame of the original game. It is found by backward induction: solve from the last decision node backward.
**Why it matters:** SPNE eliminates non-credible threats that can arise in sequential games under plain NE. It is the standard solution concept for games like Stackelberg, entry deterrence, bargaining, and repeated games. Backward induction guarantees subgame perfection.
**Exam tip:** For any sequential game, use backward induction (rollback) to find the SPNE. Start at each terminal node, solve the last mover's optimal choice, fold back, and repeat. Check that there is no profitable deviation at any decision node.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-game-theory)

<a id="detail-term-sr"></a>
### **SR — Short Run**
**What it is:** The time horizon in which at least one factor of production is fixed (typically capital $K$). Firms can vary variable inputs (labour, materials) but cannot adjust fixed inputs. Firms can shut down temporarily but cannot exit the industry.
**Why it matters:** SR analysis explains firm behavior under fixed commitments. The shutdown condition ($P \ge \min AVC$) determines whether a firm operates or closes temporarily. The SR supply curve is the MC curve above min AVC. SR profits can be positive or negative.
**Exam tip:** In the SR, distinguish fixed costs (sunk or not) from variable costs. The firm produces where $P = MC$ as long as $P \ge AVC$. The SR supply curve is steeper than the LR supply curve because fewer adjustments are possible.

<a id="detail-term-swf"></a>
### **SWF — Social Welfare Function**
**What it is:** A function that aggregates individual utilities into a measure of social welfare: $W = W(u_1, \dots, u_n)$. Different forms reflect different distributional preferences: Utilitarian ($W = \sum u_i$), Rawlsian ($W = \min\{u_1,\dots,u_n\}$), and Bergson-Samuelson (general function with explicit value judgements).
**Why it matters:** The SWF is the tool for evaluating distributional outcomes. The point of bliss is where the GUPF is tangent to the highest SWF indifference curve. Arrow's Impossibility Theorem shows the difficulty of constructing a SWF from individual preferences without imposing value judgments.
**Exam tip:** The Bergson-Samuelson SWF is a function of individual utilities; Arrow's approach aggregates individual rankings directly. For exams, know the properties of Utilitarian and Rawlsian SWFs and their implications for redistribution.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-social-welfare)

<a id="detail-term-swt"></a>
### **SWT — Second Welfare Theorem**
**What it is:** Any Pareto optimal allocation can be decentralized as a competitive equilibrium with appropriate lump-sum transfers. In other words, any efficient outcome can be achieved by markets as long as initial endowments are redistributed appropriately.
**Why it matters:** The SWT separates efficiency from equity. The market system can achieve any efficient allocation the planner desires, provided lump-sum transfers are feasible. It requires convexity of preferences and production sets (fails with IRS/natural monopoly).
**Exam tip:** The SWT requires convexity (quasiconcave utility, CRS or DRS production). It fails with IRS, non-convex preferences, or incomplete markets. Lump-sum transfers must be non-distortionary — income taxes are not lump-sum.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-welfare-theorems)

<a id="detail-term-tc"></a>
### **TC — Total Cost / Transaction Costs**
**What it is:** Two distinct concepts: (i) Total Cost of production: $TC = FC + VC$, the sum of fixed and variable costs. (ii) Transaction Costs: the costs of engaging in economic exchange — search, bargaining, enforcement, and information costs.
**Why it matters:** In production theory, $TC$ is the basis for AC and MC. In institutional economics, transaction costs determine whether markets or firms organize economic activity. The Coase Theorem says bargaining achieves efficiency only when transaction costs are zero.
**Exam tip:** Distinguish the two uses. In production questions, $TC$ is about costs. In externality/institutional questions, $TC$ refers to transaction costs. The Coase Theorem works with zero $TC$ and well-defined property rights.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-cost-profit)

<a id="detail-term-tr"></a>
### **TR — Total Revenue**
**What it is:** Total income from sales: $TR = P \times Q$. The total revenue test relates price changes to revenue changes via elasticity: if $|\varepsilon| > 1$ (elastic), a price decrease raises TR; if $|\varepsilon| < 1$ (inelastic), a price decrease lowers TR.
**Why it matters:** TR determines firm revenue before costs. The TR test helps determine whether a firm should raise or lower price to increase revenue. For a monopolist, $MR = dTR/dQ = P(1 + 1/\varepsilon)$, which is positive only when demand is elastic.
**Exam tip:** TR is maximized where $MR = 0$, which occurs at the unit elastic point ($|\varepsilon| = 1$). Revenue is zero at both zero price and zero quantity. Draw the TR curve below the demand curve to show the relationship.

<a id="detail-term-ucs"></a>
### **UCS — Upper Contour Set**
**What it is:** The set of all bundles that are at least as good as a given utility level: $UCS = \{x \in X : u(x) \ge \bar u\}$. It contains all bundles on or above the indifference curve at $\bar u$.
**Why it matters:** Convexity of UCS is equivalent to the utility function being quasiconcave and to preferences being convex. This is the most common way to represent the assumption that consumers prefer diversity. When UCS is convex, diminishing MRS holds.
**Exam tip:** UCS convex $\iff$ quasiconcave utility $\iff$ convex preferences. For a function of two variables, check the bordered Hessian sign. In diagrams, convex UCS means the set "above" the IC is convex — bullet-shaped ICs pointing inward.

<a id="detail-term-ump"></a>
### **UMP — Utility Maximization Problem**
**What it is:** The consumer's primal problem: choose $x \ge 0$ to maximize $u(x)$ subject to the budget constraint $p \cdot x \le w$. Under LNS, the budget binds ($p \cdot x = w$). The solution gives Walrasian (Marshallian) demand $x(p,w)$ and indirect utility $v(p,w) = u(x(p,w))$.
**Why it matters:** The UMP is the foundational model of consumer behavior. Almost everything else in consumer theory builds on it: demand functions, indirect utility, welfare analysis, and duality with the EMP. Roy's Identity recovers demand from indirect utility.
**Exam tip:** Solve the UMP by: (1) set up Lagrangian, (2) FOCs: $MU_k = \lambda p_k$, (3) take ratio to get MRS = price ratio, (4) substitute into budget constraint. Always check LNS ensures the budget binds. Verify quasiconcavity via SOC.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-ump)

<a id="detail-term-upf"></a>
### **UPF — Utility Possibility Frontier**
**What it is:** The set of feasible utility pairs for agents given a fixed product-mix in the economy. Each UPF corresponds to one specific allocation of resources between the production of different goods. The GUPF is the envelope over all possible UPFs.
**Why it matters:** UPFs show the tradeoff between agents' utilities in a given production configuration. They are drawn in utility space (not goods space). Points on the UPF are Pareto optimal for that product-mix. The GUPF adds the product-mix dimension.
**Exam tip:** Distinguish UPF from GUPF: UPF is for one product-mix, GUPF envelopes all product-mixes. In the Edgeworth box, each point on the contract curve maps to a point on the UPF. Shifting the product-mix shifts the UPF.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-social-welfare)

<a id="detail-term-ver"></a>
### **VER — Voluntary Export Restraint**
**What it is:** A trade restriction where the exporting country voluntarily limits the quantity of a good it exports to a particular country. It is a type of quota imposed by the exporter rather than the importer.
**Why it matters:** A VER is economically worse than a tariff with the same quantity restriction. Like a tariff, it creates a DWL triangle. But unlike a tariff (where the government captures quota rent as tariff revenue), under a VER the quota rent goes to foreign exporters. This represents an additional loss to the importing country.
**Exam tip:** Compare tariff vs VER: (i) both reduce imports by the same amount, (ii) both have the same DWL, (iii) tariff revenue stays home, VER quota rent goes abroad. VER is therefore always worse for the importing country.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-extern-trade)

<a id="detail-term-wtp"></a>
### **WTP — Willingness to Pay**
**What it is:** The maximum amount a consumer is willing to pay for a good. The demand curve is interpretable as the marginal WTP curve: at each quantity, the price represents what the marginal consumer is willing to pay for that unit.
**Why it matters:** WTP is the foundation of consumer surplus. Aggregate WTP minus actual expenditure equals CS. In adverse selection models (lemons), differences in WTP between buyers and sellers (due to asymmetric information about quality) cause market failure.
**Exam tip:** The demand curve IS the marginal WTP curve. Total WTP for $Q$ units is the area under the demand curve from 0 to $Q$. WTP differs from willingness to accept (WTA) due to endowment effects, though they are equal for small price changes.

---

## 2. Core Assumptions

### 2.1 Preference Axioms

<a id="detail-term-completeness"></a>
### **Completeness**
**What it is:** For any two bundles $x$ and $y$, either $x \succeq y$, $y \succeq x$, or both. The consumer can always state a preference or indifference between any two alternatives. This creates a total order over the consumption set.
**Why it matters:** Without completeness, the consumer can't choose between some bundles, and utility representation is impossible. Rationality requires completeness. Real people often violate this when faced with unfamiliar or complex choices, but economic models assume it so that choice problems are well-defined.
**Exam tip:** The classic counterexample is the "brother of" relation: not everyone is someone's brother, so the relation is not complete. For preferences, the Condorcet paradox shows how voting cycles violate completeness in social choice. Be ready to state: completeness means any two bundles can be compared.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-rationality)

<a id="detail-term-transitivity"></a>
### **Transitivity**
**What it is:** If $x \succeq y$ and $y \succeq z$, then $x \succeq z$. Preferences have no cycles: if A is at least as good as B, and B is at least as good as C, then A is at least as good as C.
**Why it matters:** Transitivity prevents money-pump exploitation. If preferences were intransitive (cyclic), a clever trader could extract unlimited money by selling you a cycle of trades. It also ensures the preference relation can be represented by a utility function. Together with completeness, it defines rationality.
**Exam tip:** The money-pump argument is the standard justification: intransitive preferences allow someone to sell you a sequence of trades that leaves you worse off. The Condorcet paradox (voting cycles) is the canonical violation. Combine with completeness for rationality.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-rationality)

<a id="detail-term-reflexivity"></a>
### **Reflexivity**
**What it is:** Every bundle is at least as good as itself: $x \succeq x$ for all $x \in X$. This is equivalent to $x \sim x$ : each bundle is indifferent to itself.
**Why it matters:** Reflexivity is a technical regularity needed for the formal definition of a preference relation. It's automatically satisfied if completeness and transitivity hold. It rules out self-contradictory statements.
**Exam tip:** Reflexivity is rarely tested on its own. It's implied by completeness (since $x \succeq x$ follows from completeness). Mention it if a question asks for the full definition of a rational preference relation, but don't spend time on it.

<a id="detail-term-rationality-pref"></a>
### **Rationality (Preference)**
**What it is:** A preference relation $\succeq$ is rational if it satisfies both completeness and transitivity. Rationality is the foundational assumption for all consumer theory: the consumer has well-defined, consistent preferences over all possible consumption bundles.
**Why it matters:** Debreu's theorem (1954) says that rational + continuous preferences can be represented by a continuous utility function. Without rationality, you cannot use utility functions, Lagrangians, FOCs, or any of the standard tools of consumer theory. It's the gateway assumption to everything else.
**Exam tip:** "Rationality" on an exam always means completeness + transitivity. Nothing more, nothing less. It does NOT mean self-interested or profit-maximizing. A consumer with altruistic preferences who is complete and transitive is rational. Real people often violate rationality, but the assumption gives us a benchmark.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-rationality)

### 2.2 Desirability Axioms

<a id="detail-term-local-nonsatiation-core"></a>
### **Local Nonsatiation (LNS)**
**What it is:** For any bundle $x$ and any distance $\varepsilon > 0$, there exists a bundle $y$ within $\varepsilon$ of $x$ that is strictly preferred to $x$. You can always find a slightly different bundle that is better : there are no thick indifference curves and no local bliss points.
**Why it matters:** LNS is the minimal desirability assumption. It's sufficient for Walras' Law (the budget constraint binds) and the First Welfare Theorem. It's weaker than monotonicity: it allows some goods to be bads, as long as there's always some nearby bundle that's better. The hierarchy is SM $\Rightarrow$ M $\Rightarrow$ LNS, but the reverse implications don't hold.
**Exam tip:** LNS is the standard assumption for the FWT. Check whether an exam question gives LNS or monotonicity : they're different. LNS does NOT guarantee downward-sloping indifference curves (that requires monotonicity). The key exam point: LNS ensures the budget is exhausted.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-monotonicity)

<a id="detail-term-monotonicity-core"></a>
### **Monotonicity (M)**
**What it is:** If every good in bundle $x$ is strictly greater than the corresponding good in bundle $y$, then $x$ is strictly preferred to $y$: $x_k > y_k\ \forall k \Rightarrow x \succ y$. More of every good is strictly better.
**Why it matters:** Monotonicity ensures indifference curves are strictly downward-sloping. It rules out "bads" : goods you'd rather have less of. It's stronger than LNS but weaker than SM. Many textbook models assume M for simplicity.
**Exam tip:** The hierarchy is SM $\Rightarrow$ M $\Rightarrow$ LNS. If M holds, you know all goods are desirable and ICs slope down. But M is stronger than needed for most results. An exam might ask: "Does M imply LNS? Does LNS imply M?" The answer to both is no.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-monotonicity)

<a id="detail-term-strong-monotonicity-core"></a>
### **Strong Monotonicity (SM)**
**What it is:** If $x$ has at least as much of every good as $y$, and strictly more of at least one good, then $x$ is strictly preferred to $y$: $x_k \ge y_k\ \forall k$ with $x_l > y_l$ for some $l \Rightarrow x \succ y$.
**Why it matters:** SM is the strongest desirability assumption. It guarantees strictly downward-sloping indifference curves, all goods are desirable, and demand is strictly positive in all goods (interior solutions). It implies M, which implies LNS. It's sufficient but not necessary for most results.
**Exam tip:** If an exam problem says "preferences are strongly monotonic," you can immediately assume interior solutions and strictly downward-sloping ICs. The hierarchy SM $\Rightarrow$ M $\Rightarrow$ LNS is a standard exam question. Know the direction of the implications.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-monotonicity)

### 2.3 Convexity & Continuity

<a id="detail-term-convex-preferences"></a>
### **Convex Preferences**
**What it is:** If $y \succeq x$ and $z \succeq x$, then any convex combination $\lambda y + (1-\lambda)z \succeq x$ for $\lambda \in [0,1]$. The consumer prefers mixtures to extremes : diversification is valued. A set of convex indifference curves shows diminishing MRS.
**Why it matters:** Convexity captures the idea that consumers like variety. It guarantees that the consumer's optimization problem has interior solutions (not corner solutions) and that the indifference curves are bowed inward. The chain: convex preferences $\iff$ UCS is convex $\iff$ utility function is quasiconcave. Convexity is needed for the Second Welfare Theorem.
**Exam tip:** The equivalence chain is tested heavily. Show that convex preferences imply quasiconcave utility. The exam question: "Show that convex preferences are equivalent to quasiconcave utility." Use the definition: UCS convex = quasiconcave utility = convex preferences. Strict convexity gives unique demand.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-quasiconcavity)

<a id="detail-term-ucs-convex"></a>
### **UCS Convex**
**What it is:** The upper contour set $\{x \in X : u(x) \ge \bar u\}$ is a convex set. This means the set of bundles that are at least as good as a given reference level is convex : you can draw a straight line between any two points in the UCS and stay inside it.
**Why it matters:** UCS convex is the intermediate link in the chain: convex preferences $\iff$ UCS convex $\iff$ quasiconcave utility. It's the geometric representation of convex preferences. In diagrams, convex UCS means the region above the indifference curve is bullet-shaped.
**Exam tip:** Test UCS convexity by checking that the line segment between any two equally-good bundles lies in the "at least as good" set. This is visually obvious in the Edgeworth box. The UCS is the region above the IC; if it's convex, preferences are convex.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-quasiconcavity)

<a id="detail-term-quasiconcave-utility"></a>
### **Quasiconcave Utility**
**What it is:** A utility function $u$ is quasiconcave if $u(\lambda x + (1-\lambda)y) \ge \min\{u(x), u(y)\}$ for all $\lambda \in [0,1]$. Equivalently, its upper contour sets are convex. This is the functional form of convex preferences.
**Why it matters:** Utility functions need to be quasiconcave (not necessarily concave) to represent convex preferences. Quasiconcavity is the standard curvature assumption throughout consumer theory. It ensures the SOC of the UMP holds (the bordered Hessian test). Every concave function is quasiconcave, but not vice versa.
**Exam tip:** The bordered Hessian test is the practical tool. For two variables: $|\overline{H}| = 2u_xu_yu_{xy} - u_x^2u_{yy} - u_y^2u_{xx} \ge 0$ confirms quasiconcavity. Cobb-Douglas $u = x_1^\alpha x_2^\beta$ is quasiconcave for $\alpha,\beta > 0$. Don't confuse quasiconcave with concave : they are different.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-quasiconcavity)

<a id="detail-term-continuity-pref"></a>
### **Continuity (Preferences)**
**What it is:** The "at least as good as" set $\{x : x \succeq y\}$ and the "no better than" set $\{x : y \succeq x\}$ are both closed. Small changes in bundles don't cause sudden preference reversals. Formally, if $x^n \to x$ and $x^n \succeq y$ for all $n$, then $x \succeq y$.
**Why it matters:** Continuity is needed for Debreu's utility representation theorem. Rationality alone is not enough : lexicographic preferences are rational but not continuous, so no utility function exists to represent them. Continuity ensures indifference surfaces are well-behaved and the utility function is differentiable almost everywhere.
**Exam tip:** The exam question: "Can all rational preferences be represented by a utility function?" Answer: only if they're also continuous. Lexicographic preferences are the canonical counterexample: they are rational (complete and transitive) but not continuous, so no utility function exists. Continuity is the bridge from preference relations to calculus-based utility analysis.

<a id="detail-term-strict-convexity"></a>
### **Strict Convexity**
**What it is:** If $y \succeq x$ and $z \succeq x$ with $y \neq z$, then $\lambda y + (1-\lambda)z \succ x$ for $\lambda \in (0,1)$. This strengthens convex preferences by requiring the convex combination to be strictly better, not just at least as good.
**Why it matters:** Strict convexity guarantees a unique optimal bundle for the consumer. Without it, there could be flat segments on indifference curves, leading to multiple optimal bundles at the same budget line. It ensures demand functions are single-valued (not correspondences).
**Exam tip:** Strict convexity is the difference between "the consumer might be indifferent between many bundles" and "there is exactly one optimal bundle." In exams, standard utility functions (Cobb-Douglas, CES with $\rho < 1$) satisfy strict convexity. Leontief and perfect substitutes don't (the former has kinks, the latter has flat segments).

### 2.4 Production Set Assumptions

<a id="detail-term-closedness"></a>
### **Closedness (Production Set)**
**What it is:** The production set $Y$ includes its boundary. If a sequence of feasible production plans $\{y^n\} \subset Y$ converges to $y$, then $y \in Y$.
**Why it matters:** Closedness is a technical regularity needed for existence proofs in general equilibrium. It ensures the profit maximization problem has a solution (the maximum is attained, not just approached). Without it, you could have a sequence of increasingly profitable plans that approach but never reach the maximum.
**Exam tip:** This is usually assumed without comment. It matters for the Arrow-Debreu existence proof. In practice, standard production functions (Cobb-Douglas, CES) generate closed production sets.

<a id="detail-term-no-free-lunch"></a>
### **No Free Lunch**
**What it is:** The production set intersects the non-negative orthant only at the origin: $Y \cap \mathbb{R}^N_+ \subseteq \{0\}$. You cannot produce positive output from non-positive inputs. There is no production plan with all outputs positive and all inputs zero.
**Why it matters:** This rules out perpetual motion machines : production requires real resources. It's the economic version of "there's no such thing as a free lunch." It ensures the production set is bounded above relative to inputs, which is essential for scarcity to have meaning.
**Exam tip:** The standard example: you can't produce a car from nothing. If a production plan has $y > 0$ (positive outputs) and uses no inputs, that's a free lunch. This assumption is rarely violated in real economies but is needed to rule out infinite profit opportunities.

<a id="detail-term-free-disposal"></a>
### **Free Disposal**
**What it is:** If $y \in Y$ and $y' \le y$ (component-wise), then $y' \in Y$ as well. The firm can costlessly dispose of any unwanted outputs or excess inputs.
**Why it matters:** Free disposal ensures the production set is unbounded below : you can always throw things away without cost. This prevents negative prices from being a problem (if disposal is free, you'd never pay to dispose). It's a standard assumption for well-behaved production sets.
**Exam tip:** Free disposal is a simplifying assumption, not a realistic one (disposal often has costs). But it makes the math work: it ensures the production set contains all points that are "worse" than feasible points. Without it, some prices might not yield a profit maximum.

<a id="detail-term-possibility-of-inaction"></a>
### **Possibility of Inaction**
**What it is:** The zero vector is in the production set: $0 \in Y$. The firm can always choose to produce nothing, using no inputs and producing no outputs.
**Why it matters:** This ensures the firm can always achieve at least zero profit. Without it, the firm might be forced into a production plan with negative profit. It's the baseline outside option : the firm can always shut down.
**Exam tip:** This is distinct from the shutdown condition. Possibility of inaction says $0 \in Y$ (the production set includes zero). The short-run shutdown condition is $P \ge \min AVC$. The latter is about continuing to operate with fixed costs; the former is about whether you can produce nothing at all.

<a id="detail-term-irreversibility"></a>
### **Irreversibility**
**What it is:** If $y \in Y$ and $y \neq 0$, then $-y \notin Y$. You cannot reverse a production process. If a plan uses inputs to produce outputs, you can't simply reverse it to get inputs back from outputs.
**Why it matters:** Irreversibility rules out arbitrage: without it, you could produce a good and then "unproduce" it costlessly, creating unlimited profit. Most production processes are irreversible because of wear and tear, energy loss, and transformation costs.
**Exam tip:** The key economic point: reversibility would mean you could run a process forward and backward at no cost, essentially creating a free lunch. Irreversibility is closely related to the idea that production takes time and resources are transformed, not just rearranged.

<a id="detail-term-non-increasing-rts"></a>
### **Non-increasing Returns to Scale**
**What it is:** If $y \in Y$, then $\theta y \in Y$ for all $\theta \in [0,1]$. Any feasible plan can be scaled down proportionally. This allows CRTS and DRTS but rules out IRS.
**Why it matters:** Non-increasing RTS ensures the production set is a cone that includes all smaller versions of feasible plans. Combined with additivity (CRTS), it gives the full cone property ($\theta y \in Y$ for all $\theta \ge 0$). It's a mild restriction that holds for most technologies.
**Exam tip:** This is weaker than CRTS because it only allows scaling down, not up. A DRTS technology satisfies non-increasing RTS but not CRTS. The full cone property (CRTS) requires scaling in both directions.

<a id="detail-term-crts-additivity"></a>
### **CRTS (Additivity)**
**What it is:** If $y \in Y$, then $\theta y \in Y$ for all $\theta \ge 0$. And if $y, y' \in Y$, then $y + y' \in Y$ (additivity). The production set is a convex cone.
**Why it matters:** CRTS means the technology has no inherent scale economies : doubling all inputs exactly doubles output. Additivity means you can run multiple production plans independently and sum them. CRTS implies that in competitive equilibrium, firms earn zero profit and the number of firms is indeterminate.
**Exam tip:** The sum of output elasticities determines RTS for Cobb-Douglas: $\alpha + \beta = 1$ for CRTS. Euler's theorem gives $f = f_K K + f_L L$ under CRTS, which is the product exhaustion result. CRTS plus perfect competition equals zero profit.

<a id="detail-term-convexity-production-set"></a>
### **Convexity (Production Set)**
**What it is:** If $y, y' \in Y$, then for any $\lambda \in [0,1]$, $\lambda y + (1-\lambda)y' \in Y$. The production set is a convex set.
**Why it matters:** Convexity of the production set rules out increasing returns to scale (IRS). With IRS, averaging two production plans could be worse than either extreme. Convexity is needed for the Second Welfare Theorem : it ensures the separating hyperplane theorem can be applied to decentralize efficient allocations. Without convexity, SWT fails.
**Exam tip:** The SWT requires convexity of both preferences and production. If production exhibits IRS (non-convex), some Pareto optimal allocations cannot be decentralized as competitive equilibria. This is the theoretical basis for natural monopoly regulation. Convexity is a strong assumption : many real technologies have IRS at some scale.

### 2.5 General Equilibrium Assumptions

<a id="detail-term-ge-lns"></a>
### **LNS (General Equilibrium)**
**What it is:** Local nonsatiation carries over from consumer theory. In GE, it ensures every consumer spends all their income at equilibrium : budget constraints bind. No one is satiated at their equilibrium bundle.
**Why it matters:** LNS is needed for the First Welfare Theorem. The FWT proof uses LNS to show that if an allocation Pareto dominates the CE, it must cost more than the agents' incomes, creating a contradiction. Without LNS, a consumer with a bliss point could be at a CE that is not Pareto optimal.
**Exam tip:** The FWT requires LNS (plus no externalities). LNS is sufficient; you don't need monotonicity or strong monotonicity. A CE with a bliss-point consumer can be inefficient because you could take goods away from the satiated consumer and make others better off without harming the satiated consumer.

<a id="detail-term-ge-convexity"></a>
### **Convexity (General Equilibrium)**
**What it is:** Both preferences and production sets are convex. Convex preferences mean consumers prefer diversification. Convex production sets mean no increasing returns.
**Why it matters:** The SWT requires convexity. The proof uses the separating hyperplane theorem: with convex sets, you can draw a price line that separates the Pareto preferred set from the feasible set, and that price supports the Pareto allocation as a CE. Without convexity, the separating hyperplane may not exist.
**Exam tip:** FWT = LNS + no externalities. SWT = convexity + transfers. This contrast is a standard exam question. Convexity is the key extra assumption that the SWT needs but the FWT doesn't.

<a id="detail-term-no-externalities"></a>
### **No Externalities**
**What it is:** Every agent's consumption or production affects only their own payoff. There are no spillover effects between agents. The utility of consumer $i$ depends only on $i$'s own consumption, and the production of firm $j$ depends only on $j$'s own inputs.
**Why it matters:** Externalities cause the First Welfare Theorem to fail. When a factory's pollution affects a consumer's utility but the price system doesn't capture this cost, the CE is not Pareto optimal. The FWT requires either no externalities or that externalities are priced (e.g., through Pigouvian taxes).
**Exam tip:** Externalities are the classic reason the FWT fails. The question "Why might the FWT not hold?" always has "externalities" as the first answer. Together with LNS, no externalities is the key FWT assumption.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-extern-trade)

<a id="detail-term-perfect-competition"></a>
### **Perfect Competition**
**What it is:** All agents are price-takers : no individual consumer or firm has market power. Each agent treats prices as given and beyond their control. There are enough agents that no single agent's action affects market prices.
**Why it matters:** Perfect competition is built into the definition of competitive equilibrium. If agents have market power (monopoly, monopsony), they can influence prices, and the standard CE definition doesn't apply. The FWT and SWT both assume price-taking behavior.
**Exam tip:** Monopoly violates perfect competition. In a monopolized market, $P > MC$, which breaks the first-order condition of the CE. The DWL of monopoly is the efficiency cost of violating the price-taking assumption. This is a standard FWT failure case.

<a id="detail-term-complete-markets"></a>
### **Complete Markets**
**What it is:** There is a market for every good, including contingent claims for every possible state of the world. Every commodity has a price at which it can be traded. No missing markets.
**Why it matters:** Complete markets are required for the FWT. If a market is missing (e.g., no market for pollution, no insurance market for a certain risk), then there is no price signal for that good, and the allocation can't be Pareto optimal. The Arrow-Debreu model assumes complete markets.
**Exam tip:** Missing markets are a form of market failure. The classic examples are externalities (no market for pollution), public goods (non-excludability prevents a market), and incomplete insurance markets (moral hazard and adverse selection prevent trade). Always check: "Is there a market for every relevant good?"

<a id="detail-term-perfect-information"></a>
### **Perfect Information**
**What it is:** All agents know all prices, qualities, and relevant characteristics of goods. There is no asymmetric information : no agent has private information that others don't have.
**Why it matters:** Asymmetric information causes adverse selection and moral hazard, which can lead to market failure. The Akerlof lemons model shows how asymmetric information can cause a market to collapse entirely. The FWT assumes agents have the information they need to make optimal decisions.
**Exam tip:** Violations of perfect information are studied in adverse selection (hidden information before trade), moral hazard (hidden action after trade), and signaling (costly information revelation). The Spence signaling model shows how perfect information can be restored through costly signaling.

### 2.6 Welfare Economics Assumptions

<a id="detail-term-cardinal-utility"></a>
### **Cardinal Utility (Bentham)**
**What it is:** Utility is cardinally measurable and interpersonally comparable. We can say not just that $x \succ y$ (ordinal), but that $u(x) - u(y) = 5$ utils and that this difference means the same thing for different people. Bentham's social welfare function is the sum of utilities: $W = \sum_i u_i$.
**Why it matters:** Cardinal utility with interpersonal comparability is needed for the utilitarian SWF and for cost-benefit analysis that sums welfare across individuals. It allows us to say that a dollar to a poor person has a larger welfare impact than a dollar to a rich person (if marginal utility is diminishing). Bergson-Samuelson SWFs use cardinal utility with explicit value judgments.
**Exam tip:** The key distinction: ordinal utility is enough for the Pareto criterion (just need rankings), but cardinal utility is needed for SWF-based welfare analysis. Arrow's impossibility theorem applies to ordinal preference aggregation but not to cardinal utility with interpersonal comparisons.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-social-welfare)

<a id="detail-term-ordinal-utility"></a>
### **Ordinal Utility**
**What it is:** Only rankings matter. The utility function represents preferences ordinally: if $u(x) > u(y)$, then $x \succ y$, but the numerical values have no significance. Any monotonic transformation of $u$ represents the same preferences.
**Why it matters:** Ordinal utility is sufficient for the Pareto criterion: if everyone prefers $x$ to $y$, then $x$ Pareto dominates $y$ regardless of utility magnitudes. Most of consumer theory uses ordinal utility (UMP, EMP, demand analysis). No interpersonal comparisons are needed.
**Exam tip:** The Pareto criterion only requires ordinal utility. The distinction between ordinal and cardinal utility is tested when asking about the limits of Pareto optimality. Without cardinal comparability, we can't say how much better off one person is compared to another, which limits distributional analysis.

<a id="detail-term-identical-utility-functions"></a>
### **Identical Utility Functions**
**What it is:** All individuals in society have the same utility function $u(\cdot)$. They differ only in endowments or incomes, not in their underlying preferences or capacity for satisfaction.
**Why it matters:** This assumption is used in the cardinalist welfare criterion and in some GE models to simplify aggregation. With identical homothetic preferences, aggregate demand behaves like a single consumer's demand, and relative prices are independent of the income distribution.
**Exam tip:** Identical utility functions is a strong simplification. It rules out preference heterogeneity, which is unrealistic but convenient for modeling. When you assume this, you can treat the social welfare problem as one representative agent's optimization.

<a id="detail-term-no-externalities-convexity"></a>
### **No Externalities + Convexity**
**What it is:** The combined assumption that there are no spillover effects between agents AND that preferences and production sets are convex. This ensures that the three Pareto conditions (exchange, production, product-mix) hold at a competitive equilibrium.
**Why it matters:** No externalities ensures prices reflect true social costs (FWT condition). Convexity ensures that efficient allocations can be decentralized as CE with transfers (SWT condition). Together, they guarantee that the welfare theorems hold and the GUPF is well-defined.
**Exam tip:** The FWT needs LNS + no externalities. The SWT needs convexity. When both sets of assumptions hold, both welfare theorems apply, and the GUPF analysis is valid. This is the standard benchmark in welfare economics.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-welfare-theorems)

<a id="detail-term-explicit-value-judgements"></a>
### **Explicit Value Judgements**
**What it is:** The welfare analyst must state their distributional preferences openly : for example, by choosing a specific social welfare function (utilitarian, Rawlsian, or other). The choice of SWF encodes ethical judgments about inequality and redistribution.
**Why it matters:** Without explicit value judgments, you cannot rank allocations that involve trade-offs between different people's welfare. The Pareto criterion only ranks unanimous improvements. The Bergson-Samuelson approach requires the analyst to specify the SWF, making value judgments transparent rather than hidden. This is the standard approach in normative welfare economics.
**Exam tip:** The point of bliss is the tangency between the GUPF and the chosen SWF. A Utilitarian SWF ($W = \sum u_i$) picks a different allocation than a Rawlsian SWF ($W = \min u_i$). Making value judgments explicit allows for transparent debate about distributional choices. Arrow's impossibility theorem shows that mechanical aggregation of ordinal preferences can't substitute for explicit value judgments.


---

## 3. Key Theorems & Identities

<a id="detail-term-debreu-theorem"></a>
### **Debreu's Theorem** (1954)

**What it is:** Debreu's theorem states that if a preference relation $\succeq$ is rational (complete and transitive) and continuous, then there exists a continuous utility function $u: X \to \mathbb{R}$ that represents it. Continuity means the "at least as good as" and "no better than" sets are closed, which rules out sudden preference reversals. The theorem bridges the gap between preference relations (the primitive) and utility functions (the tool we actually work with).

**Why it matters:** Every consumer problem in this course starts with a utility function, but the foundations rest on preferences. Debreu's theorem justifies this step: as long as preferences are well-behaved, the utility representation exists and is continuous, so we can use calculus (Lagrangians, FOCs) without worrying about representation failure. Without it, we could not write $v(p,w) = u(x(p,w))$ and do comparative statics. It connects directly to the UMP, indirect utility, and duality.

**Exam tip:** Debreu's theorem is tested as a foundation question: "Why can we represent preferences with a utility function?" The answer is always "rationality + continuity." Note that continuity is a separate assumption from rationality — lexicographic preferences are rational but not continuous, so no utility function exists. Monotonicity does not imply continuity, and vice versa. Name the year (1954) for full marks.

<a id="detail-term-roys-identity"></a>
### **Roy's Identity**

**What it is:** Roy's Identity recovers Walrasian (Marshallian) demand directly from the indirect utility function: $x_k(p,w) = -(\partial v/\partial p_k) / (\partial v/\partial w)$. Given that you have solved the UMP and obtained $v(p,w)$, Roy's Identity gives back the demand functions with zero additional optimization. It is an application of the envelope theorem.

**Why it matters:** This identity is the fastest route from indirect utility to demand. In many problems it is easier to compute $v(p,w)$ first, then recover $x(p,w)$ via Roy's, than to solve the UMP Lagrangian from scratch. It also provides a consistency check: any candidate Walrasian demand must satisfy Roy's Identity with respect to its corresponding indirect utility. The identity is central to the duality framework linking UMP, EMP, indirect utility, and the expenditure function.

**Exam tip:** Every time you derive $v(p,w)$, immediately ask: "Can I use Roy's Identity to get $x(p,w)$?" This saves time on exams. Common mistake: forgetting the negative sign. Also, Roy's requires $\partial v/\partial w \neq 0$, which holds under LNS. For Cobb-Douglas: $v = w (\alpha/p_1)^\alpha ((1-\alpha)/p_2)^{1-\alpha}$ gives $x_1 = \alpha w / p_1$ via Roy's.

**Also see:** [Equation Explainer — Roy's Identity](./EQUATION-EXPLAINER.md#eq-roys-identity)

<a id="detail-term-shephards-lemma"></a>
### **Shephard's Lemma**

**What it is:** Shephard's Lemma says that the Hicksian (compensated) demand for good $k$ equals the partial derivative of the expenditure function with respect to its price: $h_k(p,u) = \partial e(p,u) / \partial p_k$. This is an envelope theorem result applied to the EMP. Given the expenditure function, one derivative gives the entire Hicksian demand system without re-solving.

**Why it matters:** Shephard's Lemma is the dual counterpart to Roy's Identity. While Roy's recovers Walrasian demand from $v$, Shephard's recovers Hicksian demand from $e$. This is critical for computing substitution effects, constructing the Slutsky equation, and calculating CV and EV (all of which require Hicksian demand). The expenditure function is HD(1) and concave in prices; concavity implies $\partial h_k/\partial p_k \le 0$, which is the Compensated Law of Demand. Shephard's Lemma also transfers to production: $\partial c(w,q)/\partial w_k = z_k$ (conditional factor demand).

**Exam tip:** If you have $e(p,u)$, just differentiate to get $h_k$. The result must be HD(0) in $p$. Check concavity of $e$ as a verification that you solved the EMP correctly. For CD expenditure $e = u (p_1/\alpha)^\alpha (p_2/(1-\alpha))^{1-\alpha}$, Shephard's gives $h_1 = \alpha u (p_1/\alpha)^{\alpha-1} (p_2/(1-\alpha))^{1-\alpha}$.

**Also see:** [Equation Explainer — EMP & Shephard's Lemma](./EQUATION-EXPLAINER.md#eq-emp-shephard)

<a id="detail-term-hotellings-lemma"></a>
### **Hotelling's Lemma**

**What it is:** Hotelling's Lemma recovers a firm's output supply and factor demands directly from its profit function: $y(p) = \partial \pi(p)/\partial p$ (for output) and $z_i(p) = -\partial \pi(p)/\partial w_i$ (for inputs). The profit function $\pi(p,w)$ gives maximum profit as a function of output and input prices. As with Roy's Identity and Shephard's Lemma, this is an envelope theorem result.

**Why it matters:** Hotelling's Lemma is the producer-side counterpart of Shephard's Lemma. It lets you recover the entire supply and factor demand system from the profit function with just differentiation. The profit function has nice properties — HD(1), convex in prices, non-decreasing in output prices, non-increasing in input prices. Convexity implies that output supply slopes upward ($\partial y/\partial p \ge 0$) and factor demand slopes downward. Hotelling's Lemma completes the duality picture on the production side.

**Exam tip:** Pay close attention to the sign: $\partial \pi/\partial p = y$ (positive for outputs), but $\partial \pi/\partial w_i = -z_i$ (negative for inputs). The negative sign reflects that higher input prices reduce profit. Hotelling's Lemma requires differentiability of $\pi$, which holds when there is a unique interior solution. For CRTS production, profits are zero at any scale, so $\pi(p) = 0$ identically; Hotelling's Lemma still applies but gives supply that is not single-valued.

**Also see:** [Equation Explainer — Cost & Profit Functions](./EQUATION-EXPLAINER.md#eq-cost-profit)

<a id="detail-term-slutsky-equation"></a>
### **Slutsky Equation**

**What it is:** The Slutsky equation decomposes the total effect of a price change on Marshallian demand: $\partial x_k/\partial p_j = \partial h_k/\partial p_j - x_j (\partial x_k/\partial w)$. The first term is the substitution effect (SE): how demand changes when relative prices shift but utility is held constant. The second term is the income effect (IE): the change because the price change alters real purchasing power. For own-price changes ($k=j$), the SE is always negative (Compensated Law of Demand), while the IE sign depends on whether the good is normal (positive IE) or inferior (negative IE).

**Why it matters:** The Slutsky equation is the single most important decomposition in consumer theory. It explains why Giffen goods exist (inferior good + IE dominates SE), why demand slopes down for normal goods, and how SE and IE operate in opposite directions for inferior goods. It connects Walrasian and Hicksian demand through one equation. The decomposition is essential for welfare analysis, since CV and EV use Hicksian demand (SE only), while actual behavior follows Marshallian demand (SE + IE).

**Exam tip:** Slutsky questions are the most common exam problem in consumer theory. You will be asked to: (a) compute SE and IE numerically, (b) identify whether a good is normal, inferior, or Giffen from the signs, or (c) derive the Slutsky equation using duality. Memorize: $SE = \partial h/\partial p$, $IE = -x (\partial x/\partial w)$, $TE = SE + IE$. For a price decrease of a normal good, SE and IE both increase demand (same direction). For a price decrease of an inferior good, SE says buy more, IE says buy less.

**Also see:** [Equation Explainer — Slutsky Equation](./EQUATION-EXPLAINER.md#eq-slutsky)

<a id="detail-term-slutsky-matrix"></a>
### **Slutsky Matrix**

**What it is:** The Slutsky matrix $S(p,w)$ is the matrix of compensated price derivatives: $S_{kj} = \partial h_k(p,u)/\partial p_j$. Its three key properties are: (1) it is negative semidefinite (NSD), (2) it is symmetric ($\partial h_k/\partial p_j = \partial h_j/\partial p_k$), and (3) it satisfies $S(p,w) p = 0$. NSD implies that $\partial h_k/\partial p_k \le 0$ for all $k$. Symmetry follows from Young's theorem applied to the expenditure function ($\partial^2 e/\partial p_k \partial p_j = \partial^2 e/\partial p_j \partial p_k$). The condition $Sp = 0$ follows from HD(0) of Hicksian demand.

**Why it matters:** The Slutsky matrix properties are the fundamental testable restrictions of consumer theory. They hold for any rational consumer regardless of the specific utility function. Empirically, if estimated demand violates Slutsky symmetry or NSD, the data cannot be rationalized by utility maximization (the integrability problem). These restrictions provide the null hypothesis for testing consumer theory. NSD is equivalent to the Compensated Law of Demand. Symmetry is a cross-equation restriction often tested in demand system estimation.

**Exam tip:** The three properties (NSD, symmetric, $Sp = 0$) appear as: "What restrictions does utility maximization place on demand?" Know which property comes from: concavity of $e$ (NSD), equality of cross-partials (symmetry), HD(0) ($Sp = 0$). On exams, you may be asked to verify these for a given matrix or to show that a violation implies non-rational demand.

**Also see:** [Equation Explainer — Slutsky Equation](./EQUATION-EXPLAINER.md#eq-slutsky)

<a id="detail-term-walras-law"></a>
### **Walras' Law**

**What it is:** Walras' Law states that the total value of aggregate excess demand is identically zero at all prices: $p \cdot z(p) = 0$ for all $p$. Here $z(p)$ is the vector of aggregate excess demands (demand minus supply) across all markets. It holds because every agent's budget constraint binds — under LNS, consumers spend all their wealth — and when we sum across agents, net spending across markets must sum to zero. An important corollary: if $n-1$ markets clear, the $n$th market automatically clears.

**Why it matters:** Walras' Law is the cornerstone of general equilibrium theory. It lets us drop one market when solving for equilibrium — instead of solving $n$ equations, we solve $n-1$ and verify that the remaining market clears. It also provides the budget constraint that binds the entire GE system together. Walras' Law holds at both the individual and aggregate level. It does NOT require equilibrium to hold; it is an identity true for all price vectors, not just at $p^*$.

**Exam tip:** The single most common GE exam task: "Use Walras' Law to find the equilibrium price." Drop one market (choose a numeraire good), solve the remaining $n-1$ equations, then verify that the $n$th market clears. The verification is the proof your solution is correct. Remember: Walras' Law requires LNS (so budgets bind). Without LNS, consumers might leave money unspent, and the value of aggregate excess demand could be negative.

**Also see:** [Equation Explainer — Excess Demand & Walras' Law](./EQUATION-EXPLAINER.md#eq-excess-demand)

<a id="detail-term-first-welfare-theorem"></a>
### **First Welfare Theorem**

**What it is:** The First Welfare Theorem (FWT) states that every competitive (Walrasian) equilibrium is Pareto optimal, provided that preferences satisfy local nonsatiation (LNS) and there are no externalities or incomplete markets. In other words, when markets are complete, agents are price-takers, and no one is satiated, the invisible hand guides the market to an efficient allocation. No reallocation can make someone better off without making someone else worse off.

**Why it matters:** The FWT formalizes Adam Smith's invisible hand and provides the efficiency justification for market economies. It says that under ideal conditions, decentralized market outcomes are efficient without any central coordination. The proof uses contradiction: if a CE were not PO, there would be a feasible allocation making everyone better off; summing budget constraints and using LNS gives a contradiction. The FWT holds under surprisingly weak assumptions — LNS is essentially all that is needed on the preference side.

**Exam tip:** FWT questions focus on: (a) when it fails (externalities, public goods, market power, incomplete markets, non-LNS preferences), and (b) the role of LNS in the proof. The counterexample without LNS is a bliss point: a satiated consumer can be at a CE that is inefficient because there are Pareto improvements that require taking goods away from the satiated agent.

**Also see:** [Equation Explainer — Welfare Theorems](./EQUATION-EXPLAINER.md#eq-welfare-theorems)

<a id="detail-term-second-welfare-theorem"></a>
### **Second Welfare Theorem**

**What it is:** The Second Welfare Theorem (SWT) is the converse of the FWT: any Pareto optimal allocation can be decentralized as a competitive equilibrium with appropriate lump-sum transfers, provided that preferences and production sets are convex. The government redistributes initial endowments via lump-sum transfers (which do not distort incentives), and then markets operate freely to reach the desired PO allocation as a CE.

**Why it matters:** The SWT separates efficiency from equity. The FWT says "free markets are efficient." The SWT says "any efficient allocation can be achieved through markets after redistribution." This implies that society can pursue distributional goals without sacrificing efficiency — as long as transfers are lump-sum. The convexity requirement is the key limitation: with increasing returns to scale (non-convex production), some PO allocations cannot be decentralized because the price-taking assumption breaks down (natural monopoly).

**Exam tip:** Examiners ask: (a) compare FWT and SWT, (b) why convexity is needed for the SWT (without convexity, the separating hyperplane theorem fails), (c) why lump-sum transfers are essential (distortionary taxes break the CE conditions). The SWT requires stronger assumptions than the FWT — specifically convexity of both preferences and production.

**Also see:** [Equation Explainer — Welfare Theorems](./EQUATION-EXPLAINER.md#eq-welfare-theorems)

<a id="detail-term-hicks-kaldor"></a>
### **Hicks-Kaldor Compensation**

**What it is:** The Hicks-Kaldor compensation criterion says a policy change is efficient if the gainers could (hypothetically) compensate the losers and still be better off. Actual compensation does not need to be paid — only the potential to compensate matters. This relaxes the Pareto criterion, which requires that no one be made worse off. Hicks-Kaldor compares the sum of gains against the sum of losses: if the net gain is positive, the change passes the test.

**Why it matters:** Almost all real-world policy changes create both winners and losers. The Pareto criterion is too strict to evaluate any real policy. Hicks-Kaldor provides the theoretical foundation for cost-benefit analysis: calculate whether total benefits exceed total costs. The criterion links directly to CV and EV: a policy passes Kaldor-Hicks if the sum of EVs (or CVs) across individuals is positive. For quasilinear utility, this is equivalent to total surplus maximization.

**Exam tip:** The key weakness of Hicks-Kaldor is the Scitovsky paradox: a change and its reversal can both pass the test, creating ambiguity. The Scitovsky Double Test resolves this. Examiners ask: (a) why Pareto is too strict for policy evaluation, (b) when Kaldor-Hicks is reliable (quasilinear utility, small changes), (c) how to apply it using compensating variation. Remember: "hypothetical compensation" means no actual transfers — a policy that makes the rich richer and the poor poorer could pass Kaldor-Hicks.

**Also see:** [Equation Explainer — Kaldor-Hicks & Scitovsky](./EQUATION-EXPLAINER.md#eq-kaldor-hicks)

<a id="detail-term-scitovsky-double-test"></a>
### **Scitovsky Double Test**

**What it is:** The Scitovsky Double Test fixes the Kaldor-Hicks paradox by adding a reversal test. The double test requires: (1) the gainers from the proposed change can compensate the losers (standard Kaldor-Hicks), AND (2) the losers cannot bribe the gainers to oppose the change (reversal test). If both hold, the change is unambiguously efficient. The reversal test rules out the paradox where both a change and its reversal pass Kaldor-Hicks.

**Why it matters:** The Kaldor-Hicks paradox occurs when utility possibility frontiers cross: moving from A to B makes some better off, but moving back from B to A also makes some better off because relative prices shift the feasible compensation set. This violates the principle that efficiency comparisons should be unambiguous. The Scitovsky Double Test resolves this by requiring that the proposed change is an unambiguous potential improvement. It is the gold standard for compensation-based welfare comparisons.

**Exam tip:** The exam question: "Explain the Scitovsky paradox and how the double test resolves it." The paradox arises when UPFs cross. The double test checks both the original and the reversal. If a change passes both, it is definitely efficient. For small (marginal) changes, UPFs do not cross, so the paradox does not arise. The Scitovsky test is theoretically correct but rarely used in practice — CBA typically relies on Kaldor-Hicks alone.

**Also see:** [Equation Explainer — Kaldor-Hicks & Scitovsky](./EQUATION-EXPLAINER.md#eq-kaldor-hicks)

<a id="detail-term-coase-theorem"></a>
### **Coase Theorem**

**What it is:** The Coase Theorem states that with well-defined property rights and zero transaction costs, private bargaining between affected parties will achieve an efficient outcome regardless of the initial allocation of property rights. If a factory pollutes a laundry, the two parties can negotiate until the efficient level of pollution is reached. The initial assignment of rights determines who pays whom, but not the final allocation as long as income effects are small.

**Why it matters:** The Coase Theorem challenges the Pigouvian view that externalities always require government intervention (taxes or regulations). Coase argued that private bargaining can solve externality problems on its own if transaction costs are low. The theorem shifts attention from "who should be held liable" to "how to reduce transaction costs." It is the foundation of law and economics. The key insight: externalities are reciprocal — preventing pollution harms the factory just as pollution harms the laundry — so the question is which harm is larger.

**Exam tip:** Coase is tested in three ways: (a) state the theorem and its three conditions (property rights, zero transaction costs, rational bargaining), (b) show how it breaks down with transaction costs, and (c) compare Coase vs Pigou (taxes vs bargaining). The theorem also requires that there are no wealth effects on the efficient outcome (quasilinear utility). With large income effects, the initial allocation of rights changes the efficient allocation itself. The theorem does NOT claim efficiency is guaranteed regardless of transaction costs — it says the opposite: with positive TC, the initial allocation matters.

**Also see:** [Equation Explainer — Pigou, Coase, Tariff DWL](./EQUATION-EXPLAINER.md#eq-extern-trade)

<a id="detail-term-folk-theorem"></a>
### **Folk Theorem**

**What it is:** The Folk Theorem states that in an infinitely repeated game, any feasible payoff profile that Pareto dominates the minimax payoff can be sustained as a subgame perfect Nash equilibrium if players are sufficiently patient (the discount factor $\delta$ is high enough). Cooperation is sustained by the threat of punishment: deviation triggers a loss of future cooperation worth more than the one-time gain from cheating. The critical discount factor is $\delta^* = (\pi_d - \pi_c) / (\pi_d - \pi_p)$.

**Why it matters:** The Folk Theorem explains how cooperation can emerge and persist where the one-shot game predicts defection (e.g., Prisoners' Dilemma). It is central to oligopoly theory (collusion), international agreements (trade, climate), and social norms. The theorem shows that the set of possible equilibrium outcomes expands dramatically when games are repeated indefinitely. The grim trigger strategy is the simplest enforcement mechanism: cooperate as long as others have, punish any deviation by reverting to the one-shot Nash equilibrium forever.

**Exam tip:** The key exam question: "Derive the critical discount factor for sustaining collusion." Set up: cooperate payoff $\ge$ deviate payoff. Cooperative profit: $\pi_c/(1-\delta)$. Deviation profit: $\pi_d + \delta\pi_p/(1-\delta)$. Solve for $\delta$. For grim trigger punishment, $\delta^* = (\pi_d - \pi_c)/(\pi_d - \pi_p)$. Common mistake: forgetting that after punishment the game may revert to cooperation (with finite punishment, $\delta^*$ is lower). The Folk Theorem requires infinite horizon; in finitely repeated games with known end, backward induction unravels cooperation (the Chain-Store Paradox).

**Also see:** [Equation Explainer — Folk Theorem & Spence](./EQUATION-EXPLAINER.md#eq-folk-spence)

<a id="detail-term-samuelson-condition"></a>
### **Samuelson Condition**

**What it is:** The Samuelson Condition is the efficiency condition for a pure public good: $\sum_i MRS^i_{G,x} = MRT_{G,x}$. The sum of all consumers' marginal rates of substitution between the public good $G$ and a private good $x$ must equal the marginal rate of transformation (marginal cost in terms of the private good). For a private good, efficiency requires each consumer's MRS to equal MRT individually (markets do this through prices). For a public good, since consumption is non-rival, everyone consumes the same quantity, so their marginal benefits sum.

**Why it matters:** The Samuelson Condition (1954) defines the efficient level of public goods and is the foundation of public economics. It reveals the fundamental difference between private and public goods: private goods are rival (one person's consumption excludes another's), so prices allocate them efficiently; public goods are non-rival, so efficiency requires adding up everyone's marginal benefits. The condition also explains why markets underprovide public goods: individuals have incentives to free-ride, revealing lower willingness to pay than their true MRS, so voluntary contributions lead to underprovision.

**Exam tip:** Questions ask: (a) derive the condition from the social welfare maximization problem, (b) compare with private good efficiency ($MRS = MRT$ individually), (c) explain why free-riding causes underprovision. For private goods: $MRS_A = MRS_B = MRT$. For public goods: $MRS_A + MRS_B = MRT$. The condition holds at the Lindahl equilibrium where each consumer pays a personalized price equal to their MRS. Without exclusion, the Lindahl equilibrium is not incentive-compatible.

<a id="detail-term-lerner-index"></a>
### **Lerner Index**

**What it is:** The Lerner Index measures market power as the markup of price over marginal cost as a fraction of price: $L = (P - MC)/P = -1/\varepsilon$, where $\varepsilon$ is the firm's own-price elasticity of demand. Under perfect competition, $P = MC$, so $L = 0$. Under monopoly, the profit-maximizing markup is inversely proportional to demand elasticity: the less elastic demand, the larger the markup. A monopolist always operates where demand is elastic ($|\varepsilon| > 1$), so $L \in (0,1)$.

**Why it matters:** The Lerner Index is the standard measure of market power in industrial organization and competition policy. It links market structure to pricing behavior. The same markup can arise from high market power with moderately elastic demand or from low market power with very elastic demand — so market share alone is insufficient to infer market power. The inverse elasticity rule ($P = MC / (1 + 1/\varepsilon)$) is the monopoly pricing formula. Higher Lerner Index values imply larger DWL triangles.

**Exam tip:** The Lerner Index appears in: (a) monopoly profit-maximization (derive $P = MC/(1+1/\varepsilon)$ from the FOC), (b) comparing market power across industries, (c) Cournot oligopoly where $L_i = s_i / \varepsilon$ (market share times inverse market elasticity). Common mistake: using market demand elasticity instead of the firm's demand elasticity. For a monopolist they are the same. For oligopoly, the firm's elasticity is the market elasticity divided by its market share. The Lerner Index cannot exceed 1.

**Also see:** [Equation Explainer — Elasticities & Lerner Index](./EQUATION-EXPLAINER.md#eq-elasticities)

<a id="detail-term-arrow-debreu-existence"></a>
### **Arrow-Debreu Existence**

**What it is:** The Arrow-Debreu existence theorem (1954) establishes conditions under which a competitive (Walrasian) general equilibrium exists. The aggregate excess demand function $z(p)$ must satisfy: (1) continuity, (2) homogeneity of degree zero, (3) Walras' Law ($p \cdot z(p) = 0$), and (4) boundary behavior (as any price approaches zero, excess demand becomes positive; as it goes to infinity, excess demand becomes negative). Under these conditions, there exists a price vector $p^* > 0$ such that $z(p^*) = 0$.

**Why it matters:** Before Arrow-Debreu, economists assumed GE existed because the number of equations equaled the number of unknowns. Arrow and Debreu showed that counting is not enough — the system could have no solution, multiple solutions, or only complex-number solutions. They provided the rigorous mathematical foundation for GE theory. The proof uses either the Intermediate Value Theorem (one good) or Brouwer/Kakutani Fixed Point Theorems (multiple goods). The boundary condition is economically meaningful: no good is so expensive that demand drops to zero, and no good is free (zero price would mean infinite demand).

**Exam tip:** The proof structure is the key exam topic: (1) normalize prices to the simplex, (2) define a continuous mapping from prices to excess demands, (3) construct a price-adjustment mapping pointing toward higher prices for goods with excess demand, (4) apply Brouwer/Kakutani to find a fixed point, (5) use Walras' Law to show the fixed point clears all markets. The boundary condition prevents prices from hitting zero. Arrow-Debreu requires complete markets, convexity, and no externalities — without these, existence may fail.

**Also see:** [Equation Explainer — GE Properties (Existence)](./EQUATION-EXPLAINER.md#eq-ge-properties)

<a id="detail-term-arrow-impossibility"></a>
### **Arrow's Impossibility Theorem**

**What it is:** Arrow's Impossibility Theorem (1951) proves that no social welfare function can simultaneously satisfy four seemingly reasonable axioms: (1) universal domain (the SWF must work for any set of individual preferences), (2) Pareto efficiency (if everyone prefers $x$ to $y$, society must prefer $x$ to $y$), (3) independence of irrelevant alternatives (the ranking of $x$ and $y$ depends only on individuals' rankings of $x$ and $y$, not on other alternatives), and (4) non-dictatorship (no single individual determines the social ranking). Any preference aggregation rule must violate at least one.

**Why it matters:** Arrow's theorem is the founding result of social choice theory. It shows there is no perfect way to aggregate individual preferences into a social decision — democracy, voting, and collective choice are inherently imperfect. This is not a criticism of democracy; it is a mathematical impossibility result showing any aggregation method must sacrifice at least one desirable property. The theorem explains why majority voting can produce cycles (Condorcet paradox), why agenda-setting matters, and why there is no ideal voting system. It separates Bergson-Samuelson's approach (which uses cardinal utility and value judgements) from Arrovian aggregation (mechanical ranking of ordinal preferences).

**Exam tip:** Arrow's theorem is tested as: (a) state the four axioms and explain why each is reasonable, (b) show how majority voting violates IIA, or (c) explain how the Bergson-Samuelson SWF avoids Arrow by using cardinal utility with interpersonal comparisons. If you use cardinal utility with interpersonal comparisons, Arrow's impossibility does not apply. Common mistake: confusing Arrow with the Condorcet paradox (which is just one illustration of Arrow's more general result).

<a id="detail-term-bergson-samuelson-swf"></a>
### **Bergson-Samuelson SWF**

**What it is:** The Bergson-Samuelson social welfare function is $W = W(u_1, u_2, \dots, u_n)$, a direct function of individual utilities that incorporates explicit value judgements about distribution. It ranks social states by mapping utility vectors into a social welfare number. Common forms include the utilitarian SWF ($W = \sum u_i$), the Rawlsian SWF ($W = \min_i u_i$), and the Nash SWF ($W = \prod u_i$). Unlike Arrow's approach (which aggregates preference rankings), Bergson-Samuelson starts with individual utility functions and applies a normative weighting scheme chosen by the analyst.

**Why it matters:** The Bergson-Samuelson SWF is the workhorse tool for normative welfare analysis. It enables economists to evaluate trade-offs between efficiency and equity. Given the Grand Utility Possibility Frontier, the social optimum (point of bliss) occurs where the GUPF is tangent to the highest attainable SWF indifference curve. The SWF converts the multi-dimensional problem of income distribution into a single-objective optimization. It is used for optimal taxation, public good provision, and cost-benefit analysis. The Samuelson Condition for public goods is derived within the Bergson-Samuelson framework.

**Exam tip:** The key distinction: Arrow's impossibility applies to SWFs that rank ordinal preference profiles; Bergson-Samuelson uses cardinal utility with interpersonal comparisons, which avoids Arrow entirely. Exam questions ask: (a) compare Bergson-Samuelson and Arrow approaches, (b) derive the social optimum as tangency between GUPF and SWF, (c) show how utilitarian vs Rawlsian SWFs give different optimal distributions. Remember: Bergson-Samuelson requires explicit value judgements — different SWFs give different "optimal" allocations, and the choice of SWF is itself a normative decision.

<a id="detail-term-chain-store-paradox"></a>
### **Chain-Store Paradox**

**What it is:** The Chain-Store Paradox illustrates the tension between backward induction in finite games and observed behavior. In a finitely repeated entry deterrence game, an incumbent faces potential entry in multiple markets sequentially. Backward induction predicts the incumbent will never fight entry (even in the first market) because fighting is costly and there are no future markets to protect after the last one. But in practice, incumbents often fight early entry to build a reputation for toughness. The paradox is that subgame perfection predicts the opposite of what we observe.

**Why it matters:** The Chain-Store Paradox (Selten, 1978) is the foundational critique of backward induction in finite games. It shows that SPNE may not be a good predictor when there are many rounds and reputation effects are large. The paradox is resolved by introducing incomplete information (Kreps-Wilson model): if there is even a small probability the incumbent is "irrational" (naturally likes to fight), then reputation can sustain deterrence. This connects game theory to the economics of reputation, signaling, and the Folk Theorem. The paradox explains why real-world chain stores fight early entrants even when pure backward induction says they should not.

**Exam tip:** The exam question: "Explain the Chain-Store Paradox and how it can be resolved." Steps: (1) set up the finite entry game, (2) show backward induction unraveling from the last period, (3) state the paradox (prediction contradicts observation), (4) resolve via incomplete information (Kreps-Wilson) or bounded rationality. Common mistake: confusing the paradox with the Folk Theorem. The Chain-Store Paradox is about finite games with reputation; the Folk Theorem is about infinite games with punishment. The paradox shows why we need the Folk Theorem logic even in finite-horizon settings when information is imperfect.

<a id="detail-term-compensated-law-demand"></a>
### **Compensated Law of Demand**

**What it is:** The Compensated Law of Demand states that Hicksian (compensated) demand never increases when its own price rises: $\partial h_k(p,u)/\partial p_k \le 0$ for all $k$. This follows from concavity of the expenditure function $e(p,u)$ in prices. Shephard's Lemma gives $h_k = \partial e/\partial p_k$, and concavity implies $\partial^2 e / \partial p_k^2 = \partial h_k / \partial p_k \le 0$. Unlike Marshallian demand, which can slope upward (Giffen goods), Hicksian demand is always downward-sloping as long as preferences are well-behaved.

**Why it matters:** The Compensated Law of Demand is the only unconditional prediction of consumer theory about the sign of a demand slope. Marshallian demand can go either way (Giffen goods), but compensated demand is always non-positive. This makes Hicksian demand the theoretically reliable concept for welfare analysis: CV and EV always have the correct sign even when Marshallian demand is backward-bending. The result is equivalent to the negative semidefiniteness of the Slutsky matrix.

**Exam tip:** The proof chain: (1) $e(p,u)$ is concave in $p$ (from cost minimization), (2) Shephard's Lemma: $h_k = \partial e/\partial p_k$, (3) $\partial h_k/\partial p_k = \partial^2 e/\partial p_k^2 \le 0$ by concavity. Common mistake: calling this the "Law of Demand" without clarifying it applies to Hicksian, not Marshallian demand. Giffen goods violate the Law of Demand for Marshallian demand but NOT for Hicksian — the compensated demand still slopes down; it is the income effect that is perverse.

**Also see:** [Equation Explainer — EMP & Shephard's Lemma](./EQUATION-EXPLAINER.md#eq-emp-shephard)

<a id="detail-term-eulers-theorem"></a>
### **Euler's Theorem**

**What it is:** Euler's theorem for homogeneous functions states that if $f$ is homogeneous of degree $r$, then $\sum_k (\partial f/\partial x_k) \cdot x_k = r f(x)$. For a CRTS production function ($r=1$), this gives $f = f_K \cdot K + f_L \cdot L$ — total output equals the sum of each factor's marginal product times its quantity. This is the product exhaustion result: paying each factor its marginal product exactly exhausts total output.

**Why it matters:** Euler's theorem is the mathematical foundation for the marginal productivity theory of distribution. Under CRTS and perfect competition, if factors are paid their marginal products, total output is exactly distributed as factor payments. This justifies factor pricing: labour earns $MP_L \cdot L$, capital earns $MP_K \cdot K$, with no surplus or deficit. The theorem also connects returns to scale: the sum of output elasticities equals the degree of homogeneity. Euler's theorem is used to derive cost function properties (HD(1)) and to verify homogeneity restrictions on demand.

**Exam tip:** Euler's theorem appears in production problems: (a) verify CRTS using Euler's, (b) show that with CRTS the profit-maximizing firm earns zero profit, (c) apply to check homogeneity of demand functions (for HD(0) demand: $\sum p_k \cdot \partial x_i / \partial p_k + w \cdot \partial x_i / \partial w = 0$). Common mistake: forgetting to multiply by the degree of homogeneity. For HD(2), output is twice the sum of marginal products times inputs. The theorem only applies to differentiable homogeneous functions.

**Also see:** [Equation Explainer — Homogeneity Properties](./EQUATION-EXPLAINER.md#eq-homogeneity)

<a id="detail-term-fixed-point-theorems"></a>
### **Fixed Point Theorems** (Brouwer/Kakutani)

**What it is:** Brouwer's Fixed Point Theorem states that any continuous function $f$ mapping a compact convex set into itself has a fixed point $x^*$ such that $f(x^*) = x^*$. Kakutani's theorem extends this to correspondences (set-valued functions) that are upper hemicontinuous, compact, convex-valued, and map a compact convex set into itself. In economics, we use these to prove the existence of general equilibrium: define a continuous mapping from prices to adjusted prices (raising prices for goods in excess demand), and the fixed point is an equilibrium price vector.

**Why it matters:** Fixed point theorems are the mathematical engine behind all existence proofs in economics. Arrow-Debreu GE existence, Nash equilibrium existence, and equilibrium in games all rely on fixed point arguments. The intuition: from any initial price vector, consumers and firms optimize, creating excess demands; we adjust prices in the direction of excess demand; a fixed point of this process is a price vector where no adjustment is needed — all markets clear. Without these theorems, we could not prove that equilibrium exists in any setting with interdependent markets or strategic interaction.

**Exam tip:** The exam asks: (a) state Brouwer's theorem, (b) show how it is used in the Arrow-Debreu proof (construct the price-adjustment mapping, apply Brouwer, use Walras' Law to verify the fixed point clears markets), (c) distinguish Brouwer (functions) from Kakutani (correspondences). Brouwer suffices when the excess demand function is continuous; Kakutani is needed when best-response correspondences are set-valued (as in Nash equilibrium). The continuity of $z(p)$ is essential — if discontinuous, Brouwer does not apply and equilibrium may not exist.

<a id="detail-term-gross-substitutes"></a>
### **Gross Substitutes Condition**

**What it is:** The Gross Substitutes condition states that when the price of good $j$ rises, the excess demand for every other good $i \neq j$ increases: $\partial z_i(p)/\partial p_j > 0$ for all $i \neq j$. All goods are gross substitutes: raising the price of one good shifts demand toward all others. This is a strong condition — it implies no complementarity relationships exist. When gross substitutes holds, the general equilibrium is unique and globally stable under tâtonnement.

**Why it matters:** Gross substitutes is the most important sufficient condition for uniqueness and stability of GE. Without it, multiple equilibria can exist (some stable, some unstable), and comparative statics become ambiguous. The condition is economically meaningful: it means the economy behaves as if all goods compete for the consumer's budget. Gross substitutes holds for many standard models (Cobb-Douglas, CES with $\rho \in [0,1]$, quasilinear). When it fails, GE comparative statics require more careful analysis.

**Exam tip:** "What conditions guarantee a unique general equilibrium?" The answer is gross substitutes. The condition is sufficient but not necessary — uniqueness can hold without it, but it is not guaranteed. Common mistake: confusing gross substitutes (Marshallian) with net substitutes (Hicksian). Gross substitutes uses Marshallian excess demand; net substitutes uses Hicksian compensated demand. The relationship: gross substitutes $\Rightarrow$ unique, stable equilibrium.

**Also see:** [Equation Explainer — GE Properties (Uniqueness)](./EQUATION-EXPLAINER.md#eq-ge-properties)

<a id="detail-term-stolper-samuelson"></a>
### **Stolper-Samuelson Theorem**

**What it is:** The Stolper-Samuelson Theorem (1941) states that an increase in the relative price of a good raises the real return to the factor used intensively in its production and lowers the real return to the other factor. In the standard 2x2 Heckscher-Ohlin model (two goods, two factors), if the price of the labour-intensive good rises, the real wage rises (in terms of both goods) and the real return to capital falls. This is the magnification effect: price changes are amplified in factor prices.

**Why it matters:** The Stolper-Samuelson Theorem is the central result in the political economy of trade policy. It predicts trade liberalization creates winners and losers along factor lines. Workers in labour-abundant countries gain (prices of labour-intensive exports rise), while capital owners lose — and the opposite in capital-abundant countries. This explains why trade policy is contentious: even though trade is efficient overall, the distributional effects are large and concentrated. The result relies on factor mobility between sectors (long-run), which is why trade adjustment is painful in the short run.

**Exam tip:** The exam setup: "Using the 2x2 model, show the effect of a tariff on factor prices." Derive: (1) product prices change by the tariff, (2) zero-profit conditions link prices to factor prices, (3) the intensive factor gains disproportionately. The key mathematics: $\hat{w} > \hat{p}_L > \hat{p}_K > \hat{r}$ (magnification effect), where hats denote percentage changes. Common mistake: applying Stolper-Samuelson to sector-specific factors (it requires factor mobility across sectors. With sector-specific capital, the Rybczynski theorem applies instead.)

<a id="detail-term-single-crossing-condition"></a>
### **Single-Crossing Condition**

**What it is:** The Single-Crossing Condition (Spence-Mirrlees condition) states that the marginal cost of taking an action differs across types in a way that enables separation. In Spence's signaling model, the condition is $c'(e, \theta_H) < c'(e, \theta_L)$: high-productivity workers find education less costly at the margin than low-productivity workers. More generally, the condition ensures indifference curves of different types cross only once, so higher types are willing to take more of the costly action to separate themselves from lower types.

**Why it matters:** The Single-Crossing Condition is the key necessary condition for a separating equilibrium in signaling and screening models. Without it, different types cannot be distinguished by their actions because they face the same marginal trade-off. The condition appears in Spence's job market signaling, Rothschild-Stiglitz's insurance screening (low-risk types accept more deductibles), and mechanism design (the monotone likelihood ratio property). When the condition holds, higher types can credibly signal their type. When it fails, only pooling (or no) equilibrium exists.

**Exam tip:** The exam question: "What is the Single-Crossing Condition and why is it necessary for a separating equilibrium?" Derive: (1) indifference curves of high and low types in $(e,w)$ space, (2) show they cross only once if $c'_H < c'_L$, (3) show that a separating contract must give high types enough education to make mimicking unattractive to low types. Common mistake: thinking the condition is about total costs rather than marginal costs. The condition can be written as $|MRS_H| > |MRS_L|$: high types have steeper indifference curves because signaling costs them less at the margin.

**Also see:** [Equation Explainer — Folk Theorem & Spence](./EQUATION-EXPLAINER.md#eq-folk-spence)

<a id="detail-term-tatonnement"></a>
### **Walrasian Tâtonnement**

**What it is:** Walrasian Tâtonnement is a price adjustment process describing how a market might move toward equilibrium. Prices adjust continuously in response to excess demand: $\dot{p}_i = k_i \cdot z_i(p)$, where $k_i > 0$ is the adjustment speed. If good $i$ has positive excess demand, its price rises; if negative, its price falls. The process is called "tâtonnement" (French for "groping") because Walras imagined an auctioneer who calls out prices, collects bids and offers, and adjusts prices until all markets clear — with no actual trades occurring until equilibrium is reached.

**Why it matters:** Existence proves an equilibrium price vector exists, but does not tell us how the market reaches it. Tâtonnement addresses stability: does the economy converge from any starting point? A GE is locally stable if $dE/dP < 0$ at equilibrium. Under gross substitutes, tâtonnement is globally stable. The process is idealized (real markets trade out of equilibrium, and the no-trade-before-equilibrium assumption is unrealistic), but it provides the theoretical foundation for thinking about price dynamics and the price system as a coordination mechanism.

**Exam tip:** The exam covers: (a) the tâtonnement equation $\dot{p}_i = k_i z_i(p)$, (b) stability conditions ($dE/dP < 0$ locally), (c) the four stability cases: unique stable, unique unstable, multiple equilibria alternating stable/unstable, no equilibrium. Draw these! Common mistake: thinking tâtonnement describes actual market dynamics — it is a theoretical construct. Also, tâtonnement can fail to converge with income effects (the Scarf example shows a stable limit cycle under tâtonnement with three goods). Gross substitutes is sufficient for global stability.

**Also see:** [Equation Explainer — GE Properties (Stability)](./EQUATION-EXPLAINER.md#eq-ge-properties)

---

## 4. Key Models & Functions

<a id="detail-term-cobb-douglas"></a>
### **Cobb-Douglas**

**What it is:** The Cobb-Douglas function is $u(x_1, x_2) = x_1^\alpha x_2^\beta$ (or more generally $u = \prod x_i^{\alpha_i}$ with $\alpha_i > 0$). It is homogeneous of degree $\alpha + \beta$ (often normalized to 1). Demand has closed-form solutions for all four core problems: Walrasian demand ($x_i = \alpha_i w / p_i$), indirect utility ($v = w \prod (\alpha_i/p_i)^{\alpha_i}$), Hicksian demand ($h_i = \alpha_i u \prod (p_j/\alpha_j)^{\alpha_j} / p_i$), and expenditure function ($e = u \prod (p_i/\alpha_i)^{\alpha_i}$).

**Why it matters:** Cobb-Douglas is the workhorse model across all microeconomics — consumer theory, production theory ($Q = K^\alpha L^{1-\alpha}$), and welfare analysis. Its tractability makes it ideal for exams and introductory proofs. Key properties: homothetic (Engel curves are linear through the origin), constant expenditure shares, elasticity of substitution $\sigma = 1$, own-price elasticity $\varepsilon = -1$, income elasticity $\eta = 1$. The log-transform is linear: $\ln u = \sum \alpha_i \ln x_i$, amenable to OLS estimation. In production, CRTS requires $\alpha + \beta = 1$.

**Exam tip:** CD is the default model when an exam says "assume a standard utility function." Check whether exponents sum to 1 (most common) or not. The expenditure share property is the fastest route: $p_i x_i / w = \alpha_i / (\sum \alpha_j)$. Write demand down immediately without solving the Lagrangian. For welfare, CD gives simple CV and EV formulas. Common mistake: assuming CD for goods with non-unit elasticities — CD implies $\varepsilon = -1$ and $\eta = 1$ always, so if the answer gives different elasticities, CD is the wrong model.

<a id="detail-term-ces"></a>
### **CES**

**What it is:** The CES (Constant Elasticity of Substitution) function is $u(x_1, \dots, x_n) = (\sum x_i^\rho)^{1/\rho}$ with $\rho \le 1$, $\rho \neq 0$. The parameter $\rho$ determines the elasticity of substitution: $\sigma = 1/(1-\rho)$. The CES nests three special cases: as $\rho \to 1$, $\sigma \to \infty$ (perfect substitutes), as $\rho \to 0$, $\sigma \to 1$ (Cobb-Douglas), and as $\rho \to -\infty$, $\sigma \to 0$ (Leontief). A more general form allows weights: $u = (\sum \alpha_i x_i^\rho)^{1/\rho}$.

**Why it matters:** CES is the most flexible functional form that still gives tractable demand functions. Its key property — constant but adjustable $\sigma$ — captures a full range of substitution possibilities. CES is used in: (1) production functions (macroeconomics: $Y = [\alpha K^\rho + (1-\alpha)L^\rho]^{1/\rho}$), (2) trade models (Armington assumption: goods differentiated by origin), (3) monopolistic competition (Dixit-Stiglitz preferences), and (4) empirical demand estimation. CES is homothetic. With CRTS the outer exponent is 1. Demand for good $i$ is $x_i = (w / \sum p_j^{1-\sigma}) \cdot p_i^{-\sigma} \alpha_i^\sigma$.

**Exam tip:** Memorize $\sigma = 1/(1-\rho)$. The limit cases are the most tested: "What happens as $\rho$ approaches 1, 0, or $-\infty$?" Also, CES does NOT have constant expenditure shares (unlike CD) — the ratio of expenditures depends on relative prices: $p_i x_i / (p_j x_j) = (\alpha_i / \alpha_j)^\sigma (p_i / p_j)^{1-\sigma}$. Common mistake: applying the CD share property to CES — it only works for CD ($\sigma = 1$). Note that $\rho = 0$ is undefined; the CD limit requires L'Hôpital's rule.

**Also see:** [Equation Explainer — MRTS & Elasticity of Substitution](./EQUATION-EXPLAINER.md#eq-mrts-eos)

<a id="detail-term-leontief"></a>
### **Leontief**

**What it is:** The Leontief (perfect complements) function is $u(x_1, \dots, x_n) = \min(x_1/a_1, x_2/a_2, \dots, x_n/a_n)$. The elasticity of substitution $\sigma = 0$ — goods must be consumed in fixed proportions regardless of relative prices. Indifference curves are L-shaped with the kink on the ray where $x_1/a_1 = x_2/a_2 = \dots$. The consumer always consumes at the kink because the optimal bundle equalizes the ratios.

**Why it matters:** Leontief represents goods that must be consumed together in fixed proportions — left and right shoes, coffee and filters, cars and tires. It is the extreme case of zero substitutability. In production, Leontief describes fixed-coefficient technologies (e.g., one tractor per driver) and is the basis of input-output analysis. The model breaks the standard calculus approach because the function is non-differentiable at the optimum — solutions are found by solving the proportion condition, not by setting derivatives to zero.

**Exam tip:** Leontief problems are solved algebraically, not with calculus. Set $x_1/a_1 = x_2/a_2 = \dots = t$, substitute into the budget: $p_1 (a_1 t) + p_2 (a_2 t) + \dots = w$, solve for $t$, then $x_i = a_i t$. Demand is linear in wealth and inversely proportional to a weighted price index. Since all goods are consumed in fixed proportions, a price increase for one good reduces demand for all — they are complements. Common mistake: trying to use MRS or Lagrangian — the Leontief function is not differentiable at the optimum, so the FOC does not apply.

**Also see:** [Equation Explainer — MRTS & Elasticity of Substitution](./EQUATION-EXPLAINER.md#eq-mrts-eos)

<a id="detail-term-quasilinear"></a>
### **Quasilinear**

**What it is:** A quasilinear utility function is $u(x_1, x_2, \dots, x_n) = x_1 + \varphi(x_2, \dots, x_n)$, where good 1 is the "numeraire" (enters linearly) and other goods enter through a possibly nonlinear $\varphi$. The critical property: zero income effects for goods $2, \dots, n$. Demand for non-numeraire goods depends only on prices, not on income — all adjustment to income changes occurs through the numeraire. Engel curves for non-numeraire goods are flat. The model is not homothetic unless $\varphi$ is HD(1), which is rarely the case.

**Why it matters:** Quasilinear utility is the model of choice when you want to eliminate income effects to simplify analysis. It is used in: (1) welfare analysis (CV = EV = CS when there are no income effects), (2) partial equilibrium (Marshallian and Hicksian demand coincide for non-numeraire goods), (3) public goods (Lindahl equilibrium is efficient and unique), (4) auction theory, and (5) mechanism design (VCG, pivot mechanism). Quasilinear utility enables aggregation: total surplus ($CS + PS$) is a valid welfare measure because utility is transferable through the numeraire.

**Exam tip:** Identify quasilinear utility when income drops out of the FOC for good 2. The welfare equivalence CV = EV = CS is the most tested property — all three equal the area under the demand curve. Common mistake: assuming quasilinear implies all goods have zero income effects — only the goods in the nonlinear part have zero income effects; the numeraire absorbs all income changes. Also, quasilinear is NOT homothetic (the MRS depends on absolute levels, not just ratios), so Engel curves are not linear through the origin.

**Also see:** [Equation Explainer — Welfare Measures (CV/EV/CS ordering)](./EQUATION-EXPLAINER.md#eq-ordering)

<a id="detail-term-homothetic"></a>
### **Homothetic**

**What it is:** A homothetic utility function is a monotonic transformation of a function that is homogeneous of degree 1: $u(x) = F(g(x))$ where $g(tx) = t g(x)$ and $F' > 0$. The key property: the MRS at $(tx_1, tx_2)$ equals the MRS at $(x_1, x_2)$ — preferences depend only on the ratio of goods, not on scale. Engel curves are straight lines through the origin: $x(p,w) = w \cdot x(p,1)$. Demand is proportional to wealth, and budget shares are constant along rays from the origin.

**Why it matters:** Homotheticity simplifies GE problems enormously. With homothetic preferences and identical consumers, the contract curve is linear, and aggregate demand behaves like a single consumer's demand (Gorman form). In GE, homotheticity plus identical preferences implies that relative prices depend only on endowments, not on distribution — distribution independence. Cobb-Douglas and CES are homothetic; quasilinear and Stone-Geary are not (unless subsistence parameters are zero). Homotheticity is the key assumption for aggregation across consumers.

**Exam tip:** Test homotheticity: compute the MRS and check if it depends only on the ratio $x_1/x_2$. For CD: $MRS = (\alpha/\beta)(x_2/x_1)$ — only the ratio matters. For CES: $MRS = (x_1/x_2)^{\rho-1}$ — only the ratio. For quasilinear: $MRS = 1/\varphi'(x_2)$ — depends on $x_2$ alone, not on $x_1$ or scale proportionally, so quasilinear is NOT homothetic. Common mistake: thinking all "standard" utility functions are homothetic — many are not.

**Also see:** [Equation Explainer — Homothetic Preferences](./EQUATION-EXPLAINER.md#eq-homothetic)

<a id="detail-term-log-linear-demand"></a>
### **Log-linear Demand**

**What it is:** Log-linear (constant elasticity) demand is $X = \alpha P^\gamma P_Z^\delta I^\eta$, where $\gamma$ is own-price elasticity, $\delta$ is cross-price elasticity, and $\eta$ is income elasticity. Taking logs: $\ln X = \ln\alpha + \gamma \ln P + \delta \ln P_Z + \eta \ln I$. All elasticities are constant — they do not depend on levels of prices or income. Homogeneity of degree zero requires $\gamma + \delta + \eta = 0$: doubling all prices and income leaves demand unchanged.

**Why it matters:** Log-linear demand is the workhorse of empirical demand estimation. It is linear in parameters (after log transformation) and estimable by OLS. The constant-elasticity property makes interpretation easy: a 1% increase in price reduces quantity by $\gamma\%$. The homogeneity restriction ($\gamma + \delta + \eta = 0$) is a testable implication of consumer theory — if estimated elasticities do not sum to zero, the demand function is inconsistent with utility maximization. Slutsky symmetry provides further cross-equation restrictions in a demand system.

**Exam tip:** The key exam problem: "Given estimated elasticities, check whether demand satisfies homogeneity." Compute $\gamma + \delta + \eta$; if zero, the function is HD(0). If not, there is money illusion. Log-linear demand is not generated by standard utility functions (CD gives $\gamma = -1, \delta = 0, \eta = 1$; CES gives non-constant elasticities). It is an approximation used for empirical convenience. Common mistake: assuming log-linear implies constant expenditure shares — this only holds if $\eta = 1$.

<a id="detail-term-linear-expenditure"></a>
### **Linear Expenditure System** (Stone-Geary)

**What it is:** The Linear Expenditure System (LES) or Stone-Geary utility function is $u = \prod (x_i - \gamma_i)^{\alpha_i}$, where $\gamma_i$ is subsistence (minimum) consumption and $\alpha_i$ is the marginal budget share. It generalizes Cobb-Douglas by adding subsistence parameters. The expenditure function is linear in prices: $e(p,u) = \sum p_i \gamma_i + u \prod (p_i/\alpha_i)^{\alpha_i}$. Demand is $x_i = \gamma_i + (\alpha_i / p_i)(w - \sum p_j \gamma_j)$: first buy subsistence quantities, then spend supernumerary income in fixed CD proportions.

**Why it matters:** The LES is the most commonly used demand system in applied analysis (along with AIDS). It is the only demand system that is simultaneously (1) consistent with utility maximization, (2) linear in total expenditure, and (3) allows non-unitary income elasticities. Engel curves are linear but not through the origin, so goods can be luxuries ($\eta_i > 1$), necessities ($0 < \eta_i < 1$), or inferior ($\eta_i < 0$) depending on the parameters. The LES is the basis for the working family of Engel curve models and is used in CGE modeling.

**Exam tip:** Stone-Geary is identified by subsistence parameters $\gamma_i$ and marginal budget shares $\alpha_i$. Income elasticity is $\eta_i = \alpha_i w / (p_i x_i)$, which approaches 1 as income grows large (goods are luxuries at low income, necessities at high income). Common mistake: thinking $\gamma_i$ is the minimum possible consumption — it is the origin shift for the utility function. If all $\gamma_i = 0$, Stone-Geary reduces to CD. The LES is not homothetic (unless all $\gamma_i = 0$), so Engel curves do not go through the origin.

<a id="detail-term-giffen-good"></a>
### **Giffen Good**

**What it is:** A Giffen good is a good whose Marshallian demand slopes upward: $\partial x/\partial p > 0$. When price rises, consumers buy more of the good, not less. This violates the Law of Demand but does NOT violate rationality — it is fully consistent with utility maximization. A Giffen good requires two conditions: (1) the good must be inferior ($\partial x/\partial w < 0$), and (2) the income effect must dominate the (always negative) substitution effect. The Slutsky equation: $\partial x/\partial p = \partial h/\partial p - x(\partial x/\partial w)$ — for a Giffen good, the positive IE term exceeds the negative SE term, giving a positive total.

**Why it matters:** Giffen goods are the most famous counterexample to the Law of Demand. They demonstrate the importance of the Slutsky decomposition: the substitution effect always pushes in one direction, but the income effect can dominate and reverse the total. Giffen goods require the good to be a large share of the budget (so the IE is large) and strongly inferior. The classic example is the Irish potato famine: when potato prices rose, poor households could not afford meat and bought even more potatoes. Giffen goods are rare (the conditions are extreme) but theoretically crucial.

**Exam tip:** The exam question: "Can a Giffen good exist? Derive using the Slutsky equation." The derivation: (1) write the Slutsky equation for own-price, (2) the SE is always negative ($\partial h/\partial p < 0$), (3) for an inferior good, $\partial x/\partial w < 0$, so the IE term ($-x \cdot \partial x/\partial w$) is positive, (4) Giffen requires $|\text{IE}| > |\text{SE}|$. Common mistake: thinking inferiority alone is sufficient — the IE must be large enough to dominate the SE. Potato was Giffen because it was a large budget share. Also, the Compensated Law of Demand still holds — it is only Marshallian demand that slopes up.

**Also see:** [Equation Explainer — Slutsky Equation](./EQUATION-EXPLAINER.md#eq-slutsky)

<a id="detail-term-income-elasticity"></a>
### **Income Elasticity Classification** (Luxury / Necessity / Inferior)

**What it is:** The income elasticity of demand $\varepsilon_{X,I} = \frac{\partial X}{\partial I} \cdot \frac{I}{X}$ measures how quantity demanded responds to a change in consumer income. The sign and magnitude classify goods into three categories. **Luxury** (income-elastic normal): $\varepsilon_{X,I} > 1$ — demand rises more than proportionally with income (e.g., restaurant meals, travel). **Necessity** (income-inelastic normal): $0 < \varepsilon_{X,I} < 1$ — demand rises less than proportionally (e.g., food, housing). **Inferior good**: $\varepsilon_{X,I} < 0$ — demand falls as income rises (e.g., public transit, generic brands, potatoes). A **normal good** has $\varepsilon_{X,I} > 0$ (luxury + necessity combined).

**Why it matters:** Income elasticity classification is fundamental for understanding Engel's Law (as income rises, the food budget share falls — food is a necessity in most economies), structural transformation (luxury goods become more important as economies grow), and poverty measurement (inferior goods can trap consumers in low-quality consumption). The distinction between luxuries and necessities is vital for: (1) tax policy — taxing necessities is regressive, (2) forecasting — luxury demand grows faster than GDP, (3) international trade — developing countries export necessities (low income elasticity → terms of trade decline over time, the Prebisch-Singer hypothesis).

**Exam tip:** Income elasticity can be derived from log-linear demand or Cobb-Douglas (where $\eta = 1$ for all goods — CD does not permit luxuries/necessities). For Stone-Geary/LES, the income elasticity of good $i$ is $\eta_i = \alpha_i w / (p_i x_i)$, which exceeds 1 when the good's budget share is small but rises as income grows. Common mistake: confusing normal goods (positive income elasticity) with necessity goods ($0 < \eta < 1$). All luxuries and necessities are normal, but only necessities are "income-inelastic normal." Engel curves: luxury → convex, necessity → concave, inferior → downward sloping.

**Also see:** [Equation Explainer — Elasticities](./EQUATION-EXPLAINER.md#eq-elasticities), [Log-linear Demand](#detail-term-log-linear-demand) (elasticity interpretation)

<a id="detail-term-perfect-substitutes"></a>
### **Perfect Substitutes**

**What it is:** Perfect substitutes utility is linear: $u(x_1, x_2) = a x_1 + b x_2$ (consumption) or $Q = aK + bL$ (production). The elasticity of substitution $\sigma = \infty$ — one input can replace the other at a constant rate. Indifference curves (or isoquants) are straight lines with slope $-a/b$. The MRS is constant: $MRS = a/b$ everywhere. The consumer buys only the good with the lower price per unit of utility: if $p_1/a < p_2/b$, buy only good 1; if $p_1/a > p_2/b$, buy only good 2; if equal, any combination on the budget line is optimal.

**Why it matters:** Perfect substitutes represent the extreme of complete substitutability. In consumption, this models goods that are essentially identical (differing only in a quality weight). In production, perfect substitutes model interchangeable inputs (e.g., energy sources). The model is used in: (1) hedonic pricing, (2) the Becker household production model, (3) international trade (Ricardian model: labour across countries as perfect substitutes). Solutions involve corner solutions, not interior tangency.

**Exam tip:** Perfect substitutes always yield corner solutions (unless prices are exactly proportional to weights). Compare price per utility: buy the good with smaller $p_i/a_i$. Common mistake: trying to equate MRS to price ratio — that condition only gives a tangency when indifference curves are smooth; with linear indifference curves, the optimum is at a corner. The FOC ($MRS = p_1/p_2$) holds only when the consumer buys both goods, which requires $a/p_1 = b/p_2$ exactly.

**Also see:** [Equation Explainer — MRTS & Elasticity of Substitution](./EQUATION-EXPLAINER.md#eq-mrts-eos)

<a id="detail-term-cournot"></a>
### **Cournot Competition**

**What it is:** Cournot competition is an oligopoly model where firms compete by choosing **quantities** simultaneously. Each firm $i$ chooses $q_i$ to maximize profit, taking rivals' output as given. The best-response function for linear demand $P = A - BQ$ and constant MC $c$ is $q_i = (A - c - B\sum_{j\neq i} q_j) / (2B)$. Best-response functions slope downward — if rivals produce more, each firm produces less (strategic substitutes). The Nash equilibrium is at the intersection of best-response functions.

**Why it matters:** Cournot is the foundational model of oligopoly theory. It bridges perfect competition (many firms → price approaches MC) and monopoly (one firm). As $n$ increases, the Cournot price converges to the competitive price. The Lerner Index for firm $i$ is $(P - MC)/P = s_i / \varepsilon$, where $s_i$ is market share and $\varepsilon$ is market demand elasticity. This shows market power depends on both market share and demand elasticity. Cournot is used in: industrial organization (merger analysis), trade (reciprocal dumping model), and regulation.

**Exam tip:** The core problem: "Find Cournot equilibrium for $n$ firms with linear demand and constant MC." Steps: (1) write firm $i$'s profit, (2) take FOC, (3) solve best-response function, (4) impose symmetry, (5) solve for $q$, (6) compute price, profit, and HHI. As $n \to \infty$, $P \to MC$. Common mistake: confusing Cournot (quantities) with Bertrand (prices). With homogeneous goods, Cournot gives positive markups; Bertrand gives $P = MC$ (Bertrand paradox). Cournot best responses slope down (strategic substitutes); Bertrand best responses slope up (strategic complements). Industries with capacity constraints (auto, steel, oil) fit Cournot better; those with low fixed costs (software, retail) fit Bertrand better.

<a id="detail-term-stackelberg"></a>
### **Stackelberg Competition**

**What it is:** Stackelberg competition is an oligopoly model where firms move sequentially: a **leader** chooses its quantity $q_L$ first, and a **follower** observes $q_L$ and then chooses its own quantity $q_F$. The follower's best-response function $BR_F(q_L)$ is the same as in Cournot (given the leader's output, the follower maximizes its profit). The leader, anticipating the follower's response, chooses $q_L$ to maximize $\pi_L(q_L, BR_F(q_L))$. For linear demand $P = A - B(q_L + q_F)$ and constant MC $c$, the follower's BR is $q_F = (A - c - B q_L)/(2B)$, and the leader produces $q_L = (A - c)/(2B)$ (twice the Cournot quantity). Total output is higher and price lower than Cournot — the leader enjoys a first-mover advantage (higher profit than in Cournot, but less than monopoly).

**Why it matters:** Stackelberg shows the value of commitment in strategic settings. The leader's ability to commit to a large quantity changes the strategic outcome, giving a first-mover advantage. The model applies to: (1) industries with dominant firms (e.g., OPEC as leader, fringe firms as followers), (2) R&D races where the first innovator sets the standard, (3) entry deterrence where the incumbent can over-invest to signal commitment. Comparing Stackelberg to Cournot and Bertrand shows how the order of moves and the strategic variable (quantity vs. price) fundamentally alter market outcomes.

**Exam tip:** Stackelberg is solved by backward induction: (1) find the follower's BR $q_F(q_L)$, (2) substitute into the leader's profit, (3) solve leader's FOC, (4) substitute back to get $q_F$. The leader always produces more and earns more than in Cournot. Total output is larger than Cournot but smaller than perfect competition. Common mistake: solving both firms simultaneously (Cournot) instead of sequentially. Stackelberg is a Stackelberg-Schelling commitment model: the leader's advantage comes from credibility — if the leader cannot commit, the outcome reverts to Cournot.

**Also see:** [Equation Explainer — Game Theory](./EQUATION-EXPLAINER.md#eq-game-theory), [Cournot Competition](#detail-term-cournot) (simultaneous quantity competition)

---

## 5. Welfare & Efficiency Concepts

<a id="detail-term-pareto-optimal"></a>
### **Pareto Optimal**
**What it is:** An allocation is Pareto optimal (or Pareto efficient) when no agent can be made better off without making at least one other agent worse off. It is the benchmark for efficiency in microeconomics. Every competitive equilibrium without market failures is Pareto optimal (First Welfare Theorem).

**Why it matters:** Pareto optimality is the central normative criterion in this course. It separates the question of efficiency from the question of equity. You use it constantly in welfare analysis, general equilibrium, and market failure discussions. If a policy creates winners and losers, the Pareto criterion cannot rank it, which is why we need weaker criteria like Kaldor-Hicks.

**Exam tip:** Examiners love asking whether a given allocation or policy change is Pareto improving. Remember: a Pareto improvement requires that NO ONE is made worse off. If even one person loses, it fails the test.

**Also see:** [Equation Explainer — Social Welfare](./EQUATION-EXPLAINER.md#eq-social-welfare)

<a id="detail-term-pareto-improvement"></a>
### **Pareto Improvement**
**What it is:** A reallocation of resources that makes at least one agent strictly better off while making no agent worse off. This is the operational version of the Pareto criterion. If a move is a Pareto improvement, it is an unambiguous gain in social welfare.

**Why it matters:** Pareto improvements are rare in real policy (almost every change hurts someone), but they are the gold standard for ranking allocations in the Edgeworth box and the production economy. Any point inside the contract curve can be Pareto improved by moving to the curve. The concept connects directly to the potential compensation principle: a change that passes the Kaldor-Hicks test would be a Pareto improvement if compensation were actually paid.

**Exam tip:** Draw the Edgeworth box and shade the lens region where Pareto improvements exist from an initial endowment. Any trade that moves into the lens is mutually beneficial.

<a id="detail-term-pareto-conditions"></a>
### **Pareto Efficiency Conditions (3 Conditions)**
**What it is:** Three marginal conditions that must hold simultaneously for an allocation to be Pareto optimal: (i) **Exchange efficiency** — $MRS^A = MRS^B$ (no mutually beneficial trades remain), (ii) **Production efficiency** — $MRTS^X = MRTS^Y$ (inputs cannot be reallocated to increase total output), (iii) **Product-mix efficiency** — $MRPT = MRS$ (the economy produces the right mix of goods given consumer preferences). All three together are necessary and sufficient for a Pareto optimum.

**Why it matters:** These three conditions structure the entire general equilibrium framework. The first two apply within the Edgeworth box for consumption and production. The third condition links both sides of the economy. Breaking any condition means you are inside the GUPF, not on its frontier. The First Welfare Theorem says a competitive equilibrium satisfies all three; each type of market failure violates at least one.

**Exam tip:** In a 2x2x2 GE problem, check condition (i) for the consumption Edgeworth box, condition (ii) for the production box, and condition (iii) by equating the slope of the PPF with the common MRS from consumption. The third one trips up students most often.

**Also see:** [Equation Explainer — Social Welfare](./EQUATION-EXPLAINER.md#eq-social-welfare)

<a id="detail-term-cv"></a>
### **CV (Compensating Variation)**
**What it is:** The amount of money that must be given to (or taken from) a consumer after a price change to keep them at their original utility level $u^0$. Formally, $CV = e(p^1, u^0) - e(p^0, u^0) = w - e(p^1, u^0)$. For a price increase, CV is positive (you need compensation); for a price decrease, CV is negative (you would pay to get the lower prices).

**Why it matters:** CV is one of the two exact welfare measures (along with EV). It answers the question: "How much income compensation is needed to undo a price change?" It uses new prices and old utility, which makes it the natural measure when the policy has already happened. You need the expenditure function to compute it. For quasilinear utility, CV equals CS and EV.

**Exam tip:** The key to CV problems: always find $e(p^1, u^0)$ using the expenditure function at the NEW prices but the OLD utility level. Draw the Hicksian demand curve at $u^0$ — CV is the area under it between old and new prices.

**Also see:** [Equation Explainer — Welfare Measures](./EQUATION-EXPLAINER.md#eq-welfare-measures)

<a id="detail-term-ev"></a>
### **EV (Equivalent Variation)**
**What it is:** The amount of money that must be given to (or taken from) a consumer before a price change to make them as well off as they would be after it. Formally, $EV = e(p^0, u^1) - e(p^0, u^0) = e(p^0, u^1) - w$. For a price increase, EV is negative (a willingness to pay to avoid it); for a price decrease, EV is positive.

**Why it matters:** EV answers "What is this price change worth to you?" using the old prices as the baseline. It is the welfare measure used in cost-benefit analysis before a policy is implemented. EV uses the new utility level but old prices, which makes it the mirror image of CV. The ordering relationship with CV depends on income effects: for a normal good price decrease, $EV > CS > CV > 0$.

**Exam tip:** EV tends to be larger than CV for normal goods when the price falls. Reason: EV asks "how much would you pay to get this price cut before it happens?" and the consumer is poorer in that baseline, making money more valuable. Memorize the ordering.

**Also see:** [Equation Explainer — Welfare Measures](./EQUATION-EXPLAINER.md#eq-welfare-measures)

<a id="detail-term-cs"></a>
### **CS (Consumer Surplus)**
**What it is:** The area under the Marshallian (uncompensated) demand curve between the old and new prices: $CS = \int_{p^0}^{p^1} x(p,w) \, dp$. It measures the net benefit consumers get from a market beyond what they pay. When a price changes, the change in CS approximates the welfare effect.

**Why it matters:** CS is widely used in applied work because Marshallian demand is observable in data. The problem is that CS is path dependent — it is not a valid money metric when there are income effects. CV and EV are theoretically correct but require knowing the expenditure function. In many exam settings with quasilinear utility, all three coincide. When they differ, the ordering reveals whether the good is normal or inferior.

**Exam tip:** CS is the triangle between the demand curve, the price line, and the price axis. For a linear demand curve $Q = a - bP$, CS at price $P$ is $\frac12 (a - bP)^2 / b$. Never forget that CS from Marshallian demand is an approximation, not an exact measure.

**Also see:** [Equation Explainer — Welfare Measures](./EQUATION-EXPLAINER.md#eq-welfare-measures)

<a id="detail-term-dwl-tariff"></a>
### **DWL (Deadweight Loss — Tariff)**
**What it is:** The net social loss from imposing a tariff, measured as the Harberger triangle: $\frac12 \times t \times \Delta Q$, where $t$ is the tariff per unit and $\Delta Q$ is the reduction in imports. The tariff raises domestic price, reducing consumer surplus and increasing producer surplus and government revenue, but the losses to consumers exceed the gains to producers and government by exactly the DWL.

**Why it matters:** Tariff analysis is a classic application of DWL in international trade. The DWL has two components: a consumption distortion (consumers buy less because price is higher) and a production distortion (domestic firms produce too much, wasting resources). A key comparison is between tariffs and VERs (voluntary export restraints). A VER creates the same DWL but also transfers tariff-equivalent revenue to foreign exporters, making it strictly worse.

**Exam tip:** Draw the import demand / export supply diagram. Shade the two DWL triangles (consumption and production). VER is worse because the revenue rectangle goes to foreigners. Quotas with no rent capture are also worse than tariffs.

**Also see:** [Equation Explainer — Extern & Trade](./EQUATION-EXPLAINER.md#eq-extern-trade)

<a id="detail-term-dwl-tax"></a>
### **DWL (Deadweight Loss — Tax)**
**What it is:** The lost total surplus from a tax that is not captured as government revenue. Also $\frac12 \times t \times \Delta Q$, where $t$ is the tax per unit and $\Delta Q$ is the reduction in quantity traded. The tax wedge drives a gap between what consumers pay ($p_c$) and what producers receive ($p_p = p_c - t$), causing some mutually beneficial trades not to occur.

**Why it matters:** The DWL of taxation is central to public finance and optimal tax theory. The size of the DWL depends on the elasticities of supply and demand. More elastic curves mean larger DWL for the same tax because the quantity responds more. This is the key insight behind Ramsey's inverse elasticity rule: to minimize DWL, tax inelastic goods more heavily. Tax revenue is a transfer; DWL is the real cost of taxation.

**Exam tip:** Draw the supply-demand diagram with the tax wedge. The DWL triangle sits between the original equilibrium quantity and the new quantity, bounded above by the demand curve and below by the supply curve. Elasticity determines how big the triangle is. Inelastic demand or supply means small DWL.

<a id="detail-term-tariff"></a>
### **Tariff**

**What it is:** A tariff is a per-unit tax $\tau$ imposed on imported goods. It raises the domestic price from the world price $P_W$ to $P_W + \tau$. The effects: (1) consumer surplus falls (higher price reduces quantity demanded), (2) domestic producer surplus rises (domestic firms produce more at the higher price), (3) government collects tariff revenue $\tau \times Q_{\text{imports}}$, (4) net welfare loss = deadweight loss from consumption distortion (consumers buy less) and production distortion (domestic firms produce too much). The tariff DWL triangle is $\frac12 \tau (\Delta Q_s + \Delta Q_d)$.

**Why it matters:** Tariff analysis is the standard framework for evaluating trade policy in this course. The key comparison is between tariffs and VERs (voluntary export restraints). A tariff preserves government revenue (which stays in the home country), while a VER transfers the equivalent revenue to foreign exporters — making VER strictly worse for the importing country. Tariff analysis also connects to optimal tariff theory (a large country can improve its terms of trade by imposing a tariff), political economy (domestic producers lobby for protection), and the Stolper-Samuelson theorem (trade protection raises the return to the scarce factor).

**Exam tip:** Draw the domestic supply and demand diagram with world price $P_W$ and the tariff-inclusive price $P_W + \tau$. Shade: (a) consumer surplus loss (large rectangle + triangles), (b) producer surplus gain (small rectangle), (c) government revenue (rectangle on imports), (d) DWL = two small triangles on the production and consumption sides. The welfare ranking: free trade > tariff > VER. Common mistake: forgetting that a tariff has BOTH a production DWL and a consumption DWL — they must be added together.

**Also see:** [Equation Explainer — Extern & Trade](./EQUATION-EXPLAINER.md#eq-extern-trade), [DWL (Tariff)](#detail-term-dwl-tariff), [VER](./GLOSSARY.md#term-ver)

<a id="detail-term-tax-incidence"></a>
### **Tax Incidence**

**What it is:** Tax incidence measures how the burden of a tax is divided between consumers and producers. For a per-unit tax $\tau$, the consumer price rises to $p_b$ (buyer price) and the producer price falls to $p_s = p_b - \tau$ (seller price). The consumer share is $\frac{p_b - p_0}{\tau}$ and the producer share is $\frac{p_0 - p_s}{\tau}$, where $p_0$ is the pre-tax equilibrium price. Using elasticities: $\frac{p_b - p_0}{\tau} = \frac{\varepsilon_S}{\varepsilon_S - \varepsilon_D}$, where $\varepsilon_S$ is supply elasticity and $\varepsilon_D$ is demand elasticity. Consumers bear a larger share when demand is inelastic relative to supply.

**Why it matters:** Tax incidence determines who actually pays the tax, regardless of who legally remits it. This is the difference between statutory incidence (who writes the check) and economic incidence (whose welfare falls). The key insight: the side with the more inelastic curve bears more of the tax. If demand is perfectly inelastic (e.g., life-saving drugs), consumers bear 100% of the tax. If supply is perfectly inelastic (e.g., land), producers bear 100%. This principle applies to tariffs, payroll taxes, sales taxes, and carbon taxes — it explains why taxing necessities (inelastic demand) is regressive.

**Exam tip:** Two methods: (1) shift the supply curve up by $\tau$ and find the new equilibrium — the vertical distance between the old and new equilibrium price is the consumer burden; (2) use the elasticity formula. The DWL triangle is between the old and new quantity, bounded by demand and supply. Tax revenue = $\tau \times Q_{\text{new}}$. Common mistake: thinking the party who physically pays the tax bears the burden — economic incidence depends on elasticities, not remittance. For a tariff, consumers bear more burden when import demand is inelastic.

**Also see:** [Equation Explainer — Welfare Measures](./EQUATION-EXPLAINER.md#eq-welfare-measures), [DWL (Tax)](#detail-term-dwl-tax), [Tariff](#detail-term-tariff)

<a id="detail-term-point-of-bliss"></a>
### **Point of Bliss**
**What it is:** The tangency point between the Grand Utility Possibility Frontier (GUPF) and the highest attainable social welfare function indifference curve. It represents the optimal social allocation combining both efficiency (you are on the GUPF) and distributional justice (you are at the best point on the GUPF given society's values). The GUPF is the outer envelope of all utility possibility frontiers.

**Why it matters:** The point of bliss separates the roles of efficiency and equity in welfare economics. The GUPF captures all Pareto optimal allocations (efficiency). The social welfare function selects among them (equity). If society's preferences change (from Utilitarian to Rawlsian, for example), the point of bliss shifts along the GUPF. A policy that moves the economy toward the point of bliss is welfare improving.

**Exam tip:** Graphically, the point of bliss is found by sliding the SWF indifference curve along the GUPF until it is tangent. This is the social optimum. If the SWF is Utilitarian ($W = u_A + u_B$), the tangency is where the slope of the GUPF equals -1.

**Also see:** [Equation Explainer — Social Welfare](./EQUATION-EXPLAINER.md#eq-social-welfare)

<a id="detail-term-social-welfare"></a>
### **Social Welfare Function (Utilitarian + Rawlsian)**
**What it is:** A function $W(u_1, u_2, \dots, u_n)$ that aggregates individual utilities into a social ranking. The two canonical forms are the **Utilitarian** SWF ($W = \sum u_i$), which sums utilities and is indifferent to distribution, and the **Rawlsian** SWF ($W = \min_i\{u_i\}$), which cares only about the worst-off individual. A general Bergson-Samuelson SWF can take many forms.

**Why it matters:** The SWF is the tool for moving from positive economics (what allocations are efficient) to normative economics (what allocation is best). The choice of SWF encodes society's values about inequality. Utilitarianism says a dollar to a poor person has the same weight as a dollar to a rich person (if marginal utility is constant). Rawlsianism says welfare is judged by the least fortunate. The SWF's tangency with the GUPF gives the point of bliss.

**Exam tip:** For Utilitarian SWF with a linear GUPF, any point on the frontier is equally good (all indifference curves are parallel lines with slope -1). For Rawlsian, the optimum is where the 45-degree line from the origin hits the GUPF. Show this graphically.

**Also see:** [Equation Explainer — Social Welfare](./EQUATION-EXPLAINER.md#eq-social-welfare)

<a id="detail-term-producer-surplus"></a>
### **Producer Surplus (PS)**
**What it is:** The difference between what producers receive for a good and the minimum amount they would accept to supply it. Graphically, it is the area above the supply curve (or marginal cost curve) and below the market price. It reflects the net gain to producers from participating in the market.

**Why it matters:** PS plus CS gives total surplus, which is the measure of market efficiency. In a competitive equilibrium, TS is maximized. Any policy that reduces TS (a tax, a price control, a tariff) creates DWL equal to the lost PS and CS. PS is also directly linked to profit: in the short run with no fixed costs, PS equals profit. With fixed costs, PS = profit + fixed costs.

**Exam tip:** Draw the supply-demand graph. PS is the triangle above the supply curve and below the price, from zero to the equilibrium quantity. For a linear supply curve $Q = cP$, PS at price $P^*$ is $\frac12 c (P^*)^2$.

<a id="detail-term-total-surplus"></a>
### **Total Surplus (TS)**
**What it is:** The sum of consumer surplus and producer surplus: $TS = CS + PS$. In a competitive market without distortions, TS is maximized. Deadweight loss is the reduction in TS caused by a policy or market failure. It measures the value of trades that should happen but do not.

**Why it matters:** TS maximization is the efficiency benchmark for market outcomes. The First Welfare Theorem guarantees that competitive equilibrium maximizes TS (under standard assumptions). When you evaluate a tax, tariff, price floor, or externality, the one number that summarizes the efficiency cost is the DWL, which is the gap between maximum possible TS and actual TS.

**Exam tip:** In exam problems, always compute TS at the competitive equilibrium first. Then recompute TS with the policy (tax, tariff, monopoly price). The difference is the DWL. Make sure you account for government revenue in the TS calculation under a tax (revenue is not lost, it is transferred).

<a id="detail-term-potential-compensation"></a>
### **Potential Compensation Principle (Hicks-Kaldor)**
**What it is:** A criterion that ranks a change as efficient if the gainers could hypothetically compensate the losers and still be better off. Actual compensation is not required. This is weaker than Pareto improvement (which requires that no one loses) and is the foundation of cost-benefit analysis. The Scitovsky double test adds a reversal check: losers should not be able to bribe gainers to oppose the change.

**Why it matters:** The Pareto criterion is too strict for real policy — almost every policy change creates some losers. The Hicks-Kaldor principle allows efficiency analysis of actual policies. If a project passes, it is potentially Pareto improving. However, the principle has a known paradox: without the Scitovsky reversal test, a change and its reversal could both pass, creating a logical contradiction. The Scitovsky double test (original change passes, reversal fails) is the gold standard.

**Exam tip:** Examiners ask whether a policy change passes the Kaldor-Hicks test. Compute total surplus change. If TS increases, the policy passes (gainers can compensate losers). Always mention the Scitovsky reversal as a refinement and the limitation that ethical judgments about distribution are still needed.

**Also see:** [Equation Explainer — Kaldor-Hicks](./EQUATION-EXPLAINER.md#eq-kaldor-hicks)

---

**Welfare ordering relationships (normal goods):**

**Price decrease (normal good):** $EV > CS > CV > 0$

**Price increase (normal good):** $CV < CS < EV < 0$

**Quasilinear utility:** $CV = EV = CS$

**What this means:** For a price decrease of a normal good, EV is largest because it compensates the consumer at old prices (where they are effectively poorer, so money is worth more). CS sits in between because it mixes income and substitution effects. CV is smallest because it compensates at new prices (where the consumer is already better off). The relationships reverse for a price increase. With quasilinear preferences (zero income effect), all three coincide because the Marshallian and Hicksian demands are identical. These orderings are a reliable sign of whether you understand the conceptual distinction between the three welfare measures.

**Also see:** [Equation Explainer — Welfare Ordering](./EQUATION-EXPLAINER.md#eq-ordering)

---

## 6. Equilibrium Concepts

<a id="detail-term-partial-equilibrium"></a>
### **Partial Equilibrium**
**What it is:** Analysis of a single market in isolation, holding all other prices fixed. The standard Marshallian supply-demand diagram with upward-sloping supply and downward-sloping demand. The equilibrium price clears just that one market. Feedback effects from other markets are ignored.

**Why it matters:** Most of your first microeconomics courses are partial equilibrium. It is simple and works well when the market is small relative to the whole economy. In this course, you learn that partial equilibrium is a special case of general equilibrium. The limitation: when markets are interconnected (a tax on good A changes demand for good B), partial equilibrium misses the feedback. Many exam problems start in partial equilibrium and ask you to extend to general equilibrium.

**Exam tip:** In exam questions, partial equilibrium means you solve one market with one supply and one demand equation. No income effects from price changes in other sectors. The competitive equilibrium is where $Q_D = Q_S$. That is it.

**Also see:** [Equation Explainer — Excess Demand](./EQUATION-EXPLAINER.md#eq-excess-demand)

<a id="detail-term-general-equilibrium"></a>
### **General Equilibrium**
**What it is:** Simultaneous clearing of ALL markets in an economy. Prices are endogenous — they adjust until every market clears. The standard model is the Arrow-Debreu economy with $n$ goods, $m$ consumers, and $k$ firms. General equilibrium captures the interdependencies between markets: a shock to one market ripples through the entire system.

**Why it matters:** General equilibrium is the crown of microeconomic theory. It shows how decentralized market activity can produce coherent outcomes across the whole economy. The 2x2x2 model (two goods, two consumers, two firms) is the core exam framework. The Edgeworth box, contract curve, and production possibility frontier all live in GE. You need GE to discuss the Welfare Theorems, market failures, and tax incidence across markets.

**Exam tip:** The 2x2x2 problem structure: (1) optimize consumption (MRS condition), (2) optimize production (MRTS condition), (3) find the product-mix (MRPT = MRS), (4) set the numeraire, (5) solve for all prices. Use Walras's Law to check your work.

**Also see:** [Equation Explainer — Excess Demand](./EQUATION-EXPLAINER.md#eq-excess-demand)

<a id="detail-term-walrasian-equilibrium"></a>
### **Walrasian / Competitive Equilibrium**
**What it is:** A price vector $p^*$ such that every agent maximizes utility (subject to budget) or profit (given prices), and all markets clear: aggregate excess demand $z(p^*) = 0$ for all goods. Agents take prices as given (price takers). No one has market power. Also called competitive equilibrium.

**Why it matters:** This is the central equilibrium concept of the course. The First Welfare Theorem says every Walrasian equilibrium is Pareto optimal. The Second Welfare Theorem says every Pareto optimum can be supported as a Walrasian equilibrium with lump-sum transfers. The existence proof uses fixed-point theorems or the Intermediate Value Theorem in one dimension. The Walrasian auctioneer calls out prices, agents report demands, and prices adjust until markets clear (tatonnement).

**Exam tip:** To find a Walrasian equilibrium: (1) solve each agent's UMP to get demands, (2) aggregate demands across agents, (3) impose market clearing, (4) use Walras's Law to drop one market, (5) normalize one price (numeraire). Remember that only relative prices are determined.

**Also see:** [Equation Explainer — Excess Demand](./EQUATION-EXPLAINER.md#eq-excess-demand)

<a id="detail-term-existence-ge"></a>
### **Existence of General Equilibrium**
**What it is:** The question of whether a price vector $p^* > 0$ exists such that $z(p^*) = 0$ for all goods. Existence requires: (i) continuity of excess demand functions, (ii) homogeneity of degree zero, (iii) Walras's Law ($p \cdot z(p) = 0$), and (iv) boundary behavior (excess demand tends to positive infinity as price approaches zero, and negative as price approaches infinity). Under these conditions, a fixed point exists.

**Why it matters:** Before the Arrow-Debreu proof in the 1950s, economists were not sure that competitive markets would always find a consistent set of prices. Existence guarantees that the model is not vacuous. The proof method (using Brouwer's or Kakutani's fixed-point theorem) is itself important intellectual history. In the one-good case, it reduces to the Intermediate Value Theorem. Existence fails when preferences are non-convex, when there are increasing returns, or when markets are incomplete.

**Exam tip:** In exam problems, do not prove existence using fixed-point theorems. Instead, show that $E(0) > 0$ and $E(\infty) < 0$, and since $E(P)$ is continuous, a price $P^*$ must exist where $E(P^*) = 0$ (by IVT). Draw the four cases: unique stable, unique unstable, multiple alternating, and no equilibrium.

**Also see:** [Equation Explainer — GE Properties](./EQUATION-EXPLAINER.md#eq-ge-properties)

<a id="detail-term-uniqueness-ge"></a>
### **Uniqueness of General Equilibrium**
**What it is:** Whether there is exactly one equilibrium price vector. Uniqueness is not guaranteed in general — multiple equilibria can exist when the excess demand functions are not well behaved. A sufficient condition for uniqueness is the **gross substitutes** property: if the price of one good rises, excess demand for every other good increases (or at least does not decrease).

**Why it matters:** If there are multiple equilibria, comparative statics become ambiguous. The same policy shock could move the economy to different equilibria depending on path. Gross substitutes is the most common sufficient condition used in the course, but it is restrictive and often fails. The presence of multiple equilibria also raises coordination problems and opens the door to sunspot equilibria and self-fulfilling prophecies.

**Exam tip:** Show uniqueness by checking if $z_i(p)$ is strictly decreasing in $p_i$ and all cross-price effects are non-negative (gross substitutes). Without gross substitutes, draw the excess demand curve to illustrate multiple crossings of the zero line.

**Also see:** [Equation Explainer — GE Properties](./EQUATION-EXPLAINER.md#eq-ge-properties)

<a id="detail-term-stability-ge"></a>
### **Stability of General Equilibrium**
**What it is:** Whether the economy returns to equilibrium after a small disturbance. Under the Walrasian tatonnement process, prices adjust according to $\dot{p} = z(p)$ (price rises when there is positive excess demand). An equilibrium is locally stable if excess demand slopes downward at that point: $dE/dP < 0$.

**Why it matters:** Stability matters because even if an equilibrium exists, it is not meaningful if the economy never reaches or stays near it. Multiple equilibria often alternate between stable and unstable points. An unstable equilibrium is a theoretical curiosity but not a prediction of actual market outcomes. The tatonnement assumption is strong (no trading at false prices), but it provides a framework for thinking about price dynamics.

**Exam tip:** Draw excess demand $E(P)$ and identify equilibria. Where $E(P)$ crosses from positive to negative (downward slope), it is stable. Where it crosses from negative to positive (upward slope), it is unstable. Mark the arrows showing the price adjustment direction.

**Also see:** [Equation Explainer — GE Properties](./EQUATION-EXPLAINER.md#eq-ge-properties)

<a id="detail-term-nash-equilibrium"></a>
### **Nash Equilibrium**
**What it is:** A strategy profile $(s_1^*, s_2^*, \dots, s_n^*)$ where each player's strategy is a best response to the strategies of all other players. No player can gain by unilaterally deviating. Formally, $u_i(s_i^*, s_{-i}^*) \ge u_i(s_i, s_{-i}^*)$ for all $s_i \in S_i$ and all players $i$.

**Why it matters:** Nash equilibrium is the fundamental solution concept in game theory. It defines what it means for players to be in strategic balance. Every game you analyze in the course (PD, Battle of the Sexes, Chicken, Cournot, Bertrand) has Nash equilibria. The concept generalizes to mixed strategies, sequential games (SPNE), and signaling games (separating/pooling). The existence of Nash equilibrium in mixed strategies is guaranteed for finite games (Nash's theorem).

**Exam tip:** To find Nash equilibria in a 2x2 payoff matrix, underline each player's best response to each opponent action. The cells with both payoffs underlined are pure-strategy Nash equilibria. Always check for mixed strategy NE when there is no pure-strategy NE.

**Also see:** [Equation Explainer — Game Theory](./EQUATION-EXPLAINER.md#eq-game-theory)

<a id="detail-term-best-response"></a>
### **Best Response**

**What it is:** Player $i$'s best response $BR_i(s_{-i})$ is the set of strategies that maximize $i$'s payoff given the strategies of all other players $s_{-i}$. Formally: $BR_i(s_{-i}) = \{s_i \in S_i \mid u_i(s_i, s_{-i}) \ge u_i(s_i', s_{-i})\ \forall s_i' \in S_i\}$. A Nash equilibrium is a fixed point of the best-response correspondence: $s_i^* \in BR_i(s_{-i}^*)$ for all players $i$. In Cournot competition, best-response functions slope downward (strategic substitutes — if rivals produce more, I produce less). In Bertrand competition, they slope upward (strategic complements — if rivals charge more, I charge more).

**Why it matters:** Best response is the fundamental building block of Nash equilibrium. Every solution concept in game theory (NE, SPNE, PBE, dominant strategy) can be expressed in terms of best responses. The shape and slope of best-response functions determine: (1) the number of equilibria (intersection of BR functions), (2) comparative statics (how equilibrium changes with parameters), (3) stability (whether adjustment converges to equilibrium), and (4) the nature of strategic interaction (substitutes vs complements). Best-response functions also connect to reaction functions in oligopoly theory.

**Exam tip:** To find best responses in a $2\times2$ matrix game, underline the highest payoff in each column (for player 1) and each row (for player 2). Cells with both payoffs underlined are pure-strategy Nash equilibria. For continuous strategy spaces (Cournot, Bertrand), solve $u_i$ FOC for $s_i$ to get $BR_i(s_{-i})$. Common mistake: thinking best response assumes opponents are fixed — in equilibrium, everyone's strategies must simultaneously be best responses to each other.

**Also see:** [Equation Explainer — Game Theory](./EQUATION-EXPLAINER.md#eq-game-theory), [Nash Equilibrium](#detail-term-nash-equilibrium), [Cournot Competition](#detail-term-cournot)

<a id="detail-term-subgame-perfect-ne"></a>
### **Subgame Perfect Nash Equilibrium (SPNE)**
**What it is:** A refinement of Nash equilibrium for sequential games. A strategy profile is subgame perfect if it constitutes a Nash equilibrium in every subgame of the original game. This eliminates non-credible threats — promises or threats that would not be rational to carry out. SPNE is found by backward induction (rollback) from the terminal nodes.

**Why it matters:** Many Nash equilibria in sequential games rely on empty threats. For example, in the entry deterrence game, the incumbent threatens to fight if the entrant enters, but the threat is not credible because fighting hurts the incumbent too. Backward induction eliminates such equilibria. SPNE is the standard solution concept for all extensive-form games in the course, including bargaining, centipede, and signaling games.

**Exam tip:** Always use backward induction for sequential games. Start at the last decision node, pick the action that maximizes payoff, then move backward. The resulting path is the SPNE outcome. Students often get tripped up by trying to use Nash equilibrium directly without backward induction.

**Also see:** [Equation Explainer — Game Theory](./EQUATION-EXPLAINER.md#eq-game-theory)

<a id="detail-term-dominant-strategy"></a>
### **Dominant Strategy**
**What it is:** A strategy that is a best response to EVERY possible strategy of the other players. If player $i$ has a dominant strategy $s_i^D$, then $u_i(s_i^D, s_{-i}) \ge u_i(s_i, s_{-i})$ for all $s_i \in S_i$ and all $s_{-i} \in S_{-i}$. It is the strongest solution concept in game theory.

**Why it matters:** Dominant strategy is the most robust prediction. You do not need to know what others will do to predict optimal play. The Prisoner's Dilemma is famous because both players have dominant strategies to defect, leading to a Pareto-inferior outcome. Mechanism design (including auction design) often aims for dominant strategy implementation, because it guarantees truthful behavior regardless of others' actions.

**Exam tip:** Check for dominant strategies first before looking for Nash equilibria. In each row, check if one action always gives a higher payoff than every other action. If all players have dominant strategies, the dominant strategy profile is the unique prediction. In exams, the PD is the canonical example.

**Also see:** [Equation Explainer — Game Theory](./EQUATION-EXPLAINER.md#eq-game-theory)

<a id="detail-term-mixed-strategy-ne"></a>
### **Mixed Strategy Nash Equilibrium**
**What it is:** A Nash equilibrium in which players randomize over their pure strategies according to a probability distribution $\sigma_i$. A mixed strategy profile $\sigma^*$ is a Nash equilibrium if each player's expected payoff from $\sigma_i^*$ is at least as high as from any pure strategy $s_i$ in the support, given opponents play $\sigma_{-i}^*$. The indifference condition: every pure action in the support must yield the same expected payoff.

**Why it matters:** Mixed strategy NE guarantees existence in every finite game (Nash's theorem). It is essential when a game has no pure-strategy NE, such as Matching Pennies or Rock-Paper-Scissors. In the course, you encounter mixed strategies in Battle of the Sexes, Chicken, and certain auditing or inspection games. The probability weights can be interpreted as beliefs or as deliberate randomization.

**Exam tip:** To find a mixed strategy NE, set each player's expected payoff from one pure action equal to that from another (within the support). Solve for the opponent's mixing probability. If a player is indifferent, the opponent is playing the exact mix that makes them indifferent. This is the key insight.

**Also see:** [Equation Explainer — Game Theory](./EQUATION-EXPLAINER.md#eq-game-theory)

<a id="detail-term-separating-equilibrium"></a>
### **Separating Equilibrium (Spence Signaling)**
**What it is:** In Spence's job market signaling model, a separating equilibrium occurs when different worker types choose different education levels. High-productivity workers obtain education (a costly signal) that low-productivity workers would not mimic. The key condition: the wage premium for education must lie between the education cost of the low type and the high type: $w_H - w_L \in [c_H, c_L]$. The single-crossing property ($c_H < c_L$) ensures separation is possible.

**Why it matters:** Separating equilibrium is the central result in signaling theory. It shows how asymmetric information can be overcome by costly signaling. Education serves as a signal even if it adds no productivity (the sheepskin effect). The equilibrium is fully revealing: employers can perfectly infer the worker's type from their education choice. The refinement of the Intuitive Criterion often selects the separating equilibrium over pooling when both exist.

**Exam tip:** Draw the two-type Spence diagram with wages on the vertical axis and education on the horizontal. High type's indifference curves are flatter (lower cost of education). The separating condition requires the low type's indifference curve through the no-education point to lie below the high type's wage. The wage differential must be just enough to deter mimicking.

**Also see:** [Equation Explainer — Folk Theorem & Spence](./EQUATION-EXPLAINER.md#eq-folk-spence)

<a id="detail-term-pooling-equilibrium"></a>
### **Pooling Equilibrium (Spence Signaling)**
**What it is:** In Spence's signaling model, a pooling equilibrium occurs when all worker types choose the same education level. Employers cannot infer type from education. The common education level must be such that neither type wants to deviate. The wage is based on the average productivity of the pool.

**Why it matters:** Pooling equilibrium represents a failure of signaling — the signal does not convey information. This can happen when the wage premium for separation is not large enough to compensate high types for signaling costs, or when the proportion of low types in the population is high enough that pooling is the best response. The Intuitive Criterion often rules out pooling equilibria as unreasonable, but they remain theoretical possibilities.

**Exam tip:** Check whether a pooling equilibrium survives the Intuitive Criterion. If the high type would be better off by deviating to a separating level of education (and the low type would not mimic), the Intuitive Criterion eliminates the pooling equilibrium. In exams, the separating equilibrium is usually the focus, but mentioning pooling shows depth.

**Also see:** [Equation Explainer — Folk Theorem & Spence](./EQUATION-EXPLAINER.md#eq-folk-spence)

<a id="detail-term-core"></a>
### **Core**
**What it is:** The set of all feasible allocations that no coalition of agents can improve upon (block). An allocation is in the core if there is no coalition that can reallocate its own resources to make all its members strictly better off. The core shrinks as the economy grows. In a large economy, the core converges to the set of competitive equilibria (Edgeworth's conjecture).

**Why it matters:** The core is a cooperative game theory concept that connects to competitive equilibrium. The Edgeworth conjecture (proved by Debreu and Scarf) says that as the number of agents increases, the core shrinks until only competitive equilibria remain. This provides a non-tatonnement justification for competitive equilibrium: even if agents can freely form coalitions and recontract, the only allocations that survive are competitive equilibria.

**Exam tip:** In the Edgeworth box, the core is the portion of the contract curve that lies within the lens formed by the indifference curves through the initial endowment. Both agents must be at least as well off as their endowment. Draw this region carefully.

**Also see:** [Equation Explainer — Edgeworth Box](./EQUATION-EXPLAINER.md#eq-edgeworth)

<a id="detail-term-bertrand-competition"></a>
### **Bertrand Competition**
**What it is:** An oligopoly model where firms compete by setting PRICES (not quantities). With homogeneous goods and identical marginal costs, the unique Nash equilibrium is $P = MC$, yielding zero economic profits (the Bertrand paradox: two firms are enough for the competitive outcome). With differentiated goods, firms face downward-sloping residual demand and earn positive markups.

**Why it matters:** Bertrand competition is the price-setting counterpart to Cournot (quantity-setting) competition. The stark contrast between the two is a core result: Cournot with two firms gives positive profits, Bertrand with two firms gives zero profits. The difference comes from the strategic variable. Bertrand teaches that the number of firms alone does not determine market power — the nature of competition (price vs. quantity) and product differentiation matter just as much.

**Exam tip:** For a homogeneous-goods Bertrand duopoly with equal $MC$, the NE is both firms set $P = MC$ and split the market. Any firm undercutting captures the whole market. Check that neither wants to deviate: raising price loses all customers, lowering price loses money. For differentiated Bertrand, solve the reaction functions in price space.

**Also see:** [Equation Explainer — Elasticities & Lerner Index](./EQUATION-EXPLAINER.md#eq-elasticities)

---

## 7. Market Failure Concepts

<a id="detail-term-negative-externality"></a>
### **Negative Externality**
**What it is:** A cost imposed on a third party that is not reflected in the market price. Private cost is less than social cost, so the market overproduces the good. Examples: pollution, noise, traffic congestion. The marginal external damage (MED) is the wedge between private MC and social MC. At the efficient outcome, quantity is lower and price is higher than the competitive equilibrium.

**Why it matters:** Negative externalities cause the First Welfare Theorem to fail. The competitive equilibrium is no longer Pareto optimal because the price does not reflect the true social cost. The standard policy response is a **Pigouvian tax** equal to the MED at the socially optimal quantity. This aligns private and social costs. The Coase Theorem offers an alternative: with well-defined property rights and zero transaction costs, private bargaining can achieve efficiency without government intervention.

**Exam tip:** Draw the private MC and social MC curves. The DWL is the triangle between the private supply (PMC) and social supply (SMC), bounded by the demand curve, between the market quantity and the efficient quantity. The Pigouvian tax should equal the vertical distance between PMC and SMC at the efficient quantity.

**Also see:** [Equation Explainer — Pigou, Coase, Tariff DWL](./EQUATION-EXPLAINER.md#eq-extern-trade)

<a id="detail-term-positive-externality"></a>
### **Positive Externality**
**What it is:** A benefit to a third party not captured in the market price. Private benefit is less than social benefit, so the market underproduces the good. Examples: education, vaccination, R&D. The marginal external benefit (MEB) is the wedge between private MB and social MB. The efficient quantity is higher than the market equilibrium.

**Why it matters:** Like negative externalities, positive externalities cause FWT failure through the same mechanism: missing markets for the external benefit. The policy response is the mirror image of the Pigouvian tax: a **Pigouvian subsidy** equal to the MEB at the socially optimal quantity. In practice, these subsidies take the form of government funding for education, vaccine subsidies, and R&D tax credits.

**Exam tip:** Draw the private MB and social MB curves. The DWL is the triangle between the private demand (PMB) and social demand (SMB), below the supply curve, between the market quantity and the efficient quantity. The Pigouvian subsidy equals the MEB at the efficient quantity. This is symmetric to the negative externality case but on the demand side.

**Also see:** [Equation Explainer — Pigou, Coase, Tariff DWL](./EQUATION-EXPLAINER.md#eq-extern-trade)

<a id="detail-term-tragedy-commons"></a>
### **Tragedy of the Commons**
**What it is:** An open-access resource (e.g., a fishery, grazing land, the atmosphere) that is overused because each user considers only their own marginal benefit, ignoring the cost they impose on others through depletion. Each additional user reduces the resource available to everyone else. The private cost of use is less than the social cost because $\sum_{j \ne i} MC(q_j)$ is ignored.

**Why it matters:** The tragedy of the commons is a specific type of negative externality with a common-pool resource. Without property rights or regulation, the resource is overused to the point of depletion or even destruction. Policy solutions include: (i) assigning property rights (privatization), (ii) quotas on each user's extraction, (iii) Pigouvian taxes on use, (iv) community management (Ostrom). The concept connects to public goods (non-excludable but rival).

**Exam tip:** Graphically, plot the average revenue product (ARP) and marginal revenue product (MRP) for each user. Open access leads to entry until $ARP = 0$ (zero profit for the marginal entrant). The efficient outcome is where $MRP = 0$ across all users. The difference between the two quantities is the extent of overuse.

<a id="detail-term-public-good"></a>
### **Public Good**
**What it is:** A good that is non-rival (one person's consumption does not reduce availability for others) and non-excludable (no one can be prevented from consuming it). Examples: national defense, street lighting, clean air. The market underprovides public goods because private firms cannot capture the full social benefit (free rider problem). The efficient level is where $\sum MRS = MC$ (the Samuelson condition).

**Why it matters:** Public goods are a direct failure of the First Welfare Theorem. The market mechanism fails because non-excludability prevents price exclusion, and non-rivalry means the efficient price is zero (marginal cost of an additional user is zero). Government provision or collective financing is usually required. Lindahl pricing is the theoretical solution: each agent pays a personalized tax equal to their MRS. However, preference revelation is a problem since consumers have an incentive to understate their valuation.

**Exam tip:** The Samuelson condition ($\sum MRS = MC$) is the key equation. Contrast with private goods where the condition is $MRS_A = MRS_B = MRT$. For public goods, MRS values sum because the same quantity is consumed by everyone. Graphically, vertically sum the individual demand curves (instead of horizontal summation for private goods).

<a id="detail-term-adverse-selection"></a>
### **Adverse Selection**
**What it is:** A market failure caused by hidden information before a transaction occurs. One party has private information about quality (the "lemons" problem). In the used car market, sellers know the car's quality but buyers do not. The resulting market price reflects average quality, which drives high-quality sellers out. The market shrinks or collapses. More generally, adverse selection arises wherever asymmetric pre-contractual information exists.

**Why it matters:** Adverse selection is one of two main asymmetric information problems (along with moral hazard). It can unravel markets entirely, as Akerlof's lemons model shows. Policy responses include mandatory disclosure, certification, warranties, signaling (Spence), and government mandates (e.g., health insurance mandates). The concept connects to the Spence signaling model — signaling is a way for the informed party to credibly reveal their type.

**Exam tip:** Draw the lemons diagram: the buyer's willingness to pay depends on the average quality in the market. As price rises, higher quality sellers enter, raising average quality. The equilibrium may have multiple or no solutions. The key intuition: the worst types drive out the best types. In insurance markets, the unhealthy drive out the healthy.

**Also see:** [Equation Explainer — Folk Theorem & Spence](./EQUATION-EXPLAINER.md#eq-folk-spence)

<a id="detail-term-moral-hazard"></a>
### **Moral Hazard**
**What it is:** A market failure caused by hidden action after a transaction occurs. One party takes an action that affects the other party but cannot be perfectly observed. Example: an insured driver takes more risks because the insurance company bears the cost. The inefficient action arises because the agent bears only part of the consequences.

**Why it matters:** Moral hazard is pervasive in insurance, labor contracts (worker effort), finance (risk-taking with borrowed money), and corporate governance (manager-shareholder conflicts). The optimal contract trades off insurance against incentives — you cannot have both perfectly. Policy responses include co-payments and deductibles (insurance), performance pay (labor), and collateral (finance). Unlike adverse selection, moral hazard does not necessarily destroy the market, but it creates inefficiency.

**Exam tip:** Model moral hazard as a principal-agent problem. The principal offers a contract, the agent chooses effort. The first-best (full information) gives efficient effort. The second-best (hidden action) gives lower effort because the agent must bear some risk to have incentives. The wedge between first-best and second-best is the cost of moral hazard.

<a id="detail-term-signaling"></a>
### **Signaling**
**What it is:** An action taken by an informed party to credibly convey private information to an uninformed party. For a signal to be credible, it must be costly, and the cost must differ across types (single-crossing property). In Spence's job market model, education signals productivity. High-productivity workers find education less costly, so they can obtain a level of education that low-productivity workers would not mimic.

**Why it matters:** Signaling is one solution to adverse selection. It restores the possibility of trade when hidden information would otherwise cause market failure. The signal does not need to be productive in itself (it can be purely informational). The separating equilibrium condition is $w_H - w_L \in [c_H, c_L]$. If the wage premium is too small, pooling occurs; if too large, even low types would acquire the signal. The course uses signaling to analyze education, warranties, dividends, and advertising.

**Exam tip:** The single-crossing property ($c_L > c_H$) is the key condition for separation. Without it, no separating equilibrium exists. In exam problems, find the education level $e^*$ such that the low type is indifferent between mimicking and not. High types will choose $e^*$, low types choose $e=0$.

**Also see:** [Equation Explainer — Folk Theorem & Spence](./EQUATION-EXPLAINER.md#eq-folk-spence)

<a id="detail-term-consumption-externality"></a>
### **Consumption Externality (Bandwagon + Snob)**
**What it is:** A consumption externality occurs when an individual's utility depends directly on others' consumption: $U_i = U_i(C_i, C_j)$. The **bandwagon effect** is positive — utility increases when others consume the same good (e.g., fashion, network goods). The **snob effect** is negative — utility decreases when others consume the same good (e.g., exclusivity, rare art). These are also called network externalities.

**Why it matters:** Consumption externalities break the First Welfare Theorem because the utility function includes others' consumption — a missing market for the consumption interaction. Bandwagon effects create demand that is more elastic (self-reinforcing adoption), while snob effects make demand less elastic (self-limiting). The same good can exhibit both effects at different phases of its life cycle (early adopters are snobs, late adopters are bandwagon). Policy implications matter for advertising, taxation of luxury goods, and network industry regulation.

**Exam tip:** Graphically, a bandwagon effect makes the market demand curve flatter (more elastic) than the "true" demand. A snob effect makes it steeper. In exam questions, you may need to show how the bandwagon effect creates multiple equilibria (tipping points) in adoption of a new product.

<a id="detail-term-free-rider"></a>
### **Free Rider Problem**
**What it is:** The tendency for individuals to under-contribute to a public good because they cannot be excluded from enjoying its benefits. Each person hopes others will pay, and they will benefit without paying. The result is that private provision of the public good is far below the efficient level. In the limit, the good may not be provided at all even though everyone would benefit.

**Why it matters:** The free rider problem is the central challenge of public goods provision. It explains why markets fail to supply public goods efficiently. It also appears in contexts like team production, voting, and collective action. Solutions include government provision funded by compulsory taxation, Lindahl prices (personalized tax prices based on MRS), and creating excludability through technology or legal means (encryption, paywalls). The problem worsens as the group size increases.

**Exam tip:** In exam problems, show the free rider problem using a simple two-person public good model. Each person's optimal contribution is less than the efficient level because they only consider their own marginal benefit. The Nash equilibrium contribution is below the Lindahl equilibrium. The Samuelson condition ($\sum MRS = MC$) defines the efficient level, which requires coordination.

<a id="detail-term-lindahl-prices"></a>
### **Lindahl Prices**
**What it is:** A theoretical solution to the public goods problem in which each agent pays a personalized "tax price" $t_i$ equal to their marginal benefit (MRS) at the efficient allocation. The sum of all Lindahl prices equals the marginal cost of providing the public good: $\sum t_i = MC$. Each agent consumes the same quantity of the public good but pays according to their valuation.

**Why it matters:** Lindahl pricing shows that efficient public goods provision is theoretically possible with perfect information. It is the public goods analogue of competitive equilibrium (called Lindahl equilibrium). In practice, Lindahl pricing faces a severe problem: agents have an incentive to misreport their preferences (they will understate MRS to pay less). This is why the free rider problem persists even with Lindahl prices in principle. The mechanism design literature develops preference-revelation mechanisms (Vickrey-Clarke-Groves) to address this.

**Exam tip:** In a Lindahl equilibrium, each consumer faces a personalized price such that at the equilibrium quantity $G^*$, each consumer demands exactly $G^*$ given their price. The sum of prices equals MC. Draw the diagram with each consumer's demand curve and the vertical summation that gives the social demand. Lindahl prices are the individual contributions at $G^*$.

<a id="detail-term-transaction-costs"></a>
### **Transaction Costs**
**What it is:** The costs of participating in a market beyond the price of the good: search costs, bargaining costs, enforcement costs, legal fees, information costs. When transaction costs are positive, the Coase Theorem no longer guarantees that bargaining will achieve the efficient outcome, even with well-defined property rights.

**Why it matters:** Transaction costs explain why many potential Pareto-improving trades do not occur. They are the reason firms exist (Coase: firms internalize transactions that would be too costly to coordinate through markets). They also explain the need for legal frameworks, standard form contracts, and institutions that reduce transaction costs. In environmental economics, high transaction costs often prevent the private bargaining that the Coase Theorem envisions, justifying Pigouvian taxes instead.

**Exam tip:** When analyzing an externality problem, always check: are transaction costs zero or positive? If zero, Coase says bargaining achieves efficiency regardless of property rights. If positive, bargaining may fail, and Pigouvian intervention may be needed. This is a common exam distinction. The course emphasizes the Coase Theorem as a benchmark — the real world has positive transaction costs.

**Also see:** [Equation Explainer — Pigou, Coase, Tariff DWL](./EQUATION-EXPLAINER.md#eq-extern-trade)

---

## 8. Key Mathematical Tools

<a id="detail-term-lagrangian"></a>
### **Lagrangian**
**What it is:** A technique for solving constrained optimization problems. For maximizing $f(x)$ subject to $g(x) = 0$, form $\mathcal{L}(x, \lambda) = f(x) - \lambda g(x)$ (or $+ \lambda g(x)$ depending on convention). The FOCs set partial derivatives to zero. The multiplier $\lambda$ measures the marginal value of relaxing the constraint.
**When it is used in micro:** Every constrained optimization problem in the course uses the Lagrangian: UMP ($\mathcal{L} = u(x) + \lambda(w - p \cdot x)$), EMP ($\mathcal{L} = p \cdot x + \mu(\bar u - u(x))$), CMP ($\mathcal{L} = w \cdot z + \mu(q - f(z))$), and PMP when output is constrained.
**Exam tip:** Always write the Lagrangian explicitly before taking FOCs. The sign convention matters less than consistency. For UMP, the FOC $u_{x_k} = \lambda p_k$ means the multiplier $\lambda$ equals $MU_k/p_k$ — the marginal utility of income. Use ratio of FOCs to eliminate $\lambda$.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-ump)

<a id="detail-term-bordered-hessian"></a>
### **Bordered Hessian**
**What it is:** The matrix of second derivatives of the Lagrangian, bordered by the first derivatives of the constraint. For $n$ variables and one constraint, it is an $(n+1) \times (n+1)$ matrix. The sign pattern of its leading principal minors determines whether the critical point is a maximum or minimum.
**When it is used in micro:** The BH is the SOC test for all constrained optimization. For the UMP with two goods: $| \overline{H} | = 2u_xu_yu_{xy} - u_x^2u_{yy} - u_y^2u_{xx} \ge 0$ confirms a maximum (quasiconcave utility). For $n$ goods and $m$ constraints, successive leading principal minors must alternate in sign.
**Exam tip:** For a two-good UMP, you only need to compute the $3 \times 3$ BH determinant. Positive BH means the FOC gives a maximum. For an EMP, the same determinant condition applies (since it is a minimization, the sign condition flips). Memorize the $2 \times 2$ formula for speed.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-quasiconcavity), [§1 BH](#detail-term-bh)

<a id="detail-term-envelope-theorem"></a>
### **Envelope Theorem**
**What it is:** The derivative of the optimized value of a function with respect to a parameter equals the partial derivative of the Lagrangian with respect to that parameter, holding the optimal choices fixed. Formally: if $M(\theta) = \max_x f(x,\theta)$ s.t. $g(x,\theta)=0$, then $dM/d\theta = \partial \mathcal{L}/\partial \theta$ evaluated at the optimum.
**When it is used in micro:** The envelope theorem is behind most of the key identities in micro: (1) Roy's Identity: $\partial v/\partial p_k = -\lambda x_k$ (envelope applied to indirect utility). (2) Shephard's Lemma: $\partial e/\partial p_k = h_k$. (3) Hotelling's Lemma: $\partial \pi/\partial p = y$. (4) Marginal utility of income: $\partial v/\partial w = \lambda$.
**Exam tip:** The envelope theorem simplifies comparative statics enormously. Instead of re-solving the entire optimization after a parameter change, just differentiate the Lagrangian partially. In exams, say "by the envelope theorem" and skip the heavy algebra.

<a id="detail-term-implicit-function-theorem"></a>
### **Implicit Function Theorem**
**What it is:** A theorem from real analysis that tells you when a system of equations $F(x,y) = 0$ can be solved for $y$ as a function of $x$ near a point, and gives the derivative $dy/dx = -(\partial F/\partial y)^{-1}(\partial F/\partial x)$.
**When it is used in micro:** The IFT is the technical tool for deriving comparative statics from FOC systems. For example, the UMP FOCs give two equations $u_{x_1} - \lambda p_1 = 0$, $u_{x_2} - \lambda p_2 = 0$, $w - p_1 x_1 - p_2 x_2 = 0$. The IFT tells you that $x(p,w)$ and $\lambda(p,w)$ are differentiable functions of $(p,w)$ near the optimum, and it gives formulas for the derivatives.
**Exam tip:** You do not need to cite the IFT explicitly in most exam answers, but you rely on it whenever you differentiate the FOC system to get comparative statics. Set up the total differential of the FOC system and solve for $dx/dp$ using Cramer's rule — that is applying the IFT implicitly.

<a id="detail-term-intermediate-value-theorem"></a>
### **Intermediate Value Theorem**
**What it is:** If $f$ is continuous on $[a,b]$ and $f(a) < 0 < f(b)$, then there exists $c \in (a,b)$ such that $f(c) = 0$. More generally, a continuous function on an interval takes every value between its endpoints.
**When it is used in micro:** The IVT is essential for proving existence of general equilibrium. The argument: excess demand $E(p)$ for a good is a continuous function of price (under standard assumptions). At $p = 0$, $E(0) > 0$ (everyone demands infinite amounts of a free good). As $p \to \infty$, $E(p) < 0$ (resources flow to other markets). By IVT, there exists $p^*$ where $E(p^*) = 0$ — market-clearing equilibrium.
**Exam tip:** The IVT argument for GE existence has four steps: (1) continuity of excess demand, (2) sign at $p=0$, (3) sign as $p \to \infty$, (4) existence of $p^*$. This argument is required in any GE existence question. Draw the excess demand curve crossing the horizontal axis.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-ge-properties)

<a id="detail-term-homogeneity-properties"></a>
### **Homogeneity Properties**
**What it is:** A function $f$ is homogeneous of degree $k$ if $f(tx) = t^k f(x)$ for all $t > 0$. Key properties: Walrasian demand $x(p,w)$ is HD(0) — no money illusion. Indirect utility $v(p,w)$ is HD(0). Hicksian demand $h(p,u)$ is HD(0). Expenditure $e(p,u)$ is HD(1) in prices. Cost $c(w,q)$ is HD(1) in factor prices. Profit $\pi(p)$ is HD(1) in output prices.
**When it is used in micro:** Homogeneity is tested constantly. It provides testable restrictions on demand: scaling all prices and wealth by the same factor must leave demand unchanged. Euler's theorem relates the function value to the sum of its partial derivatives times their arguments: $\sum_i \partial f/\partial x_i \cdot x_i = k \cdot f(x)$.
**Exam tip:** Know the homogeneity of each function by heart. If a candidate demand function is not HD(0), it violates the consumer's budget-constrained optimization. Use Euler's theorem to check homogeneity or to derive restrictions in production (e.g., CRTS implies factor payments exhaust output).
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-homogeneity)

<a id="detail-term-concave-convex"></a>
### **Concave / Convex Function**
**What it is:** A function $f$ is concave if $f(\theta x + (1-\theta)y) \ge \theta f(x) + (1-\theta)f(y)$ for all $\theta \in [0,1]$. A function is convex if the inequality reverses ($\le$). Concave functions have Hessian matrices that are negative semidefinite; convex functions have positive semidefinite Hessians.
**When it is used in micro:** Concavity appears in: (1) Expenditure function $e(p,u)$ is concave in prices (implies $\partial h_k/\partial p_k \le 0$). (2) Cost function $c(w,q)$ is concave in factor prices (implies conditional factor demands slope downward). (3) Profit function $\pi(p)$ is convex in output prices (implies supply slopes upward). (4) Utility functions are typically assumed to be quasiconcave, not concave — concavity is too strong.
**Exam tip:** Concavity $\Rightarrow$ quasiconcavity, but not vice versa. A concave utility function automatically gives convex preferences, but the converse is false. Check concavity via eigenvalues of the Hessian (all $\le 0$ for concave). For a function of one variable, $f''(x) \le 0$ means concave.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-quasiconcavity)

<a id="detail-term-quasiconcave-quasiconvex"></a>
### **Quasiconcave / Quasiconvex Function**
**What it is:** $f$ is quasiconcave if its upper contour sets $\{x : f(x) \ge t\}$ are convex. Equivalently, $f(\lambda x + (1-\lambda)y) \ge \min\{f(x), f(y)\}$. $f$ is quasiconvex if its lower contour sets are convex. Quasiconcavity is weaker than concavity: every concave function is quasiconcave, but not vice versa.
**When it is used in micro:** Utility functions need to be quasiconcave (not concave) to represent convex preferences. This is the standard assumption throughout consumer theory. The bordered Hessian test checks for quasiconcavity. Production functions are also typically assumed quasiconcave for the isoquants to be convex.
**Exam tip:** The essential exam tool is the bordered Hessian test. For two variables, compute $| \overline{H} | = 2f_x f_y f_{xy} - f_x^2 f_{yy} - f_y^2 f_{xx}$ and check that it is non-negative. This ensures quasiconcavity. Do NOT assume a function is concave just because it is quasiconcave. Cobb-Douglas utility with $\alpha + \beta < 1$ is quasiconcave but not necessarily concave.
**Also see:** [Equation Explainer](./EQUATION-EXPLAINER.md#eq-quasiconcavity)

<a id="detail-term-slaters-condition"></a>
### **Slater's Condition**
**What it is:** A constraint qualification that ensures the Karush-Kuhn-Tucker (KKT) necessary conditions hold at a constrained optimum. For inequality constraints $g_j(x) \le 0$, Slater's condition requires there exists a point $x$ such that all nonlinear inequality constraints are strictly satisfied: $g_j(x) < 0$ for all nonlinear $g_j$. In other words, the feasible set has a non-empty interior relative to the nonlinear constraints.
**When it is used in micro:** Slater's condition justifies using the Lagrangian (without explicitly checking KKT) in the UMP and EMP. The UMP constraint $p \cdot x \le w$ is linear, so Slater's condition is automatically satisfied (find any point strictly inside the budget). Similarly, $x \ge 0$ inequality constraints (non-negativity) are linear and do not affect Slater.
**Exam tip:** Slater's condition is mostly a technical footnote. In practice, for the standard UMP with a linear budget constraint and non-negativity constraints, the constraint qualification holds automatically. Mention it if the question asks about the technical validity of the Lagrangian approach. For nonlinear constraints (rare in this course), check Slater explicitly.

---
