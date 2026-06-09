# Answers: Consumer Theory & Preferences

## Exam-ready Revision Notes

---

# Section 1A -- Preference-Based Approach

---

### Question 1

**What is the preference-based approach of consumer's behavior? Explain and interpret the assumptions. (10/7 marks)**

**Answer:**

The preference-based approach models consumer choice by assuming the consumer has a well-defined preference relation over the set of all possible consumption bundles X = R\^N\_+ and chooses the most-preferred bundle from those that are affordable.

**Core idea:** Preferences are primitive; choices are derived from them.

**The preference relation** is a binary relation `>=` (weak preference) on X. For any x, y in X:
- x >= y : "x is at least as preferred as y"
- x > y (strict) : x >= y but not y >= x
- x ~ y (indifference) : x >= y and y >= x

**A rational preference relation** satisfies two key assumptions:

**1. Completeness**
- For all x, y in X: either x >= y, or y >= x, or both (x ~ y).
- Meaning: the consumer can compare ANY two bundles; no refusal to answer.
- Violations: "Is the brother of" -- if John and Bob are not brothers, neither is the brother of the other.

**2. Transitivity**
- For all x, y, z in X: if x >= y and y >= z then x >= z.
- Meaning: preferences do not cycle; they are internally consistent.
- Without transitivity, we could extract infinite money from an individual (money-pump argument).
- Sources of intransitivity: indistinguishable alternatives (just-noticeable differences), framing effects, aggregation of criteria (Condorcet paradox), changing preferences.

**Reflexivity** (implied): x ~ x and x >= x for all x.

**Exam Tip:** Completeness is the most frequently challenged assumption -- real people often cannot compare unfamiliar bundles. Transitivity is needed for the utility representation. Always state both when defining rational preferences. (10-mark questions expect you to discuss each assumption + give examples of violations.)

---

### Question 2

**Define indifference set. Examine: if preference satisfies strong monotonicity, ICs must be downward sloping. (10/7)**

**Answer:**

**Indifference set** of a bundle x is the set of all bundles y such that the consumer is indifferent between them:
- IND(x) = { y in X : y ~ x }

**Related sets:**
- Upper contour set (UCS): UCS(x) = { y in X : y >= x }
- Lower contour set (LCS): LCS(x) = { y in X : x >= y }
- IND(x) = UCS(x) ∩ LCS(x)

**Strong Monotonicity => Downward-sloping ICs:**

Strong monotonicity: for any x != y, if x_k >= y_k for all k and x_l > y_l for at least one good l, then x > y. (i.e., more of ANY good strictly increases utility.)

**Proof by contradiction:**
1. Suppose the indifference curve through x were upward sloping.
2. Then there exists a point y northeast of x on the same IC: y >> x (more of both goods).
3. By strong monotonicity, y >> x implies y > x.
4. But by definition of the IC, y ~ x.
5. Contradiction. Hence ICs cannot be upward sloping.

**Strong monotonicity rules out:**
- Upward-sloping ICs
- Thick indifference curves (since points within the thickness are indifferent but differ in quantities)
- Bads (where more reduces utility)

**Exam Tip:** Strong monotonicity is sufficient but not necessary for downward-sloping ICs. LNS alone does NOT guarantee downward-sloping ICs (e.g., if one good is a bad). For 7-mark answers: define IND set first, then prove the implication with a diagram showing regions A (strictly better) and B (strictly worse).

---

### Question 3

**What are the twin definitions of convexity? How differ from strong convexity? Graphical. (10/4)**

**Answer:**

**Definition 1 (Convexity of preferences):** For all x, y in X, if x >= y then for any a in (0,1):
- a x + (1-a) y >= y
- The convex combination of x and y is at least as good as y.

**Definition 2 (Convex UCS):** For every bundle x, its upper contour set UCS(x) = { y in X : y >= x } is a convex set. That is, for any y, z in UCS(x) and any λ in (0,1):
- λ y + (1-λ) z >= x

**Equivalence:** The two definitions are equivalent. Both capture the idea that consumers prefer averages to extremes (diversification).

**Strong convexity:** For every x, y where x != y and x >= z, y >= z, then for all λ in (0,1):
- λ x + (1-λ) y > z

| Property | Convexity | Strong Convexity |
|---|---|---|
| Convex combination of equally-good bundles | At least as good | Strictly better |
| IC shape | Can have flat segments | Strictly bowed inward |
| Utility representation | Quasiconcave | Strictly quasiconcave |
| Walrasian demand | Convex set (possibly multi-valued) | Single-valued (unique) |
| Example: U = aX + bY | Convex but NOT strict | No |
| Example: U = min{aX, bY} | Convex but NOT strict | No |
| Example: U = X^α Y^β | Both | Yes |

**Graphical distinction:** Strict convexity shows ICs that are strictly bowed toward the origin -- the chord connecting any two points on the same IC lies entirely above the IC (strictly preferred region). Weak convexity allows the chord to coincide with the IC (linear segments, as in perfect substitutes).

**Exam Tip:** For 4-mark questions: give both definitions, state they are equivalent, then contrast with strong convexity in one sentence. Drawing the IC shapes (strictly bowed vs. linear segments) is worth extra marks.

---

### Question 4

**Show: Convexity of preference ⇔ UCS(x) convex ⇔ u(.) quasiconcave. (5)**

**Answer:**

We prove the chain of equivalences:

