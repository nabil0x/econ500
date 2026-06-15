# 501 Microeconomics — Complete Master Study Guide

> **Jahangirnagar University · MSc Economics**
> Advanced Microeconomic Theory — Exam preparation source of truth
>
> **Source files:** All answer banks, extracted text from PDFs, homework assignments, tutorial sheets, and past exam papers (Batch 46, Batch 48)
>
> **Textbook cross-references:** Munoz-Garcia (*Advanced Microeconomic Theory*) Ch.1–11; Koutsoyiannis (*Modern Microeconomics*) Ch.2–4, 9, 11, 22–23
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
- **Advanced textbook content** — rigorous proofs from Munoz-Garcia (Ch.1–11) and Koutsoyiannis (Ch.2–4, 9, 11, 22–23)
- **Munoz-Garcia Insight \& Koutsoyiannis Reference callout boxes** — embedded in each topic for textbook-level depth

### Navigation

| Section | Topic | Key Additions |
|---------|-------|---------------|
| Topic 1 | Consumer Theory \& Preferences | Munoz-Garcia Examples 1.3–1.8, Lexicographic counterexample, Bordered Hessian, WARP, Behavioral Economics |
| Topic 2 | Demand Theory \& Elasticities | Slutsky Matrix, WARP three-proposition chain, Compensated Law of Demand, Koutsoyiannis empirical estimation |
| Topic 3 | Production \& Supply | Hotelling's Lemma proof, CES nesting, Cobb-Douglas full CMP, Aggregate supply with CRS, GE 2×2×2 connection |
| Topic 4 | Welfare Economics | CV/EV Hicksian integration, Willig bounds, Welfare theorem proofs, Bergson-Samuelson SWF, Scitovsky reversal |
| Topic 5 | General Equilibrium | Arrow-Debreu existence, Gross substitutability uniqueness, Lagrangian Pareto conditions, 2×2×2 numerical example |
| Topic 6 | Game Theory \& IO | Nash Existence (Kakutani), msNE calculation, BNE/PBE definitions, Kreps-Milgrom reputation, Renegotiation-proofness |
| Topic 7 | Externalities \& Public Goods | Steel-fishery numerical, Coase formal proof, Samuelson Lagrangian derivation, Lindahl equilibrium, n-user Commons |
| Topic 8 | Information \& Trade | Continuous Lemons model, Spence continuum, Intuitive Criterion, Stiglitz screening, Stolper-Samuelson Jones algebra |
| Appendix A | Exam Cheat Sheet | All key formulas on one page |
| Appendix B | Past Exam Papers | Batch 46 (2020) \& Batch 48 (2022, 2023) |
| Appendix C | Workhorse Utility Functions | CD, PS, PC, CES, Quasilinear forms |
| Appendix D | Key Textbook Connections | Complete cross-reference index to Munoz-Garcia and Koutsoyiannis |

---

## Exam Pattern (MSc 501 — 70 marks, Answer any 5 from 8)

| Topic | Likely Questions | Priority |
|-------|-----------------|----------|
| **Consumer Theory** | 2–3 questions (preference axioms, duality, convexity proofs) | ⭐⭐⭐ |
| **Production \& Supply** | 2 questions (production sets, full CD analysis, competitive eq) | ⭐⭐⭐ |
| **Welfare \& Pareto** | 1–2 questions (CV/EV/CS, Hicks-Kaldor, welfare theorems) | ⭐⭐⭐ |
| **General Equilibrium** | 1 question (Edgeworth box or existence/stability) | ⭐⭐ |
| **Demand \& Elasticities** | 1 question (elasticities, revenue test, log-linear demand) | ⭐⭐ |
| **Game Theory** | 1 question (Nash equilibrium, SPNE, Folk Theorem) | ⭐⭐ |
| **Externalities \& Public Goods** | 1–2 questions (Pigouvian tax, Coase, tragedy of commons) | ⭐⭐ |
| **Information \& Trade** | 0–1 question (adverse selection, signaling, tariff — rotating topic) | ⭐ |

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
| (f) Textbook reference | 0.5 min | Cite relevant Munoz-Garcia/Koutsoyiannis proof or example |
| Review | 2 min | Check relevance, diagram labels, algebra |

---

<!-- Enhanced by Munoz-Garcia & Koutsoyiannis textbook references -->
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

> **Munoz-Garcia Insight -- Examples of Intransitivity and Framing Effects:**
>
> **Example 1.3 (Framing Effects):** Rubinstein (2012) presented Master's students with holiday packages and asked which they preferred: (a) A weekend in Paris for \$574 at a four-star hotel; (b) A weekend in Paris at the four-star hotel for \$574; (c) A weekend in Rome at the five-star hotel for \$612. Alternatives (a) and (b) are identical -- most students are indifferent between them. Most students strictly prefer (b) to (c). By transitivity, (a) should be preferred to (c). While most students exhibit this transitive preference, about **25% of students** strictly prefer (c) to (a) -- an intransitive preference induced by the way options were *framed* (Munoz-Garcia, §1.2).
>
> **Example 1.5 (Monotonicity -- Leontief):** $u(x_1, x_2) = \min\{ax_1, bx_2\}$ satisfies **monotonicity** (increase all arguments → utility increases) but violates **strong monotonicity** (increase only good 1 → $\min\{ax_1 + \delta, bx_2\}$ is not necessarily larger than $\min\{ax_1, bx_2\}$ -- e.g., when $\min\{ax_1, bx_2\} = bx_2$).
>
> **Example 1.6 (Strong Monotonicity -- Perfect Substitutes):** $u(x_1, x_2) = ax_1 + bx_2$ satisfies **both** monotonicity and strong monotonicity, since increasing any single argument strictly increases utility.
>
> **Takeaway:** Strong monotonicity $\Rightarrow$ monotonicity, but the converse fails (Leontief is the counterexample). (Munoz-Garcia, §1.3)

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

> **Munoz-Garcia Insight -- Concavity vs. Quasiconcavity:**
>
> Munoz-Garcia (§1.7) emphasizes a crucial distinction: **concavity implies quasiconcavity, but quasiconcavity does NOT imply concavity.**
>
> - Concave utility: $u(\alpha x + (1-\alpha)y) \ge \alpha u(x) + (1-\alpha) u(y)$ (diminishing marginal utility in all directions).
> - Quasiconcave utility: $u(\alpha x + (1-\alpha)y) \ge \min\{u(x), u(y)\}$ (convex upper contour sets).
>
> Example: $u(x_1, x_2) = x_1^{1/4} x_2^{1/4}$ satisfies **both** concavity and quasiconcavity. Its monotonic transformation $v(x_1, x_2) = (x_1^{1/4} x_2^{1/4})^6 = x_1^{6/4} x_2^{6/4}$ is **convex** (not concave) yet still **quasiconcave** -- because it represents the same preferences! This is why we require quasiconcavity (not concavity) for utility functions: it is preserved under monotonic transformations, while concavity is not. (Munoz-Garcia, §1.7.2, pp.25-28)

---

> **Koutsoyiannis Practical Insight -- Indifference Curve Geometry and Diminishing MRS:**
>
> Koutsoyiannis (Ch.2) provides the classic textbook treatment of indifference curve geometry. The four fundamental properties of indifference curves are:
>
> 1. **Negative slope:** If the quantity of one good decreases, the quantity of the other must increase to maintain constant utility.
> 2. **Higher curves = higher utility:** Curves farther from the origin represent higher satisfaction.
> 3. **Non-intersecting:** If two ICs intersected, the intersection point would imply two different utility levels, which is impossible.
> 4. **Convex to the origin:** The MRS diminishes as we move along the curve -- the consumer requires increasingly more of one good to compensate for giving up units of the other.
>
> **On the role of MRS:** Koutsoyiannis emphasizes that the indifference-curve approach avoids direct measurement of marginal utility by working with the MRS (ratio of marginal utilities). The first-order condition for consumer equilibrium, $MRS_{xy} = p_x/p_y$, is identical to the cardinalist condition $MU_x/p_x = MU_y/p_y$, but requires only ordinal utility. The second-order condition is guaranteed by the convexity of indifference curves (diminishing MRS). (Koutsoyiannis, pp.18-24)
>
> **Special cases:**
> - **Perfect substitutes:** Linear ICs; corner solutions ("monomania") possible.
> - **Perfect complements:** Right-angle ICs; no substitution possible; standard tangency analysis breaks down.

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

---

> **Munoz-Garcia Insight -- Lexicographic Preferences: The Critical Counterexample**
>
> A preference relation that is **complete, transitive, strictly monotonic, and strictly convex**, yet **NOT continuous** and **cannot be represented by any utility function**.
>
> **Definition (Munoz-Garcia, §1.9.5, pp.45-48):** A bundle $x = (x_1, x_2)$ is weakly preferred to $y = (y_1, y_2)$, written $(x_1, x_2) \succeq (y_1, y_2)$, if and only if:
> - $x_1 > y_1$, **or**
> - $x_1 = y_1$ and $x_2 > y_2$.
>
> This works like alphabetizing a dictionary -- good 1 is the "primary" criterion.
>
> **Properties:**
> - **Complete:** For any two bundles, either $x_1 > y_1$, $y_1 > x_1$, or $x_1 = y_1$ in which case the comparison of $x_2$ and $y_2$ decides.
> - **Transitive:** The lexicographic ordering on real numbers is transitive.
> - **Strictly monotone:** Increasing either good strictly improves the bundle.
> - **Strictly convex:** If $x \succeq z$ and $y \succeq z$, the convex combination is strictly preferred to $z$.
> - **NOT continuous:** Consider $x^n = (1/n, 0)$ and $y^n = (0, 1)$. For all $n$, $x^n \succ y^n$ (since $1/n > 0$). But $\lim x^n = (0,0)$ and $\lim y^n = (0,1)$. At the limit, $(0,1) \succ (0,0)$ -- a **preference reversal**. Hence continuity fails.
> - **No utility representation:** The indifference set of any bundle is a singleton (only the bundle itself). The UCS and LCS partition the space leaving no room for other indifferent bundles, which makes representing this preference with a real-valued utility function impossible.
>
> **Exam significance:** Whenever asked "can every rational preference be represented by a utility function?" cite lexicographic preferences. The answer is NO -- continuity is also required. (Munoz-Garcia, §1.9.5-1.10, pp.45-50)

---

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

> **Munoz-Garcia Insight -- Testing Properties of Preference Relations (Example 1.8):**
>
> Munoz-Garcia (§1.5, pp.29-33) systematically tests a preference relation defined as: $x \succeq y$ if and only if $x_k \ge y_k$ for **every** good $k$ (i.e., bundle $x$ contains weakly more of every good than bundle $y$).
>
> **Results of the test:**
>
> | Property | Verdict | Explanation |
> |---|---|---|
> | **Completeness** | ✗ **Violated** | Consider $x = (3, 1)$ and $y = (1, 3)$. Neither $x \ge y$ in all components (good 1: $3 \ge 1$ ✓, good 2: $1 \ge 3$ ✗) nor $y \ge x$ (good 1: $1 \ge 3$ ✗). So neither $x \succeq y$ nor $y \succeq x$ holds. |
> | **Transitivity** | ✓ Satisfied | If $x \ge y$ and $y \ge z$ component-wise, then $x \ge z$ by transitivity of $\ge$. |
> | **Strong monotonicity** | ✓ Satisfied | If $x \ge y$ and $x \neq y$, then at least one component is strictly larger, so $x \succ y$. |
> | **Strict convexity** | ✓ Satisfied | If $x \succeq z$ and $y \succeq z$, then $x_k \ge z_k$ and $y_k \ge z_k$ for all $k$, so $\alpha x_k + (1-\alpha) y_k \ge z_k$ with strict inequality for at least one $k$. |
> | **LNS** | ✓ Satisfied | For any $x$, increase both components by $\varepsilon/2$ to get $y$ within $\varepsilon$-ball with $y \succ x$. |
>
> **Key insight from this example:** A preference relation can satisfy transitivity, strong monotonicity, strict convexity, and LNS -- yet **fail completeness**. This demonstrates that these properties are logically independent: satisfying one set does not guarantee the others. (Munoz-Garcia, §1.5, Example 1.8, pp.29-33)

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

> **Munoz-Garcia Insight -- Formal Proof that Homotheticity Does NOT Imply Homogeneity:**
>
> Munoz-Garcia (§1.9.3, pp.42-43) provides the formal proof. Take $v(x_1, x_2) = x_1 x_2$, which is HD(2). Apply the monotonic transformation $g(y) = y + a$, where $a > 0$, yielding $u(x_1, x_2) = x_1 x_2 + a$. Then:
> $$u(\alpha x_1, \alpha x_2) = (\alpha x_1)(\alpha x_2) + a = \alpha^2 (x_1 x_2) + a \neq \alpha^k (x_1 x_2 + a)$$
> for any single $k$. Thus $u$ is **not homogeneous** but **is homothetic** (since $g$ is strictly increasing).
>
> **Example 1.9 (Testing for homotheticity):** Is $\ln(x_1^{0.3} x_2^{0.6})$ homothetic? Yes. Since $x_1^{0.3} x_2^{0.6}$ is HD(0.9) (and concave because $\alpha+\beta = 0.9 < 1$), applying the monotonic transformation $\ln(\cdot)$ preserves homotheticity. By the same argument, it is also quasiconcave. (Munoz-Garcia, §1.9.1-1.9.3, pp.39-44)

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

### 1.5 The Choice-Based Approach & WARP

The preference-based approach studied above uses unobservable preferences as the primitive. Munoz-Garcia (§1.13-1.14, pp.59-63) presents an **alternative approach** that uses **actual choices** as the primitive -- the **choice-based approach**.

#### Choice Structure

A **choice structure** $(\mathcal{B}, c(\cdot))$ contains:

1. **$\mathcal{B}$** -- a family of nonempty subsets of $X$ (budget sets). For example: a consumer's affordable bundles given prices and wealth.
2. **$c(\cdot)$** -- a **choice rule** that selects, for each budget set $B \in \mathcal{B}$, a subset $c(B) \subseteq B$ of chosen elements.

> **Example (Munoz-Garcia, Example 1.11):** Let $X = \{x, y, z\}$, $B_1 = \{x, y\}$, $B_2 = \{x, y, z\}$.
> - **Choice rule 1:** $c_1(\{x, y\}) = \{x\}$, $c_1(\{x, y, z\}) = \{x\}$ -- consistent.
> - **Choice rule 2:** $c_2(\{x, y\}) = \{x\}$, $c_2(\{x, y, z\}) = \{y\}$ -- inconsistent (switches to $y$ when $z$ appears despite $x$ still available).

#### The Weak Axiom of Revealed Preference (WARP)

Paralleling the rationality assumption in the preference-based approach, the choice-based approach imposes **consistency** through WARP.

> **WARP Definition (Munoz-Garcia, §1.14):** Consider a budget set $B \in \mathcal{B}$ with $x, y \in B$, where $x \in c(B)$. The choice structure $(\mathcal{B}, c(\cdot))$ satisfies WARP if, for any other budget set $B' \in \mathcal{B}$ where $x, y \in B'$ and $y \in c(B')$, we also have $x \in c(B')$.

**Intuition:** If $x$ is chosen when $y$ is available in one budget set, then $y$ cannot be chosen without $x$ in any other budget set where both are available. In short: **if $x$ beats $y$ in one context, $y$ cannot beat $x$ in another context** without $x$ also being chosen.

**Legal choices under WARP** (Example 1.12, Munoz-Garcia): When $c(\{x, y\}) = \{x\}$ and the budget expands to $\{x, y, z\}$, the consumer can choose:
- $\{x\}$ -- $x$ still beats $y$ and $z$ is no better
- $\{z\}$ -- $z$ is even better than $x$
- $\{x, z\}$ -- $x$ and $z$ are equally good (indifference)
- But **NOT** $\{y\}$ alone, and **NOT** $\{x, y\}$ (since $y$ was rejected when $x$ was available)

#### Rational Preference Relations Satisfy WARP

> **Theorem (Munoz-Garcia Appendix, pp.68-69):** Every rational preference relation induces a choice structure that satisfies WARP.

**Proof:**

1. Suppose for some budget set $B \in \mathcal{B}$, we have $x, y \in B$ and $x \in C^*(B, \succeq)$ (the set of optimal choices given $\succeq$). This means $x \succeq y$ for all available $y \in B$.

