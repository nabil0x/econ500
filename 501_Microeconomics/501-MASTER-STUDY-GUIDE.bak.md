# 501 Microeconomics — Complete Master Study Guide

> **Jahangirnagar University · MSc Economics**
> Advanced Microeconomic Theory — Exam preparation source of truth
>
> **Source files:** All answer banks, extracted text from PDFs, homework assignments, tutorial sheets, and past exam papers (Batch 46, Batch 48)
>
> **Last updated:** June 2026

---

## How to Use This Guide

This is a **single-file source of truth** for 501 Microeconomics. It consolidates:

- **Theory & basics** — core concepts, definitions, assumptions
- **Derivations** — step-by-step mathematical derivations with LaTeX
- **Solved questions** — all answers from the existing answer banks (~80+ questions)
- **New practice problems** — from homework PDFs, tutorial sheets, and past exams
- **Past exam papers** — Batch 46 (2020) and Batch 48 (2022, 2023) with solutions

### Navigation

| Section | Topic | Pages |
|---------|-------|-------|
| Topic 1 | Consumer Theory & Preferences | Preference axioms, utility, UMP, EMP, duality, Slutsky |
| Topic 2 | Demand Theory & Elasticities | Demand functions, elasticities, revenue, log-linear demand |
| Topic 3 | Production & Supply | Production functions, costs, profit maximization, competition |
| Topic 4 | Welfare Economics | CV/EV/CS, Pareto optimality, welfare theorems, SWF |
| Topic 5 | General Equilibrium | GE concepts, Edgeworth box, existence/stability |
| Topic 6 | Game Theory | Nash equilibrium, sequential games, SPNE, repeated games |
| Topic 7 | Externalities & Public Goods | Pigouvian tax, Coase, public goods, commons |
| Topic 8 | Information & Trade | Asymmetric information, signaling, tariffs, trade |
| Appendix A | Exam Cheat Sheet | All key formulas on one page |
| Appendix B | Past Exam Papers | Batch 46 (2020) & Batch 48 (2022, 2023) |

---

## Exam Pattern (MSc 501 — 70 marks, Answer any 5 from 8)

| Topic | Likely Questions | Priority |
|-------|-----------------|----------|
| **Consumer Theory** | 2–3 questions (preference axioms, duality, convexity proofs) | ⭐⭐⭐ |
| **Production & Supply** | 2 questions (production sets, full CD analysis, competitive eq) | ⭐⭐⭐ |
| **Welfare & Pareto** | 1–2 questions (CV/EV/CS, Hicks-Kaldor, welfare theorems) | ⭐⭐⭐ |
| **General Equilibrium** | 1 question (Edgeworth box or existence/stability) | ⭐⭐ |
| **Demand & Elasticities** | 1 question (elasticities, revenue test, log-linear demand) | ⭐⭐ |
| **Externalities & Public Goods** | 1–2 questions (Pigouvian tax, Coase, tragedy of commons) | ⭐⭐ |
| **Information & Trade** | 0–1 question (adverse selection, signaling, tariff — rotating topic) | ⭐ |

**Question types:** ~35% essay, ~25% proof, ~25% numerical, ~10% graphical, ~5% game theory

---

## Answer Structure Template (14-mark question — 12 minutes)

| Phase | Time | What to Do |
|-------|------|------------|
| Plan | 2 min | Classify: Theory/Definition? Derivation/Numerical? Essay/Evaluation? |
| (a) Definition | 1.5 min | Define terms, list assumptions, name theorem |
| (b) Derivation | 3 min | Lagrangian → FOCs → solving → SOC note |
| (c) Diagram | 3 min | Draw labelled graph, equilibrium points, arrows |
| (d) Intuition | 1.5 min | Translate maths to plain English |
| (e) Evaluation | 1 min | Link to other topics, note limitations |
| Review | 2 min | Check relevance, diagram labels, algebra |

---

## <a id="topic-1"></a>Topic 1: Consumer Theory & Preferences


---

### 1.1 The Preference-Based Approach

Consumer theory begins with the idea that individuals have well-defined preferences over consumption bundles and choose the most-preferred bundle from those they can afford. Preferences are the primitive; choices are derived from them.

**The preference relation** is a binary relation $\succeq$ (weak preference) on the consumption set $X = \mathbb{R}^N_+$. For any $x, y \in X$:

- $x \succeq y$ : "x is at least as preferred as y"
- $x \succ y$ (strict) : $x \succeq y$ but not $y \succeq x$
- $x \sim y$ (indifference) : $x \succeq y$ and $y \succeq x$

#### Rationality Axioms

A **rational preference relation** satisfies two key assumptions:

**1. Completeness** -- For all $x, y \in X$: either $x \succeq y$, or $y \succeq x$, or both ($x \sim y$). The consumer can compare ANY two bundles; no refusal to answer.

- *Violation example:* "Is the brother of" -- if John and Bob are not brothers, neither is the brother of the other.
- *Real-world violation:* Consumers often cannot compare unfamiliar bundles (e.g., a rare wine vs. an exotic cheese).

**2. Transitivity** -- For all $x, y, z \in X$: if $x \succeq y$ and $y \succeq z$ then $x \succeq z$. Preferences do not cycle; they are internally consistent.

- *Without transitivity:* a **money-pump argument** can extract infinite wealth from the individual (cycle through preferences, charging a fee at each step).
- *Sources of intransitivity:* Indistinguishable alternatives (just-noticeable differences), framing effects, Condorcet paradox (aggregation of criteria), changing preferences.

**Reflexivity** (implied by completeness + transitivity): $x \sim x$ and $x \succeq x$ for all $x$.

---

> **Exam Tip (Q1, 10/7 marks):** Completeness is the most frequently challenged assumption -- real people often cannot compare unfamiliar bundles. Transitivity is needed for utility representation. Always state both when defining rational preferences. A students give the Condorcet paradox and money-pump argument; B students merely restate definitions.

---

#### Indifference Sets & Contour Sets

For a preference relation $\succeq$ and bundle $x \in X$, the following sets partition $X$:

- **Indifference Set (IND):** $IND(x) = \{ y \in X : y \sim x \}$
- **Upper Contour Set (UCS):** $UCS(x) = \{ y \in X : y \succeq x \}$
- **Lower Contour Set (LCS):** $LCS(x) = \{ y \in X : x \succeq y \}$

These satisfy $IND(x) = UCS(x) \cap LCS(x)$.

---

> **Solved Question (Q2, 10/7 marks): Define indifference set. Examine: if preference satisfies strong monotonicity, ICs must be downward sloping.**

**Answer:**

**Indifference set** of a bundle $x$ is the set of all bundles $y$ such that the consumer is indifferent between them:

$$IND(x) = \{ y \in X : y \sim x \}$$

**Strong monotonicity:** For any $x \neq y$, if $x_k \ge y_k$ for all $k$ and $x_l > y_l$ for at least one good $l$, then $x \succ y$. (i.e., more of ANY good strictly increases utility.)

**Proof by contradiction that SM implies downward-sloping ICs:**

1. Suppose the indifference curve through $x$ were upward sloping.
2. Then there exists a point $y$ northeast of $x$ on the same IC: $y \gg x$ (more of both goods).
3. By strong monotonicity, $y \gg x$ implies $y \succ x$.
4. But by definition of the IC, $y \sim x$.
5. Contradiction. Hence ICs cannot be upward sloping.

**Strong monotonicity rules out:** upward-sloping ICs, thick indifference curves, and bads (where more reduces utility).

> **Exam Tip:** Strong monotonicity is sufficient but not necessary for downward-sloping ICs. LNS alone does NOT guarantee downward-sloping ICs (e.g., if one good is a bad).

---

#### Convexity of Preferences

**Convexity (Definition 1):** For all $x, y \in X$, if $x \succeq y$ then for any $\alpha \in (0,1)$:

$$\alpha x + (1-\alpha) y \succeq y$$

The convex combination of $x$ and $y$ is at least as good as $y$.

**Convexity (Definition 2 -- Convex UCS):** For every bundle $x$, its upper contour set $UCS(x) = \{ y \in X : y \succeq x \}$ is a convex set. That is, for any $y, z \in UCS(x)$ and any $\lambda \in (0,1)$:

$$\lambda y + (1-\lambda) z \succeq x$$

**Equivalence:** The two definitions are equivalent. Both capture the idea that consumers prefer averages to extremes (diversification).

**Strong convexity:** For every $x, y$ where $x \neq y$ and $x \succeq z$, $y \succeq z$, then for all $\lambda \in (0,1)$:

$$\lambda x + (1-\lambda) y \succ z$$

| Property | Convexity | Strong Convexity |
|---|---|---|
| Convex combination of equally-good bundles | At least as good | Strictly better |
| IC shape | Can have flat segments | Strictly bowed inward |
| Utility representation | Quasiconcave | Strictly quasiconcave |
| Walrasian demand | Convex set (possibly multi-valued) | Single-valued (unique) |
| Example: $U = aX + bY$ | Convex but NOT strict | No |
| Example: $U = \min\{aX, bY\}$ | Convex but NOT strict | No |
| Example: $U = X^\alpha Y^\beta$ | Both | Yes |

---

> **Solved Question (Q3, 10/4 marks): What are the twin definitions of convexity? How differ from strong convexity? Graphical.**

**Answer:** See definitions above. The graphical distinction: strict convexity shows ICs strictly bowed toward the origin -- the chord connecting any two points on the same IC lies entirely above the IC (strictly preferred region). Weak convexity allows the chord to coincide with the IC (linear segments, as in perfect substitutes).

> **Exam Tip:** For 4-mark questions: give both definitions, state they are equivalent, then contrast with strong convexity in one sentence. Drawing the IC shapes (strictly bowed vs. linear segments) is worth extra marks.

---

> **Solved Question (Q4, 5 marks): Show: Convexity of preference $\iff$ UCS(x) convex $\iff$ $u(\cdot)$ quasiconcave.**

**Answer:**

We prove the chain of equivalences:

**(1) Convexity of preference $\iff$ UCS(x) is convex:** By Definition 2 of convexity, preferences are convex if and only if the upper contour set of every bundle is convex. The equivalence is definitional.

**(2) UCS(x) is convex $\iff$ $u(\cdot)$ is quasiconcave:**

**Define quasiconcavity:** A function $u(\cdot)$ is quasiconcave if for all $x, y \in X$ and $\lambda \in (0,1)$:

$$u(\lambda x + (1-\lambda) y) \ge \min\{u(x), u(y)\}$$

**Proof ($\Rightarrow$):**
- Assume UCS is convex for all bundles.
- Take $x, y$. Let $m = \min\{u(x), u(y)\}$. Let $z$ be the bundle achieving $u(z) = m$.
- Then both $x$ and $y$ lie in $UCS(z)$ because $u(x) \ge m$ and $u(y) \ge m$.
- By convexity of $UCS(z)$, $\lambda x + (1-\lambda) y$ lies in $UCS(z)$.
- Hence $u(\lambda x + (1-\lambda) y) \ge m = \min\{u(x), u(y)\}$.
- Therefore $u$ is quasiconcave.

**Proof ($\Leftarrow$):**
- Assume $u$ is quasiconcave.
- Take any $z$ and any $x, y \in UCS(z)$, so $u(x) \ge u(z)$ and $u(y) \ge u(z)$.
- Then $\min\{u(x), u(y)\} \ge u(z)$.
- By quasiconcavity: $u(\lambda x + (1-\lambda) y) \ge \min\{u(x), u(y)\} \ge u(z)$.
- Hence $\lambda x + (1-\lambda) y \in UCS(z)$, so $UCS(z)$ is convex.

**Chain complete:** Convexity of preference $\iff$ UCS convex $\iff$ quasiconcave utility.

> **Exam Tip:** This is a standard equivalence proof. For 5 marks: state each equivalence clearly, prove the key direction (UCS convex $\iff$ quasiconcave), and show the chain.

---

#### Debreu Utility Existence Theorem

> **Solved Question (Q5, 5 marks): Prove: Monotonicity + continuity $\rightarrow$ utility function exists.**

**Theorem (Debreu):** If a preference relation $\succeq$ satisfies monotonicity and continuity on $X = \mathbb{R}^N_+$, then there exists a continuous utility function $u: X \to \mathbb{R}$ representing $\succeq$.

**Proof sketch:**

1. Let $\mathbf{0} = (0,0,\ldots,0)$. For any bundle $x \neq \mathbf{0}$, by monotonicity $x \succeq \mathbf{0}$.
2. Let $m = \max\{x_1, x_2, \ldots, x_N\}$. Define $M = (m, m, \ldots, m)$ -- a bundle on the 45-degree line with all components equal to $m$.
3. By monotonicity: $M \succeq x \succeq \mathbf{0}$.
4. Both $\mathbf{0}$ and $M$ lie on the main diagonal (equal amounts of all goods).

5. Define the set $A = \{ t \in [0,m] : (t,t,\ldots,t) \preceq x \}$ and $B = \{ t \in [0,m] : (t,t,\ldots,t) \succeq x \}$.
   - Monotonicity ensures $A$ and $B$ are non-empty and partition $[0,m]$.
   - By continuity, both $A$ and $B$ are closed, so the intersection is non-empty.
   - Hence there exists a unique $t(x)$ such that $(t(x), t(x), \ldots, t(x)) \sim x$.

6. Define $u(x) = t(x)$. This is a real number representing the utility of $x$.

7. For any two bundles $x, y$: $x \succeq y$ iff $t(x) \ge t(y)$ iff $u(x) \ge u(y)$.

**Intuition:** Project every bundle onto the 45-degree line via unique indifference curve intersection. The projection $t(x)$ becomes the utility number.

> **Exam Tip:** Memorize the structure: $\mathbf{0} \to M \to t(x) \to u(x)=t(x)$. Lexicographic preferences violate continuity and cannot be represented -- a key counterexample.

#### Continuity of Preferences

A preference relation $\succeq$ is **continuous** if it is preserved under limits: for sequences $x^n \to x$, $y^n \to y$, $x^n \succeq y^n$ for all $n$ $\implies$ $x \succeq y$.

**Equivalent definition:** For every $x$, both $UCS(x)$ and $LCS(x)$ are closed sets.

**Economic role:** Continuity rules out "jumps" in preferences -- small changes in consumption cannot cause abrupt preference reversals. It is necessary for utility representation and ensures demand correspondences are upper hemicontinuous.

---

#### Utility Functions & Desirability

> **Solved Question (Q6, 10/5 marks): Define utility function. Explain desirability by monotonicity and strong monotonicity.**

**Answer:**

**Utility function:** A function $u: X \to \mathbb{R}$ that represents preference relation $\succeq$ if, for every $x, y \in X$:

$$x \succeq y \iff u(x) \ge u(y)$$

**Properties of utility representation:**
- Only the **ranking** matters (ordinality), not the numerical magnitude (cardinality).
- Any strictly increasing transformation $v = f(u(x))$ also represents the same preferences.
- Example: $u = x^\alpha y^\beta$ and $v = \alpha \ln x + \beta \ln y$ represent the same preferences.

**Desirability assumptions** formalize "more is better":

**Monotonicity:**
- For all $x \neq y$:
  - (a) If $x_k \ge y_k$ for ALL goods $k$, then $x \succeq y$.
  - (b) If $x_k > y_k$ for ALL goods $k$, then $x \succ y$.

**Strong monotonicity:**
- For all $x \neq y$: if $x_k \ge y_k$ for all goods $k$ AND $x_l > y_l$ for at least one good $l$, then $x \succ y$.

| Criterion | Monotonicity | Strong Monotonicity |
|---|---|---|
| One good increases, others same | Only weakly better ($x \succeq y$) | Strictly better ($x \succ y$) |
| All goods increase | Strictly better | Strictly better |
| Example: $u = \min\{x_1, x_2\}$ | Satisfies monotonicity | Violates |
| Example: $u = x_1 + x_2$ | Satisfies | Satisfies |
| LNS implied? | Yes | Yes (stronger) |

---

#### Local Non-Satiation (LNS)

> **Solved Question (Q7, 5 marks): Show: Strong Monotonicity $\Rightarrow$ Monotonicity $\Rightarrow$ LNS.**

**Answer:**

**LNS definition:** For every $x \in X$ and $\varepsilon > 0$, there exists $y$ with $\|y - x\| < \varepsilon$ such that $y \succ x$. The consumer is never fully satiated.

**(1) Strong Monotonicity $\Rightarrow$ Monotonicity:**
- Take any $x \neq y$.
- For (a): If $x_k \ge y_k$ for all $k$, then by strong monotonicity: if $x_l > y_l$ for any $l$, $x \succ y$. If $x = y$ (equal in all components), then $x \sim y$. Either way, $x \succeq y$.
- For (b): If $x_k > y_k$ for ALL $k$, then clearly $x_k \ge y_k$ for all $k$ and $x_l > y_l$ for at least one $l$ (in fact, all). So by strong monotonicity, $x \succ y$.

**(2) Monotonicity $\Rightarrow$ LNS:**
- Take any bundle $x = (x_1, x_2, \ldots, x_N)$ and any $\varepsilon > 0$.
- Construct $y = (x_1 + \delta, x_2 + \delta, \ldots, x_N + \delta)$ where $\delta = \varepsilon/\sqrt{N} > 0$.
- Then $y_k > x_k$ for ALL $k$, so by monotonicity (condition b), $y \succ x$.
- The Euclidean distance $\|y - x\| = \sqrt{N \delta^2} = \delta\sqrt{N} = \varepsilon$.
- Therefore for any $\varepsilon > 0$ we found a $y$ within $\varepsilon$ of $x$ that is strictly preferred.

**Chain:** Strong Monotonicity $\Rightarrow$ Monotonicity $\Rightarrow$ LNS.

**Note:** The converse does NOT hold. LNS does not imply monotonicity.

> **Exam Tip:** For 5 marks: prove each arrow cleanly. The trick for M $\Rightarrow$ LNS is increasing *all* goods by $\delta = \varepsilon/\sqrt{N}$ -- increasing only one good under plain monotonicity yields only weak preference.

---

### 1.2 Homogeneity, Homotheticity & MRS

#### Homogeneous Functions

> **Solved Question (Q8, 5/4 marks): Examine (i) Homogeneity (ii) Homotheticity.**

A function $f: \mathbb{R}^N_+ \to \mathbb{R}$ is **homogeneous of degree $k$** if scaling all arguments by $a > 0$ multiplies the function value by $a^k$:

$$f(a x_1, a x_2, \ldots, a x_N) = a^k f(x_1, x_2, \ldots, x_N)$$

**Key properties:**
1. Derivatives of an HD($k$) function are HD($k-1$).
2. MRS is HD(0): $MRS_{ij}(a x) = MRS_{ij}(x)$ (constant along rays).
3. Euler's theorem: $\sum_{i=1}^N (\partial f/\partial x_i) \cdot x_i = k f(x)$.

**Examples:** Cobb-Douglas $u = x^\alpha y^\beta$: HD($\alpha+\beta$); Perfect substitutes $u = ax + by$: HD(1); Perfect complements $u = \min\{ax, by\}$: HD(1); CES: HD(1).

#### Homothetic Preferences

A utility function $u(x)$ is **homothetic** if it is a monotonic transformation of a homogeneous function: $u(x) = g(v(x))$ where $g$ is strictly increasing and $v$ is homogeneous of some degree.

**Equivalent condition:** $x \sim y \implies \alpha x \sim \alpha y$ for all $\alpha > 0$.

**Key properties:**
1. MRS depends only on the ratio of goods ($x_1/x_2$), not on the consumption scale or utility level.
2. Indifference curves are radial expansions.
3. Engel curves are straight lines through the origin (income elasticity = 1).
4. Walrasian demand linear in income: $x(p,w) = w \cdot x(p,1)$.

**Homogeneous vs Homothetic:**
- All homogeneous functions are homothetic (take $g$ as identity).
- Not all homothetic functions are homogeneous. Counterexample: $u(x,y) = xy + a$ is homothetic (monotonic transform of $xy$ which is HD(2)) but NOT homogeneous.

| Feature | Homogeneous | Homothetic |
|---|---|---|
| Scaling property | $u(ax) = a^k u(x)$ | $u(ax) = g(a^k v(x))$ |
| MRS along rays | Constant | Constant |
| Engel curves | Straight line through origin | Straight line through origin |
| Examples | CD, linear, Leontief, CES | CD, linear, Leontief + any monotonic transformation |

> **Exam Tip:** The counterexample $u = xy + a$ (homothetic but not homogeneous) is a make-or-break example -- examiners specifically look for it.

---

#### Marginal Rate of Substitution (MRS)

The MRS between goods $i$ and $j$ measures the rate at which the consumer is willing to trade good $j$ for good $i$ while maintaining constant utility:

$$MRS_{ij}(x) = \frac{MU_i(x)}{MU_j(x)} = \frac{\partial u/\partial x_i}{\partial u/\partial x_j}$$

Along an indifference curve ($du = 0$): $MRS_{ij} = -\left. dx_j/dx_i \right|_{du=0}$.

**Key insight:** The MRS is invariant to monotonic transformations of utility (the ratio $MU_i/MU_j$ cancels out), making it a "real" economic object. At an interior UMP optimum, $MRS_{ij} = p_i/p_j$.

---

> **Solved Question (Q9, 8 marks): Prove quasi-concave utility $U(X,Y) \iff dMRS/dX < 0$.**

**Answer:**

We prove: quasiconcavity of utility (convex preferences) is equivalent to diminishing MRS along an indifference curve.

**Step 1 -- MRS formula:**

For utility $u(x,y)$,

$$MRS_{xy} = \frac{MU_x}{MU_y} = \frac{\partial u/\partial x}{\partial u/\partial y}$$

Along an indifference curve, $du = 0$:

$$du = \frac{\partial u}{\partial x} dx + \frac{\partial u}{\partial y} dy = 0 \;\Rightarrow\; \frac{dy}{dx} = -\frac{\partial u/\partial x}{\partial u/\partial y} = -MRS$$

**Step 2 -- Quasiconcavity condition (bordered Hessian):**

For a function of two variables, the $(3 \times 3)$ bordered Hessian is:

$$
\overline{H} = \begin{vmatrix}
0 & u_x & u_y \\
u_x & u_{xx} & u_{xy} \\
u_y & u_{yx} & u_{yy}
\end{vmatrix}
$$

For quasiconcavity, the principal minors must alternate in sign: $|\overline{H}_2| \ge 0$. This simplifies to:

$$2 u_x u_y u_{xy} - u_x^2 u_{yy} - u_y^2 u_{xx} \ge 0$$

**Step 3 -- $dMRS/dx$ derivation:**

$$MRS = \frac{u_x}{u_y}$$

Differentiate $MRS$ with respect to $x$ along an indifference curve (total derivative):

$$\frac{dMRS}{dx} = \frac{d(u_x/u_y)}{dx} = \frac{u_y[u_{xx} + u_{xy} y'(x)] - u_x[u_{yx} + u_{yy} y'(x)]}{u_y^2}$$

Where $y'(x) = dy/dx = -u_x/u_y$ along the IC.

Substituting and simplifying:

$$\frac{dMRS}{dx} = \frac{u_x^2 u_{yy} - 2 u_x u_y u_{xy} + u_y^2 u_{xx}}{u_y^3}$$

Note this numerator equals $-(2 u_x u_y u_{xy} - u_x^2 u_{yy} - u_y^2 u_{xx})$.

**Step 4 -- Equivalence:**
- Quasiconcavity requires: $2 u_x u_y u_{xy} - u_x^2 u_{yy} - u_y^2 u_{xx} \ge 0$
- Equivalently: $u_x^2 u_{yy} - 2 u_x u_y u_{xy} + u_y^2 u_{xx} \le 0$
- This numerator is exactly the numerator of $dMRS/dx$ (up to the positive denominator $u_y^3 > 0$).

Hence:

$$\frac{dMRS}{dx} < 0 \iff \text{numerator} < 0 \iff \text{quasiconcavity holds}$$

**Interpretation:** Diminishing MRS means as $x$ increases (substituting for $y$), the consumer requires increasingly less $y$ to give up for an additional unit of $x$ -- i.e., the IC flattens as we move right. This is the graphical manifestation of convex preferences.

---

> **Solved Question (Q10, ~3 marks): Does $U = X + \log(Y)$ have convex indifference curves? Provide proof.**

**Answer:**

**Step 1: Compute MRS.**
- $u(x,y) = x + \ln y$
- $MU_x = 1$, $MU_y = 1/y$
- $MRS_{xy} = 1 / (1/y) = y$

**Step 2: Check if MRS is diminishing in $x$ along an IC.**

Along an indifference curve, $du = 0$:

$$dx + (1/y) dy = 0 \Rightarrow \frac{dy}{dx} = -y$$

Now differentiate $MRS = y$ with respect to $x$ along the IC:

$$\frac{dMRS}{dx} = \frac{dy}{dx} = -y < 0 \quad (\text{for any positive } y)$$

**Conclusion:** Yes, MRS declines as $x$ increases. Therefore indifference curves are convex (strictly diminishing MRS).

**Alternative verification via bordered Hessian:**
- $u_x = 1$, $u_y = 1/y$, $u_{xx} = 0$, $u_{xy} = 0$, $u_{yy} = -1/y^2$
- Bordered Hessian determinant: $2u_x u_y u_{xy} - u_x^2 u_{yy} - u_y^2 u_{xx} = 0 + 1/y^2 + 0 = 1/y^2 > 0$
- Satisfies quasiconcavity condition, confirming convex ICs.

---

### 1.3 Utility Maximization Problem (UMP)

The consumer's primal problem:

$$\max_{x \ge 0} u(x) \quad \text{subject to} \quad p \cdot x \le w$$

**Solution:** Walrasian demand $x(p,w)$ and indirect utility $v(p,w) = u(x(p,w))$.

**Sufficient conditions for interior solution:** (1) $u$ quasiconcave, (2) $u$ satisfies LNS, (3) $\nabla u \neq 0$.

---

> **Solved Question (1B-Q1, 7 marks): Cobb-Douglas: Derive Walrasian demand, examine properties.**

Consider $u(x_1, x_2) = x_1^\alpha x_2^\beta$, with $\alpha, \beta > 0$. Budget: $p_1 x_1 + p_2 x_2 = w$.

**Derivation via tangency condition:**

Step 1: Lagrangian: $\mathcal{L} = x_1^\alpha x_2^\beta + \lambda(w - p_1 x_1 - p_2 x_2)$

Step 2: FOCs:

$$
\begin{aligned}
\frac{\partial \mathcal{L}}{\partial x_1} &= \alpha x_1^{\alpha-1} x_2^\beta - \lambda p_1 = 0 \\[4pt]
\frac{\partial \mathcal{L}}{\partial x_2} &= \beta x_1^\alpha x_2^{\beta-1} - \lambda p_2 = 0 \\[4pt]
\frac{\partial \mathcal{L}}{\partial \lambda} &= w - p_1 x_1 - p_2 x_2 = 0
\end{aligned}
$$

Step 3: From (1) and (2): $\frac{\alpha x_2}{\beta x_1} = \frac{p_1}{p_2} \;\Rightarrow\; x_2 = \frac{\beta}{\alpha} \cdot \frac{p_1}{p_2} x_1$

Step 4: Substitute into budget:

$$x_1(p_1, p_2, w) = \frac{\alpha}{\alpha+\beta} \cdot \frac{w}{p_1}, \qquad x_2(p_1, p_2, w) = \frac{\beta}{\alpha+\beta} \cdot \frac{w}{p_2}$$

**Properties:**

| Property | Verification |
|---|---|
| **HD(0)** | $x_1(tp, tw) = \frac{\alpha}{\alpha+\beta} \cdot \frac{tw}{tp_1} = x_1(p,w)$ |
| **Walras' Law** | $p_1 x_1 + p_2 x_2 = \frac{\alpha w}{\alpha+\beta} + \frac{\beta w}{\alpha+\beta} = w$ |
| **Own-price effect** | $\frac{\partial x_1}{\partial p_1} = -\frac{\alpha}{\alpha+\beta} \cdot \frac{w}{p_1^2} < 0$ |
| **Cross-price effect** | $\frac{\partial x_1}{\partial p_2} = 0$ (special to CD -- additive separability) |
| **Income effect** | $\frac{\partial x_1}{\partial w} = \frac{\alpha}{\alpha+\beta} \cdot \frac{1}{p_1} > 0$ (normal good) |
| **Expenditure shares** | $s_1 = \frac{p_1 x_1}{w} = \frac{\alpha}{\alpha+\beta}$; **CONSTANT** |

> **Exam Tip:** The constant expenditure share property is unique to Cobb-Douglas. When $\alpha + \beta = 1$ (common normalization), shares are $\alpha$ and $\beta$.

---

#### Indirect Utility Function & Roy's Identity

> **Solved Question (1B-Q2, 7 marks): Cobb-Douglas: Get indirect utility, explain properties, verify Roy's identity.**

**Step 1: Indirect utility function.**

Substitute Walrasian demands into the utility function:

$$
\begin{aligned}
v(p,w) &= u(x_1(p,w), x_2(p,w)) \\[4pt]
&= \left[\frac{\alpha w}{(\alpha+\beta)p_1}\right]^\alpha \cdot \left[\frac{\beta w}{(\alpha+\beta)p_2}\right]^\beta \\[4pt]
&= \frac{\alpha^\alpha \beta^\beta}{(\alpha+\beta)^{\alpha+\beta}} \cdot w^{\alpha+\beta} \cdot p_1^{-\alpha} \cdot p_2^{-\beta}
\end{aligned}
$$

With normalization $\alpha + \beta = 1$:

$$v(p,w) = w \cdot p_1^{-\alpha} \cdot p_2^{-(1-\alpha)} \cdot \alpha^\alpha (1-\alpha)^{1-\alpha}$$

**Properties of indirect utility function:**