**(1) Convexity of preference ⇔ UCS(x) is convex:**

By Def 2 of convexity (above), preferences are convex if and only if the upper contour set of every bundle is convex. Hence the equivalence is definitional.

**(2) UCS(x) is convex ⇔ u(.) is quasiconcave:**

**Define quasiconcavity:** A function u(.) is quasiconcave if for all x, y in X and λ in (0,1):
- u(λ x + (1-λ) y) >= min{u(x), u(y)}

**Proof (=>):**
- Assume UCS is convex for all bundles.
- Take x, y. Let m = min{u(x), u(y)}. Let z be the bundle achieving u(z) = m.
- Then both x and y lie in UCS(z) because u(x) >= m and u(y) >= m.
- By convexity of UCS(z), λ x + (1-λ) y lies in UCS(z).
- Hence u(λ x + (1-λ) y) >= m = min{u(x), u(y)}.
- Therefore u is quasiconcave.

**Proof (<=):**
- Assume u is quasiconcave.
- Take any z and any x, y in UCS(z), so u(x) >= u(z) and u(y) >= u(z).
- Then min{u(x), u(y)} >= u(z).
- By quasiconcavity: u(λ x + (1-λ) y) >= min{u(x), u(y)} >= u(z).
- Hence λ x + (1-λ) y is in UCS(z), so UCS(z) is convex.

**Chain complete:** Convexity of preference ⇔ UCS convex ⇔ quasiconcave utility.

**Exam Tip:** This is a standard equivalence proof. For 5 marks: state each equivalence clearly, prove the key direction (UCS convex <=> quasiconcave), and show the chain. No need for diagrams.

---

### Question 5

**Prove: monotonicity + continuity → utility function exists. (5)**

**Answer:**

**Theorem (Debreu):** If a preference relation >= satisfies monotonicity and continuity on X = R\^N\_+, then there exists a continuous utility function u: X → R representing >=.

**Proof sketch:**

1. Let **0** = (0,0,...,0). For any bundle x != **0**, by monotonicity x >= **0**.
2. Let m = max{x_1, x_2, ..., x_N}. Define M = (m, m, ..., m) -- a bundle on the 45-degree line with all components equal to m.
3. By monotonicity: M >= x >= **0**.
4. Both **0** and M lie on the main diagonal (equal amounts of all goods).

5. Define the set A = { t in [0,m] : (t,t,...,t) <= x } and B = { t in [0,m] : (t,t,...,t) >= x }.
   - Monotonicity ensures A and B are non-empty and partition [0,m].
   - By continuity, both A and B are closed, so the intersection is non-empty.
   - Hence there exists a unique t(x) such that (t(x), t(x), ..., t(x)) ~ x.

6. Define u(x) = t(x). This is a real number representing the utility of x.

7. For any two bundles x, y:
   - x >= y iff t(x) >= t(y) iff u(x) >= u(y).
   - This follows from transitivity and monotonicity of the comparison on the diagonal.

8. Continuity of u follows from the continuity of preferences and the construction.

**Intuition:** Project every bundle onto the 45-degree line via unique indifference curve intersection. The projection t(x) becomes the utility number.

**Exam Tip:** This is a classic existence proof. For 5 marks: explain the intuition (projection onto diagonal), state monotonicity is used to order bundles on the diagonal, continuity guarantees the intersection exists. Memorize the structure: 0 → M → t(x) → u(x) = t(x).

---

### Question 6

**Define utility function. Explain desirability by monotonicity and strong monotonicity. (10/5)**

**Answer:**

**Utility function:** A function u: X → R that represents preference relation >= if, for every x, y in X:
- x >= y  ⇔  u(x) >= u(y)

**Properties of utility representation:**
- Only the **ranking** matters (ordinality), not the numerical magnitude (cardinality).
- Any strictly increasing transformation f(u(x)) also represents the same preferences. So if u represents >=, then v = f(u) for any strictly increasing f also represents >=.
- Example: u = x^α y^β and v = α ln x + β ln y represent the same preferences.

**Desirability assumptions** formalize "more is better":

**Monotonicity:**
- For all x != y:
  - (a) If x_k >= y_k for ALL goods k, then x >= y.
  - (b) If x_k > y_k for ALL goods k, then x > y.
- Interpretation: increasing ALL commodities strictly improves welfare; increasing SOME (without reducing others) cannot hurt.
- Utility implication: weakly increasing in each argument; strictly increasing when all arguments increase.

**Strong monotonicity:**
- For all x != y: if x_k >= y_k for all goods k AND x_l > y_l for at least one good l, then x > y.
- Interpretation: increasing even ONE commodity strictly improves welfare.
- Utility implication: strictly increasing in every argument.

**Comparison table:**

| Criterion | Monotonicity | Strong Monotonicity |
|---|---|---|
| One good increases, others same | Only weakly better (x >= y) | Strictly better (x > y) |
| All goods increase | Strictly better | Strictly better |
| Example: u = min{x1, x2} | Satisfies monotonicity | Violates (increasing only x1 when min = x2 leaves utility unchanged) |
| Example: u = x1 + x2 | Satisfies | Satisfies |
| IC shape | Downward sloping (if all goods are goods) | Downward sloping |
| LNS implied? | Yes | Yes (stronger) |

**Exam Tip:** For 10-mark questions: define utility, give examples of transforms, then systematically define and distinguish monotonicity and strong monotonicity with examples. For 5-mark questions: more concise, focus on the utility-desirability link.