2. Consider another budget set $B' \in \mathcal{B}$ where $x, y \in B'$ and $y \in C^*(B', \succeq)$. This means $y \succeq z$ for all $z \in B'$.

3. From (1): $x \succeq y$. From (2): $y \succeq z$ for all $z \in B'$ (so in particular $y \succeq x$).

4. Wait -- $x \succeq y$ and $y \succeq x$ implies $x \sim y$ (indifference), **not** that $y \succ x$.

   Actually, the correct reasoning: From (2), $y \succeq z$ for all $z \in B'$. Since $x \in B'$, we have $y \succeq x$. But from (1) we had $x \succeq y$. So $x \sim y$ -- they are indifferent.

   Now, since $x \sim y$ and $y \succeq z$ for all $z \in B'$, by transitivity $x \succeq z$ for all $z \in B'$. Hence $x \in C^*(B', \succeq)$.

5. Therefore both $x$ and $y$ are chosen under $B'$, satisfying WARP. ■

**Relationship between approaches:**

| | Preference-Based | Choice-Based |
|---|---|---|
| **Primitive** | Preferences $\succeq$ (unobservable) | Choices $c(\cdot)$ (observable) |
| **Rationality** | Completeness + Transitivity | WARP |
| **Representation** | Utility function $u: X \to \mathbb{R}$ | Choice structure $(\mathcal{B}, c(\cdot))$ |
| **Advantage** | More tractable for large $X$ | Based on observables |
| **Equivalence** | Rational $\succeq$ ⟹ WARP holds | WARP ⟹ Rational $\succeq$ (only if $|B| \le 3$) |

> **Exam Tip:** The key point: **rational preferences imply WARP** (always), but **WARP does NOT imply rational preferences** (unless the budget sets are small). Munoz-Garcia notes that the converse only holds when budget sets contain three or fewer elements (Mas-Colell et al., 1995; Arrow, 1959).

---

> **Munoz-Garcia Insight -- Choice-Based vs. Preference-Based Approaches:**
>
> Munoz-Garcia (§1.1, pp.2-3) highlights the fundamental trade-off: The **preference-based approach** is based on **unobservables** (the individual's preferences) -- we imagine asking the consumer to compare bundles, but we never directly observe the comparison process. In contrast, the **choice-based approach** is based on **observables** (actual choices) -- we see what the consumer buys and infer consistency from those choices.
>
> The preference-based approach is **more tractable** when the set of alternatives $X$ contains many elements (which is usually the case in individual decision-making problems). This is why most of consumer theory uses the preference-based approach.
>
> The chapter then explores the **relationship** between the two approaches: under what conditions do rational preferences imply consistent choices (WARP), and vice versa. The appendix proves that **every rational preference relation satisfies WARP**, but the converse holds only under restrictive conditions. (Munoz-Garcia, §1.1, §1.13-1.14, Appendix, pp.2-3, 59-69)

---

### 1.6 Behavioral Economics Findings

Standard consumer theory assumes unbounded rationality, willpower, and selfishness. Munoz-Garcia (§1.12, pp.51-59) presents behavioral economics models that relax these assumptions, introducing findings from controlled experiments that challenge the standard framework.

#### Prospect Theory (Kahneman & Tversky, 1979)

Kahneman and Tversky's **prospect theory** (Munoz-Garcia, §5.9, pp.368-372) models choice under uncertainty with three key deviations from expected utility theory:

1. **Probability weighting:** Individuals overweight low probabilities and underweight high probabilities via a weighting function $w(p_i)$:
   $$v(x, p) = \sum_{i=1}^n w(p_i) v(x_i)$$
   A common weighting function (Tversky-Kahneman): $w(p) = p^\beta / [p^\beta + (1-p)^\beta]^{1/\beta}$, where $\beta \in [0,1]$.

2. **Reference-dependent value function:** Payoffs are evaluated relative to a **reference point** $x_0$, not as absolute levels:
   $$v(x_i) = \begin{cases} (x_i)^\alpha & \text{if } x_i \ge x_0 \text{ (gains)} \\ -\lambda(-x_i)^\alpha & \text{if } x_i < x_0 \text{ (losses)} \end{cases}$$
   where $\alpha \in (0,1]$ measures diminishing sensitivity, and $\lambda \ge 1$ measures **loss aversion**.

3. **Loss aversion:** The value function is steeper for losses than for gains -- a loss of \$X hurts more than a gain of \$X pleases. Estimated parameters: $\alpha \approx 0.88$, $\lambda \approx 2.25$ (Tversky & Kahneman, 1992).

> **Exam significance:** Prospect theory explains the **endowment effect** (sellers value goods more than buyers), **Allais' paradox** (probability weighting), and **status quo bias**. These are standard exam questions asking "give a behavioral economics critique of expected utility theory."

#### The Endowment Effect

Several experiments (Munoz-Garcia, §5.9.3, pp.371-372) show that individuals' **willingness to pay (WTP)** for an object is systematically lower than their **willingness to accept (WTA)** to give it up -- a violation of standard theory where WTP = WTA.

**Prospect theory explanation:** With loss aversion $\lambda > 1$:
- **Willingness to pay:** $u(\text{MUG}) - u(\$x) \ge 0 \Rightarrow x \le u(\text{MUG})/\lambda$, so WTP $= u(\text{MUG})/\lambda$
- **Willingness to accept:** $u(\$x) - u(\text{MUG}) \ge 0 \Rightarrow x \ge \lambda u(\text{MUG})$, so WTA $= \lambda u(\text{MUG})$
- Since $\lambda > 1$, WTA $>$ WTP. If $\lambda = 1$ (no loss aversion), WTP = WTA. (Munoz-Garcia, §5.9.3)

#### Social Preferences (Fehr-Schmidt, 1999)

Standard models assume purely selfish preferences. Fehr and Schmidt (1999) incorporate **inequality aversion**:

$$u_i(x_i, x_j) = x_i - \alpha_i \max\{x_j - x_i, 0\} - \beta_i \max\{x_i - x_j, 0\}$$

- $\alpha_i$ = disutility from **envy** (when others earn more)
- $\beta_i$ = disutility from **guilt** (when you earn more)
- Assumption: $\alpha_i \ge \beta_i$ (envy is stronger than guilt), $1 > \beta_i \ge 0$

If $\alpha_i = \beta_i = 0$, preferences collapse to standard self-regarding utility. This specification can also capture concerns for **status** ($\beta_i < 0$) or **efficiency** ($\alpha_i < 0$). (Munoz-Garcia, §1.12.1, pp.52-55)

#### Hyperbolic & Quasi-Hyperbolic Discounting

Standard **exponential discounting** assumes constant discount rates: $(1/(1+r)^t)x$. However, experiments show **present bias** -- individuals discount the near future more steeply than the distant future.

**Hyperbolic discounting** (Munoz-Garcia, §1.12.2, pp.55-59): Discount factor $1/(1+rt)^{\gamma/\alpha}$, where the subjective discount rate decreases in $t$. This explains:
- **Time inconsistency:** An individual who prefers \$110 in 61 days over \$100 in 60 days may prefer \$100 today over \$110 tomorrow -- reversing their preference when the moment arrives.
- **Addiction and self-control:** Patience in the long run (joining a gym) but impatience in the short run (skipping the gym).
- Large credit card debts alongside retirement accounts.

**Quasi-hyperbolic (Laibson, 1997):** Discount factor $\{1, \beta\delta, \beta\delta^2, \ldots\}$ where $\beta \le 1$. When $\beta = 1$, collapses to exponential discounting.

---

> **Munoz-Garcia Insight -- Why Behavioral Economics Matters for Theory:**
>
> Munoz-Garcia emphasizes that standard consumer theory is a **normative benchmark** -- it shows how consumers *would* behave if they satisfied the rationality axioms. Behavioral economics documents systematic deviations from this benchmark. Understanding both is essential for exams: when asked "critically evaluate the assumption of rational preferences," cite prospect theory (loss aversion), framing effects (intransitivity), and hyperbolic discounting (time inconsistency) as documented violations.
>
> The key exam connection: **Endowment effect** ⇒ violates the Coase theorem (initial allocation matters for final outcome). **Framing effects** ⇒ violate transitivity. **Social preferences** ⇒ modify the utility function to include others' payoffs. (Munoz-Garcia, §1.12, pp.51-59; §5.9, pp.368-372)

---

### 1.7 Special Utility Functions & Corner Solutions

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

> **Koutsoyiannis Practical Insight -- Consumer Equilibrium Geometry:**
>
> Koutsoyiannis (Ch.2, pp.21-24) provides the classic graphical derivation of consumer equilibrium. Two conditions must hold:
>
> **First condition (necessary):** $MRS_{xy} = p_x/p_y$ -- the slope of the indifference curve equals the slope of the budget line at the tangency point.
>
> **Second condition (sufficient):** Indifference curves must be convex to the origin -- guaranteed by the axiom of diminishing MRS.
>
> Koutsoyiannis emphasizes that the first-order condition $MU_x/MU_y = p_x/p_y$ is **identical** in both the cardinal and ordinal approaches. The crucial difference: the ordinal approach replaces the cardinal assumption of diminishing marginal utility with the assumption of **diminishing MRS** (convex indifference curves). This is a weaker and more realistic assumption -- it does not require utility to be measurable, only that the consumer can rank bundles consistently.
>
> **Deriving the demand curve:** As the price of $x$ falls, the budget line rotates outward, creating a new tangency with a higher indifference curve. Connecting these tangency points traces the **price-consumption line**, from which the individual demand curve is derived. For normal goods, the demand curve always has a negative slope, following from Slutsky's theorem. (Koutsoyiannis, pp.24-25)

---

### 1.8 Additional Practice Problems

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

### 1.9 New Exam Questions from the Final

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

### 1.10 Exam Strategy Summary

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

---

<!-- Enhanced by Munoz-Garcia & Koutsoyiannis textbook references -->
## <a id="topic-2"></a>Topic 2: Demand Theory & Elasticities

> **Exam weight:** 14–20 marks (typically 1 question). Common question types: log-linear demand interpretation, Burger King demand problem, Lerner Index pricing.
> **Key sources:** Koutsoyiannis Ch.2, Munoz-Garcia Ch.2–3, §7.2.3
> **Advanced references:** Munoz-Garcia Ch.2 (Slutsky Matrix pp.61–64, WARP and Demand pp.99–117, Hicksian-Walrasian relationship pp.129–135), Koutsoyiannis Ch.2 (Pragmatic approach pp.53–60)

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

> **Munoz-Garcia Insight — The Slutsky Matrix (Ch.2, pp.61–64)**
>
> The Slutsky equation can be generalized to an $L \times L$ matrix of substitution effects. For a differentiable Walrasian demand function $x(p,w)$, totally differentiate and impose the Slutsky wealth compensation $dw = x(p,w) \cdot dp$:
>
> $$dx = D_p x(p,w) dp + D_w x(p,w) [x(p,w) \cdot dp] = \big[D_p x(p,w) + D_w x(p,w) x(p,w)^\top\big] dp$$
>
> The term in brackets is the **Slutsky (substitution) matrix** $S(p,w)$ with elements:
>
> $$s_{lk}(p,w) = \frac{\partial x_l(p,w)}{\partial p_k} + \frac{\partial x_l(p,w)}{\partial w} \cdot x_k(p,w) \quad \text{for every pair of goods } l,k$$
>
> Each element $s_{lk}$ measures the compensated price effect of good $k$ on demand for good $l$. The diagonal elements $s_{ll}(p,w)$ are the **own-price substitution effects**, which the theory predicts must be non-positive ($s_{ll} \leq 0$).
>
> **Negative semi-definiteness:** If $x(p,w)$ is differentiable, satisfies Walras' law, homogeneity of degree zero, and WARP, then $S(p,w)$ is **negative semi-definite** (NSD): $v \cdot S(p,w) \cdot v \leq 0$ for any vector $v \in \mathbb{R}^L$. An immediate implication is that all diagonal elements satisfy $s_{ll}(p,w) \leq 0$ — the own-price substitution effect is always non-positive.
>
> **Symmetry:** Negative semi-definiteness does **not** by itself imply symmetry. However, if preferences additionally satisfy **local nonsatiation (LNS)** and **strict convexity**, and are representable by a continuous utility function, then $S(p,w)$ is **symmetric**: $s_{lk} = s_{kl}$ for all $l,k$. This symmetry is the differential analogue of the symmetry of net substitution terms in consumer theory. (Perfect substitutes violate strict convexity, so symmetry does not hold for those preferences.)

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

#### 2.1.7 Compensated (Hicksian) Demand and the Compensated Law of Demand

> **Munoz-Garcia Insight — Hicksian Demand Properties (Ch.2, pp.129–135)**
>
> The **Hicksian (compensated) demand** $h(p,u)$ is the solution to the Expenditure Minimization Problem (EMP): minimize $p \cdot x$ subject to $u(x) \geq u$. Its key properties:
>
> 1. **Homogeneity of degree zero in $p$:** $h(\alpha p, u) = h(p,u)$ for $\alpha > 0$
> 2. **No income effects:** by construction — utility is held fixed
> 3. **Negative semi-definite substitution matrix:** $D_p h(p,u)$ is NSD, hence the Slutsky matrix $S(p,w) = D_p h(p,u)$ is also NSD
> 4. **Symmetry:** $D_p h(p,u)$ is symmetric (under LNS + strict convexity), therefore cross-price substitution effects are symmetric: $\partial h_l / \partial p_k = \partial h_k / \partial p_l$

**The Compensated Law of Demand (CLD):**

For any price change from $p$ to $p'$ with utility held constant at $u$:

$$(p' - p) \cdot \big(h(p',u) - h(p,u)\big) \leq 0$$

**Implication:** For every good $k$, $(p'_k - p_k) \cdot (h_k(p',u) - h_k(p,u)) \leq 0$. This means Hicksian demand curves are always downward-sloping — a price increase (decrease) for good $k$ leads to a decrease (increase) in its Hicksian quantity demanded. This is **always true** for compensated demand, unlike Walrasian (uncompensated) demand which can slope upward for Giffen goods.

**Relationship between WARP and the CLD:** WARP is equivalent to the CLD under Slutsky compensation, but WARP does **not** imply the uncompensated law of demand (ULD). That is:

$$\text{WARP} \iff \text{CLD} \quad \text{but} \quad \text{WARP} \nRightarrow \text{ULD}$$

> **Munoz-Garcia Insight — WARP and the Slutsky Matrix (Ch.2, pp.99–117)**
>
> The **Weak Axiom of Revealed Preference (WARP)** imposes testable restrictions on Walrasian demand. The three-proposition chain:
>
> **Proposition 1:** If $x(p,w)$ is differentiable, satisfies Walras' law, homogeneity of degree zero, and **WARP**, then the Slutsky matrix $S(p,w)$ is **negative semi-definite**. Consequently, all own-price substitution effects satisfy $s_{ll}(p,w) \leq 0$.
>
> **Proposition 2:** If preferences additionally satisfy **LNS** and **strict convexity**, and are representable by a continuous utility function, then $S(p,w)$ is **symmetric** ($s_{lk} = s_{kl}$).
>
> **Proposition 3:** The Hicksian substitution matrix $D_p h(p,u)$ coincides with the Slutsky matrix: $S(p,w) = D_p h(p,u) = D_p^2 e(p,u)$. This identity links observable Walrasian demand (via the Slutsky matrix) to the Hicksian demand derived from the expenditure function.
>
> **Empirical significance:** The Slutsky matrix can be recovered from observable Walrasian demand data. Negative semi-definiteness provides a set of inequality restrictions that can be tested econometrically. Symmetry implies that compensated cross-price effects are reciprocal — a testable overidentifying restriction in demand system estimation.

#### 2.1.8 Relationship between Hicksian and Walrasian Demand

The Hicksian and Walrasian demands are related through the **Slutsky equation** and the **expenditure function**. For any $(p,w)$ with associated utility $u = v(p,w)$:

$$h_l(p,u) = x_l(p, e(p,u)) \quad \text{and equivalently} \quad x_l(p,w) = h_l(p, v(p,w))$$

Differentiating the identity $h_l(p,u) = x_l(p, e(p,u))$ with respect to $p_k$ and applying Shephard's lemma ($\partial e(p,u)/\partial p_k = h_k(p,u)$) recovers the Slutsky equation:

$$\frac{\partial h_l(p,u)}{\partial p_k} = \frac{\partial x_l(p,w)}{\partial p_k} + \frac{\partial x_l(p,w)}{\partial w} \cdot x_k(p,w) = s_{lk}(p,w)$$

**Graphical relationship:**

| Good type | Income effect | Walrasian vs Hicksian slope | Interpretation |
|:---:|:---:|---|
| **Normal good** | Positive ($\partial x_l / \partial w > 0$) | Walrasian is **flatter** (more elastic) than Hicksian | For a price decrease, Walrasian demand increases more than Hicksian because the income effect reinforces the substitution effect |
| **Inferior good** | Negative ($\partial x_l / \partial w < 0$) | Walrasian is **steeper** (less elastic) than Hicksian | For a price decrease, Walrasian demand increases less than Hicksian because the income effect offsets the substitution effect |

When the budget share $\theta_k$ and/or the income elasticity $\varepsilon_{x,w}$ are small, the Hicksian and Walrasian demand curves are close to each other (e.g., garlic, pizza). The extreme case is **quasilinear utility**, where income effects are absent and the two demands coincide.

> **Exam Tip:** On a diagram, Hicksian demand is always steeper (for normal goods) or flatter (for inferior goods) than Walrasian demand through the same initial point. The two curves intersect at the initial price–quantity point because at that point $w = e(p,u)$ by construction.

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
>
> **Koutsoyiannis (Ch.2, pp.53–55) on empirical demand estimation:** The pragmatic approach to demand analysis formulates demand functions directly from market data, specifying demand as a multivariate function $Q_x = f(P_x, P_0, Y, T)$ where $P_0$ is other prices, $Y$ is income, and $T$ captures tastes. The log-linear (constant-elasticity) form is the most common: $Q_x = b_0 P_x^{b_1} P_0^{b_2} Y^{b_3} e^{b_4 t}$. The coefficients $b_1,b_2,b_3$ are directly the price, cross, and income elasticities. Serious difficulties arise in estimation: (a) **aggregation** over individuals and commodities makes index numbers inevitable; (b) all determinants **change simultaneously**, making it difficult to isolate individual effects; (c) the **identification problem** — observed price–quantity pairs trace out a mix of supply and demand shifts, so OLS on a single equation cannot recover structural demand parameters. Koutsoyiannis notes that imposing homogeneity of degree zero (no money illusion) requires $b_1 + b_2 + b_3 = 0$ when expressed in real terms.

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
| Slutsky matrix element | $s_{lk} = \partial x_l/\partial p_k + (\partial x_l/\partial w) \cdot x_k$ | $s_{ll} \leq 0$ (own-price SE $\leq 0$) |
| Compensated Law of Demand | $(p'-p)\cdot(h(p',u)-h(p,u)) \leq 0$ | Always holds for Hicksian demand |
| WARP → Slutsky NSD | $v \cdot S(p,w) \cdot v \leq 0$ | Requires Walras' law, HD(0), differentiability |

---

### 2.4 Empirical Demand Estimation — Functional Forms and Identification

> **Koutsoyiannis (Ch.2, pp.53–60)** provides a comprehensive treatment of empirical approaches to demand analysis.

**The Pragmatic Approach:** Rather than deriving demand from utility maximization, the pragmatic approach directly specifies demand as a multivariate function of observable variables:

$$Q_x = f(P_x, P_0, Y, T)$$

where $P_x$ = own price, $P_0$ = vector of related prices, $Y$ = aggregate income, $T$ = trend for tastes.

**Common functional forms:**

| Form | Equation | Properties |
|:---|:---|:---|
| **Linear** | $Q = a + bP_x + cP_0 + dY$ | Constant marginal effects, varying elasticity |
| **Log-linear** | $Q = b_0 P_x^{b_1} P_0^{b_2} Y^{b_3}$ | **Constant elasticities**: $b_1,b_2,b_3$ ARE elasticities |
| **Semi-log** | $\ln Q = a + bP_x + cP_0 + dY$ | Price semi-elasticity = $b$ |
| **Linear Expenditure (LES)** | $q_i = \gamma_i + \frac{b_i}{p_i}(Y - \sum p_j\gamma_j)$ | Consistent with Stone-Geary utility; separates subsistence and supernumerary income |

**Zero-homogeneity (no money illusion):** If prices and income all change by the same proportion $k$, real demand should be unchanged. For the log-linear form, this imposes $b_1 + b_2 + b_3 = 0$.

**Dynamic demand — distributed-lag models:** Current purchases depend on past behaviour. Koutsoyiannis distinguishes:
- **Habit-formation** for non-durables (tobacco, food): $Q_t = f(P_t, P_{t-1}, \dots, Y_t, Y_{t-1}, \dots, Q_{t-1})$
- **Stock-adjustment** for durables: past purchases constitute a stock that affects current purchases

**The identification problem (revisited):** A regression of quantity on price alone cannot recover demand. Observed $(P,Q)$ pairs trace out intersections of shifting supply and demand curves over time. Consistent estimation requires:
1. **Instruments** that shift supply but not demand (e.g., input costs, weather)
2. **Exclusion restrictions** to separate the structural equations
3. In the LES framework, demand is derived from utility maximization, which provides cross-equation restrictions (e.g., $b_i$ are marginal budget shares summing to 1)

> **Exam Tip:** The log-linear form is the workhorse of empirical demand analysis. Know that coefficients ARE elasticities, the zero-homogeneity condition is $b_1 + b_2 + b_3 = 0$, and that dynamic specifications introduce lagged dependent variables. The LES is the theoretically consistent alternative, derived from Stone-Geary preferences — be prepared to contrast it with the ad hoc log-linear form.

---

---

<!-- Enhanced by Munoz-Garcia & Koutsoyiannis textbook references -->
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

> **Koutsoyiannis Reference (Ch.3, pp.68-70):** Koutsoyiannis identifies four types of isoquants reflecting the degree of factor substitutability:
> 1. **Linear isoquant** ($\sigma = \infty$): Perfect substitutability — a commodity can be produced using only capital, only labor, or any combination
> 2. **Input-output (Leontief) isoquant** ($\sigma = 0$): Strict complementarity — only one technically efficient method exists; the isoquant is a right angle
> 3. **Kinked isoquant** (activity analysis): Limited substitutability with a few discrete processes; substitution occurs only at the kinks
> 4. **Smooth convex isoquant** ($0 < \sigma < \infty$): Continuous substitutability over a range, with diminishing MRTS
>
> Koutsoyiannis also distinguishes **technical efficiency** (a method uses less of at least one input and no more of others) from **economic efficiency** (the chosen method depends on factor prices). Only technically efficient methods belong to the production function; the economically optimal choice among them depends on relative prices.

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

> **Munoz-Garcia Insight — CES as a Generalization of All Three Polar Cases:**
> The CES function $q = [\alpha K^\rho + (1-\alpha)L^\rho]^{\gamma/\rho}$ nests all three canonical production functions through the elasticity parameter $\sigma = 1/(1-\rho)$:
>
> **1. $\rho \to 0$ (Cobb-Douglas limit):** Apply L'Hôpital's rule to $\ln q = \frac{\gamma}{\rho} \ln[\alpha K^\rho + (1-\alpha)L^\rho]$. As $\rho \to 0$, both numerator and denominator go to 0. Differentiating numerator and denominator with respect to $\rho$:
>
> $$\lim_{\rho \to 0} \ln q = \gamma \cdot \frac{\alpha \ln K + (1-\alpha)\ln L}{\alpha + (1-\alpha)} = \ln(K^\alpha L^{1-\alpha})^\gamma$$
>
> Hence $q \to (K^\alpha L^{1-\alpha})^\gamma$ — the Cobb-Douglas form with $\sigma = 1$.
>
> **2. $\rho = 1$ (Linear limit):** When $\rho = 1$, $q = [\alpha K + (1-\alpha)L]^\gamma$, which is a linear function of $K$ and $L$ with $\sigma = \infty$. The isoquants are straight lines indicating perfect substitutability.
>
> **3. $\rho \to -\infty$ (Leontief limit):** As $\rho \to -\infty$, the term with the larger exponent dominates. For any $(K,L)$, if $K > L$, then $K^\rho$ dominates and $q \to \gamma K^{-}$ (where $K^-$ is the smaller input). Formally, $\lim_{\rho \to -\infty} [\alpha K^\rho + (1-\alpha)L^\rho]^{\gamma/\rho} = \min\{K, L\}^\gamma$, the Leontief function with $\sigma = 0$.

> **Koutsoyiannis Reference (Ch.3, pp.75-78) — Cobb-Douglas Properties:**
> Koutsoyiannis emphasizes five key properties of the Cobb-Douglas function $X = b_0 L^{b_1} K^{b_2}$:
> 1. **Marginal products:** $MP_L = b_1(X/L) = b_1 \cdot AP_L$, $MP_K = b_2(X/K) = b_2 \cdot AP_K$ — marginal products are proportional to average products
> 2. **MRTS:** $MRS_{L,K} = (b_1/b_2)(K/L)$ — depends only on the capital-labor ratio
> 3. **Elasticity of substitution:** $\sigma = 1$ for all parameter values
> 4. **Factor intensity:** Measured by $b_1/b_2$ — higher ratio = more labor-intensive technique
> 5. **Efficiency parameter:** $b_0$ captures the efficiency of organization and entrepreneurship — two firms with identical $K, L, b_1, b_2$ but different $b_0$ have different efficiency levels

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

> **Munoz-Garcia Insight — Full Duality Relationship (Ch.4, §4.7):**
> The matrix $D_w z(w,q) = D_w^2 c(w,q)$ captures the duality between cost function concavity and conditional factor demand properties. Since $c(w,q)$ is concave in $w$, its Hessian $D_w^2 c(w,q)$ is **symmetric and negative semidefinite (NSD)**. This yields three testable implications:
>
> **1. Own-price effects are non-positive:** $\partial z_k(w,q)/\partial w_k \leq 0$ for every input $k$. Intuitively, an increase in the price of input $k$ (e.g., higher wages) reduces the firm's demand for that input (less labor hired). This is the production analogue of the compensated (Hicksian) demand slope in consumer theory.
>
> **2. Cross-price effects are symmetric:** $\partial z_k(w,q)/\partial w_l = \partial z_l(w,q)/\partial w_k$ for any two inputs $k$ and $l$. This symmetry condition means the effect of a wage increase on capital demand equals the effect of a capital price increase on labor demand.
>
> **3. Euler's condition:** $D_w z(w,q) \cdot w = 0$ — the matrix multiplied by the price vector yields zero, reflecting homogeneity of degree zero in input prices. Consequently, $\sum_l w_l \cdot \partial z_k/\partial w_l = 0$.
>
> **Proof sketch:** From Shephard's lemma, $\partial c/\partial w_k = z_k$. Differentiating again gives $\partial^2 c/\partial w_k \partial w_l = \partial z_k/\partial w_l$. The Hessian $D_w^2 c(w,q)$ must be symmetric (by Young's theorem) and NSD (since $c$ is concave in $w$). The NSD property implies all principal minors alternate in sign, with first-order principal minors $\partial z_k/\partial w_k \leq 0$.

> **Exam Tip:** Concavity in $w$ implies $\partial^2 c / \partial w_k^2 \leq 0$ → conditional factor demand slopes downward. This is the production analogue of the Slutsky matrix in consumer theory.

#### 3.2.3 Shephard's Lemma — Proof

If $c(w,q) = w \cdot z(w,q)$ is differentiable in $w$, then by the envelope theorem:

$$\frac{\partial c(w,q)}{\partial w_k} = z_k(w,q) + \sum_j w_j \frac{\partial z_j}{\partial w_k} = z_k(w,q)$$

The summation term vanishes at the optimum by the FOCs (first-order effect of price change on input choice is zero).

> **Munoz-Garcia Insight — Shephard's Lemma via Duality Theorem (Ch.4, §4.7):**
> Shephard's lemma is a direct application of the duality theorem. The cost function $c(w,q)$ serves as the **support function** of the closed, convex set $\{z : w \cdot z = c(w,q)\}$ — the set of input combinations that are at least as costly as the cost-minimizing bundle $z(w,q)$.
>
> Formally, for a given output level $q$, define the set $S(q) = \{z \geq 0 : f(z) \geq q\}$. The cost function $c(w,q) = \min_{z \in S(q)} w \cdot z$ is the support function of $S(q)$. By the duality theorem, if $c(w,q)$ is differentiable at $w$, then:
>
> $$\frac{\partial c(w,q)}{\partial w_k} = z_k(w,q)$$
>
> This mirrors the consumer theory result where the expenditure function $e(p,u)$ is the support function of the Hicksian demand correspondence, yielding Shephard's lemma $h_k(p,u) = \partial e(p,u)/\partial p_k$.
>
> **Verification with Cobb-Douglas:** For $q = K^{1/2}L^{1/2}$, we derived $LRTC = 2\sqrt{wr} \cdot q$. Computing $\partial LRTC/\partial w = \sqrt{r/w} \cdot q = L(w,r,q)$ confirms Shephard's lemma. Similarly, $\partial LRTC/\partial r = \sqrt{w/r} \cdot q = K(w,r,q)$.

