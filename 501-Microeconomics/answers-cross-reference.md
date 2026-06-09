# Answers Cross-Reference Map

> **Purpose:** Maps connections between all ~80 microeconomics questions across 4 answer files.
> For examiners: see how concepts flow, overlap, and build on each other.
>
> **Files referenced (short tags):**
> - `CT` = answers-consumer-theory.md (18 questions, Sections 1A-1B)
> - `DP` = answers-demand-production.md (~15 questions, Topics 2-3C)
> - `WF` = answers-welfare.md (20 questions, Topics 4-5B)
> - `GE` = answers-ge-game-extern-trade.md (25 questions, Topics 6A-9)

---

## A. Technique / Approach Map

### A1. Lagrangian Optimization

The single most pervasive technique. Used wherever a constrained optimum must be found.

| Technique | Where Used | What It Solves |
|-----------|-----------|----------------|
| **Utility Maximization (UMP)** | CT 1B.Q1, CT 1B.Q2, CT 1B.Q6, CT 1B.Q7, CT 1B.Q8 | Walrasian demand from max u(x) s.t. p.x = w |
| **Expenditure Minimization (EMP)** | CT 1B.Q3, CT 1B.Q6 | Hicksian demand from min p.x s.t. u(x) = u-bar |
| **Profit Maximization (PMP)** | DP 3B.Q1, DP 3C.Q1 (via MR=MC) | Supply from max p.y s.t. y in Y |
| **Cost Minimization** | DP 3A.Q7 (LR), DP 3A.Q6 | Conditional factor demands from min w.z s.t. f(z) = q |
| **Pareto-efficient consumption** | WF 5B.Q3 | Lagrange for MRS^A = MRS^B with fixed supplies |
| **Joint profit maximization (externality)** | GE 8.Q2 | Social optimum via merged profit max |

**Key insight:** All four core micro problems (UMP, EMP, PMP, cost min) share identical mathematical structure: FOC yields tangency condition (MRS = p-ratio or MRTS = w-ratio). The Lagrangian multiplier always represents the marginal value of relaxing the constraint (lambda = marginal utility of income in UMP = marginal cost in EMP).

### A2. Duality

Questions that explicitly exploit dual relationships between problems:

| Duality Pair | Questions Using It | How Used |
|-------------|-------------------|----------|
| **Roy's Identity** (Walrasian demand from indirect utility) | CT 1B.Q2 | x_k = -(dv/dp_k)/(dv/dw). Verified for Cobb-Douglas |
| **Shephard's Lemma** (Hicksian demand from expenditure function) | CT 1B.Q3, CT 1B.Q6 (Negroni) | dh/dp_k = h_k(p,u). Verified for CD and Leontief |
| **Hotelling's Lemma** (supply from profit function) | DP 3B.Q1 | y_k = dpi/dp_k. Supply = derivative of profit function |
| **UMP <-> EMP duality** | CT 1B.Q1-Q3 | e(p, v(p,w)) = w and v(p, e(p,u)) = u |
| **Profit <-> Cost duality** | DP 3A.Q5, DP 3B.Q1-Q2 | Profit convex in p, cost concave in w; MRPT = MC_x/MC_y |
| **CV/EV duality with Hicksian demand** | WF Q1-Q5 | CV = area under h(p,u^0), EV = area under h(p,u^1) |

**Core diagram:** CT 1B.Q1-Q3 form a unified duality triptych (UMP -> Walrasian -> Indirect utility -> Roy's -> EMP -> Hicksian -> Expenditure -> Shephard's).

### A3. Comparative Statics / Elasticities

Questions analyzing how endogenous variables respond to parameter changes:

| Effect | Questions | Mathematical Tool |
|--------|-----------|-----------------|
| **Own-price elasticity** | DP 2.Q1, DP 2.Q3(i,v), DP 3C.Q1(iv) | dlnX/dlnP; total revenue test |
| **Cross-price elasticity** | DP 2.Q1(iii), DP 2.Q3(i,iv,vi) | Substitute vs complement classification |
| **Income elasticity** | DP 2.Q1(ii), DP 2.Q3(ii) | Luxury/necessity/inferior classification |
| **Tax incidence** | DP 3C.Q1(iv-v) | Price split between buyers/sellers; DWL = 0.5 * t * dQ |
| **Tariff welfare effects** | GE 9.Q1 | dCS, dPS, tariff revenue, DWL triangles |
| **Factor price effects (Stolper-Samuelson)** | GE 6B.Q2 | Taste shift -> factor reallocation -> w and r change |
| **Signaling (education -> wage premium)** | GE 8.Q4 | Separating equilibrium condition w_H - w_L in [c_H, c_L] |

### A4. Geometric / Graphical Analysis

Questions requiring diagrammatic reasoning:

| Diagram Type | Questions | What It Shows |
|-------------|-----------|---------------|
| **Indifference curves** | CT 1A.Q2 (downward slope), CT 1A.Q3 (convexity), CT 1A.Q10 (quasilinear ICs) | Preference properties visually |
| **Edgeworth production box** | GE 6B.Q1, GE 6B.Q3 | MRTS^X = MRTS^Y; contract curve; PPC derivation |
| **Edgeworth consumption box** | GE 6B.Q3, GE 6B.Q6 | MRS^A = MRS^B; contract curve; core |
| **Production set diagrams** | DP 3A.Q2-Q3 | 11 properties (no free lunch, free disposal, convexity, etc.) |
| **GE transmission mechanism** | GE 6B.Q2, GE 6A.Q4 | 8-panel Koutsoyiannis diagram: taste shock -> prices -> factor markets -> new GE |
| **PPC + community indifference curve** | GE 6B.Q3, WF 5A.Q2, WF 5A.Q4 | MRPT = MRS = slope of PPC = price ratio |
| **GUPF + social indifference contours** | WF 5A.Q2, WF 5A.Q4, WF 5B.Q1 | Point of bliss; Pareto optimality is not sufficient |
| **Demand curve triad (CV/EV/CS)** | WF Q2, WF Q4 | Three demand curves: h(p,u^0), x(p,w), h(p,u^1) |
| **Game trees (extensive form)** | GE 7.Q3 (entry game), GE 7.Q6 (centipede) | Backward induction, SPNE |
| **Payoff matrices** | GE 7.Q2 (PD), GE 7.Q4 (trigger strategies) | Nash equilibrium, dominant strategies |
| **Excess demand / supply diagrams** | GE 6A.Q2, GE 6A.Q3 | Existence, uniqueness, stability of GE |

### A5. Game Theory Concepts

| Concept | Questions | Application |
|---------|-----------|-------------|
| **Nash equilibrium** | GE 7.Q1 | Bertrand duopoly with differentiated products |
| **Dominant strategy** | GE 7.Q2 | Prisoners' Dilemma -> oligopoly implications |
| **Backward induction** | GE 7.Q3, GE 7.Q6 | Market entry game; centipede paradox |
| **Subgame perfect NE** | GE 7.Q3, GE 7.Q4 | Entry accommodation; infinitely repeated grim trigger |
| **Folk Theorem** | GE 7.Q4 | Cooperation sustained if discount factor > threshold |
| **Paradox of backward induction** | GE 7.Q5, GE 7.Q6 | Finitely repeated PD unraveling; centipede game |
| **Incomplete information** | GE 8.Q4 (Spence signaling), GE 8.Q3 (lemons) | PBE separating/pooling; adverse selection |

### A6. Numerical Computation

Questions where you compute a specific number (not just derive a function):

| Computation | Questions | Key Result |
|-------------|-----------|------------|
| **Cobb-Douglas EV/CV/CS** | WF Q3 | EV=124.24, CS=103.98, CV=87.9; EV > CS > CV confirms normal goods |
| **Bertrand Nash prices** | GE 7.Q1 | p1* = p2* = 40; q = 60; profit = 1800 each |
| **Competitive equilibrium + tax** | DP 3C.Q1 | P*=23, Q=21,000; after $20 tax: P_b=33, P_s=13, DWL=100,000 |
| **Sausage maker profit-max price** | DP 3A.Q6 | P* = $6; Q = 200P^-6 |
| **Production + LR supply** | DP 3A.Q7 | SR: Q=4L^{1/3}, LR: Q^S = P^2/(9wr) |
| **Tariff welfare** | GE 9.Q1 | DWL = $437,500; VER worse at DWL = $9,285,775 |
| **Externality social optimum** | WF 5B.Q4 | Social dividend = 52.5; tax=2 on firm 1, subsidy=8 to firm 2 |
| **Exchange economy efficiency** | GE 6B.Q6 | Endowment MRS_A=5, MRS_B=1 => not efficient; contract curve Y_A = X_A |

---

## B. Recurring Workhorse Models

### B1. Cobb-Douglas u = x_1^alpha x_2^beta

| Aspect | Where It Appears | What It Teaches |
|--------|------------------|-----------------|
| **Walrasian demand** | CT 1B.Q1 | x_k = (alpha_k/(sum alpha)) * (w/p_k); constant expenditure shares |
| **Indirect utility + Roy's** | CT 1B.Q2 | v = B w^{a+b} p_1^{-a} p_2^{-b}; Roy's verified |
| **Hicksian demand + Shephard's** | CT 1B.Q3 | h_k = u * (ratio terms); e = u * (p_1/alpha)^alpha (p_2/beta)^beta |
| **EV/CV/CS** | WF Q3 | alpha=beta=1/2; EV=124.24, CS=103.98, CV=87.9 |
| **Externality social optimum** | WF 5B.Q3 | Lagrangian derivation uses Cobb-Douglas structure? No -- uses general functional form |
| **Exchange economy** | GE 6B.Q6 | A has U_A = X_A * Y_A (Cobb-Douglas with alpha=beta=1) |

**Why repeatedly used:** CD is the only function that yields closed-form solutions for ALL four core problems (UMP, EMP, PMP, cost min). Its constant-share property makes it the canonical homothetic utility.

### B2. Perfect Complements u = min(.)

| Instance | Questions | Teaching Point |
|----------|-----------|----------------|
| **Negroni cocktail** (G, V, C in 1:1:1) | CT 1B.Q6 | Marshallian: x_k = w/sum(p); Hicksian: h_k = u (price-independent); e = u * sum(p) |
| **Sausage maker** (3 oz pork + 2 oz veal) | DP 3A.Q6 | Production analog: Q = min(P/3, V/2); Leontief isoquants |
| **Elasticity of substitution** | DP 3A.Q4(ii) | sigma = 0 (zero substitutability) |
| **Convexity comparison** | CT 1A.Q3 | min() is convex but NOT strictly convex (flat segments on ICs) |