| Property | Verification |
|---|---|
| **HD(0) in $(p,w)$** | $v(tp, tw) = t^{\alpha+\beta-\alpha-\beta} v(p,w) = v(p,w)$ |
| **Strictly increasing in $w$** | $\partial v/\partial w = (\alpha+\beta) \cdot v/w > 0$ |
| **Non-increasing in $p_k$** | $\partial v/\partial p_1 = -\alpha \cdot v/p_1 < 0$ |
| **Quasiconvex in $(p,w)$** | The set $\{(p,w): v(p,w) \le \bar{u}\}$ is convex |

**Step 2: Verify Roy's identity.**

Roy's identity: $\displaystyle x_k(p,w) = -\frac{\partial v/\partial p_k}{\partial v/\partial w}$

For good 1: $\partial v/\partial p_1 = -\alpha v/p_1$, $\partial v/\partial w = (\alpha+\beta) v/w$

$$-\frac{\partial v/\partial p_1}{\partial v/\partial w} = -\frac{-\alpha v/p_1}{(\alpha+\beta)v/w} = \frac{\alpha w}{(\alpha+\beta)p_1} = x_1(p,w) \quad \checkmark$$

Similarly for good 2: $-\frac{\partial v/\partial p_2}{\partial v/\partial w} = \frac{\beta w}{(\alpha+\beta)p_2} = x_2(p,w) \quad \checkmark$

**Roy's Identity holds.** This confirms that the indirect utility function correctly represents the underlying preferences.

> **Exam Tip:** Roy's identity is free marks if you can compute derivatives cleanly. The most common error: forgetting the minus sign. Memorize: $x_k = -(\partial v/\partial p_k)/(\partial v/\partial w)$.

---

### 1.4 Expenditure Minimization Problem (EMP) & Duality

> **Solved Question (1B-Q3, 6 marks): Cobb-Douglas: Solve expenditure minimization, examine compensated demand.**

**EMP setup:** Minimize $p_1 x_1 + p_2 x_2$ subject to $u(x_1, x_2) = x_1^\alpha x_2^\beta \ge \bar{u}$.

**Step 1: Lagrangian:** $\mathcal{L} = p_1 x_1 + p_2 x_2 + \mu(\bar{u} - x_1^\alpha x_2^\beta)$

**Step 2: FOCs:**

$$
\begin{aligned}
p_1 - \mu \alpha x_1^{\alpha-1} x_2^\beta &= 0 \\
p_2 - \mu \beta x_1^\alpha x_2^{\beta-1} &= 0 \\
\bar{u} - x_1^\alpha x_2^\beta &= 0
\end{aligned}
$$

**Step 3: Tangency condition:** $\frac{p_1}{p_2} = \frac{\alpha x_2}{\beta x_1} \;\Rightarrow\; x_2 = \frac{\beta}{\alpha} \cdot \frac{p_1}{p_2} x_1$ (Same ratio as UMP!)

**Hicksian (Compensated) Demand Functions:**

$$h_1(p, \bar{u}) = \bar{u}^{1/(\alpha+\beta)} \cdot \left(\frac{\alpha}{\beta}\right)^{\beta/(\alpha+\beta)} \cdot \left(\frac{p_2}{p_1}\right)^{\beta/(\alpha+\beta)}$$

$$h_2(p, \bar{u}) = \bar{u}^{1/(\alpha+\beta)} \cdot \left(\frac{\beta}{\alpha}\right)^{\alpha/(\alpha+\beta)} \cdot \left(\frac{p_1}{p_2}\right)^{\alpha/(\alpha+\beta)}$$

With $\alpha+\beta=1$: $h_1(p, \bar{u}) = \bar{u} \cdot \left(\frac{\alpha}{\beta}\right)^\beta \cdot \left(\frac{p_2}{p_1}\right)^\beta$

**Expenditure function:**

$$
\begin{aligned}
e(p, \bar{u}) &= p_1 h_1 + p_2 h_2 \\[4pt]
&= \bar{u}^{1/(\alpha+\beta)} \cdot (\alpha+\beta) \cdot \left(\frac{p_1}{\alpha}\right)^{\alpha/(\alpha+\beta)} \left(\frac{p_2}{\beta}\right)^{\beta/(\alpha+\beta)}
\end{aligned}
$$

With $\alpha+\beta=1$: $e(p, \bar{u}) = \bar{u} \cdot \left(\frac{p_1}{\alpha}\right)^\alpha \left(\frac{p_2}{\beta}\right)^\beta$

**Properties of Hicksian demand:**

| Property | Verification |
|---|---|
| **HD(0) in $p$** | $h(tp, u) = u \cdot (\alpha/\beta)^\beta \cdot (tp_2/tp_1)^\beta = h(p,u)$ |
| **Compensated law of demand** | $\partial h_1/\partial p_1 < 0$ |
| **No excess utility** | $u(h_1, h_2) = \bar{u}$ (by construction) |
| **Duality check** | $e(p, v(p,w)) = w$ and $v(p, e(p,\bar{u})) = \bar{u}$ |

#### Shephard's Lemma

If $e(p, u)$ is differentiable in $p$, Hicksian demand is its gradient:

$$h_k(p, u) = \frac{\partial e(p, u)}{\partial p_k} \quad \text{for } k = 1, \ldots, N$$

**Verification for CD:** $\partial e/\partial p_1 = h_1$ (derivative of expenditure function with respect to $p_1$ yields Hicksian demand for good 1).

> **Exam Tip:** Shephard's lemma is the EMP analog of Roy's identity. Together they provide a complete duality framework: from $v(p,w)$ recover Walrasian demand (Roy); from $e(p,u)$ recover Hicksian demand (Shephard).

#### Duality Framework

| UMP | EMP |
|---|---|
| $\max u(x)$ s.t. $p \cdot x \le w$ | $\min p \cdot x$ s.t. $u(x) \ge \bar{u}$ |
| Solution: $x(p,w)$ (Walrasian) | Solution: $h(p,u)$ (Hicksian) |
| Value fn: $v(p,w)$ (indirect utility) | Value fn: $e(p,u)$ (expenditure) |
| Recovery: Roy's identity | Recovery: Shephard's lemma |
| $x(p,w) = h(p, v(p,w))$ | $h(p,u) = x(p, e(p,u))$ |
| $e(p, v(p,w)) = w$ | $v(p, e(p,u)) = \bar{u}$ |

---

> **Solved Question (1B-Q4, 10 marks): Examine properties of Walrasian demand $x(p,w)$. When can UMP sufficient condition be violated?**

**Properties of Walrasian demand $x(p,w)$:**

Assume $u(\cdot)$ is continuous, preferences satisfy LNS on $X = \mathbb{R}^L_+$.

**1. Homogeneity of degree zero:** $x(p, w) = x(ap, aw)$ for all $a > 0$. Reason: budget set is unchanged. No preference assumption needed.

**2. Walras' Law:** $p \cdot x = w$ for all $x \in x(p,w)$. Reason (by LNS): if $p \cdot x < w$, there exists $y$ epsilon-close to $x$ with $y \succ x$ and still affordable, contradicting optimality.

**3. Convexity/Uniqueness:** If preferences are convex: $x(p,w)$ is a convex set (multiple optimal bundles possible). If strictly convex: $x(p,w)$ is single-valued (unique optimum).

**4.** $x(p,w)$ is continuous in $(p,w)$ if $u$ is continuous and strictly quasiconcave.

**When can UMP sufficient conditions be violated?**

The Kuhn-Tucker conditions are sufficient when: (1) $u$ quasiconcave, (2) $u$ monotone/LNS, (3) $\nabla u \neq 0$.

| Condition violated | What happens |
|---|---|
| Utility not monotone | Corner solution; $MU_i/p_i$ may not equalize across goods |
| Preferences not convex | Tangency identifies a minimum, not a maximum |
| $\nabla u = 0$ at some point | Bliss point; violates LNS; consumer would not spend all wealth |
| Budget set non-compact | No solution exists (Weierstrass fails) |

> **Exam Tip:** The Giffen good paradox is NOT a violation -- it satisfies all sufficient conditions but the income effect is large and negative. Don't confuse Giffen behavior with non-quasiconcavity.

---

> **Solved Question (1B-Q5, 10 marks): Examine (i) Homogeneity (ii) Homotheticity (demand-focused).**

**(i) Homogeneity of Walrasian demand:** $x(p,w)$ is HD(0) in $(p,w)$: $x(ap, aw) = x(p,w)$. For indirect utility: $v(p,w)$ is HD(0). For expenditure function: $e(p,u)$ is HD(1) in $p$. For Hicksian demand: $h(p,u)$ is HD(0) in $p$.

**(ii) Homotheticity demand implications:**

| Property | Explanation |
|---|---|
| **Engel curves are linear through origin** | $\frac{\partial x_k}{\partial w} \cdot \frac{w}{x_k} = 1$ (income elasticity = 1) |
| **Expenditure shares are constant** | $s_k = p_k x_k(p,w)/w$ independent of $w$ |
| **Income expansion paths are rays** | Optimal ratios $x_1/x_2$ constant as $w$ varies |
| **MRS independent of utility level** | MRS depends only on ratio $x_1/x_2$ |

**Examples:** Cobb-Douglas, perfect substitutes, perfect complements, CES -- all homothetic.

**Non-examples:** Quasilinear $u = v(x) + y$; Stone-Geary (with subsistence).

**Key insight:** HD(0) of Walrasian demand is a *property* of any solution to UMP (no preference assumptions needed). Homotheticity is an *assumption* about preferences.

---

### 1.5 Special Utility Functions & Corner Solutions

#### Leontief (Perfect Complements) -- The Negroni Cocktail

> **Solved Question (1B-Q6, ~11 marks): $U = \min(G,V,C)$. Find Marshallian demand for Gin, Hicksian demand for Campari, expenditure function.**

Leontief (perfect complements) utility: $u(G, V, C) = \min(G, V, C)$

A Negroni cocktail requires G = V = C = $q$ (fixed 1:1:1 proportions).

**Marshallian (Walrasian) demand for Gin:**

Budget: $p_G G + p_V V + p_C C = w$. With $G = V = C = q$: $q(p_G + p_V + p_C) = w$

$$G(p, w) = V(p, w) = C(p, w) = \frac{w}{p_G + p_V + p_C}$$

**Properties:** HD(0) holds; Walras' Law holds; own-price effect: $\partial G/\partial p_G = -w/(\sum p_k)^2 < 0$.

**Hicksian (compensated) demand for Campari:**

EMP: minimize $p_G G + p_V V + p_C C$ subject to $\min(G, V, C) \ge \bar{u}$.

Optimal: $G = V = C = q = \bar{u}$. So:

$$h_C(p, u) = h_G(p, u) = h_V(p, u) = \bar{u}$$

The Hicksian demands are **independent of prices** (no substitution possible).

**Expenditure function:**

$$e(p, u) = \bar{u}(p_G + p_V + p_C)$$

**Properties:** HD(1) in $p$; strictly increasing in $u$; Shephard's lemma: $\partial e/\partial p_C = \bar{u} = h_C(p,u)$.

**Duality checks:**
- $e(p, v(p,w)) = \frac{w}{\sum p_k} \cdot \sum p_k = w \quad \checkmark$
- $v(p, e(p,u)) = \frac{\bar{u}\sum p_k}{\sum p_k} = \bar{u} \quad \checkmark$

| Function | Expression |
|---|---|
| Marshallian demand (any good) | $x_k(p,w) = w / (p_G + p_V + p_C)$ |
| Hicksian demand (any good) | $h_k(p, u) = \bar{u}$ |
| Indirect utility | $v(p,w) = w / (p_G + p_V + p_C)$ |
| Expenditure function | $e(p, u) = \bar{u} \cdot (p_G + p_V + p_C)$ |

> **Exam Tip:** The Leontief case is the only functional form where Hicksian demand is *price-independent* ($h_k = \bar{u}$) because there is zero substitution possibility -- compensated own-price effect is zero.

---

#### Quasilinear Utility & Corner Solutions

> **Solved Question (1B-Q7, 3 marks): $U = X + \ln(Y)$. Find demands. With limited $I$, which goods? Why?**

**Utility:** $u(x, y) = x + \ln(y)$, Budget: $p_x x + p_y y = I$

**Step 1: MRS condition (interior solution).**
- $MU_x = 1$, $MU_y = 1/y$, $MRS_{xy} = y$
- Tangency: $MRS_{xy} = p_x/p_y \Rightarrow y = p_x/p_y$

So $y^* = p_x/p_y$ (independent of income $I$).

**Step 2: Demand for $x$ from budget constraint.**

$$x^* = \frac{I - p_y y^*}{p_x} = \frac{I - p_x}{p_x} = \frac{I}{p_x} - 1$$

**Marshallian demands:**
- $x(p, I) = I/p_x - 1$ (provided $I \ge p_x$; else $x = 0$)
- $y(p, I) = p_x / p_y$

**Step 3: With limited $I$, which goods are consumed?**
- If $I < p_x$: $x^*$ would be negative, so the consumer sets $x = 0$ (corner solution) and spends all income on $y$.
- If $I > p_x$: both goods are consumed, with $y$ fixed at $p_x/p_y$ and all extra income spent on $x$.

**Characterization:**
- **Good $y$ (log-good)** is income-INELASTIC. $\partial y/\partial I = 0$. It behaves like a necessity with a satiation/floor.
- **Good $x$ (linear good)** absorbs all changes in income. It is a normal good.
- This is a quasilinear utility function with **zero income effect** for the good entering nonlinearly ($y$).

> **Exam Tip:** The condition $I \ge p_x$ is the most commonly missed point -- exam questions frequently ask "with limited income, which goods are consumed?" Students who just write $x = I/p_x - 1$ without discussing the corner get partial marks.

---

#### Perfect Substitutes with a "Bad"

> **Solved Question (1B-Q8, 3 marks): $U(X,Y) = X - 3Y$. $P_X=20$, $P_Y=40$, $I=400$. Utility-maximizing quantities.**

**Utility:** $u(x, y) = x - 3y$, Prices: $p_x = 20$, $p_y = 40$, Income: $I = 400$

**Step 1: Observe that the utility function is linear (perfect substitutes).**
- $MU_x = \partial u/\partial x = 1$
- $MU_y = \partial u/\partial y = -3$ (MARGINAL DISUTILITY of $y$ -- $y$ is a BAD)

Since $MU_y < 0$, the consumer would prefer $y = 0$.

**Step 2: Corner solution -- consume only the good with positive marginal utility.**

If $y = 0$: $x = I / p_x = 400 / 20 = 20$, Utility: $u(20, 0) = 20 - 3(0) = 20$

**Step 3: Verify no interior solution is optimal.**

$$MRS_{xy} = \frac{MU_x}{MU_y} = \frac{1}{-3} = -\frac{1}{3}$$

Price ratio: $p_x / p_y = 20/40 = 1/2$. Since $MRS \neq p_x/p_y$, and $MU_y < 0$, the tangency condition would yield a minimum, not a maximum.

**Utility-maximizing quantities:**
- $x^* = 20$, $y^* = 0$

> **Exam Tip:** This is a "trap" question designed to catch mechanical Lagrangian solvers. Always check marginal utility signs before optimizing. If $MU_k < 0$, set $x_k = 0$ immediately.

#### Quasilinear Utility: Formal Definition

A utility function of the form $u(x, y) = f(x) + y$, where $f$ is strictly concave and $y$ is a numeraire good, exhibits **quasilinear** preferences:

**Key properties:**
- Zero income effect for the nonlinear goods ($x$): $\partial x/\partial w = 0$
- All income effects concentrated on the numeraire good $y$
- MRS depends only on $x$: $MRS_{xy} = f'(x)$
- CV = EV = CS in welfare analysis (Willig bounds collapse)

---

### 1.6 Additional Practice Problems

#### Practice Problem 1: Cobb-Douglas with $U = XY^2$

**Q (from HW1):** $U = XY^2$. Find the demands for $X$ and $Y$.

**Solution:**

$MU_X = Y^2$, $MU_Y = 2XY$

Tangency: $\frac{MU_X}{MU_Y} = \frac{Y^2}{2XY} = \frac{Y}{2X} = \frac{p_X}{p_Y}$

So $Y = \frac{2p_X}{p_Y} X$

Substitute into budget $p_X X + p_Y Y = I$:

$$p_X X + p_Y \left(\frac{2p_X}{p_Y} X\right) = I \Rightarrow p_X X + 2p_X X = I \Rightarrow 3p_X X = I$$

$$X(p, I) = \frac{I}{3p_X}, \qquad Y(p, I) = \frac{2I}{3p_Y}$$

**Check:** Expenditure share of $X$ is $1/3$, of $Y$ is $2/3$.

---

#### Practice Problem 2: Perfect Complements $U = \min(2X, Y)$

**Q (from HW1):** $U = \min(2X, Y)$. Find the demands for $X$ and $Y$.

**Solution:**

At the optimum, the consumer consumes in fixed proportion: $2X = Y$.

Budget: $p_X X + p_Y Y = I$. Substituting $Y = 2X$:

$$p_X X + p_Y(2X) = I \Rightarrow X(p_X + 2p_Y) = I$$

$$X(p, I) = \frac{I}{p_X + 2p_Y}, \qquad Y(p, I) = \frac{2I}{p_X + 2p_Y}$$

---

#### Practice Problem 3: Checking for Diminishing MRS

**Q (from HW1/Tutorial 1):** For each utility function, check for diminishing MRS:
(a) $U = XY$
(b) $U = \ln X + \ln Y$
(c) $U = X^2 + Y^2$
(d) $U = \ln X + Y$
(e) $U = \min(X, Y)$

**Solution (a): $U = XY$**
- $MU_X = Y$, $MU_Y = X$, $MRS = Y/X$
- Along IC: $du = Y dX + X dY = 0 \Rightarrow dY/dX = -Y/X$
- $dMRS/dX = \frac{d(Y/X)}{dX} = \frac{X(dY/dX) - Y}{X^2} = \frac{X(-Y/X) - Y}{X^2} = -\frac{2Y}{X^2} < 0$
- **Yes, diminishing MRS.** (Also quasiconcave.)

**Solution (b): $U = \ln X + \ln Y$**
- $MU_X = 1/X$, $MU_Y = 1/Y$, $MRS = Y/X$
- This is a monotonic transformation of $U = XY$ (take exponential: $e^{\ln X + \ln Y} = XY$), so same MRS.
- $dMRS/dX < 0$. **Yes, diminishing MRS.**

**Solution (c): $U = X^2 + Y^2$**
- $MU_X = 2X$, $MU_Y = 2Y$, $MRS = X/Y$
- Along IC: $du = 2X dX + 2Y dY = 0 \Rightarrow dY/dX = -X/Y$
- $MRS = X/Y$, so $dMRS/dX = \frac{Y - X(dY/dX)}{Y^2} = \frac{Y - X(-X/Y)}{Y^2} = \frac{Y^2 + X^2}{Y^3} > 0$
- **No -- MRS is increasing, not diminishing.** These ICs are concave to the origin (not convex). Preferences are not convex.

**Solution (d): $U = \ln X + Y$**
- $MU_X = 1/X$, $MU_Y = 1$, $MRS = 1/X$
- Along IC: $du = (1/X)dX + dY = 0 \Rightarrow dY/dX = -1/X$
- $dMRS/dX = -1/X^2 < 0$. **Yes, diminishing MRS.** (Quasilinear with diminishing MRS.)

**Solution (e): $U = \min(X, Y)$**
- MRS is undefined at the kink (the indifference curve is L-shaped).
- MRS = 0 along the horizontal segment, $\infty$ along the vertical segment.
- The function is not differentiable at the kink. The IND set boundary is not smooth, so MRS is not defined in the usual sense. However, the preference is convex (the UCS is convex).

---

#### Practice Problem 4: Homogeneity Checks

**Q (from HW2):** Check if the following utility functions are homogeneous. If so, state the degree. Also identify homothetic but not homogeneous cases.
(a) $U = (xy)^2$
(b) $U = \min(x, 2y)$
(c) $U = 2x + y$
(d) $U = x^2 y^2 + xy$

**Solution (a): $U = (xy)^2$**
- $U(tx, ty) = (tx \cdot ty)^2 = (t^2 xy)^2 = t^4 (xy)^2 = t^4 U(x,y)$
- **HD(4).** Also homothetic.

**Solution (b): $U = \min(x, 2y)$**
- $U(tx, ty) = \min(tx, 2ty) = t \cdot \min(x, 2y) = t \cdot U(x,y)$
- **HD(1).** Also homothetic.

**Solution (c): $U = 2x + y$**
- $U(tx, ty) = 2tx + ty = t(2x + y) = t \cdot U(x,y)$
- **HD(1).** Also homothetic.