#### 3.2.4 Short-Run vs Long-Run Cost

| Aspect | Short Run | Long Run |
|--------|----------|----------|
| Fixed factors | At least one input fixed ($K = \bar K$) | All inputs variable |
| Cost function | $SRTC(Q) = wL(Q) + r\bar K$ | $LRTC(Q) = wL^*(Q) + rK^*(Q)$ |
| Fixed cost | $r\bar K$ (sunk in SR) | Zero (all costs variable) |
| Shutdown condition | $P < \min AVC$ | $P < \min AC$ |
| Supply slope | Upward (if DRS); can be flat/backward | Upward (DRS) or flat (CRS) |

#### 3.2.5 Complete Cobb-Douglas CMP Analysis (Munoz-Garcia Ch.4, Example 4.8)

Consider the Cobb-Douglas production function $f(z_1, z_2) = z_1^\alpha z_2^\beta$ with $\alpha, \beta \geq 0$. The firm solves:

$$\min_{z_1, z_2 \geq 0} \; w_1 z_1 + w_2 z_2 \quad \text{subject to} \quad z_1^\alpha z_2^\beta \geq q$$

**Step 1 — Lagrangian:** $\mathcal{L} = w_1 z_1 + w_2 z_2 + \lambda[q - z_1^\alpha z_2^\beta]$

**Step 2 — FOCs (interior solution):**

$$\frac{\partial \mathcal{L}}{\partial z_1} = w_1 - \lambda \alpha z_1^{\alpha-1} z_2^\beta = 0, \qquad
\frac{\partial \mathcal{L}}{\partial z_2} = w_2 - \lambda \beta z_1^\alpha z_2^{\beta-1} = 0$$

**Step 3 — Tangency condition:** Dividing the two FOCs:

$$\frac{w_1}{w_2} = \frac{\alpha z_1^{\alpha-1} z_2^\beta}{\beta z_1^\alpha z_2^{\beta-1}} = \frac{\alpha z_2}{\beta z_1}$$

Solving for $z_2$: $z_2 = \frac{\beta}{\alpha} \cdot \frac{w_1}{w_2} \cdot z_1$

**Step 4 — Conditional factor demands:** Substitute into the production constraint:

$$q = z_1^\alpha \left(\frac{\beta}{\alpha} \cdot \frac{w_1}{w_2} \cdot z_1\right)^\beta = z_1^{\alpha+\beta} \left(\frac{\beta w_1}{\alpha w_2}\right)^\beta$$

$$z_1(w,q) = \left(\frac{\alpha w_2}{\beta w_1}\right)^{\beta/(\alpha+\beta)} \cdot q^{1/(\alpha+\beta)}$$

Similarly:

$$z_2(w,q) = \left(\frac{\beta w_1}{\alpha w_2}\right)^{\alpha/(\alpha+\beta)} \cdot q^{1/(\alpha+\beta)}$$

**Step 5 — Cost function:**

$$c(w,q) = w_1 z_1(w,q) + w_2 z_2(w,q) = w_1^{\alpha/(\alpha+\beta)} w_2^{\beta/(\alpha+\beta)} q^{1/(\alpha+\beta)} \cdot K$$

where $K \equiv \left(\frac{\alpha}{\beta}\right)^{\beta/(\alpha+\beta)} + \left(\frac{\beta}{\alpha}\right)^{\alpha/(\alpha+\beta)}$ is a constant.

**Step 6 — Verify Shephard's Lemma:**

$$\frac{\partial c(w,q)}{\partial w_1} = \frac{\alpha}{\alpha+\beta} \cdot \frac{c(w,q)}{w_1} = z_1(w,q) \quad \checkmark$$

$$\frac{\partial c(w,q)}{\partial w_2} = \frac{\beta}{\alpha+\beta} \cdot \frac{c(w,q)}{w_2} = z_2(w,q) \quad \checkmark$$

**Step 7 — Log-linear form:**

$$\ln c(w,q) = \frac{\alpha}{\alpha+\beta} \ln w_1 + \frac{\beta}{\alpha+\beta} \ln w_2 + \frac{1}{\alpha+\beta} \ln q + \ln K$$

The cost function is linear in the logs of output and input prices — a property exploited in the **translog cost function** used extensively in empirical industrial organization.

**Step 8 — Expansion path derivation:** The expansion path traces cost-minimizing $(z_1, z_2)$ combinations as $q$ varies, holding input prices constant. From the tangency condition:

$$z_2 = \frac{\beta w_1}{\alpha w_2} \cdot z_1$$

Since $w_1, w_2, \alpha, \beta$ are constants, the expansion path is a **straight line through the origin**. The $z_2/z_1$ ratio is fixed at $(\beta w_1)/(\alpha w_2)$ for all output levels. This linear expansion path reflects the **homothetic** nature of the Cobb-Douglas production function — the input mix is independent of the scale of production.

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

> **Munoz-Garcia Insight — Convexity via Support Function (Ch.4, §4.4):**
> The profit function $\pi(p)$ can be understood as the **support function** of the negative production set $-Y$:
>
> $$\pi(p) = \mu_{-Y}(p) = \min_{y \in Y} \{ p \cdot (-y) \} = \max_{y \in Y} \{ p \cdot y \}$$
>
> As a support function of a convex set, $\pi(p)$ is **convex in prices**. This representation yields a dual characterization of the production set:
>
> $$Y = \{ y \in \mathbb{R}^L : p \cdot y \leq \pi(p) \text{ for all } p \gg 0 \}$$
>
> **Economic intuition for convexity:** The firm benefits more from extreme price vectors than from balanced ones. Consider two price scenarios $p$ (high output price, low input price) and $p'$ (low output price, high input price). Under $p$, the firm produces aggressively; under $p'$, it scales back. A convex combination $\bar p = \alpha p + (1-\alpha)p'$ represents "muddled" prices where the firm cannot fully exploit either favorable scenario. Hence $\pi(\bar p) \leq \alpha\pi(p) + (1-\alpha)\pi(p')$.
>
> **Contrast with cost function:** The cost function $c(w,q)$ is **concave** in input prices $w$ because when input prices fluctuate, the firm can adjust its input mix toward relatively cheaper inputs — substitution mitigates cost increases. The profit function, by contrast, is **convex** in output prices because the firm can expand output when prices rise (no budget constraint limits this expansion).

> **Exam Tip:** Profit function is **convex** (not concave!) in prices. Cost function is **concave** in input prices. Don't confuse them.

#### 3.3.2 Hotelling's Lemma — Envelope Theorem Proof

$$\pi(p) = p \cdot y(p)$$

Apply the envelope theorem:

$$\frac{\partial \pi(p)}{\partial p_k} = \left. \frac{\partial}{\partial p_k} (p \cdot y) \right|_{y = y(p)} = y_k(p)$$

**Economic intuition:** A \$1 increase in output price $k$ raises profit by exactly the amount of output $k$ produced, because the firm is already optimizing — any adjustment would only have a second-order effect.

> **Munoz-Garcia Insight — Formal Hotelling's Lemma and Supply Properties (Ch.4, §4.4):**
> **Proof via duality theorem:** Hotelling's lemma is an immediate application of the duality theorem from consumer theory. Since $\pi(p) = \max_{y \in Y} p \cdot y$ is the support function of $Y$, by the duality theorem, if the supply correspondence $y(p)$ is single-valued, then $\pi(p)$ is differentiable at $p$ and:
>
> $$\nabla_p \pi(p) = y(p) \quad \text{or equivalently} \quad \frac{\partial \pi(p)}{\partial p_k} = y_k(p)$$
>
> **Matrix properties of supply:** If $y(p)$ is differentiable at $p$, then the derivative matrix $D y(p) = D^2 \pi(p)$ (the Hessian of the profit function) has three key properties:
>
> 1. **Symmetric PSD:** $D y(p)$ is symmetric positive semidefinite (since $\pi$ is convex in $p$, its Hessian is PSD)
> 2. **Own-price effects non-negative:** $\partial y_k(p)/\partial p_k \geq 0$ for all $k$ — the **Law of Supply**
> 3. **Euler condition:** $D y(p) \cdot p = 0$ — supply is HD(0) in prices
>
> **Cross-substitution symmetry:** $\partial y_l(p)/\partial p_k = \partial y_k(p)/\partial p_l$ for all $k, l$. This means the effect of good $l$'s price on the supply of good $k$ equals the effect of good $k$'s price on the supply of good $l$.
>
> **No wealth effects:** Unlike consumer demand (where income effects can produce Giffen goods), producer supply has **no budget constraint** — only substitution effects operate. Hence the Law of Supply is robust: supply curves always slope upward, both at the firm level and in the aggregate.

#### 3.3.3 MRPT = MC Ratio (Duality Result)

**Theorem:** $MRPT_{x,y} = MC_x / MC_y$

**Proof:** Total differentiate $F(q_x, q_y, z) = 0$ along frontier:

$$\frac{\partial F}{\partial q_x} dq_x + \frac{\partial F}{\partial q_y} dq_y = 0 \;\Rightarrow\; MRPT_{x,y} = -\frac{dq_y}{dq_x} = \frac{\partial F/\partial q_x}{\partial F/\partial q_y}$$

Profit function: $\pi = p_x q_x + p_y q_y - c(q_x, q_y)$. FOCs: $p_x = MC_x$, $p_y = MC_y$.

Tangency condition of PMP: $MRPT_{x,y} = p_x/p_y$. Substituting:

$$MRPT_{x,y} = \frac{p_x}{p_y} = \frac{MC_x}{MC_y}$$

**GE connection:** In competitive equilibrium, $MRPT = MC_x/MC_y = p_x/p_y = MRS$ — this chain of equalities is the **product-mix efficiency** condition for Pareto optimality.

> **Munoz-Garcia Insight — Production Theory and the 2×2×2 GE Model (Ch.6, §6.4-6.5):**
> In the two-consumer, two-firm, two-factor (2×2×2) general equilibrium model, firm behavior feeds into the equilibrium through three channels:
>
> **1. First-order conditions from PMP:** Each firm $j$ hires capital and labor until the value of marginal product equals the factor price:
> $$p_1 F_{1K} = r, \quad p_1 F_{1L} = w \quad \text{(firm 1 producing good 1)}$$
> $$p_2 F_{2K} = r, \quad p_2 F_{2L} = w \quad \text{(firm 2 producing good 2)}$$
>
> **2. Factor market equilibrium:** Combining firms' FOCs yields the equality of MRTS across firms:
> $$MRTS^1_{L,K} = \frac{w}{r} = MRTS^2_{L,K}$$
> This is the **efficient factor allocation** condition — factors cannot be reallocated between firms to increase total output.
>
> **3. Product-mix efficiency:** Dividing the FOCs for each firm yields:
> $$\frac{p_1}{p_2} = \frac{F_{2K}}{F_{1K}} = \frac{F_{2L}}{F_{1L}} \equiv MRT_{1,2}$$
> Together with consumer optimization $(MRS = p_1/p_2)$, we obtain:
> $$MRS^i_{1,2} = MRT_{1,2} = \frac{p_1}{p_2}$$
> This chain — **$MRS = MRT = p_1/p_2$** — is the fundamental efficiency condition for Pareto optimality in a production economy (product-mix efficiency).
>
> **4. Stolper-Samuelson theorem (Ch.6, §6.5.1):** Within this framework, an increase in the price of good 1 raises the return to the factor used intensively in producing good 1 and lowers the return to the other factor — a key result linking output prices to factor income distribution.

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

> **Munoz-Garcia Insight — Aggregate Supply under CRS and Free Entry (Ch.4, §4.11, App. A):**
>
> **Case 1: CRS technology:** When each firm has constant returns to scale (CRS), the production function satisfies $f(tK, tL) = t f(K,L)$. This implies:
> - **Linear total cost:** $TC(q) = c \cdot q$ (constant marginal cost)
> - **Constant AC = MC:** $AC(q) = MC(q) = c$ for all $q$
> - **Supply indeterminacy at the firm level:** If $p < c$, the firm supplies $q = 0$; if $p > c$, the firm would want to supply infinite output; if $p = c$, any output level yields zero profit
>
> **Case 2: CRS with fixed costs (nonsunk):** With fixed cost $K > 0$ (e.g., a license fee recoverable upon exit):
> $$TC(q) = K + c \cdot q, \quad AC(q) = \frac{K}{q} + c, \quad MC(q) = c$$
> Average cost declines in $q$ (approaching $c$ asymptotically), while marginal cost is constant. The firm supplies only when $p \geq AC(q)$; since $AC(q) > c$ for all finite $q$, the firm must charge above marginal cost to recover fixed costs.
>
> **Aggregate supply with free entry (long run):** Under free entry, firms enter until profits are driven to zero. With CRS and a U-shaped average cost curve (due to a fixed factor or fixed cost in the short run), the LR industry supply is:
> $$P_{LR}^* = \min AC$$
> - **Horizontal LR supply:** The industry can supply any quantity at $P = \min AC$ because firms are identical and entry/exit is costless
> - **Zero profits:** Each firm operates at minimum efficient scale where $P = MC = AC$
> - **Number of firms endogenous:** $N^* = Q^D(P_{LR}^*) / q^*$ where $q^*$ is output at $\min AC$
>
> **Representative producer property (Ch.4, §4.11.2):** The aggregate supply correspondence $y^*(p) = \sum_{j=1}^J y_j(p)$ coincides with the supply that a single firm would choose when maximizing aggregate profits from the aggregate production set $Y = Y_1 + Y_2 + \cdots + Y_J$. Moreover, $\pi^*(p) = \sum_{j=1}^J \pi_j(p)$. This **decentralization result** implies that letting each firm maximize its own profits and summing the solutions yields the optimal aggregate outcome.

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

### 3.7 Production Theory and General Equilibrium

The firm production theory developed in this topic feeds directly into the general equilibrium (GE) framework in two key ways:

#### 3.7.1 From Firm Supply to Aggregate Supply

Individual firm supply curves $q_j(p)$ (derived from $P = MC$ above shutdown) are summed horizontally to obtain industry supply:

$$Q_S(p) = \sum_{j=1}^N q_j(p)$$

Under free entry with identical firms and CRS, the LR industry supply is horizontal at $P = \min AC$, with the number of firms determined by market demand:

$$N^* = \frac{Q_D(p^*)}{q^*(p^*)}$$

#### 3.7.2 From Production to the 2×2×2 GE Model

In the two-consumer, two-good, two-factor GE model (Munoz-Garcia Ch.6), production decisions interact with consumer preferences through three efficiency conditions:

| Efficiency Condition | Formula | Economic Meaning |
|:--------------------|:-------|:----------------|
| **Consumption efficiency** | $MRS^A_{1,2} = MRS^B_{1,2}$ | Cannot reallocate goods to make both consumers better off |
| **Production efficiency** | $MRTS^1_{L,K} = MRTS^2_{L,K}$ | Cannot reallocate factors to increase total output |
| **Product-mix efficiency** | $MRS = MRT = p_1/p_2$ | The mix of goods produced matches consumer preferences |

The chain $MRS = MRT = p_1/p_2$ in competitive equilibrium ensures Pareto optimality — the **First Welfare Theorem** with production.

> **Koutsoyiannis Reference (Ch.4, pp.87-90) — Practical Production Optimization:**
> Koutsoyiannis provides a step-by-step Lagrangian framework for the firm's constrained optimization:
>
> **Problem:** Maximize output $X = f(L, K)$ subject to cost constraint $C = wL + rK$.
>
> **Lagrangian:** $\Phi = X + \lambda(C - wL - rK)$
>
> **FOCs:**
> $$\frac{\partial \Phi}{\partial L} = \frac{\partial X}{\partial L} - \lambda w = 0, \quad
> \frac{\partial \Phi}{\partial K} = \frac{\partial X}{\partial K} - \lambda r = 0, \quad
> \frac{\partial \Phi}{\partial \lambda} = C - wL - rK = 0$$
>
> **Equilibrium condition:** $\displaystyle \frac{MP_L}{w} = \frac{MP_K}{r} = \frac{1}{\lambda}$
>
> The Lagrange multiplier $\lambda$ measures the **marginal product of money** (or, equivalently, $1/\lambda$ is the marginal cost of output in terms of money). The firm equates the marginal product per dollar spent on each factor — if $MP_L/w > MP_K/r$, the firm should hire more labor and less capital until equality is restored.
>
> **Numerical application (Koutsoyiannis style):** Suppose $X = L^{0.5} K^{0.5}$, $w = 4$, $r = 9$, $C = 120$. Find the optimal $L$ and $K$.
>
> Tangency: $\frac{0.5L^{-0.5}K^{0.5}}{4} = \frac{0.5L^{0.5}K^{-0.5}}{9} \Rightarrow \frac{K}{4L} = \frac{L}{9K} \Rightarrow 9K^2 = 4L^2 \Rightarrow K = \frac{2}{3}L$
>
> Budget: $120 = 4L + 9(\frac{2}{3}L) = 4L + 6L = 10L \Rightarrow L^* = 12$, $K^* = 8$, $X^* = (12)^{0.5}(8)^{0.5} \approx 9.8$.




---

<!-- Enhanced by Munoz-Garcia & Koutsoyiannis textbook references -->
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

> **Munoz-Garcia Insight: CV and EV as Integrals of Hicksian Demand**
>
> The expenditure-function definition of CV and EV can be transformed into **areas left of the Hicksian demand curve** using Shephard's lemma ($\partial e(p, u)/\partial p_1 = h_1(p, u)$). For a price decrease of good 1 from $p_1^0$ to $p_1^1$ (where $p_1^1 < p_1^0$), holding all other prices $p_{-1}$ constant:
>
> $$CV = e(p_1^0, p_{-1}, u^0) - e(p_1^1, p_{-1}, u^0) = \int_{p_1^1}^{p_1^0} h_1(p_1, p_{-1}, u^0)\,dp_1$$
>
> $$EV = e(p_1^0, p_{-1}, u^1) - e(p_1^1, p_{-1}, u^1) = \int_{p_1^1}^{p_1^0} h_1(p_1, p_{-1}, u^1)\,dp_1$$
>
> **Intuition:** CV integrates the Hicksian demand at the *original* utility level $u^0$ between the two prices — it measures willingness to pay for the price change while keeping the consumer at her initial well-being. EV integrates the Hicksian demand at the *new* utility level $u^1$ — it measures the income change that would be *equivalent* to the price change.
>
> *Source: Munoz-Garcia, Ch.3, §3.1.2 (pp. 168-170)*

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

**Formal relationship between Hicksian and Walrasian demands for welfare measurement:**

For a normal good, the Slutsky equation $\frac{\partial h_1}{\partial p_1} = \frac{\partial x_1}{\partial p_1} + \frac{\partial x_1}{\partial w} x_1$ implies $\left|\frac{\partial h_1}{\partial p_1}\right| < \left|\frac{\partial x_1}{\partial p_1}\right|$ (since $\frac{\partial x_1}{\partial w} > 0$ for normal goods, the compensated demand is *steeper* than the Marshallian demand). Moreover, since $u^1 > u^0$, the Hicksian demand at $u^1$ lies to the right of the Hicksian demand at $u^0$. Putting these together:

$$\left.\frac{\partial h_1}{\partial p_1}\right|_{u=u^0} < \frac{\partial x_1}{\partial p_1} < \left.\frac{\partial h_1}{\partial p_1}\right|_{u=u^1} \quad \Rightarrow \quad h(p, u^0) \text{ steeper than } x(p,w) \text{ steeper than } h(p, u^1)$$

This ordering of slopes generates the $EV > CS > CV$ ranking for a price decrease.

**Why the ordering reverses for a price increase:**

When the price *rises* from $p_1^0$ to $p_1^1$ (where $p_1^1 > p_1^0$):
- **CV** is the *minimum compensation* needed *after* the price increase to restore the consumer to her original utility $u^0$ — it uses $h(p, u^0)$ which is steeper → larger welfare loss area
- **CS** uses Marshallian demand → intermediate area
- **EV** is the *willingness to accept* the price increase *before* it happens — it uses $h(p, u^1)$ which is flatter → smaller welfare loss area

Hence $CV > CS > EV$ for a price increase on a normal good.

The gap $|EV - CV|$ measures the **income effect**. When the income effect is zero (quasilinear utility), all three measures coincide: $CV = EV = CS$.

**Diagram logic (price decrease):**

At $p_1^1 < p_1^0$, for a normal good: $h(p, u^1) > x(p, w) > h(p, u^0)$. The three demand curves intersect at $p_1^0$. EV is the area left of $h(p, u^1)$ between $p^0$ and $p^1$; CS is the area left of $x(p, w)$; CV is the area left of $h(p, u^0)$.

**For inferior goods:** The ordering reverses — Hicksian demand at $u^1$ shifts left instead of right.

**Willig (1976) bounds — detailed derivation:**

Willig (1976) provided rigorous bounds on the percentage error from using CS instead of CV or EV. For a price change from $p_1^0$ to $p_1^1$ with income elasticity $\eta = \frac{\partial x_1}{\partial w} \cdot \frac{w}{x_1}$:

$$\frac{|CS - CV|}{|CV|} \le \frac{\eta \cdot |\Delta p / p|}{2}, \qquad \frac{|CS - EV|}{|EV|} \le \frac{\eta \cdot |\Delta p / p|}{2}$$

**Derivation intuition:** Using the Slutsky equation and the fact that the difference between Marshallian and Hicksian demands grows with the income effect, the leading-order error term is proportional to $\eta \cdot (\Delta p / p) / 2$. The bounds are tightest when (i) the price change is small, (ii) the good is a small share of the budget, or (iii) the income elasticity is low.

For realistic income elasticities ($\eta \approx 0.5$ to $1.5$) and moderate price changes ($\Delta p / p \le 0.1$), the maximum error is $< 5\%$, supporting CS as a practical approximation. For large price changes on necessity goods with high income elasticity (e.g., housing, with $\eta \approx 1.38$), the error can be substantial, and CV or EV should be used.

