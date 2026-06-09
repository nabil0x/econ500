# General Equilibrium, Game Theory, Externalities & Trade — Exam Answers

**Exam-ready answers** covering GE existence/uniqueness/stability, Edgeworth box (2×2×2 model), game theory & IO, externalities & public goods, and trade & tariffs.

All sources: Koutsoyiannis *Modern Microeconomics*, Felix Munoz-Garcia *Advanced Microeconomic Theory*, welfare sheet, GE illustration document, and static properties of GE document.

---

## Topic 6A — GE: Existence, Uniqueness, Stability

### Question 1

**Answer:**

**General equilibrium (GE)** is a state in which *all* markets and *all* decision-making units are in simultaneous equilibrium. A GE exists if every market is cleared at a positive price, with each consumer maximising utility and each firm maximising profit. (Koutsoyiannis p. 486)

| Feature | Partial Equilibrium | General Equilibrium |
|---------|-------------------|-------------------|
| **Scope** | Single market in isolation | All markets simultaneously |
| **Feedback** | Ignores cross-market effects | Explicitly models interdependence |
| **Prices** | One price determined (ceteris paribus) | All prices determined simultaneously |
| **Equations** | One supply = one demand | System of simultaneous equations |
| **Example** | Tax on tea → price & quantity in tea market only | Tax on tea → tea price ↑ → coffee demand ↑ → factor reallocation → wage changes → income effects → all markets adjust |

**Example (GE):** A drought destroys wheat harvest. PE: wheat price rises. GE: wheat price ↑ → bread price ↑ → consumers substitute rice → rice price ↑ → farmers shift land from cotton to wheat → cotton price ↑ → textile costs ↑ → clothing prices ↑ → factor markets adjust → wage/rental changes → feedback to all markets.

**Example from Koutsoyiannis (p. 491):** An exogenous taste shift toward X (away from substitute Y) raises Pₓ, creates excess profits in X, losses in Y → firms exit Y, enter X → factor demand shifts → w and r change → LAC shift → new equilibrium with higher w, lower r, different product mix.

**Exam Tip:** Always contrast GE with PE in three dimensions: scope (one market vs all), feedback (none vs full interdependence), and determinacy (relative vs absolute prices). Mention Walras, Arrow-Debreu.

---

### Question 2

**Answer:**

The three problems are best illustrated using a demand-supply diagram (partial equilibrium framework that extends to GE via excess demand functions). (Koutsoyiannis pp. 489-491)

**(i) Existence:** Does any positive price clear all markets simultaneously?

- In a standard D-S diagram, equilibrium exists if D and S intersect at a positive price.
- **No equilibrium exists** if D and S do not intersect (e.g., backward-bending supply curve that lies everywhere above D, or vertical S with D entirely below it).
- In GE terms, existence requires continuous excess demand functions satisfying certain boundary conditions (Arrow-Debreu, 1954).

```
   P
   ↑          S
   |    D
   |   /
   |  /
   | /
   |/__________ Q
   (equilibrium exists at P* > 0)
```

**(ii) Uniqueness:** If equilibrium exists, is there exactly one?

- Multiple equilibria arise if D and S intersect more than once.
- In terms of **excess demand** E(P) = QD(P) − QS(P): there are as many equilibria as the number of times E(P) intersects the vertical price-axis.
- With a backward-bending supply curve (e.g., labour market), three intersections are possible.

```
   P                   P
   ↑         S         ↑
   |   D              E(P)
   |  / \            / \
   | /   \          /   \
   |/_____\____ Q   /_____\___ Q
   P1  P2  P3        (three zero-crossings)
```

**(iii) Stability:** If displaced from equilibrium, does the system return?

- **Stable equilibrium:** D cuts S from above → excess demand drives price up, excess supply drives it down (negative slope of E(P) at equilibrium).
- **Unstable equilibrium:** D cuts S from below → excess demand drives price down, excess supply drives it up (positive slope of E(P) at equilibrium).
- Walrasian *tâtonnement*: auctioneer adjusts prices proportionally to excess demand. Stable if ∂E/∂P < 0.

```
Stable:              Unstable:
   P                    P
   ↑    D              ↑    S
   |   / S             |   \ D
   |  /                |    \
   | /                 |     \
   |/__________ Q      |/__________ Q
```

**Exam Tip:** Draw all four cases: (1) unique stable, (2) unique unstable, (3) multiple equilibria (alternating stable/unstable), (4) no equilibrium. Always translate D-S into excess demand E(P) = QD − QS.

---

### Question 3

**Answer:**

The three properties expressed via the **excess demand function** E(P) = QD(P) − QS(P): (Koutsoyiannis pp. 489-491)

**(i) Existence at a positive price**

An equilibrium exists if there is some P > 0 such that E(P) = 0. This requires:
- E(P) is continuous (continuous D and S functions).
- E(P) > 0 for very low P (demand exceeds supply) and E(P) < 0 for very high P (supply exceeds demand).
- By the Intermediate Value Theorem, ∃ P* > 0 with E(P*) = 0.

In GE, Arrow-Debreu (1954) proved existence under: perfect competition, no indivisibilities, no increasing returns, continuous well-behaved production & demand functions.

**(ii) Stability from slopes**

- **Stable equilibrium:** slope of excess demand at equilibrium is **negative** (dE/dP < 0).
  - If P < P* → E(P) > 0 (excess demand) → price rises → returns to P*.
  - If P > P* → E(P) < 0 (excess supply) → price falls → returns to P*.
- **Unstable equilibrium:** slope of excess demand at equilibrium is **positive** (dE/dP > 0).

```
Stable (dE/dP < 0):          Unstable (dE/dP > 0):
   P                          P
   ↑     E(P)                 ↑      E(P)
   |    /                     |    \
   |   /                      |     \
   |  / E<0                   |      \ E>0
   | /                        |       \
   |/____ E>0 _____ Q         |/________\___ Q
   P*                         P*
```

**(iii) Uniqueness from excess demand slope**

- If E(P) is **monotonic** (dE/dP < 0 for all P), equilibrium is unique — there can be only one P where E(P) = 0.
- If E(P) is non-monotonic (changes sign multiple times), multiple equilibria exist.
- Normal goods (downward-sloping D, upward-sloping S) guarantee dE/dP < 0 → uniqueness.
- Giffen goods, backward-bending supply can create multiple crossings.

**Exam Tip:** Always define E(P) = QD − QS first. Then: existence = E(P) = 0 at some P > 0; stability = sign of dE/dP at equilibrium; uniqueness = monotonicity of E(P).

---

### Question 4

**Answer:**

This question asks about the transmission mechanism: **external shock in product market → factor market → general equilibrium restored**. This is the core of Koutsoyiannis's graphical illustration (Chapter 22, Section D, pp. 491-495).

**Step 1: Initial equilibrium.** Economy initially in GE with all markets cleared at Pₓ₀, Pᵧ₀, w₀, r₀.

**Step 2: Exogenous taste change.** Consumers shift preferences toward X, away from Y (substitutes). Demand for X shifts right (D₀ → D₁), demand for Y shifts left.

**Step 3: Short-run product market response.**
- Pₓ rises (P₀ → P₁), Qₓ increases (X₀ → X₁).
- Pᵧ falls, Qᵧ decreases (Y₁ → Y₀).
- Excess profits in X industry; losses in Y industry.

**Step 4: Firm-level adjustment.** Firms in X expand output along rising MC; firms in Y contract.

**Step 5: Factor market effects (the transmission).**
- X industry expands → D for L and K increases → wₓ and rₓ rise.
- Y industry contracts → D for L and K falls → wᵧ and rᵧ fall.
- Factor price differential emerges: wₓ > wᵧ, rₓ > rᵧ.