---

### Question 7

**Show: Strong Monotonicity ⇒ Monotonicity ⇒ LNS. (5)**

**Answer:**

We prove two implications:

**(1) Strong Monotonicity ⇒ Monotonicity:**

- Take any x != y.
- For (a): If x_k >= y_k for all k, then by strong monotonicity: if x_l > y_l for any l, x > y. If x = y (equal in all components), then x ~ y. Either way, x >= y. So (a) holds.
- For (b): If x_k > y_k for ALL k, then clearly x_k >= y_k for all k and x_l > y_l for at least one l (in fact, all). So by strong monotonicity, x > y.

Hence strong monotonicity implies monotonicity.

**(2) Monotonicity ⇒ Local Non-Satiation (LNS):**

LNS: For every x in X and every ε > 0, there exists y in X with ||y - x|| < ε such that y > x.

- Take any bundle x = (x_1, x_2, ..., x_N) and any ε > 0.
- Construct y = (x_1 + δ, x_2 + δ, ..., x_N + δ) where δ = ε/√N > 0.
- Then y_k > x_k for ALL k, so by monotonicity (condition b), y > x.
- The Euclidean distance ||y - x|| = √(N δ^2) = δ√N = ε. Hence ||y - x|| = ε (or choose δ < ε/√N to get < ε).
- Therefore for any ε > 0 we found a y within ε of x that is strictly preferred. This is precisely LNS.

**Chain:** Strong Monotonicity ⇒ Monotonicity ⇒ LNS.

**Note:** The converse does NOT hold. LNS does not imply monotonicity (e.g., preferences with a satiation point and one bad good may satisfy LNS but fail monotonicity).

**Exam Tip:** This is a hierarchical relationship. For 5 marks: prove each arrow cleanly. Draw an epsilon-ball diagram for the LNS proof. Mention that LNS is the weakest and most commonly used assumption in modern micro theory.

---

### Question 8

**Examine: (i) Homogeneity (ii) Homotheticity. (5/4)**

**Answer:**

**(i) Homogeneity:**

A utility function u(x) is homogeneous of degree k if for all a > 0:
- u(a x_1, a x_2, ..., a x_N) = a^k u(x_1, x_2, ..., x_N)

**Properties:**
1. Derivatives of a HD(k) function are HD(k-1).
2. Indifference curves of homogeneous functions are radial expansions: if u(y) = u(z), then u(ay) = u(az).
3. MRS is constant along rays from the origin (homogeneous of degree zero):
   - MRS_12(ax_1, ax_2) = MRS_12(x_1, x_2)
   - Proof: MRS = MU_1/MU_2, both numerator and denominator scale by a^{k-1}, which cancels.

**Examples:**
- Cobb-Douglas u = x^α y^β: HD(α+β).
- Perfect substitutes u = ax + by: HD(1).
- Perfect complements u = min{ax, by}: HD(1).
- CES: HD(1).

**(ii) Homotheticity:**

A utility function u(x) is homothetic if it is a monotonic transformation of a homogeneous function: u(x) = g(v(x)) where g is strictly increasing and v is homogeneous of some degree.

**Key properties:**
1. MRS depends only on the ratio of goods (x_1/x_2), not on the consumption scale or utility level.
2. Indifference curves are radial expansions: if y ~ z, then ay ~ az for all a > 0.
3. Income offer curves and Engel curves are straight lines through the origin.
4. The share of income spent on each good is constant as income changes (no luxuries or necessities).

**Homogeneous vs Homothetic:**
- All homogeneous functions are homothetic (take g as identity).
- Not all homothetic functions are homogeneous.
  - Example: u(x,y) = xy + a is homothetic (monotonic transform of xy which is HD(2)) but NOT homogeneous: u(tx, ty) = t^2 xy + a ≠ t^k(xy + a) for any k.

| Feature | Homogeneous | Homothetic |
|---|---|---|
| Scaling property | u(ax)=a^k u(x) | u(ax)=g(a^k v(x)) |
| MRS along rays | Constant | Constant |
| Engel curves | Straight line through origin | Straight line through origin |
| Examples | CD, linear, Leontief, CES | CD, linear, Leontief + any monotonic transformation |
| Stricter? | Yes (subset) | More general |

**Exam Tip:** For 5/4 marks: define each, state the key property (MRS constant on rays), give examples, and show the homogeneous ⊂ homothetic relationship. Provide a counterexample of a homothetic but non-homogeneous function.

---

### Question 9

**Prove quasi-concave utility U(X,Y) ⇔ dMRS/dX < 0. (8)**

**Answer:**

We prove: quasiconcavity of utility (convex preferences) is equivalent to diminishing MRS along an indifference curve.

**Step 1 -- MRS formula:**

For utility u(x,y), MRS_xy = MU_x / MU_y = (∂u/∂x) / (∂u/∂y)

Along an indifference curve, du = 0:
- du = (∂u/∂x) dx + (∂u/∂y) dy = 0
- So dy/dx = -(∂u/∂x)/(∂u/∂y) = -MRS

**Step 2 -- Quasiconcavity condition:**

For a function of two variables, quasiconcavity requires the bordered Hessian to be negative semidefinite:
- The (3x3) bordered Hessian: |0    u_x    u_y;   u_x   u_xx   u_xy;   u_y   u_yx   u_yy|
- For quasiconcavity, principal minors must alternate in sign: |B_2| >= 0.

