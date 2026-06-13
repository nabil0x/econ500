# Microeconomics — MSc Exam Formula Reference

> **Quick navigation:** [answers-cross-reference.md](./answers-cross-reference.md) (full technique/dependency map) · [ANSWERS-INDEX.md](./ANSWERS-INDEX.md) (all answer files) · [GLOSSARY.md](./GLOSSARY.md) (term definitions) · [EQUATION-EXPLAINER.md](./EQUATION-EXPLAINER.md) (plain-English explanations) · [STUDY-ROADMAP.md](./STUDY-ROADMAP.md) (10-day study plan)
>
> Each formula below links to the answer file where it is derived and used. Click any **[blue link](./answers-consumer-theory.md)** to jump to the relevant question.

## 1 UMP ↔ EMP Duality

**UMP:** $\max_{x\ge 0} u(x)$ s.t. $p\cdot x \le w$
**EMP:** $\min_{x\ge 0} p\cdot x$ s.t. $u(x)\ge u$

| UMP (Primal) | EMP (Dual) |
|---|---|
| [Walrasian demand](./answers-consumer-theory.md#q-cons-1b-01) $x(p,w)$ | [Hicksian demand](./answers-consumer-theory.md#q-cons-1b-03) $h(p,u)$ |
| [Indirect utility](./answers-consumer-theory.md#q-cons-1b-02) $v(p,w)=\max u(x)$ s.t. $p\cdot x\le w$ | [Expenditure function](./answers-consumer-theory.md#q-cons-1b-03) $e(p,u)=\min p\cdot x$ s.t. $u(x)\ge u$ |

**Duality Identities:**
1. $e\bigl(p,\;v(p,w)\bigr)=w$
2. $v\bigl(p,\;e(p,u)\bigr)=u$
3. $h(p,u)=x\bigl(p,\;e(p,u)\bigr)$
4. $x(p,w)=h\bigl(p,\;v(p,w)\bigr)$

**Key Results:**
- [Roy's identity](./answers-consumer-theory.md#q-cons-1b-02): $\displaystyle x_k(p,w)=-\frac{\partial v(p,w)/\partial p_k}{\partial v(p,w)/\partial w}$
- [Shephard's lemma](./answers-consumer-theory.md#q-cons-1b-03): $\displaystyle h_k(p,u)=\frac{\partial e(p,u)}{\partial p_k}$
- [Slutsky equation](./answers-consumer-theory.md#q-cons-1b-04): $\displaystyle\frac{\partial x_k}{\partial p_j}=\underbrace{\frac{\partial h_k}{\partial p_j}}_{\text{SE}}\;-\;\underbrace{x_j\frac{\partial x_k}{\partial w}}_{\text{IE}}$
- Slutsky elasticity form: $\varepsilon_{kj}=\varepsilon_{kj}^h-s_j\varepsilon_{kw}$ with $s_j=p_jx_j/w$
- [Slutsky matrix](./answers-consumer-theory.md#q-cons-1b-04) $S(p,w)\equiv D_ph(p,u)$: NSD, symmetric, $S(p,w)p=0$

---

## 2 Properties Checklist

### Consumer & Utility Functions

| Function | Homogeneity | Monotonicity | Curvature | Other |
|---|---|---|---|---|
| $x(p,w)$ | HD0: $x(tp,tw)=x(p,w)$ | [Walras' law](./answers-consumer-theory.md#q-cons-1b-04) $p\cdot x=w$ | — | Slutsky $S$ [NSD, symmetric](./answers-consumer-theory.md#q-cons-1b-04) |
| $h(p,u)$ | HD0: $h(tp,u)=h(p,u)$ | $u\bigl(h(p,u)\bigr)=u$ | $D_ph$ NSD, symmetric | $S\equiv D_ph$ |
| $v(p,w)$ | HD0: $v(tp,tw)=v(p,w)$ | $\uparrow w,\;\downarrow p_k$ | Quasiconvex in $(p,w)$ | [Continuous](./answers-consumer-theory.md#q-cons-05) |
| $e(p,u)$ | HD1: $e(tp,u)=t\,e(p,u)$ | $\uparrow p_k,\;\uparrow u$ | [Concave](./answers-consumer-theory.md#q-cons-1b-03) in $p$ | Continuous |

### Production & Cost Functions

| Function | Homogeneity | Monotonicity | Curvature | Key Lemma |
|---|---|---|---|---|
| $\pi(p,w)$ | HD1: $\pi(tp,tw)=t\pi(p,w)$ | $\uparrow p,\;\downarrow w_i$ | [Convex](./answers-demand-production.md#q-profit-01) in $(p,w)$ | [Hotelling](./answers-demand-production.md#q-profit-01): $y=\partial\pi/\partial p,\;z_i=-\partial\pi/\partial w_i$ |
| $c(w,y)$ | HD1: $c(tw,y)=t\,c(w,y)$ | $\uparrow w_i,\;\uparrow y$ | [Concave](./answers-demand-production.md#q-prodset-05) in $w$ | [Shephard](./answers-demand-production.md#q-prodset-05): $z_i=\partial c/\partial w_i$ |

---

## 3 Workhorse Utility Forms

### [Cobb-Douglas](./answers-consumer-theory.md#q-cons-1b-01) $u(x)=\prod_{i=1}^n x_i^{\alpha_i},\;\sum\alpha_i=1$
- $x_k(p,w)=\alpha_k w/p_k$
- $v(p,w)=w\prod_{k=1}^n\bigl(\alpha_k/p_k\bigr)^{\alpha_k}$
- $e(p,u)=u\prod_{k=1}^n\bigl(p_k/\alpha_k\bigr)^{\alpha_k}$
- **Properties:** Homothetic; Engel elasticity $=1$; $\varepsilon_{x_k,p_k}=-1$
- **See:** [CT 1B.Q1](./answers-consumer-theory.md#q-cons-1b-01) (Walrasian demand), [Q2](./answers-consumer-theory.md#q-cons-1b-02) (indirect utility), [Q3](./answers-consumer-theory.md#q-cons-1b-03) (EMP/Hicksian), [WF Q3](./answers-welfare.md#q-welfare-03) (EV/CV/CS computation)

### [CES](./answers-demand-production.md#q-prodset-03) $u(x)=\bigl(\sum_{i=1}^n x_i^\rho\bigr)^{1/\rho},\;\rho<1,\;\rho\neq0,\;\sigma=1/(1-\rho)$
- $x_k(p,w)=w\,p_k^{-\sigma}\bigm/\sum_{j}p_j^{1-\sigma}$
- $v(p,w)=w\bigl(\sum_k p_k^{1-\sigma}\bigr)^{-1/(1-\sigma)}$
- $e(p,u)=u\bigl(\sum_k p_k^{1-\sigma}\bigr)^{1/(1-\sigma)}$
- **Properties:** Homothetic; $\rho\to0\Rightarrow$ CD; $\rho\to-\infty\Rightarrow$ [Leontief](./answers-consumer-theory.md#q-cons-1b-06); $\rho\to1\Rightarrow$ perfect substitutes
- **See:** [DP 3A.Q4](./answers-demand-production.md#q-prodset-03) (elasticity of substitution)

### [Quasilinear](./answers-consumer-theory.md#q-cons-1b-07) $u(x)=x_1+\varphi(x_2,\dots,x_n)$ ($p_1=1$ numeraire)
- $x_k(p)=\varphi_k'^{-1}(p_k)\;(k\ge2),\;x_1=w-\sum_{k\ge2}p_kx_k$
- $v(p,w)=w+\bigl[\varphi(x^*)-\sum_{k\ge2}p_kx_k^*\bigr]\equiv w+CS(p)$
- $e(p,u)=u-CS(p)$
- **Properties:** No income effects on $x_{k\ge2}$ ($\partial x_k/\partial w=0$); $CV=EV=CS$
- **See:** [CT 1A.Q10](./answers-consumer-theory.md#q-cons-10) (convex ICs), [CT 1B.Q7](./answers-consumer-theory.md#q-cons-1b-07) (demand derivation), [WF Q5](./answers-welfare.md#q-welfare-05) (Willig bounds)

### [Homothetic](./answers-consumer-theory.md#q-cons-08) $u(x)=F\bigl(g(x)\bigr),\;g$ HD1
- $x(p,w)=\tilde x(p)\,w$ (linear in wealth)
- $v(p,w)=v(p,1)\,w,\quad e(p,u)=e(p,1)\,u$
- **Properties:** Engel curves are rays through origin; CD and CES are special cases
- **See:** [CT 1A.Q8](./answers-consumer-theory.md#q-cons-08) (definition), [CT 1B.Q5](./answers-consumer-theory.md#q-cons-1b-05) (demand focus) | [→ glossary](./GLOSSARY.md#term-homothetic)

---

## 4 Welfare Measurement

- [Consumer surplus](./answers-welfare.md#q-welfare-01): $\displaystyle CS=\int_{p^1}^{p^0}x(p,w)\,dp$
- [Compensating variation](./answers-welfare.md#q-welfare-01): $CV=e(p^0,u^0)-e(p^1,u^0)=w-e(p^1,u^0)$
- [Equivalent variation](./answers-welfare.md#q-welfare-01): $EV=e(p^0,u^1)-e(p^0,u^0)=e(p^0,u^1)-w$

| Price Change | [Normal Good](./answers-welfare.md#q-welfare-02) | [Quasilinear](./answers-welfare.md#q-welfare-05) |
|---|---|---|
| Decrease ($p^1<p^0$) | $EV>CS>CV>0$ | $CV=EV=CS$ |
| Increase ($p^1>p^0$) | $CV<CS<EV<0$ | $CV=EV=CS$ |

**See:** [WF Q1–Q5](./answers-welfare.md#q-welfare-01) (full welfare analysis), [welfare-change-reference.md](./welfare-change-reference.md) (CV/EV/CS theory paper)

---

## 5 Production & Costs

**Profit maximization:** $\pi(p,w)=\max_{y,z}\,p\,y-w\cdot z$ s.t. $y\le f(z)$
- [Hotelling's lemma](./answers-demand-production.md#q-profit-01): $y(p,w)=\partial\pi/\partial p,\;z_i(p,w)=-\partial\pi/\partial w_i$
- Supply function $y(p,w)$; $\pi$ [convex](./answers-demand-production.md#q-profit-01) in $(p,w)$, HD1

**Cost minimization:** $c(w,y)=\min_z\,w\cdot z$ s.t. $f(z)\ge y$
- [Shephard's lemma](./answers-demand-production.md#q-prodset-05): $z_i(w,y)=\partial c/\partial w_i$ (conditional factor demand)
- $c$ [concave](./answers-demand-production.md#q-prodset-05) in $w$, HD1 in $w$, $\uparrow$ in $y$

**Returns to scale & cost shape:**
- [CRTS](./answers-demand-production.md#q-prodset-01) $\iff c(w,y)=y\,c(w,1)$ (AC constant)
- [IRTS](./answers-demand-production.md#q-prodset-01) $\iff$ AC$\downarrow$ with $y$ (economies of scale)
- [DRTS](./answers-demand-production.md#q-prodset-07) $\iff$ AC$\uparrow$ with $y$ (diseconomies)

**[Lerner index](./answers-demand-production.md#q-demand-03):** $\displaystyle\frac{P-MC}{P}=-\frac{1}{\varepsilon}$ where $\varepsilon$ = demand price elasticity
- Perfect competition: $P=MC$, Lerner $=0$
- Monopoly (linear demand): $P=MC/(1+1/\varepsilon)$

**See:** [DP 3A](./answers-demand-production.md#q-prodset-01) (production theory), [DP 3B](./answers-demand-production.md#q-profit-01) (profit function), [DP 3C.Q1](./answers-demand-production.md#q-compet-01) (competitive equilibrium + tax)

---

## 6 General Equilibrium

**[Walras' law](./answers-ge-game-extern-trade.md#q-ge-02):** $p\cdot z(p)=0\;\forall p$ where $z(p)=\sum_i(x_i(p)-\omega_i)-\sum_jy_j(p)$

**Excess demand $z(p)$ properties:** HD0; continuous on $\mathbb{R}_{++}^n$; satisfies Walras' law; boundary behavior ($p_k\to0\Rightarrow z_k(p)\to+\infty$)

**Existence:** If $z(p)$ continuous, HD0, obeys Walras' law, and has boundary behavior $\Rightarrow\exists p^*>0$: $z(p^*)=0$

**[FWT](./answers-welfare.md#q-pareto-05) (First Welfare Theorem):** Under local nonsatiation, every Walrasian (competitive) equilibrium allocation is Pareto optimal.

**[SWT](./answers-welfare.md#q-pareto-05) (Second Welfare Theorem):** If preferences and production sets are convex, any Pareto optimal allocation can be decentralized as a CE with lump-sum transfers.

**See:** [GE 6A](./answers-ge-game-extern-trade.md#q-ge-01) (GE concepts), [GE 6B](./answers-ge-game-extern-trade.md#q-edge-01) (Edgeworth box, 2×2×2), [WF 5B.Q5](./answers-welfare.md#q-pareto-05) (Welfare Theorems)

---

## 7 Game Theory Essentials

**Normal form:** $G=(N,\{S_i\},\{u_i\})$

**[Nash equilibrium](./answers-ge-game-extern-trade.md#q-game-01):** $s^*$ s.t. $u_i(s_i^*,s_{-i}^*)\ge u_i(s_i,s_{-i}^*)\;\forall s_i\in S_i,\forall i$

**[Dominant strategy](./answers-ge-game-extern-trade.md#q-game-02):** $s_i^D$ is dominant if $u_i(s_i^D,s_{-i})>u_i(s_i',s_{-i})\;\forall s_{-i},\forall s_i'\neq s_i^D$

**[Prisoner's Dilemma](./answers-ge-game-extern-trade.md#q-game-02)** ($T>R>P>S,\;T+S<2R$):
| | Cooperate | Defect |
|---|---|---|
| Cooperate | $R,R$ | $S,T$ |
| Defect | $T,S$ | $P,P$ |

NE = $(\text{Defect},\text{Defect})$ (strictly dominant). In repeated PD: cooperation sustainable if $\delta\ge(T-R)/(T-P)$ (see [Folk Theorem](./answers-ge-game-extern-trade.md#q-game-04)).

**Mixed strategy:** $\sigma^*$ is a mixed NE if for each $i$, every pure $s_i$ in the support yields equal expected payoff.

**[Subgame perfect equilibrium](./answers-ge-game-extern-trade.md#q-game-03):** Strategy profile that is a NE in every subgame; solved via backward induction.

**See:** [GE 7](./answers-ge-game-extern-trade.md#q-game-01) (Bertrand, PD, entry, grim trigger, unraveling, centipede)

---

## 8 Externalities & Public Goods

**[Negative externality](./answers-ge-game-extern-trade.md#q-extern-02):** Optimal [Pigouvian tax](./answers-welfare.md#q-pareto-04) $t=MED$ (marginal external damage at $Q^*$)
- With tax: $PMC+t=SMC\Rightarrow$ private $\to$ social optimum

**[Coase theorem](./answers-ge-game-extern-trade.md#q-extern-02):** If property rights well-defined, zero transaction costs, small number of agents $\Rightarrow$ private bargaining attains efficiency independently of initial rights allocation.

**Samuelson condition (public good):** $\displaystyle\sum_{i=1}^n MRS_{G,x}^i = MRT_{G,x}$
- Private goods: $MRS_i=MRT$ for each $i$ (individual condition)
- Public goods: sum of MRS = MRT (aggregate condition)

**[Lindahl prices](./GLOSSARY.md#term-lindahl):** Personalized prices $p_G^i$ s.t. $MRS^i=p_G^i$ and $\sum_ip_G^i=MC_G$

**[Free rider problem](./answers-ge-game-extern-trade.md#q-extern-01):** Non-excludability $\Rightarrow$ each agent under-contributes to public good; Nash equilibrium voluntary contributions fall short of Samuelson optimum.

**See:** [GE 8](./answers-ge-game-extern-trade.md#q-extern-01) (tragedy of commons, steel-fishery, lemons, Spence signaling, bandwagon/snob), [WF 5B.Q4](./answers-welfare.md#q-pareto-04) (Pigouvian tax numerical)

---

## 9 Cross-Course Connections

Microeconomic theory is the foundation for several other MSc economics courses. Here is where each micro concept reapplies:

| Micro Concept | Appears In | Why It Matters There |
|---|---|---|
| **Cobb-Douglas production** | [Macro (Solow model)](../macroeconomics/basics.md) | $Y = K^\alpha(AL)^{1-\alpha}$ is the workhorse aggregate production function; determines steady-state income |
| **Optimization (UMP/EMP)** | [Macro (Ramsey model)](../macroeconomics/basics.md) | Household intertemporal optimization uses same Lagrangian + FOC structure |
| **General Equilibrium stability** | [Macro (Solow convergence)](../macroeconomics/basics.md) | Conditional convergence to steady state = GE uniqueness/stability logic |
| **Pareto optimality** | [Macro (Golden Rule)](../macroeconomics/basics.md) | Golden Rule $f'(k^*) = n+g+\delta$ is a Pareto-efficient steady state |
| **Market failure (externalities)** | [Development (resource curse)](../503-Development/basics.md) · [Political Economy (intervention)](../512-Political-Economy/basics.md) | Venezuela oil dependency; state vs market debate |
| **Comparative advantage** | [Dev (trade specialization)](../503-Development/basics.md) · [Pol Econ (free trade)](../512-Political-Economy/basics.md) | RMG export concentration; WTO AoA critique |
| **DWL of tariffs/taxes** | [Trade (GE 9.Q1)](./answers-ge-game-extern-trade.md#q-trade-01) · [Pol Econ (tariff policy)](../512-Political-Economy/basics.md) | $½ \times t \times \Delta Q$ applied to trade policy |
| **Asymmetric information** | [Health (Lemons, SID)](../health-economics/basics.md) · [Pol Econ (MNC behavior)](../512-Political-Economy/basics.md) | Akerlof lemons → health insurance markets; OLI paradigm |
| **Game theory (PD)** | [Political Economy (trade negotiations)](../512-Political-Economy/basics.md) | Prisoners' Dilemma models tariff wars and WTO enforcement |
| **Consumer/producer surplus** | [Health (CEA/CUA, QALYs)](../health-economics/basics.md) · [Dev (project CBA)](../503-Development/basics.md) | Welfare measurement tools applied to health and development projects |
| **Production theory** | [Development (dual economy)](../503-Development/basics.md) | Lewis structural transformation; sectoral productivity gaps |

**Full cross-course reference:** [Cross-Links in README](./README.md#cross-course-links) · [Cross-cutting themes in index.md](../index.md#key-cross-cutting-themes)