**Step 6: Factor mobility.** In perfect factor markets, L and K owners withdraw from Y (low w, r) and supply to X (high w, r). This shifts:
- Supply of factors to X downward (S shifts right → lower w, r in X).
- Supply of factors to Y upward (S shifts left → raises w, r in Y).

**Step 7: New factor price equalisation.** With X less capital-intensive than Y (K/L ratio smaller in X):
- Demand for L by X > release of L from Y → w rises overall.
- Release of K from Y > demand for K by X → r falls overall.
- New equilibrium: w₂ > w₀, r₂ < r₀ (factor prices equalised across industries).

**Step 8: Long-run product market adjustment.**
- Entry into X shifts Sₓ down → Pₓ settles at Pₓ₂ (between P₀ and P₁).
- Exit from Y shifts Sᵧ up → Pᵧ settles at Pᵧ₂ (between P₁ and P₀).

**Step 9: New GE.** All markets clear simultaneously with new set of prices (Pₓ₂, Pᵧ₂, w₂, r₂), new product mix (X₂ > X₀, Y₂ < Y₀), and all firms earning normal profits.

**Exam Tip:** The key insight is the *chain*: taste change → Pₓ ↑ → profits ↑ → factor demand ↑ → w ↑ → factor mobility → w/r equalisation → supply curves shift → new GE. Draw the 8-panel diagram from Koutsoyiannis (Figs 22.10-22.22). Mention increasing-cost industries.

---

## Topic 6B — Edgeworth Box & 2×2×2 Model

### Question 1

**Answer:**

**The 2×2×2 model** has: 2 factors (L, K), 2 commodities (X, Y), 2 consumers (A, B). (Koutsoyiannis pp. 496-499)

**Assumptions:**
1. Fixed supplies of L and K; homogeneous, perfectly divisible.
2. Two commodities X, Y; given technology; isoquants smooth, convex (diminishing MRTS); constant returns to scale; no production externalities.
3. Two consumers A, B; ordinal convex indifference curves (diminishing MRS); no consumption externalities (no bandwagon/snob/Veblen effects).
4. Consumers maximise utility; firms maximise profit.
5. Factors owned by consumers; full employment; all income spent.
6. Perfect competition in all markets.

**Production equilibrium via Edgeworth box:**

The Edgeworth production box has dimensions equal to total K and L. X-isoquants originate SW; Y-isoquants originate NE.

```
              K_total
   ┌─────────────────────┐ O_Y
   |  Y_3                |
   |    \                |
   |     \               |
   |      \  Contract    |
   |       \  curve      |
   |   Z    \            |
   |    \    \           |
   |     \    \          |
   |      \    \         |
   |       \    \        |
   O_X ──────────────────┘
          L_total
```

- **Contract curve:** locus of tangency points of X and Y isoquants → MRTSˣ_LK = MRTSʸ_LK.
- Points ON the contract curve are **Pareto-efficient in production**: impossible to increase output of one good without reducing the other.
- Points OFF the curve (e.g., Z) are inefficient — reallocation can increase at least one output.
- In perfect competition, profit maximisation requires each firm to set MRTS = w/r. Since w/r is same for both, equilibrium must be on the contract curve.

**General equilibrium of production condition:**
$$ \text{MRTS}^X_{L,K} = \text{MRTS}^Y_{L,K} = \frac{w}{r} $$

The production equilibrium is not unique (any point on contract curve is Pareto-optimal). With perfect competition, the specific point where MRTS = w/r is selected.

**Exam Tip:** Always label the Edgeworth box with Oₓ (SW) and Oᵧ (NE). Show that at off-contract-curve points, a reallocation can increase both outputs (the "lens" between two isoquants). The contract curve maps to the **production possibility curve (PPC)** in product space.

---

### Question 2

**Answer:**

This is the same mechanism as Topic 6A Q4 but asked specifically for the 2×2×2 framework. The answer follows the Koutsoyiannis path (pp. 491-495) using the 8-panel diagram.

**Shock:** Taste shift toward X (Dₓ ↑) and away from Y (Dᵧ ↓).

**Product market:**
- X industry: D₀ → D₁, Pₓ P₀ → P₁, Qₓ X₀ → X₁, excess profits.
- Y industry: D₀ → D₁, Pᵧ falls, Qᵧ Y₁ → Y₀, losses.

**Firm response:** X firms expand along MC (rising part of AC). Y firms contract.

**Factor market effects:**
- X: Dᴸ ↑ (L₀ → L₁), Dᴷ ↑ (K₀ → K₁), w↑, r↑.
- Y: Dᴸ ↓, Dᴷ ↓, w↓, r↓.
- Wage differential → factor mobility from Y to X.

**Factor mobility:** L and K migrate from Y to X → Sᴸ shifts right in X (lowers w), Sᴸ shifts left in Y (raises w). Same for K.

**New factor equilibrium:** With X less capital-intensive than Y:
- Net demand for L rises → w₂ > w₀.
- Net demand for K falls → r₂ < r₀.
- Factor prices equalised across industries at new levels.

**Long-run product adjustment:**
- Entry into X → Sₓ shifts right → Pₓ falls from P₁ to P₂.
- Exit from Y → Sᵧ shifts left → Pᵧ rises from P₁ to P₂.
- Both industries are increasing-cost → LAC shifts (up for X due to higher w; down for Y due to lower r).

**Final GE:** All four markets clear at (Pₓ₂, Pᵧ₂, w₂, r₂), product mix (X₂ > X₀, Y₂ < Y₀). Normal profits restored.

**Exam Tip:** The examiner wants to see that you understand *why* factor prices don't return to original levels — it's the different factor intensities (Stolper-Samuelson intuition). X is labour-intensive → rising w benefits X and hurts Y; Y is capital-intensive → falling r benefits Y and hurts X.

---

### Question 3

**Answer:**

The three static Pareto-efficiency properties of a GE state (Koutsoyiannis pp. 497-504):

**(a) Production equilibrium (efficiency in factor substitution)**

- Condition: MRTSˣ_LK = MRTSʸ_LK = w/r.
- Achieved on the Edgeworth contract curve of production.
- Optimal allocation of K and L between X and Y.
- PPC is derived by mapping the contract curve to product space.

**(b) Consumption equilibrium (efficiency in distribution)**

- Condition: MRSᴬ_xy = MRSᴮ_xy = Pₓ/Pᵧ.
- Achieved on the Edgeworth contract curve of consumption (within the consumption box of dimensions Xₑ, Yₑ).
- Optimal distribution of Xₑ and Yₑ between A and B.
- With perfect competition, the budget line slope = Pₓ/Pᵧ, and both consumers choose tangency points.

**(c) Simultaneous equilibrium (efficiency in product-mix)**

- Condition: MRPT_xy = MRSᴬ_xy = MRSᴮ_xy.
- In perfect competition: MRPT = MCₓ/MCᵧ = Pₓ/Pᵧ = MRS.
- The production sector's plans are consistent with households' plans.
- The output mix (Xₑ, Yₑ) is the one that consumers most prefer given production possibilities.

**Diagrammatic summary:**
```
PPC (product transformation curve)
   ↑
   |   MRPT = slope of PPC
   |      \
   |       \  E (equilibrium point)
   |        \   \
   |         \   \  (community indifference curve)
   |          \   \
   |           \___\_______
   O                         X

Conditions at E:
MRPT_xy = MRSᴬ_xy = MRSᴮ_xy = Pₓ/Pᵧ
```

**The three Pareto conditions together:**
1. MRSᴬ_xy = MRSᴮ_xy (efficient distribution of goods)
2. MRTSˣ_LK = MRTSʸ_LK (efficient factor allocation)
3. MRPT_xy = MRS_xy (efficient output mix)