The condition simplifies to:
- 2 u_x u_y u_xy - u_x^2 u_yy - u_y^2 u_xx >= 0

**Step 3 -- dMRS/dX derivation:**

MRS = u_x / u_y

Differentiate MRS with respect to x along an indifference curve (total derivative, accounting for y = y(x)):

dMRS/dx = d(u_x/u_y)/dx = (u_y[u_xx + u_xy y'(x)] - u_x[u_yx + u_yy y'(x)]) / u_y^2

Where y'(x) = dy/dx = -u_x/u_y along the IC.

Substituting:
dMRS/dx = (u_y[u_xx - u_xy(u_x/u_y)] - u_x[u_yx - u_yy(u_x/u_y)]) / u_y^2

Multiplying numerator and denominator by u_y:
dMRS/dx = [u_y^2 u_xx - u_y u_xy u_x - u_x u_y u_xy + u_x^2 u_yy] / u_y^3

The numerator simplifies to:
- Numerator = u_x^2 u_yy - 2 u_x u_y u_xy + u_y^2 u_xx
- This is -(2 u_x u_y u_xy - u_x^2 u_yy - u_y^2 u_xx)

**Step 4 -- Equivalence:**

- Quasiconcavity requires: 2 u_x u_y u_xy - u_x^2 u_yy - u_y^2 u_xx >= 0
- Equivalently: -(u_x^2 u_yy - 2 u_x u_y u_xy + u_y^2 u_xx) >= 0
- Or: u_x^2 u_yy - 2 u_x u_y u_xy + u_y^2 u_xx <= 0
- This numerator is exactly the numerator of dMRS/dx (up to the positive denominator u_y^3 > 0).

Hence: dMRS/dx < 0 ⇔ numerator < 0 ⇔ quasiconcavity holds.

**Interpretation:** Diminishing MRS means as x increases (substituting for y), the consumer requires increasingly less y to give up for an additional unit of x -- i.e., the IC flattens as we move right. This is the graphical manifestation of convex preferences.

**Exam Tip:** For 8 marks, show the derivation cleanly. Focus on the equivalence chain: dMRS/dx < 0 ⇒ numerator < 0 ⇒ bordered Hessian condition ⇒ quasiconcavity. Do NOT skip the implicit differentiation step. Knowing the bordered Hessian expression adds sophistication.

---

### Question 10

**Does U = X + log(Y) have convex indifference curves? Provide proof. (∼3)**

**Answer:**

**Step 1: Compute MRS.**
- u(x,y) = x + ln y
- MU_x = ∂u/∂x = 1
- MU_y = ∂u/∂y = 1/y
- MRS_xy = MU_x / MU_y = 1 / (1/y) = y

**Step 2: Check if MRS is diminishing in x.**

Along an indifference curve, du = 0:
- dx + (1/y) dy = 0 ⇒ dy/dx = -y

This also means: as x increases, y must decrease to stay on the same IC. So y = y(x) is decreasing in x.

Now differentiate MRS = y with respect to x along the IC:
- dMRS/dx = dy/dx (by chain rule, since MRS = y)
- dy/dx = -y (from above)
- Hence dMRS/dx = -y < 0 for any positive y.

**Conclusion:** Yes, MRS declines as x increases (since -y < 0). Therefore indifference curves are convex (strictly diminishing MRS).

**Alternative verification via the bordered Hessian:**
- u_x = 1, u_y = 1/y
- u_xx = 0, u_xy = 0, u_yy = -1/y^2
- Bordered Hessian determinant: 2u_x u_y u_xy - u_x^2 u_yy - u_y^2 u_xx
- = 0 - 1(-1/y^2) - (1/y^2)(0) = 1/y^2 > 0
- Satisfies quasiconcavity condition, confirming convex ICs.

**Exam Tip:** Short question (∼3 marks). Compute MRS, show dMRS/dx < 0. The key insight is that MRS = y, which is decreasing along the IC because y falls as x rises.

---

# Section 1B -- Utility Maximization & Demand

---

### Question 1

**Cobb-Douglas: Derive Walrasian demand, examine properties. (7)**

**Answer:**

Consider u(x_1, x_2) = x_1^α x_2^β, with α, β > 0. Budget: p_1 x_1 + p_2 x_2 = w.

**Derivation via tangency condition:**

Step 1: Lagrangian:
- L = x_1^α x_2^β + λ(w - p_1 x_1 - p_2 x_2)

Step 2: FOCs:
- ∂L/∂x_1 = α x_1^{α-1} x_2^β - λ p_1 = 0  ... (1)
- ∂L/∂x_2 = β x_1^α x_2^{β-1} - λ p_2 = 0  ... (2)
- ∂L/∂λ = w - p_1 x_1 - p_2 x_2 = 0       ... (3)

Step 3: From (1) and (2):
- (α x_1^{α-1} x_2^β) / (β x_1^α x_2^{β-1}) = p_1 / p_2
- (α x_2) / (β x_1) = p_1 / p_2
- x_2 = (β/α)(p_1/p_2) x_1

Step 4: Substitute into (3):
- p_1 x_1 + p_2[(β/α)(p_1/p_2)x_1] = w
- p_1 x_1 + (β/α) p_1 x_1 = w
- p_1 x_1(1 + β/α) = w
- x_1(p_1, p_2, w) = [α/(α+β)] · (w/p_1)

