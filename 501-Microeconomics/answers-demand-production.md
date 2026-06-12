# Answers: Demand Estimation & Elasticities + Production & Supply

> Exam-ready revision notes. Concise, structured, formulas, bullet points, exam tips.
>
> **Sources:** ch.2-demand-theory, ch.3-demand-theory-applications, ch.4-production-theory, Koutsoyiannis

---

## Topic 2 — Demand Estimation & Elasticities

---

### Question 1 {#q-demand-01}

> **Marking Guide [14 marks]:** Elasticity Concepts (3) | Sign Classification (3) | Revenue Test (3) | Numerical Application (3) | Economic Intuition (2)

> ⭐ **High-Yield** — Constant elasticity (log-linear) demand is the most common functional form in empirical demand estimation. Mastering the interpretation of exponents as elasticities is essential.

Demand function: $X = \alpha P_X^\gamma P_Z^\delta P_W^\varepsilon I^\eta$

**(i) Cross-price elasticity with Z**

Cross-price elasticity $\varepsilon_{X,P_Z} = \frac{\partial \ln X}{\partial \ln P_Z} = \delta$.

This is the constant elasticity form: the elasticity is the exponent.

**(ii) Income elasticity**

Income elasticity $\varepsilon_{X,I} = \frac{\partial \ln X}{\partial \ln I} = \eta$.

Given $\alpha = -0.5, \gamma = -0.4, \delta = 0.8$:
- The numerical value of $\alpha$ does not affect elasticity classification.
- To classify good X, we need $\eta$ (income elasticity), which is not explicitly provided in the given numbers. However, using typical convention:

> If $\eta > 1$ → luxury; $0 < \eta < 1$ → necessity; $\eta < 0$ → inferior.
>
> With $\alpha < 0$, this is a scaling constant (intercept in log form). **Do not confuse $\alpha$ with $\eta$.**

**Exam Tip:** $\alpha$ is the scale parameter, not the income elasticity. The income elasticity is $\eta$ — always look at the exponent of $I$.

**(iii) Is Z a gross substitute or complement for X?**

$\delta = 0.8 > 0 \Rightarrow \frac{\partial X}{\partial P_Z} > 0$.

- When $P_Z$ ↑, $X$ ↑ → **Z is a gross substitute for X**.
- If $\delta < 0$, Z would be a gross complement.

**(iv) If $P_W$ falls 5%, by what % does $Q_d$ change?**

$\varepsilon_{X,P_W} = \varepsilon$ (the exponent on $P_W$ in the demand function).

Given $\% \Delta P_W = -5\%$, the percentage change in quantity demanded is:

$$\% \Delta Q_d = \varepsilon \times (\% \Delta P_W) = \varepsilon \times (-5\%)$$

**The answer depends entirely on the sign and magnitude of $\varepsilon$:**
- If $\varepsilon > 0$ (W is a substitute), $P_W \downarrow \;\Rightarrow\; Q_d \downarrow$ by $5\varepsilon\%$.
- If $\varepsilon < 0$ (W is a complement), $P_W \downarrow \;\Rightarrow\; Q_d \uparrow$ by $5|\varepsilon|\%$.
- If $\varepsilon = 0$ (W is unrelated), $Q_d$ is unchanged.

**Exam Tip:** Always check the sign of the cross-price elasticity. A fall in the price of a complement ($\varepsilon < 0$) raises demand; a fall in the price of a substitute ($\varepsilon > 0$) lowers demand.

**(v) If $P_X$ decreases, would expenditure on X increase, decrease, or remain same?**

Expenditure $E = P_X \times X(P_X)$.

Use total revenue test:
- If $|\varepsilon_{X,P_X}| > 1$ (elastic) → $P_X \downarrow \Rightarrow Q \uparrow$ proportionally more → **expenditure increases**.
- If $|\varepsilon_{X,P_X}| < 1$ (inelastic) → $P_X \downarrow \Rightarrow Q \uparrow$ proportionally less → **expenditure decreases**.
- If $|\varepsilon_{X,P_X}| = 1$ (unit elastic) → **expenditure unchanged**.

Here own-price elasticity $\gamma = -0.4$, so $|\gamma| = 0.4 < 1$ → inelastic. **Expenditure decreases** when price falls.

| Condition | $P_X \downarrow$ → Expenditure |
|-----------|-------------------------------|
| $\|\varepsilon\| > 1$ (elastic) | ↑ |
| $\|\varepsilon\| < 1$ (inelastic) | ↓ |
| $\|\varepsilon\| = 1$ | — |

**Exam Tip:** The Total Revenue Test is a staple. Elastic → price and revenue move opposite. Inelastic → same direction.

> **Professor's Corner:** Top marks require explicitly linking each exponent to its elasticity interpretation and classifying goods correctly by sign. The most common mistake is confusing $\alpha$ (the scale/intercept parameter) with the income elasticity $\eta$. For part (iv), never guess a value for $\varepsilon$ — state that the answer depends on its sign and explain both cases.
>
> → *See also: Consumer Theory Q1 (Walrasian demand properties), Topic 2 Q3 (Lerner Index application)*

---

### Question 2 {#q-demand-02}

> **Marking Guide [14 marks]:** Sign Identification (4) | Law of Demand (4) | Economic Interpretation (3) | Misspecification Diagnosis (3)

Burger King demand: $Q = 10 + 1.3P_B + 0.4P_M - 3P_F + 2.2I$

**The terrible problem:** The coefficient on $P_B$ (own price) is **positive** (+1.3).