**Exam Tip:** State the three conditions explicitly. Show that condition (3) marries the production side (MRPT from PPC) with the consumption side (MRS from indifference curves). This is the *Fundamental Condition of Pareto Optimality*.

---

### Question 4

**Answer:**

(This repeats Topic 6A Q1 — provide concise version.)

**General equilibrium** is a state where all markets and all decision-makers are simultaneously in equilibrium: every market cleared at positive prices, every consumer maximising utility, every firm maximising profit.

| | Partial Equilibrium | General Equilibrium |
|---|---|---|
| **Scope** | Single market | All interdependent markets |
| **Ceteris paribus** | Holds | Does not hold — everything depends on everything |
| **Price determination** | One price | All prices simultaneously |
| **Cross-effects** | Ignored | Explicitly modelled |
| **Example** | Tax on petrol → petrol price ↑ | Tax on petrol → petrol ↑ → public transport ↑ → car sales ↓ → steel ↓ → wages ↓ → all markets |

**Example:** Coffee and tea markets. PE analysis of a frost destroying coffee crops: coffee price rises. GE analysis: coffee price ↑ → consumers switch to tea → tea price ↑ → tea farmers expand → demand for factors in tea ↑ → wages in tea regions ↑ → income ↑ → further demand shifts → ... until all markets clear.

**Exam Tip:** Use the coffee/tea example or the X/Y example from Koutsoyiannis. Emphasise that GE captures feedback loops that PE misses.

---

### Question 5

**Answer:**

**Assumptions of the 2×2×2 model** (Koutsoyiannis pp. 496-497):

1. **2 factors:** L (labour) and K (capital), fixed supplies, homogeneous, perfectly divisible.
2. **2 commodities:** X and Y, given technology, smooth convex isoquants (diminishing MRTS), CRTS, independent production functions.
3. **2 consumers:** A and B, ordinal convex indifference curves (diminishing MRS), independent preferences (no bandwagon/snob/Veblen).
4. **Maximising behaviour:** Consumers maximise utility; firms maximise profit.
5. **Ownership:** Consumers own factors; full employment; all income spent.
6. **Perfect competition:** All agents are price-takers facing same (Pₓ, Pᵧ, w, r).

**How GE is reached:**

1. **Production side:** Profit-maximising firms choose K/L mix such that MRTSˣ_LK = MRTSʸ_LK = w/r. This places production on the Edgeworth contract curve → efficient production.
2. **Product transformation:** The contract curve maps to the PPC. Firms choose output where slope of PPC = MRPT = Pₓ/Pᵧ.
3. **Consumption side:** Given (Xₑ, Yₑ) from production and prices Pₓ/Pᵧ, consumers maximise utility: MRSᴬ = MRSᴮ = Pₓ/Pᵧ. This places consumption on the Edgeworth contract curve of consumption.
4. **Simultaneous equilibrium:** MRPT = MRSᴬ = MRSᴮ = Pₓ/Pᵧ ensures consistency between production and consumption plans.
5. **Factor and commodity prices:** Determined (as ratios only, with numeraire) by the system of equations: MRTS conditions, marginal productivity conditions (w = MPPL·P, r = MPPK·P), and MRS conditions.
6. **Income distribution:** Determined by factor ownership distribution, which must be consistent with the equilibrium consumption pattern (indeterminate without additional assumptions).

**Exam Tip:** The four markets (L, K, X, Y) must clear simultaneously. The system has 18 equations in 18 unknowns but one equation is redundant → prices determined only as ratios. Setting a numeraire resolves this.

---

### Question 6

**Answer:**

**Given:**
- A: Uₐ = Xₐ·Yₐ (Cobb-Douglas)
- B: U_B = X_B + Y_B (perfect substitutes — linear utility)
- Endowments: Xₐ⁰ = 10, Yₐ⁰ = 50; X_B⁰ = 50, Y_B⁰ = 10
- Total X = 60, Total Y = 60

**(a) Edgeworth box dimensions:** Width = 60 (total X), Height = 60 (total Y).

**(b) Pareto efficiency condition:**

For A: MRSₐ = MUₓ/MUᵧ = Yₐ/Xₐ (from Uₐ = Xₐ·Yₐ)
For B: MRS_B = 1/1 = 1 (from U_B = X_B + Y_B, MU of each good = 1)

Pareto efficiency requires MRSₐ = MRS_B (interior solutions):
Yₐ/Xₐ = 1 ⇒ Yₐ = Xₐ

If B is at a corner (consuming only one good), MRS_B may not equal 1 at the boundary. B with perfect substitutes will consume the cheaper good exclusively unless prices equalise MRS exactly.

The **contract curve** is where MRSₐ = MRS_B. For interior allocations:
Yₐ = Xₐ (for all allocations where B consumes both goods)

But B's utility is X_B + Y_B. Since MRS_B = 1 always, if Pₓ ≠ Pᵧ, B consumes only the cheaper good. If Pₓ = Pᵧ, B is indifferent among any mix.

For interior Pareto efficiency: Yₐ = Xₐ, 0 ≤ Xₐ ≤ 60, 0 ≤ Yₐ ≤ 60.

**(c) Check endowment point (Xₐ⁰=10, Yₐ⁰=50):**

MRSₐ at endowment = 50/10 = 5 ≠ 1 = MRS_B.
Since MRSₐ > MRS_B (5 > 1), A values Y much more relative to X than B does. There exist trades making both better off: A should give up some Y for X from B. The endowment is **not Pareto-efficient**.

Uₐ(10,50) = 10×50 = 500
U_B(50,10) = 50 + 10 = 60

**(d) Is (Xₐ=80, Yₐ=50) feasible?** No — total X = 60, so Xₐ cannot be 80. This allocation is **outside the Edgeworth box** and infeasible.

**(e) Check (Xₐ=80, Yₐ=50) for efficiency and core:**

Infeasible — total X endowment is only 60. Cannot be in the core (core allocations must be feasible).

**(f) Contract curve equation:** Yₐ = Xₐ (for interior allocations where B consumes both goods).

**Exam Tip:** For Cobb-Douglas vs linear utility, the contract curve is derived by equating MRS. Check corner solutions — B's linear utility often leads to corner consumption. Always verify feasibility first.

---

### Question 7

**Answer:**

**The 2×2×2 Walrasian system** (Koutsoyiannis pp. 497-509):

**Unknowns (18):**
- Quantities demanded of X and Y by A and B: 2×2 = 4
- Quantities supplied of L and K by A and B: 2×2 = 4
- Quantities demanded of L and K by X and Y firms: 2×2 = 4
- Quantities supplied of X and Y by firms: 2
- Prices of X and Y: 2
- Prices of L and K: 2
- **Total: 18**

**Equations (18):**
- Demand functions of A and B for X and Y: 2×2 = 4
- Supply functions of L and K by A and B: 2×2 = 4
- Demand functions for L and K by firms: 2×2 = 4
- Supply functions of X and Y by firms: 2
- Market-clearing equations for X and Y: 2
- Market-clearing equations for L and K: 2
- **Total: 18**

**Does a GE solution exist?**

Equality of equations and unknowns is **neither necessary nor sufficient**. Three issues:

1. **Walras' Law:** One equation is redundant — if n−1 markets clear, the nth must also clear. This reduces independent equations to 17 vs 18 unknowns.
2. **Numeraire:** One price must be chosen as numeraire (set = 1), reducing unknowns to 17. Now 17 independent equations = 17 unknowns → system is determinate *in relative prices*.
3. **Non-negativity:** Prices must be ≥ 0 and quantities ≥ 0. The equation-counting approach doesn't guarantee this.

**Arrow-Debreu (1954) existence proof** requires:
- Perfect competition
- No indivisibilities
- No increasing returns to scale
- Continuous, convex preferences and production sets
- Well-behaved excess demand functions