**Special cases:**
| Condition | Relationship |
|-----------|-------------|
| Zero income effect (quasilinear) | $CS = CV = EV$ (exact) |
| Small price change | $CS \approx CV \approx EV$ (Willig bounds) |
| Normal good, large price change | $EV > CS > CV$ (decrease); $CV > CS > EV$ (increase) |
| Inferior good | Reversed ordering |

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

---

### 4.2 Pareto Optimality

#### 4.2.1 Definition and Concept

An allocation $\mathbf{x}$ is **Pareto-optimal** (Pareto-efficient) if no feasible reallocation can make at least one individual better off without making any other individual worse off:

$$\text{Allocation } \mathbf{x} \text{ is PO } \iff \nexists \ \mathbf{x}' \text{ s.t. } U_i(\mathbf{x}') \ge U_i(\mathbf{x}) \ \forall i \text{ and } U_j(\mathbf{x}') > U_j(\mathbf{x}) \text{ for some } j$$

A **Pareto improvement** is a reallocation making at least one person better off without harming anyone else.

> **Koutsoyiannis Insight: Pareto Optimality and the Edgeworth Box**
>
> Koutsoyiannis (Ch.23, §4) emphasizes that the Pareto criterion is **purely objective** — it requires no interpersonal utility comparisons. In the $2 \times 2$ Edgeworth exchange box (figure 23.1), the contract curve contains all Pareto-efficient distributions. Any point **off** the contract curve (e.g., point $z$) is inefficient: a reallocation to any point between $a$ and $b$ along the contract curve increases the utility of at least one consumer without harming the other.
>
> The three Pareto conditions (exchange, production, product-mix) precisely characterize the general equilibrium of a perfectly competitive system. A point off the contract curve represents unexploited gains from trade — the hallmark of Pareto inefficiency.
>
> *Source: Koutsoyiannis, Ch.23, §4 (pp. 526-529)*

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

> **Munoz-Garcia Insight: Lagrangian Derivation of Pareto Conditions from Competitive Equilibrium**
>
> Munoz-Garcia (§6.5) shows that the three Pareto conditions emerge from a single constrained optimization problem. The social planner maximizes one consumer's utility subject to (i) a minimum utility constraint for the other consumer, (ii) technological feasibility, and (iii) input feasibility:
>
> $$\max_{x_1^A, x_2^A, x_1^B, x_2^B, L_1, K_1, L_2, K_2} u_1(x_1^1, x_2^1)$$
>
> $$\text{s.t.}\quad u_2(x_1^2, x_2^2) \ge \bar{u}_2$$
> $$x_1^1 + x_1^2 \le F_1(L_1, K_1),\quad x_2^1 + x_2^2 \le F_2(L_2, K_2)$$
> $$L_1 + L_2 \le \bar{L},\quad K_1 + K_2 \le \bar{K}$$
>
> The Lagrangian is:
>
> $$\mathcal{L} = u_1(\cdot) + \lambda[u_2(\cdot) - \bar{u}_2] + \mu_1[F_1(\cdot) - x_1^1 - x_1^2] + \mu_2[F_2(\cdot) - x_2^1 - x_2^2] + \delta_L[\bar{L} - L_1 - L_2] + \delta_K[\bar{K} - K_1 - K_2]$$
>
> **FOCs yield:**
> 1. **Consumption efficiency:** $\displaystyle MRS_{1,2}^1 = MRS_{1,2}^2$ (from ratios of $\partial\mathcal{L}/\partial x_1^i$ and $\partial\mathcal{L}/\partial x_2^i$)
> 2. **Production efficiency:** $\displaystyle MRTS_{L,K}^1 = MRTS_{L,K}^2$ (from ratios of $\partial\mathcal{L}/\partial L_j$ and $\partial\mathcal{L}/\partial K_j$)
> 3. **Product-mix efficiency:** $\displaystyle MRS_{1,2}^i = MRT_{1,2}$ (combining the consumption and production FOCs)
>
> A competitive equilibrium **decentralizes** this planner's problem: each consumer maximizes utility at given prices, each firm maximizes profit at given prices, and prices adjust until all markets clear. The price system simultaneously solves all three efficiency conditions.
>
> *Source: Munoz-Garcia, Ch.6, §6.5 (pp. 456-460)*

---

**Proof of the First Welfare Theorem (by contradiction):**

Assume $(x, y)$ is a WEA at prices $p^*$ but is not Pareto efficient. Then there exists a feasible allocation $(\hat{x}, \hat{y})$ such that $u_i(\hat{x}_i) \ge u_i(x_i)$ for all $i$ with strict inequality for at least one $i$. Since utility functions are strictly increasing, this implies $p^* \cdot \hat{x}_i \ge p^* \cdot x_i$ for all $i$, with strict inequality for at least one $i$. Summing:

$$p^* \cdot \sum_i \hat{x}_i > p^* \cdot \sum_i x_i$$

By feasibility, $\sum_i \hat{x}_i = \sum_i e_i + \sum_j \hat{y}_j$ and $\sum_i x_i = \sum_i e_i + \sum_j y_j$. Substituting:

$$p^* \cdot \sum_j \hat{y}_j > p^* \cdot \sum_j y_j$$

Thus $p^* \cdot \hat{y}_j > p^* \cdot y_j$ for some firm $j$, meaning $y_j$ was not profit-maximizing — contradicting that $(x, y)$ is a WEA. Hence every WEA must be Pareto efficient. ∎

*Source: Munoz-Garcia, Ch.6, §6.5 (pp. 457-458)*

#### 4.3.2 Second Welfare Theorem

> **Any Pareto-optimal allocation can be realized as a competitive equilibrium with appropriate lump-sum transfers.**

*Formal statement:* Under convexity of preferences and production sets, for any Pareto-optimal allocation, there exists a set of prices and lump-sum transfers such that the allocation is a competitive equilibrium.

**Key assumptions:** Convex preferences, convex production sets, lump-sum transfers (fixed transfers independent of choices, preserving marginal incentives).

**Direction:**
$$\text{FWT: CE } \xrightarrow{\text{local non-satiation}} \text{ PO} \qquad \text{SWT: PO } \xrightarrow{\text{convexity + transfers}} \text{ CE}$$

> **Munoz-Garcia Insight: The Second Welfare Theorem and Redistribution**
>
> The SWT (Munoz-Garcia, §6.4.2) states: if a PEA $x$ (on the contract curve) is the desired social allocation, we can redistribute initial endowments from $e$ to $e^*$ (where $p^* \cdot e_i^* = p^* \cdot x_i$ for every consumer $i$) and then let competitive markets operate. The resulting WEA will be exactly $x$. This is the formal basis for the **separation of efficiency and equity**: society can first choose a "fair" distribution (via lump-sum endowment redistribution) and then rely on competitive markets to achieve efficiency.
>
> The SWT requires convexity because non-convex preferences or production sets can create gaps in the supporting hyperplane — the Pareto-optimal point may not have a price system that sustains it as a competitive equilibrium.
>
> *Source: Munoz-Garcia, Ch.6, §6.4.2 (pp. 444-447)*

---

> **Arrow-Debreu Fixed-Point Argument for Existence of Competitive Equilibrium**
>
> The existence of a Walrasian equilibrium is not guaranteed by counting equations — it requires a fixed-point argument. Munoz-Garcia (Mathematical Appendix, §A.12) outlines the logic:
>
> Define the aggregate excess demand function $z(p) = \sum_i x_i(p, p \cdot e_i) - \sum_i e_i$. Under standard assumptions (continuity, homogeneity of degree zero, Walras' law), $z(p)$ maps from the price simplex into itself. A Walrasian equilibrium is a price vector $p^*$ such that $z(p^*) \le 0$.
>
> **Brouwer's Fixed Point Theorem:** If $f: A \to A$ is a continuous function from a compact, convex set into itself, then there exists $x \in A$ such that $f(x) = x$.
>
> Construct $g(p) = p + \max(0, z(p))$ and normalize. Then $g(p)$ is continuous and maps the price simplex into itself. By Brouwer's theorem, there exists $p^*$ such that $g(p^*) = p^*$, which implies $z(p^*) \le 0$ — i.e., equilibrium exists. For correspondences (e.g., with non-convexities), Kakutani's fixed-point theorem extends the result.
>
> Arrow and Debreu (1954) used this approach to prove the existence of competitive equilibrium in a general production economy, establishing the logical consistency of the Walrasian model.
>
> *Source: Munoz-Garcia, Mathematical Appendix, §A.12 (pp. 845-848); Arrow-Debreu, Econometrica (1954)*

---

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

> **Bergson-Samuelson SWF: Formal Definition and Relation to the GUPF**
>
> Bergson (1938) formalized the SWF as follows. Let $\mathbf{U} = (U_1, \dots, U_n)$ be the vector of individual utilities (ordinal indexes, interpersonally non-comparable). A **Bergson-Samuelson SWF** is a real-valued function $W = \mathcal{W}(\mathbf{U})$ that satisfies:
>
> 1. **Pareto principle:** $\partial \mathcal{W} / \partial U_i > 0$ for all $i$ (if anyone's utility rises, ceteris paribus, welfare rises)
> 2. **Continuity:** $\mathcal{W}$ is continuous in $\mathbf{U}$
> 3. **Convexity/concavity:** The degree of concavity reflects society's inequality aversion
>
> **Connection to the GUPF:** The Grand Utility Possibility Frontier (GUPF) is the locus of Pareto-efficient utility pairs $(U_A, U_B)$ satisfying all three marginal conditions. Social welfare maximization occurs at the point of tangency:
>
> $$\max_{U_A, U_B} \mathcal{W}(U_A, U_B) \quad \text{s.t.} \quad (U_A, U_B) \in \text{GUPF}$$
>
> The tangency condition $\displaystyle \frac{\partial \mathcal{W}/\partial U_A}{\partial \mathcal{W}/\partial U_B} = \text{Slope(GUPF)}$ determines the "bliss point" — the unique allocation that balances efficiency and equity according to the value judgements embedded in $\mathcal{W}$.
>
> *Source: Koutsoyiannis, Ch.23, §A.6 (pp. 529-530); Munoz-Garcia, Ch.6, §6.4.2*

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

> **Koutsoyiannis Insight: Deriving the GUPF via the Envelope Condition**
>
> Koutsoyiannis (Ch.23, §B.1) presents an elegant way to derive the GUPF. For each point on the PPC (e.g., point $a$ with product-mix $Y_0 X_0$), construct the Edgeworth exchange box and locate the point on the contract curve where $MRS = MRPT$ (i.e., where the indifference curve slope equals the PPC slope at $a$). This single point on each UPF — and only this point — belongs to the **envelope** or GUPF.
>
> The GUPF is therefore not simply all UPFs combined, but the outer envelope of points satisfying $MRPT = MRS$. This ensures that along the GUPF, all three Pareto conditions hold simultaneously: $MRS^A = MRS^B$ (exchange efficiency), $MRTS^X = MRTS^Y$ (production efficiency), and $MRPT = MRS$ (product-mix efficiency).
>
> *Source: Koutsoyiannis, Ch.23, §B.1 (pp. 531-533)*

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

> **Scitovsky Reversal Test — Numerical Example**
>
> Consider two states, $S_1$ and $S_2$, with two consumers (A = rich, B = poor). The UPFs for the two states intersect:
>
> | State | $U_A$ | $U_B$ |
> |-------|-------|-------|
> | $S_1$ | 100 | 40 |
> | $S_2$ | 80 | 60 |
>
> **Forward test ($S_1 \to S_2$):** A loses 20 utils, B gains 20 utils. Under K-H, if A's WTA (willingness to accept) the loss is, say, £20 (low MU of money for rich), and B's WTP (willingness to pay) for the gain is £30 (high MU of money for poor), then £30 > £20 so the test passes — $S_2$ is preferred.
>
> **Reversal test ($S_2 \to S_1$):** A gains 20 utils, B loses 20 utils. A's WTP for the gain might be £15 (low MU), B's WTA for the loss might be £40 (high MU). Now £40 > £15, so the reversal test also passes — $S_1$ is preferred!
>
> This contradiction arises because the UPFs of $S_1$ and $S_2$ intersect, so the Kaldor-Hicks criterion is not transitive.
>
> **Scitovsky's Double Test resolves this:**
> 1. **Forward test:** Gainers can compensate losers (K-H test passes)
> 2. **Reversal test:** Losers *cannot* bribe gainers to reject the change
>
> A change is welfare-improving only if (i) passes AND (ii) fails. In the example above, both tests pass, so the change is rejected as contradictory.
>
> *Source: Koutsoyiannis, Ch.23, §5; Scitovsky (1941)*

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


---

<!-- Enhanced by Munoz-Garcia & Koutsoyiannis textbook references -->
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

> **Munoz-Garcia Insight: Existence via Fixed-Point Theorem (§6.1, pp.332-335)**
>
> The Arrow-Debreu (1954) existence proof transforms the equilibrium problem into a fixed-point problem. Define the aggregate excess demand function $z(p) = (z_1(p), z_2(p), \dots, z_L(p))$. The properties below guarantee existence of $p^* \gg 0$ such that $z(p^*) = 0$:
>
> 1. **z(p) is continuous** on the price simplex $\Delta = \{ p \in \mathbb{R}^L_{++} : \sum_{i=1}^L p_i = 1 \}$ (follows from continuity of Walrasian demands).
> 2. **z(p) is homogeneous of degree zero**: $z(\lambda p) = z(p)$ for all $\lambda > 0$, so we can normalise prices to lie in the unit simplex.
> 3. **Walras' Law holds**: $p \cdot z(p) = 0$ for all $p$, so if $z_i(p) \neq 0$ for some $i$, there must be offsetting signs elsewhere.
> 4. **Boundary behaviour**: As $p_i \to 0$, $z_i(p) \to +\infty$ (consumers demand infinite amounts of a free good).
>
> Define a continuous mapping $g : \Delta \to \Delta$ by:
> $$g_i(p) = \frac{p_i + \max\{0, z_i(p)\}}{1 + \sum_{j=1}^L \max\{0, z_j(p)\}} \quad \text{for each good } i$$
>
> By **Brouwer's fixed-point theorem** (every continuous function from a compact, convex set to itself has a fixed point), there exists $p^*$ such that $g(p^*) = p^*$. At this fixed point, the excess demand must satisfy $z_i(p^*) \le 0$ for all $i$, and by Walras' Law, $z_i(p^*) = 0$ for all $i$ — a Walrasian equilibrium. (For correspondences, **Kakutani's fixed-point theorem** generalises the result; Munoz-Garcia, Mathematical Appendix §A.12, pp.845-847.)

**(ii) Uniqueness:** If equilibrium exists, is there exactly one?

Multiple equilibria arise if D and S intersect more than once. In terms of **excess demand** $E(P) = QD(P) - QS(P)$: there are as many equilibria as the number of times $E(P)$ intersects the vertical price-axis. With a backward-bending supply curve (e.g., labour market), three intersections are possible.

Equilibrium is unique if the excess demand function satisfies **gross substitutability**: $\partial z_i(p)/\partial p_j > 0$ for all $i \neq j$. This ensures the mapping is monotone (Koutsoyiannis, p.489). Normal goods (downward-sloping D, upward-sloping S) guarantee $dE/dP < 0$ leading to uniqueness. Giffen goods, backward-bending supply can create multiple crossings.

> **Munoz-Garcia Insight: Gross Substitutability and Uniqueness (§6.2, pp.337-338)**
>
> **Proof by contradiction (Munoz-Garcia, p.337):** Suppose $p^* \gg 0$ and $p' \gg 0$ are both Walrasian equilibrium price vectors, $z(p^*) = z(p') = 0$, with $p' \neq p^*$. Define $m = \max_j (p'_j / p^*_j) > 1$ (the largest price ratio). Let good $k$ be a good for which $p'_k / p^*_k = m$, so $p'_k = m p^*_k$ while $p'_j \le m p^*_j$ for all $j \neq k$. Now consider the price vector $\tilde{p} = (m p^*_1, \dots, m p^*_{k-1}, p^*_k, m p^*_{k+1}, \dots, m p^*_L)$, i.e., raise all prices except good $k$ by the factor $m$.
>
> By gross substitutability $(\partial z_i(p)/\partial p_j > 0$ for $i \neq j)$, increasing all $p_j$ (for $j \neq k$) must *increase* the excess demand for good $k$: $z_k(\tilde{p}) > z_k(p^*) = 0$. But $z(\cdot)$ is HD(0), so $z_k(\tilde{p}) = z_k(p')$ (since $\tilde{p}$ and $p'$ differ only by scalar multiples). Hence $z_k(p') > 0$, contradicting $z(p') = 0$. Therefore the equilibrium price vector is **unique**.
>
> **Key implication:** Gross substitutability + Walras' Law + HD(0) ⇒ unique relative prices. The system determines $n-1$ relative prices uniquely.

**(iii) Stability:** If displaced from equilibrium, does the system return?

- **Stable equilibrium:** D cuts S from above -> excess demand drives price up, excess supply drives it down (negative slope of $E(P)$ at equilibrium).
- **Unstable equilibrium:** D cuts S from below -> excess demand drives price down, excess supply drives it up (positive slope of $E(P)$ at equilibrium).
- Walrasian **tatonnement**: auctioneer adjusts prices proportionally to excess demand: $\dot{p}_i = k_i \cdot z_i(p)$. Stable if $\partial E/\partial P < 0$ at equilibrium.

**Formal tatonnement process (Munoz-Garcia §6.3; Koutsoyiannis pp.516-517):** Walras' adjustment mechanism posits an auctioneer who calls out prices and receives demand/supply bids before any transactions occur (a "recontracting" assumption). Prices adjust according to:

$$\dot{p}_i = \frac{d p_i}{d t} = k_i \cdot z_i(p), \quad k_i > 0$$

where $\dot{p}_i$ is the time derivative of $p_i$. The equilibrium $p^*$ is **locally stable** if the system converges back to $p^*$ after a small perturbation. Using a linear approximation around $p^*$, stability depends on the eigenvalues of the Jacobian matrix $J_{ij} = \partial z_i / \partial p_j$ at $p^*$. A sufficient condition for stability is that all goods are **gross substitutes** ($\partial z_i/\partial p_j > 0$ for $i \neq j$), as Arrow and Hurwicz (1958) established. Koutsoyiannis (p.517) summarises: "Under the usual disequilibrium behaviour assumptions and the usual properties of a Walrasian general equilibrium system an equilibrium is stable if all commodities are strict gross substitutes."

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

**Proof from individual budget constraints (Munoz-Garcia, p.332):** Each consumer $h$ has utility functions that are strictly increasing, so the budget constraint in the UMP binds:
$$p \cdot x^h(p) = p \cdot \omega^h \quad \text{(income exhaustion)}$$

Thus $p \cdot (x^h - \omega^h) = 0$ for each $h$. The excess demand vector for consumer $h$ is $z^h(p) = x^h(p) - \omega^h$, and summing the budget constraints over all $H$ consumers:

$$\sum_{h=1}^H p \cdot (x^h - \omega^h) = p \cdot \sum_{h=1}^H (x^h - \omega^h) = p \cdot z(p) = 0$$

**Implication:** If $n-1$ markets are in equilibrium, the $n$th market must also be in equilibrium -- one market-clearing equation is redundant. Therefore, only $n-1$ independent equations determine $n-1$ relative prices. In a two-good economy, Walras' Law implies $p_1 z_1(p) = -p_2 z_2(p)$: if good 1 is in excess demand ($z_1 > 0$), good 2 must be in excess supply ($z_2 < 0$); if market 1 clears ($z_1 = 0$), market 2 clears automatically ($z_2 = 0$).

**Numeraire:** Because Walras' Law makes one equation redundant, absolute prices are indeterminate. By setting one price as numeraire ($P_1 = 1$), the system determines $n-1$ relative prices uniquely. Economically, only relative prices matter for allocation decisions — doubling all prices leaves budget sets, demand, and excess demand unchanged (HD(0)). The choice of numeraire is arbitrary; any good can serve as the unit of account (Koutsoyiannis, p.488; Munoz-Garcia, p.333).

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

**Mapping from contract curve to PPC (Koutsoyiannis, pp.535-538; Munoz-Garcia, pp.448-450):** Each point on the Edgeworth contract curve of production simultaneously defines: (i) the allocation of K and L between the two industries; and (ii) the maximum output pair $(X, Y)$ that can be produced from these factor allocations. Plotting these output pairs in $(X, Y)$-space traces out the **Production Possibility Curve (PPC)**, also called the product transformation curve. The slope of the PPC is the **Marginal Rate of Product Transformation** (MRPT):

$$\text{MRPT}_{xy} = -\frac{dY}{dX} = \frac{MC_X}{MC_Y}$$

Under **constant returns to scale (CRS)**, the contract curve is a straight line from the origin (the diagonal of the Edgeworth box) when isoquants are homothetic. This maps to a **concave PPC** in product space, reflecting increasing opportunity cost: as the economy produces more X, the marginal output of Y sacrificed rises because factors are not perfectly substitutable across industries. With **decreasing returns to scale (DRS)**, the PPC becomes even more concave; with **increasing returns to scale (IRS)**, the PPC may become convex, violating the conditions required for competitive equilibrium existence (Arrow-Debreu assumes no increasing returns).

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

**Formal derivation from Lagrangian optimisation (Munoz-Garcia §6.5, pp.380-390):**

**Condition 1 — Efficiency in exchange:** A social planner maximises a weighted sum of utilities subject to the resource constraint:
$$\max_{x_{ih}} \; W = \sum_{h=1}^H \alpha_h u_h(x_{1h}, \dots, x_{Lh}) \quad \text{s.t.} \quad \sum_{h=1}^H x_{ih} \le \sum_{h=1}^H \omega_{ih} \; \forall i$$

The Lagrangian is:
$$\mathcal{L} = \sum_{h=1}^H \alpha_h u_h(\cdot) + \sum_{i=1}^L \lambda_i \left( \sum_{h=1}^H \omega_{ih} - \sum_{h=1}^H x_{ih} \right)$$

FOC for consumer $h$ and goods $i, j$:
$$\frac{\partial \mathcal{L}}{\partial x_{ih}} = \alpha_h \frac{\partial u_h}{\partial x_{ih}} - \lambda_i = 0, \quad \frac{\partial \mathcal{L}}{\partial x_{jh}} = \alpha_h \frac{\partial u_h}{\partial x_{jh}} - \lambda_j = 0$$

Dividing the FOCs for goods $i$ and $j$ for the same consumer $h$:
$$\frac{\partial u_h / \partial x_{ih}}{\partial u_h / \partial x_{jh}} = \frac{\lambda_i}{\lambda_j} \equiv \text{MRS}^h_{ij}$$

Since the RHS $\lambda_i / \lambda_j$ is the same for all consumers $h$, we obtain:
$$\text{MRS}^A_{ij} = \text{MRS}^B_{ij} \quad \text{for all consumers } A, B$$

**Condition 2 — Efficiency in production:** Choose input allocations $(k_{jf}, l_{jf})$ for firms $f$ producing goods $j$ to maximise total output:
$$\max \; \sum_{j=1}^M p_j f_j(k_{jf}, l_{jf}) \quad \text{s.t.} \quad \sum_{j=1}^M k_{jf} \le \bar{K}, \; \sum_{j=1}^M l_{jf} \le \bar{L}$$

The FOCs imply:
$$\frac{\partial f_X / \partial l_X}{\partial f_X / \partial k_X} = \frac{\partial f_Y / \partial l_Y}{\partial f_Y / \partial k_Y} \quad \Rightarrow \quad \text{MRTS}^X_{LK} = \text{MRTS}^Y_{LK}$$

**Condition 3 — Efficiency in product-mix:** The MRPT between goods X and Y from the production side equals the common MRS among consumers:
$$\text{MRPT}_{xy} = -\frac{dY}{dX}\bigg|_{\text{PPC}} = \frac{MC_X}{MC_Y} = \frac{P_X}{P_Y} = \text{MRS}_{xy}$$

In perfect competition, $P_X = MC_X$ and $P_Y = MC_Y$, so MRPT = $P_X/P_Y$ = MRS, ensuring the top-level efficiency condition holds automatically.

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

**Fully-Solved 2×2×2 Competitive Equilibrium Example (Munoz-Garcia §6.4, Example 6.6, pp.343-346):**

Consider a pure exchange economy with two goods (1, 2) and two consumers (A, B), both with Cobb-Douglas utility $u^i(x_1^i, x_2^i) = x_1^i x_2^i$. Endowments: $e^A = (100, 350)$, $e^B = (100, 50)$. Solve for the Walrasian equilibrium.

**Step 1: Set up the UMP for consumer A.**
$$\max_{x_1^A, x_2^A} x_1^A x_2^A \quad \text{s.t.} \quad p_1 x_1^A + p_2 x_2^A = p_1(100) + p_2(350)$$
Tangency condition: $\text{MRS}^A = x_2^A / x_1^A = p_1/p_2 \;\Rightarrow\; p_1 x_1^A = p_2 x_2^A$.
Budget constraint: $p_1 x_1^A + p_2 x_2^A = 100 p_1 + 350 p_2$.
Substituting $p_2 x_2^A = p_1 x_1^A$: $2 p_1 x_1^A = 100 p_1 + 350 p_2 \;\Rightarrow\; x_1^A = 50 + 175 \frac{p_2}{p_1}$.
Then $x_2^A = 175 + 50 \frac{p_1}{p_2}$.

**Step 2: Set up the UMP for consumer B.**
Tangency condition: $\text{MRS}^B = x_2^B / x_1^B = p_1/p_2 \;\Rightarrow\; p_1 x_1^B = p_2 x_2^B$.
Budget constraint: $p_1 x_1^B + p_2 x_2^B = 100 p_1 + 50 p_2$.
Substituting: $2 p_1 x_1^B = 100 p_1 + 50 p_2 \;\Rightarrow\; x_1^B = 50 + 25 \frac{p_2}{p_1}$.
Then $x_2^B = 25 + 50 \frac{p_1}{p_2}$.

**Step 3: Impose market-clearing conditions.**
Good 1 market: $x_1^A + x_1^B = 100 + 100 = 200$.
$$\left(50 + 175 \frac{p_2}{p_1}\right) + \left(50 + 25 \frac{p_2}{p_1}\right) = 100 + 200 \frac{p_2}{p_1} = 200$$
$$200 \frac{p_2}{p_1} = 100 \;\Rightarrow\; \frac{p_2}{p_1} = \frac{1}{2} \;\Rightarrow\; \frac{p_1}{p_2} = 2$$

**Step 4: Compute equilibrium allocations.**
$$x_1^{A*} = 50 + 175 \cdot \frac{1}{2} = 50 + 87.5 = 137.5$$
$$x_2^{A*} = 175 + 50 \cdot 2 = 175 + 100 = 275$$
$$x_1^{B*} = 50 + 25 \cdot \frac{1}{2} = 50 + 12.5 = 62.5$$
$$x_2^{B*} = 25 + 50 \cdot 2 = 25 + 100 = 125$$

**Step 5: Verify Walras' Law.** $p \cdot z(p) = p_1(137.5 + 62.5 - 200) + p_2(275 + 125 - 400) = p_1(0) + p_2(0) = 0$.

**Step 6: Welfare properties.** The WEA is $((137.5, 275); (62.5, 125); p_1/p_2 = 2)$. This allocation lies on the contract curve $x_2^A = 2x_1^A$ (since $275 = 2 \times 137.5$) and is Pareto-efficient. It also lies in the core because it is individually rational: $u^A(137.5, 275) = 37,812.5 > u^A(100, 350) = 35,000$ and $u^B(62.5, 125) = 7,812.5 > u^B(100, 50) = 5,000$. Both consumers are strictly better off at the WEA than at their endowments.

**Exam Tip:** The ratio $p_1/p_2 = 2$ means good 1 is twice as expensive as good 2. Consumer A, with a large endowment of good 2 (350 units), has higher income and consumes more of both goods. The equilibrium price ratio equalises MRS across consumers and clears both markets simultaneously.

---

### 5.8 How GE Is Reached: The Walrasian System

**The Walrasian system** (Koutsoyiannis pp. 497-509):

**Unknowns (18):** Quantities demanded of X and Y by A and B (4), quantities supplied of L and K by A and B (4), quantities demanded of L and K by X and Y firms (4), quantities supplied of X and Y by firms (2), prices of X and Y (2), prices of L and K (2). **Total: 18**

**Equations (18):** Demand functions of A and B for X and Y (4), supply functions of L and K by A and B (4), demand functions for L and K by firms (4), supply functions of X and Y by firms (2), market-clearing equations for X and Y (2), market-clearing equations for L and K (2). **Total: 18**

**Does a GE solution exist?** Equality of equations and unknowns is **neither necessary nor sufficient**. Three issues:
1. **Walras' Law:** One equation is redundant -- if n-1 markets clear, the nth must also clear. Independent equations = 17 vs 18 unknowns.
2. **Numeraire:** One price set = 1, reducing unknowns to 17. Now 17 = 17 -> determinate *in relative prices*.
3. **Non-negativity:** Prices and quantities must be $\ge 0$. Equation-counting doesn't guarantee this.

**Koutsoyiannis on the Walrasian system (Ch.22, pp.486-488):** The Walrasian system is the most ambitious general equilibrium model. Walras (1874) argued that all prices and quantities in all markets are determined simultaneously through their interaction. The behaviour of each decision-maker is presented by a set of equations: each consumer has demand equations for commodities and supply equations for factor services; each firm has output supply equations and factor demand equations. The key characteristic is **simultaneity** — every variable appears in every equation through general interdependence. Walras counted equations and unknowns, concluding that $n$ independent equations in $n$ unknowns (after normalising one price) would yield a determinate solution. However, Koutsoyiannis (p.488) emphasises: "Even if there is equality of independent equations and unknowns, there is no guarantee that a general equilibrium solution exists." The need for a true existence proof was not met until Arrow and Debreu (1954).

**How GE is reached (6 steps):**
1. **Production side:** Firms choose K/L mix such that $\text{MRTS}^X_{LK} = \text{MRTS}^Y_{LK} = w/r$ -> Edgeworth contract curve.
2. **Product transformation:** Contract curve maps to PPC. Firms choose output where MRPT = $P_x/P_y$.
3. **Consumption side:** Consumers maximise utility: $\text{MRS}^A = \text{MRS}^B = P_x/P_y$ -> Edgeworth contract curve of consumption.
4. **Simultaneous equilibrium:** $\text{MRPT} = \text{MRS}^A = \text{MRS}^B = P_x/P_y$ ensures consistency.
5. **Factor and commodity prices:** Determined (as ratios with numeraire) by MRTS conditions, marginal productivity conditions ($w = \text{MPP}_L \cdot P$, $r = \text{MPP}_K \cdot P$), and MRS conditions.
6. **Income distribution:** Determined by factor ownership distribution, consistent with equilibrium consumption.

**Arrow-Debreu (1954) existence proof** requires: perfect competition, no indivisibilities, no increasing returns, continuous convex preferences and production sets, well-behaved excess demand functions.

> **Koutsoyiannis on Limitations (Ch.22, pp.488-489):** "The available 'existence proofs' do not hold for the typical real world cases of discontinuities and indivisibilities in production processes. Our current state of knowledge does not enable us to be sure of the existence of a general equilibrium in the real world, which is dominated by oligopolistic firms and production processes characterised by indivisibilities." However, the proof for perfectly competitive economies with no indivisibilities and no increasing returns is "very important, because a perfectly competitive system has certain ideal properties: it results in an efficient allocation of resources."

---

### 5.9 GE and Consumption Externalities

The $2 \times 2 \times 2$ model **assumes away** consumption externalities (assumption 3: consumer choices are independent). If introduced:

1. **Pareto conditions break down:** MRS depends on others' consumption: $\text{MRS}^A = \text{MRS}^A(X_A, Y_A, X_B, Y_B)$. Equality $\text{MRS}^A = \text{MRS}^B$ is no longer sufficient.
2. **Missing market:** The externality is an untraded interdependence -- no market price for A's influence on B's utility. FWT fails.
3. **Specific effects:** Bandwagon (over-consumption, more elastic demand), Snob (under-consumption, less elastic demand), Veblen (price as status signal).
4. **Mathematically:** $U_A = U_A(X_A, Y_A, X_B, Y_B)$ requires additional conditions on cross-partials for Pareto efficiency. The standard condition is necessary but no longer sufficient.

**Conclusion:** The GE solution may still exist but will NOT be Pareto-optimal. The three marginal conditions fail when externalities are present.

---

---

<!-- Enhanced by Munoz-Garcia & Koutsoyiannis textbook references -->
## <a id="topic-6"></a>Topic 6: Game Theory & Industrial Organization

> **Exam weight:** 14 marks (typically 1 question). Common question types: Nash equilibrium calculation (Bertrand/Cournot), prisoners' dilemma and oligopoly, extensive form entry games with backward induction, repeated games with grim trigger (discount factor threshold), centipede game paradox.
> **Key sources:** Koutsoyiannis Ch.11, Munoz-Garcia Ch.8 & Ch.10, Fudenberg & Tirole Ch.1,3,5

---

### 6.1 Nash Equilibrium

**Definition (Nash, 1950):** A strategy profile $(s_1^*, s_2^*, \dots, s_n^*)$ such that no player can gain by unilaterally deviating:

$$ u_i(s_i^*, s_{-i}^*) \geq u_i(s_i, s_{-i}^*) \quad \text{for all } s_i \in S_i \text{ and all } i $$

**Best Response:** Player $i$'s best response $BR_i(s_{-i})$ is the set of strategies that maximise $i$'s payoff given opponents' strategies:

$$ BR_i(s_{-i}) = \arg\max_{s_i \in S_i} u_i(s_i, s_{-i}) $$

A Nash equilibrium is a **fixed point** of the best-response correspondence: $s_i^* \in BR_i(s_{-i}^*)$ for all $i$.

> **Munoz-Garcia Insight: Nash Existence Theorem** (Ch.8, §8.1; Math Appendix §A.12)
>
> Nash (1950) proved that **every finite game has at least one Nash equilibrium** (in pure or mixed strategies). The proof applies Kakutani's fixed-point theorem:
>
> Define the **best-response correspondence** $BR: S \to S$ as the product of individual best responses:
> $$ BR(s) = \times_{i=1}^n BR_i(s_{-i}) $$
>
> A Nash equilibrium is a **fixed point** of $BR$: a strategy profile $s^*$ such that $s^* \in BR(s^*)$.
>
> Kakutani's fixed-point theorem states: If $F: A \to A$ is an **upper-semicontinuous** and **convex-valued** correspondence on a nonempty, compact, convex set $A$, then $F$ has at least one fixed point $x^* \in A$ such that $x^* \in F(x^*)$.
>
> Three conditions must hold for $BR(s)$:
> 1. **Non-empty:** $BR_i(s_{-i}) \neq \varnothing$ for all $i$ — guaranteed when strategy sets are compact and payoff functions are continuous (Weierstrass extreme value theorem).
> 2. **Convex-valued:** $BR_i(s_{-i})$ is a convex set — guaranteed when $u_i(s_i, s_{-i})$ is **quasiconcave** in $s_i$.
> 3. **Upper hemicontinuous:** $BR_i(\cdot)$ is UHC — guaranteed when $u_i$ is continuous (by the theorem of the maximum).
>
> Since all three conditions hold for finite games with continuous, quasiconcave payoffs, Kakutani's theorem guarantees a fixed point $s^* \in BR(s^*)$, which is precisely a Nash equilibrium.
>
> **Intuition:** The best-response correspondence maps each strategy profile to the set of profiles that are mutual best responses. A fixed point occurs where the graph of $BR$ crosses the 45-degree line, i.e., where each player's strategy is a best response to everyone else's. Brouwer's fixed-point theorem (for functions) is a special case; Kakutani's extends the result to correspondences, which are needed because $BR_i$ may contain multiple equally good strategies.

**Classification:**
- **Pure strategy NE:** Player chooses a single deterministic action.
- **Mixed strategy NE:** Player randomises over actions with a probability distribution. Exists in every finite game (Nash, 1950).
- **Strict NE:** $u_i(s_i^*, s_{-i}^*) > u_i(s_i, s_{-i}^*)$ for all $s_i \neq s_i^*$.
- **Weak NE:** $u_i(s_i^*, s_{-i}^*) \geq u_i(s_i, s_{-i}^*)$ for all $s_i$.

**Finding NE in pure strategies:** For each cell in the payoff matrix, check if any player can improve by unilaterally switching strategies. A cell is NE if both players are playing best responses to each other.

> **Munoz-Garcia Insight: Mixed Strategy Nash Equilibrium** (Ch.8, §8.1.1)
>
> **Definition:** A strategy profile $\sigma = (\sigma_1, \sigma_2, \dots, \sigma_n)$, where $\sigma_i$ is a probability distribution over $S_i$, is a mixed strategy Nash equilibrium (msNE) iff:
> $$ \pi_i(\sigma_i, \sigma_{-i}) \geq \pi_i(s_i', \sigma_{-i}) \quad \text{for all } s_i' \in S_i \text{ and all } i $$
>
> **Key properties:**
> 1. If a player randomises, they must be **indifferent** among all pure strategies played with positive probability — otherwise they would put 100% on the strictly better one.
> 2. Strictly dominated strategies receive zero probability in any msNE.
> 3. Finite games have an **odd number** of equilibria (counting pure and mixed).
>
> **Technology Adoption Game (Munoz-Garcia, Table 8.2a):**
>
> ```
>                     Firm B
>               Adopt     Not adopt
> Firm A   --------------------------
> Adopt     | (3, 1)      (0, 0)
> Not adopt | (0, 0)      (1, 3)
> ```
>
> This game has two pure-strategy NEs: (Adopt, Adopt) and (Not adopt, Not adopt). There is also a **mixed-strategy NE**.
>
> Let $p$ be the probability Firm A adopts, and $q$ the probability Firm B adopts. **Indifference condition for Firm A:**
>
> $$ EU_A(\text{Adopt}) = EU_A(\text{Not adopt}) $$
> $$ 3q + 0(1-q) = 0q + 1(1-q) $$
> $$ 3q = 1 - q \quad \Rightarrow \quad q = \frac{1}{4} $$
>
> **Indifference condition for Firm B:**
>
> $$ EU_B(\text{Adopt}) = EU_B(\text{Not adopt}) $$
> $$ 1p + 0(1-p) = 0p + 3(1-p) $$
> $$ p = 3 - 3p \quad \Rightarrow \quad p = \frac{3}{4} $$
>
> **Mixed-strategy NE:** $\left( \frac{3}{4} \text{ Adopt}, \frac{1}{4} \text{ Not adopt} \right)$ for Firm A, $\left( \frac{1}{4} \text{ Adopt}, \frac{3}{4} \text{ Not adopt} \right)$ for Firm B.
>
> **Intuition:** Firm A (which prefers coordinated outcomes) randomises with high probability of Adopt; Firm B (which prefers opposite actions) randomises with low probability of Adopt. The indifference method works because each player's mixing probability must make the *other* player indifferent.

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

> **Munoz-Garcia Insight: Strategic Complements** (Ch.8, §8.4.1)
>
> In Bertrand competition with differentiated products, firms' pricing decisions are **strategic complements**: an increase in firm $j$'s price raises firm $i$'s optimal price. Formally, the cross-partial derivative of firm $i$'s marginal profit with respect to its rival's price is positive:
>
> $$ \frac{\partial^2 \pi_i}{\partial p_i \partial p_j} > 0 $$
>
> This implies best-response functions are **upward-sloping** in price space. Intuitively, when your rival raises price, your demand increases, and raising your own price becomes more profitable. The general condition (Munoz-Garcia, Ch.8) for strategic complements in price competition is:
>
> $$ \frac{\partial \pi_i(p_i, p_j)}{\partial p_i \partial p_j} = \frac{\partial q_i}{\partial p_j} + (p_i - c) \frac{\partial^2 q_i}{\partial p_i \partial p_j} > 0 $$
>
> which holds for linear demand since $\partial q_i/\partial p_j > 0$ (goods are substitutes) and the second term vanishes.

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

> **Munoz-Garcia Insight: Strategic Substitutes** (Ch.8, §8.3)
>
> In Cournot competition, firms' output decisions are **strategic substitutes**: an increase in firm $j$'s output reduces firm $i$'s optimal output. The formal condition involves the cross-derivative of firm $i$'s marginal profit with respect to its rival's quantity:
>
> $$ \frac{\partial \left( \partial \pi_j / \partial q_j \right)}{\partial q_k} = \frac{\partial}{\partial q_k} \left[ p'(q) q_j + p(q) - c'(q_j) \right] = p''(q) q_j - p'(q) < 0 \quad \text{for all } k \neq j $$
>
> For linear demand $p(q) = a - bq$, this simplifies to:
> $$ \frac{\partial^2 \pi_j}{\partial q_j \partial q_k} = -b < 0 $$
>
> Hence best-response functions slope **downward** in quantity space. When your rival produces more, market price falls, reducing your marginal revenue and your optimal quantity.
>
> **Comparison:** The sign of the cross-partial derivative (positive for Bertrand prices, negative for Cournot quantities) determines whether best-response functions slope up or down. This classification is critical for merger analysis, entry deterrence, and policy evaluation.

**Cournot vs Bertrand comparison:**

| Feature | Cournot | Bertrand |
|---------|---------|----------|
| Strategic variable | Quantity | Price |
| BR slope | Downward (strategic substitutes) | Upward (strategic complements) |
| NE price (homogeneous) | Above MC | = MC |
| Profits | Positive | Zero (homogeneous goods) |

**Key insight:** Cournot yields higher prices and profits than Bertrand with homogeneous goods because quantity competition is softer than price competition.

#### 6.4.1 Stackelberg Model (Sequential Cournot)

The Stackelberg model extends Cournot to sequential moves: a **leader** chooses quantity first; a **follower** observes and then chooses (Munoz-Garcia Ch.8, §8.5.3; Koutsoyiannis Ch.9, §V).

**Equilibrium (linear demand $P = a - Q$, symmetric MC $c$):**
- Leader output: $q_1^* = (a - c)/2$
- Follower output: $q_2^* = (a - c)/4$
- Total output: $Q^* = 3(a - c)/4$
- Price: $p^* = (a + 3c)/4$
- Leader profit: $\pi_1^* = (a - c)^2/8$
- Follower profit: $\pi_2^* = (a - c)^2/16$

**Leader's advantage:** The leader produces more than the Cournot level ($(a-c)/2 > (a-c)/3$) and earns higher profits. The strategic effect $p'(Q)(\partial q_2/\partial q_1)q_1 > 0$ gives the leader an incentive to overproduce, forcing the follower to contract output.

**Comparison across oligopoly models (linear demand, symmetric costs):**

| Model | $Q^*$ | $p^*$ | $\pi_1^*$ | $\pi_2^*$ |
|-------|-------|-------|-----------|-----------|
| Perfect competition | $(a-c)/b$ | $c$ | $0$ | $0$ |
| Cournot | $2(a-c)/(3b)$ | $(a+2c)/3$ | $(a-c)^2/(9b)$ | $(a-c)^2/(9b)$ |
| Stackelberg | $3(a-c)/(4b)$ | $(a+3c)/4$ | $(a-c)^2/(8b)$ | $(a-c)^2/(16b)$ |
| Collusion (cartel) | $(a-c)/(2b)$ | $(a+c)/2$ | $(a-c)^2/(8b)$ | $(a-c)^2/(8b)$ |

Prices, output, and welfare all lie between the competitive and monopoly extremes. Stackelberg output exceeds Cournot output but falls short of the competitive level (Munoz-Garcia, Fig. 8.31).

> **Koutsoyiannis Ch.9 & 11: Oligopoly and Market Structure Implications**
>
> Koutsoyiannis provides a comprehensive comparison of the classical oligopoly models:
>
> - **Cournot model:** Firms assume rivals keep output fixed. Yields a stable equilibrium at $1/3$ market share each (duopoly). The limit of Cournot as $n \to \infty$ is perfect competition. "The interesting feature of both Cournot's and Bertrand's models is that the limit of duopoly is pure competition" (Koutsoyiannis, p.228).
>
> - **Bertrand model:** Firms assume rivals keep price fixed. Leads to marginal cost pricing with homogeneous goods -- a much more competitive outcome. "The equilibrium price will be the competitive price" (Koutsoyiannis, p.227). Bertrand's model focuses attention on price setting as the main decision variable.
>
> - **Chamberlin's model:** Firms recognise interdependence and reach the monopoly outcome without explicit collusion. "If firms recognise their interdependence and act so as to maximise the industry profit" (Koutsoyiannis, p.228), the monopoly solution is stable. However, this requires sophisticated firms with good knowledge of market demand.
>
> - **Stackelberg model:** One firm acts as leader, the other as follower. If only one firm is sophisticated, a stable leader-follower equilibrium emerges. "If both firms are sophisticated, then both will want to act as leaders... The situation is known as Stackelberg's disequilibrium" leading to price war or collusion (Koutsoyiannis, p.234).
>
> **Koutsoyiannis critique:** All classical models share limitations: (1) naive behavioural assumptions -- firms never learn from past reactions; (2) closed models that ignore entry; (3) static framework with no explicit adjustment process; (4) neglect of non-price competition (advertising, product differentiation, location). These limitations motivate the more advanced models in later chapters of Koutsoyiannis.

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

#### 6.6.1 The Renegotiation-Proofness Problem

**Caution (repeated from existing):** Grim trigger is not renegotiation-proof -- once triggered, the punishment phase continues even though both would prefer to renegotiate and return to cooperation. Trigger strategies also require observability -- if firms can secretly undercut, cooperation breaks down even with high $\delta$.

> **Munoz-Garcia Insight: Renegotiation-Proofness** (Ch.8 discussion)
>
> A fundamental weakness of grim trigger strategies is the **renegotiation-proofness** problem. Consider the punishment phase of a grim trigger equilibrium: both firms are playing the stage-game Nash equilibrium forever, earning low profits $\pi_{\text{pun}}$. At this point, both firms would be **strictly better off** if they could tear up the trigger agreement and return to the cooperative outcome $\pi_{\text{coop}}$.
>
> **The problem:** If players anticipate that renegotiation will occur in the future, the threat of punishment loses its bite. A rational player who deviates knows that after a brief punishment, both will renegotiate back to cooperation. Hence the discounted cost of deviation is much smaller than under the permanent punishment of grim trigger, making cooperation **harder to sustain**.
>
> **Formally:** With renegotiation, the punishment is finite (say $k$ periods), so the deviation constraint becomes:
>
> $$ \pi_{\text{dev}} + \delta \pi_{\text{pun}} + \delta^2 \pi_{\text{pun}} + \cdots + \delta^{k} \pi_{\text{pun}} + \delta^{k+1} \pi_{\text{coop}} + \cdots \geq \pi_{\text{coop}}/(1-\delta) $$
>
> Since the punishment phase is now limited, the required discount factor $\delta$ for sustaining cooperation is **higher** than under grim trigger.
>
> **Solutions:** More sophisticated strategies can achieve renegotiation-proofness:
> - **Stick-and-carrot strategies** (Abreu, 1986): brief, severe punishment followed by return to cooperation.
> - **Optimal penal codes:** the toughest credible punishment that still forms an SPNE.
> - **Perfect public equilibrium** (Fudenberg, Levine, Maskin, 1994): strategies that depend only on public information and are sequentially optimal.

#### 6.6.2 The Kreps-Milgrom-Roberts-Wilson (1982) Reputation Model

A central insight in repeated games is that **incomplete information about types** can sustain cooperation even in **finitely repeated** Prisoners' Dilemmas, where backward induction predicts universal defection.

> **Munoz-Garcia Insight: Reputation and Cooperation in Finitely Repeated Games** (Ch.8, discussion)
>
> Kreps, Milgrom, Roberts, and Wilson (1982) showed that if there is a **small probability** that one player is not a rational "defector" but rather a **cooperative type** (e.g., "Tit-for-Tat" or "Grim Trigger"), then cooperation can emerge in the early periods of a finitely repeated PD.
>
> **Key mechanism:**
> 1. **Types:** The rational player has a dominant strategy to defect. But with probability $\varepsilon > 0$, the player is an "irrational" cooperative type who always plays Tit-for-Tat.
> 2. **Reputation-building:** A rational player may **mimic** the cooperative type in early periods to build a reputation, inducing the opponent to cooperate.
> 3. **Unraveling limited:** The backward induction unraveling is limited because the last period is the only period where defection is certain. For $T$ periods, cooperation can be sustained for $T - K$ periods, where $K$ depends on $\varepsilon$ and the discount factor.
>
> **Result:** For any finite $T$, there exists a Bayesian Nash equilibrium where both players cooperate until the final few periods, provided $\varepsilon$ is positive (even arbitrarily small). The larger the number of periods, the more cooperation can be sustained.
>
> **Intuition:** The small uncertainty about types breaks the certainty of the backward induction logic. Player 1 cooperates in period $T-1$ because there is a chance Player 2 is a cooperative type who will reciprocate in period $T$, and Player 2 cooperates in $T-1$ to maintain the reputation that sustains Player 1's cooperation.
>
> This result is also known as the **"gang of four"** result and provides a theoretical foundation for why experimental subjects cooperate in finitely repeated PDs despite the backward induction paradox. The model also explains the centipede game experimental evidence (McKelvey & Palfrey, 1992): a small probability of altruistic types explains observed cooperation patterns.

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

### 6.X Games of Incomplete Information: Bayesian Nash Equilibrium and Perfect Bayesian Equilibrium

#### 6.X.1 Bayesian Nash Equilibrium (BNE)

When players have **private information** (e.g., unknown costs, unknown demand, unknown "type"), we model the game as one of **incomplete information**. Each player $i$ has a type $\theta_i \in \Theta_i$ observed only by themselves; opponents hold **beliefs** (a common prior) over $\theta_i$.

> **Munoz-Garcia Insight: Bayesian Nash Equilibrium** (Ch.8, §8.1.3)
>
> **Definition:** A strategy profile $(s_1^*(\theta_1), s_2^*(\theta_2), \dots, s_N^*(\theta_N))$ is a Bayesian Nash equilibrium (BNE) of a game of incomplete information if, for every player $i$, every type $\theta_i \in \Theta_i$, and every feasible strategy $s_i(\theta_i)$:
>
> $$ EU_i(s_i^*(\theta_i), s_{-i}^*(\theta_{-i}); \theta_i, \theta_{-i}) \geq EU_i(s_i(\theta_i), s_{-i}^*(\theta_{-i}); \theta_i, \theta_{-i}) $$
>
> **Key elements:**
> - **Types:** $\theta_i \in \Theta_i$ captures player $i$'s private information (e.g., high or low cost).
> - **Beliefs:** Common prior $p(\theta_1, \dots, \theta_N)$ over type profiles. Players update using Bayes' rule after observing their own type.
> - **Expected payoffs:** Since player $i$ does not observe $\theta_{-i}$, they maximise expected utility given their beliefs about opponents' types:
>
> $$ EU_i(s_i, s_{-i}; \theta_i) = \sum_{\theta_{-i}} p(\theta_{-i} | \theta_i) \cdot u_i(s_i, s_{-i}(\theta_{-i}); \theta_i, \theta_{-i}) $$
>
> **Finding BNE -- Four-step procedure (Munoz-Garcia Ch.8):**
> 1. **Strategy sets:** Identify strategies as functions of each player's private type.
> 2. **Bayesian normal form:** Construct expected payoff matrix using the prior distribution over types.
> 3. **Expected payoffs:** Compute each player's expected payoff for every strategy profile.
> 4. **Best responses:** Underline best-response payoffs to identify mutual best-response profiles.
>
> **Example -- Cournot with incomplete information (Munoz-Garcia Ch.8, §8.3.2):** Two firms compete in quantities. Firm 2 has private information about its marginal cost (high or low). Firm 1 holds a prior belief $p$ that Firm 2 has low cost. The BNE involves Firm 2 choosing different quantities for each type (a **type-contingent strategy**), while Firm 1 chooses a single quantity that maximises its expected profit given its belief about Firm 2's type.

#### 6.X.2 Perfect Bayesian Equilibrium (PBE)

In **sequential-move games with incomplete information**, BNE is insufficient because it does not ensure **sequential rationality** at every information set. We need the stronger concept of Perfect Bayesian Equilibrium.

> **Munoz-Garcia Insight: Perfect Bayesian Equilibrium** (Ch.8, §8.1.4)
>
> **Definition:** A strategy profile $(s_1, s_2, \dots, s_N)$ and a system of **beliefs** $\mu$ (specifying a probability distribution over nodes at every information set) constitute a Perfect Bayesian Equilibrium (PBE) if:
>
> 1. **Sequential rationality:** Each player's strategy is optimal at every information set, given the strategies of other players and given their beliefs $\mu$ at that information set.
> 2. **Belief consistency:** Beliefs are updated using **Bayes' rule** whenever possible (i.e., at information sets reached with positive probability in equilibrium).
>
> **Intuition:** Condition (1) strengthens BNE by requiring optimality **off the equilibrium path** -- even at information sets that are never reached in equilibrium, players must be playing optimally given their beliefs. Condition (2) ensures that beliefs are not arbitrary: at on-equilibrium-path information sets, they must be derived from the prior and the equilibrium strategies via Bayes' rule.
>
> **Bayes' rule for belief updating:**
>
> $$ \mu(B|\text{Offer}) = p(B|\text{Offer}) = \frac{p(B) \cdot p(\text{Offer}|B)}{p(\text{Offer})} = \frac{p(B) \cdot p(\text{Offer}|B)}{p(B) \cdot p(\text{Offer}|B) + p(NB) \cdot p(\text{Offer}|NB)} $$
>
> where $\mu$ is the uninformed player's posterior belief that the state is $B$ (e.g., beneficial investment) after observing an action (e.g., receiving an offer).
>
> **Off-the-equilibrium-path beliefs:** At information sets that are reached with zero probability under the candidate equilibrium, Bayes' rule does not apply. The PBE concept does **not** restrict what beliefs players can hold off the equilibrium path, which is why multiple PBEs can often be sustained (different off-path beliefs support different equilibria).
>
> **Five-step procedure to find PBE (Munoz-Garcia, 2012):**
> 1. Identify possible strategy profiles (pooling, separating, semi-separating).
> 2. Update the uninformed player's beliefs using Bayes' rule at all on-path information sets.
> 3. Given updated beliefs, find the uninformed player's optimal response.
> 4. Verify that the informed player's strategy is optimal given the uninformed player's response.
> 5. Check consistency: if the informed player's optimal strategy coincides with the candidate profile, it is a PBE.
>
> **Relationship between concepts:**
> $$
> \text{NE} \supset \text{SPNE} \supset \text{PBE} \supset \text{BNE (in sequential games)}
> $$
> Every PBE is a BNE and an SPNE (in games with perfect information), but the converse does not hold. PBE imposes stronger requirements on off-equilibrium beliefs and sequential rationality.

---

### 6.9 Game Theory -- Quick Reference Table

| Concept | Key Condition | Formula / Criterion |
|---------|--------------|--------------------|
| Nash Equilibrium | No unilateral profitable deviation | $u_i(s_i^*, s_{-i}^*) \ge u_i(s_i, s_{-i}^*) \ \forall s_i$ |
| Mixed Strategy NE | Indifference among randomised actions | $EU_i(\text{action}_j) = EU_i(\text{action}_k)$ for all $j,k$ with $\sigma_{ij} > 0$ |
| Nash Existence | Kakutani fixed-point on $BR$ correspondence | $BR(s) = \times_i BR_i(s_{-i})$ has fixed point if UHC, convex, non-empty |
| Dominant Strategy | Best response to every opponent strategy | $u_i(s_i^*, s_{-i}) > u_i(s_i, s_{-i}) \ \forall s_i, s_{-i}$ |
| Bertrand BR (differentiated) | $\partial\pi_i/\partial p_i = 0$ | $p_i = 30 + p_j/4$ (example) |
| Cournot BR | $\partial\pi_i/\partial q_i = 0$ | $q_i = (a - c - bq_j)/(2b)$ |
| Strategic Complements (Bertrand) | $\partial^2\pi_i/\partial p_i\partial p_j > 0$ | BR slopes upward |
| Strategic Substitutes (Cournot) | $\partial^2\pi_i/\partial q_i\partial q_j < 0$ | BR slopes downward |
| SPNE | NE in every subgame | Backward induction algorithm |
| Grim Trigger | $\delta \ge (\pi_{dev} - \pi_{coop})/(\pi_{dev} - \pi_{pun})$ | $\delta^* = 2/3$ in PD example |
| Renegotiation-Proofness | Punishment must be self-enforcing | $\pi_{pun}$ cannot be Pareto-dominated by $\pi_{coop}$ |
| Folk Theorem | $\delta$ sufficiently close to 1 | Any feasible, IR payoff sustainable |
| Bayesian NE | Expected utility maximisation given type | $EU_i(s_i^*(\theta_i), s_{-i}^*(\theta_{-i}); \theta_i) \ge EU_i(s_i(\theta_i), s_{-i}^*(\theta_{-i}); \theta_i)$ |
| Perfect Bayesian Eq. | Sequential rationality + Bayes consistency | Strategies optimal at every info set given beliefs |
| Kreps-Milgrom-Roberts-Wilson | Incomplete info sustains finite cooperation | Cooperation for $T-K$ periods if $\varepsilon > 0$ |

---

---

<!-- Enhanced by Munoz-Garcia & Koutsoyiannis textbook references -->
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

**Koutsoyiannis (Ch.23) on the breakdown:** Externalities create a divergence between private and social costs/benefits. Since externalities are not reflected in market prices, these prices provide "misleading information (signals) for an optimal allocation of resources." The presence of externalities means "the model breaks down for two reasons: first, the Pareto-optimality conditions are violated; second, the constants embedded in the system lose their significance as 'prices', because they do not reflect all the costs and benefits of an action to the society as a whole" (Koutsoyiannis, Ch.23, p.541-542).

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

**Graphical analysis (Munoz-Garcia, Fig.9.6-9.7):** The Pigouvian tax operates as follows:

```
  $
  |                    π'(x) = MB (marginal benefit to steel mill)
  |                   \
  |                    \
  |                     \         MSC = MPC + MEC
  |                      \       /
  |    τ* = MEC(x°)------\-----/-------- Marginal External Cost at x°
  |                        \   /
  |                         \ / 
  |                          \________ MPC (private marginal cost)
  |
  |     DWL (tax revenue
  |     rectangle = τ* × x°) 
  |___________________________________  Pollution (x)
          x°          x*
```

- **MSC** = Marginal Social Cost = MPC (private marginal cost of steel) + MEC (marginal external cost imposed on fishery)
- The Pigouvian tax $\tau^*$ is set equal to the MEC evaluated at the social optimum $x^\circ$: $\tau^* = \partial C_F/\partial x|_{x=x^\circ}$
- This shifts the steel mill's effective marginal cost upward, making it internalise the externality
- **DWL** = Deadweight loss = area between MB and MSC over $[x^\circ, x^*]$ — the welfare gain from correcting the externality
- The tax generates government revenue of $\tau^* \cdot x^\circ$, which can be used to compensate the damaged party

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

> **Munoz-Garcia Insight — Formal Coase Proof:**
>
> **Property rights assigned to the affected individual (fishery):** The fishery makes a take-it-or-leave-it offer: the steel mill pays $T$ for the right to pollute $x$ units. The mill accepts iff $\pi(x) - T \geq \pi(0)$ (participation constraint). The fishery then solves:
> $$\max_{x \geq 0, T} v(x) + w_F + T \quad \text{s.t.} \quad \pi(x) - T \geq \pi(0)$$
> The constraint binds ($T = \pi(x) - \pi(0)$), so the problem reduces to:
> $$\max_{x \geq 0} v(x) + w_F + \pi(x) - \pi(0)$$
> FOC: $v'(x) + \pi'(x) = 0 \Rightarrow \pi'(x) = -v'(x)$
>
> **Property rights assigned to the polluter (steel mill):** The fishery pays $T$ for pollution reduction. Starting from $x^*$, the mill accepts iff $\pi(x) + T \geq \pi(x^*)$. The fishery solves:
> $$\max_{x \geq 0, T} v(x) + w_F - T \quad \text{s.t.} \quad \pi(x) + T \geq \pi(x^*)$$
> The constraint binds ($T = \pi(x^*) - \pi(x)$), reducing to:
> $$\max_{x \geq 0} v(x) + w_F - \pi(x^*) + \pi(x)$$
> FOC: $v'(x) + \pi'(x) = 0 \Rightarrow \pi'(x) = -v'(x)$
>
> **Conclusion:** In both cases, the FOC yields $\pi'(x) = -v'(x)$, i.e., $-\partial C_S/\partial x = \partial C_F/\partial x$ at $x = x^\circ$. The bargaining outcome is the **same efficient pollution level** regardless of who holds the property rights. Only the **distribution of welfare** differs:
> - If the fishery has rights: steel mill pays $T = \pi(x^\circ) - \pi(0)$, so fishery enjoys $v(x^\circ) + T$
> - If the steel mill has rights: fishery pays $T = \pi(x^*) - \pi(x^\circ)$, so steel mill keeps $\pi(x^*)$
>
> (Munoz-Garcia, Ch.9, pp.658-661)

**Why Coase fails in practice:**
1. **High transaction costs** — many parties cannot bargain costlessly
2. **Free-rider problem** — diffuse victims have incentive to free-ride on others' bargaining
3. **Asymmetric information** — parties may not know the true damage/benefit
4. **Legal constraints** — property rights may be poorly defined or unenforceable

**Exam Tip:** Draw the marginal benefit (to steel mill, downward-sloping) and marginal cost (to fishery, upward-sloping) diagram. The social optimum equates MB = MC. Shade the DWL from excessive pollution. State Coase Theorem explicitly, then immediately give its limitations.

#### (v) Numerical Example: Fully Solved Steel-Fishery (Munoz-Garcia, Ch.9, Example 9.1)

Let us specify functional forms to obtain explicit numerical solutions.

**Setup:** The steel mill produces steel $S$ and pollution $x$ as a byproduct. Output is $S = \alpha x$, where $\alpha > 0$ is the output-pollution ratio. The steel mill's profit function is $\pi_S = P_S S - c S^2$, which in terms of $x$ becomes:

$$\pi_S(x) = P_S \cdot \alpha x - c(\alpha x)^2 = (P_S \alpha)x - c\alpha^2 x^2$$

Define $a \equiv P_S \alpha$ and $b \equiv 2c\alpha^2$. The marginal profit from pollution is:

$$\pi_S'(x) = a - bx$$

The fishery suffers damage $v(x)$ from pollution. Let the damage function be:

$$v(x) = \beta - cx - \frac{d}{2}x^2 \quad \Rightarrow \quad v'(x) = -c - dx$$

so the marginal damage is $-v'(x) = c + dx$, which increases in $x$.

**Parameter values:** Let $\alpha = 2$, $P_S = 10$, $c = 1$, so $a = P_S \alpha = 20$ and $b = 2c\alpha^2 = 2(1)(4) = 8$. For the fishery, let $c = 2$, $d = 4$ (these are damage function parameters, distinct from the steel mill's $c$).

Thus:
$$\pi_S'(x) = 20 - 8x$$
$$-v'(x) = 2 + 4x$$

**Step 1: Unregulated equilibrium $x^*$**

The steel mill maximises $\pi_S(x)$ alone:
$$\pi_S'(x^*) = 0 \quad \Rightarrow \quad 20 - 8x^* = 0 \quad \Rightarrow \quad x^* = 2.5$$

**Step 2: Social optimum $x^\circ$**

The social planner maximises $\pi_S(x) + v(x)$:
$$\pi_S'(x^\circ) = -v'(x^\circ) \quad \Rightarrow \quad 20 - 8x^\circ = 2 + 4x^\circ$$
$$20 - 2 = 8x^\circ + 4x^\circ \quad \Rightarrow \quad 18 = 12x^\circ \quad \Rightarrow \quad x^\circ = 1.5$$

The socially optimal pollution level $x^\circ = 1.5$ is well below the unregulated level $x^* = 2.5$.

**Step 3: Pigouvian tax**

The per-unit tax that restores efficiency is:
$$\tau^* = \left. -v'(x) \right|_{x = x^\circ} = 2 + 4(1.5) = 8$$

Verification: With tax $\tau = 8$, the steel mill's FOC becomes $\pi_S'(x) = \tau$:
$$20 - 8x = 8 \quad \Rightarrow \quad 8x = 12 \quad \Rightarrow \quad x = 1.5 \quad \checkmark$$

**Step 4: Welfare comparison**

$$\pi_S(x^*) = \int_0^{2.5} (20 - 8x)dx = [20x - 4x^2]_0^{2.5} = 50 - 25 = 25$$
$$\pi_S(x^\circ) = \int_0^{1.5} (20 - 8x)dx = [20x - 4x^2]_0^{1.5} = 30 - 9 = 21$$
$$v(x^*) = \beta - 2(2.5) - 2(2.5)^2 = \beta - 5 - 12.5 = \beta - 17.5$$
$$v(x^\circ) = \beta - 2(1.5) - 2(1.5)^2 = \beta - 3 - 4.5 = \beta - 7.5$$

Social welfare at unregulated equilibrium: $\pi_S(x^*) + v(x^*) = 25 + \beta - 17.5 = \beta + 7.5$
Social welfare at social optimum: $\pi_S(x^\circ) + v(x^\circ) = 21 + \beta - 7.5 = \beta + 13.5$

**Welfare gain from regulation:** $(\beta + 13.5) - (\beta + 7.5) = 6$
This is the DWL eliminated by the Pigouvian tax — the area between MB and MD curves from $x^\circ$ to $x^*$.

**Step 5: Coase bargaining verification**

- **Case A (fishery has rights):** Starting from $x=0$, the steel mill pays $T = \pi_S(x^\circ) - \pi_S(0) = 21 - 0 = 21$ for the right to pollute $x^\circ = 1.5$ units. Fishery's final utility: $v(x^\circ) + T = (\beta - 7.5) + 21 = \beta + 13.5$. Steel mill's final profit: $\pi_S(x^\circ) - T = 21 - 21 = 0$.
- **Case B (steel mill has rights):** Starting from $x^* = 2.5$, the fishery pays $T = \pi_S(x^*) - \pi_S(x^\circ) = 25 - 21 = 4$ to reduce pollution to $x^\circ$. Steel mill's final profit: $\pi_S(x^\circ) + T = 21 + 4 = 25$. Fishery's final utility: $v(x^\circ) - T = (\beta - 7.5) - 4 = \beta - 11.5$.

Both cases reach $x^\circ = 1.5$, but the steel mill's profit is $\{0, 25\}$ and the fishery's utility is $\{\beta + 13.5, \beta - 11.5\}$ respectively — only the distribution differs.

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

> **Munoz-Garcia Insight — Derivation of the Samuelson Condition:**
>
> Consider an economy with $I$ consumers, one public good $G$ (with cost $C(G)$), and a private good $x_i$ for each consumer. Each consumer $i$ has utility $U_i(x_i, G)$ where $G$ is nonrival.
>
> Step 1 — **Social planner's problem:** The planner maximises a weighted sum of utilities subject to the resource constraint:
>
> $$\max_{G, x_1, \ldots, x_I} W = \sum_{i=1}^I \alpha_i U_i(x_i, G) + \lambda \left( \sum_{i=1}^I x_i + C(G) - \overline{W} \right)$$
>
> where $\lambda$ is the Lagrange multiplier on the resource constraint (aggregate endowment $\overline{W}$).
>
> Step 2 — **FOCs:**
>
> For each private good $x_i$:
> $$\frac{\partial W}{\partial x_i} = \alpha_i \frac{\partial U_i}{\partial x_i} + \lambda = 0 \quad \Rightarrow \quad \alpha_i \frac{\partial U_i}{\partial x_i} = -\lambda$$
>
> For the public good $G$:
> $$\frac{\partial W}{\partial G} = \sum_{i=1}^I \alpha_i \frac{\partial U_i}{\partial G} + \lambda C'(G) = 0 \quad \Rightarrow \quad \sum_{i=1}^I \alpha_i \frac{\partial U_i}{\partial G} = -\lambda C'(G)$$
>
> Step 3 — **Combine the FOCs:** Divide the public good FOC by the private good FOC for each consumer:
>
> From the private good FOC: $\alpha_i = -\lambda / (\partial U_i/\partial x_i)$
>
> Substituting into the public good FOC:
> $$\sum_{i=1}^I \left( -\frac{\lambda}{\partial U_i/\partial x_i} \right) \frac{\partial U_i}{\partial G} = -\lambda C'(G)$$
>
> Cancelling $-\lambda$ (which is nonzero):
> $$\sum_{i=1}^I \frac{\partial U_i/\partial G}{\partial U_i/\partial x_i} = C'(G)$$
>
> Step 4 — **Samuelson rule:**
> $$\boxed{\sum_{i=1}^I \text{MRS}^i_{G,x} = \text{MC}(G) = \text{MRT}_{G,x}}$$
>
> The sum of individual marginal rates of substitution (willingness to pay for $G$ in terms of $x$) equals the marginal cost of providing $G$. For private goods, each individual's MRS separately equals MRT; for public goods, it is the **sum** of MRS that equals MRT due to nonrivalry — the same unit of $G$ is consumed by everyone simultaneously.
>
> (Munoz-Garcia, Ch.9, §9.11, pp.692-693)

**Free-Rider Problem — Formal Analysis (Munoz-Garcia, Ch.9, §9.12):**

Consider $I$ consumers with quasi-linear utility $u_i(x_i, G) = x_i + m_i \log G$, where $G = \sum_{i=1}^I g_i$ is total private contribution to the public good, $g_i$ is individual $i$'s contribution, and $x_i$ is private consumption. Each consumer has budget $w_i$, with the price of both goods normalised to 1, so $x_i = w_i - g_i$.

**Private provision (Nash equilibrium):** Each consumer $i$ chooses $g_i$ to maximise:
$$\max_{g_i \geq 0} w_i - g_i + m_i \log(g_i + G_{-i})$$
where $G_{-i} = \sum_{j \neq i} g_j$ is taken as given. FOC:
$$-1 + \frac{m_i}{g_i + G_{-i}} = 0 \quad \Rightarrow \quad g_i(G_{-i}) = m_i - G_{-i}$$

This yields a best-response function: contribute up to $m_i$, but reduce one-for-one as others contribute more (perfect crowding out). The Nash equilibrium has contributions $g_i^*$ such that:
- Only the individual(s) with the highest $m_i$ contribute
- All others free-ride completely: $g_j^* = 0$ for $j \neq \arg\max m_i$

The equilibrium total provision is: $G^* = \max_i m_i$.

**Social optimum:** The social planner maximises:
$$\max_{G} \sum_{i=1}^I (w_i - g_i) + \left( \sum_{i=1}^I m_i \right) \log G$$
FOC: $-1 + (\sum_i m_i)/G = 0 \quad \Rightarrow \quad G^\circ = \sum_{i=1}^I m_i$

Since $\max_i m_i < \sum_i m_i$ (for $I > 1$), we have $G^* < G^\circ$ — **underprovision**.

**Effect of group size:** With $N$ symmetric individuals ($m_i = m$ for all $i$):
$$G^* = m \quad \text{(only one contributes, others free-ride)}$$
$$G^\circ = N \cdot m \quad \text{(social optimum)}$$
$$\frac{G^*}{G^\circ} = \frac{1}{N} \to 0 \text{ as } N \to \infty$$

The free-rider problem grows more severe as the group size increases — each individual's incentive to contribute diminishes because their share of the total benefit shrinks while they bear the full cost.

**Example (Munoz-Garcia, Example 9.6, p.697):** Two individuals $i = {1,2}$ with $m_1 \geq m_2$. Equilibrium contributions: $g_1^* = m_1 > 0$, $g_2^* = 0$. Total $G^* = m_1$. Social optimum: $G^\circ = m_1 + m_2$. Since $m_1 + m_2 > m_1$ (for $m_2 > 0$), the public good is under-provided. The individual with lower valuation free-rides completely on the contribution of the higher-valuation individual.

**Solutions to free-rider problem:**
1. **Government provision** (funded by compulsory taxation)
2. **Coase bargaining** (if few parties affected)
3. **Clubbing** (create excludability through technology or membership)
4. **Social norms / altruism**
5. **Lindahl prices** (personalised prices summing to marginal cost — see §7.4.4)

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

**Formal analysis with $n$ symmetric users (Munoz-Garcia, Ch.9):**

Consider $n$ symmetric users, each choosing extraction $q_i \geq 0$. Let total extraction be $Q = \sum_{j=1}^n q_j$. Each user receives benefit $B(q_i)$ (increasing, concave) and shares the total cost $C(Q)$ (increasing, convex).

**Private (Nash) equilibrium:** Each user $i$ chooses $q_i$ to maximise:
$$\pi_i = B(q_i) - \frac{q_i}{Q} C(Q)$$

Taking FOC with respect to $q_i$, treating $Q_{-i}$ as given:
$$B'(q_i^*) - \underbrace{\left[ \frac{Q^* - q_i^*}{(Q^*)^2} C(Q^*) + \frac{q_i^*}{Q^*} C'(Q^*) \right]}_{\text{private marginal cost}} = 0$$

In symmetric equilibrium ($q_i^* = q^*$ for all $i$, so $Q^* = nq^*$):
$$B'(q^*) = \frac{C'(nq^*)}{n} + \frac{n-1}{n^2 q^*} C(nq^*)$$

For large $n$, the dominant term is:
$$\boxed{B'(q^*) \approx \frac{C'(Q^*)}{n}}$$