### B3. Quasilinear u = X + ln(Y)

| Aspect | Questions | Teaching Point |
|--------|-----------|----------------|
| **Convex IC proof** | CT 1A.Q10 | MRS = y, dMRS/dx = -y < 0 => convex |
| **Demand derivation** | CT 1B.Q7 | y* = p_x/p_y (income-inelastic); x* = I/p_x - 1 |
| **Income effects** | CT 1B.Q7 | Zero income effect for good y; all income elasticity in x |
| **Not homothetic** | CT 1A.Q8, CT 1B.Q5 | Engel curve for y is flat (counterexample to homotheticity) |
| **CV = EV = CS** | WF Q5 | Zero income effect => all three welfare measures coincide (Willig bounds) |

### B4. Linear / Perfect Substitutes

| Instance | Questions | Teaching Point |
|----------|-----------|----------------|
| **u = X - 3Y** (good + bad) | CT 1B.Q8 | MU_y < 0 => y is a bad; corner solution (x=20, y=0); Lagrangian FOC gives minimum |
| **EoS for q = aK + bL** | DP 3A.Q4(i) | sigma = infinity (perfect substitutability) |
| **Exchange economy** (B has U_B = X_B + Y_B) | GE 6B.Q6 | B's MRS = 1 always; corner solutions possible; contract curve Y_A = X_A |
| **Convexity comparison** | CT 1A.Q3 | Linear utility is convex but NOT strictly convex |

### B5. Exchange Economy (Edgeworth Box)

| Aspect | Questions | What Is Shown |
|--------|-----------|---------------|
| **Cobb-Douglas + linear utilities** | GE 6B.Q6 | Endowment (A: 10X, 50Y; B: 50X, 10Y); contract curve equation; Pareto efficiency check |
| **Pure consumption Pareto condition** | WF 5B.Q3 | Lagrangian derivation: MRS^A = MRS^B with fixed supplies |
| **General efficiency conditions (3 types)** | GE 6B.Q3 | Production, consumption, and product-mix simultaneously |

---

## C. Concept Dependency Map

### C1. Prerequisite Chains (Core Micro Theory)

```
Preferences (CT 1A)
    |
    v
Utility representation (CT 1A.Q5, Q6)
    |                    |
    v                    v
Convexity / MRS      Desirability axioms
(CT 1A.Q3, Q4, Q9)   (CT 1A.Q6, Q7)
    |                    |
    v                    v
Homotheticity        UMP (CT 1B)
(CT 1A.Q8, 1B.Q5)       |
    |                    v
    +--------> Walrasian demand (CT 1B.Q1, Q4)
                     |          |
                     v          v
              Indirect utility   Roy's identity
              (CT 1B.Q2)        (CT 1B.Q2)
                     |
                     v
                EMP (CT 1B.Q3)
                     |
                     v
              Hicksian demand   Shephard's lemma
              (CT 1B.Q3, Q6)   (CT 1B.Q3, Q6)
                     |
                     v
              Expenditure function
                     |
          +----------+----------+
          |                     |
          v                     v
    DUALITY: e(p,v)=w      Welfare analysis
    v(p,e)=u               CV / EV / CS (WF Q1-Q5)
          |
          v
    Elasticities (DP 2)
```

### C2. Production Side Chain

```
Production set (DP 3A.Q1-Q3)
    |
    v
Returns to scale / EoS (DP 3A.Q4, Q7)
    |
    v
Cost minimization (DP 3A.Q5-Q7)
    |
    v
Cost function (DP 3A.Q5) --- Shephard's lemma -> Conditional factor demand
    |
    v
Profit function (DP 3B.Q1) --- Hotelling's lemma -> Supply
    |
    v
Competitive equilibrium (DP 3C.Q1)
    |
    v
Tax incidence / DWL (DP 3C.Q1)
```

### C3. GE and Welfare Chain

```
Partial equilibrium (GE 6A.Q1, Q4)
    |
    v
General equilibrium concepts (GE 6A.Q1-Q3)
    |
    +--- Existence / Uniqueness / Stability (GE 6A.Q2, Q3)
    |
    v
2x2x2 Model (GE 6B)
    |
    +--- Edgeworth production box (GE 6B.Q1)
    +--- Taste shocks / factor transmission (GE 6B.Q2)
    +--- Three Pareto conditions (GE 6B.Q3)
    +--- Walrasian system / counting equations (GE 6B.Q7)
    |
    v
Exchange economy (GE 6B.Q6) <-> Pareto condition (WF 5B.Q3)
    |
    v
First Welfare Theorem (WF 5B.Q5)
    |
    v
Second Welfare Theorem (WF 5B.Q5)
    |
    v
GUPF / Point of Bliss (WF 5A.Q2, Q4)
    |
    v
Pareto necessary not sufficient (WF 5B.Q1)
    |
    v
Does perfect competition maximize SW? (WF 5B.Q8)
```

### C4. Market Failure Chain

```
Externality definition (WF 5A.Q1 - Pigou) --> Private vs social cost
    |
    v
Pigouvian taxes / subsidies (WF 5B.Q4)
    |
    v
Coase Theorem / property rights (GE 8.Q2)
    |
    v
Tragedy of the Commons (GE 8.Q1)
    |
    v
Asymmetric info -> Lemons market (GE 8.Q3)
    |
    v
Signaling -> Spence education model (GE 8.Q4)
    |
    v
Consumption externalities (GE 8.Q5, Q6) -> Bandwagon / Snob
    |
    v
GE fails with externalities (GE 8.Q6)
```

