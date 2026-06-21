# 14-Mark Answer Structure Template — Macroeconomics

> **Time per question:** ~12 minutes (14 marks). Use this. Not optional. Learn it before exam day.
> **Exam format:** 8 questions x 14 marks, answer any 5 from 8, 4 hours, 70 marks total.
> **Topics:** Solow, Ramsey, Endogenous Growth, OLG, R&D Monopolistic Competition, RBC, New Keynesian.

---

## Phase 1: Plan (2 minutes)

**Do NOT skip this.** Most point loss comes from answering the wrong question.

| Step | Action |
|------|--------|
| 1 | Read the question. Circle the **model** (Solow? Ramsey? Romer? OLG? RBC? NK?) and the **technique** (phase diagram? Euler derivation? BGP comparison? essay? comparative statics?) |
| 2 | Jot down: key equation (k-dot, Euler, NKPC, knowledge accumulation), diagram axes, chain of reasoning (3-5 words each) |
| 3 | Decide: can I answer fully, or do I need a partial answer strategy? If stuck, note the nearest related mechanism and pivot |

**The 3-second question classifier:**
- "Define/Describe/Explain" -> **Theory/Definition** (emphasise A, D, E)
- "Derive/Compute/Solve" -> **Derivation/Numerical** (emphasise B, C, D)
- "Compare/Contrast/Distinguish" -> **Comparison** (emphasise A, C, D)
- "Discuss/Evaluate/Critically analyse" -> **Essay/Evaluation** (emphasise D, E)

## Phase 2: Write (10 minutes)

### (a) Definition / Setup -- 2 marks (~1.5 min)

State the model framework. Define variables. List assumptions.

> The [model] considers [core structure]. Key assumptions: [1], [2], [3]. Key variables: [define k, c, A, L, etc.].

**Checklist:** [ ] Named model + theorist [ ] Defined all variables before use [ ] Assumptions explicit

### (b) Mathematical Derivation -- 4 marks (~3 min)

Set up the problem. Derive the key equation. Show every step.

> Start from [base equation]. Substitute [definition] to get [intermediate]. Rearranging: [key result]. At steady state/BGP: [condition] -> [closed-form result].

**Hamiltonian (Ramsey):** H = u(c)e^{-rho t} + lambda[f(k)-c-(n+g+delta)k]; FOCs: dH/dc=0, dH/dk=-lambda-dot -> Euler equation.

**Checklist:** [ ] Base equation correct [ ] Per-effective-worker transform [ ] SS/BGP condition applied [ ] Closed-form result [ ] Time derivatives correct

### (c) Diagram / Graphical Analysis -- 4 marks (~3 min)

Draw, label, explain. Worth its own marks.

> Figure 1 shows the [k-dot/c-dot] phase diagram. The [k-dot=0] locus is [shape] because [reason]. The [c-dot=0] locus is [shape]. Steady state at [k*, c*]. Saddle path [direction].

**Checklist:** [ ] Axes labelled [ ] All loci labelled [ ] Equilibrium shown [ ] Directional arrows [ ] Saddle/transition path [ ] Caption explains

### (d) Intuition & Economic Interpretation -- 2 marks (~1.5 min)

Translate maths into plain English.

> Economically, [result] occurs because [intuition]. The mechanism: [mechanism]. In words: [one sentence].

**Macro anchors:** Solow: diminishing returns. Ramsey: consumption smoothing. Endogenous: non-rival knowledge. OLG: finite horizon. RBC: tech shocks + intertemporal substitution. NK: nominal rigidities.

### (e) Evaluation / Extensions -- 2 marks (~1 min)

Link to other models. Note a limitation.

> This connects to [model] because [connection]. Limitation: [caveat]. See also: [topic].

---

## Phase 3: Review (2 minutes)

| Check | Question |
|-------|----------|
| **Relevance** | Did I answer the actual question, or a related one? |
| **Diagram** | Are all axes, curves, loci, and equilibrium points labelled? |
| **Variables** | Did I define every symbol before using it? |
| **Algebra** | Any sign errors? Did I drop a term? Is k-dot correctly signed? |
| **Cross-ref** | Can I add a "See also" for bonus polish? |