**Social optimum:** Maximise total surplus $nB(q_i) - C(nq_i)$:
$$B'(q^\circ) = C'(n q^\circ) = C'(Q^\circ)$$

**Comparison:**
$$\frac{B'(q^*)}{B'(q^\circ)} = \frac{C'(Q^*)/n}{C'(Q^\circ)}$$

For linear cost $C(Q) = cQ$, this simplifies to:
$$B'(q^*) = \frac{c}{n} \quad \text{vs.} \quad B'(q^\circ) = c$$

Each user equates private MB to $c/n$ rather than $c$, leading to **over-extraction by a factor of approximately $n:1$** relative to the social optimum. The wedge between private and social marginal cost grows with $n$ — the more users, the worse the over-exploitation.

**Example — Fishing commons:** A lake open to all fishers. Each fisher catches as many fish as possible before others do. Individual rationality: "If I don't catch them, someone else will." Result: overfishing, stock collapse, everyone loses.

**Solutions:**
1. **Private property rights** (assign fishing quotas or lake ownership — Coase)
2. **Pigouvian tax** (tax per unit extracted equal to marginal social damage)
3. **Regulation** (catch limits, seasonal closures, tradable permits)

**Exam Tip:** Link the Tragedy to negative production externalities — each user's extraction imposes a cost on all others. The wedge between private and social marginal cost generates over-exploitation.