Similarly:
- x_2(p_1, p_2, w) = [β/(α+β)] · (w/p_2)

**Walrasian (Marshallian) Demand Functions:**
- x_1(p,w) = (α/(α+β)) · (w/p_1)
- x_2(p,w) = (β/(α+β)) · (w/p_2)

**Properties:**

| Property | Verification |
|---|---|
| **Homogeneity of degree 0** | x_1(tp, tw) = [α/(α+β)]·(tw/tp_1) = x_1(p,w). Same for x_2. |
| **Walras' Law** | p_1 x_1 + p_2 x_2 = αw/(α+β) + βw/(α+β) = w. Holds. |
| **Own-price effect** | ∂x_1/∂p_1 = -[α/(α+β)]·(w/p_1^2) < 0. Demand slopes downward (usual good). |
| **Cross-price effect** | ∂x_1/∂p_2 = 0. No cross-price effect (zero). |
| **Income effect** | ∂x_1/∂w = α/(α+β)·(1/p_1) > 0. Both goods are normal. |
| **Expenditure shares** | s_1 = p_1 x_1 / w = α/(α+β); s_2 = β/(α+β). Both are CONSTANT (independent of p and w). |

**Exam Tip:** For 7 marks, derive fully, then systematically check each property. The constant expenditure share property is unique to Cobb-Douglas and is a key exam point. Note: when α + β = 1 (common normalization), shares are α and β.

---

### Question 2

**Cobb-Douglas: Get indirect utility, explain properties, verify Roy's identity. (7)**

**Answer:**

**Step 1: Indirect utility function.**

Substitute Walrasian demands into the utility function:
- v(p,w) = u(x_1(p,w), x_2(p,w))
- = [αw/((α+β)p_1)]^α · [βw/((α+β)p_2)]^β
- = [α^α β^β / (α+β)^{α+β}] · w^{α+β} · p_1^{-α} · p_2^{-β}

With normalization α + β = 1 (common in exams, set β = 1 - α):
- v(p,w) = w · p_1^{-α} · p_2^{-(1-α)} · α^α (1-α)^{1-α}

Or more compactly: v(p,w) = B · w^{α+β} · p_1^{-α} · p_2^{-β}, where B = α^α β^β / (α+β)^{α+β}.

**Properties of indirect utility function:**

| Property | Verification |
|---|---|
| **HD(0) in (p,w)** | v(tp, tw) = B·(tw)^{α+β}·(tp_1)^{-α}·(tp_2)^{-β} = t^{α+β-α-β}·v(p,w) = v(p,w) |
| **Strictly increasing in w** | ∂v/∂w = (α+β)·v/w > 0 |
| **Non-increasing in p_k** | ∂v/∂p_1 = -α·v/p_1 < 0; ∂v/∂p_2 = -β·v/p_2 < 0 |
| **Quasiconvex in (p,w)** | The set {(p,w): v(p,w) <= u_bar} is convex |

**Step 2: Verify Roy's identity.**

Roy's identity: x_k(p,w) = -[∂v/∂p_k] / [∂v/∂w]

For good 1:
- ∂v/∂p_1 = -α · B · w^{α+β} · p_1^{-α-1} · p_2^{-β} = -α·v/p_1
- ∂v/∂w = (α+β) · v / w

Therefore:
- -[∂v/∂p_1] / [∂v/∂w] = -(-α·v/p_1) / ((α+β)·v/w)
- = (α·v/p_1) · (w/((α+β)·v))
- = αw/((α+β)p_1)
- = x_1(p,w) ✓

Similarly for good 2:
- -[∂v/∂p_2] / [∂v/∂w] = βw/((α+β)p_2) = x_2(p,w) ✓

**Roy's Identity holds.** This confirms that the indirect utility function correctly represents the underlying preferences and that we can recover Walrasian demand from v(p,w) without re-solving the UMP.

**Exam Tip:** For 7 marks, show the derivation from substitution, state properties, then verify Roy's identity explicitly. The normalization α+β=1 simplifies notation. Roy's identity is often tested: memorize the formula x_k = -(∂v/∂p_k)/(∂v/∂w).

---

### Question 3

**Cobb-Douglas: Solve expenditure minimization, examine compensated demand. (6)**

**Answer:**

**EMP setup:** Minimize p_1 x_1 + p_2 x_2 subject to u(x_1,x_2) = x_1^α x_2^β >= u_bar.

**Step 1: Lagrangian.**
- L = p_1 x_1 + p_2 x_2 + μ(u_bar - x_1^α x_2^β)

**Step 2: FOCs.**
- ∂L/∂x_1 = p_1 - μ α x_1^{α-1} x_2^β = 0  ... (1)
- ∂L/∂x_2 = p_2 - μ β x_1^α x_2^{β-1} = 0  ... (2)
- ∂L/∂μ = u_bar - x_1^α x_2^β = 0          ... (3)

**Step 3: Tangency condition from (1) and (2):**
- p_1/p_2 = (α x_2) / (β x_1)
- x_2 = (β/α)(p_1/p_2) x_1 ... same ratio as in UMP!

**Step 4: From (3) using the ratio:**
- u_bar = x_1^α [ (β/α)(p_1/p_2) x_1 ]^β
- u_bar = x_1^{α+β} · (β/α)^β · (p_1/p_2)^β