Under these conditions, a GE solution **does exist**. However, without these assumptions (oligopoly, indivisibilities, increasing returns), existence is not guaranteed in the real world.

**Exam Tip:** The examiner expects you to know that equation-counting is insufficient. Mention Walras' Law, the numeraire device, and the Arrow-Debreu conditions. The system determines relative prices only — absolute prices require money.

---

### Question 8

**Answer:**

**Walras' Law** states that the sum of excess demands across all markets equals zero:
∑ Pᵢ·EDᵢ = 0 for all i = 1, ..., n

If there are n goods and n−1 markets are in equilibrium, the nth market is automatically in equilibrium.

**Given:** Three-good world (Z₁, Z₂, Z₃). Equilibrium prices for Z₂ and Z₃ are given (P₂*, P₃*). We need to find Z₁ equilibrium.

**Walras' Law approach:**

Let excess demand for good i be EDᵢ(P₁, P₂, P₃) = QDᵢ − QSᵢ.

Walras' Law: P₁·ED₁ + P₂·ED₂ + P₃·ED₃ = 0

If markets 2 and 3 clear: ED₂ = 0 and ED₃ = 0
Then: P₁·ED₁ = 0 ⇒ ED₁ = 0 (since P₁ > 0)

Thus Z₁'s market is automatically in equilibrium when Z₂ and Z₃ are.

**Solving price ratios:**

With Walras' Law, one price is redundant. Set P₁ = 1 (numeraire).

Then solve for P₂/P₁ and P₃/P₁ from the equilibrium conditions:
- MRSᵢ_12 = P₂/P₁ for all consumers (consumption equilibrium)
- MRTS_LK = w/r (production equilibrium, linking to factor prices)
- P₂ = MC₂, P₃ = MC₃ (perfect competition pricing)

**Example:** Suppose excess demand functions are:
ED₁ = 10 − 2P₁ + P₂ − 3P₃
ED₂ = −5 + P₁ − 4P₂ + 2P₃
ED₃ = 8 − 3P₁ + P₂ − P₃

Set P₁ = 1 (numeraire). Solve ED₂ = 0 and ED₃ = 0 for P₂, P₃:
−5 + 1 − 4P₂ + 2P₃ = 0 → −4 − 4P₂ + 2P₃ = 0
8 − 3 + P₂ − P₃ = 0 → 5 + P₂ − P₃ = 0 → P₃ = 5 + P₂

Substitute: −4 − 4P₂ + 2(5 + P₂) = 0 → −4 − 4P₂ + 10 + 2P₂ = 0 → 6 − 2P₂ = 0 → P₂ = 3
Then P₃ = 5 + 3 = 8

Check ED₁: 10 − 2(1) + 3 − 3(8) = 10 − 2 + 3 − 24 = −13 ≠ 0.

Wait — the ED functions must be consistent. If they satisfy Walras' Law, ED₁ must be zero when ED₂ = ED₃ = 0. Let me verify:

At (P₁=1, P₂=3, P₃=8):
ED₂ = −5 + 1 − 4(3) + 2(8) = −5 + 1 − 12 + 16 = 0 ✓
ED₃ = 8 − 3(1) + 3 − 8 = 0 ✓
ED₁ = 10 − 2(1) + 3 − 3(8) = 10 − 2 + 3 − 24 = −13

These excess demands do NOT satisfy Walras' Law. The functions above are not well-specified.

**Correct approach:** For a consistent Walrasian system, the excess demands must satisfy P₁·ED₁ + P₂·ED₂ + P₃·ED₃ = 0 identically. This is a property of the underlying utility-maximisation and profit-maximisation of agents.

Given consistent ED functions: solve ED₂ = 0 and ED₃ = 0 for P₂, P₃ (with P₁ = 1). Then ED₁ = 0 automatically by Walras' Law.

**Key insight:** In an n-good Walrasian system, you only need to solve n−1 market-clearing equations. The nth is automatically satisfied.

**Exam Tip:** State Walras' Law explicitly. Show that with n goods you solve n−1 markets. Set the numeraire good price = 1. Always verify the system is consistent — if ED functions don't satisfy Walras' Law, they're not derived from utility/profit maximisation.

---

## Topic 7 — Game Theory & IO

### Question 1

**Answer:**

**Nash equilibrium:** A set of strategies (one for each player) such that no player can unilaterally deviate and improve their payoff. Each player's strategy is a **best response** to the other's.

**Bertrand duopoly with differentiated products:**

Market: q₁ = 100 − 2p₁ + p₂, q₂ = 100 − 2p₂ + p₁
MC = $10 for both firms.

**Step 1: Profit functions.**

π₁ = (p₁ − 10)(100 − 2p₁ + p₂)
π₂ = (p₂ − 10)(100 − 2p₂ + p₁)

**Step 2: First-order conditions (best responses).**

∂π₁/∂p₁ = (1)(100 − 2p₁ + p₂) + (p₁ − 10)(−2) = 0
100 − 2p₁ + p₂ − 2p₁ + 20 = 0
120 − 4p₁ + p₂ = 0
4p₁ = 120 + p₂
p₁ = 30 + p₂/4 ← Best response function of Firm 1

Similarly: p₂ = 30 + p₁/4 ← Best response function of Firm 2

**Step 3: Solve Nash equilibrium.**

Substitute BR₂ into BR₁:
p₁ = 30 + (30 + p₁/4)/4
p₁ = 30 + 7.5 + p₁/16
p₁ − p₁/16 = 37.5
(15/16)p₁ = 37.5
p₁ = 37.5 × 16/15 = 40

p₂ = 30 + 40/4 = 30 + 10 = 40

**Nash equilibrium:** (p₁*, p₂*) = (40, 40)

**Step 4: Quantities and profits.**

q₁ = 100 − 2(40) + 40 = 100 − 80 + 40 = 60
q₂ = 100 − 2(40) + 40 = 60

π₁ = (40 − 10)(60) = 30 × 60 = 1800
π₂ = (40 − 10)(60) = 1800

**Comparison with monopoly:** If they colluded at p = ? Joint profit max would solve different FOC. With differentiated products and symmetric costs, the collusive price would be higher (e.g., set industry MR = MC across both products).

**Exam Tip:** Always derive best response functions from FOCs. The Nash equilibrium is the intersection of BR functions. For Bertrand with differentiated products, prices are strategic complements (BR slopes are positive: dp₁/dp₂ = ¼ > 0). Draw the BR diagram if asked.

---

### Question 2

**Answer:**

**Prisoners' Dilemma (PD):** A game where individually rational choices lead to a collectively worse outcome. (Koutsoyiannis pp. 412-413)

**Payoff matrix (years in prison — lower is better):**

```
                    Prisoner B
                Confess     Don't Confess
Prisoner A  ┌──────────────────────────────
Confess     │ (10, 10)     (0, 20)
Don't       │ (20, 0)      (0, 0)
```