#### 7.4.4 Lindahl Equilibrium (Munoz-Garcia, Ch.9, §9.15)

**Problem:** Private provision of public goods leads to underprovision ($G^* < G^\circ$) due to free-riding. Government solutions require information the planner may not have. Lindahl (1919) proposed a **market-based solution** using personalised prices.

**Idea:** Create a separate market for each individual's consumption of the public good, with a personalised price $p_i$ for individual $i$. The sum of personalised prices covers the marginal cost.

**Formalisation (Munoz-Garcia, pp.704-707):**

**Consumer $i$'s problem:** Each consumer $i$ chooses $g_i$ facing personalised price $p_i^{**}$:
$$\max_{g_i \geq 0} v_i(g_i) + w_i - p_i^{**} g_i$$
FOC: $v_i'(g_i^{**}) - p_i^{**} \leq 0$, equality if $g_i^{**} > 0$. So $p_i^{**} = v_i'(g_i^{**})$.

**Firm's problem:** The firm produces a bundle of $I$ personalised goods:
$$\max_{g \geq 0} \sum_{i=1}^I p_i^{**} g - C(g)$$
FOC: $\sum_{i=1}^I p_i^{**} - C'(g^{**}) \leq 0$, equality if $g^{**} > 0$.

**Equilibrium condition:** Combining the consumer and firm FOCs:
$$\sum_{i=1}^I v_i'(g^{**}) = \sum_{i=1}^I p_i^{**} = C'(g^{**})$$

