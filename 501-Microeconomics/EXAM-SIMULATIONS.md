# 501 Graduate Microeconomics — Mock Exam Simulations

> **Format:** 8 question sets available — choose any 5. Each set = 14 marks. Total = 70 marks.
> **Time:** ~60 minutes total (≈12 minutes per question).
> **Papers:** 3 simulations varying in difficulty and topic emphasis.
>
> Based on the 8 topic clusters: Consumer Theory 1A · Consumer Theory 1B · Demand · Production · Welfare · General Equilibrium · Game Theory · Externalities/Trade

---

## How to Use This Document

| Step | Action | Time |
|------|--------|------|
| 1 | Read all 8 questions, pick your best 5 | 5 min |
| 2 | Per question: plan structure (3 bullet outline) | 2 min |
| 3 | Per question: write full answer | 8 min |
| 4 | Per question: review & check for errors | 2 min |
| **Total** | **5 questions × 12 min** | **60 min** |

Attempt under timed conditions. After finishing, compare your answer skeletons to the ones provided.

---

# PAPER 1 — MODERATE

> **Emphasis:** Balanced topic coverage with moderate computational content.
> **Ideal for:** First practice simulation to build exam technique.
> **Question topics:** Consumer 1A · Demand · Production · Welfare · Game Theory

---

### P1.Q1 — Consumer Theory 1A (14 marks) — recommended: 12 minutes

Suppose a consumer has a rational preference relation $\succeq$ defined on the consumption set $X = \mathbb{R}^2_+$.

**(a)** Define the *indifference set* $\text{IND}(x)$ and the *upper contour set* $\text{UCS}(x)$ for a bundle $x \in X$. Explain how these two sets are related. [3 marks]

**(b)** Prove that if $\succeq$ satisfies strong monotonicity, then every indifference curve must be downward sloping. Use a proof by contradiction and support your argument with a clearly labelled diagram. [5 marks]

**(c)** State the two equivalent definitions of convexity of preferences. Using a diagram, explain how convex preferences differ from *strictly* convex preferences. [4 marks]

**(d)** Explain why a quasiconcave utility function $u(\cdot)$ is equivalent to convex preferences. Briefly discuss the relationship between the bordered Hessian determinant and the sign of $d\text{MRS}/dx$. [2 marks]

---

**Answer Skeleton:**

| Part | Key Points |
|------|-----------|
| **(a)** | $\text{IND}(x) = \{y \in X : y \sim x\}$; $\text{UCS}(x) = \{y \in X : y \succeq x\}$; $\text{IND}(x) = \text{UCS}(x) \cap \text{LCS}(x)$. Mention upper/lower contour sets are the primitive building blocks. |
| **(b)** | Proof by contradiction: (1) assume IC upward sloping at $x$; (2) pick $y$ northeast of $x$ on same IC $\Rightarrow y \gg x$; (3) by SM, $y \succ x$; (4) by IND definition, $y \sim x$; (5) contradiction. **Diagram:** downward-sloping IC with NE (strictly preferred) and SW (strictly worse) regions shaded. |
| **(c)** | Def 1: $y \succeq x$ and $z \succeq x \Rightarrow ty+(1-t)z \succeq x$ for $t \in [0,1]$. Def 2: $\text{UCS}(x)$ is convex. Strict convexity: same with $y \neq z \Rightarrow ty+(1-t)z \succ x$. **Diagram:** weakly convex IC with linear segment vs strictly convex IC (bowed inward). |
| **(d)** | Convex UCS $\iff$ quasiconcave $u$: $u(\lambda x + (1-\lambda)y) \ge \min\{u(x), u(y)\}$. The bordered Hessian determinant $|B| < 0$ for strict quasiconcavity; $d\text{MRS}/dx = -|B|/u_y^3$ establishes the link. |
| **Key formulas** | MRS $= \frac{MU_1}{MU_2}$; Bordered Hessian; $d\text{MRS}/dx < 0 \iff$ convex ICs |
| **Key diagram** | Downward-sloping IC with NE/SW quadrants; convex vs strictly convex ICs side-by-side |

---

### P1.Q2 — Demand & Elasticities (14 marks) — recommended: 12 minutes

A firm estimates constant-elasticity demand for its product $X$:

$$X = 150\, P_X^{-1.3}\, P_Y^{0.7}\, P_Z^{-0.2}\, I^{0.85}$$

**(a)** Interpret each exponent in terms of the relevant elasticity. Classify good $X$ by type using the income elasticity. [3 marks]

**(b)** Is good $Y$ a gross substitute or complement for $X$? Is good $Z$ a gross substitute or complement? Explain. [2 marks]

**(c)** If the price of good $Y$ increases by 8%, what is the predicted percentage change in quantity demanded of $X$? [2 marks]

**(d)** The firm's marginal cost is constant at $\$8$. Using the Lerner Index, calculate the profit-maximising price. [3 marks]

**(e)** The government imposes a $\$5$ per-unit tax on $X$. Your colleague claims consumers will bear the entire tax because "the firm will just pass it on." Using the elasticities above, evaluate this claim. Who bears more of the tax burden, consumers or producers? Explain. [4 marks]

---

**Answer Skeleton:**

| Part | Key Points |
|------|-----------|
| **(a)** | $\varepsilon_{XX} = -1.3$ (own-price, elastic); $\varepsilon_{XY} = 0.7$; $\varepsilon_{XZ} = -0.2$; $\varepsilon_{I} = 0.85$. Since $0 < 0.85 < 1$, $X$ is a **necessity** (positive income elasticity but less than 1). |
| **(b)** | $\varepsilon_{XY} = 0.7 > 0 \Rightarrow Y$ is a **gross substitute** ($P_Y \uparrow \Rightarrow X \uparrow$). $\varepsilon_{XZ} = -0.2 < 0 \Rightarrow Z$ is a **gross complement** ($P_Z \uparrow \Rightarrow X \downarrow$). |
| **(c)** | $\% \Delta Q_X = \varepsilon_{XY} \times \% \Delta P_Y = 0.7 \times 8\% = +5.6\%$. Demand for $X$ rises 5.6% when $Y$'s price rises 8%. |
| **(d)** | Lerner Index: $\frac{P-MC}{P} = \frac{1}{|\varepsilon|} = \frac{1}{1.3} \approx 0.769$. So $P = \frac{MC}{1-1/|\varepsilon|} = \frac{8}{1-0.769} = \frac{8}{0.231} \approx \$34.63$. |
| **(e)** | Tax incidence depends on relative elasticities. Consumers' share $= \frac{\varepsilon_S}{\varepsilon_S - \varepsilon_D}$, producers' share $= \frac{-\varepsilon_D}{\varepsilon_S - \varepsilon_D}$. With $\varepsilon_D = -1.3$ (elastic demand) and $\varepsilon_S$ (supply elasticity, typically more elastic in LR), consumers bear less of the tax. The colleague is wrong — elastic demand means firms cannot fully pass on the tax. **Diagram:** tax wedge with consumer and producer shares labelled. |
| **Key formulas** | Lerner Index; tax incidence share formulas; constant-elasticity demand interpretation |
| **Key diagram** | D-S with tax wedge, showing $P_b > P^* > P_s$ and DWL triangle |

---

### P1.Q3 — Production (14 marks) — recommended: 12 minutes

A firm produces output using capital ($K$) and labour ($L$) according to:

$$Q = K^{1/4} L^{1/2}$$

Input prices are $w$ (wage) and $r$ (rental rate).