$\frac{\partial Q}{\partial P_B} = 1.3 > 0$ → the demand curve slopes **upward** (Giffen-like). This violates the Law of Demand.

For a normal demand function, own-price coefficient must be **negative**.

**Exam Tip:** Always check the sign of the own-price coefficient first. Positive own-price coefficient = misspecified model.

> **Professor's Corner:** This is a 30-second question once you spot the sign error. The examiner is testing whether you blindly apply formulas or first verify the data make sense. The model is unusable — you'd reject this regression before doing any elasticity calculations. Mention that a positive own-price coefficient might indicate omitted variable bias or simultaneous equations bias.
>
> → *See also: Topic 2 Q3 (correctly specified log-linear demand)*

---

### Question 3 {#q-demand-03}

> **Marking Guide [14 marks]:** Cross-price Elasticities (4) | Income Elasticity Classification (2) | Advertising Elasticity (2) | Lerner Index Derivation (3) | Competitive Response (3)

> ⭐ **High-Yield** — Integrates elasticity interpretation, the Lerner Index (monopoly pricing), and competitive strategy. The profit-maximising price formula $P = MC/(1+1/\varepsilon)$ is a staple exam question.

Corrected demand: $Q = 150 P_B^{-1.5} P_{r1}^{0.75} P_{r2}^{-0.25} I^{0.8} A^{0.05}$

**(i) Which related good (r1 or r2) is French fries?**

French fries are a **complement** to Whoppers. Cross-price elasticity should be negative.

- $\varepsilon_{Q,P_{r1}} = 0.75 > 0$ → r1 is a **substitute** (e.g., chicken sandwich)
- $\varepsilon_{Q,P_{r2}} = -0.25 < 0$ → r2 is a **complement** = **French fries**

**(ii) Is Whopper a luxury, necessity, or inferior?**

Income elasticity $\eta = 0.8$.
- $0 < 0.8 < 1$ → **necessity** (normal good, income-inelastic).

**(iii) If advertising ↑ 50%, by what % does demand change?**

$\varepsilon_{Q,A} = 0.05$ (advertising elasticity).

$\% \Delta Q = 0.05 \times 50\% = 2.5\%$ increase.

Demand is very advertising-inelastic (0.05).

**(iv) If BK lowers French fry price 50%, by what % does Whopper quantity change?**

French fries = r2. $\varepsilon_{Q,P_{r2}} = -0.25$.

$\% \Delta Q = -0.25 \times (-50\%) = +12.5\%$.

Whopper quantity **increases by 12.5%**.

**(v) If MC = \$1.00, what is profit-maximizing price?**

For a monopolist (or firm with market power): $MR = MC$.

Using Lerner Index / markup formula:
$$MR = P\left(1 + \frac{1}{\varepsilon}\right) = MC$$

Own-price elasticity $\varepsilon = -1.5$.

$$P\left(1 + \frac{1}{-1.5}\right) = 1$$
$$P\left(1 - \frac{2}{3}\right) = 1$$
$$P\left(\frac{1}{3}\right) = 1 \Rightarrow P = 3$$

**Profit-maximizing price = \$3.00.**

$$\text{Markup} = \frac{P - MC}{P} = \frac{3 - 1}{3} = \frac{2}{3} \text{ (or } -\frac{1}{\varepsilon} = \frac{2}{3})$$

**Exam Tip:** The Lerner Index formula $P = \frac{MC}{1 + 1/\varepsilon}$ only works when $\varepsilon < -1$ (elastic region). If $-1 < \varepsilon < 0$, $MR$ would be negative and the formula gives a nonsensical negative price.

> **Professor's Corner:** Part (vi) is the strongest discriminator — most students stop at computing the 7.5% demand drop for Whoppers but fail to compute the required price offset. The key insight is that you use the *own-price elasticity* to determine how much price must change to restore quantity. This tests whether you truly understand elasticities as tools, not just classification labels.
>
> → *See also: Topic 2 Q1 (constant elasticity concepts), Topic 3C Q1 (tax incidence with elasticities)*

**(vi) McDonald's lowers Big Mac price 10%. By what % must BK lower its price to not lose customers?**

Big Mac is r1 (substitute). $\varepsilon_{Q,P_{r1}} = 0.75$.

If Big Mac price ↓ 10% → Whopper $Q$ falls by $0.75 \times 10\% = 7.5\%$ (ceteris paribus).

To neutralize this, BK must lower $P_B$ enough to raise $Q$ by 7.5%.

Own-price elasticity: $\varepsilon_{Q,P_B} = -1.5$.

$$\frac{\% \Delta Q}{\% \Delta P_B} = -1.5 \Rightarrow \% \Delta P_B = \frac{\% \Delta Q}{-1.5} = \frac{7.5\%}{-1.5} = -5\%$$

**BK must lower its price by 5%.**

---

## Topic 3A — Production Sets & Functions

---

### Question 1 {#q-prodset-01}

> **Marking Guide [14 marks]:** Production Function (3) | Production Set (3) | Transformation Function (3) | Transformation Frontier (2) | MRPT Definition & Formula (3)

Define:

| Term | Definition |
|------|-----------|
| **Production function** | $q = f(z_1, z_2, ..., z_n)$ — maximum output obtainable from given input vector, given technology. $f: \mathbb{R}^{L-M}_+ \to \mathbb{R}^M_+$ |
| **Production set** | $Y = \{ y \in \mathbb{R}^L : F(y) \leq 0 \}$ — set of all technologically feasible production plans (input-output combinations). Positive components = outputs, negative = inputs. |
| **Transformation function** | $F(y)$ — implicit function where $F(y) \leq 0$ iff $y$ is feasible. $F(y) = 0$ defines the boundary. |
| **Transformation frontier** | $\{ y \in \mathbb{R}^L : F(y) = 0 \}$ — boundary of the production set where the firm is technically efficient (cannot increase one output without reducing another or using more inputs). |