**Hicksian (Compensated) Demand Functions:**
- h_1(p, u_bar) = u_bar^{1/(α+β)} · (α/β)^{β/(α+β)} · (p_2/p_1)^{β/(α+β)}
- h_2(p, u_bar) = u_bar^{1/(α+β)} · (β/α)^{α/(α+β)} · (p_1/p_2)^{α/(α+β)}

With normalization α+β=1:
- h_1(p, u_bar) = u_bar · (α/β)^β · (p_2/p_1)^β
- h_2(p, u_bar) = u_bar · (β/α)^α · (p_1/p_2)^α

**Step 5: Expenditure function.**
- e(p, u_bar) = p_1 h_1 + p_2 h_2
- = u_bar^{1/(α+β)} · [(α/β)^{β/(α+β)} p_1^{α/(α+β)} p_2^{β/(α+β)} + (β/α)^{α/(α+β)} p_1^{α/(α+β)} p_2^{β/(α+β)}]
- = u_bar^{1/(α+β)} · (α+β) · (p_1/α)^{α/(α+β)} (p_2/β)^{β/(α+β)}

With α+β=1: e(p, u_bar) = u_bar · (p_1/α)^α (p_2/β)^β

**Properties of Hicksian demand:**

| Property | Verification |
|---|---|
| **HD(0) in p** | h(tp, u) = u·(α/β)^β·(tp_2/tp_1)^β = h(p,u) |
| **Compensated law of demand** | ∂h_1/∂p_1 < 0 (elasticity can be computed) |
| **No excess utility** | u(h_1, h_2) = u_bar (by construction) |
| **Duality check** | e(p, v(p,w)) = w and v(p, e(p, u_bar)) = u_bar |

**Exam Tip:** For 6 marks: set up EMP, derive FOCs, show tangency yields same ratio as UMP, solve for Hicksian demands, then compute expenditure function. Emphasize the duality relationship. With α+β=1 the algebra simplifies significantly -- use it.

---

### Question 4

**Examine properties of Walrasian demand x(p,w). When can UMP sufficient condition be violated? (10)**

**Answer:**

**Properties of Walrasian demand x(p,w):**

Assume u(.) is continuous, preferences satisfy LNS on X = R\^L\_+.

**1. Homogeneity of degree zero:**
- x(p, w) = x(ap, aw) for all a > 0.
- Reason: budget set is unchanged: {x: p·x <= w} = {x: ap·x <= aw}.
- No preference assumption needed.

**2. Walras' Law:**
- p·x = w for all x in x(p,w).
- Reason (by LNS): if p·x < w, there exists y epsilon-close to x with y > x and still affordable, contradicting optimality. So all wealth is spent.

**3. Convexity/Uniqueness:**
- If preferences are convex: x(p,w) is a convex set (multiple optimal bundles possible).
- If preferences are strictly convex: x(p,w) is single-valued (unique optimum).

**4. Other properties (follow from above):**
- x(p,w) is continuous in (p,w) if u is continuous and strictly quasiconcave.
- For normal goods: ∂x_k/∂w > 0; for inferior goods: ∂x_k/∂w < 0.
- Usual goods: ∂x_k/∂p_k < 0; Giffen goods: ∂x_k/∂p_k > 0.

**When can UMP sufficient conditions be violated?**

The Kuhn-Tucker conditions are necessary for a max. They are sufficient when:

**(A) Non-monotone utility (violation of monotonicity/LNS):**
- If utility is non-monotone, the optimum can be at a corner where the tangency condition MRS = p_1/p_2 does NOT hold.
- Example: the consumer has a bliss point; the budget line may intersect the bliss region such that the optimum is at a boundary of the budget set.
- At corner solutions, some goods have zero consumption and MU_i/p_i < MU_j/p_j.

**(B) Non-quasiconcave utility:**
- If u is not quasiconcave (UCS is not convex), the tangency condition may identify a minimum or a saddle point rather than a maximum.
- Graphically: the indifference curve may be tangent to the budget line at a point that gives LOWER utility than other affordable points.
- The true maximum is at a corner or boundary.

| Condition violated | What happens |
|---|---|
| Utility not monotone | Corner solution; MU_i/p_i may not equalize across goods |
| Preferences not convex | Tangency identifies a minimum, not a maximum |
| ∇u = 0 at some point | Bliss point; violates LNS; consumer would not spend all wealth |
| Budget set non-compact | No solution exists (Weierstrass fails) |

**(C) Zero gradient (∇u = 0):**
- If the gradient vanishes at some bundle (top of a "mountain"), this is a bliss point. Monotonicity/LNS fails since the consumer is satiated. Walras' Law may be violated.

**Exam Tip:** For 10 marks: list and explain each property with economic intuition. For the sufficient condition part: draw the three-violations diagram (non-monotone, non-quasiconcave, corner solution). The Kuhn-Tucker sufficient conditions are: (1) u quasiconcave, (2) u monotone, (3) ∇u ≠ 0.

---

### Question 5

**Examine: (i) Homogeneity (ii) Homotheticity. (10)**

**Answer:**

*[Note: This question is numbered Q5 in Section 1B but appears to be a repeat of Q8 from Section 1A. The answer below focuses on the demand-side implications, which is likely what is intended here.]*

**(i) Homogeneity of Walrasian demand:**

Walrasian demand x(p,w) is **homogeneous of degree zero** in (p,w):
- x(ap, aw) = x(p,w) for all a > 0.
- Reason: the budget set {x: p·x <= w} is identical to {x: ap·x <= aw}. Scaling all prices and income by the same factor does not change the consumer's feasible set.