**(a)** Determine the returns to scale of this production function. Explain your reasoning. [2 marks]

**(b)** Derive the conditional factor demands $K(w,r,Q)$ and $L(w,r,Q)$. [4 marks]

**(c)** Derive the long-run cost function $C(w,r,Q)$. [2 marks]

**(d)** Verify that the cost function is homogeneous of degree 1 in input prices and that it is concave in $w$ (holding $r$ and $Q$ fixed). Interpret the economic meaning of concavity in input prices. [4 marks]

**(e)** Suppose the firm is a price-taker with output price $P = 20$, $w = 1$, and $r = 4$. Find the profit-maximising output and derive the firm's supply function. [2 marks]

---

**Answer Skeleton:**

| Part | Key Points |
|------|-----------|
| **(a)** | $Q(tK, tL) = (tK)^{1/4}(tL)^{1/2} = t^{3/4} K^{1/4} L^{1/2} = t^{3/4} Q$. Since $3/4 < 1$, **decreasing returns to scale**. |
| **(b)** | Lagrangian: $\mathcal{L} = wL + rK - \lambda(K^{1/4}L^{1/2} - Q)$. FOC: $MP_K/MP_L = w/r \Rightarrow \frac{(1/4)K^{-3/4}L^{1/2}}{(1/2)K^{1/4}L^{-1/2}} = \frac{w}{r} \Rightarrow \frac{L}{2K} = \frac{w}{r} \Rightarrow L = \frac{2w}{r}K$. Sub into production function: $K^{1/4}(2wK/r)^{1/2} = Q \Rightarrow K^{3/4}(2w/r)^{1/2} = Q \Rightarrow K = Q^{4/3} (r/2w)^{2/3}$. Then $L = (2w/r) \cdot Q^{4/3} (r/2w)^{2/3} = Q^{4/3} (2w/r)^{1/3}$. |
| **(c)** | $C = wL + rK = w \cdot Q^{4/3} (2w/r)^{1/3} + r \cdot Q^{4/3} (r/2w)^{2/3}$. Simplify: $C = Q^{4/3} [ w^{4/3} (2/r)^{1/3} + r^{1/3} (r/2w)^{2/3} r ] = Q^{4/3} \cdot A \cdot w^{2/3} r^{1/3}$ where $A = (2^{1/3} + 2^{-2/3})$. After algebra: $C(w,r,Q) = Q^{4/3} (3/2^{2/3}) w^{2/3} r^{1/3}$. |
| **(d)** | **HD(1):** $C(tw,tr,Q) = Q^{4/3} (3/2^{2/3}) (tw)^{2/3}(tr)^{1/3} = t \cdot C(w,r,Q)$. **Concavity in $w$:** By Shephard's lemma, $\partial C/\partial w = L(w,r,Q)$. Then $\partial^2 C/\partial w^2 = \partial L/\partial w < 0$ (as $w \uparrow$, firm substitutes away from $L$). Economic meaning: the firm adjusts its input mix when input prices change, so costs rise less than linearly. |
| **(e)** | $MC = \partial C/\partial Q = (4/3) Q^{1/3} \cdot A \cdot w^{2/3} r^{1/3}$. With $w=1,r=4$: $MC = (4/3) Q^{1/3} \cdot A \cdot 1 \cdot 4^{1/3}$. Set $P = MC$: $20 = k Q^{1/3}$ where $k$ is the constant. Solve $Q^* = (20/k)^3$. Supply: $Q(P) = (P/k)^3$ for $P \ge \min AVC$. |
| **Key formulas** | Conditional factor demands via Lagrangian; Shephard's lemma; $P = MC$ for supply |
| **Key diagram** | Isoquant-isocost tangency for cost minimisation; MC curve with $P = MC$ equilibrium |

---

### P1.Q4 — Welfare Economics: CV, EV, CS (14 marks) — recommended: 12 minutes

Consider a price **decrease** for a normal good from $p^0$ to $p^1$ (where $p^1 < p^0$). All other prices and money income remain constant.

**(a)** Define the Compensating Variation (CV) and Equivalent Variation (EV) in terms of the expenditure function $e(p,u)$. For each measure, identify the reference price vector and reference utility level. [4 marks]

**(b)** Explain why, for a normal good, the welfare measures rank as $EV > CS > CV$ when price falls. Provide a carefully labelled diagram showing the three demand curves $h(p,u^0)$, $x(p,w)$, and $h(p,u^1)$, and shade the area corresponding to each measure. [6 marks]

**(c)** Under what conditions will $CV = EV = CS$? Explain the economic intuition using the income effect. [2 marks]

**(d)** Suppose the good is **inferior** (negative income elasticity). State how the inequality between CV, EV, and CS would change for a price decrease. (No diagram required.) [2 marks]

---

**Answer Skeleton:**

| Part | Key Points |
|------|-----------|
| **(a)** | **CV** $= e(p^1, u^1) - e(p^1, u^0)$ — compensation after price change to restore original utility $u^0$ at new prices $p^1$. Uses $(p^1, u^0)$ as anchor. **EV** $= e(p^0, u^1) - e(p^0, u^0)$ — compensation before price change to reach new utility $u^1$ at old prices $p^0$. Uses $(p^0, u^1)$ as anchor. |
| **(b)** | **Diagram:** Three demand curves on one axes. $h(p,u^0)$ is leftmost (lower utility), $x(p,w)$ is middle (Marshallian), $h(p,u^1)$ is rightmost (higher utility). For a normal good, price fall $\Rightarrow$ real income rises $\Rightarrow$ Hicksian at higher utility is to the right. **EV** $= \int_{p^1}^{p^0} h(p,u^1)dp$ (largest area); **CS** $= \int_{p^1}^{p^0} x(p,w)dp$ (middle); **CV** $= \int_{p^1}^{p^0} h(p,u^0)dp$ (smallest). Hence $EV > CS > CV$. |
| **(c)** | **Zero income effect** (quasilinear utility: $u = v(x) + y$). When there is no income effect, Marshallian and Hicksian demands coincide $\Rightarrow$ all three measures are identical. Intuition: with zero income effect, the welfare measures do not differ because real income changes do not shift demand. |
| **(d)** | For an **inferior** good with a price decrease: $CV > CS > EV$ (ordering reverses because the Hicksian demands cross sides — $h(p,u^1)$ is now to the left of $h(p,u^0)$). |
| **Key formulas** | $CV = e(p^1, u^1) - e(p^1, u^0)$; $EV = e(p^0, u^1) - e(p^0, u^0)$; $CS = \int_{p^1}^{p^0} x(p,w) dp$ |
| **Key diagram** | Three demand curves intersecting: $h(p,u^0)$, $x(p,w)$, $h(p,u^1)$ with shaded areas for EV, CS, CV |

---

### P1.Q5 — Game Theory (14 marks) — recommended: 12 minutes

Two firms compete as Bertrand duopolists selling differentiated products. The demand functions are:

$$q_1 = 100 - 2p_1 + p_2$$
$$q_2 = 100 - 2p_2 + p_1$$

Each firm has constant marginal cost $MC = 10$ and zero fixed costs.

**(a)** Define a Nash equilibrium for this pricing game. [2 marks]

**(b)** Derive each firm's best-response function. Show all steps. [4 marks]

**(c)** Compute the Bertrand-Nash equilibrium prices, quantities, and profits. [4 marks]