**MRPT (Marginal Rate of Product Transformation):**
$$MRPT_{k,l}(y) = \frac{\partial F(y)/\partial y_k}{\partial F(y)/\partial y_l} = -\frac{dy_l}{dy_k} \text{ along } F(y)=0$$

Measures how much output $l$ must be reduced to increase output $k$ by one unit.

> **Professor's Corner:** The MRPT definition is the production-side analogue of the MRS in consumption. Examiners frequently ask for the relationship $MRPT_{k,l} = MC_k/MC_l$ — know this duality cold. A common mistake is confusing MRPT with MRTS (factor substitution) versus MRPT (output transformation).
>
> → *See also: Topic 3B Q2 (MRPT = MC_x/MC_y proof)*

---

### Question 2 & 3 {#q-prodset-02}

> **Marking Guide [14 marks]:** Property Definitions (6) | Graphical Interpretations (4) | Convexity Understanding (2) | Fixed-Cost Exception (2)

> ⭐ **High-Yield** — The 11 properties of a production set form the axiomatic foundation of producer theory. Convexity and returns-to-scale properties are the most frequently examined.

**Properties of the production set** (graphically):

| # | Property | Meaning | Graph |
|---|----------|---------|-------|
| 1 | **Non-empty** | $Y \neq \varnothing$ — there is at least one feasible plan. | — |
| 2 | **Closed** | $Y$ includes its boundary points. | Solid boundary line |
| 3 | **No free lunch** | $y \in Y$ with $y \geq 0 \Rightarrow y = 0$. Cannot produce positive output with zero input. | $Y$ does not intersect $\mathbb{R}^L_{++}$ except at origin |
| 4 | **Possibility of inaction** | $0 \in Y$ — firm can shut down (use no inputs, produce no output). | Origin is in $Y$ |
| 5 | **Free disposal** | $y \in Y$ and $y' \leq y \Rightarrow y' \in Y$. Can throw away inputs/outputs at no cost. | If $y$ is feasible, any point southwest of $y$ is also feasible |
| 6 | **Irreversibility** | $y \in Y, y \neq 0 \Rightarrow -y \notin Y$. Cannot reverse production (unlike pure exchange). | $Y$ and $-Y$ do not overlap |
| 7 | **Non-increasing RTS** | $y \in Y \Rightarrow \alpha y \in Y$ for $\alpha \in [0,1]$. Can scale down. | Cone containing origin |
| 8 | **Non-decreasing RTS** | $y \in Y \Rightarrow \alpha y \in Y$ for $\alpha \geq 1$. Can scale up. | Cone expanding outward |
| 9 | **CRS** | $y \in Y \Rightarrow \alpha y \in Y$ for $\alpha \geq 0$. | Full cone through origin |
| 10 | **Additivity / Free entry** | $y, y' \in Y \Rightarrow y + y' \in Y$. Independent production plans can be combined. | $Y + Y \subseteq Y$ |
| 11 | **Convexity** | $y, y' \in Y, \alpha \in [0,1] \Rightarrow \alpha y + (1-\alpha)y' \in Y$. Balanced combinations are feasible. | Straight line between any two points in $Y$ stays in $Y$ |

**Convexity violation:** With fixed costs, convexity fails — the production set becomes non-convex near the origin (set-up costs create a "hole").

**Exam Tip:** Differentiate between **convex production set** (which implies diminishing returns / DRS) and **convex isoquants** (which imply diminishing MRTS). They are related but not identical.

> **Professor's Corner:** A top answer doesn't just list the 11 properties — it groups them: (i) basic feasibility (non-empty, closed, inaction), (ii) physical constraints (no free lunch, irreversibility), (iii) disposal (free disposal), (iv) scalability (RTS properties), (v) aggregation (additivity), (vi) curvature (convexity). The fixed-cost exception to convexity is a favourite exam nuance.
>
> → *See also: Topic 3B Q1 (profit function convexity — the dual of this)*

---

### Question 4 {#q-prodset-03}

> **Marking Guide [14 marks]:** Definition & Formula (3) | Perfect Substitutes Derivation (4) | Leontief Derivation (4) | Comparison Table (3)

> ⭐ **High-Yield** — The polar cases ($\sigma = \infty$ and $\sigma = 0$) and the Cobb-Douglas benchmark ($\sigma = 1$) are almost guaranteed exam questions. The CES generalisation $\sigma = 1/(1-\rho)$ is the capstone.

**Elasticity of Substitution (EoS)** — $\sigma$ measures the proportionate change in the $K/L$ ratio relative to the proportionate change in $MRTS_{L,K}$ along an isoquant:

$$\sigma = \frac{\% \Delta (K/L)}{\% \Delta MRTS} = \frac{d(K/L)}{d\,MRTS} \cdot \frac{MRTS}{K/L} = \frac{\partial \ln(K/L)}{\partial \ln(MRTS)}$$

- $\sigma > 0$ always (K/L and MRTS move in same direction along isoquant).
- High $\sigma$ → isoquant almost flat (easy substitution).
- Low $\sigma$ → isoquant sharply curved (hard substitution).