**Implications for demand functions:**
- Demand depends only on real prices (relative prices) and real income.
- If all prices and income double, the consumer buys exactly the same bundle.
- This is a property of any Walrasian demand derived from any well-defined UMP (no special preference assumptions needed beyond continuity).

**For indirect utility:**
- v(p,w) is HD(0) in (p,w): v(ap, aw) = v(p,w).

**For expenditure function:**
- e(p, u) is HD(1) in p: e(ap, u) = a·e(p, u).

**For Hicksian demand:**
- h(p, u) is HD(0) in p: h(ap, u) = h(p, u).

**(ii) Homotheticity of preferences and its demand implications:**

A preference relation is homothetic if all indifference sets are related to proportional expansions along rays: if x ~ y then ax ~ ay for any a > 0.

**Demand implications:**

| Property | Explanation |
|---|---|
| **Engel curves are linear through origin** | ∂x_k/∂w · (w/x_k) = 1 (income elasticity = 1) |
| **Expenditure shares are constant** | s_k = p_k x_k(p,w)/w independent of w |
| **Income expansion paths are rays** | Optimal ratios x_1/x_2 are constant as w varies |
| **MRS independent of utility level** | MRS depends only on the ratio x_1/x_2, not on how much is consumed |
| **No luxuries or necessities** | All goods have unit income elasticity |

**Examples:**
- Cobb-Douglas: homothetic (constant shares α, β).
- Perfect substitutes u = ax + by: homothetic.
- Perfect complements u = min{ax, by}: homothetic.
- CES u = (a x_1^ρ + b x_2^ρ)^{1/ρ}: homothetic.

**Non-examples:**
- Quasilinear u = v(x) + y: NOT homothetic (Engel curve for x is flat after some point).
- Stone-Geary (with subsistence): NOT homothetic (shares vary with income).

**Relationship between homogeneity and homotheticity:**
- Homogeneous utility ⇒ homothetic preferences (monotonic transform with g = identity).
- Homothetic preferences ⇏ homogeneous utility (e.g., u = xy + a).
- Walrasian demand from homothetic preferences: x(p,w) = x(p,1)·w (linear in income).

**Exam Tip:** For 10 marks, treat this as a demand-focused question. Link homogeneity of demand (the property) to homotheticity of preferences (the assumption). Show the income-linearity property of demand under homotheticity. Use Engel curve diagrams to distinguish homothetic (line through origin) from non-homothetic preferences.

---

### Question 6

**Negroni cocktail: U = min(G,V,C). Find Marshallian demand for Gin, Hicksian demand for Campari, expenditure function. (∼11)**

**Answer:**

Leontief (perfect complements) utility: u(G, V, C) = min(G, V, C)

This represents a Negroni cocktail where G = gin, V = sweet vermouth, C = Campari, consumed in fixed 1:1:1 proportions.

**Part 1: Marshallian (Walrasian) demand for Gin.**

At the optimum, a rational consumer consumes in fixed proportion: G = V = C = q (some quantity).

**Budget constraint:** p_G · G + p_V · V + p_C · C = w
- With G = V = C = q: q(p_G + p_V + p_C) = w
- Therefore: q = w / (p_G + p_V + p_C)

**Marshallian demand for G (and by symmetry for V and C):**
- G(p, w) = w / (p_G + p_V + p_C)
- V(p, w) = w / (p_G + p_V + p_C)
- C(p, w) = w / (p_G + p_V + p_C)

All three demands are identical by symmetry of the fixed-proportion recipe.

**Properties:**
- HD(0) in (p,w): G(ap, aw) = aw/(ap_G + ap_V + ap_C) = G(p,w) ✓
- Walras' Law: p_G·G + p_V·V + p_C·C = (p_G + p_V + p_C)·w/(p_G + p_V + p_C) = w ✓
- Own-price effect: ∂G/∂p_G = -w/(p_G + p_V + p_C)^2 < 0 (usual good).

**Part 2: Hicksian (compensated) demand for Campari.**

EMP: minimize p_G·G + p_V·V + p_C·C subject to min(G, V, C) >= u_bar.

Again, optimal: G = V = C = q. Utility: u = min(q,q,q) = q = u_bar. So q = u_bar.

**Hicksian demand for C (and by symmetry for G and V):**
- h_C(p, u) = u_bar
- h_G(p, u) = u_bar
- h_V(p, u) = u_bar

**Properties:**
- The Hicksian demands are independent of prices (the fixed proportion is a technological/recipe constraint).
- HD(0) in p: h_C(ap, u) = u_bar = h_C(p, u) ✓.
- Compensated own-price effect: ∂h_C/∂p_C = 0 (no substitution possible).

**Part 3: Expenditure function.**

- e(p, u) = p_G·h_G + p_V·h_V + p_C·h_C
- = p_G·u + p_V·u + p_C·u
- = u · (p_G + p_V + p_C)

**Properties:**
- HD(1) in p: e(ap, u) = u(ap_G + ap_V + ap_C) = a·u(p_G + p_V + p_C) = a·e(p,u) ✓
- Strictly increasing in u: ∂e/∂u = (p_G + p_V + p_C) > 0 ✓
- Shepard's lemma: ∂e/∂p_C = u = h_C(p,u) ✓
- Concave in p: the function is linear in p, which is both concave and convex (weakly).