**(d)** Suppose the firms collude and set prices to maximise joint profit. Find the collusive price, quantity, and profit. Explain why this collusive outcome is not a Nash equilibrium — use the Prisoners' Dilemma framework. [4 marks]

---

**Answer Skeleton:**

| Part | Key Points |
|------|-----------|
| **(a)** | A Nash equilibrium is a pair $(p_1^*, p_2^*)$ where each firm's price is a best response to the other's: $\pi_i(p_i^*, p_j^*) \ge \pi_i(p_i, p_j^*)$ for all $p_i \ge 0$. No unilateral deviation is profitable. |
| **(b)** | $\pi_1 = (p_1-10)(100 - 2p_1 + p_2) = -2p_1^2 + p_1p_2 + 120p_1 - 10p_2 - 1000$. FOC: $\partial\pi_1/\partial p_1 = -4p_1 + p_2 + 120 = 0 \Rightarrow p_1 = (120 + p_2)/4$. Symmetrically, $p_2 = (120 + p_1)/4$. |
| **(c)** | Solving: $p_1 = (120 + (120 + p_1)/4)/4 = 30 + p_1/16 + 30/4 \Rightarrow (15/16)p_1 = 30 + 7.5 = 37.5 \Rightarrow p_1 = 40$. Symmetric: $p_1^* = p_2^* = 40$. $q_1 = 100 - 80 + 40 = 60$. $\pi_1 = (40-10) \times 60 = 1800$ each. |
| **(d)** | Collusion: set $p_1 = p_2 = p$ to maximise $\pi = 2(p-10)(100-p)$. FOC: $d\pi/dp = 2(100-p) - 2(p-10) = 200 - 2p - 2p + 20 = 220 - 4p = 0 \Rightarrow p = 55$. $q = 100-55+55=100$, $\pi = 2(55-10)(45) = 2 \times 45 \times 45 = 4050$. But each firm can deviate: if Firm 1 sets $p_1 = (120 + 55)/4 = 43.75$ while Firm 2 stays at 55, Firm 1 earns $(43.75-10)(100-87.5+55) = 33.75 \times 67.5 = 2278$, which is more than its collusive share (2025). This is the Prisoners' Dilemma — each has incentive to cheat, making collusion unstable without enforcement. |
| **Key formulas** | Best-response functions; Bertrand-Nash equilibrium; joint profit maximisation; Prisoners' Dilemma payoff structure |
| **Key diagram** | Best-response function graph showing intersection; payoff matrix for deviation incentives |

---

# PAPER 2 — HARDER

> **Emphasis:** More GE, welfare theory, and externalities. Fewer production/elasticity computations.
> **Ideal for:** Second practice — push your theoretical reasoning.
> **Question topics:** General Equilibrium · Welfare (Pareto) · Externalities/Trade · Consumer 1B · Game Theory

---

### P2.Q1 — General Equilibrium: Existence, Uniqueness, Stability (14 marks) — recommended: 12 minutes

**(a)** Distinguish clearly between general equilibrium (GE) and partial equilibrium (PE) analysis. Provide a concrete example of an economic shock where PE analysis would give misleading results because it ignores cross-market feedback. [4 marks]

**(b)** Using an excess demand function $E(P) = Q_D(P) - Q_S(P)$, explain the conditions under which:
  - (i) No equilibrium exists in a market
  - (ii) Multiple equilibria exist
  - (iii) An equilibrium is stable versus unstable

  Illustrate each case with a separate, clearly labelled diagram. [6 marks]

**(c)** State Walras' Law and explain its significance for the existence of a GE. Why does the existence proof require only $n-1$ independent market-clearing conditions? How does the choice of a numeraire resolve the indeterminacy of absolute prices? [4 marks]

---

**Answer Skeleton:**

| Part | Key Points |
|------|-----------|
| **(a)** | **PE:** single market, ceteris paribus, ignores feedback. **GE:** all markets simultaneously, prices determined interdependently. **Example:** drought destroys wheat harvest. PE: wheat price rises. GE: wheat $\uparrow$ $\rightarrow$ bread $\uparrow$ $\rightarrow$ rice demand $\uparrow$ $\rightarrow$ land shifts from cotton to wheat $\rightarrow$ cotton $\uparrow$ $\rightarrow$ textiles $\uparrow$ $\rightarrow$ factor markets adjust $\rightarrow$ feedback to all markets. |
| **(b)** | (i) **No equilibrium:** $E(P)$ never crosses zero (e.g., backward-bending supply everywhere above demand; vertical supply with demand entirely below it). (ii) **Multiple equilibria:** $E(P)$ crosses zero several times (e.g., backward-bending labour supply $\rightarrow$ three intersections). (iii) **Stable:** $dE/dP < 0$ at equilibrium (excess demand falls as $P$ rises — Walrasian tâtonnement). **Unstable:** $dE/dP > 0$. **Diagrams:** D-S graphs for each case; $E(P)$ graph showing zero crossings. |
| **(c)** | **Walras' Law:** $\sum_{i=1}^n p_i Z_i(p) = 0$ for all $p$ (value of excess demand sums to zero identically). If $n-1$ markets clear, the $n^{\text{th}}$ must also clear $\Rightarrow$ only $n-1$ independent equations. With $n$ prices to determine, we need a **numeraire** — fix one price (e.g., $p_1 = 1$) and solve for $n-1$ relative prices. Existence proof uses Brouwer/Kakutani fixed-point theorem on the simplex of relative prices. Arrow-Debreu (1954) reference. |
| **Key formulas** | $E(P) = Q_D(P) - Q_S(P)$; Walras' Law: $\sum p_i Z_i(p) = 0$; tâtonnement: $\dot{p} = k \cdot E(p)$ |
| **Key diagrams** | D-S for no equilibrium / multiple / stable / unstable; $E(P)$ with zero crossings; simplex of relative prices |

---

### P2.Q2 — Welfare: Pareto Optimality & Welfare Theorems (14 marks) — recommended: 12 minutes

"Pareto optimality is necessary but not sufficient for social welfare maximisation."

**(a)** Define Pareto optimality and social welfare maximisation. Explain why the two concepts are fundamentally distinct. [3 marks]

**(b)** Using the Grand Utility Possibility Frontier (GUPF) and social indifference curves (Bergson-Samuelson social welfare function), illustrate the relationship between Pareto optimal allocations and the social welfare maximum. Identify the 'point of bliss' on your diagram. [5 marks]

**(c)** State and explain the First and Second Welfare Theorems. How does the Second Welfare Theorem's emphasis on lump-sum transfers separate the issues of efficiency and equity? [4 marks]

**(d)** Does perfect competition ensure that social welfare is maximised in a $2 \times 2 \times 2$ model? Justify your answer with reference to the sufficient conditions required. [2 marks]

---

**Answer Skeleton:**