This is exactly the **Samuelson condition** $\sum_i \text{MRS}_i = \text{MRT}$! Thus $g^{**} = g^\circ$ — the Lindahl equilibrium achieves the efficient level of public good provision.

**Intuition:** Each individual pays a personalised price $p_i$ equal to their marginal willingness to pay (MRS). The sum of these payments exactly covers the marginal cost. No one free-rides because the price is tailored to their valuation.

**Example (Munoz-Garcia, Example 9.8, p.706):** Three graduate students (Eric, Chris, Matt) buying a microwave (public good). Utility: $u_i = \ln x_i + m_i \ln G$ where $x_i$ is private consumption (numeraire) and $G$ is the microwave. With prices normalised and wealth = 1, the Lindahl prices are:
$$p_i^* = \frac{m_i/(1+m_i)}{\sum_{j} m_j/(1+m_j)}$$
For $m_E = 1$, $m_C = m_M = 0.6$: $p_E = 0.4$, $p_C = p_M = 0.3$, and $G = 1.25$.

**Limitations:**
1. Requires **excludability** between personalised public goods — not feasible for pure public goods like national defence
2. Creates **monopsony** (one buyer per personalised market) — price-taking assumption is unrealistic
3. Requires the social planner to know each individual's **marginal valuation** — same information problem as other solutions
4. Individuals have incentives to **misrepresent** their preferences (strategic manipulation)

**Exam Tip:** Lindahl equilibrium is the public goods analogue of competitive equilibrium for private goods. The key difference: personalised prices replace uniform prices. State the condition $\sum_i p_i = \text{MC}$ and its equivalence to the Samuelson condition.

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
   - Koutsoyiannis (Ch.23, p.544) demonstrates: "When externalities in consumption exist, adherence to the equalisation of the MRS of the two consumers does not ensure Pareto optimality." A redistribution of the same total output that violates MRS equality can increase social welfare because it directly affects the externality.

4. **Koutsoyiannis on the divergence between private and social costs (Ch.23, pp.542-543):**
   - **Production externalities:** $MSC = MC + MEC$ (marginal social cost = private marginal cost + marginal external cost). When $MC = P$ but $MSC > P$, the firm's private optimum involves overproduction relative to the social optimum.
   - **Positive externalities (external economies):** When $P < MSB$ (marginal social benefit), the market underprovides the good. Examples include apple orchards benefiting honey producers, training programs creating skilled labour for other firms, R&D spillovers.
   - **Negative externalities (external diseconomies):** When $P < MSC$, the market overprovides the good. Examples include pollution, congestion, health hazards.
   - **Multi-product economy:** The condition for optimal resource allocation becomes $MSB_x/MSC_x = MSB_y/MSC_y = \ldots = 1$ — requiring equality of marginal social benefit and marginal social cost for every good.

5. **Remedies:**
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
| Lindahl equilibrium | $\sum_i p_i = \text{MC}$, where $p_i = \text{MRS}_i$ |
| Free-rider gap | $G^*/G^\circ = 1/N$ (symmetric $N$ agents) |
| Marginal social cost | $\text{MSC} = \text{MPC} + \text{MEC}$ |
| Social dividend | $\Pi_J^\circ - \Pi_J^*$ (gain from internalising externalities) |

---

<!-- Enhanced by Munoz-Garcia & Koutsoyiannis textbook references -->
## <a id="topic-8"></a>Topic 8: Information & Trade

### 8.1 Asymmetric Information & Adverse Selection

**Definition:** Asymmetric information arises when one party to a transaction has superior information about a relevant characteristic (Akerlof, 1970; Munoz-Garcia, SS8.4, p.564).

**Types of asymmetric information problems:**

| Problem | Information | Timing | Example |
|---------|------------|--------|---------|
| **Adverse selection** | Hidden characteristic | Before transaction | Used cars, insurance |
| **Moral hazard** | Hidden action | After transaction | Careless driving after insuring |
| **Principal-agent** | Hidden effort | During relationship | Manager-shareholder conflicts |

> **Munoz-Garcia Insight — Adverse Selection (Ch.10, pp.761–765):**
> The "lemons" problem arises when sellers have better information about product quality than buyers. Since buyers can only observe average quality, they are only willing to pay the expected value. This systematically drives high-quality goods from the market — a process Akerlof called **adverse selection**. Munoz-Garcia's treatment extends the original model to continuous quality distributions and shows that the market can completely "unravel" through iterative expectation updates.

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
#### 8.1.2 Formal Akerlof Model — Continuous Quality Distribution (Munoz-Garcia, Ch.10, pp.761–765)

**Setup:**
- Car quality $q$ is continuously uniformly distributed: $q \sim U[0, Q]$ where $Q \in (1, 2)$.
- Buyer values quality $q$ at $q$ (willing to pay up to $q$).
- Seller values quality $q$ at $q / Q$ (reservation value). Since $q/Q < q$, gains from trade exist for all $q > 0$.

**Symmetric information benchmark:** Buyer observes $q$, accepts price $p$ iff $p \leq q$. Seller sets $p = q$ (binding PC). Price under symmetric information: $p^{SI} = q$ for all $q \in [0, Q]$. All cars trade — first-best efficient.

**Asymmetric information — first iteration:**
- Buyer cannot observe $q$, forms expectation $E[q]$.
- Since $q \sim U[0, Q]$, $E[q] = Q/2$.
- Seller sets $p = E[q] = Q/2$ (buyer's PC binds).
- Seller's profit: $\pi = p - q/Q = Q/2 - q/Q \geq 0 \iff q \leq Q^2/2$.
- **Result:** Only low-quality cars $q \leq Q^2/2$ are offered. High-quality cars $q > Q^2/2$ exit the market.

**Second iteration (rational expectations):**
- Buyer anticipates that only $q \leq Q^2/2$ are offered.
- Conditional expected quality: $E[q \,|\, q \leq Q^2/2] = (Q^2/2)/2 = Q^2/4$.
- Seller sets $p = Q^2/4$, profit $\pi = Q^2/4 - q/Q \geq 0 \iff q \leq Q^3/4$.
- Further restricts offered cars to $[0, Q^3/4]$.

**Complete unraveling:** Repeating this argument iteratively:
$$E^{(n)}[q] = \frac{Q^{n+1}}{2^{n+1}} \quad \text{cutoff} \to 0 \text{ as } n \to \infty$$

The market **unravels** to $q = 0$ only — the market for all cars $q > 0$ ceases to exist. This is the strong form of Akerlof's result: asymmetric information can **completely destroy** a market that would function efficiently under full information.

**Example 10.5 (Munoz-Garcia):** Let $Q = 1.9$. Then $E[q] = 0.95$, cutoff $Q \cdot E[q] = 1.805$. Cars in $(1.805, 1.9]$ exit. Second iteration: $E[q|q \leq 1.805] = 0.90$, cutoff $Q^3/4 = 1.71$. The market for good cars progressively shrinks.

#### 8.1.3 Adverse Selection in Labor Markets (Munoz-Garcia, Ch.10, pp.765–766)

The same logic applies to any market with asymmetric information:

**Setup:**
- Worker productivity $\theta \sim U[0, 1]$, privately observed by the worker.
- Competitive firms cannot observe $\theta$ and offer wage $w = E[\theta]$.
- Workers accept iff $w \geq \theta$ (their reservation wage equals productivity).

**Iterative unraveling:**
1. **First round:** Firms offer $w = E[\theta] = 1/2$. Only workers with $\theta \leq 1/2$ accept. Workers with $\theta > 1/2$ remain unemployed.
2. **Second round:** Firms update: $E[\theta \,|\, \theta \leq 1/2] = 1/4$. New wage $w = 1/4$. Only workers with $\theta \leq 1/4$ accept.
3. **Third round:** $E[\theta \,|\, \theta \leq 1/4] = 1/8$. Wage $w = 1/8$. Only $\theta \leq 1/8$ accept.
4. **Limit as $n \to \infty$:** Only workers with $\theta = 0$ are employed. The labor market for **all** $\theta > 0$ unravels.

**Implication:** Asymmetric information can cause the labor market to collapse to the lowest-productivity worker. The market for all positive-productivity workers disappears — a stark demonstration of market failure due to adverse selection.

> **Munoz-Garcia Insight — Market Unraveling (Ch.10, pp.763–765):**
> The iterative process is the key contribution of Akerlof (1970). It shows that adverse selection is not a one-step phenomenon — rational agents anticipate each other's responses, leading to a cascade of expectation updates that can eliminate all trade. The formal condition for partial or complete market collapse depends on the support of the quality distribution and the relative valuations of buyers and sellers.

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

#### 8.2.1 Continuum of Types — The Full Spence Model (Munoz-Garcia, Ch.11)

The binary-type model can be extended to a continuum of productivity types $\theta$:

**Setup:**
- Worker productivity $\theta$ is distributed on $[\underline{\theta}, \overline{\theta}]$ with CDF $F(\theta)$.
- Worker chooses education level $e \in \mathbb{R}_+$ at cost $c(e, \theta)$.
- **Single-crossing property (Spence-Mirrlees condition):** $c_{e\theta} < 0$, i.e., the marginal cost of education is decreasing in ability:
  $$\frac{\partial^2 c(e,\theta)}{\partial e \partial \theta} < 0$$
  This implies that higher-ability workers find it cheaper to acquire additional education — education is a credible signal because it is differentially costly.

- Firms observe $e$, form beliefs $\mu(\theta|e)$, and pay wage $w(e) = E[\theta|e]$ (competitive zero-profit condition).

**Worker's optimization:**
$$\max_{e \ge 0} \; w(e) - c(e, \theta)$$

**First-order condition (for interior separating equilibrium):**
$$w'(e) = \frac{\partial c(e,\theta)}{\partial e}$$

**Equilibrium wage schedule:** In a separating equilibrium where types are fully revealed, the wage function must satisfy the differential equation:
$$w'(e) = \frac{\partial c(e,\theta)}{\partial e} \quad \text{where} \quad \theta = \theta(e) \text{ is the inverse of } e(\theta)$$

**Explicit example (quadratic costs):** Suppose $c(e, \theta) = \alpha e^2 / \theta$ where $\alpha > 0$. Then:
- $c_e(e,\theta) = 2\alpha e / \theta$ and $c_{e\theta}(e,\theta) = -2\alpha e / \theta^2 < 0$ — single-crossing holds.
- FOC: $w'(e) = 2\alpha e / \theta(e)$.
- In a separating equilibrium, $w(e) = \theta(e)$ (workers paid their true productivity).
- Thus $\theta'(e) = 2\alpha e / \theta(e)$.
- Solving: $\theta(e) \, d\theta = 2\alpha e \, de \implies \frac{1}{2}\theta(e)^2 = \alpha e^2 + C$.
- The separating education function: $e^*(\theta) = \sqrt{\frac{\theta^2 - \underline{\theta}^2}{2\alpha}}$ where $C = \underline{\theta}^2/2$.
- **Result:** Education is **increasing** in ability: $\partial e^*/\partial \theta > 0$. More productive workers acquire more education, consistent with empirical patterns.

#### 8.2.2 The Intuitive Criterion (Cho-Kreps, 1987)

A refinement for signaling games that eliminates **unreasonable** pooling equilibria:

**The problem:** In a pooling equilibrium, off-equilibrium beliefs can be arbitrarily set to sustain the equilibrium. For example, $\mu(H|e=1)$ can be set to 0 (or sufficiently low) to deter deviation — but are all such beliefs "reasonable"?

**The Intuitive Criterion (Cho and Kreps, 1987):**
An equilibrium fails the Intuitive Criterion if there exists a deviation (an out-of-equilibrium message) such that:

1. **Condition 1:** All types for whom the deviation is **dominated** by their equilibrium payoff would never choose it. Specifically, type $\theta$ would never deviate if:
   $$u^*(e', \theta) < u^{eq}(\theta) \quad \text{for all possible responses to } e'$$

2. **Condition 2:** After eliminating those "dominated" types, the remaining types (if any) would **strictly benefit** from the deviation, assuming the uninformed player holds beliefs concentrated on the remaining types.

**Formal definition (Cho-Kreps):** An equilibrium $(a^*, \mu^*)$ fails the Intuitive Criterion if there exists a deviation $a' \notin \text{supp}(a^*)$ and a type $\theta'$ such that:
$$\Theta^{**}(a') \equiv \{\theta \in \Theta : u^*(a', \theta) \ge u^{eq}(\theta)\} \neq \emptyset$$
and for all $\theta \in \Theta^{**}(a')$:
$$u(a', \theta, \mu(\Theta^{**}(a')=1)) > u^{eq}(\theta)$$

**Application to Spence model:**
- In a pooling equilibrium where neither type acquires education, consider a deviation to $e=1$.
- The L-type's cost is so high that even if deviation led to wage $q_H$, L would not benefit: $q_H - c_L < w(0)$.
- The H-type **would** benefit if deviation led to $w(1) = q_H$: $q_H - c_H > w(0)$.
- The Intuitive Criterion says: off-equilibrium beliefs **must** assign $\mu(H|e=1) = 1$ (since only H could benefit).
- With $\mu(H|e=1) = 1$, the H-type strictly prefers to deviate → pooling equilibrium is eliminated.
- **Result:** The Intuitive Criterion selects the **separating equilibrium** as the unique "reasonable" outcome.