**(i) EoS for $q = aK + bL$ (linear / perfect substitutes)**

$$MRTS = \frac{MP_L}{MP_K} = \frac{b}{a} \text{ (constant)}$$

$\% \Delta MRTS = 0 \Rightarrow \sigma = \frac{\% \Delta (K/L)}{0} = \infty$

**Perfect substitutes → $\sigma = \infty$.**

**(ii) EoS for fixed proportions (Leontief) $q = \min\{aK, bL\}$**

$K/L$ is fixed at $b/a$ along the ray from the origin (kink). $MRTS$ jumps from $0$ to $\infty$ at the kink.

$\% \Delta (K/L) = 0 \Rightarrow \sigma = 0$

**Fixed proportions → $\sigma = 0$.**

**Exam Tip:** These are the two extreme cases. Cobb-Douglas gives $\sigma = 1$. CES generalizes: $\sigma = 1/(1-\rho)$.

| Production Function | $\sigma$ |
|--------------------|----------|
| Linear (perfect substitutes) | $\infty$ |
| Cobb-Douglas | 1 |
| Leontief (fixed proportions) | 0 |
| CES | $1/(1-\rho)$ |

> **Professor's Corner:** The derivation for linear ($\sigma = \infty$) is immediate from constant $MRTS$; the Leontief case ($\sigma = 0$) follows from the fact that $K/L$ is fixed at the kink. For Cobb-Douglas, derive quickly: $MRTS = (\alpha/\beta)(K/L)^{-1}$, so $\ln(K/L) = \text{constant} - \ln(MRTS)$, thus $\sigma = 1$. A common mistake is writing $\sigma = 1/(1-\rho)$ but forgetting that $\rho \le 1$ for well-behaved CES.
>
> → *See also: Topic 3A Q7(vii) (Cobb-Douglas EoS verification)*

---

### Question 5 {#q-prodset-04}

> **Marking Guide [14 marks]:** Property Definitions (6) | Intuitive Matching (4) | Concavity Insight (2) | Shephard's Lemma (2)

**Four properties of cost functions** — match to intuitive explanations:

| Property | Explanation |
|----------|-------------|
| **1. Homog(1) in $w$** | $c(\lambda w, q) = \lambda c(w, q)$. Doubling all input prices doubles costs. |
| **2. Non-decreasing in $q$** | $q_1 > q_0 \Rightarrow c(w, q_1) \geq c(w, q_0)$. More output cannot cost less. |
| **3. Concave in $w$** | $c(\alpha w + (1-\alpha)w', q) \geq \alpha c(w,q) + (1-\alpha)c(w',q)$. The firm adjusts input mix as relative prices change → cost increase is less than linear. |
| **4. Shephard's Lemma** | $\frac{\partial c(w,q)}{\partial w_k} = z_k(w,q)$. The derivative of the cost function w.r.t. an input price gives the conditional factor demand for that input. |

**Intuitive explanations to match:**

1. "If all input prices rise by 10%, the minimum cost of producing $q$ rises by exactly 10%."
2. "To produce a larger quantity, you need at least as many inputs, so cost cannot fall."
3. "The firm can substitute away from inputs that become relatively more expensive, so costs rise less than linearly with input prices."
4. "The cost increase from a small rise in the price of input $k$ equals the quantity of input $k$ used at the optimum."

**Exam Tip:** Property 3 (concavity in $w$) is the most commonly tested. It implies $\frac{\partial^2 c}{\partial w_k^2} \leq 0$ → conditional factor demand slopes downward.

> **Professor's Corner:** The cost function concavity result is the dual of profit function convexity. Top students explicitly link Shephard's Lemma to the envelope theorem: $\partial c(w,q)/\partial w_k = z_k(w,q)$. The intuitive matching questions test whether you can translate mathematical properties into plain English — practising this skill is worth 4 marks.
>
> → *See also: Topic 3B Q1 (profit function — the dual), Topic 3A Q7 (conditional factor demand application)*

---

### Question 6 {#q-prodset-05}

> **Marking Guide [14 marks]:** Production Function (2) | Conditional Factor Demand (2) | Cost Function (3) | Profit Maximisation (4) | MR=MC Alternative (3)

> ⭐ **High-Yield** — The Leontief production function in a profit-maximisation context. Links production theory to pricing decisions.

**Sausage maker:** 3 oz pork + 2 oz veal → 5 oz sausage.

**(i) Production function**

Fixed proportions (Leontief):

$$Q = \min\left\{\frac{P}{3}, \frac{V}{2}\right\}$$

where $P$ = oz of pork, $V$ = oz of veal, $Q$ = oz of sausage.

Equivalently (per 5 oz sausage): $Q = \frac{1}{5} \min\left\{\frac{P}{0.6}, \frac{V}{0.4}\right\}$

**(ii) Conditional factor demand for pork**

At cost-minimizing optimum, $P/3 = V/2 = Q$ → $P = 3Q$, $V = 2Q$.

Conditional factor demand: $P(Q) = 3Q$.

**(iii) Cost function**

$c(Q) = p_P \cdot P(Q) + p_V \cdot V(Q) = p_P \cdot 3Q + p_V \cdot 2Q = Q(3p_P + 2p_V)$.

If $p_P = p_V = 1$: $c(Q) = 5Q$.

**(iv) If $Q = 200P^{-6}$, find profit-maximizing price**

$$\pi(P) = P \cdot Q(P) - c(Q(P)) = P \cdot 200P^{-6} - 5(200P^{-6})$$
$$\pi(P) = 200P^{-5} - 1000P^{-6}$$