| Part | Key Points |
|------|-----------|
| **(a)** | **Pareto optimal:** no reallocation can make one person better off without making another worse off. **SW max:** the point on the GUPF that maximises a specific social welfare function $W(U_1, U_2, \dots)$. All SW maxima are Pareto optimal, but not vice versa — different SWFs select different points along the Pareto frontier (e.g., utilitarian vs Rawlsian). |
| **(b)** | **Diagram:** GUPF is concave (diminishing marginal rate of transformation between utilities). Social indifference contours are convex. Tangency = 'point of bliss' = SW maximum. Any point on the UPF below this tangency is PO but not SW-maximising. The GUPF is the envelope of all UPFs (each UPF corresponds to a different initial distribution of resources). |
| **(c)** | **FWT:** Every competitive equilibrium is Pareto optimal (under: no externalities, perfect competition, complete markets, full information). **SWT:** Every Pareto optimal allocation can be decentralised as a competitive equilibrium with appropriate lump-sum transfers. **Efficiency vs equity:** SWT says the market achieves efficiency (any PO point), while the government can redistribute endowments to achieve the desired equitable distribution — these are separable. |
| **(d)** | **No** — competition gives Pareto optimality (FWT), but PO is not SW maximisation. Sufficient conditions for SW max in $2\times2\times2$: (i) all three Pareto efficiency conditions (MRS equality, MRTS equality, MRPT $=$ MRS), (ii) perfect competition, (iii) a social welfare function to choose among PO allocations. Competition alone addresses (i) and (ii) but not (iii). |
| **Key formulas** | $W(U_1, U_2)$; GUPF envelope; $MRS = MRT$ at optimum; $MRPT = MRS$ for product-mix efficiency |
| **Key diagram** | GUPF with social indifference curves, point of bliss, sub-optimal PO points labelled |

---

### P2.Q3 — Externalities & Pigouvian Correction (14 marks) — recommended: 12 minutes

Consider two firms: Firm A (a steel mill) and Firm B (a fishery). Firm A's steel production generates pollution $x$ that flows downstream and raises Firm B's costs. The cost functions are:

$$C_A(s, x) = s^2 + (x - 4)^2 \quad \text{(steel output $s$, pollution $x$)}$$
$$C_B(f, x) = f^2 + x f \quad \text{(fish output $f$, pollution $x$)}$$

Prices are $p_S = 12$ (steel) and $p_F = 10$ (fish).

**(a)** Find the privately optimal output and pollution levels when each firm maximises its own profit independently. Compute each firm's profit and the total profit. [4 marks]

**(b)** Find the socially optimal output and pollution levels by maximising joint profit. Explain why the private outcome diverges from the social optimum. [4 marks]

**(c)** Design a Pigouvian tax (or subsidy) scheme that achieves the social optimum. Calculate the optimal tax rate and explain which firm should be taxed or subsidised. [3 marks]

**(d)** Explain the Coase Theorem in the context of this steel-fishery problem. Under what conditions can bargaining between the firms achieve the efficient outcome regardless of the initial assignment of property rights? [3 marks]

---

**Answer Skeleton:**

