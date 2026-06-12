# Answers: Consumer Theory & Preferences

## Exam-ready Revision Notes

> **Math convention:** All equations use LaTeX notation. GitHub renders them natively.
> Display equations use `$$ ... $$`, inline formulas use `$ ... $`.

---

# Section 1A — Preference-Based Approach

---

### Question 1 {#q-cons-01}

**What is the preference-based approach of consumer's behavior? Explain and interpret the assumptions. (10/7 marks)**

**Answer:**

> **Marking Guide [14 marks]:** Definition of preference approach (2) | Completeness — explanation + violations (4) | Transitivity — explanation + violations (4) | Money-pump argument + reflexivity (2) | Structure & intuition for exam timing (2)
>
> ⭐ **High-Yield** — Rational preferences are the foundational assumption of all consumer theory. Every UMP/EMP problem presupposes them. Expect either a direct definition question or indirect testing via the Debreu existence theorem (Q5).

The preference-based approach models consumer choice by assuming the consumer has a well-defined preference relation over the set of all possible consumption bundles $X = \mathbb{R}^N_+$ and chooses the most-preferred bundle from those that are affordable.

**Core idea:** Preferences are primitive; choices are derived from them.

**The preference relation** is a binary relation $\succeq$ (weak preference) on $X$. For any $x, y \in X$:

- $x \succeq y$ : "x is at least as preferred as y"
- $x \succ y$ (strict) : $x \succeq y$ but not $y \succeq x$
- $x \sim y$ (indifference) : $x \succeq y$ and $y \succeq x$

**A rational preference relation** satisfies two key assumptions:

**1. Completeness**
- For all $x, y \in X$: either $x \succeq y$, or $y \succeq x$, or both ($x \sim y$).
- Meaning: the consumer can compare ANY two bundles; no refusal to answer.
- Violations: "Is the brother of" — if John and Bob are not brothers, neither is the brother of the other.

**2. Transitivity**
- For all $x, y, z \in X$: if $x \succeq y$ and $y \succeq z$ then $x \succeq z$.
- Meaning: preferences do not cycle; they are internally consistent.
- Without transitivity, we could extract infinite money from an individual (money-pump argument).
- Sources of intransitivity: indistinguishable alternatives (just-noticeable differences), framing effects, aggregation of criteria (Condorcet paradox), changing preferences.

**Reflexivity** (implied): $x \sim x$ and $x \succeq x$ for all $x$.

> **Formal Definition 1 — Preference Relation**
>
> A **preference relation** $\succeq$ is a binary relation on the consumption set $X = \mathbb{R}^N_+$ that expresses the consumer's ranking over consumption bundles (Koutsoyiannis, Ch.2 §B, pp.17–19; Munoz-Garcia, §1.1, pp.2–5):
>
> - $x \succeq y$: "$x$ is at least as preferred as $y$"
> - $x \succ y$ (strict): $x \succeq y$ but not $y \succeq x$
> - $x \sim y$ (indifference): $x \succeq y$ and $y \succeq x$
>
> The relation is the primitive in consumer theory — choices are derived from preferences, not the reverse.
>
> → *See also: FD2 (Rational Preferences), FD7 (Debreu Existence)*
>
> **Formal Definition 2 — Rational Preference Relation**
>
> A preference relation $\succeq$ is **rational** if it satisfies (Munoz-Garcia, §1.1, pp.2–5):
>
> 1. **Completeness:** For all $x, y \in X$, either $x \succeq y$ or $y \succeq x$ (or both). The consumer can compare any two bundles.
> 2. **Transitivity:** For all $x, y, z \in X$, $x \succeq y$ and $y \succeq z$ $\implies$ $x \succeq z$. Preferences do not cycle.
>
> Rationality implies **reflexivity** ($x \succeq x$). Without transitivity, a money-pump extracts infinite wealth from the individual.
>
> **Key insight:** Rationality is the foundational assumption of consumer theory. Without it, utility representation (FD7) and demand functions (FD16) cannot be derived.
>
> → *See also: FD1 (Preference Relation), FD7 (Debreu Existence)*

**Exam Tip:** Completeness is the most frequently challenged assumption — real people often cannot compare unfamiliar bundles. Transitivity is needed for the utility representation. Always state both when defining rational preferences. (10-mark questions expect you to discuss each assumption + give examples of violations.)

> **Professor's Corner:** The difference between a B and an A answer is the *violation examples*. A students give the Condorcet paradox and money-pump argument; B students merely restate the definitions. For completeness, mention the "brother of" counterexample. Also note that transitivity + completeness together imply reflexivity — a subtle point that impresses examiners.
>
> → *See also: DP 2 (demand elasticities build on rational choice); WF 5B.Q5 (welfare theorems assume rational preferences)*

---

### Question 2 {#q-cons-02}

**Define indifference set. Examine: if preference satisfies strong monotonicity, ICs must be downward sloping. (10/7)**

**Answer:**

> **Marking Guide [14 marks]:** IND set definition & notation (2) | Upper/lower contour sets (2) | Strong monotonicity — precise definition (3) | Proof by contradiction (4) | Diagram of regions A & B (2) | What SM rules out (1)
>
> ⭐ **High-Yield** — The proof that SM ⇒ downward-sloping ICs is a classic contradiction argument that reappears in production theory (MRTS slope). The IND/UCS/LCS definitions are essential vocabulary for all subsequent questions.
>
> **Formal Definition 3 — Indifference Set & Contour Sets**
>
> For a preference relation $\succeq$ and bundle $x \in X$, the following sets partition $X$ (Munoz-Garcia, §1.2, pp.5–7):
>
> - **Indifference Set (IND):** $IND(x) = \{ y \in X : y \sim x \}$
> - **Upper Contour Set (UCS):** $UCS(x) = \{ y \in X : y \succeq x \}$
> - **Lower Contour Set (LCS):** $LCS(x) = \{ y \in X : x \succeq y \}$
>
> These satisfy $IND(x) = UCS(x) \cap LCS(x)$.
>
> **Key insight:** Indifference curves are the boundary of $IND(x)$. Under strong monotonicity (FD4), IND sets are $(N-1)$-dimensional, downward-sloping surfaces.
>
> → *See also: FD4 (Strong Monotonicity), FD5 (Convexity)*
>
> **Formal Definition 4 — Strong Monotonicity**
>
> A preference relation $\succeq$ satisfies **strong monotonicity** if for all $x \neq y$: $x_k \ge y_k$ for all $k$ and $x_l > y_l$ for some $l$ $\implies$ $x \succ y$ (Munoz-Garcia, §1.2, p.9).
>
> **Implications:**
> - Indifference curves are strictly downward sloping (proof by contradiction)
> - Thick indifference curves are ruled out
> - Strong monotonicity $\Rightarrow$ monotonicity $\Rightarrow$ LNS (FD10)
>
> **Classification:** Strong monotonicity is stronger than monotonicity (which requires $x_k > y_k$ for ALL $k$ for $x \succ y$). Leontief utility satisfies monotonicity but violates strong monotonicity.
>
> → *See also: FD10 (LNS), Q2 (downward-sloping IC proof)*

**Indifference set** of a bundle $x$ is the set of all bundles $y$ such that the consumer is indifferent between them:

$$IND(x) = \{ y \in X : y \sim x \}$$

**Related sets:**

- Upper contour set (UCS): $UCS(x) = \{ y \in X : y \succeq x \}$
- Lower contour set (LCS): $LCS(x) = \{ y \in X : x \succeq y \}$
- $IND(x) = UCS(x) \cap LCS(x)$

**Strong Monotonicity ⇒ Downward-sloping ICs:**

Strong monotonicity: for any $x \neq y$, if $x_k \ge y_k$ for all $k$ and $x_l > y_l$ for at least one good $l$, then $x \succ y$. (i.e., more of ANY good strictly increases utility.)

**Proof by contradiction:**
1. Suppose the indifference curve through $x$ were upward sloping.
2. Then there exists a point $y$ northeast of $x$ on the same IC: $y \gg x$ (more of both goods).
3. By strong monotonicity, $y \gg x$ implies $y \succ x$.
4. But by definition of the IC, $y \sim x$.
5. Contradiction. Hence ICs cannot be upward sloping.

**Strong monotonicity rules out:**
- Upward-sloping ICs
- Thick indifference curves (since points within the thickness are indifferent but differ in quantities)
- Bads (where more reduces utility)

**Exam Tip:** Strong monotonicity is sufficient but not necessary for downward-sloping ICs. LNS alone does NOT guarantee downward-sloping ICs (e.g., if one good is a bad). For 7-mark answers: define IND set first, then prove the implication with a diagram showing regions A (strictly better) and B (strictly worse).

> **Professor's Corner:** Most students forget to define the IND set before launching into the proof — this costs 2 marks. Top answers draw the north-east/south-west quadrants and label the contradiction explicitly. Also note that the proof shows SM ⇒ strictly downward sloping, whereas mere monotonicity gives weakly downward sloping (allowing vertical/horizontal segments).
>
> → *See also: Section 1A Q7 (SM ⇒ M ⇒ LNS chain); CT 1B.Q4 (Walrasian demand properties build on LNS)*

---

### Question 3 {#q-cons-03}

**What are the twin definitions of convexity? How differ from strong convexity? Graphical. (10/4)**

**Answer:**

> **Marking Guide [14 marks]:** Definition 1 — convexity of preferences (3) | Definition 2 — convex UCS (3) | Equivalence (2) | Strong convexity (2) | Comparison table (2) | Diagram of IC shapes (2)
>
> ⭐ **High-Yield** — Convexity is the second-most tested preference property after rationality. It connects directly to quasiconcavity (Q4), dMRS/dx < 0 (Q9), and uniqueness of Walrasian demand (1B Q4). Expect at least one question on it.
>
> **Formal Definition 5 — Convexity of Preferences**
>
> A preference relation $\succeq$ is **convex** if for all $x, y \in X$ with $x \succeq y$ and any $\alpha \in (0,1)$ (Munoz-Garcia, §1.5, pp.18–22; Koutsoyiannis, Ch.2 §B, pp.19–21):
>
> $$\alpha x + (1-\alpha) y \succeq y$$
>
> **Equivalent definition:** The upper contour set $UCS(z) = \{ x \in X : x \succeq z \}$ is convex for every $z$.
>
> **Strong convexity (strict):** If $x \neq y$, $x \succeq z$, $y \succeq z$, then $\alpha x + (1-\alpha) y \succ z$ for all $\alpha \in (0,1)$.
>
> **Key insight:** Convexity captures "diversification is desirable" — consumers prefer averages to extremes. Strict convexity yields unique Walrasian demand.
>
> → *See also: FD6 (Quasiconcavity), FD14 (Diminishing MRS)*

**Definition 1 (Convexity of preferences):** For all $x, y \in X$, if $x \succeq y$ then for any $\alpha \in (0,1)$:

$$\alpha x + (1-\alpha) y \succeq y$$

The convex combination of $x$ and $y$ is at least as good as $y$.

**Definition 2 (Convex UCS):** For every bundle $x$, its upper contour set $UCS(x) = \{ y \in X : y \succeq x \}$ is a convex set. That is, for any $y, z \in UCS(x)$ and any $\lambda \in (0,1)$:

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

**Graphical distinction:** Strict convexity shows ICs that are strictly bowed toward the origin — the chord connecting any two points on the same IC lies entirely above the IC (strictly preferred region). Weak convexity allows the chord to coincide with the IC (linear segments, as in perfect substitutes).

**Exam Tip:** For 4-mark questions: give both definitions, state they are equivalent, then contrast with strong convexity in one sentence. Drawing the IC shapes (strictly bowed vs. linear segments) is worth extra marks.

> **Professor's Corner:** The most common error is conflating convex preferences with convex UCS — they are the same condition stated differently. Students who can articulate *why* they're equivalent (geometrically: a chord between any two points in UCS stays in UCS) earn top marks. For strong convexity, the key is strictness: the chord lies in the interior of UCS, not on its boundary. Know the CD vs linear vs Leontief convexity classification cold.
>
> → *See also: Section 1A Q4 (equivalence proofs); Section 1A Q9 (dMRS/dx connection); DP 3A.Q4 (EoS and convexity in production)*