FOC:
$$\frac{d\pi}{dP} = -1000P^{-6} + 6000P^{-7} = 0$$
$$6000P^{-7} = 1000P^{-6}$$
$$6000 = 1000P$$
$$P = 6$$

**Profit-maximizing price = \$6.**

Or using MR = MC approach: $Q = 200P^{-6} \Rightarrow P = (Q/200)^{-1/6}$.

$TR = P \cdot Q = Q^{5/6} \cdot 200^{1/6}$, $MR = \frac{5}{6} Q^{-1/6} \cdot 200^{1/6}$.

$MC = 5$. Set MR = MC → $Q^* = 200(6)^{-6} = 200/46656 \approx 0.00429$. $P^* = 6$.

> **Professor's Corner:** The direct $\pi(P)$ maximisation method is faster here and avoids inverting the demand function. However, the MR=MC method is more general and works when the demand function cannot be explicitly inverted. A common mistake is forgetting that the cost function $c(Q) = Q(3p_P + 2p_V)$ uses the *conditional* factor demands, not the production function directly.
>
> → *See also: Consumer Theory Q6 (Negroni — Leontief in consumption), Topic 2 Q3(v) (Lerner Index pricing)*

---

### Question 7 {#q-prodset-06}

> **Marking Guide [14 marks]:** SR Production (2) | SR Factor Demand & Cost (3) | Shutdown & Supply (2) | Returns to Scale (2) | EoS (1) | LR Factor Demand (2) | LR Cost & Supply (2)

> ⭐ **High-Yield** — This is the most comprehensive production question, covering every major concept: SR vs LR, conditional factor demands, cost functions, shutdown, supply, RTS, EoS, and duality. Master this and you master production theory.

$Q = (KL)^{1/3}$, short-run $K = 64$.

**(i) SR production function**

$$Q = (64 \cdot L)^{1/3} = 64^{1/3} \cdot L^{1/3} = 4L^{1/3}$$

**(ii) SR conditional factor demand for $L$**

Invert SR production function:

$$L = \left(\frac{Q}{4}\right)^3 = \frac{Q^3}{64}$$

**(iii) SR cost function**

$SRTC(Q) = wL + rK = w \cdot \frac{Q^3}{64} + r \cdot 64$.

If $w = 1, r = 1$: $SRTC(Q) = \frac{Q^3}{64} + 64$.

**(iv) Shutdown price**

$AVC(Q) = \frac{wL}{Q} = \frac{wQ^3/64}{Q} = \frac{wQ^2}{64}$.

Shutdown condition: $P < \min AVC$.

$AVC$ increasing in $Q$, $\min AVC$ at $Q = 0$: $AVC(0) = 0$.

Firm shuts down if $P \leq 0$. For any $P > 0$, the firm produces in SR (since fixed cost is sunk).

**More precisely:** shutdown price = $\min AVC = 0$.

**(v) SR supply curve**

From $P = MC$ (above shutdown):

$MC = \frac{dSRTC}{dQ} = \frac{3wQ^2}{64}$.

Set $P = \frac{3wQ^2}{64} \Rightarrow Q = \sqrt{\frac{64P}{3w}}$.

SR supply: $Q^S(P) = \sqrt{\frac{64P}{3w}}$ for $P > 0$ (and $w > 0$).

**(vi) Returns to scale**

$Q(tK, tL) = (tK \cdot tL)^{1/3} = t^{2/3} (KL)^{1/3} = t^{2/3} Q(K, L)$.

Sum of exponents: $\frac{1}{3} + \frac{1}{3} = \frac{2}{3} < 1$.

**Decreasing returns to scale (DRS).**

**(vii) Elasticity of substitution**

For Cobb-Douglas $Q = K^{1/3} L^{1/3}$:

$$\sigma = 1$$

All Cobb-Douglas functions have unitary elasticity of substitution.

**(viii) LR conditional factor demands**

Minimize $wL + rK$ subject to $(KL)^{1/3} = Q$.

Tangency: $MRTS_{L,K} = \frac{MP_L}{MP_K} = \frac{(1/3)K^{1/3}L^{-2/3}}{(1/3)K^{-2/3}L^{1/3}} = \frac{K}{L} = \frac{w}{r}$.

So $K = \frac{w}{r}L$.

Sub into production function:

$$Q = \left(\frac{w}{r}L \cdot L\right)^{1/3} = \left(\frac{w}{r}\right)^{1/3} L^{2/3}$$

$$L(w,r,Q) = \left(\frac{r}{w}\right)^{1/2} Q^{3/2}$$

$$K(w,r,Q) = \frac{w}{r}L = \left(\frac{w}{r}\right)^{1/2} Q^{3/2}$$

**(ix) LR cost function**

$$LRTC(Q) = wL + rK = w \cdot \left(\frac{r}{w}\right)^{1/2} Q^{3/2} + r \cdot \left(\frac{w}{r}\right)^{1/2} Q^{3/2}$$
$$= 2\sqrt{wr} \cdot Q^{3/2}$$

**(x) LR supply curve**

$P = MC$:

$$MC = \frac{dLRTC}{dQ} = 2\sqrt{wr} \cdot \frac{3}{2} Q^{1/2} = 3\sqrt{wr} Q^{1/2}$$

Set $P = 3\sqrt{wr} Q^{1/2}$:

$$Q^S(P) = \frac{P^2}{9wr}$$

**Exam Tip:** For DRS, LR supply slopes upward. For CRS, LR supply is horizontal at $P = MC$. For IRS, the firm would not have a well-defined supply curve (natural monopoly).