| Part | Key Points |
|------|-----------|
| **(a)** | **Firm A:** $\pi_A = 12s - s^2 - (x-4)^2$. FOC: $\partial\pi_A/\partial s = 12 - 2s = 0 \Rightarrow s^* = 6$; $\partial\pi_A/\partial x = -2(x-4) = 0 \Rightarrow x^* = 4$. $\pi_A = 72 - 36 - 0 = 36$. **Firm B:** $\pi_B = 10f - f^2 - xf$. FOC: $\partial\pi_B/\partial f = 10 - 2f - x = 0 \Rightarrow f^* = (10-x)/2 = 3$ (given $x=4$). $\pi_B = 30 - 9 - 12 = 9$. Total $\pi = 45$. |
| **(b)** | **Joint max:** $\pi_J = 12s - s^2 - (x-4)^2 + 10f - f^2 - xf$. FOC $\partial\pi_J/\partial x$: $-2(x-4) - f = 0 \Rightarrow f = 8 - 2x$. FOC $\partial\pi_J/\partial f$: $10 - 2f - x = 0 \Rightarrow f = (10-x)/2$. Equate: $(10-x)/2 = 8-2x \Rightarrow 10-x = 16-4x \Rightarrow 3x = 6 \Rightarrow x^{**} = 2$. Then $f^{**} = (10-2)/2 = 4$, $s^{**} = 6$. $\pi_J = (72-36-4) + (40-16-8) = 32 + 16 = 48$. **Divergence:** private optimum ignores the external cost ($x$ reduces B's profit), so firms over-pollute ($x=4$ vs $x=2$). |
| **(c)** | Pigouvian tax $\tau$ on Firm A's pollution $x$: at the social optimum, the marginal external damage is $\partial C_B/\partial x = f^{**} = 4$. Set $\tau = \text{MED} = 4$ per unit of $x$. Firm A then maximises $12s - s^2 - (x-4)^2 - 4x$. FOC $\partial/\partial x$: $-2(x-4) - 4 = 0 \Rightarrow x = 2$ (social optimum achieved). Alternatively, subsidise Firm B for reducing output below private optimum. |
| **(d)** | **Coase Theorem:** If property rights are well-defined and transaction costs are zero, private bargaining leads to the efficient outcome regardless of initial rights assignment. If B has the right to clean water, A pays B to accept some pollution. If A has the right to pollute, B pays A to reduce pollution. In both cases, bargaining achieves $x=2$ (efficient), but the direction of payment (who pays whom) differs. Conditions for Coase to work: zero transaction costs, no strategic behaviour, well-defined property rights. |
| **Key formulas** | $\pi_A$ and $\pi_B$; joint profit maximisation; Pigouvian tax $\tau = \partial C_B/\partial x$ at social optimum |
| **Key diagram** | Marginal private benefit vs marginal external cost; optimal pollution level where $MB = MD$ |

---

### P2.Q4 — Consumer Theory 1B: UMP/EMP Duality (14 marks) — recommended: 12 minutes

A consumer has Cobb-Douglas utility $u(x_1, x_2) = x_1^\alpha x_2^\beta$ where $\alpha, \beta > 0$ and $\alpha + \beta = 1$. The consumer faces prices $p_1, p_2 > 0$ and has wealth $w$.

**(a)** Set up and solve the Utility Maximisation Problem (UMP). Derive the Walrasian demand functions $x_1(p,w)$ and $x_2(p,w)$. State two key properties of these demand functions. [4 marks]

**(b)** Derive the indirect utility function $v(p,w)$. Verify Roy's identity for good 1. [4 marks]

**(c)** Set up and solve the Expenditure Minimisation Problem (EMP). Derive the Hicksian (compensated) demand functions $h_1(p,u)$ and $h_2(p,u)$, and the expenditure function $e(p,u)$. [4 marks]

**(d)** Verify the duality identity $e\big(p,\, v(p,w)\big) = w$. Interpret this identity in economic terms. [2 marks]

---

**Answer Skeleton:**

| Part | Key Points |
|------|-----------|
| **(a)** | **UMP Lagrangian:** $\mathcal{L} = x_1^\alpha x_2^\beta - \lambda(p_1 x_1 + p_2 x_2 - w)$. FOC: $\alpha x_1^{\alpha-1} x_2^\beta = \lambda p_1$; $\beta x_1^\alpha x_2^{\beta-1} = \lambda p_2$. Divide: $\frac{\alpha x_2}{\beta x_1} = \frac{p_1}{p_2} \Rightarrow x_2 = \frac{\beta p_1}{\alpha p_2} x_1$. Budget: $p_1 x_1 + p_2 \cdot \frac{\beta p_1}{\alpha p_2} x_1 = w \Rightarrow x_1(1 + \beta/\alpha)p_1 = w \Rightarrow x_1^* = \frac{\alpha w}{p_1}$, $x_2^* = \frac{\beta w}{p_2}$. **Properties:** (1) HD(0) in $(p,w)$; (2) Walras' Law holds $(p_1 x_1 + p_2 x_2 = w)$; (3) Engel curves are linear through origin. |
| **(b)** | $v(p,w) = \left(\frac{\alpha w}{p_1}\right)^\alpha \left(\frac{\beta w}{p_2}\right)^\beta = w \left(\frac{\alpha}{p_1}\right)^\alpha \left(\frac{\beta}{p_2}\right)^\beta$. **Roy's identity:** $x_1(p,w) = -\frac{\partial v/\partial p_1}{\partial v/\partial w}$. Compute $\partial v/\partial p_1 = -\alpha w \alpha^\alpha \beta^\beta p_1^{-\alpha-1} p_2^{-\beta} = -\alpha v/p_1$; $\partial v/\partial w = v/w$. Then $-\frac{-\alpha v/p_1}{v/w} = \frac{\alpha w}{p_1} = x_1^*$. Verified. |
| **(c)** | **EMP Lagrangian:** $\mathcal{L} = p_1 x_1 + p_2 x_2 - \mu(x_1^\alpha x_2^\beta - u)$. Same tangency condition: $x_2 = \frac{\beta p_1}{\alpha p_2} x_1$. Sub into constraint: $x_1^\alpha \left(\frac{\beta p_1}{\alpha p_2} x_1\right)^\beta = u \Rightarrow x_1^{\alpha+\beta} \left(\frac{\beta p_1}{\alpha p_2}\right)^\beta = u \Rightarrow h_1 = u\left(\frac{\alpha p_2}{\beta p_1}\right)^\beta$, $h_2 = u\left(\frac{\beta p_1}{\alpha p_2}\right)^\alpha$. $e = p_1 h_1 + p_2 h_2 = u\left[\left(\frac{\alpha p_2}{\beta p_1}\right)^\beta p_1 + \left(\frac{\beta p_1}{\alpha p_2}\right)^\alpha p_2\right] = u\left(\frac{p_1}{\alpha}\right)^\alpha \left(\frac{p_2}{\beta}\right)^\beta$. |
| **(d)** | $e(p, v(p,w)) = v(p,w) \cdot \left(\frac{p_1}{\alpha}\right)^\alpha \left(\frac{p_2}{\beta}\right)^\beta = w \left(\frac{\alpha}{p_1}\right)^\alpha \left(\frac{\beta}{p_2}\right)^\beta \cdot \left(\frac{p_1}{\alpha}\right)^\alpha \left(\frac{p_2}{\beta}\right)^\beta = w$. **Interpretation:** the minimum expenditure required to reach the utility level achievable with wealth $w$ is exactly $w$. This is the fundamental duality identity linking UMP and EMP. |
| **Key formulas** | Walrasian demand $x_k = \alpha_k w/p_k$; Indirect utility $v = w(\alpha/p_1)^\alpha(\beta/p_2)^\beta$; Roy's identity; Hicksian demand; Shephard's lemma; $e(p,v(p,w)) = w$ |
| **Key diagram** | UMP-EMP duality triptych showing the four-way relationship between $x$, $h$, $v$, and $e$ |

---

### P2.Q5 — Game Theory: Backward Induction & SPNE (14 marks) — recommended: 12 minutes

Consider a market with an incumbent firm (A) and a potential entrant (B). The game proceeds as follows:

1. Firm B decides whether to **Enter** or **Stay Out**.
2. If B stays out, A earns monopoly profit of 120 and B earns 0.
3. If B enters, A chooses between **Accommodate** (both earn 50) or **Fight** (price war — both lose 15).

**(a)** Represent this game in extensive form (game tree). Label all decision nodes, information sets, and payoffs clearly. [3 marks]

**(b)** Using backward induction, find the Subgame Perfect Nash Equilibrium (SPNE). Explain each step of your reasoning. [4 marks]

**(c)** Now suppose that before B's entry decision, Firm A can make a non-refundable investment of 35 in excess capacity. If A invests, fighting is impossible — A's only post-entry response is to accommodate. Draw the new game tree and find the SPNE. Does the investment alter the equilibrium? [4 marks]

**(d)** Explain the paradox of backward induction as illustrated by the finitely repeated Prisoners' Dilemma or the centipede game. Why might real players not follow the backward induction prediction? [3 marks]

---

**Answer Skeleton:**

| Part | Key Points |
|------|-----------|
| **(a)** | **Tree:** (Root -> B's node) B chooses Enter or Stay Out. If Stay Out: $(120, 0)$. If Enter: A's node, A chooses Accommodate $(50, 50)$ or Fight $(-15, -15)$. Information sets are singletons (perfect information). |
| **(b)** | Step 1: At A's post-entry node, compare Accommodate $(50)$ vs Fight $(-15)$ $\Rightarrow$ A accommodates. Step 2: At B's initial node, expected profit from Enter $= 50$ (since A accommodates) vs Stay Out $= 0$ $\Rightarrow$ B enters. **SPNE:** {Enter; if Enter then Accommodate}. |
| **(c)** | **New tree:** A first chooses Invest (cost 35) or Don't Invest. If Invest: B chooses Enter or Stay Out. If Enter: A must accommodate (fight impossible) $\Rightarrow$ A's payoff $= 50 - 35 = 15$, B's $= 50$. If Stay Out: A gets $120 - 35 = 85$, B gets 0. At B's node: Enter yields 50 $>$ 0, so B enters. If Don't Invest: original subgame, B enters and A accommodates (A gets 50, B gets 50). Comparing: if A invests, A gets 15; if A doesn't invest, A gets 50. **SPNE:** A does **not** invest, B enters, A accommodates. The investment is not profitable — A cannot credibly commit to fight even with the investment because after investment, accommodation remains optimal for A. |
| **(d)** | **Paradox:** In finite-horizon games, backward induction predicts unravelling from the terminal node, often yielding a Pareto-inferior outcome. **Finitely repeated PD:** unique SPNE is defect every round (unravelling from the last period), but experimental subjects often cooperate in early rounds. **Centipede game:** two players alternate taking from a growing pot; backward induction predicts first player takes immediately, but experiments show players pass several times. **Why real players differ:** (1) limited rationality / cognitive bounds; (2) incomplete information about others' rationality; (3) social preferences (altruism, fairness); (4) the paradox arises because backward induction assumes common knowledge of rationality, which fails in practice. |
| **Key formulas** | Backward induction; SPNE; payoff comparisons at each node |
| **Key diagrams** | Game trees for both scenarios with payoffs labelled |

---

# PAPER 3 — BALANCED

> **Emphasis:** Mix of computation and theory, covering all 4 answer files.
> **Ideal for:** Final practice — simulates a real exam draw.
> **Question topics:** Consumer 1A · Production · General Equilibrium (Edgeworth) · Welfare (Kaldor-Hicks) · Externalities/Trade (Tariff)

---

### P3.Q1 — Consumer Theory 1A: Quasilinear Utility & Homotheticity (14 marks) — recommended: 12 minutes

Consider the utility function $u(x, y) = 2x + \ln(y)$ defined for $x > 0$, $y > 0$, where $x$ is a composite good with price $p_x$ and $y$ is a specific good with price $p_y$. Consumer has income $I$.

**(a)** Show that this utility function represents convex preferences by proving that the MRS is diminishing along any indifference curve. [4 marks]

**(b)** Derive the Marshallian (Walrasian) demand functions for $x$ and $y$. Explain why the demand for $y$ does not depend on income. [4 marks]

**(c)** Is this utility function homothetic? Justify your answer by examining the Engel curve for $y$ and the behaviour of the MRS along rays from the origin. [3 marks]

**(d)** Compare the expenditure patterns implied by this utility function with those of a Cobb-Douglas utility function $u = x^\alpha y^\beta$. How does the income expansion path differ between the two? [3 marks]

---

**Answer Skeleton:**

| Part | Key Points |
|------|-----------|
| **(a)** | $\text{MRS} = \frac{MU_x}{MU_y} = \frac{2}{1/y} = 2y$. Along an IC: $d\text{MRS}/dx = 2 \cdot dy/dx$. From $MU_x dx + MU_y dy = 0$: $dy/dx = -MU_x/MU_y = -2y$. So $d\text{MRS}/dx = 2 \cdot (-2y) = -4y < 0$ $\Rightarrow$ diminishing MRS $\Rightarrow$ convex ICs. |
| **(b)** | Tangency: $MRS = p_x/p_y \Rightarrow 2y = p_x/p_y \Rightarrow y^* = p_x/(2p_y)$. Budget: $p_x x + p_y \cdot p_x/(2p_y) = I \Rightarrow p_x x + p_x/2 = I \Rightarrow x^* = I/p_x - 1/2$. Demand for $y$ depends only on the price ratio, not on $I$ — zero income elasticity. Demand for $x$ absorbs all income changes. |
| **(c)** | **Not homothetic.** Homotheticity requires MRS homogeneous of degree 0 (constant along rays from origin). Here $\text{MRS} = 2y$, which is not homogeneous of degree 0 — if both goods double $(x,y) \to (2x,2y)$, MRS doubles. Engel curve for $y$ is horizontal (does not increase with income). For homothetic preferences, Engel curves are linear through the origin. |
| **(d)** | **Quasilinear:** expenditure on $y$ is constant ($p_y y^* = p_x/2$); all additional income spent on $x$. Income expansion path: vertical after $y$ reaches optimal level, then horizontal. **Cobb-Douglas:** constant expenditure shares ($\alpha$ on $x$, $\beta$ on $y$); Engel curves linear through origin; income expansion path is a ray from origin. **Key difference:** QL has zero income effect for $y$; CD has proportional income effects for both goods. |
| **Key formulas** | $\text{MRS} = MU_x/MU_y$; $y^* = p_x/(2p_y)$, $x^* = I/p_x - 1/2$; Engel curve for $y$ is flat |
| **Key diagram** | Engel curves (QL horizontal for $y$, linear for $x$ vs CD both linear through origin); Income expansion path |

---

### P3.Q2 — Production: Profit Function & Duality (14 marks) — recommended: 12 minutes

A firm produces output $y$ using a single input $z$ with production function $y = f(z)$ where $f'(z) > 0$ and $f''(z) < 0$. Input price is $w$, output price is $p$.

**(a)** Define the profit function $\pi(p, w)$. State and explain three key properties of $\pi(p, w)$. [4 marks]

**(b)** State Hotelling's lemma. Use it to derive the firm's supply function $y(p, w)$ and input demand function $z(p, w)$. Provide the economic intuition for why the profit function is convex in output prices. [4 marks]

**(c)** The firm now produces two outputs $y_1$ and $y_2$ from a single input $z$. Show that the marginal rate of product transformation ($\text{MRPT}_{y_1, y_2}$) equals the ratio of marginal costs: $\text{MRPT} = MC_1 / MC_2$. Explain the economic intuition. [3 marks]

**(d)** Explain the dual relationship between the profit function $\pi(p)$ and the cost function $c(w, q)$. How does convexity of $\pi$ in $p$ relate to concavity of $c$ in $w$? [3 marks]

---

**Answer Skeleton:**

| Part | Key Points |
|------|-----------|
| **(a)** | $\pi(p, w) = \max_{y,z} \{ p y - w z : y \le f(z) \}$. **Properties:** (1) **HD(1) in $(p,w)$:** $\pi(tp, tw) = t\pi(p,w)$ (no money illusion). (2) **Convex in $(p,w)$:** $\pi(\theta p + (1-\theta)p', \theta w + (1-\theta)w') \le \theta\pi(p,w) + (1-\theta)\pi(p',w')$ (option value of flexibility). (3) **Monotonic:** $\partial\pi/\partial p > 0$, $\partial\pi/\partial w < 0$. |
| **(b)** | **Hotelling's lemma:** $y(p,w) = \partial\pi/\partial p$ and $z(p,w) = -\partial\pi/\partial w$ (envelope theorem). **Derivation:** $\pi(p,w) = \max_z \{ p f(z) - w z \}$. FOC: $p f'(z) = w$. By envelope theorem: $d\pi/dp = f(z) = y$; $d\pi/dw = -z$. **Convexity intuition:** as $p$ rises, firm expands output; the profit function's slope increases — profit rises at an increasing rate because the firm can adjust its input mix favourably. |
| **(c)** | **MRPT** $= -dy_2/dy_1$ along the transformation frontier. FOC for 2-output profit max: $p_1 = MC_1$ and $p_2 = MC_2$ (produce each output until $P = MC$). The isoprofit line slope is $-p_1/p_2$. At optimum, the transformation frontier is tangent to the isoprofit line: $-dy_2/dy_1 = p_1/p_2 = MC_1/MC_2$. Therefore $\text{MRPT}_{1,2} = MC_1/MC_2$. |
| **(d)** | Profit and cost functions are **Legendre-Fenchel duals**: $\pi(p) = \max_q \{ pq - c(w,q) \}$ and $c(w,q) = \max_p \{ pq - \pi(p) \}$. **Convexity of $\pi$ in $p$** reflects the firm's ability to reoptimise output when prices change. **Concavity of $c$ in $w$** reflects the firm's ability to substitute inputs when factor prices change. Both are manifestations of the envelope theorem — the derivatives ($y$ and $z$) adjust optimally. |
| **Key formulas** | $\pi(p,w)$ definition; Hotelling's lemma; $\text{MRPT} = MC_1/MC_2$; Legendre-Fenchel duality |
| **Key diagram** | Production set with isoprofit lines showing $\pi$ convex in $p$; dual relationship diagram |

---

### P3.Q3 — General Equilibrium: Exchange Economy (14 marks) — recommended: 12 minutes

Consider a pure exchange economy with two consumers (A and B) and two goods (X and Y).

Consumer A: $u_A(X_A, Y_A) = X_A \cdot Y_A$, endowment $\omega_A = (20, 40)$
Consumer B: $u_B(X_B, Y_B) = X_B + Y_B$, endowment $\omega_B = (40, 20)$

**(a)** Draw the Edgeworth box. Label the dimensions, the initial endowment point $\omega$, and calculate the MRS for each consumer at the endowment. Is this allocation Pareto efficient? Explain. [4 marks]

**(b)** Derive the equation of the contract curve. Show all steps. [4 marks]

**(c)** Find the competitive equilibrium price ratio $p_x/p_y$ and the equilibrium allocation. [4 marks]

**(d)** Is the competitive equilibrium allocation in the core? Provide a brief justification. [2 marks]

---

**Answer Skeleton:**

| Part | Key Points |
|------|-----------|
| **(a)** | **Edgeworth box:** $60 \times 60$. Endowment: A at $(20, 40)$, B at $(40, 20)$ from B's origin. **MRS$_A$** $= Y_A/X_A = 40/20 = 2$. **MRS$_B$** $= 1$ (linear utility). Since $2 \neq 1$, the endowment is **not Pareto efficient** — gains from trade exist. A would trade X for Y (A values Y more at margin than B does). |
| **(b)** | PO condition: $MRS_A = MRS_B \Rightarrow Y_A/X_A = 1 \Rightarrow Y_A = X_A$. Contract curve: $Y_A = X_A$ (the diagonal from A's origin). Feasibility: $X_B = 60 - X_A$, $Y_B = 60 - Y_A = 60 - X_A$. Since B's utility is linear, B's MRS is always 1 (constant). Contract curve runs from $(0,0)$ to $(60,60)$ in A's coordinates. |
| **(c)** | Since B has quasilinear preferences with constant MRS $= 1$, the price ratio must be $p_x/p_y = 1$ for any interior equilibrium. **A's demand** (CD with $\alpha=\beta=1$): $X_A = w_A/2p_x$, $Y_A = w_A/2p_y$ where $w_A = 20p_x + 40p_y$. With $p_x/p_y = 1$: $w_A = 20p + 40p = 60p$. So $X_A = 60p/(2p) = 30$, $Y_A = 60p/(2p) = 30$. **Market clearing:** $X_B = 60 - 30 = 30$, $Y_B = 60 - 30 = 30$. B's budget: $p \cdot 30 + p \cdot 30 = 60p = w_B = 40p + 20p = 60p$ ✓. **CE:** $(X_A,Y_A) = (30,30)$, $(X_B,Y_B) = (30,30)$, $p_x/p_y = 1$. |
| **(d)** | **Yes**, it is in the core. The core contains all PO allocations that are individually rational. At $(30,30)$: $u_A = 900 > u_A(\omega) = 800$; $u_B = 60 = u_B(\omega) = 60$ (B is indifferent — still individually rational). Since the CE is unique and all CE allocations are in the core for a two-agent exchange economy, this allocation is in the core. |
| **Key formulas** | $MRS_A = Y_A/X_A$; $MRS_B = 1$; CE condition: $p_x/p_y = 1$; Walrasian demand for CD: $X_A = w_A/2p_x$ |
| **Key diagram** | Edgeworth box with endowment point, contract curve ($Y_A = X_A$), CE allocation $(30,30)$, indifference curves through endowment and CE |

---

### P3.Q4 — Welfare: Compensation Principles (14 marks) — recommended: 12 minutes

**(a)** Explain the Hicks-Kaldor compensation principle. Distinguish carefully between the Hicks version and the Kaldor version of the potential compensation test. [4 marks]

**(b)** What assumptions about the marginal utility of money are required for the compensation principle to provide an unambiguous welfare ranking? Why are these assumptions controversial? [4 marks]

**(c)** Explain the Scitovsky reversal paradox. How did Scitovsky propose to correct the Hicks-Kaldor criterion? Provide a diagram to illustrate the paradox. [4 marks]

**(d)** How does the concept of the 'point of bliss' on the Grand Utility Possibility Frontier (GUPF) relate to the limitations of compensation-based welfare criteria? [2 marks]

---

**Answer Skeleton:**

| Part | Key Points |
|------|-----------|
| **(a)** | **Kaldor:** A change is an improvement if the gainers **could** compensate the losers (hypothetically) and still be better off — actual compensation need not occur. **Hicks:** A change is an improvement if the losers **could not** profitably bribe the gainers to forgo the change. Both are equivalent to a **potential Pareto improvement** — the change passes if the sum of gains exceeds the sum of losses. Neither requires actual compensation or cardinally comparable utility. |
| **(b)** | **Required:** Constant marginal utility of money across individuals — otherwise $1 taken from person A and given to person B represents a different utility change. **Problem:** (1) Diminishing marginal utility of money — a dollar means more to a poor person than a rich one. (2) Pareto argued interpersonal comparisons of utility are not scientifically valid. (3) Without cardinal comparability, the sign of the sum of compensating variations is ambiguous. **Diagram:** diminishing MU(I) curve showing why transferring $1 from rich to poor changes utility differently. |
| **(c)** | **Scitovsky paradox:** A change from allocation S to T can pass the Kaldor test (gainers compensate losers), and simultaneously the reverse change from T back to S can also pass the Kaldor test — yielding contradictory recommendations. **Diagram:** two crossing Utility Possibility Frontiers (UPF_S and UPF_T). Point T is northeast of S in one region but S is northeast of T in another. **Scitovsky double test:** a change is an improvement iff (i) gainers can compensate losers (Kaldor forward test passes) AND (ii) losers cannot compensate gainers to revert (reverse Kaldor test fails). |
| **(d)** | The **point of bliss** (tangency of GUPF and social indifference curve) represents the SWF-based approach, which avoids compensation paradoxes. A specific SWF $W(U_1, U_2)$ provides a **complete and transitive** ranking of all social states, resolving the ambiguity of compensation tests. The GUPF framework shows why different value judgements (different SWFs) lead to different welfare conclusions — compensation tests tried to avoid this value judgement but failed due to the Scitovsky paradox and marginal utility issues. |
| **Key formulas** | Kaldor test: $\sum \text{gains} > \sum \text{losses}$; Scitovsky double test: forward $+$ reverse |
| **Key diagram** | Crossing UPFs for Scitovsky paradox; GUPF with point of bliss and social indifference contours |

---

### P3.Q5 — Externalities/Trade: Tariff & VER Welfare Analysis (14 marks) — recommended: 12 minutes

A small open economy produces and consumes a good with the following domestic demand and supply curves:

$$\text{Demand: } Q_D = 250,000 - 100P$$
$$\text{Supply: } Q_S = 250P - 30,000$$

The world price is $P_W = \$600$ and the country initially engages in free trade.

**(a)** Find the autarky equilibrium price and quantity. [2 marks]

**(b)** Under free trade, does the country import or export this good? Calculate the volume of trade. [2 marks]

**(c)** The government imposes a $\$50$ per-unit tariff. Calculate the new domestic price, quantity demanded, quantity supplied, and the volume of imports. [3 marks]

**(d)** Compute the welfare effects of the tariff: change in consumer surplus ($\Delta CS$), change in producer surplus ($\Delta PS$), tariff revenue, and the total deadweight loss (DWL). Interpret each component. [4 marks]

**(e)** Suppose the government replaces the tariff with a Voluntary Export Restraint (VER) that limits imports to 20,000 units. Compare the welfare loss of the VER to the tariff. Explain why the VER is more costly to the domestic economy. [3 marks]

---

**Answer Skeleton:**

| Part | Key Points |
|------|-----------|
| **(a)** | **Autarky:** $250,000 - 100P = 250P - 30,000 \Rightarrow 280,000 = 350P \Rightarrow P_A = 800$. $Q_A = 250,000 - 80,000 = 170,000$. |
| **(b)** | $P_W = 600 < 800 \Rightarrow$ the country **imports** the good (world price below autarky price). $Q_D(600) = 250,000 - 60,000 = 190,000$. $Q_S(600) = 150,000 - 30,000 = 120,000$. **Imports = 70,000** units. |
| **(c)** | Domestic price $= 600 + 50 = 650$. $Q_D(650) = 250,000 - 65,000 = 185,000$. $Q_S(650) = 162,500 - 30,000 = 132,500$. **Imports = 185,000 - 132,500 = 52,500** units (down from 70,000). |
| **(d)** | **$\Delta CS$:** $= -\frac{1}{2}(190,000 + 185,000) \times 50 = -9,375,000$ (consumers lose). **$\Delta PS$:** $= +\frac{1}{2}(120,000 + 132,500) \times 50 = +6,312,500$ (producers gain). **Tariff revenue:** $= 50 \times 52,500 = +2,625,000$. **DWL:** $= \Delta CS + \Delta PS + \text{Revenue} = -9,375,000 + 6,312,500 + 2,625,000 = -437,500$. The DWL comprises two triangles: consumption distortion $\frac12 \times 50 \times 5,000 = 125,000$ and production distortion $\frac12 \times 50 \times 12,500 = 312,500$. |
| **(e)** | Under a **VER** limiting imports to 20,000 units: the domestic price rises further (to clear the import quota). $Q_D - Q_S = 20,000 \Rightarrow (250,000-100P) - (250P-30,000) = 20,000 \Rightarrow 280,000 - 350P = 20,000 \Rightarrow P \approx 742.86$. $\Delta CS$ and $\Delta PS$ are **larger** (price rises more). The **quota rent** ($\approx 142.86 \times 20,000 \approx 2,857,200$) goes to **foreign exporters**, not the domestic government. Total welfare loss $= \text{DWL}_{\text{tariff-like}} + \text{lost rent} > \text{DWL}_{\text{tariff}}$. The VER is worse because the implicit tariff revenue is captured by foreigners rather than domestically. **Diagram:** D-S graph comparing tariff and VER welfare effects. |
| **Key formulas** | DWL $= \frac12 \times t \times \Delta Q$; CS and PS changes as trapezoid areas; VER rent $= (P_{\text{dom}} - P_W) \times \text{quota}$ |
| **Key diagram** | D-S with world price, tariff, and VER; areas for CS loss, PS gain, tariff revenue/VER rent, DWL triangles |

---

# Time Management Guide

## The 5-Minute Selection Strategy

When the exam paper is placed before you, spend **exactly 5 minutes** reading all 8 question sets. Do not write anything yet. Your goal is to pick the 5 questions you can maximise marks on.

### Selection Criteria (in order of priority):

| Priority | What to Look For | Why |
|----------|-----------------|-----|
| **1. Your strongest topics** | Questions on topics you revised most recently or know best | Maximise marks per minute |
| **2. Numerical computation** | Questions with numbers to crunch (elasticities, tax, tariff, Cobb-Douglas welfare) | Numerical answers are either right or wrong — partial marks are easier to earn than theory essays |
| **3. Diagram questions** | Questions that explicitly ask for a diagram | A well-labelled diagram can earn 3–5 marks even if the accompanying text is weak |
| **4. Avoid unclear theory** | Questions with vague wording you don't fully recognise | A misunderstood question costs 14 marks — skip it |
| **5. Mark allocation** | Favour questions with many small sub-parts (e.g., 4×3.5 marks) over 1×14 mark essay | More sub-parts = more opportunities for partial credit |

### Recommended Selection Patterns by Paper:

| Paper | Recommended 5 to Choose | Reason |
|-------|------------------------|--------|
| **Paper 1** | All 5 are good — this is your warm-up. Q2 (demand elasticities) and Q5 (Bertrand) are the safest for full marks. | Balanced, moderate |
| **Paper 2** | Choose Q1 (GE) only if comfortable with diagrams. Q3 (externality) has clear numerical + theory split. Q4 (CD duality) is the safest — Lagrangian is mechanical. Q2 (Pareto) is high-yield but essay-heavy. | BEWARE: Q1 and Q5 have longer time requirements |
| **Paper 3** | Q1 (quasilinear) and Q3 (exchange economy) are the most mechanical. Q5 (tariff) is all computation — excellent for full marks. Q2 (profit function) is theory-heavy but has clear properties to list. | Strongest mix of computation and theory |

---

## The 12-Minute Question Template

Every 14-mark question should be attacked in **three phases**:

```
┌─────────────────────────────────────────────────┐
│   PHASE 1: PLAN     (2 minutes — on scrap paper) │
├─────────────────────────────────────────────────┤
│  • Read the question twice — circle key verbs    │
│    (derive, define, explain, show, compute)      │
│  • Jot 3-5 bullet points of what you'll write    │
│  • Decide which diagram(s) you'll draw           │
│  • Allocate marks: if 4 sub-parts at ~3.5 each   │
│    → roughly 3 min per sub-part                  │
├─────────────────────────────────────────────────┤
│   PHASE 2: WRITE   (8 minutes — in answer book)  │
├─────────────────────────────────────────────────┤
│  • Start with what you know best (not Q1 first)  │
│  • Every sub-part: formula → explanation →       │
│    diagram → conclusion                          │
│  • Draw diagrams FIRST (before the text) — they  │
│    are worth 2-4 marks each and anchor your      │
│    reasoning                                     │
│  • Show every step in derivations — examiners    │
│    reward method even if arithmetic is wrong     │
│  • If stuck on a sub-part, write the relevant    │
│    formula and move on — partial marks           │
├─────────────────────────────────────────────────┤
│   PHASE 3: REVIEW  (2 minutes — critical check)  │
├─────────────────────────────────────────────────┤
│  • Did I answer EVERY sub-part?                  │
│  • Are my diagrams labelled (axes, curves,       │
│    equilibrium points, shaded areas)?            │
│  • Did I check arithmetic once?                  │
│  • Are the signs correct (ΔCS negative,          │
│    ΔPS positive for a price increase)?           │
│  • Did I include economic intuition or just math?│
└─────────────────────────────────────────────────┘
```

---

## How to Bail on a Stuck Question

### If you are 4 minutes in and stuck on sub-part (c) of a 4-part question:

| Action | What You Do | Marks Recovered |
|--------|-------------|-----------------|
| **1. Skip and return** | Leave 3 blank lines, move to the next sub-part or next question | You waste no time; return if time permits |
| **2. Write the formula** | Even if you cannot solve, write the relevant Lagrangian, FOC, or elasticity formula | 1–2 marks for method |
| **3. Draw the diagram** | The question asks for a diagram — draw it. Label everything. Write "see diagram" even without text | 2–4 marks for correct diagram |
| **4. State the definition** | If asked to "explain" something you can't derive, write the definition and one example | 1–2 marks |
| **5. Use extreme cases** | If a proof is stuck, try a simple special case (e.g., $\alpha = \beta = 0.5$ for CD) | Shows understanding of the concept |

### Decision Rule: When to Abandon vs Push Through

| Situation | Decision | Why |
|-----------|----------|-----|
| 2 min in, completely lost | Skip immediately | Other questions need that time |
| 5 min in, 60% done | Push through and simplify remaining parts | Partial marks on 70% > 0 marks on next question |
| 8 min in, one sub-part left | Abandon sub-part, move to next question | The last sub-part is often 2 marks only |
| Computed a "crazy" number | Quickly re-check arithmetic once | If still crazy, write "answer seems unreasonable because..." for insight marks |

---

## Final Exam Day Checklist

- [ ] **Before the exam:** Know which 3 topics you are strongest at — target those questions first
- [ ] **Minutes 0–5:** Read all 8 questions. Circle your chosen 5. If uncertain between two, choose the one with more sub-parts (more partial credit opportunities)
- [ ] **Minutes 5–65:** Answer 5 questions at 12 minutes each. Do Q3 and Q5 first if they are computational (they often are)
- [ ] **Last 5 minutes:** Review your diagram labels. Check you have not forgotten to shade areas or label axes. Verify arithmetic signs
- [ ] **Do NOT** leave any question blank. A partially correct diagram + one formula = 4+ marks. Zero = 0 marks.

---

> *Good luck. The exam rewards structure, clarity, and the ability to connect theory to diagrams. You know this material — trust your preparation.*