**Solution (d): $U = x^2 y^2 + xy$**
- $U(tx, ty) = (tx)^2(ty)^2 + (tx)(ty) = t^4 x^2 y^2 + t^2 xy \neq t^k(x^2 y^2 + xy)$ for any single $k$
- **Not homogeneous.** However, note that $U = xy(xy + 1)$. Since $xy$ is HD(2), and $U = f(xy)$ where $f(z) = z^2 + z$, this is a monotonic transformation of $xy$ (for $z > 0$, $f'(z) = 2z + 1 > 0$). So **$U$ is homothetic but NOT homogeneous.**

**All homogeneous functions are homothetic.** Functions (a), (b), (c) are homogeneous, hence homothetic. Function (d) is NOT homogeneous but IS homothetic (monotonic transformation of $xy$).

---

#### Practice Problem 5: Marshallian Demands and Indirect Utility

**Q (from HW2/Tutorial 1):** Derive Marshallian demands and indirect utility for:
(a) $U = (xy)^2$
(b) $U = (xy)^{1/2}$
(c) $U = \min(x, 2y)$

**Solution (a): $U = (xy)^2$**

Note: $U = (xy)^2$ is a monotonic transformation of $U = xy$ (take square root). Since preferences are ordinal, Marshallian demands are the same as for $U = xy$.

$$MU_x = 2xy^2, \quad MU_y = 2x^2y$$

Tangency: $\frac{2xy^2}{2x^2y} = \frac{y}{x} = \frac{p_x}{p_y} \Rightarrow y = \frac{p_x}{p_y} x$

Budget: $p_x x + p_y y = I \Rightarrow p_x x + p_y \cdot \frac{p_x}{p_y} x = 2p_x x = I$

$$x(p, I) = \frac{I}{2p_x}, \quad y(p, I) = \frac{I}{2p_y}$$

**Indirect utility:**

$$v(p, I) = (x \cdot y)^2 = \left(\frac{I}{2p_x} \cdot \frac{I}{2p_y}\right)^2 = \frac{I^4}{16 p_x^2 p_y^2}$$

**Solution (b): $U = (xy)^{1/2}$**

Again, a monotonic transformation of $U = xy$. Marshallian demands are the same:

$$x(p, I) = \frac{I}{2p_x}, \quad y(p, I) = \frac{I}{2p_y}$$

**Indirect utility:**

$$v(p, I) = \sqrt{xy} = \sqrt{\frac{I}{2p_x} \cdot \frac{I}{2p_y}} = \frac{I}{2\sqrt{p_x p_y}}$$

**Solution (c): $U = \min(x, 2y)$**

At optimum: $x = 2y$. Budget: $p_x x + p_y y = I$.

Substitute $x = 2y$: $p_x(2y) + p_y y = y(2p_x + p_y) = I$

$$y(p, I) = \frac{I}{2p_x + p_y}, \quad x(p, I) = \frac{2I}{2p_x + p_y}$$

**Indirect utility:**

$$v(p, I) = \min(x, 2y) = \min\left(\frac{2I}{2p_x + p_y}, 2 \cdot \frac{I}{2p_x + p_y}\right) = \frac{I}{2p_x + p_y}$$

---

#### Practice Problem 6: Expenditure Function and Hicksian Demands

**Q (from HW2/Tutorial 1):** Find the expenditure function and the two Hicksian demands for:
(a) $U = x^2 y^2 + xy$
(b) $U = 2x^2 + y^2$
(c) $U = (xy)^{1/2}$

**Solution (a): $U = x^2 y^2 + xy$**

EMP: minimize $p_x x + p_y y$ subject to $x^2 y^2 + xy = \bar{u}$.

Note that $x^2 y^2 + xy = xy(xy + 1)$. Let $z = xy$. Then $u = z(z+1) = z^2 + z$.

Solving for $z$: $z^2 + z - \bar{u} = 0 \Rightarrow z = \frac{-1 + \sqrt{1 + 4\bar{u}}}{2}$ (positive root).

Tangency: $\frac{MU_x}{MU_y} = \frac{2xy^2 + y}{2x^2 y + x} = \frac{y(2xy + 1)}{x(2xy + 1)} = \frac{y}{x} = \frac{p_x}{p_y}$ (for $2xy + 1 \neq 0$)

So $y = \frac{p_x}{p_y} x$. Then $xy = \frac{p_x}{p_y} x^2 = z$ (the value defined above).

$$x = \sqrt{\frac{p_y}{p_x} z}, \quad y = \sqrt{\frac{p_x}{p_y} z}$$

**Hicksian demands:**

$$h_x(p, \bar{u}) = \sqrt{\frac{p_y}{p_x} \cdot \frac{-1 + \sqrt{1 + 4\bar{u}}}{2}}, \quad h_y(p, \bar{u}) = \sqrt{\frac{p_x}{p_y} \cdot \frac{-1 + \sqrt{1 + 4\bar{u}}}{2}}$$

**Expenditure function:**

$$e(p, \bar{u}) = p_x h_x + p_y h_y = 2\sqrt{p_x p_y \cdot \frac{-1 + \sqrt{1+4\bar{u}}}{2}}$$

**Solution (b): $U = 2x^2 + y^2$**

EMP: minimize $p_x x + p_y y$ subject to $2x^2 + y^2 = \bar{u}$.

Lagrangian: $\mathcal{L} = p_x x + p_y y + \mu(\bar{u} - 2x^2 - y^2)$

FOCs:
$$p_x - 4\mu x = 0, \quad p_y - 2\mu y = 0$$

Tangency: $\frac{p_x}{p_y} = \frac{4\mu x}{2\mu y} = \frac{2x}{y} \Rightarrow y = \frac{2p_x}{p_y} x$

Substitute into constraint: $2x^2 + \left(\frac{2p_x}{p_y} x\right)^2 = \bar{u}$

$$2x^2 + \frac{4p_x^2}{p_y^2} x^2 = \bar{u} \Rightarrow x^2\left(2 + \frac{4p_x^2}{p_y^2}\right) = \bar{u}$$

$$h_x(p, \bar{u}) = \sqrt{\frac{\bar{u}}{2 + 4p_x^2/p_y^2}} = \sqrt{\frac{\bar{u} p_y^2}{2p_y^2 + 4p_x^2}}$$

$$h_y(p, \bar{u}) = \frac{2p_x}{p_y} \cdot \sqrt{\frac{\bar{u} p_y^2}{2p_y^2 + 4p_x^2}}$$

**Expenditure function:** $e(p, \bar{u}) = p_x h_x + p_y h_y$.

**Solution (c): $U = (xy)^{1/2}$**

Since $(xy)^{1/2}$ is a monotonic transformation of $xy$, we can use the same approach as the CD case with $\alpha = \beta = 1/2$. That is, $u(x,y) = x^{1/2} y^{1/2}$.

Using the standard CD formulas with $\alpha = \beta = 1/2$, $\alpha+\beta = 1$:

$$h_x(p, \bar{u}) = \bar{u} \cdot \left(\frac{1/2}{1/2}\right)^{1/2} \cdot \left(\frac{p_y}{p_x}\right)^{1/2} = \bar{u} \sqrt{\frac{p_y}{p_x}}$$

$$h_y(p, \bar{u}) = \bar{u} \cdot \left(\frac{1/2}{1/2}\right)^{1/2} \cdot \left(\frac{p_x}{p_y}\right)^{1/2} = \bar{u} \sqrt{\frac{p_x}{p_y}}$$

**Expenditure function:**

$$e(p, \bar{u}) = p_x \cdot \bar{u} \sqrt{\frac{p_y}{p_x}} + p_y \cdot \bar{u} \sqrt{\frac{p_x}{p_y}} = 2\bar{u} \sqrt{p_x p_y}$$

---

#### Practice Problem 7: Log-Linear Demand Elasticities

**Q (from Final Exam Q2b):** The log of an individual's demand for good X is:

$$\ln X(P_x, P_y, P_z, I) = a \ln P_x + \gamma \ln P_y + \delta \ln P_z + \eta \ln I$$

(i) What is the cross-price elasticity with good Z?
(ii) Given $a = -0.5$, $\gamma = 0.4$, $\delta = 0.8$, $\eta = 0.8$: What is income elasticity? Is X a luxury, necessity, or inferior good?
(iii) Is good Z a gross substitute or a gross complement for good X?
(iv) If the price of Y were to fall by 5%, by what percent would quantity demanded of X change?
(v) If the price of good X decreases, would this person's expenditure on X increase, decrease, or remain the same?

**Solution:**

(i) Cross-price elasticity with good Z: $\varepsilon_{xz} = \partial \ln X / \partial \ln P_z = \delta$

(ii) Income elasticity: $\varepsilon_{xI} = \partial \ln X / \partial \ln I = \eta = 0.8$. Since $0 < \varepsilon_{xI} < 1$, X is a **necessity** (normal good with income elasticity less than 1).

(iii) Cross-price elasticity with good Z is $\delta = 0.8 > 0$, so X and Z are **gross substitutes** (positive cross-price elasticity means when $P_z$ rises, demand for X rises).

(iv) Cross-price elasticity with good Y: $\varepsilon_{xy} = \gamma = 0.4$. If $P_y$ falls by 5%, quantity of X changes by: $\% \Delta Q_x = \varepsilon_{xy} \times (\% \Delta P_y) = 0.4 \times (-5\%) = -2\%$. Demand for X **decreases by 2%** (X and Y are gross substitutes, so when Y becomes cheaper, consumers substitute toward Y).

(v) Own-price elasticity: $\varepsilon_{xx} = a = -0.5$. Since $|\varepsilon_{xx}| = 0.5 < 1$, demand is **inelastic**. When price decreases for an inelastic good, expenditure ($P_x \times X$) **decreases** (the quantity increase is proportionally smaller than the price decrease).

---

#### Practice Problem 8: Perfect Substitutes Corner Solution

**Q (from Final Exam Q2c):** $U(X,Y) = X + 3Y$, $P_X = 20$, $P_Y = 40$, $I = 400$. Choose quantities that maximize utility.

**Solution:**

**Step 1: Identify the utility structure.**
- $U = X + 3Y$ is linear (perfect substitutes)
- $MU_X = 1$, $MU_Y = 3$
- $MRS = 1/3$

**Step 2: Compare MRS to the price ratio.**
- $P_X/P_Y = 20/40 = 1/2$
- $MRS = 1/3 < 1/2$

**Step 3: Determine the corner.**
Since $MRS < P_X/P_Y$, the marginal utility per dollar for good X is:
- $MU_X/P_X = 1/20 = 0.05$
- $MU_Y/P_Y = 3/40 = 0.075$

$MU_X/P_X < MU_Y/P_Y$, so the consumer gets more utility per dollar from good Y. The consumer should spend **all income on good Y**.

$$Y^* = I/P_Y = 400/40 = 10, \quad X^* = 0$$

**Utility:** $U(0, 10) = 0 + 3(10) = 30$

**Verify other corner:** If all income spent on X: $X = 400/20 = 20$, $U(20, 0) = 20 + 0 = 20 < 30$. So the Y-corner is optimal.

**Utility-maximizing quantities:** $X^* = 0$, $Y^* = 10$.

> **Exam Tip:** For perfect substitutes, the optimum is always at a corner (unless $MRS = p_x/p_y$ exactly, in which case any bundle on the budget line is optimal). Compute $MU_i/p_i$ for each good and spend everything on the good with the highest marginal utility per dollar.

---

#### Practice Problem 9: Diminishing Marginal Utility and Downward-Sloping Demand

**Q (from HW2):** Do Cobb-Douglas utility functions exhibit diminishing marginal utility? Are their Marshallian demands downward sloping? What can you infer about the necessity of diminishing marginal utility for downward-sloping demands?

**Solution:**

For $U = (xy)^2$:
- $MU_x = 2xy^2$, $\partial MU_x/\partial x = 2y^2 > 0$ -- **increasing** marginal utility in $x$, not diminishing!
- But Marshallian demand is $x(p, I) = I/(2p_x)$, so $\partial x/\partial p_x = -I/(2p_x^2) < 0$ -- **downward sloping**.

For $U = \min(x, 2y)$:
- Marginal utility is not defined at the kink, but the function is HD(1) and Leontief.
- Marshallian demand: $x(p, I) = 2I/(2p_x + p_y)$ -- downward sloping in $p_x$.

**Inference:** Diminishing marginal utility is **not necessary** for downward-sloping demand. What matters is the curvature of indifference curves (convexity/diminishing MRS), not the curvature of the utility function itself. Since utility is ordinal, marginal utility can be transformed arbitrarily by monotonic transformations. The MRS (ratio of MUs) is the economically meaningful object.

---

### 1.7 New Exam Questions from the Final

#### Final Exam Q1b: Negroni Cocktail (Full Question)

**Q (Final 2023, Q1b):** After grading exams, your instructor only obtains utility from his favorite cocktail -- the Negroni. Each Negroni consists of 1 ounce of Gin, 1 ounce of red Vermouth, and 1 ounce of Campari. Let G stand for ounces of Gin, V stands for ounces of Vermouth, and C stands for ounces of Campari. Each good has a price denoted by $p_G$, $p_V$, and $p_C$ respectively.

(i) Write your instructor's utility function.
(ii) Find his Marshallian demand for Gin.
(iii) Find his Hicksian demand for Campari.
(iv) Find the expenditure function.

**Solution:**

(i) **Utility function:** $U(G, V, C) = \min\{G, V, C\}$

This is a Leontief (perfect complements) utility function -- all three goods must be consumed in fixed 1:1:1 proportions.

(ii) **Marshallian demand for Gin:** As derived in 1B-Q6 (see above), at optimum $G = V = C = q$.

Budget: $p_G G + p_V V + p_C C = w \Rightarrow q(p_G + p_V + p_C) = w$

$$G(p, w) = \frac{w}{p_G + p_V + p_C}$$

(iii) **Hicksian demand for Campari:** From the EMP, at optimum $G = V = C = \bar{u}$.

$$h_C(p, u) = \bar{u}$$

(Price-independent -- no substitution.)

(iv) **Expenditure function:**

$$e(p, u) = \bar{u}(p_G + p_V + p_C)$$

---

#### Final Exam Q1c: Quasilinear Corner

**Q (Final 2023, Q1c):** $U = X + \ln(Y)$. Find the demands for X and Y. Suppose you only have 1 cent ($I = 0.01$). Which goods do you buy? Why?

**Solution:**

From 1B-Q7: Marshallian demands are:
- $x(p, I) = I/p_x - 1$ (if $I \ge p_x$)
- $y(p, I) = p_x/p_y$

With $I = 0.01$ (1 cent), assuming $p_x \ge 0.01$ in most reasonable settings, we have $I < p_x$, so $x$ would be negative. Therefore:

$$x^* = 0, \quad y^* = I/p_y$$

The consumer buys only good Y (the log-good). **Why?** Because the marginal utility of $Y$ starts very high (when $Y$ is small, $MU_y = 1/Y$ is large), so the consumer spends the tiny income on the good that gives the highest initial marginal utility per dollar. With very low income, the consumer cannot afford to reach the satiation point for $Y$.

---

### 1.8 Exam Strategy Summary

| Concept | Key Formula/Result | Exam Frequency |
|---|---|---|
| Rational preferences | Completeness + transitivity | High |
| SM $\Rightarrow$ downward-sloping ICs | Proof by contradiction | Medium |
| Convexity $\iff$ quasiconcavity | $\min\{u(x),u(y)\}$ trick | Very High |
| Debreu existence | Project onto 45-degree line | Medium |
| SM $\Rightarrow$ M $\Rightarrow$ LNS | $\delta = \varepsilon/\sqrt{N}$ | High |
| dMRS/dx $\iff$ quasiconcavity | Bordered Hessian | High (A-level) |
| Walrasian demand (CD) | $x_k = \frac{\alpha_k}{\sum\alpha} \cdot \frac{w}{p_k}$ | Very High |
| Roy's identity | $x_k = -(\partial v/\partial p_k)/(\partial v/\partial w)$ | High |
| Shephard's lemma | $h_k = \partial e/\partial p_k$ | High |
| Hicksian demand (CD) | $h_k = \bar{u}^{1/(\sum\alpha)} \cdot (\text{price ratio term})$ | High |
| Duality | $x(p,w) = h(p,v(p,w))$, $h(p,u) = x(p,e(p,u))$ | Very High |
| Leontief | $x_k = a_k w / \sum a_i p_i$; $h_k = a_k u$ | Medium |
| Quasilinear corner | Check $I \ge p_x$ for interior $x$ | High |
| Good with a bad | Check sign of MU first | Medium |
| Log-linear elasticities | $\varepsilon = \text{coefficient}$ | Medium |

---

> **Professor's Corner -- The Big Picture:** Consumer theory rests on three pillars: (1) preference axioms (completeness, transitivity, continuity, monotonicity, convexity) that define what it means for a consumer to be "rational," (2) the UMP/EMP duality framework that generates observable demand functions, and (3) the special functional forms (CD, Leontief, quasilinear, linear) that yield closed-form solutions. Every exam question tests at most two of these pillars simultaneously. The most common question pattern: "state the axioms (pillar 1), derive demands from a specific utility function (pillar 2), and interpret the properties (pillar 3)." Master all three and you master consumer theory.

---

*End of Topic 1: Consumer Theory & Preferences. Total: 18 existing solved questions integrated + 9 new practice problems added from homework, tutorials, and final exam.*

---

---

## <a id="topic-2"></a>Topic 2: Demand Theory & Elasticities

> **Exam weight:** 14–20 marks (typically 1 question). Common question types: log-linear demand interpretation, Burger King demand problem, Lerner Index pricing.
> **Key sources:** Koutsoyiannis Ch.2, Munoz-Garcia Ch.3, §7.2.3

---

### 2.1 Core Elasticity Concepts

#### 2.1.1 Point vs Arc Elasticity

| Type | Formula | When to Use |
|------|---------|-------------|
| **Point elasticity** | $\varepsilon_{X,P} = \frac{\partial X}{\partial P} \cdot \frac{P}{X} = \frac{\% \Delta X}{\% \Delta P}$ | Infinitesimal (small) price changes |
| **Arc elasticity** | $\varepsilon_{X,P}^{\text{arc}} = \frac{\Delta X}{\Delta P} \cdot \frac{P_1 + P_2}{X_1 + X_2}$ | Discrete (large) price changes — elasticity at the chord midpoint |

#### 2.1.2 Log-Linear (Constant Elasticity) Demand

The most common functional form in empirical demand estimation:

$$X = \alpha P_X^\gamma P_Z^\delta P_W^\varepsilon I^\eta$$

Taking natural logs:

$$\ln X = \ln \alpha + \gamma \ln P_X + \delta \ln P_Z + \varepsilon \ln P_W + \eta \ln I$$

**Key insight:** In the log-linear form, each exponent IS the elasticity:

$$\varepsilon_{X,P_X} = \frac{\partial \ln X}{\partial \ln P_X} = \gamma, \quad
\varepsilon_{X,P_Z} = \frac{\partial \ln X}{\partial \ln P_Z} = \delta, \quad
\varepsilon_{X,I} = \frac{\partial \ln X}{\partial \ln I} = \eta$$

> **Exam Tip:** $\alpha$ is the **scale parameter** (intercept in log-form), NOT an elasticity. The income elasticity is $\eta$ — never confuse $\alpha$ with $\eta$.

**Classification by elasticity magnitude:**

| $|\varepsilon|$ | Classification |
|:---:|---|
| $> 1$ | Elastic (quantity responds more than proportionally) |
| $< 1$ | Inelastic (quantity responds less than proportionally) |
| $= 1$ | Unit elastic (quantity responds proportionally) |

#### 2.1.3 Cross-Price Elasticity — Gross vs Net Substitutes

| Concept | Definition | Sign |
|---------|-----------|:----:|
| **Gross substitutes** | $\partial X_i / \partial P_j > 0$ (Walrasian demand) | $\varepsilon_{ij} > 0$ |
| **Gross complements** | $\partial X_i / \partial P_j < 0$ (Walrasian demand) | $\varepsilon_{ij} < 0$ |
| **Net substitutes** | $\partial h_i / \partial P_j > 0$ (Hicksian demand) | Always symmetric |
| **Net complements** | $\partial h_i / \partial P_j < 0$ (Hicksian demand) | Always symmetric |

> **Caution:** Gross substitutability is **not necessarily symmetric** — good Y can be a gross substitute for X while X is neither a gross substitute nor complement of Y (Munoz-Garcia, Example 3.5). Net substitutes (via Hicksian demands) are symmetric.

**Slutsky equation in elasticity form** (Munoz-Garcia, p.197):

$$\varepsilon_{x,p_y} = \varepsilon_{x,p_y}^h - \theta_y \varepsilon_{x,w}$$

where $\theta_y$ is the budget share of good $y$ and $\varepsilon^h$ is the Hicksian (compensated) elasticity. This decomposition shows why cross-price effects are ambiguous: substitution effect (always positive for substitutes) and income effect (sign depends on normality/inferiority) pull in opposite directions.

#### 2.1.4 Income Elasticity Classification

| $\eta$ value | Classification | Example |
|:---:|---|---|
| $\eta > 1$ | **Luxury** (income-elastic normal) | Designer clothes, high-end electronics |
| $0 < \eta < 1$ | **Necessity** (income-inelastic normal) | Basic food, housing |
| $\eta < 0$ | **Inferior** | Instant noodles, bus travel |

#### 2.1.5 Revenue Test (MR-Elasticity Relationship)

Total expenditure (revenue): $E = P \times X(P)$

**Marginal Revenue derivation:**

$$MR = \frac{dE}{dQ} = P + Q\frac{dP}{dQ} = P\left(1 + \frac{dP}{dQ}\cdot\frac{Q}{P}\right) = P\left(1 + \frac{1}{\varepsilon}\right)$$

Since $\varepsilon < 0$ (Law of Demand), write $\varepsilon = -\eta$ where $\eta = |\varepsilon| > 0$:

$$MR = P\left(1 - \frac{1}{\eta}\right)$$

**Expenditure response to price change:**

| $\eta = |\varepsilon|$ | $MR$ | $P \downarrow \Rightarrow$ Expenditure |
|:---:|:---:|---|
| $> 1$ (elastic) | $> 0$ | $\uparrow$ |
| $< 1$ (inelastic) | $< 0$ | $\downarrow$ |
| $= 1$ (unit elastic) | $= 0$ | Unchanged (revenue maximised) |

> **Exam Tip:** The Total Revenue Test is a staple. Elastic → price and revenue move in opposite directions. Inelastic → same direction. Derive $MR = P(1 + 1/\varepsilon)$ from first principles in your answer — it shows the examiner you understand the microfoundations.

#### 2.1.6 Lerner Index (Monopoly Pricing)

$$L = \frac{P - MC}{P} = -\frac{1}{\varepsilon_{Q,P}}$$

**Derivation:** Set $MR = MC$:

$$P\left(1 + \frac{1}{\varepsilon}\right) = MC \;\Longrightarrow\; \frac{P - MC}{P} = -\frac{1}{\varepsilon}$$

**Inverse Elasticity Pricing Rule (IEPR):**

$$P^* = \frac{MC}{1 + 1/\varepsilon}$$

| Condition | Implication |
|-----------|-------------|
| $\varepsilon \to -\infty$ | $P \to MC$ (perfect competition) |
| $\varepsilon = -2$ | $P = 2 \times MC$ (100% markup) |
| $\varepsilon = -1.5$ | $P = 3 \times MC$ (200% markup) |
| $\varepsilon \to 0$ | $P \to \infty$ (infinite market power) |

> **Exam Tip:** The IEPR only works when $\varepsilon < -1$ (elastic region). If $-1 < \varepsilon < 0$, $MR$ would be negative and the formula gives a nonsensical negative price. A monopolist always operates on the elastic portion of demand.

---

### 2.2 Solved Problems — Demand Theory

---

<details>
<summary><strong>Q2.1 — Log-Linear Demand Elasticities (Exam: Batch 48 Q2, HW problem)</strong></summary>

**Problem:** Demand function: $X = \alpha P_X^\gamma P_Z^\delta P_W^\varepsilon I^\eta$

**(i) What is the cross-price elasticity of demand for X with respect to $P_Z$?**

$$\varepsilon_{X,P_Z} = \frac{\partial X}{\partial P_Z} \cdot \frac{P_Z}{X} = \frac{\partial \ln X}{\partial \ln P_Z} = \delta$$

**Why?** Take logs: $\ln X = \ln \alpha + \gamma \ln P_X + \delta \ln P_Z + \varepsilon \ln P_W + \eta \ln I$. Since $\partial \ln X / \partial \ln P_Z = (\partial X / X) / (\partial P_Z / P_Z) = \varepsilon_{X,P_Z}$, the exponent $\delta$ is the elasticity directly.

**(ii) Given $\alpha = -0.5$, $\gamma = -0.4$, $\delta = 0.8$: What is income elasticity? Classify good X.**

Income elasticity $\varepsilon_{X,I} = \eta$. The numerical value of $\alpha$ does not affect elasticity classification. The value of $\eta$ is not provided in the given numbers. **Do not confuse $\alpha$ with $\eta$.**

**Classification rule:** $\eta > 1$ → luxury; $0 < \eta < 1$ → necessity; $\eta < 0$ → inferior.

**(iii) Is Z a gross substitute or complement for X?**

$\delta = 0.8 > 0 \Rightarrow \partial X / \partial P_Z > 0$. When $P_Z$ rises, $X$ rises → **Z is a gross substitute for X**. If $\delta < 0$, Z would be a gross complement.

**(iv) If $P_W$ falls 5%, by what % does $Q_d$ change?**

$\varepsilon_{X,P_W} = \varepsilon$. $\% \Delta Q_d = \varepsilon \times (\% \Delta P_W) = \varepsilon \times (-5\%)$.

**Answer depends on sign and magnitude of $\varepsilon$:**
- $\varepsilon > 0$ (substitute): $P_W \downarrow \Rightarrow Q_d \downarrow$ by $5\varepsilon\%$
- $\varepsilon < 0$ (complement): $P_W \downarrow \Rightarrow Q_d \uparrow$ by $5|\varepsilon|\%$
- $\varepsilon = 0$ (unrelated): $Q_d$ unchanged

**(v) If $P_X$ decreases, would expenditure on X increase, decrease, or remain the same?**

Own-price elasticity $\varepsilon_{X,P_X} = \gamma = -0.4$. $|\gamma| = 0.4 < 1$ → **inelastic**.

Since $MR = P(1 + 1/\varepsilon) = P(1 - 1/0.4) = P(1 - 2.5) = -1.5P < 0$, expenditure and price move in the **same direction**. $P_X \downarrow \Rightarrow$ expenditure $\downarrow$.

**Worked numerical example:** $P_X = 10$, $X = 100$, $\gamma = -0.4$. Current expenditure = 1000.
- $P_X$ falls 10% to 9: $\% \Delta Q = -0.4 \times (-10\%) = +4\%$
- New $Q = 104$, new expenditure $= 9 \times 104 = 936$, a $\% \Delta E = -6.4\%$ ✓

For contrast, if $\gamma = -1.8$ (elastic), a 10% price cut raises Q by 18%, expenditure increases.

</details>

---

<details>
<summary><strong>Q2.2 — Burger King Demand: The Terrible Problem (Exam: Batch 48 Q3, Tutorial 2)</strong></summary>

**Problem:** $Q = 10 + 1.3P_B + 0.4P_M - 3P_F + 2.2I$

**The terrible problem:** The coefficient on $P_B$ (own price) is **positive** (+1.3).

$$\frac{\partial Q}{\partial P_B} = 1.3 > 0$$

The demand curve slopes **upward** (Giffen-like). This violates the **Law of Demand**.

**Why this is NOT a Giffen good:** A Giffen good (inferior good where income effect dominates substitution effect) still has a downward-sloping *compensated* demand curve. A positive coefficient on $P_B$ in a regression is a **symptom of model misspecification**, not a genuine Giffen effect.

**The Slutsky decomposition:**

$$\frac{\partial X_B}{\partial P_B} = \underbrace{\frac{\partial h_B}{\partial P_B}}_{\text{SE }(\leq 0)} - \underbrace{X_B \frac{\partial X_B}{\partial w}}_{\text{IE }(\lessgtr 0)}$$

Even for a Giffen good, the substitution effect remains negative. A regression coefficient of +1.3 implies the total uncompensated effect is positive — extremely rare, and in practice signals misspecification.

**Econometric diagnosis — three possible causes:**

1. **Omitted variable bias** — demand shifter correlated with both price and quantity biases coefficient upward
2. **Simultaneous equations bias** — price and quantity jointly determined; OLS on single equation confounds supply and demand shifts
3. **Measurement error** in price data

> **Professor's Corner:** This is a 30-second question once you spot the sign error. The examiner tests whether you blindly apply formulas or first verify the data make sense. The strongest answers connect this to the **identification problem** in demand estimation (Koutsoyiannis, p.55–57) — a regression of quantity on price alone cannot recover the demand curve because observed price–quantity pairs trace out both supply and demand shifts over time. Modern demand estimation uses **instrumental variables** — instruments that shift supply but not demand (e.g., input costs).

</details>

---

<details>
<summary><strong>Q2.3 — Burger King Corrected Demand & Lerner Index (Exam: Batch 48 Q3)</strong></summary>

**Corrected demand:** $Q = 150 P_B^{-1.5} P_{r1}^{0.75} P_{r2}^{-0.25} I^{0.8} A^{0.05}$

**(i) Which related good (r1 or r2) is French fries?**

French fries are a **complement** to Whoppers (cross-price elasticity negative).
- $\varepsilon_{Q,P_{r1}} = 0.75 > 0$ → r1 is a **substitute** (e.g., chicken sandwich)
- $\varepsilon_{Q,P_{r2}} = -0.25 < 0$ → r2 is a **complement** = **French fries**

The magnitude $|0.75| > |{-0.25}|$ indicates substitution with r1 is stronger than complementarity with r2.

**(ii) Is Whopper a luxury, necessity, or inferior?**

Income elasticity $\eta = 0.8$. $0 < 0.8 < 1$ → **necessity** (normal good, income-inelastic).

**(iii) If advertising increases 50%, by what % does demand change?**

Advertising elasticity $\varepsilon_{Q,A} = 0.05$. $\% \Delta Q = 0.05 \times 50\% = 2.5\%$ increase.

**(iv) If BK lowers French fry price 50%, by what % does Whopper quantity change?**

$\varepsilon_{Q,P_{r2}} = -0.25$. $\% \Delta Q = -0.25 \times (-50\%) = +12.5\%$.

Whopper quantity **increases by 12.5%**.

**(v) If MC = $1.00, what is profit-maximizing price?**

Own-price elasticity $\varepsilon = -1.5$.

$$P\left(1 + \frac{1}{-1.5}\right) = 1 \;\Rightarrow\; P\left(1 - \frac{2}{3}\right) = 1 \;\Rightarrow\; P\left(\frac{1}{3}\right) = 1 \;\Rightarrow\; P = 3$$

**Profit-maximizing price = $3.00.** Markup = $(3-1)/3 = 2/3$ (or $-1/\varepsilon = 2/3$).

**(vi) McDonald's lowers Big Mac price 10%. By what % must BK lower price to avoid losing customers?**

Big Mac is r1 (substitute). $\varepsilon_{Q,P_{r1}} = 0.75$.

If Big Mac price ↓ 10% → Whopper $Q$ falls $0.75 \times 10\% = 7.5\%$.

To neutralize: BK must lower $P_B$ to raise $Q$ by 7.5%. Own-price elasticity $\varepsilon_{Q,P_B} = -1.5$.

$$\% \Delta P_B = \frac{\% \Delta Q}{-1.5} = \frac{7.5\%}{-1.5} = -5\%$$

**BK must lower its price by 5%.**

> **Verification:** Substitution effect: $-7.5\%$. Own-price offset: $+7.5\%$. Net: $0\%$ ✓

**Worked elasticity sensitivity:**

| $\varepsilon$ (own-price) | $P^*$ | Markup |
|:---:|:---:|:---:|
| $-1.5$ | \$3.00 | 67% |
| $-2.5$ | \$1.67 | 40% |
| $-4.0$ | \$1.33 | 25% |
| $\to -\infty$ | \$1.00 (MC) | 0% (perfect competition) |

</details>

---

<details>
<summary><strong>Q2.4 — Walker's Shortbread Cookies (Tutorial 2)</strong></summary>

**Problem (Set A):** Walker's uses 3 lb flour, 2.5 lb sugar, 2 lb butter per batch. Input prices $P_f, P_s, P_b$.

**(i) Production function (Leontief/fixed proportions):**

$$Q = \min\left\{\frac{F}{3}, \frac{S}{2.5}, \frac{B}{2}\right\}$$

**(ii) Cost function:**

At the cost-minimizing optimum, $F^* = 3Q$, $S^* = 2.5Q$, $B^* = 2Q$.

$$c(Q) = P_f \cdot 3Q + P_s \cdot 2.5Q + P_b \cdot 2Q = Q(3P_f + 2.5P_s + 2P_b)$$

Marginal cost: $MC = 3P_f + 2.5P_s + 2P_b$ (constant — CRS).

**(iii) Given $P_b = 3$, $P_s = 2$, $P_f = 1.50$: optimal price?**

$$MC = 3(1.50) + 2.5(2) + 2(3) = 4.50 + 5 + 6 = 15.50$$

Demand: $Q = 20P^{-3} P_0^{2.2} I^{1.8}$. Own-price elasticity $\varepsilon = -3$.

Using IEPR: $P^* = \frac{MC}{1 + 1/\varepsilon} = \frac{15.50}{1 + 1/(-3)} = \frac{15.50}{1 - 1/3} = \frac{15.50}{2/3} = 23.25$

**Optimal price = $23.25 per batch.**

</details>

---

### 2.3 Demand Theory — Quick Reference Table

| Concept | Formula | Classification |
|---------|---------|---------------|
| Own-price elasticity | $\varepsilon = \frac{\partial Q}{\partial P} \cdot \frac{P}{Q}$ | $\|\varepsilon\| > 1$ elastic; $< 1$ inelastic |
| Cross-price elasticity | $\varepsilon_{ij} = \frac{\partial Q_i}{\partial P_j} \cdot \frac{P_j}{Q_i}$ | $> 0$ substitute; $< 0$ complement |
| Income elasticity | $\varepsilon_I = \frac{\partial Q}{\partial I} \cdot \frac{I}{Q}$ | $> 1$ luxury; $0$–$1$ necessity; $< 0$ inferior |
| Advertising elasticity | $\varepsilon_A = \frac{\partial Q}{\partial A} \cdot \frac{A}{Q}$ | Magnitude = responsiveness to ads |
| Log-linear form | $Q = \alpha \prod P_j^{\beta_j} I^\eta$ | Exponents ARE elasticities |
| MR formula | $MR = P(1 + 1/\varepsilon)$ | Derived from $d(PQ)/dQ$ |
| Lerner Index | $(P-MC)/P = -1/\varepsilon$ | $0$ (perfect comp.) to $1$ (monopoly) |

---

## <a id="topic-3"></a>Topic 3: Production & Supply

> **Exam weight:** 28–35 marks (2 questions). Production function analysis, cost minimization, profit maximization, and competitive equilibrium are staple topics.
> **Key sources:** Koutsoyiannis Ch.3–4, Munoz-Garcia Ch.4, §7.2

---

### 3.1 Production Sets & Functions

#### 3.1.1 Core Definitions

| Term | Definition |
|------|-----------|
| **Production function** | $q = f(z_1, \dots, z_n)$ — maximum output from given inputs, given technology |
| **Production set** | $Y = \{ y \in \mathbb{R}^L : F(y) \leq 0 \}$ — all technologically feasible plans (positive = outputs, negative = inputs) |
| **Transformation function** | $F(y)$ — implicit function where $F(y) \leq 0$ iff $y$ is feasible |
| **Transformation frontier** | $\{ y \in \mathbb{R}^L : F(y) = 0 \}$ — technically efficient boundary |
| **MRPT** | $MRPT_{k,l} = \frac{\partial F/\partial y_k}{\partial F/\partial y_l} = -\frac{dy_l}{dy_k}$ along $F(y)=0$ |
| **Duality** | $MRPT_{k,l} = MC_k/MC_l$ (from profit maximization FOCs) |

#### 3.1.2 Properties of the Production Set (11 Axioms)

| # | Property | Meaning |
|---|----------|---------|
| 1 | **Non-empty** | $Y \neq \varnothing$ — at least one feasible plan exists |
| 2 | **Closed** | $Y$ includes its boundary points |
| 3 | **No free lunch** | $y \in Y$ with $y \geq 0 \Rightarrow y = 0$ (no output without input) |
| 4 | **Possibility of inaction** | $0 \in Y$ — firm can shut down (fails with sunk costs) |
| 5 | **Free disposal** | $y \in Y, y' \leq y \Rightarrow y' \in Y$ |
| 6 | **Irreversibility** | $y \in Y, y \neq 0 \Rightarrow -y \notin Y$ |
| 7 | **Non-increasing RTS** | $y \in Y \Rightarrow \alpha y \in Y$ for $\alpha \in [0,1]$ |
| 8 | **Non-decreasing RTS** | $y \in Y \Rightarrow \alpha y \in Y$ for $\alpha \geq 1$ |
| 9 | **CRS** | $y \in Y \Rightarrow \alpha y \in Y$ for $\alpha \geq 0$ |
| 10 | **Additivity / Free entry** | $y, y' \in Y \Rightarrow y + y' \in Y$ |
| 11 | **Convexity** | $y, y' \in Y, \alpha \in [0,1] \Rightarrow \alpha y + (1-\alpha)y' \in Y$ |

> **Fixed costs violate convexity:** With fixed costs, the production set has a "hole" near the origin. For example, a \$100 license: $(0,0)$ is feasible and $(-100,0)$ is feasible (pay license, produce nothing), but $(-50,0)$ is **not** feasible — you cannot "half-pay" the license.

#### 3.1.3 Returns to Scale

$$f(tK, tL) = t^k f(K, L)$$

| $k$ | Returns to Scale | Implication |
|:---:|---|---|
| $k > 1$ | **Increasing (IRS)** | AC declining; natural monopoly possible |
| $k = 1$ | **Constant (CRS)** | AC constant; horizontal LR supply |
| $k < 1$ | **Decreasing (DRS)** | AC rising; upward-sloping LR supply |

**Method:** Multiply all inputs by $t > 0$, factor out $t$, read exponent.

#### 3.1.4 Elasticity of Substitution (EoS)

$$\sigma = \frac{\% \Delta (K/L)}{\% \Delta MRTS} = \frac{d\ln(K/L)}{d\ln(MRTS)}$$

| Production Function | $\sigma$ | Pattern |
|:---|---:|:---|
| Linear (perfect substitutes): $q = aK + bL$ | $\infty$ | $MRTS$ constant |
| Cobb-Douglas: $q = AK^\alpha L^\beta$ | $1$ | Unitary (all CD, any $\alpha,\beta$) |
| CES: $q = [\alpha K^\rho + (1-\alpha)L^\rho]^{\gamma/\rho}$ | $1/(1-\rho)$ | Nests all three polar cases |
| Leontief (fixed proportions): $q = \min\{aK, bL\}$ | $0$ | $K/L$ fixed |

**CES derivation:**

$$MRTS_{L,K} = \frac{MP_L}{MP_K} = \left(\frac{K}{L}\right)^{1-\rho}$$
$$\ln(MRTS) = (1-\rho)\ln\left(\frac{K}{L}\right) \;\Rightarrow\; \ln\left(\frac{K}{L}\right) = \frac{1}{1-\rho}\ln(MRTS)$$
$$\sigma = \frac{\partial \ln(K/L)}{\partial \ln(MRTS)} = \frac{1}{1-\rho}$$

**Polar cases of CES:**

| $\rho$ | $\sigma = 1/(1-\rho)$ | Limit |
|:---:|:---:|---|
| $\rho = 1$ | $\infty$ | Linear (perfect substitutes) |
| $\rho \to 0$ | $1$ | Cobb-Douglas |
| $\rho \to -\infty$ | $0$ | Leontief |

---

### 3.2 Cost Functions & Cost Minimization

#### 3.2.1 The Cost Minimization Problem (CMP)

$$\min_{z \geq 0} \; w \cdot z \quad \text{subject to} \quad f(z) \geq q$$

**Lagrangian:** $\mathcal{L}(z; \lambda) = w \cdot z + \lambda[q - f(z)]$

**FOCs:** $w_k = \lambda \cdot MP_k(z^*) \;\Rightarrow\; \frac{w_k}{w_l} = \frac{MP_k}{MP_l} = MRTS_{k,l}(z^*)$

**Tangency condition:** The isocost line slope $(-w_k/w_l)$ equals the isoquant slope $(-MRTS_{k,l})$ at the optimum.

**Lagrange multiplier:** $\lambda = \frac{w_k}{MP_k} = \frac{\partial c(w,q)}{\partial q} = MC(q)$

#### 3.2.2 Properties of the Cost Function

| Property | Formal Statement | Intuition |
|----------|-----------------|-----------|
| 1. **HD(1) in $w$** | $c(\lambda w, q) = \lambda c(w, q)$ | Doubling all input prices doubles costs |
| 2. **Non-decreasing in $q$** | $q_1 > q_0 \Rightarrow c(w, q_1) \geq c(w, q_0)$ | More output cannot cost less |
| 3. **Concave in $w$** | $c(\alpha w + (1-\alpha)w', q) \geq \alpha c(w,q) + (1-\alpha)c(w',q)$ | Substitution mitigates cost increases |
| 4. **Shephard's Lemma** | $\partial c(w,q)/\partial w_k = z_k(w,q)$ | Derivative = conditional factor demand |

**Matrix properties of conditional factor demands:**

From $D_w z(w,q) = D_w^2 c(w,q)$ (since Hessian of a concave function is NSD):

1. **Symmetric:** $\partial z_k/\partial w_l = \partial z_l/\partial w_k$
2. **NSD:** $\partial z_k/\partial w_k \leq 0$ (own-price effects non-positive)
3. **HD(0):** $D_w z(w,q) \cdot w = 0$

> **Exam Tip:** Concavity in $w$ implies $\partial^2 c / \partial w_k^2 \leq 0$ → conditional factor demand slopes downward. This is the production analogue of the Slutsky matrix in consumer theory.

#### 3.2.3 Shephard's Lemma — Proof

If $c(w,q) = w \cdot z(w,q)$ is differentiable in $w$, then by the envelope theorem:

$$\frac{\partial c(w,q)}{\partial w_k} = z_k(w,q) + \sum_j w_j \frac{\partial z_j}{\partial w_k} = z_k(w,q)$$

The summation term vanishes at the optimum by the FOCs (first-order effect of price change on input choice is zero).

#### 3.2.4 Short-Run vs Long-Run Cost

| Aspect | Short Run | Long Run |
|--------|----------|----------|
| Fixed factors | At least one input fixed ($K = \bar K$) | All inputs variable |
| Cost function | $SRTC(Q) = wL(Q) + r\bar K$ | $LRTC(Q) = wL^*(Q) + rK^*(Q)$ |
| Fixed cost | $r\bar K$ (sunk in SR) | Zero (all costs variable) |
| Shutdown condition | $P < \min AVC$ | $P < \min AC$ |
| Supply slope | Upward (if DRS); can be flat/backward | Upward (DRS) or flat (CRS) |

---

### 3.3 Profit Maximization

#### 3.3.1 Profit Function

$$\pi(p) = \max_{y \in Y} p \cdot y$$

**Properties** (given $Y$ closed and satisfying free disposal):

| Property | Meaning |
|----------|---------|
| 1. **HD(1) in $p$** | $\pi(\lambda p) = \lambda \pi(p)$ |
| 2. **Convex in $p$** | $\pi(\alpha p + (1-\alpha)p') \leq \alpha \pi(p) + (1-\alpha)\pi(p')$ |
| 3. **Hotelling's Lemma** | $\partial \pi(p)/\partial p_k = y_k(p)$ |
| 4. **Law of Supply** | $\partial y_k(p)/\partial p_k \geq 0$ |

**Proof of convexity:** For any $p, p'$ and $\alpha \in [0,1]$, let $\bar p = \alpha p + (1-\alpha)p'$:

$$\pi(\bar p) = \bar p \cdot y(\bar p) = \alpha[p \cdot y(\bar p)] + (1-\alpha)[p' \cdot y(\bar p)] \leq \alpha \pi(p) + (1-\alpha)\pi(p')$$

since $p \cdot y(\bar p) \leq \pi(p)$ by definition of $\pi(p)$ as maximum.

> **Exam Tip:** Profit function is **convex** (not concave!) in prices. Cost function is **concave** in input prices. Don't confuse them.

#### 3.3.2 Hotelling's Lemma — Envelope Theorem Proof

$$\pi(p) = p \cdot y(p)$$

Apply the envelope theorem:

$$\frac{\partial \pi(p)}{\partial p_k} = \left. \frac{\partial}{\partial p_k} (p \cdot y) \right|_{y = y(p)} = y_k(p)$$

**Economic intuition:** A \$1 increase in output price $k$ raises profit by exactly the amount of output $k$ produced, because the firm is already optimizing — any adjustment would only have a second-order effect.

#### 3.3.3 MRPT = MC Ratio (Duality Result)

**Theorem:** $MRPT_{x,y} = MC_x / MC_y$

**Proof:** Total differentiate $F(q_x, q_y, z) = 0$ along frontier:

$$\frac{\partial F}{\partial q_x} dq_x + \frac{\partial F}{\partial q_y} dq_y = 0 \;\Rightarrow\; MRPT_{x,y} = -\frac{dq_y}{dq_x} = \frac{\partial F/\partial q_x}{\partial F/\partial q_y}$$

Profit function: $\pi = p_x q_x + p_y q_y - c(q_x, q_y)$. FOCs: $p_x = MC_x$, $p_y = MC_y$.

Tangency condition of PMP: $MRPT_{x,y} = p_x/p_y$. Substituting:

$$MRPT_{x,y} = \frac{p_x}{p_y} = \frac{MC_x}{MC_y}$$

**GE connection:** In competitive equilibrium, $MRPT = MC_x/MC_y = p_x/p_y = MRS$ — this chain of equalities is the **product-mix efficiency** condition for Pareto optimality.

---

### 3.4 Solved Problems — Production Theory

---

<details>
<summary><strong>Q3.1 — Production Set Definitions</strong></summary>

**Define production function, production set, transformation function, transformation frontier, and MRPT.**

See §3.1.1 for all definitions. Key formula:

$$MRPT_{k,l}(y) = \frac{\partial F(y)/\partial y_k}{\partial F(y)/\partial y_l} = -\frac{dy_l}{dy_k} = \frac{MC_k}{MC_l}$$

**Derivation of MRPT = MC ratio:** Along $F(y)=0$, total differentiate: $dF = (\partial F/\partial y_k)dy_k + (\partial F/\partial y_l)dy_l = 0$.

$$\frac{dy_l}{dy_k} = -\frac{\partial F/\partial y_k}{\partial F/\partial y_l} \equiv -MRPT_{k,l}$$

Profit FOCs: $p_k = MC_k$, $p_l = MC_l$. Tangency: $MRPT = p_k/p_l \Rightarrow MRPT = MC_k/MC_l$.

</details>

---

<details>
<summary><strong>Q3.2 — Properties of Production Sets (11 Properties)</strong></summary>

See §3.1.2 table above. Key exam nuances:

- **Possibility of inaction fails** with sunk costs (e.g., signed non-cancellable lease)
- **Convexity fails** with fixed/setup costs (the "hole" near origin)
- **Free disposal + convexity** ⇒ conditional factor demands are well-behaved (downward-sloping)

> **Professor's Corner:** A top answer groups the 11 properties: (i) basic feasibility (1–4), (ii) physical constraints (3, 6), (iii) disposal (5), (iv) scalability (7–9), (v) aggregation (10), (vi) curvature (11).

</details>

---

<details>
<summary><strong>Q3.3 — Elasticity of Substitution for Key Production Functions</strong></summary>

**(i) Linear $q = aK + bL$:** $MRTS = b/a$ (constant) ⇒ $\sigma = \infty$.

**(ii) Leontief $q = \min\{aK, bL\}$:** $K/L$ fixed at $b/a$ ⇒ $\sigma = 0$.

**(iii) Cobb-Douglas $Q = AK^\alpha L^\beta$:** 

$$MRTS = \frac{MP_L}{MP_K} = \frac{\beta}{\alpha} \cdot \frac{K}{L}$$

Taking logs: $\ln(MRTS) = \ln(\beta/\alpha) + \ln(K/L)$ ⇒ $\ln(K/L) = \ln(MRTS) - \ln(\beta/\alpha)$

$$\sigma = \frac{\partial \ln(K/L)}{\partial \ln(MRTS)} = 1$$

All Cobb-Douglas functions have $\sigma = 1$ regardless of $\alpha, \beta$.

**(iv) CES: $q = [\alpha K^\rho + (1-\alpha)L^\rho]^{\gamma/\rho}$:**

$$\sigma = \frac{1}{1-\rho}$$

</details>

---

<details>
<summary><strong>Q3.4 — HW3: Returns to Scale for 5 Production Functions</strong></summary>

Let $f(K,L)$ be the production function. Multiply all inputs by $t > 0$:

| Function | $f(tK, tL)$ | RTS |
|:---------|:-----------:|:---:|
| (a) $q = K^{1/2}L^{1/2}$ | $t^{1/2+1/2}K^{1/2}L^{1/2} = t^1 Q$ | **CRS** ($k=1$) |
| (b) $q = 2K + L$ | $t(2K+L) = t^1 Q$ | **CRS** ($k=1$) |
| (c) $q = \frac{4KL}{K+L}$ | $\frac{4(tK)(tL)}{tK+tL} = t\frac{4KL}{K+L} = t^1 Q$ | **CRS** ($k=1$) |
| (d) $q = KL$ | $(tK)(tL) = t^2 KL = t^2 Q$ | **IRS** ($k=2$) |
| (e) $q = \min(K, \frac12 L)$ | $\min(tK, \frac12 tL) = t \min(K, \frac12 L) = t^1 Q$ | **CRS** ($k=1$) |

**Method:** Compute $f(tK, tL) = t^k f(K,L)$. If $k > 1$: IRS; $k = 1$: CRS; $k < 1$: DRS.

</details>

---

<details>
<summary><strong>Q3.5 — HW3: Elasticity of Substitution for 5 Functions</strong></summary>

| Function | MRTS | $\sigma$ | Derivation |
|:---------|:----:|:--------:|-----------|
| (a) $q = K^{1/2}L^{1/2}$ (CD) | $\frac{K}{L}$ | $1$ | $\ln(K/L) = \ln(MRTS)$ ⇒ $\sigma = 1$ |
| (b) $q = 2K + L$ (linear) | $\frac{1}{2}$ (constant) | $\infty$ | $\%\Delta MRTS = 0$ |
| (c) $q = \frac{4KL}{K+L}$ | $(K/L)^2$ | $1/2$ | $MRTS = (K/L)^2$ ⇒ $\ln(K/L) = \frac12\ln(MRTS)$ ⇒ $\sigma = 1/2$ |
| (d) $q = KL$ | $\frac{K}{L}$ | $1$ | Cobb-Douglas with exponents 1,1 ⇒ $\sigma = 1$ |
| (e) $q = \min(K, \frac12 L)$ | jumps $0\to\infty$ at kink | $0$ | $K/L$ fixed at $\frac12$ |

**EoS for function (c) — detailed derivation:**

$$q = \frac{4KL}{K+L}$$

$$MP_L = \frac{\partial q}{\partial L} = \frac{4K(K+L) - 4KL}{(K+L)^2} = \frac{4K^2}{(K+L)^2}$$

$$MP_K = \frac{\partial q}{\partial K} = \frac{4L(K+L) - 4KL}{(K+L)^2} = \frac{4L^2}{(K+L)^2}$$

$$MRTS = \frac{MP_L}{MP_K} = \frac{K^2}{L^2} = \left(\frac{K}{L}\right)^2$$

$$\ln(MRTS) = 2\ln\left(\frac{K}{L}\right) \;\Rightarrow\; \ln\left(\frac{K}{L}\right) = \frac12 \ln(MRTS)$$

$$\sigma = \frac{\partial \ln(K/L)}{\partial \ln(MRTS)} = \frac12$$

**Correction:** $\sigma = 1/2$ for $q = 4KL/(K+L)$, not $2$ (the MRTS = $(K/L)^2$, so $\ln(K/L) = \frac12 \ln(MRTS)$).

</details>

---

<details>
<summary><strong>Q3.6 — HW3: Short-Run Production & Cost Functions (K=64)</strong></summary>

**(a) $q = K^{1/2}L^{1/2}$:** $q = 8L^{1/2}$, $L = q^2/64$, $SRTC = wq^2/64 + 64r$

**(b) $q = 2K + L$:** $q = 128 + L$, $L = q - 128$, $SRTC = w(q-128) + 64r$ (for $q \geq 128$)

**(c) $q = \frac{4KL}{K+L} = \frac{256L}{64+L}$:**

$$q(64+L) = 256L \;\Rightarrow\; 64q + qL = 256L \;\Rightarrow\; 64q = (256 - q)L$$

$$L = \frac{64q}{256 - q}, \quad SRTC = w\frac{64q}{256 - q} + 64r$$

**(d) $q = KL = 64L$:** $L = q/64$, $SRTC = wq/64 + 64r$

**(e) $q = \min(K, \frac12 L)$:** With $K=64$, two cases:

- If $64 < \frac12 L$ ($L > 128$): $q = 64$, $L = 128$, $SRTC = 128w + 64r$
- If $64 \geq \frac12 L$ ($L \leq 128$): $q = \frac12 L$, $L = 2q$, $SRTC = 2qw + 64r$

</details>

---

<details>
<summary><strong>Q3.7 — HW3: Expansion Paths</strong></summary>

The **expansion path** traces cost-minimizing input combinations as output varies, holding input prices constant. Condition: $MRTS_{L,K} = w/r$.

**(a) $q = K^{1/2}L^{1/2}$:** $MRTS = K/L$. Tangency: $K/L = w/r \Rightarrow K = (w/r)L$.

**(b) $q = 2K + L$:** $MRTS = 1/2$ (constant). If $w/r < 1/2$ ⇒ use only $K$; if $w/r > 1/2$ ⇒ use only $L$; if $w/r = 1/2$ ⇒ any mix on isoquant.

**(c) $q = 4KL/(K+L)$:** $MRTS = (K/L)^2$. Tangency: $(K/L)^2 = w/r \Rightarrow K = \sqrt{w/r} \cdot L$.

**(d) $q = KL$:** $MRTS = K/L$. Tangency: $K/L = w/r \Rightarrow K = (w/r)L$.

**(e) $q = \min(K, \frac12 L)$:** Expansion path is the ray $K = \frac12 L$ (fixed proportions).

</details>

---

<details>
<summary><strong>Q3.8 — HW3: Cost-Minimizing Input Mix (w=2, v=8, q=100)</strong></summary>

**(a) $q = K^{1/2}L^{1/2}$:** Tangency: $K/L = 2/8 = 1/4 \Rightarrow L = 4K$. Substitute: $100 = (K \cdot 4K)^{1/2} = 2K \Rightarrow K^* = 50$, $L^* = 200$.

**(b) $q = 2K + L$:** $w/r = 2/8 = 1/4 > 1/2$ (no, $w/r = 0.25 < 0.5$ MRTS). $MRTS = 1/2 > w/r = 1/4$ ⇒ firm uses only $L$ (cheaper per unit of MP). $100 = 2(0) + L \Rightarrow L^* = 100$, $K^* = 0$.

**(c) $q = 4KL/(K+L)$:** Tangency: $K/L = \sqrt{w/r} = \sqrt{2/8} = \sqrt{1/4} = 1/2 \Rightarrow L = 2K$.

Substitute: $100 = \frac{4K(2K)}{K+2K} = \frac{8K^2}{3K} = \frac{8}{3}K \Rightarrow K^* = 37.5$, $L^* = 75$.

**(d) $q = KL$:** Tangency: $K/L = w/r = 2/8 = 1/4 \Rightarrow L = 4K$. Substitute: $100 = K(4K) = 4K^2 \Rightarrow K^* = 5$, $L^* = 20$.

**(e) $q = \min(K, \frac12 L)$:** $K = \frac12 L = 100 \Rightarrow L^* = 200$, $K^* = 100$.

</details>

---

<details>
<summary><strong>Q3.9 — HW3: Long-Run Cost Functions</strong></summary>

**(a) $q = K^{1/2}L^{1/2}$:** From tangency $K/L = w/r \Rightarrow K = (w/r)L$. Substitute:

$$q = ((w/r)L \cdot L)^{1/2} = (w/r)^{1/2} L \;\Rightarrow\; L^* = (r/w)^{1/2} q, \quad K^* = (w/r)^{1/2} q$$

$$LRTC = wL + rK = w(r/w)^{1/2} q + r(w/r)^{1/2} q = 2\sqrt{wr} \cdot q$$

**(b) $q = 2K + L$:** If $w/r < 1/2$: use only $K$ ⇒ $K^* = q/2$, $L^* = 0$, $LRTC = rq/2$.
If $w/r > 1/2$: use only $L$ ⇒ $K^* = 0$, $L^* = q$, $LRTC = wq$.
If $w/r = 1/2$: any mix works.

**(c) $q = 4KL/(K+L)$:** From tangency $K/L = \sqrt{w/r}$:

$$L^* = \frac{q}{4}\left(1 + \sqrt{\frac{r}{w}}\right)^2, \quad K^* = \frac{q}{4}\left(1 + \sqrt{\frac{w}{r}}\right)^2$$

$$LRTC = wL^* + rK^* = \frac{q}{4}\left[w\left(1+\sqrt{\frac{r}{w}}\right)^2 + r\left(1+\sqrt{\frac{w}{r}}\right)^2\right]$$

**(d) $q = KL$:** From $K/L = w/r \Rightarrow L = (r/w)K$:

$$q = K \cdot (r/w)K = (r/w)K^2 \;\Rightarrow\; K^* = \sqrt{\frac{w}{r} q}, \quad L^* = \sqrt{\frac{r}{w} q}$$

$$LRTC = w\sqrt{\frac{r}{w} q} + r\sqrt{\frac{w}{r} q} = 2\sqrt{wr q}$$

**(e) $q = \min(K, \frac12 L)$:** $K^* = q$, $L^* = 2q$, $LRTC = w \cdot 2q + r \cdot q = q(2w + r)$.

</details>

---

<details>
<summary><strong>Q3.10 — Sausage Maker (Leontief Production) — Exam: Batch 48 Q4</strong></summary>

**Problem:** 3 oz pork + 2 oz veal → 5 oz sausage. $p_P = 30$¢, $p_V = 80$¢.

**(i) Production function:**

$$Q = \min\left\{\frac{P}{3}, \frac{V}{2}\right\}$$

**(ii) Conditional factor demand for pork:**

At optimum: $P/3 = V/2 = Q \Rightarrow P^* = 3Q$, $V^* = 2Q$.

**(iii) Cost function:**

$$c(Q) = p_P \cdot 3Q + p_V \cdot 2Q = 0.30(3Q) + 0.80(2Q) = 0.90Q + 1.60Q = 2.50Q$$

$MC = 2.50$ (constant — CRS technology).

**(iv) If $Q = 200P^{-6}$, find profit-maximizing price:**

Method 1 — Direct $\pi(P)$ maximization:

$$\pi(P) = P \cdot 200P^{-6} - 2.50(200P^{-6}) = 200P^{-5} - 500P^{-6}$$

$$\frac{d\pi}{dP} = -1000P^{-6} + 3000P^{-7} = 0 \;\Rightarrow\; 3000 = 1000P \;\Rightarrow\; P = 3$$

Method 2 — MR = MC: $Q = 200P^{-6} \Rightarrow P = (Q/200)^{-1/6}$.

$TR = P \cdot Q = Q^{5/6} \cdot 200^{1/6}$, $MR = \frac{5}{6} Q^{-1/6} \cdot 200^{1/6}$.

Set $MR = MC = 2.50 \Rightarrow Q^* = 200(3)^{-6} = 200/729 \approx 0.274$, $P^* = 3$.

**Profit-maximizing price = $3.00 per sausage.**

</details>

---

<details>
<summary><strong>Q3.11 — Comprehensive Cobb-Douglas Production: $Q = (KL)^{1/3}$ (Exam: Batch 48 Q5)</strong></summary>

$Q = (KL)^{1/3}$, SR: $K = 64$.

**(i) SR production function:** $Q = 4L^{1/3}$

**(ii) SR conditional factor demand for L:** $L = (Q/4)^3 = Q^3/64$

**(iii) SR cost function (w=1, r=1):** $SRTC = w Q^3/64 + 64r = Q^3/64 + 64$

**(iv) Shutdown price:**

$AVC = \frac{wL}{Q} = \frac{w Q^3/64}{Q} = \frac{w Q^2}{64}$. min $AVC = 0$ at $Q = 0$.

Firm shuts down if $P \leq 0$. For any $P > 0$, firm produces in SR (fixed cost sunk).

**(v) SR supply:** $P = MC = 3w Q^2/64 \Rightarrow Q^S(P) = \sqrt{64P/(3w)}$ for $P > 0$.

**(vi) RTS:** $Q(tK, tL) = t^{2/3}Q(K,L) \Rightarrow$ **DRS** (sum of exponents $= 2/3 < 1$).

**(vii) EoS:** Cobb-Douglas ⇒ $\sigma = 1$.

**(viii) LR conditional factor demands:**

Tangency: $w/r = K/L \Rightarrow K = (w/r)L$.

Substitute: $Q = ((w/r)L \cdot L)^{1/3} = (w/r)^{1/3} L^{2/3}$

$$L(w,r,Q) = (r/w)^{1/2} Q^{3/2}, \quad K(w,r,Q) = (w/r)^{1/2} Q^{3/2}$$

**(ix) LR cost function:**

$$LRTC = wL + rK = 2\sqrt{wr} \cdot Q^{3/2}$$

**Verify Shephard's Lemma:**

$$\frac{\partial LRTC}{\partial w} = \sqrt{r/w} \cdot Q^{3/2} = L(w,r,Q) \quad \checkmark$$

**(x) LR supply:** $P = MC = 3\sqrt{wr} \cdot Q^{1/2} \Rightarrow Q^S(P) = P^2/(9wr)$.

Upward-sloping due to DRS. HD(0) in $(w,r)$.

</details>

---

<details>
<summary><strong>Q3.12 — Starbucks Jumbo vs Trenta (Economies of Scale) — Exam: Batch 48 Q5</strong></summary>

**Will a 62 oz Jumbo cost twice as much as a 31 oz Trenta?**

**Answer: Less than twice as much.**

**Reasoning:** Food/beverage production exhibits economies of scale in packaging, serving, and overhead. Fixed costs (labor, rent, equipment) are spread over more output.

**Formal AC-MC relationship:** When $AC$ is declining, $MC < AC$:

$$MC = AC + Q \cdot dAC/dQ$$

When $dAC/dQ < 0$ (economies of scale), $MC < AC$.

**Numerical example:** $F = 100$, $VC = 1.50Q$:

| Output | TC | AC | MC |
|:-----:|:--:|:--:|:--:|
| 31 oz (Trenta) | \$146.50 | \$4.73/oz | \$1.50 |
| 62 oz (Jumbo) | \$193.00 | **\$3.11/oz** | \$1.50 |

Total cost rises 32% for a 100% increase in output — **less than twice**.

</details>

---

<details>
<summary><strong>Q3.13 — Profit Function Properties & Hotelling's Lemma</strong></summary>

**Profit function:** $\pi(p) = \max_{y \in Y} p \cdot y$

**Properties:** HD(1), convex in $p$, non-decreasing in output prices, Hotelling's Lemma.

**Hotelling's Lemma proof (envelope theorem):**

$$\pi(p) = p \cdot y(p) \;\Rightarrow\; \frac{\partial \pi(p)}{\partial p_k} = y_k(p) + \sum_j p_j \frac{\partial y_j}{\partial p_k} = y_k(p)$$

The summation term vanishes by the envelope condition (first-order optimality of $y(p)$).

**Convexity proof:** See §3.3.1. Economic intuition: the firm benefits more from extreme price vectors than balanced ones because it can reallocate production toward relatively more expensive outputs.

**Law of Supply:** $\partial y_k(p)/\partial p_k \geq 0$ — supply curves slope upward.

</details>

---

<details>
<summary><strong>Q3.14 — MRPT = MC Ratio (Duality Proof)</strong></summary>

**Theorem:** $MRPT_{x,y} = MC_x / MC_y$.

**Proof (total differentiation + profit FOCs):**

Along $F(q_x, q_y, z) = 0$: $(\partial F/\partial q_x)dq_x + (\partial F/\partial q_y)dq_y = 0$

$$MRPT_{x,y} = -\frac{dq_y}{dq_x} = \frac{\partial F/\partial q_x}{\partial F/\partial q_y}$$

Profit max FOCs: $p_x = MC_x$, $p_y = MC_y$. Tangency: $MRPT = p_x/p_y$.

$$\therefore MRPT = \frac{p_x}{p_y} = \frac{MC_x}{MC_y}$$

**GE chain:** $MRPT = MC_x/MC_y = p_x/p_y = MRS$ (product-mix efficiency).

</details>

---

### 3.5 Competitive Equilibrium

#### 3.5.1 Firm Supply & Industry Equilibrium

**SR supply:** $P = MC$ (above shutdown price $\min AVC$). Industry supply = sum of firm supplies.

**LR equilibrium:** $P = \min AC$ with free entry/exit → zero economic profit.

#### 3.5.2 Tax Incidence & Deadweight Loss

**Incidence formula:**

$$\frac{P_b - P^*}{t} = \frac{\varepsilon_S}{\varepsilon_S - \varepsilon_D} \quad \text{(consumer share)}, \qquad
\frac{P^* - P_s}{t} = \frac{-\varepsilon_D}{\varepsilon_S - \varepsilon_D} \quad \text{(producer share)}$$

| Elasticity Condition | Who Bears More Tax? |
|---------------------|:-------------------:|
| $|\varepsilon_S| > |\varepsilon_D|$ | Consumers |
| $|\varepsilon_D| > |\varepsilon_S|$ | Producers |
| $\varepsilon_D = 0$ (perfectly inelastic demand) | Consumers bear all |
| $\varepsilon_S = 0$ (perfectly inelastic supply) | Producers bear all |

**DWL formula:**

$$DWL = \frac12 \times t \times \Delta Q = \frac12 \cdot \frac{\varepsilon_S \varepsilon_D}{\varepsilon_S - \varepsilon_D} \cdot \frac{t^2}{P^*} \cdot Q^*$$

> **Key insight:** DWL is **quadratic in $t$** — doubling the tax quadruples the DWL (Laffer curve logic).

#### 3.5.3 Walras' Law

$$p \cdot Z(p) = 0 \quad \text{for all price vectors } p$$

**Three implications:**
1. **Redundancy:** In an $L$-good system, if $L-1$ markets clear, the $L$-th clears automatically
2. **Numeraire:** Only relative prices matter; normalize $p_1 = 1$
3. **Existence foundation:** Used in Arrow-Debreu fixed-point proof

---

<details>
<summary><strong>Q3.15 — Competitive Equilibrium: 1,000 Identical Firms (Exam: Batch 48 Q6)</strong></summary>

**Given:** 1,000 identical firms, $C_{SR}(q) = 0.5q^2 + 2q + 80$. Market demand: $Q_D = 44,000 - 1000P$.

**(i) SR firm supply:** $MC = q + 2$, $AVC = 0.5q + 2$, min $AVC = 2$ at $q=0$.

$$q(P) = P - 2 \text{ for } P \geq 2$$

**(ii) Industry supply:** $Q_S(P) = 1000(P - 2)$ for $P \geq 2$.

**(iii) Equilibrium:** $1000(P-2) = 44,000 - 1000P \Rightarrow P^* = 23$, $Q^* = 21,000$. Per-firm: $q = 21$.

**(iv) Per-firm profit:** $\pi = 23(21) - [0.5(21)^2 + 2(21) + 80] = 483 - 342.5 = 140.5$.

**(v) $20/unit tax:**

Supply: $P - 20 = q + 2 \Rightarrow q = P - 22$. $Q_S = 1000(P - 22)$.

$1000(P-22) = 44,000 - 1000P \Rightarrow P_b = 33$, $P_s = 13$, $Q = 11,000$.

Tax revenue $= 20 \times 11,000 = 220,000$.

Per-firm: $q = 11$, $\pi = 13(11) - [0.5(11)^2 + 2(11) + 80] = 143 - 162.5 = -19.5$.

**(vi) DWL:** $DWL = \frac12 \times 20 \times (21,000 - 11,000) = 100,000$.

**(vii) LR equilibrium after tax:** Zero-profit condition + $P_s = MC$:

$P_s = 2 + 4\sqrt{10} \approx 14.65$, $P_b = 34.65$, $Q = 9,350$, $N \approx 739$ firms.

**Comparison table:**

| Measure | Pre-tax SR | Post-tax SR | Post-tax LR |
|:--------|:----------:|:-----------:|:-----------:|
| $P_b$ | 23 | 33 | 34.65 |
| $P_s$ | 23 | 13 | 14.65 |
| $Q$ | 21,000 | 11,000 | 9,350 |
| Per-firm $q$ | 21 | 11 | 12.65 |
| Per-firm $\pi$ | 140.5 | −19.5 | 0 |
| Number of firms | 1,000 | 1,000 | 739 |
| DWL | 0 | 100,000 | 116,500 |

</details>

---

<details>
<summary><strong>Q3.16 — Walras' Law: Three-Good Excess Demand (Exam: Batch 48 Q6)</strong></summary>

**Given:** $Z_2(p) = -3 + \frac{p_3}{p_2} + \frac{p_1}{p_2}$, $Z_3(p) = \frac{3p_1}{p_3} + \frac{4p_2}{p_3} - 7$.

**(i) Find $Z_1$ using Walras' Law: $p_1 Z_1 + p_2 Z_2 + p_3 Z_3 = 0$.**

$$Z_1 = -\frac{p_2}{p_1}Z_2 - \frac{p_3}{p_1}Z_3$$

Substituting and simplifying:

$$Z_1(p) = -4 + \frac{6p_3 - p_2}{p_1}$$

**(ii) Market-clearing price ratios:**

Set $Z_2 = 0$ and $Z_3 = 0$ (Walras' Law guarantees $Z_1 = 0$ automatically).

Let $r_2 = p_2/p_1$, $r_3 = p_3/p_1$.

$Z_2 = 0$: $\frac{r_3}{r_2} + \frac{1}{r_2} = 3 \Rightarrow r_3 + 1 = 3r_2$ ... (1)

$Z_3 = 0$: $\frac{3}{r_3} + \frac{4r_2}{r_3} = 7 \Rightarrow 3 + 4r_2 = 7r_3$ ... (2)

Substitute (1) into (2): $3 + 4r_2 = 7(3r_2 - 1) \Rightarrow 10 = 17r_2 \Rightarrow r_2 = 10/17$.

From (1): $r_3 = 3(10/17) - 1 = 13/17$.

Check $Z_1 = 0$: $-4 + (6\cdot 13/17 - 10/17)/1 = -4 + (78-10)/17 = -4 + 4 = 0$ ✓

$$\frac{p_2}{p_1} = \frac{10}{17}, \quad \frac{p_3}{p_1} = \frac{13}{17}$$

</details>

---

### 3.6 Production & Supply — Quick Reference Tables

**Returns to Scale Summary:**

| Function | $f(tK,tL)$ | RTS |
|:---------|:----------:|:---:|
| $K^{1/2}L^{1/2}$ | $tQ$ | CRS |
| $2K + L$ | $tQ$ | CRS |
| $4KL/(K+L)$ | $tQ$ | CRS |
| $KL$ | $t^2 Q$ | IRS |
| $\min(K, \frac12 L)$ | $tQ$ | CRS |
| $(KL)^{1/3}$ | $t^{2/3}Q$ | DRS |

**EoS Summary:**

| Function | $\sigma$ |
|:---------|:-------:|
| Linear $aK + bL$ | $\infty$ |
| Cobb-Douglas $AK^\alpha L^\beta$ | $1$ |
| CES $[\alpha K^\rho + (1-\alpha)L^\rho]^{\gamma/\rho}$ | $1/(1-\rho)$ |
| Leontief $\min(aK, bL)$ | $0$ |
| $4KL/(K+L)$ | $1/2$ |

**Cost Function Properties vs Profit Function Properties:**

| Cost Function $c(w,q)$ | Profit Function $\pi(p)$ |
|:-----------------------|:-------------------------|
| HD(1) in $w$ | HD(1) in $p$ |
| **Concave** in $w$ | **Convex** in $p$ |
| Shephard's: $\partial c/\partial w_k = z_k$ | Hotelling's: $\partial \pi/\partial p_k = y_k$ |
| $z_k$ slopes downward: $\partial z_k/\partial w_k \leq 0$ | $y_k$ slopes upward: $\partial y_k/\partial p_k \geq 0$ |

---

## <a id="topic-4"></a>Topic 4: Welfare Economics

### 4.1 Compensating Variation, Equivalent Variation & Consumer Surplus

#### 4.1.1 Definitions

Three measures quantify the welfare impact of a price change on a consumer.

Let $p^0$ and $p^1$ be initial and final price vectors, $w$ be income (constant), $u^0 = v(p^0, w)$ and $u^1 = v(p^1, w)$ be initial and final utility levels, and $e(p, u)$ be the expenditure function.

| Measure | Definition | Formula (price decrease) |
|---------|-----------|--------------------------|
| **CV** | Money taken/given *after* the price change to restore the *original* utility $u^0$ | $CV = w - e(p^1, u^0)$ |
| **EV** | Money given/taken *before* the price change to reach the *new* utility $u^1$ | $EV = e(p^0, u^1) - w$ |
| **CS** | Area under the Marshallian demand curve between old and new prices | $CS = \int_{p_1^0}^{p_1^1} x_1(p_1, \bar{p}_{-1}, w)\,dp_1$ |

**Key reference points:**

| Measure | Utility anchor | Price anchor | Demand curve |
|---------|---------------|-------------|--------------|
| CV | $u^0$ (original) | $p^1$ (new) | Hicksian at $u^0$ |
| EV | $u^1$ (new) | $p^0$ (old) | Hicksian at $u^1$ |
| CS | Mixed | $p^0 \to p^1$ | Marshallian |

**Relationship via expenditure functions:**

$$CV = e(p^1, u^1) - e(p^1, u^0) = w - e(p^1, u^0)$$
$$EV = e(p^0, u^1) - e(p^0, u^0) = e(p^0, u^1) - w$$

CV anchors on **original utility at new prices**; EV anchors on **new utility at old prices**. CS is empirically observable (Marshallian demand is estimable) but theoretically approximate unless income effects are zero.

---

#### 4.1.2 EV > CS > CV Ordering

For a **price decrease** ($p \downarrow$) and a **normal good**:

$$EV \;>\; CS \;>\; CV$$

For a **price increase** ($p \uparrow$) and a **normal good**:

$$CV \;>\; CS \;>\; EV$$

**Why the ordering?** For a price decrease on a normal good:
- **EV** uses Hicksian demand at $u^1$ (higher utility) — income effect shifts Hicksian demand right → largest area
- **CS** uses Marshallian demand — lies between the two Hicksian curves → intermediate area
- **CV** uses Hicksian demand at $u^0$ (original utility) — smallest area

The gap $|EV - CV|$ measures the **income effect**. When the income effect is zero (quasilinear utility), all three measures coincide: $CV = EV = CS$.

**Diagram logic (price decrease):**

At $p_1^1 < p_1^0$, for a normal good: $h(p, u^1) > x(p, w) > h(p, u^0)$. The three demand curves intersect at $p_1^0$. EV is the area left of $h(p, u^1)$ between $p^0$ and $p^1$; CS is the area left of $x(p, w)$; CV is the area left of $h(p, u^0)$.

**For inferior goods:** The ordering reverses — Hicksian demand at $u^1$ shifts left instead of right.

**Willig (1976) bounds:** For realistic income elasticities and price changes, the percentage error from using CS instead of CV or EV is typically $<5\%$:

$$\frac{|CS - CV|}{|CV|} \le \frac{\eta \cdot (\Delta p / p)}{2}, \qquad \frac{|CS - EV|}{|EV|} \le \frac{\eta \cdot (\Delta p / p)}{2}$$

where $\eta$ is the income elasticity of demand.

---

#### 4.1.3 Worked Example: Cobb-Douglas $u = x_1^{1/2} x_2^{1/2}$

**Given:** $p^0 = (4, 4),\; w = 300$; $p^1 = (2, 4),\; w = 300$.

**Walrasian demands:** $x_1 = \frac{150}{p_1},\; x_2 = \frac{150}{p_2}$.

**Indirect utilities:**
- $v^0 = v(4,4,300) = 37.5$
- $v^1 = v(2,4,300) = \sqrt{75 \times 37.5} \approx 53.03$

**Expenditure function** (for $u = x_1^{1/2} x_2^{1/2}$):
$$e(p, u) = 2u \sqrt{p_1 p_2}$$

**CV** (price decrease):
$$CV = w - e(p^1, u^0) = 300 - 2(37.5)\sqrt{2 \times 4} = 300 - 212.1 = 87.9$$

**EV:**
$$EV = e(p^0, u^1) - w = 2(53.03)\sqrt{4 \times 4} - 300 = 424.24 - 300 = 124.24$$

**CS:**
$$CS = \int_{4}^{2} \frac{150}{p_1}\,dp_1 = 150[\ln p_1]_{4}^{2} = 150\ln(0.5) \approx 103.98$$

**Summary:** $EV = 124.24 > CS = 103.98 > CV = 87.9$ — confirms both goods are **normal goods**. The gap $EV - CV = 36.34 > 0$ indicates a substantial income effect, consistent with Cobb-Douglas (unit income elasticity).

---

#### 4.1.4 CS Approximation: When CS Overstates CV and Understates EV

For a price decrease with a normal good:
- **CS > CV:** Marshallian demand includes both substitution and income effects → flatter than Hicksian at $u^0$ → larger area
- **EV > CS:** Hicksian demand at $u^1$ shifts right (income effect) → larger area than Marshallian

**Special cases:**
| Condition | Relationship |
|-----------|-------------|
| Zero income effect (quasilinear) | $CS = CV = EV$ (exact) |
| Small price change | $CS \approx CV \approx EV$ (Willig bounds) |
| Normal good, large price change | $EV > CS > CV$ (decrease); $CV > CS > EV$ (increase) |
| Inferior good | Reversed ordering |

---

### 4.2 Pareto Optimality

#### 4.2.1 Definition and Concept

An allocation $\mathbf{x}$ is **Pareto-optimal** (Pareto-efficient) if no feasible reallocation can make at least one individual better off without making any other individual worse off:

$$\text{Allocation } \mathbf{x} \text{ is PO } \iff \nexists \ \mathbf{x}' \text{ s.t. } U_i(\mathbf{x}') \ge U_i(\mathbf{x}) \ \forall i \text{ and } U_j(\mathbf{x}') > U_j(\mathbf{x}) \text{ for some } j$$

A **Pareto improvement** is a reallocation making at least one person better off without harming anyone else.

---

#### 4.2.2 Three Pareto Conditions in the $2 \times 2 \times 2$ Model

The $2\times2\times2$ model has two factors ($L$, $K$), two goods ($X$, $Y$), and two consumers ($A$, $B$). For Pareto optimality, three marginal conditions must hold simultaneously:

**1. Consumption efficiency (efficiency in exchange):**

$$MRS_{XY}^A = MRS_{XY}^B$$

The marginal rate of substitution between goods must be equal across all consumers. This ensures no mutually beneficial trade remains.

*Lagrangian derivation (fixed supply $\bar{X}$, $\bar{Y}$):*

$$\mathcal{L} = U_A(X_A, Y_A) + \lambda[U_B(\bar{X} - X_A, \bar{Y} - Y_A) - \bar{U}_B]$$

FOCs:
$$\frac{\partial U_A/\partial X_A}{\partial U_A/\partial Y_A} = \frac{\partial U_B/\partial X_B}{\partial U_B/\partial Y_B} \quad\Rightarrow\quad MRS_{XY}^A = MRS_{XY}^B$$

The locus of such points in the Edgeworth exchange box is the **contract curve**.

**2. Production efficiency (efficiency in factor allocation):**

$$MRTS_{LK}^X = MRTS_{LK}^Y$$

The marginal rate of technical substitution between factors must be equal across all firms. This ensures no reallocation of $L$ and $K$ can increase output of one good without reducing the other.

**3. Product-mix efficiency (efficiency in output composition):**

$$MRPT_{XY} = MRS_{XY}$$

The marginal rate of product transformation (slope of the PPC) must equal the consumers' common marginal rate of substitution. With $MRPT_{XY} = MC_X/MC_Y$ and $P = MC$ under competition, this becomes $P_X/P_Y = MRS$.

---

#### 4.2.3 Pareto Optimality: Necessary but Not Sufficient

**Statement:** A situation can be Pareto-optimal without maximizing social welfare. All SW maxima must be Pareto-optimal, but not all Pareto-optimal points are SW maxima.

**Proof via $2\times2\times2$ model:**

1. All points on the PPC satisfy all three Pareto conditions → all are Pareto-optimal
2. The GUPF (envelope of all UPFs) contains infinitely many Pareto-optimal points
3. SW maximization requires tangency between the GUPF and the highest social indifference contour — only one point on the GUPF satisfies this
4. Points $c$, $c_1$, $d$ on the GUPF are all Pareto-optimal, but $d$ may lie on a higher social indifference contour

| Criterion | What it does | Limitation |
|-----------|-------------|------------|
| Pareto optimality | Identifies efficient allocations | Cannot rank Pareto-optimal points |
| Bergson SWF | Selects single best point (tangency with GUPF) | Requires explicit value judgements |

**Conclusion:** Pareto optimality is *necessary* (any SW maximum must be efficient) but *not sufficient* (among infinite Pareto-efficient allocations, only one maximizes SW given the SWF).

---

#### 4.2.4 Externalities and Pareto Optimality: Pigouvian Tax/Subsidy

When externalities exist, private optimization does not yield Pareto optimality. Consider two firms in a competitive market ($p = 15$):

| Firm | Cost function | Externality |
|------|-------------|-------------|
| Firm 1 | $C_1 = 0.1q_1^2 + 5q_1 - 0.1q_2^2$ | $-\partial C_1/\partial q_2 > 0$ → external economy from Firm 2 |
| Firm 2 | $C_2 = 0.2q_2^2 + 7q_2 + 0.025q_1^2$ | $+\partial C_2/\partial q_1 > 0$ → external diseconomy from Firm 1 |

**Private optimum** (each firm maximizes own profit, $MC_i = p$):
- $MC_1^{priv} = 0.2q_1 + 5 = 15 \Rightarrow q_1 = 50$
- $MC_2^{priv} = 0.4q_2 + 7 = 15 \Rightarrow q_2 = 20$
- Total private profit = $290 + 17.5 = 307.5$

**Social optimum** (maximize joint profit, internalize externalities):
$$TC = C_1 + C_2 = 0.125q_1^2 + 0.1q_2^2 + 5q_1 + 7q_2$$
- $SMC_1 = 0.25q_1 + 5 = 15 \Rightarrow q_1^* = 40$
- $SMC_2 = 0.2q_2 + 7 = 15 \Rightarrow q_2^* = 40$
- Total social profit = $400 + (-40) = 360$

**Pigouvian correction:**
| Firm | Problem | Policy |
|------|---------|--------|
| Firm 1: $50 \to 40$ | Overproduces (external diseconomy) | Tax $t = \partial C_2/\partial q_1 = 0.05(40) = 2$ per unit |
| Firm 2: $20 \to 40$ | Underproduces (external economy) | Subsidy $s = -\partial C_1/\partial q_2 = 0.2(40) = 8$ per unit |

**Verification:** With tax: $MC_1 + 2 = 0.2q_1 + 7 = 15 \Rightarrow q_1 = 40$. With subsidy: $MC_2 - 8 = 0.4q_2 - 1 = 15 \Rightarrow q_2 = 40$.

**Social dividend** $= 360 - 307.5 = 52.5$ — the net gain to society from correcting the externality.

---

### 4.3 The First and Second Welfare Theorems

#### 4.3.1 First Welfare Theorem (Invisible Hand Theorem)

> **Every competitive equilibrium is Pareto-optimal.**

*Formal statement:* If all agents have locally non-satiated preferences and markets are perfectly competitive, every Walrasian equilibrium allocation is Pareto-efficient.

**Key assumption:** Local non-satiation — for any bundle $x$ and $\varepsilon > 0$, there exists $x'$ within $\varepsilon$ of $x$ that is strictly preferred. This ensures budget constraints bind at equilibrium.

**Conditions required:**
| Condition | Role |
|-----------|------|
| Local non-satiation | Consumers spend all income |
| Perfect competition | All agents are price-takers |
| Complete markets | Markets exist for all goods |
| No externalities | All costs/benefits reflected in prices |
| No public goods | Goods are rivalrous and excludable |

**Why it works:** In competitive equilibrium:
- Consumers equate $MRS$ to price ratio $\Rightarrow MRS^A = MRS^B$ (consumption efficiency)
- Producers equate $MRTS$ to factor price ratio $\Rightarrow MRTS^X = MRTS^Y$ (production efficiency)
- $P = MC \Rightarrow MRPT = P_X/P_Y = MRS$ (product-mix efficiency)

#### 4.3.2 Second Welfare Theorem

> **Any Pareto-optimal allocation can be realized as a competitive equilibrium with appropriate lump-sum transfers.**

*Formal statement:* Under convexity of preferences and production sets, for any Pareto-optimal allocation, there exists a set of prices and lump-sum transfers such that the allocation is a competitive equilibrium.

**Key assumptions:** Convex preferences, convex production sets, lump-sum transfers (fixed transfers independent of choices, preserving marginal incentives).

**Direction:**
$$\text{FWT: CE } \xrightarrow{\text{local non-satiation}} \text{ PO} \qquad \text{SWT: PO } \xrightarrow{\text{convexity + transfers}} \text{ CE}$$

#### 4.3.3 Comparison and Implications

| Feature | First Theorem | Second Theorem |
|---------|---------------|----------------|
| Direction | CE $\to$ PO | PO $\to$ CE |
| Key assumption | Local non-satiation | Convexity of preferences/production |
| Policy implication | Markets work — don't interfere | Redistribute endowments, then let markets work |
| Practical limitation | Real markets have imperfections | Lump-sum transfers infeasible in practice |

**Separation of efficiency and equity:** The two theorems together imply that society can first choose a "fair" distribution (via lump-sum transfers) and then let competitive markets achieve efficiency. The government should redistribute endowments, not intervene in prices.

**When the theorems fail (market failures):**
| Failure | Effect |
|---------|--------|
| Market power | $P > MC \Rightarrow MRPT \neq MRS$ |
| Externalities | Private $\neq$ social cost |
| Public goods | Free-rider $\Rightarrow$ underprovision |
| Asymmetric information | Adverse selection, moral hazard |
| Non-convexities | No competitive equilibrium exists |

#### 4.3.4 Does Perfect Competition Ensure Welfare Maximization?

**Short answer:** Perfect competition ensures *Pareto efficiency* (FWT) but does NOT guarantee *social welfare maximization*, which also requires distributional equity.

**Why competition ensures efficiency:** Under perfect competition, all three marginal conditions are automatically satisfied in general equilibrium via the price mechanism.

**Why competition does NOT ensure SW maximization:**

1. **Pareto $\neq$ SW maximum:** All points on the GUPF are Pareto-optimal, but only one maximizes SW (tangency with SWF)
2. **Initial endowment distribution matters:** Different endowments $\to$ different competitive equilibria (all PO, but different utility distributions)
3. **Market failures** prevent even Pareto optimality
4. **Distributional equity** requires active redistribution — markets have no tendency toward equity

**The theoretical ideal:** Perfect competition (for efficiency) + Lump-sum transfers (for equity) + SWF (for distributional choice).

---

### 4.4 Social Welfare Functions

#### 4.4.1 Definition

A **Social Welfare Function (SWF)** is a rule $W = F(U_1, U_2, \dots, U_n)$ that ranks alternative social states based on individual utility levels. Introduced by Bergson (1938) and developed by Samuelson, it embodies society's value judgements about distribution:

$$W = F(U_1, U_2, \dots, U_n) \quad \text{with} \quad \partial W / \partial U_i > 0 \ \forall i$$

Social welfare contours (in $U_A$-$U_B$ space) are downward-sloping, do not intersect, and higher contours represent higher welfare.

#### 4.4.2 Types of SWF

| Type | Formula | Social indifference curve | Equity concern |
|------|---------|--------------------------|---------------|
| **Utilitarian (Bentham)** | $W = \sum_i U_i$ | Linear, slope $-1$ | None (sum-ranking) |
| **Rawlsian (maximin)** | $W = \min_i U_i$ | L-shaped (right-angle) | Extreme (only worst-off matters) |
| **Nash (multiplicative)** | $W = \prod_i U_i$ | Rectangular hyperbola | Moderate inequality aversion |
| **Bergson-Samuelson** | $W = F(U_1, \dots, U_n)$ | General form | Any degree of inequality aversion |

**Utilitarian:** A gain of 1 util to a rich person = a gain of 1 util to a poor person. Ignores inequality — a transfer from poor to rich with $\Delta W = 0$ is "acceptable."

**Rawlsian:** Only the worst-off person matters. Any change that improves the worst-off is good, even if it dramatically reduces everyone else's utility. Philosophical basis: Rawls (1971) *A Theory of Justice* — "veil of ignorance."

#### 4.4.3 Grand Utility Possibility Frontier and Point of Bliss

**Derivation of GUPF (4 steps):**

1. **PPC:** Each point on the production possibility curve is a Pareto-efficient output combination $(X, Y)$
2. **UPF:** For a given product-mix, construct the Edgeworth exchange box. The contract curve yields a utility possibility frontier — the set of efficient utility pairs $(U_A, U_B)$
3. **GUPF:** The outer envelope of all UPFs across every product-mix on the PPC. It represents the maximum utility combinations feasible given resources and technology
4. **Point of Bliss:** Tangency between the GUPF and the highest attainable social indifference contour

**Condition at bliss point:**

$$MRPT_{XY} = MRS^A_{XY} = MRS^B_{XY} \quad \text{(Pareto efficiency — holds on entire GUPF)}$$
$$\text{Slope(GUPF)} = \text{Slope(Social Indifference Contour)} \quad \text{(distributional judgement — only at bliss)}$$

The bliss point determines all ten unknowns in the $2\times2\times2$ model: $X^*, Y^*, X_A^*, X_B^*, Y_A^*, Y_B^*, L_X^*, L_Y^*, K_X^*, K_Y^*$.

#### 4.4.4 Kaldor-Hicks Compensation and the Scitovsky Double Test

**Kaldor-Hicks compensation principle (1939):** A change from state $A$ to state $B$ improves social welfare if the gainers could *potentially* compensate the losers and still remain better off — regardless of whether compensation is actually paid:

$$\text{Change } A \to B \text{ is K-H efficient } \iff \sum \text{WTP}_{\text{gainers}} > \sum \text{WTA}_{\text{losers}}$$

**Critical assumption — Equal MU of money:** For monetary amounts to be comparable across individuals, each unit of money must represent the same utility change for everyone. If the MU of money differs (e.g., millionaire vs. poor person), the comparison breaks down.

**Can compensation be correct?**
| Condition | Verdict |
|-----------|---------|
| MU of money EQUAL across individuals | YES — £1 gain = £1 loss in utility terms |
| MU of money UNEQUAL | NO — example: millionaire gains £2000 (low MU), poor loses £1000 (high MU) → total utility falls despite K-H "pass" |
| Potential $\neq$ actual compensation | AMBIGUOUS — distributional change ignored |
| Constant MU unrealistic | NO — MU of money declines with income |

**Scitovsky paradox (1941):** Kaldor-Hicks can produce contradictory rankings when utility possibility curves intersect:
$$A \succ_{KH} B \quad \text{AND} \quad B \succ_{KH} A$$

**Scitovsky's Double Test** resolves this:
1. **Forward test:** Gainers can compensate losers (K-H test passes)
2. **Reversal test:** Losers *cannot* bribe gainers to reject the change

A change is welfare-improving only if (i) passes AND (ii) fails.

**Limitations of compensation principle:**
- Potential $\neq$ actual compensation → losers may be actually worse off
- Ignores income distribution — accepts status quo as neutral
- Constant MU of money assumed unrealistically
- Not a complete ordering — may still fail to rank some alternatives

#### 4.4.5 Pigou's Three Pillars of Welfare Economics

Pigou (1932) structured welfare analysis around three pillars:

**Pillar 1: Definition and measurement of economic welfare**
- Economic welfare = "that part of social welfare that can be brought into relation with the measuring rod of money"
- Economic welfare and national income are coordinate
- *Criticism:* Cannot separate economic from non-economic welfare (Robbins); cardinal utility is unmeasurable

**Pillar 2: Dual conditions for welfare maximization**
| Condition | Content | Assumption |
|-----------|---------|------------|
| (i) National income growth | Given factor supply, NI↑ → SW↑ | Tastes and distribution unchanged |
| (ii) Income redistribution | Transfer from rich to poor ↑ SW (constant NI) | Equal capacity for satisfaction + diminishing MU of income |

*Criticism of (ii):* "Equal capacity for satisfaction" is scientifically untenable — it is a value judgement favoring equality.

**Pillar 3: Private vs. social net product (externalities)**
- Private net product: contribution to national dividend accruing to the private investor
- Social net product: aggregate contribution (including external effects)
- *Policy:* Tax where private > social; subsidize where social > private
- *Criticism:* Divergence cannot always be quantified; assumes state can measure marginal external effects accurately

---

### 4.5 Assumptions of Social Welfare Maximization in the $2\times2\times2$ Model

| Category | Assumptions |
|----------|-------------|
| **Structure** | 2 factors ($L$, $K$, fixed supply); 2 goods ($X$, $Y$); 2 consumers ($A$, $B$); each firm produces one good |
| **Efficiency (Pareto)** | $MRS^A = MRS^B$, $MRTS^X = MRTS^Y$, $MRPT = MRS$ |
| **Competition (for FWT)** | Price-taking, complete markets, no externalities, no public goods, convex preferences/technology, perfect information, perfect factor mobility |
| **Distributional (beyond Pareto)** | Existence of a SWF $F(U_A, U_B)$, concave SWF, no interpersonal utility comparisons (the SWF embeds these as value judgements) |

**Key distinction:** Assumptions for Pareto optimality (market structure, convexity, no externalities) vs. additional assumptions for SW maximization (existence of SWF, value judgements) — many students miss the second category.

---

### 4.6 Arrow's Impossibility Theorem

Arrow (1951) proved that no SWF can simultaneously satisfy:
1. **Universal domain** (all possible preference profiles allowed)
2. **Pareto principle** (if everyone prefers $A$ to $B$, society prefers $A$ to $B$)
3. **Independence of irrelevant alternatives** (social ranking of $A$ vs $B$ depends only on individual rankings of $A$ vs $B$)
4. **Non-dictatorship** (no single individual's preferences determine social preferences)

**Bergson-Samuelson SWF** (used in optimization) vs. **Arrow's SWF** (preference aggregation) are fundamentally different concepts:

| Bergson-Samuelson | Arrow |
|-------------------|-------|
| Assumes a social planner with explicit value judgements | Attempts to aggregate individual preferences |
| Used for constrained optimization (bliss point) | Used for aggregation rules |
| Viable for policy analysis | Proves impossibility of perfect aggregation |

---

### 4.7 Summary Table: Welfare Criteria

| Criterion | Basis | Interpersonal comparisons? | Complete ordering? | Distributional concern? |
|-----------|-------|--------------------------|-------------------|------------------------|
| Pareto | Ordinal utility | No | No (only Pareto-rankable) | None |
| Kaldor-Hicks | Money metric | Implicit (via money) | Potentially contradictory | None (status quo accepted) |
| Scitovsky double | Money metric | Implicit | Yes (consistent) | None |
| Bergson SWF | SWF with value judgements | Yes (embedded in SWF) | Yes | Explicit (via SWF shape) |
| Utilitarian | Sum of utilities | Yes (cardinal) | Yes | Equity-blind (sum-ranking) |
| Rawlsian | Minimum utility | Yes (ordinal) | Yes | Extreme (maximin) |

---

### Exam Checklist

- [ ] Define CV, EV, CS with correct utility anchors
- [ ] Know $EV > CS > CV$ ordering for price decrease (normal goods)
- [ ] Cobb-Douglas welfare computation: $e(p, u) = 2u\sqrt{p_1 p_2}$ for $\alpha = 1/2$
- [ ] Willig bounds: CS approximates CV/EV within $<5\%$ for realistic scenarios
- [ ] Three Pareto conditions: $MRS^A = MRS^B$, $MRTS^X = MRTS^Y$, $MRPT = MRS$
- [ ] Pareto necessary but not sufficient for SW maximization (GUPF-SWF tangency diagram)
- [ ] FWT: CE $\to$ PO (local non-satiation); SWT: PO $\to$ CE (convexity + transfers)
- [ ] Separation of efficiency and equity (Second Welfare Theorem)
- [ ] Utilitarian (linear, slope -1) vs Rawlsian (L-shaped) indifference curves
- [ ] Kaldor-Hicks: potential compensation, equal MU of money assumption, Scitovsky double test
- [ ] Pigouvian tax/subsidy algorithm: private optimum $\to$ social optimum $\to$ tax = marginal external effect $\to$ social dividend
- [ ] Arrow's Impossibility: UD + P + IIA + ND cannot all be satisfied

---

## <a id="topic-5"></a>Topic 5: General Equilibrium

> **Exam weight:** 14 marks (typically 1 question). Common question types: GE vs PE comparison, existence/uniqueness/stability analysis, Walras' Law and numeraire, Edgeworth box problems with numerical solutions, the three Pareto conditions and welfare theorems.
> **Key sources:** Koutsoyiannis Ch.22-23, Munoz-Garcia §6.1-6.5

---

### 5.1 General Equilibrium vs Partial Equilibrium

**Definition:** General equilibrium (GE) is a state in which *all* markets and *all* decision-making units are simultaneously in equilibrium -- every market cleared at positive prices, every consumer maximising utility given their budget, and every firm maximising profit given its technology (Koutsoyiannis, Ch.22, p.486).

$$\text{GE: } \sum_i z_i(p) = 0 \text{ for all } i \text{, where } z_i(p) = D_i(p) - S_i(p)$$

The Arrow-Debreu (1954) existence proof formalises GE as a fixed point of the excess demand mapping.

| Feature | Partial Equilibrium | General Equilibrium |
|---------|-------------------|-------------------|
| Scope | Single market in isolation | All markets simultaneously |
| Feedback | Ignores cross-market effects | Explicitly models interdependence |
| Prices | One price determined (ceteris paribus) | All prices determined simultaneously |
| Equations | One supply = one demand | System of simultaneous equations |
| Example | Tax on tea -> price and quantity in tea market only | Tax on tea -> tea price up -> coffee demand up -> factor reallocation -> wage changes -> income effects -> all markets adjust |

**GE Example:** A drought destroys wheat harvest. PE: wheat price rises. GE: wheat price up -> bread price up -> consumers substitute rice -> rice price up -> farmers shift land from cotton to wheat -> cotton price up -> textile costs up -> clothing prices up -> factor markets adjust -> wage/rental changes -> feedback to all markets.

**Example from Koutsoyiannis (p. 491):** An exogenous taste shift toward X (away from substitute Y) raises P_x, creates excess profits in X, losses in Y -> firms exit Y, enter X -> factor demand shifts -> w and r change -> LAC shift -> new equilibrium with higher w, lower r, different product mix.

---

### 5.2 Existence, Uniqueness, and Stability of Equilibrium

The three fundamental problems of GE are best illustrated using a demand-supply framework that extends to GE via excess demand functions (Koutsoyiannis pp. 489-491).

**(i) Existence:** Does any positive price clear all markets simultaneously?

In a standard D-S diagram, equilibrium exists if D and S intersect at a positive price. **No equilibrium exists** if D and S do not intersect (e.g., backward-bending supply curve that lies everywhere above D, or vertical S with D entirely below it).

In GE terms, existence requires continuous excess demand functions satisfying boundary conditions. Arrow-Debreu (1954) proved existence under: perfect competition, no indivisibilities, no increasing returns, continuous well-behaved production and demand functions.

**Sufficient conditions:**
- Continuity of excess demand
- Homogeneity of degree zero
- Walras' Law
- Boundary behaviour ($z_i(p) \to +\infty$ as $p_i \to 0$)

**(ii) Uniqueness:** If equilibrium exists, is there exactly one?

Multiple equilibria arise if D and S intersect more than once. In terms of **excess demand** $E(P) = QD(P) - QS(P)$: there are as many equilibria as the number of times $E(P)$ intersects the vertical price-axis. With a backward-bending supply curve (e.g., labour market), three intersections are possible.

Equilibrium is unique if the excess demand function satisfies **gross substitutability**: $\partial z_i(p)/\partial p_j > 0$ for all $i \neq j$. This ensures the mapping is monotone (Koutsoyiannis, p.489). Normal goods (downward-sloping D, upward-sloping S) guarantee $dE/dP < 0$ leading to uniqueness. Giffen goods, backward-bending supply can create multiple crossings.

**(iii) Stability:** If displaced from equilibrium, does the system return?

- **Stable equilibrium:** D cuts S from above -> excess demand drives price up, excess supply drives it down (negative slope of $E(P)$ at equilibrium).
- **Unstable equilibrium:** D cuts S from below -> excess demand drives price down, excess supply drives it up (positive slope of $E(P)$ at equilibrium).
- Walrasian **tatonnement**: auctioneer adjusts prices proportionally to excess demand: $\dot{p}_i = k_i \cdot z_i(p)$. Stable if $\partial E/\partial P < 0$ at equilibrium.

**Excess demand function approach (Q3 method):** Define $E(P) = QD - QS$:
- Existence: $E(P) = 0$ at some $P > 0$ (Intermediate Value Theorem)
- Stability: sign of $dE/dP$ at equilibrium (negative = stable)
- Uniqueness: monotonicity of $E(P)$

**Four cases to draw:** (1) unique stable, (2) unique unstable, (3) multiple equilibria (alternating stable/unstable), (4) no equilibrium.

**Caution:** Existence does not guarantee uniqueness (multiple equilibria possible with backward-bending supply), and uniqueness does not guarantee stability.

---

### 5.3 Walras' Law, Numeraire, and Excess Demand

**Excess demand function** for good $i$: $z_i(p) = D_i(p) - S_i(p)$ (Koutsoyiannis, p.489). In a pure exchange economy, $z_i(p) = \sum_h x_i^h(p) - \sum_h \omega_i^h$.

**Properties (Munoz-Garcia, SS6.1, p.332-335):**
- **Homogeneous of degree zero:** $z_i(\lambda p) = z_i(p)$ for all $\lambda > 0$ (only relative prices matter)
- **Walras' Law:** $p \cdot z(p) = 0$ (aggregate value of excess demand is zero)
- **Continuity:** $z_i(p)$ is continuous on $\mathbb{R}^L_{++}$ under standard utility assumptions

**Walras' Law:** The sum of the values of excess demands across all markets is identically zero:

$$\sum_{i=1}^n p_i \cdot z_i(p) = 0 \quad \text{for all } p \gg 0$$

**Proof from individual budget constraints:** Each consumer $h$ satisfies $p \cdot x^h(p) = p \cdot \omega^h$ (budget balance). Thus $p \cdot (x^h - \omega^h) = 0$ for each $h$. Summing over $h$: $\sum_h p \cdot (x^h - \omega^h) = p \cdot z(p) = 0$.

**Implication:** If $n-1$ markets are in equilibrium, the $n$th market must also be in equilibrium -- one market-clearing equation is redundant. Therefore, only $n-1$ independent equations determine $n-1$ relative prices.

**Numeraire:** Because Walras' Law makes one equation redundant, absolute prices are indeterminate. By setting one price as numeraire ($P_1 = 1$), the system determines $n-1$ relative prices uniquely.

**Example (3-good case):** Set $p_1 = 1$, solve $z_2(p_1,p_2,p_3) = 0$ and $z_3(p_1,p_2,p_3) = 0$ for $(p_2, p_3)$. Then $z_1 = 0$ automatically by Walras' Law.

**Worked Example -- Three-Good Walrasian System (48-Masters-Final Q6b):**

In a three-good world, the excess demand for good 2 is $Z_2(P) = 2 - P_2/P_1 + P_3/P_1$ and the excess demand for good 3 is $Z_3(P) = 3 - P_3/P_1 + 4P_2/P_1$.

**(i) Find $Z_1(P)$ using Walras' Law: $P_1 Z_1 + P_2 Z_2 + P_3 Z_3 = 0$**

$Z_1 = -\frac{P_2}{P_1}Z_2 - \frac{P_3}{P_1}Z_3$

$Z_1 = -\frac{P_2}{P_1}\left(2 - \frac{P_2}{P_1} + \frac{P_3}{P_1}\right) - \frac{P_3}{P_1}\left(3 - \frac{P_3}{P_1} + 4\frac{P_2}{P_1}\right)$

**(ii) Solve for market-clearing price ratios:**

Set $Z_2 = 0$: $2 - P_2/P_1 + P_3/P_1 = 0$ -> $P_2/P_1 = 2 + P_3/P_1$

Set $Z_3 = 0$: $3 - P_3/P_1 + 4P_2/P_1 = 0$ -> substitute:

$3 - P_3/P_1 + 4(2 + P_3/P_1) = 0$ -> $3 - P_3/P_1 + 8 + 4P_3/P_1 = 0$ -> $11 + 3P_3/P_1 = 0$ -> $P_3/P_1 = -11/3$

$P_2/P_1 = 2 + (-11/3) = -5/3$

$P_3/P_2 = (P_3/P_1) / (P_2/P_1) = (-11/3) / (-5/3) = 11/5$

**Key insight:** In an $n$-good Walrasian system, you only need to solve $n-1$ market-clearing equations. The $n$th is automatically satisfied by Walras' Law. Price levels are indeterminate -- only ratios matter.

---

### 5.4 The Edgeworth Box and the $2 \times 2 \times 2$ Model

The **$2 \times 2 \times 2$ model** is the canonical GE framework: 2 factors (L, K), 2 commodities (X, Y), 2 consumers (A, B), all under perfect competition (Koutsoyiannis, Ch.22, SE, pp.496-499).

**Assumptions:**
1. Fixed supplies of L and K; homogeneous, perfectly divisible.
2. Two commodities X, Y; given technology; isoquants smooth, convex (diminishing MRTS); constant returns to scale; no production externalities.
3. Two consumers A, B; ordinal convex indifference curves (diminishing MRS); no consumption externalities (no bandwagon/snob/Veblen effects).
4. Consumers maximise utility; firms maximise profit.
5. Factors owned by consumers; full employment; all income spent.
6. Perfect competition in all markets.

**Production Equilibrium via Edgeworth Box:**

The Edgeworth production box has dimensions equal to total K (width) and total L (height). X-isoquants originate from the SW corner (O_X), Y-isoquants from the NE corner (O_Y).

- **Contract curve (production):** Locus of tangency points of X and Y isoquants -> $\text{MRTS}^X_{LK} = \text{MRTS}^Y_{LK}$.
- Points ON the contract curve are **Pareto-efficient in production**: impossible to increase output of one good without reducing the other.
- Points OFF the curve are inefficient -- reallocation can increase at least one output.
- In perfect competition, profit maximisation requires each firm to set MRTS = w/r. Since w/r is the same for both, equilibrium must lie on the contract curve.

**General equilibrium of production condition:**
$$\text{MRTS}^X_{L,K} = \text{MRTS}^Y_{L,K} = \frac{w}{r}$$

The production equilibrium is not unique (any point on contract curve is Pareto-optimal). With perfect competition, the specific point where MRTS = w/r is selected. The contract curve maps to the **Production Possibility Curve (PPC)** in product space.

**Classification:** The contract curve is unique only under CRS and homothetic isoquants. With DRS or non-homothetic technology, the curve is non-linear.

---

### 5.5 The Transmission Mechanism: Product Market to Factor Market to GE

The transmission mechanism describes how an exogenous shock propagates through interdependent markets to restore a new general equilibrium (Koutsoyiannis, Ch.22, SD, pp.491-495).

**The 9-step sequence:**

**Step 1:** Initial equilibrium -- all markets cleared at $P_{x0}, P_{y0}, w_0, r_0$.

**Step 2:** Exogenous taste change -- consumers shift toward X, away from Y. D_X shifts right, D_Y shifts left.

**Step 3:** Short-run product market -- $P_x$ rises, $Q_x$ increases. $P_y$ falls, $Q_y$ decreases. Excess profits in X, losses in Y.

**Step 4:** Firm adjustment -- X firms expand along rising MC; Y firms contract.

**Step 5:** Factor market effects (the transmission) -- X industry expands -> demand for L and K rises -> w_x and r_x rise. Y contracts -> demand for L and K falls -> w_y and r_y fall. Factor price differential emerges.

**Step 6:** Factor mobility -- L and K migrate from Y (low w,r) to X (high w,r).

**Step 7:** New factor price equalisation -- with X less capital-intensive than Y: demand for L by X exceeds release from Y -> w rises overall; release of K from Y exceeds demand by X -> r falls overall. New equilibrium: $w_2 > w_0$, $r_2 < r_0$.

**Step 8:** Long-run product market adjustment -- entry into X shifts S_X down; exit from Y shifts S_Y up.

**Step 9:** New GE -- all markets clear at $(P_{x2}, P_{y2}, w_2, r_2)$, new product mix ($X_2 > X_0$, $Y_2 < Y_0$), normal profits restored.

**Stolper-Samuelson Theorem:** An increase in the relative price of a good raises the real return to the factor used intensively in its production and lowers the real return to the other factor (Stolper & Samuelson, 1941; Koutsoyiannis, p.505).

$$\text{If } \frac{P_X}{P_Y} \uparrow \text{ and } X \text{ is labour-intensive, then } \frac{w}{r} \uparrow$$

**Magnification effect (Jones algebra):** $\hat{w} > \hat{P}_X > \hat{P}_Y > \hat{r}$ in proportional terms.

**Key insight:** Factor intensities determine the final w/r outcome. If both industries had the same K/L ratio, factor prices would return to original levels -- the permanent change in factor prices is driven by *different* factor intensities.

---

### 5.6 The Three Pareto Efficiency Conditions

For a general equilibrium to be Pareto-optimal, three marginal conditions must hold simultaneously (Koutsoyiannis, Ch.23, pp.524-532; Munoz-Garcia, SS6.5, p.380):

**1. Efficiency in exchange (consumption):** $\text{MRS}^A_{xy} = \text{MRS}^B_{xy} = P_x/P_y$ -- the marginal rate at which consumers are willing to trade X for Y must be equal across all consumers. Achieved on the Edgeworth contract curve of consumption.

**2. Efficiency in production (factor allocation):** $\text{MRTS}^X_{LK} = \text{MRTS}^Y_{LK} = w/r$ -- the marginal rate at which factors can be substituted must be equal across all firms. Achieved on the Edgeworth contract curve of production.

**3. Efficiency in product-mix (top-level):** $\text{MRPT}_{xy} = \text{MRS}_{xy}$ -- the rate at which the economy can transform X into Y (slope of the PPC) must equal consumers' marginal willingness to trade. In perfect competition: MRPT = MC_x/MC_y = P_x/P_y = MRS.

**The three Pareto conditions together:**
1. $\text{MRS}^A_{xy} = \text{MRS}^B_{xy}$ (efficient distribution of goods)
2. $\text{MRTS}^X_{LK} = \text{MRTS}^Y_{LK}$ (efficient factor allocation)
3. $\text{MRPT}_{xy} = \text{MRS}_{xy}$ (efficient output mix -- the *Fundamental Condition of Pareto Optimality*)

**First Welfare Theorem (FWT):** Every competitive equilibrium satisfies these three conditions and is therefore Pareto-efficient (requires LNS preferences, no externalities, complete markets).

**Second Welfare Theorem (SWT):** Any Pareto-efficient allocation can be decentralised as a competitive equilibrium with appropriate lump-sum transfers (requires convexity of preferences and production sets).

**Diagrammatic summary:** The PPC in product space with slope = MRPT, tangent to a community indifference curve with slope = MRS. At the tangency point E: $\text{MRPT}_{xy} = \text{MRS}^A_{xy} = \text{MRS}^B_{xy} = P_x/P_y$.

---

### 5.7 Numerical Edgeworth Box Problem

**Given (Koutsoyiannis, Ch.22):**
- A: $U_a = X_a \cdot Y_a$ (Cobb-Douglas)
- B: $U_B = X_B + Y_B$ (perfect substitutes -- linear utility)
- Endowments: $X_a^0 = 10$, $Y_a^0 = 50$; $X_B^0 = 50$, $Y_B^0 = 10$
- Total X = 60, Total Y = 60

**(a) Edgeworth box dimensions:** Width = 60 (total X), Height = 60 (total Y).

**(b) Pareto efficiency condition:**
- For A: $MRS_a = MU_x/MU_y = Y_a/X_a$ (from $U_a = X_a \cdot Y_a$)
- For B: $MRS_B = 1/1 = 1$ (from $U_B = X_B + Y_B$)
- Pareto efficiency: $MRS_a = MRS_B$ -> $Y_a/X_a = 1$ -> $Y_a = X_a$

If B is at a corner (consuming only one good), $MRS_B$ may not equal 1 at the boundary. B with perfect substitutes will consume the cheaper good exclusively unless prices equalise MRS exactly.

**Contract curve:** For interior allocations: $Y_a = X_a$ (where $0 \le X_a \le 60$, $0 \le Y_a \le 60$).

**(c) Check endowment point ($X_a=10$, $Y_a=50$):** $MRS_a = 50/10 = 5 \ne 1 = MRS_B$. Since $MRS_a > MRS_B$, A values Y much more relative to X than B does. Gains from trade exist: A should give up Y for X from B. The endowment is **not Pareto-efficient**.

$U_a(10,50) = 500$; $U_B(50,10) = 60$

**(d) Is ($X_a=80$, $Y_a=50$) feasible?** No -- total X = 60, so $X_a$ cannot be 80. Infeasible and outside the Edgeworth box.

**(e) Core of the economy:** The set of all feasible allocations that cannot be improved upon by any coalition of agents. An allocation $(x^A, x^B)$ is in the core if it is feasible, individually rational ($U^A(x^A) \ge U^A(\omega^A)$ and $U^B(x^B) \ge U^B(\omega^B)$), and coalition-proof. The competitive equilibrium lies in the core. In a two-person exchange economy, the core coincides with the contract curve allocations that are individually rational.

**Exam Tip:** For Cobb-Douglas vs linear utility, the contract curve is derived by equating MRS. Check corner solutions -- B's linear utility often leads to corner consumption. Always verify feasibility first.

---

### 5.8 How GE Is Reached: The Walrasian System

**The Walrasian system** (Koutsoyiannis pp. 497-509):

**Unknowns (18):** Quantities demanded of X and Y by A and B (4), quantities supplied of L and K by A and B (4), quantities demanded of L and K by X and Y firms (4), quantities supplied of X and Y by firms (2), prices of X and Y (2), prices of L and K (2). **Total: 18**

**Equations (18):** Demand functions of A and B for X and Y (4), supply functions of L and K by A and B (4), demand functions for L and K by firms (4), supply functions of X and Y by firms (2), market-clearing equations for X and Y (2), market-clearing equations for L and K (2). **Total: 18**

**Does a GE solution exist?** Equality of equations and unknowns is **neither necessary nor sufficient**. Three issues:
1. **Walras' Law:** One equation is redundant -- if n-1 markets clear, the nth must also clear. Independent equations = 17 vs 18 unknowns.
2. **Numeraire:** One price set = 1, reducing unknowns to 17. Now 17 = 17 -> determinate *in relative prices*.
3. **Non-negativity:** Prices and quantities must be $\ge 0$. Equation-counting doesn't guarantee this.

**How GE is reached (6 steps):**
1. **Production side:** Firms choose K/L mix such that $\text{MRTS}^X_{LK} = \text{MRTS}^Y_{LK} = w/r$ -> Edgeworth contract curve.
2. **Product transformation:** Contract curve maps to PPC. Firms choose output where MRPT = $P_x/P_y$.
3. **Consumption side:** Consumers maximise utility: $\text{MRS}^A = \text{MRS}^B = P_x/P_y$ -> Edgeworth contract curve of consumption.
4. **Simultaneous equilibrium:** $\text{MRPT} = \text{MRS}^A = \text{MRS}^B = P_x/P_y$ ensures consistency.
5. **Factor and commodity prices:** Determined (as ratios with numeraire) by MRTS conditions, marginal productivity conditions ($w = \text{MPP}_L \cdot P$, $r = \text{MPP}_K \cdot P$), and MRS conditions.
6. **Income distribution:** Determined by factor ownership distribution, consistent with equilibrium consumption.

**Arrow-Debreu (1954) existence proof** requires: perfect competition, no indivisibilities, no increasing returns, continuous convex preferences and production sets, well-behaved excess demand functions.

---

### 5.9 GE and Consumption Externalities

The $2 \times 2 \times 2$ model **assumes away** consumption externalities (assumption 3: consumer choices are independent). If introduced:

1. **Pareto conditions break down:** MRS depends on others' consumption: $\text{MRS}^A = \text{MRS}^A(X_A, Y_A, X_B, Y_B)$. Equality $\text{MRS}^A = \text{MRS}^B$ is no longer sufficient.
2. **Missing market:** The externality is an untraded interdependence -- no market price for A's influence on B's utility. FWT fails.
3. **Specific effects:** Bandwagon (over-consumption, more elastic demand), Snob (under-consumption, less elastic demand), Veblen (price as status signal).
4. **Mathematically:** $U_A = U_A(X_A, Y_A, X_B, Y_B)$ requires additional conditions on cross-partials for Pareto efficiency. The standard condition is necessary but no longer sufficient.

**Conclusion:** The GE solution may still exist but will NOT be Pareto-optimal. The three marginal conditions fail when externalities are present.

---

## <a id="topic-6"></a>Topic 6: Game Theory & Industrial Organization

> **Exam weight:** 14 marks (typically 1 question). Common question types: Nash equilibrium calculation (Bertrand/Cournot), prisoners' dilemma and oligopoly, extensive form entry games with backward induction, repeated games with grim trigger (discount factor threshold), centipede game paradox.
> **Key sources:** Koutsoyiannis Ch.11, Munoz-Garcia Ch.10, Fudenberg & Tirole Ch.1,3,5

---

### 6.1 Nash Equilibrium

**Definition (Nash, 1950):** A strategy profile $(s_1^*, s_2^*, \dots, s_n^*)$ such that no player can gain by unilaterally deviating:

$$ u_i(s_i^*, s_{-i}^*) \geq u_i(s_i, s_{-i}^*) \quad \text{for all } s_i \in S_i \text{ and all } i $$

**Best Response:** Player $i$'s best response $BR_i(s_{-i})$ is the set of strategies that maximise $i$'s payoff given opponents' strategies:

$$ BR_i(s_{-i}) = \arg\max_{s_i \in S_i} u_i(s_i, s_{-i}) $$

A Nash equilibrium is a **fixed point** of the best-response correspondence: $s_i^* \in BR_i(s_{-i}^*)$ for all $i$.

**Classification:**
- **Pure strategy NE:** Player chooses a single deterministic action.
- **Mixed strategy NE:** Player randomises over actions with a probability distribution. Exists in every finite game (Nash, 1950).
- **Strict NE:** $u_i(s_i^*, s_{-i}^*) > u_i(s_i, s_{-i}^*)$ for all $s_i \neq s_i^*$.
- **Weak NE:** $u_i(s_i^*, s_{-i}^*) \geq u_i(s_i, s_{-i}^*)$ for all $s_i$.

**Finding NE in pure strategies:** For each cell in the payoff matrix, check if any player can improve by unilaterally switching strategies. A cell is NE if both players are playing best responses to each other.

---

### 6.2 Dominant Strategies and the Prisoners' Dilemma

**Dominant strategy:** A strategy $s_i^*$ is dominant if it yields a strictly higher payoff than any other strategy **regardless** of what opponents do (Fudenberg & Tirole, SS1.1):

$$ u_i(s_i^*, s_{-i}) > u_i(s_i, s_{-i}) \quad \text{for all } s_i \neq s_i^* \text{ and all } s_{-i} $$

**Prisoners' Dilemma (PD):** A $2 \times 2$ game where each player has a dominant strategy (Defect), yet mutual defection is Pareto-inferior to mutual cooperation (Koutsoyiannis, p.412-413).

**Payoff matrix (years in prison -- lower is better):**

```
                    Prisoner B
                Confess     Don't Confess
Prisoner A  ------------------------------
Confess     |  (5, 5)       (0, 10)
Don't       | (10, 0)       (1, 1)
```

Canonical PD normal form (higher = better):

```
           Cooperate    Defect
Cooperate   (R, R)      (S, T)
Defect      (T, S)      (P, P)
```

with $T > R > P > S$ (temptation > reward > punishment > sucker payoff) and $(T+S)/2 < R$ (to prevent alternating cooperation).

- **Dominant strategy** for each: **Defect**.
- Yet mutual defection $(P,P)$ is worse than mutual cooperation $(R,R)$. Hence the "dilemma."

**Exam Question -- Prisoners' Dilemma in Oligopoly (46 Final Q4b):** The PD captures the fragility of oligopolistic collusion -- each firm has an individual incentive to undercut, even though all would be better off maintaining high prices.

**Implications for oligopoly:**
1. **Price competition:** Firms have incentive to undercut each other. NE is low-price, low-profit (Bertrand paradox) even though collusion would yield higher joint profits.
2. **Advertising wars:** Firms advertise because rival will if they don't, but mutual advertising reduces profits (arms race).
3. **Investment/R&D:** Each firm fears being left behind -> overinvestment.
4. **Tacit collusion is fragile:** The PD structure makes cooperation hard to sustain without repeated interaction.

**Why oligopoly differs from PD:** In repeated games, punishment strategies (grim trigger, tit-for-tat) can sustain cooperation. If the game is infinitely repeated and players are sufficiently patient (discount factor $\delta > \delta^*$), the cooperative outcome can be an SPNE (Folk Theorem).

---

### 6.3 Bertrand Duopoly

**Bertrand competition with differentiated products (46 Final Q4a):**

Market: $q_1 = 100 - 2p_1 + p_2$, $q_2 = 100 - 2p_2 + p_1$; MC = $10$ for both firms.

**Step 1: Profit functions.**
$\pi_1 = (p_1 - 10)(100 - 2p_1 + p_2)$
$\pi_2 = (p_2 - 10)(100 - 2p_2 + p_1)$

**Step 2: First-order conditions (best responses).**

$\partial\pi_1/\partial p_1 = (1)(100 - 2p_1 + p_2) + (p_1 - 10)(-2) = 0$
$120 - 4p_1 + p_2 = 0$ -> $p_1 = 30 + p_2/4$ (BR of Firm 1)

Similarly: $p_2 = 30 + p_1/4$ (BR of Firm 2)

**Step 3: Solve Nash equilibrium.**

$p_1 = 30 + (30 + p_1/4)/4$ -> $p_1 = 30 + 7.5 + p_1/16$ -> $(15/16)p_1 = 37.5$ -> $p_1^* = 40$

$p_2^* = 30 + 40/4 = 40$

**Nash equilibrium:** $(p_1^*, p_2^*) = (40, 40)$

**Step 4: Quantities and profits.**
$q_1 = 100 - 2(40) + 40 = 60$, $q_2 = 60$
$\pi_1 = (40 - 10)(60) = 1800$, $\pi_2 = 1800$

**Strategic complements:** $\partial p_1/\partial p_2 = 1/4 > 0$ -- best-response functions slope upward. A price cut by one firm induces the other to cut price as well.

**Homogeneous Bertrand:** If products are identical and firms compete in prices with constant MC, the unique NE is $p = MC$ (zero profits) -- the **Bertrand paradox**.

---

### 6.4 Cournot Duopoly

**Cournot competition:** Firms choose quantities simultaneously; market price clears given total output.

**Standard model (symmetric):**
- Market demand: $P = a - b(q_1 + q_2)$
- Constant MC = $c$ for both firms

**Profit functions:**
$\pi_1 = (a - b(q_1 + q_2))q_1 - cq_1$
$\pi_2 = (a - b(q_1 + q_2))q_2 - cq_2$

**FOCs (best responses):**
$\partial\pi_1/\partial q_1 = a - 2bq_1 - bq_2 - c = 0$
$q_1 = (a - c - bq_2)/(2b)$ (BR of Firm 1)

Similarly: $q_2 = (a - c - bq_1)/(2b)$ (BR of Firm 2)

**Solve NE:** $q_1^* = q_2^* = (a - c)/(3b)$

**Cournot vs Bertrand comparison:**

| Feature | Cournot | Bertrand |
|---------|---------|----------|
| Strategic variable | Quantity | Price |
| BR slope | Downward (strategic substitutes) | Upward (strategic complements) |
| NE price (homogeneous) | Above MC | = MC |
| Profits | Positive | Zero (homogeneous goods) |

**Key insight:** Cournot yields higher prices and profits than Bertrand with homogeneous goods because quantity competition is softer than price competition.

---

### 6.5 Sequential Games, Backward Induction, and SPNE

**Subgame Perfect Nash Equilibrium (SPNE):** A strategy profile that induces a Nash equilibrium in every subgame of the original game (Selten, 1965). Eliminates **non-credible threats**.

**Backward induction (rollback):** The algorithm for finding SPNE in finite-horizon games of perfect information:
1. Start at the **last decision node** -- choose the action that maximises that player's payoff.
2. Move backward: at each preceding node, the player chooses optimally given equilibrium play in subsequent subgames.
3. The resulting strategy profile is the unique SPNE (if no ties at any node).

**Market Entry Game (46 Final Q5a; Koutsoyiannis, p.414):**

An incumbent monopolist (I) and a potential entrant (E).

**Structure:**
1. E decides: Enter (IN) or Stay Out (OUT).
2. If OUT: I continues as monopolist; payoff: (0, 100).
3. If IN: I decides: Accommodate (40, 40) or Fight (-10, -10).

Decision tree: E chooses IN/OUT; if IN, I chooses Accommodate/Fight.

**Backward induction:**
1. At I's node (after E enters): Accommodate (40) > Fight (-10) -> **Accommodate**.
2. At E's node: Enter gives 40 (since I accommodates), Stay Out gives 0 -> **Enter**.

**SPNE:** (Enter, Accommodate) -- payoffs (40, 40).

**Alternative version (46 Final Q5a -- revised payoffs):** Market only big enough for one firm. Both enter -> both lose 20m. One enters -> profit 50m, other breaks even (0). Firm B observes A's decision.

Decision tree: A chooses IN/OUT; B observes and chooses IN/OUT.

**Backward induction:**
1. If A stays OUT -> B enters (50 > 0).
2. If A enters -> B stays out (0 > -20).
3. Knowing this, A chooses Enter (50 > 0).

**SPNE:** (A enters, B stays out) -- payoffs (50, 0).

**Non-credible threats:** The incumbent's threat to fight entry is not credible because accommodating is the optimal response once entry occurs -- backward induction reveals this.

**Key property:** SPNE always exists in finite extensive-form games and is always a NE, but not every NE is subgame perfect.

---

### 6.6 Repeated Games and the Folk Theorem

**Grim trigger strategy:** In a repeated game, cooperate as long as all players have cooperated in every previous period; if any player ever deviates, punishment (reversion to the stage-game Nash equilibrium) is triggered forever (Friedman, 1971).

**Sustaining condition:** Cooperation is an SPNE under grim trigger if the discount factor $\delta$ satisfies:

$$ \delta \geq \frac{\pi_{\text{dev}} - \pi_{\text{coop}}}{\pi_{\text{dev}} - \pi_{\text{pun}}} $$

where $\pi_{\text{dev}}$ is the one-period gain from deviation, $\pi_{\text{coop}}$ is the cooperative per-period payoff, and $\pi_{\text{pun}}$ is the punishment (NE) payoff.

**Intuition:** The short-run gain from cheating must be outweighed by the long-run loss from permanent punishment. For $\delta \to 1$ (very patient players), almost any cooperative outcome can be sustained.

**Exam Question -- Repeated Game with Grim Trigger (46 Final Q5b):**

Stage game payoff matrix:

```
            Column Player
          Left    Middle   Right
Row    --------------------------
Up     | (3,3)   (0,5)    (1,1)
Down   | (5,0)   (1,1)    (2,2)*
```

The unique stage-game NE is (Down, Right) = (2,2).

**Sustaining cooperative outcome (Up, Left) = (3,3) with grim trigger:**
- **Grim trigger:** Play (Up, Left) as long as no deviation; if anyone deviates, revert to (Down, Right) forever.
- **Cooperation PV:** $3 + 3\delta + 3\delta^2 + \ldots = 3/(1-\delta)$
- **Deviation PV:** $5 + 2\delta + 2\delta^2 + \ldots = 5 + 2\delta/(1-\delta)$

**Cooperate if:** $3/(1-\delta) \ge 5 + 2\delta/(1-\delta)$
$3 \ge 5(1-\delta) + 2\delta$ -> $3 \ge 5 - 3\delta$ -> $3\delta \ge 2$ -> $\delta \ge 2/3$

So (Up, Left) = (3,3) can be sustained as SPNE with grim trigger if $\delta \ge 2/3$.

**Folk Theorem:** For sufficiently patient players ($\delta \to 1$), any feasible, individually rational payoff vector can be sustained as an SPNE of the infinitely repeated game.

**Caution:** Grim trigger is not renegotiation-proof -- once triggered, the punishment phase continues even though both would prefer to renegotiate and return to cooperation. Trigger strategies also require observability -- if firms can secretly undercut, cooperation breaks down even with high $\delta$.

---

### 6.7 The Backward Induction Paradox

**Paradox of backward induction (46 Final Q6a):** In finite-horizon games of perfect information, backward induction predicts cooperation unravels from the end. In a finitely repeated PD:

- Last period T: both defect (dominant strategy).
- Period T-1: knowing T is defection, why cooperate? Both defect.
- This unravels to defection in EVERY period, even though both would prefer mutual cooperation.

**The paradox:** The prediction contradicts experimental evidence -- people cooperate in finitely repeated PDs, at least in early periods.

**Can multiple Nash equilibria help? (46 Final Q6a, part ii)**

Yes. The paradox arises when the stage game has a **unique** Nash equilibrium. If there are **multiple** NE, backward induction may not yield a unique prediction:

1. **Multiple equilibria change the endgame.** If the stage game has a cooperative NE (alongside the non-cooperative one), the unraveling argument weakens because the terminal period may not force defection.
2. **Bargaining models:** In finite-horizon bargaining, if there are multiple equilibria (e.g., multiple acceptable splits), the unique backward induction solution may break down.
3. **Coordination on "good" equilibrium:** If both players prefer one equilibrium, they may coordinate on it, and punishment for deviation can sustain cooperation even in finite games.
4. **Reputation effects:** With incomplete information about types, the unraveling is limited -- players may maintain cooperation to build reputation.

**Example:** In a finitely repeated game where the stage game has both (Cooperate, Cooperate) and (Defect, Defect) as NE, players can sustain cooperation throughout because the "punishment" of reverting to the bad equilibrium deters deviation.

**Resolution paths:**
1. **Multiple stage-game Nash equilibria:** Punishment strategies sustain cooperation.
2. **Incomplete information:** A small probability of a "cooperative type" limits unraveling (Kreps-Milgrom-Roberts-Wilson, 1982).
3. **Bounded rationality:** Real players may not perform full backward induction.

---

### 6.8 The Centipede Game

**Centipede game (Rosenthal, 1981; 46 Final Q6b):** A sequential-move game where two players alternately choose to "Take" (end the game) or "Pass" (increase the pot for the next player). The pot doubles with each Pass; Taking gives the current player a larger share now; Passing risks the opponent taking an even larger share later.

**Structure (simplified 4-move version):**

Round 1: Player 1 chooses Take (T) or Pass (P)
- T -> (1, 0)
- P -> Round 2

Round 2: Player 2 chooses T or P
- T -> (0, 3)
- P -> Round 3

Round 3: Player 1 chooses T or P
- T -> (3, 1)
- P -> Round 4

Round 4: Player 2 chooses T or P (automatic -- last round)
- T -> (1, 4)
- P -> (2, 2)

**Backward induction solution:**
Round 4: P2 chooses Take (4 > 2).
Round 3: P1 chooses Take (3 > 1, knowing P2 will take in R4).
Round 2: P2 chooses Take (3 > 1, knowing P1 will take in R3).
Round 1: P1 chooses Take (1 > 0, knowing P2 will take in R2).

**Prediction:** P1 takes in Round 1 -> (1,0). Both get very little.

**Paradox:** Both players would be better off if they passed all the way to the end (2,2), but backward induction says they won't. The cooperative outcome is achievable only if neither acts "rationally" in the backward-induction sense.

**Overcoming the paradox (46 Final Q6b -- "if players initially co-operate and play across, the paradox is partially overcome"):**

1. **Partial cooperation:** If players initially cooperate (Pass) in early rounds, they may reach later rounds where the pot is much larger, making continued cooperation more attractive.
2. **Incomplete information (reputation):** If there's a small probability that P1 is "altruistic" (always passes), P2 may Pass in early rounds to find out, and P1 may Pass to build reputation. This limits the unraveling (Kreps-Milgrom-Roberts-Wilson, 1982).
3. **Multiple Nash equilibria:** The centipede game has multiple NE. Backward induction selects one, but alternative equilibria (e.g., both always Pass) can be sustained if each believes the other will Pass.
4. **Bounded rationality:** Real players may not perform full backward induction, especially in long games. Experiments show most pairs reach the middle or end before someone Takes.
5. **Social preferences:** Fairness, reciprocity, and altruism lead players to Pass more often than predicted.

**Experimental evidence (McKelvey & Palfrey, 1992):** Subjects Pass far more often than backward induction predicts, especially in early rounds. The Kreps incomplete-information model (a small chance of an "altruistic" type) explains the observed pattern well.

**Key insight:** The centipede game is the canonical illustration of the gap between theoretical backward induction and actual human behaviour. Backward induction is a powerful logical principle, but humans deviate from it systematically. The paradox is that individually rational choices (taking) produce a collectively inferior outcome. If players initially cooperate and Pass, they partially overcome the paradox by reaching payoff-superior outcomes that would be eliminated by strict backward induction.

---

### 6.9 Game Theory -- Quick Reference Table

| Concept | Key Condition | Formula / Criterion |
|---------|--------------|--------------------|
| Nash Equilibrium | No unilateral profitable deviation | $u_i(s_i^*, s_{-i}^*) \ge u_i(s_i, s_{-i}^*) \ \forall s_i$ |
| Dominant Strategy | Best response to every opponent strategy | $u_i(s_i^*, s_{-i}) > u_i(s_i, s_{-i}) \ \forall s_i, s_{-i}$ |
| Bertrand BR (differentiated) | $\partial\pi_i/\partial p_i = 0$ | $p_i = 30 + p_j/4$ (example) |
| Cournot BR | $\partial\pi_i/\partial q_i = 0$ | $q_i = (a - c - bq_j)/(2b)$ |
| SPNE | NE in every subgame | Backward induction algorithm |
| Grim Trigger | $\delta \ge (\pi_{dev} - \pi_{coop})/(\pi_{dev} - \pi_{pun})$ | $\delta^* = 2/3$ in PD example |
| Folk Theorem | $\delta$ sufficiently close to 1 | Any feasible, IR payoff sustainable |

---

## <a id="topic-7"></a>Topic 7: Externalities & Public Goods

### 7.1 Overview: Market Failure and Externalities

**Definition:** An externality exists when the production or consumption of a good directly affects the welfare of others outside the price system — the cost or benefit is uncompensated (Koutsoyiannis, Ch.23; Munoz-Garcia, SS8.1, p.530).

**Classification:**

| Dimension | Type | Example |
|-----------|------|---------|
| **Sign** | Positive (benefit spillover) | Vaccination, R&D, education |
| | Negative (cost spillover) | Pollution, smoking, loud music |
| **Source** | Production externality | Steel mill pollution harms fishery |
| | Consumption externality | Bandwagon, snob, Veblen effects |
| **Scope** | Private (between agents) | Steel-fishery |
| | Public (many affected) | Climate change, clean air |

**Fundamental problem:** Externalities are a **missing-market** problem. There is no price for the spillover effect, so the competitive equilibrium violates the First Welfare Theorem — Pareto optimality is not achieved. (See Topic 7.5 for detailed analysis.)

---

### 7.2 The Steel-Fishery Model: Canonical Production Externality

**Setup (Munoz-Garcia, SS8.1, p.531):**

A steel mill (S) produces steel $S$ and pollution $x$ as a byproduct. A downstream fishery (F) is harmed by the pollution.

- Steel mill's cost: $C_S(S,x)$ with $\partial C_S/\partial x < 0$ (pollution reduces steel costs)
- Fishery's cost: $C_F(F,x)$ with $\partial C_F/\partial x > 0$ (pollution raises fishing costs)
- Both firms are price-takers: $P_S$, $P_F$ given

#### (i) Unregulated (Individual Profit Maximisation)

**Steel mill:**
$$\pi_S = P_S \cdot S - C_S(S, x)$$

FOCs:
$$\frac{\partial \pi_S}{\partial S} = P_S - \frac{\partial C_S}{\partial S} = 0 \quad\Rightarrow\quad P_S = MC_S$$
$$\frac{\partial \pi_S}{\partial x} = -\frac{\partial C_S}{\partial x} = 0 \quad\Rightarrow\quad \frac{\partial C_S}{\partial x} = 0$$

The steel mill uses pollution until the marginal private benefit of pollution ($-\partial C_S/\partial x$) falls to zero. It ignores the damage imposed on the fishery.

**Fishery:**
$$\pi_F = P_F \cdot F - C_F(F, x)$$
$$\frac{\partial \pi_F}{\partial F} = P_F - \frac{\partial C_F}{\partial F} = 0 \quad\Rightarrow\quad P_F = MC_F$$

The fishery treats pollution as an exogenous cost.

**Result:** Pollution level $x^*$ is **too high** relative to the social optimum $x^\circ$ because the steel mill internalises only its private cost, not the external damage.

#### (ii) Joint Profit Maximisation (Merger)

Maximise: $\Pi_J = P_S S - C_S(S, x) + P_F F - C_F(F, x)$

FOCs for $S$ and $F$ unchanged. For pollution:
$$\frac{\partial \Pi_J}{\partial x} = -\frac{\partial C_S}{\partial x} - \frac{\partial C_F}{\partial x} = 0$$
$$\Rightarrow \boxed{-\frac{\partial C_S}{\partial x} = \frac{\partial C_F}{\partial x}}$$

The social optimum $x^\circ$ equates the marginal benefit of pollution to the steel mill (cost saving) with the marginal damage to the fishery. Since $\partial C_F/\partial x > 0$, we require $-\partial C_S/\partial x > 0$ — less pollution than in the unregulated case: $x^\circ < x^*$.

```
MC ($)
  |    MSC = MC_S + MC_F (social marginal cost)
  |         /
  |        /   MC_S (private marginal cost)
  |       /   /
  |      /   /
  |     /  /
  |    / /
  |   //
  |  /
  | /
  |/___________________  Pollution (x)
      x(degr)   x(ast)
```

- $x^*$: unregulated equilibrium (steel mill ignores damage)
- $x^\circ$: social optimum (marginal benefit = marginal damage)
- Shaded triangle between $x^\circ$ and $x^*$ = deadweight loss

#### (iii) Pigouvian Tax (Pigou, 1920)

A per-unit tax on pollution $\tau$ internalises the externality:

$$\tau^* = \left. \frac{\partial C_F}{\partial x} \right|_{x = x^\circ}$$

**Effect:** The steel mill's new FOC becomes $-\partial C_S/\partial x = \tau$. Setting $\tau = \partial C_F/\partial x$ at $x^\circ$ aligns private incentives with social optimality.

**Pigouvian Subsidy (for positive externalities):** A per-unit subsidy $s$ equal to the marginal external benefit at the social optimum encourages under-provided activities (e.g., R&D, vaccination).

#### (iv) Coase Theorem (Coase, 1960)

**Theorem:** If property rights are well-defined and transaction costs are zero, private bargaining between affected parties achieves the efficient outcome regardless of the initial allocation of rights.

**Case A — Fishery has right to clean water:**
- Fishery can demand zero pollution.
- Steel mill can pay the fishery to allow some pollution.
- They bargain to $x^\circ$ where $-\partial C_S/\partial x = \partial C_F/\partial x$.
- Steel mill pays compensation between $\partial C_F/\partial x$ and $-\partial C_S/\partial x$ per unit.

**Case B — Steel mill has right to pollute:**
- Steel mill can pollute up to $x^*$.
- Fishery can pay the steel mill to reduce pollution.
- They bargain to the same $x^\circ$.
- Fishery pays steel mill between $-\partial C_S/\partial x$ and $\partial C_F/\partial x$ per unit of reduction.

**Key insight:** The efficient pollution level $x^\circ$ is identical in both cases — only the distribution of welfare (who pays whom) differs.

**Why Coase fails in practice:**
1. **High transaction costs** — many parties cannot bargain costlessly
2. **Free-rider problem** — diffuse victims have incentive to free-ride on others' bargaining
3. **Asymmetric information** — parties may not know the true damage/benefit
4. **Legal constraints** — property rights may be poorly defined or unenforceable

**Exam Tip:** Draw the marginal benefit (to steel mill, downward-sloping) and marginal cost (to fishery, upward-sloping) diagram. The social optimum equates MB = MC. Shade the DWL from excessive pollution. State Coase Theorem explicitly, then immediately give its limitations.

---

### 7.3 Consumption Externalities

**Definition (Leibenstein, 1950):** One consumer's utility depends on others' consumption. Formalisation: $U_i = U_i(X_i, Y_i, X_j, Y_j)$.

| Effect | Sign | Description | Demand Effect | Example |
|--------|------|-------------|---------------|---------|
| **Bandwagon** | Positive | Demand increases as others consume | More elastic | Smartphones, social media |
| **Snob** | Negative | Demand falls as others consume | Less elastic | Luxury goods, art |
| **Veblen** | Mixed | Demand increases with price (status signal) | Upward-sloping segment | Designer handbags |

**Bandwagon effect:** "Keeping up with the Joneses" — the desire to conform. Market demand becomes more elastic (reinforcing price changes). Network effects.

**Snob effect:** The desire for exclusivity. Market demand becomes less elastic — snobs pay a premium for scarcity. A price cut may reduce demand (if it brings in the masses).

**Veblen effect** (Veblen, 1899): Conspicuous consumption — the good itself is a status signal, so demand can slope upward over some range.

**Significance for GE:** These externalities violate assumption 3 of the $2\times 2\times 2$ model (independent preferences). The competitive equilibrium is no longer Pareto-optimal — the First Welfare Theorem fails.

**Exam Tip:** Draw the three demand curves relative to the normal demand curve. Bandwagon rotates D outward (more elastic), snob rotates D inward (less elastic), Veblen creates a backward-bending segment.

---

### 7.4 Public Goods & Common Resources

#### 7.4.1 Taxonomy of Goods

| | Excludable | Non-Excludable |
|--|-----------|----------------|
| **Rival** | Private good (food, clothing) | Common resource (fisheries, grazing land) |
| **Non-Rival** | Club good (cable TV, toll road) | Public good (national defence, clean air) |

#### 7.4.2 Public Goods

**Characteristics:**
- **Non-rivalry:** One person's consumption does not reduce the quantity available for others. Marginal cost of an additional user = 0.
- **Non-excludability:** Impossible (or prohibitively costly) to prevent anyone from consuming the good.

**The Free-Rider Problem:** Because individuals cannot be excluded from consuming a public good, each has an incentive to let others pay for it and enjoy the benefits for free. Result: the good is **under-provided** (or not provided at all) by the private market.

**Samuelson Condition for Efficient Provision (Samuelson, 1954):**

For a public good $G$ and private good $X$, efficiency requires:
$$\sum_{i=1}^n \text{MRS}^i_{G,X} = \text{MRT}_{G,X}$$

The sum of individuals' marginal willingness to pay (MRS) must equal the marginal cost of production (MRT). This differs from private goods, where each individual's MRS = MRT individually.

**Example:** Street lighting. If 100 residents each value it at $10, the total benefit is $1,000. If the cost is $500, it is efficient to provide it. But each resident has an incentive to free-ride, hoping others will pay — the private market may fail to provide it.

**Solutions to free-rider problem:**
1. **Government provision** (funded by compulsory taxation)
2. **Coase bargaining** (if few parties affected)
3. **Clubbing** (create excludability through technology or membership)
4. **Social norms / altruism**

#### 7.4.3 Common Resources & The Tragedy of the Commons

**Tragedy of the Commons (Hardin, 1968):** A shared resource is over-exploited when each user acts independently according to self-interest, contrary to the common good.

**Formal mechanism (Munoz-Garcia, SS8.3, p.552):**

Each user $i$ chooses extraction $q_i$ to maximise private benefit $B_i(q_i)$, while the cost of resource depletion $C(\sum_j q_j)$ is shared by all.

**Private optimum (Nash equilibrium):**
$$B_i'(q_i^*) = C'(Q^*)$$
Each user equates marginal private benefit to marginal private cost, ignoring the external cost on others.

**Social optimum:**
$$B_i'(q_i^\circ) = \sum_j C'(Q^\circ) = \text{MSC}$$
The sum of marginal costs across all users is the marginal social cost.

Since $C'(Q^*) < \sum_j C'(Q^*)$, each user extracts too much: $q_i^* > q_i^\circ$ and $Q^* > Q^\circ$.

**Example — Fishing commons:** A lake open to all fishers. Each fisher catches as many fish as possible before others do. Individual rationality: "If I don't catch them, someone else will." Result: overfishing, stock collapse, everyone loses.

**Solutions:**
1. **Private property rights** (assign fishing quotas or lake ownership — Coase)
2. **Pigouvian tax** (tax per unit extracted equal to marginal social damage)
3. **Regulation** (catch limits, seasonal closures, tradable permits)

**Exam Tip:** Link the Tragedy to negative production externalities — each user's extraction imposes a cost on all others. The wedge between private and social marginal cost generates over-exploitation.

---

### 7.5 Why Externalities Break Pareto Optimality

**Short answer:** Yes — consumption and production externalities destroy the Pareto conditions of the $2\times 2\times 2$ model.

**Reasoning (Koutsoyiannis, Ch.23, p.532):**

The $2\times 2\times 2$ model explicitly assumes away externalities (assumption 3: independent preferences, no production externalities). When externalities exist:

1. **Pareto conditions fail:**
   - Standard condition: $\text{MRS}^A_{xy} = \text{MRS}^B_{xy} = P_x/P_y$
   - With externalities: $U_A = U_A(X_A, Y_A, U_B)$ or $U_A = U_A(X_A, Y_A, X_B, Y_B)$
   - MRS equality is **necessary but not sufficient** — each consumer's utility depends directly on others' consumption, bypassing the price system.

2. **Externality = missing market:**
   - The spillover effect has no market price.
   - The competitive equilibrium (requiring complete markets) cannot be Pareto-optimal.
   - First Welfare Theorem fails.

3. **Mathematical breakdown:**
   - $U_A = U_A(X_A, Y_A, X_B, Y_B)$
   - Pareto efficiency requires additional conditions on cross-partials $\partial U_A/\partial X_B$ which are not captured by price ratios alone.

4. **Remedies:**
   - Pigouvian taxes/subsidies (create shadow price for externality)
   - Coase bargaining (simulate market through property rights)
   - Direct regulation

**Conclusion:** "When externalities exist, the conditions for Pareto optimality are not fulfilled" (Koutsoyiannis, Ch.23). The GE solution may still **exist** but will **not be Pareto-optimal**.

---

### 7.6 Solved Questions from Past Exams

#### Question 7(a) — 46 Final, Part C: Tragedy of the Commons [3 marks]

**Q:** What do we mean by Tragedy of Commons? Explain with an example.

**A:** The Tragedy of the Commons (Hardin, 1968) describes a situation where a shared resource is over-exploited because each individual, acting rationally in their own self-interest, depletes the resource to the detriment of the entire community. The fundamental cause is the absence of exclusive property rights — each user captures the full private benefit of their extraction but bears only a fraction of the social cost.

**Formal mechanism:** For symmetric users $i=1,\dots,n$, each chooses extraction $q_i$ to maximise $B_i(q_i) - C(Q)/n$ where $Q = \sum q_i$ is total extraction. The private optimum sets $B_i' = C'/n$ while the social optimum requires $B_i' = C'$. Since $C'/n < C'$, the private equilibrium involves over-extraction.

**Example:** A grazing pasture open to all herders. Each herder adds one more animal, capturing the full market value of that animal but sharing the cost of overgrazing with all other herders. Individual rationality leads to overgrazing, pasture degradation, and reduced welfare for all.

**Solutions:** Private property rights (assign ownership), Pigouvian tax (tax per animal equal to marginal damage), or regulatory quotas.

---

#### Question 7(b) — 46 Final, Part C: Pollution Externalities (Steel-Fishery) [11 marks]

**Q:** Two firms — Firm A (upstream steel mill, produces pollution $x$) and Firm B (downstream fishery, harmed by pollution). Show the private and social costs and production levels under: (i) individual profit maximisation, (ii) joint profit maximisation, and (iii) different property rights.

**A:** This is the canonical steel-fishery model. See SS7.2 for the full treatment.

**(i) Individual profit maximisation (unregulated):**

Let $C_A(q_A, x)$ be Firm A's cost function ($\partial C_A/\partial x < 0$ — pollution reduces costs) and $C_B(q_B, x)$ be Firm B's cost function ($\partial C_B/\partial x > 0$ — pollution raises costs).

Firm A's FOC for pollution: $-\partial C_A/\partial x = 0$. Firm A chooses pollution until the marginal private benefit ($-\partial C_A/\partial x$) is zero, **ignoring the damage** $-\partial C_B/\partial x > 0$ imposed on Firm B. Result: $x^*$ is too high — excessive pollution.

Firm A's FOC for output: $P_A = MC_A$. Firm B's FOC: $P_B = MC_B$.

**(ii) Joint profit maximisation (merger):**

Joint profit: $\Pi_J = P_A q_A - C_A(q_A, x) + P_B q_B - C_B(q_B, x)$.

FOC for pollution: $-\partial C_A/\partial x - \partial C_B/\partial x = 0 \Rightarrow -\partial C_A/\partial x = \partial C_B/\partial x$.

The social optimum equates the marginal benefit of pollution (cost saving to A) with the marginal damage (cost increase to B). This yields $x^\circ < x^*$ — less pollution.

**(iii) Different property rights (Coase Theorem):**

- **If B has right to clean water:** A must pay B for the right to pollute. They bargain to $x^\circ$ where $-\partial C_A/\partial x = \partial C_B/\partial x$. A pays compensation per unit between $\partial C_B/\partial x$ and $-\partial C_A/\partial x$.
- **If A has right to pollute:** B must pay A to reduce pollution. They bargain to the **same** $x^\circ$. B pays A per unit of reduction between $-\partial C_A/\partial x$ and $\partial C_B/\partial x$.
- **Coase Theorem:** The efficient pollution level is identical regardless of the initial rights assignment. Only the distribution of welfare (who pays whom) differs.

**Conclusion:** The unregulated equilibrium produces excessive pollution ($x^* > x^\circ$) with deadweight loss equal to the area between marginal benefit and marginal damage curves over $[x^\circ, x^*]$. Joint profit maximisation (or Coase bargaining with zero transaction costs) restores efficiency.

---

#### Question 2(b) — 46 Final, Part A: External Economies & Diseconomies (Tax/Subsidy) [7 marks]

**Q:** Firm 1 experiences external economies and Firm 2 experiences external diseconomies. Both sell in a competitive market at $p_1 = p_2 = 15$. Cost functions:
$$C_1 = 0.1q_1^2 + 5q_1 - 0.1q_2^2$$
$$C_2 = 0.2q_2^2 + 7q_2 + 0.025q_1^2$$

Show how Pareto optimality can be achieved through appropriate taxes and subsidies. Find the social dividend.

**A:**

**Step 1: Identify the externalities.**

- $C_1$ contains $-0.1q_2^2$: Firm 1's costs **decrease** with Firm 2's output — **external economy** (positive production externality from 2 to 1).
- $C_2$ contains $+0.025q_1^2$: Firm 2's costs **increase** with Firm 1's output — **external diseconomy** (negative production externality from 1 to 2).

**Step 2: Unregulated (private) profit maximisation.**

Firm 1: $\pi_1 = 15q_1 - 0.1q_1^2 - 5q_1 + 0.1q_2^2$
FOC: $\partial\pi_1/\partial q_1 = 15 - 0.2q_1 - 5 = 0 \Rightarrow 10 - 0.2q_1 = 0 \Rightarrow q_1^* = 50$

Firm 2: $\pi_2 = 15q_2 - 0.2q_2^2 - 7q_2 - 0.025q_1^2$
FOC: $\partial\pi_2/\partial q_2 = 15 - 0.4q_2 - 7 = 0 \Rightarrow 8 - 0.4q_2 = 0 \Rightarrow q_2^* = 20$

**Unregulated outcome:** $(q_1^*, q_2^*) = (50, 20)$.
Private profits:
$\pi_1^* = 15(50) - 0.1(2500) - 5(50) + 0.1(400) = 750 - 250 - 250 + 40 = 290$
$\pi_2^* = 15(20) - 0.2(400) - 7(20) - 0.025(2500) = 300 - 80 - 140 - 62.5 = 17.5$
Joint profit: $290 + 17.5 = 307.5$

**Step 3: Social (joint) optimum.**

Joint profit: $\Pi_J = 15q_1 - 0.1q_1^2 - 5q_1 + 0.1q_2^2 + 15q_2 - 0.2q_2^2 - 7q_2 - 0.025q_1^2$

Simplify: $\Pi_J = 10q_1 - 0.125q_1^2 + 8q_2 - 0.1q_2^2$

FOCs:
$\partial\Pi_J/\partial q_1 = 10 - 0.25q_1 = 0 \Rightarrow q_1^\circ = 40$
$\partial\Pi_J/\partial q_2 = 8 - 0.2q_2 = 0 \Rightarrow q_2^\circ = 40$

**Social optimum:** $(q_1^\circ, q_2^\circ) = (40, 40)$.

Joint profit at social optimum:
$\Pi_J^\circ = 10(40) - 0.125(1600) + 8(40) - 0.1(1600) = 400 - 200 + 320 - 160 = 360$

**Step 4: Pigouvian taxes/subsidies to achieve the social optimum.**

We need to design taxes/subsidies $t_1(q_1)$ and $t_2(q_2)$ such that each firm's private FOC yields the social optimum quantities.

For Firm 1, the social marginal benefit of increasing $q_1$ includes the **external damage** on Firm 2: $\partial C_2/\partial q_1 = 0.05q_1$. At $q_1^\circ = 40$, this equals $0.05(40) = 2$.

Firm 1 ignores this cost. We impose a **Pigouvian tax** on Firm 1:
$$t_1 = \left.\frac{\partial C_2}{\partial q_1}\right|_{q_1^\circ} = 0.05 \times 40 = 2 \text{ per unit of } q_1$$

Firm 1's new FOC with tax: $15 - \partial C_1/\partial q_1 - t_1 = 15 - (0.2q_1 + 5) - 2 = 0$
$15 - 0.2q_1 - 5 - 2 = 0 \Rightarrow 8 - 0.2q_1 = 0 \Rightarrow q_1 = 40$ ✓

For Firm 2, the social marginal benefit of increasing $q_2$ includes the **external economy** for Firm 1: $-\partial C_1/\partial q_2 = 0.2q_2$. At $q_2^\circ = 40$, this equals $0.2(40) = 8$.

Firm 2 does not receive this benefit. We provide a **Pigouvian subsidy** to Firm 2:
$$s_2 = \left.-\frac{\partial C_1}{\partial q_2}\right|_{q_2^\circ} = 0.2 \times 40 = 8 \text{ per unit of } q_2$$

Firm 2's new FOC with subsidy: $15 - \partial C_2/\partial q_2 + s_2 = 15 - (0.4q_2 + 7) + 8 = 0$
$15 - 0.4q_2 - 7 + 8 = 0 \Rightarrow 16 - 0.4q_2 = 0 \Rightarrow q_2 = 40$ ✓

**Optimal policy:** Tax Firm 1 at $t_1 = 2$ per unit; subsidise Firm 2 at $s_2 = 8$ per unit.

**Step 5: Social dividend (gain from intervention).**

Social dividend = Joint profit at optimum - Joint profit at unregulated equilibrium
$= 360 - 307.5 = 52.5$

This $52.5$ is the potential welfare gain from internalising the externalities. It represents the deadweight loss eliminated by the tax/subsidy policy.

**Final allocation with tax/subsidy:**
- Firm 1 produces $q_1 = 40$, pays tax of $2 \times 40 = 80$
- Firm 2 produces $q_2 = 40$, receives subsidy of $8 \times 40 = 320$
- Private profits after tax/subsidy:
  - $\pi_1^{\text{after tax}} = [15(40) - 0.1(1600) - 5(40) + 0.1(1600)] - 80 = [600 - 160 - 200 + 160] - 80 = 400 - 80 = 320$
  - $\pi_2^{\text{after sub}} = [15(40) - 0.2(1600) - 7(40) - 0.025(1600)] + 320 = [600 - 320 - 280 - 40] + 320 = -40 + 320 = 280$
- Both firms are better off than under unregulated competition ($\pi_1 = 320 > 290$, $\pi_2 = 280 > 17.5$).

**Exam Tip:** First classify each externality by sign (positive = economy, negative = diseconomy). Tax the source of the negative externality (Firm 1's output harms Firm 2), subsidise the source of the positive externality (Firm 2's output helps Firm 1). The social dividend measures the welfare gain from intervention.

---

**Key Formulas — Externalities & Public Goods**

| Concept | Formula |
|---------|---------|
| Social optimum condition | $-\partial C_S/\partial x = \partial C_F/\partial x$ (production externality) |
| Pigouvian tax | $\tau^* = \partial C_F/\partial x$ at $x = x^\circ$ |
| Coase Theorem | Zero TC + property rights $\Rightarrow$ bargaining $\Rightarrow$ efficiency |
| Samuelson condition (public good) | $\sum_i \text{MRS}^i_{G,X} = \text{MRT}_{G,X}$ |
| Tragedy of Commons (private FOC) | $B_i'(q_i^*) = C'(Q^*)$ |
| Tragedy of Commons (social FOC) | $B_i'(q_i^\circ) = \sum_j C'(Q^\circ)$ |

---

## <a id="topic-8"></a>Topic 8: Information & Trade

### 8.1 Asymmetric Information & Adverse Selection

**Definition:** Asymmetric information arises when one party to a transaction has superior information about a relevant characteristic (Akerlof, 1970; Munoz-Garcia, SS8.4, p.564).

**Types of asymmetric information problems:**

| Problem | Information | Timing | Example |
|---------|------------|--------|---------|
| **Adverse selection** | Hidden characteristic | Before transaction | Used cars, insurance |
| **Moral hazard** | Hidden action | After transaction | Careless driving after insuring |
| **Principal-agent** | Hidden effort | During relationship | Manager-shareholder conflicts |

#### 8.1.1 The Market for "Lemons" (Akerlof, 1970)

**Setup:**
- Used car market: two types — "peaches" (high quality) and "lemons" (low quality).
- Sellers know true quality; buyers cannot distinguish ex ante.
- 50% peaches (value $10,000 to buyer, $8,000 to seller).
- 50% lemons (value $5,000 to buyer, $3,000 to seller).

**Full information benchmark:** Two separate markets clear — peaches trade at $8,000-$10,000; lemons at $3,000-$5,000.

**Asymmetric information:** Buyers know only the **average** quality. Willingness to pay:
$$E[V] = 0.5 \times 10,000 + 0.5 \times 5,000 = 7,500$$

**Adverse selection mechanism:**
1. Market price = $7,500 (reflecting average quality).
2. Peach owners value their cars at $8,000 (reservation price). Since $7,500 < 8,000$, they **exit** the market.
3. Only lemons remain. Buyers update: expected value = $5,000.
4. Lemon market clears at ~$4,000 (between $3,000 and $5,000).

**Result:** High-quality goods disappear from the market — **adverse selection** drives out the good.

**Complete market collapse:** If the proportion of lemons is high enough that $E[V]$ falls below the reservation price of even lemon sellers, the market collapses entirely — no trade occurs.

**General condition for market collapse:**
$$E[V] < \max\{\text{reservation price of sellers}\}$$

**Solutions:**
1. **Signalling** — informed party reveals type (warranties, certifications, education)
2. **Screening** — uninformed party offers a menu of contracts to separate types
3. **Reputation mechanisms** — repeat interactions sustain quality
4. **Government intervention** — mandatory disclosure, quality standards, licensing

**Exam Tip:** This is Akerlof (1970, Nobel Prize 2001). The key intuition: asymmetric information can destroy markets. Show the arithmetic: expected value calculation $\rightarrow$ adverse selection $\rightarrow$ market shrinkage/ collapse.

---

### 8.2 Signalling — The Spence Model of Education

**Setup (Spence, 1973; Nobel Prize 2001; Munoz-Garcia, SS8.5, pp.573-578):**

- Workers have private information about their productivity type: High (H) or Low (L).
- Productivity: $q_H > q_L$ (H contributes more to firm profits).
- Education $e \in \{0,1\}$ is costly but does **not** enhance productivity — it is a pure **signal** of type.
- Cost of education: $c_H$ for H-types, $c_L$ for L-types, with **single-crossing property**: $c_L > c_H$.
- Firms observe education but not type; wages are set competitively based on beliefs.

**Game structure:**
1. Nature chooses worker type (H or L) — worker knows own type, firm does not.
2. Worker chooses education level $e \in \{0,1\}$.
3. Firm observes $e$, updates beliefs $\mu(H|e)$, offers wage $w(e)$.
4. Payoffs: Worker gets $w(e) - c(e)$; Firm gets productivity minus wage (zero profit in equilibrium).

#### Separating Equilibrium

H-types acquire education ($e=1$), L-types do not ($e=0$).

**Firm beliefs (on equilibrium path):** $\mu(H|e=1) = 1$, $\mu(H|e=0) = 0$.
**Wages:** $w(1) = q_H$, $w(0) = q_L$.

**Incentive compatibility conditions:**

H-type prefers $e=1$: $w(1) - c_H \ge w(0)$ $\Rightarrow$ $q_H - c_H \ge q_L$
L-type prefers $e=0$: $w(0) \ge w(1) - c_L$ $\Rightarrow$ $q_L \ge q_H - c_L$

Combined: $$\boxed{c_H \le q_H - q_L \le c_L}$$

The wage gap $w_H - w_L = q_H - q_L$ must lie in the interval $[c_H, c_L]$.

**Feasibility condition:** Single-crossing $c_L > c_H$ is **necessary** — otherwise L-types could mimic H-types, and signalling would break down.

#### Pooling Equilibrium

Neither type acquires education ($e=0$ for both).

**Firm beliefs:** $\mu(H|e=0) = \mu$ (population fraction of H-types).
**Wage:** $w(0) = \mu q_H + (1-\mu)q_L$.
**Off-equilibrium beliefs:** $\mu(H|e=1)$ must be sufficiently pessimistic (e.g., $\mu(H|e=1) = 0$) so that neither type deviates.

**Condition:** Both types prefer $e=0$: $w(0) \ge q_H - c_H$ (else H would deviate).

#### Welfare Analysis

| Equilibrium | Education cost | Sorting | Welfare vs Full Info |
|-------------|---------------|---------|---------------------|
| **Full information** | Zero | Perfect | First-best |
| **Separating** | $c_H$ (wasted) | Perfect | Second-best (wasteful signalling) |
| **Pooling** | Zero | None | Adverse selection persists |
| **Semi-separating** | Partial | Partial | Mixed |

**Key insight:** In the separating equilibrium, education is **socially wasteful** (it adds no productivity) but **privately beneficial** (it signals type). This is the fundamental inefficiency of signalling — resources are consumed purely to convey information.

**Screening vs Signalling:**
- **Signalling:** Informed party moves first (worker chooses education)
- **Screening:** Uninformed party moves first (firm offers contract menu)

**Refinements:** The Intuitive Criterion (Cho-Kreps, 1987) eliminates unreasonable pooling equilibria by requiring off-equilibrium beliefs to assign zero probability to types that could not possibly benefit from deviating.

**Exam Tip:** Draw the game tree (Nature $\rightarrow$ Worker $\rightarrow$ Firm). State the single-crossing condition explicitly: $c_L > c_H$ makes education a credible signal. The separating condition: $q_H - q_L \in [c_H, c_L]$.

---

### 8.3 International Trade: Tariffs, Quotas & VERs

#### 8.3.1 Basic Trade Model

**Setup:** A small open economy with:
- Domestic demand: $Q_d = a - bP$
- Domestic supply: $Q_s = cP - d$
- World price: $P_W$ (given, since country is small)

**Autarky equilibrium:** $Q_d = Q_s$.
**Free trade:** At $P_W < P_{\text{autarky}}$, the country imports: $M = Q_d(P_W) - Q_s(P_W) > 0$.

#### 8.3.2 Welfare Effects of a Tariff

A tariff $t$ raises domestic price to $P_T = P_W + t$.

**Welfare decomposition (relative to free trade):**

| Component | Change | Formula |
|-----------|--------|---------|
| Consumer surplus | Loss (negative) | $-\Delta CS = -\frac{1}{2}(P_T-P_W)(Q_d^{FT}+Q_d^T)$ |
| Producer surplus | Gain (positive) | $+\Delta PS = +\frac{1}{2}(P_T-P_W)(Q_s^{FT}+Q_s^T)$ |
| Tariff revenue | Gain (positive) | $+t \times M_T$ |
| **Net welfare** | Usually loss | DWL = production distortion + consumption distortion |

**Deadweight loss of tariff (two triangles):**

```
Price
  |         S_domestic
  |    a   /  b
P_T |----/----\----
  |   /  |    |\
P_W|--/---|---|-\---- P_W (world)
  | /    |    |  \
  |/_____|____|___\___ D_domestic
        Q_s  Q_s'   Q_d' Q_d    Quantity
         ^    ^      ^    ^
         |    |      |    |
       pre-  post-  post- pre-
       tariff tariff tariff tariff

Area a: Production distortion DWL = 1/2 * t * (Q_s^T - Q_s^{FT})
Area b: Consumption distortion DWL = 1/2 * t * (Q_d^{FT} - Q_d^T)
Total DWL = a + b
```

$$\text{DWL} = \frac{1}{2} t (\Delta Q_s + \Delta Q_d) = \frac{1}{2} t^2 \left( \frac{\Delta Q_s}{\Delta P} + \frac{\Delta Q_d}{\Delta P} \right)$$

#### 8.3.3 Tariff vs Quota vs VER

| Policy | Mechanism | Who Gets the Rent | Welfare |
|--------|-----------|-------------------|---------|
| **Tariff** | Tax on imports | Domestic government | DWL = two triangles |
| **Quota** | Physical limit on imports | Import licence holders (domestic if auctioned) | DWL + possible rent dissipation |
| **VER** | "Voluntary" export limit imposed by exporter | **Foreign exporters** | DWL + rent transferred abroad — worst |

**Voluntary Export Restraint (VER):** Equivalent to a quota whose rent is captured by **foreign producers**. This makes VER strictly worse than an equivalent tariff for the importing country — the same DWL triangles PLUS the quota rent goes abroad.

**Key Policy Insight:** Among the three trade restrictions achieving the same import reduction:
$$\text{Welfare loss: Tariff} < \text{Quota} < \text{VER}$$

#### 8.3.4 Stolper-Samuelson Theorem

**Theorem (Stolper & Samuelson, 1941):** An increase in the relative price of a good raises the real return to the factor used intensively in its production and lowers the real return to the other factor.

**Mechanism (Koutsoyiannis, p.505; Munoz-Garcia, SS6.6, p.404):**

If $X$ is labour-intensive and $Y$ is capital-intensive:
$$\frac{P_X}{P_Y} \uparrow \;\Rightarrow\; X\text{ expands, } Y\text{ contracts} \;\Rightarrow\; \frac{w}{r} \uparrow$$

**Magnification effect (Jones algebra):** Factor price changes are **magnified** relative to output price changes:
$$\hat{w} > \hat{P}_X > \hat{P}_Y > \hat{r}$$

where $\hat{x} = dx/x$ (proportional change).

**Distributional implication:** Trade benefits the abundant factor and harms the scarce factor. This is the central distributional result of the Heckscher-Ohlin trade model.

**Example:** When a developing country opens to trade, the price of its export good (labour-intensive) rises. This raises the wage $w$ but lowers the rental rate $r$ — labour gains, capital loses.

**Exam Tip:** Pair Stolper-Samuelson with the GE transmission mechanism (Topic 5). A taste shift toward X (labour-intensive) raises $P_X$, expands X, increases derived demand for labour, raises $w$, and lowers $r$ if Y (capital-intensive) contracts.

---

### 8.4 Solved Questions

#### Question 8(a) — 46 Final, Part C: Asymmetric Information & Market Disappearance [4 marks]

**Q:** Show that asymmetric information may lead to the disappearance of good from the market.

**A:** This is Akerlof's "Market for Lemons" (1970). Asymmetric information exists when sellers know the quality of their good but buyers cannot distinguish quality ex ante. Because buyers know only the average quality, they are willing to pay only the expected value:
$$E[V] = \mu V_H + (1 - \mu) V_L$$

If this expected value falls below the reservation price of high-quality sellers, those sellers **withdraw from the market**. This reduces the average quality of goods available, further lowering buyers' willingness to pay. The process feeds on itself:

Price reflects average quality $\rightarrow$ High-quality sellers exit $\rightarrow$ Average quality falls $\rightarrow$ Price falls further $\rightarrow$ More sellers exit $\rightarrow$ Possible complete market collapse.

**Numerical example (used car market):**
- 50% peaches (value: buyers $10,000, sellers $8,000)
- 50% lemons (value: buyers $5,000, sellers $3,000)
- Buyers offer $E[V] = 0.5(10,000) + 0.5(5,000) = 7,500$
- Peach owners require $\ge 8,000 \to$ they exit
- Only lemons remain at $3,000-5,000$

**Result:** High-quality goods disappear — the market for peaches vanishes entirely. If the proportion of lemons is high enough, even the lemon market may collapse. Asymmetric information thus can destroy markets that would function efficiently under full information.

**Solutions:** Signalling (warranties, certifications), screening (menus of contracts), reputation, mandatory disclosure.

---

#### Question 8(b) — 46 Final, Part C: Spence's Signalling Model of Education [10 marks]

**Q:** By using Michael Spence's Model of Education, explain how the level of education can work as a signal of the different productivity of workers.

**A:** See SS8.2 for the full theoretical treatment.

**Summary of the argument:**

**1. Basic setup (Spence, 1973):**
- Two types of workers: High productivity ($q_H$) and Low productivity ($q_L$), with $q_H > q_L$.
- Workers know their own type; firms cannot observe productivity directly.
- Workers can acquire education $e$ at cost $c(e)$ which differs by type: $c_L(e) > c_H(e)$ (single-crossing property).
- Education does NOT increase productivity — it is a pure signal.
- Firms offer wages based on observed education.

**2. How education works as a signal:**

Education is effective as a signal because it is **differentially costly**. The single-crossing property ($c_L > c_H$) means that acquiring education is relatively cheaper for high-productivity workers. This allows firms to infer type from education choice.

**3. Separating equilibrium condition:**

In a separating equilibrium, H-types acquire education ($e=1$) and L-types do not ($e=0$). Firms pay wages equal to expected productivity:
- $w(1) = q_H$ (educated workers are H)
- $w(0) = q_L$ (uneducated workers are L)

For this to be self-enforcing:
- H prefers $e=1$: $q_H - c_H \ge q_L$
- L prefers $e=0$: $q_L \ge q_H - c_L$

Combined: $c_H \le q_H - q_L \le c_L$

The wage premium for education ($q_H - q_L$) must be large enough to induce H-types to invest but not so large that L-types find it profitable to mimic.

**4. Intuition for why signalling works:**

Even though education adds no productive value, it conveys information because it is **costly to acquire** and the cost is correlated with productivity. L-types cannot mimic because they face higher education costs. The education level acts as a "separating device" — it sorts workers by type.

**5. Welfare implication:**

The separating equilibrium is **socially inefficient** — resources are spent on education that does not increase output. However, it is **privately beneficial** for H-types to signal. The total welfare under signalling is lower than under full information, but the market may still achieve separating because of the private returns to signalling.

**Conclusion:** Education signals productivity through its differential cost structure. The model explains why wage premiums for education may exceed the human capital gained — part of the return to education is a **signalling premium**.

---

#### Question 1 — Trade and Tariff: Numerical Problem (Answers Bank) [14 marks]

**Q:** Given domestic demand $Q_d = 250,000 - 100P$, domestic supply $Q_s = 250P - 30,000$, and world price $P_W = 600$, compute: (a) autarky equilibrium, (b) free trade imports, (c) welfare effects of a \$50 tariff, and (d) welfare effects of a VER of 20,000 units.

**A:**

**Step 1: Autarky equilibrium.**
$$250,000 - 100P = 250P - 30,000 \;\Rightarrow\; 280,000 = 350P \;\Rightarrow\; P_{\text{autarky}} = 800$$
$$Q_{\text{autarky}} = 250,000 - 100(800) = 170,000$$

**Step 2: Free trade ($P_W = 600$).**
$$Q_d(600) = 190,000,\; Q_s(600) = 120,000$$
$$\text{Imports} = 190,000 - 120,000 = 70,000$$

**Step 3: Tariff of \$50 ($P_T = 650$).**

| Measure | Calculation | Value |
|---------|------------|-------|
| $Q_d$ at $P=650$ | $250,000 - 100(650)$ | $185,000$ |
| $Q_s$ at $P=650$ | $250(650) - 30,000$ | $132,500$ |
| Imports | $185,000 - 132,500$ | $52,500$ |
| Tariff revenue | $50 \times 52,500$ | $+2,625,000$ |
| $\Delta CS$ | $-50 \times (190,000+185,000)/2$ | $-9,375,000$ |
| $\Delta PS$ | $+50 \times (120,000+132,500)/2$ | $+6,312,500$ |
| **Net welfare change** | $-9,375,000 + 6,312,500 + 2,625,000$ | **$-437,500$** |

**DWL decomposition:**
- Production distortion: $\frac12 \times 50 \times (132,500-120,000) = 312,500$
- Consumption distortion: $\frac12 \times 50 \times (190,000-185,000) = 125,000$
- Total DWL: $312,500 + 125,000 = 437,500$ ✓

**Step 4: VER of 20,000 units.**

At domestic price $P$: $Q_d - Q_s = 20,000$
$$(250,000 - 100P) - (250P - 30,000) = 20,000$$
$$280,000 - 350P = 20,000 \;\Rightarrow\; P_{\text{VER}} = 742.86$$

**Welfare effects of VER vs free trade:**

| Component | Calculation | Value |
|-----------|------------|-------|
| $\Delta CS$ | $-(742.86-600) \times (190,000+175,714)/2$ | $-26,122,450$ |
| $\Delta PS$ | $+(742.86-600) \times (120,000+155,715)/2$ | $+19,693,875$ |
| **Quota rent** (to foreign exporters) | $-(742.86-600) \times 20,000$ | **$-2,857,200$** |
| **Net welfare change** | $-26,122,450 + 19,693,875 - 2,857,200$ | **$-9,285,775$** |

**Comparison:**

| Policy | Price | Imports | Net Welfare Change vs FT |
|--------|-------|---------|------------------------|
| Free Trade | \$600 | 70,000 | 0 |
| Tariff (\$50) | \$650 | 52,500 | $-\$437,500$ |
| VER (20,000) | \$742.86 | 20,000 | $-\$9,285,775$ |

**Key insight:** The VER is **strictly worse** than the tariff. The tariff generates $2,625,000$ in domestic government revenue that offsets part of the consumer loss. Under the VER, that same revenue is captured by **foreign exporters**, making the net welfare loss over 20 times larger.

**Exam Tip:** Always compute autarky first. The DWL of a tariff = production distortion + consumption distortion triangles. The VER is equivalent to a tariff where the quota rent goes to foreigners — always note that this makes VERs worse than tariffs.

---

**Key Formulas — Information & Trade**

| Concept | Formula |
|---------|---------|
| Adverse selection (WTP) | $E[V] = \mu V_H + (1-\mu)V_L$ |
| Market collapse condition | $E[V] < \max\{\text{seller reservation prices}\}$ |
| Spence separating condition | $c_H \le w_H - w_L \le c_L$ (or $q_H - q_L \in [c_H, c_L]$) |
| Single-crossing property | $c_L > c_H$ (education costlier for L-types) |
| Autarky price | $Q_d(P) = Q_s(P)$ |
| Tariff DWL | $\frac12 t (\Delta Q_s + \Delta Q_d)$ |
| Stolper-Samuelson | $\hat{w} > \hat{P}_X > \hat{P}_Y > \hat{r}$ (magnification effect) |
| VER welfare loss | DWL + quota rent to foreigners |

---

## Appendix A: Exam Cheat Sheet — All Key Formulas

### Preferences & Utility

| Concept | Formula |
|---------|---------|
| Rationality | Completeness: $\forall x,y,\;x\succeq y\lor y\succeq x$; Transitivity: $x\succeq y\land y\succeq z\Rightarrow x\succeq z$ |
| Monotonicity | SM: $x_k\ge y_k\forall k,\;x_l>y_l\exists l\Rightarrow x\succ y$; M: $x_k>y_k\forall k\Rightarrow x\succ y$; LNS: $\forall x,\varepsilon>0\;\exists y:\|y-x\|<\varepsilon,\;y\succ x$ |
| Quasiconcavity | $u(\lambda x+(1-\lambda)y)\ge\min\{u(x),u(y)\}$; BH: $\begin{vmatrix}0&u_x&u_y\\ u_x&u_{xx}&u_{xy}\\ u_y&u_{yx}&u_{yy}\end{vmatrix}\ge0$ |
| Diminishing MRS | $\frac{dMRS}{dx}=\frac{u_x^2u_{yy}-2u_xu_yu_{xy}+u_y^2u_{xx}}{u_y^3}<0$ |

### UMP & EMP

| Concept | Formula |
|---------|---------|
| UMP | $\max_{x\ge0} u(x)$ s.t. $p\cdot x\le w$; Lagrangian: $\mathcal{L}=u(x)+\lambda(w-p\cdot x)$ |
| FOC | $u_{x_k}=\lambda p_k$; Tangency: $MRS_{ij}=p_i/p_j$ |
| Walrasian demand | $x(p,w)$: HD(0), $p\cdot x(p,w)=w$ |
| Indirect utility | $v(p,w)=u(x(p,w))$: HD(0), $\uparrow w$, $\downarrow p$, quasiconvex |
| Roy's identity | $x_k(p,w)=-\frac{\partial v/\partial p_k}{\partial v/\partial w}$ |
| EMP | $\min p\cdot x$ s.t. $u(x)\ge\bar u$; Shephard's: $\partial e(p,u)/\partial p_k=h_k(p,u)$ |
| Duality | $e(p,v(p,w))=w$; $v(p,e(p,u))=u$; $h(p,u)=x(p,e(p,u))$; $x(p,w)=h(p,v(p,w))$ |
| Slutsky | $\frac{\partial x_k}{\partial p_j}=\underbrace{\frac{\partial h_k}{\partial p_j}}_{\text{SE}}-\underbrace{x_j\frac{\partial x_k}{\partial w}}_{\text{IE}}$; $S(p,w)\equiv D_ph(p,u)$: NSD, symmetric, $Sp=0$ |

### Elasticities

| Concept | Formula |
|---------|---------|
| Point elasticity | $\varepsilon_{X,P} = \frac{\partial X}{\partial P} \cdot \frac{P}{X}$ |
| Arc elasticity | $\varepsilon_{X,P}^{\text{arc}} = \frac{\Delta X}{\Delta P} \cdot \frac{P_1+P_2}{X_1+X_2}$ |
| Log-linear demand | $X = \alpha P_X^\gamma P_Z^\delta I^\eta$; exponents are elasticities |
| Revenue test | $|\varepsilon|>1$: $P\downarrow\Rightarrow TR\uparrow$; $|\varepsilon|<1$: $P\downarrow\Rightarrow TR\downarrow$; $|\varepsilon|=1$: $TR$ max |
| Marginal revenue | $MR = P(1 + 1/\varepsilon) = P(1 - 1/|\varepsilon|)$ |
| Lerner index | $(P-MC)/P = -1/\varepsilon$ |
| Income elasticity | $\eta>1$: luxury; $0<\eta<1$: necessity; $\eta<0$: inferior |
| Slutsky (elasticity) | $\varepsilon_{kj} = \varepsilon_{kj}^h - s_j\varepsilon_{kw}$ where $s_j = p_jx_j/w$ |

### Production

| Concept | Formula |
|---------|---------|
| MRTS | $MRTS_{LK} = MP_L/MP_K = w/r$ |
| Elasticity of substitution | $\sigma = \frac{d\ln(K/L)}{d\ln(MRTS)}$; CES: $\sigma=1/(1-\rho)$ |
| Cost function | $c(w,q)$: HD(1), concave in $w$; Shephard's: $\partial c/\partial w_k = z_k$ |
| Profit function | $\pi(p)$: HD(1), convex in $p$; Hotelling: $\partial\pi/\partial p_k = y_k$ |
| Returns to scale | $f(tK,tL) = t^k f(K,L)$; $k>1$ IRS, $k=1$ CRS, $k<1$ DRS |

### Welfare

| Concept | Formula |
|---------|---------|
| CV | $CV = e(p^1,u^0) - e(p^1,u^1) = w - e(p^1,u^0)$ |
| EV | $EV = e(p^0,u^1) - e(p^0,u^0) = e(p^0,u^1) - w$ |
| CS | $CS = \int_{p^0}^{p^1} x(p,w)\,dp$ |
| Ordering | $P\downarrow$ normal: $EV > CS > CV$; $P\uparrow$: $CV > CS > EV$; quasilinear: $CV = EV = CS$ |
| 3 Pareto conditions | (i) $MRS^A = MRS^B$; (ii) $MRTS^X = MRTS^Y$; (iii) $MRPT = MRS$ |
| FWT | Every CE is Pareto optimal (LNS, no externalities) |
| SWT | Every PO allocation can be supported as a CE with transfers (convexity) |

### GE & Game Theory

| Concept | Formula |
|---------|---------|
| Excess demand | $z_i(p) = D_i(p) - S_i(p)$; Walras' Law: $\sum p_i z_i(p) = 0$ |
| Existence | $z(0)>0,\;z(\infty)<0$, continuous $z$, HD(0) $\Rightarrow\exists p^*: z(p^*) = 0$ |
| Numeraire | $n$ goods, $n-1$ indep eqns; set $p_1=1$ |
| Nash equilibrium | $s_i^* \in \arg\max_{s_i} u_i(s_i,s_{-i}^*)$ |
| Folk Theorem | $\delta \ge \delta^* = \frac{\pi_{dev}-\pi_{coop}}{\pi_{dev}-\pi_{pun}}$ sustains cooperation |
| Spence signaling | Separating: $w_H - w_L \in [c_L, c_H]$; single-crossing: $c_L > c_H$ |
| Pigouvian tax | Tax = marginal external damage at social optimum |
| Coase Theorem | Zero TC + property rights $\Rightarrow$ bargaining → efficiency |
| Tariff DWL | $DWL = \frac12 \times t \times \Delta Q$ |

---

## Appendix B: Past Exam Papers

### B.1 Batch 46 (2020) — Microeconomic Theory II (Course 401)

**Exam paper text is available in the full extracted text.** Key questions covered in topic sections above:
- **Part A:** Pareto optimality & welfare theorems (→ Topic 4)
- **Part A:** Externalities, taxes & social dividend (→ Topic 7)
- **Part B:** Bertrand duopoly, Nash equilibrium (→ Topic 6)
- **Part B:** Entry game, backward induction, SPNE (→ Topic 6)
- **Part B:** Centipede game, paradox of backward induction (→ Topic 6)
- **Part C:** Tragedy of Commons (→ Topic 7)
- **Part C:** Pollution externalities, private vs social costs (→ Topic 7)
- **Part C:** Asymmetric information, Spence signaling (→ Topic 8)

### B.2 Batch 48 (2023) — Advanced Microeconomic Theory (Course 501)

- **Q1:** Quasi-concave utility proof, Negroni perfect complements utility, Cobb-Douglas demands, Quasilinear UMP (→ Topic 1)
- **Q2:** Convex indifference curves proof, log-linear demand elasticities, perfect substitutes utility (→ Topic 1, 2)
- **Q3:** Burger King demand estimation, elasticity analysis, profit-maximizing price (→ Topic 2)
- **Q4:** Cost function properties, returns to scale (→ Topic 3)

*Full exam papers with solutions are embedded in their respective topic sections above.*

---

## Appendix C: Workhorse Utility Functions

| Type | Function Form | MRS | Properties |
|------|--------------|-----|------------|
| Cobb-Douglas | $u = x_1^\alpha x_2^{1-\alpha}$ | $(\alpha/(1-\alpha))(x_2/x_1)$ | HD(1), homothetic, const. budget shares |
| Perfect Substitutes | $u = ax_1 + bx_2$ | $a/b$ (constant) | Linear ICs, corner solutions |
| Perfect Complements | $u = \min(ax_1, bx_2)$ | 0 or ∞ | L-shaped ICs, fixed proportions |
| CES | $u = (x_1^\rho + x_2^\rho)^{1/\rho}$ | $(x_1/x_2)^{\rho-1}$ | $\sigma = 1/(1-\rho)$; nests CD ($\rho\to0$), PS ($\rho\to1$), PC ($\rho\to-\infty$) |
| Quasilinear | $u = x_1 + \varphi(x_2)$ | $\varphi'(x_2)$ | No income effect for $x_1$; $CV=EV=CS$ |

---

*This guide consolidates content from:*
- *Answer files: answers-consumer-theory.md, answers-demand-production.md, answers-welfare.md, answers-ge-game-extern-trade.md*
- *Basics & formulas, equation explainer, exam cheat sheet, glossary*
- *Extracted text from lecture PDFs, homework assignments, tutorial sheets, and past exam papers*
- *All source PDFs available in `resources/master-notes-501/` and `resources/extracted_text/Masters_Notes_501/`*