- **Dominant strategy** for each: Confess (10 < 20 if other doesn't; 10 < 0 ... wait, confess gives 10 vs 0 for don't confess when other doesn't confess)

Actually, the standard PD payoffs (negative numbers = prison years, more negative = worse):

```
                    Prisoner B
                Confess     Don't Confess
Prisoner A  ┌──────────────────────────────
Confess     │ (-5, -5)     (0, -10)
Don't       │ (-10, 0)     (-1, -1)
```

The dominant strategy is **Confess** (better regardless of what the other does). Yet mutual confession (−5,−5) is worse than mutual non-confession (−1,−1). Hence the "dilemma."

**Implications for oligopoly:**

1. **Price competition:** Firms have incentive to undercut each other (confess = cut price, don't confess = keep high price). The Nash equilibrium is low-price, low-profit (like Bertrand paradox) even though collusion would yield higher joint profits.
2. **Advertising wars:** Firms advertise because rival will if they don't, but mutual advertising reduces profits (arms race).
3. **Investment/R&D:** Each firm fears being left behind → overinvestment.
4. **Tacit collusion is fragile:** The PD structure makes cooperation hard to sustain without repeated interaction.

**Why oligopoly differs from PD:** In repeated games, punishment strategies (grim trigger, tit-for-tat) can sustain cooperation. If the game is infinitely repeated and players are sufficiently patient (discount factor δ > δ*), the cooperative outcome can be a subgame perfect Nash equilibrium (Folk Theorem).

**Exam Tip:** Draw the PD matrix. Emphasise that the dilemma arises from the structure of payoffs (defection dominates cooperation), not from irrationality. Link to oligopoly: undercutting is individually rational but collectively destructive.

---

### Question 3

**Answer:**

**Market entry game (extensive form):**

Consider an incumbent monopolist (I) and a potential entrant (E).

**Structure:**
1. E decides: Enter (IN) or Stay Out (OUT).
2. If OUT: I continues as monopolist; payoff: (0, 100) (E=0, I=100).
3. If IN: I decides: Accommodate (share market) or Fight (price war).
   - Accommodate: (40, 40) (duopoly)
   - Fight: (−10, −10) (both lose)

```
Decision tree (extensive form):

      E
     / \
   IN   OUT
   /      \
  I      (0, 100)
 / \
A   F
|   |
(40,40) (-10,-10)
```

**Backward induction solution:**

1. At I's decision node (after E enters): Compare payoffs.
   - Accommodate → π_I = 40
   - Fight → π_I = −10
   - Rational I chooses **Accommodate** (40 > −10).

2. At E's initial decision node: E anticipates I's response.
   - Enter → I accommodates → π_E = 40
   - Stay out → π_E = 0
   - Rational E chooses **Enter** (40 > 0).

**Subgame perfect Nash equilibrium (SPNE):** (Enter, Accommodate)
Payoffs: (40, 40)

**If I could commit to fight:** If I credibly threatens to fight entry (burn bridges, excess capacity), E would stay out. But the threat is **not credible** because once E enters, I prefers to accommodate.

**Exam Tip:** Always solve by backward induction (rollback). Underline that subgame perfection eliminates non-credible threats. The key insight: accommodation is the subgame perfect response, so entry occurs.

---

### Question 4

**Answer:**

**Question:** Show that "Down/Right" is SPNE if the stage game is infinitely repeated with grim trigger strategies.

**Given payoff matrix (simultaneous-move stage game):**

```
            Column Player
          Left    Middle   Right
Row    ┌─────────────────────────
Up     │ (3,3)   (0,5)    (1,1)
Down   │ (5,0)   (1,1)    (2,2)*
```

The cell marked * (Down, Right) gives (2,2).

**One-shot Nash equilibria:** Check best responses:
- If Row plays Up → Column best response is Middle (5 > 3 > 1)
- If Row plays Down → Column best response is Right (2 > 1 > 0)
- If Column plays Left → Row best response is Down (5 > 3)
- If Column plays Middle → Row best response is Up (0... wait, Row getting 0 from Up-Middle)

Let me re-check:
- Up-Left: (3,3); Up-Middle: (0,5); Up-Right: (1,1)
- Down-Left: (5,0); Down-Middle: (1,1); Down-Right: (2,2)

Best responses:
- Row: BR(Left) = Down (5 > 3); BR(Middle) = Up/Down (0=0... no, Up gives 0, Down gives 1) → Down (1 > 0); BR(Right) = Down (2 > 1)
- Column: BR(Up) = Middle (5 > 3 > 1); BR(Down) = Right (2 > 1 > 0)

Pure strategy Nash equilibria:
- (Down, Right): Row: 2 > 1 if Column at Right; Column: 2 > 1 > 0 if Row at Down ✓
- (Up, Middle): Row: 0... hmm no, Column's BR to Up is Middle, but Row's BR to Middle? Up gives 0, Down gives 1 → Row would deviate to Down.

Let me check (Up, Middle): Row gets 0, could deviate to Down get 5 if Column stays Middle... wait, if Row deviates to Down, Column would then want to deviate to... Let me check properly.

Actually, there's no pure strategy NE except (Down, Right). Let me verify:
- (Up, Left): Row can deviate to Down for 5 > 3 ✓ not NE
- (Up, Middle): Row gets 0, can deviate to Down for 1 > 0 ✓ not NE
- (Up, Right): Row gets 1, can deviate to Down for 2 > 1 ✓ not NE
- (Down, Left): Column gets 0, can deviate to Right for 2 > 0 ✓ not NE
- (Down, Middle): Column gets 1, can deviate to Right for 2 > 1 ✓ not NE
- (Down, Right): Row gets 2 > 1 (vs Up), Column gets 2 > 1 > 0 ✓ NE

So (Down, Right) = (2,2) is the unique NE.

**Infinitely repeated game with grim trigger:**

**Grim trigger strategy:** Play (Down, Right) in every period as long as no one has ever deviated. If anyone deviates, play the non-cooperative Nash equilibrium (Down, Right) forever — wait, that's the same as the cooperative outcome in this case.

Actually, if this game has a cooperative outcome that is NOT the Nash equilibrium, players can sustain it via punishment. But here the NE IS (Down, Right). The question may be about sustaining some other cooperative outcome like (Up, Left) = (3,3) which Pareto dominates (2,2).

Let me re-interpret: The question says "show 'down/right' is SPNE if infinitely repeated (grim trigger)." Since (Down, Right) is already the stage-game NE, it's trivially a SPNE when repeated (play NE every period). The Folk Theorem says any feasible, individually rational payoff vector can be sustained for sufficient patience.

If the question wants to show that (Down, Right) = (2,2) can be sustained as SPNE with grim trigger (where deviation is punished by reverting to some worse outcome even in the stage game), the standard approach is:

**Sustaining (Down, Right) with grim trigger to some worse punishment:**

Suppose the cooperative outcome is actually a higher-payoff cell like (Up, Left) = (3,3). With grim trigger: play (Up, Left) as long as no deviation; if anyone deviates, revert to stage-game NE (Down, Right) = (2,2) forever.

- Deviation from (Up, Left): Row gets 5 (by playing Down if Column plays Left) in deviation period, then 2 forever after.
- Cooperation: Row gets 3 every period.

**Sustaining condition (discount factor δ):**
Cooperation PV = 3 + 3δ + 3δ² + ... = 3/(1−δ)
Deviation PV = 5 + 2δ + 2δ² + ... = 5 + 2δ/(1−δ)

Cooperate if: 3/(1−δ) ≥ 5 + 2δ/(1−δ)
3 ≥ 5(1−δ) + 2δ
3 ≥ 5 − 5δ + 2δ
3 ≥ 5 − 3δ
3δ ≥ 2
δ ≥ 2/3

So if players are sufficiently patient (δ ≥ ⅔), (Up, Left) can be sustained as SPNE with grim trigger, with (Down, Right) as the punishment.

**Exam Tip:** If the matrix shows (Down, Right) as the mutual best response, it's the stage-game NE. In repeated play, cooperation on a Pareto-superior outcome can be sustained if the discount factor is high enough, with reversion to the stage-game NE as punishment.

---

### Question 5

**Answer:**

**Paradox of backward induction:** In finite-horizon games of perfect information, backward induction predicts cooperation unravels from the end. For example, in a finitely repeated Prisoners' Dilemma:

- Last period T: both defect (dominant strategy).
- Period T−1: knowing T is defection, why cooperate? Both defect.
- This unravels to defection in EVERY period, even though both would prefer mutual cooperation.

**The paradox:** The prediction contradicts experimental evidence — people cooperate in finitely repeated PDs, at least in early periods.

**Can multiple Nash equilibria help?**

Yes. The paradox arises when the stage game has a **unique** Nash equilibrium. If there are **multiple** NE, backward induction may not yield a unique prediction:

1. **Multiple equilibria change the endgame.** If the stage game has a cooperative NE (alongside the non-cooperative one), the unraveling argument weakens because the terminal period may not force defection.
2. **Bargaining models:** In finite-horizon bargaining, if there are multiple equilibria (e.g., multiple acceptable splits), the unique backward induction solution may break down.
3. **Coordination on "good" equilibrium:** If both players prefer one equilibrium, they may coordinate on it, and punishment for deviation can sustain cooperation even in finite games.
4. **Reputation effects:** With incomplete information about types, the unraveling is limited — players may maintain cooperation to build reputation.

**Example:** In a finitely repeated game where the stage game has both (Cooperate, Cooperate) and (Defect, Defect) as NE, players can sustain cooperation throughout because the "punishment" of reverting to the bad equilibrium deters deviation.

**Key insight from Koutsoyiannis (p. 413):** The "dominant strategy" maximin assumption leads to worse outcomes. If communication or trust existed, superior outcomes are achievable. Multiple equilibria expand the set of feasible outcomes.

**Exam Tip:** The paradox is that rationality (backward induction) leads to inefficient outcomes. Multiple equilibria can help by providing punishment strategies that make cooperation sustainable. Mention the Folk Theorem connection.

---

### Question 6

**Answer:**

**Centipede game (Rosenthal, 1981):** A sequential game where two players alternately choose to "Take" or "Pass." The total pot grows with each Pass, but taking ends the game.

**Structure (simplified 4-move version):**

```
Round 1: Player 1 chooses Take (T) or Pass (P)
– T → (1, 0) [P1 gets 1, P2 gets 0]
– P → Round 2

Round 2: Player 2 chooses T or P
– T → (0, 3) [P1 gets 0, P2 gets 3]
– P → Round 3

Round 3: Player 1 chooses T or P
– T → (3, 1) [P1 gets 3, P2 gets 1]
– P → Round 4

Round 4: Player 2 chooses T or P (automatic — last round)
– T → (1, 4)
– P → (2, 2) [only if both pass all the way to the end]
```

**Backward induction solution:**

Round 4: P2 compares T→ (1,4) vs P → (2,2). Gets 4 > 2 → chooses **Take**.
Round 3: P1 knows Round 4 yields (1,4) if P now. T gives (3,1). Since game ends at T, P1 gets 3 > 1 → chooses **Take**.
Round 2: P2 predicts Round 3 yields (3,1) if P now. T gives (0,3). 3 > 1 for P2? No — 3 > 1 for P2? Wait, T gives P2 payoff of 3, P gives P2 payoff of 1 eventually. So P2 chooses **Take**.
Round 1: P1 predicts Round 2 yields (0,3) if P now. T gives (1,0). 1 > 0 → chooses **Take**.

**Prediction:** P1 takes in Round 1 → (1,0). Both get very little.

**Paradox:** Both players would be better off if they passed all the way to the end (2,2), but backward induction says they won't. The cooperative outcome is achievable only if neither acts "rationally" in the backward-induction sense.

**Overcoming the paradox:**

1. **Incomplete information (reputation):** If there's a small probability that P1 is "altruistic" (always passes), P2 may Pass in early rounds to find out, and P1 may Pass to build reputation. This limits the unraveling.

2. **Multiple Nash equilibria:** The centipede game has multiple NE. Backward induction selects one, but alternative equilibria (e.g., both always Pass) can be sustained if each believes the other will Pass.

3. **Bounded rationality:** Real players may not perform full backward induction, especially in long games. Experiments show most pairs reach the middle or end before someone Takes.

4. **Social preferences:** Fairness, reciprocity, and altruism lead players to Pass more often than predicted. The (2,2) outcome at the end is fair, and subjects value reaching it.

5. **Incomplete information about rationality:** If there is a tiny chance the opponent is a "cooperative type" who always P's, it becomes rational to P until late rounds (Kreps-Milgrom-Roberts-Wilson, 1982).

**Key insight from experimental evidence:** Backward induction is a powerful logical principle but humans deviate from it systematically. The centipede game illustrates the gap between theoretical prediction (immediate take) and actual behaviour (substantial passing).

**Exam Tip:** Draw the game tree. Show backward induction step-by-step. The paradox: individually rational choices (taking) produce collectively inferior outcome. Incomplete information and social preferences can resolve this.

---

## Topic 8 — Externalities, Public Goods & Information

### Question 1

**Answer:**

**Tragedy of the Commons** (Hardin, 1968): When a resource is owned in common (no one has exclusive property rights), each individual acting rationally in their self-interest depletes the resource, ultimately destroying it for everyone.

**Mechanism:** Each user adds one more animal to the common pasture, capturing the full benefit (e.g., market value of the animal) but sharing the cost of overgrazing with all other users. Private marginal benefit > social marginal benefit → overuse.

**Example:** A fishing ground open to all fishers. Each fisher catches as many fish as possible before others do. Individual rationality: "If I don't catch them, someone else will." Result: overfishing → stock collapse → everyone loses. Each fisher ignores the negative externality imposed on others.

**Solution:** Private property rights (each fisher owns a share of the lake), government regulation (catch limits, quotas), or Pigouvian taxes (tax per fish caught equal to marginal social damage).

**Exam Tip:** Link to externalities: it's a negative production externality where each user's action reduces others' available resource. The private cost < social cost. Coase Theorem suggests assigning property rights.

---

### Question 2

**Answer:**

**Steel-fishery pollution externality:**

A steel mill (S) produces steel and, as a byproduct, pollution (x) that harms a downstream fishery (F). The steel mill's cost function: C_S(S, x) (higher x reduces cost: ∂C_S/∂x < 0). The fishery's cost function: C_F(F, x) (higher x increases cost: ∂C_F/∂x > 0). The steel mill does not pay for the damage.

**(i) Individual profit maximisation (unregulated)**

Steel mill maximises: π_S = P_S·S − C_S(S, x)
FOCs:
∂π_S/∂S = P_S − ∂C_S/∂S = 0 → P_S = MC_S (private)
∂π_S/∂x = −∂C_S/∂x = 0 → MC_S_x = 0 (since ∂C_S/∂x < 0, marginal benefit of pollution = 0 → use pollution until ∂C_S/∂x = 0)

Fishery maximises: π_F = P_F·F − C_F(F, x)
FOC: ∂π_F/∂F = P_F − ∂C_F/∂F = 0 → P_F = MC_F

The steel mill chooses pollution level x* where its marginal private benefit of pollution = 0, ignoring the cost imposed on the fishery. Result: **too much pollution** (x* > x° social optimum).

**(ii) Joint profit maximisation (merger)**

Maximise joint profit: Π_J = P_S·S − C_S(S, x) + P_F·F − C_F(F, x)

FOCs:
∂Π_J/∂S = P_S − ∂C_S/∂S = 0 → P_S = MC_S
∂Π_J/∂F = P_F − ∂C_F/∂F = 0 → P_F = MC_F
∂Π_J/∂x = −∂C_S/∂x − ∂C_F/∂x = 0 → −∂C_S/∂x = ∂C_F/∂x

The joint optimum sets pollution at x° where the marginal benefit of pollution to the steel mill equals the marginal damage to the fishery. Since ∂C_F/∂x > 0, we need −∂C_S/∂x > 0 (steel mill benefits from pollution) equals marginal damage. **Less pollution** than unregulated case: x° < x*.

```
MC ($)
  ↑
  |    MSC = MC_S + MC_F
  |         /
  |        /   MC_S (private)
  |       /   /
  |      /   /
  |     /  /
  |    / /
  |   //
  |  /
  | / 
  |/___________________ Pollution (x)
      x°   x*
```

- x*: unregulated equilibrium (steel mill ignores damage)
- x°: social optimum (marginal benefit = marginal damage)
- DWL = triangle between x° and x*

**(iii) Property rights (Coase Theorem)**

If property rights are well-defined and transaction costs are zero, bargaining achieves the efficient outcome regardless of who has rights.

**Case A: Fishery has right to clean water.**
- Fishery can demand zero pollution (or sue for damages).
- Steel mill can pay fishery to allow some pollution.
- They negotiate to x° where marginal benefit = marginal damage.
- Steel mill pays compensation between ∂C_F/∂x and −∂C_S/∂x per unit.

**Case B: Steel mill has right to pollute.**
- Steel mill can pollute x*.
- Fishery can pay steel mill to reduce pollution.
- They negotiate to x° where marginal benefit = marginal damage.
- Fishery pays steel mill between −∂C_S/∂x and ∂C_F/∂x per unit of reduction.

**Coase Theorem:** Regardless of initial allocation of property rights, bargaining leads to the efficient pollution level x° (provided zero transaction costs and well-defined rights). The distribution of wealth differs (who pays whom) but the quantity of pollution is the same.

**Exam Tip:** Draw the marginal benefit (to steel mill) and marginal cost (to fishery) diagram. The social optimum equates MB = MC. Show the DWL from excessive pollution in the unregulated case. State Coase Theorem explicitly.

---

### Question 3

**Answer:**

**Asymmetric information → market disappearance (Market for Lemons, Akerlof, 1970):**

**Market for used cars:**
- Sellers know the true quality of their car (high-quality "peaches" or low-quality "lemons").
- Buyers cannot distinguish quality ex ante.
- Suppose 50% are peaches (value $10,000 to buyer, $8,000 to seller) and 50% are lemons (value $5,000 to buyer, $3,000 to seller).

**Full information:** Two separate markets — peaches trade at $8,000-$10,000, lemons at $3,000-$5,000. Both types trade.

**Asymmetric information:** Buyers know only the average quality. Willing to pay expected value = 0.5×$10,000 + 0.5×$5,000 = $7,500.

**Result:** Peach owners value their cars at $8,000 (reservation price). The market price of $7,500 is below their reservation → peach owners **withdraw from market**. Only lemons remain.

**Adverse selection:** Now lemons are 100% of the market. Buyers update: expected value = $5,000. Lemons trade at $3,000-$5,000.

**Market partially survives:** Only lemons trade at ~$4,000. Peaches have disappeared from the market.

**Complete collapse:** If the lemons' reservation price is above what buyers will pay, even the lemon market collapses.

**General principle:** Asymmetric information can reduce or eliminate markets for high-quality goods. The uninformed side (buyers) cannot distinguish quality → price reflects average quality → high-quality sellers exit → average quality falls → price falls → further exit → potential market collapse.

**Exam Tip:** This is the "Market for Lemons" (Akerlof, 1970, Nobel Prize). The key intuition: asymmetric information can destroy markets. Solutions: signalling (warranties, certifications), screening, reputation mechanisms.

---

### Question 4

**Answer:**

**Spence's education signaling model** (Spence, 1973; Munoz-Garcia pp. 573-578):

**Setup:**
- Workers have private information about their productivity type: High (H) or Low (L).
- Productivity: H contributes more to firm profits than L.
- Education (e.g., MBA) is costly but does NOT increase productivity — it is a **signal** of type.
- Cost of education is lower for H types (c_H) than for L types (c_L): c_L > c_H (single-crossing property).
- Firms observe education level but NOT productivity; offer wages based on observed education.

**Key elements:**

**Signaling game structure:**
1. Nature chooses worker type (H or L) — worker knows own type, firm does not.
2. Worker chooses education level e ∈ {0, 1} (or continuous).
3. Firm observes e, updates beliefs about type, offers wage w(e).
4. Payoffs: Worker gets w(e) − c(e); Firm gets productivity − w(e).

**Single-crossing property:** The marginal cost of education is lower for H types. This allows education to serve as a credible signal.

**Perfect Bayesian Equilibrium (PBE):**

**Separating equilibrium:**
- H type acquires education (e=1), L type does not (e=0).
- Firm's beliefs: μ(H|e=1) = 1, μ(H|e=0) = 0.
- Firm offers high wage w_H to educated, low wage w_L to uneducated.
- Conditions:
  - H prefers e=1: w_H − c_H ≥ w_L (no incentive to deviate)
  - L prefers e=0: w_L ≥ w_H − c_L (education too costly)
  - ⇒ w_H − w_L ∈ [c_H, c_L] (the "signaling interval")
- Feasible if c_L > c_H (single-crossing holds).

**Pooling equilibrium:**
- Neither type acquires education (e=0 for both).
- Firm's off-equilibrium beliefs: μ(H|e=1) ∈ [0, 1] (arbitrary, but must support equilibrium).
- Both types get low wage w_L = average productivity.
- Condition: w_L ≥ w_H − c_H (both find education not worthwhile given firm's pessimistic beliefs about educated workers).

**Key insight (Spence):** Education can serve as a signal of unobservable productivity even if it adds no human capital. The signal is effective because it is differentially costly (c_L > c_H). The separating equilibrium is Pareto-inferior to full information (wasteful education) but restores some information to the market.

**Welfare implications:**
- Separating: education is costly and socially wasteful (no productivity gain), but enables sorting.
- Pooling: no education cost but adverse selection persists.
- Which is better depends on parameters.

**Exam Tip:** Draw the game tree (Nature → Worker → Firm). Explain single-crossing condition. State that education is a signal, NOT human capital in this model. Mention that Spence won the Nobel Prize (2001) for this.

---

### Question 5

**Answer:**

**Consumption externality:** Occurs when one consumer's utility depends not only on their own consumption but also on others' consumption (positively or negatively). The market does not price this interdependence.

**Bandwagon effect** (Leibenstein, 1950; Koutsoyiannis p. 24208):
- A **positive** consumption externality: an individual's demand for a good increases because others are consuming it.
- "Keeping up with the Joneses" — the desire to conform, be fashionable, or belong to a group.
- **Effect on demand:** Market demand becomes more elastic (bandwagon effect reinforces price changes).
- **Example:** Smartphones, social media platforms, fashion — demand rises as more people adopt.
- **Graphically:** The bandwagon effect rotates/shifts the demand curve rightward as more consumers buy, creating a network effect.

**Snob effect** (Leibenstein, 1950; Koutsoyiannis p. 26641):
- A **negative** consumption externality: an individual's demand falls as more people consume the good.
- The desire to be exclusive, unique, or distinguish oneself from the masses.
- **Effect on demand:** Market demand becomes less elastic — snobs pay premium for exclusivity.
- **Example:** Luxury goods, art, rare wines, designer fashion — valued partly because few can afford them.
- **Graphically:** The snob effect shifts demand leftward as the good becomes more common.

```
Quantity Demanded
   ↑
   |    D_bandwagon  (reinforcing — shifts right)
   |       /
   |      /
   |     / D_normal
   |    /
   |   / D_snob (counteracting — shifts left)
   |  /
   | /
   |/__________________ Price
```

**Veblen effect** (conspicuous consumption): Demand increases with price because high price signals status. Related to snob effect but driven by price signalling.

**Exam Tip:** Define consumption externality as utility interdependence: Uᵢ = Uᵢ(Cᵢ, Cⱼ). Bandwagon = positive interdependence (want to match others). Snob = negative interdependence (want to be different). Mention Leibenstein (1950) "Bandwagon, Snob, and Veblen Effects in the Theory of Consumers' Demand."

---

### Question 6

**Answer:**

**Short answer: Yes, consumption externalities affect the GE solution in the 2×2×2 model.**

**Reasoning:**

The 2×2×2 model explicitly **assumes away** consumption externalities — assumption 3 (Koutsoyiannis p. 497) states: "consumer choices are independent: the consumption patterns of A do not affect B's utility, and vice versa. Bandwagon, snob, Veblenesque and other 'external' effects are ruled out."

**If consumption externalities are introduced:**

1. **Pareto conditions break down:**
   - The standard GE efficiency condition requires MRSᴬ_xy = MRSᴮ_xy = Pₓ/Pᵧ.
   - With externalities, MRSᴬ depends on B's consumption: MRSᴬ = MRSᴬ(Xᴀ, Yᴀ, Xʙ, Yʙ).
   - The equality MRSᴬ = MRSᴮ is no longer sufficient for Pareto efficiency because each consumer's utility affects the other directly — not through prices alone.

2. **Externality = missing market:**
   - The externality is an untraded interdependence — there is no market price for A's influence on B's utility.
   - The competitive equilibrium (which requires complete markets) cannot be Pareto-optimal.
   - This is a **market failure**: the First Welfare Theorem fails.

3. **Specific effects:**
   - **Bandwagon effect:** Consumers may over-consume a good (more than private-optimum) because of positive feedback, or under-consume due to negative feedback.
   - **Snob effect:** Some consumers may reduce consumption as others increase it, leading to multiple equilibria or instability.
   - The excess demand functions may not satisfy the continuity/monotonicity properties required for existence and uniqueness.

4. **Mathematically:**
   - Utility: Uₐ = Uₐ(Xₐ, Yₐ, X_B, Y_B)
   - MRSₐ = (∂Uₐ/∂Xₐ)/(∂Uₐ/∂Yₐ) but Pareto efficiency also requires considering ∂Uₐ/∂X_B.
   - The standard condition (MRSₐ = MRS_B = Pₓ/Pᵧ) is necessary but no longer sufficient for efficiency.

**Conclusion:** The GE solution may still *exist* (Arrow-Debreu conditions may hold) but it will NOT be Pareto-optimal. The three marginal conditions (MRS equality, MRTS equality, MRPT = MRS) fail when externalities are present. This is why Koutsoyiannis (p. 26593-26594) concludes: "when externalities exist, the conditions for Pareto optimality are not fulfilled."

**Exam Tip:** The textbook answer is that the 2×2×2 GE assumes NO consumption externalities. If introduced, the First Welfare Theorem fails. Mention Leibenstein's bandwagon/snob effects. Point to Koutsoyiannis Chapter 23 for detailed analysis.

---

## Topic 9 — Trade & Tariffs

### Question 1

**Answer:**

**Given:**
- Domestic demand: Q_d = 250,000 − 100P
- Domestic supply: Q_s = 250P − 30,000
- World price: P_W = $600

**Step 1: Autarky equilibrium.**

Set Q_d = Q_s:
250,000 − 100P = 250P − 30,000
280,000 = 350P
P_autarky = $800

Q_autarky = 250,000 − 100(800) = 250,000 − 80,000 = 170,000

**Step 2: Free trade (P_W = $600).**

At P_W = $600:
Q_d(600) = 250,000 − 100(600) = 250,000 − 60,000 = 190,000
Q_s(600) = 250(600) − 30,000 = 150,000 − 30,000 = 120,000

Since Q_d > Q_s: **imports** = Q_d − Q_s = 190,000 − 120,000 = **70,000 units**.
No exports.

**Step 3: Tariff of $50 (P_after tariff = $650).**

At P = $650:
Q_d = 250,000 − 100(650) = 250,000 − 65,000 = **185,000**
Q_s = 250(650) − 30,000 = 162,500 − 30,000 = **132,500**
Imports = 185,000 − 132,500 = **52,500**
Tariff revenue = 50 × 52,500 = **$2,625,000**

**Welfare effects (relative to free trade):**

- **Consumer surplus (CS):** Change = −(area between P=$600 and P=$650 under D).
  ΔCS = −[(P₂−P₁)(Q_d₁+Q_d₂)/2] (trapezoid formula)
  ΔCS = −[50 × (190,000 + 185,000)/2] = −[50 × 187,500] = **−$9,375,000**

- **Producer surplus (PS):** Change = +(area between P=$600 and P=$650 above S).
  ΔPS = +[50 × (120,000 + 132,500)/2] = +[50 × 126,250] = **+$6,312,500**

- **Tariff revenue:** = $50 × 52,500 = **+$2,625,000**

- **Net welfare change (ΔW):**
  ΔW = ΔCS + ΔPS + Tariff Revenue
  ΔW = −9,375,000 + 6,312,500 + 2,625,000 = **−$437,500**

The net welfare loss = **deadweight loss** from the tariff, comprising:
- Production distortion (area a): ½ × 50 × (132,500 − 120,000) = ½ × 50 × 12,500 = $312,500
- Consumption distortion (area b): ½ × 50 × (190,000 − 185,000) = ½ × 50 × 5,000 = $125,000
- Total DWL = $312,500 + $125,000 = $437,500 ✓

**Step 4: Voluntary Export Restraint (VER) of 20,000 units.**

A VER of 20,000 units restricts imports to 20,000. This is equivalent to a quota.

**Equilibrium under VER (20,000 imports):**

At domestic price P: Q_d − Q_s = 20,000
(250,000 − 100P) − (250P − 30,000) = 20,000
280,000 − 350P = 20,000
350P = 260,000
P_VER = $742.86

At P = $742.86:
Q_d = 250,000 − 100(742.86) = 250,000 − 74,286 = **175,714**
Q_s = 250(742.86) − 30,000 = 185,715 − 30,000 = **155,715**
Imports = 175,714 − 155,715 = **20,000** ✓

**Welfare effects of VER vs free trade:**

- ΔCS = −[(742.86 − 600) × (190,000 + 175,714)/2]
  = −[142.86 × 182,857] = **−$26,122,450** (approx.)

- ΔPS = +[142.86 × (120,000 + 155,715)/2]
  = +[142.86 × 137,857.5] = **+$19,693,875** (approx.)

- **Quota rent (VER):** Under VER, the quota rent (= 142.86 × 20,000 = $2,857,200) goes to **foreign exporters** (not the domestic government), because the VER is administered by the exporting country.

- ΔW = ΔCS + ΔPS + QuotaRent(to foreigners)
  = −26,122,450 + 19,693,875 − 2,857,200 = **−$9,285,775**

**VER is worse than tariff:** The tariff generates government revenue of $2,625,000; the VER transfers this revenue to foreign exporters. The net welfare loss is larger under VER.

| Measure | Free Trade | Tariff ($50) | VER (20,000) |
|---------|-----------|-------------|-------------|
| Price | $600 | $650 | $742.86 |
| Q_d | 190,000 | 185,000 | 175,714 |
| Q_s | 120,000 | 132,500 | 155,715 |
| Imports | 70,000 | 52,500 | 20,000 |
| ΔCS vs FT | — | −$9,375,000 | −$26,122,450 |
| ΔPS vs FT | — | +$6,312,500 | +$19,693,875 |
| Govt Revenue | — | +$2,625,000 | $0 (rent to foreigners) |
| ΔW vs FT | — | −$437,500 | −$9,285,775 |

**Exam Tip:** The DWL of tariff = production distortion + consumption distortion triangles. The VER is equivalent to a tariff where the revenue goes to foreign exporters (making it more costly to the domestic economy). Always compute autarky first as the reference point.

---

**End of document.** All ~26 questions across five topics covered: GE existence/uniqueness/stability, Edgeworth box & 2×2×2 model, game theory & IO, externalities & public goods, and trade & tariffs.