> **Professor's Corner:** Part (iv) on the shutdown price is subtle — $\min AVC = 0$ means the firm never shuts down for any positive price (it always covers variable costs at some output). A top answer notes that with fixed costs sunk in the SR, any $P > 0$ justifies production. Part (x) derives the LR supply — note it's upward-sloping (DRS) and homogeneous of degree zero in $(w,r)$ as required. The LR conditional factor demands satisfy Shephard's Lemma — verify this for bonus marks.
>
> → *See also: Topic 3C Q1 (industry supply from firm supply)*

---

### Question 8 {#q-prodset-07}

> **Marking Guide [14 marks]:** Economies of Scale Identification (5) | Fixed Cost Spreading (4) | Marginal vs Average Cost (3) | Real-World Application (2)

**Starbucks Jumbo (62 oz) vs Trenta (31 oz). Will Jumbo cost twice as much, more, or less?**

**Answer: Less than twice as much.**

Reasoning: Food/beverage production typically exhibits economies of scale in packaging, serving, and overhead. A larger cup uses:
- ~same labor to serve
- ~same overhead (rent, equipment)
- slightly more ingredients (but less than proportional to volume due to fixed preparation steps)
- packaging costs that increase less than proportionally

The firm's average cost declines with output → the marginal cost of the second 31 oz is **less** than the average cost of the first 31 oz.

**Exam Tip:** This tests whether you understand economies of scale intuitively. The key is identifying that fixed costs (labor, rent, equipment) are spread over more output.

> **Professor's Corner:** This is an intuitive application question — no math required, but the examiner wants to see you use economic reasoning, not common sense. Frame your answer around average cost declining with output: the second 31 oz has lower AC than the first because fixed costs are already covered. A top answer adds that marginal cost is below average cost when there are economies of scale.
>
> → *See also: Topic 3A Q7(vii) (DRS — the opposite case)*

---

## Topic 3B — Profit Function

---

### Question 1 {#q-profit-01}

> **Marking Guide [14 marks]:** Definition (2) | Property Listing (4) | Hotelling's Lemma (4) | Convexity Intuition (2) | Law of Supply (2)

> ⭐ **High-Yield** — The profit function is the dual of the cost function. Its convexity in prices (not concavity!) is a classic exam trap. Hotelling's Lemma is the production-side analogue of Roy's Identity.

**Profit function:** $\pi(p) = \max_{y \in Y} p \cdot y$

The value function of the profit maximization problem (PMP). $\pi(p)$ maps price vectors to the maximum attainable profit.

If $Y$ is **closed** and satisfies **free disposal**, the profit function satisfies:

| Property | Meaning |
|----------|---------|
| **1. Homog(1) in $p$** | $\pi(\lambda p) = \lambda \pi(p)$ for $\lambda > 0$. Doubling all prices doubles nominal profit. |
| **2. Convex in $p$** | $\pi(\alpha p + (1-\alpha)p') \leq \alpha \pi(p) + (1-\alpha)\pi(p')$. The firm benefits more from extreme price vectors than balanced ones — convexity reflects option value of adjusting production. |
| **3. Non-decreasing in output prices, non-increasing in input prices** | $\frac{\partial \pi(p)}{\partial p_k} = y_k(p) \geq 0$ if $k$ is an output, $\leq 0$ if $k$ is an input (Hotelling's Lemma). |
| **4. Continuous in $p$** | Small price changes → small profit changes (given $Y$ closed). |

**Hotelling's Lemma:** $\nabla_p \pi(p) = y(p)$ — the supply of output $k$ equals the derivative of the profit function w.r.t. its price.

**Law of Supply:** $\frac{\partial y_k(p)}{\partial p_k} \geq 0$ — supply curves slope upward.

**Exam Tip:** The profit function is convex (not concave!) in prices. This is the opposite of the cost function (concave in input prices). Don't confuse them.

> **Professor's Corner:** The convexity of $\pi(p)$ reflects the firm's ability to adjust its production plan as prices change — the firm benefits more from extreme price vectors because it can specialise. A top answer explains the economic intuition: a price-taking firm can reallocate resources toward relatively more expensive outputs, so profit grows more than linearly in prices. Contrast this with the cost function, where substitution mitigates cost increases, hence concavity.
>
> → *See also: Topic 3A Q5 (cost function concavity — the dual), Topic 3B Q2 (MRPT application)*

---

### Question 2 {#q-profit-02}

> **Marking Guide [14 marks]:** Setup & Differentiation (4) | Profit FOCs (4) | Substitution (3) | Intuitive Explanation (3)

> ⭐ **High-Yield** — This duality result connects production theory (MRPT) with cost theory (MC ratio) and is the foundation for the product-mix efficiency condition in GE.

**Show: $MRPT_{x,y} = MC_x / MC_y$.**

**Proof:**

The transformation function $F(q_x, q_y, z) = 0$ describes the production possibility frontier.

Total differentiate along the frontier ($dF = 0$):

$$\frac{\partial F}{\partial q_x} dq_x + \frac{\partial F}{\partial q_y} dq_y = 0$$

$$MRPT_{x,y} = -\frac{dq_y}{dq_x} = \frac{\partial F/\partial q_x}{\partial F/\partial q_y}$$

Now consider the profit function $\pi = p_x q_x + p_y q_y - c(q_x, q_y)$.

FOCs for profit maximization:

$$\frac{\partial \pi}{\partial q_x} = p_x - \frac{\partial c}{\partial q_x} = 0 \Rightarrow p_x = MC_x$$
$$\frac{\partial \pi}{\partial q_y} = p_y - \frac{\partial c}{\partial q_y} = 0 \Rightarrow p_y = MC_y$$

From the tangency condition of the PMP, at the optimum:

$$MRPT_{x,y} = \frac{p_x}{p_y}$$

Substituting:

$$MRPT_{x,y} = \frac{p_x}{p_y} = \frac{MC_x}{MC_y}$$

**QED.**

**Alternative intuitive proof:** If $MRPT_{x,y} > MC_x/MC_y$, the firm can increase profit by reallocating resources from $y$ to $x$ (the gain in $x$ revenue exceeds the loss in $y$ revenue per unit of resource shift).

**Exam Tip:** This is a key duality result linking production theory with cost theory. The MRPT equals the ratio of marginal costs, which also equals the ratio of output prices under profit maximization.

> **Professor's Corner:** A complete answer has two parts: (i) the technical derivation via total differentiation of $F(y)=0$ and the PMP first-order conditions, and (ii) the intuitive explanation — if $MRPT > MC_x/MC_y$, reallocating resources from $y$ to $x$ raises revenue more than it raises cost. The connection to the GE efficiency condition $MRPT = MRS$ (product-mix efficiency) is what separates A from B answers.
>
> → *See also: Topic 3A Q1 (MRPT definition), Topic 3A Q5 (cost function properties)*

---

## Topic 3C — Competitive Industry

---

### Question 1 {#q-compet-01}

> **Marking Guide [14 marks]:** SR Firm Supply (2) | Market Equilibrium (3) | Tax Incidence Computation (4) | DWL Calculation (3) | Welfare Summary (2)

> ⭐ **High-Yield** — Competitive equilibrium with taxation is the most commonly examined numerical question in this topic. Tax incidence and DWL are almost guaranteed.

1,000 identical firms. $C_{SR}(q) = 0.5q^2 + 2q + 80$.

**(i) SR supply per firm**

$$MC = \frac{dC}{dq} = q + 2$$

Shutdown condition: $P \geq \min AVC$.

$$AVC = \frac{0.5q^2 + 2q}{q} = 0.5q + 2$$

$AVC$ minimized at $q = 0$: $\min AVC = 2$.

Supply: $P = MC \Rightarrow P = q + 2 \Rightarrow q(P) = P - 2$ for $P \geq 2$.

**(ii) Industry SR supply**

$$Q_S(P) = 1000 \times q(P) = 1000(P - 2) \text{ for } P \geq 2$$

**(iii) Market equilibrium**

Market demand: $Q_D(P) = 44,000 - 1000P$.

Set $Q_S = Q_D$:

$$1000(P - 2) = 44,000 - 1000P$$
$$1000P - 2000 = 44,000 - 1000P$$
$$2000P = 46,000$$
$$P = 23$$

$$Q = 1000(23 - 2) = 21,000$$

**Equilibrium: $P^* = 23$, $Q^* = 21,000$.**

Each firm produces $q = 21,000/1000 = 21$.

Profit per firm:

$$\pi = TR - TC = 23(21) - [0.5(21)^2 + 2(21) + 80]$$
$$= 483 - [220.5 + 42 + 80] = 483 - 342.5 = 140.5$$

**Each firm earns $\pi = 140.5$.**

**(iv) \$20/unit tax: new prices, quantity**

Tax shifts supply: effective price to firms is $P - t$.

Supply with tax: $P - 20 = q + 2 \Rightarrow q = P - 22$.

$$Q_S(P) = 1000(P - 22) \text{ for } P \geq 22$$

Set $Q_S = Q_D$:

$$1000(P - 22) = 44,000 - 1000P$$
$$1000P - 22,000 = 44,000 - 1000P$$
$$2000P = 66,000$$
$$P = 33$$

$$Q = 1000(33 - 22) = 11,000$$

**After tax: $P_b = 33$ (buyer price), $P_s = 13$ (seller price), $Q = 11,000$.**

Tax revenue = $t \times Q = 20 \times 11,000 = 220,000$.

Each firm produces $q = 11,000/1000 = 11$.

After-tax profit per firm: $\pi = 13(11) - [0.5(11)^2 + 2(11) + 80] = 143 - [60.5 + 22 + 80] = 143 - 162.5 = -19.5$.

Firms make losses in SR (but continue since $P_s = 13 > \min AVC = 2$).

**(v) Welfare cost of tax (DWL)**

**Method 1 — Triangle formula:**

$$DWL = \frac{1}{2} \times t \times \Delta Q = \frac{1}{2} \times 20 \times (21,000 - 11,000) = \frac{1}{2} \times 20 \times 10,000 = 100,000$$

**Method 2 — Area between demand and supply:**

$$\int_{11,000}^{21,000} [D(Q) - S(Q)] dQ = 100,000$$

**Deadweight loss = 100,000.**

**Exam Tip:** For linear supply and demand, DWL is always the triangle $\frac{1}{2} \times t \times \Delta Q$. The tax incidence depends on relative elasticities. Here both supply and demand slopes are equal ($\pm 1000$), so the tax burden is split evenly ($P$ rises by \$10 for buyers, falls by \$10 for sellers).

> **Professor's Corner:** The most common mistake is forgetting the shutdown condition — check $P \ge \min AVC$ before using $P = MC$ as the supply curve. Another frequent error: computing DWL as $\frac{1}{2} \times t \times Q_{after}$ instead of $\frac{1}{2} \times t \times \Delta Q$. The per-firm loss of $-\$19.5$ after tax is a key insight — firms produce despite losses because $P_s = 13 > \min AVC = 2$ (they are covering variable costs and contributing to fixed costs in the SR).
>
> → *See also: Topic 3A Q7(iv) (shutdown condition), Topic 3C Q2 (Walras' Law — GE extension)*

| Measure | Without Tax | With Tax |
|---------|-------------|----------|
| $P$ (buyer) | 23 | 33 |
| $P$ (seller) | 23 | 13 |
| $Q$ | 21,000 | 11,000 |
| Per-firm $q$ | 21 | 11 |
| Per-firm $\pi$ | 140.5 | −19.5 |
| Tax revenue | 0 | 220,000 |
| DWL | 0 | 100,000 |

---

### Question 2 {#q-compet-02}

> **Marking Guide [14 marks]:** Walras' Law Statement (2) | Algebraic Substitution (5) | Price Ratio Derivation (5) | Consistency Check (2)

> ⭐ **High-Yield** — Walras' Law is the central organising principle of general equilibrium. Knowing how to use it to find equilibrium price ratios is essential for GE questions.

**Three-good world:** Walras' law: $p \cdot Z(p) = 0$ for all $p$.

Given $Z_2(p) = -3 + \frac{p_3}{p_2} + \frac{p_1}{p_2}$, $Z_3(p) = \frac{3p_1}{p_3} + \frac{4p_2}{p_3} - 7$.

**(i) Find $Z_1$**

From Walras' law: $p_1 Z_1 + p_2 Z_2 + p_3 Z_3 = 0$.

$$p_1 Z_1 = -p_2 Z_2 - p_3 Z_3$$
$$Z_1 = -\frac{p_2}{p_1} Z_2 - \frac{p_3}{p_1} Z_3$$

Substituting:

$$Z_1 = -\frac{p_2}{p_1}\left(-3 + \frac{p_3}{p_2} + \frac{p_1}{p_2}\right) - \frac{p_3}{p_1}\left(\frac{3p_1}{p_3} + \frac{4p_2}{p_3} - 7\right)$$

$$= \frac{3p_2}{p_1} - \frac{p_3}{p_1} - 1 - 3 - \frac{4p_2}{p_1} + \frac{7p_3}{p_1}$$

$$= \left(\frac{3p_2}{p_1} - \frac{4p_2}{p_1}\right) + \left(-\frac{p_3}{p_1} + \frac{7p_3}{p_1}\right) + (-1 - 3)$$

$$= -\frac{p_2}{p_1} + \frac{6p_3}{p_1} - 4$$

$$Z_1(p) = -4 + \frac{6p_3 - p_2}{p_1}$$

**(ii) Find market-clearing $p_2/p_1$, $p_3/p_1$**

Set $Z_1 = Z_2 = Z_3 = 0$ (we only need 2 equations, Walras' law gives third).

From $Z_2 = 0$:

$$-3 + \frac{p_3}{p_2} + \frac{p_1}{p_2} = 0 \Rightarrow \frac{p_3}{p_2} + \frac{p_1}{p_2} = 3$$

Let $r_2 = p_2/p_1$, $r_3 = p_3/p_1$. Then $p_3/p_2 = r_3/r_2$ and $p_1/p_2 = 1/r_2$.

Equation for good 2: $\frac{r_3}{r_2} + \frac{1}{r_2} = 3 \Rightarrow r_3 + 1 = 3r_2$ ... (1)

From $Z_3 = 0$:

$$\frac{3p_1}{p_3} + \frac{4p_2}{p_3} - 7 = 0 \Rightarrow \frac{3}{r_3} + \frac{4r_2}{r_3} = 7 \Rightarrow 3 + 4r_2 = 7r_3$$ ... (2)

Substitute (1) into (2): $3 + 4r_2 = 7(3r_2 - 1)$

$$3 + 4r_2 = 21r_2 - 7$$
$$10 = 17r_2$$
$$r_2 = \frac{10}{17}$$

From (1): $r_3 = 3r_2 - 1 = 3 \cdot \frac{10}{17} - 1 = \frac{30}{17} - 1 = \frac{13}{17}$.

**Market-clearing price ratios:**

$$\frac{p_2}{p_1} = \frac{10}{17}, \quad \frac{p_3}{p_1} = \frac{13}{17}$$

**Check with $Z_1 = 0$:**

$Z_1 = -4 + \frac{6r_3 - r_2}{1} = -4 + 6\cdot\frac{13}{17} - \frac{10}{17} = -4 + \frac{78}{17} - \frac{10}{17} = -4 + \frac{68}{17} = -4 + 4 = 0$ ✓

**Exam Tip:** In a 3-good Walrasian system, you only need to solve 2 market-clearing equations. The third is automatically satisfied by Walras' law. Normalize $p_1 = 1$ (numeraire) to simplify.

> **Professor's Corner:** Top answers follow a clear three-step process: (1) write Walras' Law explicitly, (2) solve any two market-clearing conditions for price ratios, (3) verify the third market clears automatically. The most common error is algebraic: sign mistakes when substituting $Z_2$ and $Z_3$ into the Walras' Law identity. Always check your solution by verifying $Z_1 = 0$ with the computed ratios.
>
> → *See also: GE answers Q8 (Walras' Law in GE context), Topic 3C Q1 (partial equilibrium — the contrast)*

> **End of answers.** Covers all questions from Topics 2, 3A, 3B, 3C.