> **Munoz-Garcia Insight — Intuitive Criterion (Ch.8, pp.578–580):**
> The Cho-Kreps refinement exploits the single-crossing property. When costs differ by type, a deviation that is profitable for one type but not the other forces the uninformed player to draw precise inferences. This eliminates pooling equilibria that survive only because of arbitrary off-equilibrium beliefs. The Intuitive Criterion is the most commonly applied refinement in signaling games.

#### 8.2.3 Screening vs Signalling

The distinction between screening and signaling is fundamental:

| Feature | Signalling | Screening |
|---------|-----------|-----------|
| **Who moves first** | Informed party | Uninformed party |
| **Who designs the contract/message** | Informed agent chooses from a set | Uninformed principal offers a menu |
| **Example** | Spence (1973): Worker chooses education | Rothschild-Stiglitz (1976): Insurer offers menu |
| **Information revelation** | Agent sends costly signal to reveal type | Agent self-selects from a menu |
| **Key requirement** | Single-crossing (signaling cost) | Incentive compatibility (self-selection) |
| **Efficiency** | Socially wasteful (resources consumed) | Can be efficient if menu well-designed |

**Key analogy:**
- **Signalling:** The informed agent says "I am this type" and backs it up with a costly action.
- **Screening:** The uninformed principal says "Choose the contract that fits you" and types reveal themselves through their choice.

**Important subtlety:** In the Spence model, the worker (informed) chooses education first — this is **signalling**. In the Rothschild-Stiglitz insurance model, the insurer (uninformed) offers a menu of contracts first — this is **screening**. Both achieve type revelation, but through different mechanisms and with different efficiency properties.

#### 8.2.4 The Stiglitz Screening Model of Insurance (Rothschild-Stiglitz, 1976)

**Setup:**
- Consumers have wealth $W$ and face a potential loss $L$ with probability $p$.
- Two types: **High-risk** ($p_H$) and **Low-risk** ($p_L$), with $p_H > p_L$.
- Insurer cannot observe risk type (adverse selection).
- Insurer offers a menu of contracts: $(\alpha, \beta)$ where $\alpha$ is the premium and $\beta$ is the coverage.
- Consumer's final wealth: $W - \alpha$ if no loss, $W - \alpha - L + \beta$ if loss.

**Full information benchmark:**
- Actuarially fair contracts: $\alpha_i = p_i \beta_i$ for type $i = \{H, L\}$.
- Each type buys full insurance: $\beta_i = L$ at premium $\alpha_i = p_i L$.

**Asymmetric information — separating equilibrium:**
- The low-risk type must be offered a contract that the high-risk type does **not** prefer.
- Low-risk contract: $(\alpha_L, \beta_L)$ with less-than-full coverage to deter H-type mimicking.
- The H-type receives full insurance: $\alpha_H = p_H L$, $\beta_H = L$.
- The L-type receives partial insurance with a **deductible** $D = L - \beta_L$:
  $$\alpha_L = p_L \beta_L \quad \text{(actuarially fair for L)}$$
  $$\text{H-type IC: } u(W - p_H L) \ge p_H u(W - \alpha_L - L + \beta_L) + (1-p_H)u(W - \alpha_L)$$
  The deductible is set just large enough to make the H-type indifferent between his full-insurance contract and the L-type's partial-insurance contract.

**Result — equilibrium may fail to exist:**
- If the proportion of high-risk types is sufficiently large, a **pooling contract** can be offered that attracts both types.
- However, a pooling contract at actuarially fair average price $\bar{p} = \lambda p_H + (1-\lambda)p_L$ is always vulnerable to **cream-skimming** — a competitor offers a slightly lower premium contract that attracts only L-types.
- **Rothschild-Stiglitz result:** A Nash equilibrium in pure strategies may **not exist** if the proportion of high-risk types is too high. This is because pooling contracts are always cream-skimmed, and separating contracts may not be sustainable.
- **Wilson (1977) anticipation equilibrium:** If firms anticipate cream-skimming, a pooling contract can be sustained as an "anticipatory equilibrium."

> **Munoz-Garcia Insight — Screening (Ch.10, pp.766–773):**
> The principal-agent screening model shows that under asymmetric information, the optimal menu of contracts satisfies **"no distortion at the top"** — the most efficient type faces no distortion relative to first-best, while less efficient types have their effort/output distorted downward. This is a general property of screening problems: the low-productivity type's contract is distorted to prevent the high-productivity type from mimicking.

#### 8.2.5 The Grossman-Stiglitz Paradox (1976, 1980)

**The paradox:**
If information is costly to acquire, and asset prices (or market prices) are **informationally efficient** (i.e., fully reflect all available information), then no one has an incentive to collect information — but then prices cannot reflect information they were never collected.

**Formal statement (Grossman-Stiglitz, 1976):**
Consider a market where:
- An asset has fundamental value $\theta$ (unknown).
- Informed traders pay cost $c$ to observe $\theta$.
- Uninformed traders infer $\theta$ from the market price $p$.
- If the price $p$ is a **sufficient statistic** for $\theta$ (i.e., perfectly reveals it), then uninformed traders can extract $\theta$ for free from $p$.

**The paradox chain:**
1. If $p$ perfectly reveals $\theta$, uninformed traders have the same information as informed traders.
2. Informed traders earn zero information premium — their gross return equals that of uninformed traders.
3. After subtracting the information acquisition cost $c$, informed traders earn **lower** net returns.
4. Therefore, no rational trader pays $c$ → no one is informed.
5. But if no one is informed, $p$ cannot reveal $\theta$ → uninformed traders now have worse information.
6. This creates profit opportunities for being informed — the cycle restarts.

**Resolution:** In equilibrium, prices are **noisy** — they reveal information only **partially**. A noisy rational expectations equilibrium exists where:
- Some traders become informed (enough to make prices partially revealing).
- The proportion of informed traders adjusts so that expected returns net of information costs are equalized.
- Prices are "informative but not perfectly revealing."

**Implication for market efficiency:**
- The Efficient Market Hypothesis (prices reflect all available information) cannot hold **literally** when information is costly.
- A **fundamental paradox** of information economics: informationally efficient markets cannot exist because they would eliminate the incentive to acquire the information that makes them efficient.

> **Munoz-Garcia Insight — Information and Market Efficiency (Ch.6, pp.461–463):**
> The Stolper-Samuelson theorem and Grossman-Stiglitz paradox both illustrate that prices do more than allocate resources — they **transmit information**. When that information transmission is too effective, it destroys the incentive to produce the information in the first place. This "information paradox" is a recurring theme in adverse selection and signaling models.

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

#### 8.3.4 Detailed Welfare Comparison — Rent Dissipation

The welfare difference between tariff, quota, and VER arises from **who captures the quota rent**:

| Policy | Domestic Price | Government Revenue | Producer Surplus | Consumer Surplus | Net Welfare vs Free Trade |
|--------|---------------|-------------------|-----------------|-----------------|--------------------------|
| **Free Trade** | $P_W$ | $0$ | $PS_{FT}$ | $CS_{FT}$ | $0$ |
| **Tariff $t$** | $P_W + t$ | $+t \times M_T$ (domestic) | $+\Delta PS$ | $-\Delta CS$ | $-\text{DWL}$ |
| **Quota $Q$** | $P_Q (> P_W)$ | $0$ (unless auctioned) | $+\Delta PS$ | $-\Delta CS$ | $-\text{DWL} - \text{rent to licence holders}$ |
| **VER** | $P_V (> P_W)$ | $0$ | $+\Delta PS$ | $-\Delta CS$ | $-\text{DWL} - \text{rent to FOREIGN}$ |

**Rent dissipation under VER:**
- The price gap $P_V - P_W$ multiplied by import quantity creates a "quota rent" of size $(P_V - P_W) \times M_V$.
- Under a tariff, this accrues to the domestic government as tariff revenue.
- Under a domestic quota (auctioned), it accrues to the government via licence fees.
- Under a VER, **foreign exporters** capture this rent — it is a **pure transfer abroad**.
- Additionally, there is no tariff revenue to offset the consumer and producer welfare changes.

**When do tariff and quota become equivalent?**
- If the quota is **auctioned competitively**, the government captures the rent, making the welfare effect identical to a tariff (same DWL triangles, same domestic rent capture).
- If the quota is **given free** to domestic importers, they capture the rent — welfare is lower than a tariff but better than a VER.
- Under a VER, the rent goes to **foreigners**, making it strictly the worst option.

> **Munoz-Garcia Insight — Trade Policy and Welfare (Ch.6, pp.466–468):**
> While Munoz-Garcia's chapter 6 focuses on tax incidence rather than trade policy per se, the logic of deadweight loss triangles and rent capture applies directly. The key insight: any trade restriction creates a wedge between domestic and world prices, generating DWL triangles. The distribution of the "quota rent" determines which policy is least damaging. A VER is a particularly inefficient form of protection because the rent is transferred to the very exporters the policy aims to restrict.

#### 8.3.5 Stolper-Samuelson Theorem

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

#### 8.3.6 Formal Derivation — Magnification Effect (Jones Algebra)

Based on the full general equilibrium model (Munoz-Garcia, Ch.6, pp.461–463):

**Setup:** Two goods ($X, Y$), two factors ($L$ labour, $K$ capital). Competitive firms:
$$c_X(w, r) = P_X \quad \text{and} \quad c_Y(w, r) = P_Y$$

where $c_X$ and $c_Y$ are unit cost functions (Shephard's lemma gives factor demands).

**Differentiate both sides:**
$$\frac{\partial c_X}{\partial w} dw + \frac{\partial c_X}{\partial r} dr = dP_X$$
$$\frac{\partial c_Y}{\partial w} dw + \frac{\partial c_Y}{\partial r} dr = dP_Y$$

**Apply Shephard's lemma** ($\partial c_i/\partial w = a_{Li}$, the labour requirement per unit output):
$$a_{LX} dw + a_{KX} dr = dP_X$$
$$a_{LY} dw + a_{KY} dr = dP_Y$$

**Convert to proportional rates of change** ($\hat{x} = dx/x$):
$$\theta_{LX} \hat{w} + \theta_{KX} \hat{r} = \hat{P}_X$$
$$\theta_{LY} \hat{w} + \theta_{KY} \hat{r} = \hat{P}_Y$$

where $\theta_{Li} = wa_{Li}/P_i$ and $\theta_{Ki} = ra_{Ki}/P_i$ are **factor cost shares** in industry $i$, with $\theta_{Li} + \theta_{Ki} = 1$.

**Factor intensity assumption:**
If $X$ is labour-intensive and $Y$ is capital-intensive:
$$\theta_{LX} > \theta_{LY} \quad \text{and} \quad \theta_{KX} < \theta_{KY}$$

**Solve for factor price changes:**
Using Cramer's rule:
$$|\Theta| = \theta_{LX}\theta_{KY} - \theta_{LY}\theta_{KX} > 0 \quad \text{(by factor intensity)}$$

$$\hat{w} = \frac{\theta_{KY}\hat{P}_X - \theta_{KX}\hat{P}_Y}{|\Theta|}$$
$$\hat{r} = \frac{\theta_{LX}\hat{P}_Y - \theta_{LY}\hat{P}_X}{|\Theta|}$$

**Magnification effect:** If $\hat{P}_X > 0$ and $\hat{P}_Y = 0$ (price of labour-intensive good rises):
$$\hat{w} = \frac{\theta_{KY}}{|\Theta|} \hat{P}_X > \hat{P}_X \quad \text{(since } |\Theta| < \theta_{KY} \text{ by the factor intensity assumption)}$$
$$\hat{r} = \frac{-\theta_{LY}}{|\Theta|} \hat{P}_X < 0 < \hat{P}_Y = 0$$

**General case** ($\hat{P}_X > \hat{P}_Y$):
$$\hat{w} > \hat{P}_X > \hat{P}_Y > \hat{r}$$

This is the **magnification effect**: factor prices respond more than proportionally to output price changes. Trade's distributional effects are amplified through the factor-intensity structure of production.

> **Munoz-Garcia Insight — Stolper-Samuelson (Ch.6, pp.461–463):**
> The proof uses Shephard's lemma and the properties of cost functions to derive comparative statics of factor prices with respect to output prices. The key insight is that factor intensities determine the sign and magnitude of factor price responses. The magnification effect $|\hat{w}| > |\hat{P}_X| > |\hat{P}_Y| > |\hat{r}|$ is a general property when factor intensities differ across sectors.

**Extension — Magnification with both prices changing:**
When both output prices change, the full ranking holds:
$$\hat{w} - \hat{r} = \frac{(\hat{P}_X - \hat{P}_Y)}{|\Theta|} > \hat{P}_X - \hat{P}_Y$$
since $|\Theta| \in (0, 1)$. The factor price differential exceeds the output price differential — trade-induced price changes produce **magnified** distributional consequences.

**Empirical implication:** Even modest changes in trade prices can produce large changes in factor returns (wages and rents). This explains why trade policy generates intense distributional conflict — the losers lose a lot, and the winners win a lot.

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

### Key Formulas — Information & Trade

| Concept | Formula |
|---------|---------|
| Adverse selection (WTP) | $E[V] = \mu V_H + (1-\mu)V_L$ |
| Market collapse condition | $E[V] < \max\{\text{seller reservation prices}\}$ |
| Akerlof continuous model (1st iteration cutoff) | $q \leq Q \cdot E[q] = Q^2/2$ |
| Complete unraveling limit | $E^{(n)}[q] \to 0$ as $n \to \infty$ |
| Spence separating condition | $c_H \le w_H - w_L \le c_L$ (or $q_H - q_L \in [c_H, c_L]$) |
| Single-crossing property | $c_L > c_H$ (education costlier for L-types) |
| Spence-Mirrlees condition (continuum) | $c_{e\theta} < 0$ (marginal cost decreasing in ability) |
| Continuum separating (quadratic costs) | $e^*(\theta) = \sqrt{(\theta^2 - \underline{\theta}^2)/2\alpha}$ |
| Intuitive Criterion (necessary condition) | $\Theta^{**}(a') \neq \emptyset$ and $u(a',\theta) > u^{eq}(\theta)$ for surviving types |
| Screening: no distortion at top | $x'(e_L) = \theta_L c'(e_L)/u'(w_L)$ (efficient for lowest-cost type) |
| Grossman-Stiglitz paradox | If prices perfectly reveal, no one collects info $\Rightarrow$ prices can't reveal |
| Autarky price | $Q_d(P) = Q_s(P)$ |
| Tariff DWL | $\frac12 t (\Delta Q_s + \Delta Q_d)$ |
| Stolper-Samuelson (Jones algebra) | $\hat{w} > \hat{P}_X > \hat{P}_Y > \hat{r}$ (magnification effect) |
| Magnification formula | $\hat{w} = (\theta_{KY}\hat{P}_X - \theta_{KX}\hat{P}_Y)/(\theta_{LX}\theta_{KY} - \theta_{LY}\theta_{KX})$ |
| VER welfare loss | DWL + quota rent to foreigners |
| Tariff < Quota < VER (welfare ranking) | Same DWL, but rent destination differs: govt > domestic > foreign |


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


---

## Appendix D: Key Textbook Connections — Comprehensive Cross-Reference Index

This appendix maps each major concept in the guide to its source textbook and section, enabling targeted revision of the original proofs.

### D.1 Munoz-Garcia — Advanced Microeconomic Theory

| Guide Topic | Munoz-Garcia Reference | Key Concepts |
|-------------|----------------------|--------------|
| **Topic 1** | Ch.1, §1.1–1.5 | Preference axioms, Examples 1.3–1.8, Lexicographic preferences, Utility representation theorems |
| **Topic 1** | Ch.1, Appendix A | Bordered Hessian derivation, Quasiconcavity ↔ convex UCS |
| **Topic 1** | Ch.1, §1.8 | Choice-based approach, WARP, Rational preference → choice |
| **Topic 1** | Ch.1, §1.9 | Behavioral economics: Prospect theory, framing, endowment effect |
| **Topic 2** | Ch.2, §2.3–2.4 | Slutsky matrix, NSD, symmetry, Compensated Law of Demand |
| **Topic 2** | Ch.2, §2.8 | Hicksian vs Walrasian demand, Relationship between demand concepts |
| **Topic 2** | Ch.3, §3.3 | Elasticity-form Slutsky equation, ε-form |
| **Topic 3** | Ch.4, §4.1 | Production sets, Hotelling's Lemma, Profit function convexity |
| **Topic 3** | Ch.4, §4.2 | Cost function concavity, Shephard's Lemma, Duality |
| **Topic 3** | Ch.4, §4.3 | Cobb-Douglas CMP, Conditional factor demands |
| **Topic 3** | Ch.4, §4.4 | CES production, Nesting properties |
| **Topic 3** | Ch.6, §6.4 | Aggregate supply, CRS with free entry |
| **Topic 4** | Ch.3, §3.1–3.2 | CV, EV, Hicksian demand integration |
| **Topic 4** | Ch.3, §3.5 | Willig bounds, Welfare ordering |
| **Topic 4** | Ch.6, §6.5 | Welfare theorems, Lagrangian derivation of Pareto conditions |
| **Topic 4** | Ch.6, §6.5.2 | Bergson-Samuelson SWF, Social welfare functions |
| **Topic 4** | Ch.6, §6.6 | Scitovsky reversal, Compensation tests |
| **Topic 5** | Ch.6, §6.1 | Arrow-Debreu existence, Fixed-point theorem application |
| **Topic 5** | Ch.6, §6.2 | Gross substitutability, Uniqueness of equilibrium |
| **Topic 5** | Ch.6, §6.3 | Tatonnement stability, Walrasian adjustment process |
| **Topic 5** | Ch.6, §6.5 | Three Pareto conditions, Lagrangian derivation |
| **Topic 6** | Ch.8, §8.1 | Nash Existence Theorem, Kakutani fixed-point |
| **Topic 6** | Ch.8, §8.2 | Mixed strategy NE, Technology adoption game |
| **Topic 6** | Ch.10, §10.1 | Bayesian Nash Equilibrium, Types and beliefs |
| **Topic 6** | Ch.10, §10.2 | Perfect Bayesian Equilibrium, Sequential rationality |
| **Topic 6** | Ch.8, §8.5 | Kreps-Milgrom-Roberts-Wilson reputation model |
| **Topic 6** | Ch.8, §8.4 | Renegotiation-proofness, Grim trigger fragility |
| **Topic 7** | Ch.9, §9.1 | Production externalities, Steel-fishery model |
| **Topic 7** | Ch.9, §9.2 | Coase Theorem, Bargaining and efficiency |
| **Topic 7** | Ch.9, §9.3 | Pigouvian tax, Graphical analysis |
| **Topic 7** | Ch.9, §9.4 | Public goods, Samuelson condition, Free-rider problem |
| **Topic 7** | Ch.9, §9.5 | Lindahl equilibrium, Personalized prices |
| **Topic 7** | Ch.9, §9.6 | Tragedy of the Commons, n-user analysis |
| **Topic 8** | Ch.10, §10.4 | Akerlof lemons model, Continuous quality, Market unraveling |
| **Topic 8** | Ch.10, §10.5 | Adverse selection in labor markets |
| **Topic 8** | Ch.8, §8.5 (Ch.11) | Spence signaling model, Continuum of types |
| **Topic 8** | Ch.8, §8.5.3 | Intuitive Criterion (Cho-Kreps) |
| **Topic 8** | Ch.10, §10.5.2 | Stiglitz screening model of insurance |
| **Topic 8** | Ch.6, §6.7 | Stolper-Samuelson theorem, Magnification effect |
| **Topic 8** | Ch.6, §6.8 | Trade policy, Tariff vs quota vs VER welfare comparison |

### D.2 Koutsoyiannis — Modern Microeconomics

| Guide Topic | Koutsoyiannis Reference | Key Concepts |
|-------------|------------------------|--------------|
| **Topic 1** | Ch.2, pp.53–60 | Indifference curve geometry, Diminishing MRS, Consumer equilibrium |
| **Topic 2** | Ch.2, pp.60–78 | Empirical demand estimation, Identification problem, Functional forms |
| **Topic 2** | Ch.2, pp.153–161 | Linear Expenditure System |
| **Topic 3** | Ch.3, pp.78–120 | Production functions, Isoquant types, Returns to scale |
| **Topic 3** | Ch.4, pp.121–170 | Cost minimization, Lagrangian, Expansion path, Numerical examples |
| **Topic 6** | Ch.9, pp.315–390 | Oligopoly: Cournot, Bertrand, Stackelberg comparison, Market structure |
| **Topic 6** | Ch.11, pp.428–459 | Critique of neoclassical theory, Marginalist controversy |
| **Topic 7** | Ch.23, pp.642–670 | Externalities, Pareto optimality breakdown, MSC analysis |
| **Topic 5** | Ch.22, pp.620–641 | Walrasian system of simultaneous equations, General equilibrium |

### D.3 How to Use Textbook References in Exams

| Exam Situation | How to Reference the Textbook | Example |
|----------------|-----------------------------|---------|
| Proving a theorem | Cite the formal proof from Munoz-Garcia | "As shown in Munoz-Garcia (Ch.2, §2.4), the Compensated Law of Demand establishes..." |
| Deriving a result | Cite the Lagrangian derivation | "Following Munoz-Garcia (Ch.6, §6.5), the first welfare condition is obtained by..." |
| Numerical example | Cite the textbook's solved example | "This parallels Munoz-Garcia Example 9.1 where the steel-fishery model yields..." |
| Evaluation/critique | Cite Koutsoyiannis's institutional critique | "Koutsoyiannis (Ch.11) argues that the neoclassical model faces difficulties in..." |
| Diagram explanation | Reference the textbook diagram conventions | "Consistent with Koutsoyiannis (Ch.2, p.55), the consumer equilibrium occurs at the tangency..." |
| Policy application | Cite the textbook's policy analysis | "The Pigouvian tax derivation follows Munoz-Garcia (Ch.9, §9.3) where τ = MEC at social optimum" |
| Empirical context | Cite Koutsoyiannis's empirical discussion | "As discussed in Koutsoyiannis (Ch.2), demand estimation faces an identification problem..." |


---

*This guide consolidates content from:*
- *Answer files: answers-consumer-theory.md, answers-demand-production.md, answers-welfare.md, answers-ge-game-extern-trade.md*
- *Basics & formulas, equation explainer, exam cheat sheet, glossary*
- *Extracted text from lecture PDFs, homework assignments, tutorial sheets, and past exam papers*
- **Munoz-Garcia — Advanced Microeconomic Theory (Ch.1–11)**
- **Koutsoyiannis — Modern Microeconomics (Ch.2–4, 9, 11, 22–23)**
- *All source PDFs available in `resources/master-notes-501/` and `resources/extracted_text/Masters_Notes_501/`*