---

### Question 4 {#q-cons-04}

**Show: Convexity of preference $\iff$ UCS(x) convex $\iff$ $u(\cdot)$ quasiconcave. (5)**

**Answer:**

> **Marking Guide [14 marks]:** Chain statement (1) | Convex ⇔ UCS convex — definitional (2) | UCS convex ⇔ quasiconcave — forward proof (4) | UCS convex ⇔ quasiconcave — reverse proof (3) | Bordered Hessian reference (2) | Chain completion & intuition (2)
>
> ⭐ **High-Yield** — The convexity ⇔ quasiconcavity equivalence is the single most tested equivalence in 501 Micro prelims. Every student who fails this question does so because they cannot articulate both directions of the proof. Master the $\min\{u(x),u(y)\}$ trick.
>
> **Formal Definition 6 — Quasiconcave Function**
>
> A utility function $u: X \to \mathbb{R}$ is **quasiconcave** if for all $x, y \in X$ and $\lambda \in (0,1)$ (Munoz-Garcia, §1.5, p.22):
>
> $$u(\lambda x + (1-\lambda) y) \ge \min\{u(x), u(y)\}$$
>
> **Equivalence chain:** Convex preferences $\iff$ convex UCS $\iff$ quasiconcave utility.
>
> **For twice-differentiable $u$ (bordered Hessian test, $n=2$):**
>
> $$|\overline{H}| = 2u_x u_y u_{xy} - u_x^2 u_{yy} - u_y^2 u_{xx} \ge 0$$
>
> **Caution:** Quasiconcavity is weaker than concavity. Any monotonic transformation of a concave function is quasiconcave, but not vice versa (e.g., $u = x^2 y^2$ on $\mathbb{R}^2_{++}$ is quasiconcave but not concave).
>
> → *See also: FD5 (Convexity), FD14 (dMRS/dx Equivalence)*

We prove the chain of equivalences:

**(1) Convexity of preference $\iff$ UCS(x) is convex:**

By Def 2 of convexity (above), preferences are convex if and only if the upper contour set of every bundle is convex. Hence the equivalence is definitional.

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

**Exam Tip:** This is a standard equivalence proof. For 5 marks: state each equivalence clearly, prove the key direction (UCS convex $\iff$ quasiconcave), and show the chain. No need for diagrams.

> **Professor's Corner:** The forward direction ($\Rightarrow$) is the cleaner proof and most students get it. The reverse direction ($\Leftarrow$) trips people up — you need to *start* with quasiconcavity of $u$ and *deduce* that UCS is convex. The key move: take any $z$, any $x,y\in UCS(z)$, note $\min\{u(x),u(y)\}\ge u(z)$, apply quasiconcavity. Students who write "$u(\lambda x+(1-\lambda)y) \ge \min\{u(x),u(y)\} \ge u(z)$" in one line get full marks. Also note the bordered Hessian condition for $n>2$ — this is A+ territory.
>
> → *See also: Section 1A Q3 (convexity definitions); Section 1A Q9 (dMRS/dx equivalence)*

---

### Question 5 {#q-cons-05}

**Prove: Monotonicity + continuity → utility function exists. (5)**

**Answer:**

> **Marking Guide [14 marks]:** Theorem statement (2) | 45° diagonal projection idea (3) | Construction of $t(x)$ via $A$ and $B$ sets (4) | Continuity argument for intersection (3) | Conclusion: $u(x)=t(x)$ (2)
>
> ⭐ **High-Yield** — The Debreu existence proof is the crowning theoretical result of Section 1A. It combines completeness, transitivity, continuity, and monotonicity into one construction. Often appears as a 5-mark "sketch the proof" question or as the starting point for a discussion on representability.
>
> **Formal Definition 7 — Debreu Utility Existence Theorem**
>
> If a preference relation $\succeq$ on $X = \mathbb{R}^N_+$ is **rational** (complete + transitive), **continuous**, and **monotone**, there exists a continuous utility function $u: X \to \mathbb{R}$ that represents $\succeq$ (Munoz-Garcia, §1.4, pp.13–17; Koutsoyiannis, Ch.2 §B, pp.21–22).
>
> **Proof sketch:** Project each bundle $x$ onto the 45° diagonal by finding $t(x)$ such that $(t(x),\ldots,t(x)) \sim x$. Set $u(x) = t(x)$. Continuity guarantees the intersection exists; monotonicity ensures uniqueness.
>
> **Key insight:** This theorem bridges the ordinal preference approach (Section 1A) with the cardinal utility maximization approach (Section 1B). Lexicographic preferences violate continuity and cannot be represented.
>
> → *See also: FD1 (Rationality), FD8 (Continuous Preferences)*
>
> **Formal Definition 8 — Continuous Preference Relation**
>
> A preference relation $\succeq$ is **continuous** if it is preserved under limits: for sequences $x^n \to x$, $y^n \to y$, $x^n \succeq y^n$ for all $n$ $\implies$ $x \succeq y$ (Munoz-Garcia, §1.4, p.14).
>
> **Equivalent definition:** For every $x$, both $UCS(x)$ and $LCS(x)$ are closed sets.
>
> **Economic role:** Continuity rules out "jumps" in preferences — small changes in consumption cannot cause abrupt preference reversals. It is necessary for utility representation (FD7) and ensures demand correspondences are upper hemicontinuous.
>
> **Counterexample:** Lexicographic preferences violate continuity and have no utility representation.
>
> → *See also: FD7 (Debreu Theorem), FD1 (Rationality)*

**Theorem (Debreu):** If a preference relation $\succeq$ satisfies monotonicity and continuity on $X = \mathbb{R}^N_+$, then there exists a continuous utility function $u: X \to \mathbb{R}$ representing $\succeq$.

**Proof sketch:**

1. Let $\mathbf{0} = (0,0,\ldots,0)$. For any bundle $x \neq \mathbf{0}$, by monotonicity $x \succeq \mathbf{0}$.
2. Let $m = \max\{x_1, x_2, \ldots, x_N\}$. Define $M = (m, m, \ldots, m)$ — a bundle on the 45-degree line with all components equal to $m$.
3. By monotonicity: $M \succeq x \succeq \mathbf{0}$.
4. Both $\mathbf{0}$ and $M$ lie on the main diagonal (equal amounts of all goods).

5. Define the set $A = \{ t \in [0,m] : (t,t,\ldots,t) \preceq x \}$ and $B = \{ t \in [0,m] : (t,t,\ldots,t) \succeq x \}$.
   - Monotonicity ensures $A$ and $B$ are non-empty and partition $[0,m]$.
   - By continuity, both $A$ and $B$ are closed, so the intersection is non-empty.
   - Hence there exists a unique $t(x)$ such that $(t(x), t(x), \ldots, t(x)) \sim x$.

6. Define $u(x) = t(x)$. This is a real number representing the utility of $x$.

7. For any two bundles $x, y$:
   - $x \succeq y$ iff $t(x) \ge t(y)$ iff $u(x) \ge u(y)$.
   - This follows from transitivity and monotonicity of the comparison on the diagonal.

8. Continuity of $u$ follows from the continuity of preferences and the construction.

**Intuition:** Project every bundle onto the 45-degree line via unique indifference curve intersection. The projection $t(x)$ becomes the utility number.

**Exam Tip:** This is a classic existence proof. For 5 marks: explain the intuition (projection onto diagonal), state monotonicity is used to order bundles on the diagonal, continuity guarantees the intersection exists. Memorize the structure: $\mathbf{0} \to M \to t(x) \to u(x)=t(x)$.

> **Professor's Corner:** The most common mistake is using continuity *before* establishing that $A$ and $B$ are closed. You need to argue: (i) by monotonicity, bundles on the diagonal are ordered, (ii) the sets $A$ (points ≤ $x$) and $B$ (points ≥ $x$) partition $[0,m]$, (iii) continuity of $\succeq$ implies both are closed, hence their non-empty intersection gives $t(x)$. A students list these three steps explicitly. Also mention that Lexicographic preferences violate continuity and thus cannot be represented — this shows you understand why continuity is necessary.
>
> → *See also: Section 1A Q1 (rational preferences are the starting point); WF 5B.Q5 (welfare theorems assume utility representation)*

---

### Question 6 {#q-cons-06}

**Define utility function. Explain desirability by monotonicity and strong monotonicity. (10/5)**

**Answer:**

> **Marking Guide [14 marks]:** Utility function definition & notation (2) | Ordinality & monotonic transformations (3) | Monotonicity — conditions (a) & (b) (3) | Strong monotonicity (3) | Comparison table & IC implications (3)
>
> → *See also: Section 1A Q5 (Debreu existence — utility as representation); Section 1A Q7 (hierarchical chain SM ⇒ M ⇒ LNS)*
>
> **Formal Definition 9 — Utility Function**
>
> A function $u: X \to \mathbb{R}$ **represents** preference relation $\succeq$ if for all $x, y \in X$ (Munoz-Garcia, §1.4, p.13):
>
> $$x \succeq y \iff u(x) \ge u(y)$$
>
> **Ordinality:** Only the ranking matters. Any strictly increasing transformation $v = f \circ u$ also represents the same preferences.
>
> **Key insight:** Marginal utility $MU_k$ has no intrinsic economic meaning (it changes under monotonic transformation). Only the **ratio** $MU_i/MU_j$ (the MRS, FD13) is invariant — it is a "real" economic object.
>
> → *See also: FD1 (Preference Relation), FD7 (Debreu Existence Theorem)*

**Utility function:** A function $u: X \to \mathbb{R}$ that represents preference relation $\succeq$ if, for every $x, y \in X$:

$$x \succeq y \iff u(x) \ge u(y)$$

**Properties of utility representation:**
- Only the **ranking** matters (ordinality), not the numerical magnitude (cardinality).
- Any strictly increasing transformation $v = f(u(x))$ also represents the same preferences. So if $u$ represents $\succeq$, then $v = f \circ u$ for any strictly increasing $f$ also represents $\succeq$.
- Example: $u = x^\alpha y^\beta$ and $v = \alpha \ln x + \beta \ln y$ represent the same preferences.

**Desirability assumptions** formalize "more is better":

**Monotonicity:**
- For all $x \neq y$:
  - (a) If $x_k \ge y_k$ for ALL goods $k$, then $x \succeq y$.
  - (b) If $x_k > y_k$ for ALL goods $k$, then $x \succ y$.
- Interpretation: increasing ALL commodities strictly improves welfare; increasing SOME (without reducing others) cannot hurt.
- Utility implication: weakly increasing in each argument; strictly increasing when all arguments increase.

**Strong monotonicity:**
- For all $x \neq y$: if $x_k \ge y_k$ for all goods $k$ AND $x_l > y_l$ for at least one good $l$, then $x \succ y$.
- Interpretation: increasing even ONE commodity strictly improves welfare.
- Utility implication: strictly increasing in every argument.

**Comparison table:**

| Criterion | Monotonicity | Strong Monotonicity |
|---|---|---|
| One good increases, others same | Only weakly better ($x \succeq y$) | Strictly better ($x \succ y$) |
| All goods increase | Strictly better | Strictly better |
| Example: $u = \min\{x_1, x_2\}$ | Satisfies monotonicity | Violates (increasing only $x_1$ when $\min = x_2$ leaves utility unchanged) |
| Example: $u = x_1 + x_2$ | Satisfies | Satisfies |
| IC shape | Downward sloping (if all goods are goods) | Downward sloping |
| LNS implied? | Yes | Yes (stronger) |

**Exam Tip:** For 10-mark questions: define utility, give examples of transforms, then systematically define and distinguish monotonicity and strong monotonicity with examples. For 5-mark questions: more concise, focus on the utility-desirability link.

> **Professor's Corner:** The key distinction students miss: under *monotonicity*, increasing only good 1 (holding others constant) yields only weak improvement ($x \succeq y$), not strict improvement. Under *strong monotonicity*, it's strictly better ($x \succ y$). This matters for LNS — monotonicity is sufficient to guarantee LNS, but strong monotonicity is not required. The Leontief utility function is the canonical example that satisfies monotonicity but violates strong monotonicity — state this explicitly.
>
> → *See also: Section 1A Q2 (strong monotonicity ⇒ downward-sloping ICs); DP 3A.Q2 (production set monotonicity parallels)*