### C5. Each Question's Position in Dependency Chains

| Question | Depends On | Needed For |
|----------|-----------|------------|
| CT 1A.Q1-Q10 | (none -- foundations) | All subsequent micro theory |
| CT 1B.Q1-Q3 | CT 1A.Q5, Q6, Q9 | CT 1B.Q4, WF Q1-Q5 |
| CT 1B.Q4 (Walrasian properties) | CT 1B.Q1 | DP 2 (elasticities), GE 6B |
| CT 1B.Q5 (homotheticity) | CT 1A.Q8 | DP 3A (production), GE welfare |
| CT 1B.Q6-Q8 | CT 1B.Q1-Q3 (technique practice) | -- |
| DP 2.Q1-Q3 | CT 1B.Q1 (demand concept) | DP 3C.Q1 (tax, DWL) |
| DP 3A.Q1-Q7 | CT 1B.Q5 (homogeneity) | DP 3B, DP 3C, GE 6B |
| DP 3B.Q1-Q2 | DP 3A | DP 3C |
| DP 3C.Q1-Q2 | DP 3A, DP 3B | WF 5B.Q8 (competition + welfare) |
| WF Q1-Q5 | CT 1B.Q2-Q3 (indirect utility, expenditure function) | WF 5B.Q2 (compensation principle) |
| WF 5A.Q1-Q7 | CT 1A, CT 1B | WF 5B |
| WF 5B.Q1-Q8 | WF 5A, GE 6B | -- |
| GE 6A.Q1-Q4 | DP 3C (partial equilibrium base) | GE 6B |
| GE 6B.Q1-Q8 | GE 6A, DP 3A, CT 1B | WF 5B.Q1, Q5 |
| GE 7.Q1-Q6 | (game theory is semi-independent) | WF 5B.Q8 (market power) |
| GE 8.Q1-Q6 | WF 5A.Q1 (Pigou), GE 6B | WF 5B.Q5 (FWT failure) |
| GE 9.Q1 | DP 2 (elasticities), DP 3C | -- |

---

## D. Cross-Cutting Themes

### D1. Homogeneity and Homotheticity

These appear in 4 separate topics, each time with a different function:

| Function | Homogeneity Degree | Questions |
|----------|-------------------|-----------|
| Walrasian demand x(p,w) | HD(0) in (p,w) | CT 1B.Q1, CT 1B.Q4, CT 1B.Q5 |
| Indirect utility v(p,w) | HD(0) in (p,w) | CT 1B.Q2, CT 1B.Q5 |
| Hicksian demand h(p,u) | HD(0) in p | CT 1B.Q3, CT 1B.Q5 |
| Expenditure function e(p,u) | HD(1) in p | CT 1B.Q3, CT 1B.Q5, CT 1B.Q6 |
| Cost function c(w,q) | HD(1) in w | DP 3A.Q5 |
| Profit function pi(p) | HD(1) in p | DP 3B.Q1 |
| Supply y(p) | HD(0) in p | DP 3B.Q1 (via Hotelling) |

**Homotheticity links:** Preferences (CT 1A.Q8) -> demand (CT 1B.Q5) -> expenditure shares constant -> Engel curves linear through origin.

### D2. Convexity and Curvature

| Domain | Convexity Property | Questions |
|--------|--------------------|-----------|
| Preferences | Convex UCS = quasiconcave utility = diminishing MRS | CT 1A.Q3, Q4, Q9, Q10 |
| Production set | Convex => diminishing returns; non-convex with fixed costs | DP 3A.Q2, Q3 |
| Indifference curves | Strict convexity = strictly quasiconcave; weak = linear segments | CT 1A.Q3 |
| Cost function | Concave in input prices (substitution response) | DP 3A.Q5 |
| Profit function | Convex in output prices (option value of flexibility) | DP 3B.Q1 |
| Expenditure function | Concave in p | CT 1B.Q3 |
| GUPF | Concave (diminishing rate of transformation between utilities) | WF 5A.Q2, Q4, WF 5B.Q1 |

**Connected through duality:** Cost concave in w <-> profit convex in p (they are linked by the Legendre-Fenchel transform)

### D3. Duality (The Central Organizing Principle)

Duality is not a single question -- it is the skeleton of the entire course:

```
UMP: max u(x) s.t. p.x = w          EMP: min p.x s.t. u(x) = u
    |                                      |
    v                                      v
Walrasian demand x(p,w)              Hicksian demand h(p,u)
    |                                      |
    v                                      v
Indirect utility v(p,w)              Expenditure function e(p,u)
    |                                      |
    +-------- DUALITY IDENTITIES ----------+
              e(p, v(p,w)) = w
              v(p, e(p, u)) = u
                     |
                     v
         Slutsky: dx/dp = dh/dp - x * (dx/dw)  [underlying structure]
```