## Question Type -> Structure Map

| Question Type | Example | Emphasise | Rush / Skip | Mark Strategy |
|---|---|---|---|---|
| **Derivation/ Diagram-Heavy** | Derive k-dot phase diagram; Euler from Hamiltonian | B (full derivation), C (phase diagram), D (intuition) | E (one sentence) | B is where the marks live. Derive both DEs. Draw all 4 quadrants with arrows. |
| **Theory / Definition** | Define CE / BGP / competitive equilibrium | A (definitions + assumptions), D, E | B (light maths), C (simple sketch) | Get A perfect. Make definitions precise and complete. |
| **Comparison** | Semi-endogenous vs fully endogenous | A (define both), C (phase space), D (intuition) | B (minimal derivation), E (short) | Comparison table is the centrepiece. Then phase diagram showing both regimes. |
| **Numerical / Derivation** | Solve OLG two-period max with log utility | B (full derivation), A (setup), D (intuition) | C (simple diagram if time), E (short) | Show every algebraic step. Write both budget constraints explicitly. |
| **Essay / Evaluation** | Welfare effects of govt spending in Ramsey; evaluate conditional convergence | A (setup), D (heavy), E (extensions) | B (light maths), C (one core diagram) | Structure: claim of model -> mechanism -> welfare implication -> caveat. |
| **Comparative Statics** | Depreciation shock in Solow; n increase in R&D model | C (shift loci, new equilibrium, transition), B (algebra) | A (brief), E (short) | Show old and new equilibrium. Trace transition path step by step. |

---

## Worked Example 1: Derivation / Diagram-Heavy

**Q:** "Derive the Solow fundamental equation and phase diagram."

**Plan:** Model = Solow. Technique = derivation + diagram. Y = K^alpha(AL)^(1-alpha). Axes: k vs sf(k) and (n+g+delta)k.

**(a) Setup (2 marks):** Neoclassical growth model, CRS Cobb-Douglas, L grows at n, A at g, depreciation delta, saving rate s. k = K/(AL), y = k^alpha.

**(b) Derivation (4 marks):** dK/dt = sY - delta K. Per eff. worker: dk/dt = s k^alpha - (n+g+delta)k. SS: k* = [s/(n+g+delta)]^(1/(1-alpha)), y* = k*^alpha.

**(c) Diagram (4 marks):** k (x) vs sf(k) and (n+g+delta)k. sf(k) concave, break-even linear. k<k*: sf(k) > break-even -> k rises. k>k*: sf(k) < break-even -> k falls. Monotonic convergence to k*. Label k*, y*, c*.

**(d) Intuition (2 marks):** Diminishing returns drive convergence. Low k: investment exceeds erosion. High k: falls short. Steady state balances investment against delta, n, g.

**(e) Evaluation (2 marks):** Connects to Ramsey (endogenous saving). Speed lambda = (1-alpha)(n+g+delta), half-life ~13yr. Limitation: exogenous s.

---

## Worked Example 2: Comparison

**Q:** "Compare semi-endogenous and fully endogenous growth models."

**Plan:** Model = R&D growth (Romer/GH/AGH). Technique = comparison + (g_A, g_K) phase space. Diff: beta+theta<1 vs beta+theta=1.

**(a) Setup (2 marks):** R&D: dA/dt = B(a^K K)^beta(a^L L)^theta A^phi. Semi-endogenous (beta+theta<1, n>0): growth depends on parameters and n. Fully endogenous (beta+theta=1, n=0): scale effect.

**(b) Derivation (4 marks):** dg_A/dt/g_A = beta g_K + theta n + (phi-1)g_A. BGP: g_K = g_A + n. Semi-endogenous: g_A^* = (beta+theta)n/(1-phi-beta). Fully: dg_A/dt=0; g_A depends on a^L,a^K.

**(c) Diagram (4 marks):** g_A (x) vs g_K (y). dg_A/dt=0 slopes down. BGP line g_K = g_A + n. Semi: unique intersection. Fully: parameter-dependent; a^L shifts growth permanently.