**Duality checks:**
- e(p, v(p,w)) = v(p,w)·(p_G + p_V + p_C) = [w/(p_G + p_V + p_C)]·(p_G + p_V + p_C) = w ✓
- v(p, e(p,u)) = e(p,u)/(p_G + p_V + p_C) = u·(p_G + p_V + p_C)/(p_G + p_V + p_C) = u ✓

**Summary Table:**

| Function | Expression |
|---|---|
| Marshallian demand (any good) | x_k(p,w) = w / (p_G + p_V + p_C) |
| Hicksian demand (any good) | h_k(p, u) = u |
| Indirect utility | v(p,w) = w / (p_G + p_V + p_C) |
| Expenditure function | e(p, u) = u·(p_G + p_V + p_C) |

**Exam Tip:** For ∼11 marks, this is a substantial question. Structure as three clear parts. The key insight for Leontief: at optimum, all goods consumed in fixed proportion so the utility value directly equals quantity consumed. Marshallian demand depends on all prices; Hicksian demand is constant. Draw the right-angle IC diagram.

---

### Question 7

**U = X + ln(Y). Find demands. With limited I, which goods? Why? (3)**

**Answer:**

**Utility:** u(x, y) = x + ln(y), with x, y >= 0.
**Budget:** p_x x + p_y y = I

**Step 1: MRS condition (interior solution).**
- MU_x = ∂u/∂x = 1
- MU_y = ∂u/∂y = 1/y
- MRS_xy = MU_x / MU_y = 1 / (1/y) = y

Tangency: MRS_xy = p_x / p_y
- y = p_x / p_y
- So y* = p_x / p_y (independent of income I)

**Step 2: Demand for x from budget constraint.**
- x* = (I - p_y y*) / p_x = (I - p_y·(p_x/p_y)) / p_x = (I - p_x) / p_x = I/p_x - 1

**Marshallian demands:**
- x(p, I) = I/p_x - 1 (provided I >= p_x; else x = 0)
- y(p, I) = p_x / p_y

**Step 3: With limited I, which goods are consumed?**

- If I < p_x: x* would be negative, so the consumer sets x = 0 (corner solution) and spends all income on y.
- If I > p_x: both goods are consumed, with y fixed at p_x/p_y and all extra income spent on x.

**Characterization:**
- **Good y (log-good)** is a **luxury** in a limited sense? No -- it is actually income-INELASTIC. Demand for y is constant in income (∂y/∂I = 0). It behaves like a **necessity with a satiation/floor**.
- **Good x (linear good)** absorbs all changes in income. It is a **normal good** with all income elasticity concentrated on x.
- This is a quasilinear utility function (linear in x, nonlinear in y). Quasilinear preferences imply **zero income effect** for the good entering nonlinearly (y).

**Why?**
- The ln(y) term gives diminishing marginal utility for y, so there's a natural satiation point in y.
- Beyond the optimal y (= p_x/p_y), additional income is spent entirely on x since MU_x = 1 is constant.
- With very limited I, the consumer cannot afford the satiation point for y, so consumes only y.

**Exam Tip:** For 3 marks: derive demands, note y is constant in I (income-inelastic), x absorbs all extra income. Mention quasilinearity and zero income effect for y. The condition I >= p_x for interior x is a common exam oversight -- mention it.

---

### Question 8

**U(X,Y) = X - 3Y. P_X=20, P_Y=40, I=400. Utility-maximizing quantities. (3)**

**Answer:**

**Utility:** u(x, y) = x - 3y
**Prices:** p_x = 20, p_y = 40
**Income:** I = 400

**Step 1: Observe that the utility function is linear (perfect substitutes).**

- MU_x = ∂u/∂x = 1
- MU_y = ∂u/∂y = -3 (MARGINAL DISUTILITY of y -- y is a BAD)

Since MU_y < 0, the consumer would prefer y = 0 (the good is actually a "bad" that reduces utility).

**Step 2: Corner solution -- consume only the good with positive marginal utility.**

Since y has negative marginal utility, the consumer will choose y = 0 if possible.

Check budget: if y = 0, the consumer spends all I on x:
- x = I / p_x = 400 / 20 = 20
- Utility: u(20, 0) = 20 - 3(0) = 20

**Step 3: Verify no interior solution is optimal.**

MRS_xy = MU_x / MU_y = 1/(-3) = -1/3
Price ratio: p_x / p_y = 20/40 = 1/2

Since MRS != p_x/p_y, and MU_y < 0, the tangency condition would yield a minimum, not a maximum (convexity violated -- the utility function is linear, making preferences convex but not strictly convex, and the negative marginal utility of y means the consumer wants as little y as possible).

**Utility-maximizing quantities:**
- x* = 20
- y* = 0

**Alternative interpretation:** If y is actually a good (and the -3 is a typo or the question is about a consumer who dislikes y), the optimum is to consume only x. If y is a bad (pollution), the consumer would pay to reduce it, but here cannot -- so chooses zero.

**Exam Tip:** For 3 marks: the critical insight is that MU_y < 0, so y is a bad. The optimum is a corner solution with y = 0 and all income spent on x. Do not solve the Lagrangian -- the FOCs identify a minimum, not a maximum, because the utility function is not quasiconcave in the standard sense (linear with a negative coefficient).

---

*End of answers. Total: 18 questions answered.*