---

### Question 7 {#q-cons-07}

**Show: Strong Monotonicity $\Rightarrow$ Monotonicity $\Rightarrow$ LNS. (5)**

**Answer:**

> **Marking Guide [14 marks]:** SM ⇒ M proof (4) | M ⇒ LNS proof with $\varepsilon$-ball (5) | Chain statement (2) | Converse non-implications with counterexample (3)
>
> ⭐ **High-Yield** — The SM ⇒ M ⇒ LNS hierarchy is one of the most frequently examined proof chains. LNS is the workhorse assumption of modern micro theory (Walras' Law, UMP interior solutions). Expect this as a short-proof question.
>
> **Formal Definition 10 — Local Non-Satiation (LNS)**
>
> A preference relation $\succeq$ satisfies **LNS** if for every $x \in X$ and $\varepsilon > 0$, there exists $y$ with $\|y - x\| < \varepsilon$ such that $y \succ x$ (Munoz-Garcia, §1.2, pp.7–8).
>
> **Meaning:** The consumer is never fully satiated — an arbitrarily close strictly preferred bundle always exists.
>
> **Hierarchy:** Strong Monotonicity (FD4) $\Rightarrow$ Monotonicity $\Rightarrow$ LNS.
>
> **Sufficient conditions from LNS alone:**
> - Walras' Law ($p \cdot x = w$ for all optimal bundles)
> - Indirect utility strictly increasing in $w$
> - Expenditure function strictly increasing in $u$
>
> **Counterexample:** Preferences with a bliss point (satiation) violate LNS.
>
> → *See also: FD4 (Strong Monotonicity), FD24 (Walras' Law)*

We prove two implications:

**(1) Strong Monotonicity $\Rightarrow$ Monotonicity:**

- Take any $x \neq y$.
- For (a): If $x_k \ge y_k$ for all $k$, then by strong monotonicity: if $x_l > y_l$ for any $l$, $x \succ y$. If $x = y$ (equal in all components), then $x \sim y$. Either way, $x \succeq y$. So (a) holds.
- For (b): If $x_k > y_k$ for ALL $k$, then clearly $x_k \ge y_k$ for all $k$ and $x_l > y_l$ for at least one $l$ (in fact, all). So by strong monotonicity, $x \succ y$.

Hence strong monotonicity implies monotonicity.

**(2) Monotonicity $\Rightarrow$ Local Non-Satiation (LNS):**

LNS: For every $x \in X$ and every $\varepsilon > 0$, there exists $y \in X$ with $\|y - x\| < \varepsilon$ such that $y \succ x$.

- Take any bundle $x = (x_1, x_2, \ldots, x_N)$ and any $\varepsilon > 0$.
- Construct $y = (x_1 + \delta, x_2 + \delta, \ldots, x_N + \delta)$ where $\delta = \varepsilon/\sqrt{N} > 0$.
- Then $y_k > x_k$ for ALL $k$, so by monotonicity (condition b), $y \succ x$.
- The Euclidean distance $\|y - x\| = \sqrt{N \delta^2} = \delta\sqrt{N} = \varepsilon$.
- Therefore for any $\varepsilon > 0$ we found a $y$ within $\varepsilon$ of $x$ that is strictly preferred. This is precisely LNS.

**Chain:** Strong Monotonicity $\Rightarrow$ Monotonicity $\Rightarrow$ LNS.

**Note:** The converse does NOT hold. LNS does not imply monotonicity (e.g., preferences with a satiation point and one bad good may satisfy LNS but fail monotonicity).

**Exam Tip:** This is a hierarchical relationship. For 5 marks: prove each arrow cleanly. Draw an $\varepsilon$-ball diagram for the LNS proof. Mention that LNS is the weakest and most commonly used assumption in modern micro theory.

> **Professor's Corner:** Three common mistakes: (1) For SM ⇒ M, students forget to handle the $x = y$ case — you need to note that if all components are equal, $x \sim y$, which is consistent with $x \succeq y$. (2) For M ⇒ LNS, using $\delta = \varepsilon/2$ with only one good increasing doesn't work under plain monotonicity (you'd only get weak preference). The trick is to increase *all* goods by $\delta = \varepsilon/\sqrt{N}$. (3) Few students mention that the converse M ⇒ SM does NOT hold — the Leontief counterexample is essential.
>
> → *See also: Section 1A Q6 (monotonicity definitions); Section 1B Q4 (Walras' Law depends on LNS)*

---

### Question 8 {#q-cons-08}

**Examine: (i) Homogeneity (ii) Homotheticity. (5/4)**

**Answer:**

> **Marking Guide [14 marks]:** Homogeneity definition & degree (2) | Properties (MRS, derivatives) (3) | Examples (2) | Homotheticity definition (2) | Key properties — Engel curves, shares, MRS (3) | Homogeneous ⊂ Homothetic + counterexample (2)
>
> → *See also: Section 1B Q5 (demand-side implications of homotheticity); DP 3A.Q4 (EoS and homotheticity in production)*
>
> **Formal Definition 11 — Homogeneous Function**
>
> A function $f: \mathbb{R}^N_+ \to \mathbb{R}$ is **homogeneous of degree $k$** if scaling all arguments by $a > 0$ multiplies the function value by $a^k$ (Munoz-Garcia, §1.6, pp.26–29; Koutsoyiannis, Ch.2 §B, p.25):
>
> $$f(a x_1, a x_2, \ldots, a x_N) = a^k f(x_1, x_2, \ldots, x_N)$$
>
> **Key properties:**
> - Derivatives of an HD($k$) function are HD($k-1$)
> - MRS is HD(0): $MRS_{ij}(a x) = MRS_{ij}(x)$ (constant along rays)
> - Euler's theorem: $\sum_{i=1}^N (\partial f/\partial x_i) \cdot x_i = k f(x)$
>
> **Examples:** Cobb-Douglas ($\alpha+\beta$), perfect substitutes (HD(1)), Leontief (HD(1)), CES (HD(1)).
>
> → *See also: FD12 (Homotheticity), FD25 (HD(0) of Demand)*
>
> **Formal Definition 12 — Homothetic Preferences**
>
> A monotonic transformation of a homogeneous function: $u(x) = g(v(x))$ with $g' > 0$ and $v$ homogeneous (Munoz-Garcia, §1.6, pp.26–29).
>
> **Equivalent condition:** $x \sim y \implies \alpha x \sim \alpha y$ for all $\alpha > 0$.
>
> **Key properties:**
> - MRS depends only on the ratio $x_i/x_j$, not on the scale
> - Engel curves are straight lines through the origin (income elasticity = 1)
> - Walrasian demand linear in income: $x(p,w) = w \cdot x(p,1)$
>
> **Classification:** Homogeneous $\subset$ Homothetic. Example of homothetic but not homogeneous: $u = xy + a$.
>
> → *See also: FD11 (Homogeneous Function), FD26 (Engel Curve)*

**(i) Homogeneity:**

A utility function $u(x)$ is homogeneous of degree $k$ if for all $a > 0$:

$$u(a x_1, a x_2, \ldots, a x_N) = a^k u(x_1, x_2, \ldots, x_N)$$

**Properties:**
1. Derivatives of an HD($k$) function are HD($k-1$).
2. Indifference curves of homogeneous functions are radial expansions: if $u(y) = u(z)$, then $u(ay) = u(az)$.
3. MRS is constant along rays from the origin (homogeneous of degree zero):

$$MRS_{12}(a x_1, a x_2) = MRS_{12}(x_1, x_2)$$

Proof: $MRS = MU_1/MU_2$, both numerator and denominator scale by $a^{k-1}$, which cancels.

**Examples:**
- Cobb-Douglas $u = x^\alpha y^\beta$: HD($\alpha+\beta$).
- Perfect substitutes $u = ax + by$: HD(1).
- Perfect complements $u = \min\{ax, by\}$: HD(1).
- CES: HD(1).

**(ii) Homotheticity:**

A utility function $u(x)$ is homothetic if it is a monotonic transformation of a homogeneous function: $u(x) = g(v(x))$ where $g$ is strictly increasing and $v$ is homogeneous of some degree.

**Key properties:**
1. MRS depends only on the ratio of goods ($x_1/x_2$), not on the consumption scale or utility level.
2. Indifference curves are radial expansions: if $y \sim z$, then $ay \sim az$ for all $a > 0$.
3. Income offer curves and Engel curves are straight lines through the origin.
4. The share of income spent on each good is constant as income changes (no luxuries or necessities).

**Homogeneous vs Homothetic:**
- All homogeneous functions are homothetic (take $g$ as identity).
- Not all homothetic functions are homogeneous.
  - Example: $u(x,y) = xy + a$ is homothetic (monotonic transform of $xy$ which is HD(2)) but NOT homogeneous: $u(tx, ty) = t^2 xy + a \neq t^k(xy + a)$ for any $k$.

| Feature | Homogeneous | Homothetic |
|---|---|---|
| Scaling property | $u(ax) = a^k u(x)$ | $u(ax) = g(a^k v(x))$ |
| MRS along rays | Constant | Constant |
| Engel curves | Straight line through origin | Straight line through origin |
| Examples | CD, linear, Leontief, CES | CD, linear, Leontief + any monotonic transformation |
| Stricter? | Yes (subset) | More general |

**Exam Tip:** For 5/4 marks: define each, state the key property (MRS constant on rays), give examples, and show the homogeneous $\subset$ homothetic relationship. Provide a counterexample of a homothetic but non-homogeneous function.

> **Professor's Corner:** The counterexample $u = xy + a$ (homothetic but not homogeneous) is the make-or-break example — examiners specifically look for it. Also note: homogeneity of Walrasian demand ($x(ap,aw)=x(p,w)$) is HD(0) and requires no preference assumptions (it's a property of the budget set, not preferences). Homotheticity of *preferences* is an assumption. A students distinguish these sharply.
>
> → *See also: Section 1B Q5 (demand-focus version of this question); DP 3A.Q4 (EoS — different homotheticity in production)*

---

### Question 9 {#q-cons-09}

**Prove quasi-concave utility $U(X,Y) \iff dMRS/dX < 0$. (8)**

**Answer:**

> **Marking Guide [14 marks]:** MRS formula & IC slope (2) | Bordered Hessian quasiconcavity condition (3) | $dMRS/dx$ derivation — implicit differentiation (5) | Sign equivalence proof (2) | Interpretation (2)
>
> ⭐ **High-Yield** — This is the most technically demanding proof in Section 1A. The equivalence between quasiconcavity and diminishing MRS ties preference theory (convexity) to calculus (bordered Hessian). Expect this as an 8-mark proof or as embedded reasoning in a UMP question.
>
> **Formal Definition 13 — Marginal Rate of Substitution (MRS)**
>
> The MRS between goods $i$ and $j$ measures the rate at which the consumer is willing to trade good $j$ for good $i$ while maintaining constant utility (Munoz-Garcia, §1.5, p.18; Koutsoyiannis, Ch.2 §B, p.23):
>
> $$MRS_{ij}(x) = \frac{MU_i(x)}{MU_j(x)} = \frac{\partial u/\partial x_i}{\partial u/\partial x_j}$$
>
> Along an indifference curve ($du = 0$): $MRS_{ij} = -\left. dx_j/dx_i \right|_{du=0}$.
>
> **Key insight:** The MRS is invariant to monotonic transformations of utility (the ratio $MU_i/MU_j$ cancels out), making it a "real" economic object. At an interior UMP optimum, $MRS_{ij} = p_i/p_j$.
>
> → *See also: FD14 (Diminishing MRS), FD5 (Quasiconcavity)*
>
> **Formal Definition 14 — Diminishing MRS**
>
> A utility function exhibits **diminishing MRS** if $MRS_{xy}$ decreases as $x$ increases along an indifference curve (Munoz-Garcia, §1.5, pp.18–20):
>
> $$\frac{d MRS_{xy}}{dx} < 0 \quad \text{along an IC}$$
>
> **Equivalence:** Diminishing MRS $\iff$ strict quasiconcavity $\iff$ strictly convex preferences. The calculus condition for $n=2$:
>
> $$\frac{dMRS}{dx} = \frac{u_x^2 u_{yy} - 2u_x u_y u_{xy} + u_y^2 u_{xx}}{u_y^3} < 0$$
>
> where the numerator is the negative of the bordered Hessian determinant.
>
> **Economic interpretation:** As $x$ substitutes for $y$, the IC flattens — each additional unit of $x$ requires less $y$ to be given up.
>
> → *See also: FD13 (MRS), FD6 (Quasiconcavity)*

We prove: quasiconcavity of utility (convex preferences) is equivalent to diminishing MRS along an indifference curve.

**Step 1 — MRS formula:**

For utility $u(x,y)$,

$$MRS_{xy} = \frac{MU_x}{MU_y} = \frac{\partial u/\partial x}{\partial u/\partial y}$$

Along an indifference curve, $du = 0$:

$$du = \frac{\partial u}{\partial x} dx + \frac{\partial u}{\partial y} dy = 0$$

So

$$\frac{dy}{dx} = -\frac{\partial u/\partial x}{\partial u/\partial y} = -MRS$$

**Step 2 — Quasiconcavity condition (bordered Hessian):**

For a function of two variables, quasiconcavity requires the bordered Hessian to be negative semidefinite. The $(3 \times 3)$ bordered Hessian is:

$$
\overline{H} = \begin{vmatrix}
0 & u_x & u_y \\
u_x & u_{xx} & u_{xy} \\
u_y & u_{yx} & u_{yy}
\end{vmatrix}
$$

For quasiconcavity, the principal minors must alternate in sign: $|\overline{H}_2| \ge 0$. This simplifies to:

$$2 u_x u_y u_{xy} - u_x^2 u_{yy} - u_y^2 u_{xx} \ge 0$$

**Step 3 — $dMRS/dx$ derivation:**

$$MRS = \frac{u_x}{u_y}$$

Differentiate $MRS$ with respect to $x$ along an indifference curve (total derivative, accounting for $y = y(x)$):

$$\frac{dMRS}{dx} = \frac{d(u_x/u_y)}{dx} = \frac{u_y[u_{xx} + u_{xy} y'(x)] - u_x[u_{yx} + u_{yy} y'(x)]}{u_y^2}$$

Where $y'(x) = dy/dx = -u_x/u_y$ along the IC.

Substituting:

$$\frac{dMRS}{dx} = \frac{u_y[u_{xx} - u_{xy}(u_x/u_y)] - u_x[u_{yx} - u_{yy}(u_x/u_y)]}{u_y^2}$$

Multiplying numerator and denominator by $u_y$:

$$\frac{dMRS}{dx} = \frac{u_y^2 u_{xx} - u_y u_{xy} u_x - u_x u_y u_{xy} + u_x^2 u_{yy}}{u_y^3}$$

The numerator simplifies to:

$$\text{Numerator} = u_x^2 u_{yy} - 2 u_x u_y u_{xy} + u_y^2 u_{xx}$$

Note this is:

$$-(2 u_x u_y u_{xy} - u_x^2 u_{yy} - u_y^2 u_{xx})$$

**Step 4 — Equivalence:**

- Quasiconcavity requires: $2 u_x u_y u_{xy} - u_x^2 u_{yy} - u_y^2 u_{xx} \ge 0$
- Equivalently: $-(u_x^2 u_{yy} - 2 u_x u_y u_{xy} + u_y^2 u_{xx}) \ge 0$
- Or: $u_x^2 u_{yy} - 2 u_x u_y u_{xy} + u_y^2 u_{xx} \le 0$
- This numerator is exactly the numerator of $dMRS/dx$ (up to the positive denominator $u_y^3 > 0$).

Hence:

$$\frac{dMRS}{dx} < 0 \iff \text{numerator} < 0 \iff \text{quasiconcavity holds}$$

**Interpretation:** Diminishing MRS means as $x$ increases (substituting for $y$), the consumer requires increasingly less $y$ to give up for an additional unit of $x$ — i.e., the IC flattens as we move right. This is the graphical manifestation of convex preferences.

**Exam Tip:** For 8 marks, show the derivation cleanly. Focus on the equivalence chain: $dMRS/dx < 0 \Rightarrow$ numerator $< 0 \Rightarrow$ bordered Hessian condition $\Rightarrow$ quasiconcavity. Do NOT skip the implicit differentiation step. Knowing the bordered Hessian expression adds sophistication.

> **Professor's Corner:** This derivation separates A students from the rest. The critical insight: $dMRS/dx$ shares a numerator with the bordered Hessian determinant (up to sign). Most students can compute $dMRS/dx$ but cannot connect it to the quasiconcavity condition. The chain is: $dMRS/dx < 0$ ⇔ $u_x^2 u_{yy} - 2u_x u_y u_{xy} + u_y^2 u_{xx} < 0$ ⇔ bordered Hessian $> 0$ ⇔ strict quasiconcavity. Memorize the numerator form — it reappears in duality theory. Also note: for $n > 2$, the bordered Hessian condition is more complex (principal minors alternate in sign); the two-good case is a simplification.
>
> → *See also: Section 1A Q4 (quasiconcavity ⇔ convex UCS); Section 1A Q10 (specific application)*

---

### Question 10 {#q-cons-10}

**Does $U = X + \log(Y)$ have convex indifference curves? Provide proof. (∼3)**

**Answer:**

> **Marking Guide [14 marks]:** MRS computation (3) | $dMRS/dx$ derivation along IC (5) | Sign conclusion & interpretation (3) | Bordered Hessian verification (3)
>
> **Formal Definition 15 — Quasilinear Utility**
>
> A utility function of the form $u(x, y) = f(x) + y$, where $f$ is strictly concave and $y$ is a numeraire good, exhibits **quasilinear** preferences (Munoz-Garcia, §1.6, pp.29–30):
>
> $$u(x_1, \ldots, x_{N-1}, y) = f(x_1, \ldots, x_{N-1}) + y$$
>
> **Key properties:**
> - Zero income effect for the nonlinear goods ($x$): $\partial x/\partial w = 0$
> - All income effects concentrated on the numeraire good $y$
> - MRS depends only on $x$: $MRS_{xy} = f'(x)$
> - CV = EV = CS in welfare analysis (Willig bounds collapse)
>
> **Classification:** Quasilinear preferences violate homotheticity — Engel curves are not rays through the origin. The canonical example is $u = \ln x + y$ or $u = x + \ln y$.
>
> → *See also: FD28 (Quasilinear Demand), FD29 (Corner Solution)*

**Step 1: Compute MRS.**
- $u(x,y) = x + \ln y$
- $MU_x = \partial u/\partial x = 1$
- $MU_y = \partial u/\partial y = 1/y$
- $MRS_{xy} = MU_x / MU_y = 1 / (1/y) = y$

**Step 2: Check if MRS is diminishing in $x$.**

Along an indifference curve, $du = 0$:

$$dx + (1/y) dy = 0 \Rightarrow \frac{dy}{dx} = -y$$

This also means: as $x$ increases, $y$ must decrease to stay on the same IC. So $y = y(x)$ is decreasing in $x$.

Now differentiate $MRS = y$ with respect to $x$ along the IC:

$$\frac{dMRS}{dx} = \frac{dy}{dx} \quad (\text{by chain rule, since } MRS = y)$$

$$\frac{dy}{dx} = -y \quad (\text{from above})$$

Hence $dMRS/dx = -y < 0$ for any positive $y$.

**Conclusion:** Yes, MRS declines as $x$ increases (since $-y < 0$). Therefore indifference curves are convex (strictly diminishing MRS).

**Alternative verification via the bordered Hessian:**
- $u_x = 1$, $u_y = 1/y$
- $u_{xx} = 0$, $u_{xy} = 0$, $u_{yy} = -1/y^2$
- Bordered Hessian determinant: $2u_x u_y u_{xy} - u_x^2 u_{yy} - u_y^2 u_{xx}$
- $= 0 - 1(-1/y^2) - (1/y^2)(0) = 1/y^2 > 0$
- Satisfies quasiconcavity condition, confirming convex ICs.

**Exam Tip:** Short question (∼3 marks). Compute MRS, show $dMRS/dx < 0$. The key insight is that $MRS = y$, which is decreasing along the IC because $y$ falls as $x$ rises.

> **Professor's Corner:** This is a neat application of Q9's general result. The elegant shortcut: since $MRS = y$ and $dy/dx = -y$ along the IC, $dMRS/dx = -y < 0$ immediately. No need for the full bordered Hessian — though including it as verification shows depth. Note also that the quasilinear form $x + \ln y$ has zero income effect for $y$ — this becomes important in 1B Q7 and welfare analysis (WF Q5 where CV = EV = CS for quasilinear utilities).
>
> → *See also: Section 1A Q9 (general dMRS/dx equivalence); Section 1B Q7 (demand for quasilinear); WF Q5 (Willig bounds — quasilinear gives CV = EV = CS)*

---

# Section 1B — Utility Maximization & Demand

---

### Question 1 {#q-cons-1b-01}

**Cobb-Douglas: Derive Walrasian demand, examine properties. (7)**

**Answer:**

> **Marking Guide [14 marks]:** Lagrangian setup & FOCs (3) | Tangency condition (2) | Demand derivation (3) | Homogeneity & Walras' Law checks (3) | Own-price/cross-price/income effects (3)
>
> ⭐ **High-Yield** — Cobb-Douglas is THE canonical utility function. Its closed-form solutions for Walrasian demand, indirect utility, Hicksian demand, and expenditure function are the backbone of Section 1B. Expect one full question set (Q1-Q3) as a block worth ~20 marks across parts (a), (b), (c).
>
> **Formal Definition 16 — Walrasian (Marshallian) Demand**
>
> The **Walrasian demand correspondence** $x(p,w) \subseteq X$ solves the UMP (FD17): the set of affordable bundles that maximize utility given prices $p$ and wealth $w$ (Munoz-Garcia, §2.1, pp.78–79):
>
> $$x(p,w) = \{ x \in X : p \cdot x \le w \text{ and } u(x) \ge u(y) \text{ for all } y \text{ with } p \cdot y \le w \}$$
>
> **Properties** (under continuity + LNS + convexity):
> - HD(0) in $(p,w)$: $x(ap, aw) = x(p,w)$
> - Satisfies Walras' Law: $p \cdot x = w$ for all $x \in x(p,w)$
> - Convex-valued if preferences convex; single-valued if strictly convex
>
> **Notation:** $x(p,w)$ (uncompensated). Contrast with Hicksian demand $h(p,u)$.
>
> → *See also: FD17 (UMP), FD21 (Hicksian Demand)*
>
> **Formal Definition 17 — Utility Maximization Problem (UMP)**
>
> The consumer's primal problem: choose the consumption bundle maximizing utility subject to the budget constraint (Munoz-Garcia, §2.1, pp.78–79):
>
> $$\max_{x \ge 0} u(x) \quad \text{subject to} \quad p \cdot x \le w$$
>
> **Solution:** Walrasian demand $x(p,w)$ (FD16) and indirect utility $v(p,w) = u(x(p,w))$ (FD18).
>
> **Duality:** The UMP is the dual of the EMP (FD20). Under continuity and LNS: $x(p,w) = h(p, v(p,w))$ and $h(p,u) = x(p, e(p,u))$.
>
> **Sufficient conditions for interior solution:** (1) $u$ quasiconcave, (2) $u$ satisfies LNS, (3) $\nabla u \neq 0$.
>
> → *See also: FD16 (Walrasian Demand), FD20 (EMP)*

Consider $u(x_1, x_2) = x_1^\alpha x_2^\beta$, with $\alpha, \beta > 0$. Budget: $p_1 x_1 + p_2 x_2 = w$.

**Derivation via tangency condition:**

Step 1: Lagrangian:

$$\mathcal{L} = x_1^\alpha x_2^\beta + \lambda(w - p_1 x_1 - p_2 x_2)$$

Step 2: FOCs:

$$
\begin{aligned}
\frac{\partial \mathcal{L}}{\partial x_1} &= \alpha x_1^{\alpha-1} x_2^\beta - \lambda p_1 = 0 \quad &(1) \\[4pt]
\frac{\partial \mathcal{L}}{\partial x_2} &= \beta x_1^\alpha x_2^{\beta-1} - \lambda p_2 = 0 \quad &(2) \\[4pt]
\frac{\partial \mathcal{L}}{\partial \lambda} &= w - p_1 x_1 - p_2 x_2 = 0 \quad &(3)
\end{aligned}
$$

Step 3: From (1) and (2):

$$\frac{\alpha x_1^{\alpha-1} x_2^\beta}{\beta x_1^\alpha x_2^{\beta-1}} = \frac{p_1}{p_2}$$

$$\frac{\alpha x_2}{\beta x_1} = \frac{p_1}{p_2}$$

$$x_2 = \frac{\beta}{\alpha} \cdot \frac{p_1}{p_2} x_1$$

Step 4: Substitute into (3):

$$p_1 x_1 + p_2\left[\frac{\beta}{\alpha} \cdot \frac{p_1}{p_2} x_1\right] = w$$

$$p_1 x_1 + \frac{\beta}{\alpha} p_1 x_1 = w$$

$$p_1 x_1\left(1 + \frac{\beta}{\alpha}\right) = w$$

$$x_1(p_1, p_2, w) = \frac{\alpha}{\alpha+\beta} \cdot \frac{w}{p_1}$$

Similarly:

$$x_2(p_1, p_2, w) = \frac{\beta}{\alpha+\beta} \cdot \frac{w}{p_2}$$

**Walrasian (Marshallian) Demand Functions:**

$$x_1(p,w) = \frac{\alpha}{\alpha+\beta} \cdot \frac{w}{p_1}, \qquad x_2(p,w) = \frac{\beta}{\alpha+\beta} \cdot \frac{w}{p_2}$$

**Properties:**

| Property | Verification |
|---|---|
| **Homogeneity of degree 0** | $x_1(tp, tw) = \frac{\alpha}{\alpha+\beta} \cdot \frac{tw}{tp_1} = x_1(p,w)$. Same for $x_2$. |
| **Walras' Law** | $p_1 x_1 + p_2 x_2 = \frac{\alpha w}{\alpha+\beta} + \frac{\beta w}{\alpha+\beta} = w$. Holds. |
| **Own-price effect** | $\frac{\partial x_1}{\partial p_1} = -\frac{\alpha}{\alpha+\beta} \cdot \frac{w}{p_1^2} < 0$. Demand slopes downward (usual good). |
| **Cross-price effect** | $\frac{\partial x_1}{\partial p_2} = 0$. No cross-price effect (zero). |
| **Income effect** | $\frac{\partial x_1}{\partial w} = \frac{\alpha}{\alpha+\beta} \cdot \frac{1}{p_1} > 0$. Both goods are normal. |
| **Expenditure shares** | $s_1 = \frac{p_1 x_1}{w} = \frac{\alpha}{\alpha+\beta}$; $s_2 = \frac{\beta}{\alpha+\beta}$. Both are CONSTANT. |

**Exam Tip:** For 7 marks, derive fully, then systematically check each property. The constant expenditure share property is unique to Cobb-Douglas and is a key exam point. Note: when $\alpha + \beta = 1$ (common normalization), shares are $\alpha$ and $\beta$.

> **Professor's Corner:** Three pitfalls: (1) Students forget to verify Walras' Law explicitly — substitute demands back into the budget to confirm. (2) The cross-price effect being zero ($\partial x_1/\partial p_2 = 0$) is a special feature of Cobb-Douglas (log utilities are additively separable), NOT a general property. (3) Normalizing $\alpha + \beta = 1$ saves time, but state it explicitly; unnormalized answers are equally correct. The constant share property is the single most testable result — memorise $s_k = \alpha_k/(\sum \alpha)$.
>
> → *See also: Section 1B Q2 (indirect utility); Section 1B Q3 (EMP/Hicksian); WF Q3 (CD welfare computation)*

---

### Question 2 {#q-cons-1b-02}

**Cobb-Douglas: Get indirect utility, explain properties, verify Roy's identity. (7)**

**Answer:**

> **Marking Guide [14 marks]:** Indirect utility derivation from Walrasian demands (3) | Properties: HD(0), monotonicity, quasiconvexity (3) | Roy's identity statement (2) | Verification for goods 1 & 2 (4) | Interpretation & duality insight (2)
>
> ⭐ **High-Yield** — Roy's identity bridges UMP and observable demand: it recovers Walrasian demand from indirect utility without re-solving optimization. This is the first duality result in the course and is frequently tested as a verification question.
>
> **Formal Definition 18 — Indirect Utility Function**
>
> The **indirect utility function** $v(p,w)$ gives maximum utility achievable at prices $p$ and wealth $w$, obtained by substituting Walrasian demand into the direct utility (Munoz-Garcia, §2.2, pp.82–84):
>
> $$v(p,w) = \max_{x \ge 0} \{ u(x) : p \cdot x \le w \} = u(x(p,w))$$
>
> **Properties:**
> - HD(0) in $(p,w)$: $v(ap,aw) = v(p,w)$
> - Strictly increasing in $w$: $\partial v/\partial w > 0$ (by LNS)
> - Non-increasing in $p_k$: $\partial v/\partial p_k \le 0$
> - Quasiconvex in $(p,w)$: $\{ (p,w) : v(p,w) \le \bar{v} \}$ is convex
>
> → *See also: FD16 (Walrasian Demand), FD19 (Roy's Identity)*
>
> **Formal Definition 19 — Roy's Identity**
>
> If $v(p,w)$ is differentiable at $(p,w)$ with $\partial v/\partial w \neq 0$, Walrasian demand is recovered as (Munoz-Garcia, §2.2, pp.84–86):
>
> $$x_k(p,w) = -\frac{\partial v(p,w)/\partial p_k}{\partial v(p,w)/\partial w} \quad \text{for } k = 1, \ldots, N$$
>
> **Proof sketch (envelope theorem):** Differentiate $v(p,w) = u(x(p,w))$ w.r.t. $p_k$. The indirect effect through $x(p,w)$ vanishes at the optimum, leaving $\partial v/\partial p_k = -\lambda x_k$, where $\lambda = \partial v/\partial w$ is the Lagrange multiplier.
>
> **Key insight:** Roy's Identity recovers observable demand without re-solving the UMP. It is the consumer-theory analog of Hotelling's Lemma in production.
>
> → *See also: FD18 (Indirect Utility), FD23 (Shephard's Lemma — EMP analog)*

**Step 1: Indirect utility function.**

Substitute Walrasian demands into the utility function:

$$
\begin{aligned}
v(p,w) &= u(x_1(p,w), x_2(p,w)) \\[4pt]
&= \left[\frac{\alpha w}{(\alpha+\beta)p_1}\right]^\alpha \cdot \left[\frac{\beta w}{(\alpha+\beta)p_2}\right]^\beta \\[4pt]
&= \frac{\alpha^\alpha \beta^\beta}{(\alpha+\beta)^{\alpha+\beta}} \cdot w^{\alpha+\beta} \cdot p_1^{-\alpha} \cdot p_2^{-\beta}
\end{aligned}
$$

With normalization $\alpha + \beta = 1$ (common in exams, set $\beta = 1 - \alpha$):

$$v(p,w) = w \cdot p_1^{-\alpha} \cdot p_2^{-(1-\alpha)} \cdot \alpha^\alpha (1-\alpha)^{1-\alpha}$$

Or more compactly: $v(p,w) = B \cdot w^{\alpha+\beta} \cdot p_1^{-\alpha} \cdot p_2^{-\beta}$, where $B = \alpha^\alpha \beta^\beta / (\alpha+\beta)^{\alpha+\beta}$.

**Properties of indirect utility function:**

| Property | Verification |
|---|---|
| **HD(0) in $(p,w)$** | $v(tp, tw) = B (tw)^{\alpha+\beta} (tp_1)^{-\alpha} (tp_2)^{-\beta} = t^{\alpha+\beta-\alpha-\beta} v(p,w) = v(p,w)$ |
| **Strictly increasing in $w$** | $\partial v/\partial w = (\alpha+\beta) \cdot v/w > 0$ |
| **Non-increasing in $p_k$** | $\partial v/\partial p_1 = -\alpha \cdot v/p_1 < 0$; $\partial v/\partial p_2 = -\beta \cdot v/p_2 < 0$ |
| **Quasiconvex in $(p,w)$** | The set $\{(p,w): v(p,w) \le \bar{u}\}$ is convex |

**Step 2: Verify Roy's identity.**

Roy's identity: $\displaystyle x_k(p,w) = -\frac{\partial v/\partial p_k}{\partial v/\partial w}$

For good 1:

$$\frac{\partial v}{\partial p_1} = -\alpha \cdot B \cdot w^{\alpha+\beta} \cdot p_1^{-\alpha-1} \cdot p_2^{-\beta} = -\frac{\alpha v}{p_1}$$

$$\frac{\partial v}{\partial w} = \frac{(\alpha+\beta) v}{w}$$

Therefore:

$$-\frac{\partial v/\partial p_1}{\partial v/\partial w} = -\frac{-\alpha v/p_1}{(\alpha+\beta)v/w} = \frac{\alpha v}{p_1} \cdot \frac{w}{(\alpha+\beta)v} = \frac{\alpha w}{(\alpha+\beta)p_1} = x_1(p,w) \quad \checkmark$$

Similarly for good 2:

$$-\frac{\partial v/\partial p_2}{\partial v/\partial w} = \frac{\beta w}{(\alpha+\beta)p_2} = x_2(p,w) \quad \checkmark$$

**Roy's Identity holds.** This confirms that the indirect utility function correctly represents the underlying preferences and that we can recover Walrasian demand from $v(p,w)$ without re-solving the UMP.

**Exam Tip:** For 7 marks, show the derivation from substitution, state properties, then verify Roy's identity explicitly. The normalization $\alpha+\beta=1$ simplifies notation. Roy's identity is often tested: memorize the formula $x_k = -(\partial v/\partial p_k)/(\partial v/\partial w)$.

> **Professor's Corner:** Roy's identity is free marks if you can compute derivatives cleanly. The most common error: forgetting the minus sign. Second: miscomputing $\partial v/\partial p_k$ (it's $-\alpha v/p_1$, not $-\alpha B w^{\alpha+\beta} p_1^{-\alpha-1} p_2^{-\beta}$ — factor $v$ out for elegance). A students simplify to $-\alpha v/p_1$ and then cancel $v$ with the denominator's $v$. Also note: Roy's identity holds for any indirect utility function satisfying standard properties — Cobb-Douglas is just the verification.
>
> → *See also: Section 1B Q1 (Walrasian demand); Section 1B Q3 (EMP parallels with Shephard's lemma); DP 3B.Q1 (Hotelling's lemma — producer-side analog)*

---

### Question 3 {#q-cons-1b-03}

**Cobb-Douglas: Solve expenditure minimization, examine compensated demand. (6)**

**Answer:**

> **Marking Guide [14 marks]:** EMP setup & Lagrangian (2) | FOCs & tangency condition (2) | Hicksian demand derivation (3) | Expenditure function derivation (3) | Properties & duality checks (2) | Shephard's lemma verification (2)
>
> ⭐ **High-Yield** — EMP/Hicksian demand is the mirror image of UMP/Walrasian demand. Together they form the duality core of consumer theory. Shephard's lemma is the EMP analog of Roy's identity — expect them to appear together in a question pairing.
>
> **Formal Definition 20 — Expenditure Minimization Problem (EMP)**
>
> The **EMP** finds the cheapest bundle that achieves a target utility level $\bar{u}$ (Munoz-Garcia, §2.3, pp.86–91):
>
> $$\min_{x \ge 0} \; p \cdot x \quad \text{subject to} \quad u(x) \ge \bar{u}$$
>
> **Solution:** Hicksian demand $h(p, \bar{u})$ and expenditure function $e(p, \bar{u}) = p \cdot h(p, \bar{u})$.
>
> **Duality with UMP (FD17):** Under continuity and LNS: $x(p,w) = h(p, v(p,w))$, $h(p,u) = x(p, e(p,u))$, and $e(p, v(p,w)) = w$.
>
> → *See also: FD17 (UMP), FD21 (Hicksian Demand), FD22 (Expenditure Function)*
>
> **Formal Definition 21 — Hicksian (Compensated) Demand**
>
> The **Hicksian demand correspondence** $h(p, \bar{u})$ gives the cost-minimizing bundle to reach utility $\bar{u}$ at prices $p$ (Munoz-Garcia, §2.3, pp.86–91):
>
> $$h(p, \bar{u}) = \arg\min_{x \ge 0} \{ p \cdot x : u(x) \ge \bar{u} \}$$
>
> **Properties:**
> - HD(0) in $p$: $h(ap, u) = h(p, u)$
> - **Compensated Law of Demand:** $\partial h_k/\partial p_k \le 0$ (own-price effect non-positive)
> - **Symmetry:** $\partial h_k/\partial p_l = \partial h_l/\partial p_k$ (Slutsky symmetry)
>
> **Hicksian vs Marshallian:** Hicksian demand holds utility constant; Marshallian holds income constant. Linked via the Slutsky equation: $\partial x_k/\partial p_l = \partial h_k/\partial p_l - x_l \cdot \partial x_k/\partial w$.
>
> → *See also: FD16 (Walrasian Demand), FD22 (Expenditure Function), FD23 (Shephard's Lemma)*
>
> **Formal Definition 22 — Expenditure Function**
>
> The **expenditure function** $e(p, u)$ gives minimum expenditure to achieve utility $u$ at prices $p$ (Munoz-Garcia, §2.3, pp.91–94):
>
> $$e(p, u) = \min_{x \ge 0} \{ p \cdot x : u(x) \ge u \} = p \cdot h(p, u)$$
>
> **Properties:**
> - HD(1) in $p$: $e(ap, u) = a \cdot e(p, u)$
> - Strictly increasing in $u$: $\partial e/\partial u > 0$
> - Concave in $p$: $e(\alpha p + (1-\alpha)p', u) \ge \alpha e(p, u) + (1-\alpha)e(p', u)$
>
> **Key insight:** The expenditure function is the building block of welfare analysis: CV = $e(p^0, u^1) - e(p^0, u^0)$, EV = $e(p^1, u^0) - e(p^1, u^1)$.
>
> → *See also: FD19 (EMP), FD21 (Hicksian Demand), FD23 (Shephard's Lemma)*
>
> **Formal Definition 23 — Shephard's Lemma**
>
> If $e(p, u)$ is differentiable in $p$, Hicksian demand is its gradient (Munoz-Garcia, §2.3, pp.91–94):
>
> $$h_k(p, u) = \frac{\partial e(p, u)}{\partial p_k} \quad \text{for } k = 1, \ldots, N$$
>
> **Proof (envelope theorem):** $e(p, u) = p \cdot h(p, u)$. The indirect effect of $p_k$ on $h$ vanishes at the optimum by the FOCs.
>
> **Key insight:** Shephard's Lemma is the EMP analog of Roy's Identity (FD19). Together they provide a complete duality framework: from $v(p,w)$ recover Walrasian demand (Roy); from $e(p,u)$ recover Hicksian demand (Shephard).
>
> → *See also: FD19 (Roy's Identity), FD22 (Expenditure Function)*

**EMP setup:** Minimize $p_1 x_1 + p_2 x_2$ subject to $u(x_1, x_2) = x_1^\alpha x_2^\beta \ge \bar{u}$.

**Step 1: Lagrangian.**

$$\mathcal{L} = p_1 x_1 + p_2 x_2 + \mu(\bar{u} - x_1^\alpha x_2^\beta)$$

**Step 2: FOCs.**

$$
\begin{aligned}
\frac{\partial \mathcal{L}}{\partial x_1} &= p_1 - \mu \alpha x_1^{\alpha-1} x_2^\beta = 0 \quad &(1) \\[4pt]
\frac{\partial \mathcal{L}}{\partial x_2} &= p_2 - \mu \beta x_1^\alpha x_2^{\beta-1} = 0 \quad &(2) \\[4pt]
\frac{\partial \mathcal{L}}{\partial \mu} &= \bar{u} - x_1^\alpha x_2^\beta = 0 \quad &(3)
\end{aligned}
$$

**Step 3: Tangency condition from (1) and (2):**

$$\frac{p_1}{p_2} = \frac{\alpha x_2}{\beta x_1} \Rightarrow x_2 = \frac{\beta}{\alpha} \cdot \frac{p_1}{p_2} x_1$$

Same ratio as in UMP!

**Step 4: From (3) using the ratio:**

$$\bar{u} = x_1^\alpha \left[\frac{\beta}{\alpha} \cdot \frac{p_1}{p_2} x_1\right]^\beta = x_1^{\alpha+\beta} \cdot \left(\frac{\beta}{\alpha}\right)^\beta \cdot \left(\frac{p_1}{p_2}\right)^\beta$$

**Hicksian (Compensated) Demand Functions:**

$$h_1(p, \bar{u}) = \bar{u}^{1/(\alpha+\beta)} \cdot \left(\frac{\alpha}{\beta}\right)^{\beta/(\alpha+\beta)} \cdot \left(\frac{p_2}{p_1}\right)^{\beta/(\alpha+\beta)}$$

$$h_2(p, \bar{u}) = \bar{u}^{1/(\alpha+\beta)} \cdot \left(\frac{\beta}{\alpha}\right)^{\alpha/(\alpha+\beta)} \cdot \left(\frac{p_1}{p_2}\right)^{\alpha/(\alpha+\beta)}$$

With normalization $\alpha+\beta=1$:

$$h_1(p, \bar{u}) = \bar{u} \cdot \left(\frac{\alpha}{\beta}\right)^\beta \cdot \left(\frac{p_2}{p_1}\right)^\beta$$

$$h_2(p, \bar{u}) = \bar{u} \cdot \left(\frac{\beta}{\alpha}\right)^\alpha \cdot \left(\frac{p_1}{p_2}\right)^\alpha$$

**Step 5: Expenditure function.**

$$
\begin{aligned}
e(p, \bar{u}) &= p_1 h_1 + p_2 h_2 \\[4pt]
&= \bar{u}^{1/(\alpha+\beta)} \left[ \left(\frac{\alpha}{\beta}\right)^{\beta/(\alpha+\beta)} p_1^{\alpha/(\alpha+\beta)} p_2^{\beta/(\alpha+\beta)} + \left(\frac{\beta}{\alpha}\right)^{\alpha/(\alpha+\beta)} p_1^{\alpha/(\alpha+\beta)} p_2^{\beta/(\alpha+\beta)} \right] \\[4pt]
&= \bar{u}^{1/(\alpha+\beta)} \cdot (\alpha+\beta) \cdot \left(\frac{p_1}{\alpha}\right)^{\alpha/(\alpha+\beta)} \left(\frac{p_2}{\beta}\right)^{\beta/(\alpha+\beta)}
\end{aligned}
$$

With $\alpha+\beta=1$:

$$e(p, \bar{u}) = \bar{u} \cdot \left(\frac{p_1}{\alpha}\right)^\alpha \left(\frac{p_2}{\beta}\right)^\beta$$

**Properties of Hicksian demand:**

| Property | Verification |
|---|---|
| **HD(0) in $p$** | $h(tp, u) = u \cdot (\alpha/\beta)^\beta \cdot (tp_2/tp_1)^\beta = h(p,u)$ |
| **Compensated law of demand** | $\partial h_1/\partial p_1 < 0$ |
| **No excess utility** | $u(h_1, h_2) = \bar{u}$ (by construction) |
| **Duality check** | $e(p, v(p,w)) = w$ and $v(p, e(p,\bar{u})) = \bar{u}$ |

**Exam Tip:** For 6 marks: set up EMP, derive FOCs, show tangency yields same ratio as UMP, solve for Hicksian demands, then compute expenditure function. Emphasize the duality relationship. With $\alpha+\beta=1$ the algebra simplifies significantly — use it.

> **Professor's Corner:** The single most important insight: the tangency condition from EMP yields the SAME ratio $x_2/x_1 = (\beta/\alpha)(p_1/p_2)$ as UMP — duality in action. The expenditure share is the same whether you're maximizing utility or minimizing expenditure. For Shephard's lemma verification: $\partial e/\partial p_1 = \bar{u}(\alpha/p_1)^\alpha (\beta/p_2)^\beta \cdot \alpha \cdot (1/\alpha) \dots$ — simplify carefully; the $\alpha$ cancels to give $\bar{u} \cdot (\alpha/\beta)^\beta \cdot (p_2/p_1)^\beta = h_1$. Practice this cancellation.
>
> → *See also: Section 1B Q1 (UMP duality partner); Section 1B Q2 (Roy's identity analog); WF Q1-Q3 (CV/EV directly use expenditure functions)*

---

### Question 4 {#q-cons-1b-04}

**Examine properties of Walrasian demand $x(p,w)$. When can UMP sufficient condition be violated? (10)**

**Answer:**

> **Marking Guide [14 marks]:** HD(0) property (2) | Walras' Law via LNS (2) | Convexity/uniqueness (2) | Other properties (2) | Three violation cases: non-monotonicity, non-quasiconcavity, zero gradient (4) | Summary table (2)
>
> ⭐ **High-Yield** — This question synthesizes everything from Section 1A into the UMP. The violation cases (especially non-quasiconcave preferences leading to corner solutions) are frequently tested and separate A from B students.
>
> **Formal Definition 24 — Walras' Law**
>
> For the UMP with locally non-satiated preferences (FD10), any optimal consumption bundle $x^* \in x(p,w)$ must satisfy the budget constraint with equality (Munoz-Garcia, §2.2, pp.79–80):
>
> $$p \cdot x^* = w \quad \text{for all } x^* \in x(p,w)$$
>
> **Proof (by contradiction):** If $p \cdot x^* < w$, LNS guarantees a strictly preferred bundle inside the $\varepsilon$-ball that remains affordable — contradicting optimality.
>
> **Key insight:** Walras' Law requires only LNS — not monotonicity, convexity, or continuity. It is fundamental for general equilibrium market-clearing conditions.
>
> → *See also: FD10 (LNS), FD16 (Walrasian Demand)*
>
> **Formal Definition 25 — Homogeneity of Degree Zero [HD(0)]**
>
> Walrasian demand $x(p,w)$ is **homogeneous of degree zero** in $(p,w)$: scaling all prices and income by the same factor leaves the budget set unchanged, hence demand unchanged (Munoz-Garcia, §2.2, p.80):
>
> $$x(ap, aw) = x(p,w) \quad \text{for all } a > 0$$
>
> **Implications:**
> - Demand depends only on **relative** prices and **real** income
> - No money illusion — if all prices and income double, the consumer buys the same bundle
> - Indirect utility $v(p,w)$ is HD(0); expenditure function $e(p,u)$ is HD(1) in $p$; Hicksian demand $h(p,u)$ is HD(0) in $p$
>
> **Key insight:** HD(0) of Walrasian demand does NOT require any preference assumptions — it follows purely from budget-set homogeneity.
>
> → *See also: FD11 (Homogeneous Function), FD16 (Walrasian Demand)*

**Properties of Walrasian demand $x(p,w)$:**

Assume $u(\cdot)$ is continuous, preferences satisfy LNS on $X = \mathbb{R}^L_+$.

**1. Homogeneity of degree zero:**
- $x(p, w) = x(ap, aw)$ for all $a > 0$.
- Reason: budget set is unchanged: $\{x: p \cdot x \le w\} = \{x: ap \cdot x \le aw\}$.
- No preference assumption needed.

**2. Walras' Law:**
- $p \cdot x = w$ for all $x \in x(p,w)$.
- Reason (by LNS): if $p \cdot x < w$, there exists $y$ epsilon-close to $x$ with $y \succ x$ and still affordable, contradicting optimality. So all wealth is spent.

**3. Convexity/Uniqueness:**
- If preferences are convex: $x(p,w)$ is a convex set (multiple optimal bundles possible).
- If preferences are strictly convex: $x(p,w)$ is single-valued (unique optimum).

**4. Other properties (follow from above):**
- $x(p,w)$ is continuous in $(p,w)$ if $u$ is continuous and strictly quasiconcave.
- For normal goods: $\partial x_k/\partial w > 0$; for inferior goods: $\partial x_k/\partial w < 0$.
- Usual goods: $\partial x_k/\partial p_k < 0$; Giffen goods: $\partial x_k/\partial p_k > 0$.

**When can UMP sufficient conditions be violated?**

The Kuhn-Tucker conditions are necessary for a max. They are sufficient when:

**(A) Non-monotone utility (violation of monotonicity/LNS):**
- If utility is non-monotone, the optimum can be at a corner where the tangency condition $MRS = p_1/p_2$ does NOT hold.
- Example: the consumer has a bliss point; the budget line may intersect the bliss region such that the optimum is at a boundary of the budget set.
- At corner solutions, some goods have zero consumption and $MU_i/p_i < MU_j/p_j$.

**(B) Non-quasiconcave utility:**
- If $u$ is not quasiconcave (UCS is not convex), the tangency condition may identify a minimum or a saddle point rather than a maximum.
- Graphically: the indifference curve may be tangent to the budget line at a point that gives LOWER utility than other affordable points.
- The true maximum is at a corner or boundary.

| Condition violated | What happens |
|---|---|
| Utility not monotone | Corner solution; $MU_i/p_i$ may not equalize across goods |
| Preferences not convex | Tangency identifies a minimum, not a maximum |
| $\nabla u = 0$ at some point | Bliss point; violates LNS; consumer would not spend all wealth |
| Budget set non-compact | No solution exists (Weierstrass fails) |

**(C) Zero gradient ($\nabla u = 0$):**
- If the gradient vanishes at some bundle (top of a "mountain"), this is a bliss point. Monotonicity/LNS fails since the consumer is satiated. Walras' Law may be violated.

**Exam Tip:** For 10 marks: list and explain each property with economic intuition. For the sufficient condition part: draw the three-violations diagram (non-monotone, non-quasiconcave, corner solution). The Kuhn-Tucker sufficient conditions are: (1) $u$ quasiconcave, (2) $u$ monotone, (3) $\nabla u \neq 0$.

> **Professor's Corner:** This is a synthesis question—it tests whether you understand the *boundaries* of UMP applicability. Top answers identify the three sufficient conditions explicitly (quasiconcavity, monotonicity/LNS, non-zero gradient) and match each to its violation scenario. The Giffen good paradox is NOT a violation—it satisfies all sufficient conditions but the income effect is large and negative. Don't confuse Giffen behavior with non-quasiconcavity. The corner solution case ($x_1 = 0$) is the most commonly tested on exams.
>
> → *See also: Section 1A Q1 (rationality assumptions); Section 1A Q7 (LNS chain); DP 2.Q1 (Giffen goods in demand estimation)*

---

### Question 5 {#q-cons-1b-05}

**Examine: (i) Homogeneity (ii) Homotheticity. (10)**

**Answer:**

> **Marking Guide [14 marks]:** Homogeneity HD(0) of Walrasian demand (2) | HD properties of $v(p,w)$, $e(p,u)$, $h(p,u)$ (2) | Homotheticity definition (2) | Demand implications table — Engel curves, shares, elasticities (4) | Examples & non-examples (2) | Homogeneous vs homothetic relationship (2)
>
> *[Note: This question appears to be a demand-focused version of Q8 from Section 1A. The answer below focuses on the demand-side implications.]*

**(i) Homogeneity of Walrasian demand:**

Walrasian demand $x(p,w)$ is **homogeneous of degree zero** in $(p,w)$:

$$x(ap, aw) = x(p,w) \quad \text{for all } a > 0$$

Reason: the budget set $\{x: p \cdot x \le w\}$ is identical to $\{x: ap \cdot x \le aw\}$. Scaling all prices and income by the same factor does not change the consumer's feasible set.

**Implications for demand functions:**
- Demand depends only on real prices (relative prices) and real income.
- If all prices and income double, the consumer buys exactly the same bundle.
- This is a property of any Walrasian demand derived from any well-defined UMP.

**For indirect utility:**
- $v(p,w)$ is HD(0) in $(p,w)$: $v(ap, aw) = v(p,w)$.

**For expenditure function:**
- $e(p, u)$ is HD(1) in $p$: $e(ap, u) = a \cdot e(p, u)$.

**For Hicksian demand:**
- $h(p, u)$ is HD(0) in $p$: $h(ap, u) = h(p, u)$.

**(ii) Homotheticity of preferences and its demand implications:**

A preference relation is homothetic if all indifference sets are related to proportional expansions along rays: if $x \sim y$ then $ax \sim ay$ for any $a > 0$.

**Demand implications:**

| Property | Explanation |
|---|---|
| **Engel curves are linear through origin** | $\frac{\partial x_k}{\partial w} \cdot \frac{w}{x_k} = 1$ (income elasticity = 1) |
| **Expenditure shares are constant** | $s_k = p_k x_k(p,w)/w$ independent of $w$ |
| **Income expansion paths are rays** | Optimal ratios $x_1/x_2$ are constant as $w$ varies |
| **MRS independent of utility level** | MRS depends only on the ratio $x_1/x_2$, not on how much is consumed |
| **No luxuries or necessities** | All goods have unit income elasticity |

> **Formal Definition 26 — Engel Curve**
>
> An **Engel curve** traces the relationship between the quantity demanded of a good and the consumer's income, holding prices constant (Munoz-Garcia, §2.5, pp.106–108; Koutsoyiannis, Ch.2 §B, p.25):
>
> $$x_k = f_k(w) \quad \text{with } p \text{ fixed}$$
>
> **Classification by income elasticity:**
> - Normal good: $\partial x_k/\partial w > 0$ (Engel curve upward sloping)
> - Inferior good: $\partial x_k/\partial w < 0$ (Engel curve downward sloping)
> - Luxury: $\varepsilon_{x,w} > 1$ (Engel curve convex)
> - Necessity: $0 < \varepsilon_{x,w} < 1$ (Engel curve concave)
>
> **For homothetic preferences (FD12):** Engel curves are straight lines through the origin: $x_k(p,w) = w \cdot x_k(p,1)$, unit income elasticity for all goods.
>
> **For quasilinear preferences (FD15/FD28):** Engel curves for the nonlinear good are flat beyond a threshold income (zero income effect).
>
> → *See also: FD12 (Homotheticity), FD15 (Quasilinear Utility)*

**Examples:**

- Cobb-Douglas: homothetic (constant shares $\alpha, \beta$).
- Perfect substitutes $u = ax + by$: homothetic.
- Perfect complements $u = \min\{ax, by\}$: homothetic.
- CES $u = (a x_1^\rho + b x_2^\rho)^{1/\rho}$: homothetic.

**Non-examples:**
- Quasilinear $u = v(x) + y$: NOT homothetic (Engel curve for $x$ is flat after some point).
- Stone-Geary (with subsistence): NOT homothetic (shares vary with income).

**Relationship between homogeneity and homotheticity:**
- Homogeneous utility $\Rightarrow$ homothetic preferences (monotonic transform with $g$ = identity).
- Homothetic preferences $\nRightarrow$ homogeneous utility (e.g., $u = xy + a$).
- Walrasian demand from homothetic preferences: $x(p,w) = x(p,1) \cdot w$ (linear in income).

**Exam Tip:** For 10 marks, treat this as a demand-focused question. Link homogeneity of demand (the property) to homotheticity of preferences (the assumption). Show the income-linearity property of demand under homotheticity. Use Engel curve diagrams to distinguish homothetic (line through origin) from non-homothetic preferences.

> **Professor's Corner:** This is the demand-side complement to Section 1A Q8 — together they form a complete picture. The key insight: HD(0) of Walrasian demand is a *property* of any solution to UMP (no preference assumptions needed—it follows from budget-set homogeneity). Homotheticity is an *assumption* about preferences. Watch for the question "Is Walrasian demand always homogeneous of degree zero?" — answer yes, trivially, because $B(p,w) = B(ap,aw)$. The income-linearity result $x(p,w) = w \cdot x(p,1)$ under homotheticity is the most testable corollary.
>
> → *See also: Section 1A Q8 (utility-side definitions); DP 3A.Q4 (EoS in production homotheticity)*

---

### Question 6 {#q-cons-1b-06}

**Negroni cocktail: $U = \min(G,V,C)$. Find Marshallian demand for Gin, Hicksian demand for Campari, expenditure function. (∼11)**

**Answer:**

> **Marking Guide [14 marks]:** Leontief setup & fixed-proportion insight (2) | Marshallian demand derivation for Gin (3) | Hicksian demand for Campari — EMP setup (3) | Expenditure function (2) | Duality checks (2) | Summary table (2)
>
> ⭐ **High-Yield** — Leontief is the second most tested functional form after Cobb-Douglas. The fixed-proportion structure tests whether you understand the *non-substitutability* case. It's the polar opposite of Cobb-Douglas and perfect substitutes, making it essential comparative material.
>
> **Formal Definition 27 — Leontief (Perfect Complements) Utility**
>
> The Leontief utility function represents preferences where goods are consumed in fixed proportions (Munoz-Garcia, §1.6, pp.28–29):
>
> $$u(x_1, x_2, \ldots, x_N) = \min\left\{\frac{x_1}{a_1}, \frac{x_2}{a_2}, \ldots, \frac{x_N}{a_N}\right\}$$
>
> **Key properties:**
> - **L-shaped ICs:** Right-angle indifference curves with kink at $x_i/x_j = a_i/a_j$
> - **Zero substitutability:** $\sigma = 0$ (elasticity of substitution)
> - **HD(1):** $u(tx) = t \cdot u(x)$
> - **Hicksian demand** is price-independent: $h_k(p, u) = a_k \cdot u$
> - **Marshallian demand:** $x_k(p,w) = a_k \cdot w / \sum_i a_i p_i$
>
> **Polar case:** Leontief ($\sigma = 0$) and perfect substitutes ($\sigma = \infty$) are opposite extremes of substitutability.
>
> → *See also: FD12 (MRS — undefined at Leontief kink), FD16 (Walrasian Demand)*

Leontief (perfect complements) utility: $u(G, V, C) = \min(G, V, C)$

This represents a Negroni cocktail where $G$ = gin, $V$ = sweet vermouth, $C$ = Campari, consumed in fixed 1:1:1 proportions.

**Part 1: Marshallian (Walrasian) demand for Gin.**

At the optimum, a rational consumer consumes in fixed proportion: $G = V = C = q$ (some quantity).

**Budget constraint:** $p_G G + p_V V + p_C C = w$

With $G = V = C = q$: $q(p_G + p_V + p_C) = w$

Therefore: $\displaystyle q = \frac{w}{p_G + p_V + p_C}$

**Marshallian demand for $G$ (and by symmetry for $V$ and $C$):**

$$G(p, w) = V(p, w) = C(p, w) = \frac{w}{p_G + p_V + p_C}$$

All three demands are identical by symmetry of the fixed-proportion recipe.

**Properties:**
- HD(0) in $(p,w)$: $G(ap, aw) = aw/(ap_G + ap_V + ap_C) = G(p,w) \quad \checkmark$
- Walras' Law: $p_G G + p_V V + p_C C = (p_G + p_V + p_C) \cdot w/(p_G + p_V + p_C) = w \quad \checkmark$
- Own-price effect: $\partial G/\partial p_G = -w/(p_G + p_V + p_C)^2 < 0$ (usual good).

**Part 2: Hicksian (compensated) demand for Campari.**

EMP: minimize $p_G G + p_V V + p_C C$ subject to $\min(G, V, C) \ge \bar{u}$.

Again, optimal: $G = V = C = q$. Utility: $u = \min(q,q,q) = q = \bar{u}$. So $q = \bar{u}$.

**Hicksian demand for $C$ (and by symmetry for $G$ and $V$):**

$$h_C(p, u) = h_G(p, u) = h_V(p, u) = \bar{u}$$

**Properties:**
- The Hicksian demands are independent of prices (the fixed proportion is a recipe constraint).
- HD(0) in $p$: $h_C(ap, u) = \bar{u} = h_C(p, u) \quad \checkmark$.
- Compensated own-price effect: $\partial h_C/\partial p_C = 0$ (no substitution possible).

**Part 3: Expenditure function.**

$$e(p, u) = p_G h_G + p_V h_V + p_C h_C = \bar{u}(p_G + p_V + p_C)$$

**Properties:**
- HD(1) in $p$: $e(ap, u) = \bar{u}(ap_G + ap_V + ap_C) = a \cdot e(p,u) \quad \checkmark$
- Strictly increasing in $u$: $\partial e/\partial u = p_G + p_V + p_C > 0 \quad \checkmark$
- Shephard's lemma: $\partial e/\partial p_C = \bar{u} = h_C(p,u) \quad \checkmark$
- Concave in $p$: the function is linear in $p$, which is both concave and convex (weakly).

**Duality checks:**

$$e(p, v(p,w)) = v(p,w) \cdot (p_G + p_V + p_C) = \frac{w}{p_G + p_V + p_C} \cdot (p_G + p_V + p_C) = w \quad \checkmark$$

$$v(p, e(p,u)) = \frac{e(p,u)}{p_G + p_V + p_C} = \frac{\bar{u}(p_G + p_V + p_C)}{p_G + p_V + p_C} = \bar{u} \quad \checkmark$$

**Summary Table:**

| Function | Expression |
|---|---|
| Marshallian demand (any good) | $x_k(p,w) = w / (p_G + p_V + p_C)$ |
| Hicksian demand (any good) | $h_k(p, u) = \bar{u}$ |
| Indirect utility | $v(p,w) = w / (p_G + p_V + p_C)$ |
| Expenditure function | $e(p, u) = \bar{u} \cdot (p_G + p_V + p_C)$ |

**Exam Tip:** For ∼11 marks, this is a substantial question. Structure as three clear parts. The key insight for Leontief: at optimum, all goods consumed in fixed proportion so the utility value directly equals quantity consumed. Marshallian demand depends on all prices; Hicksian demand is constant. Draw the right-angle IC diagram.

> **Professor's Corner:** The Leontief case is the only functional form where Hicksian demand is *price-independent* ($h_k = \bar{u}$). This is because there is zero substitution possibility — the compensated law of demand gives $\partial h_k/\partial p_k = 0$. A students note this explicitly. Also note the duality checks: $e(p, v(p,w)) = w$ works out cleanly because $v(p,w) = w/\sum p_k$ and $e(p,u) = u\sum p_k$. The symmetry of this is elegant and examiners love it.
>
> → *See also: Section 1B Q1-Q3 (CD — the substitution case); DP 3A.Q6 (production-complements analog: sausage maker)*

---

### Question 7 {#q-cons-1b-07}

**$U = X + \ln(Y)$. Find demands. With limited $I$, which goods? Why? (3)**

**Answer:**

> **Marking Guide [14 marks]:** MRS & tangency condition (3) | Marshallian demand derivation (3) | Corner solution condition $I \ge p_x$ (3) | Income elasticity characterization (3) | Quasilinearity & zero income effect (2)
>
> **Formal Definition 28 — Quasilinear Utility (Demand Properties)**
>
> For $u(x, y) = f(x) + y$ with $f' > 0$, $f'' < 0$, demand for the nonlinear good exhibits **zero income effect** (Munoz-Garcia, §1.6, pp.29–30):
>
> $$\frac{\partial x(p,w)}{\partial w} = 0, \qquad f'(x) = \frac{p_x}{p_y} \text{ (independent of } w\text{)}$$
>
> Demand for the numeraire $y$ absorbs all income effects: $y(p,w) = (w - p_x \cdot x)/p_y$.
>
> **Welfare implication:** CV = EV = CS for any price change affecting $p_x$, making welfare measurement unambiguous.
>
> → *See also: FD15 (Quasilinear Utility — preferences), FD29 (Corner Solution)*

**Utility:** $u(x, y) = x + \ln(y)$, with $x, y \ge 0$.

**Budget:** $p_x x + p_y y = I$

**Step 1: MRS condition (interior solution).**
- $MU_x = \partial u/\partial x = 1$
- $MU_y = \partial u/\partial y = 1/y$
- $MRS_{xy} = MU_x / MU_y = 1 / (1/y) = y$

Tangency: $MRS_{xy} = p_x / p_y$

$$y = \frac{p_x}{p_y}$$

So $y^* = p_x/p_y$ (independent of income $I$).

**Step 2: Demand for $x$ from budget constraint.**

$$x^* = \frac{I - p_y y^*}{p_x} = \frac{I - p_y \cdot (p_x/p_y)}{p_x} = \frac{I - p_x}{p_x} = \frac{I}{p_x} - 1$$

**Marshallian demands:**
- $x(p, I) = I/p_x - 1$ (provided $I \ge p_x$; else $x = 0$)
- $y(p, I) = p_x / p_y$

> **Formal Definition 29 — Corner Solution**
>
> A **corner solution** occurs when the optimal bundle lies on the boundary of the budget set — at least one good is consumed in zero quantity (Munoz-Garcia, §2.1, pp.80–82):
>
> **Kuhn-Tucker condition:** At a corner with $x_k = 0$, the marginal utility per dollar satisfies:
>
> $$\frac{\partial u(x^*)}{\partial x_k} \le \lambda p_k \quad \Longleftrightarrow \quad \frac{MU_k}{p_k} \le \frac{MU_j}{p_j} \text{ for any } j \text{ with } x_j > 0$$
>
> **When corners arise:**
> - One good is a "bad" (negative MU)
> - Income too low for interior consumption (quasilinear with $I < p_x$)
> - Preferences non-convex (tangency identifies a minimum, not maximum)
> - Perfect substitutes with corner-inducing price ratio
>
> **Key insight:** Always check the non-negativity constraints $x_k \ge 0$ before applying the Lagrangian — many exam questions test whether you identify the corner.
>
> → *See also: FD28 (Quasilinear Corner), FD30 (Bad)*

**Step 3: With limited $I$, which goods are consumed?**

- If $I < p_x$: $x^*$ would be negative, so the consumer sets $x = 0$ (corner solution) and spends all income on $y$.
- If $I > p_x$: both goods are consumed, with $y$ fixed at $p_x/p_y$ and all extra income spent on $x$.

**Characterization:**
- **Good $y$ (log-good)** is income-INELASTIC. Demand for $y$ is constant in income ($\partial y/\partial I = 0$). It behaves like a **necessity with a satiation/floor**.
- **Good $x$ (linear good)** absorbs all changes in income. It is a **normal good** with all income elasticity concentrated on $x$.
- This is a quasilinear utility function (linear in $x$, nonlinear in $y$). Quasilinear preferences imply **zero income effect** for the good entering nonlinearly ($y$).

**Why?**
- The $\ln(y)$ term gives diminishing marginal utility for $y$, so there's a natural satiation point in $y$.
- Beyond the optimal $y (= p_x/p_y)$, additional income is spent entirely on $x$ since $MU_x = 1$ is constant.
- With very limited $I$, the consumer cannot afford the satiation point for $y$, so consumes only $y$.

**Exam Tip:** For 3 marks: derive demands, note $y$ is constant in $I$ (income-inelastic), $x$ absorbs all extra income. Mention quasilinearity and zero income effect for $y$. The condition $I \ge p_x$ for interior $x$ is a common exam oversight.

> **Professor's Corner:** The condition $I \ge p_x$ is the most commonly missed point — exam questions frequently ask "with limited income, which goods are consumed?" Students who just write $x = I/p_x - 1$ without discussing the corner get partial marks. The deeper insight: quasilinear utility ($x + f(y)$) has zero income effect for the $y$ good. This implies CV = EV = CS in welfare analysis (see WF Q5). Also note the contrast with Cobb-Douglas where all income effects are proportional.
>
> → *See also: Section 1A Q10 (quasilinear IC shape proof); WF Q5 (Willig bounds — quasilinear gives CV = EV = CS)*

---

### Question 8 {#q-cons-1b-08}

**$U(X,Y) = X - 3Y$. $P_X=20$, $P_Y=40$, $I=400$. Utility-maximizing quantities. (3)**

**Answer:**

> **Marking Guide [14 marks]:** Linear utility recognition & MU computation (2) | $MU_y < 0$ — identifying the bad (3) | Corner solution derivation (3) | Verification: tangency yields minimum (4) | Conclusion & alternative interpretation (2)
>
> ⭐ **High-Yield** — The "good with a bad" corner solution is a classic exam trick. Students trained to mechanically solve Lagrangian FOCs miss the key insight: $MU_y < 0$ means the tangency condition identifies a minimum, not a maximum. Always check marginal utility signs before optimizing.
>
> **Formal Definition 30 — "Bad" (Negative Marginal Utility)**
>
> A **bad** is a commodity whose consumption reduces utility: $\partial u/\partial x_k < 0$ (Munoz-Garcia, §1.2, p.9).
>
> **Optimization with a bad:** At the UMP optimum the consumer sets $x_k = 0$ (corner solution, FD29) unless compensated by consuming a "good" that offsets the disutility. For $u = a x_g - b x_b$ with $a, b > 0$, compare $|MRS| = a/b$ to $p_g/p_b$ — if $|MRS| < p_g/p_b$, specialize in the good entirely.
>
> **Key insight:** Always check the sign of marginal utilities before solving the UMP. A Lagrangian tangency condition with a bad identifies a minimum, not a maximum. This is a classic exam trap.
>
> → *See also: FD29 (Corner Solution), 1B‑Q8 (worked example)*

**Utility:** $u(x, y) = x - 3y$

**Prices:** $p_x = 20$, $p_y = 40$

**Income:** $I = 400$

**Step 1: Observe that the utility function is linear (perfect substitutes).**

- $MU_x = \partial u/\partial x = 1$
- $MU_y = \partial u/\partial y = -3$ (MARGINAL DISUTILITY of $y$ — $y$ is a BAD)

Since $MU_y < 0$, the consumer would prefer $y = 0$ (the good is actually a "bad" that reduces utility).

**Step 2: Corner solution — consume only the good with positive marginal utility.**

Since $y$ has negative marginal utility, the consumer will choose $y = 0$ if possible.

Check budget: if $y = 0$, the consumer spends all $I$ on $x$:

$$x = I / p_x = 400 / 20 = 20$$

Utility: $u(20, 0) = 20 - 3(0) = 20$

**Step 3: Verify no interior solution is optimal.**

$$MRS_{xy} = \frac{MU_x}{MU_y} = \frac{1}{-3} = -\frac{1}{3}$$

Price ratio: $p_x / p_y = 20/40 = 1/2$

Since $MRS \neq p_x/p_y$, and $MU_y < 0$, the tangency condition would yield a minimum, not a maximum (convexity violated — the utility function is linear, making preferences convex but not strictly convex, and the negative marginal utility of $y$ means the consumer wants as little $y$ as possible).

**Utility-maximizing quantities:**
- $x^* = 20$
- $y^* = 0$

**Alternative interpretation:** If $y$ is actually a good (and the $-3$ coefficient represents a strong dislike), the optimum is to consume only $x$. If $y$ is a bad (pollution), the consumer would pay to reduce it, but here cannot — so chooses zero.

**Exam Tip:** For 3 marks: the critical insight is that $MU_y < 0$, so $y$ is a bad. The optimum is a corner solution with $y = 0$ and all income spent on $x$. Do not solve the Lagrangian — the FOCs identify a minimum, not a maximum, because the utility function is not quasiconcave in the standard sense (linear with a negative coefficient).

> **Professor's Corner:** This is a "trap" question designed to catch mechanical Lagrangian solvers. The first thing to check in any UMP is: *are marginal utilities positive?* If $MU_k < 0$, good $k$ is a bad — set $k=0$ immediately and spend all income on goods with positive MU. Two deeper points: (1) the MRS is $-\frac{1}{3}$, less than the price ratio $1/2$ in absolute value — this means the indifference curves are flatter than the budget line, so the optimum is a corner at $x$-axis; (2) if the coefficient on $y$ were positive (e.g., $u = x + 3y$), you'd compare MRS = $1/3$ to $p_x/p_y = 1/2$ and since $1/3 < 1/2$, the consumer would still specialize in $x$ (cheaper in terms of marginal utility per dollar).
>
> → *See also: Section 1B Q7 (corner condition in quasilinear); Section 1A Q3 (convexity non-strict for linear utility)*

---

*End of answers. Total: 18 questions answered.*