**Questions that exploit duality:**
- CT 1B.Q2 (Roy's: Walrasian from indirect utility)
- CT 1B.Q3 (Shephard's: Hicksian from expenditure)
- DP 3B.Q1 (Hotelling: supply from profit)
- DP 3A.Q5 (Shephard: input demand from cost)
- DP 3B.Q2 (MRPT = MC_x/MC_y = price ratio)
- WF Q1-Q5 (CV/EV = areas under Hicksian demands derived from expenditure function)

### D4. Pareto Efficiency

Appears in 4 different contexts, each time adding a layer:

| Context | Condition | Questions |
|---------|-----------|-----------|
| **Consumption only** (exchange) | MRS^A = MRS^B | WF 5B.Q3, GE 6B.Q6 |
| **Production only** (Edgeworth box) | MRTS^X = MRTS^Y | GE 6B.Q1 |
| **Full 2x2x2** (production + consumption + product-mix) | All three equalities | GE 6B.Q3, WF 5B.Q1, WF 5A.Q7 |
| **With externalities** | Breaks down; needs Pigouvian correction | WF 5B.Q4, GE 8.Q2 |
| **With consumption externalities** | Standard conditions insufficient | GE 8.Q6 |
| **Relation to welfare max** | Necessary but not sufficient | WF 5B.Q1, WF 5B.Q8 |
| **First Welfare Theorem** | Every CE is Pareto-optimal | WF 5B.Q5 |
| **Second Welfare Theorem** | Every PO allocation is a CE with transfers | WF 5B.Q5 |

### D5. Market Failures vs. Welfare Theorems

The course builds a tension between "markets work" (Welfare Theorems) and "markets fail":

| Theme | Questions | Core Idea |
|-------|-----------|-----------|
| **Competition achieves Pareto optimality** | WF 5B.Q5, WF 5B.Q8 | FWT: competitive equilibrium => Pareto efficient |
| **But Pareto optimality is not social welfare maximum** | WF 5B.Q1 | Need SWF for distributional choice |
| **Externalities break FWT** | WF 5B.Q4, GE 8.Q2, GE 8.Q6 | Private cost != social cost |
| **Market power breaks FWT** | GE 7.Q1-Q2 (Bertrand paradox / PD) | P > MC in oligopoly |
| **Asymmetric information breaks markets** | GE 8.Q3 (lemons), GE 8.Q4 (signaling) | Adverse selection can destroy markets |
| **Public goods / commons** | GE 8.Q1 | Free-rider problem |
| **Corrective policy** | WF 5B.Q4 (Pigouvian taxes), DP 3C.Q1 (tax incidence) | Government can improve on market outcome |

---

## E. Source Overlap Diagram

### E1. Questions Appearing in Multiple Sources

| Question | Sources | Appears In |
|----------|---------|------------|
| **Preference-based approach** (CT 1A.Q1) | MainQ Tut1, Batch 47 Q1a | 2 sources |
| **Indifference set + downward sloping ICs** (CT 1A.Q2) | MainQ Tut1, Batch 47 Q1b | 2 |
| **Twin definitions of convexity** (CT 1A.Q3) | MainQ Tut1, Batch 47 Q2a | 2 |
| **Convexity <=> UCS convex <=> quasiconcave** (CT 1A.Q4) | MainQ Tut1, Batch 47 Q2b | 2 |
| **Existence of utility function** (CT 1A.Q5) | MainQ Tut1, Batch 47 Q2c | 2 |
| **Define utility + monotonicity** (CT 1A.Q6) | MainQ Tut1, Batch 47 Q4a | 2 |
| **SM => M => LNS** (CT 1A.Q7) | MainQ Tut1, Batch 47 Q4b | 2 |
| **Homogeneity / homotheticity** (CT 1A.Q8 = CT 1B.Q5) | MainQ Tut1 + Batches + repeat within CT | **3 (appears twice in CT + cross-topic)** |
| **Walrasian demand CD** (CT 1B.Q1) | MainQ Tut1 Q3i, Batch 47 Q3i | 2 |
| **Indirect utility + Roy's CD** (CT 1B.Q2) | MainQ Tut1 Q3ii, Batch 47 Q3ii | 2 |
| **EMP + Hicksian CD** (CT 1B.Q3) | MainQ Tut1 Q3iii, Batch 47 Q3iii | 2 |
| **CV/EV/CS definitions** (WF Q1) | MainQ Tut2 Q1a, Batch 47 Q6a | 2 |
| **EV > CS > CV order** (WF Q2) | MainQ Tut2 Q1b, Batch 47 Q6b | 2 |
| **CD welfare computation** (WF Q3) | MainQ Tut2 Q3b, Batch 47 Q6c | 2 |
| **Pigou three issues** (WF 5A.Q1 = WF 5A.Q5) | MainQ GE Q3a, Professor Q5 | **3** (appears twice in WF + Professor Qs) |
| **GUPF + point of bliss** (WF 5A.Q2 = WF 5A.Q4) | MainQ GE Q3b, Batch 48 Q8b, Professor Q4 | **3 sources** |
| **Pareto necessary not sufficient** (WF 5B.Q1) | MainQ GE Q4a, Batch 46 A1a, Professor Q2 | **3 sources** |
| **MU of money / Kaldor-Hicks** (WF 5B.Q2) | MainQ GE Q4b, Batch 46 A1b, Professor Q3 | **3 sources** |
| **Define GE vs PE** (GE 6A.Q1) | MainQ GE Q1a, Professor Q9 | 2 |
| **GE existence / uniqueness / stability** (GE 6A.Q3) | Batch 47 Q7a, (overlaps with GE 6A.Q2) | 2 |
| **Transmission mechanism** (GE 6A.Q4 = GE 6B.Q2) | Batch 47 Q7b, MainQ GE Q2b, Professor Q12 | **3 sources** |
| **2x2x2 assumptions + GE reached** (GE 6B.Q5) | 49Qs Q10, Professor Q16 | 2 |
| **Three Pareto conditions** (GE 6B.Q3) | 49Qs Q8, Professor Q13 | 2 |
| **Production set properties** (DP 3A.Q2 = Q3) | MainQ Tut2 Q2b, Batch 47 Q5a | 2 |
| **Profit function properties** (DP 3B.Q1) | MainQ Tut2 Q3a, Batch 47 Q5c | 2 |
| **Social welfare function definition** (WF 5A.Q4 = WF 5A.Q6) | Professor Q4, Professor (Given) Q4 | 2 |
| **Does competition maximize SW?** (WF 5B.Q8) | Professor (Given) Q8 | 1 (but major essay question) |

### E2. Most "Popular" Questions (Highest Cross-Source Frequency)

| Question | Sources |
|----------|---------|
| **Pareto necessary not sufficient for SW max** | 3 (MainQ GE, Batch 46, Prof Q2) |
| **Hicks-Kaldor / MU of money** | 3 (MainQ GE, Batch 46, Prof Q3) |
| **GUPF + point of bliss** | 3 (MainQ GE, Batch 48, Prof Q4) |
| **Pigou's three issues** | 3 (MainQ GE, Prof Q5 -- appears twice in WF) |
| **Transmission mechanism (taste shock -> factors)** | 3 (MainQ GE, Batch 47, Prof Q12) |
| **Homogeneity / homotheticity** | 3 (MainQ Tut1, Batch 47, repeated in CT) |

### E3. Source Coverage by Topic

```
Source          Consumer  Demand  Production  Welfare  GE  GameTh  Extern  Trade
MainQ Tut1      X                 
MainQ Tut2               X                  X              
MainQ GE                                        X      X
Batch 46                                    X      X    X       X
Batch 47        X                 X          X      X
Batch 48        X        X       X          X                    X
Professor                                      X      X     X
49Qs                                             X      X
Practice Mid                                   X
WelfareChange                                  X
```

---

## F. Quick Reference Table

| # | Question | Topic | Technique | Key Formula / Concept | Related Questions |
|---|----------|-------|-----------|----------------------|-------------------|
| CT 1A.Q1 | Preference-based approach | Foundations | Definition | Completeness + transitivity | CT 1A.Q5 |
| CT 1A.Q2 | Indifference set + downward slope | Foundations | Proof (contradiction) | SM => ICs slope down | CT 1A.Q6, Q7 |
| CT 1A.Q3 | Twin convexity definitions | Foundations | Graphical + table | UCS convex = convex preferences | CT 1A.Q4, Q9, Q10 |
| CT 1A.Q4 | Convex <=> UCS <=> quasiconcave | Foundations | Proof chain | Bordered Hessian | CT 1A.Q3, Q9 |
| CT 1A.Q5 | Existence of utility function | Foundations | Diagonal projection | Debreu: monotonicity + continuity | -- |
| CT 1A.Q6 | Utility + monotonicity | Foundations | Definition + examples | SM vs M comparison table | CT 1A.Q7 |
| CT 1A.Q7 | SM => M => LNS | Foundations | Proof chain | epsilon-ball diagram | CT 1A.Q6, 1B.Q4 |
| CT 1A.Q8 | Homogeneity / homotheticity | Foundations | Definition + examples | MRS constant on rays | CT 1B.Q5, DP 3A.Q4 |
| CT 1A.Q9 | Quasiconcave <=> dMRS/dx < 0 | Foundations | Bordered Hessian derivation | dMRS/dx = -[bordered Hessian]/u_y^3 | CT 1A.Q3, Q10 |
| CT 1A.Q10 | U = X + lnY convex ICs? | Foundations | MRS computation | dMRS/dx = -y < 0 | CT 1A.Q9, CT 1B.Q7 |
| CT 1B.Q1 | CD: Walrasian demand | UMP | Lagrangian | x_k = alpha_k * w / (sum alpha) * p_k | CT 1B.Q2, Q3 |
| CT 1B.Q2 | CD: Indirect utility + Roy's | UMP | Substitution + derivative | x_k = -(dv/dp_k)/(dv/dw) | CT 1B.Q1, Q3 |
| CT 1B.Q3 | CD: EMP + Hicksian + Shephard's | EMP | Lagrangian | h_k = u * (...); e = u * (p/alpha)^alpha | CT 1B.Q1, Q2, WF Q3 |
| CT 1B.Q4 | Walrasian demand properties | UMP | List + examples | HD(0), Walras' Law, convexity | DP 2, GE 6B |
| CT 1B.Q5 | Homogeneity / homotheticity (demand focus) | UMP | Engel curves + shares | x(p,w) = x(p,1) * w | CT 1A.Q8, DP 3A |
| CT 1B.Q6 | Negroni (min) | UMP + EMP | Fixed proportions | x_k = w/sum(p); h_k = u | DP 3A.Q6 |
| CT 1B.Q7 | U = X + lnY demands | UMP | MRS tangency | y* = p_x/p_y; x* = I/p_x - 1 | CT 1A.Q10, WF Q5 |
| CT 1B.Q8 | U = X - 3Y corner solution | UMP | Corner solution intuition | MU_y < 0 => y = 0 | CT 1A.Q3 |
| DP 2.Q1 | Constant elasticity demand | Elasticities | Log derivatives | epsilon = exponents | DP 2.Q3 |
| DP 2.Q2 | BK demand misspecification | Elasticities | Sign check | Positive own-price coefficient | DP 2.Q3 |
| DP 2.Q3 | Corrected BK demand | Elasticities | Lerner Index | P = MC/(1+1/epsilon) | DP 2.Q1, DP 3C |
| DP 3A.Q1 | Production function definitions | Production | Definitions | Production set, MRPT | DP 3A.Q2 |
| DP 3A.Q2-Q3 | Production set properties | Production | Graphic + list | 11 properties; convexity w/ fixed costs | DP 3B.Q1 |
| DP 3A.Q4 | Elasticity of substitution | Production | Formula | sigma = infty (linear), 0 (Leontief), 1 (CD) | CT 1A.Q8, DP 3A.Q7 |
| DP 3A.Q5 | Cost function properties | Production | Matching | Homog(1), concave in w, Shephard's | DP 3B.Q1 |
| DP 3A.Q6 | Sausage maker (Leontief) | Production | Fixed proportions + numerical | Q = min(P/3, V/2); P* = 6 | CT 1B.Q6 |
| DP 3A.Q7 | Q = (KL)^{1/3} full solution | Production | Lagrangian + SR/LR | SR: Q=4L^{1/3}; LR: Q^S = P^2/9wr | DP 3A.Q4, Q5, 3C |
| DP 3A.Q8 | Starbucks cup scale economies | Production | Intuition | Economies of scale => less than 2x | -- |
| DP 3B.Q1 | Profit function properties | Profit | Definition + list | Homog(1), convex, Hotelling's | DP 3A.Q5, DP 3B.Q2 |
| DP 3B.Q2 | MRPT = MC_x/MC_y | Profit | Proof | duality: production <-> cost | DP 3A.Q5, GE 6B.Q3 |
| DP 3C.Q1 | Competitive industry + tax | Competitive eq | Numerical + DWL | P*=23, P_b=33, P_s=13, DWL=100k | GE 9.Q1 |
| DP 3C.Q2 | Three-good Walras + Z_1 | GE | Walras' Law | Z_1 = -4 + (6p_3 - p_2)/p_1 | GE 6B.Q8 |
| WF Q1 | CV/EV/CS definitions | Welfare | Definitions + table | CV = e(p^1,u^1)-e(p^1,u^0) | WF Q2-Q5 |
| WF Q2 | EV > CS > CV ordering | Welfare | Income effect logic | Normal goods: EV > CS > CV | WF Q3, Q4 |
| WF Q3 | CD EV/CV/CS computation | Welfare | Numerical | EV=124.24 > CS=103.98 > CV=87.9 | CT 1B.Q2-Q3, WF Q2 |
| WF Q4 | EV/CS/CV diagram (price decrease/increase) | Welfare | Graphical | Three demand curves intersecting | WF Q2, Q3 |
| WF Q5 | CS overstates CV, understates EV | Welfare | Willig bounds | Quasilinear: exact; otherwise bounded | CT 1B.Q7, WF Q2 |
| WF 5A.Q1 | Pigou three issues | SW criteria | Essay | Economic welfare, dual conditions, externalities | WF 5A.Q5, WF 5B.Q4 |
| WF 5A.Q2 | GUPF + point of bliss | SW criteria | Graphical | GUPF envelope; SWF tangency | WF 5A.Q4, WF 5B.Q1 |
| WF 5A.Q3 | Welfare criteria: GNP, Bentham, Cardinalist | SW criteria | Essay | Efficiency vs equity evaluation | WF 5A.Q1 |
| WF 5A.Q4 | SWF + GUPF derivation | SW criteria | Graphical + math | MRPT = MRS = SWF slope | WF 5A.Q2, Q6 |
| WF 5A.Q5 | Pigou three issues (repeat) | SW criteria | Essay | Same as 5A.Q1 | WF 5A.Q1 |
| WF 5A.Q6 | SWF as welfare criterion | SW criteria | Essay | Complete ranking + limitations | WF 5A.Q4, WF 5B.Q6 |
| WF 5A.Q7 | 2x2x2 assumptions for SW max | SW criteria | List | 3 efficiency + competition + SWF | GE 6B.Q5, WF 5B.Q5 |
| WF 5B.Q1 | Pareto necessary not sufficient | Pareto + WT | GUPF diagram | Bergson > Pareto for sufficiency | WF 5A.Q2, WF 5B.Q8 |
| WF 5B.Q2 | MU of money + Kaldor-Hicks | Pareto + WT | Essay | Potential comp; Scitovsky reversal | WF 5B.Q7 |
| WF 5B.Q3 | 2-person Pareto consumption | Pareto + WT | Lagrangian | MRS^A = MRS^B | GE 6B.Q6 |
| WF 5B.Q4 | External economies/diseconomies | Pareto + WT | Numerical + Pigouvian tax | Tax firm1=2, subsidize firm2=8; social dividend=52.5 | GE 8.Q2 |
| WF 5B.Q5 | First and Second Welfare Theorems | Pareto + WT | Essay | FWT: CE => PO; SWT: PO => CE w/ transfers | WF 5B.Q1, Q8 |
| WF 5B.Q6 | Utilitarian vs Rawlsian SWF | Pareto + WT | Comparison | W = sum(U_i) vs W = min(U_i) | WF 5A.Q6 |
| WF 5B.Q7 | Kaldor-Hicks + Scitovsky correction | Pareto + WT | Essay + diagram | Forward + reversal test | WF 5B.Q2 |
| WF 5B.Q8 | Does perfect competition ensure SW max? | Pareto + WT | Synthesis essay | Necessary but not sufficient | WF 5B.Q1, Q5 |
| GE 6A.Q1 | Define GE vs PE | GE | Comparison table | Interdependence vs ceteris paribus | GE 6A.Q2-Q4, GE 6B.Q4 |
| GE 6A.Q2 | Existence, uniqueness, stability | GE | Graphic + E(P) analysis | dE/dP < 0 stable; multiple Zeros = multiple eq | GE 6A.Q3 |
| GE 6A.Q3 | Existence/stability/uniqueness via E(P) | GE | Excess demand analysis | IVT for existence; monotonicity for uniqueness | GE 6A.Q2 |
| GE 6A.Q4 | Taste shock transmission | GE | 8-panel diagram | Product -> factor -> mobility -> new GE | GE 6B.Q2 |
| GE 6B.Q1 | 2x2x2 production Edgeworth box | GE | Edgeworth box | MRTS^X = MRTS^Y = w/r | DP 3A |
| GE 6B.Q2 | Taste shock in 2x2x2 | GE | 8-panel + factor intensities | Stolper-Samuelson intuition | GE 6A.Q4 |
| GE 6B.Q3 | Three Pareto efficiency conditions | GE | List + PPC diagram | (i) MRS (ii) MRTS (iii) MRPT = MRS | WF 5B.Q3, Q5 |
| GE 6B.Q4 | GE vs PE (repeat) | GE | Comparison | Same as 6A.Q1 | GE 6A.Q1 |
| GE 6B.Q5 | 2x2x2 assumptions + how GE reached | GE | List + steps | 18 equations, Walras, numeraire | GE 6B.Q7, WF 5A.Q7 |
| GE 6B.Q6 | Exchange economy (CD + linear) | GE | Edgeworth box numerical | Contract curve Y_A = X_A; endowment not PO | WF 5B.Q3 |
| GE 6B.Q7 | Walrasian system + existence | GE | Equation counting | 18 eq, Walras => 17 indep, numeraire => unique | WF 5B.Q5 |
| GE 6B.Q8 | Three-good Walras' law | GE | Walras' law | Same as DP 3C.Q2 | DP 3C.Q2 |
| GE 7.Q1 | Bertrand duopoly | Game theory | BR functions | p1 = 30 + p2/4; NE: (40,40) | GE 7.Q2 |
| GE 7.Q2 | Prisoners' Dilemma + oligopoly | Game theory | Payoff matrix | Dominant strategy; tacit collusion fragile | GE 7.Q4, Q5 |
| GE 7.Q3 | Market entry game | Game theory | Extensive form, backward induction | SPNE: (Enter, Accommodate) | GE 7.Q4 |
| GE 7.Q4 | Infinitely repeated grim trigger | Game theory | Discount factor threshold | delta >= 2/3 sustains cooperation | GE 7.Q2, Q5 |
| GE 7.Q5 | Paradox of backward induction | Game theory | Essay + multiple NE | Finite PD unraveling; multiple eq help | GE 7.Q6 |
| GE 7.Q6 | Centipede game | Game theory | Extensive form + backward induction | (1,0) prediction vs experimental (2,2) | GE 7.Q5 |
| GE 8.Q1 | Tragedy of the Commons | Externalities | Intuition | Private cost < social cost => overuse | GE 8.Q2 |
| GE 8.Q2 | Steel-fishery pollution | Externalities | Numerical + Coase | x* > x_social; Coase: bargaining => efficiency | WF 5B.Q4 |
| GE 8.Q3 | Market for Lemons | Asymmetric info | Intuition + numerical | Adverse selection destroys high-quality market | GE 8.Q4 |
| GE 8.Q4 | Spence education signaling | Asymmetric info | PBE separating/pooling | w_H - w_L in [c_H, c_L]; single-crossing | GE 8.Q3 |
| GE 8.Q5 | Bandwagon / Snob effects | Externalities | Definition + diagrams | Positive vs negative consumption externality | GE 8.Q6 |
| GE 8.Q6 | Consumption externality + GE | Externalities | Essay | FWT fails; MRS_A != MRS_B sufficient | GE 8.Q5, WF 5B.Q5 |
| GE 9.Q1 | Tariff + VER welfare | Trade | Numerical DWL | DWL_tariff = 437,500; DWL_VER = 9,285,775 | DP 3C.Q1 |

---

**Summary Statistics:**
- Total questions mapped: ~80 across 4 answer files
- Most cross-referenced model: Cobb-Douglas (appears in 3 topics: CT, WF, GE)
- Most recurring technique: Lagrangian optimization (~25 questions)
- Most cross-source question: "Pareto necessary not sufficient" (3 sources)
- Longest prerequisite chain: Preferences -> UMP -> Walrasian -> Indirect Utility -> Roy's -> EMP -> Hicksian -> Expenditure -> Welfare (9 steps)
