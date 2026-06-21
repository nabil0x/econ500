# 501 Microeconomics — Complete Master Study Guide

> **Jahangirnagar University · MSc Economics**
> Advanced Microeconomic Theory — Exam preparation source of truth
>
> **Source files:** All answer banks, extracted text from PDFs, homework assignments, tutorial sheets, and past exam papers
>   (Batch 46, Batch 48)
>
> **Textbook cross-references:** Munoz-Garcia (*Advanced Microeconomic Theory*) Ch.1–11; Koutsoyiannis (*Modern Microeconomics*)
>   Ch.2–4, 9, 11, 22–23
>
> **Last updated:** June 2026

Welcome! This guide brings together everything you'll need for the 501 exam — all the theory, derivations, practice problems, and past papers in one place. Work through it steadily, and you'll walk into that exam room feeling ready.

---

## How to Use This Guide

This is your **single-file source of truth** for 501 Microeconomics. We've packed in:

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

<!-- Textbook references from Munoz-Garcia & Koutsoyiannis — your go-to sources for the rigorous proofs and real-world context that can lift an answer from good to excellent. -->

<!-- ============================================================
TOPIC 1: CONSUMER THEORY & PREFERENCES
============================================================ -->
## <a id="topic-1"></a>Topic 1: Consumer Theory & Preferences

---

### 1.1 The Preference-Based Approach

**Why this matters for your exam:** Every model in microeconomics starts here — how do we describe what people want? If you don't understand preferences, you can't derive demand, and without demand there's no market analysis. This is the foundation everything else builds on.

Let's start with a question you face every day: Given your limited budget, which goods do you buy? Consumer theory models this by assuming **you** have well-defined preferences over consumption bundles and that **you** choose the most-preferred bundle from those you can afford. Preferences are the primitive; choices are derived from them.

**The preference relation** is a binary relation $\succeq$ (weak preference) on the consumption set $X = \mathbb{R}^N_+$. For any $x, y \in X$:

- $x \succeq y$ : "x is at least as preferred as y"
- $x \succ y$ (strict) : $x \succeq y$ but not $y \succeq x$
- $x \sim y$ (indifference) : $x \succeq y$ and $y \succeq x$

#### Rationality Axioms

**What does it mean to be "rational"?** Here's the definition: a **rational preference relation** satisfies two key assumptions:

**1. Completeness** -- For all $x, y \in X$: either $x \succeq y$, or $y \succeq x$, or both ($x \sim y$). You can compare ANY two bundles; no refusal to answer.

- *Violation example:* "Is the brother of" -- if John and Bob are not brothers, neither is the brother of the other.
- *Real-world violation:* You often cannot compare unfamiliar bundles (e.g., a rare wine vs. an exotic cheese).

**2. Transitivity** -- For all $x, y, z \in X$: if $x \succeq y$ and $y \succeq z$ then $x \succeq z$. Your preferences do not cycle; they are internally consistent.

- *Without transitivity:* a **money-pump argument** can extract infinite wealth from you (cycle through preferences, charging a fee at each step).
- *Sources of intransitivity:* Indistinguishable alternatives (just-noticeable differences), framing effects, Condorcet paradox (aggregation of criteria), changing preferences.

**Reflexivity** (implied by completeness + transitivity): $x \sim x$ and $x \succeq x$ for all $x$.

---

> **Exam Tip (Q1, 10/7 marks):** Completeness is the most frequently challenged assumption -- real people often cannot compare unfamiliar bundles. Transitivity is needed for utility representation. Always state both when defining rational preferences. A students give the Condorcet paradox and money-pump argument; B students merely restate definitions.

---

> **Reference — Munoz-Garcia (§1.2-1.3, Examples 1.3, 1.5, 1.6):**
>
> **Example 1.3 (Framing Effects):** Rubinstein (2012) presented Master's students with holiday packages and asked which they preferred: (a) A weekend in Paris for \$574 at a four-star hotel; (b) A weekend in Paris at the four-star hotel for \$574; (c) A weekend in Rome at the five-star hotel for \$612. Alternatives (a) and (b) are identical -- most students are indifferent between them. Most students strictly prefer (b) to (c). By transitivity, (a) should be preferred to (c). While most students exhibit this transitive preference, about **25% of students** strictly prefer (c) to (a) -- an intransitive preference induced by the way options were *framed*.
>
> **Example 1.5 (Monotonicity -- Leontief):** $u(x_1, x_2) = \min\{ax_1, bx_2\}$ satisfies **monotonicity** (increase all arguments → utility increases) but violates **strong monotonicity** (increase only good 1 → $\min\{ax_1 + \delta, bx_2\}$ is not necessarily larger than $\min\{ax_1, bx_2\}$ -- e.g., when $\min\{ax_1, bx_2\} = bx_2$).
>
> **Example 1.6 (Strong Monotonicity -- Perfect Substitutes):** $u(x_1, x_2) = ax_1 + bx_2$ satisfies **both** monotonicity and strong monotonicity, since increasing any single argument strictly increases utility.
>
> **Takeaway:** Strong monotonicity $\Rightarrow$ monotonicity, but the converse fails (Leontief is the counterexample).

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

**Indifference set** of a bundle $x$ is the set of all bundles $y$ such that you are indifferent between them:

> **Let's walk through this step by step:**
> Starting from the definition of the indifference relation $\sim$ (where $x \sim y$ means $x \succeq y$ and $y \succeq x$):
> 1. The preference relation $\succeq$ partitions the consumption set $X$ into equivalence classes
> 2. For a given bundle $x$, collect all bundles $y$ that are indifferent to $x$: $\{ y \in X : y \sim x \}$
> 3. This collection is defined as the **indifference set** $IND(x)$
>
> **Here's what's really going on:** $IND(x)$ contains every bundle that yields exactly the same satisfaction as $x$. You'd be equally happy with any bundle in this set — they are perfect substitutes in terms of welfare.

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

**Here's the key — and it's beautiful:** convex preferences capture the idea that you prefer variety. A mix of two bundles is never worse than the extreme you like less.

**Convexity (Definition 1):** For all $x, y \in X$, if $x \succeq y$ then for any $\alpha \in (0,1)$:

> **Let's derive this together:**
> Starting from the premise that $x \succeq y$ (bundle $x$ is at least as good as $y$):
> 1. Take any $\alpha \in (0,1)$ and form the convex combination $\alpha x + (1-\alpha)y$
> 2. **Convex preferences** require that this mixture is **no worse than** the worse bundle $y$
> 3. Result: $\alpha x + (1-\alpha)y \succeq y$
>
> **Here's what's really going on:** Averages are not worse than extremes. If you mix a good bundle $x$ with a less-preferred bundle $y$, the mixture is still at least as good as $y$. This captures a taste for diversification.

$$\alpha x + (1-\alpha) y \succeq y$$

The convex combination of $x$ and $y$ is at least as good as $y$.

**Convexity (Definition 2 -- Convex UCS):** For every bundle $x$, its upper contour set $UCS(x) = \{ y \in X : y \succeq x \}$ is a convex set. That is, for any $y, z \in UCS(x)$ and any $\lambda \in (0,1)$:

> **Let's work through this step by step:**
> Starting from two bundles $y, z$ in the upper contour set $UCS(x) = \{y : y \succeq x\}$:
> 1. By definition of $UCS(x)$: $y \succeq x$ and $z \succeq x$
> 2. For any $\lambda \in (0,1)$, form the convex combination $\lambda y + (1-\lambda)z$
> 3. **Convex UCS assumption:** this mixture also belongs to $UCS(x)$
> 4. Therefore $\lambda y + (1-\lambda)z \succeq x$
>
> **Here's what's really going on:** The upper contour set is a convex set — if two bundles are both at least as good as $x$, then any weighted average of them is also at least as good as $x$. This is equivalent to Definition 1.

$$\lambda y + (1-\lambda) z \succeq x$$

**Equivalence:** The two definitions are equivalent. Both capture the idea that you prefer averages to extremes (diversification).

**Strong convexity:** For every $x, y$ where $x \neq y$ and $x \succeq z$, $y \succeq z$, then for all $\lambda \in (0,1)$:

> **Let's walk through this:**
> Starting from two distinct bundles $x \neq y$, both at least as good as $z$ ($x \succeq z$, $y \succeq z$):
> 1. Form the convex combination $\lambda x + (1-\lambda)y$ for any $\lambda \in (0,1)$
> 2. **Weak convexity** would give: $\lambda x + (1-\lambda)y \succeq z$
> 3. **Strong convexity** strengthens this: the mixture is **strictly better** than $z$: $\lambda x + (1-\lambda)y \succ z$
>
> **Here's what's really going on:** Mixing distinct equally-good bundles yields a strictly preferred bundle. This rules out linear (flat) segments on indifference curves — ICs are strictly bowed inward, guaranteeing a unique optimal bundle.

$$\lambda x + (1-\lambda) y \succ z$$

| Property | Convexity | Strong Convexity |
|:---|---:|---:|
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

> **Let's derive this together:**
> Starting from the convex-UCS property of preferences:
> 1. Take any two bundles $x, y$ and let $m = \min\{u(x), u(y)\}$ be the lower utility level
> 2. Both $x$ and $y$ belong to $UCS(z)$ where $z$ is the bundle achieving $u(z) = m$
> 3. Since $UCS(z)$ is convex, $\lambda x + (1-\lambda)y \in UCS(z)$
> 4. Hence $u(\lambda x + (1-\lambda)y) \ge m = \min\{u(x), u(y)\}$
>
> **Here's what's really going on:** The utility of an average bundle is at least the minimum of the two utilities. This is the analytic expression of convex preferences — it ensures upper contour sets are convex sets.

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

> **Reference — Munoz-Garcia (§1.7, pp.25-28):**
>
> Munoz-Garcia emphasizes a crucial distinction: **concavity implies quasiconcavity, but quasiconcavity does NOT imply concavity.**
>
> - Concave utility: $u(\alpha x + (1-\alpha)y) \ge \alpha u(x) + (1-\alpha) u(y)$ (diminishing marginal utility in all directions).
> - Quasiconcave utility: $u(\alpha x + (1-\alpha)y) \ge \min\{u(x), u(y)\}$ (convex upper contour sets).
>
> Example: $u(x_1, x_2) = x_1^{1/4} x_2^{1/4}$ satisfies **both** concavity and quasiconcavity. Its monotonic transformation $v(x_1, x_2) = (x_1^{1/4} x_2^{1/4})^6 = x_1^{6/4} x_2^{6/4}$ is **convex** (not concave) yet still **quasiconcave** -- because it represents the same preferences! This is why we require quasiconcavity (not concavity) for utility functions: it is preserved under monotonic transformations, while concavity is not.

> **Reference — Koutsoyiannis (Ch.2, pp.18-24):**
>
> Koutsoyiannis provides the classic textbook treatment of indifference curve geometry. The four fundamental properties of indifference curves are:
>
> 1. **Negative slope:** If the quantity of one good decreases, the quantity of the other must increase to maintain constant utility.
> 2. **Higher curves = higher utility:** Curves farther from the origin represent higher satisfaction.
> 3. **Non-intersecting:** If two ICs intersected, the intersection point would imply two different utility levels, which is impossible.
> 4. **Convex to the origin:** The MRS diminishes as we move along the curve -- you require increasingly more of one good to compensate for giving up units of the other.
>
> **On the role of MRS:** Koutsoyiannis emphasizes that the indifference-curve approach avoids direct measurement of marginal utility by working with the MRS (ratio of marginal utilities). The first-order condition for consumer equilibrium, $MRS_{xy} = p_x/p_y$, is identical to the cardinalist condition $MU_x/p_x = MU_y/p_y$, but requires only ordinal utility. The second-order condition is guaranteed by the convexity of indifference curves (diminishing MRS).
>
> **Special cases:**
> - **Perfect substitutes:** Linear ICs; corner solutions ("monomania") possible.
> - **Perfect complements:** Right-angle ICs; no substitution possible; standard tangency analysis breaks down.

---

#### Debreu Utility Existence Theorem

**Why this matters for your exam:** This theorem tells you when preferences can actually be represented by a utility function — and the key is continuity. Without it, you can have perfectly rational preferences that are impossible to work with mathematically.

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

**Here's what's really going on:** Think of it like projecting every bundle onto the 45-degree line by finding the unique indifference curve intersection. That projection $t(x)$ becomes the utility number.

> **Exam Tip:** Memorize the structure: $\mathbf{0} \to M \to t(x) \to u(x)=t(x)$. Lexicographic preferences violate continuity and cannot be represented -- a key counterexample.

---

> **Reference — Munoz-Garcia (§1.9.5-1.10, pp.45-50) — Lexicographic Preferences: The Critical Counterexample:**
>
> A preference relation that is **complete, transitive, strictly monotonic, and strictly convex**, yet **NOT continuous** and **cannot be represented by any utility function**.
>
> **Definition:** A bundle $x = (x_1, x_2)$ is weakly preferred to $y = (y_1, y_2)$, written $(x_1, x_2) \succeq (y_1, y_2)$, if and only if:
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
> **Exam significance:** Whenever asked "can every rational preference be represented by a utility function?" cite lexicographic preferences. The answer is NO -- continuity is also required.

---

#### Continuity of Preferences

**Why this matters for your exam:** Continuity is the technical condition that bridges preferences to utility functions. Without it, your demand functions could jump discontinuously when prices change slightly — not very useful for economic analysis.

A preference relation $\succeq$ is **continuous** if it is preserved under limits: for sequences $x^n \to x$, $y^n \to y$, $x^n \succeq y^n$ for all $n$ $\implies$ $x \succeq y$.

**Equivalent definition:** For every $x$, both $UCS(x)$ and $LCS(x)$ are closed sets.

**Economic role:** Continuity rules out "jumps" in preferences -- small changes in consumption cannot cause abrupt preference reversals. It is necessary for utility representation and ensures demand correspondences are upper hemicontinuous.

---

#### Utility Functions & Desirability

**Why this matters for your exam:** Utility functions are the tool you'll actually use to solve problems. The key insight: only the ranking matters, not the numbers. And "more is better" has two different formal versions that matter for proofs.

> **Solved Question (Q6, 10/5 marks): Define utility function. Explain desirability by monotonicity and strong monotonicity.**

**Answer:**

**Utility function:** A function $u: X \to \mathbb{R}$ that represents preference relation $\succeq$ if, for every $x, y \in X$:

> **Let's work through this step by step:**
> Starting from the definition of a utility representation:
> 1. A utility function $u: X \to \mathbb{R}$ **represents** preferences $\succeq$ if it preserves the preference ordering
> 2. For any two bundles $x, y$: $x$ is weakly preferred to $y$ **if and only if** $u(x)$ is at least as large as $u(y)$
> 3. Mathematically: $x \succeq y \iff u(x) \ge u(y)$
>
> **Here's what's really going on:** Utility numbers are ordinal ranking devices — only the comparison matters, not the absolute value. Any strictly increasing transformation $f(u(x))$ represents the same preferences.

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
|:---|---:|---:|
| One good increases, others same | Only weakly better ($x \succeq y$) | Strictly better ($x \succ y$) |
| All goods increase | Strictly better | Strictly better |
| Example: $u = \min\{x_1, x_2\}$ | Satisfies monotonicity | Violates |
| Example: $u = x_1 + x_2$ | Satisfies | Satisfies |
| LNS implied? | Yes | Yes (stronger) |

---

#### Local Non-Satiation (LNS)

**Why this matters for your exam:** LNS is the weakest "more is better" assumption and the one you need for Walras' Law and many duality results. Memorize which assumptions imply which — it's a classic exam question.

> **Solved Question (Q7, 5 marks): Show: Strong Monotonicity $\Rightarrow$ Monotonicity $\Rightarrow$ LNS.**

**Answer:**

**LNS definition:** For every $x \in X$ and $\varepsilon > 0$, there exists $y$ with $\|y - x\| < \varepsilon$ such that $y \succ x$. You are never fully satiated — there's always something nearby you'd prefer.

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

> **Reference — Munoz-Garcia (§1.5, Example 1.8, pp.29-33) — Testing Properties of Preference Relations:**
>
> Munoz-Garcia systematically tests a preference relation defined as: $x \succeq y$ if and only if $x_k \ge y_k$ for **every** good $k$ (i.e., bundle $x$ contains weakly more of every good than bundle $y$).
>
> **Results of the test:**
>
> | Property | Verdict | Explanation |
> |:---|---:|---|
> | **Completeness** | ✗ **Violated** | Consider $x = (3, 1)$ and $y = (1, 3)$. Neither $x \ge y$ in all components (good 1: $3 \ge 1$ ✓, good 2: $1 \ge 3$ ✗) nor $y \ge x$ (good 1: $1 \ge 3$ ✗). So neither $x \succeq y$ nor $y \succeq x$ holds. |
> | **Transitivity** | ✓ Satisfied | If $x \ge y$ and $y \ge z$ component-wise, then $x \ge z$ by transitivity of $\ge$. |
> | **Strong monotonicity** | ✓ Satisfied | If $x \ge y$ and $x \neq y$, then at least one component is strictly larger, so $x \succ y$. |
> | **Strict convexity** | ✓ Satisfied | If $x \succeq z$ and $y \succeq z$, then $x_k \ge z_k$ and $y_k \ge z_k$ for all $k$, so $\alpha x_k + (1-\alpha) y_k \ge z_k$ with strict inequality for at least one $k$. |
> | **LNS** | ✓ Satisfied | For any $x$, increase both components by $\varepsilon/2$ to get $y$ within $\varepsilon$-ball with $y \succ x$. |
>
> **Key insight from this example:** A preference relation can satisfy transitivity, strong monotonicity, strict convexity, and LNS -- yet **fail completeness**. This demonstrates that these properties are logically independent: satisfying one set does not guarantee the others.

---

### 1.2 Homogeneity, Homotheticity & MRS

**Why this matters for your exam:** These properties tell you how demand responds when everything scales — double all prices and income, what happens? Homotheticity is the assumption that makes Engel curves linear, and MRS is the single most important concept for solving consumer optimization problems.

#### Homogeneous Functions

> **Solved Question (Q8, 5/4 marks): Examine (i) Homogeneity (ii) Homotheticity.**

A function $f: \mathbb{R}^N_+ \to \mathbb{R}$ is **homogeneous of degree $k$** if scaling all arguments by $a > 0$ multiplies the function value by $a^k$:

> **Let's derive this together:**
> Starting from the definition of degree-$k$ homogeneity:
> 1. Take a function $f: \mathbb{R}^N_+ \to \mathbb{R}$ and scale **every** argument by factor $a > 0$
> 2. If the function value scales by $a^k$, we say $f$ is **homogeneous of degree $k$** (HD($k$))
> 3. Formal statement: $f(a x_1, a x_2, \ldots, a x_N) = a^k f(x_1, x_2, \ldots, x_N)$
>
> **Here's what's really going on:** Proportional scaling of all inputs yields a proportional scaling of output. For utility functions, HD(1) means doubling consumption doubles utility; HD(0) means scaling has no effect on utility.

$$f(a x_1, a x_2, \ldots, a x_N) = a^k f(x_1, x_2, \ldots, x_N)$$

**Key properties:**
1. Derivatives of an HD($k$) function are HD($k-1$).
2. MRS is HD(0): $MRS_{ij}(a x) = MRS_{ij}(x)$ (constant along rays).
3. Euler's theorem: $\sum_{i=1}^N (\partial f/\partial x_i) \cdot x_i = k f(x)$.

**Examples:** Cobb-Douglas $u = x^\alpha y^\beta$: HD($\alpha+\beta$); Perfect substitutes $u = ax + by$: HD(1); Perfect complements $u = \min\{ax, by\}$: HD(1); CES: HD(1).

#### Homothetic Preferences

**Why this matters for your exam:** Homothetic preferences are the workhorses of exam problems — Cobb-Douglas, CES, perfect substitutes, perfect complements are all homothetic. Know what that implies for demand.

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
|:---|---:|---:|
| Scaling property | $u(ax) = a^k u(x)$ | $u(ax) = g(a^k v(x))$ |
| MRS along rays | Constant | Constant |
| Engel curves | Straight line through origin | Straight line through origin |
| Examples | CD, linear, Leontief, CES | CD, linear, Leontief + any monotonic transformation |

> **Exam Tip:** The counterexample $u = xy + a$ (homothetic but not homogeneous) is a make-or-break example -- examiners specifically look for it.

---

> **Reference — Munoz-Garcia (§1.9.1-1.9.3, pp.39-44) — Formal Proof that Homotheticity Does NOT Imply Homogeneity:**
>
> Munoz-Garcia provides the formal proof. Take $v(x_1, x_2) = x_1 x_2$, which is HD(2). Apply the monotonic transformation $g(y) = y + a$, where $a > 0$, yielding $u(x_1, x_2) = x_1 x_2 + a$. Then:
>
> > **Here's the derivation:**
> > Starting from $u(x_1, x_2) = x_1 x_2 + a$, which is homothetic but claimed to be non-homogeneous:
> > 1. Scale both arguments by $\alpha$: $u(\alpha x_1, \alpha x_2) = (\alpha x_1)(\alpha x_2) + a = \alpha^2 (x_1 x_2) + a$
> > 2. Compare to the homogeneity requirement: $\alpha^k (x_1 x_2 + a) = \alpha^k x_1 x_2 + \alpha^k a$
> > 3. The $\alpha^2 (x_1 x_2)$ term suggests $k=2$, but the $a$ term would scale by $\alpha^2$ when it should scale by $\alpha^k$
> > 4. No single $k$ satisfies the condition for all $\alpha$ — **not homogeneous** (yet homothetic!)
> >
> > **Here's what's really going on:** Adding a constant to a homogeneous function preserves homotheticity (it is a monotonic transformation $g(y)=y+a$) but destroys homogeneity — the constant term doesn't scale proportionally.
>
> $$u(\alpha x_1, \alpha x_2) = (\alpha x_1)(\alpha x_2) + a = \alpha^2 (x_1 x_2) + a \neq \alpha^k (x_1 x_2 + a)$$
> for any single $k$. Thus $u$ is **not homogeneous** but **is homothetic** (since $g$ is strictly increasing).
>
> **Example 1.9 (Testing for homotheticity):** Is $\ln(x_1^{0.3} x_2^{0.6})$ homothetic? Yes. Since $x_1^{0.3} x_2^{0.6}$ is HD(0.9) (and concave because $\alpha+\beta = 0.9 < 1$), applying the monotonic transformation $\ln(\cdot)$ preserves homotheticity. By the same argument, it is also quasiconcave.

---

#### Marginal Rate of Substitution (MRS)

**Why this matters for your exam:** MRS is the single concept you'll use most — it's the slope of the indifference curve, and the tangency condition $MRS = p_x/p_y$ is the first step in solving almost every consumer optimization problem.

The MRS between goods $i$ and $j$ measures the rate at which you are willing to trade good $j$ for good $i$ while maintaining constant utility:

> **Let's derive this together:**
> Starting from the total differential of the utility function along an indifference curve:
> 1. Total change in utility: $du = \sum_{k=1}^N \frac{\partial u}{\partial x_k} dx_k$
> 2. Along an indifference curve, $du = 0$ (utility is constant)
> 3. For a change involving only goods $i$ and $j$: $\frac{\partial u}{\partial x_i} dx_i + \frac{\partial u}{\partial x_j} dx_j = 0$
> 4. Rearranging: $-\frac{dx_j}{dx_i} = \frac{\partial u/\partial x_i}{\partial u/\partial x_j} \equiv MRS_{ij}(x)$
>
> **Here's what's really going on:** The MRS measures your willingness to trade one good for another while keeping utility constant — the subjective rate of exchange between goods $i$ and $j$.

$$MRS_{ij}(x) = \frac{MU_i(x)}{MU_j(x)} = \frac{\partial u/\partial x_i}{\partial u/\partial x_j}$$

Along an indifference curve ($du = 0$): $MRS_{ij} = -\left. dx_j/dx_i \right|_{du=0}$.

**Here's the key — and it's beautiful:** The MRS is invariant to monotonic transformations of utility (the ratio $MU_i/MU_j$ cancels out), making it a "real" economic object. At an interior UMP optimum, $MRS_{ij} = p_i/p_j$.

---

> **Solved Question (Q9, 8 marks): Prove quasi-concave utility $U(X,Y) \iff dMRS/dX < 0$.**

**Answer:**

We prove: quasiconcavity of utility (convex preferences) is equivalent to diminishing MRS along an indifference curve.

**Step 1 -- MRS formula:**

For utility $u(x,y)$,

> **Let's walk through this step by step:**
> Specializing to two goods ($x$ and $y$):
> 1. $MRS_{xy} = \frac{MU_x}{MU_y} = \frac{\partial u/\partial x}{\partial u/\partial y}$
> 2. This ratio tells us how many units of $y$ you would give up to get one more unit of $x$ while staying on the same indifference curve
>
> **Here's what's really going on:** The MRS is the absolute slope of the indifference curve at a given point. It changes as we move along the IC — normally diminishing as $x$ increases.

$$MRS_{xy} = \frac{MU_x}{MU_y} = \frac{\partial u/\partial x}{\partial u/\partial y}$$

Along an indifference curve, $du = 0$:

> **Let's work through this:**
> Starting from total differential of $u(x,y)$ along an indifference curve:
> 1. $du = \frac{\partial u}{\partial x} dx + \frac{\partial u}{\partial y} dy$
> 2. Set $du = 0$ (by definition of moving along an IC): $\frac{\partial u}{\partial x} dx + \frac{\partial u}{\partial y} dy = 0$
> 3. Solve for $\frac{dy}{dx}$: $\frac{dy}{dx} = -\frac{\partial u/\partial x}{\partial u/\partial y} = -MRS$
>
> **Here's what's really going on:** The slope of the indifference curve equals the **negative** of the MRS. The negative sign reflects the tradeoff: to get more $x$ (increase $dx$), you must sacrifice some $y$ ($dy$ negative).

$$du = \frac{\partial u}{\partial x} dx + \frac{\partial u}{\partial y} dy = 0 \;\Rightarrow\; \frac{dy}{dx} = -\frac{\partial u/\partial x}{\partial u/\partial y} = -MRS$$

**Step 2 -- Quasiconcavity condition (bordered Hessian):**

For a function of two variables, the $(3 \times 3)$ bordered Hessian is:

> **Let's derive this together:**
> Starting from the second-order condition for quasiconcavity of a two-variable function:
> 1. The **bordered Hessian** $\overline{H}$ augments the regular Hessian matrix of second derivatives with a border of first derivatives (the "bordered" refers to the first row/column of zeros and first partials)
> 2. The $(3 \times 3)$ matrix is constructed as:
>    - Top-left: $0$
>    - First row/column (rest): $u_x, u_y$ (the first partials)
>    - Lower-right $(2 \times 2)$ block: the Hessian $\begin{bmatrix} u_{xx} & u_{xy} \\ u_{yx} & u_{yy} \end{bmatrix}$
> 3. For quasiconcavity, the principal minors must alternate in sign: $|\overline{H}_2| \ge 0$
>
> **Here's what's really going on:** The bordered Hessian determinant test checks whether the indifference curves are convex — it encodes the curvature of the utility function's level sets, which is what matters for well-behaved preferences.

$$
\overline{H} = \begin{vmatrix}
0 & u_x & u_y \\
u_x & u_{xx} & u_{xy} \\
u_y & u_{yx} & u_{yy}
\end{vmatrix}

$$

For quasiconcavity, the principal minors must alternate in sign: $|\overline{H}_2| \ge 0$. This simplifies to:

> **Here's the derivation:**
> Starting from the $(3 \times 3)$ bordered Hessian determinant:
> 1. Expand $|\overline{H}| = 0 \cdot (u_{xx}u_{yy} - u_{xy}^2) - u_x(u_x u_{yy} - u_y u_{xy}) + u_y(u_x u_{yx} - u_y u_{xx})$
> 2. Simplify using $u_{xy} = u_{yx}$ (Young's theorem — symmetry of cross-partials)
> 3. Result: $2 u_x u_y u_{xy} - u_x^2 u_{yy} - u_y^2 u_{xx}$
> 4. Quasiconcavity requires this expression $\ge 0$
>
> **Here's what's really going on:** This inequality is the mathematical condition for indifference curves to be convex. When it holds strictly ($> 0$), the utility function is **strictly** quasiconcave and ICs are strictly bowed inward.

$$2 u_x u_y u_{xy} - u_x^2 u_{yy} - u_y^2 u_{xx} \ge 0$$

**Step 3 -- $dMRS/dx$ derivation:**

> **Let's walk through this:**
> Simple restatement of the MRS definition in partial derivative notation:
> 1. $MRS_{xy} = \frac{MU_x}{MU_y} = \frac{\partial u/\partial x}{\partial u/\partial y} = \frac{u_x}{u_y}$
>
> **Here's what's really going on:** This ratio is the fundamental object in consumer theory — it compares the marginal contribution of each good to utility. At an interior optimum, it equals the price ratio $p_x/p_y$.

$$MRS = \frac{u_x}{u_y}$$

Differentiate $MRS$ with respect to $x$ along an indifference curve (total derivative):

> **Here's the derivation:**
> Starting from $MRS = u_x/u_y$, differentiate with respect to $x$ along an indifference curve:
> 1. Apply the quotient rule: $\frac{d(u_x/u_y)}{dx} = \frac{u_y \cdot \frac{d(u_x)}{dx} - u_x \cdot \frac{d(u_y)}{dx}}{u_y^2}$
> 2. Use the chain rule: $\frac{d(u_x)}{dx} = u_{xx} + u_{xy} y'(x)$ and $\frac{d(u_y)}{dx} = u_{yx} + u_{yy} y'(x)$
> 3. Substitute $y'(x) = dy/dx = -u_x/u_y$ (from the IC slope condition above)
> 4. This yields: $\frac{dMRS}{dx} = \frac{u_y[u_{xx} + u_{xy}(-u_x/u_y)] - u_x[u_{yx} + u_{yy}(-u_x/u_y)]}{u_y^2}$
>
> **Here's what's really going on:** This expression tracks how the willingness to trade changes as you consume more $x$ — the slope of the MRS function along the indifference curve.

$$\frac{dMRS}{dx} = \frac{d(u_x/u_y)}{dx} = \frac{u_y[u_{xx} + u_{xy} y'(x)] - u_x[u_{yx} + u_{yy} y'(x)]}{u_y^2}$$

Where $y'(x) = dy/dx = -u_x/u_y$ along the IC.

Substituting and simplifying:

> **Continuing the derivation:**
> Continuing from the previous expression, simplify algebraically:
> 1. Multiply numerator and denominator to clear fractions
> 2. Collect terms: $\frac{dMRS}{dx} = \frac{u_x^2 u_{yy} - 2 u_x u_y u_{xy} + u_y^2 u_{xx}}{u_y^3}$
> 3. Notice that $u_y^3 > 0$ (assuming $MU_y > 0$), so the sign depends entirely on the numerator
> 4. The numerator is exactly the **negative** of the quasiconcavity condition: $-(2 u_x u_y u_{xy} - u_x^2 u_{yy} - u_y^2 u_{xx})$
>
> **Here's what's really going on:** The sign of $dMRS/dx$ is opposite to the sign of the bordered Hessian determinant — connecting diminishing MRS directly to quasiconcavity.

$$\frac{dMRS}{dx} = \frac{u_x^2 u_{yy} - 2 u_x u_y u_{xy} + u_y^2 u_{xx}}{u_y^3}$$

Note this numerator equals $-(2 u_x u_y u_{xy} - u_x^2 u_{yy} - u_y^2 u_{xx})$.

**Step 4 -- Equivalence:**
- Quasiconcavity requires: $2 u_x u_y u_{xy} - u_x^2 u_{yy} - u_y^2 u_{xx} \ge 0$
- Equivalently: $u_x^2 u_{yy} - 2 u_x u_y u_{xy} + u_y^2 u_{xx} \le 0$
- This numerator is exactly the numerator of $dMRS/dx$ (up to the positive denominator $u_y^3 > 0$).

Hence:

> **Let's wrap up the derivation:**
> Combining the results above:
> 1. Quasiconcavity requires: $2 u_x u_y u_{xy} - u_x^2 u_{yy} - u_y^2 u_{xx} \ge 0$
> 2. $dMRS/dx$ numerator is: $u_x^2 u_{yy} - 2 u_x u_y u_{xy} + u_y^2 u_{xx} \le 0$ (the negative of the QC condition)
> 3. Since $u_y^3 > 0$, sign$(dMRS/dx) =$ sign(numerator)
> 4. Therefore: $\frac{dMRS}{dx} < 0 \iff$ quasiconcavity holds
>
> **Here's what's really going on:** **Diminishing MRS** (MRS falls as $x$ increases) is economically equivalent to **convex preferences** (quasiconcave utility). This is the bridge between the mathematical condition and the economic intuition.

$$\frac{dMRS}{dx} < 0 \iff \text{numerator} < 0 \iff \text{quasiconcavity holds}$$

**Interpretation:** Diminishing MRS means as $x$ increases (substituting for $y$), you require increasingly less $y$ to give up for an additional unit of $x$ -- i.e., the IC flattens as we move right. This is the graphical manifestation of convex preferences.

---

> **Solved Question (Q10, ~3 marks): Does $U = X + \log(Y)$ have convex indifference curves? Provide proof.**

**Answer:**

**Step 1: Compute MRS.**
- $u(x,y) = x + \ln y$
- $MU_x = 1$, $MU_y = 1/y$
- $MRS_{xy} = 1 / (1/y) = y$

**Step 2: Check if MRS is diminishing in $x$ along an IC.**

Along an indifference curve, $du = 0$:

> **Let's work through this:**
> Starting from $u(x,y) = x + \ln y$:
> 1. Total differential: $du = \frac{\partial u}{\partial x} dx + \frac{\partial u}{\partial y} dy = dx + \frac{1}{y} dy$
> 2. Along an indifference curve, $du = 0$: $dx + \frac{1}{y} dy = 0$
> 3. Solve for the slope: $\frac{dy}{dx} = -y$
>
> **Here's what's really going on:** The slope of the indifference curve for this quasilinear utility function depends only on $y$ — not on $x$. As $y$ gets smaller (moving right along the IC), the curve flattens.

$$dx + (1/y) dy = 0 \Rightarrow \frac{dy}{dx} = -y$$

Now differentiate $MRS = y$ with respect to $x$ along the IC:

> **Let's continue the derivation:**
> Starting from $MRS = y$ (computed from $MU_x=1$, $MU_y=1/y$):
> 1. Differentiate MRS with respect to $x$ along the IC: $\frac{dMRS}{dx} = \frac{dy}{dx}$
> 2. Substitute $\frac{dy}{dx} = -y$ (from the IC slope above)
> 3. Result: $\frac{dMRS}{dx} = -y < 0$ (for any positive $y$)
>
> **Here's what's really going on:** Diminishing MRS confirmed — the MRS falls as $x$ increases. Since MRS $= y$, and $y$ falls as we move along the IC, the MRS falls proportionally. Indifference curves are convex.

$$\frac{dMRS}{dx} = \frac{dy}{dx} = -y < 0 \quad (\text{for any positive } y)$$

**Conclusion:** Yes, MRS declines as $x$ increases. Therefore indifference curves are convex (strictly diminishing MRS).

**Alternative verification via bordered Hessian:**
- $u_x = 1$, $u_y = 1/y$, $u_{xx} = 0$, $u_{xy} = 0$, $u_{yy} = -1/y^2$
- Bordered Hessian determinant: $2u_x u_y u_{xy} - u_x^2 u_{yy} - u_y^2 u_{xx} = 0 + 1/y^2 + 0 = 1/y^2 > 0$
- Satisfies quasiconcavity condition, confirming convex ICs.

---

### 1.3 Utility Maximization Problem (UMP)

**Why this matters for your exam:** The UMP is THE problem of consumer theory — maximize utility subject to a budget constraint. If you can solve this, you can derive demand functions, and that's half the exam right there.

Your primal problem as a consumer:

> **Let's set this up step by step:**
> Starting from your objective:
> 1. **Objective:** Maximize utility $u(x)$ over all consumption bundles $x \in \mathbb{R}^N_+$
> 2. **Constraint:** Total spending $p \cdot x = \sum_{k=1}^N p_k x_k$ cannot exceed wealth $w$
> 3. Combine into the constrained optimization: $\max_{x \ge 0} u(x)$ s.t. $p \cdot x \le w$
>
> **Here's what's really going on:** The Utility Maximization Problem (UMP) is your primal problem — choose the most-preferred affordable bundle. The solution yields Walrasian (Marshallian) demand $x(p,w)$ and indirect utility $v(p,w)$.

$$\max_{x \ge 0} u(x) \quad \text{subject to} \quad p \cdot x \le w$$

**Solution:** Walrasian demand $x(p,w)$ and indirect utility $v(p,w) = u(x(p,w))$.

**Sufficient conditions for interior solution:** (1) $u$ quasiconcave, (2) $u$ satisfies LNS, (3) $\nabla u \neq 0$.

---

> **Solved Question (1B-Q1, 7 marks): Cobb-Douglas: Derive Walrasian demand, examine properties.**

Consider $u(x_1, x_2) = x_1^\alpha x_2^\beta$, with $\alpha, \beta > 0$. Budget: $p_1 x_1 + p_2 x_2 = w$.

**Derivation via tangency condition:**

Step 1: Lagrangian: $\mathcal{L} = x_1^\alpha x_2^\beta + \lambda(w - p_1 x_1 - p_2 x_2)$

Step 2: FOCs:

> **Let's work through this step by step:**
> Starting from the Cobb-Douglas UMP with $u(x_1,x_2) = x_1^\alpha x_2^\beta$:
> 1. Write the Lagrangian: $\mathcal{L} = x_1^\alpha x_2^\beta + \lambda(w - p_1 x_1 - p_2 x_2)$
> 2. Take partial derivatives w.r.t. $x_1$, $x_2$, and $\lambda$:
>    - $\partial\mathcal{L}/\partial x_1 = \alpha x_1^{\alpha-1} x_2^\beta - \lambda p_1 = 0$
>    - $\partial\mathcal{L}/\partial x_2 = \beta x_1^\alpha x_2^{\beta-1} - \lambda p_2 = 0$
>    - $\partial\mathcal{L}/\partial\lambda = w - p_1 x_1 - p_2 x_2 = 0$
> 3. These are the **first-order necessary conditions** (FOCs) for an interior optimum
>
> **Here's what's really going on:** The first two FOCs say the marginal utility of each good, scaled by its price, equals the Lagrange multiplier $\lambda$ (the "shadow value" of wealth). Hence $\frac{MU_1}{p_1} = \frac{MU_2}{p_2} = \lambda$ — marginal utility per dollar is equalized across goods.

$$
\begin{aligned}
\frac{\partial \mathcal{L}}{\partial x_1} &= \alpha x_1^{\alpha-1} x_2^\beta - \lambda p_1 = 0 \\[4pt]
\frac{\partial \mathcal{L}}{\partial x_2} &= \beta x_1^\alpha x_2^{\beta-1} - \lambda p_2 = 0 \\[4pt]
\frac{\partial \mathcal{L}}{\partial \lambda} &= w - p_1 x_1 - p_2 x_2 = 0
\end{aligned}

$$

Step 3: From (1) and (2):
$\frac{\alpha x_2}{\beta x_1} = \frac{p_1}{p_2} \;\Rightarrow\; x_2 = \frac{\beta}{\alpha} \cdot \frac{p_1}{p_2} x_1$

Step 4: Substitute into budget:

> **Let's solve the FOCs:**
> Solving the FOCs from the CD Lagrangian:
> 1. From FOC 1 and 2, take the ratio: $\frac{\alpha x_1^{\alpha-1} x_2^\beta}{\beta x_1^\alpha x_2^{\beta-1}} = \frac{p_1}{p_2}$
> 2. Simplify: $\frac{\alpha x_2}{\beta x_1} = \frac{p_1}{p_2} \;\Rightarrow\; x_2 = \frac{\beta}{\alpha} \cdot \frac{p_1}{p_2} x_1$ (the **tangency condition**)
> 3. Substitute into the budget constraint: $p_1 x_1 + p_2\left(\frac{\beta}{\alpha}\cdot\frac{p_1}{p_2} x_1\right) = w$
> 4. Solve: $p_1 x_1(1 + \frac{\beta}{\alpha}) = w \;\Rightarrow\; x_1 = \frac{\alpha}{\alpha+\beta} \cdot \frac{w}{p_1}$
> 5. Similarly: $x_2 = \frac{\beta}{\alpha+\beta} \cdot \frac{w}{p_2}$
>
> **Here's what's really going on:** Each Marshallian demand is proportional to wealth $w$ and inversely proportional to its own price. The expenditure share of good $k$ is $\alpha_k/(\alpha+\beta)$ — **constant** and independent of prices and wealth, a unique CD property.

$$x_1(p_1, p_2, w) = \frac{\alpha}{\alpha+\beta} \cdot \frac{w}{p_1}, \qquad x_2(p_1, p_2, w) = \frac{\beta}{\alpha+\beta} \cdot \frac{w}{p_2}$$

**Properties:**

| Property | Verification |
|:---|---:|
| **HD(0)** | $x_1(tp, tw) = \frac{\alpha}{\alpha+\beta} \cdot \frac{tw}{tp_1} = x_1(p,w)$ |
| **Walras' Law** | $p_1 x_1 + p_2 x_2 = \frac{\alpha w}{\alpha+\beta} + \frac{\beta w}{\alpha+\beta} = w$ |
| **Own-price effect** | $\frac{\partial x_1}{\partial p_1} = -\frac{\alpha}{\alpha+\beta} \cdot \frac{w}{p_1^2} < 0$ |
| **Cross-price effect** | $\frac{\partial x_1}{\partial p_2} = 0$ (special to CD -- additive separability) |
| **Income effect** | $\frac{\partial x_1}{\partial w} = \frac{\alpha}{\alpha+\beta} \cdot \frac{1}{p_1} > 0$ (normal good) |
| **Expenditure shares** | $s_1 = \frac{p_1 x_1}{w} = \frac{\alpha}{\alpha+\beta}$; **CONSTANT** |

> **Exam Tip:** The constant expenditure share property is unique to Cobb-Douglas. When $\alpha + \beta = 1$ (common normalization), shares are $\alpha$ and $\beta$.

---

#### Indirect Utility Function & Roy's Identity

**Why this matters for your exam:** Indirect utility tells you your maximum achievable happiness given prices and income. Roy's identity lets you reverse-engineer demand from indirect utility — a powerful shortcut on exams.

> **Solved Question (1B-Q2, 7 marks): Cobb-Douglas: Get indirect utility, explain properties, verify Roy's identity.**

**Step 1: Indirect utility function.**

Substitute Walrasian demands into the utility function:

> **Let's derive this together:**
> Starting from the Marshallian demands for CD utility:
> 1. Substitute $x_1(p,w)$ and $x_2(p,w)$ into the utility function:
> 2. $v(p,w) = u(x_1(p,w), x_2(p,w)) = \left[\frac{\alpha w}{(\alpha+\beta)p_1}\right]^\alpha \cdot \left[\frac{\beta w}{(\alpha+\beta)p_2}\right]^\beta$
> 3. Factor out terms: $= \frac{\alpha^\alpha \beta^\beta}{(\alpha+\beta)^{\alpha+\beta}} \cdot w^{\alpha+\beta} \cdot p_1^{-\alpha} \cdot p_2^{-\beta}$
>
> **Here's what's really going on:** Indirect utility tells you the **maximum achievable utility** given prices and wealth. It is decreasing in prices (higher prices = less affordable utility) and increasing in wealth. It is HD(0) in $(p,w)$ — doubling both prices and wealth leaves utility unchanged.

$$
\begin{aligned}
v(p,w) &= u(x_1(p,w), x_2(p,w)) \\[4pt]
&= \left[\frac{\alpha w}{(\alpha+\beta)p_1}\right]^\alpha \cdot \left[\frac{\beta w}{(\alpha+\beta)p_2}\right]^\beta \\[4pt]
&= \frac{\alpha^\alpha \beta^\beta}{(\alpha+\beta)^{\alpha+\beta}} \cdot w^{\alpha+\beta} \cdot p_1^{-\alpha} \cdot p_2^{-\beta}
\end{aligned}

$$

With normalization $\alpha + \beta = 1$:

> **Let's continue:**
> Normalize $\alpha + \beta = 1$ (common in CD specifications):
> 1. From the general form, set $\alpha + \beta = 1$
> 2. $v(p,w) = \alpha^\alpha (1-\alpha)^{1-\alpha} \cdot w \cdot p_1^{-\alpha} \cdot p_2^{-(1-\alpha)}$
>
> **Here's what's really going on:** With constant returns to scale ($\alpha+\beta=1$), indirect utility is **linear in wealth** $w$ — a 10% increase in wealth raises max utility by exactly 10%. The constant $\alpha^\alpha(1-\alpha)^{1-\alpha}$ bundles all preference parameters.

$$v(p,w) = w \cdot p_1^{-\alpha} \cdot p_2^{-(1-\alpha)} \cdot \alpha^\alpha (1-\alpha)^{1-\alpha}$$

**Properties of indirect utility function:**

| Property | Verification |
|:---|---:|
| **HD(0) in $(p,w)$** | $v(tp, tw) = t^{\alpha+\beta-\alpha-\beta} v(p,w) = v(p,w)$ |
| **Strictly increasing in $w$** | $\partial v/\partial w = (\alpha+\beta) \cdot v/w > 0$ |
| **Non-increasing in $p_k$** | $\partial v/\partial p_1 = -\alpha \cdot v/p_1 < 0$ |
| **Quasiconvex in $(p,w)$** | The set $\{(p,w): v(p,w) \le \bar{u}\}$ is convex |

**Step 2: Verify Roy's identity.**

Roy's identity: $\displaystyle x_k(p,w) = -\frac{\partial v/\partial p_k}{\partial v/\partial w}$

For good 1: $\partial v/\partial p_1 = -\alpha v/p_1$, $\partial v/\partial w = (\alpha+\beta) v/w$

> **Let's verify Roy's identity:**
> Verifying Roy's identity $x_k = -\frac{\partial v/\partial p_k}{\partial v/\partial w}$ for the CD case:
> 1. From $v(p,w) = \frac{\alpha^\alpha \beta^\beta}{(\alpha+\beta)^{\alpha+\beta}} w^{\alpha+\beta} p_1^{-\alpha} p_2^{-\beta}$, compute:
>    - $\partial v/\partial p_1 = -\alpha \cdot v / p_1$ (power rule on $p_1^{-\alpha}$)
>    - $\partial v/\partial w = (\alpha+\beta) \cdot v / w$ (power rule on $w^{\alpha+\beta}$)
> 2. Form the negative ratio:
>    $-\frac{\partial v/\partial p_1}{\partial v/\partial w} = -\frac{-\alpha v/p_1}{(\alpha+\beta)v/w} = \frac{\alpha w}{(\alpha+\beta)p_1}$
> 3. This equals $x_1(p,w)$ — Roy's identity is verified ✓
>
> **Here's what's really going on:** Roy's identity recovers Walrasian demand from indirect utility via simple partial derivatives — a powerful duality result. The negative sign ensures demands are positive (since $\partial v/\partial p_k < 0$ and $\partial v/\partial w > 0$).

$$-\frac{\partial v/\partial p_1}{\partial v/\partial w} = -\frac{-\alpha v/p_1}{(\alpha+\beta)v/w} = \frac{\alpha w}{(\alpha+\beta)p_1} = x_1(p,w) \quad \checkmark$$

Similarly for good 2:
$-\frac{\partial v/\partial p_2}{\partial v/\partial w} = \frac{\beta w}{(\alpha+\beta)p_2} = x_2(p,w) \quad \checkmark$

**Roy's Identity holds.** This confirms that the indirect utility function correctly represents the underlying preferences.

> **Exam Tip:** Roy's identity is free marks if you can compute derivatives cleanly. The most common error: forgetting the minus sign. Memorize: $x_k = -(\partial v/\partial p_k)/(\partial v/\partial w)$.

---

### 1.4 Expenditure Minimization Problem (EMP) & Duality

**Why this matters for your exam:** The EMP is the UMP's mirror image — instead of maximizing utility given a budget, you minimize spending to reach a target utility. Together they form the duality framework that ties all of consumer theory together.

> **Solved Question (1B-Q3, 6 marks): Cobb-Douglas: Solve expenditure minimization, examine compensated demand.**

**EMP setup:** Minimize $p_1 x_1 + p_2 x_2$ subject to $u(x_1, x_2) = x_1^\alpha x_2^\beta \ge \bar{u}$.

**Step 1: Lagrangian:** $\mathcal{L} = p_1 x_1 + p_2 x_2 + \mu(\bar{u} - x_1^\alpha x_2^\beta)$

**Step 2: FOCs:**

> **Let's walk through the EMP step by step:**
> Starting from the Expenditure Minimization Problem (EMP) with CD utility:
> 1. Set up Lagrangian: $\mathcal{L} = p_1 x_1 + p_2 x_2 + \mu(\bar{u} - x_1^\alpha x_2^\beta)$
>    - Note: we minimize expenditure, so the objective is $p_1 x_1 + p_2 x_2$
>    - The constraint is $u(x) \ge \bar{u}$, rewritten as $\bar{u} - u(x) \le 0$
> 2. FOCs:
>    - $\partial\mathcal{L}/\partial x_1 = p_1 - \mu \alpha x_1^{\alpha-1} x_2^\beta = 0$
>    - $\partial\mathcal{L}/\partial x_2 = p_2 - \mu \beta x_1^\alpha x_2^{\beta-1} = 0$
>    - $\partial\mathcal{L}/\partial\mu = \bar{u} - x_1^\alpha x_2^\beta = 0$
>
> **Here's what's really going on:** The EMP Lagrangian mirrors the UMP but with roles reversed — expenditure is minimized subject to a minimum utility constraint. The multiplier $\mu$ now represents the marginal cost of tightening the utility constraint.

$$
\begin{aligned}
p_1 - \mu \alpha x_1^{\alpha-1} x_2^\beta &= 0 \\
p_2 - \mu \beta x_1^\alpha x_2^{\beta-1} &= 0 \\
\bar{u} - x_1^\alpha x_2^\beta &= 0
\end{aligned}

$$

**Step 3: Tangency condition:**
$\frac{p_1}{p_2} = \frac{\alpha x_2}{\beta x_1} \;\Rightarrow\; x_2 = \frac{\beta}{\alpha} \cdot \frac{p_1}{p_2} x_1$ (Same ratio as UMP!)

**Hicksian (Compensated) Demand Functions:**

> **Let's solve for Hicksian demands:**
> Solving the EMP FOCs for $h_1(p,\bar{u})$:
> 1. From the first two FOCs, take the ratio: $\frac{p_1}{p_2} = \frac{\alpha x_2}{\beta x_1}$ (same tangency condition as UMP!)
> 2. Solve: $x_2 = \frac{\beta}{\alpha} \cdot \frac{p_1}{p_2} x_1$
> 3. Substitute into the utility constraint:
>    $x_1^\alpha \left(\frac{\beta}{\alpha} \cdot \frac{p_1}{p_2} x_1\right)^\beta = \bar{u}$
> 4. Solve for $x_1$:
>    $x_1 = \bar{u}^{1/(\alpha+\beta)} \cdot \left(\frac{\alpha}{\beta}\right)^{\beta/(\alpha+\beta)} \cdot \left(\frac{p_2}{p_1}\right)^{\beta/(\alpha+\beta)} \equiv h_1(p,\bar{u})$
>
> **Here's what's really going on:** Hicksian (compensated) demand holds utility constant at $\bar{u}$ while minimizing expenditure. Unlike Marshallian demand, it depends on utility level $\bar{u}$ rather than wealth $w$, and it satisfies the compensated law of demand ($\partial h_k/\partial p_k < 0$).

$$h_1(p, \bar{u}) = \bar{u}^{1/(\alpha+\beta)} \cdot \left(\frac{\alpha}{\beta}\right)^{\beta/(\alpha+\beta)} \cdot \left(\frac{p_2}{p_1}\right)^{\beta/(\alpha+\beta)}$$

> **By symmetry:**
> 1. Using the same tangency condition but solving for $x_2$: $x_2 = \frac{\beta}{\alpha} \cdot \frac{p_1}{p_2} x_1$
> 2. Substitute into $\bar{u} = x_1^\alpha x_2^\beta$ and solve for $x_2$ directly
> 3. Alternatively, swap roles:
>    $h_2(p,\bar{u}) = \bar{u}^{1/(\alpha+\beta)} \cdot \left(\frac{\beta}{\alpha}\right)^{\alpha/(\alpha+\beta)} \cdot \left(\frac{p_1}{p_2}\right)^{\alpha/(\alpha+\beta)}$
>
> **Here's what's really going on:** The price ratios appear symmetrically but with swapped exponents — reflecting the relative importance ($\alpha$ vs $\beta$) of each good in the utility function.

$$h_2(p, \bar{u}) = \bar{u}^{1/(\alpha+\beta)} \cdot \left(\frac{\beta}{\alpha}\right)^{\alpha/(\alpha+\beta)} \cdot \left(\frac{p_1}{p_2}\right)^{\alpha/(\alpha+\beta)}$$

With $\alpha+\beta=1$:
$h_1(p, \bar{u}) = \bar{u} \cdot \left(\frac{\alpha}{\beta}\right)^\beta \cdot \left(\frac{p_2}{p_1}\right)^\beta$

**Expenditure function:**

> **Let's derive the expenditure function:**
> Starting from the Hicksian demands:
> 1. The expenditure function is defined as $e(p,\bar{u}) = p_1 h_1(p,\bar{u}) + p_2 h_2(p,\bar{u})$
> 2. Substitute $h_1$ and $h_2$:
>    $e = p_1 \cdot \bar{u}^{1/(\alpha+\beta)} (\frac{\alpha}{\beta})^{\beta/(\alpha+\beta)} (\frac{p_2}{p_1})^{\beta/(\alpha+\beta)} + p_2 \cdot \bar{u}^{1/(\alpha+\beta)} (\frac{\beta}{\alpha})^{\alpha/(\alpha+\beta)} (\frac{p_1}{p_2})^{\alpha/(\alpha+\beta)}$
> 3. Factor $\bar{u}^{1/(\alpha+\beta)}$ and combine terms:
>    $e(p,\bar{u}) = \bar{u}^{1/(\alpha+\beta)} \cdot (\alpha+\beta) \cdot \left(\frac{p_1}{\alpha}\right)^{\alpha/(\alpha+\beta)} \left(\frac{p_2}{\beta}\right)^{\beta/(\alpha+\beta)}$
>
> **Here's what's really going on:** The expenditure function gives the **minimum** expenditure needed to achieve utility $\bar{u}$ at prices $p$. It is HD(1) in $p$ (doubling prices doubles required expenditure) and strictly increasing in $\bar{u}$.

$$
\begin{aligned}
e(p, \bar{u}) &= p_1 h_1 + p_2 h_2 \\[4pt]
&= \bar{u}^{1/(\alpha+\beta)} \cdot (\alpha+\beta) \cdot \left(\frac{p_1}{\alpha}\right)^{\alpha/(\alpha+\beta)}
\left(\frac{p_2}{\beta}\right)^{\beta/(\alpha+\beta)}
\end{aligned}

$$

With $\alpha+\beta=1$: $e(p, \bar{u}) = \bar{u} \cdot \left(\frac{p_1}{\alpha}\right)^\alpha \left(\frac{p_2}{\beta}\right)^\beta$

**Properties of Hicksian demand:**

| Property | Verification |
|:---|---:|
| **HD(0) in $p$** | $h(tp, u) = u \cdot (\alpha/\beta)^\beta \cdot (tp_2/tp_1)^\beta = h(p,u)$ |
| **Compensated law of demand** | $\partial h_1/\partial p_1 < 0$ |
| **No excess utility** | $u(h_1, h_2) = \bar{u}$ (by construction) |
| **Duality check** | $e(p, v(p,w)) = w$ and $v(p, e(p,\bar{u})) = \bar{u}$ |

#### Shephard's Lemma

**Why this matters for your exam:** Shephard's lemma is the EMP twin of Roy's identity — if you have the expenditure function, you can get Hicksian demands by simple differentiation. Free marks if you remember it.

If $e(p, u)$ is differentiable in $p$, Hicksian demand is its gradient:

> **Let's derive this together:**
> Starting from the envelope theorem applied to the EMP:
> 1. By the envelope theorem, the derivative of the minimized expenditure function w.r.t. $p_k$ equals the **partial derivative of the Lagrangian** w.r.t. $p_k$ at the optimum
> 2. The EMP Lagrangian is $\mathcal{L} = p \cdot x + \mu(\bar{u} - u(x))$
> 3. At the optimum, $\partial\mathcal{L}/\partial p_k = x_k^* = h_k(p,u)$
> 4. Hence: $h_k(p,u) = \frac{\partial e(p,u)}{\partial p_k}$ for $k = 1,\ldots,N$
>
> **Here's what's really going on:** Shephard's lemma is the EMP counterpart of Roy's identity — it recovers Hicksian demand from the expenditure function by simple differentiation. If you know $e(p,u)$, you get all compensated demands for free.

$$h_k(p, u) = \frac{\partial e(p, u)}{\partial p_k} \quad \text{for } k = 1, \ldots, N$$

**Verification for CD:** $\partial e/\partial p_1 = h_1$ (derivative of expenditure function with respect to $p_1$ yields Hicksian demand for good 1).

> **Exam Tip:** Shephard's lemma is the EMP analog of Roy's identity. Together they provide a complete duality framework: from $v(p,w)$ recover Walrasian demand (Roy); from $e(p,u)$ recover Hicksian demand (Shephard).

#### Duality Framework

**Why this matters for your exam:** Duality is the big picture — the UMP and EMP are two sides of the same coin. Once you understand the relationships, you can solve any consumer problem from whichever direction is easiest.

| UMP | EMP |
|:---|---:|
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
|:---|---:|
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
|:---|---:|
| **Engel curves are linear through origin** | $\frac{\partial x_k}{\partial w} \cdot \frac{w}{x_k} = 1$ (income elasticity = 1) |
| **Expenditure shares are constant** | $s_k = p_k x_k(p,w)/w$ independent of $w$ |
| **Income expansion paths are rays** | Optimal ratios $x_1/x_2$ constant as $w$ varies |
| **MRS independent of utility level** | MRS depends only on ratio $x_1/x_2$ |

**Examples:** Cobb-Douglas, perfect substitutes, perfect complements, CES -- all homothetic.

**Non-examples:** Quasilinear $u = v(x) + y$; Stone-Geary (with subsistence).

**Here's the key — and it's beautiful:** HD(0) of Walrasian demand is a *property* of any solution to UMP (no preference assumptions needed). Homotheticity is an *assumption* about preferences.

---

### 1.5 The Choice-Based Approach & WARP

**Why this matters for your exam:** So far we've assumed preferences are the primitive (unobservable). The choice-based approach starts from what you actually see people buy — observable choices — and works backward. It's the foundation of revealed preference theory and empirical demand analysis.

The preference-based approach studied above uses unobservable preferences as the primitive. Munoz-Garcia (§1.13-1.14, pp.59-63) presents an **alternative approach** that uses **actual choices** as the primitive -- the **choice-based approach**.

#### Choice Structure

A **choice structure** $(\mathcal{B}, c(\cdot))$ contains:

1. **$\mathcal{B}$** -- a family of nonempty subsets of $X$ (budget sets). For example: the set of affordable bundles given your prices and wealth.
2. **$c(\cdot)$** -- a **choice rule** that selects, for each budget set $B \in \mathcal{B}$, a subset $c(B) \subseteq B$ of chosen elements.

> **Example (Munoz-Garcia, Example 1.11):** Let $X = \{x, y, z\}$, $B_1 = \{x, y\}$, $B_2 = \{x, y, z\}$.
> - **Choice rule 1:** $c_1(\{x, y\}) = \{x\}$, $c_1(\{x, y, z\}) = \{x\}$ -- consistent.
> - **Choice rule 2:** $c_2(\{x, y\}) = \{x\}$, $c_2(\{x, y, z\}) = \{y\}$ -- inconsistent (switches to $y$ when $z$ appears despite $x$ still available).

#### The Weak Axiom of Revealed Preference (WARP)

Paralleling the rationality assumption in the preference-based approach, the choice-based approach imposes **consistency** through WARP.

> **WARP Definition (Munoz-Garcia, §1.14):** Consider a budget set $B \in \mathcal{B}$ with $x, y \in B$, where $x \in c(B)$. The choice structure $(\mathcal{B}, c(\cdot))$ satisfies WARP if, for any other budget set $B' \in \mathcal{B}$ where $x, y \in B'$ and $y \in c(B')$, we also have $x \in c(B')$.

**Here's what's really going on:** If $x$ is chosen when $y$ is available in one budget set, then $y$ cannot be chosen without $x$ in any other budget set where both are available. In short: **if $x$ beats $y$ in one context, $y$ cannot beat $x$ in another context** without $x$ also being chosen.

**Legal choices under WARP** (Example 1.12, Munoz-Garcia): When $c(\{x, y\}) = \{x\}$ and the budget expands to $\{x, y, z\}$, you can choose:
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
|:---|---|---:|
| **Primitive** | Preferences $\succeq$ (unobservable) | Choices $c(\cdot)$ (observable) |
| **Rationality** | Completeness + Transitivity | WARP |
| **Representation** | Utility function $u: X \to \mathbb{R}$ | Choice structure $(\mathcal{B}, c(\cdot))$ |
| **Advantage** | More tractable for large $X$ | Based on observables |
| **Equivalence** | Rational $\succeq$ ⟹ WARP holds | WARP ⟹ Rational $\succeq$ (only if $|B| \le 3$) |

> **Exam Tip:** The key point: **rational preferences imply WARP** (always), but **WARP does NOT imply rational preferences** (unless the budget sets are small). Munoz-Garcia notes that the converse only holds when budget sets contain three or fewer elements (Mas-Colell et al., 1995; Arrow, 1959).

---

> **Reference — Munoz-Garcia (§1.1, §1.13-1.14, Appendix, pp.2-3, 59-69) — Choice-Based vs. Preference-Based Approaches:**
>
> Munoz-Garcia highlights the fundamental trade-off: The **preference-based approach** is based on **unobservables** (the individual's preferences) -- we imagine asking the consumer to compare bundles, but we never directly observe the comparison process. In contrast, the **choice-based approach** is based on **observables** (actual choices) -- we see what the consumer buys and infer consistency from those choices.
>
> The preference-based approach is **more tractable** when the set of alternatives $X$ contains many elements (which is usually the case in individual decision-making problems). This is why most of consumer theory uses the preference-based approach.
>
> The chapter then explores the **relationship** between the two approaches: under what conditions do rational preferences imply consistent choices (WARP), and vice versa. The appendix proves that **every rational preference relation satisfies WARP**, but the converse holds only under restrictive conditions.

---

### 1.6 Behavioral Economics Findings

**Why this matters for your exam:** Standard theory assumes you're a perfectly rational calculating machine. Real people aren't. Behavioral economics documents the systematic ways you deviate from the textbook model — and examiners love asking you to "critically evaluate the rationality assumptions" by citing these findings.

Standard consumer theory assumes unbounded rationality, willpower, and selfishness. Munoz-Garcia (§1.12, pp.51-59) presents behavioral economics models that relax these assumptions, introducing findings from controlled experiments that challenge the standard framework.

#### Prospect Theory (Kahneman & Tversky, 1979)

Kahneman and Tversky's **prospect theory** (Munoz-Garcia, §5.9, pp.368-372) models choice under uncertainty with three key deviations from expected utility theory:

1. **Probability weighting:** You overweight low probabilities and underweight high probabilities via a weighting function $w(p_i)$:

> **Let's walk through this:**
> Starting from expected utility theory and modifying it for behavioral realism:
> 1. Standard expected utility: $EU = \sum p_i u(x_i)$ where $p_i$ are objective probabilities
> 2. Prospect theory replaces objective probabilities $p_i$ with **decision weights** $w(p_i)$
> 3. The weighting function $w(p)$ overweights small probabilities and underweights large ones
> 4. Result: $v(x,p) = \sum_{i=1}^n w(p_i) v(x_i)$
>
> **Here's what's really going on:** You don't treat probabilities linearly — you exaggerate small chances (lottery tickets, insurance) and discount near-certain events. This explains the Allais paradox and other violations of expected utility.

   $$v(x, p) = \sum_{i=1}^n w(p_i) v(x_i)$$
   A common weighting function (Tversky-Kahneman): $w(p) = p^\beta / [p^\beta + (1-p)^\beta]^{1/\beta}$, where $\beta \in [0,1]$.

2. **Reference-dependent value function:** Payoffs are evaluated relative to a **reference point** $x_0$, not as absolute levels:

> **Let's derive this together:**
> Starting from the idea that utility depends on a **reference point** $x_0$ (typically the status quo):
> 1. In the **gains domain** ($x_i \ge x_0$): $v(x_i) = (x_i)^\alpha$, where $\alpha \in (0,1]$ captures **diminishing sensitivity** — each additional unit of gain adds less value
> 2. In the **losses domain** ($x_i < x_0$): $v(x_i) = -\lambda(-x_i)^\alpha$, where $\lambda \ge 1$ captures **loss aversion** — losses hurt more than equivalent gains please
> 3. The function is:
>    - **Concave for gains** (risk-averse in gains)
>    - **Convex for losses** (risk-seeking in losses)
>    - **Steeper for losses** ($\lambda > 1$ makes the loss side steeper)
>
> **Here's what's really going on:** The $S$-shaped value function is the hallmark of prospect theory — it embeds both diminishing sensitivity and loss aversion, explaining the endowment effect and status quo bias.

   $$v(x_i) = \begin{cases} (x_i)^\alpha & \text{if } x_i \ge x_0 \text{ (gains)} \\ -\lambda(-x_i)^\alpha & \text{if } x_i < x_0 \text{ (losses)} \end{cases}$$
   where $\alpha \in (0,1]$ measures diminishing sensitivity, and $\lambda \ge 1$ measures **loss aversion**.

3. **Loss aversion:** The value function is steeper for losses than for gains -- a loss of \$X hurts more than a gain of \$X pleases. Estimated parameters: $\alpha \approx 0.88$, $\lambda \approx 2.25$ (Tversky & Kahneman, 1992).

> **Exam significance:** Prospect theory explains the **endowment effect** (sellers value goods more than buyers), **Allais' paradox** (probability weighting), and **status quo bias**. These are standard exam questions asking "give a behavioral economics critique of expected utility theory."

#### The Endowment Effect

Several experiments (Munoz-Garcia, §5.9.3, pp.371-372) show that your **willingness to pay (WTP)** for an object is systematically lower than your **willingness to accept (WTA)** to give it up -- a violation of standard theory where WTP = WTA.

**Prospect theory explanation:** With loss aversion $\lambda > 1$:
- **Willingness to pay:** $u(\text{MUG}) - u(\$x) \ge 0 \Rightarrow x \le u(\text{MUG})/\lambda$, so WTP $= u(\text{MUG})/\lambda$
- **Willingness to accept:** $u(\$x) - u(\text{MUG}) \ge 0 \Rightarrow x \ge \lambda u(\text{MUG})$, so WTA $= \lambda u(\text{MUG})$
- Since $\lambda > 1$, WTA $>$ WTP. If $\lambda = 1$ (no loss aversion), WTP = WTA. (Munoz-Garcia, §5.9.3)

#### Social Preferences (Fehr-Schmidt, 1999)

Standard models assume purely selfish preferences. Fehr and Schmidt (1999) incorporate **inequality aversion**:

> **Let's work through this step by step:**
> Starting from the standard self-regarding utility model and adding concern for others:
> 1. Base utility is own payoff $x_i$
> 2. Add a penalty for **disadvantageous inequality** (envy): $-\alpha_i \max\{x_j - x_i, 0\}$ — you dislike it when others earn more
> 3. Add a penalty for **advantageous inequality** (guilt): $-\beta_i \max\{x_i - x_j, 0\}$ — you also dislike earning more than others
> 4. The parameters satisfy $\alpha_i \ge \beta_i$ (envy is stronger than guilt) and $1 > \beta_i \ge 0$
>
> **Here's what's really going on:** Fehr-Schmidt preferences capture that people care about fairness, not just absolute payoff. If $\alpha_i = \beta_i = 0$, we're back to standard selfish preferences. This model explains cooperation in public goods games and rejection in ultimatum games.

$$u_i(x_i, x_j) = x_i - \alpha_i \max\{x_j - x_i, 0\} - \beta_i \max\{x_i - x_j, 0\}$$

- $\alpha_i$ = disutility from **envy** (when others earn more)
- $\beta_i$ = disutility from **guilt** (when you earn more)
- Assumption: $\alpha_i \ge \beta_i$ (envy is stronger than guilt), $1 > \beta_i \ge 0$

If $\alpha_i = \beta_i = 0$, preferences collapse to standard self-regarding utility. This specification can also capture concerns for **status** ($\beta_i < 0$) or **efficiency** ($\alpha_i < 0$). (Munoz-Garcia, §1.12.1, pp.52-55)

#### Hyperbolic & Quasi-Hyperbolic Discounting

Standard **exponential discounting** assumes constant discount rates: $(1/(1+r)^t)x$. However, experiments show **present bias** -- you discount the near future more steeply than the distant future.

**Hyperbolic discounting** (Munoz-Garcia, §1.12.2, pp.55-59): Discount factor $1/(1+rt)^{\gamma/\alpha}$, where the subjective discount rate decreases in $t$. This explains:
- **Time inconsistency:** Someone who prefers \$110 in 61 days over \$100 in 60 days may prefer \$100 today over \$110 tomorrow -- reversing their preference when the moment arrives.
- **Addiction and self-control:** Patience in the long run (joining a gym) but impatience in the short run (skipping the gym).
- Large credit card debts alongside retirement accounts.

**Quasi-hyperbolic (Laibson, 1997):** Discount factor $\{1, \beta\delta, \beta\delta^2, \ldots\}$ where $\beta \le 1$. When $\beta = 1$, collapses to exponential discounting.

---

> **Reference — Munoz-Garcia (§1.12, pp.51-59; §5.9, pp.368-372) — Why Behavioral Economics Matters for Theory:**
>
> Munoz-Garcia emphasizes that standard consumer theory is a **normative benchmark** -- it shows how consumers *would* behave if they satisfied the rationality axioms. Behavioral economics documents systematic deviations from this benchmark. Understanding both is essential for exams: when asked "critically evaluate the assumption of rational preferences," cite prospect theory (loss aversion), framing effects (intransitivity), and hyperbolic discounting (time inconsistency) as documented violations.
>
> The key exam connection: **Endowment effect** ⇒ violates the Coase theorem (initial allocation matters for final outcome). **Framing effects** ⇒ violate transitivity. **Social preferences** ⇒ modify the utility function to include others' payoffs.

---

### 1.7 Special Utility Functions & Corner Solutions

**Why this matters for your exam:** Most exam problems use one of four functional forms: Cobb-Douglas, Leontief (perfect complements), perfect substitutes, or quasilinear. Each has a specific solution method and specific properties you need to know cold.

#### Leontief (Perfect Complements) -- The Negroni Cocktail

> **Solved Question (1B-Q6, ~11 marks): $U = \min(G,V,C)$. Find Marshallian demand for Gin, Hicksian demand for Campari, expenditure function.**

Leontief (perfect complements) utility: $u(G, V, C) = \min(G, V, C)$

A Negroni cocktail requires G = V = C = $q$ (fixed 1:1:1 proportions).

**Marshallian (Walrasian) demand for Gin:**

Budget: $p_G G + p_V V + p_C C = w$. With $G = V = C = q$: $q(p_G + p_V + p_C) = w$

> **Let's derive this together:**
> Starting from $u(G,V,C) = \min(G,V,C)$ with budget $p_G G + p_V V + p_C C = w$:
> 1. At the optimum for perfect complements, you consume in fixed proportion: $G = V = C = q$
> 2. Substitute into the budget: $p_G q + p_V q + p_C q = w \;\Rightarrow\; q(p_G + p_V + p_C) = w$
> 3. Solve for $q$: $q = \frac{w}{p_G + p_V + p_C}$
> 4. Hence each Marshallian demand equals this common quantity: $G(p,w) = V(p,w) = C(p,w) = \frac{w}{p_G + p_V + p_C}$
>
> **Here's what's really going on:** With perfect complements, you buy goods in fixed proportions — all demands scale with total wealth and are decreasing in the sum of all prices. There is no substitution response to relative price changes.

$$G(p, w) = V(p, w) = C(p, w) = \frac{w}{p_G + p_V + p_C}$$

**Properties:** HD(0) holds; Walras' Law holds; own-price effect: $\partial G/\partial p_G = -w/(\sum p_k)^2 < 0$.

**Hicksian (compensated) demand for Campari:**

EMP: minimize $p_G G + p_V V + p_C C$ subject to $\min(G, V, C) \ge \bar{u}$.

Optimal: $G = V = C = q = \bar{u}$. So:

> **Let's work through this:**
> Starting from the EMP with $u = \min(G,V,C) \ge \bar{u}$:
> 1. To achieve utility $\bar{u}$, we need $\min(G,V,C) \ge \bar{u}$, so each good must be at least $\bar{u}$
> 2. Cost minimization implies we set each exactly at $\bar{u}$ (no excess)
> 3. Hence $h_C(p,u) = h_G(p,u) = h_V(p,u) = \bar{u}$
>
> **Here's what's really going on:** Hicksian (compensated) demands for Leontief utility are **independent of prices** — there is zero substitution possibility. Even if one good becomes much cheaper, you cannot substitute toward it because the goods must be consumed in fixed proportions.

$$h_C(p, u) = h_G(p, u) = h_V(p, u) = \bar{u}$$

The Hicksian demands are **independent of prices** (no substitution possible).

**Expenditure function:**

> **Let's derive the expenditure function:**
> Starting from the Hicksian demands for Leontief utility:
> 1. The expenditure function is $e(p,u) = p_G h_G + p_V h_V + p_C h_C$
> 2. Substitute $h_G = h_V = h_C = \bar{u}$: $e(p,u) = \bar{u}(p_G + p_V + p_C)$
> 3. This is simply the cost of buying $\bar{u}$ units of each good
>
> **Here's what's really going on:** The expenditure function is linear in prices (HD(1)) and linear in $\bar{u}$. Shephard's lemma gives: $\partial e/\partial p_C = \bar{u} = h_C$, confirming consistency. $e(p, v(p,w)) = w$ and $v(p, e(p,u)) = \bar{u}$ verify duality.

$$e(p, u) = \bar{u}(p_G + p_V + p_C)$$

**Properties:** HD(1) in $p$; strictly increasing in $u$; Shephard's lemma: $\partial e/\partial p_C = \bar{u} = h_C(p,u)$.

**Duality checks:**
- $e(p, v(p,w)) = \frac{w}{\sum p_k} \cdot \sum p_k = w \quad \checkmark$
- $v(p, e(p,u)) = \frac{\bar{u}\sum p_k}{\sum p_k} = \bar{u} \quad \checkmark$

| Function | Expression |
|:---|---:|
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

> **Let's derive this together:**
> Starting from $u(x,y) = x + \ln y$ with budget $p_x x + p_y y = I$:
> 1. Tangency condition from $MRS = p_x/p_y$: $y^* = p_x/p_y$ (MRS $= y$ from $MU_x=1$, $MU_y=1/y$)
> 2. Note $y^*$ is **independent of income** — the first key property of quasilinear utility
> 3. Substitute $y^*$ into the budget: $p_x x + p_y(p_x/p_y) = I \;\Rightarrow\; p_x x + p_x = I$
> 4. Solve: $x^* = \frac{I - p_x}{p_x} = \frac{I}{p_x} - 1$
>
> **Here's what's really going on:** For quasilinear utility, the nonlinear good ($y$) has **zero income effect** — its demand is purely a function of relative prices. All additional income is spent on the linear good ($x$). The corner condition $I \ge p_x$ ensures $x^* \ge 0$.

$$x^* = \frac{I - p_y y^*}{p_x} = \frac{I - p_x}{p_x} = \frac{I}{p_x} - 1$$

**Marshallian demands:**
- $x(p, I) = I/p_x - 1$ (provided $I \ge p_x$; else $x = 0$)
- $y(p, I) = p_x / p_y$

**Step 3: With limited $I$, which goods are consumed?**
- If $I < p_x$: $x^*$ would be negative, so you set $x = 0$ (corner solution) and spend all income on $y$.
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

**⚠️ Watch out:** Always check the sign of marginal utilities before solving. A negative MU changes everything!

**Step 1: Observe that the utility function is linear (perfect substitutes).**
- $MU_x = \partial u/\partial x = 1$
- $MU_y = \partial u/\partial y = -3$ (MARGINAL DISUTILITY of $y$ -- $y$ is a BAD)

Since $MU_y < 0$, you'd prefer $y = 0$.

**Step 2: Corner solution -- consume only the good with positive marginal utility.**

If $y = 0$: $x = I / p_x = 400 / 20 = 20$, Utility: $u(20, 0) = 20 - 3(0) = 20$

**Step 3: Verify no interior solution is optimal.**

> **Let's walk through this:**
> Starting from $u(x,y) = x - 3y$ (where $y$ is a "bad"):
> 1. Compute marginal utilities: $MU_x = \partial u/\partial x = 1$ (positive — good), $MU_y = \partial u/\partial y = -3$ (negative — **bad**)
> 2. The MRS formula still applies: $MRS_{xy} = \frac{MU_x}{MU_y} = \frac{1}{-3} = -\frac{1}{3}$
> 3. The negative MRS indicates you'd need to be **compensated** with more $x$ to accept additional $y$
>
> **Here's what's really going on:** When one good is a "bad" (gives disutility), the standard tangency condition $MRS = p_x/p_y$ identifies a minimum, not a maximum. The optimum is a corner solution: consume zero of the bad and spend all income on the good.

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

> **Reference — Koutsoyiannis (Ch.2, pp.21-25) — Consumer Equilibrium Geometry:**
>
> Koutsoyiannis provides the classic graphical derivation of consumer equilibrium. Two conditions must hold:
>
> **First condition (necessary):** $MRS_{xy} = p_x/p_y$ -- the slope of the indifference curve equals the slope of the budget line at the tangency point.
>
> **Second condition (sufficient):** Indifference curves must be convex to the origin -- guaranteed by the axiom of diminishing MRS.
>
> Koutsoyiannis emphasizes that the first-order condition $MU_x/MU_y = p_x/p_y$ is **identical** in both the cardinal and ordinal approaches. The crucial difference: the ordinal approach replaces the cardinal assumption of diminishing marginal utility with the assumption of **diminishing MRS** (convex indifference curves). This is a weaker and more realistic assumption -- it does not require utility to be measurable, only that the consumer can rank bundles consistently.
>
> **Deriving the demand curve:** As the price of $x$ falls, the budget line rotates outward, creating a new tangency with a higher indifference curve. Connecting these tangency points traces the **price-consumption line**, from which the individual demand curve is derived. For normal goods, the demand curve always has a negative slope, following from Slutsky's theorem.

---

### 1.8 Additional Practice Problems

#### Practice Problem 1: Cobb-Douglas with $U = XY^2$

**Q (from HW1):** $U = XY^2$. Find the demands for $X$ and $Y$.

**Solution:**

$MU_X = Y^2$, $MU_Y = 2XY$

Tangency: $\frac{MU_X}{MU_Y} = \frac{Y^2}{2XY} = \frac{Y}{2X} = \frac{p_X}{p_Y}$

So $Y = \frac{2p_X}{p_Y} X$

Substitute into budget $p_X X + p_Y Y = I$:

> **Let's solve this step by step:**
> Solving for CD demands with $u = XY^2$:
> 1. Tangency condition: $\frac{MU_X}{MU_Y} = \frac{Y^2}{2XY} = \frac{Y}{2X} = \frac{p_X}{p_Y} \;\Rightarrow\; Y = \frac{2p_X}{p_Y} X$
> 2. Substitute $Y$ into the budget $p_X X + p_Y Y = I$: $p_X X + p_Y \cdot \frac{2p_X}{p_Y} X = I$
> 3. Simplify: $p_X X + 2p_X X = I \;\Rightarrow\; 3p_X X = I$
>
> **Here's what's really going on:** The expenditure share of $X$ is $1/3$ (coefficient on $p_X X$ is 3), reflecting that good $X$ contributes 1 of the 3 total exponent units in $U = X^1 Y^2$.

$$p_X X + p_Y \left(\frac{2p_X}{p_Y} X\right) = I \Rightarrow p_X X + 2p_X X = I \Rightarrow 3p_X X = I$$

> **Continuing:**
> 1. Solve for $X$: $X(p,I) = \frac{I}{3p_X}$
> 2. From $Y = \frac{2p_X}{p_Y} X$: $Y(p,I) = \frac{2p_X}{p_Y} \cdot \frac{I}{3p_X} = \frac{2I}{3p_Y}$
>
> **Here's what's really going on:** Demands follow the standard CD pattern: expenditure shares are proportional to the exponents. $X$ gets $1/3$ of income ($\alpha=1$), $Y$ gets $2/3$ ($\beta=2$), and $(\alpha+\beta)=3$.

$$X(p, I) = \frac{I}{3p_X}, \qquad Y(p, I) = \frac{2I}{3p_Y}$$

**Check:** Expenditure share of $X$ is $1/3$, of $Y$ is $2/3$.

---

#### Practice Problem 2: Perfect Complements $U = \min(2X, Y)$

**Q (from HW1):** $U = \min(2X, Y)$. Find the demands for $X$ and $Y$.

**Solution:**

At the optimum, you consume in fixed proportion: $2X = Y$.

Budget: $p_X X + p_Y Y = I$. Substituting $Y = 2X$:

> **Let's derive this together:**
> Starting from $U = \min(2X, Y)$ with budget $p_X X + p_Y Y = I$:
> 1. At the optimum for Leontief: $2X = Y$ (the arguments inside $\min$ must be equal at the kink)
> 2. Substitute $Y = 2X$ into the budget: $p_X X + p_Y(2X) = I$
> 3. Factor: $X(p_X + 2p_Y) = I$
>
> **Here's what's really going on:** The coefficient 2 on $p_Y$ reflects that one unit of $X$ requires two units of $Y$ in the optimal proportion ($2X = Y$). The goods must be consumed in a 1:2 ratio.

$$p_X X + p_Y(2X) = I \Rightarrow X(p_X + 2p_Y) = I$$

> **Continuing:**
> 1. Solve for $X$: $X(p,I) = \frac{I}{p_X + 2p_Y}$
> 2. Since $Y = 2X$: $Y(p,I) = \frac{2I}{p_X + 2p_Y}$
>
> **Here's what's really going on:** Both demands decline when either price rises, but the coefficient 2 on $p_Y$ means changes in $p_Y$ affect demand twice as much as changes in $p_X$ (since the proportion requires 2 units of $Y$ per $X$).

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

> **Let's compute this step by step:**
> Computing marginal utilities for $U = (xy)^2$:
> 1. Partial derivative w.r.t $x$: $MU_x = \frac{\partial}{\partial x} (x^2 y^2) = 2x y^2$
> 2. Partial derivative w.r.t $y$: $MU_y = \frac{\partial}{\partial y} (x^2 y^2) = 2x^2 y$
> 3. Tangency: $\frac{MU_x}{MU_y} = \frac{2xy^2}{2x^2 y} = \frac{y}{x} = \frac{p_x}{p_y}$
>
> **Here's what's really going on:** The MRS simplifies to $y/x$ — the same as for $u=xy$ (since squaring is a monotonic transformation). This confirms that monotonic transformations preserve the MRS and thus the demand functions.

$$MU_x = 2xy^2, \quad MU_y = 2x^2y$$

Tangency: $\frac{2xy^2}{2x^2y} = \frac{y}{x} = \frac{p_x}{p_y} \Rightarrow y = \frac{p_x}{p_y} x$

Budget: $p_x x + p_y y = I \Rightarrow p_x x + p_y \cdot \frac{p_x}{p_y} x = 2p_x x = I$

> **Continuing:**
> Solving the tangency condition $y/x = p_x/p_y$ with the budget:
> 1. From tangency: $y = \frac{p_x}{p_y} x$
> 2. Substitute into $p_x x + p_y y = I$: $p_x x + p_y \cdot \frac{p_x}{p_y} x = 2p_x x = I$
> 3. Solve: $x(p,I) = \frac{I}{2p_x}$, $y(p,I) = \frac{I}{2p_y}$
>
> **Here's what's really going on:** Same demands as $u=xy$ — confirming ordinality. The monotonic transformation $(xy)^2$ does not change the optimal consumption choices.

$$x(p, I) = \frac{I}{2p_x}, \quad y(p, I) = \frac{I}{2p_y}$$

**Indirect utility:**

> **Let's derive indirect utility:**
> Substituting demands back into $v(p,I) = u(x(p,I), y(p,I))$:
> 1. $v(p,I) = (x \cdot y)^2 = \left(\frac{I}{2p_x} \cdot \frac{I}{2p_y}\right)^2$
> 2. Simplify: $= \frac{I^4}{16 p_x^2 p_y^2}$
>
> **Here's what's really going on:** The indirect utility is HD(4) in $I$ (since $U$ is HD(4)) and HD(0) in $(p,I)$ — doubling both prices and income leaves $v$ unchanged. The exponent 4 reflects the homogeneity degree of the original utility function.

$$v(p, I) = (x \cdot y)^2 = \left(\frac{I}{2p_x} \cdot \frac{I}{2p_y}\right)^2 = \frac{I^4}{16 p_x^2 p_y^2}$$

**Solution (b): $U = (xy)^{1/2}$**

Again, a monotonic transformation of $U = xy$. Marshallian demands are the same:

> **Let's work through this:**
> For $U = (xy)^{1/2}$, a monotonic transformation of $U=xy$ (square root):
> 1. Since preferences are ordinal, Marshallian demands are identical to those of $U=xy$
> 2. Same tangency condition $y/x = p_x/p_y$ leads to $x(p,I) = \frac{I}{2p_x}$, $y(p,I) = \frac{I}{2p_y}$
>
> **Here's what's really going on:** This demonstrates the ordinality of utility — taking the square root of a function doesn't change the optimal choices because it's a strictly increasing transformation.

$$x(p, I) = \frac{I}{2p_x}, \quad y(p, I) = \frac{I}{2p_y}$$

**Indirect utility:**

> **Let's derive indirect utility:**
> Substituting demands into $U = \sqrt{xy}$:
> 1. $v(p,I) = \sqrt{\frac{I}{2p_x} \cdot \frac{I}{2p_y}} = \frac{I}{2\sqrt{p_x p_y}}$
>
> **Here's what's really going on:** Unlike $U=(xy)^2$ which gives $v \propto I^4$, here $v \propto I^1$ — reflecting the homogeneity degree of $1/2 + 1/2 = 1$ for $U = x^{1/2}y^{1/2}$. Indirect utility is HD(1) in $I$.

$$v(p, I) = \sqrt{xy} = \sqrt{\frac{I}{2p_x} \cdot \frac{I}{2p_y}} = \frac{I}{2\sqrt{p_x p_y}}$$

**Solution (c): $U = \min(x, 2y)$**

At optimum: $x = 2y$. Budget: $p_x x + p_y y = I$.

Substitute $x = 2y$: $p_x(2y) + p_y y = y(2p_x + p_y) = I$

> **Let's derive this:**
> For $U = \min(x, 2y)$ with budget $p_x x + p_y y = I$:
> 1. At the Leontief optimum: $x = 2y$ (arguments inside $\min$ equalize)
> 2. Substitute into budget: $p_x(2y) + p_y y = y(2p_x + p_y) = I$
> 3. Solve: $y(p,I) = \frac{I}{2p_x + p_y}$, $x(p,I) = \frac{2I}{2p_x + p_y}$
>
> **Here's what's really going on:** The proportion $x:y = 2:1$ means $x$ consumption is twice $y$ consumption. The effective "price per unit of the composite" is $2p_x + p_y$.

$$y(p, I) = \frac{I}{2p_x + p_y}, \quad x(p, I) = \frac{2I}{2p_x + p_y}$$

**Indirect utility:**

> **Let's derive it:**
> Substituting Leontief demands into $U = \min(x, 2y)$:
> 1. $v(p,I) = \min\left(\frac{2I}{2p_x + p_y}, 2 \cdot \frac{I}{2p_x + p_y}\right) = \frac{I}{2p_x + p_y}$
> 2. Both arguments equal $I/(2p_x + p_y)$, confirming the optimum is at the kink
>
> **Here's what's really going on:** Indirect utility for Leontief is simply total wealth divided by the "price index" $2p_x + p_y$ — the cost of buying one unit of the composite consumption bundle in fixed proportions.

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

> **Let's work through this step by step:**
> For $U = x^2 y^2 + xy$, solving the tangency condition:
> 1. Tangency: $\frac{MU_x}{MU_y} = \frac{2xy^2 + y}{2x^2 y + x} = \frac{y(2xy+1)}{x(2xy+1)} = \frac{y}{x} = \frac{p_x}{p_y}$
> 2. Hence $y = \frac{p_x}{p_y} x$, giving $xy = \frac{p_x}{p_y} x^2$
> 3. Let $z = \frac{-1 + \sqrt{1+4\bar{u}}}{2}$ (solving $z^2 + z = \bar{u}$ where $z = xy$)
> 4. Then $x = \sqrt{\frac{p_y}{p_x} z}$ and $y = \sqrt{\frac{p_x}{p_y} z}$
>
> **Here's what's really going on:** The $2xy+1$ terms cancel in the MRS ratio (as long as $2xy+1 \neq 0$), leaving the familiar $y/x$ tangency — the same as $U=xy$. The utility transformation $U = xy(xy+1)$ preserves the MRS.

$$x = \sqrt{\frac{p_y}{p_x} z}, \quad y = \sqrt{\frac{p_x}{p_y} z}$$

**Hicksian demands:**

> **Expressing in terms of $p$ and $\bar{u}$:**
> 1. From $x = \sqrt{\frac{p_y}{p_x} z}$ and $y = \sqrt{\frac{p_x}{p_y} z}$ with $z = \frac{-1+\sqrt{1+4\bar{u}}}{2}$
> 2. Write as Hicksian demands:
>    $h_x(p,\bar{u}) = \sqrt{\frac{p_y}{p_x} \cdot \frac{-1+\sqrt{1+4\bar{u}}}{2}}$
>    $h_y(p,\bar{u}) = \sqrt{\frac{p_x}{p_y} \cdot \frac{-1+\sqrt{1+4\bar{u}}}{2}}$
>
> **Here's what's really going on:** Each Hicksian demand depends on the price ratio $(p_y/p_x)^{1/2}$ and on $\bar{u}$ through the transformed variable $z$. The square root reflects the Cobb-Douglas-like structure of the underlying $xy$ core.

$$h_x(p, \bar{u}) = \sqrt{\frac{p_y}{p_x} \cdot \frac{-1 + \sqrt{1 + 4\bar{u}}}{2}}, \quad h_y(p, \bar{u}) = \sqrt{\frac{p_x}{p_y} \cdot \frac{-1 + \sqrt{1 + 4\bar{u}}}{2}}$$

**Expenditure function:**

> **Building the expenditure function:**
> 1. $e(p,\bar{u}) = p_x h_x + p_y h_y = p_x \sqrt{\frac{p_y}{p_x} z} + p_y \sqrt{\frac{p_x}{p_y} z}$
> 2. Simplify each term: $\sqrt{p_x p_y z} + \sqrt{p_y p_x z} = 2\sqrt{p_x p_y z}$
> 3. Substitute $z = \frac{-1+\sqrt{1+4\bar{u}}}{2}$:
>    $e(p,\bar{u}) = 2\sqrt{p_x p_y \cdot \frac{-1+\sqrt{1+4\bar{u}}}{2}}$
>
> **Here's what's really going on:** The expenditure function factorizes into a price index $\sqrt{p_x p_y}$ and a utility transformation. It is HD(1) in prices and increasing in $\bar{u}$.

$$e(p, \bar{u}) = p_x h_x + p_y h_y = 2\sqrt{p_x p_y \cdot \frac{-1 + \sqrt{1+4\bar{u}}}{2}}$$

**Solution (b): $U = 2x^2 + y^2$**

EMP: minimize $p_x x + p_y y$ subject to $2x^2 + y^2 = \bar{u}$.

Lagrangian: $\mathcal{L} = p_x x + p_y y + \mu(\bar{u} - 2x^2 - y^2)$

FOCs:

> **Let's set up the FOCs:**
> For $U = 2x^2 + y^2$ with EMP Lagrangian $\mathcal{L} = p_x x + p_y y + \mu(\bar{u} - 2x^2 - y^2)$:
> 1. $\partial\mathcal{L}/\partial x = p_x - 4\mu x = 0$ (note $4 = 2 \times 2$ from derivative of $2x^2$)
> 2. $\partial\mathcal{L}/\partial y = p_y - 2\mu y = 0$
> 3. These give: $p_x = 4\mu x$ and $p_y = 2\mu y$
>
> **Here's what's really going on:** The FOCs set the price of each good equal to the marginal cost of tightening the constraint ($\mu$) times the marginal product of that good in generating utility. The factor 4 vs 2 reflects the different exponents on $x$ and $y$.

$$p_x - 4\mu x = 0, \quad p_y - 2\mu y = 0$$

Tangency: $\frac{p_x}{p_y} = \frac{4\mu x}{2\mu y} = \frac{2x}{y} \Rightarrow y = \frac{2p_x}{p_y} x$

Substitute into constraint: $2x^2 + \left(\frac{2p_x}{p_y} x\right)^2 = \bar{u}$

> **Substituting into the constraint:**
> 1. $2x^2 + \left(\frac{2p_x}{p_y} x\right)^2 = \bar{u}$
> 2. $2x^2 + \frac{4p_x^2}{p_y^2} x^2 = \bar{u}$
> 3. Factor $x^2$: $x^2\left(2 + \frac{4p_x^2}{p_y^2}\right) = \bar{u}$
>
> **Here's what's really going on:** The term in parentheses is the "effective price" of $x$ in utility terms — it incorporates both the direct contribution ($2x^2$) and the indirect contribution through the required $y$ ($4p_x^2/p_y^2$).

$$2x^2 + \frac{4p_x^2}{p_y^2} x^2 = \bar{u} \Rightarrow x^2\left(2 + \frac{4p_x^2}{p_y^2}\right) = \bar{u}$$

> **Solving for $h_x$:**
> 1. $x^2 = \frac{\bar{u}}{2 + 4p_x^2/p_y^2}$
> 2. Multiply numerator and denominator by $p_y^2$: $x^2 = \frac{\bar{u} p_y^2}{2p_y^2 + 4p_x^2}$
> 3. Take the positive square root: $h_x(p,\bar{u}) = \sqrt{\frac{\bar{u} p_y^2}{2p_y^2 + 4p_x^2}}$
>
> **Here's what's really going on:** Hicksian demand for $x$ decreases when $p_x$ rises (the denominator increases) and increases with $\bar{u}$ (higher utility target requires more of both goods). It rises with $p_y$ since $p_y$ makes $y$ more expensive, inducing substitution toward $x$.

$$h_x(p, \bar{u}) = \sqrt{\frac{\bar{u}}{2 + 4p_x^2/p_y^2}} = \sqrt{\frac{\bar{u} p_y^2}{2p_y^2 + 4p_x^2}}$$

> **Now for $h_y$:**
> 1. $h_y(p,\bar{u}) = \frac{2p_x}{p_y} \cdot h_x(p,\bar{u})$
> 2. $h_y(p,\bar{u}) = \frac{2p_x}{p_y} \cdot \sqrt{\frac{\bar{u} p_y^2}{2p_y^2 + 4p_x^2}}$
>
> **Here's what's really going on:** $h_y$ inherits the substitution properties from $h_x$ scaled by the optimal proportion $2p_x/p_y$. Since $y$ is more costly to substitute (higher exponent in utility), its compensated demand is more sensitive to price changes.

$$h_y(p, \bar{u}) = \frac{2p_x}{p_y} \cdot \sqrt{\frac{\bar{u} p_y^2}{2p_y^2 + 4p_x^2}}$$

**Expenditure function:** $e(p, \bar{u}) = p_x h_x + p_y h_y$.

**Solution (c): $U = (xy)^{1/2}$**

Since $(xy)^{1/2}$ is a monotonic transformation of $xy$, we can use the same approach as the CD case with $\alpha = \beta = 1/2$. That is, $u(x,y) = x^{1/2} y^{1/2}$.

Using the standard CD formulas with $\alpha = \beta = 1/2$, $\alpha+\beta = 1$:

> **Let's derive this:**
> For $U = (xy)^{1/2} = x^{1/2} y^{1/2}$ (CD with $\alpha = \beta = 1/2$, $\alpha+\beta=1$):
> 1. Using the standard CD Hicksian demand formula:
>    $h_x = \bar{u} \cdot \left(\frac{\alpha}{\beta}\right)^\beta \cdot \left(\frac{p_y}{p_x}\right)^\beta$
> 2. With $\alpha = \beta = 1/2$: $\left(\frac{1/2}{1/2}\right)^{1/2} = 1$, so $h_x(p,\bar{u}) = \bar{u} \sqrt{\frac{p_y}{p_x}}$
>
> **Here's what's really going on:** When both exponents are equal, the constant term simplifies to 1, and Hicksian demand depends only on $\bar{u}$ and the square root of the price ratio.

$$h_x(p, \bar{u}) = \bar{u} \cdot \left(\frac{1/2}{1/2}\right)^{1/2} \cdot \left(\frac{p_y}{p_x}\right)^{1/2} = \bar{u} \sqrt{\frac{p_y}{p_x}}$$

> **By symmetry:**
> 1. $h_y(p,\bar{u}) = \bar{u} \cdot \left(\frac{\beta}{\alpha}\right)^\alpha \cdot \left(\frac{p_x}{p_y}\right)^\alpha = \bar{u} \cdot 1 \cdot \left(\frac{p_x}{p_y}\right)^{1/2} = \bar{u} \sqrt{\frac{p_x}{p_y}}$
>
> **Here's what's really going on:** The two Hicksian demands are symmetric: $h_x$ depends on $(p_y/p_x)^{1/2}$ and $h_y$ on $(p_x/p_y)^{1/2}$, reflecting the equal importance ($\alpha = \beta$) of both goods.

$$h_y(p, \bar{u}) = \bar{u} \cdot \left(\frac{1/2}{1/2}\right)^{1/2} \cdot \left(\frac{p_x}{p_y}\right)^{1/2} = \bar{u} \sqrt{\frac{p_x}{p_y}}$$

**Expenditure function:**

> **Building from the Hicksian demands:**
> 1. $e(p,\bar{u}) = p_x h_x + p_y h_y = p_x \cdot \bar{u} \sqrt{\frac{p_y}{p_x}} + p_y \cdot \bar{u} \sqrt{\frac{p_x}{p_y}}$
> 2. Simplify: $= \bar{u} \sqrt{p_x p_y} + \bar{u} \sqrt{p_y p_x} = 2\bar{u} \sqrt{p_x p_y}$
>
> **Here's what's really going on:** The expenditure function is proportional to $\sqrt{p_x p_y}$, the geometric mean of the two prices, scaled by $2\bar{u}$. This is HD(1) in prices and linear in $\bar{u}$. Shephard's lemma: $\partial e/\partial p_x = \bar{u} \sqrt{p_y/p_x} = h_x$ ✓.

$$e(p, \bar{u}) = p_x \cdot \bar{u} \sqrt{\frac{p_y}{p_x}} + p_y \cdot \bar{u} \sqrt{\frac{p_x}{p_y}} = 2\bar{u} \sqrt{p_x p_y}$$

---

#### Practice Problem 7: Log-Linear Demand Elasticities

**Q (from Final Exam Q2b):** The log of an individual's demand for good X is:

> **Let's set this up:**
> Starting from a log-linear (constant-elasticity) demand specification:
> 1. The demand function is written in **log-log form**: $\ln X = a \ln P_x + \gamma \ln P_y + \delta \ln P_z + \eta \ln I$
> 2. In this form, each coefficient is a **constant elasticity**:
>    - $a = \partial \ln X / \partial \ln P_x$: own-price elasticity
>    - $\gamma = \partial \ln X / \partial \ln P_y$: cross-price elasticity w.r.t $P_y$
>    - $\delta = \partial \ln X / \partial \ln P_z$: cross-price elasticity w.r.t $P_z$
>    - $\eta = \partial \ln X / \partial \ln I$: income elasticity
>
> **Here's what's really going on:** The log-log form is convenient because elasticities are constant parameters rather than functions of prices and income. An $\eta = 0.8$ means a 1% increase in income raises demand by 0.8% (necessity good).

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

$MU_X/P_X < MU_Y/P_Y$, so you get more utility per dollar from good Y. You should spend **all income on good Y**.

> **Let's work through this:**
> For $U = X + 3Y$ (perfect substitutes) with $P_X=20$, $P_Y=40$, $I=400$:
> 1. Compute marginal utility per dollar:
>    - $MU_X/P_X = 1/20 = 0.05$
>    - $MU_Y/P_Y = 3/40 = 0.075$
> 2. Since $MU_Y/P_Y > MU_X/P_X$, you get more "bang per buck" from good Y
> 3. Hence spend **all** income on Y: $Y^* = I/P_Y = 400/40 = 10$, $X^* = 0$
>
> **Here's what's really going on:** For perfect substitutes, the optimum is always at a corner unless $MRS$ exactly equals the price ratio. Compare $MU_i/p_i$ across goods and spend everything on the highest. Utility: $U(0,10) = 30 > U(20,0) = 20$, confirming Y-corner is best.

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

**Why this matters for your exam:** These are actual exam questions. Study them carefully — the patterns repeat.

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

> **Let's solve this step by step:**
> For $U(G,V,C) = \min(G,V,C)$ with budget $p_G G + p_V V + p_C C = w$:
> 1. At the Leontief optimum, all goods are consumed in fixed 1:1:1 proportion: $G = V = C = q$
> 2. Substitute: $p_G q + p_V q + p_C q = w \;\Rightarrow\; q(p_G + p_V + p_C) = w$
> 3. Solve: $q = w/(p_G + p_V + p_C)$
> 4. Hence $G(p,w) = w/(p_G + p_V + p_C)$
>
> **Here's what's really going on:** The Negroni requires equal parts of Gin, Vermouth, and Campari. The Marshallian demand treats all three as a composite good with "price" $p_G + p_V + p_C$ (the cost of one cocktail).

$$G(p, w) = \frac{w}{p_G + p_V + p_C}$$

(iii) **Hicksian demand for Campari:** From the EMP, at optimum $G = V = C = \bar{u}$.

> **Let's work through this:**
> For the EMP with $U = \min(G,V,C) \ge \bar{u}$:
> 1. The minimum utility constraint $\min(G,V,C) \ge \bar{u}$ requires each good $\ge \bar{u}$
> 2. Cost minimization sets each exactly at $\bar{u}$ (no excess)
> 3. Hence $h_C(p,u) = h_G(p,u) = h_V(p,u) = \bar{u}$
>
> **Here's what's really going on:** Hicksian demand for Campari (and other goods) is **independent of prices** — with Leontief preferences, there is zero substitution elasticity. Even if Campari becomes very expensive, you still must consume exactly $\bar{u}$ ounces.

$$h_C(p, u) = \bar{u}$$

(Price-independent -- no substitution.)

(iv) **Expenditure function:**

> **Building from the Hicksian demands:**
> 1. $e(p,u) = p_G h_G + p_V h_V + p_C h_C = p_G \bar{u} + p_V \bar{u} + p_C \bar{u} = \bar{u}(p_G + p_V + p_C)$
>
> **Here's what's really going on:** The expenditure function is the cost of buying $\bar{u}$ units of each input, i.e., $\bar{u}$ Negroni cocktails at price $p_G + p_V + p_C$ each. It is HD(1) in $p$ and linear in $\bar{u}$. Duality checks: $e(p,v(p,w)) = w$ and $v(p,e(p,\bar{u})) = \bar{u}$.

$$e(p, u) = \bar{u}(p_G + p_V + p_C)$$

---

#### Final Exam Q1c: Quasilinear Corner

**Q (Final 2023, Q1c):** $U = X + \ln(Y)$. Find the demands for X and Y. Suppose you only have 1 cent ($I = 0.01$). Which goods do you buy? Why?

**Solution:**

From 1B-Q7: Marshallian demands are:
- $x(p, I) = I/p_x - 1$ (if $I \ge p_x$)
- $y(p, I) = p_x/p_y$

With $I = 0.01$ (1 cent), assuming $p_x \ge 0.01$ in most reasonable settings, we have $I < p_x$, so $x$ would be negative. Therefore:

> **Let's work through this:**
> For $U = X + \ln Y$ with $I = 0.01$:
> 1. Interior solution would require $x = I/p_x - 1$ (from derived Marshallian demand)
> 2. With $I = 0.01$, if $p_x \ge 0.01$, then $I/p_x - 1 \le 0$ — the interior solution is infeasible
> 3. Corner solution: set $x^* = 0$, spend all income on $y$: $y^* = I/p_y$
>
> **Here's what's really going on:** With very low income, you cannot afford the "fixed cost" ($p_x$) of buying positive $x$. All income goes to the log-good $y$ where marginal utility $1/y$ starts infinitely high, giving the best initial "bang per buck."

$$x^* = 0, \quad y^* = I/p_y$$

You buy only good Y (the log-good). **Why?** Because the marginal utility of $Y$ starts very high (when $Y$ is small, $MU_y = 1/Y$ is large), so you spend the tiny income on the good that gives the highest initial marginal utility per dollar. With very low income, you cannot afford to reach the satiation point for $Y$.

---

### 1.10 Key Formulas — Consumer Theory

**Why this matters for your exam:** This is your cheat sheet. If you know these formulas cold, you have the toolkit for 90% of exam questions.

| Concept | Key Formula/Result | Exam Frequency |
|:---|---|---:|
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
> **Key sources:** Koutsoyiannis Ch.2, Munoz-Garcia Ch.2–3, §7.2.3
> **Advanced references:** Munoz-Garcia Ch.2 (Slutsky Matrix pp.61–64, WARP and Demand pp.99–117, Hicksian-Walrasian relationship pp.129–135), Koutsoyiannis Ch.2 (Pragmatic approach pp.53–60)

---

### 2.1 Core Elasticity Concepts

**Why this matters for your exam:** Elasticities are the single most tested concept in this topic. Know how to compute them, classify them, and interpret them — you'll see them in every demand question.

#### 2.1.1 Point vs Arc Elasticity

**Here's the distinction you need to nail:** point elasticity for small (infinitesimal) changes, arc elasticity for large (discrete) changes.

| Type | Formula | When to Use |
|------|---------|-------------|
| **Point elasticity** | $\varepsilon_{X,P} = \frac{\partial X}{\partial P} \cdot \frac{P}{X} = \frac{\% \Delta X}{\% \Delta P}$ | Infinitesimal (small) price changes |
| **Arc elasticity** | $\varepsilon_{X,P}^{\text{arc}} = \frac{\Delta X}{\Delta P} \cdot \frac{P_1 + P_2}{X_1 + X_2}$ | Discrete (large) price changes — elasticity at the chord midpoint |

#### 2.1.2 Log-Linear (Constant Elasticity) Demand

**This is the single most important functional form for your exam. Know it cold.** The most common functional form in empirical demand estimation:

> **Let's work through this step by step:**
> We start with the constant-elasticity (log-linear) demand specification:
> 1. Assume demand takes the multiplicative form $X = \alpha P_X^\gamma P_Z^\delta P_W^\varepsilon I^\eta$, where $\alpha$ is a scale parameter and $\gamma, \delta, \varepsilon, \eta$ are the elasticities.
> 2. This form is chosen because it yields **constant elasticities** — the marginal effect of each variable depends on the current level of all variables, but the elasticity (percentage response) is constant.
> 3. Taking natural logs transforms this into a linear-in-logs function suitable for OLS estimation.
>
> **Here's what's really going on:** Multiplicative demand is the empirical workhorse because coefficients are directly interpretable as elasticities: a 1% change in $P_X$ changes $X$ by $\gamma\%$, holding other factors constant.

$$X = \alpha P_X^\gamma P_Z^\delta P_W^\varepsilon I^\eta$$

Taking natural logs:

> **Here's how the transformation works:**
> We start from the multiplicative demand $X = \alpha P_X^\gamma P_Z^\delta P_W^\varepsilon I^\eta$:
> 1. Apply the natural logarithm to both sides: $\ln(X) = \ln(\alpha P_X^\gamma P_Z^\delta P_W^\varepsilon I^\eta)$.
> 2. Use log properties: $\ln(AB) = \ln A + \ln B$ and $\ln(A^b) = b \ln A$.
> 3. This yields $\ln X = \ln \alpha + \gamma \ln P_X + \delta \ln P_Z + \varepsilon \ln P_W + \eta \ln I$, which is linear in the log-variables.
>
> **What this means:** Log-linearization converts a multiplicative demand function into a linear regression model. The slope coefficients $\gamma, \delta, \varepsilon, \eta$ are the elasticities, and $\ln \alpha$ is the intercept.

$$\ln X = \ln \alpha + \gamma \ln P_X + \delta \ln P_Z + \varepsilon \ln P_W + \eta \ln I$$

**Here's the key — and it's beautiful:** In the log-linear form, each exponent IS the elasticity:

> **Let's prove this to you:**
> We start from the log-linear form $\ln X = \ln \alpha + \gamma \ln P_X + \delta \ln P_Z + \varepsilon \ln P_W + \eta \ln I$:
> 1. The elasticity is defined as $\varepsilon_{X,P_X} = \frac{\partial X}{\partial P_X} \cdot \frac{P_X}{X} = \frac{\partial \ln X}{\partial \ln P_X}$ (by the chain rule for log-derivatives).
> 2. Differentiate $\ln X$ with respect to $\ln P_X$: $\frac{\partial \ln X}{\partial \ln P_X} = \gamma$, since all other terms do not involve $P_X$.
> 3. By the same reasoning, $\frac{\partial \ln X}{\partial \ln P_Z} = \delta$ and $\frac{\partial \ln X}{\partial \ln I} = \eta$.
>
> **What this all means:** In log-linear demand, each exponent IS the corresponding elasticity. This is the key advantage of this functional form: elasticities can be read directly from the regression coefficients, with no further calculation needed.

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

**Here's where it gets subtle:** Two goods can look like substitutes in one sense but not another. The distinction between gross and net substitutes matters a lot.

| Concept | Definition | Sign |
|---------|-----------|:----:|
| **Gross substitutes** | $\partial X_i / \partial P_j > 0$ (Walrasian demand) | $\varepsilon_{ij} > 0$ |
| **Gross complements** | $\partial X_i / \partial P_j < 0$ (Walrasian demand) | $\varepsilon_{ij} < 0$ |
| **Net substitutes** | $\partial h_i / \partial P_j > 0$ (Hicksian demand) | Always symmetric |
| **Net complements** | $\partial h_i / \partial P_j < 0$ (Hicksian demand) | Always symmetric |

> **⚠️ Watch out:** Gross substitutability is **not necessarily symmetric** — good Y can be a gross substitute for X while X is neither a gross substitute nor complement of Y (Munoz-Garcia, Example 3.5). Net substitutes (via Hicksian demands) are symmetric.

**Slutsky equation in elasticity form** (Munoz-Garcia, p.197):

> **Let's derive this together:**
> We start from the Slutsky equation in levels: $\frac{\partial x}{\partial p_y} = \frac{\partial h}{\partial p_y} - x_y \frac{\partial x}{\partial w}$.
> 1. Multiply both sides by $\frac{p_y}{x}$ to convert to elasticities: $\frac{\partial x}{\partial p_y} \cdot \frac{p_y}{x} = \frac{\partial h}{\partial p_y} \cdot \frac{p_y}{x} - x_y \frac{\partial x}{\partial w} \cdot \frac{p_y}{x}$.
> 2. The left-hand side is $\varepsilon_{x,p_y}$ by definition. The first term on the right is the Hicksian elasticity $\varepsilon_{x,p_y}^h = \frac{\partial h}{\partial p_y} \cdot \frac{p_y}{x}$, since along the compensated demand curve, $h(p,u) = x$ at the initial optimum.
> 3. For the second term: $x_y \frac{\partial x}{\partial w} \cdot \frac{p_y}{x} = \frac{p_y x_y}{w} \cdot \frac{\partial x}{\partial w} \cdot \frac{w}{x} = \theta_y \cdot \varepsilon_{x,w}$, where $\theta_y = \frac{p_y x_y}{w}$ is the budget share of good $y$ and $\varepsilon_{x,w}$ is the income elasticity.
>
> **Here's the intuition:** The cross-price elasticity of Walrasian demand equals the compensated (Hicksian) cross-price elasticity minus the budget share of good $y$ times the income elasticity. This shows why cross-price effects are ambiguous: the substitution and income effects can pull in opposite directions.

$$\varepsilon_{x,p_y} = \varepsilon_{x,p_y}^h - \theta_y \varepsilon_{x,w}$$

where $\theta_y$ is the budget share of good $y$ and $\varepsilon^h$ is the Hicksian (compensated) elasticity. This decomposition shows why cross-price effects are ambiguous: substitution effect (always positive for substitutes) and income effect (sign depends on normality/inferiority) pull in opposite directions.

> **Reference — Munoz-Garcia (Ch.2, pp.61–64):**
>
> The Slutsky equation can be generalized to an $L \times L$ matrix of substitution effects. For a differentiable Walrasian demand function $x(p,w)$, totally differentiate and impose the Slutsky wealth compensation $dw = x(p,w) \cdot dp$:
>
> > **Here's the derivation:**
> > > Starting from the Walrasian demand function $x(p,w)$:
> > > 1. Take the total differential: $dx = D_p x(p,w) \, dp + D_w x(p,w) \, dw$, where $D_p x$ is the $L \times L$ matrix of price derivatives and $D_w x$ is the $L \times 1$ vector of income derivatives.
> > > 2. Impose the **Slutsky wealth compensation**: $dw = x(p,w) \cdot dp = \sum_k x_k \, dp_k$. This adjusts income so the consumer can just afford the original bundle at the new prices, holding utility constant.
> > > 3. Substitute $dw$ into the total differential: $dx = D_p x(p,w) \, dp + D_w x(p,w) \, [x(p,w) \cdot dp]$.
> > > 4. Factor $dp$ to the right: $dx = \big[D_p x(p,w) + D_w x(p,w) \, x(p,w)^\top\big] \, dp$, where $x(p,w)^\top$ is the row vector of demands.
> > >
> > > **What's happening here:** The total change in demand from a compensated price change is the sum of the ordinary price effect (substitution + income) and the income effect from the compensation itself. The bracketed term is the Slutsky matrix — the pure substitution effect.
> >
> > $$dx = D_p x(p,w) dp + D_w x(p,w) [x(p,w) \cdot dp] = \big[D_p x(p,w) + D_w x(p,w) x(p,w)^\top\big] dp$$
> >
> > The term in brackets is the **Slutsky (substitution) matrix** $S(p,w)$ with elements:
> >
> > > **Here's how the matrix elements work:**
> > > Starting from the definition $S(p,w) = D_p x(p,w) + D_w x(p,w) \, x(p,w)^\top$:
> > > 1. The matrix product $D_w x(p,w) \, x(p,w)^\top$ expands to an $L \times L$ matrix where the $(l,k)$ entry is $\frac{\partial x_l}{\partial w} \cdot x_k$.
> > > 2. Adding $D_p x(p,w)$ (with entries $\partial x_l / \partial p_k$) gives the element: $s_{lk}(p,w) = \frac{\partial x_l(p,w)}{\partial p_k} + \frac{\partial x_l(p,w)}{\partial w} \cdot x_k(p,w)$.
> > > 3. This element decomposes the total price effect of good $k$ on demand for good $l$ into the substitution effect ($s_{lk}$) and the income effect ($-x_k \cdot \partial x_l / \partial w$).
> > >
> > > **Here's what to remember:** Each element $s_{lk}$ measures the compensated price effect. The diagonal $s_{ll} \leq 0$ must be non-positive — the compensated own-price effect always slopes downward, unlike uncompensated demand which can be Giffen.
> >
> > $$s_{lk}(p,w) = \frac{\partial x_l(p,w)}{\partial p_k} + \frac{\partial x_l(p,w)}{\partial w} \cdot x_k(p,w) \quad \text{for every pair of goods } l,k$$
> >
> > Each element $s_{lk}$ measures the compensated price effect of good $k$ on demand for good $l$. The diagonal elements $s_{ll}(p,w)$ are the **own-price substitution effects**, which the theory predicts must be non-positive ($s_{ll} \leq 0$).
> >
> > **Negative semi-definiteness:** If $x(p,w)$ is differentiable, satisfies Walras' law, homogeneity of degree zero, and WARP, then $S(p,w)$ is **negative semi-definite** (NSD): $v \cdot S(p,w) \cdot v \leq 0$ for any vector $v \in \mathbb{R}^L$. An immediate implication is that all diagonal elements satisfy $s_{ll}(p,w) \leq 0$ — the own-price substitution effect is always non-positive.
> >
> > **Symmetry:** Negative semi-definiteness does **not** by itself imply symmetry. However, if preferences additionally satisfy **local nonsatiation (LNS)** and **strict convexity**, and are representable by a continuous utility function, then $S(p,w)$ is **symmetric**: $s_{lk} = s_{kl}$ for all $l,k$. This symmetry is the differential analogue of the symmetry of net substitution terms in consumer theory. (Perfect substitutes violate strict convexity, so symmetry does not hold for those preferences.)

#### 2.1.4 Income Elasticity Classification

**Quick reference for your exam — know these three categories cold:**

| $\eta$ value | Classification | Example |
|:---:|---|---|
| $\eta > 1$ | **Luxury** (income-elastic normal) | Designer clothes, high-end electronics |
| $0 < \eta < 1$ | **Necessity** (income-inelastic normal) | Basic food, housing |
| $\eta < 0$ | **Inferior** | Instant noodles, bus travel |

#### 2.1.5 Revenue Test (MR-Elasticity Relationship)

**This is the direct link between demand theory and a firm's pricing decisions.** Total expenditure (revenue): $E = P \times X(P)$

**Marginal Revenue derivation:**

> **Let's work through this derivation — it's exam gold:**
> Starting from total revenue $E = P \times Q$, where $Q = X(P)$ is the demand function:
> 1. Differentiate $E$ with respect to quantity $Q$: $MR = \frac{dE}{dQ} = \frac{d(PQ)}{dQ}$.
> 2. Apply the product rule: $\frac{d(PQ)}{dQ} = P \cdot \frac{dQ}{dQ} + Q \cdot \frac{dP}{dQ} = P + Q\frac{dP}{dQ}$.
> 3. Factor $P$: $P + Q\frac{dP}{dQ} = P\left(1 + \frac{Q}{P} \cdot \frac{dP}{dQ}\right) = P\left(1 + \frac{1}{\frac{P}{Q} \cdot \frac{dQ}{dP}}\right)$.
> 4. Recognize that the price elasticity $\varepsilon = \frac{dQ}{dP} \cdot \frac{P}{Q}$, so $\frac{1}{\varepsilon} = \frac{dP}{dQ} \cdot \frac{Q}{P}$. Substituting gives $MR = P\left(1 + \frac{1}{\varepsilon}\right)$.
>
> **Here's the intuition:** Marginal revenue equals price times $(1 + 1/\varepsilon)$. When demand is elastic ($|\varepsilon| > 1$), $MR > 0$, so cutting price raises total revenue. When inelastic ($|\varepsilon| < 1$), $MR < 0$, so cutting price lowers revenue.

$$MR = \frac{dE}{dQ} = P + Q\frac{dP}{dQ} = P\left(1 + \frac{dP}{dQ}\cdot\frac{Q}{P}\right) = P\left(1 + \frac{1}{\varepsilon}\right)$$

Since $\varepsilon < 0$ (Law of Demand), write $\varepsilon = -\eta$ where $\eta = |\varepsilon| > 0$:

> **Here's an alternative form you might see on the exam:**
> Starting from $MR = P\left(1 + \frac{1}{\varepsilon}\right)$:
> 1. By the Law of Demand, $\frac{dQ}{dP} < 0$, so the price elasticity $\varepsilon = \frac{dQ}{dP} \cdot \frac{P}{Q}$ is always negative.
> 2. Define $\eta = |\varepsilon| > 0$, so $\varepsilon = -\eta$.
> 3. Substitute: $MR = P\left(1 + \frac{1}{-\eta}\right) = P\left(1 - \frac{1}{\eta}\right)$.
>
> **Why bother with this form?** Expressing MR in terms of the absolute elasticity $\eta$ makes the revenue test more intuitive: if $\eta > 1$ (elastic), $1 - 1/\eta > 0$ and $MR > 0$; if $\eta < 1$ (inelastic), $MR < 0$. Revenue is maximized at $\eta = 1$ where $MR = 0$.

$$MR = P\left(1 - \frac{1}{\eta}\right)$$

**Expenditure response to price change:**

| $\eta = |\varepsilon|$ | $MR$ | $P \downarrow \Rightarrow$ Expenditure |
|:---:|:---:|---|
| $> 1$ (elastic) | $> 0$ | $\uparrow$ |
| $< 1$ (inelastic) | $< 0$ | $\downarrow$ |
| $= 1$ (unit elastic) | $= 0$ | Unchanged (revenue maximised) |

> **Exam Tip:** The Total Revenue Test is a staple. Elastic → price and revenue move in opposite directions. Inelastic → same direction. Derive $MR = P(1 + 1/\varepsilon)$ from first principles in your answer — it shows the examiner you understand the microfoundations.

#### 2.1.6 Lerner Index (Monopoly Pricing)

**Here's where elasticity meets market power — this is a classic exam question.**

> **Let's derive the Lerner Index together:**
> The Lerner Index measures a firm's market power as the markup of price over marginal cost as a fraction of price.
> 1. Start from the profit-maximizing condition for any firm: $MR = MC$.
> 2. Substitute the MR formula $MR = P(1 + 1/\varepsilon)$ derived above: $P(1 + 1/\varepsilon) = MC$.
> 3. Rearrange: $P + P/\varepsilon = MC \;\Rightarrow\; P - MC = -P/\varepsilon$.
> 4. Divide both sides by $P$: $\frac{P - MC}{P} = -\frac{1}{\varepsilon}$.
>
> **Here's what this tells you:** The Lerner Index ranges from 0 (perfect competition, $P = MC$) to 1 (pure monopoly). The markup is inversely related to demand elasticity — the less elastic the demand, the greater the market power. A monopolist facing $\varepsilon = -2$ has a 50% markup; one facing $\varepsilon = -1.1$ has a 91% markup.

$$L = \frac{P - MC}{P} = -\frac{1}{\varepsilon_{Q,P}}$$

**Derivation:** Set $MR = MC$:

> **Let's see this another way:**
> Starting from the MR formula $MR = P(1 + 1/\varepsilon)$ and the profit-maximizing condition $MR = MC$:
> 1. Set $P(1 + 1/\varepsilon) = MC$.
> 2. Expand the left side: $P + P/\varepsilon = MC$.
> 3. Bring $P$ terms together: $P - MC = -P/\varepsilon$.
> 4. Solve for the Lerner Index: $\frac{P - MC}{P} = -\frac{1}{\varepsilon}$.
>
> **The bottom line:** This is the algebraic proof of the Lerner Index. The equation shows the monopolist's optimal markup depends only on the elasticity of demand, not on the shape of the cost curve beyond marginal cost.

$$P\left(1 + \frac{1}{\varepsilon}\right) = MC \;\Longrightarrow\; \frac{P - MC}{P} = -\frac{1}{\varepsilon}$$

**Inverse Elasticity Pricing Rule (IEPR):**

> **Here's how to find the optimal price directly:**
> Starting from the same first-order condition $P(1 + 1/\varepsilon) = MC$:
> 1. Write $1 + 1/\varepsilon = \frac{\varepsilon + 1}{\varepsilon}$.
> 2. Then $P \cdot \frac{\varepsilon + 1}{\varepsilon} = MC$.
> 3. Solve for $P$: $P^* = MC \cdot \frac{\varepsilon}{\varepsilon + 1} = \frac{MC}{1 + 1/\varepsilon}$.
>
> **The key insight:** The IEPR gives the profit-maximizing price directly. The monopolist must operate on the elastic portion of demand ($\varepsilon < -1$) for the formula to yield a positive price. As demand becomes perfectly elastic ($\varepsilon \to -\infty$), price approaches marginal cost (perfect competition).

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

**Why this matters:** Walrasian demand can slope upward (Giffen goods), but Hicksian demand always slopes downward. Understanding why is critical for your exam.

**The Compensated Law of Demand (CLD):**

For any price change from $p$ to $p'$ with utility held constant at $u$:

> **Let's work through the CLD proof:**
> Starting from the definition of Hicksian (compensated) demand $h(p,u)$ as the solution to the Expenditure Minimization Problem:
> 1. At prices $p$, the bundle $h(p,u)$ minimizes expenditure to achieve utility $u$. Therefore, $p \cdot h(p,u) \leq p \cdot h(p',u)$ — any other bundle (including $h(p',u)$) costs at least as much at prices $p$.
> 2. Similarly, at prices $p'$, the bundle $h(p',u)$ minimizes expenditure, so $p' \cdot h(p',u) \leq p' \cdot h(p,u)$.
> 3. Subtract the first inequality from the second: $p' \cdot h(p',u) - p \cdot h(p,u) \leq p' \cdot h(p,u) - p \cdot h(p',u)$.
> 4. Rearranging: $(p' - p) \cdot (h(p',u) - h(p,u)) \leq 0$.
>
> **Here's the big idea:** The compensated law of demand states that Hicksian demand curves always slope downward. Unlike Walrasian demand (which can be upward-sloping for Giffen goods), the CLD is a **theorem** — it follows directly from utility maximization / expenditure minimization and holds for all goods, with no exceptions.

$$(p' - p) \cdot \big(h(p',u) - h(p,u)\big) \leq 0$$

**Implication:** For every good $k$, $(p'_k - p_k) \cdot (h_k(p',u) - h_k(p,u)) \leq 0$. This means Hicksian demand curves are always downward-sloping — a price increase (decrease) for good $k$ leads to a decrease (increase) in its Hicksian quantity demanded. This is **always true** for compensated demand, unlike Walrasian (uncompensated) demand which can slope upward for Giffen goods.

**Relationship between WARP and the CLD:** WARP is equivalent to the CLD under Slutsky compensation, but WARP does **not** imply the uncompensated law of demand (ULD). That is:

> **Here's the logic connecting WARP and CLD:**
> Starting from the definitions of WARP and the Compensated Law of Demand:
> 1. **WARP:** If bundle $x$ is revealed preferred to bundle $y$ (i.e., $x$ is chosen when $y$ is affordable), then $y$ cannot be revealed preferred to $x$ at any other price–income pair. This is a consistency condition on observable choice.
> 2. **CLD:** $(p' - p) \cdot (h(p',u) - h(p,u)) \leq 0$, derived above from expenditure minimization.
> 3. Under **Slutsky compensation** (where income is adjusted to make the original bundle just affordable at the new prices), WARP implies the Slutsky matrix is negative semi-definite, which is equivalent to the CLD.
> 4. However, WARP does **not** imply the uncompensated law of demand (ULD), because the income effect can offset the substitution effect for Giffen goods.
>
> **The key takeaway:** This is a key theoretical result: WARP is testable on observable (uncompensated) demand data, yet it guarantees the compensated law of demand. This means the Slutsky matrix negative semi-definiteness can be tested without needing to observe compensated demands.

$$\text{WARP} \iff \text{CLD} \quad \text{but} \quad \text{WARP} \nRightarrow \text{ULD}$$

> **Reference — Munoz-Garcia (Ch.2, pp.129–135):**
>
> The **Hicksian (compensated) demand** $h(p,u)$ is the solution to the Expenditure Minimization Problem (EMP): minimize $p \cdot x$ subject to $u(x) \geq u$. Its key properties:
>
> 1. **Homogeneity of degree zero in $p$:** $h(\alpha p, u) = h(p,u)$ for $\alpha > 0$
> 2. **No income effects:** by construction — utility is held fixed
> 3. **Negative semi-definite substitution matrix:** $D_p h(p,u)$ is NSD, hence the Slutsky matrix $S(p,w) = D_p h(p,u)$ is also NSD
> 4. **Symmetry:** $D_p h(p,u)$ is symmetric (under LNS + strict convexity), therefore cross-price substitution effects are symmetric: $\partial h_l / \partial p_k = \partial h_k / \partial p_l$

> **Reference — Munoz-Garcia (Ch.2, pp.99–117):**
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

**This is the bridge between the two approaches to consumer theory — utility maximization and expenditure minimization.**

The Hicksian and Walrasian demands are related through the **Slutsky equation** and the **expenditure function**. For any $(p,w)$ with associated utility $u = v(p,w)$:

> **Let's connect the two demands:**
> Starting from the relationship between the expenditure function and the indirect utility function:
> 1. The expenditure function $e(p,u)$ gives the minimum expenditure needed to achieve utility $u$ at prices $p$. The indirect utility function $v(p,w)$ gives the maximum utility achievable at prices $p$ and income $w$. These are inverses: $e(p, v(p,w)) = w$ and $v(p, e(p,u)) = u$.
> 2. The Hicksian demand $h_l(p,u)$ is the demand for good $l$ that minimizes expenditure to achieve utility $u$. The Walrasian demand $x_l(p,w)$ is the demand that maximizes utility given income $w$.
> 3. At the optimum, they coincide: when $w = e(p,u)$ (income equals the minimum expenditure needed for utility $u$), the consumer demands the same bundle: $h_l(p,u) = x_l(p, e(p,u))$.
> 4. Conversely, setting income to $w$ and achieving utility $u = v(p,w)$, we have $x_l(p,w) = h_l(p, v(p,w))$.
>
> **Here's what's really going on:** This identity bridges the two approaches to consumer theory — utility maximization (Walrasian demand) and expenditure minimization (Hicksian demand). The Hicksian demand holds utility constant and varies income; the Walrasian demand holds income constant and varies utility. They coincide when income equals the expenditure needed to achieve the utility level.

$$h_l(p,u) = x_l(p, e(p,u)) \quad \text{and equivalently} \quad x_l(p,w) = h_l(p, v(p,w))$$

Differentiating the identity $h_l(p,u) = x_l(p, e(p,u))$ with respect to $p_k$ and applying Shephard's lemma ($\partial e(p,u)/\partial p_k = h_k(p,u)$) recovers the Slutsky equation:

> **Here's how the Slutsky equation emerges:**
> Starting from the identity $h_l(p,u) = x_l(p, e(p,u))$:
> 1. Differentiate both sides with respect to $p_k$. The left side is $\frac{\partial h_l(p,u)}{\partial p_k}$.
> 2. For the right side, apply the chain rule: $\frac{\partial}{\partial p_k} x_l(p, e(p,u)) = \frac{\partial x_l(p,w)}{\partial p_k} + \frac{\partial x_l(p,w)}{\partial w} \cdot \frac{\partial e(p,u)}{\partial p_k}$, where $w = e(p,u)$.
> 3. By **Shephard's lemma**, $\frac{\partial e(p,u)}{\partial p_k} = h_k(p,u)$, which equals $x_k(p,w)$ at the optimum where $w = e(p,u)$.
> 4. Substituting: $\frac{\partial h_l(p,u)}{\partial p_k} = \frac{\partial x_l(p,w)}{\partial p_k} + \frac{\partial x_l(p,w)}{\partial w} \cdot x_k(p,w)$.
> 5. The right-hand side is precisely the Slutsky matrix element $s_{lk}(p,w)$.
>
> **Here's the key insight:** The Slutsky equation decomposes the total price effect ($\partial x_l/\partial p_k$) into the substitution effect ($\partial h_l/\partial p_k = s_{lk}$) and the income effect ($-x_k \cdot \partial x_l/\partial w$). The substitution effect is the change in Hicksian (compensated) demand, which holds utility constant.

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

**These are exam staples — work through each one carefully.**

---

<details>
<summary><strong>Q2.1 — Log-Linear Demand Elasticities (Exam: Batch 48 Q2, HW problem)</strong></summary>

**Problem:** Demand function: $X = \alpha P_X^\gamma P_Z^\delta P_W^\varepsilon I^\eta$

**(i) What is the cross-price elasticity of demand for X with respect to $P_Z$?**

> **Let's work through this:**
> Starting from the log-linear demand $X = \alpha P_X^\gamma P_Z^\delta P_W^\varepsilon I^\eta$:
> 1. The cross-price elasticity is defined as $\varepsilon_{X,P_Z} = \frac{\partial X}{\partial P_Z} \cdot \frac{P_Z}{X}$.
> 2. Compute $\frac{\partial X}{\partial P_Z}$ from the multiplicative form: $X = \alpha P_X^\gamma \cdot \delta P_Z^{\delta-1} \cdot P_W^\varepsilon I^\eta = \delta \cdot \frac{X}{P_Z}$.
> 3. Multiply by $\frac{P_Z}{X}$: $\varepsilon_{X,P_Z} = \delta \cdot \frac{X}{P_Z} \cdot \frac{P_Z}{X} = \delta$.
> 4. Equivalently, using log-derivatives: $\frac{\partial \ln X}{\partial \ln P_Z} = \frac{\partial X / X}{\partial P_Z / P_Z} = \varepsilon_{X,P_Z}$, and from $\ln X = \ln \alpha + \gamma \ln P_X + \delta \ln P_Z + \varepsilon \ln P_W + \eta \ln I$, we get $\frac{\partial \ln X}{\partial \ln P_Z} = \delta$.
>
> **Here's the punchline:** In log-linear demand, the exponent on each price variable IS the corresponding elasticity. Here $\delta$ directly measures the percentage change in $X$ from a 1% change in $P_Z$, with no further calculation needed.

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

> **Look at this carefully:**
> Starting from the estimated linear demand: $Q = 10 + 1.3P_B + 0.4P_M - 3P_F + 2.2I$:
> 1. Take the partial derivative with respect to own price $P_B$: $\frac{\partial Q}{\partial P_B} = 1.3$.
> 2. In a linear demand function $Q = a + bP_B + \dots$, the coefficient $b$ IS the partial derivative $\partial Q / \partial P_B$.
> 3. The Law of Demand requires $\partial Q / \partial P_B < 0$ (downward-sloping demand), but here it is $+1.3 > 0$.
>
> **What this means:** A positive own-price coefficient in a linear demand regression violates the fundamental Law of Demand. This is a tell-tale sign of model misspecification — the estimated equation does not represent a structural demand curve.

$$\frac{\partial Q}{\partial P_B} = 1.3 > 0$$

The demand curve slopes **upward** (Giffen-like). This violates the **Law of Demand**.

**Why this is NOT a Giffen good:** A Giffen good (inferior good where income effect dominates substitution effect) still has a downward-sloping *compensated* demand curve. A positive coefficient on $P_B$ in a regression is a **symptom of model misspecification**, not a genuine Giffen effect.

**The Slutsky decomposition:**

> **Let's break this down with the Slutsky equation:**
> Starting from the general Slutsky equation $\frac{\partial x}{\partial p} = \frac{\partial h}{\partial p} - x \frac{\partial x}{\partial w}$:
> 1. Apply it to the Burger King demand context: $\frac{\partial X_B}{\partial P_B} = \frac{\partial h_B}{\partial P_B} - X_B \frac{\partial X_B}{\partial w}$.
> 2. The first term $\frac{\partial h_B}{\partial P_B}$ is the **substitution effect (SE)** — the change in Hicksian (compensated) demand holding utility constant. Theory guarantees this is always $\leq 0$.
> 3. The second term $X_B \frac{\partial X_B}{\partial w}$ is the **income effect (IE)** — the change in demand from the real-income change caused by the price change. Its sign depends on whether the good is normal ($\partial X_B/\partial w > 0$) or inferior ($\partial X_B/\partial w < 0$).
> 4. The total effect $\partial X_B/\partial P_B$ is the sum: SE (always $\leq 0$) minus IE (sign varies). For a Giffen good, IE is negative (inferior) and large enough in magnitude to make the total effect positive.
>
> **Here's the intuition:** The Slutsky decomposition separates the total price effect into its two components. Even when the total effect is positive (as in this problematic regression), the substitution effect remains non-positive — which is why the regression result cannot be a genuine Giffen good and must indicate misspecification.

$$\frac{\partial X_B}{\partial P_B} = \underbrace{\frac{\partial h_B}{\partial P_B}}_{\text{SE }(\leq 0)} - \underbrace{X_B \frac{\partial X_B}{\partial w}}_{\text{IE }(\lessgtr 0)}$$

Even for a Giffen good, the substitution effect remains negative. A regression coefficient of +1.3 implies the total uncompensated effect is positive — extremely rare, and in practice signals misspecification.

**Econometric diagnosis — three possible causes:**

1. **Omitted variable bias** — demand shifter correlated with both price and quantity biases coefficient upward
2. **Simultaneous equations bias** — price and quantity jointly determined; OLS on single equation confounds supply and demand shifts
3. **Measurement error** in price data

> **Professor's Corner:** This is a 30-second question once you spot the sign error. The examiner tests whether you blindly apply formulas or first verify the data make sense. The strongest answers connect this to the **identification problem** in demand estimation (Koutsoyiannis, p.55–57) — a regression of quantity on price alone cannot recover the demand curve because observed price–quantity pairs trace out both supply and demand shifts over time. Modern demand estimation uses **instrumental variables** — instruments that shift supply but not demand (e.g., input costs).

> **Reference — Koutsoyiannis (Ch.2, pp.53–55):**
>
> The pragmatic approach to demand analysis formulates demand functions directly from market data, specifying demand as a multivariate function $Q_x = f(P_x, P_0, Y, T)$ where $P_0$ is other prices, $Y$ is income, and $T$ captures tastes. The log-linear (constant-elasticity) form is the most common: $Q_x = b_0 P_x^{b_1} P_0^{b_2} Y^{b_3} e^{b_4 t}$. The coefficients $b_1,b_2,b_3$ are directly the price, cross, and income elasticities. Serious difficulties arise in estimation: (a) **aggregation** over individuals and commodities makes index numbers inevitable; (b) all determinants **change simultaneously**, making it difficult to isolate individual effects; (c) the **identification problem** — observed price–quantity pairs trace out a mix of supply and demand shifts, so OLS on a single equation cannot recover structural demand parameters. Koutsoyiannis notes that imposing homogeneity of degree zero (no money illusion) requires $b_1 + b_2 + b_3 = 0$ when expressed in real terms.

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

> **Let's apply the IEPR:**
> Starting from the Inverse Elasticity Pricing Rule (IEPR) $P^* = MC/(1 + 1/\varepsilon)$:
> 1. Given $MC = 1.00$ and own-price elasticity $\varepsilon = -1.5$, substitute into the IEPR: $P^* = \frac{1.00}{1 + 1/(-1.5)}$.
> 2. Simplify $1/(-1.5) = -2/3$, so the denominator is $1 - 2/3 = 1/3$.
> 3. Therefore $P^* = 1.00 / (1/3) = 3.00$.
> 4. Verify: $MR = P(1 + 1/\varepsilon) = 3(1 - 2/3) = 3(1/3) = 1 = MC$ ✓.
>
> **What this tells us:** With an elasticity of $-1.5$, the monopolist marks up price to three times marginal cost. The Lerner Index confirms: $(3-1)/3 = 2/3 = -1/\varepsilon = 2/3$.

$$P\left(1 + \frac{1}{-1.5}\right) = 1 \;\Rightarrow\; P\left(1 - \frac{2}{3}\right) = 1 \;\Rightarrow\; P\left(\frac{1}{3}\right) = 1 \;\Rightarrow\; P = 3$$

**Profit-maximizing price = $3.00.** Markup = $(3-1)/3 = 2/3$ (or $-1/\varepsilon = 2/3$).

**(vi) McDonald's lowers Big Mac price 10%. By what % must BK lower price to avoid losing customers?**

Big Mac is r1 (substitute). $\varepsilon_{Q,P_{r1}} = 0.75$.

If Big Mac price ↓ 10% → Whopper $Q$ falls $0.75 \times 10\% = 7.5\%$.

To neutralize: BK must lower $P_B$ to raise $Q$ by 7.5%. Own-price elasticity $\varepsilon_{Q,P_B} = -1.5$.

> **Here's how to calculate the offset:**
> Starting from the definition of own-price elasticity: $\varepsilon_{Q,P_B} = \frac{\% \Delta Q}{\% \Delta P_B}$.
> 1. We know $\varepsilon_{Q,P_B} = -1.5$ and we need $\% \Delta Q = +7.5\%$ to offset the loss from Big Mac's price cut.
> 2. Rearranging: $\% \Delta P_B = \frac{\% \Delta Q}{\varepsilon_{Q,P_B}} = \frac{7.5\%}{-1.5}$.
> 3. Computing: $\% \Delta P_B = -5\%$, meaning BK must cut its price by 5%.
> 4. Verification: The substitution effect from Big Mac's price cut reduces Whopper demand by 7.5%. The own-price cut of 5% stimulates Whopper demand by $(-1.5) \times (-5\%) = +7.5\%$. Net effect = 0%.
>
> **The general principle:** To fully neutralize a competitor's price cut, the firm must lower its own price by the ratio of the cross-price elasticity to the own-price elasticity, weighted by the competitor's price change. Here, $5\% = (0.75 / 1.5) \times 10\%$.

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

> **Here's how to think about fixed-proportions production:**
> Starting from the input requirements: 3 lb flour, 2.5 lb sugar, 2 lb butter per batch of cookies:
> 1. With $F$ lb of flour, the maximum number of batches producible from flour alone is $F/3$.
> 2. With $S$ lb of sugar, the maximum from sugar alone is $S/2.5$.
> 3. With $B$ lb of butter, the maximum from butter alone is $B/2$.
> 4. Since all three inputs are **perfect complements** (must be used in fixed proportions), the actual output is limited by the most constraining input: $Q = \min\{F/3,\; S/2.5,\; B/2\}$.
>
> **The intuition:** Leontief production functions represent technologies where inputs must be used in fixed ratios — you cannot substitute flour for sugar. Output is determined by the "bottleneck" input. This is the dual of the perfect substitutes case.

$$Q = \min\left\{\frac{F}{3}, \frac{S}{2.5}, \frac{B}{2}\right\}$$

**(ii) Cost function:**

At the cost-minimizing optimum, $F^* = 3Q$, $S^* = 2.5Q$, $B^* = 2Q$.

> **Let's derive the cost function:**
> Starting from the Leontief production function:
> 1. At the cost-minimizing optimum, there is no waste — all inputs are used in exact proportion to output. For output $Q$, the required input quantities are $F^* = 3Q$, $S^* = 2.5Q$, $B^* = 2Q$.
> 2. Total cost is the sum of input costs: $c(Q) = P_f \cdot F^* + P_s \cdot S^* + P_b \cdot B^*$.
> 3. Substituting the optimal input demands: $c(Q) = P_f \cdot 3Q + P_s \cdot 2.5Q + P_b \cdot 2Q$.
> 4. Factor out $Q$: $c(Q) = Q(3P_f + 2.5P_s + 2P_b)$.
> 5. Marginal cost $MC = c'(Q) = 3P_f + 2.5P_s + 2P_b$ is constant — the production function exhibits constant returns to scale.
>
> **What this means:** With fixed-proportions technology, the cost function is linear in output. The marginal cost is simply the cost of one batch's worth of inputs, and it does not vary with output level.

$$c(Q) = P_f \cdot 3Q + P_s \cdot 2.5Q + P_b \cdot 2Q = Q(3P_f + 2.5P_s + 2P_b)$$

Marginal cost: $MC = 3P_f + 2.5P_s + 2P_b$ (constant — CRS).

**(iii) Given $P_b = 3$, $P_s = 2$, $P_f = 1.50$: optimal price?**

$$MC = 3(1.50) + 2.5(2) + 2(3) = 4.50 + 5 + 6 = 15.50$$

Demand: $Q = 20P^{-3} P_0^{2.2} I^{1.8}$. Own-price elasticity $\varepsilon = -3$.

> **Here's the IEPR in action:**
> Starting from the Inverse Elasticity Pricing Rule $P^* = MC/(1 + 1/\varepsilon)$:
> 1. Marginal cost from part (ii) is $MC = 15.50$. Own-price elasticity from the log-linear demand is $\varepsilon = -3$ (the exponent on $P$).
> 2. Substitute into the IEPR: $P^* = \frac{15.50}{1 + 1/(-3)} = \frac{15.50}{1 - 1/3}$.
> 3. Simplify the denominator: $1 - 1/3 = 2/3$.
> 4. Therefore $P^* = \frac{15.50}{2/3} = 15.50 \times \frac{3}{2} = 23.25$.
> 5. Lerner Index check: $(23.25 - 15.50)/23.25 = 7.75/23.25 = 1/3 = -1/\varepsilon = 1/3$ ✓.
>
> **The takeaway:** With elasticity $-3$, the optimal markup is $1/3$ (33% margin). The IEPR gives the profit-maximizing price of \$23.25, which is 50% above marginal cost ($15.50 \times 1.5 = 23.25$).

Using IEPR: $P^* = \frac{MC}{1 + 1/\varepsilon} = \frac{15.50}{1 + 1/(-3)} = \frac{15.50}{1 - 1/3} = \frac{15.50}{2/3} = 23.25$

**Optimal price = $23.25 per batch.**

</details>

---

### 2.3 Key Formulas — Demand Theory

**Your cheat sheet for the exam — these are all fair game.**

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

**This connects the theory to real-world econometrics — know the forms and the identification problem.**

**The Pragmatic Approach:** Rather than deriving demand from utility maximization, the pragmatic approach skips the theory and goes straight to the data. Here's how it works:

> **Here's the structure of the pragmatic approach:**
> Starting from the general concept that quantity demanded depends on a set of observable economic variables:
> 1. $P_x$ is the good's **own price** — the primary determinant of quantity demanded via the Law of Demand.
> 2. $P_0$ is a **vector of related prices** — prices of substitutes (positive cross-effect) and complements (negative cross-effect).
> 3. $Y$ is **aggregate income** or consumer's budget — captures the ability to purchase, with sign depending on whether the good is normal ($+$) or inferior ($-$).
> 4. $T$ is a **time trend** or taste shifter — captures changes in preferences, demographics, advertising, or technology over time.
> 5. Unlike the structural approach (which derives demand from utility maximization), the pragmatic approach estimates $f(\cdot)$ directly from market data using regression techniques.
>
> **The big picture:** The pragmatic approach is a reduced-form empirical strategy: it models demand as a function of observable determinants without imposing the full structure of utility maximization. Its flexibility makes it the most common approach in applied demand analysis, but it requires careful attention to the identification problem.

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

> **Reference — Koutsoyiannis (Ch.2, pp.53–60):**
>
> Provides a comprehensive treatment of empirical approaches to demand analysis.

---

---

<!-- Enhanced by Munoz-Garcia & Koutsoyiannis textbook references -->
## <a id="topic-3"></a>Topic 3: Production & Supply

> **Exam weight:** 28–35 marks (2 questions). Production function analysis, cost minimization, profit maximization, and
  competitive equilibrium are staple topics.
> **Key sources:** Koutsoyiannis Ch.3–4, Munoz-Garcia Ch.4, §7.2

---

### 3.1 Production Sets & Functions

**Why this matters for your exam:** Before you can figure out how much to produce or which inputs to hire, you need a clear picture of what's technologically possible. This section builds the foundation — the production set, the production function, and the key concepts (returns to scale, elasticity of substitution) that will show up in almost every problem you solve.

#### 3.1.1 Core Definitions

| Term | Definition |
|------|-----------|
| **Production function** | $q = f(z_1, \dots, z_n)$ — maximum output from given inputs, given technology |
| **Production set** | $Y = \{ y \in \mathbb{R}^L : F(y) \leq 0 \}$ — all technologically feasible plans (positive = outputs, negative = inputs) |
| **Transformation function** | $F(y)$ — implicit function where $F(y) \leq 0$ iff $y$ is feasible |
| **Transformation frontier** | $\{ y \in \mathbb{R}^L : F(y) = 0 \}$ — technically efficient boundary |
| **MRPT** | $MRPT_{k,l} = \frac{\partial F/\partial y_k}{\partial F/\partial y_l} = -\frac{dy_l}{dy_k}$ along $F(y)=0$ |
| **Duality** | $MRPT_{k,l} = MC_k/MC_l$ (from profit maximization FOCs) |

> **Reference — Koutsoyiannis ([Ch.3, pp.68-70]):** Koutsoyiannis identifies four types of isoquants reflecting the degree of factor
  substitutability:
> 1. **Linear isoquant** ($\sigma = \infty$): Perfect substitutability — a commodity can be produced using only capital, only
  labor, or any combination
> 2. **Input-output (Leontief) isoquant** ($\sigma = 0$): Strict complementarity — only one technically efficient method exists;
  the isoquant is a right angle
> 3. **Kinked isoquant** (activity analysis): Limited substitutability with a few discrete processes; substitution occurs only at
  the kinks
> 4. **Smooth convex isoquant** ($0 < \sigma < \infty$): Continuous substitutability over a range, with diminishing MRTS
>
> Koutsoyiannis also distinguishes **technical efficiency** (a method uses less of at least one input and no more of others) from
  **economic efficiency** (the chosen method depends on factor prices). Only technically efficient methods belong to the production function; the economically optimal choice among them depends on relative prices.

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

> **Fixed costs violate convexity:** With fixed costs, the production set has a "hole" near the origin. For example, a
  \$100 license: $(0,0)$ is feasible and $(-100,0)$ is feasible (pay license, produce nothing), but $(-50,0)$ is **not** feasible — you cannot "half-pay" the license.

#### 3.1.3 Returns to Scale

> **Let's work through this step by step:**
> We start with the definition of returns to scale (RTS):
> 1. Multiply ALL inputs by a common scalar factor $t > 0$: evaluate $f(tK, tL)$
> 2. Factor $t$ out of the production function expression
> 3. The exponent $k$ on $t$ captures the degree of returns to scale:
>    - $k > 1$: output rises proportionally MORE than inputs $\rightarrow$ IRS
>    - $k = 1$: output rises proportionally $\rightarrow$ CRS
>    - $k < 1$: output rises proportionally LESS $\rightarrow$ DRS
>
> **Here's what's really going on:** RTS describes how output responds when you scale ALL inputs simultaneously. It's a pure technological property of the production function — totally different from diminishing marginal returns (which vary one input at a time).

$$f(tK, tL) = t^k f(K, L)$$

| $k$ | Returns to Scale | Implication |
|:---:|---|---|
| $k > 1$ | **Increasing (IRS)** | AC declining; natural monopoly possible |
| $k = 1$ | **Constant (CRS)** | AC constant; horizontal LR supply |
| $k < 1$ | **Decreasing (DRS)** | AC rising; upward-sloping LR supply |

**Method:** Multiply all inputs by $t > 0$, factor out $t$, read exponent.

#### 3.1.4 Elasticity of Substitution (EoS)

> **Let's work through this step by step:**
> We start with the definition of the elasticity of substitution ($\sigma$):
> 1. $\sigma$ measures the percentage change in the input ratio $(K/L)$ divided by the percentage change in the Marginal Rate of
  Technical Substitution ($MRTS$)
> 2. Express as: $\displaystyle \sigma = \frac{\% \Delta (K/L)}{\% \Delta MRTS}$
> 3. Convert percentage changes to log-differentials: $\displaystyle \sigma = \frac{d \ln(K/L)}{d \ln(MRTS)}$
>
> **Here's what's really going on:** $\sigma$ tells you how easily you can swap one input for another along an isoquant. High $\sigma$ means inputs are close substitutes; low $\sigma$ means they're more like complements. The log-derivative form makes $\sigma$ unit-free and symmetric — a nice mathematical trick.

$$\sigma = \frac{\% \Delta (K/L)}{\% \Delta MRTS} = \frac{d\ln(K/L)}{d\ln(MRTS)}$$

| Production Function | $\sigma$ | Pattern |
|:---|---:|:---|
| Linear (perfect substitutes): $q = aK + bL$ | $\infty$ | $MRTS$ constant |
| Cobb-Douglas: $q = AK^\alpha L^\beta$ | $1$ | Unitary (all CD, any $\alpha,\beta$) |
| CES: $q = [\alpha K^\rho + (1-\alpha)L^\rho]^{\gamma/\rho}$ | $1/(1-\rho)$ | Nests all three polar cases |
| Leontief (fixed proportions): $q = \min\{aK, bL\}$ | $0$ | $K/L$ fixed |

**CES derivation:**

> **Let's work through this step by step:**
> We start with the CES production function $q = [\alpha K^\rho + (1-\alpha)L^\rho]^{\gamma/\rho}$:
> 1. Compute $MP_L = \partial q/\partial L = \gamma (1-\alpha) L^{\rho-1} [\alpha K^\rho + (1-\alpha)L^\rho]^{\gamma/\rho - 1}$
> 2. Compute $MP_K = \partial q/\partial K = \gamma \alpha K^{\rho-1} [\alpha K^\rho + (1-\alpha)L^\rho]^{\gamma/\rho - 1}$
> 3. Take the ratio: $\displaystyle MRTS_{L,K} = \frac{MP_L}{MP_K} = \frac{1-\alpha}{\alpha} \left(\frac{K}{L}\right)^{1-\rho}$
>
> **Here's what's really going on:** The MRTS for a CES function depends only on the capital-labor ratio $(K/L)$ and the substitution parameter $\rho$. When $\rho$ is large (close to 1), MRTS responds strongly to changes in $K/L$, meaning you can substitute easily.

$$MRTS_{L,K} = \frac{MP_L}{MP_K} = \left(\frac{K}{L}\right)^{1-\rho}$$

> **Let's work through this step by step:**
> Continuing from the CES MRTS expression:
> 1. Take natural logs: $\ln(MRTS) = \ln\left(\frac{1-\alpha}{\alpha}\right) + (1-\rho)\ln\left(\frac{K}{L}\right)$
> 2. Solve for $\ln(K/L)$:
  $\displaystyle \ln\left(\frac{K}{L}\right) = \frac{1}{1-\rho}\ln(MRTS) - \frac{1}{1-\rho}\ln\left(\frac{1-\alpha}{\alpha}\right)$
>
> **Here's what's really going on:** The log-linear relationship between $K/L$ and $MRTS$ reveals that $(1-\rho)$ is the elasticity of $MRTS$ with respect to the input ratio — a clean, interpretable result.

$$\ln(MRTS) = (1-\rho)\ln\left(\frac{K}{L}\right) \;\Rightarrow\; \ln\left(\frac{K}{L}\right) = \frac{1}{1-\rho}\ln(MRTS)$$

> **Let's work through this step by step:**
> From the log-linearized MRTS expression:
> 1. The elasticity of substitution is $\sigma = \partial \ln(K/L) / \partial \ln(MRTS)$
> 2. Differentiate: $\displaystyle \frac{\partial \ln(K/L)}{\partial \ln(MRTS)} = \frac{1}{1-\rho}$
> 3. Hence $\displaystyle \sigma = \frac{1}{1-\rho}$
>
> **Here's what's really going on:** For the CES function, $\sigma$ is constant and fully pinned down by the single parameter $\rho$. When $\rho = 0$, $\sigma = 1$ (Cobb-Douglas); when $\rho = 1$, $\sigma = \infty$ (linear/perfect substitutes); as $\rho \to -\infty$, $\sigma \to 0$ (Leontief/fixed proportions).

$$\sigma = \frac{\partial \ln(K/L)}{\partial \ln(MRTS)} = \frac{1}{1-\rho}$$

**Polar cases of CES:**

| $\rho$ | $\sigma = 1/(1-\rho)$ | Limit |
|:---:|:---:|---|
| $\rho = 1$ | $\infty$ | Linear (perfect substitutes) |
| $\rho \to 0$ | $1$ | Cobb-Douglas |
| $\rho \to -\infty$ | $0$ | Leontief |

> **Reference — Munoz-Garcia ([Ch.4]):** The CES function $q = [\alpha K^\rho + (1-\alpha)L^\rho]^{\gamma/\rho}$ nests all three canonical production functions through the elasticity parameter $\sigma = 1/(1-\rho)$:
>
> **1. $\rho \to 0$ (Cobb-Douglas limit):** Apply L'Hôpital's rule to $\ln q = \frac{\gamma}{\rho} \ln[\alpha K^\rho + (1-\alpha)L^\rho]$. As $\rho \to 0$, both numerator and denominator go to 0. Differentiating numerator and denominator with respect to $\rho$:
>
> > **Let's work through this step by step:**
> > Starting from $\ln q = \frac{\gamma}{\rho} \ln[\alpha K^\rho + (1-\alpha)L^\rho]$ as $\rho \to 0$:
> > 1. Both numerator and denominator $\to 0$, so apply L'Hopital's rule: differentiate w.r.t. $\rho$
> > 2. Numerator derivative: $\frac{d}{d\rho} \ln[\alpha K^\rho + (1-\alpha)L^\rho] = \frac{\alpha K^\rho \ln K + (1-\alpha)L^\rho \ln L}{\alpha K^\rho + (1-\alpha)L^\rho}$
> > 3. Denominator derivative: $\frac{d}{d\rho} \rho = 1$
> > 4. As $\rho \to 0$, $K^\rho \to 1$ and $L^\rho \to 1$, giving: $\displaystyle \lim_{\rho \to 0} \ln q = \gamma \cdot \frac{\alpha \ln K + (1-\alpha)\ln L}{\alpha + (1-\alpha)} = \ln(K^\alpha L^{1-\alpha})^\gamma$
>
> > $$\lim_{\rho \to 0} \ln q = \gamma \cdot \frac{\alpha \ln K + (1-\alpha)\ln L}{\alpha + (1-\alpha)} = \ln(K^\alpha L^{1-\alpha})^\gamma$$
> >
> > Hence $q \to (K^\alpha L^{1-\alpha})^\gamma$ — the Cobb-Douglas form with $\sigma = 1$.
>
> **2. $\rho = 1$ (Linear limit):** When $\rho = 1$, $q = [\alpha K + (1-\alpha)L]^\gamma$, which is a linear function of $K$ and $L$ with $\sigma = \infty$. The isoquants are straight lines indicating perfect substitutability.
>
> **3. $\rho \to -\infty$ (Leontief limit):** As $\rho \to -\infty$, the term with the larger exponent dominates. For any $(K,L)$, if $K > L$, then $K^\rho$ dominates and $q \to \gamma K^{-}$ (where $K^-$ is the smaller input). Formally, $\lim_{\rho \to -\infty} [\alpha K^\rho + (1-\alpha)L^\rho]^{\gamma/\rho} = \min\{K, L\}^\gamma$, the Leontief function with $\sigma = 0$.

> **Reference — Koutsoyiannis ([Ch.3, pp.75-78]):** Koutsoyiannis emphasizes five key properties of the Cobb-Douglas function $X = b_0 L^{b_1} K^{b_2}$:
> 1. **Marginal products:** $MP_L = b_1(X/L) = b_1 \cdot AP_L$, $MP_K = b_2(X/K) = b_2 \cdot AP_K$ — marginal products are
  proportional to average products
> 2. **MRTS:** $MRS_{L,K} = (b_1/b_2)(K/L)$ — depends only on the capital-labor ratio
> 3. **Elasticity of substitution:** $\sigma = 1$ for all parameter values
> 4. **Factor intensity:** Measured by $b_1/b_2$ — higher ratio = more labor-intensive technique
> 5. **Efficiency parameter:** $b_0$ captures the efficiency of organization and entrepreneurship — two firms with identical
  $K, L, b_1, b_2$ but different $b_0$ have different efficiency levels

---

### 3.2 Cost Functions & Cost Minimization

**Why this matters for your exam:** Knowing the technology is one thing — but in exams (and in real life), what you actually need is the cost function. Almost every problem asks you to find the cheapest way to produce a given output. This section gives you the machinery: the Cost Minimization Problem, conditional factor demands, Shephard's lemma, and the workhorse Cobb-Douglas example you'll see again and again.

#### 3.2.1 The Cost Minimization Problem (CMP)

> **Let's work through this step by step:**
> We start with the definition of total cost $w \cdot z = \sum_i w_i z_i$:
> 1. The firm chooses input vector $z \geq 0$ to minimize expenditure $w \cdot z$
> 2. Subject to the constraint that output meets or exceeds target $q$: $f(z) \geq q$
> 3. Formally: $\displaystyle \min_{z \geq 0} \; w \cdot z \quad \text{s.t.} \quad f(z) \geq q$
>
> **Here's what's really going on:** The Cost Minimization Problem (CMP) is the mirror image of output maximization. You take input prices $w$ as given and ask: "What's the cheapest way to produce $q$ units?" This is the foundation for deriving conditional factor demands and the cost function.

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

> **Exam Tip:** Concavity in $w$ implies $\partial^2 c / \partial w_k^2 \leq 0$ → conditional factor demand slopes downward. This
  is the production analogue of the Slutsky matrix in consumer theory.

> **Reference — Munoz-Garcia ([Ch.4, §4.7]):** The matrix $D_w z(w,q) = D_w^2 c(w,q)$ captures the duality between cost function concavity and conditional factor demand properties. Since $c(w,q)$ is concave in $w$, its Hessian $D_w^2 c(w,q)$ is **symmetric and negative semidefinite (NSD)**. This yields three testable implications:
>
> **1. Own-price effects are non-positive:** $\partial z_k(w,q)/\partial w_k \leq 0$ for every input $k$. Here's the intuition: an increase in the price of input $k$ (e.g., higher wages) reduces the firm's demand for that input (less labor hired). This is the production analogue of the compensated (Hicksian) demand slope in consumer theory.
>
> **2. Cross-price effects are symmetric:** $\partial z_k(w,q)/\partial w_l = \partial z_l(w,q)/\partial w_k$ for any two inputs $k$ and $l$. This symmetry condition means the effect of a wage increase on capital demand equals the effect of a capital price increase on labor demand.
>
> **3. Euler's condition:** $D_w z(w,q) \cdot w = 0$ — the matrix multiplied by the price vector yields zero, reflecting homogeneity of degree zero in input prices. Consequently, $\sum_l w_l \cdot \partial z_k/\partial w_l = 0$.
>
> **Proof sketch:** From Shephard's lemma, $\partial c/\partial w_k = z_k$. Differentiating again gives $\partial^2 c/\partial w_k \partial w_l = \partial z_k/\partial w_l$. The Hessian $D_w^2 c(w,q)$ must be symmetric (by Young's theorem) and NSD (since $c$ is concave in $w$). The NSD property implies all principal minors alternate in sign, with first-order principal minors $\partial z_k/\partial w_k \leq 0$.

#### 3.2.3 Shephard's Lemma — Proof

If $c(w,q) = w \cdot z(w,q)$ is differentiable in $w$, then by the envelope theorem:

> **Let's work through this step by step:**
> We start from the cost function identity $c(w,q) = w \cdot z(w,q)$:
> 1. Differentiate w.r.t. $w_k$ using the product rule:
>    $\displaystyle \frac{\partial c(w,q)}{\partial w_k} = z_k(w,q) + \sum_j w_j \frac{\partial z_j}{\partial w_k}$
> 2. At the optimum, the first-order condition $w_j = \lambda MP_j$ holds, and the Envelope Theorem implies the summation term
  vanishes (re-optimization has zero first-order effect)
> 3. Therefore: $\displaystyle \frac{\partial c(w,q)}{\partial w_k} = z_k(w,q)$
>
> **Here's what's really going on:** A small increase in input price $w_k$ raises total cost by exactly the amount of input $k$ you were already using. Sure, you'll re-optimize (substitute away from the now-costlier input), but that re-optimization only has a second-order effect on cost — the envelope theorem says you can ignore it.

$$\frac{\partial c(w,q)}{\partial w_k} = z_k(w,q) + \sum_j w_j \frac{\partial z_j}{\partial w_k} = z_k(w,q)$$

The summation term vanishes at the optimum by the FOCs (first-order effect of price change on input choice is zero).

> **Reference — Munoz-Garcia ([Ch.4, §4.7]):** Shephard's lemma is a direct application of the duality theorem. The cost function $c(w,q)$ serves as the **support function** of the closed, convex set $\{z : w \cdot z = c(w,q)\}$ — the set of input combinations that are at least as costly as the cost-minimizing bundle $z(w,q)$.
>
> Formally, for a given output level $q$, define the set $S(q) = \{z \geq 0 : f(z) \geq q\}$. The cost function $c(w,q) = \min_{z \in S(q)} w \cdot z$ is the support function of $S(q)$. By the duality theorem, if $c(w,q)$ is differentiable at $w$, then:
>
> > **Let's work through this step by step:**
> > We start with the cost function as a support function:
> > 1. Define the feasible input set $S(q) = \{z \geq 0 : f(z) \geq q\}$
> > 2. The cost function $c(w,q) = \min_{z \in S(q)} w \cdot z$ is the support function of $S(q)$
> > 3. By the duality theorem for convex sets, if $c(w,q)$ is differentiable at $w$, the gradient gives the unique supporting
    hyperplane:
> >    $\displaystyle \frac{\partial c(w,q)}{\partial w_k} = z_k(w,q)$
>
> $$\frac{\partial c(w,q)}{\partial w_k} = z_k(w,q)$$
>
> This mirrors the consumer theory result where the expenditure function $e(p,u)$ is the support function of the Hicksian demand correspondence, yielding Shephard's lemma $h_k(p,u) = \partial e(p,u)/\partial p_k$.
>
> **Verification with Cobb-Douglas:** For $q = K^{1/2}L^{1/2}$, we derived $LRTC = 2\sqrt{wr} \cdot q$. Computing $\partial LRTC/\partial w = \sqrt{r/w} \cdot q = L(w,r,q)$ confirms Shephard's lemma. Similarly, $\partial LRTC/\partial r = \sqrt{w/r} \cdot q = K(w,r,q)$.
>
> **Here's the key connection:** This is the production analogue of $h_k(p,u) = \partial e(p,u)/\partial p_k$ in consumer theory. In both cases, the derivative of the minimum-value function (cost/expenditure) w.r.t. a price yields the compensated demand for that good.

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

> **Let's work through this step by step:**
> We start with the CMP with Cobb-Douglas technology $f(z_1, z_2) = z_1^\alpha z_2^\beta$:
> 1. Set up the minimization problem: minimize $w_1 z_1 + w_2 z_2$ subject to $z_1^\alpha z_2^\beta \geq q$
> 2. The Lagrangian method converts this constrained problem into an unconstrained one by incorporating the production
  constraint with a Lagrange multiplier $\lambda$
> 3. Solution proceeds through FOCs $\rightarrow$ tangency condition $\rightarrow$ substitution into constraint
>
> **Here's what's really going on:** This is the canonical Cobb-Douglas CMP — the one you'll practice until you can do it in your sleep. It gives you closed-form conditional factor demands and a log-linear cost function. That's why Cobb-Douglas is the workhorse of production theory.

$$\min_{z_1, z_2 \geq 0} \; w_1 z_1 + w_2 z_2 \quad \text{subject to} \quad z_1^\alpha z_2^\beta \geq q$$

**Step 1 — Lagrangian:** $\mathcal{L} = w_1 z_1 + w_2 z_2 + \lambda[q - z_1^\alpha z_2^\beta]$

**Step 2 — FOCs (interior solution):**

> **Let's work through this step by step:**
> We start with the Lagrangian $\mathcal{L} = w_1 z_1 + w_2 z_2 + \lambda[q - z_1^\alpha z_2^\beta]$:
> 1. Differentiate w.r.t. $z_1$:
  $\displaystyle \frac{\partial \mathcal{L}}{\partial z_1} = w_1 - \lambda \alpha z_1^{\alpha-1} z_2^\beta = 0$
> 2. Differentiate w.r.t. $z_2$:
  $\displaystyle \frac{\partial \mathcal{L}}{\partial z_2} = w_2 - \lambda \beta z_1^\alpha z_2^{\beta-1} = 0$
> 3. At the optimum, $w_1 = \lambda \alpha z_1^{\alpha-1} z_2^\beta$ and $w_2 = \lambda \beta z_1^\alpha z_2^{\beta-1}$
>
> **Here's what's really going on:** Each FOC sets input price $w_i$ equal to the marginal benefit of using that input — the Lagrange multiplier $\lambda$ times the marginal product $MP_i$. The multiplier $\lambda$ equals marginal cost $MC(q)$ in equilibrium.

$$\frac{\partial \mathcal{L}}{\partial z_1} = w_1 - \lambda \alpha z_1^{\alpha-1} z_2^\beta = 0, \qquad
\frac{\partial \mathcal{L}}{\partial z_2} = w_2 - \lambda \beta z_1^\alpha z_2^{\beta-1} = 0$$

**Step 3 — Tangency condition:** Dividing the two FOCs:

> **Let's work through this step by step:**
> We start with the two FOCs:
> 1. Divide the first FOC by the second:
  $\displaystyle \frac{w_1}{w_2} = \frac{\lambda \alpha z_1^{\alpha-1} z_2^\beta}{\lambda \beta z_1^\alpha z_2^{\beta-1}}$
> 2. Cancel $\lambda$ and simplify:
  $\displaystyle \frac{\alpha z_1^{\alpha-1} z_2^\beta}{\beta z_1^\alpha z_2^{\beta-1}} = \frac{\alpha z_2}{\beta z_1}$
> 3. Therefore: $\displaystyle \frac{w_1}{w_2} = \frac{\alpha z_2}{\beta z_1}$
>
> **Here's what's really going on:** The tangency condition equates the input price ratio $(w_1/w_2)$ to the MRTS ($\alpha z_2 / \beta z_1$). At the optimum, the slope of the isocost line equals the slope of the isoquant — a classic "picture worth a thousand words" result.

$$\frac{w_1}{w_2} = \frac{\alpha z_1^{\alpha-1} z_2^\beta}{\beta z_1^\alpha z_2^{\beta-1}} = \frac{\alpha z_2}{\beta z_1}$$

Solving for $z_2$: $z_2 = \frac{\beta}{\alpha} \cdot \frac{w_1}{w_2} \cdot z_1$

**Step 4 — Conditional factor demands:** Substitute into the production constraint:

> **Let's work through this step by step:**
> We start with the tangency condition $z_2 = \frac{\beta}{\alpha} \cdot \frac{w_1}{w_2} \cdot z_1$:
> 1. Substitute $z_2$ into the production constraint $q = z_1^\alpha z_2^\beta$:
>    $q = z_1^\alpha \left(\frac{\beta}{\alpha} \cdot \frac{w_1}{w_2} \cdot z_1\right)^\beta$
> 2. Combine terms: $z_1^\alpha \cdot z_1^\beta = z_1^{\alpha+\beta}$ and separate the constant:
>    $q = z_1^{\alpha+\beta} \left(\frac{\beta w_1}{\alpha w_2}\right)^\beta$
>
> **Here's what's really going on:** This expresses the production constraint entirely in terms of $z_1$, letting us solve for the conditional factor demand $z_1(w,q)$.

$$q = z_1^\alpha \left(\frac{\beta}{\alpha} \cdot \frac{w_1}{w_2} \cdot z_1\right)^\beta = z_1^{\alpha+\beta} \left(\frac{\beta w_1}{\alpha w_2}\right)^\beta$$

> **Let's work through this step by step:**
> Continuing from $q = z_1^{\alpha+\beta} \left(\frac{\beta w_1}{\alpha w_2}\right)^\beta$:
> 1. Isolate $z_1^{\alpha+\beta}$: $z_1^{\alpha+\beta} = q \left(\frac{\beta w_1}{\alpha w_2}\right)^{-\beta}$
> 2. Simplify: $z_1^{\alpha+\beta} = q \left(\frac{\alpha w_2}{\beta w_1}\right)^{\beta}$
> 3. Take the $(\alpha+\beta)$-th root:
>    $\displaystyle z_1(w,q) = \left(\frac{\alpha w_2}{\beta w_1}\right)^{\beta/(\alpha+\beta)} \cdot q^{1/(\alpha+\beta)}$
>
> **Here's what's really going on:** The conditional factor demand for $z_1$ depends on relative input prices (the bracketed term) and the output level $q$. It decreases in its own price $w_1$ and increases in output — exactly what you'd expect.

$$z_1(w,q) = \left(\frac{\alpha w_2}{\beta w_1}\right)^{\beta/(\alpha+\beta)} \cdot q^{1/(\alpha+\beta)}$$

Similarly:

> **Let's work through this step by step:**
> From the tangency condition, $z_2 = \frac{\beta}{\alpha} \cdot \frac{w_1}{w_2} \cdot z_1$:
> 1. Substitute the solution for $z_1(w,q)$:
>    $\displaystyle z_2 = \frac{\beta}{\alpha} \cdot \frac{w_1}{w_2} \cdot \left(\frac{\alpha w_2}{\beta
  w_1}\right)^{\beta/(\alpha+\beta)} \cdot q^{1/(\alpha+\beta)}$
> 2. Simplify powers of $w_1$, $w_2$, $\alpha$, $\beta$:
>    $\displaystyle z_2(w,q) = \left(\frac{\beta w_1}{\alpha w_2}\right)^{\alpha/(\alpha+\beta)} \cdot q^{1/(\alpha+\beta)}$
>
> **Here's what's really going on:** By symmetry, $z_2$ is decreasing in its own price $w_2$ and increasing in the cross-price $w_1$ (substitution effect) and output $q$.

$$z_2(w,q) = \left(\frac{\beta w_1}{\alpha w_2}\right)^{\alpha/(\alpha+\beta)} \cdot q^{1/(\alpha+\beta)}$$

**Step 5 — Cost function:**

> **Let's work through this step by step:**
> We start with $c(w,q) = w_1 z_1(w,q) + w_2 z_2(w,q)$:
> 1. Substitute the conditional factor demands:
>    $\displaystyle c = w_1 \left(\frac{\alpha w_2}{\beta w_1}\right)^{\beta/(\alpha+\beta)} q^{1/(\alpha+\beta)} + w_2
  \left(\frac{\beta w_1}{\alpha w_2}\right)^{\alpha/(\alpha+\beta)} q^{1/(\alpha+\beta)}$
> 2. Combine powers of $w_1$ and $w_2$:
>    $\displaystyle c = w_1^{\alpha/(\alpha+\beta)} w_2^{\beta/(\alpha+\beta)} q^{1/(\alpha+\beta)} \cdot K$
>    where
  $K \equiv \left(\frac{\alpha}{\beta}\right)^{\beta/(\alpha+\beta)} + \left(\frac{\beta}{\alpha}\right)^{\alpha/(\alpha+\beta)}$ is a constant
>
> **Here's what's really going on:** The Cobb-Douglas cost function is multiplicative in input prices. The exponent on each input price equals its production exponent share of total factor returns — a beautiful symmetry.

$$c(w,q) = w_1 z_1(w,q) + w_2 z_2(w,q) = w_1^{\alpha/(\alpha+\beta)} w_2^{\beta/(\alpha+\beta)} q^{1/(\alpha+\beta)} \cdot K$$

where
$K \equiv \left(\frac{\alpha}{\beta}\right)^{\beta/(\alpha+\beta)} + \left(\frac{\beta}{\alpha}\right)^{\alpha/(\alpha+\beta)}$ is a constant.

**Step 6 — Verify Shephard's Lemma:**

> **Let's work through this step by step:**
> We start with $c(w,q) = w_1^{\alpha/(\alpha+\beta)} w_2^{\beta/(\alpha+\beta)} q^{1/(\alpha+\beta)} \cdot K$:
> 1. Differentiate w.r.t. $w_1$:
  $\displaystyle \frac{\partial c}{\partial w_1} = \frac{\alpha}{\alpha+\beta} w_1^{\alpha/(\alpha+\beta)-1} w_2^{\beta/(\alpha+\beta)} q^{1/(\alpha+\beta)} \cdot K$
> 2. Note that $c(w,q)/w_1 = w_1^{\alpha/(\alpha+\beta)-1} w_2^{\beta/(\alpha+\beta)} q^{1/(\alpha+\beta)} \cdot K$
> 3. Therefore: $\displaystyle \frac{\partial c}{\partial w_1} = \frac{\alpha}{\alpha+\beta} \cdot \frac{c(w,q)}{w_1}$
> 4. But from $z_1(w,q)$: $\frac{\alpha}{\alpha+\beta} \cdot \frac{c}{w_1} = z_1(w,q)$ $\checkmark$
>
> **Here's what's really going on:** This confirms Shephard's lemma: the derivative of the cost function w.r.t. $w_1$ recovers the conditional factor demand $z_1(w,q)$. The checkmark means our derivation is internally consistent.

$$\frac{\partial c(w,q)}{\partial w_1} = \frac{\alpha}{\alpha+\beta} \cdot \frac{c(w,q)}{w_1} = z_1(w,q) \quad \checkmark$$

> **Let's work through this step by step:**
> By symmetry with the $w_1$ verification:
> 1.
  $\displaystyle \frac{\partial c}{\partial w_2} = \frac{\beta}{\alpha+\beta} w_1^{\alpha/(\alpha+\beta)} w_2^{\beta/(\alpha+\beta)-1} q^{1/(\alpha+\beta)} \cdot K$
> 2. Since $c/w_2 = w_1^{\alpha/(\alpha+\beta)} w_2^{\beta/(\alpha+\beta)-1} q^{1/(\alpha+\beta)} \cdot K$
> 3. $\displaystyle \frac{\partial c}{\partial w_2} = \frac{\beta}{\alpha+\beta} \cdot \frac{c(w,q)}{w_2} = z_2(w,q)$ $\checkmark$
>
> **Here's what's really going on:** Both cross-verifications confirm the internal consistency of the Cobb-Douglas CMP solution. The cost function exponents $\alpha/(\alpha+\beta)$ and $\beta/(\alpha+\beta)$ are the cost shares of each input.

$$\frac{\partial c(w,q)}{\partial w_2} = \frac{\beta}{\alpha+\beta} \cdot \frac{c(w,q)}{w_2} = z_2(w,q) \quad \checkmark$$

**Step 7 — Log-linear form:**

> **Let's work through this step by step:**
> We start with the Cobb-Douglas cost function
  $c(w,q) = w_1^{\alpha/(\alpha+\beta)} w_2^{\beta/(\alpha+\beta)} q^{1/(\alpha+\beta)} \cdot K$:
> 1. Take natural logs of both sides:
>    $\displaystyle \ln c = \frac{\alpha}{\alpha+\beta} \ln w_1 + \frac{\beta}{\alpha+\beta} \ln w_2 + \frac{1}{\alpha+\beta} \ln
  q + \ln K$
> 2. The exponents become coefficients in a linear function of logarithms
>
> **Here's what's really going on:** The log-linear form is the foundation of the translog cost function, a flexible empirical specification widely used in industrial organization. The coefficients directly estimate the cost shares of each input and returns to scale ($1/(\alpha+\beta)$).

$$\ln c(w,q) = \frac{\alpha}{\alpha+\beta} \ln w_1 + \frac{\beta}{\alpha+\beta} \ln w_2 + \frac{1}{\alpha+\beta} \ln q + \ln K$$

The cost function is linear in the logs of output and input prices — a property exploited in the **translog cost function** used extensively in empirical industrial organization.

**Step 8 — Expansion path derivation:** The expansion path traces cost-minimizing $(z_1, z_2)$ combinations as $q$ varies, holding input prices constant. From the tangency condition:

> **Let's work through this step by step:**
> We start with the tangency condition $\frac{w_1}{w_2} = \frac{\alpha z_2}{\beta z_1}$:
> 1. Solve for $z_2$ in terms of $z_1$:
>    $\displaystyle z_2 = \frac{\beta w_1}{\alpha w_2} \cdot z_1$
> 2. Since $w_1, w_2, \alpha, \beta$ are all constants, this is a linear relationship through the origin
>
> **Here's what's really going on:** The expansion path is a ray from the origin — the optimal input ratio $z_2/z_1$ is constant at $(\beta w_1)/(\alpha w_2)$ for ALL output levels. This is the homothetic property of Cobb-Douglas: the input mix is independent of scale.

$$z_2 = \frac{\beta w_1}{\alpha w_2} \cdot z_1$$

Since $w_1, w_2, \alpha, \beta$ are constants, the expansion path is a **straight line through the origin**. The $z_2/z_1$ ratio is fixed at $(\beta w_1)/(\alpha w_2)$ for all output levels. This linear expansion path reflects the **homothetic** nature of the Cobb-Douglas production function — the input mix is independent of the scale of production.

---

### 3.3 Profit Maximization

**Why this matters for your exam:** Cost minimization tells you how to produce efficiently — but profit maximization tells you how much to produce. This is the firm's ultimate goal, and it's where we get the supply curve, Hotelling's lemma, and the key result that supply always slopes upward. If you understand this section, you've mastered the core of producer theory.

#### 3.3.1 Profit Function

> **Let's work through this step by step:**
> We start with the definition of profit $\pi = p \cdot y$:
> 1. The firm chooses a production plan $y \in \mathbb{R}^L$ from the feasible set $Y$
> 2. Subject only to technological feasibility: $y \in Y$
> 3. The profit function is the maximum value: $\displaystyle \pi(p) = \max_{y \in Y} p \cdot y$
>
> **Here's what's really going on:** Unlike consumer optimization (which has a budget constraint), the firm faces no resource constraint — only technological constraints. That's why the profit function has no wealth effects, leading to the rock-solid Law of Supply (supply curves always slope upward).

$$\pi(p) = \max_{y \in Y} p \cdot y$$

**Properties** (given $Y$ closed and satisfying free disposal):

| Property | Meaning |
|----------|---------|
| 1. **HD(1) in $p$** | $\pi(\lambda p) = \lambda \pi(p)$ |
| 2. **Convex in $p$** | $\pi(\alpha p + (1-\alpha)p') \leq \alpha \pi(p) + (1-\alpha)\pi(p')$ |
| 3. **Hotelling's Lemma** | $\partial \pi(p)/\partial p_k = y_k(p)$ |
| 4. **Law of Supply** | $\partial y_k(p)/\partial p_k \geq 0$ |

**Proof of convexity:** For any $p, p'$ and $\alpha \in [0,1]$, let $\bar p = \alpha p + (1-\alpha)p'$:

> **Let's work through this step by step:**
> We start with the definition of convexity: for $p, p'$ and $\alpha \in [0,1]$, let $\bar p = \alpha p + (1-\alpha)p'$:
> 1. Write $\pi(\bar p) = \bar p \cdot y(\bar p)$ where $y(\bar p)$ is the profit-maximizing supply at $\bar p$
> 2. Expand: $\pi(\bar p) = \alpha[p \cdot y(\bar p)] + (1-\alpha)[p' \cdot y(\bar p)]$
> 3. Since $y(\bar p)$ is feasible but not necessarily optimal at $p$ or $p'$:
>    $p \cdot y(\bar p) \leq \pi(p)$ and $p' \cdot y(\bar p) \leq \pi(p')$
> 4. Therefore: $\pi(\bar p) \leq \alpha \pi(p) + (1-\alpha)\pi(p')$
>
> **Here's what's really going on:** The profit function is convex in prices because you benefit more from extreme prices than from a muddled average. When output prices are high, you expand production; when input prices are low, you hire aggressively. A convex combination of price vectors prevents you from fully exploiting either favorable scenario.

$$\pi(\bar p) = \bar p \cdot y(\bar p) = \alpha[p \cdot y(\bar p)] + (1-\alpha)[p' \cdot y(\bar p)] \leq \alpha \pi(p) + (1-\alpha)\pi(p')$$

since $p \cdot y(\bar p) \leq \pi(p)$ by definition of $\pi(p)$ as maximum.

> **Exam Tip:** Profit function is **convex** (not concave!) in prices. Cost function is **concave** in input prices. Don't confuse them.

> **Reference — Munoz-Garcia ([Ch.4, §4.4]):** The profit function $\pi(p)$ can be understood as the **support function** of the negative production set $-Y$:
>
> > **Let's work through this step by step:**
> > We start with the definition of the support function of a convex set:
> > 1. The negative production set $-Y = \{-y : y \in Y\}$ is convex (if $Y$ satisfies convexity and free disposal)
> > 2. The support function of $-Y$ is $\displaystyle \mu_{-Y}(p) = \min_{y \in Y} \{ p \cdot (-y) \} = -\max_{y \in Y} \{ p \cdot y \}$
> > 3. But $\max_{y \in Y} \{ p \cdot y \} = \pi(p)$, hence $\mu_{-Y}(p) = \pi(p)$
>
> $$\pi(p) = \mu_{-Y}(p) = \min_{y \in Y} \{ p \cdot (-y) \} = \max_{y \in Y} \{ p \cdot y \}$$
>
> As a support function of a convex set, $\pi(p)$ is **convex in prices**. This representation yields a dual characterization of the production set:
>
> > **Let's work through this step by step:**
> > We start with the support-function representation of the profit function:
> > 1. For any feasible production plan $y \in Y$, profit at prices $p$ cannot exceed $\pi(p)$: $p \cdot y \leq \pi(p)$
> > 2. Conversely, if a plan $y$ satisfies $p \cdot y \leq \pi(p)$ for ALL positive price vectors $p \gg 0$, then $y$ must be feasible
> > 3. Therefore: $\displaystyle Y = \{ y \in \mathbb{R}^L : p \cdot y \leq \pi(p) \text{ for all } p \gg 0 \}$
>
> $$Y = \{ y \in \mathbb{R}^L : p \cdot y \leq \pi(p) \text{ for all } p \gg 0 \}$$
>
> **Here's the economic intuition for convexity:** You benefit more from extreme price vectors than from balanced ones. Consider two price scenarios $p$ (high output price, low input price) and $p'$ (low output price, high input price). Under $p$, you produce aggressively; under $p'$, you scale back. A convex combination $\bar p = \alpha p + (1-\alpha)p'$ represents "muddled" prices where you cannot fully exploit either favorable scenario. Hence $\pi(\bar p) \leq \alpha\pi(p) + (1-\alpha)\pi(p')$.
>
> **Contrast with cost function:** The cost function $c(w,q)$ is **concave** in input prices $w$ because when input prices fluctuate, you can adjust your input mix toward relatively cheaper inputs — substitution mitigates cost increases. The profit function, by contrast, is **convex** in output prices because you can expand output when prices rise (no budget constraint limits this expansion).

#### 3.3.2 Hotelling's Lemma — Envelope Theorem Proof

> **Let's work through this step by step:**
> We start with the profit function identity $\pi(p) = p \cdot y(p)$:
> 1. Differentiate w.r.t. $p_k$ using the product rule:
>    $\displaystyle \frac{\partial \pi(p)}{\partial p_k} = y_k(p) + \sum_j p_j \frac{\partial y_j}{\partial p_k}$
> 2. At the optimum, the Envelope Theorem applies: the summation term $\sum_j p_j (\partial y_j/\partial p_k) = 0$ because $y(p)$
  was chosen to maximize $p \cdot y$
> 3. Hence: $\displaystyle \frac{\partial \pi(p)}{\partial p_k} = y_k(p)$
>
> **Here's what's really going on:** A \$1 increase in the price of output $k$ raises profit by exactly $y_k$ — the amount of output $k$ you produce. Any adjustment to the production plan has only a second-order effect on profit (that's the envelope condition at work).

$$\pi(p) = p \cdot y(p)$$

Apply the envelope theorem:

> **Let's work through this step by step:**
> Applying the envelope theorem directly to $\pi(p) = \max_{y \in Y} p \cdot y$:
> 1. At the optimum, fix the supply vector at $y = y(p)$
> 2. Differentiate the maximand w.r.t. $p_k$ while holding $y$ constant:
>    $\displaystyle \frac{\partial \pi(p)}{\partial p_k} = \left. \frac{\partial}{\partial p_k} (p \cdot y) \right|_{y = y(p)} =
  y_k(p)$
> 3. The envelope theorem guarantees that ignoring the endogenous response of $y(p)$ yields the correct derivative
>
> **Here's what's really going on:** The envelope theorem simplifies derivative calculations: differentiate the objective (not the value function) while holding the choice variables fixed at their optimal values. This eliminates the need to solve for $\partial y_j/\partial p_k$.

$$\frac{\partial \pi(p)}{\partial p_k} = \left. \frac{\partial}{\partial p_k} (p \cdot y) \right|_{y = y(p)} = y_k(p)$$

**Economic intuition:** A \$1 increase in output price $k$ raises profit by exactly the amount of output $k$ produced, because you're already optimizing — any adjustment would only have a second-order effect.

> **Reference — Munoz-Garcia ([Ch.4, §4.4]):** Hotelling's lemma is an immediate application of the duality theorem from consumer theory. Since $\pi(p) = \max_{y \in Y} p \cdot y$ is the support function of $Y$, by the duality theorem, if the supply correspondence $y(p)$ is single-valued, then $\pi(p)$ is differentiable at $p$ and:
>
> > **Let's work through this step by step:**
> > We start with the profit function as support function $\pi(p) = \max_{y \in Y} p \cdot y$:
> > 1. By the duality theorem for convex sets, if the supply correspondence $y(p)$ is single-valued, $\pi(p)$ is differentiable at $p$ and:
> >    $\nabla_p \pi(p) = y(p)$
> > 2. Component-wise: $\displaystyle \frac{\partial \pi(p)}{\partial p_k} = y_k(p)$
> > 3. The Hessian $D^2\pi(p) = Dy(p)$ is symmetric positive semidefinite (since $\pi$ is convex), giving the Law of Supply
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

> **Let's work through this step by step:**
> We start with the transformation frontier $F(q_x, q_y, z) = 0$:
> 1. Total differentiate along the frontier:
  $\displaystyle \frac{\partial F}{\partial q_x} dq_x + \frac{\partial F}{\partial q_y} dq_y = 0$
> 2. Solve for $dq_y/dq_x$: $\displaystyle -\frac{dq_y}{dq_x} = \frac{\partial F/\partial q_x}{\partial F/\partial q_y}$
> 3. By definition, $MRPT_{x,y} \equiv -\frac{dq_y}{dq_x}$ along $F=0$
> 4. Therefore: $\displaystyle MRPT_{x,y} = \frac{\partial F/\partial q_x}{\partial F/\partial q_y}$
>
> **Here's what's really going on:** The MRPT measures the rate at which you must reduce one output to increase another, given fixed inputs — the "opportunity cost" of producing good $x$ in terms of good $y$.

$$\frac{\partial F}{\partial q_x} dq_x + \frac{\partial F}{\partial q_y} dq_y = 0 \;\Rightarrow\; MRPT_{x,y} = -\frac{dq_y}{dq_x} = \frac{\partial F/\partial q_x}{\partial F/\partial q_y}$$

Profit function: $\pi = p_x q_x + p_y q_y - c(q_x, q_y)$. FOCs: $p_x = MC_x$, $p_y = MC_y$.

Tangency condition of PMP: $MRPT_{x,y} = p_x/p_y$. Substituting:

> **Let's work through this step by step:**
> We start with the profit function $\pi = p_x q_x + p_y q_y - c(q_x, q_y)$:
> 1. FOCs: $\partial \pi/\partial q_x = p_x - MC_x = 0 \Rightarrow p_x = MC_x$
>    Similarly $p_y = MC_y$
> 2. The profit-maximizing tangency condition along the PPF requires $MRPT_{x,y} = p_x/p_y$
> 3. Substituting the FOCs: $\displaystyle MRPT_{x,y} = \frac{p_x}{p_y} = \frac{MC_x}{MC_y}$
>
> **Here's what's really going on:** In competitive equilibrium, the rate at which the economy transforms good $x$ into good $y$ (MRPT) equals the price ratio, which in turn equals the marginal cost ratio. This is the product-mix efficiency condition.

$$MRPT_{x,y} = \frac{p_x}{p_y} = \frac{MC_x}{MC_y}$$

**GE connection:** In competitive equilibrium, $MRPT = MC_x/MC_y = p_x/p_y = MRS$ — this chain of equalities is the **product-mix efficiency** condition for Pareto optimality.

> **Reference — Munoz-Garcia ([Ch.6, §6.4-6.5]):** In the two-consumer, two-firm, two-factor (2×2×2) general equilibrium model, firm behavior feeds into the equilibrium through three channels:
>
> **1. First-order conditions from PMP:** Each firm $j$ hires capital and labor until the value of marginal product equals the factor price:
> > **Let's work through this step by step:**
> > We start with the profit maximization problem for firm 1: $\max \pi_1 = p_1 F_1(K_1, L_1) - rK_1 - wL_1$:
> > 1. FOC w.r.t. $K_1$: $\displaystyle p_1 \frac{\partial F_1}{\partial K_1} - r = 0 \Rightarrow p_1 F_{1K} = r$
> > 2. FOC w.r.t. $L_1$: $\displaystyle p_1 \frac{\partial F_1}{\partial L_1} - w = 0 \Rightarrow p_1 F_{1L} = w$
> >
> > **Here's what's really going on:** You hire each factor until the value of its marginal product ($p_i \cdot MP_i$) equals the factor price ($r$ for capital, $w$ for labor).
>
> $$p_1 F_{1K} = r, \quad p_1 F_{1L} = w \quad \text{(firm 1 producing good 1)}$$
> > **Let's work through this step by step:**
> > By the same logic for firm 2: $\max \pi_2 = p_2 F_2(K_2, L_2) - rK_2 - wL_2$:
> > 1. FOC w.r.t. $K_2$: $p_2 F_{2K} = r$
> > 2. FOC w.r.t. $L_2$: $p_2 F_{2L} = w$
>
> $$p_2 F_{2K} = r, \quad p_2 F_{2L} = w \quad \text{(firm 2 producing good 2)}$$
>
> **2. Factor market equilibrium:** Combining firms' FOCs yields the equality of MRTS across firms:
> > **Let's work through this step by step:**
> > We start with the FOCs for both firms:
> > 1. For firm 1: $p_1 F_{1K} = r$ and $p_1 F_{1L} = w$ $\rightarrow$ $\displaystyle \frac{w}{r} = \frac{F_{1L}}{F_{1K}}$
> > 2. For firm 2: $p_2 F_{2K} = r$ and $p_2 F_{2L} = w$ $\rightarrow$ $\displaystyle \frac{w}{r} = \frac{F_{2L}}{F_{2K}}$
> > 3. The $(w/r)$ ratio is common, hence: $\displaystyle \frac{F_{1L}}{F_{1K}} = \frac{F_{2L}}{F_{2K}}$
> > 4. But $F_{iL}/F_{iK} \equiv MRTS^i_{L,K}$, therefore: $\displaystyle MRTS^1_{L,K} = \frac{w}{r} = MRTS^2_{L,K}$
> >
> > **Here's what's really going on:** In equilibrium, both firms face the same factor prices, so their MRTS are equalized. This is the production efficiency condition — factors cannot be reallocated to increase total output.
>
> $$MRTS^1_{L,K} = \frac{w}{r} = MRTS^2_{L,K}$$
> This is the **efficient factor allocation** condition — factors cannot be reallocated between firms to increase total output.
>
> **3. Product-mix efficiency:** Dividing the FOCs for each firm yields:
> > **Let's work through this step by step:**
> > We start with each firm's FOCs:
> > 1. For firm 1: $p_1 F_{1K} = r$ and $p_1 F_{1L} = w$
> > 2. For firm 2: $p_2 F_{2K} = r$ and $p_2 F_{2L} = w$
> > 3. Dividing firm 2's FOCs by firm 1's:
> >    $\displaystyle \frac{p_2}{p_1} \cdot \frac{F_{2K}}{F_{1K}} = 1 \quad\Rightarrow\quad \frac{p_1}{p_2} = \frac{F_{2K}}{F_{1K}}$
> >    $\displaystyle \frac{p_2}{p_1} \cdot \frac{F_{2L}}{F_{1L}} = 1 \quad\Rightarrow\quad \frac{p_1}{p_2} = \frac{F_{2L}}{F_{1L}}$
> > 4. Therefore: $\displaystyle \frac{p_1}{p_2} = \frac{F_{2K}}{F_{1K}} = \frac{F_{2L}}{F_{1L}} \equiv MRT_{1,2}$
>
> $$\frac{p_1}{p_2} = \frac{F_{2K}}{F_{1K}} = \frac{F_{2L}}{F_{1L}} \equiv MRT_{1,2}$$
> Together with consumer optimization $(MRS = p_1/p_2)$, we obtain:
> > **Let's work through this step by step:**
> > Combining the three efficiency conditions:
> > 1. Consumption efficiency: $MRS^i_{1,2} = p_1/p_2$ from consumer utility maximization (both consumers face same prices)
> > 2. Product-mix efficiency: $MRT_{1,2} = p_1/p_2$ from producer profit maximization
> > 3. Hence: $\displaystyle MRS^i_{1,2} = MRT_{1,2} = \frac{p_1}{p_2}$
> >
> > **Here's what's really going on:** This chain of equalities is the First Welfare Theorem with production — a competitive equilibrium achieves Pareto optimality. The rate at which consumers are willing to trade goods (MRS) equals the rate at which the economy can transform one good into another (MRT).
>
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

> **Let's work through this step by step:**
> We start with the transformation function $F(y)$:
> 1. $MRPT_{k,l}(y)$ measures the rate at which output $l$ must be reduced to increase output $k$
> 2. From total differentiation of $F(y)=0$:
  $\displaystyle \frac{dy_l}{dy_k} = -\frac{\partial F/\partial y_k}{\partial F/\partial y_l}$
> 3. By definition $MRPT_{k,l} = -\frac{dy_l}{dy_k} = \frac{\partial F/\partial y_k}{\partial F/\partial y_l}$
> 4. From profit maximization $p_k = MC_k$ and $p_l = MC_l$, with tangency $MRPT = p_k/p_l$
> 5. Therefore: $\displaystyle MRPT_{k,l} = \frac{MC_k}{MC_l}$
>
> **Here's what's really going on:** The MRPT equals the ratio of marginal costs — the opportunity cost of producing one more unit of good $k$ is the marginal cost of $k$ relative to $l$.

$$MRPT_{k,l}(y) = \frac{\partial F(y)/\partial y_k}{\partial F(y)/\partial y_l} = -\frac{dy_l}{dy_k} = \frac{MC_k}{MC_l}$$

**Derivation of MRPT = MC ratio:** Along $F(y)=0$, total differentiate:
$dF = (\partial F/\partial y_k)dy_k + (\partial F/\partial y_l)dy_l = 0$.

> **Let's work through this step by step:**
> We start with the transformation frontier $F(q_x, q_y, z) = 0$:
> 1. Total differentiate holding $z$ fixed: $dF = (\partial F/\partial q_k)dq_k + (\partial F/\partial q_l)dq_l = 0$
> 2. Rearranged: $\displaystyle \frac{dq_l}{dq_k} = -\frac{\partial F/\partial q_k}{\partial F/\partial q_l} \equiv -MRPT_{k,l}$
>
> **Here's what's really going on:** This is the same derivation as in Section 3.3.3, repeated here for completeness in the solved problem. The sign convention ensures MRPT is positive (increasing $q_k$ requires decreasing $q_l$ given fixed inputs).

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

> **Professor's Corner:** A top answer groups the 11 properties: (i) basic feasibility (1–4), (ii) physical constraints (3, 6),
  (iii) disposal (5), (iv) scalability (7–9), (v) aggregation (10), (vi) curvature (11).

</details>

---

<details>
<summary><strong>Q3.3 — Elasticity of Substitution for Key Production Functions</strong></summary>

**(i) Linear $q = aK + bL$:** $MRTS = b/a$ (constant) ⇒ $\sigma = \infty$.

**(ii) Leontief $q = \min\{aK, bL\}$:** $K/L$ fixed at $b/a$ ⇒ $\sigma = 0$.

**(iii) Cobb-Douglas $Q = AK^\alpha L^\beta$:**

> **Let's work through this step by step:**
> We start with the Cobb-Douglas production function $Q = AK^\alpha L^\beta$:
> 1. $MP_L = \partial Q/\partial L = \beta A K^\alpha L^{\beta-1} = \beta Q/L$
> 2. $MP_K = \partial Q/\partial K = \alpha A K^{\alpha-1} L^\beta = \alpha Q/K$
> 3. Take the ratio:
  $\displaystyle MRTS = \frac{MP_L}{MP_K} = \frac{\beta Q/L}{\alpha Q/K} = \frac{\beta}{\alpha} \cdot \frac{K}{L}$
>
> **Here's what's really going on:** The CD-MRTS is proportional to the capital-labor ratio $(K/L)$. The constant of proportionality $\beta/\alpha$ captures the relative importance of each input in production.

$$MRTS = \frac{MP_L}{MP_K} = \frac{\beta}{\alpha} \cdot \frac{K}{L}$$

Taking logs: $\ln(MRTS) = \ln(\beta/\alpha) + \ln(K/L)$ ⇒ $\ln(K/L) = \ln(MRTS) - \ln(\beta/\alpha)$

> **Let's work through this step by step:**
> Continuing from $MRTS = (\beta/\alpha)(K/L)$:
> 1. Take logs: $\ln(MRTS) = \ln(\beta/\alpha) + \ln(K/L)$
> 2. Differentiate: $\displaystyle \sigma = \frac{\partial \ln(K/L)}{\partial \ln(MRTS)} = 1$
> 3. Therefore $\sigma = 1$
>
> **Here's what's really going on:** ALL Cobb-Douglas production functions have unitary elasticity of substitution ($\sigma = 1$), regardless of the exponent values $\alpha$ and $\beta$. This is because the MRTS is exactly proportional to $K/L$.

$$\sigma = \frac{\partial \ln(K/L)}{\partial \ln(MRTS)} = 1$$

All Cobb-Douglas functions have $\sigma = 1$ regardless of $\alpha, \beta$.

**(iv) CES: $q = [\alpha K^\rho + (1-\alpha)L^\rho]^{\gamma/\rho}$:**

> **Let's work through this step by step:**
> We start with the CES production function $q = [\alpha K^\rho + (1-\alpha)L^\rho]^{\gamma/\rho}$:
> 1. The elasticity of substitution was derived earlier as $\sigma = 1/(1-\rho)$ (see CES derivation in Section 3.1.4)
> 2. This is a constant, independent of $K$, $L$, or output level $q$
>
> **Here's what's really going on:** The CES parameter $\rho$ determines substitutability. When $\rho \to 0$, $\sigma \to 1$ (Cobb-Douglas); $\rho = 1$ gives $\sigma = \infty$ (linear); $\rho \to -\infty$ gives $\sigma \to 0$ (Leontief).

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

> **Let's work through this step by step:**
> We start with the production function $q = \frac{4KL}{K+L}$:
> 1. This is a CRS production function known as the "CES with $\sigma = 1/2$"
> 2. To find $\sigma$, we first compute the marginal products, then the MRTS, then the log-derivative
> 3. The function is symmetric in $K$ and $L$ -- useful for checking derivations
>
> **Here's what's really going on:** This is a common exam production function because it yields a clean $\sigma = 1/2$ and demonstrates the step-by-step EoS derivation process.

$$q = \frac{4KL}{K+L}$$

> **Let's work through this step by step:**
> We start with $q = 4KL/(K+L)$:
> 1. Apply the quotient rule: $\partial q/\partial L = \frac{4K(K+L) - 4KL(1)}{(K+L)^2}$
> 2. Simplify numerator: $4K(K+L) - 4KL = 4K^2 + 4KL - 4KL = 4K^2$
> 3. Therefore: $\displaystyle MP_L = \frac{4K^2}{(K+L)^2}$
>
> **Here's what's really going on:** By symmetry, $MP_K$ will have the same form with $K$ and $L$ swapped. The marginal products are always positive, and each is increasing in the OTHER input (complementarity).

$$MP_L = \frac{\partial q}{\partial L} = \frac{4K(K+L) - 4KL}{(K+L)^2} = \frac{4K^2}{(K+L)^2}$$

> **Let's work through this step by step:**
> By symmetry with $MP_L$:
> 1. $\partial q/\partial K = \frac{4L(K+L) - 4KL(1)}{(K+L)^2}$
> 2. Simplify numerator: $4L(K+L) - 4KL = 4L^2$
> 3. Therefore: $\displaystyle MP_K = \frac{4L^2}{(K+L)^2}$
>
> **Here's what's really going on:** $MP_K$ depends positively on $L$, and $MP_L$ depends positively on $K$ -- reflecting the factor complementarity inherent in this production function.

$$MP_K = \frac{\partial q}{\partial K} = \frac{4L(K+L) - 4KL}{(K+L)^2} = \frac{4L^2}{(K+L)^2}$$

> **Let's work through this step by step:**
> Take the ratio of the two marginal products:
> 1. $\displaystyle MRTS = \frac{MP_L}{MP_K} = \frac{4K^2/(K+L)^2}{4L^2/(K+L)^2} = \frac{K^2}{L^2} = \left(\frac{K}{L}\right)^2$
>
> **Here's what's really going on:** The MRTS is the square of the capital-labor ratio. For this function, a doubling of $K/L$ quadruples the MRTS -- substitution becomes harder as the input ratio becomes more extreme, consistent with $\sigma = 1/2 < 1$.

$$MRTS = \frac{MP_L}{MP_K} = \frac{K^2}{L^2} = \left(\frac{K}{L}\right)^2$$

> **Let's work through this step by step:**
> From $MRTS = (K/L)^2$:
> 1. Take natural logs: $\ln(MRTS) = 2 \ln(K/L)$
> 2. Solve for $\ln(K/L)$: $\displaystyle \ln(K/L) = \frac{1}{2} \ln(MRTS)$
>
> **Here's what's really going on:** The log-linear relationship reveals the elasticity directly -- the coefficient relating $\ln(K/L)$ to $\ln(MRTS)$ is $1/2$, which will be the elasticity of substitution.

$$\ln(MRTS) = 2\ln\left(\frac{K}{L}\right) \;\Rightarrow\; \ln\left(\frac{K}{L}\right) = \frac12 \ln(MRTS)$$

> **Let's work through this step by step:**
> Continuing from $\ln(K/L) = \frac12 \ln(MRTS)$:
> 1. Differentiate: $\displaystyle \sigma = \frac{\partial \ln(K/L)}{\partial \ln(MRTS)} = \frac12$
>
> **Here's what's really going on:** $\sigma = 1/2$ means that a 1% increase in MRTS leads to only a 0.5% increase in $K/L$. Inputs are less substitutable than in Cobb-Douglas ($\sigma = 1$).

$$\sigma = \frac{\partial \ln(K/L)}{\partial \ln(MRTS)} = \frac12$$

**Correction:** $\sigma = 1/2$ for $q = 4KL/(K+L)$, not $2$ (the MRTS = $(K/L)^2$, so $\ln(K/L) = \frac12 \ln(MRTS)$).

</details>

---

<details>
<summary><strong>Q3.6 — HW3: Short-Run Production & Cost Functions (K=64)</strong></summary>

**(a) $q = K^{1/2}L^{1/2}$:** $q = 8L^{1/2}$, $L = q^2/64$, $SRTC = wq^2/64 + 64r$

**(b) $q = 2K + L$:** $q = 128 + L$, $L = q - 128$, $SRTC = w(q-128) + 64r$ (for $q \geq 128$)

**(c) $q = \frac{4KL}{K+L} = \frac{256L}{64+L}$:**

> **Let's work through this step by step:**
> We start with $q = 256L/(64+L)$ with $K=64$ fixed:
> 1. Multiply both sides: $q(64+L) = 256L$
> 2. Expand: $64q + qL = 256L$
> 3. Collect $L$ terms: $64q = 256L - qL = (256-q)L$
> 4. Solve for $L$: $L = 64q/(256-q)$
>
> **Here's what's really going on:** As $q$ approaches 256, the denominator goes to zero and labor becomes infinite -- this is the short-run capacity constraint with fixed capital. Each additional unit of output requires increasingly more labor.

$$q(64+L) = 256L \;\Rightarrow\; 64q + qL = 256L \;\Rightarrow\; 64q = (256 - q)L$$

> **Let's work through this step by step:**
> Continuing from $L = 64q/(256-q)$:
> 1. Short-run total cost: $SRTC = wL + r\bar K$
> 2. Substitute $L$: $\displaystyle SRTC = w\frac{64q}{256-q} + 64r$
>
> **Here's what's really going on:** The short-run cost function consists of variable cost ($w \cdot L(q, \bar K)$) plus fixed cost ($r\bar K$). With fixed capital, labor must increase more than proportionally to increase output, leading to rising marginal cost as output approaches capacity.

$$L = \frac{64q}{256 - q}, \quad SRTC = w\frac{64q}{256 - q} + 64r$$

**(d) $q = KL = 64L$:** $L = q/64$, $SRTC = wq/64 + 64r$

**(e) $q = \min(K, \frac12 L)$:** With $K=64$, two cases:

- If $64 < \frac12 L$ ($L > 128$): $q = 64$, $L = 128$, $SRTC = 128w + 64r$
- If $64 \geq \frac12 L$ ($L \leq 128$): $q = \frac12 L$, $L = 2q$, $SRTC = 2qw + 64r$

</details>

---

<details>
<summary><strong>Q3.7 — HW3: Expansion Paths</strong></summary>

The **expansion path** traces cost-minimizing input combinations as output varies, holding input prices constant. Condition:
$MRTS_{L,K} = w/r$.

**(a) $q = K^{1/2}L^{1/2}$:** $MRTS = K/L$. Tangency: $K/L = w/r \Rightarrow K = (w/r)L$.

**(b) $q = 2K + L$:** $MRTS = 1/2$ (constant). If $w/r < 1/2$ ⇒ use only $K$; if $w/r > 1/2$ ⇒ use only $L$; if $w/r = 1/2$ ⇒ any mix on isoquant.

**(c) $q = 4KL/(K+L)$:** $MRTS = (K/L)^2$. Tangency: $(K/L)^2 = w/r \Rightarrow K = \sqrt{w/r} \cdot L$.

**(d) $q = KL$:** $MRTS = K/L$. Tangency: $K/L = w/r \Rightarrow K = (w/r)L$.

**(e) $q = \min(K, \frac12 L)$:** Expansion path is the ray $K = \frac12 L$ (fixed proportions).

</details>

---

<details>
<summary><strong>Q3.8 — HW3: Cost-Minimizing Input Mix (w=2, v=8, q=100)</strong></summary>

**(a) $q = K^{1/2}L^{1/2}$:** Tangency: $K/L = 2/8 = 1/4 \Rightarrow L = 4K$. Substitute:
$100 = (K \cdot 4K)^{1/2} = 2K \Rightarrow K^* = 50$, $L^* = 200$.

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

> **Let's work through this step by step:**
> For $q = K^{1/2}L^{1/2}$ with tangency $K/L = w/r$:
> 1. From tangency: $K = (w/r)L$
> 2. Substitute into $q = ((w/r)L \cdot L)^{1/2} = (w/r)^{1/2} L$
> 3. Solve for $L$: $L^* = (r/w)^{1/2} q$
> 4. Then $K^* = (w/r)^{1/2} q$ from the tangency condition
>
> **Here's what's really going on:** For Cobb-Douglas with CRS (exponents sum to 1), the conditional factor demands are linear in $q$. The input ratio $K/L = w/r$ depends only on relative input prices.

$$q = ((w/r)L \cdot L)^{1/2} = (w/r)^{1/2} L \;\Rightarrow\; L^* = (r/w)^{1/2} q, \quad K^* = (w/r)^{1/2} q$$

> **Let's work through this step by step:**
> Substitute the conditional factor demands into total cost:
> 1. $LRTC = wL^* + rK^* = w(r/w)^{1/2} q + r(w/r)^{1/2} q$
> 2. Factor $q$: $= q[\sqrt{wr} + \sqrt{wr}] = 2\sqrt{wr} \cdot q$
>
> **Here's what's really going on:** LRTC is proportional to output $q$ with constant $MC = 2\sqrt{wr}$. Since the production function is CRS (exponents sum to 1), the cost function is linear in output.

$$LRTC = wL + rK = w(r/w)^{1/2} q + r(w/r)^{1/2} q = 2\sqrt{wr} \cdot q$$

**(b) $q = 2K + L$:** If $w/r < 1/2$: use only $K$ ⇒ $K^* = q/2$, $L^* = 0$, $LRTC = rq/2$.
If $w/r > 1/2$: use only $L$ ⇒ $K^* = 0$, $L^* = q$, $LRTC = wq$.
If $w/r = 1/2$: any mix works.

**(c) $q = 4KL/(K+L)$:** From tangency $K/L = \sqrt{w/r}$:

> **Let's work through this step by step:**
> For $q = 4KL/(K+L)$ with tangency $K/L = \sqrt{w/r}$:
> 1. From tangency: $K = \sqrt{w/r} \cdot L$ and $L = \sqrt{r/w} \cdot K$
> 2. Substitute into the production function and solve for each input:
>    $q = \frac{4KL}{K+L} \Rightarrow$ solving yields $L^* = \frac{q}{4}\left(1 + \sqrt{r/w}\right)^2$ and
  $K^* = \frac{q}{4}\left(1 + \sqrt{w/r}\right)^2$
>
> **Here's what's really going on:** These conditional factor demands are linear in $q$ (the function is CRS). The expressions are symmetric in $(w,r)$ -- swapping $w$ and $r$ swaps the $K$ and $L$ formulas.

$$L^* = \frac{q}{4}\left(1 + \sqrt{\frac{r}{w}}\right)^2, \quad K^* = \frac{q}{4}\left(1 + \sqrt{\frac{w}{r}}\right)^2$$

> **Let's work through this step by step:**
> Substitute the conditional factor demands into the cost function:
> 1. $LRTC = wL^* + rK^* = \frac{q}{4}\left[w\left(1+\sqrt{r/w}\right)^2 + r\left(1+\sqrt{w/r}\right)^2\right]$
>
> **Here's what's really going on:** This simplifies to a linear function of $q$. While the expression looks complex, it reflects the underlying CRS technology -- total cost is proportional to output.

$$LRTC = wL^* + rK^* = \frac{q}{4}\left[w\left(1+\sqrt{\frac{r}{w}}\right)^2 + r\left(1+\sqrt{\frac{w}{r}}\right)^2\right]$$

**(d) $q = KL$:** From $K/L = w/r \Rightarrow L = (r/w)K$:

> **Let's work through this step by step:**
> For $q = KL$ with tangency $K/L = w/r$:
> 1. From tangency: $L = (r/w)K$
> 2. Substitute into $q = K \cdot (r/w)K = (r/w)K^2$
> 3. Solve: $K^* = \sqrt{(w/r)q}$ and $L^* = \sqrt{(r/w)q}$
>
> **Here's what's really going on:** With IRS (sum of exponents = 2), conditional factor demands are concave in $q$ -- doubling output requires less than double the inputs.

$$q = K \cdot (r/w)K = (r/w)K^2 \;\Rightarrow\; K^* = \sqrt{\frac{w}{r} q}, \quad L^* = \sqrt{\frac{r}{w} q}$$

> **Let's work through this step by step:**
> Substitute the conditional factor demands:
> 1. $LRTC = w \cdot \sqrt{(r/w)q} + r \cdot \sqrt{(w/r)q}$
> 2. Simplify: $= \sqrt{wr q} + \sqrt{wr q} = 2\sqrt{wr q}$
>
> **Here's what's really going on:** $LRTC$ is concave in $q$ (since $q$ enters under a square root), reflecting IRS. This is the key distinguishing feature from the CRS case where cost was linear in $q$.

$$LRTC = w\sqrt{\frac{r}{w} q} + r\sqrt{\frac{w}{r} q} = 2\sqrt{wr q}$$

**(e) $q = \min(K, \frac12 L)$:** $K^* = q$, $L^* = 2q$, $LRTC = w \cdot 2q + r \cdot q = q(2w + r)$.

</details>

---

<details>
<summary><strong>Q3.10 — Sausage Maker (Leontief Production) — Exam: Batch 48 Q4</strong></summary>

**Problem:** 3 oz pork + 2 oz veal → 5 oz sausage. $p_P = 30$¢, $p_V = 80$¢.

**(i) Production function:**

> **Let's work through this step by step:**
> For Leontief (fixed proportions) production, inputs must be used in fixed ratios:
> 1. Each sausage requires 3 oz pork ($P$) and 2 oz veal ($V$) to produce 5 oz sausage ($Q$)
> 2. The production function is $Q = \min\{P/3, V/2\}$ -- output is limited by the scarcer input
> 3. At the optimum, the firm uses inputs in the exact proportion: $P/3 = V/2 = Q$
>
> **Here's what's really going on:** Leontief production implies zero substitutability ($\sigma = 0$). To produce $Q$ sausages, you MUST use $3Q$ oz pork and $2Q$ oz veal -- no trading one input for the other.

$$Q = \min\left\{\frac{P}{3}, \frac{V}{2}\right\}$$

**(ii) Conditional factor demand for pork:**

At optimum: $P/3 = V/2 = Q \Rightarrow P^* = 3Q$, $V^* = 2Q$.

**(iii) Cost function:**

> **Let's work through this step by step:**
> From the optimal input ratios $P^* = 3Q$ and $V^* = 2Q$:
> 1. Total cost: $c(Q) = p_P \cdot P^* + p_V \cdot V^*$
> 2. Substitute prices ($p_P = 0.30$, $p_V = 0.80$): $c(Q) = 0.30(3Q) + 0.80(2Q)$
> 3. $= 0.90Q + 1.60Q = 2.50Q$
>
> **Here's what's really going on:** Cost is linear in $Q$ with constant $MC = 2.50$. The Leontief technology with constant returns yields constant marginal cost -- each additional sausage costs exactly \$2.50 regardless of scale.

$$c(Q) = p_P \cdot 3Q + p_V \cdot 2Q = 0.30(3Q) + 0.80(2Q) = 0.90Q + 1.60Q = 2.50Q$$

$MC = 2.50$ (constant — CRS technology).

**(iv) If $Q = 200P^{-6}$, find profit-maximizing price:**

Method 1 — Direct $\pi(P)$ maximization:

> **Let's work through this step by step:**
> We start with the demand function $Q = 200P^{-6}$ and cost function $c(Q) = 2.50Q$:
> 1. Profit: $\pi(P) = P \cdot Q(P) - c(Q(P)) = P \cdot 200P^{-6} - 2.50(200P^{-6})$
> 2. Simplify: $= 200P^{-5} - 500P^{-6}$
>
> **Here's what's really going on:** Profit is expressed as a function of price $P$ by substituting the demand function into both revenue and cost. This allows direct maximization by setting $d\pi/dP = 0$.

$$\pi(P) = P \cdot 200P^{-6} - 2.50(200P^{-6}) = 200P^{-5} - 500P^{-6}$$

> **Let's work through this step by step:**
> Maximizing $\pi(P) = 200P^{-5} - 500P^{-6}$:
> 1. Differentiate: $\displaystyle \frac{d\pi}{dP} = 200(-5)P^{-6} - 500(-6)P^{-7} = -1000P^{-6} + 3000P^{-7}$
> 2. Set equal to zero: $-1000P^{-6} + 3000P^{-7} = 0$
> 3. Multiply by $P^7$: $-1000P + 3000 = 0 \Rightarrow P = 3$
>
> **Here's what's really going on:** The first-order condition yields a unique profit-maximizing price $P = 3$. This is the standard $MR = MC$ condition expressed in price-space.

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

> **Let's work through this step by step:**
> From the tangency condition $K/L = w/r$ and production constraint $Q = (KL)^{1/3}$:
> 1. From tangency: $K = (w/r)L$
> 2. Substitute: $Q = ((w/r)L \cdot L)^{1/3} = (w/r)^{1/3} L^{2/3}$
> 3. Solve: $L^{2/3} = Q \cdot (r/w)^{1/3} \Rightarrow L = Q^{3/2} (r/w)^{1/2}$
> 4. By symmetry: $\displaystyle L(w,r,Q) = (r/w)^{1/2} Q^{3/2}$, $\displaystyle K(w,r,Q) = (w/r)^{1/2} Q^{3/2}$
>
> **Here's what's really going on:** With DRS (sum of exponents $= 2/3 < 1$), conditional factor demands are convex in $q$ -- each additional unit of output requires increasingly more inputs, unlike the CRS case. The function is homothetic: $K/L$ depends only on relative prices.

$$L(w,r,Q) = (r/w)^{1/2} Q^{3/2}, \quad K(w,r,Q) = (w/r)^{1/2} Q^{3/2}$$

**(ix) LR cost function:**

> **Let's work through this step by step:**
> Substitute the conditional factor demands into $LRTC = wL + rK$:
> 1. $LRTC = w \cdot (r/w)^{1/2} Q^{3/2} + r \cdot (w/r)^{1/2} Q^{3/2}$
> 2. $= \sqrt{wr} \cdot Q^{3/2} + \sqrt{wr} \cdot Q^{3/2} = 2\sqrt{wr} \cdot Q^{3/2}$
>
> **Here's what's really going on:** $LRTC$ is proportional to $Q^{3/2}$ -- convex in output. This is the signature of DRS: each additional unit of output costs more to produce. The $2\sqrt{wr}$ term captures the effect of input prices.

$$LRTC = wL + rK = 2\sqrt{wr} \cdot Q^{3/2}$$

**Verify Shephard's Lemma:**

> **Let's work through this step by step:**
> Differentiate $LRTC = 2\sqrt{wr} \cdot Q^{3/2}$ w.r.t. $w$:
> 1. $\displaystyle \frac{\partial LRTC}{\partial w} = 2 \cdot \frac{1}{2} \sqrt{r/w} \cdot Q^{3/2} = \sqrt{r/w} \cdot Q^{3/2}$
> 2. This equals $L(w,r,Q) = (r/w)^{1/2} Q^{3/2}$ $\checkmark$
>
> **Here's what's really going on:** Shephard's lemma is verified. The derivative of the cost function w.r.t. the wage rate recovers the conditional labor demand. This cross-check confirms internal consistency.

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

> **Let's work through this step by step:**
> We start with the definition of average cost $AC = TC/Q$:
> 1. Differentiate $AC$ w.r.t. $Q$:
>    $\displaystyle \frac{dAC}{dQ} = \frac{MC \cdot Q - TC}{Q^2} = \frac{MC - AC}{Q}$
> 2. Rearrange: $MC - AC = Q \cdot dAC/dQ$
> 3. Therefore: $\displaystyle MC = AC + Q \cdot \frac{dAC}{dQ}$
>
> **Here's what's really going on:** When $AC$ is declining (economies of scale, $dAC/dQ < 0$), $MC < AC$. When $AC$ is rising (diseconomies, $dAC/dQ > 0$), $MC > AC$. At the minimum of $AC$ ($dAC/dQ = 0$), $MC = AC$.

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

> **Let's work through this step by step:**
> We start with the profit function $\pi(p) = p \cdot y(p)$:
> 1. Differentiate w.r.t. $p_k$:
  $\displaystyle \frac{\partial \pi(p)}{\partial p_k} = y_k(p) + \sum_j p_j \frac{\partial y_j}{\partial p_k}$
> 2. The envelope theorem applies: at the profit-maximizing $y(p)$, the marginal benefit of adjusting $y_j$ in response to a price
  change is zero
> 3. Therefore $\sum_j p_j (\partial y_j/\partial p_k) = 0$ and $\displaystyle \frac{\partial \pi(p)}{\partial p_k} = y_k(p)$
>
> **Here's what's really going on:** See the full discussion in Section 3.3.2. This is Hotelling's lemma: the derivative of the profit function w.r.t. an output price gives the supply of that output.

$$\pi(p) = p \cdot y(p) \;\Rightarrow\; \frac{\partial \pi(p)}{\partial p_k} = y_k(p) + \sum_j p_j \frac{\partial y_j}{\partial p_k} = y_k(p)$$

The summation term vanishes by the envelope condition (first-order optimality of $y(p)$).

**Convexity proof:** See §3.3.1. Here's the economic intuition: you benefit more from extreme price vectors than balanced ones because you can reallocate production toward relatively more expensive outputs.

**Law of Supply:** $\partial y_k(p)/\partial p_k \geq 0$ — supply curves slope upward.

</details>

---

<details>
<summary><strong>Q3.14 — MRPT = MC Ratio (Duality Proof)</strong></summary>

**Theorem:** $MRPT_{x,y} = MC_x / MC_y$.

**Proof (total differentiation + profit FOCs):**

Along $F(q_x, q_y, z) = 0$: $(\partial F/\partial q_x)dq_x + (\partial F/\partial q_y)dq_y = 0$

> **Let's work through this step by step:**
> We start with the transformation frontier $F(q_x, q_y, z) = 0$:
> 1. Total differentiate: $(\partial F/\partial q_x)dq_x + (\partial F/\partial q_y)dq_y = 0$
> 2. Solve for $-\frac{dq_y}{dq_x} = \frac{\partial F/\partial q_x}{\partial F/\partial q_y} \equiv MRPT_{x,y}$
>
> **Here's what's really going on:** This is the same core derivation as in Section 3.3.3, repeated in the solved problem context.

$$MRPT_{x,y} = -\frac{dq_y}{dq_x} = \frac{\partial F/\partial q_x}{\partial F/\partial q_y}$$

Profit max FOCs: $p_x = MC_x$, $p_y = MC_y$. Tangency: $MRPT = p_x/p_y$.

> **Let's work through this step by step:**
> From profit maximization FOCs and tangency condition:
> 1. Profit max: $p_x = MC_x$, $p_y = MC_y$
> 2. Tangency along PPF: $MRPT_{x,y} = p_x/p_y$
> 3. Substituting: $\displaystyle MRPT_{x,y} = \frac{p_x}{p_y} = \frac{MC_x}{MC_y}$
> 4. GE chain: $MRPT = MC_x/MC_y = p_x/p_y = MRS$ (product-mix efficiency)
>
> **Here's what's really going on:** In competitive equilibrium, the technological rate of transformation equals the economic rate (price ratio) equals consumers' marginal rate of substitution.

$$\therefore MRPT = \frac{p_x}{p_y} = \frac{MC_x}{MC_y}$$

**GE chain:** $MRPT = MC_x/MC_y = p_x/p_y = MRS$ (product-mix efficiency).

</details>

---

### 3.5 Competitive Equilibrium

**Why this matters for your exam:** This is where production theory meets the market. Individual firm supply curves aggregate into industry supply, taxes create deadweight loss, and Walras' Law ties everything together in general equilibrium. If you can solve a competitive equilibrium problem, you can handle the most common type of exam question.

#### 3.5.1 Firm Supply & Industry Equilibrium

**SR supply:** $P = MC$ (above shutdown price $\min AVC$). Industry supply = sum of firm supplies.

**LR equilibrium:** $P = \min AC$ with free entry/exit → zero economic profit.

> **Reference — Munoz-Garcia ([Ch.4, §4.11, App. A]):**
>
> **Case 1: CRS technology:** When each firm has constant returns to scale (CRS), the production function satisfies $f(tK, tL) = t f(K,L)$. This implies:
> - **Linear total cost:** $TC(q) = c \cdot q$ (constant marginal cost)
> - **Constant AC = MC:** $AC(q) = MC(q) = c$ for all $q$
> - **Supply indeterminacy at the firm level:** If $p < c$, the firm supplies $q = 0$; if $p > c$, the firm would want to supply infinite output; if $p = c$, any output level yields zero profit
>
> **Case 2: CRS with fixed costs (nonsunk):** With fixed cost $K > 0$ (e.g., a license fee recoverable upon exit):
> > **Let's work through this step by step:**
> > We start with a CRS technology with an additional fixed cost $K$:
> > 1. Variable cost is linear in output: $VC(q) = c \cdot q$ (constant MC from CRS)
> > 2. Total cost: $TC(q) = K + c \cdot q$
> > 3. Average cost: $AC(q) = TC/q = K/q + c$ (declining in $q$, approaching $c$ asymptotically)
> > 4. Marginal cost: $MC(q) = dTC/dq = c$
> >
> > **Here's what's really going on:** Fixed costs make AC decline in output but do not affect MC. You must produce enough to spread the fixed cost over many units -- you need $p \geq AC(q)$ to break even. Since $AC(q) > c$ for all finite $q$, price must exceed marginal cost for you to survive.
>
> $$TC(q) = K + c \cdot q, \quad AC(q) = \frac{K}{q} + c, \quad MC(q) = c$$
> Average cost declines in $q$ (approaching $c$ asymptotically), while marginal cost is constant. The firm supplies only when $p \geq AC(q)$; since $AC(q) > c$ for all finite $q$, the firm must charge above marginal cost to recover fixed costs.
>
> **Aggregate supply with free entry (long run):** Under free entry, firms enter until profits are driven to zero. With CRS and a U-shaped average cost curve (due to a fixed factor or fixed cost in the short run), the LR industry supply is:
> > **Let's work through this step by step:**
> > We start with the free-entry long-run equilibrium condition:
> > 1. With free entry, firms enter until economic profits are driven to zero
> > 2. Zero profit condition: $P = AC$
> > 3. Profit-maximizing output: $P = MC$
> > 4. Therefore: $P = MC = AC$, which occurs at the minimum of AC
> > 5. Hence: $\displaystyle P_{LR}^* = \min AC$
> >
> > **Here's what's really going on:** In the long run with free entry and identical firms, price equals minimum average cost. The industry supply curve is horizontal at this price -- firms can supply any quantity at $P = \min AC$ by adjusting the number of firms.
>
> $$P_{LR}^* = \min AC$$
> - **Horizontal LR supply:** The industry can supply any quantity at $P = \min AC$ because firms are identical and entry/exit is costless
> - **Zero profits:** Each firm operates at minimum efficient scale where $P = MC = AC$
> - **Number of firms endogenous:** $N^* = Q^D(P_{LR}^*) / q^*$ where $q^*$ is output at $\min AC$
>
> **Representative producer property (Ch.4, §4.11.2):** The aggregate supply correspondence $y^*(p) = \sum_{j=1}^J y_j(p)$ coincides with the supply that a single firm would choose when maximizing aggregate profits from the aggregate production set $Y = Y_1 + Y_2 + \cdots + Y_J$. Moreover, $\pi^*(p) = \sum_{j=1}^J \pi_j(p)$. This **decentralization result** implies that letting each firm maximize its own profits and summing the solutions yields the optimal aggregate outcome.

#### 3.5.2 Tax Incidence & Deadweight Loss

**Incidence formula:**

> **Let's work through this step by step:**
> We start with the competitive equilibrium with a per-unit tax $t$:
> 1. After tax, the price wedge is $P_b - P_s = t$ where $P_b$ is buyer price and $P_s$ is seller price
> 2. Market clearing requires $Q_D(P_b) = Q_S(P_s)$
> 3. Linearizing around the no-tax equilibrium $(P^*, Q^*)$:
>    $\Delta Q = \varepsilon_D (Q^*/P^*) (P_b - P^*)$ and $\Delta Q = \varepsilon_S (Q^*/P^*) (P^* - P_s)$
> 4. Using $P_b - P_s = t$ and solving:
>    $\displaystyle \frac{P_b - P^*}{t} = \frac{\varepsilon_S}{\varepsilon_S - \varepsilon_D}$,
>    $\displaystyle \frac{P^* - P_s}{t} = \frac{-\varepsilon_D}{\varepsilon_S - \varepsilon_D}$
>
> **Here's what's really going on:** Tax incidence depends on relative elasticities. The less elastic side bears more of the tax. If demand is perfectly inelastic ($\varepsilon_D = 0$), consumers bear the entire tax; if supply is perfectly inelastic ($\varepsilon_S = 0$), producers bear it all.

$$\frac{P_b - P^*}{t} = \frac{\varepsilon_S}{\varepsilon_S - \varepsilon_D} \quad \text{(consumer share)}, \qquad
\frac{P^* - P_s}{t} = \frac{-\varepsilon_D}{\varepsilon_S - \varepsilon_D} \quad \text{(producer share)}$$

| Elasticity Condition | Who Bears More Tax? |
|---------------------|:-------------------:|
| $|\varepsilon_S| > |\varepsilon_D|$ | Consumers |
| $|\varepsilon_D| > |\varepsilon_S|$ | Producers |
| $\varepsilon_D = 0$ (perfectly inelastic demand) | Consumers bear all |
| $\varepsilon_S = 0$ (perfectly inelastic supply) | Producers bear all |

**DWL formula:**

> **Let's work through this step by step:**
> We start with the Harberger triangle formula for deadweight loss:
> 1. DWL is the area of the triangle between the demand and supply curves from $Q^*$ to $Q_t$:
>    $DWL = \frac12 \times t \times \Delta Q$
> 2. Using the linearized approximation
  $\Delta Q = \frac{\varepsilon_S \varepsilon_D}{\varepsilon_S - \varepsilon_D} \cdot \frac{t}{P^*} \cdot Q^*$
> 3. Substituting:
  $\displaystyle DWL = \frac12 \cdot \frac{\varepsilon_S \varepsilon_D}{\varepsilon_S - \varepsilon_D} \cdot \frac{t^2}{P^*} \cdot Q^*$
>
> **Here's what's really going on:** DWL is quadratic in $t$ -- doubling the tax rate quadruples the deadweight loss. This is the Laffer curve logic: beyond some point, higher tax rates reduce tax revenue more than they increase it because the tax base shrinks rapidly.

$$DWL = \frac12 \times t \times \Delta Q = \frac12 \cdot \frac{\varepsilon_S \varepsilon_D}{\varepsilon_S - \varepsilon_D} \cdot \frac{t^2}{P^*} \cdot Q^*$$

> **Here's the key — and it's beautiful:** DWL is **quadratic in $t$** — doubling the tax quadruples the DWL (Laffer curve logic).

#### 3.5.3 Walras' Law

> **Let's work through this step by step:**
> We start with the definition of aggregate excess demand $Z(p) = \sum_i (x_i(p) - e_i) - \sum_j y_j(p)$:
> 1. Each consumer satisfies budget constraint: $p \cdot x_i(p) = p \cdot e_i$ (no savings)
> 2. Each firm's profit is distributed to consumers; Firm's revenue $p \cdot y_j = \pi_j$ distributed as dividends
> 3. Summing budget constraints across all agents: $p \cdot \sum_i (x_i - e_i) - p \cdot \sum_j y_j = 0$
> 4. Hence: $\displaystyle p \cdot Z(p) = 0$ for all price vectors $p$
>
> **Here's what's really going on:** Walras' Law says the value of aggregate excess demand is identically zero. This means if $L-1$ markets clear, the $L$-th market must also clear -- a crucial result for general equilibrium analysis. It also means only relative prices matter (the numeraire property).

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

> **Let's work through this step by step:**
> We start with $C_{SR}(q) = 0.5q^2 + 2q + 80$:
> 1. Marginal cost: $MC = dC/dq = q + 2$
> 2. Average variable cost: $AVC = (0.5q^2 + 2q)/q = 0.5q + 2$
> 3. Minimum AVC occurs at $q=0$: $\min AVC = 2$
> 4. The firm's supply curve is $P = MC$ above the shutdown price: $P = q + 2$ for $P \geq 2$
> 5. Solving: $\displaystyle q(P) = P - 2$ for $P \geq 2$
>
> **Here's what's really going on:** The competitive firm's supply curve is its marginal cost curve above the minimum of AVC. Below $\min AVC$, the firm shuts down and supplies zero.

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

> **Let's work through this step by step:**
> We start with Walras' Law $p_1 Z_1 + p_2 Z_2 + p_3 Z_3 = 0$:
> 1. Solve for $Z_1$: $Z_1 = -(p_2/p_1)Z_2 - (p_3/p_1)Z_3$
>
> **Here's what's really going on:** Given any two excess demand functions, the third is determined by Walras' Law. This is why we can focus on just $L-1$ markets in general equilibrium analysis.

$$Z_1 = -\frac{p_2}{p_1}Z_2 - \frac{p_3}{p_1}Z_3$$

Substituting and simplifying:

> **Let's work through this step by step:**
> Substitute the expressions for $Z_2$ and $Z_3$ into the Walras' Law equation:
> 1.
  $Z_1 = -\frac{p_2}{p_1}\left(-3 + \frac{p_3}{p_2} + \frac{p_1}{p_2}\right) - \frac{p_3}{p_1}\left(\frac{3p_1}{p_3} + \frac{4p_2}{p_3} - 7\right)$
> 2. Simplify: $= \frac{3p_2}{p_1} - \frac{p_3}{p_1} - 1 - 3 - \frac{4p_2}{p_1} + \frac{7p_3}{p_1}$
> 3. Combine terms: $\displaystyle Z_1(p) = -4 + \frac{6p_3 - p_2}{p_1}$
>
> **Here's what's really going on:** Walras' Law provides a consistency check. Once $Z_2 = 0$ and $Z_3 = 0$ are solved, $Z_1 = 0$ is automatically satisfied -- confirming that only two of the three excess demand equations are independent.

$$Z_1(p) = -4 + \frac{6p_3 - p_2}{p_1}$$

**(ii) Market-clearing price ratios:**

Set $Z_2 = 0$ and $Z_3 = 0$ (Walras' Law guarantees $Z_1 = 0$ automatically).

Let $r_2 = p_2/p_1$, $r_3 = p_3/p_1$.

$Z_2 = 0$: $\frac{r_3}{r_2} + \frac{1}{r_2} = 3 \Rightarrow r_3 + 1 = 3r_2$ ... (1)

$Z_3 = 0$: $\frac{3}{r_3} + \frac{4r_2}{r_3} = 7 \Rightarrow 3 + 4r_2 = 7r_3$ ... (2)

Substitute (1) into (2): $3 + 4r_2 = 7(3r_2 - 1) \Rightarrow 10 = 17r_2 \Rightarrow r_2 = 10/17$.

From (1): $r_3 = 3(10/17) - 1 = 13/17$.

Check $Z_1 = 0$: $-4 + (6\cdot 13/17 - 10/17)/1 = -4 + (78-10)/17 = -4 + 4 = 0$ ✓

> **Let's work through this step by step:**
> From solving the simultaneous system $Z_2 = 0$ and $Z_3 = 0$:
> 1. Let $r_2 = p_2/p_1$, $r_3 = p_3/p_1$ (normalizing $p_1$ as numeraire)
> 2. From $Z_2 = 0$: $r_3 + 1 = 3r_2$  $\rightarrow$ (1)
> 3. From $Z_3 = 0$: $3 + 4r_2 = 7r_3$  $\rightarrow$ (2)
> 4. Substitute (1) into (2): $3 + 4r_2 = 7(3r_2 - 1) \Rightarrow 10 = 17r_2 \Rightarrow r_2 = 10/17$
> 5. Then $r_3 = 3(10/17) - 1 = 13/17$
>
> **Here's what's really going on:** With Walras' Law, setting $Z_2 = 0$ and $Z_3 = 0$ suffices to find all equilibrium price ratios. Only relative prices ($r_2, r_3$) matter -- the absolute price level is indeterminate.

$$\frac{p_2}{p_1} = \frac{10}{17}, \quad \frac{p_3}{p_1} = \frac{13}{17}$$

</details>

---

### 3.6 Key Formulas — Production & Supply

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

**Why this matters for your exam:** This final section connects the dots — showing how the firm-level production theory you've been studying feeds into the big picture of general equilibrium. The chain $MRS = MRT = p_1/p_2$ is the First Welfare Theorem in action, and it's the kind of high-level synthesis that examiners love.

The firm production theory developed in this topic feeds directly into the general equilibrium (GE) framework in two key ways:

#### 3.7.1 From Firm Supply to Aggregate Supply

Individual firm supply curves $q_j(p)$ (derived from $P = MC$ above shutdown) are summed horizontally to obtain industry supply:

> **Let's work through this step by step:**
> We start with individual firm supply curves $q_j(p)$:
> 1. Each firm chooses $q_j$ to satisfy $P = MC_j$ above its shutdown point
> 2. Industry supply is the horizontal sum of individual supplies at each price level:
>    $\displaystyle Q_S(p) = \sum_{j=1}^N q_j(p)$
> 3. At price $p$, each firm supplies $q_j(p)$; total industry output is the sum
>
> **Here's what's really going on:** Horizontal summation means we add quantities at each price (not prices at each quantity). This reflects the fact that all firms are price-takers facing the same market price.

$$Q_S(p) = \sum_{j=1}^N q_j(p)$$

Under free entry with identical firms and CRS, the LR industry supply is horizontal at $P = \min AC$, with the number of firms determined by market demand:

> **Let's work through this step by step:**
> We start with the free-entry LR equilibrium:
> 1. In LR, $P_{LR}^* = \min AC$ (zero profit) and each firm produces $q^*$ at $\min AC$
> 2. Market demand at this price is $Q_D(p^*)$
> 3. With identical firms, the equilibrium number of firms is:
>    $\displaystyle N^* = \frac{Q_D(p^*)}{q^*(p^*)}$
>
> **Here's what's really going on:** The number of firms in LR equilibrium is endogenous -- determined by the market size relative to each firm's minimum efficient scale. This is a central result in industrial organization: entry erodes profits until each firm operates at minimum AC.

$$N^* = \frac{Q_D(p^*)}{q^*(p^*)}$$

#### 3.7.2 From Production to the 2×2×2 GE Model

In the two-consumer, two-good, two-factor GE model (Munoz-Garcia Ch.6), production decisions interact with consumer preferences through three efficiency conditions:

| Efficiency Condition | Formula | Economic Meaning |
|:--------------------|:-------|:----------------|
| **Consumption efficiency** | $MRS^A_{1,2} = MRS^B_{1,2}$ | Cannot reallocate goods to make both consumers better off |
| **Production efficiency** | $MRTS^1_{L,K} = MRTS^2_{L,K}$ | Cannot reallocate factors to increase total output |
| **Product-mix efficiency** | $MRS = MRT = p_1/p_2$ | The mix of goods produced matches consumer preferences |

The chain $MRS = MRT = p_1/p_2$ in competitive equilibrium ensures Pareto optimality — the **First Welfare Theorem** with production.

> **Reference — Koutsoyiannis ([Ch.4, pp.87-90]):** Koutsoyiannis provides a step-by-step Lagrangian framework for the firm's constrained optimization:
>
> **Problem:** Maximize output $X = f(L, K)$ subject to cost constraint $C = wL + rK$.
>
> **Lagrangian:** $\Phi = X + \lambda(C - wL - rK)$
>
> **FOCs:**
> > **Let's work through this step by step:**
> > We start with the Lagrangian for output maximization: $\Phi = X + \lambda(C - wL - rK)$:
> > 1. $\partial \Phi/\partial L = \partial X/\partial L - \lambda w = 0$ $\rightarrow$ $MP_L = \lambda w$
> > 2. $\partial \Phi/\partial K = \partial X/\partial K - \lambda r = 0$ $\rightarrow$ $MP_K = \lambda r$
> > 3. $\partial \Phi/\partial \lambda = C - wL - rK = 0$ $\rightarrow$ cost constraint binds
>
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
> Tangency:
  $\frac{0.5L^{-0.5}K^{0.5}}{4} = \frac{0.5L^{0.5}K^{-0.5}}{9} \Rightarrow \frac{K}{4L} = \frac{L}{9K} \Rightarrow 9K^2 = 4L^2 \Rightarrow K = \frac{2}{3}L$
>
> Budget: $120 = 4L + 9(\frac{2}{3}L) = 4L + 6L = 10L \Rightarrow L^* = 12$, $K^* = 8$, $X^* = (12)^{0.5}(8)^{0.5} \approx 9.8$.




---

<!-- Enhanced by Munoz-Garcia & Koutsoyiannis textbook references -->

<!-- ============================================================
TOPIC 4: WELFARE ECONOMICS
============================================================ -->
## <a id="topic-4"></a>Topic 4: Welfare Economics

### 4.1 Compensating Variation, Equivalent Variation & Consumer Surplus
**Why this matters for your exam:** CV, EV, and CS are among the most tested welfare concepts in micro prelims. You will need to compute all three, rank them for price changes on normal goods, and explain when CS is a good approximation. Expect a numerical problem (often Cobb-Douglas) plus a theory question on the ordering.

#### 4.1.1 Definitions

Three measures quantify the welfare impact of a price change on a consumer.

Let $p^0$ and $p^1$ be initial and final price vectors, $w$ be income (constant), $u^0 = v(p^0, w)$ and $u^1 = v(p^1, w)$ be
initial and final utility levels, and $e(p, u)$ be the expenditure function.

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

> **Let's work through this step by step.**
> We start with the definition of CV as the compensating payment after a price change:
> 1. CV = amount paid to restore original utility $u^0$ after prices move to $p^1$
> 2. Expenditure needed at new prices to reach original utility: $e(p^1, u^0)$
> 3. Expenditure needed at new prices to reach new utility: $e(p^1, u^1) = w$ (by definition of the expenditure function)
> 4. So CV = $e(p^1, u^1) - e(p^1, u^0) = w - e(p^1, u^0)$
> 5. → Final form: $$CV = e(p^1, u^1) - e(p^1, u^0) = w - e(p^1, u^0)$$
>
> **Here's what's really going on:** CV is the income adjustment that makes you just as well off *after* the price change as you were
  *before* — it measures the compensating payment at new prices.

$$CV = e(p^1, u^1) - e(p^1, u^0) = w - e(p^1, u^0)$$

> **Let's work through this step by step.**
> We start with the definition of EV as the equivalent payment before a price change:
> 1. EV = amount given/taken *before* the price change to reach the *new* utility $u^1$
> 2. Expenditure needed at old prices to reach new utility: $e(p^0, u^1)$
> 3. Expenditure needed at old prices to reach original utility: $e(p^0, u^0) = w$
> 4. So EV = $e(p^0, u^1) - e(p^0, u^0) = e(p^0, u^1) - w$
> 5. → Final form: $$EV = e(p^0, u^1) - e(p^0, u^0) = e(p^0, u^1) - w$$
>
> **Here's what's really going on:** EV is the income change *equivalent* to the price change — how much income would need to change at *old* prices
  to produce the same utility change as the price change itself.

$$EV = e(p^0, u^1) - e(p^0, u^0) = e(p^0, u^1) - w$$

CV anchors on **original utility at new prices**; EV anchors on **new utility at old prices**. CS is empirically observable
(Marshallian demand is estimable) but theoretically approximate unless income effects are zero.

---

#### 4.1.2 EV > CS > CV Ordering

For a **price decrease** ($p \downarrow$) and a **normal good**:

> **Let's work through this step by step.**
> We start with the Hicksian/Marshallian demand relationships for a normal good:
> 1. For a normal good, the income effect is positive: $\partial x_1/\partial w > 0$
> 2. A price decrease raises real income, so $u^1 > u^0$
> 3. At $u^1 > u^0$, Hicksian demand lies to the right: $h(p, u^1) > h(p, u^0)$
> 4. By the Slutsky equation, $h(p, u^0)$ is steeper than Marshallian $x(p,w)$, which is steeper than $h(p, u^1)$
> 5. Since CV, CS, EV are left-of-demand-curve areas, the steepest curve ($h$ at $u^0$) gives the smallest area for a price
  decrease
> 6. → Final form: $$EV \;>\; CS \;>\; CV$$
>
> **Here's what's really going on:** For a price decrease on a normal good, EV (anchored at higher utility) gives the largest welfare gain, CV
  (anchored at original utility) gives the smallest, and CS lies in between.

$$EV \;>\; CS \;>\; CV$$

For a **price increase** ($p \uparrow$) and a **normal good**:

> **Let's work through this step by step.**
> We start with the same relationships but for a price increase:
> 1. For a price increase on a normal good, $u^1 < u^0$ (utility falls)
> 2. CV uses $h(p, u^0)$ — the steeper curve — so the welfare loss area is larger
> 3. EV uses $h(p, u^1)$ — the flatter curve — so the welfare loss area is smaller
> 4. CS (Marshallian) lies in between
> 5. Since demand curves slope downward, a price increase measures a welfare *loss*, and the ordering of areas reverses
> 6. → Final form: $$CV \;>\; CS \;>\; EV$$
>
> **Here's what's really going on:** For a price increase, CV (compensation needed after the fact) overstates the welfare loss relative to CS, while
  EV (equivalent variation before the fact) understates it.

$$CV \;>\; CS \;>\; EV$$

**Why the ordering?** For a price decrease on a normal good:
- **EV** uses Hicksian demand at $u^1$ (higher utility) — income effect shifts Hicksian demand right → largest area
- **CS** uses Marshallian demand — lies between the two Hicksian curves → intermediate area
- **CV** uses Hicksian demand at $u^0$ (original utility) — smallest area

**Formal relationship between Hicksian and Walrasian demands for welfare measurement:**

For a normal good, the Slutsky equation
$\frac{\partial h_1}{\partial p_1} = \frac{\partial x_1}{\partial p_1} + \frac{\partial x_1}{\partial w} x_1$ implies $\left|\frac{\partial h_1}{\partial p_1}\right| < \left|\frac{\partial x_1}{\partial p_1}\right|$ (since $\frac{\partial x_1}{\partial w} > 0$ for normal goods, the compensated demand is *steeper* than the Marshallian demand). Moreover, since $u^1 > u^0$, the Hicksian demand at $u^1$ lies to the right of the Hicksian demand at $u^0$. Putting these together:

> **Let's work through this step by step.**
> We start with the Slutsky equation and the properties of normal goods:
> 1. Slutsky: $\frac{\partial h_1}{\partial p_1} = \frac{\partial x_1}{\partial p_1} + \frac{\partial x_1}{\partial w} x_1$
> 2. For a normal good, $\frac{\partial x_1}{\partial w} > 0$ and $x_1 > 0$, so
  $\frac{\partial h_1}{\partial p_1} = \frac{\partial x_1}{\partial p_1} + \text{positive term}$
> 3. Since $\frac{\partial x_1}{\partial p_1} < 0$ (downward-sloping demand), the compensated (Hicksian) slope is more negative
  (steeper): $\left|\frac{\partial h_1}{\partial p_1}\right| < \left|\frac{\partial x_1}{\partial p_1}\right|$
> 4. For $u^1 > u^0$, Hicksian demand at the higher utility level is shifted right: $h(p, u^1) > h(p, u^0)$
> 5. Since $h(p, u^0)$ is steeper than $x(p,w)$ which is steeper than $h(p, u^1)$, for any given price, the slope ordering holds
> 6. → Final form: $$\left.\frac{\partial h_1}{\partial p_1}\right|_{u=u^0} < \frac{\partial x_1}{\partial p_1} <
  \left.\frac{\partial h_1}{\partial p_1}\right|_{u=u^1} \quad \Rightarrow \quad h(p, u^0) \text{ steeper than } x(p,w) \text{ steeper than } h(p, u^1)$$
>
> **Here's what's really going on:** The compensated demand curve at the original utility is steepest (substitution effect only, no income effect
  reinforcing it), the Marshallian is intermediate (includes both effects), and the compensated demand at the new utility is flattest (income effect partially offsets the substitution effect at the higher utility level).

$$\left.\frac{\partial h_1}{\partial p_1}\right|_{u=u^0} < \frac{\partial x_1}{\partial p_1} < \left.\frac{\partial h_1}{\partial p_1}\right|_{u=u^1} \quad \Rightarrow \quad h(p, u^0) \text{ steeper than } x(p,w) \text{ steeper than } h(p, u^1)$$

This ordering of slopes generates the $EV > CS > CV$ ranking for a price decrease.

**Why the ordering reverses for a price increase:**

When the price *rises* from $p_1^0$ to $p_1^1$ (where $p_1^1 > p_1^0$):
- **CV** is the *minimum compensation* needed *after* the price increase to restore you to your original utility $u^0$ —
it uses $h(p, u^0)$ which is steeper → larger welfare loss area
- **CS** uses Marshallian demand → intermediate area
- **EV** is the *willingness to accept* the price increase *before* it happens — it uses $h(p, u^1)$ which is flatter → smaller
welfare loss area

Hence $CV > CS > EV$ for a price increase on a normal good.

The gap $|EV - CV|$ measures the **income effect**. When the income effect is zero (quasilinear utility), all three measures
coincide: $CV = EV = CS$.

**Diagram logic (price decrease):**

At $p_1^1 < p_1^0$, for a normal good: $h(p, u^1) > x(p, w) > h(p, u^0)$. The three demand curves intersect at $p_1^0$. EV is the
area left of $h(p, u^1)$ between $p^0$ and $p^1$; CS is the area left of $x(p, w)$; CV is the area left of $h(p, u^0)$.

**For inferior goods:** The ordering reverses — Hicksian demand at $u^1$ shifts left instead of right.

**Willig (1976) bounds — detailed derivation:**

Willig (1976) provided rigorous bounds on the percentage error from using CS instead of CV or EV. For a price change from $p_1^0$
to $p_1^1$ with income elasticity $\eta = \frac{\partial x_1}{\partial w} \cdot \frac{w}{x_1}$:

> **Let's work through this step by step.**
> We start with the Slutsky equation and the relationship between Hicksian and Marshallian demands:
> 1. The difference between Marshallian CS and Hicksian CV/EV arises from the income effect term in the Slutsky equation:
  $\frac{\partial h_1}{\partial p_1} - \frac{\partial x_1}{\partial p_1} = \frac{\partial x_1}{\partial w} x_1$
> 2. Integrating this difference over the price change gives the gap between CS and CV:
  $CS - CV = \int_{p_1^0}^{p_1^1} \frac{\partial x_1}{\partial w} x_1 dp_1$
> 3. Using the income elasticity $\eta = \frac{\partial x_1}{\partial w} \cdot \frac{w}{x_1}$, rewrite
  $\frac{\partial x_1}{\partial w} = \eta \cdot \frac{x_1}{w}$
> 4. Substituting: $CS - CV \approx \int_{p_1^0}^{p_1^1} \frac{\eta}{w} x_1^2 dp_1$
> 5. Bounding the integral using the mean value theorem and assuming constant $\eta$ yields the leading-order error bound
  proportional to $\eta \cdot (\Delta p / p) / 2$
> 6. → Final form: $$\frac{|CS - CV|}{|CV|} \le \frac{\eta \cdot |\Delta p / p|}{2}, \qquad \frac{|CS - EV|}{|EV|} \le \frac{\eta
  \cdot |\Delta p / p|}{2}$$
>
> **Here's what's really going on:** The Willig bounds show that the percentage error from using CS instead of CV or EV is proportional to the income
  elasticity times the relative price change, divided by 2. For small price changes or goods with low income elasticity, CS is an excellent approximation.

$$\frac{|CS - CV|}{|CV|} \le \frac{\eta \cdot |\Delta p / p|}{2}, \qquad \frac{|CS - EV|}{|EV|} \le \frac{\eta \cdot |\Delta p / p|}{2}$$

**Derivation intuition:** Using the Slutsky equation and the fact that the difference between Marshallian and Hicksian demands
grows with the income effect, the leading-order error term is proportional to $\eta \cdot (\Delta p / p) / 2$. The bounds are tightest when (i) the price change is small, (ii) the good is a small share of the budget, or (iii) the income elasticity is low.

For realistic income elasticities ($\eta \approx 0.5$ to $1.5$) and moderate price changes ($\Delta p / p \le 0.1$), the maximum
error is $< 5\%$, supporting CS as a practical approximation. For large price changes on necessity goods with high income elasticity (e.g., housing, with $\eta \approx 1.38$), the error can be substantial, and CV or EV should be used.

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

> **Let's work through this step by step.**
> We start with the Cobb-Douglas utility function $u = x_1^{1/2} x_2^{1/2}$:
> 1. Hicksian demands for Cobb-Douglas with $\alpha = 1/2$:
  $h_1 = u\left(\frac{p_2}{p_1}\right)^{1/2},\; h_2 = u\left(\frac{p_1}{p_2}\right)^{1/2}$
> 2. Expenditure function: $e(p, u) = p_1 h_1 + p_2 h_2$
> 3. Substituting: $e(p, u) = p_1 u \left(\frac{p_2}{p_1}\right)^{1/2} + p_2 u \left(\frac{p_1}{p_2}\right)^{1/2}$
> 4. Simplifying: $e(p, u) = u \sqrt{p_1 p_2} + u \sqrt{p_1 p_2} = 2u\sqrt{p_1 p_2}$
> 5. → Final form: $$e(p, u) = 2u \sqrt{p_1 p_2}$$
>
> **Here's what's really going on:** For Cobb-Douglas with equal exponents, the expenditure function is proportional to the geometric mean of prices
  times utility — a familiar form where $e(p,u)$ is linear in $u$ and homogeneous of degree 1 in prices.

$$e(p, u) = 2u \sqrt{p_1 p_2}$$

**CV** (price decrease):

> **Let's work through this step by step.**
> We start with $CV = w - e(p^1, u^0)$:
> 1. $u^0 = 37.5$, $p^1 = (2, 4)$, so $e(p^1, u^0) = 2(37.5)\sqrt{2 \times 4} = 75\sqrt{8} = 75 \times 2.828 = 212.1$
> 2. $w = 300$, so $CV = 300 - 212.1 = 87.9$
> 3. → Final form: $$CV = w - e(p^1, u^0) = 300 - 2(37.5)\sqrt{2 \times 4} = 300 - 212.1 = 87.9$$
>
> **Here's what's really going on:** You need
  \$87.9 taken away after the price decrease to keep you at the original utility level — your gain from the price drop is \$87.9.

$$CV = w - e(p^1, u^0) = 300 - 2(37.5)\sqrt{2 \times 4} = 300 - 212.1 = 87.9$$

**EV:**

> **Let's work through this step by step.**
> We start with $EV = e(p^0, u^1) - w$:
> 1. $u^1 \approx 53.03$, $p^0 = (4, 4)$, so $e(p^0, u^1) = 2(53.03)\sqrt{4 \times 4} = 106.06 \times 4 = 424.24$
> 2. $w = 300$, so $EV = 424.24 - 300 = 124.24$
> 3. → Final form: $$EV = e(p^0, u^1) - w = 2(53.03)\sqrt{4 \times 4} - 300 = 424.24 - 300 = 124.24$$
>
> **Here's what's really going on:** You would need to be given \$124.24 at old prices to achieve the same utility gain as the price
  decrease — this is larger than CV because the income effect is substantial with Cobb-Douglas preferences.

$$EV = e(p^0, u^1) - w = 2(53.03)\sqrt{4 \times 4} - 300 = 424.24 - 300 = 124.24$$

**CS:**

> **Let's work through this step by step.**
> We start with the definition of CS as the area under Marshallian demand:
> 1. Marshallian demand for good 1: $x_1 = \frac{150}{p_1}$
> 2. $CS = \int_{p_1^0}^{p_1^1} x_1(p_1)\,dp_1 = \int_4^2 \frac{150}{p_1} dp_1$ (note: $p_1^0 = 4$, $p_1^1 = 2$, so the integral
  goes from higher to lower price)
> 3. Evaluating: $150[\ln p_1]_4^2 = 150(\ln 2 - \ln 4) = 150 \ln(0.5)$
> 4. $\ln(0.5) \approx -0.6931$, so $CS = 150 \times (-0.6931) \approx -103.98$ (the negative sign indicates a gain from price
  decrease; we report the magnitude)
> 5. → Final form: $$CS = \int_{4}^{2} \frac{150}{p_1}\,dp_1 = 150[\ln p_1]_{4}^{2} = 150\ln(0.5) \approx 103.98$$
>
> **Here's what's really going on:** CS gives the welfare gain as the area under the Marshallian demand curve between the old and new prices,
  yielding an intermediate value between CV (87.9) and EV (124.24).

$$CS = \int_{4}^{2} \frac{150}{p_1}\,dp_1 = 150[\ln p_1]_{4}^{2} = 150\ln(0.5) \approx 103.98$$

**Summary:** $EV = 124.24 > CS = 103.98 > CV = 87.9$ — confirms both goods are **normal goods**. The gap $EV - CV = 36.34 > 0$
indicates a substantial income effect, consistent with Cobb-Douglas (unit income elasticity).

---

#### 4.1.4 CS Approximation: When CS Overstates CV and Understates EV

For a price decrease with a normal good:
- **CS > CV:** Marshallian demand includes both substitution and income effects → flatter than Hicksian at $u^0$ → larger area
- **EV > CS:** Hicksian demand at $u^1$ shifts right (income effect) → larger area than Marshallian

---

> **Munoz-Garcia Insight: CV and EV as Integrals of Hicksian Demand**
>
> The expenditure-function definition of CV and EV we can transform into **areas left of the Hicksian demand curve** using
  Shephard's lemma ($\partial e(p, u)/\partial p_1 = h_1(p, u)$). For a price decrease of good 1 from $p_1^0$ to $p_1^1$ (where $p_1^1 < p_1^0$), holding all other prices $p_{-1}$ constant:
>
> > **Let's work through this step by step.**
> > Starting from the definition $CV = e(p^0, u^0) - e(p^1, u^0)$ (rearranged for a price decrease):
> > 1. By the fundamental theorem of calculus,
    $e(p^0, u^0) - e(p^1, u^0) = \int_{p_1^1}^{p_1^0} \frac{\partial e(p_1, p_{-1}, u^0)}{\partial p_1} dp_1$
> > 2. Shephard's lemma: $\partial e(p, u)/\partial p_1 = h_1(p, u)$ — the derivative of expenditure w.r.t. price equals Hicksian
    demand
> > 3. Substituting: $CV = \int_{p_1^1}^{p_1^0} h_1(p_1, p_{-1}, u^0) dp_1$
> > 4. → Final form: $$CV = e(p_1^0, p_{-1}, u^0) - e(p_1^1, p_{-1}, u^0) = \int_{p_1^1}^{p_1^0} h_1(p_1, p_{-1}, u^0)\,dp_1$$
> >
> > **Here's what's really going on:** CV is the area left of the Hicksian demand curve at $u^0$ between the two prices — it represents the minimum
    compensation needed at the original utility level.
>
> $$CV = e(p_1^0, p_{-1}, u^0) - e(p_1^1, p_{-1}, u^0) = \int_{p_1^1}^{p_1^0} h_1(p_1, p_{-1}, u^0)\,dp_1$$
>
> > **Let's work through this step by step.**
> > Starting from the definition $EV = e(p^0, u^1) - e(p^1, u^1)$ (rearranged for a price decrease):
> > 1. By the fundamental theorem of calculus,
    $e(p^0, u^1) - e(p^1, u^1) = \int_{p_1^1}^{p_1^0} \frac{\partial e(p_1, p_{-1}, u^1)}{\partial p_1} dp_1$
> > 2. Shephard's lemma: $\partial e(p, u)/\partial p_1 = h_1(p, u)$
> > 3. Substituting: $EV = \int_{p_1^1}^{p_1^0} h_1(p_1, p_{-1}, u^1) dp_1$
> > 4. → Final form: $$EV = e(p_1^0, p_{-1}, u^1) - e(p_1^1, p_{-1}, u^1) = \int_{p_1^1}^{p_1^0} h_1(p_1, p_{-1}, u^1)\,dp_1$$
> >
> > **Here's what's really going on:** EV is the area left of the Hicksian demand curve at $u^1$ between the two prices — it measures the income
    change equivalent to the price change at the new utility level.
>
> $$EV = e(p_1^0, p_{-1}, u^1) - e(p_1^1, p_{-1}, u^1) = \int_{p_1^1}^{p_1^0} h_1(p_1, p_{-1}, u^1)\,dp_1$$
>
> **Here's what's really going on:** CV integrates the Hicksian demand at the *original* utility level $u^0$ between the two prices — it measures
  willingness to pay for the price change while keeping you at your initial well-being. EV integrates the Hicksian demand at the *new* utility level $u^1$ — it measures the income change that would be *equivalent* to the price change.
>
> *Source: Munoz-Garcia, Ch.3, §3.1.2 (pp. 168-170)*

### 4.2 Pareto Optimality
**Why this matters for your exam:** Pareto efficiency is the bedrock of welfare economics. The three marginal conditions (exchange, production, product-mix) appear constantly — you must know them cold. Exam questions often ask you to derive them, apply the Edgeworth box, or explain why Pareto optimality is necessary but not sufficient for social welfare maximization.

#### 4.2.1 Definition and Concept

An allocation $\mathbf{x}$ is **Pareto-optimal** (Pareto-efficient) if no feasible reallocation can make at least one individual
better off without making any other individual worse off:

> **Let's work through this step by step.**
> We start with the verbal definition of Pareto optimality:
> 1. Let $\mathbf{x}$ be the current allocation and $\mathbf{x}'$ any feasible alternative
> 2. For $\mathbf{x}$ to be Pareto-optimal, there must be NO feasible $\mathbf{x}'$ such that everyone is at least as well off
  ($U_i(\mathbf{x}') \ge U_i(\mathbf{x})$ for all $i$) and at least one person is strictly better off ($U_j(\mathbf{x}') > U_j(\mathbf{x})$ for some $j$)
> 3. The $\nexists$ symbol captures the non-existence of such an alternative
> 4. → Final form: $$\text{Allocation } \mathbf{x} \text{ is PO } \iff \nexists \ \mathbf{x}' \text{ s.t. } U_i(\mathbf{x}') \ge
  U_i(\mathbf{x}) \ \forall i \text{ and } U_j(\mathbf{x}') > U_j(\mathbf{x}) \text{ for some } j$$
>
> **Here's what's really going on:** Pareto optimality is a minimal efficiency criterion — if a reallocation could make someone better off without
  harming anyone, the current allocation is wasteful (Pareto-inefficient). The definition is ordinal: no cardinal utility or interpersonal comparisons needed.

$$\text{Allocation } \mathbf{x} \text{ is PO } \iff \nexists \ \mathbf{x}' \text{ s.t. } U_i(\mathbf{x}') \ge U_i(\mathbf{x}) \ \forall i \text{ and } U_j(\mathbf{x}') > U_j(\mathbf{x}) \text{ for some } j$$

A **Pareto improvement** is a reallocation making at least one person better off without harming anyone else.

---

#### 4.2.2 Three Pareto Conditions in the $2 \times 2 \times 2$ Model

The $2\times2\times2$ model has two factors ($L$, $K$), two goods ($X$, $Y$), and two consumers ($A$, $B$). For Pareto optimality,
three marginal conditions must hold simultaneously:

**1. Consumption efficiency (efficiency in exchange):**

> **Let's work through this step by step.**
> We start with the requirement that no mutually beneficial trade remains:
> 1. In an exchange economy, consumer A trades off $X$ and $Y$ at rate $MRS_{XY}^A = MU_X^A / MU_Y^A$
> 2. Consumer B trades off at $MRS_{XY}^B = MU_X^B / MU_Y^B$
> 3. If $MRS^A > MRS^B$, then A values $X$ more than B does → both gain from A giving $Y$ to B in exchange for $X$
> 4. Gains from trade are exhausted only when rates of substitution are equalized
> 5. → Final form: $$MRS_{XY}^A = MRS_{XY}^B$$
>
> **Here's what's really going on:** If two consumers have different marginal rates of substitution, they can mutually benefit by trading. Efficiency
  requires that the marginal willingness to trade one good for another is the same for all consumers.

$$MRS_{XY}^A = MRS_{XY}^B$$

The marginal rate of substitution between goods must be equal across all consumers. This ensures no mutually beneficial trade
remains.

*Lagrangian derivation (fixed supply $\bar{X}$, $\bar{Y}$):*

> **Let's work through this step by step.**
> We start with the planner's problem of maximizing A's utility subject to B reaching a minimum utility level and fixed total
  supplies:
> 1. Objective: maximize $U_A(X_A, Y_A)$
> 2. Constraint 1: $U_B(X_B, Y_B) \ge \bar{U}_B$ (B must achieve at least $\bar{U}_B$)
> 3. Resource constraints: $X_A + X_B = \bar{X}$, $Y_A + Y_B = \bar{Y}$ (total supply fixed)
> 4. Substitute $X_B = \bar{X} - X_A$, $Y_B = \bar{Y} - Y_A$ into B's utility constraint
> 5. Lagrangian: $\mathcal{L} = U_A(X_A, Y_A) + \lambda[U_B(\bar{X} - X_A, \bar{Y} - Y_A) - \bar{U}_B]$
> 6. → Final form: $$\mathcal{L} = U_A(X_A, Y_A) + \lambda[U_B(\bar{X} - X_A, \bar{Y} - Y_A) - \bar{U}_B]$$
>
> **Here's what's really going on:** The Lagrangian combines the two consumers' utilities into a single optimization, where $\lambda$ represents the
  marginal social cost of tightening B's utility constraint — it measures how much A's utility must be sacrificed to increase B's utility.

$$\mathcal{L} = U_A(X_A, Y_A) + \lambda[U_B(\bar{X} - X_A, \bar{Y} - Y_A) - \bar{U}_B]$$

FOCs:

> **Let's work through this step by step.**
> We start with the Lagrangian and taking partial derivatives:
> 1.
  $\partial\mathcal{L}/\partial X_A = \frac{\partial U_A}{\partial X_A} + \lambda \cdot \frac{\partial U_B}{\partial X_B} \cdot \frac{\partial X_B}{\partial X_A} = 0$ where $\partial X_B/\partial X_A = -1$
> 2. So: $\frac{\partial U_A}{\partial X_A} - \lambda \frac{\partial U_B}{\partial X_B} = 0$ →
  $\frac{\partial U_A}{\partial X_A} = \lambda \frac{\partial U_B}{\partial X_B}$
> 3.
  $\partial\mathcal{L}/\partial Y_A = \frac{\partial U_A}{\partial Y_A} + \lambda \cdot \frac{\partial U_B}{\partial Y_B} \cdot \frac{\partial Y_B}{\partial Y_A} = 0$ where $\partial Y_B/\partial Y_A = -1$
> 4. So: $\frac{\partial U_A}{\partial Y_A} = \lambda \frac{\partial U_B}{\partial Y_B}$
> 5. Dividing the two FOCs:
  $\frac{\partial U_A/\partial X_A}{\partial U_A/\partial Y_A} = \frac{\partial U_B/\partial X_B}{\partial U_B/\partial Y_B}$
> 6. This is $MRS_{XY}^A = MRS_{XY}^B$
> 7. → Final form: $$\frac{\partial U_A/\partial X_A}{\partial U_A/\partial Y_A} = \frac{\partial U_B/\partial X_B}{\partial
  U_B/\partial Y_B} \quad\Rightarrow\quad MRS_{XY}^A = MRS_{XY}^B$$
>
> **Here's what's really going on:** The first-order conditions from the exchange Lagrangian confirm that Pareto efficiency in consumption requires
  the equalization of marginal rates of substitution — the central condition for the contract curve in the Edgeworth box.

$$\frac{\partial U_A/\partial X_A}{\partial U_A/\partial Y_A} = \frac{\partial U_B/\partial X_B}{\partial U_B/\partial Y_B} \quad\Rightarrow\quad MRS_{XY}^A = MRS_{XY}^B$$

The locus of such points in the Edgeworth exchange box is the **contract curve**.

**2. Production efficiency (efficiency in factor allocation):**

> **Let's work through this step by step.**
> We start with the requirement that factor reallocation cannot increase output of one good without reducing the other:
> 1. In producing good $X$, the rate at which labor substitutes for capital is $MRTS_{LK}^X = MP_L^X / MP_K^X$
> 2. For good $Y$, the same rate is $MRTS_{LK}^Y = MP_L^Y / MP_K^Y$
> 3. If $MRTS^X > MRTS^Y$, then labor is relatively more productive in $X$ than in $Y$ → reallocating labor to $X$ and capital to
  $Y$ can increase total output
> 4. Such gains are exhausted only when both MRTS are equal
> 5. → Final form: $$MRTS_{LK}^X = MRTS_{LK}^Y$$
>
> **Here's what's really going on:** Just as exchange efficiency requires equal MRS across consumers, production efficiency requires equal MRTS
  across firms — the marginal productivity of each factor relative to the other must be the same in all uses.

$$MRTS_{LK}^X = MRTS_{LK}^Y$$

The marginal rate of technical substitution between factors must be equal across all firms. This ensures no reallocation of $L$
and $K$ can increase output of one good without reducing the other.

**3. Product-mix efficiency (efficiency in output composition):**

> **Let's work through this step by step.**
> We start with the condition that the economy must produce the right mix of goods:
> 1. $MRPT_{XY}$ is the rate at which the economy can transform $Y$ into $X$ along the production possibility curve (PPC)
> 2. $MRS_{XY}$ is the rate at which consumers are willing to substitute $X$ for $Y$
> 3. If $MRPT > MRS$, the economy can produce one more unit of $X$ by sacrificing less $Y$ than consumers are willing to accept →
  welfare can be improved
> 4. Under perfect competition, $MRPT = MC_X/MC_Y$ and $P = MC$, so $MRPT = P_X/P_Y$
> 5. Consumers optimize where $MRS = P_X/P_Y$, hence $MRPT = MRS$
> 6. → Final form: $$MRPT_{XY} = MRS_{XY}$$
>
> **Here's what's really going on:** The marginal rate at which society can transform one good into another must equal the marginal rate at which
  consumers are willing to substitute between them — otherwise a different output mix would make everyone better off.

$$MRPT_{XY} = MRS_{XY}$$

The marginal rate of product transformation (slope of the PPC) must equal the consumers' common marginal rate of substitution.
With $MRPT_{XY} = MC_X/MC_Y$ and $P = MC$ under competition, this becomes $P_X/P_Y = MRS$.

---

#### 4.2.3 Pareto Optimality: Necessary but Not Sufficient

**Statement:** A situation can be Pareto-optimal without maximizing social welfare. All SW maxima must be Pareto-optimal, but not
all Pareto-optimal points are SW maxima.

**Proof via $2\times2\times2$ model:**

1. All points on the PPC satisfy all three Pareto conditions → all are Pareto-optimal
2. The GUPF (envelope of all UPFs) contains infinitely many Pareto-optimal points
3. SW maximization requires tangency between the GUPF and the highest social indifference contour — only one point on the GUPF
satisfies this
4. Points $c$, $c_1$, $d$ on the GUPF are all Pareto-optimal, but $d$ may lie on a higher social indifference contour

| Criterion | What it does | Limitation |
|-----------|-------------|------------|
| Pareto optimality | Identifies efficient allocations | Cannot rank Pareto-optimal points |
| Bergson SWF | Selects single best point (tangency with GUPF) | Requires explicit value judgements |

**Conclusion:** Pareto optimality is *necessary* (any SW maximum must be efficient) but *not sufficient* (among infinite
Pareto-efficient allocations, only one maximizes SW given the SWF).

---

#### 4.2.4 Externalities and Pareto Optimality: Pigouvian Tax/Subsidy

When externalities exist, private optimization does not yield Pareto optimality. Consider two firms in a competitive market
($p = 15$):

| Firm | Cost function | Externality |
|------|-------------|-------------|
| Firm 1 | $C_1 = 0.1q_1^2 + 5q_1 - 0.1q_2^2$ | $-\partial C_1/\partial q_2 > 0$ → external economy from Firm 2 |
| Firm 2 | $C_2 = 0.2q_2^2 + 7q_2 + 0.025q_1^2$ | $+\partial C_2/\partial q_1 > 0$ → external diseconomy from Firm 1 |

**Private optimum** (each firm maximizes own profit, $MC_i = p$):
- $MC_1^{priv} = 0.2q_1 + 5 = 15 \Rightarrow q_1 = 50$
- $MC_2^{priv} = 0.4q_2 + 7 = 15 \Rightarrow q_2 = 20$
- Total private profit = $290 + 17.5 = 307.5$

**Social optimum** (maximize joint profit, internalize externalities):

> **Let's work through this step by step.**
> We start with you cost functions and summing them to get total social cost:
> 1. $C_1 = 0.1q_1^2 + 5q_1 - 0.1q_2^2$ and $C_2 = 0.2q_2^2 + 7q_2 + 0.025q_1^2$
> 2. Total cost: $TC = C_1 + C_2 = (0.1q_1^2 + 5q_1 - 0.1q_2^2) + (0.2q_2^2 + 7q_2 + 0.025q_1^2)$
> 3. Grouping $q_1$ terms: $0.1q_1^2 + 0.025q_1^2 = 0.125q_1^2$
> 4. Grouping $q_2$ terms: $-0.1q_2^2 + 0.2q_2^2 = 0.1q_2^2$
> 5. Linear terms: $5q_1 + 7q_2$
> 6. → Final form: $$TC = C_1 + C_2 = 0.125q_1^2 + 0.1q_2^2 + 5q_1 + 7q_2$$
>
> **Here's what's really going on:** The social cost function internalizes the externalities — the cross-effect terms from Firm 2 on Firm 1
  (negative, reducing Firm 1's costs) and from Firm 1 on Firm 2 (positive, increasing Firm 2's costs) are consolidated into the quadratic coefficients.

$$TC = C_1 + C_2 = 0.125q_1^2 + 0.1q_2^2 + 5q_1 + 7q_2$$
- $SMC_1 = 0.25q_1 + 5 = 15 \Rightarrow q_1^* = 40$
- $SMC_2 = 0.2q_2 + 7 = 15 \Rightarrow q_2^* = 40$
- Total social profit = $400 + (-40) = 360$

**Pigouvian correction:**
| Firm | Problem | Policy |
|------|---------|--------|
| Firm 1: $50 \to 40$ | Overproduces (external diseconomy) | Tax $t = \partial C_2/\partial q_1 = 0.05(40) = 2$ per unit |
| Firm 2: $20 \to 40$ | Underproduces (external economy) | Subsidy $s = -\partial C_1/\partial q_2 = 0.2(40) = 8$ per unit |

**Verification:** With tax: $MC_1 + 2 = 0.2q_1 + 7 = 15 \Rightarrow q_1 = 40$. With subsidy:
$MC_2 - 8 = 0.4q_2 - 1 = 15 \Rightarrow q_2 = 40$.

**Social dividend** $= 360 - 307.5 = 52.5$ — the net gain to society from correcting the externality.

---

> **Koutsoyiannis Insight: Pareto Optimality and the Edgeworth Box**
>
> Koutsoyiannis (Ch.23, §4) emphasizes that the Pareto criterion is **purely objective** — it requires no interpersonal utility
  comparisons. In the $2 \times 2$ Edgeworth exchange box (figure 23.1), the contract curve contains all Pareto-efficient distributions. Any point **off** the contract curve (e.g., point $z$) is inefficient: a reallocation to any point between $a$ and $b$ along the contract curve increases the utility of at least one consumer without harming the other.
>
> The three Pareto conditions (exchange, production, product-mix) precisely characterize the general equilibrium of a perfectly
  competitive system. A point off the contract curve represents unexploited gains from trade — the hallmark of Pareto inefficiency.
>
> *Source: Koutsoyiannis, Ch.23, §4 (pp. 526-529)*

### 4.3 The First and Second Welfare Theorems
**Why this matters for your exam:** The welfare theorems are the crown jewels of general equilibrium theory. The First Theorem says markets deliver efficiency; the Second says any efficient outcome can be implemented via markets with redistribution. Expect at least one question testing the direction, assumptions, and policy implications of each theorem — especially the separation of efficiency and equity.

#### 4.3.1 First Welfare Theorem (Invisible Hand Theorem)

> **Every competitive equilibrium is Pareto-optimal.**

*Formal statement:* If all agents have locally non-satiated preferences and markets are perfectly competitive, every Walrasian
equilibrium allocation is Pareto-efficient.

**Key assumption:** Local non-satiation — for any bundle $x$ and $\varepsilon > 0$, there exists $x'$ within $\varepsilon$ of $x$
that is strictly preferred. This ensures budget constraints bind at equilibrium.

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

---

**Proof of the First Welfare Theorem (by contradiction):**

Assume $(x, y)$ is a WEA at prices $p^*$ but is not Pareto efficient. Then there exists a feasible allocation $(\hat{x}, \hat{y})$
such that $u_i(\hat{x}_i) \ge u_i(x_i)$ for all $i$ with strict inequality for at least one $i$. Since utility functions are strictly increasing, this implies $p^* \cdot \hat{x}_i \ge p^* \cdot x_i$ for all $i$, with strict inequality for at least one $i$. Summing:

> **Let's work through this step by step.**
> We start with the assumption that $(\hat{x}, \hat{y})$ is a Pareto improvement over the WEA $(x, y)$ at prices $p^*$:
> 1. For all consumers $i$: $u_i(\hat{x}_i) \ge u_i(x_i)$, with strict for some $i$
> 2. By local non-satiation and utility maximization, $p^* \cdot \hat{x}_i \ge p^* \cdot x_i$ (otherwise $\hat{x}_i$ would be
  affordable and preferred)
> 3. For at least one $i$ where $u_i(\hat{x}_i) > u_i(x_i)$, we have strict inequality: $p^* \cdot \hat{x}_i > p^* \cdot x_i$
> 4. Summing over all consumers: $\sum_i p^* \cdot \hat{x}_i > \sum_i p^* \cdot x_i$
> 5. Factor out $p^*$: $p^* \cdot \sum_i \hat{x}_i > p^* \cdot \sum_i x_i$
> 6. → Final form: $$p^* \cdot \sum_i \hat{x}_i > p^* \cdot \sum_i x_i$$
>
> **Here's what's really going on:** A Pareto improvement must have strictly greater total expenditure at equilibrium prices — otherwise it could not
  make anyone strictly better off. This is the key inequality that leads to the contradiction.

$$p^* \cdot \sum_i \hat{x}_i > p^* \cdot \sum_i x_i$$

By feasibility, $\sum_i \hat{x}_i = \sum_i e_i + \sum_j \hat{y}_j$ and $\sum_i x_i = \sum_i e_i + \sum_j y_j$. Substituting:

> **Let's work through this step by step.**
> We start with the feasibility conditions and the inequality derived above:
> 1. Total consumption equals total endowment plus total production: $\sum_i \hat{x}_i = \sum_i e_i + \sum_j \hat{y}_j$ and
  $\sum_i x_i = \sum_i e_i + \sum_j y_j$
> 2. Substituting into $p^* \cdot \sum_i \hat{x}_i > p^* \cdot \sum_i x_i$:
> 3. $p^* \cdot (\sum_i e_i + \sum_j \hat{y}_j) > p^* \cdot (\sum_i e_i + \sum_j y_j)$
> 4. The endowment terms cancel: $p^* \cdot \sum_i e_i$ on both sides
> 5. → Final form: $$p^* \cdot \sum_j \hat{y}_j > p^* \cdot \sum_j y_j$$
>
> **Here's what's really going on:** After canceling endowments, the inequality reduces to total production value at the candidate allocation
  exceeding total production value at the equilibrium — which contradicts profit maximization.

$$p^* \cdot \sum_j \hat{y}_j > p^* \cdot \sum_j y_j$$

Thus $p^* \cdot \hat{y}_j > p^* \cdot y_j$ for some firm $j$, meaning $y_j$ was not profit-maximizing — contradicting that
$(x, y)$ is a WEA. Hence every WEA must be Pareto efficient. ∎

*Source: Munoz-Garcia, Ch.6, §6.5 (pp. 457-458)*

#### 4.3.2 Second Welfare Theorem

> **Any Pareto-optimal allocation we can realize as a competitive equilibrium with appropriate lump-sum transfers.**

*Formal statement:* Under convexity of preferences and production sets, for any Pareto-optimal allocation, there exists a set of
prices and lump-sum transfers such that the allocation is a competitive equilibrium.

**Key assumptions:** Convex preferences, convex production sets, lump-sum transfers (fixed transfers independent of choices,
preserving marginal incentives).

**Direction:**

> **Let's work through this step by step.**
> We start with the directional relationship between the two welfare theorems:
> 1. First Welfare Theorem (FWT): A Competitive Equilibrium (CE) is Pareto Optimal (PO), requiring only local non-satiation
> 2. Second Welfare Theorem (SWT): A Pareto Optimal allocation can be decentralized as a Competitive Equilibrium, requiring
  convexity and lump-sum transfers
> 3. The arrows show the logical direction: CE → PO for FWT; PO → CE for SWT
> 4. → Final form: $$\text{FWT: CE } \xrightarrow{\text{local non-satiation}} \text{ PO} \qquad \text{SWT: PO }
  \xrightarrow{\text{convexity + transfers}} \text{ CE}$$
>
> **Here's what's really going on:** The two theorems are converses: the First says markets deliver efficiency (minimal assumptions), the Second says
  any efficient outcome can be implemented through markets (stronger assumptions needed). Together they justify the separation of efficiency from equity.

$$\text{FWT: CE } \xrightarrow{\text{local non-satiation}} \text{ PO} \qquad \text{SWT: PO } \xrightarrow{\text{convexity + transfers}} \text{ CE}$$

---

#### 4.3.3 Comparison and Implications

| Feature | First Theorem | Second Theorem |
|---------|---------------|----------------|
| Direction | CE $\to$ PO | PO $\to$ CE |
| Key assumption | Local non-satiation | Convexity of preferences/production |
| Policy implication | Markets work — don't interfere | Redistribute endowments, then let markets work |
| Practical limitation | Real markets have imperfections | Lump-sum transfers infeasible in practice |

**Separation of efficiency and equity:** The two theorems together imply that society can first choose a "fair" distribution (via
lump-sum transfers) and then let competitive markets achieve efficiency. The government should redistribute endowments, not intervene in prices.

**When the theorems fail (market failures):**
| Failure | Effect |
|---------|--------|
| Market power | $P > MC \Rightarrow MRPT \neq MRS$ |
| Externalities | Private $\neq$ social cost |
| Public goods | Free-rider $\Rightarrow$ underprovision |
| Asymmetric information | Adverse selection, moral hazard |
| Non-convexities | No competitive equilibrium exists |

#### 4.3.4 Does Perfect Competition Ensure Welfare Maximization?

**Short answer:** Perfect competition ensures *Pareto efficiency* (FWT) but does NOT guarantee *social welfare maximization*,
which also requires distributional equity.

**Why competition ensures efficiency:** Under perfect competition, all three marginal conditions are automatically satisfied in
general equilibrium via the price mechanism.

**Why competition does NOT ensure SW maximization:**

1. **Pareto $\neq$ SW maximum:** All points on the GUPF are Pareto-optimal, but only one maximizes SW (tangency with SWF)
2. **Initial endowment distribution matters:** Different endowments $\to$ different competitive equilibria (all PO, but different
utility distributions)
3. **Market failures** prevent even Pareto optimality
4. **Distributional equity** requires active redistribution — markets have no tendency toward equity

**The theoretical ideal:** Perfect competition (for efficiency) + Lump-sum transfers (for equity) + SWF (for distributional
choice).

---

> **Munoz-Garcia Insight: Lagrangian Derivation of Pareto Conditions from Competitive Equilibrium**
>
> Munoz-Garcia (§6.5) shows that the three Pareto conditions emerge from a single constrained optimization problem. The social
  planner maximizes one consumer's utility subject to (i) a minimum utility constraint for the other consumer, (ii) technological feasibility, and (iii) input feasibility:
>
> > **Let's work through this step by step.**
> > Starting from the planner's problem of maximizing social welfare in the $2\times2\times2$ economy:
> > 1. Choose consumer 1's utility as the objective to maximize
> > 2. Constrain consumer 2's utility to be at least $\bar{u}_2$
> > 3. Production feasibility: total consumption of each good cannot exceed total production
> > 4. Factor feasibility: total labor and capital used in production cannot exceed endowments
> > 5. Choice variables: consumption allocations $(x_1^A, x_2^A, x_1^B, x_2^B)$ and factor allocations $(L_1, K_1, L_2, K_2)$
> > 6. → Final form: $$\max_{x_1^A, x_2^A, x_1^B, x_2^B, L_1, K_1, L_2, K_2} u_1(x_1^1, x_2^1)$$
> >
> > **Here's what's really going on:** The social planner chooses consumption and production plans simultaneously, subject to technological and
    resource constraints — a general equilibrium optimization.
>
> $$\max_{x_1^A, x_2^A, x_1^B, x_2^B, L_1, K_1, L_2, K_2} u_1(x_1^1, x_2^1)$$
>
> > **Let's work through this step by step.**
> > The constraints of the planner's problem:
> > 1. Consumer 2's utility must be at least $\bar{u}_2$: $u_2(x_1^2, x_2^2) \ge \bar{u}_2$
> > 2. Good 1 feasibility: total consumption $\le$ total production: $x_1^1 + x_1^2 \le F_1(L_1, K_1)$
> > 3. Good 2 feasibility: $x_2^1 + x_2^2 \le F_2(L_2, K_2)$
> > 4. Labor constraint: $L_1 + L_2 \le \bar{L}$
> > 5. Capital constraint: $K_1 + K_2 \le \bar{K}$
> > 6. → Final forms:
> >    $$\text{s.t.}\quad u_2(x_1^2, x_2^2) \ge \bar{u}_2$$
> >    $$x_1^1 + x_1^2 \le F_1(L_1, K_1),\quad x_2^1 + x_2^2 \le F_2(L_2, K_2)$$
> >    $$L_1 + L_2 \le \bar{L},\quad K_1 + K_2 \le \bar{K}$$
> >
> > **Here's what's really going on:** These five constraints capture the entire general equilibrium system: utility, technology, and resource
    endowments all bind the planner's choices.
>
> $$\text{s.t.}\quad u_2(x_1^2, x_2^2) \ge \bar{u}_2$$
> $$x_1^1 + x_1^2 \le F_1(L_1, K_1),\quad x_2^1 + x_2^2 \le F_2(L_2, K_2)$$
> $$L_1 + L_2 \le \bar{L},\quad K_1 + K_2 \le \bar{K}$$
>
> The Lagrangian is:
>
> > **Let's work through this step by step.**
> > Starting from the objective and constraints assembled above:
> > 1. Objective: $u_1(x_1^1, x_2^1)$
> > 2. Lagrange multiplier $\lambda$ for the utility constraint with term $\lambda[u_2(\cdot) - \bar{u}_2]$
> > 3. Lagrange multipliers $\mu_1, \mu_2$ for the two production feasibility constraints
> > 4. Lagrange multipliers $\delta_L, \delta_K$ for the two factor endowment constraints
> > 5. Combine all terms into the Lagrangian sum: objective + weighted constraints
> > 6. → Final form: $$\mathcal{L} = u_1(\cdot) + \lambda[u_2(\cdot) - \bar{u}_2] + \mu_1[F_1(\cdot) - x_1^1 - x_1^2] +
    \mu_2[F_2(\cdot) - x_2^1 - x_2^2] + \delta_L[\bar{L} - L_1 - L_2] + \delta_K[\bar{K} - K_1 - K_2]$$
> >
> > **Here's what's really going on:** Each Lagrange multiplier represents the shadow price of relaxing the corresponding constraint — $\mu_1$ is the
    marginal social value of good 1, $\delta_L$ is the marginal social value of labor, etc. The FOCs will replicate competitive equilibrium prices.
>
> $$\mathcal{L} = u_1(\cdot) + \lambda[u_2(\cdot) - \bar{u}_2] + \mu_1[F_1(\cdot) - x_1^1 - x_1^2] + \mu_2[F_2(\cdot) - x_2^1 -
  x_2^2] + \delta_L[\bar{L} - L_1 - L_2] + \delta_K[\bar{K} - K_1 - K_2]$$
>
> **FOCs yield:**
> 1. **Consumption efficiency:** $\displaystyle MRS_{1,2}^1 = MRS_{1,2}^2$ (from ratios of $\partial\mathcal{L}/\partial x_1^i$
  and $\partial\mathcal{L}/\partial x_2^i$)
> 2. **Production efficiency:** $\displaystyle MRTS_{L,K}^1 = MRTS_{L,K}^2$ (from ratios of $\partial\mathcal{L}/\partial L_j$ and
  $\partial\mathcal{L}/\partial K_j$)
> 3. **Product-mix efficiency:** $\displaystyle MRS_{1,2}^i = MRT_{1,2}$ (combining the consumption and production FOCs)
>
> A competitive equilibrium **decentralizes** this planner's problem: each consumer maximizes utility at given prices, each firm
  maximizes profit at given prices, and prices adjust until all markets clear. The price system simultaneously solves all three efficiency conditions.
>
> *Source: Munoz-Garcia, Ch.6, §6.5 (pp. 456-460)*

---

> **Munoz-Garcia Insight: The Second Welfare Theorem and Redistribution**
>
> The SWT (Munoz-Garcia, §6.4.2) states: if a PEA $x$ (on the contract curve) is the desired social allocation, we can
  redistribute initial endowments from $e$ to $e^*$ (where $p^* \cdot e_i^* = p^* \cdot x_i$ for every consumer $i$) and then let competitive markets operate. The resulting WEA will be exactly $x$. This is the formal basis for the **separation of efficiency and equity**: society can first choose a "fair" distribution (via lump-sum endowment redistribution) and then rely on competitive markets to achieve efficiency.
>
> The SWT requires convexity because non-convex preferences or production sets can create gaps in the supporting hyperplane — the
  Pareto-optimal point may not have a price system that sustains it as a competitive equilibrium.
>
> *Source: Munoz-Garcia, Ch.6, §6.4.2 (pp. 444-447)*

---

> **Arrow-Debreu Fixed-Point Argument for Existence of Competitive Equilibrium**
>
> We cannot guarantee the existence of a Walrasian equilibrium by counting equations — it requires a fixed-point argument.
  Munoz-Garcia (Mathematical Appendix, §A.12) outlines the logic:
>
> Define the aggregate excess demand function $z(p) = \sum_i x_i(p, p \cdot e_i) - \sum_i e_i$. Under standard assumptions
  (continuity, homogeneity of degree zero, Walras' law), $z(p)$ maps from the price simplex into itself. A Walrasian equilibrium is a price vector $p^*$ such that $z(p^*) \le 0$.
>
> **Brouwer's Fixed Point Theorem:** If $f: A \to A$ is a continuous function from a compact, convex set into itself, then there
  exists $x \in A$ such that $f(x) = x$.
>
> Construct $g(p) = p + \max(0, z(p))$ and normalize. Then $g(p)$ is continuous and maps the price simplex into itself. By
  Brouwer's theorem, there exists $p^*$ such that $g(p^*) = p^*$, which implies $z(p^*) \le 0$ — i.e., equilibrium exists. For correspondences (e.g., with non-convexities), Kakutani's fixed-point theorem extends the result.
>
> Arrow and Debreu (1954) used this approach to prove the existence of competitive equilibrium in a general production economy,
  establishing the logical consistency of the Walrasian model.
>
> *Source: Munoz-Garcia, Mathematical Appendix, §A.12 (pp. 845-848); Arrow-Debreu, Econometrica (1954)*

### 4.4 Social Welfare Functions
**Why this matters for your exam:** SWFs formalize society's distributional preferences. You need to know the major types (Utilitarian, Rawlsian, Nash, Bergson-Samuelson), their indifference curves, and how they select the "bliss point" on the GUPF. The Kaldor-Hicks compensation principle and Scitovsky double test are frequent exam topics too.

#### 4.4.1 Definition

A **Social Welfare Function (SWF)** is a rule $W = F(U_1, U_2, \dots, U_n)$ that ranks alternative social states based on
individual utility levels. Introduced by Bergson (1938) and developed by Samuelson, it embodies society's value judgements about distribution:

> **Let's work through this step by step.**
> We start with the concept of aggregating individual utilities into a social ranking:
> 1. Let $U_i$ represent the utility of individual $i$ (typically an ordinal index)
> 2. A social welfare function $W$ maps the vector of individual utilities into a real number
> 3. The Pareto principle requires $\partial W / \partial U_i > 0$ for all $i$ — if anyone's utility rises (all else equal),
  social welfare rises
> 4. This is the minimal ethical restriction: society should never prefer a Pareto-inferior outcome
> 5. → Final form: $$W = F(U_1, U_2, \dots, U_n) \quad \text{with} \quad \partial W / \partial U_i > 0 \ \forall i$$
>
> **Here's what's really going on:** The SWF formalizes society's distributional preferences as a mathematical function. The positivity restriction
  on partial derivatives ensures the SWF respects the Pareto criterion — a fundamental normative requirement.

$$W = F(U_1, U_2, \dots, U_n) \quad \text{with} \quad \partial W / \partial U_i > 0 \ \forall i$$

Social welfare contours (in $U_A$-$U_B$ space) are downward-sloping, do not intersect, and higher contours represent higher
welfare.

#### 4.4.2 Types of SWF

| Type | Formula | Social indifference curve | Equity concern |
|------|---------|--------------------------|---------------|
| **Utilitarian (Bentham)** | $W = \sum_i U_i$ | Linear, slope $-1$ | None (sum-ranking) |
| **Rawlsian (maximin)** | $W = \min_i U_i$ | L-shaped (right-angle) | Extreme (only worst-off matters) |
| **Nash (multiplicative)** | $W = \prod_i U_i$ | Rectangular hyperbola | Moderate inequality aversion |
| **Bergson-Samuelson** | $W = F(U_1, \dots, U_n)$ | General form | Any degree of inequality aversion |

**Utilitarian:** A gain of 1 util to a rich person = a gain of 1 util to a poor person. Ignores inequality — a transfer from poor
to rich with $\Delta W = 0$ is "acceptable."

**Rawlsian:** Only the worst-off person matters. Any change that improves the worst-off is good, even if it dramatically reduces
everyone else's utility. Philosophical basis: Rawls (1971) *A Theory of Justice* — "veil of ignorance."

#### 4.4.3 Grand Utility Possibility Frontier and Point of Bliss

**Derivation of GUPF (4 steps):**

1. **PPC:** Each point on the production possibility curve is a Pareto-efficient output combination $(X, Y)$
2. **UPF:** For a given product-mix, construct the Edgeworth exchange box. The contract curve yields a utility possibility
frontier — the set of efficient utility pairs $(U_A, U_B)$
3. **GUPF:** The outer envelope of all UPFs across every product-mix on the PPC. It represents the maximum utility combinations
feasible given resources and technology
4. **Point of Bliss:** Tangency between the GUPF and the highest attainable social indifference contour

**Condition at bliss point:**

> **Let's work through this step by step.**
> We start with the three Pareto conditions that must hold along the entire GUPF:
> 1. Consumption efficiency requires $MRS_{XY}^A = MRS_{XY}^B$ — common MRS across all consumers
> 2. Production efficiency requires $MRTS_{LK}^X = MRTS_{LK}^Y$ — common MRTS across all firms
> 3. Product-mix efficiency requires $MRPT_{XY} = MRS_{XY}$ — the output transformation rate equals consumers' common MRS
> 4. These three equalities hold at every Pareto-efficient point, hence everywhere on the GUPF
> 5. → Final form: $$MRPT_{XY} = MRS^A_{XY} = MRS^B_{XY} \quad \text{(Pareto efficiency — holds on entire GUPF)}$$
>
> **Here's what's really going on:** The entire GUPF we characterize by all three Pareto conditions holding simultaneously. These conditions say
  nothing about distribution — they only ensure efficiency.

$$MRPT_{XY} = MRS^A_{XY} = MRS^B_{XY} \quad \text{(Pareto efficiency — holds on entire GUPF)}$$

> **Let's work through this step by step.**
> We start with the welfare maximization problem at the bliss point:
> 1. Social welfare is maximized where the highest social indifference curve touches the GUPF
> 2. At the point of tangency, the slope of the social indifference curve equals the slope of the GUPF
> 3. The slope of the social indifference curve we get the ratio of marginal social weights:
  $-(\partial W/\partial U_A) / (\partial W/\partial U_B)$
> 4. This tangency condition selects one unique point among all Pareto-efficient points on the GUPF
> 5. → Final form: $$\text{Slope(GUPF)} = \text{Slope(Social Indifference Contour)} \quad \text{(distributional judgement — only
  at bliss)}$$
>
> **Here's what's really going on:** While Pareto efficiency holds everywhere on the GUPF, the distributional judgement (which point is "best") is
  determined by the shape of the SWF — the tangency condition selects the social optimum.

$$\text{Slope(GUPF)} = \text{Slope(Social Indifference Contour)} \quad \text{(distributional judgement — only at bliss)}$$

The bliss point determines all ten unknowns in the $2\times2\times2$ model:
$X^*, Y^*, X_A^*, X_B^*, Y_A^*, Y_B^*, L_X^*, L_Y^*, K_X^*, K_Y^*$.

#### 4.4.4 Kaldor-Hicks Compensation and the Scitovsky Double Test

**Kaldor-Hicks compensation principle (1939):** A change from state $A$ to state $B$ improves social welfare if the gainers could
*potentially* compensate the losers and still remain better off — regardless of whether compensation is actually paid:

> **Let's work through this step by step.**
> We start with the compensation principle's logic:
> 1. A change from $A$ to $B$ creates gainers (who would pay to secure the change) and losers (who would pay to avoid it)
> 2. WTP (willingness to pay) of gainers measures the maximum they would pay for the change
> 3. WTA (willingness to accept) of losers measures the minimum they would accept to permit the change
> 4. If total WTP exceeds total WTA, the gainers could hypothetically compensate the losers and still be better off
> 5. → Final form: $$\text{Change } A \to B \text{ is K-H efficient } \iff \sum \text{WTP}_{\text{gainers}} > \sum
  \text{WTA}_{\text{losers}}$$
>
> **Here's what's really going on:** Kaldor-Hicks uses a monetary metric to compare welfare changes across individuals. The "potential compensation"
  criterion sidesteps the need for actual redistribution — if the gainers could compensate, the change is considered efficient regardless of whether they do.

$$\text{Change } A \to B \text{ is K-H efficient } \iff \sum \text{WTP}_{\text{gainers}} > \sum \text{WTA}_{\text{losers}}$$

**Critical assumption — Equal MU of money:** For monetary amounts to be comparable across individuals, each unit of money must
represent the same utility change for everyone. If the MU of money differs (e.g., millionaire vs. poor person), the comparison breaks down.

**Can compensation be correct?**
| Condition | Verdict |
|-----------|---------|
| MU of money EQUAL across individuals | YES — £1 gain = £1 loss in utility terms |
| MU of money UNEQUAL | NO — example: millionaire gains £2000 (low MU), poor loses £1000 (high MU) → total utility falls despite K-H "pass" |
| Potential $\neq$ actual compensation | AMBIGUOUS — distributional change ignored |
| Constant MU unrealistic | NO — MU of money declines with income |

**Scitovsky paradox (1941):** Kaldor-Hicks can produce contradictory rankings when utility possibility curves intersect:

> **Let's work through this step by step.**
> We start with the definition of the Scitovsky paradox:
> 1. Under Kaldor-Hicks, state $A$ is preferred to $B$ if gainers from $A \to B$ can compensate losers: $A \succ_{KH} B$
> 2. The paradox arises when $A \succ_{KH} B$ AND $B \succ_{KH} A$ simultaneously — a cycle
> 3. This occurs when utility possibility frontiers intersect: the compensating tests pass in both directions
> 4. → Final form: $$A \succ_{KH} B \quad \text{AND} \quad B \succ_{KH} A$$
>
> **Here's what's really going on:** The Kaldor-Hicks criterion is not transitive when UPFs intersect. The ranking depends on the starting point,
  producing contradictory welfare judgements. This motivated Scitovsky's double test as a consistency check.

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

> **Bergson-Samuelson SWF: Formal Definition and Relation to the GUPF**
>
> Bergson (1938) formalized the SWF as follows. Let $\mathbf{U} = (U_1, \dots, U_n)$ be the vector of individual utilities
  (ordinal indexes, interpersonally non-comparable). A **Bergson-Samuelson SWF** is a real-valued function $W = \mathcal{W}(\mathbf{U})$ that satisfies:
>
> 1. **Pareto principle:** $\partial \mathcal{W} / \partial U_i > 0$ for all $i$ (if anyone's utility rises, ceteris paribus,
  welfare rises)
> 2. **Continuity:** $\mathcal{W}$ is continuous in $\mathbf{U}$
> 3. **Convexity/concavity:** The degree of concavity reflects society's inequality aversion
>
> **Connection to the GUPF:** The Grand Utility Possibility Frontier (GUPF) is the locus of Pareto-efficient utility pairs
  $(U_A, U_B)$ satisfying all three marginal conditions. Social welfare maximization occurs at the point of tangency:
>
> > **Let's work through this step by step.**
> > Starting from the problem of choosing the social optimum:
> > 1. Society maximizes $\mathcal{W}(U_A, U_B)$ subject to the constraint that $(U_A, U_B)$ lies on the GUPF
> > 2. The GUPF represents the maximum utility combinations feasible given all resource and technology constraints
> > 3. Form the Lagrangian: $\mathcal{L} = \mathcal{W}(U_A, U_B) - \lambda(\text{GUPF constraint})$
> > 4. The first-order condition equates the marginal rate of substitution along the SWF to the slope of the GUPF
> > 5. → Final form: $$\max_{U_A, U_B} \mathcal{W}(U_A, U_B) \quad \text{s.t.} \quad (U_A, U_B) \in \text{GUPF}$$
> >
> > **Here's what's really going on:** Social welfare maximization is a constrained optimization problem: pick the feasible utility pair that reaches
    the highest social indifference curve, which occurs at tangency with the GUPF.
>
> $$\max_{U_A, U_B} \mathcal{W}(U_A, U_B) \quad \text{s.t.} \quad (U_A, U_B) \in \text{GUPF}$$
>
> The tangency condition
  $\displaystyle \frac{\partial \mathcal{W}/\partial U_A}{\partial \mathcal{W}/\partial U_B} = \text{Slope(GUPF)}$ determines the "bliss point" — the unique allocation that balances efficiency and equity according to the value judgements embedded in $\mathcal{W}$.
>
> *Source: Koutsoyiannis, Ch.23, §A.6 (pp. 529-530); Munoz-Garcia, Ch.6, §6.4.2*

---

> **Koutsoyiannis Insight: Deriving the GUPF via the Envelope Condition**
>
> Koutsoyiannis (Ch.23, §B.1) presents an elegant way to derive the GUPF. For each point on the PPC (e.g., point $a$ with
  product-mix $Y_0 X_0$), construct the Edgeworth exchange box and locate the point on the contract curve where $MRS = MRPT$ (i.e., where the indifference curve slope equals the PPC slope at $a$). This single point on each UPF — and only this point — belongs to the **envelope** or GUPF.
>
> The GUPF is therefore not simply all UPFs combined, but the outer envelope of points satisfying $MRPT = MRS$. This ensures that
  along the GUPF, all three Pareto conditions hold simultaneously: $MRS^A = MRS^B$ (exchange efficiency), $MRTS^X = MRTS^Y$ (production efficiency), and $MRPT = MRS$ (product-mix efficiency).
>
> *Source: Koutsoyiannis, Ch.23, §B.1 (pp. 531-533)*

---

> **Scitovsky Reversal Test — Numerical Example**
>
> Consider two states, $S_1$ and $S_2$, with two consumers (A = rich, B = poor). The UPFs for the two states intersect:
>
> | State | $U_A$ | $U_B$ |
> |-------|-------|-------|
> | $S_1$ | 100 | 40 |
> | $S_2$ | 80 | 60 |
>
> **Forward test ($S_1 \to S_2$):** A loses 20 utils, B gains 20 utils. Under K-H, if A's WTA (willingness to accept) the loss is,
  say, £20 (low MU of money for rich), and B's WTP (willingness to pay) for the gain is £30 (high MU of money for poor), then £30 > £20 so the test passes — $S_2$ is preferred.
>
> **Reversal test ($S_2 \to S_1$):** A gains 20 utils, B loses 20 utils. A's WTP for the gain might be £15 (low MU), B's WTA for
  the loss might be £40 (high MU). Now £40 > £15, so the reversal test also passes — $S_1$ is preferred!
>
> This contradiction arises because the UPFs of $S_1$ and $S_2$ intersect, so the Kaldor-Hicks criterion is not transitive.
>
> **Scitovsky's Double Test resolves this:**
> 1. **Forward test:** Gainers can compensate losers (K-H test passes)
> 2. **Reversal test:** Losers *cannot* bribe gainers to reject the change
>
> A change is welfare-improving only if (i) passes AND (ii) fails. In the example above, both tests pass, so the change is
  rejected as contradictory.
>
> *Source: Koutsoyiannis, Ch.23, §5; Scitovsky (1941)*

### 4.5 Assumptions of Social Welfare Maximization in the $2\times2\times2$ Model
**Why this matters for your exam:** This checklist distinguishes assumptions needed for Pareto optimality from those needed for full SW maximization. Many students lose marks by confusing the two — make sure you know which assumptions are required for each stage.

| Category | Assumptions |
|----------|-------------|
| **Structure** | 2 factors ($L$, $K$, fixed supply); 2 goods ($X$, $Y$); 2 consumers ($A$, $B$); each firm produces one good |
| **Efficiency (Pareto)** | $MRS^A = MRS^B$, $MRTS^X = MRTS^Y$, $MRPT = MRS$ |
| **Competition (for FWT)** | Price-taking, complete markets, no externalities, no public goods, convex preferences/technology, perfect information, perfect factor mobility |
| **Distributional (beyond Pareto)** | Existence of a SWF $F(U_A, U_B)$, concave SWF, no interpersonal utility comparisons (the SWF embeds these as value judgements) |

**Key distinction:** Assumptions for Pareto optimality (market structure, convexity, no externalities) vs. additional assumptions
for SW maximization (existence of SWF, value judgements) — many students miss the second category.

---

### 4.6 Arrow's Impossibility Theorem
**Why this matters for your exam:** Arrow's theorem is a classic result that every economist should know. You should be able to state the four conditions, explain why they cannot all be satisfied simultaneously, and distinguish Bergson-Samuelson SWFs from Arrow's aggregation approach.

Arrow (1951) proved that no SWF can simultaneously satisfy:
1. **Universal domain** (all possible preference profiles allowed)
2. **Pareto principle** (if everyone prefers $A$ to $B$, society prefers $A$ to $B$)
3. **Independence of irrelevant alternatives** (social ranking of $A$ vs $B$ depends only on individual rankings of $A$ vs $B$)
4. **Non-dictatorship** (no single individual's preferences determine social preferences)

**Bergson-Samuelson SWF** (used in optimization) vs. **Arrow's SWF** (preference aggregation) are fundamentally different
concepts:

| Bergson-Samuelson | Arrow |
|-------------------|-------|
| Assumes a social planner with explicit value judgements | Attempts to aggregate individual preferences |
| Used for constrained optimization (bliss point) | Used for aggregation rules |
| Viable for policy analysis | Proves impossibility of perfect aggregation |

---

### 4.7 Key Formulas — Welfare Economics
**Why this matters for your exam:** This table summarizes all welfare criteria in one place — a quick reference for comparing Pareto, Kaldor-Hicks, Scitovsky, Bergson, Utilitarian, and Rawlsian approaches. Use it for last-minute revision.

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
- [ ] Pigouvian tax/subsidy algorithm: private optimum $\to$ social optimum $\to$ tax = marginal external effect $\to$ social
dividend
- [ ] Arrow's Impossibility: UD + P + IIA + ND cannot all be satisfied

---

<!-- Enhanced by Munoz-Garcia & Koutsoyiannis textbook references -->

<!-- ============================================================
TOPIC 5: GENERAL EQUILIBRIUM
============================================================ -->
## <a id="topic-5"></a>Topic 5: General Equilibrium

> **Exam weight:** 14 marks (typically 1 question). Common question types: GE vs PE comparison, existence/uniqueness/stability
  analysis, Walras' Law and numeraire, Edgeworth box problems with numerical solutions, the three Pareto conditions and welfare theorems.
> **Key sources:** Koutsoyiannis Ch.22-23, Munoz-Garcia §6.1-6.5

---

### 5.1 General Equilibrium vs Partial Equilibrium

**Why this matters for your exam:** Before you dive into the mechanics of GE, you need to see how it differs from the partial equilibrium (PE) toolkit you already know. This comparison is a staple short-answer question — get comfortable with the table below and the chain-reaction example.

**Definition:** General equilibrium (GE) is a state in which *all* markets and *all* decision-making units are simultaneously in
equilibrium — every market cleared at positive prices, **you** (as a consumer) maximize utility given your budget, and every firm maximizes profit given its technology (Koutsoyiannis, Ch.22, p.486).

**Let's work through this step by step.** We start with the definition of market-clearing: an equilibrium price vector $p^*$ satisfies $D_i(p^*) = S_i(p^*)$ for every good $i$:

1. Define excess demand in market $i$ as $z_i(p) = D_i(p) - S_i(p)$ — the difference between quantity demanded and supplied at price vector $p$.
2. Market $i$ clears when $z_i(p^*) = 0$, i.e. demand equals supply.
3. General equilibrium requires $z_i(p) = 0$ for all $i$ simultaneously, so $\sum_i z_i(p) = 0$ is the system of $n$ market-clearing conditions.
4. → Compact notation: $\sum_i z_i(p) = 0$ for all $i$, where $z_i(p) = D_i(p) - S_i(p)$.

**Here's what's really going on:** GE is a state where no excess demand or excess supply exists in any market — all markets clear simultaneously at a positive price vector.

$$\text{GE: } \sum_i z_i(p) = 0 \text{ for all } i \text{, where } z_i(p) = D_i(p) - S_i(p)$$

The Arrow-Debreu (1954) existence proof formalises GE as a fixed point of the excess demand mapping.

| Feature | Partial Equilibrium | General Equilibrium |
|---------|-------------------|-------------------|
| Scope | Single market in isolation | All markets simultaneously |
| Feedback | Ignores cross-market effects | Explicitly models interdependence |
| Prices | One price determined (ceteris paribus) | All prices determined simultaneously |
| Equations | One supply = one demand | System of simultaneous equations |
| Example | Tax on tea -> price and quantity in tea market only | Tax on tea -> tea price up -> coffee demand up -> factor reallocation -> wage changes -> income effects -> all markets adjust |

**GE Example:** A drought destroys wheat harvest. PE: wheat price rises. GE: wheat price up -> bread price up -> **you** substitute toward rice -> rice price up -> farmers shift land from cotton to wheat -> cotton price up -> textile costs up -> clothing prices up -> factor markets adjust -> wage/rental changes -> feedback to all markets.

**Example from Koutsoyiannis (p. 491):** An exogenous taste shift toward X (away from substitute Y) raises $P_x$, creates excess profits in X, losses in Y -> firms exit Y, enter X -> factor demand shifts -> $w$ and $r$ change -> LAC shift -> new equilibrium with higher $w$, lower $r$, different product mix.

---

### 5.2 Existence, Uniqueness, and Stability of Equilibrium

**Why this matters for your exam:** These three questions — Does an equilibrium exist? Is it unique? Will the system get back there if shocked? — are the core theoretical concerns of GE. You'll be asked to reason through each one, often with supply-demand diagrams or excess-demand functions.

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

**Formal tatonnement process (Munoz-Garcia §6.3; Koutsoyiannis pp.516-517):** Walras' adjustment mechanism posits an auctioneer who calls out prices and receives demand/supply bids before any transactions occur (a "recontracting" assumption). Prices adjust according to:

**Let's work through this step by step.** We start with Walras' adjustment hypothesis — market forces push prices toward equilibrium:

1. Define $\dot{p}_i = \frac{d p_i}{d t}$ as the instantaneous rate of change of $p_i$ over time.
2. The tatonnement rule posits that price changes are proportional to excess demand: when demand exceeds supply ($z_i > 0$), price rises; when supply exceeds demand ($z_i < 0$), price falls.
3. Introduce the adjustment speed parameter $k_i > 0$, which may differ across markets.
4. → Final form: $\dot{p}_i = k_i \cdot z_i(p)$, with the sign of $\dot{p}_i$ matching the sign of $z_i(p)$.

**Here's what's really going on:** The auctioneer raises prices for goods in excess demand and lowers them for goods in excess supply. At equilibrium ($z_i = 0$), prices stabilise ($\dot{p}_i = 0$). This is a dynamic adjustment process, not actual trading — recontracting ensures no transactions occur at disequilibrium prices.

$$\dot{p}_i = \frac{d p_i}{d t} = k_i \cdot z_i(p), \quad k_i > 0$$

where $\dot{p}_i$ is the time derivative of $p_i$. The equilibrium $p^*$ is **locally stable** if the system converges back to $p^*$ after a small perturbation. Using a linear approximation around $p^*$, stability depends on the eigenvalues of the Jacobian matrix $J_{ij} = \partial z_i / \partial p_j$ at $p^*$. A sufficient condition for stability is that all goods are **gross substitutes** ($\partial z_i/\partial p_j > 0$ for $i \neq j$), as Arrow and Hurwicz (1958) established. Koutsoyiannis (p.517) summarises: "Under the usual disequilibrium behaviour assumptions and the usual properties of a Walrasian general equilibrium system an equilibrium is stable if all commodities are strict gross substitutes."

**Excess demand function approach (Q3 method):** Define $E(P) = QD - QS$:
- Existence: $E(P) = 0$ at some $P > 0$ (Intermediate Value Theorem)
- Stability: sign of $dE/dP$ at equilibrium (negative = stable)
- Uniqueness: monotonicity of $E(P)$

**Four cases to draw:** (1) unique stable, (2) unique unstable, (3) multiple equilibria (alternating stable/unstable), (4) no equilibrium.

**Caution:** Existence does not guarantee uniqueness (multiple equilibria possible with backward-bending supply), and uniqueness does not guarantee stability.

> **Munoz-Garcia Insight: Existence via Fixed-Point Theorem (§6.1, pp.332-335)**
>
> The Arrow-Debreu (1954) existence proof transforms the equilibrium problem into a fixed-point problem. Define the aggregate excess demand function $z(p) = (z_1(p), z_2(p), \dots, z_L(p))$. The properties below guarantee existence of $p^* \gg 0$ such that $z(p^*) = 0$:
>
> 1. **z(p) is continuous** on the price simplex $\Delta = \{ p \in \mathbb{R}^L_{++} : \sum_{i=1}^L p_i = 1 \}$ (follows from continuity of Walrasian demands).
> 2. **z(p) is homogeneous of degree zero**: $z(\lambda p) = z(p)$ for all $\lambda > 0$, so **we** can normalise prices to lie in the unit simplex.
> 3. **Walras' Law holds**: $p \cdot z(p) = 0$ for all $p$, so if $z_i(p) \neq 0$ for some $i$, there must be offsetting signs elsewhere.
> 4. **Boundary behaviour**: As $p_i \to 0$, $z_i(p) \to +\infty$ (**you** demand infinite amounts of a free good).
>
> Define a continuous mapping $g : \Delta \to \Delta$ by:
>
> > **Let's work through this step by step.** We start with the need to construct a continuous mapping whose fixed point corresponds to an equilibrium:
> > 1. Normalise prices to the unit simplex $\Delta = \{ p \in \mathbb{R}^L_{++} : \sum p_i = 1 \}$ — possible because $z(p)$ is HD(0), so only relative prices matter.
> > 2. Construct $g: \Delta \to \Delta$ that increases prices of goods in excess demand and decreases (via normalisation) prices in excess supply.
> > 3. For each good $i$: $p_i$ is adjusted upward by $\max\{0, z_i(p)\}$ (the positive part of excess demand) if $z_i(p) > 0$; otherwise $p_i$ enters unchanged.
> > 4. The denominator $1 + \sum_j \max\{0, z_j(p)\}$ ensures $\sum_i g_i(p) = 1$, keeping the image in $\Delta$.
> > 5. → $g_i(p) = \frac{p_i + \max\{0, z_i(p)\}}{1 + \sum_{j=1}^L \max\{0, z_j(p)\}}$ for each good $i$.
> >
> > **Here's what's really going on:** $g(p)$ "raises" prices of goods with excess demand and "lowers" (via normalisation) prices of goods with excess supply. By Brouwer's fixed-point theorem, $g$ has a fixed point $p^* = g(p^*)$, which implies $z(p^*) = 0$ — a Walrasian equilibrium.
> >
> > $$g_i(p) = \frac{p_i + \max\{0, z_i(p)\}}{1 + \sum_{j=1}^L \max\{0, z_j(p)\}} \quad \text{for each good } i$$
> >
> > By **Brouwer's fixed-point theorem** (every continuous function from a compact, convex set to itself has a fixed point), there exists $p^*$ such that $g(p^*) = p^*$. At this fixed point, the excess demand must satisfy $z_i(p^*) \le 0$ for all $i$, and by Walras' Law, $z_i(p^*) = 0$ for all $i$ — a Walrasian equilibrium. (For correspondences, **Kakutani's fixed-point theorem** generalises the result; Munoz-Garcia, Mathematical Appendix §A.12, pp.845-847.)

> **Munoz-Garcia Insight: Gross Substitutability and Uniqueness (§6.2, pp.337-338)**
>
> **Proof by contradiction (Munoz-Garcia, p.337):** Suppose $p^* \gg 0$ and $p' \gg 0$ are both Walrasian equilibrium price vectors, $z(p^*) = z(p') = 0$, with $p' \neq p^*$. Define $m = \max_j (p'_j / p^*_j) > 1$ (the largest price ratio). Let good $k$ be a good for which $p'_k / p^*_k = m$, so $p'_k = m p^*_k$ while $p'_j \le m p^*_j$ for all $j \neq k$. Now consider the price vector $\tilde{p} = (m p^*_1, \dots, m p^*_{k-1}, p^*_k, m p^*_{k+1}, \dots, m p^*_L)$, i.e., raise all prices except good $k$ by the factor $m$.
>
> By gross substitutability $(\partial z_i(p)/\partial p_j > 0$ for $i \neq j)$, increasing all $p_j$ (for $j \neq k$) must *increase* the excess demand for good $k$: $z_k(\tilde{p}) > z_k(p^*) = 0$. But $z(\cdot)$ is HD(0), so $z_k(\tilde{p}) = z_k(p')$ (since $\tilde{p}$ and $p'$ differ only by scalar multiples). Hence $z_k(p') > 0$, contradicting $z(p') = 0$. Therefore the equilibrium price vector is **unique**.
>
> **Key implication:** Gross substitutability + Walras' Law + HD(0) ⇒ unique relative prices. The system determines $n-1$ relative prices uniquely.

---

### 5.3 Walras' Law, Numeraire, and Excess Demand

**Why this matters for your exam:** Walras' Law is the workhorse of every GE exam problem — it tells **you** that one market-clearing equation is redundant, so **you** only need to solve $n-1$ equations. The numeraire trick lets **you** pin down relative prices. Expect to use both in numerical problems.

**Excess demand function** for good $i$: $z_i(p) = D_i(p) - S_i(p)$ (Koutsoyiannis, p.489). In a pure exchange economy, $z_i(p) = \sum_h x_i^h(p) - \sum_h \omega_i^h$.

**Properties (Munoz-Garcia, §6.1, p.332-335):**
- **Homogeneous of degree zero:** $z_i(\lambda p) = z_i(p)$ for all $\lambda > 0$ (only relative prices matter)
- **Walras' Law:** $p \cdot z(p) = 0$ (aggregate value of excess demand is zero)
- **Continuity:** $z_i(p)$ is continuous on $\mathbb{R}^L_{++}$ under standard utility assumptions

**Walras' Law:** The sum of the values of excess demands across all markets is identically zero:

**Let's work through this step by step.** We start from individual budget constraints in a pure exchange economy:

1. Each of **us** (consumer $h$) has a binding budget constraint: $p \cdot x^h = p \cdot \omega^h$ (income exhaustion from local non-satiation).
2. Consumer $h$'s excess demand vector is $z^h(p) = x^h(p) - \omega^h$, so $p \cdot z^h(p) = 0$ for each $h$.
3. Aggregate excess demand is $z(p) = \sum_{h=1}^H (x^h(p) - \omega^h) = \sum_{h=1}^H z^h(p)$.
4. Summing the budget constraints: $\sum_{h=1}^H p \cdot z^h(p) = p \cdot \sum_{h=1}^H z^h(p) = p \cdot z(p) = 0$.
5. Expanding the dot product: $\sum_{i=1}^n p_i \cdot z_i(p) = 0$.
6. → Walras' Law: $\sum_{i=1}^n p_i \cdot z_i(p) = 0$ for all $p \gg 0$.

**Here's what's really going on:** The aggregate value of excess demand is identically zero — the economy's total spending equals its total income. Excess demand in some markets ($z_i > 0$) must be exactly offset by excess supply in others ($z_j < 0$). This is an identity, not an equilibrium condition — it holds for every price vector.

$$\sum_{i=1}^n p_i \cdot z_i(p) = 0 \quad \text{for all } p \gg 0$$

**Proof from individual budget constraints (Munoz-Garcia, p.332):** Each of **us** has utility functions that are strictly increasing, so the budget constraint in the UMP binds:

**Let's work through this step by step.** We start from **your** UMP with strictly increasing (locally non-satiated) utility:

1. **You** maximise $u^h(x^h)$ subject to $p \cdot x^h \le p \cdot \omega^h$.
2. If $p \cdot x^h < p \cdot \omega^h$, **you** have unspent income. With local non-satiation, there exists a strictly preferred bundle costing less than income, contradicting optimality.
3. Therefore the budget constraint must bind at the optimum: **you** spend all income.
4. → Income exhaustion: $p \cdot x^h(p) = p \cdot \omega^h$.

**Here's what's really going on:** Non-satiation ensures that any free income would be spent on additional consumption that raises utility. Hence all income is exhausted — the budget constraint holds with equality for every consumer.

$$p \cdot x^h(p) = p \cdot \omega^h \quad \text{(income exhaustion)}$$

Thus $p \cdot (x^h - \omega^h) = 0$ for each $h$. The excess demand vector for consumer $h$ is $z^h(p) = x^h(p) - \omega^h$, and summing the budget constraints over all $H$ consumers:

**Let's work through this step by step.** We start from the individual binding budget constraints for each consumer $h$:

1. For each $h$: $p \cdot x^h = p \cdot \omega^h$, so $p \cdot (x^h - \omega^h) = 0$.
2. Define $z^h(p) = x^h(p) - \omega^h$ as consumer $h$'s excess demand vector.
3. Sum over all $H$ consumers: $\sum_{h=1}^H p \cdot (x^h - \omega^h) = p \cdot \sum_{h=1}^H (x^h - \omega^h)$.
4. The aggregate excess demand is $z(p) = \sum_{h=1}^H (x^h - \omega^h)$.
5. → $\sum_{h=1}^H p \cdot (x^h - \omega^h) = p \cdot z(p) = 0$.

**Here's what's really going on:** Summing binding budget constraints across all consumers yields Walras' Law: the aggregate value of excess demand is identically zero. This is an accounting identity — it holds for every price vector, not just at equilibrium.

$$\sum_{h=1}^H p \cdot (x^h - \omega^h) = p \cdot \sum_{h=1}^H (x^h - \omega^h) = p \cdot z(p) = 0$$

**Implication:** If $n-1$ markets are in equilibrium, the $n$th market must also be in equilibrium — one market-clearing equation is redundant. Therefore, only $n-1$ independent equations determine $n-1$ relative prices. In a two-good economy, Walras' Law implies $p_1 z_1(p) = -p_2 z_2(p)$: if good 1 is in excess demand ($z_1 > 0$), good 2 must be in excess supply ($z_2 < 0$); if market 1 clears ($z_1 = 0$), market 2 clears automatically ($z_2 = 0$).

**Numeraire:** Because Walras' Law makes one equation redundant, absolute prices are indeterminate. By setting one price as numeraire ($P_1 = 1$), the system determines $n-1$ relative prices uniquely. Economically, only relative prices matter for allocation decisions — doubling all prices leaves budget sets, demand, and excess demand unchanged (HD(0)). The choice of numeraire is arbitrary; any good can serve as the unit of account (Koutsoyiannis, p.488; Munoz-Garcia, p.333).

**Example (3-good case):** Set $p_1 = 1$, solve $z_2(p_1,p_2,p_3) = 0$ and $z_3(p_1,p_2,p_3) = 0$ for $(p_2, p_3)$. Then $z_1 = 0$ automatically by Walras' Law.

**Worked Example — Three-Good Walrasian System (48-Masters-Final Q6b):**

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

**Key insight:** In an $n$-good Walrasian system, **you** only need to solve $n-1$ market-clearing equations. The $n$th is automatically satisfied by Walras' Law. Price levels are indeterminate — only ratios matter.

### 5.4 The Edgeworth Box and the $2 \times 2 \times 2$ Model

**Why this matters for your exam:** The Edgeworth box is **your** visual intuition for GE. **You'll** draw it, label contract curves, and use it to explain Pareto efficiency. The $2 \times 2 \times 2$ model is the exam's favourite GE framework — master it and numerical problems become straightforward.

The **$2 \times 2 \times 2$ model** is the canonical GE framework: 2 factors (L, K), 2 commodities (X, Y), 2 consumers (A, B), all under perfect competition (Koutsoyiannis, Ch.22, SE, pp.496-499).

**Assumptions:**
1. Fixed supplies of L and K; homogeneous, perfectly divisible.
2. Two commodities X, Y; given technology; isoquants smooth, convex (diminishing MRTS); constant returns to scale; no production externalities.
3. Two consumers A, B; ordinal convex indifference curves (diminishing MRS); no consumption externalities (no bandwagon/snob/Veblen effects).
4. **You** (consumers) maximize utility; firms maximise profit.
5. Factors owned by **you** and other consumers; full employment; all income spent.
6. Perfect competition in all markets.

**Production Equilibrium via Edgeworth Box:**

The Edgeworth production box has dimensions equal to total K (width) and total L (height). X-isoquants originate from the SW corner ($O_X$), Y-isoquants from the NE corner ($O_Y$).

- **Contract curve (production):** Locus of tangency points of X and Y isoquants -> $\text{MRTS}^X_{LK} = \text{MRTS}^Y_{LK}$.
- Points ON the contract curve are **Pareto-efficient in production**: impossible to increase output of one good without reducing the other.
- Points OFF the curve are inefficient — reallocation can increase at least one output.
- In perfect competition, profit maximisation requires each firm to set MRTS = $w/r$. Since $w/r$ is the same for both, equilibrium must lie on the contract curve.

**General equilibrium of production condition:**

**Let's work through this step by step.** We start from cost minimisation by competitive firms:

1. Firm X chooses labour $L_X$ and capital $K_X$ to minimise cost $w L_X + r K_X$ subject to producing target output $\bar{X}$.
2. At the cost-minimising input mix, the isoquant is tangent to the isocost line: the slope of the isoquant ($\text{MRTS}^X_{LK} = -dK/dL|_{\text{isoquant}}$) equals the slope of the isocost ($-w/r$).
3. → Firm X's optimality condition: $\text{MRTS}^X_{LK} = w/r$.
4. Similarly for firm Y: $\text{MRTS}^Y_{LK} = w/r$.
5. Since both firms face the same factor prices $w$ and $r$ in competitive markets, their MRTS must be equal.
6. → $\text{MRTS}^X_{L,K} = \text{MRTS}^Y_{L,K} = w/r$.

**Here's what's really going on:** If MRTS differed across firms, total output could be increased by reallocating inputs — moving a unit of labour from the low-MRTS firm to the high-MRTS firm would increase output. Equalisation ensures production efficiency: the economy is on its contract curve.

$$\text{MRTS}^X_{L,K} = \text{MRTS}^Y_{L,K} = \frac{w}{r}$$

The production equilibrium is not unique (any point on contract curve is Pareto-optimal). With perfect competition, the specific point where MRTS = $w/r$ is selected. The contract curve maps to the **Production Possibility Curve (PPC)** in product space.

**Mapping from contract curve to PPC (Koutsoyiannis, pp.535-538; Munoz-Garcia, pp.448-450):** Each point on the Edgeworth contract curve of production simultaneously defines: (i) the allocation of K and L between the two industries; and (ii) the maximum output pair $(X, Y)$ that can be produced from these factor allocations. Plotting these output pairs in $(X, Y)$-space traces out the **Production Possibility Curve (PPC)**, also called the product transformation curve. The slope of the PPC is the **Marginal Rate of Product Transformation** (MRPT):

**Let's work through this step by step.** We start from the Production Possibility Curve in output space:

1. The PPC traces maximum feasible $Y$ for each level of $X$, given fixed total endowments of L and K and the available technology.
2. The slope of the PPC at any point is $dY/dX$, which is negative (producing more X requires sacrificing Y).
3. Define MRPT as the absolute value of this slope: $\text{MRPT}_{xy} = -dY/dX$.
4. By the envelope theorem, reallocating one unit of resources from Y to X: the cost of the marginal unit of X is $MC_X$, and the saving from reducing Y by one unit is $MC_Y$. The trade-off is $MC_X/MC_Y$.
5. → $\text{MRPT}_{xy} = -dY/dX = MC_X/MC_Y$.

**Here's what's really going on:** MRPT measures the opportunity cost of producing an additional unit of X — the amount of Y the economy must forgo. Under perfect competition, this equals the price ratio $P_X/P_Y$ since profit maximisation sets $P = MC$.

$$\text{MRPT}_{xy} = -\frac{dY}{dX} = \frac{MC_X}{MC_Y}$$

Under **constant returns to scale (CRS)**, the contract curve is a straight line from the origin (the diagonal of the Edgeworth box) when isoquants are homothetic. This maps to a **concave PPC** in product space, reflecting increasing opportunity cost: as the economy produces more X, the marginal output of Y sacrificed rises because factors are not perfectly substitutable across industries. With **decreasing returns to scale (DRS)**, the PPC becomes even more concave; with **increasing returns to scale (IRS)**, the PPC may become convex, violating the conditions required for competitive equilibrium existence (Arrow-Debreu assumes no increasing returns).

**Classification:** The contract curve is unique only under CRS and homothetic isoquants. With DRS or non-homothetic technology, the curve is non-linear.

---

### 5.5 The Transmission Mechanism: Product Market to Factor Market to GE

**Why this matters for your exam:** This is the story of how a shock ripples through the whole economy. **You'll** need to reproduce the 9-step sequence and explain who gains and who loses. The Stolper-Samuelson and magnification results are classic exam favourites.

The transmission mechanism describes how an exogenous shock propagates through interdependent markets to restore a new general equilibrium (Koutsoyiannis, Ch.22, SD, pp.491-495).

**The 9-step sequence:**

**Step 1:** Initial equilibrium — all markets cleared at $P_{x0}, P_{y0}, w_0, r_0$.

**Step 2:** Exogenous taste change — **you** (consumers) shift toward X, away from Y. $D_X$ shifts right, $D_Y$ shifts left.

**Step 3:** Short-run product market — $P_x$ rises, $Q_x$ increases. $P_y$ falls, $Q_y$ decreases. Excess profits in X, losses in Y.

**Step 4:** Firm adjustment — X firms expand along rising MC; Y firms contract.

**Step 5:** Factor market effects (the transmission) — X industry expands -> demand for L and K rises -> $w_x$ and $r_x$ rise. Y contracts -> demand for L and K falls -> $w_y$ and $r_y$ fall. Factor price differential emerges.

**Step 6:** Factor mobility — L and K migrate from Y (low $w$, $r$) to X (high $w$, $r$).

**Step 7:** New factor price equalisation — with X less capital-intensive than Y: demand for L by X exceeds release from Y -> $w$ rises overall; release of K from Y exceeds demand by X -> $r$ falls overall. New equilibrium: $w_2 > w_0$, $r_2 < r_0$.

**Step 8:** Long-run product market adjustment — entry into X shifts $S_X$ down; exit from Y shifts $S_Y$ up.

**Step 9:** New GE — all markets clear at $(P_{x2}, P_{y2}, w_2, r_2)$, new product mix ($X_2 > X_0$, $Y_2 < Y_0$), normal profits restored.

**Stolper-Samuelson Theorem:** An increase in the relative price of a good raises the real return to the factor used intensively in its production and lowers the real return to the other factor (Stolper & Samuelson, 1941; Koutsoyiannis, p.505).

**Let's work through this step by step.** We start from the zero-profit condition in competitive markets:

1. In competitive equilibrium, $P_X = MC_X$ and $P_Y = MC_Y$.
2. From cost minimisation, $MC_X$ depends on factor prices $(w, r)$ and the input coefficients $(a_{LX}, a_{KX})$: $MC_X = w a_{LX} + r a_{KX}$.
3. An increase in $P_X/P_Y$ makes X production more profitable → resources shift into X, out of Y.
4. If X is labour-intensive ($a_{LX}/a_{KX} > a_{LY}/a_{KY}$), the relative demand for labour rises → $w$ rises relative to $r$.
5. → $\frac{P_X}{P_Y} \uparrow$ (with X labour-intensive) $\Rightarrow \frac{w}{r} \uparrow$.

**Here's what's really going on:** The factor used intensively in the industry whose relative price rises unambiguously gains, while the other factor loses. The change in factor prices is magnified beyond the change in output prices (Jones' magnification effect).

$$\text{If } \frac{P_X}{P_Y} \uparrow \text{ and } X \text{ is labour-intensive, then } \frac{w}{r} \uparrow$$

**Magnification effect (Jones algebra):** $\hat{w} > \hat{P}_X > \hat{P}_Y > \hat{r}$ in proportional terms.

**Key insight:** Factor intensities determine the final $w/r$ outcome. If both industries had the same K/L ratio, factor prices would return to original levels — the permanent change in factor prices is driven by *different* factor intensities.

---

### 5.6 The Three Pareto Efficiency Conditions

**Why this matters for your exam:** These three conditions are the backbone of welfare economics. **You'll** need to state each one, derive it from a Lagrangian, and link them to the First and Second Welfare Theorems. This is the most likely source of a derivation question.

For a general equilibrium to be Pareto-optimal, three marginal conditions must hold simultaneously (Koutsoyiannis, Ch.23, pp.524-532; Munoz-Garcia, §6.5, p.380):

**1. Efficiency in exchange (consumption):** $\text{MRS}^A_{xy} = \text{MRS}^B_{xy} = P_x/P_y$ — the marginal rate at which **you** are willing to trade X for Y must be equal across all consumers. Achieved on the Edgeworth contract curve of consumption.

**2. Efficiency in production (factor allocation):** $\text{MRTS}^X_{LK} = \text{MRTS}^Y_{LK} = w/r$ — the marginal rate at which factors can be substituted must be equal across all firms. Achieved on the Edgeworth contract curve of production.

**3. Efficiency in product-mix (top-level):** $\text{MRPT}_{xy} = \text{MRS}_{xy}$ — the rate at which the economy can transform X into Y (slope of the PPC) must equal **your** marginal willingness to trade (as a consumer). In perfect competition: MRPT = $MC_x/MC_y = P_x/P_y = \text{MRS}$.

**The three Pareto conditions together:**
1. $\text{MRS}^A_{xy} = \text{MRS}^B_{xy}$ (efficient distribution of goods)
2. $\text{MRTS}^X_{LK} = \text{MRTS}^Y_{LK}$ (efficient factor allocation)
3. $\text{MRPT}_{xy} = \text{MRS}_{xy}$ (efficient output mix — the *Fundamental Condition of Pareto Optimality*)

**First Welfare Theorem (FWT):** Every competitive equilibrium satisfies these three conditions and is therefore Pareto-efficient (requires LNS preferences, no externalities, complete markets).

**Second Welfare Theorem (SWT):** Any Pareto-efficient allocation can be decentralised as a competitive equilibrium with appropriate lump-sum transfers (requires convexity of preferences and production sets).

**Diagrammatic summary:** The PPC in product space with slope = MRPT, tangent to a community indifference curve with slope = MRS. At the tangency point E: $\text{MRPT}_{xy} = \text{MRS}^A_{xy} = \text{MRS}^B_{xy} = P_x/P_y$.

**Formal derivation from Lagrangian optimisation (Munoz-Garcia §6.5, pp.380-390):**

**Condition 1 — Efficiency in exchange:** A social planner maximises a weighted sum of utilities subject to the resource constraint:

**Let's work through this step by step.** We start from the social planner's allocation problem — find all Pareto-efficient distributions of goods:

1. The planner assigns Pareto weights $\alpha_h > 0$ to each consumer $h$ and maximises the weighted sum of utilities $W = \sum_{h=1}^H \alpha_h u_h(x_{1h}, \dots, x_{Lh})$.
2. Varying the weights $(\alpha_1, \dots, \alpha_H)$ traces out the entire Pareto frontier.
3. The resource constraints require that for each good $i$, total consumption $\sum_h x_{ih}$ does not exceed total endowment $\sum_h \omega_{ih}$.
4. → Maximise $W$ subject to $L$ inequality constraints, one per good.

**Here's what's really going on:** The Pareto problem allocates goods across consumers to maximise social welfare at given weights. Each solution corresponds to a Pareto-efficient allocation where no consumer can be made better off without making another worse off.

$$\max_{x_{ih}} \; W = \sum_{h=1}^H \alpha_h u_h(x_{1h}, \dots, x_{Lh}) \quad \text{s.t.} \quad \sum_{h=1}^H x_{ih} \le \sum_{h=1}^H \omega_{ih} \; \forall i$$

The Lagrangian is:

**Let's work through this step by step.** We start from the constrained maximisation above:

1. Assign Lagrange multiplier $\lambda_i \ge 0$ to each resource constraint $\sum_h x_{ih} \le \sum_h \omega_{ih}$.
2. The Lagrangian adds each constraint (rearranged as slack) to the objective: $\mathcal{L} = W + \sum_i \lambda_i (\sum_h \omega_{ih} - \sum_h x_{ih})$.
3. The term $\lambda_i (\sum_h \omega_{ih} - \sum_h x_{ih})$ penalises violation of the resource constraint for good $i$ — if $\sum_h x_{ih} > \sum_h \omega_{ih}$, the slack is negative and the objective is reduced.
4. → $\mathcal{L} = \sum_{h=1}^H \alpha_h u_h(\cdot) + \sum_{i=1}^L \lambda_i (\sum_{h=1}^H \omega_{ih} - \sum_{h=1}^H x_{ih})$.

**Here's what's really going on:** The Lagrangian transforms the constrained problem into an unconstrained one. Each $\lambda_i$ is the shadow price — the marginal social value of an additional unit of endowment of good $i$.

$$\mathcal{L} = \sum_{h=1}^H \alpha_h u_h(\cdot) + \sum_{i=1}^L \lambda_i \left( \sum_{h=1}^H \omega_{ih} - \sum_{h=1}^H x_{ih} \right)$$

FOC for consumer $h$ and goods $i, j$:

**Let's work through this step by step.** We start from the Lagrangian and differentiate with respect to consumption $x_{ih}$:

1. $\frac{\partial \mathcal{L}}{\partial x_{ih}} = \alpha_h \frac{\partial u_h}{\partial x_{ih}} - \lambda_i = 0$: the marginal social benefit of giving consumer $h$ more of good $i$ ($\alpha_h \cdot MU_{ih}$) equals the shadow cost $\lambda_i$.
2. Similarly for good $j$: $\frac{\partial \mathcal{L}}{\partial x_{jh}} = \alpha_h \frac{\partial u_h}{\partial x_{jh}} - \lambda_j = 0$.
3. → Two first-order conditions linking marginal utilities to shadow prices.

**Here's what's really going on:** The planner allocates each good to each consumer up to the point where the weighted marginal utility just equals the social opportunity cost of using that good. The shadow prices $\lambda_i$ are common across all consumers because resources are freely reallocable.

$$\frac{\partial \mathcal{L}}{\partial x_{ih}} = \alpha_h \frac{\partial u_h}{\partial x_{ih}} - \lambda_i = 0, \quad \frac{\partial \mathcal{L}}{\partial x_{jh}} = \alpha_h \frac{\partial u_h}{\partial x_{jh}} - \lambda_j = 0$$

Dividing the FOCs for goods $i$ and $j$ for the same consumer $h$:

**Let's work through this step by step.** We start from the two FOCs and eliminate the consumer-specific weight $\alpha_h$:

1. From FOC$_i$: $\alpha_h \cdot \partial u_h/\partial x_{ih} = \lambda_i$ ⇒ $\partial u_h/\partial x_{ih} = \lambda_i / \alpha_h$.
2. From FOC$_j$: $\alpha_h \cdot \partial u_h/\partial x_{jh} = \lambda_j$ ⇒ $\partial u_h/\partial x_{jh} = \lambda_j / \alpha_h$.
3. Dividing: $\frac{\partial u_h / \partial x_{ih}}{\partial u_h / \partial x_{jh}} = \frac{\lambda_i / \alpha_h}{\lambda_j / \alpha_h} = \frac{\lambda_i}{\lambda_j}$.
4. The LHS is precisely the marginal rate of substitution $\text{MRS}^h_{ij}$ between goods $i$ and $j$ for consumer $h$.
5. → $\text{MRS}^h_{ij} = \lambda_i / \lambda_j$.

**Here's what's really going on:** At a Pareto optimum, each consumer's MRS between any two goods equals the ratio of the shadow prices of those goods. Since $\lambda_i$ and $\lambda_j$ are common across all consumers (they come from the resource constraints, not individual preferences), all consumers must have the same MRS.

$$\frac{\partial u_h / \partial x_{ih}}{\partial u_h / \partial x_{jh}} = \frac{\lambda_i}{\lambda_j} \equiv \text{MRS}^h_{ij}$$

Since the RHS $\lambda_i / \lambda_j$ is the same for all consumers $h$, **we** obtain:

**Let's work through this step by step.** We start from $\text{MRS}^h_{ij} = \lambda_i / \lambda_j$ for each consumer $h$:

1. The ratio $\lambda_i / \lambda_j$ depends only on the resource constraints and Pareto weights — it is not consumer-specific.
2. For any two consumers A and B: $\text{MRS}^A_{ij} = \lambda_i / \lambda_j$ and $\text{MRS}^B_{ij} = \lambda_i / \lambda_j$.
3. The right-hand sides are identical, so the left-hand sides must be equal.
4. → $\text{MRS}^A_{ij} = \text{MRS}^B_{ij}$ for all consumers A, B and all good pairs i, j.

**Here's what's really going on:** If $\text{MRS}^A > \text{MRS}^B$, consumer A values good $i$ more relative to good $j$ than B does. A Pareto improvement is possible: A gives $j$ to B, B gives $i$ to A, making both better off. Equal MRS across all consumers is the necessary condition for exchange efficiency.

$$\text{MRS}^A_{ij} = \text{MRS}^B_{ij} \quad \text{for all consumers } A, B$$

**Condition 2 — Efficiency in production:** **We** choose input allocations $(k_{jf}, l_{jf})$ for firms $f$ producing goods $j$ to maximise total output:

**Let's work through this step by step.** We start from the problem of allocating scarce factors across firms to maximise output value:

1. The planner chooses capital $k_{jf}$ and labour $l_{jf}$ for each firm $j$ producing good $j$.
2. The objective is total output value $\sum_{j=1}^M p_j f_j(k_{jf}, l_{jf})$ at given output prices.
3. Constraints: total capital used $\sum_j k_{jf} \le \bar{K}$ and total labour used $\sum_j l_{jf} \le \bar{L}$.
4. → Maximise output value subject to factor endowment constraints.

**Here's what's really going on:** This determines the efficient allocation of inputs across production activities. Under competitive markets, each firm hires factors until the value of the marginal product equals the factor price, decentralising the planner's solution.

$$\max \; \sum_{j=1}^M p_j f_j(k_{jf}, l_{jf}) \quad \text{s.t.} \quad \sum_{j=1}^M k_{jf} \le \bar{K}, \; \sum_{j=1}^M l_{jf} \le \bar{L}$$

The FOCs imply:

**Let's work through this step by step.** We start from the production efficiency problem and consider two firms X and Y producing different goods:

1. For firm X, the FOC for labour: $p_X \cdot \partial f_X/\partial l_X = \mu$ (where $\mu$ is the Lagrange multiplier on the labour constraint).
2. For firm X, the FOC for capital: $p_X \cdot \partial f_X/\partial k_X = \nu$ (where $\nu$ is the Lagrange multiplier on the capital constraint).
3. Dividing: $\frac{\partial f_X / \partial l_X}{\partial f_X / \partial k_X} = \mu / \nu$.
4. Similarly for firm Y: $\frac{\partial f_Y / \partial l_Y}{\partial f_Y / \partial k_Y} = \mu / \nu$.
5. The RHS $\mu / \nu$ is common across firms (same shadow prices of labour and capital), so the LHS must be equal.
6. The LHS is the MRTS (the rate at which labour can substitute for capital while holding output constant).
7. → $\text{MRTS}^X_{LK} = \text{MRTS}^Y_{LK}$.

**Here's what's really going on:** If $\text{MRTS}^X > \text{MRTS}^Y$, moving a unit of capital from Y to X (and labour from X to Y) would increase total output. Equalisation of MRTS across firms is the necessary condition for production efficiency.

$$\frac{\partial f_X / \partial l_X}{\partial f_X / \partial k_X} = \frac{\partial f_Y / \partial l_Y}{\partial f_Y / \partial k_Y} \quad \Rightarrow \quad \text{MRTS}^X_{LK} = \text{MRTS}^Y_{LK}$$

**Condition 3 — Efficiency in product-mix:** The MRPT between goods X and Y from the production side equals the common MRS among consumers:

**Let's work through this step by step.** We start from the requirement that production and consumption decisions be coordinated:

1. On the production side, the economy transforms X into Y at rate $\text{MRPT}_{xy} = -dY/dX|_{\text{PPC}} = MC_X/MC_Y$.
2. On the consumption side, **you** (as a consumer) trade X for Y at rate $\text{MRS}_{xy} = MU_X/MU_Y$.
3. For Pareto efficiency, the rate at which the economy can transform X into Y must equal the rate at which **you** are willing to substitute X for Y — otherwise a reallocation of resources between sectors could make everyone better off.
4. Under perfect competition, profit maximisation sets $P_X = MC_X$ and $P_Y = MC_Y$, so $\text{MRPT}_{xy} = MC_X/MC_Y = P_X/P_Y$.
5. Utility maximisation sets $\text{MRS}_{xy} = P_X/P_Y$.
6. → $\text{MRPT}_{xy} = MC_X/MC_Y = P_X/P_Y = \text{MRS}_{xy}$.

**Here's what's really going on:** If $\text{MRPT} > \text{MRS}$, the economy could produce one less X (saving $MC_X$) and one more Y (costing $MC_Y$). The saved resources from reducing X exceed what **you** (as consumers) need to compensate for losing X — a Pareto improvement. Equality of MRPT and MRS ensures the output mix is socially optimal.

$$\text{MRPT}_{xy} = -\frac{dY}{dX}\bigg|_{\text{PPC}} = \frac{MC_X}{MC_Y} = \frac{P_X}{P_Y} = \text{MRS}_{xy}$$

In perfect competition, $P_X = MC_X$ and $P_Y = MC_Y$, so MRPT = $P_X/P_Y$ = MRS, ensuring the top-level efficiency condition holds automatically.


### 5.7 Numerical Edgeworth Box Problem

**Why this matters for your exam:** Numerical GE problems are pure formula application — if **you** can find MRS, set them equal, and check feasibility, **you** can nail these. The Cobb-Douglas vs linear utility case is a common setup that tests **your** ability to spot corner solutions.

**Given (Koutsoyiannis, Ch.22):**
- A: $U_a = X_a \cdot Y_a$ (Cobb-Douglas)
- B: $U_B = X_B + Y_B$ (perfect substitutes — linear utility)
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

**(d) Is ($X_a=80$, $Y_a=50$) feasible?** No — total X = 60, so $X_a$ cannot be 80. Infeasible and outside the Edgeworth box.

**(e) Core of the economy:** The set of all feasible allocations that cannot be improved upon by any coalition of agents. An allocation $(x^A, x^B)$ is in the core if it is feasible, individually rational ($U^A(x^A) \ge U^A(\omega^A)$ and $U^B(x^B) \ge U^B(\omega^B)$), and coalition-proof. The competitive equilibrium lies in the core. In a two-person exchange economy, the core coincides with the contract curve allocations that are individually rational.

**Exam Tip:** For Cobb-Douglas vs linear utility, the contract curve is derived by equating MRS. Check corner solutions — B's linear utility often leads to corner consumption. Always verify feasibility first.

**Fully-Solved $2 \times 2 \times 2$ Competitive Equilibrium Example (Munoz-Garcia §6.4, Example 6.6, pp.343-346):**

Consider a pure exchange economy with two goods (1, 2) and two consumers (A, B), both with Cobb-Douglas utility $u^i(x_1^i, x_2^i) = x_1^i x_2^i$. Endowments: $e^A = (100, 350)$, $e^B = (100, 50)$. Solve for the Walrasian equilibrium.

**Step 1: Set up the UMP for consumer A.**

**Let's work through this step by step.** We start from consumer A's utility maximisation given endowment $(100, 350)$:

1. A's utility is Cobb-Douglas: $u^A(x_1^A, x_2^A) = x_1^A x_2^A$.
2. A's income (endowment value): $p_1(100) + p_2(350)$.
3. The UMP: $\max x_1^A x_2^A$ s.t. $p_1 x_1^A + p_2 x_2^A = 100 p_1 + 350 p_2$.
4. Tangency: $\text{MRS}^A = x_2^A/x_1^A = p_1/p_2$ (from Cobb-Douglas) ⇒ $p_1 x_1^A = p_2 x_2^A$.
5. Substitute into the budget constraint: $p_1 x_1^A + p_1 x_1^A = 2 p_1 x_1^A = 100 p_1 + 350 p_2$.
6. Solve: $x_1^A = 50 + 175 p_2/p_1$ and (by symmetry) $x_2^A = 175 + 50 p_1/p_2$.

**Here's what's really going on:** With Cobb-Douglas utility, A spends equal shares of income on each good. A's large endowment of good 2 (350) gives her higher income, enabling more consumption of both goods.

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

**Let's work through this step by step.** We start from individual demand functions and the market-clearing condition:

1. Total demand for good 1: $x_1^A + x_1^B = (50 + 175 p_2/p_1) + (50 + 25 p_2/p_1)$.
2. Simplify: $= 100 + (175 + 25) p_2/p_1 = 100 + 200 p_2/p_1$.
3. Total supply of good 1: $\omega_1^A + \omega_1^B = 100 + 100 = 200$.
4. Market-clearing requires total demand = total supply: $100 + 200 p_2/p_1 = 200$.
5. → $\left(50 + 175 \frac{p_2}{p_1}\right) + \left(50 + 25 \frac{p_2}{p_1}\right) = 100 + 200 \frac{p_2}{p_1} = 200$.

**Here's what's really going on:** The market-clearing condition for good 1 yields one equation in the relative price $p_2/p_1$. By Walras' Law, the good 2 market automatically clears when good 1 does — only one price ratio needs to be determined.

$$\left(50 + 175 \frac{p_2}{p_1}\right) + \left(50 + 25 \frac{p_2}{p_1}\right) = 100 + 200 \frac{p_2}{p_1} = 200$$

**Let's work through this step by step.** We start from the market-clearing equation and solve for the equilibrium price ratio:

1. From $100 + 200(p_2/p_1) = 200$, subtract 100 from both sides: $200(p_2/p_1) = 100$.
2. Divide both sides by 200: $p_2/p_1 = 100/200 = 1/2$.
3. Invert the ratio: $p_1/p_2 = 2$.
4. → Equilibrium relative prices: good 1 is twice as expensive as good 2.

**Here's what's really going on:** The price ratio $p_1/p_2 = 2$ reflects the relative scarcity and marginal rates of substitution at equilibrium. Consumer A has a large endowment of good 2 (350) and low endowment of good 1 (100), so good 1 commands a premium.

$$200 \frac{p_2}{p_1} = 100 \;\Rightarrow\; \frac{p_2}{p_1} = \frac{1}{2} \;\Rightarrow\; \frac{p_1}{p_2} = 2$$

**Step 4: Compute equilibrium allocations.**

**Let's work through this step by step.** We start from A's demand for good 1 and substitute the equilibrium price ratio $p_2/p_1 = 1/2$:

1. $x_1^{A*} = 50 + 175(p_2/p_1) = 50 + 175(1/2) = 50 + 87.5 = 137.5$.
2. → A consumes 137.5 units of good 1 at equilibrium.

**Here's what's really going on:** A's large endowment of good 2 gives her substantial purchasing power. At the equilibrium price ratio, she chooses 137.5 units of good 1 — more than her initial endowment of 100 — financing the extra by selling good 2.

$$x_1^{A*} = 50 + 175 \cdot \frac{1}{2} = 50 + 87.5 = 137.5$$

**Let's work through this step by step.** We start from A's demand for good 2 and substitute the equilibrium price ratio $p_1/p_2 = 2$:

1. $x_2^{A*} = 175 + 50(p_1/p_2) = 175 + 50(2) = 175 + 100 = 275$.
2. → A consumes 275 units of good 2 at equilibrium.

**Here's what's really going on:** A starts with 350 units of good 2 and consumes 275 — she sells 75 units to finance her purchase of good 1. Her total spending equals her total income, satisfying the budget constraint with equality.

$$x_2^{A*} = 175 + 50 \cdot 2 = 175 + 100 = 275$$

**Let's work through this step by step.** We start from B's demand for good 1 and substitute $p_2/p_1 = 1/2$:

1. $x_1^{B*} = 50 + 25(p_2/p_1) = 50 + 25(1/2) = 50 + 12.5 = 62.5$.
2. → B consumes 62.5 units of good 1 at equilibrium.

**Here's what's really going on:** B has a smaller endowment than A (only 50 of good 2) and thus lower purchasing power. B's consumption of good 1 (62.5) is less than A's (137.5) but still more than his initial endowment of 100 — he must sell good 2 to finance the excess.

$$x_1^{B*} = 50 + 25 \cdot \frac{1}{2} = 50 + 12.5 = 62.5$$

**Let's work through this step by step.** We start from B's demand for good 2 and substitute $p_1/p_2 = 2$:

1. $x_2^{B*} = 25 + 50(p_1/p_2) = 25 + 50(2) = 25 + 100 = 125$.
2. → B consumes 125 units of good 2 at equilibrium.

**Here's what's really going on:** B starts with 50 units of good 2 and consumes 125 — he buys 75 additional units. His good 1 consumption falls from 100 to 62.5 (sells 37.5), financing the good 2 purchase. The trades of A and B exactly offset: A sells 75 of good 2 to B, B sells 37.5 of good 1 to A.

$$x_2^{B*} = 25 + 50 \cdot 2 = 25 + 100 = 125$$

**Step 5: Verify Walras' Law.** $p \cdot z(p) = p_1(137.5 + 62.5 - 200) + p_2(275 + 125 - 400) = p_1(0) + p_2(0) = 0$.

**Step 6: Welfare properties.** The WEA is $((137.5, 275); (62.5, 125); p_1/p_2 = 2)$. This allocation lies on the contract curve $x_2^A = 2x_1^A$ (since $275 = 2 \times 137.5$) and is Pareto-efficient. It also lies in the core because it is individually rational: $u^A(137.5, 275) = 37,812.5 > u^A(100, 350) = 35,000$ and $u^B(62.5, 125) = 7,812.5 > u^B(100, 50) = 5,000$. Both consumers are strictly better off at the WEA than at their endowments.

**Exam Tip:** The ratio $p_1/p_2 = 2$ means good 1 is twice as expensive as good 2. Consumer A, with a large endowment of good 2 (350 units), has higher income and consumes more of both goods. The equilibrium price ratio equalises MRS across consumers and clears both markets simultaneously.

---

### 5.8 How GE Is Reached: The Walrasian System

**Why this matters for your exam:** This section ties everything together — **you** see how production, consumption, and factor markets all lock into place simultaneously. The equation-counting exercise is a classic way to understand why **you** can set one price as numeraire.

**The Walrasian system** (Koutsoyiannis pp. 497-509):

**Unknowns (18):** Quantities demanded of X and Y by A and B (4), quantities supplied of L and K by A and B (4), quantities demanded of L and K by X and Y firms (4), quantities supplied of X and Y by firms (2), prices of X and Y (2), prices of L and K (2). **Total: 18**

**Equations (18):** Demand functions of A and B for X and Y (4), supply functions of L and K by A and B (4), demand functions for L and K by firms (4), supply functions of X and Y by firms (2), market-clearing equations for X and Y (2), market-clearing equations for L and K (2). **Total: 18**

**Does a GE solution exist?** Equality of equations and unknowns is **neither necessary nor sufficient**. Three issues:
1. **Walras' Law:** One equation is redundant — if $n-1$ markets clear, the $n$th must also clear. Independent equations = 17 vs 18 unknowns.
2. **Numeraire:** One price set = 1, reducing unknowns to 17. Now 17 = 17 -> determinate *in relative prices*.
3. **Non-negativity:** Prices and quantities must be $\ge 0$. Equation-counting doesn't guarantee this.

**Koutsoyiannis on the Walrasian system (Ch.22, pp.486-488):** The Walrasian system is the most ambitious general equilibrium model. Walras (1874) argued that all prices and quantities in all markets are determined simultaneously through their interaction. The behaviour of each decision-maker is presented by a set of equations: each consumer has demand equations for commodities and supply equations for factor services; each firm has output supply equations and factor demand equations. The key characteristic is **simultaneity** — every variable appears in every equation through general interdependence. Walras counted equations and unknowns, concluding that $n$ independent equations in $n$ unknowns (after normalising one price) would yield a determinate solution. However, Koutsoyiannis (p.488) emphasises: "Even if there is equality of independent equations and unknowns, there is no guarantee that a general equilibrium solution exists." The need for a true existence proof was not met until Arrow and Debreu (1954).

**How GE is reached (6 steps):**
1. **Production side:** Firms choose K/L mix such that $\text{MRTS}^X_{LK} = \text{MRTS}^Y_{LK} = w/r$ -> Edgeworth contract curve.
2. **Product transformation:** Contract curve maps to PPC. Firms choose output where MRPT = $P_x/P_y$.
3. **Consumption side:** **You** (consumers) maximize utility: $\text{MRS}^A = \text{MRS}^B = P_x/P_y$ -> Edgeworth contract curve of consumption.
4. **Simultaneous equilibrium:** $\text{MRPT} = \text{MRS}^A = \text{MRS}^B = P_x/P_y$ ensures consistency.
5. **Factor and commodity prices:** Determined (as ratios with numeraire) by MRTS conditions, marginal productivity conditions ($w = \text{MPP}_L \cdot P$, $r = \text{MPP}_K \cdot P$), and MRS conditions.
6. **Income distribution:** Determined by factor ownership distribution, consistent with equilibrium consumption.

**Arrow-Debreu (1954) existence proof** requires: perfect competition, no indivisibilities, no increasing returns, continuous convex preferences and production sets, well-behaved excess demand functions.

> **Koutsoyiannis on Limitations (Ch.22, pp.488-489):** "The available 'existence proofs' do not hold for the typical real world cases of discontinuities and indivisibilities in production processes. Our current state of knowledge does not enable us to be sure of the existence of a general equilibrium in the real world, which is dominated by oligopolistic firms and production processes characterised by indivisibilities." However, the proof for perfectly competitive economies with no indivisibilities and no increasing returns is "very important, because a perfectly competitive system has certain ideal properties: it results in an efficient allocation of resources."

---

### 5.9 GE and Consumption Externalities

**Why this matters for your exam:** This is the "however" paragraph — the three neat Pareto conditions break down when **your** consumption affects others. Examiners love asking **you** to identify which welfare theorem fails and why.

The $2 \times 2 \times 2$ model **assumes away** consumption externalities (assumption 3: consumer choices are independent). If introduced:

1. **Pareto conditions break down:** MRS depends on others' consumption: $\text{MRS}^A = \text{MRS}^A(X_A, Y_A, X_B, Y_B)$. Equality $\text{MRS}^A = \text{MRS}^B$ is no longer sufficient.
2. **Missing market:** The externality is an untraded interdependence — no market price for A's influence on B's utility. FWT fails.
3. **Specific effects:** Bandwagon (over-consumption, more elastic demand), Snob (under-consumption, less elastic demand), Veblen (price as status signal).
4. **Mathematically:** $U_A = U_A(X_A, Y_A, X_B, Y_B)$ requires additional conditions on cross-partials for Pareto efficiency. The standard condition is necessary but no longer sufficient.

**Conclusion:** The GE solution may still exist but will NOT be Pareto-optimal. The three marginal conditions fail when externalities are present.

---

---

<!-- Enhanced by Munoz-Garcia & Koutsoyiannis textbook references -->

<!-- ============================================================
TOPIC 6: GAME THEORY & INDUSTRIAL ORGANIZATION
============================================================ -->
## <a id="topic-6"></a>Topic 6: Game Theory & Industrial Organization

> **Exam weight:** 14 marks (typically 1 question). Common question types: Nash equilibrium calculation (Bertrand/Cournot),
  prisoners' dilemma and oligopoly, extensive form entry games with backward induction, repeated games with grim trigger (discount factor threshold), centipede game paradox.
> **Key sources:** Koutsoyiannis Ch.11, Munoz-Garcia Ch.8 & Ch.10, Fudenberg & Tirole Ch.1,3,5

---

### 6.1 Nash Equilibrium

**Why this matters for your exam:** Nash equilibrium is the single most important concept in game theory. Almost every exam question — Bertrand, Cournot, entry games, repeated games — comes back to checking whether a strategy profile is a Nash equilibrium. Master this definition cold.

**Definition (Nash, 1950):** A strategy profile $(s_1^*, s_2^*, \dots, s_n^*)$ such that no player can gain by unilaterally deviating:

> **Let's work through this step by step.** We start with the principle of rational self-interested play — each player $i$ chooses $s_i$ to maximise their own payoff $u_i$, taking opponents' strategies $s_{-i}$ as given:
> 1. Player $i$'s optimisation problem: $\max_{s_i \in S_i} u_i(s_i, s_{-i}^*)$
> 2. At a Nash equilibrium $s^* = (s_1^*, \dots, s_n^*)$, all $n$ players are simultaneously solving this problem
> 3. Hence $s_i^*$ must yield at least as high a payoff as any alternative $s_i$, holding $s_{-i}^*$ fixed: $u_i(s_i^*, s_{-i}^*) \ge u_i(s_i, s_{-i}^*)$
> 4. This must hold for every player $i$ and every possible deviation $s_i \in S_i$
> 5. → Final form: $$u_i(s_i^*, s_{-i}^*) \ge u_i(s_i, s_{-i}^*) \quad \text{for all } s_i \in S_i \text{ and all } i$$
>
> **Here's what's really going on:** No player can improve their payoff by changing strategy alone. Each strategy is a **best response** to the others'. The equilibrium is a "mutual best response" — a fixed point of the best-response correspondence.

**Best Response:** Player $i$'s best response $BR_i(s_{-i})$ is the set of strategies that maximise $i$'s payoff given opponents' strategies:

> **Let's work through this step by step.** We start with player $i$'s payoff-maximisation problem for a fixed $s_{-i}$:
> 1. For a given $s_{-i}$, player $i$ solves $\max_{s_i \in S_i} u_i(s_i, s_{-i})$
> 2. The solution to this problem is (potentially) a set of strategies that all achieve the maximum
> 3. This set is the **best response correspondence**: all $s_i$ that are optimal against $s_{-i}$
> 4. → $$BR_i(s_{-i}) = \arg\max_{s_i \in S_i} u_i(s_i, s_{-i})$$
>
> **Here's what's really going on:** $BR_i$ maps opponents' strategies to your optimal replies. A Nash equilibrium occurs when $s_i^* \in BR_i(s_{-i}^*)$ for all $i$ — each player's strategy is a best response to the others'.

A Nash equilibrium is a **fixed point** of the best-response correspondence: $s_i^* \in BR_i(s_{-i}^*)$ for all $i$.

**Classification:**
- **Pure strategy NE:** You choose a single deterministic action.
- **Mixed strategy NE:** You randomise over actions with a probability distribution. Exists in every finite game (Nash, 1950).
- **Strict NE:** $u_i(s_i^*, s_{-i}^*) > u_i(s_i, s_{-i}^*)$ for all $s_i \neq s_i^*$.
- **Weak NE:** $u_i(s_i^*, s_{-i}^*) \geq u_i(s_i, s_{-i}^*)$ for all $s_i$.

**Finding NE in pure strategies:** For each cell in the payoff matrix, check if any player can improve by unilaterally switching strategies. A cell is NE if both players are playing best responses to each other.

> **Munoz-Garcia Insight: Nash Existence Theorem** (Ch.8, §8.1; Math Appendix §A.12)
>
> Nash (1950) proved that **every finite game has at least one Nash equilibrium** (in pure or mixed strategies). The proof applies Kakutani's fixed-point theorem:
>
> Define the **best-response correspondence** $BR: S \to S$ as the product of individual best responses:
>
> > **Let's work through this step by step.** We start with the individual best-response correspondences $BR_i(s_{-i})$:
> > 1. Define the joint correspondence $BR: S \to S$ as the Cartesian product of each player's best response: $BR(s) = \times_{i=1}^n BR_i(s_{-i})$
> > 2. A Nash equilibrium $s^*$ requires $s_i^* \in BR_i(s_{-i}^*)$ for every player $i$
> > 3. This is equivalent to the profile-level condition $s^* \in BR(s^*)$ — a **fixed point** of $BR$
> > 4. → $$BR(s) = \times_{i=1}^n BR_i(s_{-i})$$
> >
> > **Here's what's really going on:** The Nash equilibrium is a fixed point of the product best-response correspondence. Kakutani's fixed-point theorem guarantees existence when $BR$ is upper hemicontinuous, non-empty, and convex-valued.
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
> **Here's what's really going on:** The best-response correspondence maps each strategy profile to the set of profiles that are mutual best responses. A fixed point occurs where the graph of $BR$ crosses the 45-degree line, i.e., where each player's strategy is a best response to everyone else's. Brouwer's fixed-point theorem (for functions) is a special case; Kakutani's extends the result to correspondences, which are needed because $BR_i$ may contain multiple equally good strategies.

> **Munoz-Garcia Insight: Mixed Strategy Nash Equilibrium** (Ch.8, §8.1.1)
>
> **Definition:** A strategy profile $\sigma = (\sigma_1, \sigma_2, \dots, \sigma_n)$, where $\sigma_i$ is a probability distribution over $S_i$, is a mixed strategy Nash equilibrium (msNE) iff:
>
> > **Let's work through this step by step.** We start with the Nash equilibrium definition extended to allow randomised strategies:
> > 1. Let $\sigma_i$ be a probability distribution (mixed strategy) over pure strategies $S_i$
> > 2. Player $i$'s expected payoff from $\sigma_i$ given opponents' mixtures $\sigma_{-i}$ is $\pi_i(\sigma_i, \sigma_{-i})$
> > 3. A msNE requires no profitable deviation to any **pure** strategy $s_i' \in S_i$
> > 4. This is sufficient because if no pure-strategy deviation is profitable, no mixed deviation can be either (expected payoff of a mixture is a convex combination of pure-strategy payoffs)
> > 5. → $$\pi_i(\sigma_i, \sigma_{-i}) \geq \pi_i(s_i', \sigma_{-i}) \quad \text{for all } s_i' \in S_i \text{ and all } i$$
> >
> > **Here's what's really going on:** In a mixed-strategy NE, each player's mixture makes the opponent **indifferent** among the pure strategies they randomise over. The indifference condition pins down the mixing probabilities. Strictly dominated strategies receive zero probability.
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
> > **Let's work through this step by step.** We start with the mixed-strategy NE indifference condition — if Firm A randomises, it must be indifferent between Adopt and Not adopt:
> > 1. Compute Firm A's expected payoff from Adopt given B adopts with prob $q$: $EU_A(\text{Adopt}) = 3q + 0(1-q) = 3q$
> > 2. Compute Firm A's expected payoff from Not adopt: $EU_A(\text{Not adopt}) = 0q + 1(1-q) = 1 - q$
> > 3. Indifference requires $EU_A(\text{Adopt}) = EU_A(\text{Not adopt})$
> > 4. Solving $3q = 1 - q$ gives $q = 1/4$
> > 5. → Firm A's indifference pins down Firm B's mixing probability, not its own
> >
> > **Here's what's really going on:** In mixed-strategy NE, each player's mixing probability makes the **other** player indifferent. Firm A's indifference condition determines $q$ (B's adoption probability), not $p$ (A's own probability). This is the key insight of the indifference method.
>
> $$ EU_A(\text{Adopt}) = EU_A(\text{Not adopt}) $$
>
> > **Let's work through this step by step.** We substitute the payoff matrix values into the indifference condition:
> > 1. If Firm B adopts (prob $q$): Firm A's payoffs are 3 (Adopt) and 0 (Not adopt)
> > 2. If Firm B does not adopt (prob $1-q$): Firm A's payoffs are 0 (Adopt) and 1 (Not adopt)
> > 3. Expected value of Adopt: $3q + 0(1-q)$; Not adopt: $0q + 1(1-q)$
> > 4. → Indifference requires $3q + 0(1-q) = 0q + 1(1-q)$
> >
> > **Here's what's really going on:** Each term is the product of the payoff in that state and the probability of that state. This expands the formal indifference condition using the specific payoffs from the technology adoption game.
>
> $$ 3q + 0(1-q) = 0q + 1(1-q) $$
>
> > **Let's work through this step by step.** We simplify the indifference equation algebraically:
> > 1. $3q + 0(1-q) = 3q$ and $0q + 1(1-q) = 1 - q$
> > 2. Setting them equal: $3q = 1 - q$
> > 3. Solving: $3q + q = 1 \;\rightarrow\; 4q = 1 \;\rightarrow\; q = 1/4$
> > 4. → $3q = 1 - q \Rightarrow q = 1/4$
> >
> > **Here's what's really going on:** Firm B must adopt with probability exactly $1/4$ for Firm A to be indifferent between adopting and not adopting. If $q > 1/4$, Firm A strictly prefers to Adopt; if $q < 1/4$, Firm A strictly prefers Not adopt.
>
> $$ 3q = 1 - q \quad \Rightarrow \quad q = \frac{1}{4} $$
>
> **Indifference condition for Firm B:**
>
> > **Let's work through this step by step.** We apply the same indifference principle to Firm B:
> > 1. Compute Firm B's expected payoff from Adopt given A adopts with prob $p$: $EU_B(\text{Adopt}) = 1p + 0(1-p) = p$
> > 2. Compute Firm B's expected payoff from Not adopt: $EU_B(\text{Not adopt}) = 0p + 3(1-p) = 3(1-p)$
> > 3. Indifference requires $p = 3(1-p)$
> > 4. Solving: $p = 3 - 3p \rightarrow 4p = 3 \rightarrow p = 3/4$
> > 5. → Firm B's indifference pins down Firm A's mixing probability $p = 3/4$
> >
> > **Here's what's really going on:** Firm B (which prefers opposite actions — payoff 3 when firms choose different actions) randomises with low probability of Adopt ($q = 1/4$). Firm A (which prefers coordinated outcomes — payoff 3 when both adopt) randomises with high probability of Adopt ($p = 3/4$). The msNE is $(p, q) = (3/4, 1/4)$.
>
> $$ EU_B(\text{Adopt}) = EU_B(\text{Not adopt}) $$
>
> > **Let's work through this step by step.** We substitute the payoff matrix values for Firm B:
> > 1. If Firm A adopts (prob $p$): Firm B's payoffs are 1 (Adopt) and 0 (Not adopt)
> > 2. If Firm A does not adopt (prob $1-p$): Firm B's payoffs are 0 (Adopt) and 3 (Not adopt)
> > 3. Expected value of Adopt: $1p + 0(1-p) = p$; Not adopt: $0p + 3(1-p) = 3(1-p)$
> > 4. → Indifference requires $1p + 0(1-p) = 0p + 3(1-p)$
> >
> > **Here's what's really going on:** Firm B's payoffs are structured so it prefers the opposite action from Firm A. When A adopts, B prefers Not adopting (payoff 0 vs 1); when A does not adopt, B prefers adopting (payoff 3 vs 0).
>
> $$ 1p + 0(1-p) = 0p + 3(1-p) $$
>
> > **Let's work through this step by step.** We simplify Firm B's indifference equation algebraically:
> > 1. $1p + 0(1-p) = p$ and $0p + 3(1-p) = 3 - 3p$
> > 2. Setting them equal: $p = 3 - 3p$
> > 3. Solving: $p + 3p = 3 \;\rightarrow\; 4p = 3 \;\rightarrow\; p = 3/4$
> > 4. → $p = 3 - 3p \Rightarrow p = 3/4$
> >
> > **Here's what's really going on:** Firm A must adopt with probability exactly $3/4$ for Firm B to be indifferent. The full msNE is $(p, q) = (3/4, 1/4)$ — Firm A randomises with high probability of Adopt (it prefers coordinated outcomes), while Firm B randomises with low probability of Adopt (it prefers opposite actions).
>
> $$ p = 3 - 3p \quad \Rightarrow \quad p = \frac{3}{4} $$
>
> **Mixed-strategy NE:** $\left( \frac{3}{4} \text{ Adopt}, \frac{1}{4} \text{ Not adopt} \right)$ for Firm A, $\left( \frac{1}{4} \text{ Adopt}, \frac{3}{4} \text{ Not adopt} \right)$ for Firm B.
>
> **Here's what's really going on:** Firm A (which prefers coordinated outcomes) randomises with high probability of Adopt; Firm B (which prefers opposite actions) randomises with low probability of Adopt. The indifference method works because each player's mixing probability must make the *other* player indifferent.

---

### 6.2 Dominant Strategies and the Prisoners' Dilemma

**Why this matters for your exam:** The prisoners' dilemma is the most frequently tested game in oligopoly questions. Examiners love asking you to spot the PD structure in a pricing or advertising game, then discuss how repeated interaction can resolve the dilemma.

**Dominant strategy:** A strategy $s_i^*$ is dominant if it yields a strictly higher payoff than any other strategy **regardless** of what opponents do (Fudenberg & Tirole, SS1.1):

> **Let's work through this step by step.** We start with the definition of a strictly dominant strategy — one that outperforms all alternatives no matter what opponents choose:
> 1. For a given player $i$, compare strategy $s_i^*$ against any alternative $s_i \neq s_i^*$
> 2. The comparison must hold for **every possible** opponent strategy profile $s_{-i} \in S_{-i}$
> 3. If $u_i(s_i^*, s_{-i}) > u_i(s_i, s_{-i})$ for all $s_i \neq s_i^*$ **and** all $s_{-i}$, then $s_i^*$ strictly dominates $s_i$
> 4. → $$u_i(s_i^*, s_{-i}) > u_i(s_i, s_{-i}) \quad \text{for all } s_i \neq s_i^* \text{ and all } s_{-i}$$
>
> **Here's what's really going on:** A dominant strategy is optimal regardless of what others do — you don't need any beliefs or conjectures about opponents' behaviour. If all players have a dominant strategy, the outcome is a **dominant-strategy equilibrium**, which is a particularly strong solution concept (no need for equilibrium reasoning).

**Prisoners' Dilemma (PD):** A $2 \times 2$ game where each player has a dominant strategy (Defect), yet mutual defection is Pareto-inferior to mutual cooperation (Koutsoyiannis, p.412-413).

**Payoff matrix (years in prison — lower is better):**

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

**Exam Question — Prisoners' Dilemma in Oligopoly (46 Final Q4b):** The PD captures the fragility of oligopolistic collusion — each firm has an individual incentive to undercut, even though all would be better off maintaining high prices.

**Implications for oligopoly:**
1. **Price competition:** Firms have incentive to undercut each other. NE is low-price, low-profit (Bertrand paradox) even though collusion would yield higher joint profits.
2. **Advertising wars:** Firms advertise because rival will if they don't, but mutual advertising reduces profits (arms race).
3. **Investment/R&D:** Each firm fears being left behind → overinvestment.
4. **Tacit collusion is fragile:** The PD structure makes cooperation hard to sustain without repeated interaction.

**Why oligopoly differs from PD:** In repeated games, punishment strategies (grim trigger, tit-for-tat) can sustain cooperation. If the game is infinitely repeated and players are sufficiently patient (discount factor $\delta > \delta^*$), the cooperative outcome can be an SPNE (Folk Theorem).

---

### 6.3 Bertrand Duopoly

**Why this matters for your exam:** Bertrand competition is a staple exam problem. You'll be asked to compute the Nash equilibrium prices, quantities, and profits. The key twist: with differentiated products, firms earn positive profits; with homogeneous goods, they earn zero (the Bertrand paradox).

**Bertrand competition with differentiated products (46 Final Q4a):**

Market: $q_1 = 100 - 2p_1 + p_2$, $q_2 = 100 - 2p_2 + p_1$; MC = $10$ for both firms.

**Step 1: Profit functions.**
$\pi_1 = (p_1 - 10)(100 - 2p_1 + p_2)$
$\pi_2 = (p_2 - 10)(100 - 2p_2 + p_1)$

**Step 2: First-order conditions (best responses).**

$\partial\pi_1/\partial p_1 = (1)(100 - 2p_1 + p_2) + (p_1 - 10)(-2) = 0$
$120 - 4p_1 + p_2 = 0$ → $p_1 = 30 + p_2/4$ (BR of Firm 1)

Similarly: $p_2 = 30 + p_1/4$ (BR of Firm 2)

**Step 3: Solve Nash equilibrium.**

$p_1 = 30 + (30 + p_1/4)/4$ → $p_1 = 30 + 7.5 + p_1/16$ → $(15/16)p_1 = 37.5$ → $p_1^* = 40$

$p_2^* = 30 + 40/4 = 40$

**Nash equilibrium:** $(p_1^*, p_2^*) = (40, 40)$

**Step 4: Quantities and profits.**
$q_1 = 100 - 2(40) + 40 = 60$, $q_2 = 60$
$\pi_1 = (40 - 10)(60) = 1800$, $\pi_2 = 1800$

**Strategic complements:** $\partial p_1/\partial p_2 = 1/4 > 0$ — best-response functions slope upward. A price cut by one firm induces the other to cut price as well.

> **Munoz-Garcia Insight: Strategic Complements** (Ch.8, §8.4.1)
>
> In Bertrand competition with differentiated products, firms' pricing decisions are **strategic complements**: an increase in firm $j$'s price raises firm $i$'s optimal price. Formally, the cross-partial derivative of firm $i$'s marginal profit with respect to its rival's price is positive:
>
> > **Let's work through this step by step.** We start with the definition of strategic complements — an increase in $p_j$ raises $i$'s optimal $p_i$:
> > 1. Firm $i$'s marginal profit is $\partial \pi_i / \partial p_i$
> > 2. Strategic complements means $\partial (\partial \pi_i / \partial p_i) / \partial p_j > 0$ — the cross-partial derivative is positive
> > 3. When $p_j$ rises, firm $i$'s demand increases (substitute goods), raising the marginal profitability of $i$'s own price increase
> > 4. → $$\frac{\partial^2 \pi_i}{\partial p_i \partial p_j} > 0$$
> >
> > **Here's what's really going on:** A positive cross-partial means best-response functions slope **upward** in price space. When your rival raises price, your optimal response is to raise your price too. This contrasts with Cournot competition where best-response functions slope downward.
>
> This implies best-response functions are **upward-sloping** in price space. Intuitively, when your rival raises price, your demand increases, and raising your own price becomes more profitable. The general condition (Munoz-Garcia, Ch.8) for strategic complements in price competition is:
>
> > **Let's work through this step by step.** We start with firm $i$'s profit function $\pi_i(p_i, p_j) = (p_i - c) q_i(p_i, p_j)$:
> > 1. Marginal profit: $\partial \pi_i / \partial p_i = q_i + (p_i - c) (\partial q_i / \partial p_i)$
> > 2. Cross-partial derivative w.r.t. $p_j$: $\frac{\partial^2 \pi_i}{\partial p_i \partial p_j} = \frac{\partial q_i}{\partial p_j} + \frac{\partial (p_i - c)}{\partial p_j} \frac{\partial q_i}{\partial p_i} + (p_i - c) \frac{\partial^2 q_i}{\partial p_i \partial p_j}$
> > 3. Since $\partial (p_i - c)/\partial p_j = 0$, this simplifies to: $\frac{\partial q_i}{\partial p_j} + (p_i - c) \frac{\partial^2 q_i}{\partial p_i \partial p_j}$
> > 4. For linear demand $\frac{\partial^2 q_i}{\partial p_i \partial p_j} = 0$, so the sign depends on $\frac{\partial q_i}{\partial p_j} > 0$ (substitute goods)
> > 5. → $$\frac{\partial \pi_i(p_i, p_j)}{\partial p_i \partial p_j} = \frac{\partial q_i}{\partial p_j} + (p_i - c) \frac{\partial^2 q_i}{\partial p_i \partial p_j} > 0$$
> >
> > **Here's what's really going on:** The cross-partial has two terms: a demand-shifting effect ($\partial q_i / \partial p_j > 0$ — rival's price increase raises own demand) and a curvature term (zero for linear demand). Since goods are substitutes, the first term is positive, confirming strategic complements. Best-response functions slope upward.
>
> **Homogeneous Bertrand:** If products are identical and firms compete in prices with constant MC, the unique NE is $p = MC$ (zero profits) — the **Bertrand paradox**.

---

### 6.4 Cournot Duopoly

**Why this matters for your exam:** Cournot is the other major oligopoly model you'll be tested on. The exam often asks you to compare Cournot and Bertrand outcomes, or to solve a Cournot equilibrium and then extend it to Stackelberg. The strategic substitutes concept is a favourite for deeper analysis.

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
> > **Let's work through this step by step.** We start with firm $j$'s profit in Cournot competition with inverse demand $p(q)$ where total output $q = \sum_k q_k$:
> > 1. Profit: $\pi_j = p(q) q_j - c(q_j)$
> > 2. First-order condition (marginal profit = 0): $\partial \pi_j / \partial q_j = p'(q) q_j + p(q) - c'(q_j) = 0$
> > 3. To determine whether quantities are strategic substitutes, compute the cross-partial of marginal profit w.r.t. rival output $q_k$ ($k \neq j$):
> >    - $\frac{\partial}{\partial q_k}[p'(q) q_j] = p''(q) \cdot \frac{\partial q}{\partial q_k} \cdot q_j + p'(q) \cdot \frac{\partial q_j}{\partial q_k} = p''(q) q_j$ (since $\partial q_j / \partial q_k = 0$)
> >    - $\frac{\partial}{\partial q_k}[p(q)] = p'(q) \cdot \frac{\partial q}{\partial q_k} = p'(q)$
> >    - $\frac{\partial}{\partial q_k}[-c'(q_j)] = 0$ (cost depends only on own output)
> > 4. The cross-partial derivative equals $p''(q) q_j + p'(q)$. For standard downward-sloping demand ($p'(q) < 0$) with linear or concave demand ($p''(q) \le 0$), this is negative. Writing the expression as in the text:
> > 5. → $$\frac{\partial \left( \partial \pi_j / \partial q_j \right)}{\partial q_k} = \frac{\partial}{\partial q_k} \left[ p'(q) q_j + p(q) - c'(q_j) \right] = p''(q) q_j - p'(q) < 0 \quad \text{for all } k \neq j$$
> >
> > **Here's what's really going on:** The cross-partial is negative, confirming that quantities are **strategic substitutes**: an increase in rival output $q_k$ lowers market price, reducing firm $j$'s marginal revenue. Firm $j$'s optimal response is to contract its own output. Hence best-response functions slope **downward** in quantity space.
>
> For linear demand $p(q) = a - bq$, this simplifies to:
>
> > **Let's work through this step by step.** We plug linear demand $p(q) = a - bq$ into the general cross-partial expression:
> > 1. Linear inverse demand: $p(q) = a - bq$, so $p'(q) = -b$ and $p''(q) = 0$
> > 2. The cross-partial from firm $j$'s FOC: $\frac{\partial^2 \pi_j}{\partial q_j \partial q_k} = \frac{\partial}{\partial q_k}[p'(q) q_j + p(q) - c'(q_j)]$
> > 3. Substituting $p'(q) = -b$ and $p''(q) = 0$: $\frac{\partial}{\partial q_k}[(-b) q_j + (a - bq)] = 0 \cdot q_j + (-b) = -b$
> > 4. → $$\frac{\partial^2 \pi_j}{\partial q_j \partial q_k} = -b < 0$$
> >
> > **Here's what's really going on:** With linear demand, the cross-partial simplifies to $-b < 0$, confirming strategic substitutes. Each additional unit produced by the rival reduces market price by $b$, which directly lowers the marginal revenue of own output by $b$. Best-response functions are linear and slope downward with gradient $-1/2$.
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

---

#### 6.4.1 Stackelberg Model (Sequential Cournot)

**Why this matters for your exam:** Stackelberg tests whether you understand the strategic advantage of moving first. Examiners often ask you to compare Stackelberg outcomes with Cournot and identify the leader's profit advantage.

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
> - **Bertrand model:** Firms assume rivals keep price fixed. Leads to marginal cost pricing with homogeneous goods — a much more competitive outcome. "The equilibrium price will be the competitive price" (Koutsoyiannis, p.227). Bertrand's model focuses attention on price setting as the main decision variable.
>
> - **Chamberlin's model:** Firms recognise interdependence and reach the monopoly outcome without explicit collusion. "If firms recognise their interdependence and act so as to maximise the industry profit" (Koutsoyiannis, p.228), the monopoly solution is stable. However, this requires sophisticated firms with good knowledge of market demand.
>
> - **Stackelberg model:** One firm acts as leader, the other as follower. If only one firm is sophisticated, a stable leader-follower equilibrium emerges. "If both firms are sophisticated, then both will want to act as leaders... The situation is known as Stackelberg's disequilibrium" leading to price war or collusion (Koutsoyiannis, p.234).
>
> **Koutsoyiannis critique:** All classical models share limitations: (1) naive behavioural assumptions — firms never learn from past reactions; (2) closed models that ignore entry; (3) static framework with no explicit adjustment process; (4) neglect of non-price competition (advertising, product differentiation, location). These limitations motivate the more advanced models in later chapters of Koutsoyiannis.

---

### 6.5 Sequential Games, Backward Induction, and SPNE

**Why this matters for your exam:** Extensive form games and backward induction appear frequently in exam questions — especially entry games. The idea of eliminating non-credible threats is a favourite topic. If you can solve a simple entry game tree, you've got this section covered.

**Subgame Perfect Nash Equilibrium (SPNE):** A strategy profile that induces a Nash equilibrium in every subgame of the original game (Selten, 1965). Eliminates **non-credible threats**.

**Backward induction (rollback):** The algorithm for finding SPNE in finite-horizon games of perfect information:
1. Start at the **last decision node** — choose the action that maximises that player's payoff.
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
1. At I's node (after E enters): Accommodate (40) > Fight (-10) → **Accommodate**.
2. At E's node: Enter gives 40 (since I accommodates), Stay Out gives 0 → **Enter**.

**SPNE:** (Enter, Accommodate) — payoffs (40, 40).

**Alternative version (46 Final Q5a — revised payoffs):** Market only big enough for one firm. Both enter → both lose 20m. One enters → profit 50m, other breaks even (0). Firm B observes A's decision.

Decision tree: A chooses IN/OUT; B observes and chooses IN/OUT.

**Backward induction:**
1. If A stays OUT → B enters (50 > 0).
2. If A enters → B stays out (0 > -20).
3. Knowing this, A chooses Enter (50 > 0).

**SPNE:** (A enters, B stays out) — payoffs (50, 0).

**Non-credible threats:** The incumbent's threat to fight entry is not credible because accommodating is the optimal response once entry occurs — backward induction reveals this.

**Key property:** SPNE always exists in finite extensive-form games and is always a NE, but not every NE is subgame perfect.

---

### 6.6 Repeated Games and the Folk Theorem

**Why this matters for your exam:** Repeated games are how we explain why firms don't always cheat on collusive agreements. The grim trigger discount factor threshold is a classic exam calculation — you'll be given a payoff matrix and asked to find $\delta^*$.

**Grim trigger strategy:** In a repeated game, cooperate as long as all players have cooperated in every previous period; if any player ever deviates, punishment (reversion to the stage-game Nash equilibrium) is triggered forever (Friedman, 1971).

**Sustaining condition:** Cooperation is an SPNE under grim trigger if the discount factor $\delta$ satisfies:

> **Let's work through this step by step.** We start with the present-value comparison between cooperation and deviation with grim trigger punishment:
> 1. **Cooperate forever:** earn $\pi_{\text{coop}}$ each period → PV = $\pi_{\text{coop}} + \delta \pi_{\text{coop}} + \delta^2 \pi_{\text{coop}} + \cdots = \frac{\pi_{\text{coop}}}{1-\delta}$
> 2. **Deviation:** earn $\pi_{\text{dev}}$ today (higher one-shot gain), then $\pi_{\text{pun}}$ forever (trigger punishment) → PV = $\pi_{\text{dev}} + \frac{\delta \pi_{\text{pun}}}{1-\delta}$
> 3. Cooperation is sustainable if the PV of cooperation ≥ PV of deviation:
>    $\frac{\pi_{\text{coop}}}{1-\delta} \ge \pi_{\text{dev}} + \frac{\delta \pi_{\text{pun}}}{1-\delta}$
> 4. Multiply both sides by $(1-\delta)$: $\pi_{\text{coop}} \ge \pi_{\text{dev}}(1-\delta) + \delta \pi_{\text{pun}}$
> 5. Collect $\delta$ terms: $\pi_{\text{coop}} \ge \pi_{\text{dev}} - \delta(\pi_{\text{dev}} - \pi_{\text{pun}})$
> 6. Rearranged: $\delta(\pi_{\text{dev}} - \pi_{\text{pun}}) \ge \pi_{\text{dev}} - \pi_{\text{coop}}$
> 7. → $$\delta \geq \frac{\pi_{\text{dev}} - \pi_{\text{coop}}}{\pi_{\text{dev}} - \pi_{\text{pun}}}$$
>
> **Here's what's really going on:** The threshold discount factor $\delta^*$ is the ratio of the one-period gain from cheating ($\pi_{\text{dev}} - \pi_{\text{coop}}$) to the one-period cost of punishment ($\pi_{\text{dev}} - \pi_{\text{pun}}$). If $\delta$ is high enough (you're patient enough), the long-run cost of punishment outweighs the short-run gain from deviation, making cooperation sustainable.

where $\pi_{\text{dev}}$ is the one-period gain from deviation, $\pi_{\text{coop}}$ is the cooperative per-period payoff, and $\pi_{\text{pun}}$ is the punishment (NE) payoff.

**Here's what's really going on:** The short-run gain from cheating must be outweighed by the long-run loss from permanent punishment. For $\delta \to 1$ (very patient players), almost any cooperative outcome can be sustained.

**Exam Question — Repeated Game with Grim Trigger (46 Final Q5b):**

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
$3 \ge 5(1-\delta) + 2\delta$ → $3 \ge 5 - 3\delta$ → $3\delta \ge 2$ → $\delta \ge 2/3$

So (Up, Left) = (3,3) can be sustained as SPNE with grim trigger if $\delta \ge 2/3$.

**Folk Theorem:** For sufficiently patient players ($\delta \to 1$), any feasible, individually rational payoff vector can be sustained as an SPNE of the infinitely repeated game.

#### 6.6.1 The Renegotiation-Proofness Problem

**⚠️ Watch out (repeated from existing):** Grim trigger is not renegotiation-proof — once triggered, the punishment phase continues even though both would prefer to renegotiate and return to cooperation. Trigger strategies also require observability — if firms can secretly undercut, cooperation breaks down even with high $\delta$.

> **Munoz-Garcia Insight: Renegotiation-Proofness** (Ch.8 discussion)
>
> A fundamental weakness of grim trigger strategies is the **renegotiation-proofness** problem. Consider the punishment phase of a grim trigger equilibrium: both firms are playing the stage-game Nash equilibrium forever, earning low profits $\pi_{\text{pun}}$. At this point, both firms would be **strictly better off** if they could tear up the trigger agreement and return to the cooperative outcome $\pi_{\text{coop}}$.
>
> **The problem:** If players anticipate that renegotiation will occur in the future, the threat of punishment loses its bite. A rational player who deviates knows that after a brief punishment, both will renegotiate back to cooperation. Hence the discounted cost of deviation is much smaller than under the permanent punishment of grim trigger, making cooperation **harder to sustain**.
>
> **Formally:** With renegotiation, the punishment is finite (say $k$ periods), so the deviation constraint becomes:
>
> > **Let's work through this step by step.** We start with the grim trigger condition but with finite $k$-period punishment followed by renegotiation back to cooperation:
> > 1. **Cooperate forever:** PV = $\frac{\pi_{\text{coop}}}{1-\delta}$ (same as grim trigger)
> > 2. **Deviation with renegotiation:** earn $\pi_{\text{dev}}$ today (deviation gain), then $\pi_{\text{pun}}$ for $k$ periods (punishment), then $\pi_{\text{coop}}$ forever (renegotiation)
> > 3. Deviation PV = $\pi_{\text{dev}} + \delta \pi_{\text{pun}} + \delta^2 \pi_{\text{pun}} + \cdots + \delta^k \pi_{\text{pun}} + \delta^{k+1} \pi_{\text{coop}} + \delta^{k+2} \pi_{\text{coop}} + \cdots$
> > 4. Group the punishment phase: $\sum_{t=1}^{k} \delta^t \pi_{\text{pun}}$ and the post-punishment phase: $\sum_{t=k+1}^{\infty} \delta^t \pi_{\text{coop}}$
> > 5. The cooperation condition is: $\frac{\pi_{\text{coop}}}{1-\delta} \ge \pi_{\text{dev}} + \sum_{t=1}^{k} \delta^t \pi_{\text{pun}} + \sum_{t=k+1}^{\infty} \delta^t \pi_{\text{coop}}$
> > 6. → $$\pi_{\text{dev}} + \delta \pi_{\text{pun}} + \delta^2 \pi_{\text{pun}} + \cdots + \delta^{k} \pi_{\text{pun}} + \delta^{k+1} \pi_{\text{coop}} + \cdots \geq \pi_{\text{coop}}/(1-\delta)$$
> >
> > **Here's what's really going on:** Because the punishment phase is now finite ($k$ periods rather than infinite), the discounted cost of deviation is smaller. For cooperation to be sustained, players must be **more patient** (higher $\delta$) than under grim trigger. As $k \to \infty$, the condition converges to the grim trigger condition; as $k \to 0$, only self-enforcing agreements (where $\pi_{\text{coop}}$ is itself a NE) survive.
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
> **Here's what's really going on:** The small uncertainty about types breaks the certainty of the backward induction logic. Player 1 cooperates in period $T-1$ because there is a chance Player 2 is a cooperative type who will reciprocate in period $T$, and Player 2 cooperates in $T-1$ to maintain the reputation that sustains Player 1's cooperation.
>
> This result is also known as the **"gang of four"** result and provides a theoretical foundation for why experimental subjects cooperate in finitely repeated PDs despite the backward induction paradox. The model also explains the centipede game experimental evidence (McKelvey & Palfrey, 1992): a small probability of altruistic types explains observed cooperation patterns.

---

### 6.7 The Backward Induction Paradox

**Why this matters for your exam:** The backward induction paradox is a favourite discussion question — "Why might players cooperate in a finitely repeated PD despite the theoretical prediction?" You should be able to explain at least three resolution paths.

**Paradox of backward induction (46 Final Q6a):** In finite-horizon games of perfect information, backward induction predicts cooperation unravels from the end. In a finitely repeated PD:

- Last period T: both defect (dominant strategy).
- Period T-1: knowing T is defection, why cooperate? Both defect.
- This unravels to defection in EVERY period, even though both would prefer mutual cooperation.

**The paradox:** The prediction contradicts experimental evidence — people cooperate in finitely repeated PDs, at least in early periods.

**Can multiple Nash equilibria help? (46 Final Q6a, part ii)**

Yes. The paradox arises when the stage game has a **unique** Nash equilibrium. If there are **multiple** NE, backward induction may not yield a unique prediction:

1. **Multiple equilibria change the endgame.** If the stage game has a cooperative NE (alongside the non-cooperative one), the unraveling argument weakens because the terminal period may not force defection.
2. **Bargaining models:** In finite-horizon bargaining, if there are multiple equilibria (e.g., multiple acceptable splits), the unique backward induction solution may break down.
3. **Coordination on "good" equilibrium:** If both players prefer one equilibrium, they may coordinate on it, and punishment for deviation can sustain cooperation even in finite games.
4. **Reputation effects:** With incomplete information about types, the unraveling is limited — players may maintain cooperation to build reputation.

**Example:** In a finitely repeated game where the stage game has both (Cooperate, Cooperate) and (Defect, Defect) as NE, players can sustain cooperation throughout because the "punishment" of reverting to the bad equilibrium deters deviation.

**Resolution paths:**
1. **Multiple stage-game Nash equilibria:** Punishment strategies sustain cooperation.
2. **Incomplete information:** A small probability of a "cooperative type" limits unraveling (Kreps-Milgrom-Roberts-Wilson, 1982).
3. **Bounded rationality:** Real players may not perform full backward induction.

---

### 6.8 The Centipede Game

**Why this matters for your exam:** The centipede game is the classic demonstration of the gap between backward induction and actual behaviour. It frequently appears in exam questions that ask you to compare the theoretical prediction with experimental evidence.

**Centipede game (Rosenthal, 1981; 46 Final Q6b):** A sequential-move game where two players alternately choose to "Take" (end the game) or "Pass" (increase the pot for the next player). The pot doubles with each Pass; Taking gives the current player a larger share now; Passing risks the opponent taking an even larger share later.

**Structure (simplified 4-move version):**

Round 1: Player 1 chooses Take (T) or Pass (P)
- T → (1, 0)
- P → Round 2

Round 2: Player 2 chooses T or P
- T → (0, 3)
- P → Round 3

Round 3: Player 1 chooses T or P
- T → (3, 1)
- P → Round 4

Round 4: Player 2 chooses T or P (automatic — last round)
- T → (1, 4)
- P → (2, 2)

**Backward induction solution:**
Round 4: P2 chooses Take (4 > 2).
Round 3: P1 chooses Take (3 > 1, knowing P2 will take in R4).
Round 2: P2 chooses Take (3 > 1, knowing P1 will take in R3).
Round 1: P1 chooses Take (1 > 0, knowing P2 will take in R2).

**Prediction:** P1 takes in Round 1 → (1,0). Both get very little.

**Paradox:** Both players would be better off if they passed all the way to the end (2,2), but backward induction says they won't. The cooperative outcome is achievable only if neither acts "rationally" in the backward-induction sense.

**Overcoming the paradox (46 Final Q6b — "if players initially co-operate and play across, the paradox is partially overcome"):**

1. **Partial cooperation:** If players initially cooperate (Pass) in early rounds, they may reach later rounds where the pot is much larger, making continued cooperation more attractive.
2. **Incomplete information (reputation):** If there's a small probability that P1 is "altruistic" (always passes), P2 may Pass in early rounds to find out, and P1 may Pass to build reputation. This limits the unraveling (Kreps-Milgrom-Roberts-Wilson, 1982).
3. **Multiple Nash equilibria:** The centipede game has multiple NE. Backward induction selects one, but alternative equilibria (e.g., both always Pass) can be sustained if each believes the other will Pass.
4. **Bounded rationality:** Real players may not perform full backward induction, especially in long games. Experiments show most pairs reach the middle or end before someone Takes.
5. **Social preferences:** Fairness, reciprocity, and altruism lead players to Pass more often than predicted.

**Experimental evidence (McKelvey & Palfrey, 1992):** Subjects Pass far more often than backward induction predicts, especially in early rounds. The Kreps incomplete-information model (a small chance of an "altruistic" type) explains the observed pattern well.

**Key insight:** The centipede game is the canonical illustration of the gap between theoretical backward induction and actual human behaviour. Backward induction is a powerful logical principle, but humans deviate from it systematically. The paradox is that individually rational choices (taking) produce a collectively inferior outcome. If players initially cooperate and Pass, they partially overcome the paradox by reaching payoff-superior outcomes that would be eliminated by strict backward induction.

---

### 6.10 Games of Incomplete Information: Bayesian Nash Equilibrium and Perfect Bayesian Equilibrium

**Why this matters for your exam:** Incomplete information games appear less frequently in the exam but are high-value when they do — they test deeper understanding. Bayesian Nash Equilibrium is the proper way to model uncertainty about costs, types, or demand. Perfect Bayesian Equilibrium adds sequential rationality for dynamic settings.

#### 6.10.1 Bayesian Nash Equilibrium (BNE)

When players have **private information** (e.g., unknown costs, unknown demand, unknown "type"), we model the game as one of **incomplete information**. Each player $i$ has a type $\theta_i \in \Theta_i$ observed only by themselves; opponents hold **beliefs** (a common prior) over $\theta_i$.

> **Munoz-Garcia Insight: Bayesian Nash Equilibrium** (Ch.8, §8.1.3)
>
> **Definition:** A strategy profile $(s_1^*(\theta_1), s_2^*(\theta_2), \dots, s_N^*(\theta_N))$ is a Bayesian Nash equilibrium (BNE) of a game of incomplete information if, for every player $i$, every type $\theta_i \in \Theta_i$, and every feasible strategy $s_i(\theta_i)$:
>
> > **Let's work through this step by step.** We start with the Nash equilibrium definition extended to games with private information and type-contingent strategies:
> > 1. Each player $i$ has private type $\theta_i$; opponents hold beliefs $p(\theta_{-i} | \theta_i)$
> > 2. A strategy $s_i(\theta_i)$ is a function mapping $i$'s type to an action — a **type-contingent strategy**
> > 3. In BNE, every type $\theta_i$ of every player $i$ must be playing optimally: $s_i^*(\theta_i)$ maximises $i$'s expected utility given its beliefs about opponents' types and their equilibrium strategies $s_{-i}^*(\theta_{-i})$
> > 4. The condition must hold for every feasible deviation $s_i(\theta_i)$ and every type $\theta_i$
> > 5. → $$EU_i(s_i^*(\theta_i), s_{-i}^*(\theta_{-i}); \theta_i, \theta_{-i}) \geq EU_i(s_i(\theta_i), s_{-i}^*(\theta_{-i}); \theta_i, \theta_{-i})$$
> >
> > **Here's what's really going on:** BNE extends NE by requiring optimality **type-by-type**. Each type of each player maximises expected payoff given correct beliefs about opponents' type-contingent strategies. It's a "Nash equilibrium in type-contingent strategies" — a fixed point in strategy functions rather than actions.
>
> **Key elements:**
> - **Types:** $\theta_i \in \Theta_i$ captures player $i$'s private information (e.g., high or low cost).
> - **Beliefs:** Common prior $p(\theta_1, \dots, \theta_N)$ over type profiles. Players update using Bayes' rule after observing their own type.
> - **Expected payoffs:** Since player $i$ does not observe $\theta_{-i}$, they maximise expected utility given their beliefs about opponents' types:
>
> > **Let's work through this step by step.** We start with the definition of expected utility when player $i$ faces uncertainty about opponents' types:
> > 1. Player $i$ knows their own type $\theta_i$ but not $\theta_{-i}$
> > 2. After observing $\theta_i$, $i$ forms posterior beliefs $p(\theta_{-i} | \theta_i)$ using Bayes' rule
> > 3. Opponents play type-contingent strategies $s_{-i}(\theta_{-i})$
> > 4. Player $i$'s expected payoff from choosing $s_i$ is the sum over all possible opponent type profiles, weighted by beliefs:
> > 5. $$EU_i(s_i, s_{-i}; \theta_i) = \sum_{\theta_{-i}} p(\theta_{-i} | \theta_i) \cdot u_i(s_i, s_{-i}(\theta_{-i}); \theta_i, \theta_{-i})$$
> >
> > **Here's what's really going on:** The expectation integrates over opponent types because you don't observe them. This is analogous to expected utility in decision theory under uncertainty — the opponent's type-contingent strategy $s_{-i}(\theta_{-i})$ translates type uncertainty into payoff uncertainty. The posterior $p(\theta_{-i} | \theta_i)$ reflects correlation in types (if any) updated from the prior.
>
> **Finding BNE — Four-step procedure (Munoz-Garcia Ch.8):**
> 1. **Strategy sets:** Identify strategies as functions of each player's private type.
> 2. **Bayesian normal form:** Construct expected payoff matrix using the prior distribution over types.
> 3. **Expected payoffs:** Compute each player's expected payoff for every strategy profile.
> 4. **Best responses:** Underline best-response payoffs to identify mutual best-response profiles.
>
> **Example — Cournot with incomplete information (Munoz-Garcia Ch.8, §8.3.2):** Two firms compete in quantities. Firm 2 has private information about its marginal cost (high or low). Firm 1 holds a prior belief $p$ that Firm 2 has low cost. The BNE involves Firm 2 choosing different quantities for each type (a **type-contingent strategy**), while Firm 1 chooses a single quantity that maximises its expected profit given its belief about Firm 2's type.

#### 6.10.2 Perfect Bayesian Equilibrium (PBE)

In **sequential-move games with incomplete information**, BNE is insufficient because it does not ensure **sequential rationality** at every information set. We need the stronger concept of Perfect Bayesian Equilibrium.

> **Munoz-Garcia Insight: Perfect Bayesian Equilibrium** (Ch.8, §8.1.4)
>
> **Definition:** A strategy profile $(s_1, s_2, \dots, s_N)$ and a system of **beliefs** $\mu$ (specifying a probability distribution over nodes at every information set) constitute a Perfect Bayesian Equilibrium (PBE) if:
>
> 1. **Sequential rationality:** Each player's strategy is optimal at every information set, given the strategies of other players and given their beliefs $\mu$ at that information set.
> 2. **Belief consistency:** Beliefs are updated using **Bayes' rule** whenever possible (i.e., at information sets reached with positive probability in equilibrium).
>
> **Here's what's really going on:** Condition (1) strengthens BNE by requiring optimality **off the equilibrium path** — even at information sets that are never reached in equilibrium, players must be playing optimally given their beliefs. Condition (2) ensures that beliefs are not arbitrary: at on-equilibrium-path information sets, they must be derived from the prior and the equilibrium strategies via Bayes' rule.
>
> **Bayes' rule for belief updating:**
>
> > **Let's work through this step by step.** We start with Bayes' theorem for updating the uninformed player's belief after observing an action (e.g., receiving an offer):
> > 1. Let $B$ and $NB$ be two states (e.g., beneficial investment or not), with prior probabilities $p(B)$ and $p(NB)$
> > 2. The uninformed player observes an action "Offer" and wants the posterior $\mu(B|\text{Offer}) = p(B|\text{Offer})$
> > 3. Bayes' rule: $p(B|\text{Offer}) = \frac{p(B \cap \text{Offer})}{p(\text{Offer})} = \frac{p(B) \cdot p(\text{Offer}|B)}{p(\text{Offer})}$
> > 4. The denominator expands using the law of total probability: $p(\text{Offer}) = p(B) \cdot p(\text{Offer}|B) + p(NB) \cdot p(\text{Offer}|NB)$
> > 5. → $$\mu(B|\text{Offer}) = p(B|\text{Offer}) = \frac{p(B) \cdot p(\text{Offer}|B)}{p(\text{Offer})} = \frac{p(B) \cdot p(\text{Offer}|B)}{p(B) \cdot p(\text{Offer}|B) + p(NB) \cdot p(\text{Offer}|NB)}$$
> >
> > **Here's what's really going on:** The posterior belief combines prior information $p(B)$ with new evidence (the likelihood $p(\text{Offer}|B)$ of observing the action in each state). The denominator normalises so that beliefs sum to 1. At off-equilibrium-path information sets (zero probability events), Bayes' rule does not apply — PBE places no restrictions on off-path beliefs, which creates multiplicity.
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
>
> > **Let's work through this step by step.** We start with the definitions of each equilibrium concept, ordered by how restrictive they are:
> > 1. **Nash Equilibrium (NE):** No profitable unilateral deviation **in the full game** — the weakest condition
> > 2. **Subgame Perfect NE (SPNE):** NE in **every subgame** — eliminates non-credible threats in sequential games, strictly stronger than NE
> > 3. **Perfect Bayesian Equilibrium (PBE):** SPNE + **sequential rationality** at every information set + **belief consistency** via Bayes' rule — applies to games with incomplete information
> > 4. **Bayesian NE (BNE):** NE in type-contingent strategies with expected payoffs — applies to static games of incomplete information; in sequential games, PBE is stronger
> > 5. The set inclusion relationships follow from the logical hierarchy of constraints:
> >    - Every SPNE is a NE (subgame perfection is a refinement)
> >    - Every PBE satisfies SPNE (if the game has perfect information) and BNE (sequential rationality + Bayes consistency)
> >    - Every BNE satisfies the NE condition (type-contingent NE is a special case of NE)
> > 6. → $$\text{NE} \supset \text{SPNE} \supset \text{PBE} \supset \text{BNE (in sequential games)}$$
> >
> > **Here's what's really going on:** Each refinement adds restrictions: SPNE adds subgame consistency, PBE adds belief-based sequential rationality and Bayesian updating, BNE (in sequential games) is the weakest incomplete-information concept. The "$\supset$" indicates set inclusion — the set of PBE is a subset of SPNE, which is a subset of NE. As we move rightward, equilibria become harder to find but more credible.
>
> Every PBE is a BNE and an SPNE (in games with perfect information), but the converse does not hold. PBE imposes stronger requirements on off-equilibrium beliefs and sequential rationality.

---

### 6.9 Key Formulas — Game Theory

**Why this matters for your exam:** This is your cheat sheet for the exam. Every formula here has appeared in past papers. Memorise the grim trigger threshold and the best-response conditions — they're the most heavily tested.

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

<!-- ============================================================
TOPIC 7: EXTERNALITIES & PUBLIC GOODS
============================================================ -->
## <a id="topic-7"></a>Topic 7: Externalities & Public Goods

### 7.1 Overview: Market Failure and Externalities

**Why this matters for your exam:** Questions on externalities appear in nearly every past paper — you'll need to classify them by sign, source, and scope, then explain why they break the First Welfare Theorem.

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

> **Koutsoyiannis (Ch.23) on the breakdown:** Externalities create a divergence between private and social costs/benefits. Since externalities are not reflected in market prices, these prices provide "misleading information (signals) for an optimal allocation of resources." The presence of externalities means "the model breaks down for two reasons: first, the Pareto-optimality conditions are violated; second, the constants embedded in the system lose their significance as 'prices', because they do not reflect all the costs and benefits of an action to the society as a whole" (Koutsoyiannis, Ch.23, p.541-542).

---

### 7.2 The Steel-Fishery Model: Canonical Production Externality

**Why this matters for your exam:** This is the canonical model you'll be asked to analyse — expect to compare unregulated, merged, Pigouvian, and Coase outcomes, often with a numerical twist (see §7.2(v)).

**Setup (Munoz-Garcia, SS8.1, p.531):**

A steel mill (S) produces steel $S$ and pollution $x$ as a byproduct. A downstream fishery (F) is harmed by the pollution.

- Steel mill's cost: $C_S(S,x)$ with $\partial C_S/\partial x < 0$ (pollution reduces steel costs)
- Fishery's cost: $C_F(F,x)$ with $\partial C_F/\partial x > 0$ (pollution raises fishing costs)
- Both firms are price-takers: $P_S$, $P_F$ given

#### (i) Unregulated (Individual Profit Maximisation)

**Steel mill:**

> **Let's work through this step by step.** We start with the definition of profit (revenue minus cost):
> 1. Revenue = Price × Quantity = $P_S \cdot S$
> 2. Cost = $C_S(S, x)$ — steel production cost depends on both output $S$ and pollution $x$
> 3. → Profit = Revenue − Cost = $P_S \cdot S - C_S(S, x)$
>
> **Here's what's really going on:** The steel mill's profit is decreasing in pollution costs ($\partial C_S/\partial x < 0$), so pollution acts as a cost-reducing byproduct that the mill has an incentive to increase.

$$\pi_S = P_S \cdot S - C_S(S, x)$$

FOCs:

> **Let's work through this step by step.** We start from the profit function $\pi_S = P_S S - C_S(S, x)$:
> 1. Take $\partial/\partial S$ treating $x$ as fixed: $\partial \pi_S/\partial S = P_S - \partial C_S/\partial S$
> 2. Set = 0 for profit maximisation: $P_S - \partial C_S/\partial S = 0$
> 3. → Rearranging: $P_S = \partial C_S/\partial S = MC_S$
>
> **Here's what's really going on:** Standard profit-maximising condition — you produce steel until marginal revenue ($P_S$) equals marginal cost ($MC_S$). No externality appears at this stage.

$$\frac{\partial \pi_S}{\partial S} = P_S - \frac{\partial C_S}{\partial S} = 0 \quad\Rightarrow\quad P_S = MC_S$$

> **Let's work through this step by step.** We start from the profit function $\pi_S = P_S S - C_S(S, x)$:
> 1. Take $\partial/\partial x$ treating $S$ as fixed: $\partial \pi_S/\partial x = -\partial C_S/\partial x$
> 2. Set = 0 for profit maximisation: $-\partial C_S/\partial x = 0$
> 3. → Therefore $\partial C_S/\partial x = 0$
>
> **Here's what's really going on:** The steel mill increases pollution $x$ until the marginal private benefit ($-\partial C_S/\partial x$, the cost saving from additional pollution) falls to zero. **Critically, you (as the mill) ignore the damage imposed on the fishery** — this is the externality.

$$\frac{\partial \pi_S}{\partial x} = -\frac{\partial C_S}{\partial x} = 0 \quad\Rightarrow\quad \frac{\partial C_S}{\partial x} = 0$$

**Fishery:**

> **Let's work through this step by step.** We start with the definition of profit for the fishery:
> 1. Revenue = $P_F \cdot F$
> 2. Cost = $C_F(F, x)$ — fishing cost depends on own output $F$ and exogenous pollution $x$
> 3. → Profit = $P_F \cdot F - C_F(F, x)$
>
> **Here's what's really going on:** The fishery's costs increase with pollution ($\partial C_F/\partial x > 0$), but you (as the fishery) have no control over $x$ — you treat pollution as an exogenous cost shifter.

$$\pi_F = P_F \cdot F - C_F(F, x)$$

> **Let's work through this step by step.** We start from the profit function $\pi_F = P_F F - C_F(F, x)$:
> 1. Take $\partial/\partial F$ treating $x$ as exogenous: $\partial \pi_F/\partial F = P_F - \partial C_F/\partial F$
> 2. Set = 0: $P_F - \partial C_F/\partial F = 0$
> 3. → $P_F = \partial C_F/\partial F = MC_F$
>
> **Here's what's really going on:** The fishery optimises output given pollution, equating price to marginal cost. It passively absorbs the external damage from pollution.

$$\frac{\partial \pi_F}{\partial F} = P_F - \frac{\partial C_F}{\partial F} = 0 \quad\Rightarrow\quad P_F = MC_F$$

**Result:** Pollution level $x^*$ is **too high** relative to the social optimum $x^\circ$ because the steel mill internalises only its private cost, not the external damage.

#### (ii) Joint Profit Maximisation (Merger)

Maximise: $\Pi_J = P_S S - C_S(S, x) + P_F F - C_F(F, x)$

FOCs for $S$ and $F$ unchanged. For pollution:

> **Let's work through this step by step.** We start from joint profit $\Pi_J = P_S S - C_S(S, x) + P_F F - C_F(F, x)$:
> 1. Take $\partial/\partial x$: $\partial \Pi_J/\partial x = -\partial C_S/\partial x - \partial C_F/\partial x$
> 2. Set = 0: $-\partial C_S/\partial x - \partial C_F/\partial x = 0$
> 3. → Both firms' pollution-related costs are now internalised in the same objective
>
> **Here's what's really going on:** Unlike the unregulated case where the steel mill sets $-\partial C_S/\partial x = 0$, the merged firm also accounts for the fishery's marginal damage $\partial C_F/\partial x$. The externality is **internalised** by joint ownership.

$$\frac{\partial \Pi_J}{\partial x} = -\frac{\partial C_S}{\partial x} - \frac{\partial C_F}{\partial x} = 0$$

> **Let's work through this step by step.** We start from the joint profit FOC $-\partial C_S/\partial x - \partial C_F/\partial x = 0$:
> 1. Add $\partial C_F/\partial x$ to both sides: $-\partial C_S/\partial x = \partial C_F/\partial x$
> 2. This is the **optimality condition** for the merged firm
>
> **Here's what's really going on:** The social optimum $x^\circ$ equates the **marginal benefit of pollution** to the steel mill (cost saving $-\partial C_S/\partial x$) with the **marginal damage** to the fishery ($\partial C_F/\partial x$). Since $\partial C_F/\partial x > 0$, we require $-\partial C_S/\partial x > 0$, meaning **less pollution than in the unregulated case**: $x^\circ < x^*$.

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

> **Let's work through this step by step.** We start from the social optimum condition $-\partial C_S/\partial x = \partial C_F/\partial x$ at $x = x^\circ$:
> 1. The Pigouvian tax $\tau$ modifies the steel mill's FOC: with tax, profit is $\pi_S = P_S S - C_S(S, x) - \tau x$
> 2. New FOC: $\partial \pi_S/\partial x = -\partial C_S/\partial x - \tau = 0 \Rightarrow -\partial C_S/\partial x = \tau$
> 3. To align private and social incentives, we set $\tau$ equal to the marginal damage at the social optimum:
>    $\tau^* = \partial C_F/\partial x|_{x=x^\circ}$
> 4. Then the firm's private FOC $-\partial C_S/\partial x = \tau^*$ reproduces the social optimum
>    $-\partial C_S/\partial x = \partial C_F/\partial x$
>
> **Here's what's really going on:** The tax makes the steel mill **internalise the external cost** by raising its effective marginal cost of pollution. When $\tau = MEC$ at $x^\circ$, the firm voluntarily chooses the socially optimal pollution level.

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
- The Pigouvian tax $\tau^*$ is set equal to the MEC evaluated at the social optimum $x^\circ$:
  $\tau^* = \partial C_F/\partial x|_{x=x^\circ}$
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

**Why Coase fails in practice:**
1. **High transaction costs** — many parties cannot bargain costlessly
2. **Free-rider problem** — diffuse victims have incentive to free-ride on others' bargaining
3. **Asymmetric information** — parties may not know the true damage/benefit
4. **Legal constraints** — property rights may be poorly defined or unenforceable

**Exam Tip:** Draw the marginal benefit (to steel mill, downward-sloping) and marginal cost (to fishery, upward-sloping) diagram. The social optimum equates MB = MC. Shade the DWL from excessive pollution. State Coase Theorem explicitly, then immediately give its limitations.

#### (v) Numerical Example: Fully Solved Steel-Fishery (Munoz-Garcia, Ch.9, Example 9.1)

Let us specify functional forms to obtain explicit numerical solutions.

**Setup:** The steel mill produces steel $S$ and pollution $x$ as a byproduct. Output is $S = \alpha x$, where $\alpha > 0$ is the output-pollution ratio. The steel mill's profit function is $\pi_S = P_S S - c S^2$, which in terms of $x$ becomes:

> **Let's work through this step by step.** We start from the steel mill's profit in terms of $S$: $\pi_S = P_S S - c S^2$ with production $S = \alpha x$:
> 1. Substitute $S = \alpha x$: $\pi_S(\alpha x) = P_S \cdot (\alpha x) - c(\alpha x)^2$
> 2. Expand: $\pi_S(x) = (P_S \alpha)x - c\alpha^2 x^2$
> 3. This expresses profit directly as a function of pollution $x$, since steel output $S$ is proportional to pollution
>
> **Here's what's really going on:** Pollution is a **productive input** for the steel mill — more pollution enables more steel output, but at a diminishing rate due to the quadratic cost term.

$$\pi_S(x) = P_S \cdot \alpha x - c(\alpha x)^2 = (P_S \alpha)x - c\alpha^2 x^2$$

Define $a \equiv P_S \alpha$ and $b \equiv 2c\alpha^2$. The marginal profit from pollution is:

> **Let's work through this step by step.** We start from $\pi_S(x) = (P_S \alpha)x - c\alpha^2 x^2$:
> 1. Rewrite using $a = P_S \alpha$: $\pi_S(x) = a x - c\alpha^2 x^2$
> 2. Differentiate: $\pi_S'(x) = a - 2c\alpha^2 x$
> 3. Define $b \equiv 2c\alpha^2$, so $\pi_S'(x) = a - bx$
> 4. This is linear and decreasing in $x$ (since $b > 0$), reflecting diminishing returns to pollution
>
> **Here's what's really going on:** The marginal benefit of pollution is a downward-sloping line — each additional unit of pollution adds less to profit as pollution increases.

$$\pi_S'(x) = a - bx$$

The fishery suffers damage $v(x)$ from pollution. Let the damage function be:

> **Let's work through this step by step.** We start from a quadratic specification for the fishery's damage from pollution:
> 1. Damage function: $v(x) = \beta - cx - \frac{d}{2}x^2$
> 2. Differentiate: $v'(x) = -c - dx$
> 3. Marginal damage (positive) is $-v'(x) = c + dx$, which increases linearly in $x$
> 4. $\beta$ is a constant representing baseline fishery value without pollution
>
> **Here's what's really going on:** The quadratic damage function generates linear marginal damage — each unit of pollution causes progressively more harm to the fishery.

$$v(x) = \beta - cx - \frac{d}{2}x^2 \quad \Rightarrow \quad v'(x) = -c - dx$$

so the marginal damage is $-v'(x) = c + dx$, which increases in $x$.

**Parameter values:** Let $\alpha = 2$, $P_S = 10$, $c = 1$, so $a = P_S \alpha = 20$ and $b = 2c\alpha^2 = 2(1)(4) = 8$. For the fishery, let $c = 2$, $d = 4$ (these are damage function parameters, distinct from the steel mill's $c$).

Thus:

> **Let's work through this step by step.** We start from $\pi_S'(x) = a - bx$ with $a = 20$, $b = 8$:
> 1. Substitute: $\pi_S'(x) = 20 - 8x$
> 2. This is the linear marginal benefit of pollution for the steel mill
>
> **Here's what's really going on:** At $x = 0$, marginal benefit is 20; at $x = 2.5$, marginal benefit falls to zero. The mill would never pollute beyond $x = 2.5$.

$$\pi_S'(x) = 20 - 8x$$

> **Let's work through this step by step.** We start from $-v'(x) = c + dx$ with $c = 2$, $d = 4$:
> 1. Substitute: $-v'(x) = 2 + 4x$
> 2. This is the linear marginal damage function for the fishery
>
> **Here's what's really going on:** At $x = 0$, marginal damage is 2; at $x = 1.5$, marginal damage is 8. The fishery suffers increasing harm from each unit of pollution.

$$-v'(x) = 2 + 4x$$

**Step 1: Unregulated equilibrium $x^*$**

The steel mill maximises $\pi_S(x)$ alone:

> **Let's work through this step by step.** We start from the unregulated profit-maximisation condition $\pi_S'(x^*) = 0$:
> 1. $\pi_S'(x^*) = 20 - 8x^* = 0$
> 2. Solve: $8x^* = 20$
> 3. → $x^* = 20/8 = 2.5$
>
> **Here's what's really going on:** Without regulation, the steel mill pollutes until marginal private benefit is zero. It ignores all harm to the fishery.

$$\pi_S'(x^*) = 0 \quad \Rightarrow \quad 20 - 8x^* = 0 \quad \Rightarrow \quad x^* = 2.5$$

**Step 2: Social optimum $x^\circ$**

The social planner maximises $\pi_S(x) + v(x)$:

> **Let's work through this step by step.** We start from the social optimum condition $\pi_S'(x^\circ) = -v'(x^\circ)$:
> 1. Substitute the functional forms: $20 - 8x^\circ = 2 + 4x^\circ$
> 2. Collect terms: $20 - 2 = 8x^\circ + 4x^\circ$
> 3. Simplify: $18 = 12x^\circ$
> 4. → $x^\circ = 18/12 = 1.5$
>
> **Here's what's really going on:** The social planner equates marginal benefit to the steel mill with marginal damage to the fishery. The socially optimal pollution $x^\circ = 1.5$ is well below the unregulated level $x^* = 2.5$.

$$\pi_S'(x^\circ) = -v'(x^\circ) \quad \Rightarrow \quad 20 - 8x^\circ = 2 + 4x^\circ$$

> **Let's work through this step by step.** Solving the social optimum condition step by step:
> 1. $20 - 8x^\circ = 2 + 4x^\circ$
> 2. Subtract 2: $18 - 8x^\circ = 4x^\circ$
> 3. Add $8x^\circ$: $18 = 12x^\circ$
> 4. → $x^\circ = 18/12 = 1.5$
>
> **Here's what's really going on:** Each additional unit of pollution generates $MB = 20 - 8x$ for the mill but costs $MD = 2 + 4x$ to the fishery. The optimum balances these at the margin.

$$20 - 2 = 8x^\circ + 4x^\circ \quad \Rightarrow \quad 18 = 12x^\circ \quad \Rightarrow \quad x^\circ = 1.5$$

The socially optimal pollution level $x^\circ = 1.5$ is well below the unregulated level $x^* = 2.5$.

**Step 3: Pigouvian tax**

The per-unit tax that restores efficiency is:

> **Let's work through this step by step.** We start from the Pigouvian tax formula $\tau^* = -v'(x)$ evaluated at $x = x^\circ$:
> 1. Marginal damage function: $-v'(x) = 2 + 4x$
> 2. Evaluate at $x^\circ = 1.5$: $\tau^* = 2 + 4(1.5)$
> 3. → $\tau^* = 2 + 6 = 8$
>
> **Here's what's really going on:** The optimal tax equals the marginal damage caused by pollution at the social optimum — 8 per unit. This forces the mill to internalise the external cost.

$$\tau^* = \left. -v'(x) \right|_{x = x^\circ} = 2 + 4(1.5) = 8$$

Verification: With tax $\tau = 8$, the steel mill's FOC becomes $\pi_S'(x) = \tau$:

> **Let's work through this step by step.** We start from the steel mill's profit-maximisation with tax $\tau$: $\max \pi_S(x) - \tau x$:
> 1. FOC: $\pi_S'(x) = \tau$, i.e., $20 - 8x = 8$
> 2. Solve: $20 - 8 = 8x$, so $12 = 8x$
> 3. → $x = 12/8 = 1.5$
> 4. This exactly equals $x^\circ$ — verification successful
>
> **Here's what's really going on:** With the Pigouvian tax, the mill's private marginal benefit net of tax ($20 - 8x - 8$) is zero at $x = 1.5$, exactly the social optimum.

$$20 - 8x = 8 \quad \Rightarrow \quad 8x = 12 \quad \Rightarrow \quad x = 1.5 \quad \checkmark$$

**Step 4: Welfare comparison**

> **Let's work through this step by step.** We start from $\pi_S(x^*) = \int_0^{x^*} \pi_S'(x)dx$ (integral of marginal profit):
> 1. $\pi_S'(x) = 20 - 8x$
> 2. Integrate from 0 to $x^* = 2.5$: $\int_0^{2.5} (20 - 8x)dx = [20x - 4x^2]_0^{2.5}$
> 3. Evaluate: $20(2.5) - 4(6.25) = 50 - 25 = 25$
> 4. This is the total profit the steel mill earns at the unregulated equilibrium
>
> **Here's what's really going on:** The integral of marginal profit gives total profit (up to a constant). At $x^* = 2.5$, the mill earns $\pi_S = 25$.

$$\pi_S(x^*) = \int_0^{2.5} (20 - 8x)dx = [20x - 4x^2]_0^{2.5} = 50 - 25 = 25$$

> **Let's work through this step by step.** We start from $\pi_S(x^\circ) = \int_0^{x^\circ} \pi_S'(x)dx$:
> 1. Integrate $\pi_S'(x) = 20 - 8x$ from 0 to $x^\circ = 1.5$
> 2. $\int_0^{1.5} (20 - 8x)dx = [20x - 4x^2]_0^{1.5}$
> 3. Evaluate: $20(1.5) - 4(2.25) = 30 - 9 = 21$
> 4. The mill's profit is lower at $x^\circ$ (21 < 25) — but social welfare is higher
>
> **Here's what's really going on:** The steel mill loses 4 in profit from reduced pollution, but the fishery gains more than this in reduced damage.

$$\pi_S(x^\circ) = \int_0^{1.5} (20 - 8x)dx = [20x - 4x^2]_0^{1.5} = 30 - 9 = 21$$

> **Let's work through this step by step.** We start from the fishery damage function $v(x) = \beta - cx - \frac{d}{2}x^2$ with $c = 2$, $d = 4$:
> 1. At $x^* = 2.5$: $v(x^*) = \beta - 2(2.5) - 2(2.5)^2$
> 2. = $\beta - 5 - 2(6.25) = \beta - 5 - 12.5 = \beta - 17.5$
> 3. The fishery suffers damage of $17.5$ (relative to baseline $\beta$) at the unregulated equilibrium
>
> **Here's what's really going on:** The fishery's value is substantially reduced by the high pollution level $x^* = 2.5$.

$$v(x^*) = \beta - 2(2.5) - 2(2.5)^2 = \beta - 5 - 12.5 = \beta - 17.5$$

> **Let's work through this step by step.** We start from $v(x)$ evaluated at $x^\circ = 1.5$:
> 1. $v(x^\circ) = \beta - 2(1.5) - 2(1.5)^2$
> 2. = $\beta - 3 - 2(2.25) = \beta - 3 - 4.5 = \beta - 7.5$
> 3. Damage is only $7.5$ at the social optimum, compared to $17.5$ at $x^*$ — a reduction of 10
>
> **Here's what's really going on:** Reducing pollution from $x^* = 2.5$ to $x^\circ = 1.5$ reduces damage to the fishery by 10, while the steel mill loses only 4 in profit — net social gain of 6.

$$v(x^\circ) = \beta - 2(1.5) - 2(1.5)^2 = \beta - 3 - 4.5 = \beta - 7.5$$

Social welfare at unregulated equilibrium: $\pi_S(x^*) + v(x^*) = 25 + \beta - 17.5 = \beta + 7.5$
Social welfare at social optimum: $\pi_S(x^\circ) + v(x^\circ) = 21 + \beta - 7.5 = \beta + 13.5$

**Welfare gain from regulation:** $(\beta + 13.5) - (\beta + 7.5) = 6$
This is the DWL eliminated by the Pigouvian tax — the area between MB and MD curves from $x^\circ$ to $x^*$.

**Step 5: Coase bargaining verification**

- **Case A (fishery has rights):** Starting from $x=0$, the steel mill pays $T = \pi_S(x^\circ) - \pi_S(0) = 21 - 0 = 21$ for the right to pollute $x^\circ = 1.5$ units. Fishery's final utility: $v(x^\circ) + T = (\beta - 7.5) + 21 = \beta + 13.5$. Steel mill's final profit: $\pi_S(x^\circ) - T = 21 - 21 = 0$.
- **Case B (steel mill has rights):** Starting from $x^* = 2.5$, the fishery pays $T = \pi_S(x^*) - \pi_S(x^\circ) = 25 - 21 = 4$ to reduce pollution to $x^\circ$. Steel mill's final profit: $\pi_S(x^\circ) + T = 21 + 4 = 25$. Fishery's final utility: $v(x^\circ) - T = (\beta - 7.5) - 4 = \beta - 11.5$.

Both cases reach $x^\circ = 1.5$, but the steel mill's profit is $\{0, 25\}$ and the fishery's utility is $\{\beta + 13.5, \beta - 11.5\}$ respectively — only the distribution differs.

> **Munoz-Garcia Insight — Formal Coase Proof:**
>
> **Property rights assigned to the affected individual (fishery):** The fishery makes a take-it-or-leave-it offer: the steel mill pays $T$ for the right to pollute $x$ units. The mill accepts iff $\pi(x) - T \geq \pi(0)$ (participation constraint). The fishery then solves:
>
> > **Let's work through this step by step.** We start from the fishery's optimisation when it holds property rights:
> > 1. Fishery's utility = value from pollution $v(x)$ + initial wealth $w_F$ + transfer received $T$
> > 2. Constraint: steel mill accepts iff profit after payment $\pi(x) - T$ is at least as good as shutting down pollution $\pi(0)$
> > 3. → Maximise $v(x) + w_F + T$ subject to $\pi(x) - T \geq \pi(0)$
> >
> > **Here's what's really going on:** The fishery chooses both the pollution level $x$ and the transfer $T$ to maximise its own utility, subject to the mill's participation.
>
> > $$\max_{x \geq 0, T} v(x) + w_F + T \quad \text{s.t.} \quad \pi(x) - T \geq \pi(0)$$
>
> The constraint binds ($T = \pi(x) - \pi(0)$), so the problem reduces to:
>
> > **Let's work through this step by step.** We start from the constrained maximisation:
> > 1. The participation constraint binds because the fishery can always increase $T$ (its own utility) until the mill is just indifferent
> > 2. Set $\pi(x) - T = \pi(0)$, so $T = \pi(x) - \pi(0)$
> > 3. Substitute into objective: $v(x) + w_F + \pi(x) - \pi(0)$
> > 4. The constant $w_F - \pi(0)$ does not affect the choice of $x$
> >
> > **Here's what's really going on:** The transfer $T$ drops out as a transfer payment — only the efficiency condition for $x$ matters.
>
> > $$\max_{x \geq 0} v(x) + w_F + \pi(x) - \pi(0)$$
>
> FOC: $v'(x) + \pi'(x) = 0 \Rightarrow \pi'(x) = -v'(x)$
>
> **Property rights assigned to the polluter (steel mill):** The fishery pays $T$ for pollution reduction. Starting from $x^*$, the mill accepts iff $\pi(x) + T \geq \pi(x^*)$. The fishery solves:
>
> > **Let's work through this step by step.** We start from the fishery's optimisation when the steel mill holds property rights:
> > 1. Fishery's utility = value $v(x)$ + initial wealth $w_F$ − payment to mill $T$
> > 2. Constraint: mill accepts iff profit + payment $\pi(x) + T$ is at least as good as status quo $\pi(x^*)$
> > 3. → Maximise $v(x) + w_F - T$ subject to $\pi(x) + T \geq \pi(x^*)$
> >
> > **Here's what's really going on:** Here the fishery pays the mill for pollution reduction, so $T$ enters negatively in the objective.
>
> > $$\max_{x \geq 0, T} v(x) + w_F - T \quad \text{s.t.} \quad \pi(x) + T \geq \pi(x^*)$$
>
> The constraint binds ($T = \pi(x^*) - \pi(x)$), reducing to:
>
> > **Let's work through this step by step.** We start from the constrained maximisation:
> > 1. Bind the constraint: $\pi(x) + T = \pi(x^*)$, so $T = \pi(x^*) - \pi(x)$
> > 2. Substitute into objective: $v(x) + w_F - [\pi(x^*) - \pi(x)] = v(x) + w_F - \pi(x^*) + \pi(x)$
> > 3. The constant $w_F - \pi(x^*)$ does not affect the choice of $x$
> >
> > **Here's what's really going on:** Same structure as Case A — only the constant term differs, so the FOC for $x$ is identical.
>
> > $$\max_{x \geq 0} v(x) + w_F - \pi(x^*) + \pi(x)$$
>
> FOC: $v'(x) + \pi'(x) = 0 \Rightarrow \pi'(x) = -v'(x)$
>
> **Conclusion:** In both cases, the FOC yields $\pi'(x) = -v'(x)$, i.e., $-\partial C_S/\partial x = \partial C_F/\partial x$ at $x = x^\circ$. The bargaining outcome is the **same efficient pollution level** regardless of who holds the property rights. Only the **distribution of welfare** differs:
> - If the fishery has rights: steel mill pays $T = \pi(x^\circ) - \pi(0)$, so fishery enjoys $v(x^\circ) + T$
> - If the steel mill has rights: fishery pays $T = \pi(x^*) - \pi(x^\circ)$, so steel mill keeps $\pi(x^*)$
>
> (Munoz-Garcia, Ch.9, pp.658-661)

---

### 7.3 Consumption Externalities

**Why this matters for your exam:** Consumption externalities test whether you understand that preferences aren't independent. Expect short-form questions asking you to distinguish bandwagon, snob, and Veblen effects, and to explain why they violate the assumptions of the $2 \times 2 \times 2$ model.

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

**Why this matters for your exam:** The Samuelson condition, free-rider problem, and Tragedy of the Commons are core exam material. You'll need to derive the condition, explain why private provision fails, and discuss Lindahl prices as a solution.

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

> **Let's work through this step by step.** We start from the efficiency condition for a public good:
> 1. For a **private good**, efficiency requires $\text{MRS}^i_{G,X} = \text{MRT}_{G,X}$ for each consumer $i$ — each person's marginal willingness to pay equals the marginal cost
> 2. For a **public good**, the same unit of $G$ is consumed by everyone simultaneously (non-rivalry)
> 3. The social benefit of one more unit of $G$ is the **sum** of all individuals' marginal benefits: $\sum_i \text{MRS}^i_{G,X}$
> 4. Efficiency requires this sum to equal the marginal cost: $\sum_i \text{MRS}^i_{G,X} = \text{MRT}_{G,X}$
>
> **Here's what's really going on:** Unlike private goods where each individual can consume different amounts, everyone consumes the same $G$. The Samuelson condition says: sum everyone's marginal willingness to pay = marginal cost of provision. This is the key departure from private goods.

$$\sum_{i=1}^n \text{MRS}^i_{G,X} = \text{MRT}_{G,X}$$

The sum of individuals' marginal willingness to pay (MRS) must equal the marginal cost of production (MRT). This differs from private goods, where each individual's MRS = MRT individually.

**Free-Rider Problem — Formal Analysis (Munoz-Garcia, Ch.9, §9.12):**

Consider $I$ consumers with quasi-linear utility $u_i(x_i, G) = x_i + m_i \log G$, where $G = \sum_{i=1}^I g_i$ is total private contribution to the public good, $g_i$ is individual $i$'s contribution, and $x_i$ is private consumption. Each consumer has budget $w_i$, with the price of both goods normalised to 1, so $x_i = w_i - g_i$.

**Private provision (Nash equilibrium):** Each consumer $i$ chooses $g_i$ to maximise:

> **Let's work through this step by step.** We start from consumer $i$'s utility $u_i(x_i, G) = x_i + m_i \log G$ with budget $x_i = w_i - g_i$ and $G = g_i + G_{-i}$:
> 1. Substitute budget into utility: $u_i = (w_i - g_i) + m_i \log(g_i + G_{-i})$
> 2. Each consumer takes others' contributions $G_{-i} = \sum_{j \neq i} g_j$ as given (Nash assumption)
> 3. → Maximise $w_i - g_i + m_i \log(g_i + G_{-i})$ by choosing $g_i \geq 0$
>
> **Here's what's really going on:** You (as consumer $i$) balance the private cost of contributing (one unit of private consumption foregone) against the private benefit of a higher total public good $G$. The benefit depends on total provision, not just your own contribution — creating the free-rider incentive.

$$\max_{g_i \geq 0} w_i - g_i + m_i \log(g_i + G_{-i})$$

where $G_{-i} = \sum_{j \neq i} g_j$ is taken as given. FOC:

> **Let's work through this step by step.** We start from the maximand $f(g_i) = w_i - g_i + m_i \log(g_i + G_{-i})$:
> 1. Differentiate w.r.t. $g_i$: $f'(g_i) = -1 + \frac{m_i}{g_i + G_{-i}}$
> 2. Set = 0 (assuming interior solution $g_i > 0$): $-1 + \frac{m_i}{g_i + G_{-i}} = 0$
> 3. Solve: $\frac{m_i}{g_i + G_{-i}} = 1$, so $m_i = g_i + G_{-i}$
> 4. → $g_i(G_{-i}) = m_i - G_{-i}$
> 5. This is $i$'s best-response function: contribute $m_i$ minus what others contribute
>
> **Here's what's really going on:** The FOC says: contribute until marginal benefit $\frac{m_i}{G}$ equals marginal cost (1). The best-response function shows **perfect crowding out** — each dollar others contribute reduces your contribution by exactly one dollar.

$$-1 + \frac{m_i}{g_i + G_{-i}} = 0 \quad \Rightarrow \quad g_i(G_{-i}) = m_i - G_{-i}$$

This yields a best-response function: contribute up to $m_i$, but reduce one-for-one as others contribute more (perfect crowding out). The Nash equilibrium has contributions $g_i^*$ such that:
- Only the individual(s) with the highest $m_i$ contribute
- All others free-ride completely: $g_j^* = 0$ for $j \neq \arg\max m_i$

The equilibrium total provision is: $G^* = \max_i m_i$.

**Social optimum:** The social planner maximises:

> **Let's work through this step by step.** We start from total surplus $W = \sum_{i=1}^I [x_i + m_i \log G]$:
> 1. Using $x_i = w_i - g_i$ and $G = \sum_i g_i$: $W = \sum_i (w_i - g_i) + (\sum_i m_i) \log(\sum_i g_i)$
> 2. The social planner chooses the total $G$ directly, not individual contributions
> 3. Rewrite $W = \sum_i w_i - G + (\sum_i m_i) \log G$ since $\sum_i g_i = G$
> 4. → Maximise $\sum_i w_i - G + (\sum_i m_i) \log G$ by choosing $G$
>
> **Here's what's really going on:** The social planner internalises the benefit to **all** consumers, not just one. The social marginal benefit of one more unit of $G$ is $\sum_i m_i / G$, which sums across all beneficiaries.

$$\max_{G} \sum_{i=1}^I (w_i - g_i) + \left( \sum_{i=1}^I m_i \right) \log G$$

FOC: $-1 + (\sum_i m_i)/G = 0 \quad \Rightarrow \quad G^\circ = \sum_{i=1}^I m_i$

Since $\max_i m_i < \sum_i m_i$ (for $I > 1$), we have $G^* < G^\circ$ — **underprovision**.

**Effect of group size:** With $N$ symmetric individuals ($m_i = m$ for all $i$):

> **Let's work through this step by step.** We start from the symmetric case where all $N$ individuals have identical $m_i = m$:
> 1. Nash equilibrium: only the highest-$m$ individual contributes. With symmetry, $G^* = m$ (one person contributes $m$, the other $N-1$ contribute zero)
> 2. Social optimum: $G^\circ = \sum_i m_i = N \cdot m$ (summing across all $N$ individuals)
> 3. → Ratio $G^*/G^\circ = m/(Nm) = 1/N$
>
> **Here's what's really going on:** As group size $N$ grows, the free-rider problem becomes more severe. Your incentive to contribute shrinks because your private benefit ($m/G$) gets diluted across the group. In the limit $N \to \infty$, the private provision ratio approaches zero.

$$G^* = m \quad \text{(only one contributes, others free-ride)}$$

> **Let's work through this step by step.** The social optimum for $N$ symmetric agents:
> 1. Social planner maximises $\sum_i U_i = N \cdot w - G + N \cdot m \log G$
> 2. FOC: $-1 + N \cdot m / G = 0 \Rightarrow G = N \cdot m$
> 3. → $G^\circ = N \cdot m$
>
> **Here's what's really going on:** The social planner aggregates all $N$ individuals' marginal benefits, resulting in $N$ times the individual provision.

$$G^\circ = N \cdot m \quad \text{(social optimum)}$$

> **Let's work through this step by step.** Comparing private and social provision:
> 1. $G^* / G^\circ = m / (N \cdot m) = 1/N$
> 2. As $N \to \infty$, $1/N \to 0$
> 3. → The private market provides an infinitesimally small fraction of the efficient public good level in large groups
>
> **Here's what's really going on:** The free-rider problem grows more severe as the group size increases — your incentive to contribute diminishes because your share of the total benefit shrinks while you bear the full cost.

$$\frac{G^*}{G^\circ} = \frac{1}{N} \to 0 \text{ as } N \to \infty$$

The free-rider problem grows more severe as the group size increases — each individual's incentive to contribute diminishes because their share of the total benefit shrinks while they bear the full cost.

**Example (Munoz-Garcia, Example 9.6, p.697):** Two individuals $i = {1,2}$ with $m_1 \geq m_2$. Equilibrium contributions: $g_1^* = m_1 > 0$, $g_2^* = 0$. Total $G^* = m_1$. Social optimum: $G^\circ = m_1 + m_2$. Since $m_1 + m_2 > m_1$ (for $m_2 > 0$), the public good is under-provided. The individual with lower valuation free-rides completely on the contribution of the higher-valuation individual.

**Solutions to free-rider problem:**
1. **Government provision** (funded by compulsory taxation)
2. **Coase bargaining** (if few parties affected)
3. **Clubbing** (create excludability through technology or membership)
4. **Social norms / altruism**
5. **Lindahl prices** (personalised prices summing to marginal cost — see §7.4.4)

> **Munoz-Garcia Insight — Derivation of the Samuelson Condition:**
>
> Consider an economy with $I$ consumers, one public good $G$ (with cost $C(G)$), and a private good $x_i$ for each consumer. Each consumer $i$ has utility $U_i(x_i, G)$ where $G$ is nonrival.
>
> Step 1 — **Social planner's problem:** The planner maximises a weighted sum of utilities subject to the resource constraint:
>
> > **Let's work through this step by step.** We start from the social planner's resource allocation problem:
> > 1. Objective: maximise social welfare $W = \sum_{i=1}^I \alpha_i U_i(x_i, G)$ where $\alpha_i$ are welfare weights
> > 2. Constraint: total private consumption $\sum_i x_i$ plus cost of public good $C(G)$ cannot exceed aggregate endowment $\overline{W}$
> > 3. Form Lagrangian: $\mathcal{L} = \sum_i \alpha_i U_i(x_i, G) + \lambda(\overline{W} - \sum_i x_i - C(G))$
> > 4. → The Lagrangian with the constraint rearranged:
> >    $W = \sum_i \alpha_i U_i(x_i, G) + \lambda(\sum_i x_i + C(G) - \overline{W})$ where $\lambda$ is the Lagrange multiplier (marginal value of relaxing the resource constraint)
> >
> > **Here's what's really going on:** The social planner balances the marginal utility of allocating resources to private consumption versus public good provision, subject to the economy-wide resource constraint.
>
> > $$\max_{G, x_1, \ldots, x_I} W = \sum_{i=1}^I \alpha_i U_i(x_i, G) + \lambda \left( \sum_{i=1}^I x_i + C(G) - \overline{W} \right)$$
>
> Step 2 — **FOCs:**
>
> For each private good $x_i$:
>
> > **Let's work through this step by step.** We start from the Lagrangian and take the partial derivative w.r.t. $x_i$:
> > 1. $\partial W/\partial x_i = \alpha_i \cdot \partial U_i/\partial x_i + \lambda \cdot 1 = 0$
> > 2. → $\alpha_i \cdot \partial U_i/\partial x_i = -\lambda$
> > 3. The Lagrange multiplier $\lambda$ is negative (since increasing the resource constraint reduces the objective), so $-\lambda > 0$ represents the shadow value of resources
> >
> > **Here's what's really going on:** At the optimum, each consumer's weighted marginal utility of private consumption equals the common shadow price of resources $(-\lambda)$.
>
> > $$\frac{\partial W}{\partial x_i} = \alpha_i \frac{\partial U_i}{\partial x_i} + \lambda = 0 \quad \Rightarrow \quad \alpha_i \frac{\partial U_i}{\partial x_i} = -\lambda$$
>
> For the public good $G$:
>
> > **Let's work through this step by step.** We start from the Lagrangian and take the partial derivative w.r.t. $G$:
> > 1. $\partial W/\partial G = \sum_{i=1}^I \alpha_i \cdot \partial U_i/\partial G + \lambda \cdot C'(G) = 0$
> > 2. → $\sum_{i=1}^I \alpha_i \cdot \partial U_i/\partial G = -\lambda \cdot C'(G)$
> > 3. Note the **sum** over $i$ — because $G$ is non-rival, one unit of $G$ enters every consumer's utility
> >
> > **Here's what's really going on:** The sum of weighted marginal utilities from the public good equals the shadow cost of the resources used to produce it.
>
> > $$\frac{\partial W}{\partial G} = \sum_{i=1}^I \alpha_i \frac{\partial U_i}{\partial G} + \lambda C'(G) = 0 \quad \Rightarrow \quad \sum_{i=1}^I \alpha_i \frac{\partial U_i}{\partial G} = -\lambda C'(G)$$
>
> Step 3 — **Combine the FOCs:** Divide the public good FOC by the private good FOC for each consumer:
>
> From the private good FOC: $\alpha_i = -\lambda / (\partial U_i/\partial x_i)$
>
> Substituting into the public good FOC:
>
> > **Let's work through this step by step.** We substitute $\alpha_i = -\lambda / (\partial U_i/\partial x_i)$ into the public good FOC:
> > 1. $\sum_{i=1}^I \left( -\frac{\lambda}{\partial U_i/\partial x_i} \right) \frac{\partial U_i}{\partial G} = -\lambda C'(G)$
> > 2. The $-\lambda$ on both sides cancels (assuming $\lambda \neq 0$, which holds at an interior optimum)
> >
> > **Here's what's really going on:** The substitution eliminates the unobservable welfare weights $\alpha_i$, yielding a condition that depends only on observable marginal rates of substitution.
>
> > $$\sum_{i=1}^I \left( -\frac{\lambda}{\partial U_i/\partial x_i} \right) \frac{\partial U_i}{\partial G} = -\lambda C'(G)$$
>
> Cancelling $-\lambda$ (which is nonzero):
>
> > **Let's work through this step by step.** We cancel $-\lambda$ from both sides:
> > 1. $\sum_{i=1}^I \frac{\partial U_i/\partial G}{\partial U_i/\partial x_i} = C'(G)$
> > 2. By definition, $\text{MRS}^i_{G,x} = (\partial U_i/\partial G) / (\partial U_i/\partial x_i)$
> > 3. → $\sum_{i=1}^I \text{MRS}^i_{G,x} = C'(G)$
> >
> > **Here's what's really going on:** The welfare weights $\alpha_i$ and the Lagrange multiplier $\lambda$ cancel out, leaving a condition that depends only on preferences and technology.
>
> > $$\sum_{i=1}^I \frac{\partial U_i/\partial G}{\partial U_i/\partial x_i} = C'(G)$$
>
> Step 4 — **Samuelson rule:**
>
> > **Let's work through this step by step.** We start from $\sum_i \text{MRS}^i_{G,x} = C'(G)$:
> > 1. $\text{MRS}^i_{G,x}$ is consumer $i$'s marginal willingness to pay for $G$ in units of $x$
> > 2. $C'(G)$ is the marginal cost of $G$, which equals the marginal rate of transformation $\text{MRT}_{G,x}$ (how many units of $x$ must be sacrificed to produce one more $G$)
> > 3. → The Samuelson rule: $\sum_i \text{MRS}^i_{G,x} = \text{MC}(G) = \text{MRT}_{G,x}$
> >
> > **Here's what's really going on:** The sum of individual marginal rates of substitution (willingness to pay for $G$ in terms of $x$) equals the marginal cost of providing $G$. For private goods, each individual's MRS separately equals MRT; for public goods, it is the **sum** of MRS that equals MRT due to nonrivalry — the same unit of $G$ is consumed by everyone simultaneously.
>
> > $$\boxed{\sum_{i=1}^I \text{MRS}^i_{G,x} = \text{MC}(G) = \text{MRT}_{G,x}}$$
>
> (Munoz-Garcia, Ch.9, §9.11, pp.692-693)

#### 7.4.3 Common Resources & The Tragedy of the Commons

**Why this matters for your exam:** The Tragedy of the Commons is a classic exam short-answer question. Link it to the wedge between private and social marginal cost — each user bears only $1/n$ of the cost but gets the full benefit.

**Tragedy of the Commons (Hardin, 1968):** A shared resource is over-exploited when each user acts independently according to self-interest, contrary to the common good.

**Formal mechanism (Munoz-Garcia, SS8.3, p.552):**

Each user $i$ chooses extraction $q_i$ to maximise private benefit $B_i(q_i)$, while the cost of resource depletion $C(\sum_j q_j)$ is shared by all.

**Private optimum (Nash equilibrium):**

> **Let's work through this step by step.** We start from each user's private optimisation:
> 1. User $i$ maximises $\pi_i = B_i(q_i) - \frac{q_i}{Q} C(Q)$ where $Q = \sum_j q_j$ is total extraction
> 2. The user bears only their **share** $q_i/Q$ of the total cost $C(Q)$, ignoring the cost imposed on others
> 3. FOC: $B_i'(q_i^*) - \frac{\partial}{\partial q_i}\left(\frac{q_i}{Q}C(Q)\right) = 0$
> 4. In equilibrium with symmetric users, this simplifies to $B_i'(q_i^*) = C'(Q^*)/n + \text{(cost-sharing term)}$
> 5. For large $n$, the dominant effect is $B_i'(q_i^*) \approx C'(Q^*)/n$
>
> **Here's what's really going on:** Each user equates marginal private benefit to just their **share** of marginal cost ($C'/n$), not the full marginal social cost ($C'$). This is the fundamental wedge driving over-exploitation.

$$B_i'(q_i^*) = C'(Q^*)$$

Each user equates marginal private benefit to marginal private cost, ignoring the external cost on others.

**Social optimum:**

> **Let's work through this step by step.** We take the social planner's perspective (maximising total surplus):
> 1. Total surplus = $\sum_i B_i(q_i) - C(Q) = n \cdot B(q_i) - C(n q_i)$ (symmetric users)
> 2. FOC w.r.t. $q_i$: $B_i'(q_i^\circ) - C'(Q^\circ) \cdot \partial Q/\partial q_i = 0$
> 3. Since $\partial Q/\partial q_i = 1$ (increasing own extraction increases total extraction one-for-one):
> 4. → $B_i'(q_i^\circ) = C'(Q^\circ)$
> 5. Alternatively, we can express this as a sum over all users: $B_i'(q_i^\circ) = \sum_j C'(Q^\circ)$
>
> **Here's what's really going on:** The social planner accounts for the full marginal cost $C'(Q)$ imposed on the entire resource, not just each user's share. The social FOC applies to **all** users simultaneously.

$$B_i'(q_i^\circ) = \sum_j C'(Q^\circ) = \text{MSC}$$

The sum of marginal costs across all users is the marginal social cost.

Since $C'(Q^*) < \sum_j C'(Q^*)$, each user extracts too much: $q_i^* > q_i^\circ$ and $Q^* > Q^\circ$.

**Formal analysis with $n$ symmetric users (Munoz-Garcia, Ch.9):**

Consider $n$ symmetric users, each choosing extraction $q_i \geq 0$. Let total extraction be $Q = \sum_{j=1}^n q_j$. Each user receives benefit $B(q_i)$ (increasing, concave) and shares the total cost $C(Q)$ (increasing, convex).

**Private (Nash) equilibrium:** Each user $i$ chooses $q_i$ to maximise:

> **Let's work through this step by step.** We start from user $i$'s net benefit:
> 1. Benefit = $B(q_i)$ — increasing in own extraction
> 2. Cost share = $\frac{q_i}{Q} C(Q)$ — user pays fraction of total cost proportional to their share of total extraction
> 3. → $\pi_i = B(q_i) - \frac{q_i}{Q} C(Q)$
> 4. In a Nash equilibrium, each user chooses $q_i$ taking others' extraction $Q_{-i}$ as given
>
> **Here's what's really going on:** Your cost depends on your share of total extraction. If you extract more, you bear a larger share of the total cost — but you also push up total cost $C(Q)$, which you share with others.

$$\pi_i = B(q_i) - \frac{q_i}{Q} C(Q)$$

Taking FOC with respect to $q_i$, treating $Q_{-i}$ as given:

> **Let's work through this step by step.** We differentiate $\pi_i = B(q_i) - \frac{q_i}{Q}C(Q)$ w.r.t. $q_i$:
> 1. First term: $B'(q_i)$
> 2. Second term uses quotient rule: $\frac{\partial}{\partial q_i} \left( \frac{q_i}{Q} C(Q) \right)$
> 3. = $\frac{1 \cdot Q - q_i \cdot 1}{Q^2} C(Q) + \frac{q_i}{Q} \cdot C'(Q) \cdot 1$
> 4. = $\frac{Q - q_i}{Q^2} C(Q) + \frac{q_i}{Q} C'(Q)$
> 5. Set FOC = 0: $B'(q_i^*) = \frac{Q^* - q_i^*}{(Q^*)^2} C(Q^*) + \frac{q_i^*}{Q^*} C'(Q^*)$
> 6. The RHS is user $i$'s **private marginal cost** of extraction
>
> **Here's what's really going on:** The private marginal cost has two components: (i) the change in cost share from altering total extraction $Q$, and (ii) the direct effect of own extraction on total cost. Both are fractions of the true social cost.

$$B'(q_i^*) - \underbrace{\left[ \frac{Q^* - q_i^*}{(Q^*)^2} C(Q^*) + \frac{q_i^*}{Q^*} C'(Q^*) \right]}_{\text{private marginal cost}} = 0$$

In symmetric equilibrium ($q_i^* = q^*$ for all $i$, so $Q^* = nq^*$):

> **Let's work through this step by step.** We impose symmetry ($q_i^* = q^*$, $Q^* = n q^*$):
> 1. $\frac{Q^* - q_i^*}{(Q^*)^2} C(Q^*) = \frac{nq^* - q^*}{(nq^*)^2} C(nq^*) = \frac{(n-1)q^*}{n^2 (q^*)^2} C(nq^*) = \frac{n-1}{n^2 q^*} C(nq^*)$
> 2. $\frac{q_i^*}{Q^*} C'(Q^*) = \frac{q^*}{n q^*} C'(n q^*) = \frac{C'(nq^*)}{n}$
> 3. → $B'(q^*) = \frac{C'(nq^*)}{n} + \frac{n-1}{n^2 q^*} C(nq^*)$
>
> **Here's what's really going on:** In symmetric equilibrium, your private marginal cost consists of $1/n$ of the marginal cost $C'(nq^*)$ plus a term reflecting the infra-marginal cost sharing.

$$B'(q^*) = \frac{C'(nq^*)}{n} + \frac{n-1}{n^2 q^*} C(nq^*)$$

For large $n$, the dominant term is:

> **Let's work through this step by step.** For large $n$, we approximate the symmetric equilibrium FOC:
> 1. $\frac{C'(nq^*)}{n}$ becomes very small as $n$ grows
> 2. $\frac{n-1}{n^2 q^*} C(nq^*) \approx \frac{1}{n} \cdot \frac{C(nq^*)}{n q^*}$ which is also small for large $n$ if average cost is bounded
> 3. The dominant effect: $B'(q^*) \approx \frac{C'(Q^*)}{n}$
> 4. While social optimum requires $B'(q^\circ) = C'(Q^\circ)$
> 5. For linear cost $C(Q) = cQ$, we get $B'(q^*) = c/n$ vs. $B'(q^\circ) = c$
>
> **Here's what's really going on:** Each user equates private MB to just $1/n$ of the marginal social cost. The wedge grows linearly with $n$ — more users means worse over-exploitation. This is the **$n$-person prisoner's dilemma** of the commons.

$$\boxed{B'(q^*) \approx \frac{C'(Q^*)}{n}}$$

**Social optimum:** Maximise total surplus $nB(q_i) - C(nq_i)$:

> **Let's work through this step by step.** We start from the social planner's problem with symmetric users:
> 1. Total surplus = $\sum_{i=1}^n [B(q_i)] - C(\sum_{i=1}^n q_i)$
> 2. With symmetry: $TS = n \cdot B(q_i) - C(n \cdot q_i)$
> 3. The planner chooses $q_1, ..., q_n$. FOC for $q_i$:
> 4. $\partial TS/\partial q_i = B'(q_i) - C'(Q) \cdot 1 = 0$ (since $\partial Q/\partial q_i = 1$)
> 5. With symmetry: $B'(q^\circ) = C'(n \cdot q^\circ) = C'(Q^\circ)$
>
> **Here's what's really going on:** The social planner recognises that increasing $q_i$ increases total extraction one-for-one, so the full marginal cost $C'(Q)$ must be considered — not just $1/n$ of it.

$$B'(q^\circ) = C'(n q^\circ) = C'(Q^\circ)$$

**Comparison:**

> **Let's work through this step by step.** We take the ratio of private to social FOCs:
> 1. Private: $B'(q^*) \approx C'(Q^*)/n$
> 2. Social: $B'(q^\circ) = C'(Q^\circ)$
> 3. → $\frac{B'(q^*)}{B'(q^\circ)} = \frac{C'(Q^*)/n}{C'(Q^\circ)}$
> 4. Assuming similar $C'$, the ratio $\approx 1/n$, implying $q^* \gg q^\circ$ (since $B$ is concave, lower $B'$ means higher $q$)
>
> **Here's what's really going on:** The ratio shows the dramatic gap between private and social incentives. Your private marginal benefit at equilibrium is only $1/n$ of the efficient level, meaning extraction is far too high.

$$\frac{B'(q^*)}{B'(q^\circ)} = \frac{C'(Q^*)/n}{C'(Q^\circ)}$$

For linear cost $C(Q) = cQ$, this simplifies to:

> **Let's work through this step by step.** With linear cost $C(Q) = cQ$:
> 1. $C'(Q) = c$ for any $Q$ (constant marginal cost)
> 2. Private FOC: $B'(q^*) = c/n$
> 3. Social FOC: $B'(q^\circ) = c$
> 4. With concave benefit (e.g., $B(q) = aq - bq^2/2$), $B'(q) = a - bq$
> 5. Then $a - bq^* = c/n$ and $a - bq^\circ = c$
> 6. → $q^* = (a - c/n)/b$ and $q^\circ = (a - c)/b$
> 7. For $n = 2$: $q^*/q^\circ = (a - c/2)/(a - c)$
>
> **Here's what's really going on:** Each user equates private MB to $c/n$ rather than $c$, leading to **over-extraction by a factor of approximately $n:1$** relative to the social optimum. The wedge between private and social marginal cost grows with $n$ — the more users, the worse the over-exploitation.

$$B'(q^*) = \frac{c}{n} \quad \text{vs.} \quad B'(q^\circ) = c$$

Each user equates private MB to $c/n$ rather than $c$, leading to **over-extraction by a factor of approximately $n:1$** relative to the social optimum. The wedge between private and social marginal cost grows with $n$ — the more users, the worse the over-exploitation.

**Example — Fishing commons:** A lake open to all fishers. Each fisher catches as many fish as possible before others do. Individual rationality: "If I don't catch them, someone else will." Result: overfishing, stock collapse, everyone loses.

**Solutions:**
1. **Private property rights** (assign fishing quotas or lake ownership — Coase)
2. **Pigouvian tax** (tax per unit extracted equal to marginal social damage)
3. **Regulation** (catch limits, seasonal closures, tradable permits)

**Exam Tip:** Link the Tragedy to negative production externalities — each user's extraction imposes a cost on all others. The wedge between private and social marginal cost generates over-exploitation.

#### 7.4.4 Lindahl Equilibrium (Munoz-Garcia, Ch.9, §9.15)

**Why this matters for your exam:** Lindahl is the public-goods analogue of competitive equilibrium for private goods. Expect questions asking you to derive personalised prices and show they satisfy the Samuelson condition.

**Problem:** Private provision of public goods leads to underprovision ($G^* < G^\circ$) due to free-riding. Government solutions require information the planner may not have. Lindahl (1919) proposed a **market-based solution** using personalised prices.

**Idea:** Create a separate market for each individual's consumption of the public good, with a personalised price $p_i$ for individual $i$. The sum of personalised prices covers the marginal cost.

**Formalisation (Munoz-Garcia, pp.704-707):**

**Consumer $i$'s problem:** Each consumer $i$ chooses $g_i$ facing personalised price $p_i^{**}$:

> **Let's work through this step by step.** We start from consumer $i$'s utility maximisation with personalised price $p_i$:
> 1. Utility: $v_i(g_i) + w_i$ where $v_i$ is the benefit from public good consumption and $w_i$ is numeraire wealth
> 2. Budget constraint: $w_i - p_i g_i$ for private consumption
> 3. Net utility: $v_i(g_i) + w_i - p_i g_i$
> 4. FOC: $v_i'(g_i^{**}) - p_i^{**} \leq 0$, with equality if $g_i^{**} > 0$
> 5. → $p_i^{**} = v_i'(g_i^{**})$ — the personalised price equals the marginal benefit at the chosen quantity
>
> **Here's what's really going on:** Unlike a standard market where all consumers face the same price, here each consumer receives a **personalised price** equal to their marginal willingness to pay. High-valuation consumers pay more per unit.

$$\max_{g_i \geq 0} v_i(g_i) + w_i - p_i^{**} g_i$$

FOC: $v_i'(g_i^{**}) - p_i^{**} \leq 0$, equality if $g_i^{**} > 0$. So $p_i^{**} = v_i'(g_i^{**})$.

**Firm's problem:** The firm produces a bundle of $I$ personalised goods:

> **Let's work through this step by step.** We start from the firm's profit maximisation with personalised prices:
> 1. The firm produces $g$ units of the public good and sells a "bundle" to all $I$ consumers
> 2. Revenue: $\sum_{i=1}^I p_i^{**} \cdot g$ (each consumer $i$ pays $p_i^{**}$ per unit of $g$)
> 3. Cost: $C(g)$
> 4. Profit: $\sum_{i=1}^I p_i^{**} g - C(g)$
> 5. FOC: $\sum_{i=1}^I p_i^{**} - C'(g^{**}) \leq 0$, equality if $g^{**} > 0$
>
> **Here's what's really going on:** The firm supplies the public good until the **sum** of personalised prices equals marginal cost. This is the supply-side analogue of the Samuelson condition.

$$\max_{g \geq 0} \sum_{i=1}^I p_i^{**} g - C(g)$$

FOC: $\sum_{i=1}^I p_i^{**} - C'(g^{**}) \leq 0$, equality if $g^{**} > 0$.

**Equilibrium condition:** Combining the consumer and firm FOCs:

> **Let's work through this step by step.** We combine consumer and firm equilibrium conditions:
> 1. From consumer's FOC: $p_i^{**} = v_i'(g^{**})$ for each $i$
> 2. From firm's FOC: $\sum_{i=1}^I p_i^{**} = C'(g^{**})$
> 3. Substitute consumer FOCs into firm FOC: $\sum_{i=1}^I v_i'(g^{**}) = C'(g^{**})$
> 4. Note $\text{MRS}_i = v_i'(g)$ in this quasi-linear setup, and $\text{MRT} = C'(g)$
> 5. → $\sum_{i=1}^I \text{MRS}_i = \text{MRT}$ — the Samuelson condition!
>
> **Here's what's really going on:** The Lindahl equilibrium achieves the efficient level of public good provision $g^{**} = g^\circ$ through a decentralised price mechanism. Each individual pays their marginal willingness to pay, and the sum covers marginal cost. No one free-rides because the price is tailored to their valuation.

$$\sum_{i=1}^I v_i'(g^{**}) = \sum_{i=1}^I p_i^{**} = C'(g^{**})$$

This is exactly the **Samuelson condition** $\sum_i \text{MRS}_i = \text{MRT}$! Thus $g^{**} = g^\circ$ — the Lindahl equilibrium achieves the efficient level of public good provision.

**Here's what's really going on:** Each individual pays a personalised price $p_i$ equal to their marginal willingness to pay (MRS). The sum of these payments exactly covers the marginal cost. No one free-rides because the price is tailored to their valuation.

**Example (Munoz-Garcia, Example 9.8, p.706):** Three graduate students (Eric, Chris, Matt) buying a microwave (public good). Utility: $u_i = \ln x_i + m_i \ln G$ where $x_i$ is private consumption (numeraire) and $G$ is the microwave. With prices normalised and wealth = 1, the Lindahl prices are:

> **Let's work through this step by step.** We derive Lindahl pricing for quasi-linear utility $u_i = \ln x_i + m_i \ln G$:
> 1. Budget: $x_i + p_i G = 1$ (wealth normalised to 1, price of $x$ = 1)
> 2. Substitute $x_i = 1 - p_i G$: $u_i = \ln(1 - p_i G) + m_i \ln G$
> 3. FOC w.r.t. $G$: $\frac{-p_i}{1 - p_i G} + \frac{m_i}{G} = 0 \Rightarrow \frac{m_i}{G} = \frac{p_i}{1 - p_i G}$
> 4. → $m_i(1 - p_i G) = p_i G \Rightarrow m_i = p_i G(1 + m_i)$
> 5. → $p_i = \frac{m_i}{G(1+m_i)}$
> 6. Equilibrium: $\sum_i p_i = C'(G) = 1$ (marginal cost of microwave is 1)
> 7. So $\sum_i \frac{m_i}{G(1+m_i)} = 1 \Rightarrow G = \sum_i \frac{m_i}{1+m_i}$
> 8. → $p_i^* = \frac{m_i/(1+m_i)}{\sum_j m_j/(1+m_j)}$
> 9. For $m_E = 1$, $m_C = m_M = 0.6$: $p_E = 0.4$, $p_C = p_M = 0.3$, $G = 1.25$
>
> **Here's what's really going on:** Each student pays according to their marginal willingness to pay ($m_i$). Eric values the microwave most ($m=1$) and pays the highest share (0.4). Chris and Matt value it less ($m=0.6$) and pay less (0.3 each). The sum (1.0) exactly covers the cost.

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

**Why this matters for your exam:** This section ties everything back to general equilibrium. It explains exactly which Pareto conditions break and why — the answer to the "why does the First Welfare Theorem fail?" question on every exam.

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

**Why this matters for your exam:** These are real exam questions — the best way to prepare is to practise the exact style and depth expected.

#### Question 7(a) — 46 Final, Part C: Tragedy of the Commons [3 marks]

**Q:** What do we mean by Tragedy of Commons? Explain with an example.

**A:** The Tragedy of the Commons (Hardin, 1968) describes a situation where a shared resource is over-exploited because each individual, acting rationally in their own self-interest, depletes the resource to the detriment of the entire community. The fundamental cause is the absence of exclusive property rights — each user captures the full private benefit of their extraction but bears only a fraction of the social cost.

**Formal mechanism:** For symmetric users $i=1,\dots,n$, each chooses extraction $q_i$ to maximise $B_i(q_i) - C(Q)/n$ where $Q = \sum q_i$ is total extraction. The private optimum sets $B_i' = C'/n$ while the social optimum requires $B_i' = C'$. Since $C'/n < C'$, the private equilibrium involves over-extraction.

**Example:** A grazing pasture open to all herders. Each herder adds one more animal, capturing the full market value of that animal but sharing the cost of overgrazing with all other herders. Individual rationality leads to overgrazing, pasture degradation, and reduced welfare for all.

**Solutions:** Private property rights (assign ownership), Pigouvian tax (tax per animal equal to marginal damage), or regulatory quotas.

---

#### Question 7(b) — 46 Final, Part C: Pollution Externalities (Steel-Fishery) [11 marks]

**Q:** Two firms — Firm A (upstream steel mill, produces pollution $x$) and Firm B (downstream fishery, harmed by pollution). Show the private and social costs and production levels under: (i) individual profit maximisation, (ii) joint profit maximisation, and (iii) different property rights.

**A:** This is the canonical steel-fishery model. See §7.2 for the full treatment.

**(i) Individual profit maximisation (unregulated):**

Let $C_A(q_A, x)$ be Firm A's cost function ($\partial C_A/\partial x < 0$ — pollution reduces costs) and $C_B(q_B, x)$ be Firm B's cost function ($\partial C_B/\partial x > 0$ — pollution raises costs).

Firm A's FOC for pollution: $-\partial C_A/\partial x = 0$. Firm A chooses pollution until the marginal private benefit ($-\partial C_A/\partial x$) is zero, **ignoring the damage** $-\partial C_B/\partial x > 0$ imposed on Firm B. Result: $x^*$ is too high — excessive pollution.

Firm A's FOC for output: $P_A = MC_A$. Firm B's FOC: $P_B = MC_B$.

**(ii) Joint profit maximisation (merger):**

Joint profit: $\Pi_J = P_A q_A - C_A(q_A, x) + P_B q_B - C_B(q_B, x)$.

FOC for pollution:
$-\partial C_A/\partial x - \partial C_B/\partial x = 0 \Rightarrow -\partial C_A/\partial x = \partial C_B/\partial x$.

The social optimum equates the marginal benefit of pollution (cost saving to A) with the marginal damage (cost increase to B). This yields $x^\circ < x^*$ — less pollution.

**(iii) Different property rights (Coase Theorem):**

- **If B has right to clean water:** A must pay B for the right to pollute. They bargain to $x^\circ$ where $-\partial C_A/\partial x = \partial C_B/\partial x$. A pays compensation per unit between $\partial C_B/\partial x$ and $-\partial C_A/\partial x$.
- **If A has right to pollute:** B must pay A to reduce pollution. They bargain to the **same** $x^\circ$. B pays A per unit of reduction between $-\partial C_A/\partial x$ and $\partial C_B/\partial x$.
- **Coase Theorem:** The efficient pollution level is identical regardless of the initial rights assignment. Only the distribution of welfare (who pays whom) differs.

**Conclusion:** The unregulated equilibrium produces excessive pollution ($x^* > x^\circ$) with deadweight loss equal to the area between marginal benefit and marginal damage curves over $[x^\circ, x^*]$. Joint profit maximisation (or Coase bargaining with zero transaction costs) restores efficiency.

---

#### Question 2(b) — 46 Final, Part A: External Economies & Diseconomies (Tax/Subsidy) [7 marks]

**Q:** Firm 1 experiences external economies and Firm 2 experiences external diseconomies. Both sell in a competitive market at $p_1 = p_2 = 15$. Cost functions:

> **Let's work through this step by step.** We start from the cost functions that capture cross-firm externalities:
> 1. Firm 1's cost: $C_1 = 0.1q_1^2 + 5q_1 - 0.1q_2^2$ — the term $-0.1q_2^2$ reduces Firm 1's cost when Firm 2 produces more (positive externality)
> 2. Firm 2's cost: $C_2 = 0.2q_2^2 + 7q_2 + 0.025q_1^2$ — the term $+0.025q_1^2$ raises Firm 2's cost when Firm 1 produces more (negative externality)
>
> **Here's what's really going on:** The cost functions are designed so that each firm's cost depends partly on the other's output. Firm 2's production helps Firm 1 (external economy), but Firm 1's production hurts Firm 2 (external diseconomy).

$$C_1 = 0.1q_1^2 + 5q_1 - 0.1q_2^2$$

> **Let's work through this step by step.** We start from the general quadratic cost form with cross-firm externality:
> 1. Firm 2's cost: $C_2 = 0.2q_2^2 + 7q_2 + 0.025q_1^2$
> 2. The $0.025q_1^2$ term: when Firm 1 produces more, Firm 2's cost increases — a **negative production externality** (external diseconomy)
> 3. The $0.2q_2^2$ term: convex own-cost, so $MC_2 = 0.4q_2 + 7$ (increasing in own output)
>
> **Here's what's really going on:** Firm 2 is doubly burdened — its own costs rise with output, and Firm 1's production makes things worse. This asymmetry (Firm 2 helps Firm 1, but Firm 1 hurts Firm 2) is the key to the policy design.

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

> **Let's work through this step by step.** We start from the principle that the Pigouvian tax should equal the marginal external damage at the social optimum:
> 1. External damage from Firm 1 on Firm 2: $\partial C_2/\partial q_1 = 0.05 q_1$
> 2. Evaluate at social optimum $q_1^\circ = 40$: $0.05 \times 40 = 2$
> 3. → $t_1 = 2$ per unit of $q_1$
> 4. Verification: Firm 1's new FOC with tax: $15 - (0.2q_1 + 5) - 2 = 0 \Rightarrow 8 - 0.2q_1 = 0 \Rightarrow q_1 = 40$ ✓
>
> **Here's what's really going on:** The tax forces Firm 1 to internalise the cost its output imposes on Firm 2. At $t_1 = 2$, Firm 1's private optimum coincides with the social optimum.

$$t_1 = \left.\frac{\partial C_2}{\partial q_1}\right|_{q_1^\circ} = 0.05 \times 40 = 2 \text{ per unit of } q_1$$

Firm 1's new FOC with tax: $15 - \partial C_1/\partial q_1 - t_1 = 15 - (0.2q_1 + 5) - 2 = 0$
$15 - 0.2q_1 - 5 - 2 = 0 \Rightarrow 8 - 0.2q_1 = 0 \Rightarrow q_1 = 40$ ✓

For Firm 2, the social marginal benefit of increasing $q_2$ includes the **external economy** for Firm 1: $-\partial C_1/\partial q_2 = 0.2q_2$. At $q_2^\circ = 40$, this equals $0.2(40) = 8$.

Firm 2 does not receive this benefit. We provide a **Pigouvian subsidy** to Firm 2:

> **Let's work through this step by step.** We start from the principle that the Pigouvian subsidy should equal the marginal external benefit at the social optimum:
> 1. External benefit from Firm 2 on Firm 1 (reduction in Firm 1's cost): $-\partial C_1/\partial q_2 = 0.2 q_2$
> 2. Evaluate at social optimum $q_2^\circ = 40$: $0.2 \times 40 = 8$
> 3. → $s_2 = 8$ per unit of $q_2$
> 4. Verification: Firm 2's new FOC with subsidy: $15 - (0.4q_2 + 7) + 8 = 0 \Rightarrow 16 - 0.4q_2 = 0 \Rightarrow q_2 = 40$ ✓
>
> **Here's what's really going on:** The subsidy rewards Firm 2 for the positive spillover its production generates for Firm 1. At $s_2 = 8$, Firm 2's private optimum aligns with the social optimum.

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

### Key Formulas — Externalities & Public Goods

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

**Why this matters for your exam:** Asymmetric information is one of the most heavily tested topics in information economics. Examiners love Akerlof's "lemons" model — it shows how markets can collapse in a surprising, non-obvious way. You will need to compute expected values, trace the unraveling logic step by step, and explain why high-quality goods vanish from the market.

**Definition:** Asymmetric information arises when one party to a transaction has superior information about a relevant characteristic (Akerlof, 1970; Munoz-Garcia, SS8.4, p.564).

**Types of asymmetric information problems:**

| Problem | Information | Timing | Example |
|---------|------------|--------|---------|
| **Adverse selection** | Hidden characteristic | Before transaction | Used cars, insurance |
| **Moral hazard** | Hidden action | After transaction | Careless driving after insuring |
| **Principal-agent** | Hidden effort | During relationship | Manager-shareholder conflicts |

#### 8.1.1 The Market for "Lemons" (Akerlof, 1970)

**Why this matters for your exam:** This is the classic example of adverse selection. You'll be expected to reproduce the arithmetic and explain how asymmetric information drives high-quality goods out of the market.

**Setup:**
- Used car market: two types — "peaches" (high quality) and "lemons" (low quality).
- Sellers know true quality; you (as a buyer) cannot distinguish types ex ante.
- 50% peaches (value $10,000 to you, $8,000 to the seller).
- 50% lemons (value $5,000 to you, $3,000 to the seller).

**Full information benchmark:** Two separate markets clear — peaches trade at $8,000-$10,000; lemons at $3,000-$5,000. You get what you pay for.

**Asymmetric information:** You know only the **average** quality. Your willingness to pay:

> **Let's work through this step by step.** We start with the fact that you cannot observe individual car quality:
> 1. You know the population distribution: 50% peaches ($10,000 value) and 50% lemons ($5,000 value).
> 2. Since you cannot distinguish types ex ante, you form an expected value: $E[V] = \sum p_i \cdot V_i$.
> 3. Substituting: $E[V] = 0.5 \times 10,000 + 0.5 \times 5,000$.
> 4. → Final form: $E[V] = 7,500$.
>
> **Here's what's really going on:** Under asymmetric information, your willingness to pay equals the probability-weighted average of possible values. This is the rational response when quality is unobservable — but it systematically undervalues high-quality goods and overvalues low-quality ones, creating the conditions for adverse selection.

$$E[V] = 0.5 \times 10,000 + 0.5 \times 5,000 = 7,500$$

**Adverse selection mechanism:**
1. Market price = $7,500$ (reflecting average quality).
2. Peach owners value their cars at $8,000$ (reservation price). Since $7,500 < 8,000$, they **exit** the market.
3. Only lemons remain. You update your expectation: expected value = $5,000$.
4. Lemon market clears at ~$4,000$ (between $3,000$ and $5,000$).

**Result:** High-quality goods disappear from the market — **adverse selection** drives out the good.

**Complete market collapse:** If the proportion of lemons is high enough that $E[V]$ falls below the reservation price of even lemon sellers, the market collapses entirely — no trade occurs.

**General condition for market collapse:**

> **Let's work through this step by step.** We start from the adverse selection mechanism:
> 1. Trade occurs only if your willingness to pay (the expected value $E[V]$) exceeds the seller's reservation price.
> 2. If $E[V]$ is below the reservation price of the highest-quality sellers, they exit.
> 3. This lowers average quality, further reducing $E[V]$, causing more exits.
> 4. The market collapses entirely when $E[V]$ falls below the reservation price of *all* sellers — i.e., when even the lowest-quality seller refuses to trade.
> 5. → Final form: $E[V] < \max\{\text{reservation price of sellers}\}$.
>
> **Here's what's really going on:** The market collapses when the expected value — the maximum any buyer will pay — is less than what the most optimistic seller requires to part with their good. No mutually beneficial trade exists under these conditions.

$$E[V] < \max\{\text{reservation price of sellers}\}$$

**Solutions:**
1. **Signalling** — informed party reveals type (warranties, certifications, education)
2. **Screening** — uninformed party offers a menu of contracts to separate types
3. **Reputation mechanisms** — repeat interactions sustain quality
4. **Government intervention** — mandatory disclosure, quality standards, licensing

**Exam Tip:** This is Akerlof (1970, Nobel Prize 2001). The key intuition: asymmetric information can destroy markets. Show the arithmetic: expected value calculation $\rightarrow$ adverse selection $\rightarrow$ market shrinkage/ collapse.

#### 8.1.2 Formal Akerlof Model — Continuous Quality Distribution (Munoz-Garcia, Ch.10, pp.761–765)

**Why this matters for your exam:** The continuous version shows the "unraveling" process in full generality — a common source of exam questions about market collapse dynamics.

**Setup:**
- Car quality $q$ is continuously uniformly distributed: $q \sim U[0, Q]$ where $Q \in (1, 2)$.
- You value quality $q$ at $q$ (you'll pay up to $q$).
- The seller values quality $q$ at $q / Q$ (reservation value). Since $q/Q < q$, gains from trade exist for all $q > 0$.

**Symmetric information benchmark:** You observe $q$, accept price $p$ iff $p \leq q$. The seller sets $p = q$ (binding PC). Price under symmetric information: $p^{SI} = q$ for all $q \in [0, Q]$. All cars trade — first-best efficient.

**Asymmetric information — first iteration:**
- You cannot observe $q$, so you form expectation $E[q]$.
- Since $q \sim U[0, Q]$, $E[q] = Q/2$.
- The seller sets $p = E[q] = Q/2$ (your PC binds).
- Seller's profit: $\pi = p - q/Q = Q/2 - q/Q \geq 0 \iff q \leq Q^2/2$.
- **Result:** Only low-quality cars $q \leq Q^2/2$ are offered. High-quality cars $q > Q^2/2$ exit the market.

**Second iteration (rational expectations):**
- You anticipate that only $q \leq Q^2/2$ are offered.
- Conditional expected quality: $E[q \,|\, q \leq Q^2/2] = (Q^2/2)/2 = Q^2/4$.
- The seller sets $p = Q^2/4$, profit $\pi = Q^2/4 - q/Q \geq 0 \iff q \leq Q^3/4$.
- Further restricts offered cars to $[0, Q^3/4]$.

**Complete unraveling:** We repeat this argument iteratively:

> **Let's work through this step by step.** We start from the iterative expectation-updating process:
> 1. **Iteration 0:** $E^{(0)}[q] = Q/2$ (unconditional mean of $U[0, Q]$).
> 2. **Iteration 1:** Only cars with $q \leq Q \cdot E^{(0)}[q] = Q^2/2$ remain. Conditional on $q \in [0, Q^2/2]$, the mean is $E^{(1)}[q] = (Q^2/2)/2 = Q^2/4$.
> 3. **Iteration 2:** Only cars with $q \leq Q \cdot E^{(1)}[q] = Q \cdot Q^2/4 = Q^3/4$ remain. Conditional mean: $E^{(2)}[q] = (Q^3/4)/2 = Q^3/8$.
> 4. **General pattern:** At iteration $n$, the cutoff is $Q^{n+1}/2^{n+1}$ and the conditional mean is $E^{(n)}[q] = Q^{n+1}/2^{n+1}$.
> 5. → Final form: $E^{(n)}[q] = \frac{Q^{n+1}}{2^{n+1}} \to 0$ as $n \to \infty$.
>
> **Here's what's really going on:** Each iteration shrinks the set of cars offered, which lowers expected quality, which further tightens the cutoff. This "unraveling" continues until only $q = 0$ remains — the market for all positive-quality cars is destroyed. The speed of unraveling depends on $Q$: if $Q$ is small, collapse is faster.

$$E^{(n)}[q] = \frac{Q^{n+1}}{2^{n+1}} \quad \text{cutoff} \to 0 \text{ as } n \to \infty$$

The market **unravels** to $q = 0$ only — the market for all cars $q > 0$ ceases to exist. This is the strong form of Akerlof's result: asymmetric information can **completely destroy** a market that would function efficiently under full information.

**Example 10.5 (Munoz-Garcia):** Let $Q = 1.9$. Then $E[q] = 0.95$, cutoff $Q \cdot E[q] = 1.805$. Cars in $(1.805, 1.9]$ exit. Second iteration: $E[q|q \leq 1.805] = 0.90$, cutoff $Q^3/4 = 1.71$. The market for good cars progressively shrinks.

#### 8.1.3 Adverse Selection in Labor Markets (Munoz-Garcia, Ch.10, pp.765–766)

**Why this matters for your exam:** This applies the same unraveling logic to labour markets — a common exam twist that tests whether you understand the general principle, not just the used-car example.

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

> **Munoz-Garcia Insight — Adverse Selection (Ch.10, pp.761–765):**
> The "lemons" problem arises when sellers have better information about product quality than buyers. Since buyers can only observe average quality, they are only willing to pay the expected value. This systematically drives high-quality goods from the market — a process Akerlof called **adverse selection**. Munoz-Garcia's treatment extends the original model to continuous quality distributions and shows that the market can completely "unravel" through iterative expectation updates.

---

### 8.2 Signalling — The Spence Model of Education

**Why this matters for your exam:** Spence's signalling model is the classic application of game theory to labour markets. Exam questions often ask you to derive the separating equilibrium condition, explain why single-crossing is essential, or apply the Intuitive Criterion to eliminate pooling equilibria. You'll also see this model in policy discussions about whether education actually builds skills or just signals them.

**Setup (Spence, 1973; Nobel Prize 2001; Munoz-Garcia, SS8.5, pp.573-578):**

- Workers have private information about their productivity type: High (H) or Low (L).
- Productivity: $q_H > q_L$ (H contributes more to firm profits).
- Education $e \in \{0,1\}$ is costly but does **not** enhance productivity — it is a pure **signal** of type.
- Cost of education: $c_H$ for H-types, $c_L$ for L-types, with **single-crossing property**: $c_L > c_H$.
- Firms observe education but not type; wages are set competitively based on beliefs.

**Game structure:**
1. Nature chooses worker type (H or L) — you (the worker) know your own type, but the firm does not.
2. You choose education level $e \in \{0,1\}$.
3. The firm observes $e$, updates beliefs $\mu(H|e)$, and offers wage $w(e)$.
4. Payoffs: You get $w(e) - c(e)$; the firm gets productivity minus wage (zero profit in equilibrium).

#### Separating Equilibrium

H-types acquire education ($e=1$), L-types do not ($e=0$).

**Firm beliefs (on equilibrium path):** $\mu(H|e=1) = 1$, $\mu(H|e=0) = 0$.
**Wages:** $w(1) = q_H$, $w(0) = q_L$.

**Incentive compatibility conditions:**

H-type prefers $e=1$: $w(1) - c_H \ge w(0)$ $\Rightarrow$ $q_H - c_H \ge q_L$
L-type prefers $e=0$: $w(0) \ge w(1) - c_L$ $\Rightarrow$ $q_L \ge q_H - c_L$

Combined:

> **Let's work through this step by step.** We start with the two incentive compatibility (IC) constraints that define a separating equilibrium:
> 1. **H-type IC** (prefers education): $w(1) - c_H \ge w(0)$. Substituting equilibrium wages $w(1) = q_H$, $w(0) = q_L$: $q_H - c_H \ge q_L$.
> 2. Rearranging H-type IC: $c_H \le q_H - q_L$.
> 3. **L-type IC** (prefers no education): $w(0) \ge w(1) - c_L$. Substituting: $q_L \ge q_H - c_L$.
> 4. Rearranging L-type IC: $q_H - q_L \le c_L$.
> 5. Combining steps 2 and 4: $c_H \le q_H - q_L \le c_L$.
> 6. → Final form: $\boxed{c_H \le q_H - q_L \le c_L}$.
>
> **Here's what's really going on:** The wage premium for education ($q_H - q_L$) must lie **between** the education costs of the two types. It must be large enough to incentivise H-types to invest in education, but small enough that L-types do not find it profitable to mimic. This is only possible if $c_L > c_H$ (single-crossing).

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

**Why this matters for your exam:** The continuous-type version shows the full power of the Spence-Mirrlees single-crossing condition — a key concept that reappears in contract theory and mechanism design.

The binary-type model extends naturally to a continuum of productivity types $\theta$:

**Setup:**
- Worker productivity $\theta$ is distributed on $[\underline{\theta}, \overline{\theta}]$ with CDF $F(\theta)$.
- You (the worker) choose education level $e \in \mathbb{R}_+$ at cost $c(e, \theta)$.
- **Single-crossing property (Spence-Mirrlees condition):** $c_{e\theta} < 0$, i.e., the marginal cost of education is decreasing in ability:

> **Let's work through this step by step.** We start from the definition of the cost function $c(e, \theta)$:
> 1. The Spence-Mirrlees single-crossing condition requires that the marginal cost of education $\partial c / \partial e$ is **decreasing** in ability $\theta$.
> 2. Formally: $\frac{\partial}{\partial \theta} \left( \frac{\partial c}{\partial e} \right) < 0$.
> 3. By Clairaut's theorem on equality of mixed partials: $\frac{\partial^2 c}{\partial \theta \partial e} = \frac{\partial^2 c}{\partial e \partial \theta}$.
> 4. → Final form: $\frac{\partial^2 c(e,\theta)}{\partial e \partial \theta} < 0$.
>
> **Here's what's really going on:** This condition ensures that higher-ability workers find it cheaper to acquire additional education at the margin. It guarantees that the indifference curves of different types cross only once — a necessary condition for education to serve as a credible signal. Without it, low-ability workers could costlessly mimic the education choices of high-ability workers, and the signal would be meaningless.

  $$\frac{\partial^2 c(e,\theta)}{\partial e \partial \theta} < 0$$
  This implies that higher-ability workers find it cheaper to acquire additional education — education is a credible signal because it is differentially costly.

- Firms observe $e$, form beliefs $\mu(\theta|e)$, and pay wage $w(e) = E[\theta|e]$ (competitive zero-profit condition).

**Worker's optimization:**

> **Let's work through this step by step.** We start from your (the worker's) objective in the signalling game:
> 1. As a worker of type $\theta$, you choose education $e \ge 0$ to maximize your net payoff (wage minus education cost).
> 2. The wage $w(e)$ is set by firms based on their beliefs about your type given your observed education.
> 3. The cost of education $c(e, \theta)$ depends on both the education level and your ability.
> 4. Your maximization problem is therefore: $\max_{e \ge 0} [w(e) - c(e, \theta)]$.
> 5. → Final form: $\max_{e \ge 0} \; w(e) - c(e, \theta)$.
>
> **Here's what's really going on:** You trade off the wage benefit of more education (higher $e$ signals higher $\theta$, commanding higher $w$) against its cost (which is lower for high-ability workers). The optimal $e$ equates marginal benefit to marginal cost.

$$\max_{e \ge 0} \; w(e) - c(e, \theta)$$

**First-order condition (for interior separating equilibrium):**

> **Let's work through this step by step.** We start from your maximization problem $\max_e [w(e) - c(e, \theta)]$:
> 1. Take the derivative with respect to $e$ and set equal to zero (first-order condition for an interior solution): $\frac{d}{de}[w(e) - c(e, \theta)] = 0$.
> 2. Applying the sum rule: $w'(e) - \frac{\partial c(e,\theta)}{\partial e} = 0$.
> 3. Rearranging: $w'(e) = \frac{\partial c(e,\theta)}{\partial e}$.
> 4. → Final form: $w'(e) = \frac{\partial c(e,\theta)}{\partial e}$.
>
> **Here's what's really going on:** At the optimal education level, the marginal wage gain from an additional unit of education ($w'(e)$) equals the marginal cost of that education ($\partial c/\partial e$). This is the standard marginal-benefit-equals-marginal-cost condition.

$$w'(e) = \frac{\partial c(e,\theta)}{\partial e}$$

**Equilibrium wage schedule:** In a separating equilibrium where types are fully revealed, the wage function must satisfy the differential equation:

> **Let's work through this step by step.** We start from the first-order condition and the separating equilibrium property:
> 1. In a separating equilibrium, each type $\theta$ chooses a distinct education level $e(\theta)$, and firms perfectly infer type from $e$.
> 2. The wage equals expected productivity conditional on observed $e$: $w(e) = E[\theta | e]$.
> 3. In a fully separating equilibrium, $e$ perfectly reveals $\theta$, so $w(e(\theta)) = \theta$.
> 4. Differentiating $w(e(\theta)) = \theta$ with respect to $\theta$: $w'(e) \cdot e'(\theta) = 1$, so $w'(e) = 1/e'(\theta)$.
> 5. Alternatively, using the FOC $w'(e) = \partial c(e,\theta)/\partial e$ and noting that $\theta = \theta(e)$ (the inverse of $e(\theta)$):
> 6. → Final form: $w'(e) = \frac{\partial c(e,\theta)}{\partial e}$ where $\theta = \theta(e)$.
>
> **Here's what's really going on:** In a separating equilibrium, the wage schedule must be incentive-compatible: it must induce each type to choose the education level intended for them. This creates a differential equation linking the wage function to the cost structure. The wage grows at a rate equal to the marginal cost of education for the type at that education level.

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

**Why this matters for your exam:** The Intuitive Criterion is the most commonly used refinement in signalling games. Examiners ask you to apply it to eliminate "unreasonable" pooling equilibria — it tests whether you understand how off-equilibrium beliefs can sustain fragile outcomes.

A refinement for signaling games that eliminates **unreasonable** pooling equilibria:

**The problem:** In a pooling equilibrium, off-equilibrium beliefs can be arbitrarily set to sustain the equilibrium. For example, $\mu(H|e=1)$ can be set to 0 (or sufficiently low) to deter deviation — but are all such beliefs "reasonable"?

**The Intuitive Criterion (Cho and Kreps, 1987):**
An equilibrium fails the Intuitive Criterion if there exists a deviation (an out-of-equilibrium message) such that:

1. **Condition 1:** All types for whom the deviation is **dominated** by their equilibrium payoff would never choose it. Specifically, type $\theta$ would never deviate if:

> **Let's work through this step by step.** We start from the definition of "dominated by equilibrium payoff":
> 1. Type $\theta$'s equilibrium payoff is $u^{eq}(\theta)$ — what they receive in the candidate equilibrium.
> 2. Consider a deviation $e'$ (an education level not chosen in equilibrium).
> 3. For this deviation to be dominated, it must yield **lower** utility than the equilibrium payoff for **every possible** response of the uninformed player (i.e., for all wage offers the firm could make).
> 4. Formally: $u^*(e', \theta) < u^{eq}(\theta)$ where $u^*$ is the supremum (best possible) payoff from deviating, taken over all possible off-equilibrium beliefs.
> 5. → Final form: $u^*(e', \theta) < u^{eq}(\theta)$ for all possible responses to $e'$.
>
> **Here's what's really going on:** Condition 1 identifies types that would **never** benefit from deviating, regardless of how the firm interprets the deviation. We can "eliminate" these types from consideration when evaluating the reasonableness of off-equilibrium beliefs.

   $$u^*(e', \theta) < u^{eq}(\theta) \quad \text{for all possible responses to } e'$$

2. **Condition 2:** After eliminating those "dominated" types, the remaining types (if any) would **strictly benefit** from the deviation, assuming the uninformed player holds beliefs concentrated on the remaining types.

**Formal definition (Cho-Kreps):** An equilibrium $(a^*, \mu^*)$ fails the Intuitive Criterion if there exists a deviation $a' \notin \text{supp}(a^*)$ and a type $\theta'$ such that:

> **Let's work through this step by step.** We start from the construction of the set of types that could potentially benefit from deviation:
> 1. Define $\Theta^{**}(a')$ as the set of types $\theta$ for whom the deviation $a'$ is **not** dominated by the equilibrium payoff.
> 2. Formally: $\Theta^{**}(a') = \{\theta \in \Theta : u^*(a', \theta) \ge u^{eq}(\theta)\}$.
> 3. For the Intuitive Criterion to fail, this set must be **non-empty** — otherwise no type could possibly benefit from the deviation, and the off-equilibrium belief is irrelevant.
> 4. → Final form: $\Theta^{**}(a') \equiv \{\theta \in \Theta : u^*(a', \theta) \ge u^{eq}(\theta)\} \neq \emptyset$.
>
> **Here's what's really going on:** $\Theta^{**}$ contains types that are "candidates" for deviating. These are types whose best possible payoff from deviation is at least as good as what they get in equilibrium. If this set is empty, no type could rationally deviate and the equilibrium is robust to the Intuitive Criterion.

$$\Theta^{**}(a') \equiv \{\theta \in \Theta : u^*(a', \theta) \ge u^{eq}(\theta)\} \neq \emptyset$$

and for all $\theta \in \Theta^{**}(a')$:

> **Let's work through this step by step.** We start from the second condition of the Intuitive Criterion:
> 1. After eliminating dominated types, we focus on $\Theta^{**}(a')$ — types that could potentially benefit from deviation.
> 2. The Intuitive Criterion asks: if the uninformed player (firm) believes the deviator must be in $\Theta^{**}(a')$ (i.e., $\mu(\Theta^{**}(a')|a') = 1$), do **all** types in $\Theta^{**}(a')$ strictly prefer deviating?
> 3. For each $\theta \in \Theta^{**}(a')$, compare: $u(a', \theta, \mu(\Theta^{**}(a')=1)) > u^{eq}(\theta)$.
> 4. → Final form: $u(a', \theta, \mu(\Theta^{**}(a')=1)) > u^{eq}(\theta)$.
>
> **Here's what's really going on:** If every type that could possibly benefit from the deviation does strictly benefit when the firm's beliefs are concentrated on the set of potential deviators, then the off-equilibrium belief that sustains the equilibrium (e.g., $\mu(H|e=1)=0$) is "unreasonable." The equilibrium fails the Intuitive Criterion.

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

**Why this matters for your exam:** Examiners frequently ask you to distinguish screening from signalling — the distinction hinges on who moves first and who designs the contract. This is a classic compare-and-contrast question.

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

**Important subtlety:** In the Spence model, you (the informed worker) choose education first — this is **signalling**. In the Rothschild-Stiglitz insurance model, the insurer (uninformed) offers a menu of contracts first — this is **screening**. Both achieve type revelation, but through different mechanisms and with different efficiency properties.

#### 8.2.4 The Stiglitz Screening Model of Insurance (Rothschild-Stiglitz, 1976)

**Why this matters for your exam:** This is the canonical screening model. It shows how self-selection contracts work in insurance markets and introduces the famous "no distortion at the top" result.

**Setup:**
- Consumers have wealth $W$ and face a potential loss $L$ with probability $p$.
- Two types: **High-risk** ($p_H$) and **Low-risk** ($p_L$), with $p_H > p_L$.
- The insurer cannot observe risk type (adverse selection).
- The insurer offers a menu of contracts: $(\alpha, \beta)$ where $\alpha$ is the premium and $\beta$ is the coverage.
- Your final wealth: $W - \alpha$ if no loss, $W - \alpha - L + \beta$ if loss.

**Full information benchmark:**
- Actuarially fair contracts: $\alpha_i = p_i \beta_i$ for type $i = \{H, L\}$.
- Each type buys full insurance: $\beta_i = L$ at premium $\alpha_i = p_i L$.

**Asymmetric information — separating equilibrium:**
- The low-risk type must be offered a contract that the high-risk type does **not** prefer.
- Low-risk contract: $(\alpha_L, \beta_L)$ with less-than-full coverage to deter H-type mimicking.
- The H-type receives full insurance: $\alpha_H = p_H L$, $\beta_H = L$.
- The L-type receives partial insurance with a **deductible** $D = L - \beta_L$:

> **Let's work through this step by step.** We start from the requirement that the low-risk contract be actuarially fair and incentive-compatible:
> 1. **Actuarially fair condition:** The premium equals the expected payout: $\alpha_L = p_L \beta_L$. This ensures the L-type contract breaks even for the insurer.
> 2. **H-type incentive compatibility:** The H-type must not prefer the L-type contract. The H-type's utility from their own contract (full insurance at fair odds) is $u(W - p_H L)$.
> 3. If the H-type deviates to the L-type contract, their expected utility is: $p_H u(W - \alpha_L - L + \beta_L) + (1-p_H)u(W - \alpha_L)$.
> 4. The IC constraint requires: $u(W - p_H L) \ge p_H u(W - \alpha_L - L + \beta_L) + (1-p_H)u(W - \alpha_L)$.
> 5. The deductible $D = L - \beta_L$ is set to make this constraint **bind** (just enough to deter the H-type).
>
> **Here's what's really going on:** The L-type's contract is distorted away from full insurance to create self-selection. The H-type, being more likely to suffer the loss, values full coverage more and thus finds the partial coverage contract less attractive. The deductible is calibrated so that the H-type is indifferent — any smaller deductible would attract the H-type and destroy the separating equilibrium.

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

**Why this matters for your exam:** This paradox challenges the Efficient Market Hypothesis directly. It's a favourite for essay questions about whether financial markets can actually be informationally efficient.

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

**Why this matters for your exam:** Trade policy questions are a staple of comprehensive exams. You'll need to compare tariff, quota, and VER welfare effects, compute deadweight loss triangles, and derive the Stolper-Samuelson theorem — the core distributional result of trade theory. The Jones algebra derivation is a common source of exam questions.

#### 8.3.1 Basic Trade Model

**Setup:** A small open economy with:
- Domestic demand: $Q_d = a - bP$
- Domestic supply: $Q_s = cP - d$
- World price: $P_W$ (given, since the country is small)

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

> **Let's work through this step by step.** We start from the geometry of the deadweight loss triangles:
> 1. The production distortion triangle (area a) has base $t$ (price wedge) and height $\Delta Q_s = Q_s^T - Q_s^{FT}$ (change in domestic supply). Area = $\frac12 \times t \times \Delta Q_s$.
> 2. The consumption distortion triangle (area b) has base $t$ and height $\Delta Q_d = Q_d^{FT} - Q_d^T$ (change in domestic demand). Area = $\frac12 \times t \times \Delta Q_d$.
> 3. Total DWL = $\frac12 t (\Delta Q_s + \Delta Q_d)$.
> 4. Expressing quantity changes in terms of slopes: $\Delta Q_s / \Delta P = \text{supply slope}$, $\Delta Q_d / \Delta P = \text{demand slope}$, and $\Delta P = t$.
> 5. Therefore: $\text{DWL} = \frac12 t (t \cdot \frac{\Delta Q_s}{\Delta P} + t \cdot \frac{\Delta Q_d}{\Delta P}) = \frac12 t^2 (\frac{\Delta Q_s}{\Delta P} + \frac{\Delta Q_d}{\Delta P})$.
> 6. → Final form: $\text{DWL} = \frac{1}{2} t (\Delta Q_s + \Delta Q_d) = \frac{1}{2} t^2 \left( \frac{\Delta Q_s}{\Delta P} + \frac{\Delta Q_d}{\Delta P} \right)$.
>
> **Here's what's really going on:** The DWL of a tariff is the sum of two Harberger triangles. It is quadratic in the tariff rate $t$ — doubling the tariff quadruples the deadweight loss. This is because both the price wedge and the quantity reduction grow linearly with $t$, and their product grows quadratically.

$$\text{DWL} = \frac{1}{2} t (\Delta Q_s + \Delta Q_d) = \frac{1}{2} t^2 \left( \frac{\Delta Q_s}{\Delta P} + \frac{\Delta Q_d}{\Delta P} \right)$$

#### 8.3.3 Tariff vs Quota vs VER

| Policy | Mechanism | Who Gets the Rent | Welfare |
|--------|-----------|-------------------|---------|
| **Tariff** | Tax on imports | Domestic government | DWL = two triangles |
| **Quota** | Physical limit on imports | Import licence holders (domestic if auctioned) | DWL + possible rent dissipation |
| **VER** | "Voluntary" export limit imposed by exporter | **Foreign exporters** | DWL + rent transferred abroad — worst |

**Voluntary Export Restraint (VER):** Equivalent to a quota whose rent is captured by **foreign producers**. This makes VER strictly worse than an equivalent tariff for the importing country — the same DWL triangles PLUS the quota rent goes abroad.

**Key Policy Insight:** Among the three trade restrictions achieving the same import reduction:

> **Let's work through this step by step.** We start from the welfare decomposition for each policy:
> 1. **Tariff:** Net welfare change = $-\text{DWL} + \text{tariff revenue (domestic)}$.
> 2. **Quota (free licences):** Net welfare change = $-\text{DWL} + \text{quota rent (domestic licence holders)}$.
> 3. **VER:** Net welfare change = $-\text{DWL} + \text{quota rent (FOREIGN exporters)}$.
> 4. For the same import restriction, the DWL is identical across all three policies (same price wedge, same quantity changes).
> 5. The difference is who captures the rent. Tariff revenue stays domestic; quota rent may stay domestic (if auctioned) or go to licence holders; VER rent goes abroad.
> 6. → Final form: $\text{Welfare loss: Tariff} < \text{Quota} < \text{VER}$.
>
> **Here's what's really going on:** The ranking follows directly from rent destination. Tariffs are best because the government can use the revenue to offset consumer losses. VERs are worst because the rent leaks abroad, making the policy doubly costly — domestic consumers pay higher prices AND the scarcity premium enriches foreign producers.

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

**Why this matters for your exam:** The Stolper-Samuelson theorem is the central distributional result in trade theory. You must understand it intuitively AND be able to derive the magnification effect using Jones algebra.

**Theorem (Stolper & Samuelson, 1941):** An increase in the relative price of a good raises the real return to the factor used intensively in its production and lowers the real return to the other factor.

**Mechanism (Koutsoyiannis, p.505; Munoz-Garcia, SS6.6, p.404):**

If $X$ is labour-intensive and $Y$ is capital-intensive:

> **Let's work through this step by step.** We start from the relationship between output prices and factor returns:
> 1. The Stolper-Samuelson theorem is derived from the zero-profit conditions in a two-sector general equilibrium model.
> 2. If $X$ is labour-intensive, an increase in $P_X/P_Y$ (relative price of $X$) makes $X$ production more profitable.
> 3. Resources flow: $X$ expands, $Y$ contracts (Rybczynski effect in reverse).
> 4. Expanding $X$ increases derived demand for labour; contracting $Y$ releases capital.
> 5. The wage $w$ rises, the rental rate $r$ falls, so $w/r$ rises.
> 6. → Final form: $\frac{P_X}{P_Y} \uparrow \;\Rightarrow\; X\text{ expands, } Y\text{ contracts} \;\Rightarrow\; \frac{w}{r} \uparrow$.
>
> **Here's what's really going on:** The mechanism is a general-equilibrium chain: a change in output prices changes the output mix, which changes factor demands, which changes factor prices. The factor used intensively in the expanding sector benefits; the factor used intensively in the contracting sector loses.

$$\frac{P_X}{P_Y} \uparrow \;\Rightarrow\; X\text{ expands, } Y\text{ contracts} \;\Rightarrow\; \frac{w}{r} \uparrow$$

**Magnification effect (Jones algebra):** Factor price changes are **magnified** relative to output price changes:

> **Let's work through this step by step.** We start from the formal Jones algebra solution (derived below in §8.3.6):
> 1. Using Cramer's rule on the system of differentiated zero-profit conditions, we obtain $\hat{w} = (\theta_{KY}\hat{P}_X - \theta_{KX}\hat{P}_Y)/|\Theta|$ and $\hat{r} = (\theta_{LX}\hat{P}_Y - \theta_{LY}\hat{P}_X)/|\Theta|$.
> 2. Suppose $\hat{P}_X > \hat{P}_Y$ (the relative price of labour-intensive $X$ increases).
> 3. By the factor intensity assumption ($\theta_{LX} > \theta_{LY}$), the determinant $|\Theta| \in (0, 1)$.
> 4. Solving: $\hat{w}$ gets a positive weight on $\hat{P}_X$ divided by $|\Theta| < 1$, so $\hat{w} > \hat{P}_X$.
> 5. Similarly, $\hat{r}$ gets a negative weight on $\hat{P}_X$, so $\hat{r} < \hat{P}_Y$.
> 6. → Final form: $\hat{w} > \hat{P}_X > \hat{P}_Y > \hat{r}$.
>
> **Here's what's really going on:** Factor price changes **magnify** output price changes because factor intensities differ across sectors. The factor cost share matrix $|\Theta|$ acts as a "lever": dividing by $|\Theta| < 1$ amplifies the price change. This explains why trade liberalisation can have large distributional effects even when price changes are modest.

$$\hat{w} > \hat{P}_X > \hat{P}_Y > \hat{r}$$

where $\hat{x} = dx/x$ (proportional change).

**Distributional implication:** Trade benefits the abundant factor and harms the scarce factor. This is the central distributional result of the Heckscher-Ohlin trade model.

**Example:** When a developing country opens to trade, the price of its export good (labour-intensive) rises. This raises the wage $w$ but lowers the rental rate $r$ — labour gains, capital loses.

**Exam Tip:** Pair Stolper-Samuelson with the GE transmission mechanism (Topic 5). A taste shift toward X (labour-intensive) raises $P_X$, expands X, increases derived demand for labour, raises $w$, and lowers $r$ if Y (capital-intensive) contracts.

#### 8.3.6 Formal Derivation — Magnification Effect (Jones Algebra)

**Why this matters for your exam:** This derivation walks through the full Jones algebra that underpins the Stolper-Samuelson theorem. Exam questions often ask you to set up the system, apply Shephard's lemma, and solve using Cramer's rule.

Based on the full general equilibrium model (Munoz-Garcia, Ch.6, pp.461–463):

**Setup:** Two goods ($X, Y$), two factors ($L$ labour, $K$ capital). Competitive firms:

> **Let's work through this step by step.** We start from the zero-profit condition in competitive equilibrium:
> 1. In a perfectly competitive economy with constant returns to scale, firms earn zero economic profit.
> 2. This means the unit cost of producing each good must equal its output price.
> 3. Unit costs depend on factor prices ($w$ for labour, $r$ for capital) through the cost functions $c_X(w, r)$ and $c_Y(w, r)$.
> 4. The zero-profit conditions are: $c_X(w, r) = P_X$ and $c_Y(w, r) = P_Y$.
> 5. → Final form: $c_X(w, r) = P_X \quad \text{and} \quad c_Y(w, r) = P_Y$.
>
> **Here's what's really going on:** These two equations are the foundation of the Jones algebra. They link output prices to factor prices through the technology embodied in the cost functions. The system has 2 equations and 2 unknowns ($w, r$) — prices pin down factor returns in the Heckscher-Ohlin model.

$$c_X(w, r) = P_X \quad \text{and} \quad c_Y(w, r) = P_Y$$

where $c_X$ and $c_Y$ are unit cost functions (Shephard's lemma gives factor demands).

**Differentiate both sides:**

> **Let's work through this step by step.** We start from the zero-profit conditions and take total differentials:
> 1. Totally differentiate $c_X(w, r) = P_X$: $\frac{\partial c_X}{\partial w} dw + \frac{\partial c_X}{\partial r} dr = dP_X$.
> 2. Totally differentiate $c_Y(w, r) = P_Y$: $\frac{\partial c_Y}{\partial w} dw + \frac{\partial c_Y}{\partial r} dr = dP_Y$.
> 3. → Final forms: $\frac{\partial c_X}{\partial w} dw + \frac{\partial c_X}{\partial r} dr = dP_X$ and $\frac{\partial c_Y}{\partial w} dw + \frac{\partial c_Y}{\partial r} dr = dP_Y$.
>
> **Here's what's really going on:** Total differentiation converts the levels equations into a linear system in changes. This allows us to solve for how factor prices ($dw, dr$) respond to changes in output prices ($dP_X, dP_Y$) — the core comparative static of the Stolper-Samuelson theorem.

$$\frac{\partial c_X}{\partial w} dw + \frac{\partial c_X}{\partial r} dr = dP_X$$
$$\frac{\partial c_Y}{\partial w} dw + \frac{\partial c_Y}{\partial r} dr = dP_Y$$

**Apply Shephard's lemma** ($\partial c_i/\partial w = a_{Li}$, the labour requirement per unit output):

> **Let's work through this step by step.** We start from the total differentials and apply Shephard's lemma:
> 1. **Shephard's lemma** states that the derivative of the cost function with respect to a factor price equals the cost-minimising input coefficient for that factor.
> 2. For good $X$: $\partial c_X/\partial w = a_{LX}$ (labour per unit of $X$), $\partial c_X/\partial r = a_{KX}$ (capital per unit of $X$).
> 3. For good $Y$: $\partial c_Y/\partial w = a_{LY}$, $\partial c_Y/\partial r = a_{KY}$.
> 4. Substituting into the differential system: $a_{LX} dw + a_{KX} dr = dP_X$ and $a_{LY} dw + a_{KY} dr = dP_Y$.
> 5. → Final forms: $a_{LX} dw + a_{KX} dr = dP_X$ and $a_{LY} dw + a_{KY} dr = dP_Y$.
>
> **Here's what's really going on:** Shephard's lemma transforms abstract cost derivatives into economically meaningful input-output coefficients. The system now directly links input requirements to factor price and output price changes.

$$a_{LX} dw + a_{KX} dr = dP_X$$
$$a_{LY} dw + a_{KY} dr = dP_Y$$

**Convert to proportional rates of change** ($\hat{x} = dx/x$):

> **Let's work through this step by step.** We start from the input-coefficient system and convert to proportional changes:
> 1. Divide each equation by the respective output price. For $X$: $\frac{a_{LX} dw}{P_X} + \frac{a_{KX} dr}{P_X} = \frac{dP_X}{P_X} = \hat{P}_X$.
> 2. Using the zero-profit condition $P_X = a_{LX} w + a_{KX} r$ (from cost function properties), rewrite: $\frac{a_{LX} w}{P_X} \cdot \frac{dw}{w} + \frac{a_{KX} r}{P_X} \cdot \frac{dr}{r} = \hat{P}_X$.
> 3. Define factor cost shares: $\theta_{LX} = \frac{wa_{LX}}{P_X}$ (labour's share in $X$), $\theta_{KX} = \frac{ra_{KX}}{P_X}$ (capital's share in $X$). Note $\theta_{LX} + \theta_{KX} = 1$.
> 4. Substituting: $\theta_{LX} \hat{w} + \theta_{KX} \hat{r} = \hat{P}_X$.
> 5. Similarly for $Y$: $\theta_{LY} \hat{w} + \theta_{KY} \hat{r} = \hat{P}_Y$.
> 6. → Final forms: $\theta_{LX} \hat{w} + \theta_{KX} \hat{r} = \hat{P}_X$ and $\theta_{LY} \hat{w} + \theta_{KY} \hat{r} = \hat{P}_Y$.
>
> **Here's what's really going on:** Converting to proportional changes and cost shares standardises the system. The $\theta$ coefficients are pure numbers (shares of total cost) between 0 and 1 that sum to 1 in each sector, making the algebra tractable and economically interpretable.

$$\theta_{LX} \hat{w} + \theta_{KX} \hat{r} = \hat{P}_X$$
$$\theta_{LY} \hat{w} + \theta_{KY} \hat{r} = \hat{P}_Y$$

where $\theta_{Li} = wa_{Li}/P_i$ and $\theta_{Ki} = ra_{Ki}/P_i$ are **factor cost shares** in industry $i$, with $\theta_{Li} + \theta_{Ki} = 1$.

**Factor intensity assumption:**
If $X$ is labour-intensive and $Y$ is capital-intensive:

> **Let's work through this step by step.** We start from the definition of factor cost shares:
> 1. Labour intensity means labour's share of total cost is larger in $X$ than in $Y$: $\theta_{LX} > \theta_{LY}$.
> 2. Since $\theta_{Li} + \theta_{Ki} = 1$ in each sector, it follows that capital's share is smaller in $X$ than in $Y$: $\theta_{KX} < \theta_{KY}$.
> 3. → Final form: $\theta_{LX} > \theta_{LY} \quad \text{and} \quad \theta_{KX} < \theta_{KY}$.
>
> **Here's what's really going on:** Factor intensity is expressed in terms of cost shares rather than physical input ratios. This is because the Jones algebra works in value terms — the cost shares determine how changes in factor prices translate into changes in output prices. The inequalities define which factor is intensively used in which sector.

$$\theta_{LX} > \theta_{LY} \quad \text{and} \quad \theta_{KX} < \theta_{KY}$$

**Solve for factor price changes:**
Using Cramer's rule:

> **Let's work through this step by step.** We start from the system of proportional-change equations:
> 1. Write the system in matrix form: $\begin{bmatrix} \theta_{LX} & \theta_{KX} \\ \theta_{LY} & \theta_{KY} \end{bmatrix} \begin{bmatrix} \hat{w} \\ \hat{r} \end{bmatrix} = \begin{bmatrix} \hat{P}_X \\ \hat{P}_Y \end{bmatrix}$.
> 2. The determinant of the cost-share matrix is: $|\Theta| = \theta_{LX}\theta_{KY} - \theta_{LY}\theta_{KX}$.
> 3. By the factor intensity assumption ($\theta_{LX} > \theta_{LY}, \theta_{KX} < \theta_{KY}$): $\theta_{LX}\theta_{KY} > \theta_{LY}\theta_{KX}$, so $|\Theta| > 0$.
> 4. → Final form: $|\Theta| = \theta_{LX}\theta_{KY} - \theta_{LY}\theta_{KX} > 0$.
>
> **Here's what's really going on:** The determinant is strictly positive when factor intensities differ across sectors. If both sectors had identical factor intensities ($\theta_{LX} = \theta_{LY}, \theta_{KX} = \theta_{KY}$), the determinant would be zero and factor prices would not be uniquely determined by output prices — the Stolper-Samuelson link would break.

$$|\Theta| = \theta_{LX}\theta_{KY} - \theta_{LY}\theta_{KX} > 0 \quad \text{(by factor intensity)}$$

> **Let's work through this step by step.** We start from Cramer's rule applied to the $2\times2$ system:
> 1. For $\hat{w}$: replace the first column of the $\Theta$ matrix with the price change vector: $\hat{w} = \frac{\det\begin{bmatrix} \hat{P}_X & \theta_{KX} \\ \hat{P}_Y & \theta_{KY} \end{bmatrix}}{|\Theta|} = \frac{\theta_{KY}\hat{P}_X - \theta_{KX}\hat{P}_Y}{|\Theta|}$.
> 2. For $\hat{r}$: replace the second column: $\hat{r} = \frac{\det\begin{bmatrix} \theta_{LX} & \hat{P}_X \\ \theta_{LY} & \hat{P}_Y \end{bmatrix}}{|\Theta|} = \frac{\theta_{LX}\hat{P}_Y - \theta_{LY}\hat{P}_X}{|\Theta|}$.
> 3. → Final forms: $\hat{w} = \frac{\theta_{KY}\hat{P}_X - \theta_{KX}\hat{P}_Y}{|\Theta|}$ and $\hat{r} = \frac{\theta_{LX}\hat{P}_Y - \theta_{LY}\hat{P}_X}{|\Theta|}$.
>
> **Here's what's really going on:** These closed-form solutions show how each factor price is a weighted average (or difference) of the two output price changes. The weights are the cost shares from the *other* sector — a reflection of the general equilibrium nature of the model. Changes in both output prices affect both factor prices.

$$\hat{w} = \frac{\theta_{KY}\hat{P}_X - \theta_{KX}\hat{P}_Y}{|\Theta|}$$
$$\hat{r} = \frac{\theta_{LX}\hat{P}_Y - \theta_{LY}\hat{P}_X}{|\Theta|}$$

**Magnification effect:** If $\hat{P}_X > 0$ and $\hat{P}_Y = 0$ (price of labour-intensive good rises):

> **Let's work through this step by step.** We start from the Cramer's rule solutions with $\hat{P}_X > 0$ and $\hat{P}_Y = 0$:
> 1. Substituting $\hat{P}_Y = 0$: $\hat{w} = \frac{\theta_{KY}}{|\Theta|} \hat{P}_X$ and $\hat{r} = \frac{-\theta_{LY}}{|\Theta|} \hat{P}_X$.
> 2. Since $\theta_{LX} + \theta_{KX} = 1$ and $\theta_{LX} > \theta_{LY}$, we have $\theta_{KX} < \theta_{KY}$ and thus $|\Theta| = \theta_{LX}\theta_{KY} - \theta_{LY}\theta_{KX} < \theta_{LX}\theta_{KY} < \theta_{KY}$ (since $\theta_{LX} < 1$).
> 3. Therefore $|\Theta| < \theta_{KY}$, so $\hat{w} = \frac{\theta_{KY}}{|\Theta|} \hat{P}_X > \hat{P}_X$.
> 4. For $\hat{r}$: $\hat{r} = \frac{-\theta_{LY}}{|\Theta|} \hat{P}_X < 0$ (since numerator negative, denominator positive).
> 5. Since $\hat{P}_Y = 0$: $\hat{r} < 0 < \hat{P}_Y = 0$.
> 6. → Final forms: $\hat{w} = \frac{\theta_{KY}}{|\Theta|} \hat{P}_X > \hat{P}_X$ and $\hat{r} = \frac{-\theta_{LY}}{|\Theta|} \hat{P}_X < 0 < \hat{P}_Y = 0$.
>
> **Here's what's really going on:** When only one output price changes, the factor used intensively in that sector benefits more than proportionally ($\hat{w} > \hat{P}_X$), while the other factor unambiguously loses ($\hat{r} < 0$). The magnification factor $1/|\Theta| > 1$ amplifies the price change because factor intensities differ.

$$\hat{w} = \frac{\theta_{KY}}{|\Theta|} \hat{P}_X > \hat{P}_X \quad \text{(since } |\Theta| < \theta_{KY} \text{ by the factor intensity assumption)}$$
$$\hat{r} = \frac{-\theta_{LY}}{|\Theta|} \hat{P}_X < 0 < \hat{P}_Y = 0$$

**General case** ($\hat{P}_X > \hat{P}_Y$):

> **Let's work through this step by step.** We start from the general solutions and the ranking $\hat{P}_X > \hat{P}_Y$:
> 1. From $\hat{w} = (\theta_{KY}\hat{P}_X - \theta_{KX}\hat{P}_Y)/|\Theta|$, we can show $\hat{w} > \hat{P}_X$ because $\theta_{KY} > |\Theta|$ (as shown above) and the weight on $\hat{P}_Y$ is negative.
> 2. From $\hat{r} = (\theta_{LX}\hat{P}_Y - \theta_{LY}\hat{P}_X)/|\Theta|$, we can show $\hat{r} < \hat{P}_Y$ because the coefficient on $\hat{P}_X$ (which is larger than $\hat{P}_Y$) is negative.
> 3. Combining: $\hat{w} > \hat{P}_X > \hat{P}_Y > \hat{r}$.
> 4. → Final form: $\hat{w} > \hat{P}_X > \hat{P}_Y > \hat{r}$.
>
> **Here's what's really going on:** The magnification effect in its general form establishes a complete chain of inequalities. Trade-induced changes in output prices produce even larger changes in factor prices, with one factor gaining and the other losing. This is the most important distributional result in international trade theory.

$$\hat{w} > \hat{P}_X > \hat{P}_Y > \hat{r}$$

This is the **magnification effect**: factor prices respond more than proportionally to output price changes. Trade's distributional effects are amplified through the factor-intensity structure of production.

> **Munoz-Garcia Insight — Stolper-Samuelson (Ch.6, pp.461–463):**
> The proof uses Shephard's lemma and the properties of cost functions to derive comparative statics of factor prices with respect to output prices. The key insight is that factor intensities determine the sign and magnitude of factor price responses. The magnification effect $|\hat{w}| > |\hat{P}_X| > |\hat{P}_Y| > |\hat{r}|$ is a general property when factor intensities differ across sectors.

**Extension — Magnification with both prices changing:**
When both output prices change, the full ranking holds:

> **Let's work through this step by step.** We start from the solutions for $\hat{w}$ and $\hat{r}$:
> 1. Subtract the factor price solutions: $\hat{w} - \hat{r} = \frac{\theta_{KY}\hat{P}_X - \theta_{KX}\hat{P}_Y}{|\Theta|} - \frac{\theta_{LX}\hat{P}_Y - \theta_{LY}\hat{P}_X}{|\Theta|}$.
> 2. Collect terms: $\hat{w} - \hat{r} = \frac{\theta_{KY}\hat{P}_X + \theta_{LY}\hat{P}_X - \theta_{KX}\hat{P}_Y - \theta_{LX}\hat{P}_Y}{|\Theta|}$.
> 3. Simplify: $\hat{w} - \hat{r} = \frac{(\theta_{KY} + \theta_{LY})\hat{P}_X - (\theta_{KX} + \theta_{LX})\hat{P}_Y}{|\Theta|}$.
> 4. Since $\theta_{KX} + \theta_{LX} = 1$ and $\theta_{KY} + \theta_{LY} = 1$: $\hat{w} - \hat{r} = \frac{\hat{P}_X - \hat{P}_Y}{|\Theta|}$.
> 5. Since $|\Theta| \in (0, 1)$: $\frac{\hat{P}_X - \hat{P}_Y}{|\Theta|} > \hat{P}_X - \hat{P}_Y$.
> 6. → Final form: $\hat{w} - \hat{r} = \frac{(\hat{P}_X - \hat{P}_Y)}{|\Theta|} > \hat{P}_X - \hat{P}_Y$.
>
> **Here's what's really going on:** The difference between wage and rental rate changes exceeds the difference between output price changes by the factor $1/|\Theta| > 1$. This is a powerful statement: even small changes in relative output prices (e.g., from trade liberalisation) translate into large changes in relative factor prices, explaining the intense distributional conflict often associated with trade policy.

$$\hat{w} - \hat{r} = \frac{(\hat{P}_X - \hat{P}_Y)}{|\Theta|} > \hat{P}_X - \hat{P}_Y$$

since $|\Theta| \in (0, 1)$. The factor price differential exceeds the output price differential — trade-induced price changes produce **magnified** distributional consequences.

**Empirical implication:** Even modest changes in trade prices can produce large changes in factor returns (wages and rents). This explains why trade policy generates intense distributional conflict — the losers lose a lot, and the winners win a lot.

---

### 8.4 Solved Questions

**Why this matters for your exam:** These are past exam questions — work through each one carefully. Mastering them gives you a ready-made template for answering similar problems under time pressure.

#### Question 8(a) — 46 Final, Part C: Asymmetric Information & Market Disappearance [4 marks]

**Q:** Show that asymmetric information may lead to the disappearance of good from the market.

**A:** This is Akerlof's "Market for Lemons" (1970). Asymmetric information exists when sellers know the quality of their good but buyers cannot distinguish quality ex ante. Because buyers know only the average quality, they are willing to pay only the expected value:

> **Let's work through this step by step.** We start with the setup with two possible quality types:
> 1. With probability $\mu$, the good is high-quality (value $V_H$ to the buyer).
> 2. With probability $(1-\mu)$, the good is low-quality (value $V_L$ to the buyer).
> 3. The buyer, unable to observe quality, forms the mathematical expectation: $E[V] = \mu \cdot V_H + (1-\mu) \cdot V_L$.
> 4. → Final form: $E[V] = \mu V_H + (1-\mu) V_L$.
>
> **Here's what's really going on:** This is the buyer's rational willingness-to-pay under asymmetric information — the probability-weighted average of possible values. It is less than $V_H$ (so high-quality sellers are underpaid) and greater than $V_L$ (so low-quality sellers are overpaid). This mispricing drives the adverse selection process.

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

**A:** See §8.2 for the full theoretical treatment.

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

> **Let's work through this step by step.** We start from the market-clearing condition (domestic demand = domestic supply):
> 1. Set $Q_d = Q_s$: $250,000 - 100P = 250P - 30,000$.
> 2. Bring terms: $250,000 + 30,000 = 250P + 100P$.
> 3. Simplify: $280,000 = 350P$.
> 4. Solve: $P_{\text{autarky}} = 280,000 / 350 = 800$.
> 5. → Final form: $250,000 - 100P = 250P - 30,000 \;\Rightarrow\; 280,000 = 350P \;\Rightarrow\; P_{\text{autarky}} = 800$.
>
> **Here's what's really going on:** The autarky price is where domestic supply meets domestic demand. At prices above 800, quantity supplied exceeds quantity demanded; below 800, there is excess demand. The autarky equilibrium serves as the benchmark for evaluating the effects of trade.

$$250,000 - 100P = 250P - 30,000 \;\Rightarrow\; 280,000 = 350P \;\Rightarrow\; P_{\text{autarky}} = 800$$

> **Let's work through this step by step.** We start from the autarky price $P = 800$:
> 1. Substitute $P = 800$ into either the demand or supply equation.
> 2. Using demand: $Q_{\text{autarky}} = 250,000 - 100(800) = 250,000 - 80,000$.
> 3. → Final form: $Q_{\text{autarky}} = 250,000 - 100(800) = 170,000$.
>
> **Here's what's really going on:** At the autarky price, 170,000 units are produced and consumed domestically with no international trade. This is the quantity that exactly clears the domestic market.

$$Q_{\text{autarky}} = 250,000 - 100(800) = 170,000$$

**Step 2: Free trade ($P_W = 600$).**

> **Let's work through this step by step.** We start from the free trade price $P_W = 600$ (below autarky price of 800, so the country imports):
> 1. Domestic demand at $P_W$: $Q_d(600) = 250,000 - 100(600) = 250,000 - 60,000 = 190,000$.
> 2. Domestic supply at $P_W$: $Q_s(600) = 250(600) - 30,000 = 150,000 - 30,000 = 120,000$.
> 3. → Final forms: $Q_d(600) = 190,000$ and $Q_s(600) = 120,000$.
>
> **Here's what's really going on:** At the lower world price, domestic consumers demand more (190,000) while domestic producers supply less (120,000) than under autarky. The difference is made up by imports — the country benefits from cheaper foreign goods.

$$Q_d(600) = 190,000,\; Q_s(600) = 120,000$$

> **Let's work through this step by step.** We start from the free trade quantities:
> 1. Imports = Domestic demand - Domestic supply at world price.
> 2. $\text{Imports} = Q_d(600) - Q_s(600) = 190,000 - 120,000$.
> 3. → Final form: $\text{Imports} = 190,000 - 120,000 = 70,000$.
>
> **Here's what's really going on:** Under free trade, the country imports 70,000 units — the gap between what consumers want and what domestic producers can supply at the world price. This imports quantity is the baseline against which trade restrictions are measured.

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

> **Let's work through this step by step.** We start from the condition that imports under VER are restricted to 20,000 units:
> 1. The VER fixes imports at 20,000: $Q_d(P) - Q_s(P) = 20,000$.
> 2. Substitute the demand and supply functions: $(250,000 - 100P) - (250P - 30,000) = 20,000$.
> 3. Simplify: $250,000 - 100P - 250P + 30,000 = 20,000$.
> 4. → $280,000 - 350P = 20,000$.
>
> **Here's what's really going on:** The VER creates an artificial scarcity that raises the domestic price above the world price. The price adjusts until the gap between quantity demanded and quantity supplied equals the VER limit.

$$(250,000 - 100P) - (250P - 30,000) = 20,000$$

> **Let's work through this step by step.** We start from the import restriction equation:
> 1. From $280,000 - 350P = 20,000$, bring terms: $280,000 - 20,000 = 350P$.
> 2. Simplify: $260,000 = 350P$.
> 3. Solve: $P_{\text{VER}} = 260,000 / 350 \approx 742.86$.
> 4. → Final form: $280,000 - 350P = 20,000 \;\Rightarrow\; P_{\text{VER}} = 742.86$.
>
> **Here's what's really going on:** The VER drives the domestic price up to \$742.86 — well above the world price of \$600 and even above the tariff-inclusive price of \$650. This is because the VER restricts imports much more tightly (20,000 vs 52,500 under the tariff), creating a larger scarcity premium.

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

<!-- ============================================================
APPENDICES
============================================================ -->
## Appendix A: Exam Cheat Sheet — All Key Formulas

**Your quick-reference formula sheet — know all of these cold.**

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

Working through real past papers is one of the best ways to prepare — you'll get a feel for the question style, the timing, and the level of depth expected.

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

## Appendix D: Key Textbook Connections — Comprehensive Cross-Reference Index

This appendix maps each major concept in the guide to its source textbook and section, enabling targeted revision of the original
proofs.

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