**(d) Intuition (2 marks):** Semi: phi<1 -> diminishing returns to knowledge; population growth drives per capita growth. Fully: phi=1 -> one-time R&D increase permanently raises growth. Jones critique favours semi-endogenous.

**(e) Evaluation (2 marks):** Connects to Solow and R&D monopolistic competition. Limitation: deep parameters (beta, phi, theta) hard to estimate.

---

## Worked Example 3: Essay

**Q:** "Describe the New Keynesian IS-PC-Taylor rule three-equation model."

**Plan:** Model = NK DSGE (IS + PC + Taylor rule). Technique = essay with diagram. Variables: x (output gap), pi, i, r^n.

**(a) Setup (2 marks):** NK IS (forward-looking demand), NKPC (Calvo pricing), Taylor rule (monetary policy). Assumes monopolistic competition, sticky prices, rational expectations. r_t^n = rho + sigma^{-1}g.

**(b) Derivation (4 marks):** NK IS: x_t = E_t x_{t+1} - (1/sigma)(i_t - E_t pi_{t+1} - r_t^n). NKPC: pi_t = beta E_t pi_{t+1} + kappa x_t. Taylor: i_t = r_t^n + pi^* + phi_pi(pi_t-pi^*) + phi_x x_t, phi_pi>1.

**(c) Diagram (4 marks):** x vs pi. NKPC upward-sloping, MR downward-sloping. Equilibrium at x*=0, pi=pi^*. Cost-push shifts NKPC up -> negative output gap to disinflate.

**(d) Intuition (2 marks):** IS: output gap responds to real rate. PC: inflation depends on expected inflation and output via price-setting. Taylor: central bank stabilises both. Divine coincidence holds without cost-push shocks.

**(e) Evaluation (2 marks):** Connects to RBC and Lucas supply curve. Limitation: rational expectations + representative agent. Taylor principle crucial for determinacy.

---

## Common Time Traps

| Trap | Why it kills you | Solution |
|------|------------------|----------|
| **Over-deriving algebra** | 6 min on algebra for 4 marks, 1 min left for 4 marks of diagram | Timebox derivation to 3 min. Sketch result and move on. |
| **Diagram before definitions** | Beautiful diagram but lost first 2 marks because variables undefined | Force yourself: define first, then draw. The 2+4 ordering is deliberate. |
| **Wrong model setup** | Ramsey Hamiltonian when question asks for Solow steady state | Phase 1 "model" check prevents this. Never skip it. |
| **Forgetting steady state** | Derive k-dot correctly but never set it to zero to find k* | End derivation by imposing steady-state/BGP condition. |
| **No cross-reference** | Losing 2 easy marks -- no link to other models | Keep 30s for a "See also" connecting to OLG, RBC, or Endogenous Growth. |
| **Phase diagram arrows** | Arrows in wrong region (above c-dot=0 locus) | Test one point in each region before drawing arrows. |

---

## Quick Reference Card (Memorise This)

```
14 marks = 12 minutes

Phase 1: PLAN    (2 min)  Model? Technique? Key equation? Diagram axes?
Phase 2: WRITE  (10 min)  a) Define (2) -> b) Derive (4) -> c) Diagram (4) ->
                           d) Intuition (2) -> e) Evaluate (2)
Phase 3: REVIEW  (2 min)  Relevance? Loci labels? Variables? Algebra? Cross-ref?

Question types -> emphasis:
  Derivation/Diagram:  B > C > D > A > E
  Theory/Def:          A > D > E > C > B
  Comparison:          A > C > D > B > E
  Numerical/Derivation:B > A > D > C > E
  Essay/Evaluation:    D > E > A > C > B
  Comparative Statics: C > B > D > A > E

Key macro equations:
  Solow:        k-dot = s k^alpha - (n+g+delta)k
  Ramsey Euler: c-dot/c = (1/theta)(f'(k) - rho - theta g - delta)
  CRRA:         u(c) = (c^{1-theta} - 1)/(1-theta)
  R&D growth:   dA/dt = B (a^K K)^beta (a^L L)^theta A^phi
  NKPC:         pi_t = beta E_t pi_{t+1} + kappa x_t
  Taylor rule:  i_t = r^n + phi_pi pi_t + phi_x x_t,  phi_pi > 1
```
